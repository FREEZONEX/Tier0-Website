---
name: tier0-solution-page
description: Build additional Tier0 CN solution pages from supplied content using the approved local MES layout and WMS visual system. Use for sibling solution pages and their interactive illustrations, responsive layout, navigation and footer integration in the FramerExport website.
---

# Tier0 solution page

Create a sibling solution page whose content changes while the approved MES layout, native website shell and WMS visual language remain consistent. Work from the current local files and rendered page; this reference is a baseline, not permission to overwrite later user changes.

## Establish the page

Read [references/implementation.md](references/implementation.md) before editing. Identify the active test site and the current MES/WMS references. Obtain the new theme, source material and intended route from the request; infer routine choices and state them. Ask only when missing information changes the business meaning. User instructions override this skill.

Only change the test copy unless the user requests otherwise. Creating a page does not authorize production deployment, pushing a repository, replacing the production package or changing the reference pages. Keep the original navigation and footer working.

## Translate content into the reference layout

- Inspect the supplied Chinese material. Extract the audience, business objects, lifecycle, actions, constraints, exceptions and outcomes before constructing the visuals.
- Preserve MES's hero structure, section hierarchy, mixture of full-width diagrams and two-column illustrations, final service block and footer. Use the appropriate number of sections for the supplied content; do not force eight when the source does not support eight.
- Write page-specific titles and short introductions. Simplify prose inside illustrations; avoid long instructional footnotes, repeated “click here” hints and redundant selection controls.
- Show meaningful interactions: selecting a stage changes its actual content; a missing prerequisite blocks its dependent action; completion and reset restore consistent states. Use a shared data model so order, equipment, batch and totals agree across illustrations. Do not copy MES facts into an unrelated solution.
- Use source-backed claims only. Mark invented illustrative records as sample data somewhere readable in the illustration/page; do not fabricate customer, performance, savings or product capability claims. Preserve AI as “AI”, not “人工智能”.
- Prefer one representative record unless comparison teaches something. Static comparisons need no extra record switch. Preserve interactions that explain distinct content, such as process steps, scheduling views and resource types.

## Match the approved visual behavior

Use IBM Plex Sans SC and local Lucide icons. Match the real reference for color, stroke, padding and hover, not an approximate screenshot reconstruction. Section eyebrow and intro text: PC 18px, tablet/phone 14px, unless the user changes this requirement.

Keep two-column copy and illustration top-aligned (including counterparts of sections 06 and 08). Use the native WMS hero canvas once; never stack a CSS grid behind the same canvas. Keep the original animated beam brightness independent of static-grid styling. Preserve fixed hero app dimensions while switching demo states. Hero chat text types progressively; preserve readable full text for reduced motion and stop the animation when the user edits. Its send action opens `https://tier0.cn/login` in a new tab with opener isolation, preserving the current page. This applies to MES, WMS and new sibling pages; do not substitute a local preview action.

Reuse the reference's sticky cover-depth and final-card exit behavior. Maintain opaque coverage between differently sized sections; contain blur fringes so no edge line or earlier table leaks through. When the final section takes over, earlier layers must not reappear during exit. Scrolling upward restores those layers. Keep the final section's breathing room before engineering services, and join engineering services directly to the footer.

## Integrate and verify

Add the route and manifest entry using the existing server conventions. Reuse native header/footer and add the new solution once in desktop, tablet/phone menus and footer, with a suitable green Lucide icon. Follow the user-specified order; do not reorder unrelated items. Documentation opens the Chinese site in a new tab; contact and subscription preserve existing Feishu destinations.

Use isolated per-page content/styles; do not introduce another long cascade of patches or apply a global find/replace to WMS/MES. Inspect the current initialization chain and consolidate the new page into an understandable module with a local data model. Do not execute stale build scripts that overwrite the approved reference.

Verify the rendered page at desktop 1490px, tablet 882px and phone 390px, plus a breakpoint boundary if changed. Check full page width, titles/widows, top alignment, footer, menu click targets, every interactive state and console errors. Verify hero text grows over time and an actual send-button click opens exactly one new login tab without navigating the source page. Use actual mouse clicks for nested-control navigation checks; programmatic `.click()` alone may miss default anchor navigation. Scroll through all cover transitions, final exit and reverse scroll; capture evidence. Bump changed versioned asset URLs because the server caches them immutably.

Deliver a local preview link, a concise change report and any remaining limitations. Do not claim the entire site or a real backend workflow was verified from a few screenshots.

## Suggested invocation

> 使用 $tier0-solution-page 新增【主题】解决方案页，路由【/solution/slug】。内容参考【文件/目录】，只使用中文内容。以当前 MES 为排版与交互基准、WMS 为视觉参考，沿用现有顶部栏、footer 和服务区。配图改为符合该主题的可交互示例，确保各区块数据与流程一致。仅改测试版，将导航放在【位置】。完成桌面、平板、手机和滚动叠加检查，给我 localhost 链接，不发布。
