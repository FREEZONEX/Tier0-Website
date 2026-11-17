import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  D as t,
  F as n,
  O as r,
  P as i,
  R as a,
  S as o,
  c as s,
  m as c,
  s as l,
  u,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { S as d, Yi as f, t as p, v as ee } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import {
  D as m,
  E as h,
  Et as te,
  G as g,
  I as _,
  It as v,
  K as y,
  M as b,
  Nt as ne,
  O as x,
  P as S,
  Pt as C,
  Q as w,
  Rt as re,
  St as T,
  U as E,
  a as D,
  bt as ie,
  g as O,
  gt as ae,
  ht as oe,
  j as k,
  jt as A,
  lt as j,
  m as M,
  o as N,
  s as P,
  v as F,
  w as I,
  wt as se,
  yt as ce,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { n as le, t as L } from "./ShimmerGrid_Prod.D8QXYPOQ.mjs?v=20261116-migration-v2";
import { m as ue, n as de, p as R, t as z } from "./shared-lib.CHy_rbfQ.mjs?v=20261116-migration-v2";
import { i as fe, n as pe, r as me, t as B } from "./HNigw6pHS.BbLcGwmq.mjs?v=20261116-migration-v2";
import { n as he, t as V } from "./O2sCN9yxq.5YGffmfa.mjs?v=20261116-migration-v2";
import {
  a as ge,
  c as _e,
  i as ve,
  l as H,
  n as ye,
  o as be,
  r as xe,
  s as Se,
  t as Ce,
  u as we,
} from "./VF7HZTiAg.DUw169M-.mjs?v=20261116-migration-v2";
import { n as Te, r as Ee } from "./DGsQOiGKT.DiOYj-n6.mjs?v=20261116-migration-v2";
function U(e, t) {
  for (; t; ) {
    let n = W[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function De(e) {
  let t = [];
  for (; e; ) {
    let n = W[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function Oe(e) {
  let t = De(e);
  if (t) throw t;
}
var W;
function ke() {
  return (ke = e(() => {
    (w(), (W = { AYmst8Nt3: new F(() => import("./qxMDglmWw-0.1V-rnRuC.mjs?v=20261116-migration-v2")) }));
  }))();
}
function G(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ae, je, Me, Ne, K, Pe, Fe, Ie, Le, Re, q;
function ze() {
  return (ze = e(() => {
    (s(),
      w(),
      p(),
      r(),
      ke(),
      (Ae = [
        `aII55fMch`,
        `wOqe_0XdI`,
        `Qs2N7zWIt`,
        `D8Nfa3EOV`,
        `xC9qrdJpD`,
        `TlP5nojka`,
        `Y2CuTwOTT`,
      ]),
      (je = `framer-a1yCg`),
      (Me = {
        aII55fMch: `framer-v-15ths8p`,
        D8Nfa3EOV: `framer-v-1wd7j4e`,
        Qs2N7zWIt: `framer-v-1yh7r6p`,
        TlP5nojka: `framer-v-r4q9mq`,
        wOqe_0XdI: `framer-v-azt0b4`,
        xC9qrdJpD: `framer-v-opkk5q`,
        Y2CuTwOTT: `framer-v-1rv1azs`,
      }),
      (Ne = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (K = (e, t) => `translate(-50%, -50%) ${t}`),
      (Pe = ({ value: e, children: t }) => {
        let r = i(d),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ l(d.Provider, { value: o, children: t });
      }),
      (Fe = {
        "Variant 1": `aII55fMch`,
        "Variant 2": `wOqe_0XdI`,
        "Variant 3": `Qs2N7zWIt`,
        "Variant 4": `D8Nfa3EOV`,
        "Variant 5": `xC9qrdJpD`,
        "Variant 6": `TlP5nojka`,
        phone: `Y2CuTwOTT`,
      }),
      (Ie = f.create(a)),
      (Le = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Fe[r.variant] ?? r.variant ?? `aII55fMch`,
      })),
      (Re = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = C(
        /* @__PURE__ */ c(function (e, n) {
          let r = o(null),
            i = n ?? r,
            s = t(),
            { activeLocale: c, contentLocale: d, setLocale: p } = se(),
            h = ae(),
            { style: te, className: g, layoutId: _, variant: v, ...b } = Le(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: re,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: ie,
              setVariant: k,
              variants: A,
            } = ne({
              cycleOrder: Ae,
              defaultVariant: `aII55fMch`,
              ref: i,
              variant: v,
              variantClassNames: Me,
            }),
            j = Re(e, A),
            M = S(je),
            N = () => C !== `Y2CuTwOTT`,
            { activeVariantCallback: P, delay: F } = oe(C),
            I = P(async (...e) => {
              k(`aII55fMch`);
            });
          Oe(c);
          let ce = P(async (...e) => {
              k(`wOqe_0XdI`);
            }),
            le = P(async (...e) => {
              k(`Qs2N7zWIt`);
            }),
            L = P(async (...e) => {
              k(`D8Nfa3EOV`);
            }),
            ue = P(async (...e) => {
              k(`xC9qrdJpD`);
            }),
            de = P(async (...e) => {
              k(`TlP5nojka`);
            }),
            R = () => ![`D8Nfa3EOV`, `xC9qrdJpD`, `TlP5nojka`].includes(C),
            z = () => C !== `Qs2N7zWIt`,
            fe = () => C !== `wOqe_0XdI`,
            pe = () => ![`wOqe_0XdI`, `Qs2N7zWIt`].includes(C),
            me = () => ![`D8Nfa3EOV`, `xC9qrdJpD`].includes(C),
            B = () => ![`D8Nfa3EOV`, `TlP5nojka`].includes(C),
            he = () => ![`xC9qrdJpD`, `TlP5nojka`].includes(C);
          return /*#__PURE__*/ l(ee, {
            id: _ ?? s,
            children: /*#__PURE__*/ l(Ie, {
              animate: A,
              initial: !1,
              children: /*#__PURE__*/ l(Pe, {
                value: Ne,
                children: /*#__PURE__*/ u(f.div, {
                  ...b,
                  ...T,
                  className: S(M, `framer-15ths8p`, g, w),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: j,
                  layoutId: `aII55fMch`,
                  ref: i,
                  style: { ...te },
                  ...G(
                    {
                      D8Nfa3EOV: { "data-framer-name": `Variant 4` },
                      Qs2N7zWIt: { "data-framer-name": `Variant 3` },
                      TlP5nojka: { "data-framer-name": `Variant 6` },
                      wOqe_0XdI: { "data-framer-name": `Variant 2` },
                      xC9qrdJpD: { "data-framer-name": `Variant 5` },
                      Y2CuTwOTT: { "data-framer-name": `phone` },
                    },
                    C,
                    E
                  ),
                  children: [
                    N() &&
                      /*#__PURE__*/ u(f.div, {
                        className: `framer-qt36wx`,
                        "data-framer-name": `Container`,
                        layoutDependency: j,
                        layoutId: `DBNWxNyFg`,
                        children: [
                          /*#__PURE__*/ l(f.div, {
                            className: `framer-dh2nwj`,
                            "data-border": !0,
                            "data-framer-name": `Button`,
                            layoutDependency: j,
                            layoutId: `Ztm9S1ysI`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgb(23, 26, 34)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `rgb(23, 26, 34)`,
                              borderBottomLeftRadius: 999,
                              borderBottomRightRadius: 999,
                              borderTopLeftRadius: 999,
                              borderTopRightRadius: 999,
                            },
                            variants: {
                              D8Nfa3EOV: {
                                "--border-color": `rgb(226, 230, 222)`,
                                backgroundColor: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                              },
                              Qs2N7zWIt: {
                                "--border-color": `rgb(226, 230, 222)`,
                                backgroundColor: `rgb(255, 255, 255)`,
                              },
                              TlP5nojka: {
                                "--border-color": `rgb(226, 230, 222)`,
                                backgroundColor: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                              },
                              wOqe_0XdI: {
                                "--border-color": `rgb(226, 230, 222)`,
                                backgroundColor: `rgb(255, 255, 255)`,
                              },
                              xC9qrdJpD: {
                                "--border-color": `rgb(226, 230, 222)`,
                                backgroundColor: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                              },
                            },
                            ...G(
                              {
                                D8Nfa3EOV: { "data-highlight": !0, onTap: I },
                                Qs2N7zWIt: { "data-highlight": !0, onTap: I },
                                TlP5nojka: { "data-highlight": !0, onTap: I },
                                wOqe_0XdI: { "data-highlight": !0, onTap: I },
                              },
                              C,
                              E
                            ),
                            children: /*#__PURE__*/ l(m, {
                              __fromCanvasComponent: !0,
                              children:
                                U(`v0`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                      "--framer-font-family": `"IBM Plex Sans"`,
                                      "--framer-font-size": `13px`,
                                      "--framer-font-style": `normal`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `0px`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                    },
                                    children: `全部`,
                                  }),
                                }),
                              className: `framer-9g1heu`,
                              "data-framer-name": `All`,
                              fonts: [`GF;IBM Plex Sans-500`],
                              layoutDependency: j,
                              layoutId: `GIHBptrVv`,
                              style: {
                                "--extracted-2gg91v": `normal`,
                                "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              variants: {
                                D8Nfa3EOV: { "--extracted-r6o4lv": `rgb(112, 119, 128)` },
                                Qs2N7zWIt: { "--extracted-r6o4lv": `rgb(112, 119, 128)` },
                                TlP5nojka: { "--extracted-r6o4lv": `rgb(115, 122, 131)` },
                                wOqe_0XdI: { "--extracted-r6o4lv": `rgb(112, 119, 128)` },
                                xC9qrdJpD: { "--extracted-r6o4lv": `rgb(112, 119, 128)` },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...G(
                                {
                                  D8Nfa3EOV: {
                                    children:
                                      U(`v1`, d) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(f.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                            "--framer-font-family": `"IBM Plex Sans"`,
                                            "--framer-font-size": `13px`,
                                            "--framer-font-style": `normal`,
                                            "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `0px`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(112, 119, 128))`,
                                          },
                                          children: `全部`,
                                        }),
                                      }),
                                  },
                                  Qs2N7zWIt: {
                                    children:
                                      U(`v1`, d) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(f.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                            "--framer-font-family": `"IBM Plex Sans"`,
                                            "--framer-font-size": `13px`,
                                            "--framer-font-style": `normal`,
                                            "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `0px`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(112, 119, 128))`,
                                          },
                                          children: `全部`,
                                        }),
                                      }),
                                  },
                                  TlP5nojka: {
                                    children:
                                      U(`v2`, d) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(f.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                            "--framer-font-family": `"IBM Plex Sans"`,
                                            "--framer-font-size": `13px`,
                                            "--framer-font-style": `normal`,
                                            "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `0px`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(115, 122, 131))`,
                                          },
                                          children: `全部`,
                                        }),
                                      }),
                                  },
                                  wOqe_0XdI: {
                                    children:
                                      U(`v1`, d) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(f.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                            "--framer-font-family": `"IBM Plex Sans"`,
                                            "--framer-font-size": `13px`,
                                            "--framer-font-style": `normal`,
                                            "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `0px`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(112, 119, 128))`,
                                          },
                                          children: `全部`,
                                        }),
                                      }),
                                  },
                                  xC9qrdJpD: {
                                    children:
                                      U(`v1`, d) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(f.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                            "--framer-font-family": `"IBM Plex Sans"`,
                                            "--framer-font-size": `13px`,
                                            "--framer-font-style": `normal`,
                                            "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `0px`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(112, 119, 128))`,
                                          },
                                          children: `全部`,
                                        }),
                                      }),
                                  },
                                },
                                C,
                                E
                              ),
                            }),
                          }),
                          /*#__PURE__*/ l(f.div, {
                            className: `framer-1la2me6`,
                            "data-border": !0,
                            "data-framer-name": `Button`,
                            "data-highlight": !0,
                            layoutDependency: j,
                            layoutId: `enNjc9Zrd`,
                            onTap: ce,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgb(226, 230, 222)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderBottomLeftRadius: 999,
                              borderBottomRightRadius: 999,
                              borderTopLeftRadius: 999,
                              borderTopRightRadius: 999,
                            },
                            variants: {
                              wOqe_0XdI: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                backgroundColor: `rgb(24, 26, 35)`,
                              },
                            },
                            children: /*#__PURE__*/ l(m, {
                              __fromCanvasComponent: !0,
                              children:
                                U(`v3`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                      "--framer-font-family": `"IBM Plex Sans"`,
                                      "--framer-font-size": `13px`,
                                      "--framer-font-style": `normal`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `0px`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(112, 119, 128))`,
                                    },
                                    children: `运营`,
                                  }),
                                }),
                              className: `framer-1p01jbc`,
                              "data-framer-name": `Operations`,
                              fonts: [`GF;IBM Plex Sans-500`],
                              layoutDependency: j,
                              layoutId: `XDKoOAFFN`,
                              style: {
                                "--extracted-2gg91v": `normal`,
                                "--extracted-r6o4lv": `rgb(112, 119, 128)`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              transformTemplate: K,
                              variants: {
                                wOqe_0XdI: { "--extracted-r6o4lv": `rgb(255, 255, 255)` },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...G(
                                {
                                  wOqe_0XdI: {
                                    children:
                                      U(`v4`, d) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(f.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                            "--framer-font-family": `"IBM Plex Sans"`,
                                            "--framer-font-size": `13px`,
                                            "--framer-font-style": `normal`,
                                            "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `0px`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                          },
                                          children: `运营`,
                                        }),
                                      }),
                                  },
                                },
                                C,
                                E
                              ),
                            }),
                          }),
                          /*#__PURE__*/ l(f.div, {
                            className: `framer-ywfcmx`,
                            "data-border": !0,
                            "data-framer-name": `Button`,
                            "data-highlight": !0,
                            layoutDependency: j,
                            layoutId: `E2lm8JLft`,
                            onTap: le,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgb(226, 230, 222)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderBottomLeftRadius: 999,
                              borderBottomRightRadius: 999,
                              borderTopLeftRadius: 999,
                              borderTopRightRadius: 999,
                            },
                            variants: {
                              Qs2N7zWIt: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                backgroundColor: `rgb(24, 26, 35)`,
                              },
                            },
                            children: /*#__PURE__*/ l(m, {
                              __fromCanvasComponent: !0,
                              children:
                                U(`v5`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                      "--framer-font-family": `"IBM Plex Sans"`,
                                      "--framer-font-size": `13px`,
                                      "--framer-font-style": `normal`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `0px`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(112, 119, 128))`,
                                    },
                                    children: `质量`,
                                  }),
                                }),
                              className: `framer-1o85xq8`,
                              "data-framer-name": `Quality`,
                              fonts: [`GF;IBM Plex Sans-500`],
                              layoutDependency: j,
                              layoutId: `PUYLmpxut`,
                              style: {
                                "--extracted-2gg91v": `normal`,
                                "--extracted-r6o4lv": `rgb(112, 119, 128)`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              transformTemplate: K,
                              variants: {
                                Qs2N7zWIt: {
                                  "--extracted-r6o4lv": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...G(
                                {
                                  Qs2N7zWIt: {
                                    children:
                                      U(`v6`, d) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(f.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                            "--framer-font-family": `"IBM Plex Sans"`,
                                            "--framer-font-size": `13px`,
                                            "--framer-font-style": `normal`,
                                            "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `0px`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)))`,
                                          },
                                          children: `质量`,
                                        }),
                                      }),
                                  },
                                },
                                C,
                                E
                              ),
                            }),
                          }),
                          /*#__PURE__*/ l(f.div, {
                            className: `framer-15jumhl`,
                            "data-border": !0,
                            "data-framer-name": `Button`,
                            "data-highlight": !0,
                            layoutDependency: j,
                            layoutId: `VMS3PAc4Y`,
                            onTap: L,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgb(226, 230, 222)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderBottomLeftRadius: 999,
                              borderBottomRightRadius: 999,
                              borderTopLeftRadius: 999,
                              borderTopRightRadius: 999,
                            },
                            variants: {
                              D8Nfa3EOV: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                backgroundColor: `rgb(24, 26, 35)`,
                              },
                            },
                            children: /*#__PURE__*/ l(m, {
                              __fromCanvasComponent: !0,
                              children:
                                U(`v7`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                      "--framer-font-family": `"IBM Plex Sans"`,
                                      "--framer-font-size": `13px`,
                                      "--framer-font-style": `normal`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `0px`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(112, 119, 128))`,
                                    },
                                    children: `维护`,
                                  }),
                                }),
                              className: `framer-2fmpg2`,
                              "data-framer-name": `Maintenance`,
                              fonts: [`GF;IBM Plex Sans-500`],
                              layoutDependency: j,
                              layoutId: `TIeDyewWy`,
                              style: {
                                "--extracted-2gg91v": `normal`,
                                "--extracted-r6o4lv": `rgb(112, 119, 128)`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              transformTemplate: K,
                              variants: {
                                D8Nfa3EOV: {
                                  "--extracted-r6o4lv": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...G(
                                {
                                  D8Nfa3EOV: {
                                    children:
                                      U(`v8`, d) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(f.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                            "--framer-font-family": `"IBM Plex Sans"`,
                                            "--framer-font-size": `13px`,
                                            "--framer-font-style": `normal`,
                                            "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `0px`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)))`,
                                          },
                                          children: `维护`,
                                        }),
                                      }),
                                  },
                                },
                                C,
                                E
                              ),
                            }),
                          }),
                          /*#__PURE__*/ l(f.div, {
                            className: `framer-1m3tete`,
                            "data-border": !0,
                            "data-framer-name": `Button`,
                            "data-highlight": !0,
                            layoutDependency: j,
                            layoutId: `ci2mn0ZZL`,
                            onTap: ue,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgb(226, 230, 222)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderBottomLeftRadius: 999,
                              borderBottomRightRadius: 999,
                              borderTopLeftRadius: 999,
                              borderTopRightRadius: 999,
                            },
                            variants: {
                              xC9qrdJpD: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                backgroundColor: `rgb(24, 26, 35)`,
                              },
                            },
                            children: /*#__PURE__*/ l(m, {
                              __fromCanvasComponent: !0,
                              children:
                                U(`v9`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                      "--framer-font-family": `"IBM Plex Sans"`,
                                      "--framer-font-size": `13px`,
                                      "--framer-font-style": `normal`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `0px`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(112, 119, 128))`,
                                    },
                                    children: `仓管`,
                                  }),
                                }),
                              className: `framer-wfqj48`,
                              "data-framer-name": `Warehouse`,
                              fonts: [`GF;IBM Plex Sans-500`],
                              layoutDependency: j,
                              layoutId: `kYSH6DBWL`,
                              style: {
                                "--extracted-2gg91v": `normal`,
                                "--extracted-r6o4lv": `rgb(112, 119, 128)`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              transformTemplate: K,
                              variants: {
                                xC9qrdJpD: {
                                  "--extracted-r6o4lv": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...G(
                                {
                                  xC9qrdJpD: {
                                    children:
                                      U(`v10`, d) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(f.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                            "--framer-font-family": `"IBM Plex Sans"`,
                                            "--framer-font-size": `13px`,
                                            "--framer-font-style": `normal`,
                                            "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `0px`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)))`,
                                          },
                                          children: `仓管`,
                                        }),
                                      }),
                                  },
                                },
                                C,
                                E
                              ),
                            }),
                          }),
                          /*#__PURE__*/ l(f.div, {
                            className: `framer-q1vysm`,
                            "data-border": !0,
                            "data-framer-name": `Button`,
                            "data-highlight": !0,
                            layoutDependency: j,
                            layoutId: `ROtTw2iUe`,
                            onTap: de,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgb(226, 230, 222)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderBottomLeftRadius: 999,
                              borderBottomRightRadius: 999,
                              borderTopLeftRadius: 999,
                              borderTopRightRadius: 999,
                            },
                            variants: {
                              TlP5nojka: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                backgroundColor: `rgb(24, 26, 35)`,
                              },
                            },
                            children: /*#__PURE__*/ l(m, {
                              __fromCanvasComponent: !0,
                              children:
                                U(`v11`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                      "--framer-font-family": `"IBM Plex Sans"`,
                                      "--framer-font-size": `13px`,
                                      "--framer-font-style": `normal`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `0px`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(112, 119, 128))`,
                                    },
                                    children: `工作流`,
                                  }),
                                }),
                              className: `framer-dg0msk`,
                              "data-framer-name": `Workflow`,
                              fonts: [`GF;IBM Plex Sans-500`],
                              layoutDependency: j,
                              layoutId: `CDTwZKMbC`,
                              style: {
                                "--extracted-2gg91v": `normal`,
                                "--extracted-r6o4lv": `rgb(112, 119, 128)`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              transformTemplate: K,
                              variants: {
                                TlP5nojka: {
                                  "--extracted-r6o4lv": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...G(
                                {
                                  TlP5nojka: {
                                    children:
                                      U(`v12`, d) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(f.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                            "--framer-font-family": `"IBM Plex Sans"`,
                                            "--framer-font-size": `13px`,
                                            "--framer-font-style": `normal`,
                                            "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `0px`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)))`,
                                          },
                                          children: `工作流`,
                                        }),
                                      }),
                                  },
                                },
                                C,
                                E
                              ),
                            }),
                          }),
                        ],
                      }),
                    /*#__PURE__*/ u(f.div, {
                      className: `framer-12jh27u`,
                      "data-framer-name": `Container`,
                      layoutDependency: j,
                      layoutId: `ktWeccfou`,
                      children: [
                        R() &&
                          /*#__PURE__*/ u(f.div, {
                            className: `framer-1ge2o1n`,
                            layoutDependency: j,
                            layoutId: `yGPkSvpJJ`,
                            children: [
                              z() &&
                                /*#__PURE__*/ u(f.div, {
                                  className: `framer-bl77g3`,
                                  "data-border": !0,
                                  "data-framer-name": `Container`,
                                  layoutDependency: j,
                                  layoutId: `hHtaFg85v`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `rgb(226, 230, 222)`,
                                    "--border-left-width": `1px`,
                                    "--border-right-width": `1px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `1px`,
                                    backgroundColor: `rgb(255, 255, 255)`,
                                    borderBottomLeftRadius: 6,
                                    borderBottomRightRadius: 6,
                                    borderTopLeftRadius: 6,
                                    borderTopRightRadius: 6,
                                  },
                                  children: [
                                    /*#__PURE__*/ u(f.div, {
                                      className: `framer-1mxohcx`,
                                      "data-framer-name": `Frame 2147224001`,
                                      layoutDependency: j,
                                      layoutId: `C3eTKt05m`,
                                      children: [
                                        /*#__PURE__*/ u(f.div, {
                                          className: `framer-1usf8y0`,
                                          "data-framer-name": `Container`,
                                          layoutDependency: j,
                                          layoutId: `dJjwO3kgP`,
                                          children: [
                                            /*#__PURE__*/ l(x, {
                                              className: `framer-f9b5wa`,
                                              "data-framer-name": `Container`,
                                              fill: `rgba(0,0,0,1)`,
                                              intrinsicHeight: 40,
                                              intrinsicWidth: 40,
                                              layoutDependency: j,
                                              layoutId: `DyZjZDVgT`,
                                              svg: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 5C0 2.23858 2.23858 0 5 0H35C37.7614 0 40 2.23858 40 5V35C40 37.7614 37.7614 40 35 40H5C2.23858 40 0 37.7614 0 35V5Z" fill="#E7F9B9"/>
<path d="M17.5 12.5H13.3333C12.8731 12.5 12.5 12.8731 12.5 13.3333V17.5C12.5 17.9602 12.8731 18.3333 13.3333 18.3333H17.5C17.9602 18.3333 18.3333 17.9602 18.3333 17.5V13.3333C18.3333 12.8731 17.9602 12.5 17.5 12.5Z" stroke="#5A8B00" stroke-width="0.833333"/>
<path d="M26.668 12.5H22.5013C22.0411 12.5 21.668 12.8731 21.668 13.3333V17.5C21.668 17.9602 22.0411 18.3333 22.5013 18.3333H26.668C27.1282 18.3333 27.5013 17.9602 27.5013 17.5V13.3333C27.5013 12.8731 27.1282 12.5 26.668 12.5Z" stroke="#5A8B00" stroke-width="0.833333"/>
<path d="M17.5 21.6666H13.3333C12.8731 21.6666 12.5 22.0397 12.5 22.5V26.6666C12.5 27.1269 12.8731 27.5 13.3333 27.5H17.5C17.9602 27.5 18.3333 27.1269 18.3333 26.6666V22.5C18.3333 22.0397 17.9602 21.6666 17.5 21.6666Z" stroke="#5A8B00" stroke-width="0.833333"/>
<path d="M26.668 21.6666H22.5013C22.0411 21.6666 21.668 22.0397 21.668 22.5V26.6666C21.668 27.1269 22.0411 27.5 22.5013 27.5H26.668C27.1282 27.5 27.5013 27.1269 27.5013 26.6666V22.5C27.5013 22.0397 27.1282 21.6666 26.668 21.6666Z" stroke="#5A8B00" stroke-width="0.833333"/>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(f.div, {
                                              className: `framer-16d378m`,
                                              "data-border": !0,
                                              "data-framer-name": `Text`,
                                              layoutDependency: j,
                                              layoutId: `M2KuMBKLC`,
                                              style: {
                                                "--border-bottom-width": `1px`,
                                                "--border-color": `rgba(42, 157, 144, 0.22)`,
                                                "--border-left-width": `1px`,
                                                "--border-right-width": `1px`,
                                                "--border-style": `solid`,
                                                "--border-top-width": `1px`,
                                                backgroundColor: `rgba(42, 157, 144, 0.1)`,
                                                borderBottomLeftRadius: 999,
                                                borderBottomRightRadius: 999,
                                                borderTopLeftRadius: 999,
                                                borderTopRightRadius: 999,
                                              },
                                              children: /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  U(`v13`, d) ??
                                                  /*#__PURE__*/ l(a, {
                                                    children: /*#__PURE__*/ l(f.p, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                        "--framer-font-family": `"IBM Plex Mono"`,
                                                        "--framer-font-size": `9px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-letter-spacing": `0.45px`,
                                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(42, 157, 144))`,
                                                        "--framer-text-transform": `uppercase`,
                                                      },
                                                      children: `运营`,
                                                    }),
                                                  }),
                                                className: `framer-1mbjtxs`,
                                                "data-framer-name": `Operations`,
                                                fonts: [`GF;IBM Plex Mono-500`],
                                                layoutDependency: j,
                                                layoutId: `y0hCtPkLr`,
                                                style: {
                                                  "--extracted-2gg91v": `normal`,
                                                  "--extracted-r6o4lv": `rgb(42, 157, 144)`,
                                                  "--framer-paragraph-spacing": `0px`,
                                                },
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(f.div, {
                                          className: `framer-nhot6y`,
                                          "data-framer-name": `Paragraph`,
                                          layoutDependency: j,
                                          layoutId: `PxABAA6Xo`,
                                          children: /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              U(`v14`, d) ??
                                              /*#__PURE__*/ l(a, {
                                                children: /*#__PURE__*/ l(f.p, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                    "--framer-font-family": `"IBM Plex Sans"`,
                                                    "--framer-font-size": `15px`,
                                                    "--framer-font-style": `normal`,
                                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                    "--framer-font-weight": `600`,
                                                    "--framer-letter-spacing": `0px`,
                                                    "--framer-line-height": `18.75px`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(23, 26, 34))`,
                                                  },
                                                  children: `生产仪表盘`,
                                                }),
                                              }),
                                            className: `framer-usuo1j`,
                                            "data-framer-name": `Production Dashboard`,
                                            fonts: [`GF;IBM Plex Sans-600`],
                                            layoutDependency: j,
                                            layoutId: `CVPpEBseo`,
                                            style: {
                                              "--extracted-2gg91v": `normal`,
                                              "--extracted-r6o4lv": `rgb(23, 26, 34)`,
                                              "--framer-paragraph-spacing": `0px`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ l(f.div, {
                                          className: `framer-ztkxly`,
                                          "data-framer-name": `Paragraph`,
                                          layoutDependency: j,
                                          layoutId: `DI6NY6TBF`,
                                          children: /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              U(`v15`, d) ??
                                              /*#__PURE__*/ l(a, {
                                                children: /*#__PURE__*/ l(f.p, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                    "--framer-font-family": `"IBM Plex Sans"`,
                                                    "--framer-font-size": `13px`,
                                                    "--framer-font-style": `normal`,
                                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                    "--framer-font-weight": `400`,
                                                    "--framer-letter-spacing": `0px`,
                                                    "--framer-line-height": `21.45px`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(112, 119, 128))`,
                                                  },
                                                  children: `生产状态，成果和关键 KPI 实时可见。`,
                                                }),
                                              }),
                                            className: `framer-718t5h`,
                                            "data-framer-name": `Real-time visibility into production status, outpu`,
                                            fonts: [`GF;IBM Plex Sans-regular`],
                                            layoutDependency: j,
                                            layoutId: `YSalfjTeG`,
                                            style: {
                                              "--extracted-2gg91v": `normal`,
                                              "--extracted-r6o4lv": `rgb(112, 119, 128)`,
                                              "--framer-paragraph-spacing": `0px`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ l(O, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: y(
                                          (h?.y || 0) + ((h?.height || 200) - 675) / 2 + 274
                                        ),
                                        pixelHeight: 1574,
                                        pixelWidth: 3030,
                                        sizes: `215px`,
                                        src: `https://framerusercontent.com/images/tZQYflFNdtGfSWzu9DOa4nShGvo.png?width=3030&height=1574`,
                                        srcSet: `https://framerusercontent.com/images/tZQYflFNdtGfSWzu9DOa4nShGvo.png?scale-down-to=512&width=3030&height=1574 512w,https://framerusercontent.com/images/tZQYflFNdtGfSWzu9DOa4nShGvo.png?scale-down-to=1024&width=3030&height=1574 1024w,https://framerusercontent.com/images/tZQYflFNdtGfSWzu9DOa4nShGvo.png?scale-down-to=2048&width=3030&height=1574 2048w,https://framerusercontent.com/images/tZQYflFNdtGfSWzu9DOa4nShGvo.png?width=3030&height=1574 3030w`,
                                      },
                                      className: `framer-1ozgdbt`,
                                      "data-border": !0,
                                      "data-framer-name": `image 108`,
                                      layoutDependency: j,
                                      layoutId: `bk7vvYOs6`,
                                      style: {
                                        "--border-bottom-width": `0.6000000238418579px`,
                                        "--border-color": `rgba(0, 0, 0, 0.2)`,
                                        "--border-left-width": `0.6000000238418579px`,
                                        "--border-right-width": `0.6000000238418579px`,
                                        "--border-style": `solid`,
                                        "--border-top-width": `0.6000000238418579px`,
                                        borderBottomLeftRadius: 3,
                                        borderBottomRightRadius: 3,
                                        borderTopLeftRadius: 3,
                                        borderTopRightRadius: 3,
                                      },
                                      ...G(
                                        {
                                          wOqe_0XdI: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              loading: y(
                                                (h?.y || 0) + ((h?.height || 200) - 350) / 2 + 274
                                              ),
                                              pixelHeight: 1574,
                                              pixelWidth: 3030,
                                              sizes: `215px`,
                                              src: `https://framerusercontent.com/images/tZQYflFNdtGfSWzu9DOa4nShGvo.png?width=3030&height=1574`,
                                              srcSet: `https://framerusercontent.com/images/tZQYflFNdtGfSWzu9DOa4nShGvo.png?scale-down-to=512&width=3030&height=1574 512w,https://framerusercontent.com/images/tZQYflFNdtGfSWzu9DOa4nShGvo.png?scale-down-to=1024&width=3030&height=1574 1024w,https://framerusercontent.com/images/tZQYflFNdtGfSWzu9DOa4nShGvo.png?scale-down-to=2048&width=3030&height=1574 2048w,https://framerusercontent.com/images/tZQYflFNdtGfSWzu9DOa4nShGvo.png?width=3030&height=1574 3030w`,
                                            },
                                          },
                                          Y2CuTwOTT: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              loading: y(
                                                (h?.y || 0) +
                                                  ((h?.height || 200) - 2762.0161) / 2 +
                                                  223
                                              ),
                                              pixelHeight: 1574,
                                              pixelWidth: 3030,
                                              sizes: `215px`,
                                              src: `https://framerusercontent.com/images/tZQYflFNdtGfSWzu9DOa4nShGvo.png?width=3030&height=1574`,
                                              srcSet: `https://framerusercontent.com/images/tZQYflFNdtGfSWzu9DOa4nShGvo.png?scale-down-to=512&width=3030&height=1574 512w,https://framerusercontent.com/images/tZQYflFNdtGfSWzu9DOa4nShGvo.png?scale-down-to=1024&width=3030&height=1574 1024w,https://framerusercontent.com/images/tZQYflFNdtGfSWzu9DOa4nShGvo.png?scale-down-to=2048&width=3030&height=1574 2048w,https://framerusercontent.com/images/tZQYflFNdtGfSWzu9DOa4nShGvo.png?width=3030&height=1574 3030w`,
                                            },
                                          },
                                        },
                                        C,
                                        E
                                      ),
                                    }),
                                  ],
                                }),
                              z() &&
                                /*#__PURE__*/ u(f.div, {
                                  className: `framer-jbniy1`,
                                  "data-border": !0,
                                  "data-framer-name": `Container`,
                                  layoutDependency: j,
                                  layoutId: `zmqRtF3zA`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `rgb(226, 230, 222)`,
                                    "--border-left-width": `1px`,
                                    "--border-right-width": `1px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `1px`,
                                    backgroundColor: `rgb(255, 255, 255)`,
                                    borderBottomLeftRadius: 6,
                                    borderBottomRightRadius: 6,
                                    borderTopLeftRadius: 6,
                                    borderTopRightRadius: 6,
                                  },
                                  children: [
                                    /*#__PURE__*/ u(f.div, {
                                      className: `framer-1wu0dk7`,
                                      "data-framer-name": `Frame 2147224005`,
                                      layoutDependency: j,
                                      layoutId: `tzjxaDSmz`,
                                      children: [
                                        /*#__PURE__*/ u(f.div, {
                                          className: `framer-2mr5cy`,
                                          "data-framer-name": `Container`,
                                          layoutDependency: j,
                                          layoutId: `gROVfCqJw`,
                                          children: [
                                            /*#__PURE__*/ l(x, {
                                              className: `framer-1pcqfat`,
                                              "data-framer-name": `Container`,
                                              fill: `rgba(0,0,0,1)`,
                                              intrinsicHeight: 40,
                                              intrinsicWidth: 40,
                                              layoutDependency: j,
                                              layoutId: `z8OFBSJgv`,
                                              svg: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 5C0 2.23858 2.23858 0 5 0H35C37.7614 0 40 2.23858 40 5V35C40 37.7614 37.7614 40 35 40H5C2.23858 40 0 37.7614 0 35V5Z" fill="#E7F9B9"/>
<path d="M17.5013 14.1666H15.8346C15.3926 14.1666 14.9687 14.3422 14.6561 14.6548C14.3436 14.9673 14.168 15.3913 14.168 15.8333V25.8333C14.168 26.2753 14.3436 26.6992 14.6561 27.0118C14.9687 27.3244 15.3926 27.5 15.8346 27.5H24.168C24.61 27.5 25.0339 27.3244 25.3465 27.0118C25.659 26.6992 25.8346 26.2753 25.8346 25.8333V15.8333C25.8346 15.3913 25.659 14.9673 25.3465 14.6548C25.0339 14.3422 24.61 14.1666 24.168 14.1666H22.5013" stroke="#5A8B00" stroke-width="0.833333"/>
<path d="M21.6667 12.5H18.3333C17.8731 12.5 17.5 12.8731 17.5 13.3333V15C17.5 15.4602 17.8731 15.8333 18.3333 15.8333H21.6667C22.1269 15.8333 22.5 15.4602 22.5 15V13.3333C22.5 12.8731 22.1269 12.5 21.6667 12.5Z" stroke="#5A8B00" stroke-width="0.833333"/>
<path d="M17.5 20H22.5M17.5 23.3333H20.8333" stroke="#5A8B00" stroke-width="0.833333"/>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(f.div, {
                                              className: `framer-ovkpmo`,
                                              "data-border": !0,
                                              "data-framer-name": `Text`,
                                              layoutDependency: j,
                                              layoutId: `Xxj1zWLNj`,
                                              style: {
                                                "--border-bottom-width": `1px`,
                                                "--border-color": `rgba(42, 157, 144, 0.22)`,
                                                "--border-left-width": `1px`,
                                                "--border-right-width": `1px`,
                                                "--border-style": `solid`,
                                                "--border-top-width": `1px`,
                                                backgroundColor: `rgba(42, 157, 144, 0.1)`,
                                                borderBottomLeftRadius: 999,
                                                borderBottomRightRadius: 999,
                                                borderTopLeftRadius: 999,
                                                borderTopRightRadius: 999,
                                              },
                                              children: /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  U(`v13`, d) ??
                                                  /*#__PURE__*/ l(a, {
                                                    children: /*#__PURE__*/ l(f.p, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                        "--framer-font-family": `"IBM Plex Mono"`,
                                                        "--framer-font-size": `9px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-letter-spacing": `0.45px`,
                                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(42, 157, 144))`,
                                                        "--framer-text-transform": `uppercase`,
                                                      },
                                                      children: `运营`,
                                                    }),
                                                  }),
                                                className: `framer-nmgdnm`,
                                                "data-framer-name": `Operations`,
                                                fonts: [`GF;IBM Plex Mono-500`],
                                                layoutDependency: j,
                                                layoutId: `OHWt0VBK0`,
                                                style: {
                                                  "--extracted-2gg91v": `normal`,
                                                  "--extracted-r6o4lv": `rgb(42, 157, 144)`,
                                                  "--framer-paragraph-spacing": `0px`,
                                                },
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(f.div, {
                                          className: `framer-1dxa7pb`,
                                          "data-framer-name": `Paragraph`,
                                          layoutDependency: j,
                                          layoutId: `ywsT5M4Wg`,
                                          children: /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              U(`v16`, d) ??
                                              /*#__PURE__*/ l(a, {
                                                children: /*#__PURE__*/ l(f.p, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                    "--framer-font-family": `"IBM Plex Sans"`,
                                                    "--framer-font-size": `15px`,
                                                    "--framer-font-style": `normal`,
                                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                    "--framer-font-weight": `600`,
                                                    "--framer-letter-spacing": `0px`,
                                                    "--framer-line-height": `18.75px`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(23, 26, 34))`,
                                                  },
                                                  children: `能源管理系统`,
                                                }),
                                              }),
                                            className: `framer-16bcitu`,
                                            "data-framer-name": `Energy Management System`,
                                            fonts: [`GF;IBM Plex Sans-600`],
                                            layoutDependency: j,
                                            layoutId: `ymFEv6tl0`,
                                            style: {
                                              "--extracted-2gg91v": `normal`,
                                              "--extracted-r6o4lv": `rgb(23, 26, 34)`,
                                              "--framer-paragraph-spacing": `0px`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ l(f.div, {
                                          className: `framer-1kd2s14`,
                                          "data-framer-name": `Paragraph`,
                                          layoutDependency: j,
                                          layoutId: `FEfo6liHC`,
                                          children: /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              U(`v17`, d) ??
                                              /*#__PURE__*/ l(a, {
                                                children: /*#__PURE__*/ l(f.p, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                    "--framer-font-family": `"IBM Plex Sans"`,
                                                    "--framer-font-size": `13px`,
                                                    "--framer-font-style": `normal`,
                                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                    "--framer-font-weight": `400`,
                                                    "--framer-letter-spacing": `0px`,
                                                    "--framer-line-height": `21.45px`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(112, 119, 128))`,
                                                  },
                                                  children: `监控工厂能源使用和设施表现。`,
                                                }),
                                              }),
                                            className: `framer-a97rqs`,
                                            "data-framer-name": `Manage and execute shopfloor work orders digitally`,
                                            fonts: [`GF;IBM Plex Sans-regular`],
                                            layoutDependency: j,
                                            layoutId: `MnPLhINDu`,
                                            style: {
                                              "--extracted-2gg91v": `normal`,
                                              "--extracted-r6o4lv": `rgb(112, 119, 128)`,
                                              "--framer-paragraph-spacing": `0px`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ l(O, {
                                      background: {
                                        alt: ``,
                                        fit: `stretch`,
                                        loading: y(
                                          (h?.y || 0) + ((h?.height || 200) - 675) / 2 + 270
                                        ),
                                        pixelHeight: 484,
                                        pixelWidth: 856,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `213.8945px`,
                                        src: `https://framerusercontent.com/images/lfo2W1sVI6v6Rpq3RzrhWkIMzhU.png?width=856&height=484`,
                                        srcSet: `https://framerusercontent.com/images/lfo2W1sVI6v6Rpq3RzrhWkIMzhU.png?scale-down-to=512&width=856&height=484 512w,https://framerusercontent.com/images/lfo2W1sVI6v6Rpq3RzrhWkIMzhU.png?width=856&height=484 856w`,
                                      },
                                      className: `framer-3fch3e`,
                                      "data-border": !0,
                                      "data-framer-name": `image 110`,
                                      layoutDependency: j,
                                      layoutId: `F2EK60KLX`,
                                      style: {
                                        "--border-bottom-width": `0.6000000238418579px`,
                                        "--border-color": `rgba(0, 0, 0, 0.2)`,
                                        "--border-left-width": `0.6000000238418579px`,
                                        "--border-right-width": `0.6000000238418579px`,
                                        "--border-style": `solid`,
                                        "--border-top-width": `0.6000000238418579px`,
                                        borderBottomLeftRadius: 3,
                                        borderBottomRightRadius: 3,
                                        borderTopLeftRadius: 3,
                                        borderTopRightRadius: 3,
                                      },
                                      ...G(
                                        {
                                          wOqe_0XdI: {
                                            background: {
                                              alt: ``,
                                              fit: `stretch`,
                                              loading: y(
                                                (h?.y || 0) + ((h?.height || 200) - 350) / 2 + 270
                                              ),
                                              pixelHeight: 484,
                                              pixelWidth: 856,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: `213.8945px`,
                                              src: `https://framerusercontent.com/images/lfo2W1sVI6v6Rpq3RzrhWkIMzhU.png?width=856&height=484`,
                                              srcSet: `https://framerusercontent.com/images/lfo2W1sVI6v6Rpq3RzrhWkIMzhU.png?scale-down-to=512&width=856&height=484 512w,https://framerusercontent.com/images/lfo2W1sVI6v6Rpq3RzrhWkIMzhU.png?width=856&height=484 856w`,
                                            },
                                          },
                                          Y2CuTwOTT: {
                                            background: {
                                              alt: ``,
                                              fit: `stretch`,
                                              loading: y(
                                                (h?.y || 0) +
                                                  ((h?.height || 200) - 2762.0161) / 2 +
                                                  588.6865
                                              ),
                                              pixelHeight: 484,
                                              pixelWidth: 856,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: `213.8945px`,
                                              src: `https://framerusercontent.com/images/lfo2W1sVI6v6Rpq3RzrhWkIMzhU.png?width=856&height=484`,
                                              srcSet: `https://framerusercontent.com/images/lfo2W1sVI6v6Rpq3RzrhWkIMzhU.png?scale-down-to=512&width=856&height=484 512w,https://framerusercontent.com/images/lfo2W1sVI6v6Rpq3RzrhWkIMzhU.png?width=856&height=484 856w`,
                                            },
                                          },
                                        },
                                        C,
                                        E
                                      ),
                                    }),
                                  ],
                                }),
                              fe() &&
                                /*#__PURE__*/ u(f.div, {
                                  className: `framer-8tjryq`,
                                  "data-border": !0,
                                  "data-framer-name": `Container`,
                                  layoutDependency: j,
                                  layoutId: `wQRBe6evV`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `rgb(226, 230, 222)`,
                                    "--border-left-width": `1px`,
                                    "--border-right-width": `1px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `1px`,
                                    backgroundColor: `rgb(255, 255, 255)`,
                                    borderBottomLeftRadius: 6,
                                    borderBottomRightRadius: 6,
                                    borderTopLeftRadius: 6,
                                    borderTopRightRadius: 6,
                                  },
                                  children: [
                                    /*#__PURE__*/ u(f.div, {
                                      className: `framer-srm50j`,
                                      "data-framer-name": `Frame 2147224006`,
                                      layoutDependency: j,
                                      layoutId: `izH4CpSlV`,
                                      children: [
                                        /*#__PURE__*/ u(f.div, {
                                          className: `framer-og2l6d`,
                                          "data-framer-name": `Container`,
                                          layoutDependency: j,
                                          layoutId: `p58w4RE7u`,
                                          children: [
                                            /*#__PURE__*/ l(x, {
                                              className: `framer-b0kn6d`,
                                              "data-framer-name": `Container`,
                                              fill: `rgba(0,0,0,1)`,
                                              intrinsicHeight: 40,
                                              intrinsicWidth: 40,
                                              layoutDependency: j,
                                              layoutId: `BH2mGuYBm`,
                                              svg: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 5C0 2.23858 2.23858 0 5 0H35C37.7614 0 40 2.23858 40 5V35C40 37.7614 37.7614 40 35 40H5C2.23858 40 0 37.7614 0 35V5Z" fill="#E7F9B9"/>
<path d="M20 11.6666L12.5 15.8333L20 20L27.5 15.8333L20 11.6666Z" stroke="#5A8B00" stroke-width="0.833333"/>
<path d="M12.5 24.1666L20 28.3333L27.5 24.1666" stroke="#5A8B00" stroke-width="0.833333"/>
<path d="M12.5 20L20 24.1667L27.5 20" stroke="#5A8B00" stroke-width="0.833333"/>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(f.div, {
                                              className: `framer-irbic5`,
                                              "data-border": !0,
                                              "data-framer-name": `Text`,
                                              layoutDependency: j,
                                              layoutId: `xD86EhRu5`,
                                              style: {
                                                "--border-bottom-width": `1px`,
                                                "--border-color": `rgba(245, 158, 11, 0.22)`,
                                                "--border-left-width": `1px`,
                                                "--border-right-width": `1px`,
                                                "--border-style": `solid`,
                                                "--border-top-width": `1px`,
                                                backgroundColor: `rgba(245, 158, 11, 0.1)`,
                                                borderBottomLeftRadius: 999,
                                                borderBottomRightRadius: 999,
                                                borderTopLeftRadius: 999,
                                                borderTopRightRadius: 999,
                                              },
                                              children: /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  U(`v18`, d) ??
                                                  /*#__PURE__*/ l(a, {
                                                    children: /*#__PURE__*/ l(f.p, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                        "--framer-font-family": `"IBM Plex Mono"`,
                                                        "--framer-font-size": `9px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-letter-spacing": `0.45px`,
                                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(217, 119, 6))`,
                                                        "--framer-text-transform": `uppercase`,
                                                      },
                                                      children: `质量`,
                                                    }),
                                                  }),
                                                className: `framer-4trt17`,
                                                "data-framer-name": `Quality`,
                                                fonts: [`GF;IBM Plex Mono-500`],
                                                layoutDependency: j,
                                                layoutId: `ZRGcQ_WDB`,
                                                style: {
                                                  "--extracted-2gg91v": `normal`,
                                                  "--extracted-r6o4lv": `rgb(217, 119, 6)`,
                                                  "--framer-paragraph-spacing": `0px`,
                                                },
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(f.div, {
                                          className: `framer-p5hv00`,
                                          "data-framer-name": `Paragraph`,
                                          layoutDependency: j,
                                          layoutId: `zVUDE3_Ru`,
                                          children: /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              U(`v19`, d) ??
                                              /*#__PURE__*/ l(a, {
                                                children: /*#__PURE__*/ l(f.p, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                    "--framer-font-family": `"IBM Plex Sans"`,
                                                    "--framer-font-size": `15px`,
                                                    "--framer-font-style": `normal`,
                                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                    "--framer-font-weight": `600`,
                                                    "--framer-letter-spacing": `0px`,
                                                    "--framer-line-height": `18.75px`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(23, 26, 34))`,
                                                  },
                                                  children: `质量检查`,
                                                }),
                                              }),
                                            className: `framer-so8a9y`,
                                            "data-framer-name": `Quality Checks`,
                                            fonts: [`GF;IBM Plex Sans-600`],
                                            layoutDependency: j,
                                            layoutId: `hLCybxKXQ`,
                                            style: {
                                              "--extracted-2gg91v": `normal`,
                                              "--extracted-r6o4lv": `rgb(23, 26, 34)`,
                                              "--framer-paragraph-spacing": `0px`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ l(f.div, {
                                          className: `framer-1oa7i0n`,
                                          "data-framer-name": `Paragraph`,
                                          layoutDependency: j,
                                          layoutId: `Ghoh62AO7`,
                                          children: /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              U(`v20`, d) ??
                                              /*#__PURE__*/ l(a, {
                                                children: /*#__PURE__*/ l(f.p, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                    "--framer-font-family": `"IBM Plex Sans"`,
                                                    "--framer-font-size": `13px`,
                                                    "--framer-font-style": `normal`,
                                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                    "--framer-font-weight": `400`,
                                                    "--framer-letter-spacing": `0px`,
                                                    "--framer-line-height": `21.45px`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(112, 119, 128))`,
                                                  },
                                                  children: `标准化检查工作流，数据捕获和问题上报。`,
                                                }),
                                              }),
                                            className: `framer-1fklfqh`,
                                            "data-framer-name": `Standardize inspection workflows, data capture and`,
                                            fonts: [`GF;IBM Plex Sans-regular`],
                                            layoutDependency: j,
                                            layoutId: `Gj2ig2pj1`,
                                            style: {
                                              "--extracted-2gg91v": `normal`,
                                              "--extracted-r6o4lv": `rgb(112, 119, 128)`,
                                              "--framer-paragraph-spacing": `0px`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ l(O, {
                                      background: {
                                        alt: ``,
                                        fit: `stretch`,
                                        loading: y(
                                          (h?.y || 0) + ((h?.height || 200) - 675) / 2 + 274
                                        ),
                                        pixelHeight: 456,
                                        pixelWidth: 860,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `215px`,
                                        src: `https://framerusercontent.com/images/KntiSCcVONgByC9FePczGrRCo.png?width=860&height=456`,
                                        srcSet: `https://framerusercontent.com/images/KntiSCcVONgByC9FePczGrRCo.png?scale-down-to=512&width=860&height=456 512w,https://framerusercontent.com/images/KntiSCcVONgByC9FePczGrRCo.png?width=860&height=456 860w`,
                                      },
                                      className: `framer-125pqz2`,
                                      "data-border": !0,
                                      "data-framer-name": `image 114`,
                                      layoutDependency: j,
                                      layoutId: `PBwLWFSI3`,
                                      style: {
                                        "--border-bottom-width": `0.6000000238418579px`,
                                        "--border-color": `rgba(0, 0, 0, 0.2)`,
                                        "--border-left-width": `0.6000000238418579px`,
                                        "--border-right-width": `0.6000000238418579px`,
                                        "--border-style": `solid`,
                                        "--border-top-width": `0.6000000238418579px`,
                                        borderBottomLeftRadius: 3,
                                        borderBottomRightRadius: 3,
                                        borderTopLeftRadius: 3,
                                        borderTopRightRadius: 3,
                                      },
                                      ...G(
                                        {
                                          Qs2N7zWIt: {
                                            background: {
                                              alt: ``,
                                              fit: `stretch`,
                                              loading: y(
                                                (h?.y || 0) + ((h?.height || 200) - 350) / 2 + 274
                                              ),
                                              pixelHeight: 456,
                                              pixelWidth: 860,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: `215px`,
                                              src: `https://framerusercontent.com/images/KntiSCcVONgByC9FePczGrRCo.png?width=860&height=456`,
                                              srcSet: `https://framerusercontent.com/images/KntiSCcVONgByC9FePczGrRCo.png?scale-down-to=512&width=860&height=456 512w,https://framerusercontent.com/images/KntiSCcVONgByC9FePczGrRCo.png?width=860&height=456 860w`,
                                            },
                                          },
                                          Y2CuTwOTT: {
                                            background: {
                                              alt: ``,
                                              fit: `stretch`,
                                              loading: y(
                                                (h?.y || 0) +
                                                  ((h?.height || 200) - 2762.0161) / 2 +
                                                  963.3362
                                              ),
                                              pixelHeight: 456,
                                              pixelWidth: 860,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: `215px`,
                                              src: `https://framerusercontent.com/images/KntiSCcVONgByC9FePczGrRCo.png?width=860&height=456`,
                                              srcSet: `https://framerusercontent.com/images/KntiSCcVONgByC9FePczGrRCo.png?scale-down-to=512&width=860&height=456 512w,https://framerusercontent.com/images/KntiSCcVONgByC9FePczGrRCo.png?width=860&height=456 860w`,
                                            },
                                          },
                                        },
                                        C,
                                        E
                                      ),
                                    }),
                                  ],
                                }),
                              z() &&
                                /*#__PURE__*/ u(f.div, {
                                  className: `framer-rjs9rs`,
                                  "data-border": !0,
                                  "data-framer-name": `Container`,
                                  layoutDependency: j,
                                  layoutId: `i6vQV4tCP`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `rgb(226, 230, 222)`,
                                    "--border-left-width": `1px`,
                                    "--border-right-width": `1px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `1px`,
                                    backgroundColor: `rgb(255, 255, 255)`,
                                    borderBottomLeftRadius: 6,
                                    borderBottomRightRadius: 6,
                                    borderTopLeftRadius: 6,
                                    borderTopRightRadius: 6,
                                  },
                                  children: [
                                    /*#__PURE__*/ u(f.div, {
                                      className: `framer-nc4121`,
                                      "data-framer-name": `Frame 2147224004`,
                                      layoutDependency: j,
                                      layoutId: `S_VqsDHux`,
                                      children: [
                                        /*#__PURE__*/ u(f.div, {
                                          className: `framer-1e29idn`,
                                          "data-framer-name": `Container`,
                                          layoutDependency: j,
                                          layoutId: `ydteDsm8t`,
                                          children: [
                                            /*#__PURE__*/ l(x, {
                                              className: `framer-15aq479`,
                                              "data-framer-name": `Container`,
                                              fill: `rgba(0,0,0,1)`,
                                              intrinsicHeight: 40,
                                              intrinsicWidth: 40,
                                              layoutDependency: j,
                                              layoutId: `d6YS8VQHG`,
                                              svg: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 5C0 2.23858 2.23858 0 5 0H35C37.7614 0 40 2.23858 40 5V35C40 37.7614 37.7614 40 35 40H5C2.23858 40 0 37.7614 0 35V5Z" fill="#E7F9B9"/>
<path d="M20 27.5C24.1421 27.5 27.5 24.1421 27.5 20C27.5 15.8579 24.1421 12.5 20 12.5C15.8579 12.5 12.5 15.8579 12.5 20C12.5 24.1421 15.8579 27.5 20 27.5Z" stroke="#5A8B00" stroke-width="0.833333"/>
<path d="M20 15.8334V20L22.5 22.5" stroke="#5A8B00" stroke-width="0.833333"/>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(f.div, {
                                              className: `framer-1euynyj`,
                                              "data-border": !0,
                                              "data-framer-name": `Text`,
                                              layoutDependency: j,
                                              layoutId: `XT3vVhTUN`,
                                              style: {
                                                "--border-bottom-width": `1px`,
                                                "--border-color": `rgba(42, 157, 144, 0.22)`,
                                                "--border-left-width": `1px`,
                                                "--border-right-width": `1px`,
                                                "--border-style": `solid`,
                                                "--border-top-width": `1px`,
                                                backgroundColor: `rgba(42, 157, 144, 0.1)`,
                                                borderBottomLeftRadius: 999,
                                                borderBottomRightRadius: 999,
                                                borderTopLeftRadius: 999,
                                                borderTopRightRadius: 999,
                                              },
                                              children: /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  U(`v13`, d) ??
                                                  /*#__PURE__*/ l(a, {
                                                    children: /*#__PURE__*/ l(f.p, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                        "--framer-font-family": `"IBM Plex Mono"`,
                                                        "--framer-font-size": `9px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-letter-spacing": `0.45px`,
                                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(42, 157, 144))`,
                                                        "--framer-text-transform": `uppercase`,
                                                      },
                                                      children: `运营`,
                                                    }),
                                                  }),
                                                className: `framer-ivtrrh`,
                                                "data-framer-name": `Operations`,
                                                fonts: [`GF;IBM Plex Mono-500`],
                                                layoutDependency: j,
                                                layoutId: `JvyzaaGko`,
                                                style: {
                                                  "--extracted-2gg91v": `normal`,
                                                  "--extracted-r6o4lv": `rgb(42, 157, 144)`,
                                                  "--framer-paragraph-spacing": `0px`,
                                                },
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(f.div, {
                                          className: `framer-1lflka2`,
                                          "data-framer-name": `Paragraph`,
                                          layoutDependency: j,
                                          layoutId: `BbnNkwpM1`,
                                          children: /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              U(`v21`, d) ??
                                              /*#__PURE__*/ l(a, {
                                                children: /*#__PURE__*/ u(f.p, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                    "--framer-font-family": `"IBM Plex Sans"`,
                                                    "--framer-font-size": `15px`,
                                                    "--framer-font-style": `normal`,
                                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                    "--framer-font-weight": `600`,
                                                    "--framer-letter-spacing": `0px`,
                                                    "--framer-line-height": `18.75px`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(23, 26, 34))`,
                                                  },
                                                  children: [
                                                    `生产执行`,
                                                    /*#__PURE__*/ l(f.br, {}),
                                                    `系统`,
                                                  ],
                                                }),
                                              }),
                                            className: `framer-1o5vfq4`,
                                            "data-framer-name": `Manufacturing Execution \u2028System`,
                                            fonts: [`GF;IBM Plex Sans-600`],
                                            layoutDependency: j,
                                            layoutId: `w8sEYyw0X`,
                                            style: {
                                              "--extracted-2gg91v": `normal`,
                                              "--extracted-r6o4lv": `rgb(23, 26, 34)`,
                                              "--framer-paragraph-spacing": `0px`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ l(f.div, {
                                          className: `framer-pjk711`,
                                          "data-framer-name": `Paragraph`,
                                          layoutDependency: j,
                                          layoutId: `JeiyRxbor`,
                                          children: /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              U(`v22`, d) ??
                                              /*#__PURE__*/ l(a, {
                                                children: /*#__PURE__*/ l(f.p, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                    "--framer-font-family": `"IBM Plex Sans"`,
                                                    "--framer-font-size": `13px`,
                                                    "--framer-font-style": `normal`,
                                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                    "--framer-font-weight": `400`,
                                                    "--framer-letter-spacing": `0px`,
                                                    "--framer-line-height": `21.45px`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(112, 119, 128))`,
                                                  },
                                                  children: `跟踪生产执行，工单和车间状态。`,
                                                }),
                                              }),
                                            className: `framer-7ladui`,
                                            "data-framer-name": `Capture downtime events, reasons and durations for`,
                                            fonts: [`GF;IBM Plex Sans-regular`],
                                            layoutDependency: j,
                                            layoutId: `DftrHMYZ5`,
                                            style: {
                                              "--extracted-2gg91v": `normal`,
                                              "--extracted-r6o4lv": `rgb(112, 119, 128)`,
                                              "--framer-paragraph-spacing": `0px`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ l(O, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: y(
                                          (h?.y || 0) + ((h?.height || 200) - 675) / 2 + 274
                                        ),
                                        pixelHeight: 858,
                                        pixelWidth: 1907,
                                        sizes: `215px`,
                                        src: `https://framerusercontent.com/images/CHSVSf4shu28wvuXoTwka3Obq7M.png?width=1907&height=858`,
                                        srcSet: `https://framerusercontent.com/images/CHSVSf4shu28wvuXoTwka3Obq7M.png?scale-down-to=512&width=1907&height=858 512w,https://framerusercontent.com/images/CHSVSf4shu28wvuXoTwka3Obq7M.png?scale-down-to=1024&width=1907&height=858 1024w,https://framerusercontent.com/images/CHSVSf4shu28wvuXoTwka3Obq7M.png?width=1907&height=858 1907w`,
                                      },
                                      className: `framer-103n3jt`,
                                      "data-framer-name": `image 109`,
                                      layoutDependency: j,
                                      layoutId: `CHYO2sSgu`,
                                      style: {
                                        borderBottomLeftRadius: 3,
                                        borderBottomRightRadius: 3,
                                        borderTopLeftRadius: 3,
                                        borderTopRightRadius: 3,
                                      },
                                      ...G(
                                        {
                                          wOqe_0XdI: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              loading: y(
                                                (h?.y || 0) + ((h?.height || 200) - 350) / 2 + 274
                                              ),
                                              pixelHeight: 858,
                                              pixelWidth: 1907,
                                              sizes: `215px`,
                                              src: `https://framerusercontent.com/images/CHSVSf4shu28wvuXoTwka3Obq7M.png?width=1907&height=858`,
                                              srcSet: `https://framerusercontent.com/images/CHSVSf4shu28wvuXoTwka3Obq7M.png?scale-down-to=512&width=1907&height=858 512w,https://framerusercontent.com/images/CHSVSf4shu28wvuXoTwka3Obq7M.png?scale-down-to=1024&width=1907&height=858 1024w,https://framerusercontent.com/images/CHSVSf4shu28wvuXoTwka3Obq7M.png?width=1907&height=858 1907w`,
                                            },
                                          },
                                          Y2CuTwOTT: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              loading: y(
                                                (h?.y || 0) +
                                                  ((h?.height || 200) - 2762.0161) / 2 +
                                                  1335.1753
                                              ),
                                              pixelHeight: 858,
                                              pixelWidth: 1907,
                                              sizes: `215px`,
                                              src: `https://framerusercontent.com/images/CHSVSf4shu28wvuXoTwka3Obq7M.png?width=1907&height=858`,
                                              srcSet: `https://framerusercontent.com/images/CHSVSf4shu28wvuXoTwka3Obq7M.png?scale-down-to=512&width=1907&height=858 512w,https://framerusercontent.com/images/CHSVSf4shu28wvuXoTwka3Obq7M.png?scale-down-to=1024&width=1907&height=858 1024w,https://framerusercontent.com/images/CHSVSf4shu28wvuXoTwka3Obq7M.png?width=1907&height=858 1907w`,
                                            },
                                          },
                                        },
                                        C,
                                        E
                                      ),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        pe() &&
                          /*#__PURE__*/ u(f.div, {
                            className: `framer-1rsd25g`,
                            layoutDependency: j,
                            layoutId: `PwM_M9O2x`,
                            children: [
                              me() &&
                                /*#__PURE__*/ u(f.div, {
                                  className: `framer-1p0xvs0`,
                                  "data-border": !0,
                                  "data-framer-name": `Container`,
                                  layoutDependency: j,
                                  layoutId: `AksdBLrqP`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `rgb(226, 230, 222)`,
                                    "--border-left-width": `1px`,
                                    "--border-right-width": `1px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `1px`,
                                    backgroundColor: `rgb(255, 255, 255)`,
                                    borderBottomLeftRadius: 6,
                                    borderBottomRightRadius: 6,
                                    borderTopLeftRadius: 6,
                                    borderTopRightRadius: 6,
                                  },
                                  children: [
                                    /*#__PURE__*/ u(f.div, {
                                      className: `framer-f04jnd`,
                                      "data-framer-name": `Container`,
                                      layoutDependency: j,
                                      layoutId: `LmoRX1qIs`,
                                      children: [
                                        /*#__PURE__*/ l(x, {
                                          className: `framer-1pjbiaw`,
                                          "data-framer-name": `Container`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 40,
                                          intrinsicWidth: 40,
                                          layoutDependency: j,
                                          layoutId: `A9kf5tFiN`,
                                          svg: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 5C0 2.23858 2.23858 0 5 0H35C37.7614 0 40 2.23858 40 5V35C40 37.7614 37.7614 40 35 40H5C2.23858 40 0 37.7614 0 35V5Z" fill="#E7F9B9"/>
<path d="M17.5013 14.1667H15.8346C15.3926 14.1667 14.9687 14.3423 14.6561 14.6549C14.3436 14.9675 14.168 15.3914 14.168 15.8334V25.8334C14.168 26.2754 14.3436 26.6994 14.6561 27.0119C14.9687 27.3245 15.3926 27.5001 15.8346 27.5001H24.168C24.61 27.5001 25.0339 27.3245 25.3465 27.0119C25.659 26.6994 25.8346 26.2754 25.8346 25.8334V15.8334C25.8346 15.3914 25.659 14.9675 25.3465 14.6549C25.0339 14.3423 24.61 14.1667 24.168 14.1667H22.5013" stroke="#5A8B00" stroke-width="0.833333"/>
<path d="M21.6667 12.5H18.3333C17.8731 12.5 17.5 12.8731 17.5 13.3333V15C17.5 15.4602 17.8731 15.8333 18.3333 15.8333H21.6667C22.1269 15.8333 22.5 15.4602 22.5 15V13.3333C22.5 12.8731 22.1269 12.5 21.6667 12.5Z" stroke="#5A8B00" stroke-width="0.833333"/>
<path d="M17.5 19.9999L19.1667 21.6666L22.5 18.3333" stroke="#5A8B00" stroke-width="0.833333"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ l(f.div, {
                                          className: `framer-1po6nni`,
                                          "data-border": !0,
                                          "data-framer-name": `Text`,
                                          layoutDependency: j,
                                          layoutId: `RHOKnY19M`,
                                          style: {
                                            "--border-bottom-width": `1px`,
                                            "--border-color": `rgba(138, 181, 45, 0.22)`,
                                            "--border-left-width": `1px`,
                                            "--border-right-width": `1px`,
                                            "--border-style": `solid`,
                                            "--border-top-width": `1px`,
                                            backgroundColor: `rgba(138, 181, 45, 0.1)`,
                                            borderBottomLeftRadius: 999,
                                            borderBottomRightRadius: 999,
                                            borderTopLeftRadius: 999,
                                            borderTopRightRadius: 999,
                                          },
                                          children: /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              U(`v23`, d) ??
                                              /*#__PURE__*/ l(a, {
                                                children: /*#__PURE__*/ l(f.p, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                    "--framer-font-family": `"IBM Plex Mono"`,
                                                    "--framer-font-size": `9px`,
                                                    "--framer-font-style": `normal`,
                                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-letter-spacing": `0.45px`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(115, 178, 0))`,
                                                    "--framer-text-transform": `uppercase`,
                                                  },
                                                  children: `工作流`,
                                                }),
                                              }),
                                            className: `framer-11fnr53`,
                                            "data-framer-name": `Workflow`,
                                            fonts: [`GF;IBM Plex Mono-500`],
                                            layoutDependency: j,
                                            layoutId: `voQ7gsPCg`,
                                            style: {
                                              "--extracted-2gg91v": `normal`,
                                              "--extracted-r6o4lv": `rgb(115, 178, 0)`,
                                              "--framer-paragraph-spacing": `0px`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ l(f.div, {
                                      className: `framer-1xf0s4m`,
                                      "data-framer-name": `Paragraph`,
                                      layoutDependency: j,
                                      layoutId: `fXK1zzOHM`,
                                      children: /*#__PURE__*/ l(m, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          U(`v24`, d) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(f.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `15px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `600`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `18.75px`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(23, 26, 34))`,
                                              },
                                              children: `主数据管理`,
                                            }),
                                          }),
                                        className: `framer-1qjbbqf`,
                                        "data-framer-name": `Master Data Management`,
                                        fonts: [`GF;IBM Plex Sans-600`],
                                        layoutDependency: j,
                                        layoutId: `tYLYgr5EL`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--extracted-r6o4lv": `rgb(23, 26, 34)`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    /*#__PURE__*/ l(f.div, {
                                      className: `framer-mrg6ve`,
                                      "data-framer-name": `Paragraph`,
                                      layoutDependency: j,
                                      layoutId: `U2UWRSHpU`,
                                      children: /*#__PURE__*/ l(m, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          U(`v25`, d) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(f.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `13px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `400`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `21.45px`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(112, 119, 128))`,
                                              },
                                              children: `管理材料，资产和位置主数据。`,
                                            }),
                                          }),
                                        className: `framer-cpqnp7`,
                                        "data-framer-name": `Manage approvals, digital forms, and workflow reco`,
                                        fonts: [`GF;IBM Plex Sans-regular`],
                                        layoutDependency: j,
                                        layoutId: `RhMdnn4Rc`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--extracted-r6o4lv": `rgb(112, 119, 128)`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    /*#__PURE__*/ l(O, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: y(
                                          (h?.y || 0) + ((h?.height || 200) - 675) / 2 + 538.9036
                                        ),
                                        pixelHeight: 1560,
                                        pixelWidth: 3019,
                                        sizes: `215px`,
                                        src: `https://framerusercontent.com/images/Bzf93vNozH4pEKmD9JFU5hkPUws.png?width=3019&height=1560`,
                                        srcSet: `https://framerusercontent.com/images/Bzf93vNozH4pEKmD9JFU5hkPUws.png?scale-down-to=512&width=3019&height=1560 512w,https://framerusercontent.com/images/Bzf93vNozH4pEKmD9JFU5hkPUws.png?scale-down-to=1024&width=3019&height=1560 1024w,https://framerusercontent.com/images/Bzf93vNozH4pEKmD9JFU5hkPUws.png?scale-down-to=2048&width=3019&height=1560 2048w,https://framerusercontent.com/images/Bzf93vNozH4pEKmD9JFU5hkPUws.png?width=3019&height=1560 3019w`,
                                      },
                                      className: `framer-1lyxi46`,
                                      "data-border": !0,
                                      "data-framer-name": `image 107`,
                                      layoutDependency: j,
                                      layoutId: `UX_x0JS95`,
                                      style: {
                                        "--border-bottom-width": `0.6000000238418579px`,
                                        "--border-color": `rgba(0, 0, 0, 0.2)`,
                                        "--border-left-width": `0.6000000238418579px`,
                                        "--border-right-width": `0.6000000238418579px`,
                                        "--border-style": `solid`,
                                        "--border-top-width": `0.6000000238418579px`,
                                        borderBottomLeftRadius: 3,
                                        borderBottomRightRadius: 3,
                                        borderTopLeftRadius: 3,
                                        borderTopRightRadius: 3,
                                      },
                                      ...G(
                                        {
                                          TlP5nojka: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              loading: y(
                                                (h?.y || 0) +
                                                  ((h?.height || 200) - 356) / 2 +
                                                  219.9036
                                              ),
                                              pixelHeight: 1560,
                                              pixelWidth: 3019,
                                              sizes: `215px`,
                                              src: `https://framerusercontent.com/images/Bzf93vNozH4pEKmD9JFU5hkPUws.png?width=3019&height=1560`,
                                              srcSet: `https://framerusercontent.com/images/Bzf93vNozH4pEKmD9JFU5hkPUws.png?scale-down-to=512&width=3019&height=1560 512w,https://framerusercontent.com/images/Bzf93vNozH4pEKmD9JFU5hkPUws.png?scale-down-to=1024&width=3019&height=1560 1024w,https://framerusercontent.com/images/Bzf93vNozH4pEKmD9JFU5hkPUws.png?scale-down-to=2048&width=3019&height=1560 2048w,https://framerusercontent.com/images/Bzf93vNozH4pEKmD9JFU5hkPUws.png?width=3019&height=1560 3019w`,
                                            },
                                          },
                                          Y2CuTwOTT: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              loading: y(
                                                (h?.y || 0) +
                                                  ((h?.height || 200) - 2762.0161) / 2 +
                                                  1690.9084
                                              ),
                                              pixelHeight: 1560,
                                              pixelWidth: 3019,
                                              sizes: `215px`,
                                              src: `https://framerusercontent.com/images/Bzf93vNozH4pEKmD9JFU5hkPUws.png?width=3019&height=1560`,
                                              srcSet: `https://framerusercontent.com/images/Bzf93vNozH4pEKmD9JFU5hkPUws.png?scale-down-to=512&width=3019&height=1560 512w,https://framerusercontent.com/images/Bzf93vNozH4pEKmD9JFU5hkPUws.png?scale-down-to=1024&width=3019&height=1560 1024w,https://framerusercontent.com/images/Bzf93vNozH4pEKmD9JFU5hkPUws.png?scale-down-to=2048&width=3019&height=1560 2048w,https://framerusercontent.com/images/Bzf93vNozH4pEKmD9JFU5hkPUws.png?width=3019&height=1560 3019w`,
                                            },
                                          },
                                        },
                                        C,
                                        E
                                      ),
                                    }),
                                  ],
                                }),
                              B() &&
                                /*#__PURE__*/ l(f.div, {
                                  className: `framer-abz6bh`,
                                  "data-border": !0,
                                  "data-framer-name": `Container`,
                                  layoutDependency: j,
                                  layoutId: `unjTvwzSz`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `rgb(226, 230, 222)`,
                                    "--border-left-width": `1px`,
                                    "--border-right-width": `1px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `1px`,
                                    backgroundColor: `rgb(255, 255, 255)`,
                                    borderBottomLeftRadius: 6,
                                    borderBottomRightRadius: 6,
                                    borderTopLeftRadius: 6,
                                    borderTopRightRadius: 6,
                                  },
                                  children: /*#__PURE__*/ u(f.div, {
                                    className: `framer-l37heo`,
                                    "data-framer-name": `Frame 2147224003`,
                                    layoutDependency: j,
                                    layoutId: `cf9G7eDxK`,
                                    children: [
                                      /*#__PURE__*/ u(f.div, {
                                        className: `framer-ysrqrk`,
                                        "data-framer-name": `Container`,
                                        layoutDependency: j,
                                        layoutId: `YAhyvqo_B`,
                                        children: [
                                          /*#__PURE__*/ l(x, {
                                            className: `framer-5eili0`,
                                            "data-framer-name": `Container`,
                                            fill: `rgba(0,0,0,1)`,
                                            intrinsicHeight: 40,
                                            intrinsicWidth: 40,
                                            layoutDependency: j,
                                            layoutId: `Sm97f5sl6`,
                                            svg: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 5C0 2.23858 2.23858 0 5 0H35C37.7614 0 40 2.23858 40 5V35C40 37.7614 37.7614 40 35 40H5C2.23858 40 0 37.7614 0 35V5Z" fill="#E7F9B9"/>
<path d="M12.5 17.5001L20 11.6667L27.5 17.5001V26.6667C27.5 27.1088 27.3244 27.5327 27.0118 27.8453C26.6993 28.1578 26.2754 28.3334 25.8333 28.3334H14.1667C13.7246 28.3334 13.3007 28.1578 12.9882 27.8453C12.6756 27.5327 12.5 27.1088 12.5 26.6667V17.5001Z" stroke="#5A8B00" stroke-width="0.833333"/>
<path d="M17.5 28.3333V20H22.5V28.3333" stroke="#5A8B00" stroke-width="0.833333"/>
</svg>
`,
                                            withExternalLayout: !0,
                                          }),
                                          /*#__PURE__*/ l(f.div, {
                                            className: `framer-uxtmpx`,
                                            "data-border": !0,
                                            "data-framer-name": `Text`,
                                            layoutDependency: j,
                                            layoutId: `vhE6UInEN`,
                                            style: {
                                              "--border-bottom-width": `1px`,
                                              "--border-color": `rgba(13, 162, 231, 0.22)`,
                                              "--border-left-width": `1px`,
                                              "--border-right-width": `1px`,
                                              "--border-style": `solid`,
                                              "--border-top-width": `1px`,
                                              backgroundColor: `rgba(13, 162, 231, 0.1)`,
                                              borderBottomLeftRadius: 999,
                                              borderBottomRightRadius: 999,
                                              borderTopLeftRadius: 999,
                                              borderTopRightRadius: 999,
                                            },
                                            children: /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                U(`v26`, d) ??
                                                /*#__PURE__*/ l(a, {
                                                  children: /*#__PURE__*/ l(f.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                      "--framer-font-family": `"IBM Plex Mono"`,
                                                      "--framer-font-size": `9px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-letter-spacing": `0.45px`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(13, 162, 231))`,
                                                      "--framer-text-transform": `uppercase`,
                                                    },
                                                    children: `仓管`,
                                                  }),
                                                }),
                                              className: `framer-dnftj1`,
                                              "data-framer-name": `Warehouse`,
                                              fonts: [`GF;IBM Plex Mono-500`],
                                              layoutDependency: j,
                                              layoutId: `VYqeyXS3g`,
                                              style: {
                                                "--extracted-2gg91v": `normal`,
                                                "--extracted-r6o4lv": `rgb(13, 162, 231)`,
                                                "--framer-paragraph-spacing": `0px`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ l(f.div, {
                                        className: `framer-1kpff8s`,
                                        "data-framer-name": `Paragraph`,
                                        layoutDependency: j,
                                        layoutId: `pRDp8z_Lz`,
                                        children: /*#__PURE__*/ l(m, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            U(`v27`, d) ??
                                            /*#__PURE__*/ l(a, {
                                              children: /*#__PURE__*/ l(f.p, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                  "--framer-font-family": `"IBM Plex Sans"`,
                                                  "--framer-font-size": `15px`,
                                                  "--framer-font-style": `normal`,
                                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                  "--framer-font-weight": `600`,
                                                  "--framer-letter-spacing": `0px`,
                                                  "--framer-line-height": `18.75px`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(23, 26, 34))`,
                                                },
                                                children: `仓库运营`,
                                              }),
                                            }),
                                          className: `framer-bb7tg6`,
                                          "data-framer-name": `Warehouse Operations`,
                                          fonts: [`GF;IBM Plex Sans-600`],
                                          layoutDependency: j,
                                          layoutId: `gdhiUbUxg`,
                                          style: {
                                            "--extracted-2gg91v": `normal`,
                                            "--extracted-r6o4lv": `rgb(23, 26, 34)`,
                                            "--framer-paragraph-spacing": `0px`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      /*#__PURE__*/ l(f.div, {
                                        className: `framer-h5un67`,
                                        "data-framer-name": `Paragraph`,
                                        layoutDependency: j,
                                        layoutId: `mUpxZ235s`,
                                        children: /*#__PURE__*/ l(m, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            U(`v28`, d) ??
                                            /*#__PURE__*/ l(a, {
                                              children: /*#__PURE__*/ l(f.p, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                  "--framer-font-family": `"IBM Plex Sans"`,
                                                  "--framer-font-size": `13px`,
                                                  "--framer-font-style": `normal`,
                                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                  "--framer-font-weight": `400`,
                                                  "--framer-letter-spacing": `0px`,
                                                  "--framer-line-height": `21.45px`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(112, 119, 128))`,
                                                },
                                                children: `实时可视化管理收货、上架、拣货、包装和发运流程。`,
                                              }),
                                            }),
                                          className: `framer-k6da6l`,
                                          "data-framer-name": `Support receiving, putaway, picking, packing, and `,
                                          fonts: [`GF;IBM Plex Sans-regular`],
                                          layoutDependency: j,
                                          layoutId: `ASAvwJnzd`,
                                          style: {
                                            "--extracted-2gg91v": `normal`,
                                            "--extracted-r6o4lv": `rgb(112, 119, 128)`,
                                            "--framer-paragraph-spacing": `0px`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      /*#__PURE__*/ l(O, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: y(
                                            (h?.y || 0) + ((h?.height || 200) - 675) / 2 + 551.3041
                                          ),
                                          pixelHeight: 880,
                                          pixelWidth: 1917,
                                          sizes: `215px`,
                                          src: `https://framerusercontent.com/images/N48EBgJ4l3RmvRcfAQ7kj5Wkg.png?width=1917&height=880`,
                                          srcSet: `https://framerusercontent.com/images/N48EBgJ4l3RmvRcfAQ7kj5Wkg.png?scale-down-to=512&width=1917&height=880 512w,https://framerusercontent.com/images/N48EBgJ4l3RmvRcfAQ7kj5Wkg.png?scale-down-to=1024&width=1917&height=880 1024w,https://framerusercontent.com/images/N48EBgJ4l3RmvRcfAQ7kj5Wkg.png?width=1917&height=880 1917w`,
                                        },
                                        className: `framer-cysajf`,
                                        "data-border": !0,
                                        "data-framer-name": `image 101`,
                                        layoutDependency: j,
                                        layoutId: `kComjHvl0`,
                                        style: {
                                          "--border-bottom-width": `0.6000000238418579px`,
                                          "--border-color": `rgba(0, 0, 0, 0.2)`,
                                          "--border-left-width": `0.6000000238418579px`,
                                          "--border-right-width": `0.6000000238418579px`,
                                          "--border-style": `solid`,
                                          "--border-top-width": `0.6000000238418579px`,
                                          borderBottomLeftRadius: 3,
                                          borderBottomRightRadius: 3,
                                          borderTopLeftRadius: 3,
                                          borderTopRightRadius: 3,
                                        },
                                        ...G(
                                          {
                                            xC9qrdJpD: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                loading: y(
                                                  (h?.y || 0) +
                                                    ((h?.height || 200) - 356) / 2 +
                                                    232.3041
                                                ),
                                                pixelHeight: 880,
                                                pixelWidth: 1917,
                                                sizes: `215px`,
                                                src: `https://framerusercontent.com/images/N48EBgJ4l3RmvRcfAQ7kj5Wkg.png?width=1917&height=880`,
                                                srcSet: `https://framerusercontent.com/images/N48EBgJ4l3RmvRcfAQ7kj5Wkg.png?scale-down-to=512&width=1917&height=880 512w,https://framerusercontent.com/images/N48EBgJ4l3RmvRcfAQ7kj5Wkg.png?scale-down-to=1024&width=1917&height=880 1024w,https://framerusercontent.com/images/N48EBgJ4l3RmvRcfAQ7kj5Wkg.png?width=1917&height=880 1917w`,
                                              },
                                            },
                                            Y2CuTwOTT: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                loading: y(
                                                  (h?.y || 0) +
                                                    ((h?.height || 200) - 2762.0161) / 2 +
                                                    2018.3089
                                                ),
                                                pixelHeight: 880,
                                                pixelWidth: 1917,
                                                sizes: `215px`,
                                                src: `https://framerusercontent.com/images/N48EBgJ4l3RmvRcfAQ7kj5Wkg.png?width=1917&height=880`,
                                                srcSet: `https://framerusercontent.com/images/N48EBgJ4l3RmvRcfAQ7kj5Wkg.png?scale-down-to=512&width=1917&height=880 512w,https://framerusercontent.com/images/N48EBgJ4l3RmvRcfAQ7kj5Wkg.png?scale-down-to=1024&width=1917&height=880 1024w,https://framerusercontent.com/images/N48EBgJ4l3RmvRcfAQ7kj5Wkg.png?width=1917&height=880 1917w`,
                                              },
                                            },
                                          },
                                          C,
                                          E
                                        ),
                                      }),
                                    ],
                                  }),
                                }),
                              B() &&
                                /*#__PURE__*/ u(f.div, {
                                  className: `framer-1yeyzoo`,
                                  "data-border": !0,
                                  "data-framer-name": `Container`,
                                  layoutDependency: j,
                                  layoutId: `sL0BjuItI`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `rgb(226, 230, 222)`,
                                    "--border-left-width": `1px`,
                                    "--border-right-width": `1px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `1px`,
                                    backgroundColor: `rgb(255, 255, 255)`,
                                    borderBottomLeftRadius: 6,
                                    borderBottomRightRadius: 6,
                                    borderTopLeftRadius: 6,
                                    borderTopRightRadius: 6,
                                  },
                                  children: [
                                    /*#__PURE__*/ u(f.div, {
                                      className: `framer-1lyk46b`,
                                      "data-framer-name": `Frame 2147224002`,
                                      layoutDependency: j,
                                      layoutId: `JsOEJxPf9`,
                                      children: [
                                        /*#__PURE__*/ u(f.div, {
                                          className: `framer-1mgz2wv`,
                                          "data-framer-name": `Container`,
                                          layoutDependency: j,
                                          layoutId: `seUMczM4a`,
                                          children: [
                                            /*#__PURE__*/ l(x, {
                                              className: `framer-1rydl25`,
                                              "data-framer-name": `Container`,
                                              fill: `rgba(0,0,0,1)`,
                                              intrinsicHeight: 40,
                                              intrinsicWidth: 40,
                                              layoutDependency: j,
                                              layoutId: `EFKoUZ5mO`,
                                              svg: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 5C0 2.23858 2.23858 0 5 0H35C37.7614 0 40 2.23858 40 5V35C40 37.7614 37.7614 40 35 40H5C2.23858 40 0 37.7614 0 35V5Z" fill="#E7F9B9"/>
<path d="M27.5 16.6667C27.4997 16.3745 27.4225 16.0874 27.2763 15.8344C27.13 15.5813 26.9198 15.3712 26.6667 15.2251L20.8333 11.8917C20.58 11.7455 20.2926 11.6685 20 11.6685C19.7074 11.6685 19.42 11.7455 19.1667 11.8917L13.3333 15.2251C13.0802 15.3712 12.87 15.5813 12.7237 15.8344C12.5775 16.0874 12.5003 16.3745 12.5 16.6667V23.3334C12.5003 23.6257 12.5775 23.9127 12.7237 24.1658C12.87 24.4188 13.0802 24.6289 13.3333 24.7751L19.1667 28.1084C19.42 28.2547 19.7074 28.3317 20 28.3317C20.2926 28.3317 20.58 28.2547 20.8333 28.1084L26.6667 24.7751C26.9198 24.6289 27.13 24.4188 27.2763 24.1658C27.4225 23.9127 27.4997 23.6257 27.5 23.3334V16.6667Z" stroke="#5A8B00" stroke-width="0.833333"/>
<path d="M12.75 15.8333L20 19.9999L27.25 15.8333" stroke="#5A8B00" stroke-width="0.833333"/>
<path d="M20 28.3333V20" stroke="#5A8B00" stroke-width="0.833333"/>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(f.div, {
                                              className: `framer-afnrjz`,
                                              "data-border": !0,
                                              "data-framer-name": `Text`,
                                              layoutDependency: j,
                                              layoutId: `IQeEvQZVq`,
                                              style: {
                                                "--border-bottom-width": `1px`,
                                                "--border-color": `rgba(13, 162, 231, 0.22)`,
                                                "--border-left-width": `1px`,
                                                "--border-right-width": `1px`,
                                                "--border-style": `solid`,
                                                "--border-top-width": `1px`,
                                                backgroundColor: `rgba(13, 162, 231, 0.1)`,
                                                borderBottomLeftRadius: 999,
                                                borderBottomRightRadius: 999,
                                                borderTopLeftRadius: 999,
                                                borderTopRightRadius: 999,
                                              },
                                              children: /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  U(`v26`, d) ??
                                                  /*#__PURE__*/ l(a, {
                                                    children: /*#__PURE__*/ l(f.p, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                        "--framer-font-family": `"IBM Plex Mono"`,
                                                        "--framer-font-size": `9px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-letter-spacing": `0.45px`,
                                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(13, 162, 231))`,
                                                        "--framer-text-transform": `uppercase`,
                                                      },
                                                      children: `仓管`,
                                                    }),
                                                  }),
                                                className: `framer-iy5l2a`,
                                                "data-framer-name": `Warehouse`,
                                                fonts: [`GF;IBM Plex Mono-500`],
                                                layoutDependency: j,
                                                layoutId: `HJ6c6M_3k`,
                                                style: {
                                                  "--extracted-2gg91v": `normal`,
                                                  "--extracted-r6o4lv": `rgb(13, 162, 231)`,
                                                  "--framer-paragraph-spacing": `0px`,
                                                },
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(f.div, {
                                          className: `framer-7gda3b`,
                                          "data-framer-name": `Paragraph`,
                                          layoutDependency: j,
                                          layoutId: `o43VHwA3E`,
                                          children: /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              U(`v29`, d) ??
                                              /*#__PURE__*/ l(a, {
                                                children: /*#__PURE__*/ l(f.p, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                    "--framer-font-family": `"IBM Plex Sans"`,
                                                    "--framer-font-size": `15px`,
                                                    "--framer-font-style": `normal`,
                                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                    "--framer-font-weight": `600`,
                                                    "--framer-letter-spacing": `0px`,
                                                    "--framer-line-height": `18.75px`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(23, 26, 34))`,
                                                  },
                                                  children: `库存可视化`,
                                                }),
                                              }),
                                            className: `framer-r2ejav`,
                                            "data-framer-name": `Inventory Visibility`,
                                            fonts: [`GF;IBM Plex Sans-600`],
                                            layoutDependency: j,
                                            layoutId: `DiiXAIlah`,
                                            style: {
                                              "--extracted-2gg91v": `normal`,
                                              "--extracted-r6o4lv": `rgb(23, 26, 34)`,
                                              "--framer-paragraph-spacing": `0px`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ l(f.div, {
                                          className: `framer-1u08x1a`,
                                          "data-framer-name": `Paragraph`,
                                          layoutDependency: j,
                                          layoutId: `nPJxecqPL`,
                                          children: /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              U(`v30`, d) ??
                                              /*#__PURE__*/ l(a, {
                                                children: /*#__PURE__*/ l(f.p, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                    "--framer-font-family": `"IBM Plex Sans"`,
                                                    "--framer-font-size": `13px`,
                                                    "--framer-font-style": `normal`,
                                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                    "--framer-font-weight": `400`,
                                                    "--framer-letter-spacing": `0px`,
                                                    "--framer-line-height": `21.45px`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(112, 119, 128))`,
                                                  },
                                                  children: `实时监控库存量，库存位置和存货移动。`,
                                                }),
                                              }),
                                            className: `framer-ktzldi`,
                                            "data-framer-name": `Monitor stock levels, locations and inventory move`,
                                            fonts: [`GF;IBM Plex Sans-regular`],
                                            layoutDependency: j,
                                            layoutId: `EQVHrup8h`,
                                            style: {
                                              "--extracted-2gg91v": `normal`,
                                              "--extracted-r6o4lv": `rgb(112, 119, 128)`,
                                              "--framer-paragraph-spacing": `0px`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ l(O, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: y(
                                          (h?.y || 0) + ((h?.height || 200) - 675) / 2 + 529
                                        ),
                                        pixelHeight: 1782,
                                        pixelWidth: 3406,
                                        sizes: `215px`,
                                        src: `https://framerusercontent.com/images/8k27s4KLG8jnYzMrsQmLYJ0DIWI.png?width=3406&height=1782`,
                                        srcSet: `https://framerusercontent.com/images/8k27s4KLG8jnYzMrsQmLYJ0DIWI.png?scale-down-to=512&width=3406&height=1782 512w,https://framerusercontent.com/images/8k27s4KLG8jnYzMrsQmLYJ0DIWI.png?scale-down-to=1024&width=3406&height=1782 1024w,https://framerusercontent.com/images/8k27s4KLG8jnYzMrsQmLYJ0DIWI.png?scale-down-to=2048&width=3406&height=1782 2048w,https://framerusercontent.com/images/8k27s4KLG8jnYzMrsQmLYJ0DIWI.png?width=3406&height=1782 3406w`,
                                      },
                                      className: `framer-12vbyyn`,
                                      "data-border": !0,
                                      "data-framer-name": `image 111`,
                                      layoutDependency: j,
                                      layoutId: `nRbmX6wf5`,
                                      style: {
                                        "--border-bottom-width": `0.6000000238418579px`,
                                        "--border-color": `rgba(0, 0, 0, 0.2)`,
                                        "--border-left-width": `0.6000000238418579px`,
                                        "--border-right-width": `0.6000000238418579px`,
                                        "--border-style": `solid`,
                                        "--border-top-width": `0.6000000238418579px`,
                                      },
                                      ...G(
                                        {
                                          xC9qrdJpD: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              loading: y(
                                                (h?.y || 0) + ((h?.height || 200) - 356) / 2 + 210
                                              ),
                                              pixelHeight: 1782,
                                              pixelWidth: 3406,
                                              sizes: `215px`,
                                              src: `https://framerusercontent.com/images/8k27s4KLG8jnYzMrsQmLYJ0DIWI.png?width=3406&height=1782`,
                                              srcSet: `https://framerusercontent.com/images/8k27s4KLG8jnYzMrsQmLYJ0DIWI.png?scale-down-to=512&width=3406&height=1782 512w,https://framerusercontent.com/images/8k27s4KLG8jnYzMrsQmLYJ0DIWI.png?scale-down-to=1024&width=3406&height=1782 1024w,https://framerusercontent.com/images/8k27s4KLG8jnYzMrsQmLYJ0DIWI.png?scale-down-to=2048&width=3406&height=1782 2048w,https://framerusercontent.com/images/8k27s4KLG8jnYzMrsQmLYJ0DIWI.png?width=3406&height=1782 3406w`,
                                            },
                                          },
                                          Y2CuTwOTT: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              loading: y(
                                                (h?.y || 0) +
                                                  ((h?.height || 200) - 2762.0161) / 2 +
                                                  2311.0048
                                              ),
                                              pixelHeight: 1782,
                                              pixelWidth: 3406,
                                              sizes: `215px`,
                                              src: `https://framerusercontent.com/images/8k27s4KLG8jnYzMrsQmLYJ0DIWI.png?width=3406&height=1782`,
                                              srcSet: `https://framerusercontent.com/images/8k27s4KLG8jnYzMrsQmLYJ0DIWI.png?scale-down-to=512&width=3406&height=1782 512w,https://framerusercontent.com/images/8k27s4KLG8jnYzMrsQmLYJ0DIWI.png?scale-down-to=1024&width=3406&height=1782 1024w,https://framerusercontent.com/images/8k27s4KLG8jnYzMrsQmLYJ0DIWI.png?scale-down-to=2048&width=3406&height=1782 2048w,https://framerusercontent.com/images/8k27s4KLG8jnYzMrsQmLYJ0DIWI.png?width=3406&height=1782 3406w`,
                                            },
                                          },
                                        },
                                        C,
                                        E
                                      ),
                                    }),
                                  ],
                                }),
                              he() &&
                                /*#__PURE__*/ u(f.div, {
                                  className: `framer-hyxd2v`,
                                  "data-border": !0,
                                  "data-framer-name": `Container`,
                                  layoutDependency: j,
                                  layoutId: `lyuyh3XHH`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `rgb(226, 230, 222)`,
                                    "--border-left-width": `1px`,
                                    "--border-right-width": `1px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `1px`,
                                    backgroundColor: `rgb(255, 255, 255)`,
                                    borderBottomLeftRadius: 6,
                                    borderBottomRightRadius: 6,
                                    borderTopLeftRadius: 6,
                                    borderTopRightRadius: 6,
                                  },
                                  children: [
                                    /*#__PURE__*/ u(f.div, {
                                      className: `framer-bqva96`,
                                      "data-framer-name": `Frame 2147224007`,
                                      layoutDependency: j,
                                      layoutId: `L_rkLe66Z`,
                                      children: [
                                        /*#__PURE__*/ u(f.div, {
                                          className: `framer-xnj54s`,
                                          "data-framer-name": `Container`,
                                          layoutDependency: j,
                                          layoutId: `wC71AG0sV`,
                                          children: [
                                            /*#__PURE__*/ l(x, {
                                              className: `framer-103hn7a`,
                                              "data-framer-name": `Container`,
                                              fill: `rgba(0,0,0,1)`,
                                              intrinsicHeight: 40,
                                              intrinsicWidth: 40,
                                              layoutDependency: j,
                                              layoutId: `ljmZTF8yw`,
                                              svg: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 5C0 2.23858 2.23858 0 5 0H35C37.7614 0 40 2.23858 40 5V35C40 37.7614 37.7614 40 35 40H5C2.23858 40 0 37.7614 0 35V5Z" fill="#E7F9B9"/>
<path d="M22.2511 15.2499C22.0984 15.4057 22.0129 15.6151 22.0129 15.8333C22.0129 16.0514 22.0984 16.2608 22.2511 16.4166L23.5844 17.7499C23.7402 17.9026 23.9496 17.9882 24.1678 17.9882C24.3859 17.9882 24.5953 17.9026 24.7511 17.7499L27.8928 14.6083C28.3118 15.5343 28.4387 16.566 28.2565 17.5659C28.0743 18.5658 27.5917 19.4865 26.873 20.2052C26.1543 20.9239 25.2336 21.4065 24.2337 21.5887C23.2338 21.7708 22.2021 21.644 21.2761 21.2249L15.5178 26.9833C15.1862 27.3148 14.7366 27.501 14.2678 27.501C13.7989 27.501 13.3493 27.3148 13.0178 26.9833C12.6862 26.6518 12.5 26.2021 12.5 25.7333C12.5 25.2644 12.6862 24.8148 13.0178 24.4833L18.7761 18.7249C18.3571 17.799 18.2302 16.7672 18.4124 15.7673C18.5946 14.7674 19.0772 13.8467 19.7959 13.128C20.5146 12.4093 21.4352 11.9267 22.4351 11.7446C23.4351 11.5624 24.4668 11.6892 25.3928 12.1083L22.2594 15.2416L22.2511 15.2499Z" stroke="#5A8B00" stroke-width="0.833333"/>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(f.div, {
                                              className: `framer-jyo072`,
                                              "data-border": !0,
                                              "data-framer-name": `Text`,
                                              layoutDependency: j,
                                              layoutId: `GLEgkeJQd`,
                                              style: {
                                                "--border-bottom-width": `1px`,
                                                "--border-color": `rgba(139, 92, 246, 0.22)`,
                                                "--border-left-width": `1px`,
                                                "--border-right-width": `1px`,
                                                "--border-style": `solid`,
                                                "--border-top-width": `1px`,
                                                backgroundColor: `rgba(139, 92, 246, 0.12)`,
                                                borderBottomLeftRadius: 999,
                                                borderBottomRightRadius: 999,
                                                borderTopLeftRadius: 999,
                                                borderTopRightRadius: 999,
                                              },
                                              children: /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  U(`v31`, d) ??
                                                  /*#__PURE__*/ l(a, {
                                                    children: /*#__PURE__*/ l(f.p, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                        "--framer-font-family": `"IBM Plex Mono"`,
                                                        "--framer-font-size": `9px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-letter-spacing": `0.45px`,
                                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(124, 58, 237))`,
                                                        "--framer-text-transform": `uppercase`,
                                                      },
                                                      children: `维护`,
                                                    }),
                                                  }),
                                                className: `framer-112n33p`,
                                                "data-framer-name": `Maintenance`,
                                                fonts: [`GF;IBM Plex Mono-500`],
                                                layoutDependency: j,
                                                layoutId: `OGpSiWv02`,
                                                style: {
                                                  "--extracted-2gg91v": `normal`,
                                                  "--extracted-r6o4lv": `rgb(124, 58, 237)`,
                                                  "--framer-paragraph-spacing": `0px`,
                                                },
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(f.div, {
                                          className: `framer-1t67hp7`,
                                          "data-framer-name": `Paragraph`,
                                          layoutDependency: j,
                                          layoutId: `yfeiyr08P`,
                                          children: /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              U(`v32`, d) ??
                                              /*#__PURE__*/ l(a, {
                                                children: /*#__PURE__*/ l(f.p, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                    "--framer-font-family": `"IBM Plex Sans"`,
                                                    "--framer-font-size": `15px`,
                                                    "--framer-font-style": `normal`,
                                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                    "--framer-font-weight": `600`,
                                                    "--framer-letter-spacing": `0px`,
                                                    "--framer-line-height": `18.75px`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(23, 26, 34))`,
                                                  },
                                                  children: `维护请求`,
                                                }),
                                              }),
                                            className: `framer-17d7ruo`,
                                            "data-framer-name": `Maintenance Request`,
                                            fonts: [`GF;IBM Plex Sans-600`],
                                            layoutDependency: j,
                                            layoutId: `mEddimH88`,
                                            style: {
                                              "--extracted-2gg91v": `normal`,
                                              "--extracted-r6o4lv": `rgb(23, 26, 34)`,
                                              "--framer-paragraph-spacing": `0px`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ l(f.div, {
                                          className: `framer-nyowat`,
                                          "data-framer-name": `Paragraph`,
                                          layoutDependency: j,
                                          layoutId: `FWjWXzBhF`,
                                          children: /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              U(`v33`, d) ??
                                              /*#__PURE__*/ l(a, {
                                                children: /*#__PURE__*/ l(f.p, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                    "--framer-font-family": `"IBM Plex Sans"`,
                                                    "--framer-font-size": `13px`,
                                                    "--framer-font-style": `normal`,
                                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                    "--framer-font-weight": `400`,
                                                    "--framer-letter-spacing": `0px`,
                                                    "--framer-line-height": `21.45px`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(112, 119, 128))`,
                                                  },
                                                  children: `操作员提交问题，维护团队通过可追踪的流程进行响应。`,
                                                }),
                                              }),
                                            className: `framer-1megp8d`,
                                            "data-framer-name": `Let operators submit issues and maintenance teams `,
                                            fonts: [`GF;IBM Plex Sans-regular`],
                                            layoutDependency: j,
                                            layoutId: `D8G2CkVre`,
                                            style: {
                                              "--extracted-2gg91v": `normal`,
                                              "--extracted-r6o4lv": `rgb(112, 119, 128)`,
                                              "--framer-paragraph-spacing": `0px`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ l(O, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: y(
                                          (h?.y || 0) + ((h?.height || 200) - 675) / 2 + 543
                                        ),
                                        pixelHeight: 907,
                                        pixelWidth: 1733,
                                        sizes: `215px`,
                                        src: `https://framerusercontent.com/images/TKCjQ6Le1iYvd4x5QbSyB65v27w.png?width=1733&height=907`,
                                        srcSet: `https://framerusercontent.com/images/TKCjQ6Le1iYvd4x5QbSyB65v27w.png?scale-down-to=512&width=1733&height=907 512w,https://framerusercontent.com/images/TKCjQ6Le1iYvd4x5QbSyB65v27w.png?scale-down-to=1024&width=1733&height=907 1024w,https://framerusercontent.com/images/TKCjQ6Le1iYvd4x5QbSyB65v27w.png?width=1733&height=907 1733w`,
                                      },
                                      className: `framer-11lf2q3`,
                                      "data-border": !0,
                                      "data-framer-name": `image 115`,
                                      layoutDependency: j,
                                      layoutId: `hLLIgeMEj`,
                                      style: {
                                        "--border-bottom-width": `0.6000000238418579px`,
                                        "--border-color": `rgba(0, 0, 0, 0.2)`,
                                        "--border-left-width": `0.6000000238418579px`,
                                        "--border-right-width": `0.6000000238418579px`,
                                        "--border-style": `solid`,
                                        "--border-top-width": `0.6000000238418579px`,
                                        borderBottomLeftRadius: 3,
                                        borderBottomRightRadius: 3,
                                        borderTopLeftRadius: 3,
                                        borderTopRightRadius: 3,
                                      },
                                      ...G(
                                        {
                                          D8Nfa3EOV: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              loading: y(
                                                (h?.y || 0) + ((h?.height || 200) - 356) / 2 + 224
                                              ),
                                              pixelHeight: 907,
                                              pixelWidth: 1733,
                                              sizes: `215px`,
                                              src: `https://framerusercontent.com/images/TKCjQ6Le1iYvd4x5QbSyB65v27w.png?width=1733&height=907`,
                                              srcSet: `https://framerusercontent.com/images/TKCjQ6Le1iYvd4x5QbSyB65v27w.png?scale-down-to=512&width=1733&height=907 512w,https://framerusercontent.com/images/TKCjQ6Le1iYvd4x5QbSyB65v27w.png?scale-down-to=1024&width=1733&height=907 1024w,https://framerusercontent.com/images/TKCjQ6Le1iYvd4x5QbSyB65v27w.png?width=1733&height=907 1733w`,
                                            },
                                          },
                                          Y2CuTwOTT: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              loading: y(
                                                (h?.y || 0) +
                                                  ((h?.height || 200) - 2762.0161) / 2 +
                                                  2631.4916
                                              ),
                                              pixelHeight: 907,
                                              pixelWidth: 1733,
                                              sizes: `215px`,
                                              src: `https://framerusercontent.com/images/TKCjQ6Le1iYvd4x5QbSyB65v27w.png?width=1733&height=907`,
                                              srcSet: `https://framerusercontent.com/images/TKCjQ6Le1iYvd4x5QbSyB65v27w.png?scale-down-to=512&width=1733&height=907 512w,https://framerusercontent.com/images/TKCjQ6Le1iYvd4x5QbSyB65v27w.png?scale-down-to=1024&width=1733&height=907 1024w,https://framerusercontent.com/images/TKCjQ6Le1iYvd4x5QbSyB65v27w.png?width=1733&height=907 1733w`,
                                            },
                                          },
                                        },
                                        C,
                                        E
                                      ),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-a1yCg.framer-jtw8dh, .framer-a1yCg .framer-jtw8dh { display: block; }`,
          `.framer-a1yCg.framer-15ths8p { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-a1yCg .framer-qt36wx { flex: none; gap: 0px; height: 31px; overflow: visible; position: relative; width: 1120px; }`,
          `.framer-a1yCg .framer-dh2nwj { flex: none; gap: 0px; height: 31px; left: 270px; overflow: visible; position: absolute; top: 0px; width: 52px; }`,
          `.framer-a1yCg .framer-9g1heu { flex: none; height: auto; left: 18px; position: absolute; top: 7px; white-space: pre; width: auto; }`,
          `.framer-a1yCg .framer-1la2me6 { cursor: pointer; flex: none; gap: 0px; height: 31px; left: 330px; overflow: visible; position: absolute; top: 0px; width: 102px; }`,
          `.framer-a1yCg .framer-1p01jbc { flex: none; height: auto; left: 48%; position: absolute; top: 48%; white-space: pre; width: auto; }`,
          `.framer-a1yCg .framer-ywfcmx { cursor: pointer; flex: none; gap: 0px; height: 31px; left: calc(42.67857142857145% - 79px / 2); overflow: visible; position: absolute; top: calc(48.38709677419357% - 31px / 2); width: 79px; }`,
          `.framer-a1yCg .framer-1o85xq8, .framer-a1yCg .framer-wfqj48 { flex: none; height: auto; left: 49%; position: absolute; top: 48%; white-space: pre; width: auto; }`,
          `.framer-a1yCg .framer-15jumhl { cursor: pointer; flex: none; gap: 0px; height: 31px; left: 526px; overflow: visible; position: absolute; top: 0px; width: 113px; }`,
          `.framer-a1yCg .framer-2fmpg2, .framer-a1yCg .framer-dg0msk { flex: none; height: auto; left: 50%; position: absolute; top: 48%; white-space: pre; width: auto; }`,
          `.framer-a1yCg .framer-1m3tete { cursor: pointer; flex: none; gap: 0px; height: 31px; left: 646px; overflow: visible; position: absolute; top: 0px; width: 103px; }`,
          `.framer-a1yCg .framer-q1vysm { cursor: pointer; flex: none; gap: 0px; height: 31px; left: 757px; overflow: visible; position: absolute; top: 0px; width: 93px; }`,
          `.framer-a1yCg .framer-12jh27u { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-a1yCg .framer-1ge2o1n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 299px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-a1yCg .framer-bl77g3, .framer-a1yCg .framer-8tjryq, .framer-a1yCg .framer-rjs9rs, .framer-a1yCg .framer-abz6bh, .framer-a1yCg .framer-1yeyzoo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; overflow: visible; padding: 25px; position: relative; width: 265px; }`,
          `.framer-a1yCg .framer-1mxohcx, .framer-a1yCg .framer-1wu0dk7, .framer-a1yCg .framer-srm50j, .framer-a1yCg .framer-nc4121 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 11px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-a1yCg .framer-1usf8y0, .framer-a1yCg .framer-2mr5cy, .framer-a1yCg .framer-og2l6d, .framer-a1yCg .framer-1e29idn, .framer-a1yCg .framer-f04jnd, .framer-a1yCg .framer-ysrqrk, .framer-a1yCg .framer-1mgz2wv, .framer-a1yCg .framer-xnj54s { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 40px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-a1yCg .framer-f9b5wa, .framer-a1yCg .framer-1pcqfat, .framer-a1yCg .framer-b0kn6d, .framer-a1yCg .framer-15aq479, .framer-a1yCg .framer-1pjbiaw, .framer-a1yCg .framer-5eili0, .framer-a1yCg .framer-1rydl25, .framer-a1yCg .framer-103hn7a { flex: none; height: 40px; position: relative; width: 40px; }`,
          `.framer-a1yCg .framer-16d378m, .framer-a1yCg .framer-ovkpmo, .framer-a1yCg .framer-irbic5, .framer-a1yCg .framer-1euynyj, .framer-a1yCg .framer-1po6nni, .framer-a1yCg .framer-uxtmpx, .framer-a1yCg .framer-afnrjz, .framer-a1yCg .framer-jyo072 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 19px; justify-content: flex-start; overflow: visible; padding: 0px 9px 0px 9px; position: relative; width: min-content; }`,
          `.framer-a1yCg .framer-1mbjtxs, .framer-a1yCg .framer-nmgdnm, .framer-a1yCg .framer-16bcitu, .framer-a1yCg .framer-4trt17, .framer-a1yCg .framer-ivtrrh, .framer-a1yCg .framer-1o5vfq4, .framer-a1yCg .framer-11fnr53, .framer-a1yCg .framer-dnftj1, .framer-a1yCg .framer-iy5l2a, .framer-a1yCg .framer-112n33p { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-a1yCg .framer-nhot6y, .framer-a1yCg .framer-p5hv00, .framer-a1yCg .framer-1xf0s4m, .framer-a1yCg .framer-1kpff8s, .framer-a1yCg .framer-7gda3b, .framer-a1yCg .framer-1t67hp7 { flex: none; gap: 0px; height: 19px; overflow: visible; position: relative; width: 100%; }`,
          `.framer-a1yCg .framer-usuo1j, .framer-a1yCg .framer-so8a9y, .framer-a1yCg .framer-1qjbbqf, .framer-a1yCg .framer-bb7tg6, .framer-a1yCg .framer-r2ejav, .framer-a1yCg .framer-17d7ruo { flex: none; height: auto; left: 0px; position: absolute; top: 0px; white-space: pre; width: auto; }`,
          `.framer-a1yCg .framer-ztkxly, .framer-a1yCg .framer-1kd2s14, .framer-a1yCg .framer-1oa7i0n, .framer-a1yCg .framer-pjk711 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-a1yCg .framer-718t5h, .framer-a1yCg .framer-a97rqs, .framer-a1yCg .framer-1fklfqh, .framer-a1yCg .framer-7ladui { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 215px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-a1yCg .framer-1ozgdbt { aspect-ratio: 1.9250317423310344 / 1; flex: none; height: auto; position: relative; width: 215px; }`,
          `.framer-a1yCg .framer-jbniy1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; overflow: visible; padding: 21px 22px 21px 22px; position: relative; width: 265px; }`,
          `.framer-a1yCg .framer-1dxa7pb, .framer-a1yCg .framer-1lflka2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-a1yCg .framer-3fch3e { aspect-ratio: 1.7728552708036138 / 1; flex: none; height: auto; position: relative; width: 214px; }`,
          `.framer-a1yCg .framer-125pqz2 { aspect-ratio: 1.8886303441028556 / 1; flex: none; height: auto; position: relative; width: 215px; }`,
          `.framer-a1yCg .framer-103n3jt { aspect-ratio: 2.2226107912777655 / 1; flex: none; height: auto; position: relative; width: 215px; }`,
          `.framer-a1yCg .framer-1rsd25g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 305px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-a1yCg .framer-1p0xvs0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 11px; height: 100%; justify-content: flex-start; overflow: visible; padding: 25px; position: relative; width: 265px; }`,
          `.framer-a1yCg .framer-mrg6ve, .framer-a1yCg .framer-h5un67, .framer-a1yCg .framer-1u08x1a, .framer-a1yCg .framer-nyowat { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-a1yCg .framer-cpqnp7, .framer-a1yCg .framer-k6da6l, .framer-a1yCg .framer-1megp8d { flex: none; height: 100%; position: relative; white-space: pre-wrap; width: 215px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-a1yCg .framer-1lyxi46 { aspect-ratio: 1.9352564061183826 / 1; flex: none; height: auto; position: relative; width: 215px; }`,
          `.framer-a1yCg .framer-l37heo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 11px; height: 255px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-a1yCg .framer-cysajf { aspect-ratio: 2.178409132898164 / 1; flex: none; height: auto; position: relative; width: 215px; }`,
          `.framer-a1yCg .framer-1lyk46b { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 11px; height: 124px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-a1yCg .framer-ktzldi { flex: 1 0 0px; height: 100%; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-a1yCg .framer-12vbyyn { aspect-ratio: 1.9113356142363727 / 1; flex: none; height: auto; position: relative; width: 215px; }`,
          `.framer-a1yCg .framer-hyxd2v { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; overflow: visible; padding: 18px 25px 18px 25px; position: relative; width: 265px; }`,
          `.framer-a1yCg .framer-bqva96 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 11px; height: 145px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-a1yCg .framer-11lf2q3 { aspect-ratio: 1.9106946497528547 / 1; flex: none; height: auto; position: relative; width: 215px; }`,
          `.framer-a1yCg.framer-v-azt0b4 .framer-dh2nwj, .framer-a1yCg.framer-v-1yh7r6p .framer-dh2nwj, .framer-a1yCg.framer-v-1wd7j4e .framer-dh2nwj, .framer-a1yCg.framer-v-r4q9mq .framer-dh2nwj { cursor: pointer; }`,
          `.framer-a1yCg.framer-v-1rv1azs.framer-15ths8p { width: min-content; }`,
          `.framer-a1yCg.framer-v-1rv1azs .framer-12jh27u { gap: 10px; }`,
          `.framer-a1yCg.framer-v-1rv1azs .framer-1ge2o1n, .framer-a1yCg.framer-v-1rv1azs .framer-1rsd25g { flex-direction: column; height: min-content; }`,
          `.framer-a1yCg.framer-v-1rv1azs .framer-bl77g3 { height: min-content; width: min-content; }`,
          `.framer-a1yCg.framer-v-1rv1azs .framer-1mxohcx { width: 215px; }`,
          `.framer-a1yCg.framer-v-1rv1azs .framer-jbniy1, .framer-a1yCg.framer-v-1rv1azs .framer-8tjryq, .framer-a1yCg.framer-v-1rv1azs .framer-rjs9rs, .framer-a1yCg.framer-v-1rv1azs .framer-1p0xvs0, .framer-a1yCg.framer-v-1rv1azs .framer-abz6bh, .framer-a1yCg.framer-v-1rv1azs .framer-1yeyzoo, .framer-a1yCg.framer-v-1rv1azs .framer-hyxd2v { height: min-content; }`,
          `.framer-a1yCg.framer-v-1rv1azs .framer-mrg6ve { flex: none; height: min-content; }`,
          `.framer-a1yCg.framer-v-1rv1azs .framer-cpqnp7 { height: auto; }`,
          `.framer-a1yCg[data-border="true"]::after, .framer-a1yCg [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-a1yCg`
      )),
      (q.displayName = `app library`),
      (q.defaultProps = { height: 675, width: 1200 }),
      b(q, {
        variant: {
          options: [
            `aII55fMch`,
            `wOqe_0XdI`,
            `Qs2N7zWIt`,
            `D8Nfa3EOV`,
            `xC9qrdJpD`,
            `TlP5nojka`,
            `Y2CuTwOTT`,
          ],
          optionTitles: [
            `Variant 1`,
            `Variant 2`,
            `Variant 3`,
            `Variant 4`,
            `Variant 5`,
            `Variant 6`,
            `phone`,
          ],
          title: `Variant`,
          type: P.Enum,
        },
      }),
      k(
        q,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `IBM Plex Sans`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `IBM Plex Sans`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `IBM Plex Mono`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `IBM Plex Mono`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `IBM Plex Sans`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `IBM Plex Sans`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `IBM Plex Sans`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `IBM Plex Sans`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function J(e, t) {
  for (; t; ) {
    let n = He[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function Be(e) {
  let t = [];
  for (; e; ) {
    let n = He[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function Ve(e) {
  let t = Be(e);
  if (t) throw t;
}
var He;
function Ue() {
  return (Ue = e(() => {
    (w(), (He = { AYmst8Nt3: new F(() => import("./DGsQOiGKT-0.DCosndGs.mjs?v=20261116-migration-v2")) }));
  }))();
}
var We,
  Y,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  X,
  rt,
  Z,
  Q,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  $,
  ft;
function pt() {
  return (pt = e(() => {
    (s(),
      w(),
      p(),
      r(),
      le(),
      he(),
      ze(),
      ue(),
      we(),
      de(),
      fe(),
      _e(),
      ve(),
      Ue(),
      Te(),
      (We = E(z)),
      (Y = v(f.div)),
      (Ge = E(q)),
      (Ke = E(H)),
      (qe = E(V)),
      (Je = E(L)),
      (Ye = re(f.div)),
      (Xe = E(R)),
      (Ze = { KN8eyELHt: `(min-width: 1440px)`, qktqcbsmC: `(max-width: 1439.98px)` }),
      (Qe = () => typeof document < `u`),
      ($e = []),
      (et = `framer-ao9Ki`),
      (tt = { KN8eyELHt: `framer-v-19f75n7`, qktqcbsmC: `framer-v-1e5g3cn` }),
      (nt = (e, t, n) => (e && t ? `position` : n)),
      (X = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (rt = {
        effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 10 },
        repeat: !1,
        startDelay: 0,
        tokenization: `word`,
        transition: { bounce: 0, delay: 0.075, duration: 0.4, type: `spring` },
        trigger: `onMount`,
        type: `appear`,
      }),
      (Z = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 15,
      }),
      (Q = { damping: 70, delay: 0, mass: 1, stiffness: 210, type: `spring` }),
      (it = (e, t) => `translateY(-50%) ${t}`),
      (at = {
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
      (ot = {
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
      (st = { Desktop: `KN8eyELHt`, Phone: `qktqcbsmC` }),
      (ct = ({ value: e }) =>
        T()
          ? null
          : /*#__PURE__*/ l(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (lt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: st[r.variant] ?? r.variant ?? `KN8eyELHt`,
      })),
      (ut = /*#__PURE__*/ c(function (e, r) {
        let s = o(null),
          c = r ?? s;
        t();
        let { activeLocale: p, contentLocale: g, setLocale: _ } = se(),
          v = ae(),
          { style: y, className: b, layoutId: ne, variant: C, ...w } = lt(e),
          re = n(() => Ee({}, g), [g]);
        te(re);
        let [T, E] = ie(C, Ze, !1),
          O = S(et, ge, B, Ce),
          oe = i(M)?.isLayoutTemplate,
          k = !!i(d)?.transition?.layout,
          j = nt(oe, k);
        Ve(p);
        let P = () => !Qe() || T === `qktqcbsmC`,
          F = () => !Qe() || T !== `qktqcbsmC`;
        return (
          A(),
          ce({}),
          /*#__PURE__*/ l(M.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: st,
              primaryVariantId: `KN8eyELHt`,
              variantClassNames: tt,
            },
            children: /*#__PURE__*/ u(ee, {
              id: ne ?? `DGsQOiGKT`,
              children: [
                /*#__PURE__*/ l(ct, {
                  value: `html body { background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ u(f.div, {
                  ...w,
                  className: S(O, `framer-19f75n7`, b),
                  ref: c,
                  style: { ...y },
                  children: [
                    /*#__PURE__*/ l(D, {
                      height: 64,
                      width: `100vw`,
                      y: 0,
                      children: /*#__PURE__*/ l(N, {
                        className: `framer-12rc70p-container`,
                        layout: j,
                        layoutScroll: !0,
                        nodeId: `nrPYq9OMW`,
                        scopeId: `DGsQOiGKT`,
                        children: /*#__PURE__*/ l(I, {
                          breakpoint: T,
                          overrides: { qktqcbsmC: { variant: X(`Svy4sINhA`) } },
                          children: /*#__PURE__*/ l(z, {
                            eVOFjxm0w: `var(--token-fcaa307f-078f-4ea1-af34-d51bb82ca05a, rgba(255, 255, 255, 0))`,
                            height: `100%`,
                            id: `nrPYq9OMW`,
                            jQcddTFoz: !0,
                            layoutId: `nrPYq9OMW`,
                            style: { width: `100%` },
                            variant: X(`LbFcBhD3w`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ u(f.div, {
                      className: `framer-1oxnn0a`,
                      "data-framer-name": `Frame 2147223890`,
                      layout: j,
                      children: [
                        /*#__PURE__*/ u(`div`, {
                          className: `framer-b745f0`,
                          "data-framer-name": `Section`,
                          children: [
                            /*#__PURE__*/ u(`div`, {
                              className: `framer-15mdzbs`,
                              "data-framer-name": `Container`,
                              children: [
                                /*#__PURE__*/ u(`div`, {
                                  className: `framer-1wqpkk7`,
                                  "data-framer-name": `Frame 2147223930`,
                                  children: [
                                    /*#__PURE__*/ l(`div`, {
                                      className: `framer-knecjn`,
                                      "data-border": !0,
                                      "data-framer-name": `Text`,
                                      children: /*#__PURE__*/ l(m, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          J(`v0`, g) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                "--framer-font-family": `"IBM Plex Mono"`,
                                                "--framer-font-size": `11px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `normal`,
                                                "--framer-font-weight": `400`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-text-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                                "--framer-text-transform": `uppercase`,
                                              },
                                              children: `平台能力`,
                                            }),
                                          }),
                                        className: `framer-1e6iuch`,
                                        "data-framer-name": `Platform Capability`,
                                        fonts: [`GF;IBM Plex Mono-regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    /*#__PURE__*/ l(m, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        J(`v1`, g) ??
                                        /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(`h1`, {
                                            className: `framer-styles-preset-11wgcit`,
                                            "data-styles-preset": `s3077KOp4`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `模版应用 `,
                                          }),
                                        }),
                                      className: `framer-1aj7rzz`,
                                      "data-framer-name": `Build the apps you need today — without creating d`,
                                      effect: rt,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ l(I, {
                                  breakpoint: T,
                                  overrides: {
                                    qktqcbsmC: {
                                      children:
                                        J(`v3`, g) ??
                                        /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                              "--framer-font-family": `"IBM Plex Sans"`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-style": `normal`,
                                              "--framer-font-variation-axes": `normal`,
                                              "--framer-font-weight": `400`,
                                              "--framer-letter-spacing": `0px`,
                                              "--framer-line-height": `18px`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(69, 76, 87)`,
                                            },
                                            children: `借助基于 UNS 架构构建的即用型应用，部署工业应用更快捷`,
                                          }),
                                        }),
                                    },
                                  },
                                  children: /*#__PURE__*/ l(m, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      J(`v2`, g) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                            "--framer-font-family": `"IBM Plex Sans"`,
                                            "--framer-font-size": `20px`,
                                            "--framer-font-style": `normal`,
                                            "--framer-font-variation-axes": `normal`,
                                            "--framer-font-weight": `400`,
                                            "--framer-letter-spacing": `0px`,
                                            "--framer-line-height": `32px`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `rgb(69, 76, 87)`,
                                          },
                                          children: `借助基于 UNS 架构构建的即用型应用，部署工业应用更快捷`,
                                        }),
                                      }),
                                    className: `framer-b1j73a`,
                                    "data-framer-name": `Most app generation tools solve one digital need b`,
                                    fonts: [`GF;IBM Plex Sans-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                /*#__PURE__*/ l(m, {
                                  __fromCanvasComponent: !0,
                                  children:
                                    J(`v4`, g) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(`p`, {
                                        className: `framer-styles-preset-1ful33y`,
                                        "data-styles-preset": `HNigw6pHS`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `Tier0 模版应用为常见场景提供了一组持续成长的工业应用。当标准功能已足够时，可直接部署并使用。当需求更具体时，可完善现有应用，而不是从头重建。`,
                                      }),
                                    }),
                                  className: `framer-16ieqkb`,
                                  "data-framer-name": `Most app generation tools solve one digital need b`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            /*#__PURE__*/ u(`div`, {
                              className: `framer-kjgcrg`,
                              "data-framer-name": `Container`,
                              children: [
                                /*#__PURE__*/ l(`div`, {
                                  className: `framer-yb5dks`,
                                  "data-framer-name": `Container`,
                                }),
                                /*#__PURE__*/ l(`div`, {
                                  className: `framer-18ehkmk`,
                                  "data-framer-name": `Text`,
                                  children: /*#__PURE__*/ l(m, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      J(`v5`, g) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                            "--framer-font-family": `"IBM Plex Mono"`,
                                            "--framer-font-size": `12px`,
                                            "--framer-font-style": `normal`,
                                            "--framer-font-variation-axes": `normal`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `0.48px`,
                                            "--framer-text-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                          },
                                          children: `开箱即用。易于适配。`,
                                        }),
                                      }),
                                    className: `framer-iitout`,
                                    "data-framer-name": `Ready to use. Easy to adapt.`,
                                    fonts: [`GF;IBM Plex Mono-500`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                /*#__PURE__*/ l(`div`, {
                                  className: `framer-43oz27`,
                                  "data-framer-name": `Container`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        /*#__PURE__*/ l(x, {
                          className: `framer-70ph0a`,
                          "data-framer-name": `Vector 4199`,
                          fill: `rgba(0,0,0,1)`,
                          intrinsicHeight: 3,
                          intrinsicWidth: 1282,
                          svg: `<svg width="1282" height="3" viewBox="-1 -1 1282 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.5H1280" stroke="black" stroke-opacity="0.2"/>
</svg>
`,
                          withExternalLayout: !0,
                        }),
                        /*#__PURE__*/ u(Y, {
                          __framer__animate: { transition: Q },
                          __framer__animateOnce: !0,
                          __framer__enter: Z,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-nwz1hy`,
                          "data-framer-name": `Section`,
                          children: [
                            /*#__PURE__*/ l(Y, {
                              __framer__animate: { transition: Q },
                              __framer__animateOnce: !0,
                              __framer__enter: Z,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-1ebgbvl`,
                              "data-framer-name": `Container`,
                              children: /*#__PURE__*/ u(`div`, {
                                className: `framer-xhpmzx`,
                                "data-framer-name": `Frame 2147223897`,
                                children: [
                                  /*#__PURE__*/ l(`div`, {
                                    className: `framer-1angvop`,
                                    "data-border": !0,
                                    "data-framer-name": `Text`,
                                    children: /*#__PURE__*/ l(m, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        J(`v6`, g) ??
                                        /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                              "--framer-font-family": `"IBM Plex Mono"`,
                                              "--framer-font-size": `10px`,
                                              "--framer-font-style": `normal`,
                                              "--framer-font-variation-axes": `normal`,
                                              "--framer-font-weight": `400`,
                                              "--framer-letter-spacing": `-0.2px`,
                                              "--framer-text-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                              "--framer-text-transform": `uppercase`,
                                            },
                                            children: `核心价值`,
                                          }),
                                        }),
                                      className: `framer-1g2435u`,
                                      "data-framer-name": `Core Value`,
                                      fonts: [`GF;IBM Plex Mono-regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  /*#__PURE__*/ l(m, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      J(`v7`, g) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(`h2`, {
                                          className: `framer-styles-preset-zg5ubw`,
                                          "data-styles-preset": `VF7HZTiAg`,
                                          dir: `auto`,
                                          children: `为什么选择模版应用`,
                                        }),
                                      }),
                                    className: `framer-wykxon`,
                                    "data-framer-name": `Why App Library`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            }),
                            /*#__PURE__*/ u(Y, {
                              __framer__animate: { transition: Q },
                              __framer__animateOnce: !0,
                              __framer__enter: Z,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-1lzv7t7`,
                              "data-framer-name": `Frame 2147223906`,
                              children: [
                                /*#__PURE__*/ u(`div`, {
                                  className: `framer-13m1nq4`,
                                  children: [
                                    /*#__PURE__*/ u(`div`, {
                                      className: `framer-fp8iwo`,
                                      "data-border": !0,
                                      "data-framer-name": `Frame 2147223882`,
                                      children: [
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-13sdcux`,
                                          "data-framer-name": `Frame 1321316006`,
                                          children: /*#__PURE__*/ l(`div`, {
                                            className: `framer-arr1zz`,
                                            "data-framer-name": `box`,
                                            children: /*#__PURE__*/ l(x, {
                                              className: `framer-1p4j2re`,
                                              "data-framer-name": `Vector`,
                                              fill: `rgba(0,0,0,1)`,
                                              intrinsicHeight: 29,
                                              intrinsicWidth: 27,
                                              svg: `<svg width="27" height="29" viewBox="-2 -2 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.375061 6.24756L11.2501 12.4976M11.2501 12.4976L22.1251 6.24756M11.2501 12.4976L11.25 24.9976M22.5 7.49744C22.4996 7.05903 22.3838 6.62845 22.1644 6.24889C21.945 5.86933 21.6297 5.55414 21.25 5.33494L12.5 0.334936C12.12 0.115516 11.6888 0 11.25 0C10.8112 0 10.38 0.115516 10 0.334936L1.25 5.33494C0.870328 5.55414 0.554975 5.86933 0.335577 6.24889C0.116178 6.62845 0.000449678 7.05903 0 7.49744V17.4974C0.000449678 17.9358 0.116178 18.3664 0.335577 18.746C0.554975 19.1255 0.870328 19.4407 1.25 19.6599L10 24.6599C10.38 24.8794 10.8112 24.9949 11.25 24.9949C11.6888 24.9949 12.12 24.8794 12.5 24.6599L21.25 19.6599C21.6297 19.4407 21.945 19.1255 22.1644 18.746C22.3838 18.3664 22.4996 17.9358 22.5 17.4974V7.49744Z" stroke="#628210" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ u(`div`, {
                                          className: `framer-1uvnfrt`,
                                          "data-framer-name": `Frame 22`,
                                          children: [
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                J(`v8`, g) ??
                                                /*#__PURE__*/ l(a, {
                                                  children: /*#__PURE__*/ l(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `20px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-line-height": `24px`,
                                                      "--framer-text-color": `rgb(5, 11, 20)`,
                                                    },
                                                    children: `开箱即用`,
                                                  }),
                                                }),
                                              className: `framer-xb8sts`,
                                              "data-framer-name": `Out of the box`,
                                              fonts: [`GF;IBM Plex Sans-500`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                J(`v9`, g) ??
                                                /*#__PURE__*/ l(a, {
                                                  children: /*#__PURE__*/ l(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `14px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `400`,
                                                      "--framer-line-height": `18px`,
                                                      "--framer-text-color": `rgb(154, 155, 166)`,
                                                    },
                                                    children: `直接用现成的工业应用来处理常见工作流程和场景。`,
                                                  }),
                                                }),
                                              className: `framer-1wbu10r`,
                                              "data-framer-name": `Use ready-made industrial apps directly for common workflows and scenarios.`,
                                              fonts: [`GF;IBM Plex Sans-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ u(`div`, {
                                      className: `framer-1aj26kq`,
                                      "data-border": !0,
                                      "data-framer-name": `Frame 2147223883`,
                                      children: [
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-bw75u2`,
                                          "data-framer-name": `Frame 1321316006`,
                                          children: /*#__PURE__*/ l(`div`, {
                                            className: `framer-1gn22yh`,
                                            "data-framer-name": `settings-2`,
                                            children: /*#__PURE__*/ l(x, {
                                              className: `framer-myi6r`,
                                              "data-framer-name": `Vector`,
                                              fill: `rgba(0,0,0,1)`,
                                              intrinsicHeight: 24,
                                              intrinsicWidth: 24,
                                              svg: `<svg width="24" height="24" viewBox="-2 -2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 3.75H8.75M12.5 16.25H1.25M12.5 16.25C12.5 18.3211 14.1789 20 16.25 20C18.3211 20 20 18.3211 20 16.25C20 14.1789 18.3211 12.5 16.25 12.5C14.1789 12.5 12.5 14.1789 12.5 16.25ZM7.5 3.75C7.5 5.82107 5.82107 7.5 3.75 7.5C1.67893 7.5 0 5.82107 0 3.75C0 1.67893 1.67893 0 3.75 0C5.82107 0 7.5 1.67893 7.5 3.75Z" stroke="#628210" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ u(`div`, {
                                          className: `framer-1o6cf3g`,
                                          "data-framer-name": `Frame 22`,
                                          children: [
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                J(`v10`, g) ??
                                                /*#__PURE__*/ l(a, {
                                                  children: /*#__PURE__*/ l(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `20px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-line-height": `24px`,
                                                      "--framer-text-color": `rgb(5, 11, 20)`,
                                                    },
                                                    children: `易于适配`,
                                                  }),
                                                }),
                                              className: `framer-1uxtxrs`,
                                              "data-framer-name": `Easy to adapt`,
                                              fonts: [`GF;IBM Plex Sans-500`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                J(`v11`, g) ??
                                                /*#__PURE__*/ l(a, {
                                                  children: /*#__PURE__*/ l(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `14px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `400`,
                                                      "--framer-line-height": `18px`,
                                                      "--framer-text-color": `rgb(154, 155, 166)`,
                                                    },
                                                    children: `根据实际业务需求调整表单、字段、角色、页面和逻辑。`,
                                                  }),
                                                }),
                                              className: `framer-1mh42no`,
                                              "data-framer-name": `Adjust forms, fields, roles, pages and logic based on actual business needs.`,
                                              fonts: [`GF;IBM Plex Sans-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ u(`div`, {
                                  className: `framer-8c7eva`,
                                  children: [
                                    /*#__PURE__*/ u(`div`, {
                                      className: `framer-nm77da`,
                                      "data-border": !0,
                                      "data-framer-name": `Frame 2147223884`,
                                      children: [
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-xe65i2`,
                                          "data-framer-name": `Frame 1321316006`,
                                          children: /*#__PURE__*/ l(`div`, {
                                            className: `framer-1coun15`,
                                            "data-framer-name": `hammer`,
                                            children: /*#__PURE__*/ l(x, {
                                              className: `framer-1us38mc`,
                                              "data-framer-name": `Vector`,
                                              fill: `rgba(0,0,0,1)`,
                                              intrinsicHeight: 27,
                                              intrinsicWidth: 28,
                                              svg: `<svg width="28" height="27" viewBox="-2 -2 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9929 11.3L4.52665 21.7663C4.02937 22.2636 3.35491 22.5429 2.65165 22.5429C1.94839 22.5429 1.27393 22.2636 0.776651 21.7663C0.27937 21.269 0 20.5946 0 19.8913C0 19.188 0.27937 18.5136 0.776651 18.0163L11.2429 7.55005M18.743 15.05L23.743 10.05M23.118 10.675L20.7255 8.2825C20.2566 7.81377 19.9931 7.17799 19.993 6.515V5.05L17.168 2.225C15.7737 0.83148 13.8867 0.0429483 11.9155 0.0299999L7.49298 0L8.64298 1.025C9.4598 1.74924 10.1138 2.63838 10.562 3.6338C11.0102 4.62923 11.2423 5.70834 11.243 6.8V8.8L13.743 11.3H15.208C15.871 11.3001 16.5067 11.5636 16.9755 12.0325L19.368 14.425" stroke="#628210" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ u(`div`, {
                                          className: `framer-1jzft1y`,
                                          "data-framer-name": `Frame 22`,
                                          children: [
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                J(`v12`, g) ??
                                                /*#__PURE__*/ l(a, {
                                                  children: /*#__PURE__*/ l(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `20px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-line-height": `24px`,
                                                      "--framer-text-color": `rgb(5, 11, 20)`,
                                                    },
                                                    children: `无需重建`,
                                                  }),
                                                }),
                                              className: `framer-ctw8i4`,
                                              "data-framer-name": `No need to rebuild`,
                                              fonts: [`GF;IBM Plex Sans-500`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                J(`v13`, g) ??
                                                /*#__PURE__*/ l(a, {
                                                  children: /*#__PURE__*/ l(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `14px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `400`,
                                                      "--framer-line-height": `18px`,
                                                      "--framer-text-color": `rgb(154, 155, 166)`,
                                                    },
                                                    children: `从一个可用的应用开始，而不是一个空白页面。`,
                                                  }),
                                                }),
                                              className: `framer-1ewui1a`,
                                              "data-framer-name": `从现成应用开始， not an empty page.`,
                                              fonts: [`GF;IBM Plex Sans-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ u(`div`, {
                                      className: `framer-ucbutl`,
                                      "data-border": !0,
                                      "data-framer-name": `Frame 2147223885`,
                                      children: [
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-iodfzo`,
                                          "data-framer-name": `Frame 1321316006`,
                                          children: /*#__PURE__*/ l(`div`, {
                                            className: `framer-nmsox5`,
                                            "data-framer-name": `database`,
                                            children: /*#__PURE__*/ l(x, {
                                              className: `framer-1kemg52`,
                                              "data-framer-name": `Vector`,
                                              opacity: 1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23 25"><path d="M 20.981 4.957 C 20.981 6.742 16.639 8.19 11.282 8.19 C 5.926 8.19 1.584 6.742 1.584 4.957 M 20.981 4.957 C 20.981 3.171 16.639 1.724 11.282 1.724 C 5.926 1.724 1.584 3.171 1.584 4.957 M 20.981 4.957 L 20.981 20.043 C 20.981 20.901 19.959 21.723 18.14 22.329 C 16.321 22.935 13.855 23.276 11.282 23.276 C 8.71 23.276 6.243 22.935 4.425 22.329 C 2.606 21.723 1.584 20.901 1.584 20.043 L 1.584 4.957 M 1.584 12.5 C 1.584 13.357 2.606 14.18 4.425 14.786 C 6.243 15.392 8.71 15.733 11.282 15.733 C 13.855 15.733 16.321 15.392 18.14 14.786 C 19.959 14.18 20.981 13.357 20.981 12.5" fill="transparent" stroke-width="2.16" stroke="rgb(98,130,16)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                              svgContentId: 9211814581,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ u(`div`, {
                                          className: `framer-1v07tea`,
                                          "data-framer-name": `Frame 22`,
                                          children: [
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                J(`v14`, g) ??
                                                /*#__PURE__*/ l(a, {
                                                  children: /*#__PURE__*/ l(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `20px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-line-height": `24px`,
                                                      "--framer-text-color": `rgb(5, 11, 20)`,
                                                    },
                                                    children: `基于共享数据`,
                                                  }),
                                                }),
                                              className: `framer-5pffeh`,
                                              "data-framer-name": `Built on shared data`,
                                              fonts: [`GF;IBM Plex Sans-500`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                J(`v15`, g) ??
                                                /*#__PURE__*/ l(a, {
                                                  children: /*#__PURE__*/ l(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `14px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `400`,
                                                      "--framer-line-height": `18px`,
                                                      "--framer-text-color": `rgb(154, 155, 166)`,
                                                    },
                                                    children: `所有应用都运行在同一个 UNS 基础之上，避免形成新的孤岛。`,
                                                  }),
                                                }),
                                              className: `framer-1rxqckw`,
                                              "data-framer-name": `All apps run on the same UNS foundation, avoiding new silos.`,
                                              fonts: [`GF;IBM Plex Sans-regular`],
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
                          ],
                        }),
                        /*#__PURE__*/ u(Y, {
                          __framer__animate: { transition: Q },
                          __framer__animateOnce: !0,
                          __framer__enter: Z,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-auy2ti`,
                          "data-framer-name": `Section`,
                          children: [
                            /*#__PURE__*/ u(`div`, {
                              className: `framer-kr6vpt`,
                              "data-framer-name": `Container`,
                              children: [
                                /*#__PURE__*/ u(`div`, {
                                  className: `framer-xvjkr3`,
                                  "data-framer-name": `Frame 2147223897`,
                                  children: [
                                    /*#__PURE__*/ l(`div`, {
                                      className: `framer-147e2rs`,
                                      "data-border": !0,
                                      "data-framer-name": `Text`,
                                      children: /*#__PURE__*/ l(m, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          J(`v16`, g) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                "--framer-font-family": `"IBM Plex Mono"`,
                                                "--framer-font-size": `10px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `normal`,
                                                "--framer-font-weight": `400`,
                                                "--framer-letter-spacing": `-0.2px`,
                                                "--framer-text-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                                "--framer-text-transform": `uppercase`,
                                              },
                                              children: `浏览应用`,
                                            }),
                                          }),
                                        className: `framer-10lpwxy`,
                                        "data-framer-name": `Browse Apps`,
                                        fonts: [`GF;IBM Plex Mono-regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    /*#__PURE__*/ l(m, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        J(`v17`, g) ??
                                        /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(`h2`, {
                                            className: `framer-styles-preset-zg5ubw`,
                                            "data-styles-preset": `VF7HZTiAg`,
                                            dir: `auto`,
                                            children: `工业应用目录`,
                                          }),
                                        }),
                                      className: `framer-1h8aeus`,
                                      "data-framer-name": `Industrial App Catalog`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ l(`div`, {
                                  className: `framer-ji8yjb`,
                                  "data-framer-name": `Paragraph`,
                                  children: /*#__PURE__*/ l(I, {
                                    breakpoint: T,
                                    overrides: {
                                      qktqcbsmC: {
                                        children:
                                          J(`v19`, g) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(`p`, {
                                              className: `framer-styles-preset-1ful33y`,
                                              "data-styles-preset": `HNigw6pHS`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `center` },
                                              children: `按类别筛选，找到适合业务场景的应用。`,
                                            }),
                                          }),
                                      },
                                    },
                                    children: /*#__PURE__*/ l(m, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        J(`v18`, g) ??
                                        /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(`p`, {
                                            className: `framer-styles-preset-1ful33y`,
                                            "data-styles-preset": `HNigw6pHS`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `按类别筛选，找到适合业务场景的应用。`,
                                          }),
                                        }),
                                      className: `framer-7u6wja`,
                                      "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ l(`div`, {
                              className: `framer-cj992p`,
                              "data-framer-name": `Frame 2147223940`,
                              children: /*#__PURE__*/ l(I, {
                                breakpoint: T,
                                overrides: {
                                  qktqcbsmC: { width: void 0, y: (v?.y || 0) + 2036.2 },
                                },
                                children: /*#__PURE__*/ l(D, {
                                  height: 675,
                                  width: `1200px`,
                                  y: (v?.y || 0) + 1561.2,
                                  children: /*#__PURE__*/ l(N, {
                                    className: `framer-1ryghxq-container`,
                                    nodeId: `W8bDDnCly`,
                                    scopeId: `DGsQOiGKT`,
                                    children: /*#__PURE__*/ l(I, {
                                      breakpoint: T,
                                      overrides: { qktqcbsmC: { variant: X(`Y2CuTwOTT`) } },
                                      children: /*#__PURE__*/ l(q, {
                                        height: `100%`,
                                        id: `W8bDDnCly`,
                                        layoutId: `W8bDDnCly`,
                                        style: { width: `100%` },
                                        variant: X(`aII55fMch`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        /*#__PURE__*/ u(Y, {
                          __framer__animate: { transition: Q },
                          __framer__animateOnce: !0,
                          __framer__enter: Z,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1u4n3th`,
                          "data-framer-name": `Section`,
                          children: [
                            /*#__PURE__*/ u(`div`, {
                              className: `framer-dbx1do`,
                              "data-framer-name": `Container`,
                              children: [
                                /*#__PURE__*/ u(`div`, {
                                  className: `framer-lkqn1q`,
                                  "data-framer-name": `Frame 2147223897`,
                                  children: [
                                    /*#__PURE__*/ l(`div`, {
                                      className: `framer-ksh0oe`,
                                      "data-border": !0,
                                      "data-framer-name": `Text`,
                                      children: /*#__PURE__*/ l(m, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          J(`v20`, g) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                "--framer-font-family": `"IBM Plex Mono"`,
                                                "--framer-font-size": `10px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `normal`,
                                                "--framer-font-weight": `400`,
                                                "--framer-letter-spacing": `-0.2px`,
                                                "--framer-text-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                                "--framer-text-transform": `uppercase`,
                                              },
                                              children: `交付路径`,
                                            }),
                                          }),
                                        className: `framer-1bjq1ty`,
                                        "data-framer-name": `Delivery Path`,
                                        fonts: [`GF;IBM Plex Mono-regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    /*#__PURE__*/ l(`div`, {
                                      className: `framer-1iiixq4`,
                                      "data-framer-name": `Heading 2`,
                                      children: /*#__PURE__*/ l(m, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          J(`v21`, g) ??
                                          /*#__PURE__*/ u(a, {
                                            children: [
                                              /*#__PURE__*/ l(`h2`, {
                                                className: `framer-styles-preset-zg5ubw`,
                                                "data-styles-preset": `VF7HZTiAg`,
                                                dir: `auto`,
                                                style: { "--framer-text-alignment": `center` },
                                                children: `从现成应用开始，`,
                                              }),
                                              /*#__PURE__*/ l(`h2`, {
                                                className: `framer-styles-preset-zg5ubw`,
                                                "data-styles-preset": `VF7HZTiAg`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                                },
                                                children: `无需从零构建`,
                                              }),
                                            ],
                                          }),
                                        className: `framer-1tcnufk`,
                                        "data-framer-name": `从现成应用开始，无需从零构建`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ l(m, {
                                  __fromCanvasComponent: !0,
                                  children:
                                    J(`v22`, g) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(`p`, {
                                        className: `framer-styles-preset-1ful33y`,
                                        "data-styles-preset": `HNigw6pHS`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `从目录到生产的四个步骤——在共享基础上更快部署。`,
                                      }),
                                    }),
                                  className: `framer-7tfsty`,
                                  "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                P() &&
                                  /*#__PURE__*/ u(`div`, {
                                    className: `framer-b9lj9z hidden-19f75n7`,
                                    children: [
                                      /*#__PURE__*/ l(x, {
                                        className: `framer-vmbd3a`,
                                        "data-framer-name": `Vector 4201`,
                                        fill: `rgba(0,0,0,1)`,
                                        intrinsicHeight: 3,
                                        intrinsicWidth: 1114,
                                        style: { rotate: 90 },
                                        svg: `<svg width="1114" height="3" viewBox="-1 -1 1114 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.5H1111.5" stroke="url(#paint0_linear_3523_13636)"/>
<defs>
<linearGradient id="paint0_linear_3523_13636" x1="0" y1="1" x2="1111.5" y2="1" gradientUnits="userSpaceOnUse">
<stop stop-color="#8AB52D" stop-opacity="0.2"/>
<stop offset="0.475962" stop-color="#73B200"/>
<stop offset="1" stop-color="#8AB52D" stop-opacity="0.2"/>
</linearGradient>
</defs>
</svg>
`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ l(`div`, {
                                        className: `framer-xovs3j`,
                                        "data-framer-name": `Group 1321316958`,
                                        children: /*#__PURE__*/ u(`div`, {
                                          className: `framer-o9ehp7`,
                                          children: [
                                            /*#__PURE__*/ u(`div`, {
                                              className: `framer-4zv6y1`,
                                              children: [
                                                /*#__PURE__*/ u(`div`, {
                                                  className: `framer-wpq2se`,
                                                  children: [
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-1k8t6og`,
                                                      "data-framer-name": `Container`,
                                                      children: /*#__PURE__*/ l(`div`, {
                                                        className: `framer-mtzgar`,
                                                        "data-framer-name": `Text`,
                                                        children: /*#__PURE__*/ l(`div`, {
                                                          className: `framer-36qbbm`,
                                                          children: /*#__PURE__*/ l(m, {
                                                            __fromCanvasComponent: !0,
                                                            children:
                                                              J(`v23`, g) ??
                                                              /*#__PURE__*/ l(a, {
                                                                children: /*#__PURE__*/ l(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--font-selector": `R0Y7UG9wcGlucy03MDA=`,
                                                                    "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                                                    "--framer-font-size": `13px`,
                                                                    "--framer-font-weight": `700`,
                                                                    "--framer-letter-spacing": `-0.26px`,
                                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                                  },
                                                                  children: `01`,
                                                                }),
                                                              }),
                                                            className: `framer-1argb3m`,
                                                            "data-framer-name": `01`,
                                                            fonts: [`GF;Poppins-700`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ l(f.div, {
                                                      className: `framer-1eyagof`,
                                                      "data-framer-name": `Container`,
                                                      style: { rotate: -90 },
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ u(`div`, {
                                                  className: `framer-1thwg5m`,
                                                  "data-border": !0,
                                                  "data-framer-name": `Container`,
                                                  children: [
                                                    /*#__PURE__*/ l(x, {
                                                      className: `framer-m6l0se`,
                                                      "data-framer-name": `Container`,
                                                      fill: `rgba(0,0,0,1)`,
                                                      intrinsicHeight: 38,
                                                      intrinsicWidth: 38,
                                                      svg: `<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_3523_13641" fill="white">
<path d="M0 8C0 3.58172 3.58172 0 8 0H30C34.4183 0 38 3.58172 38 8V30C38 34.4183 34.4183 38 30 38H8C3.58172 38 0 34.4183 0 30V8Z"/>
</mask>
<path d="M0 8C0 3.58172 3.58172 0 8 0H30C34.4183 0 38 3.58172 38 8V30C38 34.4183 34.4183 38 30 38H8C3.58172 38 0 34.4183 0 30V8Z" fill="#73B200" fill-opacity="0.12"/>
<path d="M8 0V1H30V0V-1H8V0ZM38 8H37V30H38H39V8H38ZM30 38V37H8V38V39H30V38ZM0 30H1V8H0H-1V30H0ZM8 38V37C4.13401 37 1 33.866 1 30H0H-1C-1 34.9706 3.02944 39 8 39V38ZM38 30H37C37 33.866 33.866 37 30 37V38V39C34.9706 39 39 34.9706 39 30H38ZM30 0V1C33.866 1 37 4.13401 37 8H38H39C39 3.02944 34.9706 -1 30 -1V0ZM8 0V-1C3.02944 -1 -1 3.02944 -1 8H0H1C1 4.13401 4.13401 1 8 1V0Z" fill="#73B200" fill-opacity="0.28" mask="url(#path-1-inside-1_3523_13641)"/>
<path d="M25.75 16.0004C25.7497 15.7374 25.6803 15.479 25.5487 15.2513C25.417 15.0236 25.2278 14.8344 25 14.7029L19.75 11.7029C19.522 11.5713 19.2633 11.502 19 11.502C18.7367 11.502 18.478 11.5713 18.25 11.7029L13 14.7029C12.7722 14.8344 12.583 15.0236 12.4513 15.2513C12.3197 15.479 12.2503 15.7374 12.25 16.0004V22.0004C12.2503 22.2635 12.3197 22.5218 12.4513 22.7495C12.583 22.9773 12.7722 23.1664 13 23.2979L18.25 26.2979C18.478 26.4296 18.7367 26.4989 19 26.4989C19.2633 26.4989 19.522 26.4296 19.75 26.2979L25 23.2979C25.2278 23.1664 25.417 22.9773 25.5487 22.7495C25.6803 22.5218 25.7497 22.2635 25.75 22.0004V16.0004Z" stroke="#73B200" stroke-width="0.75"/>
<path d="M12.4746 15.25L18.9996 19L25.5246 15.25" stroke="#73B200" stroke-width="0.75"/>
<path d="M19 26.5V19" stroke="#73B200" stroke-width="0.75"/>
</svg>
`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-1r455t5`,
                                                      "data-framer-name": `Paragraph`,
                                                      children: /*#__PURE__*/ l(m, {
                                                        __fromCanvasComponent: !0,
                                                        children:
                                                          J(`v24`, g) ??
                                                          /*#__PURE__*/ l(a, {
                                                            children: /*#__PURE__*/ l(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                                                                "--framer-font-family": `Poppins`,
                                                                "--framer-font-size": `14px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `600`,
                                                                "--framer-letter-spacing": `0px`,
                                                                "--framer-line-height": `18.9px`,
                                                                "--framer-text-color": `rgb(17, 24, 39)`,
                                                              },
                                                              children: `开箱即用`,
                                                            }),
                                                          }),
                                                        className: `framer-1mriv8r`,
                                                        "data-framer-name": `Use out of the box`,
                                                        fonts: [`GF;Poppins-600`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-7c2oqh`,
                                                      "data-framer-name": `Paragraph`,
                                                      children: /*#__PURE__*/ l(m, {
                                                        __fromCanvasComponent: !0,
                                                        children:
                                                          J(`v25`, g) ??
                                                          /*#__PURE__*/ l(a, {
                                                            children: /*#__PURE__*/ l(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                                "--framer-font-size": `13px`,
                                                                "--framer-letter-spacing": `0px`,
                                                                "--framer-line-height": `22.1px`,
                                                                "--framer-text-color": `rgb(107, 114, 128)`,
                                                              },
                                                              children: `从适用于常见工业场景的现成应用开始。`,
                                                            }),
                                                          }),
                                                        className: `framer-1t5v520`,
                                                        "data-framer-name": `Start with ready-to-use apps for common industrial`,
                                                        fonts: [`GF;IBM Plex Sans-regular`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-m40thq`,
                                                      "data-border": !0,
                                                      "data-framer-name": `Text`,
                                                      children: /*#__PURE__*/ l(m, {
                                                        __fromCanvasComponent: !0,
                                                        children:
                                                          J(`v26`, g) ??
                                                          /*#__PURE__*/ l(a, {
                                                            children: /*#__PURE__*/ l(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                                "--framer-font-family": `"IBM Plex Mono"`,
                                                                "--framer-font-size": `9px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `500`,
                                                                "--framer-letter-spacing": `0.45px`,
                                                                "--framer-text-color": `rgb(115, 178, 0)`,
                                                                "--framer-text-transform": `uppercase`,
                                                              },
                                                              children: `选择`,
                                                            }),
                                                          }),
                                                        className: `framer-fjt61s`,
                                                        "data-framer-name": `Choose`,
                                                        fonts: [`GF;IBM Plex Mono-500`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ u(`div`, {
                                              className: `framer-z85rri`,
                                              children: [
                                                /*#__PURE__*/ u(`div`, {
                                                  className: `framer-joteui`,
                                                  children: [
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-14vru4o`,
                                                      "data-framer-name": `Container`,
                                                      children: /*#__PURE__*/ l(`div`, {
                                                        className: `framer-2q6ebx`,
                                                        "data-framer-name": `Text`,
                                                        children: /*#__PURE__*/ l(m, {
                                                          __fromCanvasComponent: !0,
                                                          children:
                                                            J(`v27`, g) ??
                                                            /*#__PURE__*/ l(a, {
                                                              children: /*#__PURE__*/ l(`p`, {
                                                                dir: `auto`,
                                                                style: {
                                                                  "--font-selector": `R0Y7UG9wcGlucy03MDA=`,
                                                                  "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                                                  "--framer-font-size": `13px`,
                                                                  "--framer-font-weight": `700`,
                                                                  "--framer-letter-spacing": `-0.26px`,
                                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                                },
                                                                children: `02`,
                                                              }),
                                                            }),
                                                          className: `framer-rspxoz`,
                                                          "data-framer-name": `02`,
                                                          fonts: [`GF;Poppins-700`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ l(f.div, {
                                                      className: `framer-1ldk49s`,
                                                      "data-framer-name": `Container`,
                                                      style: { rotate: -90 },
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ u(`div`, {
                                                  className: `framer-h2b8lx`,
                                                  "data-border": !0,
                                                  "data-framer-name": `Container`,
                                                  children: [
                                                    /*#__PURE__*/ l(x, {
                                                      className: `framer-1x2r39`,
                                                      "data-framer-name": `Container`,
                                                      fill: `rgba(0,0,0,1)`,
                                                      intrinsicHeight: 38,
                                                      intrinsicWidth: 38,
                                                      svg: `<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_3523_13658" fill="white">
<path d="M0 8C0 3.58172 3.58172 0 8 0H30C34.4183 0 38 3.58172 38 8V30C38 34.4183 34.4183 38 30 38H8C3.58172 38 0 34.4183 0 30V8Z"/>
</mask>
<path d="M0 8C0 3.58172 3.58172 0 8 0H30C34.4183 0 38 3.58172 38 8V30C38 34.4183 34.4183 38 30 38H8C3.58172 38 0 34.4183 0 30V8Z" fill="#73B200" fill-opacity="0.12"/>
<path d="M8 0V1H30V0V-1H8V0ZM38 8H37V30H38H39V8H38ZM30 38V37H8V38V39H30V38ZM0 30H1V8H0H-1V30H0ZM8 38V37C4.13401 37 1 33.866 1 30H0H-1C-1 34.9706 3.02944 39 8 39V38ZM38 30H37C37 33.866 33.866 37 30 37V38V39C34.9706 39 39 34.9706 39 30H38ZM30 0V1C33.866 1 37 4.13401 37 8H38H39C39 3.02944 34.9706 -1 30 -1V0ZM8 0V-1C3.02944 -1 -1 3.02944 -1 8H0H1C1 4.13401 4.13401 1 8 1V0Z" fill="#73B200" fill-opacity="0.28" mask="url(#path-1-inside-1_3523_13658)"/>
<g clip-path="url(#clip0_3523_13658)">
<path d="M13 25.75V20.5" stroke="#73B200" stroke-width="0.75"/>
<path d="M13 17.5V12.25" stroke="#73B200" stroke-width="0.75"/>
<path d="M19 25.75V19" stroke="#73B200" stroke-width="0.75"/>
<path d="M19 16V12.25" stroke="#73B200" stroke-width="0.75"/>
<path d="M25 25.75V22" stroke="#73B200" stroke-width="0.75"/>
<path d="M25 19V12.25" stroke="#73B200" stroke-width="0.75"/>
<path d="M10.75 20.5H15.25" stroke="#73B200" stroke-width="0.75"/>
<path d="M16.75 16H21.25" stroke="#73B200" stroke-width="0.75"/>
<path d="M22.75 22H27.25" stroke="#73B200" stroke-width="0.75"/>
</g>
<defs>
<clipPath id="clip0_3523_13658">
<rect width="18" height="18" fill="white" transform="translate(10 10)"/>
</clipPath>
</defs>
</svg>
`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-cro0ob`,
                                                      "data-framer-name": `Paragraph`,
                                                      children: /*#__PURE__*/ l(m, {
                                                        __fromCanvasComponent: !0,
                                                        children:
                                                          J(`v28`, g) ??
                                                          /*#__PURE__*/ l(a, {
                                                            children: /*#__PURE__*/ l(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                                                                "--framer-font-family": `Poppins`,
                                                                "--framer-font-size": `14px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `600`,
                                                                "--framer-letter-spacing": `0px`,
                                                                "--framer-line-height": `18.9px`,
                                                                "--framer-text-color": `rgb(17, 24, 39)`,
                                                              },
                                                              children: `适应您的流程`,
                                                            }),
                                                          }),
                                                        className: `framer-1jg1jfo`,
                                                        "data-framer-name": `Adapt to your process`,
                                                        fonts: [`GF;Poppins-600`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-1cyqvda`,
                                                      "data-framer-name": `Paragraph`,
                                                      children: /*#__PURE__*/ l(m, {
                                                        __fromCanvasComponent: !0,
                                                        children:
                                                          J(`v29`, g) ??
                                                          /*#__PURE__*/ l(a, {
                                                            children: /*#__PURE__*/ l(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                                "--framer-font-size": `13px`,
                                                                "--framer-letter-spacing": `0px`,
                                                                "--framer-line-height": `22.1px`,
                                                                "--framer-text-color": `rgb(107, 114, 128)`,
                                                              },
                                                              children: `按需调整工作流、逻辑和界面，无需从头重建。`,
                                                            }),
                                                          }),
                                                        className: `framer-25pgl0`,
                                                        "data-framer-name": `Modify workflows, logic, or UI without rebuilding `,
                                                        fonts: [`GF;IBM Plex Sans-regular`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-zusr3i`,
                                                      "data-border": !0,
                                                      "data-framer-name": `Text`,
                                                      children: /*#__PURE__*/ l(m, {
                                                        __fromCanvasComponent: !0,
                                                        children:
                                                          J(`v30`, g) ??
                                                          /*#__PURE__*/ l(a, {
                                                            children: /*#__PURE__*/ l(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                                "--framer-font-family": `"IBM Plex Mono"`,
                                                                "--framer-font-size": `9px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `500`,
                                                                "--framer-letter-spacing": `0.45px`,
                                                                "--framer-text-color": `rgb(115, 178, 0)`,
                                                                "--framer-text-transform": `uppercase`,
                                                              },
                                                              children: `自定义`,
                                                            }),
                                                          }),
                                                        className: `framer-1o7226p`,
                                                        "data-framer-name": `Customize`,
                                                        fonts: [`GF;IBM Plex Mono-500`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ u(`div`, {
                                              className: `framer-v9uw03`,
                                              children: [
                                                /*#__PURE__*/ u(`div`, {
                                                  className: `framer-17nrnfe`,
                                                  children: [
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-2xhpsl`,
                                                      "data-framer-name": `Container`,
                                                      children: /*#__PURE__*/ l(`div`, {
                                                        className: `framer-12tc3vz`,
                                                        "data-framer-name": `Text`,
                                                        children: /*#__PURE__*/ l(m, {
                                                          __fromCanvasComponent: !0,
                                                          children:
                                                            J(`v31`, g) ??
                                                            /*#__PURE__*/ l(a, {
                                                              children: /*#__PURE__*/ l(`p`, {
                                                                dir: `auto`,
                                                                style: {
                                                                  "--font-selector": `R0Y7UG9wcGlucy03MDA=`,
                                                                  "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                                                  "--framer-font-size": `13px`,
                                                                  "--framer-font-weight": `700`,
                                                                  "--framer-letter-spacing": `-0.26px`,
                                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                                },
                                                                children: `03`,
                                                              }),
                                                            }),
                                                          className: `framer-1wkd21o`,
                                                          "data-framer-name": `03`,
                                                          fonts: [`GF;Poppins-700`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ l(f.div, {
                                                      className: `framer-1boyrbm`,
                                                      "data-framer-name": `Container`,
                                                      style: { rotate: -90 },
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ u(`div`, {
                                                  className: `framer-1o5mio1`,
                                                  "data-border": !0,
                                                  "data-framer-name": `Container`,
                                                  children: [
                                                    /*#__PURE__*/ l(x, {
                                                      className: `framer-iucgkc`,
                                                      "data-framer-name": `Container`,
                                                      fill: `rgba(0,0,0,1)`,
                                                      intrinsicHeight: 38,
                                                      intrinsicWidth: 38,
                                                      svg: `<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_3523_13681" fill="white">
<path d="M0 8C0 3.58172 3.58172 0 8 0H30C34.4183 0 38 3.58172 38 8V30C38 34.4183 34.4183 38 30 38H8C3.58172 38 0 34.4183 0 30V8Z"/>
</mask>
<path d="M0 8C0 3.58172 3.58172 0 8 0H30C34.4183 0 38 3.58172 38 8V30C38 34.4183 34.4183 38 30 38H8C3.58172 38 0 34.4183 0 30V8Z" fill="#73B200" fill-opacity="0.12"/>
<path d="M8 0V1H30V0V-1H8V0ZM38 8H37V30H38H39V8H38ZM30 38V37H8V38V39H30V38ZM0 30H1V8H0H-1V30H0ZM8 38V37C4.13401 37 1 33.866 1 30H0H-1C-1 34.9706 3.02944 39 8 39V38ZM38 30H37C37 33.866 33.866 37 30 37V38V39C34.9706 39 39 34.9706 39 30H38ZM30 0V1C33.866 1 37 4.13401 37 8H38H39C39 3.02944 34.9706 -1 30 -1V0ZM8 0V-1C3.02944 -1 -1 3.02944 -1 8H0H1C1 4.13401 4.13401 1 8 1V0Z" fill="#73B200" fill-opacity="0.28" mask="url(#path-1-inside-1_3523_13681)"/>
<path d="M17.5 19.75C17.8221 20.1806 18.233 20.5369 18.7049 20.7947C19.1768 21.0525 19.6986 21.2058 20.235 21.2442C20.7713 21.2826 21.3097 21.2052 21.8135 21.0173C22.3173 20.8294 22.7748 20.5353 23.155 20.155L25.405 17.905C26.0881 17.1977 26.4661 16.2505 26.4575 15.2672C26.449 14.284 26.0546 13.3434 25.3593 12.6482C24.664 11.9529 23.7235 11.5585 22.7403 11.5499C21.757 11.5414 20.8098 11.9194 20.1025 12.6025L18.8125 13.885" stroke="#73B200" stroke-width="0.75"/>
<path d="M20.5006 18.2499C20.1785 17.8193 19.7676 17.463 19.2957 17.2052C18.8238 16.9474 18.302 16.7941 17.7657 16.7557C17.2293 16.7173 16.6909 16.7946 16.1871 16.9826C15.6833 17.1705 15.2258 17.4646 14.8456 17.8449L12.5956 20.0949C11.9125 20.8022 11.5346 21.7494 11.5431 22.7327C11.5517 23.7159 11.946 24.6565 12.6413 25.3517C13.3366 26.047 14.2771 26.4414 15.2604 26.45C16.2436 26.4585 17.1909 26.0805 17.8981 25.3974L19.1806 24.1149" stroke="#73B200" stroke-width="0.75"/>
</svg>
`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-11yg58k`,
                                                      "data-framer-name": `Paragraph`,
                                                      children: /*#__PURE__*/ l(m, {
                                                        __fromCanvasComponent: !0,
                                                        children:
                                                          J(`v32`, g) ??
                                                          /*#__PURE__*/ l(a, {
                                                            children: /*#__PURE__*/ l(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                                                                "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                                                "--framer-font-size": `14px`,
                                                                "--framer-font-weight": `600`,
                                                                "--framer-letter-spacing": `0px`,
                                                                "--framer-line-height": `18.9px`,
                                                                "--framer-text-color": `rgb(17, 24, 39)`,
                                                              },
                                                              children: `连接共享的 UNS 数据`,
                                                            }),
                                                          }),
                                                        className: `framer-tbgg2k`,
                                                        "data-framer-name": `连接共享的 UNS 数据`,
                                                        fonts: [`GF;Poppins-600`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-1jy233w`,
                                                      "data-framer-name": `Paragraph`,
                                                      children: /*#__PURE__*/ l(m, {
                                                        __fromCanvasComponent: !0,
                                                        children:
                                                          J(`v33`, g) ??
                                                          /*#__PURE__*/ l(a, {
                                                            children: /*#__PURE__*/ l(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                                "--framer-font-size": `13px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `400`,
                                                                "--framer-letter-spacing": `0px`,
                                                                "--framer-line-height": `22.1px`,
                                                                "--framer-text-color": `rgb(107, 114, 128)`,
                                                              },
                                                              children: `将应用连接到统一命名空间，以实现实时数据访问。`,
                                                            }),
                                                          }),
                                                        className: `framer-1kneae`,
                                                        "data-framer-name": `Connect the app to unified namespace for real-time`,
                                                        fonts: [`GF;IBM Plex Sans-regular`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-1adevc1`,
                                                      "data-border": !0,
                                                      "data-framer-name": `Text`,
                                                      children: /*#__PURE__*/ l(m, {
                                                        __fromCanvasComponent: !0,
                                                        children:
                                                          J(`v34`, g) ??
                                                          /*#__PURE__*/ l(a, {
                                                            children: /*#__PURE__*/ l(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                                "--framer-font-family": `"IBM Plex Mono"`,
                                                                "--framer-font-size": `9px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `500`,
                                                                "--framer-letter-spacing": `0.45px`,
                                                                "--framer-text-color": `rgb(115, 178, 0)`,
                                                                "--framer-text-transform": `uppercase`,
                                                              },
                                                              children: `连接`,
                                                            }),
                                                          }),
                                                        className: `framer-dop8m9`,
                                                        "data-framer-name": `Connect`,
                                                        fonts: [`GF;IBM Plex Mono-500`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ u(`div`, {
                                              className: `framer-3e4ous`,
                                              children: [
                                                /*#__PURE__*/ u(`div`, {
                                                  className: `framer-r0ett1`,
                                                  children: [
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-1bberfj`,
                                                      "data-framer-name": `Container`,
                                                      children: /*#__PURE__*/ l(`div`, {
                                                        className: `framer-1qs5vmz`,
                                                        "data-framer-name": `Text`,
                                                        children: /*#__PURE__*/ l(m, {
                                                          __fromCanvasComponent: !0,
                                                          children:
                                                            J(`v35`, g) ??
                                                            /*#__PURE__*/ l(a, {
                                                              children: /*#__PURE__*/ l(`p`, {
                                                                dir: `auto`,
                                                                style: {
                                                                  "--font-selector": `R0Y7UG9wcGlucy03MDA=`,
                                                                  "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                                                  "--framer-font-size": `13px`,
                                                                  "--framer-font-weight": `700`,
                                                                  "--framer-letter-spacing": `-0.26px`,
                                                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                                                },
                                                                children: `04`,
                                                              }),
                                                            }),
                                                          className: `framer-11cmq8s`,
                                                          "data-framer-name": `04`,
                                                          fonts: [`GF;Poppins-700`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ l(f.div, {
                                                      className: `framer-1x5lamk`,
                                                      "data-framer-name": `Container`,
                                                      style: { rotate: -90 },
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ u(`div`, {
                                                  className: `framer-16o7ieg`,
                                                  "data-border": !0,
                                                  "data-framer-name": `Container`,
                                                  children: [
                                                    /*#__PURE__*/ l(x, {
                                                      className: `framer-1tb60ls`,
                                                      "data-framer-name": `Container`,
                                                      fill: `rgba(0,0,0,1)`,
                                                      intrinsicHeight: 38,
                                                      intrinsicWidth: 38,
                                                      svg: `<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_3523_13697" fill="white">
<path d="M0 8C0 3.58172 3.58172 0 8 0H30C34.4183 0 38 3.58172 38 8V30C38 34.4183 34.4183 38 30 38H8C3.58172 38 0 34.4183 0 30V8Z"/>
</mask>
<path d="M0 8C0 3.58172 3.58172 0 8 0H30C34.4183 0 38 3.58172 38 8V30C38 34.4183 34.4183 38 30 38H8C3.58172 38 0 34.4183 0 30V8Z" fill="#73B200" fill-opacity="0.12"/>
<path d="M8 0V1H30V0V-1H8V0ZM38 8H37V30H38H39V8H38ZM30 38V37H8V38V39H30V38ZM0 30H1V8H0H-1V30H0ZM8 38V37C4.13401 37 1 33.866 1 30H0H-1C-1 34.9706 3.02944 39 8 39V38ZM38 30H37C37 33.866 33.866 37 30 37V38V39C34.9706 39 39 34.9706 39 30H38ZM30 0V1C33.866 1 37 4.13401 37 8H38H39C39 3.02944 34.9706 -1 30 -1V0ZM8 0V-1C3.02944 -1 -1 3.02944 -1 8H0H1C1 4.13401 4.13401 1 8 1V0Z" fill="#73B200" fill-opacity="0.28" mask="url(#path-1-inside-1_3523_13697)"/>
<path d="M21.25 12.25H25.75V16.75" stroke="#73B200" stroke-width="0.75"/>
<path d="M16.75 25.75H12.25V21.25" stroke="#73B200" stroke-width="0.75"/>
<path d="M25.75 12.25L20.5 17.5" stroke="#73B200" stroke-width="0.75"/>
<path d="M12.25 25.75L17.5 20.5" stroke="#73B200" stroke-width="0.75"/>
</svg>
`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-151t24c`,
                                                      "data-framer-name": `Paragraph`,
                                                      children: /*#__PURE__*/ l(m, {
                                                        __fromCanvasComponent: !0,
                                                        children:
                                                          J(`v36`, g) ??
                                                          /*#__PURE__*/ l(a, {
                                                            children: /*#__PURE__*/ l(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                                                                "--framer-font-family": `Poppins`,
                                                                "--framer-font-size": `14px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `600`,
                                                                "--framer-letter-spacing": `0px`,
                                                                "--framer-line-height": `18.9px`,
                                                                "--framer-text-color": `rgb(17, 24, 39)`,
                                                              },
                                                              children: `部署和扩展`,
                                                            }),
                                                          }),
                                                        className: `framer-10rye4z`,
                                                        "data-framer-name": `Deploy and scale`,
                                                        fonts: [`GF;Poppins-600`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-o3esk3`,
                                                      "data-framer-name": `Paragraph`,
                                                      children: /*#__PURE__*/ l(m, {
                                                        __fromCanvasComponent: !0,
                                                        children:
                                                          J(`v37`, g) ??
                                                          /*#__PURE__*/ l(a, {
                                                            children: /*#__PURE__*/ l(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                                "--framer-font-size": `13px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `400`,
                                                                "--framer-letter-spacing": `0px`,
                                                                "--framer-line-height": `22.1px`,
                                                                "--framer-text-color": `rgb(107, 114, 128)`,
                                                              },
                                                              children: `借助可复用的基础架构，更快地在产线、工厂和团队中推广落地。`,
                                                            }),
                                                          }),
                                                        className: `framer-1dj7r1v`,
                                                        "data-framer-name": `Roll out faster with a reusable foundation for lin`,
                                                        fonts: [`GF;IBM Plex Sans-regular`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-1ywdm17`,
                                                      "data-border": !0,
                                                      "data-framer-name": `Text`,
                                                      children: /*#__PURE__*/ l(m, {
                                                        __fromCanvasComponent: !0,
                                                        children:
                                                          J(`v38`, g) ??
                                                          /*#__PURE__*/ l(a, {
                                                            children: /*#__PURE__*/ l(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                                "--framer-font-family": `"IBM Plex Mono"`,
                                                                "--framer-font-size": `9px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `500`,
                                                                "--framer-letter-spacing": `0.45px`,
                                                                "--framer-text-color": `rgb(115, 178, 0)`,
                                                                "--framer-text-transform": `uppercase`,
                                                              },
                                                              children: `规模`,
                                                            }),
                                                          }),
                                                        className: `framer-bnw3ok`,
                                                        "data-framer-name": `Scale`,
                                                        fonts: [`GF;IBM Plex Mono-500`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            F() &&
                              /*#__PURE__*/ u(`div`, {
                                className: `framer-1lyossi hidden-1e5g3cn`,
                                "data-framer-name": `Group 1321316958`,
                                children: [
                                  /*#__PURE__*/ l(x, {
                                    className: `framer-1cn1bzt`,
                                    "data-framer-name": `Vector 4201`,
                                    opacity: 1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1114 3"><path d="M 1 1.5 L 1112.5 1.5" fill="transparent" stroke="rgba(115, 178, 0, 0.6)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                    svgContentId: 11715196448,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ u(`div`, {
                                    className: `framer-isht4r`,
                                    "data-framer-name": `Container`,
                                    children: [
                                      /*#__PURE__*/ u(`div`, {
                                        className: `framer-1wlii38`,
                                        "data-framer-name": `Container`,
                                        children: [
                                          /*#__PURE__*/ l(`div`, {
                                            className: `framer-jobwwh`,
                                            "data-framer-name": `Container`,
                                          }),
                                          /*#__PURE__*/ u(`div`, {
                                            className: `framer-1msyp6q`,
                                            "data-border": !0,
                                            "data-framer-name": `Container`,
                                            children: [
                                              /*#__PURE__*/ l(x, {
                                                className: `framer-gu2m3q`,
                                                "data-framer-name": `Container`,
                                                opacity: 1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40"><path d="M 1 9 C 1 4.582 4.582 1 9 1 L 31 1 C 35.418 1 39 4.582 39 9 L 39 31 C 39 35.418 35.418 39 31 39 L 9 39 C 4.582 39 1 35.418 1 31 Z" fill="rgba(178, 237, 29, 0.2)" stroke="var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29)) /* {&quot;name&quot;:&quot;Chartreuse&quot;} */" stroke-miterlimit="10"></path><g transform="translate(13.25 12.502)"><path d="M 13.5 4.498 C 13.5 4.235 13.43 3.977 13.299 3.749 C 13.167 3.522 12.978 3.332 12.75 3.201 L 7.5 0.201 C 7.272 0.069 7.013 0 6.75 0 C 6.487 0 6.228 0.069 6 0.201 L 0.75 3.201 C 0.522 3.332 0.333 3.522 0.201 3.749 C 0.07 3.977 0 4.235 0 4.498 L 0 10.498 C 0 10.762 0.07 11.02 0.201 11.248 C 0.333 11.475 0.522 11.664 0.75 11.796 L 6 14.796 C 6.228 14.928 6.487 14.997 6.75 14.997 C 7.013 14.997 7.272 14.928 7.5 14.796 L 12.75 11.796 C 12.978 11.664 13.167 11.475 13.299 11.248 C 13.43 11.02 13.5 10.762 13.5 10.498 Z" fill="transparent" stroke-width="1.33" stroke="rgb(115,178,0)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.225 3.748 L 6.75 7.498 L 13.275 3.748" fill="transparent" stroke-width="1.33" stroke="rgb(115,178,0)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 6.75 14.998 L 6.75 7.498" fill="transparent" stroke-width="1.33" stroke="rgb(115,178,0)" stroke-miterlimit="10" stroke-dasharray=""></path></g></svg>`,
                                                svgContentId: 8976701421,
                                                withExternalLayout: !0,
                                              }),
                                              /*#__PURE__*/ l(`div`, {
                                                className: `framer-wz4sfw`,
                                                "data-framer-name": `Paragraph`,
                                                children: /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    J(`v39`, g) ??
                                                    /*#__PURE__*/ l(a, {
                                                      children: /*#__PURE__*/ l(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `14px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `600`,
                                                          "--framer-letter-spacing": `0px`,
                                                          "--framer-line-height": `18.9px`,
                                                          "--framer-text-color": `rgb(17, 24, 39)`,
                                                        },
                                                        children: `开箱即用`,
                                                      }),
                                                    }),
                                                  className: `framer-1jkgn2n`,
                                                  "data-framer-name": `Use out of the box`,
                                                  fonts: [`GF;IBM Plex Sans-600`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ l(`div`, {
                                                className: `framer-193hkqp`,
                                                "data-framer-name": `Paragraph`,
                                                children: /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    J(`v40`, g) ??
                                                    /*#__PURE__*/ l(a, {
                                                      children: /*#__PURE__*/ l(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                          "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                          "--framer-font-size": `13px`,
                                                          "--framer-letter-spacing": `0px`,
                                                          "--framer-line-height": `22.1px`,
                                                          "--framer-text-color": `rgb(107, 114, 128)`,
                                                        },
                                                        children: `从适用于常见工业场景的现成应用开始。`,
                                                      }),
                                                    }),
                                                  className: `framer-k1x6u1`,
                                                  "data-framer-name": `Start with ready-to-use apps for common industrial`,
                                                  fonts: [`GF;IBM Plex Sans-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ l(`div`, {
                                                className: `framer-1hpgbb9`,
                                                "data-border": !0,
                                                "data-framer-name": `Text`,
                                                children: /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    J(`v26`, g) ??
                                                    /*#__PURE__*/ l(a, {
                                                      children: /*#__PURE__*/ l(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                          "--framer-font-family": `"IBM Plex Mono"`,
                                                          "--framer-font-size": `9px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `500`,
                                                          "--framer-letter-spacing": `0.45px`,
                                                          "--framer-text-color": `rgb(115, 178, 0)`,
                                                          "--framer-text-transform": `uppercase`,
                                                        },
                                                        children: `选择`,
                                                      }),
                                                    }),
                                                  className: `framer-1yqzrdf`,
                                                  "data-framer-name": `Choose`,
                                                  fonts: [`GF;IBM Plex Mono-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ l(`div`, {
                                            className: `framer-1acsk81`,
                                            "data-framer-name": `Container`,
                                            children: /*#__PURE__*/ l(`div`, {
                                              className: `framer-1qi5a36`,
                                              "data-framer-name": `Text`,
                                              children: /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  J(`v41`, g) ??
                                                  /*#__PURE__*/ l(a, {
                                                    children: /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                        "--framer-font-family": `"IBM Plex Mono", monospace`,
                                                        "--framer-font-size": `13px`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-letter-spacing": `-0.26px`,
                                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      },
                                                      children: `01`,
                                                    }),
                                                  }),
                                                className: `framer-17332ba`,
                                                "data-framer-name": `01`,
                                                fonts: [`GF;IBM Plex Mono-500`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ u(`div`, {
                                        className: `framer-4ju3km`,
                                        "data-framer-name": `Container`,
                                        children: [
                                          /*#__PURE__*/ u(`div`, {
                                            className: `framer-55nzht`,
                                            "data-border": !0,
                                            "data-framer-name": `Container`,
                                            children: [
                                              /*#__PURE__*/ l(`div`, {
                                                className: `framer-jep1fh`,
                                                "data-framer-name": `Paragraph`,
                                                children: /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    J(`v42`, g) ??
                                                    /*#__PURE__*/ l(a, {
                                                      children: /*#__PURE__*/ l(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `14px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `600`,
                                                          "--framer-letter-spacing": `0px`,
                                                          "--framer-line-height": `18.9px`,
                                                          "--framer-text-color": `rgb(17, 24, 39)`,
                                                        },
                                                        children: `适应您的流程`,
                                                      }),
                                                    }),
                                                  className: `framer-188qtdp`,
                                                  "data-framer-name": `Adapt to your process`,
                                                  fonts: [`GF;IBM Plex Sans-600`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ l(`div`, {
                                                className: `framer-1kdj9y3`,
                                                "data-framer-name": `Paragraph`,
                                                children: /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    J(`v43`, g) ??
                                                    /*#__PURE__*/ l(a, {
                                                      children: /*#__PURE__*/ l(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                          "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                          "--framer-font-size": `13px`,
                                                          "--framer-letter-spacing": `0px`,
                                                          "--framer-line-height": `22.1px`,
                                                          "--framer-text-color": `rgb(107, 114, 128)`,
                                                        },
                                                        children: `按需调整工作流、逻辑和界面，无需从头重建。`,
                                                      }),
                                                    }),
                                                  className: `framer-199jxxz`,
                                                  "data-framer-name": `Modify workflows, logic, or UI without rebuilding `,
                                                  fonts: [`GF;IBM Plex Sans-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ l(`div`, {
                                                className: `framer-z4d7j5`,
                                                "data-border": !0,
                                                "data-framer-name": `Text`,
                                                children: /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    J(`v30`, g) ??
                                                    /*#__PURE__*/ l(a, {
                                                      children: /*#__PURE__*/ l(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                          "--framer-font-family": `"IBM Plex Mono"`,
                                                          "--framer-font-size": `9px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `500`,
                                                          "--framer-letter-spacing": `0.45px`,
                                                          "--framer-text-color": `rgb(115, 178, 0)`,
                                                          "--framer-text-transform": `uppercase`,
                                                        },
                                                        children: `自定义`,
                                                      }),
                                                    }),
                                                  className: `framer-10vabxo`,
                                                  "data-framer-name": `Customize`,
                                                  fonts: [`GF;IBM Plex Mono-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ l(x, {
                                                className: `framer-17ey3xe`,
                                                "data-framer-name": `Container`,
                                                opacity: 1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40"><path d="M 1 9 C 1 4.582 4.582 1 9 1 L 31 1 C 35.418 1 39 4.582 39 9 L 39 31 C 39 35.418 35.418 39 31 39 L 9 39 C 4.582 39 1 35.418 1 31 Z" fill="rgba(178, 237, 29, 0.2)" stroke="var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29)) /* {&quot;name&quot;:&quot;Chartreuse&quot;} */" stroke-miterlimit="10"></path><g transform="translate(11 11)"><path d="M 0 18 L 0 0 L 18 0 L 18 18 Z" fill="transparent"></path><path d="M 3 15.75 L 3 10.5" fill="transparent" stroke-width="1.33" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 3 7.5 L 3 2.25" fill="transparent" stroke-width="1.33" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 9 15.75 L 9 9" fill="transparent" stroke-width="1.33" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 9 6 L 9 2.25" fill="transparent" stroke-width="1.33" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 15 15.75 L 15 12" fill="transparent" stroke-width="1.33" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 15 9 L 15 2.25" fill="transparent" stroke-width="1.33" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.75 10.5 L 5.25 10.5" fill="transparent" stroke-width="1.33" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 6.75 6 L 11.25 6" fill="transparent" stroke-width="1.33" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 12.75 12 L 17.25 12" fill="transparent" stroke-width="1.33" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></g></svg>`,
                                                svgContentId: 12335838834,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ l(`div`, {
                                            className: `framer-gissob`,
                                            "data-framer-name": `Container`,
                                            children: /*#__PURE__*/ l(`div`, {
                                              className: `framer-8gvrkw`,
                                              "data-framer-name": `Text`,
                                              children: /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  J(`v44`, g) ??
                                                  /*#__PURE__*/ l(a, {
                                                    children: /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                        "--framer-font-family": `"IBM Plex Mono", monospace`,
                                                        "--framer-font-size": `13px`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-letter-spacing": `-0.26px`,
                                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      },
                                                      children: `02`,
                                                    }),
                                                  }),
                                                className: `framer-1p7uxnk`,
                                                "data-framer-name": `01`,
                                                fonts: [`GF;IBM Plex Mono-500`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          }),
                                          /*#__PURE__*/ l(`div`, {
                                            className: `framer-1h892dr`,
                                            "data-framer-name": `Container`,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ u(`div`, {
                                        className: `framer-k3lhpf`,
                                        "data-framer-name": `Container`,
                                        children: [
                                          /*#__PURE__*/ u(`div`, {
                                            className: `framer-eyezrb`,
                                            "data-border": !0,
                                            "data-framer-name": `Container`,
                                            children: [
                                              /*#__PURE__*/ l(`div`, {
                                                className: `framer-1j6a6gb`,
                                                "data-framer-name": `Paragraph`,
                                                children: /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    J(`v45`, g) ??
                                                    /*#__PURE__*/ l(a, {
                                                      children: /*#__PURE__*/ l(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                          "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                          "--framer-font-size": `14px`,
                                                          "--framer-font-weight": `600`,
                                                          "--framer-letter-spacing": `0px`,
                                                          "--framer-line-height": `18.9px`,
                                                          "--framer-text-color": `rgb(17, 24, 39)`,
                                                        },
                                                        children: `连接共享的 UNS 数据`,
                                                      }),
                                                    }),
                                                  className: `framer-tjhht0`,
                                                  "data-framer-name": `连接共享的 UNS 数据`,
                                                  fonts: [`GF;IBM Plex Sans-600`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ l(`div`, {
                                                className: `framer-v7mnci`,
                                                "data-framer-name": `Paragraph`,
                                                children: /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    J(`v33`, g) ??
                                                    /*#__PURE__*/ l(a, {
                                                      children: /*#__PURE__*/ l(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `13px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `400`,
                                                          "--framer-letter-spacing": `0px`,
                                                          "--framer-line-height": `22.1px`,
                                                          "--framer-text-color": `rgb(107, 114, 128)`,
                                                        },
                                                        children: `将应用连接到统一命名空间，以实现实时数据访问。`,
                                                      }),
                                                    }),
                                                  className: `framer-lz68mb`,
                                                  "data-framer-name": `Connect the app to unified namespace for real-time`,
                                                  fonts: [`GF;IBM Plex Sans-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ l(`div`, {
                                                className: `framer-uavv5a`,
                                                "data-border": !0,
                                                "data-framer-name": `Text`,
                                                children: /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    J(`v34`, g) ??
                                                    /*#__PURE__*/ l(a, {
                                                      children: /*#__PURE__*/ l(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                          "--framer-font-family": `"IBM Plex Mono"`,
                                                          "--framer-font-size": `9px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `500`,
                                                          "--framer-letter-spacing": `0.45px`,
                                                          "--framer-text-color": `rgb(115, 178, 0)`,
                                                          "--framer-text-transform": `uppercase`,
                                                        },
                                                        children: `连接`,
                                                      }),
                                                    }),
                                                  className: `framer-v7tao3`,
                                                  "data-framer-name": `Connect`,
                                                  fonts: [`GF;IBM Plex Mono-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ l(x, {
                                                className: `framer-tyscxt`,
                                                "data-framer-name": `Container`,
                                                opacity: 1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40"><path d="M 1 9 C 1 4.582 4.582 1 9 1 L 31 1 C 35.418 1 39 4.582 39 9 L 39 31 C 39 35.418 35.418 39 31 39 L 9 39 C 4.582 39 1 35.418 1 31 Z" fill="rgba(178, 237, 29, 0.2)" stroke="var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29)) /* {&quot;name&quot;:&quot;Chartreuse&quot;} */" stroke-miterlimit="10"></path><g transform="translate(11.543 11.55)"><path d="M 5.957 8.2 C 6.279 8.631 6.69 8.987 7.162 9.245 C 7.634 9.503 8.156 9.656 8.692 9.694 C 9.228 9.733 9.767 9.655 10.271 9.468 C 10.774 9.28 11.232 8.986 11.612 8.605 L 13.862 6.355 C 14.545 5.648 14.923 4.701 14.915 3.717 C 14.906 2.734 14.512 1.794 13.816 1.098 C 13.121 0.403 12.181 0.009 11.197 0 C 10.214 -0.008 9.267 0.37 8.56 1.053 L 7.27 2.335" fill="transparent" stroke-width="1.33" stroke="rgb(115,178,0)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 8.958 6.7 C 8.636 6.27 8.225 5.913 7.753 5.655 C 7.281 5.398 6.759 5.244 6.223 5.206 C 5.686 5.168 5.148 5.245 4.644 5.433 C 4.14 5.621 3.683 5.915 3.303 6.295 L 1.053 8.545 C 0.37 9.252 -0.008 10.2 0 11.183 C 0.009 12.166 0.403 13.107 1.098 13.802 C 1.794 14.497 2.734 14.892 3.717 14.9 C 4.701 14.909 5.648 14.531 6.355 13.848 L 7.638 12.565" fill="transparent" stroke-width="1.33" stroke="rgb(115,178,0)" stroke-miterlimit="10" stroke-dasharray=""></path></g></svg>`,
                                                svgContentId: 12346312245,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ l(`div`, {
                                            className: `framer-acavi2`,
                                            "data-framer-name": `Container`,
                                            children: /*#__PURE__*/ l(`div`, {
                                              className: `framer-1ewg2b3`,
                                              "data-framer-name": `Text`,
                                              children: /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  J(`v46`, g) ??
                                                  /*#__PURE__*/ l(a, {
                                                    children: /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                        "--framer-font-family": `"IBM Plex Mono", monospace`,
                                                        "--framer-font-size": `13px`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-letter-spacing": `-0.26px`,
                                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      },
                                                      children: `03`,
                                                    }),
                                                  }),
                                                className: `framer-17645o7`,
                                                "data-framer-name": `01`,
                                                fonts: [`GF;IBM Plex Mono-500`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          }),
                                          /*#__PURE__*/ l(`div`, {
                                            className: `framer-1tjydlu`,
                                            "data-framer-name": `Container`,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ u(`div`, {
                                        className: `framer-fa1ekf`,
                                        "data-framer-name": `Container`,
                                        children: [
                                          /*#__PURE__*/ u(`div`, {
                                            className: `framer-nq01wb`,
                                            "data-border": !0,
                                            "data-framer-name": `Container`,
                                            children: [
                                              /*#__PURE__*/ l(`div`, {
                                                className: `framer-s41fju`,
                                                "data-framer-name": `Paragraph`,
                                                children: /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    J(`v47`, g) ??
                                                    /*#__PURE__*/ l(a, {
                                                      children: /*#__PURE__*/ l(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `14px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `600`,
                                                          "--framer-letter-spacing": `0px`,
                                                          "--framer-line-height": `18.9px`,
                                                          "--framer-text-color": `rgb(17, 24, 39)`,
                                                        },
                                                        children: `部署和扩展`,
                                                      }),
                                                    }),
                                                  className: `framer-14buaxc`,
                                                  "data-framer-name": `Deploy and scale`,
                                                  fonts: [`GF;IBM Plex Sans-600`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ l(`div`, {
                                                className: `framer-1uslblp`,
                                                "data-framer-name": `Paragraph`,
                                                children: /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    J(`v37`, g) ??
                                                    /*#__PURE__*/ l(a, {
                                                      children: /*#__PURE__*/ l(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `13px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `400`,
                                                          "--framer-letter-spacing": `0px`,
                                                          "--framer-line-height": `22.1px`,
                                                          "--framer-text-color": `rgb(107, 114, 128)`,
                                                        },
                                                        children: `借助可复用的基础架构，更快地在产线、工厂和团队中推广落地。`,
                                                      }),
                                                    }),
                                                  className: `framer-1jnxcz1`,
                                                  "data-framer-name": `Roll out faster with a reusable foundation for lin`,
                                                  fonts: [`GF;IBM Plex Sans-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ l(`div`, {
                                                className: `framer-18n9umw`,
                                                "data-border": !0,
                                                "data-framer-name": `Text`,
                                                children: /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    J(`v38`, g) ??
                                                    /*#__PURE__*/ l(a, {
                                                      children: /*#__PURE__*/ l(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                          "--framer-font-family": `"IBM Plex Mono"`,
                                                          "--framer-font-size": `9px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `500`,
                                                          "--framer-letter-spacing": `0.45px`,
                                                          "--framer-text-color": `rgb(115, 178, 0)`,
                                                          "--framer-text-transform": `uppercase`,
                                                        },
                                                        children: `规模`,
                                                      }),
                                                    }),
                                                  className: `framer-1wrf1cy`,
                                                  "data-framer-name": `Scale`,
                                                  fonts: [`GF;IBM Plex Mono-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ l(x, {
                                                className: `framer-xaqd1k`,
                                                "data-framer-name": `Container`,
                                                opacity: 1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40"><path d="M 1 9 C 1 4.582 4.582 1 9 1 L 31 1 C 35.418 1 39 4.582 39 9 L 39 31 C 39 35.418 35.418 39 31 39 L 9 39 C 4.582 39 1 35.418 1 31 Z" fill="rgba(178, 237, 29, 0.2)" stroke="var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29)) /* {&quot;name&quot;:&quot;Chartreuse&quot;} */" stroke-miterlimit="10"></path><g transform="translate(12.25 12.25)"><path d="M 9 0 L 13.5 0 L 13.5 4.5" fill="transparent" stroke-width="1.33" stroke="rgb(115,178,0)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 4.5 13.5 L 0 13.5 L 0 9" fill="transparent" stroke-width="1.33" stroke="rgb(115,178,0)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 13.5 0 L 8.25 5.25" fill="transparent" stroke-width="1.33" stroke="rgb(115,178,0)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0 13.5 L 5.25 8.25" fill="transparent" stroke-width="1.33" stroke="rgb(115,178,0)" stroke-miterlimit="10" stroke-dasharray=""></path></g></svg>`,
                                                svgContentId: 9436146955,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ l(`div`, {
                                            className: `framer-slmsr1`,
                                            "data-framer-name": `Container`,
                                            children: /*#__PURE__*/ l(`div`, {
                                              className: `framer-171ufus`,
                                              "data-framer-name": `Text`,
                                              children: /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  J(`v48`, g) ??
                                                  /*#__PURE__*/ l(a, {
                                                    children: /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                        "--framer-font-family": `"IBM Plex Mono", monospace`,
                                                        "--framer-font-size": `13px`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-letter-spacing": `-0.26px`,
                                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      },
                                                      children: `04`,
                                                    }),
                                                  }),
                                                className: `framer-12osqgt`,
                                                "data-framer-name": `01`,
                                                fonts: [`GF;IBM Plex Mono-500`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          }),
                                          /*#__PURE__*/ l(`div`, {
                                            className: `framer-i9735y`,
                                            "data-framer-name": `Container`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                        /*#__PURE__*/ l(`div`, {
                          className: `framer-5604ks`,
                          "data-framer-name": `产线`,
                        }),
                      ],
                    }),
                    /*#__PURE__*/ u(f.div, {
                      className: `framer-1cwlf6t`,
                      "data-framer-name": `Frame 2147223992`,
                      layout: j,
                      children: [
                        /*#__PURE__*/ l(h, {
                          links: [
                            { href: { webPageId: `e0LeoctYs` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `e0LeoctYs` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            /*#__PURE__*/ l(I, {
                              breakpoint: T,
                              overrides: {
                                qktqcbsmC: { width: `300px`, y: (v?.y || 0) + 4115.91 },
                              },
                              children: /*#__PURE__*/ l(D, {
                                height: 100,
                                width: `630.5px`,
                                y: (v?.y || 0) + 3135.0819,
                                children: /*#__PURE__*/ l(N, {
                                  className: `framer-qs1ay5-container`,
                                  nodeId: `XlJb_ekvB`,
                                  scopeId: `DGsQOiGKT`,
                                  children: /*#__PURE__*/ l(I, {
                                    breakpoint: T,
                                    overrides: { qktqcbsmC: { osIMBk3va: e[1] } },
                                    children: /*#__PURE__*/ l(H, {
                                      Bl9NYECTJ: `rgb(216, 216, 217)`,
                                      excG2ycRK: 16,
                                      Ft3OV1du0: J(`v49`, g) ?? `数据采集`,
                                      GbwKGBBdi: `rgb(23, 26, 34)`,
                                      height: `100%`,
                                      id: `XlJb_ekvB`,
                                      layoutId: `XlJb_ekvB`,
                                      nZYRErOCO: J(`v50`, g) ?? `将工业和业务数据连接到 Tier0`,
                                      osIMBk3va: e[0],
                                      PA4ruD5Tl: `rgba(250, 250, 250, 0.5)`,
                                      PeGC4Vb3l: `rgb(120, 118, 112)`,
                                      style: { width: `100%` },
                                      variant: X(`gYqLQJaHI`),
                                      width: `100%`,
                                      yc8xhFk7o: `var(--token-7122224f-85bb-46cf-a093-189b897a9de6, rgb(250, 250, 249))`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                        }),
                        /*#__PURE__*/ l(h, {
                          links: [
                            { href: { webPageId: `CtRSYVoCz` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `CtRSYVoCz` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            /*#__PURE__*/ l(I, {
                              breakpoint: T,
                              overrides: {
                                qktqcbsmC: { width: `300px`, y: (v?.y || 0) + 4234.91 },
                              },
                              children: /*#__PURE__*/ l(D, {
                                height: 100,
                                width: `630.5px`,
                                y: (v?.y || 0) + 3135.0819,
                                children: /*#__PURE__*/ l(N, {
                                  className: `framer-1kofnff-container`,
                                  nodeId: `gQb5WxLAF`,
                                  scopeId: `DGsQOiGKT`,
                                  children: /*#__PURE__*/ l(I, {
                                    breakpoint: T,
                                    overrides: { qktqcbsmC: { osIMBk3va: e[1] } },
                                    children: /*#__PURE__*/ l(H, {
                                      Bl9NYECTJ: `rgb(216, 216, 217)`,
                                      excG2ycRK: 16,
                                      Ft3OV1du0: J(`v51`, g) ?? `应用构建器`,
                                      GbwKGBBdi: `rgb(23, 26, 34)`,
                                      height: `100%`,
                                      id: `gQb5WxLAF`,
                                      layoutId: `gQb5WxLAF`,
                                      nZYRErOCO:
                                        J(`v52`, g) ?? `构建今天的应用，不为明天制造数据孤岛。`,
                                      osIMBk3va: e[0],
                                      PA4ruD5Tl: `rgba(250, 250, 250, 0.5)`,
                                      PeGC4Vb3l: `rgb(120, 118, 112)`,
                                      style: { width: `100%` },
                                      variant: X(`gYqLQJaHI`),
                                      width: `100%`,
                                      yc8xhFk7o: `rgb(231, 249, 185)`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                        }),
                      ],
                    }),
                    /*#__PURE__*/ u(f.div, {
                      className: `framer-1fooalc`,
                      layout: j,
                      children: [
                        /*#__PURE__*/ l(h, {
                          links: [
                            { href: { webPageId: `RCRTBRG3j` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `RCRTBRG3j` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            /*#__PURE__*/ l(I, {
                              breakpoint: T,
                              overrides: { qktqcbsmC: { y: (v?.y || 0) + 4431.7549 } },
                              children: /*#__PURE__*/ l(D, {
                                height: 381,
                                width: v?.width || `100vw`,
                                y: (v?.y || 0) + 3284.6042,
                                children: /*#__PURE__*/ l(N, {
                                  className: `framer-idtxym-container`,
                                  nodeId: `mz3XrQD1b`,
                                  scopeId: `DGsQOiGKT`,
                                  children: /*#__PURE__*/ l(I, {
                                    breakpoint: T,
                                    overrides: {
                                      qktqcbsmC: { exikp92XZ: e[1], variant: X(`GL5t2qn7B`) },
                                    },
                                    children: /*#__PURE__*/ l(V, {
                                      AspCk9Iwt:
                                        J(`v54`, g) ??
                                        `借助基于 UNS 架构构建的即用型应用，部署工业应用更快捷`,
                                      DC7Tugabs: J(`v56`, g) ?? `下一步`,
                                      exikp92XZ: e[0],
                                      F_yIFtkLx: J(`v57`, g) ?? `立即体验 Tier0`,
                                      Gl_ZpIhSp:
                                        J(`v53`, g) ?? `从现成应用开始，无需从零构建`,
                                      H7eKfGy5E: J(`v55`, g) ?? `预约会议`,
                                      height: `100%`,
                                      id: `mz3XrQD1b`,
                                      IoXK6IEoz: `https://tier0.cn/login`,
                                      layoutId: `mz3XrQD1b`,
                                      style: { width: `100%` },
                                      variant: X(`Rym8t4ER5`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                        }),
                        F() &&
                          /*#__PURE__*/ l(Ye, {
                            animate: at,
                            className: `framer-7lr7rr hidden-1e5g3cn`,
                            "data-framer-appear-id": `7lr7rr`,
                            "data-framer-name": `point bg`,
                            initial: ot,
                            optimized: !0,
                            transformTemplate: it,
                            children: /*#__PURE__*/ l(D, {
                              children: /*#__PURE__*/ l(N, {
                                className: `framer-brf2lr-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `pL1FyWfC6`,
                                scopeId: `DGsQOiGKT`,
                                children: /*#__PURE__*/ l(L, {
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
                                  id: `pL1FyWfC6`,
                                  layoutId: `pL1FyWfC6`,
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
                    /*#__PURE__*/ l(I, {
                      breakpoint: T,
                      overrides: { qktqcbsmC: { y: (v?.y || 0) + 4886.91 } },
                      children: /*#__PURE__*/ l(D, {
                        height: 498,
                        width: v?.width || `100vw`,
                        y: (v?.y || 0) + 3668.0819,
                        children: /*#__PURE__*/ l(N, {
                          className: `framer-rj4qjv-container`,
                          layout: j,
                          nodeId: `Q0AwhOyF2`,
                          scopeId: `DGsQOiGKT`,
                          children: /*#__PURE__*/ l(I, {
                            breakpoint: T,
                            overrides: { qktqcbsmC: { variant: X(`vXscR1iJC`) } },
                            children: /*#__PURE__*/ l(R, {
                              height: `100%`,
                              id: `Q0AwhOyF2`,
                              layoutId: `Q0AwhOyF2`,
                              style: { width: `100%` },
                              variant: X(`zev4Tv3qQ`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ l(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (dt = [
        `.framer-ao9Ki.framer-da15ol, .framer-ao9Ki .framer-da15ol { display: block; }`,
        `.framer-ao9Ki.framer-19f75n7 { align-content: center; align-items: center; background-color: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-ao9Ki .framer-12rc70p-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 4; }`,
        `.framer-ao9Ki .framer-1oxnn0a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 90px; height: min-content; justify-content: flex-start; overflow: visible; padding: 140px 0px 0px 0px; position: relative; width: 1280px; }`,
        `.framer-ao9Ki .framer-b745f0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ao9Ki .framer-15mdzbs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ao9Ki .framer-1wqpkk7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ao9Ki .framer-knecjn, .framer-ao9Ki .framer-1angvop, .framer-ao9Ki .framer-147e2rs, .framer-ao9Ki .framer-ksh0oe { --border-bottom-width: 1px; --border-color: var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, #b2ed1d); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(178, 237, 29, 0.1); border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 28px; justify-content: flex-start; overflow: visible; padding: 6px 12px 6px 12px; position: relative; width: min-content; }`,
        `.framer-ao9Ki .framer-1e6iuch, .framer-ao9Ki .framer-iitout, .framer-ao9Ki .framer-1g2435u, .framer-ao9Ki .framer-wykxon, .framer-ao9Ki .framer-xb8sts, .framer-ao9Ki .framer-1uxtxrs, .framer-ao9Ki .framer-ctw8i4, .framer-ao9Ki .framer-5pffeh, .framer-ao9Ki .framer-10lpwxy, .framer-ao9Ki .framer-1h8aeus, .framer-ao9Ki .framer-1bjq1ty, .framer-ao9Ki .framer-1tcnufk, .framer-ao9Ki .framer-1argb3m, .framer-ao9Ki .framer-fjt61s, .framer-ao9Ki .framer-rspxoz, .framer-ao9Ki .framer-1o7226p, .framer-ao9Ki .framer-1wkd21o, .framer-ao9Ki .framer-dop8m9, .framer-ao9Ki .framer-11cmq8s, .framer-ao9Ki .framer-bnw3ok, .framer-ao9Ki .framer-1yqzrdf, .framer-ao9Ki .framer-17332ba, .framer-ao9Ki .framer-10vabxo, .framer-ao9Ki .framer-1p7uxnk, .framer-ao9Ki .framer-v7tao3, .framer-ao9Ki .framer-17645o7, .framer-ao9Ki .framer-1wrf1cy, .framer-ao9Ki .framer-12osqgt { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-ao9Ki .framer-1aj7rzz { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 1280px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ao9Ki .framer-b1j73a, .framer-ao9Ki .framer-16ieqkb { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 780px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ao9Ki .framer-kjgcrg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: 15px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ao9Ki .framer-yb5dks, .framer-ao9Ki .framer-43oz27 { background-color: #ccde9d; flex: none; gap: 0px; height: 1px; overflow: visible; position: relative; width: 32px; }`,
        `.framer-ao9Ki .framer-18ehkmk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 15px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 215px; }`,
        `.framer-ao9Ki .framer-70ph0a { flex: none; height: 3px; position: relative; width: 1282px; }`,
        `.framer-ao9Ki .framer-nwz1hy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ao9Ki .framer-1ebgbvl, .framer-ao9Ki .framer-xhpmzx, .framer-ao9Ki .framer-kr6vpt, .framer-ao9Ki .framer-xvjkr3, .framer-ao9Ki .framer-dbx1do, .framer-ao9Ki .framer-lkqn1q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ao9Ki .framer-1lzv7t7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-ao9Ki .framer-13m1nq4, .framer-ao9Ki .framer-8c7eva, .framer-ao9Ki .framer-36qbbm { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-ao9Ki .framer-fp8iwo, .framer-ao9Ki .framer-1aj26kq, .framer-ao9Ki .framer-nm77da, .framer-ao9Ki .framer-ucbutl { --border-bottom-width: 1px; --border-color: #ebebeb; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 198px; justify-content: center; overflow: visible; padding: 24px; position: relative; width: 1px; }`,
        `.framer-ao9Ki .framer-13sdcux, .framer-ao9Ki .framer-bw75u2, .framer-ao9Ki .framer-xe65i2, .framer-ao9Ki .framer-iodfzo { align-content: center; align-items: center; aspect-ratio: 1 / 1; background-color: #e7f9b9; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18.75px; height: auto; justify-content: center; overflow: visible; padding: 11.250000953674316px; position: relative; width: 60px; }`,
        `.framer-ao9Ki .framer-arr1zz, .framer-ao9Ki .framer-1gn22yh, .framer-ao9Ki .framer-1coun15, .framer-ao9Ki .framer-nmsox5 { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; overflow: hidden; position: relative; width: 30px; }`,
        `.framer-ao9Ki .framer-1p4j2re { bottom: 2px; flex: none; left: 4px; position: absolute; right: 3px; top: 3px; }`,
        `.framer-ao9Ki .framer-1uvnfrt, .framer-ao9Ki .framer-1o6cf3g, .framer-ao9Ki .framer-1jzft1y, .framer-ao9Ki .framer-1v07tea { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ao9Ki .framer-1wbu10r, .framer-ao9Ki .framer-1mh42no, .framer-ao9Ki .framer-1ewui1a, .framer-ao9Ki .framer-1rxqckw { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 241px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ao9Ki .framer-myi6r { bottom: 7px; flex: none; left: 3px; position: absolute; right: 7px; top: 3px; }`,
        `.framer-ao9Ki .framer-1us38mc { flex: none; height: 22px; left: calc(50.00000000000002% - 24px / 2); position: absolute; top: calc(50.00000000000002% - 22px / 2); width: 24px; }`,
        `.framer-ao9Ki .framer-1kemg52 { flex: none; height: 25px; left: calc(50.00000000000002% - 23px / 2); position: absolute; top: calc(50.00000000000002% - 25px / 2); width: 23px; }`,
        `.framer-ao9Ki .framer-auy2ti { align-content: center; align-items: center; background-color: #fafafa; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 60px 401px 60px 401px; position: relative; width: 1440px; }`,
        `.framer-ao9Ki .framer-ji8yjb, .framer-ao9Ki .framer-1iiixq4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ao9Ki .framer-7u6wja, .framer-ao9Ki .framer-7tfsty { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 873px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ao9Ki .framer-cj992p { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-ao9Ki .framer-1ryghxq-container { flex: none; height: auto; position: relative; width: 1200px; }`,
        `.framer-ao9Ki .framer-1u4n3th { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ao9Ki .framer-b9lj9z { flex: none; height: 943px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 323px; }`,
        `.framer-ao9Ki .framer-vmbd3a { flex: none; height: 3px; left: -422px; position: absolute; top: 470px; width: 900px; }`,
        `.framer-ao9Ki .framer-xovs3j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: -1px; overflow: visible; padding: 0px; position: absolute; top: 50%; transform: translateY(-50%); width: min-content; }`,
        `.framer-ao9Ki .framer-o9ehp7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 930px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-ao9Ki .framer-4zv6y1, .framer-ao9Ki .framer-z85rri, .framer-ao9Ki .framer-v9uw03, .framer-ao9Ki .framer-3e4ous { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-ao9Ki .framer-wpq2se, .framer-ao9Ki .framer-joteui, .framer-ao9Ki .framer-17nrnfe, .framer-ao9Ki .framer-r0ett1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: min-content; }`,
        `.framer-ao9Ki .framer-1k8t6og { align-content: center; align-items: center; background-color: #73b200; border-bottom-left-radius: 19px; border-bottom-right-radius: 19px; border-top-left-radius: 19px; border-top-right-radius: 19px; box-shadow: 0px 0px 0px 6px rgba(115, 178, 0, 0.22), 0px 0px 0px 4px rgb(250, 250, 250); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 38px; justify-content: center; overflow: visible; padding: 0px 12.578125px 0px 12.5625px; position: relative; width: 38px; }`,
        `.framer-ao9Ki .framer-mtzgar { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 20px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 13px; }`,
        `.framer-ao9Ki .framer-1eyagof, .framer-ao9Ki .framer-1ldk49s, .framer-ao9Ki .framer-1boyrbm, .framer-ao9Ki .framer-1x5lamk { background: linear-gradient(180deg, rgba(115, 178, 0, 0.4) 0%, rgba(115, 178, 0, 0.08) 100%); flex: none; gap: 0px; height: 28px; overflow: visible; position: relative; width: 2px; }`,
        `.framer-ao9Ki .framer-1thwg5m, .framer-ao9Ki .framer-h2b8lx, .framer-ao9Ki .framer-16o7ieg { --border-bottom-width: 1px; --border-color: #e5e7eb; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 2px; background: linear-gradient(180deg, #ffffff 0%, rgb(248, 251, 242) 100%); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; gap: 0px; height: 225px; overflow: visible; position: relative; width: 253px; }`,
        `.framer-ao9Ki .framer-m6l0se, .framer-ao9Ki .framer-1x2r39, .framer-ao9Ki .framer-iucgkc, .framer-ao9Ki .framer-1tb60ls { flex: none; height: 38px; left: 23px; position: absolute; top: 24px; width: 38px; }`,
        `.framer-ao9Ki .framer-1r455t5, .framer-ao9Ki .framer-cro0ob, .framer-ao9Ki .framer-11yg58k, .framer-ao9Ki .framer-151t24c, .framer-ao9Ki .framer-wz4sfw, .framer-ao9Ki .framer-jep1fh, .framer-ao9Ki .framer-1j6a6gb, .framer-ao9Ki .framer-s41fju { flex: none; gap: 0px; height: 19px; left: 23px; overflow: visible; position: absolute; top: 72px; width: 207px; }`,
        `.framer-ao9Ki .framer-1mriv8r, .framer-ao9Ki .framer-1jg1jfo, .framer-ao9Ki .framer-tbgg2k, .framer-ao9Ki .framer-10rye4z, .framer-ao9Ki .framer-1jkgn2n, .framer-ao9Ki .framer-188qtdp, .framer-ao9Ki .framer-tjhht0, .framer-ao9Ki .framer-14buaxc { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 0px; position: absolute; top: 0px; white-space: pre; width: auto; }`,
        `.framer-ao9Ki .framer-7c2oqh, .framer-ao9Ki .framer-1cyqvda, .framer-ao9Ki .framer-193hkqp, .framer-ao9Ki .framer-1kdj9y3 { flex: none; gap: 0px; height: 44px; left: 23px; overflow: visible; position: absolute; top: 101px; width: 207px; }`,
        `.framer-ao9Ki .framer-1t5v520, .framer-ao9Ki .framer-25pgl0, .framer-ao9Ki .framer-1kneae, .framer-ao9Ki .framer-1dj7r1v, .framer-ao9Ki .framer-k1x6u1, .framer-ao9Ki .framer-199jxxz, .framer-ao9Ki .framer-lz68mb, .framer-ao9Ki .framer-1jnxcz1 { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 0px; position: absolute; top: -1px; white-space: pre-wrap; width: 207px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ao9Ki .framer-m40thq, .framer-ao9Ki .framer-zusr3i { --border-bottom-width: 1px; --border-color: rgba(115, 178, 0, 0.22); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(115, 178, 0, 0.08); border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: 19px; justify-content: flex-start; left: 23px; overflow: visible; padding: 3px 9px 3px 9px; position: absolute; top: 159px; width: min-content; }`,
        `.framer-ao9Ki .framer-14vru4o { align-content: center; align-items: center; aspect-ratio: 1 / 1; background-color: #73b200; border-bottom-left-radius: 19px; border-bottom-right-radius: 19px; border-top-left-radius: 19px; border-top-right-radius: 19px; box-shadow: 0px 0px 0px 6px rgba(115, 178, 0, 0.22), 0px 0px 0px 4px rgb(250, 250, 250); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: visible; padding: 0px 11.3125px 0px 11.296875px; position: relative; width: 38px; }`,
        `.framer-ao9Ki .framer-2q6ebx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 20px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 15px; }`,
        `.framer-ao9Ki .framer-2xhpsl { align-content: center; align-items: center; background-color: #73b200; border-bottom-left-radius: 19px; border-bottom-right-radius: 19px; border-top-left-radius: 19px; border-top-right-radius: 19px; box-shadow: 0px 0px 0px 6px rgba(115, 178, 0, 0.22), 0px 0px 0px 4px rgb(250, 250, 250); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 38px; justify-content: center; overflow: visible; padding: 0px 11.09375px 0px 11.078125px; position: relative; width: 38px; }`,
        `.framer-ao9Ki .framer-12tc3vz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 20px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 16px; }`,
        `.framer-ao9Ki .framer-1o5mio1 { --border-bottom-width: 1px; --border-color: #e5e7eb; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 2px; background: linear-gradient(179deg, #ffffff 0%, rgb(248, 251, 242) 100%); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; gap: 0px; height: 225px; overflow: visible; position: relative; width: 253px; }`,
        `.framer-ao9Ki .framer-1jy233w, .framer-ao9Ki .framer-o3esk3, .framer-ao9Ki .framer-v7mnci, .framer-ao9Ki .framer-1uslblp { flex: none; gap: 0px; height: 66px; left: 23px; overflow: visible; position: absolute; top: 101px; width: 207px; }`,
        `.framer-ao9Ki .framer-1adevc1, .framer-ao9Ki .framer-1ywdm17 { --border-bottom-width: 1px; --border-color: rgba(115, 178, 0, 0.22); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(115, 178, 0, 0.08); border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: 19px; justify-content: flex-start; left: 23px; overflow: visible; padding: 3px 9px 3px 9px; position: absolute; top: 181px; width: min-content; }`,
        `.framer-ao9Ki .framer-1bberfj { align-content: center; align-items: center; background-color: #73b200; border-bottom-left-radius: 19px; border-bottom-right-radius: 19px; border-top-left-radius: 19px; border-top-right-radius: 19px; box-shadow: 0px 0px 0px 6px rgba(115, 178, 0, 0.22), 0px 0px 0px 4px rgb(250, 250, 250); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 38px; justify-content: center; overflow: visible; padding: 0px 10.625px 0px 10.609375px; position: relative; width: 38px; }`,
        `.framer-ao9Ki .framer-1qs5vmz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 20px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 17px; }`,
        `.framer-ao9Ki .framer-1lyossi { flex: none; height: 291px; overflow: visible; position: relative; width: 1112px; }`,
        `.framer-ao9Ki .framer-1cn1bzt { flex: none; height: 3px; left: -1px; position: absolute; top: 16px; width: 1114px; }`,
        `.framer-ao9Ki .framer-isht4r { flex: none; gap: 0px; height: 291px; left: 13px; overflow: visible; position: absolute; top: 0px; width: 1072px; }`,
        `.framer-ao9Ki .framer-1wlii38 { flex: none; gap: 0px; height: 291px; left: 0px; overflow: visible; position: absolute; top: 0px; width: 253px; }`,
        `.framer-ao9Ki .framer-jobwwh, .framer-ao9Ki .framer-1h892dr, .framer-ao9Ki .framer-1tjydlu, .framer-ao9Ki .framer-i9735y { background: linear-gradient(180deg, rgba(178, 237, 29, 0.4) 0%, rgba(115, 178, 0, 0.08) 100%); flex: none; gap: 0px; height: 28px; left: 126px; overflow: visible; position: absolute; top: 38px; width: 2px; }`,
        `.framer-ao9Ki .framer-1msyp6q, .framer-ao9Ki .framer-55nzht, .framer-ao9Ki .framer-eyezrb, .framer-ao9Ki .framer-nq01wb { --border-bottom-width: 1px; --border-color: #e2e6de; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 2px; background-color: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; gap: 0px; height: 225px; left: 0px; overflow: visible; position: absolute; top: 66px; width: 253px; }`,
        `.framer-ao9Ki .framer-gu2m3q, .framer-ao9Ki .framer-17ey3xe, .framer-ao9Ki .framer-tyscxt, .framer-ao9Ki .framer-xaqd1k { flex: none; height: 40px; left: 23px; position: absolute; top: 24px; width: 40px; }`,
        `.framer-ao9Ki .framer-1hpgbb9, .framer-ao9Ki .framer-z4d7j5 { --border-bottom-width: 1px; --border-color: var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, #b2ed1d); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(178, 237, 29, 0.2); border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; left: 23px; overflow: visible; padding: 3px 9px 3px 9px; position: absolute; top: 159px; width: min-content; }`,
        `.framer-ao9Ki .framer-1acsk81, .framer-ao9Ki .framer-gissob, .framer-ao9Ki .framer-acavi2, .framer-ao9Ki .framer-slmsr1 { align-content: center; align-items: center; background-color: #b2ed1d; border-bottom-left-radius: 19px; border-bottom-right-radius: 19px; border-top-left-radius: 19px; border-top-right-radius: 19px; box-shadow: 0px 0px 0px 6px rgba(178, 237, 29, 0.2); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 38px; justify-content: center; left: 108px; overflow: visible; padding: 0px 12.578125px 0px 12.5625px; position: absolute; top: 0px; width: 38px; }`,
        `.framer-ao9Ki .framer-1qi5a36, .framer-ao9Ki .framer-8gvrkw, .framer-ao9Ki .framer-1ewg2b3, .framer-ao9Ki .framer-171ufus { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ao9Ki .framer-4ju3km { flex: none; gap: 0px; height: 291px; left: 273px; overflow: visible; position: absolute; top: 0px; width: 253px; }`,
        `.framer-ao9Ki .framer-k3lhpf { flex: none; gap: 0px; height: 291px; left: 546px; overflow: visible; position: absolute; top: 0px; width: 253px; }`,
        `.framer-ao9Ki .framer-uavv5a, .framer-ao9Ki .framer-18n9umw { --border-bottom-width: 1px; --border-color: var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, #b2ed1d); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(178, 237, 29, 0.2); border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; left: 23px; overflow: visible; padding: 3px 9px 3px 9px; position: absolute; top: 181px; width: min-content; }`,
        `.framer-ao9Ki .framer-fa1ekf { flex: none; gap: 0px; height: 291px; left: 819px; overflow: visible; position: absolute; top: 0px; width: 253px; }`,
        `.framer-ao9Ki .framer-5604ks { background-color: #efefef; flex: none; height: 1px; overflow: visible; position: relative; width: 1280px; }`,
        `.framer-ao9Ki .framer-1cwlf6t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 19px; height: min-content; justify-content: flex-start; overflow: visible; padding: 48px 0px 48px 0px; position: relative; width: 1280px; }`,
        `.framer-ao9Ki .framer-qs1ay5-container, .framer-ao9Ki .framer-1kofnff-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-ao9Ki .framer-1fooalc { background-color: var(--token-7122224f-85bb-46cf-a093-189b897a9de6, #fafaf9); flex: none; height: 385px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-ao9Ki .framer-idtxym-container { flex: none; height: auto; left: 0px; position: absolute; right: 0px; top: 50%; transform: translateY(-50%); z-index: 2; }`,
        `.framer-ao9Ki .framer-7lr7rr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; right: 0px; top: 50%; transform: translateY(-50%); will-change: var(--framer-will-change-effect-override, transform); z-index: 0; }`,
        `.framer-ao9Ki .framer-brf2lr-container { flex: 1 0 0px; height: 385px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-ao9Ki .framer-rj4qjv-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...be,
        ...pe,
        ...ye,
        `.framer-ao9Ki[data-border="true"]::after, .framer-ao9Ki [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (max-width: 1439.98px) { .framer-ao9Ki.framer-19f75n7 { width: 390px; } .framer-ao9Ki .framer-1oxnn0a { gap: 40px; padding: 120px 0px 0px 0px; width: 300px; } .framer-ao9Ki .framer-15mdzbs { width: 300px; } .framer-ao9Ki .framer-1aj7rzz, .framer-ao9Ki .framer-b1j73a, .framer-ao9Ki .framer-16ieqkb, .framer-ao9Ki .framer-1wbu10r, .framer-ao9Ki .framer-1mh42no, .framer-ao9Ki .framer-1ewui1a, .framer-ao9Ki .framer-1rxqckw, .framer-ao9Ki .framer-kr6vpt, .framer-ao9Ki .framer-ji8yjb, .framer-ao9Ki .framer-dbx1do, .framer-ao9Ki .framer-7tfsty { width: 100%; } .framer-ao9Ki .framer-70ph0a { height: 1px; width: 300px; } .framer-ao9Ki .framer-1lzv7t7 { flex-direction: column; width: 300px; } .framer-ao9Ki .framer-13m1nq4, .framer-ao9Ki .framer-8c7eva { flex: none; flex-direction: column; width: 100%; } .framer-ao9Ki .framer-fp8iwo, .framer-ao9Ki .framer-1aj26kq, .framer-ao9Ki .framer-nm77da, .framer-ao9Ki .framer-ucbutl { flex: none; flex-direction: row; height: min-content; width: 100%; } .framer-ao9Ki .framer-1uvnfrt, .framer-ao9Ki .framer-1o6cf3g, .framer-ao9Ki .framer-1jzft1y, .framer-ao9Ki .framer-1v07tea, .framer-ao9Ki .framer-7u6wja { flex: 1 0 0px; width: 1px; } .framer-ao9Ki .framer-ctw8i4, .framer-ao9Ki .framer-5pffeh { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-ao9Ki .framer-auy2ti { padding: 60px 45px 60px 45px; width: 390px; } .framer-ao9Ki .framer-cj992p { width: min-content; } .framer-ao9Ki .framer-1ryghxq-container { width: auto; } .framer-ao9Ki .framer-1u4n3th { gap: 25px; } .framer-ao9Ki .framer-5604ks { width: 310px; } .framer-ao9Ki .framer-1cwlf6t { flex-direction: column; padding: 24px 0px 24px 0px; width: 300px; } .framer-ao9Ki .framer-qs1ay5-container, .framer-ao9Ki .framer-1kofnff-container { flex: none; width: 100%; } .framer-ao9Ki .framer-1fooalc { height: 528px; }}`,
      ]),
      ($ = C(ut, dt, `framer-ao9Ki`)),
      ($.displayName = `Product / Tier0 / Uns`),
      ($.defaultProps = { height: 3748, width: 1440 }),
      k(
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
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
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
                weight: `500`,
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
                cssFamilyName: `Poppins`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Poppins`,
                url: `https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLCz7V15vFP-KUEg.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Poppins`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Poppins`,
                url: `https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLEj6V15vFP-KUEg.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `IBM Plex Sans`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `IBM Plex Sans`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `600`,
              },
            ],
          },
          ...We,
          ...Ge,
          ...Ke,
          ...qe,
          ...Je,
          ...Xe,
          ...g(Se),
          ...g(me),
          ...g(xe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) =>
          j(
            [
              () => _(z, {}, t),
              () => _(q, {}, t),
              () => _(H, {}, t),
              () => _(V, {}, t),
              () => _(R, {}, t),
            ],
            t
          ),
      }),
      (ft = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerDGsQOiGKT`,
            slots: [],
            annotations: {
              framerDisplayContentsDiv: `false`,
              framerIntrinsicWidth: `1440`,
              framerScrollSections: `false`,
              framerImmutableVariables: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"qktqcbsmC":{"layout":["fixed","auto"]}}}`,
              framerColorSyntax: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerResponsiveScreen: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerIntrinsicHeight: `3748`,
              framerAutoSizeImages: `true`,
              framerComponentViewportWidth: `true`,
              framerContractVersion: `1`,
            },
          },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
pt();
export { ft as __FramerMetadata__, $ as default, $e as queryParamNames };
//# sourceMappingURL=OAGwafmaN0jXifUNF3G9oZwhg1zZEw1aN5Q_l5HC-bM.Du-YmpuM.mjs.map
