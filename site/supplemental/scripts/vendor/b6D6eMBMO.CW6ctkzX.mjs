import { n as e, t } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  D as n,
  F as r,
  O as i,
  P as a,
  R as o,
  S as ee,
  U as s,
  V as c,
  c as l,
  l as u,
  m as d,
  s as f,
  u as p,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { S as m, Yi as h, t as te, v as ne } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import {
  D as g,
  E as _,
  Ft as v,
  G as y,
  I as b,
  It as re,
  K as x,
  Lt as S,
  M as ie,
  Mt as C,
  Nt as ae,
  O as w,
  P as T,
  Pt as E,
  Q as D,
  U as O,
  a as k,
  d as A,
  f as j,
  g as M,
  gt as oe,
  ht as se,
  j as N,
  jt as ce,
  k as P,
  lt as le,
  p as F,
  s as I,
  v as ue,
  wt as de,
  y as L,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { a as fe, c as pe, o as R, s as me } from "./shared-lib.CHy_rbfQ.mjs?v=20261116-migration-v2";
import { n as z, t as he } from "./Google_ads.VvyDdJFu.mjs?v=20261116-migration-v2";
import { i as ge, n as _e, r as ve, t as ye } from "./IIMP8Vr9g.Cf7xPKPX.mjs?v=20261116-migration-v2";
import { i as be, n as xe, r as Se, t as Ce } from "./UIw3tgmjU.BmIlBG2a.mjs?v=20261116-migration-v2";
import { n as we, r as Te, t as B } from "./jWbUEbZEx.DNRrj1zj.mjs?v=20261116-migration-v2";
import { n as Ee, t as V } from "./wZ9gpIyOv.VBZEt_aV.mjs?v=20261116-migration-v2";
var H, De, Oe, ke, Ae, je, U;
function Me() {
  return (Me = t(() => {
    (l(),
      D(),
      i(),
      (H = `var(--framer-icon-mask)`),
      (De = /*#__PURE__*/ d(function (e, t) {
        return /*#__PURE__*/ f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Oe = h.create(De)),
      (ke = /*#__PURE__*/ d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? /*#__PURE__*/ f(Oe, { ...a, layoutId: r, ref: t, children: i })
          : /*#__PURE__*/ f(`svg`, { ...a, ref: t, children: i });
      })),
      (Ae = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 12.5 6.25 L 0 0 L 0 12.5 Z" fill="transparent" height="12.5px" id="jSlXhnrbh" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(5.75 5.75)" width="12.5px"/></svg>`),
      (je = ({ dots: e, height: t, id: n, stroke: r, width: i, width1: a, ...o }) => ({
        ...o,
        BKVe8Pgvw: e ?? o.BKVe8Pgvw ?? 1,
        fICyAUQY1: r ?? o.fICyAUQY1 ?? `rgb(0, 0, 0)`,
        lKf_CQTz5: a ?? o.lKf_CQTz5 ?? 1.5,
      })),
      (U = E(
        /* @__PURE__ */ d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              fICyAUQY1: o,
              lKf_CQTz5: ee,
              BKVe8Pgvw: s,
              ...c
            } = je(e),
            l = C(`3535238546`, Ae);
          return /*#__PURE__*/ f(ke, {
            ...c,
            className: T(`framer-qnftT`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1335ju": ee, "--18mrqx2": o, ...n },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ f(`use`, { href: l }),
          });
        }),
        [
          `.framer-qnftT { -webkit-mask: ${H}; aspect-ratio: 1; display: block; mask: ${H}; width: 24px; }`,
        ],
        `framer-qnftT`
      )),
      (U.displayName = `Play`),
      ie(U, {
        fICyAUQY1: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: I.Color },
        lKf_CQTz5: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: I.Number,
        },
        BKVe8Pgvw: {
          defaultValue: 1,
          displayStepper: !0,
          hidden: !0,
          max: 4,
          min: 1,
          title: `Dots`,
          type: I.Number,
        },
      }));
  }))();
}
function Ne(e) {
  return /*#__PURE__*/ d((t, n) => {
    let r = (e) => {
      (e?.preventDefault?.(), e?.stopPropagation?.());
      let t = document.referrer && new URL(document.referrer).origin === s.location.origin;
      s.history.length > 1
        ? s.history.back()
        : t
          ? (s.location.href = document.referrer)
          : (s.location.href = `/`);
    };
    return /*#__PURE__*/ f(e, { ref: n, ...t, onClick: r });
  });
}
function Pe() {
  return (Pe = t(() => {
    (c(), l(), i());
  }))();
}
function W(e, t) {
  for (; t; ) {
    let n = G[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function Fe(e) {
  let t = [];
  for (; e; ) {
    let n = G[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function Ie(e) {
  let t = Fe(e);
  if (t) throw t;
}
var G;
function K() {
  return (K = t(() => {
    (D(), (G = { AYmst8Nt3: new ue(() => import("./b6D6eMBMO-0.BvEOuLSg.mjs?v=20261116-migration-v2")) }));
  }))();
}
function q(e, t) {
  for (; t; ) {
    let n = ze[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function Le(e) {
  let t = [];
  for (; e; ) {
    let n = ze[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function Re(e) {
  let t = Le(e);
  if (t) throw t;
}
var ze;
function Be() {
  return (Be = t(() => {
    (D(), (ze = { AYmst8Nt3: new ue(() => import("./oavrP96E2-0.DjVZ3Tov.mjs?v=20261116-migration-v2")) }));
  }))();
}
var J = /* @__PURE__ */ e({ __FramerMetadata__: () => nt, default: () => Y });
function Ve(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, Y, nt;
function rt() {
  return (rt = t(() => {
    (l(),
      D(),
      te(),
      i(),
      Be(),
      (He = re(h.div)),
      (Ue = { OyBVIoN_s: { hover: !0, pressed: !0 } }),
      (We = [`OyBVIoN_s`, `dE0c2HPRe`, `OsCx0OZ4e`, `odJt_Ezn2`, `tREbu9dxY`]),
      (Ge = `framer-HkeLb`),
      (Ke = {
        dE0c2HPRe: `framer-v-eoixxn`,
        odJt_Ezn2: `framer-v-1k9idla`,
        OsCx0OZ4e: `framer-v-16biky8`,
        OyBVIoN_s: `framer-v-7ztdfh`,
        tREbu9dxY: `framer-v-89the0`,
      }),
      (qe = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Je = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (Ye = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Xe = (e, t) => `translateX(-50%) ${t}`),
      (Ze = ({ value: e, children: t }) => {
        let n = a(m),
          i = e ?? n.transition,
          o = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ f(m.Provider, { value: o, children: t });
      }),
      (Qe = {
        Default: `OyBVIoN_s`,
        Disabled: `OsCx0OZ4e`,
        Error: `tREbu9dxY`,
        Loading: `dE0c2HPRe`,
        Success: `odJt_Ezn2`,
      }),
      ($e = h.create(o)),
      (et = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        variant: Qe[i.variant] ?? i.variant ?? `OyBVIoN_s`,
        wzZDx2QyY: e ?? i.wzZDx2QyY,
      })),
      (tt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = E(
        /* @__PURE__ */ d(function (e, t) {
          let r = ee(null),
            i = t ?? r,
            a = n(),
            { activeLocale: s, contentLocale: c, setLocale: l } = de();
          oe();
          let { style: u, className: d, layoutId: m, variant: te, wzZDx2QyY: _, ...v } = et(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: re,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: ie,
              setGestureState: C,
              setVariant: w,
              variants: E,
            } = ae({
              cycleOrder: We,
              defaultVariant: `OyBVIoN_s`,
              enabledGestures: Ue,
              ref: i,
              variant: te,
              variantClassNames: Ke,
            }),
            D = tt(e, E),
            O = [],
            { activeVariantCallback: k, delay: A } = se(y),
            j = k(async (...e) => {
              if ((C({ isPressed: !1 }), _ && (await _(...e)) === !1)) return !1;
            }),
            M = T(Ge, ...O),
            N = () => y !== `dE0c2HPRe`;
          Re(s);
          let ce = () => y === `dE0c2HPRe`;
          return /*#__PURE__*/ f(ne, {
            id: m ?? a,
            children: /*#__PURE__*/ f($e, {
              animate: E,
              initial: !1,
              children: /*#__PURE__*/ f(Ze, {
                value: qe,
                children: /*#__PURE__*/ p(h.button, {
                  ...v,
                  ...x,
                  className: T(M, `framer-7ztdfh`, d, b),
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  "data-reset": `button`,
                  layoutDependency: D,
                  layoutId: `OyBVIoN_s`,
                  onTap: j,
                  ref: i,
                  style: {
                    backgroundColor: `rgb(51, 51, 51)`,
                    borderBottomLeftRadius: 3,
                    borderBottomRightRadius: 3,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    opacity: 1,
                    ...u,
                  },
                  variants: {
                    "OyBVIoN_s-hover": {
                      backgroundColor: `var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29))`,
                      opacity: 1,
                    },
                    "OyBVIoN_s-pressed": { opacity: 1 },
                    odJt_Ezn2: { opacity: 1 },
                    OsCx0OZ4e: {
                      backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgba(178, 237, 30, 0.6))`,
                      opacity: 0.5,
                    },
                    tREbu9dxY: { backgroundColor: `rgba(255, 34, 68, 0.15)`, opacity: 1 },
                  },
                  ...Ve(
                    {
                      dE0c2HPRe: { "data-framer-name": `Loading` },
                      odJt_Ezn2: { "data-framer-name": `Success` },
                      OsCx0OZ4e: { "data-framer-name": `Disabled` },
                      tREbu9dxY: { "data-framer-name": `Error` },
                    },
                    y,
                    S
                  ),
                  children: [
                    N() &&
                      /*#__PURE__*/ f(g, {
                        __fromCanvasComponent: !0,
                        children:
                          q(`v0`, c) ??
                          /*#__PURE__*/ f(o, {
                            children: /*#__PURE__*/ f(h.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                "--framer-font-family": `"IBM Plex Sans"`,
                                "--framer-font-size": `14px`,
                                "--framer-font-style": `normal`,
                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                "--framer-font-weight": `600`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                              },
                              children: `提交`,
                            }),
                          }),
                        className: `framer-trplmc`,
                        fonts: [`GF;IBM Plex Sans-600`],
                        layoutDependency: D,
                        layoutId: `ePQBMXW7A`,
                        style: {
                          "--extracted-2gg91v": `normal`,
                          "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: {
                          "OyBVIoN_s-hover": {
                            "--extracted-r6o4lv": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                          },
                          OsCx0OZ4e: {
                            "--extracted-r6o4lv": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                          },
                          tREbu9dxY: { "--extracted-r6o4lv": `rgb(255, 34, 68)` },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Ve(
                          {
                            "OyBVIoN_s-hover": {
                              children:
                                q(`v1`, c) ??
                                /*#__PURE__*/ f(o, {
                                  children: /*#__PURE__*/ f(h.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                      "--framer-font-family": `"IBM Plex Sans"`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-style": `normal`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                      "--framer-font-weight": `600`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                    },
                                    children: `提交`,
                                  }),
                                }),
                            },
                            odJt_Ezn2: {
                              children:
                                q(`v2`, c) ??
                                /*#__PURE__*/ f(o, {
                                  children: /*#__PURE__*/ f(h.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                      "--framer-font-family": `"Inter"`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-style": `normal`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                      "--framer-font-weight": `600`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                    },
                                    children: `谢谢`,
                                  }),
                                }),
                              fonts: [`Inter-SemiBold`],
                            },
                            OsCx0OZ4e: {
                              children:
                                q(`v1`, c) ??
                                /*#__PURE__*/ f(o, {
                                  children: /*#__PURE__*/ f(h.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                      "--framer-font-family": `"IBM Plex Sans"`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-style": `normal`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                      "--framer-font-weight": `600`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                    },
                                    children: `提交`,
                                  }),
                                }),
                            },
                            tREbu9dxY: {
                              children:
                                q(`v3`, c) ??
                                /*#__PURE__*/ f(o, {
                                  children: /*#__PURE__*/ f(h.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                      "--framer-font-family": `"Inter"`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-style": `normal`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                      "--framer-font-weight": `600`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 34, 68))`,
                                    },
                                    children: `发生了错误`,
                                  }),
                                }),
                              fonts: [`Inter-SemiBold`],
                            },
                          },
                          y,
                          S
                        ),
                      }),
                    ce() &&
                      /*#__PURE__*/ f(h.div, {
                        className: `framer-4g1gg1`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: D,
                        layoutId: `FrXsl4vrr`,
                        style: {
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        },
                        children: /*#__PURE__*/ f(He, {
                          __framer__loop: Ye,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: Je,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-1yxjok8`,
                          "data-framer-name": `Conic`,
                          layoutDependency: D,
                          layoutId: `xCs7itqoF`,
                          style: {
                            background: `conic-gradient(from 180deg at 50% 50%, rgb(68, 204, 255) 0deg, rgb(68, 204, 255) 360deg)`,
                            backgroundColor: `rgb(68, 204, 255)`,
                            mask: `none`,
                            WebkitMask: `none`,
                          },
                          variants: {
                            dE0c2HPRe: {
                              background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                              WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                            },
                          },
                          children: /*#__PURE__*/ f(h.div, {
                            className: `framer-1g8140v`,
                            "data-framer-name": `Rounding`,
                            layoutDependency: D,
                            layoutId: `bdSzjZNbh`,
                            style: {
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                            transformTemplate: Xe,
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
          `.framer-HkeLb.framer-1nvgwls, .framer-HkeLb .framer-1nvgwls { display: block; }`,
          `.framer-HkeLb.framer-7ztdfh { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 240px; }`,
          `.framer-HkeLb .framer-trplmc { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-HkeLb .framer-4g1gg1 { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: auto; overflow: hidden; position: relative; width: 20px; }`,
          `.framer-HkeLb .framer-1yxjok8 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-HkeLb .framer-1g8140v { aspect-ratio: 1 / 1; flex: none; height: auto; left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `.framer-HkeLb.framer-v-eoixxn .framer-1yxjok8 { overflow: hidden; }`,
        ],
        `framer-HkeLb`
      )),
      (Y.displayName = `Button 4`),
      (Y.defaultProps = { height: 40, width: 240 }),
      ie(Y, {
        variant: {
          options: [`OyBVIoN_s`, `dE0c2HPRe`, `OsCx0OZ4e`, `odJt_Ezn2`, `tREbu9dxY`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: I.Enum,
        },
        wzZDx2QyY: { title: `Click`, type: I.EventHandler },
      }),
      N(
        Y,
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
                weight: `600`,
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
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (nt = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FrameroavrP96E2`,
            slots: [],
            annotations: {
              framerIntrinsicWidth: `240`,
              framerColorSyntax: `true`,
              framerAutoSizeImages: `true`,
              framerContractVersion: `1`,
              framerImmutableVariables: `true`,
              framerDisplayContentsDiv: `false`,
              framerVariables: `{"wzZDx2QyY":"click"}`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"dE0c2HPRe":{"layout":["fixed","fixed"]},"OsCx0OZ4e":{"layout":["fixed","fixed"]},"odJt_Ezn2":{"layout":["fixed","fixed"]},"tREbu9dxY":{"layout":["fixed","fixed"]},"KhRYYppaU":{"layout":["fixed","fixed"]},"r0fJj1GRl":{"layout":["fixed","fixed"]}}}`,
              framerIntrinsicHeight: `40`,
              framerComponentViewportWidth: `true`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
function X(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
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
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Z,
  Q,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  $;
function Ht() {
  return (Ht = t(() => {
    (l(),
      D(),
      te(),
      i(),
      Me(),
      he(),
      Pe(),
      ge(),
      pe(),
      be(),
      K(),
      we(),
      rt(),
      Ee(),
      (it = O(U)),
      (at = O(Y)),
      (ot = v(Y, { nodeId: `q_tAAktmC`, override: z, scopeId: `b6D6eMBMO` })),
      (st = S(ot, J)),
      (ct = O(B)),
      (lt = v(B, { nodeId: `GoYOr837Z`, override: Ne, scopeId: `b6D6eMBMO` })),
      (ut = S(lt, Te)),
      (dt = v(Y, { nodeId: `jKVCtIoFL`, override: z, scopeId: `b6D6eMBMO` })),
      (ft = S(dt, J)),
      (pt = v(Y, { nodeId: `ZiY1oiVF1`, override: z, scopeId: `b6D6eMBMO` })),
      (mt = S(pt, J)),
      (ht = O(V)),
      (gt = re(h.div)),
      (_t = v(Y, { nodeId: `HYRVRqCI1`, override: z, scopeId: `b6D6eMBMO` })),
      (vt = S(_t, J)),
      (yt = v(Y, { nodeId: `Sy1YDWn1l`, override: z, scopeId: `b6D6eMBMO` })),
      (bt = S(yt, J)),
      (xt = v(Y, { nodeId: `gGk1CO3_W`, override: z, scopeId: `b6D6eMBMO` })),
      (St = S(xt, J)),
      (Ct = v(Y, { nodeId: `LPQoUJyXC`, override: z, scopeId: `b6D6eMBMO` })),
      (wt = S(Ct, J)),
      (Tt = v(Y, { nodeId: `icwcVgroO`, override: z, scopeId: `b6D6eMBMO` })),
      (Et = S(Tt, J)),
      (Dt = [
        `PEIGqnDNV`,
        `OvAw4rSAX`,
        `VGrNNITNF`,
        `va6GzOnKj`,
        `lA_pXQ2vq`,
        `JmjQOVIT8`,
        `kv0ktgdgd`,
        `DvyeWzNeF`,
        `nCrBGHnJQ`,
        `zV_a3X7Sf`,
        `uTGLNwn5B`,
        `PQHwzDtoU`,
        `ira2EJ4gi`,
        `JnazYUcGM`,
        `WRk6qS5nD`,
        `r0HMMwwih`,
        `tiROO0mLG`,
        `JUnTBSkGe`,
      ]),
      (Ot = `framer-6p6wm`),
      (kt = {
        DvyeWzNeF: `framer-v-1rvah2w`,
        ira2EJ4gi: `framer-v-11nwxk8`,
        JmjQOVIT8: `framer-v-1jjc3wq`,
        JnazYUcGM: `framer-v-1qg90gd`,
        JUnTBSkGe: `framer-v-1i8essy`,
        kv0ktgdgd: `framer-v-1fvyavt`,
        lA_pXQ2vq: `framer-v-uj195x`,
        nCrBGHnJQ: `framer-v-ip7fef`,
        OvAw4rSAX: `framer-v-w8u8t8`,
        PEIGqnDNV: `framer-v-421q70`,
        PQHwzDtoU: `framer-v-hkv17i`,
        r0HMMwwih: `framer-v-vxzdv6`,
        tiROO0mLG: `framer-v-jxj67c`,
        uTGLNwn5B: `framer-v-o7xh36`,
        va6GzOnKj: `framer-v-1uvt9hv`,
        VGrNNITNF: `framer-v-16yvz1q`,
        WRk6qS5nD: `framer-v-1hnmy84`,
        zV_a3X7Sf: `framer-v-7eww8j`,
      }),
      (At = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (jt = (e, t) => `translate(-50%, -50%) ${t}`),
      (Z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Q = (e, t, n) => {
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
      (Mt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: 80,
      }),
      (Nt = { damping: 80, delay: 0.1, mass: 1, stiffness: 400, type: `spring` }),
      (Pt = (e, t) => `translateX(-50%) ${t}`),
      (Ft = ({ value: e, children: t }) => {
        let n = a(m),
          i = e ?? n.transition,
          o = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ f(m.Provider, { value: o, children: t });
      }),
      (It = {
        "desktop/trial": `PEIGqnDNV`,
        "En1-desktop": `va6GzOnKj`,
        "En1-phone": `zV_a3X7Sf`,
        "En1-tablet": `nCrBGHnJQ`,
        "En2-desktop": `lA_pXQ2vq`,
        "En2-phone": `PQHwzDtoU`,
        "En2-tablet": `uTGLNwn5B`,
        "En3-desktop": `JmjQOVIT8`,
        "En3-phone": `JnazYUcGM`,
        "En3-tablet": `ira2EJ4gi`,
        "En4-desktop": `kv0ktgdgd`,
        "En4-phone": `r0HMMwwih`,
        "En4-tablet": `WRk6qS5nD`,
        "En5-desktop": `DvyeWzNeF`,
        "En5-phone": `JUnTBSkGe`,
        "En5-tablet": `tiROO0mLG`,
        "phone/trial": `VGrNNITNF`,
        "tablet/trial": `OvAw4rSAX`,
      }),
      (Lt = h.create(o)),
      (Rt = ({
        backgroundColor: e,
        cardBackgroundColor: t,
        height: n,
        id: r,
        title: i,
        width: a,
        ...o
      }) => ({
        ...o,
        f6g6WDZlE: i ?? o.f6g6WDZlE ?? `Try Tier0 Edge Now`,
        JBAq5DDvU: t ?? o.JBAq5DDvU ?? `rgba(255, 255, 255, 0)`,
        NEc42_I23:
          e ??
          o.NEc42_I23 ??
          `var(--token-0b09fdc4-bae8-43f3-bba4-8e8677e2b631, rgb(244, 244, 244))`,
        variant: It[o.variant] ?? o.variant ?? `PEIGqnDNV`,
      })),
      (zt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Bt = /*#__PURE__*/ d(function (e, t) {
        let r = ee(null),
          i = t ?? r,
          a = n(),
          { activeLocale: s, contentLocale: c, setLocale: l } = de(),
          d = oe(),
          {
            style: m,
            className: te,
            layoutId: v,
            variant: y,
            f6g6WDZlE: b,
            NEc42_I23: re,
            JBAq5DDvU: S,
            ...ie
          } = Rt(e),
          {
            baseVariant: C,
            classNames: E,
            clearLoadingGesture: D,
            gestureHandlers: O,
            gestureVariant: N,
            isLoading: le,
            setGestureState: I,
            setVariant: ue,
            variants: pe,
          } = ae({
            cycleOrder: Dt,
            defaultVariant: `PEIGqnDNV`,
            ref: i,
            variant: y,
            variantClassNames: kt,
          }),
          R = zt(e, pe),
          me = T(Ot, fe, Ce, ye),
          z = () => C === `JmjQOVIT8`;
        Ie(s);
        let he = () => C !== `JmjQOVIT8`,
          ge = () =>
            !![
              `kv0ktgdgd`,
              `DvyeWzNeF`,
              `nCrBGHnJQ`,
              `zV_a3X7Sf`,
              `PQHwzDtoU`,
              `WRk6qS5nD`,
              `r0HMMwwih`,
              `tiROO0mLG`,
              `JUnTBSkGe`,
            ].includes(C),
          _e = () =>
            ![
              `kv0ktgdgd`,
              `DvyeWzNeF`,
              `zV_a3X7Sf`,
              `PQHwzDtoU`,
              `WRk6qS5nD`,
              `r0HMMwwih`,
              `tiROO0mLG`,
              `JUnTBSkGe`,
            ].includes(C),
          ve = () =>
            ![
              `kv0ktgdgd`,
              `DvyeWzNeF`,
              `nCrBGHnJQ`,
              `WRk6qS5nD`,
              `r0HMMwwih`,
              `tiROO0mLG`,
              `JUnTBSkGe`,
            ].includes(C),
          be = () => ![`nCrBGHnJQ`, `zV_a3X7Sf`, `PQHwzDtoU`, `r0HMMwwih`, `JUnTBSkGe`].includes(C),
          xe = () =>
            ![
              `kv0ktgdgd`,
              `DvyeWzNeF`,
              `nCrBGHnJQ`,
              `zV_a3X7Sf`,
              `PQHwzDtoU`,
              `WRk6qS5nD`,
              `tiROO0mLG`,
            ].includes(C),
          Se = () =>
            ![
              `kv0ktgdgd`,
              `DvyeWzNeF`,
              `nCrBGHnJQ`,
              `zV_a3X7Sf`,
              `PQHwzDtoU`,
              `WRk6qS5nD`,
              `r0HMMwwih`,
              `tiROO0mLG`,
              `JUnTBSkGe`,
            ].includes(C),
          we = () => C === `zV_a3X7Sf`,
          Te = () => C !== `nCrBGHnJQ`,
          { activeVariantCallback: B, delay: Ee } = se(C),
          H = B(async (...e) => {
            ue(`o3jpPWKXl`);
          }),
          De = () => C === `uTGLNwn5B`,
          Oe = () => !![`kv0ktgdgd`, `WRk6qS5nD`, `r0HMMwwih`].includes(C),
          ke = () => !![`DvyeWzNeF`, `tiROO0mLG`, `JUnTBSkGe`].includes(C),
          Ae = () => C === `VGrNNITNF`;
        ce();
        let je = () => C === `OvAw4rSAX`,
          Me = () =>
            ![
              `OvAw4rSAX`,
              `VGrNNITNF`,
              `va6GzOnKj`,
              `lA_pXQ2vq`,
              `JmjQOVIT8`,
              `kv0ktgdgd`,
              `DvyeWzNeF`,
              `nCrBGHnJQ`,
              `zV_a3X7Sf`,
              `uTGLNwn5B`,
              `PQHwzDtoU`,
              `ira2EJ4gi`,
              `JnazYUcGM`,
              `WRk6qS5nD`,
              `r0HMMwwih`,
              `tiROO0mLG`,
              `JUnTBSkGe`,
            ].includes(C),
          Ne = () => !![`va6GzOnKj`, `nCrBGHnJQ`, `zV_a3X7Sf`].includes(C),
          Pe = () => ![`va6GzOnKj`, `nCrBGHnJQ`, `zV_a3X7Sf`].includes(C),
          Fe = () => C !== `va6GzOnKj`,
          G = () => !![`lA_pXQ2vq`, `uTGLNwn5B`, `PQHwzDtoU`].includes(C),
          K = () => C === `JnazYUcGM`,
          q = () => C !== `JnazYUcGM`,
          Le = () => C === `va6GzOnKj`,
          Re = () => C === `ira2EJ4gi`,
          ze = () => C === `lA_pXQ2vq`,
          Be = () =>
            ![
              `va6GzOnKj`,
              `lA_pXQ2vq`,
              `JmjQOVIT8`,
              `kv0ktgdgd`,
              `DvyeWzNeF`,
              `nCrBGHnJQ`,
              `zV_a3X7Sf`,
              `uTGLNwn5B`,
              `PQHwzDtoU`,
              `ira2EJ4gi`,
              `JnazYUcGM`,
              `WRk6qS5nD`,
              `r0HMMwwih`,
              `tiROO0mLG`,
              `JUnTBSkGe`,
            ].includes(C);
        return /*#__PURE__*/ f(ne, {
          id: v ?? a,
          children: /*#__PURE__*/ f(Lt, {
            animate: pe,
            initial: !1,
            children: /*#__PURE__*/ f(Ft, {
              value: At,
              children: /*#__PURE__*/ f(h.div, {
                ...ie,
                ...O,
                className: T(me, `framer-421q70`, te, E),
                "data-framer-name": `desktop/trial`,
                layoutDependency: R,
                layoutId: `PEIGqnDNV`,
                ref: i,
                style: { backgroundColor: re, ...m },
                variants: {
                  DvyeWzNeF: {
                    backgroundColor: `var(--token-0b09fdc4-bae8-43f3-bba4-8e8677e2b631, rgb(244, 244, 244))`,
                  },
                  ira2EJ4gi: { backgroundColor: `rgba(0, 0, 0, 0)` },
                  JmjQOVIT8: { backgroundColor: `rgba(0, 0, 0, 0)` },
                  JnazYUcGM: { backgroundColor: `rgba(0, 0, 0, 0)` },
                  JUnTBSkGe: {
                    backgroundColor: `var(--token-0b09fdc4-bae8-43f3-bba4-8e8677e2b631, rgb(244, 244, 244))`,
                  },
                  kv0ktgdgd: {
                    backgroundColor: `var(--token-0b09fdc4-bae8-43f3-bba4-8e8677e2b631, rgb(244, 244, 244))`,
                  },
                  lA_pXQ2vq: {
                    backgroundColor: `var(--token-0b09fdc4-bae8-43f3-bba4-8e8677e2b631, rgb(244, 244, 244))`,
                  },
                  nCrBGHnJQ: {
                    backgroundColor: `var(--token-0b09fdc4-bae8-43f3-bba4-8e8677e2b631, rgb(244, 244, 244))`,
                  },
                  PQHwzDtoU: {
                    backgroundColor: `var(--token-0b09fdc4-bae8-43f3-bba4-8e8677e2b631, rgb(244, 244, 244))`,
                  },
                  r0HMMwwih: {
                    backgroundColor: `var(--token-0b09fdc4-bae8-43f3-bba4-8e8677e2b631, rgb(244, 244, 244))`,
                  },
                  tiROO0mLG: {
                    backgroundColor: `var(--token-0b09fdc4-bae8-43f3-bba4-8e8677e2b631, rgb(244, 244, 244))`,
                  },
                  uTGLNwn5B: {
                    backgroundColor: `var(--token-0b09fdc4-bae8-43f3-bba4-8e8677e2b631, rgb(244, 244, 244))`,
                  },
                  WRk6qS5nD: {
                    backgroundColor: `var(--token-0b09fdc4-bae8-43f3-bba4-8e8677e2b631, rgb(244, 244, 244))`,
                  },
                  zV_a3X7Sf: {
                    backgroundColor: `var(--token-0b09fdc4-bae8-43f3-bba4-8e8677e2b631, rgb(244, 244, 244))`,
                  },
                },
                ...X(
                  {
                    DvyeWzNeF: { "data-framer-name": `En5-desktop` },
                    ira2EJ4gi: { "data-framer-name": `En3-tablet` },
                    JmjQOVIT8: { "data-framer-name": `En3-desktop` },
                    JnazYUcGM: { "data-framer-name": `En3-phone` },
                    JUnTBSkGe: { "data-framer-name": `En5-phone` },
                    kv0ktgdgd: { "data-framer-name": `En4-desktop` },
                    lA_pXQ2vq: { "data-framer-name": `En2-desktop` },
                    nCrBGHnJQ: { "data-framer-name": `En1-tablet` },
                    OvAw4rSAX: { "data-framer-name": `tablet/trial` },
                    PQHwzDtoU: { "data-framer-name": `En2-phone` },
                    r0HMMwwih: { "data-framer-name": `En4-phone` },
                    tiROO0mLG: { "data-framer-name": `En5-tablet` },
                    uTGLNwn5B: { "data-framer-name": `En2-tablet` },
                    va6GzOnKj: { "data-framer-name": `En1-desktop` },
                    VGrNNITNF: { "data-framer-name": `phone/trial` },
                    WRk6qS5nD: { "data-framer-name": `En4-tablet` },
                    zV_a3X7Sf: { "data-framer-name": `En1-phone` },
                  },
                  C,
                  N
                ),
                children: /*#__PURE__*/ p(h.div, {
                  className: `framer-j49g47`,
                  "data-framer-name": `Content details`,
                  layoutDependency: R,
                  layoutId: `y8FNcGgtd`,
                  children: [
                    z() &&
                      /*#__PURE__*/ p(h.div, {
                        className: `framer-qc83cn`,
                        layoutDependency: R,
                        layoutId: `qp6EEPHWF`,
                        children: [
                          /*#__PURE__*/ p(h.div, {
                            className: `framer-z06j7t`,
                            layoutDependency: R,
                            layoutId: `grNA7IE1R`,
                            children: [
                              /*#__PURE__*/ p(h.div, {
                                className: `framer-19q30mx`,
                                layoutDependency: R,
                                layoutId: `WWpt0hv6G`,
                                children: [
                                  /*#__PURE__*/ f(g, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      W(`v0`, c) ??
                                      /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ p(h.p, {
                                          style: {
                                            "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                                            "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                            "--framer-font-size": `49.5px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-line-height": `130%`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(115, 178, 0))`,
                                            "--framer-text-transform": `capitalize`,
                                          },
                                          children: [
                                            /*#__PURE__*/ f(h.span, {
                                              style: { "--framer-font-size": `55px` },
                                              children: `Start Monitoring OEE`,
                                            }),
                                            /*#__PURE__*/ f(h.span, {
                                              style: { "--framer-font-size": `55px` },
                                              children: /*#__PURE__*/ f(h.br, {}),
                                            }),
                                            /*#__PURE__*/ f(h.span, {
                                              style: {
                                                "--framer-font-size": `55px`,
                                                "--framer-text-color": `var(--extracted-c9yw3e, rgb(47, 52, 59))`,
                                              },
                                              children: `in One Click`,
                                            }),
                                          ],
                                        }),
                                      }),
                                    className: `framer-142thf4`,
                                    "data-framer-name": `Start Monitoring OEE\u2028in One Click`,
                                    fonts: [`GF;Poppins-600`],
                                    layoutDependency: R,
                                    layoutId: `eUN2pF_OV`,
                                    style: {
                                      "--extracted-c9yw3e": `rgb(47, 52, 59)`,
                                      "--extracted-r6o4lv": `rgb(115, 178, 0)`,
                                      "--framer-paragraph-spacing": `0px`,
                                    },
                                    transformTemplate: jt,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ f(L, {
                                    href: `https://supos-ce-instance3.supos.app:8443/home`,
                                    motionChild: !0,
                                    nodeId: `FCjhR1HA9`,
                                    openInNewTab: !0,
                                    scopeId: `b6D6eMBMO`,
                                    children: /*#__PURE__*/ f(w, {
                                      as: `a`,
                                      className: `framer-1jh9uhz framer-1k8wezx`,
                                      "data-framer-name": `Union`,
                                      layout: `position`,
                                      layoutDependency: R,
                                      layoutId: `FCjhR1HA9`,
                                      opacity: 1,
                                      style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 51 48"></svg>`,
                                      svgContentId: 8623756133,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ p(h.div, {
                                className: `framer-rnvvro`,
                                "data-framer-name": `Frame 1321316428`,
                                layoutDependency: R,
                                layoutId: `YFDZOOwdy`,
                                children: [
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-1j4q5vx`,
                                    "data-framer-name": `Frame 1321316432`,
                                    layoutDependency: R,
                                    layoutId: `cyzqDUfRy`,
                                    children: [
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v1`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `19.19px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `22.53px`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9c739489-be53-4454-b7e4-cefeef9ed790, rgb(204, 201, 190)))`,
                                              },
                                              children: `0 设置`,
                                            }),
                                          }),
                                        className: `framer-5xv6v`,
                                        "data-framer-name": `0 Setup`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: R,
                                        layoutId: `ZY8odF1TV`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--extracted-r6o4lv": `var(--token-9c739489-be53-4454-b7e4-cefeef9ed790, rgb(204, 201, 190))`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(h.div, {
                                        className: `framer-tx2tz7`,
                                        "data-framer-name": `Settings`,
                                        layoutDependency: R,
                                        layoutId: `ZEMRiSq65`,
                                        children: /*#__PURE__*/ f(w, {
                                          className: `framer-1smeot7`,
                                          "data-framer-name": `Vector`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 26,
                                          intrinsicWidth: 25,
                                          layoutDependency: R,
                                          layoutId: `P2P94JgCX`,
                                          svg: `<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.9846 13.8882C21.9846 13.6661 21.9846 13.444 21.9846 13.213C21.9846 12.9821 21.9846 12.76 21.9846 12.529L23.6902 11.0367C24.0046 10.7596 24.2109 10.3802 24.2727 9.96573C24.3344 9.55122 24.2477 9.12822 24.0277 8.77149L21.9313 5.21824C21.7755 4.94843 21.5515 4.72432 21.2818 4.56841C21.0121 4.41249 20.7061 4.33025 20.3945 4.32993C20.2015 4.32845 20.0094 4.35845 19.826 4.41876L17.6674 5.14718C17.2947 4.89952 16.906 4.67695 16.5037 4.48094L16.0507 2.2424C15.9695 1.83342 15.747 1.46605 15.4222 1.20459C15.0974 0.943121 14.691 0.804227 14.2741 0.812216H10.1168C9.69989 0.804227 9.29347 0.943121 8.96867 1.20459C8.64387 1.46605 8.42138 1.83342 8.34015 2.2424L7.88711 4.48094C7.48198 4.6769 7.09027 4.89947 6.71454 5.14718L4.60036 4.38323C4.41497 4.33493 4.22298 4.31693 4.03184 4.32993C3.72029 4.33025 3.4143 4.41249 3.14456 4.56841C2.87483 4.72432 2.65084 4.94843 2.49506 5.21824L0.398648 8.77149C0.191305 9.12769 0.114257 9.5449 0.1807 9.95166C0.247144 10.3584 0.452945 10.7294 0.762856 11.0011L2.44176 12.5379C2.44176 12.76 2.44176 12.9821 2.44176 13.213C2.44176 13.444 2.44176 13.6661 2.44176 13.897L0.762856 15.3894C0.444191 15.663 0.232761 16.0407 0.166087 16.4553C0.0994131 16.87 0.181808 17.2949 0.398648 17.6546L2.49506 21.2078C2.65084 21.4777 2.87483 21.7018 3.14456 21.8577C3.4143 22.0136 3.72029 22.0958 4.03184 22.0962C4.22492 22.0976 4.41694 22.0676 4.60036 22.0073L6.75896 21.2789C7.13164 21.5266 7.5204 21.7491 7.92265 21.9451L8.37568 24.1837C8.45692 24.5927 8.67941 24.96 9.00421 25.2215C9.32901 25.483 9.73542 25.6219 10.1523 25.6139H14.3451C14.762 25.6219 15.1684 25.483 15.4932 25.2215C15.818 24.96 16.0405 24.5927 16.1218 24.1837L16.5748 21.9451C16.9799 21.7492 17.3716 21.5266 17.7474 21.2789L19.8971 22.0073C20.0805 22.0676 20.2725 22.0976 20.4656 22.0962C20.7772 22.0958 21.0831 22.0136 21.3529 21.8577C21.6226 21.7018 21.8466 21.4777 22.0024 21.2078L24.0277 17.6546C24.2351 17.2984 24.3121 16.8812 24.2457 16.4744C24.1792 16.0677 23.9734 15.6967 23.6635 15.4249L21.9846 13.8882ZM20.3945 20.3195L17.3476 19.2891C16.6344 19.8932 15.8192 20.3655 14.9403 20.6837L14.3096 23.8728H10.1168L9.48607 20.7193C8.61413 20.392 7.80336 19.9206 7.08763 19.3246L4.03184 20.3195L1.93543 16.7663L4.35163 14.6343C4.18738 13.7148 4.18738 12.7735 4.35163 11.8539L1.93543 9.6598L4.03184 6.10655L7.07875 7.13699C7.79201 6.53285 8.60718 6.06059 9.48607 5.74234L10.1168 2.55331H14.3096L14.9403 5.70681C15.8123 6.03409 16.623 6.50553 17.3387 7.10146L20.3945 6.10655L22.491 9.6598L20.0747 11.7917C20.239 12.7113 20.239 13.6526 20.0747 14.5722L22.491 16.7663L20.3945 20.3195Z" fill="#CCC9BE"/>
<path d="M12.2132 18.5429C11.159 18.5429 10.1286 18.2303 9.25207 17.6447C8.37558 17.059 7.69244 16.2266 7.28903 15.2527C6.88563 14.2788 6.78008 13.2071 6.98573 12.1732C7.19139 11.1393 7.69901 10.1897 8.4444 9.44426C9.1898 8.69886 10.1395 8.19124 11.1734 7.98559C12.2073 7.77993 13.2789 7.88548 14.2528 8.28889C15.2267 8.69229 16.0592 9.37544 16.6448 10.2519C17.2305 11.1284 17.5431 12.1589 17.5431 13.213C17.5502 13.915 17.4172 14.6112 17.1519 15.2611C16.8865 15.911 16.4942 16.5014 15.9979 16.9977C15.5015 17.4941 14.9111 17.8864 14.2612 18.1517C13.6114 18.417 12.9151 18.55 12.2132 18.5429ZM12.2132 9.6598C11.7436 9.64886 11.2766 9.73329 10.8406 9.90798C10.4045 10.0827 10.0085 10.344 9.67631 10.6762C9.34415 11.0083 9.08282 11.4044 8.90813 11.8404C8.73344 12.2765 8.649 12.7434 8.65994 13.213C8.649 13.6827 8.73344 14.1496 8.90813 14.5856C9.08282 15.0217 9.34415 15.4178 9.67631 15.7499C10.0085 16.0821 10.4045 16.3434 10.8406 16.5181C11.2766 16.6928 11.7436 16.7772 12.2132 16.7663C12.6828 16.7772 13.1497 16.6928 13.5858 16.5181C14.0218 16.3434 14.4179 16.0821 14.7501 15.7499C15.0822 15.4178 15.3436 15.0217 15.5182 14.5856C15.6929 14.1496 15.7774 13.6827 15.7664 13.213C15.7774 12.7434 15.6929 12.2765 15.5182 11.8404C15.3436 11.4044 15.0822 11.0083 14.7501 10.6762C14.4179 10.344 14.0218 10.0827 13.5858 9.90798C13.1497 9.73329 12.6828 9.64886 12.2132 9.6598Z" fill="#CCC9BE"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ f(w, {
                                    className: `framer-1jbwmle`,
                                    "data-framer-name": `Line 122`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 4,
                                    intrinsicWidth: 152,
                                    layoutDependency: R,
                                    layoutId: `dSAfJh225`,
                                    style: { rotate: 90 },
                                    svg: `<svg width="152" height="4" viewBox="-1 -1 152 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="1.18421" x2="150" y2="1.18421" stroke="#73B200" stroke-width="0.901102" stroke-dasharray="1.8 1.8"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-1ilnl5c`,
                                    "data-framer-name": `Frame 1321316433`,
                                    layoutDependency: R,
                                    layoutId: `tgEhlJR5u`,
                                    children: [
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v2`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `19.19px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `22.53px`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9c739489-be53-4454-b7e4-cefeef9ed790, rgb(204, 201, 190)))`,
                                              },
                                              children: `0 成本`,
                                            }),
                                          }),
                                        className: `framer-17zs5qr`,
                                        "data-framer-name": `0 Cost`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: R,
                                        layoutId: `ISVdJnDZu`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--extracted-r6o4lv": `var(--token-9c739489-be53-4454-b7e4-cefeef9ed790, rgb(204, 201, 190))`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(h.div, {
                                        className: `framer-12z6tf8`,
                                        "data-framer-name": `Currency--dollar`,
                                        layoutDependency: R,
                                        layoutId: `UhInVxrqh`,
                                        children: /*#__PURE__*/ f(w, {
                                          className: `framer-17108b2`,
                                          "data-framer-name": `Vector`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 24,
                                          intrinsicWidth: 14,
                                          layoutDependency: R,
                                          layoutId: `DzXdY6YSi`,
                                          svg: `<svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4313 16.2238C13.4313 12.1241 10.0734 11.6569 7.37556 11.2821C4.43525 10.8727 2.77153 10.5182 2.77153 7.9865C2.77153 5.86077 4.99862 5.1065 6.90555 5.1065C7.85601 5.07576 8.80016 5.27139 9.66015 5.67727C10.5201 6.08315 11.2713 6.68764 11.8518 7.4409L13.2342 6.32536C12.6125 5.52606 11.839 4.8575 10.9582 4.3581C10.0773 3.8587 9.10648 3.53831 8.1014 3.41534V0.664948H6.32478V3.34942C3.11335 3.54414 0.994906 5.35701 0.994906 7.98641C0.994906 12.1881 4.39714 12.6613 7.13092 13.0409C10.0202 13.4431 11.6546 13.7892 11.6546 16.2238C11.6546 18.9174 8.87192 19.3195 7.21309 19.3195C4.16671 19.3195 2.87973 18.4632 1.6861 16.9851L0.303711 18.1006C1.00796 19.0286 1.91881 19.7797 2.96397 20.2942C4.00914 20.8088 5.15985 21.0726 6.32478 21.0648V23.761H8.1014V21.0562C11.4109 20.786 13.4313 18.9889 13.4313 16.2238Z" fill="#CCC9BE"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ f(w, {
                                    className: `framer-1e1fkqy`,
                                    "data-framer-name": `Line 123`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 4,
                                    intrinsicWidth: 152,
                                    layoutDependency: R,
                                    layoutId: `PxG5ByCWK`,
                                    style: { rotate: 90 },
                                    svg: `<svg width="152" height="4" viewBox="-1 -1 152 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.819011" x2="150" y2="0.81901" stroke="#73B200" stroke-width="0.901102" stroke-dasharray="1.8 1.8"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-i8pfza`,
                                    "data-framer-name": `Frame 1321316434`,
                                    layoutDependency: R,
                                    layoutId: `ZcPDC6wuo`,
                                    children: [
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v3`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `19.19px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `22.53px`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9c739489-be53-4454-b7e4-cefeef9ed790, rgb(204, 201, 190)))`,
                                              },
                                              children: `0 数据同步延迟`,
                                            }),
                                          }),
                                        className: `framer-ls2gou`,
                                        "data-framer-name": `0 Lag in Data Sync`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: R,
                                        layoutId: `QRQXsVC7M`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--extracted-r6o4lv": `var(--token-9c739489-be53-4454-b7e4-cefeef9ed790, rgb(204, 201, 190))`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(h.div, {
                                        className: `framer-eaofju`,
                                        "data-framer-name": `Db2--data-sharing-group`,
                                        layoutDependency: R,
                                        layoutId: `OaXliSZIC`,
                                        children: /*#__PURE__*/ f(w, {
                                          className: `framer-1d7lrwb`,
                                          "data-framer-name": `Vector`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 26,
                                          intrinsicWidth: 26,
                                          layoutDependency: R,
                                          layoutId: `yMDwu7FYf`,
                                          svg: `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.10672 23.8727V18.3919L8.40727 20.6838L9.65997 19.4312L5.21841 14.9896L0.776855 19.4312L2.02955 20.6838L4.3301 18.3919V23.8727C4.3301 24.8521 5.12709 25.6493 6.10672 25.6493H14.1015V23.8727H6.10672Z" fill="#CCC9BE"/>
<path d="M21.208 14.1013C18.6758 14.1013 16.7665 15.2472 16.7665 16.7662V22.9844C16.7665 24.5034 18.6758 25.6493 21.208 25.6493C23.7402 25.6493 25.6496 24.5034 25.6496 22.9844V16.7662C25.6496 15.2472 23.7402 14.1013 21.208 14.1013ZM21.208 15.8779C22.9278 15.8779 23.873 16.545 23.873 16.7662C23.873 16.9874 22.9278 17.6545 21.208 17.6545C19.4882 17.6545 18.5431 16.9874 18.5431 16.7662C18.5431 16.545 19.4882 15.8779 21.208 15.8779ZM21.208 23.8727C19.4882 23.8727 18.5431 23.2056 18.5431 22.9844V18.9163C19.2772 19.2381 20.1872 19.4312 21.208 19.4312C22.2289 19.4312 23.1389 19.2381 23.873 18.9163V22.9844C23.873 23.2056 22.9278 23.8727 21.208 23.8727Z" fill="#CCC9BE"/>
<path d="M24.3969 5.74209L22.0963 8.03403V2.55323C22.0963 1.57387 21.2993 0.776611 20.3197 0.776611H12.3249V2.55323H20.3197V8.03403L18.0192 5.74209L16.7665 6.99479L21.208 11.4363L25.6496 6.99479L24.3969 5.74209Z" fill="#CCC9BE"/>
<path d="M5.21841 12.3247C7.75063 12.3247 9.65997 11.1787 9.65997 9.65973V3.44155C9.65997 1.92253 7.75063 0.776611 5.21841 0.776611C2.68619 0.776611 0.776855 1.92253 0.776855 3.44155V9.65973C0.776855 11.1787 2.68619 12.3247 5.21841 12.3247ZM5.21841 2.55323C6.93818 2.55323 7.88335 3.22036 7.88335 3.44155C7.88335 3.66274 6.93818 4.32986 5.21841 4.32986C3.49864 4.32986 2.55348 3.66274 2.55348 3.44155C2.55348 3.22036 3.49864 2.55323 5.21841 2.55323ZM2.55348 5.59161C3.28758 5.91345 4.19756 6.10648 5.21841 6.10648C6.23926 6.10648 7.14925 5.91345 7.88335 5.59161V9.65973C7.88335 9.88091 6.93818 10.548 5.21841 10.548C3.49864 10.548 2.55348 9.88091 2.55348 9.65973V5.59161Z" fill="#CCC9BE"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          /*#__PURE__*/ p(h.div, {
                            className: `framer-1yfemwf`,
                            "data-framer-name": `Frame 1321316440`,
                            layoutDependency: R,
                            layoutId: `Wk23h7b6b`,
                            children: [
                              /*#__PURE__*/ p(h.div, {
                                className: `framer-1thgccb`,
                                "data-framer-name": `Frame 1321316437`,
                                layoutDependency: R,
                                layoutId: `xr8x5TAzK`,
                                children: [
                                  /*#__PURE__*/ f(w, {
                                    className: `framer-8tkjwg`,
                                    "data-framer-name": `Line 124`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 94,
                                    intrinsicWidth: 12,
                                    layoutDependency: R,
                                    layoutId: `KQJhHoPtR`,
                                    svg: `<svg width="12" height="94" viewBox="-3 -3 12 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="2.55566" y1="1.09278e-07" x2="2.55566" y2="88" stroke="#73B200" stroke-width="5"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-a670v5`,
                                    "data-framer-name": `Frame 1321316436`,
                                    layoutDependency: R,
                                    layoutId: `YlWql0UtV`,
                                    children: [
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v4`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                                                "--framer-font-family": `Poppins`,
                                                "--framer-font-size": `24px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `600`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `25px`,
                                              },
                                              children: `支持MQTT、OPC UA、Modbus等`,
                                            }),
                                          }),
                                        className: `framer-1y2jfc7`,
                                        "data-framer-name": `Supports MQTT, OPC UA, Modbus, and More`,
                                        fonts: [`GF;Poppins-600`],
                                        layoutDependency: R,
                                        layoutId: `y0MIozVvE`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v5`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `21.29px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `25px`,
                                              },
                                              children: `无缝连接多种工业协议，以实现灵活的数据采集。`,
                                            }),
                                          }),
                                        className: `framer-3oncoc`,
                                        "data-framer-name": `Seamlessly connect to a wide range of industrial protocols for flexible data acquisition.`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: R,
                                        layoutId: `jHFfzju4B`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ p(h.div, {
                                className: `framer-49z2af`,
                                "data-framer-name": `Frame 1321316438`,
                                layoutDependency: R,
                                layoutId: `mb9kRl3Ym`,
                                children: [
                                  /*#__PURE__*/ f(w, {
                                    className: `framer-rmvt08`,
                                    "data-framer-name": `Line 124`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 94,
                                    intrinsicWidth: 12,
                                    layoutDependency: R,
                                    layoutId: `r2Od9urOD`,
                                    svg: `<svg width="12" height="94" viewBox="-3 -3 12 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="2.55566" y1="1.09278e-07" x2="2.55566" y2="88" stroke="#73B200" stroke-width="5"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-182r4p1`,
                                    "data-framer-name": `Frame 1321316436`,
                                    layoutDependency: R,
                                    layoutId: `eiXw0zgC3`,
                                    children: [
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v6`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                                                "--framer-font-family": `Poppins`,
                                                "--framer-font-size": `24px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `600`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `25px`,
                                              },
                                              children: `自定义警报和推送通知`,
                                            }),
                                          }),
                                        className: `framer-fjccvs`,
                                        "data-framer-name": `Custom Alerts & Push Notifications`,
                                        fonts: [`GF;Poppins-600`],
                                        layoutDependency: R,
                                        layoutId: `z1vf8T1w4`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v7`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `21.29px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `25px`,
                                              },
                                              children: `配置实时警报，以快速响应异常生产事件。`,
                                            }),
                                          }),
                                        className: `framer-1tns0jm`,
                                        "data-framer-name": `Configure real-time alerts to quickly respond to abnormal production events.`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: R,
                                        layoutId: `kZsR9ZEHW`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ p(h.div, {
                                className: `framer-1buqnj1`,
                                "data-framer-name": `Frame 1321316439`,
                                layoutDependency: R,
                                layoutId: `dG7i3K5KN`,
                                children: [
                                  /*#__PURE__*/ f(w, {
                                    className: `framer-12t34m`,
                                    "data-framer-name": `Line 124`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 94,
                                    intrinsicWidth: 12,
                                    layoutDependency: R,
                                    layoutId: `DyaKnZ_38`,
                                    svg: `<svg width="12" height="94" viewBox="-3 -3 12 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="2.55566" y1="1.09278e-07" x2="2.55566" y2="88" stroke="#73B200" stroke-width="5"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-1of36y8`,
                                    "data-framer-name": `Frame 1321316436`,
                                    layoutDependency: R,
                                    layoutId: `wdvR3h0um`,
                                    children: [
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v8`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                                                "--framer-font-family": `Poppins`,
                                                "--framer-font-size": `24px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `600`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `25px`,
                                              },
                                              children: `即时OEE仪表板与Node-RED`,
                                            }),
                                          }),
                                        className: `framer-1vmzs0f`,
                                        "data-framer-name": `Instant OEE Dashboard with Node-RED`,
                                        fonts: [`GF;Poppins-600`],
                                        layoutDependency: R,
                                        layoutId: `u_AAtfVdu`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v9`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `21.29px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `25px`,
                                              },
                                              children: `开箱即用的预构建 OEE 可视化——通过 Node-RED 工作流完全可扩展。`,
                                            }),
                                          }),
                                        className: `framer-znkqpj`,
                                        "data-framer-name": `Prebuilt OEE visualizations out of the box — fully extendable via Node-RED workflows.`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: R,
                                        layoutId: `jktkP9Rmb`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          he() &&
                            /*#__PURE__*/ f(h.div, {
                              className: `framer-w24uld`,
                              layoutDependency: R,
                              layoutId: `EuqvH5Zrj`,
                              children: /*#__PURE__*/ f(L, {
                                href: `https://www.youtube.com/watch?v=IP1BUiHD7Qs`,
                                motionChild: !0,
                                nodeId: `BkJtYNXrt`,
                                openInNewTab: !0,
                                scopeId: `b6D6eMBMO`,
                                children: /*#__PURE__*/ p(h.a, {
                                  className: `framer-1stijj0 framer-1k8wezx`,
                                  layoutDependency: R,
                                  layoutId: `BkJtYNXrt`,
                                  children: [
                                    /*#__PURE__*/ f(U, {
                                      animated: !0,
                                      className: `framer-81hkky`,
                                      layoutDependency: R,
                                      layoutId: `w2CthXSAa`,
                                      style: {
                                        "--1335ju": 1.5,
                                        "--18mrqx2": `rgb(88, 91, 98)`,
                                        "--3it368": 1,
                                      },
                                    }),
                                    /*#__PURE__*/ f(g, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        W(`v10`, c) ??
                                        /*#__PURE__*/ f(o, {
                                          children: /*#__PURE__*/ f(h.h6, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy0zMDBpdGFsaWM=`,
                                              "--framer-font-family": `"IBM Plex Sans"`,
                                              "--framer-font-size": `20px`,
                                              "--framer-font-style": `italic`,
                                              "--framer-font-variation-axes": `var(--extracted-l1lhml, normal)`,
                                              "--framer-font-weight": `300`,
                                              "--framer-line-height": `130%`,
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--extracted-1w1cjl5, rgb(88, 91, 98))`,
                                            },
                                            children: /*#__PURE__*/ f(h.strong, {
                                              children: `观看快速指南视频`,
                                            }),
                                          }),
                                        }),
                                      className: `framer-1q3eh9h`,
                                      "data-framer-name": `Transform Your digital Journey with supOS`,
                                      fonts: [
                                        `GF;IBM Plex Sans-300italic`,
                                        `GF;IBM Plex Sans-italic`,
                                      ],
                                      layoutDependency: R,
                                      layoutId: `K_OUjS2dx`,
                                      style: {
                                        "--extracted-1w1cjl5": `rgb(88, 91, 98)`,
                                        "--extracted-l1lhml": `normal`,
                                        "--framer-paragraph-spacing": `0px`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                            }),
                        ],
                      }),
                    z() &&
                      /*#__PURE__*/ f(j, {
                        action: `https://api.framer.com/forms/v1/forms/ef1b165c-5f89-4116-94d6-f913cd5fa125/submit`,
                        className: `framer-nebchc`,
                        "data-framer-name": `Form3`,
                        layoutDependency: R,
                        layoutId: `nk29y0JvL`,
                        nodeId: `nk29y0JvL`,
                        redirectUrl: `https://supos-ce-instance3.supos.app:8443/home`,
                        style: {
                          backgroundColor: `rgb(250, 250, 250)`,
                          borderBottomLeftRadius: 6.77,
                          borderBottomRightRadius: 6.77,
                          borderTopLeftRadius: 6.77,
                          borderTopRightRadius: 6.77,
                        },
                        children: (e) =>
                          /*#__PURE__*/ p(u, {
                            children: [
                              /*#__PURE__*/ f(g, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ f(o, {
                                  children: /*#__PURE__*/ f(h.h3, {
                                    style: {
                                      "--font-selector": `RlM7UG9wcGlucy1tZWRpdW0=`,
                                      "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                      "--framer-font-size": `27px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.04em`,
                                      "--framer-line-height": `1.4em`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-a0htzi, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                    },
                                    children: `Try supOS instantly`,
                                  }),
                                }),
                                className: `framer-57idxl`,
                                "data-framer-name": `Get in Touch with Strat Edge`,
                                fonts: [`FS;Poppins-medium`],
                                layoutDependency: R,
                                layoutId: `ErkyT_8uc`,
                                style: {
                                  "--extracted-a0htzi": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                  "--framer-paragraph-spacing": `0px`,
                                },
                                text: b,
                                verticalAlignment: `center`,
                                withExternalLayout: !0,
                              }),
                              /*#__PURE__*/ f(h.div, {
                                className: `framer-689jws`,
                                layoutDependency: R,
                                layoutId: `T7vA7P1cr`,
                                children: /*#__PURE__*/ f(h.label, {
                                  className: `framer-1pswzto`,
                                  layoutDependency: R,
                                  layoutId: `FjI87sGCw`,
                                  children: /*#__PURE__*/ f(F, {
                                    className: `framer-3gp26u`,
                                    inputName: `Name`,
                                    layoutDependency: R,
                                    layoutId: `C8HHuilQ_`,
                                    placeholder: W(`v11`, c) ?? `姓名`,
                                    required: !0,
                                    style: {
                                      "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                      "--framer-input-border-bottom-width": `1.35px`,
                                      "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                      "--framer-input-border-left-width": `1.35px`,
                                      "--framer-input-border-radius-bottom-left": `4.06px`,
                                      "--framer-input-border-radius-bottom-right": `4.06px`,
                                      "--framer-input-border-radius-top-left": `4.06px`,
                                      "--framer-input-border-radius-top-right": `4.06px`,
                                      "--framer-input-border-right-width": `1.35px`,
                                      "--framer-input-border-style": `solid`,
                                      "--framer-input-border-top-width": `1.35px`,
                                      "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                      "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                      "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                    },
                                    type: `text`,
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ f(h.label, {
                                className: `framer-1om2rt6`,
                                layoutDependency: R,
                                layoutId: `QBnyHdE_r`,
                                children: /*#__PURE__*/ f(F, {
                                  className: `framer-ef7fix`,
                                  inputName: `Email`,
                                  layoutDependency: R,
                                  layoutId: `eAL17eM5L`,
                                  placeholder: W(`v12`, c) ?? `电子邮件`,
                                  required: !0,
                                  style: {
                                    "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                    "--framer-input-border-bottom-width": `1.35px`,
                                    "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                    "--framer-input-border-left-width": `1.35px`,
                                    "--framer-input-border-radius-bottom-left": `4.06px`,
                                    "--framer-input-border-radius-bottom-right": `4.06px`,
                                    "--framer-input-border-radius-top-left": `4.06px`,
                                    "--framer-input-border-radius-top-right": `4.06px`,
                                    "--framer-input-border-right-width": `1.35px`,
                                    "--framer-input-border-style": `solid`,
                                    "--framer-input-border-top-width": `1.35px`,
                                    "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                    "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                    "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                  },
                                  type: `email`,
                                }),
                              }),
                              /*#__PURE__*/ f(k, {
                                height: 37.94,
                                ...X(
                                  {
                                    JmjQOVIT8: {
                                      width: `284.52px`,
                                      y: (d?.y || 0) + ((d?.height || 200) - 900) / 2 + 602.165,
                                    },
                                  },
                                  C,
                                  N
                                ),
                                children: /*#__PURE__*/ f(P, {
                                  className: `framer-1nyep5m-container`,
                                  layoutDependency: R,
                                  layoutId: `q_tAAktmC-container`,
                                  nodeId: `q_tAAktmC`,
                                  rendersWithMotion: !0,
                                  scopeId: `b6D6eMBMO`,
                                  children: /*#__PURE__*/ f(st, {
                                    height: `100%`,
                                    id: `q_tAAktmC`,
                                    layoutId: `q_tAAktmC`,
                                    style: { height: `100%`, width: `100%` },
                                    type: `submit`,
                                    variant: Q(
                                      e,
                                      {
                                        error: `tREbu9dxY`,
                                        incomplete: `OsCx0OZ4e`,
                                        pending: `dE0c2HPRe`,
                                        success: `odJt_Ezn2`,
                                      },
                                      Z(`OyBVIoN_s`)
                                    ),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ p(h.label, {
                                className: `framer-b5qyoo`,
                                layoutDependency: R,
                                layoutId: `Inngc1veJ`,
                                children: [
                                  /*#__PURE__*/ f(A, {
                                    className: `framer-evyyw7`,
                                    defaultChecked: !1,
                                    inputName: `Consent checkbox`,
                                    layoutDependency: R,
                                    layoutId: `brj178_7I`,
                                    required: !0,
                                    style: {
                                      "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                      "--framer-input-boolean-checked-background": `rgb(0, 153, 255)`,
                                      "--framer-input-border-radius-bottom-left": `4.06px`,
                                      "--framer-input-border-radius-bottom-right": `4.06px`,
                                      "--framer-input-border-radius-top-left": `4.06px`,
                                      "--framer-input-border-radius-top-right": `4.06px`,
                                      "--framer-input-icon-color": `rgb(255, 255, 255)`,
                                    },
                                    type: `checkbox`,
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-13s0jrv`,
                                    layoutDependency: R,
                                    layoutId: `qC1tRqoJQ`,
                                    children: [
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v13`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `9px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(153, 153, 153))`,
                                              },
                                              children: `同意方可提交，您可以随时通过我们的电子邮件链接退订。`,
                                            }),
                                          }),
                                        className: `framer-17x5z4y`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: R,
                                        layoutId: `o3BJmPT1G`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--extracted-r6o4lv": `rgb(153, 153, 153)`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v14`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ p(h.p, {
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                "--framer-font-size": `9px`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-27988b78-4da3-419a-9346-60402ee10374, rgb(195, 196, 197)))`,
                                              },
                                              children: [
                                                /*#__PURE__*/ f(h.em, {
                                                  children: `我同意接收 FREEZONEX 的邮件与更新，并同意按以下政策处理我的个人数据：  `,
                                                }),
                                                /*#__PURE__*/ f(L, {
                                                  href: { webPageId: `fHDmqdJOv` },
                                                  motionChild: !0,
                                                  nodeId: `HfZoVv6nN`,
                                                  openInNewTab: !1,
                                                  relValues: [],
                                                  scopeId: `b6D6eMBMO`,
                                                  smoothScroll: !1,
                                                  children: /*#__PURE__*/ f(h.a, {
                                                    className: `framer-styles-preset-1cuew56`,
                                                    "data-styles-preset": `U42XhPPDq`,
                                                    children: /*#__PURE__*/ f(h.em, {
                                                      children: `隐私政策`,
                                                    }),
                                                  }),
                                                }),
                                                /*#__PURE__*/ f(h.em, { children: `.` }),
                                              ],
                                            }),
                                          }),
                                        className: `framer-10fy9ca`,
                                        fonts: [
                                          `GF;IBM Plex Sans-regular`,
                                          `GF;IBM Plex Sans-italic`,
                                        ],
                                        layoutDependency: R,
                                        layoutId: `HfZoVv6nN`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-27988b78-4da3-419a-9346-60402ee10374, rgb(195, 196, 197))`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ge() &&
                      /*#__PURE__*/ p(M, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 3232.5,
                          intrinsicWidth: 2500.5,
                          pixelHeight: 6465,
                          pixelWidth: 5001,
                          src: `https://framerusercontent.com/images/yEkSVLb3KuJDagnTmxHtomuGk.png?width=5001&height=6465`,
                          srcSet: `https://framerusercontent.com/images/yEkSVLb3KuJDagnTmxHtomuGk.png?scale-down-to=1024&width=5001&height=6465 792w,https://framerusercontent.com/images/yEkSVLb3KuJDagnTmxHtomuGk.png?scale-down-to=2048&width=5001&height=6465 1584w,https://framerusercontent.com/images/yEkSVLb3KuJDagnTmxHtomuGk.png?scale-down-to=4096&width=5001&height=6465 3168w,https://framerusercontent.com/images/yEkSVLb3KuJDagnTmxHtomuGk.png?width=5001&height=6465 5001w`,
                        },
                        className: `framer-1kbgh70`,
                        "data-framer-name": `Frame 195`,
                        layoutDependency: R,
                        layoutId: `uBtJ3f9z6`,
                        ...X(
                          {
                            DvyeWzNeF: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 3232.5,
                                intrinsicWidth: 2500.5,
                                loading: x((d?.y || 0) + ((d?.height || 200) - 932.5) / 2),
                                pixelHeight: 6465,
                                pixelWidth: 5001,
                                sizes: `720px`,
                                src: `https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?width=5001&height=6465`,
                                srcSet: `https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=1024&width=5001&height=6465 792w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=2048&width=5001&height=6465 1584w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=4096&width=5001&height=6465 3168w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?width=5001&height=6465 5001w`,
                              },
                            },
                            JUnTBSkGe: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 3232.5,
                                intrinsicWidth: 2500.5,
                                loading: x((d?.y || 0) + ((d?.height || 200) - 700) / 2),
                                pixelHeight: 2106,
                                pixelWidth: 4560,
                                sizes: `390px`,
                                src: `https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?width=4560&height=2106`,
                                srcSet: `https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?scale-down-to=512&width=4560&height=2106 512w,https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?scale-down-to=1024&width=4560&height=2106 1024w,https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?scale-down-to=2048&width=4560&height=2106 2048w,https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?scale-down-to=4096&width=4560&height=2106 4096w,https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?width=4560&height=2106 4560w`,
                              },
                            },
                            kv0ktgdgd: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 3232.5,
                                intrinsicWidth: 2500.5,
                                loading: x((d?.y || 0) + ((d?.height || 200) - 932.5) / 2),
                                pixelHeight: 6465,
                                pixelWidth: 5001,
                                sizes: `720px`,
                                src: `https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?width=5001&height=6465`,
                                srcSet: `https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=1024&width=5001&height=6465 792w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=2048&width=5001&height=6465 1584w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=4096&width=5001&height=6465 3168w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?width=5001&height=6465 5001w`,
                              },
                            },
                            nCrBGHnJQ: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 3232.5,
                                intrinsicWidth: 2500.5,
                                loading: x((d?.y || 0) + ((d?.height || 200) - 526) / 2),
                                pixelHeight: 4468,
                                pixelWidth: 3456,
                                sizes: `405px`,
                                src: `https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?width=3456&height=4468`,
                                srcSet: `https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=1024&width=3456&height=4468 792w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=2048&width=3456&height=4468 1584w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=4096&width=3456&height=4468 3168w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?width=3456&height=4468 3456w`,
                              },
                            },
                            PQHwzDtoU: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 3232.5,
                                intrinsicWidth: 2500.5,
                                loading: x((d?.y || 0) + ((d?.height || 645) - 645) / 2 + 1),
                                pixelHeight: 2106,
                                pixelWidth: 4560,
                                sizes: `390px`,
                                src: `https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?width=4560&height=2106`,
                                srcSet: `https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?scale-down-to=512&width=4560&height=2106 512w,https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?scale-down-to=1024&width=4560&height=2106 1024w,https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?scale-down-to=2048&width=4560&height=2106 2048w,https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?scale-down-to=4096&width=4560&height=2106 4096w,https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?width=4560&height=2106 4560w`,
                              },
                            },
                            r0HMMwwih: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 3232.5,
                                intrinsicWidth: 2500.5,
                                loading: x((d?.y || 0) + ((d?.height || 200) - 741) / 2),
                                pixelHeight: 2106,
                                pixelWidth: 4560,
                                sizes: `390px`,
                                src: `https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?width=4560&height=2106`,
                                srcSet: `https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?scale-down-to=512&width=4560&height=2106 512w,https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?scale-down-to=1024&width=4560&height=2106 1024w,https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?scale-down-to=2048&width=4560&height=2106 2048w,https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?scale-down-to=4096&width=4560&height=2106 4096w,https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?width=4560&height=2106 4560w`,
                              },
                            },
                            tiROO0mLG: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 3232.5,
                                intrinsicWidth: 2500.5,
                                loading: x((d?.y || 0) + ((d?.height || 515) - 514) / 2),
                                pixelHeight: 6465,
                                pixelWidth: 5001,
                                sizes: `405px`,
                                src: `https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?width=5001&height=6465`,
                                srcSet: `https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=1024&width=5001&height=6465 792w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=2048&width=5001&height=6465 1584w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=4096&width=5001&height=6465 3168w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?width=5001&height=6465 5001w`,
                              },
                            },
                            WRk6qS5nD: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 3232.5,
                                intrinsicWidth: 2500.5,
                                loading: x((d?.y || 0) + ((d?.height || 200) - 521) / 2),
                                pixelHeight: 6465,
                                pixelWidth: 5001,
                                sizes: `405px`,
                                src: `https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?width=5001&height=6465`,
                                srcSet: `https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=1024&width=5001&height=6465 792w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=2048&width=5001&height=6465 1584w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=4096&width=5001&height=6465 3168w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?width=5001&height=6465 5001w`,
                              },
                            },
                            zV_a3X7Sf: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 3232.5,
                                intrinsicWidth: 2500.5,
                                loading: x((d?.y || 0) + ((d?.height || 200) - 641) / 2 + 0.5),
                                pixelHeight: 2106,
                                pixelWidth: 4560,
                                sizes: `390px`,
                                src: `https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?width=4560&height=2106`,
                                srcSet: `https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?scale-down-to=512&width=4560&height=2106 512w,https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?scale-down-to=1024&width=4560&height=2106 1024w,https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?scale-down-to=2048&width=4560&height=2106 2048w,https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?scale-down-to=4096&width=4560&height=2106 4096w,https://framerusercontent.com/images/9yNkQ5BptrlmX7xvWJT8dEOkqY4.png?width=4560&height=2106 4560w`,
                              },
                            },
                          },
                          C,
                          N
                        ),
                        children: [
                          _e() &&
                            /*#__PURE__*/ f(L, {
                              href: `https://instance5.tier0.app:8443/home`,
                              motionChild: !0,
                              nodeId: `aZBAMakkx`,
                              openInNewTab: !0,
                              scopeId: `b6D6eMBMO`,
                              children: /*#__PURE__*/ f(w, {
                                as: `a`,
                                className: `framer-1dal53u framer-1k8wezx`,
                                "data-framer-name": `Union`,
                                layout: `position`,
                                layoutDependency: R,
                                layoutId: `aZBAMakkx`,
                                opacity: 1,
                                style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21 20"><path d="M 19.297 10.755 C 21.515 8.231 21.44 4.339 19.07 1.908 C 16.697 -0.526 12.893 -0.6 10.433 1.687 C 7.971 -0.507 4.237 -0.403 1.895 1.999 C -0.553 4.509 -0.553 8.58 1.895 11.09 L 1.909 11.104 C 1.917 11.112 1.925 11.121 1.933 11.129 L 10.494 19.91 L 19.358 10.818 Z" fill="rgba(255, 255, 255, 0)"></path></svg>`,
                                svgContentId: 11650846229,
                                withExternalLayout: !0,
                                ...X({ nCrBGHnJQ: { svgContentId: 9296703400 } }, C, N),
                              }),
                            }),
                          ve() &&
                            /*#__PURE__*/ f(L, {
                              href: `https://supos-ce-instance1.supos.app:8443/home`,
                              motionChild: !0,
                              nodeId: `UY6Tnqdzs`,
                              openInNewTab: !0,
                              scopeId: `b6D6eMBMO`,
                              ...X(
                                {
                                  PQHwzDtoU: { href: `https://tier0-edge-playground2.tier0.app/` },
                                  zV_a3X7Sf: { href: `https://tier0-edge-playground1.tier0.app/` },
                                },
                                C,
                                N
                              ),
                              children: /*#__PURE__*/ f(w, {
                                as: `a`,
                                className: `framer-14vkwpp framer-1k8wezx`,
                                "data-framer-name": `Union`,
                                layout: `position`,
                                layoutDependency: R,
                                layoutId: `UY6Tnqdzs`,
                                opacity: 1,
                                style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21 20"><path d="M 19.297 10.755 C 21.515 8.231 21.44 4.339 19.07 1.908 C 16.697 -0.526 12.893 -0.6 10.433 1.687 C 7.971 -0.507 4.237 -0.403 1.895 1.999 C -0.553 4.509 -0.553 8.58 1.895 11.09 L 1.909 11.104 C 1.917 11.112 1.925 11.121 1.933 11.129 L 10.494 19.91 L 19.358 10.818 Z" fill="rgba(255, 255, 255, 0)"></path></svg>`,
                                svgContentId: 9097430407,
                                withExternalLayout: !0,
                                ...X(
                                  {
                                    PQHwzDtoU: { svgContentId: 11514335067 },
                                    zV_a3X7Sf: {
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21 20"><path d="M 18.358 8.818 Z" fill="rgba(255, 255, 255, 0)"></path></svg>`,
                                      svgContentId: 8872579040,
                                    },
                                  },
                                  C,
                                  N
                                ),
                              }),
                            }),
                          be() &&
                            /*#__PURE__*/ f(L, {
                              href: `https://supos-ce-instance2.supos.app:8443/home`,
                              motionChild: !0,
                              nodeId: `Lnq89mWCA`,
                              openInNewTab: !0,
                              scopeId: `b6D6eMBMO`,
                              ...X(
                                {
                                  DvyeWzNeF: {
                                    href: `https://supos-ce-instance5.supos.app:8443/home`,
                                  },
                                  kv0ktgdgd: {
                                    href: `https://supos-ce-instance4.supos.app:8443/home`,
                                  },
                                  tiROO0mLG: {
                                    href: `https://supos-ce-instance5.supos.app:8443/home`,
                                  },
                                  WRk6qS5nD: {
                                    href: `https://supos-ce-instance4.supos.app:8443/home`,
                                  },
                                },
                                C,
                                N
                              ),
                              children: /*#__PURE__*/ f(w, {
                                as: `a`,
                                className: `framer-1b770nn framer-1k8wezx`,
                                "data-framer-name": `Union`,
                                layout: `position`,
                                layoutDependency: R,
                                layoutId: `Lnq89mWCA`,
                                opacity: 1,
                                style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53 50"><path d="M 48.701 26.888 C 54.301 20.578 54.11 10.847 48.129 4.771 C 42.139 -1.315 32.54 -1.5 26.331 4.217 C 20.117 -1.268 10.693 -1.008 4.783 4.997 C -1.394 11.273 -1.394 21.449 4.783 27.725 L 4.817 27.76 C 4.838 27.781 4.858 27.802 4.879 27.823 L 26.485 49.774 L 48.857 27.045 Z" fill="rgba(255, 255, 255, 0)"></path></svg>`,
                                svgContentId: 10317510392,
                                withExternalLayout: !0,
                                ...X(
                                  {
                                    DvyeWzNeF: { svgContentId: 12866500186 },
                                    kv0ktgdgd: { svgContentId: 10980793831 },
                                    tiROO0mLG: { svgContentId: 9863134972 },
                                    WRk6qS5nD: { svgContentId: 11225003127 },
                                  },
                                  C,
                                  N
                                ),
                              }),
                            }),
                          xe() &&
                            /*#__PURE__*/ f(L, {
                              href: `https://supos-ce-instance3.supos.app:8443/home`,
                              motionChild: !0,
                              nodeId: `Kpn6ogmyi`,
                              openInNewTab: !0,
                              scopeId: `b6D6eMBMO`,
                              ...X(
                                {
                                  JUnTBSkGe: {
                                    href: `https://supos-ce-instance5.supos.app:8443/home`,
                                  },
                                  r0HMMwwih: {
                                    href: `https://supos-ce-instance4.supos.app:8443/home`,
                                  },
                                },
                                C,
                                N
                              ),
                              children: /*#__PURE__*/ f(w, {
                                as: `a`,
                                className: `framer-1qectq framer-1k8wezx`,
                                "data-framer-name": `Union`,
                                layout: `position`,
                                layoutDependency: R,
                                layoutId: `Kpn6ogmyi`,
                                opacity: 1,
                                style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 51 48"><path d="M 46.864 25.812 C 52.252 19.755 52.068 10.413 46.313 4.58 C 40.549 -1.262 31.312 -1.44 25.337 4.048 C 19.358 -1.217 10.29 -0.967 4.603 4.797 C -1.342 10.822 -1.342 20.591 4.603 26.616 L 4.636 26.65 C 4.655 26.67 4.675 26.69 4.695 26.71 L 25.486 47.783 L 47.013 25.964 Z" fill="rgba(255, 255, 255, 0)"></path></svg>`,
                                svgContentId: 11567549400,
                                withExternalLayout: !0,
                                ...X(
                                  {
                                    JUnTBSkGe: {
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28.36 26.69"><path d="M 26.143 14.438 Z" fill="rgba(255, 255, 255, 0)"></path></svg>`,
                                      svgContentId: 10488663347,
                                    },
                                    r0HMMwwih: {
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 27"><path d="M 32.563 17.936 C 36.307 13.727 36.18 7.236 32.181 3.182 C 28.176 -0.877 21.757 -1 17.606 2.813 C 13.451 -0.846 7.15 -0.672 3.198 3.333 C -0.932 7.52 -0.932 14.308 3.198 18.494 L 3.221 18.518 C 3.235 18.532 3.248 18.546 3.262 18.559 L 17.709 33.202 L 32.667 18.041 Z" fill="rgba(255, 255, 255, 0)"></path></svg>`,
                                      svgContentId: 8702934450,
                                    },
                                  },
                                  C,
                                  N
                                ),
                              }),
                            }),
                          Se() &&
                            /*#__PURE__*/ f(L, {
                              href: `https://supos-ce-instance3.supos.app:8443/home`,
                              motionChild: !0,
                              nodeId: `QGNpmhr5M`,
                              openInNewTab: !0,
                              scopeId: `b6D6eMBMO`,
                              children: /*#__PURE__*/ f(w, {
                                as: `a`,
                                className: `framer-1qgixg2 framer-1k8wezx`,
                                "data-framer-name": `Union`,
                                layout: `position`,
                                layoutDependency: R,
                                layoutId: `QGNpmhr5M`,
                                opacity: 1,
                                style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 51 48"><path d="M 46.864 25.812 C 52.252 19.755 52.068 10.413 46.313 4.58 C 40.549 -1.262 31.312 -1.44 25.337 4.048 C 19.358 -1.217 10.29 -0.967 4.603 4.797 C -1.342 10.822 -1.342 20.591 4.603 26.616 L 4.636 26.65 C 4.655 26.67 4.675 26.69 4.695 26.71 L 25.486 47.783 L 47.013 25.964 Z" fill="rgba(255, 255, 255, 0)"></path></svg>`,
                                svgContentId: 10526906833,
                                withExternalLayout: !0,
                              }),
                            }),
                          we() &&
                            /*#__PURE__*/ f(h.div, {
                              className: `framer-pkelp2`,
                              layoutDependency: R,
                              layoutId: `ARndnGDsw`,
                              style: { backgroundColor: `rgb(244, 244, 244)` },
                            }),
                          Te() &&
                            /*#__PURE__*/ f(h.div, {
                              className: `framer-1lcm81d`,
                              layoutDependency: R,
                              layoutId: `DAMPt63ZA`,
                              style: { backgroundColor: `rgb(244, 244, 244)` },
                            }),
                          Te() &&
                            /*#__PURE__*/ f(k, {
                              height: 34,
                              width: `35px`,
                              ...X(
                                {
                                  DvyeWzNeF: {
                                    y: (d?.y || 0) + ((d?.height || 200) - 932.5) / 2 + 55,
                                  },
                                  JUnTBSkGe: {
                                    y: (d?.y || 0) + ((d?.height || 200) - 700) / 2 + 55,
                                  },
                                  kv0ktgdgd: {
                                    y: (d?.y || 0) + ((d?.height || 200) - 932.5) / 2 + 55,
                                  },
                                  PQHwzDtoU: {
                                    y: (d?.y || 0) + ((d?.height || 645) - 645) / 2 + 136,
                                  },
                                  r0HMMwwih: {
                                    y: (d?.y || 0) + ((d?.height || 200) - 741) / 2 + 55,
                                  },
                                  tiROO0mLG: {
                                    y: (d?.y || 0) + ((d?.height || 515) - 514) / 2 + 55,
                                  },
                                  WRk6qS5nD: {
                                    y: (d?.y || 0) + ((d?.height || 200) - 521) / 2 + 55,
                                  },
                                  zV_a3X7Sf: {
                                    y: (d?.y || 0) + ((d?.height || 200) - 641) / 2 + 132.5,
                                  },
                                },
                                C,
                                N
                              ),
                              children: /*#__PURE__*/ f(P, {
                                className: `framer-unmul8-container`,
                                layoutDependency: R,
                                layoutId: `GoYOr837Z-container`,
                                nodeId: `GoYOr837Z`,
                                rendersWithMotion: !0,
                                scopeId: `b6D6eMBMO`,
                                children: /*#__PURE__*/ f(ut, {
                                  height: `100%`,
                                  id: `GoYOr837Z`,
                                  layoutId: `GoYOr837Z`,
                                  style: { width: `100%` },
                                  SUDKt4blH: H,
                                  variant: Z(`bEVQvMdck`),
                                  width: `100%`,
                                  ...X({ zV_a3X7Sf: { SUDKt4blH: void 0 } }, C, N),
                                }),
                              }),
                            }),
                        ],
                      }),
                    De() &&
                      /*#__PURE__*/ f(M, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 3232.5,
                          intrinsicWidth: 2500.5,
                          pixelHeight: 4468,
                          pixelWidth: 3456,
                          src: `https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?width=3456&height=4468`,
                          srcSet: `https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=1024&width=3456&height=4468 792w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=2048&width=3456&height=4468 1584w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=4096&width=3456&height=4468 3168w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?width=3456&height=4468 3456w`,
                        },
                        className: `framer-1cdx8m`,
                        "data-framer-name": `Frame 195`,
                        layoutDependency: R,
                        layoutId: `CATc7eJSB`,
                        ...X(
                          {
                            uTGLNwn5B: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 3232.5,
                                intrinsicWidth: 2500.5,
                                loading: x((d?.y || 0) + ((d?.height || 200) - 525) / 2),
                                pixelHeight: 4468,
                                pixelWidth: 3456,
                                sizes: `405px`,
                                src: `https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?width=3456&height=4468`,
                                srcSet: `https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=1024&width=3456&height=4468 792w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=2048&width=3456&height=4468 1584w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=4096&width=3456&height=4468 3168w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?width=3456&height=4468 3456w`,
                              },
                            },
                          },
                          C,
                          N
                        ),
                        children: /*#__PURE__*/ f(L, {
                          href: `https://tier0-edge-playground2.tier0.app/`,
                          motionChild: !0,
                          nodeId: `M9fX0OoyJ`,
                          openInNewTab: !0,
                          scopeId: `b6D6eMBMO`,
                          children: /*#__PURE__*/ f(w, {
                            as: `a`,
                            className: `framer-57blbv framer-1k8wezx`,
                            "data-framer-name": `Union`,
                            layout: `position`,
                            layoutDependency: R,
                            layoutId: `M9fX0OoyJ`,
                            opacity: 1,
                            style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21 20"><path d="M 19.297 10.755 C 21.515 8.231 21.44 4.339 19.07 1.908 C 16.697 -0.526 12.893 -0.6 10.433 1.687 C 7.971 -0.507 4.237 -0.403 1.895 1.999 C -0.553 4.509 -0.553 8.58 1.895 11.09 L 1.909 11.104 C 1.917 11.112 1.925 11.121 1.933 11.129 L 10.494 19.91 L 19.358 10.818 Z" fill="rgba(255, 255, 255, 0)"></path></svg>`,
                            svgContentId: 10557229131,
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                    Oe() &&
                      /*#__PURE__*/ f(j, {
                        action: `https://api.framer.com/forms/v1/forms/e1c274b5-e267-489d-9030-1b65ab25e69f/submit`,
                        className: `framer-a7wjom`,
                        layoutDependency: R,
                        layoutId: `XBBIxHSnn`,
                        nodeId: `XBBIxHSnn`,
                        redirectUrl: `https://supos-ce-instance4.supos.app:8443/home`,
                        style: { backgroundColor: S },
                        variants: {
                          kv0ktgdgd: { backgroundColor: `rgba(255, 255, 255, 0)` },
                          WRk6qS5nD: { backgroundColor: `rgba(255, 255, 255, 0)` },
                        },
                        children: (e) =>
                          /*#__PURE__*/ p(u, {
                            children: [
                              /*#__PURE__*/ f(g, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ f(o, {
                                  children: /*#__PURE__*/ f(h.h3, {
                                    className: `framer-styles-preset-kzlevi`,
                                    "data-styles-preset": `UIw3tgmjU`,
                                    style: { "--framer-text-alignment": `center` },
                                    children: `Try supOS instantly`,
                                  }),
                                }),
                                className: `framer-11f2pu`,
                                "data-framer-name": `Get in Touch with Strat Edge`,
                                fonts: [`Inter`],
                                layoutDependency: R,
                                layoutId: `RPYpZKNWA`,
                                style: { "--framer-paragraph-spacing": `0px` },
                                text: b,
                                verticalAlignment: `center`,
                                withExternalLayout: !0,
                              }),
                              /*#__PURE__*/ f(h.div, {
                                className: `framer-75ln1x`,
                                layoutDependency: R,
                                layoutId: `Xw3W6MenQ`,
                                children: /*#__PURE__*/ f(h.label, {
                                  className: `framer-14ta8p1`,
                                  layoutDependency: R,
                                  layoutId: `s4YR9LiUR`,
                                  children: /*#__PURE__*/ f(F, {
                                    className: `framer-1uzvvs1`,
                                    inputName: `Name`,
                                    layoutDependency: R,
                                    layoutId: `woPpMBseu`,
                                    placeholder: W(`v11`, c) ?? `姓名`,
                                    required: !0,
                                    style: {
                                      "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                      "--framer-input-border-bottom-width": `1px`,
                                      "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                      "--framer-input-border-left-width": `1px`,
                                      "--framer-input-border-radius-bottom-left": `3px`,
                                      "--framer-input-border-radius-bottom-right": `3px`,
                                      "--framer-input-border-radius-top-left": `3px`,
                                      "--framer-input-border-radius-top-right": `3px`,
                                      "--framer-input-border-right-width": `1px`,
                                      "--framer-input-border-style": `solid`,
                                      "--framer-input-border-top-width": `1px`,
                                      "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                      "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                      "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                    },
                                    type: `text`,
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ p(h.label, {
                                className: `framer-15aqh8v`,
                                layoutDependency: R,
                                layoutId: `QEY8soQ3d`,
                                children: [
                                  /*#__PURE__*/ f(A, {
                                    className: `framer-1wewr4n`,
                                    defaultChecked: !1,
                                    inputName: `Consent checkbox`,
                                    layoutDependency: R,
                                    layoutId: `k492fQPdt`,
                                    required: !0,
                                    style: {
                                      "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                      "--framer-input-boolean-checked-background": `rgb(0, 153, 255)`,
                                      "--framer-input-border-radius-bottom-left": `3px`,
                                      "--framer-input-border-radius-bottom-right": `3px`,
                                      "--framer-input-border-radius-top-left": `3px`,
                                      "--framer-input-border-radius-top-right": `3px`,
                                      "--framer-input-icon-color": `rgb(255, 255, 255)`,
                                    },
                                    type: `checkbox`,
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-1ioi5o3`,
                                    layoutDependency: R,
                                    layoutId: `ddL6_qz57`,
                                    children: [
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v15`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `10px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(153, 153, 153))`,
                                              },
                                              children: `同意方可提交，您可以随时通过我们的电子邮件链接退订。`,
                                            }),
                                          }),
                                        className: `framer-1jui61v`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: R,
                                        layoutId: `cb3BJMnpr`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--extracted-r6o4lv": `rgb(153, 153, 153)`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v16`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ p(h.p, {
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                "--framer-font-size": `10px`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-27988b78-4da3-419a-9346-60402ee10374, rgb(195, 196, 197)))`,
                                              },
                                              children: [
                                                /*#__PURE__*/ f(h.em, {
                                                  children: `我同意接收 FREEZONEX 的邮件与更新，并同意按以下政策处理我的个人数据：  `,
                                                }),
                                                /*#__PURE__*/ f(L, {
                                                  href: { webPageId: `fHDmqdJOv` },
                                                  motionChild: !0,
                                                  nodeId: `aOZGJSZJg`,
                                                  openInNewTab: !1,
                                                  relValues: [],
                                                  scopeId: `b6D6eMBMO`,
                                                  smoothScroll: !1,
                                                  children: /*#__PURE__*/ f(h.a, {
                                                    className: `framer-styles-preset-1cuew56`,
                                                    "data-styles-preset": `U42XhPPDq`,
                                                    children: /*#__PURE__*/ f(h.em, {
                                                      children: `隐私政策`,
                                                    }),
                                                  }),
                                                }),
                                                /*#__PURE__*/ f(h.em, { children: `.` }),
                                              ],
                                            }),
                                          }),
                                        className: `framer-13j42yy`,
                                        fonts: [
                                          `GF;IBM Plex Sans-regular`,
                                          `GF;IBM Plex Sans-italic`,
                                        ],
                                        layoutDependency: R,
                                        layoutId: `aOZGJSZJg`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-27988b78-4da3-419a-9346-60402ee10374, rgb(195, 196, 197))`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ f(h.label, {
                                className: `framer-f1jhfk`,
                                layoutDependency: R,
                                layoutId: `VIqMOO0Rq`,
                                children: /*#__PURE__*/ f(F, {
                                  className: `framer-yqdkd8`,
                                  inputName: `Email`,
                                  layoutDependency: R,
                                  layoutId: `gkthIV8sv`,
                                  placeholder: W(`v12`, c) ?? `电子邮件`,
                                  required: !0,
                                  style: {
                                    "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                    "--framer-input-border-bottom-width": `1px`,
                                    "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                    "--framer-input-border-left-width": `1px`,
                                    "--framer-input-border-radius-bottom-left": `3px`,
                                    "--framer-input-border-radius-bottom-right": `3px`,
                                    "--framer-input-border-radius-top-left": `3px`,
                                    "--framer-input-border-radius-top-right": `3px`,
                                    "--framer-input-border-right-width": `1px`,
                                    "--framer-input-border-style": `solid`,
                                    "--framer-input-border-top-width": `1px`,
                                    "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                    "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                    "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                  },
                                  type: `email`,
                                }),
                              }),
                              /*#__PURE__*/ f(k, {
                                height: 40,
                                ...X(
                                  {
                                    kv0ktgdgd: {
                                      width: `481px`,
                                      y: (d?.y || 0) + ((d?.height || 200) - 932.5) / 2 + 608.6,
                                    },
                                    r0HMMwwih: {
                                      width: `290px`,
                                      y: (d?.y || 0) + ((d?.height || 200) - 741) / 2 + 602.6,
                                    },
                                    WRk6qS5nD: {
                                      width: `305px`,
                                      y: (d?.y || 0) + ((d?.height || 200) - 521) / 2 + 402.6,
                                    },
                                  },
                                  C,
                                  N
                                ),
                                children: /*#__PURE__*/ f(P, {
                                  className: `framer-1hpenta-container`,
                                  layoutDependency: R,
                                  layoutId: `jKVCtIoFL-container`,
                                  nodeId: `jKVCtIoFL`,
                                  rendersWithMotion: !0,
                                  scopeId: `b6D6eMBMO`,
                                  children: /*#__PURE__*/ f(ft, {
                                    height: `100%`,
                                    id: `jKVCtIoFL`,
                                    layoutId: `jKVCtIoFL`,
                                    style: { height: `100%`, width: `100%` },
                                    type: `submit`,
                                    variant: Q(
                                      e,
                                      {
                                        error: `tREbu9dxY`,
                                        incomplete: `OsCx0OZ4e`,
                                        pending: `dE0c2HPRe`,
                                        success: `odJt_Ezn2`,
                                      },
                                      Z(`OyBVIoN_s`)
                                    ),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                      }),
                    ke() &&
                      /*#__PURE__*/ f(j, {
                        action: `https://api.framer.com/forms/v1/forms/cd74f90c-beaf-4f2c-88cb-70196847ee05/submit`,
                        className: `framer-13gj0at`,
                        layoutDependency: R,
                        layoutId: `smsmlrAQc`,
                        nodeId: `smsmlrAQc`,
                        redirectUrl: `https://supos-ce-instance5.supos.app:8443/home`,
                        style: { backgroundColor: S },
                        variants: {
                          DvyeWzNeF: { backgroundColor: `rgba(255, 255, 255, 0)` },
                          tiROO0mLG: { backgroundColor: `rgba(255, 255, 255, 0)` },
                        },
                        children: (e) =>
                          /*#__PURE__*/ p(u, {
                            children: [
                              /*#__PURE__*/ f(g, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ f(o, {
                                  children: /*#__PURE__*/ f(h.h3, {
                                    className: `framer-styles-preset-kzlevi`,
                                    "data-styles-preset": `UIw3tgmjU`,
                                    style: { "--framer-text-alignment": `center` },
                                    children: `Try supOS instantly`,
                                  }),
                                }),
                                className: `framer-ohje4a`,
                                "data-framer-name": `Get in Touch with Strat Edge`,
                                fonts: [`Inter`],
                                layoutDependency: R,
                                layoutId: `GgwDoteUK`,
                                style: { "--framer-paragraph-spacing": `0px` },
                                text: b,
                                verticalAlignment: `center`,
                                withExternalLayout: !0,
                              }),
                              /*#__PURE__*/ f(h.div, {
                                className: `framer-1nler6r`,
                                layoutDependency: R,
                                layoutId: `UNe2Yp7X7`,
                                children: /*#__PURE__*/ f(h.label, {
                                  className: `framer-1nabwax`,
                                  layoutDependency: R,
                                  layoutId: `ubc0WbEwC`,
                                  children: /*#__PURE__*/ f(F, {
                                    className: `framer-1we3d8m`,
                                    inputName: `Name`,
                                    layoutDependency: R,
                                    layoutId: `gMWGnYKfp`,
                                    placeholder: W(`v11`, c) ?? `姓名`,
                                    required: !0,
                                    style: {
                                      "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                      "--framer-input-border-bottom-width": `1px`,
                                      "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                      "--framer-input-border-left-width": `1px`,
                                      "--framer-input-border-radius-bottom-left": `3px`,
                                      "--framer-input-border-radius-bottom-right": `3px`,
                                      "--framer-input-border-radius-top-left": `3px`,
                                      "--framer-input-border-radius-top-right": `3px`,
                                      "--framer-input-border-right-width": `1px`,
                                      "--framer-input-border-style": `solid`,
                                      "--framer-input-border-top-width": `1px`,
                                      "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                      "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                      "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                    },
                                    type: `text`,
                                    ...X(
                                      {
                                        DvyeWzNeF: { placeholder: W(`v17`, c) ?? `姓名` },
                                        JUnTBSkGe: { placeholder: W(`v17`, c) ?? `姓名` },
                                        tiROO0mLG: { placeholder: W(`v17`, c) ?? `姓名` },
                                      },
                                      C,
                                      N
                                    ),
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ f(h.label, {
                                className: `framer-18mn59k`,
                                layoutDependency: R,
                                layoutId: `fO4WS5p2x`,
                                children: /*#__PURE__*/ f(F, {
                                  className: `framer-x8cdy7`,
                                  inputName: `Email`,
                                  layoutDependency: R,
                                  layoutId: `KMFS36AmC`,
                                  placeholder: W(`v12`, c) ?? `电子邮件`,
                                  required: !0,
                                  style: {
                                    "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                    "--framer-input-border-bottom-width": `1px`,
                                    "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                    "--framer-input-border-left-width": `1px`,
                                    "--framer-input-border-radius-bottom-left": `3px`,
                                    "--framer-input-border-radius-bottom-right": `3px`,
                                    "--framer-input-border-radius-top-left": `3px`,
                                    "--framer-input-border-radius-top-right": `3px`,
                                    "--framer-input-border-right-width": `1px`,
                                    "--framer-input-border-style": `solid`,
                                    "--framer-input-border-top-width": `1px`,
                                    "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                    "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                    "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                  },
                                  type: `email`,
                                  ...X(
                                    {
                                      DvyeWzNeF: { placeholder: W(`v18`, c) ?? `电子邮件` },
                                      JUnTBSkGe: { placeholder: W(`v18`, c) ?? `电子邮件` },
                                      tiROO0mLG: { placeholder: W(`v18`, c) ?? `电子邮件` },
                                    },
                                    C,
                                    N
                                  ),
                                }),
                              }),
                              /*#__PURE__*/ p(h.label, {
                                className: `framer-7de0kf`,
                                layoutDependency: R,
                                layoutId: `Do2YxVOEf`,
                                children: [
                                  /*#__PURE__*/ f(A, {
                                    className: `framer-zi7tk8`,
                                    defaultChecked: !1,
                                    inputName: `Consent checkbox`,
                                    layoutDependency: R,
                                    layoutId: `Z56Xl4f4q`,
                                    required: !0,
                                    style: {
                                      "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                      "--framer-input-boolean-checked-background": `rgb(0, 153, 255)`,
                                      "--framer-input-border-radius-bottom-left": `3px`,
                                      "--framer-input-border-radius-bottom-right": `3px`,
                                      "--framer-input-border-radius-top-left": `3px`,
                                      "--framer-input-border-radius-top-right": `3px`,
                                      "--framer-input-icon-color": `rgb(255, 255, 255)`,
                                    },
                                    type: `checkbox`,
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-1md7r7q`,
                                    layoutDependency: R,
                                    layoutId: `V1blwerb5`,
                                    children: [
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v15`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `10px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(153, 153, 153))`,
                                              },
                                              children: `同意方可提交，您可以随时通过我们的电子邮件链接退订。`,
                                            }),
                                          }),
                                        className: `framer-ugefbx`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: R,
                                        layoutId: `oZLTv5BXz`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--extracted-r6o4lv": `rgb(153, 153, 153)`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                        ...X(
                                          {
                                            DvyeWzNeF: {
                                              children:
                                                W(`v19`, c) ??
                                                /*#__PURE__*/ f(o, {
                                                  children: /*#__PURE__*/ f(h.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `10px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(153, 153, 153))`,
                                                    },
                                                    children: `Please confirm your agreement before submitting. You can unsubscribe at any time using the link in the email.`,
                                                  }),
                                                }),
                                            },
                                            JUnTBSkGe: {
                                              children:
                                                W(`v19`, c) ??
                                                /*#__PURE__*/ f(o, {
                                                  children: /*#__PURE__*/ f(h.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `10px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(153, 153, 153))`,
                                                    },
                                                    children: `Please confirm your agreement before submitting. You can unsubscribe at any time using the link in the email.`,
                                                  }),
                                                }),
                                            },
                                            tiROO0mLG: {
                                              children:
                                                W(`v19`, c) ??
                                                /*#__PURE__*/ f(o, {
                                                  children: /*#__PURE__*/ f(h.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `10px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(153, 153, 153))`,
                                                    },
                                                    children: `Please confirm your agreement before submitting. You can unsubscribe at any time using the link in the email.`,
                                                  }),
                                                }),
                                            },
                                          },
                                          C,
                                          N
                                        ),
                                      }),
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v20`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ p(h.p, {
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                "--framer-font-size": `10px`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-27988b78-4da3-419a-9346-60402ee10374, rgb(195, 196, 197)))`,
                                              },
                                              children: [
                                                /*#__PURE__*/ f(h.em, {
                                                  children: `我同意接收 FREEZONEX 的邮件与更新，并同意按以下政策处理我的个人数据：  `,
                                                }),
                                                /*#__PURE__*/ f(L, {
                                                  href: { webPageId: `fHDmqdJOv` },
                                                  motionChild: !0,
                                                  nodeId: `EjWsNgW1t`,
                                                  openInNewTab: !1,
                                                  relValues: [],
                                                  scopeId: `b6D6eMBMO`,
                                                  smoothScroll: !1,
                                                  children: /*#__PURE__*/ f(h.a, {
                                                    className: `framer-styles-preset-1cuew56`,
                                                    "data-styles-preset": `U42XhPPDq`,
                                                    children: /*#__PURE__*/ f(h.em, {
                                                      children: `隐私政策`,
                                                    }),
                                                  }),
                                                }),
                                                /*#__PURE__*/ f(h.em, { children: `.` }),
                                              ],
                                            }),
                                          }),
                                        className: `framer-psdx9z`,
                                        fonts: [
                                          `GF;IBM Plex Sans-regular`,
                                          `GF;IBM Plex Sans-italic`,
                                        ],
                                        layoutDependency: R,
                                        layoutId: `EjWsNgW1t`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-27988b78-4da3-419a-9346-60402ee10374, rgb(195, 196, 197))`,
                                        },
                                        variants: {
                                          DvyeWzNeF: { "--extracted-2gg91v": `normal` },
                                          JUnTBSkGe: { "--extracted-2gg91v": `normal` },
                                          tiROO0mLG: { "--extracted-2gg91v": `normal` },
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                        ...X(
                                          {
                                            DvyeWzNeF: {
                                              children:
                                                W(`v21`, c) ??
                                                /*#__PURE__*/ f(o, {
                                                  children: /*#__PURE__*/ f(h.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `10px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                      "--framer-font-weight": `400`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-27988b78-4da3-419a-9346-60402ee10374, rgb(195, 196, 197)))`,
                                                    },
                                                    children: /*#__PURE__*/ f(h.em, {
                                                      children: `I agree to receive emails and updates from FREEZONEX and authorize the processing of my personal information according tothe 隐私政策.`,
                                                    }),
                                                  }),
                                                }),
                                            },
                                            JUnTBSkGe: {
                                              children:
                                                W(`v21`, c) ??
                                                /*#__PURE__*/ f(o, {
                                                  children: /*#__PURE__*/ f(h.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `10px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                      "--framer-font-weight": `400`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-27988b78-4da3-419a-9346-60402ee10374, rgb(195, 196, 197)))`,
                                                    },
                                                    children: /*#__PURE__*/ f(h.em, {
                                                      children: `I agree to receive emails and updates from FREEZONEX and authorize the processing of my personal information according tothe 隐私政策.`,
                                                    }),
                                                  }),
                                                }),
                                            },
                                            tiROO0mLG: {
                                              children:
                                                W(`v21`, c) ??
                                                /*#__PURE__*/ f(o, {
                                                  children: /*#__PURE__*/ f(h.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `10px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                      "--framer-font-weight": `400`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-27988b78-4da3-419a-9346-60402ee10374, rgb(195, 196, 197)))`,
                                                    },
                                                    children: /*#__PURE__*/ f(h.em, {
                                                      children: `I agree to receive emails and updates from FREEZONEX and authorize the processing of my personal information according tothe 隐私政策.`,
                                                    }),
                                                  }),
                                                }),
                                            },
                                          },
                                          C,
                                          N
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ f(k, {
                                height: 40,
                                ...X(
                                  {
                                    DvyeWzNeF: {
                                      width: `481px`,
                                      y: (d?.y || 0) + ((d?.height || 200) - 932.5) / 2 + 608.6,
                                    },
                                    JUnTBSkGe: {
                                      width: `290px`,
                                      y: (d?.y || 0) + ((d?.height || 200) - 700) / 2 + 582.6,
                                    },
                                    tiROO0mLG: {
                                      width: `305px`,
                                      y: (d?.y || 0) + ((d?.height || 515) - 514) / 2 + 401.6,
                                    },
                                  },
                                  C,
                                  N
                                ),
                                children: /*#__PURE__*/ f(P, {
                                  className: `framer-1o6t1rj-container`,
                                  layoutDependency: R,
                                  layoutId: `ZiY1oiVF1-container`,
                                  nodeId: `ZiY1oiVF1`,
                                  rendersWithMotion: !0,
                                  scopeId: `b6D6eMBMO`,
                                  children: /*#__PURE__*/ f(mt, {
                                    height: `100%`,
                                    id: `ZiY1oiVF1`,
                                    layoutId: `ZiY1oiVF1`,
                                    style: { height: `100%`, width: `100%` },
                                    type: `submit`,
                                    variant: Q(
                                      e,
                                      {
                                        error: `tREbu9dxY`,
                                        incomplete: `OsCx0OZ4e`,
                                        pending: `dE0c2HPRe`,
                                        success: `odJt_Ezn2`,
                                      },
                                      Z(`OyBVIoN_s`)
                                    ),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                      }),
                    Ae() &&
                      /*#__PURE__*/ p(h.div, {
                        className: `framer-1sl437e`,
                        "data-framer-name": `Left side content`,
                        layoutDependency: R,
                        layoutId: `X0Q_rMI1Y`,
                        children: [
                          /*#__PURE__*/ f(h.div, {
                            className: `framer-8z0uw6`,
                            "data-framer-name": `Top`,
                            layoutDependency: R,
                            layoutId: `i7dOVGiQD`,
                            children: /*#__PURE__*/ f(g, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ f(o, {
                                children: /*#__PURE__*/ f(h.h3, {
                                  className: `framer-styles-preset-kzlevi`,
                                  "data-styles-preset": `UIw3tgmjU`,
                                  style: { "--framer-text-alignment": `left` },
                                  children: `Transform Your Digital Journey with supOS`,
                                }),
                              }),
                              className: `framer-lenepn`,
                              "data-framer-name": `Get in Touch with Strat Edge`,
                              fonts: [`Inter`],
                              layoutDependency: R,
                              layoutId: `iYF4EwT7C`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              text: b,
                              verticalAlignment: `center`,
                              withExternalLayout: !0,
                            }),
                          }),
                          /*#__PURE__*/ f(g, {
                            __fromCanvasComponent: !0,
                            children:
                              W(`v22`, c) ??
                              /*#__PURE__*/ p(o, {
                                children: [
                                  /*#__PURE__*/ p(h.p, {
                                    className: `framer-styles-preset-81u0hx`,
                                    "data-styles-preset": `IIMP8Vr9g`,
                                    dir: `auto`,
                                    children: [
                                      `Complete the form to trial the latest Tier0 Edge. Available for `,
                                      /*#__PURE__*/ f(h.span, {
                                        style: {
                                          "--framer-text-color": `var(--extracted-1w3ko1f, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: /*#__PURE__*/ f(h.strong, {
                                          children: `online sandbox environment`,
                                        }),
                                      }),
                                      `!`,
                                    ],
                                  }),
                                  /*#__PURE__*/ f(h.p, {
                                    className: `framer-styles-preset-81u0hx`,
                                    "data-styles-preset": `IIMP8Vr9g`,
                                    dir: `auto`,
                                    children: /*#__PURE__*/ f(h.br, {
                                      className: `trailing-break`,
                                    }),
                                  }),
                                  /*#__PURE__*/ f(h.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7UG9wcGlucy1saWdodA==`,
                                      "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                      "--framer-font-size": `12px`,
                                      "--framer-font-weight": `300`,
                                      "--framer-line-height": `1.6em`,
                                      "--framer-text-color": `var(--extracted-1iakedh, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                    },
                                    children: `演示账号`,
                                  }),
                                  /*#__PURE__*/ p(h.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7UG9wcGlucy1saWdodA==`,
                                      "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                      "--framer-font-size": `12px`,
                                      "--framer-font-weight": `300`,
                                      "--framer-line-height": `1.6em`,
                                      "--framer-text-color": `var(--extracted-14qxiz, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                    },
                                    children: [
                                      `username： `,
                                      /*#__PURE__*/ f(h.span, {
                                        style: {
                                          "--font-selector": `RlM7UG9wcGlucy1tZWRpdW0=`,
                                          "--framer-font-weight": `500`,
                                        },
                                        children: `tier0；`,
                                      }),
                                      `password：`,
                                      /*#__PURE__*/ f(h.span, {
                                        style: {
                                          "--font-selector": `RlM7UG9wcGlucy1tZWRpdW0=`,
                                          "--framer-font-weight": `500`,
                                        },
                                        children: `tier0`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            className: `framer-deopiu`,
                            "data-framer-name": `Thank you for considering Strat Edge as your strategic partner in business evolution. We value your interest and are eager to connect with you. Whether you have questions, inquiries, or are ready to explore how our expertise can benefit your organization, our team is here to assist you.`,
                            fonts: [
                              `FS;Poppins-light`,
                              `FS;Poppins-regular`,
                              `FS;Poppins-medium`,
                              `FS;Poppins-bold`,
                            ],
                            layoutDependency: R,
                            layoutId: `XfL_jLR_M`,
                            style: {
                              "--extracted-14qxiz": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                              "--extracted-1iakedh": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                              "--extracted-1w3ko1f": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                              "--framer-paragraph-spacing": `0px`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ f(_, {
                            links: [
                              { href: { webPageId: `fHDmqdJOv` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `fHDmqdJOv` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              /*#__PURE__*/ f(k, {
                                height: 56,
                                children: /*#__PURE__*/ f(P, {
                                  className: `framer-ibf8dt-container`,
                                  layoutDependency: R,
                                  layoutId: `J6qEyYafo-container`,
                                  nodeId: `J6qEyYafo`,
                                  rendersWithMotion: !0,
                                  scopeId: `b6D6eMBMO`,
                                  children: /*#__PURE__*/ f(V, {
                                    height: `100%`,
                                    id: `J6qEyYafo`,
                                    layoutId: `J6qEyYafo`,
                                    s3npCxI8t: `ShieldCheck`,
                                    variant: Z(`UZQ7xtqOG`),
                                    width: `100%`,
                                    y3TnAPpOl: e[0],
                                    zDKYy9QRX: W(`v23`, c) ?? `您的信息安全无虞`,
                                    ...X({ VGrNNITNF: { y3TnAPpOl: e[1] } }, C, N),
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                    je() &&
                      /*#__PURE__*/ p(h.div, {
                        className: `framer-1vn0ee9`,
                        "data-framer-name": `Left side content`,
                        layoutDependency: R,
                        layoutId: `t0DGxnQIA`,
                        children: [
                          /*#__PURE__*/ f(h.div, {
                            className: `framer-11rq7ay`,
                            "data-framer-name": `Top`,
                            layoutDependency: R,
                            layoutId: `NBorCUMax`,
                            children: /*#__PURE__*/ f(g, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ f(o, {
                                children: /*#__PURE__*/ f(h.h3, {
                                  className: `framer-styles-preset-kzlevi`,
                                  "data-styles-preset": `UIw3tgmjU`,
                                  style: { "--framer-text-alignment": `left` },
                                  children: `Transform Your Digital Journey with supOS`,
                                }),
                              }),
                              className: `framer-1rdve89`,
                              "data-framer-name": `Get in Touch with Strat Edge`,
                              fonts: [`Inter`],
                              layoutDependency: R,
                              layoutId: `Eh9zO0BdN`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              text: b,
                              verticalAlignment: `center`,
                              withExternalLayout: !0,
                            }),
                          }),
                          /*#__PURE__*/ f(g, {
                            __fromCanvasComponent: !0,
                            children:
                              W(`v24`, c) ??
                              /*#__PURE__*/ p(o, {
                                children: [
                                  /*#__PURE__*/ p(h.p, {
                                    className: `framer-styles-preset-81u0hx`,
                                    "data-styles-preset": `IIMP8Vr9g`,
                                    dir: `auto`,
                                    children: [
                                      `Complete the form to trial the latest Tier0 Edge. Available for `,
                                      /*#__PURE__*/ f(h.span, {
                                        style: {
                                          "--framer-text-color": `var(--extracted-1w3ko1f, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: /*#__PURE__*/ f(h.strong, {
                                          children: `online sandbox environment`,
                                        }),
                                      }),
                                      `!`,
                                    ],
                                  }),
                                  /*#__PURE__*/ f(h.p, {
                                    className: `framer-styles-preset-81u0hx`,
                                    "data-styles-preset": `IIMP8Vr9g`,
                                    dir: `auto`,
                                    children: /*#__PURE__*/ f(h.br, {
                                      className: `trailing-break`,
                                    }),
                                  }),
                                  /*#__PURE__*/ f(h.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7UG9wcGlucy1saWdodA==`,
                                      "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                      "--framer-font-weight": `300`,
                                      "--framer-line-height": `1.6em`,
                                      "--framer-text-color": `var(--extracted-1iakedh, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                    },
                                    children: `演示账号`,
                                  }),
                                  /*#__PURE__*/ p(h.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7UG9wcGlucy1saWdodA==`,
                                      "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                      "--framer-font-weight": `300`,
                                      "--framer-line-height": `1.6em`,
                                      "--framer-text-color": `var(--extracted-14qxiz, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                    },
                                    children: [
                                      `username： `,
                                      /*#__PURE__*/ f(h.span, {
                                        style: {
                                          "--font-selector": `RlM7UG9wcGlucy1tZWRpdW0=`,
                                          "--framer-font-size": `18px`,
                                          "--framer-font-weight": `500`,
                                        },
                                        children: `tier0；`,
                                      }),
                                      `password：`,
                                      /*#__PURE__*/ f(h.span, {
                                        style: {
                                          "--font-selector": `RlM7UG9wcGlucy1tZWRpdW0=`,
                                          "--framer-font-size": `18px`,
                                          "--framer-font-weight": `500`,
                                        },
                                        children: `tier0`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            className: `framer-5jglxk`,
                            "data-framer-name": `Thank you for considering Strat Edge as your strategic partner in business evolution. We value your interest and are eager to connect with you. Whether you have questions, inquiries, or are ready to explore how our expertise can benefit your organization, our team is here to assist you.`,
                            fonts: [
                              `FS;Poppins-light`,
                              `FS;Poppins-regular`,
                              `FS;Poppins-medium`,
                              `FS;Poppins-bold`,
                            ],
                            layoutDependency: R,
                            layoutId: `Ot0nZEPuw`,
                            style: {
                              "--extracted-14qxiz": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                              "--extracted-1iakedh": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                              "--extracted-1w3ko1f": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                              "--framer-paragraph-spacing": `0px`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ f(_, {
                            links: [
                              { href: { webPageId: `fHDmqdJOv` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `fHDmqdJOv` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              /*#__PURE__*/ f(k, {
                                height: 56,
                                children: /*#__PURE__*/ f(P, {
                                  className: `framer-1o39dat-container`,
                                  layoutDependency: R,
                                  layoutId: `Olo7YWOd_-container`,
                                  nodeId: `Olo7YWOd_`,
                                  rendersWithMotion: !0,
                                  scopeId: `b6D6eMBMO`,
                                  children: /*#__PURE__*/ f(V, {
                                    height: `100%`,
                                    id: `Olo7YWOd_`,
                                    layoutId: `Olo7YWOd_`,
                                    s3npCxI8t: `ShieldCheck`,
                                    variant: Z(`UZQ7xtqOG`),
                                    width: `100%`,
                                    y3TnAPpOl: e[0],
                                    zDKYy9QRX: W(`v23`, c) ?? `您的信息安全无虞`,
                                    ...X({ OvAw4rSAX: { y3TnAPpOl: e[1] } }, C, N),
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                    Me() &&
                      /*#__PURE__*/ f(gt, {
                        __framer__animate: { transition: Nt },
                        __framer__animateOnce: !0,
                        __framer__enter: Mt,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-7sb7nf`,
                        "data-framer-name": `Left side`,
                        layoutDependency: R,
                        layoutId: `VHFyeCAOm`,
                        style: { transformPerspective: 1200 },
                        children: /*#__PURE__*/ p(h.div, {
                          className: `framer-xb8gqj`,
                          "data-framer-name": `Left side content`,
                          layoutDependency: R,
                          layoutId: `YIqOb6BSL`,
                          children: [
                            /*#__PURE__*/ f(h.div, {
                              className: `framer-5l3q8y`,
                              "data-framer-name": `Top`,
                              layoutDependency: R,
                              layoutId: `SeDLzrwNb`,
                              children: /*#__PURE__*/ f(g, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ f(o, {
                                  children: /*#__PURE__*/ f(h.h3, {
                                    className: `framer-styles-preset-kzlevi`,
                                    "data-styles-preset": `UIw3tgmjU`,
                                    style: { "--framer-text-alignment": `left` },
                                    children: `Transform Your Digital Journey with supOS`,
                                  }),
                                }),
                                className: `framer-n7lixm`,
                                "data-framer-name": `Get in Touch with Strat Edge`,
                                fonts: [`Inter`],
                                layoutDependency: R,
                                layoutId: `mnyIERHoJ`,
                                style: { "--framer-paragraph-spacing": `0px` },
                                text: b,
                                verticalAlignment: `center`,
                                withExternalLayout: !0,
                              }),
                            }),
                            /*#__PURE__*/ f(g, {
                              __fromCanvasComponent: !0,
                              children:
                                W(`v25`, c) ??
                                /*#__PURE__*/ p(o, {
                                  children: [
                                    /*#__PURE__*/ p(h.p, {
                                      className: `framer-styles-preset-81u0hx`,
                                      "data-styles-preset": `IIMP8Vr9g`,
                                      dir: `auto`,
                                      children: [
                                        `Complete the form to trial the latest Tier0 Edge.  Available for `,
                                        /*#__PURE__*/ f(h.span, {
                                          style: {
                                            "--framer-text-color": `var(--extracted-1w3ko1f, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                          },
                                          children: /*#__PURE__*/ f(h.strong, {
                                            children: `online sandbox environment`,
                                          }),
                                        }),
                                        `!`,
                                      ],
                                    }),
                                    /*#__PURE__*/ f(h.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7UG9wcGlucy1saWdodA==`,
                                        "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                        "--framer-font-weight": `300`,
                                        "--framer-line-height": `1.6em`,
                                        "--framer-text-color": `var(--extracted-2gxw0f, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                      },
                                      children: /*#__PURE__*/ f(h.br, {
                                        className: `trailing-break`,
                                      }),
                                    }),
                                    /*#__PURE__*/ f(h.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7UG9wcGlucy1saWdodA==`,
                                        "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                        "--framer-font-weight": `300`,
                                        "--framer-line-height": `1.6em`,
                                        "--framer-text-color": `var(--extracted-1iakedh, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                      },
                                      children: `演示账号`,
                                    }),
                                    /*#__PURE__*/ p(h.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7UG9wcGlucy1saWdodA==`,
                                        "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                        "--framer-font-weight": `300`,
                                        "--framer-line-height": `1.6em`,
                                        "--framer-text-color": `var(--extracted-14qxiz, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                      },
                                      children: [
                                        `username： `,
                                        /*#__PURE__*/ f(h.span, {
                                          style: {
                                            "--font-selector": `RlM7UG9wcGlucy1tZWRpdW0=`,
                                            "--framer-font-size": `18px`,
                                            "--framer-font-weight": `500`,
                                          },
                                          children: `tier0；`,
                                        }),
                                        `password：`,
                                        /*#__PURE__*/ f(h.span, {
                                          style: {
                                            "--font-selector": `RlM7UG9wcGlucy1tZWRpdW0=`,
                                            "--framer-font-size": `18px`,
                                            "--framer-font-weight": `500`,
                                          },
                                          children: `tier0`,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              className: `framer-8mtewi`,
                              "data-framer-name": `Thank you for considering Strat Edge as your strategic partner in business evolution. We value your interest and are eager to connect with you. Whether you have questions, inquiries, or are ready to explore how our expertise can benefit your organization, our team is here to assist you.`,
                              fonts: [
                                `FS;Poppins-light`,
                                `FS;Poppins-regular`,
                                `FS;Poppins-medium`,
                                `FS;Poppins-bold`,
                              ],
                              layoutDependency: R,
                              layoutId: `PiNd8Tj3N`,
                              style: {
                                "--extracted-14qxiz": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                "--extracted-1iakedh": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                "--extracted-1w3ko1f": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                "--extracted-2gxw0f": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ f(h.div, {
                              className: `framer-1hd9hvt`,
                              layoutDependency: R,
                              layoutId: `H9hqQi3Zq`,
                              children: /*#__PURE__*/ f(L, {
                                href: { webPageId: `bUxkE3u2Z` },
                                motionChild: !0,
                                nodeId: `gA11FgLaa`,
                                scopeId: `b6D6eMBMO`,
                                children: /*#__PURE__*/ f(w, {
                                  as: `a`,
                                  className: `framer-38yrt1 framer-1k8wezx`,
                                  "data-framer-name": `Union`,
                                  layout: `position`,
                                  layoutDependency: R,
                                  layoutId: `gA11FgLaa`,
                                  opacity: 1,
                                  style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 51 48"></svg>`,
                                  svgContentId: 11321898580,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            /*#__PURE__*/ f(_, {
                              links: [
                                { href: { webPageId: `fHDmqdJOv` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                /*#__PURE__*/ f(k, {
                                  height: 56,
                                  children: /*#__PURE__*/ f(P, {
                                    className: `framer-szijrq-container`,
                                    layoutDependency: R,
                                    layoutId: `w_tKzH3nD-container`,
                                    nodeId: `w_tKzH3nD`,
                                    rendersWithMotion: !0,
                                    scopeId: `b6D6eMBMO`,
                                    children: /*#__PURE__*/ f(V, {
                                      height: `100%`,
                                      id: `w_tKzH3nD`,
                                      layoutId: `w_tKzH3nD`,
                                      s3npCxI8t: `ShieldCheck`,
                                      variant: Z(`UZQ7xtqOG`),
                                      width: `100%`,
                                      y3TnAPpOl: e[0],
                                      zDKYy9QRX: W(`v23`, c) ?? `您的信息安全无虞`,
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                      }),
                    Ne() &&
                      /*#__PURE__*/ f(j, {
                        action: `https://api.framer.com/forms/v1/forms/eb19dacb-8c0d-4bf9-a4e7-efc289d2fa43/submit`,
                        className: `framer-1q70tn4`,
                        "data-framer-name": `Form1`,
                        layoutDependency: R,
                        layoutId: `eJ_wZ0PvP`,
                        nodeId: `eJ_wZ0PvP`,
                        redirectUrl: `https://tier0-edge-playground1.tier0.app/`,
                        style: { backgroundColor: S },
                        variants: {
                          nCrBGHnJQ: { backgroundColor: `rgb(244, 244, 244)` },
                          va6GzOnKj: { backgroundColor: `rgb(244, 244, 244)` },
                          zV_a3X7Sf: { backgroundColor: `rgb(244, 244, 244)` },
                        },
                        children: (e) =>
                          /*#__PURE__*/ p(u, {
                            children: [
                              /*#__PURE__*/ f(g, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ f(o, {
                                  children: /*#__PURE__*/ f(h.h3, {
                                    className: `framer-styles-preset-kzlevi`,
                                    "data-styles-preset": `UIw3tgmjU`,
                                    style: { "--framer-text-alignment": `center` },
                                    children: `Try supOS instantly`,
                                  }),
                                }),
                                className: `framer-ibzut5`,
                                "data-framer-name": `Get in Touch with Strat Edge`,
                                fonts: [`Inter`],
                                layoutDependency: R,
                                layoutId: `k45q6x8fz`,
                                style: { "--framer-paragraph-spacing": `0px` },
                                text: b,
                                transformTemplate: Pt,
                                verticalAlignment: `center`,
                                withExternalLayout: !0,
                                ...X(
                                  {
                                    nCrBGHnJQ: { transformTemplate: void 0 },
                                    va6GzOnKj: { transformTemplate: void 0 },
                                    zV_a3X7Sf: { transformTemplate: void 0 },
                                  },
                                  C,
                                  N
                                ),
                              }),
                              /*#__PURE__*/ p(h.div, {
                                className: `framer-1i7unxv`,
                                layoutDependency: R,
                                layoutId: `jjsbprPsj`,
                                transformTemplate: Pt,
                                ...X(
                                  {
                                    nCrBGHnJQ: { transformTemplate: void 0 },
                                    va6GzOnKj: { transformTemplate: void 0 },
                                    zV_a3X7Sf: { transformTemplate: void 0 },
                                  },
                                  C,
                                  N
                                ),
                                children: [
                                  /*#__PURE__*/ f(h.label, {
                                    className: `framer-a0vkat`,
                                    layoutDependency: R,
                                    layoutId: `eP8WAWRiI`,
                                    children: /*#__PURE__*/ f(F, {
                                      className: `framer-1qv7tmy`,
                                      inputName: `Name`,
                                      layoutDependency: R,
                                      layoutId: `rOlzpiYBK`,
                                      placeholder: W(`v11`, c) ?? `姓名`,
                                      required: !0,
                                      style: {
                                        "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                        "--framer-input-border-bottom-width": `1px`,
                                        "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                        "--framer-input-border-left-width": `1px`,
                                        "--framer-input-border-radius-bottom-left": `3px`,
                                        "--framer-input-border-radius-bottom-right": `3px`,
                                        "--framer-input-border-radius-top-left": `3px`,
                                        "--framer-input-border-radius-top-right": `3px`,
                                        "--framer-input-border-right-width": `1px`,
                                        "--framer-input-border-style": `solid`,
                                        "--framer-input-border-top-width": `1px`,
                                        "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                        "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                        "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                      },
                                      type: `text`,
                                    }),
                                  }),
                                  /*#__PURE__*/ f(h.label, {
                                    className: `framer-13nvaps`,
                                    layoutDependency: R,
                                    layoutId: `fANe0PHms`,
                                    children: /*#__PURE__*/ f(F, {
                                      className: `framer-pli42s`,
                                      inputName: `Email`,
                                      layoutDependency: R,
                                      layoutId: `HBvCQkDac`,
                                      placeholder: W(`v12`, c) ?? `电子邮件`,
                                      required: !0,
                                      style: {
                                        "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                        "--framer-input-border-bottom-width": `1px`,
                                        "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                        "--framer-input-border-left-width": `1px`,
                                        "--framer-input-border-radius-bottom-left": `3px`,
                                        "--framer-input-border-radius-bottom-right": `3px`,
                                        "--framer-input-border-radius-top-left": `3px`,
                                        "--framer-input-border-radius-top-right": `3px`,
                                        "--framer-input-border-right-width": `1px`,
                                        "--framer-input-border-style": `solid`,
                                        "--framer-input-border-top-width": `1px`,
                                        "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                        "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                        "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                      },
                                      type: `email`,
                                      ...X(
                                        {
                                          nCrBGHnJQ: {
                                            inputName: `Business Email`,
                                            placeholder: W(`v26`, c) ?? `商务电子邮件`,
                                          },
                                          va6GzOnKj: {
                                            inputName: `Business Email`,
                                            placeholder: W(`v26`, c) ?? `商务电子邮件`,
                                          },
                                          zV_a3X7Sf: {
                                            inputName: `Business Email`,
                                            placeholder: W(`v26`, c) ?? `商务电子邮件`,
                                          },
                                        },
                                        C,
                                        N
                                      ),
                                    }),
                                  }),
                                  Pe() &&
                                    /*#__PURE__*/ f(h.label, {
                                      className: `framer-wpd7p7`,
                                      "data-framer-name": `gclid`,
                                      layoutDependency: R,
                                      layoutId: `vLWLBnys0`,
                                    }),
                                  /*#__PURE__*/ f(h.label, {
                                    className: `framer-4dzjxd`,
                                    layoutDependency: R,
                                    layoutId: `L6a0ty3Y0`,
                                    children: /*#__PURE__*/ f(F, {
                                      className: `framer-1d6jy92`,
                                      inputName: `Business Email`,
                                      layoutDependency: R,
                                      layoutId: `UMNg9_UIg`,
                                      placeholder: W(`v26`, c) ?? `商务电子邮件`,
                                      required: !0,
                                      style: {
                                        "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                        "--framer-input-border-bottom-width": `1px`,
                                        "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                        "--framer-input-border-left-width": `1px`,
                                        "--framer-input-border-radius-bottom-left": `3px`,
                                        "--framer-input-border-radius-bottom-right": `3px`,
                                        "--framer-input-border-radius-top-left": `3px`,
                                        "--framer-input-border-radius-top-right": `3px`,
                                        "--framer-input-border-right-width": `1px`,
                                        "--framer-input-border-style": `solid`,
                                        "--framer-input-border-top-width": `1px`,
                                        "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                        "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                        "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                      },
                                      type: `textarea`,
                                      ...X(
                                        {
                                          nCrBGHnJQ: {
                                            inputName: `What you want to build or evaluate?`,
                                            placeholder: W(`v27`, c) ?? `你想用 Tier0 创造什么呢？`,
                                          },
                                          va6GzOnKj: {
                                            inputName: `What do you want to build with Tier0?`,
                                            placeholder: W(`v27`, c) ?? `你想用 Tier0 创造什么呢？`,
                                          },
                                          zV_a3X7Sf: {
                                            inputName: `What you want to build or evaluate?`,
                                            placeholder: W(`v27`, c) ?? `你想用 Tier0 创造什么呢？`,
                                          },
                                        },
                                        C,
                                        N
                                      ),
                                    }),
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-tf3iwb`,
                                    layoutDependency: R,
                                    layoutId: `Iy9kbFIz0`,
                                    children: [
                                      /*#__PURE__*/ f(h.label, {
                                        className: `framer-epssf7`,
                                        layoutDependency: R,
                                        layoutId: `fOH1JoXHz`,
                                        children: /*#__PURE__*/ f(F, {
                                          className: `framer-1o1ggr9`,
                                          inputName: `Company`,
                                          layoutDependency: R,
                                          layoutId: `KPY1JF9C8`,
                                          placeholder: W(`v28`, c) ?? `公司`,
                                          required: !0,
                                          style: {
                                            "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                            "--framer-input-border-bottom-width": `1px`,
                                            "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                            "--framer-input-border-left-width": `1px`,
                                            "--framer-input-border-radius-bottom-left": `3px`,
                                            "--framer-input-border-radius-bottom-right": `3px`,
                                            "--framer-input-border-radius-top-left": `3px`,
                                            "--framer-input-border-radius-top-right": `3px`,
                                            "--framer-input-border-right-width": `1px`,
                                            "--framer-input-border-style": `solid`,
                                            "--framer-input-border-top-width": `1px`,
                                            "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                            "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                            "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                          },
                                          type: `text`,
                                        }),
                                      }),
                                      /*#__PURE__*/ f(h.label, {
                                        className: `framer-16kmpd3`,
                                        layoutDependency: R,
                                        layoutId: `lFXmR9QN9`,
                                        children: /*#__PURE__*/ f(F, {
                                          className: `framer-thsiwy`,
                                          inputName: `Position`,
                                          layoutDependency: R,
                                          layoutId: `JhrR2lCin`,
                                          placeholder: W(`v29`, c) ?? `职位`,
                                          required: !0,
                                          style: {
                                            "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                            "--framer-input-border-bottom-width": `1px`,
                                            "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                            "--framer-input-border-left-width": `1px`,
                                            "--framer-input-border-radius-bottom-left": `3px`,
                                            "--framer-input-border-radius-bottom-right": `3px`,
                                            "--framer-input-border-radius-top-left": `3px`,
                                            "--framer-input-border-radius-top-right": `3px`,
                                            "--framer-input-border-right-width": `1px`,
                                            "--framer-input-border-style": `solid`,
                                            "--framer-input-border-top-width": `1px`,
                                            "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                            "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                            "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                          },
                                          type: `text`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-uk3b35`,
                                    "data-framer-name": `GTM`,
                                    layoutDependency: R,
                                    layoutId: `lRquNw5py`,
                                    children: [
                                      /*#__PURE__*/ f(h.label, {
                                        className: `framer-1jy3dbn`,
                                        "data-framer-name": `gclid`,
                                        layoutDependency: R,
                                        layoutId: `Ir82_bRk6`,
                                        children: /*#__PURE__*/ f(F, {
                                          className: `framer-ks8qe1`,
                                          inputName: `gclid`,
                                          layoutDependency: R,
                                          layoutId: `GUh3aqlm0`,
                                          placeholder: W(`v30`, c) ?? `gclid`,
                                          required: !1,
                                          style: {
                                            "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                            "--framer-input-border-bottom-width": `1px`,
                                            "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                            "--framer-input-border-left-width": `1px`,
                                            "--framer-input-border-radius-bottom-left": `3px`,
                                            "--framer-input-border-radius-bottom-right": `3px`,
                                            "--framer-input-border-radius-top-left": `3px`,
                                            "--framer-input-border-radius-top-right": `3px`,
                                            "--framer-input-border-right-width": `1px`,
                                            "--framer-input-border-style": `solid`,
                                            "--framer-input-border-top-width": `1px`,
                                            "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                            "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                            "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                            opacity: 0,
                                          },
                                          type: `text`,
                                        }),
                                      }),
                                      /*#__PURE__*/ f(h.label, {
                                        className: `framer-119i4mi`,
                                        "data-framer-name": `utm_source`,
                                        layoutDependency: R,
                                        layoutId: `DM2n1p6dQ`,
                                        children: /*#__PURE__*/ f(F, {
                                          className: `framer-11nqohp`,
                                          inputName: `utm_source`,
                                          layoutDependency: R,
                                          layoutId: `RGi0ysFfR`,
                                          placeholder: W(`v31`, c) ?? `utm_source`,
                                          required: !1,
                                          style: {
                                            "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                            "--framer-input-border-bottom-width": `1px`,
                                            "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                            "--framer-input-border-left-width": `1px`,
                                            "--framer-input-border-radius-bottom-left": `3px`,
                                            "--framer-input-border-radius-bottom-right": `3px`,
                                            "--framer-input-border-radius-top-left": `3px`,
                                            "--framer-input-border-radius-top-right": `3px`,
                                            "--framer-input-border-right-width": `1px`,
                                            "--framer-input-border-style": `solid`,
                                            "--framer-input-border-top-width": `1px`,
                                            "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                            "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                            "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                            opacity: 0,
                                          },
                                          type: `text`,
                                        }),
                                      }),
                                      /*#__PURE__*/ f(h.label, {
                                        className: `framer-1fd50ob`,
                                        "data-framer-name": `utm_medium`,
                                        layoutDependency: R,
                                        layoutId: `Daxyf00_K`,
                                        children: /*#__PURE__*/ f(F, {
                                          className: `framer-15aljhn`,
                                          inputName: `utm_medium`,
                                          layoutDependency: R,
                                          layoutId: `NOYMdydOQ`,
                                          placeholder: W(`v32`, c) ?? `utm_medium`,
                                          required: !1,
                                          style: {
                                            "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                            "--framer-input-border-bottom-width": `1px`,
                                            "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                            "--framer-input-border-left-width": `1px`,
                                            "--framer-input-border-radius-bottom-left": `3px`,
                                            "--framer-input-border-radius-bottom-right": `3px`,
                                            "--framer-input-border-radius-top-left": `3px`,
                                            "--framer-input-border-radius-top-right": `3px`,
                                            "--framer-input-border-right-width": `1px`,
                                            "--framer-input-border-style": `solid`,
                                            "--framer-input-border-top-width": `1px`,
                                            "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                            "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                            "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                            opacity: 0,
                                          },
                                          type: `text`,
                                        }),
                                      }),
                                      /*#__PURE__*/ f(h.label, {
                                        className: `framer-1yyq6qj`,
                                        "data-framer-name": `utm_campaign`,
                                        layoutDependency: R,
                                        layoutId: `orAYnw0Ny`,
                                        children: /*#__PURE__*/ f(F, {
                                          className: `framer-1s9ptda`,
                                          inputName: `utm_campaign`,
                                          layoutDependency: R,
                                          layoutId: `Zk5Xnq6Io`,
                                          placeholder: W(`v33`, c) ?? `广告系列 (utm_campaign)`,
                                          required: !1,
                                          style: {
                                            "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                            "--framer-input-border-bottom-width": `1px`,
                                            "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                            "--framer-input-border-left-width": `1px`,
                                            "--framer-input-border-radius-bottom-left": `3px`,
                                            "--framer-input-border-radius-bottom-right": `3px`,
                                            "--framer-input-border-radius-top-left": `3px`,
                                            "--framer-input-border-radius-top-right": `3px`,
                                            "--framer-input-border-right-width": `1px`,
                                            "--framer-input-border-style": `solid`,
                                            "--framer-input-border-top-width": `1px`,
                                            "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                            "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                            "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                            opacity: 0,
                                          },
                                          type: `text`,
                                        }),
                                      }),
                                      /*#__PURE__*/ f(h.label, {
                                        className: `framer-1h707j`,
                                        "data-framer-name": `utm_term`,
                                        layoutDependency: R,
                                        layoutId: `SIPLIuFRH`,
                                        children: /*#__PURE__*/ f(F, {
                                          className: `framer-vna8jk`,
                                          inputName: `utm_term`,
                                          layoutDependency: R,
                                          layoutId: `rYWYXERd_`,
                                          placeholder: W(`v34`, c) ?? `utm_term`,
                                          required: !1,
                                          style: {
                                            "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                            "--framer-input-border-bottom-width": `1px`,
                                            "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                            "--framer-input-border-left-width": `1px`,
                                            "--framer-input-border-radius-bottom-left": `3px`,
                                            "--framer-input-border-radius-bottom-right": `3px`,
                                            "--framer-input-border-radius-top-left": `3px`,
                                            "--framer-input-border-radius-top-right": `3px`,
                                            "--framer-input-border-right-width": `1px`,
                                            "--framer-input-border-style": `solid`,
                                            "--framer-input-border-top-width": `1px`,
                                            "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                            "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                            "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                            opacity: 0,
                                          },
                                          type: `text`,
                                        }),
                                      }),
                                      /*#__PURE__*/ f(h.label, {
                                        className: `framer-xqhv0g`,
                                        "data-framer-name": `utm_content`,
                                        layoutDependency: R,
                                        layoutId: `gW_P4pK7O`,
                                        children: /*#__PURE__*/ f(F, {
                                          className: `framer-xuq8f5`,
                                          inputName: `utm_content`,
                                          layoutDependency: R,
                                          layoutId: `GUtnfYdFY`,
                                          placeholder: W(`v35`, c) ?? `utm_content`,
                                          required: !1,
                                          style: {
                                            "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                            "--framer-input-border-bottom-width": `1px`,
                                            "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                            "--framer-input-border-left-width": `1px`,
                                            "--framer-input-border-radius-bottom-left": `3px`,
                                            "--framer-input-border-radius-bottom-right": `3px`,
                                            "--framer-input-border-radius-top-left": `3px`,
                                            "--framer-input-border-radius-top-right": `3px`,
                                            "--framer-input-border-right-width": `1px`,
                                            "--framer-input-border-style": `solid`,
                                            "--framer-input-border-top-width": `1px`,
                                            "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                            "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                            "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                            opacity: 0,
                                          },
                                          type: `text`,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ p(h.label, {
                                className: `framer-km09w7`,
                                layoutDependency: R,
                                layoutId: `JqblU3Y7e`,
                                children: [
                                  /*#__PURE__*/ f(A, {
                                    className: `framer-f8eacs`,
                                    defaultChecked: !1,
                                    inputName: `Consent checkbox`,
                                    layoutDependency: R,
                                    layoutId: `AALbaiYDw`,
                                    required: !0,
                                    style: {
                                      "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                      "--framer-input-boolean-checked-background": `rgb(0, 153, 255)`,
                                      "--framer-input-border-radius-bottom-left": `3px`,
                                      "--framer-input-border-radius-bottom-right": `3px`,
                                      "--framer-input-border-radius-top-left": `3px`,
                                      "--framer-input-border-radius-top-right": `3px`,
                                      "--framer-input-icon-color": `rgb(255, 255, 255)`,
                                    },
                                    type: `checkbox`,
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-1tem865`,
                                    layoutDependency: R,
                                    layoutId: `ny2_9Dnc5`,
                                    children: [
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v15`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `10px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(153, 153, 153))`,
                                              },
                                              children: `同意方可提交，您可以随时通过我们的电子邮件链接退订。`,
                                            }),
                                          }),
                                        className: `framer-1g7upol`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: R,
                                        layoutId: `bdj6A1zOu`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--extracted-r6o4lv": `rgb(153, 153, 153)`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v36`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ p(h.p, {
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                "--framer-font-size": `10px`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-27988b78-4da3-419a-9346-60402ee10374, rgb(195, 196, 197)))`,
                                              },
                                              children: [
                                                /*#__PURE__*/ f(h.em, {
                                                  children: `我同意接收 FREEZONEX 的邮件与更新，并同意按以下政策处理我的个人数据：  `,
                                                }),
                                                /*#__PURE__*/ f(L, {
                                                  href: { webPageId: `fHDmqdJOv` },
                                                  motionChild: !0,
                                                  nodeId: `jP79xFCLR`,
                                                  openInNewTab: !1,
                                                  relValues: [],
                                                  scopeId: `b6D6eMBMO`,
                                                  smoothScroll: !1,
                                                  children: /*#__PURE__*/ f(h.a, {
                                                    className: `framer-styles-preset-1cuew56`,
                                                    "data-styles-preset": `U42XhPPDq`,
                                                    children: /*#__PURE__*/ f(h.em, {
                                                      children: `隐私政策`,
                                                    }),
                                                  }),
                                                }),
                                                /*#__PURE__*/ f(h.em, { children: `.` }),
                                              ],
                                            }),
                                          }),
                                        className: `framer-11i1hfw`,
                                        fonts: [
                                          `GF;IBM Plex Sans-regular`,
                                          `GF;IBM Plex Sans-italic`,
                                        ],
                                        layoutDependency: R,
                                        layoutId: `jP79xFCLR`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-27988b78-4da3-419a-9346-60402ee10374, rgb(195, 196, 197))`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ f(k, {
                                height: 40,
                                width: `481px`,
                                ...X(
                                  { nCrBGHnJQ: { width: `305px` }, zV_a3X7Sf: { width: `290px` } },
                                  C,
                                  N
                                ),
                                children: /*#__PURE__*/ f(P, {
                                  className: `framer-1furzjf-container`,
                                  layoutDependency: R,
                                  layoutId: `HYRVRqCI1-container`,
                                  nodeId: `HYRVRqCI1`,
                                  rendersWithMotion: !0,
                                  scopeId: `b6D6eMBMO`,
                                  children: /*#__PURE__*/ f(vt, {
                                    height: `100%`,
                                    id: `HYRVRqCI1`,
                                    layoutId: `HYRVRqCI1`,
                                    style: { height: `100%`, width: `100%` },
                                    type: `submit`,
                                    variant: Q(
                                      e,
                                      {
                                        error: `tREbu9dxY`,
                                        incomplete: `OsCx0OZ4e`,
                                        pending: `dE0c2HPRe`,
                                        success: `odJt_Ezn2`,
                                      },
                                      Z(`OyBVIoN_s`)
                                    ),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              Fe() &&
                                /*#__PURE__*/ f(M, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 3232.5,
                                    intrinsicWidth: 2500.5,
                                    pixelHeight: 6465,
                                    pixelWidth: 5001,
                                    src: `https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?width=5001&height=6465`,
                                    srcSet: `https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=1024&width=5001&height=6465 792w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=2048&width=5001&height=6465 1584w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=4096&width=5001&height=6465 3168w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?width=5001&height=6465 5001w`,
                                  },
                                  className: `framer-wqju0j`,
                                  "data-framer-name": `Frame 195`,
                                  layoutDependency: R,
                                  layoutId: `LwJN70Ewq`,
                                  transformTemplate: Pt,
                                  ...X(
                                    {
                                      nCrBGHnJQ: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 3232.5,
                                          intrinsicWidth: 2500.5,
                                          loading: x(
                                            (d?.y || 0) + ((d?.height || 200) - 526) / 2 + 781
                                          ),
                                          pixelHeight: 6465,
                                          pixelWidth: 5001,
                                          sizes: `-197.1945px`,
                                          src: `https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?width=5001&height=6465`,
                                          srcSet: `https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=1024&width=5001&height=6465 792w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=2048&width=5001&height=6465 1584w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=4096&width=5001&height=6465 3168w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?width=5001&height=6465 5001w`,
                                        },
                                      },
                                      zV_a3X7Sf: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 3232.5,
                                          intrinsicWidth: 2500.5,
                                          loading: x(
                                            (d?.y || 0) + ((d?.height || 200) - 641) / 2 + 960.5
                                          ),
                                          pixelHeight: 6465,
                                          pixelWidth: 5001,
                                          sizes: `-247.4598px`,
                                          src: `https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?width=5001&height=6465`,
                                          srcSet: `https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=1024&width=5001&height=6465 792w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=2048&width=5001&height=6465 1584w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?scale-down-to=4096&width=5001&height=6465 3168w,https://framerusercontent.com/images/7XA3cYnOb8KeZEdIjn3cly2oU.png?width=5001&height=6465 5001w`,
                                        },
                                      },
                                    },
                                    C,
                                    N
                                  ),
                                }),
                            ],
                          }),
                      }),
                    G() &&
                      /*#__PURE__*/ f(j, {
                        action: `https://api.framer.com/forms/v1/forms/ef9e11dc-ddfe-4c94-b8a1-e52d40f42f0a/submit`,
                        className: `framer-1xcp7aa`,
                        "data-framer-name": `Form2`,
                        layoutDependency: R,
                        layoutId: `KbV2A2Cwe`,
                        nodeId: `KbV2A2Cwe`,
                        redirectUrl: `https://tier0-edge-playground2.tier0.app/`,
                        style: { backgroundColor: S },
                        variants: {
                          PQHwzDtoU: { backgroundColor: `rgba(255, 255, 255, 0)` },
                          uTGLNwn5B: { backgroundColor: `rgba(255, 255, 255, 0)` },
                        },
                        children: (e) =>
                          /*#__PURE__*/ p(u, {
                            children: [
                              /*#__PURE__*/ f(g, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ f(o, {
                                  children: /*#__PURE__*/ f(h.h3, {
                                    className: `framer-styles-preset-kzlevi`,
                                    "data-styles-preset": `UIw3tgmjU`,
                                    style: { "--framer-text-alignment": `center` },
                                    children: `Try supOS instantly`,
                                  }),
                                }),
                                className: `framer-ax5z7l`,
                                "data-framer-name": `Get in Touch with Strat Edge`,
                                fonts: [`Inter`],
                                layoutDependency: R,
                                layoutId: `cUkAY05jA`,
                                style: { "--framer-paragraph-spacing": `0px` },
                                text: b,
                                verticalAlignment: `center`,
                                withExternalLayout: !0,
                              }),
                              /*#__PURE__*/ p(h.div, {
                                className: `framer-1zjzvb`,
                                layoutDependency: R,
                                layoutId: `UGrA5in9H`,
                                children: [
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-1pgllpz`,
                                    "data-framer-name": `GTM`,
                                    layoutDependency: R,
                                    layoutId: `ny6rzq_hv`,
                                    children: [
                                      /*#__PURE__*/ f(h.label, {
                                        className: `framer-6i4hig`,
                                        "data-framer-name": `gclid`,
                                        layoutDependency: R,
                                        layoutId: `k8xo3aTX0`,
                                        children: /*#__PURE__*/ f(F, {
                                          className: `framer-lv5jpc`,
                                          inputName: `gclid`,
                                          layoutDependency: R,
                                          layoutId: `bDJuRUus8`,
                                          placeholder: W(`v30`, c) ?? `gclid`,
                                          required: !1,
                                          style: {
                                            "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                            "--framer-input-border-bottom-width": `1px`,
                                            "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                            "--framer-input-border-left-width": `1px`,
                                            "--framer-input-border-radius-bottom-left": `3px`,
                                            "--framer-input-border-radius-bottom-right": `3px`,
                                            "--framer-input-border-radius-top-left": `3px`,
                                            "--framer-input-border-radius-top-right": `3px`,
                                            "--framer-input-border-right-width": `1px`,
                                            "--framer-input-border-style": `solid`,
                                            "--framer-input-border-top-width": `1px`,
                                            "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                            "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                            "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                            opacity: 0,
                                          },
                                          type: `text`,
                                        }),
                                      }),
                                      /*#__PURE__*/ f(h.label, {
                                        className: `framer-bqaqsr`,
                                        "data-framer-name": `utm_source`,
                                        layoutDependency: R,
                                        layoutId: `Ng0DlWUlP`,
                                        children: /*#__PURE__*/ f(F, {
                                          className: `framer-wj2pgb`,
                                          inputName: `utm_source`,
                                          layoutDependency: R,
                                          layoutId: `yeJXnz_yC`,
                                          placeholder: W(`v31`, c) ?? `utm_source`,
                                          required: !1,
                                          style: {
                                            "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                            "--framer-input-border-bottom-width": `1px`,
                                            "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                            "--framer-input-border-left-width": `1px`,
                                            "--framer-input-border-radius-bottom-left": `3px`,
                                            "--framer-input-border-radius-bottom-right": `3px`,
                                            "--framer-input-border-radius-top-left": `3px`,
                                            "--framer-input-border-radius-top-right": `3px`,
                                            "--framer-input-border-right-width": `1px`,
                                            "--framer-input-border-style": `solid`,
                                            "--framer-input-border-top-width": `1px`,
                                            "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                            "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                            "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                            opacity: 0,
                                          },
                                          type: `text`,
                                        }),
                                      }),
                                      /*#__PURE__*/ f(h.label, {
                                        className: `framer-1x69acp`,
                                        "data-framer-name": `utm_medium`,
                                        layoutDependency: R,
                                        layoutId: `cVsdlXgZg`,
                                        children: /*#__PURE__*/ f(F, {
                                          className: `framer-1pvmul5`,
                                          inputName: `utm_medium`,
                                          layoutDependency: R,
                                          layoutId: `c1Q2ZnQ5p`,
                                          placeholder: W(`v32`, c) ?? `utm_medium`,
                                          required: !1,
                                          style: {
                                            "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                            "--framer-input-border-bottom-width": `1px`,
                                            "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                            "--framer-input-border-left-width": `1px`,
                                            "--framer-input-border-radius-bottom-left": `3px`,
                                            "--framer-input-border-radius-bottom-right": `3px`,
                                            "--framer-input-border-radius-top-left": `3px`,
                                            "--framer-input-border-radius-top-right": `3px`,
                                            "--framer-input-border-right-width": `1px`,
                                            "--framer-input-border-style": `solid`,
                                            "--framer-input-border-top-width": `1px`,
                                            "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                            "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                            "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                            opacity: 0,
                                          },
                                          type: `text`,
                                        }),
                                      }),
                                      /*#__PURE__*/ f(h.label, {
                                        className: `framer-1cnd8cw`,
                                        "data-framer-name": `utm_campaign`,
                                        layoutDependency: R,
                                        layoutId: `VClU2Jf6D`,
                                        children: /*#__PURE__*/ f(F, {
                                          className: `framer-gy1ajf`,
                                          inputName: `utm_campaign`,
                                          layoutDependency: R,
                                          layoutId: `QEGBDvAhb`,
                                          placeholder: W(`v33`, c) ?? `广告系列 (utm_campaign)`,
                                          required: !1,
                                          style: {
                                            "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                            "--framer-input-border-bottom-width": `1px`,
                                            "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                            "--framer-input-border-left-width": `1px`,
                                            "--framer-input-border-radius-bottom-left": `3px`,
                                            "--framer-input-border-radius-bottom-right": `3px`,
                                            "--framer-input-border-radius-top-left": `3px`,
                                            "--framer-input-border-radius-top-right": `3px`,
                                            "--framer-input-border-right-width": `1px`,
                                            "--framer-input-border-style": `solid`,
                                            "--framer-input-border-top-width": `1px`,
                                            "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                            "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                            "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                            opacity: 0,
                                          },
                                          type: `text`,
                                        }),
                                      }),
                                      /*#__PURE__*/ f(h.label, {
                                        className: `framer-u02p0r`,
                                        "data-framer-name": `utm_term`,
                                        layoutDependency: R,
                                        layoutId: `gjNZLYHvy`,
                                        children: /*#__PURE__*/ f(F, {
                                          className: `framer-11mlgaa`,
                                          inputName: `utm_term`,
                                          layoutDependency: R,
                                          layoutId: `VI2Ykp_Rv`,
                                          placeholder: W(`v34`, c) ?? `utm_term`,
                                          required: !1,
                                          style: {
                                            "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                            "--framer-input-border-bottom-width": `1px`,
                                            "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                            "--framer-input-border-left-width": `1px`,
                                            "--framer-input-border-radius-bottom-left": `3px`,
                                            "--framer-input-border-radius-bottom-right": `3px`,
                                            "--framer-input-border-radius-top-left": `3px`,
                                            "--framer-input-border-radius-top-right": `3px`,
                                            "--framer-input-border-right-width": `1px`,
                                            "--framer-input-border-style": `solid`,
                                            "--framer-input-border-top-width": `1px`,
                                            "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                            "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                            "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                            opacity: 0,
                                          },
                                          type: `text`,
                                        }),
                                      }),
                                      /*#__PURE__*/ f(h.label, {
                                        className: `framer-8anbju`,
                                        "data-framer-name": `utm_content`,
                                        layoutDependency: R,
                                        layoutId: `f6wct3zV7`,
                                        children: /*#__PURE__*/ f(F, {
                                          className: `framer-umnwhb`,
                                          inputName: `utm_content`,
                                          layoutDependency: R,
                                          layoutId: `wtVvRInFv`,
                                          placeholder: W(`v35`, c) ?? `utm_content`,
                                          required: !1,
                                          style: {
                                            "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                            "--framer-input-border-bottom-width": `1px`,
                                            "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                            "--framer-input-border-left-width": `1px`,
                                            "--framer-input-border-radius-bottom-left": `3px`,
                                            "--framer-input-border-radius-bottom-right": `3px`,
                                            "--framer-input-border-radius-top-left": `3px`,
                                            "--framer-input-border-radius-top-right": `3px`,
                                            "--framer-input-border-right-width": `1px`,
                                            "--framer-input-border-style": `solid`,
                                            "--framer-input-border-top-width": `1px`,
                                            "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                            "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                            "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                            opacity: 0,
                                          },
                                          type: `text`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ f(h.label, {
                                    className: `framer-l39z37`,
                                    layoutDependency: R,
                                    layoutId: `mET0QgWGj`,
                                    children: /*#__PURE__*/ f(F, {
                                      className: `framer-1325kuh`,
                                      inputName: `Email`,
                                      layoutDependency: R,
                                      layoutId: `lPUttS2PD`,
                                      placeholder: W(`v12`, c) ?? `电子邮件`,
                                      required: !0,
                                      style: {
                                        "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                        "--framer-input-border-bottom-width": `1px`,
                                        "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                        "--framer-input-border-left-width": `1px`,
                                        "--framer-input-border-radius-bottom-left": `3px`,
                                        "--framer-input-border-radius-bottom-right": `3px`,
                                        "--framer-input-border-radius-top-left": `3px`,
                                        "--framer-input-border-radius-top-right": `3px`,
                                        "--framer-input-border-right-width": `1px`,
                                        "--framer-input-border-style": `solid`,
                                        "--framer-input-border-top-width": `1px`,
                                        "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                        "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                        "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                      },
                                      type: `email`,
                                      ...X(
                                        {
                                          lA_pXQ2vq: {
                                            inputName: `Business Email`,
                                            placeholder: W(`v26`, c) ?? `商务电子邮件`,
                                          },
                                          PQHwzDtoU: {
                                            inputName: `Business Email`,
                                            placeholder: W(`v26`, c) ?? `商务电子邮件`,
                                          },
                                          uTGLNwn5B: {
                                            inputName: `Business Email`,
                                            placeholder: W(`v26`, c) ?? `商务电子邮件`,
                                          },
                                        },
                                        C,
                                        N
                                      ),
                                    }),
                                  }),
                                  /*#__PURE__*/ f(h.label, {
                                    className: `framer-1hpg3q8`,
                                    layoutDependency: R,
                                    layoutId: `x1W6c3CR0`,
                                    children: /*#__PURE__*/ f(F, {
                                      className: `framer-1o1a1mx`,
                                      inputName: `Name`,
                                      layoutDependency: R,
                                      layoutId: `JQf6wStJA`,
                                      placeholder: W(`v11`, c) ?? `姓名`,
                                      required: !0,
                                      style: {
                                        "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                        "--framer-input-border-bottom-width": `1px`,
                                        "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                        "--framer-input-border-left-width": `1px`,
                                        "--framer-input-border-radius-bottom-left": `3px`,
                                        "--framer-input-border-radius-bottom-right": `3px`,
                                        "--framer-input-border-radius-top-left": `3px`,
                                        "--framer-input-border-radius-top-right": `3px`,
                                        "--framer-input-border-right-width": `1px`,
                                        "--framer-input-border-style": `solid`,
                                        "--framer-input-border-top-width": `1px`,
                                        "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                        "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                        "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                      },
                                      type: `text`,
                                    }),
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-14eq7b2`,
                                    layoutDependency: R,
                                    layoutId: `rQcpPdxEM`,
                                    children: [
                                      /*#__PURE__*/ f(h.label, {
                                        className: `framer-v4n9vi`,
                                        layoutDependency: R,
                                        layoutId: `USFJdQ626`,
                                        children: /*#__PURE__*/ f(F, {
                                          className: `framer-bsxw4`,
                                          inputName: `Company`,
                                          layoutDependency: R,
                                          layoutId: `OD5xHj9Zp`,
                                          placeholder: W(`v28`, c) ?? `公司`,
                                          required: !0,
                                          style: {
                                            "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                            "--framer-input-border-bottom-width": `1px`,
                                            "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                            "--framer-input-border-left-width": `1px`,
                                            "--framer-input-border-radius-bottom-left": `3px`,
                                            "--framer-input-border-radius-bottom-right": `3px`,
                                            "--framer-input-border-radius-top-left": `3px`,
                                            "--framer-input-border-radius-top-right": `3px`,
                                            "--framer-input-border-right-width": `1px`,
                                            "--framer-input-border-style": `solid`,
                                            "--framer-input-border-top-width": `1px`,
                                            "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                            "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                            "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                          },
                                          type: `text`,
                                        }),
                                      }),
                                      /*#__PURE__*/ f(h.label, {
                                        className: `framer-1siltlh`,
                                        layoutDependency: R,
                                        layoutId: `IpP6H8jUv`,
                                        children: /*#__PURE__*/ f(F, {
                                          className: `framer-1ks8mqw`,
                                          inputName: `Position`,
                                          layoutDependency: R,
                                          layoutId: `DSMpZS9nm`,
                                          placeholder: W(`v29`, c) ?? `职位`,
                                          required: !0,
                                          style: {
                                            "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                            "--framer-input-border-bottom-width": `1px`,
                                            "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                            "--framer-input-border-left-width": `1px`,
                                            "--framer-input-border-radius-bottom-left": `3px`,
                                            "--framer-input-border-radius-bottom-right": `3px`,
                                            "--framer-input-border-radius-top-left": `3px`,
                                            "--framer-input-border-radius-top-right": `3px`,
                                            "--framer-input-border-right-width": `1px`,
                                            "--framer-input-border-style": `solid`,
                                            "--framer-input-border-top-width": `1px`,
                                            "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                            "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                            "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                          },
                                          type: `text`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ f(h.label, {
                                    className: `framer-p8damu`,
                                    layoutDependency: R,
                                    layoutId: `EtG5serPe`,
                                    children: /*#__PURE__*/ f(F, {
                                      className: `framer-1n4zhf9`,
                                      inputName: `What you want to build or evaluate?`,
                                      layoutDependency: R,
                                      layoutId: `EK3crIHhO`,
                                      placeholder: W(`v27`, c) ?? `你想用 Tier0 创造什么呢？`,
                                      required: !0,
                                      style: {
                                        "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                        "--framer-input-border-bottom-width": `1px`,
                                        "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                        "--framer-input-border-left-width": `1px`,
                                        "--framer-input-border-radius-bottom-left": `3px`,
                                        "--framer-input-border-radius-bottom-right": `3px`,
                                        "--framer-input-border-radius-top-left": `3px`,
                                        "--framer-input-border-radius-top-right": `3px`,
                                        "--framer-input-border-right-width": `1px`,
                                        "--framer-input-border-style": `solid`,
                                        "--framer-input-border-top-width": `1px`,
                                        "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                        "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                        "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                      },
                                      type: `textarea`,
                                      ...X(
                                        {
                                          lA_pXQ2vq: {
                                            inputName: `What do you want to build with Tier0?`,
                                          },
                                        },
                                        C,
                                        N
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ f(k, {
                                height: 40,
                                ...X(
                                  {
                                    lA_pXQ2vq: { width: `481px` },
                                    PQHwzDtoU: {
                                      width: `312px`,
                                      y: (d?.y || 0) + ((d?.height || 645) - 645) / 2 + 608.6,
                                    },
                                    uTGLNwn5B: { width: `305px` },
                                  },
                                  C,
                                  N
                                ),
                                children: /*#__PURE__*/ f(P, {
                                  className: `framer-axgcdn-container`,
                                  layoutDependency: R,
                                  layoutId: `Sy1YDWn1l-container`,
                                  nodeId: `Sy1YDWn1l`,
                                  rendersWithMotion: !0,
                                  scopeId: `b6D6eMBMO`,
                                  children: /*#__PURE__*/ f(bt, {
                                    height: `100%`,
                                    id: `Sy1YDWn1l`,
                                    layoutId: `Sy1YDWn1l`,
                                    style: { height: `100%`, width: `100%` },
                                    type: `submit`,
                                    variant: Q(
                                      e,
                                      {
                                        error: `tREbu9dxY`,
                                        incomplete: `OsCx0OZ4e`,
                                        pending: `dE0c2HPRe`,
                                        success: `odJt_Ezn2`,
                                      },
                                      Z(`OyBVIoN_s`)
                                    ),
                                    width: `100%`,
                                    ...X(
                                      {
                                        lA_pXQ2vq: { wzZDx2QyY: void 0 },
                                        uTGLNwn5B: { wzZDx2QyY: void 0 },
                                      },
                                      C,
                                      N
                                    ),
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ p(h.label, {
                                className: `framer-164m4qq`,
                                layoutDependency: R,
                                layoutId: `BSFkIDPWu`,
                                children: [
                                  /*#__PURE__*/ f(A, {
                                    className: `framer-1juhprw`,
                                    defaultChecked: !1,
                                    inputName: `Consent checkbox`,
                                    layoutDependency: R,
                                    layoutId: `nvq6gbwZ2`,
                                    required: !0,
                                    style: {
                                      "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                      "--framer-input-boolean-checked-background": `rgb(0, 153, 255)`,
                                      "--framer-input-border-radius-bottom-left": `3px`,
                                      "--framer-input-border-radius-bottom-right": `3px`,
                                      "--framer-input-border-radius-top-left": `3px`,
                                      "--framer-input-border-radius-top-right": `3px`,
                                      "--framer-input-icon-color": `rgb(255, 255, 255)`,
                                    },
                                    type: `checkbox`,
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-1m5iewj`,
                                    layoutDependency: R,
                                    layoutId: `TljvOiaps`,
                                    children: [
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v15`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `10px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(153, 153, 153))`,
                                              },
                                              children: `同意方可提交，您可以随时通过我们的电子邮件链接退订。`,
                                            }),
                                          }),
                                        className: `framer-17zkm1q`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: R,
                                        layoutId: `WyK8raNii`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--extracted-r6o4lv": `rgb(153, 153, 153)`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v37`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ p(h.p, {
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                "--framer-font-size": `10px`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-27988b78-4da3-419a-9346-60402ee10374, rgb(195, 196, 197)))`,
                                              },
                                              children: [
                                                /*#__PURE__*/ f(h.em, {
                                                  children: `我同意接收 FREEZONEX 的邮件与更新，并同意按以下政策处理我的个人数据：  `,
                                                }),
                                                /*#__PURE__*/ f(L, {
                                                  href: { webPageId: `fHDmqdJOv` },
                                                  motionChild: !0,
                                                  nodeId: `pz32fGyKz`,
                                                  openInNewTab: !1,
                                                  relValues: [],
                                                  scopeId: `b6D6eMBMO`,
                                                  smoothScroll: !1,
                                                  children: /*#__PURE__*/ f(h.a, {
                                                    className: `framer-styles-preset-1cuew56`,
                                                    "data-styles-preset": `U42XhPPDq`,
                                                    children: /*#__PURE__*/ f(h.em, {
                                                      children: `隐私政策`,
                                                    }),
                                                  }),
                                                }),
                                                /*#__PURE__*/ f(h.em, { children: `.` }),
                                              ],
                                            }),
                                          }),
                                        className: `framer-nz7ij5`,
                                        fonts: [
                                          `GF;IBM Plex Sans-regular`,
                                          `GF;IBM Plex Sans-italic`,
                                        ],
                                        layoutDependency: R,
                                        layoutId: `pz32fGyKz`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-27988b78-4da3-419a-9346-60402ee10374, rgb(195, 196, 197))`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    K() &&
                      /*#__PURE__*/ p(h.div, {
                        className: `framer-m0uz3h`,
                        layoutDependency: R,
                        layoutId: `HHK4B_inz`,
                        children: [
                          /*#__PURE__*/ p(h.div, {
                            className: `framer-120qsvp`,
                            layoutDependency: R,
                            layoutId: `EmthKhoTP`,
                            children: [
                              /*#__PURE__*/ f(h.div, {
                                className: `framer-kgd3f5`,
                                layoutDependency: R,
                                layoutId: `c9E1KofAV`,
                                children: /*#__PURE__*/ p(h.div, {
                                  className: `framer-18fillb`,
                                  layoutDependency: R,
                                  layoutId: `dQMI9SdpD`,
                                  children: [
                                    /*#__PURE__*/ f(g, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        W(`v38`, c) ??
                                        /*#__PURE__*/ f(o, {
                                          children: /*#__PURE__*/ p(h.p, {
                                            style: {
                                              "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                                              "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                              "--framer-font-size": `30px`,
                                              "--framer-font-weight": `600`,
                                              "--framer-line-height": `110%`,
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(115, 178, 0))`,
                                              "--framer-text-transform": `capitalize`,
                                            },
                                            children: [
                                              `Start Monitoring OEE`,
                                              /*#__PURE__*/ f(h.br, {}),
                                              /*#__PURE__*/ f(h.span, {
                                                style: {
                                                  "--framer-text-color": `var(--extracted-3sq8v0, rgb(47, 52, 59))`,
                                                },
                                                children: `in One Click`,
                                              }),
                                            ],
                                          }),
                                        }),
                                      className: `framer-1imtwg7`,
                                      "data-framer-name": `Start Monitoring OEE\u2028in One Click`,
                                      fonts: [`GF;Poppins-600`],
                                      layoutDependency: R,
                                      layoutId: `JIBRa36Pe`,
                                      style: {
                                        "--extracted-3sq8v0": `rgb(47, 52, 59)`,
                                        "--extracted-r6o4lv": `rgb(115, 178, 0)`,
                                        "--framer-paragraph-spacing": `0px`,
                                      },
                                      transformTemplate: jt,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ f(L, {
                                      href: `https://supos-ce-instance3.supos.app:8443/home`,
                                      motionChild: !0,
                                      nodeId: `Dr4pPENRF`,
                                      openInNewTab: !0,
                                      scopeId: `b6D6eMBMO`,
                                      children: /*#__PURE__*/ f(w, {
                                        as: `a`,
                                        className: `framer-18y1495 framer-1k8wezx`,
                                        "data-framer-name": `Union`,
                                        layout: `position`,
                                        layoutDependency: R,
                                        layoutId: `Dr4pPENRF`,
                                        opacity: 1,
                                        style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 27"></svg>`,
                                        svgContentId: 11269920496,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              /*#__PURE__*/ p(h.div, {
                                className: `framer-7rfvem`,
                                "data-framer-name": `Frame 1321316428`,
                                layoutDependency: R,
                                layoutId: `lTai5vpHV`,
                                children: [
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-1qyybdi`,
                                    "data-framer-name": `Frame 1321316432`,
                                    layoutDependency: R,
                                    layoutId: `ZdnsiTYz0`,
                                    children: [
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v39`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `11px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `12.616800000000001px`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9c739489-be53-4454-b7e4-cefeef9ed790, rgb(204, 201, 190)))`,
                                              },
                                              children: `0 设置`,
                                            }),
                                          }),
                                        className: `framer-ir789m`,
                                        "data-framer-name": `0 Setup`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: R,
                                        layoutId: `LBJaNMRuK`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--extracted-r6o4lv": `var(--token-9c739489-be53-4454-b7e4-cefeef9ed790, rgb(204, 201, 190))`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(h.div, {
                                        className: `framer-uwlj4h`,
                                        "data-framer-name": `Settings`,
                                        layoutDependency: R,
                                        layoutId: `YnenBSS8n`,
                                        children: /*#__PURE__*/ f(w, {
                                          className: `framer-f9pcz9`,
                                          "data-framer-name": `Vector`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 26,
                                          intrinsicWidth: 25,
                                          layoutDependency: R,
                                          layoutId: `LYteLNBL8`,
                                          svg: `<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.9846 13.8882C21.9846 13.6661 21.9846 13.444 21.9846 13.213C21.9846 12.9821 21.9846 12.76 21.9846 12.529L23.6902 11.0367C24.0046 10.7596 24.2109 10.3802 24.2727 9.96573C24.3344 9.55122 24.2477 9.12822 24.0277 8.77149L21.9313 5.21824C21.7755 4.94843 21.5515 4.72432 21.2818 4.56841C21.0121 4.41249 20.7061 4.33025 20.3945 4.32993C20.2015 4.32845 20.0094 4.35845 19.826 4.41876L17.6674 5.14718C17.2947 4.89952 16.906 4.67695 16.5037 4.48094L16.0507 2.2424C15.9695 1.83342 15.747 1.46605 15.4222 1.20459C15.0974 0.943121 14.691 0.804227 14.2741 0.812216H10.1168C9.69989 0.804227 9.29347 0.943121 8.96867 1.20459C8.64387 1.46605 8.42138 1.83342 8.34015 2.2424L7.88711 4.48094C7.48198 4.6769 7.09027 4.89947 6.71454 5.14718L4.60036 4.38323C4.41497 4.33493 4.22298 4.31693 4.03184 4.32993C3.72029 4.33025 3.4143 4.41249 3.14456 4.56841C2.87483 4.72432 2.65084 4.94843 2.49506 5.21824L0.398648 8.77149C0.191305 9.12769 0.114257 9.5449 0.1807 9.95166C0.247144 10.3584 0.452945 10.7294 0.762856 11.0011L2.44176 12.5379C2.44176 12.76 2.44176 12.9821 2.44176 13.213C2.44176 13.444 2.44176 13.6661 2.44176 13.897L0.762856 15.3894C0.444191 15.663 0.232761 16.0407 0.166087 16.4553C0.0994131 16.87 0.181808 17.2949 0.398648 17.6546L2.49506 21.2078C2.65084 21.4777 2.87483 21.7018 3.14456 21.8577C3.4143 22.0136 3.72029 22.0958 4.03184 22.0962C4.22492 22.0976 4.41694 22.0676 4.60036 22.0073L6.75896 21.2789C7.13164 21.5266 7.5204 21.7491 7.92265 21.9451L8.37568 24.1837C8.45692 24.5927 8.67941 24.96 9.00421 25.2215C9.32901 25.483 9.73542 25.6219 10.1523 25.6139H14.3451C14.762 25.6219 15.1684 25.483 15.4932 25.2215C15.818 24.96 16.0405 24.5927 16.1218 24.1837L16.5748 21.9451C16.9799 21.7492 17.3716 21.5266 17.7474 21.2789L19.8971 22.0073C20.0805 22.0676 20.2725 22.0976 20.4656 22.0962C20.7772 22.0958 21.0831 22.0136 21.3529 21.8577C21.6226 21.7018 21.8466 21.4777 22.0024 21.2078L24.0277 17.6546C24.2351 17.2984 24.3121 16.8812 24.2457 16.4744C24.1792 16.0677 23.9734 15.6967 23.6635 15.4249L21.9846 13.8882ZM20.3945 20.3195L17.3476 19.2891C16.6344 19.8932 15.8192 20.3655 14.9403 20.6837L14.3096 23.8728H10.1168L9.48607 20.7193C8.61413 20.392 7.80336 19.9206 7.08763 19.3246L4.03184 20.3195L1.93543 16.7663L4.35163 14.6343C4.18738 13.7148 4.18738 12.7735 4.35163 11.8539L1.93543 9.6598L4.03184 6.10655L7.07875 7.13699C7.79201 6.53285 8.60718 6.06059 9.48607 5.74234L10.1168 2.55331H14.3096L14.9403 5.70681C15.8123 6.03409 16.623 6.50553 17.3387 7.10146L20.3945 6.10655L22.491 9.6598L20.0747 11.7917C20.239 12.7113 20.239 13.6526 20.0747 14.5722L22.491 16.7663L20.3945 20.3195Z" fill="#CCC9BE"/>
<path d="M12.2132 18.5429C11.159 18.5429 10.1286 18.2303 9.25207 17.6447C8.37558 17.059 7.69244 16.2266 7.28903 15.2527C6.88563 14.2788 6.78008 13.2071 6.98573 12.1732C7.19139 11.1393 7.69901 10.1897 8.4444 9.44426C9.1898 8.69886 10.1395 8.19124 11.1734 7.98559C12.2073 7.77993 13.2789 7.88548 14.2528 8.28889C15.2267 8.69229 16.0592 9.37544 16.6448 10.2519C17.2305 11.1284 17.5431 12.1589 17.5431 13.213C17.5502 13.915 17.4172 14.6112 17.1519 15.2611C16.8865 15.911 16.4942 16.5014 15.9979 16.9977C15.5015 17.4941 14.9111 17.8864 14.2612 18.1517C13.6114 18.417 12.9151 18.55 12.2132 18.5429ZM12.2132 9.6598C11.7436 9.64886 11.2766 9.73329 10.8406 9.90798C10.4045 10.0827 10.0085 10.344 9.67631 10.6762C9.34415 11.0083 9.08282 11.4044 8.90813 11.8404C8.73344 12.2765 8.649 12.7434 8.65994 13.213C8.649 13.6827 8.73344 14.1496 8.90813 14.5856C9.08282 15.0217 9.34415 15.4178 9.67631 15.7499C10.0085 16.0821 10.4045 16.3434 10.8406 16.5181C11.2766 16.6928 11.7436 16.7772 12.2132 16.7663C12.6828 16.7772 13.1497 16.6928 13.5858 16.5181C14.0218 16.3434 14.4179 16.0821 14.7501 15.7499C15.0822 15.4178 15.3436 15.0217 15.5182 14.5856C15.6929 14.1496 15.7774 13.6827 15.7664 13.213C15.7774 12.7434 15.6929 12.2765 15.5182 11.8404C15.3436 11.4044 15.0822 11.0083 14.7501 10.6762C14.4179 10.344 14.0218 10.0827 13.5858 9.90798C13.1497 9.73329 12.6828 9.64886 12.2132 9.6598Z" fill="#CCC9BE"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ f(w, {
                                    className: `framer-6bx1wv`,
                                    "data-framer-name": `Line 122`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 4,
                                    intrinsicWidth: 152,
                                    layoutDependency: R,
                                    layoutId: `BhrerrKVg`,
                                    style: { rotate: 90 },
                                    svg: `<svg width="152" height="4" viewBox="-1 -1 152 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="1.18421" x2="150" y2="1.18421" stroke="#73B200" stroke-width="0.901102" stroke-dasharray="1.8 1.8"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-1kf3mox`,
                                    "data-framer-name": `Frame 1321316433`,
                                    layoutDependency: R,
                                    layoutId: `cXYdAkMn7`,
                                    children: [
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v40`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `11px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `12.616800000000001px`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9c739489-be53-4454-b7e4-cefeef9ed790, rgb(204, 201, 190)))`,
                                              },
                                              children: `0 成本`,
                                            }),
                                          }),
                                        className: `framer-s2n6id`,
                                        "data-framer-name": `0 Cost`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: R,
                                        layoutId: `h9UwCM6r4`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--extracted-r6o4lv": `var(--token-9c739489-be53-4454-b7e4-cefeef9ed790, rgb(204, 201, 190))`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(h.div, {
                                        className: `framer-wnrrxw`,
                                        "data-framer-name": `Currency--dollar`,
                                        layoutDependency: R,
                                        layoutId: `eVM565gNL`,
                                        children: /*#__PURE__*/ f(w, {
                                          className: `framer-1u7yh4b`,
                                          "data-framer-name": `Vector`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 24,
                                          intrinsicWidth: 14,
                                          layoutDependency: R,
                                          layoutId: `lGwt48_gS`,
                                          svg: `<svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4313 16.2238C13.4313 12.1241 10.0734 11.6569 7.37556 11.2821C4.43525 10.8727 2.77153 10.5182 2.77153 7.9865C2.77153 5.86077 4.99862 5.1065 6.90555 5.1065C7.85601 5.07576 8.80016 5.27139 9.66015 5.67727C10.5201 6.08315 11.2713 6.68764 11.8518 7.4409L13.2342 6.32536C12.6125 5.52606 11.839 4.8575 10.9582 4.3581C10.0773 3.8587 9.10648 3.53831 8.1014 3.41534V0.664948H6.32478V3.34942C3.11335 3.54414 0.994906 5.35701 0.994906 7.98641C0.994906 12.1881 4.39714 12.6613 7.13092 13.0409C10.0202 13.4431 11.6546 13.7892 11.6546 16.2238C11.6546 18.9174 8.87192 19.3195 7.21309 19.3195C4.16671 19.3195 2.87973 18.4632 1.6861 16.9851L0.303711 18.1006C1.00796 19.0286 1.91881 19.7797 2.96397 20.2942C4.00914 20.8088 5.15985 21.0726 6.32478 21.0648V23.761H8.1014V21.0562C11.4109 20.786 13.4313 18.9889 13.4313 16.2238Z" fill="#CCC9BE"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ f(w, {
                                    className: `framer-tppptb`,
                                    "data-framer-name": `Line 123`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 4,
                                    intrinsicWidth: 152,
                                    layoutDependency: R,
                                    layoutId: `Xhkb3Yk6I`,
                                    style: { rotate: 90 },
                                    svg: `<svg width="152" height="4" viewBox="-1 -1 152 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.819011" x2="150" y2="0.81901" stroke="#73B200" stroke-width="0.901102" stroke-dasharray="1.8 1.8"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-kgtaa8`,
                                    "data-framer-name": `Frame 1321316434`,
                                    layoutDependency: R,
                                    layoutId: `VhNEFIWL5`,
                                    children: [
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v41`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `11px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `12.616800000000001px`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9c739489-be53-4454-b7e4-cefeef9ed790, rgb(204, 201, 190)))`,
                                              },
                                              children: `0 数据同步延迟`,
                                            }),
                                          }),
                                        className: `framer-10mvux6`,
                                        "data-framer-name": `0 Lag in Data Sync`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: R,
                                        layoutId: `I4oHeKZ4o`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--extracted-r6o4lv": `var(--token-9c739489-be53-4454-b7e4-cefeef9ed790, rgb(204, 201, 190))`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(h.div, {
                                        className: `framer-1h4ck`,
                                        "data-framer-name": `Db2--data-sharing-group`,
                                        layoutDependency: R,
                                        layoutId: `jsAvmqJWT`,
                                        children: /*#__PURE__*/ f(w, {
                                          className: `framer-2yoi18`,
                                          "data-framer-name": `Vector`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 26,
                                          intrinsicWidth: 26,
                                          layoutDependency: R,
                                          layoutId: `n2BSQvjum`,
                                          svg: `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.10672 23.8727V18.3919L8.40727 20.6838L9.65997 19.4312L5.21841 14.9896L0.776855 19.4312L2.02955 20.6838L4.3301 18.3919V23.8727C4.3301 24.8521 5.12709 25.6493 6.10672 25.6493H14.1015V23.8727H6.10672Z" fill="#CCC9BE"/>
<path d="M21.208 14.1013C18.6758 14.1013 16.7665 15.2472 16.7665 16.7662V22.9844C16.7665 24.5034 18.6758 25.6493 21.208 25.6493C23.7402 25.6493 25.6496 24.5034 25.6496 22.9844V16.7662C25.6496 15.2472 23.7402 14.1013 21.208 14.1013ZM21.208 15.8779C22.9278 15.8779 23.873 16.545 23.873 16.7662C23.873 16.9874 22.9278 17.6545 21.208 17.6545C19.4882 17.6545 18.5431 16.9874 18.5431 16.7662C18.5431 16.545 19.4882 15.8779 21.208 15.8779ZM21.208 23.8727C19.4882 23.8727 18.5431 23.2056 18.5431 22.9844V18.9163C19.2772 19.2381 20.1872 19.4312 21.208 19.4312C22.2289 19.4312 23.1389 19.2381 23.873 18.9163V22.9844C23.873 23.2056 22.9278 23.8727 21.208 23.8727Z" fill="#CCC9BE"/>
<path d="M24.3969 5.74209L22.0963 8.03403V2.55323C22.0963 1.57387 21.2993 0.776611 20.3197 0.776611H12.3249V2.55323H20.3197V8.03403L18.0192 5.74209L16.7665 6.99479L21.208 11.4363L25.6496 6.99479L24.3969 5.74209Z" fill="#CCC9BE"/>
<path d="M5.21841 12.3247C7.75063 12.3247 9.65997 11.1787 9.65997 9.65973V3.44155C9.65997 1.92253 7.75063 0.776611 5.21841 0.776611C2.68619 0.776611 0.776855 1.92253 0.776855 3.44155V9.65973C0.776855 11.1787 2.68619 12.3247 5.21841 12.3247ZM5.21841 2.55323C6.93818 2.55323 7.88335 3.22036 7.88335 3.44155C7.88335 3.66274 6.93818 4.32986 5.21841 4.32986C3.49864 4.32986 2.55348 3.66274 2.55348 3.44155C2.55348 3.22036 3.49864 2.55323 5.21841 2.55323ZM2.55348 5.59161C3.28758 5.91345 4.19756 6.10648 5.21841 6.10648C6.23926 6.10648 7.14925 5.91345 7.88335 5.59161V9.65973C7.88335 9.88091 6.93818 10.548 5.21841 10.548C3.49864 10.548 2.55348 9.88091 2.55348 9.65973V5.59161Z" fill="#CCC9BE"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          /*#__PURE__*/ p(h.div, {
                            className: `framer-13qz2vo`,
                            "data-framer-name": `Frame 1321316440`,
                            layoutDependency: R,
                            layoutId: `j1YUepziF`,
                            children: [
                              /*#__PURE__*/ p(h.div, {
                                className: `framer-u5xok0`,
                                "data-framer-name": `Frame 1321316437`,
                                layoutDependency: R,
                                layoutId: `o3Rm27Gtz`,
                                children: [
                                  /*#__PURE__*/ f(w, {
                                    className: `framer-st4n4m`,
                                    "data-framer-name": `Line 124`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 94,
                                    intrinsicWidth: 12,
                                    layoutDependency: R,
                                    layoutId: `INldAoClE`,
                                    svg: `<svg width="12" height="94" viewBox="-3 -3 12 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="2.55566" y1="1.09278e-07" x2="2.55566" y2="88" stroke="#73B200" stroke-width="5"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-yh16ge`,
                                    "data-framer-name": `Frame 1321316436`,
                                    layoutDependency: R,
                                    layoutId: `PWEWkOmEq`,
                                    children: [
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v42`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                                                "--framer-font-family": `Poppins`,
                                                "--framer-font-size": `13px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `600`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `14.000000000000002px`,
                                              },
                                              children: `支持MQTT、OPC UA、Modbus等`,
                                            }),
                                          }),
                                        className: `framer-19p1ae8`,
                                        "data-framer-name": `Supports MQTT, OPC UA, Modbus, and More`,
                                        fonts: [`GF;Poppins-600`],
                                        layoutDependency: R,
                                        layoutId: `dzlJmB2cW`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v43`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `12px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `14.000000000000002px`,
                                              },
                                              children: `无缝连接多种工业协议，以实现灵活的数据采集。`,
                                            }),
                                          }),
                                        className: `framer-8jfbzo`,
                                        "data-framer-name": `Seamlessly connect to a wide range of industrial protocols for flexible data acquisition.`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: R,
                                        layoutId: `OtBDhay4_`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ p(h.div, {
                                className: `framer-10y4qqp`,
                                "data-framer-name": `Frame 1321316438`,
                                layoutDependency: R,
                                layoutId: `lWNfJ1xYW`,
                                children: [
                                  /*#__PURE__*/ f(w, {
                                    className: `framer-wvokbp`,
                                    "data-framer-name": `Line 124`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 94,
                                    intrinsicWidth: 12,
                                    layoutDependency: R,
                                    layoutId: `v8lyea5Ss`,
                                    svg: `<svg width="12" height="94" viewBox="-3 -3 12 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="2.55566" y1="1.09278e-07" x2="2.55566" y2="88" stroke="#73B200" stroke-width="5"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-3kmmx5`,
                                    "data-framer-name": `Frame 1321316436`,
                                    layoutDependency: R,
                                    layoutId: `EfrZ5FeaK`,
                                    children: [
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v44`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                                                "--framer-font-family": `Poppins`,
                                                "--framer-font-size": `13px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `600`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `14.000000000000002px`,
                                              },
                                              children: `自定义警报和推送通知`,
                                            }),
                                          }),
                                        className: `framer-3oyysj`,
                                        "data-framer-name": `Custom Alerts & Push Notifications`,
                                        fonts: [`GF;Poppins-600`],
                                        layoutDependency: R,
                                        layoutId: `aJDsACY8t`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v45`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `12px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `14.000000000000002px`,
                                              },
                                              children: `配置实时警报，以快速响应异常生产事件。`,
                                            }),
                                          }),
                                        className: `framer-1w2vbcj`,
                                        "data-framer-name": `Configure real-time alerts to quickly respond to abnormal production events.`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: R,
                                        layoutId: `OE3G40761`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ p(h.div, {
                                className: `framer-1nz5w43`,
                                "data-framer-name": `Frame 1321316439`,
                                layoutDependency: R,
                                layoutId: `QHX8QJKMo`,
                                children: [
                                  /*#__PURE__*/ f(w, {
                                    className: `framer-slorre`,
                                    "data-framer-name": `Line 124`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 94,
                                    intrinsicWidth: 12,
                                    layoutDependency: R,
                                    layoutId: `IUKka5R9g`,
                                    svg: `<svg width="12" height="94" viewBox="-3 -3 12 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="2.55566" y1="1.09278e-07" x2="2.55566" y2="88" stroke="#73B200" stroke-width="5"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-v4o7nr`,
                                    "data-framer-name": `Frame 1321316436`,
                                    layoutDependency: R,
                                    layoutId: `Z2BuzXucd`,
                                    children: [
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v46`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                                                "--framer-font-family": `Poppins`,
                                                "--framer-font-size": `13px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `600`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `14.000000000000002px`,
                                              },
                                              children: `即时OEE仪表板与Node-RED`,
                                            }),
                                          }),
                                        className: `framer-zdk4z7`,
                                        "data-framer-name": `Instant OEE Dashboard with Node-RED`,
                                        fonts: [`GF;Poppins-600`],
                                        layoutDependency: R,
                                        layoutId: `Fgz_p1Xl6`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v47`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `12px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `14.000000000000002px`,
                                              },
                                              children: `开箱即用的预构建 OEE 可视化——通过 Node-RED 工作流完全可扩展。`,
                                            }),
                                          }),
                                        className: `framer-75a12a`,
                                        "data-framer-name": `Prebuilt OEE visualizations out of the box — fully extendable via Node-RED workflows.`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: R,
                                        layoutId: `MlNZwOqzG`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          q() &&
                            /*#__PURE__*/ f(h.div, {
                              className: `framer-gr2jex`,
                              layoutDependency: R,
                              layoutId: `IoH3NPQBK`,
                              children: /*#__PURE__*/ f(L, {
                                href: `https://www.youtube.com/watch?v=IP1BUiHD7Qs`,
                                motionChild: !0,
                                nodeId: `rIpcc_9zr`,
                                openInNewTab: !0,
                                scopeId: `b6D6eMBMO`,
                                children: /*#__PURE__*/ p(h.a, {
                                  className: `framer-1vm8184 framer-1k8wezx`,
                                  layoutDependency: R,
                                  layoutId: `rIpcc_9zr`,
                                  children: [
                                    /*#__PURE__*/ f(U, {
                                      animated: !0,
                                      className: `framer-9ja96a`,
                                      layoutDependency: R,
                                      layoutId: `Ivwbb6dgF`,
                                      style: {
                                        "--1335ju": 1.5,
                                        "--18mrqx2": `rgb(88, 91, 98)`,
                                        "--3it368": 1,
                                      },
                                    }),
                                    /*#__PURE__*/ f(g, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        W(`v48`, c) ??
                                        /*#__PURE__*/ f(o, {
                                          children: /*#__PURE__*/ f(h.h6, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy0zMDBpdGFsaWM=`,
                                              "--framer-font-family": `"IBM Plex Sans"`,
                                              "--framer-font-size": `11px`,
                                              "--framer-font-style": `italic`,
                                              "--framer-font-variation-axes": `var(--extracted-l1lhml, normal)`,
                                              "--framer-font-weight": `300`,
                                              "--framer-line-height": `130%`,
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--extracted-1w1cjl5, rgb(88, 91, 98))`,
                                            },
                                            children: /*#__PURE__*/ f(h.strong, {
                                              children: `观看快速指南视频`,
                                            }),
                                          }),
                                        }),
                                      className: `framer-cffimz`,
                                      "data-framer-name": `Transform Your digital Journey with supOS`,
                                      fonts: [
                                        `GF;IBM Plex Sans-300italic`,
                                        `GF;IBM Plex Sans-italic`,
                                      ],
                                      layoutDependency: R,
                                      layoutId: `tRUM2Ggvr`,
                                      style: {
                                        "--extracted-1w1cjl5": `rgb(88, 91, 98)`,
                                        "--extracted-l1lhml": `normal`,
                                        "--framer-paragraph-spacing": `0px`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                            }),
                        ],
                      }),
                    K() &&
                      /*#__PURE__*/ f(j, {
                        action: `https://api.framer.com/forms/v1/forms/e8ef739e-d014-4662-b7bb-33ad7291c870/submit`,
                        className: `framer-1h6719p`,
                        "data-framer-name": `Form3`,
                        layoutDependency: R,
                        layoutId: `kliDnVLwr`,
                        nodeId: `kliDnVLwr`,
                        redirectUrl: `https://supos-ce-instance3.supos.app:8443/home`,
                        style: {
                          backgroundColor: `rgb(250, 250, 250)`,
                          borderTopLeftRadius: 35,
                          borderTopRightRadius: 35,
                        },
                        children: (e) =>
                          /*#__PURE__*/ p(u, {
                            children: [
                              /*#__PURE__*/ f(g, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ f(o, {
                                  children: /*#__PURE__*/ f(h.h3, {
                                    className: `framer-styles-preset-kzlevi`,
                                    "data-styles-preset": `UIw3tgmjU`,
                                    style: { "--framer-text-alignment": `center` },
                                    children: `Try supOS instantly`,
                                  }),
                                }),
                                className: `framer-1ioffod`,
                                "data-framer-name": `Get in Touch with Strat Edge`,
                                fonts: [`Inter`],
                                layoutDependency: R,
                                layoutId: `hHjWYiZqH`,
                                style: { "--framer-paragraph-spacing": `0px` },
                                text: b,
                                verticalAlignment: `center`,
                                withExternalLayout: !0,
                              }),
                              /*#__PURE__*/ f(h.div, {
                                className: `framer-7qqjls`,
                                layoutDependency: R,
                                layoutId: `V5lh32xdG`,
                                children: /*#__PURE__*/ f(h.label, {
                                  className: `framer-7jfaf0`,
                                  layoutDependency: R,
                                  layoutId: `BqsGGlwy9`,
                                  children: /*#__PURE__*/ f(F, {
                                    className: `framer-12s3yqk`,
                                    inputName: `Name`,
                                    layoutDependency: R,
                                    layoutId: `zpEY9G1OG`,
                                    placeholder: W(`v11`, c) ?? `姓名`,
                                    required: !0,
                                    style: {
                                      "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                      "--framer-input-border-bottom-width": `1px`,
                                      "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                      "--framer-input-border-left-width": `1px`,
                                      "--framer-input-border-radius-bottom-left": `3px`,
                                      "--framer-input-border-radius-bottom-right": `3px`,
                                      "--framer-input-border-radius-top-left": `3px`,
                                      "--framer-input-border-radius-top-right": `3px`,
                                      "--framer-input-border-right-width": `1px`,
                                      "--framer-input-border-style": `solid`,
                                      "--framer-input-border-top-width": `1px`,
                                      "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                      "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                      "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                    },
                                    type: `text`,
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ f(h.label, {
                                className: `framer-4ay0l2`,
                                layoutDependency: R,
                                layoutId: `HrPTBP1lP`,
                                children: /*#__PURE__*/ f(F, {
                                  className: `framer-i8lvjm`,
                                  inputName: `Email`,
                                  layoutDependency: R,
                                  layoutId: `R6aVuDC8I`,
                                  placeholder: W(`v12`, c) ?? `电子邮件`,
                                  required: !0,
                                  style: {
                                    "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                    "--framer-input-border-bottom-width": `1px`,
                                    "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                    "--framer-input-border-left-width": `1px`,
                                    "--framer-input-border-radius-bottom-left": `3px`,
                                    "--framer-input-border-radius-bottom-right": `3px`,
                                    "--framer-input-border-radius-top-left": `3px`,
                                    "--framer-input-border-radius-top-right": `3px`,
                                    "--framer-input-border-right-width": `1px`,
                                    "--framer-input-border-style": `solid`,
                                    "--framer-input-border-top-width": `1px`,
                                    "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                    "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                    "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                  },
                                  type: `email`,
                                }),
                              }),
                              /*#__PURE__*/ f(k, {
                                height: 40,
                                ...X(
                                  {
                                    JnazYUcGM: {
                                      width: `290px`,
                                      y: (d?.y || 0) + ((d?.height || 200) - 1109.16) / 2 + 1040.26,
                                    },
                                  },
                                  C,
                                  N
                                ),
                                children: /*#__PURE__*/ f(P, {
                                  className: `framer-1o95zyh-container`,
                                  layoutDependency: R,
                                  layoutId: `gGk1CO3_W-container`,
                                  nodeId: `gGk1CO3_W`,
                                  rendersWithMotion: !0,
                                  scopeId: `b6D6eMBMO`,
                                  children: /*#__PURE__*/ f(St, {
                                    height: `100%`,
                                    id: `gGk1CO3_W`,
                                    layoutId: `gGk1CO3_W`,
                                    style: { height: `100%`, width: `100%` },
                                    type: `submit`,
                                    variant: Q(
                                      e,
                                      {
                                        error: `tREbu9dxY`,
                                        incomplete: `OsCx0OZ4e`,
                                        pending: `dE0c2HPRe`,
                                        success: `odJt_Ezn2`,
                                      },
                                      Z(`OyBVIoN_s`)
                                    ),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ p(h.label, {
                                className: `framer-1ijwag6`,
                                layoutDependency: R,
                                layoutId: `NnirJiQ2p`,
                                children: [
                                  /*#__PURE__*/ f(A, {
                                    className: `framer-1s3bxzi`,
                                    defaultChecked: !1,
                                    inputName: `Consent checkbox`,
                                    layoutDependency: R,
                                    layoutId: `tcstCEvQk`,
                                    required: !0,
                                    style: {
                                      "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                      "--framer-input-boolean-checked-background": `rgb(0, 153, 255)`,
                                      "--framer-input-border-radius-bottom-left": `3px`,
                                      "--framer-input-border-radius-bottom-right": `3px`,
                                      "--framer-input-border-radius-top-left": `3px`,
                                      "--framer-input-border-radius-top-right": `3px`,
                                      "--framer-input-icon-color": `rgb(255, 255, 255)`,
                                    },
                                    type: `checkbox`,
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-wip4bh`,
                                    layoutDependency: R,
                                    layoutId: `Fc5uUt_Vp`,
                                    children: [
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v15`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `10px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(153, 153, 153))`,
                                              },
                                              children: `同意方可提交，您可以随时通过我们的电子邮件链接退订。`,
                                            }),
                                          }),
                                        className: `framer-g72em`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: R,
                                        layoutId: `n8JFE15uO`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--extracted-r6o4lv": `rgb(153, 153, 153)`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v49`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ p(h.p, {
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                "--framer-font-size": `10px`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-27988b78-4da3-419a-9346-60402ee10374, rgb(195, 196, 197)))`,
                                              },
                                              children: [
                                                /*#__PURE__*/ f(h.em, {
                                                  children: `我同意接收 FREEZONEX 的邮件与更新，并同意按以下政策处理我的个人数据：  `,
                                                }),
                                                /*#__PURE__*/ f(L, {
                                                  href: { webPageId: `fHDmqdJOv` },
                                                  motionChild: !0,
                                                  nodeId: `W9tKckeLr`,
                                                  openInNewTab: !1,
                                                  relValues: [],
                                                  scopeId: `b6D6eMBMO`,
                                                  smoothScroll: !1,
                                                  children: /*#__PURE__*/ f(h.a, {
                                                    className: `framer-styles-preset-1cuew56`,
                                                    "data-styles-preset": `U42XhPPDq`,
                                                    children: /*#__PURE__*/ f(h.em, {
                                                      children: `隐私政策`,
                                                    }),
                                                  }),
                                                }),
                                                /*#__PURE__*/ f(h.em, { children: `.` }),
                                              ],
                                            }),
                                          }),
                                        className: `framer-1ix2dw6`,
                                        fonts: [
                                          `GF;IBM Plex Sans-regular`,
                                          `GF;IBM Plex Sans-italic`,
                                        ],
                                        layoutDependency: R,
                                        layoutId: `W9tKckeLr`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-27988b78-4da3-419a-9346-60402ee10374, rgb(195, 196, 197))`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    Le() &&
                      /*#__PURE__*/ f(M, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 3232.5,
                          intrinsicWidth: 2500.5,
                          pixelHeight: 4468,
                          pixelWidth: 3456,
                          src: `https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?width=3456&height=4468`,
                          srcSet: `https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=1024&width=3456&height=4468 792w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=2048&width=3456&height=4468 1584w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=4096&width=3456&height=4468 3168w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?width=3456&height=4468 3456w`,
                        },
                        className: `framer-1in73tc`,
                        "data-framer-name": `Frame 195`,
                        layoutDependency: R,
                        layoutId: `zR6MSxcEj`,
                        ...X(
                          {
                            va6GzOnKj: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 3232.5,
                                intrinsicWidth: 2500.5,
                                loading: x((d?.y || 0) + ((d?.height || 932.5) - 924) / 2),
                                pixelHeight: 4468,
                                pixelWidth: 3456,
                                sizes: `715.5094px`,
                                src: `https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?width=3456&height=4468`,
                                srcSet: `https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=1024&width=3456&height=4468 792w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=2048&width=3456&height=4468 1584w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=4096&width=3456&height=4468 3168w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?width=3456&height=4468 3456w`,
                              },
                            },
                          },
                          C,
                          N
                        ),
                        children: /*#__PURE__*/ f(L, {
                          href: `https://tier0-edge-playground1.tier0.app/`,
                          motionChild: !0,
                          nodeId: `G8R1yhJOR`,
                          openInNewTab: !0,
                          scopeId: `b6D6eMBMO`,
                          children: /*#__PURE__*/ f(w, {
                            as: `a`,
                            className: `framer-b4u23w framer-1k8wezx`,
                            "data-framer-name": `Union`,
                            layout: `position`,
                            layoutDependency: R,
                            layoutId: `G8R1yhJOR`,
                            opacity: 1,
                            style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 48"><path d="M 45.945 28.812 C 51.227 22.755 51.047 13.413 45.405 7.58 C 39.754 1.738 30.698 1.56 24.841 7.048 C 18.978 1.783 10.088 2.033 4.512 7.797 C -1.315 13.822 -1.315 23.591 4.512 29.616 L 4.545 29.65 C 4.564 29.67 4.583 29.69 4.603 29.71 L 24.986 50.783 L 46.091 28.964 Z" fill="rgba(255, 255, 255, 0)"></path></svg>`,
                            svgContentId: 8813039825,
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                    Re() &&
                      /*#__PURE__*/ f(j, {
                        action: `https://api.framer.com/forms/v1/forms/0de37c58-f430-4139-bc5e-7463eba90dc4/submit`,
                        className: `framer-11dcied`,
                        "data-framer-name": `Form3`,
                        layoutDependency: R,
                        layoutId: `WVlHEBgR6`,
                        nodeId: `WVlHEBgR6`,
                        redirectUrl: `https://supos-ce-instance3.supos.app:8443/home`,
                        style: {
                          backgroundColor: `rgb(250, 250, 250)`,
                          borderBottomLeftRadius: 5,
                          borderBottomRightRadius: 5,
                          borderTopLeftRadius: 5,
                          borderTopRightRadius: 5,
                        },
                        children: (e) =>
                          /*#__PURE__*/ p(u, {
                            children: [
                              /*#__PURE__*/ f(g, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ f(o, {
                                  children: /*#__PURE__*/ f(h.h3, {
                                    style: {
                                      "--font-selector": `RlM7UG9wcGlucy1tZWRpdW0=`,
                                      "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                      "--framer-font-size": `20px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.04em`,
                                      "--framer-line-height": `1.4em`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-a0htzi, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                    },
                                    children: `Try supOS instantly`,
                                  }),
                                }),
                                className: `framer-1vgzl7h`,
                                "data-framer-name": `Get in Touch with Strat Edge`,
                                fonts: [`FS;Poppins-medium`],
                                layoutDependency: R,
                                layoutId: `akW5ubK7P`,
                                style: {
                                  "--extracted-a0htzi": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                  "--framer-paragraph-spacing": `0px`,
                                },
                                text: b,
                                verticalAlignment: `center`,
                                withExternalLayout: !0,
                              }),
                              /*#__PURE__*/ f(h.div, {
                                className: `framer-ihyqzr`,
                                layoutDependency: R,
                                layoutId: `Hnox6tVJb`,
                                children: /*#__PURE__*/ f(h.label, {
                                  className: `framer-v7oe1o`,
                                  layoutDependency: R,
                                  layoutId: `zrFA_G84U`,
                                  children: /*#__PURE__*/ f(F, {
                                    className: `framer-fyatfp`,
                                    inputName: `Name`,
                                    layoutDependency: R,
                                    layoutId: `HIgp6Yb0E`,
                                    placeholder: W(`v11`, c) ?? `姓名`,
                                    required: !0,
                                    style: {
                                      "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                      "--framer-input-border-bottom-width": `1px`,
                                      "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                      "--framer-input-border-left-width": `1px`,
                                      "--framer-input-border-radius-bottom-left": `3px`,
                                      "--framer-input-border-radius-bottom-right": `3px`,
                                      "--framer-input-border-radius-top-left": `3px`,
                                      "--framer-input-border-radius-top-right": `3px`,
                                      "--framer-input-border-right-width": `1px`,
                                      "--framer-input-border-style": `solid`,
                                      "--framer-input-border-top-width": `1px`,
                                      "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                      "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                      "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                    },
                                    type: `text`,
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ f(h.label, {
                                className: `framer-x65gxl`,
                                layoutDependency: R,
                                layoutId: `D09s03aV8`,
                                children: /*#__PURE__*/ f(F, {
                                  className: `framer-60h94u`,
                                  inputName: `Email`,
                                  layoutDependency: R,
                                  layoutId: `cLxfELMfb`,
                                  placeholder: W(`v12`, c) ?? `电子邮件`,
                                  required: !0,
                                  style: {
                                    "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                    "--framer-input-border-bottom-width": `1px`,
                                    "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                    "--framer-input-border-left-width": `1px`,
                                    "--framer-input-border-radius-bottom-left": `3px`,
                                    "--framer-input-border-radius-bottom-right": `3px`,
                                    "--framer-input-border-radius-top-left": `3px`,
                                    "--framer-input-border-radius-top-right": `3px`,
                                    "--framer-input-border-right-width": `1px`,
                                    "--framer-input-border-style": `solid`,
                                    "--framer-input-border-top-width": `1px`,
                                    "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                    "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                    "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                  },
                                  type: `email`,
                                }),
                              }),
                              /*#__PURE__*/ f(k, {
                                height: 28,
                                ...X(
                                  {
                                    ira2EJ4gi: {
                                      width: `210px`,
                                      y: (d?.y || 0) + ((d?.height || 525) - 345) / 2 + 287,
                                    },
                                  },
                                  C,
                                  N
                                ),
                                children: /*#__PURE__*/ f(P, {
                                  className: `framer-5s7pue-container`,
                                  layoutDependency: R,
                                  layoutId: `LPQoUJyXC-container`,
                                  nodeId: `LPQoUJyXC`,
                                  rendersWithMotion: !0,
                                  scopeId: `b6D6eMBMO`,
                                  children: /*#__PURE__*/ f(wt, {
                                    height: `100%`,
                                    id: `LPQoUJyXC`,
                                    layoutId: `LPQoUJyXC`,
                                    style: { height: `100%`, width: `100%` },
                                    type: `submit`,
                                    variant: Q(
                                      e,
                                      {
                                        error: `tREbu9dxY`,
                                        incomplete: `OsCx0OZ4e`,
                                        pending: `dE0c2HPRe`,
                                        success: `odJt_Ezn2`,
                                      },
                                      Z(`OyBVIoN_s`)
                                    ),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ p(h.label, {
                                className: `framer-14k8qsk`,
                                layoutDependency: R,
                                layoutId: `lwrpTZ3C5`,
                                children: [
                                  /*#__PURE__*/ f(A, {
                                    className: `framer-1wn1b5h`,
                                    defaultChecked: !1,
                                    inputName: `Consent checkbox`,
                                    layoutDependency: R,
                                    layoutId: `JIOrNynNC`,
                                    required: !0,
                                    style: {
                                      "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                      "--framer-input-boolean-checked-background": `rgb(0, 153, 255)`,
                                      "--framer-input-border-radius-bottom-left": `3px`,
                                      "--framer-input-border-radius-bottom-right": `3px`,
                                      "--framer-input-border-radius-top-left": `3px`,
                                      "--framer-input-border-radius-top-right": `3px`,
                                      "--framer-input-icon-color": `rgb(255, 255, 255)`,
                                    },
                                    type: `checkbox`,
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-d8ymac`,
                                    layoutDependency: R,
                                    layoutId: `b90iWm7qZ`,
                                    children: [
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v50`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `7px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(153, 153, 153))`,
                                              },
                                              children: `同意方可提交，您可以随时通过我们的电子邮件链接退订。`,
                                            }),
                                          }),
                                        className: `framer-1tvbdzt`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: R,
                                        layoutId: `BMBrJVckP`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--extracted-r6o4lv": `rgb(153, 153, 153)`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v51`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ p(h.p, {
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                "--framer-font-size": `7px`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-27988b78-4da3-419a-9346-60402ee10374, rgb(195, 196, 197)))`,
                                              },
                                              children: [
                                                /*#__PURE__*/ f(h.em, {
                                                  children: `我同意接收 FREEZONEX 的邮件与更新，并同意按以下政策处理我的个人数据：  `,
                                                }),
                                                /*#__PURE__*/ f(L, {
                                                  href: { webPageId: `fHDmqdJOv` },
                                                  motionChild: !0,
                                                  nodeId: `z6caI9X85`,
                                                  openInNewTab: !1,
                                                  relValues: [],
                                                  scopeId: `b6D6eMBMO`,
                                                  smoothScroll: !1,
                                                  children: /*#__PURE__*/ f(h.a, {
                                                    className: `framer-styles-preset-1cuew56`,
                                                    "data-styles-preset": `U42XhPPDq`,
                                                    children: /*#__PURE__*/ f(h.em, {
                                                      children: `隐私政策`,
                                                    }),
                                                  }),
                                                }),
                                                /*#__PURE__*/ f(h.em, { children: `.` }),
                                              ],
                                            }),
                                          }),
                                        className: `framer-cmokb`,
                                        fonts: [
                                          `GF;IBM Plex Sans-regular`,
                                          `GF;IBM Plex Sans-italic`,
                                        ],
                                        layoutDependency: R,
                                        layoutId: `z6caI9X85`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-27988b78-4da3-419a-9346-60402ee10374, rgb(195, 196, 197))`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ze() &&
                      /*#__PURE__*/ f(M, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 3232.5,
                          intrinsicWidth: 2500.5,
                          pixelHeight: 4468,
                          pixelWidth: 3456,
                          src: `https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?width=3456&height=4468`,
                          srcSet: `https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=1024&width=3456&height=4468 792w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=2048&width=3456&height=4468 1584w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=4096&width=3456&height=4468 3168w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?width=3456&height=4468 3456w`,
                        },
                        className: `framer-gmeghs`,
                        "data-framer-name": `Frame 195`,
                        layoutDependency: R,
                        layoutId: `bEZP5QKsp`,
                        ...X(
                          {
                            lA_pXQ2vq: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 3232.5,
                                intrinsicWidth: 2500.5,
                                loading: x((d?.y || 0) + ((d?.height || 200) - 932.5) / 2),
                                pixelHeight: 4468,
                                pixelWidth: 3456,
                                sizes: `715.5094px`,
                                src: `https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?width=3456&height=4468`,
                                srcSet: `https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=1024&width=3456&height=4468 792w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=2048&width=3456&height=4468 1584w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?scale-down-to=4096&width=3456&height=4468 3168w,https://framerusercontent.com/images/OkIue9EKo3me7fj8gDY0sMbvmY.png?width=3456&height=4468 3456w`,
                              },
                            },
                          },
                          C,
                          N
                        ),
                        children: /*#__PURE__*/ f(L, {
                          href: `https://tier0-edge-playground2.tier0.app/`,
                          motionChild: !0,
                          nodeId: `eZdJ7Rjfw`,
                          openInNewTab: !0,
                          scopeId: `b6D6eMBMO`,
                          children: /*#__PURE__*/ f(w, {
                            as: `a`,
                            className: `framer-1s6imw8 framer-1k8wezx`,
                            "data-framer-name": `Union`,
                            layout: `position`,
                            layoutDependency: R,
                            layoutId: `eZdJ7Rjfw`,
                            opacity: 1,
                            style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 48"><path d="M 45.945 25.812 C 51.227 19.755 51.047 10.413 45.405 4.58 C 39.754 -1.262 30.698 -1.44 24.841 4.048 C 18.978 -1.217 10.088 -0.967 4.512 4.797 C -1.315 10.822 -1.315 20.591 4.512 26.616 L 4.545 26.65 C 4.564 26.67 4.583 26.69 4.603 26.71 L 24.986 47.783 L 46.091 25.964 Z" fill="rgba(255, 255, 255, 0)"></path></svg>`,
                            svgContentId: 11272179264,
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                    Be() &&
                      /*#__PURE__*/ f(j, {
                        action: `https://api.framer.com/forms/v1/forms/66def6f1-40d5-4f5f-81cc-8b36cf6b8d01/submit`,
                        className: `framer-13sfv2u`,
                        "data-framer-name": `Form1`,
                        layoutDependency: R,
                        layoutId: `AKNR3Ytdt`,
                        nodeId: `AKNR3Ytdt`,
                        redirectUrl: `https://tier0-edge-playground1.tier0.app/`,
                        children: (e) =>
                          /*#__PURE__*/ p(u, {
                            children: [
                              /*#__PURE__*/ p(h.div, {
                                className: `framer-z4vehb`,
                                layoutDependency: R,
                                layoutId: `lB7bCJzmV`,
                                children: [
                                  /*#__PURE__*/ f(h.label, {
                                    className: `framer-wppupa`,
                                    layoutDependency: R,
                                    layoutId: `TfcWGP42Q`,
                                    children: /*#__PURE__*/ f(F, {
                                      className: `framer-1slgqkt`,
                                      inputName: `Name`,
                                      layoutDependency: R,
                                      layoutId: `iJCCgiULM`,
                                      placeholder: W(`v11`, c) ?? `姓名`,
                                      required: !0,
                                      style: {
                                        "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                        "--framer-input-border-bottom-width": `1px`,
                                        "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                        "--framer-input-border-left-width": `1px`,
                                        "--framer-input-border-radius-bottom-left": `3px`,
                                        "--framer-input-border-radius-bottom-right": `3px`,
                                        "--framer-input-border-radius-top-left": `3px`,
                                        "--framer-input-border-radius-top-right": `3px`,
                                        "--framer-input-border-right-width": `1px`,
                                        "--framer-input-border-style": `solid`,
                                        "--framer-input-border-top-width": `1px`,
                                        "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                        "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                        "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                      },
                                      type: `text`,
                                    }),
                                  }),
                                  /*#__PURE__*/ f(h.label, {
                                    className: `framer-18ykj98`,
                                    layoutDependency: R,
                                    layoutId: `wXiGPnXG1`,
                                    children: /*#__PURE__*/ f(F, {
                                      className: `framer-i8o291`,
                                      inputName: `Business Email`,
                                      layoutDependency: R,
                                      layoutId: `ISib_qkB7`,
                                      placeholder: W(`v26`, c) ?? `商务电子邮件`,
                                      required: !0,
                                      style: {
                                        "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                        "--framer-input-border-bottom-width": `1px`,
                                        "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                        "--framer-input-border-left-width": `1px`,
                                        "--framer-input-border-radius-bottom-left": `3px`,
                                        "--framer-input-border-radius-bottom-right": `3px`,
                                        "--framer-input-border-radius-top-left": `3px`,
                                        "--framer-input-border-radius-top-right": `3px`,
                                        "--framer-input-border-right-width": `1px`,
                                        "--framer-input-border-style": `solid`,
                                        "--framer-input-border-top-width": `1px`,
                                        "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                        "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                        "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                      },
                                      type: `email`,
                                    }),
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-1bldglh`,
                                    layoutDependency: R,
                                    layoutId: `XN0BND4rt`,
                                    children: [
                                      /*#__PURE__*/ f(h.label, {
                                        className: `framer-146u3sb`,
                                        layoutDependency: R,
                                        layoutId: `BFBrHc0Ut`,
                                        children: /*#__PURE__*/ f(F, {
                                          className: `framer-1abjgja`,
                                          inputName: `Company`,
                                          layoutDependency: R,
                                          layoutId: `yQIkueQA6`,
                                          placeholder: W(`v28`, c) ?? `公司`,
                                          required: !0,
                                          style: {
                                            "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                            "--framer-input-border-bottom-width": `1px`,
                                            "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                            "--framer-input-border-left-width": `1px`,
                                            "--framer-input-border-radius-bottom-left": `3px`,
                                            "--framer-input-border-radius-bottom-right": `3px`,
                                            "--framer-input-border-radius-top-left": `3px`,
                                            "--framer-input-border-radius-top-right": `3px`,
                                            "--framer-input-border-right-width": `1px`,
                                            "--framer-input-border-style": `solid`,
                                            "--framer-input-border-top-width": `1px`,
                                            "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                            "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                            "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                          },
                                          type: `text`,
                                        }),
                                      }),
                                      /*#__PURE__*/ f(h.label, {
                                        className: `framer-2e33ac`,
                                        layoutDependency: R,
                                        layoutId: `E_tVvlixb`,
                                        children: /*#__PURE__*/ f(F, {
                                          className: `framer-1mh6kph`,
                                          inputName: `Position`,
                                          layoutDependency: R,
                                          layoutId: `iPgL3H7by`,
                                          placeholder: W(`v29`, c) ?? `职位`,
                                          required: !0,
                                          style: {
                                            "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                            "--framer-input-border-bottom-width": `1px`,
                                            "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                            "--framer-input-border-left-width": `1px`,
                                            "--framer-input-border-radius-bottom-left": `3px`,
                                            "--framer-input-border-radius-bottom-right": `3px`,
                                            "--framer-input-border-radius-top-left": `3px`,
                                            "--framer-input-border-radius-top-right": `3px`,
                                            "--framer-input-border-right-width": `1px`,
                                            "--framer-input-border-style": `solid`,
                                            "--framer-input-border-top-width": `1px`,
                                            "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                            "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                            "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                          },
                                          type: `text`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ f(h.label, {
                                    className: `framer-1v7c5zi`,
                                    layoutDependency: R,
                                    layoutId: `ul9YhRcud`,
                                    children: /*#__PURE__*/ f(F, {
                                      className: `framer-qh6zz1`,
                                      inputName: `What do you want to build with Tier0?`,
                                      layoutDependency: R,
                                      layoutId: `GBpCKPyVT`,
                                      placeholder: W(`v52`, c) ?? `您正面临哪些数字化挑战？`,
                                      required: !0,
                                      style: {
                                        "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                        "--framer-input-border-bottom-width": `1px`,
                                        "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                        "--framer-input-border-left-width": `1px`,
                                        "--framer-input-border-radius-bottom-left": `3px`,
                                        "--framer-input-border-radius-bottom-right": `3px`,
                                        "--framer-input-border-radius-top-left": `3px`,
                                        "--framer-input-border-radius-top-right": `3px`,
                                        "--framer-input-border-right-width": `1px`,
                                        "--framer-input-border-style": `solid`,
                                        "--framer-input-border-top-width": `1px`,
                                        "--framer-input-font-color": `var(--token-09ef9580-3752-4570-af4f-660d98880522, rgb(5, 11, 20))`,
                                        "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                        "--framer-input-placeholder-color": `rgb(153, 153, 153)`,
                                      },
                                      type: `textarea`,
                                    }),
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ p(h.label, {
                                className: `framer-1epos8s`,
                                layoutDependency: R,
                                layoutId: `P3cVZp4bD`,
                                children: [
                                  /*#__PURE__*/ f(A, {
                                    className: `framer-1iqrm0j`,
                                    defaultChecked: !1,
                                    inputName: `Consent checkbox`,
                                    layoutDependency: R,
                                    layoutId: `nx5g9Dw9e`,
                                    required: !0,
                                    style: {
                                      "--framer-input-background": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                      "--framer-input-boolean-checked-background": `rgb(0, 153, 255)`,
                                      "--framer-input-border-radius-bottom-left": `3px`,
                                      "--framer-input-border-radius-bottom-right": `3px`,
                                      "--framer-input-border-radius-top-left": `3px`,
                                      "--framer-input-border-radius-top-right": `3px`,
                                      "--framer-input-icon-color": `rgb(255, 255, 255)`,
                                    },
                                    type: `checkbox`,
                                  }),
                                  /*#__PURE__*/ p(h.div, {
                                    className: `framer-7y3r71`,
                                    layoutDependency: R,
                                    layoutId: `CQUhHDPV4`,
                                    children: [
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v15`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                "--framer-font-size": `10px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                "--framer-font-weight": `500`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(153, 153, 153))`,
                                              },
                                              children: `同意方可提交，您可以随时通过我们的电子邮件链接退订。`,
                                            }),
                                          }),
                                        className: `framer-iylxe4`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: R,
                                        layoutId: `YpJJqD72r`,
                                        style: {
                                          "--extracted-2gg91v": `normal`,
                                          "--extracted-r6o4lv": `rgb(153, 153, 153)`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(g, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          W(`v53`, c) ??
                                          /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ p(h.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                "--framer-font-size": `10px`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-27988b78-4da3-419a-9346-60402ee10374, rgb(195, 196, 197)))`,
                                              },
                                              children: [
                                                /*#__PURE__*/ f(h.em, {
                                                  children: `我同意接收 FREEZONEX 的邮件与更新，并同意按以下政策处理我的个人数据：  `,
                                                }),
                                                /*#__PURE__*/ f(L, {
                                                  href: { webPageId: `fHDmqdJOv` },
                                                  motionChild: !0,
                                                  nodeId: `mc8aK4SrT`,
                                                  openInNewTab: !1,
                                                  relValues: [],
                                                  scopeId: `b6D6eMBMO`,
                                                  smoothScroll: !1,
                                                  children: /*#__PURE__*/ f(h.a, {
                                                    className: `framer-styles-preset-1cuew56`,
                                                    "data-styles-preset": `U42XhPPDq`,
                                                    children: /*#__PURE__*/ f(h.em, {
                                                      children: `隐私政策`,
                                                    }),
                                                  }),
                                                }),
                                                /*#__PURE__*/ f(h.em, { children: `.` }),
                                              ],
                                            }),
                                          }),
                                        className: `framer-1f3omvq`,
                                        fonts: [
                                          `GF;IBM Plex Sans-regular`,
                                          `GF;IBM Plex Sans-italic`,
                                        ],
                                        layoutDependency: R,
                                        layoutId: `mc8aK4SrT`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-27988b78-4da3-419a-9346-60402ee10374, rgb(195, 196, 197))`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ f(k, {
                                height: 40,
                                width: `625px`,
                                ...X({ VGrNNITNF: { width: `310px` } }, C, N),
                                children: /*#__PURE__*/ f(P, {
                                  className: `framer-1yzhpr-container`,
                                  layoutDependency: R,
                                  layoutId: `icwcVgroO-container`,
                                  nodeId: `icwcVgroO`,
                                  rendersWithMotion: !0,
                                  scopeId: `b6D6eMBMO`,
                                  children: /*#__PURE__*/ f(Et, {
                                    height: `100%`,
                                    id: `icwcVgroO`,
                                    layoutId: `icwcVgroO`,
                                    style: { height: `100%`, width: `100%` },
                                    type: `submit`,
                                    variant: Q(
                                      e,
                                      {
                                        error: `tREbu9dxY`,
                                        incomplete: `OsCx0OZ4e`,
                                        pending: `dE0c2HPRe`,
                                        success: `odJt_Ezn2`,
                                      },
                                      Z(`OyBVIoN_s`)
                                    ),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                      }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (Vt = [
        `.framer-6p6wm.framer-1k8wezx, .framer-6p6wm .framer-1k8wezx { display: block; }`,
        `.framer-6p6wm.framer-421q70 { align-content: center; align-items: center; cursor: default; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-6p6wm .framer-j49g47 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 105px; height: min-content; justify-content: center; overflow: hidden; padding: 70px 0px 70px 0px; position: relative; width: 1240px; }`,
        `.framer-6p6wm .framer-qc83cn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 713px; }`,
        `.framer-6p6wm .framer-z06j7t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6p6wm .framer-19q30mx { flex: none; height: 143px; overflow: visible; position: relative; width: 100%; }`,
        `.framer-6p6wm .framer-142thf4 { flex: none; height: auto; left: 50%; position: absolute; top: 50%; white-space: pre-wrap; width: 713px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6p6wm .framer-1jh9uhz { flex: none; height: 48px; position: absolute; right: 195px; text-decoration: none; top: 11px; width: 51px; }`,
        `.framer-6p6wm .framer-rnvvro { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-6p6wm .framer-1j4q5vx, .framer-6p6wm .framer-1ilnl5c, .framer-6p6wm .framer-i8pfza { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-6p6wm .framer-5xv6v, .framer-6p6wm .framer-17zs5qr, .framer-6p6wm .framer-ls2gou, .framer-6p6wm .framer-1q3eh9h, .framer-6p6wm .framer-ir789m, .framer-6p6wm .framer-s2n6id, .framer-6p6wm .framer-10mvux6, .framer-6p6wm .framer-cffimz { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-6p6wm .framer-tx2tz7 { flex: none; gap: 0px; height: 28px; overflow: hidden; position: relative; width: 28px; }`,
        `.framer-6p6wm .framer-1smeot7 { bottom: 2px; flex: none; left: 2px; position: absolute; right: 3px; top: 1px; }`,
        `.framer-6p6wm .framer-1jbwmle, .framer-6p6wm .framer-1e1fkqy { flex: none; height: 4px; position: relative; width: 25px; }`,
        `.framer-6p6wm .framer-12z6tf8, .framer-6p6wm .framer-eaofju { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; overflow: hidden; position: relative; width: 28px; }`,
        `.framer-6p6wm .framer-17108b2 { bottom: 3px; flex: none; left: 7px; position: absolute; right: 8px; top: 2px; }`,
        `.framer-6p6wm .framer-1d7lrwb { bottom: 2px; flex: none; left: 1px; position: absolute; right: 2px; top: 1px; }`,
        `.framer-6p6wm .framer-1yfemwf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 45px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 590px; }`,
        `.framer-6p6wm .framer-1thgccb, .framer-6p6wm .framer-49z2af, .framer-6p6wm .framer-1buqnj1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6p6wm .framer-8tkjwg, .framer-6p6wm .framer-rmvt08, .framer-6p6wm .framer-12t34m { flex: none; height: 94px; position: relative; width: 12px; }`,
        `.framer-6p6wm .framer-a670v5, .framer-6p6wm .framer-182r4p1, .framer-6p6wm .framer-1of36y8 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 13px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6p6wm .framer-1y2jfc7, .framer-6p6wm .framer-3oncoc, .framer-6p6wm .framer-fjccvs, .framer-6p6wm .framer-1tns0jm, .framer-6p6wm .framer-1vmzs0f, .framer-6p6wm .framer-znkqpj { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 565px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6p6wm .framer-w24uld { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 713px; }`,
        `.framer-6p6wm .framer-1stijj0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-6p6wm .framer-81hkky { flex: none; height: auto; position: relative; width: 24px; }`,
        `.framer-6p6wm .framer-nebchc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 27.1px; height: 467px; justify-content: center; overflow: hidden; padding: 0px 67.74px 0px 67.74px; position: relative; width: 420px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-6p6wm .framer-57idxl, .framer-6p6wm .framer-1rdve89, .framer-6p6wm .framer-5jglxk, .framer-6p6wm .framer-8mtewi, .framer-6p6wm .framer-1vgzl7h { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6p6wm .framer-689jws { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 13.55px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6p6wm .framer-1pswzto { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 13.55px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6p6wm .framer-3gp26u { --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "IBM Plex Mono"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 13.55px; --framer-input-font-weight: 400; --framer-input-padding: 16.26px; flex: 1 0 0px; height: 41px; position: relative; width: 1px; }`,
        `.framer-6p6wm .framer-1om2rt6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 13.55px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6p6wm .framer-ef7fix { --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "IBM Plex Mono"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 13.55px; --framer-input-font-weight: 400; --framer-input-padding: 16.26px; flex: none; height: 41px; position: relative; width: 100%; }`,
        `.framer-6p6wm .framer-1nyep5m-container { flex: none; height: 38px; position: relative; width: 100%; }`,
        `.framer-6p6wm .framer-b5qyoo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 13.55px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6p6wm .framer-evyyw7 { --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 22px; }`,
        `.framer-6p6wm .framer-13s0jrv { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 6.77px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6p6wm .framer-17x5z4y, .framer-6p6wm .framer-10fy9ca, .framer-6p6wm .framer-1jui61v, .framer-6p6wm .framer-13j42yy, .framer-6p6wm .framer-ugefbx, .framer-6p6wm .framer-psdx9z, .framer-6p6wm .framer-1g7upol, .framer-6p6wm .framer-11i1hfw, .framer-6p6wm .framer-17zkm1q, .framer-6p6wm .framer-nz7ij5, .framer-6p6wm .framer-g72em, .framer-6p6wm .framer-1ix2dw6, .framer-6p6wm .framer-1tvbdzt, .framer-6p6wm .framer-cmokb, .framer-6p6wm .framer-iylxe4, .framer-6p6wm .framer-1f3omvq { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6p6wm .framer-1kbgh70 { aspect-ratio: 0.7735498839907192 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 50%; }`,
        `.framer-6p6wm .framer-1dal53u, .framer-6p6wm .framer-14vkwpp { bottom: 314px; flex: none; height: 20px; left: 120px; position: absolute; text-decoration: none; width: 21px; }`,
        `.framer-6p6wm .framer-1b770nn { bottom: 285px; flex: none; height: 50px; left: calc(49.72222222222224% - 53px / 2); position: absolute; text-decoration: none; width: 53px; }`,
        `.framer-6p6wm .framer-1qectq { flex: none; height: 48px; left: 0px; position: absolute; text-decoration: none; top: 0px; width: 51px; }`,
        `.framer-6p6wm .framer-1qgixg2 { bottom: 233px; flex: none; height: 48px; left: 57px; position: absolute; text-decoration: none; width: 51px; }`,
        `.framer-6p6wm .framer-pkelp2, .framer-6p6wm .framer-1lcm81d { bottom: 10px; flex: none; height: 38px; left: 19px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 38px; }`,
        `.framer-6p6wm .framer-unmul8-container { flex: none; height: auto; left: 55px; position: absolute; top: 55px; width: 35px; }`,
        `.framer-6p6wm .framer-1cdx8m { aspect-ratio: 0.7735498839907192 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 405px; }`,
        `.framer-6p6wm .framer-57blbv { bottom: 134px; flex: none; height: 20px; left: 39px; position: absolute; text-decoration: none; width: 21px; }`,
        `.framer-6p6wm .framer-a7wjom, .framer-6p6wm .framer-13gj0at { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 933px; justify-content: center; overflow: hidden; padding: 0px 120px 0px 120px; position: relative; width: 721px; }`,
        `.framer-6p6wm .framer-11f2pu, .framer-6p6wm .framer-ohje4a, .framer-6p6wm .framer-ax5z7l, .framer-6p6wm .framer-1ioffod { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 480px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6p6wm .framer-75ln1x, .framer-6p6wm .framer-1nler6r, .framer-6p6wm .framer-1zjzvb, .framer-6p6wm .framer-7qqjls, .framer-6p6wm .framer-ihyqzr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6p6wm .framer-14ta8p1, .framer-6p6wm .framer-1nabwax, .framer-6p6wm .framer-a0vkat, .framer-6p6wm .framer-1hpg3q8, .framer-6p6wm .framer-7jfaf0, .framer-6p6wm .framer-v7oe1o { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6p6wm .framer-1uzvvs1, .framer-6p6wm .framer-1we3d8m, .framer-6p6wm .framer-1qv7tmy, .framer-6p6wm .framer-1o1a1mx, .framer-6p6wm .framer-12s3yqk, .framer-6p6wm .framer-1slgqkt { --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "IBM Plex Mono"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-padding: 12px; flex: 1 0 0px; height: 40px; position: relative; width: 1px; }`,
        `.framer-6p6wm .framer-15aqh8v, .framer-6p6wm .framer-7de0kf, .framer-6p6wm .framer-164m4qq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 481px; }`,
        `.framer-6p6wm .framer-1wewr4n, .framer-6p6wm .framer-zi7tk8, .framer-6p6wm .framer-f8eacs, .framer-6p6wm .framer-1juhprw, .framer-6p6wm .framer-1s3bxzi, .framer-6p6wm .framer-1wn1b5h, .framer-6p6wm .framer-1iqrm0j { --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 16px; }`,
        `.framer-6p6wm .framer-1ioi5o3, .framer-6p6wm .framer-1md7r7q, .framer-6p6wm .framer-1tem865, .framer-6p6wm .framer-1m5iewj, .framer-6p6wm .framer-wip4bh, .framer-6p6wm .framer-d8ymac, .framer-6p6wm .framer-7y3r71 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6p6wm .framer-f1jhfk, .framer-6p6wm .framer-18mn59k, .framer-6p6wm .framer-4ay0l2, .framer-6p6wm .framer-x65gxl, .framer-6p6wm .framer-18ykj98, .framer-6p6wm .framer-1v7c5zi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6p6wm .framer-yqdkd8, .framer-6p6wm .framer-x8cdy7, .framer-6p6wm .framer-pli42s, .framer-6p6wm .framer-1o1ggr9, .framer-6p6wm .framer-thsiwy, .framer-6p6wm .framer-1325kuh, .framer-6p6wm .framer-bsxw4, .framer-6p6wm .framer-1ks8mqw, .framer-6p6wm .framer-i8lvjm, .framer-6p6wm .framer-i8o291, .framer-6p6wm .framer-1abjgja, .framer-6p6wm .framer-1mh6kph { --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "IBM Plex Mono"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-padding: 12px; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-6p6wm .framer-1hpenta-container, .framer-6p6wm .framer-1o6t1rj-container, .framer-6p6wm .framer-axgcdn-container, .framer-6p6wm .framer-1o95zyh-container, .framer-6p6wm .framer-1yzhpr-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-6p6wm .framer-1sl437e { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 310px; }`,
        `.framer-6p6wm .framer-8z0uw6, .framer-6p6wm .framer-5l3q8y { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-6p6wm .framer-lenepn { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 294px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6p6wm .framer-deopiu { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 300px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6p6wm .framer-ibf8dt-container, .framer-6p6wm .framer-1o39dat-container, .framer-6p6wm .framer-szijrq-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-6p6wm .framer-1vn0ee9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 600px; }`,
        `.framer-6p6wm .framer-11rq7ay { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6p6wm .framer-7sb7nf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-6p6wm .framer-xb8gqj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 470px; }`,
        `.framer-6p6wm .framer-n7lixm { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 404px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6p6wm .framer-1hd9hvt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-6p6wm .framer-38yrt1 { flex: none; height: 48px; position: relative; text-decoration: none; width: 51px; }`,
        `.framer-6p6wm .framer-1q70tn4 { align-self: stretch; flex: none; gap: 15px; height: auto; overflow: hidden; position: relative; width: 721px; }`,
        `.framer-6p6wm .framer-ibzut5 { flex: none; height: auto; left: 50%; position: absolute; top: 314px; white-space: pre-wrap; width: 481px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6p6wm .framer-1i7unxv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px; position: absolute; top: 368px; width: 481px; }`,
        `.framer-6p6wm .framer-13nvaps, .framer-6p6wm .framer-4dzjxd, .framer-6p6wm .framer-p8damu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 481px; }`,
        `.framer-6p6wm .framer-wpd7p7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; min-height: 200px; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6p6wm .framer-1d6jy92, .framer-6p6wm .framer-1n4zhf9, .framer-6p6wm .framer-qh6zz1 { --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "IBM Plex Mono"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-padding: 12px; --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 100px; position: relative; width: 100%; }`,
        `.framer-6p6wm .framer-tf3iwb, .framer-6p6wm .framer-14eq7b2 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6p6wm .framer-epssf7, .framer-6p6wm .framer-16kmpd3, .framer-6p6wm .framer-l39z37, .framer-6p6wm .framer-v4n9vi, .framer-6p6wm .framer-1siltlh, .framer-6p6wm .framer-146u3sb, .framer-6p6wm .framer-2e33ac { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6p6wm .framer-uk3b35, .framer-6p6wm .framer-1pgllpz { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-6p6wm .framer-1jy3dbn, .framer-6p6wm .framer-119i4mi, .framer-6p6wm .framer-1fd50ob, .framer-6p6wm .framer-1yyq6qj, .framer-6p6wm .framer-1h707j, .framer-6p6wm .framer-xqhv0g, .framer-6p6wm .framer-6i4hig, .framer-6p6wm .framer-bqaqsr, .framer-6p6wm .framer-1x69acp, .framer-6p6wm .framer-1cnd8cw, .framer-6p6wm .framer-u02p0r, .framer-6p6wm .framer-8anbju { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6p6wm .framer-ks8qe1, .framer-6p6wm .framer-11nqohp, .framer-6p6wm .framer-15aljhn, .framer-6p6wm .framer-1s9ptda, .framer-6p6wm .framer-vna8jk, .framer-6p6wm .framer-xuq8f5, .framer-6p6wm .framer-lv5jpc, .framer-6p6wm .framer-wj2pgb, .framer-6p6wm .framer-1pvmul5, .framer-6p6wm .framer-gy1ajf, .framer-6p6wm .framer-11mlgaa, .framer-6p6wm .framer-umnwhb { --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "IBM Plex Mono"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-padding: 12px; flex: 1 0 0px; height: 0px; position: relative; width: 1px; }`,
        `.framer-6p6wm .framer-km09w7 { align-content: flex-start; align-items: flex-start; bottom: -222px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 19px; padding: 0px; position: absolute; width: 200px; }`,
        `.framer-6p6wm .framer-1furzjf-container { bottom: 349px; flex: none; height: 40px; left: calc(49.930651872399466% - 481px / 2); position: absolute; width: 481px; }`,
        `.framer-6p6wm .framer-wqju0j { aspect-ratio: 0.7733118971061094 / 1; bottom: 0px; flex: none; left: 29%; overflow: visible; position: absolute; top: 781px; width: auto; z-index: 1; }`,
        `.framer-6p6wm .framer-1xcp7aa { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: center; overflow: hidden; padding: 0px 120px 0px 120px; position: relative; width: 721px; }`,
        `.framer-6p6wm .framer-m0uz3h { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; overflow: hidden; padding: 40px 35px 35px 35px; position: relative; width: 1px; }`,
        `.framer-6p6wm .framer-120qsvp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 13px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6p6wm .framer-kgd3f5, .framer-6p6wm .framer-1bldglh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6p6wm .framer-18fillb { flex: 1 0 0px; height: 95px; overflow: visible; position: relative; width: 1px; }`,
        `.framer-6p6wm .framer-1imtwg7 { flex: none; height: auto; left: 50%; position: absolute; top: 50%; white-space: pre-wrap; width: 320px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6p6wm .framer-18y1495 { flex: none; height: 27px; position: absolute; right: 43px; text-decoration: none; top: 3px; width: 25px; }`,
        `.framer-6p6wm .framer-7rfvem { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6.72px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-6p6wm .framer-1qyybdi, .framer-6p6wm .framer-1kf3mox, .framer-6p6wm .framer-kgtaa8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 3.36px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-6p6wm .framer-uwlj4h { flex: none; gap: 0px; height: 16px; overflow: hidden; position: relative; width: 16px; }`,
        `.framer-6p6wm .framer-f9pcz9, .framer-6p6wm .framer-2yoi18 { bottom: 1px; flex: none; left: 1px; position: absolute; right: 1px; top: 1px; }`,
        `.framer-6p6wm .framer-6bx1wv, .framer-6p6wm .framer-tppptb { flex: none; height: 2px; position: relative; width: 14px; }`,
        `.framer-6p6wm .framer-wnrrxw, .framer-6p6wm .framer-1h4ck { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; overflow: hidden; position: relative; width: 16px; }`,
        `.framer-6p6wm .framer-1u7yh4b { bottom: 2px; flex: none; left: 4px; position: absolute; right: 5px; top: 1px; }`,
        `.framer-6p6wm .framer-13qz2vo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25.2px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 330px; }`,
        `.framer-6p6wm .framer-u5xok0, .framer-6p6wm .framer-10y4qqp, .framer-6p6wm .framer-1nz5w43 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6p6wm .framer-st4n4m, .framer-6p6wm .framer-wvokbp, .framer-6p6wm .framer-slorre { flex: none; height: 53px; position: relative; width: 7px; }`,
        `.framer-6p6wm .framer-yh16ge, .framer-6p6wm .framer-3kmmx5, .framer-6p6wm .framer-v4o7nr { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 7.28px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6p6wm .framer-19p1ae8, .framer-6p6wm .framer-8jfbzo, .framer-6p6wm .framer-3oyysj, .framer-6p6wm .framer-1w2vbcj, .framer-6p6wm .framer-zdk4z7, .framer-6p6wm .framer-75a12a { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 316px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6p6wm .framer-gr2jex { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8.4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6p6wm .framer-1vm8184 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 2.8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-6p6wm .framer-9ja96a { flex: none; height: auto; position: relative; width: 13px; }`,
        `.framer-6p6wm .framer-1h6719p { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 422px; justify-content: center; overflow: hidden; padding: 0px 120px 0px 120px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-6p6wm .framer-1ijwag6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 602px; }`,
        `.framer-6p6wm .framer-1in73tc, .framer-6p6wm .framer-gmeghs { aspect-ratio: 0.7733118971061094 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 50%; z-index: 1; }`,
        `.framer-6p6wm .framer-b4u23w, .framer-6p6wm .framer-1s6imw8 { bottom: 230px; flex: none; height: 48px; left: 62px; position: absolute; text-decoration: none; width: 50px; }`,
        `.framer-6p6wm .framer-11dcied { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 345px; justify-content: center; overflow: hidden; padding: 0px 50px 0px 50px; position: relative; width: 310px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-6p6wm .framer-fyatfp, .framer-6p6wm .framer-60h94u { --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "IBM Plex Mono"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 10px; --framer-input-font-weight: 400; --framer-input-padding: 12px; flex: none; height: 30px; position: relative; width: 223px; }`,
        `.framer-6p6wm .framer-5s7pue-container { flex: none; height: 28px; position: relative; width: 100%; }`,
        `.framer-6p6wm .framer-14k8qsk, .framer-6p6wm .framer-wppupa, .framer-6p6wm .framer-1epos8s { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6p6wm .framer-13sfv2u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: hidden; padding: 20px; position: relative; width: 665px; }`,
        `.framer-6p6wm .framer-z4vehb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6p6wm.framer-v-w8u8t8.framer-421q70 { gap: 35px; width: 810px; }`,
        `.framer-6p6wm.framer-v-w8u8t8 .framer-j49g47 { align-content: center; align-items: center; flex: 1 0 0px; flex-direction: column; gap: 35px; width: 1px; }`,
        `.framer-6p6wm.framer-v-16yvz1q.framer-421q70, .framer-6p6wm.framer-v-vxzdv6.framer-421q70, .framer-6p6wm.framer-v-1i8essy.framer-421q70 { width: 390px; }`,
        `.framer-6p6wm.framer-v-16yvz1q .framer-j49g47 { align-content: center; align-items: center; flex-direction: column; gap: 30px; padding: 40px 0px 40px 0px; width: 390px; }`,
        `.framer-6p6wm.framer-v-16yvz1q .framer-8z0uw6, .framer-6p6wm.framer-v-uj195x .framer-ax5z7l, .framer-6p6wm.framer-v-1jjc3wq .framer-qc83cn, .framer-6p6wm.framer-v-1jjc3wq .framer-tx2tz7, .framer-6p6wm.framer-v-1jjc3wq .framer-12z6tf8, .framer-6p6wm.framer-v-1jjc3wq .framer-eaofju, .framer-6p6wm.framer-v-1jjc3wq .framer-57idxl, .framer-6p6wm.framer-v-1fvyavt .framer-11f2pu, .framer-6p6wm.framer-v-1rvah2w .framer-ohje4a, .framer-6p6wm.framer-v-11nwxk8 .framer-1vgzl7h, .framer-6p6wm.framer-v-1qg90gd .framer-uwlj4h, .framer-6p6wm.framer-v-1qg90gd .framer-wnrrxw, .framer-6p6wm.framer-v-1qg90gd .framer-1h4ck { order: 0; }`,
        `.framer-6p6wm.framer-v-16yvz1q .framer-deopiu, .framer-6p6wm.framer-v-1jjc3wq .framer-5xv6v, .framer-6p6wm.framer-v-1jjc3wq .framer-17zs5qr, .framer-6p6wm.framer-v-1jjc3wq .framer-ls2gou, .framer-6p6wm.framer-v-1jjc3wq .framer-nebchc, .framer-6p6wm.framer-v-1jjc3wq .framer-689jws, .framer-6p6wm.framer-v-1fvyavt .framer-75ln1x, .framer-6p6wm.framer-v-1rvah2w .framer-1nler6r, .framer-6p6wm.framer-v-11nwxk8 .framer-ihyqzr, .framer-6p6wm.framer-v-1qg90gd .framer-ir789m, .framer-6p6wm.framer-v-1qg90gd .framer-s2n6id, .framer-6p6wm.framer-v-1qg90gd .framer-10mvux6, .framer-6p6wm.framer-v-1qg90gd .framer-7qqjls, .framer-6p6wm.framer-v-1hnmy84 .framer-75ln1x, .framer-6p6wm.framer-v-vxzdv6 .framer-75ln1x { order: 1; }`,
        `.framer-6p6wm.framer-v-16yvz1q .framer-ibf8dt-container, .framer-6p6wm.framer-v-1jjc3wq .framer-1om2rt6, .framer-6p6wm.framer-v-1fvyavt .framer-f1jhfk, .framer-6p6wm.framer-v-1rvah2w .framer-18mn59k, .framer-6p6wm.framer-v-11nwxk8 .framer-x65gxl, .framer-6p6wm.framer-v-1qg90gd .framer-4ay0l2, .framer-6p6wm.framer-v-1hnmy84 .framer-f1jhfk, .framer-6p6wm.framer-v-vxzdv6 .framer-f1jhfk { order: 2; }`,
        `.framer-6p6wm.framer-v-16yvz1q .framer-13sfv2u { padding: 0px; width: 310px; }`,
        `.framer-6p6wm.framer-v-1uvt9hv.framer-421q70 { height: 933px; }`,
        `.framer-6p6wm.framer-v-1uvt9hv .framer-j49g47 { gap: 0px; height: 924px; padding: 0px; width: 1440px; }`,
        `.framer-6p6wm.framer-v-1uvt9hv .framer-1q70tn4 { align-content: center; align-items: center; align-self: unset; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 923px; justify-content: center; order: 24; padding: 0px; width: 1px; }`,
        `.framer-6p6wm.framer-v-1uvt9hv .framer-ibzut5 { left: unset; order: 0; position: relative; top: unset; }`,
        `.framer-6p6wm.framer-v-1uvt9hv .framer-1i7unxv { flex-direction: column; left: unset; order: 1; position: relative; top: unset; }`,
        `.framer-6p6wm.framer-v-1uvt9hv .framer-a0vkat, .framer-6p6wm.framer-v-o7xh36 .framer-l39z37 { flex: none; order: 2; width: 100%; }`,
        `.framer-6p6wm.framer-v-1uvt9hv .framer-1qv7tmy, .framer-6p6wm.framer-v-uj195x .framer-1o1a1mx { height: 43px; }`,
        `.framer-6p6wm.framer-v-1uvt9hv .framer-13nvaps, .framer-6p6wm.framer-v-1jjc3wq .framer-b5qyoo, .framer-6p6wm.framer-v-1fvyavt .framer-15aqh8v, .framer-6p6wm.framer-v-11nwxk8 .framer-14k8qsk { order: 3; }`,
        `.framer-6p6wm.framer-v-1uvt9hv .framer-4dzjxd, .framer-6p6wm.framer-v-1rvah2w .framer-7de0kf, .framer-6p6wm.framer-v-o7xh36 .framer-axgcdn-container, .framer-6p6wm.framer-v-hkv17i .framer-axgcdn-container { order: 5; }`,
        `.framer-6p6wm.framer-v-1uvt9hv .framer-tf3iwb, .framer-6p6wm.framer-v-ip7fef .framer-tf3iwb, .framer-6p6wm.framer-v-7eww8j .framer-tf3iwb { flex: none; order: 4; width: 100%; }`,
        `.framer-6p6wm.framer-v-1uvt9hv .framer-uk3b35, .framer-6p6wm.framer-v-uj195x .framer-1hpg3q8, .framer-6p6wm.framer-v-ip7fef .framer-a0vkat, .framer-6p6wm.framer-v-7eww8j .framer-a0vkat, .framer-6p6wm.framer-v-o7xh36 .framer-1hpg3q8, .framer-6p6wm.framer-v-hkv17i .framer-1hpg3q8 { flex: none; order: 1; width: 100%; }`,
        `.framer-6p6wm.framer-v-1uvt9hv .framer-km09w7 { bottom: unset; left: unset; order: 2; position: relative; width: 481px; }`,
        `.framer-6p6wm.framer-v-1uvt9hv .framer-1furzjf-container { bottom: unset; left: unset; order: 5; position: relative; }`,
        `.framer-6p6wm.framer-v-1uvt9hv .framer-1in73tc { order: 23; }`,
        `.framer-6p6wm.framer-v-uj195x.framer-421q70 { width: 1443px; }`,
        `.framer-6p6wm.framer-v-uj195x .framer-j49g47 { gap: 0px; padding: 0px; width: 1440px; }`,
        `.framer-6p6wm.framer-v-uj195x .framer-1xcp7aa { align-content: center; align-items: center; align-self: unset; aspect-ratio: 0.7737265415549598 / 1; order: 20; padding: 0px; width: 50%; }`,
        `.framer-6p6wm.framer-v-uj195x .framer-1zjzvb { flex-direction: column; order: 1; width: 481px; }`,
        `.framer-6p6wm.framer-v-uj195x .framer-1pgllpz, .framer-6p6wm.framer-v-ip7fef .framer-uk3b35, .framer-6p6wm.framer-v-7eww8j .framer-uk3b35, .framer-6p6wm.framer-v-o7xh36 .framer-1pgllpz, .framer-6p6wm.framer-v-hkv17i .framer-1pgllpz { flex: none; order: 0; width: 100%; }`,
        `.framer-6p6wm.framer-v-uj195x .framer-l39z37 { flex: none; order: 2; width: 481px; }`,
        `.framer-6p6wm.framer-v-uj195x .framer-14eq7b2, .framer-6p6wm.framer-v-o7xh36 .framer-14eq7b2, .framer-6p6wm.framer-v-hkv17i .framer-14eq7b2 { flex: none; order: 3; width: 100%; }`,
        `.framer-6p6wm.framer-v-uj195x .framer-p8damu, .framer-6p6wm.framer-v-uj195x .framer-164m4qq, .framer-6p6wm.framer-v-uj195x .framer-gmeghs { order: 4; }`,
        `.framer-6p6wm.framer-v-uj195x .framer-axgcdn-container { order: 5; width: 481px; }`,
        `.framer-6p6wm.framer-v-1jjc3wq .framer-j49g47 { align-content: center; align-items: center; gap: 43px; height: 900px; order: 0; padding: 0px; width: 1440px; }`,
        `.framer-6p6wm.framer-v-1jjc3wq .framer-1nyep5m-container, .framer-6p6wm.framer-v-1fvyavt .framer-1hpenta-container, .framer-6p6wm.framer-v-1rvah2w .framer-1o6t1rj-container, .framer-6p6wm.framer-v-7eww8j .framer-wqju0j, .framer-6p6wm.framer-v-11nwxk8 .framer-5s7pue-container, .framer-6p6wm.framer-v-1qg90gd .framer-1o95zyh-container, .framer-6p6wm.framer-v-1hnmy84 .framer-1hpenta-container, .framer-6p6wm.framer-v-vxzdv6 .framer-1hpenta-container { order: 6; }`,
        `.framer-6p6wm.framer-v-1fvyavt.framer-421q70, .framer-6p6wm.framer-v-1rvah2w.framer-421q70 { width: min-content; }`,
        `.framer-6p6wm.framer-v-1fvyavt .framer-j49g47, .framer-6p6wm.framer-v-1rvah2w .framer-j49g47 { gap: 0px; height: 933px; padding: 0px; width: 1440px; }`,
        `.framer-6p6wm.framer-v-1fvyavt .framer-1kbgh70, .framer-6p6wm.framer-v-1rvah2w .framer-1kbgh70 { aspect-ratio: unset; height: 933px; }`,
        `.framer-6p6wm.framer-v-1fvyavt .framer-1b770nn { bottom: 235px; left: 60px; }`,
        `.framer-6p6wm.framer-v-1fvyavt .framer-a7wjom, .framer-6p6wm.framer-v-1rvah2w .framer-13gj0at { align-content: center; align-items: center; }`,
        `.framer-6p6wm.framer-v-1rvah2w .framer-1b770nn { bottom: 235px; left: 62px; }`,
        `.framer-6p6wm.framer-v-ip7fef.framer-421q70, .framer-6p6wm.framer-v-o7xh36.framer-421q70, .framer-6p6wm.framer-v-1hnmy84.framer-421q70 { width: 810px; }`,
        `.framer-6p6wm.framer-v-ip7fef .framer-j49g47 { gap: 0px; height: 526px; padding: 0px; width: 810px; }`,
        `.framer-6p6wm.framer-v-ip7fef .framer-1kbgh70 { flex: 1 0 0px; width: 1px; }`,
        `.framer-6p6wm.framer-v-ip7fef .framer-1dal53u { bottom: 134px; left: 39px; }`,
        `.framer-6p6wm.framer-v-ip7fef .framer-1q70tn4 { align-content: center; align-items: center; align-self: unset; display: flex; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: center; padding: 0px 50px 0px 50px; width: 50%; }`,
        `.framer-6p6wm.framer-v-ip7fef .framer-ibzut5 { left: unset; position: relative; top: unset; width: 100%; }`,
        `.framer-6p6wm.framer-v-ip7fef .framer-1i7unxv { flex-direction: column; gap: 5px; left: unset; position: relative; top: unset; width: 100%; }`,
        `.framer-6p6wm.framer-v-ip7fef .framer-13nvaps, .framer-6p6wm.framer-v-7eww8j .framer-13nvaps { order: 2; width: 100%; }`,
        `.framer-6p6wm.framer-v-ip7fef .framer-4dzjxd, .framer-6p6wm.framer-v-7eww8j .framer-4dzjxd { order: 5; width: 100%; }`,
        `.framer-6p6wm.framer-v-ip7fef .framer-km09w7, .framer-6p6wm.framer-v-ip7fef .framer-1furzjf-container { bottom: unset; left: unset; position: relative; width: 100%; }`,
        `.framer-6p6wm.framer-v-7eww8j.framer-421q70 { flex-direction: column; width: min-content; }`,
        `.framer-6p6wm.framer-v-7eww8j .framer-j49g47 { flex-direction: column; gap: 0px; height: 641px; order: 0; padding: 0px; width: 390px; }`,
        `.framer-6p6wm.framer-v-7eww8j .framer-1kbgh70 { aspect-ratio: 2.17877094972067 / 1; width: 100%; }`,
        `.framer-6p6wm.framer-v-7eww8j .framer-14vkwpp { bottom: 24px; left: unset; right: 0px; }`,
        `.framer-6p6wm.framer-v-7eww8j .framer-unmul8-container, .framer-6p6wm.framer-v-hkv17i .framer-unmul8-container { bottom: 13px; left: 20px; top: unset; }`,
        `.framer-6p6wm.framer-v-7eww8j .framer-1q70tn4 { align-content: center; align-items: center; align-self: unset; display: flex; flex-direction: column; flex-wrap: nowrap; height: 461px; justify-content: center; padding: 0px 50px 0px 50px; width: 100%; }`,
        `.framer-6p6wm.framer-v-7eww8j .framer-ibzut5 { left: unset; order: 0; position: relative; top: unset; width: 100%; }`,
        `.framer-6p6wm.framer-v-7eww8j .framer-1i7unxv { flex-direction: column; gap: 5px; left: unset; order: 1; position: relative; top: unset; width: 100%; }`,
        `.framer-6p6wm.framer-v-7eww8j .framer-pli42s, .framer-6p6wm.framer-v-7eww8j .framer-1o1ggr9, .framer-6p6wm.framer-v-7eww8j .framer-thsiwy, .framer-6p6wm.framer-v-hkv17i .framer-1325kuh, .framer-6p6wm.framer-v-hkv17i .framer-1o1a1mx, .framer-6p6wm.framer-v-hkv17i .framer-bsxw4, .framer-6p6wm.framer-v-hkv17i .framer-1ks8mqw { height: 35px; }`,
        `.framer-6p6wm.framer-v-7eww8j .framer-1d6jy92 { min-height: 80px; }`,
        `.framer-6p6wm.framer-v-7eww8j .framer-km09w7 { bottom: unset; left: unset; order: 2; position: relative; width: 100%; }`,
        `.framer-6p6wm.framer-v-7eww8j .framer-1furzjf-container { bottom: unset; left: unset; order: 5; position: relative; width: 100%; }`,
        `.framer-6p6wm.framer-v-o7xh36 .framer-j49g47 { gap: 0px; height: 525px; padding: 0px; width: 810px; }`,
        `.framer-6p6wm.framer-v-o7xh36 .framer-1xcp7aa { align-self: unset; height: 100%; padding: 0px 50px 0px 50px; width: 50%; }`,
        `.framer-6p6wm.framer-v-o7xh36 .framer-ax5z7l, .framer-6p6wm.framer-v-hkv17i .framer-ax5z7l, .framer-6p6wm.framer-v-1qg90gd .framer-1ioffod, .framer-6p6wm.framer-v-1hnmy84 .framer-11f2pu, .framer-6p6wm.framer-v-vxzdv6 .framer-11f2pu { order: 0; width: 100%; }`,
        `.framer-6p6wm.framer-v-o7xh36 .framer-1zjzvb { flex-direction: column; order: 1; }`,
        `.framer-6p6wm.framer-v-o7xh36 .framer-p8damu, .framer-6p6wm.framer-v-o7xh36 .framer-164m4qq, .framer-6p6wm.framer-v-hkv17i .framer-p8damu, .framer-6p6wm.framer-v-hkv17i .framer-164m4qq { order: 4; width: 100%; }`,
        `.framer-6p6wm.framer-v-hkv17i.framer-421q70 { flex-direction: column; height: 645px; width: 390px; }`,
        `.framer-6p6wm.framer-v-hkv17i .framer-j49g47 { align-content: center; align-items: center; flex-direction: column; gap: 0px; height: 645px; padding: 0px; width: 390px; }`,
        `.framer-6p6wm.framer-v-hkv17i .framer-1kbgh70 { aspect-ratio: unset; height: 182px; width: 100%; }`,
        `.framer-6p6wm.framer-v-hkv17i .framer-14vkwpp { bottom: 30px; left: unset; right: 2px; }`,
        `.framer-6p6wm.framer-v-hkv17i .framer-1xcp7aa { align-self: unset; height: 461px; padding: 0px; width: 312px; }`,
        `.framer-6p6wm.framer-v-hkv17i .framer-1zjzvb { flex-direction: column; gap: 5px; order: 1; }`,
        `.framer-6p6wm.framer-v-hkv17i .framer-l39z37 { flex: none; height: 35px; order: 2; width: 100%; }`,
        `.framer-6p6wm.framer-v-hkv17i .framer-1n4zhf9 { --framer-input-wrapper-height: unset; height: 80px; min-height: 80px; }`,
        `.framer-6p6wm.framer-v-11nwxk8.framer-421q70 { height: 525px; width: 810px; }`,
        `.framer-6p6wm.framer-v-11nwxk8 .framer-j49g47 { align-content: center; align-items: center; gap: 0px; height: 100%; padding: 0px; width: 810px; }`,
        `.framer-6p6wm.framer-v-11nwxk8 .framer-11dcied { order: 25; }`,
        `.framer-6p6wm.framer-v-1qg90gd.framer-421q70 { flex-direction: column; width: 390px; }`,
        `.framer-6p6wm.framer-v-1qg90gd .framer-j49g47, .framer-6p6wm.framer-v-1i8essy .framer-j49g47 { flex-direction: column; gap: 0px; padding: 0px; width: 390px; }`,
        `.framer-6p6wm.framer-v-1qg90gd .framer-m0uz3h { flex: none; width: 100%; }`,
        `.framer-6p6wm.framer-v-1qg90gd .framer-18fillb { height: 66px; }`,
        `.framer-6p6wm.framer-v-1qg90gd .framer-1h6719p { padding: 0px 50px 0px 50px; }`,
        `.framer-6p6wm.framer-v-1qg90gd .framer-1ijwag6, .framer-6p6wm.framer-v-1hnmy84 .framer-15aqh8v, .framer-6p6wm.framer-v-vxzdv6 .framer-15aqh8v { order: 3; width: 100%; }`,
        `.framer-6p6wm.framer-v-1hnmy84 .framer-j49g47 { gap: 0px; height: 521px; padding: 0px; width: 810px; }`,
        `.framer-6p6wm.framer-v-1hnmy84 .framer-1b770nn { bottom: 114px; left: 21px; }`,
        `.framer-6p6wm.framer-v-1hnmy84 .framer-a7wjom { align-content: center; align-items: center; height: 100%; padding: 0px 50px 0px 50px; width: 50%; }`,
        `.framer-6p6wm.framer-v-vxzdv6 .framer-j49g47 { align-content: center; align-items: center; flex-direction: column; gap: 0px; padding: 0px; width: 390px; }`,
        `.framer-6p6wm.framer-v-vxzdv6 .framer-1kbgh70 { aspect-ratio: unset; height: 180px; width: 100%; }`,
        `.framer-6p6wm.framer-v-vxzdv6 .framer-1qectq { bottom: 21px; height: 27px; left: unset; right: 5px; top: unset; width: 28px; }`,
        `.framer-6p6wm.framer-v-vxzdv6 .framer-a7wjom { align-content: center; align-items: center; height: 561px; padding: 0px 50px 0px 50px; width: 100%; }`,
        `.framer-6p6wm.framer-v-jxj67c.framer-421q70 { height: 515px; width: 810px; }`,
        `.framer-6p6wm.framer-v-jxj67c .framer-j49g47 { gap: 0px; height: 514px; padding: 0px; width: 810px; }`,
        `.framer-6p6wm.framer-v-jxj67c .framer-1b770nn { bottom: 117px; left: 32px; }`,
        `.framer-6p6wm.framer-v-jxj67c .framer-13gj0at { align-content: center; align-items: center; height: 519px; padding: 0px 50px 0px 50px; width: 50%; }`,
        `.framer-6p6wm.framer-v-jxj67c .framer-ohje4a, .framer-6p6wm.framer-v-jxj67c .framer-7de0kf, .framer-6p6wm.framer-v-1i8essy .framer-ohje4a, .framer-6p6wm.framer-v-1i8essy .framer-7de0kf { width: 100%; }`,
        `.framer-6p6wm.framer-v-1i8essy .framer-1kbgh70 { aspect-ratio: unset; height: 181px; width: 100%; }`,
        `.framer-6p6wm.framer-v-1i8essy .framer-1qectq { bottom: 25px; height: 27px; left: unset; right: 2px; top: unset; width: 28px; }`,
        `.framer-6p6wm.framer-v-1i8essy .framer-13gj0at { align-content: center; align-items: center; height: 519px; padding: 0px 50px 0px 50px; width: 100%; }`,
        ...R,
        ...xe,
        ..._e,
      ]),
      ($ = E(Bt, Vt, `framer-6p6wm`)),
      ($.displayName = `talk to expert`),
      ($.defaultProps = { height: 547, width: 1440 }),
      ie($, {
        variant: {
          options: [
            `PEIGqnDNV`,
            `OvAw4rSAX`,
            `VGrNNITNF`,
            `va6GzOnKj`,
            `lA_pXQ2vq`,
            `JmjQOVIT8`,
            `kv0ktgdgd`,
            `DvyeWzNeF`,
            `nCrBGHnJQ`,
            `zV_a3X7Sf`,
            `uTGLNwn5B`,
            `PQHwzDtoU`,
            `ira2EJ4gi`,
            `JnazYUcGM`,
            `WRk6qS5nD`,
            `r0HMMwwih`,
            `tiROO0mLG`,
            `JUnTBSkGe`,
          ],
          optionTitles: [
            `desktop/trial`,
            `tablet/trial`,
            `phone/trial`,
            `En1-desktop`,
            `En2-desktop`,
            `En3-desktop`,
            `En4-desktop`,
            `En5-desktop`,
            `En1-tablet`,
            `En1-phone`,
            `En2-tablet`,
            `En2-phone`,
            `En3-tablet`,
            `En3-phone`,
            `En4-tablet`,
            `En4-phone`,
            `En5-tablet`,
            `En5-phone`,
          ],
          title: `Variant`,
          type: I.Enum,
        },
        f6g6WDZlE: {
          defaultValue: `Try Tier0 Edge Now`,
          displayTextArea: !1,
          title: `title`,
          type: I.String,
        },
        onf6g6WDZlEChange: { changes: `f6g6WDZlE`, type: I.ChangeHandler },
        NEc42_I23: {
          defaultValue: `var(--token-0b09fdc4-bae8-43f3-bba4-8e8677e2b631, rgb(244, 244, 244)) /* {"name":"grey"} */`,
          title: `background color`,
          type: I.Color,
        },
        JBAq5DDvU: {
          defaultValue: `rgba(255, 255, 255, 0)`,
          title: `card background color`,
          type: I.Color,
        },
      }),
      N(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
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
                weight: `500`,
              },
              {
                cssFamilyName: `IBM Plex Sans`,
                source: `google`,
                style: `italic`,
                uiFamilyName: `IBM Plex Sans`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `300`,
              },
              {
                cssFamilyName: `IBM Plex Sans`,
                source: `google`,
                style: `italic`,
                uiFamilyName: `IBM Plex Sans`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Poppins`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Poppins`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/K4RHKGAGLQZBXEZQT2O2AGSLKJF2E4YC/JRUTXNFPWLFGIEVSSEYOW7EP7TYM3V6A/UCDYLFFGLZRGCFY5GYDYM5LDB52BAR5M.woff2`,
                weight: `500`,
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
                cssFamilyName: `Poppins`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Poppins`,
                url: `../../assets/misc/3HCNXVAKPOHOEI7LK7TGC54FOZT77SNM.woff2`,
                weight: `300`,
              },
              {
                cssFamilyName: `Poppins`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Poppins`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/NC2MP33RO4WQTSTEEAWBJLAEXNCNEQVF/7F4U3COKLHQH4WUH3AXPC7N4UELEWJQN/JMWNCAGBH3TLANIVQPVABVAVNV5QERTH.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Poppins`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Poppins`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/EOHGWBZYYKO6R4PWP4S2B3FFWHHBEZN6/UWQLMF4AFWLXCJQCFV3WRVYC77KZXPRB/FYG6OCH7XOLUUSZTIZE65ATBZWF623O4.woff2`,
                weight: `700`,
              },
            ],
          },
          ...it,
          ...at,
          ...ct,
          ...ht,
          ...y(me),
          ...y(Se),
          ...y(ve),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) => le([() => b(Y, {}, t), () => b(B, {}, t), () => b(V, {}, t)], t),
      }));
  }))();
}
export { Ht as n, $ as t };
//# sourceMappingURL=b6D6eMBMO.CW6ctkzX.mjs.map
