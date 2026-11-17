# Current project reference

Snapshot: 2026-11-17. Verify live files before use; paths and query versions can change.

## Locate the active source

This repository's `site/` is the single maintenance source, relative to the repository root. Do not use old `outputs/` copies from the original export workspace. Run `npm start` for local preview (default localhost:3000; `PORT=3105 npm start` uses 3105). MES reference: `/solution/mes`; WMS reference: `/solution/wms`.

All source paths below are relative to `site/`. Historical diagnostic scripts under `work/` are not shipped in this repository; create new local evidence as needed.

Reference HTML: `subpages/solution_mes.html`, `subpages/solution_wms.html`.
MES preserves native Framer header `.framer-9lMB7`, footer `.framer-ZtfjZ` and engineering-service `.framer-8ctdnk`; content is mounted from `#mes-content-template` by `scripts/mes-shell.js`. It is not a conventional React source project.

Read `mes-shell.js` to discover the actual script chain. Current behavior includes `mes-layout.js`, `mes.js`, `mes-hero-rich.js`, `mes-sidebar-match.js`, `mes-content-variety.js`, `mes-content-refinement.js`, `mes-visual-polish.js`, `mes-detail-finish.js` and `mes-lucide.js`. Current CSS has several overrides; final behavior is in `styles/mes-detail-finish.css`. Do not blindly clone stale scratch builders under `work/`.

Shared navigation: `scripts/navigation-consistency.js`. It normalizes links, clones native rows, adds MES, assigns solution ordering and forces full-document navigation to avoid Framer SPA shell persistence. If extending it, preserve native SVG assets and keep full row spacing. Footer MES originally cloned only a paragraph inside WMS's row, which caused incorrect gaps: clone the whole RichTextContainer row.

Check `serve.js` and the site's manifest for routing rather than assuming URL-to-file mappings. Current overview and downloads use supplemental paths.

## Visual tokens

- Main ink #050b14; brand lime #b2ed1d; icon strokes green #73b200.
- Canvas #f9f9f9; white illustration cards; diagram border #a2d81a, radius 4px.
- Diagram process group rgb(249,255,235), dashed #73b200; icon tile rgb(203,243,104), 48px, radius 7px; diagram focus rgb(220,247,151).
- Agent/monitor/energy outer gradient: `linear-gradient(180deg,rgba(178,237,30,.2),rgba(178,237,30,.4))`, 16px padding, white internal application panel.
- App header icon tile: lime, 28px, radius 6px, Lucide icon 18px. Keep consistent across illustrations.
- Energy-like tabs: no border, black text, weight 500, neutral-gray selected background. Use meaningful green on charts rather than on every control.
- Native hero static grid: 50px spacing, 1px lines, rgba(5,11,20,.02). Do not add a second static grid on the hero section.
- Hero black image `/assets/images/rWk246mR3EIdETS2sGP2UVqGmAI.png`; engineering-service native image `/assets/images/56e9Et8KjR53hTiChM69qWqslE.png`.

Native WMS canvas lives in `.framer-1o0p5mq-container`. Its implementation is in `scripts/vendor/UIIOtbKw0ARUCMbFJsidtnAC4b8Uie29Nyu2cIX6Ruc.CiPSlD_P.mjs`: baseSpeed 1, maxLines 9, spawnProbability .08, lineLength 150, cellSize 50. Reuse the component, do not change vendor behavior globally. MES moves the live canvas into its hero and sizes it to the hero region.

Native blur behavior in `scripts/vendor/CoveredDepth.CpvS7AHa.mjs`: `progress=clamp(1-(nextTop-80)/320,0,1)`, opacity `1-.78*progress`, blur `4*progress`px. White card coverage remains opaque while its content fades. Desktop sticky top 80px; small layouts use normal flow. Respect reduced motion.

The WMS stack has a trailing 400px spacer. A real trailing element, rather than padding alone, gives the last sticky section a hold interval. Read current `.mes-stack-tail`, final-section and retired-layer rules together. Preserve the user's accepted behavior, including section 08 breathing room and reverse-scroll restoration.

## Local assets and checks

Fonts: `styles/site-fonts.css`, IBM Plex Sans SC local subsets. Icons: `assets/icons/lucide/`, with license; `scripts/mes-lucide.js` returns SVG via `MESLucide(name,size)` when loaded. Add a needed official Lucide asset rather than using emoji or an unrelated icon.

Puppeteer import relative to `work/`: `../FramerExport/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js`. Launch headless with `--no-sandbox` if the environment requires it. Existing QA scripts under `work/` are examples, not guaranteed current assertions. Reports: `outputs/tier0-cn-migration-20261116/reports/`.

Screenshot-based interactive demos are sometimes wrapped in `a.shot` links to old images. Replace the wrapper with a non-link container before adding buttons; otherwise genuine mouse clicks may navigate away.

Never edit `outputs/t02801-site-performance/`, `outputs/t02801-site/` or the production ZIPs as a side effect of a test-page task. Do not package temporary QA screenshots, source documents, credentials or build scratch files into the website archive.

## Hero chat behavior confirmed after the baseline

- MES typing is in `scripts/mes-hero-rich.js`: starts after 450ms, adds a character about every 55ms, holds for 4500ms and repeats. Focus stops playback so it cannot overwrite manual editing; reduced-motion displays full copy. Adapt content to the new solution.
- MES send button `[data-build-preview]` now opens `https://tier0.cn/login` with `_blank`, `noopener,noreferrer`; its legacy attribute name does not mean it should preview locally.
- WMS native send anchor `a.t0-press[href="https://tier0.cn/login"]` gets `target="_blank"` and `rel="noopener noreferrer"` via shared `navigation-consistency.js`. Preserve this across runtime rerenders. Test only the send action; do not silently change every login CTA.
- Both MES monitor and energy illustrations use the agent-style outer green gradient with a white app card. Energy type tabs have no outline, black weight-500 text, gray selection. The two comparison bars are static; changing resource type updates both without a second order selector. The energy header shows only its icon and title.
