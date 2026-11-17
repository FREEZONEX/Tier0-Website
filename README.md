# Tier0 中文官网

当前源码对应 2026-11-17 已上线版本，包含 MES 页面、本地 PDF 下载及下载页路由修复。`site/` 是唯一网站维护源；发版 ZIP 放 GitHub Releases，不提交进 Git。

## 本地运行

需要 Node.js 20+、Python 3，无 npm 依赖。

```sh
npm start
# http://localhost:3000/
npm run check
npm run package -- --version 2026.11.17.1
```

ZIP 和 SHA256 输出至 `dist/`（已忽略）。本地预览、推送代码、创建 Release 均不会自动发布生产。

## 维护

- 一个分支处理一项修改，通过 PR 评审后合并。
- 路由依据 `site/page-manifest.json`；下载页和平台总览使用 supplemental 文件，勿改错快照。
- 修改 CSS/JS 后更新缓存版本；检查桌面、平板、手机以及真实按钮点击。
- 新解决方案页调用项目 skill：`.agents/skills/tier0-solution-page/SKILL.md`。
- 视频、PDF 是现有官网公开资源。后续大文件请评估 Git LFS 或对象存储，避免反复提交二进制版本。
- 本仓库为公开仓库。不要提交凭据、环境变量、SSH 私钥、用户资料、部署工具密钥包或诊断录屏。

发布步骤见 [docs/releasing.md](docs/releasing.md)，维护规则见 [AGENTS.md](AGENTS.md)。
