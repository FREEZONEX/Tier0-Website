# 首屏传输压缩检查

本目录配置为待运维审查的建议，不会随站点包自动应用，也不表示生产配置已经改变。

2026-11-18 首页 Lighthouse 观察：公网 HTML/JS 响应未见 Content-Encoding，HTML 约1.41MB。应同时检查源站和阿里云 CDN 的文本压缩开关。

1. 确认线上真实 Nginx/CDN 链路及现有 gzip/Brotli 设置，保留 TLS、sub_filter、反向代理和其他站点配置。将 gzip-text.conf 中适用配置合入对应作用域，避免重复指令。
2. 若 CDN 有压缩开关，启用 HTML/CSS/JS/JSON/SVG 的 Gzip；Brotli 仅在平台/模块确实支持时启用。不要压缩 mp4、PDF、woff2。
3. 先 nginx -t，通过后按运维流程 reload；保留原配置以便回滚。应用前后均检查登录域名改写、ICP备案和 PDF Range 行为。
4. 用浏览器请求实际使用的版本化 URL，对比带 Accept-Encoding 与 identity 的响应。应出现 Content-Encoding: gzip 或 br，传输字节应减少。
5. CDN 缓存需区分编码（Vary: Accept-Encoding 或平台等效缓存键），避免把 identity 版本命中给压缩客户端；按运维流程刷新受影响缓存。

只看源站配置文件或 CDN HIT 不代表最终用户收到压缩内容。验收必须看公网最终 GET 响应头与传输大小；不要仅用 HEAD 推断。

```sh
curl -sS -H 'Accept-Encoding: gzip, br' -D /tmp/tier0-encoded.headers -o /tmp/tier0-encoded.bin https://tier0.cn/
curl -sS -H 'Accept-Encoding: identity' -D /tmp/tier0-identity.headers -o /tmp/tier0-identity.bin https://tier0.cn/
wc -c /tmp/tier0-encoded.bin /tmp/tier0-identity.bin
```

源码侧仅使首页首屏文字提前可见、预加载已使用的400字重；IBM Plex Sans SC 仍使用现有 font-display:swap。首屏文字不再执行逐字淡入/模糊入场，后续区块的动画保持。

复测必须使用相同 Lighthouse 版本、真实设备配置、冷缓存、每组3次中位数；本地值不与线上值直接作为优化收益对比。
