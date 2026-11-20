# Hero integration regressions

Confirmed during EAM adaptation on 2026-11-19. Inspect current MES/WMS before adapting these mechanics; do not clone accumulated EAM CSS overrides.

## Verify the animated grid

A visible grid and a canvas element do not prove that green beams are running. Moving exported Framer HTML outside its React root can leave the canvas unhydrated: in the observed failure its bitmap stayed at the default 300 × 150 with no painted pixels. An important document-wide hidden rule can also beat a less-specific important stage-visible rule.

Check computed visibility, ancestor dimensions, bitmap size and reduced-motion preference. With motion enabled, compare painted pixels or frame hashes at two separated times, then visually confirm moving beams in the exposed margins. Honor reduced motion.

Prefer retaining a live native component. If a scoped initializer is necessary, give the canvas one owner and one animation loop, with idempotent setup, teardown, DPR-aware sizing and resize handling. Never mutate shared vendor behavior. Reference settings: 50px cells, #b2ed1d beams, max 9, speed 1 per reference frame, spawn probability .08, length around 150px. Preserve elapsed-time behavior across refresh rates. Static grid color rgba(5,11,20,.02) is independent of beam brightness.

## Responsive app geometry

Below 1440px compare the real MES/WMS at the same width. Copy sits above the app on the exposed grid; tablet uses a compact icon sidebar, phone hides the app sidebar and reflows controls. Keep the website menu click-to-open. Do not scale the whole 950px desktop app into an unreadable miniature. Reflow metrics and use horizontal scrolling inside wide tables only. Reserve prompt space without oversized blank areas. Verify drawers and manual controls at each size.

## Stable prompt and cursor timing

Prompt size and position must remain unchanged when a right drawer opens or closes. Avoid drawer-dependent :has() width/position rules. Compare its bounding rectangle before, during and after opening on all three pages; only subpixel rounding is acceptable.

Reuse the MES/WMS cursor SVG and green click ring. Resolve the target from the current DOM before each move and convert its screen coordinates to the cursor container, including preview scale. Hardcoded x/y values break after responsive changes or sidebar collapse.

Sequence: move, finish movement, show hover feedback, dwell, play click ring, activate the real control, then hold the new state long enough to read. Programmatic click does not trigger CSS :hover: use a scoped demo-hover class sharing real hover styling, and clear it on departure. Re-query targets after rerendering. Include a record opening its drawer and the close action; decorative tab cycling is insufficient. Real pointer/keyboard input cancels pending actions and hides the simulated cursor while preserving manual controls. Avoid automatic-demo-only focus outlines while retaining keyboard focus for real users.

Verify a full rendered demo cycle, actual hover, manual interruption and close/reopen. Check the cursor reaches the control before its content changes; a final screenshot cannot prove timing.

## Service/footer seam

Measure adjoining bounds and backgrounds before changing layout. Native footer wrappers may use absolute positioning with parent padding reserving their space. Changing to position:relative can reorder or inset the footer. Preserve positioning, width and parent geometry. If bounds meet but fractional rendering leaves an artwork seam, use a scoped 1px visual overlap and inspect both the join and final page bottom. Check desktop/tablet/phone and browser zoom. Preserve intentional breathing room before engineering services.
