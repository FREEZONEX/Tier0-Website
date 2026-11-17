import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  D as t,
  F as n,
  H as r,
  O as i,
  P as a,
  S as o,
  U as s,
  V as c,
  c as l,
  m as u,
  s as d,
  u as f,
  x as p,
  y as m,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { S as h, Yi as g, t as _, v } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import {
  Et as y,
  H as b,
  I as x,
  P as S,
  Pt as C,
  Q as w,
  St as T,
  U as E,
  a as D,
  bt as O,
  gt as k,
  j as A,
  lt as ee,
  m as j,
  o as M,
  w as N,
  wt as P,
  yt as te,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { m as F, n as I, p as L, t as R } from "./shared-lib.CHy_rbfQ.mjs?v=20261116-migration-v2";
import { n as z, r as ne } from "./gN1Hj9wQE.T6AS1bQA.mjs?v=20261116-migration-v2";
function re(e) {
  let t = Object.assign(
      {
        pageSize: 8,
        contactEmail: `productsupport@freezonex.io`,
        securityUrl: ``,
        showHighlights: !0,
        enableShortcut: !0,
        syncHash: !0,
      },
      e
    ),
    n = [`zh-CN`, `en`],
    i = [`all`, `云端`, `企业版`],
    a = [`all`, `major`, `digest`, `release`, `archive`],
    o = {
      all: `allCategories`,
      major: `labelMajor`,
      digest: `labelSummary`,
      release: `catRelease`,
      archive: `catArchive`,
    },
    c = `summary`,
    l = `legacy`,
    u = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`],
    d = [
      `January`,
      `February`,
      `March`,
      `April`,
      `May`,
      `June`,
      `July`,
      `August`,
      `September`,
      `October`,
      `November`,
      `December`,
    ],
    f = [`soft`, `strong`, `plain`, `strong`, `plain`, `soft`],
    p = s !== void 0,
    m = n.includes(t.locale) ? t.locale : `en`,
    h = { product: `all`, category: `all`, month: `all`, term: `` },
    g = { ...h, limit: t.pageSize },
    _ = /* @__PURE__ */ new Set(),
    v = null,
    y = (e) => (Array.isArray(e) ? e[+(m === `en`)] : e),
    b = (e, n = {}) => String(t.messages[m][e] ?? e).replace(/\{(\w+)\}/g, (e, t) => n[t] ?? e),
    x = (e) =>
      String(e).replace(
        /[&<>"']/g,
        (e) => ({ "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;`, "'": `&#39;` })[e]
      ),
    S = (e, t = ``) =>
      `<svg class="t0cl-ico ${t}" viewBox="0 0 24 24" aria-hidden="true">${e}</svg>`,
    C = {
      search: `<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>`,
      chevronDown: `<path d="m6 9 6 6 6-6"/>`,
      link: `<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>`,
      check: `<path d="M20 6 9 17l-5-5"/>`,
      external: `<path d="M7 17 17 7M8 7h9v9"/>`,
      shield: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>`,
      chat: `<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/>`,
      right: `<path d="m9 18 6-6-6-6"/>`,
      close: `<path d="M18 6 6 18M6 6l12 12"/>`,
      mail: `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>`,
      info: `<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>`,
    },
    w = (e) => v.querySelector(e),
    T = t.contactEmail ? `mailto:${t.contactEmail}` : ``,
    E = () => {},
    D = (e, t) =>
      t.date.localeCompare(e.date) ||
      (t.version || ``).localeCompare(e.version || ``, void 0, { numeric: !0 }),
    O = [...t.releases].sort(D),
    k = (t.showHighlights && t.highlights) || [],
    A = (e) =>
      Array.isArray(e)
        ? e.map(A).join(` `)
        : e && typeof e == `object`
          ? Object.values(e).map(A).join(` `)
          : String(e ?? ``),
    ee = new Map(O.map((e) => [e.id, A(e).toLowerCase()])),
    j = (e) =>
      e.action
        ? e.action.join(`
`)
        : ``,
    M = /* @__PURE__ */ new Map();
  O.forEach((e) => j(e) && M.set(j(e), (M.get(j(e)) || 0) + 1));
  let [N = ``] = [...M]
      .filter(([, e]) => e >= 5)
      .sort((e, t) => t[1] - e[1])
      .map(([e]) => e),
    P = (e) => !!N && j(e) === N,
    te = (e) => e.split(`-`).map(Number),
    F = (e) => {
      let [, t, n] = te(e);
      return b(`dateShort`, { m: t, d: n, month: u[t - 1] });
    },
    I = (e) => e.slice(0, 7),
    L = (e) => {
      let [t, n] = te(e);
      return b(`monthLabel`, { y: t, m: n, month: d[n - 1] });
    },
    R = [...new Set(O.map((e) => I(e.date)))];
  function z(e) {
    return e.major
      ? { cls: `is-major`, label: b(`labelMajor`) }
      : e.kind === c
        ? { cls: `is-digest`, label: b(`labelSummary`) }
        : e.kind === l
          ? { cls: `is-archive`, label: b(`labelLegacy`) }
          : e.archived
            ? { cls: `is-archive`, label: b(`labelArchived`) }
            : { cls: `is-released`, label: b(`labelReleased`) };
  }
  let ne = (e) => z(e).cls.replace(`is-`, ``).replace(`released`, `release`),
    re = (e) =>
      b(
        e.kind === c
          ? `datePeriod`
          : e.kind === l || e.dateKind === `update`
            ? `dateUpdate`
            : `dateRelease`
      );
  function ie() {
    let e = W();
    return `<header class="t0cl-hero">
  <div class="t0cl-wrap">
    <div class="t0cl-hero-top">
      <div class="t0cl-hero-copy"><h1 class="t0cl-h1"><span class="t0cl-h1-soft">${x(b(`heroSoft`))}</span> <span class="t0cl-h1-strong">[${x(b(`heroStrong`))}]</span></h1><p class="t0cl-lead">${x(b(`lead`))}</p></div>
      <div class="t0cl-hero-actions">
        ${T ? `<a class="t0cl-cta" href="${x(T)}" aria-label="${x(b(`contactLinkLabel`, { email: t.contactEmail }))}">${S(C.mail)}<span>${x(b(`contactCta`))}</span></a>` : ``}
        ${t.securityUrl ? `<a class="t0cl-text-link" href="${x(t.securityUrl)}">${S(C.shield)}<span>${x(b(`securityLink`))}</span>${S(C.external)}</a>` : ``}
      </div>
    </div>
  </div>
</header>
<div class="t0cl-wrap">
  ${k.length ? ae() : ``}
  <div class="t0cl-board" id="t0cl-updates">
    <aside class="t0cl-side" aria-label="${x(b(`filtersLabel`))}">
      <div class="t0cl-filters">
        <section class="t0cl-block t0cl-block-cat">
          <p class="t0cl-block-label" id="t0cl-cat-label">${x(b(`categoryLabel`))}</p>
          <div class="t0cl-cats" role="group" aria-labelledby="t0cl-cat-label">
            ${a.map((t) => `<button type="button" class="t0cl-cat is-${t}" data-category="${t}" aria-pressed="${t === g.category}"><i aria-hidden="true"></i><span>${x(b(o[t]))}</span><b data-count>${e.counts.category[t]}</b></button>`).join(``)}
          </div>
        </section>
        <section class="t0cl-block t0cl-block-product">
          <p class="t0cl-block-label" id="t0cl-prod-label">${x(b(`productLabel`))}</p>
          <div class="t0cl-seg" role="group" aria-labelledby="t0cl-prod-label">
            <span class="t0cl-seg-thumb" aria-hidden="true"></span>
            ${i.map((e) => `<button type="button" data-product="${e}" aria-pressed="${e === g.product}"><span>${x(e === `all` ? b(`allProducts`) : e)}</span></button>`).join(``)}
          </div>
        </section>
        <section class="t0cl-block t0cl-block-time">
          <p class="t0cl-block-label" id="t0cl-time-label">${x(b(`timeLabel`))}</p>
          <label class="t0cl-select"><select data-role="month-select" aria-labelledby="t0cl-time-label">${B(e)}</select>${S(C.chevronDown)}</label>
        </section>
      </div>
      ${
        T || t.securityUrl
          ? `<section class="t0cl-help" aria-labelledby="t0cl-help-title">
        <h2 id="t0cl-help-title"><span class="t0cl-help-ico">${S(C.chat)}</span>${x(b(`helpTitle`))}</h2>
        <p>${x(b(`helpBody`))}${T ? ` <a class="t0cl-help-mail" href="${x(T)}">${x(t.contactEmail)}</a>` : ``}</p>
        <div class="t0cl-help-actions">
          ${T ? `<a class="t0cl-help-link" href="${x(T)}" aria-label="${x(b(`contactLinkLabel`, { email: t.contactEmail }))}">${S(C.mail)}<span>${x(b(`helpCta`))}</span>${S(C.right, `t0cl-help-arrow`)}</a>` : ``}
          ${t.securityUrl ? `<a class="t0cl-help-sub" href="${x(t.securityUrl)}">${S(C.shield)}<span>${x(b(`securityLink`))}</span>${S(C.external)}</a>` : ``}
        </div>
      </section>`
          : ``
      }
    </aside>
    <section class="t0cl-feed" aria-labelledby="t0cl-feed-title">
      <div class="t0cl-feed-head">
        <h2 class="t0cl-h2" id="t0cl-feed-title"><span class="t0cl-hash" aria-hidden="true">#</span> ${x(b(`feedTitle`))}</h2>
        <label class="t0cl-search">${S(C.search)}<input class="t0cl-input" type="search" data-role="search" value="${x(g.term)}" placeholder="${x(b(`searchPlaceholder`))}" aria-label="${x(b(`searchLabel`))}" autocomplete="off" spellcheck="false">${t.enableShortcut ? `<kbd class="t0cl-kbd" aria-hidden="true">/</kbd>` : ``}<button type="button" class="t0cl-search-clear" data-role="clear-search" aria-label="${x(b(`clearSearch`))}">${S(C.close)}</button></label>
      </div>
      <p class="t0cl-sr" data-role="count" role="status" aria-live="polite">${x(e.countText)}</p>
      <div class="t0cl-active" data-role="active"${e.activeHtml ? `` : ` hidden`}>${e.activeHtml}</div>
      <div class="t0cl-timeline" data-role="list">${e.listHtml}</div>
      <div class="t0cl-more" data-role="more"${e.moreHtml ? `` : ` hidden`}>${e.moreHtml}</div>
    </section>
  </div>
</div>`;
  }
  function B(e) {
    let t = (t, n) =>
      `<option value="${t}"${t === g.month ? ` selected` : ``}${t !== `all` && !e.counts.month[t] && t !== g.month ? ` disabled` : ``}>${x(n)} (${e.counts.month[t]})</option>`;
    return t(`all`, b(`allTime`)) + R.map((e) => t(e, L(e))).join(``);
  }
  function ae() {
    return `<section class="t0cl-hls" id="t0cl-highlights" aria-labelledby="t0cl-hl-title">
    <div class="t0cl-hls-head"><h2 class="t0cl-h2" id="t0cl-hl-title"><span class="t0cl-hash" aria-hidden="true">#</span> ${x(b(`hlTitle`))}</h2><span class="t0cl-badge">${x(b(`hlCount`, { n: k.length }))}</span></div>
    <div class="t0cl-hl-grid">${k
      .map(
        (e, t) => `<article class="t0cl-hl is-${f[t % f.length]}">
      <div class="t0cl-hl-head"><i class="t0cl-mark" aria-hidden="true"></i><span class="t0cl-hl-cat">${x(y(e.category))}</span></div>
      <time class="t0cl-hl-date" datetime="${x(e.date)}">${x(e.date)}</time>
      <h3>${x(y(e.title))}</h3>
      <p>${x(y(e.summary))}</p>
      <button type="button" class="t0cl-hl-btn" data-highlight="${x(e.id)}" aria-label="${x(b(`hlViewLabel`, { title: y(e.title) }))}"><span>${x(b(`hlView`))}</span><svg class="t0cl-ico t0cl-hl-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 12L10 8L6 4"/></svg></button>
    </article>`
      )
      .join(``)}</div>
  </section>`;
  }
  function oe(e) {
    let t = `t0cl-product is-${x(e.product.toLowerCase())}`;
    if (!P(e)) return `<span class="${t}">${x(e.product)}</span>`;
    let n = `t0cl-tip-${x(e.id)}`;
    return `<span class="t0cl-tip-wrap"><button type="button" class="${t} has-tip" data-role="tip" aria-describedby="${n}" aria-expanded="false">${x(e.product)}${S(C.info)}</button><span class="t0cl-tip" id="${n}" role="tooltip"><b>${x(b(`action`))}</b>${x(y(e.action))}</span></span>`;
  }
  function se(e) {
    let t = z(e),
      n =
        e.kind === c
          ? `<time datetime="${x(e.periodEnd)}"><span class="t0cl-nw">${x(F(e.periodStart))} –</span> <span class="t0cl-nw">${x(F(e.periodEnd))}</span></time>`
          : `<time datetime="${x(e.dateTime || e.date)}">${x(F(e.date))}</time>`;
    return `<article class="t0cl-entry ${t.cls}" id="update-${x(e.id)}" data-id="${x(e.id)}">
  <div class="t0cl-aside">
    <p class="t0cl-when-cap">${x(re(e))}</p>
    <p class="t0cl-when">${n}</p>
    ${e.time ? `<p class="t0cl-clock">${x(e.time)} \xb7 ${x(b(`timeZone`))}</p>` : ``}
    <p class="t0cl-chips">${oe(e)}${e.version ? `<span class="t0cl-version">v${x(e.version)}</span>` : ``}</p>
  </div>
  <div class="t0cl-rail" aria-hidden="true"><i></i></div>
  <div class="t0cl-body">
    <span class="t0cl-status ${t.cls}">${x(t.label)}</span>
    <h3 class="t0cl-title"><span>${x(y(e.title))}</span>${me() ? `<button type="button" class="t0cl-anchor" data-copy="${x(e.id)}" aria-label="${x(b(`copyLabel`, { title: y(e.title) }))}" title="${x(b(`copyLabel`, { title: y(e.title) }))}">${S(C.link)}<span class="t0cl-anchor-note" data-role="copy-note"></span></button>` : ``}</h3>
    <p class="t0cl-summary">${x(y(e.summary))}</p>
    <ul class="t0cl-changes">${(e.items || []).map((e) => `<li>${x(y(e))}</li>`).join(``)}</ul>
    ${e.tags && e.tags.length ? `<p class="t0cl-tags">${e.tags.map((e) => `<span>${x(y(e))}</span>`).join(``)}</p>` : ``}
    ${e.action && !P(e) ? `<div class="t0cl-action"><p class="t0cl-action-label">${x(b(`action`))}</p><p>${x(y(e.action))}</p></div>` : ``}
  </div>
</article>`;
  }
  function ce(e, t) {
    let n = /* @__PURE__ */ new Map();
    t.forEach((e) => n.set(I(e.date), (n.get(I(e.date)) || 0) + 1));
    let r = ``;
    return e
      .map((e) => {
        let t = I(e.date),
          i = n.get(t),
          a =
            t === r
              ? ``
              : `<div class="t0cl-month"><div class="t0cl-month-label"><h3>${x(L(t))}</h3><span>${x(i === 1 ? b(`monthCountOne`) : b(`monthCount`, { n: i }))}</span></div><i class="t0cl-month-mark" aria-hidden="true"></i><span class="t0cl-month-line" aria-hidden="true"></span></div>`;
        return ((r = t), a + se(e));
      })
      .join(``);
  }
  function V() {
    return `<div class="t0cl-empty"><span class="t0cl-empty-ico">${S(C.search)}</span><h3>${x(b(`emptyTitle`))}</h3><p>${x(b(`emptyBody`))}</p><button type="button" class="t0cl-btn" data-role="clear">${x(b(`clearFilters`))}</button></div>`;
  }
  function H(e, t) {
    let n = g.term.trim().toLowerCase();
    return (
      (t === `term` || !n || ee.get(e.id).includes(n)) &&
      (t === `product` || g.product === `all` || e.product === g.product) &&
      (t === `category` || g.category === `all` || ne(e) === g.category) &&
      (t === `month` || g.month === `all` || I(e.date) === g.month)
    );
  }
  let U = () => O.filter((e) => H(e));
  function le() {
    let e = (e, t, n) => {
      let r = O.filter((t) => H(t, e));
      return Object.fromEntries(
        t.map((e) => [e, e === `all` ? r.length : r.filter((t) => n(t, e)).length])
      );
    };
    return {
      product: e(`product`, i, (e, t) => e.product === t),
      category: e(`category`, a, (e, t) => ne(e) === t),
      month: e(`month`, [`all`, ...R], (e, t) => I(e.date) === t),
    };
  }
  function ue() {
    let e = [];
    return (
      g.product !== `all` && e.push([`product`, g.product]),
      g.category !== `all` && e.push([`category`, b(o[g.category])]),
      g.month !== `all` && e.push([`month`, L(g.month)]),
      g.term.trim() && e.push([`term`, b(`searchChip`, { term: g.term.trim() })]),
      e.length
        ? `<span class="t0cl-active-label">${x(b(`activeFilters`))}</span>${e.map(([e, t]) => `<button type="button" class="t0cl-chip" data-unset="${e}" aria-label="${x(b(`removeFilter`, { label: t }))}"><span>${x(t)}</span>${S(C.close)}</button>`).join(``)}<button type="button" class="t0cl-chip-clear" data-role="clear">${x(b(`clearAll`))}</button>`
        : ``
    );
  }
  function W() {
    let e = U(),
      t = e.slice(0, g.limit),
      n = e.length - t.length;
    return {
      counts: le(),
      listHtml: t.length ? ce(t, e) : V(),
      activeHtml: ue(),
      countText: e.length ? b(`total`, { n: e.length }) : b(`zeroResults`),
      moreHtml:
        n > 0
          ? `<button type="button" class="t0cl-btn t0cl-more-btn" data-role="more-btn"><span>${x(b(`loadMore`))}</span><em>${x(b(`remaining`, { n }))}</em>${S(C.chevronDown)}</button>`
          : ``,
    };
  }
  function G() {
    let e = W(),
      t = (t, n) =>
        v.querySelectorAll(`[data-${t}]`).forEach((r) => {
          let i = r.dataset[t],
            a = e.counts[n][i],
            o = r.querySelector(`[data-count]`);
          (o && (o.textContent = a),
            r.setAttribute(`aria-pressed`, String(i === g[n])),
            r.classList.toggle(`is-empty`, !a),
            (r.disabled = !a && i !== g[n] && i !== `all`));
        });
    (t(`product`, `product`),
      t(`category`, `category`),
      (w(`[data-role=month-select]`).innerHTML = B(e)),
      (w(`[data-role=list]`).innerHTML = e.listHtml),
      (w(`[data-role=count]`).textContent = e.countText));
    let n = w(`[data-role=active]`);
    ((n.hidden = !e.activeHtml), (n.innerHTML = e.activeHtml));
    let r = w(`[data-role=more]`);
    ((r.hidden = !e.moreHtml), (r.innerHTML = e.moreHtml), K.refresh(), E());
  }
  let K = (() => {
      let e = null,
        t = 0,
        n = null,
        r = () => p && s.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;
      function i() {
        let e = w(`.t0cl-seg`),
          t = e && e.querySelector(`[aria-pressed=true]`);
        if (!t) return;
        let n = e.querySelector(`.t0cl-seg-thumb`);
        ((n.style.width = `${t.offsetWidth}px`),
          (n.style.transform = `translateX(${t.offsetLeft}px)`),
          e.classList.contains(`has-thumb`) ||
            (e.classList.add(`has-thumb`),
            requestAnimationFrame(() =>
              requestAnimationFrame(() => e.classList.add(`is-settled`))
            )));
      }
      function a() {
        t = 0;
        let e = w(`.t0cl-timeline`);
        if (!e) return;
        let n = s.innerHeight * 0.42,
          r = e.getBoundingClientRect(),
          i = e.querySelector(`.t0cl-month-mark`),
          a = i ? i.getBoundingClientRect().top + i.offsetHeight / 2 - r.top : 0;
        e.style.setProperty(`--t0-rail-start`, `${a}px`);
        let o = Math.min(Math.max(n - r.top - a, 0), r.height - a);
        (e.style.setProperty(`--t0-progress`, `${o}px`),
          v.querySelectorAll(`.t0cl-entry`).forEach((e) => {
            let t = e.querySelector(`.t0cl-rail i`);
            e.classList.toggle(`is-passed`, !!t && t.getBoundingClientRect().top < n);
          }));
      }
      let o = () => {
        t ||= requestAnimationFrame(a);
      };
      function c() {
        let t = [...v.querySelectorAll(`.t0cl-entry:not(.is-in), .t0cl-month:not(.is-in)`)];
        e ? t.forEach((t) => e.observe(t)) : t.forEach((e) => e.classList.add(`is-in`));
      }
      function l() {
        p &&
          (!r() &&
            `IntersectionObserver` in s &&
            (v.classList.add(`is-animated`),
            (e = new IntersectionObserver(
              (t) => {
                t.filter((e) => e.isIntersecting).forEach((t, n) => {
                  let r = t.target;
                  (r.style.setProperty(`--t0-delay`, `${Math.min(n, 6) * 60}ms`),
                    r.classList.add(`is-in`),
                    e.unobserve(r));
                });
              },
              { rootMargin: `0px 0px -6% 0px`, threshold: 0.05 }
            ))),
          c(),
          i(),
          a(),
          s.addEventListener(`scroll`, o, { passive: !0 }),
          s.addEventListener(`resize`, o, { passive: !0 }),
          `ResizeObserver` in s &&
            ((n = new ResizeObserver(() => {
              (i(), o());
            })),
            n.observe(v),
            n.observe(w(`.t0cl-seg`))),
          document.fonts?.ready.then(() => v && i()));
      }
      function u() {
        (c(), i(), o());
      }
      function d() {
        (e?.disconnect(),
          n?.disconnect(),
          s.removeEventListener(`scroll`, o),
          s.removeEventListener(`resize`, o),
          t && cancelAnimationFrame(t));
      }
      return { start: l, refresh: u, stop: d };
    })(),
    q = () => parseFloat(getComputedStyle(v).getPropertyValue(`--t0-scroll-offset`)) || 0,
    de = (e) => s.scrollBy({ top: e.getBoundingClientRect().top - q() - 16, behavior: `smooth` });
  function fe(e, t) {
    Object.assign(g, h, { product: t });
    let n = w(`[data-role=search]`);
    n && (n.value = ``);
    let r = U().findIndex((t) => t.id === e);
    if (r < 0) return null;
    ((g.limit = Math.max(g.limit, r + 1)), G());
    let i = document.getElementById(`update-${e}`);
    return (i?.classList.add(`is-target`), i);
  }
  let pe = () =>
      t.shareUrl || (p && !/^(about|blob|data):/.test(location.protocol) ? location.href : ``),
    me = () => !!pe();
  function he(e) {
    let t = pe();
    if (!t) return ``;
    let n = new URL(t, location.href);
    return ((n.hash = `update-${e}`), n.href);
  }
  async function ge(e) {
    try {
      return (await r.clipboard.writeText(e), !0);
    } catch {}
    let t = document.createElement(`textarea`);
    ((t.value = e),
      t.setAttribute(`readonly`, ``),
      (t.style.cssText = `position:fixed;top:0;left:0;opacity:0`),
      document.body.appendChild(t),
      t.select());
    let n = !1;
    try {
      n = document.execCommand(`copy`);
    } catch {
      n = !1;
    }
    return (t.remove(), n);
  }
  async function _e(e) {
    let t = he(e.dataset.copy),
      n = t ? await ge(t) : !1,
      r = e.querySelector(`[data-role=copy-note]`);
    (e.classList.add(n ? `is-done` : `is-failed`),
      (e.querySelector(`svg`).outerHTML = S(n ? C.check : C.link)),
      (r.textContent = b(n ? `copied` : `copyFailed`)));
    let i = setTimeout(() => {
      (_.delete(i),
        e.isConnected &&
          (e.classList.remove(`is-done`, `is-failed`),
          (e.querySelector(`svg`).outerHTML = S(C.link)),
          (r.textContent = ``)));
    }, 2e3);
    _.add(i);
  }
  function J() {
    if (!location.hash.startsWith(`#update-`)) return;
    let e = decodeURIComponent(location.hash.slice(8));
    if (!O.some((t) => t.id === e)) return;
    let t = fe(e, `all`);
    requestAnimationFrame(() => t?.scrollIntoView({ block: `start` }));
  }
  function ve(e, t) {
    let n = t ?? e.getAttribute(`aria-expanded`) !== `true`;
    (v
      .querySelectorAll(`[data-role=tip][aria-expanded=true]`)
      .forEach((t) => t !== e && t.setAttribute(`aria-expanded`, `false`)),
      e.setAttribute(`aria-expanded`, String(n)));
  }
  let Y = () =>
      v
        .querySelectorAll(`[data-role=tip][aria-expanded=true]`)
        .forEach((e) => e.setAttribute(`aria-expanded`, `false`)),
    X = (e) => {
      e.target.closest?.(`.t0cl-tip-wrap`) || Y();
    },
    Z = (e) => {
      e.key === `Escape` && Y();
    },
    ye = (e) => {
      let n = e.target.closest(`button`);
      if (n && v.contains(n)) {
        if (n.dataset.product) return Q({ product: n.dataset.product });
        if (n.dataset.category) return Q({ category: n.dataset.category });
        if (n.dataset.month) return Q({ month: n.dataset.month });
        if (n.dataset.unset)
          return (
            n.dataset.unset === `term` && (w(`[data-role=search]`).value = ``),
            Q({ [n.dataset.unset]: h[n.dataset.unset] })
          );
        if (n.dataset.highlight) {
          let e = k.find((e) => e.id === n.dataset.highlight),
            t = e && fe(e.target, `云端`);
          t && de(t);
        } else {
          if (n.dataset.role === `tip`) return ve(n);
          if (n.dataset.copy) return _e(n);
          if (n.dataset.role === `more-btn`) {
            let e = g.limit;
            ((g.limit += t.pageSize),
              G(),
              v.querySelectorAll(`.t0cl-entry`)[e]?.setAttribute(`tabindex`, `-1`),
              v.querySelectorAll(`.t0cl-entry`)[e]?.focus({ preventScroll: !0 }));
          } else {
            if (n.dataset.role === `clear-search`)
              return (
                (w(`[data-role=search]`).value = ``),
                Q({ term: `` }),
                w(`[data-role=search]`).focus()
              );
            if (n.dataset.role === `clear`)
              return ((w(`[data-role=search]`).value = ``), Q({ ...h }));
          }
        }
      }
    };
  function Q(e) {
    (Object.assign(g, e, { limit: t.pageSize }), G());
    let n = w(`.t0cl-feed`);
    n && n.getBoundingClientRect().top < q() && de(n);
  }
  let $ = (e) => {
      e.target.dataset.role !== `search` ||
        e.isComposing ||
        ((g.term = e.target.value), (g.limit = t.pageSize), G());
    },
    be = (e) => {
      e.target.dataset.role === `month-select` && Q({ month: e.target.value });
    },
    xe = (e) => $({ target: e.target, isComposing: !1 }),
    Se = (e) => {
      if (e.key !== `/` || e.metaKey || e.ctrlKey || e.altKey) return;
      let t = document.activeElement;
      if (t && (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable)) return;
      let n = w(`[data-role=search]`);
      n &&
        (e.preventDefault(), n.focus(), n.scrollIntoView({ block: `center`, behavior: `smooth` }));
    };
  function Ce() {
    let e = w(`.t0cl-board`),
      t = w(`.t0cl-side`);
    if (!p || !e || !t) return () => {};
    let n = [];
    if (s.CSS?.supports?.(`overflow`, `clip`))
      for (let e = v.parentElement; e && e !== document.body; e = e.parentElement) {
        let t = getComputedStyle(e);
        (t.overflowX === `hidden` || t.overflowY === `hidden`) &&
          (n.push([e, e.style.overflowX, e.style.overflowY]),
          t.overflowX === `hidden` && (e.style.overflowX = `clip`),
          t.overflowY === `hidden` && (e.style.overflowY = `clip`));
      }
    let r = (() => {
        for (let e = v.parentElement; e && e !== document.documentElement; e = e.parentElement) {
          let t = getComputedStyle(e);
          if (/(hidden|auto|scroll|overlay)/.test(t.overflowX + t.overflowY)) return !0;
        }
        return !1;
      })(),
      i = 0,
      a = 0,
      o = (e) => {
        ((i = e), (t.style.transform = e ? `translate3d(0, ${e}px, 0)` : ``));
      },
      c = () => {
        a = 0;
        let n = getComputedStyle(t).display === `contents`,
          c = q() + 8,
          l = t.offsetHeight,
          u = !n && l > s.innerHeight - c - 16;
        if (
          (t.classList.toggle(`is-static`, u),
          t.classList.toggle(`is-follow`, r && !n && !u),
          n || u || !r)
        )
          return o(0);
        let d = t.getBoundingClientRect().top - i,
          f =
            e.getBoundingClientRect().bottom -
            parseFloat(getComputedStyle(e).paddingBottom) -
            d -
            l;
        o(Math.round(Math.min(Math.max(c - d, 0), Math.max(f, 0))));
      },
      l = () => {
        a ||= requestAnimationFrame(c);
      };
    E = c;
    let u = `ResizeObserver` in s ? new ResizeObserver(l) : null;
    return (
      u?.observe(e),
      s.addEventListener(`scroll`, l, { passive: !0 }),
      s.addEventListener(`resize`, l, { passive: !0 }),
      c(),
      () => {
        ((E = () => {}),
          u?.disconnect(),
          s.removeEventListener(`scroll`, l),
          s.removeEventListener(`resize`, l),
          a && cancelAnimationFrame(a),
          o(0),
          t.classList.remove(`is-static`, `is-follow`),
          n.forEach(([e, t, n]) => {
            ((e.style.overflowX = t), (e.style.overflowY = n));
          }));
      }
    );
  }
  function we() {
    return ie();
  }
  function Te(e) {
    ((v = e),
      v.setAttribute(`lang`, m),
      (v.innerHTML = ie()),
      K.start(),
      v.addEventListener(`click`, ye),
      v.addEventListener(`input`, $),
      v.addEventListener(`change`, be),
      v.addEventListener(`compositionend`, xe));
    let n = Ce();
    return (
      document.addEventListener(`pointerdown`, X),
      document.addEventListener(`keydown`, Z),
      t.enableShortcut && document.addEventListener(`keydown`, Se),
      t.syncHash && (s.addEventListener(`hashchange`, J), J()),
      function () {
        (K.stop(),
          n(),
          document.removeEventListener(`pointerdown`, X),
          document.removeEventListener(`keydown`, Z),
          v.removeEventListener(`click`, ye),
          v.removeEventListener(`input`, $),
          v.removeEventListener(`change`, be),
          v.removeEventListener(`compositionend`, xe),
          document.removeEventListener(`keydown`, Se),
          s.removeEventListener(`hashchange`, J),
          _.forEach(clearTimeout),
          _.clear());
      }
    );
  }
  return { html: we, mount: Te };
}
function ie(e, t) {
  return re(t).mount(e);
}
function B(e) {
  let t = String(e || ``).toLowerCase();
  return t.startsWith(`zh`) ? `zh-CN` : t.startsWith(`en`) ? `en` : ``;
}
function ae() {
  let e = typeof P == `function` ? P() : null,
    t = e && e.activeLocale;
  return B(t && (t.code || t.slug));
}
function oe() {
  return s === void 0
    ? ``
    : B(new URL(s.location.href).searchParams.get(`lang`)) ||
        B(document.documentElement.lang) ||
        B(r.language);
}
function se(e) {
  let {
      language: t = `auto`,
      contactEmail: r = `productsupport@freezonex.io`,
      securityUrl: i = ``,
      showHighlights: a = !0,
      pageSize: s = 8,
      shareUrl: c = ``,
      scrollOffset: l = 88,
      gutter: u = 24,
      maxWidth: h = 1200,
      style: g,
    } = e,
    _ = o(null),
    v = ae(),
    [y, b] = m(``);
  p(() => {
    let e = () => b(oe());
    e();
    let t = new MutationObserver(e);
    return (
      t.observe(document.documentElement, { attributes: !0, attributeFilter: [`lang`] }),
      () => t.disconnect()
    );
  }, []);
  let x = K.includes(t) ? t : v || y || `en`,
    S = n(
      () => ({
        releases: U,
        highlights: le,
        messages: ue,
        locale: x,
        pageSize: s,
        contactEmail: r,
        securityUrl: i,
        showHighlights: a,
        shareUrl: c || void 0,
      }),
      [x, s, r, i, a, c]
    ),
    C = n(() => re(S).html(), [S]);
  return (
    p(() => {
      let e = H.current() === H.canvas;
      return ie(_.current, { ...S, enableShortcut: !e, syncHash: !e });
    }, [S]),
    /*#__PURE__*/ f(`div`, {
      style: { width: `100%`, ...g },
      children: [
        /*#__PURE__*/ d(`link`, { rel: `stylesheet`, href: W }),
        /*#__PURE__*/ d(`style`, { dangerouslySetInnerHTML: { __html: G } }),
        /*#__PURE__*/ d(`div`, {
          ref: _,
          className: `t0cl`,
          lang: x,
          style: { "--t0-scroll-offset": `${l}px`, "--t0-gutter": `${u}px`, "--t0-max": `${h}px` },
          dangerouslySetInnerHTML: { __html: C },
          suppressHydrationWarning: !0,
        }),
      ],
    })
  );
}
var ce, V, H, U, le, ue, W, G, K;
function q() {
  return (q = e(() => {
    (c(),
      l(),
      i(),
      w(),
      ({ addPropertyControls: ce, ControlType: V, RenderTarget: H } = b),
      (U = [
        {
          id: `cloud-summary-2026-10-26`,
          date: `2026-10-26`,
          product: `云端`,
          kind: `summary`,
          archived: !1,
          periodStart: `2026-10-13`,
          periodEnd: `2026-10-26`,
          title: [`预览恢复与会话访问修复`, `Preview recovery and conversation access`],
          summary: [
            `增强暂停环境与预览恢复，修复多标签会话显示及登录后的预览跳转。`,
            `Improved paused-environment and preview recovery, conversation rendering across tabs and post-login preview navigation.`,
          ],
          tags: [
            [`稳定性`, `Reliability`],
            [`访问体验`, `Access experience`],
          ],
          items: [
            [
              `改善沙箱暂停后的恢复，并在预览暂时失败后尝试恢复；文件树补充暂停和错误状态。`,
              `Improved recovery after a sandbox pauses and recovery from temporary preview failures, with paused and error states in the file tree.`,
            ],
            [
              `明确区分“会话已删除”和“应用不存在”，修复多标签页中不同轮次回复合并显示的问题。`,
              `Distinguished deleted conversations from missing apps and fixed replies from separate turns being combined in passive browser tabs.`,
            ],
            [
              `修复登录和账号初始化后的预览跳转，完成必要步骤后返回原预览入口。`,
              `Fixed preview navigation after login and account setup, returning users to their original preview once required steps are complete.`,
            ],
          ],
          action: [
            `Cloud 由平台统一更新，无需安装独立补丁。具体功能以工作空间已启用的能力为准。`,
            `Cloud updates are managed by the platform; no separate patch installation is required. Availability depends on the capabilities enabled for your workspace.`,
          ],
        },
        {
          id: `cloud-summary-2026-10-12`,
          date: `2026-10-12`,
          product: `云端`,
          kind: `summary`,
          archived: !1,
          periodStart: `2026-09-29`,
          periodEnd: `2026-10-12`,
          title: [`会话恢复与搜索体验`, `Conversation recovery and search`],
          summary: [
            `改善异常会话的恢复路径，提升成员和日志搜索的一致性。`,
            `Improved recovery for interrupted conversations and made member and log searches more consistent.`,
          ],
          tags: [
            [`稳定性`, `Reliability`],
            [`搜索`, `Search`],
          ],
          items: [
            [
              `异常会话提供持续可见的重新连接入口，并按运行环境执行相应恢复操作。`,
              `Errored conversations offer a persistent reconnect action and use the recovery process appropriate for their runtime.`,
            ],
            [
              `成员、工作空间及相关管理列表搜索忽略大小写，并将搜索词中的通配符按字面匹配。`,
              `Member, workspace and related management searches ignore case and treat wildcard characters as literal text.`,
            ],
            [
              `优化登录日志搜索性能，同时保留现有历史记录和权限规则。`,
              `Improved login log search performance while preserving history and access rules.`,
            ],
          ],
          action: [
            `Cloud 由平台统一更新，无需安装独立补丁。具体功能以工作空间已启用的能力为准。`,
            `Cloud updates are managed by the platform; no separate patch installation is required. Availability depends on the capabilities enabled for your workspace.`,
          ],
        },
        {
          id: `cloud-summary-2026-09-28`,
          date: `2026-09-28`,
          product: `云端`,
          kind: `summary`,
          archived: !1,
          periodStart: `2026-09-15`,
          periodEnd: `2026-09-28`,
          title: [`首页加载与文件预览优化`, `Home loading and file previews`],
          summary: [
            `减少首页加载时的布局跳动，改善 Builder 中的图片查看。`,
            `Reduced layout shifts during home page loading and improved image viewing in Builder.`,
          ],
          tags: [
            [`体验优化`, `Experience`],
            [`文件预览`, `File previews`],
          ],
          items: [
            [
              `首页加载时为应用信息预留位置，并记住最近访问和收藏的占位行数。`,
              `The home page reserves space for app information during loading and remembers placeholder row counts for recents and favorites.`,
            ],
            [
              `Builder 文件树支持选中图片，并在编辑器中直接预览，避免按文本显示图片文件。`,
              `Images can be selected in the Builder file tree and previewed directly in the editor instead of being displayed as text.`,
            ],
          ],
          action: [
            `Cloud 由平台统一更新，无需安装独立补丁。具体功能以工作空间已启用的能力为准。`,
            `Cloud updates are managed by the platform; no separate patch installation is required. Availability depends on the capabilities enabled for your workspace.`,
          ],
        },
        {
          id: `enterprise-2-2-7`,
          date: `2026-09-20`,
          product: `企业版`,
          kind: `release`,
          version: `2.2.7`,
          archived: !1,
          title: [
            `通知中心、数据质量与灵活升级`,
            `Notifications, data quality and flexible upgrades`,
          ],
          summary: [
            `新增通知管理与登录日志，增强 UNS 后台导入和数据质量检查，支持按需选择组件进行离线升级。`,
            `New notification management and login logs, enhanced background UNS imports and data quality checks, and selective component delivery for offline upgrades.`,
          ],
          tags: [
            [`数据质量`, `Data quality`],
            [`通知中心`, `Notifications`],
            [`离线升级`, `Offline upgrades`],
          ],
          items: [
            [
              `通知中心支持收件人选择、发送历史、分类未读计数及应用跳转。`,
              `The notification center adds recipient selection, delivery history, unread counts by category and links to applications.`,
            ],
            [
              `UNS 导入以后台任务运行，支持进度、结果和失败原因查询，刷新页面后仍可查看；重复导入可更新已有节点。`,
              `UNS imports run as background tasks with progress, results and failure details retained across page refreshes; repeat imports can update existing nodes.`,
            ],
            [
              `集成数据质量检查、问题查看、策略配置与确认，覆盖缺失字段、无效值、长时间不变和采样频率等场景。`,
              `Integrated data quality checks, issue review, policy configuration and acknowledgement cover missing fields, invalid values, stale values and sampling frequency.`,
            ],
            [
              `新增可选 Microsoft 登录与账号关联、首次登录改密提示及独立登录日志。`,
              `Added optional Microsoft sign-in and account linking, first-login password prompts and dedicated login logs.`,
            ],
            [
              `应用支持内部网络别名，完善替换失败后的路由恢复、项目成员选择和移动端快捷方式。`,
              `Applications support internal network aliases, with improvements to route recovery after failed replacements, project member selection and mobile shortcuts.`,
            ],
            [
              `快速离线升级可按需携带组件镜像，并提供 ZIP 升级入口及安装后的 HTTPS/TLS 模式切换。`,
              `Fast offline upgrade packages can include selected component images, with a ZIP upgrade entry point and post-installation HTTPS/TLS mode switching.`,
            ],
          ],
          action: [
            `已有环境可使用对应的快速升级包；仅更新包内包含的组件，其他组件保留原镜像引用。快速包不适用于首次安装，升级仍可能重建服务。OPC UA Server 与 VisionWorker 使用独立版本，请按发布包清单核对。`,
            `Existing deployments can use the matching fast upgrade package. Only included component image references are updated; other components retain their existing references. Fast packages are not for first-time installation and upgrades may recreate services. OPC UA Server and VisionWorker use independent versions; check the package manifest.`,
          ],
        },
        {
          id: `cloud-summary-2026-09-14`,
          date: `2026-09-14`,
          product: `云端`,
          kind: `summary`,
          archived: !1,
          periodStart: `2026-09-01`,
          periodEnd: `2026-09-14`,
          title: [`Builder 完成提醒与任务通知`, `Builder completion alerts and task notifications`],
          summary: [
            `新增可选桌面提醒，站内信可直达 UNS Agent 会话与定时任务，并提供更清晰的部署结果反馈。`,
            `Optional desktop alerts, inbox links to UNS Agent conversations and scheduled tasks, and clearer deployment feedback.`,
          ],
          tags: [
            [`通知体验`, `Notifications`],
            [`应用构建`, `App building`],
          ],
          items: [
            [
              `Builder 支持可选的浏览器桌面提醒，在离开当前会话后通知请求发起人处理完成或失败。`,
              `Builder offers optional browser desktop alerts to the request initiator when work completes or fails away from the active conversation.`,
            ],
            [
              `统一部署失败说明，展示发生阶段、原因摘要与操作建议，并区分可修复问题和平台故障。`,
              `Deployment failure messages now consistently show the stage, cause and suggested action, distinguishing repairable issues from platform faults.`,
            ],
            [
              `站内信可直接定位 UNS Agent 会话或定时任务，任务记录展示通知配置和发送回执。`,
              `Inbox links can open the relevant UNS Agent conversation or scheduled task, with notification settings and delivery receipts shown in task records.`,
            ],
          ],
          action: [
            `Cloud 由平台统一更新，无需安装独立补丁。具体功能以工作空间已启用的能力为准。`,
            `Cloud updates are managed by the platform; no separate patch installation is required. Availability depends on the capabilities enabled for your workspace.`,
          ],
          major: !0,
        },
        {
          id: `enterprise-2-2-6`,
          date: `2026-09-09`,
          product: `企业版`,
          kind: `release`,
          version: `2.2.6`,
          archived: !1,
          title: [
            `多架构部署与更稳健的应用交付`,
            `Multi-architecture deployment and reliable app delivery`,
          ],
          summary: [
            `支持 macOS Apple Silicon 与 Linux ARM64 部署，优化 Launchpad 独立入口、大文件替换和升级恢复。`,
            `Support for macOS Apple Silicon and Linux ARM64, with improved standalone Launchpad access, large application replacements and upgrade recovery.`,
          ],
          tags: [
            [`ARM64`, `ARM64`],
            [`应用交付`, `App delivery`],
            [`访问体验`, `Access experience`],
          ],
          items: [
            [
              `支持 macOS Docker Desktop 与 Linux ARM64，校验安装包、宿主机和镜像架构的一致性。`,
              `Added deployment support for macOS Docker Desktop and Linux ARM64, with architecture checks across packages, hosts and images.`,
            ],
            [
              `Launchpad 独立模式保留登录和导航上下文，新增无权访问提示及移动端添加到主屏幕引导。`,
              `Standalone Launchpad preserves sign-in and navigation context, with clearer access-denied pages and mobile home-screen guidance.`,
            ],
            [
              `应用替换支持分片上传、实时进度和断点续传；导入与替换可配置自定义磁盘映射。`,
              `App replacements support chunked uploads, live progress and resumable transfers; imports and replacements can configure custom volume mappings.`,
            ],
            [
              `支持批量修改用户默认首页和角色，以及管理员配置登录会话有效期。`,
              `Added bulk updates to user home pages and roles, and administrator-configurable session lifetimes.`,
            ],
            [
              `隔离不同浏览器页签的 Flow 编辑上下文，减少无关部署引起的 MQTT 重连，优化 UNS 批量读取和历史查询。`,
              `Isolated Flow editing contexts across browser tabs, reduced MQTT reconnects caused by unrelated deployments, and improved bulk UNS reads and history queries.`,
            ],
            [
              `AI 设置支持可信供应商域名管理；升级预检、数据库备份和失败重试更完善。`,
              `AI settings support trusted provider domains, alongside stronger upgrade prechecks, database backups and retry handling.`,
            ],
          ],
          action: [
            `选择与宿主机架构匹配的正式安装或升级包。升级前执行预检并备份公共库及 Project/App 数据库；使用混合架构离线包时，核对其中标明的模拟运行组件。`,
            `Choose the official installation or upgrade package matching the host architecture. Run prechecks and back up the shared and Project/App databases. For mixed-architecture offline packages, review the components identified as running under emulation.`,
          ],
        },
        {
          id: `cloud-summary-2026-08-31`,
          date: `2026-08-31`,
          product: `云端`,
          kind: `summary`,
          archived: !1,
          periodStart: `2026-08-18`,
          periodEnd: `2026-08-31`,
          title: [`全新工作台与 Launchpad 置顶`, `A new workspace home and Launchpad pins`],
          summary: [
            `集中查看最近访问、收藏、常用应用和收件箱，快速搜索 Anchor 资源，并发现待处理的空间邀请。`,
            `Access recents, favorites, frequently used apps and inbox in one place, search Anchor resources and discover pending workspace invitations.`,
          ],
          tags: [
            [`工作空间`, `Workspace`],
            [`Builder`, `Builder`],
          ],
          items: [
            [
              `首页整合最近访问、收藏、最近使用应用和收件箱；Launchpad 支持应用置顶，全局搜索覆盖 Anchor 模型与场景。`,
              `The home page brings together recents, favorites, recently used apps and inbox; Launchpad supports pinned apps, and global search includes Anchor models and scenes.`,
            ],
            [
              `Builder 预览控制台支持拖拽调整高度，方便同时查看应用和错误信息。`,
              `The Builder preview console can be resized by dragging, making it easier to view the app and errors together.`,
            ],
            [
              `展示待处理的工作空间邀请，方便发现并继续加入流程。`,
              `Pending workspace invitations are displayed so users can find and continue the joining process.`,
            ],
          ],
          action: [
            `Cloud 由平台统一更新，无需安装独立补丁。具体功能以工作空间已启用的能力为准。`,
            `Cloud updates are managed by the platform; no separate patch installation is required. Availability depends on the capabilities enabled for your workspace.`,
          ],
          major: !0,
        },
        {
          id: `enterprise-2-2-5`,
          date: `2026-08-26`,
          product: `企业版`,
          kind: `release`,
          version: `2.2.5`,
          archived: !1,
          title: [
            `安装向导、用户组与应用入口升级`,
            `Installation wizard, user groups and app access`,
          ],
          summary: [
            `提供分步安装向导、多种 TLS 模式和企业用户组，完善应用导入、Flow 绑定及 Launchpad 置顶体验。`,
            `A step-by-step installer, multiple TLS modes and enterprise user groups, with improvements to app imports, Flow bindings and Launchpad pins.`,
          ],
          tags: [
            [`安装部署`, `Installation`],
            [`用户管理`, `User management`],
          ],
          items: [
            [
              `分步安装向导统一 HTTP、TLS、存储、端口及组件配置，并提供进度与诊断提示。`,
              `The installation wizard brings HTTP, TLS, storage, ports and component configuration together with progress and diagnostic guidance.`,
            ],
            [
              `支持无 TLS、平台托管 TLS 和外部代理 TLS 模式，应用入口支持通配符子域名。`,
              `Added non-TLS, platform-managed TLS and externally terminated TLS modes, plus wildcard subdomains for app access.`,
            ],
            [
              `新增企业用户组、用户批量导入导出、模板下载及异步处理进度。`,
              `Added enterprise user groups, bulk user import and export, downloadable templates and asynchronous task progress.`,
            ],
            [
              `UNS 拓扑可同时绑定 Source Flow 与 Event Flow；应用导入支持 Schema、环境变量及 Flow 自动部署。`,
              `UNS topology can bind both Source Flow and Event Flow; app imports support schema and environment settings and automatic Flow deployment.`,
            ],
            [
              `项目与应用支持置顶，最近访问按当前权限展示，优化弱网大文件上传及资源清理。`,
              `Projects and apps can be pinned, recent items respect current permissions, and large-file transfers on weak connections and resource cleanup are improved.`,
            ],
          ],
          action: [
            `按正式升级流程更新镜像与配套部署文件，核对入口 TLS 模式、端口和证书。安装与升级需满足对应发布包的 Rootful Docker 环境要求。`,
            `Update images and deployment files through the official upgrade process. Review the TLS mode, ports and certificates, and meet the release package’s Rootful Docker requirements.`,
          ],
        },
        {
          id: `enterprise-2-2-4`,
          date: `2026-08-21`,
          product: `企业版`,
          kind: `release`,
          version: `2.2.4`,
          archived: !1,
          title: [`网关安全与离线升级可靠性`, `Gateway security and reliable offline upgrades`],
          summary: [
            `收紧 Flow 网关访问边界，增强 MQTT 凭据校验、应用部署恢复和离线升级流程。`,
            `Tighter Flow gateway access controls, stronger MQTT credential checks, and improvements to application recovery and offline upgrades.`,
          ],
          tags: [
            [`安全更新`, `Security`],
            [`稳定性`, `Reliability`],
          ],
          items: [
            [
              `Flow 网关仅开放 HTTP In 相关接口，阻止 Node-RED 管理接口访问。`,
              `The Flow gateway exposes only HTTP In-related endpoints and blocks access to Node-RED administrative APIs.`,
            ],
            [
              `新增 MQTT Auth OpenAPI，加强 API Key 会话重新校验，用户邮箱和手机号采用加密存储。`,
              `Added MQTT Auth OpenAPI support, stronger API Key session revalidation and encrypted storage for user email addresses and phone numbers.`,
            ],
            [
              `修复应用部署卡住、部署超时和容器恢复问题，导入时展示 App ID 与版本差异。`,
              `Fixed stuck deployments, deployment timeouts and container recovery, with App ID and version differences shown during import.`,
            ],
            [
              `支持 Backend 单独升级及 Fleet Agent 离线升级与回滚，升级前显式备份 UNS 数据。`,
              `Added independent Backend upgrades and offline Fleet Agent upgrades and rollback, with explicit UNS backups before upgrades.`,
            ],
            [
              `离线安装复用已加载镜像，完善数据库凭据管理与 AI 设置保存。`,
              `Offline installation reuses loaded images, with improvements to database credential management and saving AI settings.`,
            ],
          ],
          action: [
            `使用对应的正式升级包，并同步部署文件。该版本安装预检要求 Linux AMD64、Rootful Docker 和兼容的 Compose；离线环境可复用已加载的版本化镜像。`,
            `Use the matching official upgrade package and update deployment files. This release’s installation prechecks require Linux AMD64, Rootful Docker and compatible Compose; offline installations can reuse loaded versioned images.`,
          ],
          dateKind: `update`,
          dateTime: `2026-08-21T06:08:49Z`,
          time: `14:08`,
        },
        {
          id: `cloud-summary-2026-08-17`,
          date: `2026-08-17`,
          product: `云端`,
          kind: `summary`,
          archived: !1,
          periodStart: `2026-08-05`,
          periodEnd: `2026-08-17`,
          title: [`项目视图与部署操作优化`, `Project views and deployment workflow`],
          summary: [
            `保留列表偏好，简化应用部署后的权限管理和资源导出。`,
            `Remembered view preferences and streamlined access management and resource export after deployment.`,
          ],
          tags: [
            [`项目管理`, `Projects`],
            [`应用交付`, `App delivery`],
          ],
          items: [
            [
              `项目列表和项目内应用列表记住列表或网格视图选择，并在浏览器标签页间同步。`,
              `Project lists and project app lists remember list or grid preferences and synchronize them across browser tabs.`,
            ],
            [
              `部署成功后突出“管理访问权限”操作，便于继续配置应用访问。`,
              `The deployment success dialog highlights Manage Access for configuring app access.`,
            ],
            [
              `优化应用包导出中的 UNS 与 Flow 选择，支持树形选择和全选。`,
              `Refined UNS and Flow selection in app bundle exports with tree navigation and Select all.`,
            ],
          ],
          action: [
            `Cloud 由平台统一更新，无需安装独立补丁。具体功能以工作空间已启用的能力为准。`,
            `Cloud updates are managed by the platform; no separate patch installation is required. Availability depends on the capabilities enabled for your workspace.`,
          ],
        },
        {
          id: `enterprise-2-2-3`,
          date: `2026-08-11`,
          product: `企业版`,
          kind: `release`,
          version: `2.2.3`,
          archived: !1,
          title: [
            `Flow 集成、会话配置与 Fleet 升级`,
            `Flow integration, session settings and Fleet upgrades`,
          ],
          summary: [
            `扩展应用与 Flow 的集成能力，新增全局会话配置，完善 UNS 导入和 Fleet 离线升级。`,
            `Expanded app-to-Flow integration, global session configuration, and improved UNS imports and offline Fleet upgrades.`,
          ],
          tags: [
            [`集成能力`, `Integrations`],
            [`会话管理`, `Sessions`],
          ],
          items: [
            [
              `新增 Source Flow 与 Event Flow 接口网关，使用 API Key 和平台权限进行访问控制。`,
              `Added gateways for Source Flow and Event Flow interfaces, controlled by API Keys and platform permissions.`,
            ],
            [
              `新增全局会话配置，UNS 导入可复用已有主题目录。`,
              `Added global session configuration and reuse of existing topic folders during UNS imports.`,
            ],
            [
              `补充 Fleet Agent 升级能力，完善离线版本一致性及 UNS Agent 运行配置。`,
              `Enhanced Fleet Agent upgrade handling, offline version consistency and UNS Agent runtime configuration.`,
            ],
            [
              `补充高可用部署方案、故障切换拓扑、运维指南和机器规格建议。`,
              `Added high-availability deployment guidance, failover topology, operations documentation and hardware recommendations.`,
            ],
          ],
          action: [
            `请使用包含后续网关安全修复的正式版本进行升级，并核对应用调用的 Flow 接口。2.2.4 已进一步收紧相关网关访问范围。`,
            `Use an official release that includes the subsequent gateway security fixes, and review the Flow interfaces used by applications. Version 2.2.4 further restricts the relevant gateway access.`,
          ],
          dateKind: `update`,
          dateTime: `2026-08-11T08:45:10Z`,
          time: `16:45`,
        },
        {
          id: `enterprise-2-2-2`,
          date: `2026-08-06`,
          product: `企业版`,
          kind: `release`,
          version: `2.2.2`,
          archived: !1,
          title: [`Embedding 配置与应用替换体验`, `Embedding configuration and app replacements`],
          summary: [
            `完善 AI Embedding 设置、应用覆盖更新和浏览器分片上传兼容性。`,
            `Refinements to AI Embedding settings, app replacement workflows and browser-based multipart uploads.`,
          ],
          tags: [
            [`AI 设置`, `AI settings`],
            [`应用管理`, `App management`],
          ],
          items: [
            [
              `AI Gateway 支持 Embedding 模型配置与校验，未配置时提供明确提示。`,
              `AI Gateway adds Embedding model configuration and validation, with clear guidance when no model is configured.`,
            ],
            [
              `应用替换可编辑名称与描述，覆盖导入保留已有 UNS Schema 配置。`,
              `App replacement supports editing names and descriptions, while overwrite imports preserve existing UNS schema configuration.`,
            ],
            [
              `优化应用导入超时处理与 S3 跨域预检、ETag 访问，提升分片上传兼容性。`,
              `Improved app import timeout handling, S3 CORS preflight and ETag access for multipart upload compatibility.`,
            ],
            [
              `完善 Fleet 断连处理，减少 Vision Worker 机器间调用对用户审计记录的干扰。`,
              `Improved Fleet disconnect handling and kept Vision Worker machine-to-machine calls out of user audit records.`,
            ],
          ],
          action: [
            `使用与目标版本对应的正式安装或升级流程，同步镜像与配套部署文件；升级前备份并确认现有版本的兼容路径。`,
            `Use the official installation or upgrade process for the target version, updating images and deployment files together. Back up first and confirm compatibility with the existing version.`,
          ],
          dateKind: `update`,
          dateTime: `2026-08-06T09:27:02Z`,
          time: `17:27`,
        },
        {
          id: `enterprise-2-2-1`,
          date: `2026-08-06`,
          product: `企业版`,
          kind: `release`,
          version: `2.2.1`,
          archived: !1,
          title: [`大文件导入与断点续传`, `Large application imports and resumable uploads`],
          summary: [
            `支持应用包分片上传、进度展示和断点续传，增强覆盖导入与离线部署稳定性。`,
            `Chunked application package uploads, progress tracking and resume support, with more reliable replacements and offline deployment.`,
          ],
          tags: [
            [`应用导入`, `App imports`],
            [`断点续传`, `Resumable uploads`],
          ],
          items: [
            [
              `应用导入支持分片上传、实时进度与断点续传，取消时清理残留上传会话。`,
              `App imports support chunked uploads, progress and resume, with abandoned upload sessions cleaned up on cancellation.`,
            ],
            [
              `加强 ZIP 与资源归属校验，完善覆盖导入、UNS 增量合并和失败后的资源补偿。`,
              `Strengthened ZIP and asset ownership validation, with improvements to replacements, incremental UNS merging and resource cleanup after failures.`,
            ],
            [
              `改进部署超时、健康检查、端口冲突检测和多 Flow 应用包兼容性。`,
              `Improved deployment timeouts, health checks, port conflict detection and compatibility with packages containing multiple Flows.`,
            ],
            [
              `OpenAPI 文件上传支持预签名 POST Policy；完善离线升级检查和 Launchpad 无权限提示。`,
              `OpenAPI file uploads support presigned POST policies, alongside improved offline upgrade checks and Launchpad access-denied guidance.`,
            ],
          ],
          action: [
            `使用与目标版本对应的正式安装或升级流程，同步镜像与配套部署文件；升级前备份并确认现有版本的兼容路径。`,
            `Use the official installation or upgrade process for the target version, updating images and deployment files together. Back up first and confirm compatibility with the existing version.`,
          ],
          dateKind: `update`,
          dateTime: `2026-08-06T02:44:30Z`,
          time: `10:44`,
        },
        {
          id: `enterprise-2-2-0`,
          date: `2026-08-04`,
          product: `企业版`,
          kind: `release`,
          version: `2.2.0`,
          archived: !1,
          title: [`Fleet、Vision 与企业 AI 能力升级`, `Fleet, Vision and enterprise AI`],
          summary: [
            `扩展节点管理与视觉分析，集成企业 AI Gateway 和 UNS Agent，提供完整离线部署能力。`,
            `Expanded node management and vision analytics, enterprise AI Gateway and UNS Agent integration, and complete offline deployment packages.`,
          ],
          tags: [
            [`Fleet`, `Fleet`],
            [`视觉`, `视觉`],
            [`企业 AI`, `Enterprise AI`],
          ],
          items: [
            [
              `Fleet 支持容器管理、多标签日志、运行状态、集群高可用与多主机部署。`,
              `Fleet adds container management, multi-tab logs, runtime status, cluster high availability and multi-host deployment.`,
            ],
            [
              `Vision 支持摄像头输入、分析任务编排、区域编辑、预览叠加和结果流水线。`,
              `Vision supports camera inputs, analysis task orchestration, region editing, preview overlays and result pipelines.`,
            ],
            [
              `App Bundle 支持覆盖导入与 Flow/UNS 增量更新，Launchpad 新增封面、收藏和最近打开。`,
              `App Bundles support replacement imports and incremental Flow/UNS updates; Launchpad adds covers, favorites and recently opened apps.`,
            ],
            [
              `集成企业 AI Gateway、系统 AI 设置与私有化 UNS Agent，支持 MQTT 联动及授权控制。`,
              `Integrated enterprise AI Gateway, system AI settings and a privately deployed UNS Agent, with MQTT interaction and license controls.`,
            ],
            [
              `提供完整离线部署包，Fleet Agent 作为版本化组件随包交付，并完善升级校验。`,
              `Added complete offline deployment packages with Fleet Agent as a versioned component and improved upgrade validation.`,
            ],
          ],
          action: [
            `使用与目标版本对应的正式安装或升级流程，同步镜像与配套部署文件；升级前备份并确认现有版本的兼容路径。`,
            `Use the official installation or upgrade process for the target version, updating images and deployment files together. Back up first and confirm compatibility with the existing version.`,
          ],
          dateKind: `update`,
          dateTime: `2026-08-04T07:51:25Z`,
          time: `15:51`,
        },
        {
          id: `cloud-summary-2026-08-04`,
          date: `2026-08-04`,
          product: `云端`,
          kind: `summary`,
          archived: !1,
          periodStart: `2026-07-22`,
          periodEnd: `2026-08-04`,
          title: [`应用封面、导出配置与收藏`, `App covers, export options and favorites`],
          summary: [
            `完善应用展示与交付配置，让常用项目和应用更容易找到。`,
            `Improved app presentation and export configuration, with easier access to frequently used projects and apps.`,
          ],
          tags: [
            [`应用管理`, `App management`],
            [`体验优化`, `Experience`],
          ],
          items: [
            [
              `支持上传应用封面和图标，以及从当前预览页面手动截图设为封面。`,
              `Added app cover and icon uploads and manual cover capture from the current preview page.`,
            ],
            [
              `新增应用包导出配置，完善导出内容选择、下载校验与防重复请求。`,
              `Added app bundle export configuration and improved content selection, download validation and duplicate-request prevention.`,
            ],
            [
              `收藏的项目与应用在列表和卡片视图中优先展示。`,
              `Favorite projects and apps appear first in both list and card views.`,
            ],
          ],
          action: [
            `Cloud 由平台统一更新，无需安装独立补丁。具体功能以工作空间已启用的能力为准。`,
            `Cloud updates are managed by the platform; no separate patch installation is required. Availability depends on the capabilities enabled for your workspace.`,
          ],
        },
        {
          id: `enterprise-2-1-0`,
          date: `2026-07-21`,
          product: `企业版`,
          kind: `release`,
          version: `2.1.0`,
          archived: !1,
          title: [`Anchor 三维场景与文件集成`, `Anchor 3D scenes and file integration`],
          summary: [
            `新增工业三维场景编辑、实时数据展示及文件 OpenAPI，优化应用导入与项目体验。`,
            `Industrial 3D scene editing, live data displays and file OpenAPIs, with improvements to app imports and project workflows.`,
          ],
          tags: [
            [`Anchor`, `Anchor`],
            [`OpenAPI`, `OpenAPI`],
          ],
          items: [
            [
              `Anchor 支持模型库、场景编辑、灯光与视角控制、爆炸效果以及实时 MQTT 数据展示。`,
              `Anchor adds a model library, scene editing, lighting and camera controls, exploded views and live MQTT data displays.`,
            ],
            [
              `场景可通过二维码分享并在移动端查看，主题与语言跟随主应用。`,
              `Scenes can be shared via QR codes and viewed on mobile, with themes and languages synchronized to the main application.`,
            ],
            [
              `新增按项目隔离的文件上传、下载与删除 OpenAPI，统一对象存储访问入口。`,
              `Added project-isolated file upload, download and delete OpenAPIs with unified object storage access.`,
            ],
            [
              `应用导入自动带入项目上下文，支持 ZIP64，删除应用时清理容器网络及相关资源。`,
              `App imports automatically include project context and support ZIP64; deleting apps cleans up container networks and related resources.`,
            ],
            [
              `完善 Launchpad 角色与筛选、项目 ID 展示及深色主题。`,
              `Refined Launchpad roles and filters, project ID displays and dark theme support.`,
            ],
          ],
          action: [
            `使用与目标版本对应的正式安装或升级流程，同步镜像与配套部署文件；升级前备份并确认现有版本的兼容路径。`,
            `Use the official installation or upgrade process for the target version, updating images and deployment files together. Back up first and confirm compatibility with the existing version.`,
          ],
          dateKind: `update`,
          dateTime: `2026-07-21T06:30:30Z`,
          time: `14:30`,
        },
        {
          id: `cloud-summary-2026-07-21`,
          date: `2026-07-21`,
          product: `云端`,
          kind: `summary`,
          archived: !1,
          periodStart: `2026-07-09`,
          periodEnd: `2026-07-21`,
          title: [
            `UNS Agent 技能、定时任务与会话命令`,
            `UNS Agent skills, scheduled tasks and commands`,
          ],
          summary: [
            `关联本地技能文件夹，管理定时任务来源，使用会话导出、备份恢复、旁问和消息排队。`,
            `Connect local skill folders, navigate scheduled-task sources, and use conversation export, backup, restore, side questions and message queues.`,
          ],
          tags: [
            [`UNS Agent`, `UNS Agent`],
            [`国际化`, `Localization`],
          ],
          items: [
            [
              `支持关联本地技能文件夹，提供技能搜索、内容查看和导入；增强定时任务与来源会话的跳转。`,
              `Added linked local skill folders, skill search, content viewing and imports, plus navigation between scheduled tasks and their source conversations.`,
            ],
            [
              `UNS Agent 增加会话导出、备份恢复、旁问等命令交互，支持回复期间消息排队和会话收藏。`,
              `UNS Agent gained export, backup, restore and side-question commands, message queuing during replies and conversation favorites.`,
            ],
            [
              `未手动指定界面语言时跟随浏览器偏好，同时保持界面与服务端提示的语言一致。`,
              `The interface follows browser language preferences when no manual choice is set, keeping interface and server messages aligned.`,
            ],
          ],
          action: [
            `Cloud 由平台统一更新，无需安装独立补丁。具体功能以工作空间已启用的能力为准。`,
            `Cloud updates are managed by the platform; no separate patch installation is required. Availability depends on the capabilities enabled for your workspace.`,
          ],
          major: !0,
        },
        {
          id: `enterprise-2-0-0`,
          date: `2026-07-16`,
          product: `企业版`,
          kind: `release`,
          version: `2.0.0`,
          archived: !1,
          title: [
            `Enterprise 平台与统一应用入口`,
            `Enterprise platform and a unified app launcher`,
          ],
          summary: [
            `统一项目、成员、角色与应用管理，提供 Launchpad、全新导航及完整的系统设置。`,
            `Unified project, member, role and app management, with Launchpad, redesigned navigation and comprehensive system settings.`,
          ],
          tags: [
            [`平台发布`, `Platform release`],
            [`项目管理`, `Projects`],
          ],
          items: [
            [
              `创建项目并管理成员和角色，支持导入、部署或接入外部应用。`,
              `Create projects and manage members and roles; import, deploy or connect external applications.`,
            ],
            [
              `Launchpad 按项目成员与角色权限展示可访问的应用，并支持应用默认首页。`,
              `Launchpad shows accessible apps based on project membership and roles, with configurable app home pages.`,
            ],
            [
              `采用可折叠侧边导航，首页提供最近资源与节点资源使用情况。`,
              `Added collapsible side navigation and a home page with recent resources and node resource usage.`,
            ],
            [
              `提供个人资料、语言偏好、密码、API Key、用户管理、OAuth 客户端及审计日志设置。`,
              `Added profile, language, password, API Key, user management, OAuth client and audit log settings.`,
            ],
            [
              `支持查看 License 状态与有效期，以及在线、离线激活。`,
              `View license status and expiry, with online and offline activation.`,
            ],
          ],
          action: [
            `使用正式安装包部署，按环境选择在线或离线激活。已有部署升级前请联系团队核对版本兼容与数据迁移路径。`,
            `Deploy using the official installation package and choose online or offline activation for the environment. For existing installations, contact the team to confirm version compatibility and the migration path.`,
          ],
        },
        {
          id: `cloud-summary-2026-07-08`,
          date: `2026-07-08`,
          product: `云端`,
          kind: `summary`,
          archived: !1,
          periodStart: `2026-06-25`,
          periodEnd: `2026-07-08`,
          title: [
            `注册、购买确认与 MQTT 凭据`,
            `Signup, purchase confirmation and MQTT credentials`,
          ],
          summary: [
            `简化邮箱注册后的访问流程，让席位购买与连接配置更清晰。`,
            `Simplified access after email signup and clarified seat purchases and connection settings.`,
          ],
          tags: [
            [`账号体验`, `Account experience`],
            [`连接管理`, `Connectivity`],
          ],
          items: [
            [
              `邮箱注册验证通过后自动登录，并保留原先的目标页面。`,
              `Users are signed in automatically after email verification and returned to their intended destination.`,
            ],
            [
              `新增席位购买的付款确认步骤，在确认后提交购买。`,
              `Added a payment confirmation step before completing a seat purchase.`,
            ],
            [
              `MQTT 凭据创建支持随机 Client ID 后缀选项，并显示对应格式提示。`,
              `Added an optional random Client ID suffix when creating MQTT credentials, with a format hint.`,
            ],
          ],
          action: [
            `Cloud 由平台统一更新，无需安装独立补丁。具体功能以工作空间已启用的能力为准。`,
            `Cloud updates are managed by the platform; no separate patch installation is required. Availability depends on the capabilities enabled for your workspace.`,
          ],
        },
        {
          id: `cloud-summary-2026-06-24`,
          date: `2026-06-24`,
          product: `云端`,
          kind: `summary`,
          archived: !1,
          periodStart: `2026-06-11`,
          periodEnd: `2026-06-24`,
          title: [
            `跨平台应用交付与 Builder 附件`,
            `Cross-platform app delivery and Builder attachments`,
          ],
          summary: [
            `新增 Cloud 应用导入导出、版本快照下载，以及聊天附件预览、文件和技能引用。`,
            `New Cloud app import and export, version snapshot downloads, attachment previews, and file and skill mentions in chat.`,
          ],
          tags: [
            [`应用交付`, `App delivery`],
            [`Builder`, `Builder`],
          ],
          items: [
            [
              `Cloud 支持跨平台应用导入与导出，并可下载已发布版本的快照包。`,
              `Added cross-platform app import and export in Cloud, plus downloads of released version snapshots.`,
            ],
            [
              `聊天输入支持附件预览，以及文件和技能引用；文件浏览区域可调整宽度。`,
              `Added attachment previews and file and skill mentions in chat, with a resizable file explorer.`,
            ],
            [
              `改进聊天历史向上加载时的位置保持，并展示上下文压缩状态。`,
              `Improved scroll position when loading earlier messages and added context compaction status.`,
            ],
          ],
          action: [
            `Cloud 由平台统一更新，无需安装独立补丁。具体功能以工作空间已启用的能力为准。`,
            `Cloud updates are managed by the platform; no separate patch installation is required. Availability depends on the capabilities enabled for your workspace.`,
          ],
          major: !0,
        },
        {
          id: `cloud-summary-2026-06-10`,
          date: `2026-06-10`,
          product: `云端`,
          kind: `summary`,
          archived: !1,
          periodStart: `2026-05-29`,
          periodEnd: `2026-06-10`,
          title: [`Anchor 三维场景搭建`, `Build 3D scenes with Anchor`],
          summary: [
            `支持模型与实例组合、实际高度校验，完善三维场景搭建与运行体验。`,
            `Combine models and instances, validate real-world height, and build and run 3D scenes with a smoother workflow.`,
          ],
          tags: [
            [`三维场景`, `3D scenes`],
            [`应用构建`, `App building`],
          ],
          items: [
            [
              `优化 Anchor 模型与实例查看、场景组装及实际高度校验。`,
              `Improved Anchor model and instance viewing, scene assembly and real-world height validation.`,
            ],
            [
              `完善应用封面展示、预览错误提示以及 Builder 控件布局。`,
              `Refined app cover support, preview error feedback and Builder control layouts.`,
            ],
          ],
          action: [
            `Cloud 由平台统一更新，无需安装独立补丁。具体功能以工作空间已启用的能力为准。`,
            `Cloud updates are managed by the platform; no separate patch installation is required. Availability depends on the capabilities enabled for your workspace.`,
          ],
          major: !0,
        },
        {
          id: `cloud-summary-2026-05-28`,
          date: `2026-05-28`,
          product: `云端`,
          kind: `summary`,
          archived: !1,
          periodStart: `2026-05-15`,
          periodEnd: `2026-05-28`,
          title: [`应用编辑与预览体验优化`, `Smoother app editing and previews`],
          summary: [
            `优化应用与项目资料编辑、Builder 启动和预览交互。`,
            `Refined app and project editing, Builder startup and preview interactions.`,
          ],
          tags: [[`体验优化`, `Experience`]],
          items: [
            [
              `优化应用和项目编辑弹窗，长描述在输入框内滚动，操作布局更清晰。`,
              `Improved app and project editing dialogs, with long descriptions scrolling within the input area.`,
            ],
            [
              `项目应用支持在新标签页运行，并优化 Builder 启动、版本部署与预览设备尺寸切换。`,
              `Project apps can open in a new tab, with refinements to Builder startup, version deployment and preview device sizing.`,
            ],
          ],
          action: [
            `Cloud 由平台统一更新，无需安装独立补丁。具体功能以工作空间已启用的能力为准。`,
            `Cloud updates are managed by the platform; no separate patch installation is required. Availability depends on the capabilities enabled for your workspace.`,
          ],
        },
        {
          id: `cloud-1-3-0`,
          date: `2026-05-14`,
          product: `云端`,
          version: `1.3.0`,
          archived: !1,
          title: [`更流畅的构建与使用体验`, `A smoother building experience`],
          summary: [
            `优化工作空间创建、Builder 交互与 Notebook 加载，支持界面语言切换。`,
            `Improved workspace creation, Builder interactions and Notebook loading, with interface language switching.`,
          ],
          tags: [
            [`体验优化`, `Experience`],
            [`国际化`, `Localization`],
          ],
          items: [
            [
              `优化 Workspace 创建流程与 Anchor 功能。`,
              `Improved Workspace creation and Anchor functionality.`,
            ],
            [`支持界面多语言切换，完善国际化体验。`, `Added interface language switching.`],
            [
              `升级 Builder 导航、Data Panel 与引用样式；支持 PRD 持久化和 Skill，合并 Resource Panel 至 Code Panel。`,
              `Updated Builder navigation, Data Panel and reference styling; added PRD persistence and Skill support, and merged Resource Panel into Code Panel.`,
            ],
            [
              `Free chat 默认展开 Preview Panel；Launchpad 运行时支持全屏。`,
              `Free chat opens the Preview Panel by default; Launchpad runtime supports fullscreen.`,
            ],
            [
              `移除 etcd 依赖，修复 Notebook 界面加载慢的问题。`,
              `Removed the etcd dependency and addressed slow Notebook interface loading.`,
            ],
          ],
          action: [
            `Cloud 由平台统一更新，托管客户无需安装独立补丁。`,
            `Cloud updates are managed by the platform. Hosted customers do not need to install a separate patch.`,
          ],
          kind: `release`,
        },
        {
          id: `enterprise-legacy-2026-05-08`,
          date: `2026-05-08`,
          product: `企业版`,
          kind: `legacy`,
          archived: !0,
          title: [`Windows 环境卸载兼容性修复`, `Windows uninstall compatibility`],
          summary: [
            `修复 Windows Shell 环境中的容器服务配置解析，改善卸载兼容性。`,
            `Fixed container service profile parsing in Windows shells to improve uninstall compatibility.`,
          ],
          tags: [[`部署维护`, `Deployment maintenance`]],
          items: [
            [
              `调整卸载时的 Compose 配置去重方式，避免 Windows Shell 对排序命令的兼容性影响。`,
              `Updated Compose profile deduplication during uninstall to avoid sort-command compatibility issues in Windows shells.`,
            ],
          ],
          action: [
            `适用于早期 Enterprise 部署。升级请结合当前安装版本，由 Tier0 团队确认对应的镜像、部署文件与升级路径。`,
            `Applies to earlier Enterprise deployments. Contact the Tier0 team to confirm the images, deployment files and upgrade path appropriate for your installed version.`,
          ],
        },
        {
          id: `enterprise-legacy-2026-04-29`,
          date: `2026-04-29`,
          product: `企业版`,
          kind: `legacy`,
          archived: !0,
          title: [`UNS 数据处理与 OAuth 接口修复`, `UNS data handling and OAuth endpoints`],
          summary: [
            `完善 JSON 数据接入与实时展示，修复 OAuth 接口注册。`,
            `Improved JSON data ingestion and live display, and fixed OAuth endpoint registration.`,
          ],
          tags: [
            [`数据接入`, `Data ingestion`],
            [`身份认证`, `Authentication`],
          ],
          items: [
            [
              `UNS JSON 数据接入保留原始内容，补齐已有 JSONB 节点的必要字段配置。`,
              `UNS JSON ingestion preserves the original payload and repairs required field definitions for existing JSONB nodes.`,
            ],
            [
              `修复 JSON 数据在实时界面中的展开显示，并完善详情字段展示。`,
              `Fixed expanded JSON payload display in live views and improved detail field presentation.`,
            ],
            [
              `补齐 OAuth 授权、令牌、退出登录和用户信息接口的注册。`,
              `Restored registration of OAuth authorization, token, logout and user-info endpoints.`,
            ],
          ],
          action: [
            `适用于早期 Enterprise 部署。升级请结合当前安装版本，由 Tier0 团队确认对应的镜像、部署文件与升级路径。`,
            `Applies to earlier Enterprise deployments. Contact the Tier0 team to confirm the images, deployment files and upgrade path appropriate for your installed version.`,
          ],
        },
        {
          id: `enterprise-legacy-2026-04-24`,
          date: `2026-04-24`,
          product: `企业版`,
          kind: `legacy`,
          archived: !0,
          title: [`项目删除与 Flow 清理修复`, `Project deletion and Flow cleanup`],
          summary: [
            `修复删除项目时关联 Flow 的清理异常。`,
            `Fixed cleanup of associated Flows when deleting a project.`,
          ],
          tags: [
            [`项目管理`, `Projects`],
            [`问题修复`, `Fixes`],
          ],
          items: [
            [
              `按 Source Flow 与 Event Flow 类型选择对应服务执行删除，避免使用错误的 Flow 服务。`,
              `Flow deletion now uses the service matching Source Flow or Event Flow, avoiding cleanup requests being sent to the wrong service.`,
            ],
          ],
          action: [
            `适用于早期 Enterprise 部署。升级请结合当前安装版本，由 Tier0 团队确认对应的镜像、部署文件与升级路径。`,
            `Applies to earlier Enterprise deployments. Contact the Tier0 team to confirm the images, deployment files and upgrade path appropriate for your installed version.`,
          ],
        },
        {
          id: `enterprise-legacy-2026-04-23`,
          date: `2026-04-23`,
          product: `企业版`,
          kind: `legacy`,
          archived: !0,
          title: [
            `Notebook 审计与数据存储配置`,
            `Notebook auditing and data storage configuration`,
          ],
          summary: [
            `补充 Notebook 文件夹操作审计，修正本地部署的数据存储连接配置。`,
            `Added Notebook folder audit events and corrected data storage connections for local deployments.`,
          ],
          tags: [
            [`审计日志`, `Audit logs`],
            [`部署维护`, `Deployment maintenance`],
          ],
          items: [
            [
              `记录 Notebook 文件夹的创建、改名与删除，并包含操作前后的名称和路径信息。`,
              `Notebook folder creation, renaming and deletion are audited with relevant before-and-after names and paths.`,
            ],
            [
              `修正本地部署中的数据写入连接配置，使数据写入目标与对应存储服务保持一致。`,
              `Corrected data sink connections in local deployments so writes target the appropriate storage service.`,
            ],
          ],
          action: [
            `适用于早期 Enterprise 部署。升级请结合当前安装版本，由 Tier0 团队确认对应的镜像、部署文件与升级路径。`,
            `Applies to earlier Enterprise deployments. Contact the Tier0 team to confirm the images, deployment files and upgrade path appropriate for your installed version.`,
          ],
        },
        {
          id: `cloud-1-2-0`,
          date: `2026-04-19`,
          product: `云端`,
          version: `1.2.0`,
          archived: !0,
          title: [`平台能力增强与应用构建升级`, `Platform capabilities and application building`],
          summary: [
            `完善权限控制、UNS Agent 与 App Builder，让应用开发和运行更连贯。`,
            `Improvements to access controls, UNS Agent and App Builder connect application development and runtime workflows.`,
          ],
          tags: [
            [`应用构建`, `App building`],
            [`权限管理`, `Access control`],
          ],
          items: [
            [
              `Anchor 新增模型实例与场景管理，支持缩略图展示。`,
              `Added model instance and scene management in Anchor, including thumbnails.`,
            ],
            [
              `完善 Projects 与 Launchpad 的细粒度权限，以及角色对应的菜单可见性。`,
              `Refined granular permissions in Projects and Launchpad and role-based menu visibility.`,
            ],
            [
              `重构 App Builder，优化构建、预览与平台集成；统一 App 技术栈。`,
              `Refactored App Builder and improved building, preview and platform integration; unified the App technology stack.`,
            ],
            [
              `新增 UNS Agent 能力，优化 Flow 与 Notebook 版本管理体验。`,
              `Added UNS Agent capabilities and refined Flow and Notebook version management.`,
            ],
            [
              `整理国际化词条，完成存储架构从 EFS 到 EBS 的迁移。`,
              `Cleaned up localization strings and migrated the storage architecture from EFS to EBS.`,
            ],
          ],
          action: [
            `历史 Cloud 更新由平台统一交付，具体能力以当前租户版本为准。`,
            `This historical Cloud update was delivered by the platform. Available capabilities depend on the current tenant version.`,
          ],
          kind: `release`,
        },
        {
          id: `cloud-1-0-1`,
          date: `2026-03-31`,
          product: `云端`,
          version: `1.0.1`,
          archived: !0,
          title: [`App 发布、版本记录与交付`, `App publishing, history and delivery`],
          summary: [
            `支持从 App Builder 直接发布、查看发布记录及下载已发布的应用包。`,
            `Publish directly from App Builder, review release history and download published application packages.`,
          ],
          tags: [
            [`应用发布`, `App publishing`],
            [`改进`, `Improvements`],
          ],
          items: [
            [
              `支持在 App Builder 内直接发布应用。`,
              `Added direct application publishing from App Builder.`,
            ],
            [
              `新增 App 发布历史，查看版本与发布时间。`,
              `Added App release history with version and publication time.`,
            ],
            [
              `支持下载已发布 App 包，用于本地存档与离线交付。`,
              `Added downloads of published App packages for local archiving and offline delivery.`,
            ],
            [
              `调整 App 页面鉴权逻辑与邀请码格式。`,
              `Updated App page authentication logic and invitation code format.`,
            ],
          ],
          action: [
            `Cloud 由平台统一更新。应用下载与发布能力以对应权限为准。`,
            `Cloud updates are managed by the platform. App download and publishing depend on the relevant permissions.`,
          ],
          kind: `release`,
        },
        {
          id: `enterprise-1-0-0`,
          date: `2026-03-13`,
          product: `企业版`,
          version: `1.0.0`,
          archived: !1,
          title: [`企业部署、项目隔离与应用交付`, `Enterprise activation and application delivery`],
          summary: [
            `支持 License 在线激活、项目范围内资源隔离，以及应用包导入与运行。`,
            `Online license activation, project-scoped resources, and application package import and hosting.`,
          ],
          tags: [
            [`企业版`, `企业版`],
            [`应用交付`, `App delivery`],
          ],
          items: [
            [
              `支持基于 License Key 的在线激活；未激活或过期时显示激活表单。`,
              `Added online activation with a License Key and an activation form for inactive or expired installations.`,
            ],
            [
              `区分管理员与普通账号视图及菜单；UNS 与 Node-RED Flow 按所属 Project 隔离。`,
              `Separated administrator and regular-user views and menus; scoped UNS and Node-RED Flow resources to their projects.`,
            ],
            [
              `支持标准 ZIP 应用包导入向导与资源编排。`,
              `Added an import wizard and resource orchestration for standard ZIP application packages.`,
            ],
            [
              `支持静态前端托管、自动路由注册，以及 Launchpad 应用启动入口。`,
              `Added static frontend hosting, automatic route registration and application launch through Launchpad.`,
            ],
          ],
          action: [
            `通过对应版本的正式安装或升级流程交付。实际升级目标需结合现有部署版本选择。`,
            `Use the official installation or upgrade process for the chosen release. Select the upgrade target based on the existing deployment.`,
          ],
          kind: `release`,
        },
        {
          id: `cloud-1-0-0`,
          date: `2026-03-06`,
          product: `云端`,
          version: `1.0.0`,
          archived: !0,
          title: [`Cloud 正式商用阶段`, `Cloud commercial release`],
          summary: [
            `推进生产部署高可用能力与正式商用流程。`,
            `Production deployment high-availability capabilities and commercial service workflows.`,
          ],
          tags: [[`平台更新`, `Platform update`]],
          items: [
            [
              `发布记录载明本版本聚焦生产环境高可用及正式商用。`,
              `The release record identifies production high availability and commercial launch as the focus of this version.`,
            ],
          ],
          action: [
            `Cloud 由平台统一更新；该历史发布记录不代表当前服务可用率或 SLA 承诺。`,
            `Cloud updates are managed by the platform. This historical release record is not a statement of current availability or an SLA.`,
          ],
          kind: `release`,
        },
        {
          id: `cloud-0-9-2`,
          date: `2026-02-28`,
          product: `云端`,
          version: `0.9.2`,
          archived: !0,
          title: [`版本管理与试用流程`, `Version management and trial workflows`],
          summary: [
            `完善版本控制、商业化与试用流程。`,
            `Updates to version control, commercial workflows and trials.`,
          ],
          tags: [[`Beta`, `Beta`]],
          items: [
            [
              `发布记录载明本版本聚焦版本控制、商业化闭环与试用。`,
              `The release record identifies version control, commercial workflows and trials as the focus of this version.`,
            ],
          ],
          action: [
            `本条为历史 Beta 版本记录，当前使用方式以租户已上线版本为准。`,
            `This is a historical Beta release. Current behavior depends on the version deployed for the tenant.`,
          ],
          kind: `release`,
        },
      ]),
      (le = [
        {
          id: `cloud-builder-notifications`,
          target: `cloud-summary-2026-09-14`,
          date: `2026-09-02`,
          category: [`Builder`, `Builder`],
          title: [`Builder 完成提醒`, `Builder completion alerts`],
          summary: [
            `开启桌面提醒后，离开会话也能获知任务完成或失败，点击通知即可回到会话。`,
            `Enable desktop alerts to know when work finishes or fails while you are away, then return to the conversation with a click.`,
          ],
        },
        {
          id: `cloud-workspace-home`,
          target: `cloud-summary-2026-08-31`,
          date: `2026-08-20`,
          category: [`工作台`, `Workspace`],
          title: [`全新首页与 Launchpad`, `A new home and Launchpad`],
          summary: [
            `最近访问、收藏、常用应用与收件箱集中展示，支持应用置顶和 Anchor 模型、场景搜索。`,
            `Bring recents, favorites, apps and inbox together, pin apps in Launchpad, and search Anchor models and scenes.`,
          ],
        },
        {
          id: `cloud-agent-conversations`,
          target: `cloud-summary-2026-07-21`,
          date: `2026-07-21`,
          category: [`UNS Agent`, `UNS Agent`],
          title: [`会话命令与消息排队`, `Conversation commands and queues`],
          summary: [
            `支持会话导出、备份恢复与旁问；AI 回复时可继续输入，消息按顺序自动发送。`,
            `Export, back up and restore conversations, ask side questions, and queue messages while the agent is responding.`,
          ],
        },
        {
          id: `cloud-agent-skills`,
          target: `cloud-summary-2026-07-21`,
          date: `2026-07-15`,
          category: [`UNS Agent`, `UNS Agent`],
          title: [`本地技能与定时任务`, `Local skills and scheduled tasks`],
          summary: [
            `关联本地技能文件夹，搜索、查看和导入技能；从定时任务直接返回来源会话与画布。`,
            `Connect a local skill folder to search, view and import skills, and navigate from scheduled tasks to their source conversations and canvas cards.`,
          ],
        },
        {
          id: `cloud-app-portability`,
          target: `cloud-summary-2026-06-24`,
          date: `2026-06-11`,
          category: [`应用交付`, `App delivery`],
          title: [`跨平台应用导入与导出`, `Cross-platform app import and export`],
          summary: [
            `在 Cloud 中导入应用包，或导出已有版本的应用，让应用交付和迁移更方便。`,
            `Import app packages into Cloud or export existing app versions for easier delivery and migration.`,
          ],
        },
        {
          id: `cloud-anchor-scenes`,
          target: `cloud-summary-2026-06-10`,
          date: `2026-06-08`,
          category: [`Anchor`, `Anchor`],
          title: [`Anchor 三维场景搭建`, `Build 3D scenes with Anchor`],
          summary: [
            `组合模型与实例搭建三维场景，支持实际高度校验，完善模型查看与场景运行体验。`,
            `Assemble models and instances into 3D scenes with real-world height validation and improved model viewing and scene runtime behavior.`,
          ],
        },
      ]),
      (ue = {
        "zh-CN": {
          heroSoft: `产品更新与`,
          heroStrong: `发布说明`,
          lead: `查看 Tier0 Cloud 与 Enterprise 的版本发布、新功能与升级方式。`,
          contactCta: `联系我们`,
          contactLinkLabel: `发送邮件至 {email} 联系 Tier0 团队`,
          securityLink: `安全公告`,
          hlTitle: `Cloud 重大更新`,
          hlCount: `{n} 项新功能`,
          hlView: `查看更新`,
          hlViewLabel: `查看更新：{title}`,
          feedTitle: `全部更新`,
          filtersLabel: `筛选更新记录`,
          productLabel: `产品 / 环境`,
          allProducts: `全部`,
          categoryLabel: `更新类型`,
          allCategories: `全部更新`,
          catRelease: `版本发布`,
          catArchive: `历史记录`,
          timeLabel: `时间`,
          allTime: `全部时间`,
          activeFilters: `已筛选`,
          clearAll: `清除全部`,
          removeFilter: `移除筛选：{label}`,
          searchChip: `“{term}”`,
          helpTitle: `需要升级支持？`,
          helpBody: `版本适用范围、维护安排或升级问题，请发送邮件至`,
          helpCta: `发送邮件`,
          searchPlaceholder: `搜索版本或功能`,
          searchLabel: `搜索更新记录`,
          clearSearch: `清除搜索`,
          total: `共 {n} 条更新`,
          zeroResults: `没有匹配的更新记录`,
          emptyTitle: `没有匹配的更新记录`,
          emptyBody: `换个关键词，或清除筛选条件再试。`,
          clearFilters: `清除筛选`,
          loadMore: `加载更多`,
          remaining: `还有 {n} 条`,
          labelMajor: `重大更新`,
          labelSummary: `更新摘要`,
          labelLegacy: `历史更新`,
          labelArchived: `历史版本`,
          labelReleased: `已发布`,
          datePeriod: `更新周期`,
          dateUpdate: `更新日期`,
          dateRelease: `发布日期`,
          timeZone: `UTC+8`,
          dateShort: `{m} 月 {d} 日`,
          monthLabel: `{y} 年 {m} 月`,
          monthCount: `{n} 条更新`,
          monthCountOne: `1 条更新`,
          action: `使用与升级`,
          copyLabel: `复制「{title}」的链接`,
          copied: `已复制链接`,
          copyFailed: `复制失败，请手动复制地址栏`,
        },
        en: {
          heroSoft: `Changelog &`,
          heroStrong: `Release notes`,
          lead: `Releases, new features and upgrade guidance for Tier0 Cloud and Enterprise.`,
          contactCta: `Contact us`,
          contactLinkLabel: `Email {email} to contact the Tier0 team`,
          securityLink: `Security advisories`,
          hlTitle: `Cloud feature highlights`,
          hlCount: `{n} new features`,
          hlView: `View update`,
          hlViewLabel: `View update: {title}`,
          feedTitle: `All updates`,
          filtersLabel: `Filter updates`,
          productLabel: `Product / environment`,
          allProducts: `All`,
          categoryLabel: `Update type`,
          allCategories: `All updates`,
          catRelease: `Versioned release`,
          catArchive: `Historical`,
          timeLabel: `Date`,
          allTime: `All time`,
          activeFilters: `Filtered by`,
          clearAll: `Clear all`,
          removeFilter: `Remove filter: {label}`,
          searchChip: `“{term}”`,
          helpTitle: `Need upgrade support?`,
          helpBody: `Questions about applicability, maintenance or upgrades? Email`,
          helpCta: `Send email`,
          searchPlaceholder: `Search versions or features`,
          searchLabel: `Search updates`,
          clearSearch: `Clear search`,
          total: `{n} updates`,
          zeroResults: `No matching updates`,
          emptyTitle: `No matching updates`,
          emptyBody: `Try another keyword or clear your filters.`,
          clearFilters: `Clear filters`,
          loadMore: `Load more`,
          remaining: `{n} more`,
          labelMajor: `Major update`,
          labelSummary: `Update digest`,
          labelLegacy: `Historical update`,
          labelArchived: `Archived release`,
          labelReleased: `Released`,
          datePeriod: `Update period`,
          dateUpdate: `Update date`,
          dateRelease: `Release date`,
          timeZone: `UTC+8`,
          dateShort: `{month} {d}`,
          monthLabel: `{month} {y}`,
          monthCount: `{n} updates`,
          monthCountOne: `1 update`,
          action: `Access & upgrades`,
          copyLabel: `Copy link to {title}`,
          copied: `Link copied`,
          copyFailed: `Copy failed — use the address bar`,
        },
      }),
      (W = `../../styles/site-fonts.css`),
      (G = `.t0cl{--t0-bg:#fff;--t0-surface:#f9f9f9;--t0-subtle:#f3f3f3;--t0-border:#ebebeb;--t0-input:#e2e2e2;--t0-fg:#050b14;--t0-fg2:#343434;--t0-muted:#62666b;--t0-faint:#8a8d90;--t0-lime:#b2ed1d;--t0-lime-hover:#a2db1a;--t0-lime-50:#f7fde8;--t0-lime-100:#eefad0;--t0-lime-200:#dcf797;--t0-lime-700:#7ea815;--t0-lime-900:#48640c;--t0-lime-glow:rgba(178,237,29,.45);--t0-tone-soft:#f6fce8;--t0-tone-strong:#ebf8c6;--t0-tone-plain:#f6f6f6;--t0-blue:#2869d0;--t0-blue-50:#eaf2fe;--t0-green:#3f7a0a;--t0-green-50:#effadb;--t0-sans:'IBM Plex Sans','IBM Plex Sans SC','PingFang SC','Noto Sans SC','Hiragino Sans GB','Microsoft YaHei',system-ui,sans-serif;--t0-mono:'IBM Plex Mono',ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;--t0-gutter:24px;--t0-max:1200px;--t0-scroll-offset:88px;--t0-side:240px;--t0-aside:148px;--t0-rail:36px;--t0-ease:cubic-bezier(.2,.7,.2,1);color:var(--t0-fg);font:400 14px/1.6 var(--t0-sans);-webkit-font-smoothing:antialiased;text-align:left;container:t0cl/inline-size;overflow:clip;overflow-clip-margin:8px;}.t0cl *,.t0cl *::before,.t0cl *::after{box-sizing:border-box}.t0cl :where(h1,h2,h3,h4,p,ol,ul,dl,dd){margin:0;padding:0}.t0cl :where(ol,ul){list-style:none}.t0cl :where(button,input){font:inherit;color:inherit;letter-spacing:inherit;margin:0}.t0cl :where(button){background:none;border:0;padding:0;cursor:pointer}.t0cl :where(a){color:inherit;text-decoration:none}.t0cl :where(a,button,input,article):focus-visible{outline:2px solid var(--t0-fg);outline-offset:2px}.t0cl [hidden]{display:none!important}.t0cl .t0cl-ico{width:16px;height:16px;flex:none;fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}.t0cl ::selection{background:var(--t0-lime);color:var(--t0-fg)}.t0cl-wrap{--t0-pad:var(--t0-gutter);max-width:calc(var(--t0-max) + var(--t0-pad)*2);margin:0 auto;padding:0 var(--t0-pad)}.t0cl h2.t0cl-h2{font-size:32px;line-height:1.25;font-weight:500;letter-spacing:-.02em}.t0cl-hash{color:var(--t0-lime);font-weight:500}.t0cl-badge{display:inline-flex;align-items:center;flex:none;height:26px;padding:0 10px;border:1px solid var(--t0-border);border-radius:4px;background:var(--t0-surface);font-size:12px;font-weight:500;color:var(--t0-muted);white-space:nowrap}.t0cl-hero{padding:56px 0 8px}.t0cl-hero-top{display:flex;justify-content:space-between;align-items:flex-end;gap:32px}.t0cl-hero-copy{min-width:0}.t0cl h1.t0cl-h1{font-size:clamp(32px,5.2cqi,56px);line-height:1.1;letter-spacing:-.025em;font-weight:400}.t0cl:lang(zh) h1.t0cl-h1{letter-spacing:-.01em;line-height:1.18}.t0cl-h1-soft{color:#6b6e72}.t0cl-h1-strong{font-weight:600;color:var(--t0-fg)}.t0cl-lead{margin-top:14px!important;max-width:760px;color:var(--t0-muted);font-size:16px;line-height:1.65}.t0cl-hero-actions{display:flex;flex-direction:column;align-items:flex-end;gap:12px;flex:none}.t0cl-cta{display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 16px;border:1px solid var(--t0-lime);border-radius:4px;background:var(--t0-lime);font:500 13px/1 var(--t0-mono);letter-spacing:.02em;text-transform:uppercase;color:var(--t0-fg)!important;white-space:nowrap;transition:background .15s,border-color .15s}.t0cl-cta:hover{background:var(--t0-lime-hover);border-color:var(--t0-lime-hover)}.t0cl-cta .t0cl-ico{width:15px;height:15px;transition:transform .2s var(--t0-ease)}.t0cl-cta:hover .t0cl-ico{transform:translateY(-1px)}.t0cl-text-link{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:500;color:var(--t0-fg2);transition:color .15s}.t0cl-text-link:hover{color:var(--t0-fg)}.t0cl-text-link .t0cl-ico{width:14px;height:14px;color:var(--t0-faint);transition:transform .2s var(--t0-ease),color .15s}.t0cl-text-link:hover .t0cl-ico:last-child{transform:translate(2px,-2px);color:var(--t0-fg)}.t0cl-hls{padding:56px 0 8px;scroll-margin-top:var(--t0-scroll-offset)}.t0cl-hls-head{display:flex;align-items:center;justify-content:space-between;gap:16px}.t0cl-hl-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:24px}.t0cl-hl{position:relative;display:flex;flex-direction:column;min-width:0;min-height:248px;padding:26px 24px 22px;border-radius:4px;background:var(--t0-tone-plain);transition:background .2s}.t0cl-hl.is-soft{background:var(--t0-tone-soft)}.t0cl-hl.is-strong{background:var(--t0-tone-strong)}.t0cl-hl.is-plain:hover{background:#efefef}.t0cl-hl.is-soft:hover{background:#eef9d4}.t0cl-hl.is-strong:hover{background:#e2f5ab}.t0cl-hl-head{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:22px}.t0cl-mark{display:block;flex:none;width:9px;height:9px;background:var(--t0-lime-700)}.t0cl-hl-cat{display:inline-flex;align-items:center;height:22px;padding:0 8px;border-radius:3px;background:rgba(255,255,255,.75);font:500 11.5px/1 var(--t0-mono);color:var(--t0-lime-900)}.t0cl-hl-date{display:block;margin-top:18px;font:500 11.5px/1.4 var(--t0-mono);color:var(--t0-faint);font-variant-numeric:tabular-nums}.t0cl-hl h3{margin-top:10px!important;font-size:21px;line-height:1.35;font-weight:500;letter-spacing:-.015em}.t0cl-hl p{flex:1;margin-top:8px!important;font-size:14.5px;line-height:1.65;color:var(--t0-muted)}.t0cl-hl-btn{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:20px;padding-top:14px;border-top:1px solid rgba(5,11,20,.08);font-size:13px;font-weight:500;color:var(--t0-fg)}.t0cl-hl-btn::after{content:'';position:absolute;inset:0;border-radius:4px}.t0cl .t0cl-hl-btn:focus-visible{outline:none}.t0cl-hl:has(.t0cl-hl-btn:focus-visible){outline:2px solid var(--t0-fg);outline-offset:2px}.t0cl .t0cl-hl-arrow{width:16px;height:16px;stroke:#878787;stroke-width:1.34;transition:transform .2s}.t0cl-hl:hover .t0cl-hl-arrow{transform:translateX(3px)}.t0cl-board{display:grid;grid-template-columns:var(--t0-side) minmax(0,1fr);gap:40px;align-items:start;padding:64px 0 80px;scroll-margin-top:var(--t0-scroll-offset)}.t0cl-side{position:sticky;top:calc(var(--t0-scroll-offset) + 8px);align-self:start;display:flex;flex-direction:column;gap:20px}.t0cl-side.is-static{position:static}.t0cl-side.is-follow{position:relative;top:auto;will-change:transform}.t0cl-filters{display:flex;flex-direction:column;gap:18px}.t0cl-block-label{margin-bottom:6px!important;padding-left:12px;font-size:12.5px;font-weight:500;color:var(--t0-faint)}.t0cl-cats{display:flex;flex-direction:column;gap:2px}.t0cl-cat{display:flex;align-items:center;gap:11px;width:100%;height:34px;padding:0 10px 0 12px;border-radius:4px;font-size:14px;color:var(--t0-fg2);text-align:left;transition:background .15s,color .15s}.t0cl-cat:hover:not(:disabled){background:var(--t0-subtle);color:var(--t0-fg)}.t0cl-cat span{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.t0cl-cat b{display:inline-grid;place-items:center;min-width:24px;height:20px;padding:0 6px;border-radius:4px;font:500 11.5px/1 var(--t0-mono);color:var(--t0-faint);transition:background .2s,color .2s}.t0cl-cat[aria-pressed=true]{background:#f1f1f0;color:var(--t0-fg);font-weight:500}.t0cl-cat[aria-pressed=true] b{background:var(--t0-lime);color:var(--t0-fg)}.t0cl-cat:disabled{color:var(--t0-faint);cursor:default;opacity:.55}.t0cl-cat i{flex:none;width:8px;height:8px;border-radius:50%;background:var(--t0-faint)}.t0cl-cat i{width:9px;height:9px}.t0cl-cat.is-all i{background:conic-gradient(var(--t0-fg) 0 25%,#9a9da1 0 50%,var(--t0-lime-700) 0 75%,var(--t0-lime) 0)}.t0cl-cat.is-major i{background:var(--t0-lime-700)}.t0cl-cat.is-digest i{background:#9a9da1}.t0cl-cat.is-release i{background:var(--t0-fg)}.t0cl-cat.is-archive i{background:transparent;box-shadow:inset 0 0 0 1.5px var(--t0-fg)}.t0cl-select{position:relative;display:flex;align-items:center;min-width:0}.t0cl-select select{appearance:none;-webkit-appearance:none;width:100%;height:38px;padding:0 36px 0 12px;border:1px solid var(--t0-input);border-radius:4px;background:var(--t0-bg);font:inherit;font-size:14px;color:var(--t0-fg);cursor:pointer;transition:border-color .15s,box-shadow .15s}.t0cl-select select:hover{border-color:#cdcdcd}.t0cl .t0cl-select select:focus{outline:none;border-color:var(--t0-fg);box-shadow:0 0 0 4px var(--t0-lime-glow)}.t0cl-select>.t0cl-ico{position:absolute;right:12px;width:15px;height:15px;color:var(--t0-faint);pointer-events:none}.t0cl-help{position:relative;flex:none;padding:16px;border:1px solid var(--t0-lime-200);border-radius:4px;background:var(--t0-lime-50)}.t0cl-help-ico{display:grid;place-items:center;flex:none;width:26px;height:26px;border-radius:4px;background:var(--t0-lime);color:var(--t0-fg)}.t0cl-help-ico .t0cl-ico{width:14px;height:14px}.t0cl-help h2{display:flex;align-items:center;gap:10px;font-size:15px;line-height:1.35;font-weight:600;letter-spacing:-.01em}.t0cl-help p{margin-top:8px!important;font-size:13px;line-height:1.6;color:var(--t0-muted)}.t0cl-help-actions{display:flex;flex-direction:column;gap:4px;margin-top:14px}.t0cl-help-link{display:flex;align-items:center;gap:10px;height:36px;padding:0 12px;border-radius:4px;background:var(--t0-fg);font-size:13px;font-weight:500;color:#fff!important;white-space:nowrap;transition:background .15s}.t0cl-help-link:hover{background:#1c1f1e}.t0cl-help-mail{font-weight:inherit;color:inherit!important;text-decoration:underline!important;text-decoration-color:currentColor!important;text-underline-offset:3px;overflow-wrap:anywhere}.t0cl-help-link span{flex:1}.t0cl-help-link .t0cl-ico{width:15px;height:15px}.t0cl-help-link .t0cl-help-arrow{color:var(--t0-lime);transition:transform .2s var(--t0-ease)}.t0cl-help-link:hover .t0cl-help-arrow{transform:translateX(3px)}.t0cl-help-sub{display:flex;align-items:center;gap:8px;height:36px;padding:0 4px;font-size:13.5px;font-weight:500;color:var(--t0-fg2);transition:color .15s}.t0cl-help-sub:hover{color:var(--t0-fg)}.t0cl-help-sub span{flex:1}.t0cl-help-sub .t0cl-ico{width:14px;height:14px;color:var(--t0-lime-900)}.t0cl-feed{min-width:0}.t0cl-feed-head{display:flex;align-items:center;justify-content:space-between;gap:12px 24px;flex-wrap:wrap}.t0cl-feed-head .t0cl-search{width:280px}.t0cl-active{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-top:14px}.t0cl-active-label{margin-right:4px;font-size:12.5px;color:var(--t0-faint)}.t0cl-chip{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 8px 0 10px;border:1px solid var(--t0-lime-200);border-radius:4px;background:var(--t0-lime-50);font-size:12.5px;font-weight:500;color:var(--t0-lime-900);animation:t0cl-pop .22s var(--t0-ease);transition:background .15s,border-color .15s}.t0cl-chip:hover{border-color:var(--t0-lime-700);background:var(--t0-lime-100)}.t0cl-chip .t0cl-ico{width:12px;height:12px}.t0cl-chip-clear{height:28px;padding:0 6px;font-size:12.5px;font-weight:500;color:var(--t0-muted);text-decoration:underline;text-decoration-color:var(--t0-input);text-underline-offset:3px;transition:color .15s}.t0cl-chip-clear:hover{color:var(--t0-fg);text-decoration-color:var(--t0-fg)}@keyframes t0cl-pop{from{opacity:0;transform:scale(.92)}}.t0cl-seg{position:relative;display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:2px;padding:3px;border-radius:4px;background:var(--t0-subtle)}.t0cl-seg-thumb{position:absolute;top:3px;bottom:3px;left:0;border-radius:3px;background:var(--t0-bg);box-shadow:0 0 0 1px var(--t0-border);opacity:0;pointer-events:none}.t0cl-seg.has-thumb .t0cl-seg-thumb{opacity:1}.t0cl-seg.is-settled .t0cl-seg-thumb{transition:transform .34s var(--t0-ease),width .34s var(--t0-ease)}.t0cl-seg button{position:relative;z-index:1}.t0cl .t0cl-seg button:focus-visible{outline-offset:-2px}.t0cl-seg.has-thumb button[aria-pressed=true]{background:transparent;box-shadow:none}.t0cl-seg button{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-width:0;height:32px;padding:0 6px;border-radius:3px;font-size:13.5px;font-weight:500;color:var(--t0-muted);white-space:nowrap;transition:color .15s,background .15s,box-shadow .15s}.t0cl-seg button:hover{color:var(--t0-fg)}.t0cl-seg button b{font:500 11px/1 var(--t0-mono);color:var(--t0-faint)}.t0cl-seg button[aria-pressed=true]{background:var(--t0-bg);color:var(--t0-fg);box-shadow:0 0 0 1px var(--t0-border)}.t0cl-seg button[aria-pressed=true] b{color:var(--t0-lime-900)}.t0cl-search{position:relative;display:flex;align-items:center;width:100%;min-width:0}.t0cl-search>.t0cl-ico{position:absolute;left:12px;pointer-events:none;color:var(--t0-faint)}.t0cl-input{height:40px;width:100%;padding:0 38px 0 36px;border:1px solid var(--t0-input);border-radius:4px;background:var(--t0-bg);font-size:14px;transition:border-color .15s,box-shadow .15s}.t0cl-input::placeholder{color:var(--t0-faint)}.t0cl-input:hover{border-color:#cdcdcd}.t0cl .t0cl-input:focus{outline:none;border-color:var(--t0-fg);box-shadow:0 0 0 4px var(--t0-lime-glow)}.t0cl-kbd{position:absolute;right:10px;display:grid;place-items:center;min-width:22px;height:22px;padding:0 6px;border:1px solid var(--t0-border);border-radius:4px;background:var(--t0-surface);font:500 11px/1 var(--t0-mono);color:var(--t0-faint);pointer-events:none}.t0cl-input:not(:placeholder-shown)~.t0cl-kbd,.t0cl-input:focus~.t0cl-kbd{display:none}.t0cl-input::-webkit-search-cancel-button{display:none;-webkit-appearance:none}.t0cl-search-clear{position:absolute;right:8px;display:grid;place-items:center;width:24px;height:24px;border-radius:3px;color:var(--t0-faint);transition:opacity .15s,transform .2s var(--t0-ease),background .15s,color .15s}.t0cl-search-clear:hover{background:var(--t0-subtle);color:var(--t0-fg)}.t0cl-search-clear .t0cl-ico{width:14px;height:14px}.t0cl-input:placeholder-shown~.t0cl-search-clear{opacity:0;transform:scale(.7);pointer-events:none}.t0cl-sr{position:absolute!important;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}.t0cl-timeline{position:relative;margin-top:12px}.t0cl-timeline::before,.t0cl-timeline::after{content:'';position:absolute;top:var(--t0-rail-start,0px);left:calc(var(--t0-aside) + var(--t0-rail)/2);width:1px;background:var(--t0-border)}.t0cl-timeline::before{bottom:0}.t0cl-timeline::after{width:2px;margin-left:-.5px;height:var(--t0-progress,0px);background:var(--t0-lime);transition:height .18s linear}.t0cl-month,.t0cl-entry{transition:opacity .6s var(--t0-ease) var(--t0-delay,0ms),transform .6s var(--t0-ease) var(--t0-delay,0ms)}.t0cl.is-animated .t0cl-month:not(.is-in),.t0cl.is-animated .t0cl-entry:not(.is-in){opacity:0;transform:translateY(16px)}.t0cl-month{position:relative;display:grid;grid-template-columns:var(--t0-aside) var(--t0-rail) minmax(0,1fr);align-items:center;padding:32px 0 4px}.t0cl-month-label{display:flex;flex-direction:column;gap:2px}.t0cl-month h3{font-size:18px;line-height:1.3;font-weight:500;letter-spacing:-.01em;color:var(--t0-fg)}.t0cl-month-label span{font-size:12.5px;color:var(--t0-faint)}.t0cl-month-mark{position:relative;z-index:1;justify-self:center;width:9px;height:9px;background:var(--t0-lime-700);box-shadow:0 0 0 5px var(--t0-bg)}.t0cl-month-line{height:1px;background:var(--t0-border)}.t0cl-entry{position:relative;display:grid;grid-template-columns:var(--t0-aside) var(--t0-rail) minmax(0,1fr);scroll-margin-top:var(--t0-scroll-offset)}.t0cl-entry:focus{outline:none}.t0cl-aside{position:sticky;z-index:3;top:calc(var(--t0-scroll-offset) + 16px);align-self:start;padding:28px 16px 20px 0}.t0cl-when-cap{font:500 11px/1.4 var(--t0-mono);letter-spacing:.04em;text-transform:uppercase;color:var(--t0-faint)}.t0cl:lang(zh) .t0cl-when-cap{font-family:var(--t0-sans);font-size:12px;letter-spacing:0}.t0cl-nw{white-space:nowrap}.t0cl-when{margin-top:2px!important;font-size:15px;line-height:1.45;font-weight:500;color:var(--t0-fg);font-variant-numeric:tabular-nums}.t0cl-clock{margin-top:2px!important;font:400 12px/1.5 var(--t0-mono);color:var(--t0-faint)}.t0cl-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px!important}.t0cl-product,.t0cl-version{display:inline-flex;align-items:center;height:22px;padding:0 7px;border:1px solid var(--t0-border);border-radius:4px;background:var(--t0-bg);font:500 11px/1 var(--t0-mono);color:var(--t0-fg2);white-space:nowrap}.t0cl-product.is-cloud{border-color:var(--t0-lime-200);background:var(--t0-lime-50);color:var(--t0-lime-900)}.t0cl-tip-wrap{position:relative;display:inline-flex}.t0cl-product.has-tip{gap:4px;cursor:help;transition:border-color .15s,background .15s}.t0cl-product.has-tip .t0cl-ico{width:11px;height:11px;stroke-width:2;opacity:.75}.t0cl-product.has-tip:hover,.t0cl-product.has-tip[aria-expanded=true]{border-color:var(--t0-lime-700)}.t0cl-tip{position:absolute;z-index:6;left:0;top:calc(100% + 8px);width:max-content;max-width:min(280px,calc(100cqi - 32px));padding:10px 12px;border-radius:4px;background:var(--t0-fg);font-size:12.5px;line-height:1.6;font-weight:400;color:#fff;text-align:left;white-space:normal;opacity:0;visibility:hidden;transform:translateY(-4px);transition:opacity .15s,transform .18s var(--t0-ease),visibility 0s .18s;pointer-events:none}.t0cl-tip::before{content:'';position:absolute;left:14px;top:-4px;width:8px;height:8px;background:var(--t0-fg);transform:rotate(45deg)}.t0cl-tip b{display:block;margin-bottom:2px;font-size:11.5px;font-weight:500;color:var(--t0-lime)}.t0cl-tip-wrap:hover .t0cl-tip,.t0cl-product.has-tip:focus-visible+.t0cl-tip,.t0cl-product.has-tip[aria-expanded=true]+.t0cl-tip{opacity:1;visibility:visible;transform:none;transition:opacity .15s,transform .18s var(--t0-ease),visibility 0s}.t0cl-product.is-enterprise{border-color:#d9e6fb;background:var(--t0-blue-50);color:var(--t0-blue)}.t0cl-version{border-color:var(--t0-fg);background:var(--t0-fg);color:#fff}.t0cl-rail{position:relative}.t0cl-rail i{position:absolute;z-index:1;top:34px;left:50%;width:11px;height:11px;margin-left:-5.5px;border:2px solid var(--t0-faint);border-radius:50%;background:var(--t0-bg);transition:transform .25s var(--t0-ease),border-color .3s,background .3s}.t0cl-entry.is-passed .t0cl-rail i{border-color:var(--t0-lime-700);background:var(--t0-lime-100)}.t0cl-entry:hover .t0cl-rail i{transform:scale(1.25)}.t0cl-entry.is-major .t0cl-rail i{border-color:var(--t0-lime-700);background:var(--t0-lime-700)}.t0cl-entry.is-archive .t0cl-rail i{border-color:var(--t0-input)}.t0cl-body{min-width:0;padding:28px 0 32px;border-bottom:1px solid var(--t0-border)}.t0cl-entry:last-child .t0cl-body,.t0cl-entry:has(+ .t0cl-month) .t0cl-body{border-bottom:0}.t0cl-entry.is-target .t0cl-body{animation:t0cl-flash 1.6s ease-out}@keyframes t0cl-fade{from{opacity:0;transform:translate(-4px,-50%)}}@keyframes t0cl-flash{0%,30%{background:var(--t0-lime-50);box-shadow:-16px 0 0 var(--t0-lime-50),16px 0 0 var(--t0-lime-50)}100%{background:transparent;box-shadow:none}}.t0cl-status{display:inline-flex;align-items:center;height:24px;padding:0 9px;border-radius:3px;background:var(--t0-subtle);font:500 11.5px/1 var(--t0-mono);letter-spacing:.03em;text-transform:uppercase;color:var(--t0-muted);white-space:nowrap}.t0cl:lang(zh) .t0cl-status{font-family:var(--t0-sans);font-size:12px;letter-spacing:0}.t0cl-status.is-major{background:var(--t0-lime-100);color:var(--t0-lime-900)}.t0cl-status.is-digest{background:var(--t0-blue-50);color:var(--t0-blue)}.t0cl-status.is-released{background:var(--t0-green-50);color:var(--t0-green)}.t0cl h3.t0cl-title{display:flex;align-items:flex-start;gap:8px;margin-top:10px;font-size:20px;line-height:1.4;font-weight:500;letter-spacing:-.015em}.t0cl-anchor{position:relative;display:inline-grid;place-items:center;flex:none;width:28px;height:28px;margin-top:1px;border-radius:4px;color:var(--t0-faint);opacity:0;transition:opacity .15s,background .15s,color .15s}.t0cl-entry:hover .t0cl-anchor,.t0cl-anchor:focus-visible,.t0cl-anchor.is-done,.t0cl-anchor.is-failed{opacity:1}.t0cl-anchor:hover{background:var(--t0-subtle);color:var(--t0-fg)}.t0cl-anchor.is-done{color:var(--t0-lime-900);background:var(--t0-lime-100)}.t0cl-anchor-note{position:absolute;animation:t0cl-fade .2s var(--t0-ease);left:calc(100% + 6px);top:50%;transform:translateY(-50%);font-size:12px;font-weight:500;letter-spacing:0;color:var(--t0-lime-900);white-space:nowrap;pointer-events:none}.t0cl-anchor.is-failed .t0cl-anchor-note{color:var(--t0-muted)}.t0cl-summary{margin-top:6px!important;max-width:760px;font-size:15px;line-height:1.7;color:var(--t0-muted)}.t0cl-changes{display:grid;gap:6px;max-width:760px;margin-top:14px!important}.t0cl-changes li{position:relative;padding-left:20px;font-size:14px;line-height:1.7;color:var(--t0-fg2)}.t0cl-changes li::before{content:'';position:absolute;left:3px;top:.68em;width:6px;height:6px;background:var(--t0-lime-700)}.t0cl-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:16px!important}.t0cl-tags span{display:inline-flex;align-items:center;height:24px;padding:0 9px;border-radius:3px;background:var(--t0-subtle);font-size:12px;color:var(--t0-fg2)}.t0cl-action{max-width:760px;margin-top:16px;padding:12px 16px;border-left:3px solid var(--t0-lime);border-radius:0 4px 4px 0;background:var(--t0-tone-soft)}.t0cl-action-label{font-size:12px;font-weight:500;color:var(--t0-lime-900)}.t0cl-action p+p{margin-top:2px!important;font-size:13.5px;line-height:1.7;color:var(--t0-fg2)}.t0cl-more{display:flex;justify-content:center;padding-top:32px;border-top:1px solid var(--t0-border)}.t0cl-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:40px;padding:0 16px;border:1px solid var(--t0-input);border-radius:4px;background:var(--t0-bg);font-size:13.5px;font-weight:500;color:var(--t0-fg);white-space:nowrap;transition:background .15s,border-color .15s}.t0cl-btn:hover{background:var(--t0-surface);border-color:#cdcdcd}.t0cl-btn em{font-style:normal;font-weight:400;color:var(--t0-faint)}.t0cl-btn .t0cl-ico{width:15px;height:15px;color:var(--t0-faint);transition:transform .2s var(--t0-ease),color .15s}.t0cl-more-btn:hover .t0cl-ico{transform:translateY(2px);color:var(--t0-fg)}.t0cl-empty{display:flex;flex-direction:column;align-items:center;gap:6px;padding:72px 20px;text-align:center}.t0cl-empty-ico{display:grid;place-items:center;width:44px;height:44px;margin-bottom:8px;border-radius:4px;background:var(--t0-subtle);color:var(--t0-muted)}.t0cl-empty-ico .t0cl-ico{width:20px;height:20px}.t0cl-empty h3{font-size:15px;font-weight:500}.t0cl-empty p{font-size:13px;color:var(--t0-muted)}.t0cl-empty .t0cl-btn{margin-top:12px}@container t0cl (max-width:1180px){.t0cl{--t0-side:220px;--t0-aside:132px;--t0-rail:32px}.t0cl-board{gap:32px}}@container t0cl (max-width:1023px){.t0cl-hl-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.t0cl{--t0-aside:160px;--t0-rail:32px}.t0cl-board{grid-template-columns:minmax(0,1fr);gap:28px;padding:48px 0 64px}.t0cl-side{display:contents}.t0cl-filters{order:1;display:grid;grid-template-columns:minmax(0,1fr) 220px;gap:10px;padding:16px;border:1px solid var(--t0-border);border-radius:4px}.t0cl-block-label{display:none}.t0cl-block-product{grid-column:1}.t0cl-block-time{grid-column:2}.t0cl-block-cat{grid-column:1/-1;grid-row:2}.t0cl-cats{flex-direction:row;flex-wrap:wrap;gap:6px}.t0cl-cat{width:auto;flex:none;height:36px;font-size:13.5px;box-shadow:inset 0 0 0 1px var(--t0-border)}.t0cl-cat[aria-pressed=true]{box-shadow:inset 0 0 0 1px #dcdcdc}.t0cl-cat span{overflow:visible}.t0cl-feed{order:2}.t0cl-help{order:3;display:grid;grid-template-columns:minmax(0,1fr) auto;column-gap:16px;align-items:center}.t0cl-help p{grid-column:1;margin-top:4px!important;padding-left:36px}.t0cl-help-actions{grid-column:2;grid-row:1/3;margin:0;flex-direction:row;align-items:center;gap:12px}}@container t0cl (max-width:820px){.t0cl-hero{padding:40px 0 4px}.t0cl-hero-top{flex-direction:column;align-items:flex-start;gap:20px}.t0cl-hero-actions{flex-direction:row;align-items:center;gap:20px}.t0cl-hls{padding-top:40px}.t0cl{--t0-rail:24px}.t0cl-timeline::before,.t0cl-timeline::after{left:calc(var(--t0-rail)/2)}.t0cl-month,.t0cl-entry{grid-template-columns:var(--t0-rail) minmax(0,1fr);column-gap:12px}.t0cl-month{padding-top:28px}.t0cl-month-label{grid-column:2;grid-row:1;flex-direction:row;align-items:baseline;gap:10px}.t0cl-month-mark{grid-column:1;grid-row:1}.t0cl-month-line{display:none}.t0cl-rail{grid-column:1;grid-row:1/3}.t0cl-rail i{top:30px}.t0cl-tip-wrap{position:static}.t0cl-tip{left:0;right:0;width:auto;max-width:none;top:calc(100% + 8px)}.t0cl-tip::before{display:none}.t0cl-aside{position:relative;top:auto;grid-column:2;grid-row:1;display:flex;flex-wrap:wrap;align-items:center;gap:4px 10px;padding:24px 0 0}.t0cl-when-cap{flex-basis:100%}.t0cl-when{margin-top:0!important}.t0cl-clock{margin-top:0!important}.t0cl-chips{margin-top:0!important}.t0cl-body{grid-column:2;grid-row:2;padding:14px 0 28px}}@container t0cl (max-width:560px){.t0cl-wrap{--t0-pad:min(var(--t0-gutter),16px)}.t0cl-hero{padding:32px 0 0}.t0cl-lead{font-size:15px}.t0cl-hero-actions{flex-direction:column;align-items:stretch;width:100%;gap:12px}.t0cl-cta{justify-content:center;height:44px}.t0cl-text-link{justify-content:center}.t0cl h2.t0cl-h2{font-size:24px}.t0cl-hls{padding-top:32px}.t0cl-hl-grid{grid-template-columns:minmax(0,1fr);gap:8px;margin-top:16px}.t0cl-hl{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;column-gap:12px;min-height:0;padding:14px 16px}.t0cl-hl-head{grid-column:1/-1}.t0cl-hl-date{grid-column:1/-1;margin-top:8px}.t0cl-hl h3{margin-top:2px!important;font-size:15px}.t0cl-hl p{display:none}.t0cl-hl-btn{margin:0;padding:0;border:0}.t0cl-hl-btn span{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}.t0cl-board{padding:36px 0 48px;gap:20px}.t0cl-filters{grid-template-columns:minmax(0,1fr);padding:12px}.t0cl-block-product,.t0cl-block-time,.t0cl-block-cat{grid-column:1;grid-row:auto}.t0cl-cats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.t0cl-cat{width:100%;height:40px}.t0cl-cat.is-all{grid-column:1/-1}.t0cl-kbd{display:none}.t0cl-help{grid-template-columns:minmax(0,1fr);padding:16px}.t0cl-help p{padding-left:0}.t0cl-help-actions{grid-column:1/-1;grid-row:auto;margin-top:14px;flex-direction:column;align-items:stretch}.t0cl-feed-head .t0cl-search{width:100%}.t0cl{--t0-rail:18px}.t0cl-month,.t0cl-entry{column-gap:10px}.t0cl h3.t0cl-title{font-size:18px}.t0cl-anchor{opacity:1}.t0cl-summary{font-size:14px}.t0cl-changes li{font-size:13.5px}.t0cl-more-btn{width:100%}}@media (prefers-reduced-motion:reduce){.t0cl,.t0cl *,.t0cl *::before,.t0cl *::after{transition:none!important;animation:none!important}}`),
      (K = [`zh-CN`, `en`]),
      ce(se, {
        language: {
          type: V.Enum,
          title: `Language`,
          options: [`auto`, `en`, `zh-CN`],
          optionTitles: [`Auto (site locale)`, `English`, `中文`],
          defaultValue: `auto`,
        },
        contactEmail: {
          type: V.String,
          title: `Contact email`,
          placeholder: `Empty hides contact buttons`,
          defaultValue: `productsupport@freezonex.io`,
        },
        securityUrl: {
          type: V.String,
          title: `Security URL`,
          placeholder: `Security advisories page (empty hides link)`,
          defaultValue: ``,
        },
        showHighlights: {
          type: V.Boolean,
          title: `Highlights`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !0,
        },
        pageSize: {
          type: V.Number,
          title: `Items per load`,
          min: 3,
          max: 32,
          step: 1,
          displayStepper: !0,
          defaultValue: 8,
        },
        shareUrl: {
          type: V.String,
          title: `Share URL`,
          placeholder: `Defaults to current page`,
          defaultValue: ``,
        },
        scrollOffset: {
          type: V.Number,
          title: `Nav offset`,
          min: 0,
          max: 200,
          unit: `px`,
          defaultValue: 88,
        },
        gutter: {
          type: V.Number,
          title: `Side padding`,
          min: 0,
          max: 80,
          unit: `px`,
          defaultValue: 24,
        },
        maxWidth: {
          type: V.Number,
          title: `Max width`,
          min: 640,
          max: 1600,
          step: 10,
          unit: `px`,
          defaultValue: 1200,
        },
      }));
  }))();
}
var de, fe, pe, me, he, ge, _e, J, ve, Y, X, Z, ye, Q, $;
function be() {
  return (be = e(() => {
    (l(),
      w(),
      _(),
      i(),
      F(),
      I(),
      q(),
      z(),
      (de = E(R)),
      (fe = E(se)),
      (pe = E(L)),
      (me = {
        FCemVOZlo: `(min-width: 1440px)`,
        i5B2svUq3: `(max-width: 809.98px)`,
        vUGnho7j9: `(min-width: 810px) and (max-width: 1439.98px)`,
      }),
      (he = () => typeof document < `u`),
      (ge = []),
      (_e = `framer-0GRON`),
      (J = {
        FCemVOZlo: `framer-v-1ttoqt1`,
        i5B2svUq3: `framer-v-1x7itmu`,
        vUGnho7j9: `framer-v-2rq9hb`,
      }),
      (ve = (e, t, n) => (e && t ? `position` : n)),
      (Y = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (X = { Desktop: `FCemVOZlo`, Phone: `i5B2svUq3`, Tablet: `vUGnho7j9` }),
      (Z = ({ value: e }) =>
        T()
          ? null
          : /*#__PURE__*/ d(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (ye = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: X[r.variant] ?? r.variant ?? `FCemVOZlo`,
      })),
      (Q = C(
        /* @__PURE__ */ u(function (e, r) {
          let i = o(null),
            s = r ?? i;
          t();
          let { activeLocale: c, contentLocale: l, setLocale: u } = P(),
            p = k(),
            { style: m, className: _, layoutId: b, variant: x, ...C } = ye(e),
            w = n(() => ne({}, l), [l]);
          y(w);
          let [T, E] = O(x, me, !1),
            A = S(_e),
            ee = a(j)?.isLayoutTemplate,
            F = !!a(h)?.transition?.layout,
            I = ve(ee, F),
            z = () => !he() || T !== `vUGnho7j9`,
            re = () => !he() || T === `vUGnho7j9`;
          return (
            te({}),
            /*#__PURE__*/ d(j.Provider, {
              value: {
                activeVariantId: T,
                humanReadableVariantMap: X,
                primaryVariantId: `FCemVOZlo`,
                variantClassNames: J,
              },
              children: /*#__PURE__*/ f(v, {
                id: b ?? `gN1Hj9wQE`,
                children: [
                  /*#__PURE__*/ d(Z, {
                    value: `html body { background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)); }`,
                  }),
                  /*#__PURE__*/ f(g.div, {
                    ...C,
                    className: S(A, `framer-1ttoqt1`, _),
                    ref: s,
                    style: { ...m },
                    children: [
                      /*#__PURE__*/ d(D, {
                        height: 64,
                        width: `100vw`,
                        y: 0,
                        children: /*#__PURE__*/ d(M, {
                          className: `framer-ohc26z-container`,
                          layout: I,
                          layoutScroll: !0,
                          nodeId: `fWQl9WrkP`,
                          scopeId: `gN1Hj9wQE`,
                          children: /*#__PURE__*/ d(N, {
                            breakpoint: T,
                            overrides: {
                              i5B2svUq3: { variant: Y(`Svy4sINhA`) },
                              vUGnho7j9: { variant: Y(`Gw5VboM5c`) },
                            },
                            children: /*#__PURE__*/ d(R, {
                              eVOFjxm0w: `var(--token-fcaa307f-078f-4ea1-af34-d51bb82ca05a, rgba(255, 255, 255, 0))`,
                              height: `100%`,
                              id: `fWQl9WrkP`,
                              jQcddTFoz: !0,
                              layoutId: `fWQl9WrkP`,
                              style: { width: `100%` },
                              variant: Y(`LbFcBhD3w`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                      /*#__PURE__*/ d(g.div, {
                        className: `framer-1exwsam`,
                        "data-framer-name": `01`,
                        layout: I,
                        children: /*#__PURE__*/ d(`div`, {
                          className: `framer-z3fwox`,
                          children: /*#__PURE__*/ d(D, {
                            children: /*#__PURE__*/ d(M, {
                              className: `framer-nn4il5-container`,
                              isAuthoredByUser: !0,
                              nodeId: `uCxE4gsYt`,
                              scopeId: `gN1Hj9wQE`,
                              children: /*#__PURE__*/ d(se, {
                                contactEmail: `productsupport@freezonex.io`,
                                gutter: 24,
                                height: `100%`,
                                id: `uCxE4gsYt`,
                                language: `auto`,
                                layoutId: `uCxE4gsYt`,
                                maxWidth: 1200,
                                pageSize: 8,
                                scrollOffset: 88,
                                securityUrl: ``,
                                shareUrl: ``,
                                showHighlights: !0,
                                style: { width: `100%` },
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                      /*#__PURE__*/ f(g.div, {
                        className: `framer-rhmtxe`,
                        "data-framer-name": `header`,
                        layout: I,
                        children: [
                          z() &&
                            /*#__PURE__*/ d(N, {
                              breakpoint: T,
                              overrides: {
                                i5B2svUq3: { height: 498, width: void 0, y: (p?.y || 0) + 360 },
                              },
                              children: /*#__PURE__*/ d(D, {
                                height: 438,
                                width: p?.width || `100vw`,
                                y: (p?.y || 0) + 368,
                                children: /*#__PURE__*/ d(M, {
                                  className: `framer-1wtc5vb-container hidden-2rq9hb`,
                                  nodeId: `DcR3K2DNZ`,
                                  scopeId: `gN1Hj9wQE`,
                                  children: /*#__PURE__*/ d(N, {
                                    breakpoint: T,
                                    overrides: { i5B2svUq3: { variant: Y(`vXscR1iJC`) } },
                                    children: /*#__PURE__*/ d(L, {
                                      height: `100%`,
                                      id: `DcR3K2DNZ`,
                                      layoutId: `DcR3K2DNZ`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Y(`zev4Tv3qQ`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          re() &&
                            /*#__PURE__*/ d(N, {
                              breakpoint: T,
                              overrides: {
                                vUGnho7j9: {
                                  height: 498,
                                  width: `max(${p?.width || `100vw`}, 1px)`,
                                  y: (p?.y || 0) + 360,
                                },
                              },
                              children: /*#__PURE__*/ d(D, {
                                children: /*#__PURE__*/ d(M, {
                                  className: `framer-1fvjzmo-container hidden-1ttoqt1 hidden-1x7itmu`,
                                  nodeId: `naHsttcql`,
                                  scopeId: `gN1Hj9wQE`,
                                  children: /*#__PURE__*/ d(L, {
                                    height: `100%`,
                                    id: `naHsttcql`,
                                    layoutId: `naHsttcql`,
                                    style: { width: `100%` },
                                    variant: Y(`G8rxyXoDj`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                  /*#__PURE__*/ d(`div`, { id: `overlay` }),
                ],
              }),
            })
          );
        }),
        [
          `.framer-0GRON.framer-nj9b5r, .framer-0GRON .framer-nj9b5r { display: block; }`,
          `.framer-0GRON.framer-1ttoqt1 { align-content: center; align-items: center; background-color: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1440px; }`,
          `.framer-0GRON .framer-ohc26z-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 4; }`,
          `.framer-0GRON .framer-1exwsam { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1280px; }`,
          `.framer-0GRON .framer-z3fwox { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 88px 0px 0px 0px; position: relative; width: 1280px; z-index: 1; }`,
          `.framer-0GRON .framer-nn4il5-container { flex: none; height: auto; position: relative; width: 1327px; }`,
          `.framer-0GRON .framer-rhmtxe { align-content: center; align-items: center; background-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: 438px; justify-content: flex-start; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-0GRON .framer-1wtc5vb-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
          `.framer-0GRON .framer-1fvjzmo-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-0GRON.framer-1ttoqt1 { width: 810px; } .framer-0GRON .framer-1exwsam { flex-direction: row; padding: 80px 0px 0px 0px; width: 810px; z-index: 1; } .framer-0GRON .framer-z3fwox { padding: 0px 60px 0px 60px; width: 810px; } .framer-0GRON .framer-nn4il5-container { width: 730px; } .framer-0GRON .framer-rhmtxe { flex-direction: row; height: min-content; } .framer-0GRON .framer-1fvjzmo-container { flex: 1 0 0px; width: 1px; }}`,
          `@media (max-width: 809.98px) { .framer-0GRON.framer-1ttoqt1, .framer-0GRON .framer-1exwsam { width: 390px; } .framer-0GRON .framer-z3fwox { gap: 32px; order: 0; padding: 80px 40px 0px 40px; width: 100%; } .framer-0GRON .framer-nn4il5-container { width: 310px; } .framer-0GRON .framer-rhmtxe { gap: 0px; height: min-content; } .framer-0GRON .framer-1wtc5vb-container { flex: none; height: auto; width: auto; }}`,
        ],
        `framer-0GRON`
      )),
      (Q.displayName = `Security Advisories`),
      (Q.defaultProps = { height: 5704, width: 1440 }),
      A(Q, [{ explicitInter: !0, fonts: [] }, ...de, ...fe, ...pe], {
        supportsExplicitInterCodegen: !0,
      }),
      (Q.loader = { load: (e, t) => ee([() => x(R, {}, t), () => x(L, {}, t)], t) }),
      ($ = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramergN1Hj9wQE`,
            slots: [],
            annotations: {
              framerIntrinsicWidth: `1440`,
              framerColorSyntax: `true`,
              framerImmutableVariables: `true`,
              framerContractVersion: `1`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"vUGnho7j9":{"layout":["fixed","auto"]},"i5B2svUq3":{"layout":["fixed","auto"]}}}`,
              framerAcceptsLayoutTemplate: `true`,
              framerResponsiveScreen: `true`,
              framerDisplayContentsDiv: `false`,
              framerLayoutTemplateFlowEffect: `true`,
              framerIntrinsicHeight: `5704`,
              framerAutoSizeImages: `true`,
              framerComponentViewportWidth: `true`,
              framerScrollSections: `false`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
be();
export { $ as __FramerMetadata__, Q as default, ge as queryParamNames };
//# sourceMappingURL=6_2e-NHp18YCatfBNCkqSSbfRXPjjHgL_Acc7SGzcO4.C_Nehg10.mjs.map
