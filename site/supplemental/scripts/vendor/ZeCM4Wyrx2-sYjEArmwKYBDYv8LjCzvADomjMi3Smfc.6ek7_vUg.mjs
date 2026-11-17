import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  D as t,
  F as n,
  O as r,
  P as ee,
  R as i,
  S as a,
  c as te,
  m as o,
  s,
  u as c,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { S as ne, Yi as l, t as re, v as ie } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import {
  At as u,
  D as d,
  Et as ae,
  G as f,
  I as p,
  It as m,
  K as h,
  P as oe,
  Pt as se,
  Q as g,
  St as ce,
  U as _,
  Vt as v,
  a as y,
  bt as le,
  g as b,
  gt as ue,
  j as x,
  lt as S,
  m as de,
  o as C,
  v as fe,
  w,
  wt as pe,
  yt as me,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { i as he, n as ge, r as _e, t as ve } from "./O8Bh5Q3QT.CjUYgado.mjs?v=20261116-migration-v2";
import { m as T, n as ye, p as E, t as D } from "./shared-lib.CHy_rbfQ.mjs?v=20261116-migration-v2";
import { i as O, n as k, r as A, t as be } from "./Y65iag5vt.B5ZMnZps.mjs?v=20261116-migration-v2";
import {
  a as j,
  c as M,
  d as N,
  f as P,
  i as F,
  l as I,
  n as L,
  o as R,
  r as xe,
  s as z,
  t as B,
  u as Se,
} from "./yYgDlh7_7.CIDv73T-.mjs?v=20261116-migration-v2";
import { i as Ce, n as we, r as V, t as Te } from "./hvL3gbVCY.BxIa96IV.mjs?v=20261116-migration-v2";
import { n as Ee, r as De } from "./bzscPRF6y.BvgJlAaF.mjs?v=20261116-migration-v2";
function H(e, t) {
  for (; t; ) {
    let n = U[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function Oe(e) {
  let t = [];
  for (; e; ) {
    let n = U[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function ke(e) {
  let t = Oe(e);
  if (t) throw t;
}
var U;
function Ae() {
  return (Ae = e(() => {
    (g(), (U = { AYmst8Nt3: new fe(() => import("./bzscPRF6y-0.C_11LqeZ.mjs?v=20261116-migration-v2")) }));
  }))();
}
var je,
  Me,
  Ne,
  W,
  Pe,
  Fe,
  G,
  Ie,
  Le,
  Re,
  K,
  ze,
  Be,
  Ve,
  He,
  q,
  Ue,
  J,
  Y,
  We,
  X,
  Ge,
  Z,
  Q,
  Ke,
  qe,
  Je,
  Ye,
  $,
  Xe;
function Ze() {
  return (Ze = e(() => {
    (te(),
      g(),
      re(),
      r(),
      P(),
      Se(),
      M(),
      T(),
      ye(),
      L(),
      Ce(),
      he(),
      O(),
      R(),
      Ae(),
      Ee(),
      (je = _(D)),
      (Me = _(z)),
      (Ne = _(I)),
      (W = m(C)),
      (Pe = m(l.div)),
      (Fe = _(N)),
      (G = v(N)),
      (Ie = _(B)),
      (Le = _(E)),
      (Re = {
        p3rJt6m2H: `(min-width: 1440px)`,
        rFBQtJSTW: `(max-width: 809.98px)`,
        z7ffcbB3W: `(min-width: 810px) and (max-width: 1439.98px)`,
      }),
      (K = () => typeof document < `u`),
      (ze = []),
      (Be = `framer-DV4C8`),
      (Ve = {
        p3rJt6m2H: `framer-v-tkcnf1`,
        rFBQtJSTW: `framer-v-1grqm23`,
        z7ffcbB3W: `framer-v-e7kf34`,
      }),
      (He = (e, t, n) => (e && t ? `position` : n)),
      (q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ue = (e, t) => `translateX(-50%) ${t}`),
      (J = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.7,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Y = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (We = { delay: 0.2, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (X = { delay: 0.4, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Ge = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 50,
      }),
      (Z = (e, t) => {
        if (e && typeof e == `object`) return { ...e, alt: t };
      }),
      (Q = { Desktop: `p3rJt6m2H`, Phone: `rFBQtJSTW`, Tablet: `z7ffcbB3W` }),
      (Ke = ({ value: e }) =>
        ce()
          ? null
          : /*#__PURE__*/ s(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (qe = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Q[r.variant] ?? r.variant ?? `p3rJt6m2H`,
      })),
      (Je = /*#__PURE__*/ o(function (e, r) {
        let te = a(null),
          o = r ?? te;
        t();
        let { activeLocale: re, contentLocale: f, setLocale: p } = pe(),
          m = ue(),
          { style: se, className: g, layoutId: ce, variant: _, ...v } = qe(e),
          x = n(() => De({}, f), [f]);
        ae(x);
        let [S, fe] = le(_, Re, !1),
          he = oe(Be, Te, be, ve, xe),
          ge = ee(de)?.isLayoutTemplate,
          _e = !!ee(ne)?.transition?.layout,
          T = He(ge, _e);
        ke(re);
        let ye = () => !K() || S !== `rFBQtJSTW`,
          O = () => !K() || S === `rFBQtJSTW`,
          k = () => !K() || ![`z7ffcbB3W`, `rFBQtJSTW`].includes(S),
          A = u(`wEqHp_GBi`),
          j = a(null),
          M = () => !K() || S === `z7ffcbB3W`,
          N = a(null),
          P = a(null),
          F = a(null),
          L = a(null),
          R = u(`CNF8lb8b2`),
          Se = u(`SDCnn_nIi`),
          Ce = u(`I3acyPrfO`),
          we = u(`iZxgquzUh`),
          V = a(null),
          Ee = u(`kG7qZLhuh`);
        return (
          me({}),
          /*#__PURE__*/ s(de.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Q,
              primaryVariantId: `p3rJt6m2H`,
              variantClassNames: Ve,
            },
            children: /*#__PURE__*/ c(ie, {
              id: ce ?? `bzscPRF6y`,
              children: [
                /*#__PURE__*/ s(Ke, {
                  value: `html body { background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ c(l.div, {
                  ...v,
                  className: oe(he, `framer-tkcnf1`, g),
                  ref: o,
                  style: { ...se },
                  children: [
                    /*#__PURE__*/ s(y, {
                      height: 64,
                      width: `100vw`,
                      y: 0,
                      children: /*#__PURE__*/ s(C, {
                        className: `framer-5q16ab-container`,
                        layout: T,
                        layoutScroll: !0,
                        nodeId: `BbdnZlqj6`,
                        scopeId: `bzscPRF6y`,
                        children: /*#__PURE__*/ s(w, {
                          breakpoint: S,
                          overrides: {
                            rFBQtJSTW: { variant: q(`Svy4sINhA`) },
                            z7ffcbB3W: { variant: q(`Gw5VboM5c`) },
                          },
                          children: /*#__PURE__*/ s(D, {
                            eVOFjxm0w: `var(--token-fcaa307f-078f-4ea1-af34-d51bb82ca05a, rgba(255, 255, 255, 0))`,
                            height: `100%`,
                            id: `BbdnZlqj6`,
                            jQcddTFoz: !0,
                            layoutId: `BbdnZlqj6`,
                            style: { width: `100%` },
                            variant: q(`LbFcBhD3w`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ c(l.div, {
                      className: `framer-19fqdvy`,
                      layout: T,
                      children: [
                        /*#__PURE__*/ c(`div`, {
                          className: `framer-x4nvlx`,
                          children: [
                            /*#__PURE__*/ s(w, {
                              breakpoint: S,
                              overrides: {
                                rFBQtJSTW: {
                                  children:
                                    H(`v1`, f) ??
                                    /*#__PURE__*/ s(i, {
                                      children: /*#__PURE__*/ c(`h1`, {
                                        className: `framer-styles-preset-bayqe`,
                                        "data-styles-preset": `hvL3gbVCY`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: [
                                          `Tier0赋能 Indorama · `,
                                          /*#__PURE__*/ s(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                            },
                                            children: `无纸化制造`,
                                          }),
                                        ],
                                      }),
                                    }),
                                },
                              },
                              children: /*#__PURE__*/ s(d, {
                                __fromCanvasComponent: !0,
                                children:
                                  H(`v0`, f) ??
                                  /*#__PURE__*/ s(i, {
                                    children: /*#__PURE__*/ c(`h1`, {
                                      className: `framer-styles-preset-bayqe`,
                                      "data-styles-preset": `hvL3gbVCY`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `left` },
                                      children: [
                                        `Tier0赋能 Indorama · `,
                                        /*#__PURE__*/ s(`span`, {
                                          style: {
                                            "--framer-text-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                          },
                                          children: `无纸化制造`,
                                        }),
                                      ],
                                    }),
                                  }),
                                className: `framer-1qh82t2`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            /*#__PURE__*/ s(w, {
                              breakpoint: S,
                              overrides: {
                                rFBQtJSTW: {
                                  children:
                                    H(`v3`, f) ??
                                    /*#__PURE__*/ s(i, {
                                      children: /*#__PURE__*/ s(`p`, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `Tier0 已为 Indorama 部署了全数字化制造系统，从而简化了工人的日常工作流程，并提升了整个运营过程的数字化水平。`,
                                      }),
                                    }),
                                },
                              },
                              children: /*#__PURE__*/ s(d, {
                                __fromCanvasComponent: !0,
                                children:
                                  H(`v2`, f) ??
                                  /*#__PURE__*/ s(i, {
                                    children: /*#__PURE__*/ s(`p`, {
                                      className: `framer-styles-preset-1ogycj`,
                                      "data-styles-preset": `Y65iag5vt`,
                                      dir: `auto`,
                                      children: `Tier0 已为 Indorama 部署了全数字化制造系统，从而简化了工人的日常工作流程，并提升了整个运营过程的数字化水平。`,
                                    }),
                                  }),
                                className: `framer-m1bwaw`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        ye() &&
                          /*#__PURE__*/ s(`div`, {
                            className: `framer-1xmnlxe hidden-1grqm23`,
                            children: /*#__PURE__*/ s(w, {
                              breakpoint: S,
                              overrides: {
                                z7ffcbB3W: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 402.5,
                                    intrinsicWidth: 750.5,
                                    loading: h((m?.y || 0) + 145.5),
                                    pixelHeight: 805,
                                    pixelWidth: 1501,
                                    sizes: `383px`,
                                    src: `https://framerusercontent.com/images/wbh7mB7Ld3M0eOOjxg4tGnZkLh8.svg?width=1501&height=805`,
                                    srcSet: `https://framerusercontent.com/images/wbh7mB7Ld3M0eOOjxg4tGnZkLh8.svg?scale-down-to=512&width=1501&height=805 512w,https://framerusercontent.com/images/wbh7mB7Ld3M0eOOjxg4tGnZkLh8.svg?scale-down-to=1024&width=1501&height=805 1024w,https://framerusercontent.com/images/wbh7mB7Ld3M0eOOjxg4tGnZkLh8.svg?width=1501&height=805 1501w`,
                                  },
                                  transformTemplate: void 0,
                                },
                              },
                              children: /*#__PURE__*/ s(b, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 402.5,
                                  intrinsicWidth: 750.5,
                                  loading: h((m?.y || 0) + 170.0848),
                                  pixelHeight: 805,
                                  pixelWidth: 1501,
                                  sizes: `713px`,
                                  src: `https://framerusercontent.com/images/wbh7mB7Ld3M0eOOjxg4tGnZkLh8.svg?width=1501&height=805`,
                                  srcSet: `https://framerusercontent.com/images/wbh7mB7Ld3M0eOOjxg4tGnZkLh8.svg?scale-down-to=512&width=1501&height=805 512w,https://framerusercontent.com/images/wbh7mB7Ld3M0eOOjxg4tGnZkLh8.svg?scale-down-to=1024&width=1501&height=805 1024w,https://framerusercontent.com/images/wbh7mB7Ld3M0eOOjxg4tGnZkLh8.svg?width=1501&height=805 1501w`,
                                },
                                className: `framer-tnd6n0`,
                                "data-framer-name": `Group 1321315191`,
                                transformTemplate: Ue,
                              }),
                            }),
                          }),
                        O() &&
                          /*#__PURE__*/ s(w, {
                            breakpoint: S,
                            overrides: {
                              rFBQtJSTW: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 402.5,
                                  intrinsicWidth: 750.5,
                                  loading: h((m?.y || 0) + 331.6),
                                  pixelHeight: 805,
                                  pixelWidth: 1501,
                                  sizes: `310px`,
                                  src: `https://framerusercontent.com/images/wbh7mB7Ld3M0eOOjxg4tGnZkLh8.svg?width=1501&height=805`,
                                  srcSet: `https://framerusercontent.com/images/wbh7mB7Ld3M0eOOjxg4tGnZkLh8.svg?scale-down-to=512&width=1501&height=805 512w,https://framerusercontent.com/images/wbh7mB7Ld3M0eOOjxg4tGnZkLh8.svg?scale-down-to=1024&width=1501&height=805 1024w,https://framerusercontent.com/images/wbh7mB7Ld3M0eOOjxg4tGnZkLh8.svg?width=1501&height=805 1501w`,
                                },
                              },
                            },
                            children: /*#__PURE__*/ s(b, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 402.5,
                                intrinsicWidth: 750.5,
                                pixelHeight: 805,
                                pixelWidth: 1501,
                                src: `https://framerusercontent.com/images/wbh7mB7Ld3M0eOOjxg4tGnZkLh8.svg?width=1501&height=805`,
                                srcSet: `https://framerusercontent.com/images/wbh7mB7Ld3M0eOOjxg4tGnZkLh8.svg?scale-down-to=512&width=1501&height=805 512w,https://framerusercontent.com/images/wbh7mB7Ld3M0eOOjxg4tGnZkLh8.svg?scale-down-to=1024&width=1501&height=805 1024w,https://framerusercontent.com/images/wbh7mB7Ld3M0eOOjxg4tGnZkLh8.svg?width=1501&height=805 1501w`,
                              },
                              className: `framer-1gt4gjk hidden-tkcnf1 hidden-e7kf34`,
                              "data-framer-name": `Group 1321315191`,
                            }),
                          }),
                      ],
                    }),
                    O() &&
                      /*#__PURE__*/ c(l.div, {
                        className: `framer-189ooei hidden-tkcnf1 hidden-e7kf34`,
                        layout: T,
                        children: [
                          /*#__PURE__*/ s(d, {
                            __fromCanvasComponent: !0,
                            children:
                              H(`v4`, f) ??
                              /*#__PURE__*/ s(i, {
                                children: /*#__PURE__*/ s(`h2`, {
                                  className: `framer-styles-preset-on1keu`,
                                  "data-styles-preset": `O8Bh5Q3QT`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `left` },
                                  children: `交付物`,
                                }),
                              }),
                            className: `framer-xnjkiy`,
                            "data-framer-name": `title`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ s(w, {
                            breakpoint: S,
                            overrides: { rFBQtJSTW: { y: (m?.y || 0) + 1264.0558 } },
                            children: /*#__PURE__*/ s(y, {
                              height: 349,
                              children: /*#__PURE__*/ s(C, {
                                className: `framer-1z0ir40-container`,
                                nodeId: `rIFnalkDt`,
                                scopeId: `bzscPRF6y`,
                                children: /*#__PURE__*/ s(z, {
                                  height: `100%`,
                                  id: `rIFnalkDt`,
                                  layoutId: `rIFnalkDt`,
                                  variant: q(`knSh84bJl`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    /*#__PURE__*/ c(l.div, {
                      className: `framer-6vuv5k`,
                      layout: T,
                      children: [
                        /*#__PURE__*/ c(`div`, {
                          className: `framer-1ibrgof`,
                          children: [
                            /*#__PURE__*/ s(d, {
                              __fromCanvasComponent: !0,
                              children:
                                H(`v5`, f) ??
                                /*#__PURE__*/ s(i, {
                                  children: /*#__PURE__*/ s(`h2`, {
                                    className: `framer-styles-preset-on1keu`,
                                    "data-styles-preset": `O8Bh5Q3QT`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `left` },
                                    children: `Indorama面临的前期挑战`,
                                  }),
                                }),
                              className: `framer-134t258`,
                              "data-framer-name": `Previous Challenges Faced by Indorama`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ s(d, {
                              __fromCanvasComponent: !0,
                              children:
                                H(`v6`, f) ??
                                /*#__PURE__*/ s(i, {
                                  children: /*#__PURE__*/ s(`p`, {
                                    className: `framer-styles-preset-fchdqd`,
                                    "data-styles-preset": `ZkrOrqcsm`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `left` },
                                    children: `Indorama投资公司是全球化学制造巨头，面临着因时区和地区惯例差异带来的运营挑战。`,
                                  }),
                                }),
                              className: `framer-11wql58`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        /*#__PURE__*/ c(`div`, {
                          className: `framer-5x1gqr`,
                          children: [
                            /*#__PURE__*/ s(w, {
                              breakpoint: S,
                              overrides: {
                                rFBQtJSTW: {
                                  height: 90,
                                  width: `310px`,
                                  y: (m?.y || 0) + 747.4558,
                                },
                                z7ffcbB3W: {
                                  width: `max((${m?.width || `100vw`} - 125px) / 4, 1px)`,
                                  y: (m?.y || 0) + 538,
                                },
                              },
                              children: /*#__PURE__*/ s(y, {
                                height: 279,
                                width: `296.5px`,
                                y: (m?.y || 0) + 858,
                                children: /*#__PURE__*/ s(W, {
                                  __framer__animate: { transition: Y },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-c2kad5-container`,
                                  nodeId: `NYk9CpEqh`,
                                  rendersWithMotion: !0,
                                  scopeId: `bzscPRF6y`,
                                  children: /*#__PURE__*/ s(w, {
                                    breakpoint: S,
                                    overrides: {
                                      rFBQtJSTW: { variant: q(`agqOb6cmW`) },
                                      z7ffcbB3W: { variant: q(`DYY5M_Pj0`) },
                                    },
                                    children: /*#__PURE__*/ s(I, {
                                      height: `100%`,
                                      id: `NYk9CpEqh`,
                                      layoutId: `NYk9CpEqh`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: q(`phu3XUKqQ`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            /*#__PURE__*/ s(w, {
                              breakpoint: S,
                              overrides: {
                                rFBQtJSTW: {
                                  height: 90,
                                  width: `310px`,
                                  y: (m?.y || 0) + 852.4558,
                                },
                                z7ffcbB3W: {
                                  width: `max((${m?.width || `100vw`} - 125px) / 4, 1px)`,
                                  y: (m?.y || 0) + 538,
                                },
                              },
                              children: /*#__PURE__*/ s(y, {
                                height: 279,
                                width: `296.5px`,
                                y: (m?.y || 0) + 858,
                                children: /*#__PURE__*/ s(W, {
                                  __framer__animate: { transition: We },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-15xosbo-container`,
                                  nodeId: `a8F86mh4U`,
                                  rendersWithMotion: !0,
                                  scopeId: `bzscPRF6y`,
                                  children: /*#__PURE__*/ s(w, {
                                    breakpoint: S,
                                    overrides: {
                                      rFBQtJSTW: { variant: q(`yfGjL1R6Q`) },
                                      z7ffcbB3W: { variant: q(`k6_oC3T0N`) },
                                    },
                                    children: /*#__PURE__*/ s(I, {
                                      height: `100%`,
                                      id: `a8F86mh4U`,
                                      layoutId: `a8F86mh4U`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: q(`Pj420GME3`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            /*#__PURE__*/ s(w, {
                              breakpoint: S,
                              overrides: {
                                rFBQtJSTW: {
                                  height: 90,
                                  width: `310px`,
                                  y: (m?.y || 0) + 957.4558,
                                },
                                z7ffcbB3W: {
                                  width: `max((${m?.width || `100vw`} - 125px) / 4, 1px)`,
                                  y: (m?.y || 0) + 538,
                                },
                              },
                              children: /*#__PURE__*/ s(y, {
                                height: 279,
                                width: `296.5px`,
                                y: (m?.y || 0) + 858,
                                children: /*#__PURE__*/ s(W, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1mvgj9g-container`,
                                  nodeId: `e3WhK7rgm`,
                                  rendersWithMotion: !0,
                                  scopeId: `bzscPRF6y`,
                                  children: /*#__PURE__*/ s(w, {
                                    breakpoint: S,
                                    overrides: {
                                      rFBQtJSTW: { variant: q(`oVfSeqUz7`) },
                                      z7ffcbB3W: { variant: q(`iiKGOfy_S`) },
                                    },
                                    children: /*#__PURE__*/ s(I, {
                                      height: `100%`,
                                      id: `e3WhK7rgm`,
                                      layoutId: `e3WhK7rgm`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: q(`v7yUg2HyE`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            /*#__PURE__*/ s(w, {
                              breakpoint: S,
                              overrides: {
                                rFBQtJSTW: {
                                  height: 90,
                                  width: `310px`,
                                  y: (m?.y || 0) + 1062.4558,
                                },
                                z7ffcbB3W: {
                                  width: `max((${m?.width || `100vw`} - 125px) / 4, 1px)`,
                                  y: (m?.y || 0) + 538,
                                },
                              },
                              children: /*#__PURE__*/ s(y, {
                                height: 279,
                                width: `296.5px`,
                                y: (m?.y || 0) + 858,
                                children: /*#__PURE__*/ s(W, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1iwbbpl-container`,
                                  nodeId: `qVc7MmnKi`,
                                  rendersWithMotion: !0,
                                  scopeId: `bzscPRF6y`,
                                  children: /*#__PURE__*/ s(w, {
                                    breakpoint: S,
                                    overrides: {
                                      rFBQtJSTW: { variant: q(`JUEOuqkAM`) },
                                      z7ffcbB3W: { variant: q(`FCBz9z5cr`) },
                                    },
                                    children: /*#__PURE__*/ s(I, {
                                      height: `100%`,
                                      id: `qVc7MmnKi`,
                                      layoutId: `qVc7MmnKi`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: q(`TBYylgvy8`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    k() &&
                      /*#__PURE__*/ s(y, {
                        height: 349,
                        width: `1440px`,
                        y: (m?.y || 0) + 1237,
                        children: /*#__PURE__*/ s(C, {
                          className: `framer-1ntyjce-container hidden-e7kf34 hidden-1grqm23`,
                          layout: T,
                          nodeId: `EfHMr9OOH`,
                          scopeId: `bzscPRF6y`,
                          children: /*#__PURE__*/ s(z, {
                            height: `100%`,
                            id: `EfHMr9OOH`,
                            layoutId: `EfHMr9OOH`,
                            style: { width: `100%` },
                            variant: q(`zbGHPKiwC`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    /*#__PURE__*/ c(l.div, {
                      className: `framer-3jjmk4`,
                      layout: T,
                      children: [
                        /*#__PURE__*/ c(`div`, {
                          className: `framer-ilo3pj`,
                          children: [
                            /*#__PURE__*/ s(w, {
                              breakpoint: S,
                              overrides: {
                                rFBQtJSTW: {
                                  children:
                                    H(`v8`, f) ??
                                    /*#__PURE__*/ c(i, {
                                      children: [
                                        /*#__PURE__*/ s(`h2`, {
                                          className: `framer-styles-preset-on1keu`,
                                          "data-styles-preset": `O8Bh5Q3QT`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                          },
                                          children: `解决方案`,
                                        }),
                                        /*#__PURE__*/ s(`h2`, {
                                          className: `framer-styles-preset-on1keu`,
                                          "data-styles-preset": `O8Bh5Q3QT`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `left` },
                                          children: `数字工人-无纸化生产系统`,
                                        }),
                                      ],
                                    }),
                                },
                              },
                              children: /*#__PURE__*/ s(d, {
                                __fromCanvasComponent: !0,
                                children:
                                  H(`v7`, f) ??
                                  /*#__PURE__*/ s(i, {
                                    children: /*#__PURE__*/ c(`h2`, {
                                      className: `framer-styles-preset-on1keu`,
                                      "data-styles-preset": `O8Bh5Q3QT`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `left` },
                                      children: [
                                        /*#__PURE__*/ s(`span`, {
                                          style: {
                                            "--framer-text-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                          },
                                          children: `解决方案`,
                                        }),
                                        /*#__PURE__*/ s(`br`, {}),
                                        `数字工人-无纸化生产系统`,
                                      ],
                                    }),
                                  }),
                                className: `framer-n2exqu`,
                                "data-framer-name": `Solution Digital Worker-Paperless     Manufacturing System`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            /*#__PURE__*/ s(w, {
                              breakpoint: S,
                              overrides: {
                                rFBQtJSTW: {
                                  children:
                                    H(`v11`, f) ??
                                    /*#__PURE__*/ s(i, {
                                      children: /*#__PURE__*/ s(`p`, {
                                        className: `framer-styles-preset-fchdqd`,
                                        "data-styles-preset": `ZkrOrqcsm`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `Tier0提供一个统一的运营平台，连接 OT 和 IT，以用户为中心优化跨部门的工作流程。`,
                                      }),
                                    }),
                                },
                                z7ffcbB3W: {
                                  children:
                                    H(`v10`, f) ??
                                    /*#__PURE__*/ s(i, {
                                      children: /*#__PURE__*/ s(`p`, {
                                        className: `framer-styles-preset-fchdqd`,
                                        "data-styles-preset": `ZkrOrqcsm`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `Tier0提供一个统一的运营平台，连接 OT 和 IT，以用户为中心优化跨部门的工作流程。`,
                                      }),
                                    }),
                                },
                              },
                              children: /*#__PURE__*/ s(d, {
                                __fromCanvasComponent: !0,
                                children:
                                  H(`v9`, f) ??
                                  /*#__PURE__*/ c(i, {
                                    children: [
                                      /*#__PURE__*/ s(`p`, {
                                        className: `framer-styles-preset-fchdqd`,
                                        "data-styles-preset": `ZkrOrqcsm`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                      }),
                                      /*#__PURE__*/ s(`p`, {
                                        className: `framer-styles-preset-fchdqd`,
                                        "data-styles-preset": `ZkrOrqcsm`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `Tier0提供一个统一的运营平台，连接 OT 和 IT，以用户为中心优化跨部门的工作流程。`,
                                      }),
                                    ],
                                  }),
                                className: `framer-1gd6z8v`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        /*#__PURE__*/ c(Pe, {
                          __framer__animate: { transition: Y },
                          __framer__animateOnce: !0,
                          __framer__enter: Ge,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-84qrl4`,
                          children: [
                            /*#__PURE__*/ s(d, {
                              __fromCanvasComponent: !0,
                              children:
                                H(`v12`, f) ??
                                /*#__PURE__*/ c(i, {
                                  children: [
                                    /*#__PURE__*/ s(`p`, {
                                      className: `framer-styles-preset-1ogycj`,
                                      "data-styles-preset": `Y65iag5vt`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `left` },
                                      children: `Tier0实现了一个 无纸化工厂 的创建，将现有系统数据整合成单一真实来源。提供一套以生产为中心的应用程序，支持资产标签、智能检查、操作日志、文档管理（e-SOP/e-WI/e-P&ID）、调度和班次交接，以及实时仪表板和可视化报告。`,
                                    }),
                                    /*#__PURE__*/ s(`p`, {
                                      className: `framer-styles-preset-1ogycj`,
                                      "data-styles-preset": `Y65iag5vt`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `left` },
                                      children: /*#__PURE__*/ s(`span`, {
                                        style: {
                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                        },
                                        children: `借助这些应用，Tier0全面提升运营效率、流程透明度与员工体验，加速数字化转型。`,
                                      }),
                                    }),
                                  ],
                                }),
                              className: `framer-3vhk90`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ s(`div`, {
                              className: `framer-6y1neq`,
                              children: /*#__PURE__*/ s(`div`, {
                                className: `framer-rdmmid`,
                                "data-border": !0,
                                "data-framer-name": `Image`,
                                children: /*#__PURE__*/ s(w, {
                                  breakpoint: S,
                                  overrides: {
                                    rFBQtJSTW: {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        intrinsicHeight: 382,
                                        intrinsicWidth: 762,
                                        loading: h((m?.y || 0) + 2175.7558),
                                        pixelHeight: 337,
                                        pixelWidth: 480,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `315px`,
                                        src: `https://framerusercontent.com/images/REqcNIqkqNtIVW7vOMryhng.svg?width=480&height=337`,
                                      },
                                    },
                                    z7ffcbB3W: {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        intrinsicHeight: 382,
                                        intrinsicWidth: 762,
                                        loading: h((m?.y || 0) + 1943.6),
                                        pixelHeight: 337,
                                        pixelWidth: 480,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `728px`,
                                        src: `https://framerusercontent.com/images/REqcNIqkqNtIVW7vOMryhng.svg?width=480&height=337`,
                                      },
                                    },
                                  },
                                  children: /*#__PURE__*/ s(b, {
                                    background: {
                                      alt: ``,
                                      fit: `fit`,
                                      intrinsicHeight: 382,
                                      intrinsicWidth: 762,
                                      loading: h((m?.y || 0) + 2036),
                                      pixelHeight: 337,
                                      pixelWidth: 480,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `438px`,
                                      src: `https://framerusercontent.com/images/REqcNIqkqNtIVW7vOMryhng.svg?width=480&height=337`,
                                    },
                                    className: `framer-19b6hwx`,
                                    "data-framer-name": `Image`,
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ c(l.div, {
                      className: `framer-cdrynw`,
                      "data-framer-name": `Work`,
                      id: A,
                      layout: T,
                      ref: j,
                      children: [
                        /*#__PURE__*/ c(`div`, {
                          className: `framer-r7yp14`,
                          children: [
                            M() &&
                              /*#__PURE__*/ s(d, {
                                __fromCanvasComponent: !0,
                                children:
                                  H(`v13`, f) ??
                                  /*#__PURE__*/ s(i, {
                                    children: /*#__PURE__*/ s(`h2`, {
                                      className: `framer-styles-preset-on1keu`,
                                      "data-styles-preset": `O8Bh5Q3QT`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `left` },
                                      children: `功能亮点`,
                                    }),
                                  }),
                                className: `framer-8tzbta hidden-tkcnf1 hidden-1grqm23`,
                                "data-framer-name": `Feature Highlights`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            k() &&
                              /*#__PURE__*/ s(d, {
                                __fromCanvasComponent: !0,
                                children:
                                  H(`v13`, f) ??
                                  /*#__PURE__*/ s(i, {
                                    children: /*#__PURE__*/ s(`h2`, {
                                      className: `framer-styles-preset-on1keu`,
                                      "data-styles-preset": `O8Bh5Q3QT`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `left` },
                                      children: `功能亮点`,
                                    }),
                                  }),
                                className: `framer-cear9e hidden-e7kf34 hidden-1grqm23`,
                                "data-framer-name": `Feature Highlights`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            M() &&
                              /*#__PURE__*/ s(w, {
                                breakpoint: S,
                                overrides: {
                                  z7ffcbB3W: {
                                    height: 491,
                                    width: `730px`,
                                    y: (m?.y || 0) + 2444.2,
                                  },
                                },
                                children: /*#__PURE__*/ s(y, {
                                  children: /*#__PURE__*/ s(C, {
                                    className: `framer-qyh4pj-container hidden-tkcnf1 hidden-1grqm23`,
                                    nodeId: `Tpp3L2T84`,
                                    rendersWithMotion: !0,
                                    scopeId: `bzscPRF6y`,
                                    children: /*#__PURE__*/ s(G, {
                                      __framer__animateOnce: !1,
                                      __framer__targets: [
                                        { ref: N, target: `JXf8VPwBX` },
                                        { ref: P, target: `BD51hKaoX` },
                                        { ref: F, target: `Bx_ORUAdA` },
                                        { ref: L, target: `EDOCrciLy` },
                                      ],
                                      __framer__threshold: 0.5,
                                      __framer__variantAppearEffectEnabled: !0,
                                      height: `100%`,
                                      id: `Tpp3L2T84`,
                                      layoutId: `Tpp3L2T84`,
                                      style: { width: `100%` },
                                      variant: q(`l31xdaWmv`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            M() &&
                              /*#__PURE__*/ s(w, {
                                breakpoint: S,
                                overrides: {
                                  z7ffcbB3W: {
                                    height: 491,
                                    width: `730px`,
                                    y: (m?.y || 0) + 2980.2,
                                  },
                                },
                                children: /*#__PURE__*/ s(y, {
                                  children: /*#__PURE__*/ s(C, {
                                    className: `framer-ev8i2n-container hidden-tkcnf1 hidden-1grqm23`,
                                    nodeId: `HwPPnpUGx`,
                                    rendersWithMotion: !0,
                                    scopeId: `bzscPRF6y`,
                                    children: /*#__PURE__*/ s(G, {
                                      __framer__animateOnce: !1,
                                      __framer__targets: [
                                        { ref: N, target: `JXf8VPwBX` },
                                        { ref: P, target: `BD51hKaoX` },
                                        { ref: F, target: `Bx_ORUAdA` },
                                        { ref: L, target: `EDOCrciLy` },
                                      ],
                                      __framer__threshold: 0.5,
                                      __framer__variantAppearEffectEnabled: !0,
                                      height: `100%`,
                                      id: `HwPPnpUGx`,
                                      layoutId: `HwPPnpUGx`,
                                      style: { width: `100%` },
                                      variant: q(`DyaOSusCi`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            M() &&
                              /*#__PURE__*/ s(w, {
                                breakpoint: S,
                                overrides: {
                                  z7ffcbB3W: {
                                    height: 491,
                                    width: `730px`,
                                    y: (m?.y || 0) + 3516.2,
                                  },
                                },
                                children: /*#__PURE__*/ s(y, {
                                  children: /*#__PURE__*/ s(C, {
                                    className: `framer-1a9gl07-container hidden-tkcnf1 hidden-1grqm23`,
                                    nodeId: `wSvlPtWVD`,
                                    rendersWithMotion: !0,
                                    scopeId: `bzscPRF6y`,
                                    children: /*#__PURE__*/ s(G, {
                                      __framer__animateOnce: !1,
                                      __framer__targets: [
                                        { ref: N, target: `JXf8VPwBX` },
                                        { ref: P, target: `BD51hKaoX` },
                                        { ref: F, target: `Bx_ORUAdA` },
                                        { ref: L, target: `EDOCrciLy` },
                                      ],
                                      __framer__threshold: 0.5,
                                      __framer__variantAppearEffectEnabled: !0,
                                      height: `100%`,
                                      id: `wSvlPtWVD`,
                                      layoutId: `wSvlPtWVD`,
                                      style: { width: `100%` },
                                      variant: q(`J68gW4lBF`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            M() &&
                              /*#__PURE__*/ s(w, {
                                breakpoint: S,
                                overrides: {
                                  z7ffcbB3W: {
                                    height: 491,
                                    width: `730px`,
                                    y: (m?.y || 0) + 4052.2,
                                  },
                                },
                                children: /*#__PURE__*/ s(y, {
                                  children: /*#__PURE__*/ s(C, {
                                    className: `framer-rylf6l-container hidden-tkcnf1 hidden-1grqm23`,
                                    nodeId: `E7uo4lbdu`,
                                    rendersWithMotion: !0,
                                    scopeId: `bzscPRF6y`,
                                    children: /*#__PURE__*/ s(G, {
                                      __framer__animateOnce: !1,
                                      __framer__targets: [
                                        { ref: N, target: `JXf8VPwBX` },
                                        { ref: P, target: `BD51hKaoX` },
                                        { ref: F, target: `Bx_ORUAdA` },
                                        { ref: L, target: `EDOCrciLy` },
                                      ],
                                      __framer__threshold: 0.5,
                                      __framer__variantAppearEffectEnabled: !0,
                                      height: `100%`,
                                      id: `E7uo4lbdu`,
                                      layoutId: `E7uo4lbdu`,
                                      style: { width: `100%` },
                                      variant: q(`q2glW1kn5`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            O() &&
                              /*#__PURE__*/ s(`div`, {
                                className: `framer-bcwukf hidden-tkcnf1 hidden-e7kf34`,
                                children: /*#__PURE__*/ s(d, {
                                  __fromCanvasComponent: !0,
                                  children:
                                    H(`v13`, f) ??
                                    /*#__PURE__*/ s(i, {
                                      children: /*#__PURE__*/ s(`h2`, {
                                        className: `framer-styles-preset-on1keu`,
                                        "data-styles-preset": `O8Bh5Q3QT`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `功能亮点`,
                                      }),
                                    }),
                                  className: `framer-pl0458`,
                                  "data-framer-name": `title`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                          ],
                        }),
                        O() &&
                          /*#__PURE__*/ s(w, {
                            breakpoint: S,
                            overrides: {
                              rFBQtJSTW: {
                                height: 491,
                                width: `310px`,
                                y: (m?.y || 0) + 2489.2558,
                              },
                            },
                            children: /*#__PURE__*/ s(y, {
                              children: /*#__PURE__*/ s(C, {
                                className: `framer-1629sjb-container hidden-tkcnf1 hidden-e7kf34`,
                                nodeId: `Jcihclcfl`,
                                rendersWithMotion: !0,
                                scopeId: `bzscPRF6y`,
                                children: /*#__PURE__*/ s(G, {
                                  __framer__animateOnce: !1,
                                  __framer__targets: [
                                    { ref: N, target: `JXf8VPwBX` },
                                    { ref: P, target: `BD51hKaoX` },
                                    { ref: F, target: `Bx_ORUAdA` },
                                    { ref: L, target: `EDOCrciLy` },
                                  ],
                                  __framer__threshold: 0.5,
                                  __framer__variantAppearEffectEnabled: !0,
                                  height: `100%`,
                                  id: `Jcihclcfl`,
                                  layoutId: `Jcihclcfl`,
                                  style: { width: `100%` },
                                  variant: q(`sHMZ1gY9F`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        O() &&
                          /*#__PURE__*/ s(w, {
                            breakpoint: S,
                            overrides: {
                              rFBQtJSTW: {
                                height: 491,
                                width: `310px`,
                                y: (m?.y || 0) + 3000.2558,
                              },
                            },
                            children: /*#__PURE__*/ s(y, {
                              children: /*#__PURE__*/ s(C, {
                                className: `framer-19ocpho-container hidden-tkcnf1 hidden-e7kf34`,
                                nodeId: `s4gkJ4n3Y`,
                                rendersWithMotion: !0,
                                scopeId: `bzscPRF6y`,
                                children: /*#__PURE__*/ s(G, {
                                  __framer__animateOnce: !1,
                                  __framer__targets: [
                                    { ref: N, target: `JXf8VPwBX` },
                                    { ref: P, target: `BD51hKaoX` },
                                    { ref: F, target: `Bx_ORUAdA` },
                                    { ref: L, target: `EDOCrciLy` },
                                  ],
                                  __framer__threshold: 0.5,
                                  __framer__variantAppearEffectEnabled: !0,
                                  height: `100%`,
                                  id: `s4gkJ4n3Y`,
                                  layoutId: `s4gkJ4n3Y`,
                                  style: { width: `100%` },
                                  variant: q(`O9kOE75vC`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        O() &&
                          /*#__PURE__*/ s(w, {
                            breakpoint: S,
                            overrides: {
                              rFBQtJSTW: {
                                height: 491,
                                width: `310px`,
                                y: (m?.y || 0) + 3511.2558,
                              },
                            },
                            children: /*#__PURE__*/ s(y, {
                              children: /*#__PURE__*/ s(C, {
                                className: `framer-1not176-container hidden-tkcnf1 hidden-e7kf34`,
                                nodeId: `p_8AYPw1D`,
                                rendersWithMotion: !0,
                                scopeId: `bzscPRF6y`,
                                children: /*#__PURE__*/ s(G, {
                                  __framer__animateOnce: !1,
                                  __framer__targets: [
                                    { ref: N, target: `JXf8VPwBX` },
                                    { ref: P, target: `BD51hKaoX` },
                                    { ref: F, target: `Bx_ORUAdA` },
                                    { ref: L, target: `EDOCrciLy` },
                                  ],
                                  __framer__threshold: 0.5,
                                  __framer__variantAppearEffectEnabled: !0,
                                  height: `100%`,
                                  id: `p_8AYPw1D`,
                                  layoutId: `p_8AYPw1D`,
                                  style: { width: `100%` },
                                  variant: q(`ctFaOyhBS`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        k() &&
                          /*#__PURE__*/ c(`div`, {
                            className: `framer-1r9ah5e hidden-e7kf34 hidden-1grqm23`,
                            "data-framer-name": `Container`,
                            children: [
                              /*#__PURE__*/ c(`div`, {
                                className: `framer-1ot4abr`,
                                "data-framer-name": `Images`,
                                children: [
                                  /*#__PURE__*/ s(y, {
                                    height: 251,
                                    width: `521px`,
                                    y: (m?.y || 0) + 2610.6,
                                    children: /*#__PURE__*/ s(C, {
                                      className: `framer-1ikmihv-container`,
                                      id: R,
                                      nodeId: `CNF8lb8b2`,
                                      ref: N,
                                      scopeId: `bzscPRF6y`,
                                      children: /*#__PURE__*/ s(B, {
                                        height: `100%`,
                                        id: `CNF8lb8b2`,
                                        layoutId: `CNF8lb8b2`,
                                        ouxm6R0E4: P,
                                        pvd5xBrV5: Z(
                                          {
                                            pixelHeight: 1557,
                                            pixelWidth: 3213,
                                            src: `https://framerusercontent.com/images/okMzUF3JHFOwqlSbR4wRR4UvE.png?width=3213&height=1557`,
                                            srcSet: `https://framerusercontent.com/images/okMzUF3JHFOwqlSbR4wRR4UvE.png?scale-down-to=512&width=3213&height=1557 512w,https://framerusercontent.com/images/okMzUF3JHFOwqlSbR4wRR4UvE.png?scale-down-to=1024&width=3213&height=1557 1024w,https://framerusercontent.com/images/okMzUF3JHFOwqlSbR4wRR4UvE.png?scale-down-to=2048&width=3213&height=1557 2048w,https://framerusercontent.com/images/okMzUF3JHFOwqlSbR4wRR4UvE.png?width=3213&height=1557 3213w`,
                                          },
                                          ``
                                        ),
                                        style: { height: `100%`, width: `100%` },
                                        variant: q(`BUf5woUiT`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ s(y, {
                                    height: 263,
                                    width: `521px`,
                                    y: (m?.y || 0) + 2961.6,
                                    children: /*#__PURE__*/ s(C, {
                                      className: `framer-utj5wb-container`,
                                      id: Se,
                                      nodeId: `SDCnn_nIi`,
                                      ref: P,
                                      scopeId: `bzscPRF6y`,
                                      children: /*#__PURE__*/ s(B, {
                                        height: `100%`,
                                        id: `SDCnn_nIi`,
                                        layoutId: `SDCnn_nIi`,
                                        ouxm6R0E4: F,
                                        pvd5xBrV5: Z(
                                          {
                                            pixelHeight: 1557,
                                            pixelWidth: 3213,
                                            src: `https://framerusercontent.com/images/Oi4PrUsuvlX6RMMxyQ5Ml6b6vfQ.png?width=3213&height=1557`,
                                            srcSet: `https://framerusercontent.com/images/Oi4PrUsuvlX6RMMxyQ5Ml6b6vfQ.png?scale-down-to=512&width=3213&height=1557 512w,https://framerusercontent.com/images/Oi4PrUsuvlX6RMMxyQ5Ml6b6vfQ.png?scale-down-to=1024&width=3213&height=1557 1024w,https://framerusercontent.com/images/Oi4PrUsuvlX6RMMxyQ5Ml6b6vfQ.png?scale-down-to=2048&width=3213&height=1557 2048w,https://framerusercontent.com/images/Oi4PrUsuvlX6RMMxyQ5Ml6b6vfQ.png?width=3213&height=1557 3213w`,
                                          },
                                          ``
                                        ),
                                        style: { height: `100%`, width: `100%` },
                                        variant: q(`BUf5woUiT`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ s(y, {
                                    height: 302,
                                    width: `521px`,
                                    y: (m?.y || 0) + 3324.6,
                                    children: /*#__PURE__*/ s(C, {
                                      className: `framer-c6vzak-container`,
                                      id: Ce,
                                      nodeId: `I3acyPrfO`,
                                      ref: F,
                                      scopeId: `bzscPRF6y`,
                                      children: /*#__PURE__*/ s(B, {
                                        height: `100%`,
                                        id: `I3acyPrfO`,
                                        layoutId: `I3acyPrfO`,
                                        ouxm6R0E4: L,
                                        pvd5xBrV5: Z(
                                          {
                                            pixelHeight: 1185,
                                            pixelWidth: 2130,
                                            src: `https://framerusercontent.com/images/23Un80ZxuHsNLstvjdOK66FtY.png?width=2130&height=1185`,
                                            srcSet: `https://framerusercontent.com/images/23Un80ZxuHsNLstvjdOK66FtY.png?scale-down-to=512&width=2130&height=1185 512w,https://framerusercontent.com/images/23Un80ZxuHsNLstvjdOK66FtY.png?scale-down-to=1024&width=2130&height=1185 1024w,https://framerusercontent.com/images/23Un80ZxuHsNLstvjdOK66FtY.png?scale-down-to=2048&width=2130&height=1185 2048w,https://framerusercontent.com/images/23Un80ZxuHsNLstvjdOK66FtY.png?width=2130&height=1185 2130w`,
                                          },
                                          ``
                                        ),
                                        style: { height: `100%`, width: `100%` },
                                        variant: q(`BUf5woUiT`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ s(y, {
                                    height: 375,
                                    width: `521px`,
                                    y: (m?.y || 0) + 3726.6,
                                    children: /*#__PURE__*/ s(C, {
                                      className: `framer-1f982u5-container`,
                                      id: we,
                                      nodeId: `iZxgquzUh`,
                                      ref: L,
                                      scopeId: `bzscPRF6y`,
                                      children: /*#__PURE__*/ s(B, {
                                        height: `100%`,
                                        id: `iZxgquzUh`,
                                        layoutId: `iZxgquzUh`,
                                        ouxm6R0E4: V,
                                        pvd5xBrV5: Z(
                                          {
                                            pixelHeight: 1462,
                                            pixelWidth: 2066,
                                            src: `https://framerusercontent.com/images/GUQpsUWxTcuve1jhGsAKZ6yZgs.png?width=2066&height=1462`,
                                            srcSet: `https://framerusercontent.com/images/GUQpsUWxTcuve1jhGsAKZ6yZgs.png?scale-down-to=512&width=2066&height=1462 512w,https://framerusercontent.com/images/GUQpsUWxTcuve1jhGsAKZ6yZgs.png?scale-down-to=1024&width=2066&height=1462 1024w,https://framerusercontent.com/images/GUQpsUWxTcuve1jhGsAKZ6yZgs.png?scale-down-to=2048&width=2066&height=1462 2048w,https://framerusercontent.com/images/GUQpsUWxTcuve1jhGsAKZ6yZgs.png?width=2066&height=1462 2066w`,
                                          },
                                          ``
                                        ),
                                        style: { height: `100%`, width: `100%` },
                                        variant: q(`BUf5woUiT`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ s(y, {
                                    height: 395.5,
                                    width: `521px`,
                                    y: (m?.y || 0) + 4201.6,
                                    children: /*#__PURE__*/ s(C, {
                                      className: `framer-160rlur-container`,
                                      id: Ee,
                                      nodeId: `kG7qZLhuh`,
                                      ref: V,
                                      scopeId: `bzscPRF6y`,
                                      children: /*#__PURE__*/ s(B, {
                                        height: `100%`,
                                        id: `kG7qZLhuh`,
                                        layoutId: `kG7qZLhuh`,
                                        pvd5xBrV5: Z(
                                          {
                                            pixelHeight: 1080,
                                            pixelWidth: 1920,
                                            src: `https://framerusercontent.com/images/WPVsC9RvP1P0LGXGIexP3mz0.png?width=1920&height=1080`,
                                            srcSet: `https://framerusercontent.com/images/WPVsC9RvP1P0LGXGIexP3mz0.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/WPVsC9RvP1P0LGXGIexP3mz0.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/WPVsC9RvP1P0LGXGIexP3mz0.png?width=1920&height=1080 1920w`,
                                          },
                                          ``
                                        ),
                                        style: { height: `100%`, width: `100%` },
                                        variant: q(`BUf5woUiT`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ s(`div`, {
                                className: `framer-1po3oya`,
                                "data-framer-name": `Detail Card`,
                                children: /*#__PURE__*/ s(y, {
                                  height: 491,
                                  width: `669px`,
                                  y: (m?.y || 0) + 2610.6,
                                  children: /*#__PURE__*/ s(C, {
                                    className: `framer-1n5agxd-container`,
                                    nodeId: `faqpgkAYk`,
                                    rendersWithMotion: !0,
                                    scopeId: `bzscPRF6y`,
                                    children: /*#__PURE__*/ s(G, {
                                      __framer__animateOnce: !1,
                                      __framer__targets: [
                                        { ref: N, target: `JXf8VPwBX` },
                                        { ref: P, target: `BD51hKaoX` },
                                        { ref: F, target: `Bx_ORUAdA` },
                                        { ref: L, target: `EDOCrciLy` },
                                      ],
                                      __framer__threshold: 0.5,
                                      __framer__variantAppearEffectEnabled: !0,
                                      height: `100%`,
                                      id: `faqpgkAYk`,
                                      layoutId: `faqpgkAYk`,
                                      style: { width: `100%` },
                                      variant: q(`JXf8VPwBX`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        O() &&
                          /*#__PURE__*/ s(w, {
                            breakpoint: S,
                            overrides: {
                              rFBQtJSTW: {
                                height: 491,
                                width: `310px`,
                                y: (m?.y || 0) + 4022.2558,
                              },
                            },
                            children: /*#__PURE__*/ s(y, {
                              children: /*#__PURE__*/ s(C, {
                                className: `framer-mvvy9j-container hidden-tkcnf1 hidden-e7kf34`,
                                nodeId: `N60mF6zT0`,
                                rendersWithMotion: !0,
                                scopeId: `bzscPRF6y`,
                                children: /*#__PURE__*/ s(G, {
                                  __framer__animateOnce: !1,
                                  __framer__targets: [
                                    { ref: N, target: `JXf8VPwBX` },
                                    { ref: P, target: `BD51hKaoX` },
                                    { ref: F, target: `Bx_ORUAdA` },
                                    { ref: L, target: `EDOCrciLy` },
                                  ],
                                  __framer__threshold: 0.5,
                                  __framer__variantAppearEffectEnabled: !0,
                                  height: `100%`,
                                  id: `N60mF6zT0`,
                                  layoutId: `N60mF6zT0`,
                                  style: { width: `100%` },
                                  variant: q(`CV0XCAi2E`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                    M() &&
                      /*#__PURE__*/ c(l.div, {
                        className: `framer-15z96f4 hidden-tkcnf1 hidden-1grqm23`,
                        layout: T,
                        children: [
                          /*#__PURE__*/ s(w, {
                            breakpoint: S,
                            overrides: { z7ffcbB3W: { y: (m?.y || 0) + 988.6 } },
                            children: /*#__PURE__*/ s(y, {
                              height: 349,
                              children: /*#__PURE__*/ s(C, {
                                className: `framer-11n32mh-container`,
                                nodeId: `o4bDwHX8F`,
                                scopeId: `bzscPRF6y`,
                                children: /*#__PURE__*/ s(z, {
                                  height: `100%`,
                                  id: `o4bDwHX8F`,
                                  layoutId: `o4bDwHX8F`,
                                  variant: q(`T4SBAGZ2h`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          /*#__PURE__*/ s(d, {
                            __fromCanvasComponent: !0,
                            children:
                              H(`v4`, f) ??
                              /*#__PURE__*/ s(i, {
                                children: /*#__PURE__*/ s(`h2`, {
                                  className: `framer-styles-preset-on1keu`,
                                  "data-styles-preset": `O8Bh5Q3QT`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `left` },
                                  children: `交付物`,
                                }),
                              }),
                            className: `framer-abidsw`,
                            "data-framer-name": `title`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    /*#__PURE__*/ c(l.div, {
                      className: `framer-19qeia3`,
                      layout: T,
                      children: [
                        k() &&
                          /*#__PURE__*/ s(`div`, {
                            className: `framer-b9llpy hidden-e7kf34 hidden-1grqm23`,
                            "data-framer-name": `header`,
                            children: /*#__PURE__*/ s(y, {
                              height: 498,
                              width: m?.width || `100vw`,
                              y: (m?.y || 0) + 4737.1,
                              children: /*#__PURE__*/ s(C, {
                                className: `framer-mu03rt-container`,
                                nodeId: `OaQPZouhz`,
                                scopeId: `bzscPRF6y`,
                                children: /*#__PURE__*/ s(E, {
                                  height: `100%`,
                                  id: `OaQPZouhz`,
                                  layoutId: `OaQPZouhz`,
                                  style: { width: `100%` },
                                  variant: q(`zev4Tv3qQ`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        M() &&
                          /*#__PURE__*/ s(w, {
                            breakpoint: S,
                            overrides: {
                              z7ffcbB3W: {
                                height: 498,
                                width: m?.width || `100vw`,
                                y: (m?.y || 0) + 4613.2,
                              },
                            },
                            children: /*#__PURE__*/ s(y, {
                              children: /*#__PURE__*/ s(C, {
                                className: `framer-e7yvs2-container hidden-tkcnf1 hidden-1grqm23`,
                                nodeId: `M11gql7Yc`,
                                scopeId: `bzscPRF6y`,
                                children: /*#__PURE__*/ s(E, {
                                  height: `100%`,
                                  id: `M11gql7Yc`,
                                  layoutId: `M11gql7Yc`,
                                  style: { width: `100%` },
                                  variant: q(`G8rxyXoDj`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        O() &&
                          /*#__PURE__*/ s(w, {
                            breakpoint: S,
                            overrides: {
                              rFBQtJSTW: {
                                height: 498,
                                width: m?.width || `100vw`,
                                y: (m?.y || 0) + 4563.2558,
                              },
                            },
                            children: /*#__PURE__*/ s(y, {
                              children: /*#__PURE__*/ s(C, {
                                className: `framer-1x4wuqk-container hidden-tkcnf1 hidden-e7kf34`,
                                nodeId: `nFNIlKx5E`,
                                scopeId: `bzscPRF6y`,
                                children: /*#__PURE__*/ s(E, {
                                  height: `100%`,
                                  id: `nFNIlKx5E`,
                                  layoutId: `nFNIlKx5E`,
                                  style: { width: `100%` },
                                  variant: q(`vXscR1iJC`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
                /*#__PURE__*/ s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (Ye = [
        `.framer-DV4C8.framer-1uwpghh, .framer-DV4C8 .framer-1uwpghh { display: block; }`,
        `.framer-DV4C8.framer-tkcnf1 { align-content: center; align-items: center; background-color: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-DV4C8 .framer-5q16ab-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 4; }`,
        `.framer-DV4C8 .framer-19fqdvy { flex: none; height: 600px; overflow: hidden; position: relative; width: 1240px; }`,
        `.framer-DV4C8 .framer-x4nvlx { align-content: center; align-items: center; bottom: 134px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; width: 469px; }`,
        `.framer-DV4C8 .framer-1qh82t2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: 469px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-DV4C8 .framer-m1bwaw { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: 471px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-DV4C8 .framer-1xmnlxe { background-color: #ffffff; flex: none; height: 518px; overflow: hidden; position: absolute; right: -3px; top: calc(49.09747292418775% - 518px / 2); width: 748px; }`,
        `.framer-DV4C8 .framer-tnd6n0 { aspect-ratio: 1.8645962732919255 / 1; bottom: 2px; flex: none; height: auto; left: 52%; overflow: visible; position: absolute; transform: translateX(-50%); width: 713px; }`,
        `.framer-DV4C8 .framer-1gt4gjk { aspect-ratio: 1.8645962732919255 / 1; flex: none; height: auto; left: 0px; overflow: visible; position: absolute; top: 0px; width: 310px; }`,
        `.framer-DV4C8 .framer-189ooei { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-DV4C8 .framer-xnjkiy { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 308px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-DV4C8 .framer-1z0ir40-container, .framer-DV4C8 .framer-11n32mh-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-DV4C8 .framer-6vuv5k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-DV4C8 .framer-1ibrgof { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 100px 0px 100px; position: relative; width: 100%; }`,
        `.framer-DV4C8 .framer-134t258, .framer-DV4C8 .framer-n2exqu { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-DV4C8 .framer-11wql58, .framer-DV4C8 .framer-1gd6z8v { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 713px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-DV4C8 .framer-5x1gqr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 100px 0px 100px; position: relative; width: 100%; }`,
        `.framer-DV4C8 .framer-c2kad5-container, .framer-DV4C8 .framer-15xosbo-container, .framer-DV4C8 .framer-1mvgj9g-container, .framer-DV4C8 .framer-1iwbbpl-container { flex: 1 0 0px; height: 279px; position: relative; width: 1px; }`,
        `.framer-DV4C8 .framer-1ntyjce-container { flex: none; height: auto; position: relative; width: 1440px; }`,
        `.framer-DV4C8 .framer-3jjmk4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-DV4C8 .framer-ilo3pj { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 100px 0px 100px; position: relative; width: 1440px; }`,
        `.framer-DV4C8 .framer-84qrl4 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 98px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1240px; }`,
        `.framer-DV4C8 .framer-3vhk90 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 50%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-DV4C8 .framer-6y1neq { flex: none; height: 367px; overflow: hidden; position: relative; width: 516px; }`,
        `.framer-DV4C8 .framer-rdmmid { --border-bottom-width: 1px; --border-color: rgba(5, 11, 20, 0.25); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; bottom: 0px; flex: none; overflow: visible; position: absolute; right: 0px; top: 0px; width: 515px; }`,
        `.framer-DV4C8 .framer-19b6hwx { border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: none; height: 344px; left: calc(50.19379844961242% - 438px / 2); overflow: visible; position: absolute; top: calc(50.68119891008177% - 344px / 2); width: 438px; }`,
        `.framer-DV4C8 .framer-cdrynw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1400px; overflow: visible; padding: 0px 40px 40px 40px; position: relative; scroll-margin-top: 40px; width: 100%; }`,
        `.framer-DV4C8 .framer-r7yp14 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 100px 0px 100px; position: relative; width: 1440px; }`,
        `.framer-DV4C8 .framer-8tzbta, .framer-DV4C8 .framer-abidsw { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 730px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-DV4C8 .framer-cear9e { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-DV4C8 .framer-qyh4pj-container, .framer-DV4C8 .framer-ev8i2n-container, .framer-DV4C8 .framer-1a9gl07-container, .framer-DV4C8 .framer-rylf6l-container, .framer-DV4C8 .framer-1629sjb-container, .framer-DV4C8 .framer-19ocpho-container, .framer-DV4C8 .framer-1not176-container, .framer-DV4C8 .framer-mvvy9j-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
        `.framer-DV4C8 .framer-bcwukf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 24px; justify-content: center; overflow: hidden; padding: 0px 40px 0px 40px; position: relative; width: 389px; }`,
        `.framer-DV4C8 .framer-pl0458 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 310px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-DV4C8 .framer-1r9ah5e { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1240px; }`,
        `.framer-DV4C8 .framer-1ot4abr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; overflow: visible; padding: 30px 0px 0px 0px; position: relative; width: 521px; }`,
        `.framer-DV4C8 .framer-1ikmihv-container { flex: none; height: 251px; position: sticky; top: 92px; width: 100%; z-index: 1; }`,
        `.framer-DV4C8 .framer-utj5wb-container { flex: none; height: 263px; position: sticky; top: 92px; width: 100%; z-index: 1; }`,
        `.framer-DV4C8 .framer-c6vzak-container { flex: none; height: 302px; position: sticky; top: 92px; width: 100%; z-index: 1; }`,
        `.framer-DV4C8 .framer-1f982u5-container { flex: none; height: 375px; position: sticky; top: 92px; width: 100%; z-index: 1; }`,
        `.framer-DV4C8 .framer-160rlur-container { flex: none; height: 396px; opacity: 0; position: sticky; top: 92px; width: 100%; z-index: 1; }`,
        `.framer-DV4C8 .framer-1po3oya { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px 0px 0px 0px; position: sticky; top: 58px; width: 1px; z-index: 1; }`,
        `.framer-DV4C8 .framer-1n5agxd-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; z-index: 1; }`,
        `.framer-DV4C8 .framer-15z96f4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 40px 80px 40px 80px; position: relative; width: 1440px; }`,
        `.framer-DV4C8 .framer-19qeia3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-DV4C8 .framer-b9llpy { align-content: center; align-items: center; background-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-DV4C8 .framer-mu03rt-container, .framer-DV4C8 .framer-e7yvs2-container, .framer-DV4C8 .framer-1x4wuqk-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...we,
        ...k,
        ...ge,
        ...F,
        `.framer-DV4C8[data-border="true"]::after, .framer-DV4C8 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-DV4C8.framer-tkcnf1 { gap: 70px; padding: 30px 0px 0px 0px; width: 810px; } .framer-DV4C8 .framer-5q16ab-container, .framer-DV4C8 .framer-abidsw { order: 0; } .framer-DV4C8 .framer-19fqdvy { height: 333px; order: 1; width: 100%; } .framer-DV4C8 .framer-x4nvlx { bottom: 36px; gap: 15px; left: 40px; width: 300px; } .framer-DV4C8 .framer-1qh82t2, .framer-DV4C8 .framer-m1bwaw { width: 100%; } .framer-DV4C8 .framer-1xmnlxe { height: 300px; top: calc(55.25525525525528% - 300px / 2); width: 424px; } .framer-DV4C8 .framer-tnd6n0 { bottom: 14px; left: -2px; transform: unset; width: 383px; } .framer-DV4C8 .framer-6vuv5k { order: 3; width: 100%; } .framer-DV4C8 .framer-1ibrgof { gap: 45px; height: 75px; padding: 0px 40px 0px 40px; width: 730px; } .framer-DV4C8 .framer-134t258 { flex: none; order: 0; width: 274px; } .framer-DV4C8 .framer-11wql58 { order: 1; width: 409px; } .framer-DV4C8 .framer-5x1gqr { gap: 15px; padding: 0px 40px 0px 40px; } .framer-DV4C8 .framer-3jjmk4 { order: 6; } .framer-DV4C8 .framer-ilo3pj { gap: 45px; padding: 0px; width: 718px; } .framer-DV4C8 .framer-n2exqu { flex: none; order: 0; width: 335px; } .framer-DV4C8 .framer-1gd6z8v { flex: 1 0 0px; order: 1; width: 1px; } .framer-DV4C8 .framer-84qrl4 { flex-direction: column; gap: 41px; width: 730px; } .framer-DV4C8 .framer-3vhk90 { order: 0; width: 730px; } .framer-DV4C8 .framer-6y1neq { order: 1; width: 731px; } .framer-DV4C8 .framer-rdmmid { height: 367px; top: unset; width: 728px; } .framer-DV4C8 .framer-19b6hwx { bottom: 0px; left: unset; right: 0px; top: unset; width: 728px; } .framer-DV4C8 .framer-cdrynw { gap: 40px; order: 7; padding: 0px 40px 0px 40px; } .framer-DV4C8 .framer-r7yp14 { gap: 45px; order: 0; padding: 0px; width: 730px; } .framer-DV4C8 .framer-8tzbta, .framer-DV4C8 .framer-11n32mh-container { order: 1; } .framer-DV4C8 .framer-qyh4pj-container { order: 2; } .framer-DV4C8 .framer-ev8i2n-container { order: 3; } .framer-DV4C8 .framer-1a9gl07-container { order: 4; } .framer-DV4C8 .framer-rylf6l-container { order: 5; } .framer-DV4C8 .framer-15z96f4 { order: 4; padding: 40px; width: 100%; } .framer-DV4C8 .framer-19qeia3 { order: 8; }}`,
        `@media (max-width: 809.98px) { .framer-DV4C8.framer-tkcnf1 { gap: 50px; width: 390px; } .framer-DV4C8 .framer-5q16ab-container, .framer-DV4C8 .framer-bcwukf, .framer-DV4C8 .framer-pl0458 { order: 0; } .framer-DV4C8 .framer-19fqdvy { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; order: 1; padding: 130px 40px 0px 40px; width: 390px; } .framer-DV4C8 .framer-x4nvlx { bottom: unset; left: unset; position: relative; width: 100%; } .framer-DV4C8 .framer-1gt4gjk { left: unset; position: relative; top: unset; } .framer-DV4C8 .framer-189ooei { order: 4; } .framer-DV4C8 .framer-6vuv5k { gap: 20px; order: 3; padding: 0px 40px 0px 40px; width: 390px; } .framer-DV4C8 .framer-1ibrgof { flex-direction: column; padding: 0px; } .framer-DV4C8 .framer-134t258, .framer-DV4C8 .framer-n2exqu { flex: none; width: 100%; } .framer-DV4C8 .framer-11wql58, .framer-DV4C8 .framer-1gd6z8v { width: 100%; } .framer-DV4C8 .framer-5x1gqr { flex-direction: column; gap: 15px; padding: 0px; } .framer-DV4C8 .framer-c2kad5-container, .framer-DV4C8 .framer-15xosbo-container, .framer-DV4C8 .framer-1mvgj9g-container, .framer-DV4C8 .framer-1iwbbpl-container { flex: none; height: 90px; width: 100%; } .framer-DV4C8 .framer-3jjmk4 { gap: 20px; order: 6; } .framer-DV4C8 .framer-ilo3pj { flex-direction: column; padding: 0px; width: 310px; } .framer-DV4C8 .framer-84qrl4 { flex-direction: column; gap: 20px; width: 316px; } .framer-DV4C8 .framer-3vhk90 { order: 0; width: 315px; } .framer-DV4C8 .framer-6y1neq { height: 227px; order: 1; width: 316px; } .framer-DV4C8 .framer-rdmmid { bottom: unset; height: 212px; top: calc(50.00000000000002% - 212px / 2); width: 315px; } .framer-DV4C8 .framer-19b6hwx { bottom: 0px; height: unset; left: 0px; right: 0px; top: 0px; width: unset; } .framer-DV4C8 .framer-cdrynw { gap: 20px; order: 7; padding: 0px; width: 310px; } .framer-DV4C8 .framer-r7yp14 { padding: 0px; width: 100%; } .framer-DV4C8 .framer-19qeia3 { order: 8; }}`,
      ]),
      ($ = se(Je, Ye, `framer-DV4C8`)),
      ($.displayName = `Solution / Imi`),
      ($.defaultProps = { height: 5044, width: 1440 }),
      x(
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
          ...je,
          ...Me,
          ...Ne,
          ...Fe,
          ...Ie,
          ...Le,
          ...f(V),
          ...f(A),
          ...f(_e),
          ...f(j),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) =>
          S(
            [
              () => p(D, {}, t),
              () => p(z, {}, t),
              () => p(I, {}, t),
              () => p(N, {}, t),
              () => p(B, {}, t),
              () => p(E, {}, t),
            ],
            t
          ),
      }),
      (Xe = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerbzscPRF6y`,
            slots: [],
            annotations: {
              framerDisplayContentsDiv: `false`,
              framerAutoSizeImages: `true`,
              framerColorSyntax: `true`,
              framerContractVersion: `1`,
              framerResponsiveScreen: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"z7ffcbB3W":{"layout":["fixed","auto"]},"rFBQtJSTW":{"layout":["fixed","auto"]}}}`,
              framerImmutableVariables: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerIntrinsicWidth: `1440`,
              framerComponentViewportWidth: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerScrollSections: `{"wEqHp_GBi":{"pattern":":wEqHp_GBi","name":"work"},"CNF8lb8b2":{"pattern":":CNF8lb8b2","name":"card-1"},"SDCnn_nIi":{"pattern":":SDCnn_nIi","name":"card-2"},"I3acyPrfO":{"pattern":":I3acyPrfO","name":"card-3"},"iZxgquzUh":{"pattern":":iZxgquzUh","name":"card-4"},"kG7qZLhuh":{"pattern":":kG7qZLhuh","name":"card-5"}}`,
              framerIntrinsicHeight: `5044`,
            },
          },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
Ze();
export { Xe as __FramerMetadata__, $ as default, ze as queryParamNames };
//# sourceMappingURL=ZeCM4Wyrx2-sYjEArmwKYBDYv8LjCzvADomjMi3Smfc.6ek7_vUg.mjs.map
