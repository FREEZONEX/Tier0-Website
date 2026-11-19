# Approved solution Hero reference

Confirmed 2026-11-18; inspect the current rendered pages before adapting these values. These are reference-page defaults, not permission to overwrite later user edits.

## Composition and typography

- Desktop breakpoint: 1440px. Below it preserve the approved tablet/phone layout and click-to-open navigation; do not force the desktop split onto iPad.
- Center one floating card within the decorative grid stage, horizontally and vertically. Card width `min(1600px, calc(100% - 96px))`, radius 10px, clipped corners, minimum height about 620px. Left copy 43%, right application 57%. Use a shared wrapper, not a separate shadowed box for each half.
- Copy is optically centered within its own column, maximum width about 520px including 36px side padding. Reference title 42px, weight 400; body 17px, line-height 1.75; CTA text 18px. Adapt line breaks to actual Chinese copy; avoid a lone trailing character. WMS uses “WMS” in the main title, matching MES naming.
- App preview target 3:2. Current virtual screen is 950 × 633.333px, scaled from available width, maximum rendered width about 820px. Keep its outer dimensions stable across navigation, filters, drawer opening and content changes. Do not turn each screen state into a differently sized frame.
- Prompt overlaps the app near its bottom, centered, about 68% of preview width; text 15px / 1.65 with roughly 74px minimum typing area. Preserve typing animation and send-to-login in a new tab. Do not shrink the overlap until it becomes detached or unreadable.

## Background and grid

Keep the original black halftone image, not a generated replacement. The accepted soft treatment is a separate background layer at opacity .8 with `blur(2px)`; never filter the app, copy or whole card. Current enlarged background is centered at about 180% width. Clip an overscanned layer to avoid blur seams. Inspect both wide and normal desktop crops.

Reuse one native 50px grid and its animated green beams behind the card. Static line color is `rgba(5,11,20,.02)`. End the stage on a complete grid row; the final divider must match the grid line color. For symmetric vertical breathing room, calculate stage height as `ceil((cardHeight + 96) / 50) * 50` and split the extra height evenly above and below. Recalculate on resize, without resize-observer feedback loops. The Hero card must not sit under the fixed 64px navigation.

The first feature section can use illustration-left/copy-right to alternate with the Hero; preserve the accepted page's order and sticky behavior rather than globally swapping all sections.

## Native component integration

WMS is an exported native Framer/React component, not a blank HTML scaffold. Preserve its sidebar, cursor demonstration, filters, record drawers, prompt typing and collapse/reopen behavior. MES has a custom interactive shell. Do not rebuild WMS as a simplified imitation or mutate vendor code globally.

Current WMS anchors: `.framer-lyhkcx` grid stage; `.framer-1obbasi` card; `.framer-1458unf` copy; `.framer-12lbpp9` visual; `.framer-1im04vq-container` app; `.framer-pv54nk-container` prompt; `.wh-root` native app. Treat generated class names as a discovery aid, not a permanent public API.

Apply structural layout CSS from the HTML head on first paint. Do not wait a fixed 2.2 seconds or use a timer to switch old layout into the new one. Framer hydration can replace DOM wrappers inserted too early: prefer layout on stable existing nodes; where a wrapper is necessary, initialize idempotently, observe only relevant changes and verify it survives hydration. Never leave a broad observer repeatedly rewriting the same text or duplicating listeners, wrappers or canvases. Recheck the live initialization on navigation and resizing across 1440px.

Do not hide the entire page as a first-paint workaround. Keep the title, CTA and reserved app geometry visible while interactive code loads. Bump changed CSS/JS query versions and verify the actual versioned URLs, not an unversioned cached response.

## Acceptance evidence

Capture 1490px and wide desktop, 882px and 390px. Reload with cache disabled and inspect early paint, hydration and settled rendering for old-layout flashes, shifting card dimensions, duplicated canvases and clipped prompts. Test resizing across the desktop breakpoint in both directions.

Use actual pointer clicks: sidebar changes content; a record opens its right drawer; close icon is centered and closes it; sidebar collapses and reopens; native cursor demonstration includes meaningful record/drawer actions. Verify prompt text grows over time and an actual send click opens exactly one login tab, leaving the current page intact. Check console errors and horizontal overflow. Report unverified interactions plainly.
