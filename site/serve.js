#!/usr/bin/env node
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGzip, createBrotliCompress } from 'node:zlib';
import { pipeline } from 'node:stream';

const PORT = Number(process.env.PORT || 3000);
const ROOT = path.dirname(fileURLToPath(import.meta.url));
const MIME = {
  '.pdf': 'application/pdf',
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8', '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif',
  '.webp': 'image/webp', '.avif': 'image/avif', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.otf': 'font/otf',
  '.mp4': 'video/mp4', '.webm': 'video/webm', '.ogg': 'video/ogg',
  '.vtt': 'text/vtt; charset=utf-8', '.framercms': 'application/octet-stream',
};
const textExtensions = new Set(['.html', '.css', '.js', '.mjs', '.json', '.svg', '.vtt']);

function insideRoot(file) {
  const relative = path.relative(ROOT, file);
  return relative !== '..' && !relative.startsWith('..' + path.sep) && !path.isAbsolute(relative);
}
function isFile(file) {
  try { return fs.statSync(file).isFile(); } catch { return false; }
}
function locate(urlPath) {
  if (urlPath === '/') return path.join(ROOT, 'index.html');
  if (/^\/product\/tier0-platform\/?$/.test(urlPath)) return path.join(ROOT, 'supplemental/index.html');
  if (/^\/resource\/downloads\/?$/.test(urlPath)) return path.join(ROOT, 'supplemental/subpages/resource_downloads.html');
  if (!path.extname(urlPath)) {
    const slug = urlPath.replace(/^\/+|\/+$/g, '').replace(/[^a-zA-Z0-9_-]/g, '_').replace(/_+/g, '_');
    const candidate = path.join(ROOT, 'subpages', slug + '.html');
    return isFile(candidate) ? candidate : path.join(ROOT, 'index.html');
  }
  return path.resolve(ROOT, '.' + urlPath);
}
function encodingAllowed(header, encoding) {
  return header.split(',').some(part => {
    const [name, ...params] = part.trim().toLowerCase().split(';');
    const quality = params.find(p => p.trim().startsWith('q='));
    return name === encoding && (!quality || Number(quality.trim().slice(2)) > 0);
  });
}

const server = http.createServer((req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { Allow: 'GET, HEAD' }); res.end(); return;
  }
  let pathname;
  try { pathname = decodeURIComponent(req.url.split('?')[0]); }
  catch { res.writeHead(400); res.end('Bad request'); return; }
  if (pathname.includes('\0') || !insideRoot(path.resolve(ROOT, '.' + pathname))) {
    res.writeHead(403); res.end('Forbidden'); return;
  }
  if (/\/(?:resource\/)?downloads-info(?:\.html)?\/?$/.test(pathname)) {
    res.writeHead(302, { Location: '/resource/downloads', 'Cache-Control': 'no-store' }); res.end(); return;
  }
  const file = locate(pathname);
  if (!insideRoot(file) || !isFile(file)) { res.writeHead(404); res.end('Not found'); return; }
  const stat = fs.statSync(file);
  const ext = path.extname(file).toLowerCase();
  const etag = `"${stat.size.toString(16)}-${Math.trunc(stat.mtimeMs).toString(16)}"`;
  const versioned = /[?&]v=[^&]+/.test(req.url) || /noto-sc-(?:home|pages)-[a-f0-9]+\.woff2$/.test(file);
  const headers = {
    'Content-Type': MIME[ext] || 'application/octet-stream',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': ext === '.html' ? 'no-cache' : versioned ? 'public, max-age=31536000, immutable' : 'public, max-age=604800',
    'Last-Modified': stat.mtime.toUTCString(), ETag: etag, 'Accept-Ranges': 'bytes',
  };
  if (textExtensions.has(ext)) headers.Vary = 'Accept-Encoding';
  if (req.headers['if-none-match'] === etag) { res.writeHead(304, headers); res.end(); return; }
  let start = 0, end = stat.size - 1, status = 200;
  const range = req.headers.range;
  const ifRange = req.headers['if-range'];
  if (range && (!ifRange || ifRange === etag || ifRange === stat.mtime.toUTCString())) {
    const match = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (match && (match[1] || match[2])) {
      if (match[1]) { start = Number(match[1]); end = match[2] ? Math.min(Number(match[2]), end) : end; }
      else { start = Math.max(0, stat.size - Number(match[2])); }
    }
    if (!match || !(match[1] || match[2]) || start > end || start >= stat.size || (match[1] === '' && Number(match[2]) === 0)) {
      res.writeHead(416, { ...headers, 'Content-Range': `bytes */${stat.size}` }); res.end(); return;
    }
    status = 206; headers['Content-Range'] = `bytes ${start}-${end}/${stat.size}`;
  }
  let encoding;
  if (status === 200 && stat.size > 1024 && textExtensions.has(ext)) {
    const accepted = req.headers['accept-encoding'] || '';
    encoding = encodingAllowed(accepted, 'br') ? 'br' : encodingAllowed(accepted, 'gzip') ? 'gzip' : undefined;
  }
  if (encoding) headers['Content-Encoding'] = encoding;
  else headers['Content-Length'] = end - start + 1;
  res.writeHead(status, headers);
  if (req.method === 'HEAD') { res.end(); return; }
  const input = fs.createReadStream(file, { start, end });
  const onError = error => { if (error && !res.destroyed) res.destroy(error); };
  if (encoding) pipeline(input, encoding === 'br' ? createBrotliCompress({ params: { 1: 4 } }) : createGzip(), res, onError);
  else pipeline(input, res, onError);
});
server.listen(PORT, process.env.HOST || '127.0.0.1', () => {
  console.log(`Tier0 static site: http://${process.env.HOST || '127.0.0.1'}:${PORT}`);
});
