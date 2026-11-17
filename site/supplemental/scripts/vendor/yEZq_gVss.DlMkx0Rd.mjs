import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  A as t,
  C as n,
  D as r,
  F as i,
  H as a,
  M as o,
  O as s,
  P as c,
  R as l,
  S as u,
  T as d,
  U as f,
  V as p,
  a as m,
  b as h,
  c as g,
  m as _,
  o as v,
  s as y,
  u as b,
  x,
  y as S,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { No as C, S as w, Yi as T, n as E, on as D, t as O, v as ee } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import {
  D as k,
  M as A,
  Nt as j,
  O as te,
  P as ne,
  Pt as re,
  Q as M,
  U as N,
  Ut as ie,
  X as ae,
  a as oe,
  ct as P,
  gt as F,
  j as I,
  jt as se,
  k as L,
  s as R,
  v as ce,
  wt as le,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
function ue(e) {
  return /*#__PURE__*/ y(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 256 256`,
    width: e.width,
    height: e.height,
    style: { ...e.style, color: e.color },
    children: /*#__PURE__*/ y(`path`, {
      d: `M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z`,
      fill: `currentColor`,
    }),
  });
}
function de(e) {
  return /*#__PURE__*/ b(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 256 256`,
    ...e,
    children: [
      /*#__PURE__*/ y(`rect`, { width: `256`, height: `256`, fill: `none` }),
      /*#__PURE__*/ y(`path`, {
        d: `M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function fe(e) {
  return /*#__PURE__*/ b(`div`, {
    style: { position: `relative`, ...e.style },
    children: [
      /*#__PURE__*/ y(T.div, {
        animate: { rotate: 360 },
        transition: { ease: `linear`, duration: 1, repeat: 1 / 0 },
        style: {
          borderRadius: 100,
          backgroundImage: `conic-gradient(from 270deg, transparent 0%, ${e.color} 100%)`,
          width: `100%`,
          height: `100%`,
        },
      }),
      /*#__PURE__*/ y(`div`, {
        style: {
          backgroundColor: e.backgroundColor,
          borderRadius: 100,
          position: `absolute`,
          top: 3,
          left: 3,
          bottom: 3,
          right: 3,
        },
      }),
    ],
  });
}
function pe() {
  return (pe = e(() => {
    (g(), O());
  }))();
}
function z(e) {
  this.ready = new Promise((e, t) => {
    var n = f.indexedDB.open(location.origin);
    ((n.onupgradeneeded = (e) => {
      ((this.db = e.target.result), this.db.createObjectStore(`store`));
    }),
      (n.onsuccess = (t) => {
        ((this.db = t.target.result), e());
      }),
      (n.onerror = (e) => {
        ((this.db = e.target.result), t(e));
      }));
  });
}
function me() {
  return (me = e(() => {
    (p(),
      (z.prototype.get = function (e) {
        return this.ready.then(
          () =>
            new Promise((t, n) => {
              var r = this.getStore().get(e);
              ((r.onsuccess = (e) => t(e.target.result)), (r.onerror = n));
            })
        );
      }),
      (z.prototype.getStore = function () {
        return this.db.transaction([`store`], `readwrite`).objectStore(`store`);
      }),
      (z.prototype.set = function (e, t) {
        return this.ready.then(
          () =>
            new Promise((n, r) => {
              var i = this.getStore().put(t, e);
              ((i.onsuccess = n), (i.onerror = r));
            })
        );
      }),
      (z.prototype.delete = function (e, t) {
        f.indexedDB.deleteDatabase(location.origin);
      }));
  }))();
}
async function he(e, t, n = new z(`cache`)) {
  let r = e;
  await n.set(r, t);
}
async function ge(e, t = new z(`cache`)) {
  let n = e;
  return (await t.get(n)) || null;
}
function _e() {
  return (_e = e(() => {
    me();
  }))();
}
function ve() {
  return (ve = e(() => {
    _e();
  }))();
}
function ye(e) {
  return !e || e === "default";
}
function be(e) {
  return ye(e) ? Te : `${Te}-${e}`;
}
function xe(e) {
  return ye(e) ? Ee : `${Ee}-${e}`;
}
async function Se(e) {
  let t = await ge(be(e));
  if (t) return t;
}
function Ce(e, t) {
  he(be(e), t);
  let n = { version: we, timestamp: Date.now() };
  he(xe(e), n);
}
var we, Te, Ee;
function De() {
  return (De = e(() => {
    (ve(), (we = 1), (Te = `searchIndexCache`), (Ee = `searchCacheMetadata`));
  }))();
}
var Oe;
function ke() {
  return (ke = e(() => {
    Oe = {
      "/": {
        version: 1,
        title: `Example Search Result`,
        description: `Description of search result.`,
        keywords: ``,
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        p: [],
        url: `/example-url/`,
        codeblock: [],
      },
      "/example-1": {
        version: 1,
        title: `Publish your Site to Search`,
        description: `Try Site Search to instantly search your Framer site content.`,
        keywords: ``,
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        p: [],
        url: `/example-url/1/`,
        codeblock: [],
      },
      "/example-2": {
        version: 1,
        title: `Customise your Site Search`,
        description: `Personalize everything from corner radius, to icon weight.`,
        keywords: ``,
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        p: [],
        url: `/example-url/2/`,
        codeblock: [],
      },
    };
  }))();
}
var B, Ae, je, V;
function Me() {
  return (Me = e(() => {
    ((B = /* @__PURE__ */ new Uint32Array(65536)),
      (Ae = (e, t) => {
        let n = e.length,
          r = t.length,
          i = 1 << (n - 1),
          a = -1,
          o = 0,
          s = n,
          c = n;
        for (; c--; ) B[e.charCodeAt(c)] |= 1 << c;
        for (c = 0; c < r; c++) {
          let e = B[t.charCodeAt(c)],
            n = e | o;
          ((e |= ((e & a) + a) ^ a),
            (o |= ~(e | a)),
            (a &= e),
            o & i && s++,
            a & i && s--,
            (o = (o << 1) | 1),
            (a = (a << 1) | ~(n | o)),
            (o &= n));
        }
        for (c = n; c--; ) B[e.charCodeAt(c)] = 0;
        return s;
      }),
      (je = (e, t) => {
        let n = t.length,
          r = e.length,
          i = [],
          a = [],
          o = Math.ceil(n / 32),
          s = Math.ceil(r / 32);
        for (let e = 0; e < o; e++) ((a[e] = -1), (i[e] = 0));
        let c = 0;
        for (; c < s - 1; c++) {
          let o = 0,
            s = -1,
            l = c * 32,
            u = Math.min(32, r) + l;
          for (let t = l; t < u; t++) B[e.charCodeAt(t)] |= 1 << t;
          for (let e = 0; e < n; e++) {
            let n = B[t.charCodeAt(e)],
              r = (a[(e / 32) | 0] >>> e) & 1,
              c = (i[(e / 32) | 0] >>> e) & 1,
              l = n | o,
              u = ((((n | c) & s) + s) ^ s) | n | c,
              d = o | ~(u | s),
              f = s & u;
            ((d >>> 31) ^ r && (a[(e / 32) | 0] ^= 1 << e),
              (f >>> 31) ^ c && (i[(e / 32) | 0] ^= 1 << e),
              (d = (d << 1) | r),
              (f = (f << 1) | c),
              (s = f | ~(l | d)),
              (o = d & l));
          }
          for (let t = l; t < u; t++) B[e.charCodeAt(t)] = 0;
        }
        let l = 0,
          u = -1,
          d = c * 32,
          f = Math.min(32, r - d) + d;
        for (let t = d; t < f; t++) B[e.charCodeAt(t)] |= 1 << t;
        let p = r;
        for (let e = 0; e < n; e++) {
          let n = B[t.charCodeAt(e)],
            o = (a[(e / 32) | 0] >>> e) & 1,
            s = (i[(e / 32) | 0] >>> e) & 1,
            c = n | l,
            d = ((((n | s) & u) + u) ^ u) | n | s,
            f = l | ~(d | u),
            m = u & d;
          ((p += (f >>> (r - 1)) & 1),
            (p -= (m >>> (r - 1)) & 1),
            (f >>> 31) ^ o && (a[(e / 32) | 0] ^= 1 << e),
            (m >>> 31) ^ s && (i[(e / 32) | 0] ^= 1 << e),
            (f = (f << 1) | o),
            (m = (m << 1) | s),
            (u = m | ~(c | f)),
            (l = f & c));
        }
        for (let t = d; t < f; t++) B[e.charCodeAt(t)] = 0;
        return p;
      }),
      (V = (e, t) => {
        if (e.length < t.length) {
          let n = t;
          ((t = e), (e = n));
        }
        return t.length === 0 ? e.length : e.length <= 32 ? Ae(e, t) : je(e, t);
      }));
  }))();
}
function Ne(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function H(e) {
  return (e.match(Ve) || []).map(Ne).join(` `);
}
function Pe(e, t) {
  let n = e.length;
  if (n <= t) return e;
  let r = e.slice(0, t);
  return n > t ? r + `…` : r;
}
function Fe(e) {
  return Object.keys(e).length === 0;
}
function Ie(e) {
  function t(...e) {
    console.log(Date.now(), ...e);
  }
  function n(e) {
    console.time(e);
  }
  function r(e) {
    console.timeEnd(e);
  }
  function i() {}
  return e ? { log: t, time: n, timeEnd: r } : { log: i, time: i, timeEnd: i };
}
function Le(e) {
  return e.inputFont?.fontFamily
    ? e.inputFont.fontFamily
    : e.titleFont?.fontFamily
      ? e.titleFont.fontFamily
      : e.subtitleFont?.fontFamily
        ? e.subtitleFont.fontFamily
        : W;
}
function U(e) {
  return `${e}Animation`;
}
function Re() {
  let e = He?.querySelector(We);
  if (e) return e.getAttribute(`content`);
}
function ze(e, t) {
  if (!t) return e;
  let n = `/${t}`;
  if (e.startsWith(n)) return e.slice(n.length);
}
var Be, Ve, W, He, Ue, We, Ge;
function Ke() {
  return (Ke = e(() => {
    (p(),
      (Be = f !== void 0 && f.localStorage.getItem(`__framerDebugSearch`) === `true`),
      (Ve = /[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]\d*|\d+/gu),
      (W = `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`),
      (He = typeof document < `u` ? document : null),
      (Ue = f === void 0 ? null : f),
      (We = `meta[name="framer-search-index"]`),
      (Ge = () => Re() === `limit-reached`));
  }))();
}
function qe(e) {
  try {
    return (new URL(e), !0);
  } catch {
    return !1;
  }
}
function Je(e) {
  try {
    return e.split(RegExp(`[\\s.,;!?\\p{P}\\p{Z}]+(?<!\\p{L}&)(?!&\\p{L})`, `u`));
  } catch {
    return (
      G(`Falling back to regex without lookbehind`),
      e.split(RegExp(`[\\s.,;!?\\p{P}\\p{Z}]+`, `u`))
    );
  }
}
function Ye(e) {
  let t = Je(e).filter((e) => e.trim() && e.length > 0);
  return new Set(t);
}
function Xe(e) {
  return Array.isArray(e)
    ? e.map(Xe)
    : e
        .normalize(`NFD`)
        .replace(/[\u0300-\u036f]/g, ``)
        .toLowerCase();
}
function Ze(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) t[n] = typeof r == `string` || Array.isArray(r) ? Xe(r) : r;
  return t;
}
function Qe(e, t, n) {
  let r = { ...e };
  return (t < r.start && (r.start = t), n > r.end && (r.end = n), r);
}
function $e(e, t, n, r) {
  let i = 0,
    a = { title: { start: 1 / 0, end: 0 }, description: { start: 1 / 0, end: 0 } },
    o = Ye(e.url);
  if (
    (o.has(t) && (i += 10),
    n.size === 1 && o.size === 1 && o.values().next().value === t && (i += i * 5),
    i > 0)
  ) {
    let t = e.url.split(`/`).length;
    i += D(10 - t, 0, t);
  }
  let s = Ye(e.title);
  s.has(t) && (i += 10);
  let c = e.title.indexOf(t);
  (c !== -1 && ((i += 10), (a.title = Qe(a.title, c, c + t.length))),
    V(e.title, r) <= 2 && (i += i * 10));
  for (let e of s) V(t, e) <= 2 && (i += 10);
  let l = [...e.h1, ...e.h2, ...e.h3, ...e.h4, ...e.h5, ...e.h6];
  for (let e of l) {
    let n = Ye(e);
    (V(e, r) <= 2 && (i += i * 10),
      e.startsWith(t) && (i += 10),
      n.has(t) && (i += 10),
      e.includes(t) && (i += 1));
    for (let e of n) V(t, e) <= 2 && (i += 1);
  }
  let u = e.description.indexOf(t);
  u !== -1 && ((i += 10), (a.description = Qe(a.description, u, u + t.length)));
  for (let n of e.p) n.includes(t) && (i += 0.5);
  for (let n of e.codeblock)
    (V(n, r) <= 2 && (i *= 10), n.includes(r) && (i += 10), n.includes(t) && (i += 0.5));
  return { score: i, match: a };
}
function et(e, t) {
  let n = Ze(e),
    r = Xe(t),
    i = Ye(r),
    a = 0;
  for (let e of i) {
    let { score: t } = $e(n, e, i, r);
    a += t;
  }
  return a;
}
function tt(e, t, n) {
  return i(() => {
    if (!t || !e) return [];
    let r = Ue?.location.pathname;
    at(`query`);
    let i = Object.values(e)
      .map((e) => {
        let r = et(e, t),
          i = e.h1.length && e.h1[0],
          a = n?.titleType === J.Title ? e.title : i || e.title;
        return {
          url: e.url,
          title: a,
          description: e.description,
          body: [...e.p, e.codeblock].join(` `),
          score: r,
        };
      })
      .filter((e) => e.score > n.minimumScore || 0)
      .filter((e) => !r || e.url !== r)
      .sort((e, t) => t.score - e.score);
    return (ot(`query`), i);
  }, [e, t]);
}
function nt(e, t, n) {
  let r = {},
    i = t.includes(`:`),
    a = t.split(`:`)[0],
    o = a.length > 1 ? a : ``;
  for (let t in e) ze(t, n).startsWith(o) && ((i && t.length <= o.length) || (r[t] = e[t]));
  return r;
}
function rt(e, t) {
  let [n, r] = S({}),
    [i, a] = S(`loading`),
    o = tt(n, e, t),
    { activeLocale: s } = le(),
    c = s?.id;
  function l(e, n = { ignoreScope: !1 }) {
    let i = e;
    (t.urlScope &&
      !n.ignoreScope &&
      ((i = nt(e, t.urlScope, s?.slug)), G(`Using URL scope`, t.urlScope)),
      r(i));
  }
  return (
    x(() => {
      async function e() {
        a(`loading`);
        let e = He?.querySelector(`meta[name="framer-search-index"]`);
        if (!e) {
          (a(`no-meta-tag-found`), l(Oe, { ignoreScope: !0 }), G(`No meta tag found`));
          return;
        }
        let t = await Se(c),
          n = e.getAttribute(`content`),
          r = n === `limit-reached`;
        if (
          (r && G(`Page limit for plan exceeded`),
          t && !r && (l(t), a(`loading-with-cache`), G(`Using cached index`)),
          !n || !qe(n))
        ) {
          (G(`Meta tag exists but URL is not valid yet`),
            t
              ? G(`Continue using cache`)
              : (a(`pending-index-generation`),
                G(`No cache to use, page reload required to check for meta tag`)));
          return;
        }
        let i = it(n, c),
          o = await fetch(i);
        if (!o.ok) throw Error(o.statusText);
        let s = await o.json();
        (l(s), Ce(c, s), a(`success`), G(`Using downloaded index`));
      }
      e().catch((e) => {
        (a(`error`), G(`Failed to load search index`, e));
      });
    }, [c]),
    G({ status: i, results: o }),
    { results: o, status: i }
  );
}
function it(e, t) {
  return ye(t) ? e : e.replace(`.json`, `-${t}.json`);
}
var G, at, ot;
function st() {
  return (st = e(() => {
    (M(), O(), s(), Bt(), De(), ke(), Me(), Ke(), ({ log: G, time: at, timeEnd: ot } = Ie(Be)));
  }))();
}
var K;
function ct() {
  return (ct = e(() => {
    (p(),
      (function (e) {
        var t = (e.isTouch = () => `ontouchstart` in f || a.maxTouchPoints > 0),
          n = (e.isChrome = () => a.userAgent.toLowerCase().includes(`chrome/`)),
          r = (e.isWebKit = () => a.userAgent.toLowerCase().includes(`applewebkit/`)),
          i = (e.isSafari = () => r() && !n());
        ((e.isSafariDesktop = () => i() && !t()),
          (e.isWindows = () => /Win/.test(a.platform)),
          (e.isMacOS = () => /Mac/.test(a.platform)));
      })((K ||= {})));
  }))();
}
var lt;
function ut() {
  return (ut = e(() => {
    (s(),
      ct(),
      (lt = (e, t) => {
        let n = u(null);
        return o(
          (r) => {
            if (!K.isSafari()) return e(r);
            let i = t || n,
              { clientX: a, clientY: o } = r,
              s = i.current;
            if (((i.current = { x: a, y: o }), s && (s.x !== a || s.y !== o))) return e(r);
          },
          [t, e]
        );
      }));
  }))();
}
function dt(e, t, { offsetTop: n, offsetBottom: r }) {
  let i = e.getBoundingClientRect(),
    a = t.getBoundingClientRect();
  if (i.top < a.top) {
    let e = a.top - i.top;
    t.scrollTop = t.scrollTop - e - n;
  } else if (i.bottom > a.bottom) {
    let e = a.top - i.top,
      o = t.scrollTop - e - n,
      s = i.bottom - a.bottom,
      c = t.scrollTop + s + r;
    t.scrollTop = Math.min(o, c);
  }
}
function ft() {
  return (ft = e(() => {}))();
}
function pt({ theme: e, type: t, onClick: n, text: r }) {
  let i =
    t === `icon`
      ? /*#__PURE__*/ y(de, {
          style: { color: e.inputIconColor, width: e.inputIconSize, height: e.inputIconSize },
        })
      : r;
  return /*#__PURE__*/ y(`div`, {
    style: {
      flexShrink: 0,
      fontSize: e && e.titleFont && e.titleFont.fontSize ? e.titleFont.fontSize : 15,
    },
    children: /*#__PURE__*/ y(`button`, {
      className: `__framer-search-clear-button`,
      onClick: n,
      style: {
        fontFamily: `inherit`,
        border: `none`,
        background: `none`,
        cursor: `pointer`,
        display: `flex`,
        textTransform: `uppercase`,
        color: e.inputIconColor,
        fontSize: `0.75em`,
        padding: 0,
      },
      children: i,
    }),
  });
}
function mt({ theme: e, type: t }) {
  let n = { background: e.foregroundColor, height: 1, flexShrink: 0, opacity: 0.05 };
  return (
    t === `contained` &&
      e &&
      ((n.marginLeft = e.horizontalSpacing), (n.marginRight = e.horizontalSpacing)),
    /*#__PURE__*/ y(`div`, { style: n })
  );
}
function ht({ onClick: e }) {
  return /*#__PURE__*/ y(`div`, { style: { width: `100%`, flexBasis: `20vh` }, onClick: e });
}
function gt({ layoutType: e, theme: t, onKeyDown: n, onDismiss: r, children: i, modalOptions: a }) {
  let o = yt(e, t),
    s = {
      ...Ot,
      ...o,
      willChange: `transform`,
      marginTop: e === `FixedTop` ? t.offsetTop : 0,
      height: e === `Sidebar` ? `100%` : `auto`,
      maxHeight: e === `QuickMenu` ? `100%` : `none`,
      justifyContent: e === `Sidebar` ? `flex-end` : `flex-start`,
      flexDirection: e === `Sidebar` ? `column-reverse` : `column`,
    },
    c = {
      ...Ot,
      ...o,
      height: e === `Sidebar` ? `100%` : `auto`,
      maxHeight: e === `QuickMenu` ? `100%` : `none`,
      gap: e === `Sidebar` ? 0 : t.gapBetweenStatusAndSearch,
      backgroundColor: e === `Sidebar` ? t.backgroundColor : `transparent`,
      justifyContent: e === `Sidebar` ? `flex-end` : `flex-start`,
      flexDirection: e === `Sidebar` ? `column-reverse` : `column`,
      originX: 0.5,
      originY: 0.5,
    };
  function l() {
    switch (e) {
      case `FixedTop`: {
        let e = U(`FixedTop`);
        return (
          (a ? a[e] : void 0) || {
            y: -10,
            opacity: 0.2,
            transition: { duration: K.isTouch() ? 0 : 0.15 },
          }
        );
      }
      case `QuickMenu`: {
        let e = U(`QuickMenu`);
        return (
          (a ? a[e] : void 0) || {
            scale: 0.95,
            opacity: 0,
            y: 0,
            x: 0,
            rotate: 0,
            transition: { type: `spring`, stiffness: 600, damping: 40 },
          }
        );
      }
      case `Sidebar`: {
        let e = U(`Sidebar`);
        return (a ? a[e] : void 0) || { x: -10, opacity: 0, transition: { duration: 0.15 } };
      }
    }
  }
  let u = l();
  return /*#__PURE__*/ b(`div`, {
    style: s,
    onKeyDown: n,
    onClick: (e) => e.stopPropagation(),
    children: [
      e === `QuickMenu` && /*#__PURE__*/ y(ht, { onClick: r }),
      /*#__PURE__*/ y(T.div, {
        initial: u,
        animate: { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 },
        transition: u ? u.transition : void 0,
        exit: { opacity: 0, transition: { duration: 0 } },
        style: c,
        children: i,
      }),
    ],
  });
}
function _t({
  layoutType: e,
  theme: n,
  children: r,
  heightIsStatic: i,
  heightTransition: a,
  heightDeps: o,
}) {
  let s = {
      willChange: `transform`,
      backgroundColor: n.backgroundColor,
      color: n.foregroundColor,
      borderRadius: e === `QuickMenu` ? n.borderRadius : 0,
      width: `100%`,
      display: `flex`,
      flexDirection: `column`,
      overflow: `hidden`,
      boxShadow: e === `Sidebar` ? void 0 : n.shadow,
      maxHeight: e === `QuickMenu` ? `min(${St}px, calc(100vh - 30px))` : void 0,
    },
    [c, l] = C();
  return (
    t(() => {
      if (e !== `QuickMenu` || i) return;
      let t = c.current.offsetHeight;
      c.current.style.height = `auto`;
      let n = c.current.offsetHeight;
      ((c.current.style.height = t + `px`), l(c.current, { height: [t, n] }, a));
    }, o),
    /*#__PURE__*/ y(`div`, {
      ref: c,
      role: `dialog`,
      className: e === `FixedTop` ? `__framer-max-height-80dvh` : void 0,
      style: s,
      children: r,
    })
  );
}
function vt({ status: e, layoutType: t, theme: n }) {
  let r = Math.floor(n ? n.horizontalSpacing * Ct : 0),
    i = {
      ...At,
      userSelect: `none`,
      fontFamily: Le(n),
      paddingLeft: n && n.horizontalSpacing,
      paddingRight: n && n.horizontalSpacing,
      fontWeight: 500,
      lineHeight: `calc(${n.inputFontSize} * 2)`,
      paddingTop: r,
      paddingBottom: r,
      ...n.titleFont,
      zIndex: n.zIndex + 1,
      maxWidth: t === `FixedTop` ? `none` : n.width,
      width: t === `FixedTop` ? `calc(100% - ${r * 2}px` : `100%`,
      boxShadow: t !== `Sidebar` && At.boxShadow,
      borderRadius: t !== `Sidebar` && n.borderRadius,
    };
  return e === `no-meta-tag-found`
    ? /*#__PURE__*/ y(`div`, {
        style: i,
        children: t === `FixedTop` ? `Preview Mode` : `Preview Mode. Publish your Site to Search.`,
      })
    : e === `pending-index-generation`
      ? /*#__PURE__*/ y(`div`, { style: i, children: `Site is being indexed` })
      : null;
}
function yt(e, t) {
  switch (e) {
    case `Sidebar`:
      return { ...Nt, width: t.width };
    case `FixedTop`:
      return Pt;
    case `QuickMenu`:
      return { ...Ft, width: t.width };
  }
}
function bt(e) {
  let {
      layoutType: t,
      theme: n,
      urlScope: r,
      inputOptions: i,
      backdropOptions: a,
      modalOptions: s,
      resultOptions: c,
      onDismiss: l,
    } = e,
    { activeLocale: d } = le();
  d?.id;
  let p = d?.slug,
    m = u(),
    g = u(),
    _ = u(),
    [v, C] = S({ index: 0, scroll: !0 }),
    w = u(null),
    [T, E] = S(K.isTouch),
    [O, ee] = S(``),
    k = h(O),
    { results: A, status: j } = rt(k, { minimumScore: 0, urlScope: r, titleType: c.titleType }),
    te = A[v.index],
    ne = Math.floor(n ? n.horizontalSpacing * Ct : 0);
  x(() => {
    C({ index: 0, scroll: !0 });
  }, [k]);
  let re = o((e, t) => {
      e.pointerType === `touch` && (E(!0), C({ index: t, scroll: !1 }));
    }, []),
    M = o((e, t) => {
      C((e) => (e.index === t ? e : { index: t, scroll: !1 }));
    }, []),
    N = se(),
    ie = o(
      async (e) => {
        if (j !== `no-meta-tag-found`)
          try {
            var t, n;
            let { routeId: r, pathVariables: i } = ae(N.routes, e),
              a = N.getRoute?.call(N, r);
            (l(),
              await (a == null || (t = a.page) == null ? void 0 : t.preload?.call(t)),
              (n = N.navigate) == null || n.call(N, r, null, i, !1));
          } catch {
            f.location.href = e;
          }
      },
      [j]
    ),
    oe = (e) => {
      let t = A.length - 1;
      switch (e.code) {
        case `ArrowUp`:
          if ((e.preventDefault(), T)) {
            E(!1);
            break;
          }
          C((e) => ({ index: D(0, t, e.index - 1), scroll: !0 }));
          break;
        case `ArrowDown`:
          if ((e.preventDefault(), T)) {
            E(!1);
            break;
          }
          C((e) => ({ index: D(0, t, e.index + 1), scroll: !0 }));
          break;
        case `Escape`:
          break;
        case `Enter`:
          te && ie(te.url);
          break;
        default:
          e.stopPropagation();
      }
    },
    P = A.length === 0 && k.length > 1 && j !== `loading`,
    F = !!(
      ((k.length > 0 && A.length > 0) || P) &&
      j !== `loading` &&
      e.inputOptions &&
      e.inputOptions.dividerType !== `none`
    ),
    I = !!(e.resultOptions && e.resultOptions.itemType === `contained`),
    L = I ? n.spacing : 10,
    R = F && I ? L + n.gapBetweenResults * 2 : 0;
  return (
    x(() => {
      if (!v.scroll) return;
      let e = g.current;
      e && dt(e, _.current, { offsetTop: F && I ? R : 0, offsetBottom: I ? L : 0 });
    }, [v]),
    /*#__PURE__*/ b(gt, {
      layoutType: t,
      modalOptions: s,
      theme: n,
      onKeyDown: oe,
      onDismiss: l,
      children: [
        /*#__PURE__*/ b(_t, {
          layoutType: t,
          theme: n,
          heightIsStatic: s.heightIsStatic,
          heightTransition: s.heightTransition,
          heightDeps: [A.length, P],
          children: [
            /*#__PURE__*/ y(wt, {
              autofocus: !0,
              ref: m,
              onChange: ee,
              value: O,
              theme: n,
              status: j,
              iconType: i.iconOptions.iconType,
              placeholder: i.placeholderOptions.placeholderText,
              clearButtonType: i ? i.clearButtonType : void 0,
              clearButtonText: i.clearButtonText,
            }),
            F && /*#__PURE__*/ y(mt, { theme: n, type: i.dividerType }),
            /*#__PURE__*/ y(kt, {
              ref: _,
              theme: n,
              children: /*#__PURE__*/ b(`ul`, {
                "aria-live": `polite`,
                style: {
                  display: `flex`,
                  flexDirection: `column`,
                  width: `calc(100% - ${n.scrollBarWidth}px)`,
                  padding: 0,
                  paddingTop: R,
                  paddingBottom: A.length && I ? L : 0,
                  gap: n.gapBetweenResults,
                  margin: 0,
                },
                children: [
                  A.map((t, r) => {
                    let i = r === v.index;
                    return /*#__PURE__*/ y(
                      Dt,
                      {
                        ref: i ? g : null,
                        index: r,
                        result: t,
                        prevMousePositionRef: w,
                        selected: !T && i,
                        type: e.resultOptions.itemType,
                        subtitleType: e.resultOptions.subtitleOptions.subtitleType,
                        theme: n,
                        localeSlug: p,
                        onMouseMove: M,
                        onPointerDown: re,
                        onNavigateTo: ie,
                      },
                      t.url
                    );
                  }),
                  P &&
                    /*#__PURE__*/ y(`li`, {
                      style: {
                        paddingTop: ne - R,
                        paddingBottom: ne,
                        lineHeight: `2em`,
                        paddingLeft: n && n.horizontalSpacing,
                        paddingRight: n && n.horizontalSpacing,
                        height: `100%`,
                      },
                      children: /*#__PURE__*/ y(`h3`, {
                        style: {
                          ...jt,
                          textAlign: `center`,
                          lineHeight: `calc(${n.inputFontSize} * 2)`,
                          color: n.subtitleColor,
                          ...n.titleFont,
                        },
                        children: `No results`,
                      }),
                    }),
                ],
              }),
            }),
          ],
        }),
        /*#__PURE__*/ y(vt, { status: j, layoutType: t, theme: n }),
      ],
    })
  );
}
var xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, q, It, J, Lt, Rt, Y, zt, X;
function Bt() {
  return (Bt = e(() => {
    (p(),
      g(),
      st(),
      s(),
      ct(),
      O(),
      pe(),
      Ke(),
      ut(),
      ft(),
      M(),
      (xt = 120),
      (St = 496),
      (Ct = 0.6),
      (wt = /*#__PURE__*/ _(function (e, t) {
        let {
            value: r = ``,
            status: i,
            autofocus: a,
            theme: o,
            placeholder: s,
            iconType: c,
            clearButtonType: l,
            onChange: f,
          } = e,
          [p, m] = S(r),
          [h, g] = S(!1),
          _ = u();
        (d(t, () => _.current),
          n.useLayoutEffect(
            () => () => {
              let e = _.current;
              e && e === document.activeElement && e.blur();
            },
            []
          ));
        let v = () => {
            _.current && _.current.focus();
          },
          C = () => {
            m(``);
          };
        (x(() => {
          f(p);
        }, [p]),
          p.length);
        let w = p.length > 0 && l && l !== `none`,
          T = Math.floor(o ? o.horizontalSpacing * Ct : 0),
          E =
            c === `custom` && o.inputIconImage
              ? /*#__PURE__*/ y(`img`, {
                  alt: `icon alongside the Site Search input`,
                  src: o.inputIconImage.src,
                  width: o.inputIconSize,
                  height: o.inputIconSize,
                })
              : /*#__PURE__*/ y(ue, {
                  color: o.inputIconColor,
                  width: o.inputIconSize,
                  height: o.inputIconSize,
                });
        return /*#__PURE__*/ b(`div`, {
          role: `search`,
          style: {
            ...Tt,
            fontFamily: Le(o),
            paddingLeft: o && o.horizontalSpacing,
            paddingRight: o && o.horizontalSpacing,
            gap: 12,
            paddingTop: T,
            paddingBottom: T,
            touchAction: `none`,
          },
          onClick: v,
          children: [
            /*#__PURE__*/ y(`div`, {
              style: { flexShrink: 0, display: `flex` },
              children:
                i === `loading` && p
                  ? /*#__PURE__*/ y(fe, {
                      color: o.inputIconColor,
                      backgroundColor: o.backgroundColor,
                      style: { height: o && o.inputIconSize, width: o && o.inputIconSize },
                    })
                  : E,
            }),
            /*#__PURE__*/ y(`input`, {
              ref: _,
              spellCheck: !1,
              autoFocus: a,
              style: {
                ...Et,
                WebkitTapHighlightColor: `rgba(0,0,0,0)`,
                color: o.foregroundColor,
                lineHeight: `2em`,
                verticalAlign: `baseline`,
                ...o.titleFont,
                ...o.inputFont,
                fontSize: o.inputFontSize,
                "--framer-search-placeholder-color": o.placeholderColor,
              },
              onFocus: () => {
                let e = document.documentElement.scrollTop;
                document.documentElement.scrollTop = e;
              },
              placeholder: s,
              value: p,
              onChange: () => m(_.current.value),
            }),
            w &&
              /*#__PURE__*/ y(pt, {
                theme: o,
                type: e.clearButtonType,
                text: e.clearButtonText,
                onClick: C,
              }),
          ],
        });
      })),
      (Tt = { display: `inline-flex`, alignItems: `center`, flexShrink: 0 }),
      (Et = {
        outline: `none`,
        border: `none`,
        background: `transparent`,
        fontWeight: 500,
        height: `2em`,
        padding: 0,
        width: `100%`,
      }),
      (Dt = /*#__PURE__*/ n.memo(
        /*#__PURE__*/ n.forwardRef(function (e, t) {
          let {
              index: n,
              result: r,
              prevMousePositionRef: a,
              type: o = `contained`,
              subtitleType: s = `path`,
              selected: c = !1,
              theme: l,
              localeSlug: u,
              style: d,
              onMouseMove: f,
              onPointerDown: p,
              onNavigateTo: m,
            } = e,
            { url: h, title: g, score: _ } = r,
            v = i(() => ze(h, u), [h, u]),
            x = lt((e) => f(e, n), a),
            S = o === `contained`,
            C = S ? D(0, 1 / 0, l.borderRadius - l.spacing) : 0,
            w = s === `path` ? v : Pe(r.description, xt);
          return /*#__PURE__*/ y(`a`, {
            ref: t,
            style: { textDecoration: `none` },
            href: r.url,
            onClick: (e) => {
              (e.preventDefault(), m(r.url));
            },
            onMouseMove: x,
            onMouseDown: (e) => {
              e.preventDefault();
            },
            onPointerDown: (e) => p(e, n),
            children: /*#__PURE__*/ b(
              `li`,
              {
                style: {
                  ...Mt,
                  ...d,
                  paddingTop: S ? 12 : 16,
                  paddingBottom: S ? 12 : 16,
                  color: l.foregroundColor,
                  position: `relative`,
                  paddingLeft: l && l.horizontalSpacing,
                  paddingRight: l && l.horizontalSpacing,
                },
                children: [
                  /*#__PURE__*/ y(`div`, {
                    style: {
                      backgroundColor: l.foregroundColor,
                      position: `absolute`,
                      opacity: c ? 0.06 : 0,
                      borderRadius: C,
                      left: l && S ? l.spacing : 0,
                      right: l && S ? l.spacing : 0,
                      top: 0,
                      bottom: 0,
                    },
                  }),
                  /*#__PURE__*/ b(`div`, {
                    style: { display: `flex`, flexDirection: `column`, overflow: `hidden`, gap: 4 },
                    children: [
                      /*#__PURE__*/ y(`h3`, {
                        style: { ...jt, ...l.titleFont, lineHeight: `1.4em` },
                        children: g,
                      }),
                      /*#__PURE__*/ b(`p`, {
                        style: {
                          margin: 0,
                          color: l.subtitleColor,
                          ...l.subtitleFont,
                          whiteSpace: `nowrap`,
                          overflow: `hidden`,
                          textOverflow: `ellipsis`,
                          lineHeight: `1.4em`,
                        },
                        children: [Be ? _ : ``, ` `, w],
                      }),
                    ],
                  }),
                ],
              },
              r.url
            ),
          });
        })
      )),
      (Ot = {
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `flex-start`,
        gap: 15,
        overflow: `visible`,
      }),
      (kt = /*#__PURE__*/ n.forwardRef(function ({ theme: e, children: t }, r) {
        let i = K.isTouch(),
          [a, o] = n.useState(!0);
        return (
          n.useEffect(() => {
            if (!i) return;
            let e = r.current;
            e && o(e.scrollHeight > e.clientHeight);
          }),
          /*#__PURE__*/ y(`div`, {
            ref: r,
            style: {
              width: `calc(100% + ${e.scrollBarWidth}px)`,
              overflowY: `scroll`,
              overflowX: `hidden`,
              overscrollBehavior: `contain`,
              touchAction: a ? void 0 : `none`,
              marginTop: -1,
            },
            children: t,
          })
        );
      })),
      (At = {
        backgroundColor: `#B5B5B5`,
        color: `#FFF`,
        boxShadow: `0px 20px 40px 0px rgba(0, 0, 0, 0.25)`,
        fontFamily: `inherit`,
        textAlign: `center`,
        fontSize: 13,
        padding: `8px 0`,
      }),
      (jt = {
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        overflow: `hidden`,
        fontWeight: 500,
        whiteSpace: `nowrap`,
        flex: 1,
        margin: 0,
      }),
      (Mt = { padding: `16px 20px`, listStyle: `none`, fontWeight: 500 }),
      (Nt = { left: 0, width: 500 }),
      (Pt = { top: 0, width: `100%` }),
      (Ft = { width: 500 }),
      (function (e) {
        ((e.Icon = `icon`), (e.Text = `text`), (e.None = `none`));
      })((q ||= {})),
      (function (e) {
        ((e.None = `none`), (e.FullWidth = `fullWidth`), (e.Contained = `contained`));
      })((It ||= {})),
      (function (e) {
        ((e.H1 = `h1`), (e.Title = `title`));
      })((J ||= {})),
      (function (e) {
        ((e.Description = `description`), (e.Path = `path`));
      })((Lt ||= {})),
      (function (e) {
        ((e.FullWidth = `fullWidth`), (e.Contained = `contained`));
      })((Rt ||= {})),
      (function (e) {
        ((e.Sidebar = `Sidebar`), (e.FixedTop = `FixedTop`), (e.QuickMenu = `QuickMenu`));
      })((Y ||= {})),
      (function (e) {
        ((e.Icon = `icon`), (e.Text = `text`));
      })((zt ||= {})),
      (function (e) {
        ((e.Default = `default`), (e.Custom = `custom`));
      })((X ||= {})));
  }))();
}
function Vt() {
  return f === void 0 ? { width: 0, height: 0 } : { width: f.innerWidth, height: f.innerHeight };
}
function Ht(e) {
  let [t, n] = S(() => e(Vt()));
  return (
    x(() => {
      let t = () => n(e(Vt()));
      return (
        f.addEventListener(`resize`, t),
        () => {
          f.removeEventListener(`resize`, t);
        }
      );
    }, []),
    t
  );
}
function Ut() {
  return (Ut = e(() => {
    (p(), s());
  }))();
}
function Wt(e, t = `none`) {
  if (!e) return t;
  let { x: n, y: r, blur: i, color: a, spread: o } = e;
  return `${n}px ${r}px ${i}px ${o}px ${a}`;
}
var Gt, Kt, qt, Jt, Yt, Z;
function Xt() {
  return (Xt = e(() => {
    (p(),
      g(),
      v(),
      s(),
      O(),
      pe(),
      M(),
      Bt(),
      Ut(),
      Ke(),
      ct(),
      (function (e) {
        ((e.icon = `Icon`), (e.input = `Input`));
      })((Gt ||= {})),
      (Kt = /*#__PURE__*/ _(function (e, t) {
        let { layoutType: n, theme: r, onDismiss: i } = e;
        return (
          x(() => {
            let e = (e) => {
                e.code === `Escape` && (e.stopPropagation(), i());
              },
              t = (e) => {
                e.pointerType === `touch` &&
                  ((e.target instanceof Element && e.target.closest(`[role=search]`)) ||
                    (document.activeElement instanceof HTMLInputElement &&
                      document.activeElement.blur()));
              };
            return (
              f.addEventListener(`keydown`, e),
              f.addEventListener(`pointerdown`, t, { capture: !0 }),
              document.body.classList.add(Yt),
              () => {
                (f.removeEventListener(`keydown`, e),
                  f.removeEventListener(`pointerdown`, t, { capture: !0 }),
                  document.body.classList.remove(Yt));
              }
            );
          }, []),
          /*#__PURE__*/ m(
            /*#__PURE__*/ b(`div`, {
              ref: t,
              className: `__framer-search-modal-container`,
              role: `presentation`,
              style: {
                ...qt,
                zIndex: e.backdropOptions.zIndex,
                justifyContent: n === Y.Sidebar ? `flex-start` : `center`,
              },
              onClick: i,
              children: [
                /*#__PURE__*/ y(T.div, {
                  role: `presentation`,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0, transition: { duration: 0 } },
                  transition: r.overlayTransition,
                  style: {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: `100%`,
                    height: `100%`,
                    boxSizing: `border-box`,
                    position: `absolute`,
                    touchAction: `none`,
                    backgroundColor: e.backdropOptions.backgroundColor,
                  },
                }),
                /*#__PURE__*/ y(bt, {
                  urlScope: e.urlScope,
                  layoutType: n,
                  inputOptions: e.inputOptions,
                  resultOptions: e.resultOptions,
                  modalOptions: e.modalOptions,
                  backdropOptions: e.backdropOptions,
                  theme: e.theme,
                  onDismiss: i,
                }),
              ],
            }),
            document.body
          )
        );
      })),
      (qt = {
        width: `100%`,
        boxSizing: `border-box`,
        willChange: `transform`,
        position: `fixed`,
        display: `flex`,
        alignItems: `flex-start`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }),
      (Jt = {
        height: `100%`,
        display: `flex`,
        borderRadius: 10,
        cursor: `inherit`,
        overflow: `hidden`,
      }),
      (Yt = `__framer-overflow-hidden`),
      (Z = re(
        function (e) {
          var t;
          let n = u(null),
            [r, i] = S(!1),
            [a, o] = S(!1),
            [s, c] = S(!1),
            [l] = S(() => ie.current() === ie.canvas);
          x(() => {
            (o(Ge()), c(K.isSafari() && K.isTouch()));
          }, []);
          let d =
              (t = e.inputOptions) != null && t.inputFont?.fontSize
                ? e.inputOptions.inputFont.fontSize
                : `16px`,
            f = s ? `max(16px, ${d})` : d,
            p = Ht((t) =>
              t.width < e.modalOptions.width + 10
                ? Y.FixedTop
                : e.modalOptions.layoutType || e.layoutType
            ),
            m = {
              subtitleColor: e.resultOptions.subtitleOptions.subtitleColor,
              backgroundColor: e.modalOptions.backgroundColor,
              foregroundColor: e.resultOptions.titleColor,
              placeholderColor: e.inputOptions.placeholderOptions.placeholderColor,
              titleFont:
                e.resultOptions?.titleFont && !Fe(e.resultOptions.titleFont)
                  ? e.resultOptions.titleFont
                  : { fontSize: 14, fontFamily: W, fontWeight: 500 },
              subtitleFont:
                e.resultOptions.subtitleOptions?.subtitleFont &&
                !Fe(e.resultOptions.subtitleOptions.subtitleFont)
                  ? e.resultOptions.subtitleOptions.subtitleFont
                  : { fontSize: 12, fontFamily: W, fontWeight: 500 },
              inputFont:
                e.inputOptions?.inputFont && !Fe(e.inputOptions.inputFont)
                  ? e.inputOptions.inputFont
                  : { fontSize: 16, fontFamily: W, fontWeight: 500 },
              inputFontSize: f,
              width: e.modalOptions.width,
              offsetTop: e.modalOptions.top,
              borderRadius: e.modalOptions.borderRadius,
              shadow: Wt(e.modalOptions.shadow),
              entryIconColor: e.iconColor,
              entryIconSize: e.iconSize,
              entryIconImage: e.iconImage,
              inputIconSize: e.inputOptions.iconOptions.iconSize,
              inputIconColor: e.inputOptions.iconOptions.iconColor,
              inputIconImage: e.inputOptions.iconOptions.iconImage,
              gapBetweenStatusAndSearch: 16,
              gapBetweenResults: 1,
              scrollBarWidth: 20,
              margin: 10,
              spacing: 8,
              zIndex: e.backdropOptions.zIndex,
              horizontalSpacing: 20,
              overlayTransition: e.backdropOptions.transition,
            },
            h = (e) => {
              (e.preventDefault(), e.stopPropagation(), !a && i(!0));
            };
          return /*#__PURE__*/ b(`div`, {
            style: { ...Jt, ...e.style, pointerEvents: a ? `none` : `auto`, opacity: a ? 0.4 : 1 },
            children: [
              /*#__PURE__*/ y(`button`, {
                "aria-label": `Search Icon`,
                style: {
                  width: `100%`,
                  height: `100%`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  background: `none`,
                  cursor: `inherit`,
                  color: `inherit`,
                  border: `none`,
                  outline: `inherit`,
                  padding: 0,
                },
                onClick: h,
                children:
                  e.iconType === X.Custom && m.entryIconImage
                    ? /*#__PURE__*/ y(`img`, {
                        alt: `icon entry point for Site Search`,
                        src: m.entryIconImage.src,
                        width: m.entryIconSize,
                        height: m.entryIconSize,
                      })
                    : /*#__PURE__*/ y(ue, {
                        color: m.entryIconColor,
                        width: m.entryIconSize,
                        height: m.entryIconSize,
                      }),
              }),
              /*#__PURE__*/ y(E, {
                children:
                  r &&
                  !l &&
                  /*#__PURE__*/ y(Kt, {
                    ref: n,
                    layoutType: p,
                    urlScope: e.urlScope,
                    inputOptions: e.inputOptions,
                    resultOptions: e.resultOptions,
                    backdropOptions: e.backdropOptions,
                    modalOptions: e.modalOptions,
                    theme: m,
                    onDismiss: () => i(!1),
                  }),
              }),
            ],
          });
        },
        [
          `
        @keyframes __framer-blink-input {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }

        .__framer-search-modal-container input:focus {
            animation: __framer-blink-input 0.01s;
        }
        `,
          `
         .__framer-search-modal-container input::placeholder, 
         .__framer-search-modal-container input::-webkit-input-placeholder { 
            color: var(--framer-search-placeholder-color, #999999);
            opacity: 1;
        }
        `,
          `
        .__framer-search-modal-container {
            height: 100vh;
            height: 100dvh;
        }
        .__framer-search-modal-container .__framer-max-height-80dvh {
            max-height: 80vh;
            max-height: 80dvh;
        }
        `,
          `
        body.${Yt} {
            overflow: hidden;
        }`,
          `
        button.__framer-search-clear-button {
            position: relative;
        }
        button.__framer-search-clear-button::after {
            content: "";
            position: absolute;
            top: -10px;
            right: -10px;
            bottom: -10px;
            left: -10px;
        }`,
        ]
      )),
      A(Z, {
        urlScope: { title: `Scope`, type: R.PageScope },
        iconType: {
          title: `Icon`,
          type: R.Enum,
          options: Object.values(X),
          optionTitles: Object.values(X).map(H),
          displaySegmentedControl: !0,
        },
        iconColor: {
          title: `Color`,
          type: R.Color,
          defaultValue: `#333`,
          hidden: (e) => e.iconType === X.Custom,
        },
        iconImage: {
          title: `File`,
          type: R.ResponsiveImage,
          allowedFileTypes: [`jpg`, `png`, `svg`],
          hidden: (e) => e.iconType === X.Default,
        },
        iconSize: { title: `Size`, type: R.Number, displayStepper: !0, defaultValue: 24 },
        inputOptions: {
          title: `Input`,
          type: R.Object,
          buttonTitle: `Icon, Styles`,
          controls: {
            iconOptions: {
              title: `Icon`,
              type: R.Object,
              buttonTitle: `Color, Size`,
              controls: {
                iconType: {
                  title: `Icon`,
                  type: R.Enum,
                  options: Object.values(X),
                  optionTitles: Object.values(X).map(H),
                  displaySegmentedControl: !0,
                },
                iconColor: {
                  title: `Color`,
                  type: R.Color,
                  defaultValue: `rgba(0, 0, 0, 0.45)`,
                  hidden: ({ iconType: e }) => e === X.Custom,
                },
                iconImage: {
                  title: `File`,
                  type: R.ResponsiveImage,
                  allowedFileTypes: [`jpg`, `png`, `svg`],
                  hidden: ({ iconType: e }) => e === X.Default,
                },
                iconSize: {
                  title: `Icon Size`,
                  type: R.Number,
                  displayStepper: !0,
                  defaultValue: 18,
                  min: 0,
                  max: 100,
                },
              },
            },
            inputFont: { title: `Font`, type: R.Font, displayFontSize: !0 },
            textColor: { title: `Color`, type: R.Color, defaultValue: `#333` },
            placeholderOptions: {
              title: `Placeholder`,
              type: R.Object,
              buttonTitle: `Color, Text`,
              controls: {
                placeholderText: { title: `Text`, type: R.String, defaultValue: `Search...` },
                placeholderColor: {
                  title: `Color`,
                  type: R.Color,
                  defaultValue: `rgba(0,0,0,0.4)`,
                },
              },
            },
            dividerType: {
              title: `Divider`,
              type: R.Enum,
              options: Object.values(It),
              optionTitles: Object.keys(It).map(H),
              defaultValue: It.FullWidth,
            },
            clearButtonType: {
              title: `Clear Type`,
              type: R.Enum,
              options: Object.values(q),
              optionTitles: Object.keys(q).map(H),
              defaultValue: q.Icon,
            },
            clearButtonText: {
              title: `Clear Text`,
              type: R.String,
              defaultValue: `Clear`,
              hidden: (e) => e.clearButtonType !== q.Text,
            },
          },
        },
        modalOptions: {
          title: `Modal`,
          buttonTitle: `Layout, Width`,
          type: R.Object,
          controls: {
            layoutType: {
              title: `Layout`,
              type: R.Enum,
              options: Object.keys(Y),
              optionTitles: Object.values(Y).map(H),
              defaultValue: Y.QuickMenu,
            },
            width: {
              title: `Width`,
              type: R.Number,
              defaultValue: 500,
              min: 200,
              max: 1e3,
              displayStepper: !0,
              step: 5,
              hidden: (e) => e.layoutType === Y.FixedTop,
            },
            top: {
              title: `Top`,
              type: R.Number,
              defaultValue: 0,
              min: 0,
              max: 1e3,
              displayStepper: !0,
              hidden: (e) => e.layoutType !== Y.FixedTop,
            },
            heightIsStatic: {
              title: `Height`,
              type: R.Boolean,
              enabledTitle: `Instant`,
              disabledTitle: `Animate`,
              hidden: ({ layoutType: e }) => e !== Y.QuickMenu,
            },
            heightTransition: {
              title: `Type`,
              type: R.Transition,
              defaultValue: { type: `spring`, stiffness: 800, damping: 60 },
              hidden: ({ heightIsStatic: e, layoutType: t }) => t !== Y.QuickMenu || e,
            },
            borderRadius: {
              title: `Radius`,
              type: R.Number,
              defaultValue: 16,
              displayStepper: !0,
              min: 0,
              hidden: ({ layoutType: e }) => e !== Y.QuickMenu,
            },
            shadow: {
              buttonTitle: `Options`,
              type: R.Object,
              defaultValue: { x: 0, y: 20, blur: 40, spread: 0, color: `rgba(0,0,0,0.2)` },
              controls: {
                color: { type: R.Color, defaultValue: `rgba(0,0,0,0.2)` },
                x: { type: R.Number, defaultValue: 0 },
                y: { type: R.Number, defaultValue: 20 },
                blur: { type: R.Number, defaultValue: 40 },
                spread: { type: R.Number, defaultValue: 0 },
              },
            },
            backgroundColor: { title: `Background`, type: R.Color, defaultValue: `#FFF` },
            [U(Y.QuickMenu)]: {
              title: `Animation`,
              type: R.Object,
              icon: `effect`,
              hidden: ({ layoutType: e }) => e !== Y.QuickMenu,
              optional: !0,
              buttonTitle: `Options`,
              controls: {
                opacity: { type: R.Number, defaultValue: 0.5, step: 0.1, min: 0, max: 1 },
                scale: { type: R.Number, defaultValue: 0.75, step: 0.1, min: 0, max: 2 },
                x: { type: R.Number, defaultValue: 0, min: -500, max: 500 },
                y: { type: R.Number, defaultValue: 0, min: -500, max: 500 },
                transition: { type: R.Transition },
              },
            },
            [U(Y.FixedTop)]: {
              title: `Animation`,
              type: R.Object,
              icon: `effect`,
              buttonTitle: `Options`,
              hidden: ({ layoutType: e }) => e !== Y.FixedTop,
              optional: !0,
              controls: {
                opacity: { type: R.Number, defaultValue: 0.8, step: 0.1, min: 0, max: 1 },
                y: { type: R.Number, defaultValue: 0, min: -100, max: 100 },
                transition: { type: R.Transition },
              },
            },
            [U(Y.Sidebar)]: {
              title: `Animation`,
              type: R.Object,
              icon: `effect`,
              buttonTitle: `Options`,
              hidden: ({ layoutType: e }) => e !== Y.Sidebar,
              optional: !0,
              controls: {
                opacity: { type: R.Number, defaultValue: 0.8, step: 0.1, min: 0, max: 1 },
                x: { type: R.Number, defaultValue: 0, min: -1e3, max: 1e3 },
                transition: { type: R.Transition },
              },
            },
          },
        },
        resultOptions: {
          title: `Results`,
          buttonTitle: `Fonts, Style`,
          type: R.Object,
          defaultValue: {},
          controls: {
            itemType: {
              title: `Style`,
              type: R.Enum,
              options: Object.values(Rt),
              optionTitles: Object.keys(Rt).map(H),
              defaultValue: Rt.FullWidth,
            },
            titleFont: {
              title: `Title`,
              type: R.Font,
              defaultValue: { fontSize: 15 },
              displayFontSize: !0,
            },
            titleColor: { title: `Color`, type: R.Color, defaultValue: `#333` },
            titleType: {
              title: `Content`,
              type: R.Enum,
              options: Object.values(J),
              optionTitles: Object.keys(J).map(H),
              defaultValue: J.H1,
              displaySegmentedControl: !0,
            },
            subtitleOptions: {
              type: R.Object,
              title: `Subtitle`,
              buttonTitle: `Font, Content`,
              controls: {
                subtitleFont: {
                  title: `Font`,
                  type: R.Font,
                  defaultValue: { fontSize: 13 },
                  displayFontSize: !0,
                },
                subtitleColor: {
                  title: `Color`,
                  type: R.Color,
                  defaultValue: `rgba(0, 0, 0, 0.4)`,
                },
                subtitleType: {
                  title: `Content`,
                  type: R.Enum,
                  options: Object.values(Lt),
                  optionTitles: Object.keys(Lt).map(H),
                  defaultValue: Lt.Path,
                },
              },
            },
          },
        },
        backdropOptions: {
          title: `Backdrop`,
          type: R.Object,
          buttonTitle: `Color, Z Index`,
          controls: {
            backgroundColor: { title: `Color`, type: R.Color, defaultValue: `rgba(0, 0, 0, 0.8)` },
            zIndex: {
              title: `Z Index`,
              type: R.Number,
              defaultValue: 10,
              displayStepper: !0,
              min: 0,
              max: 10,
            },
            transition: { type: R.Transition },
          },
        },
      }),
      (Z.displayName = `Search`));
  }))();
}
function Q(e, t) {
  for (; t; ) {
    let n = $t[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function Zt(e) {
  let t = [];
  for (; e; ) {
    let n = $t[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function Qt(e) {
  let t = Zt(e);
  if (t) throw t;
}
var $t;
function en() {
  return (en = e(() => {
    (M(), ($t = { AYmst8Nt3: new ce(() => import("./yEZq_gVss-0.BOhLqmiH.mjs?v=20261116-migration-v2")) }));
  }))();
}
function tn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, $;
function mn() {
  return (mn = e(() => {
    (g(),
      M(),
      O(),
      s(),
      Xt(),
      en(),
      (nn = N(Z)),
      (rn = [`eTNbzre9v`, `yYPwMz9ND`, `TGC6WUJdU`]),
      (an = `framer-14VvN`),
      (on = {
        eTNbzre9v: `framer-v-ut9wru`,
        TGC6WUJdU: `framer-v-df1jnq`,
        yYPwMz9ND: `framer-v-val8vu`,
      }),
      (sn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (cn = (e, t) => `translateY(-50%) ${t}`),
      (ln = ({ value: e, children: t }) => {
        let n = c(w),
          r = e ?? n.transition,
          a = i(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return /*#__PURE__*/ y(w.Provider, { value: a, children: t });
      }),
      (un = { Blog: `eTNbzre9v`, Career: `yYPwMz9ND`, Event: `TGC6WUJdU` }),
      (dn = T.create(l)),
      (fn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: un[r.variant] ?? r.variant ?? `eTNbzre9v`,
      })),
      (pn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = re(
        /* @__PURE__ */ _(function (e, t) {
          let n = u(null),
            i = t ?? n,
            a = r(),
            { activeLocale: o, contentLocale: s, setLocale: c } = le();
          F();
          let { style: d, className: f, layoutId: p, variant: m, ...h } = fn(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: E,
              variants: D,
            } = j({
              cycleOrder: rn,
              defaultVariant: `eTNbzre9v`,
              ref: i,
              variant: m,
              variantClassNames: on,
            }),
            O = pn(e, D),
            A = ne(an);
          Qt(o);
          let re = () => ![`yYPwMz9ND`, `TGC6WUJdU`].includes(g),
            M = se(),
            N = () => !![`yYPwMz9ND`, `TGC6WUJdU`].includes(g);
          return /*#__PURE__*/ y(ee, {
            id: p ?? a,
            children: /*#__PURE__*/ y(dn, {
              animate: D,
              initial: !1,
              children: /*#__PURE__*/ y(ln, {
                value: sn,
                children: /*#__PURE__*/ b(T.div, {
                  ...h,
                  ...x,
                  className: ne(A, `framer-ut9wru`, f, _),
                  "data-border": !0,
                  "data-framer-name": `Blog`,
                  layoutDependency: O,
                  layoutId: `eTNbzre9v`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `2px`,
                    "--border-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                    "--border-left-width": `2px`,
                    "--border-right-width": `2px`,
                    "--border-style": `solid`,
                    "--border-top-width": `2px`,
                    borderBottomLeftRadius: 74,
                    borderBottomRightRadius: 74,
                    borderTopLeftRadius: 74,
                    borderTopRightRadius: 74,
                    ...d,
                  },
                  ...tn(
                    {
                      TGC6WUJdU: { "data-framer-name": `Event` },
                      yYPwMz9ND: { "data-framer-name": `Career` },
                    },
                    g,
                    S
                  ),
                  children: [
                    /*#__PURE__*/ y(k, {
                      __fromCanvasComponent: !0,
                      children:
                        Q(`v0`, s) ??
                        /*#__PURE__*/ y(l, {
                          children: /*#__PURE__*/ y(T.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `R0Y7SUJNIFBsZXggTW9uby0zMDA=`,
                              "--framer-font-family": `"IBM Plex Mono"`,
                              "--framer-font-size": `18px`,
                              "--framer-font-style": `normal`,
                              "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                              "--framer-font-weight": `300`,
                              "--framer-line-height": `150%`,
                              "--framer-text-alignment": `left`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-20d2fcb2-0461-4276-8cb7-bceba71c36c9, rgb(5, 11, 20)))`,
                            },
                            children: /*#__PURE__*/ y(T.span, {
                              style: {
                                "--font-selector": `R0Y7SUJNIFBsZXggTW9uby0zMDA=`,
                                "--framer-font-family": `"IBM Plex Mono"`,
                                "--framer-font-size": `18px`,
                                "--framer-font-style": `normal`,
                                "--framer-font-variation-axes": `var(--extracted-1asg273, normal)`,
                                "--framer-font-weight": `300`,
                                "--framer-text-color": `var(--extracted-1w3ko1f, var(--token-20d2fcb2-0461-4276-8cb7-bceba71c36c9, rgb(5, 11, 20)))`,
                              },
                              children: `搜索…`,
                            }),
                          }),
                        }),
                      className: `framer-1d4g4b8`,
                      "data-framer-name": `Paragraph`,
                      fonts: [`GF;IBM Plex Mono-300`],
                      layoutDependency: O,
                      layoutId: `UQ3ZsUGbA`,
                      style: {
                        "--extracted-1asg273": `normal`,
                        "--extracted-1w3ko1f": `var(--token-20d2fcb2-0461-4276-8cb7-bceba71c36c9, rgb(5, 11, 20))`,
                        "--extracted-2gg91v": `normal`,
                        "--extracted-r6o4lv": `var(--token-20d2fcb2-0461-4276-8cb7-bceba71c36c9, rgb(5, 11, 20))`,
                        "--framer-paragraph-spacing": `0px`,
                      },
                      transformTemplate: cn,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    /*#__PURE__*/ y(T.div, {
                      className: `framer-1worf2f`,
                      "data-framer-name": `Search`,
                      layoutDependency: O,
                      layoutId: `HQcZnRRG0`,
                      style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                      transformTemplate: cn,
                      children: /*#__PURE__*/ y(te, {
                        className: `framer-1l8l0d3`,
                        "data-framer-name": `Vector`,
                        fill: `rgba(0,0,0,1)`,
                        intrinsicHeight: 15,
                        intrinsicWidth: 15,
                        layoutDependency: O,
                        layoutId: `Gkit5cve7`,
                        svg: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 13.7931L10.7239 10.017C11.6313 8.9277 12.0838 7.5305 11.9872 6.11608C11.8907 4.70165 11.2525 3.37891 10.2055 2.423C9.15855 1.4671 7.78335 0.951637 6.366 0.983845C4.94865 1.01605 3.59828 1.59345 2.59581 2.59593C1.59333 3.5984 1.01593 4.94877 0.983723 6.36612C0.951515 7.78347 1.46698 9.15867 2.42288 10.2057C3.37879 11.2526 4.70153 11.8908 6.11596 11.9873C7.53038 12.0839 8.92758 11.6314 10.0169 10.7241L13.7929 14.5001L14.5 13.7931ZM2 6.50012C2 5.6101 2.26392 4.74007 2.75838 4.00005C3.25285 3.26003 3.95565 2.68325 4.77792 2.34266C5.60019 2.00207 6.50499 1.91295 7.3779 2.08658C8.25082 2.26022 9.05264 2.6888 9.68198 3.31814C10.3113 3.94747 10.7399 4.7493 10.9135 5.62221C11.0872 6.49513 10.998 7.39993 10.6575 8.22219C10.3169 9.04446 9.74008 9.74726 9.00006 10.2417C8.26004 10.7362 7.39001 11.0001 6.5 11.0001C5.30693 10.9988 4.1631 10.5243 3.31948 9.68064C2.47585 8.83701 2.00132 7.69319 2 6.50012Z" fill="#161616"/>
</svg>
`,
                        withExternalLayout: !0,
                      }),
                    }),
                    re() &&
                      /*#__PURE__*/ y(oe, {
                        children: /*#__PURE__*/ y(L, {
                          className: `framer-14rt1kp-container`,
                          "data-framer-name": `Blog`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: O,
                          layoutId: `QCRKFrHcZ-container`,
                          name: `Blog`,
                          nodeId: `QCRKFrHcZ`,
                          rendersWithMotion: !0,
                          scopeId: `yEZq_gVss`,
                          children: /*#__PURE__*/ y(Z, {
                            backdropOptions: {
                              backgroundColor: `rgba(0, 0, 0, 0.8)`,
                              transition: {
                                damping: 60,
                                delay: 0,
                                mass: 1,
                                stiffness: 500,
                                type: `spring`,
                              },
                              zIndex: 10,
                            },
                            height: `100%`,
                            iconColor: `rgba(51, 51, 51, 0)`,
                            iconSize: 24,
                            iconType: `default`,
                            id: `QCRKFrHcZ`,
                            inputOptions: {
                              clearButtonText: Q(`v2`, s) ?? `Clear`,
                              clearButtonType: `icon`,
                              dividerType: `fullWidth`,
                              iconOptions: {
                                iconColor: `rgba(0, 0, 0, 0.45)`,
                                iconSize: 18,
                                iconType: `default`,
                              },
                              inputFont: {},
                              placeholderOptions: {
                                placeholderColor: `rgba(0, 0, 0, 0.4)`,
                                placeholderText: Q(`v1`, s) ?? `Search...`,
                              },
                              textColor: `rgb(51, 51, 51)`,
                            },
                            layoutId: `QCRKFrHcZ`,
                            modalOptions: {
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderRadius: 16,
                              heightIsStatic: !0,
                              heightTransition: {
                                damping: 60,
                                delay: 0,
                                mass: 1,
                                stiffness: 800,
                                type: `spring`,
                              },
                              layoutType: `QuickMenu`,
                              shadow: {
                                blur: 40,
                                color: `rgba(0, 0, 0, 0.2)`,
                                spread: 0,
                                x: 0,
                                y: 20,
                              },
                              top: 0,
                              width: 500,
                            },
                            name: `Blog`,
                            resultOptions: {
                              itemType: `fullWidth`,
                              subtitleOptions: {
                                subtitleColor: `rgba(0, 0, 0, 0.4)`,
                                subtitleFont: {
                                  fontFamily: `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                  fontSize: `13px`,
                                  fontStyle: `normal`,
                                  fontWeight: 300,
                                },
                                subtitleType: `path`,
                              },
                              titleColor: `rgb(51, 51, 51)`,
                              titleFont: {},
                              titleType: `h1`,
                            },
                            style: { height: `100%`, width: `100%` },
                            urlScope: P({ webPageId: `RltDUtwQC` }, M),
                            width: `100%`,
                          }),
                        }),
                      }),
                    N() &&
                      /*#__PURE__*/ y(oe, {
                        children: /*#__PURE__*/ y(L, {
                          className: `framer-9s5pew-container`,
                          "data-framer-name": `Career`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: O,
                          layoutId: `II6O8FXc2-container`,
                          name: `Career`,
                          nodeId: `II6O8FXc2`,
                          rendersWithMotion: !0,
                          scopeId: `yEZq_gVss`,
                          children: /*#__PURE__*/ y(Z, {
                            backdropOptions: {
                              backgroundColor: `rgba(0, 0, 0, 0.8)`,
                              transition: {
                                damping: 60,
                                delay: 0,
                                mass: 1,
                                stiffness: 500,
                                type: `spring`,
                              },
                              zIndex: 10,
                            },
                            height: `100%`,
                            iconColor: `rgba(10, 1, 1, 0)`,
                            iconSize: 24,
                            iconType: `default`,
                            id: `II6O8FXc2`,
                            inputOptions: {
                              clearButtonText: Q(`v2`, s) ?? `Clear`,
                              clearButtonType: `icon`,
                              dividerType: `fullWidth`,
                              iconOptions: {
                                iconColor: `rgba(0, 0, 0, 0.45)`,
                                iconSize: 18,
                                iconType: `default`,
                              },
                              inputFont: {},
                              placeholderOptions: {
                                placeholderColor: `rgba(0, 0, 0, 0.4)`,
                                placeholderText: Q(`v1`, s) ?? `Search...`,
                              },
                              textColor: `rgba(51, 51, 51, 0)`,
                            },
                            layoutId: `II6O8FXc2`,
                            modalOptions: {
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderRadius: 16,
                              heightIsStatic: !0,
                              heightTransition: {
                                damping: 60,
                                delay: 0,
                                mass: 1,
                                stiffness: 800,
                                type: `spring`,
                              },
                              layoutType: `QuickMenu`,
                              shadow: {
                                blur: 40,
                                color: `rgba(0, 0, 0, 0.2)`,
                                spread: 0,
                                x: 0,
                                y: 20,
                              },
                              top: 0,
                              width: 500,
                            },
                            name: `Career`,
                            resultOptions: {
                              itemType: `fullWidth`,
                              subtitleOptions: {
                                subtitleColor: `rgba(0, 0, 0, 0.4)`,
                                subtitleFont: {},
                                subtitleType: `path`,
                              },
                              titleColor: `rgb(51, 51, 51)`,
                              titleFont: {},
                              titleType: `h1`,
                            },
                            style: { height: `100%`, width: `100%` },
                            urlScope: P({ webPageId: `k30EjSOVy` }, M),
                            width: `100%`,
                            ...tn(
                              { TGC6WUJdU: { urlScope: P({ webPageId: `nAtM7b5eV` }, M) } },
                              g,
                              S
                            ),
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-14VvN.framer-1mi8wem, .framer-14VvN .framer-1mi8wem { display: block; }`,
          `.framer-14VvN.framer-ut9wru { height: 43px; overflow: hidden; position: relative; width: 406px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-14VvN .framer-1d4g4b8 { flex: none; height: auto; left: 43px; position: absolute; top: 49%; white-space: pre-wrap; width: 85px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-14VvN .framer-1worf2f { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; overflow: hidden; position: absolute; right: 23px; top: 51%; width: 25px; }`,
          `.framer-14VvN .framer-1l8l0d3 { bottom: 2px; flex: none; left: 0px; position: absolute; right: 2px; top: 0px; }`,
          `.framer-14VvN .framer-14rt1kp-container { bottom: 0px; cursor: pointer; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
          `.framer-14VvN .framer-9s5pew-container { bottom: 0px; cursor: text; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
          `.framer-14VvN[data-border="true"]::after, .framer-14VvN [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-14VvN`
      )),
      ($.displayName = `search blog bar`),
      ($.defaultProps = { height: 43, width: 406 }),
      A($, {
        variant: {
          options: [`eTNbzre9v`, `yYPwMz9ND`, `TGC6WUJdU`],
          optionTitles: [`Blog`, `Career`, `Event`],
          title: `Variant`,
          type: R.Enum,
        },
      }),
      I(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `IBM Plex Mono`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `IBM Plex Mono`,
                url: `https://fonts.gstatic.com/s/ibmplexmono/v20/-F6qfjptAgt5VM-kVkqdyU8n3oQI8lJPg-IUDNg.woff2`,
                weight: `300`,
              },
              {
                cssFamilyName: `IBM Plex Sans`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `IBM Plex Sans`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `300`,
              },
            ],
          },
          ...nn,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { mn as n, $ as t };
//# sourceMappingURL=yEZq_gVss.DlMkx0Rd.mjs.map
