import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  D as t,
  F as n,
  H as r,
  L as i,
  M as a,
  O as o,
  P as s,
  R as c,
  S as l,
  U as u,
  V as d,
  c as f,
  d as p,
  l as m,
  m as h,
  s as g,
  u as _,
  x as v,
  y,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { S as b, Yi as x, t as S, v as ee } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import {
  At as C,
  D as w,
  E as te,
  Et as T,
  F as E,
  Ft as D,
  G as O,
  I as k,
  It as A,
  K as j,
  M,
  Nt as N,
  O as P,
  P as F,
  Pt as I,
  Q as L,
  Rt as R,
  St as z,
  U as B,
  a as V,
  bt as ne,
  g as re,
  gt as ie,
  j as ae,
  jt as oe,
  lt as se,
  m as ce,
  o as H,
  s as U,
  v as le,
  w as W,
  wt as G,
  y as ue,
  yt as de,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import {
  a as fe,
  c as pe,
  i as me,
  l as he,
  n as ge,
  o as _e,
  r as ve,
  s as ye,
  t as be,
  u as xe,
} from "./TBRoaUTAt.Cu8l6vlW.mjs?v=20261116-migration-v2";
import { m as Se, n as Ce, p as we, t as Te } from "./shared-lib.CHy_rbfQ.mjs?v=20261116-migration-v2";
import { n as K, t as Ee } from "./CoveredDepth.CpvS7AHa.mjs?v=20261116-migration-v2";
import { i as De, n as Oe, r as ke, t as Ae } from "./F3NdZsOi7.BZcXtl7q.mjs?v=20261116-migration-v2";
import { i as je, n as Me, r as Ne, t as Pe } from "./HNigw6pHS.BbLcGwmq.mjs?v=20261116-migration-v2";
import { i as Fe, n as Ie, r as Le, t as Re } from "./IEBy192yC.BYZJH9-p.mjs?v=20261116-migration-v2";
import { n as ze, t as Be } from "./XdxmxF7Og.CvvypZ72.mjs?v=20261116-migration-v2";
import { n as Ve, r as He } from "./TEUe5r_sl.wTv0r9GQ.mjs?v=20261116-migration-v2";
function q(e, t) {
  for (; t; ) {
    let n = J[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function Ue(e) {
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
function We(e) {
  let t = Ue(e);
  if (t) throw t;
}
var J;
function Ge() {
  return (Ge = e(() => {
    (L(), (J = { AYmst8Nt3: new le(() => import("./BReIjFggZ-0.Gb6vJX4-.mjs?v=20261116-migration-v2")) }));
  }))();
}
function Ke(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt;
function it() {
  return (it = e(() => {
    (f(),
      L(),
      S(),
      o(),
      Ge(),
      (qe = { PrNCe4621: { hover: !0 } }),
      (Je = [`PrNCe4621`, `AmQW0u14K`]),
      (Ye = `framer-u3Bdt`),
      (Xe = { AmQW0u14K: `framer-v-rip1jt`, PrNCe4621: `framer-v-gmaswj` }),
      (Ze = { delay: 0, duration: 0.2, ease: [0.25, 0.1, 0.25, 1], type: `tween` }),
      (Qe = ({ value: e, children: t }) => {
        let r = s(b),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ g(b.Provider, { value: a, children: t });
      }),
      ($e = { Default: `PrNCe4621`, Phone: `AmQW0u14K` }),
      (et = x.create(c)),
      (tt = ({ height: e, id: t, link: n, textColor: r, width: i, ...a }) => ({
        ...a,
        variant: $e[a.variant] ?? a.variant ?? `PrNCe4621`,
        WyEZsvRLk: r ?? a.WyEZsvRLk ?? `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa)`,
        xofycku__: n ?? a.xofycku__,
      })),
      (nt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (rt = I(
        /* @__PURE__ */ h(function (e, n) {
          let r = l(null),
            i = n ?? r,
            a = t(),
            { activeLocale: o, contentLocale: s, setLocale: u } = G();
          ie();
          let {
              style: d,
              className: f,
              layoutId: p,
              variant: m,
              xofycku__: h,
              WyEZsvRLk: v,
              ...y
            } = tt(e),
            {
              baseVariant: b,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: te,
              gestureVariant: T,
              isLoading: E,
              setGestureState: D,
              setVariant: O,
              variants: k,
            } = N({
              cycleOrder: Je,
              defaultVariant: `PrNCe4621`,
              enabledGestures: qe,
              ref: i,
              variant: m,
              variantClassNames: Xe,
            }),
            A = nt(e, k),
            j = F(Ye);
          return (
            We(o),
            /*#__PURE__*/ g(ee, {
              id: p ?? a,
              children: /*#__PURE__*/ g(et, {
                animate: k,
                initial: !1,
                children: /*#__PURE__*/ g(Qe, {
                  value: Ze,
                  children: /*#__PURE__*/ g(ue, {
                    href: h,
                    motionChild: !0,
                    nodeId: `PrNCe4621`,
                    scopeId: `BReIjFggZ`,
                    children: /*#__PURE__*/ _(x.a, {
                      ...y,
                      ...te,
                      className: `${F(j, `framer-gmaswj`, f, S)} framer-1mm5ug4`,
                      "data-framer-name": `Default`,
                      layoutDependency: A,
                      layoutId: `PrNCe4621`,
                      ref: i,
                      style: { ...d },
                      ...Ke({ AmQW0u14K: { "data-framer-name": `Phone` } }, b, T),
                      children: [
                        /*#__PURE__*/ g(x.div, {
                          className: `framer-123y8xm`,
                          "data-border": !0,
                          "data-framer-name": `Delivery ownership label`,
                          layoutDependency: A,
                          layoutId: `HJpzpl7OG`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `rgb(158, 204, 41)`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            backgroundColor: `rgba(63, 79, 24, 0.7)`,
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            borderTopLeftRadius: 4,
                            borderTopRightRadius: 4,
                            filter: `none`,
                            WebkitFilter: `none`,
                          },
                          variants: {
                            "PrNCe4621-hover": { filter: `blur(5px)`, WebkitFilter: `blur(5px)` },
                          },
                          children: /*#__PURE__*/ g(w, {
                            __fromCanvasComponent: !0,
                            children:
                              q(`v0`, s) ??
                              /*#__PURE__*/ g(c, {
                                children: /*#__PURE__*/ g(x.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                    "--framer-font-family": `"IBM Plex Sans"`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-style": `normal`,
                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                    "--framer-font-weight": `400`,
                                    "--framer-line-height": `14.3px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(185, 255, 8))`,
                                  },
                                  children: `100% 掌控自己的数字化项目`,
                                }),
                              }),
                            className: `framer-1jymg35`,
                            "data-framer-name": `Label`,
                            fonts: [`GF;IBM Plex Sans-regular`],
                            layoutDependency: A,
                            layoutId: `tg6GShW0r`,
                            style: {
                              "--extracted-2gg91v": `normal`,
                              "--extracted-r6o4lv": `rgb(185, 255, 8)`,
                              "--framer-paragraph-spacing": `0px`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        /*#__PURE__*/ g(w, {
                          __fromCanvasComponent: !0,
                          children:
                            q(`v1`, s) ??
                            /*#__PURE__*/ g(c, {
                              children: /*#__PURE__*/ g(x.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                  "--framer-font-family": `"IBM Plex Sans"`,
                                  "--framer-font-size": `24px`,
                                  "--framer-font-style": `normal`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                  "--framer-font-weight": `500`,
                                  "--framer-line-height": `30px`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)))`,
                                },
                                children: `与团队协同构建`,
                              }),
                            }),
                          className: `framer-17u2wpu`,
                          "data-framer-name": `Option title`,
                          fonts: [`GF;IBM Plex Sans-500`],
                          layoutDependency: A,
                          layoutId: `t9LR3yevA`,
                          style: {
                            "--extracted-2gg91v": `normal`,
                            "--extracted-r6o4lv": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                            "--framer-paragraph-spacing": `0px`,
                            filter: `none`,
                            WebkitFilter: `none`,
                          },
                          variants: {
                            "PrNCe4621-hover": { filter: `blur(5px)`, WebkitFilter: `blur(5px)` },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Ke(
                            {
                              AmQW0u14K: {
                                children:
                                  q(`v2`, s) ??
                                  /*#__PURE__*/ g(c, {
                                    children: /*#__PURE__*/ g(x.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                        "--framer-font-family": `"IBM Plex Sans"`,
                                        "--framer-font-size": `22px`,
                                        "--framer-font-style": `normal`,
                                        "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                        "--framer-font-weight": `500`,
                                        "--framer-line-height": `30px`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)))`,
                                      },
                                      children: `与团队协同构建`,
                                    }),
                                  }),
                              },
                            },
                            b,
                            T
                          ),
                        }),
                        /*#__PURE__*/ _(x.div, {
                          className: `framer-c4pxji`,
                          "data-framer-name": `Frame 2147224676`,
                          layoutDependency: A,
                          layoutId: `N141XauqO`,
                          style: { filter: `none`, WebkitFilter: `none` },
                          variants: {
                            "PrNCe4621-hover": { filter: `blur(5px)`, WebkitFilter: `blur(5px)` },
                          },
                          children: [
                            /*#__PURE__*/ g(P, {
                              className: `framer-6d9t41`,
                              "data-framer-name": `Delivery illustration`,
                              fill: `rgba(0,0,0,1)`,
                              intrinsicHeight: 122,
                              intrinsicWidth: 180,
                              layoutDependency: A,
                              layoutId: `C4MmTkjdu`,
                              svg: `<svg width="180" height="122" viewBox="0 0 180 122" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="180" height="122" rx="4" fill="white"/>
<path d="M89.9969 87.3992C127.11 87.3992 157.197 85.7874 157.197 83.7992C157.197 81.811 127.11 80.1992 89.9969 80.1992C52.8833 80.1992 22.7969 81.811 22.7969 83.7992C22.7969 85.7874 52.8833 87.3992 89.9969 87.3992Z" fill="#E7ECDF"/>
<path d="M114.6 38.8008H63C61.3431 38.8008 60 40.1439 60 41.8008V76.6008C60 78.2576 61.3431 79.6008 63 79.6008H114.6C116.257 79.6008 117.6 78.2576 117.6 76.6008V41.8008C117.6 40.1439 116.257 38.8008 114.6 38.8008Z" fill="#E7F9B9"/>
<path d="M107.998 35.8008H56.3984C54.7416 35.8008 53.3984 37.1439 53.3984 38.8008V73.6008C53.3984 75.2576 54.7416 76.6008 56.3984 76.6008H107.998C109.655 76.6008 110.998 75.2576 110.998 73.6008V38.8008C110.998 37.1439 109.655 35.8008 107.998 35.8008Z" fill="white" stroke="#7D8975" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M53.3984 45.4004H110.998" stroke="#BDCBB0" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M59.4 41.4992C59.8971 41.4992 60.3 41.0963 60.3 40.5992C60.3 40.1022 59.8971 39.6992 59.4 39.6992C58.9029 39.6992 58.5 40.1022 58.5 40.5992C58.5 41.0963 58.9029 41.4992 59.4 41.4992Z" fill="#B2ED1D"/>
<path d="M63.6031 41.4992C64.1002 41.4992 64.5031 41.0963 64.5031 40.5992C64.5031 40.1022 64.1002 39.6992 63.6031 39.6992C63.1061 39.6992 62.7031 40.1022 62.7031 40.5992C62.7031 41.0963 63.1061 41.4992 63.6031 41.4992Z" fill="#D5DFCB"/>
<path d="M67.7984 41.4992C68.2955 41.4992 68.6984 41.0963 68.6984 40.5992C68.6984 40.1022 68.2955 39.6992 67.7984 39.6992C67.3014 39.6992 66.8984 40.1022 66.8984 40.5992C66.8984 41.0963 67.3014 41.4992 67.7984 41.4992Z" fill="#D5DFCB"/>
<path d="M72 52H61.2C60.5373 52 60 52.5373 60 53.2V68.2C60 68.8627 60.5373 69.4 61.2 69.4H72C72.6627 69.4 73.2 68.8627 73.2 68.2V53.2C73.2 52.5373 72.6627 52 72 52Z" fill="#F2F7E9" stroke="#BDCBB0" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M78 52.5996H103.8M78 57.3996H97.8M78 62.7996H103.8M78 67.5996H93.6" stroke="#BDCBB0" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M118.198 58.5996H103.798C100.816 58.5996 98.3984 61.0173 98.3984 63.9996V78.3996C98.3984 81.3819 100.816 83.7996 103.798 83.7996H118.198C121.181 83.7996 123.598 81.3819 123.598 78.3996V63.9996C123.598 61.0173 121.181 58.5996 118.198 58.5996Z" fill="#CBF368" stroke="#A2BD77" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M112.198 66.3996L115.798 69.9996M105.598 72.9996L113.998 64.5996L117.598 68.1996L109.198 76.5996L104.398 77.7996L105.598 72.9996Z" stroke="#527C00" stroke-width="0.96" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M39.0031 53.2004L34.2031 58.0004L39.0031 62.8004M45.6031 53.2004L50.4031 58.0004L45.6031 62.8004M44.4031 51.4004L40.2031 64.6004" stroke="#7E9B4A" stroke-width="0.96" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ _(x.div, {
                              className: `framer-etjazw`,
                              "data-framer-name": `Frame 2147224679`,
                              layoutDependency: A,
                              layoutId: `soXeVE9sI`,
                              children: [
                                /*#__PURE__*/ g(w, {
                                  __fromCanvasComponent: !0,
                                  children:
                                    q(`v3`, s) ??
                                    /*#__PURE__*/ g(c, {
                                      children: /*#__PURE__*/ g(x.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                          "--framer-font-family": `"IBM Plex Sans"`,
                                          "--framer-font-size": `14px`,
                                          "--framer-font-style": `normal`,
                                          "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                          "--framer-font-weight": `400`,
                                          "--framer-line-height": `16.9px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                        },
                                        children: `适合愿意自己上手、希望 100% 掌控自己数字化项目的团队。`,
                                      }),
                                    }),
                                  className: `framer-859loi`,
                                  "data-framer-name": `Work description`,
                                  fonts: [`GF;IBM Plex Sans-regular`],
                                  layoutDependency: A,
                                  layoutId: `LOF5lZRwL`,
                                  style: {
                                    "--extracted-2gg91v": `normal`,
                                    "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                    "--framer-paragraph-spacing": `0px`,
                                    opacity: 0.8,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ _(x.div, {
                                  className: `framer-1oxnflk`,
                                  "data-framer-name": `Included work`,
                                  layoutDependency: A,
                                  layoutId: `QON9e1SWe`,
                                  children: [
                                    /*#__PURE__*/ _(x.div, {
                                      className: `framer-1uop5js`,
                                      "data-framer-name": `Work / Define materials, batches and locations`,
                                      layoutDependency: A,
                                      layoutId: `tta9Abn6S`,
                                      children: [
                                        /*#__PURE__*/ g(P, {
                                          className: `framer-1sn3pbs`,
                                          "data-framer-name": `icon/data`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 15,
                                          intrinsicWidth: 15,
                                          layoutDependency: A,
                                          layoutId: `DyF8P0hsY`,
                                          svg: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5710_9761)">
<path d="M7.5 5C10.2614 5 12.5 4.16053 12.5 3.125C12.5 2.08947 10.2614 1.25 7.5 1.25C4.73858 1.25 2.5 2.08947 2.5 3.125C2.5 4.16053 4.73858 5 7.5 5Z" stroke="#7EA815" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 3.125V11.875C2.5 14.375 12.5 14.375 12.5 11.875V3.125M2.5 7.5C2.5 10 12.5 10 12.5 7.5" stroke="#7EA815" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_5710_9761">
<rect width="15" height="15" fill="white"/>
</clipPath>
</defs>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ g(w, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            q(`v4`, s) ??
                                            /*#__PURE__*/ g(c, {
                                              children: /*#__PURE__*/ g(x.p, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                  "--framer-font-family": `"IBM Plex Sans"`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-font-style": `normal`,
                                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                  "--framer-font-weight": `400`,
                                                  "--framer-line-height": `16.9px`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                },
                                                children: `自主组织物料、批次与库位关系`,
                                              }),
                                            }),
                                          className: `framer-ojamix`,
                                          "data-framer-name": `Work description`,
                                          fonts: [`GF;IBM Plex Sans-regular`],
                                          layoutDependency: A,
                                          layoutId: `l5isiNeXQ`,
                                          style: {
                                            "--extracted-2gg91v": `normal`,
                                            "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                            "--framer-paragraph-spacing": `0px`,
                                            opacity: 0.8,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ _(x.div, {
                                      className: `framer-1st7buk`,
                                      "data-framer-name": `Work / Build and adapt your WMS`,
                                      layoutDependency: A,
                                      layoutId: `Ir5y_dFOZ`,
                                      children: [
                                        /*#__PURE__*/ g(P, {
                                          className: `framer-jg6s6d`,
                                          "data-framer-name": `icon/build`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 15,
                                          intrinsicWidth: 15,
                                          layoutDependency: A,
                                          layoutId: `dXnSTbpSj`,
                                          svg: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.875 1.875H3.125C2.43464 1.875 1.875 2.43464 1.875 3.125V11.875C1.875 12.5654 2.43464 13.125 3.125 13.125H11.875C12.5654 13.125 13.125 12.5654 13.125 11.875V3.125C13.125 2.43464 12.5654 1.875 11.875 1.875Z" stroke="#7EA815" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.875 5.625H13.125M5.625 5.625V13.125" stroke="#7EA815" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ g(w, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            q(`v5`, s) ??
                                            /*#__PURE__*/ g(c, {
                                              children: /*#__PURE__*/ g(x.p, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                  "--framer-font-family": `"IBM Plex Sans"`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-font-style": `normal`,
                                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                  "--framer-font-weight": `400`,
                                                  "--framer-line-height": `16.9px`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                },
                                                children: `自主生成、修改和迭代完整 WMS 应用`,
                                              }),
                                            }),
                                          className: `framer-17hjbri`,
                                          "data-framer-name": `Work description`,
                                          fonts: [`GF;IBM Plex Sans-regular`],
                                          layoutDependency: A,
                                          layoutId: `Bf8WyIf2e`,
                                          style: {
                                            "--extracted-2gg91v": `normal`,
                                            "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                            "--framer-paragraph-spacing": `0px`,
                                            opacity: 0.8,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ _(x.div, {
                                      className: `framer-1ano8gd`,
                                      "data-framer-name": `Work / Control features and delivery`,
                                      layoutDependency: A,
                                      layoutId: `Y250Y6XX2`,
                                      children: [
                                        /*#__PURE__*/ g(P, {
                                          className: `framer-1d5pboi`,
                                          "data-framer-name": `icon/control`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 15,
                                          intrinsicWidth: 15,
                                          layoutDependency: A,
                                          layoutId: `G2fyBUaGo`,
                                          svg: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 4.375H12.5M2.5 10.625H12.5" stroke="#7EA815" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 5.625C5.69036 5.625 6.25 5.06536 6.25 4.375C6.25 3.68464 5.69036 3.125 5 3.125C4.30964 3.125 3.75 3.68464 3.75 4.375C3.75 5.06536 4.30964 5.625 5 5.625Z" fill="white" stroke="#7EA815" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 11.875C10.6904 11.875 11.25 11.3154 11.25 10.625C11.25 9.93464 10.6904 9.375 10 9.375C9.30964 9.375 8.75 9.93464 8.75 10.625C8.75 11.3154 9.30964 11.875 10 11.875Z" fill="white" stroke="#7EA815" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ g(w, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            q(`v6`, s) ??
                                            /*#__PURE__*/ g(c, {
                                              children: /*#__PURE__*/ g(x.p, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                  "--framer-font-family": `"IBM Plex Sans"`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-font-style": `normal`,
                                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                  "--framer-font-weight": `400`,
                                                  "--framer-line-height": `16.9px`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                },
                                                children: `掌握功能规划、业务流程与项目推进`,
                                              }),
                                            }),
                                          className: `framer-civgsb`,
                                          "data-framer-name": `Work description`,
                                          fonts: [`GF;IBM Plex Sans-regular`],
                                          layoutDependency: A,
                                          layoutId: `BysFszPgo`,
                                          style: {
                                            "--extracted-2gg91v": `normal`,
                                            "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                            "--framer-paragraph-spacing": `0px`,
                                            opacity: 0.8,
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
                          ],
                        }),
                        /*#__PURE__*/ g(x.div, {
                          className: `framer-12fd8rc`,
                          "data-framer-name": `Hover overlay`,
                          layoutDependency: A,
                          layoutId: `qb9jwOewe`,
                          style: { backgroundColor: `rgba(0, 0, 0, 0.65)`, opacity: 0 },
                          variants: { "PrNCe4621-hover": { opacity: 1 } },
                          children: /*#__PURE__*/ g(w, {
                            __fromCanvasComponent: !0,
                            children:
                              q(`v7`, s) ??
                              /*#__PURE__*/ g(c, {
                                children: /*#__PURE__*/ g(x.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                    "--framer-font-family": `"IBM Plex Sans"`,
                                    "--framer-font-size": `24px`,
                                    "--framer-font-style": `normal`,
                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                    "--framer-font-weight": `500`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-WyEZsvRLk-BReIjFggZ))`,
                                  },
                                  children: `免费试用 ↗`,
                                }),
                              }),
                            className: `framer-tsn7j9`,
                            "data-framer-name": `Free Trial`,
                            fonts: [`GF;IBM Plex Sans-500`],
                            layoutDependency: A,
                            layoutId: `h9JFa0hYF`,
                            style: {
                              "--extracted-2gg91v": `normal`,
                              "--extracted-r6o4lv": `var(--variable-reference-WyEZsvRLk-BReIjFggZ)`,
                              "--variable-reference-WyEZsvRLk-BReIjFggZ": v,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
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
          `.framer-u3Bdt.framer-1mm5ug4, .framer-u3Bdt .framer-1mm5ug4 { display: block; }`,
          `.framer-u3Bdt.framer-gmaswj { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; text-decoration: none; width: 592px; }`,
          `.framer-u3Bdt .framer-123y8xm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 4px 6px 4px 6px; position: relative; width: min-content; }`,
          `.framer-u3Bdt .framer-1jymg35, .framer-u3Bdt .framer-17u2wpu, .framer-u3Bdt .framer-ojamix, .framer-u3Bdt .framer-17hjbri, .framer-u3Bdt .framer-civgsb, .framer-u3Bdt .framer-tsn7j9 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-u3Bdt .framer-c4pxji { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-u3Bdt .framer-6d9t41 { flex: none; height: 122px; position: relative; width: 180px; }`,
          `.framer-u3Bdt .framer-etjazw { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-u3Bdt .framer-859loi { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-u3Bdt .framer-1oxnflk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-u3Bdt .framer-1uop5js, .framer-u3Bdt .framer-1st7buk, .framer-u3Bdt .framer-1ano8gd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 9px; height: 16px; justify-content: flex-start; overflow: visible; padding: 1px 0px 1px 0px; position: relative; width: 100%; }`,
          `.framer-u3Bdt .framer-1sn3pbs, .framer-u3Bdt .framer-jg6s6d, .framer-u3Bdt .framer-1d5pboi { flex: none; height: 15px; position: relative; width: 15px; }`,
          `.framer-u3Bdt .framer-12fd8rc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; left: 0px; padding: 24px; pointer-events: none; position: absolute; top: 0px; width: 100%; }`,
          `.framer-u3Bdt.framer-v-rip1jt.framer-gmaswj { width: 318px; }`,
          `.framer-u3Bdt.framer-v-rip1jt .framer-17u2wpu { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-u3Bdt.framer-v-rip1jt .framer-c4pxji { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 12px; }`,
          `.framer-u3Bdt.framer-v-rip1jt .framer-etjazw { flex: none; width: 100%; }`,
          `.framer-u3Bdt[data-border="true"]::after, .framer-u3Bdt [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-u3Bdt`
      )),
      (rt.displayName = `Self build CTA`),
      (rt.defaultProps = { height: 240, width: 592 }),
      M(rt, {
        variant: {
          options: [`PrNCe4621`, `AmQW0u14K`],
          optionTitles: [`Default`, `Phone`],
          title: `Variant`,
          type: U.Enum,
        },
        xofycku__: { title: `Link`, type: U.Link },
        WyEZsvRLk: {
          defaultValue: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa)`,
          title: `Text Color`,
          type: U.Color,
        },
      }),
      ae(
        rt,
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
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function at(e, t) {
  for (; t; ) {
    let n = ct[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function ot(e) {
  let t = [];
  for (; e; ) {
    let n = ct[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function st(e) {
  let t = ot(e);
  if (t) throw t;
}
var ct;
function lt() {
  return (lt = e(() => {
    (L(), (ct = { AYmst8Nt3: new le(() => import("./M6Z99vBvw-0.BndbJxP1.mjs?v=20261116-migration-v2")) }));
  }))();
}
function ut(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var dt, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt;
function St() {
  return (St = e(() => {
    (f(),
      L(),
      S(),
      o(),
      lt(),
      (dt = { MczB3l2bL: { hover: !0 } }),
      (ft = [`MczB3l2bL`, `C5P7xQGUp`]),
      (pt = `framer-NebKl`),
      (mt = { C5P7xQGUp: `framer-v-vf259s`, MczB3l2bL: `framer-v-1i8uxvn` }),
      (ht = { delay: 0, duration: 0.2, ease: [0.25, 0.1, 0.25, 1], type: `tween` }),
      (gt = ({ value: e, children: t }) => {
        let r = s(b),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ g(b.Provider, { value: a, children: t });
      }),
      (_t = { Default: `MczB3l2bL`, Phone: `C5P7xQGUp` }),
      (vt = x.create(c)),
      (yt = ({ height: e, id: t, link: n, textColor: r, width: i, ...a }) => ({
        ...a,
        KM0Td3XVu: n ?? a.KM0Td3XVu,
        variant: _t[a.variant] ?? a.variant ?? `MczB3l2bL`,
        XIMMQmM21: r ?? a.XIMMQmM21 ?? `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa)`,
      })),
      (bt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (xt = I(
        /* @__PURE__ */ h(function (e, n) {
          let r = l(null),
            i = n ?? r,
            a = t(),
            { activeLocale: o, contentLocale: s, setLocale: u } = G();
          ie();
          let {
              style: d,
              className: f,
              layoutId: p,
              variant: m,
              KM0Td3XVu: h,
              XIMMQmM21: v,
              ...y
            } = yt(e),
            {
              baseVariant: b,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: te,
              gestureVariant: T,
              isLoading: E,
              setGestureState: D,
              setVariant: O,
              variants: k,
            } = N({
              cycleOrder: ft,
              defaultVariant: `MczB3l2bL`,
              enabledGestures: dt,
              ref: i,
              variant: m,
              variantClassNames: mt,
            }),
            A = bt(e, k),
            j = F(pt);
          return (
            st(o),
            /*#__PURE__*/ g(ee, {
              id: p ?? a,
              children: /*#__PURE__*/ g(vt, {
                animate: k,
                initial: !1,
                children: /*#__PURE__*/ g(gt, {
                  value: ht,
                  children: /*#__PURE__*/ g(ue, {
                    href: h,
                    motionChild: !0,
                    nodeId: `MczB3l2bL`,
                    scopeId: `M6Z99vBvw`,
                    children: /*#__PURE__*/ _(x.a, {
                      ...y,
                      ...te,
                      className: `${F(j, `framer-1i8uxvn`, f, S)} framer-nwtojy`,
                      "data-border": !0,
                      "data-framer-name": `Default`,
                      layoutDependency: A,
                      layoutId: `MczB3l2bL`,
                      ref: i,
                      style: {
                        "--border-bottom-width": `0px`,
                        "--border-color": `var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29))`,
                        "--border-left-width": `2px`,
                        "--border-right-width": `0px`,
                        "--border-style": `dashed`,
                        "--border-top-width": `0px`,
                        ...d,
                      },
                      variants: {
                        C5P7xQGUp: { "--border-left-width": `0px`, "--border-top-width": `2px` },
                      },
                      ...ut({ C5P7xQGUp: { "data-framer-name": `Phone` } }, b, T),
                      children: [
                        /*#__PURE__*/ g(x.div, {
                          className: `framer-fre3id`,
                          "data-border": !0,
                          "data-framer-name": `Delivery ownership label`,
                          layoutDependency: A,
                          layoutId: `OBKKlBwHs`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `rgb(82, 82, 82)`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            backgroundColor: `rgb(48, 48, 48)`,
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            borderTopLeftRadius: 4,
                            borderTopRightRadius: 4,
                            filter: `none`,
                            WebkitFilter: `none`,
                          },
                          variants: {
                            "MczB3l2bL-hover": { filter: `blur(5px)`, WebkitFilter: `blur(5px)` },
                          },
                          children: /*#__PURE__*/ g(w, {
                            __fromCanvasComponent: !0,
                            children:
                              at(`v0`, s) ??
                              /*#__PURE__*/ g(c, {
                                children: /*#__PURE__*/ g(x.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                    "--framer-font-family": `"IBM Plex Sans"`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-style": `normal`,
                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                    "--framer-font-weight": `400`,
                                    "--framer-line-height": `14.3px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(189, 189, 189))`,
                                  },
                                  children: `工程团队定制交付`,
                                }),
                              }),
                            className: `framer-1q4uk9`,
                            "data-framer-name": `Label`,
                            fonts: [`GF;IBM Plex Sans-regular`],
                            layoutDependency: A,
                            layoutId: `H2b5YgzhP`,
                            style: {
                              "--extracted-2gg91v": `normal`,
                              "--extracted-r6o4lv": `rgb(189, 189, 189)`,
                              "--framer-paragraph-spacing": `0px`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        /*#__PURE__*/ g(w, {
                          __fromCanvasComponent: !0,
                          children:
                            at(`v1`, s) ??
                            /*#__PURE__*/ g(c, {
                              children: /*#__PURE__*/ g(x.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                  "--framer-font-family": `"IBM Plex Sans"`,
                                  "--framer-font-size": `24px`,
                                  "--framer-font-style": `normal`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                  "--framer-font-weight": `500`,
                                  "--framer-line-height": `30px`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)))`,
                                },
                                children: `购买工程定制服务`,
                              }),
                            }),
                          className: `framer-i57wqj`,
                          "data-framer-name": `Option title`,
                          fonts: [`GF;IBM Plex Sans-500`],
                          layoutDependency: A,
                          layoutId: `Xo6OCCt3Z`,
                          style: {
                            "--extracted-2gg91v": `normal`,
                            "--extracted-r6o4lv": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                            "--framer-paragraph-spacing": `0px`,
                            filter: `none`,
                            WebkitFilter: `none`,
                          },
                          variants: {
                            "MczB3l2bL-hover": { filter: `blur(5px)`, WebkitFilter: `blur(5px)` },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...ut(
                            {
                              C5P7xQGUp: {
                                children:
                                  at(`v2`, s) ??
                                  /*#__PURE__*/ g(c, {
                                    children: /*#__PURE__*/ g(x.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                        "--framer-font-family": `"IBM Plex Sans"`,
                                        "--framer-font-size": `22px`,
                                        "--framer-font-style": `normal`,
                                        "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                        "--framer-font-weight": `500`,
                                        "--framer-line-height": `30px`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)))`,
                                      },
                                      children: `购买工程定制服务`,
                                    }),
                                  }),
                              },
                            },
                            b,
                            T
                          ),
                        }),
                        /*#__PURE__*/ _(x.div, {
                          className: `framer-gamoja`,
                          "data-framer-name": `Frame 2147224677`,
                          layoutDependency: A,
                          layoutId: `OW1W9ptGX`,
                          style: { filter: `none`, WebkitFilter: `none` },
                          variants: {
                            "MczB3l2bL-hover": { filter: `blur(5px)`, WebkitFilter: `blur(5px)` },
                          },
                          children: [
                            /*#__PURE__*/ g(P, {
                              className: `framer-1jd5my2`,
                              "data-framer-name": `Delivery illustration`,
                              fill: `rgba(0,0,0,1)`,
                              intrinsicHeight: 122,
                              intrinsicWidth: 180,
                              layoutDependency: A,
                              layoutId: `gchfNsaDy`,
                              svg: `<svg width="180" height="122" viewBox="0 0 180 122" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="180" height="122" rx="4" fill="white"/>
<path d="M82.8016 87.3992C119.915 87.3992 150.002 85.7874 150.002 83.7992C150.002 81.811 119.915 80.1992 82.8016 80.1992C45.688 80.1992 15.6016 81.811 15.6016 83.7992C15.6016 85.7874 45.688 87.3992 82.8016 87.3992Z" fill="#E7ECDF"/>
<path d="M107.402 39.4004H63.6016C61.9447 39.4004 60.6016 40.7435 60.6016 42.4004V76.0004C60.6016 77.6572 61.9447 79.0004 63.6016 79.0004H107.402C109.058 79.0004 110.402 77.6572 110.402 76.0004V42.4004C110.402 40.7435 109.058 39.4004 107.402 39.4004Z" fill="#E7F9B9"/>
<path d="M103.8 35.8008H60C58.3431 35.8008 57 37.1439 57 38.8008V72.4008C57 74.0576 58.3431 75.4008 60 75.4008H103.8C105.457 75.4008 106.8 74.0576 106.8 72.4008V38.8008C106.8 37.1439 105.457 35.8008 103.8 35.8008Z" fill="white" stroke="#7D8975" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M57 44.2H106.8M63 40H80.4" stroke="#BDCBB0" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M65.4 54.3996C66.7255 54.3996 67.8 53.3251 67.8 51.9996C67.8 50.6741 66.7255 49.5996 65.4 49.5996C64.0745 49.5996 63 50.6741 63 51.9996C63 53.3251 64.0745 54.3996 65.4 54.3996Z" fill="#E7F9B9" stroke="#A2BD77" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M72 52H99.6M63 58.6H99.6M63 64.6H85.2" stroke="#BDCBB0" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.8031 45.4004H28.2031C24.8894 45.4004 22.2031 48.0867 22.2031 51.4004V67.0004C22.2031 70.3141 24.8894 73.0004 28.2031 73.0004H43.8031C47.1168 73.0004 49.8031 70.3141 49.8031 67.0004V51.4004C49.8031 48.0867 47.1168 45.4004 43.8031 45.4004Z" fill="#E7F9B9" stroke="#A2BD77" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35.9938 58.6008C37.3192 58.6008 38.3938 57.5263 38.3938 56.2008C38.3938 54.8753 37.3192 53.8008 35.9938 53.8008C34.6683 53.8008 33.5938 54.8753 33.5938 56.2008C33.5938 57.5263 34.6683 58.6008 35.9938 58.6008Z" stroke="#527C00" stroke-width="1.02" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.7969 64.6012V63.4012C31.7969 62.2873 32.2394 61.219 33.027 60.4313C33.8147 59.6437 34.883 59.2012 35.9969 59.2012C37.1108 59.2012 38.1791 59.6437 38.9667 60.4313C39.7544 61.219 40.1969 62.2873 40.1969 63.4012V64.6012" stroke="#527C00" stroke-width="1.02" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M143.998 45.4004H128.398C125.085 45.4004 122.398 48.0867 122.398 51.4004V67.0004C122.398 70.3141 125.085 73.0004 128.398 73.0004H143.998C147.312 73.0004 149.998 70.3141 149.998 67.0004V51.4004C149.998 48.0867 147.312 45.4004 143.998 45.4004Z" fill="white" stroke="#BDCBB0" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M136.197 58.6008C137.522 58.6008 138.597 57.5263 138.597 56.2008C138.597 54.8753 137.522 53.8008 136.197 53.8008C134.871 53.8008 133.797 54.8753 133.797 56.2008C133.797 57.5263 134.871 58.6008 136.197 58.6008Z" stroke="#7D8975" stroke-width="1.02" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M132 64.6012V63.4012C132 62.2873 132.442 61.219 133.23 60.4313C134.018 59.6437 135.086 59.2012 136.2 59.2012C137.314 59.2012 138.382 59.6437 139.17 60.4313C139.958 61.219 140.4 62.2873 140.4 63.4012V64.6012" stroke="#7D8975" stroke-width="1.02" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49.7969 59.1992H56.9969M106.797 59.1992H122.397" stroke="#A2BD77" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1.8 1.8"/>
<path d="M107.997 62.1992H96.5969C93.9459 62.1992 91.7969 64.3483 91.7969 66.9992V78.3992C91.7969 81.0502 93.9459 83.1992 96.5969 83.1992H107.997C110.648 83.1992 112.797 81.0502 112.797 78.3992V66.9992C112.797 64.3483 110.648 62.1992 107.997 62.1992Z" fill="#CBF368" stroke="#A2BD77" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M96.6016 72.4L100.202 76L107.402 67" stroke="#527C00" stroke-width="1.08" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ _(x.div, {
                              className: `framer-1dsno1j`,
                              "data-framer-name": `Frame 2147224679`,
                              layoutDependency: A,
                              layoutId: `guxe8fYuv`,
                              children: [
                                /*#__PURE__*/ g(w, {
                                  __fromCanvasComponent: !0,
                                  children:
                                    at(`v3`, s) ??
                                    /*#__PURE__*/ g(c, {
                                      children: /*#__PURE__*/ g(x.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                          "--framer-font-family": `"IBM Plex Sans"`,
                                          "--framer-font-size": `14px`,
                                          "--framer-font-style": `normal`,
                                          "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                          "--framer-font-weight": `400`,
                                          "--framer-line-height": `16.9px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                        },
                                        children: `按约定范围完成接入、定制与交付。`,
                                      }),
                                    }),
                                  className: `framer-qya70k`,
                                  "data-framer-name": `Work description`,
                                  fonts: [`GF;IBM Plex Sans-regular`],
                                  layoutDependency: A,
                                  layoutId: `BuNWKnHM3`,
                                  style: {
                                    "--extracted-2gg91v": `normal`,
                                    "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                    "--framer-paragraph-spacing": `0px`,
                                    opacity: 0.8,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ _(x.div, {
                                  className: `framer-zstlj6`,
                                  "data-framer-name": `Included work`,
                                  layoutDependency: A,
                                  layoutId: `C6blYHIpN`,
                                  children: [
                                    /*#__PURE__*/ _(x.div, {
                                      className: `framer-136rif8`,
                                      "data-framer-name": `Work / Connect systems and warehouse data`,
                                      layoutDependency: A,
                                      layoutId: `LLAtQF0Vm`,
                                      children: [
                                        /*#__PURE__*/ g(P, {
                                          className: `framer-1nbf7xs`,
                                          "data-framer-name": `icon/connect`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 15,
                                          intrinsicWidth: 15,
                                          layoutDependency: A,
                                          layoutId: `HWM7gdzht`,
                                          svg: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.57697 7.96062L8.42221 6.11538M5.65435 9.34455L4.73173 10.2672C4.36469 10.6342 3.86687 10.8404 3.3478 10.8404C2.82872 10.8404 2.33091 10.6342 1.96387 10.2672C1.59683 9.90013 1.39063 9.40231 1.39062 8.88324C1.39062 8.36416 1.59683 7.86635 1.96387 7.49931L3.80911 5.65407C3.98227 5.45772 4.19523 5.30047 4.43384 5.19276C4.67245 5.08504 4.93124 5.02934 5.19304 5.02934C5.45483 5.02934 5.71363 5.08504 5.95224 5.19276C6.19085 5.30047 6.40381 5.45772 6.57697 5.65407M9.34483 5.65407L10.2675 4.73145C10.6345 4.3644 11.1323 4.1582 11.6514 4.1582C11.9084 4.1582 12.1629 4.20883 12.4004 4.30718C12.6378 4.40554 12.8536 4.54971 13.0353 4.73145C13.2171 4.91319 13.3612 5.12894 13.4596 5.3664C13.5579 5.60385 13.6086 5.85836 13.6086 6.11538C13.6086 6.3724 13.5579 6.6269 13.4596 6.86435C13.3612 7.10181 13.2171 7.31757 13.0353 7.49931L11.1901 9.34455C11.0169 9.54089 10.804 9.69814 10.5653 9.80586C10.3267 9.91357 10.0679 9.96928 9.80614 9.96928C9.54435 9.96928 9.28555 9.91357 9.04694 9.80586C8.80833 9.69814 8.59537 9.54089 8.42221 9.34455" stroke="#7EA815" stroke-width="0.738096" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ g(w, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            at(`v4`, s) ??
                                            /*#__PURE__*/ g(c, {
                                              children: /*#__PURE__*/ g(x.p, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                  "--framer-font-family": `"IBM Plex Sans"`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-font-style": `normal`,
                                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                  "--framer-font-weight": `400`,
                                                  "--framer-line-height": `16.9px`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                },
                                                children: `梳理仓库、系统接口和库存数据模型`,
                                              }),
                                            }),
                                          className: `framer-1kan319`,
                                          "data-framer-name": `Work description`,
                                          fonts: [`GF;IBM Plex Sans-regular`],
                                          layoutDependency: A,
                                          layoutId: `wH2RcECx1`,
                                          style: {
                                            "--extracted-2gg91v": `normal`,
                                            "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                            "--framer-paragraph-spacing": `0px`,
                                            opacity: 0.8,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ _(x.div, {
                                      className: `framer-1hkpfd2`,
                                      "data-framer-name": `Work / Customize workflows and pages`,
                                      layoutDependency: A,
                                      layoutId: `hMF25Gxq8`,
                                      children: [
                                        /*#__PURE__*/ g(P, {
                                          className: `framer-1wt8wnv`,
                                          "data-framer-name": `icon/build`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 15,
                                          intrinsicWidth: 15,
                                          layoutDependency: A,
                                          layoutId: `bfCHRyCnm`,
                                          svg: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.875 1.875H3.125C2.43464 1.875 1.875 2.43464 1.875 3.125V11.875C1.875 12.5654 2.43464 13.125 3.125 13.125H11.875C12.5654 13.125 13.125 12.5654 13.125 11.875V3.125C13.125 2.43464 12.5654 1.875 11.875 1.875Z" stroke="#7EA815" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.875 5.625H13.125M5.625 5.625V13.125" stroke="#7EA815" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ g(w, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            at(`v5`, s) ??
                                            /*#__PURE__*/ g(c, {
                                              children: /*#__PURE__*/ g(x.p, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                  "--framer-font-family": `"IBM Plex Sans"`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-font-style": `normal`,
                                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                  "--framer-font-weight": `400`,
                                                  "--framer-line-height": `16.9px`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                },
                                                children: `定制出入库规则、应用页面与处理流程`,
                                              }),
                                            }),
                                          className: `framer-xqu88o`,
                                          "data-framer-name": `Work description`,
                                          fonts: [`GF;IBM Plex Sans-regular`],
                                          layoutDependency: A,
                                          layoutId: `j2T3H5a7z`,
                                          style: {
                                            "--extracted-2gg91v": `normal`,
                                            "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                            "--framer-paragraph-spacing": `0px`,
                                            opacity: 0.8,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ _(x.div, {
                                      className: `framer-x3yulz`,
                                      "data-framer-name": `Work / Validate and deliver together`,
                                      layoutDependency: A,
                                      layoutId: `K9f6FFl3v`,
                                      children: [
                                        /*#__PURE__*/ g(P, {
                                          className: `framer-h9jlww`,
                                          "data-framer-name": `icon/check`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 15,
                                          intrinsicWidth: 15,
                                          layoutDependency: A,
                                          layoutId: `Xhmea1li9`,
                                          svg: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 1.875H3.75C3.05964 1.875 2.5 2.43464 2.5 3.125V11.875C2.5 12.5654 3.05964 13.125 3.75 13.125H11.25C11.9404 13.125 12.5 12.5654 12.5 11.875V3.125C12.5 2.43464 11.9404 1.875 11.25 1.875Z" stroke="#7EA815" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 7.5L6.875 9.375L10 5.625" stroke="#7EA815" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ g(w, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            at(`v6`, s) ??
                                            /*#__PURE__*/ g(c, {
                                              children: /*#__PURE__*/ g(x.p, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                  "--framer-font-family": `"IBM Plex Sans"`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-font-style": `normal`,
                                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                                  "--framer-font-weight": `400`,
                                                  "--framer-line-height": `16.9px`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                },
                                                children: `按约定范围完成验证与交付`,
                                              }),
                                            }),
                                          className: `framer-i33gdo`,
                                          "data-framer-name": `Work description`,
                                          fonts: [`GF;IBM Plex Sans-regular`],
                                          layoutDependency: A,
                                          layoutId: `wAdq3tAqV`,
                                          style: {
                                            "--extracted-2gg91v": `normal`,
                                            "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                            "--framer-paragraph-spacing": `0px`,
                                            opacity: 0.8,
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
                          ],
                        }),
                        /*#__PURE__*/ g(x.div, {
                          className: `framer-fag024`,
                          "data-framer-name": `Hover overlay`,
                          layoutDependency: A,
                          layoutId: `xpd2aJgxe`,
                          style: { backgroundColor: `rgba(0, 0, 0, 0.65)`, opacity: 0 },
                          variants: { "MczB3l2bL-hover": { opacity: 1 } },
                          children: /*#__PURE__*/ g(w, {
                            __fromCanvasComponent: !0,
                            children:
                              at(`v7`, s) ??
                              /*#__PURE__*/ g(c, {
                                children: /*#__PURE__*/ g(x.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                    "--framer-font-family": `"IBM Plex Sans"`,
                                    "--framer-font-size": `24px`,
                                    "--framer-font-style": `normal`,
                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                    "--framer-font-weight": `500`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-XIMMQmM21-M6Z99vBvw))`,
                                  },
                                  children: `预约会议 ↗`,
                                }),
                              }),
                            className: `framer-h2aigv`,
                            "data-framer-name": `Book a Meeting`,
                            fonts: [`GF;IBM Plex Sans-500`],
                            layoutDependency: A,
                            layoutId: `XYO_KvbQS`,
                            style: {
                              "--extracted-2gg91v": `normal`,
                              "--extracted-r6o4lv": `var(--variable-reference-XIMMQmM21-M6Z99vBvw)`,
                              "--variable-reference-XIMMQmM21-M6Z99vBvw": v,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
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
          `.framer-NebKl.framer-nwtojy, .framer-NebKl .framer-nwtojy { display: block; }`,
          `.framer-NebKl.framer-1i8uxvn { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; text-decoration: none; width: 615px; }`,
          `.framer-NebKl .framer-fre3id { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 4px 6px 4px 6px; position: relative; width: min-content; }`,
          `.framer-NebKl .framer-1q4uk9, .framer-NebKl .framer-i57wqj, .framer-NebKl .framer-1kan319, .framer-NebKl .framer-xqu88o, .framer-NebKl .framer-i33gdo, .framer-NebKl .framer-h2aigv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-NebKl .framer-gamoja { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-NebKl .framer-1jd5my2 { flex: none; height: 122px; position: relative; width: 180px; }`,
          `.framer-NebKl .framer-1dsno1j { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-NebKl .framer-qya70k { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-NebKl .framer-zstlj6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-NebKl .framer-136rif8, .framer-NebKl .framer-1hkpfd2, .framer-NebKl .framer-x3yulz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 9px; height: 16px; justify-content: flex-start; overflow: visible; padding: 1px 0px 1px 0px; position: relative; width: 100%; }`,
          `.framer-NebKl .framer-1nbf7xs, .framer-NebKl .framer-1wt8wnv, .framer-NebKl .framer-h9jlww { flex: none; height: 15px; position: relative; width: 15px; }`,
          `.framer-NebKl .framer-fag024 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; left: 0px; padding: 24px; pointer-events: none; position: absolute; top: 0px; width: 100%; }`,
          `.framer-NebKl.framer-v-vf259s.framer-1i8uxvn { width: 318px; }`,
          `.framer-NebKl.framer-v-vf259s .framer-i57wqj { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-NebKl.framer-v-vf259s .framer-gamoja { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 12px; }`,
          `.framer-NebKl.framer-v-vf259s .framer-1dsno1j { flex: none; width: 100%; }`,
          `.framer-NebKl[data-border="true"]::after, .framer-NebKl [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-NebKl`
      )),
      (xt.displayName = `Engineering services CTA`),
      (xt.defaultProps = { height: 240, width: 615 }),
      M(xt, {
        variant: {
          options: [`MczB3l2bL`, `C5P7xQGUp`],
          optionTitles: [`Default`, `Phone`],
          title: `Variant`,
          type: U.Enum,
        },
        KM0Td3XVu: { title: `Link`, type: U.Link },
        XIMMQmM21: {
          defaultValue: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa)`,
          title: `Text Color`,
          type: U.Color,
        },
      }),
      ae(
        xt,
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
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function Ct({ style: e, language: t = `en` }) {
  let { activeLocale: r } = G(),
    o = (r?.code || t).toLowerCase().startsWith(`zh`),
    s = n(
      () => ({
        prompt: o ? Dt : Et,
        workspace: o ? `工厂 WMS` : `Warehouse Management System`,
        sendAria: o ? `构建交互示例` : `Build interactive sample`,
      }),
      [o]
    ),
    [c, l] = y(s.prompt),
    d = c.length > 0,
    f = a((e) => {
      i(() => l(e));
    }, []);
  return (
    v(() => {
      if (u === void 0 || u.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
        f(s.prompt);
        return;
      }
      let e = 0,
        t = u.setInterval(() => {
          ((e += 1), f(s.prompt.slice(0, e)), e >= s.prompt.length && u.clearInterval(t));
        }, 24);
      return () => u.clearInterval(t);
    }, [f, s.prompt]),
    /*#__PURE__*/ _(`div`, {
      style: {
        ...e,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        background: `transparent`,
        color: `#171717`,
        fontFamily: wt,
        overflow: `auto`,
        minWidth: 0,
        minHeight: 0,
        padding: 24,
      },
      children: [
        /*#__PURE__*/ g(`style`, { children: Ot }),
        /*#__PURE__*/ _(`div`, {
          style: {
            width: `min(640px, 100%)`,
            border: `1.5px solid #B6E64A`,
            borderRadius: 6,
            background: `#fff`,
            boxShadow: `0 0 0 4px rgba(182,230,74,0.16), 0 10px 28px rgba(182,230,74,0.18)`,
            padding: `22px 22px 14px`,
          },
          children: [
            /*#__PURE__*/ _(`p`, {
              style: { margin: 0, minHeight: 78, fontSize: 16, lineHeight: 1.55, color: `#1C1C1C` },
              children: [
                c,
                c.length < s.prompt.length
                  ? /*#__PURE__*/ g(`span`, { className: `t0-caret` })
                  : null,
              ],
            }),
            /*#__PURE__*/ _(`div`, {
              style: {
                display: `flex`,
                alignItems: `center`,
                justifyContent: `space-between`,
                gap: 12,
                marginTop: 18,
              },
              children: [
                /*#__PURE__*/ _(`span`, {
                  style: {
                    display: `inline-flex`,
                    alignItems: `center`,
                    gap: 8,
                    minWidth: 0,
                    color: `#8A8A8A`,
                    fontSize: 14,
                  },
                  children: [
                    /*#__PURE__*/ _(`svg`, {
                      width: `16`,
                      height: `16`,
                      viewBox: `0 0 24 24`,
                      fill: `none`,
                      stroke: `currentColor`,
                      strokeWidth: `1.7`,
                      strokeLinecap: `round`,
                      strokeLinejoin: `round`,
                      "aria-hidden": !0,
                      children: [
                        /*#__PURE__*/ g(`path`, {
                          d: `M3 7.5h6l2 2H21v9.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19V7.5z`,
                        }),
                        /*#__PURE__*/ g(`path`, { d: `M3 7.5V6a1.5 1.5 0 0 1 1.5-1.5H9l2 2` }),
                      ],
                    }),
                    /*#__PURE__*/ g(`span`, {
                      style: { overflow: `hidden`, textOverflow: `ellipsis`, whiteSpace: `nowrap` },
                      children: s.workspace,
                    }),
                    /*#__PURE__*/ g(`svg`, {
                      width: `14`,
                      height: `14`,
                      viewBox: `0 0 24 24`,
                      fill: `none`,
                      stroke: `currentColor`,
                      strokeWidth: `1.8`,
                      strokeLinecap: `round`,
                      "aria-hidden": !0,
                      children: /*#__PURE__*/ g(`path`, { d: `M6 9l6 6 6-6` }),
                    }),
                  ],
                }),
                /*#__PURE__*/ g(`a`, {
                  className: `t0-press`,
                  href: d ? Tt : void 0,
                  target: `_top`,
                  "aria-label": s.sendAria,
                  "aria-disabled": !d,
                  onClick: (e) => {
                    d || e.preventDefault();
                  },
                  style: {
                    width: 36,
                    height: 36,
                    flex: `none`,
                    borderRadius: 6,
                    background: `#C6F25C`,
                    color: `#1A1A1A`,
                    display: `grid`,
                    placeItems: `center`,
                    cursor: d ? `pointer` : `default`,
                    opacity: d ? 1 : 0.55,
                    textDecoration: `none`,
                  },
                  children: /*#__PURE__*/ g(`svg`, {
                    width: `16`,
                    height: `16`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `2.2`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    "aria-hidden": !0,
                    children: /*#__PURE__*/ g(`path`, { d: `M12 19V6M7 11l5-5 5 5` }),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
var wt, Tt, Et, Dt, Ot;
function kt() {
  return (kt = e(() => {
    (d(),
      f(),
      o(),
      L(),
      (wt = `"Inter", "SF Pro Text", "PingFang SC", ui-sans-serif, system-ui, sans-serif`),
      (Tt = `https://tier0.cn/login`),
      (Et = `Build a factory WMS for raw and finished goods. Track orders, materials, batches, locations and containers from receiving to dispatch, with role handovers and stock movements.`),
      (Dt = `为本厂构建原料与成品仓库管理软件，关联订单、物料、批次、库位和容器。支持收货上架、拣货复核、生产领料与客户发货；按岗位确认交接，记录库存与收发流水。`),
      (Ot = `
.t0-press { transition: transform 160ms ease, opacity 180ms ease; }
.t0-press:active { transform: scale(0.98); }
.t0-press:focus-visible { outline: 2px solid #171717; outline-offset: 2px; }
.t0-caret { display: inline-block; width: 1px; height: 1em; margin-left: 1px; background: #171717; vertical-align: text-bottom; animation: t0-blink 1s steps(1) infinite; }
@keyframes t0-blink { 50% { opacity: 0; } }
@media (prefers-reduced-motion: reduce) {
  .t0-press, .t0-press:active { transition: none; transform: none; }
  .t0-caret { animation: none; }
}
`),
      M(Ct, {
        language: {
          type: U.Enum,
          options: [`en`, `zh`],
          optionTitles: [`English`, `中文`],
          defaultValue: `en`,
          title: `Language`,
        },
      }));
  }))();
}
function At(e) {
  let {
      beamColor: t = `#B2ED1D`,
      gridColor: n = `#A3A3A3`,
      cellSize: r = 50,
      maxLines: i = 12,
      baseSpeed: a = 2,
      lineLength: o = 150,
      spawnProbability: s = 0.1,
      style: c,
    } = e,
    d = l(null),
    f = l(null),
    p = c?.position;
  return (
    v(() => {
      let e = f.current,
        n = d.current;
      if (!e || !n) return;
      let c = e.getContext(`2d`);
      if (!c) return;
      let l = 0,
        p = !0,
        m = [],
        h = () => {
          let t = Math.min(u.devicePixelRatio || 1, 2),
            r = n.clientWidth,
            i = n.clientHeight,
            a = Math.max(1, Math.floor(r * t)),
            o = Math.max(1, Math.floor(i * t));
          return (
            (e.width !== a || e.height !== o) &&
              ((e.width = a), (e.height = o), c.setTransform(t, 0, 0, t, 0, 0)),
            { width: r, height: i }
          );
        },
        g = new ResizeObserver(h);
      if ((g.observe(n), h(), u.matchMedia(`(prefers-reduced-motion: reduce)`).matches))
        return () => g.disconnect();
      let _ = () => {
        if (!p) return;
        let { width: e, height: n } = h();
        (c.clearRect(0, 0, e, n),
          Math.random() < s &&
            m.length < i &&
            m.push({
              x: Math.floor((e / r) * Math.random()) * r,
              y: -r,
              history: [],
              dx: 0,
              dy: 1,
              speed: a,
              lineLengthPx: Math.floor(Math.random() * o * 0.5 + o * 0.75),
            }));
        for (let n of m) {
          n.history.push({ x: n.x, y: n.y });
          let i = Math.max(2, Math.ceil(n.lineLengthPx / n.speed));
          if (
            (n.history.length > i && n.history.shift(),
            (n.x += n.dx * n.speed),
            (n.y += n.dy * n.speed),
            n.x % r === 0 && n.y % r === 0)
          ) {
            let t = Math.floor(e / r) * r;
            (n.x <= 0 && n.dx === -1) || (n.x >= t && n.dx === 1)
              ? ((n.dx = 0), (n.dy = 1))
              : n.dy === 1
                ? Math.random() < 0.3 && ((n.dy = 0), (n.dx = Math.random() < 0.5 ? 1 : -1))
                : Math.random() < 0.6 && ((n.dy = 1), (n.dx = 0));
          }
          if (n.history.length < 2) continue;
          let a = n.history,
            o = a[0],
            s = a[a.length - 1];
          ((c.lineCap = `round`), (c.lineJoin = `round`), (c.lineWidth = 1.5));
          let l = c.createLinearGradient(o.x, o.y, s.x, s.y);
          (l.addColorStop(0, jt(t, 0)),
            l.addColorStop(0.6, jt(t, 0.35)),
            l.addColorStop(1, jt(t, 0.9)),
            c.beginPath(),
            c.moveTo(a[0].x, a[0].y));
          for (let e = 1; e < a.length; e++) c.lineTo(a[e].x, a[e].y);
          ((c.strokeStyle = l), (c.shadowBlur = 0), c.stroke());
          let u = Math.max(2, Math.ceil(20 / Math.max(1, n.speed))),
            d = Math.max(0, a.length - 1 - u);
          (c.beginPath(), c.moveTo(a[d].x, a[d].y));
          for (let e = d + 1; e < a.length; e++) c.lineTo(a[e].x, a[e].y);
          ((c.strokeStyle = jt(t, 0.95)),
            (c.shadowColor = t),
            (c.shadowBlur = 12),
            c.stroke(),
            (c.shadowBlur = 0));
        }
        for (let e = m.length - 1; e >= 0; e--) {
          let t = m[e].history[0];
          t && t.y >= n + r * 2 && m.splice(e, 1);
        }
        l = requestAnimationFrame(_);
      };
      return (
        (l = requestAnimationFrame(_)),
        () => {
          ((p = !1), cancelAnimationFrame(l), g.disconnect());
        }
      );
    }, [t, r, i, a, o, s]),
    /*#__PURE__*/ g(`div`, {
      ref: d,
      style: {
        ...c,
        position: !p || p === `static` ? `relative` : p,
        overflow: `hidden`,
        backgroundColor: `transparent`,
        backgroundImage: `linear-gradient(to right, ${n} 1px, transparent 1px), linear-gradient(to bottom, ${n} 1px, transparent 1px)`,
        backgroundSize: `${r}px ${r}px`,
        backgroundPosition: `0 0`,
      },
      children: /*#__PURE__*/ g(`canvas`, {
        ref: f,
        "aria-hidden": !0,
        style: {
          position: `absolute`,
          inset: 0,
          width: `100%`,
          height: `100%`,
          pointerEvents: `none`,
        },
      }),
    })
  );
}
function jt(e, t) {
  let n = e.trim(),
    r = /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.exec(n);
  if (r) {
    let e = r[1];
    (e.length === 3 &&
      (e = e
        .split(``)
        .map((e) => e + e)
        .join(``)),
      e.length === 8 && (e = e.slice(0, 6)));
    let n = parseInt(e, 16);
    return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${t})`;
  }
  let i = /rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/i.exec(n);
  return i ? `rgba(${i[1]},${i[2]},${i[3]},${t})` : n;
}
function Mt() {
  return (Mt = e(() => {
    (d(),
      f(),
      L(),
      o(),
      M(At, {
        beamColor: { type: U.Color, title: `光束`, defaultValue: `#B2ED1D` },
        gridColor: { type: U.Color, title: `网格`, defaultValue: `#A3A3A3` },
        cellSize: { type: U.Number, title: `格子`, defaultValue: 50, min: 24, max: 120, step: 2 },
        maxLines: { type: U.Number, title: `光束数量`, defaultValue: 12, min: 1, max: 40, step: 1 },
        baseSpeed: { type: U.Number, title: `速度`, defaultValue: 2, min: 1, max: 8, step: 1 },
        lineLength: {
          type: U.Number,
          title: `拖尾`,
          defaultValue: 150,
          min: 40,
          max: 400,
          step: 10,
        },
        spawnProbability: {
          type: U.Number,
          title: `出现频率`,
          defaultValue: 0.1,
          min: 0.02,
          max: 0.5,
          step: 0.02,
        },
      }));
  }))();
}
function Nt(e) {
  let { activeLocale: t } = G(),
    n = t?.code;
  return n ? (n.toLowerCase().startsWith(`zh`) ? `zh` : `en`) : e;
}
function Pt({ name: e }) {
  return /*#__PURE__*/ g(`svg`, {
    width: `16`,
    height: `16`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `2`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    "aria-hidden": `true`,
    style: { display: `block`, flexShrink: 0 },
    children:
      e === `table`
        ? /*#__PURE__*/ _(m, {
            children: [
              /*#__PURE__*/ g(`rect`, { x: `3`, y: `3`, width: `18`, height: `18`, rx: `2` }),
              /*#__PURE__*/ g(`path`, { d: `M12 3v18M3 9h18M3 15h18` }),
            ],
          })
        : e === `activity`
          ? /*#__PURE__*/ g(`path`, { d: `M22 12h-4l-3 9L9 3l-3 9H2` })
          : /*#__PURE__*/ _(m, {
              children: [
                /*#__PURE__*/ g(`path`, {
                  d: `m12 3 2.7 7.3L22 13l-7.3 2.7L12 23l-2.7-7.3L2 13l7.3-2.7L12 3Z`,
                }),
                /*#__PURE__*/ g(`path`, { d: `M19 2v4M17 4h4M4 3v2M3 4h2` }),
              ],
            }),
  });
}
function Ft() {
  return /*#__PURE__*/ _(`svg`, {
    className: `wua-task-avatar`,
    width: `24`,
    height: `24`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    "aria-label": `Y`,
    children: [
      /*#__PURE__*/ g(`rect`, { width: `24`, height: `24`, rx: `12`, fill: `#E6F5FF` }),
      /*#__PURE__*/ g(`path`, {
        d: `M7.3 6.3H9.5L12 11.3L14.5 6.3H16.7L13 13.2V18H11V13.2L7.3 6.3Z`,
        fill: `#0099FF`,
      }),
    ],
  });
}
function It({ example: e, language: t }) {
  let n = (e) => Bt(e, t);
  return /*#__PURE__*/ _(`article`, {
    className: `wua-card`,
    children: [
      /*#__PURE__*/ _(`div`, {
        className: `wua-card-head`,
        children: [
          /*#__PURE__*/ g(Pt, { name: `table` }),
          /*#__PURE__*/ g(`strong`, { children: n(e.sourceTitle) }),
          /*#__PURE__*/ _(`span`, {
            className: `wua-tag`,
            children: [e.rows.length, ` `, t === `zh` ? `项` : `values`],
          }),
        ],
      }),
      /*#__PURE__*/ _(`div`, {
        className: `wua-data-body`,
        children: [
          /*#__PURE__*/ g(`div`, {
            className: `wua-context`,
            children: e.key === `reconcile` || e.key === `trace` ? `FG-B / B2409` : `WAREHOUSE 01`,
          }),
          /*#__PURE__*/ _(`table`, {
            children: [
              /*#__PURE__*/ g(`thead`, {
                children: /*#__PURE__*/ g(`tr`, {
                  children: e.columns.map((e, t) =>
                    /*#__PURE__*/ g(`th`, { scope: `col`, children: n(e) }, t)
                  ),
                }),
              }),
              /*#__PURE__*/ g(`tbody`, {
                children: e.rows.map((e, t) =>
                  /*#__PURE__*/ _(
                    `tr`,
                    {
                      children: [
                        /*#__PURE__*/ g(`td`, { children: n(e.label) }),
                        /*#__PURE__*/ g(`td`, { children: e.value }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Lt({ example: e, language: t, draft: n = !1, onDraft: r }) {
  let i = (e) => Bt(e, t);
  return /*#__PURE__*/ _(`article`, {
    className: `wua-card`,
    children: [
      /*#__PURE__*/ _(`div`, {
        className: `wua-card-head`,
        children: [
          /*#__PURE__*/ g(Pt, { name: `sparkles` }),
          /*#__PURE__*/ g(`strong`, { children: i(e.title) }),
          /*#__PURE__*/ g(`span`, { className: `wua-tag`, children: i(e.badge) }),
        ],
      }),
      /*#__PURE__*/ _(`div`, {
        className: `wua-analysis-body`,
        children: [
          /*#__PURE__*/ _(`div`, {
            className: `wua-metric`,
            children: [
              /*#__PURE__*/ g(`strong`, { children: e.metric }),
              /*#__PURE__*/ g(`span`, { children: i(e.unit) }),
            ],
          }),
          /*#__PURE__*/ g(`p`, { className: `wua-metric-label`, children: i(e.metricLabel) }),
          e.key === `reconcile` &&
            /*#__PURE__*/ _(`div`, {
              className: `wua-compact-calc`,
              children: [
                /*#__PURE__*/ _(`div`, {
                  children: [
                    /*#__PURE__*/ g(`span`, { children: i([`Expected`, `应结存`]) }),
                    /*#__PURE__*/ g(`span`, {
                      children: i([`60 opening + 20 in − 15 out`, `60 期初 + 20 收货 − 15 发货`]),
                    }),
                    /*#__PURE__*/ g(`strong`, { children: `= 65` }),
                  ],
                }),
                /*#__PURE__*/ _(`div`, {
                  children: [
                    /*#__PURE__*/ g(`span`, { children: i([`Variance`, `差异`]) }),
                    /*#__PURE__*/ g(`span`, {
                      children: i([`62 recorded − 65 expected`, `62 记录 − 65 应结存`]),
                    }),
                    /*#__PURE__*/ g(`strong`, { children: `= −3` }),
                  ],
                }),
              ],
            }),
          e.key === `dispatch` &&
            /*#__PURE__*/ g(`div`, {
              className: `wua-progress`,
              "aria-label": i([`2 of 3 orders ready`, `3 单中有 2 单就绪`]),
              children: /*#__PURE__*/ g(`span`, { style: { width: `66.6667%` } }),
            }),
          e.key !== `reconcile` &&
            /*#__PURE__*/ g(`p`, { className: `wua-explanation`, children: i(e.explanation) }),
          r &&
            /*#__PURE__*/ _(`button`, {
              type: `button`,
              className: n ? `wua-draft-done` : `wua-action`,
              onClick: r,
              children: [
                i(n ? [`✓ Draft added · undo`, `✓ 已加入草稿 · 撤销`] : e.action),
                !n && /*#__PURE__*/ g(`span`, { "aria-hidden": `true`, children: `↗` }),
              ],
            }),
        ],
      }),
    ],
  });
}
function Rt({
  language: e = `en`,
  initialScenario: n = `reconcile`,
  accent: r = `#B2ED1D`,
  radius: i = 10,
  fontFamily: a = `"IBM Plex Sans", "PingFang SC", Arial, sans-serif`,
  style: o,
}) {
  let s = Nt(e),
    c = (e) => Bt(e, s),
    u = Y.find((e) => e.key === n) || Y[0],
    [d, f] = y(u.key),
    [p, h] = y(``),
    [b, x] = y(`chat`),
    [S, ee] = y([]),
    [C, w] = y([]),
    [te, T] = y(!1),
    [E, D] = y(null),
    [O, k] = y(!1),
    A = l(null),
    j = l(null),
    M = t().replace(/:/g, ``),
    N = Y.find((e) => e.key === d) || Y[0];
  v(() => {
    (f(u.key), T(!1));
  }, [u.key]);
  let P = (e) => {
      (f(e),
        x(`chat`),
        h(``),
        T(!1),
        k(!1),
        D([`Analysis ready · based on the example records`, `分析已就绪 · 基于示例记录`]),
        A.current && (A.current.scrollTop = 0));
    },
    F = (e) => {
      e?.preventDefault();
      let t = p.trim();
      if (!t) {
        (k(!0),
          D([`Type a question or choose a prompt above.`, `请输入问题，或选择上方预设。`]),
          j.current?.focus());
        return;
      }
      let n = [Y[3], Y[0], Y[1], Y[2]].find((e) => e.terms.test(t));
      n
        ? P(n.key)
        : (k(!0),
          D([
            `Try batch variance, dispatch, batch trace or low stock.`,
            `试试批次对账、出库检查、库位追溯或低库存提醒。`,
          ]));
    },
    I = (e) => {
      (ee((t) => (t.includes(e) ? t : [...t, e])),
        D([`Card pair saved. Open Card List to view it.`, `卡片已保存，可在卡片列表查看。`]));
    },
    L = (e) => {
      let t = C.includes(e);
      (w((n) => (t ? n.filter((t) => t !== e) : [...n, e])),
        D(
          t
            ? [`Draft removed. No live action was executed.`, `已撤销草稿，未执行真实操作。`]
            : [
                `Draft added locally. No alert sent or task scheduled.`,
                `草稿已保存在本组件内，未发送告警或创建定时任务。`,
              ]
        ));
    },
    R = (e) => {
      (ee((t) => t.filter((t) => t !== e)),
        D([`Card removed. You can save it again from Chat.`, `卡片已移除，可从对话中重新保存。`]));
    },
    z = (e) =>
      /*#__PURE__*/ _(`div`, {
        className: `wua-grid`,
        children: [
          /*#__PURE__*/ g(It, { example: e, language: s }),
          /*#__PURE__*/ g(Lt, {
            example: e,
            language: s,
            draft: C.includes(e.key),
            onDraft: () => L(e.key),
          }),
        ],
      });
  return /*#__PURE__*/ _(`section`, {
    className: `wua`,
    lang: s,
    "aria-label": c([`WMS UNS Agent interactive example`, `WMS UNS Agent 交互示例`]),
    style: { width: 660, height: 490, ...o, fontFamily: a, borderRadius: i, "--wua-accent": r },
    children: [
      /*#__PURE__*/ g(`style`, { children: Vt }),
      /*#__PURE__*/ _(`header`, {
        className: `wua-header`,
        children: [
          /*#__PURE__*/ g(`span`, {
            className: `wua-brand`,
            children: /*#__PURE__*/ g(Pt, { name: `sparkles` }),
          }),
          /*#__PURE__*/ g(`strong`, { children: `UNS Agent` }),
          /*#__PURE__*/ g(`span`, { className: `wua-header-separator` }),
          /*#__PURE__*/ g(`span`, {
            className: `wua-workspace`,
            children: c([`仓库 01`, `一号仓库`]),
          }),
        ],
      }),
      /*#__PURE__*/ _(`nav`, {
        className: `wua-tabs`,
        "aria-label": c([`Agent views`, `Agent 视图`]),
        children: [
          /*#__PURE__*/ g(`button`, {
            type: `button`,
            "aria-pressed": b === `chat`,
            "aria-controls": `${M}-content`,
            onClick: () => x(`chat`),
            children: c([`Chat`, `对话`]),
          }),
          /*#__PURE__*/ _(`button`, {
            type: `button`,
            "aria-pressed": b === `cards`,
            "aria-controls": `${M}-content`,
            onClick: () => x(`cards`),
            children: [
              c([`Card List`, `卡片列表`]),
              S.length > 0 &&
                /*#__PURE__*/ g(`span`, { className: `wua-count`, children: S.length }),
            ],
          }),
        ],
      }),
      /*#__PURE__*/ _(`div`, {
        className: `wua-scroll`,
        id: `${M}-content`,
        ref: A,
        children: [
          b === `chat`
            ? /*#__PURE__*/ _(m, {
                children: [
                  /*#__PURE__*/ _(`div`, {
                    className: `wua-question-row`,
                    children: [
                      /*#__PURE__*/ g(`div`, {
                        className: `wua-question`,
                        children: /*#__PURE__*/ g(`p`, { children: c(N.prompt) }),
                      }),
                      /*#__PURE__*/ g(Ft, {}),
                    ],
                  }),
                  /*#__PURE__*/ g(`p`, { className: `wua-answer`, children: c(N.answer) }),
                  /*#__PURE__*/ _(`div`, {
                    className: `wua-result-bar`,
                    children: [
                      /*#__PURE__*/ _(`span`, {
                        className: `wua-ready`,
                        children: [
                          /*#__PURE__*/ g(Pt, { name: `activity` }),
                          c([`Analysis ready`, `分析已就绪`]),
                        ],
                      }),
                      /*#__PURE__*/ g(`button`, {
                        type: `button`,
                        onClick: () => I(d),
                        children: S.includes(d)
                          ? c([`✓ Saved`, `✓ 已保存`])
                          : c([`＋ Save cards`, `＋ 保存卡片`]),
                      }),
                    ],
                  }),
                  z(N),
                  /*#__PURE__*/ _(`button`, {
                    type: `button`,
                    className: `wua-source-toggle`,
                    "aria-expanded": te,
                    "aria-controls": `${M}-source`,
                    onClick: () => T((e) => !e),
                    children: [
                      /*#__PURE__*/ g(`span`, { "aria-hidden": `true`, children: te ? `−` : `+` }),
                      c([`Source & records`, `数据源与记录`]),
                    ],
                  }),
                  te &&
                    /*#__PURE__*/ _(`div`, {
                      className: `wua-source`,
                      id: `${M}-source`,
                      children: [
                        /*#__PURE__*/ _(`div`, {
                          className: `wua-source-heading`,
                          children: [
                            /*#__PURE__*/ g(`span`, {
                              className: `wua-uns-label`,
                              children: `UNS`,
                            }),
                            /*#__PURE__*/ g(`code`, { children: N.path }),
                          ],
                        }),
                        /*#__PURE__*/ g(`p`, { children: c(N.sourceDescription) }),
                        d === `trace` &&
                          /*#__PURE__*/ g(`p`, {
                            children: c([
                              `09:10 · Received 20 cases · DN-2401
10:00 · Transferred 20 cases · TR-0919
11:30 · Dispatched 15 cases · DN-2402`,
                              `09:10 · 收货 20 箱 · DN-2401
10:00 · 移库 20 箱 · TR-0919
11:30 · 发货 15 箱 · DN-2402`,
                            ]),
                          }),
                      ],
                    }),
                ],
              })
            : /*#__PURE__*/ _(m, {
                children: [
                  /*#__PURE__*/ _(`div`, {
                    className: `wua-list-heading`,
                    children: [
                      /*#__PURE__*/ g(`strong`, {
                        children: c([`Your saved analysis`, `已保存的分析`]),
                      }),
                      /*#__PURE__*/ _(`span`, {
                        children: [S.length, ` `, c([`card pairs`, `组卡片`])],
                      }),
                    ],
                  }),
                  S.length === 0
                    ? /*#__PURE__*/ _(`div`, {
                        className: `wua-empty`,
                        children: [
                          /*#__PURE__*/ g(Pt, { name: `table` }),
                          /*#__PURE__*/ g(`strong`, {
                            children: c([`Keep useful analysis here`, `把有用的分析留在这里`]),
                          }),
                          /*#__PURE__*/ g(`p`, {
                            children: c([
                              `Save a result from Chat to revisit its records and next steps.`,
                              `在对话中保存分析结果，随时回看记录与下一步操作。`,
                            ]),
                          }),
                          /*#__PURE__*/ _(`button`, {
                            type: `button`,
                            className: `wua-action`,
                            onClick: () => x(`chat`),
                            children: [
                              c([`Explore a question`, `开始提问`]),
                              /*#__PURE__*/ g(`span`, { "aria-hidden": `true`, children: `↗` }),
                            ],
                          }),
                        ],
                      })
                    : S.map((e) => {
                        let t = Y.find((t) => t.key === e);
                        return /*#__PURE__*/ _(
                          `section`,
                          {
                            className: `wua-saved`,
                            children: [
                              /*#__PURE__*/ _(`div`, {
                                className: `wua-saved-heading`,
                                children: [
                                  /*#__PURE__*/ _(`button`, {
                                    type: `button`,
                                    onClick: () => P(e),
                                    children: [c(t.chip), ` ↗`],
                                  }),
                                  /*#__PURE__*/ g(`button`, {
                                    type: `button`,
                                    onClick: () => R(e),
                                    "aria-label": c([`Remove `, `移除 `]) + c(t.chip),
                                    children: c([`Remove`, `移除`]),
                                  }),
                                ],
                              }),
                              z(t),
                            ],
                          },
                          e
                        );
                      }),
                ],
              }),
          C.length > 0 &&
            /*#__PURE__*/ _(`div`, {
              className: `wua-drafts`,
              children: [
                /*#__PURE__*/ g(`strong`, { children: c([`Action drafts`, `操作草稿`]) }),
                ` `,
                /*#__PURE__*/ g(`span`, { children: C.length }),
                C.map((e) => {
                  let t = Y.find((t) => t.key === e);
                  return /*#__PURE__*/ _(
                    `div`,
                    {
                      children: [
                        /*#__PURE__*/ g(`span`, { children: c(t.draft) }),
                        /*#__PURE__*/ g(`button`, {
                          type: `button`,
                          onClick: () => L(e),
                          children: c([`Remove`, `移除`]),
                        }),
                      ],
                    },
                    e
                  );
                }),
              ],
            }),
        ],
      }),
      /*#__PURE__*/ _(`footer`, {
        className: `wua-footer`,
        children: [
          /*#__PURE__*/ g(`div`, {
            className: `wua-prompts`,
            "aria-label": c([`Suggested WMS prompts`, `WMS 示例提问`]),
            children: Y.map((e) =>
              /*#__PURE__*/ g(
                `button`,
                {
                  type: `button`,
                  "aria-pressed": d === e.key && b === `chat`,
                  onClick: () => P(e.key),
                  children: c(e.chip),
                },
                e.key
              )
            ),
          }),
          /*#__PURE__*/ _(`form`, {
            className: `wua-composer`,
            onSubmit: F,
            children: [
              /*#__PURE__*/ g(`label`, {
                className: `wua-sr-only`,
                htmlFor: `${M}-input`,
                children: c([`Ask about warehouse data`, `询问仓库数据`]),
              }),
              /*#__PURE__*/ g(`textarea`, {
                id: `${M}-input`,
                ref: j,
                rows: 1,
                value: p,
                maxLength: 500,
                "aria-invalid": O || void 0,
                "aria-describedby": E ? `${M}-status` : void 0,
                placeholder: c([`Ask about your warehouse…`, `问问你的仓库数据…`]),
                onChange: (e) => {
                  (h(e.target.value), k(!1));
                },
                onKeyDown: (e) => {
                  e.key === `Enter` &&
                    !e.shiftKey &&
                    !e.nativeEvent.isComposing &&
                    (e.preventDefault(), F());
                },
              }),
              /*#__PURE__*/ g(`button`, {
                type: `submit`,
                "aria-label": c([`Send question`, `发送问题`]),
                children: `↑`,
              }),
            ],
          }),
          E &&
            /*#__PURE__*/ g(`p`, {
              className: `wua-status${O ? ` is-error` : ``}`,
              id: `${M}-status`,
              role: `status`,
              children: c(E),
            }),
        ],
      }),
    ],
  });
}
function zt({
  language: e = `en`,
  initialScenario: t = `reconcile`,
  accent: n = `#B2ED1D`,
  variant: r = `analysis`,
  style: i,
}) {
  let a = Nt(e),
    o = Y.find((e) => e.key === t) || Y[0],
    [s, c] = y(!1);
  return (
    v(() => {
      c(!1);
    }, [t]),
    /*#__PURE__*/ _(`div`, {
      className: `wua wua-standalone`,
      lang: a,
      style: { width: 320, height: 250, ...i, "--wua-accent": n },
      children: [
        /*#__PURE__*/ g(`style`, { children: Vt }),
        r === `source`
          ? /*#__PURE__*/ g(It, { example: o, language: a })
          : /*#__PURE__*/ g(Lt, { example: o, language: a, draft: s, onDraft: () => c((e) => !e) }),
      ],
    })
  );
}
var Y, Bt, Vt;
function Ht() {
  return (Ht = e(() => {
    (f(),
      o(),
      L(),
      (Y = [
        {
          key: `reconcile`,
          chip: [`Batch variance`, `批次对账`],
          prompt: [
            `How is the variance for FG-B / B2409 calculated?`,
            `FG-B / B2409 的库存差异是怎样算出来的？`,
          ],
          answer: [
            `Expected 65 cases, recorded 62. Review the 3-case difference before confirming a shortage.`,
            `应结存 65 箱，记录 62 箱。先核查 3 箱差异，再确认是否存在实物短缺。`,
          ],
          sourceTitle: [`Daily reconciliation`, `日结记录`],
          columns: [
            [`Item`, `项目`],
            [`Cases`, `箱数`],
          ],
          rows: [
            { label: [`Opening balance`, `期初库存`], value: `60` },
            { label: [`Receipts`, `收货`], value: `+20` },
            { label: [`Issues`, `发货`], value: `−15` },
            { label: [`Adjustments`, `调整`], value: `0` },
            { label: [`Recorded balance`, `期末记录`], value: `62` },
          ],
          title: [`Variance analysis`, `差异分析`],
          badge: [`Review needed`, `待核查`],
          metric: `−3`,
          unit: [`cases`, `箱`],
          metricLabel: [`Stock variance`, `库存差异`],
          explanation: [``, ``],
          sourceDescription: [
            `September 19 stock records: expected 65 cases, recorded 62. A 3-case difference needs review.`,
            `9 月 19 日库存记录：应结存 65 箱，记录 62 箱，差异 3 箱待核查。`,
          ],
          action: [`Draft a review task`, `创建核查草稿`],
          draft: [`Review FG-B / B2409 movements`, `核查 FG-B / B2409 收发流水`],
          path: `Factory_A/Warehouse_01/State/daily_stock_check`,
          terms: /variance|reconcil|discrepan|mismatch|差异|对账|结存|怎么算/i,
        },
        {
          key: `dispatch`,
          chip: [`Dispatch check`, `出库检查`],
          prompt: [
            `Which dispatch orders can be fulfilled with available stock?`,
            `哪些出库单可以按当前可用库存完成发货？`,
          ],
          answer: [
            `Two of three orders are ready. DN-2405 needs 4 more cases of FG-D before dispatch.`,
            `3 张出库单中，2 张可以执行。DN-2405 的 FG-D 仍缺 4 箱。`,
          ],
          sourceTitle: [`Dispatch readiness`, `出库就绪检查`],
          columns: [
            [`Order · material`, `单号 · 物料`],
            [`Need / available`, `需求 / 可用`],
          ],
          rows: [
            { label: [`DN-2402 · FG-B`, `DN-2402 · FG-B`], value: `15 / 62` },
            { label: [`DN-2404 · RM-C`, `DN-2404 · RM-C`], value: `8 / 40` },
            { label: [`DN-2405 · FG-D`, `DN-2405 · FG-D`], value: `20 / 16` },
          ],
          title: [`Dispatch summary`, `出库分析`],
          badge: [`1 blocked`, `1 单待处理`],
          metric: `2 / 3`,
          unit: [`ready`, `可执行`],
          metricLabel: [`Orders with sufficient stock`, `库存满足的出库单`],
          explanation: [
            `Hold DN-2405 for replenishment. Confirm batch and quantity before releasing the other orders.`,
            `DN-2405 待补货。其他单据执行前仍需复核批次和数量。`,
          ],
          sourceDescription: [
            `Available stock covers 2 orders. DN-2405 is short by 4 cases.`,
            `当前库存满足 2 张出库单；DN-2405 还缺 4 箱。`,
          ],
          action: [`Draft a shortage alert`, `创建缺货提醒草稿`],
          draft: [`Flag DN-2405 · FG-D short by 4 cases`, `提醒 DN-2405 · FG-D 缺货 4 箱`],
          path: `Factory_A/Warehouse_01/Action/dispatch_orders`,
          terms: /dispatch|fulfil|fulfill|ship|outbound|出库|发货/i,
        },
        {
          key: `trace`,
          chip: [`Batch trace`, `库位追溯`],
          prompt: [
            `Where is batch B2409 stored, and what were its latest movements?`,
            `B2409 批次存放在哪里？最近有哪些收发记录？`,
          ],
          answer: [
            `B2409 has 62 recorded cases across two locations. Its latest dispatch was DN-2402.`,
            `B2409 记录库存为 62 箱，分布在 2 个库位。最近出库单为 DN-2402。`,
          ],
          sourceTitle: [`Batch locations`, `批次库位`],
          columns: [
            [`Location`, `库位`],
            [`Cases`, `箱数`],
          ],
          rows: [
            { label: [`B-01 · Finished goods`, `B-01 · 成品区`], value: `41` },
            { label: [`B-02 · Picking zone`, `B-02 · 拣选区`], value: `21` },
          ],
          title: [`Movement trace`, `收发追溯`],
          badge: [`3 records`, `3 条记录`],
          metric: `62`,
          unit: [`cases`, `箱`],
          metricLabel: [`Recorded stock · 2 locations`, `记录库存 · 2 个库位`],
          explanation: [
            `09:10 Received 20 → 10:00 Transferred 20 → 11:30 Dispatched 15. Open the source to inspect order references.`,
            `09:10 收货 20 → 10:00 移库 20 → 11:30 发货 15。展开数据源查看关联单据。`,
          ],
          sourceDescription: [
            `B2409: 41 cases in B-01 and 21 in B-02. Latest movements are listed below.`,
            `B2409：B-01 存放 41 箱，B-02 存放 21 箱。最近收发记录如下。`,
          ],
          action: [`Draft a trace report`, `创建追溯报告草稿`],
          draft: [`Trace B2409 locations and movements`, `追溯 B2409 库位与收发记录`],
          path: `Factory_A/Warehouse_01/Action/stock_movements`,
          terms: /trace|where|location|stored|movement|追溯|库位|位置|存放|流水/i,
        },
        {
          key: `stock`,
          chip: [`Low stock`, `低库存提醒`],
          prompt: [
            `Which materials are below their reorder point? Draft a restock alert.`,
            `哪些物料低于补货点？生成一条补货提醒草稿。`,
          ],
          answer: [
            `FG-D is 4 cases below its reorder point. RM-A and RM-C are above their thresholds.`,
            `FG-D 比补货点低 4 箱；RM-A 和 RM-C 均高于当前阈值。`,
          ],
          sourceTitle: [`Stock thresholds`, `库存阈值`],
          columns: [
            [`Material`, `物料`],
            [`Stock / minimum`, `库存 / 补货点`],
          ],
          rows: [
            { label: [`FG-D`, `FG-D`], value: `16 / 20` },
            { label: [`RM-C`, `RM-C`], value: `40 / 32` },
            { label: [`RM-A`, `RM-A`], value: `96 / 60` },
          ],
          title: [`Replenishment`, `补货分析`],
          badge: [`1 material`, `1 项物料`],
          metric: `4`,
          unit: [`cases`, `箱`],
          metricLabel: [`Minimum top-up for FG-D`, `FG-D 最少需补货`],
          explanation: [
            `Add at least 4 cases to reach the 20-case reorder point. Confirm demand and lead time before placing an order.`,
            `至少补入 4 箱即可达到 20 箱补货点。下单前需确认需求与交期。`,
          ],
          sourceDescription: [
            `FG-D: 16 cases in stock, reorder point 20. Minimum replenishment: 4 cases.`,
            `FG-D 现有 16 箱，补货点 20 箱，至少需补入 4 箱。`,
          ],
          action: [`Draft a restock alert`, `创建补货提醒草稿`],
          draft: [`Restock FG-D · minimum 4 cases`, `FG-D 补货提醒 · 至少 4 箱`],
          path: `Factory_A/Warehouse_01/State/inventory_thresholds`,
          terms: /low stock|reorder|replenish|restock|threshold|低库存|补货|阈值|提醒/i,
        },
      ]),
      (Bt = (e, t) => e[+(t === `zh`)]),
      M(Rt, {
        language: {
          type: U.Enum,
          title: `Fallback`,
          options: [`en`, `zh`],
          optionTitles: [`English`, `中文`],
          defaultValue: `en`,
        },
        initialScenario: {
          type: U.Enum,
          title: `Start with`,
          options: [`reconcile`, `dispatch`, `trace`, `stock`],
          optionTitles: [`Batch variance`, `Dispatch check`, `Batch trace`, `Low stock`],
          defaultValue: `reconcile`,
        },
        accent: { type: U.Color, title: `Accent`, defaultValue: `#B2ED1D` },
        radius: { type: U.Number, title: `Radius`, defaultValue: 10, min: 0, max: 24, step: 1 },
        fontFamily: {
          type: U.String,
          title: `Font`,
          defaultValue: `"IBM Plex Sans", "PingFang SC", Arial, sans-serif`,
        },
      }),
      M(zt, {
        language: {
          type: U.Enum,
          title: `Fallback`,
          options: [`en`, `zh`],
          optionTitles: [`English`, `中文`],
          defaultValue: `en`,
        },
        initialScenario: {
          type: U.Enum,
          title: `Scenario`,
          options: [`reconcile`, `dispatch`, `trace`, `stock`],
          defaultValue: `reconcile`,
        },
        variant: {
          type: U.Enum,
          title: `Card`,
          options: [`analysis`, `source`],
          optionTitles: [`Analysis`, `Source table`],
          defaultValue: `analysis`,
        },
        accent: { type: U.Color, defaultValue: `#B2ED1D` },
      }),
      (Vt = `
.wua {
    box-sizing: border-box;
    container-type: inline-size;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    background: #fff;
    border: 1px solid #ebebeb;
    box-shadow: 0 4px 16px rgba(0, 0, 0, .06);
    color: #050b14;
    font-family: "IBM Plex Sans", "PingFang SC", Arial, sans-serif;
    font-size: 12px;
    line-height: 1.45;
    text-align: left;
    -webkit-font-smoothing: antialiased;
}

.wua * {
    box-sizing: border-box;
}

.wua button,
.wua textarea {
    font: inherit;
    color: inherit;
}

.wua button {
    cursor: pointer;
    border: 0;
    background: none;
    margin: 0;
    touch-action: manipulation;
}

.wua button:hover {
    background: #f2f2f2;
}

.wua button:focus-visible,
.wua textarea:focus-visible {
    outline: 2px solid #050b14;
    outline-offset: 2px;
}

.wua p {
    margin: 0;
}

.wua strong {
    font-weight: 600;
}

.wua-header {
    height: 40px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 14px;
    border-bottom: 1px solid #ebebeb;
}

.wua-header > strong {
    font-size: 14px;
}

.wua-brand {
    display: grid;
    place-items: center;
    background: var(--wua-accent);
    width: 25px;
    height: 25px;
    border-radius: 6px;
}

.wua-header-separator {
    width: 1px;
    height: 14px;
    background: #dedede;
    margin: 0 2px;
}

.wua-workspace {
    font-size: 12px;
    color: #62666b;
}

.wua-tabs {
    display: flex;
    align-items: center;
    gap: 6px;
    height: 33px;
    flex-shrink: 0;
    padding: 5px 14px;
    border-bottom: 1px solid #ebebeb;
    background: #fff;
}

.wua-tabs > button {
    display: flex;
    align-items: center;
    gap: 6px;
    min-height: 23px;
    padding: 3px 8px;
    border-radius: 4px;
    font-weight: 500;
    color: #717171;
}

.wua-tabs > button[aria-pressed="true"] {
    background: #eeeeee;
    color: #050b14;
}

.wua-count {
    font-size: 10px;
    background: #fff;
    border-radius: 3px;
    padding: 0 4px;
}

.wua-scroll {
    flex: 1;
    min-height: 0;
    overflow: auto;
    padding: 12px 14px 4px;
    overscroll-behavior: contain;
    scrollbar-width: thin;
    scrollbar-color: #d5d5d5 transparent;
}

.wua-question-row {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 8px;
    margin: 4px 0 12px;
}

.wua-task-avatar {
    display: block;
    flex: 0 0 24px;
    margin-top: 4px;
}

.wua-question {
    flex: 0 1 auto;
    width: fit-content;
    max-width: calc(100% - 40px);
    min-width: 0;
    padding: 8px 12px;
    border: 1px solid #ebebeb;
    border-radius: 6px;
    background: #fafafa;
}

.wua-question p {
    font-size: 12px;
    line-height: 18px;
    overflow-wrap: anywhere;
}

.wua .wua-answer {
    padding: 0 0 4px;
    font-size: 12px;
    line-height: 18px;
    color: #53565c;
}

.wua-result-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin: 4px 0 8px;
}

.wua-ready {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 10px;
    color: #737373;
}

.wua-result-bar button {
    font-size: 11px;
    min-height: 24px;
    padding: 3px 5px;
    border-radius: 3px;
    color: #050b14;
}

.wua-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 10px;
    align-items: stretch;
}

.wua-card {
    border: 1px solid #ebebeb;
    border-radius: 4px;
    overflow: hidden;
    min-width: 0;
    background: #fff;
    box-shadow: 0 2px 6px #00000004;
}

.wua-card-head {
    height: 34px;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 10px;
    background: #fafafa;
    border-bottom: 1px solid #ebebeb;
    white-space: nowrap;
}

.wua-card-head > strong {
    font-size: 12px;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
}

.wua-tag {
    margin-left: auto;
    padding: 2px 6px;
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 20px;
    font-size: 9px;
    line-height: 14px;
    color: #5e6268;
    white-space: nowrap;
}

.wua-data-body {
    padding: 12px;
}

.wua-context {
    font-size: 11px;
    color: #737373;
    margin-bottom: 10px;
}

.wua table {
    width: 100%;
    border-collapse: collapse;
    table-layout: auto;
    font-size: 11px;
    font-variant-numeric: tabular-nums;
}

.wua th,
.wua td {
    text-align: left;
    padding: 4px 5px;
    border-bottom: 1px solid #ebebeb;
    line-height: 15px;
}

.wua th {
    font-size: 10px;
    font-weight: 400;
    color: #737373;
    background: #fafafa;
}

.wua th:last-child,
.wua td:last-child {
    text-align: right;
    white-space: nowrap;
}

.wua tr:last-child td {
    border-bottom: 0;
}

.wua-analysis-body {
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.wua-metric {
    display: flex;
    gap: 6px;
    align-items: baseline;
}

.wua-metric strong {
    font-size: 25px;
    line-height: 27px;
    font-weight: 500;
    font-variant-numeric: tabular-nums;
}

.wua-metric span {
    color: #737373;
    font-size: 11px;
}

.wua-metric-label {
    font-size: 10px;
    color: #737373;
}

.wua-compact-calc {
    margin: 4px 0;
    padding: 6px 8px;
    background: #fafafa;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 10px;
    line-height: 15px;
    font-variant-numeric: tabular-nums;
}

.wua-compact-calc > div {
    display: flex;
    align-items: baseline;
    gap: 6px;
}

.wua-compact-calc > div > span:first-child {
    flex: 0 0 43px;
    color: #737373;
}

.wua-compact-calc > div > span:nth-child(2) {
    flex: 1;
    color: #62666b;
}

.wua-compact-calc strong {
    font-size: 11px;
    font-weight: 600;
    white-space: nowrap;
    color: #050b14;
}

.wua-explanation {
    font-size: 11px;
    line-height: 17px;
    color: #62666b;
}

.wua .wua-action,
.wua .wua-draft-done {
    display: flex;
    align-items: center;
    align-self: flex-start;
    justify-content: flex-start;
    width: fit-content;
    min-width: 0;
    gap: 8px;
    border-radius: 4px;
    min-height: 28px;
    padding: 5px 10px;
    font-size: 11px;
    font-weight: 500;
    margin-top: 3px;
    text-align: left;
}

.wua .wua-action {
    background: var(--wua-accent);
    color: #050b14;
}

.wua .wua-action:hover {
    filter: brightness(.96);
}

.wua .wua-draft-done {
    background: #fafafa;
    border: 1px solid #dcdcdc;
}

.wua-progress {
    height: 5px;
    background: #ececec;
    border-radius: 3px;
    overflow: hidden;
    margin: 6px 0;
}

.wua-progress span {
    display: block;
    height: 100%;
    background: var(--wua-accent);
}

.wua .wua-source-toggle {
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
    text-align: left;
    font-size: 10px;
    color: #737373;
    padding: 10px 0;
    border-radius: 3px;
}

.wua-source {
    padding: 8px;
    border: 1px solid #ebebeb;
    background: #fafafa;
    border-radius: 4px;
}

.wua-source-heading {
    display: flex;
    align-items: flex-start;
    gap: 8px;
}

.wua-source .wua-source-heading code {
    font-family: inherit;
    font-size: 12px;
    line-height: 18px;
    font-weight: 600;
    color: #050b14;
    overflow-wrap: anywhere;
}

.wua-uns-label {
    flex-shrink: 0;
    font-size: 9px;
    font-weight: 600;
    line-height: 16px;
    padding: 0 5px;
    border: 1px solid #dedede;
    border-radius: 3px;
    color: #050b14;
    background: #fff;
}

.wua-source p {
    font-size: 10px;
    line-height: 15px;
    white-space: pre-line;
    margin-top: 6px;
    color: #737373;
}

.wua-footer {
    flex-shrink: 0;
    padding: 9px 14px;
    border-top: 1px solid #ebebeb;
    background: #fff;
}

.wua-prompts {
    display: flex;
    gap: 5px;
    overflow: auto;
    padding: 0 0 5px;
    scrollbar-width: none;
}

.wua-prompts button {
    flex-shrink: 0;
    padding: 4px 8px;
    min-height: 27px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    font-size: 10px;
    background: #fff;
    color: #62666b;
}

.wua-prompts button[aria-pressed="true"] {
    border-color: #050b14;
    color: #050b14;
    background: #fafafa;
}

.wua-composer {
    border: 1px solid #dedede;
    border-radius: 7px;
    background: #fafafa;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 6px 5px 10px;
    transition: border-color .15s ease, box-shadow .15s ease;
}

.wua .wua-composer:focus-within {
    border-color: var(--wua-accent);
    background: #fff;
    box-shadow: 0 0 0 3px rgba(178, 237, 29, .15);
    box-shadow: 0 0 0 3px
        color-mix(in srgb, var(--wua-accent) 15%, transparent);
}

.wua-composer textarea {
    width: 100%;
    min-width: 0;
    height: 26px;
    max-height: 50px;
    padding: 4px 0;
    line-height: 18px;
    font-size: 12px;
    resize: none;
    border: 0;
    outline: 0;
    background: transparent;
}

.wua .wua-composer textarea:focus-visible {
    outline: none;
    box-shadow: none;
}

.wua-composer textarea::placeholder {
    color: #8b8b8b;
}

.wua-composer textarea[aria-invalid="true"] {
    box-shadow: inset 0 -1px #717171;
}

.wua-composer button {
    width: 28px;
    height: 28px;
    flex: 0 0 28px;
    border-radius: 5px;
    background: var(--wua-accent);
    font-size: 20px;
    line-height: 26px;
    padding: 0;
}

.wua-status {
    min-height: 14px;
    font-size: 9px;
    line-height: 14px;
    color: #777;
    margin-top: 4px !important;
}

.wua-status.is-error {
    color: #050b14;
    font-weight: 500;
}

.wua-sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
}

.wua-list-heading,
.wua-saved-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin: 0 0 10px;
}

.wua-list-heading {
    font-size: 12px;
}

.wua-list-heading > span {
    font-size: 10px;
    color: #737373;
}

.wua-saved {
    margin-bottom: 14px;
}

.wua-saved-heading {
    margin-bottom: 6px;
}

.wua-saved-heading button {
    padding: 4px 0;
    font-size: 11px;
    text-align: left;
}

.wua-saved-heading button:last-child {
    color: #737373;
    font-size: 10px;
}

.wua-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 210px;
    text-align: center;
    padding: 24px;
}

.wua-empty > strong {
    font-size: 14px;
}

.wua-empty p {
    font-size: 12px;
    color: #737373;
    max-width: 290px;
}

.wua .wua-empty .wua-action {
    align-self: center;
    justify-content: center;
    min-height: 34px;
}

.wua-drafts {
    border: 1px solid #ebebeb;
    border-radius: 4px;
    background: #fafafa;
    padding: 9px 10px;
    margin-top: 5px;
    font-size: 11px;
}

.wua-drafts > strong {
    font-size: 11px;
}

.wua-drafts > span {
    font-size: 10px;
    color: #737373;
}

.wua-drafts > div {
    display: flex;
    gap: 10px;
    align-items: center;
    padding-top: 7px;
    color: #62666b;
}

.wua-drafts > div > span {
    flex: 1;
}

.wua-drafts button {
    font-size: 10px;
    text-decoration: underline;
    padding: 3px;
}

.wua-standalone {
    border: 0;
    box-shadow: none;
    background: transparent;
    overflow: auto;
}

.wua-standalone > .wua-card {
    height: 100%;
    min-height: 0;
    overflow: auto;
    flex-shrink: 0;
}

.wua-standalone .wua-card-head {
    height: 39px;
}

.wua-standalone .wua-card-head > strong {
    font-size: 13px;
}

.wua-standalone .wua-analysis-body,
.wua-standalone .wua-data-body {
    padding: 12px;
}

.wua-standalone .wua-explanation {
    font-size: 12px;
    line-height: 18px;
}

.wua-standalone th,
.wua-standalone td {
    font-size: 12px;
    padding: 6px;
}

@container (max-width: 540px) {
    .wua-grid {
        grid-template-columns: 1fr;
    }

    .wua-header,
    .wua-scroll,
    .wua-footer {
        padding-inline: 12px;
    }

    .wua-card-head > strong {
        font-size: 13px;
    }

    .wua th,
    .wua td {
        font-size: 12px;
        padding: 6px;
    }

    .wua-explanation {
        font-size: 12px;
        line-height: 18px;
    }

    .wua .wua-action,
    .wua .wua-draft-done {
        min-height: 34px;
    }

    .wua-prompts button {
        min-height: 30px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .wua * {
        scroll-behavior: auto !important;
        transition: none !important;
        animation: none !important;
    }
}
`));
  }))();
}
function Ut(e) {
  if (!e) return null;
  let t = e.toLowerCase().replace(/_/g, `-`);
  return /(^|[-/])(zh|cn)([-/.]|$)|chinese|中文/.test(t)
    ? `zh`
    : /(^|[-/])(ja|jp)([-/.]|$)|japanese|日本/.test(t)
      ? `ja`
      : /(^|[-/])en([-/.]|$)|english/.test(t)
        ? `en`
        : null;
}
function Wt(e) {
  return e ? Ut(e.code) || Ut(e.slug) || Ut(e.id) || Ut(e.name) : null;
}
function Gt() {
  if (typeof document > `u`) return null;
  let e = document.documentElement,
    t =
      Ut(e.lang) ||
      Ut(e.getAttribute(`data-language`)) ||
      Ut(e.getAttribute(`data-locale`)) ||
      Ut(e.getAttribute(`data-framer-locale`));
  if (t) return t;
  let n = (typeof location < `u` ? location.pathname : ``).split(`/`).filter(Boolean)[0],
    r = Ut(n);
  if (r) return r;
  if (typeof location > `u`) return null;
  let i = new URLSearchParams(location.search);
  return Ut(i.get(`locale`) || i.get(`lang`) || i.get(`l`));
}
function Kt() {
  let [e, t] = y(!1);
  return (
    v(() => {
      let e = u.matchMedia(`(prefers-reduced-motion: reduce)`),
        n = () => t(e.matches);
      return (n(), e.addEventListener(`change`, n), () => e.removeEventListener(`change`, n));
    }, []),
    e
  );
}
function qt({
  children: e,
  automatic: t,
  onClose: n,
  returnFocus: r,
  titleId: i,
  descriptionId: a,
}) {
  let o = l(null),
    s = l(t);
  return (
    (s.current = t),
    v(
      () => (
        s.current || o.current?.querySelector(`button`)?.focus({ preventScroll: !0 }),
        () => {
          !s.current && r.current?.isConnected && r.current.focus({ preventScroll: !0 });
        }
      ),
      []
    ),
    /*#__PURE__*/ g(`div`, {
      ref: o,
      role: `dialog`,
      "aria-labelledby": i,
      "aria-describedby": a,
      className: `wh-dialog`,
      tabIndex: -1,
      onKeyDown: (e) => {
        e.key === `Escape` && (e.stopPropagation(), n());
      },
      children: e,
    })
  );
}
function X({ name: e = `box`, size: t = 18 }) {
  let n = {
    box: /*#__PURE__*/ _(m, {
      children: [
        /*#__PURE__*/ g(`path`, { d: `m12 3 9 5-9 5-9-5 9-5Z` }),
        /*#__PURE__*/ g(`path`, { d: `M3 8v9l9 5 9-5V8M12 13v9M7 5.8l9 5` }),
      ],
    }),
    tasks: /*#__PURE__*/ _(m, {
      children: [
        /*#__PURE__*/ g(`rect`, { x: `5`, y: `4`, width: `14`, height: `17`, rx: `2` }),
        /*#__PURE__*/ g(`path`, { d: `M9 3h6v4H9zM8 12h1m3 0h4m-8 5h1m3 0h4` }),
      ],
    }),
    chart: /*#__PURE__*/ g(m, {
      children: /*#__PURE__*/ g(`path`, { d: `M4 3v17h17M8 15v-4m5 4V6m5 9V9` }),
    }),
    database: /*#__PURE__*/ _(m, {
      children: [
        /*#__PURE__*/ g(`ellipse`, { cx: `12`, cy: `5`, rx: `8`, ry: `3` }),
        /*#__PURE__*/ g(`path`, { d: `M4 5v7c0 4 16 4 16 0V5M4 12v7c0 4 16 4 16 0v-7` }),
      ],
    }),
    grid: /*#__PURE__*/ _(m, {
      children: [
        /*#__PURE__*/ g(`rect`, { x: `3`, y: `3`, width: `7`, height: `7`, rx: `1` }),
        /*#__PURE__*/ g(`rect`, { x: `14`, y: `3`, width: `7`, height: `7`, rx: `1` }),
        /*#__PURE__*/ g(`rect`, { x: `3`, y: `14`, width: `7`, height: `7`, rx: `1` }),
        /*#__PURE__*/ g(`rect`, { x: `14`, y: `14`, width: `7`, height: `7`, rx: `1` }),
      ],
    }),
    arrow: /*#__PURE__*/ g(`path`, { d: `M12 3v15m-6-6 6 6 6-6M4 21h16` }),
    truck: /*#__PURE__*/ _(m, {
      children: [
        /*#__PURE__*/ g(`path`, { d: `M3 6h11v12H3zM14 10h4l3 4v4h-7` }),
        /*#__PURE__*/ g(`circle`, { cx: `7`, cy: `18`, r: `2` }),
        /*#__PURE__*/ g(`circle`, { cx: `17`, cy: `18`, r: `2` }),
      ],
    }),
    pin: /*#__PURE__*/ _(m, {
      children: [
        /*#__PURE__*/ g(`path`, { d: `M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z` }),
        /*#__PURE__*/ g(`circle`, { cx: `12`, cy: `10`, r: `2` }),
      ],
    }),
    plus: /*#__PURE__*/ g(`path`, { d: `M12 5v14M5 12h14` }),
    search: /*#__PURE__*/ _(m, {
      children: [
        /*#__PURE__*/ g(`circle`, { cx: `10.5`, cy: `10.5`, r: `6.5` }),
        /*#__PURE__*/ g(`path`, { d: `m16 16 5 5` }),
      ],
    }),
    close: /*#__PURE__*/ g(`path`, { d: `m6 6 12 12M6 18 18 6` }),
    check: /*#__PURE__*/ g(`path`, { d: `m5 12 4 4L19 6` }),
    chevron: /*#__PURE__*/ g(`path`, { d: `m9 5 7 7-7 7` }),
    user: /*#__PURE__*/ _(m, {
      children: [
        /*#__PURE__*/ g(`circle`, { cx: `12`, cy: `7`, r: `4` }),
        /*#__PURE__*/ g(`path`, { d: `M4 21v-3c0-7 16-7 16 0v3` }),
      ],
    }),
    clock: /*#__PURE__*/ _(m, {
      children: [
        /*#__PURE__*/ g(`circle`, { cx: `12`, cy: `12`, r: `9` }),
        /*#__PURE__*/ g(`path`, { d: `M12 6v6l4 2` }),
      ],
    }),
    globe: /*#__PURE__*/ _(m, {
      children: [
        /*#__PURE__*/ g(`circle`, { cx: `12`, cy: `12`, r: `9` }),
        /*#__PURE__*/ g(`ellipse`, { cx: `12`, cy: `12`, rx: `4`, ry: `9` }),
        /*#__PURE__*/ g(`path`, { d: `M3 12h18` }),
      ],
    }),
    sidebar: /*#__PURE__*/ _(m, {
      children: [
        /*#__PURE__*/ g(`rect`, { x: `3`, y: `3`, width: `18`, height: `18`, rx: `3` }),
        /*#__PURE__*/ g(`path`, { d: `M9 3v18` }),
      ],
    }),
    spark: /*#__PURE__*/ g(`path`, { d: `m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z` }),
    pause: /*#__PURE__*/ g(`path`, { d: `M8 5v14M16 5v14` }),
    play: /*#__PURE__*/ g(`path`, { d: `m7 4 13 8-13 8V4Z` }),
    target: /*#__PURE__*/ _(m, {
      children: [
        /*#__PURE__*/ g(`circle`, { cx: `12`, cy: `12`, r: `9` }),
        /*#__PURE__*/ g(`circle`, { cx: `12`, cy: `12`, r: `5` }),
        /*#__PURE__*/ g(`circle`, { cx: `12`, cy: `12`, r: `1` }),
      ],
    }),
  };
  return /*#__PURE__*/ g(`svg`, {
    width: t,
    height: t,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `1.7`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    "aria-hidden": `true`,
    children: n[e] || n.box,
  });
}
function Z({ value: e }) {
  let t = tn();
  return /*#__PURE__*/ _(`span`, {
    className: nn(`wh-badge`, `wh-${e}`),
    children: [/*#__PURE__*/ g(`i`, {}), t(e)],
  });
}
function Jt({ reset: e }) {
  let t = tn();
  return /*#__PURE__*/ _(`div`, {
    className: `wh-empty`,
    children: [
      /*#__PURE__*/ g(X, { name: `search`, size: 28 }),
      /*#__PURE__*/ g(`strong`, { children: t(`noResults`) }),
      /*#__PURE__*/ g(`button`, { "data-hit": !0, onClick: e, children: t(`reset`) }),
    ],
  });
}
function Yt({ period: e, one: t }) {
  let n = tn(),
    r = t === void 0 ? [0, 1, 2] : [Math.min(t, 2)];
  return /*#__PURE__*/ _(`svg`, {
    role: `img`,
    "aria-label": n(`trend`),
    viewBox: `0 0 600 220`,
    className: `wh-line`,
    children: [
      /*#__PURE__*/ _(`g`, {
        fontSize: `10`,
        fill: `#92979f`,
        children: [
          [85, 90, 95, 100].map((e, t) =>
            /*#__PURE__*/ _(
              `g`,
              {
                children: [
                  /*#__PURE__*/ g(`line`, {
                    x1: `35`,
                    x2: `580`,
                    y1: 180 - t * 50,
                    y2: 180 - t * 50,
                    stroke: `#e8eaed`,
                    strokeDasharray: `3 4`,
                  }),
                  /*#__PURE__*/ g(`text`, { x: `8`, y: 184 - t * 50, children: e }),
                ],
              },
              e
            )
          ),
          Array.from({ length: 7 }, (t, n) =>
            /*#__PURE__*/ g(
              `text`,
              {
                x: 35 + n * 90,
                y: `208`,
                textAnchor: `middle`,
                children: e ? `09/${13 + n * 4}` : `10/${String(6 + n).padStart(2, `0`)}`,
              },
              n
            )
          ),
        ],
      }),
      r.map((t) =>
        /*#__PURE__*/ _(
          `g`,
          {
            children: [
              /*#__PURE__*/ g(`polyline`, {
                fill: `none`,
                stroke: gn[t],
                strokeWidth: `2.5`,
                points: hn[t]
                  .map(
                    (n, r) => `${35 + r * 90},${180 - (n - (e ? [0.4, 1.4, 1.3][t] : 0) - 85) * 10}`
                  )
                  .join(` `),
              }),
              hn[t].map((n, r) =>
                /*#__PURE__*/ g(
                  `circle`,
                  {
                    cx: 35 + r * 90,
                    cy: 180 - (n - (e ? [0.4, 1.4, 1.3][t] : 0) - 85) * 10,
                    r: `3.5`,
                    fill: gn[t],
                  },
                  r
                )
              ),
            ],
          },
          t
        )
      ),
    ],
  });
}
function Xt() {
  let e = tn(),
    t = (e) =>
      Array.from(
        { length: 5 },
        (t, n) =>
          `${130 + Math.sin((n * Math.PI * 2) / 5) * e},${105 - Math.cos((n * Math.PI * 2) / 5) * e}`
      ).join(` `);
  return /*#__PURE__*/ _(`svg`, {
    role: `img`,
    "aria-label": e(`overview`),
    viewBox: `0 0 260 220`,
    className: `wh-radar`,
    children: [
      [22, 44, 66, 88].map((e) =>
        /*#__PURE__*/ g(`polygon`, { points: t(e), fill: `none`, stroke: `#e7e9ec` }, e)
      ),
      Array.from({ length: 5 }, (e, t) =>
        /*#__PURE__*/ g(
          `line`,
          {
            x1: `130`,
            y1: `105`,
            x2: 130 + Math.sin((t * Math.PI * 2) / 5) * 88,
            y2: 105 - Math.cos((t * Math.PI * 2) / 5) * 88,
            stroke: `#e7e9ec`,
          },
          t
        )
      ),
      /*#__PURE__*/ g(`polygon`, {
        points: `130,20 210,79 177,171 80,174 90,92`,
        fill: `#B2ED1D`,
        fillOpacity: `.24`,
        stroke: `#a6df12`,
        strokeWidth: `2`,
      }),
      [`inventory`, `fulfillment`, `ontime`, `picks`, `crossdock`].map((t, n) =>
        /*#__PURE__*/ g(
          `text`,
          {
            x: 130 + Math.sin((n * Math.PI * 2) / 5) * 101,
            y: 109 - Math.cos((n * Math.PI * 2) / 5) * 101,
            textAnchor: `middle`,
            fontSize: `8`,
            fill: `#797f89`,
            children: e(t),
          },
          t
        )
      ),
    ],
  });
}
function Zt({
  language: e = `auto`,
  autoplay: t = !0,
  initialPage: n = `containers`,
  style: i,
  borderRadius: a = 12,
}) {
  let o = G(),
    [s, c] = y(null);
  v(() => {
    let e = () => c(Gt());
    e();
    let t = new MutationObserver(e);
    (t.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: [`lang`, `data-language`, `data-locale`, `data-framer-locale`],
    }),
      u.addEventListener(`popstate`, e),
      u.addEventListener(`languagechange`, e));
    let n = u.setInterval(e, 800);
    return () => {
      (t.disconnect(),
        u.removeEventListener(`popstate`, e),
        u.removeEventListener(`languagechange`, e),
        u.clearInterval(n));
    };
  }, []);
  let l = Wt(o?.activeLocale),
    d = r === void 0 ? null : Ut(r.language),
    f = [s, l].find((e) => e && e !== `en`),
    p = e === `auto` ? f || s || l || d || `en` : e;
  return /*#__PURE__*/ g(en.Provider, {
    value: p,
    children: /*#__PURE__*/ g(Qt, { autoplay: t, initialPage: n, style: i, borderRadius: a }),
  });
}
function Qt({ autoplay: e, initialPage: n, style: r, borderRadius: i }) {
  let a = tn(),
    o = s(en),
    c = Kt(),
    u = l(null),
    d = l(null),
    [f, p] = y(n),
    [h, b] = y(`types`),
    [x, S] = y(`locations`),
    [ee, C] = y(on),
    [w, te] = y(un),
    [T, E] = y(fn),
    [D, O] = y(``),
    [k, A] = y(`all`),
    [j, M] = y(`all`),
    [N, P] = y(`all`),
    [F, I] = y(!1),
    [L, R] = y(null),
    [z, B] = y({ code: ``, name: ``, category: `pallet` }),
    [V, ne] = y(!1),
    [re, ie] = y([!1, !1, !1]),
    ae = t(),
    oe = t(),
    se = t(),
    ce = l({}),
    [H, U] = y(!1),
    [le, W] = y(!1),
    [G, ue] = y(null),
    [de, fe] = y(!1),
    [pe, me] = y(e),
    [he, ge] = y(!0),
    [_e, ve] = y(!1),
    [ye, be] = y({ x: 260, y: 220, show: !1, click: !1 }),
    [xe, Se] = y(0),
    Ce = l(!1),
    we = l(),
    Te = l(),
    K = l(),
    Ee = l(!1),
    De = l(),
    Oe = l(null),
    ke = pe && !de && !_e && he && !c,
    Ae = l(ke);
  Ae.current = ke;
  let je = (e) => {
      (p(e), R(null), O(``), A(`all`), d.current && (d.current.scrollTop = 0));
    },
    Me = (e) => {
      (ue(e), clearTimeout(K.current), (K.current = setTimeout(() => ue(null), 2500)));
    },
    Ne = (e) => {
      ((Oe.current = document.activeElement instanceof HTMLElement ? document.activeElement : null),
        ie([!1, !1, !1]),
        ne(!1),
        R(e));
    },
    Pe = (e) => {
      (B(
        Ce.current
          ? {
              code: e === `types` ? `MAT-PLT-2026` : `LOC-A-2026`,
              name: a(e === `types` ? `woodPallet` : `zoneA`),
              category: e === `types` ? `pallet` : `bulk`,
            }
          : ce.current[e] || { code: ``, name: ``, category: e === `types` ? `pallet` : `bulk` }
      ),
        Ne({ kind: `create`, scope: e }));
    },
    Fe = (e) => (e.custom ? e.name : a(e.name)),
    Ie = () => {
      (O(``), A(`all`), M(`all`), P(`all`));
    },
    Le = () => {
      (clearTimeout(we.current), fe(!0), be((e) => ({ ...e, show: !1, click: !1 })));
    },
    Re = () => {
      (clearTimeout(we.current),
        (we.current = setTimeout(() => {
          (fe(!1), ve(!1));
        }, 4e3)));
    };
  (v(() => me(e), [e]),
    v(() => {
      L?.kind === `create` && !ke && (ce.current[L.scope] = z);
    }, [z, L, ke]),
    v(() => {
      let e = u.current;
      if (!e) return;
      let t = !0,
        n = () => ge(t && !document.hidden),
        r = new IntersectionObserver(
          ([e]) => {
            ((t = e.isIntersecting), n());
          },
          { threshold: 0.05 }
        );
      (r.observe(e), document.addEventListener(`visibilitychange`, n));
      let i = (t) => {
        e.contains(t.target) || Re();
      };
      return (
        document.addEventListener(`pointerdown`, i),
        () => {
          (r.disconnect(),
            document.removeEventListener(`visibilitychange`, n),
            document.removeEventListener(`pointerdown`, i),
            clearTimeout(we.current),
            clearTimeout(Te.current),
            clearTimeout(K.current),
            De.current && cancelAnimationFrame(De.current));
        }
      );
    }, []));
  let ze =
    /* @__PURE__ */ `nav-containers.tab-containers.container-first.close.nav-tasks.task-first.close.filter-pick.filter-all.nav-kpi.period-month.metric-first.close.nav-master.master-products.master-locations.master-first.close.new-master.close.nav-containers.tab-transactions.tab-lending.tab-types.new-type.close`.split(
      `.`
    );
  v(() => {
    if (!ke) {
      be((e) => ({ ...e, show: !1, click: !1 }));
      return;
    }
    let e = ze[xe % ze.length],
      t = !1,
      n = [],
      r = (e, r) =>
        n.push(
          setTimeout(() => {
            !t && Ae.current && e();
          }, r)
        );
    return (
      r(() => {
        let t = Array.from(u.current?.querySelectorAll(`[data-demo="${e}"]`) || []).find(
          (e) => e.getClientRects().length > 0
        );
        if (!t) {
          Se((e) => e + 1);
          return;
        }
        let n = d.current;
        if (n && n.contains(t)) {
          let e = t.getBoundingClientRect(),
            r = n.getBoundingClientRect();
          (e.bottom > r.bottom || e.top < r.top) && (n.scrollTop += e.top - r.top - 24);
        }
        let i = u.current.getBoundingClientRect(),
          a = t.getBoundingClientRect();
        (be({
          x: (a.left + a.width * 0.55 - i.left) * (u.current.offsetWidth / i.width),
          y: (a.top + a.height * 0.55 - i.top) * (u.current.offsetHeight / i.height),
          show: !0,
          click: !1,
        }),
          r(() => {
            (be((e) => ({ ...e, click: !0 })), (Ce.current = !0), t.click(), (Ce.current = !1));
          }, 200),
          r(() => be((e) => ({ ...e, click: !1 })), 340),
          r(() => Se((e) => e + 1), e.includes(`first`) || e.startsWith(`new`) ? 1300 : 900));
      }, 80),
      () => {
        ((t = !0), n.forEach(clearTimeout));
      }
    );
  }, [ke, xe]);
  let Be = l(!1);
  v(() => {
    (ke && !Be.current && (R(null), Se(0)), (Be.current = ke));
  }, [ke]);
  let Ve = (e) => {
      Ce.current ||
        e.target.closest(`[data-hit]`) ||
        (W(!0), clearTimeout(Te.current), (Te.current = setTimeout(() => W(!1), 1900)));
    },
    He = (e) =>
      new Intl.NumberFormat(o === `ja` ? `ja-JP` : o === `zh` ? `zh-CN` : `en-US`, {
        style: `currency`,
        currency: `CNY`,
        maximumFractionDigits: 0,
      }).format(e),
    q = (e) =>
      e.filter(
        (e) =>
          (k === `all` || e.category === k || e.zone === k) &&
          `${e.id} ${Fe(e)} ${e.location || ``}`.toLowerCase().includes(D.toLowerCase())
      ),
    Ue = h === `types` ? ee : h === `containers` ? sn : h === `transactions` ? cn : ln,
    We = w.filter((e) => (j === `all` || e.type === j) && (N === `all` || e.status === N)),
    J = L?.kind === `task` ? w.find((e) => e.id === L.id) : null,
    Ge = (e) => {
      if ((e.preventDefault(), L?.kind !== `create`)) return;
      let t = L.scope === `types` ? ee : T[L.scope];
      if (
        !z.code.trim() ||
        !z.name.trim() ||
        t.some((e) => e.id.toLowerCase() === z.code.trim().toLowerCase())
      ) {
        ne(!0);
        return;
      }
      let n = {
        id: z.code.trim(),
        name: z.name.trim(),
        custom: !0,
        category: z.category,
        status: `active`,
        dimensions: `1200 × 1000 × 150`,
        load: 1e3,
        material: `wood`,
        cost: 120,
        capacity: `0 / 200`,
        zone: `STR-A`,
      };
      if (L.scope === `types`) C((e) => [n, ...e]);
      else {
        let e = L.scope;
        E((t) => ({ ...t, [e]: [n, ...t[e]] }));
      }
      (delete ce.current[L.scope], R(null), Ie(), Me(`saved`));
    },
    Ke = [
      { key: `dashboard`, icon: `grid` },
      { key: `inbound`, icon: `arrow` },
      { key: `inventory`, icon: `box` },
      { key: `count`, icon: `tasks` },
      { key: `containers`, page: `containers`, icon: `box` },
      { key: `outbound`, icon: `truck` },
      { key: `tasks`, page: `tasks`, icon: `tasks` },
      { key: `packing`, icon: `box` },
      { key: `kpi`, page: `kpi`, icon: `chart` },
      { key: `reports`, icon: `chart` },
      { key: `master`, page: `master`, icon: `database` },
    ],
    qe = /*#__PURE__*/ _(`label`, {
      className: `wh-search`,
      "data-hit": !0,
      children: [
        /*#__PURE__*/ g(X, { name: `search`, size: 15 }),
        /*#__PURE__*/ g(`input`, {
          "aria-label": a(`search`),
          value: D,
          onChange: (e) => O(e.target.value),
          placeholder: a(`search`),
        }),
        D &&
          /*#__PURE__*/ g(`button`, {
            "data-hit": !0,
            "aria-label": a(`reset`),
            onClick: () => O(``),
            children: /*#__PURE__*/ g(X, { name: `close`, size: 14 }),
          }),
      ],
    }),
    Je = (e, t) => {
      let n =
        t === `types`
          ? [`code`, `name`, `category`, `dimensions`, `load`, `cost`, `status`]
          : t === `containers`
            ? [`code`, `category`, `location`, `status`, `updated`]
            : t === `transactions`
              ? [`code`, `name`, `movement`, `route`, `operator`, `date`]
              : t === `lending`
                ? [`code`, `name`, `partner`, `status`, `due`]
                : t === `locations`
                  ? [`code`, `zone`, `type`, `capacity`, `status`]
                  : [
                      `code`,
                      `name`,
                      ...(t === `products`
                        ? [`quantity`]
                        : t === `warehouses` || t === `zones`
                          ? [`capacity`]
                          : []),
                      `status`,
                    ];
      return e.length
        ? /*#__PURE__*/ g(`div`, {
            className: `wh-table-wrap`,
            children: /*#__PURE__*/ _(`table`, {
              children: [
                /*#__PURE__*/ g(`thead`, {
                  children: /*#__PURE__*/ _(`tr`, {
                    children: [
                      n.map((e) => /*#__PURE__*/ g(`th`, { children: a(e) }, e)),
                      /*#__PURE__*/ g(`th`, {
                        children: /*#__PURE__*/ g(`span`, {
                          className: `wh-sr`,
                          children: a(`view`),
                        }),
                      }),
                    ],
                  }),
                }),
                /*#__PURE__*/ g(`tbody`, {
                  children: e.map((e, n) =>
                    /*#__PURE__*/ _(
                      `tr`,
                      {
                        children: [
                          /*#__PURE__*/ g(`td`, {
                            children: /*#__PURE__*/ g(`button`, {
                              className: `wh-record`,
                              "data-hit": !0,
                              "data-demo":
                                n === 0
                                  ? f === `master`
                                    ? `master-first`
                                    : `container-first`
                                  : void 0,
                              onClick: () => Ne({ kind: `row`, row: e }),
                              children: e.id,
                            }),
                          }),
                          t === `types`
                            ? /*#__PURE__*/ _(m, {
                                children: [
                                  /*#__PURE__*/ g(`td`, { children: Fe(e) }),
                                  /*#__PURE__*/ g(`td`, {
                                    children: /*#__PURE__*/ g(Z, { value: e.category }),
                                  }),
                                  /*#__PURE__*/ g(`td`, {
                                    className: `wh-muted wh-mono`,
                                    children: e.dimensions,
                                  }),
                                  /*#__PURE__*/ g(`td`, { children: e.load }),
                                  /*#__PURE__*/ g(`td`, { children: He(e.cost) }),
                                  /*#__PURE__*/ g(`td`, {
                                    children: /*#__PURE__*/ g(Z, { value: e.status }),
                                  }),
                                ],
                              })
                            : t === `containers`
                              ? /*#__PURE__*/ _(m, {
                                  children: [
                                    /*#__PURE__*/ g(`td`, {
                                      children: /*#__PURE__*/ g(Z, { value: e.category }),
                                    }),
                                    /*#__PURE__*/ g(`td`, {
                                      className: `wh-mono`,
                                      children: e.location,
                                    }),
                                    /*#__PURE__*/ g(`td`, {
                                      children: /*#__PURE__*/ g(Z, { value: e.status }),
                                    }),
                                    /*#__PURE__*/ g(`td`, {
                                      className: `wh-muted`,
                                      children: e.date,
                                    }),
                                  ],
                                })
                              : t === `transactions`
                                ? /*#__PURE__*/ _(m, {
                                    children: [
                                      /*#__PURE__*/ g(`td`, {
                                        className: `wh-mono`,
                                        children: Fe(e),
                                      }),
                                      /*#__PURE__*/ g(`td`, {
                                        children: /*#__PURE__*/ g(Z, { value: e.status }),
                                      }),
                                      /*#__PURE__*/ g(`td`, {
                                        className: `wh-mono`,
                                        children: e.location,
                                      }),
                                      /*#__PURE__*/ g(`td`, { children: an(e.operator, o) }),
                                      /*#__PURE__*/ g(`td`, { children: e.date }),
                                    ],
                                  })
                                : t === `lending`
                                  ? /*#__PURE__*/ _(m, {
                                      children: [
                                        /*#__PURE__*/ g(`td`, { children: Fe(e) }),
                                        /*#__PURE__*/ g(`td`, { children: a(e.partner) }),
                                        /*#__PURE__*/ g(`td`, {
                                          children: /*#__PURE__*/ g(Z, { value: e.status }),
                                        }),
                                        /*#__PURE__*/ g(`td`, { children: e.date }),
                                      ],
                                    })
                                  : t === `locations`
                                    ? /*#__PURE__*/ _(m, {
                                        children: [
                                          /*#__PURE__*/ g(`td`, { children: e.zone }),
                                          /*#__PURE__*/ g(`td`, {
                                            children: /*#__PURE__*/ g(Z, { value: e.category }),
                                          }),
                                          /*#__PURE__*/ _(`td`, {
                                            children: [
                                              /*#__PURE__*/ g(`span`, { children: e.capacity }),
                                              /*#__PURE__*/ g(`div`, {
                                                className: `wh-capacity`,
                                                children: /*#__PURE__*/ g(`i`, {
                                                  style: {
                                                    width: `${Math.min(100, (Number(e.capacity?.split(`/`)[0]) / Number(e.capacity?.split(`/`)[1])) * 100)}%`,
                                                  },
                                                }),
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ g(`td`, {
                                            children: /*#__PURE__*/ g(Z, { value: e.status }),
                                          }),
                                        ],
                                      })
                                    : /*#__PURE__*/ _(m, {
                                        children: [
                                          /*#__PURE__*/ g(`td`, { children: Fe(e) }),
                                          [`products`, `warehouses`, `zones`].includes(t) &&
                                            /*#__PURE__*/ g(`td`, { children: e.capacity }),
                                          /*#__PURE__*/ g(`td`, {
                                            children: /*#__PURE__*/ g(Z, { value: e.status }),
                                          }),
                                        ],
                                      }),
                          /*#__PURE__*/ g(`td`, {
                            children: /*#__PURE__*/ g(`button`, {
                              className: `wh-icon`,
                              "aria-label": `${a(`view`)} ${e.id}`,
                              "data-hit": !0,
                              onClick: () => Ne({ kind: `row`, row: e }),
                              children: /*#__PURE__*/ g(X, { name: `chevron`, size: 14 }),
                            }),
                          }),
                        ],
                      },
                      e.id
                    )
                  ),
                }),
              ],
            }),
          })
        : /*#__PURE__*/ g(Jt, { reset: Ie });
    };
  return /*#__PURE__*/ _(`div`, {
    ref: u,
    className: nn(`wh-root`, H && `wh-collapsed`, le && `wh-hints`, de && `wh-manual`),
    style: { ...r, borderRadius: i, "--wh-accent": `#B2ED1D` },
    lang: o === `zh` ? `zh-CN` : o,
    onClick: Ve,
    onPointerEnter: (e) => {
      e.pointerType === `mouse` && ((Ee.current = !0), Le());
    },
    onPointerMove: (e) => {
      if (e.pointerType !== `mouse` || Ee.current) return;
      let t = e.currentTarget.getBoundingClientRect(),
        n = ((e.clientX - t.left) * e.currentTarget.offsetWidth) / t.width,
        r = ((e.clientY - t.top) * e.currentTarget.offsetHeight) / t.height;
      (De.current && cancelAnimationFrame(De.current),
        (De.current = requestAnimationFrame(() =>
          be({ x: n + 9, y: r + 12, show: !0, click: !1 })
        )));
    },
    onPointerLeave: () => {
      ((Ee.current = !1), be((e) => ({ ...e, show: !1 })), Re());
    },
    onPointerDown: (e) => {
      Ce.current || (Le(), e.pointerType !== `mouse` && be((e) => ({ ...e, show: !1 })));
    },
    onKeyDown: (e) => {
      e.key === `Tab` && (ve(!0), be((e) => ({ ...e, show: !1 })));
    },
    onBlur: (e) => {
      !e.currentTarget.contains(e.relatedTarget) && !Ee.current && Re();
    },
    children: [
      /*#__PURE__*/ g(`style`, { children: _n }),
      /*#__PURE__*/ _(`div`, {
        className: `wh-shell`,
        children: [
          /*#__PURE__*/ _(`aside`, {
            className: `wh-sidebar`,
            children: [
              /*#__PURE__*/ _(`div`, {
                className: `wh-brand`,
                children: [
                  /*#__PURE__*/ g(`span`, {
                    children: /*#__PURE__*/ g(X, { name: `box`, size: 21 }),
                  }),
                  /*#__PURE__*/ _(`b`, {
                    children: [`Tier0 `, /*#__PURE__*/ g(`em`, { children: `WMS` })],
                  }),
                  /*#__PURE__*/ g(`button`, {
                    className: `wh-icon wh-collapse`,
                    "data-hit": !0,
                    "aria-label": a(H ? `expand` : `collapse`),
                    onClick: () => U((e) => !e),
                    children: /*#__PURE__*/ g(X, { name: `sidebar`, size: 16 }),
                  }),
                ],
              }),
              /*#__PURE__*/ g(`div`, { className: `wh-nav-label`, children: a(`workspace`) }),
              /*#__PURE__*/ g(`nav`, {
                "aria-label": a(`workspace`),
                children: Ke.map((e) =>
                  /*#__PURE__*/ _(
                    `button`,
                    {
                      "data-hit": e.page ? !0 : void 0,
                      "data-demo": e.page ? `nav-${e.page}` : void 0,
                      "aria-disabled": !e.page,
                      "aria-current": f === e.page ? `page` : void 0,
                      className: nn(
                        `wh-nav`,
                        f === e.page && `wh-selected`,
                        !e.page && `wh-preview-only`
                      ),
                      onClick: () => e.page && je(e.page),
                      title: a(e.key),
                      children: [
                        /*#__PURE__*/ g(X, { name: e.icon, size: 18 }),
                        /*#__PURE__*/ g(`span`, { children: a(e.key) }),
                        f === e.page && /*#__PURE__*/ g(`i`, {}),
                      ],
                    },
                    e.key
                  )
                ),
              }),
              /*#__PURE__*/ _(`div`, {
                className: `wh-sidebar-foot`,
                children: [
                  /*#__PURE__*/ g(`span`, { className: `wh-avatar`, children: `W` }),
                  /*#__PURE__*/ _(`div`, {
                    children: [
                      /*#__PURE__*/ g(`strong`, { children: a(`warehouseA`) }),
                      /*#__PURE__*/ g(`small`, { children: `WH-001` }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          /*#__PURE__*/ _(`div`, {
            className: `wh-workspace`,
            children: [
              /*#__PURE__*/ _(`header`, {
                className: `wh-topbar`,
                children: [
                  /*#__PURE__*/ _(`div`, {
                    children: [
                      /*#__PURE__*/ g(`span`, { children: a(`ops`) }),
                      /*#__PURE__*/ g(`strong`, { children: a(f) }),
                    ],
                  }),
                  /*#__PURE__*/ _(`div`, {
                    className: `wh-top-actions`,
                    children: [
                      /*#__PURE__*/ _(`span`, {
                        className: `wh-online`,
                        children: [/*#__PURE__*/ g(`i`, {}), a(`online`)],
                      }),
                      /*#__PURE__*/ g(`span`, { className: `wh-date`, children: `2026 / 10 / 12` }),
                      /*#__PURE__*/ _(`span`, {
                        className: `wh-locale`,
                        children: [
                          /*#__PURE__*/ g(X, { name: `globe`, size: 14 }),
                          o.toUpperCase(),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              /*#__PURE__*/ g(`div`, {
                className: `wh-mobile-nav`,
                children: Ke.filter((e) => e.page).map((e) =>
                  /*#__PURE__*/ _(
                    `button`,
                    {
                      "data-hit": !0,
                      "data-demo": `nav-${e.page}`,
                      className: f === e.page ? `wh-active` : ``,
                      onClick: () => je(e.page),
                      children: [/*#__PURE__*/ g(X, { name: e.icon, size: 16 }), a(e.key)],
                    },
                    e.key
                  )
                ),
              }),
              /*#__PURE__*/ _(`main`, {
                className: `wh-content`,
                ref: d,
                children: [
                  /*#__PURE__*/ _(`div`, {
                    className: `wh-heading`,
                    children: [
                      /*#__PURE__*/ _(`div`, {
                        children: [
                          /*#__PURE__*/ g(`h2`, { children: a(f) }),
                          /*#__PURE__*/ g(`p`, {
                            children: a(
                              f === `containers`
                                ? `subtitle`
                                : f === `tasks`
                                  ? `taskSub`
                                  : f === `kpi`
                                    ? `kpiSub`
                                    : `masterSub`
                            ),
                          }),
                        ],
                      }),
                      f === `containers` &&
                        /*#__PURE__*/ _(`button`, {
                          className: `wh-primary`,
                          "data-hit": !0,
                          "data-demo": `new-type`,
                          onClick: () => {
                            (b(`types`), Pe(`types`));
                          },
                          children: [/*#__PURE__*/ g(X, { name: `plus`, size: 16 }), a(`newType`)],
                        }),
                      f === `kpi` &&
                        /*#__PURE__*/ g(`div`, {
                          className: `wh-segment`,
                          "aria-label": a(`date`),
                          children: [!1, !0].map((e) =>
                            /*#__PURE__*/ g(
                              `button`,
                              {
                                "data-hit": !0,
                                "data-demo": e ? `period-month` : `period-week`,
                                "aria-pressed": F === e,
                                className: F === e ? `wh-active` : ``,
                                onClick: () => I(e),
                                children: a(e ? `month` : `seven`),
                              },
                              String(e)
                            )
                          ),
                        }),
                    ],
                  }),
                  f === `containers` &&
                    /*#__PURE__*/ _(m, {
                      children: [
                        /*#__PURE__*/ g(`div`, {
                          className: `wh-stats wh-six`,
                          children: [
                            `total`,
                            `available`,
                            `inUse`,
                            `transit`,
                            `maintenance`,
                            `pallet`,
                          ].map((e, t) =>
                            /*#__PURE__*/ _(
                              `div`,
                              {
                                className: `wh-stat`,
                                children: [
                                  /*#__PURE__*/ _(`div`, {
                                    children: [
                                      /*#__PURE__*/ g(`span`, { children: a(e) }),
                                      /*#__PURE__*/ g(X, {
                                        name: [`box`, `check`, `box`, `truck`, `settings`, `box`][
                                          t
                                        ],
                                        size: 17,
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ g(`strong`, { children: [12, 4, 6, 1, 1, 7][t] }),
                                  /*#__PURE__*/ g(`small`, {
                                    children:
                                      t === 5
                                        ? `${a(`tote`)} \xb7 5`
                                        : t === 0
                                          ? `${ee.length} ${a(`types`)}`
                                          : `WH-001`,
                                  }),
                                ],
                              },
                              e
                            )
                          ),
                        }),
                        /*#__PURE__*/ _(`section`, {
                          className: `wh-panel`,
                          children: [
                            /*#__PURE__*/ _(`div`, {
                              className: `wh-toolbar`,
                              children: [
                                /*#__PURE__*/ g(`div`, {
                                  className: `wh-tabs`,
                                  children: [`types`, `containers`, `transactions`, `lending`].map(
                                    (e, t) =>
                                      /*#__PURE__*/ _(
                                        `button`,
                                        {
                                          "data-hit": !0,
                                          "data-demo": `tab-${e}`,
                                          "aria-pressed": h === e,
                                          className: h === e ? `wh-active` : ``,
                                          onClick: () => {
                                            (b(e), Ie());
                                          },
                                          children: [
                                            a(e),
                                            /*#__PURE__*/ g(`span`, {
                                              children: [ee.length, 12, 7, 3][t],
                                            }),
                                          ],
                                        },
                                        e
                                      )
                                  ),
                                }),
                                /*#__PURE__*/ _(`div`, {
                                  className: `wh-filters`,
                                  children: [
                                    (h === `types` || h === `containers`) &&
                                      /*#__PURE__*/ _(`select`, {
                                        "data-hit": !0,
                                        "aria-label": a(`category`),
                                        value: k,
                                        onChange: (e) => A(e.target.value),
                                        children: [
                                          /*#__PURE__*/ _(`option`, {
                                            value: `all`,
                                            children: [a(`all`), ` ·`, ` `, a(`category`)],
                                          }),
                                          /*#__PURE__*/ g(`option`, {
                                            value: `pallet`,
                                            children: a(`pallet`),
                                          }),
                                          /*#__PURE__*/ g(`option`, {
                                            value: `tote`,
                                            children: a(`tote`),
                                          }),
                                        ],
                                      }),
                                    qe,
                                  ],
                                }),
                              ],
                            }),
                            Je(q(Ue), h),
                            /*#__PURE__*/ _(`div`, {
                              className: `wh-panel-foot`,
                              children: [
                                q(Ue).length,
                                ` `,
                                a(`records`),
                                /*#__PURE__*/ g(`span`, { children: a(`demoData`) }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  f === `tasks` &&
                    /*#__PURE__*/ _(m, {
                      children: [
                        /*#__PURE__*/ g(`div`, {
                          className: `wh-stats wh-three`,
                          children: [`pending`, `progress`, `completed`].map((e, t) =>
                            /*#__PURE__*/ _(
                              `button`,
                              {
                                "data-hit": !0,
                                className: `wh-stat wh-stat-button`,
                                onClick: () => P(e),
                                children: [
                                  /*#__PURE__*/ g(`span`, {
                                    className: nn(`wh-stat-icon`, `wh-tone-${t}`),
                                    children: /*#__PURE__*/ g(X, {
                                      name: [`tasks`, `play`, `check`][t],
                                    }),
                                  }),
                                  /*#__PURE__*/ _(`div`, {
                                    children: [
                                      /*#__PURE__*/ g(`strong`, {
                                        children: w.filter((t) => t.status === e).length,
                                      }),
                                      /*#__PURE__*/ g(`span`, { children: a(e) }),
                                    ],
                                  }),
                                  /*#__PURE__*/ g(X, { name: `chevron`, size: 14 }),
                                ],
                              },
                              e
                            )
                          ),
                        }),
                        /*#__PURE__*/ _(`div`, {
                          className: `wh-task-filters`,
                          children: [
                            /*#__PURE__*/ _(`div`, {
                              children: [
                                /*#__PURE__*/ g(`span`, { children: a(`type`) }),
                                [`all`, `pick`, `putaway`, `replenish`].map((e) =>
                                  /*#__PURE__*/ g(
                                    `button`,
                                    {
                                      "data-hit": !0,
                                      "data-demo": `filter-${e}`,
                                      "aria-pressed": j === e,
                                      className: j === e ? `wh-active` : ``,
                                      onClick: () => M(e),
                                      children: a(e),
                                    },
                                    e
                                  )
                                ),
                              ],
                            }),
                            /*#__PURE__*/ _(`div`, {
                              children: [
                                /*#__PURE__*/ g(`span`, { children: a(`status`) }),
                                [`all`, `pending`, `progress`, `completed`].map((e) =>
                                  /*#__PURE__*/ g(
                                    `button`,
                                    {
                                      "data-hit": !0,
                                      "aria-pressed": N === e,
                                      className: N === e ? `wh-active` : ``,
                                      onClick: () => P(e),
                                      children: a(e),
                                    },
                                    e
                                  )
                                ),
                              ],
                            }),
                          ],
                        }),
                        /*#__PURE__*/ g(`div`, {
                          className: `wh-task-grid`,
                          children: We.map((e, t) =>
                            /*#__PURE__*/ _(
                              `article`,
                              {
                                className: `wh-task`,
                                children: [
                                  /*#__PURE__*/ _(`div`, {
                                    className: `wh-task-head`,
                                    children: [
                                      /*#__PURE__*/ g(`strong`, { children: e.id }),
                                      /*#__PURE__*/ g(Z, { value: e.status }),
                                    ],
                                  }),
                                  /*#__PURE__*/ _(`div`, {
                                    className: `wh-task-type`,
                                    children: [
                                      /*#__PURE__*/ g(Z, { value: e.type }),
                                      /*#__PURE__*/ _(`span`, { children: [`P`, e.priority] }),
                                    ],
                                  }),
                                  /*#__PURE__*/ _(`div`, {
                                    className: `wh-task-sku`,
                                    children: [
                                      /*#__PURE__*/ g(X, { name: `box`, size: 15 }),
                                      e.sku,
                                      /*#__PURE__*/ _(`b`, { children: [e.qty, ` `, a(`units`)] }),
                                    ],
                                  }),
                                  /*#__PURE__*/ _(`div`, {
                                    className: `wh-route`,
                                    children: [
                                      /*#__PURE__*/ g(X, { name: `pin`, size: 15 }),
                                      /*#__PURE__*/ _(`span`, {
                                        children: [
                                          e.from,
                                          /*#__PURE__*/ g(`em`, { children: `→` }),
                                          e.to,
                                        ],
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ _(`footer`, {
                                    children: [
                                      /*#__PURE__*/ _(`span`, {
                                        children: [
                                          /*#__PURE__*/ g(X, { name: `user`, size: 14 }),
                                          e.assignee === null ? a(`unassigned`) : an(e.assignee, o),
                                        ],
                                      }),
                                      /*#__PURE__*/ _(`button`, {
                                        "data-hit": !0,
                                        "data-demo": t === 0 ? `task-first` : void 0,
                                        onClick: () => Ne({ kind: `task`, id: e.id }),
                                        children: [
                                          a(`details`),
                                          /*#__PURE__*/ g(X, { name: `chevron`, size: 13 }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.id
                            )
                          ),
                        }),
                        !We.length && /*#__PURE__*/ g(Jt, { reset: Ie }),
                      ],
                    }),
                  f === `kpi` &&
                    /*#__PURE__*/ _(m, {
                      children: [
                        /*#__PURE__*/ g(`div`, {
                          className: `wh-stats wh-four`,
                          children: pn.map((e, t) =>
                            /*#__PURE__*/ _(
                              `button`,
                              {
                                className: `wh-stat wh-kpi`,
                                "data-hit": !0,
                                "data-demo": t === 0 ? `metric-first` : void 0,
                                onClick: () => Ne({ kind: `metric`, index: t }),
                                children: [
                                  /*#__PURE__*/ _(`div`, {
                                    children: [
                                      /*#__PURE__*/ g(`span`, {
                                        className: `wh-stat-icon wh-tone-${t}`,
                                        children: /*#__PURE__*/ g(X, {
                                          name: [`box`, `chart`, `truck`, `target`][t],
                                        }),
                                      }),
                                      /*#__PURE__*/ _(`small`, {
                                        className: `wh-positive`,
                                        children: [`↗ +`, [0.2, 0.4, 1.3, 4][t]],
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ g(`strong`, {
                                    children: F ? [`99.1%`, `94.8%`, `96.5%`, `86`][t] : mn[t],
                                  }),
                                  /*#__PURE__*/ g(`span`, { children: a(e) }),
                                  /*#__PURE__*/ _(`small`, {
                                    children: [
                                      a(`target`),
                                      `:`,
                                      ` `,
                                      [`99%`, `95%`, `98%`, `80`][t],
                                    ],
                                  }),
                                ],
                              },
                              e
                            )
                          ),
                        }),
                        /*#__PURE__*/ _(`div`, {
                          className: `wh-chart-grid`,
                          children: [
                            /*#__PURE__*/ _(`section`, {
                              className: `wh-panel wh-trend`,
                              children: [
                                /*#__PURE__*/ _(`h3`, {
                                  children: [
                                    a(`trend`),
                                    /*#__PURE__*/ g(`span`, { children: a(F ? `month` : `seven`) }),
                                  ],
                                }),
                                /*#__PURE__*/ g(Yt, { period: F }),
                                /*#__PURE__*/ g(`div`, {
                                  className: `wh-legend`,
                                  children: pn
                                    .slice(0, 3)
                                    .map((e, t) =>
                                      /*#__PURE__*/ _(
                                        `span`,
                                        {
                                          children: [
                                            /*#__PURE__*/ g(`i`, { style: { background: gn[t] } }),
                                            a(e),
                                          ],
                                        },
                                        e
                                      )
                                    ),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ _(`section`, {
                              className: `wh-panel`,
                              children: [
                                /*#__PURE__*/ g(`h3`, { children: a(`overview`) }),
                                /*#__PURE__*/ g(Xt, {}),
                              ],
                            }),
                            /*#__PURE__*/ _(`section`, {
                              className: `wh-panel`,
                              children: [
                                /*#__PURE__*/ _(`h3`, {
                                  children: [
                                    a(`cycle`),
                                    /*#__PURE__*/ g(`span`, { children: a(`minutes`) }),
                                  ],
                                }),
                                /*#__PURE__*/ g(`div`, {
                                  className: `wh-cycle`,
                                  children: [`receive`, `putaway`, `pick`].map((e, t) =>
                                    /*#__PURE__*/ _(
                                      `div`,
                                      {
                                        children: [
                                          /*#__PURE__*/ g(`span`, { children: a(e) }),
                                          /*#__PURE__*/ g(`div`, {
                                            children: /*#__PURE__*/ g(`i`, {
                                              style: {
                                                width: `${[78, 58, 38][t]}%`,
                                                background: [`#b2ed1d`, `#3b82f6`, `#252b33`][t],
                                              },
                                            }),
                                          }),
                                          /*#__PURE__*/ g(`b`, {
                                            children: F ? [62, 48, 35][t] : [48, 36, 24][t],
                                          }),
                                        ],
                                      },
                                      e
                                    )
                                  ),
                                }),
                                /*#__PURE__*/ _(`div`, {
                                  className: `wh-insight`,
                                  children: [
                                    /*#__PURE__*/ g(X, { name: `spark`, size: 16 }),
                                    /*#__PURE__*/ g(`span`, { children: a(`insightText`) }),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ _(`section`, {
                              className: `wh-panel`,
                              children: [
                                /*#__PURE__*/ _(`h3`, {
                                  children: [
                                    a(`productivity`),
                                    /*#__PURE__*/ g(`span`, { children: `+15%` }),
                                  ],
                                }),
                                /*#__PURE__*/ g(`div`, {
                                  className: `wh-bars`,
                                  children: [74, 78, 80, 82, 86, 89, 92].map((e, t) =>
                                    /*#__PURE__*/ _(
                                      `div`,
                                      {
                                        children: [
                                          /*#__PURE__*/ g(`b`, { children: F ? e - 6 : e }),
                                          /*#__PURE__*/ g(`i`, {
                                            style: {
                                              height: `${e - 20}px`,
                                              background: t === 6 ? `#b2ed1d` : `#222831`,
                                            },
                                          }),
                                          /*#__PURE__*/ g(`span`, {
                                            children: F ? `09/${13 + t * 4}` : `10/${6 + t}`,
                                          }),
                                        ],
                                      },
                                      t
                                    )
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  f === `master` &&
                    /*#__PURE__*/ _(`div`, {
                      className: `wh-master`,
                      children: [
                        /*#__PURE__*/ _(`section`, {
                          className: `wh-master-nav`,
                          children: [
                            /*#__PURE__*/ g(`h3`, { children: a(`master`) }),
                            dn.map((e, t) =>
                              /*#__PURE__*/ _(
                                `button`,
                                {
                                  "data-hit": !0,
                                  "data-demo": `master-${e}`,
                                  className: x === e ? `wh-active` : ``,
                                  onClick: () => {
                                    (S(e), Ie());
                                  },
                                  children: [
                                    /*#__PURE__*/ g(X, {
                                      name: [`box`, `grid`, `pin`, `box`, `truck`, `user`][t],
                                      size: 17,
                                    }),
                                    /*#__PURE__*/ g(`span`, { children: a(e) }),
                                    /*#__PURE__*/ g(`small`, { children: T[e].length }),
                                  ],
                                },
                                e
                              )
                            ),
                          ],
                        }),
                        /*#__PURE__*/ _(`section`, {
                          className: `wh-panel`,
                          children: [
                            /*#__PURE__*/ _(`div`, {
                              className: `wh-master-title`,
                              children: [
                                /*#__PURE__*/ _(`h3`, {
                                  children: [
                                    /*#__PURE__*/ g(X, { name: `pin`, size: 18 }),
                                    a(x),
                                    /*#__PURE__*/ g(`span`, { children: T[x].length }),
                                  ],
                                }),
                                /*#__PURE__*/ _(`button`, {
                                  className: `wh-primary`,
                                  "data-hit": !0,
                                  "data-demo": `new-master`,
                                  onClick: () => Pe(x),
                                  children: [
                                    /*#__PURE__*/ g(X, { name: `plus`, size: 15 }),
                                    a(`new`),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ _(`div`, {
                              className: `wh-toolbar`,
                              children: [
                                qe,
                                x === `locations` &&
                                  /*#__PURE__*/ _(`select`, {
                                    "data-hit": !0,
                                    "aria-label": a(`zone`),
                                    value: k,
                                    onChange: (e) => A(e.target.value),
                                    children: [
                                      /*#__PURE__*/ _(`option`, {
                                        value: `all`,
                                        children: [a(`all`), ` · `, a(`zones`)],
                                      }),
                                      [`RCV`, `STR-A`, `STR-B`].map((e) =>
                                        /*#__PURE__*/ g(`option`, { children: e }, e)
                                      ),
                                    ],
                                  }),
                              ],
                            }),
                            Je(q(T[x]), x),
                            /*#__PURE__*/ _(`div`, {
                              className: `wh-panel-foot`,
                              children: [
                                q(T[x]).length,
                                ` `,
                                a(`records`),
                                /*#__PURE__*/ g(`span`, { children: `WH-001` }),
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
        ],
      }),
      G &&
        /*#__PURE__*/ _(`div`, {
          className: `wh-notice`,
          role: `status`,
          children: [/*#__PURE__*/ g(X, { name: `check`, size: 16 }), a(G)],
        }),
      le &&
        /*#__PURE__*/ _(`div`, {
          className: `wh-hint`,
          role: `status`,
          children: [/*#__PURE__*/ g(X, { name: `spark`, size: 15 }), a(`hint`)],
        }),
      /*#__PURE__*/ g(m, {
        children:
          L &&
          /*#__PURE__*/ _(`div`, {
            className: `wh-dialog-layer`,
            children: [
              /*#__PURE__*/ g(`button`, {
                className: `wh-backdrop`,
                "data-hit": !0,
                "aria-label": a(`close`),
                onClick: () => R(null),
              }),
              /*#__PURE__*/ _(qt, {
                automatic: ke,
                onClose: () => R(null),
                returnFocus: Oe,
                titleId: oe,
                descriptionId: se,
                children: [
                  /*#__PURE__*/ _(`div`, {
                    className: `wh-dialog-head`,
                    children: [
                      /*#__PURE__*/ _(`div`, {
                        children: [
                          /*#__PURE__*/ _(`span`, {
                            className: `wh-eyebrow`,
                            children: [`WMS / `, a(f)],
                          }),
                          /*#__PURE__*/ g(`h2`, {
                            id: oe,
                            children:
                              L.kind === `create`
                                ? a(`newTitle`)
                                : L.kind === `task`
                                  ? L.id
                                  : L.kind === `metric`
                                    ? a(pn[L.index])
                                    : a(`recordDetails`),
                          }),
                        ],
                      }),
                      /*#__PURE__*/ g(`button`, {
                        onClick: () => R(null),
                        className: `wh-icon`,
                        "data-hit": !0,
                        "data-demo": `close`,
                        "aria-label": a(`close`),
                        children: /*#__PURE__*/ g(X, { name: `close`, size: 19 }),
                      }),
                    ],
                  }),
                  /*#__PURE__*/ g(`p`, {
                    id: se,
                    className: `wh-dialog-description`,
                    children: a(
                      L.kind === `create`
                        ? `newDesc`
                        : L.kind === `task`
                          ? `taskNote`
                          : L.kind === `metric`
                            ? `metricNote`
                            : `demoData`
                    ),
                  }),
                  /*#__PURE__*/ _(`div`, {
                    className: `wh-dialog-body`,
                    children: [
                      L.kind === `create` &&
                        /*#__PURE__*/ _(`form`, {
                          onSubmit: Ge,
                          children: [
                            /*#__PURE__*/ _(`label`, {
                              children: [
                                a(`code`),
                                /*#__PURE__*/ g(`input`, {
                                  "data-hit": !0,
                                  value: z.code,
                                  placeholder: L.scope === `types` ? `MAT-PLT-2026` : `LOC-A-2026`,
                                  onChange: (e) => B((t) => ({ ...t, code: e.target.value })),
                                  "aria-invalid": V,
                                  "aria-describedby": V ? ae : void 0,
                                }),
                              ],
                            }),
                            /*#__PURE__*/ _(`label`, {
                              children: [
                                a(`name`),
                                /*#__PURE__*/ g(`input`, {
                                  "data-hit": !0,
                                  value: z.name,
                                  placeholder: a(L.scope === `types` ? `woodPallet` : `zoneA`),
                                  onChange: (e) => B((t) => ({ ...t, name: e.target.value })),
                                  "aria-invalid": V,
                                }),
                              ],
                            }),
                            /*#__PURE__*/ _(`label`, {
                              children: [
                                a(`category`),
                                /*#__PURE__*/ g(`select`, {
                                  "data-hit": !0,
                                  value: z.category,
                                  onChange: (e) => B((t) => ({ ...t, category: e.target.value })),
                                  children: (L.scope === `types`
                                    ? [`pallet`, `tote`]
                                    : [`bulk`, `staging`, `picking`]
                                  ).map((e) =>
                                    /*#__PURE__*/ g(`option`, { value: e, children: a(e) }, e)
                                  ),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ _(`div`, {
                              className: `wh-form-summary`,
                              children: [
                                /*#__PURE__*/ g(X, { name: `database` }),
                                /*#__PURE__*/ _(`div`, {
                                  children: [
                                    /*#__PURE__*/ g(`strong`, { children: a(`warehouseA`) }),
                                    /*#__PURE__*/ _(`span`, {
                                      children: [`WH-001 · `, a(`active`)],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            V &&
                              /*#__PURE__*/ g(`p`, {
                                className: `wh-error`,
                                id: ae,
                                role: `alert`,
                                children: a(`required`),
                              }),
                            /*#__PURE__*/ _(`div`, {
                              className: `wh-dialog-actions`,
                              children: [
                                /*#__PURE__*/ g(`button`, {
                                  onClick: () => R(null),
                                  "data-hit": !0,
                                  type: `button`,
                                  children: a(`cancel`),
                                }),
                                /*#__PURE__*/ _(`button`, {
                                  "data-hit": !0,
                                  type: `submit`,
                                  className: `wh-primary`,
                                  children: [
                                    /*#__PURE__*/ g(X, { name: `check`, size: 15 }),
                                    a(`save`),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      L.kind === `row` &&
                        /*#__PURE__*/ _(m, {
                          children: [
                            /*#__PURE__*/ _(`div`, {
                              className: `wh-detail-title`,
                              children: [
                                /*#__PURE__*/ g(`span`, {
                                  className: `wh-detail-icon`,
                                  children: /*#__PURE__*/ g(X, { name: `box`, size: 27 }),
                                }),
                                /*#__PURE__*/ _(`div`, {
                                  children: [
                                    /*#__PURE__*/ g(`h3`, { children: L.row.id }),
                                    /*#__PURE__*/ g(`p`, { children: Fe(L.row) }),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ _(`dl`, {
                              className: `wh-details`,
                              children: [
                                /*#__PURE__*/ _(`div`, {
                                  children: [
                                    /*#__PURE__*/ g(`dt`, { children: a(`status`) }),
                                    /*#__PURE__*/ g(`dd`, {
                                      children: /*#__PURE__*/ g(Z, { value: L.row.status }),
                                    }),
                                  ],
                                }),
                                [`category`, `dimensions`, `load`, `location`, `capacity`, `date`]
                                  .filter((e) => L.row[e] !== void 0)
                                  .map((e) =>
                                    /*#__PURE__*/ _(
                                      `div`,
                                      {
                                        children: [
                                          /*#__PURE__*/ g(`dt`, { children: a(e) }),
                                          /*#__PURE__*/ g(`dd`, {
                                            children:
                                              e === `category` ? a(L.row.category) : L.row[e],
                                          }),
                                        ],
                                      },
                                      e
                                    )
                                  ),
                                L.row.cost !== void 0 &&
                                  /*#__PURE__*/ _(`div`, {
                                    children: [
                                      /*#__PURE__*/ g(`dt`, { children: a(`cost`) }),
                                      /*#__PURE__*/ g(`dd`, { children: He(L.row.cost) }),
                                    ],
                                  }),
                                /*#__PURE__*/ _(`div`, {
                                  children: [
                                    /*#__PURE__*/ g(`dt`, { children: a(`warehouses`) }),
                                    /*#__PURE__*/ g(`dd`, { children: a(`warehouseA`) }),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ g(`h4`, { children: a(`activity`) }),
                            /*#__PURE__*/ _(`div`, {
                              className: `wh-timeline`,
                              children: [
                                /*#__PURE__*/ _(`p`, {
                                  children: [
                                    /*#__PURE__*/ g(`i`, {}),
                                    /*#__PURE__*/ _(`span`, {
                                      children: [
                                        a(`verified`),
                                        /*#__PURE__*/ g(`small`, { children: `10-12 · 14:20` }),
                                      ],
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ _(`p`, {
                                  children: [
                                    /*#__PURE__*/ g(`i`, {}),
                                    /*#__PURE__*/ _(`span`, {
                                      children: [
                                        a(`synced`),
                                        /*#__PURE__*/ g(`small`, { children: `10-12 · 09:30` }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      L.kind === `task` &&
                        J &&
                        /*#__PURE__*/ _(m, {
                          children: [
                            /*#__PURE__*/ _(`div`, {
                              className: `wh-detail-badges`,
                              children: [
                                /*#__PURE__*/ g(Z, { value: J.type }),
                                /*#__PURE__*/ g(Z, { value: J.status }),
                                /*#__PURE__*/ _(`span`, { children: [`P`, J.priority] }),
                              ],
                            }),
                            /*#__PURE__*/ _(`dl`, {
                              className: `wh-details`,
                              children: [
                                /*#__PURE__*/ _(`div`, {
                                  children: [
                                    /*#__PURE__*/ g(`dt`, { children: a(`products`) }),
                                    /*#__PURE__*/ g(`dd`, { children: J.sku }),
                                  ],
                                }),
                                /*#__PURE__*/ _(`div`, {
                                  children: [
                                    /*#__PURE__*/ g(`dt`, { children: a(`quantity`) }),
                                    /*#__PURE__*/ _(`dd`, { children: [J.qty, ` `, a(`units`)] }),
                                  ],
                                }),
                                /*#__PURE__*/ _(`div`, {
                                  children: [
                                    /*#__PURE__*/ g(`dt`, { children: a(`assignee`) }),
                                    /*#__PURE__*/ g(`dd`, {
                                      children:
                                        J.assignee === null ? a(`unassigned`) : an(J.assignee, o),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ _(`div`, {
                              className: `wh-task-path`,
                              children: [
                                /*#__PURE__*/ g(X, { name: `pin` }),
                                /*#__PURE__*/ g(`strong`, { children: J.from }),
                                /*#__PURE__*/ g(`span`, { children: `→` }),
                                /*#__PURE__*/ g(`strong`, { children: J.to }),
                              ],
                            }),
                            /*#__PURE__*/ g(`h4`, { children: a(`checklist`) }),
                            [`scan`, `checked`, `destination`].map((e, t) =>
                              /*#__PURE__*/ _(
                                `label`,
                                {
                                  className: `wh-check`,
                                  "data-hit": !0,
                                  children: [
                                    /*#__PURE__*/ g(`input`, {
                                      type: `checkbox`,
                                      checked: J.status === `completed` || re[t],
                                      disabled: J.status === `completed`,
                                      onChange: (e) =>
                                        ie((n) =>
                                          n.map((n, r) => (r === t ? e.target.checked : n))
                                        ),
                                    }),
                                    a(e),
                                  ],
                                },
                                e
                              )
                            ),
                            J.status !== `completed` &&
                              /*#__PURE__*/ g(`div`, {
                                className: `wh-dialog-actions`,
                                children: /*#__PURE__*/ _(`button`, {
                                  "data-hit": !0,
                                  className: `wh-primary`,
                                  disabled: J.status === `progress` && !re.every(Boolean),
                                  onClick: () => {
                                    (te((e) =>
                                      e.map((e) =>
                                        e.id === J.id
                                          ? {
                                              ...e,
                                              status:
                                                e.status === `pending` ? `progress` : `completed`,
                                            }
                                          : e
                                      )
                                    ),
                                      Me(`taskSaved`));
                                  },
                                  children: [
                                    /*#__PURE__*/ g(X, {
                                      name: J.status === `pending` ? `play` : `check`,
                                      size: 15,
                                    }),
                                    a(J.status === `pending` ? `start` : `complete`),
                                  ],
                                }),
                              }),
                          ],
                        }),
                      L.kind === `metric` &&
                        /*#__PURE__*/ _(m, {
                          children: [
                            /*#__PURE__*/ _(`div`, {
                              className: `wh-metric-detail`,
                              children: [
                                /*#__PURE__*/ g(`strong`, {
                                  children: F
                                    ? [`99.1%`, `94.8%`, `96.5%`, `86`][L.index]
                                    : mn[L.index],
                                }),
                                /*#__PURE__*/ _(`span`, {
                                  className: `wh-positive`,
                                  children: [
                                    `↗ +`,
                                    [0.2, 0.4, 1.3, 4][L.index],
                                    ` `,
                                    a(`vsPrevious`),
                                  ],
                                }),
                              ],
                            }),
                            L.index < 3
                              ? /*#__PURE__*/ g(Yt, { period: F, one: L.index })
                              : /*#__PURE__*/ g(`div`, {
                                  className: `wh-bars`,
                                  children: [74, 78, 80, 82, 86, 89, 92].map((e, t) =>
                                    /*#__PURE__*/ _(
                                      `div`,
                                      {
                                        children: [
                                          /*#__PURE__*/ g(`b`, { children: F ? e - 6 : e }),
                                          /*#__PURE__*/ g(`i`, {
                                            style: {
                                              height: e - 15,
                                              background: t === 6 ? `#b2ed1d` : `#222831`,
                                            },
                                          }),
                                          /*#__PURE__*/ g(`span`, {
                                            children: F ? `09/${13 + t * 4}` : `10/${6 + t}`,
                                          }),
                                        ],
                                      },
                                      t
                                    )
                                  ),
                                }),
                            /*#__PURE__*/ _(`div`, {
                              className: `wh-mini-table`,
                              children: [
                                /*#__PURE__*/ _(`div`, {
                                  children: [
                                    /*#__PURE__*/ g(`strong`, { children: a(`date`) }),
                                    /*#__PURE__*/ g(`strong`, { children: a(`measured`) }),
                                    /*#__PURE__*/ g(`strong`, { children: a(`target`) }),
                                  ],
                                }),
                                [0, 1, 2, 3].map((e) =>
                                  /*#__PURE__*/ _(
                                    `div`,
                                    {
                                      children: [
                                        /*#__PURE__*/ g(`span`, {
                                          children: F
                                            ? `2026-09-${29 - e * 4}`
                                            : `2026-10-${12 - e}`,
                                        }),
                                        /*#__PURE__*/ g(`b`, {
                                          children:
                                            L.index < 3
                                              ? `${(hn[L.index][6 - e] - (F ? [0.4, 1.4, 1.3][L.index] : 0)).toFixed(1)}%`
                                              : [92, 89, 86, 82][e] - (F ? 6 : 0),
                                        }),
                                        /*#__PURE__*/ g(`span`, {
                                          children: [`99%`, `95%`, `98%`, `80`][L.index],
                                        }),
                                      ],
                                    },
                                    e
                                  )
                                ),
                              ],
                            }),
                            /*#__PURE__*/ _(`div`, {
                              className: `wh-insight`,
                              children: [
                                /*#__PURE__*/ g(X, { name: `spark` }),
                                /*#__PURE__*/ g(`span`, { children: a(`insightText`) }),
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
      ye.show &&
        he &&
        !c &&
        !de &&
        /*#__PURE__*/ _(`div`, {
          "aria-hidden": `true`,
          className: `wh-cursor`,
          style: {
            transform: `translate3d(${ye.x}px, ${ye.y}px, 0) scale(${ye.click ? 0.82 : 1})`,
            transition: `transform 160ms ease-out`,
          },
          children: [
            /*#__PURE__*/ g(`svg`, {
              width: `24`,
              height: `30`,
              viewBox: `0 0 24 30`,
              children: /*#__PURE__*/ g(`path`, {
                d: `M2 2v22l6-6 5 10 4-2-5-10h9L2 2Z`,
                fill: `#111820`,
                stroke: `white`,
                strokeWidth: `1.7`,
              }),
            }),
            ye.click && /*#__PURE__*/ g(`i`, {}),
          ],
        }),
    ],
  });
}
var $t, en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, _n;
function vn() {
  return (vn = e(() => {
    (d(),
      f(),
      o(),
      L(),
      ($t = {
        containers: [`Containers`, `容器管理`, `容器管理`],
        tasks: [`Tasks`, `任务中心`, `タスク`],
        kpi: [`KPI Reports`, `绩效报表`, `KPI レポート`],
        master: [`Master Data`, `基础数据`, `マスターデータ`],
        ops: [`WAREHOUSE OPERATIONS`, `仓储运营平台`, `倉庫オペレーション`],
        online: [`System online`, `系统在线`, `システム稼働中`],
        workspace: [`Warehouse workspace`, `仓储工作台`, `倉庫ワークスペース`],
        dashboard: [`仪表板`, `总览`, `ダッシュボード`],
        inbound: [`Inbound`, `入库管理`, `入庫`],
        inventory: [`Inventory`, `库存管理`, `在庫`],
        count: [`Cycle count`, `循环盘点`, `循環棚卸`],
        outbound: [`Outbound`, `出库管理`, `出庫`],
        packing: [`Packing`, `包装管理`, `梱包`],
        reports: [`Reports`, `报表中心`, `レポート`],
        settings: [`Settings`, `设置`, `設定`],
        liveDemo: [`Live demo`, `自动演示`, `自動デモ`],
        explore: [`Explore the workspace`, `自由探索`, `自由に操作`],
        paused: [`Demo paused`, `演示已暂停`, `デモ一時停止`],
        play: [`Play demo`, `播放演示`, `デモを再生`],
        pause: [`Pause demo`, `暂停演示`, `デモを一時停止`],
        hint: [
          `Try the highlighted controls`,
          `点击高亮位置，体验交互`,
          `ハイライトされた項目を操作できます`,
        ],
        demoData: [
          `Sample data · Changes stay in this demo`,
          `示例数据 · 修改仅保留在本演示中`,
          `サンプルデータ · 変更はデモ内のみ`,
        ],
        subtitle: [
          `Track every pallet, tote and movement.`,
          `追踪每一个托盘、周转箱和流转记录。`,
          `パレット・通い箱と移動履歴を一元管理。`,
        ],
        newType: [`New container type`, `新建容器类型`, `容器タイプを追加`],
        new: [`Add new`, `新增`, `新規追加`],
        total: [`Total containers`, `容器总数`, `容器総数`],
        available: [`Available`, `可用`, `利用可能`],
        inUse: [`In use`, `使用中`, `使用中`],
        transit: [`In transit`, `运输中`, `輸送中`],
        maintenance: [`Maintenance`, `维护中`, `メンテナンス`],
        pallet: [`Pallet`, `托盘`, `パレット`],
        tote: [`Tote`, `周转箱`, `通い箱`],
        types: [`Container types`, `容器类型`, `容器タイプ`],
        transactions: [`Transactions`, `流转记录`, `移動履歴`],
        lending: [`Lending track`, `借还跟踪`, `貸出管理`],
        all: [`All`, `全部`, `すべて`],
        category: [`Category`, `分类`, `カテゴリ`],
        search: [`Search records…`, `搜索记录…`, `レコードを検索…`],
        code: [`Code`, `编码`, `コード`],
        name: [`Name`, `名称`, `名称`],
        dimensions: [`Dimensions (mm)`, `尺寸（mm）`, `寸法（mm）`],
        load: [`Max load (kg)`, `最大载重（kg）`, `最大荷重（kg）`],
        material: [`Material`, `材质`, `材質`],
        cost: [`Unit cost`, `单价`, `単価`],
        status: [`Status`, `状态`, `状態`],
        active: [`Active`, `启用`, `有効`],
        wood: [`Wood`, `木质`, `木製`],
        plastic: [`Plastic`, `塑料`, `プラスチック`],
        metal: [`Metal`, `金属`, `金属`],
        woodPallet: [`Standard wooden pallet`, `标准木托盘`, `標準木製パレット`],
        plasticPallet: [`Heavy-duty plastic pallet`, `重型塑料托盘`, `強化樹脂パレット`],
        smallTote: [`Small stackable tote`, `小号堆叠周转箱`, `小型スタッキング箱`],
        mediumTote: [`Medium picking tote`, `中号拣选周转箱`, `中型ピッキング箱`],
        largeTote: [`Large metal tote`, `大号金属周转箱`, `大型金属ボックス`],
        location: [`Location`, `库位`, `ロケーション`],
        updated: [`Last updated`, `最近更新`, `最終更新`],
        operator: [`Operator`, `操作人`, `担当者`],
        movement: [`Movement`, `动作`, `移動区分`],
        receive: [`Received`, `入库`, `受入`],
        dispatch: [`Dispatched`, `出库`, `出荷`],
        returned: [`Returned`, `归还`, `返却済み`],
        partner: [`Partner`, `合作方`, `取引先`],
        due: [`Due date`, `归还日期`, `返却期限`],
        onLoan: [`On loan`, `借出中`, `貸出中`],
        dueSoon: [`Due soon`, `即将到期`, `期限間近`],
        taskSub: [
          `Keep work moving, from receiving to shipping.`,
          `从收货到发运，让每项任务有序推进。`,
          `入荷から出荷まで、作業をスムーズに。`,
        ],
        pending: [`Pending`, `待处理`, `未着手`],
        progress: [`In progress`, `进行中`, `進行中`],
        completed: [`Completed`, `已完成`, `完了`],
        pick: [`Pick`, `拣货`, `ピッキング`],
        putaway: [`Putaway`, `上架`, `棚入れ`],
        replenish: [`Replenish`, `补货`, `補充`],
        type: [`Type`, `类型`, `タイプ`],
        quantity: [`Quantity`, `数量`, `数量`],
        units: [`units`, `件`, `個`],
        assignee: [`Assignee`, `负责人`, `担当者`],
        unassigned: [`Unassigned`, `未分配`, `未割当`],
        details: [`View details`, `查看详情`, `詳細を見る`],
        start: [`Start task`, `开始任务`, `タスクを開始`],
        complete: [`Complete task`, `完成任务`, `タスクを完了`],
        route: [`Movement route`, `作业路径`, `移動ルート`],
        priority: [`Priority`, `优先级`, `優先度`],
        notes: [`Notes`, `备注`, `備考`],
        taskNote: [
          `Scan the source location and confirm the quantity before moving the goods.`,
          `移动货物前，请扫描源库位并确认数量。`,
          `商品を移動する前に、移動元をスキャンして数量を確認してください。`,
        ],
        checklist: [`Execution checklist`, `执行清单`, `作業チェックリスト`],
        scan: [`Source location scanned`, `已扫描源库位`, `移動元をスキャン済み`],
        checked: [`Quantity confirmed`, `已核对数量`, `数量を確認済み`],
        destination: [`Destination confirmed`, `已确认目标库位`, `移動先を確認済み`],
        kpiSub: [
          `A clearer view of warehouse performance.`,
          `以数据洞察仓库运营效率。`,
          `データで倉庫パフォーマンスを可視化。`,
        ],
        accuracy: [`Inventory accuracy`, `库存准确率`, `在庫精度`],
        fulfillment: [`Order fulfillment`, `订单履约率`, `注文充足率`],
        ontime: [`On-time shipment`, `准时发运率`, `定時出荷率`],
        picks: [`Picks per hour`, `每小时拣货量`, `時間あたりのピック数`],
        target: [`Target`, `目标`, `目標`],
        trend: [`Performance trend`, `绩效趋势`, `パフォーマンス推移`],
        overview: [`Performance overview`, `绩效概览`, `パフォーマンス概要`],
        cycle: [`Cycle times`, `作业周期`, `作業時間`],
        productivity: [`Picking productivity`, `拣选效率`, `ピッキング生産性`],
        seven: [`7 days`, `近 7 天`, `7 日間`],
        month: [`30 days`, `近 30 天`, `30 日間`],
        minutes: [`minutes`, `分钟`, `分`],
        vsPrevious: [`vs. previous period`, `较上一周期`, `前期間比`],
        insight: [`Warehouse insight`, `仓库洞察`, `倉庫インサイト`],
        insightText: [
          `Picking productivity is up 15%. Zone A handles 42% of today's volume.`,
          `拣选效率提升 15%。A 区承担了今日 42% 的作业量。`,
          `ピッキング生産性が 15% 向上。A ゾーンが本日作業量の 42% を処理。`,
        ],
        crossdock: [`Cross-dock`, `越库作业`, `クロスドック`],
        orders: [`Orders processed`, `已处理订单`, `処理済み注文`],
        unitsMoved: [`Units moved`, `货品流转量`, `移動数量`],
        measured: [`Measured`, `实际值`, `実績`],
        date: [`Date`, `日期`, `日付`],
        metricNote: [
          `Calculated from confirmed warehouse events. Select a period to compare performance.`,
          `根据已确认的仓储事件计算。可切换周期对比运营表现。`,
          `確定済みの倉庫イベントから算出。期間を切り替えて実績を比較できます。`,
        ],
        masterSub: [
          `One source of truth for your warehouse.`,
          `统一维护仓库运营所需的基础数据。`,
          `倉庫運営のマスターデータを一元管理。`,
        ],
        warehouses: [`Warehouses`, `仓库`, `倉庫`],
        zones: [`Zones`, `库区`, `ゾーン`],
        locations: [`Locations`, `库位`, `ロケーション`],
        products: [`Products`, `产品`, `商品`],
        suppliers: [`Suppliers`, `供应商`, `仕入先`],
        customers: [`Customers`, `客户`, `顧客`],
        capacity: [`Capacity`, `容量`, `容量`],
        zone: [`Zone`, `库区`, `ゾーン`],
        staging: [`Staging`, `暂存区`, `仮置き`],
        bulk: [`Bulk storage`, `存储区`, `保管`],
        picking: [`Picking`, `拣选区`, `ピッキング`],
        records: [`records`, `条记录`, `件`],
        warehouseA: [`East distribution center`, `华东配送中心`, `東部配送センター`],
        warehouseB: [`South fulfillment center`, `华南履约中心`, `南部物流センター`],
        zoneA: [`Storage zone A`, `A 存储区`, `保管ゾーン A`],
        zoneB: [`Storage zone B`, `B 存储区`, `保管ゾーン B`],
        zoneR: [`Receiving zone`, `收货区`, `入荷ゾーン`],
        productA: [`Precision sensor`, `精密传感器`, `精密センサー`],
        productB: [`Industrial connector`, `工业连接器`, `産業用コネクター`],
        productC: [`Control module`, `控制模块`, `制御モジュール`],
        productD: [`Safety valve`, `安全阀`, `安全バルブ`],
        supplierA: [`Northstar Components`, `北辰零部件`, `ノーススター部品`],
        supplierB: [`Atlas Industrial`, `寰宇工业`, `アトラス工業`],
        customerA: [`Horizon Manufacturing`, `远景制造`, `ホライズン製造`],
        customerB: [`Summit Automation`, `顶峰自动化`, `サミット自動化`],
        close: [`Close`, `关闭`, `閉じる`],
        cancel: [`Cancel`, `取消`, `キャンセル`],
        save: [`Save record`, `保存记录`, `保存`],
        saved: [`Record saved in this demo`, `已保存到本地演示`, `デモ内に保存しました`],
        taskSaved: [`Task updated`, `任务已更新`, `タスクを更新しました`],
        required: [
          `Enter a unique code and a name.`,
          `请填写唯一编码和名称。`,
          `一意のコードと名称を入力してください。`,
        ],
        newTitle: [`Create a record`, `新建记录`, `レコードを作成`],
        newDesc: [
          `Add a record to this local warehouse demo.`,
          `向本地仓库演示添加一条记录。`,
          `この倉庫デモにレコードを追加します。`,
        ],
        recordDetails: [`Record details`, `记录详情`, `レコード詳細`],
        activity: [`Recent activity`, `最近动态`, `最近のアクティビティ`],
        verified: [`Record verified`, `记录已核验`, `レコード確認済み`],
        synced: [`Warehouse data synchronized`, `仓储数据已同步`, `倉庫データを同期済み`],
        noResults: [`No matching records`, `未找到匹配记录`, `一致するレコードがありません`],
        reset: [`Clear filters`, `清除筛选`, `フィルターを解除`],
        view: [`Open record`, `打开记录`, `レコードを開く`],
        collapse: [`Collapse navigation`, `收起导航`, `ナビゲーションを折りたたむ`],
        expand: [`Expand navigation`, `展开导航`, `ナビゲーションを展開`],
        language: [`Language`, `语言`, `言語`],
        local: [`Local preview`, `本地预览`, `ローカルプレビュー`],
      }),
      (en = /*#__PURE__*/ p(`en`)),
      (tn = () => {
        let e = s(en);
        return (t) => $t[t][e === `zh` ? 1 : e === `ja` ? 2 : 0];
      }),
      (nn = (...e) => e.filter(Boolean).join(` `)),
      (rn = [
        [`Wei Zhang`, `张伟`, `張 偉`],
        [`Nana Li`, `李娜`, `李 娜`],
        [`Fang Wang`, `王芳`, `王 芳`],
        [`Yang Liu`, `刘洋`, `劉 洋`],
      ]),
      (an = (e, t) => rn[e % rn.length][t === `zh` ? 1 : t === `ja` ? 2 : 0]),
      (on = [
        {
          id: `MAT-PLT-1210`,
          name: `woodPallet`,
          category: `pallet`,
          dimensions: `1200 × 1000 × 150`,
          load: 1e3,
          material: `wood`,
          cost: 120,
          status: `active`,
        },
        {
          id: `MAT-PLT-1111`,
          name: `plasticPallet`,
          category: `pallet`,
          dimensions: `1100 × 1100 × 150`,
          load: 1500,
          material: `plastic`,
          cost: 280,
          status: `active`,
        },
        {
          id: `MAT-BIN-S01`,
          name: `smallTote`,
          category: `tote`,
          dimensions: `400 × 300 × 200`,
          load: 15,
          material: `plastic`,
          cost: 25,
          status: `active`,
        },
        {
          id: `MAT-BIN-M01`,
          name: `mediumTote`,
          category: `tote`,
          dimensions: `600 × 400 × 300`,
          load: 30,
          material: `plastic`,
          cost: 45,
          status: `active`,
        },
        {
          id: `MAT-BIN-L01`,
          name: `largeTote`,
          category: `tote`,
          dimensions: `800 × 600 × 500`,
          load: 100,
          material: `metal`,
          cost: 180,
          status: `active`,
        },
      ]),
      (sn = Array.from({ length: 12 }, (e, t) => ({
        id: `${t < 7 ? `PLT` : `BIN`}-${String(t + 1).padStart(4, `0`)}`,
        name: t < 7 ? `woodPallet` : `mediumTote`,
        category: t < 7 ? `pallet` : `tote`,
        location: [`A-01-01`, `B-02-03`, `RCV-01`, `P-01-02`][t % 4],
        status: t < 4 ? `available` : t < 10 ? `inUse` : t === 10 ? `transit` : `maintenance`,
        date: `10-${String(12 - (t % 3)).padStart(2, `0`)} ${String(9 + (t % 4)).padStart(2, `0`)}:30`,
      }))),
      (cn = Array.from({ length: 7 }, (e, t) => ({
        id: `TXN-${String(2408 - t)}`,
        name: `PLT-${String(t + 1).padStart(4, `0`)}`,
        custom: !0,
        status: [`receive`, `dispatch`, `returned`][t % 3],
        location: [`RCV-01 → A-01-01`, `A-02-01 → OUT-01`, `OUT-01 → RCV-02`][t % 3],
        operator: t % 4,
        date: `10-12 ${String(14 - t).padStart(2, `0`)}:25`,
      }))),
      (ln = [0, 1, 2].map((e) => ({
        id: `LOAN-00${e + 1}`,
        name: `PLT-000${e + 4}`,
        custom: !0,
        partner: e % 2 ? `supplierA` : `customerA`,
        status: e === 1 ? `dueSoon` : `onLoan`,
        date: `2026-10-${15 + e * 3}`,
      }))),
      (un = Array.from({ length: 9 }, (e, t) => ({
        id: `TASK-${String(t + 1).padStart(3, `0`)}`,
        type: [`putaway`, `pick`, `pick`, `pick`, `replenish`, `putaway`][t % 6],
        status: t === 1 ? `completed` : t === 0 || t === 2 ? `progress` : `pending`,
        priority: 1 + (t % 3),
        sku: [`LOC-242-50`, `TER-MS-930`, `TER-PU-8590`, `TM-AS-1239`][t % 4],
        qty: [150, 50, 30, 10, 30, 80, 45, 120, 60][t],
        from: t % 6 == 0 || t % 6 == 5 ? `RCV-01` : `A-0${1 + (t % 2)}-01`,
        to: t % 6 == 0 || t % 6 == 5 ? `A-01-01` : t % 6 == 4 ? `P-02-02` : `STAGING-OUT`,
        assignee: t === 3 || t === 5 ? null : t % 4,
      }))),
      (dn = [`warehouses`, `zones`, `locations`, `products`, `suppliers`, `customers`]),
      (fn = {
        warehouses: [
          { id: `WH-001`, name: `warehouseA`, status: `active`, capacity: `2,480 / 3,200` },
          { id: `WH-002`, name: `warehouseB`, status: `active`, capacity: `1,760 / 2,400` },
        ],
        zones: [`A`, `B`, `RCV`].map((e, t) => ({
          id: `ZONE-${e}`,
          name: [`zoneA`, `zoneB`, `zoneR`][t],
          status: `active`,
          category: t === 2 ? `staging` : `bulk`,
          capacity: `${[620, 480, 64][t]} / ${[800, 600, 100][t]}`,
        })),
        locations: Array.from({ length: 14 }, (e, t) => ({
          id: t < 3 ? `RCV-0${t + 1}` : `${t < 9 ? `A` : `B`}-01-${String(t - 2).padStart(2, `0`)}`,
          name: t < 3 ? `zoneR` : t < 9 ? `zoneA` : `zoneB`,
          status: `active`,
          zone: t < 3 ? `RCV` : t < 9 ? `STR-A` : `STR-B`,
          category: t < 3 ? `staging` : t % 4 == 0 ? `picking` : `bulk`,
          capacity: `${[0, 24, 18, 150, 120, 180, 95, 160, 75, 28, 35, 22, 65, 88][t]} / ${t < 3 ? 100 : 200}`,
        })),
        products: Array.from({ length: 8 }, (e, t) => ({
          id: `SKU-${1040 + t}`,
          name: [`productA`, `productB`, `productC`, `productD`][t % 4],
          status: `active`,
          capacity: `${[1240, 850, 420, 680][t % 4]}`,
          location: `A-01-0${t + 1}`,
        })),
        suppliers: [
          { id: `SUP-001`, name: `supplierA`, status: `active`, location: `Shanghai` },
          { id: `SUP-002`, name: `supplierB`, status: `active`, location: `Osaka` },
        ],
        customers: [
          { id: `CUS-001`, name: `customerA`, status: `active`, location: `Tokyo` },
          { id: `CUS-002`, name: `customerB`, status: `active`, location: `Singapore` },
        ],
      }),
      (pn = [`accuracy`, `fulfillment`, `ontime`, `picks`]),
      (mn = [`99.5%`, `96.2%`, `97.8%`, `92`]),
      (hn = [
        [98.2, 98.5, 98.7, 98.8, 99.2, 99.1, 99.5],
        [90, 91.2, 92.5, 93.8, 94.5, 95.8, 96.2],
        [91.5, 92, 93.5, 94.8, 95.1, 96.4, 97.8],
      ]),
      (gn = [`#9bd600`, `#3978f6`, `#13b86b`]),
      (_n = `
.wh-root{position:relative;isolation:isolate;container-type:inline-size;width:100%;height:100%;min-height:360px;overflow:hidden;background:#fafafa;border:1px solid #e0e3e7;color:#18212d;font:12px/1.45 -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",sans-serif;font-variant-numeric:tabular-nums;box-shadow:0 8px 26px #1018280a;text-align:left;color-scheme:light}
.wh-root *{box-sizing:border-box}.wh-root button,.wh-root input,.wh-root select{font:inherit;color:inherit}.wh-root button{display:inline-flex;align-items:center;justify-content:center;gap:7px;border:1px solid #e3e5e8;border-radius:5px;background:white;padding:7px 10px;cursor:pointer;white-space:nowrap}.wh-root button:hover{background:#f3f4f5}.wh-root button:disabled{opacity:.45;cursor:not-allowed}.wh-root button:focus-visible,.wh-root input:focus-visible,.wh-root select:focus-visible{outline:2px solid #6d9600;outline-offset:3px}.wh-root button[aria-disabled=true]{cursor:default}.wh-root svg{flex-shrink:0}.wh-root h2,.wh-root h3,.wh-root h4,.wh-root p{margin:0}.wh-root h2{font-size:22px;line-height:1.25;font-weight:650;text-wrap:balance}.wh-root p{text-wrap:pretty}.wh-root h3{font-size:12px;font-weight:650}.wh-root h4{font-size:12px;margin:22px 0 12px}.wh-root .wh-primary{background:#101720;border-color:#101720;color:#fff;font-weight:550}.wh-root .wh-primary:hover{background:#29313c}.wh-root .wh-icon{border:0;background:transparent;padding:5px;flex-shrink:0}.wh-root .wh-icon:hover{background:#eff0f2}.wh-muted{color:#89919d}.wh-mono,.wh-record{font-family:ui-monospace,SFMono-Regular,Consolas,monospace!important;font-size:11px!important}.wh-positive{color:#208340}.wh-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}
.wh-shell{height:100%;display:flex;overflow:hidden}.wh-sidebar{width:180px;flex-shrink:0;background:#fff;border-right:1px solid #e6e8eb;display:flex;flex-direction:column;padding:0 10px;overflow:hidden}.wh-brand{height:62px;display:flex;align-items:center;gap:9px;flex-shrink:0}.wh-brand>span{width:30px;height:30px;background:var(--wh-accent);border-radius:5px;display:grid;place-items:center;color:#1d2b00}.wh-brand b{font-size:15px;white-space:nowrap}.wh-brand em{font-style:normal;font-weight:450;font-size:11px;color:#9399a2;margin-left:3px}.wh-brand .wh-collapse{margin-left:auto}.wh-nav-label{font-size:9px;color:#9299a3;margin:14px 8px 12px}.wh-sidebar nav{overflow:auto;scrollbar-width:none}.wh-root .wh-nav{width:100%;justify-content:flex-start;position:relative;border:0;border-radius:5px;gap:11px;padding:11px 9px;color:#7e8793;font-size:11px;margin-bottom:3px}.wh-nav span{overflow:hidden;text-overflow:ellipsis}.wh-root .wh-nav.wh-selected{background:var(--wh-accent);color:#172000;font-weight:650}.wh-nav i{width:5px;height:5px;border-radius:50%;background:#263800;margin-left:auto}.wh-root .wh-preview-only{color:#9ca2aa}.wh-sidebar-foot{margin-top:auto;display:flex;align-items:center;padding:16px 3px;gap:8px;border-top:1px solid #f0f1f3}.wh-avatar{width:29px;height:29px;border-radius:6px;background:#f3f4f5;display:grid;place-items:center;font-weight:650}.wh-sidebar-foot strong{font-size:9px;font-weight:550;display:block}.wh-sidebar-foot small{font-size:9px;color:#9097a1}.wh-collapsed .wh-sidebar{width:64px;padding:0 10px}.wh-collapsed .wh-brand b,.wh-collapsed .wh-nav-label,.wh-collapsed .wh-nav span,.wh-collapsed .wh-nav i,.wh-collapsed .wh-sidebar-foot,.wh-collapsed .wh-brand>span{display:none}.wh-collapsed .wh-brand .wh-collapse{margin:auto}.wh-collapsed .wh-nav{justify-content:center}.wh-workspace{display:flex;flex-direction:column;flex:1;min-width:0}.wh-topbar{height:62px;flex-shrink:0;padding:0 24px;background:#fff;border-bottom:1px solid #e6e8eb;display:flex;align-items:center;justify-content:space-between;gap:10px}.wh-topbar>div:first-child{display:flex;flex-direction:column;gap:1px}.wh-topbar>div>span:first-child:not(.wh-online){font-size:8px;color:#969ba2}.wh-topbar strong{font-size:13px;font-weight:600}.wh-top-actions{display:flex;align-items:center;gap:18px;font-size:10px}.wh-online{display:flex;align-items:center;gap:5px;color:#298744}.wh-online i{width:5px;height:5px;border-radius:50%;background:#25a25a}.wh-date{color:#9a9fa7}.wh-locale{display:flex;gap:6px;align-items:center;border-left:1px solid #e4e6e9;padding-left:14px}.wh-mobile-nav{display:none}.wh-content{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;padding:24px;scrollbar-width:thin;scrollbar-color:#d5d9df transparent}.wh-heading{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:20px}.wh-heading p{font-size:11px;color:#9299a5;margin-top:5px}.wh-heading .wh-primary{font-size:11px;padding:9px 12px}
.wh-stats{display:grid;gap:12px;margin-bottom:20px}.wh-six{grid-template-columns:repeat(6,minmax(0,1fr))}.wh-three{grid-template-columns:repeat(3,minmax(0,1fr))}.wh-four{grid-template-columns:repeat(4,minmax(0,1fr))}.wh-stat{border:1px solid #e3e5e8;border-radius:6px;background:#fff;padding:15px;min-width:0}.wh-stat>div:first-child{display:flex;align-items:center;justify-content:space-between;color:#87919f;font-size:10px;gap:5px}.wh-stat>strong{display:block;font-size:25px;font-weight:650;margin:9px 0 3px;line-height:1.1;color:#17212e}.wh-stat small{color:#a1a7b0;font-size:9px}.wh-stat>div>svg{color:#a7afba}.wh-root .wh-stat-button{justify-content:flex-start;padding:16px;gap:12px;text-align:left}.wh-stat-button>div{display:flex;flex-direction:column;align-items:flex-start;flex:1}.wh-stat-button strong{font-size:23px;line-height:1.2}.wh-stat-button>div>span{color:#8c95a1;font-size:10px}.wh-stat-icon{width:32px;height:32px;display:grid;place-items:center;border-radius:6px}.wh-tone-0{background:#f2f4f6;color:#566271}.wh-tone-1{background:#ecf2ff;color:#3978f6}.wh-tone-2{background:#edfaf2;color:#19a85d}.wh-tone-3{background:#f5f2ff;color:#9665e7}.wh-root .wh-kpi{display:block;text-align:left;white-space:normal}.wh-kpi>span{font-size:10px;color:#838d9b;display:block;margin:6px 0}.wh-kpi>strong{font-size:27px;margin-top:15px}.wh-kpi .wh-positive{color:#22994b}.wh-panel{background:#fff;border:1px solid #e3e5e8;border-radius:6px;min-width:0;overflow:hidden}.wh-toolbar{padding:14px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;border-bottom:1px solid #eceef0}.wh-tabs{display:flex;align-items:center;gap:4px;overflow:auto;scrollbar-width:none;max-width:100%}.wh-root .wh-tabs button{border:0;font-size:10px;color:#8a94a2;gap:6px;padding:7px 8px}.wh-tabs button span{font-size:9px;color:#9ba3ad}.wh-root .wh-tabs .wh-active{background:#f2f4f6;color:#263343;font-weight:650}.wh-filters{display:flex;align-items:center;gap:7px;flex:1;justify-content:flex-end}.wh-root select{background:#fff;border:1px solid #e2e5e9;border-radius:5px;padding:8px 25px 8px 8px;font-size:10px;min-width:0;max-width:100%;height:32px}.wh-search{border:1px solid #e2e5e9;background:#fff;border-radius:5px;height:32px;display:flex;gap:6px;align-items:center;padding:0 9px;color:#98a1ae;min-width:110px;width:180px;max-width:100%}.wh-search input{width:100%;min-width:0;border:0;outline:0;background:transparent;font-size:10px}.wh-root .wh-search button{padding:0;border:0}.wh-table-wrap{overflow:auto;overscroll-behavior:contain;scrollbar-width:thin}.wh-root table{width:100%;border-collapse:collapse;font-size:10px;white-space:nowrap}.wh-root th{text-align:left;color:#949ca7;font-size:9px;font-weight:500;background:#fafafa;padding:12px}.wh-root td{padding:12px;border-top:1px solid #eceef1;color:#4f5b6b}.wh-root tr:hover td{background:#fafbfc}.wh-root td:first-child,.wh-root th:first-child{padding-left:16px}.wh-root .wh-record{border:0;padding:0;border-radius:2px;background:transparent;font-weight:550;color:#344253}.wh-root .wh-record:hover{color:#547700;text-decoration:underline}.wh-badge{display:inline-flex;align-items:center;gap:4px;padding:3px 6px;font-size:9px;line-height:1.2;background:#f2f4f6;color:#677282;border-radius:4px;white-space:nowrap}.wh-badge i{width:4px;height:4px;border-radius:50%;background:currentColor}.wh-active.wh-badge,.wh-completed,.wh-available,.wh-returned{background:#eef9f1;color:#29854a}.wh-pallet,.wh-pending,.wh-dueSoon,.wh-staging{background:#fff7e6;color:#a96b04}.wh-tote,.wh-progress,.wh-inUse,.wh-pick,.wh-bulk,.wh-receive{background:#edf3ff;color:#4074d4}.wh-putaway,.wh-transit{background:#f5f0fc;color:#9563c6}.wh-replenish,.wh-maintenance,.wh-dispatch{background:#fff2e9;color:#b97330}.wh-panel-foot{padding:12px 16px;color:#939ba6;font-size:9px;border-top:1px solid #e9ecef;display:flex;justify-content:space-between;gap:10px}.wh-capacity{height:3px;background:#edf0f3;width:68px;margin-top:4px;border-radius:3px;overflow:hidden}.wh-capacity i{display:block;background:#b2ed1d;height:100%}.wh-task-filters{display:flex;gap:15px;flex-wrap:wrap;background:#fff;border:1px solid #e3e5e8;padding:11px;border-radius:6px;margin-bottom:16px}.wh-task-filters>div{display:flex;align-items:center;gap:5px;flex-wrap:wrap}.wh-task-filters>div>span{font-size:10px;color:#909aa6;margin-right:3px}.wh-root .wh-task-filters button{font-size:9px;border:0;padding:5px 8px;background:#f5f6f8;color:#6b7786}.wh-root .wh-task-filters .wh-active{background:#b2ed1d;color:#253501}.wh-task-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:13px}.wh-task{background:#fff;border:1px solid #e3e5e8;border-radius:6px;padding:15px;min-width:0}.wh-task-head{display:flex;align-items:center;justify-content:space-between;gap:5px}.wh-task-head>strong{font-size:12px;font-family:ui-monospace,monospace}.wh-task-type{display:flex;gap:7px;align-items:center;margin:9px 0 16px;font-size:9px;color:#9aa1ac}.wh-task-sku{display:flex;flex-wrap:wrap;align-items:center;gap:7px;font-size:10px;color:#7e8998}.wh-task-sku b{margin-left:auto;font-weight:600;color:#344452;font-size:11px}.wh-route{display:flex;align-items:center;gap:6px;margin:12px 0 17px;font-size:9px;color:#7b8795}.wh-route span{overflow-wrap:anywhere}.wh-route em{font-style:normal;color:#bac0c8;padding:0 6px}.wh-task footer{display:flex;align-items:center;justify-content:space-between;gap:4px;border-top:1px solid #f0f1f3;padding-top:10px}.wh-task footer>span{display:flex;align-items:center;gap:4px;color:#929aa5;font-size:9px}.wh-root .wh-task footer button{font-size:9px;border:0;padding:4px;background:#fafafa;color:#465263}.wh-chart-grid{display:grid;grid-template-columns:1.65fr 1fr;gap:14px}.wh-panel>h3{padding:13px 15px;border-bottom:1px solid #eceef1;display:flex;align-items:center;justify-content:space-between;gap:8px}.wh-panel h3 span{font-weight:400;color:#9aa2ae;font-size:9px}.wh-line{display:block;width:100%;padding:12px 16px 0;max-height:230px}.wh-radar{display:block;height:210px;max-width:100%;margin:5px auto}.wh-legend{display:flex;justify-content:center;flex-wrap:wrap;gap:12px;padding:7px 8px 16px;font-size:8px;color:#8a929e}.wh-legend span{display:flex;align-items:center;gap:5px}.wh-legend i{width:5px;height:5px;border-radius:50%}.wh-cycle{padding:20px 18px 10px;display:grid;gap:17px}.wh-cycle>div{display:flex;align-items:center;gap:10px}.wh-cycle span{width:55px;font-size:9px;color:#8993a0}.wh-cycle>div>div{height:7px;background:#f1f3f5;flex:1;border-radius:2px;overflow:hidden}.wh-cycle i{height:100%;display:block;border-radius:2px}.wh-cycle b{font-size:10px;width:20px}.wh-insight{display:flex;align-items:flex-start;gap:8px;background:#fafafa;margin:13px;padding:10px;color:#87909b;font-size:9px;border-radius:5px}.wh-insight svg{color:#6e900c}.wh-bars{display:flex;align-items:flex-end;justify-content:space-between;gap:8px;padding:18px 18px 17px;height:179px}.wh-bars>div{flex:1;display:flex;flex-direction:column;align-items:center;gap:7px;font-size:8px;color:#969daa}.wh-bars b{font-size:9px;font-weight:500;color:#72808f}.wh-bars i{display:block;width:100%;border-radius:3px 3px 0 0;max-width:42px}.wh-root .wh-segment{background:#f0f2f4;padding:3px;border-radius:5px;display:flex;flex-shrink:0}.wh-root .wh-segment button{font-size:10px;border:0;background:transparent;padding:5px 9px;color:#8a939e}.wh-root .wh-segment .wh-active{background:white;color:#2a3746;box-shadow:0 1px 3px #00000008}.wh-master{display:grid;grid-template-columns:155px minmax(0,1fr);gap:14px}.wh-master-nav{border:1px solid #e3e5e8;background:#fff;border-radius:6px;padding:10px;height:fit-content}.wh-master-nav h3{padding:3px 4px 14px}.wh-root .wh-master-nav button{display:flex;width:100%;justify-content:flex-start;border:0;font-size:10px;color:#7f8996;padding:11px 7px}.wh-master-nav button small{margin-left:auto;font-size:9px;background:#f3f4f6;border-radius:10px;padding:1px 5px;color:#919aa7}.wh-root .wh-master-nav .wh-active{background:#b2ed1d;color:#243301}.wh-master-nav .wh-active small{background:#ffffff50;color:#425615}.wh-master-title{display:flex;align-items:center;justify-content:space-between;padding:13px;gap:10px;border-bottom:1px solid #eceef1}.wh-master-title h3{display:flex;align-items:center;gap:8px}.wh-master-title button{font-size:10px}.wh-bottom{position:relative;z-index:25;display:flex;align-items:center;justify-content:space-between;gap:12px;height:37px;flex-shrink:0;border-top:1px solid #e4e7eb;background:#fff;padding:0 15px;font-size:9px;color:#99a1ab}.wh-bottom>span:first-child{display:flex;align-items:center;gap:6px;color:#6e7986}.wh-bottom i{width:5px;height:5px;border-radius:50%;background:#b3bbc5}.wh-bottom i.wh-running{background:#8cbd00}.wh-root .wh-bottom button{font-size:9px;border:0;padding:3px 5px;background:transparent;color:#85909b}.wh-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;min-height:200px;color:#8d96a3}.wh-empty strong{font-weight:500}.wh-empty button{font-size:11px}
.wh-dialog-layer{position:absolute;inset:0;z-index:20;overflow:hidden;display:flex;justify-content:flex-end;pointer-events:none}.wh-root .wh-backdrop{position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:0;background:rgba(27,37,48,.12);cursor:default;pointer-events:auto;box-shadow:none}.wh-root .wh-backdrop:hover,.wh-root .wh-backdrop:focus,.wh-root .wh-backdrop:active,.wh-root .wh-backdrop:focus-visible{background:rgba(27,37,48,.12);border:0;box-shadow:none;outline:none}.wh-dialog{position:relative;background:white;width:420px;max-width:calc(100% - 20px);height:100%;border-left:1px solid #e3e6e9;box-shadow:-8px 0 24px #18233310;display:flex;flex-direction:column;outline:0;min-height:0;pointer-events:auto}.wh-dialog-head{display:flex;justify-content:space-between;align-items:center;padding:22px 22px 12px;gap:12px}.wh-eyebrow{color:#9aa2ac;font-size:9px}.wh-dialog-head h2{font-size:20px;margin-top:6px}.wh-dialog-description{color:#8d96a2;font-size:11px;padding:0 22px 18px;border-bottom:1px solid #eceef1;line-height:1.65}.wh-dialog-body{overflow:auto;overscroll-behavior:contain;padding:22px;min-height:0;flex:1;scrollbar-width:thin}.wh-dialog form>label{display:block;font-size:11px;font-weight:550;margin-bottom:18px}.wh-dialog form input,.wh-dialog form select{display:block;width:100%;padding:10px;border:1px solid #dfe3e8;border-radius:5px;margin-top:7px;height:39px;background:#fff;font-size:12px}.wh-form-summary{display:flex;align-items:center;gap:12px;padding:14px;background:#fafafa;border:1px solid #eef0f2;border-radius:5px;margin:23px 0}.wh-form-summary strong{display:block;font-size:11px;font-weight:550}.wh-form-summary span{font-size:10px;color:#8d96a2}.wh-form-summary svg{color:#8b96a4}.wh-dialog-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:24px;padding-top:16px;border-top:1px solid #eceef1}.wh-error{color:#c24b34;font-size:11px}.wh-detail-title{display:flex;align-items:center;gap:12px;margin-bottom:20px}.wh-detail-icon{width:46px;height:46px;border-radius:8px;background:#fafafa;display:grid;place-items:center;color:#8592a1}.wh-detail-title h3{font-size:14px}.wh-detail-title p{font-size:11px;color:#929ba7;margin-top:4px}.wh-details{margin:0}.wh-details>div{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:12px 0;border-bottom:1px solid #f0f1f3;font-size:11px}.wh-details dt{color:#929aa6;flex-shrink:0}.wh-details dd{margin:0;text-align:right;overflow-wrap:anywhere}.wh-timeline p{display:flex;gap:10px;margin:15px 0;font-size:11px;color:#637180}.wh-timeline i{width:7px;height:7px;border-radius:50%;background:#b2ed1d;flex-shrink:0;margin-top:5px}.wh-timeline small{display:block;font-size:10px;margin-top:3px;color:#a0a7b0}.wh-detail-badges{display:flex;align-items:center;gap:8px;margin-bottom:14px;color:#929ba8;font-size:10px}.wh-task-path{display:flex;align-items:center;gap:12px;padding:16px 10px;background:#fafafa;border-radius:6px;font-size:10px;margin:20px 0}.wh-task-path svg{color:#91a15e}.wh-task-path span{color:#abb2bc}.wh-check{display:flex;align-items:center;gap:8px;margin:12px 0;color:#707d8b;font-size:11px}.wh-check input{accent-color:#8bbd0b;width:15px;height:15px}.wh-metric-detail{display:flex;flex-direction:column;gap:6px}.wh-metric-detail>strong{font-size:39px;line-height:1.2}.wh-metric-detail>span{font-size:10px}.wh-mini-table{margin-top:20px;font-size:10px}.wh-mini-table>div{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:8px;padding:11px 5px;border-bottom:1px solid #eceef1;color:#8e98a4}.wh-mini-table b{color:#485564}.wh-mini-table strong{font-weight:550}.wh-cursor{position:absolute;top:0;left:0;z-index:40;pointer-events:none;display:flex;align-items:flex-end;gap:3px;transform-origin:0 0}.wh-cursor>i{position:absolute;width:32px;height:32px;left:-14px;top:-14px;border:2px solid #a5d92c;border-radius:50%}.wh-hints [data-hit]:not(.wh-table-wrap):not(.wh-backdrop):not(:disabled){outline:none!important;background:rgba(178,237,29,.22)!important;box-shadow:inset 0 0 0 1px rgba(145,197,0,.22);transition:background .15s ease,box-shadow .15s ease}.wh-hints .wh-dialog-layer~*{outline:none}.wh-hint,.wh-notice{position:absolute;bottom:16px;left:50%;transform:translateX(-50%);z-index:30;display:flex;align-items:center;gap:8px;padding:10px 14px;border:1px solid #e1e5e9;border-radius:7px;background:white;color:#5c6978;font-size:11px;max-width:calc(100% - 24px);box-shadow:0 4px 12px #15223312;pointer-events:none}.wh-notice{bottom:58px}.wh-notice svg{color:#599100}
@container (max-width:1050px){.wh-sidebar{width:152px}.wh-brand b{font-size:13px}.wh-brand em{display:none}.wh-content{padding:18px}.wh-topbar{padding:0 18px}.wh-six{grid-template-columns:repeat(3,minmax(0,1fr));gap:9px}.wh-six .wh-stat{padding:11px 13px}.wh-six .wh-stat strong{font-size:21px;margin:6px 0 0}.wh-six .wh-stat small{display:none}.wh-task-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.wh-master{grid-template-columns:130px minmax(0,1fr)}.wh-top-actions{gap:10px}.wh-date{display:none}.wh-root .wh-nav{font-size:10px}.wh-toolbar{gap:8px}.wh-filters{justify-content:flex-start}.wh-root h2{font-size:20px}.wh-kpi{padding:12px}.wh-root .wh-kpi strong{font-size:24px}.wh-bottom-note{display:none}}
@container (max-width:760px){.wh-sidebar{width:57px;padding:0 8px}.wh-brand>span{width:32px;height:32px}.wh-brand b,.wh-brand .wh-collapse,.wh-nav-label,.wh-nav span,.wh-nav i,.wh-sidebar-foot{display:none}.wh-root .wh-nav{justify-content:center;padding:11px 5px}.wh-heading{align-items:flex-start}.wh-heading p{max-width:260px}.wh-chart-grid{grid-template-columns:1fr}.wh-four{grid-template-columns:repeat(2,minmax(0,1fr))}.wh-stat>div:first-child{font-size:10px}.wh-kpi>strong{margin-top:8px}.wh-kpi .wh-stat-icon{width:25px;height:25px}.wh-kpi small{font-size:9px}.wh-master{grid-template-columns:1fr}.wh-master-nav{display:flex;gap:4px;overflow:auto;padding:7px}.wh-master-nav h3{display:none}.wh-root .wh-master-nav button{width:auto;flex-shrink:0;padding:7px}.wh-master-nav button small{margin-left:3px}.wh-master-nav svg{display:none}.wh-root .wh-three .wh-stat-button{padding:11px;gap:8px}.wh-three .wh-stat-icon{width:26px;height:26px}.wh-three .wh-stat-button>svg{display:none}.wh-stat-button strong{font-size:19px}.wh-task-filters{gap:9px}.wh-heading .wh-primary{font-size:10px}.wh-heading p{font-size:10px}.wh-top-actions .wh-online{font-size:9px}.wh-trend .wh-line{max-height:240px}.wh-radar{height:190px}}
@container (max-width:520px){.wh-root{font-size:12px}.wh-sidebar{display:none}.wh-topbar{height:52px;padding:0 14px}.wh-topbar strong{font-size:13px}.wh-topbar>div>span:first-child:not(.wh-online){font-size:7px}.wh-locale{padding-left:8px}.wh-online{font-size:0!important}.wh-online i{width:6px;height:6px}.wh-mobile-nav{display:flex;justify-content:space-around;padding:6px;background:white;border-bottom:1px solid #e7e9ed;gap:4px;flex-shrink:0}.wh-root .wh-mobile-nav button{flex:1;border:0;font-size:9px;gap:4px;padding:10px 3px;min-height:38px;color:#87929e}.wh-root .wh-mobile-nav .wh-active{background:#b2ed1d;color:#2b3c05}.wh-content{padding:16px 12px}.wh-heading{gap:8px;margin-bottom:15px;flex-wrap:wrap}.wh-heading h2{font-size:20px}.wh-heading p{font-size:10px;max-width:none}.wh-heading .wh-primary{font-size:10px;padding:7px 9px;margin-top:2px}.wh-stats{gap:8px;margin-bottom:14px}.wh-six .wh-stat{padding:10px}.wh-six .wh-stat>div{font-size:9px}.wh-six .wh-stat>div>svg{display:none}.wh-six .wh-stat strong{font-size:23px}.wh-toolbar{padding:10px}.wh-filters{width:100%;flex-wrap:wrap}.wh-search{flex:1;width:160px}.wh-root .wh-tabs button{font-size:10px;padding:10px 7px}.wh-tabs{width:100%;gap:0}.wh-tabs button span{font-size:8px}.wh-root th{font-size:9px}.wh-root td{font-size:11px;padding:13px 9px}.wh-panel-foot>span{display:none}.wh-task-grid{grid-template-columns:1fr;gap:11px}.wh-root .wh-three .wh-stat-button{gap:7px;padding:11px 8px}.wh-three .wh-stat-icon{display:none}.wh-three .wh-stat-button>div>span{font-size:9px}.wh-task{padding:15px}.wh-task-head>strong{font-size:13px}.wh-task-sku,.wh-route{font-size:11px}.wh-task footer>span,.wh-root .wh-task footer button{font-size:10px}.wh-task-filters{padding:10px}.wh-task-filters>div{gap:4px}.wh-root .wh-task-filters button{font-size:9px;padding:6px 7px}.wh-task-type{margin-bottom:15px}.wh-kpi>strong{font-size:28px!important}.wh-kpi>span{font-size:11px}.wh-kpi{padding:14px!important}.wh-legend{gap:8px;font-size:8px}.wh-dialog{width:100%;max-width:100%;border:0}.wh-dialog-head{padding:20px 18px 12px}.wh-dialog-description{padding:0 18px 16px}.wh-dialog-body{padding:18px}.wh-bottom{padding:0 10px;font-size:8px;gap:5px}.wh-root .wh-bottom button{font-size:8px}.wh-root .wh-master-nav button{font-size:10px}.wh-root input{font-size:16px!important}.wh-search input{font-size:12px!important}.wh-hint{font-size:10px;white-space:nowrap}}
@media(prefers-reduced-motion:reduce){.wh-cursor{display:none}}
`),
      M(Zt, {
        language: {
          type: U.Enum,
          title: `Language`,
          options: [`auto`, `en`, `zh`, `ja`],
          optionTitles: [`Follow website`, `English`, `中文`, `日本語`],
          defaultValue: `auto`,
        },
        autoplay: { type: U.Boolean, title: `Auto demo`, defaultValue: !0 },
        initialPage: {
          type: U.Enum,
          title: `Start page`,
          options: [`containers`, `tasks`, `kpi`, `master`],
          optionTitles: [`Containers`, `Tasks`, `KPI Reports`, `Master Data`],
          defaultValue: `containers`,
        },
        borderRadius: {
          type: U.Number,
          title: `Radius`,
          defaultValue: 12,
          min: 0,
          max: 32,
          step: 1,
        },
      }));
  }))();
}
function yn({ supervisor: e = !1 }) {
  return /*#__PURE__*/ _(`svg`, {
    width: `20`,
    height: `20`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `1.7`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    "aria-hidden": `true`,
    children: [
      /*#__PURE__*/ g(`circle`, { cx: `12`, cy: `7`, r: `4` }),
      /*#__PURE__*/ g(`path`, { d: `M5 21v-2a7 7 0 0 1 14 0v2` }),
      e && /*#__PURE__*/ g(`path`, { d: `m9 18 2 2 4-4` }),
    ],
  });
}
function bn({ language: e = `en`, style: t }) {
  let { activeLocale: r } = G(),
    a = (r?.code || e).toLowerCase().startsWith(`zh`),
    o = (e) => e[+!!a],
    [s, c] = y(1),
    [d, f] = y(null),
    p = xn[s],
    m = l(null),
    h = d !== null && d < 560,
    b = { "--role-anchor": `${((s + 0.5) * 100) / 4}%` };
  v(() => {
    if (u === void 0) return;
    let e = m.current;
    if (!e) return;
    let t = (e) => {
      let t = Math.round(e);
      i(() => {
        f((e) => (e === t ? e : t));
      });
    };
    if ((t(e.getBoundingClientRect().width), typeof ResizeObserver > `u`)) {
      let e = () => {
        m.current && t(m.current.getBoundingClientRect().width);
      };
      return (
        u.addEventListener(`resize`, e, { passive: !0 }),
        () => u.removeEventListener(`resize`, e)
      );
    }
    let n = new ResizeObserver((e) => {
      let n = e[0];
      n && t(n.contentRect.width);
    });
    return (n.observe(e), () => n.disconnect());
  }, []);
  let x = n(() => ({ ...t, height: h ? `auto` : (t?.height ?? 490) }), [h, t]);
  return /*#__PURE__*/ _(`div`, {
    ref: m,
    className: `wrh${h ? ` is-narrow` : ``}`,
    style: x,
    children: [
      /*#__PURE__*/ g(`style`, {
        children: `
                .wrh,
                .wrh * {
                    box-sizing: border-box;
                }

                .wrh {
                    width: 660px;
                    max-width: 100%;
                    min-width: 0;
                    background: #ffffff;
                    border: 1px solid #e4e4e4;
                    border-radius: 10px;
                    font-family: "IBM Plex Sans", Arial, sans-serif;
                    color: #050b14;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    container-type: inline-size;
                }

                .wrh button {
                    font: inherit;
                    cursor: pointer;
                }

                .wrh header {
                    height: 65px;
                    padding: 0 22px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-bottom: 1px solid #ececec;
                    flex-shrink: 0;
                }

                .wrh header strong {
                    font-size: 16px;
                    font-weight: 500;
                }

                .wrh header span {
                    font-size: 12px;
                    color: #878787;
                }

                .wrh main {
                    padding: 18px 22px;
                    overflow: auto;
                    flex: 1;
                    min-height: 0;
                    min-width: 0;
                }

                .wrh .relations {
                    position: relative;
                    height: 35px;
                    min-width: 0;
                }

                .wrh .handoffs {
                    display: flex;
                    margin-left: calc((100% - 30px) / 8);
                    width: calc((100% - 30px) / 2 + 20px);
                    height: 35px;
                    align-items: flex-end;
                    min-width: 0;
                }

                .wrh .handoffs > div {
                    width: 50%;
                    height: 22px;
                    border: 1px solid #ccd8b6;
                    border-bottom: 0;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                }

                .wrh .handoffs > div + div {
                    border-left: 0;
                }

                .wrh .handoffs span {
                    background: #ffffff;
                    padding: 0 7px;
                    font-size: 11px;
                    color: #7c856e;
                    transform: translateY(-8px);
                    white-space: nowrap;
                }

                .wrh .oversight {
                    position: absolute;
                    top: 5px;
                    left: calc(75% + 7.5px);
                    width: calc((100% - 30px) / 4);
                    text-align: center;
                    font-size: 11px;
                    color: #7c856e;
                    line-height: 14px;
                }

                .wrh .flow {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 10px;
                    align-items: start;
                    min-width: 0;
                }

                .wrh .role {
                    height: auto;
                    min-width: 0;
                    border: 1px solid #e8e8e8;
                    background: #ffffff;
                    border-radius: 8px;
                    text-align: center;
                    padding: 16px 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                }

                .wrh .role:hover {
                    border-color: #a2d81a;
                }

                .wrh .role.active {
                    background: #fbfef5;
                    border-color: #a2d81a;
                }

                .wrh .icon {
                    display: grid;
                    place-items: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: #b2ed1d;
                    flex-shrink: 0;
                }

                .wrh .role strong {
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 1.4;
                    white-space: normal;
                    word-break: normal;
                    overflow-wrap: break-word;
                    letter-spacing: -0.2px;
                    min-height: 39px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 0;
                }

                .wrh .detail {
                    margin-top: 20px;
                    border: 1px solid #e0e8d5;
                    border-radius: 8px;
                    padding: 20px;
                    background: #ffffff;
                    position: relative;
                }

                .wrh .detail::before {
                    content: "";
                    position: absolute;
                    top: -7px;
                    left: calc(var(--role-anchor) - 7px);
                    width: 12px;
                    height: 12px;
                    background: #ffffff;
                    border-left: 1px solid #e0e8d5;
                    border-top: 1px solid #e0e8d5;
                    transform: rotate(45deg);
                }

                .wrh .detail-title {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                }

                .wrh .detail-title h3 {
                    margin: 0;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 1.35;
                    min-width: 0;
                    overflow-wrap: break-word;
                }

                .wrh .detail-title > span {
                    font-size: 12px;
                    color: #878787;
                    flex-shrink: 0;
                }

                .wrh .items {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    margin-top: 19px;
                }

                .wrh .items > span {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 15px;
                    line-height: 1.45;
                    min-width: 0;
                    overflow-wrap: break-word;
                }

                .wrh .items b {
                    color: #648c10;
                    font-size: 12px;
                    font-weight: 400;
                    display: grid;
                    place-items: center;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #f0f8e2;
                    flex-shrink: 0;
                }

                .wrh button:focus-visible {
                    outline: 2px solid #a2d81a;
                    outline-offset: 3px;
                }

                .wrh.is-narrow {
                    overflow: visible;
                }

                .wrh.is-narrow header {
                    height: auto;
                    min-height: 65px;
                    padding: 14px 16px;
                    gap: 10px;
                    align-items: flex-start;
                    flex-direction: column;
                }

                .wrh.is-narrow main {
                    padding: 16px;
                    overflow: visible;
                    flex: initial;
                }

                .wrh.is-narrow .relations {
                    display: none;
                }

                .wrh.is-narrow .flow {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 8px;
                }

                .wrh.is-narrow .role {
                    padding: 10px;
                    gap: 8px;
                    min-height: 0;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    text-align: left;
                }

                .wrh.is-narrow .role strong {
                    min-height: 0;
                    justify-content: flex-start;
                    text-align: left;
                    font-size: 14px;
                    line-height: 1.4;
                    overflow-wrap: normal;
                    word-break: normal;
                }

                .wrh.is-narrow .detail {
                    margin-top: 16px;
                    padding: 16px;
                }

                .wrh.is-narrow .detail-title {
                    align-items: flex-start;
                    flex-direction: column;
                    gap: 6px;
                }

                .wrh.is-narrow .detail::before {
                    display: none;
                }

                .wrh.is-narrow .icon {
                    width: 26px;
                    height: 26px;
                }

                .wrh.is-narrow .icon svg {
                    width: 14px;
                    height: 14px;
                }

                .wrh.is-narrow .items > span {
                    align-items: flex-start;
                }
            `,
      }),
      /*#__PURE__*/ _(`header`, {
        children: [
          /*#__PURE__*/ g(`strong`, { children: o([`Roles & handovers`, `角色与交接`]) }),
          /*#__PURE__*/ g(`span`, { children: o([`Select a role`, `点击查看职责`]) }),
        ],
      }),
      /*#__PURE__*/ _(`main`, {
        children: [
          /*#__PURE__*/ _(`div`, {
            className: `relations`,
            children: [
              /*#__PURE__*/ _(`div`, {
                className: `handoffs`,
                children: [
                  /*#__PURE__*/ g(`div`, {
                    children: /*#__PURE__*/ g(`span`, {
                      children: o([`Incoming handover`, `入库交接`]),
                    }),
                  }),
                  /*#__PURE__*/ g(`div`, {
                    children: /*#__PURE__*/ g(`span`, {
                      children: o([`Outgoing handover`, `出库交接`]),
                    }),
                  }),
                ],
              }),
              /*#__PURE__*/ g(`span`, {
                className: `oversight`,
                children: o([`Oversee handovers`, `统筹交接`]),
              }),
            ],
          }),
          /*#__PURE__*/ g(`div`, {
            className: `flow`,
            children: xn.map((e, t) =>
              /*#__PURE__*/ _(
                `button`,
                {
                  type: `button`,
                  className: `role ${s === t ? `active` : ``}`,
                  "aria-pressed": s === t,
                  "aria-controls": `wrh-responsibilities`,
                  onClick: () => i(() => c(t)),
                  children: [
                    /*#__PURE__*/ g(`span`, {
                      className: `icon`,
                      children: /*#__PURE__*/ g(yn, { supervisor: t === 3 }),
                    }),
                    /*#__PURE__*/ g(`strong`, {
                      children:
                        t === 1 && !a && !h
                          ? /*#__PURE__*/ _(`span`, {
                              children: [`Warehouse`, /*#__PURE__*/ g(`br`, {}), `staff`],
                            })
                          : o(e.name),
                    }),
                  ],
                },
                t
              )
            ),
          }),
          /*#__PURE__*/ _(`div`, {
            id: `wrh-responsibilities`,
            className: `detail`,
            "aria-live": `polite`,
            style: b,
            children: [
              /*#__PURE__*/ _(`div`, {
                className: `detail-title`,
                children: [
                  /*#__PURE__*/ g(`h3`, { children: o(p.name) }),
                  /*#__PURE__*/ g(`span`, { children: o([`Responsibilities`, `职责`]) }),
                ],
              }),
              /*#__PURE__*/ g(`div`, {
                className: `items`,
                children: p.items.map((e, t) =>
                  /*#__PURE__*/ _(
                    `span`,
                    {
                      children: [
                        /*#__PURE__*/ g(`b`, { "aria-hidden": `true`, children: `✓` }),
                        o(e),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var xn;
function Sn() {
  return (Sn = e(() => {
    (d(),
      f(),
      o(),
      L(),
      (xn = [
        {
          name: [`Purchasing / Production`, `采购 / 生产`],
          items: [
            [`Provide source documents`, `提供来源单据`],
            [`Identify material & batch`, `明确物料与批次`],
            [`Hand over materials`, `交接待入库物料`],
          ],
        },
        {
          name: [`Warehouse staff`, `仓库人员`],
          items: [
            [`Receive & put away`, `收货并上架`],
            [`Pick by batch`, `按批次拣货`],
            [`Verify issued quantity`, `核验出库数量`],
          ],
        },
        {
          name: [`Department / Customer`, `领用部门 / 客户`],
          items: [
            [`Check material & batch`, `核对物料与批次`],
            [`Check received quantity`, `核对实收数量`],
            [`Confirm the handover`, `确认交接`],
          ],
        },
        {
          name: [`Warehouse supervisor`, `仓库主管`],
          items: [
            [`Assign work`, `分配工作`],
            [`Resolve discrepancies`, `处理差异`],
            [`Follow up open handovers`, `跟进未完成交接`],
          ],
        },
      ]),
      M(bn, {
        language: {
          type: U.Enum,
          options: [`en`, `zh`],
          optionTitles: [`English`, `中文`],
          defaultValue: `en`,
          title: `Language`,
        },
      }));
  }))();
}
function Cn({ name: e }) {
  return /*#__PURE__*/ g(`svg`, {
    className: `wun-icon`,
    width: `16`,
    height: `16`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `2`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    "aria-hidden": `true`,
    children: {
      tree: /*#__PURE__*/ _(m, {
        children: [
          /*#__PURE__*/ g(`path`, { d: `M21 12h-8` }),
          /*#__PURE__*/ g(`path`, { d: `M21 6H8` }),
          /*#__PURE__*/ g(`path`, { d: `M21 18h-8` }),
          /*#__PURE__*/ g(`path`, { d: `M3 6v4a2 2 0 0 0 2 2h3` }),
          /*#__PURE__*/ g(`path`, { d: `M3 10v6a2 2 0 0 0 2 2h3` }),
        ],
      }),
      folder: /*#__PURE__*/ g(`path`, {
        d: `M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2Z`,
      }),
      scan: /*#__PURE__*/ _(m, {
        children: [
          /*#__PURE__*/ g(`path`, { d: `M4 7V4h3` }),
          /*#__PURE__*/ g(`path`, { d: `M17 4h3v3` }),
          /*#__PURE__*/ g(`path`, { d: `M20 17v3h-3` }),
          /*#__PURE__*/ g(`path`, { d: `M7 20H4v-3` }),
          /*#__PURE__*/ g(`path`, { d: `M7 8h10` }),
          /*#__PURE__*/ g(`path`, { d: `M7 12h10` }),
          /*#__PURE__*/ g(`path`, { d: `M7 16h10` }),
        ],
      }),
      file: /*#__PURE__*/ _(m, {
        children: [
          /*#__PURE__*/ g(`path`, {
            d: `M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z`,
          }),
          /*#__PURE__*/ g(`path`, { d: `M14 2v6h6` }),
          /*#__PURE__*/ g(`path`, { d: `M8 13h8` }),
          /*#__PURE__*/ g(`path`, { d: `M8 17h8` }),
        ],
      }),
      down: /*#__PURE__*/ g(`path`, { d: `m6 9 6 6 6-6` }),
      right: /*#__PURE__*/ g(`path`, { d: `m9 18 6-6-6-6` }),
    }[e],
  });
}
function wn({ language: e = `en`, accent: t = `#B2ED1D`, radius: n = 10, style: r }) {
  let { activeLocale: i } = G(),
    a = i?.code,
    o = a ? (a.toLowerCase().startsWith(`zh`) ? `zh` : `en`) : e,
    s = (e) => e[+(o === `zh`)],
    [c, l] = y(`scan`),
    [u, d] = y(`stock_movements`),
    [f, p] = y(!0),
    [h, v] = y(!0),
    b = Tn.find((e) => e.key === c) || Tn[0],
    x = (e) => {
      (l(e.key), d(e.destination), p(!0), v(!0));
    };
  return /*#__PURE__*/ _(`section`, {
    className: `wun`,
    lang: o,
    "aria-label": s([`Warehouse UNS`, `仓库 UNS`]),
    style: { width: 660, height: 490, ...r, borderRadius: n, "--wun-accent": t },
    children: [
      /*#__PURE__*/ g(`style`, { children: An }),
      /*#__PURE__*/ _(`header`, {
        className: `wun-header`,
        children: [
          /*#__PURE__*/ g(`span`, {
            className: `wun-brand`,
            children: /*#__PURE__*/ g(Cn, { name: `tree` }),
          }),
          /*#__PURE__*/ g(`strong`, { children: `UNS` }),
        ],
      }),
      /*#__PURE__*/ g(`nav`, {
        className: `wun-tabs`,
        "aria-label": s([`Data sources`, `数据来源`]),
        children: Tn.map((e) =>
          /*#__PURE__*/ g(
            `button`,
            {
              type: `button`,
              "aria-pressed": c === e.key,
              onClick: () => x(e),
              children: s(e.title),
            },
            e.key
          )
        ),
      }),
      /*#__PURE__*/ _(`div`, {
        className: `wun-body`,
        children: [
          /*#__PURE__*/ _(`div`, {
            className: `wun-source`,
            children: [
              /*#__PURE__*/ _(`div`, {
                className: `wun-source-top`,
                children: [
                  /*#__PURE__*/ g(Cn, { name: c === `scan` ? `scan` : `file` }),
                  /*#__PURE__*/ g(`strong`, { children: s(b.heading) }),
                  /*#__PURE__*/ g(`span`, { className: `wun-tag`, children: `FG-B / B2409` }),
                ],
              }),
              /*#__PURE__*/ g(`p`, { children: s(b.description) }),
            ],
          }),
          /*#__PURE__*/ _(`div`, {
            className: `wun-workspace`,
            children: [
              /*#__PURE__*/ _(`aside`, {
                className: `wun-tree`,
                "aria-label": s([`Namespace`, `命名空间`]),
                children: [
                  /*#__PURE__*/ g(`div`, {
                    className: `wun-panel-title`,
                    children: s([`Namespace`, `命名空间`]),
                  }),
                  /*#__PURE__*/ _(`button`, {
                    type: `button`,
                    className: `wun-folder wun-factory`,
                    "aria-expanded": f,
                    onClick: () => p((e) => !e),
                    children: [
                      /*#__PURE__*/ g(`span`, {
                        className: `wun-chevron`,
                        children: /*#__PURE__*/ g(Cn, { name: f ? `down` : `right` }),
                      }),
                      /*#__PURE__*/ g(Cn, { name: `folder` }),
                      /*#__PURE__*/ g(`span`, { children: `工厂 A` }),
                    ],
                  }),
                  f &&
                    /*#__PURE__*/ _(m, {
                      children: [
                        /*#__PURE__*/ _(`button`, {
                          type: `button`,
                          className: `wun-folder wun-warehouse`,
                          "aria-expanded": h,
                          onClick: () => v((e) => !e),
                          children: [
                            /*#__PURE__*/ g(`span`, {
                              className: `wun-chevron`,
                              children: /*#__PURE__*/ g(Cn, { name: h ? `down` : `right` }),
                            }),
                            /*#__PURE__*/ g(Cn, { name: `folder` }),
                            /*#__PURE__*/ g(`span`, { children: `仓库 01` }),
                          ],
                        }),
                        h &&
                          En.map((e) =>
                            /*#__PURE__*/ _(
                              `button`,
                              {
                                type: `button`,
                                className: `wun-topic`,
                                "aria-pressed": u === e,
                                onClick: () => d(e),
                                children: [
                                  /*#__PURE__*/ g(Cn, { name: `file` }),
                                  /*#__PURE__*/ g(`span`, { children: s(On[e]) }),
                                ],
                              },
                              e
                            )
                          ),
                      ],
                    }),
                ],
              }),
              /*#__PURE__*/ _(`article`, {
                className: `wun-detail`,
                children: [
                  /*#__PURE__*/ g(`div`, {
                    className: `wun-panel-title`,
                    children: /*#__PURE__*/ g(`strong`, { children: s(Dn[u]) }),
                  }),
                  /*#__PURE__*/ g(`div`, {
                    className: `wun-detail-content`,
                    children:
                      u === `stock_movements`
                        ? /*#__PURE__*/ _(`table`, {
                            children: [
                              /*#__PURE__*/ g(`thead`, {
                                children: /*#__PURE__*/ _(`tr`, {
                                  children: [
                                    /*#__PURE__*/ g(`th`, {
                                      scope: `col`,
                                      children: s([`Time / document`, `时间 / 单据`]),
                                    }),
                                    /*#__PURE__*/ g(`th`, {
                                      scope: `col`,
                                      children: s([`Movement`, `动作`]),
                                    }),
                                    /*#__PURE__*/ g(`th`, {
                                      scope: `col`,
                                      children: s([`Cases`, `箱数`]),
                                    }),
                                  ],
                                }),
                              }),
                              /*#__PURE__*/ g(`tbody`, {
                                children: kn.map((e) =>
                                  /*#__PURE__*/ _(
                                    `tr`,
                                    {
                                      children: [
                                        /*#__PURE__*/ _(`td`, {
                                          children: [
                                            e.time,
                                            /*#__PURE__*/ g(`small`, { children: e.document }),
                                          ],
                                        }),
                                        /*#__PURE__*/ g(`td`, { children: s(e.label) }),
                                        /*#__PURE__*/ g(`td`, { children: e.quantity }),
                                      ],
                                    },
                                    e.document
                                  )
                                ),
                              }),
                            ],
                          })
                        : u === `inventory`
                          ? /*#__PURE__*/ _(m, {
                              children: [
                                /*#__PURE__*/ _(`div`, {
                                  className: `wun-stock-grid`,
                                  children: [
                                    /*#__PURE__*/ _(`div`, {
                                      children: [
                                        /*#__PURE__*/ g(`small`, {
                                          children: s([`Material`, `物料`]),
                                        }),
                                        /*#__PURE__*/ g(`strong`, { children: `FG-B` }),
                                      ],
                                    }),
                                    /*#__PURE__*/ _(`div`, {
                                      children: [
                                        /*#__PURE__*/ g(`small`, {
                                          children: s([`Batch`, `批次`]),
                                        }),
                                        /*#__PURE__*/ g(`strong`, { children: `B2409` }),
                                      ],
                                    }),
                                    /*#__PURE__*/ _(`div`, {
                                      children: [
                                        /*#__PURE__*/ g(`small`, {
                                          children: s([`Recorded stock`, `记录库存`]),
                                        }),
                                        /*#__PURE__*/ g(`strong`, {
                                          children: s([`62 cases`, `62 箱`]),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ _(`table`, {
                                  className: `wun-location-table`,
                                  children: [
                                    /*#__PURE__*/ g(`thead`, {
                                      children: /*#__PURE__*/ _(`tr`, {
                                        children: [
                                          /*#__PURE__*/ g(`th`, {
                                            scope: `col`,
                                            children: s([`Location`, `库位`]),
                                          }),
                                          /*#__PURE__*/ g(`th`, {
                                            scope: `col`,
                                            children: s([`Cases`, `箱数`]),
                                          }),
                                        ],
                                      }),
                                    }),
                                    /*#__PURE__*/ _(`tbody`, {
                                      children: [
                                        /*#__PURE__*/ _(`tr`, {
                                          children: [
                                            /*#__PURE__*/ g(`td`, { children: `B-01` }),
                                            /*#__PURE__*/ g(`td`, { children: `41` }),
                                          ],
                                        }),
                                        /*#__PURE__*/ _(`tr`, {
                                          children: [
                                            /*#__PURE__*/ g(`td`, { children: `B-02` }),
                                            /*#__PURE__*/ g(`td`, { children: `21` }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : /*#__PURE__*/ _(m, {
                              children: [
                                /*#__PURE__*/ _(`table`, {
                                  children: [
                                    /*#__PURE__*/ g(`thead`, {
                                      children: /*#__PURE__*/ _(`tr`, {
                                        children: [
                                          /*#__PURE__*/ g(`th`, {
                                            scope: `col`,
                                            children: s([`Opening`, `期初`]),
                                          }),
                                          /*#__PURE__*/ g(`th`, {
                                            scope: `col`,
                                            children: s([`Received`, `收货`]),
                                          }),
                                          /*#__PURE__*/ g(`th`, {
                                            scope: `col`,
                                            children: s([`Issued`, `发货`]),
                                          }),
                                          /*#__PURE__*/ g(`th`, {
                                            scope: `col`,
                                            children: s([`Recorded`, `记录`]),
                                          }),
                                        ],
                                      }),
                                    }),
                                    /*#__PURE__*/ g(`tbody`, {
                                      children: /*#__PURE__*/ _(`tr`, {
                                        children: [
                                          /*#__PURE__*/ g(`td`, { children: `60` }),
                                          /*#__PURE__*/ g(`td`, { children: `+20` }),
                                          /*#__PURE__*/ g(`td`, { children: `−15` }),
                                          /*#__PURE__*/ g(`td`, { children: `62` }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ _(`div`, {
                                  className: `wun-reconcile`,
                                  children: [
                                    /*#__PURE__*/ g(`span`, {
                                      children: s([
                                        `Expected 65 · Recorded 62`,
                                        `应结存 65 · 记录 62`,
                                      ]),
                                    }),
                                    /*#__PURE__*/ g(`b`, { children: s([`−3 cases`, `−3 箱`]) }),
                                  ],
                                }),
                              ],
                            }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Tn, En, Dn, On, kn, An;
function jn() {
  return (jn = e(() => {
    (f(),
      o(),
      L(),
      (Tn = [
        {
          key: `scan`,
          title: [`Scanners / Handhelds`, `扫码枪 / 手持设备`],
          heading: [`Receipt confirmed`, `扫码收货确认`],
          description: [
            `Material, batch and quantity confirmed by a warehouse scan.`,
            `扫码确认物料、批次与实际收货数量。`,
          ],
          destination: `stock_movements`,
        },
        {
          key: `erp`,
          title: [`ERP / MES`, `ERP / MES`],
          heading: [`Dispatch order`, `出库单据`],
          description: [
            `Order requirements linked to the same material and batch.`,
            `订单需求关联到同一物料与批次。`,
          ],
          destination: `inventory`,
        },
        {
          key: `records`,
          title: [`Warehouse records`, `仓库业务记录`],
          heading: [`Daily stock record`, `日结库存记录`],
          description: [
            `Opening, receipts and issues combined for daily reconciliation.`,
            `汇总期初与收发记录，用于日结对账。`,
          ],
          destination: `daily_stock_check`,
        },
      ]),
      (En = [`inventory`, `stock_movements`, `daily_stock_check`]),
      (Dn = {
        inventory: [`Inventory`, `库存`],
        stock_movements: [`Stock movements`, `收发流水`],
        daily_stock_check: [`Daily reconciliation`, `日结对账`],
      }),
      (On = {
        inventory: [`Batch inventory`, `批次库存`],
        stock_movements: [`Stock movements`, `收发流水`],
        daily_stock_check: [`Daily reconciliation`, `日结对账`],
      }),
      (kn = [
        { time: `09:10`, document: `DN-2401`, label: [`Receipt`, `收货`], quantity: `+20` },
        { time: `10:00`, document: `TR-0919`, label: [`Transfer`, `移库`], quantity: `20` },
        { time: `11:30`, document: `DN-2402`, label: [`Dispatch`, `发货`], quantity: `−15` },
      ]),
      M(wn, {
        language: {
          type: U.Enum,
          title: `Fallback`,
          options: [`en`, `zh`],
          optionTitles: [`English`, `中文`],
          defaultValue: `en`,
        },
        accent: { type: U.Color, title: `Accent`, defaultValue: `#B2ED1D` },
        radius: { type: U.Number, title: `Radius`, defaultValue: 10, min: 0, max: 24, step: 1 },
      }),
      (An = `
.wun {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    container-type: inline-size;
    overflow: hidden;
    background: #fff;
    border: 1px solid #ebebeb;
    box-shadow: 0 4px 16px rgba(0, 0, 0, .06);
    color: #050b14;
    font-family: "IBM Plex Sans", "PingFang SC", Arial, sans-serif;
    font-size: 12px;
    line-height: 1.45;
    text-align: left;
    -webkit-font-smoothing: antialiased;
}

.wun * {
    box-sizing: border-box;
}

.wun p {
    margin: 0;
}

.wun button {
    font: inherit;
    color: inherit;
    background: none;
    border: 0;
    margin: 0;
    cursor: pointer;
    touch-action: manipulation;
}

.wun button:hover {
    background: #f5f5f5;
}

.wun button:focus-visible {
    outline: 2px solid #050b14;
    outline-offset: -2px;
}

.wun strong,
.wun b {
    font-weight: 500;
}

.wun .wun-icon {
    display: block;
    width: 16px;
    height: 16px;
    flex: 0 0 16px;
}

.wun-header {
    height: 40px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 14px;
    border-bottom: 1px solid #ebebeb;
}

.wun-header > strong {
    font-size: 14px;
    font-weight: 600;
}

.wun-brand {
    width: 20px;
    height: 24px;
    background: transparent;
    display: grid;
    place-items: center;
}

.wun-tabs {
    height: 38px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px 14px;
    border-bottom: 1px solid #ebebeb;
    overflow-x: auto;
    scrollbar-width: none;
}

.wun-tabs button {
    white-space: nowrap;
    padding: 3px 8px;
    min-height: 24px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    background: #fff;
    color: #717171;
    font-size: 12px;
}

.wun-tabs button[aria-pressed="true"] {
    background: var(--wun-accent);
    border-color: var(--wun-accent);
    color: #050b14;
    font-weight: 500;
}

.wun-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    overflow: auto;
    padding: 12px 14px 8px;
    scrollbar-width: thin;
    scrollbar-color: #d5d5d5 transparent;
}

.wun-source {
    flex-shrink: 0;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    padding: 10px 12px;
    background: #fff;
}

.wun-source-top {
    display: flex;
    align-items: center;
    gap: 6px;
}

.wun-source-top > .wun-icon {
    color: #619900;
}

.wun-source-top > strong {
    font-size: 13px;
    font-weight: 600;
}

.wun-tag {
    font-size: 10px;
    line-height: 17px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    padding: 0 5px;
    color: #737373;
    background: #fff;
    white-space: nowrap;
}

.wun-source-top > .wun-tag {
    margin-left: auto;
}

.wun-source p {
    font-size: 12px;
    line-height: 18px;
    color: #62666b;
    margin-top: 5px;
}

.wun-workspace {
    flex: 1;
    min-height: 284px;
    margin-top: 12px;
    display: grid;
    grid-template-columns: 220px minmax(0, 1fr);
    border: 1px solid #ebebeb;
    border-radius: 4px;
    overflow: hidden;
}

.wun-tree {
    background: #fff;
    border-right: 1px solid #ebebeb;
    padding-bottom: 10px;
}

.wun-panel-title {
    height: 32px;
    background: #fafafa;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 10px;
    font-size: 13px;
    font-weight: 500;
}

.wun .wun-tree .wun-icon {
    width: 14px;
    height: 14px;
    flex-basis: 14px;
    color: #737373;
}

.wun-folder {
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
    height: 29px;
    padding-right: 8px;
    text-align: left;
    font-size: 12px;
    line-height: 18px;
}

.wun-folder > .wun-chevron {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    flex: 0 0 14px;
}

.wun-factory {
    padding-left: 8px;
    margin-top: 4px !important;
}

.wun-warehouse {
    padding-left: 24px;
}

.wun-topic {
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
    height: 30px;
    padding: 0 6px 0 60px;
    border-radius: 0;
    text-align: left;
    font-size: 12px;
    line-height: 18px;
    white-space: nowrap;
}

.wun-topic[aria-pressed="true"] {
    background: #E7F9B9;
    color: #050b14;
    font-weight: 500;
    box-shadow: inset 2px 0 var(--wun-accent);
}

.wun .wun-topic[aria-pressed="true"] .wun-icon {
    color: #619900;
}

.wun-detail {
    min-width: 0;
}

.wun-detail-content {
    padding: 9px 10px;
}

.wun table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    font-variant-numeric: tabular-nums;
}

.wun th {
    font-size: 11px;
    font-weight: 400;
    color: #737373;
    background: #fafafa;
}

.wun th,
.wun td {
    padding: 5px 6px;
    text-align: left;
    border-bottom: 1px solid #ebebeb;
}

.wun th:last-child,
.wun td:last-child {
    text-align: right;
}

.wun tbody tr:last-child td {
    border-bottom: 0;
}

.wun td small {
    display: block;
    font-size: 10px;
    color: #737373;
    line-height: 15px;
}

.wun tbody tr:hover td {
    background: #f5f5f5;
}

.wun-location-table {
    margin-top: 12px;
}

.wun-stock-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px 12px;
    padding: 3px 2px;
}

.wun-stock-grid > div {
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
}

.wun-stock-grid small {
    font-size: 11px;
    color: #737373;
}

.wun-stock-grid strong {
    font-size: 14px;
    font-weight: 600;
}

.wun-stock-grid > div:last-child strong {
    color: #4f7f00;
}

.wun-reconcile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-top: 12px;
    background: #fafafa;
    padding: 7px 8px;
    font-size: 11px;
    color: #737373;
}

.wun-reconcile b {
    font-size: 13px;
    color: #050b14;
    white-space: nowrap;
}

@container (max-width: 540px) {
    .wun-workspace {
        grid-template-columns: 170px minmax(0, 1fr);
    }

    .wun-tabs {
        padding-inline: 10px;
    }

    .wun-body {
        padding-inline: 10px;
    }

    .wun-topic {
        padding-left: 44px;
        font-size: 11px;
    }

    .wun th,
    .wun td {
        padding: 5px 3px;
    }

    .wun-stock-grid {
        grid-template-columns: 1fr 1fr;
    }
}

@container (max-width: 380px) {
    .wun-workspace {
        grid-template-columns: 1fr;
    }

    .wun-tree {
        border-right: 0;
        border-bottom: 1px solid #ebebeb;
    }

    .wun-source-top {
        flex-wrap: wrap;
    }

    .wun-source-top > .wun-tag {
        margin-left: 0;
    }
}
`));
  }))();
}
function Mn({ language: e = `en`, style: t }) {
  let { activeLocale: n } = G(),
    r = (n?.code || e).toLowerCase().startsWith(`zh`),
    i = (e, t) => (r ? t : e),
    [a, o] = y(`form`),
    [s, c] = y(`FG-B`),
    [l, u] = y(`B2409`),
    [d, f] = y(`20`),
    [p, h] = y(`CT-024`),
    [v, b] = y(!1),
    [x, S] = y(!1),
    [ee, C] = y(Nn);
  function w() {
    (C(Nn), o(`form`), S(!1), b(!1), c(`FG-B`), u(`B2409`), f(`20`), h(`CT-024`));
  }
  function te(e) {
    e.preventDefault();
    let t = Number(d);
    !l.trim() || !p.trim() || !Number.isFinite(t) || t <= 0 || !Number.isInteger(t)
      ? b(!0)
      : (C((e) => [
          {
            id: `RC-${String(102 + e.length).padStart(4, `0`)}`,
            material: s,
            batch: l.trim(),
            qty: t,
            container: p.trim(),
          },
          ...e,
        ]),
        S(!0),
        b(!1),
        o(`records`));
  }
  return /*#__PURE__*/ _(`div`, {
    className: `wrr`,
    style: t,
    children: [
      /*#__PURE__*/ g(`style`, {
        children: `
                .wrr,
                .wrr * {
                    box-sizing: border-box;
                }

                .wrr {
                    width: 660px;
                    height: 490px;
                    background: #ffffff;
                    color: #050b14;
                    border: 1px solid #e4e4e4;
                    border-radius: 10px;
                    font-family: "IBM Plex Sans", Arial, sans-serif;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }

                .wrr button,
                .wrr input,
                .wrr select {
                    font: inherit;
                }

                .wrr header {
                    height: 65px;
                    flex-shrink: 0;
                    padding: 0 22px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-bottom: 1px solid #ececec;
                }

                .wrr header strong {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 16px;
                    font-weight: 500;
                }

                .wrr .symbol {
                    display: grid;
                    place-items: center;
                    width: 30px;
                    height: 30px;
                    background: #e7f9b9;
                    border-radius: 5px;
                }

                .wrr .reset {
                    border: 0;
                    background: none;
                    color: #878787;
                    font-size: 12px;
                    cursor: pointer;
                }

                .wrr nav {
                    display: flex;
                    padding: 0 22px;
                    gap: 26px;
                    height: 49px;
                    flex-shrink: 0;
                    border-bottom: 1px solid #ececec;
                }

                .wrr nav button {
                    border: 0;
                    border-bottom: 2px solid transparent;
                    background: none;
                    padding: 0;
                    font-size: 14px;
                    color: #878787;
                    cursor: pointer;
                }

                .wrr nav button.active {
                    color: #050b14;
                    border-bottom-color: #b2ed1d;
                    font-weight: 500;
                }

                .wrr .count {
                    background: #f1f1f1;
                    padding: 2px 6px;
                    border-radius: 4px;
                    margin-left: 6px;
                    font-size: 11px;
                }

                .wrr main {
                    padding: 23px 22px;
                    flex: 1;
                    min-height: 0;
                    overflow: auto;
                }

                .wrr h3 {
                    font-size: 18px;
                    font-weight: 500;
                    margin: 0 0 7px;
                }

                .wrr p {
                    color: #878787;
                    font-size: 13px;
                    margin: 0 0 21px;
                    line-height: 1.5;
                }

                .wrr form {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
                    gap: 18px;
                }

                .wrr label {
                    font-size: 13px;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    min-width: 0;
                }

                .wrr input,
                .wrr select {
                    width: 100%;
                    height: 44px;
                    border: 1px solid #dddddd;
                    border-radius: 5px;
                    background: white;
                    padding: 0 12px;
                    font-size: 14px;
                    color: #050b14;
                    outline: none;
                }

                .wrr input:focus,
                .wrr select:focus {
                    border-color: #a2d81a;
                    box-shadow: 0 0 0 3px #e7f9b980;
                }

                .wrr .actions {
                    grid-column: 1 / -1;
                    display: flex;
                    justify-content: flex-end;
                    margin-top: 4px;
                }

                .wrr .primary {
                    border: 0;
                    border-radius: 5px;
                    padding: 11px 16px;
                    background: #b2ed1d;
                    color: #050b14;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                }

                .wrr .primary:hover {
                    background: #a6df16;
                }

                .wrr .error {
                    grid-column: 1 / -1;
                    color: #b74030;
                    font-size: 12px;
                }

                .wrr .success {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 13px;
                    color: #527c00;
                    margin-bottom: 18px;
                }

                .wrr .table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 13px;
                }

                .wrr th {
                    font-size: 12px;
                    color: #878787;
                    font-weight: 400;
                    text-align: left;
                    padding: 10px 8px;
                    background: #fafafa;
                }

                .wrr td {
                    padding: 14px 8px;
                    border-bottom: 1px solid #eeeeee;
                }

                .wrr td small {
                    display: block;
                    font-size: 11px;
                    color: #878787;
                    margin-top: 4px;
                }

                .wrr th:last-child,
                .wrr td:last-child {
                    text-align: right;
                }

                .wrr tr.new {
                    background: #f3fbe5;
                }

                .wrr .newtag {
                    font-size: 10px;
                    color: #648c10;
                    margin-left: 6px;
                }

                .wrr .records-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 17px;
                }

                .wrr .records-top h3 {
                    margin: 0;
                }

                .wrr .records-top button {
                    background: none;
                    border: 0;
                    color: #648c10;
                    font-size: 13px;
                    cursor: pointer;
                }

                .wrr .hint {
                    font-size: 12px;
                    margin-top: 18px;
                    line-height: 1.5;
                }
            `,
      }),
      /*#__PURE__*/ _(`header`, {
        children: [
          /*#__PURE__*/ _(`strong`, {
            children: [
              /*#__PURE__*/ g(`span`, {
                className: `symbol`,
                children: /*#__PURE__*/ _(`svg`, {
                  width: `18`,
                  height: `18`,
                  viewBox: `0 0 24 24`,
                  fill: `none`,
                  stroke: `currentColor`,
                  strokeWidth: `1.7`,
                  "aria-hidden": `true`,
                  children: [
                    /*#__PURE__*/ g(`path`, {
                      d: `M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z`,
                    }),
                    /*#__PURE__*/ g(`path`, { d: `M14 2v6h6M8 13h8M8 17h6` }),
                  ],
                }),
              }),
              i(`Warehouse records`, `仓库记录`),
            ],
          }),
          /*#__PURE__*/ g(`button`, {
            className: `reset`,
            type: `button`,
            onClick: w,
            children: i(`Reset`, `重置`),
          }),
        ],
      }),
      /*#__PURE__*/ _(`nav`, {
        children: [
          /*#__PURE__*/ g(`button`, {
            type: `button`,
            className: a === `form` ? `active` : ``,
            onClick: () => o(`form`),
            children: i(`Register receipt`, `收货登记`),
          }),
          /*#__PURE__*/ _(`button`, {
            type: `button`,
            className: a === `records` ? `active` : ``,
            onClick: () => o(`records`),
            children: [
              i(`Receipt records`, `收货记录`),
              /*#__PURE__*/ g(`span`, { className: `count`, children: ee.length }),
            ],
          }),
        ],
      }),
      /*#__PURE__*/ g(`main`, {
        children:
          a === `form`
            ? /*#__PURE__*/ _(m, {
                children: [
                  /*#__PURE__*/ g(`h3`, { children: i(`Record a receipt`, `登记一笔收货`) }),
                  /*#__PURE__*/ g(`p`, {
                    children: i(
                      `Keep the material, batch and container together.`,
                      `将物料、批次和容器关联到同一笔记录。`
                    ),
                  }),
                  /*#__PURE__*/ _(`form`, {
                    onSubmit: te,
                    children: [
                      /*#__PURE__*/ _(`label`, {
                        children: [
                          i(`Material`, `物料`),
                          /*#__PURE__*/ _(`select`, {
                            value: s,
                            onChange: (e) => c(e.target.value),
                            children: [
                              /*#__PURE__*/ _(`option`, {
                                value: `FG-B`,
                                children: [`FG-B · `, i(`Finished goods B`, `成品 B`)],
                              }),
                              /*#__PURE__*/ _(`option`, {
                                value: `RM-A`,
                                children: [`RM-A · `, i(`Raw material A`, `原料 A`)],
                              }),
                            ],
                          }),
                        ],
                      }),
                      /*#__PURE__*/ _(`label`, {
                        children: [
                          i(`Batch`, `批次`),
                          /*#__PURE__*/ g(`input`, {
                            value: l,
                            onChange: (e) => u(e.target.value),
                            required: !0,
                          }),
                        ],
                      }),
                      /*#__PURE__*/ _(`label`, {
                        children: [
                          i(`Received quantity · cases`, `收货数量 · 箱`),
                          /*#__PURE__*/ g(`input`, {
                            type: `number`,
                            min: `1`,
                            step: `1`,
                            value: d,
                            onChange: (e) => f(e.target.value),
                            required: !0,
                          }),
                        ],
                      }),
                      /*#__PURE__*/ _(`label`, {
                        children: [
                          i(`Container barcode`, `容器条码`),
                          /*#__PURE__*/ g(`input`, {
                            value: p,
                            onChange: (e) => h(e.target.value),
                            required: !0,
                          }),
                        ],
                      }),
                      v &&
                        /*#__PURE__*/ g(`div`, {
                          className: `error`,
                          role: `alert`,
                          children: i(
                            `Enter a batch, container and positive whole-number quantity.`,
                            `请填写批次、容器和大于零的整数数量。`
                          ),
                        }),
                      /*#__PURE__*/ g(`div`, {
                        className: `actions`,
                        children: /*#__PURE__*/ _(`button`, {
                          className: `primary`,
                          type: `submit`,
                          children: [
                            i(`Register receipt`, `登记收货`),
                            ` `,
                            /*#__PURE__*/ g(`span`, { "aria-hidden": `true`, children: `→` }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : /*#__PURE__*/ _(m, {
                children: [
                  x &&
                    /*#__PURE__*/ _(`div`, {
                      className: `success`,
                      role: `status`,
                      children: [
                        /*#__PURE__*/ g(`span`, { "aria-hidden": `true`, children: `✓` }),
                        i(`Receipt registered`, `收货已登记`),
                      ],
                    }),
                  /*#__PURE__*/ _(`div`, {
                    className: `records-top`,
                    children: [
                      /*#__PURE__*/ g(`h3`, { children: i(`Receipt records`, `收货记录`) }),
                      /*#__PURE__*/ _(`button`, {
                        type: `button`,
                        onClick: () => {
                          (S(!1), o(`form`));
                        },
                        children: [`+ `, i(`New receipt`, `新增收货`)],
                      }),
                    ],
                  }),
                  /*#__PURE__*/ _(`table`, {
                    className: `table`,
                    children: [
                      /*#__PURE__*/ g(`thead`, {
                        children: /*#__PURE__*/ _(`tr`, {
                          children: [
                            /*#__PURE__*/ g(`th`, {
                              children: i(`Material / Batch`, `物料 / 批次`),
                            }),
                            /*#__PURE__*/ g(`th`, { children: i(`Container`, `容器`) }),
                            /*#__PURE__*/ g(`th`, { children: i(`Received`, `收货数量`) }),
                          ],
                        }),
                      }),
                      /*#__PURE__*/ g(`tbody`, {
                        children: ee.map((e, t) =>
                          /*#__PURE__*/ _(
                            `tr`,
                            {
                              className: x && t === 0 ? `new` : ``,
                              children: [
                                /*#__PURE__*/ _(`td`, {
                                  children: [
                                    e.material,
                                    ` / `,
                                    e.batch,
                                    x &&
                                      t === 0 &&
                                      /*#__PURE__*/ g(`span`, {
                                        className: `newtag`,
                                        children: i(`New`, `新增`),
                                      }),
                                    /*#__PURE__*/ g(`small`, { children: e.id }),
                                  ],
                                }),
                                /*#__PURE__*/ g(`td`, { children: e.container }),
                                /*#__PURE__*/ _(`td`, {
                                  children: [`+`, e.qty, ` `, i(`cases`, `箱`)],
                                }),
                              ],
                            },
                            e.id
                          )
                        ),
                      }),
                    ],
                  }),
                  /*#__PURE__*/ g(`p`, {
                    className: `hint`,
                    children: i(
                      `Each receipt keeps its batch and container reference.`,
                      `每笔收货都保留对应的批次与容器信息。`
                    ),
                  }),
                ],
              }),
      }),
    ],
  });
}
var Nn;
function Pn() {
  return (Pn = e(() => {
    (f(),
      o(),
      L(),
      (Nn = [{ id: `RC-0102`, material: `RM-A`, batch: `A2409`, qty: 12, container: `CT-018` }]),
      M(Mn, {
        language: {
          type: U.Enum,
          options: [`en`, `zh`],
          optionTitles: [`English`, `中文`],
          defaultValue: `en`,
          title: `Language`,
        },
      }));
  }))();
}
var Fn, In, Ln;
function Rn() {
  return (Rn = e(() => {
    (L(),
      E.loadFonts([
        `GF;IBM Plex Sans-regular`,
        `GF;IBM Plex Sans-700`,
        `GF;IBM Plex Sans-700italic`,
        `GF;IBM Plex Sans-italic`,
      ]),
      (Fn = [
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
      (In = [
        `.framer-3pCp1 .framer-styles-preset-17javqx:not(.rich-text-wrapper), .framer-3pCp1 .framer-styles-preset-17javqx.rich-text-wrapper h1 { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 54px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.68px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #161922; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1439px) and (min-width: 810px) { .framer-3pCp1 .framer-styles-preset-17javqx:not(.rich-text-wrapper), .framer-3pCp1 .framer-styles-preset-17javqx.rich-text-wrapper h1 { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 43px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.68px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #161922; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-3pCp1 .framer-styles-preset-17javqx:not(.rich-text-wrapper), .framer-3pCp1 .framer-styles-preset-17javqx.rich-text-wrapper h1 { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 33px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.68px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #161922; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Ln = `framer-3pCp1`));
  }))();
}
function Q(e, t) {
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
  return (Hn = e(() => {
    (L(), (Vn = { AYmst8Nt3: new le(() => import("./TEUe5r_sl-0.CaQr_zj8.mjs?v=20261116-migration-v2")) }));
  }))();
}
var Un,
  Wn,
  Gn,
  Kn,
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
  sr,
  cr,
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
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  $,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi;
function si() {
  return (si = e(() => {
    (f(),
      L(),
      S(),
      o(),
      it(),
      St(),
      _e(),
      Se(),
      ze(),
      Ce(),
      kt(),
      Ee(),
      Mt(),
      Ht(),
      vn(),
      Sn(),
      jn(),
      Pn(),
      Rn(),
      De(),
      je(),
      Fe(),
      xe(),
      me(),
      Hn(),
      Ve(),
      (Un = B(Te)),
      (Wn = B(At)),
      (Gn = B(fe)),
      (Kn = B(Zt)),
      (qn = B(Ct)),
      (Jn = D(x.div, { nodeId: `eSd03mRWV`, override: K, scopeId: `TEUe5r_sl` })),
      (Yn = A(Jn)),
      (Xn = B(Rt)),
      (Zn = D(x.div, { nodeId: `VS2YVKLtn`, override: K, scopeId: `TEUe5r_sl` })),
      (Qn = A(Zn)),
      ($n = A(x.div)),
      (er = D(x.div, { nodeId: `b7OTprIxo`, override: K, scopeId: `TEUe5r_sl` })),
      (tr = A(er)),
      (nr = D(x.div, { nodeId: `R36qO4VHQ`, override: K, scopeId: `TEUe5r_sl` })),
      (rr = A(nr)),
      (ir = B(wn)),
      (ar = D(x.div, { nodeId: `aERNd296p`, override: K, scopeId: `TEUe5r_sl` })),
      (or = A(ar)),
      (sr = D(x.div, { nodeId: `BJrckPzee`, override: K, scopeId: `TEUe5r_sl` })),
      (cr = A(sr)),
      (lr = D(x.div, { nodeId: `xdZWjGX_7`, override: K, scopeId: `TEUe5r_sl` })),
      (ur = A(lr)),
      (dr = D(x.div, { nodeId: `pqw0DQHks`, override: K, scopeId: `TEUe5r_sl` })),
      (fr = A(dr)),
      (pr = D(x.div, { nodeId: `J4LUTRULQ`, override: K, scopeId: `TEUe5r_sl` })),
      (mr = A(pr)),
      (hr = D(x.div, { nodeId: `PyFqgpW2n`, override: K, scopeId: `TEUe5r_sl` })),
      (gr = A(hr)),
      (_r = D(x.div, { nodeId: `yPtwhLklK`, override: K, scopeId: `TEUe5r_sl` })),
      (vr = A(_r)),
      (yr = B(Mn)),
      (br = D(x.div, { nodeId: `gsydHWTRV`, override: K, scopeId: `TEUe5r_sl` })),
      (xr = A(br)),
      (Sr = D(x.div, { nodeId: `wqkPi4e9P`, override: K, scopeId: `TEUe5r_sl` })),
      (Cr = A(Sr)),
      (wr = D(x.div, { nodeId: `mjeTR_wJG`, override: K, scopeId: `TEUe5r_sl` })),
      (Tr = A(wr)),
      (Er = D(x.div, { nodeId: `Tf0RIpthT`, override: K, scopeId: `TEUe5r_sl` })),
      (Dr = A(Er)),
      (Or = B(bn)),
      (kr = D(x.div, { nodeId: `AN3JVE8js`, override: K, scopeId: `TEUe5r_sl` })),
      (Ar = A(kr)),
      (jr = B(rt)),
      (Mr = B(xt)),
      (Nr = R(x.div)),
      (Pr = B(we)),
      (Fr = B(Be)),
      (Ir = {
        dm0OoW02Q: `(max-width: 809.98px)`,
        oN9uXFHdk: `(min-width: 810px) and (max-width: 1439.98px)`,
        YbPhyYtm2: `(min-width: 1440px)`,
      }),
      (Lr = () => typeof document < `u`),
      (Rr = []),
      (zr = `framer-ajZR9`),
      (Br = {
        dm0OoW02Q: `framer-v-1os3pxh`,
        oN9uXFHdk: `framer-v-of1h00`,
        YbPhyYtm2: `framer-v-1ndfjm9`,
      }),
      (Vr = (e, t, n) => (e && t ? `position` : n)),
      ($ = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Hr = (e, t) => `translateY(-50%) ${t}`),
      (Ur = {
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
      (Wr = { bounce: 0.3, delay: 0, duration: 0.6, type: `spring` }),
      (Gr = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 90,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Kr = { bounce: 0, delay: 0.05, duration: 0.4, type: `spring` }),
      (qr = {
        effect: Gr,
        tokenization: `word`,
        transition: Kr,
        trigger: `onInView`,
        type: `appear`,
      }),
      (Jr = (e, t) => `translate(-50%, -50%) ${t}`),
      (Yr = (e, t) => `translateX(-50%) ${t}`),
      (Xr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0.8, duration: 2, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (Zr = {
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
      (Qr = {
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
        transition: Kr,
        trigger: `onMount`,
        type: `appear`,
      }),
      ($r = { Desktop: `YbPhyYtm2`, Phone: `dm0OoW02Q`, Tablet: `oN9uXFHdk` }),
      (ei = ({ value: e }) =>
        z()
          ? null
          : /*#__PURE__*/ g(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (ti = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: $r[r.variant] ?? r.variant ?? `YbPhyYtm2`,
      })),
      (ni = { component: Be, variant: `b78JoKqu6` }),
      (ri = /*#__PURE__*/ h(function (e, r) {
        let i = l(null),
          a = r ?? i;
        t();
        let { activeLocale: o, contentLocale: u, setLocale: d } = G(),
          f = ie(),
          { style: p, className: m, layoutId: h, variant: v, ...y } = ti(e),
          S = n(() => He({}, u), [u]);
        T(S);
        let [E, D] = ne(v, Ir, !1),
          O = F(zr, Ln, Re, be, Ae, Pe, ye),
          k = s(ce)?.isLayoutTemplate,
          A = !!s(b)?.transition?.layout,
          M = Vr(k, A);
        (Bn(o), oe());
        let N = l(null),
          I = l(null),
          L = C(`JMWIA2K52`),
          R = C(`wo16Olr54`),
          z = () => !Lr() || E !== `dm0OoW02Q`,
          B = C(`llAHRvM8z`),
          ae = l(null),
          se = () => !Lr() || ![`oN9uXFHdk`, `dm0OoW02Q`].includes(E),
          U = C(`RsXlxeQOg`),
          le = l(null),
          ue = () => !Lr() || E === `dm0OoW02Q`,
          pe = C(`m714h3BsR`),
          me = l(null),
          he = C(`eQnAvn6aC`),
          ge = l(null);
        return (
          de({ "1xyimj3": ni }),
          /*#__PURE__*/ g(ce.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: $r,
              primaryVariantId: `YbPhyYtm2`,
              variantClassNames: Br,
            },
            children: /*#__PURE__*/ _(ee, {
              id: h ?? `TEUe5r_sl`,
              children: [
                /*#__PURE__*/ g(ei, {
                  value: `html body { background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ _(x.div, {
                  ...y,
                  className: F(O, `framer-1ndfjm9`, m),
                  ref: a,
                  style: { ...p },
                  children: [
                    /*#__PURE__*/ g(V, {
                      height: 64,
                      width: `100vw`,
                      y: 0,
                      children: /*#__PURE__*/ g(H, {
                        className: `framer-13c563b-container`,
                        layout: M,
                        layoutScroll: !0,
                        nodeId: `eTSro4eyj`,
                        scopeId: `TEUe5r_sl`,
                        children: /*#__PURE__*/ g(W, {
                          breakpoint: E,
                          overrides: {
                            dm0OoW02Q: { variant: $(`Svy4sINhA`) },
                            oN9uXFHdk: { variant: $(`Gw5VboM5c`) },
                          },
                          children: /*#__PURE__*/ g(Te, {
                            eVOFjxm0w: `var(--token-fcaa307f-078f-4ea1-af34-d51bb82ca05a, rgba(255, 255, 255, 0))`,
                            height: `100%`,
                            id: `eTSro4eyj`,
                            jQcddTFoz: !0,
                            layoutId: `eTSro4eyj`,
                            style: { width: `100%` },
                            variant: $(`LbFcBhD3w`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ g(V, {
                      children: /*#__PURE__*/ g(H, {
                        className: `framer-1o0p5mq-container`,
                        isAuthoredByUser: !0,
                        layout: M,
                        nodeId: `uVmG_ARaF`,
                        scopeId: `TEUe5r_sl`,
                        children: /*#__PURE__*/ g(At, {
                          baseSpeed: 1,
                          beamColor: `rgb(178, 237, 29)`,
                          cellSize: 50,
                          gridColor: `rgba(5, 11, 20, 0.02)`,
                          height: `100%`,
                          id: `uVmG_ARaF`,
                          layoutId: `uVmG_ARaF`,
                          lineLength: 150,
                          maxLines: 9,
                          spawnProbability: 0.08,
                          style: { height: `100%`, width: `100%` },
                          width: `100%`,
                        }),
                      }),
                    }),
                    /*#__PURE__*/ g(x.div, {
                      className: `framer-lyhkcx`,
                      layout: M,
                      children: /*#__PURE__*/ g(`div`, {
                        className: `framer-1br1eko`,
                        children: /*#__PURE__*/ _(`div`, {
                          className: `framer-1obbasi`,
                          children: [
                            /*#__PURE__*/ g(`div`, {
                              className: `framer-1tdy1pe`,
                              children: /*#__PURE__*/ _(`div`, {
                                className: `framer-1458unf`,
                                children: [
                                  /*#__PURE__*/ g(W, {
                                    breakpoint: E,
                                    overrides: {
                                      dm0OoW02Q: {
                                        children:
                                          Q(`v1`, u) ??
                                          /*#__PURE__*/ _(c, {
                                            children: [
                                              /*#__PURE__*/ g(`h1`, {
                                                className: `framer-styles-preset-17javqx`,
                                                "data-styles-preset": `A1k5hTncq`,
                                                dir: `auto`,
                                                style: { "--framer-text-alignment": `center` },
                                                children: `DIY 100% 适配业务`,
                                              }),
                                              /*#__PURE__*/ g(`h1`, {
                                                className: `framer-styles-preset-17javqx`,
                                                "data-styles-preset": `A1k5hTncq`,
                                                dir: `auto`,
                                                style: { "--framer-text-alignment": `center` },
                                                children: `灵活变更的智能仓库管理软件`,
                                              }),
                                            ],
                                          }),
                                      },
                                    },
                                    children: /*#__PURE__*/ g(w, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        Q(`v0`, u) ??
                                        /*#__PURE__*/ _(c, {
                                          children: [
                                            /*#__PURE__*/ g(`h1`, {
                                              className: `framer-styles-preset-17javqx`,
                                              "data-styles-preset": `A1k5hTncq`,
                                              dir: `auto`,
                                              children: `DIY 100% 适配业务`,
                                            }),
                                            /*#__PURE__*/ g(`h1`, {
                                              className: `framer-styles-preset-17javqx`,
                                              "data-styles-preset": `A1k5hTncq`,
                                              dir: `auto`,
                                              children: `灵活变更的智能仓库管理软件`,
                                            }),
                                          ],
                                        }),
                                      className: `framer-ml43dq`,
                                      "data-framer-name": `Build your own intelligent WMS. 100% tailored. Ready to adapt`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  /*#__PURE__*/ g(w, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      Q(`v2`, u) ??
                                      /*#__PURE__*/ _(c, {
                                        children: [
                                          /*#__PURE__*/ g(`p`, {
                                            className: `framer-styles-preset-t1f9am`,
                                            "data-styles-preset": `IEBy192yC`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `描述您的工作流程，构建量身定制、可投入生产的应用，`,
                                          }),
                                          /*#__PURE__*/ g(`p`, {
                                            className: `framer-styles-preset-t1f9am`,
                                            "data-styles-preset": `IEBy192yC`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `内置数据、权限、部署以及网页和移动端访问能力。`,
                                          }),
                                        ],
                                      }),
                                    className: `framer-3fibrc`,
                                    "data-framer-name": `Tier0 Notebook gives engineers and analysts a powe`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ _(`div`, {
                                    className: `framer-10eyzaj`,
                                    children: [
                                      /*#__PURE__*/ g(W, {
                                        breakpoint: E,
                                        overrides: {
                                          dm0OoW02Q: { y: void 0 },
                                          oN9uXFHdk: { y: (f?.y || 0) + 399.3 },
                                        },
                                        children: /*#__PURE__*/ g(V, {
                                          height: 72,
                                          y: (f?.y || 0) + 442.3,
                                          children: /*#__PURE__*/ g(H, {
                                            className: `framer-19tyy49-container`,
                                            nodeId: `FB_FfoIIa`,
                                            scopeId: `TEUe5r_sl`,
                                            children: /*#__PURE__*/ g(fe, {
                                              cbli7Ddg7: Q(`v3`, u) ?? `免费开始构建 ↗`,
                                              dCs2qxPaP: {
                                                borderColor: `rgba(0, 0, 0, 0)`,
                                                borderStyle: `solid`,
                                                borderWidth: 1,
                                              },
                                              height: `100%`,
                                              id: `FB_FfoIIa`,
                                              kqZwT3hkW: Q(`v4`, u) ?? `Advanced Analysis`,
                                              layoutId: `FB_FfoIIa`,
                                              OgTXozm2X: `rgb(231, 249, 185)`,
                                              Ps_isqKXP: `var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29))`,
                                              rQoqqyQEX: `rgb(178, 237, 29)`,
                                              V8jenVZfv: `rgb(0, 0, 0)`,
                                              variant: $(`I3xk_f4ia`),
                                              width: `100%`,
                                              WNF2s4XjK: `https://tier0.cn/login`,
                                              YfR8TzR1J:
                                                Q(`v5`, u) ??
                                                `Build reusable analyses, track KPI trends, and operationalize insights`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ g(te, {
                                        links: [
                                          {
                                            href: { webPageId: `RCRTBRG3j` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `RCRTBRG3j` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `RCRTBRG3j` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          /*#__PURE__*/ g(W, {
                                            breakpoint: E,
                                            overrides: {
                                              dm0OoW02Q: { y: void 0 },
                                              oN9uXFHdk: { y: (f?.y || 0) + 407.3 },
                                            },
                                            children: /*#__PURE__*/ g(V, {
                                              height: 56,
                                              y: (f?.y || 0) + 450.3,
                                              children: /*#__PURE__*/ g(H, {
                                                className: `framer-532ci8-container`,
                                                nodeId: `HeYuWcR8q`,
                                                scopeId: `TEUe5r_sl`,
                                                children: /*#__PURE__*/ g(W, {
                                                  breakpoint: E,
                                                  overrides: {
                                                    dm0OoW02Q: { WNF2s4XjK: e[2] },
                                                    oN9uXFHdk: { WNF2s4XjK: e[1] },
                                                  },
                                                  children: /*#__PURE__*/ g(fe, {
                                                    cbli7Ddg7: Q(`v6`, u) ?? `联系团队`,
                                                    dCs2qxPaP: {
                                                      borderColor: `var(--token-70c6dee2-5081-48f3-abdb-0a5ef8f6900b, rgb(195, 196, 197))`,
                                                      borderStyle: `solid`,
                                                      borderWidth: 1,
                                                    },
                                                    height: `100%`,
                                                    id: `HeYuWcR8q`,
                                                    kqZwT3hkW: Q(`v4`, u) ?? `Advanced Analysis`,
                                                    layoutId: `HeYuWcR8q`,
                                                    OgTXozm2X: `rgb(231, 249, 185)`,
                                                    Ps_isqKXP: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                                    rQoqqyQEX: `rgb(178, 237, 29)`,
                                                    style: { height: `100%` },
                                                    V8jenVZfv: `rgb(0, 0, 0)`,
                                                    variant: $(`I3xk_f4ia`),
                                                    width: `100%`,
                                                    WNF2s4XjK: e[0],
                                                    YfR8TzR1J:
                                                      Q(`v5`, u) ??
                                                      `Build reusable analyses, track KPI trends, and operationalize insights`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            /*#__PURE__*/ _(`div`, {
                              className: `framer-12lbpp9`,
                              "data-framer-name": `Frame 2147224671`,
                              children: [
                                /*#__PURE__*/ g(W, {
                                  breakpoint: E,
                                  overrides: {
                                    dm0OoW02Q: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        pixelHeight: 2801,
                                        pixelWidth: 4096,
                                        sizes: `calc(min(${f?.width || `100vw`} - 40px, 1280px) * 2.4171)`,
                                        src: `https://framerusercontent.com/images/rWk246mR3EIdETS2sGP2UVqGmAI.png?width=4096&height=2801`,
                                        srcSet: `https://framerusercontent.com/images/rWk246mR3EIdETS2sGP2UVqGmAI.png?scale-down-to=512&width=4096&height=2801 512w,https://framerusercontent.com/images/rWk246mR3EIdETS2sGP2UVqGmAI.png?scale-down-to=1024&width=4096&height=2801 1024w,https://framerusercontent.com/images/rWk246mR3EIdETS2sGP2UVqGmAI.png?scale-down-to=2048&width=4096&height=2801 2048w,https://framerusercontent.com/images/rWk246mR3EIdETS2sGP2UVqGmAI.png?width=4096&height=2801 4096w`,
                                      },
                                      transformTemplate: Hr,
                                    },
                                    oN9uXFHdk: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: j((f?.y || 0) + 514.3),
                                        pixelHeight: 2801,
                                        pixelWidth: 4096,
                                        sizes: `calc(min(${f?.width || `100vw`} - 160px, 1280px) * 1.7723)`,
                                        src: `https://framerusercontent.com/images/rWk246mR3EIdETS2sGP2UVqGmAI.png?width=4096&height=2801`,
                                        srcSet: `https://framerusercontent.com/images/rWk246mR3EIdETS2sGP2UVqGmAI.png?scale-down-to=512&width=4096&height=2801 512w,https://framerusercontent.com/images/rWk246mR3EIdETS2sGP2UVqGmAI.png?scale-down-to=1024&width=4096&height=2801 1024w,https://framerusercontent.com/images/rWk246mR3EIdETS2sGP2UVqGmAI.png?scale-down-to=2048&width=4096&height=2801 2048w,https://framerusercontent.com/images/rWk246mR3EIdETS2sGP2UVqGmAI.png?width=4096&height=2801 4096w`,
                                      },
                                    },
                                  },
                                  children: /*#__PURE__*/ g(re, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: j((f?.y || 0) + 515.3),
                                      pixelHeight: 2801,
                                      pixelWidth: 4096,
                                      sizes: `calc(min(${f?.width || `100vw`} - 160px, 1280px) * 1.0457)`,
                                      src: `https://framerusercontent.com/images/rWk246mR3EIdETS2sGP2UVqGmAI.png?width=4096&height=2801`,
                                      srcSet: `https://framerusercontent.com/images/rWk246mR3EIdETS2sGP2UVqGmAI.png?scale-down-to=512&width=4096&height=2801 512w,https://framerusercontent.com/images/rWk246mR3EIdETS2sGP2UVqGmAI.png?scale-down-to=1024&width=4096&height=2801 1024w,https://framerusercontent.com/images/rWk246mR3EIdETS2sGP2UVqGmAI.png?scale-down-to=2048&width=4096&height=2801 2048w,https://framerusercontent.com/images/rWk246mR3EIdETS2sGP2UVqGmAI.png?width=4096&height=2801 4096w`,
                                    },
                                    className: `framer-1rp61c9`,
                                    "data-framer-name": `polina-razorilova-CvHJwk7F2cs-unsplash-halftone 1`,
                                  }),
                                }),
                                /*#__PURE__*/ g(V, {
                                  children: /*#__PURE__*/ g(H, {
                                    className: `framer-1im04vq-container`,
                                    isAuthoredByUser: !0,
                                    nodeId: `tlxLpkpuB`,
                                    scopeId: `TEUe5r_sl`,
                                    children: /*#__PURE__*/ g(Zt, {
                                      autoplay: !0,
                                      borderRadius: 8,
                                      height: `100%`,
                                      id: `tlxLpkpuB`,
                                      initialPage: `containers`,
                                      language: `zh`,
                                      layoutId: `tlxLpkpuB`,
                                      style: { height: `100%`, width: `100%` },
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ g(V, {
                                  children: /*#__PURE__*/ g(H, {
                                    className: `framer-pv54nk-container`,
                                    isAuthoredByUser: !0,
                                    nodeId: `nkDKheQJu`,
                                    scopeId: `TEUe5r_sl`,
                                    children: /*#__PURE__*/ g(Ct, {
                                      height: `100%`,
                                      id: `nkDKheQJu`,
                                      language: `zh`,
                                      layoutId: `nkDKheQJu`,
                                      style: { width: `100%` },
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    /*#__PURE__*/ _(x.div, {
                      className: `framer-1afzz6d`,
                      "data-framer-name": `capability`,
                      layout: M,
                      children: [
                        /*#__PURE__*/ g(W, {
                          breakpoint: E,
                          overrides: {
                            dm0OoW02Q: {
                              __framer__styleAppearEffectEnabled: void 0,
                              __framer__styleTransformEffectEnabled: void 0,
                            },
                          },
                          children: /*#__PURE__*/ _($n, {
                            __framer__animate: { transition: Wr },
                            __framer__animateOnce: !0,
                            __framer__enter: Ur,
                            __framer__spring: {
                              damping: 60,
                              delay: 0,
                              duration: 0.35,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stagger: 0,
                              stiffness: 500,
                              type: `tween`,
                            },
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                ref: N,
                                target: {
                                  opacity: 0,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                ref: I,
                                target: {
                                  opacity: 0,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                            ],
                            __framer__transformTrigger: `onScrollTarget`,
                            __framer__transformViewportThreshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-m4fv6a`,
                            "data-framer-name": `uns agnet`,
                            children: [
                              /*#__PURE__*/ g(W, {
                                breakpoint: E,
                                overrides: {
                                  dm0OoW02Q: { __framer__styleTransformEffectEnabled: void 0 },
                                },
                                children: /*#__PURE__*/ _(Yn, {
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: N,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: I,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1qdtyaq`,
                                  children: [
                                    /*#__PURE__*/ g(W, {
                                      breakpoint: E,
                                      overrides: {
                                        dm0OoW02Q: {
                                          children:
                                            Q(`v8`, u) ??
                                            /*#__PURE__*/ g(c, {
                                              children: /*#__PURE__*/ g(`p`, {
                                                className: `framer-styles-preset-140plv3`,
                                                "data-styles-preset": `TBRoaUTAt`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--token-d2d554b8-e538-4f3d-a601-4167e4c07699, rgba(9, 9, 9, 0.8))`,
                                                },
                                                children: `01/ UNS 智能助手`,
                                              }),
                                            }),
                                        },
                                      },
                                      children: /*#__PURE__*/ g(w, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          Q(`v7`, u) ??
                                          /*#__PURE__*/ g(c, {
                                            children: /*#__PURE__*/ g(`p`, {
                                              className: `framer-styles-preset-140plv3`,
                                              "data-styles-preset": `TBRoaUTAt`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-d2d554b8-e538-4f3d-a601-4167e4c07699, rgba(9, 9, 9, 0.8))`,
                                              },
                                              children: `01/ UNS 智能助手`,
                                            }),
                                          }),
                                        className: `framer-1i9dvtw`,
                                        "data-framer-name": `Applications do not just consume data — they write`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    /*#__PURE__*/ g(x.div, {
                                      className: `framer-1xa9ffj`,
                                      children: /*#__PURE__*/ g(W, {
                                        breakpoint: E,
                                        overrides: {
                                          dm0OoW02Q: {
                                            children:
                                              Q(`v10`, u) ??
                                              /*#__PURE__*/ g(c, {
                                                children: /*#__PURE__*/ g(`h1`, {
                                                  className: `framer-styles-preset-1k5p4j8`,
                                                  "data-styles-preset": `F3NdZsOi7`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-alignment": `start` },
                                                  children: `与AI对话，基于UNS数据执行各类任务`,
                                                }),
                                              }),
                                          },
                                        },
                                        children: /*#__PURE__*/ g(w, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            Q(`v9`, u) ??
                                            /*#__PURE__*/ g(c, {
                                              children: /*#__PURE__*/ g(`h1`, {
                                                className: `framer-styles-preset-1k5p4j8`,
                                                "data-styles-preset": `F3NdZsOi7`,
                                                dir: `auto`,
                                                children: `与AI对话，基于UNS数据执行各类任务`,
                                              }),
                                            }),
                                          className: `framer-8sxa3i`,
                                          "data-framer-name": `Applications do not just consume data — they write`,
                                          effect: qr,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                    /*#__PURE__*/ g(w, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        Q(`v11`, u) ??
                                        /*#__PURE__*/ g(c, {
                                          children: /*#__PURE__*/ g(`p`, {
                                            className: `framer-styles-preset-1ful33y`,
                                            "data-styles-preset": `HNigw6pHS`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `left` },
                                            children: `看板，可视化，分析，定时任务等`,
                                          }),
                                        }),
                                      className: `framer-1iq5nyv`,
                                      "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                              /*#__PURE__*/ g(W, {
                                breakpoint: E,
                                overrides: {
                                  dm0OoW02Q: { __framer__styleTransformEffectEnabled: void 0 },
                                },
                                children: /*#__PURE__*/ g(Qn, {
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: N,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: I,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-16uh57p`,
                                  "data-framer-cursor": `1xyimj3`,
                                  children: /*#__PURE__*/ g(V, {
                                    children: /*#__PURE__*/ g(H, {
                                      className: `framer-1caaucj-container`,
                                      isAuthoredByUser: !0,
                                      nodeId: `afbCbT11G`,
                                      rendersWithMotion: !0,
                                      scopeId: `TEUe5r_sl`,
                                      children: /*#__PURE__*/ g(Rt, {
                                        accent: `rgb(178, 237, 29)`,
                                        fontFamily:
                                          Q(`v12`, u) ??
                                          `"IBM Plex Sans", "PingFang SC", "Microsoft YaHei", Arial, sans-serif`,
                                        height: `100%`,
                                        id: `afbCbT11G`,
                                        initialScenario: `reconcile`,
                                        language: `zh`,
                                        layoutId: `afbCbT11G`,
                                        radius: 10,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        /*#__PURE__*/ g(W, {
                          breakpoint: E,
                          overrides: {
                            dm0OoW02Q: {
                              __framer__styleAppearEffectEnabled: void 0,
                              __framer__styleTransformEffectEnabled: void 0,
                            },
                          },
                          children: /*#__PURE__*/ _($n, {
                            __framer__animate: { transition: Wr },
                            __framer__animateOnce: !0,
                            __framer__enter: Ur,
                            __framer__spring: {
                              damping: 60,
                              delay: 0,
                              duration: 0.35,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stagger: 0,
                              stiffness: 500,
                              type: `tween`,
                            },
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                ref: I,
                                target: {
                                  opacity: 0,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                            ],
                            __framer__transformTrigger: `onScrollTarget`,
                            __framer__transformViewportThreshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-1saa2tf`,
                            "data-framer-name": `uns agnet`,
                            id: L,
                            ref: N,
                            children: [
                              /*#__PURE__*/ g(W, {
                                breakpoint: E,
                                overrides: {
                                  dm0OoW02Q: { __framer__styleTransformEffectEnabled: void 0 },
                                },
                                children: /*#__PURE__*/ g(rr, {
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: I,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-cnrvpq`,
                                  children: /*#__PURE__*/ g(W, {
                                    breakpoint: E,
                                    overrides: {
                                      dm0OoW02Q: { __framer__styleTransformEffectEnabled: void 0 },
                                    },
                                    children: /*#__PURE__*/ _(tr, {
                                      __framer__styleTransformEffectEnabled: !0,
                                      __framer__transformTargets: [
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                        {
                                          ref: N,
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                        {
                                          ref: I,
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                      ],
                                      __framer__transformTrigger: `onScrollTarget`,
                                      __framer__transformViewportThreshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-t253xs`,
                                      children: [
                                        /*#__PURE__*/ g(W, {
                                          breakpoint: E,
                                          overrides: {
                                            dm0OoW02Q: {
                                              children:
                                                Q(`v14`, u) ??
                                                /*#__PURE__*/ g(c, {
                                                  children: /*#__PURE__*/ g(`p`, {
                                                    className: `framer-styles-preset-140plv3`,
                                                    "data-styles-preset": `TBRoaUTAt`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `start`,
                                                      "--framer-text-color": `var(--token-d2d554b8-e538-4f3d-a601-4167e4c07699, rgba(9, 9, 9, 0.8))`,
                                                    },
                                                    children: `02/ 数据接入与 UNS`,
                                                  }),
                                                }),
                                            },
                                          },
                                          children: /*#__PURE__*/ g(w, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              Q(`v13`, u) ??
                                              /*#__PURE__*/ g(c, {
                                                children: /*#__PURE__*/ g(`p`, {
                                                  className: `framer-styles-preset-140plv3`,
                                                  "data-styles-preset": `TBRoaUTAt`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-d2d554b8-e538-4f3d-a601-4167e4c07699, rgba(9, 9, 9, 0.8))`,
                                                  },
                                                  children: `02/ 数据接入与 UNS`,
                                                }),
                                              }),
                                            className: `framer-1gzhqqh`,
                                            "data-framer-name": `Applications do not just consume data — they write`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ g(x.div, {
                                          className: `framer-1kjymim`,
                                          children: /*#__PURE__*/ g(W, {
                                            breakpoint: E,
                                            overrides: {
                                              dm0OoW02Q: {
                                                children:
                                                  Q(`v16`, u) ??
                                                  /*#__PURE__*/ g(c, {
                                                    children: /*#__PURE__*/ _(`h1`, {
                                                      className: `framer-styles-preset-1k5p4j8`,
                                                      "data-styles-preset": `F3NdZsOi7`,
                                                      dir: `auto`,
                                                      style: { "--framer-text-alignment": `start` },
                                                      children: [
                                                        `接入扫码与订单，`,
                                                        /*#__PURE__*/ g(`br`, {}),
                                                        `按批次关联收发记录`,
                                                      ],
                                                    }),
                                                  }),
                                              },
                                            },
                                            children: /*#__PURE__*/ g(w, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                Q(`v15`, u) ??
                                                /*#__PURE__*/ g(c, {
                                                  children: /*#__PURE__*/ _(`h1`, {
                                                    className: `framer-styles-preset-1k5p4j8`,
                                                    "data-styles-preset": `F3NdZsOi7`,
                                                    dir: `auto`,
                                                    children: [
                                                      `接入扫码与订单，`,
                                                      /*#__PURE__*/ g(`br`, {}),
                                                      `按批次关联收发记录`,
                                                    ],
                                                  }),
                                                }),
                                              className: `framer-1rakccc`,
                                              "data-framer-name": `Applications do not just consume data — they write`,
                                              effect: qr,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ g(w, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            Q(`v17`, u) ??
                                            /*#__PURE__*/ _(c, {
                                              children: [
                                                /*#__PURE__*/ g(`p`, {
                                                  className: `framer-styles-preset-1ful33y`,
                                                  "data-styles-preset": `HNigw6pHS`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-alignment": `left` },
                                                  children: `Tier0 支持常用采集协议和系统接口，`,
                                                }),
                                                /*#__PURE__*/ g(`p`, {
                                                  className: `framer-styles-preset-1ful33y`,
                                                  "data-styles-preset": `HNigw6pHS`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-alignment": `left` },
                                                  children: `将订单、扫码和作业记录接入 UNS，供 WMS 与智能助手按物料、批次和库位查询。`,
                                                }),
                                              ],
                                            }),
                                          className: `framer-14bit64`,
                                          "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ g(W, {
                                breakpoint: E,
                                overrides: {
                                  dm0OoW02Q: { __framer__styleTransformEffectEnabled: void 0 },
                                },
                                children: /*#__PURE__*/ g(or, {
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: N,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: I,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1sezskn`,
                                  "data-framer-cursor": `1xyimj3`,
                                  children: /*#__PURE__*/ g(V, {
                                    children: /*#__PURE__*/ g(H, {
                                      className: `framer-1vvfxs7-container`,
                                      isAuthoredByUser: !0,
                                      nodeId: `tgkZl8R82`,
                                      rendersWithMotion: !0,
                                      scopeId: `TEUe5r_sl`,
                                      children: /*#__PURE__*/ g(wn, {
                                        accent: `rgb(178, 237, 29)`,
                                        height: `100%`,
                                        id: `tgkZl8R82`,
                                        language: `zh`,
                                        layoutId: `tgkZl8R82`,
                                        radius: 10,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        /*#__PURE__*/ g(W, {
                          breakpoint: E,
                          overrides: { dm0OoW02Q: { __framer__styleAppearEffectEnabled: void 0 } },
                          children: /*#__PURE__*/ _($n, {
                            __framer__animate: { transition: Wr },
                            __framer__animateOnce: !0,
                            __framer__enter: Ur,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-lzr2oi`,
                            "data-framer-name": `uns agnet`,
                            id: R,
                            ref: I,
                            children: [
                              /*#__PURE__*/ g(`div`, {
                                className: `framer-vbfw1q`,
                                children: /*#__PURE__*/ g(W, {
                                  breakpoint: E,
                                  overrides: {
                                    dm0OoW02Q: { __framer__styleTransformEffectEnabled: void 0 },
                                  },
                                  children: /*#__PURE__*/ _(cr, {
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        ref: N,
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        ref: I,
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                    ],
                                    __framer__transformTrigger: `onScrollTarget`,
                                    __framer__transformViewportThreshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1nj18fg`,
                                    children: [
                                      /*#__PURE__*/ g(W, {
                                        breakpoint: E,
                                        overrides: {
                                          dm0OoW02Q: {
                                            children:
                                              Q(`v19`, u) ??
                                              /*#__PURE__*/ g(c, {
                                                children: /*#__PURE__*/ g(`p`, {
                                                  className: `framer-styles-preset-140plv3`,
                                                  "data-styles-preset": `TBRoaUTAt`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `start`,
                                                    "--framer-text-color": `var(--token-d2d554b8-e538-4f3d-a601-4167e4c07699, rgba(9, 9, 9, 0.8))`,
                                                  },
                                                  children: `03/ 仓库收发流程`,
                                                }),
                                              }),
                                          },
                                        },
                                        children: /*#__PURE__*/ g(w, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            Q(`v18`, u) ??
                                            /*#__PURE__*/ g(c, {
                                              children: /*#__PURE__*/ g(`p`, {
                                                className: `framer-styles-preset-140plv3`,
                                                "data-styles-preset": `TBRoaUTAt`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-d2d554b8-e538-4f3d-a601-4167e4c07699, rgba(9, 9, 9, 0.8))`,
                                                },
                                                children: `03/ 仓库收发流程`,
                                              }),
                                            }),
                                          className: `framer-17mglxj`,
                                          "data-framer-name": `Applications do not just consume data — they write`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      /*#__PURE__*/ g(x.div, {
                                        className: `framer-1bu6jn8`,
                                        children: /*#__PURE__*/ g(W, {
                                          breakpoint: E,
                                          overrides: {
                                            dm0OoW02Q: {
                                              children:
                                                Q(`v21`, u) ??
                                                /*#__PURE__*/ g(c, {
                                                  children: /*#__PURE__*/ _(`h1`, {
                                                    className: `framer-styles-preset-1k5p4j8`,
                                                    "data-styles-preset": `F3NdZsOi7`,
                                                    dir: `auto`,
                                                    style: { "--framer-text-alignment": `start` },
                                                    children: [
                                                      `原料与成品，`,
                                                      /*#__PURE__*/ g(`br`, {}),
                                                      `共用一套收发流程`,
                                                    ],
                                                  }),
                                                }),
                                            },
                                          },
                                          children: /*#__PURE__*/ g(w, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              Q(`v20`, u) ??
                                              /*#__PURE__*/ g(c, {
                                                children: /*#__PURE__*/ _(`h1`, {
                                                  className: `framer-styles-preset-1k5p4j8`,
                                                  "data-styles-preset": `F3NdZsOi7`,
                                                  dir: `auto`,
                                                  children: [
                                                    `原料与成品，`,
                                                    /*#__PURE__*/ g(`br`, {}),
                                                    `共用一套收发流程`,
                                                  ],
                                                }),
                                              }),
                                            className: `framer-1t54bpn`,
                                            "data-framer-name": `Applications do not just consume data — they write`,
                                            effect: qr,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ g(w, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          Q(`v22`, u) ??
                                          /*#__PURE__*/ g(c, {
                                            children: /*#__PURE__*/ g(`p`, {
                                              className: `framer-styles-preset-1ful33y`,
                                              "data-styles-preset": `HNigw6pHS`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `left` },
                                              children: `按业务类型区分来源与去向，仓库统一执行收货、存储和出库。`,
                                            }),
                                          }),
                                        className: `framer-1c44oqc`,
                                        "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ g(W, {
                                breakpoint: E,
                                overrides: {
                                  dm0OoW02Q: { __framer__styleTransformEffectEnabled: void 0 },
                                },
                                children: /*#__PURE__*/ g(ur, {
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: N,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: I,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-xco6hu`,
                                  children: /*#__PURE__*/ g(W, {
                                    breakpoint: E,
                                    overrides: {
                                      dm0OoW02Q: { transformTemplate: void 0 },
                                      oN9uXFHdk: { transformTemplate: void 0 },
                                    },
                                    children: /*#__PURE__*/ _(x.div, {
                                      className: `framer-ivtpzg`,
                                      "data-framer-name": `Frame 2147224438`,
                                      transformTemplate: Jr,
                                      children: [
                                        /*#__PURE__*/ _(x.div, {
                                          className: `framer-bm5ff2`,
                                          "data-framer-name": `Frame 2147224436`,
                                          children: [
                                            /*#__PURE__*/ _(x.div, {
                                              className: `framer-1wsvpnr`,
                                              "data-framer-name": `Frame 2147224432`,
                                              children: [
                                                /*#__PURE__*/ _(x.div, {
                                                  className: `framer-34y5ss`,
                                                  "data-framer-name": `Frame 2147224427`,
                                                  children: [
                                                    /*#__PURE__*/ g(x.div, {
                                                      className: `framer-uk60us`,
                                                      "data-border": !0,
                                                      "data-framer-name": `Frame 2147224425`,
                                                      children: /*#__PURE__*/ g(x.div, {
                                                        className: `framer-ldtf0i`,
                                                        "data-framer-name": `Icon`,
                                                        children: /*#__PURE__*/ g(P, {
                                                          className: `framer-1qv0gdp`,
                                                          "data-framer-name": `Vector`,
                                                          fill: `rgba(0,0,0,1)`,
                                                          intrinsicHeight: 25,
                                                          intrinsicWidth: 18,
                                                          svg: `<svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 24.5H17.5V20.125C17.4981 18.5011 16.8522 16.9443 15.7039 15.7961C14.5557 14.6478 12.9989 14.0019 11.375 14H6.125C4.50113 14.0019 2.94432 14.6478 1.79607 15.7961C0.647819 16.9443 0.00189891 18.5011 0 20.125V24.5Z" fill="#7EA815"/>
<path d="M2.625 6.125C2.625 7.33641 2.98422 8.52062 3.65725 9.52787C4.33027 10.5351 5.28687 11.3202 6.40606 11.7838C7.52526 12.2473 8.7568 12.3686 9.94493 12.1323C11.1331 11.896 12.2244 11.3126 13.081 10.456C13.9376 9.59943 14.521 8.50806 14.7573 7.31993C14.9936 6.13179 14.8723 4.90026 14.4088 3.78106C13.9452 2.66187 13.1601 1.70527 12.1529 1.03225C11.1456 0.359225 9.96141 0 8.75 0C7.12555 0 5.56763 0.645311 4.41897 1.79397C3.27031 2.94263 2.625 4.50055 2.625 6.125Z" fill="#7EA815"/>
</svg>
`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ _(x.div, {
                                                      className: `framer-14guhmr`,
                                                      "data-framer-name": `Frame 2147224426`,
                                                      children: [
                                                        /*#__PURE__*/ g(W, {
                                                          breakpoint: E,
                                                          overrides: {
                                                            dm0OoW02Q: {
                                                              children:
                                                                Q(`v24`, u) ??
                                                                /*#__PURE__*/ g(c, {
                                                                  children: /*#__PURE__*/ g(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                                      "--framer-font-size": `18px`,
                                                                      "--framer-font-style": `normal`,
                                                                      "--framer-font-variation-axes": `normal`,
                                                                      "--framer-font-weight": `500`,
                                                                      "--framer-letter-spacing": `-0.01em`,
                                                                      "--framer-line-height": `120%`,
                                                                      "--framer-text-color": `rgb(5, 11, 20)`,
                                                                    },
                                                                    children: `供应商`,
                                                                  }),
                                                                }),
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ g(w, {
                                                            __fromCanvasComponent: !0,
                                                            children:
                                                              Q(`v23`, u) ??
                                                              /*#__PURE__*/ g(c, {
                                                                children: /*#__PURE__*/ g(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--framer-font-size": `18px`,
                                                                    "--framer-line-height": `120%`,
                                                                  },
                                                                  children: /*#__PURE__*/ g(
                                                                    `span`,
                                                                    {
                                                                      style: {
                                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                                        "--framer-font-size": `18px`,
                                                                        "--framer-font-style": `normal`,
                                                                        "--framer-font-variation-axes": `normal`,
                                                                        "--framer-font-weight": `500`,
                                                                        "--framer-letter-spacing": `-0.01em`,
                                                                        "--framer-text-color": `rgb(5, 11, 20)`,
                                                                      },
                                                                      children: `供应商`,
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                            className: `framer-12cjy81`,
                                                            "data-framer-name": `Title`,
                                                            fonts: [`GF;IBM Plex Sans-500`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                        /*#__PURE__*/ g(W, {
                                                          breakpoint: E,
                                                          overrides: {
                                                            dm0OoW02Q: {
                                                              children:
                                                                Q(`v26`, u) ??
                                                                /*#__PURE__*/ g(c, {
                                                                  children: /*#__PURE__*/ g(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                                      "--framer-font-size": `14px`,
                                                                      "--framer-font-style": `normal`,
                                                                      "--framer-font-variation-axes": `normal`,
                                                                      "--framer-font-weight": `500`,
                                                                      "--framer-line-height": `1.5em`,
                                                                      "--framer-text-color": `rgb(135, 135, 135)`,
                                                                    },
                                                                    children: `物料收货`,
                                                                  }),
                                                                }),
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ g(w, {
                                                            __fromCanvasComponent: !0,
                                                            children:
                                                              Q(`v25`, u) ??
                                                              /*#__PURE__*/ g(c, {
                                                                children: /*#__PURE__*/ g(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--framer-font-size": `12px`,
                                                                    "--framer-line-height": `130%`,
                                                                  },
                                                                  children: /*#__PURE__*/ g(
                                                                    `span`,
                                                                    {
                                                                      style: {
                                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-font-style": `normal`,
                                                                        "--framer-font-variation-axes": `normal`,
                                                                        "--framer-font-weight": `500`,
                                                                        "--framer-text-color": `rgb(135, 135, 135)`,
                                                                      },
                                                                      children: `物料收货`,
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                            className: `framer-wet2e2`,
                                                            "data-framer-name": `Relationship`,
                                                            fonts: [`GF;IBM Plex Sans-500`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ g(W, {
                                                  breakpoint: E,
                                                  overrides: {
                                                    dm0OoW02Q: { style: { rotate: 90 } },
                                                    oN9uXFHdk: { style: { rotate: 90 } },
                                                  },
                                                  children: /*#__PURE__*/ g(P, {
                                                    className: `framer-1ldb2iv`,
                                                    "data-framer-name": `Vector 4210`,
                                                    fill: `rgba(0,0,0,1)`,
                                                    intrinsicHeight: 8,
                                                    intrinsicWidth: 51,
                                                    svg: `<svg width="51" height="8" viewBox="-1 -1 51 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48.8237 2.88672L43.8237 -2.88322e-05L43.8237 5.77347L48.8237 2.88672ZM0 2.88672L-4.37114e-08 3.38672L44.3237 3.38672L44.3237 2.88672L44.3237 2.38672L4.37114e-08 2.38672L0 2.88672Z" fill="#7EA815"/>
</svg>
`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ _(x.div, {
                                              className: `framer-hlz0h3`,
                                              "data-framer-name": `Frame 2147224433`,
                                              children: [
                                                /*#__PURE__*/ _(x.div, {
                                                  className: `framer-ji1jph`,
                                                  "data-framer-name": `Frame 2147224428`,
                                                  children: [
                                                    /*#__PURE__*/ g(x.div, {
                                                      className: `framer-1r5ywec`,
                                                      "data-border": !0,
                                                      "data-framer-name": `Frame 2147224425`,
                                                      children: /*#__PURE__*/ g(x.div, {
                                                        className: `framer-17vi60a`,
                                                        "data-framer-name": `Icon`,
                                                        children: /*#__PURE__*/ g(P, {
                                                          className: `framer-166iqv2`,
                                                          "data-framer-name": `Vector`,
                                                          fill: `rgba(0,0,0,1)`,
                                                          intrinsicHeight: 25,
                                                          intrinsicWidth: 20,
                                                          svg: `<svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.62501 0C7.07325 0.00310284 4.6269 1.01816 2.82253 2.82252C1.01817 4.62689 0.00311279 7.07324 9.95197e-06 9.625C-0.00300316 11.7104 0.678258 13.7391 1.93927 15.4C1.93927 15.4 2.20177 15.7452 2.24395 15.7952L9.62501 24.5L17.0091 15.7915C17.048 15.7448 17.3107 15.3996 17.3107 15.3996L17.3121 15.3976C18.5723 13.7373 19.2531 11.7094 19.25 9.625C19.2469 7.07324 18.2318 4.62689 16.4275 2.82252C14.6231 1.01816 12.1768 0.00310284 9.62501 0V0ZM10.5 14H8.75001V12.25H10.5V14ZM10.5 10.5H8.75001V8.75H10.5V10.5ZM14 14H12.25V7H7.00001V14H5.25001V7C5.25054 6.53603 5.43509 6.09123 5.76316 5.76315C6.09123 5.43508 6.53604 5.25053 7.00001 5.25H12.25C12.714 5.25053 13.1588 5.43508 13.4869 5.76315C13.8149 6.09123 13.9995 6.53603 14 7V14Z" fill="#7EA815"/>
</svg>
`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ _(x.div, {
                                                      className: `framer-1ecgji6`,
                                                      "data-framer-name": `Frame 2147224426`,
                                                      children: [
                                                        /*#__PURE__*/ g(W, {
                                                          breakpoint: E,
                                                          overrides: {
                                                            dm0OoW02Q: {
                                                              children:
                                                                Q(`v28`, u) ??
                                                                /*#__PURE__*/ g(c, {
                                                                  children: /*#__PURE__*/ g(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                                      "--framer-font-size": `18px`,
                                                                      "--framer-font-style": `normal`,
                                                                      "--framer-font-variation-axes": `normal`,
                                                                      "--framer-font-weight": `500`,
                                                                      "--framer-letter-spacing": `-0.01em`,
                                                                      "--framer-line-height": `120%`,
                                                                      "--framer-text-color": `rgb(5, 11, 20)`,
                                                                    },
                                                                    children: `生产`,
                                                                  }),
                                                                }),
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ g(w, {
                                                            __fromCanvasComponent: !0,
                                                            children:
                                                              Q(`v27`, u) ??
                                                              /*#__PURE__*/ g(c, {
                                                                children: /*#__PURE__*/ g(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--framer-font-size": `18px`,
                                                                    "--framer-line-height": `120%`,
                                                                  },
                                                                  children: /*#__PURE__*/ g(
                                                                    `span`,
                                                                    {
                                                                      style: {
                                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                                        "--framer-font-size": `18px`,
                                                                        "--framer-font-style": `normal`,
                                                                        "--framer-font-variation-axes": `normal`,
                                                                        "--framer-font-weight": `500`,
                                                                        "--framer-letter-spacing": `-0.01em`,
                                                                        "--framer-text-color": `rgb(5, 11, 20)`,
                                                                      },
                                                                      children: `生产`,
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                            className: `framer-x6l2vt`,
                                                            "data-framer-name": `Title`,
                                                            fonts: [`GF;IBM Plex Sans-500`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                        /*#__PURE__*/ g(W, {
                                                          breakpoint: E,
                                                          overrides: {
                                                            dm0OoW02Q: {
                                                              children:
                                                                Q(`v30`, u) ??
                                                                /*#__PURE__*/ g(c, {
                                                                  children: /*#__PURE__*/ g(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                                      "--framer-font-size": `14px`,
                                                                      "--framer-font-style": `normal`,
                                                                      "--framer-font-variation-axes": `normal`,
                                                                      "--framer-font-weight": `500`,
                                                                      "--framer-line-height": `1.5em`,
                                                                      "--framer-text-color": `rgb(135, 135, 135)`,
                                                                    },
                                                                    children: `完工入库`,
                                                                  }),
                                                                }),
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ g(w, {
                                                            __fromCanvasComponent: !0,
                                                            children:
                                                              Q(`v29`, u) ??
                                                              /*#__PURE__*/ g(c, {
                                                                children: /*#__PURE__*/ g(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--framer-font-size": `12px`,
                                                                    "--framer-line-height": `130%`,
                                                                  },
                                                                  children: /*#__PURE__*/ g(
                                                                    `span`,
                                                                    {
                                                                      style: {
                                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-font-style": `normal`,
                                                                        "--framer-font-variation-axes": `normal`,
                                                                        "--framer-font-weight": `500`,
                                                                        "--framer-text-color": `rgb(135, 135, 135)`,
                                                                      },
                                                                      children: `完工入库`,
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                            className: `framer-1wd5t6r`,
                                                            "data-framer-name": `Relationship`,
                                                            fonts: [`GF;IBM Plex Sans-500`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ g(W, {
                                                  breakpoint: E,
                                                  overrides: {
                                                    dm0OoW02Q: { style: { rotate: 90 } },
                                                    oN9uXFHdk: { style: { rotate: 90 } },
                                                  },
                                                  children: /*#__PURE__*/ g(P, {
                                                    className: `framer-1miao24`,
                                                    "data-framer-name": `Vector 4211`,
                                                    fill: `rgba(0,0,0,1)`,
                                                    intrinsicHeight: 8,
                                                    intrinsicWidth: 51,
                                                    svg: `<svg width="51" height="8" viewBox="-1 -1 51 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48.8237 2.88672L43.8237 -2.88322e-05L43.8237 5.77347L48.8237 2.88672ZM0 2.88672L-4.37114e-08 3.38672L44.3237 3.38672L44.3237 2.88672L44.3237 2.38672L4.37114e-08 2.38672L0 2.88672Z" fill="#7EA815"/>
</svg>
`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ _(x.div, {
                                          className: `framer-60z1l5`,
                                          "data-border": !0,
                                          "data-framer-name": `Frame 2147224429`,
                                          children: [
                                            /*#__PURE__*/ g(x.div, {
                                              className: `framer-1ce1gm1`,
                                              "data-framer-name": `Warehouse title`,
                                              children: /*#__PURE__*/ g(W, {
                                                breakpoint: E,
                                                overrides: {
                                                  dm0OoW02Q: {
                                                    children:
                                                      Q(`v32`, u) ??
                                                      /*#__PURE__*/ g(c, {
                                                        children: /*#__PURE__*/ g(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `24.42px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `500`,
                                                            "--framer-letter-spacing": `-0.01em`,
                                                            "--framer-line-height": `120%`,
                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                          },
                                                          children: `工厂仓库`,
                                                        }),
                                                      }),
                                                  },
                                                },
                                                children: /*#__PURE__*/ g(w, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    Q(`v31`, u) ??
                                                    /*#__PURE__*/ g(c, {
                                                      children: /*#__PURE__*/ g(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-font-size": `24.41880226135254px`,
                                                          "--framer-line-height": `120%`,
                                                        },
                                                        children: /*#__PURE__*/ g(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `24.42px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `500`,
                                                            "--framer-letter-spacing": `-0.01em`,
                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                          },
                                                          children: `工厂仓库`,
                                                        }),
                                                      }),
                                                    }),
                                                  className: `framer-mwfw88`,
                                                  "data-framer-name": `Title`,
                                                  fonts: [`GF;IBM Plex Sans-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            }),
                                            /*#__PURE__*/ _(x.div, {
                                              className: `framer-18ugz76`,
                                              "data-framer-name": `Group 1707478238`,
                                              children: [
                                                /*#__PURE__*/ _(x.div, {
                                                  className: `framer-1pgt1bz`,
                                                  "data-border": !0,
                                                  "data-framer-name": `Frame 2147224427`,
                                                  children: [
                                                    /*#__PURE__*/ g(x.div, {
                                                      className: `framer-tjj33l`,
                                                      "data-framer-name": `Frame 2147224425`,
                                                      children: /*#__PURE__*/ g(x.div, {
                                                        className: `framer-zlk48z`,
                                                        "data-framer-name": `Icon`,
                                                        children: /*#__PURE__*/ g(P, {
                                                          className: `framer-1eduduk`,
                                                          "data-framer-name": `Vector`,
                                                          fill: `rgba(0,0,0,1)`,
                                                          intrinsicHeight: 25,
                                                          intrinsicWidth: 25,
                                                          svg: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.2497 7L18.0123 8.23734L21.1501 11.375H8.6612C8.48809 10.5352 8.07272 9.76455 7.46642 9.15824C6.86011 8.55194 6.08945 8.13657 5.24966 7.96346V0H3.49966V7.96346C2.51169 8.16521 1.62374 8.70205 0.98603 9.48314C0.348319 10.2642 0 11.2416 0 12.25C0 13.2584 0.348319 14.2358 0.98603 15.0169C1.62374 15.798 2.51169 16.3348 3.49966 16.5365V24.5H5.24966V16.5365C6.08945 16.3634 6.86011 15.9481 7.46642 15.3418C8.07272 14.7355 8.48809 13.9648 8.6612 13.125H21.1501L18.0123 16.2627L19.2497 17.5L24.4997 12.25L19.2497 7ZM4.37466 14.875C3.85548 14.875 3.34797 14.721 2.91629 14.4326C2.48461 14.1442 2.14816 13.7342 1.94948 13.2545C1.7508 12.7749 1.69881 12.2471 1.8001 11.7379C1.90138 11.2287 2.15139 10.761 2.5185 10.3938C2.88562 10.0267 3.35335 9.77673 3.86255 9.67544C4.37175 9.57415 4.89955 9.62614 5.3792 9.82482C5.85886 10.0235 6.26883 10.3599 6.55727 10.7916C6.84571 11.2233 6.99966 11.7308 6.99966 12.25C6.9989 12.946 6.72209 13.6132 6.22997 14.1053C5.73785 14.5974 5.07062 14.8742 4.37466 14.875Z" fill="#161616"/>
</svg>
`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ _(x.div, {
                                                      className: `framer-a77xsp`,
                                                      "data-framer-name": `Frame 2147224426`,
                                                      children: [
                                                        /*#__PURE__*/ g(W, {
                                                          breakpoint: E,
                                                          overrides: {
                                                            dm0OoW02Q: {
                                                              children:
                                                                Q(`v34`, u) ??
                                                                /*#__PURE__*/ g(c, {
                                                                  children: /*#__PURE__*/ g(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                                      "--framer-font-size": `18px`,
                                                                      "--framer-font-style": `normal`,
                                                                      "--framer-font-variation-axes": `normal`,
                                                                      "--framer-font-weight": `500`,
                                                                      "--framer-letter-spacing": `-0.01em`,
                                                                      "--framer-line-height": `120%`,
                                                                      "--framer-text-alignment": `center`,
                                                                      "--framer-text-color": `rgb(5, 11, 20)`,
                                                                    },
                                                                    children: `接收`,
                                                                  }),
                                                                }),
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ g(w, {
                                                            __fromCanvasComponent: !0,
                                                            children:
                                                              Q(`v33`, u) ??
                                                              /*#__PURE__*/ g(c, {
                                                                children: /*#__PURE__*/ g(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--framer-font-size": `18px`,
                                                                    "--framer-line-height": `120%`,
                                                                    "--framer-text-alignment": `center`,
                                                                  },
                                                                  children: /*#__PURE__*/ g(
                                                                    `span`,
                                                                    {
                                                                      style: {
                                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                                        "--framer-font-size": `18px`,
                                                                        "--framer-font-style": `normal`,
                                                                        "--framer-font-variation-axes": `normal`,
                                                                        "--framer-font-weight": `500`,
                                                                        "--framer-letter-spacing": `-0.01em`,
                                                                        "--framer-text-color": `rgb(5, 11, 20)`,
                                                                      },
                                                                      children: `接收`,
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                            className: `framer-1c841kl`,
                                                            "data-framer-name": `Title`,
                                                            fonts: [`GF;IBM Plex Sans-500`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                        /*#__PURE__*/ g(W, {
                                                          breakpoint: E,
                                                          overrides: {
                                                            dm0OoW02Q: {
                                                              children:
                                                                Q(`v36`, u) ??
                                                                /*#__PURE__*/ g(c, {
                                                                  children: /*#__PURE__*/ g(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                                      "--framer-font-size": `14px`,
                                                                      "--framer-font-style": `normal`,
                                                                      "--framer-font-variation-axes": `normal`,
                                                                      "--framer-font-weight": `500`,
                                                                      "--framer-line-height": `1.5em`,
                                                                      "--framer-text-alignment": `center`,
                                                                      "--framer-text-color": `rgb(135, 135, 135)`,
                                                                    },
                                                                    children: `上架`,
                                                                  }),
                                                                }),
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ g(w, {
                                                            __fromCanvasComponent: !0,
                                                            children:
                                                              Q(`v35`, u) ??
                                                              /*#__PURE__*/ g(c, {
                                                                children: /*#__PURE__*/ g(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--framer-font-size": `12px`,
                                                                    "--framer-line-height": `130%`,
                                                                    "--framer-text-alignment": `center`,
                                                                  },
                                                                  children: /*#__PURE__*/ g(
                                                                    `span`,
                                                                    {
                                                                      style: {
                                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-font-style": `normal`,
                                                                        "--framer-font-variation-axes": `normal`,
                                                                        "--framer-font-weight": `500`,
                                                                        "--framer-text-color": `rgb(135, 135, 135)`,
                                                                      },
                                                                      children: `上架`,
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                            className: `framer-cwm3m4`,
                                                            "data-framer-name": `Relationship`,
                                                            fonts: [`GF;IBM Plex Sans-500`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                z() &&
                                                  /*#__PURE__*/ g(P, {
                                                    className: `framer-1vqmh3w hidden-1os3pxh`,
                                                    "data-framer-name": `Vector 4211`,
                                                    fill: `rgba(0,0,0,1)`,
                                                    intrinsicHeight: 8,
                                                    intrinsicWidth: 31,
                                                    svg: `<svg width="31" height="8" viewBox="-1 -1 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.4497 2.88672L23.4497 -3.06133e-05L23.4497 5.77347L28.4497 2.88672ZM0 2.88672L-4.37114e-08 3.38672L23.9497 3.38672L23.9497 2.88672L23.9497 2.38672L4.37114e-08 2.38672L0 2.88672Z" fill="#7EA815"/>
</svg>
`,
                                                    withExternalLayout: !0,
                                                  }),
                                                /*#__PURE__*/ _(x.div, {
                                                  className: `framer-zgqpvu`,
                                                  "data-border": !0,
                                                  "data-framer-name": `Frame 2147224428`,
                                                  children: [
                                                    /*#__PURE__*/ g(x.div, {
                                                      className: `framer-1r694sy`,
                                                      "data-framer-name": `Frame 2147224425`,
                                                      children: /*#__PURE__*/ g(x.div, {
                                                        className: `framer-sm1qqy`,
                                                        "data-framer-name": `Icon`,
                                                        children: /*#__PURE__*/ g(P, {
                                                          className: `framer-qifr6q`,
                                                          "data-framer-name": `Vector`,
                                                          fill: `rgba(0,0,0,1)`,
                                                          intrinsicHeight: 21,
                                                          intrinsicWidth: 21,
                                                          svg: `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.25 21H1.75C1.28602 20.9995 0.841184 20.815 0.5131 20.4869C0.185017 20.1588 0.000486413 19.714 0 19.25V6.125C0.000486413 5.66102 0.185017 5.21618 0.5131 4.8881C0.841184 4.56002 1.28602 4.37549 1.75 4.375H6.70819C7.08692 4.37561 7.45536 4.49836 7.7588 4.725L10.7918 7H19.25C19.714 7.00049 20.1588 7.18502 20.4869 7.5131C20.815 7.84118 20.9995 8.28602 21 8.75V19.25C20.9995 19.714 20.815 20.1588 20.4869 20.4869C20.1588 20.815 19.714 20.9995 19.25 21ZM6.70819 6.125H1.74869L1.75 19.25H19.25V8.75H10.2082L6.70819 6.125Z" fill="#161616"/>
<path d="M21 4.375H11.9582L8.45819 1.75H1.75V0H8.45819C8.83692 0.000614381 9.20536 0.123356 9.5088 0.35L12.5418 2.625H21V4.375Z" fill="#161616"/>
</svg>
`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ _(x.div, {
                                                      className: `framer-16qknc`,
                                                      "data-framer-name": `Frame 2147224426`,
                                                      children: [
                                                        /*#__PURE__*/ g(W, {
                                                          breakpoint: E,
                                                          overrides: {
                                                            dm0OoW02Q: {
                                                              children:
                                                                Q(`v38`, u) ??
                                                                /*#__PURE__*/ g(c, {
                                                                  children: /*#__PURE__*/ g(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                                      "--framer-font-size": `18px`,
                                                                      "--framer-font-style": `normal`,
                                                                      "--framer-font-variation-axes": `normal`,
                                                                      "--framer-font-weight": `500`,
                                                                      "--framer-letter-spacing": `-0.01em`,
                                                                      "--framer-line-height": `120%`,
                                                                      "--framer-text-alignment": `center`,
                                                                      "--framer-text-color": `rgb(5, 11, 20)`,
                                                                    },
                                                                    children: `库存`,
                                                                  }),
                                                                }),
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ g(w, {
                                                            __fromCanvasComponent: !0,
                                                            children:
                                                              Q(`v37`, u) ??
                                                              /*#__PURE__*/ g(c, {
                                                                children: /*#__PURE__*/ g(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--framer-font-size": `18px`,
                                                                    "--framer-line-height": `120%`,
                                                                    "--framer-text-alignment": `center`,
                                                                  },
                                                                  children: /*#__PURE__*/ g(
                                                                    `span`,
                                                                    {
                                                                      style: {
                                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                                        "--framer-font-size": `18px`,
                                                                        "--framer-font-style": `normal`,
                                                                        "--framer-font-variation-axes": `normal`,
                                                                        "--framer-font-weight": `500`,
                                                                        "--framer-letter-spacing": `-0.01em`,
                                                                        "--framer-text-color": `rgb(5, 11, 20)`,
                                                                      },
                                                                      children: `库存`,
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                            className: `framer-1bxk3l5`,
                                                            "data-framer-name": `Title`,
                                                            fonts: [`GF;IBM Plex Sans-500`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                        /*#__PURE__*/ g(W, {
                                                          breakpoint: E,
                                                          overrides: {
                                                            dm0OoW02Q: {
                                                              children:
                                                                Q(`v40`, u) ??
                                                                /*#__PURE__*/ g(c, {
                                                                  children: /*#__PURE__*/ g(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                                      "--framer-font-size": `14px`,
                                                                      "--framer-font-style": `normal`,
                                                                      "--framer-font-variation-axes": `normal`,
                                                                      "--framer-font-weight": `500`,
                                                                      "--framer-line-height": `1.5em`,
                                                                      "--framer-text-alignment": `center`,
                                                                      "--framer-text-color": `rgb(135, 135, 135)`,
                                                                    },
                                                                    children: `控制`,
                                                                  }),
                                                                }),
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ g(w, {
                                                            __fromCanvasComponent: !0,
                                                            children:
                                                              Q(`v39`, u) ??
                                                              /*#__PURE__*/ g(c, {
                                                                children: /*#__PURE__*/ g(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--framer-font-size": `12px`,
                                                                    "--framer-line-height": `130%`,
                                                                    "--framer-text-alignment": `center`,
                                                                  },
                                                                  children: /*#__PURE__*/ g(
                                                                    `span`,
                                                                    {
                                                                      style: {
                                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-font-style": `normal`,
                                                                        "--framer-font-variation-axes": `normal`,
                                                                        "--framer-font-weight": `500`,
                                                                        "--framer-text-color": `rgb(135, 135, 135)`,
                                                                      },
                                                                      children: `控制`,
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                            className: `framer-1f8j12k`,
                                                            "data-framer-name": `Relationship`,
                                                            fonts: [`GF;IBM Plex Sans-500`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                z() &&
                                                  /*#__PURE__*/ g(P, {
                                                    className: `framer-11qre4j hidden-1os3pxh`,
                                                    "data-framer-name": `Vector 4212`,
                                                    fill: `rgba(0,0,0,1)`,
                                                    intrinsicHeight: 8,
                                                    intrinsicWidth: 31,
                                                    svg: `<svg width="31" height="8" viewBox="-1 -1 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.4497 2.88672L23.4497 -3.06133e-05L23.4497 5.77347L28.4497 2.88672ZM0 2.88672L-4.37114e-08 3.38672L23.9497 3.38672L23.9497 2.88672L23.9497 2.38672L4.37114e-08 2.38672L0 2.88672Z" fill="#7EA815"/>
</svg>
`,
                                                    withExternalLayout: !0,
                                                  }),
                                                /*#__PURE__*/ _(x.div, {
                                                  className: `framer-mv37ba`,
                                                  "data-border": !0,
                                                  "data-framer-name": `Frame 2147224429`,
                                                  children: [
                                                    /*#__PURE__*/ g(x.div, {
                                                      className: `framer-16fp1xt`,
                                                      "data-framer-name": `Frame 2147224425`,
                                                      children: /*#__PURE__*/ g(x.div, {
                                                        className: `framer-53xp7i`,
                                                        "data-framer-name": `Icon`,
                                                        children: /*#__PURE__*/ g(P, {
                                                          className: `framer-me26gx`,
                                                          "data-framer-name": `Vector`,
                                                          fill: `rgba(0,0,0,1)`,
                                                          intrinsicHeight: 25,
                                                          intrinsicWidth: 25,
                                                          svg: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.731 13.019C23.4889 12.7755 23.2011 12.5823 22.8841 12.4503C22.5671 12.3183 22.2271 12.2502 21.8838 12.25H21.875C21.5301 12.249 21.1885 12.3164 20.8699 12.4484C20.5513 12.5804 20.2621 12.7744 20.019 13.019L15.7306 17.3075C15.6833 16.6481 15.3884 16.031 14.9052 15.5799C14.422 15.1287 13.7861 14.8769 13.125 14.875H7C5.8401 14.8764 4.72809 15.3377 3.90792 16.1579C3.08774 16.9781 2.62637 18.0901 2.625 19.25V19.8336L0 23.3302L1.4 24.3802L4.375 20.4164V19.25C4.37576 18.554 4.65257 17.8868 5.14469 17.3947C5.63681 16.9026 6.30404 16.6258 7 16.625H13.125C13.3571 16.625 13.5796 16.7172 13.7437 16.8813C13.9078 17.0454 14 17.2679 14 17.5C14 17.7321 13.9078 17.9546 13.7437 18.1187C13.5796 18.2828 13.3571 18.375 13.125 18.375H9.625V20.125H13.9376C14.3975 20.1263 14.8531 20.0364 15.2779 19.8604C15.7028 19.6844 16.0885 19.4258 16.4126 19.0996L21.2564 14.2564C21.3374 14.1748 21.4338 14.1102 21.54 14.0662C21.6462 14.0222 21.7601 13.9997 21.875 14H21.878C22.0508 14.0006 22.2195 14.0524 22.3629 14.1488C22.5063 14.2451 22.618 14.3818 22.6838 14.5415C22.7496 14.7013 22.7667 14.8769 22.7329 15.0464C22.699 15.2158 22.6158 15.3714 22.4936 15.4936L16.0064 21.981C15.7632 22.2256 15.4739 22.4195 15.1553 22.5515C14.8366 22.6836 14.4949 22.751 14.15 22.75H7.875V24.5H14.15C14.7248 24.5016 15.2942 24.3891 15.8252 24.1691C16.3562 23.9491 16.8384 23.6259 17.2436 23.2183L23.731 16.731C23.9748 16.4873 24.1682 16.1979 24.3001 15.8795C24.4321 15.561 24.5 15.2197 24.5 14.875C24.5 14.5303 24.4321 14.189 24.3001 13.8705C24.1682 13.5521 23.9748 13.2627 23.731 13.019Z" fill="#161616"/>
<path d="M17.1378 5.76275L14 8.75V0H12.25V8.75L9.11225 5.76275L7.875 7L13.125 12.25L18.375 7L17.1378 5.76275Z" fill="#161616"/>
</svg>
`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ _(x.div, {
                                                      className: `framer-11bp5zz`,
                                                      "data-framer-name": `Frame 2147224426`,
                                                      children: [
                                                        /*#__PURE__*/ g(W, {
                                                          breakpoint: E,
                                                          overrides: {
                                                            dm0OoW02Q: {
                                                              children:
                                                                Q(`v42`, u) ??
                                                                /*#__PURE__*/ g(c, {
                                                                  children: /*#__PURE__*/ g(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                                      "--framer-font-size": `18px`,
                                                                      "--framer-font-style": `normal`,
                                                                      "--framer-font-variation-axes": `normal`,
                                                                      "--framer-font-weight": `500`,
                                                                      "--framer-letter-spacing": `-0.01em`,
                                                                      "--framer-line-height": `120%`,
                                                                      "--framer-text-alignment": `center`,
                                                                      "--framer-text-color": `rgb(5, 11, 20)`,
                                                                    },
                                                                    children: `获取`,
                                                                  }),
                                                                }),
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ g(w, {
                                                            __fromCanvasComponent: !0,
                                                            children:
                                                              Q(`v41`, u) ??
                                                              /*#__PURE__*/ g(c, {
                                                                children: /*#__PURE__*/ g(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--framer-font-size": `18px`,
                                                                    "--framer-line-height": `120%`,
                                                                    "--framer-text-alignment": `center`,
                                                                  },
                                                                  children: /*#__PURE__*/ g(
                                                                    `span`,
                                                                    {
                                                                      style: {
                                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                                        "--framer-font-size": `18px`,
                                                                        "--framer-font-style": `normal`,
                                                                        "--framer-font-variation-axes": `normal`,
                                                                        "--framer-font-weight": `500`,
                                                                        "--framer-letter-spacing": `-0.01em`,
                                                                        "--framer-text-color": `rgb(5, 11, 20)`,
                                                                      },
                                                                      children: `获取`,
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                            className: `framer-13ytz5g`,
                                                            "data-framer-name": `Title`,
                                                            fonts: [`GF;IBM Plex Sans-500`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                        /*#__PURE__*/ g(W, {
                                                          breakpoint: E,
                                                          overrides: {
                                                            dm0OoW02Q: {
                                                              children:
                                                                Q(`v44`, u) ??
                                                                /*#__PURE__*/ g(c, {
                                                                  children: /*#__PURE__*/ g(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                                      "--framer-font-size": `14px`,
                                                                      "--framer-font-style": `normal`,
                                                                      "--framer-font-variation-axes": `normal`,
                                                                      "--framer-font-weight": `500`,
                                                                      "--framer-line-height": `1.5em`,
                                                                      "--framer-text-alignment": `center`,
                                                                      "--framer-text-color": `rgb(135, 135, 135)`,
                                                                    },
                                                                    children: `验证`,
                                                                  }),
                                                                }),
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ g(w, {
                                                            __fromCanvasComponent: !0,
                                                            children:
                                                              Q(`v43`, u) ??
                                                              /*#__PURE__*/ g(c, {
                                                                children: /*#__PURE__*/ g(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--framer-font-size": `12px`,
                                                                    "--framer-line-height": `130%`,
                                                                    "--framer-text-alignment": `center`,
                                                                  },
                                                                  children: /*#__PURE__*/ g(
                                                                    `span`,
                                                                    {
                                                                      style: {
                                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-font-style": `normal`,
                                                                        "--framer-font-variation-axes": `normal`,
                                                                        "--framer-font-weight": `500`,
                                                                        "--framer-text-color": `rgb(135, 135, 135)`,
                                                                      },
                                                                      children: `验证`,
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                            className: `framer-1gmeo0n`,
                                                            "data-framer-name": `Relationship`,
                                                            fonts: [`GF;IBM Plex Sans-500`],
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
                                          ],
                                        }),
                                        /*#__PURE__*/ _(x.div, {
                                          className: `framer-hvkky7`,
                                          "data-framer-name": `Frame 2147224437`,
                                          children: [
                                            /*#__PURE__*/ _(x.div, {
                                              className: `framer-1cxi5rd`,
                                              "data-framer-name": `Frame 2147224434`,
                                              children: [
                                                /*#__PURE__*/ g(W, {
                                                  breakpoint: E,
                                                  overrides: {
                                                    dm0OoW02Q: { style: { rotate: 90 } },
                                                    oN9uXFHdk: { style: { rotate: 90 } },
                                                  },
                                                  children: /*#__PURE__*/ g(P, {
                                                    className: `framer-1j5n1or`,
                                                    "data-framer-name": `Vector 4212`,
                                                    fill: `rgba(0,0,0,1)`,
                                                    intrinsicHeight: 8,
                                                    intrinsicWidth: 51,
                                                    svg: `<svg width="51" height="8" viewBox="-1 -1 51 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48.8237 2.88672L43.8237 -2.88322e-05L43.8237 5.77347L48.8237 2.88672ZM0 2.88672L-4.37114e-08 3.38672L44.3237 3.38672L44.3237 2.88672L44.3237 2.38672L4.37114e-08 2.38672L0 2.88672Z" fill="#7EA815"/>
</svg>
`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                                /*#__PURE__*/ _(x.div, {
                                                  className: `framer-16nghdz`,
                                                  "data-framer-name": `Frame 2147224430`,
                                                  children: [
                                                    /*#__PURE__*/ g(P, {
                                                      className: `framer-e9t2ko`,
                                                      "data-framer-name": `Frame 2147224425`,
                                                      fill: `rgba(0,0,0,1)`,
                                                      intrinsicHeight: 44,
                                                      intrinsicWidth: 44,
                                                      svg: `<svg width="44" height="44" viewBox="-1 -1 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-0.65625" y="-0.65625" width="43.3125" height="43.3125" rx="2.65625" fill="white"/>
<rect x="-0.65625" y="-0.65625" width="43.3125" height="43.3125" rx="2.65625" stroke="#DCF797" stroke-width="1.3125"/>
<rect width="28" height="28" transform="translate(7 7)" fill="white" fill-opacity="0.01" style="mix-blend-mode:multiply"/>
<path d="M30.6251 21.6655C30.6251 21.4467 30.6251 21.228 30.6251 21.0005C30.6251 20.773 30.6251 20.5542 30.6251 20.3267L32.3051 18.8567C32.6148 18.5838 32.818 18.2101 32.8788 17.8018C32.9397 17.3935 32.8542 16.9769 32.6376 16.6255L30.5726 13.1255C30.4192 12.8597 30.1985 12.639 29.9328 12.4854C29.6671 12.3318 29.3657 12.2508 29.0588 12.2505C28.8687 12.249 28.6795 12.2786 28.4988 12.338L26.3726 13.0555C26.0055 12.8115 25.6226 12.5923 25.2263 12.3992L24.7801 10.1942C24.7001 9.79138 24.4809 9.42951 24.161 9.17197C23.8411 8.91442 23.4407 8.77761 23.0301 8.78548H18.9351C18.5245 8.77761 18.1241 8.91442 17.8042 9.17197C17.4843 9.42951 17.2651 9.79138 17.1851 10.1942L16.7388 12.3992C16.3398 12.5923 15.9539 12.8115 15.5838 13.0555L13.5013 12.303C13.3187 12.2554 13.1296 12.2377 12.9413 12.2505C12.6345 12.2508 12.3331 12.3318 12.0674 12.4854C11.8017 12.639 11.581 12.8597 11.4276 13.1255L9.3626 16.6255C9.15836 16.9763 9.08247 17.3873 9.14792 17.788C9.21336 18.1886 9.41608 18.5541 9.72135 18.8217L11.3751 20.3355C11.3751 20.5542 11.3751 20.773 11.3751 21.0005C11.3751 21.228 11.3751 21.4467 11.3751 21.6742L9.72135 23.1442C9.40746 23.4137 9.1992 23.7857 9.13352 24.1942C9.06785 24.6026 9.14901 25.0212 9.3626 25.3755L11.4276 28.8755C11.581 29.1412 11.8017 29.362 12.0674 29.5156C12.3331 29.6692 12.6345 29.7502 12.9413 29.7505C13.1315 29.7519 13.3207 29.7224 13.5013 29.663L15.6276 28.9455C15.9947 29.1894 16.3776 29.4087 16.7738 29.6017L17.2201 31.8067C17.3001 32.2096 17.5193 32.5714 17.8392 32.829C18.1591 33.0865 18.5595 33.2233 18.9701 33.2155H23.1001C23.5107 33.2233 23.9111 33.0865 24.231 32.829C24.5509 32.5714 24.7701 32.2096 24.8501 31.8067L25.2963 29.6017C25.6954 29.4087 26.0812 29.1895 26.4513 28.9455L28.5688 29.663C28.7495 29.7224 28.9387 29.7519 29.1288 29.7505C29.4357 29.7502 29.7371 29.6692 30.0028 29.5156C30.2685 29.362 30.4892 29.1412 30.6426 28.8755L32.6376 25.3755C32.8418 25.0246 32.9177 24.6137 32.8523 24.213C32.7868 23.8123 32.5841 23.4469 32.2788 23.1792L30.6251 21.6655Z" fill="#7EA815"/>
<path d="M21.0001 26.2505C19.9617 26.2505 18.9467 25.9426 18.0834 25.3657C17.22 24.7888 16.5471 23.9689 16.1497 23.0096C15.7524 22.0503 15.6484 20.9947 15.851 19.9763C16.0535 18.9579 16.5536 18.0224 17.2878 17.2882C18.022 16.5539 18.9575 16.0539 19.9759 15.8514C20.9943 15.6488 22.0499 15.7528 23.0092 16.1501C23.9685 16.5475 24.7884 17.2204 25.3653 18.0837C25.9422 18.9471 26.2501 19.9621 26.2501 21.0005C26.2571 21.6919 26.1261 22.3777 25.8648 23.0178C25.6034 23.658 25.217 24.2395 24.7281 24.7284C24.2391 25.2173 23.6576 25.6038 23.0175 25.8651C22.3773 26.1265 21.6915 26.2575 21.0001 26.2505ZM21.0001 17.5005C20.5375 17.4897 20.0776 17.5729 19.6481 17.7449C19.2186 17.917 18.8284 18.1744 18.5012 18.5016C18.1741 18.8288 17.9166 19.2189 17.7446 19.6484C17.5725 20.078 17.4893 20.5379 17.5001 21.0005C17.4893 21.4631 17.5725 21.923 17.7446 22.3525C17.9166 22.782 18.1741 23.1722 18.5012 23.4993C18.8284 23.8265 19.2186 24.0839 19.6481 24.256C20.0776 24.4281 20.5375 24.5113 21.0001 24.5005C21.4627 24.5113 21.9226 24.4281 22.3521 24.256C22.7816 24.0839 23.1718 23.8265 23.499 23.4993C23.8261 23.1722 24.0836 22.782 24.2556 22.3525C24.4277 21.923 24.5109 21.4631 24.5001 21.0005C24.5109 20.5379 24.4277 20.078 24.2556 19.6484C24.0836 19.2189 23.8261 18.8288 23.499 18.5016C23.1718 18.1744 22.7816 17.917 22.3521 17.7449C21.9226 17.5729 21.4627 17.4897 21.0001 17.5005Z" fill="#7EA815"/>
<circle cx="21.0046" cy="21.0007" r="4.81714" fill="white"/>
</svg>
`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    /*#__PURE__*/ _(x.div, {
                                                      className: `framer-g0fjln`,
                                                      "data-framer-name": `Frame 2147224426`,
                                                      children: [
                                                        /*#__PURE__*/ g(W, {
                                                          breakpoint: E,
                                                          overrides: {
                                                            dm0OoW02Q: {
                                                              children:
                                                                Q(`v28`, u) ??
                                                                /*#__PURE__*/ g(c, {
                                                                  children: /*#__PURE__*/ g(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                                      "--framer-font-size": `18px`,
                                                                      "--framer-font-style": `normal`,
                                                                      "--framer-font-variation-axes": `normal`,
                                                                      "--framer-font-weight": `500`,
                                                                      "--framer-letter-spacing": `-0.01em`,
                                                                      "--framer-line-height": `120%`,
                                                                      "--framer-text-color": `rgb(5, 11, 20)`,
                                                                    },
                                                                    children: `生产`,
                                                                  }),
                                                                }),
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ g(w, {
                                                            __fromCanvasComponent: !0,
                                                            children:
                                                              Q(`v27`, u) ??
                                                              /*#__PURE__*/ g(c, {
                                                                children: /*#__PURE__*/ g(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--framer-font-size": `18px`,
                                                                    "--framer-line-height": `120%`,
                                                                  },
                                                                  children: /*#__PURE__*/ g(
                                                                    `span`,
                                                                    {
                                                                      style: {
                                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                                        "--framer-font-size": `18px`,
                                                                        "--framer-font-style": `normal`,
                                                                        "--framer-font-variation-axes": `normal`,
                                                                        "--framer-font-weight": `500`,
                                                                        "--framer-letter-spacing": `-0.01em`,
                                                                        "--framer-text-color": `rgb(5, 11, 20)`,
                                                                      },
                                                                      children: `生产`,
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                            className: `framer-16m4x1g`,
                                                            "data-framer-name": `Title`,
                                                            fonts: [`GF;IBM Plex Sans-500`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                        /*#__PURE__*/ g(W, {
                                                          breakpoint: E,
                                                          overrides: {
                                                            dm0OoW02Q: {
                                                              children:
                                                                Q(`v46`, u) ??
                                                                /*#__PURE__*/ g(c, {
                                                                  children: /*#__PURE__*/ g(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                                      "--framer-font-size": `14px`,
                                                                      "--framer-font-style": `normal`,
                                                                      "--framer-font-variation-axes": `normal`,
                                                                      "--framer-font-weight": `500`,
                                                                      "--framer-line-height": `1.5em`,
                                                                      "--framer-text-color": `rgb(135, 135, 135)`,
                                                                    },
                                                                    children: `物料收货`,
                                                                  }),
                                                                }),
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ g(w, {
                                                            __fromCanvasComponent: !0,
                                                            children:
                                                              Q(`v45`, u) ??
                                                              /*#__PURE__*/ g(c, {
                                                                children: /*#__PURE__*/ g(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--framer-font-size": `12px`,
                                                                    "--framer-line-height": `130%`,
                                                                  },
                                                                  children: /*#__PURE__*/ g(
                                                                    `span`,
                                                                    {
                                                                      style: {
                                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-font-style": `normal`,
                                                                        "--framer-font-variation-axes": `normal`,
                                                                        "--framer-font-weight": `500`,
                                                                        "--framer-text-color": `rgb(135, 135, 135)`,
                                                                      },
                                                                      children: `物料收货`,
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                            className: `framer-1cvirob`,
                                                            "data-framer-name": `Relationship`,
                                                            fonts: [`GF;IBM Plex Sans-500`],
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
                                            /*#__PURE__*/ _(x.div, {
                                              className: `framer-23xbp8`,
                                              "data-framer-name": `Frame 2147224435`,
                                              children: [
                                                /*#__PURE__*/ g(W, {
                                                  breakpoint: E,
                                                  overrides: {
                                                    dm0OoW02Q: { style: { rotate: 90 } },
                                                    oN9uXFHdk: { style: { rotate: 90 } },
                                                  },
                                                  children: /*#__PURE__*/ g(P, {
                                                    className: `framer-1yhu42w`,
                                                    "data-framer-name": `Vector 4213`,
                                                    fill: `rgba(0,0,0,1)`,
                                                    intrinsicHeight: 8,
                                                    intrinsicWidth: 51,
                                                    svg: `<svg width="51" height="8" viewBox="-1 -1 51 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48.8237 2.88672L43.8237 -2.88322e-05L43.8237 5.77347L48.8237 2.88672ZM0 2.88672L-4.37114e-08 3.38672L44.3237 3.38672L44.3237 2.88672L44.3237 2.38672L4.37114e-08 2.38672L0 2.88672Z" fill="#7EA815"/>
</svg>
`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                                /*#__PURE__*/ _(x.div, {
                                                  className: `framer-s7w1w4`,
                                                  "data-framer-name": `Frame 2147224431`,
                                                  children: [
                                                    /*#__PURE__*/ g(x.div, {
                                                      className: `framer-1lmqjz0`,
                                                      "data-border": !0,
                                                      "data-framer-name": `Frame 2147224425`,
                                                      children: /*#__PURE__*/ g(x.div, {
                                                        className: `framer-1nw2lt8`,
                                                        "data-framer-name": `Icon`,
                                                        children: /*#__PURE__*/ g(P, {
                                                          className: `framer-2p7d5y`,
                                                          "data-framer-name": `Vector`,
                                                          fill: `rgba(0,0,0,1)`,
                                                          intrinsicHeight: 25,
                                                          intrinsicWidth: 18,
                                                          svg: `<svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 24.5H17.5V20.125C17.4981 18.5011 16.8522 16.9443 15.7039 15.7961C14.5557 14.6478 12.9989 14.0019 11.375 14H6.125C4.50113 14.0019 2.94432 14.6478 1.79607 15.7961C0.647819 16.9443 0.00189891 18.5011 0 20.125V24.5Z" fill="#7EA815"/>
<path d="M2.625 6.125C2.625 7.33641 2.98422 8.52062 3.65725 9.52787C4.33027 10.5351 5.28687 11.3202 6.40606 11.7838C7.52526 12.2473 8.7568 12.3686 9.94493 12.1323C11.1331 11.896 12.2244 11.3126 13.081 10.456C13.9376 9.59943 14.521 8.50806 14.7573 7.31993C14.9936 6.13179 14.8723 4.90026 14.4088 3.78106C13.9452 2.66187 13.1601 1.70527 12.1529 1.03225C11.1456 0.359225 9.96141 0 8.75 0C7.12555 0 5.56763 0.645311 4.41897 1.79397C3.27031 2.94263 2.625 4.50055 2.625 6.125Z" fill="#7EA815"/>
</svg>
`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ _(x.div, {
                                                      className: `framer-j2ezb9`,
                                                      "data-framer-name": `Frame 2147224426`,
                                                      children: [
                                                        /*#__PURE__*/ g(W, {
                                                          breakpoint: E,
                                                          overrides: {
                                                            dm0OoW02Q: {
                                                              children:
                                                                Q(`v48`, u) ??
                                                                /*#__PURE__*/ g(c, {
                                                                  children: /*#__PURE__*/ g(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                                      "--framer-font-size": `18px`,
                                                                      "--framer-font-style": `normal`,
                                                                      "--framer-font-variation-axes": `normal`,
                                                                      "--framer-font-weight": `500`,
                                                                      "--framer-letter-spacing": `-0.01em`,
                                                                      "--framer-line-height": `120%`,
                                                                      "--framer-text-color": `rgb(5, 11, 20)`,
                                                                    },
                                                                    children: `客户`,
                                                                  }),
                                                                }),
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ g(w, {
                                                            __fromCanvasComponent: !0,
                                                            children:
                                                              Q(`v47`, u) ??
                                                              /*#__PURE__*/ g(c, {
                                                                children: /*#__PURE__*/ g(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--framer-font-size": `18px`,
                                                                    "--framer-line-height": `120%`,
                                                                  },
                                                                  children: /*#__PURE__*/ g(
                                                                    `span`,
                                                                    {
                                                                      style: {
                                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                                        "--framer-font-size": `18px`,
                                                                        "--framer-font-style": `normal`,
                                                                        "--framer-font-variation-axes": `normal`,
                                                                        "--framer-font-weight": `500`,
                                                                        "--framer-letter-spacing": `-0.01em`,
                                                                        "--framer-text-color": `rgb(5, 11, 20)`,
                                                                      },
                                                                      children: `客户`,
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                            className: `framer-e2vztn`,
                                                            "data-framer-name": `Title`,
                                                            fonts: [`GF;IBM Plex Sans-500`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                        /*#__PURE__*/ g(W, {
                                                          breakpoint: E,
                                                          overrides: {
                                                            dm0OoW02Q: {
                                                              children:
                                                                Q(`v50`, u) ??
                                                                /*#__PURE__*/ g(c, {
                                                                  children: /*#__PURE__*/ g(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                                      "--framer-font-size": `14px`,
                                                                      "--framer-font-style": `normal`,
                                                                      "--framer-font-variation-axes": `normal`,
                                                                      "--framer-font-weight": `500`,
                                                                      "--framer-line-height": `1.5em`,
                                                                      "--framer-text-color": `rgb(135, 135, 135)`,
                                                                    },
                                                                    children: `交付确认`,
                                                                  }),
                                                                }),
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ g(w, {
                                                            __fromCanvasComponent: !0,
                                                            children:
                                                              Q(`v49`, u) ??
                                                              /*#__PURE__*/ g(c, {
                                                                children: /*#__PURE__*/ g(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--framer-font-size": `12px`,
                                                                    "--framer-line-height": `130%`,
                                                                  },
                                                                  children: /*#__PURE__*/ g(
                                                                    `span`,
                                                                    {
                                                                      style: {
                                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-font-style": `normal`,
                                                                        "--framer-font-variation-axes": `normal`,
                                                                        "--framer-font-weight": `500`,
                                                                        "--framer-text-color": `rgb(135, 135, 135)`,
                                                                      },
                                                                      children: `交付确认`,
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                            className: `framer-1exrpe4`,
                                                            "data-framer-name": `Relationship`,
                                                            fonts: [`GF;IBM Plex Sans-500`],
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
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        /*#__PURE__*/ g(W, {
                          breakpoint: E,
                          overrides: { dm0OoW02Q: { __framer__styleAppearEffectEnabled: void 0 } },
                          children: /*#__PURE__*/ _($n, {
                            __framer__animate: { transition: Wr },
                            __framer__animateOnce: !0,
                            __framer__enter: Ur,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-1fw11q9`,
                            "data-framer-name": `uns agnet`,
                            id: B,
                            ref: ae,
                            children: [
                              /*#__PURE__*/ g(`div`, {
                                className: `framer-100vngm`,
                                children: /*#__PURE__*/ g(W, {
                                  breakpoint: E,
                                  overrides: {
                                    dm0OoW02Q: { __framer__styleTransformEffectEnabled: void 0 },
                                  },
                                  children: /*#__PURE__*/ _(fr, {
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        ref: N,
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        ref: ae,
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                    ],
                                    __framer__transformTrigger: `onScrollTarget`,
                                    __framer__transformViewportThreshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-fmzhut`,
                                    children: [
                                      /*#__PURE__*/ g(W, {
                                        breakpoint: E,
                                        overrides: {
                                          dm0OoW02Q: {
                                            children:
                                              Q(`v52`, u) ??
                                              /*#__PURE__*/ g(c, {
                                                children: /*#__PURE__*/ g(`p`, {
                                                  className: `framer-styles-preset-140plv3`,
                                                  "data-styles-preset": `TBRoaUTAt`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `start`,
                                                    "--framer-text-color": `var(--token-d2d554b8-e538-4f3d-a601-4167e4c07699, rgba(9, 9, 9, 0.8))`,
                                                  },
                                                  children: `04 / 入库与出库`,
                                                }),
                                              }),
                                          },
                                        },
                                        children: /*#__PURE__*/ g(w, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            Q(`v51`, u) ??
                                            /*#__PURE__*/ g(c, {
                                              children: /*#__PURE__*/ g(`p`, {
                                                className: `framer-styles-preset-140plv3`,
                                                "data-styles-preset": `TBRoaUTAt`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-d2d554b8-e538-4f3d-a601-4167e4c07699, rgba(9, 9, 9, 0.8))`,
                                                },
                                                children: `04 / 入库与出库`,
                                              }),
                                            }),
                                          className: `framer-s033ta`,
                                          "data-framer-name": `Applications do not just consume data — they write`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      /*#__PURE__*/ g(x.div, {
                                        className: `framer-bxqo6`,
                                        children: /*#__PURE__*/ g(W, {
                                          breakpoint: E,
                                          overrides: {
                                            dm0OoW02Q: {
                                              children:
                                                Q(`v54`, u) ??
                                                /*#__PURE__*/ g(c, {
                                                  children: /*#__PURE__*/ g(`h1`, {
                                                    className: `framer-styles-preset-1k5p4j8`,
                                                    "data-styles-preset": `F3NdZsOi7`,
                                                    dir: `auto`,
                                                    style: { "--framer-text-alignment": `start` },
                                                    children: `入库核对，出库复核`,
                                                  }),
                                                }),
                                            },
                                          },
                                          children: /*#__PURE__*/ g(w, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              Q(`v53`, u) ??
                                              /*#__PURE__*/ g(c, {
                                                children: /*#__PURE__*/ g(`h1`, {
                                                  className: `framer-styles-preset-1k5p4j8`,
                                                  "data-styles-preset": `F3NdZsOi7`,
                                                  dir: `auto`,
                                                  children: `入库核对，出库复核`,
                                                }),
                                              }),
                                            className: `framer-wdcwil`,
                                            "data-framer-name": `Applications do not just consume data — they write`,
                                            effect: qr,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ g(w, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          Q(`v55`, u) ??
                                          /*#__PURE__*/ g(c, {
                                            children: /*#__PURE__*/ g(`p`, {
                                              className: `framer-styles-preset-1ful33y`,
                                              "data-styles-preset": `HNigw6pHS`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `left` },
                                              children: `每一步留下执行记录；发现差异，交给明确的负责人。`,
                                            }),
                                          }),
                                        className: `framer-wtaro7`,
                                        "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ _(`div`, {
                                className: `framer-4hjjej`,
                                children: [
                                  /*#__PURE__*/ g(W, {
                                    breakpoint: E,
                                    overrides: {
                                      dm0OoW02Q: { __framer__styleTransformEffectEnabled: void 0 },
                                    },
                                    children: /*#__PURE__*/ g(mr, {
                                      __framer__styleTransformEffectEnabled: !0,
                                      __framer__transformTargets: [
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                        {
                                          ref: N,
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                        {
                                          ref: ae,
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                      ],
                                      __framer__transformTrigger: `onScrollTarget`,
                                      __framer__transformViewportThreshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-nz6o9q`,
                                      children: /*#__PURE__*/ g(x.div, {
                                        className: `framer-a91ywi`,
                                        "data-framer-name": `WMSWarehouseFlow / EN`,
                                        children: /*#__PURE__*/ _(x.div, {
                                          className: `framer-1e1l7zb`,
                                          children: [
                                            /*#__PURE__*/ _(x.div, {
                                              className: `framer-4ml4bp`,
                                              "data-border": !0,
                                              "data-framer-name": `Inbound`,
                                              children: [
                                                /*#__PURE__*/ g(W, {
                                                  breakpoint: E,
                                                  overrides: {
                                                    dm0OoW02Q: {
                                                      children:
                                                        Q(`v57`, u) ??
                                                        /*#__PURE__*/ g(c, {
                                                          children: /*#__PURE__*/ g(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                              "--framer-font-family": `"IBM Plex Sans"`,
                                                              "--framer-font-size": `18px`,
                                                              "--framer-font-style": `normal`,
                                                              "--framer-font-variation-axes": `normal`,
                                                              "--framer-font-weight": `500`,
                                                              "--framer-line-height": `21px`,
                                                              "--framer-text-color": `rgb(5, 11, 20)`,
                                                            },
                                                            children: `入站`,
                                                          }),
                                                        }),
                                                    },
                                                  },
                                                  children: /*#__PURE__*/ g(w, {
                                                    __fromCanvasComponent: !0,
                                                    children:
                                                      Q(`v56`, u) ??
                                                      /*#__PURE__*/ g(c, {
                                                        children: /*#__PURE__*/ g(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-font-size": `18px`,
                                                            "--framer-line-height": `21px`,
                                                          },
                                                          children: /*#__PURE__*/ g(`span`, {
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                              "--framer-font-family": `"IBM Plex Sans"`,
                                                              "--framer-font-size": `18px`,
                                                              "--framer-font-style": `normal`,
                                                              "--framer-font-variation-axes": `normal`,
                                                              "--framer-font-weight": `500`,
                                                              "--framer-text-color": `rgb(5, 11, 20)`,
                                                            },
                                                            children: `入站`,
                                                          }),
                                                        }),
                                                      }),
                                                    className: `framer-1cnootz`,
                                                    "data-framer-name": `Inbound`,
                                                    fonts: [`GF;IBM Plex Sans-500`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                                /*#__PURE__*/ _(x.div, {
                                                  className: `framer-ow9a7k`,
                                                  "data-framer-name": `Steps / left to right`,
                                                  children: [
                                                    /*#__PURE__*/ _(x.div, {
                                                      className: `framer-13ebjy5`,
                                                      "data-border": !0,
                                                      "data-framer-name": `01 / Check documents`,
                                                      children: [
                                                        /*#__PURE__*/ _(x.div, {
                                                          className: `framer-8sscd9`,
                                                          "data-framer-name": `Icon & number`,
                                                          children: [
                                                            /*#__PURE__*/ g(x.div, {
                                                              className: `framer-xs43ra`,
                                                              "data-framer-name": `Icon tile`,
                                                              children: /*#__PURE__*/ g(x.div, {
                                                                className: `framer-1ph9z29`,
                                                                "data-framer-name": `WMS Workflow/Icon/document`,
                                                                children: /*#__PURE__*/ g(P, {
                                                                  className: `framer-1vxler3`,
                                                                  "data-framer-name": `Frame`,
                                                                  fill: `rgba(0,0,0,1)`,
                                                                  intrinsicHeight: 30,
                                                                  intrinsicWidth: 30,
                                                                  svg: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.7227 8.58416L17.2612 2.12263C17.0765 1.93801 16.8919 1.8457 16.615 1.8457H7.38424C6.36886 1.8457 5.53809 2.67647 5.53809 3.69186V25.8457C5.53809 26.8611 6.36886 27.6919 7.38424 27.6919H22.1535C23.1689 27.6919 23.9996 26.8611 23.9996 25.8457V9.23032C23.9996 8.9534 23.9073 8.76878 23.7227 8.58416ZM16.615 4.06109L21.7842 9.23032H16.615V4.06109ZM22.1535 25.8457H7.38424V3.69186H14.7689V9.23032C14.7689 10.2457 15.5996 11.0765 16.615 11.0765H22.1535V25.8457Z" fill="black"/>
<path d="M9.23047 20.3086H20.3074V22.1547H9.23047V20.3086Z" fill="black"/>
<path d="M9.23047 14.7695H20.3074V16.6157H9.23047V14.7695Z" fill="black"/>
</svg>
`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              }),
                                                            }),
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v59`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                                            "--framer-font-size": `14px`,
                                                                            "--framer-line-height": `1.5em`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `01`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v58`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      style: {
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-line-height": `15px`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `12px`,
                                                                            "--framer-text-color": `rgba(135, 135, 135, 1)`,
                                                                          },
                                                                          children: `01`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-1pinhdy`,
                                                                "data-framer-name": `01`,
                                                                fonts: [`GF;IBM Plex Sans-regular`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                        /*#__PURE__*/ _(x.div, {
                                                          className: `framer-1qb95z8`,
                                                          "data-framer-name": `Frame 2147224675`,
                                                          children: [
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v61`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `18px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-line-height": `120%`,
                                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                                          },
                                                                          children: `检查文档`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v60`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-font-size": `18px`,
                                                                        "--framer-line-height": `120%`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `18px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                                          },
                                                                          children: `检查文档`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-10v96qt`,
                                                                "data-framer-name": `Check documents`,
                                                                fonts: [`GF;IBM Plex Sans-500`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v63`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `14px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-line-height": `1.5em`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `来源与材料`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v62`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-line-height": `130%`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `12px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `来源与材料`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-nt3w2z`,
                                                                "data-framer-name": `Source & material`,
                                                                fonts: [`GF;IBM Plex Sans-500`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    /*#__PURE__*/ g(W, {
                                                      breakpoint: E,
                                                      overrides: {
                                                        dm0OoW02Q: { style: { rotate: 90 } },
                                                      },
                                                      children: /*#__PURE__*/ g(P, {
                                                        className: `framer-1n0048g`,
                                                        "data-framer-name": `Vector 4210`,
                                                        fill: `rgba(0,0,0,1)`,
                                                        intrinsicHeight: 8,
                                                        intrinsicWidth: 38,
                                                        svg: `<svg width="38" height="8" viewBox="-1 -1 38 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36 2.88672L31 -2.99532e-05L31 5.77347L36 2.88672ZM0 2.88672L-4.37114e-08 3.38672L31.5 3.38672L31.5 2.88672L31.5 2.38672L4.37114e-08 2.38672L0 2.88672Z" fill="#7EA815"/>
</svg>
`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ _(x.div, {
                                                      className: `framer-g51e1s`,
                                                      "data-border": !0,
                                                      "data-framer-name": `02 / Inspect receipts`,
                                                      children: [
                                                        /*#__PURE__*/ _(x.div, {
                                                          className: `framer-1sfzaxk`,
                                                          "data-framer-name": `Icon & number`,
                                                          children: [
                                                            /*#__PURE__*/ g(x.div, {
                                                              className: `framer-c44g9n`,
                                                              "data-framer-name": `Icon tile`,
                                                              children: /*#__PURE__*/ g(x.div, {
                                                                className: `framer-h68qvj`,
                                                                "data-framer-name": `WMS Workflow/Icon/inspect`,
                                                                children: /*#__PURE__*/ g(P, {
                                                                  className: `framer-5wg6x9`,
                                                                  "data-framer-name": `Frame`,
                                                                  fill: `rgba(0,0,0,1)`,
                                                                  intrinsicHeight: 30,
                                                                  intrinsicWidth: 30,
                                                                  svg: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.6922 26.3999L19.7537 18.4614C23.2614 14.2153 22.7076 7.75372 18.4614 4.24603C14.2153 0.738337 7.75372 1.29218 4.24603 5.53834C0.738337 9.78449 1.29218 16.246 5.53834 19.7537C9.23064 22.8922 14.7691 22.8922 18.4614 19.7537L26.3999 27.6922L27.6922 26.3999ZM3.69218 11.9999C3.69218 7.38449 7.38449 3.69218 11.9999 3.69218C16.6153 3.69218 20.3076 7.38449 20.3076 11.9999C20.3076 16.6153 16.6153 20.3076 11.9999 20.3076C7.38449 20.3076 3.69218 16.6153 3.69218 11.9999Z" fill="black"/>
</svg>
`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              }),
                                                            }),
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v65`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                                            "--framer-font-size": `14px`,
                                                                            "--framer-line-height": `1.5em`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `02`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v64`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      style: {
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-line-height": `15px`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `12px`,
                                                                            "--framer-text-color": `rgba(135, 135, 135, 1)`,
                                                                          },
                                                                          children: `02`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-1e4qwbw`,
                                                                "data-framer-name": `01`,
                                                                fonts: [`GF;IBM Plex Sans-regular`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                        /*#__PURE__*/ _(x.div, {
                                                          className: `framer-fuv03n`,
                                                          "data-framer-name": `Frame 2147224675`,
                                                          children: [
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v67`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `18px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-line-height": `120%`,
                                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                                          },
                                                                          children: `检查收货`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v66`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-font-size": `18px`,
                                                                        "--framer-line-height": `120%`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `18px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                                          },
                                                                          children: `检查收货`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-phtcax`,
                                                                "data-framer-name": `Check documents`,
                                                                fonts: [`GF;IBM Plex Sans-500`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v69`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `14px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-line-height": `1.5em`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `数量与批次`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v68`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-line-height": `130%`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `12px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `数量与批次`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-13vfo6g`,
                                                                "data-framer-name": `Source & material`,
                                                                fonts: [`GF;IBM Plex Sans-500`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    /*#__PURE__*/ g(W, {
                                                      breakpoint: E,
                                                      overrides: {
                                                        dm0OoW02Q: { style: { rotate: 90 } },
                                                      },
                                                      children: /*#__PURE__*/ g(P, {
                                                        className: `framer-10z83x`,
                                                        "data-framer-name": `Vector 4211`,
                                                        fill: `rgba(0,0,0,1)`,
                                                        intrinsicHeight: 8,
                                                        intrinsicWidth: 38,
                                                        svg: `<svg width="38" height="8" viewBox="-1 -1 38 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36 2.88672L31 -2.99532e-05L31 5.77347L36 2.88672ZM0 2.88672L-4.37114e-08 3.38672L31.5 3.38672L31.5 2.88672L31.5 2.38672L4.37114e-08 2.38672L0 2.88672Z" fill="#7EA815"/>
</svg>
`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ _(x.div, {
                                                      className: `framer-8vkwkb`,
                                                      "data-border": !0,
                                                      "data-framer-name": `03 / Confirm receipt`,
                                                      children: [
                                                        /*#__PURE__*/ _(x.div, {
                                                          className: `framer-66rdqg`,
                                                          "data-framer-name": `Icon & number`,
                                                          children: [
                                                            /*#__PURE__*/ g(x.div, {
                                                              className: `framer-1i0mmo2`,
                                                              "data-framer-name": `Icon tile`,
                                                              children: /*#__PURE__*/ g(x.div, {
                                                                className: `framer-px3hsl`,
                                                                "data-framer-name": `WMS Workflow/Icon/confirm`,
                                                                children: /*#__PURE__*/ g(P, {
                                                                  className: `framer-y1bpbu`,
                                                                  "data-framer-name": `Frame`,
                                                                  fill: `rgba(0,0,0,1)`,
                                                                  intrinsicHeight: 30,
                                                                  intrinsicWidth: 30,
                                                                  svg: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.923 19.7672L8.30762 15.1509L9.61192 13.8466L12.923 17.1568L19.9245 10.1543L21.2307 11.4605L12.923 19.7672Z" fill="black"/>
<path d="M14.7688 1.8457C12.2128 1.8457 9.7143 2.60363 7.58911 4.02363C5.46392 5.44364 3.80754 7.46195 2.82942 9.82333C1.8513 12.1847 1.59538 14.7831 2.09402 17.2899C2.59266 19.7968 3.82347 22.0995 5.63079 23.9068C7.43812 25.7141 9.74079 26.9449 12.2476 27.4435C14.7545 27.9422 17.3528 27.6863 19.7142 26.7081C22.0756 25.73 24.0939 24.0736 25.5139 21.9485C26.9339 19.8233 27.6919 17.3247 27.6919 14.7688C27.6919 11.3414 26.3303 8.05433 23.9068 5.63078C21.4832 3.20724 18.1962 1.8457 14.7688 1.8457ZM14.7688 25.8457C12.578 25.8457 10.4364 25.1961 8.61478 23.9789C6.79319 22.7618 5.37343 21.0318 4.53504 19.0077C3.69666 16.9837 3.4773 14.7565 3.9047 12.6078C4.33211 10.4591 5.38708 8.48535 6.93622 6.93621C8.48535 5.38708 10.4591 4.3321 12.6078 3.9047C14.7565 3.47729 16.9837 3.69665 19.0077 4.53504C21.0318 5.37342 22.7618 6.79318 23.9789 8.61477C25.1961 10.4364 25.8457 12.578 25.8457 14.7688C25.8457 17.7066 24.6787 20.524 22.6014 22.6013C20.524 24.6787 17.7066 25.8457 14.7688 25.8457Z" fill="black"/>
</svg>
`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              }),
                                                            }),
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v71`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                                            "--framer-font-size": `14px`,
                                                                            "--framer-line-height": `1.5em`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `03`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v70`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      style: {
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-line-height": `15px`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `12px`,
                                                                            "--framer-text-color": `rgba(135, 135, 135, 1)`,
                                                                          },
                                                                          children: `03`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-pw7h8j`,
                                                                "data-framer-name": `01`,
                                                                fonts: [`GF;IBM Plex Sans-regular`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                        /*#__PURE__*/ _(x.div, {
                                                          className: `framer-11v9u7g`,
                                                          "data-framer-name": `Frame 2147224675`,
                                                          children: [
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v73`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `18px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-line-height": `120%`,
                                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                                          },
                                                                          children: `确认收货`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v72`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-font-size": `18px`,
                                                                        "--framer-line-height": `120%`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `18px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                                          },
                                                                          children: `确认收货`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-49gte0`,
                                                                "data-framer-name": `Check documents`,
                                                                fonts: [`GF;IBM Plex Sans-500`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v75`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `14px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-line-height": `1.5em`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `实际入库与差异`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v74`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-line-height": `130%`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `12px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `实际入库与差异`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-1qi02h9`,
                                                                "data-framer-name": `Source & material`,
                                                                fonts: [`GF;IBM Plex Sans-500`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    /*#__PURE__*/ g(W, {
                                                      breakpoint: E,
                                                      overrides: {
                                                        dm0OoW02Q: { style: { rotate: 90 } },
                                                      },
                                                      children: /*#__PURE__*/ g(P, {
                                                        className: `framer-1st5pln`,
                                                        "data-framer-name": `Vector 4212`,
                                                        fill: `rgba(0,0,0,1)`,
                                                        intrinsicHeight: 8,
                                                        intrinsicWidth: 38,
                                                        svg: `<svg width="38" height="8" viewBox="-1 -1 38 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36 2.88672L31 -2.99532e-05L31 5.77347L36 2.88672ZM0 2.88672L-4.37114e-08 3.38672L31.5 3.38672L31.5 2.88672L31.5 2.38672L4.37114e-08 2.38672L0 2.88672Z" fill="#7EA815"/>
</svg>
`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ _(x.div, {
                                                      className: `framer-1ol2jno`,
                                                      "data-border": !0,
                                                      "data-framer-name": `04 / Assign location`,
                                                      children: [
                                                        /*#__PURE__*/ _(x.div, {
                                                          className: `framer-kn4iy8`,
                                                          "data-framer-name": `Icon & number`,
                                                          children: [
                                                            /*#__PURE__*/ g(x.div, {
                                                              className: `framer-1my3g6g`,
                                                              "data-framer-name": `Icon tile`,
                                                              children: /*#__PURE__*/ g(x.div, {
                                                                className: `framer-k4sy4y`,
                                                                "data-framer-name": `WMS Workflow/Icon/location`,
                                                                children: /*#__PURE__*/ g(P, {
                                                                  className: `framer-gwwo3t`,
                                                                  "data-framer-name": `Frame`,
                                                                  fill: `rgba(0,0,0,1)`,
                                                                  intrinsicHeight: 30,
                                                                  intrinsicWidth: 30,
                                                                  svg: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7697 16.6155C13.8568 16.6155 12.9645 16.3449 12.2055 15.8377C11.4465 15.3306 10.855 14.6097 10.5056 13.7664C10.1563 12.923 10.0649 11.995 10.243 11.0997C10.4211 10.2044 10.8606 9.38206 11.5061 8.73658C12.1516 8.09111 12.974 7.65154 13.8693 7.47345C14.7646 7.29537 15.6926 7.38677 16.5359 7.73609C17.3793 8.08542 18.1001 8.67699 18.6072 9.43598C19.1144 10.195 19.3851 11.0873 19.3851 12.0002C19.3837 13.2238 18.897 14.3969 18.0317 15.2622C17.1665 16.1274 15.9933 16.6141 14.7697 16.6155ZM14.7697 9.23092C14.222 9.23092 13.6866 9.39333 13.2312 9.69762C12.7758 10.0019 12.4208 10.4344 12.2112 10.9404C12.0017 11.4464 11.9468 12.0032 12.0537 12.5404C12.1605 13.0776 12.4243 13.571 12.8115 13.9583C13.1988 14.3456 13.6923 14.6093 14.2294 14.7162C14.7666 14.823 15.3234 14.7682 15.8294 14.5586C16.3354 14.349 16.7679 13.9941 17.0722 13.5387C17.3765 13.0833 17.5389 12.5479 17.5389 12.0002C17.5381 11.266 17.2461 10.5621 16.7269 10.0429C16.2078 9.52374 15.5039 9.23173 14.7697 9.23092Z" fill="black"/>
<path d="M14.7691 27.6919L6.98248 18.5084C6.93826 18.4557 6.66106 18.0917 6.66106 18.0917C5.33082 16.3396 4.61213 14.1994 4.61524 11.9995C4.61524 9.30658 5.68502 6.72391 7.58924 4.8197C9.49345 2.91548 12.0761 1.8457 14.7691 1.8457C17.4621 1.8457 20.0447 2.91548 21.9489 4.8197C23.8532 6.72391 24.9229 9.30658 24.9229 11.9995C24.9262 14.1985 24.208 16.3379 22.8785 18.0894L22.8771 18.0917C22.8771 18.0917 22.6002 18.4557 22.5589 18.5047L14.7691 27.6919ZM8.13448 16.9795C8.1354 16.9802 8.34992 17.264 8.39903 17.3251L14.7691 24.8376L21.1476 17.3145C21.1881 17.2636 21.4044 16.9777 21.4049 16.977C22.4916 15.5454 23.0789 13.7969 23.0768 11.9995C23.0768 9.79621 22.2015 7.68312 20.6435 6.12512C19.0855 4.56713 16.9724 3.69186 14.7691 3.69186C12.5658 3.69186 10.4527 4.56713 8.89467 6.12512C7.33667 7.68312 6.4614 9.79621 6.4614 11.9995C6.45936 13.7979 7.04707 15.5472 8.13448 16.9795Z" fill="black"/>
</svg>
`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              }),
                                                            }),
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v77`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                                            "--framer-font-size": `14px`,
                                                                            "--framer-line-height": `1.5em`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `04`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v76`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      style: {
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-line-height": `15px`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `12px`,
                                                                            "--framer-text-color": `rgba(135, 135, 135, 1)`,
                                                                          },
                                                                          children: `04`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-2kkaqa`,
                                                                "data-framer-name": `01`,
                                                                fonts: [`GF;IBM Plex Sans-regular`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                        /*#__PURE__*/ _(x.div, {
                                                          className: `framer-1f9wlwd`,
                                                          "data-framer-name": `Frame 2147224675`,
                                                          children: [
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v79`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `18px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-line-height": `120%`,
                                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                                          },
                                                                          children: `分配位置`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v78`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-font-size": `18px`,
                                                                        "--framer-line-height": `120%`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `18px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                                          },
                                                                          children: `分配位置`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-1a9g66i`,
                                                                "data-framer-name": `Check documents`,
                                                                fonts: [`GF;IBM Plex Sans-500`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v81`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `14px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-line-height": `1.5em`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `存储区域与位置`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v80`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-line-height": `130%`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `12px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `存储区域与位置`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-df1sz7`,
                                                                "data-framer-name": `Source & material`,
                                                                fonts: [`GF;IBM Plex Sans-500`],
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
                                              ],
                                            }),
                                            se() &&
                                              /*#__PURE__*/ g(x.div, {
                                                className: `framer-18ltjle hidden-of1h00 hidden-1os3pxh`,
                                                "data-framer-name": `header`,
                                                children: /*#__PURE__*/ g(re, {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    loading: j((f?.y || 0) + 3985.95),
                                                    pixelHeight: 506,
                                                    pixelWidth: 935,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    sizes: `193px`,
                                                    src: `https://framerusercontent.com/images/V4gnqJ7OHOlOS5rKF5gluxleHEU.png?width=935&height=506`,
                                                    srcSet: `https://framerusercontent.com/images/V4gnqJ7OHOlOS5rKF5gluxleHEU.png?scale-down-to=512&width=935&height=506 512w,https://framerusercontent.com/images/V4gnqJ7OHOlOS5rKF5gluxleHEU.png?width=935&height=506 935w`,
                                                  },
                                                  className: `framer-ehms39`,
                                                  "data-framer-name": `image 116`,
                                                }),
                                              }),
                                            se() &&
                                              /*#__PURE__*/ g(x.div, {
                                                className: `framer-s6gfpo hidden-of1h00 hidden-1os3pxh`,
                                                "data-framer-name": `header`,
                                                children: /*#__PURE__*/ g(re, {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    loading: j((f?.y || 0) + 4313.95),
                                                    pixelHeight: 556,
                                                    pixelWidth: 680,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    sizes: `170px`,
                                                    src: `https://framerusercontent.com/images/EAWoPhJbTZDRecQ4UN43j8xsBlU.png?width=680&height=556`,
                                                    srcSet: `https://framerusercontent.com/images/EAWoPhJbTZDRecQ4UN43j8xsBlU.png?scale-down-to=512&width=680&height=556 512w,https://framerusercontent.com/images/EAWoPhJbTZDRecQ4UN43j8xsBlU.png?width=680&height=556 680w`,
                                                  },
                                                  className: `framer-jn82u1`,
                                                  "data-framer-name": `Background`,
                                                  children: /*#__PURE__*/ g(re, {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fit`,
                                                      loading: j((f?.y || 0) + 4422.95),
                                                      pixelHeight: 94,
                                                      pixelWidth: 136,
                                                      positionX: `center`,
                                                      positionY: `center`,
                                                      sizes: `34px`,
                                                      src: `https://framerusercontent.com/images/ysVhXeN2ApKToVUjFgelHpuE1k.png?width=136&height=94`,
                                                    },
                                                    className: `framer-1tdb3e9`,
                                                    "data-framer-name": `Object`,
                                                  }),
                                                }),
                                              }),
                                            /*#__PURE__*/ _(x.div, {
                                              className: `framer-f77ejg`,
                                              "data-border": !0,
                                              "data-framer-name": `Outbound`,
                                              children: [
                                                /*#__PURE__*/ g(W, {
                                                  breakpoint: E,
                                                  overrides: {
                                                    dm0OoW02Q: {
                                                      children:
                                                        Q(`v83`, u) ??
                                                        /*#__PURE__*/ g(c, {
                                                          children: /*#__PURE__*/ g(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                              "--framer-font-family": `"IBM Plex Sans"`,
                                                              "--framer-font-size": `18px`,
                                                              "--framer-font-style": `normal`,
                                                              "--framer-font-variation-axes": `normal`,
                                                              "--framer-font-weight": `500`,
                                                              "--framer-line-height": `21px`,
                                                              "--framer-text-color": `rgb(5, 11, 20)`,
                                                            },
                                                            children: `出境`,
                                                          }),
                                                        }),
                                                    },
                                                  },
                                                  children: /*#__PURE__*/ g(w, {
                                                    __fromCanvasComponent: !0,
                                                    children:
                                                      Q(`v82`, u) ??
                                                      /*#__PURE__*/ g(c, {
                                                        children: /*#__PURE__*/ g(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-font-size": `18px`,
                                                            "--framer-line-height": `21px`,
                                                          },
                                                          children: /*#__PURE__*/ g(`span`, {
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                              "--framer-font-family": `"IBM Plex Sans"`,
                                                              "--framer-font-size": `18px`,
                                                              "--framer-font-style": `normal`,
                                                              "--framer-font-variation-axes": `normal`,
                                                              "--framer-font-weight": `500`,
                                                              "--framer-text-color": `rgb(5, 11, 20)`,
                                                            },
                                                            children: `出境`,
                                                          }),
                                                        }),
                                                      }),
                                                    className: `framer-1ad5kcy`,
                                                    "data-framer-name": `Outbound`,
                                                    fonts: [`GF;IBM Plex Sans-500`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                                /*#__PURE__*/ _(x.div, {
                                                  className: `framer-u17awz`,
                                                  "data-framer-name": `Steps / left to right`,
                                                  children: [
                                                    /*#__PURE__*/ _(x.div, {
                                                      className: `framer-u2cai8`,
                                                      "data-border": !0,
                                                      "data-framer-name": `01 / Receive requests`,
                                                      children: [
                                                        /*#__PURE__*/ _(x.div, {
                                                          className: `framer-oozouf`,
                                                          "data-framer-name": `Icon & number`,
                                                          children: [
                                                            /*#__PURE__*/ g(x.div, {
                                                              className: `framer-159gul9`,
                                                              "data-framer-name": `Icon tile`,
                                                              children: /*#__PURE__*/ g(x.div, {
                                                                className: `framer-1bctjwt`,
                                                                "data-framer-name": `WMS Workflow/Icon/request`,
                                                                children: /*#__PURE__*/ g(P, {
                                                                  className: `framer-eq7xfe`,
                                                                  "data-framer-name": `Frame`,
                                                                  fill: `rgba(0,0,0,1)`,
                                                                  intrinsicHeight: 30,
                                                                  intrinsicWidth: 30,
                                                                  svg: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.46161 11.0775C7.99102 11.0775 9.23084 9.8377 9.23084 8.30829C9.23084 6.77889 7.99102 5.53906 6.46161 5.53906C4.93221 5.53906 3.69238 6.77889 3.69238 8.30829C3.69238 9.8377 4.93221 11.0775 6.46161 11.0775Z" fill="black"/>
<path d="M6.46161 23.9994C7.99102 23.9994 9.23084 22.7596 9.23084 21.2302C9.23084 19.7008 7.99102 18.4609 6.46161 18.4609C4.93221 18.4609 3.69238 19.7008 3.69238 21.2302C3.69238 22.7596 4.93221 23.9994 6.46161 23.9994Z" fill="black"/>
<path d="M14.7695 20.3086H27.6926V22.1547H14.7695V20.3086Z" fill="black"/>
<path d="M14.7695 7.38477H27.6926V9.23092H14.7695V7.38477Z" fill="black"/>
</svg>
`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              }),
                                                            }),
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v59`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                                            "--framer-font-size": `14px`,
                                                                            "--framer-line-height": `1.5em`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `01`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v58`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      style: {
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-line-height": `15px`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `12px`,
                                                                            "--framer-text-color": `rgba(135, 135, 135, 1)`,
                                                                          },
                                                                          children: `01`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-15x6h4k`,
                                                                "data-framer-name": `01`,
                                                                fonts: [`GF;IBM Plex Sans-regular`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                        /*#__PURE__*/ _(x.div, {
                                                          className: `framer-jodnvd`,
                                                          "data-framer-name": `Frame 2147224675`,
                                                          children: [
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v85`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `18px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-line-height": `120%`,
                                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                                          },
                                                                          children: `接收请求`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v84`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-font-size": `18px`,
                                                                        "--framer-line-height": `120%`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `18px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                                          },
                                                                          children: `接收请求`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-g748ue`,
                                                                "data-framer-name": `Check documents`,
                                                                fonts: [`GF;IBM Plex Sans-500`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v87`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `14px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-line-height": `1.5em`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `物料发放或出库`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v86`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-line-height": `130%`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `12px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `物料发放或出库`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-173yv74`,
                                                                "data-framer-name": `Source & material`,
                                                                fonts: [`GF;IBM Plex Sans-500`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    /*#__PURE__*/ g(W, {
                                                      breakpoint: E,
                                                      overrides: {
                                                        dm0OoW02Q: { style: { rotate: 90 } },
                                                      },
                                                      children: /*#__PURE__*/ g(P, {
                                                        className: `framer-cht7xa`,
                                                        "data-framer-name": `Vector 4210`,
                                                        fill: `rgba(0,0,0,1)`,
                                                        intrinsicHeight: 8,
                                                        intrinsicWidth: 38,
                                                        svg: `<svg width="38" height="8" viewBox="-1 -1 38 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36 2.88672L31 -2.99532e-05L31 5.77347L36 2.88672ZM0 2.88672L-4.37114e-08 3.38672L31.5 3.38672L31.5 2.88672L31.5 2.38672L4.37114e-08 2.38672L0 2.88672Z" fill="#7EA815"/>
</svg>
`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ _(x.div, {
                                                      className: `framer-14h2o40`,
                                                      "data-border": !0,
                                                      "data-framer-name": `02 / Pick to order`,
                                                      children: [
                                                        /*#__PURE__*/ _(x.div, {
                                                          className: `framer-14jvjiu`,
                                                          "data-framer-name": `Icon & number`,
                                                          children: [
                                                            /*#__PURE__*/ g(x.div, {
                                                              className: `framer-9ta0ph`,
                                                              "data-framer-name": `Icon tile`,
                                                              children: /*#__PURE__*/ g(x.div, {
                                                                className: `framer-1uu00zf`,
                                                                "data-framer-name": `WMS Workflow/Icon/pick`,
                                                                children: /*#__PURE__*/ g(P, {
                                                                  className: `framer-18cj6wo`,
                                                                  "data-framer-name": `Frame`,
                                                                  fill: `rgba(0,0,0,1)`,
                                                                  intrinsicHeight: 30,
                                                                  intrinsicWidth: 30,
                                                                  svg: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.4612 19.3842H11.0766C10.587 19.3842 10.1174 19.1897 9.7712 18.8434C9.42497 18.4972 9.23047 18.0276 9.23047 17.538V15.6919C9.23047 15.2022 9.42497 14.7327 9.7712 14.3864C10.1174 14.0402 10.587 13.8457 11.0766 13.8457H18.4612C18.9509 13.8457 19.4204 14.0402 19.7667 14.3864C20.1129 14.7327 20.3074 15.2022 20.3074 15.6919V17.538C20.3074 18.0276 20.1129 18.4972 19.7667 18.8434C19.4204 19.1897 18.9509 19.3842 18.4612 19.3842ZM11.0766 15.6919V17.538H18.4612V15.6919H11.0766Z" fill="black"/>
<path d="M25.8457 3.69141H3.69186C3.20223 3.69141 2.73265 3.88591 2.38643 4.23213C2.04021 4.57835 1.8457 5.04793 1.8457 5.53756V9.22987C1.8457 9.7195 2.04021 10.1891 2.38643 10.5353C2.73265 10.8815 3.20223 11.076 3.69186 11.076V25.8453C3.69186 26.3349 3.88636 26.8045 4.23258 27.1507C4.5788 27.4969 5.04838 27.6914 5.53801 27.6914H23.9995C24.4892 27.6914 24.9588 27.4969 25.305 27.1507C25.6512 26.8045 25.8457 26.3349 25.8457 25.8453V11.076C26.3353 11.076 26.8049 10.8815 27.1511 10.5353C27.4974 10.1891 27.6919 9.7195 27.6919 9.22987V5.53756C27.6919 5.04793 27.4974 4.57835 27.1511 4.23213C26.8049 3.88591 26.3353 3.69141 25.8457 3.69141ZM23.9995 25.8453H5.53801V11.076H23.9995V25.8453ZM25.8457 9.22987H3.69186V5.53756H25.8457V9.22987Z" fill="black"/>
</svg>
`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              }),
                                                            }),
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v65`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                                            "--framer-font-size": `14px`,
                                                                            "--framer-line-height": `1.5em`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `02`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v64`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      style: {
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-line-height": `15px`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `12px`,
                                                                            "--framer-text-color": `rgba(135, 135, 135, 1)`,
                                                                          },
                                                                          children: `02`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-dp9je`,
                                                                "data-framer-name": `01`,
                                                                fonts: [`GF;IBM Plex Sans-regular`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                        /*#__PURE__*/ _(x.div, {
                                                          className: `framer-1h7gzah`,
                                                          "data-framer-name": `Frame 2147224675`,
                                                          children: [
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v89`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `18px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-line-height": `120%`,
                                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                                          },
                                                                          children: `按单拣选`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v88`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-font-size": `18px`,
                                                                        "--framer-line-height": `120%`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `18px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                                          },
                                                                          children: `按单拣选`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-1rdwn2q`,
                                                                "data-framer-name": `Check documents`,
                                                                fonts: [`GF;IBM Plex Sans-500`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v91`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `14px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-line-height": `1.5em`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `库位与批次`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v90`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-line-height": `130%`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `12px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `库位与批次`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-13amylw`,
                                                                "data-framer-name": `Source & material`,
                                                                fonts: [`GF;IBM Plex Sans-500`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    /*#__PURE__*/ g(W, {
                                                      breakpoint: E,
                                                      overrides: {
                                                        dm0OoW02Q: { style: { rotate: 90 } },
                                                      },
                                                      children: /*#__PURE__*/ g(P, {
                                                        className: `framer-1vzbche`,
                                                        "data-framer-name": `Vector 4212`,
                                                        fill: `rgba(0,0,0,1)`,
                                                        intrinsicHeight: 8,
                                                        intrinsicWidth: 38,
                                                        svg: `<svg width="38" height="8" viewBox="-1 -1 38 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36 2.88672L31 -2.99532e-05L31 5.77347L36 2.88672ZM0 2.88672L-4.37114e-08 3.38672L31.5 3.38672L31.5 2.88672L31.5 2.38672L4.37114e-08 2.38672L0 2.88672Z" fill="#7EA815"/>
</svg>
`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ _(x.div, {
                                                      className: `framer-12jjx9t`,
                                                      "data-border": !0,
                                                      "data-framer-name": `03 / Verify quantity`,
                                                      children: [
                                                        /*#__PURE__*/ _(x.div, {
                                                          className: `framer-11c89ck`,
                                                          "data-framer-name": `Icon & number`,
                                                          children: [
                                                            /*#__PURE__*/ g(x.div, {
                                                              className: `framer-uvx87k`,
                                                              "data-framer-name": `Icon tile`,
                                                              children: /*#__PURE__*/ g(x.div, {
                                                                className: `framer-116e30x`,
                                                                "data-framer-name": `WMS Workflow/Icon/verify`,
                                                                children: /*#__PURE__*/ g(P, {
                                                                  className: `framer-1jct8b4`,
                                                                  "data-framer-name": `Frame`,
                                                                  fill: `rgba(0,0,0,1)`,
                                                                  intrinsicHeight: 30,
                                                                  intrinsicWidth: 30,
                                                                  svg: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.8457 5.53801H16.6149V3.69186C16.6149 3.20223 16.4204 2.73265 16.0742 2.38643C15.728 2.04021 15.2584 1.8457 14.7688 1.8457H3.69186C3.20223 1.8457 2.73265 2.04021 2.38643 2.38643C2.04021 2.73265 1.8457 3.20223 1.8457 3.69186V22.1534C1.8457 22.643 2.04021 23.1126 2.38643 23.4588C2.73265 23.805 3.20223 23.9995 3.69186 23.9995H12.9226V25.8457C12.9226 26.3353 13.1171 26.8049 13.4634 27.1511C13.8096 27.4974 14.2791 27.6919 14.7688 27.6919H25.8457C26.3353 27.6919 26.8049 27.4974 27.1511 27.1511C27.4974 26.8049 27.6919 26.3353 27.6919 25.8457V7.38416C27.6919 6.89453 27.4974 6.42496 27.1511 6.07874C26.8049 5.73252 26.3353 5.53801 25.8457 5.53801ZM3.69186 13.8457H9.38724L7.0057 16.2365L8.30724 17.538L12.9226 12.9226L8.30724 8.30724L7.0057 9.60878L9.38724 11.9995H3.69186V3.69186H14.7688V22.1534H3.69186V13.8457ZM14.7688 25.8457V23.9995C15.2584 23.9995 15.728 23.805 16.0742 23.4588C16.4204 23.1126 16.6149 22.643 16.6149 22.1534V7.38416H25.8457V15.6919H20.1503L22.5319 13.3011L21.2303 11.9995L16.6149 16.6149L21.2303 21.2303L22.5319 19.9288L20.1503 17.538H25.8457V25.8457H14.7688Z" fill="black"/>
</svg>
`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              }),
                                                            }),
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v71`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                                            "--framer-font-size": `14px`,
                                                                            "--framer-line-height": `1.5em`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `03`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v70`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      style: {
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-line-height": `15px`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `12px`,
                                                                            "--framer-text-color": `rgba(135, 135, 135, 1)`,
                                                                          },
                                                                          children: `03`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-1arpcgs`,
                                                                "data-framer-name": `01`,
                                                                fonts: [`GF;IBM Plex Sans-regular`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                        /*#__PURE__*/ _(x.div, {
                                                          className: `framer-vs7708`,
                                                          "data-framer-name": `Frame 2147224675`,
                                                          children: [
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v93`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `18px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-line-height": `120%`,
                                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                                          },
                                                                          children: `核对数量`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v92`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-font-size": `18px`,
                                                                        "--framer-line-height": `120%`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `18px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                                          },
                                                                          children: `核对数量`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-1fzbd4i`,
                                                                "data-framer-name": `Check documents`,
                                                                fonts: [`GF;IBM Plex Sans-500`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v95`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `14px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-line-height": `1.5em`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `物料与发料数量`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v94`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-line-height": `130%`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `12px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `物料与发料数量`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-zwpzyk`,
                                                                "data-framer-name": `Source & material`,
                                                                fonts: [`GF;IBM Plex Sans-500`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    /*#__PURE__*/ g(W, {
                                                      breakpoint: E,
                                                      overrides: {
                                                        dm0OoW02Q: { style: { rotate: 90 } },
                                                      },
                                                      children: /*#__PURE__*/ g(P, {
                                                        className: `framer-735800`,
                                                        "data-framer-name": `Vector 4213`,
                                                        fill: `rgba(0,0,0,1)`,
                                                        intrinsicHeight: 8,
                                                        intrinsicWidth: 38,
                                                        svg: `<svg width="38" height="8" viewBox="-1 -1 38 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36 2.88672L31 -2.99532e-05L31 5.77347L36 2.88672ZM0 2.88672L-4.37114e-08 3.38672L31.5 3.38672L31.5 2.88672L31.5 2.38672L4.37114e-08 2.38672L0 2.88672Z" fill="#7EA815"/>
</svg>
`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ _(x.div, {
                                                      className: `framer-t6xirv`,
                                                      "data-border": !0,
                                                      "data-framer-name": `04 / Confirm handover`,
                                                      children: [
                                                        /*#__PURE__*/ _(x.div, {
                                                          className: `framer-1knf2lm`,
                                                          "data-framer-name": `Icon & number`,
                                                          children: [
                                                            /*#__PURE__*/ g(x.div, {
                                                              className: `framer-15imp1o`,
                                                              "data-framer-name": `Icon tile`,
                                                              children: /*#__PURE__*/ g(x.div, {
                                                                className: `framer-88h70g`,
                                                                "data-framer-name": `WMS Workflow/Icon/handover`,
                                                                children: /*#__PURE__*/ g(P, {
                                                                  className: `framer-isghzt`,
                                                                  "data-framer-name": `Frame`,
                                                                  fill: `rgba(0,0,0,1)`,
                                                                  intrinsicHeight: 30,
                                                                  intrinsicWidth: 30,
                                                                  svg: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.692 27.6922H25.8459V23.0768C25.8445 21.8531 25.3578 20.68 24.4925 19.8147C23.6272 18.9495 22.4541 18.4628 21.2305 18.4614V16.6152C22.9436 16.6171 24.586 17.2985 25.7974 18.5099C27.0087 19.7212 27.6901 21.3637 27.692 23.0768V27.6922Z" fill="black"/>
<path d="M20.3072 27.6922H18.4611V23.0768C18.4596 21.8531 17.9729 20.68 17.1077 19.8148C16.2424 18.9496 15.0693 18.4628 13.8457 18.4614H8.30724C7.08361 18.4628 5.9105 18.9496 5.04526 19.8148C4.18002 20.68 3.6933 21.8531 3.69186 23.0768V27.6922H1.8457V23.0768C1.84771 21.3637 2.52912 19.7213 3.74046 18.51C4.9518 17.2986 6.59415 16.6172 8.30724 16.6152H13.8457C15.5588 16.6172 17.2011 17.2986 18.4125 18.51C19.6238 19.7213 20.3052 21.3637 20.3072 23.0768V27.6922Z" fill="black"/>
<path d="M18.4619 1.8457V3.69186C19.686 3.69186 20.8599 4.17812 21.7255 5.04367C22.591 5.90922 23.0773 7.08317 23.0773 8.30724C23.0773 9.53132 22.591 10.7053 21.7255 11.5708C20.8599 12.4364 19.686 12.9226 18.4619 12.9226V14.7688C20.1756 14.7688 21.8191 14.088 23.0309 12.8762C24.2427 11.6645 24.9235 10.0209 24.9235 8.30724C24.9235 6.59354 24.2427 4.95002 23.0309 3.73824C21.8191 2.52647 20.1756 1.8457 18.4619 1.8457Z" fill="black"/>
<path d="M11.0768 3.69186C11.9896 3.69186 12.8819 3.96254 13.6409 4.46969C14.3999 4.97683 14.9915 5.69766 15.3408 6.54101C15.6902 7.38436 15.7816 8.31236 15.6035 9.20766C15.4254 10.103 14.9858 10.9253 14.3403 11.5708C13.6949 12.2163 12.8725 12.6559 11.9772 12.8339C11.0819 13.012 10.1539 12.9206 9.31054 12.5713C8.46719 12.222 7.74637 11.6304 7.23922 10.8714C6.73208 10.1124 6.46139 9.22008 6.46139 8.30724C6.46139 7.08317 6.94765 5.90922 7.81321 5.04367C8.67876 4.17812 9.8527 3.69186 11.0768 3.69186ZM11.0768 1.8457C9.7988 1.8457 8.54953 2.22467 7.48694 2.93467C6.42434 3.64467 5.59615 4.65383 5.10709 5.83452C4.61803 7.01521 4.49007 8.31441 4.73939 9.56783C4.98871 10.8212 5.60412 11.9726 6.50778 12.8762C7.41144 13.7799 8.56278 14.3953 9.81619 14.6446C11.0696 14.8939 12.3688 14.766 13.5495 14.2769C14.7302 13.7879 15.7393 12.9597 16.4493 11.8971C17.1594 10.8345 17.5383 9.58521 17.5383 8.30724C17.5383 6.59354 16.8575 4.95002 15.6458 3.73824C14.434 2.52647 12.7905 1.8457 11.0768 1.8457Z" fill="black"/>
</svg>
`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              }),
                                                            }),
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v77`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                                            "--framer-font-size": `14px`,
                                                                            "--framer-line-height": `1.5em`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `04`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v76`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      style: {
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-line-height": `15px`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `12px`,
                                                                            "--framer-text-color": `rgba(135, 135, 135, 1)`,
                                                                          },
                                                                          children: `04`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-7nsh54`,
                                                                "data-framer-name": `01`,
                                                                fonts: [`GF;IBM Plex Sans-regular`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                        /*#__PURE__*/ _(x.div, {
                                                          className: `framer-etsy8a`,
                                                          "data-framer-name": `Frame 2147224675`,
                                                          children: [
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v97`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `18px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-line-height": `120%`,
                                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                                          },
                                                                          children: `确认交接`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v96`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-font-size": `18px`,
                                                                        "--framer-line-height": `120%`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `18px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                                          },
                                                                          children: `确认交接`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-z5arw7`,
                                                                "data-framer-name": `Check documents`,
                                                                fonts: [`GF;IBM Plex Sans-500`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                            /*#__PURE__*/ g(W, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                dm0OoW02Q: {
                                                                  children:
                                                                    Q(`v99`, u) ??
                                                                    /*#__PURE__*/ g(c, {
                                                                      children: /*#__PURE__*/ g(
                                                                        `p`,
                                                                        {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `14px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-line-height": `1.5em`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `发料与收料确认`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ g(w, {
                                                                __fromCanvasComponent: !0,
                                                                children:
                                                                  Q(`v98`, u) ??
                                                                  /*#__PURE__*/ g(c, {
                                                                    children: /*#__PURE__*/ g(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-font-size": `12px`,
                                                                        "--framer-line-height": `130%`,
                                                                      },
                                                                      children: /*#__PURE__*/ g(
                                                                        `span`,
                                                                        {
                                                                          style: {
                                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                                            "--framer-font-size": `12px`,
                                                                            "--framer-font-style": `normal`,
                                                                            "--framer-font-variation-axes": `normal`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                                          },
                                                                          children: `发料与收料确认`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                  }),
                                                                className: `framer-4iglv`,
                                                                "data-framer-name": `Source & material`,
                                                                fonts: [`GF;IBM Plex Sans-500`],
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
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ g(W, {
                                    breakpoint: E,
                                    overrides: {
                                      dm0OoW02Q: {
                                        children:
                                          Q(`v101`, u) ??
                                          /*#__PURE__*/ g(c, {
                                            children: /*#__PURE__*/ g(`p`, {
                                              className: `framer-styles-preset-1q5bxn6`,
                                              "data-styles-preset": `oktdp3aD1`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `start` },
                                              children: `记录问题 → 指定负责人 → 确认纠正措施 → 归档验证结果`,
                                            }),
                                          }),
                                      },
                                    },
                                    children: /*#__PURE__*/ g(w, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        Q(`v100`, u) ??
                                        /*#__PURE__*/ g(c, {
                                          children: /*#__PURE__*/ g(`p`, {
                                            className: `framer-styles-preset-1q5bxn6`,
                                            "data-styles-preset": `oktdp3aD1`,
                                            dir: `auto`,
                                            children: `记录问题 → 指定负责人 → 确认纠正措施 → 归档验证结果`,
                                          }),
                                        }),
                                      className: `framer-bwczzx`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        /*#__PURE__*/ g(W, {
                          breakpoint: E,
                          overrides: { dm0OoW02Q: { __framer__styleAppearEffectEnabled: void 0 } },
                          children: /*#__PURE__*/ _($n, {
                            __framer__animate: { transition: Wr },
                            __framer__animateOnce: !0,
                            __framer__enter: Ur,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-f46iyi`,
                            "data-framer-name": `uns agnet`,
                            id: U,
                            ref: le,
                            children: [
                              /*#__PURE__*/ g(`div`, {
                                className: `framer-13sqyjk`,
                                children: /*#__PURE__*/ g(W, {
                                  breakpoint: E,
                                  overrides: {
                                    dm0OoW02Q: { __framer__styleTransformEffectEnabled: void 0 },
                                  },
                                  children: /*#__PURE__*/ _(gr, {
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        ref: N,
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        ref: le,
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                    ],
                                    __framer__transformTrigger: `onScrollTarget`,
                                    __framer__transformViewportThreshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1yppzli`,
                                    children: [
                                      /*#__PURE__*/ g(W, {
                                        breakpoint: E,
                                        overrides: {
                                          dm0OoW02Q: {
                                            children:
                                              Q(`v103`, u) ??
                                              /*#__PURE__*/ g(c, {
                                                children: /*#__PURE__*/ g(`p`, {
                                                  className: `framer-styles-preset-140plv3`,
                                                  "data-styles-preset": `TBRoaUTAt`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `start`,
                                                    "--framer-text-color": `var(--token-d2d554b8-e538-4f3d-a601-4167e4c07699, rgba(9, 9, 9, 0.8))`,
                                                  },
                                                  children: `05 / 批次追溯`,
                                                }),
                                              }),
                                          },
                                        },
                                        children: /*#__PURE__*/ g(w, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            Q(`v102`, u) ??
                                            /*#__PURE__*/ g(c, {
                                              children: /*#__PURE__*/ g(`p`, {
                                                className: `framer-styles-preset-140plv3`,
                                                "data-styles-preset": `TBRoaUTAt`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-d2d554b8-e538-4f3d-a601-4167e4c07699, rgba(9, 9, 9, 0.8))`,
                                                },
                                                children: `05 / 批次追溯`,
                                              }),
                                            }),
                                          className: `framer-vxrl4l`,
                                          "data-framer-name": `Applications do not just consume data — they write`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      /*#__PURE__*/ g(x.div, {
                                        className: `framer-o6cghb`,
                                        children: /*#__PURE__*/ g(W, {
                                          breakpoint: E,
                                          overrides: {
                                            dm0OoW02Q: {
                                              children:
                                                Q(`v105`, u) ??
                                                /*#__PURE__*/ g(c, {
                                                  children: /*#__PURE__*/ _(`h1`, {
                                                    className: `framer-styles-preset-1k5p4j8`,
                                                    "data-styles-preset": `F3NdZsOi7`,
                                                    dir: `auto`,
                                                    style: { "--framer-text-alignment": `start` },
                                                    children: [
                                                      `追踪每个批次的`,
                                                      /*#__PURE__*/ g(`br`, {}),
                                                      `来源、位置及去向`,
                                                    ],
                                                  }),
                                                }),
                                            },
                                          },
                                          children: /*#__PURE__*/ g(w, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              Q(`v104`, u) ??
                                              /*#__PURE__*/ g(c, {
                                                children: /*#__PURE__*/ _(`h1`, {
                                                  className: `framer-styles-preset-1k5p4j8`,
                                                  "data-styles-preset": `F3NdZsOi7`,
                                                  dir: `auto`,
                                                  children: [
                                                    `追踪每个批次的`,
                                                    /*#__PURE__*/ g(`br`, {}),
                                                    `来源、位置及去向`,
                                                  ],
                                                }),
                                              }),
                                            className: `framer-1darza3`,
                                            "data-framer-name": `Applications do not just consume data — they write`,
                                            effect: qr,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ g(w, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          Q(`v106`, u) ??
                                          /*#__PURE__*/ g(c, {
                                            children: /*#__PURE__*/ g(`p`, {
                                              className: `framer-styles-preset-1ful33y`,
                                              "data-styles-preset": `HNigw6pHS`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `left` },
                                              children: `关联物料与文档、库位及容器，实现入库、出库与库存状态的联动追溯。`,
                                            }),
                                          }),
                                        className: `framer-tkszpi`,
                                        "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ g(W, {
                                breakpoint: E,
                                overrides: {
                                  dm0OoW02Q: { __framer__styleTransformEffectEnabled: void 0 },
                                },
                                children: /*#__PURE__*/ g(vr, {
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: N,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: le,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-16su00v`,
                                  children: /*#__PURE__*/ _(x.div, {
                                    className: `framer-1ur84gh`,
                                    "data-framer-name": `WMSBatchTrace / EN`,
                                    children: [
                                      /*#__PURE__*/ _(x.div, {
                                        className: `framer-1ozht0q`,
                                        "data-framer-name": `Source → batch → destination`,
                                        children: [
                                          /*#__PURE__*/ _(x.div, {
                                            className: `framer-2lja1c`,
                                            "data-border": !0,
                                            "data-framer-name": `WMS Batch Trace/Document card`,
                                            children: [
                                              /*#__PURE__*/ _(x.div, {
                                                className: `framer-1szeacx`,
                                                "data-framer-name": `Role`,
                                                children: [
                                                  /*#__PURE__*/ g(x.div, {
                                                    className: `framer-14dyzti`,
                                                    "data-framer-name": `Document`,
                                                    children: /*#__PURE__*/ g(P, {
                                                      className: `framer-1kjmrxt`,
                                                      "data-framer-name": `Vector`,
                                                      fill: `rgba(0,0,0,1)`,
                                                      intrinsicHeight: 14,
                                                      intrinsicWidth: 10,
                                                      svg: `<svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.85 3.65L6.35 0.15C6.25 0.05 6.15 0 6 0H1C0.45 0 0 0.45 0 1V13C0 13.55 0.45 14 1 14H9C9.55 14 10 13.55 10 13V4C10 3.85 9.95 3.75 9.85 3.65ZM6 1.2L8.8 4H6V1.2ZM9 13H1V1H5V4C5 4.55 5.45 5 6 5H9V13Z" fill="#161616"/>
<path d="M8 10H2V11H8V10Z" fill="#161616"/>
<path d="M8 7H2V8H8V7Z" fill="#161616"/>
</svg>
`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ g(W, {
                                                    breakpoint: E,
                                                    overrides: {
                                                      dm0OoW02Q: {
                                                        children:
                                                          Q(`v108`, u) ??
                                                          /*#__PURE__*/ g(c, {
                                                            children: /*#__PURE__*/ g(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                                "--framer-font-size": `14px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `400`,
                                                                "--framer-line-height": `1.5em`,
                                                                "--framer-text-color": `rgb(135, 135, 135)`,
                                                              },
                                                              children: `数据源`,
                                                            }),
                                                          }),
                                                      },
                                                    },
                                                    children: /*#__PURE__*/ g(w, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        Q(`v107`, u) ??
                                                        /*#__PURE__*/ g(c, {
                                                          children: /*#__PURE__*/ g(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-font-size": `10px`,
                                                              "--framer-line-height": `15px`,
                                                            },
                                                            children: /*#__PURE__*/ g(`span`, {
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                                "--framer-font-size": `10px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `400`,
                                                                "--framer-text-color": `rgb(135, 135, 135)`,
                                                              },
                                                              children: `数据源`,
                                                            }),
                                                          }),
                                                        }),
                                                      className: `framer-1vd676l`,
                                                      "data-framer-name": `Source`,
                                                      fonts: [`GF;IBM Plex Sans-regular`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              /*#__PURE__*/ g(w, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  Q(`v109`, u) ??
                                                  /*#__PURE__*/ g(c, {
                                                    children: /*#__PURE__*/ g(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-line-height": `22px`,
                                                        "--framer-text-color": `rgb(5, 11, 20)`,
                                                      },
                                                      children: `入库单`,
                                                    }),
                                                  }),
                                                className: `framer-1sugyj0`,
                                                "data-framer-name": `Inbound document`,
                                                fonts: [`GF;IBM Plex Sans-500`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              /*#__PURE__*/ g(W, {
                                                breakpoint: E,
                                                overrides: {
                                                  dm0OoW02Q: {
                                                    children:
                                                      Q(`v111`, u) ??
                                                      /*#__PURE__*/ g(c, {
                                                        children: /*#__PURE__*/ g(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `14px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `400`,
                                                            "--framer-line-height": `1.5em`,
                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                          },
                                                          children: `供应商 / 生产制造`,
                                                        }),
                                                      }),
                                                  },
                                                },
                                                children: /*#__PURE__*/ g(w, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    Q(`v110`, u) ??
                                                    /*#__PURE__*/ g(c, {
                                                      children: /*#__PURE__*/ g(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `11px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `400`,
                                                          "--framer-line-height": `15px`,
                                                          "--framer-text-color": `rgb(135, 135, 135)`,
                                                        },
                                                        children: `供应商 / 生产制造`,
                                                      }),
                                                    }),
                                                  className: `framer-7htefi`,
                                                  "data-framer-name": `Supplier / Production`,
                                                  fonts: [`GF;IBM Plex Sans-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ _(x.div, {
                                                className: `framer-r5pmwd`,
                                                "data-border": !0,
                                                "data-framer-name": `Document reference`,
                                                children: [
                                                  /*#__PURE__*/ g(W, {
                                                    breakpoint: E,
                                                    overrides: {
                                                      dm0OoW02Q: {
                                                        children:
                                                          Q(`v113`, u) ??
                                                          /*#__PURE__*/ g(c, {
                                                            children: /*#__PURE__*/ g(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                                "--framer-font-size": `14px`,
                                                                "--framer-line-height": `1.5em`,
                                                                "--framer-text-color": `rgb(5, 11, 20)`,
                                                              },
                                                              children: `DN-2401`,
                                                            }),
                                                          }),
                                                      },
                                                    },
                                                    children: /*#__PURE__*/ g(w, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        Q(`v112`, u) ??
                                                        /*#__PURE__*/ g(c, {
                                                          children: /*#__PURE__*/ g(`p`, {
                                                            style: {
                                                              "--framer-font-size": `11px`,
                                                              "--framer-line-height": `15px`,
                                                            },
                                                            children: /*#__PURE__*/ g(`span`, {
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                                "--framer-font-size": `11px`,
                                                                "--framer-text-color": `rgba(5, 11, 20, 1)`,
                                                              },
                                                              children: `DN-2401`,
                                                            }),
                                                          }),
                                                        }),
                                                      className: `framer-18u9i2o`,
                                                      "data-framer-name": `DN-2401`,
                                                      fonts: [`GF;IBM Plex Sans-regular`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ g(W, {
                                                    breakpoint: E,
                                                    overrides: {
                                                      dm0OoW02Q: {
                                                        children:
                                                          Q(`v115`, u) ??
                                                          /*#__PURE__*/ g(c, {
                                                            children: /*#__PURE__*/ g(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                                "--framer-font-size": `14px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `400`,
                                                                "--framer-line-height": `1.5em`,
                                                                "--framer-text-color": `rgb(135, 135, 135)`,
                                                              },
                                                              children: `已收到 20 箱`,
                                                            }),
                                                          }),
                                                      },
                                                    },
                                                    children: /*#__PURE__*/ g(w, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        Q(`v114`, u) ??
                                                        /*#__PURE__*/ g(c, {
                                                          children: /*#__PURE__*/ g(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-font-size": `11px`,
                                                              "--framer-line-height": `15px`,
                                                            },
                                                            children: /*#__PURE__*/ g(`span`, {
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                                "--framer-font-size": `11px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `400`,
                                                                "--framer-text-color": `rgb(135, 135, 135)`,
                                                              },
                                                              children: `已收到 20 箱`,
                                                            }),
                                                          }),
                                                        }),
                                                      className: `framer-14otw3`,
                                                      "data-framer-name": `Received 20 cases`,
                                                      fonts: [`GF;IBM Plex Sans-regular`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ _(x.div, {
                                            className: `framer-18925ph`,
                                            "data-framer-name": `Receipt`,
                                            children: [
                                              /*#__PURE__*/ g(W, {
                                                breakpoint: E,
                                                overrides: {
                                                  dm0OoW02Q: {
                                                    children:
                                                      Q(`v117`, u) ??
                                                      /*#__PURE__*/ g(c, {
                                                        children: /*#__PURE__*/ g(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `14px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `400`,
                                                            "--framer-line-height": `1.5em`,
                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                          },
                                                          children: `收据`,
                                                        }),
                                                      }),
                                                  },
                                                },
                                                children: /*#__PURE__*/ g(w, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    Q(`v116`, u) ??
                                                    /*#__PURE__*/ g(c, {
                                                      children: /*#__PURE__*/ g(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-font-size": `10px`,
                                                          "--framer-line-height": `15px`,
                                                        },
                                                        children: /*#__PURE__*/ g(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `10px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `400`,
                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                          },
                                                          children: `收据`,
                                                        }),
                                                      }),
                                                    }),
                                                  className: `framer-1n7opss`,
                                                  "data-framer-name": `Receipt`,
                                                  fonts: [`GF;IBM Plex Sans-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ g(W, {
                                                breakpoint: E,
                                                overrides: { dm0OoW02Q: { style: { rotate: 90 } } },
                                                children: /*#__PURE__*/ g(P, {
                                                  className: `framer-nsm5k5`,
                                                  "data-framer-name": `Vector 4212`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 8,
                                                  intrinsicWidth: 22,
                                                  svg: `<svg width="22" height="8" viewBox="-1 -1 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 2.88672L15 -3.1352e-05L15 5.77347L20 2.88672ZM0 2.88672L-4.37114e-08 3.38672L15.5 3.38672L15.5 2.88672L15.5 2.38672L4.37114e-08 2.38672L0 2.88672Z" fill="#7EA815"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ _(x.div, {
                                            className: `framer-1wsc9vo`,
                                            "data-border": !0,
                                            "data-framer-name": `Material / Batch`,
                                            children: [
                                              /*#__PURE__*/ g(x.div, {
                                                className: `framer-1spurib`,
                                                "data-framer-name": `Icon / batch`,
                                                children: /*#__PURE__*/ g(x.div, {
                                                  className: `framer-1wjtzt0`,
                                                  "data-framer-name": `Cube`,
                                                  children: /*#__PURE__*/ g(P, {
                                                    className: `framer-8rjv7z`,
                                                    "data-framer-name": `Vector`,
                                                    fill: `rgba(0,0,0,1)`,
                                                    intrinsicHeight: 17,
                                                    intrinsicWidth: 15,
                                                    svg: `<svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3459 4.01413L7.59594 0.0766339C7.50991 0.0264456 7.4121 0 7.3125 0C7.2129 0 7.11509 0.0264456 7.02906 0.0766339L0.279056 4.01413C0.194137 4.06367 0.123685 4.1346 0.0747225 4.21986C0.0257597 4.30511 -3.7356e-06 4.40171 4.06203e-10 4.50002V12.375C-3.7356e-06 12.4733 0.0257597 12.5699 0.0747225 12.6552C0.123685 12.7404 0.194137 12.8114 0.279056 12.8609L7.02906 16.7984C7.11509 16.8486 7.2129 16.875 7.3125 16.875C7.4121 16.875 7.50991 16.8486 7.59594 16.7984L14.3459 12.8609C14.4309 12.8114 14.5013 12.7404 14.5503 12.6552C14.5992 12.5699 14.625 12.4733 14.625 12.375V4.50002C14.625 4.40171 14.5992 4.30511 14.5503 4.21986C14.5013 4.1346 14.4309 4.06367 14.3459 4.01413ZM7.3125 1.21373L12.9463 4.50002L7.3125 7.78631L1.67872 4.50002L7.3125 1.21373ZM1.125 5.47945L6.75 8.76051V15.3331L1.125 12.052V5.47945ZM7.875 15.3331V8.76051L13.5 5.47945V12.052L7.875 15.3331Z" fill="#161616"/>
</svg>
`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              }),
                                              /*#__PURE__*/ g(W, {
                                                breakpoint: E,
                                                overrides: {
                                                  dm0OoW02Q: {
                                                    children:
                                                      Q(`v119`, u) ??
                                                      /*#__PURE__*/ g(c, {
                                                        children: /*#__PURE__*/ g(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `14px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `400`,
                                                            "--framer-line-height": `1.5em`,
                                                            "--framer-text-alignment": `center`,
                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                          },
                                                          children: `物料/批次`,
                                                        }),
                                                      }),
                                                  },
                                                },
                                                children: /*#__PURE__*/ g(w, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    Q(`v118`, u) ??
                                                    /*#__PURE__*/ g(c, {
                                                      children: /*#__PURE__*/ g(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-font-size": `10px`,
                                                          "--framer-line-height": `15px`,
                                                        },
                                                        children: /*#__PURE__*/ g(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `10px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `400`,
                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                          },
                                                          children: `物料/批次`,
                                                        }),
                                                      }),
                                                    }),
                                                  className: `framer-1agrp8z`,
                                                  "data-framer-name": `Material / Batch`,
                                                  fonts: [`GF;IBM Plex Sans-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ g(W, {
                                                breakpoint: E,
                                                overrides: {
                                                  dm0OoW02Q: {
                                                    children:
                                                      Q(`v121`, u) ??
                                                      /*#__PURE__*/ g(c, {
                                                        children: /*#__PURE__*/ g(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                            "--framer-font-weight": `500`,
                                                            "--framer-line-height": `21px`,
                                                            "--framer-text-alignment": `center`,
                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                          },
                                                          children: `FG-B / B2409`,
                                                        }),
                                                      }),
                                                  },
                                                },
                                                children: /*#__PURE__*/ g(w, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    Q(`v120`, u) ??
                                                    /*#__PURE__*/ g(c, {
                                                      children: /*#__PURE__*/ g(`p`, {
                                                        style: {
                                                          "--framer-font-size": `16px`,
                                                          "--framer-line-height": `21px`,
                                                        },
                                                        children: /*#__PURE__*/ g(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `16px`,
                                                            "--framer-font-weight": `500`,
                                                            "--framer-text-color": `rgba(5, 11, 20, 1)`,
                                                          },
                                                          children: `FG-B / B2409`,
                                                        }),
                                                      }),
                                                    }),
                                                  className: `framer-1j25hsn`,
                                                  "data-framer-name": `FG-B / B2409`,
                                                  fonts: [`GF;IBM Plex Sans-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ g(W, {
                                                breakpoint: E,
                                                overrides: {
                                                  dm0OoW02Q: {
                                                    children:
                                                      Q(`v123`, u) ??
                                                      /*#__PURE__*/ g(c, {
                                                        children: /*#__PURE__*/ g(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `14px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `400`,
                                                            "--framer-line-height": `1.5em`,
                                                            "--framer-text-alignment": `center`,
                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                          },
                                                          children: `已记录 62 起案例`,
                                                        }),
                                                      }),
                                                  },
                                                },
                                                children: /*#__PURE__*/ g(w, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    Q(`v122`, u) ??
                                                    /*#__PURE__*/ g(c, {
                                                      children: /*#__PURE__*/ g(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-font-size": `11px`,
                                                          "--framer-line-height": `15px`,
                                                        },
                                                        children: /*#__PURE__*/ g(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `11px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `400`,
                                                            "--framer-text-color": `rgb(5, 11, 20)`,
                                                          },
                                                          children: `已记录 62 起案例`,
                                                        }),
                                                      }),
                                                    }),
                                                  className: `framer-1xgzonz`,
                                                  "data-framer-name": `62 recorded cases`,
                                                  fonts: [`GF;IBM Plex Sans-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                          ue() &&
                                            /*#__PURE__*/ _(x.div, {
                                              className: `framer-128oan5 hidden-1ndfjm9 hidden-of1h00`,
                                              "data-border": !0,
                                              "data-framer-name": `Storage locations`,
                                              children: [
                                                /*#__PURE__*/ _(x.div, {
                                                  className: `framer-uf33su`,
                                                  "data-framer-name": `Heading`,
                                                  children: [
                                                    /*#__PURE__*/ g(x.div, {
                                                      className: `framer-vb2uje`,
                                                      "data-framer-name": `Icon / location`,
                                                      children: /*#__PURE__*/ g(x.div, {
                                                        className: `framer-1q5cf29`,
                                                        "data-framer-name": `Location`,
                                                        children: /*#__PURE__*/ g(P, {
                                                          className: `framer-1o7itf0`,
                                                          "data-framer-name": `Vector`,
                                                          fill: `rgba(0,0,0,1)`,
                                                          intrinsicHeight: 16,
                                                          intrinsicWidth: 13,
                                                          svg: `<svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.18751 9C5.63125 9 5.08748 8.83505 4.62496 8.52601C4.16245 8.21697 3.80197 7.77771 3.58909 7.2638C3.37622 6.74988 3.32053 6.18438 3.42905 5.63881C3.53757 5.09324 3.80543 4.5921 4.19877 4.19876C4.5921 3.80543 5.09324 3.53756 5.63881 3.42904C6.18439 3.32052 6.74989 3.37622 7.2638 3.58909C7.77772 3.80196 8.21697 4.16245 8.52601 4.62496C8.83506 5.08747 9.00001 5.63124 9.00001 6.1875C8.99916 6.93316 8.70257 7.64804 8.17531 8.1753C7.64804 8.70256 6.93317 8.99915 6.18751 9ZM6.18751 4.5C5.85375 4.5 5.52749 4.59897 5.24998 4.7844C4.97247 4.96982 4.75618 5.23337 4.62846 5.54172C4.50074 5.85007 4.46732 6.18937 4.53243 6.51671C4.59754 6.84406 4.75826 7.14474 4.99426 7.38074C5.23026 7.61674 5.53095 7.77746 5.85829 7.84258C6.18563 7.90769 6.52493 7.87427 6.83328 7.74655C7.14163 7.61882 7.40519 7.40253 7.59061 7.12502C7.77604 6.84752 7.87501 6.52126 7.87501 6.1875C7.87451 5.7401 7.69657 5.31116 7.38021 4.9948C7.06384 4.67844 6.63491 4.50049 6.18751 4.5Z" fill="#161616"/>
<path d="M6.18751 15.75L1.44254 10.1539C1.41559 10.1217 1.24667 9.89989 1.24667 9.89989C0.436057 8.8322 -0.00189375 7.52805 6.15553e-06 6.1875C6.15553e-06 4.54647 0.651902 2.97266 1.81228 1.81228C2.97266 0.651896 4.54648 0 6.18751 0C7.82853 0 9.40235 0.651896 10.5627 1.81228C11.7231 2.97266 12.375 4.54647 12.375 6.1875C12.377 7.5275 11.9394 8.83115 11.1292 9.89848L11.1283 9.89989C11.1283 9.89989 10.9596 10.1217 10.9344 10.1515L6.18751 15.75ZM2.14454 9.22219C2.14454 9.22219 2.27583 9.39555 2.30575 9.43279L6.18751 14.0107L10.0744 9.42632C10.0991 9.39527 10.2312 9.22061 10.2312 9.22061C10.8934 8.34822 11.2513 7.28276 11.25 6.1875C11.25 4.84484 10.7166 3.55717 9.76723 2.60777C8.81783 1.65837 7.53016 1.125 6.18751 1.125C4.84485 1.125 3.55718 1.65837 2.60778 2.60777C1.65838 3.55717 1.12501 4.84484 1.12501 6.1875C1.12376 7.28335 1.4819 8.34937 2.14454 9.22219Z" fill="#161616"/>
</svg>
`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ g(w, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        Q(`v124`, u) ??
                                                        /*#__PURE__*/ g(c, {
                                                          children: /*#__PURE__*/ g(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                              "--framer-font-family": `"IBM Plex Sans"`,
                                                              "--framer-font-style": `normal`,
                                                              "--framer-font-variation-axes": `normal`,
                                                              "--framer-font-weight": `500`,
                                                              "--framer-line-height": `22px`,
                                                              "--framer-text-color": `rgb(5, 11, 20)`,
                                                            },
                                                            children: `存储位置`,
                                                          }),
                                                        }),
                                                      className: `framer-6zw1hm`,
                                                      "data-framer-name": `Where it is stored`,
                                                      fonts: [`GF;IBM Plex Sans-500`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ g(w, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    Q(`v125`, u) ??
                                                    /*#__PURE__*/ g(c, {
                                                      children: /*#__PURE__*/ g(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `14px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `400`,
                                                          "--framer-line-height": `1.5em`,
                                                          "--framer-text-color": `rgb(135, 135, 135)`,
                                                        },
                                                        children: `仓库 01 · 2 个位置`,
                                                      }),
                                                    }),
                                                  className: `framer-11zo1aw`,
                                                  "data-framer-name": `Warehouse 01 · 2 locations`,
                                                  fonts: [`GF;IBM Plex Sans-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ _(x.div, {
                                                  className: `framer-gxw33b`,
                                                  "data-framer-name": `B-01`,
                                                  children: [
                                                    /*#__PURE__*/ g(w, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        Q(`v126`, u) ??
                                                        /*#__PURE__*/ g(c, {
                                                          children: /*#__PURE__*/ g(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                              "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                              "--framer-font-size": `14px`,
                                                              "--framer-font-weight": `500`,
                                                              "--framer-line-height": `1.5em`,
                                                              "--framer-text-color": `rgb(5, 11, 20)`,
                                                            },
                                                            children: `B-01`,
                                                          }),
                                                        }),
                                                      className: `framer-ig29fl`,
                                                      "data-framer-name": `B-01`,
                                                      fonts: [`GF;IBM Plex Sans-500`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    /*#__PURE__*/ g(w, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        Q(`v127`, u) ??
                                                        /*#__PURE__*/ g(c, {
                                                          children: /*#__PURE__*/ g(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                              "--framer-font-family": `"IBM Plex Sans"`,
                                                              "--framer-font-size": `14px`,
                                                              "--framer-font-style": `normal`,
                                                              "--framer-font-variation-axes": `normal`,
                                                              "--framer-font-weight": `400`,
                                                              "--framer-line-height": `1.5em`,
                                                              "--framer-text-color": `rgb(5, 11, 20)`,
                                                            },
                                                            children: `41 个案例`,
                                                          }),
                                                        }),
                                                      className: `framer-1byjvl8`,
                                                      "data-framer-name": `41 cases`,
                                                      fonts: [`GF;IBM Plex Sans-regular`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ _(x.div, {
                                                  className: `framer-1d82lut`,
                                                  "data-framer-name": `B-02`,
                                                  children: [
                                                    /*#__PURE__*/ g(w, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        Q(`v128`, u) ??
                                                        /*#__PURE__*/ g(c, {
                                                          children: /*#__PURE__*/ g(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                              "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                              "--framer-font-size": `14px`,
                                                              "--framer-font-weight": `500`,
                                                              "--framer-line-height": `1.5em`,
                                                              "--framer-text-color": `rgb(5, 11, 20)`,
                                                            },
                                                            children: `B-02`,
                                                          }),
                                                        }),
                                                      className: `framer-1puzeph`,
                                                      "data-framer-name": `B-02`,
                                                      fonts: [`GF;IBM Plex Sans-500`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    /*#__PURE__*/ g(w, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        Q(`v129`, u) ??
                                                        /*#__PURE__*/ g(c, {
                                                          children: /*#__PURE__*/ g(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                              "--framer-font-family": `"IBM Plex Sans"`,
                                                              "--framer-font-size": `14px`,
                                                              "--framer-font-style": `normal`,
                                                              "--framer-font-variation-axes": `normal`,
                                                              "--framer-font-weight": `400`,
                                                              "--framer-line-height": `1.5em`,
                                                              "--framer-text-color": `rgb(5, 11, 20)`,
                                                            },
                                                            children: `21 个案例`,
                                                          }),
                                                        }),
                                                      className: `framer-xa6bgv`,
                                                      "data-framer-name": `21 cases`,
                                                      fonts: [`GF;IBM Plex Sans-regular`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ue() &&
                                            /*#__PURE__*/ _(x.div, {
                                              className: `framer-pd2tcc hidden-1ndfjm9 hidden-of1h00`,
                                              "data-border": !0,
                                              "data-framer-name": `Linked containers`,
                                              children: [
                                                /*#__PURE__*/ _(x.div, {
                                                  className: `framer-1c3fznr`,
                                                  "data-framer-name": `Heading`,
                                                  children: [
                                                    /*#__PURE__*/ g(x.div, {
                                                      className: `framer-ej8bmw`,
                                                      "data-framer-name": `Icon / barcode`,
                                                      children: /*#__PURE__*/ g(x.div, {
                                                        className: `framer-n9cgl1`,
                                                        "data-framer-name": `Barcode`,
                                                        children: /*#__PURE__*/ g(P, {
                                                          className: `framer-1qn4cnt`,
                                                          "data-framer-name": `Vector`,
                                                          fill: `rgba(0,0,0,1)`,
                                                          intrinsicHeight: 13,
                                                          intrinsicWidth: 16,
                                                          svg: `<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.125 0H0V12.375H1.125V0Z" fill="#161616"/>
<path d="M6.75 0H5.625V11.25H6.75V0Z" fill="#161616"/>
<path d="M4.5 0H2.25V11.25H4.5V0Z" fill="#161616"/>
<path d="M10.125 0H7.875V11.25H10.125V0Z" fill="#161616"/>
<path d="M13.5 0H11.25V11.25H13.5V0Z" fill="#161616"/>
<path d="M15.75 0H14.625V12.375H15.75V0Z" fill="#161616"/>
</svg>
`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ g(w, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        Q(`v130`, u) ??
                                                        /*#__PURE__*/ g(c, {
                                                          children: /*#__PURE__*/ g(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                              "--framer-font-family": `"IBM Plex Sans"`,
                                                              "--framer-font-style": `normal`,
                                                              "--framer-font-variation-axes": `normal`,
                                                              "--framer-font-weight": `500`,
                                                              "--framer-line-height": `22px`,
                                                              "--framer-text-color": `rgb(5, 11, 20)`,
                                                            },
                                                            children: `关联容器`,
                                                          }),
                                                        }),
                                                      className: `framer-11xd0w`,
                                                      "data-framer-name": `Linked containers`,
                                                      fonts: [`GF;IBM Plex Sans-500`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ _(x.div, {
                                                  className: `framer-jppryn`,
                                                  "data-framer-name": `Container identification`,
                                                  children: [
                                                    /*#__PURE__*/ _(x.div, {
                                                      className: `framer-89nn3f`,
                                                      "data-framer-name": `Identify by`,
                                                      children: [
                                                        /*#__PURE__*/ g(w, {
                                                          __fromCanvasComponent: !0,
                                                          children:
                                                            Q(`v131`, u) ??
                                                            /*#__PURE__*/ g(c, {
                                                              children: /*#__PURE__*/ g(`p`, {
                                                                dir: `auto`,
                                                                style: {
                                                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                  "--framer-font-family": `"IBM Plex Sans"`,
                                                                  "--framer-font-size": `14px`,
                                                                  "--framer-font-style": `normal`,
                                                                  "--framer-font-variation-axes": `normal`,
                                                                  "--framer-font-weight": `400`,
                                                                  "--framer-line-height": `1.5em`,
                                                                  "--framer-text-color": `rgb(135, 135, 135)`,
                                                                },
                                                                children: `识别依据`,
                                                              }),
                                                            }),
                                                          className: `framer-18pfizw`,
                                                          "data-framer-name": `Identify by`,
                                                          fonts: [`GF;IBM Plex Sans-regular`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                        /*#__PURE__*/ g(w, {
                                                          __fromCanvasComponent: !0,
                                                          children:
                                                            Q(`v132`, u) ??
                                                            /*#__PURE__*/ g(c, {
                                                              children: /*#__PURE__*/ g(`p`, {
                                                                dir: `auto`,
                                                                style: {
                                                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                  "--framer-font-family": `"IBM Plex Sans"`,
                                                                  "--framer-font-size": `14px`,
                                                                  "--framer-font-style": `normal`,
                                                                  "--framer-font-variation-axes": `normal`,
                                                                  "--framer-font-weight": `400`,
                                                                  "--framer-line-height": `1.5em`,
                                                                  "--framer-text-color": `rgb(5, 11, 20)`,
                                                                },
                                                                children: `容器条码`,
                                                              }),
                                                            }),
                                                          className: `framer-1bnft8x`,
                                                          "data-framer-name": `Container barcode`,
                                                          fonts: [`GF;IBM Plex Sans-regular`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      ],
                                                    }),
                                                    /*#__PURE__*/ _(x.div, {
                                                      className: `framer-1w0xxvw`,
                                                      "data-framer-name": `Record`,
                                                      children: [
                                                        /*#__PURE__*/ g(w, {
                                                          __fromCanvasComponent: !0,
                                                          children:
                                                            Q(`v133`, u) ??
                                                            /*#__PURE__*/ g(c, {
                                                              children: /*#__PURE__*/ g(`p`, {
                                                                dir: `auto`,
                                                                style: {
                                                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                  "--framer-font-family": `"IBM Plex Sans"`,
                                                                  "--framer-font-size": `14px`,
                                                                  "--framer-font-style": `normal`,
                                                                  "--framer-font-variation-axes": `normal`,
                                                                  "--framer-font-weight": `400`,
                                                                  "--framer-line-height": `1.5em`,
                                                                  "--framer-text-color": `rgb(135, 135, 135)`,
                                                                },
                                                                children: `记录`,
                                                              }),
                                                            }),
                                                          className: `framer-1pzbaz5`,
                                                          "data-framer-name": `Record`,
                                                          fonts: [`GF;IBM Plex Sans-regular`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                        /*#__PURE__*/ g(w, {
                                                          __fromCanvasComponent: !0,
                                                          children:
                                                            Q(`v134`, u) ??
                                                            /*#__PURE__*/ g(c, {
                                                              children: /*#__PURE__*/ g(`p`, {
                                                                dir: `auto`,
                                                                style: {
                                                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                  "--framer-font-family": `"IBM Plex Sans"`,
                                                                  "--framer-font-size": `14px`,
                                                                  "--framer-font-style": `normal`,
                                                                  "--framer-font-variation-axes": `normal`,
                                                                  "--framer-font-weight": `400`,
                                                                  "--framer-line-height": `1.5em`,
                                                                  "--framer-text-color": `rgb(5, 11, 20)`,
                                                                },
                                                                children: `容器类型与批次`,
                                                              }),
                                                            }),
                                                          className: `framer-sm9vkd`,
                                                          "data-framer-name": `Container type & batch`,
                                                          fonts: [`GF;IBM Plex Sans-regular`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ g(w, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    Q(`v135`, u) ??
                                                    /*#__PURE__*/ g(c, {
                                                      children: /*#__PURE__*/ g(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `14px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `400`,
                                                          "--framer-line-height": `1.5em`,
                                                          "--framer-text-color": `rgb(135, 135, 135)`,
                                                        },
                                                        children: `将每个容器与其批次及存储位置进行关联。`,
                                                      }),
                                                    }),
                                                  className: `framer-1jr5al1`,
                                                  "data-framer-name": `Link each container to its batch and storage location.`,
                                                  fonts: [`GF;IBM Plex Sans-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          /*#__PURE__*/ _(x.div, {
                                            className: `framer-1roka80`,
                                            "data-framer-name": `Receipt`,
                                            children: [
                                              /*#__PURE__*/ g(W, {
                                                breakpoint: E,
                                                overrides: {
                                                  dm0OoW02Q: {
                                                    children:
                                                      Q(`v137`, u) ??
                                                      /*#__PURE__*/ g(c, {
                                                        children: /*#__PURE__*/ g(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `14px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `400`,
                                                            "--framer-line-height": `1.5em`,
                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                          },
                                                          children: `问题`,
                                                        }),
                                                      }),
                                                  },
                                                },
                                                children: /*#__PURE__*/ g(w, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    Q(`v136`, u) ??
                                                    /*#__PURE__*/ g(c, {
                                                      children: /*#__PURE__*/ g(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-font-size": `10px`,
                                                          "--framer-line-height": `15px`,
                                                        },
                                                        children: /*#__PURE__*/ g(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `10px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `400`,
                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                          },
                                                          children: `问题`,
                                                        }),
                                                      }),
                                                    }),
                                                  className: `framer-d2d8h3`,
                                                  "data-framer-name": `Issue`,
                                                  fonts: [`GF;IBM Plex Sans-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ g(W, {
                                                breakpoint: E,
                                                overrides: { dm0OoW02Q: { style: { rotate: 90 } } },
                                                children: /*#__PURE__*/ g(P, {
                                                  className: `framer-1gyljpa`,
                                                  "data-framer-name": `Vector 4212`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 8,
                                                  intrinsicWidth: 22,
                                                  svg: `<svg width="22" height="8" viewBox="-1 -1 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 2.88672L15 -3.1352e-05L15 5.77347L20 2.88672ZM0 2.88672L-4.37114e-08 3.38672L15.5 3.38672L15.5 2.88672L15.5 2.38672L4.37114e-08 2.38672L0 2.88672Z" fill="#7EA815"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ _(x.div, {
                                            className: `framer-17crec7`,
                                            "data-border": !0,
                                            "data-framer-name": `WMS Batch Trace/Document card`,
                                            children: [
                                              /*#__PURE__*/ _(x.div, {
                                                className: `framer-1lkrn4w`,
                                                "data-framer-name": `Role`,
                                                children: [
                                                  /*#__PURE__*/ g(x.div, {
                                                    className: `framer-1d2rrjs`,
                                                    "data-framer-name": `Document`,
                                                    children: /*#__PURE__*/ g(P, {
                                                      className: `framer-1fhfcez`,
                                                      "data-framer-name": `Vector`,
                                                      fill: `rgba(0,0,0,1)`,
                                                      intrinsicHeight: 14,
                                                      intrinsicWidth: 10,
                                                      svg: `<svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.85 3.65L6.35 0.15C6.25 0.05 6.15 0 6 0H1C0.45 0 0 0.45 0 1V13C0 13.55 0.45 14 1 14H9C9.55 14 10 13.55 10 13V4C10 3.85 9.95 3.75 9.85 3.65ZM6 1.2L8.8 4H6V1.2ZM9 13H1V1H5V4C5 4.55 5.45 5 6 5H9V13Z" fill="#161616"/>
<path d="M8 10H2V11H8V10Z" fill="#161616"/>
<path d="M8 7H2V8H8V7Z" fill="#161616"/>
</svg>
`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ g(W, {
                                                    breakpoint: E,
                                                    overrides: {
                                                      dm0OoW02Q: {
                                                        children:
                                                          Q(`v139`, u) ??
                                                          /*#__PURE__*/ g(c, {
                                                            children: /*#__PURE__*/ g(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                                "--framer-font-size": `14px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `400`,
                                                                "--framer-line-height": `1.5em`,
                                                                "--framer-text-color": `rgb(135, 135, 135)`,
                                                              },
                                                              children: `目标位置`,
                                                            }),
                                                          }),
                                                      },
                                                    },
                                                    children: /*#__PURE__*/ g(w, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        Q(`v138`, u) ??
                                                        /*#__PURE__*/ g(c, {
                                                          children: /*#__PURE__*/ g(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-font-size": `10px`,
                                                              "--framer-line-height": `15px`,
                                                            },
                                                            children: /*#__PURE__*/ g(`span`, {
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                                "--framer-font-size": `10px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `400`,
                                                                "--framer-text-color": `rgb(135, 135, 135)`,
                                                              },
                                                              children: `目标位置`,
                                                            }),
                                                          }),
                                                        }),
                                                      className: `framer-15yigu3`,
                                                      "data-framer-name": `Source`,
                                                      fonts: [`GF;IBM Plex Sans-regular`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              /*#__PURE__*/ g(w, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  Q(`v140`, u) ??
                                                  /*#__PURE__*/ g(c, {
                                                    children: /*#__PURE__*/ g(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-line-height": `22px`,
                                                        "--framer-text-color": `rgb(5, 11, 20)`,
                                                      },
                                                      children: `出库单`,
                                                    }),
                                                  }),
                                                className: `framer-1sw6kip`,
                                                "data-framer-name": `Inbound document`,
                                                fonts: [`GF;IBM Plex Sans-500`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              /*#__PURE__*/ g(W, {
                                                breakpoint: E,
                                                overrides: {
                                                  dm0OoW02Q: {
                                                    children:
                                                      Q(`v142`, u) ??
                                                      /*#__PURE__*/ g(c, {
                                                        children: /*#__PURE__*/ g(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `14px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `400`,
                                                            "--framer-line-height": `1.5em`,
                                                            "--framer-text-color": `rgb(135, 135, 135)`,
                                                          },
                                                          children: `部门/客户`,
                                                        }),
                                                      }),
                                                  },
                                                },
                                                children: /*#__PURE__*/ g(w, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    Q(`v141`, u) ??
                                                    /*#__PURE__*/ g(c, {
                                                      children: /*#__PURE__*/ g(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `11px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `400`,
                                                          "--framer-line-height": `15px`,
                                                          "--framer-text-color": `rgb(135, 135, 135)`,
                                                        },
                                                        children: `部门/客户`,
                                                      }),
                                                    }),
                                                  className: `framer-1pvf7q1`,
                                                  "data-framer-name": `Supplier / Production`,
                                                  fonts: [`GF;IBM Plex Sans-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ _(x.div, {
                                                className: `framer-lpedpy`,
                                                "data-border": !0,
                                                "data-framer-name": `Document reference`,
                                                children: [
                                                  /*#__PURE__*/ g(W, {
                                                    breakpoint: E,
                                                    overrides: {
                                                      dm0OoW02Q: {
                                                        children:
                                                          Q(`v144`, u) ??
                                                          /*#__PURE__*/ g(c, {
                                                            children: /*#__PURE__*/ g(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                                "--framer-font-size": `14px`,
                                                                "--framer-line-height": `1.5em`,
                                                                "--framer-text-color": `rgb(5, 11, 20)`,
                                                              },
                                                              children: `DN-2402`,
                                                            }),
                                                          }),
                                                      },
                                                    },
                                                    children: /*#__PURE__*/ g(w, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        Q(`v143`, u) ??
                                                        /*#__PURE__*/ g(c, {
                                                          children: /*#__PURE__*/ g(`p`, {
                                                            style: {
                                                              "--framer-font-size": `11px`,
                                                              "--framer-line-height": `15px`,
                                                            },
                                                            children: /*#__PURE__*/ g(`span`, {
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                                "--framer-font-size": `11px`,
                                                                "--framer-text-color": `rgba(5, 11, 20, 1)`,
                                                              },
                                                              children: `DN-2402`,
                                                            }),
                                                          }),
                                                        }),
                                                      className: `framer-ysn74r`,
                                                      "data-framer-name": `DN-2401`,
                                                      fonts: [`GF;IBM Plex Sans-regular`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ g(W, {
                                                    breakpoint: E,
                                                    overrides: {
                                                      dm0OoW02Q: {
                                                        children:
                                                          Q(`v146`, u) ??
                                                          /*#__PURE__*/ g(c, {
                                                            children: /*#__PURE__*/ g(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                                "--framer-font-size": `14px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `400`,
                                                                "--framer-line-height": `1.5em`,
                                                                "--framer-text-color": `rgb(135, 135, 135)`,
                                                              },
                                                              children: `已发布 15 个工单`,
                                                            }),
                                                          }),
                                                      },
                                                    },
                                                    children: /*#__PURE__*/ g(w, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        Q(`v145`, u) ??
                                                        /*#__PURE__*/ g(c, {
                                                          children: /*#__PURE__*/ g(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-font-size": `11px`,
                                                              "--framer-line-height": `15px`,
                                                            },
                                                            children: /*#__PURE__*/ g(`span`, {
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                                "--framer-font-size": `11px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `400`,
                                                                "--framer-text-color": `rgb(135, 135, 135)`,
                                                              },
                                                              children: `已发布 15 个工单`,
                                                            }),
                                                          }),
                                                        }),
                                                      className: `framer-1nth2ru`,
                                                      "data-framer-name": `Received 20 cases`,
                                                      fonts: [`GF;IBM Plex Sans-regular`],
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
                                      z() &&
                                        /*#__PURE__*/ g(x.div, {
                                          className: `framer-1y4hy1a hidden-1os3pxh`,
                                          "data-framer-name": `Batch association connectors`,
                                          children: /*#__PURE__*/ g(P, {
                                            className: `framer-ftobto`,
                                            "data-framer-name": `Frame`,
                                            fill: `rgba(0,0,0,1)`,
                                            intrinsicHeight: 38,
                                            intrinsicWidth: 1048,
                                            svg: `<svg width="1048" height="38" viewBox="0 0 1048 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M524 0V16M258.5 38V16H789.5V38" stroke="#A2D81A" stroke-width="1.5"/>
<path d="M524 19C525.657 19 527 17.6569 527 16C527 14.3431 525.657 13 524 13C522.343 13 521 14.3431 521 16C521 17.6569 522.343 19 524 19Z" fill="#7EA815"/>
</svg>
`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      z() &&
                                        /*#__PURE__*/ _(x.div, {
                                          className: `framer-1aguylh hidden-1os3pxh`,
                                          "data-framer-name": `Batch-linked storage and containers`,
                                          children: [
                                            /*#__PURE__*/ _(x.div, {
                                              className: `framer-1j1kz5z`,
                                              "data-border": !0,
                                              "data-framer-name": `Storage locations`,
                                              children: [
                                                /*#__PURE__*/ _(x.div, {
                                                  className: `framer-xz8bc`,
                                                  "data-framer-name": `Heading`,
                                                  children: [
                                                    /*#__PURE__*/ g(x.div, {
                                                      className: `framer-1qbxjqs`,
                                                      "data-framer-name": `Icon / location`,
                                                      children: /*#__PURE__*/ g(x.div, {
                                                        className: `framer-1cdar6k`,
                                                        "data-framer-name": `Location`,
                                                        children: /*#__PURE__*/ g(P, {
                                                          className: `framer-kz7uoq`,
                                                          "data-framer-name": `Vector`,
                                                          fill: `rgba(0,0,0,1)`,
                                                          intrinsicHeight: 16,
                                                          intrinsicWidth: 13,
                                                          svg: `<svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.18751 9C5.63125 9 5.08748 8.83505 4.62496 8.52601C4.16245 8.21697 3.80197 7.77771 3.58909 7.2638C3.37622 6.74988 3.32053 6.18438 3.42905 5.63881C3.53757 5.09324 3.80543 4.5921 4.19877 4.19876C4.5921 3.80543 5.09324 3.53756 5.63881 3.42904C6.18439 3.32052 6.74989 3.37622 7.2638 3.58909C7.77772 3.80196 8.21697 4.16245 8.52601 4.62496C8.83506 5.08747 9.00001 5.63124 9.00001 6.1875C8.99916 6.93316 8.70257 7.64804 8.17531 8.1753C7.64804 8.70256 6.93317 8.99915 6.18751 9ZM6.18751 4.5C5.85375 4.5 5.52749 4.59897 5.24998 4.7844C4.97247 4.96982 4.75618 5.23337 4.62846 5.54172C4.50074 5.85007 4.46732 6.18937 4.53243 6.51671C4.59754 6.84406 4.75826 7.14474 4.99426 7.38074C5.23026 7.61674 5.53095 7.77746 5.85829 7.84258C6.18563 7.90769 6.52493 7.87427 6.83328 7.74655C7.14163 7.61882 7.40519 7.40253 7.59061 7.12502C7.77604 6.84752 7.87501 6.52126 7.87501 6.1875C7.87451 5.7401 7.69657 5.31116 7.38021 4.9948C7.06384 4.67844 6.63491 4.50049 6.18751 4.5Z" fill="#161616"/>
<path d="M6.18751 15.75L1.44254 10.1539C1.41559 10.1217 1.24667 9.89989 1.24667 9.89989C0.436057 8.8322 -0.00189375 7.52805 6.15553e-06 6.1875C6.15553e-06 4.54647 0.651902 2.97266 1.81228 1.81228C2.97266 0.651896 4.54648 0 6.18751 0C7.82853 0 9.40235 0.651896 10.5627 1.81228C11.7231 2.97266 12.375 4.54647 12.375 6.1875C12.377 7.5275 11.9394 8.83115 11.1292 9.89848L11.1283 9.89989C11.1283 9.89989 10.9596 10.1217 10.9344 10.1515L6.18751 15.75ZM2.14454 9.22219C2.14454 9.22219 2.27583 9.39555 2.30575 9.43279L6.18751 14.0107L10.0744 9.42632C10.0991 9.39527 10.2312 9.22061 10.2312 9.22061C10.8934 8.34822 11.2513 7.28276 11.25 6.1875C11.25 4.84484 10.7166 3.55717 9.76723 2.60777C8.81783 1.65837 7.53016 1.125 6.18751 1.125C4.84485 1.125 3.55718 1.65837 2.60778 2.60777C1.65838 3.55717 1.12501 4.84484 1.12501 6.1875C1.12376 7.28335 1.4819 8.34937 2.14454 9.22219Z" fill="#161616"/>
</svg>
`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ g(w, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        Q(`v124`, u) ??
                                                        /*#__PURE__*/ g(c, {
                                                          children: /*#__PURE__*/ g(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                              "--framer-font-family": `"IBM Plex Sans"`,
                                                              "--framer-font-style": `normal`,
                                                              "--framer-font-variation-axes": `normal`,
                                                              "--framer-font-weight": `500`,
                                                              "--framer-line-height": `22px`,
                                                              "--framer-text-color": `rgb(5, 11, 20)`,
                                                            },
                                                            children: `存储位置`,
                                                          }),
                                                        }),
                                                      className: `framer-1oo1qll`,
                                                      "data-framer-name": `Where it is stored`,
                                                      fonts: [`GF;IBM Plex Sans-500`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ g(w, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    Q(`v147`, u) ??
                                                    /*#__PURE__*/ g(c, {
                                                      children: /*#__PURE__*/ g(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `11px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `400`,
                                                          "--framer-line-height": `15px`,
                                                          "--framer-text-color": `rgb(135, 135, 135)`,
                                                        },
                                                        children: `仓库 01 · 2 个位置`,
                                                      }),
                                                    }),
                                                  className: `framer-20y7nx`,
                                                  "data-framer-name": `Warehouse 01 · 2 locations`,
                                                  fonts: [`GF;IBM Plex Sans-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ _(x.div, {
                                                  className: `framer-42oibz`,
                                                  "data-framer-name": `B-01`,
                                                  children: [
                                                    /*#__PURE__*/ g(w, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        Q(`v148`, u) ??
                                                        /*#__PURE__*/ g(c, {
                                                          children: /*#__PURE__*/ g(`p`, {
                                                            style: {
                                                              "--framer-font-size": `12px`,
                                                              "--framer-line-height": `17px`,
                                                            },
                                                            children: /*#__PURE__*/ g(`span`, {
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                                "--framer-font-size": `12px`,
                                                                "--framer-font-weight": `500`,
                                                                "--framer-text-color": `rgba(5, 11, 20, 1)`,
                                                              },
                                                              children: `B-01`,
                                                            }),
                                                          }),
                                                        }),
                                                      className: `framer-1pkrk0v`,
                                                      "data-framer-name": `B-01`,
                                                      fonts: [`GF;IBM Plex Sans-500`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    /*#__PURE__*/ g(w, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        Q(`v149`, u) ??
                                                        /*#__PURE__*/ g(c, {
                                                          children: /*#__PURE__*/ g(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-font-size": `11px`,
                                                              "--framer-line-height": `15px`,
                                                            },
                                                            children: /*#__PURE__*/ g(`span`, {
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                                "--framer-font-size": `11px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `400`,
                                                                "--framer-text-color": `rgb(5, 11, 20)`,
                                                              },
                                                              children: `41 个案例`,
                                                            }),
                                                          }),
                                                        }),
                                                      className: `framer-m0o0aa`,
                                                      "data-framer-name": `41 cases`,
                                                      fonts: [`GF;IBM Plex Sans-regular`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ _(x.div, {
                                                  className: `framer-tbkowy`,
                                                  "data-framer-name": `B-02`,
                                                  children: [
                                                    /*#__PURE__*/ g(w, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        Q(`v150`, u) ??
                                                        /*#__PURE__*/ g(c, {
                                                          children: /*#__PURE__*/ g(`p`, {
                                                            style: {
                                                              "--framer-font-size": `12px`,
                                                              "--framer-line-height": `17px`,
                                                            },
                                                            children: /*#__PURE__*/ g(`span`, {
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                                "--framer-font-size": `12px`,
                                                                "--framer-font-weight": `500`,
                                                                "--framer-text-color": `rgba(5, 11, 20, 1)`,
                                                              },
                                                              children: `B-02`,
                                                            }),
                                                          }),
                                                        }),
                                                      className: `framer-5ssb9m`,
                                                      "data-framer-name": `B-02`,
                                                      fonts: [`GF;IBM Plex Sans-500`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    /*#__PURE__*/ g(w, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        Q(`v151`, u) ??
                                                        /*#__PURE__*/ g(c, {
                                                          children: /*#__PURE__*/ g(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-font-size": `11px`,
                                                              "--framer-line-height": `15px`,
                                                            },
                                                            children: /*#__PURE__*/ g(`span`, {
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                                "--framer-font-size": `11px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `400`,
                                                                "--framer-text-color": `rgb(5, 11, 20)`,
                                                              },
                                                              children: `21 个案例`,
                                                            }),
                                                          }),
                                                        }),
                                                      className: `framer-kmmv3t`,
                                                      "data-framer-name": `21 cases`,
                                                      fonts: [`GF;IBM Plex Sans-regular`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ _(x.div, {
                                              className: `framer-u550rr`,
                                              "data-border": !0,
                                              "data-framer-name": `Linked containers`,
                                              children: [
                                                /*#__PURE__*/ _(x.div, {
                                                  className: `framer-n3o0yq`,
                                                  "data-framer-name": `Heading`,
                                                  children: [
                                                    /*#__PURE__*/ g(x.div, {
                                                      className: `framer-11rvoz8`,
                                                      "data-framer-name": `Icon / barcode`,
                                                      children: /*#__PURE__*/ g(x.div, {
                                                        className: `framer-2c5p6k`,
                                                        "data-framer-name": `Barcode`,
                                                        children: /*#__PURE__*/ g(P, {
                                                          className: `framer-1hybk0d`,
                                                          "data-framer-name": `Vector`,
                                                          fill: `rgba(0,0,0,1)`,
                                                          intrinsicHeight: 13,
                                                          intrinsicWidth: 16,
                                                          svg: `<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.125 0H0V12.375H1.125V0Z" fill="#161616"/>
<path d="M6.75 0H5.625V11.25H6.75V0Z" fill="#161616"/>
<path d="M4.5 0H2.25V11.25H4.5V0Z" fill="#161616"/>
<path d="M10.125 0H7.875V11.25H10.125V0Z" fill="#161616"/>
<path d="M13.5 0H11.25V11.25H13.5V0Z" fill="#161616"/>
<path d="M15.75 0H14.625V12.375H15.75V0Z" fill="#161616"/>
</svg>
`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ g(w, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        Q(`v130`, u) ??
                                                        /*#__PURE__*/ g(c, {
                                                          children: /*#__PURE__*/ g(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                              "--framer-font-family": `"IBM Plex Sans"`,
                                                              "--framer-font-style": `normal`,
                                                              "--framer-font-variation-axes": `normal`,
                                                              "--framer-font-weight": `500`,
                                                              "--framer-line-height": `22px`,
                                                              "--framer-text-color": `rgb(5, 11, 20)`,
                                                            },
                                                            children: `关联容器`,
                                                          }),
                                                        }),
                                                      className: `framer-13p17ui`,
                                                      "data-framer-name": `Linked containers`,
                                                      fonts: [`GF;IBM Plex Sans-500`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ _(x.div, {
                                                  className: `framer-1wbabhx`,
                                                  "data-framer-name": `Container identification`,
                                                  children: [
                                                    /*#__PURE__*/ _(x.div, {
                                                      className: `framer-1g61p2o`,
                                                      "data-framer-name": `Identify by`,
                                                      children: [
                                                        /*#__PURE__*/ g(w, {
                                                          __fromCanvasComponent: !0,
                                                          children:
                                                            Q(`v152`, u) ??
                                                            /*#__PURE__*/ g(c, {
                                                              children: /*#__PURE__*/ g(`p`, {
                                                                dir: `auto`,
                                                                style: {
                                                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                  "--framer-font-family": `"IBM Plex Sans"`,
                                                                  "--framer-font-size": `10px`,
                                                                  "--framer-font-style": `normal`,
                                                                  "--framer-font-variation-axes": `normal`,
                                                                  "--framer-font-weight": `400`,
                                                                  "--framer-line-height": `15px`,
                                                                  "--framer-text-color": `rgb(135, 135, 135)`,
                                                                },
                                                                children: `识别依据`,
                                                              }),
                                                            }),
                                                          className: `framer-1i0anuj`,
                                                          "data-framer-name": `Identify by`,
                                                          fonts: [`GF;IBM Plex Sans-regular`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                        /*#__PURE__*/ g(w, {
                                                          __fromCanvasComponent: !0,
                                                          children:
                                                            Q(`v153`, u) ??
                                                            /*#__PURE__*/ g(c, {
                                                              children: /*#__PURE__*/ g(`p`, {
                                                                dir: `auto`,
                                                                style: {
                                                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                  "--framer-font-family": `"IBM Plex Sans"`,
                                                                  "--framer-font-size": `11px`,
                                                                  "--framer-font-style": `normal`,
                                                                  "--framer-font-variation-axes": `normal`,
                                                                  "--framer-font-weight": `400`,
                                                                  "--framer-line-height": `15px`,
                                                                  "--framer-text-color": `rgb(5, 11, 20)`,
                                                                },
                                                                children: `容器条码`,
                                                              }),
                                                            }),
                                                          className: `framer-11l0gda`,
                                                          "data-framer-name": `Container barcode`,
                                                          fonts: [`GF;IBM Plex Sans-regular`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      ],
                                                    }),
                                                    /*#__PURE__*/ _(x.div, {
                                                      className: `framer-1nno7xu`,
                                                      "data-framer-name": `Record`,
                                                      children: [
                                                        /*#__PURE__*/ g(w, {
                                                          __fromCanvasComponent: !0,
                                                          children:
                                                            Q(`v154`, u) ??
                                                            /*#__PURE__*/ g(c, {
                                                              children: /*#__PURE__*/ g(`p`, {
                                                                dir: `auto`,
                                                                style: {
                                                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                  "--framer-font-family": `"IBM Plex Sans"`,
                                                                  "--framer-font-size": `10px`,
                                                                  "--framer-font-style": `normal`,
                                                                  "--framer-font-variation-axes": `normal`,
                                                                  "--framer-font-weight": `400`,
                                                                  "--framer-line-height": `15px`,
                                                                  "--framer-text-color": `rgb(135, 135, 135)`,
                                                                },
                                                                children: `记录`,
                                                              }),
                                                            }),
                                                          className: `framer-9cdnrk`,
                                                          "data-framer-name": `Record`,
                                                          fonts: [`GF;IBM Plex Sans-regular`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                        /*#__PURE__*/ g(w, {
                                                          __fromCanvasComponent: !0,
                                                          children:
                                                            Q(`v155`, u) ??
                                                            /*#__PURE__*/ g(c, {
                                                              children: /*#__PURE__*/ g(`p`, {
                                                                dir: `auto`,
                                                                style: {
                                                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                  "--framer-font-family": `"IBM Plex Sans"`,
                                                                  "--framer-font-size": `11px`,
                                                                  "--framer-font-style": `normal`,
                                                                  "--framer-font-variation-axes": `normal`,
                                                                  "--framer-font-weight": `400`,
                                                                  "--framer-line-height": `15px`,
                                                                  "--framer-text-color": `rgb(5, 11, 20)`,
                                                                },
                                                                children: `容器类型与批次`,
                                                              }),
                                                            }),
                                                          className: `framer-14lca60`,
                                                          "data-framer-name": `Container type & batch`,
                                                          fonts: [`GF;IBM Plex Sans-regular`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ g(w, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    Q(`v156`, u) ??
                                                    /*#__PURE__*/ g(c, {
                                                      children: /*#__PURE__*/ g(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `11px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `400`,
                                                          "--framer-line-height": `15px`,
                                                          "--framer-text-color": `rgb(135, 135, 135)`,
                                                        },
                                                        children: `将每个容器与其批次及存储位置进行关联。`,
                                                      }),
                                                    }),
                                                  className: `framer-zfighv`,
                                                  "data-framer-name": `Link each container to its batch and storage location.`,
                                                  fonts: [`GF;IBM Plex Sans-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      /*#__PURE__*/ g(x.div, {
                                        className: `framer-17nx2vi`,
                                        "data-framer-name": `Footer gap`,
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        /*#__PURE__*/ g(W, {
                          breakpoint: E,
                          overrides: { dm0OoW02Q: { __framer__styleAppearEffectEnabled: void 0 } },
                          children: /*#__PURE__*/ _($n, {
                            __framer__animate: { transition: Wr },
                            __framer__animateOnce: !0,
                            __framer__enter: Ur,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-1u1oxfu`,
                            "data-framer-name": `uns agnet`,
                            id: pe,
                            ref: me,
                            children: [
                              /*#__PURE__*/ g(W, {
                                breakpoint: E,
                                overrides: {
                                  dm0OoW02Q: { __framer__styleTransformEffectEnabled: void 0 },
                                },
                                children: /*#__PURE__*/ g(xr, {
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: N,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: I,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-52pint`,
                                  "data-framer-cursor": `1xyimj3`,
                                  children: /*#__PURE__*/ g(V, {
                                    children: /*#__PURE__*/ g(H, {
                                      className: `framer-q1vm4g-container`,
                                      isAuthoredByUser: !0,
                                      nodeId: `FHV67Gx_S`,
                                      rendersWithMotion: !0,
                                      scopeId: `TEUe5r_sl`,
                                      children: /*#__PURE__*/ g(Mn, {
                                        height: `100%`,
                                        id: `FHV67Gx_S`,
                                        language: `zh`,
                                        layoutId: `FHV67Gx_S`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ g(W, {
                                breakpoint: E,
                                overrides: {
                                  dm0OoW02Q: { __framer__styleTransformEffectEnabled: void 0 },
                                },
                                children: /*#__PURE__*/ _(Cr, {
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: N,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: I,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-27ii1z`,
                                  children: [
                                    /*#__PURE__*/ g(W, {
                                      breakpoint: E,
                                      overrides: {
                                        dm0OoW02Q: {
                                          children:
                                            Q(`v158`, u) ??
                                            /*#__PURE__*/ g(c, {
                                              children: /*#__PURE__*/ g(`p`, {
                                                className: `framer-styles-preset-140plv3`,
                                                "data-styles-preset": `TBRoaUTAt`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--token-d2d554b8-e538-4f3d-a601-4167e4c07699, rgba(9, 9, 9, 0.8))`,
                                                },
                                                children: `06/ 作业记录`,
                                              }),
                                            }),
                                        },
                                      },
                                      children: /*#__PURE__*/ g(w, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          Q(`v157`, u) ??
                                          /*#__PURE__*/ g(c, {
                                            children: /*#__PURE__*/ g(`p`, {
                                              className: `framer-styles-preset-140plv3`,
                                              "data-styles-preset": `TBRoaUTAt`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-d2d554b8-e538-4f3d-a601-4167e4c07699, rgba(9, 9, 9, 0.8))`,
                                              },
                                              children: `06/ 作业记录`,
                                            }),
                                          }),
                                        className: `framer-zrogp1`,
                                        "data-framer-name": `Applications do not just consume data — they write`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    /*#__PURE__*/ g(x.div, {
                                      className: `framer-1w219kk`,
                                      children: /*#__PURE__*/ g(W, {
                                        breakpoint: E,
                                        overrides: {
                                          dm0OoW02Q: {
                                            children:
                                              Q(`v160`, u) ??
                                              /*#__PURE__*/ g(c, {
                                                children: /*#__PURE__*/ _(`h1`, {
                                                  className: `framer-styles-preset-1k5p4j8`,
                                                  "data-styles-preset": `F3NdZsOi7`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-alignment": `start` },
                                                  children: [
                                                    `用清楚的记录，`,
                                                    /*#__PURE__*/ g(`br`, {}),
                                                    `支撑现场作业`,
                                                  ],
                                                }),
                                              }),
                                          },
                                        },
                                        children: /*#__PURE__*/ g(w, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            Q(`v159`, u) ??
                                            /*#__PURE__*/ g(c, {
                                              children: /*#__PURE__*/ _(`h1`, {
                                                className: `framer-styles-preset-1k5p4j8`,
                                                "data-styles-preset": `F3NdZsOi7`,
                                                dir: `auto`,
                                                children: [
                                                  `用清楚的记录，`,
                                                  /*#__PURE__*/ g(`br`, {}),
                                                  `支撑现场作业`,
                                                ],
                                              }),
                                            }),
                                          className: `framer-lv92ut`,
                                          "data-framer-name": `Applications do not just consume data — they write`,
                                          effect: qr,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                    /*#__PURE__*/ g(w, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        Q(`v161`, u) ??
                                        /*#__PURE__*/ g(c, {
                                          children: /*#__PURE__*/ g(`p`, {
                                            className: `framer-styles-preset-1ful33y`,
                                            "data-styles-preset": `HNigw6pHS`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `left` },
                                            children: `按物料、批次与容器登记收货明细。`,
                                          }),
                                        }),
                                      className: `framer-1u0v8ya`,
                                      "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        /*#__PURE__*/ g(W, {
                          breakpoint: E,
                          overrides: { dm0OoW02Q: { __framer__styleAppearEffectEnabled: void 0 } },
                          children: /*#__PURE__*/ _($n, {
                            __framer__animate: { transition: Wr },
                            __framer__animateOnce: !0,
                            __framer__enter: Ur,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-18o0yss`,
                            "data-framer-name": `uns agnet`,
                            id: he,
                            ref: ge,
                            children: [
                              /*#__PURE__*/ g(W, {
                                breakpoint: E,
                                overrides: {
                                  dm0OoW02Q: { __framer__styleTransformEffectEnabled: void 0 },
                                },
                                children: /*#__PURE__*/ g(Dr, {
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: I,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-12nnksy`,
                                  children: /*#__PURE__*/ _(Tr, {
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-12ehy49`,
                                    children: [
                                      /*#__PURE__*/ g(W, {
                                        breakpoint: E,
                                        overrides: {
                                          dm0OoW02Q: {
                                            children:
                                              Q(`v163`, u) ??
                                              /*#__PURE__*/ g(c, {
                                                children: /*#__PURE__*/ g(`p`, {
                                                  className: `framer-styles-preset-140plv3`,
                                                  "data-styles-preset": `TBRoaUTAt`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `start`,
                                                    "--framer-text-color": `var(--token-d2d554b8-e538-4f3d-a601-4167e4c07699, rgba(9, 9, 9, 0.8))`,
                                                  },
                                                  children: `07/ 岗位与交接`,
                                                }),
                                              }),
                                          },
                                        },
                                        children: /*#__PURE__*/ g(w, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            Q(`v162`, u) ??
                                            /*#__PURE__*/ g(c, {
                                              children: /*#__PURE__*/ g(`p`, {
                                                className: `framer-styles-preset-140plv3`,
                                                "data-styles-preset": `TBRoaUTAt`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-d2d554b8-e538-4f3d-a601-4167e4c07699, rgba(9, 9, 9, 0.8))`,
                                                },
                                                children: `07/ 岗位与交接`,
                                              }),
                                            }),
                                          className: `framer-1lbp2sv`,
                                          "data-framer-name": `Applications do not just consume data — they write`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      /*#__PURE__*/ g(x.div, {
                                        className: `framer-d2ilrg`,
                                        children: /*#__PURE__*/ g(W, {
                                          breakpoint: E,
                                          overrides: {
                                            dm0OoW02Q: {
                                              children:
                                                Q(`v165`, u) ??
                                                /*#__PURE__*/ g(c, {
                                                  children: /*#__PURE__*/ _(`h1`, {
                                                    className: `framer-styles-preset-1k5p4j8`,
                                                    "data-styles-preset": `F3NdZsOi7`,
                                                    dir: `auto`,
                                                    style: { "--framer-text-alignment": `start` },
                                                    children: [
                                                      `每次交接，`,
                                                      /*#__PURE__*/ g(`br`, {}),
                                                      `责任到岗`,
                                                    ],
                                                  }),
                                                }),
                                            },
                                          },
                                          children: /*#__PURE__*/ g(w, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              Q(`v164`, u) ??
                                              /*#__PURE__*/ g(c, {
                                                children: /*#__PURE__*/ _(`h1`, {
                                                  className: `framer-styles-preset-1k5p4j8`,
                                                  "data-styles-preset": `F3NdZsOi7`,
                                                  dir: `auto`,
                                                  children: [
                                                    `每次交接，`,
                                                    /*#__PURE__*/ g(`br`, {}),
                                                    `责任到岗`,
                                                  ],
                                                }),
                                              }),
                                            className: `framer-1fay9yt`,
                                            "data-framer-name": `Applications do not just consume data — they write`,
                                            effect: qr,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ g(w, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          Q(`v166`, u) ??
                                          /*#__PURE__*/ g(c, {
                                            children: /*#__PURE__*/ g(`p`, {
                                              className: `framer-styles-preset-1ful33y`,
                                              "data-styles-preset": `HNigw6pHS`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `left` },
                                              children: `按本厂组织配置权限与确认规则，主管集中跟进差异。`,
                                            }),
                                          }),
                                        className: `framer-6rxu90`,
                                        "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ g(Ar, {
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-13rxj72`,
                                "data-framer-cursor": `1xyimj3`,
                                children: /*#__PURE__*/ g(V, {
                                  children: /*#__PURE__*/ g(H, {
                                    className: `framer-164hmu8-container`,
                                    isAuthoredByUser: !0,
                                    nodeId: `vuLHwRvnl`,
                                    rendersWithMotion: !0,
                                    scopeId: `TEUe5r_sl`,
                                    children: /*#__PURE__*/ g(W, {
                                      breakpoint: E,
                                      overrides: { dm0OoW02Q: { style: { width: `100%` } } },
                                      children: /*#__PURE__*/ g(bn, {
                                        height: `100%`,
                                        id: `vuLHwRvnl`,
                                        language: `zh`,
                                        layoutId: `vuLHwRvnl`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        z() &&
                          /*#__PURE__*/ g(`div`, {
                            className: `framer-1g0dvgk hidden-1os3pxh`,
                            "data-framer-name": `Final Section Scroll Buffer`,
                          }),
                      ],
                    }),
                    /*#__PURE__*/ g(W, {
                      breakpoint: E,
                      overrides: {
                        dm0OoW02Q: {
                          animate: void 0,
                          initial: void 0,
                          optimized: void 0,
                          transformTemplate: void 0,
                        },
                      },
                      children: /*#__PURE__*/ _(Nr, {
                        animate: Xr,
                        className: `framer-8ctdnk`,
                        "data-framer-appear-id": `8ctdnk`,
                        initial: Zr,
                        layout: M,
                        optimized: !0,
                        transformTemplate: Yr,
                        children: [
                          /*#__PURE__*/ _(`div`, {
                            className: `framer-ffhbeg`,
                            children: [
                              /*#__PURE__*/ g(`div`, {
                                className: `framer-p2ubm8`,
                                children: /*#__PURE__*/ g(W, {
                                  breakpoint: E,
                                  overrides: {
                                    dm0OoW02Q: {
                                      children:
                                        Q(`v168`, u) ??
                                        /*#__PURE__*/ g(c, {
                                          children: /*#__PURE__*/ g(`h1`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                              "--framer-font-family": `"IBM Plex Sans"`,
                                              "--framer-font-size": `28px`,
                                              "--framer-font-style": `normal`,
                                              "--framer-font-variation-axes": `normal`,
                                              "--framer-font-weight": `400`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                            },
                                            children: `自主研发或购买工程服务`,
                                          }),
                                        }),
                                      fonts: [`GF;IBM Plex Sans-regular`],
                                    },
                                  },
                                  children: /*#__PURE__*/ g(w, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      Q(`v167`, u) ??
                                      /*#__PURE__*/ g(c, {
                                        children: /*#__PURE__*/ g(`h1`, {
                                          className: `framer-styles-preset-1k5p4j8`,
                                          "data-styles-preset": `F3NdZsOi7`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                          },
                                          children: `自主研发或购买工程服务`,
                                        }),
                                      }),
                                    className: `framer-9a6aaq`,
                                    "data-framer-name": `Applications do not just consume data — they write`,
                                    effect: Qr,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ g(W, {
                                breakpoint: E,
                                overrides: {
                                  dm0OoW02Q: {
                                    children:
                                      Q(`v170`, u) ??
                                      /*#__PURE__*/ g(c, {
                                        children: /*#__PURE__*/ g(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                            "--framer-font-family": `"IBM Plex Sans"`,
                                            "--framer-font-style": `normal`,
                                            "--framer-font-variation-axes": `normal`,
                                            "--framer-font-weight": `400`,
                                            "--framer-letter-spacing": `0px`,
                                            "--framer-line-height": `1.5em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                          },
                                          children: `先验证一个仓库，再扩展到更多库区和物料类型。`,
                                        }),
                                      }),
                                    fonts: [`GF;IBM Plex Sans-regular`],
                                  },
                                },
                                children: /*#__PURE__*/ g(w, {
                                  __fromCanvasComponent: !0,
                                  children:
                                    Q(`v169`, u) ??
                                    /*#__PURE__*/ g(c, {
                                      children: /*#__PURE__*/ g(`p`, {
                                        className: `framer-styles-preset-1ful33y`,
                                        "data-styles-preset": `HNigw6pHS`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                        },
                                        children: `先验证一个仓库，再扩展到更多库区和物料类型。`,
                                      }),
                                    }),
                                  className: `framer-1adwzdf`,
                                  "data-framer-name": `Tier0 uses MQTT as the real-time backbone of its U`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ _(`div`, {
                            className: `framer-1eyxxq9`,
                            "data-border": !0,
                            "data-framer-name": `Delivery comparison`,
                            children: [
                              /*#__PURE__*/ g(W, {
                                breakpoint: E,
                                overrides: {
                                  dm0OoW02Q: {
                                    width: `calc(min(${f?.width || `100vw`} - 32px, 1184px) - 1px)`,
                                    y: void 0,
                                  },
                                  oN9uXFHdk: {
                                    width: `calc(min(${f?.width || `100vw`} - 256px, 1184px) - 1px)`,
                                    y: (f?.y || 0) + 9255.4,
                                  },
                                },
                                children: /*#__PURE__*/ g(V, {
                                  height: 240,
                                  width: `max((min(${f?.width || `100vw`} - 96px, 1184px) - 1px) / 2, 1px)`,
                                  y: (f?.y || 0) + 6831,
                                  children: /*#__PURE__*/ g(H, {
                                    className: `framer-1x66hgj-container`,
                                    nodeId: `aqUaymojH`,
                                    scopeId: `TEUe5r_sl`,
                                    children: /*#__PURE__*/ g(W, {
                                      breakpoint: E,
                                      overrides: {
                                        dm0OoW02Q: { variant: $(`AmQW0u14K`) },
                                        oN9uXFHdk: { variant: $(`AmQW0u14K`) },
                                      },
                                      children: /*#__PURE__*/ g(rt, {
                                        fDT68QpE0: `var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29))`,
                                        height: `100%`,
                                        id: `aqUaymojH`,
                                        layoutId: `aqUaymojH`,
                                        style: { width: `100%` },
                                        variant: $(`PrNCe4621`),
                                        width: `100%`,
                                        WyEZsvRLk: `var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29))`,
                                        xofycku__: `https://tier0.cn/login`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ g(te, {
                                links: [
                                  {
                                    href: { webPageId: `RCRTBRG3j` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `RCRTBRG3j` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `RCRTBRG3j` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  /*#__PURE__*/ g(W, {
                                    breakpoint: E,
                                    overrides: {
                                      dm0OoW02Q: {
                                        width: `calc(min(${f?.width || `100vw`} - 32px, 1184px) - 1px)`,
                                        y: void 0,
                                      },
                                      oN9uXFHdk: {
                                        width: `calc(min(${f?.width || `100vw`} - 256px, 1184px) - 1px)`,
                                        y: (f?.y || 0) + 9495.4,
                                      },
                                    },
                                    children: /*#__PURE__*/ g(V, {
                                      height: 240,
                                      width: `max((min(${f?.width || `100vw`} - 96px, 1184px) - 1px) / 2, 1px)`,
                                      y: (f?.y || 0) + 6831,
                                      children: /*#__PURE__*/ g(H, {
                                        className: `framer-y43f76-container`,
                                        nodeId: `FnRnYDkvJ`,
                                        scopeId: `TEUe5r_sl`,
                                        children: /*#__PURE__*/ g(W, {
                                          breakpoint: E,
                                          overrides: {
                                            dm0OoW02Q: { KM0Td3XVu: e[2], variant: $(`C5P7xQGUp`) },
                                            oN9uXFHdk: { KM0Td3XVu: e[1], variant: $(`C5P7xQGUp`) },
                                          },
                                          children: /*#__PURE__*/ g(xt, {
                                            height: `100%`,
                                            id: `FnRnYDkvJ`,
                                            KeFRQbA4Z: `var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29))`,
                                            KM0Td3XVu: e[0],
                                            layoutId: `FnRnYDkvJ`,
                                            style: { width: `100%` },
                                            variant: $(`MczB3l2bL`),
                                            width: `100%`,
                                            XIMMQmM21: `var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29))`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ g(W, {
                            breakpoint: E,
                            overrides: {
                              dm0OoW02Q: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 3520,
                                  intrinsicWidth: 5133,
                                  pixelHeight: 3520,
                                  pixelWidth: 5133,
                                  sizes: `calc(${f?.width || `100vw`} * 3.5795)`,
                                  src: `https://framerusercontent.com/images/56e9Et8KjR53hTiChM69qWqslE.png?width=5133&height=3520`,
                                  srcSet: `https://framerusercontent.com/images/56e9Et8KjR53hTiChM69qWqslE.png?scale-down-to=512&width=5133&height=3520 512w,https://framerusercontent.com/images/56e9Et8KjR53hTiChM69qWqslE.png?scale-down-to=1024&width=5133&height=3520 1024w,https://framerusercontent.com/images/56e9Et8KjR53hTiChM69qWqslE.png?scale-down-to=2048&width=5133&height=3520 2048w,https://framerusercontent.com/images/56e9Et8KjR53hTiChM69qWqslE.png?scale-down-to=4096&width=5133&height=3520 4096w,https://framerusercontent.com/images/56e9Et8KjR53hTiChM69qWqslE.png?width=5133&height=3520 5133w`,
                                },
                              },
                              oN9uXFHdk: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 3520,
                                  intrinsicWidth: 5133,
                                  loading: j((f?.y || 0) + 8834.4),
                                  pixelHeight: 3520,
                                  pixelWidth: 5133,
                                  sizes: `calc((${f?.width || `100vw`} - 160px) * 1.1049)`,
                                  src: `https://framerusercontent.com/images/56e9Et8KjR53hTiChM69qWqslE.png?width=5133&height=3520`,
                                  srcSet: `https://framerusercontent.com/images/56e9Et8KjR53hTiChM69qWqslE.png?scale-down-to=512&width=5133&height=3520 512w,https://framerusercontent.com/images/56e9Et8KjR53hTiChM69qWqslE.png?scale-down-to=1024&width=5133&height=3520 1024w,https://framerusercontent.com/images/56e9Et8KjR53hTiChM69qWqslE.png?scale-down-to=2048&width=5133&height=3520 2048w,https://framerusercontent.com/images/56e9Et8KjR53hTiChM69qWqslE.png?scale-down-to=4096&width=5133&height=3520 4096w,https://framerusercontent.com/images/56e9Et8KjR53hTiChM69qWqslE.png?width=5133&height=3520 5133w`,
                                },
                              },
                            },
                            children: /*#__PURE__*/ g(re, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 3520,
                                intrinsicWidth: 5133,
                                loading: j((f?.y || 0) + 6124),
                                pixelHeight: 3520,
                                pixelWidth: 5133,
                                sizes: `calc(${f?.width || `100vw`} * 1.0097)`,
                                src: `https://framerusercontent.com/images/56e9Et8KjR53hTiChM69qWqslE.png?width=5133&height=3520`,
                                srcSet: `https://framerusercontent.com/images/56e9Et8KjR53hTiChM69qWqslE.png?scale-down-to=512&width=5133&height=3520 512w,https://framerusercontent.com/images/56e9Et8KjR53hTiChM69qWqslE.png?scale-down-to=1024&width=5133&height=3520 1024w,https://framerusercontent.com/images/56e9Et8KjR53hTiChM69qWqslE.png?scale-down-to=2048&width=5133&height=3520 2048w,https://framerusercontent.com/images/56e9Et8KjR53hTiChM69qWqslE.png?scale-down-to=4096&width=5133&height=3520 4096w,https://framerusercontent.com/images/56e9Et8KjR53hTiChM69qWqslE.png?width=5133&height=3520 5133w`,
                              },
                              className: `framer-1aa9a6v`,
                              "data-framer-name": `Polina-razorilova-CvHJwk7F2cs-unsplash-halftone 2`,
                            }),
                          }),
                        ],
                      }),
                    }),
                    /*#__PURE__*/ g(W, {
                      breakpoint: E,
                      overrides: {
                        dm0OoW02Q: { transformTemplate: Yr },
                        oN9uXFHdk: { transformTemplate: Yr },
                      },
                      children: /*#__PURE__*/ g(x.div, {
                        className: `framer-12al8c3`,
                        "data-framer-name": `header`,
                        layout: M,
                        children: /*#__PURE__*/ g(W, {
                          breakpoint: E,
                          overrides: {
                            dm0OoW02Q: { width: `1280px`, y: void 0 },
                            oN9uXFHdk: { width: `1280px`, y: (f?.y || 0) + 10011.4 },
                          },
                          children: /*#__PURE__*/ g(V, {
                            height: 498,
                            width: `min(${f?.width || `100vw`} * 0.8889, 1280px)`,
                            y: (f?.y || 0) + 7111,
                            children: /*#__PURE__*/ g(H, {
                              className: `framer-lxiwvt-container`,
                              nodeId: `EDJtZJvyk`,
                              scopeId: `TEUe5r_sl`,
                              children: /*#__PURE__*/ g(W, {
                                breakpoint: E,
                                overrides: {
                                  dm0OoW02Q: {
                                    style: { maxWidth: `100%` },
                                    variant: $(`vXscR1iJC`),
                                  },
                                  oN9uXFHdk: {
                                    style: { maxWidth: `100%` },
                                    variant: $(`G8rxyXoDj`),
                                  },
                                },
                                children: /*#__PURE__*/ g(we, {
                                  height: `100%`,
                                  id: `EDJtZJvyk`,
                                  layoutId: `EDJtZJvyk`,
                                  style: { maxWidth: `100%`, width: `100%` },
                                  variant: $(`zev4Tv3qQ`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ g(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (ii = [
        `.framer-ajZR9.framer-9hor1j, .framer-ajZR9 .framer-9hor1j { display: block; }`,
        `.framer-ajZR9.framer-1ndfjm9 { align-content: center; align-items: center; background-color: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 80px 1019px 80px; position: relative; width: 1440px; }`,
        `.framer-ajZR9 .framer-13c563b-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 5; }`,
        `.framer-ajZR9 .framer-1o0p5mq-container { flex: none; height: 796px; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; width: 100%; z-index: 0; }`,
        `.framer-ajZR9 .framer-lyhkcx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; max-width: 1280px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 80px 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-1br1eko { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-1obbasi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: 1241px; justify-content: center; overflow: visible; padding: 140px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-1tdy1pe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-1458unf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-ml43dq, .framer-ajZR9 .framer-3fibrc, .framer-ajZR9 .framer-1iq5nyv, .framer-ajZR9 .framer-14bit64, .framer-ajZR9 .framer-1c44oqc, .framer-ajZR9 .framer-wtaro7, .framer-ajZR9 .framer-10v96qt, .framer-ajZR9 .framer-nt3w2z, .framer-ajZR9 .framer-phtcax, .framer-ajZR9 .framer-13vfo6g, .framer-ajZR9 .framer-49gte0, .framer-ajZR9 .framer-1qi02h9, .framer-ajZR9 .framer-1a9g66i, .framer-ajZR9 .framer-df1sz7, .framer-ajZR9 .framer-g748ue, .framer-ajZR9 .framer-173yv74, .framer-ajZR9 .framer-1rdwn2q, .framer-ajZR9 .framer-13amylw, .framer-ajZR9 .framer-1fzbd4i, .framer-ajZR9 .framer-zwpzyk, .framer-ajZR9 .framer-z5arw7, .framer-ajZR9 .framer-4iglv, .framer-ajZR9 .framer-tkszpi, .framer-ajZR9 .framer-1sugyj0, .framer-ajZR9 .framer-7htefi, .framer-ajZR9 .framer-11zo1aw, .framer-ajZR9 .framer-18pfizw, .framer-ajZR9 .framer-1bnft8x, .framer-ajZR9 .framer-1pzbaz5, .framer-ajZR9 .framer-sm9vkd, .framer-ajZR9 .framer-1jr5al1, .framer-ajZR9 .framer-1sw6kip, .framer-ajZR9 .framer-1pvf7q1, .framer-ajZR9 .framer-20y7nx, .framer-ajZR9 .framer-1i0anuj, .framer-ajZR9 .framer-11l0gda, .framer-ajZR9 .framer-9cdnrk, .framer-ajZR9 .framer-14lca60, .framer-ajZR9 .framer-zfighv, .framer-ajZR9 .framer-1u0v8ya, .framer-ajZR9 .framer-6rxu90 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ajZR9 .framer-10eyzaj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-ajZR9 .framer-19tyy49-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-ajZR9 .framer-532ci8-container { flex: none; height: 56px; position: relative; width: auto; }`,
        `.framer-ajZR9 .framer-12lbpp9 { background-color: #04090d; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; flex: none; gap: 0px; height: 776px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ajZR9 .framer-1rp61c9 { -webkit-filter: blur(2px); aspect-ratio: 1.4623348143274368 / 1; filter: blur(2px); flex: none; height: auto; left: -28px; opacity: 0.8; position: absolute; top: -79px; width: 105%; }`,
        `.framer-ajZR9 .framer-1im04vq-container { bottom: 40px; flex: none; left: 40px; position: absolute; right: 40px; top: 40px; }`,
        `.framer-ajZR9 .framer-pv54nk-container { bottom: -4px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); width: 577px; }`,
        `.framer-ajZR9 .framer-1afzz6d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: 5149px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-m4fv6a { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: var(--overflow-clip-fallback, clip); padding: 40px 0px 0px 0px; position: sticky; top: 80px; width: 100%; z-index: 1; }`,
        `.framer-ajZR9 .framer-1qdtyaq, .framer-ajZR9 .framer-27ii1z { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1280px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 44%; }`,
        `.framer-ajZR9 .framer-1i9dvtw, .framer-ajZR9 .framer-1gzhqqh, .framer-ajZR9 .framer-17mglxj, .framer-ajZR9 .framer-1t54bpn, .framer-ajZR9 .framer-mwfw88, .framer-ajZR9 .framer-13ytz5g, .framer-ajZR9 .framer-s033ta, .framer-ajZR9 .framer-1cnootz, .framer-ajZR9 .framer-1pinhdy, .framer-ajZR9 .framer-1e4qwbw, .framer-ajZR9 .framer-pw7h8j, .framer-ajZR9 .framer-2kkaqa, .framer-ajZR9 .framer-1ad5kcy, .framer-ajZR9 .framer-15x6h4k, .framer-ajZR9 .framer-dp9je, .framer-ajZR9 .framer-1arpcgs, .framer-ajZR9 .framer-7nsh54, .framer-ajZR9 .framer-vxrl4l, .framer-ajZR9 .framer-1vd676l, .framer-ajZR9 .framer-18u9i2o, .framer-ajZR9 .framer-14otw3, .framer-ajZR9 .framer-1n7opss, .framer-ajZR9 .framer-1agrp8z, .framer-ajZR9 .framer-1j25hsn, .framer-ajZR9 .framer-1xgzonz, .framer-ajZR9 .framer-ig29fl, .framer-ajZR9 .framer-1byjvl8, .framer-ajZR9 .framer-1puzeph, .framer-ajZR9 .framer-xa6bgv, .framer-ajZR9 .framer-d2d8h3, .framer-ajZR9 .framer-15yigu3, .framer-ajZR9 .framer-ysn74r, .framer-ajZR9 .framer-1nth2ru, .framer-ajZR9 .framer-1pkrk0v, .framer-ajZR9 .framer-m0o0aa, .framer-ajZR9 .framer-5ssb9m, .framer-ajZR9 .framer-kmmv3t, .framer-ajZR9 .framer-zrogp1, .framer-ajZR9 .framer-1lbp2sv, .framer-ajZR9 .framer-9a6aaq { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-ajZR9 .framer-1xa9ffj, .framer-ajZR9 .framer-1kjymim, .framer-ajZR9 .framer-1bu6jn8, .framer-ajZR9 .framer-bxqo6, .framer-ajZR9 .framer-o6cghb, .framer-ajZR9 .framer-uf33su, .framer-ajZR9 .framer-1c3fznr, .framer-ajZR9 .framer-xz8bc, .framer-ajZR9 .framer-n3o0yq, .framer-ajZR9 .framer-1w219kk, .framer-ajZR9 .framer-d2ilrg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-8sxa3i, .framer-ajZR9 .framer-1rakccc, .framer-ajZR9 .framer-wdcwil, .framer-ajZR9 .framer-1darza3, .framer-ajZR9 .framer-6zw1hm, .framer-ajZR9 .framer-11xd0w, .framer-ajZR9 .framer-1oo1qll, .framer-ajZR9 .framer-13p17ui, .framer-ajZR9 .framer-lv92ut, .framer-ajZR9 .framer-1fay9yt { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ajZR9 .framer-16uh57p, .framer-ajZR9 .framer-52pint { align-content: center; align-items: center; background: linear-gradient(180deg, rgba(178, 237, 30, 0.2) 0%, rgba(178, 237, 30, 0.4) 100%); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1280px; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: 1px; }`,
        `.framer-ajZR9 .framer-1caaucj-container, .framer-ajZR9 .framer-1vvfxs7-container { aspect-ratio: 1.2222222222222223 / 1; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-1saa2tf { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: 627px; justify-content: flex-start; max-width: 1280px; overflow: var(--overflow-clip-fallback, clip); padding: 40px 0px 0px 0px; position: sticky; top: 80px; width: 100%; z-index: 2; }`,
        `.framer-ajZR9 .framer-cnrvpq, .framer-ajZR9 .framer-12nnksy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 44%; }`,
        `.framer-ajZR9 .framer-t253xs, .framer-ajZR9 .framer-vbfw1q, .framer-ajZR9 .framer-1nj18fg, .framer-ajZR9 .framer-13sqyjk, .framer-ajZR9 .framer-1yppzli, .framer-ajZR9 .framer-12ehy49 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-1sezskn, .framer-ajZR9 .framer-13rxj72 { align-content: center; align-items: center; background-color: var(--token-f7c5411f-d63f-4f38-b2c7-f061f94134e0, #fafafa); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: 1px; }`,
        `.framer-ajZR9 .framer-lzr2oi { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: 627px; justify-content: flex-start; max-width: 1280px; overflow: var(--overflow-clip-fallback, clip); padding: 40px 0px 0px 0px; position: sticky; top: 80px; width: 100%; z-index: 3; }`,
        `.framer-ajZR9 .framer-xco6hu { background-color: #f9f9f9; flex: none; height: 327px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-ivtpzg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; transform: translate(-50%, -50%); width: min-content; }`,
        `.framer-ajZR9 .framer-bm5ff2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 275px; }`,
        `.framer-ajZR9 .framer-1wsvpnr, .framer-ajZR9 .framer-hlz0h3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-34y5ss { align-content: flex-end; align-items: flex-end; background-color: #dcf797; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 12px 16px 12px 16px; position: relative; width: 219px; }`,
        `.framer-ajZR9 .framer-uk60us, .framer-ajZR9 .framer-1r5ywec, .framer-ajZR9 .framer-1lmqjz0 { --border-bottom-width: 1.3125px; --border-color: #dcf797; --border-left-width: 1.3125px; --border-right-width: 1.3125px; --border-style: solid; --border-top-width: 1.3125px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 13.125px; height: 42px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 42px; }`,
        `.framer-ajZR9 .framer-ldtf0i, .framer-ajZR9 .framer-17vi60a, .framer-ajZR9 .framer-zlk48z, .framer-ajZR9 .framer-sm1qqy, .framer-ajZR9 .framer-53xp7i, .framer-ajZR9 .framer-1nw2lt8 { background-color: rgba(255, 255, 255, 0); flex: none; gap: 0px; height: 28px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 28px; }`,
        `.framer-ajZR9 .framer-1qv0gdp, .framer-ajZR9 .framer-2p7d5y { bottom: 2px; flex: none; left: 5px; position: absolute; right: 6px; top: 2px; }`,
        `.framer-ajZR9 .framer-14guhmr, .framer-ajZR9 .framer-1ecgji6, .framer-ajZR9 .framer-g0fjln, .framer-ajZR9 .framer-j2ezb9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ajZR9 .framer-12cjy81, .framer-ajZR9 .framer-wet2e2, .framer-ajZR9 .framer-16m4x1g, .framer-ajZR9 .framer-1cvirob { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 101px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ajZR9 .framer-1ldb2iv, .framer-ajZR9 .framer-1miao24, .framer-ajZR9 .framer-1j5n1or, .framer-ajZR9 .framer-1yhu42w { flex: none; height: 8px; position: relative; width: 51px; }`,
        `.framer-ajZR9 .framer-ji1jph, .framer-ajZR9 .framer-s7w1w4 { align-content: flex-end; align-items: flex-end; background-color: #dcf797; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 12px 16px 12px 16px; position: relative; width: min-content; }`,
        `.framer-ajZR9 .framer-166iqv2 { bottom: 2px; flex: none; left: 4px; position: absolute; right: 5px; top: 2px; }`,
        `.framer-ajZR9 .framer-x6l2vt, .framer-ajZR9 .framer-1wd5t6r { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 133px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ajZR9 .framer-60z1l5 { --border-bottom-width: 1px; --border-color: var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, #73b200); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; background-color: #f9ffeb; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 35px; height: 253px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 530px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ajZR9 .framer-1ce1gm1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 11.395441055297852px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-ajZR9 .framer-18ugz76 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: 124px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 454px; }`,
        `.framer-ajZR9 .framer-1pgt1bz, .framer-ajZR9 .framer-zgqpvu, .framer-ajZR9 .framer-mv37ba { --border-bottom-width: 1px; --border-color: #a2d81a; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 12px 16px 12px 16px; position: relative; width: 124px; }`,
        `.framer-ajZR9 .framer-tjj33l, .framer-ajZR9 .framer-1r694sy, .framer-ajZR9 .framer-16fp1xt { align-content: center; align-items: center; background-color: #cbf368; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 13.125px; height: 42px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 42px; }`,
        `.framer-ajZR9 .framer-1eduduk, .framer-ajZR9 .framer-me26gx { bottom: 2px; flex: none; left: 2px; position: absolute; right: 2px; top: 2px; }`,
        `.framer-ajZR9 .framer-a77xsp, .framer-ajZR9 .framer-16qknc, .framer-ajZR9 .framer-11bp5zz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ajZR9 .framer-1c841kl, .framer-ajZR9 .framer-cwm3m4 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 64px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ajZR9 .framer-1vqmh3w, .framer-ajZR9 .framer-11qre4j { flex: none; height: 8px; position: relative; width: 31px; }`,
        `.framer-ajZR9 .framer-qifr6q { bottom: 3px; flex: none; left: 4px; position: absolute; right: 3px; top: 4px; }`,
        `.framer-ajZR9 .framer-1bxk3l5, .framer-ajZR9 .framer-1f8j12k { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 46px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ajZR9 .framer-1gmeo0n { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 32px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ajZR9 .framer-hvkky7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 268px; }`,
        `.framer-ajZR9 .framer-1cxi5rd, .framer-ajZR9 .framer-23xbp8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-16nghdz { align-content: flex-end; align-items: flex-end; background-color: #dcf797; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 12px 16px 12px 16px; position: relative; width: 204px; }`,
        `.framer-ajZR9 .framer-e9t2ko { flex: none; height: 44px; position: relative; width: 44px; }`,
        `.framer-ajZR9 .framer-e2vztn, .framer-ajZR9 .framer-1exrpe4 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 118px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ajZR9 .framer-1fw11q9, .framer-ajZR9 .framer-f46iyi { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; max-width: 1280px; min-height: 586px; overflow: var(--overflow-clip-fallback, clip); padding: 40px 0px 0px 0px; position: sticky; top: 80px; width: 100%; z-index: 4; }`,
        `.framer-ajZR9 .framer-100vngm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-ajZR9 .framer-fmzhut { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 682px; }`,
        `.framer-ajZR9 .framer-4hjjej { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-nz6o9q, .framer-ajZR9 .framer-p2ubm8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-a91ywi { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ajZR9 .framer-1e1l7zb { display: grid; flex: none; gap: 14px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(6, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-4ml4bp { --border-bottom-width: 1px; --border-color: var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, #73b200); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; align-self: start; background-color: #f9ffeb; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; grid-column: span 5; height: 100%; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 12px 18px 12px 18px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ajZR9 .framer-ow9a7k, .framer-ajZR9 .framer-u17awz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-13ebjy5, .framer-ajZR9 .framer-g51e1s, .framer-ajZR9 .framer-8vkwkb, .framer-ajZR9 .framer-1ol2jno, .framer-ajZR9 .framer-u2cai8, .framer-ajZR9 .framer-14h2o40, .framer-ajZR9 .framer-12jjx9t, .framer-ajZR9 .framer-t6xirv { --border-bottom-width: 1px; --border-color: #a2d81a; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 12px 16px 12px 16px; position: relative; width: 1px; }`,
        `.framer-ajZR9 .framer-8sscd9, .framer-ajZR9 .framer-1sfzaxk, .framer-ajZR9 .framer-66rdqg, .framer-ajZR9 .framer-kn4iy8, .framer-ajZR9 .framer-oozouf, .framer-ajZR9 .framer-14jvjiu, .framer-ajZR9 .framer-11c89ck, .framer-ajZR9 .framer-1knf2lm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-xs43ra, .framer-ajZR9 .framer-c44g9n, .framer-ajZR9 .framer-1i0mmo2, .framer-ajZR9 .framer-1my3g6g, .framer-ajZR9 .framer-159gul9, .framer-ajZR9 .framer-9ta0ph, .framer-ajZR9 .framer-uvx87k, .framer-ajZR9 .framer-15imp1o { align-content: center; align-items: center; background-color: #cbf368; border-bottom-left-radius: 7px; border-bottom-right-radius: 7px; border-top-left-radius: 7px; border-top-right-radius: 7px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 48px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ajZR9 .framer-1ph9z29, .framer-ajZR9 .framer-h68qvj, .framer-ajZR9 .framer-px3hsl, .framer-ajZR9 .framer-k4sy4y, .framer-ajZR9 .framer-1bctjwt, .framer-ajZR9 .framer-1uu00zf, .framer-ajZR9 .framer-116e30x, .framer-ajZR9 .framer-88h70g { flex: none; gap: 0px; height: 30px; overflow: visible; position: relative; width: 30px; }`,
        `.framer-ajZR9 .framer-1vxler3, .framer-ajZR9 .framer-5wg6x9, .framer-ajZR9 .framer-y1bpbu, .framer-ajZR9 .framer-gwwo3t, .framer-ajZR9 .framer-eq7xfe, .framer-ajZR9 .framer-18cj6wo, .framer-ajZR9 .framer-1jct8b4, .framer-ajZR9 .framer-isghzt { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-ajZR9 .framer-1qb95z8, .framer-ajZR9 .framer-fuv03n, .framer-ajZR9 .framer-11v9u7g, .framer-ajZR9 .framer-1f9wlwd, .framer-ajZR9 .framer-jodnvd, .framer-ajZR9 .framer-1h7gzah, .framer-ajZR9 .framer-vs7708, .framer-ajZR9 .framer-etsy8a { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-1n0048g, .framer-ajZR9 .framer-10z83x, .framer-ajZR9 .framer-1st5pln, .framer-ajZR9 .framer-cht7xa, .framer-ajZR9 .framer-1vzbche, .framer-ajZR9 .framer-735800 { flex: none; height: 8px; position: relative; width: 38px; }`,
        `.framer-ajZR9 .framer-18ltjle, .framer-ajZR9 .framer-s6gfpo { align-content: center; align-items: center; align-self: center; background-color: #f9f9f9; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; justify-self: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-ajZR9 .framer-ehms39 { flex: none; height: 105px; position: relative; width: 193px; }`,
        `.framer-ajZR9 .framer-jn82u1 { flex: none; height: 139px; opacity: 0.3; position: relative; width: 170px; }`,
        `.framer-ajZR9 .framer-1tdb3e9 { bottom: 6px; flex: none; height: 24px; left: -4px; position: absolute; width: 34px; }`,
        `.framer-ajZR9 .framer-f77ejg { --border-bottom-width: 1px; --border-color: var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, #73b200); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; align-self: start; background-color: #f9ffeb; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; grid-column: span 5; height: min-content; justify-content: flex-end; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 12px 18px 12px 18px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ajZR9 .framer-bwczzx { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-ajZR9 .framer-16su00v { align-content: center; align-items: center; background-color: #f9f9f9; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 20px 0px 20px 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-1ur84gh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 338px; justify-content: center; min-height: 338px; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: 1080px; }`,
        `.framer-ajZR9 .framer-1ozht0q { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: flex-start; min-height: 120px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-2lja1c, .framer-ajZR9 .framer-17crec7 { --border-bottom-width: 1px; --border-color: #dee3d7; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: 100%; justify-content: flex-start; overflow: visible; padding: 10px 16px 10px 16px; position: relative; width: 1px; }`,
        `.framer-ajZR9 .framer-1szeacx, .framer-ajZR9 .framer-1lkrn4w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: 16px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-14dyzti, .framer-ajZR9 .framer-1d2rrjs { background-color: rgba(255, 255, 255, 0); flex: none; gap: 0px; height: 16px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 16px; }`,
        `.framer-ajZR9 .framer-1kjmrxt, .framer-ajZR9 .framer-1fhfcez { bottom: 1px; flex: none; left: 3px; position: absolute; right: 3px; top: 1px; }`,
        `.framer-ajZR9 .framer-r5pmwd, .framer-ajZR9 .framer-lpedpy { --border-bottom-width: 0px; --border-color: #ebebeb; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 6px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-18925ph, .framer-ajZR9 .framer-1roka80 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: 36px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 44px; }`,
        `.framer-ajZR9 .framer-nsm5k5, .framer-ajZR9 .framer-1gyljpa { flex: none; height: 8px; position: relative; width: 22px; }`,
        `.framer-ajZR9 .framer-1wsc9vo { --border-bottom-width: 1px; --border-color: #a2d81a; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #dcf797; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: 1.12 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 6px 10px 6px 10px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ajZR9 .framer-1spurib { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 39px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 39px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ajZR9 .framer-1wjtzt0 { background-color: rgba(255, 255, 255, 0); flex: none; gap: 0px; height: 25px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 25px; }`,
        `.framer-ajZR9 .framer-8rjv7z { bottom: 1px; flex: none; left: 2px; position: absolute; right: 3px; top: 1px; }`,
        `.framer-ajZR9 .framer-128oan5, .framer-ajZR9 .framer-pd2tcc { --border-bottom-width: 1px; --border-color: #dee3d7; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 10px 16px 10px 16px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ajZR9 .framer-vb2uje, .framer-ajZR9 .framer-ej8bmw, .framer-ajZR9 .framer-1qbxjqs, .framer-ajZR9 .framer-11rvoz8 { align-content: center; align-items: center; background-color: #cbf368; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 34px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 34px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ajZR9 .framer-1q5cf29, .framer-ajZR9 .framer-n9cgl1, .framer-ajZR9 .framer-1cdar6k, .framer-ajZR9 .framer-2c5p6k { background-color: rgba(255, 255, 255, 0); flex: none; gap: 0px; height: 22px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 22px; }`,
        `.framer-ajZR9 .framer-1o7itf0, .framer-ajZR9 .framer-kz7uoq { bottom: 2px; flex: none; left: 3px; position: absolute; right: 4px; top: 1px; }`,
        `.framer-ajZR9 .framer-gxw33b, .framer-ajZR9 .framer-1d82lut, .framer-ajZR9 .framer-42oibz, .framer-ajZR9 .framer-tbkowy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 23px; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-1qn4cnt, .framer-ajZR9 .framer-1hybk0d { bottom: 3px; flex: none; left: 1px; position: absolute; right: 2px; top: 4px; }`,
        `.framer-ajZR9 .framer-jppryn, .framer-ajZR9 .framer-1wbabhx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-89nn3f, .framer-ajZR9 .framer-1w0xxvw, .framer-ajZR9 .framer-1g61p2o, .framer-ajZR9 .framer-1nno7xu { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-ajZR9 .framer-1y4hy1a { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-ftobto { flex: none; height: 38px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-1aguylh { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: 1px; justify-content: flex-start; min-height: 140px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-1j1kz5z, .framer-ajZR9 .framer-u550rr { --border-bottom-width: 1px; --border-color: #dee3d7; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: 100%; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 10px 16px 10px 16px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ajZR9 .framer-17nx2vi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 8px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-1u1oxfu, .framer-ajZR9 .framer-18o0yss { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: 652px; justify-content: flex-start; max-width: 1280px; min-height: 586px; overflow: var(--overflow-clip-fallback, clip); padding: 40px 0px 0px 0px; position: sticky; top: 80px; width: 100%; z-index: 4; }`,
        `.framer-ajZR9 .framer-q1vm4g-container, .framer-ajZR9 .framer-164hmu8-container { flex: none; height: 461px; position: relative; width: 660px; }`,
        `.framer-ajZR9 .framer-1g0dvgk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 400px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ajZR9 .framer-8ctdnk { align-content: center; align-items: center; background-color: #f9f9f9; bottom: 498px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; left: 50%; overflow: var(--overflow-clip-fallback, clip); padding: 32px 48px 40px 48px; position: absolute; transform: translateX(-50%); width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-ajZR9 .framer-ffhbeg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-ajZR9 .framer-1adwzdf { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 1200px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ajZR9 .framer-1eyxxq9 { --border-bottom-width: 2px; --border-color: var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, #b2ed1d); --border-left-width: 2px; --border-right-width: 2px; --border-style: dashed; --border-top-width: 2px; align-content: flex-start; align-items: flex-start; background-color: rgba(13, 13, 13, 0.8); border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1184px; overflow: visible; padding: 0px 1px 0px 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-ajZR9 .framer-1x66hgj-container, .framer-ajZR9 .framer-y43f76-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-ajZR9 .framer-1aa9a6v { aspect-ratio: 1.4582386363636364 / 1; bottom: -10px; flex: none; height: auto; left: -7px; overflow: visible; position: absolute; width: 101%; z-index: 0; }`,
        `.framer-ajZR9 .framer-12al8c3 { align-content: center; align-items: center; background-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 498px; justify-content: flex-start; left: calc(50.00000000000002% - 100% / 2); padding: 0px; position: absolute; width: 100%; z-index: 1; }`,
        `.framer-ajZR9 .framer-lxiwvt-container { flex: none; height: auto; left: 50%; max-width: 1280px; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 89%; z-index: 1; }`,
        ...In,
        ...Ie,
        ...ge,
        ...Oe,
        ...Me,
        ...pe,
        `.framer-ajZR9[data-border="true"]::after, .framer-ajZR9 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-ajZR9.framer-1ndfjm9 { padding: 0px 80px 1694px 80px; width: 810px; } .framer-ajZR9 .framer-1obbasi { gap: 48px; } .framer-ajZR9 .framer-12lbpp9 { height: 894px; } .framer-ajZR9 .framer-1rp61c9 { bottom: auto; height: unset; left: unset; right: -423px; top: -5px; width: 177%; } .framer-ajZR9 .framer-1im04vq-container { bottom: 214px; left: 24px; right: 25px; top: 30px; } .framer-ajZR9 .framer-pv54nk-container { left: 0px; right: 0px; transform: unset; width: unset; } .framer-ajZR9 .framer-1afzz6d, .framer-ajZR9 .framer-lzr2oi { height: min-content; } .framer-ajZR9 .framer-m4fv6a, .framer-ajZR9 .framer-1eyxxq9 { flex-direction: column; } .framer-ajZR9 .framer-1qdtyaq, .framer-ajZR9 .framer-cnrvpq, .framer-ajZR9 .framer-1ur84gh, .framer-ajZR9 .framer-12nnksy { width: 100%; } .framer-ajZR9 .framer-16uh57p, .framer-ajZR9 .framer-1sezskn, .framer-ajZR9 .framer-13rxj72, .framer-ajZR9 .framer-1x66hgj-container, .framer-ajZR9 .framer-y43f76-container { flex: none; width: 100%; } .framer-ajZR9 .framer-1saa2tf, .framer-ajZR9 .framer-1u1oxfu, .framer-ajZR9 .framer-18o0yss { flex-direction: column; height: min-content; } .framer-ajZR9 .framer-xco6hu { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 24px 0px 24px 0px; } .framer-ajZR9 .framer-ivtpzg { flex-direction: column; gap: 10px; left: unset; position: relative; top: unset; transform: unset; } .framer-ajZR9 .framer-bm5ff2, .framer-ajZR9 .framer-hvkky7 { flex-direction: row; gap: 0px; width: min-content; } .framer-ajZR9 .framer-1wsvpnr { flex-direction: column; width: 274px; } .framer-ajZR9 .framer-1ldb2iv, .framer-ajZR9 .framer-1miao24, .framer-ajZR9 .framer-1j5n1or, .framer-ajZR9 .framer-1yhu42w { width: 20px; } .framer-ajZR9 .framer-hlz0h3 { flex-direction: column; width: 275px; } .framer-ajZR9 .framer-1cxi5rd, .framer-ajZR9 .framer-23xbp8 { flex-direction: column; width: 268px; } .framer-ajZR9 .framer-4ml4bp, .framer-ajZR9 .framer-f77ejg { grid-column: span 6; } .framer-ajZR9 .framer-52pint { flex: none; order: 1; width: 100%; } .framer-ajZR9 .framer-q1vm4g-container, .framer-ajZR9 .framer-164hmu8-container { width: 605px; } .framer-ajZR9 .framer-27ii1z { order: 0; width: 100%; } .framer-ajZR9 .framer-8ctdnk { bottom: 734px; } .framer-ajZR9 .framer-1adwzdf { width: 687px; } .framer-ajZR9 .framer-1aa9a6v { aspect-ratio: 0.9413118527042578 / 1; left: -42px; width: 110%; } .framer-ajZR9 .framer-12al8c3 { height: min-content; left: 50%; min-height: 705px; transform: translateX(-50%); } .framer-ajZR9 .framer-lxiwvt-container { bottom: 0px; top: unset; transform: translateX(-50%); width: auto; z-index: 2; }}`,
        `@media (max-width: 809.98px) { .framer-ajZR9.framer-1ndfjm9 { gap: 48px; padding: 88px 20px 2230px 20px; width: 390px; } .framer-ajZR9 .framer-lyhkcx { gap: 32px; padding: 0px; } .framer-ajZR9 .framer-1obbasi { gap: 32px; height: min-content; padding: 20px 0px 0px 0px; } .framer-ajZR9 .framer-12lbpp9 { height: 898px; } .framer-ajZR9 .framer-1rp61c9 { left: unset; right: -468px; top: 47%; transform: translateY(-50%); width: 242%; } .framer-ajZR9 .framer-1im04vq-container { bottom: 276px; left: 20px; right: 19px; top: 24px; } .framer-ajZR9 .framer-pv54nk-container { left: 0px; right: 0px; transform: unset; width: unset; } .framer-ajZR9 .framer-1afzz6d { gap: 48px; height: min-content; } .framer-ajZR9 .framer-m4fv6a { flex-direction: column; min-height: 0px; position: relative; top: unset; } .framer-ajZR9 .framer-1qdtyaq, .framer-ajZR9 .framer-cnrvpq, .framer-ajZR9 .framer-34y5ss, .framer-ajZR9 .framer-12cjy81, .framer-ajZR9 .framer-wet2e2, .framer-ajZR9 .framer-ji1jph, .framer-ajZR9 .framer-x6l2vt, .framer-ajZR9 .framer-1wd5t6r, .framer-ajZR9 .framer-1pgt1bz, .framer-ajZR9 .framer-a77xsp, .framer-ajZR9 .framer-1c841kl, .framer-ajZR9 .framer-cwm3m4, .framer-ajZR9 .framer-zgqpvu, .framer-ajZR9 .framer-16qknc, .framer-ajZR9 .framer-1bxk3l5, .framer-ajZR9 .framer-1f8j12k, .framer-ajZR9 .framer-mv37ba, .framer-ajZR9 .framer-11bp5zz, .framer-ajZR9 .framer-1gmeo0n, .framer-ajZR9 .framer-16nghdz, .framer-ajZR9 .framer-16m4x1g, .framer-ajZR9 .framer-1cvirob, .framer-ajZR9 .framer-s7w1w4, .framer-ajZR9 .framer-e2vztn, .framer-ajZR9 .framer-1exrpe4, .framer-ajZR9 .framer-100vngm, .framer-ajZR9 .framer-fmzhut, .framer-ajZR9 .framer-12nnksy, .framer-ajZR9 .framer-1adwzdf { width: 100%; } .framer-ajZR9 .framer-1i9dvtw, .framer-ajZR9 .framer-1gzhqqh, .framer-ajZR9 .framer-17mglxj, .framer-ajZR9 .framer-1t54bpn, .framer-ajZR9 .framer-13ytz5g, .framer-ajZR9 .framer-s033ta, .framer-ajZR9 .framer-1cnootz, .framer-ajZR9 .framer-1ad5kcy, .framer-ajZR9 .framer-bwczzx, .framer-ajZR9 .framer-vxrl4l, .framer-ajZR9 .framer-1agrp8z, .framer-ajZR9 .framer-1j25hsn, .framer-ajZR9 .framer-1xgzonz, .framer-ajZR9 .framer-zrogp1, .framer-ajZR9 .framer-1lbp2sv, .framer-ajZR9 .framer-9a6aaq { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-ajZR9 .framer-1xa9ffj, .framer-ajZR9 .framer-1kjymim, .framer-ajZR9 .framer-nz6o9q, .framer-ajZR9 .framer-ow9a7k, .framer-ajZR9 .framer-u17awz, .framer-ajZR9 .framer-o6cghb, .framer-ajZR9 .framer-1w219kk, .framer-ajZR9 .framer-d2ilrg { flex-direction: column; gap: 16px; } .framer-ajZR9 .framer-8sxa3i, .framer-ajZR9 .framer-16uh57p, .framer-ajZR9 .framer-1rakccc, .framer-ajZR9 .framer-1sezskn, .framer-ajZR9 .framer-wdcwil, .framer-ajZR9 .framer-a91ywi, .framer-ajZR9 .framer-13ebjy5, .framer-ajZR9 .framer-g51e1s, .framer-ajZR9 .framer-8vkwkb, .framer-ajZR9 .framer-1ol2jno, .framer-ajZR9 .framer-u2cai8, .framer-ajZR9 .framer-14h2o40, .framer-ajZR9 .framer-12jjx9t, .framer-ajZR9 .framer-t6xirv, .framer-ajZR9 .framer-1darza3, .framer-ajZR9 .framer-128oan5, .framer-ajZR9 .framer-pd2tcc, .framer-ajZR9 .framer-lv92ut, .framer-ajZR9 .framer-1fay9yt, .framer-ajZR9 .framer-13rxj72, .framer-ajZR9 .framer-1x66hgj-container, .framer-ajZR9 .framer-y43f76-container { flex: none; width: 100%; } .framer-ajZR9 .framer-1saa2tf, .framer-ajZR9 .framer-1u1oxfu, .framer-ajZR9 .framer-18o0yss { flex-direction: column; height: min-content; min-height: 0px; position: relative; top: unset; } .framer-ajZR9 .framer-lzr2oi { height: min-content; min-height: 0px; position: relative; top: unset; } .framer-ajZR9 .framer-1bu6jn8 { flex-direction: column; gap: 16px; overflow: visible; padding: 4px; } .framer-ajZR9 .framer-xco6hu { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; padding: 24px; } .framer-ajZR9 .framer-ivtpzg { flex-direction: column; gap: 10px; left: unset; position: relative; top: unset; transform: unset; width: 100%; } .framer-ajZR9 .framer-bm5ff2, .framer-ajZR9 .framer-hvkky7 { gap: 16px; width: 100%; } .framer-ajZR9 .framer-1wsvpnr, .framer-ajZR9 .framer-hlz0h3, .framer-ajZR9 .framer-1cxi5rd, .framer-ajZR9 .framer-23xbp8 { flex-direction: column; } .framer-ajZR9 .framer-14guhmr, .framer-ajZR9 .framer-1ecgji6, .framer-ajZR9 .framer-g0fjln, .framer-ajZR9 .framer-j2ezb9 { flex: 1 0 0px; width: 1px; } .framer-ajZR9 .framer-1ldb2iv, .framer-ajZR9 .framer-1miao24, .framer-ajZR9 .framer-1j5n1or, .framer-ajZR9 .framer-1yhu42w { width: 20px; } .framer-ajZR9 .framer-60z1l5 { gap: 16px; height: min-content; padding: 16px; width: 100%; } .framer-ajZR9 .framer-1ce1gm1 { padding: 4px; width: 100%; } .framer-ajZR9 .framer-18ugz76 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 12px; height: min-content; justify-content: flex-start; width: 100%; } .framer-ajZR9 .framer-1fw11q9, .framer-ajZR9 .framer-f46iyi { min-height: 0px; position: relative; top: unset; } .framer-ajZR9 .framer-bxqo6, .framer-ajZR9 .framer-p2ubm8 { flex-direction: column; gap: 16px; padding: 4px; } .framer-ajZR9 .framer-1e1l7zb { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; } .framer-ajZR9 .framer-4ml4bp { align-self: unset; height: min-content; } .framer-ajZR9 .framer-8sscd9, .framer-ajZR9 .framer-1sfzaxk, .framer-ajZR9 .framer-66rdqg, .framer-ajZR9 .framer-kn4iy8, .framer-ajZR9 .framer-oozouf, .framer-ajZR9 .framer-14jvjiu, .framer-ajZR9 .framer-11c89ck, .framer-ajZR9 .framer-1knf2lm { gap: 12px; justify-content: flex-start; } .framer-ajZR9 .framer-f77ejg { align-self: unset; } .framer-ajZR9 .framer-16su00v { padding: 0px; } .framer-ajZR9 .framer-1ur84gh { gap: 16px; height: min-content; min-height: 0px; width: 100%; } .framer-ajZR9 .framer-1ozht0q { flex: none; flex-direction: column; gap: 16px; height: min-content; } .framer-ajZR9 .framer-2lja1c, .framer-ajZR9 .framer-17crec7 { flex: none; height: min-content; width: 100%; } .framer-ajZR9 .framer-1szeacx, .framer-ajZR9 .framer-1lkrn4w { height: min-content; } .framer-ajZR9 .framer-18925ph, .framer-ajZR9 .framer-1roka80 { flex-direction: row; height: min-content; padding: 0px 60px 8px 0px; width: min-content; } .framer-ajZR9 .framer-1wsc9vo { flex: none; height: min-content; padding: 16px; width: 100%; } .framer-ajZR9 .framer-52pint { flex: none; order: 1; width: 100%; } .framer-ajZR9 .framer-q1vm4g-container, .framer-ajZR9 .framer-164hmu8-container { height: auto; width: 100%; } .framer-ajZR9 .framer-27ii1z { order: 0; width: 100%; } .framer-ajZR9 .framer-8ctdnk { background-color: #050b14; bottom: 1278px; height: 948px; left: calc(50.00000000000002% - 100% / 2); padding: 24px 16px 24px 16px; transform: unset; will-change: unset; } .framer-ajZR9 .framer-1eyxxq9 { flex-direction: column; gap: 12px; } .framer-ajZR9 .framer-1aa9a6v { left: 0px; width: 358%; } .framer-ajZR9 .framer-12al8c3 { height: min-content; left: 50%; transform: translateX(-50%); } .framer-ajZR9 .framer-lxiwvt-container { left: unset; position: relative; top: unset; transform: unset; width: auto; z-index: 2; }}`,
      ]),
      (ai = I(ri, ii, `framer-ajZR9`)),
      (ai.displayName = `Product / App Builder`),
      (ai.defaultProps = { height: 7609, width: 1440 }),
      ae(
        ai,
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
                weight: `500`,
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
          ...Un,
          ...Wn,
          ...Gn,
          ...Kn,
          ...qn,
          ...Xn,
          ...ir,
          ...yr,
          ...Or,
          ...jr,
          ...Mr,
          ...Pr,
          ...Fr,
          ...O(Fn),
          ...O(Le),
          ...O(ve),
          ...O(ke),
          ...O(Ne),
          ...O(he),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (ai.loader = {
        load: (e, t) =>
          se(
            [
              () => k(Te, {}, t),
              () => k(fe, {}, t),
              () => k(rt, {}, t),
              () => k(xt, {}, t),
              () => k(we, {}, t),
            ],
            t
          ),
      }),
      (oi = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerTEUe5r_sl`,
            slots: [],
            annotations: {
              framerIntrinsicWidth: `1440`,
              framerColorSyntax: `true`,
              framerResponsiveScreen: `true`,
              framerComponentViewportWidth: `true`,
              framerAutoSizeImages: `true`,
              framerImmutableVariables: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"oN9uXFHdk":{"layout":["fixed","auto"]},"dm0OoW02Q":{"layout":["fixed","auto"]}}}`,
              framerContractVersion: `1`,
              framerDisplayContentsDiv: `false`,
              framerLayoutTemplateFlowEffect: `true`,
              framerIntrinsicHeight: `7609`,
              framerScrollSections: `{"JMWIA2K52":{"pattern":":JMWIA2K52","name":"digital-twin-anchor"},"wo16Olr54":{"pattern":":wo16Olr54","name":"app-builder-library"},"llAHRvM8z":{"pattern":":llAHRvM8z","name":"app-builder-library"},"RsXlxeQOg":{"pattern":":RsXlxeQOg","name":"app-builder-library"},"m714h3BsR":{"pattern":":m714h3BsR","name":"app-builder-library"},"eQnAvn6aC":{"pattern":":eQnAvn6aC","name":"app-builder-library"}}`,
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
si();
export { oi as __FramerMetadata__, ai as default, Rr as queryParamNames };
//# sourceMappingURL=UIIOtbKw0ARUCMbFJsidtnAC4b8Uie29Nyu2cIX6Ruc.CiPSlD_P.mjs.map
