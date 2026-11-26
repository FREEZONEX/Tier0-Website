import UpdatedPricingTable from "./Tier0PricingTable.zh.mjs?v=20261126-pricing-header";
import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  D as t,
  F as n,
  H as r,
  O as i,
  P as a,
  R as o,
  S as s,
  U as c,
  V as l,
  a as u,
  c as d,
  l as f,
  m as ee,
  o as te,
  s as p,
  u as m,
  x as h,
  y as g,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { S as ne, Yi as _, t as v, v as y } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import {
  At as b,
  D as re,
  E as ie,
  Et as x,
  G as ae,
  I as S,
  It as C,
  M as oe,
  P as w,
  Pt as T,
  Q as E,
  Rt as D,
  St as se,
  U as O,
  a as k,
  bt as ce,
  gt as le,
  j as ue,
  jt as de,
  lt as fe,
  m as pe,
  o as A,
  s as j,
  v as me,
  w as M,
  wt as he,
  yt as ge,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { n as _e, t as N } from "./ShimmerGrid_Prod.D8QXYPOQ.mjs?v=20261116-migration-v2";
import { m as P, n as ve, p as ye, t as F } from "./shared-lib.CHy_rbfQ.mjs?v=20261116-migration-v2";
import { i as I, n as be, r as xe, t as Se } from "./F3NdZsOi7.BZcXtl7q.mjs?v=20261116-migration-v2";
import { n as L, t as Ce } from "./b6D6eMBMO.CW6ctkzX.mjs?v=20261116-migration-v2";
import { n as we, t as Te } from "./O2sCN9yxq.5YGffmfa.mjs?v=20261116-migration-v2";
import { n as Ee, r as De } from "./OYGu2SDQ6.BcRygrbR.mjs?v=20261116-migration-v2";
function Oe() {
  if (c === void 0) return null;
  let e = (location.hostname || ``).replace(/^www\./, ``).toLowerCase();
  return e === `tier0.cn` || e.endsWith(`.tier0.cn`)
    ? `zh`
    : e === `tier0.dev` || e.endsWith(`.tier0.dev`)
      ? `en`
      : null;
}
function ke() {
  if (c === void 0) return `en`;
  let e = Oe();
  if (e) return e;
  if (/^\/zh(-|\/|$)/i.test(location.pathname)) return `zh`;
  let t = (document.documentElement.lang || ``).toLowerCase();
  return t.startsWith(`zh`)
    ? `zh`
    : t.startsWith(`en`)
      ? `en`
      : (r.language || ``).toLowerCase().startsWith(`zh`)
        ? `zh`
        : `en`;
}
function Ae(e) {
  let t = Oe();
  return Be[t ?? e];
}
function je(e) {
  let [t, n] = g(() => (e === `auto` ? ke() : e === `zh` ? `zh` : `en`));
  return (
    h(() => {
      if (e !== `auto`) {
        n(e);
        return;
      }
      let t = () => n(ke());
      t();
      let r = new MutationObserver(t);
      return (
        r.observe(document.documentElement, { attributes: !0, attributeFilter: [`lang`] }),
        addEventListener(`popstate`, t),
        () => {
          (r.disconnect(), removeEventListener(`popstate`, t));
        }
      );
    }, [e]),
    t
  );
}
function Me(e) {
  let [t, n] = g(Re.desktop);
  return (
    h(() => {
      if (!e.current || typeof ResizeObserver > `u`) return;
      let t = new ResizeObserver(([e]) => n(e.contentRect.width));
      return (t.observe(e.current), () => t.disconnect());
    }, []),
    t
  );
}
function Ne(e, t = 500) {
  let [n, r] = g(e),
    i = s(e);
  return (
    h(() => {
      let n = i.current,
        a = performance.now();
      if (n === e) return;
      let o = 0,
        s = (c) => {
          let l = Math.min(1, (c - a) / t),
            u = 1 - (1 - l) ** 3;
          (r(n + (e - n) * u), l < 1 ? (o = requestAnimationFrame(s)) : (i.current = e));
        };
      return (
        (o = requestAnimationFrame(s)),
        () => {
          (cancelAnimationFrame(o), (i.current = e));
        }
      );
    }, [e]),
    n
  );
}
function Pe({ kind: e, size: t = 14 }) {
  return /*#__PURE__*/ p(`svg`, {
    width: t,
    height: t,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `2`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    style: { flexShrink: 0 },
    children:
      e === `builder`
        ? /*#__PURE__*/ m(f, {
            children: [
              /*#__PURE__*/ p(`rect`, { width: `7`, height: `7`, x: `14`, y: `3`, rx: `1` }),
              /*#__PURE__*/ p(`path`, {
                d: `M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3`,
              }),
            ],
          })
        : /*#__PURE__*/ m(f, {
            children: [
              /*#__PURE__*/ p(`circle`, { cx: `12`, cy: `12`, r: `10` }),
              /*#__PURE__*/ p(`path`, { d: `M10 8l6 4-6 4z` }),
            ],
          }),
  });
}
function R({ children: e, delay: t = 0, style: n }) {
  let r = s(null),
    [i, a] = g(!1);
  return (
    h(() => {
      let e = r.current;
      if (!e || typeof IntersectionObserver > `u`) return a(!0);
      let t = new IntersectionObserver(
        ([e]) => {
          e.isIntersecting && (a(!0), t.disconnect());
        },
        { threshold: 0.1 }
      );
      return (t.observe(e), () => t.disconnect());
    }, []),
    /*#__PURE__*/ p(`div`, {
      ref: r,
      className: `t0p-rv ${i ? `on` : ``}`,
      style: { transitionDelay: `${t}ms`, ...n },
      children: e,
    })
  );
}
function Fe({ text: e, href: t, more: n }) {
  let r = s(null),
    i = s(0),
    [a, o] = g(null),
    l = () => {
      clearTimeout(i.current);
      let e = r.current?.getBoundingClientRect();
      e &&
        o({
          x: Math.min(Math.max(e.left + e.width / 2, 140), c.innerWidth - 140),
          y: e.bottom + 8,
        });
    },
    d = () => {
      (clearTimeout(i.current), (i.current = setTimeout(() => o(null), 160)));
    };
  return (
    h(() => {
      if (!a) return;
      let e = () => o(null);
      return (addEventListener(`scroll`, e, !0), () => removeEventListener(`scroll`, e, !0));
    }, [a]),
    e
      ? /*#__PURE__*/ m(f, {
          children: [
            /*#__PURE__*/ p(`button`, {
              ref: r,
              type: `button`,
              "aria-label": e,
              className: `t0p-i`,
              "data-open": +!!a,
              onMouseEnter: l,
              onMouseLeave: d,
              onFocus: l,
              onBlur: d,
              onClick: () => (a ? o(null) : l()),
              style: {
                display: `inline-flex`,
                border: `none`,
                background: `transparent`,
                padding: 2,
                margin: 0,
                cursor: `help`,
                flexShrink: 0,
              },
              children: /*#__PURE__*/ m(`svg`, {
                width: `14`,
                height: `14`,
                viewBox: `0 0 16 16`,
                fill: `none`,
                children: [
                  /*#__PURE__*/ p(`circle`, {
                    cx: `8`,
                    cy: `8`,
                    r: `6.5`,
                    stroke: `currentColor`,
                    strokeWidth: `1.2`,
                  }),
                  /*#__PURE__*/ p(`path`, {
                    d: `M8 7.2v3.6M8 5.2v.01`,
                    stroke: `currentColor`,
                    strokeWidth: `1.4`,
                    strokeLinecap: `round`,
                  }),
                ],
              }),
            }),
            a &&
              typeof document < `u` &&
              /*#__PURE__*/ u(
                /*#__PURE__*/ m(`div`, {
                  role: `tooltip`,
                  className: `t0p-tip`,
                  onMouseEnter: l,
                  onMouseLeave: d,
                  style: {
                    position: `fixed`,
                    left: a.x,
                    top: a.y,
                    transform: `translate(-50%,0)`,
                    zIndex: 9999,
                    width: 260,
                    padding: `12px 14px`,
                    borderRadius: 4,
                    background: U.tint,
                    border: `1px solid ${U.tintLine}`,
                    color: U.text,
                    fontFamily: B,
                    fontSize: 13,
                    lineHeight: 1.6,
                    boxShadow: `0 12px 28px -12px rgba(17,17,17,.18)`,
                    textAlign: `left`,
                  },
                  children: [
                    e,
                    t &&
                      /*#__PURE__*/ m(`a`, {
                        className: `t0p-more`,
                        href: t,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        style: {
                          display: `block`,
                          textAlign: `right`,
                          marginTop: 10,
                          fontFamily: H,
                          fontSize: 12,
                          color: U.greenDeep,
                          textDecoration: `none`,
                        },
                        children: [
                          n,
                          ` `,
                          /*#__PURE__*/ p(`span`, { className: `ar`, children: `↗` }),
                        ],
                      }),
                  ],
                }),
                document.body
              ),
          ],
        })
      : null
  );
}
function Ie({ p: e, sym: t, mobile: n }) {
  let r = Ne(e.num ?? 0);
  return /*#__PURE__*/ m(`div`, {
    children: [
      /*#__PURE__*/ m(`div`, {
        style: { display: `flex`, alignItems: `baseline`, gap: 6 },
        children: [
          /*#__PURE__*/ p(`span`, {
            style: {
              fontFamily: V,
              fontSize: n ? 32 : 40,
              fontWeight: 500,
              letterSpacing: -1.2,
              lineHeight: 1.1,
              fontVariantNumeric: `tabular-nums`,
            },
            children: e.num === void 0 ? e.big : Y(r, t),
          }),
          e.unit &&
            /*#__PURE__*/ p(
              `span`,
              { className: `t0p-in`, style: { fontSize: 14, color: U.sub }, children: e.unit },
              e.unit
            ),
        ],
      }),
      /*#__PURE__*/ p(
        `div`,
        {
          className: `t0p-in`,
          style: { fontSize: 13, color: U.sub, marginTop: 6, minHeight: 20 },
          children: e.note,
        },
        e.note
      ),
    ],
  });
}
function Le(e) {
  let {
      language: t,
      defaultCycle: n,
      defaultProduct: r,
      salesEmail: i,
      stickyOffset: a = 64,
      edgeUrl: l = `https://github.com/FREEZONEX/Tier0-Edge`,
    } = e,
    [u, d] = g({}),
    [ee, te] = g(null),
    h = je(t),
    ne = Ae(h),
    _ = s(null),
    v = Me(_),
    y = v >= Re.desktop - 120 ? 4 : v >= Re.tablet - 120 ? 2 : 1,
    b = y === 1,
    [re, ie] = g(n),
    [x, ae] = g(r),
    S = (e) => e[h],
    C = h === `zh` ? ze.cny : ze.usd,
    oe = (e) => He[e],
    w = (e) => (Ve[e] ? X(S(Ve[e]), { seat: C.seat, packs: C.packs }) : ``),
    T = `mailto:${i}?subject=${encodeURIComponent(h === `zh` ? `Tier0 套餐咨询` : `Tier0 Pricing`)}`,
    E = x === `cloud` ? 1 : -1,
    D = (e, t, n = !1, r = !1) =>
      /*#__PURE__*/ m(`a`, {
        className: `t0p-btn ${n ? `p` : `g`}${r ? ` sm` : ``}`,
        href: e,
        target: e.startsWith(`mailto:`) ? void 0 : `_blank`,
        rel: `noopener noreferrer`,
        style: {
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          gap: 6,
          height: 40,
          borderRadius: 4,
          fontSize: 14,
          fontWeight: 500,
          textDecoration: `none`,
        },
        children: [t, /*#__PURE__*/ p(`span`, { className: `ar`, children: `↗` })],
      }),
    se = (e, t, n) => {
      let r = n.findIndex(([t]) => t === e);
      return /*#__PURE__*/ m(`div`, {
        className: `t0p-seg`,
        role: `radiogroup`,
        style: {
          position: `relative`,
          display: `grid`,
          gridTemplateColumns: `repeat(${n.length}, 1fr)`,
          padding: 3,
          borderRadius: 4,
          background: U.muted,
        },
        children: [
          /*#__PURE__*/ p(`span`, {
            style: {
              position: `absolute`,
              top: 3,
              bottom: 3,
              left: 3,
              width: `calc((100% - 6px) / ${n.length})`,
              borderRadius: 3,
              background: U.bg,
              boxShadow: `0 1px 2px rgba(17,17,17,.08)`,
              transform: `translateX(${r * 100}%)`,
              transition: `transform .45s ${W}`,
            },
          }),
          n.map(([n, r]) =>
            /*#__PURE__*/ p(
              `button`,
              {
                role: `radio`,
                "aria-checked": e === n,
                onClick: () => t(n),
                style: {
                  position: `relative`,
                  border: `none`,
                  background: `transparent`,
                  cursor: `pointer`,
                  height: 32,
                  padding: `0 16px`,
                  fontFamily: B,
                  fontSize: 14,
                  fontWeight: 500,
                  color: e === n ? U.text : U.sub,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  gap: 6,
                  whiteSpace: `nowrap`,
                },
                children: r,
              },
              n
            )
          ),
        ],
      });
    },
    O = () =>
      /*#__PURE__*/ p(`span`, {
        style: {
          fontSize: 12,
          lineHeight: `18px`,
          padding: `0 8px`,
          borderRadius: 4,
          background: U.tint,
          color: U.greenDeep,
          whiteSpace: `nowrap`,
        },
        children: S(G.soon),
      }),
    k = ({ hl: e }) =>
      /*#__PURE__*/ p(`span`, {
        style: {
          display: `inline-flex`,
          alignItems: `center`,
          justifyContent: `center`,
          width: 18,
          height: 18,
          borderRadius: 3,
          flexShrink: 0,
          background: e ? U.limeSoft : U.muted,
        },
        children: /*#__PURE__*/ p(`svg`, {
          width: `11`,
          height: `11`,
          viewBox: `0 0 14 14`,
          children: /*#__PURE__*/ p(`path`, {
            d: `M2.5 7.5l3 3 6-7`,
            fill: `none`,
            stroke: e ? U.greenDeep : U.text,
            strokeWidth: `1.8`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
          }),
        }),
      }),
    ce = (e) => {
      if (e === `trial`) return { big: S(G.free), note: S(G.trialNote) };
      if (e === `scale`) return { big: S(G.custom), note: S(G.scaleNote) };
      let [t, n, r] = C[e];
      return re === `monthly`
        ? { big: Y(t, C.s), num: t, unit: S(G.mo), note: X(S(G.then), { v: Y(n, C.s) }) }
        : { big: Y(r, C.s), num: r, unit: S(G.yr), note: X(S(G.perMo), { v: Y(r / 12, C.s) }) };
    },
    le = (e) =>
      e === `trial`
        ? D(ne, S(G.trial))
        : e === `scale`
          ? D(T, S(G.sales))
          : D(ne, S(G.start), e === `growth`),
    ue = (e, t, n, r, i, a, o) =>
      /*#__PURE__*/ p(
        R,
        {
          delay: e * 60,
          style: { background: U.bg, display: `flex` },
          children: /*#__PURE__*/ m(`div`, {
            className: `t0p-col`,
            style: {
              position: `relative`,
              flex: 1,
              display: `flex`,
              flexDirection: `column`,
              padding: b ? 20 : 24,
            },
            children: [
              /*#__PURE__*/ m(`div`, {
                style: {
                  position: `relative`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `space-between`,
                  gap: 8,
                  minHeight: 26,
                },
                children: [
                  /*#__PURE__*/ m(`span`, {
                    style: { fontFamily: V, fontSize: 22, fontWeight: 500, letterSpacing: -0.3 },
                    children: [
                      /*#__PURE__*/ p(`span`, {
                        className: `t0p-hash`,
                        style: { color: U.mute, marginRight: 6 },
                        children: `#`,
                      }),
                      t,
                    ],
                  }),
                  a &&
                    /*#__PURE__*/ m(`span`, {
                      style: {
                        display: `inline-flex`,
                        alignItems: `center`,
                        gap: 6,
                        fontFamily: H,
                        fontSize: 12,
                        color: U.greenDeep,
                        padding: `2px 8px`,
                        borderRadius: 4,
                        background: U.limeSoft,
                      },
                      children: [
                        /*#__PURE__*/ p(`span`, {
                          style: { width: 6, height: 6, background: U.lime },
                        }),
                        S(G.popular),
                      ],
                    }),
                ],
              }),
              /*#__PURE__*/ p(`span`, {
                style: { position: `relative`, fontSize: 14, color: U.sub, marginTop: 6 },
                children: n,
              }),
              /*#__PURE__*/ p(`div`, { style: { marginTop: b ? 20 : 32 }, children: r }),
              /*#__PURE__*/ p(`div`, { style: { marginTop: 20 }, children: i }),
              o,
            ],
          }),
        },
        t
      ),
    de = (e) =>
      /*#__PURE__*/ m(`div`, {
        style: { marginTop: 24, paddingTop: 20, borderTop: `1px solid ${U.line}` },
        children: [
          /*#__PURE__*/ p(`div`, {
            style: { fontSize: 13, color: U.sub, marginBottom: 6 },
            children: e.from ? X(S(G.plus), { v: e.from }) : S(G.includes),
          }),
          e.features.map((e) =>
            /*#__PURE__*/ m(
              `div`,
              {
                className: `t0p-li`,
                style: {
                  display: `flex`,
                  alignItems: `center`,
                  gap: 10,
                  padding: `7px 0`,
                  fontSize: 14,
                },
                children: [
                  /*#__PURE__*/ p(k, {}),
                  /*#__PURE__*/ m(`span`, {
                    style: { flex: 1, display: `inline-flex`, alignItems: `center`, gap: 8 },
                    children: [S(e.text), e.soon && O()],
                  }),
                  /*#__PURE__*/ p(Fe, { text: w(e.k), href: oe(e.k), more: S(G.more) }),
                ],
              },
              e.text.en
            )
          ),
        ],
      }),
    fe = {
      display: `grid`,
      gridTemplateColumns: `repeat(${y}, minmax(0, 1fr))`,
      gap: 1,
      background: U.line,
      border: `1px solid ${U.line}`,
      borderRadius: 4,
      overflow: `hidden`,
    },
    pe = () =>
      /*#__PURE__*/ p(`span`, {
        "aria-label": `included`,
        style: {
          display: `inline-flex`,
          alignItems: `center`,
          justifyContent: `center`,
          width: 22,
          height: 22,
          borderRadius: `50%`,
          background: U.lime,
        },
        children: /*#__PURE__*/ p(`svg`, {
          width: `12`,
          height: `12`,
          viewBox: `0 0 14 14`,
          children: /*#__PURE__*/ p(`path`, {
            d: `M2.5 7.5l3 3 6-7`,
            fill: `none`,
            stroke: U.text,
            strokeWidth: `2`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
          }),
        }),
      }),
    A = () =>
      /*#__PURE__*/ p(`span`, {
        "aria-label": `not included`,
        style: {
          display: `inline-flex`,
          alignItems: `center`,
          justifyContent: `center`,
          width: 22,
          height: 22,
          borderRadius: `50%`,
          background: U.line,
        },
        children: /*#__PURE__*/ p(`svg`, {
          width: `10`,
          height: `10`,
          viewBox: `0 0 10 10`,
          children: /*#__PURE__*/ p(`path`, {
            d: `M2 5h6`,
            stroke: U.faint,
            strokeWidth: `1.8`,
            strokeLinecap: `round`,
          }),
        }),
      }),
    j = () =>
      /*#__PURE__*/ p(`svg`, {
        className: `t0p-chev`,
        width: `14`,
        height: `14`,
        viewBox: `0 0 16 16`,
        fill: `none`,
        style: { flexShrink: 0 },
        children: /*#__PURE__*/ p(`path`, {
          d: `M6 3.5L10.5 8 6 12.5`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
        }),
      }),
    me = (e) =>
      e === `builder` || e === `operator`
        ? /*#__PURE__*/ p(`span`, {
            style: { display: `inline-flex`, color: U.sub },
            children: /*#__PURE__*/ p(Pe, { kind: e }),
          })
        : null,
    M = (e, t, n, r) => {
      let i = b ? 12 : 24,
        s = b ? 14 : 15,
        c = {
          padding: `16px ${i}px 18px`,
          fontWeight: 500,
          fontSize: 16,
          textAlign: `center`,
          verticalAlign: `bottom`,
          background: U.bg,
          position: `sticky`,
          top: a,
          zIndex: 3,
          borderBottom: `1px solid ${U.line}`,
        },
        l = {
          padding: `16px ${i}px`,
          fontSize: s,
          textAlign: `center`,
          borderBottom: `1px solid ${U.line}`,
          verticalAlign: `top`,
          background: U.bg,
          lineHeight: 1.5,
        },
        f = { ...l, textAlign: `left`, position: `sticky`, left: 0, zIndex: 1 },
        h = (e) =>
          e === !0
            ? /*#__PURE__*/ p(pe, {})
            : e === !1
              ? /*#__PURE__*/ p(A, {})
              : /*#__PURE__*/ p(`span`, {
                  style: { display: `inline-block`, minHeight: 22 },
                  children: typeof e == `string` ? e : S(e),
                });
      return /*#__PURE__*/ m(`div`, {
        style: { overflowX: b ? `auto` : `visible`, marginTop: b ? 56 : 96 },
        children: [
          /*#__PURE__*/ m(`h3`, {
            style: {
              fontFamily: V,
              fontSize: b ? 28 : 40,
              fontWeight: 400,
              letterSpacing: -0.8,
              margin: `0 0 28px`,
            },
            children: [
              /*#__PURE__*/ p(`span`, { style: { color: U.lime, marginRight: 10 }, children: `#` }),
              S(G.compare),
            ],
          }),
          /*#__PURE__*/ m(`table`, {
            style: {
              width: `100%`,
              minWidth: b ? 560 : 0,
              borderCollapse: `separate`,
              borderSpacing: 0,
              tableLayout: `fixed`,
            },
            children: [
              /*#__PURE__*/ m(`colgroup`, {
                children: [
                  /*#__PURE__*/ p(`col`, {
                    style: { width: b ? 170 : `${100 / (t.length + 1)}%` },
                  }),
                  t.map((e, t) => /*#__PURE__*/ p(`col`, {}, t)),
                ],
              }),
              /*#__PURE__*/ p(`thead`, {
                children: /*#__PURE__*/ m(`tr`, {
                  children: [
                    /*#__PURE__*/ p(`th`, {
                      style: {
                        ...c,
                        textAlign: `left`,
                        left: 0,
                        zIndex: 4,
                        fontSize: s,
                        color: U.sub,
                      },
                      children: S(G.features),
                    }),
                    t.map((e, t) =>
                      /*#__PURE__*/ m(
                        `th`,
                        {
                          style: c,
                          children: [
                            /*#__PURE__*/ m(`div`, {
                              style: { fontFamily: V, fontSize: b ? 17 : 20, fontWeight: 500 },
                              children: [
                                /*#__PURE__*/ p(`span`, {
                                  style: { color: t === E ? U.lime : U.mute, marginRight: 6 },
                                  children: `#`,
                                }),
                                e.name,
                              ],
                            }),
                            r &&
                              /*#__PURE__*/ p(
                                `div`,
                                {
                                  className: `t0p-in`,
                                  style: {
                                    marginTop: 4,
                                    fontSize: 13,
                                    fontWeight: 400,
                                    color: U.sub,
                                  },
                                  children: r[t],
                                },
                                r[t]
                              ),
                          ],
                        },
                        e.name
                      )
                    ),
                  ],
                }),
              }),
              /*#__PURE__*/ p(`tbody`, {
                children: n.map((n) => {
                  let r = e + n.title.en,
                    a = !!u[r];
                  return /*#__PURE__*/ m(
                    o,
                    {
                      children: [
                        /*#__PURE__*/ p(`tr`, {
                          className: `t0p-grp ${a ? `` : `t0p-open`}`,
                          onClick: () => d((e) => ({ ...e, [r]: !e[r] })),
                          "aria-expanded": !a,
                          children: /*#__PURE__*/ p(`td`, {
                            colSpan: t.length + 1,
                            style: {
                              padding: `${b ? 28 : 36}px ${i}px 14px`,
                              borderBottom: `1px solid ${U.line}`,
                              background: U.bg,
                              transition: `background .2s ease`,
                            },
                            children: /*#__PURE__*/ m(`span`, {
                              style: {
                                position: `sticky`,
                                left: i,
                                display: `flex`,
                                alignItems: `center`,
                                gap: 10,
                              },
                              children: [
                                /*#__PURE__*/ p(`span`, {
                                  style: { width: 8, height: 8, background: U.lime },
                                }),
                                /*#__PURE__*/ p(`span`, {
                                  style: {
                                    fontFamily: V,
                                    fontSize: b ? 17 : 19,
                                    fontWeight: 500,
                                    flex: 1,
                                  },
                                  children: S(n.title),
                                }),
                                /*#__PURE__*/ p(`span`, {
                                  style: { color: U.sub, display: `inline-flex` },
                                  children: /*#__PURE__*/ p(j, {}),
                                }),
                              ],
                            }),
                          }),
                        }),
                        !a &&
                          n.rows.map((t) => {
                            let n = e + t.k,
                              r = ee === n,
                              i = w(t.k),
                              a = oe(t.k);
                            return /*#__PURE__*/ m(
                              `tr`,
                              {
                                className: `t0p-row t0p-in ${r ? `t0p-open` : ``}`,
                                children: [
                                  /*#__PURE__*/ m(`td`, {
                                    style: f,
                                    children: [
                                      i
                                        ? /*#__PURE__*/ m(`button`, {
                                            type: `button`,
                                            className: `t0p-feat`,
                                            "aria-expanded": r,
                                            onClick: () => te(r ? null : n),
                                            style: {
                                              display: `flex`,
                                              alignItems: `center`,
                                              gap: 8,
                                              width: `100%`,
                                              padding: 0,
                                              border: `none`,
                                              background: `transparent`,
                                              fontFamily: B,
                                              fontSize: s,
                                              color: U.text,
                                              textAlign: `left`,
                                              minHeight: 22,
                                            },
                                            children: [
                                              /*#__PURE__*/ p(`span`, {
                                                style: { color: U.faint, display: `inline-flex` },
                                                children: /*#__PURE__*/ p(j, {}),
                                              }),
                                              me(t.k),
                                              S(t.label),
                                              t.soon && O(),
                                            ],
                                          })
                                        : /*#__PURE__*/ m(`div`, {
                                            style: {
                                              display: `flex`,
                                              alignItems: `center`,
                                              gap: 8,
                                              minHeight: 22,
                                              color: U.text,
                                            },
                                            children: [
                                              /*#__PURE__*/ p(`span`, { style: { width: 14 } }),
                                              me(t.k),
                                              S(t.label),
                                              t.soon && O(),
                                            ],
                                          }),
                                      i &&
                                        /*#__PURE__*/ p(`div`, {
                                          className: `t0p-desc`,
                                          children: /*#__PURE__*/ p(`div`, {
                                            style: { overflow: `hidden` },
                                            children: /*#__PURE__*/ m(`div`, {
                                              style: {
                                                padding: `8px 0 2px 22px`,
                                                fontSize: 13,
                                                color: U.sub,
                                                lineHeight: 1.6,
                                              },
                                              children: [
                                                i,
                                                a &&
                                                  /*#__PURE__*/ m(`a`, {
                                                    className: `t0p-more`,
                                                    href: a,
                                                    target: `_blank`,
                                                    rel: `noopener noreferrer`,
                                                    style: {
                                                      display: `block`,
                                                      width: `fit-content`,
                                                      marginTop: 10,
                                                      fontFamily: H,
                                                      fontSize: 12,
                                                      color: U.greenDeep,
                                                      textDecoration: `none`,
                                                    },
                                                    children: [
                                                      S(G.more),
                                                      ` `,
                                                      /*#__PURE__*/ p(`span`, {
                                                        className: `ar`,
                                                        children: `↗`,
                                                      }),
                                                    ],
                                                  }),
                                              ],
                                            }),
                                          }),
                                        }),
                                    ],
                                  }),
                                  t.cells.map((e, t) =>
                                    /*#__PURE__*/ p(`td`, { style: l, children: h(e) }, t)
                                  ),
                                ],
                              },
                              n
                            );
                          }),
                      ],
                    },
                    r
                  );
                }),
              }),
            ],
          }),
        ],
      });
    },
    he = We.map((e) => ({ ...e, rows: e.rows.map((e) => ({ ...e, cells: e.cells.slice(1) })) })),
    ge = (e, t) =>
      /*#__PURE__*/ p(R, {
        style: { marginTop: b ? 64 : 112 },
        children: /*#__PURE__*/ m(`div`, {
          style: {
            display: `grid`,
            gridTemplateColumns: y === 4 ? `1fr 3fr` : `1fr`,
            gap: b ? 20 : 32,
          },
          children: [
            /*#__PURE__*/ p(`div`, {
              style: { paddingLeft: y === 4 ? 24 : 0 },
              children: /*#__PURE__*/ m(`h3`, {
                style: {
                  fontFamily: V,
                  fontSize: b ? 28 : 40,
                  fontWeight: 400,
                  letterSpacing: -0.8,
                  margin: 0,
                },
                children: [
                  /*#__PURE__*/ p(`span`, {
                    style: { color: U.lime, marginRight: 10 },
                    children: `#`,
                  }),
                  e,
                ],
              }),
            }),
            /*#__PURE__*/ p(`div`, { children: t }),
          ],
        }),
      }),
    _e = (e) =>
      /*#__PURE__*/ p(`span`, {
        style: {
          display: `inline-flex`,
          alignItems: `center`,
          justifyContent: `center`,
          width: 28,
          height: 28,
          borderRadius: 4,
          background: U.limeSoft,
          color: U.greenDeep,
          flexShrink: 0,
        },
        children: /*#__PURE__*/ p(`svg`, {
          width: `16`,
          height: `16`,
          viewBox: `0 0 16 16`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.4`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          children: /*#__PURE__*/ p(`path`, { d: e }),
        }),
      }),
    N = {
      seat: `M8 3v10M3 8h10`,
      credit: `M8 2l1.6 3.9L13.5 6.4 10.6 9l.8 4-3.4-2-3.4 2 .8-4-2.9-2.6 3.9-.5z`,
      hw: `M3 4h10v6H3zM6 13h4M8 10v3`,
    },
    P = (e, t, n, r, i) =>
      /*#__PURE__*/ m(`div`, {
        className: `t0p-xcard`,
        style: {
          border: `1px solid ${U.line}`,
          borderRadius: 4,
          padding: b ? 20 : 24,
          display: `flex`,
          flexDirection: `column`,
          gap: 10,
        },
        children: [
          /*#__PURE__*/ m(`div`, {
            style: {
              display: `flex`,
              alignItems: b ? `flex-start` : `center`,
              flexDirection: b ? `column` : `row`,
              gap: 12,
              justifyContent: `space-between`,
            },
            children: [
              /*#__PURE__*/ m(`div`, {
                style: { display: `flex`, alignItems: `center`, gap: 12 },
                children: [
                  _e(e),
                  /*#__PURE__*/ p(`span`, {
                    style: { fontFamily: V, fontSize: 20, fontWeight: 500 },
                    children: t,
                  }),
                ],
              }),
              /*#__PURE__*/ p(`div`, { style: { fontSize: 14, color: U.text }, children: n }),
            ],
          }),
          /*#__PURE__*/ p(`p`, {
            style: { margin: 0, fontSize: 15, lineHeight: 1.6, color: U.sub },
            children: r,
          }),
          /*#__PURE__*/ p(`div`, {
            style: {
              display: `flex`,
              flexWrap: `wrap`,
              alignItems: `center`,
              justifyContent: `space-between`,
              gap: 12,
              marginTop: 6,
            },
            children: /*#__PURE__*/ p(`span`, {
              style: { fontSize: 13, color: U.faint },
              children: i,
            }),
          }),
        ],
      }),
    ve = (e, t) =>
      /*#__PURE__*/ p(
        `span`,
        {
          style: {
            display: `inline-flex`,
            alignItems: `baseline`,
            gap: 6,
            padding: `4px 10px`,
            borderRadius: 4,
            background: U.muted,
            fontSize: 13,
            whiteSpace: `nowrap`,
          },
          children: e,
        },
        t
      ),
    ye = ge(
      S(G.addonsTitle),
      /*#__PURE__*/ m(`div`, {
        style: { display: `flex`, flexDirection: `column`, gap: 16 },
        children: [
          P(
            N.seat,
            S(G.seatAdd),
            /*#__PURE__*/ m(f, {
              children: [
                /*#__PURE__*/ p(`b`, {
                  style: { fontFamily: V, fontSize: 20, fontWeight: 500 },
                  children: C.seat,
                }),
                ` `,
                /*#__PURE__*/ p(`span`, { style: { color: U.sub }, children: S(G.seatUnit) }),
              ],
            }),
            S(G.seatAddDesc),
            S(G.paidOnly)
          ),
          P(
            N.credit,
            S(G.packs),
            /*#__PURE__*/ p(`span`, {
              style: { display: `flex`, flexWrap: `wrap`, gap: 6 },
              children: C.packList.map(([e, t]) =>
                ve(
                  /*#__PURE__*/ m(f, {
                    children: [
                      e.toLocaleString(),
                      ` `,
                      /*#__PURE__*/ p(`span`, { style: { color: U.sub }, children: `Credits` }),
                      ` `,
                      /*#__PURE__*/ p(`b`, { style: { fontWeight: 500 }, children: Y(t, C.s) }),
                    ],
                  }),
                  e
                )
              ),
            }),
            X(S(G.packsDesc), { c: C.credit }),
            S(G.paidOnly)
          ),
          P(
            N.hw,
            S(G.hw),
            /*#__PURE__*/ m(`span`, {
              style: { display: `flex`, flexWrap: `wrap`, gap: 6 },
              children: [
                ve(
                  /*#__PURE__*/ m(f, {
                    children: [
                      `Base`,
                      ` `,
                      /*#__PURE__*/ p(`b`, { style: { fontWeight: 500 }, children: S(G.hwBase) }),
                    ],
                  }),
                  `b`
                ),
                ve(
                  /*#__PURE__*/ m(f, {
                    children: [
                      `Growth`,
                      ` `,
                      /*#__PURE__*/ p(`b`, { style: { fontWeight: 500 }, children: S(G.hwGrowth) }),
                    ],
                  }),
                  `g`
                ),
              ],
            }),
            S(G.hwDesc),
            S(G.hwScale)
          ),
        ],
      })
    ),
    F = s(null),
    I = (e) => {
      ae(e);
      let t = F.current;
      t &&
        c !== void 0 &&
        c.scrollTo({ top: t.getBoundingClientRect().top + c.scrollY - a - 16, behavior: `smooth` });
    },
    be = v >= 900,
    xe = (e) => {
      let [, t, n] = C[e];
      return re === `monthly` ? `${Y(t, C.s)} ${S(G.mo)}` : `${Y(n, C.s)} ${S(G.yr)}`;
    },
    Se = () =>
      /*#__PURE__*/ p(`svg`, {
        width: `13`,
        height: `13`,
        viewBox: `0 0 24 24`,
        fill: U.green,
        children: /*#__PURE__*/ p(`path`, {
          d: `M12 2l3 6.6 7.2.8-5.4 4.9 1.5 7.1L12 17.8 5.7 21.4l1.5-7.1L1.8 9.4 9 8.6z`,
        }),
      }),
    L = (e, t, n, r) =>
      /*#__PURE__*/ m(
        `button`,
        {
          type: `button`,
          className: `t0p-ovrow`,
          onClick: n,
          style: {
            display: `flex`,
            alignItems: `center`,
            justifyContent: `space-between`,
            gap: 12,
            width: `100%`,
            padding: `14px 16px`,
            border: `1px solid ${U.line}`,
            borderRadius: 4,
            background: U.bg,
            cursor: `pointer`,
            fontFamily: B,
            fontSize: 15,
            color: U.text,
            textAlign: `left`,
          },
          children: [
            /*#__PURE__*/ p(`span`, {
              style: { display: `inline-flex`, alignItems: `center`, gap: 6, fontWeight: 500 },
              children: e,
            }),
            /*#__PURE__*/ p(
              `span`,
              {
                className: `t0p-in`,
                style: { fontFamily: H, fontSize: 13, color: U.sub, whiteSpace: `nowrap` },
                children: t,
              },
              t
            ),
          ],
        },
        r
      ),
    Ce = (e, t, n, r, i, a, o, s) => {
      let c =
        t === `saas`
          ? { bg: U.tint, fg: U.greenDeep, sq: U.green }
          : t === `priv`
            ? { bg: U.muted, fg: U.text, sq: U.text }
            : { bg: U.soft, fg: U.sub, sq: U.faint };
      return /*#__PURE__*/ m(`div`, {
        style: {
          display: `flex`,
          flexDirection: `column`,
          borderRight: be && !s ? `1px solid ${U.line}` : void 0,
          borderBottom: !be && !s ? `1px solid ${U.line}` : void 0,
        },
        children: [
          /*#__PURE__*/ m(`div`, {
            style: {
              display: `flex`,
              alignItems: `center`,
              gap: 10,
              padding: `12px 24px`,
              background: c.bg,
              borderBottom: `1px solid ${U.line}`,
              fontFamily: H,
              fontSize: 12,
              letterSpacing: 0.6,
              color: c.fg,
            },
            children: [
              /*#__PURE__*/ p(`span`, { style: { width: 7, height: 7, background: c.sq } }),
              e,
            ],
          }),
          /*#__PURE__*/ m(`div`, {
            style: {
              padding: b ? 20 : 24,
              display: `flex`,
              flexDirection: `column`,
              gap: 12,
              flex: 1,
            },
            children: [
              /*#__PURE__*/ m(`div`, {
                style: { display: `flex`, alignItems: `center`, gap: 10, flexWrap: `wrap` },
                children: [
                  /*#__PURE__*/ p(`span`, {
                    style: { fontFamily: V, fontSize: 22, fontWeight: 500 },
                    children: n,
                  }),
                  r &&
                    /*#__PURE__*/ p(`span`, {
                      style: {
                        fontSize: 12,
                        color: U.greenDeep,
                        padding: `2px 8px`,
                        borderRadius: 4,
                        border: `1px solid ${U.tintLine}`,
                        background: U.tint,
                      },
                      children: r,
                    }),
                ],
              }),
              /*#__PURE__*/ p(`p`, {
                style: { margin: 0, fontSize: 16, color: U.text, lineHeight: 1.5 },
                children: i,
              }),
              /*#__PURE__*/ p(`div`, {
                style: {
                  padding: `10px 14px`,
                  background: c.bg,
                  borderLeft: `2px solid ${t === `saas` ? U.lime : t === `priv` ? U.text : U.mute}`,
                  fontFamily: H,
                  fontSize: 12,
                  lineHeight: 1.7,
                  color: U.sub,
                },
                children: a,
              }),
              /*#__PURE__*/ p(`div`, {
                style: { display: `flex`, flexDirection: `column`, gap: 8, marginTop: 4 },
                children: o,
              }),
            ],
          }),
        ],
      });
    },
    we = /*#__PURE__*/ p(R, {
      style: { marginBottom: b ? 56 : 88 },
      children: /*#__PURE__*/ m(`div`, {
        style: {
          position: `relative`,
          border: `1px solid ${U.line}`,
          borderRadius: 4,
          display: `grid`,
          gridTemplateColumns: be ? `repeat(3, minmax(0, 1fr))` : `1fr`,
        },
        children: [
          [`tl`, `tr`, `bl`, `br`].map((e) =>
            /*#__PURE__*/ p(
              `span`,
              {
                style: {
                  position: `absolute`,
                  width: 6,
                  height: 6,
                  background: U.lime,
                  top: e[0] === `t` ? -3 : void 0,
                  bottom: e[0] === `b` ? -3 : void 0,
                  left: e[1] === `l` ? -3 : void 0,
                  right: e[1] === `r` ? -3 : void 0,
                },
              },
              e
            )
          ),
          Ce(
            S(G.ovOpen),
            `open`,
            `Edge`,
            null,
            S(G.ovEdgeDesc),
            S(G.ovEdgeNote),
            /*#__PURE__*/ m(`div`, {
              style: {
                border: `1px solid ${U.line}`,
                borderRadius: 4,
                padding: 16,
                display: `flex`,
                flexDirection: `column`,
                gap: 10,
              },
              children: [
                /*#__PURE__*/ m(`div`, {
                  style: {
                    display: `flex`,
                    justifyContent: `space-between`,
                    alignItems: `baseline`,
                  },
                  children: [
                    /*#__PURE__*/ p(`span`, {
                      style: { fontFamily: V, fontSize: 18, fontWeight: 500 },
                      children: `Apache-2.0`,
                    }),
                    /*#__PURE__*/ p(`span`, {
                      style: { fontFamily: H, fontSize: 13, color: U.sub },
                      children: S(G.free),
                    }),
                  ],
                }),
                /*#__PURE__*/ p(`p`, {
                  style: { margin: 0, fontSize: 14, color: U.sub, lineHeight: 1.6 },
                  children: S(G.ovEdgeCard),
                }),
                /*#__PURE__*/ m(`a`, {
                  className: `t0p-more`,
                  href: l,
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  style: {
                    fontFamily: H,
                    fontSize: 13,
                    color: U.greenDeep,
                    textDecoration: `none`,
                    width: `fit-content`,
                  },
                  children: [
                    S(G.ovGithub),
                    ` `,
                    /*#__PURE__*/ p(`span`, { className: `ar`, children: `↗` }),
                  ],
                }),
              ],
            })
          ),
          Ce(
            S(G.ovSaas),
            `saas`,
            `云端`,
            S(G.ovCloudTag),
            S(G.ovCloudDesc),
            S(G.ovCloudNote),
            /*#__PURE__*/ m(f, {
              children: [
                L(`Base`, xe(`base`), () => I(`cloud`), `b`),
                L(
                  /*#__PURE__*/ m(f, { children: [`Growth `, /*#__PURE__*/ p(Se, {})] }),
                  xe(`growth`),
                  () => I(`cloud`),
                  `g`
                ),
                L(`Scale`, S(G.custom), () => I(`cloud`), `s`),
              ],
            })
          ),
          Ce(
            S(G.ovPriv),
            `priv`,
            `企业版`,
            null,
            S(G.ovEntDesc),
            S(G.ovEntNote),
            /*#__PURE__*/ p(f, {
              children: Ge.slice(1).map((e) =>
                L(
                  e.name === `Cluster`
                    ? /*#__PURE__*/ m(f, { children: [e.name, ` `, /*#__PURE__*/ p(Se, {})] })
                    : e.name,
                  S(e.price),
                  () => I(`edge`),
                  e.name
                )
              ),
            }),
            !0
          ),
        ],
      }),
    }),
    Te = Ue.map((e) => {
      let t = ce(e.id);
      return t.big + (t.unit ? ` ${t.unit}` : ``);
    });
  return /*#__PURE__*/ m(`div`, {
    ref: _,
    className: `t0p`,
    style: {
      width: `100%`,
      background: U.bg,
      color: U.text,
      fontFamily: B,
      WebkitFontSmoothing: `antialiased`,
    },
    children: [
      /*#__PURE__*/ p(`style`, { children: qe }),
      we,
      /*#__PURE__*/ p(`div`, { ref: F }),
      /*#__PURE__*/ p(`div`, {
        style: {
          display: `flex`,
          flexDirection: b ? `column` : `row`,
          alignItems: b ? `stretch` : `center`,
          gap: 12,
          marginBottom: b ? 20 : 28,
        },
        children: /*#__PURE__*/ m(`div`, {
          style: { display: `flex`, flexDirection: b ? `column` : `row`, gap: 8 },
          children: [
            se(x, ae, [
              [`cloud`, `云端`],
              [`edge`, S(G.selfHosted)],
            ]),
            x === `cloud` &&
              se(re, ie, [
                [`monthly`, S(G.monthly)],
                [
                  `yearly`,
                  /*#__PURE__*/ m(f, {
                    children: [
                      S(G.yearly),
                      /*#__PURE__*/ p(`span`, {
                        style: {
                          fontFamily: H,
                          fontSize: 11,
                          color: U.greenDeep,
                          background: U.limeSoft,
                          padding: `1px 5px`,
                          borderRadius: 3,
                        },
                        children: S(G.save),
                      }),
                    ],
                  }),
                ],
              ]),
          ],
        }),
      }),
      x === `cloud`
        ? /*#__PURE__*/ m(
            `div`,
            {
              children: [
                /*#__PURE__*/ p(`div`, {
                  style: fe,
                  children: Ue.map((e, t) =>
                    ue(
                      t,
                      S(e.name),
                      S(e.desc),
                      /*#__PURE__*/ p(Ie, { p: ce(e.id), sym: C.s, mobile: b }),
                      le(e.id),
                      e.popular,
                      de(e)
                    )
                  ),
                }),
                /*#__PURE__*/ p(`div`, {
                  style: {
                    display: `flex`,
                    flexWrap: `wrap`,
                    gap: b ? 8 : 24,
                    marginTop: 14,
                    fontSize: 13,
                    color: U.sub,
                    paddingLeft: b ? 0 : 4,
                  },
                  children: [`builder`, `operator`].map((e) =>
                    /*#__PURE__*/ m(
                      `span`,
                      {
                        style: { display: `inline-flex`, alignItems: `center`, gap: 6 },
                        children: [
                          /*#__PURE__*/ p(`span`, {
                            style: { color: U.text, display: `inline-flex` },
                            children: /*#__PURE__*/ p(Pe, { kind: e, size: 13 }),
                          }),
                          /*#__PURE__*/ p(`b`, {
                            style: { fontWeight: 500, color: U.text },
                            children: S(e === `builder` ? G.builderSeat : G.operatorSeat),
                          }),
                          S(e === `builder` ? G.builderDesc : G.operatorDesc),
                        ],
                      },
                      e
                    )
                  ),
                }),
                /*#__PURE__*/ p(R, {
                  children: M(
                    `c`,
                    Ue.slice(1).map((e) => ({ name: S(e.name), href: e.id === `scale` ? T : ne })),
                    he,
                    Te.slice(1)
                  ),
                }),
                ye,
              ],
            },
            `cloud`
          )
        : /*#__PURE__*/ m(
            `div`,
            {
              children: [
                /*#__PURE__*/ p(`div`, {
                  style: fe,
                  children: Ge.map((e, t) =>
                    ue(
                      t,
                      e.name,
                      S(e.desc),
                      /*#__PURE__*/ p(Ie, {
                        p: { big: S(e.price), note: `` },
                        sym: C.s,
                        mobile: b,
                      }),
                      e.cta === `trial` ? D(l, S(G.github)) : D(T, S(G.sales))
                    )
                  ),
                }),
                /*#__PURE__*/ p(R, {
                  children: M(
                    `e`,
                    Ge.map((e) => ({ name: e.name, href: e.cta === `trial` ? l : T })),
                    Ke
                  ),
                }),
              ],
            },
            `edge`
          ),
    ],
  });
}
var z, B, V, H, U, Re, W, G, ze, Be, Ve, He, Ue, K, q, J, We, Ge, Ke, qe, Y, X;
function Je() {
  return (Je = e(() => {
    (l(),
      d(),
      i(),
      te(),
      E(),
      (z = (e, t = e) => ({ en: e, zh: t })),
      (B = `Inter, "IBM Plex Sans", "PingFang SC", "Noto Sans SC", system-ui, sans-serif`),
      (V = `"IBM Plex Sans", Inter, "PingFang SC", "Noto Sans SC", system-ui, sans-serif`),
      (H = `"IBM Plex Mono", ui-monospace, Menlo, monospace`),
      (U = {
        bg: `#ffffff`,
        soft: `#fafafa`,
        muted: `#f3f3f3`,
        line: `#ebebeb`,
        dash: `#f0f0f0`,
        text: `#111111`,
        sub: `#737373`,
        faint: `#a3a3a3`,
        mute: `#d4d4d4`,
        green: `#73b200`,
        lime: `#b2ed1d`,
        limeHover: `#cef368`,
        limeSoft: `#eef9d2`,
        greenDeep: `#628210`,
        tint: `#f7fde8`,
        tintLine: `#cef368`,
      }),
      (Re = { tablet: 730, desktop: 1280 }),
      (W = `cubic-bezier(.22,1,.36,1)`),
      (G = {
        monthly: z(`Monthly`, `月付`),
        yearly: z(`Yearly`, `年付`),
        save: z(`Save 25%`, `省 25%`),
        mo: z(`/ mo`, `/ 月`),
        yr: z(`/ yr`, `/ 年`),
        free: z(`Free`, `免费`),
        custom: z(`Custom`, `定制`),
        sales: z(`Contact sales`, `联系销售`),
        trial: z(`Start free trial`, `开始免费试用`),
        start: z(`Get started`, `立即订阅`),
        select: z(`Select`, `选择`),
        soon: z(`Coming soon`, `即将推出`),
        selfHosted: z(`Self-hosted`, `自部署`),
        ovOpen: z(`Open source`, `开源`),
        ovSaas: z(`Managed SaaS`, `云托管 SaaS`),
        ovPriv: z(`Private deployment`, `私有化部署`),
        ovEdgeDesc: z(
          `The UNS foundation, on one machine. Yours entirely.`,
          `UNS 基础能力，单机部署，完全属于你。`
        ),
        ovEdgeNote: z(
          `For technical evaluation, PoCs, and teams comfortable operating open-source software on their own.`,
          `适合技术评估、PoC，以及能够自行运维开源软件的团队。`
        ),
        ovEdgeCard: z(
          `How the Demo UNS is designed — hierarchy, avoiding topic explosion, and payload structure that scales.`,
          `了解 Demo UNS 的设计方式 —— 层级结构、避免 Topic 爆炸，以及可扩展的 Payload 结构。`
        ),
        ovGithub: z(`Explore on GitHub`, `前往 GitHub`),
        ovCloudTag: z(`Most teams start here`, `大多数团队从这里开始`),
        ovCloudDesc: z(
          `The full platform, managed on cloud for you.`,
          `完整平台，由我们在云端托管。`
        ),
        ovCloudNote: z(
          `UNS, App Builder and managed MCP on day one — no infrastructure to run. Start with a 7-day free trial.`,
          `开通即用 UNS、App Builder 与托管 MCP，无需运维基础设施。可先免费试用 7 天。`
        ),
        ovEntDesc: z(`The full platform, on your terms.`, `完整平台，按你的方式部署。`),
        ovEntNote: z(
          `For data sovereignty, scale, governance, and enterprise-grade oversight.`,
          `面向数据主权、规模化、治理与企业级管控需求。`
        ),
        github: z(`View on GitHub`, `前往 GitHub`),
        popular: z(`Recommended`, `推荐`),
        then: z(`then {v} / mo after 3 months`, `3 个月后 {v} / 月`),
        perMo: z(`≈ {v} / mo, billed yearly`, `折合 {v} / 月，按年付`),
        trialNote: z(`7 days, no payment`, `7 天，无需付费`),
        scaleNote: z(`Tailored to your scale`, `按需定制`),
        plus: z(`Everything in {v}, plus`, `包含 {v} 全部，以及`),
        includes: z(`Includes`, `包含`),
        compare: z(`Compare plans`, `套餐对比`),
        features: z(`Features`, `功能`),
        more: z(`More details`, `了解详情`),
        builderSeat: z(`Builder`, `Builder`),
        builderDesc: z(
          `seats build and publish apps with App Builder.`,
          `席位用于通过 App Builder 搭建与发布应用。`
        ),
        operatorSeat: z(`Operator`, `Operator`),
        operatorDesc: z(
          `seats use published apps in daily operations.`,
          `席位用于在日常生产中使用已发布的应用。`
        ),
        addonsTitle: z(`Add-ons`, `增购与硬件`),
        seatAdd: z(`Extra Builder seats`, `额外 Builder 席位`),
        seatAddDesc: z(
          `Add Builder seats as needed. Billed at the full monthly rate, with no annual discount on seats.`,
          `按需添加 Builder 席位。按完整月单价计费，席位不享受年付折扣。`
        ),
        seatUnit: z(`/ seat / mo`, `/ 席 / 月`),
        paidOnly: z(`Available on paid plans`, `付费套餐可用`),
        packs: z(`AI Credit packs`, `AI Credits 拓展包`),
        packsDesc: z(
          `Top up AI Credits for your workspace. Flat {c} per credit, no volume tiers. Usage, validity and reset rules stay the same.`,
          `为工作区补充 AI Credits。统一单价 {c} / Credit，无阶梯折扣；消耗、有效期与重置规则不变。`
        ),
        hw: z(`Bundled hardware`, `赠送硬件`),
        hwDesc: z(
          `Included with your first annual subscription. Not included with monthly plans, and not re-issued on renewal.`,
          `首次年付赠送；月付不赠送，续费不重复赠送。`
        ),
        hwBase: z(`Starter kit`, `入门版硬件`),
        hwGrowth: z(`Advanced kit`, `进阶版硬件`),
        hwScale: z(`Scale hardware per contract`, `Scale 硬件配置以合同约定为准`),
      }),
      (ze = {
        usd: {
          s: `$`,
          credit: `$0.10`,
          packList: [
            [500, 50],
            [1e3, 100],
            [3e3, 300],
          ],
          base: [99, 299, 2700],
          growth: [299, 899, 8100],
          seat: `$50`,
          packs: `500 / $50 · 1,000 / $100 · 3,000 / $300`,
        },
        cny: {
          s: `¥`,
          credit: `¥0.60`,
          packList: [
            [500, 300],
            [1e3, 600],
            [3e3, 1800],
          ],
          base: [599, 1799, 16200],
          growth: [1799, 5399, 48600],
          seat: `¥300`,
          packs: `500 / ¥300 · 1,000 / ¥600 · 3,000 / ¥1,800`,
        },
      }),
      (Be = { en: `https://tier0.cn/login`, zh: `https://tier0.cn/login` }),
      (Ve = {
        price: z(
          `Monthly promo applies to first-time subscribers only. Yearly is paid upfront, about 9 months of the regular price.`,
          `月付前 3 个月优惠仅限首次订阅；年付一次性支付，约等于 9 个月常规月价。`
        ),
        builder: z(
          `Add extra Builder seats as needed: {seat} / seat / mo, billed per full month.`,
          `可按需添加 Builder 席位：{seat} / 席 / 月，按完整月计费。`
        ),
        uns: z(
          `Unified Namespace — one semantic source of truth for industrial data, no more point-to-point integrations.`,
          `统一命名空间 —— 工业数据的统一语义数据源，告别点对点集成。`
        ),
        appBuilder: z(
          `Use AI to rapidly build MES-grade applications for real operations.`,
          `借助 AI 快速搭建可用于真实生产的 MES 级应用。`
        ),
        credits: z(
          `AI Credits included per workspace each month. The trial includes 250 credits for the full 7 days.`,
          `每个工作区每月包含的 AI Credits 额度；试用期 7 天共 250 Credits。`
        ),
        addons: z(`Buy extra credit packs: {packs}.`, `可额外购买 Credits 拓展包：{packs}。`),
        hardware: z(
          `Edge hardware bundled with your first annual subscription. Not included with monthly plans or renewals.`,
          `首次年付赠送边缘硬件；月付不赠送，续费不重复赠送。`
        ),
      }),
      (He = {
        uns: `https://tier0.app/product/tier0-platform/uns`,
        appBuilder: `https://tier0.app/product/app-builder`,
      }),
      (Ue = [
        {
          id: `trial`,
          name: z(`Trial`, `试用`),
          desc: z(`See what's possible`, `体验核心能力`),
          features: [
            { k: `builder`, text: z(`1 Builder seat`, `1 个 Builder 席位`) },
            { k: `operator`, text: z(`100 Operator seats`, `100 个 Operator 席位`) },
            { k: `credits`, text: z(`250 AI Credits (trial)`, `250 AI Credits（试用期）`) },
            { k: `apps`, text: z(`1 deployed app`, `1 个部署应用`) },
            { k: `uns`, text: z(`UNS, App Builder & MCP`, `UNS、App Builder 与 MCP`) },
          ],
        },
        {
          id: `base`,
          name: z(`Base`),
          desc: z(`Ship your first apps`, `上线你的首批应用`),
          from: `Trial`,
          features: [
            { k: `credits`, text: z(`1,000 AI Credits / mo`, `每月 1,000 AI Credits`) },
            { k: `apps`, text: z(`5 deployed apps`, `5 个部署应用`) },
            { k: `data`, text: z(`100 GB data storage`, `100 GB 数据存储`) },
            { k: `addons`, text: z(`Credit add-ons`, `Credits 拓展包`) },
            { k: `hardware`, text: z(`Starter hardware*`, `入门版硬件*`) },
          ],
        },
        {
          id: `growth`,
          name: z(`Growth`),
          desc: z(`Scale with your team`, `团队规模化交付`),
          from: `Base`,
          popular: !0,
          features: [
            { k: `builder`, text: z(`5 Builders, 200 Operators`, `5 Builder，200 Operator`) },
            { k: `credits`, text: z(`5,000 AI Credits / mo`, `每月 5,000 AI Credits`) },
            { k: `apps`, text: z(`20 deployed apps`, `20 个部署应用`) },
            { k: `anchor`, text: z(`Anchor`) },
            { k: `vision`, text: z(`视觉`), soon: !0 },
            { k: `audit`, text: z(`Audit logs`, `审计日志`) },
            { k: `data`, text: z(`500 GB data storage`, `500 GB 数据存储`) },
            { k: `hardware`, text: z(`Advanced hardware*`, `进阶版硬件*`) },
          ],
        },
        {
          id: `scale`,
          name: z(`Scale`),
          desc: z(`Built for enterprise`, `企业级定制`),
          from: `Growth`,
          features: [
            { k: `scaleSeats`, text: z(`Custom seats & credits`, `定制席位与 Credits`) },
            { k: `operator`, text: z(`Unlimited Operators`, `不限 Operator`) },
            { k: `tenant`, text: z(`Isolated tenant`, `隔离租户`) },
            { k: `data`, text: z(`Custom storage & bandwidth`, `定制存储与流量`) },
          ],
        },
      ]),
      (K = !0),
      (q = !1),
      (J = z(`Custom`, `定制`)),
      (We = [
        {
          title: z(`Seats`, `席位`),
          rows: [
            { k: `builder`, label: z(`Builder seats`, `Builder 席位`), cells: [`1`, `1`, `5`, J] },
            {
              k: `operator`,
              label: z(`Operator seats`, `Operator 席位`),
              cells: [`100`, `100`, `200`, z(`Unlimited`, `不限`)],
            },
          ],
        },
        {
          title: z(`Platform`, `平台`),
          rows: [
            { k: `uns`, label: z(`UNS`), cells: [K, K, K, K] },
            { k: `appBuilder`, label: z(`应用构建器`), cells: [K, K, K, K] },
            { k: `mcp`, label: z(`Managed MCP`, `托管 MCP`), cells: [K, K, K, K] },
            {
              k: `credits`,
              label: z(`AI 积分`),
              cells: [
                z(`250 (trial)`, `250（试用期）`),
                z(`1,000 / mo`, `1,000 / 月`),
                z(`5,000 / mo`, `5,000 / 月`),
                J,
              ],
            },
            { k: `addons`, label: z(`Credit add-ons`, `Credits 拓展包`), cells: [q, K, K, K] },
            { k: `apps`, label: z(`Deployed apps`, `部署应用`), cells: [`1`, `5`, `20`, J] },
            { k: `anchor`, label: z(`Anchor`), cells: [q, q, K, K] },
            { k: `vision`, label: z(`视觉`), cells: [q, q, K, K], soon: !0 },
          ],
        },
        {
          title: z(`Security`, `安全`),
          rows: [
            { k: `rbac`, label: z(`RBAC`), cells: [K, K, K, K] },
            { k: `audit`, label: z(`Audit logs`, `审计日志`), cells: [q, q, K, K] },
            { k: `tenant`, label: z(`Isolated tenant`, `隔离租户`), cells: [q, q, q, J] },
          ],
        },
        {
          title: z(`Resources`, `资源`),
          rows: [
            {
              k: `data`,
              label: z(`Data storage`, `数据存储`),
              cells: [`10 GB`, `100 GB`, `500 GB`, J],
            },
            {
              k: `files`,
              label: z(`File storage`, `文件存储`),
              cells: [`1 GB`, `10 GB`, `100 GB`, J],
            },
            { k: `bandwidth`, label: z(`Bandwidth`, `流量`), cells: [`1x`, `1x`, `3x`, J] },
            {
              k: `hardware`,
              label: z(`Hardware*`, `赠送硬件*`),
              cells: [q, z(`Starter`, `入门版`), z(`Advanced`, `进阶版`), J],
            },
          ],
        },
      ]),
      (Ge = [
        {
          name: `Edge`,
          desc: z(`Open source · single machine`, `开源版 · 单机部署`),
          price: z(`Free`, `免费`),
          cta: `trial`,
        },
        {
          name: `Base`,
          desc: z(`Enterprise · private deployment`, `企业版 · 私有化部署`),
          price: z(`$10,000 / yr`, `US$10,000 / 年`),
          cta: `sales`,
        },
        {
          name: `Plus`,
          desc: z(`Enterprise · private deployment`, `企业版 · 私有化部署`),
          price: z(`$20,000 / yr`, `US$20,000 / 年`),
          cta: `sales`,
        },
        {
          name: `Cluster`,
          desc: z(`Enterprise · private deployment`, `企业版 · 私有化部署`),
          price: z(`$39,900+ / yr`, `US$39,900+ / 年`),
          cta: `sales`,
        },
      ]),
      (Ke = [
        {
          title: z(`Features`, `功能`),
          rows: [
            {
              k: `eAccess`,
              label: z(`Access`, `获取方式`),
              cells: [
                z(`Self-service`, `自助`),
                z(`Self-service`, `自助`),
                z(`Contact Sales`, `联系销售`),
                z(`Contact Sales`, `联系销售`),
              ],
            },
            {
              k: `eUns`,
              label: z(`UNS`),
              cells: [
                `Single Machine`,
                `Single Site`,
                `Multiple Site (3 Instance License)`,
                `Unlimited License`,
              ],
            },
            { k: `eFlow`, label: z(`Flow`), cells: [K, K, K, K] },
            { k: `eApp`, label: z(`应用构建器`), cells: [`/`, `/`, `云端`, `云端`] },
            { k: `eNotebook`, label: z(`Notebook`), cells: [`/`, K, K, K] },
            { k: `eAnchor`, label: z(`Anchor`), cells: [`/`, `/`, K, K] },
            {
              k: `eRbac`,
              label: z(`RBAC`),
              cells: [
                `/`,
                `Platform RBAC`,
                `Platform + App + UNS RBAC`,
                `Platform + App + UNS RBAC`,
              ],
            },
            {
              k: `eAudit`,
              label: z(`Audit`, `审计`),
              cells: [
                `/`,
                `/`,
                `Application and System Log`,
                `Application and System Log & SIEM Integration`,
              ],
            },
          ],
        },
      ]),
      (qe = `
.t0p *{box-sizing:border-box}
.t0p button,.t0p a{-webkit-tap-highlight-color:transparent}
.t0p :focus-visible{outline:2px solid ${U.text};outline-offset:2px;border-radius:4px}
.t0p-col{transition:background .3s ${W}}
.t0p-col:hover{background:${U.soft}}
.t0p-btn{transition:background .2s ease,border-color .2s ease,color .2s ease,transform .15s ease}
.t0p-btn:active{transform:scale(.98)}
.t0p-btn.g{background:${U.bg};color:${U.text};border:1px solid ${U.mute}}
.t0p-btn.p{background:${U.text};color:#fff;border:1px solid ${U.text}}
.t0p-col:hover .t0p-btn.g{border-color:${U.text}}
.t0p .t0p-btn:hover,.t0p .t0p-col:hover .t0p-btn:hover{background:${U.lime};border-color:${U.lime};color:${U.text}}
.t0p-btn.sm{height:32px!important;font-size:13px!important}
.t0p-btn .ar,.t0p-link .ar{display:inline-block;transition:transform .25s ${W}}
.t0p-btn:hover .ar,.t0p-link:hover .ar{transform:translate(2px,-2px)}
.t0p-link{color:${U.text};text-decoration:none;font-weight:500;border-bottom:1px solid ${U.mute};transition:border-color .2s ease}
.t0p-link:hover{border-color:${U.text}}
.t0p-ovrow{transition:border-color .2s ease,background .2s ease,transform .15s ease}
.t0p-ovrow:hover{border-color:${U.text}!important;background:${U.soft}!important}
.t0p-ovrow:active{transform:scale(.99)}
.t0p-xcard{transition:border-color .25s ease,background .25s ease}
.t0p-xcard:hover{border-color:${U.mute};background:${U.soft}}
.t0p-xcard .t0p-hash{transition:color .3s ease}
.t0p-xcard:hover .t0p-hash{color:${U.lime}!important}
.t0p-in{animation:t0pIn .45s ${W} both}
@keyframes t0pIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.t0p-rv{opacity:0;transform:translateY(14px);transition:opacity .6s ${W},transform .6s ${W}}
.t0p-rv.on{opacity:1;transform:none}
.t0p-row td{transition:background .2s ease}
.t0p-row:hover td{background:${U.soft}!important}
.t0p-i{color:${U.mute};transition:color .2s ease}
.t0p-li:hover .t0p-i{color:${U.faint}}
.t0p-i:hover,.t0p-i[data-open="1"]{color:${U.text}!important}
.t0p-seg button{transition:color .25s ease}
.t0p-hash{transition:color .3s ease}
.t0p-col:hover .t0p-hash{color:${U.lime}!important}
.t0p-seg button:hover{color:${U.text}}
.t0p-tip{animation:t0pTip .18s ${W} both}
@keyframes t0pTip{from{opacity:0;transform:translate(-50%,-4px) scale(.98)}to{opacity:1;transform:translate(-50%,0) scale(1)}}
.t0p-more .ar{display:inline-block;transition:transform .25s ${W}}
.t0p-more:hover{text-decoration:underline!important}
.t0p-more:hover .ar{transform:translate(2px,-2px)}
.t0p-chev{transition:transform .3s ${W}}
.t0p-open .t0p-chev{transform:rotate(90deg)}
.t0p-grp{cursor:pointer}
.t0p-grp .t0p-chev{transform:rotate(-90deg)}
.t0p-grp.t0p-open .t0p-chev{transform:rotate(90deg)}
.t0p-grp:hover td{background:${U.soft}}
.t0p-feat{cursor:pointer}
.t0p-desc{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s ${W},opacity .3s ease;opacity:0}
.t0p-open .t0p-desc{grid-template-rows:1fr;opacity:1}
@media (prefers-reduced-motion:reduce){.t0p *,.t0p-tip{animation:none!important;transition:none!important}.t0p-rv{opacity:1;transform:none}}
`),
      (Y = (e, t) => t + Math.round(e).toLocaleString(`en-US`)),
      (X = (e, t) => e.replace(/\{(\w+)\}/g, (e, n) => t[n] ?? ``)),
      (Le = UpdatedPricingTable),
      (Le.defaultProps = {
        language: `zh`,
        defaultCycle: `yearly`,
        defaultProduct: `cloud`,
        stickyOffset: 64,
        edgeUrl: `https://github.com/FREEZONEX/Tier0-Edge`,
        salesEmail: `sales@tier0.app`,
      }),
      oe(Le, {
        language: {
          type: j.Enum,
          title: `Language`,
          options: [`auto`, `en`, `zh`],
          optionTitles: [`Auto`, `English (USD)`, `中文 (CNY)`],
        },
        defaultProduct: {
          type: j.Enum,
          title: `Default Tab`,
          options: [`cloud`, `edge`],
          optionTitles: [`云端`, `Self-hosted`],
        },
        defaultCycle: {
          type: j.Enum,
          title: `Default Cycle`,
          options: [`monthly`, `yearly`],
          optionTitles: [`Monthly`, `Yearly`],
        },
        stickyOffset: {
          type: j.Number,
          title: `Sticky Offset`,
          min: 0,
          max: 200,
          step: 1,
          unit: `px`,
          displayStepper: !0,
        },
        edgeUrl: { type: j.String, title: `Edge Open Source URL` },
        salesEmail: { type: j.String, title: `Sales Email` },
      }));
  }))();
}
function Z(e, t) {
  for (; t; ) {
    let n = Ze[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function Ye(e) {
  let t = [];
  for (; e; ) {
    let n = Ze[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function Xe(e) {
  let t = Ye(e);
  if (t) throw t;
}
var Ze;
function Qe() {
  return (Qe = e(() => {
    (E(), (Ze = { AYmst8Nt3: new me(() => import("./OYGu2SDQ6-0.CzdTAL86.mjs?v=20261116-migration-v2")) }));
  }))();
}
var $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  Q,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  $,
  St;
function Ct() {
  return (Ct = e(() => {
    (d(),
      E(),
      v(),
      i(),
      _e(),
      L(),
      we(),
      P(),
      ve(),
      Je(),
      I(),
      Qe(),
      Ee(),
      ($e = O(F)),
      (et = C(_.div)),
      (tt = O(Le)),
      (nt = O(Te)),
      (rt = O(N)),
      (it = D(_.div)),
      (at = O(ye)),
      (ot = {
        aaCVbOipR: `(min-width: 810px) and (max-width: 1439.98px)`,
        Bg5GQKCv0: `(min-width: 1440px)`,
        cRKI0VqmP: `(max-width: 809.98px)`,
      }),
      (st = () => typeof document < `u`),
      (ct = []),
      (lt = `framer-cT6uG`),
      (ut = {
        aaCVbOipR: `framer-v-1ldywha`,
        Bg5GQKCv0: `framer-v-1p0vrv3`,
        cRKI0VqmP: `framer-v-1coup9s`,
      }),
      (dt = (e, t, n) => (e && t ? `position` : n)),
      (Q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (ft = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (pt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (mt = (e, t) => `translateY(-50%) ${t}`),
      (ht = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 4.1, duration: 1.5, ease: [0.4, 0.01, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (gt = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (_t = { Desktop: `Bg5GQKCv0`, Phone: `cRKI0VqmP`, Tablet: `aaCVbOipR` }),
      (vt = ({ value: e }) =>
        se()
          ? null
          : /*#__PURE__*/ p(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (yt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: _t[r.variant] ?? r.variant ?? `Bg5GQKCv0`,
      })),
      (bt = /*#__PURE__*/ ee(function (e, r) {
        let i = s(null),
          c = r ?? i;
        t();
        let { activeLocale: l, contentLocale: u, setLocale: d } = he(),
          f = le(),
          { style: ee, className: te, layoutId: h, variant: g, ...v } = yt(e),
          ae = n(() => De({}, u), [u]);
        x(ae);
        let [S, C] = ce(g, ot, !1),
          oe = w(lt, Se),
          T = a(pe)?.isLayoutTemplate,
          E = !!a(ne)?.transition?.layout,
          D = dt(T, E),
          se = b(`hhcnXrc4e`),
          O = s(null);
        (Xe(l), de());
        let ue = () => !st() || S !== `cRKI0VqmP`;
        return (
          ge({}),
          /*#__PURE__*/ p(pe.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: _t,
              primaryVariantId: `Bg5GQKCv0`,
              variantClassNames: ut,
            },
            children: /*#__PURE__*/ m(y, {
              id: h ?? `OYGu2SDQ6`,
              children: [
                /*#__PURE__*/ p(vt, {
                  value: `html body { background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ m(_.div, {
                  ...v,
                  className: w(oe, `framer-1p0vrv3`, te),
                  ref: c,
                  style: { ...ee },
                  children: [
                    /*#__PURE__*/ p(k, {
                      height: 64,
                      width: `100vw`,
                      y: 0,
                      children: /*#__PURE__*/ p(A, {
                        className: `framer-1bo31kz-container`,
                        layout: D,
                        layoutScroll: !0,
                        nodeId: `lX9h_BpsX`,
                        scopeId: `OYGu2SDQ6`,
                        children: /*#__PURE__*/ p(M, {
                          breakpoint: S,
                          overrides: {
                            aaCVbOipR: { variant: Q(`Gw5VboM5c`) },
                            cRKI0VqmP: { variant: Q(`Svy4sINhA`) },
                          },
                          children: /*#__PURE__*/ p(F, {
                            eVOFjxm0w: `var(--token-fcaa307f-078f-4ea1-af34-d51bb82ca05a, rgba(255, 255, 255, 0))`,
                            height: `100%`,
                            id: `lX9h_BpsX`,
                            jQcddTFoz: !0,
                            layoutId: `lX9h_BpsX`,
                            style: { width: `100%` },
                            variant: Q(`LbFcBhD3w`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ m(_.div, {
                      className: `framer-1nwsr7o`,
                      layout: D,
                      children: [
                        /*#__PURE__*/ p(et, {
                          __framer__animate: { transition: pt },
                          __framer__animateOnce: !0,
                          __framer__enter: ft,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1624n03`,
                          "data-framer-name": `Frame 2147224394`,
                          id: se,
                          ref: O,
                          children: /*#__PURE__*/ p(`div`, {
                            className: `framer-18om91l`,
                            children: /*#__PURE__*/ p(`div`, {
                              className: `framer-17qfksi`,
                              children: /*#__PURE__*/ p(re, {
                                __fromCanvasComponent: !0,
                                children:
                                  Z(`v0`, u) ??
                                  /*#__PURE__*/ p(o, {
                                    children: /*#__PURE__*/ p(`h1`, {
                                      className: `framer-styles-preset-1k5p4j8`,
                                      "data-styles-preset": `F3NdZsOi7`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `center` },
                                      children: `方案、功能、用量及价格`,
                                    }),
                                  }),
                                className: `framer-1z0q7a2`,
                                "data-framer-name": `Applications do not just consume data — they write`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                        }),
                        /*#__PURE__*/ p(k, {
                          children: /*#__PURE__*/ p(A, {
                            className: `framer-1prvjdw-container`,
                            isAuthoredByUser: !0,
                            nodeId: `dRkFyeoKt`,
                            scopeId: `OYGu2SDQ6`,
                            children: /*#__PURE__*/ p(Le, {
                              defaultCycle: `yearly`,
                              defaultProduct: `cloud`,
                              edgeUrl: `https://github.com/FREEZONEX/Tier0-Edge`,
                              height: `100%`,
                              id: `dRkFyeoKt`,
                              language: `zh`,
                              layoutId: `dRkFyeoKt`,
                              salesEmail: Z(`v1`, u) ?? `sales@tier0.app`,
                              stickyOffset: 64,
                              style: { width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    /*#__PURE__*/ m(_.div, {
                      className: `framer-1u2qdz6`,
                      layout: D,
                      children: [
                        /*#__PURE__*/ p(ie, {
                          links: [
                            { href: { webPageId: `RCRTBRG3j` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `XJlkoWbKd` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `RCRTBRG3j` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `XJlkoWbKd` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `RCRTBRG3j` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `XJlkoWbKd` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            /*#__PURE__*/ p(M, {
                              breakpoint: S,
                              overrides: { cRKI0VqmP: { y: (f?.y || 0) + 564.8 } },
                              children: /*#__PURE__*/ p(k, {
                                height: 381,
                                width: f?.width || `100vw`,
                                y: (f?.y || 0) + 515.8,
                                children: /*#__PURE__*/ p(A, {
                                  className: `framer-r7liav-container`,
                                  nodeId: `A_vJLnuhZ`,
                                  scopeId: `OYGu2SDQ6`,
                                  children: /*#__PURE__*/ p(M, {
                                    breakpoint: S,
                                    overrides: {
                                      aaCVbOipR: { exikp92XZ: e[4], IoXK6IEoz: e[5] },
                                      cRKI0VqmP: {
                                        exikp92XZ: e[2],
                                        IoXK6IEoz: e[3],
                                        variant: Q(`GL5t2qn7B`),
                                      },
                                    },
                                    children: /*#__PURE__*/ p(Te, {
                                      AspCk9Iwt:
                                        Z(`v3`, u) ??
                                        `从 Builder 开始体验应用生成，或联系我们获取完整 Tier0 平台能力。`,
                                      DC7Tugabs: Z(`v5`, u) ?? `下一步`,
                                      exikp92XZ: e[0],
                                      F_yIFtkLx: Z(`v6`, u) ?? `立即体验 Tier0`,
                                      Gl_ZpIhSp: Z(`v2`, u) ?? `需要帮助选择合适套餐？`,
                                      H7eKfGy5E: Z(`v4`, u) ?? `联系销售`,
                                      height: `100%`,
                                      id: `A_vJLnuhZ`,
                                      IoXK6IEoz: e[1],
                                      layoutId: `A_vJLnuhZ`,
                                      style: { width: `100%` },
                                      variant: Q(`Rym8t4ER5`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                        }),
                        ue() &&
                          /*#__PURE__*/ p(it, {
                            animate: ht,
                            className: `framer-d0rlxt hidden-1coup9s`,
                            "data-framer-appear-id": `d0rlxt`,
                            "data-framer-name": `point bg`,
                            initial: gt,
                            optimized: !0,
                            transformTemplate: mt,
                            children: /*#__PURE__*/ p(k, {
                              children: /*#__PURE__*/ p(A, {
                                className: `framer-1ihpxk6-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `i8sZch6Dx`,
                                scopeId: `OYGu2SDQ6`,
                                children: /*#__PURE__*/ p(N, {
                                  color: `rgb(250, 250, 250)`,
                                  customPatternMode: `alpha`,
                                  customPatternPosition: `center`,
                                  customPatternSizing: `tile`,
                                  dotSize: 2,
                                  flip: !1,
                                  height: `100%`,
                                  hoverColor: `rgba(178, 237, 29, 0.6)`,
                                  hoverShape: `glow`,
                                  hoverSize: 400,
                                  id: `i8sZch6Dx`,
                                  layoutId: `i8sZch6Dx`,
                                  lineWidth: 2,
                                  patternPreset: `dots`,
                                  radius: `0px`,
                                  smoothing: 10,
                                  style: { height: `100%`, width: `100%` },
                                  tileSize: 6,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                    /*#__PURE__*/ p(_.div, {
                      className: `framer-19q7ed`,
                      "data-framer-name": `header`,
                      layout: D,
                      children: /*#__PURE__*/ p(M, {
                        breakpoint: S,
                        overrides: { cRKI0VqmP: { y: (f?.y || 0) + 953.8 } },
                        children: /*#__PURE__*/ p(k, {
                          height: 498,
                          width: f?.width || `100vw`,
                          y: (f?.y || 0) + 904.8,
                          children: /*#__PURE__*/ p(A, {
                            className: `framer-gwawdo-container`,
                            nodeId: `wC6yYMqjZ`,
                            scopeId: `OYGu2SDQ6`,
                            children: /*#__PURE__*/ p(M, {
                              breakpoint: S,
                              overrides: {
                                aaCVbOipR: { variant: Q(`G8rxyXoDj`) },
                                cRKI0VqmP: { variant: Q(`vXscR1iJC`) },
                              },
                              children: /*#__PURE__*/ p(ye, {
                                height: `100%`,
                                id: `wC6yYMqjZ`,
                                layoutId: `wC6yYMqjZ`,
                                style: { width: `100%` },
                                variant: Q(`zev4Tv3qQ`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ p(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (xt = [
        `.framer-cT6uG.framer-1tpyjp3, .framer-cT6uG .framer-1tpyjp3 { display: block; }`,
        `.framer-cT6uG.framer-1p0vrv3 { align-content: center; align-items: center; background-color: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; }`,
        `.framer-cT6uG .framer-1bo31kz-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 4; }`,
        `.framer-cT6uG .framer-1nwsr7o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 70px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 80px 0px; position: relative; width: 100%; }`,
        `.framer-cT6uG .framer-1624n03 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 140px 0px 2px 0px; position: relative; scroll-margin-top: 75px; width: 1300px; }`,
        `.framer-cT6uG .framer-18om91l, .framer-cT6uG .framer-17qfksi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-cT6uG .framer-1z0q7a2 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-cT6uG .framer-1prvjdw-container { flex: none; height: auto; position: relative; width: 1280px; }`,
        `.framer-cT6uG .framer-1u2qdz6 { background-color: var(--token-7122224f-85bb-46cf-a093-189b897a9de6, #fafaf9); flex: none; height: 360px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-cT6uG .framer-r7liav-container { bottom: 8px; flex: none; height: auto; left: 0px; position: absolute; right: 0px; z-index: 2; }`,
        `.framer-cT6uG .framer-d0rlxt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; right: 0px; top: 50%; transform: translateY(-50%); will-change: var(--framer-will-change-effect-override, transform); z-index: 0; }`,
        `.framer-cT6uG .framer-1ihpxk6-container { flex: 1 0 0px; height: 355px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-cT6uG .framer-19q7ed { align-content: center; align-items: center; background-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-cT6uG .framer-gwawdo-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...be,
        `@media (max-width: 809.98px) { .framer-cT6uG.framer-1p0vrv3 { width: 390px; } .framer-cT6uG .framer-1nwsr7o { gap: 50px; padding: 0px 40px 80px 40px; } .framer-cT6uG .framer-1624n03 { order: 0; width: 310px; } .framer-cT6uG .framer-18om91l { gap: 31px; order: 0; } .framer-cT6uG .framer-17qfksi { order: 0; } .framer-cT6uG .framer-1prvjdw-container { order: 1; width: 310px; } .framer-cT6uG .framer-1u2qdz6 { height: 429px; }}`,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-cT6uG.framer-1p0vrv3 { width: 810px; } .framer-cT6uG .framer-1nwsr7o { padding: 0px 40px 80px 40px; } .framer-cT6uG .framer-1624n03, .framer-cT6uG .framer-1prvjdw-container { width: 100%; }}`,
      ]),
      ($ = T(bt, xt, `framer-cT6uG`)),
      ($.displayName = `Page`),
      ($.defaultProps = { height: 4505, width: 1440 }),
      ue(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
            ],
          },
          ...$e,
          ...tt,
          ...nt,
          ...rt,
          ...at,
          ...ae(xe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) =>
          fe([() => S(F, {}, t), () => S(Te, {}, t), () => S(Ce, {}, t), () => S(ye, {}, t)], t),
      }),
      (St = {
        exports: {
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerOYGu2SDQ6`,
            slots: [],
            annotations: {
              framerScrollSections: `{"hhcnXrc4e":{"pattern":":hhcnXrc4e","name":"plan"}}`,
              framerColorSyntax: `true`,
              framerIntrinsicHeight: `4505`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"cRKI0VqmP":{"layout":["fixed","auto"]},"aaCVbOipR":{"layout":["fixed","auto"]}}}`,
              framerAutoSizeImages: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerDisplayContentsDiv: `false`,
              framerImmutableVariables: `true`,
              framerComponentViewportWidth: `true`,
              framerIntrinsicWidth: `1440`,
              framerLayoutTemplateFlowEffect: `true`,
              framerResponsiveScreen: `true`,
              framerContractVersion: `1`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
Ct();
export { St as __FramerMetadata__, $ as default, ct as queryParamNames };
//# sourceMappingURL=_jgnQmF2SLIRazi-nsRfyY0b3W36kUSTp7fRIujzSRc.DNM-9mqO.mjs.map
