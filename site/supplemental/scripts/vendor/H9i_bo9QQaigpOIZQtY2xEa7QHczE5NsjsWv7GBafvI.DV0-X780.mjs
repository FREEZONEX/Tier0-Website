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
import { S as h, Yi as g, t as _, v as ee } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import {
  Et as v,
  H as y,
  I as b,
  P as x,
  Pt as S,
  Q as C,
  St as w,
  U as T,
  a as E,
  bt as te,
  gt as D,
  j as O,
  lt as k,
  m as A,
  o as j,
  v as M,
  w as N,
  wt as P,
  yt as F,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { m as I, n as L, p as R, t as z } from "./shared-lib.CHy_rbfQ.mjs?v=20261116-migration-v2";
import { n as B, r as ne } from "./q61sgHWli.f0B57XwV.mjs?v=20261116-migration-v2";
function V(e) {
  let t = Object.assign(
      {
        pageSize: 10,
        reportEmail: `productsupport@freezonex.io`,
        enableShortcut: !0,
        syncHash: !0,
      },
      e
    ),
    n = [`zh-CN`, `en`],
    i = [`all`, `fix`, `dependency`, `hardening`, `verification`],
    a = [`all`, `enterprise`, `cloud`],
    o = { enterprise: `企业版`, cloud: `云端` },
    c = `verified`,
    l = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`],
    u = [
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
    d = s !== void 0,
    f = n.includes(t.locale) ? t.locale : `en`,
    p = { category: `all`, product: `all`, term: ``, sort: `desc`, page: 1 },
    m = /* @__PURE__ */ new Set(),
    h = /* @__PURE__ */ new Set(),
    g = null,
    _ = t.data[`zh-CN`],
    ee = new Map(
      _.map((e, n) => {
        let r = (e) =>
          [
            e.title,
            e.summary,
            e.component,
            e.productLabel,
            e.categoryLabel,
            e.date,
            e.scope,
            e.handling,
            e.affectedVersion.summary,
            e.affectedVersion.description,
            e.fixedVersion.summary,
            e.fixedVersion.description,
            e.upgrade.summary,
            ...e.upgrade.instructions,
          ].join(` `);
        return [e.id, `${r(e)} ${r(t.data.en[n])}`.toLowerCase()];
      })
    ),
    v = t.data[f],
    y = (e, n = {}) => String(t.messages[f][e] ?? e).replace(/\{(\w+)\}/g, (e, t) => n[t] ?? e),
    b = (e) =>
      String(e).replace(
        /[&<>"']/g,
        (e) => ({ "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;`, "'": `&#39;` })[e]
      ),
    x = (e, t = ``) =>
      `<svg class="t0sa-ico ${t}" viewBox="0 0 24 24" aria-hidden="true">${e}</svg>`,
    S = {
      search: `<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>`,
      chevron: `<path d="m6 9 6 6 6-6"/>`,
      left: `<path d="m15 18-6-6 6-6"/>`,
      right: `<path d="m9 18 6-6-6-6"/>`,
      link: `<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>`,
      check: `<path d="M20 6 9 17l-5-5"/>`,
      external: `<path d="M7 17 17 7M8 7h9v9"/>`,
      arrowDown: `<path d="M12 5v14M6 13l6 6 6-6"/>`,
      mail: `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>`,
      shield: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>`,
      info: `<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>`,
      expand: `<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>`,
      collapse: `<path d="m7 20 5-5 5 5M7 4l5 5 5-5"/>`,
      layers: `<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>`,
      tag: `<path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9Z"/><circle cx="8" cy="8" r="1.5"/>`,
      box: `<path d="m21 8-9-5-9 5v8l9 5 9-5V8Z"/><path d="m3 8 9 5 9-5M12 13v8"/>`,
      badge: `<path d="M12 2 15 5h4v4l3 3-3 3v4h-4l-3 3-3-3H5v-4l-3-3 3-3V5h4l3-3Z"/><path d="m9 12 2 2 4-4"/>`,
    },
    C = (e) => g.querySelector(e),
    w = (e) => y(e.stage === c ? `statusVerified` : `statusFixed`),
    T = `mailto:${t.reportEmail}`,
    E = (e) => e.split(`-`).map(Number),
    te = (e) => {
      let [t, n, r] = E(e);
      return f === `en` ? `${l[n - 1]} ${r}` : `${n} 月 ${r} 日`;
    },
    D = (e) => e.slice(0, 7),
    O = (e) => {
      let [t, n] = E(e);
      return y(`monthLabel`, { y: t, m: n, month: u[n - 1] });
    };
  function k() {
    let e = F(),
      n = { all: y(`allProducts`), enterprise: o.enterprise, cloud: o.cloud },
      r = (e, t, n) =>
        `<article class="t0sa-note"><span class="t0sa-note-ico">${x(e)}</span><h3>${b(y(t))}</h3><p>${b(y(n))}</p></article>`,
      s = (e, t) => `<option value="${e}"${e === p.sort ? ` selected` : ``}>${b(t)}</option>`;
    return `<header class="t0sa-hero">
  <div class="t0sa-wrap">
    <div class="t0sa-hero-top">
      <div class="t0sa-hero-copy"><h1 class="t0sa-h1">${b(y(`heroTitle`))}</h1><p class="t0sa-lead">${b(y(`lead`))}</p></div>
      <a class="t0sa-cta" href="${T}" aria-label="${b(y(`reportLinkLabel`, { email: t.reportEmail }))}">${x(S.mail)}<span>${b(y(`reportCta`))}</span>${x(S.external, `t0sa-cta-arrow`)}</a>
    </div>
    <div class="t0sa-notice" role="note">
      <span class="t0sa-notice-ico">${x(S.info)}</span>
      <p><strong>${b(y(`noticeTitle`))}</strong><span>${b(y(`noticeBody`))}</span></p>
      <button type="button" class="t0sa-notice-link" data-role="to-notes">${b(y(`noticeLink`))}${x(S.arrowDown)}</button>
    </div>
  </div>
</header>
<div class="t0sa-wrap">
  <div class="t0sa-board" id="t0sa-records">
    <aside class="t0sa-side">
      <div class="t0sa-side-filters">
        <section class="t0sa-side-block">
          <p class="t0sa-side-label" id="t0sa-cat-label">${b(y(`filterType`))}</p>
          <div class="t0sa-cats" role="group" aria-labelledby="t0sa-cat-label">
            ${i.map((t) => `<button type="button" class="t0sa-cat is-${t}${e.counts[t] ? `` : ` is-empty`}" data-category="${t}" aria-pressed="${t === p.category}"><i aria-hidden="true"></i><span>${b(y(t))}</span><b data-count>${e.counts[t]}</b></button>`).join(``)}
          </div>
        </section>
        <section class="t0sa-side-block">
          <p class="t0sa-side-label" id="t0sa-prod-label">${b(y(`productLabel`))}</p>
          <div class="t0sa-seg" role="group" aria-labelledby="t0sa-prod-label">
            ${a.map((e) => `<button type="button" data-product="${e}" aria-pressed="${e === p.product}">${b(n[e])}</button>`).join(``)}
          </div>
        </section>
      </div>
      <section class="t0sa-help" aria-labelledby="t0sa-help-title">
        <span class="t0sa-help-ico">${x(S.shield)}</span>
        <h2 id="t0sa-help-title">${b(y(`reportTitle`))}</h2>
        <p>${b(y(`reportBody`, { email: t.reportEmail }))}</p>
        <a class="t0sa-help-link" href="${T}">${x(S.mail)}<span>${b(y(`sendEmail`))}</span>${x(S.right, `t0sa-help-arrow`)}</a>
      </section>
    </aside>
    <section class="t0sa-card" aria-labelledby="t0sa-list-title">
      <div class="t0sa-card-head">
        <div class="t0sa-card-title"><h2 id="t0sa-list-title">${b(y(`listTitle`))}</h2><span class="t0sa-badge">${b(y(`totalBadge`, { n: v.length }))}</span></div>
        <div class="t0sa-controls">
          <label class="t0sa-field t0sa-search">${x(S.search)}<input class="t0sa-input" type="search" data-role="search" value="${b(p.term)}" placeholder="${b(y(`searchPlaceholder`))}" aria-label="${b(y(`searchLabel`))}" autocomplete="off" spellcheck="false">${t.enableShortcut ? `<kbd class="t0sa-kbd" aria-hidden="true">/</kbd>` : ``}</label>
          <label class="t0sa-field t0sa-pick"><select class="t0sa-select" data-role="sort" aria-label="${b(y(`sortLabel`))}">${s(`desc`, y(`newest`))}${s(`asc`, y(`oldest`))}</select>${x(S.chevron)}</label>
        </div>
        <div class="t0sa-meta"><span data-role="count" role="status" aria-live="polite">${b(e.countText)}</span><button type="button" class="t0sa-ghost" data-role="toggle-all" data-mode="${e.allOpen ? `collapse` : `expand`}"${e.visible.length ? `` : ` hidden`}>${L(e.allOpen)}</button></div>
      </div>
      <div class="t0sa-list" data-role="list">${e.listHtml}</div>
      <nav class="t0sa-pager" data-role="pager" aria-label="${b(y(`pagination`))}"${e.pagerHtml ? `` : ` hidden`}>${e.pagerHtml}</nav>
    </section>
  </div>
  <section class="t0sa-notes" id="t0sa-notes" aria-labelledby="t0sa-notes-title">
    <div class="t0sa-notes-head"><h2 class="t0sa-h2" id="t0sa-notes-title">${b(y(`notesTitle`))}</h2><p>${b(y(`notesIntro`))}</p></div>
    <div class="t0sa-notes-grid">${r(S.layers, `affected`, `notesAffected`)}${r(S.tag, `fixed`, `notesFixed`)}${r(S.box, `imagesTitle`, `notesImages`)}${r(S.badge, `verificationTitle`, `notesVerification`)}</div>
  </section>
</div>`;
  }
  function A(e) {
    let t = (e, t) => `<div><dt>${b(e)}</dt><dd>${b(t)}</dd></div>`,
      n = (e, t, n = !1) =>
        `<div${n ? ` class="is-wide"` : ``}><dt>${b(e)}</dt><dd>${t}</dd></div>`,
      r = e.links
        .map(
          (e) =>
            `<a class="t0sa-link" href="${b(e.url)}" target="_blank" rel="noopener noreferrer">${b(e.label)}${x(S.external)}</a>`
        )
        .join(``),
      i = e.stage === c;
    return `<details class="t0sa-item" id="record-${b(e.id)}" data-id="${b(e.id)}"${m.has(e.id) ? ` open` : ``}>
  <summary>
    <div class="t0sa-when"><time datetime="${e.date}">${b(te(e.date))}</time><span class="t0sa-product is-${b(e.product)}">${b(o[e.product] || e.productLabel)}</span></div>
    <div class="t0sa-main">
      <p class="t0sa-kind is-${b(e.category)}"><i aria-hidden="true"></i><span>${b(e.categoryLabel)}</span><span class="t0sa-sep">${b(e.component)}</span></p>
      <h3 class="t0sa-title">${b(e.title)}</h3>
      <p class="t0sa-summary">${b(e.summary)}</p>
      <dl class="t0sa-overview">${t(y(`affected`), e.affectedVersion.summary)}${t(y(`fixed`), e.fixedVersion.summary)}${t(y(`upgrade`), e.upgrade.summary)}</dl>
    </div>
    <div class="t0sa-side-meta"><span class="t0sa-status${i ? ` is-verified` : ``}">${x(i ? S.badge : S.check)}${b(w(e))}</span>${x(S.chevron, `t0sa-chev`)}</div>
  </summary>
  <div class="t0sa-detail"><div class="t0sa-panel">
    <dl class="t0sa-facts">
      ${n(y(`affected`), b(e.affectedVersion.description))}
      ${n(y(`fixed`), b(e.fixedVersion.description))}
      ${n(`${y(`upgrade`)} \xb7 ${e.upgrade.summary}`, `<ol class="t0sa-steps">${e.upgrade.instructions.map((e) => `<li><span>${b(e)}</span></li>`).join(``)}</ol>`, !0)}
      ${n(y(`postUpgrade`), b(e.upgrade.verification), !0)}
    </dl>
    <dl class="t0sa-facts">
      ${n(y(`scope`), b(e.scope))}
      ${n(y(`impact`), b(e.impact))}
      ${n(y(`handling`), b(e.handling))}
      ${n(y(`timeline`), b(e.timeline))}
      ${n(y(`evidence`), `<div class="t0sa-evidence">${e.evidence.map((e) => `<span>${b(e)}</span>`).join(``)}${r}</div>`, !0)}
    </dl>
    ${V() ? `<div class="t0sa-panel-foot"><button type="button" class="t0sa-btn" data-copy="${b(e.id)}" aria-label="${b(y(`copyLabel`, { title: e.title }))}">${x(S.link)}<span>${b(y(`copyLink`))}</span></button></div>` : ``}
  </div></div>
</details>`;
  }
  function j(e, t) {
    let n = /* @__PURE__ */ new Map();
    t.forEach((e) => n.set(D(e.date), (n.get(D(e.date)) || 0) + 1));
    let r = ``;
    return e
      .map((e) => {
        let t = D(e.date),
          i = n.get(t),
          a =
            t === r
              ? ``
              : `<div class="t0sa-month"><h3>${b(O(t))}</h3><span>${b(i === 1 ? y(`monthCountOne`) : y(`monthCount`, { n: i }))}</span></div>`;
        return ((r = t), a + A(e));
      })
      .join(``);
  }
  function M() {
    return `<div class="t0sa-empty"><span class="t0sa-empty-ico">${x(S.search)}</span><h3>${b(y(`emptyTitle`))}</h3><p>${b(y(`emptyBody`))}</p><button type="button" class="t0sa-btn" data-role="clear">${b(y(`clearFilters`))}</button></div>`;
  }
  function N(e) {
    let { page: t } = p,
      n = [.../* @__PURE__ */ new Set([1, t - 1, t, t + 1, e])]
        .filter((t) => t >= 1 && t <= e)
        .sort((e, t) => e - t),
      r = (e, t, n = ``, r = ``) =>
        `<button type="button" class="t0sa-page${r}" data-page="${e}" ${n}>${t}</button>`;
    return `<span class="t0sa-pager-info">${b(y(`pageOf`, { page: t, pages: e }))}</span><div class="t0sa-pages">
      ${r(t - 1, `${x(S.left)}<span>${b(y(`previous`))}</span>`, t === 1 ? `disabled` : ``)}
      ${n.map((e, i) => `${i && e - n[i - 1] > 1 ? `<span class="t0sa-gap" aria-hidden="true">…</span>` : ``}${r(e, e, `aria-label="${b(y(`pageLabel`, { page: e }))}"${e === t ? ` aria-current="page"` : ``}`, ` t0sa-num`)}`).join(``)}
      ${r(t + 1, `<span>${b(y(`next`))}</span>${x(S.right)}`, t === e ? `disabled` : ``)}
    </div>`;
  }
  function P() {
    let e = p.term.trim().toLowerCase(),
      t = v
        .filter((e) => p.product === `all` || e.product === p.product)
        .filter((t) => !e || ee.get(t.id).includes(e));
    return {
      base: t,
      matching: t
        .filter((e) => p.category === `all` || e.category === p.category)
        .sort((e, t) =>
          p.sort === `asc` ? e.date.localeCompare(t.date) : t.date.localeCompare(e.date)
        ),
    };
  }
  function F() {
    let { base: e, matching: n } = P(),
      r = Object.fromEntries(
        i.map((t) => [t, t === `all` ? e.length : e.filter((e) => e.category === t).length])
      ),
      a = Math.max(1, Math.ceil(n.length / t.pageSize));
    p.page = Math.min(Math.max(1, p.page), a);
    let o = (p.page - 1) * t.pageSize,
      s = n.slice(o, o + t.pageSize);
    return {
      counts: r,
      visible: s,
      allOpen: s.length > 0 && s.every((e) => m.has(e.id)),
      listHtml: s.length ? j(s, n) : M(),
      countText: n.length
        ? y(`results`, { start: o + 1, end: o + s.length, total: n.length })
        : y(`zeroResults`),
      pagerHtml: a < 2 ? `` : N(a),
    };
  }
  function I() {
    let e = F();
    (g.querySelectorAll(`.t0sa-cat`).forEach((t) => {
      let n = t.dataset.category;
      ((t.querySelector(`[data-count]`).textContent = e.counts[n]),
        t.classList.toggle(`is-empty`, e.counts[n] === 0),
        t.setAttribute(`aria-pressed`, String(n === p.category)));
    }),
      g
        .querySelectorAll(`[data-product]`)
        .forEach((e) => e.setAttribute(`aria-pressed`, String(e.dataset.product === p.product))),
      (C(`[data-role=list]`).innerHTML = e.listHtml),
      (C(`[data-role=count]`).textContent = e.countText));
    let t = C(`[data-role=pager]`);
    ((t.hidden = !e.pagerHtml), (t.innerHTML = e.pagerHtml), R());
  }
  let L = (e) =>
    `${x(e ? S.collapse : S.expand)}<span>${b(y(e ? `collapseAll` : `expandAll`))}</span>`;
  function R() {
    let e = [...g.querySelectorAll(`.t0sa-item`)],
      t = C(`[data-role=toggle-all]`);
    t.hidden = !e.length;
    let n = e.length > 0 && e.every((e) => e.open);
    ((t.dataset.mode = n ? `collapse` : `expand`), (t.innerHTML = L(n)));
  }
  let z = () => parseFloat(getComputedStyle(g).getPropertyValue(`--t0-scroll-offset`)) || 0;
  function B() {
    let e = C(`.t0sa-card`).getBoundingClientRect().top;
    e < z() && s.scrollBy({ top: e - z() - 16, behavior: `smooth` });
  }
  let ne = () =>
      t.shareUrl || (d && !/^(about|blob|data):/.test(location.protocol) ? location.href : ``),
    V = () => !!ne();
  function re(e) {
    let t = ne();
    if (!t) return ``;
    let n = new URL(t, location.href);
    return ((n.hash = `record-${e}`), n.href);
  }
  async function H(e) {
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
  async function ie(e) {
    let t = re(e.dataset.copy),
      n = t ? await H(t) : !1,
      r = e.querySelector(`span`);
    (e.classList.toggle(`is-done`, n),
      (e.querySelector(`svg`).outerHTML = x(n ? S.check : S.link)),
      (r.textContent = y(n ? `copied` : `copyFailed`)));
    let i = setTimeout(() => {
      (h.delete(i),
        e.isConnected &&
          (e.classList.remove(`is-done`),
          (e.querySelector(`svg`).outerHTML = x(S.link)),
          (r.textContent = y(`copyLink`))));
    }, 2e3);
    h.add(i);
  }
  function U() {
    if (!location.hash.startsWith(`#record-`)) return;
    let e = decodeURIComponent(location.hash.slice(8));
    if (!v.some((t) => t.id === e)) return;
    Object.assign(p, { category: `all`, product: `all`, term: `` });
    let n = P().matching.findIndex((t) => t.id === e);
    ((p.page = Math.floor(n / t.pageSize) + 1),
      m.add(e),
      (g.innerHTML = k()),
      requestAnimationFrame(() =>
        document.getElementById(`record-${e}`)?.scrollIntoView({ block: `start` })
      ));
  }
  let W = (e) => {
      let t = e.target.closest(`button`);
      if (t && g.contains(t)) {
        if (t.dataset.category) return ((p.category = t.dataset.category), (p.page = 1), I());
        if (t.dataset.product) return ((p.product = t.dataset.product), (p.page = 1), I());
        if (t.dataset.copy) return ie(t);
        if (t.dataset.page && !t.disabled)
          return (
            (p.page = Number(t.dataset.page)),
            I(),
            (
              g.querySelector(`.t0sa-page[aria-current=page]`) ||
              g.querySelector(`.t0sa-page:not(:disabled)`)
            )?.focus({ preventScroll: !0 }),
            B()
          );
        if (t.dataset.role === `to-notes`) {
          let e = C(`#t0sa-notes`);
          s.scrollBy({ top: e.getBoundingClientRect().top - z() - 16, behavior: `smooth` });
        } else {
          if (t.dataset.role === `clear`)
            return (
              Object.assign(p, { category: `all`, product: `all`, term: ``, page: 1 }),
              (C(`[data-role=search]`).value = ``),
              I(),
              C(`[data-role=search]`).focus()
            );
          if (t.dataset.role === `toggle-all`) {
            let e = t.dataset.mode !== `collapse`;
            g.querySelectorAll(`.t0sa-item`).forEach((t) => {
              t.open = e;
            });
          }
        }
      }
    },
    G = (e) => {
      e.target.dataset.role === `search` && ((p.term = e.target.value), (p.page = 1), I());
    },
    K = (e) => {
      e.target.dataset.role === `sort` && ((p.sort = e.target.value), (p.page = 1), I());
    },
    q = (e) => {
      let t = e.target;
      t.classList?.contains(`t0sa-item`) &&
        (t.open ? m.add(t.dataset.id) : m.delete(t.dataset.id), R());
    },
    J = (e) => {
      if (e.key !== `/` || e.metaKey || e.ctrlKey || e.altKey) return;
      let t = document.activeElement;
      if (t && (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable)) return;
      let n = C(`[data-role=search]`);
      n &&
        (e.preventDefault(), n.focus(), n.scrollIntoView({ block: `center`, behavior: `smooth` }));
    };
  function Y() {
    return k();
  }
  function X(e) {
    return (
      (g = e),
      g.setAttribute(`lang`, f),
      (g.innerHTML = k()),
      g.addEventListener(`click`, W),
      g.addEventListener(`input`, G),
      g.addEventListener(`change`, K),
      g.addEventListener(`toggle`, q, !0),
      t.enableShortcut && document.addEventListener(`keydown`, J),
      t.syncHash && (s.addEventListener(`hashchange`, U), U()),
      function () {
        (g.removeEventListener(`click`, W),
          g.removeEventListener(`input`, G),
          g.removeEventListener(`change`, K),
          g.removeEventListener(`toggle`, q, !0),
          document.removeEventListener(`keydown`, J),
          s.removeEventListener(`hashchange`, U),
          h.forEach(clearTimeout),
          h.clear());
      }
    );
  }
  return { html: Y, mount: X };
}
function re(e, t) {
  return V(t).mount(e);
}
function H(e) {
  let t = String(e || ``).toLowerCase();
  return t.startsWith(`zh`) ? `zh-CN` : t.startsWith(`en`) ? `en` : ``;
}
function ie() {
  let e = typeof P == `function` ? P() : null,
    t = e && e.activeLocale;
  return H(t && (t.code || t.slug));
}
function U() {
  return s === void 0
    ? ``
    : H(new URL(s.location.href).searchParams.get(`lang`)) ||
        H(document.documentElement.lang) ||
        H(r.language);
}
function W(e) {
  let {
      language: t = `auto`,
      reportEmail: r = `productsupport@freezonex.io`,
      pageSize: i = 10,
      shareUrl: a = ``,
      scrollOffset: s = 88,
      gutter: c = 24,
      maxWidth: l = 1200,
      style: u,
    } = e,
    h = o(null),
    g = ie(),
    [_, ee] = m(``);
  p(() => {
    let e = () => ee(U());
    e();
    let t = new MutationObserver(e);
    return (
      t.observe(document.documentElement, { attributes: !0, attributeFilter: [`lang`] }),
      () => t.disconnect()
    );
  }, []);
  let v = se.includes(t) ? t : g || _ || `en`,
    y = n(
      () => ({
        data: { "zh-CN": J, en: Y },
        messages: X,
        locale: v,
        pageSize: i,
        reportEmail: r,
        shareUrl: a || void 0,
      }),
      [v, i, r, a]
    ),
    b = n(() => V(y).html(), [y]);
  return (
    p(() => {
      let e = q.current() === q.canvas;
      return re(h.current, { ...y, enableShortcut: !e, syncHash: !e });
    }, [y]),
    /*#__PURE__*/ f(`div`, {
      style: { width: `100%`, ...u },
      children: [
        /*#__PURE__*/ d(`link`, { rel: `stylesheet`, href: ae }),
        /*#__PURE__*/ d(`style`, { dangerouslySetInnerHTML: { __html: oe } }),
        /*#__PURE__*/ d(`div`, {
          ref: h,
          className: `t0sa`,
          lang: v,
          style: { "--t0-scroll-offset": `${s}px`, "--t0-gutter": `${c}px`, "--t0-max": `${l}px` },
          dangerouslySetInnerHTML: { __html: b },
          suppressHydrationWarning: !0,
        }),
      ],
    })
  );
}
var G, K, q, J, Y, X, ae, oe, se;
function ce() {
  return (ce = e(() => {
    (c(),
      l(),
      i(),
      C(),
      ({ addPropertyControls: G, ControlType: K, RenderTarget: q } = y),
      (J = [
        {
          id: `enterprise-internal-service-auth`,
          date: `2026-07-16`,
          dateType: `上线时间`,
          category: `hardening`,
          categoryLabel: `安全加固`,
          product: `enterprise`,
          productLabel: `Tier0 Enterprise`,
          component: `内部服务与管理入口`,
          status: `已修复`,
          stage: `released`,
          title: `Tier0 Enterprise 内部服务认证与管理端口加固`,
          summary: `加强内部 Node-RED、Marimo 服务访问认证，并收敛 EMQX 管理入口，减少内部服务及管理功能被直接访问的风险。`,
          scope: `Tier0 Enterprise 的内部 Node-RED、Marimo 服务访问链路与 EMQX 管理入口，包含网关及部署配置。`,
          impact: `内部服务缺少访问认证或管理端口直接向宿主机开放时，可能扩大管理功能的访问范围。`,
          handling: `内部服务校验运行时令牌，由平台网关注入认证信息；移除 EMQX 管理页面的宿主机端口映射及产品内管理入口。`,
          affectedVersion: {
            summary: `内部服务旧配置`,
            description: `使用原内部服务认证及管理端口配置的部署。受影响的正式产品版本范围尚未完整确认，需结合实际部署配置核对。`,
          },
          fixedVersion: {
            summary: `Enterprise 2.0.0`,
            description: `已确认 Enterprise 2.0.0 包含本项安全更新，2.2.5 与 2.2.7 仍保留相关保护。此处列出已核实版本，不表示首次修复版本。`,
          },
          upgrade: {
            summary: `镜像及部署配置升级`,
            instructions: [
              `通过正式升级流程更新应用与相关服务镜像，并同步更新部署配置。`,
              `核对内部服务认证已启用，EMQX 管理端口未向宿主机开放。`,
              `已有数据环境仍需按当前凭据管理流程维护管理密码；本项更新不表示历史密码已自动轮换。`,
            ],
            verification: `验证平台正常访问内部服务，未授权直连被拒绝，并检查管理端口映射。历史记录确认真实新装环境冒烟检查通过。`,
          },
          timeline: `2026-07-16 Enterprise 2.0.0 上线，已确认包含本项安全更新。`,
          evidence: [
            `依据 Enterprise PR #157、2.0.0 正式版本及网关和服务部署配置。`,
            `记录确认相关 Go 测试、编译及真实新装冒烟通过，覆盖内部服务令牌检查和 EMQX 管理端口收敛。`,
          ],
          links: [],
        },
        {
          id: `enterprise-deploy-log-redaction`,
          date: `2026-07-16`,
          dateType: `上线时间`,
          category: `fix`,
          categoryLabel: `产品安全修复`,
          product: `enterprise`,
          productLabel: `Tier0 Enterprise`,
          component: `应用部署错误日志`,
          status: `已修复`,
          stage: `released`,
          title: `Tier0 Enterprise 应用部署失败日志敏感信息过滤修复`,
          summary: `在应用部署失败的日志进入错误信息前，遮盖数据库连接信息、应用 API Key 等敏感参数，降低错误信息中暴露凭据的风险。`,
          scope: `Tier0 Enterprise 动态应用部署失败时，将容器日志拼入部署错误信息的处理路径。`,
          impact: `应用日志若包含连接串或凭据，未经处理的部署错误信息可能携带这些内容。实际影响取决于应用产生的日志内容。`,
          handling: `错误信息输出前统一过滤部署日志，覆盖数据库连接串、环境变量及 JSON 日志中的相关敏感值。`,
          affectedVersion: {
            summary: `部署日志旧实现`,
            description: `使用原部署失败日志处理逻辑的版本。对应的正式产品版本范围尚未完整确认，影响限于本条说明的错误信息路径。`,
          },
          fixedVersion: {
            summary: `Enterprise 2.0.0`,
            description: `已确认 Enterprise 2.0.0 包含部署日志脱敏，2.2.5 与 2.2.7 仍保留实际脱敏调用及回归用例。此处列出已核实版本，不表示首次修复版本。`,
          },
          upgrade: {
            summary: `应用镜像版本升级`,
            instructions: [
              `通过正式升级流程更新至包含本项修复的兼容产品版本及应用镜像。`,
              `离线环境使用对应产品版本升级包完成镜像导入与服务更新。`,
            ],
            verification: `使用测试凭据构造部署失败日志，确认错误信息中敏感值已被遮盖，同时保留必要的排障信息。历史记录确认定向回归测试通过。`,
          },
          timeline: `2026-07-16 Enterprise 2.0.0 上线，已确认包含本项修复。`,
          evidence: [
            `依据 Enterprise PR #181、2.0.0 正式版本中的部署错误处理与直接回归用例。`,
            `记录确认后端编译及项目域定向测试通过；脱敏用例覆盖连接串、环境变量和 JSON 日志。验证范围不延伸至所有日志渠道或历史数据清理。`,
          ],
          links: [],
        },
        {
          id: `enterprise-flow-admin-access`,
          date: `2026-08-25`,
          dateType: `上线时间`,
          category: `fix`,
          categoryLabel: `产品安全修复`,
          product: `enterprise`,
          productLabel: `Tier0 Enterprise`,
          component: `Flow 网关访问控制`,
          status: `已修复`,
          stage: `released`,
          title: `Tier0 Enterprise Flow 网关管理接口访问限制修复`,
          summary: `限制通过 Flow 代理入口访问 Node-RED 管理接口，保留用户配置的 HTTP In 接口，减少管理能力被非预期访问的风险。`,
          scope: `Tier0 Enterprise 的 Source Flow 与 Event Flow 网关代理访问路径。`,
          impact: `原代理逻辑未对部分固定管理路径单独限制，可能扩大 Node-RED 管理接口的可访问范围。`,
          handling: `对流程管理、节点管理和运行设置等固定管理路径增加拒绝访问规则；用户 HTTP In 路径继续按产品访问规则处理。`,
          affectedVersion: {
            summary: `Flow 网关旧实现`,
            description: `使用原 Flow 网关代理逻辑且缺少管理路径限制的部署。受影响的正式产品版本范围尚未完整枚举。`,
          },
          fixedVersion: {
            summary: `Enterprise 2.2.4`,
            description: `已确认 Enterprise 2.2.4 包含本项修复，2.2.5 与 2.2.7 保留相同管理路径保护。`,
          },
          upgrade: {
            summary: `应用镜像版本升级`,
            instructions: [
              `通过正式升级流程更新至包含本项修复的兼容产品版本及应用镜像。`,
              `离线环境使用对应版本升级包导入镜像并升级服务。`,
            ],
            verification: `检查受限管理路径返回拒绝访问，大小写等变体仍受限制；同时验证正常 HTTP In 接口可用。历史记录包含网关定向回归测试。`,
          },
          timeline: `2026-08-25 Enterprise 2.2.4 上线，已确认包含本项修复。`,
          evidence: [
            `依据 Enterprise PR #475、2.2.4 正式版本中的管理路径识别、访问拦截及回归测试。`,
            `记录确认编译及网关测试通过，覆盖大小写、空路径和允许透传路径；后续版本仍保留管理路径拦截。`,
          ],
          links: [],
        },
        {
          id: `cloud-login-redirect`,
          date: `2026-06-30`,
          dateType: `上线时间`,
          category: `hardening`,
          categoryLabel: `安全加固`,
          product: `cloud`,
          productLabel: `Tier0 Cloud`,
          component: `登录与初始化跳转`,
          status: `已修复`,
          stage: `released`,
          title: `Tier0 Cloud 登录跳转地址安全校验更新`,
          summary: `统一校验登录、注册和首次登录流程中的跳转目标，将有效目标限定为站内路径，避免跳转参数将用户引向外部站点。`,
          scope: `Tier0 Cloud Web 登录、注册及初始化流程中使用统一跳转处理的页面。`,
          impact: `未经统一校验的跳转参数可能产生非预期跳转。本次更新加强跳转目标约束，公告不代表已发生账户或数据泄露。`,
          handling: `将绝对地址转换为站内路径，拒绝协议相对地址、反斜杠绕过和控制字符，并统一处理初始化页面的返回目标。`,
          affectedVersion: {
            summary: `2026-06-30 之前`,
            description: `2026-06-30 更新上线前，仍使用原跳转参数处理逻辑的 Cloud Web 版本。影响范围限于公告所述页面与跳转链路。`,
          },
          fixedVersion: {
            summary: `Cloud 2026-06-30`,
            description: `2026-06-30 上线的 Cloud 更新包含统一跳转地址校验；已核对当前代码保留相关校验及调用。`,
          },
          upgrade: {
            summary: `Cloud 平台统一更新`,
            instructions: [
              `由平台统一更新包含本项修复的 Web 应用镜像。`,
              `托管客户无需下载独立补丁或自行替换镜像。`,
            ],
            verification: `检查正常站内跳转和深链接能够恢复，外部地址及异常参数不能导致站外跳转。历史记录确认预发布环境端到端验证与定向单元测试通过。`,
          },
          timeline: `2026-06-30 安全更新上线。`,
          evidence: [
            `依据前端 PR #919 的发布记录、跳转校验实现及回归用例。`,
            `记录确认 7 项跳转校验单元测试通过；预发布环境完成邮箱用户、深链接、跨域地址及协议相对地址等场景验证。`,
          ],
          links: [],
        },
        {
          id: `cloud-admin-permission`,
          date: `2026-07-08`,
          dateType: `上线时间`,
          category: `fix`,
          categoryLabel: `产品安全修复`,
          product: `cloud`,
          productLabel: `Tier0 Cloud`,
          component: `工作空间管理权限`,
          status: `已修复`,
          stage: `released`,
          title: `Tier0 Cloud 工作空间管理操作权限校验修复`,
          summary: `为工作空间套餐升级管理操作增加平台管理员权限检查，并移除相关内部调用在缺少身份信息时自动赋予管理员权限的行为。`,
          scope: `Tier0 Cloud 内部服务调用与工作空间套餐升级管理操作；需要能够到达相关内部服务接口。`,
          impact: `旧实现的身份回退与管理操作权限检查不完整，可能让无凭证或普通成员身份触发受限管理操作。`,
          handling: `缺少身份信息的内部调用不再自动获得平台管理员权限；套餐升级管理操作执行前校验平台管理员身份。`,
          affectedVersion: {
            summary: `2026-07-08 之前`,
            description: `2026-07-08 更新上线前，使用原内部身份回退及套餐升级管理逻辑的 Cloud 版本。`,
          },
          fixedVersion: {
            summary: `Cloud 2026-07-08`,
            description: `2026-07-08 上线的 Cloud 更新包含管理操作权限修复；已核对当前代码保留身份回退限制和平台管理员检查。`,
          },
          upgrade: {
            summary: `Cloud 平台统一更新`,
            instructions: [
              `由平台统一更新相关后端服务镜像。`,
              `托管客户无需下载独立补丁或自行修改服务配置。`,
            ],
            verification: `验证无凭证和普通成员身份均无法执行套餐升级管理操作，并核对合法管理员调用。历史实测覆盖预发布环境中的无凭证及普通成员拒绝场景。`,
          },
          timeline: `2026-07-08 安全修复上线。`,
          evidence: [
            `依据后端 PR #425 的发布记录、内部身份回退回归测试及管理操作权限检查。`,
            `相关 Go 竞态测试与五个受影响服务编译通过；预发布环境实测确认无凭证和普通成员调用均返回权限不足。公告仅覆盖本项管理操作修复。`,
          ],
          links: [],
        },
        {
          id: `app-import-security`,
          date: `2026-08-26`,
          dateType: `上线时间`,
          category: `fix`,
          categoryLabel: `产品安全修复`,
          product: `enterprise`,
          productLabel: `Tier0 Enterprise`,
          component: `App 导入与替换`,
          status: `已修复`,
          stage: `released`,
          title: `Tier0 Enterprise App 导入文件归属与压缩包校验修复`,
          summary: `在导入与替换 App 时校验上传文件的项目归属，统一检查压缩包路径、文件类型与资源大小，降低跨项目引用文件及处理恶意压缩包的风险。`,
          scope: `Tier0 Enterprise 的 App 包导入、替换及相关文件处理路径。需要具备相应操作权限的用户提交应用包。`,
          impact: `旧实现的部分导入路径缺少文件归属或统一的包内容校验，可能接受不属于当前项目的文件引用或不符合安全约束的包。`,
          handling: `读取包前校验文件与当前项目的绑定关系；拒绝不安全路径、非常规文件类型及超限包；补充媒体内容与大小校验。`,
          affectedVersion: {
            summary: `App 导入旧实现`,
            description: `历史缺陷记录确认了 App 导入与替换路径的校验缺口。对应产品版本范围尚未完整追溯，不将全部旧版本一概列为受影响。`,
          },
          fixedVersion: {
            summary: `Enterprise 2.2.5`,
            description: `已核对 Enterprise 2.2.5 正式版本中的导入与替换入口、文件归属检查和压缩包校验代码，确认包含修复。此处列出已核实的包含修复版本，不表示首次修复版本。`,
          },
          upgrade: {
            summary: `应用镜像及升级包`,
            instructions: [
              `通过正式产品升级流程，更新到包含本项修复的兼容产品版本；本条已核对 Enterprise 2.2.5。`,
              `在线环境更新版本化应用镜像；离线环境使用对应升级包导入镜像并更新配套文件。`,
              `历史上传文件若缺少正确的项目绑定，需在目标项目重新上传，再执行导入或替换。`,
            ],
            verification: `核对产品与镜像版本；验证合法包可导入、跨项目文件引用被拒绝，且不安全路径及超限包不能进入导入流程。`,
          },
          timeline: `2026-08-26 Enterprise 2.2.5 上线，已确认包含本项修复。`,
          evidence: [
            `依据 App 导入缺陷修复记录（PR #406）及正式 2.2.5 版本源码核对。`,
            `修复记录记载 Go 构建与单元测试通过，包含压缩包安全、媒体校验和文件归属回归；该记录未声称完成整套 Docker 端到端验收。`,
          ],
          links: [],
        },
        {
          id: `form-error-redaction`,
          date: `2026-08-25`,
          dateType: `上线时间`,
          category: `fix`,
          categoryLabel: `产品安全修复`,
          product: `cloud`,
          productLabel: `Tier0 Cloud`,
          component: `Web · 表单异常上报`,
          status: `已修复`,
          stage: `released`,
          title: `Tier0 Cloud 表单异常上报敏感信息过滤修复`,
          summary: `修复表单校验异常中的字段值可能进入错误上报的问题，对整段表单数据进行遮盖，并覆盖错误文本被截断的情况。`,
          scope: `Tier0 Cloud Web 的错误详情处理、浏览器监控上报及认证和业务表单的校验异常处理。`,
          impact: `校验错误可能携带完整表单值，逐字段过滤不足时可能让敏感内容进入错误上报。此公告记录上报代码的修复，不代表历史数据处置已全部完成。`,
          handling: `整体遮盖异常文本中的表单 values，处理截断对象与数字值等边界，并补齐 23 处校验异常捕获。`,
          affectedVersion: {
            summary: `2026-08-25 之前`,
            description: `2026-08-25 更新上线前，使用原表单异常详情与监控上报实现的 Cloud 版本。影响范围限于本条所述功能。`,
          },
          fixedVersion: {
            summary: `Cloud 2026-08-25`,
            description: `2026-08-25 上线的 Cloud 更新已包含本项修复，对表单异常上报数据进行整体遮盖。`,
          },
          upgrade: {
            summary: `Cloud 平台统一更新`,
            instructions: [
              `由平台通过正式发布流程更新至包含 Cloud 2026-08-25 修复的 Web 应用镜像。`,
              `托管服务客户无需下载独立补丁或自行替换镜像。`,
            ],
            verification: `在目标环境触发表单校验错误，确认表单敏感值不会进入上报详情；同时验证截断文本等边界。已有记录确认测试环境及自动化回归。`,
          },
          timeline: `2026-08-25 上线；表单校验场景及相关自动化回归已完成验证。`,
          evidence: [
            `依据前端修复记录 PR #1752 及对应发布记录，已核对修复代码和回归用例。`,
            `修复记录记载 281 项相关测试通过；测试环境注册表单连续触发 3 次校验，未出现未捕获异常。此结果不扩大为生产历史数据清理结论。`,
          ],
          links: [],
        },
        {
          id: `cors-preflight-policy`,
          date: `2026-08-21`,
          dateType: `上线时间`,
          category: `fix`,
          categoryLabel: `产品安全修复`,
          product: `cloud`,
          productLabel: `Tier0 Cloud`,
          component: `跨域访问配置`,
          status: `已修复`,
          stage: `released`,
          title: `Tier0 Cloud 跨域预检响应配置修复`,
          summary: `修正相关跨域访问配置。安全扫描处理报告记载修复已上线，复核时外部来源的预检响应未返回跨域访问许可头。`,
          scope: `2026-08-22 ZAP 扫描处理报告所复核的生产环境跨域预检响应。结论仅覆盖报告所测目标与配置。`,
          impact: `不恰当的跨域许可可能扩大浏览器读取跨域响应的范围。报告将 23 条相关扫描告警归入已修复事项，不等于 23 个独立漏洞。`,
          handling: `调整跨域响应策略；报告复核结果为外域预检无 Access-Control-Allow-Origin，仅返回 Vary: Origin。`,
          affectedVersion: {
            summary: `不适用 · 配置修复`,
            description: `本项针对报告所测生产环境的跨域访问配置，以配置更新前后的响应行为确定适用范围，不按产品或镜像版本划分。`,
          },
          fixedVersion: {
            summary: `2026-08-21 配置更新`,
            description: `报告记载相关配置于 2026-08-21 更新上线，跨域预检响应复核通过。`,
          },
          upgrade: {
            summary: `Cloud 平台配置更新`,
            instructions: [
              `托管服务由平台统一维护相关跨域响应配置，客户无需下载独立补丁包。`,
              `自定义域名、网关或边缘响应配置应单独核验；不能仅通过更换应用镜像推定本项配置已生效。`,
            ],
            verification: `使用不受信任的外部 Origin 检查预检响应，同时确认合法来源的正常业务访问。历史复核结果仅代表报告所测配置。`,
          },
          timeline: `报告记载 2026-08-21 修复已上线；2026-08-22 扫描处理总结记录了外域预检复核结果。`,
          evidence: [
            `依据《Tier0 生产环境 ZAP 安全扫描处理总结（2026-08-22）》第 3.2 节的已修复结论及响应头实测摘要。`,
            `本条按扫描报告归档；未找到可对应的独立 GitHub 变更或镜像版本，不据此声称全域持续验证通过。`,
          ],
          links: [],
        },
        {
          id: `entrance-validation`,
          date: `2026-09-20`,
          dateType: `上线时间`,
          category: `fix`,
          categoryLabel: `工具安全修复`,
          product: `enterprise`,
          productLabel: `Tier0 Enterprise`,
          component: `安装后入口变更工具`,
          status: `已修复`,
          stage: `released`,
          title: `Tier0 Enterprise 入口变更工具输入校验与更新范围修复`,
          summary: `完善入口参数校验和域名匹配转义，减少无效输入导致更新范围扩大或错误报告成功的风险；探活失败时明确返回部分成功状态。`,
          scope: `Tier0 Enterprise 自部署环境的安装后入口变更脚本。涉及管理员执行入口域名或 IP 变更的操作场景。`,
          impact: `旧脚本在特定输入下可能扩大域名匹配范围，或在可达性检查未通过时仍报告成功。此记录针对管理工具行为。`,
          handling: `增加域名与 IPv4 参数校验、SQL LIKE 字面量转义；规范探活失败的退出状态，并修正试运行与代理处理。`,
          affectedVersion: {
            summary: `Enterprise 2.2.6`,
            description: `已确认在 Enterprise 2.2.6 测试环境使用的入口变更脚本中复现。其他产品版本的受影响范围尚未确认。`,
          },
          fixedVersion: {
            summary: `Enterprise 2.2.7`,
            description: `已确认 Enterprise 2.2.7 的正式版本标签包含脚本修复。此版本号对应 Tier0 产品及其配套部署文件。`,
          },
          upgrade: {
            summary: `镜像及部署包升级`,
            instructions: [
              `在线环境：通过对应产品版本的正式升级流程，更新应用镜像及配套部署文件。`,
              `离线环境：使用包含修复脚本及所需镜像的对应版本升级包。`,
              `本项涉及安装目录中的入口变更脚本，须随部署包更新；仅替换应用镜像无法完成脚本修复。`,
            ],
            verification: `核对部署包版本与入口变更脚本，完成入口可达性检查，并确认失败状态能够正确返回。`,
          },
          timeline: `2026-09-20 Enterprise 2.2.7 上线，包含入口变更工具修复。`,
          evidence: [
            `已核对 2.2.7 版本标签中的脚本，确认参数校验、匹配转义及探活状态处理均已保留。`,
            `修复记录记载 9 项回归检查通过，并完成 PostgreSQL 17 定向更新验证。`,
          ],
          links: [],
        },
        {
          id: `js-yaml-4-3-2`,
          date: `2026-09-20`,
          dateType: `上线时间`,
          category: `dependency`,
          categoryLabel: `组件安全更新`,
          product: `enterprise`,
          productLabel: `Tier0 Enterprise`,
          component: `Web · js-yaml`,
          status: `已修复`,
          stage: `released`,
          title: `Tier0 Enterprise js-yaml YAML 合并资源消耗安全更新`,
          summary: `将 js-yaml 更新至 4.3.2，引入上游对 YAML 合并序列及空映射计数的安全修正，进一步限制特制输入带来的 CPU 资源消耗。`,
          scope: `Tier0 Enterprise Web 前端依赖链中的 js-yaml。更新前组件版本为 4.3.1。`,
          impact: `上游问题涉及 YAML 合并处理的资源消耗。实际影响取决于应用是否使用相关解析路径处理不可信 YAML。`,
          handling: `升级至 js-yaml 4.3.2；采用上游对合并序列的长度限制，并将空映射纳入合并键总量计数。`,
          affectedVersion: {
            summary: `js-yaml 4.3.1（组件）`,
            description: `更新前组件版本为 js-yaml 4.3.1；已核对 Enterprise 2.2.5 包含该依赖。完整产品版本范围未枚举，实际影响取决于不可信 YAML 的解析路径。`,
          },
          fixedVersion: {
            summary: `Enterprise 2.2.7`,
            description: `已确认 Enterprise 2.2.7 包含 js-yaml 4.3.2。产品版本为 2.2.7，组件修复版本为 4.3.2。`,
          },
          upgrade: {
            summary: `应用镜像版本升级`,
            instructions: [
              `在线环境：通过产品升级流程，拉取并部署包含本项修复的版本化应用镜像。`,
              `离线环境：使用包含对应修复镜像的升级包，完成镜像导入与服务升级。`,
              `此项通过承载 Web 前端的应用镜像交付，组件随镜像更新。`,
            ],
            verification: `核对实际运行的产品版本、镜像版本及依赖清单；本条已确认 Enterprise 2.2.7 对应 js-yaml 4.3.2。`,
          },
          timeline: `2026-09-20 Enterprise 2.2.7 上线，包含 js-yaml 4.3.2 安全更新。`,
          evidence: [
            `已核对正式 2.2.7 Release 及其版本标签锁文件，确认实际依赖为 4.3.2。`,
            `上游 4.3.2 更新日志将此变更列于 Security 部分。`,
          ],
          links: [
            {
              label: `js-yaml 4.3.2 上游安全更新`,
              url: `https://github.com/nodeca/js-yaml/blob/4.3.2/CHANGELOG.md`,
            },
          ],
        },
        {
          id: `web-response-headers`,
          date: `2026-09-07`,
          dateType: `上线时间`,
          category: `hardening`,
          categoryLabel: `安全加固`,
          product: `cloud`,
          productLabel: `Tier0 Cloud`,
          component: `Web 应用响应`,
          status: `已修复`,
          stage: `released`,
          title: `Tier0 Cloud HTTP 响应头与框架标识安全加固`,
          summary: `依据 ZAP 扫描处理记录，对 Web 应用响应补充安全响应头并关闭默认框架标识，相关安全更新已上线。`,
          scope: `Tier0 Cloud Web 应用层响应配置。具体请求是否经过该配置取决于部署与路由；本条不扩大到所有 CDN 或边缘错误响应。`,
          impact: `改进浏览器响应安全基线，减少默认框架信息暴露。此项记录不代表扫描报告中所有告警均已关闭。`,
          handling: `保留 HSTS、X-Content-Type-Options: nosniff、Referrer-Policy: strict-origin-when-cross-origin，并关闭 X-Powered-By 框架标识。`,
          affectedVersion: {
            summary: `2026-09-07 之前`,
            description: `2026-09-07 更新上线前，使用原 Web 应用层响应配置的 Cloud 版本。影响范围限于经过该应用配置的响应。`,
          },
          fixedVersion: {
            summary: `Cloud 2026-09-07`,
            description: `2026-09-07 上线的 Cloud 更新已包含本项修复，补充所列安全响应头并关闭默认框架标识。`,
          },
          upgrade: {
            summary: `Cloud 平台统一更新`,
            instructions: [
              `由平台通过正式发布流程更新至包含 Cloud 2026-09-07 加固的 Web 应用镜像，并核对实际响应配置。`,
              `托管服务客户无需下载独立补丁或自行替换镜像。`,
            ],
            verification: `部署后检查首页及 API 响应头与框架标识，并分别核对应用层和边缘响应。已有记录确认本地响应检查及静态检查。`,
          },
          timeline: `2026-08-22 完成相关 ZAP 扫描；2026-09-07 安全更新上线。`,
          evidence: [
            `依据前端修复记录 PR #1851 及对应发布记录，已核对所列安全响应头与框架标识设置。`,
            `修复记录记载类型与静态检查，以及本地首页、API 404 响应头检查。`,
          ],
          links: [],
        },
        {
          id: `js-yaml-4-3-1`,
          date: `2026-08-26`,
          dateType: `上线时间`,
          category: `dependency`,
          categoryLabel: `组件安全更新`,
          product: `enterprise`,
          productLabel: `Tier0 Enterprise`,
          component: `Web · js-yaml`,
          status: `已修复`,
          stage: `released`,
          title: `Tier0 Enterprise js-yaml 有序映射重复键检测安全更新`,
          summary: `将 js-yaml 从 4.3.0 更新至 4.3.1，引入上游对有序映射重复键检测的安全修复，降低特制 YAML 输入造成过量计算的风险。`,
          scope: `Tier0 Enterprise Web 前端依赖链中的 js-yaml。更新前组件版本为 4.3.0。`,
          impact: `上游问题涉及有序映射（!!omap）重复键检测的平方复杂度。实际影响取决于相关 YAML 解析路径。`,
          handling: `采用 js-yaml 4.3.1 的安全修复，更新并锁定相应依赖。`,
          affectedVersion: {
            summary: `js-yaml 4.3.0（组件）`,
            description: `更新前组件版本为 js-yaml 4.3.0；已核对 Enterprise 2.0.0 包含该依赖。完整产品版本范围未枚举，实际影响取决于相关 YAML 解析路径。`,
          },
          fixedVersion: {
            summary: `Enterprise 2.2.5`,
            description: `已确认 Enterprise 2.2.5 包含 js-yaml 4.3.1；后续已核对的 Enterprise 2.2.7 包含 js-yaml 4.3.2。`,
          },
          upgrade: {
            summary: `应用镜像版本升级`,
            instructions: [
              `在线环境：通过产品升级流程，更新到包含本项修复的兼容产品版本及其应用镜像。`,
              `离线环境：使用对应产品版本升级包，导入修复镜像并升级服务。`,
              `本条记录已确认 Enterprise 2.2.5 包含修复；实际升级目标应结合当前部署版本选择。`,
            ],
            verification: `核对升级后的运行镜像和依赖清单；Enterprise 2.2.5 对应 js-yaml 4.3.1，已核对的 2.2.7 对应 4.3.2。`,
          },
          timeline: `2026-08-26 Enterprise 2.2.5 上线，包含 js-yaml 4.3.1 安全更新。`,
          evidence: [
            `已核对正式 2.2.5 Release 及版本标签锁文件，确认实际依赖为 4.3.1。`,
            `上游 4.3.1 更新日志将重复键检测复杂度修复列于 Security 部分。`,
          ],
          links: [
            {
              label: `js-yaml 4.3.1 上游安全更新`,
              url: `https://github.com/nodeca/js-yaml/blob/4.3.1/CHANGELOG.md`,
            },
          ],
        },
        {
          id: `yaml-merge-complexity`,
          date: `2026-07-16`,
          dateType: `上线时间`,
          category: `dependency`,
          categoryLabel: `组件安全更新`,
          product: `enterprise`,
          productLabel: `Tier0 Enterprise`,
          component: `Web · js-yaml`,
          status: `已修复`,
          stage: `released`,
          title: `Tier0 Enterprise js-yaml YAML 合并复杂度安全更新`,
          summary: `更新 YAML 解析组件，引入 js-yaml 4.2.0 起的合并复杂度安全修复；在 Enterprise 2.0.0 的正式版本中确认包含。`,
          scope: `Tier0 Enterprise Web 前端依赖链中的 js-yaml。相关安全修复覆盖 YAML 合并键处理。`,
          impact: `上游修复针对重复合并元素引发的平方复杂度与潜在拒绝服务风险；产品实际暴露面取决于不可信 YAML 的解析路径。`,
          handling: `更新 js-yaml 解析依赖；Enterprise 2.0.0 使用 js-yaml 4.3.0，包含 4.2.0 起的本项安全修复。`,
          affectedVersion: {
            summary: `js-yaml 4.1.1（组件）`,
            description: `依赖升级记录确认更新前使用 js-yaml 4.1.1。其对应的 Tier0 产品发布版本范围尚未确认。`,
          },
          fixedVersion: {
            summary: `Enterprise 2.0.0`,
            description: `已确认 Enterprise 2.0.0 包含 js-yaml 4.3.0，纳入 4.2.0 起的本项安全修复。后续组件更新另见相关公告。`,
          },
          upgrade: {
            summary: `应用镜像版本升级`,
            instructions: [
              `在线环境：通过产品升级流程，部署包含本项修复的兼容产品版本及其应用镜像。`,
              `离线环境：使用对应产品版本升级包，完成镜像导入与服务升级。`,
              `Enterprise 2.0.0 是本条已核对的历史修复版本，实际升级目标应结合当前部署版本选择。`,
            ],
            verification: `核对运行镜像对应的产品版本及依赖清单，确认包含本项修复；已核对的 2.0.0 实际使用 js-yaml 4.3.0。`,
          },
          timeline: `2026-07-16 Enterprise 2.0.0 上线，包含本项组件安全更新。`,
          evidence: [
            `已核对正式 2.0.0 Release 及版本标签锁文件；实际依赖 4.3.0 包含 4.2.0 起的安全修复。`,
            `上游 4.2.0 更新日志在 Security 部分记录合并复杂度修正。`,
          ],
          links: [
            {
              label: `js-yaml 4.2.0 上游安全更新`,
              url: `https://github.com/nodeca/js-yaml/blob/4.2.0/CHANGELOG.md`,
            },
          ],
        },
        {
          id: `tenant-network-verification`,
          date: `2026-01-22`,
          dateType: `验证完成`,
          category: `verification`,
          categoryLabel: `安全验证`,
          product: `cloud`,
          productLabel: `Tier0 Cloud`,
          component: `开发环境 · 租户网络隔离`,
          status: `隔离验证已完成`,
          stage: `verified`,
          title: `Tier0 Cloud 开发环境租户网络隔离验证`,
          summary: `对租户工作负载的网络隔离策略完成访问控制测试，验证正常公网访问与 DNS 可用，并确认对受限内部服务的连接受到阻断。`,
          scope: `当次 AWS 开发环境的租户工作负载网络策略。报告记录 18 个现有租户纳入策略范围。`,
          impact: `此项为隔离策略验证记录，验证对象为开发环境；不将结果延伸为生产环境全量验证结论。`,
          handling: `完成公网 HTTPS、DNS 及受限内部目标的访问控制检查，共 7 项场景，报告结果全部通过。`,
          affectedVersion: {
            summary: `不适用 · 环境验证`,
            description: `本条为当次开发环境网络策略验证，未定位到特定产品或镜像版本的漏洞。`,
          },
          fixedVersion: {
            summary: `不适用 · 策略验证`,
            description: `以 2026-01-22 的隔离策略测试结果归档，不对应产品修复版本或镜像 Tag。`,
          },
          upgrade: {
            summary: `策略配置与复测`,
            instructions: [
              `本条没有镜像版本升级项，维护对象为环境中的租户网络隔离策略。`,
              `部署或网络策略发生变化后，按目标环境配置并重新执行访问控制验证。`,
            ],
            verification: `同时检查允许访问与限制访问场景。历史报告确认当次开发环境 7 项场景通过。`,
          },
          timeline: `2026-01-22 15:19–15:26（UTC+8）完成测试；同日形成隔离策略测试报告。`,
          evidence: [
            `依据已归档的《租户网络隔离策略测试报告》，7 项验证通过。`,
            `验证同时覆盖允许访问与限制访问场景，报告记录了逐项测试结果。`,
          ],
          links: [],
        },
      ]),
      (Y = (() => {
        let e = {
            "enterprise-internal-service-auth": {
              component: `Internal services and admin access`,
              title: `Tier0 Enterprise internal service authentication and admin port hardening`,
              summary: `Strengthens authentication for internal Node-RED and Marimo services and restricts EMQX admin access, reducing direct exposure of internal services and management functions.`,
              scope: `Internal Node-RED and Marimo service connections and EMQX admin access in Tier0 Enterprise, including gateway and deployment configuration.`,
              impact: `Missing authentication on internal services or admin ports exposed on the host can broaden access to management functions.`,
              handling: `Internal services validate runtime tokens supplied by the platform gateway. EMQX admin port mappings on the host and the in-product admin entry point have been removed.`,
              affectedVersion: {
                summary: `Earlier service configuration`,
                description: `Deployments using the earlier internal service authentication and admin port configuration. The full range of affected product releases has not been confirmed; check the deployed configuration.`,
              },
              fixedVersion: {
                summary: `Enterprise 2.0.0`,
                description: `Enterprise 2.0.0 is confirmed to include this update. The protections are also present in 2.2.5 and 2.2.7. These are verified releases, not a claim about the first fixed release.`,
              },
              upgrade: {
                summary: `Images and deployment configuration`,
                instructions: [
                  `Use the official upgrade process to update application and related service images, together with deployment configuration.`,
                  `Confirm that internal service authentication is enabled and the EMQX admin port is not exposed on the host.`,
                  `For existing installations, maintain admin passwords under the current credential management process. This update does not automatically rotate historical passwords.`,
                ],
                verification: `Confirm that the platform can access internal services, unauthorized direct connections are rejected, and admin port mappings are restricted. The historical record confirms passing smoke checks on an actual fresh installation.`,
              },
              timeline: `Enterprise 2.0.0 was released on 2026-07-16 and is confirmed to include this security update.`,
              evidence: [
                `Based on Enterprise PR #157, the 2.0.0 release, and gateway and service deployment configuration.`,
                `The record confirms passing Go tests, compilation and smoke checks on an actual fresh installation, covering internal service token checks and restricted EMQX admin port exposure.`,
              ],
            },
            "enterprise-deploy-log-redaction": {
              component: `Application deployment error logs`,
              title: `Tier0 Enterprise sensitive data redaction in deployment errors`,
              summary: `Redacts database connection details, application API keys and other sensitive values before failed deployment logs are included in error messages, reducing the risk of credential exposure.`,
              scope: `The Tier0 Enterprise error-handling path that includes container logs in error messages when dynamic application deployment fails.`,
              impact: `If application logs contain connection strings or credentials, unfiltered deployment errors may expose them. Actual impact depends on the application log content.`,
              handling: `Deployment logs are filtered before error output, covering sensitive values in database connection strings, environment variables and JSON logs.`,
              affectedVersion: {
                summary: `Earlier deployment log handling`,
                description: `Versions using the earlier failed-deployment log handling. The full range of affected product releases has not been confirmed. Scope is limited to the error-message path described here.`,
              },
              fixedVersion: {
                summary: `Enterprise 2.0.0`,
                description: `Enterprise 2.0.0 is confirmed to include deployment log redaction. The redaction call and regression tests remain in 2.2.5 and 2.2.7. These are verified releases, not a claim about the first fixed release.`,
              },
              upgrade: {
                summary: `Application image upgrade`,
                instructions: [
                  `Use the official upgrade process to install a compatible product release and application image containing this fix.`,
                  `For offline installations, use the matching product upgrade package to import images and update services.`,
                ],
                verification: `Use test credentials in a failed-deployment log to confirm sensitive values are redacted while useful diagnostic information remains. The historical record confirms passing targeted regression tests.`,
              },
              timeline: `Enterprise 2.0.0 was released on 2026-07-16 and is confirmed to include this fix.`,
              evidence: [
                `Based on Enterprise PR #181, deployment error handling in the 2.0.0 release, and direct regression tests.`,
                `The record confirms a successful backend build and targeted project-domain tests. Redaction tests cover connection strings, environment variables and JSON logs. Verification does not extend to all log channels or historical data cleanup.`,
              ],
            },
            "enterprise-flow-admin-access": {
              component: `Flow gateway access control`,
              title: `Tier0 Enterprise Flow gateway admin endpoint access restriction`,
              summary: `Restricts access to Node-RED admin endpoints through the Flow proxy while preserving user-configured HTTP In endpoints, reducing unintended access to management functions.`,
              scope: `Source Flow and Event Flow gateway proxy paths in Tier0 Enterprise.`,
              impact: `The earlier proxy implementation did not separately restrict certain fixed admin paths, potentially broadening access to Node-RED admin endpoints.`,
              handling: `Adds denial rules for fixed flow management, node management and runtime settings paths. User HTTP In paths remain subject to the product’s normal access rules.`,
              affectedVersion: {
                summary: `Earlier Flow gateway implementation`,
                description: `Deployments using the earlier Flow gateway proxy without admin-path restrictions. The full range of affected product releases has not been enumerated.`,
              },
              fixedVersion: {
                summary: `Enterprise 2.2.4`,
                description: `Enterprise 2.2.4 is confirmed to include this fix. The same admin-path protections remain in 2.2.5 and 2.2.7.`,
              },
              upgrade: {
                summary: `Application image upgrade`,
                instructions: [
                  `Use the official upgrade process to install a compatible product release and application image containing this fix.`,
                  `For offline installations, import images and upgrade services using the matching upgrade package.`,
                ],
                verification: `Confirm that restricted admin paths and variants, including case variations, are denied while normal HTTP In endpoints remain available. The historical record includes targeted gateway regression tests.`,
              },
              timeline: `Enterprise 2.2.4 was released on 2026-08-25 and is confirmed to include this fix.`,
              evidence: [
                `Based on Enterprise PR #475 and admin-path detection, access blocking and regression tests in the 2.2.4 release.`,
                `The record confirms successful compilation and gateway tests covering case variations, empty paths and allowed proxy paths. Later verified releases retain the admin-path restrictions.`,
              ],
            },
            "cloud-login-redirect": {
              component: `Login and onboarding redirects`,
              title: `Tier0 Cloud login redirect validation update`,
              summary: `Applies consistent validation to redirect targets in login, registration and first-login flows, limiting valid targets to internal paths so redirect parameters cannot send users to external sites.`,
              scope: `Tier0 Cloud Web login, registration and onboarding pages that use the shared redirect handler.`,
              impact: `Redirect parameters without consistent validation may cause unexpected navigation. This update strengthens target restrictions; the advisory does not indicate that an account or data breach occurred.`,
              handling: `Converts absolute URLs to internal paths, rejects protocol-relative URLs, backslash bypasses and control characters, and normalizes return targets on onboarding pages.`,
              affectedVersion: {
                summary: `Before 2026-06-30`,
                description: `Cloud Web versions before the 2026-06-30 update that use the earlier redirect parameter handling. Scope is limited to the pages and redirect flows described here.`,
              },
              fixedVersion: {
                summary: `Cloud 2026-06-30`,
                description: `The Cloud update released on 2026-06-30 includes shared redirect validation. The validation and its call sites are confirmed to remain in the current code.`,
              },
              upgrade: {
                summary: `Managed Cloud update`,
                instructions: [
                  `The platform updates the Web application image containing this fix.`,
                  `Hosted customers do not need to download a separate patch or replace images themselves.`,
                ],
                verification: `Confirm that valid internal redirects and deep links work, and external URLs or malformed parameters cannot redirect outside the site. The historical record confirms passing staging end-to-end checks and targeted unit tests.`,
              },
              timeline: `The security update was released on 2026-06-30.`,
              evidence: [
                `Based on the release record for frontend PR #919, redirect validation code and regression tests.`,
                `The record confirms 7 passing redirect validation unit tests. Staging checks covered email users, deep links, cross-origin URLs and protocol-relative URLs.`,
              ],
            },
            "cloud-admin-permission": {
              component: `Workspace administration permissions`,
              title: `Tier0 Cloud workspace administration permission checks`,
              summary: `Adds a platform administrator check to workspace plan upgrade operations and removes automatic administrator privileges for related internal calls that lack identity information.`,
              scope: `Tier0 Cloud internal service calls and administrative workspace plan upgrades. Access to the relevant internal service endpoints is required.`,
              impact: `Incomplete identity fallback and permission checks in the earlier implementation could allow unauthenticated callers or ordinary members to invoke restricted administrative operations.`,
              handling: `Internal calls without identity information no longer automatically receive platform administrator privileges. Administrative plan upgrades check for a platform administrator before execution.`,
              affectedVersion: {
                summary: `Before 2026-07-08`,
                description: `Cloud versions before the 2026-07-08 update that use the earlier internal identity fallback and administrative plan upgrade logic.`,
              },
              fixedVersion: {
                summary: `Cloud 2026-07-08`,
                description: `The Cloud update released on 2026-07-08 includes the permission fix. The identity fallback restriction and platform administrator check are confirmed to remain in the current code.`,
              },
              upgrade: {
                summary: `Managed Cloud update`,
                instructions: [
                  `The platform updates the relevant backend service images.`,
                  `Hosted customers do not need to download a separate patch or change service configuration themselves.`,
                ],
                verification: `Confirm that unauthenticated callers and ordinary members cannot perform administrative plan upgrades, and check valid administrator calls. Historical staging checks covered rejection of unauthenticated callers and ordinary members.`,
              },
              timeline: `The security fix was released on 2026-07-08.`,
              evidence: [
                `Based on the release record for backend PR #425, internal identity fallback regression tests and administrative permission checks.`,
                `Relevant Go race tests and builds of five affected services passed. Staging checks confirmed permission-denied responses for both unauthenticated callers and ordinary members. This advisory covers only the administrative operation described here.`,
              ],
            },
            "app-import-security": {
              component: `App import and replacement`,
              title: `Tier0 Enterprise App import ownership and archive validation`,
              summary: `Checks project ownership of uploaded files during App import and replacement and applies consistent archive path, file type and size validation, reducing cross-project file references and malicious archive processing risks.`,
              scope: `Tier0 Enterprise App package import, replacement and related file handling. A user with the relevant operation permissions must submit an application package.`,
              impact: `Some earlier import paths lacked ownership checks or consistent package validation and could accept files belonging to another project or packages that did not meet security constraints.`,
              handling: `Validates the file’s project association before reading the package; rejects unsafe paths, non-regular file types and oversized packages; adds media content and size validation.`,
              affectedVersion: {
                summary: `Earlier App import implementation`,
                description: `Historical defect records confirm validation gaps in App import and replacement. The full affected product version range has not been traced; not all earlier versions are classified as affected.`,
              },
              fixedVersion: {
                summary: `Enterprise 2.2.5`,
                description: `Import and replacement entry points, file ownership checks and archive validation in Enterprise 2.2.5 have been reviewed and confirmed to include the fix. This is a verified fixed release, not a claim about the first fixed release.`,
              },
              upgrade: {
                summary: `Application image and upgrade package`,
                instructions: [
                  `Use the official product upgrade process to install a compatible release containing this fix. Enterprise 2.2.5 has been verified for this advisory.`,
                  `Online installations update versioned application images. Offline installations use the matching upgrade package to import images and update supporting files.`,
                  `If older uploaded files lack the correct project association, upload them again in the target project before importing or replacing the App.`,
                ],
                verification: `Check product and image versions. Confirm that valid packages can be imported, cross-project file references are rejected, and unsafe paths and oversized packages are blocked before import.`,
              },
              timeline: `Enterprise 2.2.5 was released on 2026-08-26 and is confirmed to include this fix.`,
              evidence: [
                `Based on the App import defect fix record (PR #406) and source review of the official 2.2.5 release.`,
                `The fix record reports passing Go builds and unit tests, including archive security, media validation and file ownership regressions. It does not claim full Docker end-to-end acceptance testing.`,
              ],
            },
            "form-error-redaction": {
              component: `Web · Form error reporting`,
              title: `Tier0 Cloud sensitive data redaction in form error reports`,
              summary: `Fixes form validation errors that could include field values in error reports by redacting the full form data block, including cases where error text has been truncated.`,
              scope: `Tier0 Cloud Web error detail processing, browser monitoring reports, and validation error handling in authentication and business forms.`,
              impact: `Validation errors may contain complete form values. Field-by-field filtering may miss sensitive content. This advisory covers the reporting code fix and does not confirm completion of all historical data remediation.`,
              handling: `Redacts the entire form values block in error text, handles edge cases such as truncated objects and numeric values, and adds validation error handling at 23 locations.`,
              affectedVersion: {
                summary: `Before 2026-08-25`,
                description: `Cloud versions before the 2026-08-25 update that use the earlier form error details and monitoring report implementation. Scope is limited to the functionality described here.`,
              },
              fixedVersion: {
                summary: `Cloud 2026-08-25`,
                description: `The Cloud update released on 2026-08-25 includes this fix, redacting form data as a whole in validation error reports.`,
              },
              upgrade: {
                summary: `Managed Cloud update`,
                instructions: [
                  `Through the official release process, the platform updates the Web application image to include the Cloud 2026-08-25 fix.`,
                  `Hosted customers do not need to download a separate patch or replace images themselves.`,
                ],
                verification: `Trigger form validation errors in the target environment and confirm sensitive form values do not appear in reported details, including truncated-text cases. Existing records confirm test-environment checks and automated regression coverage.`,
              },
              timeline: `Released on 2026-08-25. Form validation scenarios and related automated regressions have been verified.`,
              evidence: [
                `Based on frontend fix PR #1752 and the corresponding release record. The fix code and regression cases have been reviewed.`,
                `The fix record reports 281 passing related tests. Triggering registration form validation three times in the test environment produced no uncaught exceptions. This does not establish that historical production data has been cleaned up.`,
              ],
            },
            "cors-preflight-policy": {
              component: `Cross-origin access configuration`,
              title: `Tier0 Cloud CORS preflight configuration fix`,
              summary: `Corrects the relevant cross-origin access configuration. The security scan remediation report records the fix as deployed and confirms that preflight responses for an external origin did not include a cross-origin access permission header.`,
              scope: `Production CORS preflight responses reviewed in the ZAP scan remediation report dated 2026-08-22. The findings apply only to the targets and configuration tested in that report.`,
              impact: `Overly permissive CORS settings can broaden browser access to cross-origin responses. The report groups 23 related scan alerts under resolved items; these are not 23 independent vulnerabilities.`,
              handling: `Adjusts the cross-origin response policy. The report’s verification found no Access-Control-Allow-Origin header for an external-origin preflight request, with only Vary: Origin returned.`,
              affectedVersion: {
                summary: `N/A · Configuration fix`,
                description: `This item concerns cross-origin configuration in the production environment tested by the report. Applicability is determined by response behavior before and after the configuration change, not by product or image version.`,
              },
              fixedVersion: {
                summary: `Configuration update 2026-08-21`,
                description: `The report records the configuration update as deployed on 2026-08-21, with passing CORS preflight response verification.`,
              },
              upgrade: {
                summary: `Managed Cloud configuration update`,
                instructions: [
                  `The platform maintains the relevant cross-origin response configuration for hosted services. Customers do not need a separate patch package.`,
                  `Custom domains, gateways and edge response configuration require separate verification. Replacing an application image alone does not establish that this configuration is active.`,
                ],
                verification: `Check preflight responses using an untrusted external Origin and confirm normal access from legitimate origins. The historical verification applies only to the configuration tested in the report.`,
              },
              timeline: `The report records the fix as deployed on 2026-08-21. The scan remediation summary dated 2026-08-22 documents external-origin preflight verification.`,
              evidence: [
                `Based on the resolved finding and measured response-header summary in section 3.2 of the Tier0 Production ZAP Security Scan Remediation Summary (2026-08-22).`,
                `This item is documented from the scan report. No corresponding standalone GitHub change or image version was found; it does not establish continuous verification across all domains.`,
              ],
            },
            "entrance-validation": {
              categoryLabel: `Tool security fix`,
              component: `Post-installation endpoint change tool`,
              title: `Tier0 Enterprise endpoint change tool validation and update scope fix`,
              summary: `Improves endpoint input validation and domain matching escapes to reduce unintended update scope and incorrect success reports. Failed availability checks now return a partial-success status.`,
              scope: `The post-installation endpoint change script in self-hosted Tier0 Enterprise deployments, used by administrators when changing the endpoint domain or IP address.`,
              impact: `With certain inputs, the earlier script could match more domains than intended or report success despite a failed reachability check. This record concerns administrative tool behavior.`,
              handling: `Adds domain and IPv4 validation and literal escaping for SQL LIKE patterns; standardizes exit status for failed availability checks and corrects dry-run and proxy handling.`,
              affectedVersion: {
                summary: `Enterprise 2.2.6`,
                description: `The issue was reproduced with the endpoint change script in an Enterprise 2.2.6 test environment. Impact on other product versions has not been confirmed.`,
              },
              fixedVersion: {
                summary: `Enterprise 2.2.7`,
                description: `The official Enterprise 2.2.7 version tag is confirmed to include the script fix. This version identifies the Tier0 product and its supporting deployment files.`,
              },
              upgrade: {
                summary: `Images and deployment package`,
                instructions: [
                  `Online installations: use the official upgrade process for the target product version to update application images and supporting deployment files.`,
                  `Offline installations: use the matching upgrade package containing the fixed script and required images.`,
                  `This fix affects the endpoint change script in the installation directory, which must be updated with the deployment package. Replacing the application image alone does not update the script.`,
                ],
                verification: `Check the deployment package version and endpoint change script. Verify endpoint reachability and confirm that failures return the correct status.`,
              },
              timeline: `Enterprise 2.2.7 was released on 2026-09-20 with the endpoint change tool fix.`,
              evidence: [
                `The script in the 2.2.7 version tag has been reviewed. Input validation, matching escapes and availability-check status handling are confirmed to remain in place.`,
                `The fix record reports 9 passing regression checks and targeted update verification on PostgreSQL 17.`,
              ],
            },
            "js-yaml-4-3-2": {
              component: `Web · js-yaml`,
              title: `Tier0 Enterprise js-yaml update for YAML merge resource consumption`,
              summary: `Updates js-yaml to 4.3.2, incorporating upstream security fixes for YAML merge sequences and empty mapping counts to further limit CPU consumption from crafted input.`,
              scope: `js-yaml in the Tier0 Enterprise Web frontend dependency chain. The component version before this update was 4.3.1.`,
              impact: `The upstream issue concerns resource consumption during YAML merge processing. Actual impact depends on whether the application parses untrusted YAML through the relevant code paths.`,
              handling: `Updates to js-yaml 4.3.2, adopting upstream merge sequence length limits and counting empty mappings toward the total merge-key limit.`,
              affectedVersion: {
                summary: `js-yaml 4.3.1 (component)`,
                description: `The component version before this update was js-yaml 4.3.1, confirmed in Enterprise 2.2.5. The full product version range has not been enumerated. Actual impact depends on the paths used to parse untrusted YAML.`,
              },
              fixedVersion: {
                summary: `Enterprise 2.2.7`,
                description: `Enterprise 2.2.7 is confirmed to include js-yaml 4.3.2. The product version is 2.2.7; the fixed component version is 4.3.2.`,
              },
              upgrade: {
                summary: `Application image upgrade`,
                instructions: [
                  `Online installations: use the product upgrade process to pull and deploy a versioned application image containing this fix.`,
                  `Offline installations: use the upgrade package containing the fixed image to import images and upgrade services.`,
                  `This update is delivered in the application image that serves the Web frontend. The component is updated with the image.`,
                ],
                verification: `Check the running product version, image version and dependency inventory. Enterprise 2.2.7 is confirmed to use js-yaml 4.3.2 for this advisory.`,
              },
              timeline: `Enterprise 2.2.7 was released on 2026-09-20 with the js-yaml 4.3.2 security update.`,
              evidence: [
                `The official 2.2.7 release and the lockfile at its version tag have been reviewed, confirming dependency version 4.3.2.`,
                `The upstream 4.3.2 changelog lists this change under Security.`,
              ],
              linkLabels: [`js-yaml 4.3.2 upstream security update`],
            },
            "web-response-headers": {
              component: `Web application responses`,
              title: `Tier0 Cloud HTTP response headers and framework disclosure hardening`,
              summary: `Adds security headers to Web application responses and disables the default framework identification header, following the ZAP scan remediation record. The security update has been released.`,
              scope: `Tier0 Cloud Web application response configuration. Whether a request uses this configuration depends on deployment and routing. This does not cover every CDN or edge error response.`,
              impact: `Improves the browser response security baseline and reduces default framework disclosure. This record does not mean that all alerts in the scan report have been closed.`,
              handling: `Retains HSTS, X-Content-Type-Options: nosniff and Referrer-Policy: strict-origin-when-cross-origin, and disables the X-Powered-By framework header.`,
              affectedVersion: {
                summary: `Before 2026-09-07`,
                description: `Cloud versions before the 2026-09-07 update that use the earlier Web application response configuration. Scope is limited to responses handled by that configuration.`,
              },
              fixedVersion: {
                summary: `Cloud 2026-09-07`,
                description: `The Cloud update released on 2026-09-07 includes the listed security headers and disables the default framework identification header.`,
              },
              upgrade: {
                summary: `Managed Cloud update`,
                instructions: [
                  `Through the official release process, the platform updates the Web application image to include the Cloud 2026-09-07 hardening and checks the effective response configuration.`,
                  `Hosted customers do not need to download a separate patch or replace images themselves.`,
                ],
                verification: `After deployment, inspect headers and framework identifiers on homepage and API responses, checking application and edge responses separately. Existing records confirm local response checks and static checks.`,
              },
              timeline: `The related ZAP scan was completed on 2026-08-22. The security update was released on 2026-09-07.`,
              evidence: [
                `Based on frontend fix PR #1851 and its release record. The listed security headers and framework identification settings have been reviewed.`,
                `The fix record reports type and static checks, plus local header checks for the homepage and API 404 responses.`,
              ],
            },
            "js-yaml-4-3-1": {
              component: `Web · js-yaml`,
              title: `Tier0 Enterprise js-yaml update for ordered mapping duplicate key detection`,
              summary: `Updates js-yaml from 4.3.0 to 4.3.1, incorporating the upstream security fix for ordered mapping duplicate key detection to reduce excessive computation from crafted YAML input.`,
              scope: `js-yaml in the Tier0 Enterprise Web frontend dependency chain. The component version before this update was 4.3.0.`,
              impact: `The upstream issue concerns quadratic complexity in duplicate key detection for ordered mappings (!!omap). Actual impact depends on the relevant YAML parsing paths.`,
              handling: `Adopts the security fix in js-yaml 4.3.1 and updates and locks the dependency version.`,
              affectedVersion: {
                summary: `js-yaml 4.3.0 (component)`,
                description: `The component version before this update was js-yaml 4.3.0, confirmed in Enterprise 2.0.0. The full product version range has not been enumerated. Actual impact depends on the relevant YAML parsing paths.`,
              },
              fixedVersion: {
                summary: `Enterprise 2.2.5`,
                description: `Enterprise 2.2.5 is confirmed to include js-yaml 4.3.1. The later verified Enterprise 2.2.7 release includes js-yaml 4.3.2.`,
              },
              upgrade: {
                summary: `Application image upgrade`,
                instructions: [
                  `Online installations: use the product upgrade process to install a compatible release and application image containing this fix.`,
                  `Offline installations: use the matching product upgrade package to import the fixed image and upgrade services.`,
                  `Enterprise 2.2.5 is confirmed to include the fix. Choose the actual upgrade target based on the currently deployed version.`,
                ],
                verification: `Check the upgraded running image and dependency inventory. Enterprise 2.2.5 uses js-yaml 4.3.1; the verified 2.2.7 release uses 4.3.2.`,
              },
              timeline: `Enterprise 2.2.5 was released on 2026-08-26 with the js-yaml 4.3.1 security update.`,
              evidence: [
                `The official 2.2.5 release and the lockfile at its version tag have been reviewed, confirming dependency version 4.3.1.`,
                `The upstream 4.3.1 changelog lists the duplicate key detection complexity fix under Security.`,
              ],
              linkLabels: [`js-yaml 4.3.1 upstream security update`],
            },
            "yaml-merge-complexity": {
              component: `Web · js-yaml`,
              title: `Tier0 Enterprise js-yaml update for YAML merge complexity`,
              summary: `Updates the YAML parser to incorporate the merge complexity security fix introduced in js-yaml 4.2.0. Inclusion is confirmed in the official Enterprise 2.0.0 release.`,
              scope: `js-yaml in the Tier0 Enterprise Web frontend dependency chain. The security fix covers YAML merge-key processing.`,
              impact: `The upstream fix addresses quadratic complexity and potential denial of service from repeated merge elements. Actual product exposure depends on the paths used to parse untrusted YAML.`,
              handling: `Updates the js-yaml parser dependency. Enterprise 2.0.0 uses js-yaml 4.3.0, which includes this security fix introduced in 4.2.0.`,
              affectedVersion: {
                summary: `js-yaml 4.1.1 (component)`,
                description: `The dependency upgrade record confirms js-yaml 4.1.1 before the update. The corresponding range of Tier0 product releases has not been confirmed.`,
              },
              fixedVersion: {
                summary: `Enterprise 2.0.0`,
                description: `Enterprise 2.0.0 is confirmed to include js-yaml 4.3.0 and the security fix introduced in 4.2.0. See the related advisories for later component updates.`,
              },
              upgrade: {
                summary: `Application image upgrade`,
                instructions: [
                  `Online installations: use the product upgrade process to deploy a compatible release and application image containing this fix.`,
                  `Offline installations: use the matching product upgrade package to import images and upgrade services.`,
                  `Enterprise 2.0.0 is the historical fixed release verified for this advisory. Choose the actual upgrade target based on the currently deployed version.`,
                ],
                verification: `Check the product version and dependency inventory for the running image to confirm inclusion of the fix. The verified 2.0.0 release uses js-yaml 4.3.0.`,
              },
              timeline: `Enterprise 2.0.0 was released on 2026-07-16 with this component security update.`,
              evidence: [
                `The official 2.0.0 release and the lockfile at its version tag have been reviewed. Dependency version 4.3.0 includes the security fix introduced in 4.2.0.`,
                `The upstream 4.2.0 changelog documents the merge complexity correction under Security.`,
              ],
              linkLabels: [`js-yaml 4.2.0 upstream security update`],
            },
            "tenant-network-verification": {
              component: `Development environment · Tenant network isolation`,
              title: `Tier0 Cloud development environment tenant network isolation verification`,
              summary: `Completes access-control testing of tenant workload network policies, confirming normal public internet and DNS access while blocking connections to restricted internal services.`,
              scope: `Tenant workload network policies in the AWS development environment tested at the time. The report records 18 existing tenants within the policy scope.`,
              impact: `This is an isolation-policy verification record for a development environment. The result does not establish comprehensive production environment verification.`,
              handling: `Checks public HTTPS, DNS and access restrictions for internal targets across 7 scenarios. The report records all scenarios as passing.`,
              affectedVersion: {
                summary: `N/A · Environment verification`,
                description: `This item verifies network policy in the development environment tested at the time. It does not identify a vulnerability in a specific product or image version.`,
              },
              fixedVersion: {
                summary: `N/A · Policy verification`,
                description: `Recorded against the isolation-policy test results dated 2026-01-22. There is no corresponding fixed product version or image tag.`,
              },
              upgrade: {
                summary: `Policy configuration and retesting`,
                instructions: [
                  `This item does not require an image version upgrade. Maintenance concerns the environment’s tenant network isolation policy.`,
                  `After deployment or network policy changes, configure policies for the target environment and rerun access-control verification.`,
                ],
                verification: `Check both allowed and denied access scenarios. The historical report confirms 7 passing scenarios in the development environment tested at the time.`,
              },
              timeline: `Testing completed on 2026-01-22, 15:19–15:26 (UTC+8). The isolation-policy test report was produced the same day.`,
              evidence: [
                `Based on the archived Tenant Network Isolation Policy Test Report, with 7 passing checks.`,
                `Verification covered both allowed and denied access scenarios, with individual results documented in the report.`,
              ],
            },
          },
          t = {
            fix: `Product security fix`,
            dependency: `Dependency security update`,
            hardening: `Security hardening`,
            verification: `Security verification`,
          };
        return J.map((n) => {
          let { linkLabels: r = [], ...i } = e[n.id];
          return {
            ...n,
            dateType: n.stage === `verified` ? `Verified on` : `Released`,
            categoryLabel: t[n.category],
            status: n.stage === `verified` ? `Verified` : `Fixed`,
            ...i,
            links: n.links.map((e, t) => ({ ...e, label: r[t] })),
          };
        });
      })()),
      (X = {
        "zh-CN": {
          heroTitle: `安全公告与更新`,
          lead: `查看 Tier0 Enterprise 与 Cloud 的受影响版本、修复版本与升级方式。`,
          reportCta: `上报安全漏洞`,
          reportLinkLabel: `发送邮件至 {email} 上报安全漏洞`,
          noticeTitle: `更新方式说明`,
          noticeBody: `Cloud 由平台统一更新；Enterprise 请根据公告核对版本并完成升级。`,
          noticeLink: `查看说明`,
          filterType: `按记录类型`,
          productLabel: `产品 / 环境`,
          productFilter: `按产品或环境筛选`,
          all: `全部记录`,
          fix: `产品安全修复`,
          dependency: `组件安全更新`,
          hardening: `安全加固`,
          verification: `安全验证`,
          allProducts: `全部`,
          listTitle: `公告列表`,
          totalBadge: `{n} 条记录`,
          searchPlaceholder: `搜索组件、版本或修复内容`,
          searchLabel: `搜索公告`,
          sortLabel: `排序`,
          newest: `时间由新到旧`,
          oldest: `时间由旧到新`,
          results: `显示 {start}–{end} 条，共 {total} 条`,
          zeroResults: `没有匹配的记录`,
          monthLabel: `{y} 年 {m} 月`,
          monthCount: `{n} 条`,
          monthCountOne: `1 条`,
          expandAll: `全部展开`,
          collapseAll: `全部收起`,
          emptyTitle: `没有匹配的记录`,
          emptyBody: `换个关键词，或清除筛选条件再试。`,
          clearFilters: `清除筛选`,
          pagination: `公告分页`,
          pageOf: `第 {page} / {pages} 页`,
          pageLabel: `第 {page} 页`,
          previous: `上一页`,
          next: `下一页`,
          statusFixed: `已修复`,
          statusVerified: `已验证`,
          affected: `受影响版本`,
          fixed: `修复版本`,
          upgrade: `升级方式`,
          postUpgrade: `升级 / 维护后验证`,
          scope: `适用范围`,
          impact: `影响说明`,
          handling: `处理措施`,
          timeline: `处理时间`,
          evidence: `修复与验证依据`,
          copyLink: `复制链接`,
          copyLabel: `复制「{title}」的链接`,
          copied: `已复制`,
          copyFailed: `复制失败，请手动复制地址栏`,
          notesTitle: `如何核对版本与升级`,
          notesIntro: `Enterprise 按产品版本核对，Cloud 按更新上线日期核对。`,
          notesAffected: `Enterprise 列出已核实的产品或组件版本。Cloud 列出安全更新上线前的相关版本，影响范围以每条公告说明的功能和使用场景为准。`,
          notesFixed: `Cloud 使用“Cloud YYYY-MM-DD”标识更新上线日期，日期统一采用北京时间（UTC+8）。Enterprise 使用正式产品版本号。`,
          imagesTitle: `镜像与升级包`,
          notesImages: `Cloud 由平台统一更新，托管客户无需自行安装补丁。Enterprise 通过在线镜像升级或对应离线包更新；涉及脚本与配置时同步更新部署文件。`,
          verificationTitle: `处理与验证依据`,
          notesVerification: `每条公告提供修复、发布与验证依据，并说明实际测试范围。配置修复按更新上线日期归档；环境安全验证单独标注完成时间。`,
          reportTitle: `发现安全问题？`,
          reportBody: `发送邮件至 {email}，说明受影响产品和问题概要，协助我们持续改进产品安全。`,
          sendEmail: `发送邮件`,
        },
        en: {
          heroTitle: `Security Advisories & Updates`,
          lead: `Affected versions, fixes and upgrade guidance for Tier0 Enterprise and Cloud.`,
          reportCta: `Report a vulnerability`,
          reportLinkLabel: `Email {email} to report a vulnerability`,
          noticeTitle: `How updates ship`,
          noticeBody: `Cloud is updated by the platform. For Enterprise, check the versions in each advisory and upgrade.`,
          noticeLink: `Read more`,
          filterType: `Record type`,
          productLabel: `Product / environment`,
          productFilter: `Filter by product or environment`,
          all: `All records`,
          fix: `Product security fixes`,
          dependency: `Dependency updates`,
          hardening: `Security hardening`,
          verification: `Security verification`,
          allProducts: `All`,
          listTitle: `Advisories`,
          totalBadge: `{n} records`,
          searchPlaceholder: `Search components, versions or fixes`,
          searchLabel: `Search advisories`,
          sortLabel: `Sort order`,
          newest: `Newest first`,
          oldest: `Oldest first`,
          results: `Showing {start}–{end} of {total}`,
          zeroResults: `No matching records`,
          monthLabel: `{month} {y}`,
          monthCount: `{n} advisories`,
          monthCountOne: `1 advisory`,
          expandAll: `Expand all`,
          collapseAll: `Collapse all`,
          emptyTitle: `No matching records`,
          emptyBody: `Try another keyword or clear your filters.`,
          clearFilters: `Clear filters`,
          pagination: `Advisory pagination`,
          pageOf: `Page {page} of {pages}`,
          pageLabel: `Page {page}`,
          previous: `Previous`,
          next: `Next`,
          statusFixed: `Fixed`,
          statusVerified: `Verified`,
          affected: `Affected`,
          fixed: `Fixed in`,
          upgrade: `Upgrade`,
          postUpgrade: `Post-update verification`,
          scope: `Scope`,
          impact: `Impact`,
          handling: `Remediation`,
          timeline: `Timeline`,
          evidence: `Remediation & verification evidence`,
          copyLink: `Copy link`,
          copyLabel: `Copy link to {title}`,
          copied: `Copied`,
          copyFailed: `Copy failed — use the address bar`,
          notesTitle: `Reading versions & upgrades`,
          notesIntro: `Enterprise uses product versions. Cloud uses update release dates.`,
          notesAffected: `Enterprise lists verified product or component versions. Cloud lists relevant versions before the security update. Scope is limited to the features and usage scenarios described in each advisory.`,
          notesFixed: `Cloud YYYY-MM-DD identifies the update release date. Dates use Beijing time (UTC+8). Enterprise uses official product version numbers.`,
          imagesTitle: `Images & upgrade packages`,
          notesImages: `Cloud updates are managed by the platform; hosted customers do not install patches themselves. Enterprise uses online image upgrades or matching offline packages. Update deployment files when scripts or configuration are included.`,
          verificationTitle: `Remediation & evidence`,
          notesVerification: `Each advisory provides remediation, release and verification evidence, with the actual test scope. Configuration fixes use deployment dates; environment verification records show their completion dates.`,
          reportTitle: `Found a security issue?`,
          reportBody: `Email {email} with the affected product and a brief description to help us keep Tier0 secure.`,
          sendEmail: `Send email`,
        },
      }),
      (ae = `https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&family=IBM+Plex+Sans:wght@500;600&display=swap`),
      (oe = `.t0sa{--t0-bg:#fff;--t0-surface:#f8f8f7;--t0-subtle:#f2f2f1;--t0-border:#ebebeb;--t0-border-soft:#f1f1f0;--t0-input:#e2e2e2;--t0-fg:#050b14;--t0-fg2:#343434;--t0-muted:#62666b;--t0-faint:#8a8d90;--t0-lime:#b2ed1d;--t0-lime-hover:#a2db1a;--t0-lime-50:#f7fde8;--t0-lime-100:#eefad0;--t0-lime-200:#dcf797;--t0-lime-700:#7ea815;--t0-lime-900:#48640c;--t0-lime-glow:rgba(178,237,29,.45);--t0-sans:'Geist','Inter','PingFang SC','Hiragino Sans GB','Microsoft YaHei',system-ui,-apple-system,sans-serif;--t0-display:'IBM Plex Sans','PingFang SC','Noto Sans SC','Hiragino Sans GB','Microsoft YaHei',system-ui,sans-serif;--t0-mono:'Geist Mono',ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;--t0-shadow-sm:none;--t0-shadow-card:none;--t0-gutter:24px;--t0-max:1200px;--t0-scroll-offset:88px;color:var(--t0-fg);font:400 14px/1.6 var(--t0-sans);-webkit-font-smoothing:antialiased;text-align:left;interpolate-size:allow-keywords;container:t0sa/inline-size;}.t0sa *,.t0sa *::before,.t0sa *::after{box-sizing:border-box}.t0sa :where(h1,h2,h3,p,ol,ul,dl,dd){margin:0;padding:0}.t0sa :where(ol,ul){list-style:none}.t0sa :where(button,input,select){font:inherit;color:inherit;letter-spacing:inherit;margin:0}.t0sa :where(button){background:none;border:0;padding:0;cursor:pointer}.t0sa :where(a){color:inherit;text-decoration:none}.t0sa :where(a,button,summary,select,input):focus-visible{outline:2px solid var(--t0-fg);outline-offset:2px}.t0sa [hidden]{display:none!important}.t0sa .t0sa-ico{width:16px;height:16px;flex:none;fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}.t0sa ::selection{background:var(--t0-lime);color:var(--t0-fg)}.t0sa-wrap{--t0-pad:var(--t0-gutter);max-width:calc(var(--t0-max) + var(--t0-pad)*2);margin:0 auto;padding:0 var(--t0-pad)}.t0sa-hero{position:relative;padding:56px 0 8px}.t0sa-hero>.t0sa-wrap{position:relative}.t0sa-hero-top{display:flex;justify-content:space-between;align-items:flex-start;gap:32px}.t0sa-hero-copy{min-width:0}.t0sa h1.t0sa-h1{font-family:var(--t0-display);font-size:clamp(32px,5.2cqi,56px);line-height:1.08;letter-spacing:-.025em;font-weight:500}.t0sa:lang(zh) h1.t0sa-h1{letter-spacing:-.01em;line-height:1.18}.t0sa-lead{margin-top:14px!important;max-width:760px;color:var(--t0-muted);font-size:16px;line-height:1.65}.t0sa-cta{display:inline-flex;align-items:center;gap:8px;flex:none;height:40px;padding:0 16px;border:1px solid var(--t0-lime);border-radius:4px;background:var(--t0-lime);font:500 13px/1 var(--t0-mono);letter-spacing:.02em;text-transform:uppercase;color:var(--t0-fg)!important;white-space:nowrap;transition:background .15s,border-color .15s}.t0sa-cta:hover{background:var(--t0-lime-hover);border-color:var(--t0-lime-hover)}.t0sa-cta .t0sa-cta-arrow{width:14px;height:14px;opacity:.7}.t0sa-notice{display:flex;align-items:center;gap:12px;margin-top:32px;padding:12px 12px 12px 14px;border:1px solid var(--t0-border);border-radius:4px;background:var(--t0-bg)}.t0sa-notice-ico{display:grid;place-items:center;flex:none;width:30px;height:30px;border-radius:4px;background:var(--t0-lime-100);color:var(--t0-lime-900)}.t0sa-notice p{flex:1;min-width:0;display:flex;flex-wrap:wrap;gap:2px 12px;font-size:14px;color:var(--t0-muted)}.t0sa-notice strong{font-weight:500;color:var(--t0-fg)}.t0sa-notice-link{display:inline-flex;align-items:center;gap:4px;flex:none;height:32px;padding:0 12px;border-radius:4px;font-size:13px;font-weight:500;color:var(--t0-fg);transition:background .15s}.t0sa-notice-link:hover{background:var(--t0-subtle)}.t0sa-notice-link .t0sa-ico{width:14px;height:14px}.t0sa-board{display:grid;grid-template-columns:240px minmax(0,1fr);gap:28px;align-items:start;padding:28px 0 56px;scroll-margin-top:var(--t0-scroll-offset)}.t0sa-side{position:sticky;top:calc(var(--t0-scroll-offset) + 8px);display:flex;flex-direction:column;gap:24px}.t0sa-side-filters{display:flex;flex-direction:column;gap:24px}.t0sa-side-label{margin-bottom:8px!important;padding-left:12px;font-size:12px;font-weight:500;color:var(--t0-faint)}.t0sa-cats{display:flex;flex-direction:column;gap:2px}.t0sa-cat{display:flex;align-items:center;gap:10px;width:100%;height:40px;padding:0 10px 0 12px;border-radius:4px;font-size:14px;color:var(--t0-fg2);text-align:left;transition:background .15s,color .15s}.t0sa-cat:hover{background:var(--t0-subtle);color:var(--t0-fg)}.t0sa-cat span{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.t0sa-cat b{display:inline-grid;place-items:center;min-width:24px;height:20px;padding:0 7px;border-radius:4px;font:500 11px/1 var(--t0-mono);color:var(--t0-faint);background:transparent;transition:background .15s,color .15s}.t0sa-cat[aria-pressed=true]{background:var(--t0-subtle);color:var(--t0-fg);font-weight:500}.t0sa-cat[aria-pressed=true] b{background:var(--t0-lime);color:var(--t0-fg)}.t0sa-cat.is-empty:not([aria-pressed=true]){color:var(--t0-faint)}.t0sa-cat i,.t0sa-kind i{flex:none;width:8px;height:8px;border-radius:50%;background:var(--t0-fg)}.t0sa-cat.is-all i{background:conic-gradient(var(--t0-fg) 0 25%,#9a9da1 0 50%,var(--t0-lime-700) 0 75%,var(--t0-lime) 0)}.is-dependency>i{background:#9a9da1!important}.is-hardening>i{background:var(--t0-lime-700)!important}.is-verification>i{background:transparent!important;box-shadow:inset 0 0 0 1.5px var(--t0-fg)}.t0sa-seg{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:2px;padding:3px;border-radius:4px;background:var(--t0-subtle)}.t0sa-seg button{height:32px;padding:0 6px;border-radius:3px;font-size:13px;font-weight:500;color:var(--t0-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:color .15s,background .15s,box-shadow .15s}.t0sa-seg button:hover{color:var(--t0-fg)}.t0sa-seg button[aria-pressed=true]{background:var(--t0-bg);color:var(--t0-fg);box-shadow:0 0 0 1px var(--t0-border)}.t0sa-help{position:relative;padding:18px;border:1px solid var(--t0-lime-200);border-radius:4px;background:var(--t0-lime-50);overflow:hidden}.t0sa-help-ico{display:grid;place-items:center;width:36px;height:36px;margin-bottom:12px;border-radius:4px;background:var(--t0-lime);color:var(--t0-fg)}.t0sa-help-ico .t0sa-ico{width:18px;height:18px}.t0sa-help h2{font-size:15px;font-weight:600;letter-spacing:-.01em}.t0sa-help p{margin-top:6px!important;font-size:13px;line-height:1.65;color:var(--t0-muted);overflow-wrap:anywhere}.t0sa-help-link{display:flex;align-items:center;gap:8px;margin-top:14px;height:38px;padding:0 12px;border-radius:4px;background:var(--t0-fg);font-size:13px;font-weight:500;color:#fff!important;transition:background .15s}.t0sa-help-link:hover{background:#1c1f1e}.t0sa-help-link span{flex:1}.t0sa-help-link .t0sa-ico{width:15px;height:15px}.t0sa-help-link .t0sa-help-arrow{color:var(--t0-lime)}.t0sa-card{min-width:0;border:1px solid var(--t0-border);border-radius:4px;background:var(--t0-bg);box-shadow:var(--t0-shadow-card);overflow:hidden}.t0sa-card-head{padding:22px 24px 0}.t0sa-card-title{display:flex;align-items:center;justify-content:space-between;gap:12px}.t0sa-card-title h2{font-size:18px;font-weight:600;letter-spacing:-.015em}.t0sa-badge{display:inline-flex;align-items:center;height:26px;padding:0 10px;border:1px solid var(--t0-border);border-radius:4px;background:var(--t0-surface);font-size:12px;font-weight:500;color:var(--t0-muted);font-variant-numeric:tabular-nums;white-space:nowrap}.t0sa-controls{display:flex;gap:10px;margin-top:16px}.t0sa-field{position:relative;display:flex;align-items:center}.t0sa-field>.t0sa-ico{position:absolute;pointer-events:none;color:var(--t0-faint)}.t0sa-search{flex:1;min-width:0}.t0sa-search>.t0sa-ico{left:13px}.t0sa-input,.t0sa-select{height:42px;width:100%;border:1px solid var(--t0-input);border-radius:4px;background:var(--t0-bg);font-size:14px;box-shadow:var(--t0-shadow-sm);transition:border-color .15s,box-shadow .15s}.t0sa-input{padding:0 42px 0 38px}.t0sa-input::placeholder{color:var(--t0-faint)}.t0sa-input:hover,.t0sa-select:hover{border-color:#cdcdcd}.t0sa .t0sa-input:focus,.t0sa .t0sa-select:focus{outline:none;border-color:var(--t0-fg);box-shadow:0 0 0 4px var(--t0-lime-glow)}.t0sa-kbd{position:absolute;right:11px;display:grid;place-items:center;min-width:22px;height:22px;padding:0 6px;border:1px solid var(--t0-border);border-radius:4px;background:var(--t0-surface);font:500 11px/1 var(--t0-mono);color:var(--t0-faint);pointer-events:none}.t0sa-input:not(:placeholder-shown)~.t0sa-kbd,.t0sa-input:focus~.t0sa-kbd{display:none}.t0sa-select{appearance:none;-webkit-appearance:none;padding:0 36px 0 14px;cursor:pointer;color:var(--t0-fg)}.t0sa-pick{flex:none;width:168px}.t0sa-pick>.t0sa-ico{right:12px;width:14px;height:14px}.t0sa-meta{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:14px 0 12px;font-size:13px;color:var(--t0-muted)}.t0sa-ghost{display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 10px;margin-right:-10px;border-radius:4px;font-size:13px;font-weight:500;color:var(--t0-fg);white-space:nowrap;transition:background .15s}.t0sa-ghost:hover{background:var(--t0-subtle)}.t0sa-list{border-top:1px solid var(--t0-border)}.t0sa-month{display:flex;align-items:baseline;gap:10px;padding:18px 24px 6px;background:var(--t0-bg)}.t0sa-month h3{font-size:13px;font-weight:600;color:var(--t0-fg)}.t0sa-month span{font-size:12px;color:var(--t0-faint)}.t0sa-item{position:relative;scroll-margin-top:var(--t0-scroll-offset)}.t0sa-item+.t0sa-item::before{content:'';position:absolute;top:0;left:24px;right:24px;height:1px;background:var(--t0-border-soft)}.t0sa-item>summary{display:grid;grid-template-columns:104px minmax(0,1fr) auto;gap:20px;align-items:start;padding:18px 24px 20px;list-style:none;cursor:pointer;transition:background .15s}.t0sa-item>summary::-webkit-details-marker{display:none}.t0sa-item>summary:hover{background:#fbfbfa}.t0sa-item[open]>summary{background:var(--t0-surface)}.t0sa .t0sa-item>summary:focus-visible{outline-offset:-2px}.t0sa-when{display:flex;flex-direction:column;align-items:flex-start;gap:8px;padding-top:2px}.t0sa-when time{font-size:14px;font-weight:500;color:var(--t0-fg);white-space:nowrap;font-variant-numeric:tabular-nums}.t0sa-product{display:inline-flex;align-items:center;height:22px;padding:0 7px;border:1px solid var(--t0-border);border-radius:4px;background:var(--t0-bg);font:500 11px/1 var(--t0-mono);color:var(--t0-fg2);white-space:nowrap}.t0sa-product.is-cloud{border-color:var(--t0-lime-200);background:var(--t0-lime-50);color:var(--t0-lime-900)}.t0sa-kind{display:flex;flex-wrap:wrap;align-items:center;gap:2px 8px;font-size:12.5px;font-weight:500;color:var(--t0-fg2)}.t0sa-sep{font-weight:400;color:var(--t0-faint)}.t0sa-sep::before{content:'·';margin-right:8px}.t0sa h3.t0sa-title{margin-top:6px;font-size:16px;line-height:1.45;font-weight:500;letter-spacing:-.01em}.t0sa-summary{margin-top:4px!important;font-size:14px;line-height:1.6;color:var(--t0-muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.t0sa-item[open] .t0sa-summary{display:block;-webkit-line-clamp:unset}.t0sa-overview{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:12px!important;padding:10px 14px;border-radius:4px;background:var(--t0-surface)}.t0sa-item[open] .t0sa-overview{background:var(--t0-bg);box-shadow:0 0 0 1px var(--t0-border)}.t0sa-overview dt{font-size:11.5px;color:var(--t0-faint)}.t0sa-overview dd{margin-top:1px;font-size:13px;line-height:1.5;font-weight:500;color:var(--t0-fg2);overflow-wrap:anywhere}.t0sa-side-meta{display:flex;align-items:center;gap:12px}.t0sa-status{display:inline-flex;align-items:center;gap:5px;height:26px;padding:0 10px 0 8px;border:1px solid var(--t0-lime-200);border-radius:4px;background:var(--t0-lime-50);font-size:12px;font-weight:500;color:var(--t0-lime-900);white-space:nowrap}.t0sa-status .t0sa-ico{width:13px;height:13px;stroke-width:2.25}.t0sa-status.is-verified{border-color:var(--t0-border);background:var(--t0-subtle);color:var(--t0-fg2)}.t0sa .t0sa-chev{display:block;width:30px;height:30px;padding:6px;border-radius:4px;color:var(--t0-faint);transition:transform .2s ease,color .15s,background .15s}.t0sa-item>summary:hover .t0sa-chev{color:var(--t0-fg);background:var(--t0-subtle)}.t0sa-item[open] .t0sa-chev{transform:rotate(180deg);color:var(--t0-fg)}.t0sa-item::details-content{block-size:0;overflow:clip;transition:block-size .25s ease,content-visibility .25s allow-discrete}.t0sa-item[open]::details-content{block-size:auto}.t0sa-detail{padding:0 24px 22px 148px;background:var(--t0-surface)}.t0sa-panel{padding:4px 22px 20px;border:1px solid var(--t0-border);border-radius:4px;background:var(--t0-bg)}.t0sa-facts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px 32px;padding-top:18px}.t0sa-facts+.t0sa-facts{margin-top:18px!important;border-top:1px solid var(--t0-border)}.t0sa-facts dt{font-size:12px;font-weight:500;color:var(--t0-muted)}.t0sa-facts dd{margin-top:4px;font-size:13.5px;line-height:1.7;color:var(--t0-fg2)}.t0sa-facts .is-wide{grid-column:1/-1}.t0sa-steps{counter-reset:t0step;display:grid;gap:8px;margin-top:8px!important}.t0sa-steps li{counter-increment:t0step;display:grid;grid-template-columns:22px minmax(0,1fr);gap:10px}.t0sa-steps li::before{content:counter(t0step);display:grid;place-items:center;width:22px;height:22px;margin-top:1px;border-radius:50%;background:var(--t0-lime-100);font:600 11px/1 var(--t0-mono);color:var(--t0-lime-900)}.t0sa-evidence{display:grid;gap:6px}.t0sa-link{display:inline-flex;align-items:center;gap:4px;width:fit-content;font-weight:500;color:var(--t0-fg);text-decoration:underline!important;text-decoration-color:var(--t0-input)!important;text-underline-offset:3px}.t0sa-link:hover{text-decoration-color:var(--t0-fg)!important}.t0sa-link .t0sa-ico{width:13px;height:13px}.t0sa-panel-foot{display:flex;justify-content:flex-end;margin-top:18px;padding-top:14px;border-top:1px solid var(--t0-border)}.t0sa-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;height:34px;padding:0 12px;border:1px solid var(--t0-input);border-radius:4px;background:var(--t0-bg);font-size:13px;font-weight:500;color:var(--t0-fg);white-space:nowrap;box-shadow:var(--t0-shadow-sm);transition:background .15s,border-color .15s}.t0sa-btn:hover{background:var(--t0-surface);border-color:#cdcdcd}.t0sa-btn .t0sa-ico{width:14px;height:14px}.t0sa-btn.is-done{border-color:var(--t0-lime-700);background:var(--t0-lime-50);color:var(--t0-lime-900)}.t0sa-empty{display:flex;flex-direction:column;align-items:center;gap:6px;padding:64px 20px;text-align:center}.t0sa-empty-ico{display:grid;place-items:center;width:44px;height:44px;margin-bottom:8px;border-radius:4px;background:var(--t0-subtle);color:var(--t0-muted)}.t0sa-empty-ico .t0sa-ico{width:20px;height:20px}.t0sa-empty h3{font-size:15px;font-weight:500}.t0sa-empty p{font-size:13px;color:var(--t0-muted)}.t0sa-empty .t0sa-btn{margin-top:12px}.t0sa-pager{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:14px 24px;border-top:1px solid var(--t0-border);background:var(--t0-surface)}.t0sa-pager-info{font-size:13px;color:var(--t0-muted)}.t0sa-pages{display:flex;align-items:center;gap:4px}.t0sa-page{display:inline-flex;align-items:center;justify-content:center;gap:4px;min-width:34px;height:34px;padding:0 10px;border-radius:4px;font-size:13px;font-weight:500;font-variant-numeric:tabular-nums;color:var(--t0-fg);transition:background .15s}.t0sa-page:hover:not(:disabled){background:var(--t0-bg);box-shadow:0 0 0 1px var(--t0-border)}.t0sa-page[aria-current=page]{background:var(--t0-fg);color:#fff}.t0sa-page[aria-current=page]:hover{background:#1c1f1e;box-shadow:none}.t0sa-page:disabled{opacity:.4;cursor:default}.t0sa-gap{min-width:24px;text-align:center;color:var(--t0-faint)}.t0sa-notes{padding:8px 0 72px;scroll-margin-top:var(--t0-scroll-offset)}.t0sa-notes-head{display:flex;align-items:baseline;justify-content:space-between;gap:16px;flex-wrap:wrap}.t0sa h2.t0sa-h2{font-family:var(--t0-display);font-size:26px;line-height:1.3;font-weight:500;letter-spacing:-.015em}.t0sa-notes-head p{font-size:14px;color:var(--t0-muted)}.t0sa-notes-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:20px}.t0sa-note{padding:20px;border:1px solid var(--t0-border);border-radius:4px;background:var(--t0-bg);box-shadow:var(--t0-shadow-sm);transition:transform .2s,box-shadow .2s,border-color .2s}.t0sa-note:hover{border-color:var(--t0-lime-700)}.t0sa-note-ico{display:grid;place-items:center;width:36px;height:36px;margin-bottom:14px;border-radius:4px;background:var(--t0-subtle);color:var(--t0-fg);transition:background .2s}.t0sa-note:hover .t0sa-note-ico{background:var(--t0-lime)}.t0sa-note-ico .t0sa-ico{width:18px;height:18px}.t0sa-note h3{font-size:14px;font-weight:600}.t0sa-note p{margin-top:6px!important;font-size:13px;line-height:1.65;color:var(--t0-muted)}@container t0sa (max-width:1023px){.t0sa-board{grid-template-columns:minmax(0,1fr);gap:16px}.t0sa-side{display:contents}.t0sa-side-filters{order:1;min-width:0;flex-direction:row;flex-wrap:wrap;align-items:center;gap:12px}.t0sa-card{order:2}.t0sa-help{order:3}.t0sa-side-filters .t0sa-side-block{min-width:0;max-width:100%}.t0sa-side-filters .t0sa-side-block:first-child{flex:1 1 100%}.t0sa-side-label{display:none}.t0sa-cats{flex-direction:row;flex-wrap:wrap;gap:6px}.t0sa-cat{width:auto;flex:none;height:36px;background:var(--t0-bg);box-shadow:0 0 0 1px var(--t0-border)}.t0sa-cat span{overflow:visible}.t0sa-cat[aria-pressed=true]{background:var(--t0-fg);color:#fff;box-shadow:none}.t0sa-seg{width:min(100%,360px)}.t0sa-help{display:grid;grid-template-columns:auto 1fr auto;column-gap:14px;align-items:center}.t0sa-help-ico{grid-row:1/3;margin:0}.t0sa-help p{grid-column:2;margin-top:2px!important}.t0sa-help-link{grid-column:3;grid-row:1/3;margin:0}.t0sa-detail{padding-left:24px}.t0sa-notes-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@container t0sa (max-width:820px){.t0sa-hero{padding:40px 0 4px}.t0sa-hero-top{flex-direction:column;align-items:flex-start;gap:20px}.t0sa-notice{margin-top:24px}.t0sa-board{padding:24px 0 48px}.t0sa-card-head{padding:20px 20px 0}.t0sa-month{padding:16px 20px 4px}.t0sa-item+.t0sa-item::before{left:20px;right:20px}.t0sa-item>summary{grid-template-columns:minmax(0,1fr) auto;grid-template-areas:"when meta" "main main";gap:8px 12px;padding:18px 20px}.t0sa-when{grid-area:when;flex-direction:row;align-items:center;gap:8px;padding-top:0}.t0sa-main{grid-area:main}.t0sa-side-meta{grid-area:meta;gap:4px}.t0sa-detail{padding:0 20px 18px}.t0sa-pager{padding:12px 20px}.t0sa-notes{padding-bottom:56px}}@container t0sa (max-width:560px){.t0sa-wrap{--t0-pad:min(var(--t0-gutter),16px)}.t0sa-hero{padding:32px 0 0}.t0sa-lead{font-size:15px}.t0sa-cta{width:100%;justify-content:center;height:44px}.t0sa-notice{flex-wrap:wrap;align-items:flex-start;margin-top:20px;padding:12px}.t0sa-notice p{flex-basis:calc(100% - 42px)}.t0sa-notice-link{margin-left:34px;padding:0 8px}.t0sa-board{padding:20px 0 40px}.t0sa-cats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}.t0sa-cat{width:auto;height:auto;min-height:44px;padding:8px 10px 8px 12px}.t0sa-cat.is-all{grid-column:1/-1}.t0sa-cat span{font-size:13px;line-height:1.3;white-space:normal;overflow-wrap:anywhere}.t0sa-side-filters .t0sa-side-block{flex:1 1 100%}.t0sa-seg{width:100%}.t0sa-card{margin:0 calc(var(--t0-pad)*-1);border-left:0;border-right:0;border-radius:0}.t0sa-card-head{padding:16px 16px 0}.t0sa-card-title h2{font-size:17px}.t0sa-controls{flex-wrap:wrap;margin-top:14px}.t0sa-search{flex-basis:100%}.t0sa-pick{flex:1;width:auto}.t0sa-kbd{display:none}.t0sa-month{padding:16px 16px 4px}.t0sa-item+.t0sa-item::before{left:16px;right:16px}.t0sa-item>summary{padding:16px}.t0sa h3.t0sa-title{font-size:15px}.t0sa-overview{grid-template-columns:repeat(2,minmax(0,1fr));padding:10px 12px}.t0sa-overview>div:last-child{grid-column:1/-1}.t0sa-detail{padding:0 12px 14px}.t0sa-panel{padding:2px 14px 16px}.t0sa-facts{grid-template-columns:minmax(0,1fr)}.t0sa-pager{padding:12px 16px}.t0sa-pages .t0sa-num,.t0sa-gap{display:none}.t0sa-help{grid-template-columns:auto 1fr}.t0sa-help-link{grid-column:1/-1;grid-row:auto;margin-top:14px}.t0sa-notes{padding-bottom:48px}.t0sa h2.t0sa-h2{font-size:22px}.t0sa-notes-grid{grid-template-columns:minmax(0,1fr);gap:8px;margin-top:16px}.t0sa-note{display:grid;grid-template-columns:36px minmax(0,1fr);column-gap:12px;padding:16px}.t0sa-note-ico{grid-row:1/3;margin:0}.t0sa-note p{grid-column:2}}@media (prefers-reduced-motion:reduce){.t0sa *,.t0sa *::before,.t0sa *::after,.t0sa-item::details-content{transition:none!important}}`),
      (se = [`zh-CN`, `en`]),
      G(W, {
        language: {
          type: K.Enum,
          title: `Language`,
          options: [`auto`, `en`, `zh-CN`],
          optionTitles: [`Auto (site locale)`, `English`, `中文`],
          defaultValue: `auto`,
        },
        reportEmail: {
          type: K.String,
          title: `Report email`,
          defaultValue: `productsupport@freezonex.io`,
        },
        pageSize: {
          type: K.Number,
          title: `Page size`,
          min: 5,
          max: 50,
          step: 1,
          displayStepper: !0,
          defaultValue: 10,
        },
        shareUrl: {
          type: K.String,
          title: `Share URL`,
          placeholder: `Defaults to current page`,
          defaultValue: ``,
        },
        scrollOffset: {
          type: K.Number,
          title: `Nav offset`,
          min: 0,
          max: 200,
          unit: `px`,
          defaultValue: 88,
        },
        gutter: {
          type: K.Number,
          title: `Side padding`,
          min: 0,
          max: 80,
          unit: `px`,
          defaultValue: 24,
        },
        maxWidth: {
          type: K.Number,
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
function le(e, t) {
  for (; t; ) {
    let n = Z[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function ue(e) {
  let t = [];
  for (; e; ) {
    let n = Z[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function de(e) {
  let t = ue(e);
  if (t) throw t;
}
var Z;
function fe() {
  return (fe = e(() => {
    (C(), (Z = { AYmst8Nt3: new M(() => import("./q61sgHWli-0.nYT7z2fP.mjs?v=20261116-migration-v2")) }));
  }))();
}
var pe, me, he, ge, _e, ve, ye, be, xe, Q, Se, Ce, we, $, Te;
function Ee() {
  return (Ee = e(() => {
    (l(),
      C(),
      _(),
      i(),
      I(),
      L(),
      ce(),
      fe(),
      B(),
      (pe = T(z)),
      (me = T(W)),
      (he = T(R)),
      (ge = {
        gcCF5B2I2: `(min-width: 1440px)`,
        X_ZisJ3OU: `(min-width: 810px) and (max-width: 1439.98px)`,
        xOPVmDxJy: `(max-width: 809.98px)`,
      }),
      (_e = () => typeof document < `u`),
      (ve = []),
      (ye = `framer-TN3Jv`),
      (be = {
        gcCF5B2I2: `framer-v-fi9y9f`,
        X_ZisJ3OU: `framer-v-x9a35i`,
        xOPVmDxJy: `framer-v-ugck9g`,
      }),
      (xe = (e, t, n) => (e && t ? `position` : n)),
      (Q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Se = { Desktop: `gcCF5B2I2`, Phone: `xOPVmDxJy`, Tablet: `X_ZisJ3OU` }),
      (Ce = ({ value: e }) =>
        w()
          ? null
          : /*#__PURE__*/ d(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (we = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Se[r.variant] ?? r.variant ?? `gcCF5B2I2`,
      })),
      ($ = S(
        /* @__PURE__ */ u(function (e, r) {
          let i = o(null),
            s = r ?? i;
          t();
          let { activeLocale: c, contentLocale: l, setLocale: u } = P(),
            p = D(),
            { style: m, className: _, layoutId: y, variant: b, ...S } = we(e),
            C = n(() => ne({}, l), [l]);
          v(C);
          let [w, T] = te(b, ge, !1),
            O = x(ye),
            k = a(A)?.isLayoutTemplate,
            M = !!a(h)?.transition?.layout,
            I = xe(k, M);
          de(c);
          let L = () => !_e() || w !== `X_ZisJ3OU`,
            B = () => !_e() || w === `X_ZisJ3OU`;
          return (
            F({}),
            /*#__PURE__*/ d(A.Provider, {
              value: {
                activeVariantId: w,
                humanReadableVariantMap: Se,
                primaryVariantId: `gcCF5B2I2`,
                variantClassNames: be,
              },
              children: /*#__PURE__*/ f(ee, {
                id: y ?? `q61sgHWli`,
                children: [
                  /*#__PURE__*/ d(Ce, {
                    value: `html body { background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)); }`,
                  }),
                  /*#__PURE__*/ f(g.div, {
                    ...S,
                    className: x(O, `framer-fi9y9f`, _),
                    ref: s,
                    style: { ...m },
                    children: [
                      /*#__PURE__*/ d(E, {
                        height: 64,
                        width: `100vw`,
                        y: 0,
                        children: /*#__PURE__*/ d(j, {
                          className: `framer-54onap-container`,
                          layout: I,
                          layoutScroll: !0,
                          nodeId: `So0hcy7fA`,
                          scopeId: `q61sgHWli`,
                          children: /*#__PURE__*/ d(N, {
                            breakpoint: w,
                            overrides: {
                              X_ZisJ3OU: { variant: Q(`Gw5VboM5c`) },
                              xOPVmDxJy: { variant: Q(`Svy4sINhA`) },
                            },
                            children: /*#__PURE__*/ d(z, {
                              eVOFjxm0w: `var(--token-fcaa307f-078f-4ea1-af34-d51bb82ca05a, rgba(255, 255, 255, 0))`,
                              height: `100%`,
                              id: `So0hcy7fA`,
                              jQcddTFoz: !0,
                              layoutId: `So0hcy7fA`,
                              style: { width: `100%` },
                              variant: Q(`LbFcBhD3w`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                      /*#__PURE__*/ d(g.div, {
                        className: `framer-krbexs`,
                        "data-framer-name": `01`,
                        layout: I,
                        children: /*#__PURE__*/ d(`div`, {
                          className: `framer-1uflsvu`,
                          children: /*#__PURE__*/ d(E, {
                            children: /*#__PURE__*/ d(j, {
                              className: `framer-ons817-container`,
                              isAuthoredByUser: !0,
                              nodeId: `Lot5_9zZV`,
                              scopeId: `q61sgHWli`,
                              children: /*#__PURE__*/ d(N, {
                                breakpoint: w,
                                overrides: {
                                  X_ZisJ3OU: { maxWidth: 730 },
                                  xOPVmDxJy: { maxWidth: 640 },
                                },
                                children: /*#__PURE__*/ d(W, {
                                  gutter: 24,
                                  height: `100%`,
                                  id: `Lot5_9zZV`,
                                  language: `auto`,
                                  layoutId: `Lot5_9zZV`,
                                  maxWidth: 1280,
                                  pageSize: 10,
                                  reportEmail: le(`v0`, l) ?? `productsupport@freezonex.io`,
                                  scrollOffset: 88,
                                  shareUrl: ``,
                                  style: { width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                      /*#__PURE__*/ f(g.div, {
                        className: `framer-84wsyi`,
                        "data-framer-name": `header`,
                        layout: I,
                        children: [
                          L() &&
                            /*#__PURE__*/ d(N, {
                              breakpoint: w,
                              overrides: {
                                xOPVmDxJy: { height: 498, width: void 0, y: (p?.y || 0) + 360 },
                              },
                              children: /*#__PURE__*/ d(E, {
                                height: 438,
                                width: p?.width || `100vw`,
                                y: (p?.y || 0) + 368,
                                children: /*#__PURE__*/ d(j, {
                                  className: `framer-17pbj3g-container hidden-x9a35i`,
                                  nodeId: `a7CO7J16t`,
                                  scopeId: `q61sgHWli`,
                                  children: /*#__PURE__*/ d(N, {
                                    breakpoint: w,
                                    overrides: { xOPVmDxJy: { variant: Q(`vXscR1iJC`) } },
                                    children: /*#__PURE__*/ d(R, {
                                      height: `100%`,
                                      id: `a7CO7J16t`,
                                      layoutId: `a7CO7J16t`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Q(`zev4Tv3qQ`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          B() &&
                            /*#__PURE__*/ d(N, {
                              breakpoint: w,
                              overrides: {
                                X_ZisJ3OU: {
                                  height: 498,
                                  width: `max(${p?.width || `100vw`}, 1px)`,
                                  y: (p?.y || 0) + 360,
                                },
                              },
                              children: /*#__PURE__*/ d(E, {
                                children: /*#__PURE__*/ d(j, {
                                  className: `framer-5x8ed3-container hidden-fi9y9f hidden-ugck9g`,
                                  nodeId: `qBPAi3mQ6`,
                                  scopeId: `q61sgHWli`,
                                  children: /*#__PURE__*/ d(R, {
                                    height: `100%`,
                                    id: `qBPAi3mQ6`,
                                    layoutId: `qBPAi3mQ6`,
                                    style: { width: `100%` },
                                    variant: Q(`G8rxyXoDj`),
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
          `.framer-TN3Jv.framer-1ihasgs, .framer-TN3Jv .framer-1ihasgs { display: block; }`,
          `.framer-TN3Jv.framer-fi9y9f { align-content: center; align-items: center; background-color: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1440px; }`,
          `.framer-TN3Jv .framer-54onap-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 4; }`,
          `.framer-TN3Jv .framer-krbexs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1280px; }`,
          `.framer-TN3Jv .framer-1uflsvu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 88px 0px 0px 0px; position: relative; width: 1280px; z-index: 1; }`,
          `.framer-TN3Jv .framer-ons817-container { flex: none; height: auto; position: relative; width: 1327px; }`,
          `.framer-TN3Jv .framer-84wsyi { align-content: center; align-items: center; background-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: 438px; justify-content: flex-start; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-TN3Jv .framer-17pbj3g-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
          `.framer-TN3Jv .framer-5x8ed3-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-TN3Jv.framer-fi9y9f { width: 810px; } .framer-TN3Jv .framer-krbexs { flex-direction: row; padding: 80px 0px 0px 0px; width: 810px; z-index: 1; } .framer-TN3Jv .framer-1uflsvu { padding: 0px 60px 0px 60px; width: 810px; } .framer-TN3Jv .framer-ons817-container { width: 730px; } .framer-TN3Jv .framer-84wsyi { flex-direction: row; height: min-content; } .framer-TN3Jv .framer-5x8ed3-container { flex: 1 0 0px; width: 1px; }}`,
          `@media (max-width: 809.98px) { .framer-TN3Jv.framer-fi9y9f, .framer-TN3Jv .framer-krbexs { width: 390px; } .framer-TN3Jv .framer-1uflsvu { gap: 32px; order: 0; padding: 80px 40px 0px 40px; width: 100%; } .framer-TN3Jv .framer-ons817-container { width: 310px; } .framer-TN3Jv .framer-84wsyi { gap: 0px; height: min-content; } .framer-TN3Jv .framer-17pbj3g-container { flex: none; height: auto; width: auto; }}`,
        ],
        `framer-TN3Jv`
      )),
      ($.displayName = `Policy`),
      ($.defaultProps = { height: 3839, width: 1440 }),
      O($, [{ explicitInter: !0, fonts: [] }, ...pe, ...me, ...he], {
        supportsExplicitInterCodegen: !0,
      }),
      ($.loader = { load: (e, t) => k([() => b(z, {}, t), () => b(R, {}, t)], t) }),
      (Te = {
        exports: {
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `Framerq61sgHWli`,
            slots: [],
            annotations: {
              framerLayoutTemplateFlowEffect: `true`,
              framerIntrinsicHeight: `3839`,
              framerAutoSizeImages: `true`,
              framerResponsiveScreen: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerColorSyntax: `true`,
              framerContractVersion: `1`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"X_ZisJ3OU":{"layout":["fixed","auto"]},"xOPVmDxJy":{"layout":["fixed","auto"]}}}`,
              framerComponentViewportWidth: `true`,
              framerIntrinsicWidth: `1440`,
              framerScrollSections: `false`,
              framerImmutableVariables: `true`,
              framerDisplayContentsDiv: `false`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
Ee();
export { Te as __FramerMetadata__, $ as default, ve as queryParamNames };
//# sourceMappingURL=H9i_bo9QQaigpOIZQtY2xEa7QHczE5NsjsWv7GBafvI.DV0-X780.mjs.map
