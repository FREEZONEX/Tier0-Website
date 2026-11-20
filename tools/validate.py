#!/usr/bin/env python3
"""Local package checks; production resource and visual checks remain separate."""
import json
import re
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / 'site'
GEO_SCRIPT = 'geo-guidance.v1.js'

def validate():
    manifest = json.loads((SITE / 'page-manifest.json').read_text(encoding='utf-8'))
    entries = manifest['entries']
    if len(entries) != manifest['pages'] or len(entries) < 20:
        raise ValueError('Manifest page count is inconsistent or unexpectedly small')
    for asset in [SITE / 'scripts' / GEO_SCRIPT, SITE / 'styles' / Path(GEO_SCRIPT).with_suffix('.css')]:
        if not asset.is_file():
            raise ValueError(f'Missing GeoIP asset: {asset.relative_to(SITE)}')
    geo_script = re.compile(r'''<script\b[^>]*\ssrc\s*=\s*["'][^"']*/scripts/geo-guidance\.[^"']+["'][^>]*>''')
    expected_geo_script = f'<script async src="/scripts/{GEO_SCRIPT}">'
    paths = set()
    for entry in entries:
        file = (SITE / entry['file']).resolve()
        if not file.is_relative_to(SITE) or not file.is_file():
            raise ValueError(f'Missing or invalid page: {entry["file"]}')
        path = urlsplit(entry['url']).path.rstrip('/') or '/'
        if path in paths:
            raise ValueError(f'Duplicate route: {path}')
        paths.add(path)
        html = file.read_text(encoding='utf-8')
        if '/styles/site-fonts.css?' not in html:
            raise ValueError(f'Missing shared font CSS: {entry["file"]}')
        if geo_script.findall(html) != [expected_geo_script]:
            raise ValueError(f'Expected one async GeoIP script for the current version: {entry["file"]}')
    font_css = (SITE / 'styles/site-fonts.css').read_text()
    for font in re.findall(r'url\("(/assets/fonts/[^"?]+)', font_css):
        if not (SITE / font.lstrip('/')).is_file():
            raise ValueError(f'Missing font: {font}')
    pem = re.compile(rb'^-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----\r?$', re.M)
    for folder in [SITE, ROOT / 'deploy', ROOT / 'docs', ROOT / '.agents']:
        for file in folder.rglob('*'):
            if file.is_file():
                if file.suffix == '.zip' or pem.search(file.read_bytes()):
                    raise ValueError(f'Archive/private key must not be committed: {file.relative_to(ROOT)}')
    print(f'OK: {len(entries)} pages; shared font and GeoIP references exist; no private key or ZIP in maintained content.')
    print('Run browser checks and server dry-run before production release.')
    return len(entries)

if __name__ == '__main__':
    validate()
