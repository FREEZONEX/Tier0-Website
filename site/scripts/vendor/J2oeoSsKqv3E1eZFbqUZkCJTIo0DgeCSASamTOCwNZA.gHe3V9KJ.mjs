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
  Mt as x,
  Nt as ne,
  O as S,
  P as C,
  Pt as w,
  Q as T,
  Rt as E,
  St as D,
  U as O,
  a as k,
  bt as A,
  c as re,
  g as j,
  gt as ie,
  ht as ae,
  j as M,
  jt as oe,
  k as N,
  lt as P,
  m as se,
  o as F,
  s as I,
  v as L,
  w as R,
  wt as z,
  yt as ce,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { n as le, t as ue } from "./ShimmerGrid_Prod.D8QXYPOQ.mjs?v=20261116-migration-v2";
import { m as de, n as fe, p as B, t as pe } from "./shared-lib.CHy_rbfQ.mjs?v=20261116-migration-v2";
import { i as me, n as he, r as ge, t as _e } from "./HNigw6pHS.BbLcGwmq.mjs?v=20261116-migration-v2";
import { i as ve, n as ye, r as be, t as xe } from "./IEBy192yC.BYZJH9-p.mjs?v=20261116-migration-v2";
import { n as Se, t as Ce } from "./O2sCN9yxq.5YGffmfa.mjs?v=20261116-migration-v2";
import {
  a as we,
  c as Te,
  i as Ee,
  l as V,
  n as De,
  o as Oe,
  r as ke,
  s as Ae,
  t as je,
  u as Me,
} from "./VF7HZTiAg.DUw169M-.mjs?v=20261116-migration-v2";
import { n as Ne, r as Pe } from "./BGusUp37q.Cc4Jwqwt.mjs?v=20261116-migration-v2";
import { n as Fe, r as Ie } from "./e0LeoctYs.Dm8ySGl2.mjs?v=20261116-migration-v2";
var Le, Re, ze, Be, Ve, He, H;
function Ue() {
  return (Ue = e(() => {
    (s(),
      T(),
      r(),
      (Le = `var(--framer-icon-mask)`),
      (Re = /*#__PURE__*/ c(function (e, t) {
        return /*#__PURE__*/ l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (ze = f.create(Re)),
      (Be = /*#__PURE__*/ c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? /*#__PURE__*/ l(ze, { ...a, layoutId: r, ref: t, children: i })
          : /*#__PURE__*/ l(`svg`, { ...a, ref: t, children: i });
      })),
      (Ve = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 10.5 0 L 5.25 5.5 L 0 0" fill="transparent" height="5.5px" id="G3SD80Ntz" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(6.75 13.75)" width="10.5px"/><path d="M 0 13.5 L 0 0" fill="transparent" height="13.5px" id="FlQ57RBH7" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(12 4.75)" width="1px"/></svg>`),
      (He = ({ dots: e, height: t, id: n, stroke: r, width: i, width1: a, ...o }) => ({
        ...o,
        BKVe8Pgvw: e ?? o.BKVe8Pgvw ?? 1,
        fICyAUQY1: r ?? o.fICyAUQY1 ?? `rgb(0, 0, 0)`,
        lKf_CQTz5: a ?? o.lKf_CQTz5 ?? 1.5,
      })),
      (H = w(
        /* @__PURE__ */ c(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              fICyAUQY1: o,
              lKf_CQTz5: s,
              BKVe8Pgvw: c,
              ...u
            } = He(e),
            d = x(`1052301323`, Ve);
          return /*#__PURE__*/ l(Be, {
            ...u,
            className: C(`framer-Og6HN`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1335ju": s, "--18mrqx2": o, ...n },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ l(`use`, { href: d }),
          });
        }),
        [
          `.framer-Og6HN { -webkit-mask: ${Le}; aspect-ratio: 1; display: block; mask: ${Le}; width: 24px; }`,
        ],
        `framer-Og6HN`
      )),
      (H.displayName = `Arrow Down`),
      b(H, {
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
function U(e, t) {
  for (; t; ) {
    let n = Ke[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function We(e) {
  let t = [];
  for (; e; ) {
    let n = Ke[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function Ge(e) {
  let t = We(e);
  if (t) throw t;
}
var Ke;
function qe() {
  return (qe = e(() => {
    (T(), (Ke = { AYmst8Nt3: new L(() => import("./s9e72ekAE-0.DkayZ4SP.mjs?v=20261116-migration-v2")) }));
  }))();
}
function Je(e, t) {
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
    (T(), (Ze = { AYmst8Nt3: new L(() => import("./bvynKKhIW-0.haFcoucE.mjs?v=20261116-migration-v2")) }));
  }))();
}
function $e(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var et, tt, nt, rt, it, at, ot, st, ct, W;
function lt() {
  return (lt = e(() => {
    (s(),
      T(),
      p(),
      r(),
      Qe(),
      (et = [`rbayrTmvU`, `kLqmii5IZ`]),
      (tt = `framer-YCaqw`),
      (nt = { kLqmii5IZ: `framer-v-1v3agnt`, rbayrTmvU: `framer-v-4pkolq` }),
      (rt = { bounce: 0, delay: 0, duration: 0.3, type: `spring` }),
      (it = ({ value: e, children: t }) => {
        let r = i(d),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ l(d.Provider, { value: o, children: t });
      }),
      (at = { 展开: `kLqmii5IZ`, 收起: `rbayrTmvU` }),
      (ot = f.create(a)),
      (st = ({ answer: e, height: t, id: n, question: r, width: i, ...a }) => ({
        ...a,
        IvmweZl2r: e ?? a.IvmweZl2r ?? `支持常见工业协议与系统接口。`,
        MCvp_8SEF: r ?? a.MCvp_8SEF ?? `Tier0 支持哪些工业协议？`,
        variant: at[a.variant] ?? a.variant ?? `rbayrTmvU`,
      })),
      (ct = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = w(
        /* @__PURE__ */ c(function (e, n) {
          let r = o(null),
            i = n ?? r,
            s = t(),
            { activeLocale: c, contentLocale: d, setLocale: p } = z();
          ie();
          let {
              style: h,
              className: te,
              layoutId: g,
              variant: _,
              MCvp_8SEF: v,
              IvmweZl2r: y,
              ...b
            } = st(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: w,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = ne({
              cycleOrder: et,
              defaultVariant: `rbayrTmvU`,
              ref: i,
              variant: _,
              variantClassNames: nt,
            }),
            j = ct(e, A),
            M = C(tt),
            { activeVariantCallback: oe, delay: N } = ae(x),
            P = oe(async (...e) => {
              k(re);
            });
          Xe(c);
          let se = () => x === `kLqmii5IZ`;
          return /*#__PURE__*/ l(ee, {
            id: g ?? s,
            children: /*#__PURE__*/ l(ot, {
              animate: A,
              initial: !1,
              children: /*#__PURE__*/ l(it, {
                value: rt,
                children: /*#__PURE__*/ u(f.div, {
                  ...b,
                  ...T,
                  className: C(M, `framer-4pkolq`, te, S),
                  "data-border": !0,
                  "data-framer-name": `收起`,
                  layoutDependency: j,
                  layoutId: `rbayrTmvU`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgb(210, 213, 216)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    backgroundColor: `rgb(255, 255, 255)`,
                    ...h,
                  },
                  ...$e({ kLqmii5IZ: { "data-framer-name": `展开` } }, x, E),
                  children: [
                    /*#__PURE__*/ u(f.button, {
                      "aria-expanded": !1,
                      "aria-label": v,
                      className: `framer-xlh5mq`,
                      "data-framer-name": `问题按钮`,
                      "data-highlight": !0,
                      "data-reset": `button`,
                      layoutDependency: j,
                      layoutId: `V5EhV9pbo`,
                      onTap: P,
                      ...$e({ kLqmii5IZ: { "aria-expanded": !0 } }, x, E),
                      children: [
                        /*#__PURE__*/ l(m, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ l(a, {
                            children: /*#__PURE__*/ l(f.h3, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                "--framer-font-family": `"Noto Sans SC"`,
                                "--framer-font-size": `18px`,
                                "--framer-font-style": `normal`,
                                "--framer-font-variation-axes": `var(--extracted-zfisys, normal)`,
                                "--framer-font-weight": `400`,
                                "--framer-line-height": `1.5em`,
                                "--framer-text-color": `var(--extracted-a0htzi, rgb(5, 11, 20))`,
                              },
                              children: /*#__PURE__*/ l(f.span, {
                                style: {
                                  "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                  "--framer-font-family": `"Noto Sans SC"`,
                                  "--framer-font-size": `18px`,
                                  "--framer-font-style": `normal`,
                                  "--framer-font-variation-axes": `var(--extracted-q5xy1t, normal)`,
                                  "--framer-font-weight": `400`,
                                  "--framer-text-color": `var(--extracted-1k2zljd, rgb(5, 11, 20))`,
                                },
                                children: `Tier0 支持哪些工业协议？`,
                              }),
                            }),
                          }),
                          className: `framer-bzjtxq`,
                          "data-framer-name": `问题`,
                          fonts: [`GF;Noto Sans SC-regular`],
                          layoutDependency: j,
                          layoutId: `dxwZUSeF6`,
                          style: {
                            "--extracted-1k2zljd": `rgb(5, 11, 20)`,
                            "--extracted-a0htzi": `rgb(5, 11, 20)`,
                            "--extracted-q5xy1t": `normal`,
                            "--extracted-zfisys": `normal`,
                          },
                          text: v,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        /*#__PURE__*/ l(m, {
                          __fromCanvasComponent: !0,
                          children:
                            Je(`v0`, d) ??
                            /*#__PURE__*/ l(a, {
                              children: /*#__PURE__*/ l(f.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                  "--framer-font-family": `"Noto Sans SC"`,
                                  "--framer-font-size": `22px`,
                                  "--framer-font-style": `normal`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                  "--framer-font-weight": `400`,
                                  "--framer-line-height": `1em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(5, 11, 20))`,
                                },
                                children: /*#__PURE__*/ l(f.span, {
                                  style: {
                                    "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Noto Sans SC"`,
                                    "--framer-font-size": `22px`,
                                    "--framer-font-style": `normal`,
                                    "--framer-font-variation-axes": `var(--extracted-1asg273, normal)`,
                                    "--framer-font-weight": `400`,
                                    "--framer-text-color": `var(--extracted-1w3ko1f, rgb(5, 11, 20))`,
                                  },
                                  children: `＋`,
                                }),
                              }),
                            }),
                          className: `framer-fx334w`,
                          "data-framer-name": `展开图标`,
                          fonts: [`GF;Noto Sans SC-regular`],
                          layoutDependency: j,
                          layoutId: `LAWPyZCPS`,
                          style: {
                            "--extracted-1asg273": `normal`,
                            "--extracted-1w3ko1f": `rgb(5, 11, 20)`,
                            "--extracted-2gg91v": `normal`,
                            "--extracted-r6o4lv": `rgb(5, 11, 20)`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...$e(
                            {
                              kLqmii5IZ: {
                                children:
                                  Je(`v1`, d) ??
                                  /*#__PURE__*/ l(a, {
                                    children: /*#__PURE__*/ l(f.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Noto Sans SC"`,
                                        "--framer-font-size": `22px`,
                                        "--framer-font-style": `normal`,
                                        "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                        "--framer-font-weight": `400`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(5, 11, 20))`,
                                      },
                                      children: /*#__PURE__*/ l(f.span, {
                                        style: {
                                          "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                          "--framer-font-family": `"Noto Sans SC"`,
                                          "--framer-font-size": `22px`,
                                          "--framer-font-style": `normal`,
                                          "--framer-font-variation-axes": `var(--extracted-1asg273, normal)`,
                                          "--framer-font-weight": `400`,
                                          "--framer-text-color": `var(--extracted-1w3ko1f, rgb(5, 11, 20))`,
                                        },
                                        children: `−`,
                                      }),
                                    }),
                                  }),
                              },
                            },
                            x,
                            E
                          ),
                        }),
                      ],
                    }),
                    se() &&
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-cl0hd3`,
                        "data-framer-name": `答案区域`,
                        layoutDependency: j,
                        layoutId: `D2B80Cg52`,
                        children: /*#__PURE__*/ l(m, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ l(a, {
                            children: /*#__PURE__*/ l(f.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                "--framer-font-family": `"Noto Sans SC"`,
                                "--framer-font-size": `16px`,
                                "--framer-font-style": `normal`,
                                "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                "--framer-font-weight": `400`,
                                "--framer-line-height": `1.7em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(92, 101, 112))`,
                              },
                              children: /*#__PURE__*/ l(f.span, {
                                style: {
                                  "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                  "--framer-font-family": `"Noto Sans SC"`,
                                  "--framer-font-size": `16px`,
                                  "--framer-font-style": `normal`,
                                  "--framer-font-variation-axes": `var(--extracted-1asg273, normal)`,
                                  "--framer-font-weight": `400`,
                                  "--framer-text-color": `var(--extracted-1w3ko1f, rgb(92, 101, 112))`,
                                },
                                children: `支持常见工业协议与系统接口。`,
                              }),
                            }),
                          }),
                          className: `framer-wf5e88`,
                          "data-framer-name": `答案`,
                          fonts: [`GF;Noto Sans SC-regular`],
                          layoutDependency: j,
                          layoutId: `PEmS4YUqA`,
                          style: {
                            "--extracted-1asg273": `normal`,
                            "--extracted-1w3ko1f": `rgb(92, 101, 112)`,
                            "--extracted-2gg91v": `normal`,
                            "--extracted-r6o4lv": `rgb(92, 101, 112)`,
                          },
                          text: y,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-YCaqw.framer-ewf5m9, .framer-YCaqw .framer-ewf5m9 { display: block; }`,
          `.framer-YCaqw.framer-4pkolq { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 8px 0px 8px; position: relative; width: 1280px; }`,
          `.framer-YCaqw .framer-xlh5mq { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; min-height: 56px; overflow: visible; padding: 12px 0px 12px 0px; position: relative; width: 100%; }`,
          `.framer-YCaqw .framer-bzjtxq { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-YCaqw .framer-fx334w { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 24px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-YCaqw .framer-cl0hd3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 32px 18px 0px; position: relative; width: 100%; }`,
          `.framer-YCaqw .framer-wf5e88 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-YCaqw[data-border="true"]::after, .framer-YCaqw [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-YCaqw`
      )),
      (W.displayName = `Data Collection · 中文问答条目`),
      (W.defaultProps = { height: 200, width: 200 }),
      b(W, {
        variant: {
          options: [`rbayrTmvU`, `kLqmii5IZ`],
          optionTitles: [`收起`, `展开`],
          title: `Variant`,
          type: I.Enum,
        },
        MCvp_8SEF: { defaultValue: `Tier0 支持哪些工业协议？`, title: `Question`, type: I.String },
        onMCvp_8SEFChange: { changes: `MCvp_8SEF`, type: I.ChangeHandler },
        IvmweZl2r: {
          defaultValue: `支持常见工业协议与系统接口。`,
          title: `Answer`,
          type: I.String,
        },
        onIvmweZl2rChange: { changes: `IvmweZl2r`, type: I.ChangeHandler },
      }),
      M(
        W,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Noto Sans SC`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Noto Sans SC`,
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
var ut, dt, ft, pt, G, mt, ht, gt, _t, K;
function vt() {
  return (vt = e(() => {
    (s(),
      T(),
      p(),
      r(),
      qe(),
      lt(),
      (ut = O(W)),
      (dt = `framer-KzjyC`),
      (ft = { kLWESsPru: `framer-v-1ptefvx` }),
      (pt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (G = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (mt = ({ value: e, children: t }) => {
        let r = i(d),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ l(d.Provider, { value: o, children: t });
      }),
      (ht = f.create(a)),
      (gt = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (_t = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = w(
        /* @__PURE__ */ c(function (e, n) {
          let r = o(null),
            i = n ?? r,
            a = t(),
            { activeLocale: s, contentLocale: c, setLocale: d } = z(),
            p = ie(),
            { style: m, className: h, layoutId: te, variant: g, ..._ } = gt(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = ne({ defaultVariant: `kLWESsPru`, ref: i, variant: g, variantClassNames: ft }),
            O = _t(e, D),
            A = C(dt);
          return (
            Ge(s),
            /*#__PURE__*/ l(ee, {
              id: te ?? a,
              children: /*#__PURE__*/ l(ht, {
                animate: D,
                initial: !1,
                children: /*#__PURE__*/ l(mt, {
                  value: pt,
                  children: /*#__PURE__*/ u(f.div, {
                    ..._,
                    ...x,
                    className: C(A, `framer-1ptefvx`, h, y),
                    "data-framer-name": `中文问答列表`,
                    layoutDependency: O,
                    layoutId: `kLWESsPru`,
                    ref: i,
                    style: { backgroundColor: `rgb(255, 255, 255)`, ...m },
                    children: [
                      /*#__PURE__*/ l(k, {
                        height: 200,
                        width: p?.width || `100vw`,
                        y: p?.y || 0,
                        children: /*#__PURE__*/ l(N, {
                          className: `framer-1wn9vs-container`,
                          "data-framer-name": `问答 1`,
                          layoutDependency: O,
                          layoutId: `KFWRn7vf4-container`,
                          name: `问答 1`,
                          nodeId: `KFWRn7vf4`,
                          rendersWithMotion: !0,
                          scopeId: `s9e72ekAE`,
                          children: /*#__PURE__*/ l(W, {
                            height: `100%`,
                            id: `KFWRn7vf4`,
                            IvmweZl2r:
                              U(`v1`, c) ??
                              `Tier0 支持常见的工业连接场景，包括 OPC UA、MQTT、Modbus、Siemens S7、Rockwell / Allen-Bradley EtherNet/IP、Omron FINS、Beckhoff ADS、BACnet、API、数据库和文件等。连接能力也可根据项目需求扩展。`,
                            layoutId: `KFWRn7vf4`,
                            MCvp_8SEF: U(`v0`, c) ?? `Tier0 支持哪些工业协议？`,
                            name: `问答 1`,
                            style: { width: `100%` },
                            variant: G(`rbayrTmvU`),
                            width: `100%`,
                          }),
                        }),
                      }),
                      /*#__PURE__*/ l(k, {
                        height: 200,
                        width: p?.width || `100vw`,
                        y: (p?.y || 0) + 200,
                        children: /*#__PURE__*/ l(N, {
                          className: `framer-7zjhoc-container`,
                          "data-framer-name": `问答 2`,
                          layoutDependency: O,
                          layoutId: `bll08JvRv-container`,
                          name: `问答 2`,
                          nodeId: `bll08JvRv`,
                          rendersWithMotion: !0,
                          scopeId: `s9e72ekAE`,
                          children: /*#__PURE__*/ l(W, {
                            height: `100%`,
                            id: `bll08JvRv`,
                            IvmweZl2r:
                              U(`v3`, c) ??
                              `典型采集对象包括 PLC、机器、传感器、网关、OPC 服务器、MES、WMS、ERP、历史数据库、数据库、REST API、文件以及第三方应用。`,
                            layoutId: `bll08JvRv`,
                            MCvp_8SEF: U(`v2`, c) ?? `Tier0 可以从哪些设备和系统采集数据？`,
                            name: `问答 2`,
                            style: { width: `100%` },
                            variant: G(`rbayrTmvU`),
                            width: `100%`,
                          }),
                        }),
                      }),
                      /*#__PURE__*/ l(k, {
                        height: 200,
                        width: p?.width || `100vw`,
                        y: (p?.y || 0) + 400,
                        children: /*#__PURE__*/ l(N, {
                          className: `framer-18re794-container`,
                          "data-framer-name": `问答 3`,
                          layoutDependency: O,
                          layoutId: `lj7dgSbqg-container`,
                          name: `问答 3`,
                          nodeId: `lj7dgSbqg`,
                          rendersWithMotion: !0,
                          scopeId: `s9e72ekAE`,
                          children: /*#__PURE__*/ l(W, {
                            height: `100%`,
                            id: `lj7dgSbqg`,
                            IvmweZl2r:
                              U(`v5`, c) ??
                              `可以。数据发布到 Tier0 之前，可先进行过滤、映射、标准化、补充上下文，并按规则转发。`,
                            layoutId: `lj7dgSbqg`,
                            MCvp_8SEF: U(`v4`, c) ?? `数据发布前可以转换吗？`,
                            name: `问答 3`,
                            style: { width: `100%` },
                            variant: G(`rbayrTmvU`),
                            width: `100%`,
                          }),
                        }),
                      }),
                      /*#__PURE__*/ l(k, {
                        height: 200,
                        width: p?.width || `100vw`,
                        y: (p?.y || 0) + 600,
                        children: /*#__PURE__*/ l(N, {
                          className: `framer-1r6cagp-container`,
                          "data-framer-name": `问答 4`,
                          layoutDependency: O,
                          layoutId: `z6fJJpYOq-container`,
                          name: `问答 4`,
                          nodeId: `z6fJJpYOq`,
                          rendersWithMotion: !0,
                          scopeId: `s9e72ekAE`,
                          children: /*#__PURE__*/ l(W, {
                            height: `100%`,
                            id: `z6fJJpYOq`,
                            IvmweZl2r:
                              U(`v7`, c) ??
                              `可以。Tier0 支持对流式工业数据和运营数据进行实时采集与转发。`,
                            layoutId: `z6fJJpYOq`,
                            MCvp_8SEF: U(`v6`, c) ?? `是否支持实时数据流？`,
                            name: `问答 4`,
                            style: { width: `100%` },
                            variant: G(`rbayrTmvU`),
                            width: `100%`,
                          }),
                        }),
                      }),
                      /*#__PURE__*/ l(k, {
                        height: 200,
                        width: p?.width || `100vw`,
                        y: (p?.y || 0) + 800,
                        children: /*#__PURE__*/ l(N, {
                          className: `framer-nqs4ig-container`,
                          "data-framer-name": `问答 5`,
                          layoutDependency: O,
                          layoutId: `iusbBn786-container`,
                          name: `问答 5`,
                          nodeId: `iusbBn786`,
                          rendersWithMotion: !0,
                          scopeId: `s9e72ekAE`,
                          children: /*#__PURE__*/ l(W, {
                            height: `100%`,
                            id: `iusbBn786`,
                            IvmweZl2r:
                              U(`v9`, c) ??
                              `不是。Tier0 同时支持 OT 和 IT 数据，可接入机器信号、交易数据、订单、库存数据，以及通过 API 获取的系统数据`,
                            layoutId: `iusbBn786`,
                            MCvp_8SEF: U(`v8`, c) ?? `是否仅适用于 OT 数据？`,
                            name: `问答 5`,
                            style: { width: `100%` },
                            variant: G(`rbayrTmvU`),
                            width: `100%`,
                          }),
                        }),
                      }),
                      /*#__PURE__*/ l(k, {
                        height: 200,
                        width: p?.width || `100vw`,
                        y: (p?.y || 0) + 1e3,
                        children: /*#__PURE__*/ l(N, {
                          className: `framer-gk6p6o-container`,
                          "data-framer-name": `问答 6`,
                          layoutDependency: O,
                          layoutId: `cn_LJAaKZ-container`,
                          name: `问答 6`,
                          nodeId: `cn_LJAaKZ`,
                          rendersWithMotion: !0,
                          scopeId: `s9e72ekAE`,
                          children: /*#__PURE__*/ l(W, {
                            height: `100%`,
                            id: `cn_LJAaKZ`,
                            IvmweZl2r:
                              U(`v11`, c) ??
                              `数据采集负责连接并接入数据；统一命名空间负责将这些数据组织成共享结构，并对外开放，以便在不同场景中复用。`,
                            layoutId: `cn_LJAaKZ`,
                            MCvp_8SEF: U(`v10`, c) ?? `数据采集和统一命名空间有什么区别？`,
                            name: `问答 6`,
                            style: { width: `100%` },
                            variant: G(`rbayrTmvU`),
                            width: `100%`,
                          }),
                        }),
                      }),
                      /*#__PURE__*/ l(k, {
                        height: 200,
                        width: p?.width || `100vw`,
                        y: (p?.y || 0) + 1200,
                        children: /*#__PURE__*/ l(N, {
                          className: `framer-2xkajm-container`,
                          "data-framer-name": `问答 7`,
                          layoutDependency: O,
                          layoutId: `OHyBO69SK-container`,
                          name: `问答 7`,
                          nodeId: `OHyBO69SK`,
                          rendersWithMotion: !0,
                          scopeId: `s9e72ekAE`,
                          children: /*#__PURE__*/ l(W, {
                            height: `100%`,
                            id: `OHyBO69SK`,
                            IvmweZl2r:
                              U(`v13`, c) ??
                              `数据采集通常通过流程化编辑器进行配置。工程师可以按需组合数据源访问、转换、转发和发布节点，并在配置完成后部署流程以采集数据。`,
                            layoutId: `OHyBO69SK`,
                            MCvp_8SEF: U(`v12`, c) ?? `如何配置数据采集？`,
                            name: `问答 7`,
                            style: { width: `100%` },
                            variant: G(`rbayrTmvU`),
                            width: `100%`,
                          }),
                        }),
                      }),
                      /*#__PURE__*/ l(k, {
                        height: 200,
                        width: p?.width || `100vw`,
                        y: (p?.y || 0) + 1400,
                        children: /*#__PURE__*/ l(N, {
                          className: `framer-1iss8tt-container`,
                          "data-framer-name": `问答 8`,
                          layoutDependency: O,
                          layoutId: `DygfPb6Fa-container`,
                          name: `问答 8`,
                          nodeId: `DygfPb6Fa`,
                          rendersWithMotion: !0,
                          scopeId: `s9e72ekAE`,
                          children: /*#__PURE__*/ l(W, {
                            height: `100%`,
                            id: `DygfPb6Fa`,
                            IvmweZl2r:
                              U(`v15`, c) ??
                              `可以。标准化的数据流模式可在不同应用、产线、仓库和站点中复用。`,
                            layoutId: `DygfPb6Fa`,
                            MCvp_8SEF: U(`v14`, c) ?? `同一个数据流可以在不同项目中复用吗？`,
                            name: `问答 8`,
                            style: { width: `100%` },
                            variant: G(`rbayrTmvU`),
                            width: `100%`,
                          }),
                        }),
                      }),
                      /*#__PURE__*/ l(k, {
                        height: 200,
                        width: p?.width || `100vw`,
                        y: (p?.y || 0) + 1600,
                        children: /*#__PURE__*/ l(N, {
                          className: `framer-196axrd-container`,
                          "data-framer-name": `问答 9`,
                          layoutDependency: O,
                          layoutId: `Y2uw3S29M-container`,
                          name: `问答 9`,
                          nodeId: `Y2uw3S29M`,
                          rendersWithMotion: !0,
                          scopeId: `s9e72ekAE`,
                          children: /*#__PURE__*/ l(W, {
                            height: `100%`,
                            id: `Y2uw3S29M`,
                            IvmweZl2r:
                              U(`v17`, c) ??
                              `不一定。许多集成无需编写代码，可通过流程化配置完成，从而提升实施效率，并便于后续维护。`,
                            layoutId: `Y2uw3S29M`,
                            MCvp_8SEF: U(`v16`, c) ?? `是否需要写代码？`,
                            name: `问答 9`,
                            style: { width: `100%` },
                            variant: G(`rbayrTmvU`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-KzjyC.framer-dl787z, .framer-KzjyC .framer-dl787z { display: block; }`,
          `.framer-KzjyC.framer-1ptefvx { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1280px; }`,
          `.framer-KzjyC .framer-1wn9vs-container, .framer-KzjyC .framer-7zjhoc-container, .framer-KzjyC .framer-18re794-container, .framer-KzjyC .framer-1r6cagp-container, .framer-KzjyC .framer-nqs4ig-container, .framer-KzjyC .framer-gk6p6o-container, .framer-KzjyC .framer-2xkajm-container, .framer-KzjyC .framer-1iss8tt-container, .framer-KzjyC .framer-196axrd-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ],
        `framer-KzjyC`
      )),
      (K.displayName = `Data Collection · 中文常见问题`),
      (K.defaultProps = { height: 200, width: 200 }),
      M(K, [{ explicitInter: !0, fonts: [] }, ...ut], { supportsExplicitInterCodegen: !0 }),
      (K.loader = { load: (e, t) => P([() => _(W, {}, t)], t) }));
  }))();
}
function q(e, t) {
  for (; t; ) {
    let n = xt[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function yt(e) {
  let t = [];
  for (; e; ) {
    let n = xt[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function bt(e) {
  let t = yt(e);
  if (t) throw t;
}
var xt;
function St() {
  return (St = e(() => {
    (T(), (xt = { AYmst8Nt3: new L(() => import("./e0LeoctYs-0.NJjti7xk.mjs?v=20261116-migration-v2")) }));
  }))();
}
var Ct,
  wt,
  J,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Y,
  Lt,
  Rt,
  X,
  Z,
  Q,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  $,
  qt;
function Jt() {
  return (Jt = e(() => {
    (s(),
      T(),
      p(),
      r(),
      Ue(),
      le(),
      Pe(),
      Se(),
      vt(),
      de(),
      Me(),
      fe(),
      me(),
      ve(),
      Te(),
      Ee(),
      St(),
      Fe(),
      (Ct = O(pe)),
      (wt = O(H)),
      (J = v(f.div)),
      (Tt = O(K)),
      (Et = O(V)),
      (Dt = O(ue)),
      (Ot = E(f.div)),
      (kt = O(Ce)),
      (At = O(B)),
      (jt = { ns_0OUzlj: `(max-width: 1439.98px)`, Q_5sEJY0c: `(min-width: 1440px)` }),
      (Mt = () => typeof document < `u`),
      (Nt = []),
      (Pt = `framer-BnEiY`),
      (Ft = { ns_0OUzlj: `framer-v-1emxzb8`, Q_5sEJY0c: `framer-v-1803tfs` }),
      (It = (e, t, n) => (e && t ? `position` : n)),
      (Y = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Lt = {
        effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 10 },
        repeat: !1,
        startDelay: 0,
        tokenization: `word`,
        transition: { bounce: 0, delay: 0.075, duration: 0.4, type: `spring` },
        trigger: `onMount`,
        type: `appear`,
      }),
      (Rt = (e, t) => `translateX(-50%) ${t}`),
      (X = (e, t) => `translate(-50%, -50%) ${t}`),
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
      (zt = (e, t) => `translateY(-50%) ${t}`),
      (Bt = {
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
      (Vt = {
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
      (Ht = { Desktop: `Q_5sEJY0c`, Phone: `ns_0OUzlj` }),
      (Ut = ({ value: e }) =>
        D()
          ? null
          : /*#__PURE__*/ l(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Wt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ht[r.variant] ?? r.variant ?? `Q_5sEJY0c`,
      })),
      (Gt = /*#__PURE__*/ c(function (e, r) {
        let s = o(null),
          c = r ?? s;
        t();
        let { activeLocale: p, contentLocale: g, setLocale: _ } = z(),
          v = ie(),
          { style: b, className: x, layoutId: ne, variant: w, ...T } = Wt(e),
          E = n(() => Ie({}, g), [g]);
        te(E);
        let [D, O] = A(w, jt, !1),
          re = C(Pt, we, _e, je, xe),
          ae = i(se)?.isLayoutTemplate,
          M = !!i(d)?.transition?.layout,
          N = It(ae, M);
        bt(p);
        let P = () => !Mt() || D === `ns_0OUzlj`,
          I = () => !Mt() || D !== `ns_0OUzlj`;
        return (
          oe(),
          ce({}),
          /*#__PURE__*/ l(se.Provider, {
            value: {
              activeVariantId: D,
              humanReadableVariantMap: Ht,
              primaryVariantId: `Q_5sEJY0c`,
              variantClassNames: Ft,
            },
            children: /*#__PURE__*/ u(ee, {
              id: ne ?? `e0LeoctYs`,
              children: [
                /*#__PURE__*/ l(Ut, {
                  value: `html body { background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ u(f.div, {
                  ...T,
                  className: C(re, `framer-1803tfs`, x),
                  ref: c,
                  style: { ...b },
                  children: [
                    /*#__PURE__*/ l(k, {
                      height: 64,
                      width: `100vw`,
                      y: 0,
                      children: /*#__PURE__*/ l(F, {
                        className: `framer-7xf87v-container`,
                        layout: N,
                        layoutScroll: !0,
                        nodeId: `HpwHR3LUD`,
                        scopeId: `e0LeoctYs`,
                        children: /*#__PURE__*/ l(R, {
                          breakpoint: D,
                          overrides: { ns_0OUzlj: { variant: Y(`Svy4sINhA`) } },
                          children: /*#__PURE__*/ l(pe, {
                            eVOFjxm0w: `var(--token-fcaa307f-078f-4ea1-af34-d51bb82ca05a, rgba(255, 255, 255, 0))`,
                            height: `100%`,
                            id: `HpwHR3LUD`,
                            jQcddTFoz: !0,
                            layoutId: `HpwHR3LUD`,
                            style: { width: `100%` },
                            variant: Y(`LbFcBhD3w`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ u(f.div, {
                      className: `framer-h327k3`,
                      "data-framer-name": `Frame 2147223973`,
                      layout: N,
                      children: [
                        /*#__PURE__*/ u(`div`, {
                          className: `framer-1fsx9xu`,
                          "data-framer-name": `Frame 2147223963`,
                          children: [
                            /*#__PURE__*/ u(`div`, {
                              className: `framer-lcfexk`,
                              "data-framer-name": `Frame 2147223884`,
                              children: [
                                /*#__PURE__*/ u(`div`, {
                                  className: `framer-28b31v`,
                                  "data-framer-name": `Frame 2147223883`,
                                  children: [
                                    /*#__PURE__*/ l(`div`, {
                                      className: `framer-11kpw8c`,
                                      "data-border": !0,
                                      "data-framer-name": `Text`,
                                      children: /*#__PURE__*/ l(m, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          q(`v0`, g) ??
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
                                                "--framer-text-color": `rgb(115, 178, 0)`,
                                                "--framer-text-transform": `uppercase`,
                                              },
                                              children: `数据集成`,
                                            }),
                                          }),
                                        className: `framer-16d88wo`,
                                        "data-framer-name": `Unified Namespace`,
                                        fonts: [`GF;IBM Plex Mono-regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    /*#__PURE__*/ l(`div`, {
                                      className: `framer-3vyeq6`,
                                      "data-framer-name": `Heading 1`,
                                      children: /*#__PURE__*/ l(m, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          q(`v1`, g) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ u(`h1`, {
                                              className: `framer-styles-preset-11wgcit`,
                                              "data-styles-preset": `s3077KOp4`,
                                              dir: `auto`,
                                              children: [
                                                `连接工业和业务数据到 `,
                                                /*#__PURE__*/ l(`span`, {
                                                  style: {
                                                    "--framer-text-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                                  },
                                                  children: `Tier0`,
                                                }),
                                              ],
                                            }),
                                          }),
                                        className: `framer-1i7lqn6`,
                                        "data-framer-name": `Turn industrial data into a shared operational sys`,
                                        effect: Lt,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ u(`div`, {
                                  className: `framer-1pm7qz6`,
                                  "data-framer-name": `Container`,
                                  children: [
                                    /*#__PURE__*/ l(`div`, {
                                      className: `framer-1ayrdri`,
                                      "data-framer-name": `Paragraph`,
                                      children: /*#__PURE__*/ l(m, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          q(`v2`, g) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(`p`, {
                                              className: `framer-styles-preset-1ful33y`,
                                              "data-styles-preset": `HNigw6pHS`,
                                              dir: `auto`,
                                              children: `通过灵活的数据流，将来自设备、PLC、工厂系统、企业应用、API 和数据库的数据引入 Tier0。实时转换、分发和标准化数据，供上层应用、高级分析、事件告警和 AI 使用。 `,
                                            }),
                                          }),
                                        className: `framer-dakj33`,
                                        "data-framer-name": `Tier0 implements Unified Namespace as a practical `,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    /*#__PURE__*/ l(`div`, {
                                      className: `framer-cfg7wl`,
                                      "data-framer-name": `Paragraph`,
                                      children: /*#__PURE__*/ l(m, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          q(`v3`, g) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(`p`, {
                                              className: `framer-styles-preset-1ful33y`,
                                              "data-styles-preset": `HNigw6pHS`,
                                              dir: `auto`,
                                              children: `数据采集是可复用工业数据基座的起点。不再为每个新需求临时构建一次性接口，数据只需一次连接到 Tier0，进行规范结构化处理后，即可在整个平台上重复使用。`,
                                            }),
                                          }),
                                        className: `framer-1vtlwz5`,
                                        "data-framer-name": `Instead of creating more point-to-point integratio`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                                P() &&
                                  /*#__PURE__*/ u(`div`, {
                                    className: `framer-4bmuxj hidden-1803tfs`,
                                    children: [
                                      /*#__PURE__*/ l(R, {
                                        breakpoint: D,
                                        overrides: {
                                          ns_0OUzlj: {
                                            background: {
                                              alt: ``,
                                              fit: `stretch`,
                                              intrinsicHeight: 1184,
                                              intrinsicWidth: 1224,
                                              loading: y((v?.y || 0) + 551.24),
                                              pixelHeight: 1184,
                                              pixelWidth: 1224,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: `300px`,
                                              src: `../../assets/images/KiH1iupBDXVzyoDfFr4bcupMiJk.png`,
                                              srcSet: `../../assets/images/KiH1iupBDXVzyoDfFr4bcupMiJk-95e7cb.png 512w,../../assets/images/KiH1iupBDXVzyoDfFr4bcupMiJk-c79613.png 1024w,../../assets/images/KiH1iupBDXVzyoDfFr4bcupMiJk.png 1224w`,
                                            },
                                          },
                                        },
                                        children: /*#__PURE__*/ l(j, {
                                          background: {
                                            alt: ``,
                                            fit: `stretch`,
                                            intrinsicHeight: 1184,
                                            intrinsicWidth: 1224,
                                            pixelHeight: 1184,
                                            pixelWidth: 1224,
                                            positionX: `center`,
                                            positionY: `center`,
                                            src: `../../assets/images/KiH1iupBDXVzyoDfFr4bcupMiJk.png`,
                                            srcSet: `../../assets/images/KiH1iupBDXVzyoDfFr4bcupMiJk-95e7cb.png 512w,../../assets/images/KiH1iupBDXVzyoDfFr4bcupMiJk-c79613.png 1024w,../../assets/images/KiH1iupBDXVzyoDfFr4bcupMiJk.png 1224w`,
                                          },
                                          className: `framer-v79q5x`,
                                          "data-framer-name": `image 98`,
                                        }),
                                      }),
                                      /*#__PURE__*/ l(H, {
                                        animated: !1,
                                        BKVe8Pgvw: !0,
                                        className: `framer-4iopq5`,
                                        fICyAUQY1: !0,
                                        layoutId: `UMD42NhpC`,
                                        lKf_CQTz5: !0,
                                      }),
                                      /*#__PURE__*/ l(R, {
                                        breakpoint: D,
                                        overrides: {
                                          ns_0OUzlj: {
                                            background: {
                                              alt: ``,
                                              fit: `stretch`,
                                              loading: y((v?.y || 0) + 839.24),
                                              pixelHeight: 1124,
                                              pixelWidth: 1172,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: `292px`,
                                              src: `../../assets/images/ARYCNTEinjJY7pZzrExzE8okHxI-0798e2.png`,
                                              srcSet: `../../assets/images/ARYCNTEinjJY7pZzrExzE8okHxI.png 512w,../../assets/images/ARYCNTEinjJY7pZzrExzE8okHxI-1a2428.png 1024w,../../assets/images/ARYCNTEinjJY7pZzrExzE8okHxI-0798e2.png 1172w`,
                                            },
                                          },
                                        },
                                        children: /*#__PURE__*/ l(j, {
                                          background: {
                                            alt: ``,
                                            fit: `stretch`,
                                            pixelHeight: 1124,
                                            pixelWidth: 1172,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `292px`,
                                            src: `../../assets/images/ARYCNTEinjJY7pZzrExzE8okHxI-0798e2.png`,
                                            srcSet: `../../assets/images/ARYCNTEinjJY7pZzrExzE8okHxI.png 512w,../../assets/images/ARYCNTEinjJY7pZzrExzE8okHxI-1a2428.png 1024w,../../assets/images/ARYCNTEinjJY7pZzrExzE8okHxI-0798e2.png 1172w`,
                                          },
                                          className: `framer-69p8r4`,
                                          "data-framer-name": `image 99`,
                                          transformTemplate: Rt,
                                          children: /*#__PURE__*/ l(`div`, {
                                            className: `framer-10fxc7u`,
                                            "data-framer-name": `Rectangle 34624753`,
                                            children: /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                q(`v4`, g) ??
                                                /*#__PURE__*/ l(a, {
                                                  children: /*#__PURE__*/ l(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `12px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-letter-spacing": `0px`,
                                                      "--framer-line-height": `21.43px`,
                                                      "--framer-text-color": `rgb(115, 178, 0)`,
                                                    },
                                                    children: `数据流`,
                                                  }),
                                                }),
                                              className: `framer-gjdhm6`,
                                              "data-framer-name": `DATA FLOWS`,
                                              fonts: [`GF;IBM Plex Sans-500`],
                                              transformTemplate: X,
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            I() &&
                              /*#__PURE__*/ u(`div`, {
                                className: `framer-kl1an6 hidden-1emxzb8`,
                                "data-framer-name": `Frame 2147223960`,
                                children: [
                                  /*#__PURE__*/ u(`div`, {
                                    className: `framer-c71tu`,
                                    "data-framer-name": `Group 1321316960`,
                                    children: [
                                      /*#__PURE__*/ l(j, {
                                        background: {
                                          alt: ``,
                                          fit: `stretch`,
                                          loading: y((v?.y || 0) + 204.4563),
                                          pixelHeight: 1184,
                                          pixelWidth: 1356,
                                          positionX: `center`,
                                          positionY: `center`,
                                          sizes: `338.6319px`,
                                          src: `../../assets/images/JnaYN0abZOBuAGTjktsAdRFSs-dd75dc.png`,
                                          srcSet: `../../assets/images/JnaYN0abZOBuAGTjktsAdRFSs.png 512w,../../assets/images/JnaYN0abZOBuAGTjktsAdRFSs-0e9bc6.png 1024w,../../assets/images/JnaYN0abZOBuAGTjktsAdRFSs-dd75dc.png 1356w`,
                                        },
                                        className: `framer-v1cf1a`,
                                        "data-framer-name": `image 98`,
                                      }),
                                      /*#__PURE__*/ l(j, {
                                        background: {
                                          alt: ``,
                                          fit: `stretch`,
                                          loading: y((v?.y || 0) + 212.0022),
                                          pixelHeight: 1124,
                                          pixelWidth: 1172,
                                          positionX: `center`,
                                          positionY: `center`,
                                          sizes: `292.3194px`,
                                          src: `../../assets/images/ARYCNTEinjJY7pZzrExzE8okHxI-0798e2.png`,
                                          srcSet: `../../assets/images/ARYCNTEinjJY7pZzrExzE8okHxI.png 512w,../../assets/images/ARYCNTEinjJY7pZzrExzE8okHxI-1a2428.png 1024w,../../assets/images/ARYCNTEinjJY7pZzrExzE8okHxI-0798e2.png 1172w`,
                                        },
                                        className: `framer-1dqwfax`,
                                        "data-framer-name": `image 99`,
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ l(`div`, {
                                    className: `framer-ry63t7`,
                                    "data-framer-name": `Rectangle 34624753`,
                                  }),
                                  /*#__PURE__*/ l(m, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      q(`v4`, g) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                            "--framer-font-family": `"IBM Plex Sans"`,
                                            "--framer-font-size": `12px`,
                                            "--framer-font-style": `normal`,
                                            "--framer-font-variation-axes": `normal`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `0px`,
                                            "--framer-line-height": `21.43px`,
                                            "--framer-text-color": `rgb(115, 178, 0)`,
                                          },
                                          children: `数据流`,
                                        }),
                                      }),
                                    className: `framer-1xcvzig`,
                                    "data-framer-name": `DATA FLOWS`,
                                    fonts: [`GF;IBM Plex Sans-500`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        /*#__PURE__*/ l(S, {
                          className: `framer-plldpr`,
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
                        /*#__PURE__*/ u(J, {
                          __framer__animate: { transition: Q },
                          __framer__animateOnce: !0,
                          __framer__enter: Z,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1rxs0zv`,
                          "data-framer-name": `Frame 2147223955`,
                          children: [
                            /*#__PURE__*/ u(J, {
                              __framer__animate: { transition: Q },
                              __framer__animateOnce: !0,
                              __framer__enter: Z,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-hf7h01`,
                              "data-framer-name": `Frame 2147223888`,
                              children: [
                                /*#__PURE__*/ u(`div`, {
                                  className: `framer-1fewuq8`,
                                  "data-framer-name": `Container`,
                                  children: [
                                    /*#__PURE__*/ l(`div`, {
                                      className: `framer-14on74n`,
                                      "data-border": !0,
                                      "data-framer-name": `Text`,
                                      children: /*#__PURE__*/ l(m, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          q(`v5`, g) ??
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
                                                "--framer-text-color": `rgb(115, 178, 0)`,
                                                "--framer-text-transform": `uppercase`,
                                              },
                                              children: `概述`,
                                            }),
                                          }),
                                        className: `framer-yvqnqu`,
                                        "data-framer-name": `Overview`,
                                        fonts: [`GF;IBM Plex Mono-regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    /*#__PURE__*/ l(`div`, {
                                      className: `framer-lkkgzp`,
                                      "data-framer-name": `Heading 2`,
                                      children: /*#__PURE__*/ l(R, {
                                        breakpoint: D,
                                        overrides: {
                                          ns_0OUzlj: {
                                            children:
                                              q(`v7`, g) ??
                                              /*#__PURE__*/ l(a, {
                                                children: /*#__PURE__*/ u(`h2`, {
                                                  className: `framer-styles-preset-zg5ubw`,
                                                  "data-styles-preset": `VF7HZTiAg`,
                                                  dir: `auto`,
                                                  children: [
                                                    `什么是 `,
                                                    /*#__PURE__*/ l(`span`, {
                                                      style: {
                                                        "--framer-text-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                                      },
                                                      children: `Tier0`,
                                                    }),
                                                    ` 中的数据采集`,
                                                  ],
                                                }),
                                              }),
                                          },
                                        },
                                        children: /*#__PURE__*/ l(m, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            q(`v6`, g) ??
                                            /*#__PURE__*/ l(a, {
                                              children: /*#__PURE__*/ u(`h2`, {
                                                className: `framer-styles-preset-zg5ubw`,
                                                "data-styles-preset": `VF7HZTiAg`,
                                                dir: `auto`,
                                                children: [
                                                  `什么是 `,
                                                  /*#__PURE__*/ l(`span`, {
                                                    style: {
                                                      "--framer-text-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                                    },
                                                    children: `Tier0`,
                                                  }),
                                                  ` 中的数据采集`,
                                                ],
                                              }),
                                            }),
                                          className: `framer-cq07ox`,
                                          "data-framer-name": `What is Data Collection in Tier0`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ u(`div`, {
                                  className: `framer-p2f5lf`,
                                  "data-framer-name": `Container`,
                                  children: [
                                    /*#__PURE__*/ l(`div`, {
                                      className: `framer-1s8au6`,
                                      "data-framer-name": `Paragraph`,
                                      children: /*#__PURE__*/ l(m, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          q(`v8`, g) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(`p`, {
                                              className: `framer-styles-preset-1ful33y`,
                                              "data-styles-preset": `HNigw6pHS`,
                                              dir: `auto`,
                                              children: `Tier0 中的数据采集，是连接分散的数据源，结构化后将它们汇入一个可复用的共享空间。`,
                                            }),
                                          }),
                                        className: `framer-fwqc1i`,
                                        "data-framer-name": `A Unified Namespace is often described as a way to`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    /*#__PURE__*/ l(`div`, {
                                      className: `framer-1sg5wgo`,
                                      "data-framer-name": `Paragraph`,
                                      children: /*#__PURE__*/ l(m, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          q(`v9`, g) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(`p`, {
                                              className: `framer-styles-preset-1ful33y`,
                                              "data-styles-preset": `HNigw6pHS`,
                                              dir: `auto`,
                                              children: `它支持连接 OT 和 IT 数据，包括机器信号、系统事务、API 数据和数据库记录。数据汇集到 Tier0 并广泛复用前，可进行转换、过滤、映射和分发。`,
                                            }),
                                          }),
                                        className: `framer-171rhe2`,
                                        "data-framer-name": `It is a real-time, structured operational namespac`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    /*#__PURE__*/ l(`div`, {
                                      className: `framer-1176tvz`,
                                      "data-framer-name": `Paragraph`,
                                      children: /*#__PURE__*/ l(m, {
                                        __fromCanvasComponent: !0,
                                        children:
                                          q(`v10`, g) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(`p`, {
                                              className: `framer-styles-preset-1ful33y`,
                                              "data-styles-preset": `HNigw6pHS`,
                                              dir: `auto`,
                                              children: `基于 Node-RED 数据流的集成方式，连接更灵活且易于维护。`,
                                            }),
                                          }),
                                        className: `framer-1lx1xfw`,
                                        "data-framer-name": `That means the namespace is not just a stream of m`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ u(J, {
                              __framer__animate: { transition: Q },
                              __framer__animateOnce: !0,
                              __framer__enter: Z,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-arl148`,
                              "data-framer-name": `Container`,
                              children: [
                                /*#__PURE__*/ u(`div`, {
                                  className: `framer-7g3vva`,
                                  "data-border": !0,
                                  "data-framer-name": `Container`,
                                  children: [
                                    /*#__PURE__*/ l(S, {
                                      className: `framer-26dehb`,
                                      "data-framer-name": `Container`,
                                      opacity: 1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 42 42"><path d="M 1 9 C 1 4.582 4.582 1 9 1 L 33 1 C 37.418 1 41 4.582 41 9 L 41 33 C 41 37.418 37.418 41 33 41 L 9 41 C 4.582 41 1 37.418 1 33 Z" fill="rgba(178, 237, 29, 0.1)" stroke="var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29)) /* {&quot;name&quot;:&quot;Chartreuse&quot;} */" stroke-miterlimit="10"></path><g transform="translate(14.25 13.5)"><path d="M 10.5 4.5 L 12 4.5 C 12.398 4.5 12.779 4.658 13.061 4.939 C 13.342 5.221 13.5 5.602 13.5 6 L 13.5 10.5 C 13.5 10.898 13.342 11.279 13.061 11.561 C 12.779 11.842 12.398 12 12 12 L 10.5 12 L 10.5 15 L 7.5 12 L 4.5 12 C 4.303 12 4.108 11.962 3.926 11.886 C 3.744 11.811 3.579 11.7 3.44 11.561" fill="transparent" stroke="rgb(115,178,0)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 6 0 L 1.5 0 C 1.102 0 0.721 0.158 0.439 0.439 C 0.158 0.721 0 1.102 0 1.5 L 0 6 C 0 6.398 0.158 6.779 0.439 7.061 C 0.721 7.342 1.102 7.5 1.5 7.5 L 3 7.5 L 3 10.5 L 6 7.5 L 7.5 7.5 C 7.898 7.5 8.279 7.342 8.561 7.061 C 8.842 6.779 9 6.398 9 6 L 9 1.5 C 9 1.102 8.842 0.721 8.561 0.439 C 8.279 0.158 7.898 0 7.5 0 Z" fill="transparent" stroke="rgb(115,178,0)" stroke-miterlimit="10" stroke-dasharray=""></path></g></svg>`,
                                      svgContentId: 8950444322,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ u(`div`, {
                                      className: `framer-1tmip82`,
                                      "data-framer-name": `Container`,
                                      children: [
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-57v1io`,
                                          "data-framer-name": `Container`,
                                          children: /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              q(`v11`, g) ??
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
                                                    "--framer-text-color": `rgb(17, 24, 39)`,
                                                  },
                                                  children: `OT + IT 连接`,
                                                }),
                                              }),
                                            className: `framer-1v2ovpe`,
                                            "data-framer-name": `OT + IT Connectivity`,
                                            fonts: [`GF;IBM Plex Sans-600`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-1d3ogcg`,
                                          "data-framer-name": `Container`,
                                          children: /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              q(`v12`, g) ??
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
                                                    "--framer-line-height": `21.45px`,
                                                    "--framer-text-color": `rgb(107, 114, 128)`,
                                                  },
                                                  children: `连接 OT 和 IT 数据源。`,
                                                }),
                                              }),
                                            className: `framer-15zqul7`,
                                            "data-framer-name": `Connect both OT and IT data sources.`,
                                            fonts: [`GF;IBM Plex Sans-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ u(`div`, {
                                  className: `framer-1bczsnk`,
                                  "data-border": !0,
                                  "data-framer-name": `Container`,
                                  children: [
                                    /*#__PURE__*/ l(S, {
                                      className: `framer-w2xk0p`,
                                      "data-framer-name": `Container`,
                                      opacity: 1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 42 42"><path d="M 1 9 C 1 4.582 4.582 1 9 1 L 33 1 C 37.418 1 41 4.582 41 9 L 41 33 C 41 37.418 37.418 41 33 41 L 9 41 C 4.582 41 1 37.418 1 33 Z" fill="rgba(178, 237, 29, 0.1)" stroke="var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29)) /* {&quot;name&quot;:&quot;Chartreuse&quot;} */" stroke-miterlimit="10"></path><path d="M 27.5 20 L 24.5 20 L 22.25 26.75 L 17.75 13.25 L 15.5 20 L 12.5 20" fill="transparent" stroke="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)) /* {&quot;name&quot;:&quot;Yellow Green&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                      svgContentId: 9357944552,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ u(`div`, {
                                      className: `framer-6mycsz`,
                                      "data-framer-name": `Container`,
                                      children: [
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-gnot07`,
                                          "data-framer-name": `Container`,
                                          children: /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              q(`v13`, g) ??
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
                                                    "--framer-text-color": `rgb(17, 24, 39)`,
                                                  },
                                                  children: `实时数据流`,
                                                }),
                                              }),
                                            className: `framer-1x1izs1`,
                                            "data-framer-name": `Real-Time Data Flows`,
                                            fonts: [`GF;IBM Plex Sans-600`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ l(m, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            q(`v14`, g) ??
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
                                                  "--framer-line-height": `21.45px`,
                                                  "--framer-text-color": `rgb(107, 114, 128)`,
                                                },
                                                children: `在数据产生时采集、转换并分发。`,
                                              }),
                                            }),
                                          className: `framer-9epts1`,
                                          "data-framer-name": `Collect, transform, and route data as it happens.`,
                                          fonts: [`GF;IBM Plex Sans-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ u(`div`, {
                                  className: `framer-17y630l`,
                                  "data-framer-name": `Container`,
                                  children: [
                                    /*#__PURE__*/ l(S, {
                                      className: `framer-iufjdc`,
                                      "data-framer-name": `Container`,
                                      opacity: 1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 42 42"><path d="M 1 9 C 1 4.582 4.582 1 9 1 L 33 1 C 37.418 1 41 4.582 41 9 L 41 33 C 41 37.418 37.418 41 33 41 L 9 41 C 4.582 41 1 37.418 1 33 Z" fill="rgba(178, 237, 29, 0.1)" stroke="var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29)) /* {&quot;name&quot;:&quot;Chartreuse&quot;} */" stroke-miterlimit="10"></path><g transform="translate(13.25 12.5)"><path d="M 6.75 4.5 C 10.478 4.5 13.5 3.493 13.5 2.25 C 13.5 1.007 10.478 0 6.75 0 C 3.022 0 0 1.007 0 2.25 C 0 3.493 3.022 4.5 6.75 4.5 Z" fill="transparent" stroke="rgb(115,178,0)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0 2.25 L 0 12.75 C 0 13.995 3.023 15 6.75 15 C 10.477 15 13.5 13.995 13.5 12.75 L 13.5 2.25" fill="transparent" stroke="rgb(115,178,0)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0 7.5 C 0 8.745 3.023 9.75 6.75 9.75 C 10.477 9.75 13.5 8.745 13.5 7.5" fill="transparent" stroke="rgb(115,178,0)" stroke-miterlimit="10" stroke-dasharray=""></path></g></svg>`,
                                      svgContentId: 11523185622,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ u(`div`, {
                                      className: `framer-xbei4z`,
                                      "data-framer-name": `Container`,
                                      children: [
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-g8nbej`,
                                          "data-framer-name": `Container`,
                                          children: /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              q(`v15`, g) ??
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
                                                    "--framer-text-color": `rgb(17, 24, 39)`,
                                                  },
                                                  children: `可复用数据基座`,
                                                }),
                                              }),
                                            className: `framer-3qsl0z`,
                                            "data-framer-name": `Reusable Data Foundation`,
                                            fonts: [`GF;IBM Plex Sans-600`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ l(m, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            q(`v16`, g) ??
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
                                                  "--framer-line-height": `21.45px`,
                                                  "--framer-text-color": `rgb(107, 114, 128)`,
                                                },
                                                children: `数据一次构建，全平台复用。`,
                                              }),
                                            }),
                                          className: `framer-18vmu5y`,
                                          "data-framer-name": `Structure data once and reuse it across the platfo`,
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
                        /*#__PURE__*/ u(J, {
                          __framer__animate: { transition: Q },
                          __framer__animateOnce: !0,
                          __framer__enter: Z,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1mwohoc`,
                          "data-framer-name": `Section`,
                          children: [
                            /*#__PURE__*/ u(`div`, {
                              className: `framer-1a9cror`,
                              "data-framer-name": `Container`,
                              children: [
                                /*#__PURE__*/ l(`div`, {
                                  className: `framer-qmthju`,
                                  "data-border": !0,
                                  "data-framer-name": `Text`,
                                  children: /*#__PURE__*/ l(m, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      q(`v17`, g) ??
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
                                            "--framer-text-color": `rgb(115, 178, 0)`,
                                            "--framer-text-transform": `uppercase`,
                                          },
                                          children: `连接`,
                                        }),
                                      }),
                                    className: `framer-gstwp8`,
                                    "data-framer-name": `Connectivity`,
                                    fonts: [`GF;IBM Plex Mono-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                /*#__PURE__*/ l(`div`, {
                                  className: `framer-1etfgym`,
                                  "data-framer-name": `Heading 2`,
                                  children: /*#__PURE__*/ l(m, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      q(`v18`, g) ??
                                      /*#__PURE__*/ u(a, {
                                        children: [
                                          /*#__PURE__*/ l(`h2`, {
                                            className: `framer-styles-preset-zg5ubw`,
                                            "data-styles-preset": `VF7HZTiAg`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `支持常见工业协议`,
                                          }),
                                          /*#__PURE__*/ l(`h2`, {
                                            className: `framer-styles-preset-zg5ubw`,
                                            "data-styles-preset": `VF7HZTiAg`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `和系统接口`,
                                          }),
                                        ],
                                      }),
                                    className: `framer-zu3lso`,
                                    "data-framer-name": `Supports Common Industrial Protocols and System Interfaces`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                /*#__PURE__*/ l(`div`, {
                                  className: `framer-d31w2e`,
                                  "data-framer-name": `Paragraph`,
                                  children: /*#__PURE__*/ l(m, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      q(`v19`, g) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(`p`, {
                                          className: `framer-styles-preset-1ful33y`,
                                          "data-styles-preset": `HNigw6pHS`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `center` },
                                          children: `Tier0 支持跨协议、跨控制器、跨系统的常见工业连接场景。其设计旨在: 在同一架构中，不仅采集设备数据，还采集工厂和企业数据。`,
                                        }),
                                      }),
                                    className: `framer-k9h3dq`,
                                    "data-framer-name": `Tier0's namespace is designed to reflect industria`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ u(`div`, {
                              className: `framer-aor08b`,
                              "data-framer-name": `Frame 2147223908`,
                              children: [
                                /*#__PURE__*/ u(`div`, {
                                  className: `framer-1q0u6xg`,
                                  "data-framer-name": `Frame 2147223906`,
                                  children: [
                                    /*#__PURE__*/ u(`div`, {
                                      className: `framer-1698e9u`,
                                      "data-border": !0,
                                      "data-framer-name": `Frame 2147223882`,
                                      children: [
                                        /*#__PURE__*/ u(`div`, {
                                          className: `framer-10bmqi4`,
                                          "data-framer-name": `Frame 1321316006`,
                                          children: [
                                            P() &&
                                              /*#__PURE__*/ l(R, {
                                                breakpoint: D,
                                                overrides: {
                                                  ns_0OUzlj: { svgContentId: 9754998612 },
                                                },
                                                children: /*#__PURE__*/ l(S, {
                                                  className: `framer-1o7yp5y hidden-1803tfs`,
                                                  "data-framer-name": `Vector`,
                                                  opacity: 1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15"><path d="M 10.375 11 L 11 11 M 7.25 11 L 7.875 11 M 4.125 11 L 4.75 11 M 1 12.25 C 1 12.582 1.132 12.899 1.366 13.134 C 1.601 13.368 1.918 13.5 2.25 13.5 L 12.25 13.5 C 12.582 13.5 12.899 13.368 13.134 13.134 C 13.368 12.899 13.5 12.582 13.5 12.25 L 13.5 4.75 L 9.125 7.875 L 9.125 4.75 L 4.75 7.875 L 4.75 2.25 C 4.75 1.918 4.618 1.601 4.384 1.366 C 4.149 1.132 3.832 1 3.5 1 L 2.25 1 C 1.918 1 1.601 1.132 1.366 1.366 C 1.132 1.601 1 1.918 1 2.25 Z" fill="transparent" stroke-width="1.25" stroke="rgb(98,130,16)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                  svgContentId: 11766440741,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            /*#__PURE__*/ l(`div`, {
                                              className: `framer-1g8jf5f`,
                                              "data-framer-name": `factory`,
                                              children:
                                                I() &&
                                                /*#__PURE__*/ l(S, {
                                                  className: `framer-v6ypj1 hidden-1emxzb8`,
                                                  "data-framer-name": `Vector`,
                                                  opacity: 1,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29 29"><path d="M 20.75 22 L 22 22 M 14.5 22 L 15.75 22 M 8.25 22 L 9.5 22 M 2 24.5 C 2 25.163 2.263 25.799 2.732 26.268 C 3.201 26.737 3.837 27 4.5 27 L 24.5 27 C 25.163 27 25.799 26.737 26.268 26.268 C 26.737 25.799 27 25.163 27 24.5 L 27 9.5 L 18.25 15.75 L 18.25 9.5 L 9.5 15.75 L 9.5 4.5 C 9.5 3.837 9.237 3.201 8.768 2.732 C 8.299 2.263 7.663 2 7 2 L 4.5 2 C 3.837 2 3.201 2.263 2.732 2.732 C 2.263 3.201 2 3.837 2 4.5 Z" fill="transparent" stroke-width="2.5" stroke="rgb(98,130,16)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                  svgContentId: 12546054932,
                                                  withExternalLayout: !0,
                                                }),
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ u(`div`, {
                                          className: `framer-litolh`,
                                          "data-framer-name": `Frame 22`,
                                          children: [
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                q(`v20`, g) ??
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
                                                    children: `标准工业协议`,
                                                  }),
                                                }),
                                              className: `framer-hw0ghu`,
                                              "data-framer-name": `Standard Industrial Protocols`,
                                              fonts: [`GF;IBM Plex Sans-500`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                q(`v21`, g) ??
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
                                                    children: `通过 OPC UA、MQTT 和 Modbus 进行的通用工业数据交换和边缘连接。`,
                                                  }),
                                                }),
                                              className: `framer-zgllgk`,
                                              "data-framer-name": `OPC UA, MQTT, and Modbus for common industrial data exchange and edge connectivity.`,
                                              fonts: [`GF;IBM Plex Sans-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ u(`div`, {
                                      className: `framer-6gvsvx`,
                                      "data-border": !0,
                                      "data-framer-name": `Frame 2147223883`,
                                      children: [
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-7994oy`,
                                          "data-framer-name": `Frame 1321316006`,
                                          children: /*#__PURE__*/ l(`div`, {
                                            className: `framer-1sc79wd`,
                                            "data-framer-name": `joystick`,
                                            children: /*#__PURE__*/ l(S, {
                                              className: `framer-n7c35p`,
                                              "data-framer-name": `Vector`,
                                              opacity: 1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27 27"><path d="M 5.75 17 L 5.75 14.5 M 13.25 17 L 13.25 9.5 M 13.25 9.5 C 15.321 9.5 17 7.821 17 5.75 C 17 3.679 15.321 2 13.25 2 C 11.179 2 9.5 3.679 9.5 5.75 C 9.5 7.821 11.179 9.5 13.25 9.5 Z M 24.5 19.5 C 24.5 18.837 24.237 18.201 23.768 17.732 C 23.299 17.263 22.663 17 22 17 L 4.5 17 C 3.837 17 3.201 17.263 2.732 17.732 C 2.263 18.201 2 18.837 2 19.5 L 2 22 C 2 22.663 2.263 23.299 2.732 23.768 C 3.201 24.237 3.837 24.5 4.5 24.5 L 22 24.5 C 22.663 24.5 23.299 24.237 23.768 23.768 C 24.237 23.299 24.5 22.663 24.5 22 Z" fill="transparent" stroke-width="2.5" stroke="rgb(98,130,16)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                              svgContentId: 9917370002,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ u(`div`, {
                                          className: `framer-19ocs6m`,
                                          "data-framer-name": `Frame 22`,
                                          children: [
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                q(`v22`, g) ??
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
                                                    children: `PLC和控制器协议`,
                                                  }),
                                                }),
                                              className: `framer-6osje4`,
                                              "data-framer-name": `PLC and Controller Protocols`,
                                              fonts: [`GF;IBM Plex Sans-500`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                q(`v23`, g) ??
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
                                                    children: `西门子 S7、EtherNet/IP、欧姆龙 FINS、三菱通信协议和 Beckhoff ADS。`,
                                                  }),
                                                }),
                                              className: `framer-75nlk1`,
                                              "data-framer-name": `Siemens S7, EtherNet/IP, Omron FINS, Mitsubishi communication protocols, and Beckhoff ADS.`,
                                              fonts: [`GF;IBM Plex Sans-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ u(`div`, {
                                      className: `framer-1cxnzp3`,
                                      "data-border": !0,
                                      "data-framer-name": `Frame 2147223884`,
                                      children: [
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-13y3aip`,
                                          "data-framer-name": `Frame 1321316006`,
                                          children: /*#__PURE__*/ l(`div`, {
                                            className: `framer-8mb24p`,
                                            "data-framer-name": `building-2`,
                                            children: /*#__PURE__*/ l(S, {
                                              className: `framer-9vq7km`,
                                              "data-framer-name": `Vector`,
                                              opacity: 1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29 29"><path d="M 7 27 L 7 4.5 C 7 3.837 7.263 3.201 7.732 2.732 C 8.201 2.263 8.837 2 9.5 2 L 19.5 2 C 20.163 2 20.799 2.263 21.268 2.732 C 21.737 3.201 22 3.837 22 4.5 L 22 27 M 7 27 L 22 27 M 7 27 L 4.5 27 C 3.837 27 3.201 26.737 2.732 26.268 C 2.263 25.799 2 25.163 2 24.5 L 2 17 C 2 16.337 2.263 15.701 2.732 15.232 C 3.201 14.763 3.837 14.5 4.5 14.5 L 7 14.5 M 22 27 L 24.5 27 C 25.163 27 25.799 26.737 26.268 26.268 C 26.737 25.799 27 25.163 27 24.5 L 27 13.25 C 27 12.587 26.737 11.951 26.268 11.482 C 25.799 11.013 25.163 10.75 24.5 10.75 L 22 10.75 M 12 7 L 17 7 M 12 12 L 17 12 M 12 17 L 17 17 M 12 22 L 17 22" fill="transparent" stroke-width="2.5" stroke="rgb(98,130,16)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                              svgContentId: 11485882651,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ u(`div`, {
                                          className: `framer-9knlb`,
                                          "data-framer-name": `Frame 22`,
                                          children: [
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                q(`v24`, g) ??
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
                                                    children: `建筑和设施协议`,
                                                  }),
                                                }),
                                              className: `framer-x20hb5`,
                                              "data-framer-name": `Building and Facility Protocols`,
                                              fonts: [`GF;IBM Plex Sans-500`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                q(`v25`, g) ??
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
                                                    children: `用于设施和仓库连接的 BACnet 及相关楼宇侧协议。`,
                                                  }),
                                                }),
                                              className: `framer-127l0l`,
                                              "data-framer-name": `BACnet and related building-side protocols for facility and warehouse connectivity.`,
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
                                  className: `framer-1kh73f`,
                                  "data-framer-name": `Frame 2147223907`,
                                  children: [
                                    /*#__PURE__*/ u(`div`, {
                                      className: `framer-6n70n3`,
                                      "data-border": !0,
                                      "data-framer-name": `Frame 2147223886`,
                                      children: [
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-198vm6r`,
                                          "data-framer-name": `Frame 1321316006`,
                                          children: /*#__PURE__*/ l(`div`, {
                                            className: `framer-17dtmhm`,
                                            "data-framer-name": `unlink`,
                                            children: /*#__PURE__*/ l(S, {
                                              className: `framer-144xjn6`,
                                              "data-framer-name": `Vector`,
                                              opacity: 1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29 29"><path d="M 23.05 14.813 L 25.2 12.675 L 25.175 12.675 C 26.326 11.483 26.956 9.882 26.928 8.225 C 26.9 6.568 26.216 4.99 25.025 3.837 C 23.859 2.713 22.302 2.084 20.681 2.084 C 19.061 2.084 17.504 2.713 16.337 3.837 L 14.188 5.975 M 5.962 14.188 L 3.825 16.325 C 2.674 17.517 2.044 19.118 2.072 20.775 C 2.1 22.432 2.784 24.01 3.975 25.163 C 5.141 26.287 6.698 26.916 8.319 26.916 C 9.939 26.916 11.496 26.287 12.662 25.163 L 14.8 23.025 M 9.5 2 L 9.5 5.75 M 2 9.5 L 5.75 9.5 M 19.5 23.25 L 19.5 27 M 23.25 19.5 L 27 19.5" fill="transparent" stroke-width="2.5" stroke="rgb(98,130,16)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                              svgContentId: 8953826260,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ u(`div`, {
                                          className: `framer-h90vv8`,
                                          "data-framer-name": `Frame 22`,
                                          children: [
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                q(`v26`, g) ??
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
                                                    children: `文件、API 和数据库接口`,
                                                  }),
                                                }),
                                              className: `framer-15wym7k`,
                                              "data-framer-name": `File, API, and Database Interfaces`,
                                              fonts: [`GF;IBM Plex Sans-500`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                q(`v27`, g) ??
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
                                                    children: `REST API、Web 服务、数据库、CSV 文件、批量上传和定时导出。`,
                                                  }),
                                                }),
                                              className: `framer-1fe45mm`,
                                              "data-framer-name": `REST APIs, web services, databases, CSV files, batch uploads, and scheduled extracts.`,
                                              fonts: [`GF;IBM Plex Sans-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ u(`div`, {
                                      className: `framer-1nhv5bk`,
                                      "data-border": !0,
                                      "data-framer-name": `Frame 2147223887`,
                                      children: [
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-1l14orw`,
                                          "data-framer-name": `Frame 1321316006`,
                                          children: /*#__PURE__*/ l(`div`, {
                                            className: `framer-1y5xqx4`,
                                            "data-framer-name": `send-to-back`,
                                            children: /*#__PURE__*/ l(S, {
                                              className: `framer-vxcgc`,
                                              "data-framer-name": `Vector`,
                                              opacity: 1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29 29"><path d="M 8.25 17 L 8.25 18.25 C 8.25 18.913 8.513 19.549 8.982 20.018 C 9.451 20.487 10.087 20.75 10.75 20.75 L 12 20.75 M 17 8.25 L 18.25 8.25 C 18.913 8.25 19.549 8.513 20.018 8.982 C 20.487 9.451 20.75 10.087 20.75 10.75 L 20.75 12 M 19.5 17 L 24.5 17 C 25.881 17 27 18.119 27 19.5 L 27 24.5 C 27 25.881 25.881 27 24.5 27 L 19.5 27 C 18.119 27 17 25.881 17 24.5 L 17 19.5 C 17 18.119 18.119 17 19.5 17 Z M 4.5 2 L 9.5 2 C 10.881 2 12 3.119 12 4.5 L 12 9.5 C 12 10.881 10.881 12 9.5 12 L 4.5 12 C 3.119 12 2 10.881 2 9.5 L 2 4.5 C 2 3.119 3.119 2 4.5 2 Z" fill="transparent" stroke-width="2.5" stroke="rgb(98,130,16)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                              svgContentId: 12620249561,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ u(`div`, {
                                          className: `framer-1whd02r`,
                                          "data-framer-name": `Frame 22`,
                                          children: [
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                q(`v28`, g) ??
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
                                                    children: `可扩展连接模型`,
                                                  }),
                                                }),
                                              className: `framer-89qeqz`,
                                              "data-framer-name": `Extensible Connectivity Model`,
                                              fonts: [`GF;IBM Plex Sans-500`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                q(`v29`, g) ??
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
                                                    children: `可重复使用的连接器和基于流程的节点可用于添加针对特定项目的协议、设备和接口。`,
                                                  }),
                                                }),
                                              className: `framer-zmbh0r`,
                                              "data-framer-name": `Reusable connectors and flow-based nodes can be added for project-specific protocols, devices, and interfaces.`,
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
                        /*#__PURE__*/ u(J, {
                          __framer__animate: { transition: Q },
                          __framer__animateOnce: !0,
                          __framer__enter: Z,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-82kv4q`,
                          "data-framer-name": `Frame 2147223972`,
                          children: [
                            /*#__PURE__*/ u(`div`, {
                              className: `framer-fljhzh`,
                              "data-framer-name": `Container`,
                              children: [
                                /*#__PURE__*/ l(`div`, {
                                  className: `framer-3n6qn8`,
                                  "data-border": !0,
                                  "data-framer-name": `Text`,
                                  children: /*#__PURE__*/ l(m, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      q(`v30`, g) ??
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
                                            "--framer-text-color": `rgb(115, 178, 0)`,
                                            "--framer-text-transform": `uppercase`,
                                          },
                                          children: `实现`,
                                        }),
                                      }),
                                    className: `framer-fdh6by`,
                                    "data-framer-name": `Implementation`,
                                    fonts: [`GF;IBM Plex Mono-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                /*#__PURE__*/ l(`div`, {
                                  className: `framer-1use72s`,
                                  "data-framer-name": `Heading 2`,
                                  children: /*#__PURE__*/ l(R, {
                                    breakpoint: D,
                                    overrides: {
                                      ns_0OUzlj: {
                                        children:
                                          q(`v32`, g) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(`h2`, {
                                              className: `framer-styles-preset-zg5ubw`,
                                              "data-styles-preset": `VF7HZTiAg`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `center` },
                                              children: `数据采集是如何构建的`,
                                            }),
                                          }),
                                      },
                                    },
                                    children: /*#__PURE__*/ l(m, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        q(`v31`, g) ??
                                        /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(`h2`, {
                                            className: `framer-styles-preset-zg5ubw`,
                                            "data-styles-preset": `VF7HZTiAg`,
                                            dir: `auto`,
                                            children: `数据采集是如何构建的`,
                                          }),
                                        }),
                                      className: `framer-auxu5s`,
                                      "data-framer-name": `How Data Collection Is Built`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ l(`div`, {
                                  className: `framer-ecx8ka`,
                                  "data-framer-name": `Paragraph`,
                                  children: /*#__PURE__*/ l(m, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      q(`v33`, g) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(`p`, {
                                          className: `framer-styles-preset-1ful33y`,
                                          "data-styles-preset": `HNigw6pHS`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `center` },
                                          children: `告别繁重的自定义集成，通过基于数据流的逻辑配置并采集数据。工程师只需连接用于输入、转换、分发和发布数据的可复用节点，即可完成数据流构建。`,
                                        }),
                                      }),
                                    className: `framer-j2teg6`,
                                    "data-framer-name": `Tier0's namespace is designed to reflect industria`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ u(`div`, {
                              className: `framer-1ly0djh`,
                              children: [
                                I() &&
                                  /*#__PURE__*/ l(S, {
                                    className: `framer-1xar8p0 hidden-1emxzb8`,
                                    "data-framer-name": `Vector 4201`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 3,
                                    intrinsicWidth: 1114,
                                    svg: `<svg width="1114" height="3" viewBox="-1 -1 1114 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.5H1111.5" stroke="url(#paint0_linear_3564_3083)"/>
<defs>
<linearGradient id="paint0_linear_3564_3083" x1="0" y1="1" x2="1111.5" y2="1" gradientUnits="userSpaceOnUse">
<stop stop-color="#8AB52D" stop-opacity="0.2"/>
<stop offset="0.475962" stop-color="#73B200"/>
<stop offset="1" stop-color="#8AB52D" stop-opacity="0.2"/>
</linearGradient>
</defs>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                /*#__PURE__*/ u(`div`, {
                                  className: `framer-v22t20`,
                                  "data-framer-name": `Frame 2147223971`,
                                  children: [
                                    /*#__PURE__*/ u(`div`, {
                                      className: `framer-x2hfp7`,
                                      "data-framer-name": `Frame 2147223967`,
                                      children: [
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-1abqol8`,
                                          "data-border": !0,
                                          "data-framer-name": `Frame 2147223922`,
                                          children: /*#__PURE__*/ l(`div`, {
                                            className: `framer-1gy691n`,
                                            "data-framer-name": `git-fork`,
                                            children: /*#__PURE__*/ l(S, {
                                              className: `framer-rxp2o7`,
                                              "data-framer-name": `Vector`,
                                              opacity: 1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 10 13 C 8.343 13 7 14.343 7 16 C 7 17.657 8.343 19 10 19 C 11.657 19 13 17.657 13 16 C 13 14.343 11.657 13 10 13 Z M 10 13 L 10 10 M 4 7 C 5.657 7 7 5.657 7 4 C 7 2.343 5.657 1 4 1 C 2.343 1 1 2.343 1 4 C 1 5.657 2.343 7 4 7 Z M 4 7 L 4 9 C 4 9.6 4.4 10 5 10 L 15 10 C 15.6 10 16 9.6 16 9 L 16 7 M 16 7 C 17.657 7 19 5.657 19 4 C 19 2.343 17.657 1 16 1 C 14.343 1 13 2.343 13 4 C 13 5.657 14.343 7 16 7 Z" fill="transparent" stroke-width="2" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                              svgContentId: 9176797123,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                        I() &&
                                          /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              q(`v34`, g) ??
                                              /*#__PURE__*/ l(a, {
                                                children: /*#__PURE__*/ l(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                    "--framer-font-family": `"IBM Plex Mono", monospace`,
                                                    "--framer-font-size": `14px`,
                                                    "--framer-letter-spacing": `-0.2px`,
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `rgb(115, 178, 0)`,
                                                    "--framer-text-transform": `uppercase`,
                                                  },
                                                  children: `01`,
                                                }),
                                              }),
                                            className: `framer-6pqvl1 hidden-1emxzb8`,
                                            "data-framer-name": `01`,
                                            fonts: [`GF;IBM Plex Mono-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        /*#__PURE__*/ u(`div`, {
                                          className: `framer-1nr3f36`,
                                          "data-framer-name": `Container`,
                                          children: [
                                            /*#__PURE__*/ l(R, {
                                              breakpoint: D,
                                              overrides: {
                                                ns_0OUzlj: {
                                                  children:
                                                    q(`v36`, g) ??
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
                                                          "--framer-text-alignment": `center`,
                                                          "--framer-text-color": `rgb(17, 24, 39)`,
                                                        },
                                                        children: ` 01 拖入源节点`,
                                                      }),
                                                    }),
                                                  fonts: [`GF;Poppins-600`],
                                                },
                                              },
                                              children: /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  q(`v35`, g) ??
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
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `rgb(17, 24, 39)`,
                                                      },
                                                      children: `拖入源节点`,
                                                    }),
                                                  }),
                                                className: `framer-1gtvoye`,
                                                "data-framer-name": `Drag in source nodes`,
                                                fonts: [`GF;IBM Plex Sans-600`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                q(`v37`, g) ??
                                                /*#__PURE__*/ u(a, {
                                                  children: [
                                                    /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                        "--framer-font-size": `13px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `400`,
                                                        "--framer-letter-spacing": `0px`,
                                                        "--framer-line-height": `21.45px`,
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `rgb(107, 114, 128)`,
                                                      },
                                                      children: `将协议、系统、API 或`,
                                                    }),
                                                    /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                        "--framer-font-size": `13px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `400`,
                                                        "--framer-letter-spacing": `0px`,
                                                        "--framer-line-height": `21.45px`,
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `rgb(107, 114, 128)`,
                                                      },
                                                      children: `数据库节点添加到工作区中，定义`,
                                                    }),
                                                    /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                        "--framer-font-size": `13px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `400`,
                                                        "--framer-letter-spacing": `0px`,
                                                        "--framer-line-height": `21.45px`,
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `rgb(107, 114, 128)`,
                                                      },
                                                      children: `数据的来源。`,
                                                    }),
                                                  ],
                                                }),
                                              className: `framer-s01yfk`,
                                              "data-framer-name": `Add nodes for protocols, systems, APIs, or databases into the workspace to define where data comes from.`,
                                              fonts: [`GF;IBM Plex Sans-regular`],
                                              verticalAlignment: `bottom`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ u(`div`, {
                                      className: `framer-1dumm32`,
                                      "data-framer-name": `Frame 2147223968`,
                                      children: [
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-xjd7m2`,
                                          "data-border": !0,
                                          "data-framer-name": `Frame 2147223922`,
                                          children: /*#__PURE__*/ u(`div`, {
                                            className: `framer-182blgl`,
                                            "data-framer-name": `transform`,
                                            children: [
                                              /*#__PURE__*/ l(`div`, {
                                                className: `framer-1o0o92i`,
                                                "data-framer-name": `Vector`,
                                              }),
                                              /*#__PURE__*/ l(S, {
                                                className: `framer-mnjkcd`,
                                                "data-framer-name": `Vector`,
                                                opacity: 1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8 8"><path d="M 1 4 C 1 4.796 1.316 5.559 1.879 6.121 C 2.441 6.684 3.204 7 4 7 C 4.796 7 5.559 6.684 6.121 6.121 C 6.684 5.559 7 4.796 7 4 C 7 3.204 6.684 2.441 6.121 1.879 C 5.559 1.316 4.796 1 4 1 C 3.204 1 2.441 1.316 1.879 1.879 C 1.316 2.441 1 3.204 1 4 Z" fill="transparent" stroke-width="2" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                svgContentId: 10499553800,
                                                withExternalLayout: !0,
                                              }),
                                              /*#__PURE__*/ l(S, {
                                                className: `framer-1xb7qap`,
                                                "data-framer-name": `Vector`,
                                                opacity: 1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 10"><path d="M 9 9 L 9 6 C 9 5.47 8.789 4.961 8.414 4.586 C 8.039 4.211 7.53 4 7 4 L 1 4 M 1 4 L 4 7 M 1 4 L 4 1" fill="transparent" stroke-width="2" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                svgContentId: 11928646668,
                                                withExternalLayout: !0,
                                              }),
                                              /*#__PURE__*/ l(S, {
                                                className: `framer-nf74o8`,
                                                "data-framer-name": `Vector`,
                                                opacity: 1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 10"><path d="M 1 1 L 1 4 C 1 4.53 1.211 5.039 1.586 5.414 C 1.961 5.789 2.47 6 3 6 L 9 6 M 9 6 L 6 3 M 9 6 L 6 9" fill="transparent" stroke-width="2" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                svgContentId: 11919580272,
                                                withExternalLayout: !0,
                                              }),
                                              /*#__PURE__*/ l(S, {
                                                className: `framer-dh6jk0`,
                                                "data-framer-name": `Vector`,
                                                opacity: 1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8 8"><path d="M 1 4 C 1 4.796 1.316 5.559 1.879 6.121 C 2.441 6.684 3.204 7 4 7 C 4.796 7 5.559 6.684 6.121 6.121 C 6.684 5.559 7 4.796 7 4 C 7 3.204 6.684 2.441 6.121 1.879 C 5.559 1.316 4.796 1 4 1 C 3.204 1 2.441 1.316 1.879 1.879 C 1.316 2.441 1 3.204 1 4 Z" fill="transparent" stroke-width="2" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                svgContentId: 9264249209,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        }),
                                        I() &&
                                          /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              q(`v38`, g) ??
                                              /*#__PURE__*/ l(a, {
                                                children: /*#__PURE__*/ l(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                    "--framer-font-family": `"IBM Plex Mono", monospace`,
                                                    "--framer-font-size": `14px`,
                                                    "--framer-letter-spacing": `-0.2px`,
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `rgb(115, 178, 0)`,
                                                    "--framer-text-transform": `uppercase`,
                                                  },
                                                  children: `02`,
                                                }),
                                              }),
                                            className: `framer-1fg5nas hidden-1emxzb8`,
                                            "data-framer-name": `02`,
                                            fonts: [`GF;IBM Plex Mono-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        /*#__PURE__*/ u(`div`, {
                                          className: `framer-12f5cv7`,
                                          "data-framer-name": `Container`,
                                          children: [
                                            /*#__PURE__*/ l(R, {
                                              breakpoint: D,
                                              overrides: {
                                                ns_0OUzlj: {
                                                  children:
                                                    q(`v40`, g) ??
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
                                                          "--framer-text-alignment": `center`,
                                                          "--framer-text-color": `rgb(17, 24, 39)`,
                                                        },
                                                        children: /*#__PURE__*/ l(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                            "--framer-font-family": `"IBM Plex Mono"`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `400`,
                                                            "--framer-letter-spacing": `-0.2px`,
                                                            "--framer-text-color": `rgb(115, 178, 0)`,
                                                            "--framer-text-transform": `uppercase`,
                                                          },
                                                          children: `02 连接并转换`,
                                                        }),
                                                      }),
                                                    }),
                                                  fonts: [
                                                    `GF;Poppins-600`,
                                                    `GF;IBM Plex Mono-regular`,
                                                  ],
                                                },
                                              },
                                              children: /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  q(`v39`, g) ??
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
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `rgb(17, 24, 39)`,
                                                      },
                                                      children: `连接并转换`,
                                                    }),
                                                  }),
                                                className: `framer-11lbyx4`,
                                                "data-framer-name": `Connect and transform`,
                                                fonts: [`GF;IBM Plex Sans-600`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                q(`v41`, g) ??
                                                /*#__PURE__*/ u(a, {
                                                  children: [
                                                    /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                        "--framer-font-size": `13px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `400`,
                                                        "--framer-letter-spacing": `0px`,
                                                        "--framer-line-height": `21.45px`,
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `rgb(107, 114, 128)`,
                                                      },
                                                      children: `连接源节点并过滤源数据，`,
                                                    }),
                                                    /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                        "--framer-font-size": `13px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `400`,
                                                        "--framer-letter-spacing": `0px`,
                                                        "--framer-line-height": `21.45px`,
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `rgb(107, 114, 128)`,
                                                      },
                                                      children: `映射字段、规范化格式、丰富`,
                                                    }),
                                                    /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                        "--framer-font-size": `13px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `400`,
                                                        "--framer-letter-spacing": `0px`,
                                                        "--framer-line-height": `21.45px`,
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `rgb(107, 114, 128)`,
                                                      },
                                                      children: `上下文，并应用规则。`,
                                                    }),
                                                  ],
                                                }),
                                              className: `framer-asruj9`,
                                              "data-framer-name": `Wire nodes together to filter payloads, map fields, normalize formats, enrich context, and apply rules.`,
                                              fonts: [`GF;IBM Plex Sans-regular`],
                                              verticalAlignment: `bottom`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ u(`div`, {
                                      className: `framer-1xyrvim`,
                                      "data-framer-name": `Frame 2147223969`,
                                      children: [
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-1v6b67w`,
                                          "data-border": !0,
                                          "data-framer-name": `Frame 2147223922`,
                                          children: /*#__PURE__*/ u(`div`, {
                                            className: `framer-171fg6e`,
                                            "data-framer-name": `transition-top`,
                                            children: [
                                              /*#__PURE__*/ l(`div`, {
                                                className: `framer-skfs2h`,
                                                "data-framer-name": `Vector`,
                                              }),
                                              /*#__PURE__*/ l(S, {
                                                className: `framer-1vym7tq`,
                                                "data-framer-name": `Vector`,
                                                opacity: 1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 5"><path d="M 19 4 C 19 3.204 18.684 2.441 18.121 1.879 C 17.559 1.316 16.796 1 16 1 L 4 1 C 3.204 1 2.441 1.316 1.879 1.879 C 1.316 2.441 1 3.204 1 4" fill="transparent" stroke-width="2" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                svgContentId: 11949307361,
                                                withExternalLayout: !0,
                                              }),
                                              /*#__PURE__*/ l(S, {
                                                className: `framer-o5vk4t`,
                                                "data-framer-name": `Vector`,
                                                opacity: 1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 8"><path d="M 4 7 L 16 7 C 16.796 7 17.559 6.684 18.121 6.121 C 18.684 5.559 19 4.796 19 4 C 19 3.204 18.684 2.441 18.121 1.879 C 17.559 1.316 16.796 1 16 1 L 4 1 C 3.204 1 2.441 1.316 1.879 1.879 C 1.316 2.441 1 3.204 1 4 C 1 4.796 1.316 5.559 1.879 6.121 C 2.441 6.684 3.204 7 4 7 Z" fill="transparent" stroke-width="2" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                svgContentId: 9816949478,
                                                withExternalLayout: !0,
                                              }),
                                              /*#__PURE__*/ l(S, {
                                                className: `framer-1chnt8e`,
                                                "data-framer-name": `Vector`,
                                                fill: `rgba(0,0,0,1)`,
                                                intrinsicHeight: 12,
                                                intrinsicWidth: 4,
                                                svg: `<svg width="4" height="12" viewBox="-1 -1 4 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 9V1" stroke="#73B200" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                                withExternalLayout: !0,
                                              }),
                                              /*#__PURE__*/ l(S, {
                                                className: `framer-1mcb7t3`,
                                                "data-framer-name": `Vector`,
                                                opacity: 1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8 5"><path d="M 1 4 L 4 1 L 7 4" fill="transparent" stroke-width="2" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                svgContentId: 11580126884,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        }),
                                        I() &&
                                          /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              q(`v42`, g) ??
                                              /*#__PURE__*/ l(a, {
                                                children: /*#__PURE__*/ l(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                    "--framer-font-family": `"IBM Plex Mono", monospace`,
                                                    "--framer-font-size": `14px`,
                                                    "--framer-letter-spacing": `-0.2px`,
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `rgb(115, 178, 0)`,
                                                    "--framer-text-transform": `uppercase`,
                                                  },
                                                  children: `03`,
                                                }),
                                              }),
                                            className: `framer-j95hrk hidden-1emxzb8`,
                                            "data-framer-name": `03`,
                                            fonts: [`GF;IBM Plex Mono-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        /*#__PURE__*/ u(`div`, {
                                          className: `framer-na1gx7`,
                                          "data-framer-name": `Container`,
                                          children: [
                                            /*#__PURE__*/ l(R, {
                                              breakpoint: D,
                                              overrides: {
                                                ns_0OUzlj: {
                                                  children:
                                                    q(`v44`, g) ??
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
                                                          "--framer-text-alignment": `center`,
                                                          "--framer-text-color": `rgb(17, 24, 39)`,
                                                        },
                                                        children: /*#__PURE__*/ l(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                            "--framer-font-family": `"IBM Plex Mono"`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `400`,
                                                            "--framer-letter-spacing": `-0.2px`,
                                                            "--framer-text-color": `rgb(115, 178, 0)`,
                                                            "--framer-text-transform": `uppercase`,
                                                          },
                                                          children: `03 路由和发布`,
                                                        }),
                                                      }),
                                                    }),
                                                  fonts: [
                                                    `GF;Poppins-600`,
                                                    `GF;IBM Plex Mono-regular`,
                                                  ],
                                                },
                                              },
                                              children: /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  q(`v43`, g) ??
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
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `rgb(17, 24, 39)`,
                                                      },
                                                      children: `分发并发布`,
                                                    }),
                                                  }),
                                                className: `framer-l7hbqj`,
                                                "data-framer-name": `Route and publish`,
                                                fonts: [`GF;IBM Plex Sans-600`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                q(`v45`, g) ??
                                                /*#__PURE__*/ u(a, {
                                                  children: [
                                                    /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                        "--framer-font-size": `13px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `400`,
                                                        "--framer-letter-spacing": `0px`,
                                                        "--framer-line-height": `21.45px`,
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `rgb(107, 114, 128)`,
                                                      },
                                                      children: `将处理后的数据发送到 Tier0 topic，`,
                                                    }),
                                                    /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                        "--framer-font-size": `13px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `400`,
                                                        "--framer-letter-spacing": `0px`,
                                                        "--framer-line-height": `21.45px`,
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `rgb(107, 114, 128)`,
                                                      },
                                                      children: `下游系统、看板、告警、`,
                                                    }),
                                                    /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                        "--framer-font-size": `13px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `400`,
                                                        "--framer-letter-spacing": `0px`,
                                                        "--framer-line-height": `21.45px`,
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `rgb(107, 114, 128)`,
                                                      },
                                                      children: `或应用程序均可使用。`,
                                                    }),
                                                  ],
                                                }),
                                              className: `framer-1a7gnqx`,
                                              "data-framer-name": `Send processed data to Tier0 topics, dashboards, alerts, downstream systems, or applications based on logic.`,
                                              fonts: [`GF;IBM Plex Sans-regular`],
                                              verticalAlignment: `bottom`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ u(`div`, {
                                      className: `framer-xuppgy`,
                                      "data-framer-name": `Frame 2147223970`,
                                      children: [
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-9h5k47`,
                                          "data-border": !0,
                                          "data-framer-name": `Frame 2147223922`,
                                          children: /*#__PURE__*/ l(`div`, {
                                            className: `framer-1uzs6f7`,
                                            "data-framer-name": `repeat-2`,
                                            children: /*#__PURE__*/ l(S, {
                                              className: `framer-y8a0rc`,
                                              "data-framer-name": `Vector`,
                                              opacity: 1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22 14"><path d="M 1 4 L 4 1 M 4 1 L 7 4 M 4 1 L 4 11 C 4 11.53 4.211 12.039 4.586 12.414 C 4.961 12.789 5.47 13 6 13 L 12 13 M 21 10 L 18 13 M 18 13 L 15 10 M 18 13 L 18 3 C 18 2.47 17.789 1.961 17.414 1.586 C 17.039 1.211 16.53 1 16 1 L 10 1" fill="transparent" stroke-width="2" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                              svgContentId: 9232752729,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                        I() &&
                                          /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              q(`v46`, g) ??
                                              /*#__PURE__*/ l(a, {
                                                children: /*#__PURE__*/ l(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                    "--framer-font-family": `"IBM Plex Mono", monospace`,
                                                    "--framer-font-size": `14px`,
                                                    "--framer-letter-spacing": `-0.2px`,
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `rgb(115, 178, 0)`,
                                                    "--framer-text-transform": `uppercase`,
                                                  },
                                                  children: `04`,
                                                }),
                                              }),
                                            className: `framer-8nflc3 hidden-1emxzb8`,
                                            "data-framer-name": `04`,
                                            fonts: [`GF;IBM Plex Mono-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        /*#__PURE__*/ u(`div`, {
                                          className: `framer-1j1youy`,
                                          "data-framer-name": `Container`,
                                          children: [
                                            /*#__PURE__*/ l(R, {
                                              breakpoint: D,
                                              overrides: {
                                                ns_0OUzlj: {
                                                  children:
                                                    q(`v48`, g) ??
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
                                                          "--framer-text-alignment": `center`,
                                                          "--framer-text-color": `rgb(17, 24, 39)`,
                                                        },
                                                        children: /*#__PURE__*/ l(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                                            "--framer-font-family": `"IBM Plex Mono"`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `400`,
                                                            "--framer-letter-spacing": `-0.2px`,
                                                            "--framer-text-color": `rgb(115, 178, 0)`,
                                                            "--framer-text-transform": `uppercase`,
                                                          },
                                                          children: `04 部署和复用`,
                                                        }),
                                                      }),
                                                    }),
                                                  fonts: [
                                                    `GF;Poppins-600`,
                                                    `GF;IBM Plex Mono-regular`,
                                                  ],
                                                },
                                              },
                                              children: /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  q(`v47`, g) ??
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
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `rgb(17, 24, 39)`,
                                                      },
                                                      children: `部署并复用`,
                                                    }),
                                                  }),
                                                className: `framer-zom7m8`,
                                                "data-framer-name": `Deploy and reuse`,
                                                fonts: [`GF;IBM Plex Sans-600`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                q(`v49`, g) ??
                                                /*#__PURE__*/ u(a, {
                                                  children: [
                                                    /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                        "--framer-font-size": `13px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `400`,
                                                        "--framer-letter-spacing": `0px`,
                                                        "--framer-line-height": `21.45px`,
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `rgb(107, 114, 128)`,
                                                      },
                                                      children: `部署流程并复用，可跨多个生产线、站点或`,
                                                    }),
                                                    /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                        "--framer-font-size": `13px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `400`,
                                                        "--framer-letter-spacing": `0px`,
                                                        "--framer-line-height": `21.45px`,
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `rgb(107, 114, 128)`,
                                                      },
                                                      children: `应用程序采集数据，并减少大量重复的`,
                                                    }),
                                                    /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                        "--framer-font-size": `13px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `400`,
                                                        "--framer-letter-spacing": `0px`,
                                                        "--framer-line-height": `21.45px`,
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `rgb(107, 114, 128)`,
                                                      },
                                                      children: `工程工作。`,
                                                    }),
                                                    /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                        "--framer-font-size": `13px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `400`,
                                                        "--framer-letter-spacing": `0px`,
                                                        "--framer-line-height": `21.45px`,
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `rgb(107, 114, 128)`,
                                                      },
                                                    }),
                                                  ],
                                                }),
                                              className: `framer-1e1pcnx`,
                                              "data-framer-name": `Deploy the flow and reuse the same pattern across multiple lines, sites, or applications with much less repeated engineering work.`,
                                              fonts: [`GF;IBM Plex Sans-regular`],
                                              verticalAlignment: `bottom`,
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
                            /*#__PURE__*/ l(`div`, {
                              className: `framer-1s53c56`,
                              "data-framer-name": `Group 1321316962`,
                              children: /*#__PURE__*/ l(R, {
                                breakpoint: D,
                                overrides: {
                                  ns_0OUzlj: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: y((v?.y || 0) + 5647.6975),
                                      pixelHeight: 1959,
                                      pixelWidth: 4096,
                                      sizes: `302.11px`,
                                      src: `../../assets/images/wbNiBKaKMrIbBGK95tcXdb48w-7f1bd2.png`,
                                      srcSet: `../../assets/images/wbNiBKaKMrIbBGK95tcXdb48w-f7ef9b.png 512w,../../assets/images/wbNiBKaKMrIbBGK95tcXdb48w-10daa3.png 1024w,../../assets/images/wbNiBKaKMrIbBGK95tcXdb48w.png 2048w,../../assets/images/wbNiBKaKMrIbBGK95tcXdb48w-7f1bd2.png 4096w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ l(j, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: y((v?.y || 0) + 2863.91),
                                    pixelHeight: 1959,
                                    pixelWidth: 4096,
                                    sizes: `1280px`,
                                    src: `../../assets/images/wbNiBKaKMrIbBGK95tcXdb48w-7f1bd2.png`,
                                    srcSet: `../../assets/images/wbNiBKaKMrIbBGK95tcXdb48w-f7ef9b.png 512w,../../assets/images/wbNiBKaKMrIbBGK95tcXdb48w-10daa3.png 1024w,../../assets/images/wbNiBKaKMrIbBGK95tcXdb48w.png 2048w,../../assets/images/wbNiBKaKMrIbBGK95tcXdb48w-7f1bd2.png 4096w`,
                                  },
                                  className: `framer-i3j9q0`,
                                  "data-border": !0,
                                  "data-framer-name": `60bac4978893593a89b87c5fcfa85320 1`,
                                }),
                              }),
                            }),
                            P() &&
                              /*#__PURE__*/ u(`div`, {
                                className: `framer-1b4bxrl hidden-1803tfs`,
                                "data-border": !0,
                                "data-framer-name": `Container`,
                                children: [
                                  /*#__PURE__*/ l(S, {
                                    className: `framer-1l5ejpr`,
                                    "data-framer-name": `Frame`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 24,
                                    intrinsicWidth: 24,
                                    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#73B200" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16V12" stroke="#73B200" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8H12.01" stroke="#73B200" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ l(m, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      q(`v50`, g) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7UG9wcGlucy1yZWd1bGFy`,
                                            "--framer-font-family": `"Poppins"`,
                                            "--framer-font-size": `8px`,
                                            "--framer-font-style": `normal`,
                                            "--framer-font-variation-axes": `normal`,
                                            "--framer-font-weight": `400`,
                                            "--framer-letter-spacing": `0px`,
                                            "--framer-line-height": `12.745312500000002px`,
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                          },
                                          children: /*#__PURE__*/ l(`span`, {
                                            style: {
                                              "--font-selector": `RlM7UG9wcGlucy1yZWd1bGFy`,
                                              "--framer-font-family": `"Poppins"`,
                                              "--framer-font-size": `8px`,
                                              "--framer-font-style": `normal`,
                                              "--framer-font-variation-axes": `normal`,
                                              "--framer-font-weight": `400`,
                                              "--framer-letter-spacing": `0px`,
                                              "--framer-text-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                            },
                                            children: `相比为每个需求单独开发接口，基于数据流的实现方式配置更快，也更易于维护。`,
                                          }),
                                        }),
                                      }),
                                    className: `framer-84pagj`,
                                    "data-framer-name": `Flow-based implementation enables faster configuration and easier maintenance than one-off custom interface development.`,
                                    fonts: [`FS;Poppins-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            I() &&
                              /*#__PURE__*/ u(`div`, {
                                className: `framer-1unrhyx hidden-1emxzb8`,
                                "data-border": !0,
                                "data-framer-name": `Container`,
                                children: [
                                  /*#__PURE__*/ l(S, {
                                    className: `framer-1w5yo7f`,
                                    "data-framer-name": `Frame`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 24,
                                    intrinsicWidth: 24,
                                    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#73B200" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16V12" stroke="#73B200" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8H12.01" stroke="#73B200" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ l(m, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      q(`v51`, g) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(`p`, {
                                          className: `framer-styles-preset-t1f9am`,
                                          "data-styles-preset": `IEBy192yC`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                          },
                                          children: /*#__PURE__*/ l(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                            },
                                            children: `相比为每个需求单独开发接口，基于数据流的实现方式配置更快，也更易于维护。`,
                                          }),
                                        }),
                                      }),
                                    className: `framer-15qoooe`,
                                    "data-framer-name": `Flow-based implementation enables faster configuration and easier maintenance than one-off custom interface development.`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        /*#__PURE__*/ l(S, {
                          className: `framer-fgms2a`,
                          "data-framer-name": `Vector 4200`,
                          fill: `rgba(0,0,0,1)`,
                          intrinsicHeight: 3,
                          intrinsicWidth: 1282,
                          svg: `<svg width="1282" height="3" viewBox="-1 -1 1282 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.5H1280" stroke="black" stroke-opacity="0.2"/>
</svg>
`,
                          withExternalLayout: !0,
                        }),
                        /*#__PURE__*/ u(J, {
                          __framer__animate: { transition: Q },
                          __framer__animateOnce: !0,
                          __framer__enter: Z,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-di3w8q`,
                          "data-framer-name": `Frame 2147223974`,
                          children: [
                            /*#__PURE__*/ u(`div`, {
                              className: `framer-10ml3n6`,
                              "data-framer-name": `Container`,
                              children: [
                                /*#__PURE__*/ l(`div`, {
                                  className: `framer-1qcw0s2`,
                                  "data-border": !0,
                                  "data-framer-name": `Text`,
                                  children: /*#__PURE__*/ l(m, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      q(`v52`, g) ??
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
                                            "--framer-text-color": `rgb(115, 178, 0)`,
                                            "--framer-text-transform": `uppercase`,
                                          },
                                          children: `数据类型`,
                                        }),
                                      }),
                                    className: `framer-1qoxuve`,
                                    "data-framer-name": `Data Types`,
                                    fonts: [`GF;IBM Plex Mono-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                /*#__PURE__*/ l(`div`, {
                                  className: `framer-1bclw06`,
                                  "data-framer-name": `Heading 2`,
                                  children: /*#__PURE__*/ l(m, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      q(`v53`, g) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(`h2`, {
                                          className: `framer-styles-preset-zg5ubw`,
                                          "data-styles-preset": `VF7HZTiAg`,
                                          dir: `auto`,
                                          children: `Tier0 可以采集什么数据`,
                                        }),
                                      }),
                                    className: `framer-u17udn`,
                                    "data-framer-name": `How Data Collection Is Built`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                P() &&
                                  /*#__PURE__*/ l(`div`, {
                                    className: `framer-a6zrec hidden-1803tfs`,
                                    children: /*#__PURE__*/ u(`div`, {
                                      className: `framer-1p96vzv`,
                                      "data-border": !0,
                                      "data-framer-name": `Table`,
                                      children: [
                                        /*#__PURE__*/ u(`div`, {
                                          className: `framer-f7xbxi`,
                                          "data-framer-name": `Table Row`,
                                          children: [
                                            /*#__PURE__*/ l(`div`, {
                                              className: `framer-m4eewc`,
                                              "data-border": !0,
                                              "data-framer-name": `Header Cell`,
                                              children: /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  q(`v54`, g) ??
                                                  /*#__PURE__*/ l(a, {
                                                    children: /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggTW9uby02MDA=`,
                                                        "--framer-font-family": `"IBM Plex Mono"`,
                                                        "--framer-font-size": `6px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `600`,
                                                        "--framer-letter-spacing": `0.32px`,
                                                        "--framer-text-color": `rgb(107, 114, 128)`,
                                                        "--framer-text-transform": `uppercase`,
                                                      },
                                                      children: `类别`,
                                                    }),
                                                  }),
                                                className: `framer-1kgjsp4`,
                                                "data-framer-name": `Category`,
                                                fonts: [`GF;IBM Plex Mono-600`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            /*#__PURE__*/ l(`div`, {
                                              className: `framer-u7ig2x`,
                                              "data-border": !0,
                                              "data-framer-name": `Header Cell`,
                                              children: /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  q(`v55`, g) ??
                                                  /*#__PURE__*/ l(a, {
                                                    children: /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggTW9uby02MDA=`,
                                                        "--framer-font-family": `"IBM Plex Mono"`,
                                                        "--framer-font-size": `6px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `600`,
                                                        "--framer-letter-spacing": `0.32px`,
                                                        "--framer-text-color": `rgb(107, 114, 128)`,
                                                        "--framer-text-transform": `uppercase`,
                                                      },
                                                      children: `示例`,
                                                    }),
                                                  }),
                                                className: `framer-r4ywio`,
                                                "data-framer-name": `Examples`,
                                                fonts: [`GF;IBM Plex Mono-600`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ u(`div`, {
                                          className: `framer-157hcou`,
                                          "data-framer-name": `Table Body`,
                                          children: [
                                            /*#__PURE__*/ u(`div`, {
                                              className: `framer-18aouf0`,
                                              "data-framer-name": `Table Row`,
                                              children: [
                                                /*#__PURE__*/ l(`div`, {
                                                  className: `framer-9oge8m`,
                                                  "data-border": !0,
                                                  "data-framer-name": `Table Cell`,
                                                  children: /*#__PURE__*/ u(`div`, {
                                                    className: `framer-gzyyxz`,
                                                    "data-framer-name": `Container`,
                                                    children: [
                                                      /*#__PURE__*/ l(`div`, {
                                                        className: `framer-zrvxgs`,
                                                        "data-framer-name": `Container`,
                                                      }),
                                                      /*#__PURE__*/ l(m, {
                                                        __fromCanvasComponent: !0,
                                                        children:
                                                          q(`v56`, g) ??
                                                          /*#__PURE__*/ l(a, {
                                                            children: /*#__PURE__*/ l(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                                                                "--framer-font-family": `Poppins`,
                                                                "--framer-font-size": `7px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `600`,
                                                                "--framer-letter-spacing": `0px`,
                                                                "--framer-text-color": `rgb(17, 24, 39)`,
                                                              },
                                                              children: `边缘和设备数据`,
                                                            }),
                                                          }),
                                                        className: `framer-1hb9bpn`,
                                                        "data-framer-name": `Edge and Device Data`,
                                                        fonts: [`GF;Poppins-600`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                /*#__PURE__*/ l(`div`, {
                                                  className: `framer-1xvr7k3`,
                                                  "data-border": !0,
                                                  "data-framer-name": `Table Cell`,
                                                  children: /*#__PURE__*/ l(`div`, {
                                                    className: `framer-13zsefz`,
                                                    "data-framer-name": `Container`,
                                                    children: /*#__PURE__*/ l(m, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        q(`v57`, g) ??
                                                        /*#__PURE__*/ l(a, {
                                                          children: /*#__PURE__*/ l(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                              "--framer-font-family": `"IBM Plex Sans"`,
                                                              "--framer-font-size": `7px`,
                                                              "--framer-font-style": `normal`,
                                                              "--framer-font-variation-axes": `normal`,
                                                              "--framer-font-weight": `400`,
                                                              "--framer-letter-spacing": `0px`,
                                                              "--framer-line-height": `11.217908082408876px`,
                                                              "--framer-text-color": `rgb(107, 114, 128)`,
                                                            },
                                                            children: /*#__PURE__*/ l(`span`, {
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                                "--framer-font-size": `7px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `400`,
                                                                "--framer-letter-spacing": `0px`,
                                                                "--framer-text-color": `rgb(107, 114, 128)`,
                                                              },
                                                              children: `设备状态、计数器、PLC 变量、过程值、传感器读数、设备遥测和网关报文`,
                                                            }),
                                                          }),
                                                        }),
                                                      className: `framer-19f2v1`,
                                                      "data-framer-name": `Machine states, counters, PLC tags, process values`,
                                                      fonts: [`GF;IBM Plex Sans-regular`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ u(`div`, {
                                              className: `framer-tc0tci`,
                                              "data-framer-name": `Table Row`,
                                              children: [
                                                /*#__PURE__*/ l(`div`, {
                                                  className: `framer-ulvjlq`,
                                                  "data-border": !0,
                                                  "data-framer-name": `Table Cell`,
                                                  children: /*#__PURE__*/ u(`div`, {
                                                    className: `framer-1m80123`,
                                                    "data-framer-name": `Container`,
                                                    children: [
                                                      /*#__PURE__*/ l(`div`, {
                                                        className: `framer-f1o7y5`,
                                                        "data-framer-name": `Container`,
                                                      }),
                                                      /*#__PURE__*/ l(m, {
                                                        __fromCanvasComponent: !0,
                                                        children:
                                                          q(`v58`, g) ??
                                                          /*#__PURE__*/ l(a, {
                                                            children: /*#__PURE__*/ l(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `RlM7UG9wcGlucy1zZW1pYm9sZA==`,
                                                                "--framer-font-family": `"Poppins"`,
                                                                "--framer-font-size": `7px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `600`,
                                                                "--framer-letter-spacing": `0px`,
                                                                "--framer-text-color": `rgb(17, 24, 39)`,
                                                              },
                                                              children: /*#__PURE__*/ l(`span`, {
                                                                style: {
                                                                  "--font-selector": `RlM7UG9wcGlucy1zZW1pYm9sZA==`,
                                                                  "--framer-font-family": `"Poppins"`,
                                                                  "--framer-font-size": `7px`,
                                                                  "--framer-font-style": `normal`,
                                                                  "--framer-font-variation-axes": `normal`,
                                                                  "--framer-font-weight": `600`,
                                                                  "--framer-letter-spacing": `0px`,
                                                                  "--framer-text-color": `rgb(17, 24, 39)`,
                                                                },
                                                                children: `运营应用数据`,
                                                              }),
                                                            }),
                                                          }),
                                                        className: `framer-umznp3`,
                                                        "data-framer-name": `Operational Application Data`,
                                                        fonts: [`FS;Poppins-semibold`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                /*#__PURE__*/ l(`div`, {
                                                  className: `framer-1d6jwt`,
                                                  "data-border": !0,
                                                  "data-framer-name": `Table Cell`,
                                                  children: /*#__PURE__*/ l(`div`, {
                                                    className: `framer-wv8hqp`,
                                                    "data-framer-name": `Container`,
                                                    children: /*#__PURE__*/ l(m, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        q(`v59`, g) ??
                                                        /*#__PURE__*/ l(a, {
                                                          children: /*#__PURE__*/ l(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                              "--framer-font-family": `"IBM Plex Sans"`,
                                                              "--framer-font-size": `7px`,
                                                              "--framer-font-style": `normal`,
                                                              "--framer-font-variation-axes": `normal`,
                                                              "--framer-font-weight": `400`,
                                                              "--framer-letter-spacing": `0px`,
                                                              "--framer-line-height": `11.217908082408876px`,
                                                              "--framer-text-color": `rgb(107, 114, 128)`,
                                                            },
                                                            children: /*#__PURE__*/ l(`span`, {
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                                "--framer-font-size": `7px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `400`,
                                                                "--framer-letter-spacing": `0px`,
                                                                "--framer-text-color": `rgb(107, 114, 128)`,
                                                              },
                                                              children: `工单、生产记录、质量结果、库存变动和仓储事件`,
                                                            }),
                                                          }),
                                                        }),
                                                      className: `framer-1qmaexu`,
                                                      "data-framer-name": `Work orders, production records, quality results, `,
                                                      fonts: [`GF;IBM Plex Sans-regular`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ u(`div`, {
                                              className: `framer-s153eu`,
                                              "data-framer-name": `Table Row`,
                                              children: [
                                                /*#__PURE__*/ l(`div`, {
                                                  className: `framer-1h18sv2`,
                                                  "data-border": !0,
                                                  "data-framer-name": `Table Cell`,
                                                  children: /*#__PURE__*/ u(`div`, {
                                                    className: `framer-cpoxz`,
                                                    "data-framer-name": `Container`,
                                                    children: [
                                                      /*#__PURE__*/ l(`div`, {
                                                        className: `framer-1o9mm9c`,
                                                        "data-framer-name": `Container`,
                                                      }),
                                                      /*#__PURE__*/ l(m, {
                                                        __fromCanvasComponent: !0,
                                                        children:
                                                          q(`v60`, g) ??
                                                          /*#__PURE__*/ l(a, {
                                                            children: /*#__PURE__*/ l(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                                                                "--framer-font-family": `Poppins`,
                                                                "--framer-font-size": `7px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `600`,
                                                                "--framer-letter-spacing": `0px`,
                                                                "--framer-text-color": `rgb(17, 24, 39)`,
                                                              },
                                                              children: `企业与业务数据`,
                                                            }),
                                                          }),
                                                        className: `framer-n1dom8`,
                                                        "data-framer-name": `Enterprise & Business Data`,
                                                        fonts: [`GF;Poppins-600`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                /*#__PURE__*/ l(`div`, {
                                                  className: `framer-1wykr59`,
                                                  "data-border": !0,
                                                  "data-framer-name": `Table Cell`,
                                                  children: /*#__PURE__*/ l(`div`, {
                                                    className: `framer-n200ze`,
                                                    "data-framer-name": `Container`,
                                                    children: /*#__PURE__*/ l(m, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        q(`v61`, g) ??
                                                        /*#__PURE__*/ l(a, {
                                                          children: /*#__PURE__*/ l(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                              "--framer-font-family": `"IBM Plex Sans"`,
                                                              "--framer-font-size": `7px`,
                                                              "--framer-font-style": `normal`,
                                                              "--framer-font-variation-axes": `normal`,
                                                              "--framer-font-weight": `400`,
                                                              "--framer-letter-spacing": `0px`,
                                                              "--framer-line-height": `11.217908082408876px`,
                                                              "--framer-text-color": `rgb(107, 114, 128)`,
                                                            },
                                                            children: /*#__PURE__*/ l(`span`, {
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                                "--framer-font-size": `7px`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `400`,
                                                                "--framer-letter-spacing": `0px`,
                                                                "--framer-text-color": `rgb(107, 114, 128)`,
                                                              },
                                                              children: `ERP 主数据、订单数据、发运记录、API 响应和业务交易记录`,
                                                            }),
                                                          }),
                                                        }),
                                                      className: `framer-zyssz9`,
                                                      "data-framer-name": `ERP master data, order data, shipment records, API`,
                                                      fonts: [`GF;IBM Plex Sans-regular`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ u(`div`, {
                                              className: `framer-afr5gr`,
                                              "data-framer-name": `Table Row`,
                                              children: [
                                                /*#__PURE__*/ u(`div`, {
                                                  className: `framer-1b48dkf`,
                                                  "data-framer-name": `Table Cell`,
                                                  children: [
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-1ohoabl`,
                                                      "data-framer-name": `Container`,
                                                    }),
                                                    /*#__PURE__*/ l(m, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        q(`v62`, g) ??
                                                        /*#__PURE__*/ l(a, {
                                                          children: /*#__PURE__*/ l(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                                                              "--framer-font-family": `Poppins`,
                                                              "--framer-font-size": `7px`,
                                                              "--framer-font-style": `normal`,
                                                              "--framer-font-variation-axes": `normal`,
                                                              "--framer-font-weight": `600`,
                                                              "--framer-letter-spacing": `0px`,
                                                              "--framer-text-color": `rgb(17, 24, 39)`,
                                                            },
                                                            children: `文件和结构化数据`,
                                                          }),
                                                        }),
                                                      className: `framer-1bgaxu`,
                                                      "data-framer-name": `Files and Structured Data`,
                                                      fonts: [`GF;Poppins-600`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ l(`div`, {
                                                  className: `framer-1n0tjfn`,
                                                  "data-framer-name": `Table Cell`,
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                q(`v63`, g) ??
                                                /*#__PURE__*/ l(a, {
                                                  children: /*#__PURE__*/ l(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `7px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `400`,
                                                      "--framer-letter-spacing": `0px`,
                                                      "--framer-line-height": `11.217908082408876px`,
                                                      "--framer-text-color": `rgb(107, 114, 128)`,
                                                    },
                                                    children: /*#__PURE__*/ l(`span`, {
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                        "--framer-font-size": `7px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `400`,
                                                        "--framer-letter-spacing": `0px`,
                                                        "--framer-text-color": `rgb(107, 114, 128)`,
                                                      },
                                                      children: `CSV 文件、数据库表、批量上传和定时提取`,
                                                    }),
                                                  }),
                                                }),
                                              className: `framer-1kbyyha`,
                                              "data-framer-name": `CSV files, database tables, batch uploads, schedul`,
                                              fonts: [`GF;IBM Plex Sans-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                              ],
                            }),
                            I() &&
                              /*#__PURE__*/ u(`div`, {
                                className: `framer-1h5gyet hidden-1emxzb8`,
                                "data-border": !0,
                                "data-framer-name": `Table`,
                                children: [
                                  /*#__PURE__*/ u(`div`, {
                                    className: `framer-vwf5qt`,
                                    "data-framer-name": `Table Row`,
                                    children: [
                                      /*#__PURE__*/ l(`div`, {
                                        className: `framer-1mptf8x`,
                                        "data-border": !0,
                                        "data-framer-name": `Header Cell`,
                                        children: /*#__PURE__*/ l(m, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            q(`v64`, g) ??
                                            /*#__PURE__*/ l(a, {
                                              children: /*#__PURE__*/ l(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7SUJNIFBsZXggTW9uby02MDA=`,
                                                  "--framer-font-family": `"IBM Plex Mono"`,
                                                  "--framer-font-size": `10px`,
                                                  "--framer-font-style": `normal`,
                                                  "--framer-font-variation-axes": `normal`,
                                                  "--framer-font-weight": `600`,
                                                  "--framer-letter-spacing": `0.6px`,
                                                  "--framer-text-color": `rgb(107, 114, 128)`,
                                                  "--framer-text-transform": `uppercase`,
                                                },
                                                children: `类别`,
                                              }),
                                            }),
                                          className: `framer-yj7mrn`,
                                          "data-framer-name": `Category`,
                                          fonts: [`GF;IBM Plex Mono-600`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      /*#__PURE__*/ l(`div`, {
                                        className: `framer-1yyy5f6`,
                                        "data-border": !0,
                                        "data-framer-name": `Header Cell`,
                                        children: /*#__PURE__*/ l(m, {
                                          __fromCanvasComponent: !0,
                                          children:
                                            q(`v65`, g) ??
                                            /*#__PURE__*/ l(a, {
                                              children: /*#__PURE__*/ l(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7SUJNIFBsZXggTW9uby02MDA=`,
                                                  "--framer-font-family": `"IBM Plex Mono"`,
                                                  "--framer-font-size": `10px`,
                                                  "--framer-font-style": `normal`,
                                                  "--framer-font-variation-axes": `normal`,
                                                  "--framer-font-weight": `600`,
                                                  "--framer-letter-spacing": `0.6px`,
                                                  "--framer-text-color": `rgb(107, 114, 128)`,
                                                  "--framer-text-transform": `uppercase`,
                                                },
                                                children: `示例`,
                                              }),
                                            }),
                                          className: `framer-1h1crbs`,
                                          "data-framer-name": `Examples`,
                                          fonts: [`GF;IBM Plex Mono-600`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ u(`div`, {
                                    className: `framer-19e4rz4`,
                                    "data-framer-name": `Table Body`,
                                    children: [
                                      /*#__PURE__*/ u(`div`, {
                                        className: `framer-t42g7z`,
                                        "data-framer-name": `Table Row`,
                                        children: [
                                          /*#__PURE__*/ l(`div`, {
                                            className: `framer-uyt70p`,
                                            "data-border": !0,
                                            "data-framer-name": `Table Cell`,
                                            children: /*#__PURE__*/ u(`div`, {
                                              className: `framer-18b64ty`,
                                              "data-framer-name": `Container`,
                                              children: [
                                                /*#__PURE__*/ l(`div`, {
                                                  className: `framer-1xvqx85`,
                                                  "data-framer-name": `Container`,
                                                }),
                                                /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    q(`v66`, g) ??
                                                    /*#__PURE__*/ l(a, {
                                                      children: /*#__PURE__*/ l(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `13px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `600`,
                                                          "--framer-letter-spacing": `0px`,
                                                          "--framer-text-color": `rgb(17, 24, 39)`,
                                                        },
                                                        children: `边缘和设备数据`,
                                                      }),
                                                    }),
                                                  className: `framer-taqznj`,
                                                  "data-framer-name": `Edge and Device Data`,
                                                  fonts: [`GF;IBM Plex Sans-600`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          }),
                                          /*#__PURE__*/ l(`div`, {
                                            className: `framer-192hjtf`,
                                            "data-border": !0,
                                            "data-framer-name": `Table Cell`,
                                            children: /*#__PURE__*/ l(`div`, {
                                              className: `framer-1ivjk25`,
                                              "data-framer-name": `Container`,
                                              children: /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  q(`v67`, g) ??
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
                                                        "--framer-line-height": `21.45px`,
                                                        "--framer-text-color": `rgb(107, 114, 128)`,
                                                      },
                                                      children: /*#__PURE__*/ l(`span`, {
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `13px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `400`,
                                                          "--framer-letter-spacing": `0px`,
                                                          "--framer-text-color": `rgb(107, 114, 128)`,
                                                        },
                                                        children: `设备状态、计数器、PLC 变量、过程值、传感器读数、设备遥测和网关报文`,
                                                      }),
                                                    }),
                                                  }),
                                                className: `framer-1lk6q14`,
                                                "data-framer-name": `Machine states, counters, PLC tags, process values`,
                                                fonts: [`GF;IBM Plex Sans-regular`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ u(`div`, {
                                        className: `framer-xo1u5o`,
                                        "data-framer-name": `Table Row`,
                                        children: [
                                          /*#__PURE__*/ l(`div`, {
                                            className: `framer-1ikfxd9`,
                                            "data-border": !0,
                                            "data-framer-name": `Table Cell`,
                                            children: /*#__PURE__*/ u(`div`, {
                                              className: `framer-xbcgbm`,
                                              "data-framer-name": `Container`,
                                              children: [
                                                /*#__PURE__*/ l(`div`, {
                                                  className: `framer-1sowpab`,
                                                  "data-framer-name": `Container`,
                                                }),
                                                /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    q(`v68`, g) ??
                                                    /*#__PURE__*/ l(a, {
                                                      children: /*#__PURE__*/ l(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `13px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `600`,
                                                          "--framer-letter-spacing": `0px`,
                                                          "--framer-text-color": `rgb(17, 24, 39)`,
                                                        },
                                                        children: /*#__PURE__*/ l(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `13px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `600`,
                                                            "--framer-letter-spacing": `0px`,
                                                            "--framer-text-color": `rgb(17, 24, 39)`,
                                                          },
                                                          children: `运营应用数据`,
                                                        }),
                                                      }),
                                                    }),
                                                  className: `framer-pb6fql`,
                                                  "data-framer-name": `Operational Application Data`,
                                                  fonts: [`GF;IBM Plex Sans-600`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          }),
                                          /*#__PURE__*/ l(`div`, {
                                            className: `framer-17ammhx`,
                                            "data-border": !0,
                                            "data-framer-name": `Table Cell`,
                                            children: /*#__PURE__*/ l(`div`, {
                                              className: `framer-we2kia`,
                                              "data-framer-name": `Container`,
                                              children: /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  q(`v69`, g) ??
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
                                                        "--framer-line-height": `21.45px`,
                                                        "--framer-text-color": `rgb(107, 114, 128)`,
                                                      },
                                                      children: /*#__PURE__*/ l(`span`, {
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `13px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `400`,
                                                          "--framer-letter-spacing": `0px`,
                                                          "--framer-text-color": `rgb(107, 114, 128)`,
                                                        },
                                                        children: `工单、生产记录、质量结果、库存变动和仓储事件`,
                                                      }),
                                                    }),
                                                  }),
                                                className: `framer-53j5mf`,
                                                "data-framer-name": `Work orders, production records, quality results, `,
                                                fonts: [`GF;IBM Plex Sans-regular`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ u(`div`, {
                                        className: `framer-19hwcd8`,
                                        "data-framer-name": `Table Row`,
                                        children: [
                                          /*#__PURE__*/ l(`div`, {
                                            className: `framer-1p72y5f`,
                                            "data-border": !0,
                                            "data-framer-name": `Table Cell`,
                                            children: /*#__PURE__*/ u(`div`, {
                                              className: `framer-jpmk9f`,
                                              "data-framer-name": `Container`,
                                              children: [
                                                /*#__PURE__*/ l(`div`, {
                                                  className: `framer-17s1wjk`,
                                                  "data-framer-name": `Container`,
                                                }),
                                                /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    q(`v70`, g) ??
                                                    /*#__PURE__*/ l(a, {
                                                      children: /*#__PURE__*/ l(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `13px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `600`,
                                                          "--framer-letter-spacing": `0px`,
                                                          "--framer-text-color": `rgb(17, 24, 39)`,
                                                        },
                                                        children: `企业与业务数据`,
                                                      }),
                                                    }),
                                                  className: `framer-1hzg89m`,
                                                  "data-framer-name": `Enterprise & Business Data`,
                                                  fonts: [`GF;IBM Plex Sans-600`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          }),
                                          /*#__PURE__*/ l(`div`, {
                                            className: `framer-aoqs75`,
                                            "data-border": !0,
                                            "data-framer-name": `Table Cell`,
                                            children: /*#__PURE__*/ l(`div`, {
                                              className: `framer-19ntg8n`,
                                              "data-framer-name": `Container`,
                                              children: /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  q(`v71`, g) ??
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
                                                        "--framer-line-height": `21.45px`,
                                                        "--framer-text-color": `rgb(107, 114, 128)`,
                                                      },
                                                      children: /*#__PURE__*/ l(`span`, {
                                                        style: {
                                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                          "--framer-font-family": `"IBM Plex Sans"`,
                                                          "--framer-font-size": `13px`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `400`,
                                                          "--framer-letter-spacing": `0px`,
                                                          "--framer-text-color": `rgb(107, 114, 128)`,
                                                        },
                                                        children: `ERP 主数据、订单数据、发运记录、API 响应和业务交易记录`,
                                                      }),
                                                    }),
                                                  }),
                                                className: `framer-1frday0`,
                                                "data-framer-name": `ERP master data, order data, shipment records, API`,
                                                fonts: [`GF;IBM Plex Sans-regular`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ u(`div`, {
                                        className: `framer-qf5qwi`,
                                        "data-framer-name": `Table Row`,
                                        children: [
                                          /*#__PURE__*/ u(`div`, {
                                            className: `framer-11w1k32`,
                                            "data-framer-name": `Table Cell`,
                                            children: [
                                              /*#__PURE__*/ l(`div`, {
                                                className: `framer-1csh3qj`,
                                                "data-framer-name": `Container`,
                                              }),
                                              /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  q(`v72`, g) ??
                                                  /*#__PURE__*/ l(a, {
                                                    children: /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                        "--framer-font-size": `13px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `600`,
                                                        "--framer-letter-spacing": `0px`,
                                                        "--framer-text-color": `rgb(17, 24, 39)`,
                                                      },
                                                      children: `文件和结构化数据`,
                                                    }),
                                                  }),
                                                className: `framer-q3nlmg`,
                                                "data-framer-name": `Files and Structured Data`,
                                                fonts: [`GF;IBM Plex Sans-600`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ l(`div`, {
                                            className: `framer-1dwadht`,
                                            "data-framer-name": `Table Cell`,
                                            children: /*#__PURE__*/ l(m, {
                                              __fromCanvasComponent: !0,
                                              children:
                                                q(`v73`, g) ??
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
                                                      "--framer-line-height": `21.45px`,
                                                      "--framer-text-color": `rgb(107, 114, 128)`,
                                                    },
                                                    children: /*#__PURE__*/ l(`span`, {
                                                      style: {
                                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                        "--framer-font-family": `"IBM Plex Sans"`,
                                                        "--framer-font-size": `13px`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `400`,
                                                        "--framer-letter-spacing": `0px`,
                                                        "--framer-text-color": `rgb(107, 114, 128)`,
                                                      },
                                                      children: `CSV 文件、数据库表、批量上传和定时提取`,
                                                    }),
                                                  }),
                                                }),
                                              className: `framer-1d3demq`,
                                              "data-framer-name": `CSV files, database tables, batch uploads, schedul`,
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
                          ],
                        }),
                        /*#__PURE__*/ l(S, {
                          className: `framer-fpjn0g`,
                          "data-framer-name": `Vector 4201`,
                          fill: `rgba(0,0,0,1)`,
                          intrinsicHeight: 3,
                          intrinsicWidth: 1282,
                          svg: `<svg width="1282" height="3" viewBox="-1 -1 1282 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.5H1280" stroke="black" stroke-opacity="0.2"/>
</svg>
`,
                          withExternalLayout: !0,
                        }),
                        /*#__PURE__*/ u(J, {
                          __framer__animate: { transition: Q },
                          __framer__animateOnce: !0,
                          __framer__enter: Z,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1opw77m`,
                          "data-framer-name": `Frame 2147223975`,
                          children: [
                            /*#__PURE__*/ u(`div`, {
                              className: `framer-1a1lhr8`,
                              "data-framer-name": `Container`,
                              children: [
                                /*#__PURE__*/ l(`div`, {
                                  className: `framer-34ebfh`,
                                  "data-border": !0,
                                  "data-framer-name": `Text`,
                                  children: /*#__PURE__*/ l(m, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      q(`v74`, g) ??
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
                                            "--framer-text-color": `rgb(115, 178, 0)`,
                                            "--framer-text-transform": `uppercase`,
                                          },
                                          children: `架构`,
                                        }),
                                      }),
                                    className: `framer-1xef3xk`,
                                    "data-framer-name": `Architecture`,
                                    fonts: [`GF;IBM Plex Mono-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                /*#__PURE__*/ l(`div`, {
                                  className: `framer-12ooltp`,
                                  "data-framer-name": `Heading 2`,
                                  children: /*#__PURE__*/ l(R, {
                                    breakpoint: D,
                                    overrides: {
                                      ns_0OUzlj: {
                                        children:
                                          q(`v76`, g) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(`h2`, {
                                              className: `framer-styles-preset-zg5ubw`,
                                              "data-styles-preset": `VF7HZTiAg`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `center` },
                                              children: `Tier0 如何采集数据`,
                                            }),
                                          }),
                                      },
                                    },
                                    children: /*#__PURE__*/ l(m, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        q(`v75`, g) ??
                                        /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(`h2`, {
                                            className: `framer-styles-preset-zg5ubw`,
                                            "data-styles-preset": `VF7HZTiAg`,
                                            dir: `auto`,
                                            children: `Tier0 如何采集数据`,
                                          }),
                                        }),
                                      className: `framer-12wr6jq`,
                                      "data-framer-name": `How Data Collection Works with Tier0`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ u(`div`, {
                              className: `framer-1o8l6uo`,
                              "data-framer-name": `Frame 2147223979`,
                              children: [
                                I() &&
                                  /*#__PURE__*/ u(`div`, {
                                    className: `framer-d41uqb hidden-1emxzb8`,
                                    "data-framer-name": `Frame 2147223978`,
                                    children: [
                                      /*#__PURE__*/ l(`div`, {
                                        className: `framer-1fl9rll`,
                                        children: /*#__PURE__*/ u(`div`, {
                                          className: `framer-1cu5sfy`,
                                          "data-border": !0,
                                          "data-framer-name": `Container`,
                                          children: [
                                            /*#__PURE__*/ u(`div`, {
                                              className: `framer-ri8aq`,
                                              "data-border": !0,
                                              "data-framer-name": `Container`,
                                              children: [
                                                /*#__PURE__*/ u(`div`, {
                                                  className: `framer-4f7m8r`,
                                                  "data-framer-name": `Frame 2147223977`,
                                                  children: [
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-lw6l22`,
                                                      "data-framer-name": `Container`,
                                                      children: /*#__PURE__*/ l(m, {
                                                        __fromCanvasComponent: !0,
                                                        children:
                                                          q(`v77`, g) ??
                                                          /*#__PURE__*/ l(a, {
                                                            children: /*#__PURE__*/ l(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                                "--framer-font-family": `"IBM Plex Mono", monospace`,
                                                                "--framer-font-size": `11px`,
                                                                "--framer-font-weight": `500`,
                                                                "--framer-letter-spacing": `0px`,
                                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                              },
                                                              children: `1`,
                                                            }),
                                                          }),
                                                        className: `framer-16ac8a3`,
                                                        "data-framer-name": `1`,
                                                        fonts: [`GF;IBM Plex Mono-500`],
                                                        transformTemplate: X,
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ l(m, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        q(`v78`, g) ??
                                                        /*#__PURE__*/ l(a, {
                                                          children: /*#__PURE__*/ l(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                              "--framer-font-family": `"IBM Plex Sans"`,
                                                              "--framer-font-style": `normal`,
                                                              "--framer-font-variation-axes": `normal`,
                                                              "--framer-font-weight": `600`,
                                                              "--framer-letter-spacing": `0px`,
                                                              "--framer-text-color": `rgb(17, 24, 39)`,
                                                            },
                                                            children: `数据采集`,
                                                          }),
                                                        }),
                                                      className: `framer-u378kc`,
                                                      "data-framer-name": `Data Collection`,
                                                      fonts: [`GF;IBM Plex Sans-600`],
                                                      verticalAlignment: `center`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    q(`v79`, g) ??
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
                                                          "--framer-line-height": `20.4px`,
                                                          "--framer-text-color": `rgb(107, 114, 128)`,
                                                        },
                                                        children: /*#__PURE__*/ l(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `14px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `400`,
                                                            "--framer-letter-spacing": `0px`,
                                                            "--framer-text-color": `rgb(107, 114, 128)`,
                                                          },
                                                          children: `数据采集将数据接入 Tier0。`,
                                                        }),
                                                      }),
                                                    }),
                                                  className: `framer-3ge525`,
                                                  "data-framer-name": `Data Collection brings data into Tier0.`,
                                                  fonts: [`GF;IBM Plex Sans-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ u(`div`, {
                                              className: `framer-13zyyy8`,
                                              "data-border": !0,
                                              "data-framer-name": `Container`,
                                              children: [
                                                /*#__PURE__*/ u(`div`, {
                                                  className: `framer-w38oyy`,
                                                  "data-framer-name": `Frame 2147223977`,
                                                  children: [
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-1e1z1mu`,
                                                      "data-framer-name": `Container`,
                                                      children: /*#__PURE__*/ l(m, {
                                                        __fromCanvasComponent: !0,
                                                        children:
                                                          q(`v80`, g) ??
                                                          /*#__PURE__*/ l(a, {
                                                            children: /*#__PURE__*/ l(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                                "--framer-font-family": `"IBM Plex Mono", monospace`,
                                                                "--framer-font-size": `11px`,
                                                                "--framer-font-weight": `500`,
                                                                "--framer-letter-spacing": `0px`,
                                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                              },
                                                              children: `2`,
                                                            }),
                                                          }),
                                                        className: `framer-osi883`,
                                                        "data-framer-name": `2`,
                                                        fonts: [`GF;IBM Plex Mono-500`],
                                                        transformTemplate: X,
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ l(m, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        q(`v81`, g) ??
                                                        /*#__PURE__*/ l(a, {
                                                          children: /*#__PURE__*/ l(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                              "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                              "--framer-font-weight": `600`,
                                                              "--framer-letter-spacing": `0px`,
                                                              "--framer-text-color": `rgb(17, 24, 39)`,
                                                            },
                                                            children: `UNS`,
                                                          }),
                                                        }),
                                                      className: `framer-xoc7p1`,
                                                      "data-framer-name": `UNS`,
                                                      fonts: [`GF;IBM Plex Sans-600`],
                                                      verticalAlignment: `center`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    q(`v82`, g) ??
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
                                                          "--framer-line-height": `20.4px`,
                                                          "--framer-text-color": `rgb(107, 114, 128)`,
                                                        },
                                                        children: /*#__PURE__*/ l(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `14px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `400`,
                                                            "--framer-letter-spacing": `0px`,
                                                            "--framer-text-color": `rgb(107, 114, 128)`,
                                                          },
                                                          children: `UNS 将数据组织为共享的运营模型。`,
                                                        }),
                                                      }),
                                                    }),
                                                  className: `framer-1th8w9d`,
                                                  "data-framer-name": `UNS structures that data into a shared operational model.`,
                                                  fonts: [`GF;IBM Plex Sans-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ u(`div`, {
                                              className: `framer-i9q1p`,
                                              "data-border": !0,
                                              "data-framer-name": `Container`,
                                              children: [
                                                /*#__PURE__*/ u(`div`, {
                                                  className: `framer-1g9gdxw`,
                                                  "data-framer-name": `Frame 2147223977`,
                                                  children: [
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-bor213`,
                                                      "data-framer-name": `Container`,
                                                      children: /*#__PURE__*/ l(m, {
                                                        __fromCanvasComponent: !0,
                                                        children:
                                                          q(`v83`, g) ??
                                                          /*#__PURE__*/ l(a, {
                                                            children: /*#__PURE__*/ l(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                                "--framer-font-family": `"IBM Plex Mono", monospace`,
                                                                "--framer-font-size": `11px`,
                                                                "--framer-font-weight": `500`,
                                                                "--framer-letter-spacing": `0px`,
                                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                              },
                                                              children: `3`,
                                                            }),
                                                          }),
                                                        className: `framer-8mfkmo`,
                                                        "data-framer-name": `3`,
                                                        fonts: [`GF;IBM Plex Mono-500`],
                                                        transformTemplate: X,
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ l(m, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        q(`v84`, g) ??
                                                        /*#__PURE__*/ l(a, {
                                                          children: /*#__PURE__*/ l(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                              "--framer-font-family": `"IBM Plex Sans"`,
                                                              "--framer-font-style": `normal`,
                                                              "--framer-font-variation-axes": `normal`,
                                                              "--framer-font-weight": `600`,
                                                              "--framer-letter-spacing": `0px`,
                                                              "--framer-text-color": `rgb(17, 24, 39)`,
                                                            },
                                                            children: `应用`,
                                                          }),
                                                        }),
                                                      className: `framer-1nxmmjf`,
                                                      "data-framer-name": `Application`,
                                                      fonts: [`GF;IBM Plex Sans-600`],
                                                      verticalAlignment: `center`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    q(`v85`, g) ??
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
                                                          "--framer-line-height": `20.4px`,
                                                          "--framer-text-color": `rgb(107, 114, 128)`,
                                                        },
                                                        children: /*#__PURE__*/ l(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `14px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `400`,
                                                            "--framer-letter-spacing": `0px`,
                                                            "--framer-text-color": `rgb(107, 114, 128)`,
                                                          },
                                                          children: `应用基于结构化数据支持业务流程与执行。`,
                                                        }),
                                                      }),
                                                    }),
                                                  className: `framer-zya1sn`,
                                                  "data-framer-name": `Applications use that structured data to support workflows and execution.`,
                                                  fonts: [`GF;IBM Plex Sans-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ u(`div`, {
                                              className: `framer-1vkt40e`,
                                              "data-framer-name": `Container`,
                                              children: [
                                                /*#__PURE__*/ u(`div`, {
                                                  className: `framer-1xp62yz`,
                                                  "data-framer-name": `Frame 2147223977`,
                                                  children: [
                                                    /*#__PURE__*/ l(`div`, {
                                                      className: `framer-1qjqtco`,
                                                      "data-framer-name": `Container`,
                                                      children: /*#__PURE__*/ l(m, {
                                                        __fromCanvasComponent: !0,
                                                        children:
                                                          q(`v86`, g) ??
                                                          /*#__PURE__*/ l(a, {
                                                            children: /*#__PURE__*/ l(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                                                "--framer-font-family": `"IBM Plex Mono", monospace`,
                                                                "--framer-font-size": `11px`,
                                                                "--framer-font-weight": `500`,
                                                                "--framer-letter-spacing": `0px`,
                                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                              },
                                                              children: `4`,
                                                            }),
                                                          }),
                                                        className: `framer-14lkub6`,
                                                        "data-framer-name": `4`,
                                                        fonts: [`GF;IBM Plex Mono-500`],
                                                        transformTemplate: X,
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    /*#__PURE__*/ l(m, {
                                                      __fromCanvasComponent: !0,
                                                      children:
                                                        q(`v87`, g) ??
                                                        /*#__PURE__*/ l(a, {
                                                          children: /*#__PURE__*/ l(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                              "--framer-font-family": `"IBM Plex Sans"`,
                                                              "--framer-font-style": `normal`,
                                                              "--framer-font-variation-axes": `normal`,
                                                              "--framer-font-weight": `600`,
                                                              "--framer-letter-spacing": `0px`,
                                                              "--framer-text-color": `rgb(17, 24, 39)`,
                                                            },
                                                            children: /*#__PURE__*/ l(`span`, {
                                                              style: {
                                                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                                "--framer-font-family": `"IBM Plex Sans"`,
                                                                "--framer-font-style": `normal`,
                                                                "--framer-font-variation-axes": `normal`,
                                                                "--framer-font-weight": `600`,
                                                                "--framer-letter-spacing": `0px`,
                                                                "--framer-text-color": `rgb(17, 24, 39)`,
                                                              },
                                                              children: `分析与 AI`,
                                                            }),
                                                          }),
                                                        }),
                                                      className: `framer-1ezfn0h`,
                                                      "data-framer-name": `Analytics & AI`,
                                                      fonts: [`GF;IBM Plex Sans-600`],
                                                      verticalAlignment: `center`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    q(`v88`, g) ??
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
                                                          "--framer-line-height": `20.4px`,
                                                          "--framer-text-color": `rgb(107, 114, 128)`,
                                                        },
                                                        children: /*#__PURE__*/ l(`span`, {
                                                          style: {
                                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                            "--framer-font-family": `"IBM Plex Sans"`,
                                                            "--framer-font-size": `14px`,
                                                            "--framer-font-style": `normal`,
                                                            "--framer-font-variation-axes": `normal`,
                                                            "--framer-font-weight": `400`,
                                                            "--framer-letter-spacing": `0px`,
                                                            "--framer-text-color": `rgb(107, 114, 128)`,
                                                          },
                                                          children: `分析与 AI 复用同一数据基础，实现洞察、预测与优化。`,
                                                        }),
                                                      }),
                                                    }),
                                                  className: `framer-1vmqn1i`,
                                                  "data-framer-name": `Analytics and AI build on the same foundation for insight, prediction, and optimization.`,
                                                  fonts: [`GF;IBM Plex Sans-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                      /*#__PURE__*/ l(`div`, {
                                        className: `framer-ayjfmb`,
                                        "data-framer-name": `Frame 2147223976`,
                                        children: /*#__PURE__*/ u(`div`, {
                                          className: `framer-t6azfz`,
                                          "data-framer-name": `chevron-right`,
                                          children: [
                                            /*#__PURE__*/ l(`div`, {
                                              className: `framer-zrwaad`,
                                              "data-framer-name": `Vector`,
                                            }),
                                            /*#__PURE__*/ l(S, {
                                              className: `framer-3jfxi9`,
                                              "data-framer-name": `Vector`,
                                              opacity: 1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5 8"><path d="M 1 1 L 4 4 L 1 7" fill="transparent" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                              svgContentId: 8789465031,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      }),
                                      /*#__PURE__*/ l(`div`, {
                                        className: `framer-6hls6l`,
                                        "data-framer-name": `Frame 2147223977`,
                                        children: /*#__PURE__*/ u(`div`, {
                                          className: `framer-1612lno`,
                                          "data-framer-name": `chevron-right`,
                                          children: [
                                            /*#__PURE__*/ l(`div`, {
                                              className: `framer-33994a`,
                                              "data-framer-name": `Vector`,
                                            }),
                                            /*#__PURE__*/ l(S, {
                                              className: `framer-1urg0vo`,
                                              "data-framer-name": `Vector`,
                                              opacity: 1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5 8"><path d="M 1 1 L 4 4 L 1 7" fill="transparent" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                              svgContentId: 8789465031,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      }),
                                      /*#__PURE__*/ l(`div`, {
                                        className: `framer-117f8t9`,
                                        "data-framer-name": `Frame 2147223978`,
                                        children: /*#__PURE__*/ u(`div`, {
                                          className: `framer-1edf7tl`,
                                          "data-framer-name": `chevron-right`,
                                          children: [
                                            /*#__PURE__*/ l(`div`, {
                                              className: `framer-1hefngn`,
                                              "data-framer-name": `Vector`,
                                            }),
                                            /*#__PURE__*/ l(S, {
                                              className: `framer-18qucsm`,
                                              "data-framer-name": `Vector`,
                                              opacity: 1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5 8"><path d="M 1 1 L 4 4 L 1 7" fill="transparent" stroke="rgb(115,178,0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                              svgContentId: 8789465031,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                P() &&
                                  /*#__PURE__*/ u(`div`, {
                                    className: `framer-l5et8y hidden-1803tfs`,
                                    "data-border": !0,
                                    children: [
                                      /*#__PURE__*/ u(`div`, {
                                        className: `framer-zrqx8t`,
                                        "data-border": !0,
                                        "data-framer-name": `Container`,
                                        children: [
                                          /*#__PURE__*/ u(`div`, {
                                            className: `framer-js8scn`,
                                            "data-framer-name": `Frame 2147223977`,
                                            children: [
                                              /*#__PURE__*/ l(`div`, {
                                                className: `framer-o4c4t0`,
                                                "data-framer-name": `Container`,
                                                children: /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    q(`v89`, g) ??
                                                    /*#__PURE__*/ l(a, {
                                                      children: /*#__PURE__*/ l(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7UG9wcGlucy03MDA=`,
                                                          "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                                          "--framer-font-size": `11px`,
                                                          "--framer-font-weight": `700`,
                                                          "--framer-letter-spacing": `0px`,
                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                        },
                                                        children: `1`,
                                                      }),
                                                    }),
                                                  className: `framer-q9x1pq`,
                                                  "data-framer-name": `1`,
                                                  fonts: [`GF;Poppins-700`],
                                                  transformTemplate: Rt,
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  q(`v90`, g) ??
                                                  /*#__PURE__*/ l(a, {
                                                    children: /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                                                        "--framer-font-family": `Poppins`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `600`,
                                                        "--framer-letter-spacing": `0px`,
                                                        "--framer-text-color": `rgb(17, 24, 39)`,
                                                      },
                                                      children: `数据采集`,
                                                    }),
                                                  }),
                                                className: `framer-k9r4cl`,
                                                "data-framer-name": `Data Collection`,
                                                fonts: [`GF;Poppins-600`],
                                                verticalAlignment: `center`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              q(`v79`, g) ??
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
                                                    "--framer-line-height": `20.4px`,
                                                    "--framer-text-color": `rgb(107, 114, 128)`,
                                                  },
                                                  children: /*#__PURE__*/ l(`span`, {
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `14px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `400`,
                                                      "--framer-letter-spacing": `0px`,
                                                      "--framer-text-color": `rgb(107, 114, 128)`,
                                                    },
                                                    children: `数据采集将数据接入 Tier0。`,
                                                  }),
                                                }),
                                              }),
                                            className: `framer-13wl8xl`,
                                            "data-framer-name": `Data Collection brings data into Tier0.`,
                                            fonts: [`GF;IBM Plex Sans-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ u(`div`, {
                                        className: `framer-1h8c28o`,
                                        "data-border": !0,
                                        "data-framer-name": `Container`,
                                        children: [
                                          /*#__PURE__*/ u(`div`, {
                                            className: `framer-gvntrg`,
                                            "data-framer-name": `Frame 2147223977`,
                                            children: [
                                              /*#__PURE__*/ l(`div`, {
                                                className: `framer-46wdip`,
                                                "data-framer-name": `Container`,
                                                children: /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    q(`v91`, g) ??
                                                    /*#__PURE__*/ l(a, {
                                                      children: /*#__PURE__*/ l(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7UG9wcGlucy03MDA=`,
                                                          "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                                          "--framer-font-size": `11px`,
                                                          "--framer-font-weight": `700`,
                                                          "--framer-letter-spacing": `0px`,
                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                        },
                                                        children: `2`,
                                                      }),
                                                    }),
                                                  className: `framer-1hkcz3o`,
                                                  "data-framer-name": `2`,
                                                  fonts: [`GF;Poppins-700`],
                                                  transformTemplate: X,
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  q(`v92`, g) ??
                                                  /*#__PURE__*/ l(a, {
                                                    children: /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                                                        "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                                        "--framer-font-weight": `600`,
                                                        "--framer-letter-spacing": `0px`,
                                                        "--framer-text-color": `rgb(17, 24, 39)`,
                                                      },
                                                      children: `UNS`,
                                                    }),
                                                  }),
                                                className: `framer-1q8cjfl`,
                                                "data-framer-name": `UNS`,
                                                fonts: [`GF;Poppins-600`],
                                                verticalAlignment: `center`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              q(`v82`, g) ??
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
                                                    "--framer-line-height": `20.4px`,
                                                    "--framer-text-color": `rgb(107, 114, 128)`,
                                                  },
                                                  children: /*#__PURE__*/ l(`span`, {
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `14px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `400`,
                                                      "--framer-letter-spacing": `0px`,
                                                      "--framer-text-color": `rgb(107, 114, 128)`,
                                                    },
                                                    children: `UNS 将数据组织为共享的运营模型。`,
                                                  }),
                                                }),
                                              }),
                                            className: `framer-1hii159`,
                                            "data-framer-name": `UNS structures that data into a shared operational model.`,
                                            fonts: [`GF;IBM Plex Sans-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ u(`div`, {
                                        className: `framer-1n8k5bc`,
                                        "data-border": !0,
                                        "data-framer-name": `Container`,
                                        children: [
                                          /*#__PURE__*/ u(`div`, {
                                            className: `framer-6bbzuh`,
                                            "data-framer-name": `Frame 2147223977`,
                                            children: [
                                              /*#__PURE__*/ l(`div`, {
                                                className: `framer-1g619u7`,
                                                "data-framer-name": `Container`,
                                                children: /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    q(`v93`, g) ??
                                                    /*#__PURE__*/ l(a, {
                                                      children: /*#__PURE__*/ l(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7UG9wcGlucy03MDA=`,
                                                          "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                                          "--framer-font-size": `11px`,
                                                          "--framer-font-weight": `700`,
                                                          "--framer-letter-spacing": `0px`,
                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                        },
                                                        children: `3`,
                                                      }),
                                                    }),
                                                  className: `framer-18f8h8h`,
                                                  "data-framer-name": `3`,
                                                  fonts: [`GF;Poppins-700`],
                                                  transformTemplate: X,
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  q(`v94`, g) ??
                                                  /*#__PURE__*/ l(a, {
                                                    children: /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `R0Y7UG9wcGlucy02MDA=`,
                                                        "--framer-font-family": `Poppins`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `600`,
                                                        "--framer-letter-spacing": `0px`,
                                                        "--framer-text-color": `rgb(17, 24, 39)`,
                                                      },
                                                      children: `应用`,
                                                    }),
                                                  }),
                                                className: `framer-cgciz1`,
                                                "data-framer-name": `Application`,
                                                fonts: [`GF;Poppins-600`],
                                                verticalAlignment: `center`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              q(`v85`, g) ??
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
                                                    "--framer-line-height": `20.4px`,
                                                    "--framer-text-color": `rgb(107, 114, 128)`,
                                                  },
                                                  children: /*#__PURE__*/ l(`span`, {
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `14px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `400`,
                                                      "--framer-letter-spacing": `0px`,
                                                      "--framer-text-color": `rgb(107, 114, 128)`,
                                                    },
                                                    children: `应用基于结构化数据支持业务流程与执行。`,
                                                  }),
                                                }),
                                              }),
                                            className: `framer-11nylu6`,
                                            "data-framer-name": `Applications use that structured data to support workflows and execution.`,
                                            fonts: [`GF;IBM Plex Sans-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ u(`div`, {
                                        className: `framer-aan5p7`,
                                        "data-framer-name": `Container`,
                                        children: [
                                          /*#__PURE__*/ u(`div`, {
                                            className: `framer-1bkvth`,
                                            "data-framer-name": `Frame 2147223977`,
                                            children: [
                                              /*#__PURE__*/ l(`div`, {
                                                className: `framer-11lsmu9`,
                                                "data-framer-name": `Container`,
                                                children: /*#__PURE__*/ l(m, {
                                                  __fromCanvasComponent: !0,
                                                  children:
                                                    q(`v95`, g) ??
                                                    /*#__PURE__*/ l(a, {
                                                      children: /*#__PURE__*/ l(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7UG9wcGlucy03MDA=`,
                                                          "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                                          "--framer-font-size": `11px`,
                                                          "--framer-font-weight": `700`,
                                                          "--framer-letter-spacing": `0px`,
                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                        },
                                                        children: `4`,
                                                      }),
                                                    }),
                                                  className: `framer-xwpy7j`,
                                                  "data-framer-name": `4`,
                                                  fonts: [`GF;Poppins-700`],
                                                  transformTemplate: X,
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              /*#__PURE__*/ l(m, {
                                                __fromCanvasComponent: !0,
                                                children:
                                                  q(`v96`, g) ??
                                                  /*#__PURE__*/ l(a, {
                                                    children: /*#__PURE__*/ l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `RlM7UG9wcGlucy1zZW1pYm9sZA==`,
                                                        "--framer-font-family": `"Poppins"`,
                                                        "--framer-font-style": `normal`,
                                                        "--framer-font-variation-axes": `normal`,
                                                        "--framer-font-weight": `600`,
                                                        "--framer-letter-spacing": `0px`,
                                                        "--framer-text-color": `rgb(17, 24, 39)`,
                                                      },
                                                      children: /*#__PURE__*/ l(`span`, {
                                                        style: {
                                                          "--font-selector": `RlM7UG9wcGlucy1zZW1pYm9sZA==`,
                                                          "--framer-font-family": `"Poppins"`,
                                                          "--framer-font-style": `normal`,
                                                          "--framer-font-variation-axes": `normal`,
                                                          "--framer-font-weight": `600`,
                                                          "--framer-letter-spacing": `0px`,
                                                          "--framer-text-color": `rgb(17, 24, 39)`,
                                                        },
                                                        children: `分析与 AI`,
                                                      }),
                                                    }),
                                                  }),
                                                className: `framer-1gffgh`,
                                                "data-framer-name": `Analytics & AI`,
                                                fonts: [`FS;Poppins-semibold`],
                                                verticalAlignment: `center`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ l(m, {
                                            __fromCanvasComponent: !0,
                                            children:
                                              q(`v88`, g) ??
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
                                                    "--framer-line-height": `20.4px`,
                                                    "--framer-text-color": `rgb(107, 114, 128)`,
                                                  },
                                                  children: /*#__PURE__*/ l(`span`, {
                                                    style: {
                                                      "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"IBM Plex Sans"`,
                                                      "--framer-font-size": `14px`,
                                                      "--framer-font-style": `normal`,
                                                      "--framer-font-variation-axes": `normal`,
                                                      "--framer-font-weight": `400`,
                                                      "--framer-letter-spacing": `0px`,
                                                      "--framer-text-color": `rgb(107, 114, 128)`,
                                                    },
                                                    children: `分析与 AI 复用同一数据基础，实现洞察、预测与优化。`,
                                                  }),
                                                }),
                                              }),
                                            className: `framer-ba1toc`,
                                            "data-framer-name": `Analytics and AI build on the same foundation for insight, prediction, and optimization.`,
                                            fonts: [`GF;IBM Plex Sans-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                /*#__PURE__*/ l(`div`, {
                                  className: `framer-1qmhibi`,
                                  "data-framer-name": `Paragraph`,
                                  children: /*#__PURE__*/ l(m, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      q(`v97`, g) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(`p`, {
                                          className: `framer-styles-preset-1ful33y`,
                                          "data-styles-preset": `HNigw6pHS`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `center` },
                                          children: `Tier0 将分散的数据连接转化为可复用的商业价值。`,
                                        }),
                                      }),
                                    className: `framer-17ocrx`,
                                    "data-framer-name": `Tier0's namespace is designed to reflect industria`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        /*#__PURE__*/ l(S, {
                          className: `framer-80wivc`,
                          "data-framer-name": `Vector 4201`,
                          fill: `rgba(0,0,0,1)`,
                          intrinsicHeight: 3,
                          intrinsicWidth: 1282,
                          svg: `<svg width="1282" height="3" viewBox="-1 -1 1282 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.5H1280" stroke="black" stroke-opacity="0.2"/>
</svg>
`,
                          withExternalLayout: !0,
                        }),
                        /*#__PURE__*/ u(J, {
                          __framer__animate: { transition: Q },
                          __framer__animateOnce: !0,
                          __framer__enter: Z,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-tdmu1j`,
                          "data-framer-name": `Frame 2147223975`,
                          children: [
                            /*#__PURE__*/ u(`div`, {
                              className: `framer-1w8abwb`,
                              "data-framer-name": `Container`,
                              children: [
                                /*#__PURE__*/ l(`div`, {
                                  className: `framer-y8ndpo`,
                                  "data-border": !0,
                                  "data-framer-name": `Text`,
                                  children: /*#__PURE__*/ l(m, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      q(`v98`, g) ??
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
                                            "--framer-text-color": `rgb(115, 178, 0)`,
                                            "--framer-text-transform": `uppercase`,
                                          },
                                          children: `常见问题`,
                                        }),
                                      }),
                                    className: `framer-14dw6zf`,
                                    "data-framer-name": `Architecture`,
                                    fonts: [`GF;IBM Plex Mono-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                /*#__PURE__*/ l(`div`, {
                                  className: `framer-1x6mlkp`,
                                  "data-framer-name": `Heading 2`,
                                  children: /*#__PURE__*/ l(R, {
                                    breakpoint: D,
                                    overrides: {
                                      ns_0OUzlj: {
                                        children:
                                          q(`v100`, g) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(`h2`, {
                                              className: `framer-styles-preset-zg5ubw`,
                                              "data-styles-preset": `VF7HZTiAg`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `center` },
                                              children: `常见问题`,
                                            }),
                                          }),
                                      },
                                    },
                                    children: /*#__PURE__*/ l(m, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        q(`v99`, g) ??
                                        /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(`h2`, {
                                            className: `framer-styles-preset-zg5ubw`,
                                            "data-styles-preset": `VF7HZTiAg`,
                                            dir: `auto`,
                                            children: `常见问题`,
                                          }),
                                        }),
                                      className: `framer-111rbbo`,
                                      "data-framer-name": `How Data Collection Works with Tier0`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ l(R, {
                              breakpoint: D,
                              overrides: {
                                ns_0OUzlj: { width: `300px`, y: (v?.y || 0) + 7425.3141 },
                              },
                              children: /*#__PURE__*/ l(k, {
                                height: 200,
                                width: `1280px`,
                                y: (v?.y || 0) + 5072.0375,
                                children: /*#__PURE__*/ l(F, {
                                  className: `framer-1ut6so-container`,
                                  "data-framer-name": `数据采集 · 中文问答`,
                                  name: `数据采集 · 中文问答`,
                                  nodeId: `KthjrMZw1`,
                                  scopeId: `e0LeoctYs`,
                                  children: /*#__PURE__*/ l(K, {
                                    height: `100%`,
                                    id: `KthjrMZw1`,
                                    layoutId: `KthjrMZw1`,
                                    name: `数据采集 · 中文问答`,
                                    style: { width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ l(S, {
                      className: `framer-1k8qenj`,
                      "data-framer-name": `Vector 4201`,
                      fill: `rgba(0,0,0,1)`,
                      intrinsicHeight: 3,
                      intrinsicWidth: 1282,
                      layout: N,
                      svg: `<svg width="1282" height="3" viewBox="-1 -1 1282 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.5H1280" stroke="black" stroke-opacity="0.2"/>
</svg>
`,
                      withExternalLayout: !0,
                    }),
                    /*#__PURE__*/ u(f.div, {
                      className: `framer-h44bje`,
                      "data-framer-name": `Frame 2147223992`,
                      layout: N,
                      children: [
                        /*#__PURE__*/ l(h, {
                          links: [
                            { href: { webPageId: `e0LeoctYs` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `e0LeoctYs` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            /*#__PURE__*/ l(R, {
                              breakpoint: D,
                              overrides: {
                                ns_0OUzlj: { width: `300px`, y: (v?.y || 0) + 7722.3141 },
                              },
                              children: /*#__PURE__*/ l(k, {
                                height: 100,
                                width: `630.5px`,
                                y: (v?.y || 0) + 5393.0375,
                                children: /*#__PURE__*/ l(F, {
                                  className: `framer-j7f3mk-container`,
                                  nodeId: `uNt5nkmr7`,
                                  scopeId: `e0LeoctYs`,
                                  children: /*#__PURE__*/ l(R, {
                                    breakpoint: D,
                                    overrides: { ns_0OUzlj: { osIMBk3va: e[1] } },
                                    children: /*#__PURE__*/ l(V, {
                                      Bl9NYECTJ: `rgb(216, 216, 217)`,
                                      excG2ycRK: 16,
                                      Ft3OV1du0: q(`v101`, g) ?? `数据采集`,
                                      GbwKGBBdi: `rgb(23, 26, 34)`,
                                      height: `100%`,
                                      id: `uNt5nkmr7`,
                                      layoutId: `uNt5nkmr7`,
                                      nZYRErOCO: q(`v102`, g) ?? `将工业与业务数据接入 Tier0`,
                                      osIMBk3va: e[0],
                                      PA4ruD5Tl: `rgba(250, 250, 250, 0.5)`,
                                      PeGC4Vb3l: `rgb(120, 118, 112)`,
                                      style: { width: `100%` },
                                      variant: Y(`gYqLQJaHI`),
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
                            /*#__PURE__*/ l(R, {
                              breakpoint: D,
                              overrides: {
                                ns_0OUzlj: { width: `300px`, y: (v?.y || 0) + 7841.3141 },
                              },
                              children: /*#__PURE__*/ l(k, {
                                height: 100,
                                width: `630.5px`,
                                y: (v?.y || 0) + 5393.0375,
                                children: /*#__PURE__*/ l(F, {
                                  className: `framer-1wn4frh-container`,
                                  nodeId: `MqK_opXdR`,
                                  scopeId: `e0LeoctYs`,
                                  children: /*#__PURE__*/ l(R, {
                                    breakpoint: D,
                                    overrides: { ns_0OUzlj: { osIMBk3va: e[1] } },
                                    children: /*#__PURE__*/ l(V, {
                                      Bl9NYECTJ: `rgb(216, 216, 217)`,
                                      excG2ycRK: 16,
                                      Ft3OV1du0: q(`v103`, g) ?? `应用构建器`,
                                      GbwKGBBdi: `rgb(23, 26, 34)`,
                                      height: `100%`,
                                      id: `MqK_opXdR`,
                                      layoutId: `MqK_opXdR`,
                                      nZYRErOCO:
                                        q(`v104`, g) ?? `构建今天的应用，不为明天制造数据孤岛。`,
                                      osIMBk3va: e[0],
                                      PA4ruD5Tl: `rgba(250, 250, 250, 0.5)`,
                                      PeGC4Vb3l: `rgb(120, 118, 112)`,
                                      style: { width: `100%` },
                                      variant: Y(`gYqLQJaHI`),
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
                      className: `framer-sgdo1i`,
                      layout: N,
                      children: [
                        I() &&
                          /*#__PURE__*/ l(Ot, {
                            animate: Bt,
                            className: `framer-123iarr hidden-1emxzb8`,
                            "data-framer-appear-id": `123iarr`,
                            "data-framer-name": `point bg`,
                            initial: Vt,
                            optimized: !0,
                            transformTemplate: zt,
                            children: /*#__PURE__*/ l(k, {
                              children: /*#__PURE__*/ l(F, {
                                className: `framer-1vpicyl-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `jxPLiztd1`,
                                scopeId: `e0LeoctYs`,
                                children: /*#__PURE__*/ l(ue, {
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
                                  id: `jxPLiztd1`,
                                  layoutId: `jxPLiztd1`,
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
                        /*#__PURE__*/ l(h, {
                          links: [
                            { href: { webPageId: `RCRTBRG3j` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `RCRTBRG3j` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            /*#__PURE__*/ l(R, {
                              breakpoint: D,
                              overrides: { ns_0OUzlj: { y: (v?.y || 0) + 8052.6583 } },
                              children: /*#__PURE__*/ l(k, {
                                height: 381,
                                width: v?.width || `100vw`,
                                y: (v?.y || 0) + 5546.3817,
                                children: /*#__PURE__*/ l(F, {
                                  className: `framer-1plsupn-container`,
                                  nodeId: `e5ETrwSDg`,
                                  scopeId: `e0LeoctYs`,
                                  children: /*#__PURE__*/ l(R, {
                                    breakpoint: D,
                                    overrides: {
                                      ns_0OUzlj: {
                                        exikp92XZ: e[1],
                                        Gl_ZpIhSp:
                                          q(`v110`, g) ?? `构建结构化工业应用，而非应用孤岛。`,
                                        variant: Y(`GL5t2qn7B`),
                                      },
                                    },
                                    children: /*#__PURE__*/ l(Ce, {
                                      AspCk9Iwt:
                                        q(`v106`, g) ??
                                        `通过重用基于共享数据基础构建的成熟应用，更快部署工业应用。`,
                                      DC7Tugabs: q(`v108`, g) ?? `下一步`,
                                      exikp92XZ: e[0],
                                      F_yIFtkLx: q(`v109`, g) ?? `立即体验 Tier0`,
                                      Gl_ZpIhSp:
                                        q(`v105`, g) ?? `构建结构化工业应用，而非应用孤岛。`,
                                      H7eKfGy5E: q(`v107`, g) ?? `预约会议`,
                                      height: `100%`,
                                      id: `e5ETrwSDg`,
                                      IoXK6IEoz: `https://outlook.office.com/book/BookameetingwithTier0@freezonex.onmicrosoft.com/`,
                                      layoutId: `e5ETrwSDg`,
                                      style: { width: `100%` },
                                      variant: Y(`Rym8t4ER5`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                        }),
                      ],
                    }),
                    /*#__PURE__*/ l(R, {
                      breakpoint: D,
                      overrides: { ns_0OUzlj: { y: (v?.y || 0) + 8433.3141 } },
                      children: /*#__PURE__*/ l(k, {
                        height: 498,
                        width: v?.width || `100vw`,
                        y: (v?.y || 0) + 5927.0375,
                        children: /*#__PURE__*/ l(F, {
                          className: `framer-1n4fqjg-container`,
                          layout: N,
                          nodeId: `AmZ9TyfsA`,
                          scopeId: `e0LeoctYs`,
                          children: /*#__PURE__*/ l(R, {
                            breakpoint: D,
                            overrides: { ns_0OUzlj: { variant: Y(`vXscR1iJC`) } },
                            children: /*#__PURE__*/ l(B, {
                              height: `100%`,
                              id: `AmZ9TyfsA`,
                              layoutId: `AmZ9TyfsA`,
                              style: { width: `100%` },
                              variant: Y(`zev4Tv3qQ`),
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
      (Kt = [
        `.framer-BnEiY.framer-xcr5nj, .framer-BnEiY .framer-xcr5nj { display: block; }`,
        `.framer-BnEiY.framer-1803tfs { align-content: center; align-items: center; background-color: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-BnEiY .framer-7xf87v-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 4; }`,
        `.framer-BnEiY .framer-h327k3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 90px; height: min-content; justify-content: flex-start; overflow: visible; padding: 140px 0px 70px 0px; position: relative; width: 1440px; }`,
        `.framer-BnEiY .framer-1fsx9xu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 45px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-BnEiY .framer-lcfexk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 48%; }`,
        `.framer-BnEiY .framer-28b31v { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-BnEiY .framer-11kpw8c, .framer-BnEiY .framer-14on74n, .framer-BnEiY .framer-qmthju, .framer-BnEiY .framer-3n6qn8, .framer-BnEiY .framer-1qcw0s2, .framer-BnEiY .framer-34ebfh, .framer-BnEiY .framer-y8ndpo { --border-bottom-width: 1px; --border-color: var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, #b2ed1d); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(178, 237, 29, 0.1); border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 28px; justify-content: flex-start; overflow: visible; padding: 6px 12px 6px 12px; position: relative; width: min-content; }`,
        `.framer-BnEiY .framer-16d88wo, .framer-BnEiY .framer-yvqnqu, .framer-BnEiY .framer-9epts1, .framer-BnEiY .framer-18vmu5y, .framer-BnEiY .framer-gstwp8, .framer-BnEiY .framer-zu3lso, .framer-BnEiY .framer-hw0ghu, .framer-BnEiY .framer-6osje4, .framer-BnEiY .framer-x20hb5, .framer-BnEiY .framer-15wym7k, .framer-BnEiY .framer-89qeqz, .framer-BnEiY .framer-fdh6by, .framer-BnEiY .framer-auxu5s, .framer-BnEiY .framer-s01yfk, .framer-BnEiY .framer-asruj9, .framer-BnEiY .framer-1a7gnqx, .framer-BnEiY .framer-1e1pcnx, .framer-BnEiY .framer-15qoooe, .framer-BnEiY .framer-1qoxuve, .framer-BnEiY .framer-u17udn, .framer-BnEiY .framer-19f2v1, .framer-BnEiY .framer-1qmaexu, .framer-BnEiY .framer-zyssz9, .framer-BnEiY .framer-taqznj, .framer-BnEiY .framer-pb6fql, .framer-BnEiY .framer-1hzg89m, .framer-BnEiY .framer-q3nlmg, .framer-BnEiY .framer-1xef3xk, .framer-BnEiY .framer-12wr6jq, .framer-BnEiY .framer-14dw6zf, .framer-BnEiY .framer-111rbbo { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-BnEiY .framer-3vyeq6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-BnEiY .framer-1i7lqn6 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 581px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-BnEiY .framer-1pm7qz6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 609px; }`,
        `.framer-BnEiY .framer-1ayrdri { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-BnEiY .framer-dakj33, .framer-BnEiY .framer-1vtlwz5 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 609px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-BnEiY .framer-cfg7wl, .framer-BnEiY .framer-1s8au6, .framer-BnEiY .framer-1sg5wgo, .framer-BnEiY .framer-d31w2e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 1px 0px 1px 0px; position: relative; width: 100%; }`,
        `.framer-BnEiY .framer-4bmuxj { flex: none; height: 568px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 300px; }`,
        `.framer-BnEiY .framer-v79q5x { aspect-ratio: 1.146632315441301 / 1; flex: none; height: auto; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-BnEiY .framer-4iopq5 { --1335ju: 1.5; --18mrqx2: var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, #73b200); --3it368: 1; aspect-ratio: 1 / 1; flex: none; height: auto; left: 50%; position: absolute; top: 48%; transform: translate(-50%, -50%); width: 24px; }`,
        `.framer-BnEiY .framer-69p8r4 { aspect-ratio: 1.043127757496874 / 1; bottom: 0px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); width: 292px; }`,
        `.framer-BnEiY .framer-10fxc7u { background-color: #fefefe; flex: none; height: 25px; left: 9px; position: absolute; top: 26px; width: 116px; }`,
        `.framer-BnEiY .framer-gjdhm6 { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 49%; position: absolute; top: 52%; transform: translate(-50%, -50%); white-space: pre; width: auto; }`,
        `.framer-BnEiY .framer-kl1an6 { flex: none; gap: 0px; height: 295px; overflow: visible; position: relative; width: 631px; }`,
        `.framer-BnEiY .framer-c71tu { flex: none; height: 295px; left: 0px; overflow: visible; position: absolute; top: 0px; width: 631px; }`,
        `.framer-BnEiY .framer-v1cf1a { aspect-ratio: 1.146632315441301 / 1; flex: none; height: auto; left: 0px; position: absolute; top: 0px; width: 339px; }`,
        `.framer-BnEiY .framer-1dqwfax { aspect-ratio: 1.043127757496874 / 1; flex: none; height: auto; left: 339px; position: absolute; top: 8px; width: 292px; }`,
        `.framer-BnEiY .framer-ry63t7 { background-color: #fefefe; flex: none; height: 25px; left: 349px; position: absolute; top: 34px; width: 117px; }`,
        `.framer-BnEiY .framer-1xcvzig { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 349px; position: absolute; top: 37px; white-space: pre; width: auto; }`,
        `.framer-BnEiY .framer-plldpr, .framer-BnEiY .framer-fgms2a, .framer-BnEiY .framer-fpjn0g, .framer-BnEiY .framer-80wivc, .framer-BnEiY .framer-1k8qenj { flex: none; height: 3px; position: relative; width: 1282px; }`,
        `.framer-BnEiY .framer-1rxs0zv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 129px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-BnEiY .framer-hf7h01 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 582px; }`,
        `.framer-BnEiY .framer-1fewuq8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-BnEiY .framer-lkkgzp, .framer-BnEiY .framer-1176tvz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-BnEiY .framer-cq07ox, .framer-BnEiY .framer-fwqc1i, .framer-BnEiY .framer-171rhe2, .framer-BnEiY .framer-1lx1xfw { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 582px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-BnEiY .framer-p2f5lf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-BnEiY .framer-arl148 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 221px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 519px; }`,
        `.framer-BnEiY .framer-7g3vva { --border-bottom-width: 1px; --border-color: #e5e7eb; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 67px; justify-content: flex-start; overflow: visible; padding: 0px 0px 20px 0px; position: relative; width: 100%; }`,
        `.framer-BnEiY .framer-26dehb, .framer-BnEiY .framer-w2xk0p, .framer-BnEiY .framer-iufjdc { flex: none; height: 42px; position: relative; width: 42px; }`,
        `.framer-BnEiY .framer-1tmip82 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: 46px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 219px; }`,
        `.framer-BnEiY .framer-57v1io, .framer-BnEiY .framer-gnot07, .framer-BnEiY .framer-g8nbej { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 21px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-BnEiY .framer-1v2ovpe, .framer-BnEiY .framer-1gtvoye, .framer-BnEiY .framer-11lbyx4, .framer-BnEiY .framer-l7hbqj, .framer-BnEiY .framer-zom7m8 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 219px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-BnEiY .framer-1d3ogcg { flex: none; gap: 0px; height: 21px; overflow: visible; position: relative; width: 100%; }`,
        `.framer-BnEiY .framer-15zqul7, .framer-BnEiY .framer-1lk6q14, .framer-BnEiY .framer-53j5mf, .framer-BnEiY .framer-1frday0, .framer-BnEiY .framer-1d3demq { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 0px; position: absolute; top: -1px; white-space: pre; width: auto; }`,
        `.framer-BnEiY .framer-1bczsnk { --border-bottom-width: 1px; --border-color: #e5e7eb; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 1px; justify-content: flex-start; overflow: visible; padding: 20px 0px 20px 0px; position: relative; width: 100%; }`,
        `.framer-BnEiY .framer-6mycsz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: 46px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 280px; }`,
        `.framer-BnEiY .framer-1x1izs1 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 280px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-BnEiY .framer-17y630l { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 66px; justify-content: flex-start; overflow: visible; padding: 20px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-BnEiY .framer-xbei4z { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: 46px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 306px; }`,
        `.framer-BnEiY .framer-3qsl0z { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 306px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-BnEiY .framer-1mwohoc { align-content: center; align-items: center; background-color: #fafafa; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: flex-start; overflow: visible; padding: 60px 183px 60px 183px; position: relative; width: 100%; }`,
        `.framer-BnEiY .framer-1a9cror { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 760px; }`,
        `.framer-BnEiY .framer-1etfgym, .framer-BnEiY .framer-1use72s, .framer-BnEiY .framer-1bclw06, .framer-BnEiY .framer-12ooltp, .framer-BnEiY .framer-1x6mlkp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 14px 0px 14px; position: relative; width: min-content; }`,
        `.framer-BnEiY .framer-k9h3dq { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 760px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-BnEiY .framer-aor08b { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1280px; }`,
        `.framer-BnEiY .framer-1q0u6xg, .framer-BnEiY .framer-1kh73f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-BnEiY .framer-1698e9u, .framer-BnEiY .framer-6gvsvx, .framer-BnEiY .framer-1cxnzp3, .framer-BnEiY .framer-6n70n3, .framer-BnEiY .framer-1nhv5bk { --border-bottom-width: 1px; --border-color: #ebebeb; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 198px; justify-content: center; overflow: visible; padding: 24px; position: relative; width: 1px; }`,
        `.framer-BnEiY .framer-10bmqi4, .framer-BnEiY .framer-7994oy, .framer-BnEiY .framer-13y3aip, .framer-BnEiY .framer-198vm6r, .framer-BnEiY .framer-1l14orw { align-content: center; align-items: center; aspect-ratio: 1 / 1; background-color: #e7f9b9; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18.75px; height: auto; justify-content: center; overflow: visible; padding: 11.250000953674316px; position: relative; width: 60px; }`,
        `.framer-BnEiY .framer-1o7yp5y { flex: none; height: 15px; position: relative; width: 15px; }`,
        `.framer-BnEiY .framer-1g8jf5f, .framer-BnEiY .framer-1sc79wd, .framer-BnEiY .framer-8mb24p, .framer-BnEiY .framer-17dtmhm, .framer-BnEiY .framer-1y5xqx4 { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; overflow: hidden; position: relative; width: 30px; }`,
        `.framer-BnEiY .framer-v6ypj1, .framer-BnEiY .framer-9vq7km, .framer-BnEiY .framer-144xjn6, .framer-BnEiY .framer-vxcgc { flex: none; height: 29px; left: 1px; position: absolute; top: 1px; width: 29px; }`,
        `.framer-BnEiY .framer-litolh, .framer-BnEiY .framer-19ocs6m, .framer-BnEiY .framer-9knlb, .framer-BnEiY .framer-h90vv8, .framer-BnEiY .framer-1whd02r { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-BnEiY .framer-zgllgk, .framer-BnEiY .framer-75nlk1, .framer-BnEiY .framer-127l0l { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 369px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-BnEiY .framer-n7c35p { flex: none; height: 27px; left: 2px; position: absolute; top: 2px; width: 27px; }`,
        `.framer-BnEiY .framer-1fe45mm, .framer-BnEiY .framer-zmbh0r { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 585px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-BnEiY .framer-82kv4q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1280px; }`,
        `.framer-BnEiY .framer-fljhzh, .framer-BnEiY .framer-10ml3n6, .framer-BnEiY .framer-1a1lhr8, .framer-BnEiY .framer-1w8abwb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-BnEiY .framer-ecx8ka, .framer-BnEiY .framer-1qmhibi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 1px 0px 1px 0px; position: relative; width: 834px; }`,
        `.framer-BnEiY .framer-j2teg6 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 805px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-BnEiY .framer-1ly0djh { flex: none; height: 226px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1138px; }`,
        `.framer-BnEiY .framer-1xar8p0 { bottom: 180px; flex: none; height: 3px; left: calc(50.00000000000002% - 1114px / 2); position: absolute; width: 1114px; }`,
        `.framer-BnEiY .framer-v22t20 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; transform: translate(-50%, -50%); width: min-content; }`,
        `.framer-BnEiY .framer-x2hfp7, .framer-BnEiY .framer-1dumm32, .framer-BnEiY .framer-1xyrvim, .framer-BnEiY .framer-xuppgy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 11px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 247px; }`,
        `.framer-BnEiY .framer-1abqol8, .framer-BnEiY .framer-xjd7m2, .framer-BnEiY .framer-1v6b67w, .framer-BnEiY .framer-9h5k47 { --border-bottom-width: 1.2000000476837158px; --border-color: #e3e6df; --border-left-width: 1.2000000476837158px; --border-right-width: 1.2000000476837158px; --border-style: solid; --border-top-width: 1.2000000476837158px; align-content: center; align-items: center; aspect-ratio: 1 / 1; background-color: #ffffff; border-bottom-left-radius: 120px; border-bottom-right-radius: 120px; border-top-left-radius: 120px; border-top-right-radius: 120px; box-shadow: 0px 2.4000000953674316px 9.600000381469727px 0px rgba(0, 0, 0, 0.04); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4.800000190734863px; height: auto; justify-content: center; overflow: visible; padding: 4.800000190734863px; position: relative; width: 80px; }`,
        `.framer-BnEiY .framer-1gy691n, .framer-BnEiY .framer-1uzs6f7 { flex: none; gap: 0px; height: 24px; overflow: hidden; position: relative; width: 24px; }`,
        `.framer-BnEiY .framer-rxp2o7 { flex: none; height: 20px; left: 2px; position: absolute; top: 2px; width: 20px; }`,
        `.framer-BnEiY .framer-6pqvl1, .framer-BnEiY .framer-1fg5nas, .framer-BnEiY .framer-j95hrk, .framer-BnEiY .framer-8nflc3 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 247px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-BnEiY .framer-1nr3f36, .framer-BnEiY .framer-12f5cv7, .framer-BnEiY .framer-na1gx7, .framer-BnEiY .framer-1j1youy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-BnEiY .framer-182blgl, .framer-BnEiY .framer-171fg6e { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; overflow: visible; position: relative; width: 24px; }`,
        `.framer-BnEiY .framer-1o0o92i, .framer-BnEiY .framer-skfs2h, .framer-BnEiY .framer-zrwaad, .framer-BnEiY .framer-33994a, .framer-BnEiY .framer-1hefngn { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-BnEiY .framer-mnjkcd { flex: none; height: 8px; left: 2px; position: absolute; top: 2px; width: 8px; }`,
        `.framer-BnEiY .framer-1xb7qap { flex: none; height: 10px; left: 12px; position: absolute; top: 2px; width: 10px; }`,
        `.framer-BnEiY .framer-nf74o8 { flex: none; height: 10px; left: 2px; position: absolute; top: 12px; width: 10px; }`,
        `.framer-BnEiY .framer-dh6jk0 { flex: none; height: 8px; left: 14px; position: absolute; top: 14px; width: 8px; }`,
        `.framer-BnEiY .framer-1vym7tq { flex: none; height: 5px; left: 2px; position: absolute; top: 2px; width: 20px; }`,
        `.framer-BnEiY .framer-o5vk4t { flex: none; height: 8px; left: 2px; position: absolute; top: 14px; width: 20px; }`,
        `.framer-BnEiY .framer-1chnt8e { bottom: 11px; flex: none; left: 10px; position: absolute; right: 14px; top: 5px; }`,
        `.framer-BnEiY .framer-1mcb7t3 { flex: none; height: 5px; left: 8px; position: absolute; top: 6px; width: 8px; }`,
        `.framer-BnEiY .framer-y8a0rc { flex: none; height: 14px; left: 1px; position: absolute; top: 5px; width: 22px; }`,
        `.framer-BnEiY .framer-1s53c56 { flex: none; height: 612px; overflow: visible; position: relative; width: 1280px; }`,
        `.framer-BnEiY .framer-i3j9q0 { --border-bottom-width: 1px; --border-color: #d6dad0; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; aspect-ratio: 2.0908626850433896 / 1; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; flex: none; height: auto; left: 0px; position: absolute; top: 0px; width: 1280px; }`,
        `.framer-BnEiY .framer-1b4bxrl { --border-bottom-width: 0.48px; --border-color: #cfe0a7; --border-left-width: 0.48px; --border-right-width: 0.48px; --border-style: solid; --border-top-width: 0.48px; align-content: center; align-items: center; background-color: #f8fbf2; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7.08px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4.72px 7.08px 4.72px 7.08px; position: relative; width: 300px; }`,
        `.framer-BnEiY .framer-1l5ejpr { flex: none; height: 11px; position: relative; width: 11px; }`,
        `.framer-BnEiY .framer-84pagj { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-BnEiY .framer-1unrhyx { --border-bottom-width: 1px; --border-color: #cfe0a7; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #f8fbf2; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 10px 15px 10px 15px; position: relative; width: min-content; }`,
        `.framer-BnEiY .framer-1w5yo7f { flex: none; height: 24px; position: relative; width: 24px; }`,
        `.framer-BnEiY .framer-di3w8q, .framer-BnEiY .framer-1opw77m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 37px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-BnEiY .framer-a6zrec { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5.23px; height: 143px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-BnEiY .framer-1p96vzv { --border-bottom-width: 0.53px; --border-color: #e5e7eb; --border-left-width: 0.53px; --border-right-width: 0.53px; --border-style: solid; --border-top-width: 0.53px; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; flex: none; gap: 0px; height: 143px; overflow: hidden; position: relative; width: 330px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-BnEiY .framer-f7xbxi { flex: none; gap: 0px; height: 20px; left: 0px; overflow: visible; position: absolute; top: 0px; width: 627px; }`,
        `.framer-BnEiY .framer-m4eewc { --border-bottom-width: 0.53px; --border-color: #e5e7eb; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; background-color: #fafafa; flex: none; gap: 0px; height: 20px; left: 0px; overflow: visible; position: absolute; top: 0px; width: 188px; }`,
        `.framer-BnEiY .framer-1kgjsp4 { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 11px; position: absolute; top: 7px; white-space: pre; width: auto; }`,
        `.framer-BnEiY .framer-u7ig2x { --border-bottom-width: 0.53px; --border-color: #e5e7eb; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; background-color: #fafafa; bottom: 0px; flex: none; gap: 0px; left: 129px; overflow: visible; position: absolute; top: 0px; width: 439px; }`,
        `.framer-BnEiY .framer-r4ywio { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 10px; position: absolute; top: 7px; white-space: pre; width: auto; }`,
        `.framer-BnEiY .framer-157hcou { bottom: 0px; flex: none; gap: 0px; height: 122px; left: 0px; overflow: visible; position: absolute; width: 329px; }`,
        `.framer-BnEiY .framer-18aouf0 { flex: none; gap: 0px; height: 30px; left: 0px; overflow: visible; position: absolute; top: 0px; width: 315px; }`,
        `.framer-BnEiY .framer-9oge8m, .framer-BnEiY .framer-ulvjlq, .framer-BnEiY .framer-1h18sv2 { --border-bottom-width: 0.53px; --border-color: #e5e7eb; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; flex: none; gap: 0px; height: 31px; left: 0px; overflow: visible; position: absolute; top: 0px; width: 188px; }`,
        `.framer-BnEiY .framer-gzyyxz, .framer-BnEiY .framer-1m80123, .framer-BnEiY .framer-cpoxz, .framer-BnEiY .framer-1b48dkf { flex: none; gap: 0px; height: 10px; left: 11px; overflow: visible; position: absolute; top: 10px; width: 167px; }`,
        `.framer-BnEiY .framer-zrvxgs, .framer-BnEiY .framer-f1o7y5, .framer-BnEiY .framer-1o9mm9c, .framer-BnEiY .framer-1ohoabl { background-color: #73b200; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; gap: 0px; height: 3px; left: 0px; overflow: visible; position: absolute; top: 4px; width: 3px; }`,
        `.framer-BnEiY .framer-1hb9bpn, .framer-BnEiY .framer-umznp3, .framer-BnEiY .framer-n1dom8, .framer-BnEiY .framer-1bgaxu { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 7px; position: absolute; top: 0px; white-space: pre; width: auto; }`,
        `.framer-BnEiY .framer-1xvr7k3, .framer-BnEiY .framer-1wykr59 { --border-bottom-width: 0.53px; --border-color: #e5e7eb; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; bottom: 0px; flex: none; gap: 0px; left: 129px; overflow: visible; position: absolute; top: 0px; width: 300px; }`,
        `.framer-BnEiY .framer-13zsefz, .framer-BnEiY .framer-wv8hqp, .framer-BnEiY .framer-n200ze { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 11px; justify-content: center; left: 10px; overflow: visible; padding: 0px; position: absolute; top: 10px; width: min-content; }`,
        `.framer-BnEiY .framer-tc0tci { flex: none; gap: 0px; height: 31px; left: 0px; overflow: visible; position: absolute; top: 30px; width: 315px; }`,
        `.framer-BnEiY .framer-1d6jwt { --border-bottom-width: 0.53px; --border-color: #e5e7eb; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; flex: none; gap: 0px; height: 30px; overflow: visible; position: absolute; right: -14px; top: 0px; width: 200px; }`,
        `.framer-BnEiY .framer-s153eu { bottom: 31px; flex: none; gap: 0px; height: 30px; left: 0px; overflow: visible; position: absolute; width: 315px; }`,
        `.framer-BnEiY .framer-afr5gr { bottom: 0px; flex: none; gap: 0px; height: 31px; left: 0px; overflow: visible; position: absolute; width: 215px; }`,
        `.framer-BnEiY .framer-1n0tjfn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 11px; justify-content: center; left: 199px; overflow: visible; padding: 0px; position: absolute; top: 10px; width: 162px; }`,
        `.framer-BnEiY .framer-1kbyyha { --framer-paragraph-spacing: 0px; bottom: 4px; flex: none; height: auto; left: 139px; position: absolute; white-space: pre; width: auto; }`,
        `.framer-BnEiY .framer-1h5gyet { --border-bottom-width: 1px; --border-color: #e5e7eb; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; gap: 0px; height: 273px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-BnEiY .framer-vwf5qt { flex: none; gap: 0px; height: 38px; left: 1px; overflow: visible; position: absolute; top: 1px; width: 1199px; }`,
        `.framer-BnEiY .framer-1mptf8x { --border-bottom-width: 1px; --border-color: #e5e7eb; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; background-color: #fafafa; flex: none; gap: 0px; height: 38px; left: 0px; overflow: visible; position: absolute; top: 0px; width: 360px; }`,
        `.framer-BnEiY .framer-yj7mrn { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 21px; position: absolute; top: 13px; white-space: pre; width: auto; }`,
        `.framer-BnEiY .framer-1yyy5f6 { --border-bottom-width: 1px; --border-color: #e5e7eb; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; background-color: #fafafa; flex: none; gap: 0px; height: 38px; left: 360px; overflow: visible; position: absolute; top: 0px; width: 839px; }`,
        `.framer-BnEiY .framer-1h1crbs { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 20px; position: absolute; top: 13px; white-space: pre; width: auto; }`,
        `.framer-BnEiY .framer-19e4rz4 { flex: none; gap: 0px; height: 234px; left: 1px; overflow: visible; position: absolute; top: 39px; width: 1199px; }`,
        `.framer-BnEiY .framer-t42g7z { flex: none; gap: 0px; height: 58px; left: 0px; overflow: visible; position: absolute; top: 0px; width: 1199px; }`,
        `.framer-BnEiY .framer-uyt70p, .framer-BnEiY .framer-1ikfxd9, .framer-BnEiY .framer-1p72y5f { --border-bottom-width: 1px; --border-color: #e5e7eb; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; flex: none; gap: 0px; height: 58px; left: 0px; overflow: visible; position: absolute; top: 0px; width: 360px; }`,
        `.framer-BnEiY .framer-18b64ty, .framer-BnEiY .framer-xbcgbm, .framer-BnEiY .framer-jpmk9f, .framer-BnEiY .framer-11w1k32 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 20px; justify-content: flex-start; left: 21px; overflow: visible; padding: 0px; position: absolute; top: 19px; width: 319px; }`,
        `.framer-BnEiY .framer-1xvqx85, .framer-BnEiY .framer-1sowpab, .framer-BnEiY .framer-17s1wjk, .framer-BnEiY .framer-1csh3qj { background-color: #73b200; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; flex: none; gap: 0px; height: 6px; overflow: visible; position: relative; width: 6px; }`,
        `.framer-BnEiY .framer-192hjtf, .framer-BnEiY .framer-17ammhx, .framer-BnEiY .framer-aoqs75 { --border-bottom-width: 1px; --border-color: #e5e7eb; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; flex: none; gap: 0px; height: 58px; left: 360px; overflow: visible; position: absolute; top: 0px; width: 839px; }`,
        `.framer-BnEiY .framer-1ivjk25, .framer-BnEiY .framer-we2kia, .framer-BnEiY .framer-19ntg8n { flex: none; gap: 0px; height: 21px; left: 20px; overflow: visible; position: absolute; top: 19px; width: 799px; }`,
        `.framer-BnEiY .framer-xo1u5o { flex: none; gap: 0px; height: 58px; left: 0px; overflow: visible; position: absolute; top: 58px; width: 1199px; }`,
        `.framer-BnEiY .framer-19hwcd8 { flex: none; gap: 0px; height: 58px; left: 0px; overflow: visible; position: absolute; top: 117px; width: 1199px; }`,
        `.framer-BnEiY .framer-qf5qwi { flex: none; gap: 0px; height: 58px; left: 0px; overflow: visible; position: absolute; top: 175px; width: 1199px; }`,
        `.framer-BnEiY .framer-1dwadht { flex: none; gap: 0px; height: 21px; left: 380px; overflow: visible; position: absolute; top: 19px; width: 799px; }`,
        `.framer-BnEiY .framer-1o8l6uo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-BnEiY .framer-d41uqb { flex: none; gap: 0px; height: 156px; overflow: visible; position: relative; width: 1200px; }`,
        `.framer-BnEiY .framer-1fl9rll { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 0px; width: 100%; }`,
        `.framer-BnEiY .framer-1cu5sfy { --border-bottom-width: 1px; --border-color: #e5e7eb; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; flex: none; gap: 0px; height: 156px; overflow: hidden; position: relative; width: 1200px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-BnEiY .framer-ri8aq { --border-bottom-width: 0px; --border-color: #e5e7eb; --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 155px; justify-content: flex-start; left: 1px; overflow: visible; padding: 28px 24px 28px 24px; position: absolute; top: 1px; width: 300px; }`,
        `.framer-BnEiY .framer-4f7m8r, .framer-BnEiY .framer-w38oyy, .framer-BnEiY .framer-1g9gdxw, .framer-BnEiY .framer-1xp62yz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-BnEiY .framer-lw6l22, .framer-BnEiY .framer-1e1z1mu, .framer-BnEiY .framer-bor213, .framer-BnEiY .framer-1qjqtco { background-color: var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, #b2ed1d); border-bottom-left-radius: 14px; border-bottom-right-radius: 14px; border-top-left-radius: 14px; border-top-right-radius: 14px; flex: none; gap: 0px; height: 28px; overflow: visible; position: relative; width: 28px; }`,
        `.framer-BnEiY .framer-16ac8a3, .framer-BnEiY .framer-osi883, .framer-BnEiY .framer-8mfkmo, .framer-BnEiY .framer-1hkcz3o, .framer-BnEiY .framer-18f8h8h, .framer-BnEiY .framer-xwpy7j { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); white-space: pre; width: auto; }`,
        `.framer-BnEiY .framer-u378kc, .framer-BnEiY .framer-xoc7p1, .framer-BnEiY .framer-1nxmmjf, .framer-BnEiY .framer-1ezfn0h, .framer-BnEiY .framer-k9r4cl, .framer-BnEiY .framer-1q8cjfl, .framer-BnEiY .framer-cgciz1, .framer-BnEiY .framer-1gffgh { --framer-paragraph-spacing: 0px; aspect-ratio: 5.25 / 1; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 126px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-BnEiY .framer-3ge525, .framer-BnEiY .framer-13wl8xl { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 252px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-BnEiY .framer-13zyyy8 { --border-bottom-width: 0px; --border-color: #e5e7eb; --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 155px; justify-content: flex-start; left: 301px; overflow: visible; padding: 28px 24px 28px 36px; position: absolute; top: 1px; width: 300px; }`,
        `.framer-BnEiY .framer-1th8w9d, .framer-BnEiY .framer-zya1sn, .framer-BnEiY .framer-1vmqn1i, .framer-BnEiY .framer-1hii159, .framer-BnEiY .framer-11nylu6, .framer-BnEiY .framer-ba1toc { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 240px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-BnEiY .framer-i9q1p { --border-bottom-width: 0px; --border-color: #e5e7eb; --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 155px; justify-content: flex-start; left: 600px; overflow: visible; padding: 28px 24px 28px 36px; position: absolute; top: 1px; width: 300px; }`,
        `.framer-BnEiY .framer-1vkt40e { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 155px; justify-content: flex-start; left: 899px; overflow: visible; padding: 28px 24px 28px 36px; position: absolute; top: 1px; width: 300px; }`,
        `.framer-BnEiY .framer-14lkub6 { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 46%; position: absolute; top: 50%; transform: translate(-50%, -50%); white-space: pre; width: auto; }`,
        `.framer-BnEiY .framer-ayjfmb { align-content: center; align-items: center; background-color: #f0fbd2; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 20px; justify-content: center; left: 291px; overflow: visible; padding: 6px; position: absolute; top: 68px; width: 20px; }`,
        `.framer-BnEiY .framer-t6azfz, .framer-BnEiY .framer-1612lno, .framer-BnEiY .framer-1edf7tl { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; overflow: visible; position: relative; width: 12px; }`,
        `.framer-BnEiY .framer-3jfxi9, .framer-BnEiY .framer-1urg0vo, .framer-BnEiY .framer-18qucsm { flex: none; height: 8px; left: 4px; position: absolute; top: 2px; width: 5px; }`,
        `.framer-BnEiY .framer-6hls6l { align-content: center; align-items: center; background-color: #f0fbd2; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 20px; justify-content: center; left: 591px; overflow: visible; padding: 6px; position: absolute; top: 68px; width: 20px; }`,
        `.framer-BnEiY .framer-117f8t9 { align-content: center; align-items: center; background-color: #f0fbd2; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 20px; justify-content: center; left: 891px; overflow: visible; padding: 6px; position: absolute; top: 68px; width: 20px; }`,
        `.framer-BnEiY .framer-l5et8y { --border-bottom-width: 1px; --border-color: rgba(34, 34, 34, 0.1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-BnEiY .framer-zrqx8t { --border-bottom-width: 1px; --border-color: #e5e7eb; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 120px; justify-content: flex-start; overflow: visible; padding: 28px 24px 28px 24px; position: relative; width: min-content; }`,
        `.framer-BnEiY .framer-js8scn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 252px; }`,
        `.framer-BnEiY .framer-o4c4t0, .framer-BnEiY .framer-46wdip, .framer-BnEiY .framer-1g619u7, .framer-BnEiY .framer-11lsmu9 { background-color: #73b200; border-bottom-left-radius: 14px; border-bottom-right-radius: 14px; border-top-left-radius: 14px; border-top-right-radius: 14px; flex: none; gap: 0px; height: 28px; overflow: visible; position: relative; width: 28px; }`,
        `.framer-BnEiY .framer-q9x1pq { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 50%; position: absolute; top: 8px; transform: translateX(-50%); white-space: pre; width: auto; }`,
        `.framer-BnEiY .framer-1h8c28o { --border-bottom-width: 1px; --border-color: #e5e7eb; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 150px; justify-content: flex-start; overflow: visible; padding: 28px 24px 28px 36px; position: relative; width: min-content; }`,
        `.framer-BnEiY .framer-gvntrg, .framer-BnEiY .framer-6bbzuh, .framer-BnEiY .framer-1bkvth { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 240px; }`,
        `.framer-BnEiY .framer-1n8k5bc { --border-bottom-width: 1px; --border-color: #e5e7eb; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 28px 24px 28px 36px; position: relative; width: min-content; }`,
        `.framer-BnEiY .framer-aan5p7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 155px; justify-content: flex-start; overflow: visible; padding: 20px 24px 28px 36px; position: relative; width: min-content; }`,
        `.framer-BnEiY .framer-17ocrx { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 834px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-BnEiY .framer-tdmu1j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 37px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1280px; }`,
        `.framer-BnEiY .framer-1ut6so-container, .framer-BnEiY .framer-1n4fqjg-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-BnEiY .framer-h44bje { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 19px; height: min-content; justify-content: flex-start; overflow: visible; padding: 48px 0px 48px 0px; position: relative; width: 1280px; }`,
        `.framer-BnEiY .framer-j7f3mk-container, .framer-BnEiY .framer-1wn4frh-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-BnEiY .framer-sgdo1i { background-color: var(--token-7122224f-85bb-46cf-a093-189b897a9de6, #fafaf9); flex: none; height: 386px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-BnEiY .framer-123iarr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; right: 0px; top: 50%; transform: translateY(-50%); will-change: var(--framer-will-change-effect-override, transform); z-index: 0; }`,
        `.framer-BnEiY .framer-1vpicyl-container { flex: 1 0 0px; height: 386px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-BnEiY .framer-1plsupn-container { bottom: 0px; flex: none; height: auto; left: 0px; position: absolute; right: 0px; z-index: 2; }`,
        ...Oe,
        ...he,
        ...De,
        ...ye,
        `.framer-BnEiY[data-border="true"]::after, .framer-BnEiY [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (max-width: 1439.98px) { .framer-BnEiY.framer-1803tfs { width: 390px; } .framer-BnEiY .framer-h327k3 { gap: 35px; padding: 120px 45px 70px 45px; width: 390px; } .framer-BnEiY .framer-1fsx9xu { flex-direction: column; width: 100%; } .framer-BnEiY .framer-lcfexk { gap: 20px; width: 100%; } .framer-BnEiY .framer-28b31v, .framer-BnEiY .framer-3vyeq6, .framer-BnEiY .framer-hf7h01, .framer-BnEiY .framer-1a9cror, .framer-BnEiY .framer-aor08b, .framer-BnEiY .framer-zgllgk, .framer-BnEiY .framer-75nlk1, .framer-BnEiY .framer-127l0l, .framer-BnEiY .framer-1fe45mm, .framer-BnEiY .framer-zmbh0r, .framer-BnEiY .framer-fljhzh, .framer-BnEiY .framer-1use72s, .framer-BnEiY .framer-ecx8ka, .framer-BnEiY .framer-di3w8q, .framer-BnEiY .framer-1a1lhr8, .framer-BnEiY .framer-12ooltp, .framer-BnEiY .framer-1qmhibi, .framer-BnEiY .framer-1w8abwb, .framer-BnEiY .framer-1x6mlkp { width: 100%; } .framer-BnEiY .framer-1i7lqn6, .framer-BnEiY .framer-dakj33, .framer-BnEiY .framer-1vtlwz5, .framer-BnEiY .framer-cq07ox, .framer-BnEiY .framer-fwqc1i, .framer-BnEiY .framer-171rhe2, .framer-BnEiY .framer-1lx1xfw, .framer-BnEiY .framer-3qsl0z, .framer-BnEiY .framer-k9h3dq, .framer-BnEiY .framer-j2teg6, .framer-BnEiY .framer-17ocrx { flex: 1 0 0px; width: 1px; } .framer-BnEiY .framer-1pm7qz6 { gap: 10px; width: 100%; } .framer-BnEiY .framer-plldpr, .framer-BnEiY .framer-fgms2a, .framer-BnEiY .framer-fpjn0g, .framer-BnEiY .framer-1opw77m, .framer-BnEiY .framer-1o8l6uo, .framer-BnEiY .framer-80wivc, .framer-BnEiY .framer-tdmu1j, .framer-BnEiY .framer-1k8qenj { width: 300px; } .framer-BnEiY .framer-1rxs0zv { flex-direction: column; gap: 45px; width: 300px; } .framer-BnEiY .framer-p2f5lf { gap: 10px; } .framer-BnEiY .framer-arl148 { height: min-content; width: 300px; } .framer-BnEiY .framer-1bczsnk { flex: none; height: min-content; padding: 20px 0px 10px 0px; } .framer-BnEiY .framer-6mycsz { flex: 1 0 0px; height: min-content; padding: 0px 0px 5px 0px; width: 1px; } .framer-BnEiY .framer-9epts1, .framer-BnEiY .framer-18vmu5y, .framer-BnEiY .framer-hw0ghu, .framer-BnEiY .framer-6osje4, .framer-BnEiY .framer-x20hb5, .framer-BnEiY .framer-15wym7k, .framer-BnEiY .framer-89qeqz { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-BnEiY .framer-17y630l { height: min-content; } .framer-BnEiY .framer-xbei4z { flex: 1 0 0px; height: min-content; padding: 0px 0px 10px 0px; width: 1px; } .framer-BnEiY .framer-1mwohoc { gap: 20px; padding: 40px 45px 40px 45px; width: 390px; } .framer-BnEiY .framer-1etfgym { padding: 0px; width: 100%; } .framer-BnEiY .framer-zu3lso, .framer-BnEiY .framer-auxu5s, .framer-BnEiY .framer-12wr6jq, .framer-BnEiY .framer-111rbbo { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; } .framer-BnEiY .framer-1q0u6xg { flex-direction: column; width: 300px; } .framer-BnEiY .framer-1698e9u, .framer-BnEiY .framer-6gvsvx, .framer-BnEiY .framer-1cxnzp3, .framer-BnEiY .framer-6n70n3, .framer-BnEiY .framer-1nhv5bk { flex: none; height: min-content; width: 100%; } .framer-BnEiY .framer-10bmqi4, .framer-BnEiY .framer-7994oy, .framer-BnEiY .framer-13y3aip, .framer-BnEiY .framer-198vm6r, .framer-BnEiY .framer-1l14orw { border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; gap: 12.5px; padding: 7.5px; width: 40px; } .framer-BnEiY .framer-1g8jf5f, .framer-BnEiY .framer-1sc79wd, .framer-BnEiY .framer-8mb24p, .framer-BnEiY .framer-17dtmhm, .framer-BnEiY .framer-1y5xqx4 { width: 20px; } .framer-BnEiY .framer-1kh73f { flex-direction: column; } .framer-BnEiY .framer-82kv4q { gap: 25px; width: 100%; } .framer-BnEiY .framer-1ly0djh { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; width: 300px; } .framer-BnEiY .framer-v22t20 { flex-direction: column; gap: 20px; left: unset; position: relative; top: unset; transform: unset; } .framer-BnEiY .framer-1abqol8, .framer-BnEiY .framer-xjd7m2, .framer-BnEiY .framer-1v6b67w, .framer-BnEiY .framer-9h5k47 { width: 60px; } .framer-BnEiY .framer-1s53c56 { height: 144px; width: 302px; } .framer-BnEiY .framer-i3j9q0 { --border-bottom-width: 0.24px; --border-left-width: 0.24px; --border-right-width: 0.24px; --border-top-width: 0.24px; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; width: 302px; } .framer-BnEiY .framer-h44bje { flex-direction: column; padding: 24px 0px 24px 0px; width: 300px; } .framer-BnEiY .framer-j7f3mk-container, .framer-BnEiY .framer-1wn4frh-container { flex: none; width: 100%; } .framer-BnEiY .framer-sgdo1i { height: 468px; }}`,
      ]),
      ($ = w(Gt, Kt, `framer-BnEiY`)),
      ($.displayName = `Product / Tier0 / Partner`),
      ($.defaultProps = { height: 6156, width: 1440 }),
      M(
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
              {
                cssFamilyName: `Poppins`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Poppins`,
                url: `https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLEj6V15vFP-KUEg.woff2`,
                weight: `600`,
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
                cssFamilyName: `IBM Plex Mono`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `IBM Plex Mono`,
                url: `https://fonts.gstatic.com/s/ibmplexmono/v20/-F6qfjptAgt5VM-kVkqdyU8n3vAO8lJPg-IUDNg.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Poppins`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Poppins`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/E6J4GS76KHNRRUWODFCFOX2JRKNRSFVY/3GYVT5S4AH7VMPASDDKOTIPV6P3WJXGI/24R4YOH3G2SFDSTCNHOVGYEX3DMRC3CE.woff2`,
                weight: `600`,
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
                cssFamilyName: `Poppins`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Poppins`,
                url: `https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLCz7V15vFP-KUEg.woff2`,
                weight: `700`,
              },
            ],
          },
          ...Ct,
          ...wt,
          ...Tt,
          ...Et,
          ...Dt,
          ...kt,
          ...At,
          ...g(Ae),
          ...g(ge),
          ...g(ke),
          ...g(be),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) =>
          P(
            [
              () => _(pe, {}, t),
              () => _(K, {}, t),
              () => _(Ne, {}, t),
              () => _(V, {}, t),
              () => _(Ce, {}, t),
              () => _(B, {}, t),
            ],
            t
          ),
      }),
      (qt = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `Framere0LeoctYs`,
            slots: [],
            annotations: {
              framerImmutableVariables: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerContractVersion: `1`,
              framerAutoSizeImages: `true`,
              framerIntrinsicHeight: `6156`,
              framerAcceptsLayoutTemplate: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"ns_0OUzlj":{"layout":["fixed","auto"]}}}`,
              framerDisplayContentsDiv: `false`,
              framerIntrinsicWidth: `1440`,
              framerColorSyntax: `true`,
              framerComponentViewportWidth: `true`,
              framerResponsiveScreen: `true`,
              framerScrollSections: `false`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
Jt();
export { qt as __FramerMetadata__, $ as default, Nt as queryParamNames };
//# sourceMappingURL=J2oeoSsKqv3E1eZFbqUZkCJTIo0DgeCSASamTOCwNZA.gHe3V9KJ.mjs.map
