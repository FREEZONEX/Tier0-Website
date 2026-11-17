import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  D as t,
  F as n,
  O as r,
  P as i,
  R as a,
  S as ee,
  c as o,
  l as te,
  m as s,
  s as c,
  u as l,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { S as ne, Yi as u, t as d, v as re } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import {
  D as f,
  Et as ie,
  G as p,
  I as m,
  P as h,
  Pt as g,
  Q as _,
  St as v,
  U as y,
  a as b,
  bt as ae,
  d as oe,
  f as se,
  g as x,
  gt as ce,
  j as le,
  lt as S,
  m as C,
  o as w,
  p as T,
  v as E,
  w as D,
  wt as ue,
  y as de,
  yt as fe,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { n as O, t as k } from "./Ticker.sJH4gKu0.mjs?v=20261116-migration-v2";
import {
  a as pe,
  c as me,
  m as A,
  n as j,
  o as M,
  p as N,
  s as P,
  t as F,
} from "./shared-lib.CHy_rbfQ.mjs?v=20261116-migration-v2";
import { i as I, n as L, r as R, t as he } from "./aqwnXEE4n.hmCSLb_E.mjs?v=20261116-migration-v2";
import { i as ge, n as _e, r as ve, t as ye } from "./TTQCH8Fpp.Da_B3N68.mjs?v=20261116-migration-v2";
import { r as be, t as z } from "./aJzI4SwR5.TTGTv40G.mjs?v=20261116-migration-v2";
import { n as xe, r as Se } from "./DqdPzqQks.D4SFbIrn.mjs?v=20261116-migration-v2";
function B(e, t) {
  for (; t; ) {
    let n = V[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function Ce(e) {
  let t = [];
  for (; e; ) {
    let n = V[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function we(e) {
  let t = Ce(e);
  if (t) throw t;
}
var V;
function H() {
  return (H = e(() => {
    (_(), (V = { AYmst8Nt3: new E(() => import("./DqdPzqQks-0.Dd-NGCHS.mjs?v=20261116-migration-v2")) }));
  }))();
}
var Te, U, W, G, K, q, J, Y, X, Ee, Z, De, Q, Oe, ke, Ae, je, $, Me;
function Ne() {
  return (Ne = e(() => {
    (o(),
      _(),
      d(),
      r(),
      O(),
      be(),
      A(),
      j(),
      I(),
      ge(),
      me(),
      H(),
      xe(),
      (Te = y(k)),
      (U = y(z)),
      (W = y(N)),
      (G = y(F)),
      (K = {
        dhNDGCvmG: `(min-width: 1440px)`,
        JAZIrGhBG: `(max-width: 809.98px)`,
        t2MdvH4zU: `(min-width: 810px) and (max-width: 1439.98px)`,
      }),
      (q = () => typeof document < `u`),
      (J = [`category`]),
      (Y = `framer-ijsGM`),
      (X = {
        dhNDGCvmG: `framer-v-1t4mcdm`,
        JAZIrGhBG: `framer-v-1v4pesi`,
        t2MdvH4zU: `framer-v-qvcsgb`,
      }),
      (Ee = (e, t, n) => (e && t ? `position` : n)),
      (Z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (De = (e, t, n) => {
        switch (e.state) {
          case `success`:
            return t.success ?? n;
          case `pending`:
            return t.pending ?? n;
          case `error`:
            return t.error ?? n;
          case `incomplete`:
            return t.incomplete ?? n;
          default:
            return n;
        }
      }),
      (Q = { Desktop: `dhNDGCvmG`, Phone: `JAZIrGhBG`, Tablet: `t2MdvH4zU` }),
      (Oe = ({ value: e }) =>
        v()
          ? null
          : /*#__PURE__*/ c(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (ke = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Q[r.variant] ?? r.variant ?? `dhNDGCvmG`,
      })),
      (Ae = /*#__PURE__*/ s(function (e, r) {
        let o = ee(null),
          s = r ?? o;
        t();
        let { activeLocale: d, contentLocale: p, setLocale: m } = ue(),
          g = ce(),
          { style: _, className: v, layoutId: y, variant: le, ...S } = ke(e),
          E = n(() => Se({}, p), [p]);
        ie(E);
        let [O, me] = ae(le, K, !1),
          A = h(Y, he, ye, pe),
          j = i(C)?.isLayoutTemplate,
          M = !!i(ne)?.transition?.layout,
          P = Ee(j, M);
        we(d);
        let I = () => !q() || ![`t2MdvH4zU`, `JAZIrGhBG`].includes(O),
          L = () => !q() || O !== `JAZIrGhBG`,
          R = () => !q() || O === `JAZIrGhBG`;
        return (
          fe({}),
          /*#__PURE__*/ c(C.Provider, {
            value: {
              activeVariantId: O,
              humanReadableVariantMap: Q,
              primaryVariantId: `dhNDGCvmG`,
              variantClassNames: X,
            },
            children: /*#__PURE__*/ l(re, {
              id: y ?? `DqdPzqQks`,
              children: [
                /*#__PURE__*/ c(Oe, {
                  value: `html body { background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ l(u.div, {
                  ...S,
                  className: h(A, `framer-1t4mcdm`, v),
                  ref: s,
                  style: { ..._ },
                  children: [
                    /*#__PURE__*/ l(u.div, {
                      className: `framer-1t3gxjb`,
                      layout: P,
                      children: [
                        /*#__PURE__*/ l(`div`, {
                          className: `framer-6pc9ow`,
                          children: [
                            /*#__PURE__*/ c(f, {
                              __fromCanvasComponent: !0,
                              children:
                                B(`v0`, p) ??
                                /*#__PURE__*/ c(a, {
                                  children: /*#__PURE__*/ c(`h1`, {
                                    className: `framer-styles-preset-29f6n5`,
                                    "data-styles-preset": `aqwnXEE4n`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                    },
                                    children: `Tier0 资源中心`,
                                  }),
                                }),
                              className: `framer-16iwf6y`,
                              "data-framer-name": `Heading`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ c(`div`, {
                              className: `framer-1ifr68r`,
                              children: /*#__PURE__*/ c(f, {
                                __fromCanvasComponent: !0,
                                children:
                                  B(`v1`, p) ??
                                  /*#__PURE__*/ c(a, {
                                    children: /*#__PURE__*/ c(`p`, {
                                      className: `framer-styles-preset-wd9b9c`,
                                      "data-styles-preset": `TTQCH8Fpp`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `center` },
                                      children: `下载用户手册和商业案例`,
                                    }),
                                  }),
                                className: `framer-172si91`,
                                "data-framer-name": `Paragraph`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        /*#__PURE__*/ c(`div`, {
                          className: `framer-1kosyfm`,
                          children: /*#__PURE__*/ c(b, {
                            children: /*#__PURE__*/ c(w, {
                              className: `framer-w3qyau-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `cMvd14k9L`,
                              scopeId: `DqdPzqQks`,
                              children: /*#__PURE__*/ c(k, {
                                alignment: `center`,
                                direction: `left`,
                                fadeOptions: {
                                  fadeAlpha: 0,
                                  fadeContent: !0,
                                  fadeInset: 0,
                                  fadeWidth: 25,
                                  overflow: !1,
                                },
                                gap: 16,
                                height: `100%`,
                                hoverFactor: 1,
                                id: `cMvd14k9L`,
                                layoutId: `cMvd14k9L`,
                                padding: 0,
                                paddingBottom: 0,
                                paddingLeft: 0,
                                paddingPerSide: !1,
                                paddingRight: 0,
                                paddingTop: 0,
                                sizingOptions: { heightType: !0, widthType: !0 },
                                slots: [
                                  /*#__PURE__*/ c(u.div, {
                                    className: `framer-1rr42p1`,
                                    "data-border": !0,
                                    children: /*#__PURE__*/ c(x, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1901,
                                        intrinsicWidth: 3379.5,
                                        pixelHeight: 3802,
                                        pixelWidth: 6759,
                                        sizes: `423px`,
                                        src: `https://framerusercontent.com/images/XG50PhXXZwyDEmVJFmh5uHLB8g.png?width=6759&height=3802`,
                                        srcSet: `https://framerusercontent.com/images/XG50PhXXZwyDEmVJFmh5uHLB8g.png?scale-down-to=512&width=6759&height=3802 512w,https://framerusercontent.com/images/XG50PhXXZwyDEmVJFmh5uHLB8g.png?scale-down-to=1024&width=6759&height=3802 1024w,https://framerusercontent.com/images/XG50PhXXZwyDEmVJFmh5uHLB8g.png?scale-down-to=2048&width=6759&height=3802 2048w,https://framerusercontent.com/images/XG50PhXXZwyDEmVJFmh5uHLB8g.png?scale-down-to=4096&width=6759&height=3802 4096w,https://framerusercontent.com/images/XG50PhXXZwyDEmVJFmh5uHLB8g.png?width=6759&height=3802 6759w`,
                                      },
                                      className: `framer-bfk69u`,
                                      "data-framer-name": `Slide 16 9 - 3`,
                                    }),
                                  }),
                                  /*#__PURE__*/ c(u.div, {
                                    className: `framer-1xqo132`,
                                    "data-border": !0,
                                    children: /*#__PURE__*/ c(x, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1901,
                                        intrinsicWidth: 3379.5,
                                        pixelHeight: 3802,
                                        pixelWidth: 6759,
                                        sizes: `423px`,
                                        src: `https://framerusercontent.com/images/xX3Co7u4c7d3znYuPha9VVpLfr4.png?width=6759&height=3802`,
                                        srcSet: `https://framerusercontent.com/images/xX3Co7u4c7d3znYuPha9VVpLfr4.png?scale-down-to=512&width=6759&height=3802 512w,https://framerusercontent.com/images/xX3Co7u4c7d3znYuPha9VVpLfr4.png?scale-down-to=1024&width=6759&height=3802 1024w,https://framerusercontent.com/images/xX3Co7u4c7d3znYuPha9VVpLfr4.png?scale-down-to=2048&width=6759&height=3802 2048w,https://framerusercontent.com/images/xX3Co7u4c7d3znYuPha9VVpLfr4.png?scale-down-to=4096&width=6759&height=3802 4096w,https://framerusercontent.com/images/xX3Co7u4c7d3znYuPha9VVpLfr4.png?width=6759&height=3802 6759w`,
                                      },
                                      className: `framer-1b8x8v0`,
                                      "data-framer-name": `Slide 16 9 - 4`,
                                    }),
                                  }),
                                  /*#__PURE__*/ c(u.div, {
                                    className: `framer-1as3ca8`,
                                    "data-border": !0,
                                    children: /*#__PURE__*/ c(x, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1901,
                                        intrinsicWidth: 3379.5,
                                        pixelHeight: 3802,
                                        pixelWidth: 6759,
                                        sizes: `423px`,
                                        src: `https://framerusercontent.com/images/JHqcQnVmcEH2MEf5hCJC0OC6R2o.png?width=6759&height=3802`,
                                        srcSet: `https://framerusercontent.com/images/JHqcQnVmcEH2MEf5hCJC0OC6R2o.png?scale-down-to=512&width=6759&height=3802 512w,https://framerusercontent.com/images/JHqcQnVmcEH2MEf5hCJC0OC6R2o.png?scale-down-to=1024&width=6759&height=3802 1024w,https://framerusercontent.com/images/JHqcQnVmcEH2MEf5hCJC0OC6R2o.png?scale-down-to=2048&width=6759&height=3802 2048w,https://framerusercontent.com/images/JHqcQnVmcEH2MEf5hCJC0OC6R2o.png?scale-down-to=4096&width=6759&height=3802 4096w,https://framerusercontent.com/images/JHqcQnVmcEH2MEf5hCJC0OC6R2o.png?width=6759&height=3802 6759w`,
                                      },
                                      className: `framer-gojkr8`,
                                      "data-framer-name": `Slide 16 9 - 1`,
                                      children: /*#__PURE__*/ l(u.div, {
                                        className: `framer-1unpm6s`,
                                        children: [
                                          /*#__PURE__*/ c(u.div, {
                                            className: `framer-1as6qqi`,
                                            "data-border": !0,
                                            children: /*#__PURE__*/ c(f, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                B(`v2`, p) ??
                                                /*#__PURE__*/ c(a, {
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `12px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `400`,
                                                      "--framer-text-color": `var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29))`,
                                                    },
                                                    children: `英文`,
                                                  }),
                                                }),
                                              className: `framer-1o85hdh`,
                                              fonts: [`GF;IBM Plex Sans-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          /*#__PURE__*/ c(u.div, {
                                            className: `framer-be70lm`,
                                            "data-border": !0,
                                            children: /*#__PURE__*/ c(f, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                B(`v3`, p) ??
                                                /*#__PURE__*/ c(a, {
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `12px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `400`,
                                                      "--framer-text-color": `var(--token-a648c855-5db0-4414-a253-4cf6cef645b8, rgb(29, 119, 254))`,
                                                    },
                                                    children: `中文`,
                                                  }),
                                                }),
                                              className: `framer-1jd0ai8`,
                                              fonts: [`GF;IBM Plex Sans-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ c(u.div, {
                                    className: `framer-l8xwlp`,
                                    "data-border": !0,
                                    children: /*#__PURE__*/ c(x, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1901,
                                        intrinsicWidth: 3379.5,
                                        pixelHeight: 3802,
                                        pixelWidth: 6759,
                                        sizes: `423px`,
                                        src: `https://framerusercontent.com/images/19nYA0A8itLETe2qCm9k6fZgo.png?width=6759&height=3802`,
                                        srcSet: `https://framerusercontent.com/images/19nYA0A8itLETe2qCm9k6fZgo.png?scale-down-to=512&width=6759&height=3802 512w,https://framerusercontent.com/images/19nYA0A8itLETe2qCm9k6fZgo.png?scale-down-to=1024&width=6759&height=3802 1024w,https://framerusercontent.com/images/19nYA0A8itLETe2qCm9k6fZgo.png?scale-down-to=2048&width=6759&height=3802 2048w,https://framerusercontent.com/images/19nYA0A8itLETe2qCm9k6fZgo.png?scale-down-to=4096&width=6759&height=3802 4096w,https://framerusercontent.com/images/19nYA0A8itLETe2qCm9k6fZgo.png?width=6759&height=3802 6759w`,
                                      },
                                      className: `framer-3wdw1j`,
                                      "data-framer-name": `Slide 16 9 - 2`,
                                      children: /*#__PURE__*/ l(u.div, {
                                        className: `framer-rjtzx8`,
                                        children: [
                                          /*#__PURE__*/ c(u.div, {
                                            className: `framer-18yf8du`,
                                            "data-border": !0,
                                            children: /*#__PURE__*/ c(f, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                B(`v2`, p) ??
                                                /*#__PURE__*/ c(a, {
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `12px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `400`,
                                                      "--framer-text-color": `var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29))`,
                                                    },
                                                    children: `英文`,
                                                  }),
                                                }),
                                              className: `framer-1r41pr6`,
                                              fonts: [`GF;IBM Plex Sans-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          /*#__PURE__*/ c(u.div, {
                                            className: `framer-jj0xdc`,
                                            "data-border": !0,
                                            children: /*#__PURE__*/ c(f, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                B(`v3`, p) ??
                                                /*#__PURE__*/ c(a, {
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `12px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `400`,
                                                      "--framer-text-color": `var(--token-a648c855-5db0-4414-a253-4cf6cef645b8, rgb(29, 119, 254))`,
                                                    },
                                                    children: `中文`,
                                                  }),
                                                }),
                                              className: `framer-1e4togq`,
                                              fonts: [`GF;IBM Plex Sans-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                                speed: 30,
                                style: { height: `100%`, width: `100%` },
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        I() &&
                          /*#__PURE__*/ c(`div`, {
                            className: `framer-9ze6o4 hidden-qvcsgb hidden-1v4pesi`,
                            "data-framer-name": `产线`,
                          }),
                        /*#__PURE__*/ c(se, {
                          action: `https://api.framer.com/forms/v1/forms/481c1676-9815-462e-bc87-47be56b98996/submit`,
                          className: `framer-1c3wlnn`,
                          nodeId: `iQ1Oj0wmf`,
                          redirectUrl: { webPageId: `kUMlJF28H` },
                          children: (e) =>
                            /*#__PURE__*/ l(te, {
                              children: [
                                /*#__PURE__*/ l(`div`, {
                                  className: `framer-11antqi`,
                                  children: [
                                    /*#__PURE__*/ l(`div`, {
                                      className: `framer-sqosmh`,
                                      "data-framer-name": `GTM`,
                                      children: [
                                        /*#__PURE__*/ c(`label`, {
                                          className: `framer-1oubph9`,
                                          "data-framer-name": `gclid`,
                                          children: /*#__PURE__*/ c(T, {
                                            className: `framer-10zcdka`,
                                            inputName: `gclid`,
                                            placeholder: B(`v4`, p) ?? `gclid`,
                                            required: !1,
                                            type: `text`,
                                          }),
                                        }),
                                        /*#__PURE__*/ c(`label`, {
                                          className: `framer-q1v7rj`,
                                          "data-framer-name": `utm_source`,
                                          children: /*#__PURE__*/ c(T, {
                                            className: `framer-5s8mtq`,
                                            inputName: `utm_source`,
                                            placeholder: B(`v5`, p) ?? `utm_source`,
                                            required: !1,
                                            type: `text`,
                                          }),
                                        }),
                                        /*#__PURE__*/ c(`label`, {
                                          className: `framer-60sfc8`,
                                          "data-framer-name": `utm_medium`,
                                          children: /*#__PURE__*/ c(T, {
                                            className: `framer-1vonmgj`,
                                            inputName: `utm_medium`,
                                            placeholder: B(`v6`, p) ?? `utm_medium`,
                                            required: !1,
                                            type: `text`,
                                          }),
                                        }),
                                        /*#__PURE__*/ c(`label`, {
                                          className: `framer-zpgoaj`,
                                          "data-framer-name": `utm_campaign`,
                                          children: /*#__PURE__*/ c(T, {
                                            className: `framer-ikjiz5`,
                                            inputName: `utm_campaign`,
                                            placeholder: B(`v7`, p) ?? `utm_campaign`,
                                            required: !1,
                                            type: `text`,
                                          }),
                                        }),
                                        /*#__PURE__*/ c(`label`, {
                                          className: `framer-1ib1gok`,
                                          "data-framer-name": `utm_term`,
                                          children: /*#__PURE__*/ c(T, {
                                            className: `framer-t9mfzb`,
                                            inputName: `utm_term`,
                                            placeholder: B(`v8`, p) ?? `utm_term`,
                                            required: !1,
                                            type: `text`,
                                          }),
                                        }),
                                        /*#__PURE__*/ c(`label`, {
                                          className: `framer-15nzxxs`,
                                          "data-framer-name": `utm_content`,
                                          children: /*#__PURE__*/ c(T, {
                                            className: `framer-pgtfe2`,
                                            inputName: `utm_content`,
                                            placeholder: B(`v9`, p) ?? `utm_content`,
                                            required: !1,
                                            type: `text`,
                                          }),
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ c(`div`, {
                                      className: `framer-11kcbi8`,
                                      "data-framer-name": `Name inputs`,
                                      children: /*#__PURE__*/ c(`label`, {
                                        className: `framer-ojtiq1`,
                                        children: /*#__PURE__*/ l(`div`, {
                                          className: `framer-j0ft8s`,
                                          children: [
                                            /*#__PURE__*/ c(T, {
                                              className: `framer-k7uvss`,
                                              inputName: `First`,
                                              placeholder: B(`v10`, p) ?? `名`,
                                              required: !0,
                                              type: `text`,
                                            }),
                                            /*#__PURE__*/ c(T, {
                                              className: `framer-1m01sn9`,
                                              inputName: `Last`,
                                              placeholder: B(`v11`, p) ?? `姓`,
                                              required: !0,
                                              type: `text`,
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    /*#__PURE__*/ l(`div`, {
                                      className: `framer-1orm38x`,
                                      children: [
                                        /*#__PURE__*/ c(T, {
                                          className: `framer-r51v5w`,
                                          inputName: `Company`,
                                          placeholder: B(`v12`, p) ?? `公司`,
                                          required: !0,
                                          type: `text`,
                                        }),
                                        /*#__PURE__*/ c(T, {
                                          className: `framer-1npeu9`,
                                          inputName: `Position`,
                                          placeholder: B(`v13`, p) ?? `职位`,
                                          required: !0,
                                          type: `text`,
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ l(`label`, {
                                      className: `framer-1p0wpth`,
                                      children: [
                                        /*#__PURE__*/ c(T, {
                                          className: `framer-sdas1k`,
                                          inputName: `Email`,
                                          placeholder: B(`v14`, p) ?? `电子邮件`,
                                          required: !0,
                                          type: `email`,
                                        }),
                                        /*#__PURE__*/ c(T, {
                                          className: `framer-1c77nbu`,
                                          inputName: `Message`,
                                          placeholder: B(`v15`, p) ?? `备注`,
                                          required: !1,
                                          type: `textarea`,
                                        }),
                                        /*#__PURE__*/ l(`label`, {
                                          className: `framer-chxujx`,
                                          children: [
                                            /*#__PURE__*/ c(oe, {
                                              className: `framer-cb6u2l`,
                                              defaultChecked: !1,
                                              inputName: `Consent checkbox`,
                                              required: !0,
                                              type: `checkbox`,
                                            }),
                                            /*#__PURE__*/ l(`div`, {
                                              className: `framer-15qxzvi`,
                                              children: [
                                                /*#__PURE__*/ c(f, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    B(`v16`, p) ??
                                                    /*#__PURE__*/ c(a, {
                                                      children: /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `500`,
                                                          "--framer-text-color": `rgb(153, 153, 153)`,
                                                        },
                                                        children: `同意方可提交，您可以随时通过我们的电子邮件链接退订。`,
                                                      }),
                                                    }),
                                                  className: `framer-w9qd94`,
                                                  fonts: [`GF;IBM Plex Sans-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ c(f, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    B(`v17`, p) ??
                                                    /*#__PURE__*/ c(a, {
                                                      children: /*#__PURE__*/ l(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `10px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `400`,
                                                          "--framer-text-color": `rgb(171, 171, 171)`,
                                                        },
                                                        children: [
                                                          /*#__PURE__*/ c(`em`, {
                                                            children: `我同意接收来自 FREEZONEX 的电子邮件和更新，并同意根据`,
                                                          }),
                                                          /*#__PURE__*/ c(de, {
                                                            href: { webPageId: `fHDmqdJOv` },
                                                            motionChild: !0,
                                                            nodeId: `tGj0NtL88`,
                                                            openInNewTab: !1,
                                                            relValues: [],
                                                            scopeId: `DqdPzqQks`,
                                                            smoothScroll: !1,
                                                            children: /*#__PURE__*/ c(u.a, {
                                                              className: `framer-styles-preset-1cuew56`,
                                                              "data-styles-preset": `U42XhPPDq`,
                                                              children: /*#__PURE__*/ c(`em`, {
                                                                children: `隐私政策`,
                                                              }),
                                                            }),
                                                          }),
                                                          /*#__PURE__*/ c(`em`, {
                                                            children: `处理我的个人数据。`,
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                  className: `framer-2hongm`,
                                                  fonts: [
                                                    `GF;IBM Plex Sans-regular`,
                                                    `GF;IBM Plex Sans-italic`,
                                                  ],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ c(`div`, {
                                  className: `framer-be0vk4`,
                                  children: /*#__PURE__*/ c(D, {
                                    breakpoint: O,
                                    overrides: {
                                      JAZIrGhBG: { width: `310px` },
                                      t2MdvH4zU: { width: `730px` },
                                    },
                                    children: /*#__PURE__*/ c(b, {
                                      height: 42,
                                      width: `1240px`,
                                      children: /*#__PURE__*/ c(w, {
                                        className: `framer-gsypid-container`,
                                        nodeId: `CXoP5NyfJ`,
                                        scopeId: `DqdPzqQks`,
                                        children: /*#__PURE__*/ c(z, {
                                          gnVVpbCNc: B(`v19`, p) ?? `提交`,
                                          height: `100%`,
                                          id: `CXoP5NyfJ`,
                                          layoutId: `CXoP5NyfJ`,
                                          nxrppaGUm: B(`v18`, p) ?? `谢谢！`,
                                          style: { height: `100%`, width: `100%` },
                                          type: `submit`,
                                          variant: De(
                                            e,
                                            {
                                              error: `rQ7RQpppK`,
                                              pending: `oQd7TZyy5`,
                                              success: `V_E4JSrQ9`,
                                            },
                                            Z(`A5pmAykCu`)
                                          ),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                        }),
                      ],
                    }),
                    /*#__PURE__*/ l(u.div, {
                      className: `framer-106y0rs`,
                      "data-framer-name": `header`,
                      layout: P,
                      children: [
                        L() &&
                          /*#__PURE__*/ c(b, {
                            height: 498,
                            width: g?.width || `100vw`,
                            children: /*#__PURE__*/ c(w, {
                              className: `framer-d27vi5-container hidden-1v4pesi`,
                              nodeId: `vSDfxMyg3`,
                              scopeId: `DqdPzqQks`,
                              children: /*#__PURE__*/ c(D, {
                                breakpoint: O,
                                overrides: { t2MdvH4zU: { variant: Z(`G8rxyXoDj`) } },
                                children: /*#__PURE__*/ c(N, {
                                  height: `100%`,
                                  id: `vSDfxMyg3`,
                                  layoutId: `vSDfxMyg3`,
                                  style: { width: `100%` },
                                  variant: Z(`zev4Tv3qQ`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        R() &&
                          /*#__PURE__*/ c(D, {
                            breakpoint: O,
                            overrides: { JAZIrGhBG: { height: 498, width: g?.width || `100vw` } },
                            children: /*#__PURE__*/ c(b, {
                              children: /*#__PURE__*/ c(w, {
                                className: `framer-1fmtxk8-container hidden-1t4mcdm hidden-qvcsgb`,
                                nodeId: `g6IRYKYA4`,
                                scopeId: `DqdPzqQks`,
                                children: /*#__PURE__*/ c(N, {
                                  height: `100%`,
                                  id: `g6IRYKYA4`,
                                  layoutId: `g6IRYKYA4`,
                                  style: { width: `100%` },
                                  variant: Z(`vXscR1iJC`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                    /*#__PURE__*/ c(b, {
                      height: 64,
                      width: `100vw`,
                      y: 0,
                      children: /*#__PURE__*/ c(w, {
                        className: `framer-3wsf25-container`,
                        layout: P,
                        layoutScroll: !0,
                        nodeId: `Emfy7MbxH`,
                        scopeId: `DqdPzqQks`,
                        children: /*#__PURE__*/ c(D, {
                          breakpoint: O,
                          overrides: {
                            JAZIrGhBG: { variant: Z(`Svy4sINhA`) },
                            t2MdvH4zU: { variant: Z(`Gw5VboM5c`) },
                          },
                          children: /*#__PURE__*/ c(F, {
                            eVOFjxm0w: `var(--token-fcaa307f-078f-4ea1-af34-d51bb82ca05a, rgba(255, 255, 255, 0))`,
                            height: `100%`,
                            id: `Emfy7MbxH`,
                            jQcddTFoz: !0,
                            layoutId: `Emfy7MbxH`,
                            style: { width: `100%` },
                            variant: Z(`LbFcBhD3w`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (je = [
        `.framer-ijsGM.framer-nhd5ts, .framer-ijsGM .framer-nhd5ts { display: block; }`,
        `.framer-ijsGM.framer-1t4mcdm { align-content: center; align-items: center; background-color: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 120px 0px 0px 0px; position: relative; width: 1440px; }`,
        `.framer-ijsGM .framer-1t3gxjb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1240px; }`,
        `.framer-ijsGM .framer-6pc9ow { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ijsGM .framer-16iwf6y { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ijsGM .framer-1ifr68r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 782px; }`,
        `.framer-ijsGM .framer-172si91 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 764px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ijsGM .framer-1kosyfm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px; position: relative; width: 1240px; }`,
        `.framer-ijsGM .framer-w3qyau-container { flex: 1 0 0px; height: 270px; opacity: 0.8; position: relative; width: 1px; }`,
        `.framer-ijsGM .framer-1rr42p1, .framer-ijsGM .framer-1xqo132, .framer-ijsGM .framer-1as3ca8, .framer-ijsGM .framer-l8xwlp { --border-bottom-width: 1px; --border-color: rgba(0, 0, 0, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.25); display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ijsGM .framer-bfk69u, .framer-ijsGM .framer-1b8x8v0, .framer-ijsGM .framer-gojkr8, .framer-ijsGM .framer-3wdw1j { aspect-ratio: 1.7777485533929511 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 423px; }`,
        `.framer-ijsGM .framer-1unpm6s, .framer-ijsGM .framer-rjtzx8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; right: 8px; top: 8px; width: min-content; }`,
        `.framer-ijsGM .framer-1as6qqi, .framer-ijsGM .framer-18yf8du { --border-bottom-width: 1px; --border-color: var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, #b2ed1d); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(178, 237, 29, 0.4); border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px 6px 4px 6px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ijsGM .framer-1o85hdh, .framer-ijsGM .framer-1jd0ai8, .framer-ijsGM .framer-1r41pr6, .framer-ijsGM .framer-1e4togq { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-ijsGM .framer-be70lm, .framer-ijsGM .framer-jj0xdc { --border-bottom-width: 1px; --border-color: var(--token-a648c855-5db0-4414-a253-4cf6cef645b8, #1d77fe); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(29, 119, 254, 0.3); border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px 6px 4px 6px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ijsGM .framer-9ze6o4 { background-color: rgba(34, 34, 34, 0.1); flex: none; height: 1px; overflow: visible; position: relative; width: 100%; }`,
        `.framer-ijsGM .framer-1c3wlnn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ijsGM .framer-11antqi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ijsGM .framer-sqosmh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ijsGM .framer-1oubph9, .framer-ijsGM .framer-q1v7rj, .framer-ijsGM .framer-60sfc8, .framer-ijsGM .framer-zpgoaj, .framer-ijsGM .framer-1ib1gok, .framer-ijsGM .framer-15nzxxs { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ijsGM .framer-10zcdka, .framer-ijsGM .framer-5s8mtq, .framer-ijsGM .framer-1vonmgj, .framer-ijsGM .framer-ikjiz5, .framer-ijsGM .framer-t9mfzb, .framer-ijsGM .framer-pgtfe2 { --framer-input-background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 3px; --framer-input-border-radius-bottom-right: 3px; --framer-input-border-radius-top-left: 3px; --framer-input-border-radius-top-right: 3px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-09ef9580-3752-4570-af4f-660d98880522, #050b14); --framer-input-font-family: "IBM Plex Mono"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: 1 0 0px; height: 0px; opacity: 0; position: relative; width: 1px; }`,
        `.framer-ijsGM .framer-11kcbi8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 11px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ijsGM .framer-ojtiq1 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ijsGM .framer-j0ft8s, .framer-ijsGM .framer-1orm38x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ijsGM .framer-k7uvss, .framer-ijsGM .framer-1m01sn9, .framer-ijsGM .framer-r51v5w, .framer-ijsGM .framer-1npeu9 { --framer-input-background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.6); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 3px; --framer-input-border-radius-bottom-right: 3px; --framer-input-border-radius-top-left: 3px; --framer-input-border-radius-top-right: 3px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-77c2aa90-272c-4fa2-bdd7-eca34b98eb0b, #262628); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-77c2aa90-272c-4fa2-bdd7-eca34b98eb0b, #262628); --framer-input-font-family: "IBM Plex Sans"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: 1 0 0px; height: 45px; position: relative; width: 1px; }`,
        `.framer-ijsGM .framer-1p0wpth { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ijsGM .framer-sdas1k { --framer-input-background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.6); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 3px; --framer-input-border-radius-bottom-right: 3px; --framer-input-border-radius-top-left: 3px; --framer-input-border-radius-top-right: 3px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-77c2aa90-272c-4fa2-bdd7-eca34b98eb0b, #262628); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-77c2aa90-272c-4fa2-bdd7-eca34b98eb0b, #262628); --framer-input-font-family: "IBM Plex Sans"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 45px; position: relative; width: 100%; }`,
        `.framer-ijsGM .framer-1c77nbu { --framer-input-background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.6); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 3px; --framer-input-border-radius-bottom-right: 3px; --framer-input-border-radius-top-left: 3px; --framer-input-border-radius-top-right: 3px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-09ef9580-3752-4570-af4f-660d98880522, #050b14); --framer-input-font-family: "IBM Plex Sans"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 40px; position: relative; width: 100%; }`,
        `.framer-ijsGM .framer-chxujx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ijsGM .framer-cb6u2l { --framer-input-background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); --framer-input-boolean-checked-background: #0099ff; --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(34, 34, 34, 0.6); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 3px; --framer-input-border-radius-bottom-right: 3px; --framer-input-border-radius-top-left: 3px; --framer-input-border-radius-top-right: 3px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-icon-color: #ffffff; aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 16px; }`,
        `.framer-ijsGM .framer-15qxzvi { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ijsGM .framer-w9qd94, .framer-ijsGM .framer-2hongm { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ijsGM .framer-be0vk4 { flex: none; height: 42px; overflow: visible; position: relative; width: 100%; }`,
        `.framer-ijsGM .framer-gsypid-container { bottom: 0px; flex: none; height: 42px; left: 0px; position: absolute; right: 0px; }`,
        `.framer-ijsGM .framer-106y0rs { align-content: center; align-items: center; background-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-ijsGM .framer-d27vi5-container, .framer-ijsGM .framer-1fmtxk8-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-ijsGM .framer-3wsf25-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 4; }`,
        ...L,
        ..._e,
        ...M,
        `.framer-ijsGM[data-border="true"]::after, .framer-ijsGM [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-ijsGM.framer-1t4mcdm { gap: 70px; width: 810px; } .framer-ijsGM .framer-1t3gxjb { width: 730px; } .framer-ijsGM .framer-1ifr68r, .framer-ijsGM .framer-1kosyfm { width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-ijsGM.framer-1t4mcdm { gap: 80px; width: 390px; } .framer-ijsGM .framer-1t3gxjb { width: 310px; } .framer-ijsGM .framer-6pc9ow { order: 0; } .framer-ijsGM .framer-1ifr68r, .framer-ijsGM .framer-172si91 { width: 100%; } .framer-ijsGM .framer-1kosyfm { order: 1; width: 100%; } .framer-ijsGM .framer-1c3wlnn { order: 2; } .framer-ijsGM .framer-1fmtxk8-container { order: 1; }}`,
      ]),
      ($ = g(Ae, je, `framer-ijsGM`)),
      ($.displayName = `Resource / Downloads`),
      ($.defaultProps = { height: 1609, width: 1440 }),
      le(
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
              {
                cssFamilyName: `IBM Plex Sans`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `IBM Plex Sans`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `IBM Plex Mono`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `IBM Plex Mono`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `IBM Plex Sans`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `IBM Plex Sans`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `IBM Plex Sans`,
                source: `google`,
                style: `italic`,
                uiFamilyName: `IBM Plex Sans`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Te,
          ...U,
          ...W,
          ...G,
          ...p(R),
          ...p(ve),
          ...p(P),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) => S([() => m(z, {}, t), () => m(N, {}, t), () => m(F, {}, t)], t),
      }),
      (Me = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerDqdPzqQks`,
            slots: [],
            annotations: {
              framerScrollSections: `false`,
              framerContractVersion: `1`,
              framerLayoutTemplateFlowEffect: `true`,
              framerResponsiveScreen: `true`,
              framerDisplayContentsDiv: `false`,
              framerAcceptsLayoutTemplate: `true`,
              framerImmutableVariables: `true`,
              framerAutoSizeImages: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"t2MdvH4zU":{"layout":["fixed","auto"]},"JAZIrGhBG":{"layout":["fixed","auto"]}}}`,
              framerComponentViewportWidth: `true`,
              framerColorSyntax: `true`,
              framerIntrinsicWidth: `1440`,
              framerIntrinsicHeight: `1609`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
Ne();
export { Me as __FramerMetadata__, $ as default, J as queryParamNames };
//# sourceMappingURL=LPZWFKxEnQgk9mAGdYAyrPzJp7Lj8A-iPlsHShLuNU4.31GDfggl.mjs.map
