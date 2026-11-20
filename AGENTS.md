# 网站维护约定

- `site/` 是唯一维护源，使用 page-manifest.json 定位实际页面。平台总览和下载页使用 supplemental 文件。
- 先检查 git status 并获取远端状态，保留他人修改；使用分支和 PR 协作。
- 保留 Framer 原生导航、footer、文档中文链接、新标签页登录/问卷行为。新增解决方案使用 `.agents/skills/tier0-solution-page/SKILL.md`。
- 全站 IBM Plex Sans SC；AI 保持写作 AI。新增文案须检查本地字体子集是否有对应字形。
- 检查桌面1490、平板882、手机390及受影响断点；验证页面内容、实际点击、叠加收尾、无单字落行和横向溢出。HTTP 200 不是页面正确的充分条件。
- 页面加载必须先规范尾斜杠路径，保留 HTML head 中 data-tier0-canonical-route 脚本，否则生产目录路由会让 Framer 错渲染首页。
- 新增或替换公开页面时，同步更新 `site/page-manifest.json` 的页面条目和 `pages` 计数，`site/supplemental/` 下的独立页面也适用。参照 `site/index.html`，在 `<head>` 的尾斜杠规范脚本之后异步引入一次共用 GeoIP 脚本，版本以 `tools/validate.py` 中的 `GEO_SCRIPT` 为准。提交前用 `npm run check` 校验页面清单和脚本引用。
- CSS/JS 有不可变缓存，修改后同步更新引用查询版本。不要运行旧 workspace 的构建脚本覆盖本仓库。
- 提交前运行 npm run check。ZIP、私钥、环境文件、诊断截图/录屏、node_modules、dist 不提交。
- 推送、合并、创建 Release 不代表生产发布授权。发布需要用户当次明确要求，并按实际运维提供的流程先校验、备份再上线；本公开仓库不含 SSH 凭据。
