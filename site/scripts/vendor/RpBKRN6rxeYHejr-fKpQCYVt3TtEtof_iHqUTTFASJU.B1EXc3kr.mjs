import { n as e, t } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  D as n,
  F as r,
  O as i,
  P as a,
  R as o,
  S as s,
  c,
  l,
  m as u,
  s as d,
  u as f,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { S as p, Yi as m, n as ee, t as h, v as te } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import {
  A as g,
  At as _,
  Bt as ne,
  D as v,
  E as y,
  Et as b,
  F as x,
  G as S,
  I as C,
  It as re,
  K as w,
  M as T,
  Nt as ie,
  O as E,
  Ot as D,
  P as O,
  Pt as k,
  Q as A,
  Rt as ae,
  St as oe,
  U as j,
  a as M,
  bt as se,
  g as N,
  gt as ce,
  ht as le,
  j as P,
  jt as ue,
  lt as de,
  m as fe,
  o as F,
  s as I,
  u as pe,
  v as L,
  w as R,
  wt as me,
  y as z,
  yt as he,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { n as ge, t as _e } from "./Video.DnHPb52u.mjs?v=20261116-migration-v2";
import { n as ve, t as ye } from "./ShimmerGrid_Prod.D8QXYPOQ.mjs?v=20261116-migration-v2";
import { a as be, i as xe, n as Se, o as Ce, r as we, t as Te } from "./TBRoaUTAt.Cu8l6vlW.mjs?v=20261116-migration-v2";
import { m as Ee, n as De, p as Oe, t as ke } from "./shared-lib.CHy_rbfQ.mjs?v=20261116-migration-v2";
import { i as Ae, n as je, r as Me, t as Ne } from "./F3NdZsOi7.BZcXtl7q.mjs?v=20261116-migration-v2";
import { i as Pe, n as Fe, r as Ie, t as Le } from "./HNigw6pHS.BbLcGwmq.mjs?v=20261116-migration-v2";
import { i as Re, n as ze, r as Be, t as Ve } from "./IIMP8Vr9g.Cf7xPKPX.mjs?v=20261116-migration-v2";
import { i as He, n as Ue, r as We, t as Ge } from "./xtB9ht3pk.DGcm8FKW.mjs?v=20261116-migration-v2";
import { n as Ke, t as qe } from "./O2sCN9yxq.5YGffmfa.mjs?v=20261116-migration-v2";
import { i as Je, n as Ye, r as Xe, t as Ze } from "./Y65iag5vt.B5ZMnZps.mjs?v=20261116-migration-v2";
import { i as Qe, n as $e, r as et, t as tt } from "./ub82bN_DX.Ciw76Bvz.mjs?v=20261116-migration-v2";
import { i as nt, n as rt, r as it, t as at } from "./v3uIGOLZQ.CLLOfxB0.mjs?v=20261116-migration-v2";
import { i as ot, n as st, r as ct, t as lt } from "./y7ucor0DV.CfBpUtrB.mjs?v=20261116-migration-v2";
import { n as ut, r as dt } from "./CtRSYVoCz.DMPkOInB.mjs?v=20261116-migration-v2";
function ft(e, t) {
  for (; t; ) {
    let n = ht[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function pt(e) {
  let t = [];
  for (; e; ) {
    let n = ht[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function mt(e) {
  let t = pt(e);
  if (t) throw t;
}
var ht;
function gt() {
  return (gt = t(() => {
    (A(), (ht = { AYmst8Nt3: new L(() => import("./nNUQ3TYQL-0.DlHiVCOI.mjs?v=20261116-migration-v2")) }));
  }))();
}
function _t(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, B;
function Ot() {
  return (Ot = t(() => {
    (c(),
      A(),
      h(),
      i(),
      gt(),
      (vt = { lE8BLf3Ky: { hover: !0 }, V__PuOgYL: { hover: !0 } }),
      (yt = [`V__PuOgYL`, `lE8BLf3Ky`]),
      (bt = `framer-7vh7f`),
      (xt = { lE8BLf3Ky: `framer-v-1g48kq7`, V__PuOgYL: `framer-v-yrxjmw` }),
      (St = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ct = ({ value: e, children: t }) => {
        let n = a(p),
          i = e ?? n.transition,
          o = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ d(p.Provider, { value: o, children: t });
      }),
      (wt = { "Variant 1": `V__PuOgYL`, "Variant 2": `lE8BLf3Ky` }),
      (Tt = m.create(o)),
      (Et = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: wt[r.variant] ?? r.variant ?? `V__PuOgYL`,
      })),
      (Dt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (B = k(
        /* @__PURE__ */ u(function (e, t) {
          let r = s(null),
            i = t ?? r,
            a = n(),
            { activeLocale: c, contentLocale: l, setLocale: u } = me();
          ce();
          let { style: p, className: ee, layoutId: h, variant: g, ..._ } = Et(e),
            {
              baseVariant: ne,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: re,
              setVariant: w,
              variants: T,
            } = ie({
              cycleOrder: yt,
              defaultVariant: `V__PuOgYL`,
              enabledGestures: vt,
              ref: i,
              variant: g,
              variantClassNames: xt,
            }),
            D = Dt(e, T),
            k = O(bt);
          return (
            mt(c),
            /*#__PURE__*/ d(te, {
              id: h ?? a,
              children: /*#__PURE__*/ d(Tt, {
                animate: T,
                initial: !1,
                children: /*#__PURE__*/ d(Ct, {
                  value: St,
                  children: /*#__PURE__*/ f(m.div, {
                    ..._,
                    ...x,
                    className: O(k, `framer-yrxjmw`, ee, y),
                    "data-border": !0,
                    "data-framer-name": `Variant 1`,
                    layoutDependency: D,
                    layoutId: `V__PuOgYL`,
                    ref: i,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `rgb(166, 166, 166)`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `rgb(0, 0, 0)`,
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                      ...p,
                    },
                    variants: {
                      "lE8BLf3Ky-hover": { backgroundColor: `rgb(95, 95, 95)` },
                      "V__PuOgYL-hover": { backgroundColor: `rgba(0, 0, 0, 0.6)` },
                      lE8BLf3Ky: {
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                      },
                    },
                    ..._t({ lE8BLf3Ky: { "data-framer-name": `Variant 2` } }, ne, S),
                    children: [
                      /*#__PURE__*/ d(E, {
                        className: `framer-nas040`,
                        "data-framer-name": `Playstore`,
                        fill: `rgba(0,0,0,1)`,
                        intrinsicHeight: 24,
                        intrinsicWidth: 21,
                        layoutDependency: D,
                        layoutId: `VT_shIwon`,
                        svg: `<svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.80506 11.4617L0.0898438 22.0059C0.0907562 22.0078 0.0907561 22.0106 0.0916686 22.0125C0.390051 23.1574 1.41203 24 2.62564 24C3.11108 24 3.56641 23.8656 3.95695 23.6305L3.98798 23.6118L14.9232 17.1593L9.80506 11.4617Z" fill="#EA4335"/>
<path d="M19.6332 9.66619L19.624 9.65966L14.9029 6.86123L9.58398 11.7013L14.922 17.1582L19.6177 14.3878C20.4407 13.9324 21.0001 13.045 21.0001 12.0223C21.0001 11.0052 20.4489 10.1225 19.6332 9.66619Z" fill="#FBBC04"/>
<path d="M0.0894234 1.99331C0.0310244 2.21353 0 2.44494 0 2.68382V21.3163C0 21.5552 0.0310245 21.7866 0.0903359 22.0059L10.1386 11.7313L0.0894234 1.99331Z" fill="#4285F4"/>
<path d="M9.87715 11.9999L14.9049 6.85935L3.9825 0.383507C3.58557 0.139962 3.12203 -4.76837e-06 2.62655 -4.76837e-06C1.41295 -4.76837e-06 0.389138 0.844468 0.0907557 1.99034C0.0907557 1.99127 0.0898438 1.9922 0.0898438 1.99314L9.87715 11.9999Z" fill="#34A853"/>
</svg>
`,
                        withExternalLayout: !0,
                      }),
                      /*#__PURE__*/ f(m.div, {
                        className: `framer-5c02kg`,
                        "data-framer-name": `Content`,
                        layoutDependency: D,
                        layoutId: `UuwaP9Uj0`,
                        children: [
                          /*#__PURE__*/ d(v, {
                            __fromCanvasComponent: !0,
                            children:
                              ft(`v0`, l) ??
                              /*#__PURE__*/ d(o, {
                                children: /*#__PURE__*/ d(m.p, {
                                  dir: `auto`,
                                  style: { "--framer-font-size": `10px` },
                                  children: /*#__PURE__*/ d(m.span, {
                                    style: {
                                      "--font-selector": `R0Y7UHJvZHVjdCBTYW5zLXJlZ3VsYXI=`,
                                      "--framer-font-family": `Product Sans`,
                                      "--framer-font-size": `10px`,
                                      "--framer-font-style": `normal`,
                                      "--framer-font-variation-axes": `var(--extracted-1asg273, normal)`,
                                      "--framer-font-weight": `400`,
                                      "--framer-text-color": `var(--extracted-1w3ko1f, rgb(255, 255, 255))`,
                                      "--framer-text-transform": `uppercase`,
                                    },
                                    children: `立即下载`,
                                  }),
                                }),
                              }),
                            className: `framer-19jy8c0`,
                            "data-framer-name": `Subtext`,
                            fonts: [`GF;Product Sans-regular`],
                            layoutDependency: D,
                            layoutId: `RsXjXRqm6`,
                            style: {
                              "--extracted-1asg273": `normal`,
                              "--extracted-1w3ko1f": `rgb(255, 255, 255)`,
                              "--framer-paragraph-spacing": `0px`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ d(E, {
                            className: `framer-1rjrvw4`,
                            "data-framer-name": `path90`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 15,
                            intrinsicWidth: 74,
                            layoutDependency: D,
                            layoutId: `KrlDPYu9C`,
                            svg: `<svg width="74" height="15" viewBox="0 0 74 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M57.5181 11.4097H59.1469V0.398144H57.5181V11.4097ZM72.1888 4.36461L70.3217 9.13882H70.2658L68.328 4.36461H66.5735L69.4793 11.0371L67.8234 14.749H69.5212L74 4.36461H72.1888ZM62.9519 10.1588C62.4176 10.1588 61.6739 9.89019 61.6739 9.22338C61.6739 8.37424 62.6001 8.04833 63.4005 8.04833C64.1163 8.04833 64.4541 8.20424 64.8888 8.41652C64.7622 9.43655 63.892 10.1588 62.9519 10.1588ZM63.1483 4.12414C61.969 4.12414 60.7469 4.64825 60.2424 5.81009L61.6879 6.41876C61.9969 5.81009 62.5721 5.61102 63.1762 5.61102C64.0185 5.61102 64.8748 6.12103 64.8888 7.0283V7.14105C64.5938 6.97105 63.9627 6.71648 63.1902 6.71648C61.632 6.71648 60.0451 7.5806 60.0451 9.1952C60.0451 10.6689 61.323 11.6184 62.7546 11.6184C63.8501 11.6184 64.4541 11.1225 64.8329 10.5411H64.8888V11.3912H66.4609V7.16924C66.4609 5.21463 65.0154 4.12414 63.1483 4.12414ZM53.0821 5.70527H50.7655V1.93082H53.0821C54.2998 1.93082 54.9911 2.9482 54.9911 3.81761C54.9911 4.67115 54.2998 5.70527 53.0821 5.70527ZM53.0402 0.398144H49.1375V11.4097H50.7655V7.23795H53.0402C54.8453 7.23795 56.6199 5.91843 56.6199 3.81761C56.6199 1.71678 54.8453 0.398144 53.0402 0.398144ZM31.7583 10.1606C30.6332 10.1606 29.6913 9.21017 29.6913 7.90475C29.6913 6.58524 30.6332 5.61982 31.7583 5.61982C32.8695 5.61982 33.7406 6.58524 33.7406 7.90475C33.7406 9.21017 32.8695 10.1606 31.7583 10.1606ZM33.6289 4.98121H33.5722C33.2064 4.54166 32.5038 4.1444 31.6178 4.1444C29.7611 4.1444 28.0599 5.78983 28.0599 7.90475C28.0599 10.0047 29.7611 11.6369 31.6178 11.6369C32.5038 11.6369 33.2064 11.2396 33.5722 10.7851H33.6289V11.3251C33.6289 12.7582 32.8695 13.5246 31.6457 13.5246C30.6471 13.5246 30.0282 12.8005 29.7751 12.1901L28.3549 12.7864C28.7626 13.78 29.8458 15 31.6457 15C33.5582 15 35.1757 13.8646 35.1757 11.0978V4.37078H33.6289V4.98121ZM36.3008 11.4097H37.9323V0.397264H36.3008V11.4097ZM40.3362 7.77703C40.2943 6.32979 41.4474 5.59164 42.2766 5.59164C42.9243 5.59164 43.4725 5.91755 43.6549 6.38616L40.3362 7.77703ZM45.3989 6.52798C45.0899 5.69117 44.1472 4.1444 42.2208 4.1444C40.3083 4.1444 38.7196 5.6621 38.7196 7.89066C38.7196 9.9906 40.2943 11.6369 42.4032 11.6369C44.1053 11.6369 45.0899 10.5869 45.4976 9.97651L44.2319 9.12473C43.8103 9.74925 43.2333 10.1606 42.4032 10.1606C41.5739 10.1606 40.983 9.77744 40.6033 9.02607L45.5674 6.95343L45.3989 6.52798ZM5.8501 5.29391V6.88296H9.61836C9.50576 7.77703 9.21072 8.42974 8.76118 8.88337C8.21214 9.43743 7.35409 10.0479 5.8501 10.0479C3.52909 10.0479 1.71523 8.1602 1.71523 5.8189C1.71523 3.47672 3.52909 1.58993 5.8501 1.58993C7.10182 1.58993 8.01574 2.08673 8.69048 2.72535L9.80167 1.60403C8.85895 0.69587 7.6081 0 5.8501 0C2.67191 0 0 2.61172 0 5.8189C0 9.02607 2.67191 11.6369 5.8501 11.6369C7.56533 11.6369 8.85895 11.0688 9.8715 10.0047C10.9129 8.95472 11.2358 7.4793 11.2358 6.28663C11.2358 5.91755 11.2079 5.57754 11.1512 5.29391H5.8501ZM15.5208 10.1606C14.3957 10.1606 13.425 9.22426 13.425 7.89066C13.425 6.54207 14.3957 5.61982 15.5208 5.61982C16.6451 5.61982 17.6158 6.54207 17.6158 7.89066C17.6158 9.22426 16.6451 10.1606 15.5208 10.1606ZM15.5208 4.1444C13.4669 4.1444 11.7936 5.71936 11.7936 7.89066C11.7936 10.0479 13.4669 11.6369 15.5208 11.6369C17.5739 11.6369 19.2472 10.0479 19.2472 7.89066C19.2472 5.71936 17.5739 4.1444 15.5208 4.1444ZM23.65 10.1606C22.5249 10.1606 21.5542 9.22426 21.5542 7.89066C21.5542 6.54207 22.5249 5.61982 23.65 5.61982C24.7752 5.61982 25.745 6.54207 25.745 7.89066C25.745 9.22426 24.7752 10.1606 23.65 10.1606ZM23.65 4.1444C21.597 4.1444 19.9237 5.71936 19.9237 7.89066C19.9237 10.0479 21.597 11.6369 23.65 11.6369C25.7031 11.6369 27.3764 10.0479 27.3764 7.89066C27.3764 5.71936 25.7031 4.1444 23.65 4.1444Z" fill="white"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-7vh7f.framer-prprqq, .framer-7vh7f .framer-prprqq { display: block; }`,
          `.framer-7vh7f.framer-yrxjmw { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: 40px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 120px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-7vh7f .framer-nas040 { flex: none; height: 24px; position: relative; width: 21px; }`,
          `.framer-7vh7f .framer-5c02kg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-7vh7f .framer-19jy8c0 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 74px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-7vh7f .framer-1rjrvw4 { flex: none; height: 15px; position: relative; width: 74px; }`,
          `.framer-7vh7f.framer-v-1g48kq7.framer-yrxjmw { gap: 12px; height: min-content; padding: 10px 12px 10px 12px; width: min-content; will-change: unset; }`,
          `.framer-7vh7f.framer-v-1g48kq7.hover.framer-yrxjmw { will-change: unset; }`,
          `.framer-7vh7f[data-border="true"]::after, .framer-7vh7f [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-7vh7f`
      )),
      (B.displayName = `google play Store download button`),
      (B.defaultProps = { height: 40, width: 120 }),
      T(B, {
        variant: {
          options: [`V__PuOgYL`, `lE8BLf3Ky`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: I.Enum,
        },
      }),
      P(B, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }))();
}
function kt(e, t) {
  for (; t; ) {
    let n = Mt[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function At(e) {
  let t = [];
  for (; e; ) {
    let n = Mt[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function jt(e) {
  let t = At(e);
  if (t) throw t;
}
var Mt;
function Nt() {
  return (Nt = t(() => {
    (A(), (Mt = { AYmst8Nt3: new L(() => import("./Ub_8I4ZrZ-0.ErTN7wvR.mjs?v=20261116-migration-v2")) }));
  }))();
}
function Pt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, V;
function Gt() {
  return (Gt = t(() => {
    (c(),
      A(),
      h(),
      i(),
      Nt(),
      (Ft = { f9JNI6wqi: { hover: !0 }, travZ12K0: { hover: !0 } }),
      (It = [`f9JNI6wqi`, `travZ12K0`]),
      (Lt = `framer-u7t0C`),
      (Rt = { f9JNI6wqi: `framer-v-15vb9u`, travZ12K0: `framer-v-1et3k9x` }),
      (zt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Bt = ({ value: e, children: t }) => {
        let n = a(p),
          i = e ?? n.transition,
          o = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ d(p.Provider, { value: o, children: t });
      }),
      (Vt = { "Variant 1": `f9JNI6wqi`, "Variant 2": `travZ12K0` }),
      (Ht = m.create(o)),
      (Ut = ({ height: e, hover: t, id: n, width: r, ...i }) => ({
        ...i,
        FohZAC0KY: t ?? i.FohZAC0KY,
        variant: Vt[i.variant] ?? i.variant ?? `f9JNI6wqi`,
      })),
      (Wt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (V = k(
        /* @__PURE__ */ u(function (e, t) {
          let r = s(null),
            i = t ?? r,
            a = n(),
            { activeLocale: c, contentLocale: l, setLocale: u } = me();
          ce();
          let { style: p, className: ee, layoutId: h, variant: g, FohZAC0KY: _, ...ne } = Ut(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: re,
              setGestureState: w,
              setVariant: T,
              variants: D,
            } = ie({
              cycleOrder: It,
              defaultVariant: `f9JNI6wqi`,
              enabledGestures: Ft,
              ref: i,
              variant: g,
              variantClassNames: Rt,
            }),
            k = Wt(e, D),
            A = [],
            { activeVariantCallback: ae, delay: oe } = le(y),
            j = ae(async (...e) => {
              if ((w({ isHovered: !0 }), _ && (await _(...e)) === !1)) return !1;
            }),
            M = O(Lt, ...A);
          return (
            jt(c),
            /*#__PURE__*/ d(te, {
              id: h ?? a,
              children: /*#__PURE__*/ d(Ht, {
                animate: D,
                initial: !1,
                children: /*#__PURE__*/ d(Bt, {
                  value: zt,
                  children: /*#__PURE__*/ d(z, {
                    href: `https://apps.apple.com/us/app/tier0/id6780766946`,
                    motionChild: !0,
                    nodeId: `f9JNI6wqi`,
                    openInNewTab: !0,
                    scopeId: `Ub_8I4ZrZ`,
                    children: /*#__PURE__*/ f(m.a, {
                      ...ne,
                      ...S,
                      className: `${O(M, `framer-15vb9u`, ee, b)} framer-16z755g`,
                      "data-border": !0,
                      "data-framer-name": `Variant 1`,
                      "data-highlight": !0,
                      layoutDependency: k,
                      layoutId: `f9JNI6wqi`,
                      onMouseEnter: j,
                      ref: i,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `rgb(166, 166, 166)`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `rgb(0, 0, 0)`,
                        borderBottomLeftRadius: 6,
                        borderBottomRightRadius: 6,
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        ...p,
                      },
                      variants: {
                        "f9JNI6wqi-hover": { backgroundColor: `rgba(0, 0, 0, 0.6)` },
                        "travZ12K0-hover": {
                          "--border-color": `rgb(95, 95, 95)`,
                          backgroundColor: `rgb(95, 95, 95)`,
                        },
                        travZ12K0: {
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          borderTopLeftRadius: 0,
                          borderTopRightRadius: 0,
                        },
                      },
                      ...Pt({ travZ12K0: { "data-framer-name": `Variant 2` } }, y, C),
                      children: [
                        /*#__PURE__*/ d(E, {
                          className: `framer-13txov7`,
                          "data-framer-name": `Apple`,
                          fill: `rgba(0,0,0,1)`,
                          intrinsicHeight: 24,
                          intrinsicWidth: 20,
                          layoutDependency: k,
                          layoutId: `VAvvJq581`,
                          svg: `<svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.7045 12.7631C16.7166 11.8432 16.9669 10.9413 17.4321 10.1412C17.8972 9.34108 18.5621 8.66885 19.3648 8.18702C18.8548 7.47597 18.1821 6.89081 17.4 6.478C16.6178 6.0652 15.7479 5.83613 14.8592 5.80898C12.9635 5.61471 11.1258 6.91644 10.1598 6.91644C9.17506 6.91644 7.68776 5.82827 6.08616 5.86044C5.05021 5.89311 4.04059 6.18722 3.15568 6.7141C2.27077 7.24099 1.54075 7.98268 1.03674 8.86691C-1.14648 12.5573 0.482005 17.9809 2.57338 20.964C3.61975 22.4247 4.84264 24.0564 6.44279 23.9985C8.00863 23.9351 8.59344 23.0237 10.4835 23.0237C12.3561 23.0237 12.9048 23.9985 14.5374 23.9617C16.2176 23.9351 17.2762 22.4945 18.2859 21.02C19.0377 19.9792 19.6162 18.8288 20 17.6116C19.0238 17.2085 18.1908 16.5338 17.6048 15.6716C17.0187 14.8094 16.7056 13.7979 16.7045 12.7631Z" fill="white"/>
<path d="M13.6201 3.84713C14.5362 2.77343 14.9875 1.39335 14.8782 0C13.4786 0.143519 12.1857 0.796596 11.2572 1.82911C10.8033 2.33351 10.4556 2.92033 10.234 3.55601C10.0125 4.19168 9.92146 4.86375 9.96613 5.5338C10.6662 5.54084 11.3588 5.3927 11.9917 5.10054C12.6246 4.80838 13.1814 4.37982 13.6201 3.84713Z" fill="white"/>
</svg>
`,
                          withExternalLayout: !0,
                        }),
                        /*#__PURE__*/ f(m.div, {
                          className: `framer-1pfpmq8`,
                          "data-framer-name": `Content`,
                          layoutDependency: k,
                          layoutId: `FshsqfvYG`,
                          children: [
                            /*#__PURE__*/ d(v, {
                              __fromCanvasComponent: !0,
                              children:
                                kt(`v0`, l) ??
                                /*#__PURE__*/ d(o, {
                                  children: /*#__PURE__*/ d(m.p, {
                                    dir: `auto`,
                                    style: {
                                      "--framer-font-size": `9px`,
                                      "--framer-line-height": `9px`,
                                    },
                                    children: /*#__PURE__*/ d(m.span, {
                                      style: {
                                        "--font-selector": `R0Y7U0YgQ29tcGFjdCBUZXh0LTUwMA==`,
                                        "--framer-font-family": `SF Compact Text`,
                                        "--framer-font-size": `9px`,
                                        "--framer-font-style": `normal`,
                                        "--framer-font-variation-axes": `var(--extracted-1asg273, normal)`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `0px`,
                                        "--framer-text-color": `var(--extracted-1w3ko1f, rgb(255, 255, 255))`,
                                      },
                                      children: `⽴即下载：`,
                                    }),
                                  }),
                                }),
                              className: `framer-t2ni1u`,
                              "data-framer-name": `Download on the`,
                              fonts: [`GF;SF Compact Text-500`],
                              layoutDependency: k,
                              layoutId: `eS6W6oebs`,
                              style: {
                                "--extracted-1asg273": `normal`,
                                "--extracted-1w3ko1f": `rgb(255, 255, 255)`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              variants: {
                                "f9JNI6wqi-hover": {
                                  "--extracted-2gg91v": `normal`,
                                  "--extracted-r6o4lv": `var(--token-34c5fb56-6390-4c2b-978d-272b09eae243, rgb(239, 236, 224))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...Pt(
                                {
                                  "f9JNI6wqi-hover": {
                                    children:
                                      kt(`v1`, l) ??
                                      /*#__PURE__*/ d(o, {
                                        children: /*#__PURE__*/ d(m.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7U0YgQ29tcGFjdCBUZXh0LTUwMA==`,
                                            "--framer-font-family": `SF Compact Text`,
                                            "--framer-font-size": `9px`,
                                            "--framer-font-style": `normal`,
                                            "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `0px`,
                                            "--framer-line-height": `9px`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-34c5fb56-6390-4c2b-978d-272b09eae243, rgb(239, 236, 224)))`,
                                          },
                                          children: `⽴即下载：`,
                                        }),
                                      }),
                                  },
                                },
                                y,
                                C
                              ),
                            }),
                            /*#__PURE__*/ d(v, {
                              __fromCanvasComponent: !0,
                              children:
                                kt(`v2`, l) ??
                                /*#__PURE__*/ d(o, {
                                  children: /*#__PURE__*/ d(m.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7U0YgQ29tcGFjdCBEaXNwbGF5LTUwMA==`,
                                      "--framer-font-family": `"SF Compact Display", "SF Compact Display Placeholder", sans-serif`,
                                      "--framer-font-size": `17px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.44px`,
                                      "--framer-line-height": `100%`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                    },
                                    children: `App Store`,
                                  }),
                                }),
                              className: `framer-1w1dr5q`,
                              "data-framer-name": `App Store`,
                              fonts: [`GF;SF Compact Display-500`],
                              layoutDependency: k,
                              layoutId: `i3xDJvw15`,
                              style: {
                                "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              variants: {
                                "f9JNI6wqi-hover": {
                                  "--extracted-r6o4lv": `var(--token-34c5fb56-6390-4c2b-978d-272b09eae243, rgb(239, 236, 224))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...Pt(
                                {
                                  "f9JNI6wqi-hover": {
                                    children:
                                      kt(`v3`, l) ??
                                      /*#__PURE__*/ d(o, {
                                        children: /*#__PURE__*/ d(m.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7U0YgQ29tcGFjdCBEaXNwbGF5LTUwMA==`,
                                            "--framer-font-family": `"SF Compact Display", "SF Compact Display Placeholder", sans-serif`,
                                            "--framer-font-size": `18px`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `-0.47px`,
                                            "--framer-line-height": `100%`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-34c5fb56-6390-4c2b-978d-272b09eae243, rgb(239, 236, 224)))`,
                                          },
                                          children: `App Store`,
                                        }),
                                      }),
                                  },
                                },
                                y,
                                C
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-u7t0C.framer-16z755g, .framer-u7t0C .framer-16z755g { display: block; }`,
          `.framer-u7t0C.framer-15vb9u { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: 40px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 120px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-u7t0C .framer-13txov7 { flex: none; height: 24px; position: relative; width: 20px; }`,
          `.framer-u7t0C .framer-1pfpmq8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 78px; }`,
          `.framer-u7t0C .framer-t2ni1u { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 78px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-u7t0C .framer-1w1dr5q { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-u7t0C.framer-v-1et3k9x.framer-15vb9u { gap: 12px; height: min-content; padding: 10px 12px 10px 12px; width: min-content; will-change: unset; }`,
          `.framer-u7t0C.framer-v-1et3k9x.hover.framer-15vb9u { will-change: unset; }`,
          `.framer-u7t0C[data-border="true"]::after, .framer-u7t0C [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-u7t0C`
      )),
      (V.displayName = `App Store download button`),
      (V.defaultProps = { height: 40, width: 120 }),
      T(V, {
        variant: {
          options: [`f9JNI6wqi`, `travZ12K0`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: I.Enum,
        },
        FohZAC0KY: { title: `Hover`, type: I.EventHandler },
      }),
      P(V, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }))();
}
var Kt, qt, Jt;
function Yt() {
  return (Yt = t(() => {
    (A(),
      x.loadFonts([
        `GF;IBM Plex Sans-regular`,
        `GF;IBM Plex Sans-700`,
        `GF;IBM Plex Sans-700italic`,
        `GF;IBM Plex Sans-italic`,
      ]),
      (Kt = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `IBM Plex Sans`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `IBM Plex Sans`,
              url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `IBM Plex Sans`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `IBM Plex Sans`,
              url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `IBM Plex Sans`,
              source: `google`,
              style: `italic`,
              uiFamilyName: `IBM Plex Sans`,
              url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
              weight: `700`,
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
      ]),
      (qt = [
        `.framer-rKyc6 .framer-styles-preset-tdgg8r:not(.rich-text-wrapper), .framer-rKyc6 .framer-styles-preset-tdgg8r.rich-text-wrapper p { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.68px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #050b14; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-rKyc6 .framer-styles-preset-tdgg8r:not(.rich-text-wrapper), .framer-rKyc6 .framer-styles-preset-tdgg8r.rich-text-wrapper p { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.68px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #050b14; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-rKyc6 .framer-styles-preset-tdgg8r:not(.rich-text-wrapper), .framer-rKyc6 .framer-styles-preset-tdgg8r.rich-text-wrapper p { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.68px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #050b14; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; } }`,
      ]),
      (Jt = `framer-rKyc6`));
  }))();
}
function Xt(e, t) {
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
  return (en = t(() => {
    (A(), ($t = { AYmst8Nt3: new L(() => import("./W77Icma7x-0.CkTI_-P4.mjs?v=20261116-migration-v2")) }));
  }))();
}
function tn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, H;
function mn() {
  return (mn = t(() => {
    (c(),
      A(),
      h(),
      i(),
      Pe(),
      Yt(),
      en(),
      (nn = { BkCbFo4js: { hover: !0 } }),
      (rn = `framer-B8Fyv`),
      (an = { BkCbFo4js: `framer-v-1621yff` }),
      (on = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (sn = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (cn = ({ value: e, children: t }) => {
        let n = a(p),
          i = e ?? n.transition,
          o = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ d(p.Provider, { value: o, children: t });
      }),
      (ln = m.create(o)),
      (un = ({ bGFill: e, height: t, id: n, image: r, text: i, title: a, width: o, ...s }) => ({
        ...s,
        Li6nd1HLB: r ?? s.Li6nd1HLB,
        O0cyw2iEd: e ?? s.O0cyw2iEd ?? `rgb(247, 253, 232)`,
        Smm4wN8uF: i ?? s.Smm4wN8uF ?? `创建、分配、跟踪并关闭生产任务。`,
        W7R0w6U0f: a ?? s.W7R0w6U0f ?? `生产工单管理`,
      })),
      (dn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (fn = /*#__PURE__*/ u(function (e, t) {
        let r = s(null),
          i = t ?? r,
          a = n(),
          { activeLocale: c, contentLocale: l, setLocale: u } = me(),
          p = ce(),
          {
            style: ee,
            className: h,
            layoutId: g,
            variant: _,
            O0cyw2iEd: ne,
            W7R0w6U0f: y,
            Smm4wN8uF: b,
            Li6nd1HLB: x,
            ...S
          } = un(e),
          {
            baseVariant: C,
            classNames: re,
            clearLoadingGesture: T,
            gestureHandlers: E,
            gestureVariant: D,
            isLoading: k,
            setGestureState: A,
            setVariant: ae,
            variants: oe,
          } = ie({
            defaultVariant: `BkCbFo4js`,
            enabledGestures: nn,
            ref: i,
            variant: _,
            variantClassNames: an,
          }),
          j = dn(e, oe),
          M = O(rn, Jt, Le);
        return (
          Qt(c),
          /*#__PURE__*/ d(te, {
            id: g ?? a,
            children: /*#__PURE__*/ d(ln, {
              animate: oe,
              initial: !1,
              children: /*#__PURE__*/ d(cn, {
                value: on,
                children: /*#__PURE__*/ f(m.div, {
                  ...S,
                  ...E,
                  className: O(M, `framer-1621yff`, h, re),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: j,
                  layoutId: `BkCbFo4js`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `0px`,
                    "--border-color": `rgba(0, 0, 0, 0)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    backgroundColor: ne,
                    ...ee,
                  },
                  variants: {
                    "BkCbFo4js-hover": {
                      "--border-bottom-width": `2px`,
                      "--border-color": `var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29))`,
                      "--border-left-width": `2px`,
                      "--border-right-width": `2px`,
                      "--border-style": `solid`,
                      "--border-top-width": `2px`,
                    },
                  },
                  ...tn({ "BkCbFo4js-hover": { "data-border": !0 } }, C, D),
                  children: [
                    /*#__PURE__*/ d(v, {
                      __fromCanvasComponent: !0,
                      children:
                        Xt(`v0`, l) ??
                        /*#__PURE__*/ d(o, {
                          children: /*#__PURE__*/ d(m.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                              "--framer-font-family": `"IBM Plex Mono", "IBM Plex Mono Placeholder", monospace`,
                              "--framer-font-size": `12px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `1.76px`,
                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(115, 178, 0))`,
                              "--framer-text-transform": `uppercase`,
                            },
                            children: `■`,
                          }),
                        }),
                      className: `framer-r5i0ru`,
                      "data-framer-name": `■`,
                      fonts: [`GF;IBM Plex Mono-500`],
                      layoutDependency: j,
                      layoutId: `nZQOpaNVO`,
                      style: {
                        "--extracted-r6o4lv": `rgb(115, 178, 0)`,
                        "--framer-paragraph-spacing": `0px`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    /*#__PURE__*/ f(m.div, {
                      className: `framer-12ca4uj`,
                      "data-framer-name": `Frame 2147224443`,
                      layoutDependency: j,
                      layoutId: `e0XDKE60t`,
                      children: [
                        /*#__PURE__*/ f(m.div, {
                          className: `framer-rq83s9`,
                          layoutDependency: j,
                          layoutId: `JtbNtKuZ0`,
                          children: [
                            /*#__PURE__*/ d(v, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ d(o, {
                                children: /*#__PURE__*/ d(m.p, {
                                  className: `framer-styles-preset-tdgg8r`,
                                  "data-styles-preset": `mVGJjW56C`,
                                  dir: `auto`,
                                  children: `生产工单管理`,
                                }),
                              }),
                              className: `framer-1mghtw3`,
                              "data-framer-name": `生产工单管理`,
                              fonts: [`Inter`],
                              layoutDependency: j,
                              layoutId: `gNfGfiiTP`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              text: y,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ d(v, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ d(o, {
                                children: /*#__PURE__*/ d(m.p, {
                                  className: `framer-styles-preset-1ful33y`,
                                  "data-styles-preset": `HNigw6pHS`,
                                  dir: `auto`,
                                  children: `创建、分派、跟踪并完成生产任务。`,
                                }),
                              }),
                              className: `framer-71fkhi`,
                              "data-framer-name": `Tier0 Notebook gives engineers and analysts a powe`,
                              fonts: [`Inter`],
                              layoutDependency: j,
                              layoutId: `VU9GETezI`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              text: b,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        /*#__PURE__*/ d(N, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: w((p?.y || 0) + 310.5),
                            sizes: `calc(${p?.width || `100vw`} - 32px)`,
                            ...sn(x),
                          },
                          className: `framer-1g8dtf5`,
                          "data-border": !0,
                          "data-framer-name": `ba940ebb3a0b19c26aea4802050ff049 1`,
                          fitImageDimension: `height`,
                          layoutDependency: j,
                          layoutId: `xm9FtKd_B`,
                          style: {
                            "--border-bottom-width": `0.36721405386924744px`,
                            "--border-color": `rgb(229, 231, 235)`,
                            "--border-left-width": `0.36721405386924744px`,
                            "--border-right-width": `0.36721405386924744px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0.36721405386924744px`,
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      })),
      (pn = [
        `.framer-B8Fyv.framer-1y1064d, .framer-B8Fyv .framer-1y1064d { display: block; }`,
        `.framer-B8Fyv.framer-1621yff { align-content: flex-start; align-items: flex-start; cursor: default; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 16px 16px 24px 16px; position: relative; width: 390px; }`,
        `.framer-B8Fyv .framer-r5i0ru { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 357px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-B8Fyv .framer-12ca4uj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-B8Fyv .framer-rq83s9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-B8Fyv .framer-1mghtw3 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-B8Fyv .framer-71fkhi { flex: none; height: 53px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-B8Fyv .framer-1g8dtf5 { flex: none; height: auto; position: relative; width: 100%; }`,
        ...qt,
        ...Fe,
        `.framer-B8Fyv[data-border="true"]::after, .framer-B8Fyv [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (H = k(fn, pn, `framer-B8Fyv`)),
      (H.displayName = `TEMPLATE LIBRARY`),
      (H.defaultProps = { height: 539, width: 390 }),
      T(H, {
        O0cyw2iEd: { defaultValue: `rgb(247, 253, 232)`, title: `BG Fill`, type: I.Color },
        W7R0w6U0f: {
          defaultValue: `生产工单管理`,
          displayTextArea: !1,
          title: `Title`,
          type: I.String,
        },
        onW7R0w6U0fChange: { changes: `W7R0w6U0f`, type: I.ChangeHandler },
        Smm4wN8uF: {
          defaultValue: `创建、分配、跟踪并关闭生产任务。`,
          displayTextArea: !1,
          title: `Text`,
          type: I.String,
        },
        onSmm4wN8uFChange: { changes: `Smm4wN8uF`, type: I.ChangeHandler },
        Li6nd1HLB: { title: `Image`, type: I.ResponsiveImage },
      }),
      P(
        H,
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
                weight: `500`,
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
            ],
          },
          ...S(Kt),
          ...S(Ie),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var hn = /* @__PURE__ */ e({ __FramerMetadata__: () => _n, v0: () => gn }),
  gn,
  _n;
function vn() {
  return (vn = t(() => {
    (c(),
      h(),
      i(),
      (gn = /*#__PURE__*/ d(o, {
        children: /*#__PURE__*/ d(m.p, {
          className: `framer-styles-preset-81u0hx`,
          "data-styles-preset": `IIMP8Vr9g`,
          dir: `auto`,
          children: `3D资产建模`,
        }),
      })),
      (_n = {
        exports: {
          v0: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
function yn(e, t) {
  for (; t; ) {
    let n = bn[t.id];
    if (n) {
      let t = n[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
var bn;
function xn() {
  return (xn = t(() => {
    (vn(), (bn = { AYmst8Nt3: hn }));
  }))();
}
function Sn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, U;
function Pn() {
  return (Pn = t(() => {
    (c(),
      A(),
      h(),
      i(),
      Re(),
      nt(),
      xn(),
      (Cn = [`PvenT0IVh`, `lsliBswyr`]),
      (wn = `framer-N1hmL`),
      (Tn = { lsliBswyr: `framer-v-pom0s9`, PvenT0IVh: `framer-v-h0sngw` }),
      (En = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Dn = ({ value: e, children: t }) => {
        let n = a(p),
          i = e ?? n.transition,
          o = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ d(p.Provider, { value: o, children: t });
      }),
      (On = { "Variant 1": `PvenT0IVh`, "Variant 2": `lsliBswyr` }),
      (kn = m.create(o)),
      (An = ({ click: e, content: t, height: n, id: r, title: i, width: a, ...o }) => ({
        ...o,
        EsEDiq4IK: t ?? o.EsEDiq4IK ?? `轻松构建 3D 资产模型`,
        oH02PZssK: i ?? o.oH02PZssK ?? `资产绩效管理`,
        r1OFycncu: e ?? o.r1OFycncu,
        variant: On[o.variant] ?? o.variant ?? `PvenT0IVh`,
      })),
      (jn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Mn = /*#__PURE__*/ u(function (e, t) {
        let r = s(null),
          i = t ?? r,
          a = n(),
          { activeLocale: c, setLocale: l } = me();
        ce();
        let {
            style: u,
            className: p,
            layoutId: ee,
            variant: h,
            r1OFycncu: g,
            oH02PZssK: _,
            EsEDiq4IK: ne,
            ...y
          } = An(e),
          {
            baseVariant: b,
            classNames: x,
            clearLoadingGesture: S,
            gestureHandlers: C,
            gestureVariant: re,
            isLoading: w,
            setGestureState: T,
            setVariant: E,
            variants: D,
          } = ie({
            cycleOrder: Cn,
            defaultVariant: `PvenT0IVh`,
            ref: i,
            variant: h,
            variantClassNames: Tn,
          }),
          k = jn(e, D),
          { activeVariantCallback: A, delay: ae } = le(b),
          oe = A(async (...e) => {
            if ((T({ isPressed: !1 }), g && (await g(...e)) === !1)) return !1;
            E(`lsliBswyr`);
          }),
          j = A(async (...e) => {
            if ((T({ isPressed: !1 }), g && (await g(...e)) === !1)) return !1;
            E(`PvenT0IVh`);
          }),
          M = O(wn, at, Ve),
          se = () => b === `lsliBswyr`;
        return /*#__PURE__*/ d(te, {
          id: ee ?? a,
          children: /*#__PURE__*/ d(kn, {
            animate: D,
            initial: !1,
            children: /*#__PURE__*/ d(Dn, {
              value: En,
              children: /*#__PURE__*/ f(m.div, {
                ...y,
                ...C,
                className: O(M, `framer-h0sngw`, p, x),
                "data-border": !0,
                "data-framer-name": `Variant 1`,
                "data-highlight": !0,
                layoutDependency: k,
                layoutId: `PvenT0IVh`,
                onTap: oe,
                ref: i,
                style: {
                  "--border-bottom-width": `1px`,
                  "--border-color": `rgba(34, 34, 34, 0.1)`,
                  "--border-left-width": `0px`,
                  "--border-right-width": `0px`,
                  "--border-style": `solid`,
                  "--border-top-width": `0px`,
                  ...u,
                },
                ...Sn({ lsliBswyr: { "data-framer-name": `Variant 2`, onTap: j } }, b, re),
                children: [
                  /*#__PURE__*/ f(m.div, {
                    className: `framer-az1i87`,
                    layoutDependency: k,
                    layoutId: `ip2UQTUoY`,
                    children: [
                      /*#__PURE__*/ d(v, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ d(o, {
                          children: /*#__PURE__*/ d(m.h5, {
                            className: `framer-styles-preset-1w18jws`,
                            "data-styles-preset": `v3uIGOLZQ`,
                            dir: `auto`,
                            style: { "--framer-text-alignment": `start` },
                            children: `资产绩效管理`,
                          }),
                        }),
                        className: `framer-uixon2`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `gn3LrlZXR`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        text: _,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      se() &&
                        /*#__PURE__*/ d(v, {
                          __fromCanvasComponent: !0,
                          children:
                            yn(`v0`, c) ??
                            /*#__PURE__*/ d(o, {
                              children: /*#__PURE__*/ d(m.p, {
                                className: `framer-styles-preset-81u0hx`,
                                "data-styles-preset": `IIMP8Vr9g`,
                                dir: `auto`,
                                children: `轻松构建 3D 资产模型`,
                              }),
                            }),
                          className: `framer-k51c78`,
                          fonts: [`Inter`],
                          layoutDependency: k,
                          layoutId: `ShDCvmQt9`,
                          style: { "--framer-paragraph-spacing": `0px` },
                          text: ne,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                    ],
                  }),
                  /*#__PURE__*/ f(m.div, {
                    className: `framer-1d0b3cd`,
                    "data-framer-name": `Icon`,
                    layoutDependency: k,
                    layoutId: `qnH48oTpj`,
                    style: { rotate: 0 },
                    variants: { lsliBswyr: { rotate: 45 } },
                    children: [
                      /*#__PURE__*/ d(m.div, {
                        className: `framer-wrvrxp`,
                        layoutDependency: k,
                        layoutId: `oXHQziGu5`,
                        style: {
                          backgroundColor: `var(--token-20d2fcb2-0461-4276-8cb7-bceba71c36c9, rgb(5, 11, 20))`,
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                      }),
                      /*#__PURE__*/ d(m.div, {
                        className: `framer-1hs1tmd`,
                        layoutDependency: k,
                        layoutId: `lgoFBtPEB`,
                        style: {
                          backgroundColor: `var(--token-20d2fcb2-0461-4276-8cb7-bceba71c36c9, rgb(5, 11, 20))`,
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (Nn = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-N1hmL.framer-9ctk6p, .framer-N1hmL .framer-9ctk6p { display: block; }`,
        `.framer-N1hmL.framer-h0sngw { -webkit-user-select: none; align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px 0px 20px 0px; position: relative; user-select: none; width: 800px; }`,
        `.framer-N1hmL .framer-az1i87 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-N1hmL .framer-uixon2 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-N1hmL .framer-k51c78 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-N1hmL .framer-1d0b3cd { flex: none; height: 16px; overflow: visible; position: relative; width: 16px; z-index: 1; }`,
        `.framer-N1hmL .framer-wrvrxp { flex: none; height: 2px; left: calc(50.00000000000002% - 16px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 2px / 2); width: 16px; }`,
        `.framer-N1hmL .framer-1hs1tmd { flex: none; height: 16px; left: calc(50.00000000000002% - 2px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 16px / 2); width: 2px; }`,
        ...rt,
        ...ze,
        `.framer-N1hmL[data-border="true"]::after, .framer-N1hmL [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (U = k(Mn, Nn, `framer-N1hmL`)),
      (U.displayName = `FAQ`),
      (U.defaultProps = { height: 68, width: 800 }),
      T(U, {
        variant: {
          options: [`PvenT0IVh`, `lsliBswyr`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: I.Enum,
        },
        r1OFycncu: { title: `Click`, type: I.EventHandler },
        oH02PZssK: {
          defaultValue: `资产绩效管理`,
          displayTextArea: !1,
          title: `Title`,
          type: I.String,
        },
        onoH02PZssKChange: { changes: `oH02PZssK`, type: I.ChangeHandler },
        EsEDiq4IK: {
          defaultValue: `轻松构建 3D 资产模型`,
          displayTextArea: !1,
          title: `Content`,
          type: I.String,
        },
        onEsEDiq4IKChange: { changes: `EsEDiq4IK`, type: I.ChangeHandler },
      }),
      P(
        U,
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
          ...S(it),
          ...S(Be),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var Fn, In, Ln;
function Rn() {
  return (Rn = t(() => {
    (A(),
      x.loadFonts([]),
      (Fn = [{ explicitInter: !0, fonts: [] }]),
      (In = [
        `.framer-oMHYG .framer-styles-preset-t63cx9:not(.rich-text-wrapper), .framer-oMHYG .framer-styles-preset-t63cx9.rich-text-wrapper a { --framer-link-current-text-color: #111111; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, #73b200); --framer-link-hover-text-decoration: underline; --framer-link-text-color: #18191a; --framer-link-text-decoration: underline; }`,
      ]),
      (Ln = `framer-oMHYG`));
  }))();
}
function W(e, t) {
  for (; t; ) {
    let n = Vn[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function zn(e) {
  let t = [];
  for (; e; ) {
    let n = Vn[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function Bn(e) {
  let t = zn(e);
  if (t) throw t;
}
var Vn;
function Hn() {
  return (Hn = t(() => {
    (A(), (Vn = { AYmst8Nt3: new L(() => import("./CtRSYVoCz-0.BiRqVQM9.mjs?v=20261116-migration-v2")) }));
  }))();
}
var Un,
  Wn,
  Gn,
  Kn,
  G,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  K,
  sr,
  cr,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  $,
  br;
function xr() {
  return (xr = t(() => {
    (c(),
      A(),
      h(),
      i(),
      ge(),
      ve(),
      Ce(),
      Ot(),
      Ke(),
      Gt(),
      Ee(),
      mn(),
      Pn(),
      De(),
      Ae(),
      Pe(),
      Yt(),
      Rn(),
      xe(),
      Qe(),
      He(),
      Je(),
      ot(),
      Hn(),
      ut(),
      (Un = j(ke)),
      (Wn = j(be)),
      (Gn = j(_e)),
      (Kn = ne(m.div)),
      (G = re(m.div)),
      (qn = j(H)),
      (Jn = j(V)),
      (Yn = j(B)),
      (Xn = j(U)),
      (Zn = j(qe)),
      (Qn = j(ye)),
      ($n = ae(m.div)),
      (er = j(Oe)),
      (tr = { AWbm_hOo0: `(min-width: 1440px)`, fUotBm3xr: `(max-width: 1439.98px)` }),
      (nr = () => typeof document < `u`),
      (rr = []),
      (ir = `framer-czRYb`),
      (ar = { AWbm_hOo0: `framer-v-13honlf`, fUotBm3xr: `framer-v-7buxd7` }),
      (or = (e, t, n) => (e && t ? `position` : n)),
      (K = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (sr = {
        effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 10 },
        repeat: !1,
        startDelay: 0,
        tokenization: `word`,
        transition: { bounce: 0, delay: 0.075, duration: 0.4, type: `spring` },
        trigger: `onMount`,
        type: `appear`,
      }),
      (cr = (e, t) => `translate(-50%, -50%) ${t}`),
      (q = {
        effect: {
          filter: `blur(10px)`,
          opacity: 0.001,
          rotate: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          x: 0,
          y: 10,
        },
        tokenization: `word`,
        transition: { bounce: 0, delay: 0.05, duration: 0.4, type: `spring` },
        trigger: `onMount`,
        type: `appear`,
      }),
      (J = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 150,
      }),
      (Y = { bounce: 0.3, delay: 0, duration: 0.6, type: `spring` }),
      (X = {
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
      (Z = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Q = (e, t) => {
        if (e && typeof e == `object`) return { ...e, alt: t };
      }),
      (lr = { delay: 0, duration: 0.6, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (ur = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Z,
        x: 0,
        y: 0,
      }),
      (dr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Z,
        x: 0,
        y: 0,
      }),
      (fr = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
        let [i, a] = D({ blockDocumentScrolling: t, dismissWithEsc: r && n });
        return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
      }),
      (pr = {
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
      (mr = {
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
      (hr = { Desktop: `AWbm_hOo0`, Phone: `fUotBm3xr` }),
      (gr = ({ value: e }) =>
        oe()
          ? null
          : /*#__PURE__*/ d(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (_r = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: hr[r.variant] ?? r.variant ?? `AWbm_hOo0`,
      })),
      (vr = /*#__PURE__*/ u(function (e, t) {
        let i = s(null),
          c = t ?? i;
        n();
        let { activeLocale: u, contentLocale: h, setLocale: ne } = me(),
          x = ce(),
          { style: S, className: C, layoutId: re, variant: T, ...ie } = _r(e),
          D = r(() => dt({}, h), [h]);
        b(D);
        let [k, A] = se(T, tr, !1),
          ae = O(ir, Le, Ze, Te, Ne, Jt, Ge, tt, Ln, lt),
          oe = a(fe)?.isLayoutTemplate,
          j = !!a(p)?.transition?.layout,
          P = or(oe, j);
        (Bn(u), ue());
        let de = _(`VFNRg9rWr`),
          I = s(null),
          L = () => !nr() || k !== `fUotBm3xr`,
          { activeVariantCallback: ge, delay: ve } = le(void 0),
          xe = ({ overlay: e }) =>
            ge(async (...t) => {
              e.show();
            }),
          Se = s(null),
          Ce = s(null),
          we = () => !nr() || k === `fUotBm3xr`;
        return (
          he({}),
          /*#__PURE__*/ d(fe.Provider, {
            value: {
              activeVariantId: k,
              humanReadableVariantMap: hr,
              primaryVariantId: `AWbm_hOo0`,
              variantClassNames: ar,
            },
            children: /*#__PURE__*/ f(te, {
              id: re ?? `CtRSYVoCz`,
              children: [
                /*#__PURE__*/ d(gr, {
                  value: `html body { background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ f(m.div, {
                  ...ie,
                  className: O(ae, `framer-13honlf`, C),
                  ref: c,
                  style: { ...S },
                  children: [
                    /*#__PURE__*/ d(M, {
                      height: 64,
                      width: `100vw`,
                      y: 0,
                      children: /*#__PURE__*/ d(F, {
                        className: `framer-tt9dlk-container`,
                        layout: P,
                        layoutScroll: !0,
                        nodeId: `WsLCdYeQ4`,
                        scopeId: `CtRSYVoCz`,
                        children: /*#__PURE__*/ d(R, {
                          breakpoint: k,
                          overrides: { fUotBm3xr: { variant: K(`Svy4sINhA`) } },
                          children: /*#__PURE__*/ d(ke, {
                            eVOFjxm0w: `var(--token-fcaa307f-078f-4ea1-af34-d51bb82ca05a, rgba(255, 255, 255, 0))`,
                            height: `100%`,
                            id: `WsLCdYeQ4`,
                            jQcddTFoz: !0,
                            layoutId: `WsLCdYeQ4`,
                            style: { width: `100%` },
                            variant: K(`LbFcBhD3w`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ f(m.div, {
                      className: `framer-mkxwe1`,
                      layout: P,
                      children: [
                        /*#__PURE__*/ d(`div`, {
                          className: `framer-kb8pl8`,
                          children: /*#__PURE__*/ f(`div`, {
                            className: `framer-u4br28`,
                            "data-framer-name": `Main Content`,
                            children: [
                              /*#__PURE__*/ f(`div`, {
                                className: `framer-11j87l8`,
                                "data-framer-name": `Section`,
                                children: [
                                  /*#__PURE__*/ f(`div`, {
                                    className: `framer-20vkr0`,
                                    "data-framer-name": `Container`,
                                    children: [
                                      /*#__PURE__*/ d(`div`, {
                                        className: `framer-qe68w1`,
                                        "data-framer-name": `Frame 2147223942`,
                                        children: /*#__PURE__*/ f(`div`, {
                                          className: `framer-12ridt5`,
                                          "data-framer-name": `Heading 1`,
                                          children: [
                                            /*#__PURE__*/ d(`div`, {
                                              className: `framer-14ytzy6`,
                                              children: /*#__PURE__*/ d(R, {
                                                breakpoint: k,
                                                overrides: {
                                                  fUotBm3xr: {
                                                    children:
                                                      W(`v1`, h) ??
                                                      /*#__PURE__*/ d(o, {
                                                        children: /*#__PURE__*/ f(`h1`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `38px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `500`,
                                                            "--framer-letter-spacing": `-0.04em`,
                                                            "--framer-line-height": `1.4em`,
                                                            "--framer-text-alignment": `center`,
                                                            "--framer-text-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                                          },
                                                          children: [
                                                            /*#__PURE__*/ f(`span`, {
                                                              style: {
                                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                              },
                                                              children: [
                                                                `无需购买现成工厂软件。`,
                                                                /*#__PURE__*/ d(`br`, {}),
                                                              ],
                                                            }),
                                                            `利用 AI 打造`,
                                                            /*#__PURE__*/ d(`br`, {}),
                                                            `专属您的定制化方案。`,
                                                          ],
                                                        }),
                                                      }),
                                                  },
                                                },
                                                children: /*#__PURE__*/ d(v, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    W(`v0`, h) ??
                                                    /*#__PURE__*/ d(o, {
                                                      children: /*#__PURE__*/ f(`h1`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `45px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `500`,
                                                          "--framer-letter-spacing": `-0.04em`,
                                                          "--framer-line-height": `1.4em`,
                                                          "--framer-text-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                                        },
                                                        children: [
                                                          /*#__PURE__*/ f(`span`, {
                                                            style: {
                                                              "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                            },
                                                            children: [
                                                              `无需购买现成工厂软件。`,
                                                              /*#__PURE__*/ d(`br`, {}),
                                                            ],
                                                          }),
                                                          `利用 AI 打造`,
                                                          /*#__PURE__*/ d(`br`, {}),
                                                          `专属您的定制化方案。`,
                                                        ],
                                                      }),
                                                    }),
                                                  className: `framer-3cp2rv`,
                                                  "data-framer-name": `Advanced Analytics on Contextualized Industrial Da`,
                                                  effect: sr,
                                                  fonts: [`GF;IBM Plex Sans-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            }),
                                            /*#__PURE__*/ d(R, {
                                              breakpoint: k,
                                              overrides: {
                                                fUotBm3xr: {
                                                  children:
                                                    W(`v3`, h) ??
                                                    /*#__PURE__*/ d(o, {
                                                      children: /*#__PURE__*/ d(`p`, {
                                                        className: `framer-styles-preset-1ful33y`,
                                                        "data-styles-preset": `HNigw6pHS`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-alignment": `center`,
                                                        },
                                                        children: `描述你的工作流程，即可生成量身定制、开箱即用的应用——数据、权限、部署及 Web 与移动端访问均已内置。`,
                                                      }),
                                                    }),
                                                },
                                              },
                                              children: /*#__PURE__*/ d(v, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  W(`v2`, h) ??
                                                  /*#__PURE__*/ d(o, {
                                                    children: /*#__PURE__*/ d(`p`, {
                                                      className: `framer-styles-preset-1ful33y`,
                                                      "data-styles-preset": `HNigw6pHS`,
                                                      dir: `auto`,
                                                      style: { "--framer-text-alignment": `left` },
                                                      children: `描述你的工作流程，即可生成量身定制、开箱即用的应用——数据、权限、部署及 Web 与移动端访问均已内置。`,
                                                    }),
                                                  }),
                                                className: `framer-zxzkt5`,
                                                "data-framer-name": `Tier0 Notebook gives engineers and analysts a powe`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      /*#__PURE__*/ f(`div`, {
                                        className: `framer-gqb3kf`,
                                        children: [
                                          /*#__PURE__*/ f(`div`, {
                                            className: `framer-oht4gk`,
                                            children: [
                                              /*#__PURE__*/ d(R, {
                                                breakpoint: k,
                                                overrides: {
                                                  fUotBm3xr: {
                                                    height: 46,
                                                    y: (x?.y || 0) + 366.95,
                                                  },
                                                },
                                                children: /*#__PURE__*/ d(M, {
                                                  height: 72,
                                                  y: (x?.y || 0) + 412.75,
                                                  children: /*#__PURE__*/ d(F, {
                                                    className: `framer-1e2b9zv-container`,
                                                    nodeId: `ebEzEar_R`,
                                                    scopeId: `CtRSYVoCz`,
                                                    children: /*#__PURE__*/ d(R, {
                                                      breakpoint: k,
                                                      overrides: {
                                                        fUotBm3xr: { style: { height: `100%` } },
                                                      },
                                                      children: /*#__PURE__*/ d(be, {
                                                        cbli7Ddg7: W(`v4`, h) ?? `免费开始构建 ↗`,
                                                        dCs2qxPaP: {
                                                          borderColor: `rgba(0, 0, 0, 0)`,
                                                          borderStyle: `solid`,
                                                          borderWidth: 1,
                                                        },
                                                        height: `100%`,
                                                        id: `ebEzEar_R`,
                                                        layoutId: `ebEzEar_R`,
                                                        OgTXozm2X: `rgb(231, 249, 185)`,
                                                        Ps_isqKXP: `var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29))`,
                                                        rQoqqyQEX: `rgb(178, 237, 29)`,
                                                        V8jenVZfv: `rgb(0, 0, 0)`,
                                                        variant: K(`I3xk_f4ia`),
                                                        width: `100%`,
                                                        WNF2s4XjK: `https://tier0.cn/login`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              /*#__PURE__*/ d(y, {
                                                links: [
                                                  {
                                                    href: {
                                                      hash: `:VFNRg9rWr`,
                                                      webPageId: `CtRSYVoCz`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                  {
                                                    href: {
                                                      hash: `:VFNRg9rWr`,
                                                      webPageId: `CtRSYVoCz`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                ],
                                                children: (e) =>
                                                  /*#__PURE__*/ d(R, {
                                                    breakpoint: k,
                                                    overrides: {
                                                      fUotBm3xr: {
                                                        height: 46,
                                                        y: (x?.y || 0) + 422.95,
                                                      },
                                                    },
                                                    children: /*#__PURE__*/ d(M, {
                                                      height: 56,
                                                      y: (x?.y || 0) + 420.75,
                                                      children: /*#__PURE__*/ d(F, {
                                                        className: `framer-120kh18-container`,
                                                        nodeId: `SPrPQJyu8`,
                                                        scopeId: `CtRSYVoCz`,
                                                        children: /*#__PURE__*/ d(R, {
                                                          breakpoint: k,
                                                          overrides: {
                                                            fUotBm3xr: { WNF2s4XjK: e[1] },
                                                          },
                                                          children: /*#__PURE__*/ d(be, {
                                                            cbli7Ddg7: W(`v5`, h) ?? `探索应用模板`,
                                                            dCs2qxPaP: {
                                                              borderColor: `var(--token-70c6dee2-5081-48f3-abdb-0a5ef8f6900b, rgb(195, 196, 197))`,
                                                              borderStyle: `solid`,
                                                              borderWidth: 1,
                                                            },
                                                            height: `100%`,
                                                            id: `SPrPQJyu8`,
                                                            layoutId: `SPrPQJyu8`,
                                                            OgTXozm2X: `rgb(231, 249, 185)`,
                                                            Ps_isqKXP: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                                            rQoqqyQEX: `rgb(178, 237, 29)`,
                                                            style: { height: `100%` },
                                                            V8jenVZfv: `rgb(0, 0, 0)`,
                                                            variant: K(`I3xk_f4ia`),
                                                            width: `100%`,
                                                            WNF2s4XjK: e[0],
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ d(`div`, {
                                            className: `framer-va6zvy`,
                                            "data-border": !0,
                                            children: /*#__PURE__*/ d(R, {
                                              breakpoint: k,
                                              overrides: {
                                                fUotBm3xr: {
                                                  children:
                                                    W(`v7`, h) ??
                                                    /*#__PURE__*/ d(o, {
                                                      children: /*#__PURE__*/ d(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy0zMDA=`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `14px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `300`,
                                                          "--framer-line-height": `1.4em`,
                                                          "--framer-text-alignment": `center`,
                                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                        },
                                                        children: `注册即享 250 免费积分，立刻上线你的第一个工业应用。`,
                                                      }),
                                                    }),
                                                  fonts: [`GF;IBM Plex Sans-300`],
                                                },
                                              },
                                              children: /*#__PURE__*/ d(v, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  W(`v6`, h) ??
                                                  /*#__PURE__*/ d(o, {
                                                    children: /*#__PURE__*/ d(`p`, {
                                                      className: `framer-styles-preset-1ogycj`,
                                                      "data-styles-preset": `Y65iag5vt`,
                                                      dir: `auto`,
                                                      style: { "--framer-text-alignment": `left` },
                                                      children: `注册即享 250 免费积分，立刻上线你的第一个工业应用。`,
                                                    }),
                                                  }),
                                                className: `framer-1jxhf9e`,
                                                "data-framer-name": `Tier0 Notebook gives engineers and analysts a powe`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ d(M, {
                                    children: /*#__PURE__*/ d(F, {
                                      className: `framer-1i3s9wx-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      nodeId: `raYQrpxlA`,
                                      scopeId: `CtRSYVoCz`,
                                      children: /*#__PURE__*/ d(R, {
                                        breakpoint: k,
                                        overrides: {
                                          fUotBm3xr: {
                                            controls: !0,
                                            playing: !1,
                                            poster: `../../assets/images/xRyJ5RwN71MCuAHapjmdmAgbxg.png`,
                                          },
                                        },
                                        children: /*#__PURE__*/ d(_e, {
                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                          borderRadius: 6,
                                          bottomLeftRadius: 6,
                                          bottomRightRadius: 6,
                                          controls: !1,
                                          height: `100%`,
                                          id: `raYQrpxlA`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `raYQrpxlA`,
                                          loop: !0,
                                          muted: !0,
                                          objectFit: `cover`,
                                          playing: !0,
                                          posterEnabled: !0,
                                          srcFile: `/assets/videos/app-builder-hero.mp4`,
                                          srcType: `Upload`,
                                          srcUrl:
                                            W(`v8`, h) ??
                                            `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                          startTime: 0,
                                          style: { height: `100%`, width: `100%` },
                                          topLeftRadius: 6,
                                          topRightRadius: 6,
                                          volume: 25,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ f(Kn, {
                                className: `framer-xcl6gu`,
                                "data-border": !0,
                                tickerEffectAlign: `center`,
                                tickerEffectDirectionModifier: `default`,
                                tickerEffectDraggable: !1,
                                tickerEffectEnabled: !0,
                                tickerEffectGap: `0px`,
                                tickerEffectHoverModifier: 100,
                                tickerEffectOverflow: `clip`,
                                tickerEffectPosition: `relative`,
                                tickerEffectStackDirection: `row`,
                                tickerEffectVelocity: 50,
                                children: [
                                  /*#__PURE__*/ d(g, {
                                    children: /*#__PURE__*/ f(`div`, {
                                      className: `framer-1pmz38j`,
                                      "data-border": !0,
                                      children: [
                                        /*#__PURE__*/ d(`div`, {
                                          className: `framer-139keto`,
                                          children: /*#__PURE__*/ d(v, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              W(`v9`, h) ??
                                              /*#__PURE__*/ d(o, {
                                                children: /*#__PURE__*/ d(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-font-size": `15px`,
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                                  },
                                                  children: `✦`,
                                                }),
                                              }),
                                            className: `framer-1hudzxv`,
                                            fonts: [`Inter`],
                                            transformTemplate: cr,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ d(v, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            W(`v10`, h) ??
                                            /*#__PURE__*/ d(o, {
                                              children: /*#__PURE__*/ d(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                  "--framer-font-family": `"IBM Plex Mono"`,
                                                  "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                                  "--framer-font-size": `12px`,
                                                  "--framer-font-style": `normal`,
                                                  "--framer-font-variation-axes": `normal`,
                                                  "--framer-font-weight": `400`,
                                                  "--framer-letter-spacing": `0.03em`,
                                                  "--framer-line-height": `1.3em`,
                                                  "--framer-text-color": `rgba(5, 11, 20, 0.8)`,
                                                },
                                                children: `定制应用`,
                                              }),
                                            }),
                                          className: `framer-1uom7uk`,
                                          "data-framer-name": `Applications do not just consume data — they write`,
                                          fonts: [`GF;IBM Plex Mono-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                  /*#__PURE__*/ d(g, {
                                    children: /*#__PURE__*/ f(`div`, {
                                      className: `framer-1g4e227`,
                                      "data-border": !0,
                                      children: [
                                        /*#__PURE__*/ d(`div`, {
                                          className: `framer-1josp92`,
                                          children: /*#__PURE__*/ d(E, {
                                            className: `framer-8mkryb`,
                                            "data-framer-name": `Vector`,
                                            opacity: 1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 14"><path d="M 12 10 C 11.647 10.002 11.301 10.1 11 10.285 L 9.455 8.735 C 9.815 8.228 10.008 7.622 10.008 7 C 10.008 6.378 9.815 5.772 9.455 5.265 L 11 3.715 C 11.301 3.9 11.647 3.998 12 4 C 12.396 4 12.782 3.883 13.111 3.663 C 13.44 3.443 13.696 3.131 13.848 2.765 C 13.999 2.4 14.039 1.998 13.962 1.61 C 13.884 1.222 13.694 0.865 13.414 0.586 C 13.134 0.306 12.778 0.116 12.39 0.038 C 12.002 -0.039 11.6 0.001 11.235 0.152 C 10.869 0.304 10.557 0.56 10.337 0.889 C 10.117 1.218 10 1.604 10 2 C 10.002 2.353 10.1 2.699 10.285 3 L 8.735 4.545 C 8.228 4.186 7.622 3.992 7 3.992 C 6.378 3.992 5.772 4.186 5.265 4.545 L 3.715 3 C 3.9 2.699 3.998 2.353 4 2 C 4 1.604 3.883 1.218 3.663 0.889 C 3.443 0.56 3.131 0.304 2.765 0.152 C 2.4 0.001 1.998 -0.039 1.61 0.038 C 1.222 0.116 0.865 0.306 0.586 0.586 C 0.306 0.865 0.116 1.222 0.038 1.61 C -0.039 1.998 0.001 2.4 0.152 2.765 C 0.304 3.131 0.56 3.443 0.889 3.663 C 1.218 3.883 1.604 4 2 4 C 2.353 3.998 2.699 3.9 3 3.715 L 4.545 5.265 C 4.186 5.772 3.992 6.378 3.992 7 C 3.992 7.622 4.186 8.228 4.545 8.735 L 3 10.285 C 2.699 10.1 2.353 10.002 2 10 C 1.604 10 1.218 10.117 0.889 10.337 C 0.56 10.557 0.304 10.869 0.152 11.235 C 0.001 11.6 -0.039 12.002 0.038 12.39 C 0.116 12.778 0.306 13.134 0.586 13.414 C 0.865 13.694 1.222 13.884 1.61 13.962 C 1.998 14.039 2.4 13.999 2.765 13.848 C 3.131 13.696 3.443 13.44 3.663 13.111 C 3.883 12.782 4 12.396 4 12 C 3.998 11.647 3.9 11.301 3.715 11 L 5.265 9.455 C 5.772 9.815 6.378 10.008 7 10.008 C 7.622 10.008 8.228 9.815 8.735 9.455 L 10.285 11 C 10.1 11.301 10.002 11.647 10 12 C 10 12.396 10.117 12.782 10.337 13.111 C 10.557 13.44 10.869 13.696 11.235 13.848 C 11.6 13.999 12.002 14.039 12.39 13.962 C 12.778 13.884 13.135 13.694 13.414 13.414 C 13.694 13.134 13.884 12.778 13.962 12.39 C 14.039 12.002 13.999 11.6 13.848 11.235 C 13.696 10.869 13.44 10.557 13.111 10.337 C 12.782 10.117 12.396 10 12 10 Z M 7 9 C 6.604 9 6.218 8.883 5.889 8.663 C 5.56 8.443 5.304 8.131 5.152 7.765 C 5.001 7.4 4.961 6.998 5.038 6.61 C 5.116 6.222 5.306 5.865 5.586 5.586 C 5.865 5.306 6.222 5.116 6.61 5.038 C 6.998 4.961 7.4 5.001 7.765 5.152 C 8.131 5.304 8.443 5.56 8.663 5.889 C 8.883 6.218 9 6.604 9 7 C 9 7.53 8.789 8.039 8.414 8.414 C 8.039 8.789 7.53 9 7 9 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path></svg>`,
                                            svgContentId: 10976814900,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ d(v, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            W(`v11`, h) ??
                                            /*#__PURE__*/ d(o, {
                                              children: /*#__PURE__*/ d(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                  "--framer-font-family": `"IBM Plex Mono"`,
                                                  "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                                  "--framer-font-size": `12px`,
                                                  "--framer-font-style": `normal`,
                                                  "--framer-font-variation-axes": `normal`,
                                                  "--framer-font-weight": `400`,
                                                  "--framer-letter-spacing": `0.03em`,
                                                  "--framer-line-height": `1.3em`,
                                                  "--framer-text-color": `rgba(5, 11, 20, 0.8)`,
                                                },
                                                children: `即用模板`,
                                              }),
                                            }),
                                          className: `framer-1nj7o6x`,
                                          "data-framer-name": `Applications do not just consume data — they write`,
                                          fonts: [`GF;IBM Plex Mono-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                  /*#__PURE__*/ d(g, {
                                    children: /*#__PURE__*/ f(`div`, {
                                      className: `framer-1k5b0q1`,
                                      "data-border": !0,
                                      children: [
                                        /*#__PURE__*/ d(`div`, {
                                          className: `framer-4fc8b3`,
                                          children: /*#__PURE__*/ d(E, {
                                            className: `framer-hfrhsw`,
                                            "data-framer-name": `Vector`,
                                            opacity: 1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13 15"><path d="M 6.5 8.5 C 7.052 8.5 7.5 8.052 7.5 7.5 C 7.5 6.948 7.052 6.5 6.5 6.5 C 5.948 6.5 5.5 6.948 5.5 7.5 C 5.5 8.052 5.948 8.5 6.5 8.5 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 10.388 7.239 C 10.079 6.452 9.546 5.773 8.855 5.286 C 8.164 4.799 7.345 4.526 6.5 4.5 C 5.655 4.526 4.836 4.799 4.145 5.286 C 3.454 5.773 2.921 6.452 2.612 7.239 L 2.5 7.5 L 2.612 7.761 C 2.921 8.548 3.454 9.227 4.145 9.714 C 4.836 10.201 5.655 10.474 6.5 10.5 C 7.345 10.474 8.164 10.201 8.855 9.714 C 9.546 9.227 10.079 8.548 10.388 7.761 L 10.5 7.5 Z M 6.5 9.5 C 6.104 9.5 5.718 9.383 5.389 9.163 C 5.06 8.943 4.804 8.631 4.652 8.265 C 4.501 7.9 4.461 7.498 4.538 7.11 C 4.616 6.722 4.806 6.366 5.086 6.086 C 5.365 5.806 5.722 5.616 6.11 5.538 C 6.498 5.461 6.9 5.501 7.265 5.652 C 7.631 5.804 7.943 6.06 8.163 6.389 C 8.383 6.718 8.5 7.104 8.5 7.5 C 8.499 8.03 8.289 8.539 7.914 8.914 C 7.539 9.289 7.03 9.499 6.5 9.5 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 12.752 3.568 L 6.752 0.068 C 6.675 0.024 6.589 0 6.5 0 C 6.411 0 6.325 0.024 6.248 0.068 L 0.248 3.568 C 0.173 3.612 0.11 3.675 0.066 3.751 C 0.023 3.827 0 3.913 0 4 L 0 11 C 0 11.087 0.023 11.173 0.066 11.249 C 0.11 11.325 0.173 11.388 0.248 11.432 L 6.248 14.932 C 6.325 14.976 6.411 15 6.5 15 C 6.589 15 6.675 14.976 6.752 14.932 L 12.752 11.432 C 12.827 11.388 12.89 11.325 12.934 11.249 C 12.977 11.173 13 11.087 13 11 L 13 4 C 13 3.913 12.977 3.827 12.934 3.751 C 12.89 3.675 12.827 3.612 12.752 3.568 Z M 12 10.713 L 6.5 13.921 L 1 10.713 L 1 4.287 L 6.5 1.079 L 12 4.287 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path></svg>`,
                                            svgContentId: 10077980107,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ d(v, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            W(`v12`, h) ??
                                            /*#__PURE__*/ d(o, {
                                              children: /*#__PURE__*/ d(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                  "--framer-font-family": `"IBM Plex Mono"`,
                                                  "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                                  "--framer-font-size": `12px`,
                                                  "--framer-font-style": `normal`,
                                                  "--framer-font-variation-axes": `normal`,
                                                  "--framer-font-weight": `400`,
                                                  "--framer-letter-spacing": `0.03em`,
                                                  "--framer-line-height": `1.3em`,
                                                  "--framer-text-color": `rgba(5, 11, 20, 0.8)`,
                                                },
                                                children: `一键部署`,
                                              }),
                                            }),
                                          className: `framer-716bmb`,
                                          "data-framer-name": `Applications do not just consume data — they write`,
                                          fonts: [`GF;IBM Plex Mono-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                  /*#__PURE__*/ d(g, {
                                    children: /*#__PURE__*/ f(`div`, {
                                      className: `framer-zlbkq2`,
                                      "data-border": !0,
                                      children: [
                                        /*#__PURE__*/ d(`div`, {
                                          className: `framer-1egpxki`,
                                          children: /*#__PURE__*/ d(E, {
                                            className: `framer-himhrp`,
                                            "data-framer-name": `Vector`,
                                            opacity: 1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 14"><path d="M 3.726 1.182 L 2.219 2.072 L 2.728 2.933 L 4.235 2.043 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 1 5 L 0 5 L 0 3.95 C 0 3.6 0.2 3.25 0.5 3.1 L 1.25 2.65 L 1.75 3.5 L 1 3.95 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 1 6 L 0 6 L 0 8 L 1 8 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 1.25 11.35 L 0.5 10.9 C 0.2 10.7 0 10.4 0 10.05 L 0 9 L 1 9 L 1 10.05 L 1.75 10.5 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 2.724 11.052 L 2.216 11.913 L 3.722 12.803 L 4.231 11.943 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 6.75 12.55 L 6 13 L 5.25 12.55 L 4.75 13.4 L 5.5 13.85 C 5.65 13.95 5.85 14 6 14 C 6.2 14 6.35 13.95 6.5 13.85 L 7.25 13.4 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 9.268 11.063 L 7.761 11.953 L 8.27 12.814 L 9.776 11.924 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 10.6 11.45 L 10.1 10.6 L 11 10.1 L 11 9 L 12 9 L 12 10.05 C 12 10.4 11.8 10.75 11.5 10.9 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 12 6 L 11 6 L 11 8 L 12 8 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 12 5 L 11 5 L 11 3.95 L 10.1 3.45 L 10.6 2.6 L 11.5 3.1 C 11.8 3.3 12 3.6 12 3.95 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 8.234 1.159 L 7.726 2.02 L 9.232 2.911 L 9.741 2.05 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 6.75 1.45 L 6 1 L 5.25 1.45 L 4.75 0.6 L 5.5 0.15 C 5.65 0.05 5.8 0 6 0 C 6.2 0 6.35 0.05 6.5 0.15 L 7.25 0.6 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path></svg>`,
                                            svgContentId: 12230854485,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ d(v, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            W(`v13`, h) ??
                                            /*#__PURE__*/ d(o, {
                                              children: /*#__PURE__*/ d(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                  "--framer-font-family": `"IBM Plex Mono"`,
                                                  "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                                  "--framer-font-size": `12px`,
                                                  "--framer-font-style": `normal`,
                                                  "--framer-font-variation-axes": `normal`,
                                                  "--framer-font-weight": `400`,
                                                  "--framer-letter-spacing": `0.03em`,
                                                  "--framer-line-height": `1.3em`,
                                                  "--framer-text-color": `rgba(5, 11, 20, 0.8)`,
                                                },
                                                children: `全端适配`,
                                              }),
                                            }),
                                          className: `framer-1frb76q`,
                                          "data-framer-name": `Applications do not just consume data — they write`,
                                          fonts: [`GF;IBM Plex Mono-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                  /*#__PURE__*/ d(g, {
                                    children: /*#__PURE__*/ f(`div`, {
                                      className: `framer-179d33c`,
                                      "data-border": !0,
                                      children: [
                                        /*#__PURE__*/ d(`div`, {
                                          className: `framer-e5ejq0`,
                                          children: /*#__PURE__*/ d(E, {
                                            className: `framer-ceeaoy`,
                                            "data-framer-name": `Vector`,
                                            opacity: 1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 14"><path d="M 3.726 1.182 L 2.219 2.072 L 2.728 2.933 L 4.235 2.043 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 1 5 L 0 5 L 0 3.95 C 0 3.6 0.2 3.25 0.5 3.1 L 1.25 2.65 L 1.75 3.5 L 1 3.95 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 1 6 L 0 6 L 0 8 L 1 8 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 1.25 11.35 L 0.5 10.9 C 0.2 10.7 0 10.4 0 10.05 L 0 9 L 1 9 L 1 10.05 L 1.75 10.5 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 2.724 11.052 L 2.216 11.913 L 3.722 12.803 L 4.231 11.943 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 6.75 12.55 L 6 13 L 5.25 12.55 L 4.75 13.4 L 5.5 13.85 C 5.65 13.95 5.85 14 6 14 C 6.2 14 6.35 13.95 6.5 13.85 L 7.25 13.4 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 9.268 11.063 L 7.761 11.953 L 8.27 12.814 L 9.776 11.924 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 10.6 11.45 L 10.1 10.6 L 11 10.1 L 11 9 L 12 9 L 12 10.05 C 12 10.4 11.8 10.75 11.5 10.9 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 12 6 L 11 6 L 11 8 L 12 8 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 12 5 L 11 5 L 11 3.95 L 10.1 3.45 L 10.6 2.6 L 11.5 3.1 C 11.8 3.3 12 3.6 12 3.95 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 8.234 1.159 L 7.726 2.02 L 9.232 2.911 L 9.741 2.05 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 6.75 1.45 L 6 1 L 5.25 1.45 L 4.75 0.6 L 5.5 0.15 C 5.65 0.05 5.8 0 6 0 C 6.2 0 6.35 0.05 6.5 0.15 L 7.25 0.6 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path></svg>`,
                                            svgContentId: 12230854485,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ d(v, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            W(`v14`, h) ??
                                            /*#__PURE__*/ d(o, {
                                              children: /*#__PURE__*/ d(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                  "--framer-font-family": `"IBM Plex Mono"`,
                                                  "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                                  "--framer-font-size": `12px`,
                                                  "--framer-font-style": `normal`,
                                                  "--framer-font-variation-axes": `normal`,
                                                  "--framer-font-weight": `400`,
                                                  "--framer-letter-spacing": `0.03em`,
                                                  "--framer-line-height": `1.3em`,
                                                  "--framer-text-color": `rgba(5, 11, 20, 0.8)`,
                                                },
                                                children: `描述即构建`,
                                              }),
                                            }),
                                          className: `framer-1kz3865`,
                                          "data-framer-name": `Applications do not just consume data — they write`,
                                          fonts: [`GF;IBM Plex Mono-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                  /*#__PURE__*/ d(g, {
                                    children: /*#__PURE__*/ f(`div`, {
                                      className: `framer-1j7wim9`,
                                      "data-border": !0,
                                      children: [
                                        /*#__PURE__*/ d(`div`, {
                                          className: `framer-7qfryp`,
                                          children: /*#__PURE__*/ d(E, {
                                            className: `framer-rvzgrs`,
                                            "data-framer-name": `Vector`,
                                            opacity: 1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 14"><path d="M 12 10 C 11.647 10.002 11.301 10.1 11 10.285 L 9.455 8.735 C 9.815 8.228 10.008 7.622 10.008 7 C 10.008 6.378 9.815 5.772 9.455 5.265 L 11 3.715 C 11.301 3.9 11.647 3.998 12 4 C 12.396 4 12.782 3.883 13.111 3.663 C 13.44 3.443 13.696 3.131 13.848 2.765 C 13.999 2.4 14.039 1.998 13.962 1.61 C 13.884 1.222 13.694 0.865 13.414 0.586 C 13.134 0.306 12.778 0.116 12.39 0.038 C 12.002 -0.039 11.6 0.001 11.235 0.152 C 10.869 0.304 10.557 0.56 10.337 0.889 C 10.117 1.218 10 1.604 10 2 C 10.002 2.353 10.1 2.699 10.285 3 L 8.735 4.545 C 8.228 4.186 7.622 3.992 7 3.992 C 6.378 3.992 5.772 4.186 5.265 4.545 L 3.715 3 C 3.9 2.699 3.998 2.353 4 2 C 4 1.604 3.883 1.218 3.663 0.889 C 3.443 0.56 3.131 0.304 2.765 0.152 C 2.4 0.001 1.998 -0.039 1.61 0.038 C 1.222 0.116 0.865 0.306 0.586 0.586 C 0.306 0.865 0.116 1.222 0.038 1.61 C -0.039 1.998 0.001 2.4 0.152 2.765 C 0.304 3.131 0.56 3.443 0.889 3.663 C 1.218 3.883 1.604 4 2 4 C 2.353 3.998 2.699 3.9 3 3.715 L 4.545 5.265 C 4.186 5.772 3.992 6.378 3.992 7 C 3.992 7.622 4.186 8.228 4.545 8.735 L 3 10.285 C 2.699 10.1 2.353 10.002 2 10 C 1.604 10 1.218 10.117 0.889 10.337 C 0.56 10.557 0.304 10.869 0.152 11.235 C 0.001 11.6 -0.039 12.002 0.038 12.39 C 0.116 12.778 0.306 13.134 0.586 13.414 C 0.865 13.694 1.222 13.884 1.61 13.962 C 1.998 14.039 2.4 13.999 2.765 13.848 C 3.131 13.696 3.443 13.44 3.663 13.111 C 3.883 12.782 4 12.396 4 12 C 3.998 11.647 3.9 11.301 3.715 11 L 5.265 9.455 C 5.772 9.815 6.378 10.008 7 10.008 C 7.622 10.008 8.228 9.815 8.735 9.455 L 10.285 11 C 10.1 11.301 10.002 11.647 10 12 C 10 12.396 10.117 12.782 10.337 13.111 C 10.557 13.44 10.869 13.696 11.235 13.848 C 11.6 13.999 12.002 14.039 12.39 13.962 C 12.778 13.884 13.135 13.694 13.414 13.414 C 13.694 13.134 13.884 12.778 13.962 12.39 C 14.039 12.002 13.999 11.6 13.848 11.235 C 13.696 10.869 13.44 10.557 13.111 10.337 C 12.782 10.117 12.396 10 12 10 Z M 7 9 C 6.604 9 6.218 8.883 5.889 8.663 C 5.56 8.443 5.304 8.131 5.152 7.765 C 5.001 7.4 4.961 6.998 5.038 6.61 C 5.116 6.222 5.306 5.865 5.586 5.586 C 5.865 5.306 6.222 5.116 6.61 5.038 C 6.998 4.961 7.4 5.001 7.765 5.152 C 8.131 5.304 8.443 5.56 8.663 5.889 C 8.883 6.218 9 6.604 9 7 C 9 7.53 8.789 8.039 8.414 8.414 C 8.039 8.789 7.53 9 7 9 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path></svg>`,
                                            svgContentId: 10976814900,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ d(v, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            W(`v15`, h) ??
                                            /*#__PURE__*/ d(o, {
                                              children: /*#__PURE__*/ d(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                  "--framer-font-family": `"IBM Plex Mono"`,
                                                  "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                                  "--framer-font-size": `12px`,
                                                  "--framer-font-style": `normal`,
                                                  "--framer-font-variation-axes": `normal`,
                                                  "--framer-font-weight": `400`,
                                                  "--framer-letter-spacing": `0.03em`,
                                                  "--framer-line-height": `1.3em`,
                                                  "--framer-text-color": `rgba(5, 11, 20, 0.8)`,
                                                },
                                                children: `复用调整`,
                                              }),
                                            }),
                                          className: `framer-k13jpi`,
                                          "data-framer-name": `Applications do not just consume data — they write`,
                                          fonts: [`GF;IBM Plex Mono-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        /*#__PURE__*/ d(`div`, {
                          className: `framer-1akngzt`,
                          children: /*#__PURE__*/ f(`div`, {
                            className: `framer-jyqakq`,
                            children: [
                              /*#__PURE__*/ f(`div`, {
                                className: `framer-kd0jxi`,
                                children: [
                                  /*#__PURE__*/ d(v, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      W(`v16`, h) ??
                                      /*#__PURE__*/ d(o, {
                                        children: /*#__PURE__*/ d(`p`, {
                                          className: `framer-styles-preset-140plv3`,
                                          "data-styles-preset": `TBRoaUTAt`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-d2d554b8-e538-4f3d-a601-4167e4c07699, rgba(9, 9, 9, 0.8))`,
                                          },
                                          children: `■ 内置应用交付`,
                                        }),
                                      }),
                                    className: `framer-d14nn8`,
                                    "data-framer-name": `Applications do not just consume data — they write`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ d(v, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      W(`v17`, h) ??
                                      /*#__PURE__*/ d(o, {
                                        children: /*#__PURE__*/ f(`h2`, {
                                          className: `framer-styles-preset-1k5p4j8`,
                                          "data-styles-preset": `F3NdZsOi7`,
                                          dir: `auto`,
                                          children: [
                                            `颠覆传统软件项目工作流，`,
                                            /*#__PURE__*/ d(`br`, {}),
                                            `从几个月到几小时`,
                                          ],
                                        }),
                                      }),
                                    className: `framer-10tijsy`,
                                    "data-framer-name": `Applications do not just consume data — they write`,
                                    effect: q,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ d(v, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      W(`v18`, h) ??
                                      /*#__PURE__*/ d(o, {
                                        children: /*#__PURE__*/ d(`p`, {
                                          className: `framer-styles-preset-1ful33y`,
                                          "data-styles-preset": `HNigw6pHS`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `left` },
                                          children: `Tier0 Builder 帮助业务⽤⼾构建能够真正交付给⽬标团队使⽤的应⽤。`,
                                        }),
                                      }),
                                    className: `framer-1qyyj1v`,
                                    "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ f(G, {
                                __framer__animate: { transition: Y },
                                __framer__animateOnce: !0,
                                __framer__enter: J,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-gjz1av`,
                                children: [
                                  /*#__PURE__*/ f(`div`, {
                                    className: `framer-16sybsy`,
                                    children: [
                                      /*#__PURE__*/ f(`div`, {
                                        className: `framer-yw45xw`,
                                        children: [
                                          /*#__PURE__*/ f(`div`, {
                                            className: `framer-12566nf`,
                                            children: [
                                              /*#__PURE__*/ d(`div`, {
                                                className: `framer-9ur73k`,
                                                children: /*#__PURE__*/ d(`div`, {
                                                  className: `framer-1bninff`,
                                                  "data-framer-name": `Tool-kit`,
                                                  children: /*#__PURE__*/ d(E, {
                                                    className: `framer-13vm9vs`,
                                                    "data-framer-name": `Vector`,
                                                    fill: `rgba(0,0,0,1)`,
                                                    intrinsicHeight: 15,
                                                    intrinsicWidth: 15,
                                                    svg: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.95707 11.2501L6.08557 9.12166L5.37857 8.41461L3.25002 10.543L2.85352 10.1466C2.80711 10.1001 2.752 10.0633 2.69135 10.0381C2.63069 10.013 2.56568 10 2.50002 10C2.43436 10 2.36934 10.013 2.30869 10.0381C2.24803 10.0633 2.19292 10.1001 2.14652 10.1466L0.146518 12.1466C0.100069 12.193 0.0632207 12.2481 0.0380804 12.3087C0.01294 12.3694 0 12.4344 0 12.5001C0 12.5657 0.01294 12.6307 0.0380804 12.6914C0.0632207 12.752 0.100069 12.8071 0.146518 12.8536L1.64652 14.3536C1.69293 14.4 1.74804 14.4368 1.80869 14.462C1.86935 14.4871 1.93436 14.5001 2.00002 14.5001C2.06568 14.5001 2.13069 14.4871 2.19134 14.462C2.252 14.4368 2.30711 14.4 2.35352 14.3536L4.35352 12.3536C4.39997 12.3071 4.43681 12.252 4.46195 12.1914C4.48709 12.1307 4.50004 12.0657 4.50004 12.0001C4.50004 11.9344 4.48709 11.8694 4.46195 11.8087C4.43681 11.7481 4.39997 11.693 4.35352 11.6466L3.95707 11.2501ZM2.00002 13.293L1.20707 12.5001L2.50002 11.2071L3.29297 12.0001L2.00002 13.293Z" fill="#161616"/>
<path d="M11.5 14C10.7046 13.9991 9.94208 13.6828 9.37966 13.1204C8.81724 12.558 8.50089 11.7954 8.5 11C8.50038 10.7387 8.53584 10.4785 8.60545 10.2266L4.27345 5.89468C4.0215 5.9642 3.76137 5.99964 3.5 6.00003C3.01122 6.00202 2.52941 5.88407 2.09683 5.65652C1.66424 5.42896 1.29408 5.09876 1.01882 4.69485C0.743553 4.29094 0.571582 3.82567 0.517984 3.33983C0.464387 2.85399 0.5308 2.36243 0.711401 1.90823L0.990251 1.19728L2.6465 2.85353C2.74169 2.94444 2.86825 2.99516 2.99988 2.99516C3.1315 2.99516 3.25806 2.94444 3.35325 2.85353C3.39973 2.80713 3.43661 2.75203 3.46177 2.69137C3.48693 2.6307 3.49988 2.56568 3.49988 2.5C3.49988 2.43433 3.48693 2.3693 3.46177 2.30864C3.43661 2.24798 3.39973 2.19287 3.35325 2.14648L1.6968 0.489529L2.40845 0.210979C2.86268 0.030609 3.35421 -0.035613 3.83997 0.0181152C4.32574 0.0718433 4.79092 0.243882 5.19475 0.519157C5.59858 0.794432 5.92873 1.16454 6.15629 1.59706C6.38385 2.02958 6.50187 2.5113 6.5 3.00003C6.49963 3.2614 6.46416 3.52154 6.39455 3.77348L10.7266 8.10523C10.9785 8.03579 11.2386 8.00041 11.5 8.00003C11.9888 7.99802 12.4706 8.11596 12.9032 8.34351C13.3358 8.57106 13.7059 8.90127 13.9812 9.30519C14.2565 9.7091 14.4284 10.1744 14.482 10.6602C14.5356 11.1461 14.4692 11.6376 14.2886 12.0918L14.01 12.8028L12.3535 11.1465C12.2583 11.0556 12.1318 11.0049 12.0001 11.0049C11.8685 11.0049 11.7419 11.0556 11.6468 11.1465C11.6003 11.1929 11.5634 11.248 11.5382 11.3087C11.513 11.3693 11.5 11.4343 11.5 11.5C11.5 11.5657 11.5129 11.6307 11.538 11.6914C11.5632 11.752 11.6 11.8072 11.6465 11.8536L13.3028 13.51L12.5918 13.789C12.2443 13.9272 11.874 13.9988 11.5 14ZM4.53125 4.73818L9.7617 9.96878L9.6421 10.2735C9.52502 10.5662 9.47925 10.8826 9.50858 11.1965C9.53792 11.5105 9.64151 11.8129 9.8108 12.0789C9.98009 12.3449 10.2102 12.5668 10.4822 12.7263C10.7542 12.8858 11.0602 12.9783 11.375 12.9961L10.9395 12.5606C10.8001 12.4213 10.6896 12.256 10.6142 12.074C10.5388 11.892 10.5 11.697 10.5 11.5C10.5 11.303 10.5388 11.1079 10.6142 10.926C10.6896 10.744 10.8001 10.5786 10.9395 10.4394C11.2252 10.1666 11.6051 10.0145 12.0002 10.0145C12.3952 10.0145 12.7751 10.1668 13.0608 10.4396L13.4961 10.875C13.4782 10.5602 13.3857 10.2542 13.2261 9.98224C13.0666 9.71026 12.8447 9.48012 12.5787 9.31084C12.3127 9.14155 12.0102 9.03796 11.6963 9.00862C11.3824 8.97929 11.066 9.02505 10.7732 9.14213L10.4685 9.26138L5.2385 4.03138L5.3581 3.72668C5.47519 3.43393 5.52097 3.11753 5.49164 2.8036C5.46232 2.48967 5.35873 2.18722 5.18944 1.92122C5.02015 1.65523 4.79002 1.43332 4.51804 1.27382C4.24606 1.11432 3.94004 1.02181 3.62525 1.00393L4.06055 1.43948C4.19987 1.57874 4.31038 1.74408 4.38579 1.92606C4.46119 2.10804 4.5 2.3031 4.5 2.50008C4.5 2.69706 4.46119 2.89212 4.38579 3.0741C4.31038 3.25608 4.19987 3.42142 4.06055 3.56068C3.77477 3.83344 3.39488 3.98561 2.99983 3.98556C2.60477 3.98551 2.22492 3.83326 1.9392 3.56043L1.5039 3.12503C1.52174 3.43982 1.61422 3.74586 1.7737 4.01785C1.93319 4.28984 2.15509 4.51999 2.42109 4.68928C2.68708 4.85857 2.98954 4.96215 3.30348 4.99146C3.61741 5.02076 3.93381 4.97496 4.22655 4.85783L4.53125 4.73818Z" fill="#161616"/>
<path d="M14.0613 0.425075C13.7756 0.152296 13.3958 9.25056e-05 13.0007 9.25056e-05C12.6057 9.25056e-05 12.2259 0.152296 11.9402 0.425075L8.19999 4.16508L8.90704 4.87208L12.647 1.13208C12.7423 1.0412 12.8689 0.990508 13.0006 0.990508C13.1322 0.990508 13.2588 1.0412 13.3541 1.13208C13.4477 1.22598 13.5002 1.35314 13.5002 1.4857C13.5002 1.61826 13.4477 1.74542 13.3541 1.83933L9.61409 5.57932L10.3211 6.28638L14.0611 2.54663C14.3421 2.26514 14.5 1.88365 14.5 1.48589C14.5 1.08814 14.3423 0.706617 14.0613 0.425075Z" fill="#161616"/>
</svg>
`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              }),
                                              /*#__PURE__*/ d(v, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  W(`v19`, h) ??
                                                  /*#__PURE__*/ d(o, {
                                                    children: /*#__PURE__*/ d(`p`, {
                                                      className: `framer-styles-preset-tdgg8r`,
                                                      "data-styles-preset": `mVGJjW56C`,
                                                      dir: `auto`,
                                                      children: `从自然语言构建`,
                                                    }),
                                                  }),
                                                className: `framer-15g5t2n`,
                                                "data-framer-name": `Applications do not just consume data — they write`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ d(`div`, {
                                            className: `framer-1jm3iy1`,
                                            children: /*#__PURE__*/ d(v, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                W(`v20`, h) ??
                                                /*#__PURE__*/ d(o, {
                                                  children: /*#__PURE__*/ d(`p`, {
                                                    className: `framer-styles-preset-tl6wln`,
                                                    "data-styles-preset": `xtB9ht3pk`,
                                                    dir: `auto`,
                                                    style: { "--framer-text-alignment": `left` },
                                                    children: `描述⼯作流、记录、表单、业务规则、仪表板和⽤⼾操作，系统据此⽣成应⽤。`,
                                                  }),
                                                }),
                                              className: `framer-pd9m9d`,
                                              "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ f(`div`, {
                                        className: `framer-3c3ep9`,
                                        children: [
                                          /*#__PURE__*/ f(`div`, {
                                            className: `framer-10tti8d`,
                                            children: [
                                              /*#__PURE__*/ d(`div`, {
                                                className: `framer-d1idxs`,
                                                children: /*#__PURE__*/ d(`div`, {
                                                  className: `framer-15y3036`,
                                                  "data-framer-name": `Network--enterprise`,
                                                  children: /*#__PURE__*/ d(E, {
                                                    className: `framer-grbvpg`,
                                                    "data-framer-name": `Vector`,
                                                    fill: `rgba(0,0,0,1)`,
                                                    intrinsicHeight: 14,
                                                    intrinsicWidth: 15,
                                                    svg: `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8991 3.99948C12.6675 2.86508 12.0493 1.84625 11.1501 1.11688C10.2509 0.387497 9.12645 -0.00721738 7.96866 9.99367e-05C6.81088 0.00741725 5.69151 0.416313 4.80162 1.157C3.91172 1.89768 3.30646 2.92425 3.08914 4.06148C2.16677 4.22623 1.33955 4.73047 0.770491 5.47483C0.20143 6.2192 -0.0682061 7.1497 0.0147147 8.08299C0.0976356 9.01628 0.527099 9.88467 1.21848 10.517C1.90986 11.1494 2.81302 11.4999 3.74999 11.4995H3.99999V10.4995H3.74999C3.03717 10.4999 2.35207 10.2234 1.8393 9.72828C1.32653 9.23314 1.02621 8.55812 1.00175 7.84573C0.977292 7.13334 1.2306 6.43932 1.7082 5.91017C2.1858 5.38102 2.85032 5.05815 3.56149 5.00973L3.97974 4.98118L4.02474 4.56443C4.12588 3.63417 4.55022 2.76888 5.22382 2.11936C5.89742 1.46984 6.77757 1.07727 7.7109 1.01004C8.64422 0.942819 9.57155 1.20521 10.3313 1.75149C11.091 2.29777 11.635 3.09331 11.8684 3.99948H12.8991Z" fill="#161616"/>
<path d="M14 4.99948H8.99999C8.73486 4.99978 8.48069 5.10524 8.29321 5.29271C8.10574 5.48018 8.00029 5.73435 7.99999 5.99948V7.99948H5.99999C5.73486 7.99978 5.48069 8.10524 5.29322 8.29271C5.10574 8.48018 5.00029 8.73435 4.99999 8.99948V13.9995H15V5.99948C14.9997 5.73435 14.8942 5.48018 14.7068 5.29271C14.5193 5.10524 14.2651 4.99978 14 4.99948ZM5.99999 12.9995V8.99948H7.99999V12.9995H5.99999ZM14 12.9995H8.99999V5.99948H14V12.9995Z" fill="#161616"/>
<path d="M11 6.99948H9.99999V8.99948H11V6.99948Z" fill="#161616"/>
<path d="M13 6.99948H12V8.99948H13V6.99948Z" fill="#161616"/>
<path d="M11 9.99948H9.99999V11.9995H11V9.99948Z" fill="#161616"/>
<path d="M13 9.99948H12V11.9995H13V9.99948Z" fill="#161616"/>
</svg>
`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              }),
                                              /*#__PURE__*/ d(v, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  W(`v21`, h) ??
                                                  /*#__PURE__*/ d(o, {
                                                    children: /*#__PURE__*/ d(`p`, {
                                                      className: `framer-styles-preset-tdgg8r`,
                                                      "data-styles-preset": `mVGJjW56C`,
                                                      dir: `auto`,
                                                      children: `平台托管数据`,
                                                    }),
                                                  }),
                                                className: `framer-1sb49ja`,
                                                "data-framer-name": `Applications do not just consume data — they write`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ d(`div`, {
                                            className: `framer-1wn36wq`,
                                            children: /*#__PURE__*/ d(v, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                W(`v22`, h) ??
                                                /*#__PURE__*/ d(o, {
                                                  children: /*#__PURE__*/ d(`p`, {
                                                    className: `framer-styles-preset-tl6wln`,
                                                    "data-styles-preset": `xtB9ht3pk`,
                                                    dir: `auto`,
                                                    style: { "--framer-text-alignment": `left` },
                                                    children: `使⽤平台托管的数据库，⽆需⾃建、托管或维护数据库层。`,
                                                  }),
                                                }),
                                              className: `framer-ivqho1`,
                                              "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ f(`div`, {
                                    className: `framer-7nxi5m`,
                                    children: [
                                      /*#__PURE__*/ f(`div`, {
                                        className: `framer-1ioh7on`,
                                        children: [
                                          /*#__PURE__*/ f(`div`, {
                                            className: `framer-13mvkbj`,
                                            children: [
                                              /*#__PURE__*/ d(`div`, {
                                                className: `framer-1b5kau1`,
                                                children: /*#__PURE__*/ d(`div`, {
                                                  className: `framer-6ojvg6`,
                                                  "data-framer-name": `Network--public`,
                                                  children: /*#__PURE__*/ d(E, {
                                                    className: `framer-1dqwreq`,
                                                    "data-framer-name": `Vector`,
                                                    fill: `rgba(0,0,0,1)`,
                                                    intrinsicHeight: 14,
                                                    intrinsicWidth: 16,
                                                    svg: `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 5.5C8.9 5.5 7 7.4 7 9.75C7 12.1 8.9 14 11.25 14C13.6 14 15.5 12.1 15.5 9.75C15.5 7.4 13.6 5.5 11.25 5.5ZM14.5 9.5H13C13 8.5 12.85 7.5 12.55 6.75C13.6 7.25 14.4 8.25 14.5 9.5ZM11.25 13C11.05 12.9 10.6 12.1 10.5 10.5H11.95C11.85 12.1 11.45 12.9 11.25 13ZM10.5 9.5C10.55 7.6 11.05 6.6 11.2 6.5C11.4 6.6 11.9 7.6 11.95 9.5H10.5ZM9.95 6.75C9.65 7.5 9.55 8.5 9.5 9.5H8C8.1 8.25 8.9 7.25 9.95 6.75ZM8.1 10.5H9.5C9.55 11.3 9.7 12.1 9.95 12.75C9.05 12.35 8.35 11.5 8.1 10.5ZM12.55 12.75C12.8 12.1 12.95 11.35 13 10.5H14.45C14.15 11.5 13.45 12.35 12.55 12.75Z" fill="#161616"/>
<path d="M12.9 4C12.45 1.7 10.4 0 8 0C5.6 0 3.55 1.7 3.1 4.05C1.35 4.4 0 5.9 0 7.75C0 9.8 1.7 11.5 3.75 11.5H5.5V10.5H3.75C2.25 10.5 1 9.25 1 7.75C1 6.3 2.1 5.1 3.55 5H4V4.55C4.25 2.55 5.95 1 8 1C9.85 1 11.4 2.3 11.85 4H12.9Z" fill="#161616"/>
</svg>
`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              }),
                                              /*#__PURE__*/ d(v, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  W(`v23`, h) ??
                                                  /*#__PURE__*/ d(o, {
                                                    children: /*#__PURE__*/ d(`p`, {
                                                      className: `framer-styles-preset-tdgg8r`,
                                                      "data-styles-preset": `mVGJjW56C`,
                                                      dir: `auto`,
                                                      children: `管理⽤⼾访问权限`,
                                                    }),
                                                  }),
                                                className: `framer-nbxt2u`,
                                                "data-framer-name": `Applications do not just consume data — they write`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ d(`div`, {
                                            className: `framer-1mcxcvl`,
                                            children: /*#__PURE__*/ d(v, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                W(`v24`, h) ??
                                                /*#__PURE__*/ d(o, {
                                                  children: /*#__PURE__*/ d(`p`, {
                                                    className: `framer-styles-preset-tl6wln`,
                                                    "data-styles-preset": `xtB9ht3pk`,
                                                    dir: `auto`,
                                                    style: { "--framer-text-alignment": `left` },
                                                    children: `邀请 Builder ⽤⼾加⼊项⽬，⽤⾃然语⾔定义应⽤⻆⾊、权限和可执⾏操作。`,
                                                  }),
                                                }),
                                              className: `framer-1jnxdz0`,
                                              "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ f(`div`, {
                                        className: `framer-3rrq5n`,
                                        children: [
                                          /*#__PURE__*/ d(`div`, {
                                            className: `framer-1d0ddgn`,
                                            children: /*#__PURE__*/ d(`div`, {
                                              className: `framer-11pue5i`,
                                              children: /*#__PURE__*/ d(`div`, {
                                                className: `framer-edutr0`,
                                                "data-framer-name": `Software-resource--cluster`,
                                                children: /*#__PURE__*/ d(E, {
                                                  className: `framer-1f0zqkv`,
                                                  "data-framer-name": `Vector`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 13,
                                                  intrinsicWidth: 13,
                                                  svg: `<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 9C10.25 9 10 8.9 9.8 8.7L8.3 7.2C8.1 7 8 6.75 8 6.5C8 6.25 8.1 6 8.3 5.8L9.8 4.3C10 4.1 10.25 4 10.5 4C10.75 4 11 4.1 11.2 4.3L12.7 5.8C12.9 6 13 6.25 13 6.5C13 6.75 12.9 7 12.7 7.2L11.2 8.7C11 8.9 10.75 9 10.5 9ZM10.5 5L9 6.5L10.5 8L12 6.5L10.5 5Z" fill="#161616"/>
<path d="M6.5 5C6.25 5 6 4.9 5.8 4.7L4.3 3.2C4.1 3 4 2.75 4 2.5C4 2.25 4.1 2 4.3 1.8L5.8 0.3C6 0.0999999 6.25 0 6.5 0C6.75 0 7 0.0999999 7.2 0.3L8.7 1.8C8.9 2 9 2.25 9 2.5C9 2.75 8.9 3 8.7 3.2L7.2 4.7C7 4.9 6.75 5 6.5 5ZM6.5 1L5 2.5L6.5 4L8 2.5L6.5 1Z" fill="#161616"/>
<path d="M6.5 13C6.25 13 6 12.9 5.8 12.7L4.3 11.2C4.1 11 4 10.75 4 10.5C4 10.25 4.1 10 4.3 9.8L5.8 8.3C6 8.1 6.25 8 6.5 8C6.75 8 7 8.1 7.2 8.3L8.7 9.8C8.9 10 9 10.25 9 10.5C9 10.75 8.9 11 8.7 11.2L7.2 12.7C7 12.9 6.75 13 6.5 13ZM6.5 9L5 10.5L6.5 12L8 10.5L6.5 9Z" fill="#161616"/>
<path d="M2.5 9C2.25 9 2 8.9 1.8 8.7L0.3 7.2C0.0999999 7 0 6.75 0 6.5C0 6.25 0.0999999 6 0.3 5.8L1.8 4.3C2 4.1 2.25 4 2.5 4C2.75 4 3 4.1 3.2 4.3L4.7 5.8C4.9 6 5 6.25 5 6.5C5 6.75 4.9 7 4.7 7.2L3.2 8.7C3 8.9 2.75 9 2.5 9ZM2.5 5L1 6.5L2.5 8L4 6.5L2.5 5Z" fill="#161616"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            }),
                                          }),
                                          /*#__PURE__*/ f(`div`, {
                                            className: `framer-79ydmz`,
                                            children: [
                                              /*#__PURE__*/ d(v, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  W(`v25`, h) ??
                                                  /*#__PURE__*/ d(o, {
                                                    children: /*#__PURE__*/ d(`p`, {
                                                      className: `framer-styles-preset-tdgg8r`,
                                                      "data-styles-preset": `mVGJjW56C`,
                                                      dir: `auto`,
                                                      children: `预览并发布`,
                                                    }),
                                                  }),
                                                className: `framer-mz59iv`,
                                                "data-framer-name": `Applications do not just consume data — they write`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              /*#__PURE__*/ d(v, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  W(`v26`, h) ??
                                                  /*#__PURE__*/ d(o, {
                                                    children: /*#__PURE__*/ d(`p`, {
                                                      className: `framer-styles-preset-tl6wln`,
                                                      "data-styles-preset": `xtB9ht3pk`,
                                                      dir: `auto`,
                                                      style: { "--framer-text-alignment": `left` },
                                                      children: `先在预览环境中测试，应⽤准备就绪后通过统⼀流程发布为⽣产应⽤。`,
                                                    }),
                                                  }),
                                                className: `framer-10fgdxq`,
                                                "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ f(`div`, {
                                    className: `framer-166jxq4`,
                                    children: [
                                      /*#__PURE__*/ f(`div`, {
                                        className: `framer-1iws1rz`,
                                        children: [
                                          /*#__PURE__*/ f(`div`, {
                                            className: `framer-1bzblgq`,
                                            children: [
                                              /*#__PURE__*/ d(`div`, {
                                                className: `framer-oa2n7y`,
                                                children: /*#__PURE__*/ d(`div`, {
                                                  className: `framer-11cfzml`,
                                                  "data-framer-name": `Application--web`,
                                                  children: /*#__PURE__*/ d(E, {
                                                    className: `framer-x1mqqj`,
                                                    "data-framer-name": `Vector`,
                                                    fill: `rgba(0,0,0,1)`,
                                                    intrinsicHeight: 14,
                                                    intrinsicWidth: 14,
                                                    svg: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 0H12V2H14V0Z" fill="#161616"/>
<path d="M14 3H12V5H14V3Z" fill="#161616"/>
<path d="M11 0H9V2H11V0Z" fill="#161616"/>
<path d="M11 3H9V5H11V3Z" fill="#161616"/>
<path d="M13 7V10H1V2H7V1H1C0.734784 1 0.48043 1.10536 0.292893 1.29289C0.105357 1.48043 0 1.73478 0 2V10C0 10.2652 0.105357 10.5196 0.292893 10.7071C0.48043 10.8946 0.734784 11 1 11H5V13H3V14H11V13H9V11H13C13.2652 11 13.5196 10.8946 13.7071 10.7071C13.8946 10.5196 14 10.2652 14 10V7H13ZM8 13H6V11H8V13Z" fill="#161616"/>
</svg>
`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              }),
                                              /*#__PURE__*/ d(v, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  W(`v27`, h) ??
                                                  /*#__PURE__*/ d(o, {
                                                    children: /*#__PURE__*/ d(`p`, {
                                                      className: `framer-styles-preset-tdgg8r`,
                                                      "data-styles-preset": `mVGJjW56C`,
                                                      dir: `auto`,
                                                      children: `支持 Web 和移动端`,
                                                    }),
                                                  }),
                                                className: `framer-1kc4adv`,
                                                "data-framer-name": `Applications do not just consume data — they write`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ d(`div`, {
                                            className: `framer-ijjkww`,
                                            children: /*#__PURE__*/ d(v, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                W(`v28`, h) ??
                                                /*#__PURE__*/ d(o, {
                                                  children: /*#__PURE__*/ d(`p`, {
                                                    className: `framer-styles-preset-tl6wln`,
                                                    "data-styles-preset": `xtB9ht3pk`,
                                                    dir: `auto`,
                                                    style: { "--framer-text-alignment": `left` },
                                                    children: `通过 Web、iOS 和 Android 上的 Tier0 Digital Worker，让对的⽤⼾访问对的⼯作流。`,
                                                  }),
                                                }),
                                              className: `framer-snthz8`,
                                              "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ f(`div`, {
                                        className: `framer-mfj1eq`,
                                        children: [
                                          /*#__PURE__*/ d(`div`, {
                                            className: `framer-mz5s65`,
                                            children: /*#__PURE__*/ d(`div`, {
                                              className: `framer-zknejn`,
                                              children: /*#__PURE__*/ d(`div`, {
                                                className: `framer-pzwa0z`,
                                                "data-framer-name": `Application`,
                                                children: /*#__PURE__*/ d(E, {
                                                  className: `framer-yi2g58`,
                                                  "data-framer-name": `Vector`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 12,
                                                  intrinsicWidth: 12,
                                                  svg: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 7H1C0.734784 7 0.48043 6.89464 0.292893 6.70711C0.105357 6.51957 0 6.26522 0 6V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H6C6.26522 0 6.51957 0.105357 6.70711 0.292893C6.89464 0.48043 7 0.734784 7 1V6C7 6.26522 6.89464 6.51957 6.70711 6.70711C6.51957 6.89464 6.26522 7 6 7ZM1 1V6H6V1H1Z" fill="#161616"/>
<path d="M11 4V6H9V4H11ZM11 3H9C8.73478 3 8.48043 3.10536 8.29289 3.29289C8.10536 3.48043 8 3.73478 8 4V6C8 6.26522 8.10536 6.51957 8.29289 6.70711C8.48043 6.89464 8.73478 7 9 7H11C11.2652 7 11.5196 6.89464 11.7071 6.70711C11.8946 6.51957 12 6.26522 12 6V4C12 3.73478 11.8946 3.48043 11.7071 3.29289C11.5196 3.10536 11.2652 3 11 3Z" fill="#161616"/>
<path d="M11 9V11H9V9H11ZM11 8H9C8.73478 8 8.48043 8.10536 8.29289 8.29289C8.10536 8.48043 8 8.73478 8 9V11C8 11.2652 8.10536 11.5196 8.29289 11.7071C8.48043 11.8946 8.73478 12 9 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11V9C12 8.73478 11.8946 8.48043 11.7071 8.29289C11.5196 8.10536 11.2652 8 11 8Z" fill="#161616"/>
<path d="M6 9V11H4V9H6ZM6 8H4C3.73478 8 3.48043 8.10536 3.29289 8.29289C3.10536 8.48043 3 8.73478 3 9V11C3 11.2652 3.10536 11.5196 3.29289 11.7071C3.48043 11.8946 3.73478 12 4 12H6C6.26522 12 6.51957 11.8946 6.70711 11.7071C6.89464 11.5196 7 11.2652 7 11V9C7 8.73478 6.89464 8.48043 6.70711 8.29289C6.51957 8.10536 6.26522 8 6 8Z" fill="#161616"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            }),
                                          }),
                                          /*#__PURE__*/ f(`div`, {
                                            className: `framer-180lj7e`,
                                            children: [
                                              /*#__PURE__*/ d(v, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  W(`v29`, h) ??
                                                  /*#__PURE__*/ d(o, {
                                                    children: /*#__PURE__*/ d(`p`, {
                                                      className: `framer-styles-preset-tdgg8r`,
                                                      "data-styles-preset": `mVGJjW56C`,
                                                      dir: `auto`,
                                                      children: `发布应用版本`,
                                                    }),
                                                  }),
                                                className: `framer-1pdhckp`,
                                                "data-framer-name": `Applications do not just consume data — they write`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              /*#__PURE__*/ d(v, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  W(`v30`, h) ??
                                                  /*#__PURE__*/ d(o, {
                                                    children: /*#__PURE__*/ d(`p`, {
                                                      className: `framer-styles-preset-tl6wln`,
                                                      "data-styles-preset": `xtB9ht3pk`,
                                                      dir: `auto`,
                                                      style: { "--framer-text-alignment": `left` },
                                                      children: `按应⽤独⽴更新，添加变更说明，测试完成后发布新版本。`,
                                                    }),
                                                  }),
                                                className: `framer-8x6qbv`,
                                                "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                                fonts: [`Inter`],
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
                        }),
                        /*#__PURE__*/ d(E, {
                          className: `framer-1b32vfk`,
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
                        /*#__PURE__*/ d(`div`, {
                          className: `framer-4mk6u0`,
                          children: /*#__PURE__*/ f(G, {
                            __framer__animate: { transition: Z },
                            __framer__animateOnce: !1,
                            __framer__enter: X,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-1bthqnq`,
                            children: [
                              /*#__PURE__*/ f(G, {
                                __framer__animate: { transition: Z },
                                __framer__animateOnce: !1,
                                __framer__enter: X,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-yt6l4v`,
                                children: [
                                  /*#__PURE__*/ d(v, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      W(`v31`, h) ??
                                      /*#__PURE__*/ d(o, {
                                        children: /*#__PURE__*/ d(`p`, {
                                          className: `framer-styles-preset-140plv3`,
                                          "data-styles-preset": `TBRoaUTAt`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-d2d554b8-e538-4f3d-a601-4167e4c07699, rgba(9, 9, 9, 0.8))`,
                                          },
                                          children: `■ 项目结构`,
                                        }),
                                      }),
                                    className: `framer-1w4aibd`,
                                    "data-framer-name": `Applications do not just consume data — they write`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ d(R, {
                                    breakpoint: k,
                                    overrides: {
                                      fUotBm3xr: {
                                        children:
                                          W(`v33`, h) ??
                                          /*#__PURE__*/ d(o, {
                                            children: /*#__PURE__*/ f(`h2`, {
                                              className: `framer-styles-preset-1k5p4j8`,
                                              "data-styles-preset": `F3NdZsOi7`,
                                              dir: `auto`,
                                              children: [
                                                `一个项目，`,
                                                /*#__PURE__*/ d(`br`, {}),
                                                `构建多个业务应用。`,
                                              ],
                                            }),
                                          }),
                                      },
                                    },
                                    children: /*#__PURE__*/ d(v, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        W(`v32`, h) ??
                                        /*#__PURE__*/ d(o, {
                                          children: /*#__PURE__*/ f(`h2`, {
                                            className: `framer-styles-preset-1k5p4j8`,
                                            "data-styles-preset": `F3NdZsOi7`,
                                            dir: `auto`,
                                            children: [
                                              `一个项目，`,
                                              /*#__PURE__*/ d(`br`, {}),
                                              `构建多个业务应用。`,
                                            ],
                                          }),
                                        }),
                                      className: `framer-t7sda8`,
                                      "data-framer-name": `Applications do not just consume data — they write`,
                                      effect: q,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  /*#__PURE__*/ d(v, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      W(`v34`, h) ??
                                      /*#__PURE__*/ d(o, {
                                        children: /*#__PURE__*/ d(`p`, {
                                          className: `framer-styles-preset-1ful33y`,
                                          "data-styles-preset": `HNigw6pHS`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `left` },
                                          children: `在同⼀业务范畴内组织相关应⽤。例如，⼀个 MES 项⽬可以包含⽣产、质量、维护、库存和交接班等多个独⽴应⽤。`,
                                        }),
                                      }),
                                    className: `framer-8phe3z`,
                                    "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ f(`div`, {
                                    className: `framer-11kjb34`,
                                    children: [
                                      /*#__PURE__*/ f(`div`, {
                                        className: `framer-5xvwvs`,
                                        children: [
                                          /*#__PURE__*/ d(`div`, {
                                            className: `framer-sbkh4r`,
                                            children: /*#__PURE__*/ d(v, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                W(`v35`, h) ??
                                                /*#__PURE__*/ d(o, {
                                                  children: /*#__PURE__*/ d(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                      "--framer-font-family": `"IBM Plex Mono", monospace`,
                                                      "--framer-font-size": `21px`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-letter-spacing": `0px`,
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      "--framer-text-transform": `capitalize`,
                                                    },
                                                    children: `01`,
                                                  }),
                                                }),
                                              className: `framer-114nr6f`,
                                              "data-framer-name": `Base`,
                                              fonts: [`GF;IBM Plex Mono-500`],
                                              transformTemplate: cr,
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          /*#__PURE__*/ d(v, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              W(`v36`, h) ??
                                              /*#__PURE__*/ d(o, {
                                                children: /*#__PURE__*/ d(`p`, {
                                                  className: `framer-styles-preset-20koot`,
                                                  "data-styles-preset": `ub82bN_DX`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                  },
                                                  children: ` 邀请合适的 Builder ⽤⼾加⼊每个项⽬`,
                                                }),
                                              }),
                                            className: `framer-c2z1oq`,
                                            "data-framer-name": `Base`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ f(`div`, {
                                        className: `framer-c6ja0c`,
                                        children: [
                                          /*#__PURE__*/ d(`div`, {
                                            className: `framer-ac5klt`,
                                            children: /*#__PURE__*/ d(v, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                W(`v37`, h) ??
                                                /*#__PURE__*/ d(o, {
                                                  children: /*#__PURE__*/ d(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                      "--framer-font-family": `"IBM Plex Mono", monospace`,
                                                      "--framer-font-size": `21px`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-letter-spacing": `0px`,
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      "--framer-text-transform": `capitalize`,
                                                    },
                                                    children: `02`,
                                                  }),
                                                }),
                                              className: `framer-18yaq97`,
                                              "data-framer-name": `Base`,
                                              fonts: [`GF;IBM Plex Mono-500`],
                                              transformTemplate: cr,
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          /*#__PURE__*/ d(v, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              W(`v38`, h) ??
                                              /*#__PURE__*/ d(o, {
                                                children: /*#__PURE__*/ d(`p`, {
                                                  className: `framer-styles-preset-20koot`,
                                                  "data-styles-preset": `ub82bN_DX`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                  },
                                                  children: `在统⼀的结构化空间中管理彼此关联的运营模块`,
                                                }),
                                              }),
                                            className: `framer-fz8tmj`,
                                            "data-framer-name": `Base`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ f(`div`, {
                                        className: `framer-18r9ea0`,
                                        children: [
                                          /*#__PURE__*/ d(`div`, {
                                            className: `framer-bazma9`,
                                            children: /*#__PURE__*/ d(v, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                W(`v39`, h) ??
                                                /*#__PURE__*/ d(o, {
                                                  children: /*#__PURE__*/ d(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                      "--framer-font-family": `"IBM Plex Mono", monospace`,
                                                      "--framer-font-size": `21px`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-letter-spacing": `0px`,
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      "--framer-text-transform": `capitalize`,
                                                    },
                                                    children: `03`,
                                                  }),
                                                }),
                                              className: `framer-s9m58y`,
                                              "data-framer-name": `Base`,
                                              fonts: [`GF;IBM Plex Mono-500`],
                                              transformTemplate: cr,
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          /*#__PURE__*/ d(v, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              W(`v40`, h) ??
                                              /*#__PURE__*/ d(o, {
                                                children: /*#__PURE__*/ d(`p`, {
                                                  className: `framer-styles-preset-20koot`,
                                                  "data-styles-preset": `ub82bN_DX`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                  },
                                                  children: `独⽴管理每个应⽤的版本历史和发布节奏`,
                                                }),
                                              }),
                                            className: `framer-1hp7amj`,
                                            "data-framer-name": `Base`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ f(G, {
                                __framer__animate: { transition: Y },
                                __framer__animateOnce: !0,
                                __framer__enter: J,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-iyjzws`,
                                "data-border": !0,
                                "data-framer-name": `示例：需求文档`,
                                children: [
                                  /*#__PURE__*/ f(`div`, {
                                    className: `framer-1jan2ha`,
                                    "data-border": !0,
                                    "data-framer-name": `Container`,
                                    children: [
                                      /*#__PURE__*/ d(`div`, {
                                        className: `framer-wjlksc`,
                                        "data-framer-name": `Text`,
                                      }),
                                      /*#__PURE__*/ d(`div`, {
                                        className: `framer-zn7n8x`,
                                        "data-framer-name": `Text`,
                                      }),
                                      /*#__PURE__*/ d(`div`, {
                                        className: `framer-1n03ke8`,
                                        "data-framer-name": `Text`,
                                      }),
                                      /*#__PURE__*/ d(`div`, {
                                        className: `framer-17z9jir`,
                                        "data-framer-name": `Text`,
                                        children: /*#__PURE__*/ d(R, {
                                          breakpoint: k,
                                          overrides: {
                                            fUotBm3xr: {
                                              children:
                                                W(`v42`, h) ??
                                                /*#__PURE__*/ d(o, {
                                                  children: /*#__PURE__*/ d(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                      "--framer-font-family": `"IBM Plex Mono"`,
                                                      "--framer-font-size": `6px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `400`,
                                                      "--framer-letter-spacing": `0px`,
                                                      "--framer-line-height": `9.176215277777779px`,
                                                      "--framer-text-color": `rgb(120, 127, 136)`,
                                                    },
                                                    children: `/tier0 项目`,
                                                  }),
                                                }),
                                            },
                                          },
                                          children: /*#__PURE__*/ d(v, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              W(`v41`, h) ??
                                              /*#__PURE__*/ d(o, {
                                                children: /*#__PURE__*/ d(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-font-size": `11px`,
                                                    "--framer-line-height": `17.05px`,
                                                  },
                                                  children: /*#__PURE__*/ d(`span`, {
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                      "--framer-font-family": `"IBM Plex Mono"`,
                                                      "--framer-font-size": `11px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `400`,
                                                      "--framer-letter-spacing": `0px`,
                                                      "--framer-text-color": `rgb(120, 127, 136)`,
                                                    },
                                                    children: `/tier0 项目`,
                                                  }),
                                                }),
                                              }),
                                            className: `framer-1nq2fjn`,
                                            "data-framer-name": `/tier0 project`,
                                            fonts: [`GF;IBM Plex Mono-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ d(`div`, {
                                    className: `framer-c3ib5g`,
                                    "data-framer-name": `Container`,
                                    children: /*#__PURE__*/ f(`div`, {
                                      className: `framer-xsddql`,
                                      "data-framer-name": `Frame 2147224437`,
                                      children: [
                                        /*#__PURE__*/ d(`div`, {
                                          className: `framer-1rkpeas`,
                                          "data-framer-name": `Group 1707478161`,
                                          children: /*#__PURE__*/ d(`div`, {
                                            className: `framer-1gkjz30`,
                                            "data-framer-name": `Frame 1321316167`,
                                            children: /*#__PURE__*/ f(`div`, {
                                              className: `framer-1on0s0i`,
                                              "data-framer-name": `Frame 1321316170`,
                                              children: [
                                                /*#__PURE__*/ d(`div`, {
                                                  className: `framer-1ikze5c`,
                                                  "data-framer-name": `Frame 1707478160`,
                                                  children: /*#__PURE__*/ d(`div`, {
                                                    className: `framer-14i6kd`,
                                                    "data-framer-name": `Group 1707478168`,
                                                    children: /*#__PURE__*/ f(`div`, {
                                                      className: `framer-gfrxc3`,
                                                      "data-framer-name": `Group 1707478167`,
                                                      children: [
                                                        /*#__PURE__*/ d(R, {
                                                          breakpoint: k,
                                                          overrides: {
                                                            fUotBm3xr: {
                                                              children:
                                                                W(`v44`, h) ??
                                                                /*#__PURE__*/ d(o, {
                                                                  children: /*#__PURE__*/ d(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                                                      "--framer-font-family": `"Inter"`,
                                                                      "--framer-font-size": `12px`,
                                                                      "--framer-font-style": `normal`,
                                                                      "--framer-font-variation-axes": `normal`,
                                                                      "--framer-font-weight": `600`,
                                                                      "--framer-letter-spacing": `-0.01em`,
                                                                      "--framer-line-height": `14.229861111111111px`,
                                                                      "--framer-text-color": `rgb(5, 11, 20)`,
                                                                    },
                                                                    children: `MES 运营项目`,
                                                                  }),
                                                                }),
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ d(v, {
                                                            __fromCanvasComponent: !0,
                                                            children:
                                                              W(`v43`, h) ??
                                                              /*#__PURE__*/ d(o, {
                                                                children: /*#__PURE__*/ d(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--framer-font-size": `22.0328369140625px`,
                                                                    "--framer-line-height": `26.44px`,
                                                                  },
                                                                  children: /*#__PURE__*/ d(
                                                                    `span`,
                                                                    {
                                                                      style: {
                                                                        "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                                                        "--framer-font-family": `"Inter"`,
                                                                        "--framer-font-size": `22.03px`,
                                                                        "--framer-font-style": `normal`,
                                                                        "--framer-font-variation-axes": `normal`,
                                                                        "--framer-font-weight": `600`,
                                                                        "--framer-letter-spacing": `-0.01em`,
                                                                        "--framer-text-color": `rgb(5, 11, 20)`,
                                                                      },
                                                                      children: `MES 运营项目`,
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                            className: `framer-gc2lv8`,
                                                            "data-framer-name": `MES 运营项目`,
                                                            fonts: [`Inter-SemiBold`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                        /*#__PURE__*/ d(R, {
                                                          breakpoint: k,
                                                          overrides: {
                                                            fUotBm3xr: {
                                                              children:
                                                                W(`v46`, h) ??
                                                                /*#__PURE__*/ d(o, {
                                                                  children: /*#__PURE__*/ d(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                                      "--framer-font-size": `6px`,
                                                                      "--framer-font-style": `normal`,
                                                                      "--framer-font-variation-axes": `normal`,
                                                                      "--framer-font-weight": `400`,
                                                                      "--framer-line-height": `8.697222222222221px`,
                                                                      "--framer-text-color": `rgb(135, 135, 135)`,
                                                                    },
                                                                    children: `用于数据分析部门的商业智能系统`,
                                                                  }),
                                                                }),
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ d(v, {
                                                            __fromCanvasComponent: !0,
                                                            children:
                                                              W(`v45`, h) ??
                                                              /*#__PURE__*/ d(o, {
                                                                children: /*#__PURE__*/ d(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--framer-font-size": `10.281991004943848px`,
                                                                    "--framer-line-height": `16.16px`,
                                                                  },
                                                                  children: /*#__PURE__*/ d(
                                                                    `span`,
                                                                    {
                                                                      style: {
                                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                                        "--framer-font-size": `10.28px`,
                                                                        "--framer-font-style": `normal`,
                                                                        "--framer-font-variation-axes": `normal`,
                                                                        "--framer-font-weight": `400`,
                                                                        "--framer-text-color": `rgb(135, 135, 135)`,
                                                                      },
                                                                      children: `用于数据分析部门的商业智能系统`,
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                            className: `framer-1rvcs6m`,
                                                            "data-framer-name": `Business Intelligence System for data analytics`,
                                                            fonts: [`GF;IBM Plex Sans-regular`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                        /*#__PURE__*/ d(`div`, {
                                                          className: `framer-4nx12e`,
                                                          "data-framer-name": `Frame 1321316006`,
                                                          children: /*#__PURE__*/ f(`div`, {
                                                            className: `framer-15jap2x`,
                                                            "data-framer-name": `icon/folder-closed`,
                                                            children: [
                                                              /*#__PURE__*/ d(E, {
                                                                className: `framer-1r7l1tv`,
                                                                "data-framer-name": `Vector`,
                                                                fill: `rgba(0,0,0,1)`,
                                                                intrinsicHeight: 18,
                                                                intrinsicWidth: 20,
                                                                svg: `<svg width="20" height="18" viewBox="-1 -1 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.79734 15.2774H16.1761C16.6527 15.2774 17.1099 15.088 17.447 14.751C17.784 14.4139 17.9734 13.9567 17.9734 13.4801V4.49335C17.9734 4.01667 17.784 3.55951 17.447 3.22244C17.1099 2.88537 16.6527 2.69601 16.1761 2.69601H9.04961C8.75357 2.69448 8.4625 2.61985 8.20225 2.47875C7.942 2.33765 7.72063 2.13445 7.55782 1.88721L6.82091 0.808803C6.65809 0.56156 6.43672 0.358361 6.17647 0.217262C5.91622 0.0761624 5.62515 0.00153155 5.32911 0H1.79734C1.32066 0 0.863495 0.189362 0.526429 0.526429C0.189362 0.863495 0 1.32066 0 1.79734V13.4801C0 14.4686 0.808803 15.2774 1.79734 15.2774Z" stroke="#628210" stroke-width="1.34801" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                                                withExternalLayout: !0,
                                                              }),
                                                              /*#__PURE__*/ d(E, {
                                                                className: `framer-89uvn7`,
                                                                "data-framer-name": `Vector`,
                                                                fill: `rgba(0,0,0,1)`,
                                                                intrinsicHeight: 4,
                                                                intrinsicWidth: 22,
                                                                svg: `<svg width="22" height="4" viewBox="-1 -1 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.675781 0.673828H18.6492" stroke="#628210" stroke-width="1.34801" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            ],
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                }),
                                                /*#__PURE__*/ f(`div`, {
                                                  className: `framer-iqwczy`,
                                                  "data-framer-name": `Frame 1707478207`,
                                                  children: [
                                                    /*#__PURE__*/ d(R, {
                                                      breakpoint: k,
                                                      overrides: {
                                                        fUotBm3xr: {
                                                          children:
                                                            W(`v48`, h) ??
                                                            /*#__PURE__*/ d(o, {
                                                              children: /*#__PURE__*/ d(`p`, {
                                                                dir: `auto`,
                                                                style: {
                                                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                  "--framer-font-family": `"IBM Plex Sans"`,
                                                                  "--framer-font-size": `6px`,
                                                                  "--framer-font-style": `normal`,
                                                                  "--framer-font-variation-axes": `normal`,
                                                                  "--framer-font-weight": `400`,
                                                                  "--framer-line-height": `8.697222222222221px`,
                                                                  "--framer-text-alignment": `right`,
                                                                  "--framer-text-color": `rgb(135, 135, 135)`,
                                                                },
                                                                children: `4 个应用 · 12 个用户`,
                                                              }),
                                                            }),
                                                        },
                                                      },
                                                      children: /*#__PURE__*/ d(v, {
                                                        __fromCanvasComponent: !0,
                                                        children:
                                                          W(`v47`, h) ??
                                                          /*#__PURE__*/ d(o, {
                                                            children: /*#__PURE__*/ d(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-font-size": `10.281991004943848px`,
                                                                "--framer-line-height": `16.16px`,
                                                                "--framer-text-alignment": `right`,
                                                              },
                                                              children: /*#__PURE__*/ d(`span`, {
                                                                style: {
                                                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                  "--framer-font-family": `"IBM Plex Sans"`,
                                                                  "--framer-font-size": `10.28px`,
                                                                  "--framer-font-style": `normal`,
                                                                  "--framer-font-variation-axes": `normal`,
                                                                  "--framer-font-weight": `400`,
                                                                  "--framer-text-color": `rgb(135, 135, 135)`,
                                                                },
                                                                children: `4 个应用 · 12 个用户`,
                                                              }),
                                                            }),
                                                          }),
                                                        className: `framer-16i9jfz`,
                                                        "data-framer-name": `4 个应用 · 12 位用户`,
                                                        fonts: [`GF;IBM Plex Sans-regular`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ d(`div`, {
                                                      className: `framer-1kogbx2`,
                                                      "data-framer-name": `Frame 2147224433`,
                                                      children: /*#__PURE__*/ d(`div`, {
                                                        className: `framer-1cvphit`,
                                                        "data-border": !0,
                                                        "data-framer-name": `Favourite`,
                                                        children: /*#__PURE__*/ d(E, {
                                                          className: `framer-1y4srof`,
                                                          "data-framer-name": `Vector`,
                                                          fill: `rgba(0,0,0,1)`,
                                                          intrinsicHeight: 12,
                                                          intrinsicWidth: 12,
                                                          svg: `<svg width="12" height="12" viewBox="-1 -1 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.89619 0L6.40911 3.06501L9.79237 3.55953L7.34428 5.94397L7.92203 9.31255L4.89619 7.72129L1.87034 9.31255L2.44809 5.94397L0 3.55953L3.38326 3.06501L4.89619 0Z" stroke="#050B14" stroke-width="0.587542" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ f(`div`, {
                                          className: `framer-wsw9sm`,
                                          "data-framer-name": `Frame 2147224436`,
                                          children: [
                                            /*#__PURE__*/ f(`div`, {
                                              className: `framer-1w44zl7`,
                                              children: [
                                                /*#__PURE__*/ f(`div`, {
                                                  className: `framer-1dpejr1`,
                                                  "data-framer-name": `Group 1707478237`,
                                                  children: [
                                                    /*#__PURE__*/ f(`div`, {
                                                      className: `framer-1pwvdte`,
                                                      "data-border": !0,
                                                      "data-framer-name": `Library Card`,
                                                      children: [
                                                        /*#__PURE__*/ d(`div`, {
                                                          className: `framer-aubd47`,
                                                          "data-framer-name": `Cover`,
                                                          children: /*#__PURE__*/ d(`div`, {
                                                            className: `framer-g7n07u`,
                                                            "data-framer-name": `Group 5`,
                                                          }),
                                                        }),
                                                        /*#__PURE__*/ d(R, {
                                                          breakpoint: k,
                                                          overrides: {
                                                            fUotBm3xr: {
                                                              background: {
                                                                alt: ``,
                                                                fit: `fit`,
                                                                intrinsicHeight: 110,
                                                                intrinsicWidth: 249,
                                                                loading: w((x?.y || 0) + 3470.02),
                                                                pixelHeight: 110,
                                                                pixelWidth: 249,
                                                                positionX: `center`,
                                                                positionY: `center`,
                                                                sizes: `268.02px`,
                                                                src: `../../assets/images/BjWavmuTJLFRuakCKxlRtGqZtvc.svg`,
                                                              },
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ d(N, {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fit`,
                                                              intrinsicHeight: 110,
                                                              intrinsicWidth: 249,
                                                              loading: w((x?.y || 0) + 1895.9478),
                                                              pixelHeight: 110,
                                                              pixelWidth: 249,
                                                              positionX: `center`,
                                                              positionY: `center`,
                                                              sizes: `249px`,
                                                              src: `../../assets/images/BjWavmuTJLFRuakCKxlRtGqZtvc.svg`,
                                                            },
                                                            className: `framer-11tnf5f`,
                                                            "data-framer-name": `Body`,
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                    /*#__PURE__*/ d(R, {
                                                      breakpoint: k,
                                                      overrides: {
                                                        fUotBm3xr: {
                                                          background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: w((x?.y || 0) + 3351.48),
                                                            pixelHeight: 1574,
                                                            pixelWidth: 3030,
                                                            sizes: `220.92px`,
                                                            src: `../../assets/images/tZQYflFNdtGfSWzu9DOa4nShGvo-65d319.png`,
                                                            srcSet: `../../assets/images/tZQYflFNdtGfSWzu9DOa4nShGvo.png 512w,../../assets/images/tZQYflFNdtGfSWzu9DOa4nShGvo-1688e5.png 1024w,../../assets/images/tZQYflFNdtGfSWzu9DOa4nShGvo-e7ac34.png 2048w,../../assets/images/tZQYflFNdtGfSWzu9DOa4nShGvo-65d319.png 3030w`,
                                                          },
                                                        },
                                                      },
                                                      children: /*#__PURE__*/ d(N, {
                                                        background: {
                                                          alt: ``,
                                                          fit: `fill`,
                                                          loading: w((x?.y || 0) + 1785.8252),
                                                          pixelHeight: 1574,
                                                          pixelWidth: 3030,
                                                          sizes: `205.2437px`,
                                                          src: `../../assets/images/tZQYflFNdtGfSWzu9DOa4nShGvo-65d319.png`,
                                                          srcSet: `../../assets/images/tZQYflFNdtGfSWzu9DOa4nShGvo.png 512w,../../assets/images/tZQYflFNdtGfSWzu9DOa4nShGvo-1688e5.png 1024w,../../assets/images/tZQYflFNdtGfSWzu9DOa4nShGvo-e7ac34.png 2048w,../../assets/images/tZQYflFNdtGfSWzu9DOa4nShGvo-65d319.png 3030w`,
                                                        },
                                                        className: `framer-1uwt5fa`,
                                                        "data-border": !0,
                                                        "data-framer-name": `ba940ebb3a0b19c26aea4802050ff049 1`,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ f(`div`, {
                                                  className: `framer-1157ere`,
                                                  "data-framer-name": `Group 1707478236`,
                                                  children: [
                                                    /*#__PURE__*/ f(`div`, {
                                                      className: `framer-41zhz7`,
                                                      "data-border": !0,
                                                      "data-framer-name": `Library Card`,
                                                      children: [
                                                        /*#__PURE__*/ d(`div`, {
                                                          className: `framer-kh2zh7`,
                                                          "data-framer-name": `Cover`,
                                                        }),
                                                        /*#__PURE__*/ d(R, {
                                                          breakpoint: k,
                                                          overrides: {
                                                            fUotBm3xr: {
                                                              background: {
                                                                alt: ``,
                                                                fit: `fit`,
                                                                intrinsicHeight: 110,
                                                                intrinsicWidth: 249,
                                                                loading: w((x?.y || 0) + 3723.51),
                                                                pixelHeight: 110,
                                                                pixelWidth: 249,
                                                                positionX: `center`,
                                                                positionY: `center`,
                                                                sizes: `268.02px`,
                                                                src: `../../assets/images/GdQm1zQEyS1MGCVIBFmWtWymgE.svg`,
                                                              },
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ d(N, {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fit`,
                                                              intrinsicHeight: 110,
                                                              intrinsicWidth: 249,
                                                              loading: w((x?.y || 0) + 1895.9478),
                                                              pixelHeight: 110,
                                                              pixelWidth: 249,
                                                              positionX: `center`,
                                                              positionY: `center`,
                                                              sizes: `249px`,
                                                              src: `../../assets/images/GdQm1zQEyS1MGCVIBFmWtWymgE.svg`,
                                                            },
                                                            className: `framer-1tec7h6`,
                                                            "data-framer-name": `Body`,
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                    /*#__PURE__*/ d(R, {
                                                      breakpoint: k,
                                                      overrides: {
                                                        fUotBm3xr: {
                                                          background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: w((x?.y || 0) + 3605.79),
                                                            pixelHeight: 1143,
                                                            pixelWidth: 2048,
                                                            sizes: `200.72px`,
                                                            src: `../../assets/images/7rpxg1DX2CWO1Yx9ng5CElOpW8-12efa4.png`,
                                                            srcSet: `../../assets/images/7rpxg1DX2CWO1Yx9ng5CElOpW8.png 512w,../../assets/images/7rpxg1DX2CWO1Yx9ng5CElOpW8-6aad34.png 1024w,../../assets/images/7rpxg1DX2CWO1Yx9ng5CElOpW8-12efa4.png 2048w`,
                                                          },
                                                        },
                                                      },
                                                      children: /*#__PURE__*/ d(N, {
                                                        background: {
                                                          alt: ``,
                                                          fit: `fill`,
                                                          loading: w((x?.y || 0) + 1786.5791),
                                                          pixelHeight: 1143,
                                                          pixelWidth: 2048,
                                                          sizes: `186.4831px`,
                                                          src: `../../assets/images/7rpxg1DX2CWO1Yx9ng5CElOpW8-12efa4.png`,
                                                          srcSet: `../../assets/images/7rpxg1DX2CWO1Yx9ng5CElOpW8.png 512w,../../assets/images/7rpxg1DX2CWO1Yx9ng5CElOpW8-6aad34.png 1024w,../../assets/images/7rpxg1DX2CWO1Yx9ng5CElOpW8-12efa4.png 2048w`,
                                                        },
                                                        className: `framer-1hi0cyp`,
                                                        "data-framer-name": `ba940ebb3a0b19c26aea4802050ff049 3`,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ f(`div`, {
                                              className: `framer-1mjtufi`,
                                              children: [
                                                /*#__PURE__*/ f(`div`, {
                                                  className: `framer-xmm37d`,
                                                  "data-framer-name": `Group 1707478238`,
                                                  children: [
                                                    /*#__PURE__*/ f(`div`, {
                                                      className: `framer-17kbfl7`,
                                                      "data-border": !0,
                                                      "data-framer-name": `Library Card`,
                                                      children: [
                                                        /*#__PURE__*/ d(`div`, {
                                                          className: `framer-ouqytz`,
                                                          "data-framer-name": `Cover`,
                                                        }),
                                                        /*#__PURE__*/ d(R, {
                                                          breakpoint: k,
                                                          overrides: {
                                                            fUotBm3xr: {
                                                              background: {
                                                                alt: ``,
                                                                fit: `fit`,
                                                                intrinsicHeight: 110,
                                                                intrinsicWidth: 249,
                                                                loading: w((x?.y || 0) + 3978.77),
                                                                pixelHeight: 110,
                                                                pixelWidth: 249,
                                                                positionX: `center`,
                                                                positionY: `center`,
                                                                sizes: `268.02px`,
                                                                src: `../../assets/images/65vWLLmUylNDm2fXeuPOnCWxiYo.svg`,
                                                              },
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ d(N, {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fit`,
                                                              intrinsicHeight: 110,
                                                              intrinsicWidth: 249,
                                                              loading: w((x?.y || 0) + 2141.9478),
                                                              pixelHeight: 110,
                                                              pixelWidth: 249,
                                                              positionX: `center`,
                                                              positionY: `center`,
                                                              sizes: `249px`,
                                                              src: `../../assets/images/65vWLLmUylNDm2fXeuPOnCWxiYo.svg`,
                                                            },
                                                            className: `framer-25ljii`,
                                                            "data-framer-name": `Body`,
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                    /*#__PURE__*/ d(R, {
                                                      breakpoint: k,
                                                      overrides: {
                                                        fUotBm3xr: {
                                                          background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: w((x?.y || 0) + 3862.81),
                                                            pixelHeight: 1881,
                                                            pixelWidth: 4096,
                                                            sizes: `233.1px`,
                                                            src: `../../assets/images/SuzeqmZVAgGUTj4k0BnRlBCgFok-bc1e3c.png`,
                                                            srcSet: `../../assets/images/SuzeqmZVAgGUTj4k0BnRlBCgFok.png 512w,../../assets/images/SuzeqmZVAgGUTj4k0BnRlBCgFok-21d8c3.png 1024w,../../assets/images/SuzeqmZVAgGUTj4k0BnRlBCgFok-9376ce.png 2048w,../../assets/images/SuzeqmZVAgGUTj4k0BnRlBCgFok-bc1e3c.png 4096w`,
                                                          },
                                                        },
                                                      },
                                                      children: /*#__PURE__*/ d(N, {
                                                        background: {
                                                          alt: ``,
                                                          fit: `fill`,
                                                          loading: w((x?.y || 0) + 2034.2139),
                                                          pixelHeight: 1881,
                                                          pixelWidth: 4096,
                                                          sizes: `216.5588px`,
                                                          src: `../../assets/images/SuzeqmZVAgGUTj4k0BnRlBCgFok-bc1e3c.png`,
                                                          srcSet: `../../assets/images/SuzeqmZVAgGUTj4k0BnRlBCgFok.png 512w,../../assets/images/SuzeqmZVAgGUTj4k0BnRlBCgFok-21d8c3.png 1024w,../../assets/images/SuzeqmZVAgGUTj4k0BnRlBCgFok-9376ce.png 2048w,../../assets/images/SuzeqmZVAgGUTj4k0BnRlBCgFok-bc1e3c.png 4096w`,
                                                        },
                                                        className: `framer-1s9y4zi`,
                                                        "data-border": !0,
                                                        "data-framer-name": `ba940ebb3a0b19c26aea4802050ff049 2`,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ f(`div`, {
                                                  className: `framer-eiivht`,
                                                  "data-framer-name": `Group 1707478235`,
                                                  children: [
                                                    /*#__PURE__*/ f(`div`, {
                                                      className: `framer-1t4qyfg`,
                                                      "data-border": !0,
                                                      "data-framer-name": `Library Card`,
                                                      children: [
                                                        /*#__PURE__*/ d(`div`, {
                                                          className: `framer-7hu08i`,
                                                          "data-framer-name": `Cover`,
                                                        }),
                                                        /*#__PURE__*/ d(R, {
                                                          breakpoint: k,
                                                          overrides: {
                                                            fUotBm3xr: {
                                                              background: {
                                                                alt: ``,
                                                                fit: `fit`,
                                                                intrinsicHeight: 110,
                                                                intrinsicWidth: 249,
                                                                loading: w((x?.y || 0) + 4232.79),
                                                                pixelHeight: 110,
                                                                pixelWidth: 249,
                                                                positionX: `center`,
                                                                positionY: `center`,
                                                                sizes: `268.02px`,
                                                                src: `../../assets/images/JeCjGhJ5TudKyeAwgPRJoprAVWQ.svg`,
                                                              },
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ d(N, {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fit`,
                                                              intrinsicHeight: 110,
                                                              intrinsicWidth: 249,
                                                              loading: w((x?.y || 0) + 2141.9478),
                                                              pixelHeight: 110,
                                                              pixelWidth: 249,
                                                              positionX: `center`,
                                                              positionY: `center`,
                                                              sizes: `249px`,
                                                              src: `../../assets/images/JeCjGhJ5TudKyeAwgPRJoprAVWQ.svg`,
                                                            },
                                                            className: `framer-wh4ry0`,
                                                            "data-framer-name": `Body`,
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                    /*#__PURE__*/ d(R, {
                                                      breakpoint: k,
                                                      overrides: {
                                                        fUotBm3xr: {
                                                          background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: w((x?.y || 0) + 4115.53),
                                                            pixelHeight: 1560,
                                                            pixelWidth: 3019,
                                                            sizes: `211.62px`,
                                                            src: `../../assets/images/Bzf93vNozH4pEKmD9JFU5hkPUws-65b281.png`,
                                                            srcSet: `../../assets/images/Bzf93vNozH4pEKmD9JFU5hkPUws.png 512w,../../assets/images/Bzf93vNozH4pEKmD9JFU5hkPUws-8fbb2b.png 1024w,../../assets/images/Bzf93vNozH4pEKmD9JFU5hkPUws-3b2978.png 2048w,../../assets/images/Bzf93vNozH4pEKmD9JFU5hkPUws-65b281.png 3019w`,
                                                          },
                                                        },
                                                      },
                                                      children: /*#__PURE__*/ d(N, {
                                                        background: {
                                                          alt: ``,
                                                          fit: `fill`,
                                                          loading: w((x?.y || 0) + 2032.999),
                                                          pixelHeight: 1560,
                                                          pixelWidth: 3019,
                                                          sizes: `196.6039px`,
                                                          src: `../../assets/images/Bzf93vNozH4pEKmD9JFU5hkPUws-65b281.png`,
                                                          srcSet: `../../assets/images/Bzf93vNozH4pEKmD9JFU5hkPUws.png 512w,../../assets/images/Bzf93vNozH4pEKmD9JFU5hkPUws-8fbb2b.png 1024w,../../assets/images/Bzf93vNozH4pEKmD9JFU5hkPUws-3b2978.png 2048w,../../assets/images/Bzf93vNozH4pEKmD9JFU5hkPUws-65b281.png 3019w`,
                                                        },
                                                        className: `framer-7c7kph`,
                                                        "data-border": !0,
                                                        "data-framer-name": `ba940ebb3a0b19c26aea4802050ff049 4`,
                                                      }),
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
                                ],
                              }),
                            ],
                          }),
                        }),
                        /*#__PURE__*/ d(E, {
                          className: `framer-1ivjx0m`,
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
                        /*#__PURE__*/ f(`div`, {
                          className: `framer-1ca2jua`,
                          id: de,
                          ref: I,
                          children: [
                            /*#__PURE__*/ f(G, {
                              __framer__animate: { transition: Z },
                              __framer__animateOnce: !1,
                              __framer__enter: X,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-hv8vci`,
                              children: [
                                /*#__PURE__*/ f(`div`, {
                                  className: `framer-11ekqg2`,
                                  children: [
                                    /*#__PURE__*/ d(v, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        W(`v49`, h) ??
                                        /*#__PURE__*/ d(o, {
                                          children: /*#__PURE__*/ d(`p`, {
                                            className: `framer-styles-preset-140plv3`,
                                            "data-styles-preset": `TBRoaUTAt`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-d2d554b8-e538-4f3d-a601-4167e4c07699, rgba(9, 9, 9, 0.8))`,
                                            },
                                            children: `■ 模板库`,
                                          }),
                                        }),
                                      className: `framer-109y4bi`,
                                      "data-framer-name": `Applications do not just consume data — they write`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ f(`div`, {
                                      className: `framer-xfo4vd`,
                                      children: [
                                        /*#__PURE__*/ f(`div`, {
                                          className: `framer-bi2cg7`,
                                          "data-framer-name": `Frame 2147224399`,
                                          children: [
                                            /*#__PURE__*/ d(R, {
                                              breakpoint: k,
                                              overrides: {
                                                fUotBm3xr: {
                                                  children:
                                                    W(`v51`, h) ??
                                                    /*#__PURE__*/ d(o, {
                                                      children: /*#__PURE__*/ f(`h1`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `30px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `400`,
                                                          "--framer-text-alignment": `center`,
                                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                        },
                                                        children: [
                                                          `从`,
                                                          /*#__PURE__*/ d(`span`, {
                                                            style: { "--framer-font-size": `35px` },
                                                            children: /*#__PURE__*/ d(`br`, {}),
                                                          }),
                                                          /*#__PURE__*/ d(`span`, {
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                              "--framer-font-family": `"IBM Plex Sans"`,
                                                              "--framer-font-size": `35px`,
                                                              "--framer-font-style": `normal`,
                                                              "--framer-font-variation-axes": `normal`,
                                                              "--framer-font-weight": `500`,
                                                            },
                                                            children: `[模板]`,
                                                          }),
                                                          /*#__PURE__*/ d(`span`, {
                                                            style: { "--framer-font-size": `35px` },
                                                            children: /*#__PURE__*/ d(`br`, {}),
                                                          }),
                                                          `开始，打造你的专属内容`,
                                                        ],
                                                      }),
                                                    }),
                                                  fonts: [
                                                    `GF;IBM Plex Sans-regular`,
                                                    `GF;IBM Plex Sans-500`,
                                                  ],
                                                },
                                              },
                                              children: /*#__PURE__*/ d(v, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  W(`v50`, h) ??
                                                  /*#__PURE__*/ d(o, {
                                                    children: /*#__PURE__*/ d(`h2`, {
                                                      className: `framer-styles-preset-1k5p4j8`,
                                                      "data-styles-preset": `F3NdZsOi7`,
                                                      dir: `auto`,
                                                      children: `从`,
                                                    }),
                                                  }),
                                                className: `framer-1iycwtq`,
                                                "data-framer-name": `From`,
                                                effect: q,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            L() &&
                                              /*#__PURE__*/ d(v, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  W(`v52`, h) ??
                                                  /*#__PURE__*/ d(o, {
                                                    children: /*#__PURE__*/ f(`h2`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                        "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                        "--framer-font-size": `44px`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      },
                                                      children: [
                                                        /*#__PURE__*/ d(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                            "--framer-font-weight": `400`,
                                                          },
                                                          children: `[`,
                                                        }),
                                                        `模版`,
                                                        /*#__PURE__*/ d(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                            "--framer-font-weight": `400`,
                                                          },
                                                          children: `]`,
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                className: `framer-1sy55ey hidden-7buxd7`,
                                                "data-framer-name": `[generated code]`,
                                                effect: q,
                                                fonts: [
                                                  `GF;IBM Plex Sans-regular`,
                                                  `GF;IBM Plex Sans-500`,
                                                ],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            /*#__PURE__*/ d(R, {
                                              breakpoint: k,
                                              overrides: {
                                                fUotBm3xr: {
                                                  children:
                                                    W(`v51`, h) ??
                                                    /*#__PURE__*/ d(o, {
                                                      children: /*#__PURE__*/ f(`h1`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `30px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `400`,
                                                          "--framer-text-alignment": `center`,
                                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                        },
                                                        children: [
                                                          `从`,
                                                          /*#__PURE__*/ d(`span`, {
                                                            style: { "--framer-font-size": `35px` },
                                                            children: /*#__PURE__*/ d(`br`, {}),
                                                          }),
                                                          /*#__PURE__*/ d(`span`, {
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                              "--framer-font-family": `"IBM Plex Sans"`,
                                                              "--framer-font-size": `35px`,
                                                              "--framer-font-style": `normal`,
                                                              "--framer-font-variation-axes": `normal`,
                                                              "--framer-font-weight": `500`,
                                                            },
                                                            children: `[模板]`,
                                                          }),
                                                          /*#__PURE__*/ d(`span`, {
                                                            style: { "--framer-font-size": `35px` },
                                                            children: /*#__PURE__*/ d(`br`, {}),
                                                          }),
                                                          `开始，打造你的专属内容`,
                                                        ],
                                                      }),
                                                    }),
                                                  fonts: [
                                                    `GF;IBM Plex Sans-regular`,
                                                    `GF;IBM Plex Sans-500`,
                                                  ],
                                                },
                                              },
                                              children: /*#__PURE__*/ d(v, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  W(`v53`, h) ??
                                                  /*#__PURE__*/ d(o, {
                                                    children: /*#__PURE__*/ d(`h1`, {
                                                      className: `framer-styles-preset-1k5p4j8`,
                                                      "data-styles-preset": `F3NdZsOi7`,
                                                      dir: `auto`,
                                                      children: `开始`,
                                                    }),
                                                  }),
                                                className: `framer-nacggp`,
                                                "data-framer-name": `From`,
                                                effect: q,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                        L() &&
                                          /*#__PURE__*/ d(`div`, {
                                            className: `framer-138psyk hidden-7buxd7`,
                                            "data-framer-name": `Frame 2147224399`,
                                            children: /*#__PURE__*/ d(v, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                W(`v54`, h) ??
                                                /*#__PURE__*/ d(o, {
                                                  children: /*#__PURE__*/ d(`h2`, {
                                                    className: `framer-styles-preset-1k5p4j8`,
                                                    "data-styles-preset": `F3NdZsOi7`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                    },
                                                    children: `专属定制，如你所愿。`,
                                                  }),
                                                }),
                                              className: `framer-z1wzn4`,
                                              "data-framer-name": `To`,
                                              effect: q,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ d(`div`, {
                                  className: `framer-12qj2m5`,
                                  children: /*#__PURE__*/ d(R, {
                                    breakpoint: k,
                                    overrides: {
                                      fUotBm3xr: {
                                        children:
                                          W(`v56`, h) ??
                                          /*#__PURE__*/ d(o, {
                                            children: /*#__PURE__*/ d(`p`, {
                                              className: `framer-styles-preset-1ful33y`,
                                              "data-styles-preset": `HNigw6pHS`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `left` },
                                              children: `直接使⽤现成的业务应⽤模板，让它们适配你的⼯作流，或作为 AI ⽣成的起点。`,
                                            }),
                                          }),
                                      },
                                    },
                                    children: /*#__PURE__*/ d(v, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        W(`v55`, h) ??
                                        /*#__PURE__*/ d(o, {
                                          children: /*#__PURE__*/ d(`p`, {
                                            className: `framer-styles-preset-1ful33y`,
                                            "data-styles-preset": `HNigw6pHS`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `直接使⽤现成的业务应⽤模板，让它们适配你的⼯作流，或作为 AI ⽣成的起点。`,
                                          }),
                                        }),
                                      className: `framer-131bifb`,
                                      "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ f(`div`, {
                              className: `framer-1gkw2f5`,
                              "data-framer-name": `Frame 2147224449`,
                              children: [
                                /*#__PURE__*/ f(G, {
                                  __framer__animate: { transition: Y },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-zfw34r`,
                                  "data-framer-name": `Frame 2147224448`,
                                  children: [
                                    /*#__PURE__*/ d(R, {
                                      breakpoint: k,
                                      overrides: {
                                        fUotBm3xr: { width: `310px`, y: (x?.y || 0) + 4759.6 },
                                      },
                                      children: /*#__PURE__*/ d(M, {
                                        height: 539,
                                        width: `416px`,
                                        y: (x?.y || 0) + 2966.45,
                                        children: /*#__PURE__*/ d(F, {
                                          className: `framer-g3dva5-container`,
                                          nodeId: `xjKXMU8IZ`,
                                          scopeId: `CtRSYVoCz`,
                                          children: /*#__PURE__*/ d(R, {
                                            breakpoint: k,
                                            overrides: { fUotBm3xr: { style: { width: `100%` } } },
                                            children: /*#__PURE__*/ d(H, {
                                              height: `100%`,
                                              id: `xjKXMU8IZ`,
                                              layoutId: `xjKXMU8IZ`,
                                              Li6nd1HLB: Q(
                                                {
                                                  pixelHeight: 1095,
                                                  pixelWidth: 1713,
                                                  src: `../../assets/images/b5Pa0nJCbyydNcNIOX7vTA4eY-a03ffc.png`,
                                                  srcSet: `../../assets/images/b5Pa0nJCbyydNcNIOX7vTA4eY.png 512w,../../assets/images/b5Pa0nJCbyydNcNIOX7vTA4eY-6b6ba7.png 1024w,../../assets/images/b5Pa0nJCbyydNcNIOX7vTA4eY-a03ffc.png 1713w`,
                                                },
                                                ``
                                              ),
                                              O0cyw2iEd: `rgb(247, 253, 232)`,
                                              Smm4wN8uF:
                                                W(`v58`, h) ?? `创建、分配、跟踪并关闭生产任务。`,
                                              style: { height: `100%`, width: `100%` },
                                              W7R0w6U0f: W(`v57`, h) ?? `生产工单管理`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    /*#__PURE__*/ d(R, {
                                      breakpoint: k,
                                      overrides: {
                                        fUotBm3xr: { width: `310px`, y: (x?.y || 0) + 5314.6 },
                                      },
                                      children: /*#__PURE__*/ d(M, {
                                        height: 539,
                                        width: `416px`,
                                        y: (x?.y || 0) + 2966.45,
                                        children: /*#__PURE__*/ d(F, {
                                          className: `framer-l8ri9b-container`,
                                          nodeId: `W88102xll`,
                                          scopeId: `CtRSYVoCz`,
                                          children: /*#__PURE__*/ d(H, {
                                            height: `100%`,
                                            id: `W88102xll`,
                                            layoutId: `W88102xll`,
                                            Li6nd1HLB: Q(
                                              {
                                                pixelHeight: 1112,
                                                pixelWidth: 1713,
                                                src: `../../assets/images/1awLMYPYbAZ5ML4YsWUVO92X7E-5472ec.png`,
                                                srcSet: `../../assets/images/1awLMYPYbAZ5ML4YsWUVO92X7E.png 512w,../../assets/images/1awLMYPYbAZ5ML4YsWUVO92X7E-2d91ab.png 1024w,../../assets/images/1awLMYPYbAZ5ML4YsWUVO92X7E-5472ec.png 1713w`,
                                              },
                                              ``
                                            ),
                                            O0cyw2iEd: `rgb(236, 250, 199)`,
                                            Smm4wN8uF:
                                              W(`v60`, h) ??
                                              `执行检验、记录结果并处理异常。`,
                                            style: { width: `100%` },
                                            W7R0w6U0f: W(`v59`, h) ?? `质量检验应用`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    /*#__PURE__*/ d(R, {
                                      breakpoint: k,
                                      overrides: {
                                        fUotBm3xr: { width: `310px`, y: (x?.y || 0) + 5869.6 },
                                      },
                                      children: /*#__PURE__*/ d(M, {
                                        height: 539,
                                        width: `416px`,
                                        y: (x?.y || 0) + 2966.45,
                                        children: /*#__PURE__*/ d(F, {
                                          className: `framer-1uwtttx-container`,
                                          nodeId: `YX_ZKMWr0`,
                                          scopeId: `CtRSYVoCz`,
                                          children: /*#__PURE__*/ d(H, {
                                            height: `100%`,
                                            id: `YX_ZKMWr0`,
                                            layoutId: `YX_ZKMWr0`,
                                            Li6nd1HLB: Q(
                                              {
                                                pixelHeight: 1094,
                                                pixelWidth: 1713,
                                                src: `../../assets/images/38UaVUQCaBAF8crMPjIKZ3PafE-127aaf.png`,
                                                srcSet: `../../assets/images/38UaVUQCaBAF8crMPjIKZ3PafE.png 512w,../../assets/images/38UaVUQCaBAF8crMPjIKZ3PafE-1311bb.png 1024w,../../assets/images/38UaVUQCaBAF8crMPjIKZ3PafE-127aaf.png 1713w`,
                                              },
                                              ``
                                            ),
                                            O0cyw2iEd: `rgb(249, 249, 249)`,
                                            Smm4wN8uF:
                                              W(`v62`, h) ??
                                              `管理设备档案、归属、状态和历史记录。`,
                                            style: { width: `100%` },
                                            W7R0w6U0f: W(`v61`, h) ?? `设备资产登记簿`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ f(G, {
                                  __framer__animate: { transition: lr },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-tuqm12`,
                                  "data-framer-name": `Frame 2147224448`,
                                  children: [
                                    /*#__PURE__*/ d(R, {
                                      breakpoint: k,
                                      overrides: {
                                        fUotBm3xr: { width: `310px`, y: (x?.y || 0) + 6425.67 },
                                      },
                                      children: /*#__PURE__*/ d(M, {
                                        height: 539,
                                        width: `416px`,
                                        y: (x?.y || 0) + 3522.52,
                                        children: /*#__PURE__*/ d(F, {
                                          className: `framer-1q55w5i-container`,
                                          nodeId: `D3xbDlkLm`,
                                          scopeId: `CtRSYVoCz`,
                                          children: /*#__PURE__*/ d(H, {
                                            height: `100%`,
                                            id: `D3xbDlkLm`,
                                            layoutId: `D3xbDlkLm`,
                                            Li6nd1HLB: Q(
                                              {
                                                pixelHeight: 746,
                                                pixelWidth: 1430,
                                                src: `../../assets/images/tplHHm3CAJwpOeojQRrVq0oHg-bfd925.png`,
                                                srcSet: `../../assets/images/tplHHm3CAJwpOeojQRrVq0oHg.png 512w,../../assets/images/tplHHm3CAJwpOeojQRrVq0oHg-66b11e.png 1024w,../../assets/images/tplHHm3CAJwpOeojQRrVq0oHg-bfd925.png 1430w`,
                                              },
                                              ``
                                            ),
                                            O0cyw2iEd: `rgb(236, 250, 199)`,
                                            Smm4wN8uF:
                                              W(`v64`, h) ??
                                              `提交故障、分派工单、跟踪维修并完成任务。`,
                                            style: { width: `100%` },
                                            W7R0w6U0f: W(`v63`, h) ?? `维护申请与工作单`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    /*#__PURE__*/ d(R, {
                                      breakpoint: k,
                                      overrides: {
                                        fUotBm3xr: { width: `310px`, y: (x?.y || 0) + 6980.67 },
                                      },
                                      children: /*#__PURE__*/ d(M, {
                                        height: 539,
                                        width: `416px`,
                                        y: (x?.y || 0) + 3522.52,
                                        children: /*#__PURE__*/ d(F, {
                                          className: `framer-odmzbv-container`,
                                          nodeId: `eqfV9QTur`,
                                          scopeId: `CtRSYVoCz`,
                                          children: /*#__PURE__*/ d(H, {
                                            height: `100%`,
                                            id: `eqfV9QTur`,
                                            layoutId: `eqfV9QTur`,
                                            Li6nd1HLB: Q(
                                              {
                                                pixelHeight: 746,
                                                pixelWidth: 1430,
                                                src: `../../assets/images/a5tJTGywhaFc0n8xzMZ8EUWY3Zg-4c5d36.png`,
                                                srcSet: `../../assets/images/a5tJTGywhaFc0n8xzMZ8EUWY3Zg.png 512w,../../assets/images/a5tJTGywhaFc0n8xzMZ8EUWY3Zg-b7be35.png 1024w,../../assets/images/a5tJTGywhaFc0n8xzMZ8EUWY3Zg-4c5d36.png 1430w`,
                                              },
                                              ``
                                            ),
                                            O0cyw2iEd: `rgb(249, 249, 249)`,
                                            Smm4wN8uF:
                                              W(`v66`, h) ?? `标准化常规设备、安全和操作检查。`,
                                            style: { width: `100%` },
                                            W7R0w6U0f: W(`v65`, h) ?? `数字化检查清单`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    /*#__PURE__*/ d(R, {
                                      breakpoint: k,
                                      overrides: {
                                        fUotBm3xr: { width: `310px`, y: (x?.y || 0) + 7535.67 },
                                      },
                                      children: /*#__PURE__*/ d(M, {
                                        height: 539,
                                        width: `416px`,
                                        y: (x?.y || 0) + 3522.52,
                                        children: /*#__PURE__*/ d(F, {
                                          className: `framer-1v2b0s2-container`,
                                          nodeId: `c5OtlVUhq`,
                                          scopeId: `CtRSYVoCz`,
                                          children: /*#__PURE__*/ d(H, {
                                            height: `100%`,
                                            id: `c5OtlVUhq`,
                                            layoutId: `c5OtlVUhq`,
                                            Li6nd1HLB: Q(
                                              {
                                                pixelHeight: 747,
                                                pixelWidth: 1430,
                                                src: `../../assets/images/lO4gwlApGP4QMXpcIQl0XjCvZ0-448ecf.png`,
                                                srcSet: `../../assets/images/lO4gwlApGP4QMXpcIQl0XjCvZ0.png 512w,../../assets/images/lO4gwlApGP4QMXpcIQl0XjCvZ0-b0b92f.png 1024w,../../assets/images/lO4gwlApGP4QMXpcIQl0XjCvZ0-448ecf.png 1430w`,
                                              },
                                              ``
                                            ),
                                            O0cyw2iEd: `rgb(247, 253, 232)`,
                                            Smm4wN8uF:
                                              W(`v68`, h) ?? `跟踪库存、变动、位置和补货请求。`,
                                            style: { width: `100%` },
                                            W7R0w6U0f: W(`v67`, h) ?? `仓库库存管理`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        /*#__PURE__*/ d(E, {
                          className: `framer-v9a1ai`,
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
                        /*#__PURE__*/ f(G, {
                          __framer__animate: { transition: Y },
                          __framer__animateOnce: !0,
                          __framer__enter: J,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1oay9f6`,
                          "data-border": !0,
                          "data-framer-name": `Frame 2147224440`,
                          children: [
                            /*#__PURE__*/ f(`div`, {
                              className: `framer-kz14li`,
                              "data-framer-name": `Frame 2147224438`,
                              children: [
                                /*#__PURE__*/ f(`div`, {
                                  className: `framer-1lvan2c`,
                                  children: [
                                    /*#__PURE__*/ d(R, {
                                      breakpoint: k,
                                      overrides: {
                                        fUotBm3xr: {
                                          children:
                                            W(`v70`, h) ??
                                            /*#__PURE__*/ d(o, {
                                              children: /*#__PURE__*/ d(`p`, {
                                                className: `framer-styles-preset-140plv3`,
                                                "data-styles-preset": `TBRoaUTAt`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-d2d554b8-e538-4f3d-a601-4167e4c07699, rgba(9, 9, 9, 0.8))`,
                                                },
                                                children: `■ Tier0 数字工人`,
                                              }),
                                            }),
                                        },
                                      },
                                      children: /*#__PURE__*/ d(v, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v69`, h) ??
                                          /*#__PURE__*/ d(o, {
                                            children: /*#__PURE__*/ d(`p`, {
                                              className: `framer-styles-preset-140plv3`,
                                              "data-styles-preset": `TBRoaUTAt`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-d2d554b8-e538-4f3d-a601-4167e4c07699, rgba(9, 9, 9, 0.8))`,
                                              },
                                              children: `■ Tier0 数字工人`,
                                            }),
                                          }),
                                        className: `framer-152zvv1`,
                                        "data-framer-name": `■ Tier0 Digital Worker`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    /*#__PURE__*/ d(R, {
                                      breakpoint: k,
                                      overrides: {
                                        fUotBm3xr: {
                                          children:
                                            W(`v72`, h) ??
                                            /*#__PURE__*/ f(o, {
                                              children: [
                                                /*#__PURE__*/ d(`h2`, {
                                                  className: `framer-styles-preset-1k5p4j8`,
                                                  "data-styles-preset": `F3NdZsOi7`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-alignment": `center` },
                                                  children: `在电脑上构建应用，`,
                                                }),
                                                /*#__PURE__*/ d(`h2`, {
                                                  className: `framer-styles-preset-1k5p4j8`,
                                                  "data-styles-preset": `F3NdZsOi7`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-alignment": `center` },
                                                  children: `轻松交付给每一位员工。`,
                                                }),
                                              ],
                                            }),
                                        },
                                      },
                                      children: /*#__PURE__*/ d(v, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v71`, h) ??
                                          /*#__PURE__*/ f(o, {
                                            children: [
                                              /*#__PURE__*/ d(`h2`, {
                                                className: `framer-styles-preset-1k5p4j8`,
                                                "data-styles-preset": `F3NdZsOi7`,
                                                dir: `auto`,
                                                children: `在电脑上构建应用，`,
                                              }),
                                              /*#__PURE__*/ d(`h2`, {
                                                className: `framer-styles-preset-1k5p4j8`,
                                                "data-styles-preset": `F3NdZsOi7`,
                                                dir: `auto`,
                                                children: `轻松交付给每一位员工。`,
                                              }),
                                            ],
                                          }),
                                        className: `framer-12ie3tg`,
                                        "data-framer-name": `在电脑上构建，让每位员工都能随时使用。`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ d(R, {
                                  breakpoint: k,
                                  overrides: {
                                    fUotBm3xr: {
                                      children:
                                        W(`v74`, h) ??
                                        /*#__PURE__*/ d(o, {
                                          children: /*#__PURE__*/ d(`p`, {
                                            className: `framer-styles-preset-1ful33y`,
                                            "data-styles-preset": `HNigw6pHS`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `已发布的应⽤可通过 Web 和 Tier0 手机端 提供给受邀的⽤⼾，让⼀线团队在 iOS 和 Android 上访问正确的业务⼯作流程。`,
                                          }),
                                        }),
                                    },
                                  },
                                  children: /*#__PURE__*/ d(v, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      W(`v73`, h) ??
                                      /*#__PURE__*/ d(o, {
                                        children: /*#__PURE__*/ d(`p`, {
                                          className: `framer-styles-preset-1ful33y`,
                                          "data-styles-preset": `HNigw6pHS`,
                                          dir: `auto`,
                                          children: `已发布的应⽤可通过 Web 和 Tier0 手机端 提供给受邀的⽤⼾，让⼀线团队在 iOS 和 Android 上访问正确的业务⼯作流程。`,
                                        }),
                                      }),
                                    className: `framer-1cduqad`,
                                    "data-framer-name": `Tier0 Notebook gives engineers and analysts a powe`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                /*#__PURE__*/ f(`div`, {
                                  className: `framer-38tuz5`,
                                  "data-framer-name": `Frame 2147224439`,
                                  children: [
                                    /*#__PURE__*/ d(fr, {
                                      blockDocumentScrolling: !1,
                                      dismissWithEsc: !1,
                                      children: (e) =>
                                        /*#__PURE__*/ d(l, {
                                          children: /*#__PURE__*/ d(R, {
                                            breakpoint: k,
                                            overrides: { fUotBm3xr: { y: (x?.y || 0) + 8719.845 } },
                                            children: /*#__PURE__*/ d(M, {
                                              height: 40,
                                              width: `120px`,
                                              y: (x?.y || 0) + 4726.87,
                                              children: /*#__PURE__*/ f(F, {
                                                className: `framer-1zezk3-container`,
                                                id: `1zezk3`,
                                                nodeId: `kSDzoajRd`,
                                                ref: Se,
                                                scopeId: `CtRSYVoCz`,
                                                children: [
                                                  /*#__PURE__*/ d(V, {
                                                    FohZAC0KY: xe({ overlay: e }),
                                                    height: `100%`,
                                                    id: `kSDzoajRd`,
                                                    layoutId: `kSDzoajRd`,
                                                    style: { height: `100%`, width: `100%` },
                                                    variant: K(`f9JNI6wqi`),
                                                    width: `100%`,
                                                  }),
                                                  /*#__PURE__*/ d(ee, {
                                                    children:
                                                      e.visible &&
                                                      /*#__PURE__*/ d(pe, {
                                                        alignment: `center`,
                                                        anchorRef: Se,
                                                        className: O(ae),
                                                        collisionDetection: !0,
                                                        collisionDetectionPadding: 20,
                                                        "data-framer-portal-id": `1zezk3`,
                                                        offsetX: 0,
                                                        offsetY: -10,
                                                        onDismiss: e.hide,
                                                        placement: `top`,
                                                        safeArea: !0,
                                                        zIndex: 11,
                                                        children: /*#__PURE__*/ f(m.div, {
                                                          animate: dr,
                                                          className: `framer-1fub4ui`,
                                                          "data-border": !0,
                                                          exit: ur,
                                                          initial: X,
                                                          ref: Ce,
                                                          role: `dialog`,
                                                          children: [
                                                            /*#__PURE__*/ d(N, {
                                                              background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 552,
                                                                intrinsicWidth: 552,
                                                                pixelHeight: 1104,
                                                                pixelWidth: 1104,
                                                                sizes: `160px`,
                                                                src: `https://framerusercontent.com/images/DnssaC8h2z2f5K7bvPfYMZZ99Q.png?width=1104&height=1104`,
                                                                srcSet: `https://framerusercontent.com/images/DnssaC8h2z2f5K7bvPfYMZZ99Q.png?scale-down-to=512&width=1104&height=1104 512w,https://framerusercontent.com/images/DnssaC8h2z2f5K7bvPfYMZZ99Q.png?scale-down-to=1024&width=1104&height=1104 1024w,https://framerusercontent.com/images/DnssaC8h2z2f5K7bvPfYMZZ99Q.png?width=1104&height=1104 1104w`,
                                                              },
                                                              className: `framer-14wwo6b`,
                                                              "data-framer-name": `App store`,
                                                            }),
                                                            /*#__PURE__*/ d(v, {
                                                              __fromCanvasComponent: !0,
                                                              children:
                                                                W(`v75`, h) ??
                                                                /*#__PURE__*/ d(o, {
                                                                  children: /*#__PURE__*/ d(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                                      "--framer-font-family": `"IBM Plex Mono"`,
                                                                      "--framer-font-style": `normal`,
                                                                      "--framer-font-variation-axes": `normal`,
                                                                      "--framer-font-weight": `400`,
                                                                      "--framer-letter-spacing": `0px`,
                                                                      "--framer-text-alignment": `center`,
                                                                      "--framer-text-color": `rgba(5, 11, 20, 0.6)`,
                                                                    },
                                                                    children: `扫码下载`,
                                                                  }),
                                                                }),
                                                              className: `framer-1aim15u`,
                                                              "data-framer-name": `免费创建 Builder 账号 ↗`,
                                                              fonts: [`GF;IBM Plex Mono-regular`],
                                                              verticalAlignment: `top`,
                                                              withExternalLayout: !0,
                                                            }),
                                                          ],
                                                        }),
                                                      }),
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                    /*#__PURE__*/ d(R, {
                                      breakpoint: k,
                                      overrides: { fUotBm3xr: { y: (x?.y || 0) + 8775.845 } },
                                      children: /*#__PURE__*/ d(M, {
                                        height: 40,
                                        width: `120px`,
                                        y: (x?.y || 0) + 4726.87,
                                        children: /*#__PURE__*/ d(F, {
                                          className: `framer-1mgq5g1-container`,
                                          nodeId: `PXsYnRXGa`,
                                          scopeId: `CtRSYVoCz`,
                                          children: /*#__PURE__*/ d(B, {
                                            height: `100%`,
                                            id: `PXsYnRXGa`,
                                            layoutId: `PXsYnRXGa`,
                                            style: { height: `100%`, width: `100%` },
                                            variant: K(`V__PuOgYL`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ d(R, {
                              breakpoint: k,
                              overrides: {
                                fUotBm3xr: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1524,
                                    intrinsicWidth: 1990,
                                    loading: w((x?.y || 0) + 8847.845),
                                    pixelHeight: 1524,
                                    pixelWidth: 1990,
                                    sizes: `246px`,
                                    src: `../../assets/images/dydwqKRTWG717DDyPBbxmhOo0-89e9d9.png`,
                                    srcSet: `../../assets/images/dydwqKRTWG717DDyPBbxmhOo0.png 512w,../../assets/images/dydwqKRTWG717DDyPBbxmhOo0-0719c2.png 1024w,../../assets/images/dydwqKRTWG717DDyPBbxmhOo0-89e9d9.png 1990w`,
                                  },
                                },
                              },
                              children: /*#__PURE__*/ d(N, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 1524,
                                  intrinsicWidth: 1990,
                                  loading: w((x?.y || 0) + 4531.195),
                                  pixelHeight: 1524,
                                  pixelWidth: 1990,
                                  sizes: `497.4316px`,
                                  src: `../../assets/images/dydwqKRTWG717DDyPBbxmhOo0-89e9d9.png`,
                                  srcSet: `../../assets/images/dydwqKRTWG717DDyPBbxmhOo0.png 512w,../../assets/images/dydwqKRTWG717DDyPBbxmhOo0-0719c2.png 1024w,../../assets/images/dydwqKRTWG717DDyPBbxmhOo0-89e9d9.png 1990w`,
                                },
                                className: `framer-5k2ekw`,
                                "data-framer-name": `Frame 16 9`,
                              }),
                            }),
                          ],
                        }),
                        /*#__PURE__*/ d(E, {
                          className: `framer-2e25ok`,
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
                        /*#__PURE__*/ f(G, {
                          __framer__animate: { transition: Z },
                          __framer__animateOnce: !1,
                          __framer__enter: X,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-167aaow`,
                          children: [
                            /*#__PURE__*/ f(`div`, {
                              className: `framer-1qojbhl`,
                              children: [
                                /*#__PURE__*/ f(`div`, {
                                  className: `framer-1x1a310`,
                                  children: [
                                    /*#__PURE__*/ d(v, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        W(`v76`, h) ??
                                        /*#__PURE__*/ d(o, {
                                          children: /*#__PURE__*/ d(`p`, {
                                            className: `framer-styles-preset-140plv3`,
                                            "data-styles-preset": `TBRoaUTAt`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-d2d554b8-e538-4f3d-a601-4167e4c07699, rgba(9, 9, 9, 0.8))`,
                                            },
                                            children: `■ 领取 Builder 免费积分`,
                                          }),
                                        }),
                                      className: `framer-16f5ugg`,
                                      "data-framer-name": `Applications do not just consume data — they write`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ d(R, {
                                      breakpoint: k,
                                      overrides: {
                                        fUotBm3xr: {
                                          children:
                                            W(`v78`, h) ??
                                            /*#__PURE__*/ d(o, {
                                              children: /*#__PURE__*/ f(`h2`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                  "--framer-font-family": `"IBM Plex Sans"`,
                                                  "--framer-font-size": `35px`,
                                                  "--framer-font-style": `normal`,
                                                  "--framer-font-variation-axes": `normal`,
                                                  "--framer-font-weight": `400`,
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: [
                                                  `领取 `,
                                                  /*#__PURE__*/ d(`span`, {
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `500`,
                                                    },
                                                    children: `250 免费积分`,
                                                  }),
                                                  `，开始构建。`,
                                                ],
                                              }),
                                            }),
                                        },
                                      },
                                      children: /*#__PURE__*/ d(v, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v77`, h) ??
                                          /*#__PURE__*/ d(o, {
                                            children: /*#__PURE__*/ f(`h2`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `44px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `normal`,
                                                "--framer-font-weight": `400`,
                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                              },
                                              children: [
                                                `领取 `,
                                                /*#__PURE__*/ d(`span`, {
                                                  style: {
                                                    "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                    "--framer-font-family": `"IBM Plex Sans"`,
                                                    "--framer-font-style": `normal`,
                                                    "--framer-font-variation-axes": `normal`,
                                                    "--framer-font-weight": `500`,
                                                  },
                                                  children: `250 免费积分`,
                                                }),
                                                `，开始构建。`,
                                              ],
                                            }),
                                          }),
                                        className: `framer-qo2o6t`,
                                        "data-framer-name": `Applications do not just consume data — they write`,
                                        effect: q,
                                        fonts: [`GF;IBM Plex Sans-regular`, `GF;IBM Plex Sans-500`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ d(v, {
                                  __fromCanvasComponent: !0,
                                  children:
                                    W(`v79`, h) ??
                                    /*#__PURE__*/ d(o, {
                                      children: /*#__PURE__*/ d(`p`, {
                                        className: `framer-styles-preset-1ful33y`,
                                        "data-styles-preset": `HNigw6pHS`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(120, 127, 136)`,
                                        },
                                        children: `创建你的 Builder 账号，将真实业务流程转化为应⽤，准备就绪后发布上线。`,
                                      }),
                                    }),
                                  className: `framer-ioytk4`,
                                  "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            /*#__PURE__*/ f(G, {
                              __framer__animate: { transition: Y },
                              __framer__animateOnce: !0,
                              __framer__enter: X,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-1cxz2b`,
                              "data-border": !0,
                              "data-framer-name": `Frame 2147224431`,
                              children: [
                                /*#__PURE__*/ f(`div`, {
                                  className: `framer-1d5nxkt`,
                                  "data-framer-name": `Frame 2147224426`,
                                  children: [
                                    /*#__PURE__*/ f(`div`, {
                                      className: `framer-k2chmc`,
                                      "data-framer-name": `Frame 2147224425`,
                                      children: [
                                        L() &&
                                          /*#__PURE__*/ d(v, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              W(`v80`, h) ??
                                              /*#__PURE__*/ d(o, {
                                                children: /*#__PURE__*/ d(`p`, {
                                                  style: { "--framer-font-size": `18px` },
                                                  children: /*#__PURE__*/ d(`span`, {
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                      "--framer-font-family": `"IBM Plex Mono"`,
                                                      "--framer-font-size": `18px`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-letter-spacing": `1.76px`,
                                                      "--framer-text-color": `rgba(135, 135, 135, 1)`,
                                                      "--framer-text-transform": `uppercase`,
                                                    },
                                                    children: `Tier0 Builder`,
                                                  }),
                                                }),
                                              }),
                                            className: `framer-1ofv9gy hidden-7buxd7`,
                                            "data-framer-name": `Tier0 Builder`,
                                            fonts: [`GF;IBM Plex Mono-500`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        /*#__PURE__*/ f(`div`, {
                                          className: `framer-v7ognf`,
                                          "data-framer-name": `Frame 2147224441`,
                                          children: [
                                            /*#__PURE__*/ d(R, {
                                              breakpoint: k,
                                              overrides: {
                                                fUotBm3xr: {
                                                  children:
                                                    W(`v82`, h) ??
                                                    /*#__PURE__*/ d(o, {
                                                      children: /*#__PURE__*/ d(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                          "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                          "--framer-font-size": `44px`,
                                                          "--framer-font-weight": `600`,
                                                          "--framer-letter-spacing": `0px`,
                                                        },
                                                        children: /*#__PURE__*/ d(`span`, {
                                                          "data-text-fill": `true`,
                                                          style: {
                                                            backgroundImage: `linear-gradient(373deg, rgb(103, 232, 249) 0%, rgb(178, 237, 29) 50.4808%, rgb(145, 219, 10) 80.2885%, rgb(115, 178, 0) 100%)`,
                                                          },
                                                          children: `✦`,
                                                        }),
                                                      }),
                                                    }),
                                                },
                                              },
                                              children: /*#__PURE__*/ d(v, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  W(`v81`, h) ??
                                                  /*#__PURE__*/ d(o, {
                                                    children: /*#__PURE__*/ d(`p`, {
                                                      style: { "--framer-font-size": `44px` },
                                                      children: /*#__PURE__*/ d(`span`, {
                                                        "data-text-fill": `true`,
                                                        style: {
                                                          backgroundImage: `linear-gradient(37311801639174deg, rgb(103, 232, 249) 0%, rgb(178, 237, 29) 50.4807710647583%, rgb(145, 219, 10) 80.28846383094788%, rgb(115, 178, 0) 100%)`,
                                                        },
                                                        children: /*#__PURE__*/ d(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `44px`,
                                                            "--framer-font-weight": `600`,
                                                            "--framer-letter-spacing": `0px`,
                                                          },
                                                          children: `✦`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                className: `framer-1wuaa0t`,
                                                "data-framer-name": `✦`,
                                                fonts: [`GF;IBM Plex Sans-600`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            /*#__PURE__*/ d(R, {
                                              breakpoint: k,
                                              overrides: {
                                                fUotBm3xr: {
                                                  children:
                                                    W(`v84`, h) ??
                                                    /*#__PURE__*/ d(o, {
                                                      children: /*#__PURE__*/ d(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `44px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `400`,
                                                          "--framer-letter-spacing": `-0.68px`,
                                                          "--framer-text-alignment": `center`,
                                                          "--framer-text-color": `rgb(5, 11, 20)`,
                                                          "--framer-text-transform": `capitalize`,
                                                        },
                                                        children: /*#__PURE__*/ d(`span`, {
                                                          "data-text-fill": `true`,
                                                          style: {
                                                            backgroundImage: `linear-gradient(373deg, rgb(103, 232, 249) 0%, rgb(178, 237, 29) 50.4808%, rgb(145, 219, 10) 80.2885%, rgb(115, 178, 0) 100%)`,
                                                          },
                                                          children: /*#__PURE__*/ d(`span`, {
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                              "--framer-font-family": `"IBM Plex Sans"`,
                                                              "--framer-font-style": `normal`,
                                                              "--framer-font-variation-axes": `normal`,
                                                              "--framer-font-weight": `600`,
                                                              "--framer-letter-spacing": `0px`,
                                                              "--framer-text-color": `rgb(0, 0, 0)`,
                                                              "--framer-text-transform": `none`,
                                                            },
                                                            children: ` [250] 积分`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  fonts: [
                                                    `GF;IBM Plex Sans-regular`,
                                                    `GF;IBM Plex Sans-600`,
                                                  ],
                                                },
                                              },
                                              children: /*#__PURE__*/ d(v, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  W(`v83`, h) ??
                                                  /*#__PURE__*/ d(o, {
                                                    children: /*#__PURE__*/ d(`h2`, {
                                                      className: `framer-styles-preset-1k5p4j8`,
                                                      "data-styles-preset": `F3NdZsOi7`,
                                                      dir: `auto`,
                                                      children: `[250] 积分`,
                                                    }),
                                                  }),
                                                className: `framer-1488w5v`,
                                                "data-framer-name": `250 免费积分`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            we() &&
                                              /*#__PURE__*/ d(v, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  W(`v85`, h) ??
                                                  /*#__PURE__*/ d(o, {
                                                    children: /*#__PURE__*/ d(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                        "--framer-font-family": `"IBM Plex Mono", monospace`,
                                                        "--framer-font-size": `18px`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-letter-spacing": `1.76px`,
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `rgb(135, 135, 135)`,
                                                        "--framer-text-transform": `uppercase`,
                                                      },
                                                      children: `Tier0 Builder`,
                                                    }),
                                                  }),
                                                className: `framer-1wzo7hj hidden-13honlf`,
                                                "data-framer-name": `Tier0 Builder`,
                                                fonts: [`GF;IBM Plex Mono-500`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ f(`div`, {
                                      className: `framer-3c2tmh`,
                                      "data-framer-name": `Frame 2147224442`,
                                      children: [
                                        /*#__PURE__*/ d(R, {
                                          breakpoint: k,
                                          overrides: {
                                            fUotBm3xr: {
                                              children:
                                                W(`v87`, h) ??
                                                /*#__PURE__*/ d(o, {
                                                  children: /*#__PURE__*/ d(`p`, {
                                                    className: `framer-styles-preset-1ful33y`,
                                                    "data-styles-preset": `HNigw6pHS`,
                                                    dir: `auto`,
                                                    style: { "--framer-text-alignment": `center` },
                                                    children: `每个新的 Builder 账号都包含相当于 25 美元使⽤额度的赠⾦。需要更多积分时，可通过 Stripe 订阅计费继续使⽤。`,
                                                  }),
                                                }),
                                            },
                                          },
                                          children: /*#__PURE__*/ d(v, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              W(`v86`, h) ??
                                              /*#__PURE__*/ d(o, {
                                                children: /*#__PURE__*/ d(`p`, {
                                                  className: `framer-styles-preset-1ful33y`,
                                                  "data-styles-preset": `HNigw6pHS`,
                                                  dir: `auto`,
                                                  children: `每个新的 Builder 账号都包含相当于 25 美元使⽤额度的赠⾦。需要更多积分时，可通过 Stripe 订阅计费继续使⽤。`,
                                                }),
                                              }),
                                            className: `framer-11cgtft`,
                                            "data-framer-name": `Tier0 Notebook gives engineers and analysts a powe`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ f(`div`, {
                                          className: `framer-uwqfn4`,
                                          "data-framer-name": `Frame 2147224430`,
                                          children: [
                                            /*#__PURE__*/ f(`div`, {
                                              className: `framer-sazd1q`,
                                              "data-border": !0,
                                              "data-framer-name": `Frame 2147224427`,
                                              children: [
                                                /*#__PURE__*/ d(`div`, {
                                                  className: `framer-1ofgx66`,
                                                  "data-framer-name": `User--identification`,
                                                  children: /*#__PURE__*/ d(E, {
                                                    className: `framer-l1wywe`,
                                                    "data-framer-name": `Vector`,
                                                    fill: `rgba(0,0,0,1)`,
                                                    intrinsicHeight: 14,
                                                    intrinsicWidth: 16,
                                                    svg: `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5001 4.5H12.5001C12.6327 4.5 12.7599 4.55268 12.8537 4.64645C12.9474 4.74021 13.0001 4.86739 13.0001 5V6H10.0001V5C10.0001 4.86739 10.0528 4.74021 10.1466 4.64645C10.2403 4.55268 10.3675 4.5 10.5001 4.5Z" fill="#73B200"/>
<path d="M11.5001 4C12.0524 4 12.5001 3.55228 12.5001 3C12.5001 2.44772 12.0524 2 11.5001 2C10.9478 2 10.5001 2.44772 10.5001 3C10.5001 3.55228 10.9478 4 11.5001 4Z" fill="#73B200"/>
<path d="M14.5001 8H8.50012C8.235 7.9997 7.98082 7.89424 7.79335 7.70677C7.60588 7.5193 7.50043 7.26512 7.50012 7V1C7.50039 0.734865 7.60583 0.480665 7.79331 0.293186C7.98079 0.105707 8.23499 0.000264738 8.50012 0H14.5001C14.7652 0.000304367 15.0194 0.105759 15.2069 0.293229C15.3944 0.4807 15.4998 0.734877 15.5001 1V7C15.4998 7.26511 15.3943 7.51925 15.2068 7.70671C15.0194 7.89417 14.7652 7.99964 14.5001 8ZM8.50012 1V7H14.5006L14.5001 1H8.50012Z" fill="#73B200"/>
<path d="M7.00012 14H6.00012V12C6.00375 11.802 5.96743 11.6053 5.89333 11.4217C5.81924 11.2381 5.70888 11.0713 5.56886 10.9313C5.42885 10.7912 5.26204 10.6809 5.07841 10.6068C4.89478 10.5327 4.6981 10.4964 4.50012 10.5H2.50012C2.30214 10.4964 2.10546 10.5327 1.92183 10.6068C1.7382 10.6809 1.5714 10.7912 1.43138 10.9313C1.29136 11.0713 1.18101 11.2381 1.10691 11.4217C1.03281 11.6053 0.996492 11.802 1.00012 12V14H0.000120455V12C-0.00312703 11.6708 0.0593198 11.3442 0.183807 11.0395C0.308293 10.7347 0.492319 10.4578 0.725116 10.225C0.957912 9.9922 1.2348 9.80817 1.53958 9.68369C1.84436 9.5592 2.17091 9.49675 2.50012 9.5H4.50012C4.82933 9.49675 5.15588 9.5592 5.46066 9.68369C5.76544 9.80817 6.04233 9.9922 6.27513 10.225C6.50792 10.4578 6.69195 10.7347 6.81644 11.0395C6.94092 11.3442 7.00337 11.6708 7.00012 12V14Z" fill="#73B200"/>
<path d="M3.50012 4.5C3.89795 4.5 4.27948 4.65804 4.56078 4.93934C4.84209 5.22064 5.00012 5.60218 5.00012 6C5.00012 6.39782 4.84209 6.77936 4.56078 7.06066C4.27948 7.34196 3.89795 7.5 3.50012 7.5C3.1023 7.5 2.72077 7.34196 2.43946 7.06066C2.15816 6.77936 2.00012 6.39782 2.00012 6C2.00012 5.60218 2.15816 5.22064 2.43946 4.93934C2.72077 4.65804 3.1023 4.5 3.50012 4.5ZM3.50012 3.5C2.83708 3.5 2.20119 3.76339 1.73235 4.23223C1.26351 4.70107 1.00012 5.33696 1.00012 6C1.00012 6.66304 1.26351 7.29893 1.73235 7.76777C2.20119 8.23661 2.83708 8.5 3.50012 8.5C4.16316 8.5 4.79905 8.23661 5.26789 7.76777C5.73673 7.29893 6.00012 6.66304 6.00012 6C6.00012 5.33696 5.73673 4.70107 5.26789 4.23223C4.79905 3.76339 4.16316 3.5 3.50012 3.5Z" fill="#73B200"/>
</svg>
`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                                /*#__PURE__*/ d(v, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    W(`v88`, h) ??
                                                    /*#__PURE__*/ d(o, {
                                                      children: /*#__PURE__*/ d(`p`, {
                                                        dir: `auto`,
                                                        style: { "--framer-font-size": `12px` },
                                                        children: /*#__PURE__*/ d(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                            "--framer-font-family": `"IBM Plex Mono"`,
                                                            "--framer-font-size": `12px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `400`,
                                                            "--framer-letter-spacing": `-0.68px`,
                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                            "--framer-text-transform": `capitalize`,
                                                          },
                                                          children: `免费用户账户`,
                                                        }),
                                                      }),
                                                    }),
                                                  className: `framer-i5p8e9`,
                                                  "data-framer-name": `免费用户账号`,
                                                  fonts: [`GF;IBM Plex Mono-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ f(`div`, {
                                              className: `framer-1c9rxt6`,
                                              "data-border": !0,
                                              "data-framer-name": `Frame 2147224428`,
                                              children: [
                                                /*#__PURE__*/ d(`div`, {
                                                  className: `framer-9mrdoj`,
                                                  "data-framer-name": `Purchase`,
                                                  children: /*#__PURE__*/ d(E, {
                                                    className: `framer-1ylrxl2`,
                                                    "data-framer-name": `Vector`,
                                                    fill: `rgba(0,0,0,1)`,
                                                    intrinsicHeight: 10,
                                                    intrinsicWidth: 14,
                                                    svg: `<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V9C0 9.26522 0.105357 9.51957 0.292893 9.70711C0.48043 9.89464 0.734784 10 1 10H13C13.2652 10 13.5196 9.89464 13.7071 9.70711C13.8946 9.51957 14 9.26522 14 9V1C14 0.734784 13.8946 0.48043 13.7071 0.292893C13.5196 0.105357 13.2652 0 13 0ZM13 1V2.5H1V1H13ZM1 9V3.5H13V9H1Z" fill="#73B200"/>
<path d="M7 7H2V8H7V7Z" fill="#73B200"/>
</svg>
`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                                /*#__PURE__*/ d(v, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    W(`v89`, h) ??
                                                    /*#__PURE__*/ d(o, {
                                                      children: /*#__PURE__*/ d(`p`, {
                                                        dir: `auto`,
                                                        style: { "--framer-font-size": `12px` },
                                                        children: /*#__PURE__*/ d(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                            "--framer-font-family": `"IBM Plex Mono"`,
                                                            "--framer-font-size": `12px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `400`,
                                                            "--framer-letter-spacing": `-0.68px`,
                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                            "--framer-text-transform": `capitalize`,
                                                          },
                                                          children: `Stripe 支付`,
                                                        }),
                                                      }),
                                                    }),
                                                  className: `framer-3cxrd6`,
                                                  "data-framer-name": `Stripe 支付`,
                                                  fonts: [`GF;IBM Plex Mono-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ f(`div`, {
                                              className: `framer-qa3vzk`,
                                              "data-border": !0,
                                              "data-framer-name": `Frame 2147224429`,
                                              children: [
                                                /*#__PURE__*/ d(`div`, {
                                                  className: `framer-1nt6aet`,
                                                  "data-framer-name": `Receipt`,
                                                  children: /*#__PURE__*/ d(E, {
                                                    className: `framer-24zg42`,
                                                    "data-framer-name": `Vector`,
                                                    fill: `rgba(0,0,0,1)`,
                                                    intrinsicHeight: 14,
                                                    intrinsicWidth: 11,
                                                    svg: `<svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 7H8V8H9V7Z" fill="#73B200"/>
<path d="M6 7H2V8H6V7Z" fill="#73B200"/>
<path d="M9 5H8V6H9V5Z" fill="#73B200"/>
<path d="M6 5H2V6H6V5Z" fill="#73B200"/>
<path d="M9 3H2V4H9V3Z" fill="#73B200"/>
<path d="M10 0H1C0.734865 0.000264738 0.480665 0.105707 0.293186 0.293186C0.105707 0.480665 0.000264738 0.734865 0 1V13.5C0 13.6326 0.0526785 13.7598 0.146447 13.8536C0.240215 13.9473 0.367392 14 0.5 14H1C1.07763 14.0001 1.15421 13.982 1.22364 13.9473C1.29308 13.9126 1.35346 13.8621 1.4 13.8L2.5 12.3335L3.6 13.8C3.64856 13.8591 3.70962 13.9067 3.77878 13.9394C3.84795 13.9721 3.9235 13.9891 4 13.9891C4.0765 13.9891 4.15205 13.9721 4.22122 13.9394C4.29038 13.9067 4.35144 13.8591 4.4 13.8L5.5 12.3335L6.6 13.8C6.64856 13.8591 6.70962 13.9067 6.77878 13.9394C6.84795 13.9721 6.9235 13.9891 7 13.9891C7.0765 13.9891 7.15205 13.9721 7.22122 13.9394C7.29038 13.9067 7.35144 13.8591 7.4 13.8L8.5 12.3335L9.6 13.8C9.64655 13.8621 9.70694 13.9125 9.77637 13.9473C9.84581 13.982 9.92237 14 10 14H10.5C10.6326 14 10.7598 13.9473 10.8536 13.8536C10.9473 13.7598 11 13.6326 11 13.5V1C10.9997 0.734877 10.8942 0.4807 10.7068 0.293229C10.5193 0.105759 10.2651 0.000304367 10 0ZM10 12.6665L8.9 11.2C8.85144 11.1409 8.79038 11.0933 8.72122 11.0606C8.65205 11.0279 8.5765 11.0109 8.5 11.0109C8.4235 11.0109 8.34795 11.0279 8.27878 11.0606C8.20962 11.0933 8.14856 11.1409 8.1 11.2L7 12.6665L5.9 11.2C5.85144 11.1409 5.79038 11.0933 5.72122 11.0606C5.65205 11.0279 5.5765 11.0109 5.5 11.0109C5.4235 11.0109 5.34795 11.0279 5.27878 11.0606C5.20962 11.0933 5.14856 11.1409 5.1 11.2L4 12.6665L2.9 11.2C2.85144 11.1409 2.79038 11.0933 2.72122 11.0606C2.65205 11.0279 2.5765 11.0109 2.5 11.0109C2.4235 11.0109 2.34795 11.0279 2.27878 11.0606C2.20962 11.0933 2.14856 11.1409 2.1 11.2L1 12.6665V1H10V12.6665Z" fill="#73B200"/>
</svg>
`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                                /*#__PURE__*/ d(v, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    W(`v90`, h) ??
                                                    /*#__PURE__*/ d(o, {
                                                      children: /*#__PURE__*/ d(`p`, {
                                                        dir: `auto`,
                                                        style: { "--framer-font-size": `12px` },
                                                        children: /*#__PURE__*/ d(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                            "--framer-font-family": `"IBM Plex Mono"`,
                                                            "--framer-font-size": `12px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `400`,
                                                            "--framer-letter-spacing": `-0.68px`,
                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                            "--framer-text-transform": `capitalize`,
                                                          },
                                                          children: `发票支持`,
                                                        }),
                                                      }),
                                                    }),
                                                  className: `framer-1j1sw3j`,
                                                  "data-framer-name": `支持开具发票`,
                                                  fonts: [`GF;IBM Plex Mono-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ d(`div`, {
                                      className: `framer-xh7us8`,
                                      "data-framer-name": `Frame 2147224432`,
                                      children: /*#__PURE__*/ d(R, {
                                        breakpoint: k,
                                        overrides: {
                                          fUotBm3xr: {
                                            children:
                                              W(`v92`, h) ??
                                              /*#__PURE__*/ d(o, {
                                                children: /*#__PURE__*/ d(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                    "--framer-font-family": `"IBM Plex Mono", "IBM Plex Mono Placeholder", monospace`,
                                                    "--framer-font-size": `18px`,
                                                    "--framer-letter-spacing": `0px`,
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `rgb(5, 11, 20)`,
                                                  },
                                                  children: /*#__PURE__*/ d(z, {
                                                    href: `https://tier0.cn/login`,
                                                    motionChild: !0,
                                                    nodeId: `YQV4VuIGa`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `CtRSYVoCz`,
                                                    smoothScroll: !1,
                                                    children: /*#__PURE__*/ d(m.a, {
                                                      className: `framer-styles-preset-t63cx9`,
                                                      "data-styles-preset": `PeUsTsy21`,
                                                      children: `免费创建 Builder 账号 ↗`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                          },
                                        },
                                        children: /*#__PURE__*/ d(v, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            W(`v91`, h) ??
                                            /*#__PURE__*/ d(o, {
                                              children: /*#__PURE__*/ d(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                  "--framer-font-family": `"IBM Plex Mono", "IBM Plex Mono Placeholder", monospace`,
                                                  "--framer-font-size": `24px`,
                                                  "--framer-letter-spacing": `0px`,
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `rgb(5, 11, 20)`,
                                                  "--framer-text-decoration": `underline`,
                                                },
                                                children: /*#__PURE__*/ d(z, {
                                                  href: `https://tier0.cn/login`,
                                                  motionChild: !0,
                                                  nodeId: `YQV4VuIGa`,
                                                  openInNewTab: !0,
                                                  relValues: [],
                                                  scopeId: `CtRSYVoCz`,
                                                  smoothScroll: !1,
                                                  children: /*#__PURE__*/ d(m.a, {
                                                    className: `framer-styles-preset-t63cx9`,
                                                    "data-styles-preset": `PeUsTsy21`,
                                                    children: `免费创建 Builder 账号 ↗`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          className: `framer-1aimd38`,
                                          "data-framer-name": `免费创建 Builder 账号 ↗`,
                                          fonts: [`GF;IBM Plex Mono-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ d(R, {
                                  breakpoint: k,
                                  overrides: {
                                    fUotBm3xr: {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        loading: w((x?.y || 0) + 10262.37),
                                        pixelHeight: 1540,
                                        pixelWidth: 2580,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `310px`,
                                        src: `../../assets/images/z0wxGv4zt5LGAYnzkalgrXrohvk-f7c0d8.png`,
                                        srcSet: `../../assets/images/z0wxGv4zt5LGAYnzkalgrXrohvk-7f8d4b.png 512w,../../assets/images/z0wxGv4zt5LGAYnzkalgrXrohvk.png 1024w,../../assets/images/z0wxGv4zt5LGAYnzkalgrXrohvk-804901.png 2048w,../../assets/images/z0wxGv4zt5LGAYnzkalgrXrohvk-f7c0d8.png 2580w`,
                                      },
                                    },
                                  },
                                  children: /*#__PURE__*/ d(N, {
                                    background: {
                                      alt: ``,
                                      fit: `fit`,
                                      loading: w((x?.y || 0) + 5369.495),
                                      pixelHeight: 1540,
                                      pixelWidth: 2580,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `645px`,
                                      src: `../../assets/images/z0wxGv4zt5LGAYnzkalgrXrohvk-f7c0d8.png`,
                                      srcSet: `../../assets/images/z0wxGv4zt5LGAYnzkalgrXrohvk-7f8d4b.png 512w,../../assets/images/z0wxGv4zt5LGAYnzkalgrXrohvk.png 1024w,../../assets/images/z0wxGv4zt5LGAYnzkalgrXrohvk-804901.png 2048w,../../assets/images/z0wxGv4zt5LGAYnzkalgrXrohvk-f7c0d8.png 2580w`,
                                    },
                                    className: `framer-1fcq3z9`,
                                    "data-framer-name": `Frame 1707478235`,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        /*#__PURE__*/ d(E, {
                          className: `framer-f0g83g`,
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
                        /*#__PURE__*/ f(`div`, {
                          className: `framer-1jpyljv`,
                          children: [
                            /*#__PURE__*/ f(`div`, {
                              className: `framer-ghoody`,
                              "data-framer-name": `Group 1321316936`,
                              children: [
                                /*#__PURE__*/ d(`div`, {
                                  className: `framer-mw3yzx`,
                                  "data-border": !0,
                                  "data-framer-name": `Ellipse 2340`,
                                }),
                                /*#__PURE__*/ f(`div`, {
                                  className: `framer-1rww07t`,
                                  "data-framer-name": `Group 1321316014`,
                                  children: [
                                    /*#__PURE__*/ f(`div`, {
                                      className: `framer-4qjnwf`,
                                      "data-framer-name": `Group 1321316017`,
                                      children: [
                                        /*#__PURE__*/ d(`div`, {
                                          className: `framer-xnsfcr`,
                                          "data-border": !0,
                                          "data-framer-name": `Ellipse 319`,
                                        }),
                                        /*#__PURE__*/ d(`div`, {
                                          className: `framer-toione`,
                                          "data-border": !0,
                                          "data-framer-name": `Ellipse 320`,
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ f(`div`, {
                                      className: `framer-1yjt5ja`,
                                      "data-framer-name": `Group 1321316016`,
                                      children: [
                                        /*#__PURE__*/ d(`div`, {
                                          className: `framer-1f8tfv6`,
                                          "data-border": !0,
                                          "data-framer-name": `Ellipse 321`,
                                        }),
                                        /*#__PURE__*/ d(`div`, {
                                          className: `framer-lmghde`,
                                          "data-border": !0,
                                          "data-framer-name": `Ellipse 322`,
                                        }),
                                        /*#__PURE__*/ d(`div`, {
                                          className: `framer-198yk3g`,
                                          "data-border": !0,
                                          "data-framer-name": `Ellipse 323`,
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ f(`div`, {
                                      className: `framer-1pgzv5e`,
                                      "data-framer-name": `Group 1321316015`,
                                      children: [
                                        /*#__PURE__*/ d(`div`, {
                                          className: `framer-fuq1l3`,
                                          "data-border": !0,
                                          "data-framer-name": `Ellipse 324`,
                                        }),
                                        /*#__PURE__*/ d(`div`, {
                                          className: `framer-c32ok1`,
                                          "data-border": !0,
                                          "data-framer-name": `Ellipse 325`,
                                        }),
                                        /*#__PURE__*/ d(`div`, {
                                          className: `framer-1ksgfey`,
                                          "data-border": !0,
                                          "data-framer-name": `Ellipse 326`,
                                        }),
                                        /*#__PURE__*/ d(`div`, {
                                          className: `framer-1fpw10q`,
                                          "data-border": !0,
                                          "data-framer-name": `Ellipse 327`,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ d(`div`, {
                              className: `framer-srgbgv`,
                              children: /*#__PURE__*/ f(G, {
                                __framer__animate: { transition: Z },
                                __framer__animateOnce: !1,
                                __framer__enter: X,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1wyccx2`,
                                children: [
                                  /*#__PURE__*/ f(`div`, {
                                    className: `framer-1u042zr`,
                                    children: [
                                      /*#__PURE__*/ f(`div`, {
                                        className: `framer-cq0ywr`,
                                        children: [
                                          /*#__PURE__*/ d(`div`, {
                                            className: `framer-4qaxqk`,
                                            "data-border": !0,
                                            "data-framer-name": `Text`,
                                            children: /*#__PURE__*/ d(v, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                W(`v93`, h) ??
                                                /*#__PURE__*/ d(o, {
                                                  children: /*#__PURE__*/ d(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                      "--framer-font-family": `"IBM Plex Mono"`,
                                                      "--framer-font-size": `11px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-letter-spacing": `1.54px`,
                                                      "--framer-text-color": `rgb(115, 178, 0)`,
                                                      "--framer-text-transform": `uppercase`,
                                                    },
                                                    children: `仅限 Tier0 平台`,
                                                  }),
                                                }),
                                              className: `framer-1avit47`,
                                              "data-framer-name": `Tier0 App Builder`,
                                              fonts: [`GF;IBM Plex Mono-500`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          /*#__PURE__*/ d(R, {
                                            breakpoint: k,
                                            overrides: {
                                              fUotBm3xr: {
                                                children:
                                                  W(`v95`, h) ??
                                                  /*#__PURE__*/ d(o, {
                                                    children: /*#__PURE__*/ d(`h2`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                        "--framer-font-size": `35px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `400`,
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      },
                                                      children: `让应用互通协作`,
                                                    }),
                                                  }),
                                              },
                                            },
                                            children: /*#__PURE__*/ d(v, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                W(`v94`, h) ??
                                                /*#__PURE__*/ d(o, {
                                                  children: /*#__PURE__*/ d(`h2`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `44px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `400`,
                                                      "--framer-text-alignment": `center`,
                                                      "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                    },
                                                    children: `让应用互通协作`,
                                                  }),
                                                }),
                                              className: `framer-vhrsju`,
                                              "data-framer-name": `Applications do not just consume data — they write`,
                                              effect: q,
                                              fonts: [`GF;IBM Plex Sans-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ d(R, {
                                        breakpoint: k,
                                        overrides: {
                                          fUotBm3xr: {
                                            children:
                                              W(`v97`, h) ??
                                              /*#__PURE__*/ f(o, {
                                                children: [
                                                  /*#__PURE__*/ f(`p`, {
                                                    className: `framer-styles-preset-1ful33y`,
                                                    "data-styles-preset": `HNigw6pHS`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `center`,
                                                      "--framer-text-color": `rgb(120, 127, 136)`,
                                                    },
                                                    children: [
                                                      `通过`,
                                                      /*#__PURE__*/ d(z, {
                                                        href: { webPageId: `u6PUjJsUM` },
                                                        motionChild: !0,
                                                        nodeId: `DosW91P8W`,
                                                        openInNewTab: !1,
                                                        relValues: [],
                                                        scopeId: `CtRSYVoCz`,
                                                        smoothScroll: !1,
                                                        children: /*#__PURE__*/ d(m.a, {
                                                          className: `framer-styles-preset-lt0vr8`,
                                                          "data-styles-preset": `y7ucor0DV`,
                                                          children: `统一命名空间 ↗`,
                                                        }),
                                                      }),
                                                      `连接应用，让数据在系统间无缝流转。`,
                                                    ],
                                                  }),
                                                  /*#__PURE__*/ d(`p`, {
                                                    className: `framer-styles-preset-1ful33y`,
                                                    "data-styles-preset": `HNigw6pHS`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `center`,
                                                      "--framer-text-color": `rgb(120, 127, 136)`,
                                                    },
                                                    children: `打破数据孤岛，保持各应用同步，无需复杂的点对点集成，即可构建互联的工作流。`,
                                                  }),
                                                ],
                                              }),
                                          },
                                        },
                                        children: /*#__PURE__*/ d(v, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            W(`v96`, h) ??
                                            /*#__PURE__*/ d(o, {
                                              children: /*#__PURE__*/ f(`p`, {
                                                className: `framer-styles-preset-1ful33y`,
                                                "data-styles-preset": `HNigw6pHS`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `rgb(120, 127, 136)`,
                                                },
                                                children: [
                                                  `通过`,
                                                  /*#__PURE__*/ d(z, {
                                                    href: { webPageId: `u6PUjJsUM` },
                                                    motionChild: !0,
                                                    nodeId: `DosW91P8W`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `CtRSYVoCz`,
                                                    smoothScroll: !1,
                                                    children: /*#__PURE__*/ d(m.a, {
                                                      className: `framer-styles-preset-lt0vr8`,
                                                      "data-styles-preset": `y7ucor0DV`,
                                                      children: `统一命名空间 ↗`,
                                                    }),
                                                  }),
                                                  `连接应用，让数据在系统间无缝流转。打破数据孤岛，保持各应用同步，无需复杂的点对点集成，即可构建互联的工作流。`,
                                                ],
                                              }),
                                            }),
                                          className: `framer-18paa14`,
                                          "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ f(`div`, {
                                    className: `framer-wwd9ll`,
                                    "data-framer-name": `Group 1321316947`,
                                    children: [
                                      /*#__PURE__*/ d(`div`, {
                                        className: `framer-nji71a`,
                                        "data-border": !0,
                                        "data-framer-name": `Frame 1321316387`,
                                        children: /*#__PURE__*/ d(z, {
                                          href: { webPageId: `u6PUjJsUM` },
                                          motionChild: !0,
                                          nodeId: `lm9or8uIn`,
                                          openInNewTab: !1,
                                          scopeId: `CtRSYVoCz`,
                                          children: /*#__PURE__*/ f(m.a, {
                                            className: `framer-1c5rukk framer-y63mcw`,
                                            "data-framer-name": `Frame 1321316507`,
                                            children: [
                                              /*#__PURE__*/ d(`div`, {
                                                className: `framer-1hdi119`,
                                                "data-framer-name": `Folders`,
                                                children: /*#__PURE__*/ d(E, {
                                                  className: `framer-ihvcky`,
                                                  "data-framer-name": `Vector`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 22,
                                                  intrinsicWidth: 22,
                                                  svg: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5285 21.3038H1.77532C1.30462 21.3033 0.853353 21.1161 0.520523 20.7833C0.187694 20.4504 0.000493449 19.9992 0 19.5285V6.21361C0.000493449 5.74291 0.187694 5.29164 0.520523 4.95881C0.853353 4.62598 1.30462 4.43878 1.77532 4.43829H6.80523C7.18945 4.43891 7.56322 4.56343 7.87104 4.79335L10.9479 7.10126H19.5285C19.9992 7.10176 20.4504 7.28896 20.7833 7.62179C21.1161 7.95462 21.3033 8.40589 21.3038 8.87658V19.5285C21.3033 19.9992 21.1161 20.4504 20.7833 20.7833C20.4504 21.1161 19.9992 21.3033 19.5285 21.3038ZM6.80523 6.21361H1.77398L1.77532 19.5285H19.5285V8.87658H10.3559L6.80523 6.21361Z" fill="#161616"/>
<path d="M21.3038 4.43829H12.1312L8.58055 1.77532H1.77532V0H8.58055C8.96476 0.000623269 9.33853 0.125141 9.64636 0.355063L12.7232 2.66297H21.3038V4.43829Z" fill="#161616"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ d(R, {
                                                breakpoint: k,
                                                overrides: {
                                                  fUotBm3xr: {
                                                    children:
                                                      W(`v99`, h) ??
                                                      /*#__PURE__*/ d(o, {
                                                        children: /*#__PURE__*/ d(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `10px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `500`,
                                                            "--framer-line-height": `120%`,
                                                            "--framer-text-alignment": `center`,
                                                          },
                                                          children: `统一命名空间 UNS`,
                                                        }),
                                                      }),
                                                  },
                                                },
                                                children: /*#__PURE__*/ d(v, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    W(`v98`, h) ??
                                                    /*#__PURE__*/ d(o, {
                                                      children: /*#__PURE__*/ d(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `22.81px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `500`,
                                                          "--framer-line-height": `120%`,
                                                          "--framer-text-alignment": `center`,
                                                        },
                                                        children: `统一命名空间 UNS`,
                                                      }),
                                                    }),
                                                  className: `framer-10o2wsc`,
                                                  "data-framer-name": `[Unified Namespace]`,
                                                  fonts: [`GF;IBM Plex Sans-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ f(`div`, {
                                        className: `framer-h5rqq0`,
                                        children: [
                                          /*#__PURE__*/ d(`div`, {
                                            className: `framer-15fzd77`,
                                            "data-border": !0,
                                            "data-framer-name": `Rectangle 1913`,
                                          }),
                                          /*#__PURE__*/ f(`div`, {
                                            className: `framer-1m0bde9`,
                                            "data-framer-name": `Frame 14943`,
                                            children: [
                                              /*#__PURE__*/ d(`div`, {
                                                className: `framer-gj4f3j`,
                                                "data-framer-name": `IBM-cloud--logging`,
                                                children: /*#__PURE__*/ d(E, {
                                                  className: `framer-1cdhbk`,
                                                  "data-framer-name": `Vector`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 28,
                                                  intrinsicWidth: 30,
                                                  svg: `<svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.7431 7.76541C22.0344 8.25075 22.4226 8.63902 23.005 8.93022L24.2669 9.51263L25.5288 8.93022C26.4995 8.44488 27.1789 7.37714 27.1789 6.3094V1.94135H24.2669V0H29.1203V6.3094C29.1203 8.15368 28.0525 9.9009 26.3053 10.6774L24.1698 11.6481L22.1314 10.6774C20.8695 10.095 19.9959 9.02729 19.6077 7.76541H21.7431Z" fill="#73B200"/>
<path d="M21.3549 3.88271H13.5895V5.82406H21.3549V3.88271Z" fill="#73B200"/>
<path d="M21.3549 0H13.5895V1.94135H21.3549V0Z" fill="#73B200"/>
<path d="M25.2376 13.5895V19.4135H1.94135V3.88271H11.6481V1.94135H1.94135C0.873609 1.94135 0 2.81496 0 3.88271V19.4135C0 20.4813 0.873609 21.3549 1.94135 21.3549H9.70676V25.2376H5.82406V27.1789H21.3549V25.2376H17.4722V21.3549H25.2376C26.3053 21.3549 27.1789 20.4813 27.1789 19.4135V13.5895H25.2376ZM15.5308 25.2376H11.6481V21.3549H15.5308V25.2376Z" fill="#73B200"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ d(R, {
                                                breakpoint: k,
                                                overrides: {
                                                  fUotBm3xr: {
                                                    children:
                                                      W(`v101`, h) ??
                                                      /*#__PURE__*/ d(o, {
                                                        children: /*#__PURE__*/ d(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                            "--framer-font-size": `8px`,
                                                            "--framer-font-weight": `500`,
                                                            "--framer-letter-spacing": `-0.02em`,
                                                            "--framer-line-height": `120%`,
                                                            "--framer-text-alignment": `center`,
                                                            "--framer-text-color": `rgb(51, 51, 51)`,
                                                          },
                                                          children: `ERP`,
                                                        }),
                                                      }),
                                                  },
                                                },
                                                children: /*#__PURE__*/ d(v, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    W(`v100`, h) ??
                                                    /*#__PURE__*/ d(o, {
                                                      children: /*#__PURE__*/ d(`p`, {
                                                        style: {
                                                          "--framer-font-size": `18.119291305541992px`,
                                                          "--framer-line-height": `120%`,
                                                          "--framer-text-alignment": `center`,
                                                        },
                                                        children: /*#__PURE__*/ d(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `18.12px`,
                                                            "--framer-font-weight": `500`,
                                                            "--framer-letter-spacing": `-0.02em`,
                                                            "--framer-text-color": `rgba(51, 51, 51, 1)`,
                                                          },
                                                          children: `ERP`,
                                                        }),
                                                      }),
                                                    }),
                                                  className: `framer-1n0mktn`,
                                                  "data-framer-name": `MES`,
                                                  fonts: [`GF;IBM Plex Sans-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ f(`div`, {
                                        className: `framer-17r77ly`,
                                        "data-framer-name": `Group 1321315126`,
                                        children: [
                                          /*#__PURE__*/ d(`div`, {
                                            className: `framer-1jq252t`,
                                            "data-border": !0,
                                            "data-framer-name": `Rectangle 1913`,
                                          }),
                                          /*#__PURE__*/ f(`div`, {
                                            className: `framer-1ue1yx3`,
                                            "data-framer-name": `Frame 14943`,
                                            children: [
                                              /*#__PURE__*/ d(`div`, {
                                                className: `framer-5i4yjo`,
                                                "data-framer-name": `Asset`,
                                                children: /*#__PURE__*/ d(E, {
                                                  className: `framer-7ndb39`,
                                                  "data-framer-name": `Vector`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 28,
                                                  intrinsicWidth: 27,
                                                  svg: `<svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.37189 21.3549C8.63596 21.3549 7.91656 21.1272 7.30465 20.7005C6.69275 20.2739 6.21583 19.6675 5.9342 18.958C5.65257 18.2485 5.57889 17.4679 5.72246 16.7147C5.86603 15.9615 6.22042 15.2697 6.7408 14.7267C7.26118 14.1837 7.92418 13.8139 8.64597 13.6641C9.36776 13.5143 10.1159 13.5911 10.7958 13.885C11.4757 14.1789 12.0569 14.6766 12.4657 15.3151C12.8746 15.9536 13.0928 16.7042 13.0928 17.4722C13.0918 18.5016 12.6994 19.4886 12.0018 20.2165C11.3043 20.9444 10.3584 21.3538 9.37189 21.3549ZM9.37189 15.5308C9.00392 15.5308 8.64422 15.6447 8.33827 15.858C8.03232 16.0713 7.79386 16.3745 7.65305 16.7293C7.51223 17.084 7.47539 17.4743 7.54717 17.8509C7.61896 18.2275 7.79615 18.5734 8.05634 18.8449C8.31653 19.1164 8.64804 19.3013 9.00893 19.3762C9.36983 19.4511 9.7439 19.4127 10.0839 19.2658C10.4238 19.1188 10.7144 18.87 10.9188 18.5507C11.1232 18.2315 11.2324 17.8561 11.2324 17.4722C11.2318 16.9575 11.0356 16.464 10.6868 16.1001C10.338 15.7361 9.86514 15.5314 9.37189 15.5308Z" fill="#73B200"/>
<path d="M26.0461 3.88271C26.0451 2.85328 25.6527 1.86632 24.9551 1.13841C24.2575 0.410495 23.3117 0.0010792 22.3252 0C21.7227 0.00438565 21.1305 0.163327 20.6008 0.462818L5.35506 8.69522C4.00068 9.35663 2.81922 10.3492 1.91096 11.5888C1.0027 12.8284 0.39446 14.2784 0.137865 15.8156C-0.118729 17.3528 -0.0161032 18.932 0.437033 20.419C0.890168 21.906 1.68044 23.257 2.74076 24.3573C3.80108 25.4575 5.10015 26.2746 6.5277 26.7392C7.95526 27.2037 9.46915 27.302 10.9409 27.0257C12.4126 26.7494 13.7987 26.1067 14.9816 25.152C16.1644 24.1974 17.1091 22.9591 17.7354 21.5421L25.6331 5.62361C25.9007 5.08555 26.0423 4.48892 26.0461 3.88271ZM22.3252 1.94135C22.6931 1.94135 23.0528 2.05521 23.3588 2.26853C23.6647 2.48185 23.9032 2.78505 24.044 3.13978C24.1848 3.49452 24.2217 3.88486 24.1499 4.26144C24.0781 4.63803 23.9009 4.98395 23.6407 5.25545C23.3805 5.52695 23.049 5.71185 22.6881 5.78676C22.3272 5.86166 21.9532 5.82322 21.6132 5.67628C21.2733 5.52935 20.9827 5.28052 20.7783 4.96126C20.5738 4.64201 20.4647 4.26667 20.4647 3.88271C20.4653 3.36801 20.6615 2.87456 21.0103 2.51061C21.359 2.14667 21.8319 1.94194 22.3252 1.94135ZM18.6223 3.69663C18.6194 3.75962 18.6043 3.81893 18.6043 3.88271C18.6053 4.91213 18.9976 5.89909 19.6952 6.627C20.3928 7.35492 21.3386 7.76433 22.3252 7.76541C22.3852 7.76541 22.441 7.74988 22.5002 7.74697L18.4707 15.8635C18.1458 13.8736 17.2355 12.0386 15.866 10.613C14.4965 9.18739 12.7358 8.24187 10.8281 7.90761L18.6223 3.69663ZM9.30194 25.2376C7.83008 25.2376 6.39127 24.7822 5.16746 23.9289C3.94366 23.0756 2.98982 21.8628 2.42656 20.4439C1.8633 19.0249 1.71593 17.4636 2.00308 15.9572C2.29022 14.4509 2.99899 13.0672 4.03975 11.9812C5.08051 10.8952 6.40652 10.1556 7.8501 9.85597C9.29368 9.55634 10.79 9.71012 12.1498 10.2979C13.5096 10.8856 14.6719 11.8809 15.4896 13.1579C16.3073 14.435 16.7438 15.9363 16.7438 17.4722C16.7415 19.531 15.9567 21.5048 14.5616 22.9605C13.1665 24.4163 11.2749 25.2352 9.30194 25.2376Z" fill="#73B200"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ d(R, {
                                                breakpoint: k,
                                                overrides: {
                                                  fUotBm3xr: {
                                                    children:
                                                      W(`v103`, h) ??
                                                      /*#__PURE__*/ d(o, {
                                                        children: /*#__PURE__*/ d(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                            "--framer-font-size": `8px`,
                                                            "--framer-font-weight": `500`,
                                                            "--framer-letter-spacing": `-0.02em`,
                                                            "--framer-line-height": `120%`,
                                                            "--framer-text-alignment": `center`,
                                                            "--framer-text-color": `rgb(51, 51, 51)`,
                                                          },
                                                          children: `EAM`,
                                                        }),
                                                      }),
                                                  },
                                                },
                                                children: /*#__PURE__*/ d(v, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    W(`v102`, h) ??
                                                    /*#__PURE__*/ d(o, {
                                                      children: /*#__PURE__*/ d(`p`, {
                                                        style: {
                                                          "--framer-font-size": `18.119291305541992px`,
                                                          "--framer-line-height": `120%`,
                                                          "--framer-text-alignment": `center`,
                                                        },
                                                        children: /*#__PURE__*/ d(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `18.12px`,
                                                            "--framer-font-weight": `500`,
                                                            "--framer-letter-spacing": `-0.02em`,
                                                            "--framer-text-color": `rgba(51, 51, 51, 1)`,
                                                          },
                                                          children: `EAM`,
                                                        }),
                                                      }),
                                                    }),
                                                  className: `framer-tt5jwh`,
                                                  "data-framer-name": `EAM`,
                                                  fonts: [`GF;IBM Plex Sans-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ f(`div`, {
                                        className: `framer-o2hhum`,
                                        "data-framer-name": `Group 1321315125`,
                                        children: [
                                          /*#__PURE__*/ d(`div`, {
                                            className: `framer-1rpu3uy`,
                                            "data-border": !0,
                                            "data-framer-name": `Rectangle 1913`,
                                          }),
                                          /*#__PURE__*/ f(`div`, {
                                            className: `framer-1q3bmiy`,
                                            "data-framer-name": `Frame 14943`,
                                            children: [
                                              /*#__PURE__*/ d(`div`, {
                                                className: `framer-1x28fh4`,
                                                "data-framer-name": `IBM--db2-warehouse`,
                                                children: /*#__PURE__*/ d(E, {
                                                  className: `framer-12grtrp`,
                                                  "data-framer-name": `Vector`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 28,
                                                  intrinsicWidth: 27,
                                                  svg: `<svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0734 15.1777L13.492 11.7803C13.3471 11.6922 13.1852 11.6481 13.0232 11.6481C12.8613 11.6481 12.6994 11.6922 12.5545 11.7803L6.97311 15.1777C6.68743 15.3516 6.51162 15.6711 6.51162 16.0162V22.8109C6.51162 23.156 6.68743 23.4754 6.97311 23.6494L12.5545 27.0467C12.6994 27.1349 12.8613 27.1789 13.0232 27.1789C13.1852 27.1789 13.3471 27.1349 13.492 27.0467L19.0734 23.6494C19.359 23.4754 19.5349 23.156 19.5349 22.8109V16.0162C19.5349 15.6711 19.359 15.3516 19.0734 15.1777ZM17.6744 21.1937L15.3193 19.7193C15.3316 19.6179 15.3488 19.5184 15.3488 19.4136C15.3488 18.4211 14.7733 17.568 13.9535 17.1926V14.309L17.6744 16.5736V21.1937ZM12.093 14.3089V17.1925C11.2732 17.5679 10.6977 18.421 10.6977 19.4135C10.6977 19.5183 10.715 19.6178 10.7272 19.7192L8.37208 21.1937V16.5734L12.093 14.3089ZM13.0232 25.0845L9.34725 22.8469L11.6794 21.3871C12.0596 21.6696 12.5218 21.8402 13.0232 21.8402C13.5247 21.8402 13.9869 21.6696 14.3671 21.3871L16.6992 22.8469L13.0232 25.0845Z" fill="#73B200"/>
<path d="M21.2093 6.93063C20.4 2.93144 17.0046 0 13.0232 0C9.04185 0 5.64651 2.93144 4.8372 6.93063C2.07442 7.51304 0 10.095 0 13.1041C0 16.0841 1.9907 18.569 4.65116 19.2291V17.181C3.03255 16.5792 1.86046 15.0067 1.86046 13.1041C1.86046 10.8425 3.55348 8.92052 5.71162 8.74579L6.47441 8.68755L6.56743 7.90131C6.96743 4.50394 9.73952 1.94135 13.0232 1.94135C16.307 1.94135 19.079 4.50394 19.479 7.90131L19.5721 8.68755L20.3349 8.74579C22.493 8.93022 24.186 10.8425 24.186 13.1041C24.186 14.9969 23.0139 16.5889 21.3953 17.1907V19.2388C24.0558 18.5787 26.0465 16.0744 26.0465 13.1041C26.0465 10.0853 23.9721 7.51304 21.2093 6.93063Z" fill="#73B200"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ d(R, {
                                                breakpoint: k,
                                                overrides: {
                                                  fUotBm3xr: {
                                                    children:
                                                      W(`v105`, h) ??
                                                      /*#__PURE__*/ d(o, {
                                                        children: /*#__PURE__*/ d(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                            "--framer-font-size": `8px`,
                                                            "--framer-font-weight": `500`,
                                                            "--framer-letter-spacing": `-0.02em`,
                                                            "--framer-line-height": `120%`,
                                                            "--framer-text-alignment": `center`,
                                                            "--framer-text-color": `rgb(51, 51, 51)`,
                                                          },
                                                          children: `WMS`,
                                                        }),
                                                      }),
                                                  },
                                                },
                                                children: /*#__PURE__*/ d(v, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    W(`v104`, h) ??
                                                    /*#__PURE__*/ d(o, {
                                                      children: /*#__PURE__*/ d(`p`, {
                                                        style: {
                                                          "--framer-font-size": `18.119291305541992px`,
                                                          "--framer-line-height": `120%`,
                                                          "--framer-text-alignment": `center`,
                                                        },
                                                        children: /*#__PURE__*/ d(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `18.12px`,
                                                            "--framer-font-weight": `500`,
                                                            "--framer-letter-spacing": `-0.02em`,
                                                            "--framer-text-color": `rgba(51, 51, 51, 1)`,
                                                          },
                                                          children: `WMS`,
                                                        }),
                                                      }),
                                                    }),
                                                  className: `framer-1t4n7v3`,
                                                  "data-framer-name": `WMS`,
                                                  fonts: [`GF;IBM Plex Sans-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ f(`div`, {
                                        className: `framer-1jexuii`,
                                        "data-framer-name": `Group 1321316937`,
                                        children: [
                                          /*#__PURE__*/ d(`div`, {
                                            className: `framer-5hwd2o`,
                                            "data-border": !0,
                                            "data-framer-name": `Rectangle 1913`,
                                          }),
                                          /*#__PURE__*/ f(`div`, {
                                            className: `framer-1d6o8o6`,
                                            "data-framer-name": `Frame 14943`,
                                            children: [
                                              /*#__PURE__*/ d(`div`, {
                                                className: `framer-vkdytx`,
                                                "data-framer-name": `Chemistry`,
                                                children: /*#__PURE__*/ d(E, {
                                                  className: `framer-1w18z4s`,
                                                  "data-framer-name": `Vector`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 28,
                                                  intrinsicWidth: 24,
                                                  svg: `<svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5502 20.9843L15.5308 11.3325V1.94135H17.4722V0H5.82405V1.94135H7.7654V11.3325L0.746055 20.9843C0.322845 21.5662 0.0688385 22.2538 0.0121333 22.9711C-0.0445719 23.6884 0.0982338 24.4073 0.424755 25.0485C0.751276 25.6897 1.24879 26.228 1.86225 26.604C2.47572 26.98 3.18123 27.179 3.90075 27.1789H19.3955C20.115 27.179 20.8205 26.98 21.434 26.604C22.0474 26.228 22.5449 25.6897 22.8715 25.0485C23.198 24.4073 23.3408 23.6884 23.2841 22.9711C23.2274 22.2538 22.9734 21.5662 22.5502 20.9843ZM9.70676 11.9638V1.94135H13.5895V11.9638L16.1839 15.5308H7.11233L9.70676 11.9638ZM19.3955 25.2376H3.90075C3.53934 25.2375 3.18499 25.1374 2.87687 24.9485C2.56876 24.7596 2.31888 24.4892 2.15485 24.1671C1.99083 23.8451 1.91905 23.4839 1.94744 23.1236C1.97583 22.7633 2.10329 22.4179 2.31574 22.1255L5.70039 17.4722H17.5958L20.9805 22.1255C21.1929 22.4179 21.3204 22.7633 21.3488 23.1236C21.3772 23.4839 21.3054 23.8451 21.1414 24.1671C20.9773 24.4892 20.7275 24.7596 20.4193 24.9485C20.1112 25.1374 19.7569 25.2375 19.3955 25.2376Z" fill="#73B200"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ d(R, {
                                                breakpoint: k,
                                                overrides: {
                                                  fUotBm3xr: {
                                                    children:
                                                      W(`v107`, h) ??
                                                      /*#__PURE__*/ d(o, {
                                                        children: /*#__PURE__*/ d(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                            "--framer-font-size": `8px`,
                                                            "--framer-font-weight": `500`,
                                                            "--framer-letter-spacing": `-0.02em`,
                                                            "--framer-line-height": `120%`,
                                                            "--framer-text-alignment": `center`,
                                                            "--framer-text-color": `rgb(51, 51, 51)`,
                                                          },
                                                          children: `LIMS`,
                                                        }),
                                                      }),
                                                  },
                                                },
                                                children: /*#__PURE__*/ d(v, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    W(`v106`, h) ??
                                                    /*#__PURE__*/ d(o, {
                                                      children: /*#__PURE__*/ d(`p`, {
                                                        style: {
                                                          "--framer-font-size": `18.119291305541992px`,
                                                          "--framer-line-height": `120%`,
                                                          "--framer-text-alignment": `center`,
                                                        },
                                                        children: /*#__PURE__*/ d(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `18.12px`,
                                                            "--framer-font-weight": `500`,
                                                            "--framer-letter-spacing": `-0.02em`,
                                                            "--framer-text-color": `rgba(51, 51, 51, 1)`,
                                                          },
                                                          children: `LIMS`,
                                                        }),
                                                      }),
                                                    }),
                                                  className: `framer-13ohzgb`,
                                                  "data-framer-name": `LIMS`,
                                                  fonts: [`GF;IBM Plex Sans-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ f(`div`, {
                                        className: `framer-14279ya`,
                                        "data-framer-name": `Group 1321315122`,
                                        children: [
                                          /*#__PURE__*/ d(`div`, {
                                            className: `framer-fgo7f6`,
                                            "data-border": !0,
                                            "data-framer-name": `Rectangle 1913`,
                                          }),
                                          /*#__PURE__*/ f(`div`, {
                                            className: `framer-17w4jgy`,
                                            "data-framer-name": `Frame 14943`,
                                            children: [
                                              /*#__PURE__*/ d(`div`, {
                                                className: `framer-1ijftbm`,
                                                "data-framer-name": `IBM-cloud--hyper-protect-dbaas`,
                                                children: /*#__PURE__*/ d(E, {
                                                  className: `framer-irke6z`,
                                                  "data-framer-name": `Vector`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 28,
                                                  intrinsicWidth: 24,
                                                  svg: `<svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.4429 27.1789L16.4044 26.2083C14.7543 25.4317 13.5895 23.6845 13.5895 21.8402V15.5308H23.2962V21.8402C23.2962 23.6845 22.2285 25.4317 20.4813 26.2083L18.4429 27.1789ZM15.5308 17.4722V21.8402C15.5308 23.005 16.2103 23.9757 17.181 24.461L18.4429 25.0434L19.7047 24.461C20.6754 23.9757 21.3549 22.908 21.3549 21.8402V17.4722H15.5308Z" fill="#73B200"/>
<path d="M4.85338 21.3549C5.38947 21.3549 5.82406 20.9203 5.82406 20.3842C5.82406 19.8481 5.38947 19.4135 4.85338 19.4135C4.31729 19.4135 3.88271 19.8481 3.88271 20.3842C3.88271 20.9203 4.31729 21.3549 4.85338 21.3549Z" fill="#73B200"/>
<path d="M4.85338 13.5895C5.38947 13.5895 5.82406 13.1549 5.82406 12.6188C5.82406 12.0827 5.38947 11.6481 4.85338 11.6481C4.31729 11.6481 3.88271 12.0827 3.88271 12.6188C3.88271 13.1549 4.31729 13.5895 4.85338 13.5895Z" fill="#73B200"/>
<path d="M4.85338 5.82406C5.38947 5.82406 5.82406 5.38947 5.82406 4.85338C5.82406 4.31729 5.38947 3.88271 4.85338 3.88271C4.31729 3.88271 3.88271 4.31729 3.88271 4.85338C3.88271 5.38947 4.31729 5.82406 4.85338 5.82406Z" fill="#73B200"/>
<path d="M17.4722 0H1.94135C0.873609 0 0 0.873609 0 1.94135V23.2962C0 24.364 0.873609 25.2376 1.94135 25.2376H10.6774V23.2962H1.94135V17.4722H10.6774V15.5308H1.94135V9.70676H17.4722V12.6188H19.4135V1.94135C19.4135 0.873609 18.5399 0 17.4722 0ZM1.94135 7.76541V1.94135H17.4722V7.76541H1.94135Z" fill="#73B200"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ d(R, {
                                                breakpoint: k,
                                                overrides: {
                                                  fUotBm3xr: {
                                                    children:
                                                      W(`v109`, h) ??
                                                      /*#__PURE__*/ d(o, {
                                                        children: /*#__PURE__*/ d(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                            "--framer-font-size": `8px`,
                                                            "--framer-font-weight": `500`,
                                                            "--framer-letter-spacing": `-0.02em`,
                                                            "--framer-line-height": `120%`,
                                                            "--framer-text-alignment": `center`,
                                                            "--framer-text-color": `rgb(51, 51, 51)`,
                                                          },
                                                          children: `MDM`,
                                                        }),
                                                      }),
                                                  },
                                                },
                                                children: /*#__PURE__*/ d(v, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    W(`v108`, h) ??
                                                    /*#__PURE__*/ d(o, {
                                                      children: /*#__PURE__*/ d(`p`, {
                                                        style: {
                                                          "--framer-font-size": `18.119291305541992px`,
                                                          "--framer-line-height": `120%`,
                                                          "--framer-text-alignment": `center`,
                                                        },
                                                        children: /*#__PURE__*/ d(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `18.12px`,
                                                            "--framer-font-weight": `500`,
                                                            "--framer-letter-spacing": `-0.02em`,
                                                            "--framer-text-color": `rgba(51, 51, 51, 1)`,
                                                          },
                                                          children: `MDM`,
                                                        }),
                                                      }),
                                                    }),
                                                  className: `framer-cssi8i`,
                                                  "data-framer-name": `MDM`,
                                                  fonts: [`GF;IBM Plex Sans-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ f(`div`, {
                                        className: `framer-1o7k92n`,
                                        "data-framer-name": `Group 1321315127`,
                                        children: [
                                          /*#__PURE__*/ d(`div`, {
                                            className: `framer-o5m8j3`,
                                            "data-border": !0,
                                            "data-framer-name": `Rectangle 1913`,
                                          }),
                                          /*#__PURE__*/ f(`div`, {
                                            className: `framer-1xxvo2n`,
                                            "data-framer-name": `Frame 14943`,
                                            children: [
                                              /*#__PURE__*/ d(`div`, {
                                                className: `framer-1c3i5oz`,
                                                "data-framer-name": `Energy--renewable`,
                                                children: /*#__PURE__*/ d(E, {
                                                  className: `framer-1d7qlf2`,
                                                  "data-framer-name": `Vector`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 26,
                                                  intrinsicWidth: 25,
                                                  svg: `<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.8598 11.0654H22.9761V7.37694H21.2087V11.0654H19.4413V7.37694H17.6739V11.0654H16.7902C16.5559 11.0654 16.3311 11.1626 16.1654 11.3355C15.9996 11.5084 15.9065 11.743 15.9065 11.9875V15.676C15.9079 16.7383 16.2602 17.7677 16.9041 18.5906C17.548 19.4135 18.4441 19.9796 19.4413 20.1934V23.0529C19.4411 23.2974 19.348 23.5319 19.1823 23.7048C19.0166 23.8776 18.7919 23.9749 18.5576 23.9751H2.65109C2.41672 23.9751 2.19195 23.8779 2.02622 23.705C1.8605 23.532 1.76739 23.2975 1.76739 23.0529C1.76739 22.8084 1.8605 22.5738 2.02622 22.4009C2.19195 22.228 2.41672 22.1308 2.65109 22.1308H7.06957C7.77268 22.1308 8.447 21.8394 8.94417 21.3206C9.44135 20.8018 9.72066 20.0981 9.72066 19.3645C9.72066 18.6308 9.44135 17.9272 8.94417 17.4084C8.447 16.8896 7.77268 16.5981 7.06957 16.5981H2.65109C2.41672 16.5981 2.19195 16.501 2.02622 16.328C1.8605 16.1551 1.76739 15.9206 1.76739 15.676C1.76739 15.4314 1.8605 15.1969 2.02622 15.024C2.19195 14.851 2.41672 14.7539 2.65109 14.7539H7.06957C7.77244 14.7531 8.44631 14.4614 8.94332 13.9427C9.44033 13.4241 9.71988 12.721 9.72066 11.9875V8.29906H10.6044C11.5415 8.29796 12.44 7.909 13.1027 7.21752C13.7653 6.52603 14.1381 5.58849 14.1391 4.61059V1.84424H11.488C10.5833 1.84578 9.7139 2.21118 9.06071 2.86447C8.60294 1.99761 7.93084 1.27465 7.11439 0.770865C6.29794 0.267079 5.36699 0.000885336 4.41848 0H1.76739V2.76635C1.76894 4.23322 2.32805 5.63955 3.32207 6.67679C4.31608 7.71402 5.66382 8.29745 7.06957 8.29906H7.95326V11.9875C7.95308 12.232 7.85991 12.4665 7.69423 12.6393C7.52854 12.8122 7.30388 12.9095 7.06957 12.9096H2.65109C1.94798 12.9096 1.27366 13.2011 0.776486 13.7199C0.27931 14.2387 0 14.9423 0 15.676C0 16.4097 0.27931 17.1133 0.776486 17.6321C1.27366 18.1509 1.94798 18.4424 2.65109 18.4424H7.06957C7.30394 18.4424 7.52871 18.5395 7.69443 18.7124C7.86016 18.8854 7.95326 19.1199 7.95326 19.3645C7.95326 19.609 7.86016 19.8436 7.69443 20.0165C7.52871 20.1894 7.30394 20.2866 7.06957 20.2866H2.65109C1.94798 20.2866 1.27366 20.578 0.776486 21.0968C0.27931 21.6156 0 22.3193 0 23.0529C0 23.7866 0.27931 24.4903 0.776486 25.009C1.27366 25.5278 1.94798 25.8193 2.65109 25.8193H18.5576C19.2605 25.8185 19.9344 25.5268 20.4314 25.0082C20.9284 24.4895 21.2079 23.7864 21.2087 23.0529V20.1934C22.206 19.9796 23.1021 19.4135 23.746 18.5906C24.3899 17.7677 24.7422 16.7383 24.7435 15.676V11.9875C24.7435 11.743 24.6504 11.5084 24.4847 11.3355C24.3189 11.1626 24.0942 11.0654 23.8598 11.0654ZM9.72066 5.53271C9.72112 5.04373 9.90748 4.57493 10.2388 4.22917C10.5702 3.88342 11.0194 3.68896 11.488 3.68847H12.3717V4.61059C12.3713 5.09956 12.1849 5.56836 11.8536 5.91412C11.5222 6.25987 11.0729 6.45433 10.6044 6.45482H9.72066V5.53271ZM7.06957 6.45482C6.13241 6.45372 5.23393 6.06477 4.57126 5.37328C3.90859 4.6818 3.53584 3.74426 3.53478 2.76635V1.84424H4.41848C5.35564 1.84533 6.25411 2.23429 6.91679 2.92578C7.57946 3.61726 7.95221 4.5548 7.95326 5.53271V6.45482H7.06957ZM22.9761 15.676C22.9761 16.4097 22.6968 17.1133 22.1996 17.6321C21.7024 18.1509 21.0281 18.4424 20.325 18.4424C19.6219 18.4424 18.9476 18.1509 18.4504 17.6321C17.9532 17.1133 17.6739 16.4097 17.6739 15.676V12.9096H22.9761V15.676Z" fill="#73B200"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ d(R, {
                                                breakpoint: k,
                                                overrides: {
                                                  fUotBm3xr: {
                                                    children:
                                                      W(`v111`, h) ??
                                                      /*#__PURE__*/ d(o, {
                                                        children: /*#__PURE__*/ d(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                            "--framer-font-size": `8px`,
                                                            "--framer-font-weight": `500`,
                                                            "--framer-letter-spacing": `-0.02em`,
                                                            "--framer-line-height": `120%`,
                                                            "--framer-text-alignment": `center`,
                                                            "--framer-text-color": `rgb(51, 51, 51)`,
                                                          },
                                                          children: `EMS`,
                                                        }),
                                                      }),
                                                  },
                                                },
                                                children: /*#__PURE__*/ d(v, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    W(`v110`, h) ??
                                                    /*#__PURE__*/ d(o, {
                                                      children: /*#__PURE__*/ d(`p`, {
                                                        style: {
                                                          "--framer-font-size": `17.212860107421875px`,
                                                          "--framer-line-height": `120%`,
                                                          "--framer-text-alignment": `center`,
                                                        },
                                                        children: /*#__PURE__*/ d(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `17.21px`,
                                                            "--framer-font-weight": `500`,
                                                            "--framer-letter-spacing": `-0.02em`,
                                                            "--framer-text-color": `rgba(51, 51, 51, 1)`,
                                                          },
                                                          children: `EMS`,
                                                        }),
                                                      }),
                                                    }),
                                                  className: `framer-keobhl`,
                                                  "data-framer-name": `EMS`,
                                                  fonts: [`GF;IBM Plex Sans-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ d(E, {
                                        className: `framer-nv8agb`,
                                        "data-framer-name": `Vector 4205`,
                                        fill: `rgba(0,0,0,1)`,
                                        intrinsicHeight: 104,
                                        intrinsicWidth: 17,
                                        svg: `<svg width="17" height="104" viewBox="-1 -1 17 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.07039 0.292893C7.67986 -0.0976311 7.0467 -0.0976311 6.65617 0.292893L0.292214 6.65685C-0.0983107 7.04738 -0.0983107 7.68054 0.292214 8.07107C0.682738 8.46159 1.3159 8.46159 1.70643 8.07107L7.36328 2.41421L13.0201 8.07107C13.4107 8.46159 14.0438 8.46159 14.4343 8.07107C14.8249 7.68054 14.8249 7.04738 14.4343 6.65685L8.07039 0.292893ZM6.65618 101.12C7.0467 101.511 7.67987 101.511 8.07039 101.12L14.4344 94.7562C14.8249 94.3657 14.8249 93.7325 14.4344 93.342C14.0438 92.9515 13.4107 92.9515 13.0201 93.342L7.36329 98.9989L1.70643 93.342C1.31591 92.9515 0.682742 92.9515 0.292217 93.342C-0.0983069 93.7325 -0.0983069 94.3657 0.292218 94.7562L6.65618 101.12ZM7.36328 1L6.36328 1L6.36328 3.07111L7.36328 3.07111L8.36328 3.07111L8.36328 1L7.36328 1ZM7.36328 7.21332L6.36328 7.21332L6.36328 11.3555L7.36328 11.3555L8.36328 11.3555L8.36328 7.21332L7.36328 7.21332ZM7.36328 15.4977L6.36328 15.4977L6.36328 19.64L7.36328 19.64L8.36328 19.64L8.36328 15.4977L7.36328 15.4977ZM7.36328 23.7822L6.36328 23.7822L6.36328 27.9244L7.36328 27.9244L8.36328 27.9244L8.36328 23.7822L7.36328 23.7822ZM7.36328 32.0666L6.36328 32.0666L6.36328 36.2088L7.36328 36.2088L8.36328 36.2088L8.36328 32.0666L7.36328 32.0666ZM7.36328 40.351L6.36328 40.351L6.36328 44.4932L7.36328 44.4932L8.36328 44.4932L8.36328 40.351L7.36328 40.351ZM7.36328 48.6354L6.36328 48.6354L6.36328 52.7776L7.36328 52.7776L8.36328 52.7776L8.36328 48.6354L7.36328 48.6354ZM7.36328 56.9199L6.36328 56.9199L6.36328 61.0621L7.36328 61.0621L8.36328 61.0621L8.36328 56.9199L7.36328 56.9199ZM7.36328 65.2043L6.36328 65.2043L6.36328 69.3465L7.36328 69.3465L8.36328 69.3465L8.36328 65.2043L7.36328 65.2043ZM7.36328 73.4887L6.36328 73.4887L6.36328 77.6309L7.36328 77.6309L8.36328 77.6309L8.36328 73.4887L7.36328 73.4887ZM7.36328 81.7731L6.36328 81.7731L6.36328 85.9153L7.36328 85.9153L8.36328 85.9153L8.36328 81.7731L7.36328 81.7731ZM7.36329 90.0576L6.36329 90.0576L6.36329 94.1998L7.36329 94.1998L8.36329 94.1998L8.36329 90.0576L7.36329 90.0576ZM7.36329 98.342L6.36329 98.342L6.36329 100.413L7.36329 100.413L8.36329 100.413L8.36329 98.342L7.36329 98.342Z" fill="#73B200"/>
</svg>
`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ d(E, {
                                        className: `framer-875bsj`,
                                        "data-framer-name": `Vector 4207`,
                                        fill: `rgba(0,0,0,1)`,
                                        intrinsicHeight: 17,
                                        intrinsicWidth: 196,
                                        svg: `<svg width="196" height="17" viewBox="-1 -1 196 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.292893 6.65666C-0.0976311 7.04719 -0.0976311 7.68035 0.292893 8.07088L6.65685 14.4348C7.04738 14.8254 7.68054 14.8254 8.07107 14.4348C8.46159 14.0443 8.46159 13.4111 8.07107 13.0206L2.41421 7.36377L8.07107 1.70692C8.46159 1.31639 8.46159 0.683226 8.07107 0.292701C7.68054 -0.097823 7.04738 -0.0978229 6.65685 0.292701L0.292893 6.65666ZM193.164 8.07087C193.555 7.68034 193.555 7.04718 193.164 6.65665L186.8 0.292694C186.41 -0.0978308 185.776 -0.0978307 185.386 0.292694C184.995 0.683218 184.995 1.31638 185.386 1.70691L191.043 7.36376L185.386 13.0206C184.995 13.4111 184.995 14.0443 185.386 14.4348C185.776 14.8254 186.41 14.8254 186.8 14.4348L193.164 8.07087ZM1 7.36377L1 8.36377L2.99434 8.36377L2.99434 7.36377L2.99434 6.36377L1 6.36377L1 7.36377ZM6.98303 7.36377L6.98303 8.36377L10.9717 8.36377L10.9717 7.36377L10.9717 6.36377L6.98303 6.36377L6.98303 7.36377ZM14.9604 7.36377L14.9604 8.36377L18.9491 8.36377L18.9491 7.36377L18.9491 6.36377L14.9604 6.36377L14.9604 7.36377ZM22.9378 7.36377L22.9378 8.36377L26.9265 8.36377L26.9265 7.36377L26.9265 6.36377L22.9378 6.36377L22.9378 7.36377ZM30.9152 7.36377L30.9152 8.36377L34.9038 8.36377L34.9038 7.36377L34.9038 6.36377L30.9152 6.36377L30.9152 7.36377ZM38.8925 7.36377L38.8925 8.36377L42.8812 8.36377L42.8812 7.36377L42.8812 6.36377L38.8925 6.36377L38.8925 7.36377ZM46.8699 7.36377L46.8699 8.36377L50.8586 8.36377L50.8586 7.36377L50.8586 6.36377L46.8699 6.36377L46.8699 7.36377ZM54.8473 7.36377L54.8473 8.36377L58.836 8.36377L58.836 7.36377L58.836 6.36377L54.8473 6.36377L54.8473 7.36377ZM62.8247 7.36377L62.8247 8.36377L66.8134 8.36377L66.8134 7.36377L66.8134 6.36377L62.8247 6.36377L62.8247 7.36377ZM70.802 7.36377L70.802 8.36377L74.7907 8.36377L74.7907 7.36377L74.7907 6.36377L70.802 6.36377L70.802 7.36377ZM78.7794 7.36377L78.7794 8.36377L82.7681 8.36377L82.7681 7.36377L82.7681 6.36377L78.7794 6.36377L78.7794 7.36377ZM86.7568 7.36377L86.7568 8.36377L90.7455 8.36377L90.7455 7.36377L90.7455 6.36377L86.7568 6.36377L86.7568 7.36377ZM94.7342 7.36377L94.7342 8.36377L98.7229 8.36377L98.7229 7.36377L98.7229 6.36377L94.7342 6.36377L94.7342 7.36377ZM102.712 7.36377L102.712 8.36377L106.7 8.36376L106.7 7.36376L106.7 6.36376L102.712 6.36377L102.712 7.36377ZM110.689 7.36376L110.689 8.36376L114.678 8.36376L114.678 7.36376L114.678 6.36376L110.689 6.36376L110.689 7.36376ZM118.666 7.36376L118.666 8.36376L122.655 8.36376L122.655 7.36376L122.655 6.36376L118.666 6.36376L118.666 7.36376ZM126.644 7.36376L126.644 8.36376L130.632 8.36376L130.632 7.36376L130.632 6.36376L126.644 6.36376L126.644 7.36376ZM134.621 7.36376L134.621 8.36376L138.61 8.36376L138.61 7.36376L138.61 6.36376L134.621 6.36376L134.621 7.36376ZM142.598 7.36376L142.598 8.36376L146.587 8.36376L146.587 7.36376L146.587 6.36376L142.598 6.36376L142.598 7.36376ZM150.576 7.36376L150.576 8.36376L154.564 8.36376L154.564 7.36376L154.564 6.36376L150.576 6.36376L150.576 7.36376ZM158.553 7.36376L158.553 8.36376L162.542 8.36376L162.542 7.36376L162.542 6.36376L158.553 6.36376L158.553 7.36376ZM166.531 7.36376L166.531 8.36376L170.519 8.36376L170.519 7.36376L170.519 6.36376L166.531 6.36376L166.531 7.36376ZM174.508 7.36376L174.508 8.36376L178.497 8.36376L178.497 7.36376L178.497 6.36376L174.508 6.36376L174.508 7.36376ZM182.485 7.36376L182.485 8.36376L186.474 8.36376L186.474 7.36376L186.474 6.36376L182.485 6.36376L182.485 7.36376ZM190.463 7.36376L190.463 8.36376L192.457 8.36376L192.457 7.36376L192.457 6.36376L190.463 6.36376L190.463 7.36376Z" fill="#73B200"/>
</svg>
`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ d(E, {
                                        className: `framer-1dcnsz9`,
                                        "data-framer-name": `Vector 4208`,
                                        fill: `rgba(0,0,0,1)`,
                                        intrinsicHeight: 97,
                                        intrinsicWidth: 172,
                                        svg: `<svg width="172" height="97" viewBox="-1 -1 172 97" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M154.044 -0.707105C154.435 -1.09763 155.068 -1.09763 155.458 -0.707107L161.822 5.65685C162.213 6.04738 162.213 6.68054 161.822 7.07107C161.432 7.46159 160.799 7.46159 160.408 7.07107L154.751 1.41421L149.094 7.07107C148.704 7.46159 148.071 7.46159 147.68 7.07107C147.29 6.68054 147.29 6.04738 147.68 5.65686L154.044 -0.707105ZM3.5019 57.8808C3.11138 57.4903 3.11139 56.8571 3.50191 56.4666L9.86587 50.1026C10.2564 49.7121 10.8896 49.7121 11.2801 50.1026C11.6706 50.4932 11.6706 51.1263 11.2801 51.5169L5.62323 57.1737L11.2801 62.8306C11.6706 63.2211 11.6706 63.8543 11.2801 64.2448C10.8896 64.6353 10.2564 64.6353 9.86587 64.2448L3.5019 57.8808ZM154.751 12.1737L155.751 12.1737L154.751 12.1737ZM109.751 57.1737L109.751 56.1737L109.751 57.1737ZM4.20901 57.1737L4.20901 56.1737L6.23867 56.1737L6.23867 57.1737L6.23867 58.1737L4.20901 58.1737L4.20901 57.1737ZM10.298 57.1737L10.298 56.1737L14.3573 56.1737L14.3573 57.1737L14.3573 58.1737L10.298 58.1737L10.298 57.1737ZM18.4166 57.1737L18.4166 56.1737L22.4759 56.1737L22.4759 57.1737L22.4759 58.1737L18.4166 58.1737L18.4166 57.1737ZM26.5353 57.1737L26.5353 56.1737L30.5946 56.1737L30.5946 57.1737L30.5946 58.1737L26.5353 58.1737L26.5353 57.1737ZM34.6539 57.1737L34.6539 56.1737L38.7132 56.1737L38.7132 57.1737L38.7132 58.1737L34.6539 58.1737L34.6539 57.1737ZM42.7725 57.1737L42.7725 56.1737L46.8318 56.1737L46.8318 57.1737L46.8318 58.1737L42.7725 58.1737L42.7725 57.1737ZM50.8911 57.1737L50.8911 56.1737L54.9505 56.1737L54.9505 57.1737L54.9505 58.1737L50.8911 58.1737L50.8911 57.1737ZM59.0098 57.1737L59.0098 56.1737L63.0691 56.1737L63.0691 57.1737L63.0691 58.1737L59.0098 58.1737L59.0098 57.1737ZM67.1284 57.1737L67.1284 56.1737L71.1877 56.1737L71.1877 57.1737L71.1877 58.1737L67.1284 58.1737L67.1284 57.1737ZM75.247 57.1737L75.247 56.1737L79.3064 56.1737L79.3064 57.1737L79.3064 58.1737L75.247 58.1737L75.247 57.1737ZM83.3657 57.1737L83.3657 56.1737L87.425 56.1737L87.425 57.1737L87.425 58.1737L83.3657 58.1737L83.3657 57.1737ZM91.4843 57.1737L91.4843 56.1737L95.5436 56.1737L95.5436 57.1737L95.5436 58.1737L91.4843 58.1737L91.4843 57.1737ZM99.6029 57.1737L99.6029 56.1737L103.662 56.1737L103.662 57.1737L103.662 58.1737L99.6029 58.1737L99.6029 57.1737ZM107.722 57.1737L107.722 56.1737L109.751 56.1737L109.751 57.1737L109.751 58.1737L107.722 58.1737L107.722 57.1737ZM109.751 57.1737L109.751 56.1737C110.395 56.1737 111.036 56.1599 111.673 56.1325L111.716 57.1316L111.759 58.1307C111.093 58.1593 110.424 58.1737 109.751 58.1737L109.751 57.1737ZM115.629 56.7934L115.499 55.8018C116.778 55.635 118.038 55.4134 119.28 55.1394L119.495 56.1159L119.711 57.0924C118.413 57.379 117.094 57.6106 115.758 57.785L115.629 56.7934ZM123.287 55.1023L122.987 54.1485C124.213 53.7622 125.416 53.3236 126.594 52.8354L126.977 53.7591L127.36 54.6828C126.128 55.1934 124.87 55.6521 123.588 56.0561L123.287 55.1023ZM130.534 52.0974L130.072 51.2108C131.209 50.6174 132.318 49.9757 133.394 49.2884L133.932 50.1313L134.471 50.9742C133.345 51.6927 132.186 52.3636 130.997 52.984L130.534 52.0974ZM137.146 47.8767L136.537 47.0838C137.553 46.3031 138.534 45.4791 139.477 44.6145L140.153 45.3515L140.829 46.0886C139.843 46.9923 138.818 47.8536 137.756 48.6696L137.146 47.8767ZM142.929 42.5753L142.192 41.8995C143.057 40.9564 143.881 39.9756 144.661 38.9597L145.454 39.569L146.247 40.1783C145.431 41.2402 144.57 42.2654 143.666 43.2511L142.929 42.5753ZM147.709 36.3549L146.866 35.8168C147.553 34.7402 148.195 33.6318 148.788 32.4942L149.675 32.9567L150.562 33.4192C149.941 34.6086 149.27 35.7675 148.552 36.893L147.709 36.3549ZM151.337 29.3992L150.413 29.0161C150.901 27.8387 151.34 26.6355 151.726 25.4091L152.68 25.7096L153.634 26.01C153.23 27.2926 152.771 28.5509 152.26 29.7822L151.337 29.3992ZM153.693 21.9177L152.717 21.7022C152.991 20.461 153.213 19.2001 153.379 17.9218L154.371 18.0511L155.362 18.1805C155.188 19.5169 154.956 20.8353 154.67 22.1333L153.693 21.9177ZM154.709 14.1385L153.71 14.0956C153.737 13.4585 153.751 12.8177 153.751 12.1737L154.751 12.1737L155.751 12.1737C155.751 12.8464 155.737 13.5157 155.708 14.1815L154.709 14.1385ZM154.751 12.1737L153.751 12.1737L153.751 10.652L154.751 10.652L155.751 10.652L155.751 12.1737L154.751 12.1737ZM154.751 7.60857L153.751 7.60857L153.751 4.56514L154.751 4.56514L155.751 4.56514L155.751 7.60857L154.751 7.60857ZM154.751 1.52171L153.751 1.52171L153.751 -4.89376e-07L154.751 0L155.751 4.89376e-07L155.751 1.52172L154.751 1.52171Z" fill="#73B200"/>
</svg>
`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ d(E, {
                                        className: `framer-1sitvwa`,
                                        "data-framer-name": `Vector 4207`,
                                        fill: `rgba(0,0,0,1)`,
                                        intrinsicHeight: 17,
                                        intrinsicWidth: 196,
                                        svg: `<svg width="196" height="17" viewBox="-1 -1 196 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.292893 6.65666C-0.0976311 7.04719 -0.0976311 7.68035 0.292893 8.07088L6.65685 14.4348C7.04738 14.8254 7.68054 14.8254 8.07107 14.4348C8.46159 14.0443 8.46159 13.4111 8.07107 13.0206L2.41421 7.36377L8.07107 1.70692C8.46159 1.31639 8.46159 0.683226 8.07107 0.292701C7.68054 -0.097823 7.04738 -0.0978229 6.65685 0.292701L0.292893 6.65666ZM193.164 8.07087C193.555 7.68034 193.555 7.04718 193.164 6.65665L186.8 0.292694C186.41 -0.0978308 185.776 -0.0978307 185.386 0.292694C184.995 0.683218 184.995 1.31638 185.386 1.70691L191.043 7.36376L185.386 13.0206C184.995 13.4111 184.995 14.0443 185.386 14.4348C185.776 14.8254 186.41 14.8254 186.8 14.4348L193.164 8.07087ZM1 7.36377L1 8.36377L2.99434 8.36377L2.99434 7.36377L2.99434 6.36377L1 6.36377L1 7.36377ZM6.98303 7.36377L6.98303 8.36377L10.9717 8.36377L10.9717 7.36377L10.9717 6.36377L6.98303 6.36377L6.98303 7.36377ZM14.9604 7.36377L14.9604 8.36377L18.9491 8.36377L18.9491 7.36377L18.9491 6.36377L14.9604 6.36377L14.9604 7.36377ZM22.9378 7.36377L22.9378 8.36377L26.9265 8.36377L26.9265 7.36377L26.9265 6.36377L22.9378 6.36377L22.9378 7.36377ZM30.9152 7.36377L30.9152 8.36377L34.9038 8.36377L34.9038 7.36377L34.9038 6.36377L30.9152 6.36377L30.9152 7.36377ZM38.8925 7.36377L38.8925 8.36377L42.8812 8.36377L42.8812 7.36377L42.8812 6.36377L38.8925 6.36377L38.8925 7.36377ZM46.8699 7.36377L46.8699 8.36377L50.8586 8.36377L50.8586 7.36377L50.8586 6.36377L46.8699 6.36377L46.8699 7.36377ZM54.8473 7.36377L54.8473 8.36377L58.836 8.36377L58.836 7.36377L58.836 6.36377L54.8473 6.36377L54.8473 7.36377ZM62.8247 7.36377L62.8247 8.36377L66.8134 8.36377L66.8134 7.36377L66.8134 6.36377L62.8247 6.36377L62.8247 7.36377ZM70.802 7.36377L70.802 8.36377L74.7907 8.36377L74.7907 7.36377L74.7907 6.36377L70.802 6.36377L70.802 7.36377ZM78.7794 7.36377L78.7794 8.36377L82.7681 8.36377L82.7681 7.36377L82.7681 6.36377L78.7794 6.36377L78.7794 7.36377ZM86.7568 7.36377L86.7568 8.36377L90.7455 8.36377L90.7455 7.36377L90.7455 6.36377L86.7568 6.36377L86.7568 7.36377ZM94.7342 7.36377L94.7342 8.36377L98.7229 8.36377L98.7229 7.36377L98.7229 6.36377L94.7342 6.36377L94.7342 7.36377ZM102.712 7.36377L102.712 8.36377L106.7 8.36376L106.7 7.36376L106.7 6.36376L102.712 6.36377L102.712 7.36377ZM110.689 7.36376L110.689 8.36376L114.678 8.36376L114.678 7.36376L114.678 6.36376L110.689 6.36376L110.689 7.36376ZM118.666 7.36376L118.666 8.36376L122.655 8.36376L122.655 7.36376L122.655 6.36376L118.666 6.36376L118.666 7.36376ZM126.644 7.36376L126.644 8.36376L130.632 8.36376L130.632 7.36376L130.632 6.36376L126.644 6.36376L126.644 7.36376ZM134.621 7.36376L134.621 8.36376L138.61 8.36376L138.61 7.36376L138.61 6.36376L134.621 6.36376L134.621 7.36376ZM142.598 7.36376L142.598 8.36376L146.587 8.36376L146.587 7.36376L146.587 6.36376L142.598 6.36376L142.598 7.36376ZM150.576 7.36376L150.576 8.36376L154.564 8.36376L154.564 7.36376L154.564 6.36376L150.576 6.36376L150.576 7.36376ZM158.553 7.36376L158.553 8.36376L162.542 8.36376L162.542 7.36376L162.542 6.36376L158.553 6.36376L158.553 7.36376ZM166.531 7.36376L166.531 8.36376L170.519 8.36376L170.519 7.36376L170.519 6.36376L166.531 6.36376L166.531 7.36376ZM174.508 7.36376L174.508 8.36376L178.497 8.36376L178.497 7.36376L178.497 6.36376L174.508 6.36376L174.508 7.36376ZM182.485 7.36376L182.485 8.36376L186.474 8.36376L186.474 7.36376L186.474 6.36376L182.485 6.36376L182.485 7.36376ZM190.463 7.36376L190.463 8.36376L192.457 8.36376L192.457 7.36376L192.457 6.36376L190.463 6.36376L190.463 7.36376Z" fill="#73B200"/>
</svg>
`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ d(E, {
                                        className: `framer-grr0h7`,
                                        "data-framer-name": `Vector 4206`,
                                        fill: `rgba(0,0,0,1)`,
                                        intrinsicHeight: 97,
                                        intrinsicWidth: 172,
                                        svg: `<svg width="172" height="97" viewBox="-1 -1 172 97" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0005 -0.707105C14.61 -1.09763 13.9768 -1.09763 13.5863 -0.707107L7.22236 5.65685C6.83184 6.04738 6.83184 6.68054 7.22236 7.07107C7.61289 7.46159 8.24605 7.46159 8.63658 7.07107L14.2934 1.41421L19.9503 7.07107C20.3408 7.46159 20.974 7.46159 21.3645 7.07107C21.755 6.68054 21.755 6.04738 21.3645 5.65686L15.0005 -0.707105ZM165.543 57.8808C165.933 57.4903 165.933 56.8571 165.543 56.4666L159.179 50.1026C158.788 49.7121 158.155 49.7121 157.765 50.1026C157.374 50.4932 157.374 51.1263 157.765 51.5169L163.421 57.1737L157.765 62.8306C157.374 63.2211 157.374 63.8543 157.765 64.2448C158.155 64.6353 158.788 64.6353 159.179 64.2448L165.543 57.8808ZM14.2934 12.1737L13.2934 12.1737L14.2934 12.1737ZM59.2934 57.1737L59.2934 56.1737L59.2934 57.1737ZM164.836 57.1737L164.836 56.1737L162.806 56.1737L162.806 57.1737L162.806 58.1737L164.836 58.1737L164.836 57.1737ZM158.747 57.1737L158.747 56.1737L154.687 56.1737L154.687 57.1737L154.687 58.1737L158.747 58.1737L158.747 57.1737ZM150.628 57.1737L150.628 56.1737L146.569 56.1737L146.569 57.1737L146.569 58.1737L150.628 58.1737L150.628 57.1737ZM142.509 57.1737L142.509 56.1737L138.45 56.1737L138.45 57.1737L138.45 58.1737L142.509 58.1737L142.509 57.1737ZM134.391 57.1737L134.391 56.1737L130.331 56.1737L130.331 57.1737L130.331 58.1737L134.391 58.1737L134.391 57.1737ZM126.272 57.1737L126.272 56.1737L122.213 56.1737L122.213 57.1737L122.213 58.1737L126.272 58.1737L126.272 57.1737ZM118.153 57.1737L118.153 56.1737L114.094 56.1737L114.094 57.1737L114.094 58.1737L118.153 58.1737L118.153 57.1737ZM110.035 57.1737L110.035 56.1737L105.976 56.1737L105.976 57.1737L105.976 58.1737L110.035 58.1737L110.035 57.1737ZM101.916 57.1737L101.916 56.1737L97.8569 56.1737L97.8569 57.1737L97.8569 58.1737L101.916 58.1737L101.916 57.1737ZM93.7976 57.1737L93.7976 56.1737L89.7383 56.1737L89.7383 57.1737L89.7383 58.1737L93.7976 58.1737L93.7976 57.1737ZM85.679 57.1737L85.679 56.1737L81.6196 56.1737L81.6196 57.1737L81.6196 58.1737L85.679 58.1737L85.679 57.1737ZM77.5603 57.1737L77.5603 56.1737L73.501 56.1737L73.501 57.1737L73.501 58.1737L77.5603 58.1737L77.5603 57.1737ZM69.4417 57.1737L69.4417 56.1737L65.3824 56.1737L65.3824 57.1737L65.3824 58.1737L69.4417 58.1737L69.4417 57.1737ZM61.3231 57.1737L61.3231 56.1737L59.2934 56.1737L59.2934 57.1737L59.2934 58.1737L61.3231 58.1737L61.3231 57.1737ZM59.2934 57.1737L59.2934 56.1737C58.6494 56.1737 58.0087 56.1599 57.3715 56.1325L57.3286 57.1316L57.2857 58.1307C57.9514 58.1593 58.6208 58.1737 59.2934 58.1737L59.2934 57.1737ZM53.416 56.7934L53.5454 55.8018C52.2671 55.635 51.0061 55.4134 49.765 55.1394L49.5494 56.1159L49.3339 57.0924C50.6318 57.379 51.9503 57.6106 53.2867 57.785L53.416 56.7934ZM45.7575 55.1023L46.058 54.1485C44.8316 53.7622 43.6284 53.3236 42.451 52.8354L42.068 53.7591L41.6849 54.6828C42.9162 55.1934 44.1745 55.6521 45.4571 56.0561L45.7575 55.1023ZM38.5105 52.0974L38.973 51.2108C37.8354 50.6174 36.7269 49.9757 35.6503 49.2884L35.1122 50.1313L34.5741 50.9742C35.6996 51.6927 36.8585 52.3636 38.048 52.984L38.5105 52.0974ZM31.8981 47.8767L32.5075 47.0838C31.4916 46.3031 30.5107 45.4791 29.5676 44.6145L28.8919 45.3515L28.2161 46.0886C29.2017 46.9923 30.227 47.8536 31.2888 48.6696L31.8981 47.8767ZM26.1156 42.5753L26.8527 41.8995C25.9881 40.9564 25.164 39.9756 24.3834 38.9597L23.5905 39.569L22.7975 40.1783C23.6135 41.2402 24.4748 42.2654 25.3785 43.2511L26.1156 42.5753ZM21.3359 36.3549L22.1788 35.8168C21.4915 34.7402 20.8498 33.6318 20.2564 32.4942L19.3697 32.9567L18.4831 33.4192C19.1036 34.6086 19.7745 35.7675 20.493 36.893L21.3359 36.3549ZM17.7081 29.3992L18.6318 29.0161C18.1435 27.8387 17.7049 26.6355 17.3186 25.4091L16.3648 25.7096L15.411 26.01C15.815 27.2926 16.2737 28.5509 16.7843 29.7822L17.7081 29.3992ZM15.3512 21.9177L16.3277 21.7022C16.0537 20.461 15.8321 19.2001 15.6654 17.9218L14.6738 18.0511L13.6822 18.1805C13.8565 19.5169 14.0882 20.8353 14.3747 22.1333L15.3512 21.9177ZM14.3356 14.1385L15.3346 14.0956C15.3073 13.4585 15.2934 12.8177 15.2934 12.1737L14.2934 12.1737L13.2934 12.1737C13.2934 12.8464 13.3079 13.5157 13.3365 14.1815L14.3356 14.1385ZM14.2934 12.1737L15.2934 12.1737L15.2934 10.652L14.2934 10.652L13.2934 10.652L13.2934 12.1737L14.2934 12.1737ZM14.2934 7.60857L15.2934 7.60857L15.2934 4.56514L14.2934 4.56514L13.2934 4.56514L13.2934 7.60857L14.2934 7.60857ZM14.2934 1.52171L15.2934 1.52171L15.2934 -4.89376e-07L14.2934 0L13.2934 4.89376e-07L13.2934 1.52172L14.2934 1.52171Z" fill="#73B200"/>
</svg>
`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ d(E, {
                                        className: `framer-hebbft`,
                                        "data-framer-name": `Vector 4205`,
                                        fill: `rgba(0,0,0,1)`,
                                        intrinsicHeight: 104,
                                        intrinsicWidth: 17,
                                        svg: `<svg width="17" height="104" viewBox="-1 -1 17 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.07039 0.292893C7.67986 -0.0976311 7.0467 -0.0976311 6.65617 0.292893L0.292214 6.65685C-0.0983107 7.04738 -0.0983107 7.68054 0.292214 8.07107C0.682738 8.46159 1.3159 8.46159 1.70643 8.07107L7.36328 2.41421L13.0201 8.07107C13.4107 8.46159 14.0438 8.46159 14.4343 8.07107C14.8249 7.68054 14.8249 7.04738 14.4343 6.65685L8.07039 0.292893ZM6.65618 101.12C7.0467 101.511 7.67987 101.511 8.07039 101.12L14.4344 94.7562C14.8249 94.3657 14.8249 93.7325 14.4344 93.342C14.0438 92.9515 13.4107 92.9515 13.0201 93.342L7.36329 98.9989L1.70643 93.342C1.31591 92.9515 0.682742 92.9515 0.292217 93.342C-0.0983069 93.7325 -0.0983069 94.3657 0.292218 94.7562L6.65618 101.12ZM7.36328 1L6.36328 1L6.36328 3.07111L7.36328 3.07111L8.36328 3.07111L8.36328 1L7.36328 1ZM7.36328 7.21332L6.36328 7.21332L6.36328 11.3555L7.36328 11.3555L8.36328 11.3555L8.36328 7.21332L7.36328 7.21332ZM7.36328 15.4977L6.36328 15.4977L6.36328 19.64L7.36328 19.64L8.36328 19.64L8.36328 15.4977L7.36328 15.4977ZM7.36328 23.7822L6.36328 23.7822L6.36328 27.9244L7.36328 27.9244L8.36328 27.9244L8.36328 23.7822L7.36328 23.7822ZM7.36328 32.0666L6.36328 32.0666L6.36328 36.2088L7.36328 36.2088L8.36328 36.2088L8.36328 32.0666L7.36328 32.0666ZM7.36328 40.351L6.36328 40.351L6.36328 44.4932L7.36328 44.4932L8.36328 44.4932L8.36328 40.351L7.36328 40.351ZM7.36328 48.6354L6.36328 48.6354L6.36328 52.7776L7.36328 52.7776L8.36328 52.7776L8.36328 48.6354L7.36328 48.6354ZM7.36328 56.9199L6.36328 56.9199L6.36328 61.0621L7.36328 61.0621L8.36328 61.0621L8.36328 56.9199L7.36328 56.9199ZM7.36328 65.2043L6.36328 65.2043L6.36328 69.3465L7.36328 69.3465L8.36328 69.3465L8.36328 65.2043L7.36328 65.2043ZM7.36328 73.4887L6.36328 73.4887L6.36328 77.6309L7.36328 77.6309L8.36328 77.6309L8.36328 73.4887L7.36328 73.4887ZM7.36328 81.7731L6.36328 81.7731L6.36328 85.9153L7.36328 85.9153L8.36328 85.9153L8.36328 81.7731L7.36328 81.7731ZM7.36329 90.0576L6.36329 90.0576L6.36329 94.1998L7.36329 94.1998L8.36329 94.1998L8.36329 90.0576L7.36329 90.0576ZM7.36329 98.342L6.36329 98.342L6.36329 100.413L7.36329 100.413L8.36329 100.413L8.36329 98.342L7.36329 98.342Z" fill="#73B200"/>
</svg>
`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ d(E, {
                                        className: `framer-12or1my`,
                                        "data-framer-name": `Vector 4205`,
                                        fill: `rgba(0,0,0,1)`,
                                        intrinsicHeight: 104,
                                        intrinsicWidth: 17,
                                        svg: `<svg width="17" height="104" viewBox="-1 -1 17 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.07039 0.292893C7.67986 -0.0976311 7.0467 -0.0976311 6.65617 0.292893L0.292214 6.65685C-0.0983107 7.04738 -0.0983107 7.68054 0.292214 8.07107C0.682738 8.46159 1.3159 8.46159 1.70643 8.07107L7.36328 2.41421L13.0201 8.07107C13.4107 8.46159 14.0438 8.46159 14.4343 8.07107C14.8249 7.68054 14.8249 7.04738 14.4343 6.65685L8.07039 0.292893ZM6.65618 101.12C7.0467 101.511 7.67987 101.511 8.07039 101.12L14.4344 94.7562C14.8249 94.3657 14.8249 93.7325 14.4344 93.342C14.0438 92.9515 13.4107 92.9515 13.0201 93.342L7.36329 98.9989L1.70643 93.342C1.31591 92.9515 0.682742 92.9515 0.292217 93.342C-0.0983069 93.7325 -0.0983069 94.3657 0.292218 94.7562L6.65618 101.12ZM7.36328 1L6.36328 1L6.36328 3.07111L7.36328 3.07111L8.36328 3.07111L8.36328 1L7.36328 1ZM7.36328 7.21332L6.36328 7.21332L6.36328 11.3555L7.36328 11.3555L8.36328 11.3555L8.36328 7.21332L7.36328 7.21332ZM7.36328 15.4977L6.36328 15.4977L6.36328 19.64L7.36328 19.64L8.36328 19.64L8.36328 15.4977L7.36328 15.4977ZM7.36328 23.7822L6.36328 23.7822L6.36328 27.9244L7.36328 27.9244L8.36328 27.9244L8.36328 23.7822L7.36328 23.7822ZM7.36328 32.0666L6.36328 32.0666L6.36328 36.2088L7.36328 36.2088L8.36328 36.2088L8.36328 32.0666L7.36328 32.0666ZM7.36328 40.351L6.36328 40.351L6.36328 44.4932L7.36328 44.4932L8.36328 44.4932L8.36328 40.351L7.36328 40.351ZM7.36328 48.6354L6.36328 48.6354L6.36328 52.7776L7.36328 52.7776L8.36328 52.7776L8.36328 48.6354L7.36328 48.6354ZM7.36328 56.9199L6.36328 56.9199L6.36328 61.0621L7.36328 61.0621L8.36328 61.0621L8.36328 56.9199L7.36328 56.9199ZM7.36328 65.2043L6.36328 65.2043L6.36328 69.3465L7.36328 69.3465L8.36328 69.3465L8.36328 65.2043L7.36328 65.2043ZM7.36328 73.4887L6.36328 73.4887L6.36328 77.6309L7.36328 77.6309L8.36328 77.6309L8.36328 73.4887L7.36328 73.4887ZM7.36328 81.7731L6.36328 81.7731L6.36328 85.9153L7.36328 85.9153L8.36328 85.9153L8.36328 81.7731L7.36328 81.7731ZM7.36329 90.0576L6.36329 90.0576L6.36329 94.1998L7.36329 94.1998L8.36329 94.1998L8.36329 90.0576L7.36329 90.0576ZM7.36329 98.342L6.36329 98.342L6.36329 100.413L7.36329 100.413L8.36329 100.413L8.36329 98.342L7.36329 98.342Z" fill="#73B200"/>
</svg>
`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        /*#__PURE__*/ f(G, {
                          __framer__animate: { transition: Z },
                          __framer__animateOnce: !0,
                          __framer__enter: X,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1wt8dhf`,
                          children: [
                            /*#__PURE__*/ d(`div`, {
                              className: `framer-19du2uw`,
                              children: /*#__PURE__*/ d(R, {
                                breakpoint: k,
                                overrides: {
                                  fUotBm3xr: {
                                    children:
                                      W(`v113`, h) ??
                                      /*#__PURE__*/ d(o, {
                                        children: /*#__PURE__*/ d(`h2`, {
                                          className: `framer-styles-preset-1k5p4j8`,
                                          "data-styles-preset": `F3NdZsOi7`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `center` },
                                          children: `常见问题`,
                                        }),
                                      }),
                                  },
                                },
                                children: /*#__PURE__*/ d(v, {
                                  __fromCanvasComponent: !0,
                                  children:
                                    W(`v112`, h) ??
                                    /*#__PURE__*/ d(o, {
                                      children: /*#__PURE__*/ d(`h2`, {
                                        className: `framer-styles-preset-1k5p4j8`,
                                        "data-styles-preset": `F3NdZsOi7`,
                                        dir: `auto`,
                                        children: `常见问题`,
                                      }),
                                    }),
                                  className: `framer-18qde1w`,
                                  "data-framer-name": `Applications do not just consume data — they write`,
                                  effect: q,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            /*#__PURE__*/ f(G, {
                              __framer__animate: { transition: Y },
                              __framer__animateOnce: !1,
                              __framer__enter: X,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-lnbq1t`,
                              children: [
                                /*#__PURE__*/ d(R, {
                                  breakpoint: k,
                                  overrides: {
                                    fUotBm3xr: { width: `300px`, y: (x?.y || 0) + 11375.17 },
                                  },
                                  children: /*#__PURE__*/ d(M, {
                                    height: 68,
                                    width: `800px`,
                                    y: (x?.y || 0) + 6803.97,
                                    children: /*#__PURE__*/ d(F, {
                                      className: `framer-rn0vfm-container`,
                                      nodeId: `hRliSlmKB`,
                                      scopeId: `CtRSYVoCz`,
                                      children: /*#__PURE__*/ d(U, {
                                        EsEDiq4IK:
                                          W(`v115`, h) ??
                                          `不需要。你可以用自然语言描述工作流、字段、角色、表单和业务规则，Builder 会帮助生成应用结构、界面、数据模型和交互逻辑。`,
                                        height: `100%`,
                                        id: `hRliSlmKB`,
                                        layoutId: `hRliSlmKB`,
                                        oH02PZssK:
                                          W(`v114`, h) ?? `使用 Tier0 Builder 需要编程经验吗？`,
                                        style: { width: `100%` },
                                        variant: K(`PvenT0IVh`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ d(R, {
                                  breakpoint: k,
                                  overrides: {
                                    fUotBm3xr: { width: `300px`, y: (x?.y || 0) + 11443.17 },
                                  },
                                  children: /*#__PURE__*/ d(M, {
                                    height: 68,
                                    width: `800px`,
                                    y: (x?.y || 0) + 6871.97,
                                    children: /*#__PURE__*/ d(F, {
                                      className: `framer-bwht2f-container`,
                                      nodeId: `Dk9WgfUW9`,
                                      scopeId: `CtRSYVoCz`,
                                      children: /*#__PURE__*/ d(U, {
                                        EsEDiq4IK:
                                          W(`v117`, h) ??
                                          `可以。Builder 可以独立用于创建和发布业务应用。如果你的场景需要连接工业数据、UNS、系统集成或实时运营数据，也可以与 Tier0 平台 配合使用。`,
                                        height: `100%`,
                                        id: `Dk9WgfUW9`,
                                        layoutId: `Dk9WgfUW9`,
                                        oH02PZssK:
                                          W(`v116`, h) ??
                                          `没有 Tier0 平台 或统⼀命名空间（UNS），也可以使⽤ Builder 吗？`,
                                        style: { width: `100%` },
                                        variant: K(`PvenT0IVh`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ d(R, {
                                  breakpoint: k,
                                  overrides: {
                                    fUotBm3xr: { width: `300px`, y: (x?.y || 0) + 11511.17 },
                                  },
                                  children: /*#__PURE__*/ d(M, {
                                    height: 68,
                                    width: `800px`,
                                    y: (x?.y || 0) + 6939.97,
                                    children: /*#__PURE__*/ d(F, {
                                      className: `framer-c8l8te-container`,
                                      nodeId: `Jj0fhcwZ3`,
                                      scopeId: `CtRSYVoCz`,
                                      children: /*#__PURE__*/ d(U, {
                                        EsEDiq4IK:
                                          W(`v119`, h) ??
                                          `只有被邀请到对应项目或应用中的 Builder 用户可以访问。你可以按项目和应用管理成员，并定义不同角色的权限和可执行操作。`,
                                        height: `100%`,
                                        id: `Jj0fhcwZ3`,
                                        layoutId: `Jj0fhcwZ3`,
                                        oH02PZssK: W(`v118`, h) ?? `谁能访问已发布的应⽤？`,
                                        style: { width: `100%` },
                                        variant: K(`PvenT0IVh`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ d(R, {
                                  breakpoint: k,
                                  overrides: {
                                    fUotBm3xr: { width: `300px`, y: (x?.y || 0) + 11579.17 },
                                  },
                                  children: /*#__PURE__*/ d(M, {
                                    height: 68,
                                    width: `800px`,
                                    y: (x?.y || 0) + 7007.97,
                                    children: /*#__PURE__*/ d(F, {
                                      className: `framer-gr6mmt-container`,
                                      nodeId: `LE_n206b0`,
                                      scopeId: `CtRSYVoCz`,
                                      children: /*#__PURE__*/ d(U, {
                                        EsEDiq4IK:
                                          W(`v121`, h) ??
                                          `可以。每个应用都支持独立迭代。你可以修改需求、测试新版本、添加变更说明，并在准备就绪后发布更新。`,
                                        height: `100%`,
                                        id: `LE_n206b0`,
                                        layoutId: `LE_n206b0`,
                                        oH02PZssK: W(`v120`, h) ?? `应⽤发布后还能更新吗？`,
                                        style: { width: `100%` },
                                        variant: K(`PvenT0IVh`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ d(R, {
                                  breakpoint: k,
                                  overrides: {
                                    fUotBm3xr: { width: `300px`, y: (x?.y || 0) + 11647.17 },
                                  },
                                  children: /*#__PURE__*/ d(M, {
                                    height: 68,
                                    width: `800px`,
                                    y: (x?.y || 0) + 7075.97,
                                    children: /*#__PURE__*/ d(F, {
                                      className: `framer-g4moji-container`,
                                      nodeId: `SkaTlhxR3`,
                                      scopeId: `CtRSYVoCz`,
                                      children: /*#__PURE__*/ d(U, {
                                        EsEDiq4IK:
                                          W(`v123`, h) ??
                                          `可以。一个项目可以组织多个相关应用，例如生产、质量、维护、库存和班次交接等应用，并分别管理它们的版本和发布节奏。`,
                                        height: `100%`,
                                        id: `SkaTlhxR3`,
                                        layoutId: `SkaTlhxR3`,
                                        oH02PZssK: W(`v122`, h) ?? `⼀个项⽬可以包含多个应⽤吗？`,
                                        style: { width: `100%` },
                                        variant: K(`PvenT0IVh`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ d(R, {
                                  breakpoint: k,
                                  overrides: {
                                    fUotBm3xr: { width: `300px`, y: (x?.y || 0) + 11715.17 },
                                  },
                                  children: /*#__PURE__*/ d(M, {
                                    height: 68,
                                    width: `800px`,
                                    y: (x?.y || 0) + 7143.97,
                                    children: /*#__PURE__*/ d(F, {
                                      className: `framer-13sv47u-container`,
                                      nodeId: `AbkwovRdw`,
                                      scopeId: `CtRSYVoCz`,
                                      children: /*#__PURE__*/ d(U, {
                                        EsEDiq4IK:
                                          W(`v125`, h) ??
                                          `已发布的应用可通过 Web 访问，也可通过 iOS 和 Android 上的 Tier0 Digital Worker 交付给一线团队使用。`,
                                        height: `100%`,
                                        id: `AbkwovRdw`,
                                        layoutId: `AbkwovRdw`,
                                        oH02PZssK:
                                          W(`v124`, h) ?? `⽤⼾可以在哪⾥访问已发布的应⽤？`,
                                        style: { width: `100%` },
                                        variant: K(`PvenT0IVh`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ d(R, {
                                  breakpoint: k,
                                  overrides: {
                                    fUotBm3xr: { width: `300px`, y: (x?.y || 0) + 11783.17 },
                                  },
                                  children: /*#__PURE__*/ d(M, {
                                    height: 68,
                                    width: `800px`,
                                    y: (x?.y || 0) + 7211.97,
                                    children: /*#__PURE__*/ d(F, {
                                      className: `framer-tf2d6w-container`,
                                      nodeId: `Vh3HqzGow`,
                                      scopeId: `CtRSYVoCz`,
                                      children: /*#__PURE__*/ d(U, {
                                        EsEDiq4IK:
                                          W(`v127`, h) ??
                                          `免费额度用完后，可以通过 Stripe 订阅计费继续使用 Builder。你也可以根据团队使用情况扩展额度。`,
                                        height: `100%`,
                                        id: `Vh3HqzGow`,
                                        layoutId: `Vh3HqzGow`,
                                        oH02PZssK: W(`v126`, h) ?? `免费积分⽤完后，如何继续使⽤？`,
                                        style: { width: `100%` },
                                        variant: K(`PvenT0IVh`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ d(R, {
                                  breakpoint: k,
                                  overrides: {
                                    fUotBm3xr: { width: `300px`, y: (x?.y || 0) + 11851.17 },
                                  },
                                  children: /*#__PURE__*/ d(M, {
                                    height: 68,
                                    width: `800px`,
                                    y: (x?.y || 0) + 7279.97,
                                    children: /*#__PURE__*/ d(F, {
                                      className: `framer-wm8mh1-container`,
                                      nodeId: `tCTL6X3oA`,
                                      scopeId: `CtRSYVoCz`,
                                      children: /*#__PURE__*/ d(U, {
                                        EsEDiq4IK:
                                          W(`v129`, h) ??
                                          `可以。你可以直接选择业务应用模板，按自己的流程进行调整，也可以把模板作为 AI 生成应用的起点。`,
                                        height: `100%`,
                                        id: `tCTL6X3oA`,
                                        layoutId: `tCTL6X3oA`,
                                        oH02PZssK: W(`v128`, h) ?? `可以从现有模板开始吗？`,
                                        style: { width: `100%` },
                                        variant: K(`PvenT0IVh`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ f(m.div, {
                      className: `framer-1rt6zp3`,
                      layout: P,
                      children: [
                        /*#__PURE__*/ d(R, {
                          breakpoint: k,
                          overrides: {
                            fUotBm3xr: {
                              height: 554,
                              width: x?.width || `100vw`,
                              y: (x?.y || 0) + 11999.17,
                            },
                          },
                          children: /*#__PURE__*/ d(M, {
                            height: 381,
                            y: (x?.y || 0) + 7463.47,
                            children: /*#__PURE__*/ d(F, {
                              className: `framer-lws0re-container`,
                              nodeId: `QTPO6YHg6`,
                              scopeId: `CtRSYVoCz`,
                              children: /*#__PURE__*/ d(R, {
                                breakpoint: k,
                                overrides: {
                                  fUotBm3xr: {
                                    style: { height: `100%`, width: `100%` },
                                    variant: K(`UVjtmqtGi`),
                                  },
                                },
                                children: /*#__PURE__*/ d(qe, {
                                  AspCk9Iwt:
                                    W(`v131`, h) ??
                                    `构建团队真正可用的应用，无需编写代码，也无需维护背后的技术栈。`,
                                  DC7Tugabs: W(`v133`, h) ?? `将工作流转化为软件`,
                                  exikp92XZ: `https://tier0.cn/login`,
                                  F_yIFtkLx: W(`v134`, h) ?? `立即体验 Tier0`,
                                  Gl_ZpIhSp: W(`v130`, h) ?? `描述你的⼯作流程，上线真正可⽤的应⽤`,
                                  H7eKfGy5E: W(`v132`, h) ?? `免费开始构建`,
                                  height: `100%`,
                                  id: `QTPO6YHg6`,
                                  IoXK6IEoz: `https://tier0.cn/login`,
                                  layoutId: `QTPO6YHg6`,
                                  variant: K(`VAe_lTcMU`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                        L() &&
                          /*#__PURE__*/ d($n, {
                            animate: pr,
                            className: `framer-hlzcw5 hidden-7buxd7`,
                            "data-framer-appear-id": `hlzcw5`,
                            "data-framer-name": `point bg`,
                            initial: mr,
                            optimized: !0,
                            children: /*#__PURE__*/ d(M, {
                              children: /*#__PURE__*/ d(F, {
                                className: `framer-dx6dsa-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `kHj2sLlT4`,
                                scopeId: `CtRSYVoCz`,
                                children: /*#__PURE__*/ d(ye, {
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
                                  id: `kHj2sLlT4`,
                                  layoutId: `kHj2sLlT4`,
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
                    /*#__PURE__*/ d(m.div, {
                      className: `framer-c72hcs`,
                      "data-framer-name": `header`,
                      layout: P,
                      children: /*#__PURE__*/ d(R, {
                        breakpoint: k,
                        overrides: { fUotBm3xr: { y: (x?.y || 0) + 12553.17 } },
                        children: /*#__PURE__*/ d(M, {
                          height: 498,
                          width: x?.width || `100vw`,
                          y: (x?.y || 0) + 7877.97,
                          children: /*#__PURE__*/ d(F, {
                            className: `framer-jkwsn2-container`,
                            nodeId: `dggcOPVfo`,
                            scopeId: `CtRSYVoCz`,
                            children: /*#__PURE__*/ d(R, {
                              breakpoint: k,
                              overrides: { fUotBm3xr: { variant: K(`vXscR1iJC`) } },
                              children: /*#__PURE__*/ d(Oe, {
                                height: `100%`,
                                id: `dggcOPVfo`,
                                layoutId: `dggcOPVfo`,
                                style: { width: `100%` },
                                variant: K(`zev4Tv3qQ`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ d(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (yr = [
        `.framer-czRYb.framer-y63mcw, .framer-czRYb .framer-y63mcw { display: block; }`,
        `.framer-czRYb.framer-13honlf { align-content: center; align-items: center; background-color: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; }`,
        `.framer-czRYb .framer-tt9dlk-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 4; }`,
        `.framer-czRYb .framer-mkxwe1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 80px 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-kb8pl8, .framer-czRYb .framer-11ekqg2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-u4br28 { align-content: center; align-items: center; background-color: var(--token-f7c5411f-d63f-4f38-b2c7-f061f94134e0, #fafafa); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 100px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-11j87l8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: visible; padding: 48px 0px 60px 0px; position: relative; width: 1296px; }`,
        `.framer-czRYb .framer-20vkr0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 552px; }`,
        `.framer-czRYb .framer-qe68w1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-12ridt5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-14ytzy6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-3cp2rv, .framer-czRYb .framer-zxzkt5, .framer-czRYb .framer-10tijsy, .framer-czRYb .framer-1qyyj1v, .framer-czRYb .framer-ivqho1, .framer-czRYb .framer-131bifb, .framer-czRYb .framer-1aim15u, .framer-czRYb .framer-qo2o6t { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-czRYb .framer-gqb3kf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 529px; }`,
        `.framer-czRYb .framer-oht4gk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-czRYb .framer-1e2b9zv-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-czRYb .framer-120kh18-container { flex: none; height: 56px; position: relative; width: auto; }`,
        `.framer-czRYb .framer-va6zvy { --border-bottom-width: 0px; --border-color: var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, #73b200); --border-left-width: 2px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; background-color: rgba(178, 237, 29, 0.1); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px 0px 4px 10px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-1jxhf9e, .framer-czRYb .framer-pd9m9d, .framer-czRYb .framer-1jnxdz0, .framer-czRYb .framer-c2z1oq, .framer-czRYb .framer-fz8tmj, .framer-czRYb .framer-1hp7amj, .framer-czRYb .framer-1wzo7hj { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-czRYb .framer-1i3s9wx-container { flex: none; height: 445px; position: relative; width: 657px; }`,
        `.framer-czRYb .framer-xcl6gu { --border-bottom-width: 1px; --border-color: rgba(115, 178, 0, 0.35); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-1pmz38j, .framer-czRYb .framer-1g4e227, .framer-czRYb .framer-1k5b0q1, .framer-czRYb .framer-zlbkq2, .framer-czRYb .framer-179d33c, .framer-czRYb .framer-1j7wim9 { --border-bottom-width: 0px; --border-color: rgba(115, 178, 0, 0.35); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; background-color: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 40px; justify-content: center; padding: 0px 15px 0px 15px; position: relative; width: min-content; }`,
        `.framer-czRYb .framer-139keto, .framer-czRYb .framer-1josp92, .framer-czRYb .framer-4fc8b3, .framer-czRYb .framer-1egpxki, .framer-czRYb .framer-e5ejq0, .framer-czRYb .framer-7qfryp { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 18px; }`,
        `.framer-czRYb .framer-1hudzxv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); white-space: pre; width: auto; }`,
        `.framer-czRYb .framer-1uom7uk, .framer-czRYb .framer-1nj7o6x, .framer-czRYb .framer-716bmb, .framer-czRYb .framer-1frb76q, .framer-czRYb .framer-1kz3865, .framer-czRYb .framer-k13jpi, .framer-czRYb .framer-d14nn8, .framer-czRYb .framer-15g5t2n, .framer-czRYb .framer-1sb49ja, .framer-czRYb .framer-nbxt2u, .framer-czRYb .framer-mz59iv, .framer-czRYb .framer-1kc4adv, .framer-czRYb .framer-1pdhckp, .framer-czRYb .framer-1w4aibd, .framer-czRYb .framer-t7sda8, .framer-czRYb .framer-16i9jfz, .framer-czRYb .framer-109y4bi, .framer-czRYb .framer-1sy55ey, .framer-czRYb .framer-z1wzn4, .framer-czRYb .framer-16f5ugg, .framer-czRYb .framer-1wuaa0t, .framer-czRYb .framer-1488w5v, .framer-czRYb .framer-i5p8e9, .framer-czRYb .framer-3cxrd6, .framer-czRYb .framer-1j1sw3j, .framer-czRYb .framer-1aimd38, .framer-czRYb .framer-1avit47, .framer-czRYb .framer-vhrsju, .framer-czRYb .framer-10o2wsc, .framer-czRYb .framer-1n0mktn, .framer-czRYb .framer-tt5jwh, .framer-czRYb .framer-1t4n7v3, .framer-czRYb .framer-13ohzgb, .framer-czRYb .framer-cssi8i, .framer-czRYb .framer-keobhl, .framer-czRYb .framer-18qde1w { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-czRYb .framer-8mkryb, .framer-czRYb .framer-rvzgrs { flex: none; height: 14px; left: 2px; position: absolute; top: 2px; width: 14px; }`,
        `.framer-czRYb .framer-hfrhsw { flex: none; height: 15px; left: calc(50.00000000000002% - 13px / 2); position: absolute; top: calc(50.00000000000002% - 15px / 2); width: 13px; }`,
        `.framer-czRYb .framer-himhrp, .framer-czRYb .framer-ceeaoy { flex: none; height: 14px; left: calc(50.00000000000002% - 12px / 2); position: absolute; top: calc(50.00000000000002% - 14px / 2); width: 12px; }`,
        `.framer-czRYb .framer-1akngzt, .framer-czRYb .framer-4mk6u0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1280px; }`,
        `.framer-czRYb .framer-jyqakq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 173px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-kd0jxi, .framer-czRYb .framer-yt6l4v { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-czRYb .framer-gjz1av { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-czRYb .framer-16sybsy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 646px; }`,
        `.framer-czRYb .framer-yw45xw, .framer-czRYb .framer-1iws1rz { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-czRYb .framer-12566nf, .framer-czRYb .framer-10tti8d, .framer-czRYb .framer-13mvkbj, .framer-czRYb .framer-3rrq5n, .framer-czRYb .framer-1bzblgq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-czRYb .framer-9ur73k, .framer-czRYb .framer-d1idxs, .framer-czRYb .framer-1b5kau1, .framer-czRYb .framer-11pue5i, .framer-czRYb .framer-oa2n7y, .framer-czRYb .framer-zknejn { align-content: center; align-items: center; background-color: var(--token-0b09fdc4-bae8-43f3-bba4-8e8677e2b631, #f4f4f4); border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-czRYb .framer-1bninff, .framer-czRYb .framer-15y3036, .framer-czRYb .framer-6ojvg6, .framer-czRYb .framer-edutr0 { background-color: rgba(255, 255, 255, 0); flex: none; gap: 0px; height: 16px; overflow: hidden; position: relative; width: 16px; }`,
        `.framer-czRYb .framer-13vm9vs, .framer-czRYb .framer-grbvpg, .framer-czRYb .framer-1dqwreq { bottom: 1px; flex: none; left: 0px; position: absolute; right: 1px; top: 1px; }`,
        `.framer-czRYb .framer-1jm3iy1, .framer-czRYb .framer-1mcxcvl, .framer-czRYb .framer-ijjkww { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-3c3ep9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 290px; }`,
        `.framer-czRYb .framer-1wn36wq, .framer-czRYb .framer-xfo4vd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-7nxi5m { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-czRYb .framer-1ioh7on { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 306px; }`,
        `.framer-czRYb .framer-1d0ddgn, .framer-czRYb .framer-mz5s65 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 159px; }`,
        `.framer-czRYb .framer-1f0zqkv, .framer-czRYb .framer-1d7qlf2 { bottom: 2px; flex: none; left: 2px; position: absolute; right: 2px; top: 2px; }`,
        `.framer-czRYb .framer-79ydmz, .framer-czRYb .framer-180lj7e { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: auto; }`,
        `.framer-czRYb .framer-10fgdxq, .framer-czRYb .framer-8x6qbv { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 290px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-czRYb .framer-166jxq4 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: auto; }`,
        `.framer-czRYb .framer-11cfzml { background-color: rgba(255, 255, 255, 0); flex: none; gap: 0px; height: 15px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 15px; }`,
        `.framer-czRYb .framer-x1mqqj { bottom: 0px; flex: none; left: 1px; position: absolute; right: 0px; top: 1px; }`,
        `.framer-czRYb .framer-snthz8 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 280px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-czRYb .framer-mfj1eq { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: auto; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-czRYb .framer-pzwa0z { background-color: rgba(255, 255, 255, 0); flex: none; gap: 0px; height: 14px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 16px; }`,
        `.framer-czRYb .framer-yi2g58 { bottom: 0px; flex: none; left: 2px; position: absolute; right: 2px; top: 2px; }`,
        `.framer-czRYb .framer-1b32vfk, .framer-czRYb .framer-1ivjx0m, .framer-czRYb .framer-v9a1ai, .framer-czRYb .framer-2e25ok, .framer-czRYb .framer-f0g83g { flex: none; height: 3px; position: relative; width: 1282px; }`,
        `.framer-czRYb .framer-1bthqnq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1280px; }`,
        `.framer-czRYb .framer-8phe3z { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 604px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-czRYb .framer-11kjb34 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 34px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 604px; }`,
        `.framer-czRYb .framer-5xvwvs, .framer-czRYb .framer-c6ja0c, .framer-czRYb .framer-18r9ea0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-sbkh4r, .framer-czRYb .framer-ac5klt, .framer-czRYb .framer-bazma9 { aspect-ratio: 1 / 1; background-color: var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, #b2ed1d); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-czRYb .framer-114nr6f, .framer-czRYb .framer-18yaq97, .framer-czRYb .framer-s9m58y { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); white-space: pre; width: auto; }`,
        `.framer-czRYb .framer-iyjzws { --border-bottom-width: 1px; --border-color: #9e9e9e; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.04); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 627px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 1px; position: relative; width: 576px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-czRYb .framer-1jan2ha { --border-bottom-width: 1px; --border-color: #e3e6df; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; background-color: #b2ed1d; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 38px; justify-content: flex-start; overflow: visible; padding: 10px 14px 10px 14px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-wjlksc { background-color: #e85d5d; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; flex: none; gap: 0px; height: 8px; overflow: visible; position: relative; width: 8px; }`,
        `.framer-czRYb .framer-zn7n8x { background-color: #e6b325; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; flex: none; gap: 0px; height: 8px; overflow: visible; position: relative; width: 8px; }`,
        `.framer-czRYb .framer-1n03ke8 { background-color: #5cb85c; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; flex: none; gap: 0px; height: 8px; overflow: visible; position: relative; width: 8px; }`,
        `.framer-czRYb .framer-17z9jir { flex: 1 0 0px; gap: 0px; height: 17px; overflow: visible; position: relative; width: 1px; }`,
        `.framer-czRYb .framer-1nq2fjn { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: absolute; right: 14px; top: -1px; white-space: pre; width: auto; }`,
        `.framer-czRYb .framer-c3ib5g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; overflow: visible; padding: 25px 18px 4px 18px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-xsddql { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-1rkpeas { flex: none; height: 47px; overflow: visible; position: relative; width: 538px; }`,
        `.framer-czRYb .framer-1gkjz30 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4.406567573547363px; height: min-content; justify-content: flex-start; left: 0px; overflow: visible; padding: 0px 11.750846862792969px 0px 11.750846862792969px; position: absolute; top: 0px; width: 538px; }`,
        `.framer-czRYb .framer-1on0s0i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-1ikze5c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 11.750846862792969px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 305px; }`,
        `.framer-czRYb .framer-14i6kd { flex: none; height: 47px; overflow: visible; position: relative; width: 302px; }`,
        `.framer-czRYb .framer-gfrxc3 { flex: none; height: 47px; left: 0px; overflow: visible; position: absolute; top: 0px; width: 302px; }`,
        `.framer-czRYb .framer-gc2lv8 { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 53px; position: absolute; top: 0px; white-space: pre; width: auto; }`,
        `.framer-czRYb .framer-1rvcs6m { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 53px; position: absolute; top: 30px; white-space: pre; width: auto; }`,
        `.framer-czRYb .framer-4nx12e { align-content: center; align-items: center; aspect-ratio: 1 / 1; background-color: #e7f9b9; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 13.48005199432373px; height: auto; justify-content: center; left: 0px; overflow: visible; padding: 8.088030815124512px; position: absolute; top: 1px; width: 43px; }`,
        `.framer-czRYb .framer-15jap2x { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 22px; }`,
        `.framer-czRYb .framer-1r7l1tv { bottom: 5px; flex: none; left: 1px; position: absolute; right: 3px; top: 1px; }`,
        `.framer-czRYb .framer-89uvn7 { bottom: 15px; flex: none; left: 0px; position: absolute; right: 4px; top: 7px; }`,
        `.framer-czRYb .framer-iqwczy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8.813135147094727px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-czRYb .framer-1kogbx2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5.875423431396484px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-czRYb .framer-1cvphit { --border-bottom-width: 0.7344279289245605px; --border-color: #ebebeb; --border-left-width: 0.7344279289245605px; --border-right-width: 0.7344279289245605px; --border-style: solid; --border-top-width: 0.7344279289245605px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 27px; justify-content: center; overflow: visible; padding: 7.3442792892456055px; position: relative; width: 27px; }`,
        `.framer-czRYb .framer-1y4srof { flex: none; height: 12px; position: relative; width: 12px; }`,
        `.framer-czRYb .framer-wsw9sm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 468px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 539px; }`,
        `.framer-czRYb .framer-1w44zl7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 19px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-1dpejr1, .framer-czRYb .framer-eiivht { flex: none; height: 226px; overflow: visible; position: relative; width: 248px; }`,
        `.framer-czRYb .framer-1pwvdte, .framer-czRYb .framer-41zhz7, .framer-czRYb .framer-17kbfl7, .framer-czRYb .framer-1t4qyfg { --border-bottom-width: 0.7344279289245605px; --border-color: var(--token-27988b78-4da3-419a-9346-60402ee10374, rgba(195, 196, 197, 0.6)); --border-left-width: 0.7344279289245605px; --border-right-width: 0.7344279289245605px; --border-style: solid; --border-top-width: 0.7344279289245605px; align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 226px; justify-content: flex-start; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 0px; width: 249px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-czRYb .framer-aubd47, .framer-czRYb .framer-kh2zh7, .framer-czRYb .framer-ouqytz, .framer-czRYb .framer-7hu08i { background-color: #fafafa; flex: none; gap: 0px; height: 116px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-czRYb .framer-g7n07u { flex: none; height: 0px; left: 85px; overflow: visible; position: absolute; top: 40px; width: 0px; }`,
        `.framer-czRYb .framer-11tnf5f, .framer-czRYb .framer-1tec7h6, .framer-czRYb .framer-25ljii, .framer-czRYb .framer-wh4ry0 { flex: none; height: 110px; position: relative; width: 249px; }`,
        `.framer-czRYb .framer-1uwt5fa { --border-bottom-width: 0.36721405386924744px; --border-color: #e5e7eb; --border-left-width: 0.36721405386924744px; --border-right-width: 0.36721405386924744px; --border-style: solid; --border-top-width: 0.36721405386924744px; aspect-ratio: 1.9211989807578043 / 1; flex: none; height: auto; left: 25px; position: absolute; top: 6px; width: 205px; }`,
        `.framer-czRYb .framer-1157ere, .framer-czRYb .framer-xmm37d { flex: none; height: 226px; overflow: visible; position: relative; width: 249px; }`,
        `.framer-czRYb .framer-1hi0cyp { flex: none; height: 104px; left: 31px; position: absolute; top: 7px; width: 186px; }`,
        `.framer-czRYb .framer-1mjtufi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-1s9y4zi { --border-bottom-width: 0.36721405386924744px; --border-color: #e5e7eb; --border-left-width: 0.36721405386924744px; --border-right-width: 0.36721405386924744px; --border-style: solid; --border-top-width: 0.36721405386924744px; aspect-ratio: 2.1775652474505964 / 1; flex: none; height: auto; left: 19px; position: absolute; top: 8px; width: 217px; }`,
        `.framer-czRYb .framer-7c7kph { --border-bottom-width: 0.3672139644622803px; --border-color: #e5e7eb; --border-left-width: 0.3672139644622803px; --border-right-width: 0.3672139644622803px; --border-style: solid; --border-top-width: 0.3672139644622803px; flex: none; height: 102px; left: 24px; position: absolute; top: 7px; width: 197px; }`,
        `.framer-czRYb .framer-1ca2jua { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; scroll-margin-top: 75px; width: 1280px; }`,
        `.framer-czRYb .framer-hv8vci { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-bi2cg7, .framer-czRYb .framer-138psyk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-czRYb .framer-1iycwtq, .framer-czRYb .framer-nacggp { --framer-paragraph-spacing: 0px; flex: none; height: auto; opacity: 0.6; position: relative; white-space: pre; width: auto; }`,
        `.framer-czRYb .framer-12qj2m5 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 83px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-1gkw2f5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 17.07px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1280px; }`,
        `.framer-czRYb .framer-zfw34r, .framer-czRYb .framer-tuqm12 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1280px; }`,
        `.framer-czRYb .framer-g3dva5-container { align-self: stretch; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-czRYb .framer-l8ri9b-container, .framer-czRYb .framer-1uwtttx-container, .framer-czRYb .framer-1q55w5i-container, .framer-czRYb .framer-odmzbv-container, .framer-czRYb .framer-1v2b0s2-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-czRYb .framer-1oay9f6 { --border-bottom-width: 1px; --border-color: #050b14; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #fcfcfc; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 32px 0px 32px; position: relative; width: 1280px; }`,
        `.framer-czRYb .framer-kz14li { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 32px 0px 32px 0px; position: relative; width: 707px; }`,
        `.framer-czRYb .framer-1lvan2c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-152zvv1, .framer-czRYb .framer-12ie3tg, .framer-czRYb .framer-1cduqad { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 707px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-czRYb .framer-38tuz5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-czRYb .framer-1zezk3-container, .framer-czRYb .framer-1mgq5g1-container { flex: none; height: 40px; position: relative; width: 120px; }`,
        `.framer-czRYb .framer-1fub4ui { --border-bottom-width: 1px; --border-color: #222222; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: 210px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: 200px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-czRYb .framer-14wwo6b { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 160px; }`,
        `.framer-czRYb .framer-5k2ekw { aspect-ratio: 1.305774278215223 / 1; flex: 1 0 0px; height: auto; overflow: visible; position: relative; width: 1px; }`,
        `.framer-czRYb .framer-167aaow { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-1qojbhl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1280px; }`,
        `.framer-czRYb .framer-1x1a310 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-ioytk4, .framer-czRYb .framer-18paa14 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 1007px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-czRYb .framer-1cxz2b { --border-bottom-width: 1px; --border-color: #73b200; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #fcfcfc; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1280px; }`,
        `.framer-czRYb .framer-1d5nxkt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 36px 48px 36px 48px; position: relative; width: min-content; }`,
        `.framer-czRYb .framer-k2chmc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-czRYb .framer-1ofv9gy { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 405px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-czRYb .framer-v7ognf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-czRYb .framer-3c2tmh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-czRYb .framer-11cgtft { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 419px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-czRYb .framer-uwqfn4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-czRYb .framer-sazd1q, .framer-czRYb .framer-1c9rxt6, .framer-czRYb .framer-qa3vzk { --border-bottom-width: 0px; --border-color: #73b200; --border-left-width: 1px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 8px 15px 8px 15px; position: relative; width: min-content; }`,
        `.framer-czRYb .framer-1ofgx66, .framer-czRYb .framer-9mrdoj, .framer-czRYb .framer-1nt6aet { background-color: rgba(255, 255, 255, 0); flex: none; gap: 0px; height: 16px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 16px; }`,
        `.framer-czRYb .framer-l1wywe { bottom: 1px; flex: none; left: 0px; position: absolute; right: 0px; top: 1px; }`,
        `.framer-czRYb .framer-1ylrxl2 { bottom: 3px; flex: none; left: 1px; position: absolute; right: 1px; top: 3px; }`,
        `.framer-czRYb .framer-24zg42 { bottom: 1px; flex: none; left: 3px; position: absolute; right: 3px; top: 1px; }`,
        `.framer-czRYb .framer-xh7us8 { align-content: center; align-items: center; background-color: #cbf368; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-czRYb .framer-1fcq3z9 { flex: none; height: 385px; position: relative; width: 645px; }`,
        `.framer-czRYb .framer-1jpyljv { background-color: var(--token-f7c5411f-d63f-4f38-b2c7-f061f94134e0, #fafafa); flex: none; height: 600px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-czRYb .framer-ghoody { bottom: -648px; flex: none; left: calc(50.416666666666686% - 1351px / 2); opacity: 0.5; overflow: visible; position: absolute; top: -103px; width: 1351px; }`,
        `.framer-czRYb .framer-mw3yzx { --border-bottom-width: 2.503262996673584px; --border-color: rgba(115, 178, 0, 0.05); --border-left-width: 2.503262996673584px; --border-right-width: 2.503262996673584px; --border-style: dashed; --border-top-width: 2.503262996673584px; background-color: rgba(178, 237, 29, 0.05); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 792px; left: calc(49.75010652893141% - 792.2429809570312px / 2); position: absolute; top: calc(49.93768418933561% - 792.2429809570312px / 2); width: 792px; }`,
        `.framer-czRYb .framer-1rww07t { flex: none; gap: 0px; height: 1351px; left: calc(50% - 1351.0029296875px / 2); opacity: 0.9; overflow: visible; position: absolute; top: calc(50% - 1351.0029296875px / 2); width: 1351px; }`,
        `.framer-czRYb .framer-4qjnwf { flex: none; height: 1351px; left: 0px; opacity: 0.3; overflow: visible; position: absolute; top: 0px; width: 1351px; }`,
        `.framer-czRYb .framer-xnsfcr { --border-bottom-width: 9.62336540222168px; --border-color: #ffffff; --border-left-width: 9.62336540222168px; --border-right-width: 9.62336540222168px; --border-style: solid; --border-top-width: 9.62336540222168px; aspect-ratio: 1 / 1; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: auto; left: 0px; opacity: 0.3; position: absolute; right: 0px; top: 0px; }`,
        `.framer-czRYb .framer-toione { --border-bottom-width: 9.62336540222168px; --border-color: #ffffff; --border-left-width: 9.62336540222168px; --border-right-width: 9.62336540222168px; --border-style: solid; --border-top-width: 9.62336540222168px; aspect-ratio: 1 / 1; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: auto; left: 68px; opacity: 0.5; position: absolute; right: 68px; top: 68px; }`,
        `.framer-czRYb .framer-1yjt5ja { flex: none; height: 1061px; left: 145px; opacity: 0.4; overflow: visible; position: absolute; top: 145px; width: 1061px; }`,
        `.framer-czRYb .framer-1f8tfv6 { --border-bottom-width: 7.21752405166626px; --border-color: #ffffff; --border-left-width: 7.21752405166626px; --border-right-width: 7.21752405166626px; --border-style: solid; --border-top-width: 7.21752405166626px; aspect-ratio: 1 / 1; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: auto; left: 0px; opacity: 0.7; position: absolute; right: 0px; top: 0px; }`,
        `.framer-czRYb .framer-lmghde { --border-bottom-width: 7.21752405166626px; --border-color: #ffffff; --border-left-width: 7.21752405166626px; --border-right-width: 7.21752405166626px; --border-style: solid; --border-top-width: 7.21752405166626px; aspect-ratio: 1 / 1; background-color: rgba(178, 237, 29, 0.05); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: auto; left: 67px; opacity: 0.9; position: absolute; right: 67px; top: 67px; }`,
        `.framer-czRYb .framer-198yk3g { --border-bottom-width: 7.21752405166626px; --border-color: #ffffff; --border-left-width: 7.21752405166626px; --border-right-width: 7.21752405166626px; --border-style: solid; --border-top-width: 7.21752405166626px; aspect-ratio: 1 / 1; background-color: rgba(178, 237, 29, 0.1); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: auto; left: 134px; position: absolute; right: 134px; top: 134px; }`,
        `.framer-czRYb .framer-1pgzv5e { flex: none; height: 653px; left: 349px; opacity: 0.4; overflow: visible; position: absolute; top: 349px; width: 653px; }`,
        `.framer-czRYb .framer-fuq1l3 { --border-bottom-width: 4.81168270111084px; --border-color: #ffffff; --border-left-width: 4.81168270111084px; --border-right-width: 4.81168270111084px; --border-style: solid; --border-top-width: 4.81168270111084px; aspect-ratio: 1 / 1; background-color: rgba(178, 237, 29, 0.2); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: auto; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-czRYb .framer-c32ok1 { --border-bottom-width: 4.81168270111084px; --border-color: #ffffff; --border-left-width: 4.81168270111084px; --border-right-width: 4.81168270111084px; --border-style: solid; --border-top-width: 4.81168270111084px; aspect-ratio: 1 / 1; background-color: rgba(178, 237, 29, 0.2); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: auto; left: 67px; position: absolute; right: 67px; top: 50%; transform: translateY(-50%); }`,
        `.framer-czRYb .framer-1ksgfey { --border-bottom-width: 4.81168270111084px; --border-color: #ffffff; --border-left-width: 4.81168270111084px; --border-right-width: 4.81168270111084px; --border-style: solid; --border-top-width: 4.81168270111084px; aspect-ratio: 1 / 1; background-color: rgba(178, 237, 29, 0.2); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: auto; left: 133px; position: absolute; right: 133px; top: 133px; }`,
        `.framer-czRYb .framer-1fpw10q { --border-bottom-width: 4.81168270111084px; --border-color: #ffffff; --border-left-width: 4.81168270111084px; --border-right-width: 4.81168270111084px; --border-style: solid; --border-top-width: 4.81168270111084px; aspect-ratio: 1 / 1; background-color: rgba(178, 237, 29, 0.3); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: auto; left: 184px; position: absolute; right: 184px; top: 184px; }`,
        `.framer-czRYb .framer-srgbgv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; right: 0px; top: 24px; }`,
        `.framer-czRYb .framer-1wyccx2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 0px; position: relative; width: 1280px; }`,
        `.framer-czRYb .framer-1u042zr, .framer-czRYb .framer-cq0ywr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-4qaxqk { --border-bottom-width: 1px; --border-color: rgba(138, 181, 45, 0.16); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(138, 181, 45, 0.08); border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 28px; justify-content: flex-start; overflow: visible; padding: 6px 12px 6px 12px; position: relative; width: min-content; }`,
        `.framer-czRYb .framer-wwd9ll { flex: none; height: 559px; overflow: visible; position: relative; width: 899px; }`,
        `.framer-czRYb .framer-nji71a { --border-bottom-width: 1.2003669738769531px; --border-color: #73b200; --border-left-width: 1.2003669738769531px; --border-right-width: 1.2003669738769531px; --border-style: solid; --border-top-width: 1.2003669738769531px; align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9.602935791015625px; height: min-content; justify-content: flex-start; left: 51%; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 0.8685474px 0px; position: absolute; top: 51%; transform: translate(-50%, -50%); width: 244px; }`,
        `.framer-czRYb .framer-1c5rukk { align-content: center; align-items: center; background-color: #d8f68e; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6.001834392547607px; height: min-content; justify-content: center; overflow: visible; padding: 20px 4.8014678955078125px 20px 4.8014678955078125px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-czRYb .framer-1hdi119 { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 36px; }`,
        `.framer-czRYb .framer-ihvcky { bottom: 5px; flex: none; left: 4px; position: absolute; right: 5px; top: 4px; }`,
        `.framer-czRYb .framer-h5rqq0 { flex: none; height: 89px; left: 330px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 54px; width: 94px; }`,
        `.framer-czRYb .framer-15fzd77 { --border-bottom-width: 1.294235110282898px; --border-color: #73b200; --border-left-width: 1.294235110282898px; --border-right-width: 1.294235110282898px; --border-style: solid; --border-top-width: 1.294235110282898px; background-color: #ffffff; flex: none; height: 89px; left: calc(50.00000000000002% - 94px / 2); position: absolute; top: calc(49.43820224719103% - 89px / 2); width: 94px; }`,
        `.framer-czRYb .framer-1m0bde9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 53px; justify-content: flex-start; left: calc(47.87234042553194% - 33px / 2); overflow: visible; padding: 0px; position: absolute; top: calc(50.561797752809014% - 53px / 2); width: 33px; }`,
        `.framer-czRYb .framer-gj4f3j, .framer-czRYb .framer-vkdytx, .framer-czRYb .framer-1ijftbm { flex: none; gap: 0px; height: 31px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 31px; }`,
        `.framer-czRYb .framer-1cdhbk { bottom: 2px; flex: none; left: 2px; position: absolute; right: 0px; top: 2px; }`,
        `.framer-czRYb .framer-17r77ly { aspect-ratio: 1.0526036580403646 / 1; flex: none; height: auto; left: 160px; overflow: visible; position: absolute; top: 122px; width: 94px; }`,
        `.framer-czRYb .framer-1jq252t { --border-bottom-width: 1.294235110282898px; --border-color: #73b200; --border-left-width: 1.294235110282898px; --border-right-width: 1.294235110282898px; --border-style: solid; --border-top-width: 1.294235110282898px; aspect-ratio: 1.0526057995723461 / 1; background-color: #ffffff; flex: none; height: auto; left: 0px; position: absolute; top: 0px; width: 95px; }`,
        `.framer-czRYb .framer-1ue1yx3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 60px; justify-content: flex-start; left: 26px; overflow: visible; padding: 0px; position: absolute; top: 15px; width: 42px; }`,
        `.framer-czRYb .framer-5i4yjo, .framer-czRYb .framer-1x28fh4 { flex: none; gap: 0px; height: 31px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 30px; }`,
        `.framer-czRYb .framer-7ndb39, .framer-czRYb .framer-12grtrp { bottom: 2px; flex: none; left: 1px; position: absolute; right: 2px; top: 2px; }`,
        `.framer-czRYb .framer-o2hhum { aspect-ratio: 1.0526314629448785 / 1; flex: none; height: auto; left: 655px; overflow: visible; position: absolute; top: 123px; width: 94px; }`,
        `.framer-czRYb .framer-1rpu3uy, .framer-czRYb .framer-5hwd2o, .framer-czRYb .framer-fgo7f6 { --border-bottom-width: 1.294235110282898px; --border-color: #73b200; --border-left-width: 1.294235110282898px; --border-right-width: 1.294235110282898px; --border-style: solid; --border-top-width: 1.294235110282898px; aspect-ratio: 1.0526314629448785 / 1; background-color: #ffffff; flex: none; height: auto; left: 0px; position: absolute; top: 0px; width: 95px; }`,
        `.framer-czRYb .framer-1q3bmiy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 53px; justify-content: flex-start; left: 26px; overflow: visible; padding: 0px; position: absolute; top: 18px; width: 43px; }`,
        `.framer-czRYb .framer-1jexuii { aspect-ratio: 1.0526314629448785 / 1; bottom: 204px; flex: none; height: auto; left: 77px; overflow: visible; position: absolute; width: 94px; }`,
        `.framer-czRYb .framer-1d6o8o6, .framer-czRYb .framer-17w4jgy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 53px; justify-content: flex-start; left: 27px; overflow: visible; padding: 0px; position: absolute; top: 18px; width: 41px; }`,
        `.framer-czRYb .framer-1w18z4s { bottom: 2px; flex: none; left: 4px; position: absolute; right: 4px; top: 2px; }`,
        `.framer-czRYb .framer-14279ya { aspect-ratio: 1.0526314629448785 / 1; bottom: 204px; flex: none; height: auto; overflow: visible; position: absolute; right: 63px; width: 94px; }`,
        `.framer-czRYb .framer-irke6z { bottom: 2px; flex: none; left: 4px; position: absolute; right: 3px; top: 2px; }`,
        `.framer-czRYb .framer-1o7k92n { aspect-ratio: 1.0526314629448785 / 1; flex: none; height: auto; left: 488px; overflow: visible; position: absolute; top: 54px; width: 95px; }`,
        `.framer-czRYb .framer-o5m8j3 { --border-bottom-width: 1.229490041732788px; --border-color: #73b200; --border-left-width: 1.229490041732788px; --border-right-width: 1.229490041732788px; --border-style: solid; --border-top-width: 1.229490041732788px; aspect-ratio: 1.0526314629448785 / 1; background-color: #ffffff; bottom: 0px; flex: none; left: 0px; position: absolute; top: 0px; width: auto; }`,
        `.framer-czRYb .framer-1xxvo2n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 51%; overflow: visible; padding: 0px; position: absolute; top: 48%; transform: translate(-50%, -50%); width: 39px; }`,
        `.framer-czRYb .framer-1c3i5oz { flex: none; gap: 0px; height: 30px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 28px; }`,
        `.framer-czRYb .framer-nv8agb { flex: none; height: 86px; left: 529px; position: absolute; top: 143px; width: 14px; }`,
        `.framer-czRYb .framer-875bsj { bottom: 229px; flex: none; height: 14px; left: 580px; position: absolute; width: 160px; }`,
        `.framer-czRYb .framer-1dcnsz9 { aspect-ratio: 1.7731958762886597 / 1; flex: none; height: auto; left: 575px; position: absolute; top: 46%; transform: translateY(-50%); width: 142px; }`,
        `.framer-czRYb .framer-1sitvwa { bottom: 229px; flex: none; height: 15px; left: 172px; position: absolute; width: 160px; }`,
        `.framer-czRYb .framer-grr0h7 { flex: none; height: 80px; left: 194px; position: absolute; top: calc(45.796064400715586% - 80px / 2); width: 140px; }`,
        `.framer-czRYb .framer-hebbft, .framer-czRYb .framer-12or1my { flex: none; height: 86px; left: 370px; position: absolute; top: 143px; width: 14px; }`,
        `.framer-czRYb .framer-1wt8dhf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1280px; }`,
        `.framer-czRYb .framer-19du2uw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 115px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1280px; }`,
        `.framer-czRYb .framer-lnbq1t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-czRYb .framer-rn0vfm-container, .framer-czRYb .framer-bwht2f-container, .framer-czRYb .framer-c8l8te-container, .framer-czRYb .framer-gr6mmt-container, .framer-czRYb .framer-g4moji-container, .framer-czRYb .framer-13sv47u-container, .framer-czRYb .framer-tf2d6w-container, .framer-czRYb .framer-wm8mh1-container { flex: none; height: auto; position: relative; width: 800px; }`,
        `.framer-czRYb .framer-1rt6zp3 { background-color: var(--token-7122224f-85bb-46cf-a093-189b897a9de6, #fafaf9); flex: none; height: 450px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-czRYb .framer-lws0re-container { flex: none; height: auto; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: auto; z-index: 2; }`,
        `.framer-czRYb .framer-hlzcw5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 450px; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; right: 0px; top: calc(50.00000000000002% - 450px / 2); will-change: var(--framer-will-change-effect-override, transform); z-index: 0; }`,
        `.framer-czRYb .framer-dx6dsa-container { flex: 1 0 0px; height: 450px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-czRYb .framer-c72hcs { align-content: center; align-items: center; background-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-czRYb .framer-jkwsn2-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...Fe,
        ...Ye,
        ...Se,
        ...je,
        ...qt,
        ...Ue,
        ...$e,
        ...In,
        ...st,
        `.framer-czRYb[data-border="true"]::after, .framer-czRYb [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (max-width: 1439.98px) { .framer-czRYb.framer-13honlf { width: 390px; } .framer-czRYb .framer-mkxwe1 { gap: 50px; } .framer-czRYb .framer-11j87l8 { flex-direction: column; gap: 40px; padding: 48px 0px 28px 0px; width: 310px; } .framer-czRYb .framer-20vkr0 { align-content: center; align-items: center; gap: 18px; width: 100%; } .framer-czRYb .framer-12ridt5 { gap: 16px; } .framer-czRYb .framer-gqb3kf { align-content: center; align-items: center; gap: 8px; width: 309px; } .framer-czRYb .framer-oht4gk, .framer-czRYb .framer-38tuz5 { flex-direction: column; } .framer-czRYb .framer-1e2b9zv-container, .framer-czRYb .framer-120kh18-container { height: 46px; } .framer-czRYb .framer-va6zvy { padding: 4px 0px 4px 9px; } .framer-czRYb .framer-1i3s9wx-container { aspect-ratio: 1.4764044943820225 / 1; height: auto; width: 311px; } .framer-czRYb .framer-1akngzt, .framer-czRYb .framer-4mk6u0, .framer-czRYb .framer-1ca2jua { gap: 20px; width: 310px; } .framer-czRYb .framer-jyqakq { align-content: center; align-items: center; flex-direction: column; gap: 23px; width: 310px; } .framer-czRYb .framer-kd0jxi, .framer-czRYb .framer-yw45xw, .framer-czRYb .framer-1iws1rz, .framer-czRYb .framer-yt6l4v, .framer-czRYb .framer-l8ri9b-container, .framer-czRYb .framer-1uwtttx-container, .framer-czRYb .framer-1q55w5i-container, .framer-czRYb .framer-odmzbv-container, .framer-czRYb .framer-1v2b0s2-container { flex: none; width: 100%; } .framer-czRYb .framer-d14nn8, .framer-czRYb .framer-t7sda8, .framer-czRYb .framer-vhrsju { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-czRYb .framer-gjz1av { align-content: flex-start; align-items: flex-start; gap: 26px; width: 100%; } .framer-czRYb .framer-16sybsy { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 26px; width: 100%; } .framer-czRYb .framer-7nxi5m { flex-direction: column; gap: 26px; } .framer-czRYb .framer-166jxq4 { align-self: unset; flex-direction: column; width: 100%; } .framer-czRYb .framer-mfj1eq { align-self: unset; flex: 1 0 0px; height: 1px; } .framer-czRYb .framer-1b32vfk, .framer-czRYb .framer-1ivjx0m, .framer-czRYb .framer-v9a1ai, .framer-czRYb .framer-2e25ok, .framer-czRYb .framer-f0g83g { height: 1px; width: 300px; } .framer-czRYb .framer-1bthqnq { align-content: center; align-items: center; flex-direction: column; gap: 25px; width: 310px; } .framer-czRYb .framer-8phe3z, .framer-czRYb .framer-11kjb34, .framer-czRYb .framer-1gkw2f5, .framer-czRYb .framer-152zvv1, .framer-czRYb .framer-12ie3tg, .framer-czRYb .framer-1cduqad, .framer-czRYb .framer-ioytk4, .framer-czRYb .framer-k2chmc, .framer-czRYb .framer-11cgtft, .framer-czRYb .framer-xh7us8, .framer-czRYb .framer-18paa14, .framer-czRYb .framer-19du2uw, .framer-czRYb .framer-rn0vfm-container, .framer-czRYb .framer-bwht2f-container, .framer-czRYb .framer-c8l8te-container, .framer-czRYb .framer-gr6mmt-container, .framer-czRYb .framer-g4moji-container, .framer-czRYb .framer-13sv47u-container, .framer-czRYb .framer-tf2d6w-container, .framer-czRYb .framer-wm8mh1-container { width: 100%; } .framer-czRYb .framer-iyjzws { --border-bottom-width: 0.2px; --border-color: rgba(158, 158, 158, 0.6); --border-left-width: 0.2px; --border-right-width: 0.2px; --border-top-width: 0.2px; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; box-shadow: 0px 1.08px 8px 0px rgba(0, 0, 0, 0.04); height: 1094px; padding: 0.54px; width: 310px; } .framer-czRYb .framer-1jan2ha { --border-bottom-width: 0.54px; gap: 4.31px; height: 20px; padding: 5.38px 7.53px 5.38px 7.53px; } .framer-czRYb .framer-wjlksc, .framer-czRYb .framer-zn7n8x, .framer-czRYb .framer-1n03ke8 { border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; height: 4px; width: 4px; } .framer-czRYb .framer-17z9jir { height: 9px; } .framer-czRYb .framer-1nq2fjn { right: 7px; top: -1px; } .framer-czRYb .framer-c3ib5g { gap: 7.53px; padding: 13.45px 9.69px 2.15px 9.69px; } .framer-czRYb .framer-xsddql { gap: 11.84px; } .framer-czRYb .framer-1rkpeas { height: 25px; width: 290px; } .framer-czRYb .framer-1gkjz30 { gap: 2.37px; padding: 0px 6.32px 0px 6.32px; width: 290px; } .framer-czRYb .framer-1ikze5c { gap: 6.32px; width: 164px; } .framer-czRYb .framer-14i6kd, .framer-czRYb .framer-gfrxc3 { height: 25px; width: 163px; } .framer-czRYb .framer-gc2lv8 { left: 29px; } .framer-czRYb .framer-1rvcs6m { left: 29px; top: 16px; } .framer-czRYb .framer-4nx12e { border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; gap: 7.25px; padding: 4.35px; top: 1px; width: 23px; } .framer-czRYb .framer-15jap2x { width: 12px; } .framer-czRYb .framer-1r7l1tv { bottom: 3px; left: 0px; right: 2px; top: 1px; } .framer-czRYb .framer-89uvn7 { bottom: 8px; left: 0px; right: 2px; top: 4px; } .framer-czRYb .framer-iqwczy { gap: 4.74px; } .framer-czRYb .framer-1kogbx2 { gap: 3.16px; } .framer-czRYb .framer-1cvphit { --border-bottom-width: 0.4px; --border-left-width: 0.4px; --border-right-width: 0.4px; --border-top-width: 0.4px; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; height: 15px; padding: 3.95px; width: 15px; } .framer-czRYb .framer-1y4srof { height: 6px; width: 6px; } .framer-czRYb .framer-wsw9sm { gap: 12px; height: min-content; width: 290px; } .framer-czRYb .framer-1w44zl7 { flex-direction: column; gap: 10.23px; } .framer-czRYb .framer-1dpejr1, .framer-czRYb .framer-eiivht { height: 243px; width: 267px; } .framer-czRYb .framer-1pwvdte, .framer-czRYb .framer-41zhz7, .framer-czRYb .framer-17kbfl7, .framer-czRYb .framer-1t4qyfg { --border-bottom-width: 0.8px; --border-left-width: 0.8px; --border-right-width: 0.8px; --border-top-width: 0.8px; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; height: 243px; width: 268px; } .framer-czRYb .framer-aubd47, .framer-czRYb .framer-kh2zh7, .framer-czRYb .framer-ouqytz, .framer-czRYb .framer-7hu08i { height: 125px; } .framer-czRYb .framer-g7n07u { left: 92px; top: 43px; } .framer-czRYb .framer-11tnf5f, .framer-czRYb .framer-1tec7h6, .framer-czRYb .framer-25ljii, .framer-czRYb .framer-wh4ry0 { height: 118px; width: 268px; } .framer-czRYb .framer-1uwt5fa { --border-bottom-width: 0.4px; --border-left-width: 0.4px; --border-right-width: 0.4px; --border-top-width: 0.4px; left: 27px; top: 6px; width: 221px; } .framer-czRYb .framer-1157ere, .framer-czRYb .framer-xmm37d { height: 243px; width: 268px; } .framer-czRYb .framer-1hi0cyp { height: 112px; left: 34px; top: 7px; width: 201px; } .framer-czRYb .framer-1mjtufi { flex-direction: column; gap: 10.76px; } .framer-czRYb .framer-1s9y4zi { --border-bottom-width: 0.4px; --border-left-width: 0.4px; --border-right-width: 0.4px; --border-top-width: 0.4px; left: 20px; top: 9px; width: 233px; } .framer-czRYb .framer-7c7kph { --border-bottom-width: 0.4px; --border-left-width: 0.4px; --border-right-width: 0.4px; --border-top-width: 0.4px; height: 110px; left: 26px; top: 8px; width: 212px; } .framer-czRYb .framer-hv8vci { align-content: center; align-items: center; gap: 10px; } .framer-czRYb .framer-11ekqg2 { gap: 8px; } .framer-czRYb .framer-bi2cg7 { flex-direction: column; width: 100%; } .framer-czRYb .framer-1iycwtq, .framer-czRYb .framer-nacggp { opacity: unset; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-czRYb .framer-zfw34r, .framer-czRYb .framer-tuqm12 { flex-direction: column; width: 310px; } .framer-czRYb .framer-g3dva5-container { align-self: unset; flex: none; width: 100%; } .framer-czRYb .framer-1oay9f6 { flex-direction: column; gap: 0px; height: 755px; justify-content: center; width: 310px; } .framer-czRYb .framer-kz14li { align-content: center; align-items: center; order: 0; width: 100%; } .framer-czRYb .framer-5k2ekw { flex: none; order: 2; width: 100%; } .framer-czRYb .framer-167aaow { width: 310px; } .framer-czRYb .framer-1qojbhl { align-content: center; align-items: center; gap: 10px; width: 100%; } .framer-czRYb .framer-1cxz2b { flex-direction: column; gap: 24px; width: 100%; } .framer-czRYb .framer-1d5nxkt { padding: 16px 48px 36px 48px; width: 100%; } .framer-czRYb .framer-v7ognf { align-content: center; align-items: center; flex-direction: column; gap: 10px; order: 1; width: 100%; } .framer-czRYb .framer-1wuaa0t { order: 0; } .framer-czRYb .framer-1488w5v { order: 2; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-czRYb .framer-1wzo7hj { flex: none; order: 1; width: 100%; } .framer-czRYb .framer-3c2tmh { align-content: center; align-items: center; width: 100%; } .framer-czRYb .framer-uwqfn4 { flex-direction: column; gap: 6px; } .framer-czRYb .framer-1aimd38, .framer-czRYb .framer-18qde1w { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; } .framer-czRYb .framer-1fcq3z9 { aspect-ratio: 1.6753246753246753 / 1; height: auto; width: 100%; } .framer-czRYb .framer-1jpyljv { height: 498px; } .framer-czRYb .framer-ghoody { bottom: -729px; left: -479px; right: -482px; top: -124px; width: unset; } .framer-czRYb .framer-srgbgv { top: 3px; } .framer-czRYb .framer-1wyccx2 { overflow: visible; width: 310px; } .framer-czRYb .framer-1u042zr { gap: 10px; } .framer-czRYb .framer-wwd9ll { height: 257px; width: 413px; } .framer-czRYb .framer-nji71a { --border-bottom-width: 0.55px; --border-left-width: 0.55px; --border-right-width: 0.55px; --border-top-width: 0.55px; gap: 4.41px; padding: 0px 0px 0.4px 0px; width: 112px; } .framer-czRYb .framer-1c5rukk { gap: 2.76px; padding: 9.2px 2.21px 9.2px 2.21px; } .framer-czRYb .framer-1hdi119 { width: 16px; } .framer-czRYb .framer-ihvcky { bottom: 2px; left: 2px; right: 2px; top: 2px; } .framer-czRYb .framer-h5rqq0 { height: 41px; left: 152px; top: 25px; width: 43px; } .framer-czRYb .framer-15fzd77 { --border-bottom-width: 0.6px; --border-left-width: 0.6px; --border-right-width: 0.6px; --border-top-width: 0.6px; height: 41px; left: calc(50.00000000000002% - 43.23px / 2); top: calc(49.43820224719103% - 40.93px / 2); width: 43px; } .framer-czRYb .framer-1m0bde9 { height: 24px; left: calc(47.87234042553194% - 15.17px / 2); top: calc(50.561797752809014% - 24.37px / 2); width: 15px; } .framer-czRYb .framer-gj4f3j, .framer-czRYb .framer-5i4yjo, .framer-czRYb .framer-1x28fh4, .framer-czRYb .framer-vkdytx, .framer-czRYb .framer-1ijftbm { height: 14px; width: 14px; } .framer-czRYb .framer-1cdhbk { bottom: 1px; left: 1px; right: 0px; top: 1px; } .framer-czRYb .framer-17r77ly { left: 74px; top: 56px; width: 43px; } .framer-czRYb .framer-1jq252t, .framer-czRYb .framer-1rpu3uy, .framer-czRYb .framer-5hwd2o, .framer-czRYb .framer-fgo7f6 { --border-bottom-width: 0.6px; --border-left-width: 0.6px; --border-right-width: 0.6px; --border-top-width: 0.6px; width: 44px; } .framer-czRYb .framer-1ue1yx3 { height: 27px; left: 12px; top: 7px; width: 19px; } .framer-czRYb .framer-7ndb39, .framer-czRYb .framer-12grtrp, .framer-czRYb .framer-1d7qlf2 { bottom: 1px; left: 1px; right: 1px; top: 1px; } .framer-czRYb .framer-o2hhum { left: 301px; top: 57px; width: 43px; } .framer-czRYb .framer-1q3bmiy { height: 24px; left: 12px; top: 8px; width: 20px; } .framer-czRYb .framer-1jexuii { bottom: 94px; left: 35px; width: 43px; } .framer-czRYb .framer-1d6o8o6, .framer-czRYb .framer-17w4jgy { height: 24px; left: 12px; top: 8px; width: 19px; } .framer-czRYb .framer-1w18z4s, .framer-czRYb .framer-irke6z { bottom: 1px; left: 2px; right: 2px; top: 1px; } .framer-czRYb .framer-14279ya { bottom: 94px; right: 29px; width: 43px; } .framer-czRYb .framer-1o7k92n { left: 224px; top: 25px; width: 44px; } .framer-czRYb .framer-o5m8j3 { --border-bottom-width: 0.56px; --border-left-width: 0.56px; --border-right-width: 0.56px; --border-top-width: 0.56px; left: 0px; } .framer-czRYb .framer-1xxvo2n { width: 18px; } .framer-czRYb .framer-1c3i5oz { height: 14px; width: 13px; } .framer-czRYb .framer-nv8agb { height: 39px; left: 243px; top: 66px; width: 7px; } .framer-czRYb .framer-875bsj { bottom: 105px; height: 7px; left: 267px; width: 73px; } .framer-czRYb .framer-1dcnsz9 { left: 264px; width: 65px; } .framer-czRYb .framer-1sitvwa { bottom: 105px; height: 7px; left: 79px; width: 74px; } .framer-czRYb .framer-grr0h7 { height: 37px; left: 89px; top: calc(45.796064400715586% - 36.79px / 2); width: 64px; } .framer-czRYb .framer-hebbft, .framer-czRYb .framer-12or1my { height: 40px; left: 170px; top: 66px; width: 6px; } .framer-czRYb .framer-1wt8dhf { width: 300px; } .framer-czRYb .framer-1rt6zp3 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; } .framer-czRYb .framer-lws0re-container { height: 554px; left: unset; position: relative; top: unset; transform: unset; width: 100%; }}`,
      ]),
      ($ = k(vr, yr, `framer-czRYb`)),
      ($.displayName = `Pricing`),
      ($.defaultProps = { height: 7249, width: 1440 }),
      P(
        $,
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
                weight: `300`,
              },
              {
                cssFamilyName: `IBM Plex Mono`,
                openType: !0,
                source: `google`,
                style: `normal`,
                uiFamilyName: `IBM Plex Mono`,
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
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
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
          ...Un,
          ...Wn,
          ...Gn,
          ...qn,
          ...Jn,
          ...Yn,
          ...Xn,
          ...Zn,
          ...Qn,
          ...er,
          ...S(Ie),
          ...S(Xe),
          ...S(we),
          ...S(Me),
          ...S(Kt),
          ...S(We),
          ...S(et),
          ...S(Fn),
          ...S(ct),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) =>
          de(
            [
              () => C(ke, {}, t),
              () => C(be, {}, t),
              () => C(H, {}, t),
              () => C(V, {}, t),
              () => C(B, {}, t),
              () => C(U, {}, t),
              () => C(qe, {}, t),
              () => C(Oe, {}, t),
            ],
            t
          ),
      }),
      (br = {
        exports: {
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerCtRSYVoCz`,
            slots: [],
            annotations: {
              framerAutoSizeImages: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerIntrinsicHeight: `7249`,
              framerColorSyntax: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerScrollSections: `{"VFNRg9rWr":{"pattern":":VFNRg9rWr","name":"template"}}`,
              framerResponsiveScreen: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"fUotBm3xr":{"layout":["fixed","auto"]}}}`,
              framerIntrinsicWidth: `1440`,
              framerContractVersion: `1`,
              framerImmutableVariables: `true`,
              framerDisplayContentsDiv: `false`,
              framerComponentViewportWidth: `true`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
xr();
export { br as __FramerMetadata__, $ as default, rr as queryParamNames };
//# sourceMappingURL=RpBKRN6rxeYHejr-fKpQCYVt3TtEtof_iHqUTTFASJU.B1EXc3kr.mjs.map
