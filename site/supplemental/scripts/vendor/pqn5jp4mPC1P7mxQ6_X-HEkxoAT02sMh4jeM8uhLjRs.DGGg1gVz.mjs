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
  lt as j,
  m as M,
  o as N,
  v as P,
  w as F,
  wt as I,
  yt as ee,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { m as L, n as R, p as z, t as B } from "./shared-lib.CHy_rbfQ.mjs?v=20261116-migration-v2";
import { n as V, r as te } from "./noD8QKjzo.GrHGxUMQ.mjs?v=20261116-migration-v2";
async function ne(e, t = fetch) {
  let n = performance.now(),
    r = await t(le, {
      method: `GET`,
      mode: `cors`,
      credentials: `omit`,
      cache: `no-store`,
      redirect: `error`,
      referrerPolicy: `no-referrer`,
      signal: e,
    });
  if (r.type === `opaque` || r.type === `opaqueredirect` || r.status === 0)
    throw Error(`Response is not readable`);
  return (
    r.body && r.body.cancel().catch(() => {}),
    {
      id: `console-http`,
      label: [`首页访问`, `Homepage access`],
      state: r.status === 200 ? `passed` : `failed`,
      checkedAt: Date.now(),
      durationMs: Math.round(performance.now() - n),
      reason: r.status === 200 ? null : `unexpected_response`,
      httpStatus: r.status,
    }
  );
}
function H(e) {
  let t = Object.assign(
      { contactUrl: `https://tier0.app/talk-to-team`, enabled: !0, notices: q },
      e
    ),
    n = [`zh-CN`, `en`],
    r = [`passed`, `failed`, `checking`, `unknown`],
    i = {
      timeout: `reasonTimeout`,
      certificate: `reasonCertificate`,
      unexpected_response: `reasonUnexpected`,
      unreachable: `reasonUnreachable`,
    },
    a = { passed: `headPassed`, failed: `headFailed`, checking: `headChecking` },
    o = n.includes(t.locale) ? t.locale : `en`,
    s = { data: null, loading: !1, unavailable: !1, fetchedAt: 0 },
    c = /* @__PURE__ */ new Set(),
    l = null,
    u = 0,
    d = null,
    f = (e) => (Array.isArray(e) ? e[+(o === `en`)] : e),
    p = (e, n = {}) => String(t.messages[o][e] ?? e).replace(/\{(\w+)\}/g, (e, t) => n[t] ?? e),
    m = (e) =>
      String(e ?? ``).replace(
        /[&<>"']/g,
        (e) => ({ "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;`, "'": `&#39;` })[e]
      ),
    h = (e, t = ``) =>
      `<svg class="t0st-ico ${t}" viewBox="0 0 24 24" aria-hidden="true">${e}</svg>`,
    g = {
      check: `<path d="M20 6 9 17l-5-5"/>`,
      alert: `<path d="M12 8v5M12 16.5h.01"/><path d="M10.3 3.9 2.4 17.5A2 2 0 0 0 4.1 20.5h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/>`,
      clock: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>`,
      dash: `<path d="M6 12h12"/>`,
      refresh: `<path d="M20 11a8 8 0 0 0-14.6-4.5L4 8"/><path d="M4 4v4h4"/><path d="M4 13a8 8 0 0 0 14.6 4.5L20 16"/><path d="M20 20v-4h-4"/>`,
      chevron: `<path d="m6 9 6 6 6-6"/>`,
      info: `<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>`,
      mail: `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>`,
      server: `<rect x="3" y="4" width="18" height="7" rx="1"/><rect x="3" y="13" width="18" height="7" rx="1"/><path d="M7 7.5h.01M7 16.5h.01"/>`,
      right: `<path d="m9 18 6-6-6-6"/>`,
    },
    _ = { passed: g.check, failed: g.alert, checking: g.clock, unknown: g.dash },
    v = (e) => l.querySelector(e),
    y = String(t.contactUrl || ``).startsWith(`https://`) ? t.contactUrl : ``,
    b = (e, t) =>
      new Intl.DateTimeFormat(o === `en` ? `en-GB` : `zh-CN`, {
        timeZone: `Asia/Shanghai`,
        hour12: !1,
        ...t,
      }).format(e),
    x = (e) =>
      e
        ? `${b(e, { month: `2-digit`, day: `2-digit`, hour: `2-digit`, minute: `2-digit` })} ${p(`tz`)}`
        : `—`;
  function S(e) {
    let t = Math.floor((Date.now() - e) / 6e4);
    return t < 1
      ? p(`justNow`)
      : t < 60
        ? p(`minutesAgo`, { n: t })
        : p(`hoursAgo`, { n: Math.floor(t / 60) });
  }
  async function C() {
    if (s.loading || !l) return;
    if (!t.enabled) {
      ((s.unavailable = !0), R());
      return;
    }
    let e = l,
      n = new AbortController();
    d = n;
    let r = setTimeout(() => n.abort(), 12e3);
    (Object.assign(s, { loading: !0, unavailable: !1, data: null }), R());
    try {
      let t = await ne(n.signal);
      if (l !== e || n.signal.aborted) return;
      Object.assign(s, {
        data: { staleSeconds: 900, components: [{ id: `console`, checks: [t] }] },
        unavailable: !1,
        fetchedAt: t.checkedAt,
      });
    } catch {
      if (l !== e) return;
      Object.assign(s, { data: null, unavailable: !0, fetchedAt: Date.now() });
    } finally {
      (clearTimeout(r), (s.loading = !1), l === e && R());
    }
  }
  let w = () => (s.data?.staleSeconds || 900) * 1e3;
  function T(e) {
    return s.unavailable ||
      !s.data ||
      !e.checkedAt ||
      e.checkedAt > Date.now() + 6e4 ||
      Date.now() - e.checkedAt > w()
      ? `unknown`
      : r.includes(e.state)
        ? e.state
        : `unknown`;
  }
  function E(e) {
    let t = e.checks.length ? e.checks.map(T) : [`unknown`];
    return [`failed`, `checking`, `unknown`].find((e) => t.includes(e)) || `passed`;
  }
  let D = (e) => [`failed`, `checking`, `unknown`].find((t) => e.includes(t)) || `passed`,
    O = () =>
      t.catalog.map((e) => {
        let t = s.data?.components.find((t) => t.id === e.id);
        return {
          ...e,
          checks: e.checks.map(
            (n) =>
              t?.checks.find((e) => e.id === n) || {
                id: n,
                label: e.name,
                state: `unknown`,
                checkedAt: null,
                durationMs: null,
                reason: null,
              }
          ),
        };
      }),
    k = (e) => (e === `unknown` ? `default` : e),
    A = (e) =>
      `<span class="t0st-badge is-${k(e)}"><i aria-hidden="true"></i>${m(p(e === `unknown` ? `passed` : e))}</span>`;
  function j() {
    return `<header class="t0st-hero">
  <div class="t0st-wrap">
    <div class="t0st-hero-top">
      <div class="t0st-hero-copy"><h1 class="t0st-h1"><span class="t0st-h1-soft">${m(p(`heroSoft`))}</span> <span class="t0st-h1-strong">[${m(p(`heroStrong`))}]</span></h1><p class="t0st-lead">${m(p(`lead`))}</p></div>
      ${y ? `<a class="t0st-cta" href="${m(y)}" aria-label="${m(p(`reportLabel`, {}))}">${h(g.mail)}<span>${m(p(`reportCta`))}</span></a>` : ``}
    </div>
  </div>
</header>
<div class="t0st-wrap">
  <div class="t0st-toolbar">
    <div class="t0st-sync" data-role="sync">${M()}</div>
  </div>
  <div class="t0st-board" data-role="board">${N()}</div>
</div>`;
  }
  function M() {
    let e = s.loading
      ? p(`refreshing`)
      : s.fetchedAt
        ? p(`updatedAgo`, { time: S(s.fetchedAt) })
        : ``;
    return `<span class="t0st-sync-text" data-role="ago" aria-live="polite">${m(e)}</span><button type="button" class="t0st-refresh${s.loading ? ` is-spinning` : ``}" data-role="refresh" aria-label="${m(p(`refresh`))}" title="${m(p(`refresh`))}"${s.loading ? ` disabled` : ``}>${h(g.refresh)}</button>`;
  }
  function N() {
    let e = O();
    return P(e, D(e.map(E))) + F(e) + ee();
  }
  function P(e, t) {
    let n = p(t === `unknown` ? `headPassed` : a[t]),
      r = Math.max(s.fetchedAt, ...e.flatMap((e) => e.checks.map((e) => e.checkedAt || 0)));
    return `<section class="t0st-overview is-${k(t)}" aria-labelledby="t0st-overview-title">
      <div class="t0st-overview-main">
        <span class="t0st-overview-ico">${h(t === `unknown` ? g.check : _[t])}</span>
        <div><h2 id="t0st-overview-title">${m(n)}</h2></div>
      </div>
      <dl class="t0st-overview-meta">
        <div><dt>${m(p(`latestCheck`))}</dt><dd>${m(x(r))}</dd></div>
      </dl>
    </section>`;
  }
  function F(e) {
    return `<section class="t0st-card t0st-components" aria-labelledby="t0st-components-title">
      <div class="t0st-card-head"><h2 id="t0st-components-title">${m(p(`componentsTitle`))}</h2><span class="t0st-count">${m(p(`componentsCount`, { n: e.length }))}</span></div>
      <div class="t0st-rows">${e.map(I).join(``)}</div>
    </section>`;
  }
  function I(e) {
    let t = E(e),
      n = Math.max(0, ...e.checks.map((e) => e.checkedAt || 0)),
      r = e.checks
        .filter((e) => e.durationMs !== null && e.checkedAt && Date.now() - e.checkedAt < w())
        .map((e) => e.durationMs),
      a = e.checks.length
        ? e.checks
            .map((e) => {
              let t = T(e);
              return `<li><span class="t0st-check-name">${m(f(e.label))}</span>${A(t)}${e.reason && t !== `unknown` && t !== `passed` ? `<span class="t0st-reason">${m(p(i[e.reason] || `reasonUnreachable`))}</span>` : ``}</li>`;
            })
            .join(``)
        : `<li class="is-empty">${m(p(`waitingChecks`))}</li>`;
    return `<details class="t0st-row" data-id="${m(e.id)}"${c.has(e.id) ? ` open` : ``}>
      <summary aria-label="${m(p(`expand`, { name: f(e.name) }))}">
        <span class="t0st-row-name"><b>${m(f(e.name))}</b><small>${m(f(e.description))}</small></span>
        ${A(t)}
        ${h(g.chevron, `t0st-chev`)}
      </summary>
      <div class="t0st-row-body">
        <dl class="t0st-row-meta"><div><dt>${m(p(`lastChecked`))}</dt><dd>${m(x(n))}</dd></div><div><dt>${m(p(`responseTime`))}</dt><dd>${r.length ? `${Math.max(...r)} ms` : `—`}</dd></div></dl>
        <p class="t0st-row-label">${m(p(`checksLabel`))}</p>
        <ul class="t0st-checks">${a}</ul>
        <p class="t0st-limit">${m(p(`limitDefault`))}</p>
      </div>
    </details>`;
  }
  function ee() {
    let e = (t.notices || []).filter(
      (e) =>
        e &&
        e.published === !0 &&
        Number.isFinite(Date.parse(e.publishedAt)) &&
        Date.parse(e.publishedAt) <= Date.now() &&
        Array.isArray(e.title) &&
        Array.isArray(e.impact) &&
        Array.isArray(e.summary)
    );
    e.sort((e, t) => Date.parse(t.publishedAt) - Date.parse(e.publishedAt));
    let n = e.length
      ? `<ol class="t0st-event-list">` +
        e
          .map(
            (e) =>
              `<li class="t0st-event"><span class="t0st-event-dot" aria-hidden="true"></span><div class="t0st-event-body"><p class="t0st-event-top"><span class="t0st-badge">` +
              m(f(e.status || [`已发布`, `Published`])) +
              `</span><time datetime="` +
              m(e.publishedAt) +
              `">` +
              m(x(Date.parse(e.publishedAt))) +
              `</time></p><h3>` +
              m(f(e.title)) +
              `</h3><p>` +
              m(p(`noticeImpact`)) +
              ` · ` +
              m(f(e.impact)) +
              `</p><p>` +
              m(f(e.summary)) +
              `</p></div></li>`
          )
          .join(``) +
        `</ol>`
      : `<p class="t0st-empty-notices">` + m(p(`eventsEmpty`)) + `</p>`;
    return (
      `<section class="t0st-card t0st-events" aria-labelledby="t0st-events-title"><div class="t0st-card-head"><h2 id="t0st-events-title">` +
      m(p(`eventsTitle`)) +
      `</h2></div>` +
      n +
      `</section>`
    );
  }
  function L() {
    let e = l && v(`[data-role=sync]`);
    e && (e.innerHTML = M());
  }
  function R() {
    if (!l) return;
    let e =
      l.contains(document.activeElement) && document.activeElement?.closest?.(`[data-role=refresh]`)
        ? `[data-role=refresh]`
        : null;
    (L(),
      (v(`[data-role=board]`).innerHTML = N()),
      e && l.querySelector(e)?.focus({ preventScroll: !0 }));
  }
  let z = (e) => {
      let t = e.target.closest(`button`);
      if (t && l.contains(t) && t.dataset.role === `refresh`) return C();
    },
    B = (e) => {
      let t = e.target;
      t.classList?.contains(`t0st-row`) && (t.open ? c.add(t.dataset.id) : c.delete(t.dataset.id));
    },
    V = () => {
      !document.hidden && l && R();
    },
    te = () => {
      l && R();
    };
  function H() {
    return j();
  }
  function re(e) {
    return (
      (l = e),
      l.setAttribute(`lang`, o),
      (l.innerHTML = j()),
      l.addEventListener(`click`, z),
      l.addEventListener(`toggle`, B, !0),
      document.addEventListener(`visibilitychange`, V),
      C(),
      (u = setInterval(te, 3e4)),
      function () {
        (clearInterval(u),
          d?.abort(),
          l.removeEventListener(`click`, z),
          l.removeEventListener(`toggle`, B, !0),
          document.removeEventListener(`visibilitychange`, V),
          (l = null));
      }
    );
  }
  return { html: H, mount: re };
}
function re(e, t) {
  return H(t).mount(e);
}
function U(e) {
  let t = String(e || ``).toLowerCase();
  return t.startsWith(`zh`) ? `zh-CN` : t.startsWith(`en`) ? `en` : ``;
}
function ie() {
  let e = typeof I == `function` ? I() : null,
    t = e && e.activeLocale;
  return U(t && (t.code || t.slug));
}
function ae() {
  return s === void 0
    ? ``
    : U(new URL(s.location.href).searchParams.get(`lang`)) ||
        U(document.documentElement.lang) ||
        U(r.language);
}
function W(e) {
  let {
      language: t = `auto`,
      contactUrl: r = `https://tier0.app/talk-to-team`,
      gutter: i = 24,
      maxWidth: a = 1040,
      style: s,
    } = e,
    c = o(null),
    l = ie(),
    [u, h] = m(``);
  p(() => {
    let e = () => h(ae());
    e();
    let t = new MutationObserver(e);
    return (
      t.observe(document.documentElement, { attributes: !0, attributeFilter: [`lang`] }),
      () => t.disconnect()
    );
  }, []);
  let g = fe.includes(t) ? t : l || u || `en`,
    _ = K.current() === K.canvas,
    v = n(
      () => ({ catalog: se, notices: q, messages: ce, locale: g, contactUrl: r, enabled: !_ }),
      [g, r, _]
    ),
    y = n(() => H(v).html(), [v]);
  return (
    p(() => re(c.current, v), [v]),
    /*#__PURE__*/ f(`div`, {
      style: { width: `100%`, ...s },
      children: [
        /*#__PURE__*/ d(`link`, { rel: `stylesheet`, href: ue }),
        /*#__PURE__*/ d(`style`, { dangerouslySetInnerHTML: { __html: de } }),
        /*#__PURE__*/ d(`div`, {
          ref: c,
          className: `t0st`,
          lang: g,
          style: { "--t0-gutter": `${i}px`, "--t0-max": `${a}px` },
          dangerouslySetInnerHTML: { __html: y },
          suppressHydrationWarning: !0,
        }),
      ],
    })
  );
}
var oe, G, K, se, q, ce, le, ue, de, fe;
function pe() {
  return (pe = e(() => {
    (c(),
      l(),
      i(),
      w(),
      ({ addPropertyControls: oe, ControlType: G, RenderTarget: K } = b),
      (se = [
        {
          id: `console`,
          group: `cloud`,
          name: [`Tier0 Cloud`, `Tier0 Cloud`],
          description: [`tier0.dev`, `tier0.dev`],
          checks: [`console-http`],
        },
      ]),
      (q = []),
      (ce = {
        "zh-CN": {
          heroSoft: `Tier0`,
          heroStrong: `系统状态`,
          lead: `查看 Tier0 Cloud（tier0.dev）的访问状态及历史事件通知。`,
          reportCta: `报告问题`,
          reportLabel: `联系 Tier0 团队报告问题`,
          updatedAgo: `{time}更新`,
          justNow: `刚刚`,
          minutesAgo: `{n} 分钟前`,
          hoursAgo: `{n} 小时前`,
          refresh: `刷新状态`,
          refreshing: `正在更新…`,
          passed: `正常`,
          failed: `访问异常`,
          checking: `正在确认`,
          unknown: `状态未知`,
          partial: `覆盖不足`,
          noData: `无数据`,
          headPassed: `网站访问正常`,
          headFailed: `网站访问异常`,
          headChecking: `正在确认网站状态`,
          tz: `UTC+8`,
          latestCheck: `最近检查`,
          componentsTitle: `服务状态`,
          componentsCount: `{n} 项服务`,
          lastChecked: `最近检查`,
          responseTime: `最近响应时间`,
          checksLabel: `检测项`,
          waitingChecks: `等待检测结果`,
          reasonTimeout: `连接超时`,
          reasonCertificate: `安全证书或连接异常`,
          reasonUnexpected: `响应与预期不符`,
          reasonUnreachable: `暂时无法连接`,
          limitDefault: `检查首页是否能打开，不包含登录后的功能。`,
          eventsTitle: `历史事件通知`,
          eventsEmpty: `暂无已发布事件通知`,
          noticePublished: `已发布`,
          noticeImpact: `影响范围`,
          eventResolved: `已恢复`,
          eventOngoing: `持续检测异常`,
          eventUnknown: `后续数据缺失`,
          expand: `展开 {name} 的检测详情`,
        },
        en: {
          heroSoft: `Tier0`,
          heroStrong: `System status`,
          lead: `Website availability and incident notices for Tier0 Cloud (tier0.dev).`,
          reportCta: `Report an issue`,
          reportLabel: `Contact the Tier0 team to report an issue`,
          updatedAgo: `Updated {time}`,
          justNow: `just now`,
          minutesAgo: `{n} min ago`,
          hoursAgo: `{n} h ago`,
          refresh: `Refresh status`,
          refreshing: `Updating…`,
          passed: `Normal`,
          failed: `Access issue`,
          checking: `Checking`,
          unknown: `Status unknown`,
          partial: `Partial coverage`,
          noData: `No data`,
          headPassed: `Website is accessible`,
          headFailed: `Website access issue`,
          headChecking: `Confirming website status`,
          tz: `UTC+8`,
          latestCheck: `Latest check`,
          componentsTitle: `Service status`,
          componentsCount: `{n} service`,
          lastChecked: `Latest check`,
          responseTime: `Latest response time`,
          checksLabel: `Checks`,
          waitingChecks: `Waiting for check results`,
          reasonTimeout: `Connection timed out`,
          reasonCertificate: `Certificate or TLS connection issue`,
          reasonUnexpected: `Unexpected response`,
          reasonUnreachable: `Connection unavailable`,
          limitDefault: `Checks whether the homepage is accessible. Features that require sign-in are not checked.`,
          eventsTitle: `Incident history`,
          eventsEmpty: `No incident notices published`,
          noticePublished: `Published`,
          noticeImpact: `Affected services`,
          eventResolved: `Recovered`,
          eventOngoing: `Checks still failing`,
          eventUnknown: `Subsequent data missing`,
          expand: `Show check details for {name}`,
        },
      }),
      (le = `https://tier0.dev/`),
      (ue = `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap`),
      (de = `.t0st{--t0-bg:#fff;--t0-surface:#f9f9f9;--t0-subtle:#f3f3f3;--t0-border:#ebebeb;--t0-input:#e2e2e2;--t0-fg:#050b14;--t0-fg2:#343434;--t0-muted:#62666b;--t0-faint:#8a8d90;--t0-lime:#b2ed1d;--t0-lime-hover:#a2db1a;--t0-lime-50:#f7fde8;--t0-lime-100:#eefad0;--t0-lime-200:#dcf797;--t0-lime-700:#7ea815;--t0-lime-900:#48640c;--t0-lime-glow:rgba(178,237,29,.45);--st-ok:#4f7d0a;--st-ok-bar:#a6d156;--st-ok-bg:#f6fce8;--st-ok-line:#dcf2a6;--st-bad:#b0532f;--st-bad-bar:#de8a69;--st-bad-bg:#fdf3ef;--st-bad-line:#f2d6ca;--st-warn:#93670a;--st-warn-bar:#e2b04d;--st-warn-bg:#fff7e6;--st-warn-line:#f1dfb4;--st-none:#8a8d90;--st-none-bar:#e7e9e4;--st-none-bg:#f6f6f6;--st-none-line:#ebebeb;--st-partial:repeating-linear-gradient(135deg,#cfe3a6 0 3px,#f1f7e3 3px 6px);--t0-sans:'IBM Plex Sans','IBM Plex Sans SC','PingFang SC','Noto Sans SC','Hiragino Sans GB','Microsoft YaHei',system-ui,sans-serif;--t0-mono:'IBM Plex Mono',ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;--t0-ease:cubic-bezier(.2,.7,.2,1);--t0-gutter:24px;--t0-max:1040px;color:var(--t0-fg);font:400 14px/1.6 var(--t0-sans);-webkit-font-smoothing:antialiased;text-align:left;container:t0st/inline-size;overflow:clip;overflow-clip-margin:8px;}.t0st *,.t0st *::before,.t0st *::after{box-sizing:border-box}.t0st :where(h1,h2,h3,p,ol,ul,dl,dd){margin:0;padding:0}.t0st :where(ol,ul){list-style:none}.t0st :where(button){font:inherit;color:inherit;letter-spacing:inherit;margin:0;background:none;border:0;padding:0;cursor:pointer}.t0st :where(a){color:inherit;text-decoration:none}.t0st :where(a,button,summary):focus-visible{outline:2px solid var(--t0-fg);outline-offset:2px}.t0st [hidden]{display:none!important}.t0st .t0st-ico{width:16px;height:16px;flex:none;fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}.t0st ::selection{background:var(--t0-lime);color:var(--t0-fg)}.t0st-wrap{--t0-pad:var(--t0-gutter);max-width:calc(var(--t0-max) + var(--t0-pad)*2);margin:0 auto;padding:0 var(--t0-pad)}.t0st-hero{padding:56px 0 8px}.t0st-hero-top{display:flex;justify-content:space-between;align-items:flex-end;gap:32px}.t0st-hero-copy{min-width:0}.t0st h1.t0st-h1{font-size:clamp(32px,5.2cqi,56px);line-height:1.1;letter-spacing:-.025em;font-weight:400}.t0st:lang(zh) h1.t0st-h1{letter-spacing:-.01em;line-height:1.18}.t0st-h1-soft{color:#6b6e72}.t0st-h1-strong{font-weight:600}.t0st-lead{margin-top:14px!important;color:var(--t0-muted);font-size:16px;line-height:1.65}.t0st-cta{display:inline-flex;align-items:center;gap:8px;flex:none;height:40px;padding:0 16px;border-radius:4px;background:var(--t0-lime);font:500 13px/1 var(--t0-mono);letter-spacing:.02em;text-transform:uppercase;color:var(--t0-fg)!important;white-space:nowrap;transition:background .15s}.t0st-cta:hover{background:var(--t0-lime-hover)}.t0st-cta .t0st-ico{width:15px;height:15px}.t0st-toolbar{display:flex;justify-content:flex-end;align-items:center;gap:16px;padding:36px 0 16px}.t0st-seg{position:relative;display:inline-grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:2px;padding:3px;border-radius:4px;background:var(--t0-subtle)}.t0st-seg-thumb{position:absolute;top:3px;bottom:3px;left:0;border-radius:3px;background:var(--t0-bg);box-shadow:0 0 0 1px var(--t0-border);opacity:0;pointer-events:none}.t0st-seg.has-thumb .t0st-seg-thumb{opacity:1}.t0st-seg.is-settled .t0st-seg-thumb{transition:transform .34s var(--t0-ease),width .34s var(--t0-ease)}.t0st-seg button{position:relative;z-index:1;height:32px;padding:0 14px;border-radius:3px;font-size:13.5px;font-weight:500;color:var(--t0-muted);white-space:nowrap;transition:color .15s}.t0st-seg button:hover,.t0st-seg button[aria-pressed=true]{color:var(--t0-fg)}.t0st-seg:not(.has-thumb) button[aria-pressed=true]{background:var(--t0-bg);box-shadow:0 0 0 1px var(--t0-border)}.t0st .t0st-seg button:focus-visible{outline-offset:-2px}.t0st-sync{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--t0-faint);white-space:nowrap}.t0st-refresh{display:grid;place-items:center;width:32px;height:32px;border:1px solid var(--t0-input);border-radius:4px;color:var(--t0-muted);transition:border-color .15s,color .15s,background .15s}.t0st-refresh:hover:not(:disabled){border-color:#cdcdcd;color:var(--t0-fg)}.t0st-refresh:disabled{cursor:default}.t0st-refresh .t0st-ico{width:15px;height:15px}.t0st-refresh.is-spinning .t0st-ico{animation:t0st-spin .9s linear infinite}@keyframes t0st-spin{to{transform:rotate(360deg)}}.t0st-board{display:flex;flex-direction:column;gap:16px;padding-bottom:72px}.t0st-overview{--tone:var(--st-none);--tone-bg:var(--st-none-bg);--tone-line:var(--st-none-line);padding:22px 24px;border:1px solid var(--tone-line);border-radius:4px;background:var(--tone-bg);transition:background .4s,border-color .4s}.t0st-overview.is-passed{--tone:var(--st-ok);--tone-bg:var(--st-ok-bg);--tone-line:var(--st-ok-line)}.t0st-overview.is-failed{--tone:var(--st-bad);--tone-bg:var(--st-bad-bg);--tone-line:var(--st-bad-line)}.t0st-overview.is-checking{--tone:var(--st-warn);--tone-bg:var(--st-warn-bg);--tone-line:var(--st-warn-line)}.t0st-overview-main{display:flex;align-items:center;gap:16px}.t0st-overview-ico{display:grid;place-items:center;flex:none;width:44px;height:44px;border-radius:4px;background:var(--tone);color:#fff;transition:background .4s}.t0st-overview.is-passed .t0st-overview-ico{background:var(--t0-lime);color:var(--t0-fg)}.t0st-overview.is-unknown .t0st-overview-ico{background:var(--t0-bg);color:var(--t0-faint);box-shadow:inset 0 0 0 1px var(--t0-border)}.t0st-overview.is-loading .t0st-overview-ico .t0st-ico{animation:t0st-pulse 1.2s ease-in-out infinite}@keyframes t0st-pulse{50%{opacity:.35}}.t0st-overview-ico .t0st-ico{width:22px;height:22px;stroke-width:2}.t0st-overview h2{font-size:22px;line-height:1.3;font-weight:500;letter-spacing:-.015em}.t0st-overview-main p{margin-top:2px!important;font-size:13.5px;color:var(--t0-muted)}.t0st-overview-meta{display:flex;flex-wrap:wrap;gap:8px 32px;margin-top:18px!important;padding-top:14px;border-top:1px solid var(--tone-line)}.t0st-overview-meta div{display:flex;align-items:baseline;gap:8px}.t0st-overview-meta dt{font-size:12.5px;color:var(--t0-faint)}.t0st-overview-meta dd{font:500 12.5px/1.5 var(--t0-mono);color:var(--t0-fg2)}.t0st-feed-note{display:flex;align-items:flex-start;gap:8px;margin-top:12px!important;font-size:13px;line-height:1.6;color:var(--st-warn)}.t0st-feed-note .t0st-ico{width:15px;height:15px;margin-top:2px}.t0st-card{padding:22px 24px;border:1px solid var(--t0-border);border-radius:4px;background:var(--t0-bg)}.t0st-card-head{display:flex;align-items:center;justify-content:space-between;gap:12px}.t0st-card-head h2{display:flex;align-items:center;gap:6px;font-size:18px;font-weight:600;letter-spacing:-.015em}.t0st-count{font:500 12px/1 var(--t0-mono);color:var(--t0-faint)}.t0st-stats{display:flex;align-items:flex-end;justify-content:space-between;gap:16px 32px;flex-wrap:wrap;margin-top:18px}.t0st-kpis{display:flex;gap:40px}.t0st-kpis dt{display:flex;align-items:center;gap:4px;font-size:12.5px;color:var(--t0-faint)}.t0st-kpis dd{margin-top:2px;font:400 30px/1.1 var(--t0-mono);letter-spacing:-.02em;color:var(--t0-fg);font-variant-numeric:tabular-nums}.t0st-kpis dd small{margin-left:2px;font-size:15px;color:var(--t0-muted)}.t0st-legend{display:flex;flex-wrap:wrap;gap:6px 16px;font-size:12px;color:var(--t0-muted)}.t0st-legend li{display:flex;align-items:center;gap:6px}.t0st-legend i{width:10px;height:10px;border-radius:2px}.t0st .is-passed.t0st-bar,.t0st-legend .is-passed{background:var(--st-ok-bar)}.t0st .is-failed.t0st-bar,.t0st-legend .is-failed{background:var(--st-bad-bar)}.t0st .is-checking.t0st-bar{background:var(--st-warn-bar)}.t0st .is-partial.t0st-bar,.t0st-legend .is-partial{background:var(--st-partial)}.t0st .is-unknown.t0st-bar,.t0st-legend .is-unknown{background:var(--st-none-bar)}.t0st-bars-host{position:relative;margin-top:18px}.t0st-bars{display:grid;grid-template-columns:repeat(var(--n),minmax(0,1fr));gap:4px;height:44px}.t0st-bar{display:block;min-width:0;height:100%;border-radius:2px;transform-origin:bottom;transition:filter .15s,transform .15s var(--t0-ease)}button.t0st-bar:hover,button.t0st-bar.is-active{filter:brightness(.92);transform:scaleY(1.06)}.t0st button.t0st-bar:focus-visible{outline-offset:1px}.t0st.is-bars-in .t0st-bar{animation:t0st-grow .5s var(--t0-ease) both;animation-delay:calc(var(--i)*18ms)}@keyframes t0st-grow{from{transform:scaleY(.15);opacity:0}}.t0st-bar-tip{--arrow:50%;position:absolute;z-index:5;bottom:calc(100% + 10px);width:max-content;max-width:min(260px,100%);padding:10px 12px;border-radius:4px;background:var(--t0-fg);font-size:12.5px;line-height:1.6;color:#d8dadc;pointer-events:none;animation:t0st-tip-in .15s var(--t0-ease)}.t0st-bar-tip::after{content:'';position:absolute;left:var(--arrow);bottom:-4px;width:8px;height:8px;margin-left:-4px;background:var(--t0-fg);transform:rotate(45deg)}.t0st-bar-tip-top{display:flex;align-items:center;gap:10px;margin-bottom:4px!important}.t0st-bar-tip-top b{font:500 12px/1.4 var(--t0-mono);color:#fff}@keyframes t0st-tip-in{from{opacity:0;transform:translateY(4px)}}.t0st-scale{display:flex;justify-content:space-between;gap:12px;margin-top:10px;font:400 11.5px/1.4 var(--t0-mono);color:var(--t0-faint)}.t0st-caption{margin-top:14px!important;padding-top:12px;border-top:1px solid var(--t0-border);font-size:12.5px;color:var(--t0-faint)}.t0st-tip-wrap{position:relative;display:inline-flex}.t0st-tip-btn{display:grid;place-items:center;width:20px;height:20px;border-radius:3px;color:var(--t0-faint);transition:color .15s,background .15s}.t0st-tip-btn:hover,.t0st-tip-btn[aria-expanded=true]{color:var(--t0-fg);background:var(--t0-subtle)}.t0st-tip-btn .t0st-ico{width:14px;height:14px}.t0st-tip{position:absolute;z-index:6;left:-8px;top:calc(100% + 8px);width:max-content;max-width:min(300px,calc(100cqi - 48px));padding:10px 12px;border-radius:4px;background:var(--t0-fg);font-size:12.5px;line-height:1.6;font-weight:400;letter-spacing:0;color:#d8dadc;opacity:0;visibility:hidden;transform:translateY(-4px);transition:opacity .15s,transform .18s var(--t0-ease),visibility 0s .18s;pointer-events:none}.t0st-tip-wrap:hover .t0st-tip,.t0st-tip-btn:focus-visible+.t0st-tip,.t0st-tip-btn[aria-expanded=true]+.t0st-tip{opacity:1;visibility:visible;transform:none;transition:opacity .15s,transform .18s var(--t0-ease),visibility 0s}.t0st-badge{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 9px;border-radius:3px;font-size:12px;font-weight:500;white-space:nowrap;background:var(--st-none-bg);color:var(--st-none)}.t0st-badge i{width:6px;height:6px;border-radius:50%;background:currentColor}.t0st-badge.is-passed{background:var(--st-ok-bg);color:var(--st-ok)}.t0st-badge.is-failed{background:var(--st-bad-bg);color:var(--st-bad)}.t0st-badge.is-checking{background:var(--st-warn-bg);color:var(--st-warn)}.t0st-badge.is-partial{background:var(--t0-lime-50);color:var(--t0-lime-900)}.t0st-bar-tip .t0st-badge{height:20px;padding:0 7px;font-size:11.5px}.t0st-components{padding-bottom:8px}.t0st-rows{margin:14px -24px 0;border-top:1px solid var(--t0-border)}.t0st-row+.t0st-row{border-top:1px solid var(--t0-border)}.t0st-row>summary{display:grid;grid-template-columns:minmax(0,1fr) minmax(120px,240px) 150px 28px;align-items:center;gap:20px;padding:14px 24px;list-style:none;cursor:pointer;transition:background .15s}.t0st-row>summary::-webkit-details-marker{display:none}.t0st-row>summary:hover{background:#fbfbfb}.t0st-row[open]>summary{background:var(--t0-surface)}.t0st .t0st-row>summary:focus-visible{outline-offset:-2px}.t0st-row-name{display:flex;flex-direction:column;min-width:0}.t0st-row-name b{font-size:15px;font-weight:500}.t0st-row-name small{font-size:12.5px;color:var(--t0-faint)}.t0st-mini{display:grid;grid-template-columns:repeat(var(--n),minmax(0,1fr));gap:2px;height:22px}.t0st-mini .t0st-bar{border-radius:1.5px}.t0st-row>summary>.t0st-badge{justify-self:end}.t0st .t0st-chev{width:28px;height:28px;padding:6px;border-radius:4px;color:var(--t0-faint);transition:transform .2s var(--t0-ease),color .15s,background .15s}.t0st-row>summary:hover .t0st-chev{color:var(--t0-fg);background:var(--t0-subtle)}.t0st-row[open] .t0st-chev{transform:rotate(180deg);color:var(--t0-fg)}.t0st-row::details-content{block-size:0;overflow:clip;transition:block-size .25s var(--t0-ease),content-visibility .25s allow-discrete}.t0st-row[open]::details-content{block-size:auto}.t0st{interpolate-size:allow-keywords}.t0st-row-body{padding:4px 24px 20px;background:var(--t0-surface)}.t0st-row-meta{display:flex;flex-wrap:wrap;gap:8px 40px}.t0st-row-meta dt{font-size:12px;color:var(--t0-faint)}.t0st-row-meta dd{font:500 12.5px/1.6 var(--t0-mono);color:var(--t0-fg2)}.t0st-row-label{margin-top:14px!important;font-size:12px;color:var(--t0-faint)}.t0st-checks{display:grid;gap:6px;margin-top:6px!important}.t0st-checks li{display:flex;align-items:center;flex-wrap:wrap;gap:6px 12px;padding:8px 12px;border:1px solid var(--t0-border);border-radius:4px;background:var(--t0-bg);font-size:13.5px}.t0st-checks li.is-empty{color:var(--t0-faint)}.t0st-check-name{flex:1;min-width:140px;color:var(--t0-fg2)}.t0st-reason{flex-basis:100%;font-size:12.5px;color:var(--st-bad)}.t0st-limit{margin-top:12px!important;font-size:12.5px;line-height:1.6;color:var(--t0-faint)}.t0st-event-list{position:relative;margin-top:16px!important}.t0st-event{position:relative;display:grid;grid-template-columns:20px minmax(0,1fr);gap:12px;padding-bottom:16px}.t0st-event:not(:last-child)::before{content:'';position:absolute;left:9.5px;top:18px;bottom:0;width:1px;background:var(--t0-border)}.t0st-event-dot{width:11px;height:11px;margin:6px 0 0 4px;border-radius:50%;border:2px solid var(--st-none);background:var(--t0-bg)}.t0st-event.is-passed .t0st-event-dot{border-color:var(--st-ok-bar);background:var(--st-ok-bg)}.t0st-event.is-failed .t0st-event-dot{border-color:var(--st-bad);background:var(--st-bad)}.t0st-event-top{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.t0st-event-top time{font:400 12px/1.4 var(--t0-mono);color:var(--t0-faint)}.t0st-event h3{margin-top:6px;font-size:15px;font-weight:500}.t0st-event-body>p:last-child{margin-top:2px!important;font-size:13px;color:var(--t0-muted)}.t0st-self{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:20px;padding:24px;border:1px solid var(--t0-lime-200);border-radius:4px;background:var(--t0-lime-50)}.t0st-self-ico{display:grid;place-items:center;width:44px;height:44px;border-radius:4px;background:var(--t0-lime);color:var(--t0-fg)}.t0st-self-ico .t0st-ico{width:21px;height:21px}.t0st-self h2{font-size:18px;font-weight:600;letter-spacing:-.01em}.t0st-self p{margin-top:4px!important;font-size:14px;line-height:1.65;color:var(--t0-muted)}.t0st-self-cta{display:inline-flex;align-items:center;gap:10px;height:40px;padding:0 14px;border-radius:4px;background:var(--t0-fg);font-size:13.5px;font-weight:500;color:#fff!important;white-space:nowrap;transition:background .15s}.t0st-self-cta:hover{background:#1c1f1e}.t0st-self-cta .t0st-ico{width:15px;height:15px}.t0st-self-cta .t0st-self-arrow{color:var(--t0-lime);transition:transform .2s var(--t0-ease)}.t0st-self-cta:hover .t0st-self-arrow{transform:translateX(3px)}.t0st-footnote{display:flex;align-items:flex-start;gap:6px;font-size:12.5px;line-height:1.6;color:var(--t0-faint)}.t0st-footnote .t0st-ico{width:14px;height:14px;margin-top:3px}@container t0st (max-width:820px){.t0st-hero{padding:40px 0 4px}.t0st-hero-top{flex-direction:column;align-items:flex-start;gap:20px}.t0st-row>summary{grid-template-columns:minmax(0,1fr) auto 28px;grid-template-areas:"name badge chev" "mini mini mini";row-gap:10px}.t0st-row-name{grid-area:name}.t0st-mini{grid-area:mini}.t0st-row>summary>.t0st-badge{grid-area:badge}.t0st .t0st-chev{grid-area:chev}.t0st-self{grid-template-columns:auto minmax(0,1fr)}.t0st-self-cta{grid-column:1/-1;justify-self:start}}@container t0st (max-width:560px){.t0st-wrap{--t0-pad:min(var(--t0-gutter),16px)}.t0st-hero{padding:32px 0 0}.t0st-lead{font-size:15px}.t0st-cta{width:100%;justify-content:center;height:44px}.t0st-toolbar{flex-direction:column;align-items:stretch;gap:10px;padding-top:28px}.t0st-seg{display:grid;width:100%}.t0st-seg button{padding:0 6px}.t0st-sync{justify-content:flex-end}.t0st-overview{padding:18px 16px}.t0st-overview h2{font-size:18px}.t0st-overview-ico{width:38px;height:38px}.t0st-overview-meta{flex-direction:column;gap:4px}.t0st-overview-meta div{justify-content:space-between}.t0st-card{position:relative;padding:18px 16px}.t0st-tip-wrap{position:static}.t0st-tip{left:16px;right:16px;top:auto;width:auto;max-width:none;margin-top:28px}.t0st-card-head{flex-wrap:wrap}.t0st-kpis{gap:28px}.t0st-kpis dd{font-size:26px}.t0st-bars{gap:2px;height:38px}.t0st-rows{margin:14px -16px 0}.t0st-row>summary{padding:14px 16px;gap:10px}.t0st-row-body{padding:4px 16px 18px}.t0st-self{grid-template-columns:minmax(0,1fr);padding:20px 16px}.t0st-self-cta{width:100%;justify-content:center}}@media (prefers-reduced-motion:reduce){.t0st *,.t0st *::before,.t0st *::after{transition:none!important;animation:none!important}}.t0st-row>summary{grid-template-columns:minmax(0,1fr) auto 28px}.t0st-empty-notices{padding:32px 0 14px!important;color:var(--t0-faint);font-size:14px}.t0st .t0st-card-head h2{font-weight:500}@container t0st (max-width:820px){.t0st-row>summary{grid-template-areas:"name badge chev"}}.t0st-overview.is-default{--tone:var(--st-ok);--tone-bg:var(--st-ok-bg);--tone-line:var(--st-ok-line)}.t0st-overview.is-default .t0st-overview-ico{background:var(--t0-lime);color:var(--t0-fg)}.t0st-badge.is-default{background:var(--st-ok-bg);color:var(--st-ok)}`),
      (fe = [`zh-CN`, `en`]),
      oe(W, {
        language: {
          type: G.Enum,
          title: `Language`,
          options: [`auto`, `en`, `zh-CN`],
          optionTitles: [`Auto (site locale)`, `English`, `中文`],
          defaultValue: `auto`,
        },
        contactUrl: {
          type: G.String,
          title: `Contact URL`,
          defaultValue: `https://tier0.app/talk-to-team`,
        },
        gutter: {
          type: G.Number,
          title: `Side padding`,
          min: 0,
          max: 80,
          unit: `px`,
          defaultValue: 24,
        },
        maxWidth: {
          type: G.Number,
          title: `Max width`,
          min: 640,
          max: 1600,
          step: 10,
          unit: `px`,
          defaultValue: 1040,
        },
      }));
  }))();
}
function me(e, t) {
  for (; t; ) {
    let n = J[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function he(e) {
  let t = [];
  for (; e; ) {
    let n = J[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function ge(e) {
  let t = he(e);
  if (t) throw t;
}
var J;
function _e() {
  return (_e = e(() => {
    (w(), (J = { AYmst8Nt3: new P(() => import("./noD8QKjzo-0.wVkONuzY.mjs?v=20261116-migration-v2")) }));
  }))();
}
var ve, ye, be, xe, Y, Se, Ce, we, X, Z, Q, Te, Ee, $, De;
function Oe() {
  return (Oe = e(() => {
    (l(),
      w(),
      _(),
      i(),
      L(),
      R(),
      pe(),
      _e(),
      V(),
      (ve = E(B)),
      (ye = E(W)),
      (be = E(z)),
      (xe = {
        drclv828n: `(min-width: 1440px)`,
        lG5y8XJjd: `(min-width: 810px) and (max-width: 1439.98px)`,
        XcriPDgke: `(max-width: 809.98px)`,
      }),
      (Y = () => typeof document < `u`),
      (Se = []),
      (Ce = `framer-EcT0r`),
      (we = {
        drclv828n: `framer-v-1fdsc8k`,
        lG5y8XJjd: `framer-v-1gh6iuu`,
        XcriPDgke: `framer-v-1te7pbj`,
      }),
      (X = (e, t, n) => (e && t ? `position` : n)),
      (Z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Q = { Desktop: `drclv828n`, Phone: `XcriPDgke`, Tablet: `lG5y8XJjd` }),
      (Te = ({ value: e }) =>
        T()
          ? null
          : /*#__PURE__*/ d(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Ee = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Q[r.variant] ?? r.variant ?? `drclv828n`,
      })),
      ($ = C(
        /* @__PURE__ */ u(function (e, r) {
          let i = o(null),
            s = r ?? i;
          t();
          let { activeLocale: c, contentLocale: l, setLocale: u } = I(),
            p = k(),
            { style: m, className: _, layoutId: b, variant: x, ...C } = Ee(e),
            w = n(() => te({}, l), [l]);
          y(w);
          let [T, E] = O(x, xe, !1),
            A = S(Ce),
            j = a(M)?.isLayoutTemplate,
            P = !!a(h)?.transition?.layout,
            L = X(j, P);
          ge(c);
          let R = () => !Y() || T !== `lG5y8XJjd`,
            V = () => !Y() || T === `lG5y8XJjd`;
          return (
            ee({}),
            /*#__PURE__*/ d(M.Provider, {
              value: {
                activeVariantId: T,
                humanReadableVariantMap: Q,
                primaryVariantId: `drclv828n`,
                variantClassNames: we,
              },
              children: /*#__PURE__*/ f(v, {
                id: b ?? `noD8QKjzo`,
                children: [
                  /*#__PURE__*/ d(Te, {
                    value: `html body { background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)); }`,
                  }),
                  /*#__PURE__*/ f(g.div, {
                    ...C,
                    className: S(A, `framer-1fdsc8k`, _),
                    ref: s,
                    style: { ...m },
                    children: [
                      /*#__PURE__*/ d(D, {
                        height: 64,
                        width: `100vw`,
                        y: 0,
                        children: /*#__PURE__*/ d(N, {
                          className: `framer-zbu2-container`,
                          layout: L,
                          layoutScroll: !0,
                          nodeId: `uKH86Ydz6`,
                          scopeId: `noD8QKjzo`,
                          children: /*#__PURE__*/ d(F, {
                            breakpoint: T,
                            overrides: {
                              lG5y8XJjd: { variant: Z(`Gw5VboM5c`) },
                              XcriPDgke: { variant: Z(`Svy4sINhA`) },
                            },
                            children: /*#__PURE__*/ d(B, {
                              eVOFjxm0w: `var(--token-fcaa307f-078f-4ea1-af34-d51bb82ca05a, rgba(255, 255, 255, 0))`,
                              height: `100%`,
                              id: `uKH86Ydz6`,
                              jQcddTFoz: !0,
                              layoutId: `uKH86Ydz6`,
                              style: { width: `100%` },
                              variant: Z(`LbFcBhD3w`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                      /*#__PURE__*/ d(g.div, {
                        className: `framer-12itfop`,
                        "data-framer-name": `01`,
                        layout: L,
                        children: /*#__PURE__*/ d(`div`, {
                          className: `framer-1jj2eue`,
                          children: /*#__PURE__*/ d(D, {
                            children: /*#__PURE__*/ d(N, {
                              className: `framer-14zwyby-container`,
                              isAuthoredByUser: !0,
                              nodeId: `SAYB8fBcy`,
                              scopeId: `noD8QKjzo`,
                              children: /*#__PURE__*/ d(W, {
                                contactUrl: me(`v0`, l) ?? `https://tier0.app/talk-to-team`,
                                gutter: 24,
                                height: `100%`,
                                id: `SAYB8fBcy`,
                                language: `auto`,
                                layoutId: `SAYB8fBcy`,
                                maxWidth: 1040,
                                style: { width: `100%` },
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                      /*#__PURE__*/ f(g.div, {
                        className: `framer-7sy2rj`,
                        "data-framer-name": `header`,
                        layout: L,
                        children: [
                          R() &&
                            /*#__PURE__*/ d(F, {
                              breakpoint: T,
                              overrides: {
                                XcriPDgke: { height: 498, width: void 0, y: (p?.y || 0) + 360 },
                              },
                              children: /*#__PURE__*/ d(D, {
                                height: 438,
                                width: p?.width || `100vw`,
                                y: (p?.y || 0) + 368,
                                children: /*#__PURE__*/ d(N, {
                                  className: `framer-1jmocle-container hidden-1gh6iuu`,
                                  nodeId: `WARSK4ZDU`,
                                  scopeId: `noD8QKjzo`,
                                  children: /*#__PURE__*/ d(F, {
                                    breakpoint: T,
                                    overrides: { XcriPDgke: { variant: Z(`vXscR1iJC`) } },
                                    children: /*#__PURE__*/ d(z, {
                                      height: `100%`,
                                      id: `WARSK4ZDU`,
                                      layoutId: `WARSK4ZDU`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Z(`zev4Tv3qQ`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          V() &&
                            /*#__PURE__*/ d(F, {
                              breakpoint: T,
                              overrides: {
                                lG5y8XJjd: {
                                  height: 498,
                                  width: `max(${p?.width || `100vw`}, 1px)`,
                                  y: (p?.y || 0) + 360,
                                },
                              },
                              children: /*#__PURE__*/ d(D, {
                                children: /*#__PURE__*/ d(N, {
                                  className: `framer-19xb2rl-container hidden-1fdsc8k hidden-1te7pbj`,
                                  nodeId: `A0YKnv_SB`,
                                  scopeId: `noD8QKjzo`,
                                  children: /*#__PURE__*/ d(z, {
                                    height: `100%`,
                                    id: `A0YKnv_SB`,
                                    layoutId: `A0YKnv_SB`,
                                    style: { width: `100%` },
                                    variant: Z(`G8rxyXoDj`),
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
          `.framer-EcT0r.framer-bjazxd, .framer-EcT0r .framer-bjazxd { display: block; }`,
          `.framer-EcT0r.framer-1fdsc8k { align-content: center; align-items: center; background-color: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1440px; }`,
          `.framer-EcT0r .framer-zbu2-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 4; }`,
          `.framer-EcT0r .framer-12itfop { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1280px; }`,
          `.framer-EcT0r .framer-1jj2eue { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 88px 0px 0px 0px; position: relative; width: 1280px; z-index: 1; }`,
          `.framer-EcT0r .framer-14zwyby-container { flex: none; height: auto; position: relative; width: 1327px; }`,
          `.framer-EcT0r .framer-7sy2rj { align-content: center; align-items: center; background-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: 438px; justify-content: flex-start; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-EcT0r .framer-1jmocle-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
          `.framer-EcT0r .framer-19xb2rl-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-EcT0r.framer-1fdsc8k { width: 810px; } .framer-EcT0r .framer-12itfop { flex-direction: row; padding: 80px 0px 0px 0px; width: 810px; z-index: 1; } .framer-EcT0r .framer-1jj2eue { padding: 0px 60px 0px 60px; width: 810px; } .framer-EcT0r .framer-14zwyby-container { width: 730px; } .framer-EcT0r .framer-7sy2rj { flex-direction: row; height: min-content; } .framer-EcT0r .framer-19xb2rl-container { flex: 1 0 0px; width: 1px; }}`,
          `@media (max-width: 809.98px) { .framer-EcT0r.framer-1fdsc8k, .framer-EcT0r .framer-12itfop { width: 390px; } .framer-EcT0r .framer-1jj2eue { gap: 32px; order: 0; padding: 80px 40px 0px 40px; width: 100%; } .framer-EcT0r .framer-14zwyby-container { width: 310px; } .framer-EcT0r .framer-7sy2rj { gap: 0px; height: min-content; } .framer-EcT0r .framer-1jmocle-container { flex: none; height: auto; width: auto; }}`,
        ],
        `framer-EcT0r`
      )),
      ($.displayName = `Changelog`),
      ($.defaultProps = { height: 1471, width: 1440 }),
      A($, [{ explicitInter: !0, fonts: [] }, ...ve, ...ye, ...be], {
        supportsExplicitInterCodegen: !0,
      }),
      ($.loader = { load: (e, t) => j([() => x(B, {}, t), () => x(z, {}, t)], t) }),
      (De = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramernoD8QKjzo`,
            slots: [],
            annotations: {
              framerLayoutTemplateFlowEffect: `true`,
              framerResponsiveScreen: `true`,
              framerColorSyntax: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"lG5y8XJjd":{"layout":["fixed","auto"]},"XcriPDgke":{"layout":["fixed","auto"]}}}`,
              framerImmutableVariables: `true`,
              framerDisplayContentsDiv: `false`,
              framerIntrinsicWidth: `1440`,
              framerIntrinsicHeight: `1471`,
              framerAutoSizeImages: `true`,
              framerScrollSections: `false`,
              framerComponentViewportWidth: `true`,
              framerContractVersion: `1`,
              framerAcceptsLayoutTemplate: `true`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
Oe();
export { De as __FramerMetadata__, $ as default, Se as queryParamNames };
//# sourceMappingURL=pqn5jp4mPC1P7mxQ6_X-HEkxoAT02sMh4jeM8uhLjRs.DGGg1gVz.mjs.map
