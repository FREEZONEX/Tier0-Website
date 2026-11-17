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
  y as d,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { S as f, Yi as p, t as m, v as ee } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import {
  D as h,
  E as te,
  G as g,
  I as _,
  M as v,
  Nt as ne,
  P as y,
  Pt as b,
  Q as x,
  U as S,
  a as re,
  gt as ie,
  j as C,
  jt as ae,
  k as oe,
  lt as w,
  s as T,
  v as E,
  wt as se,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { i as D, n as O, r as k, t as ce } from "./F3NdZsOi7.BZcXtl7q.mjs?v=20261116-migration-v2";
import { i as A, n as le, r as j, t as ue } from "./HNigw6pHS.BbLcGwmq.mjs?v=20261116-migration-v2";
import { n as M, t as N } from "./qc19z0O6l.cxC2IbCs.mjs?v=20261116-migration-v2";
function P(e, t) {
  for (; t; ) {
    let n = F[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function de(e) {
  let t = [];
  for (; e; ) {
    let n = F[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function fe(e) {
  let t = de(e);
  if (t) throw t;
}
var F;
function I() {
  return (I = e(() => {
    (x(), (F = { AYmst8Nt3: new E(() => import("./O2sCN9yxq-0.BKvpETFx.mjs?v=20261116-migration-v2")) }));
  }))();
}
function L(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (s(),
      x(),
      m(),
      r(),
      D(),
      A(),
      I(),
      M(),
      (R = S(N)),
      (z = [`Rym8t4ER5`, `GL5t2qn7B`, `Go_Rq93bc`, `aw7ux4rIC`, `VAe_lTcMU`, `UVjtmqtGi`]),
      (B = `framer-ZUkp7`),
      (V = {
        aw7ux4rIC: `framer-v-1ibcjjc`,
        GL5t2qn7B: `framer-v-mnbkuw`,
        Go_Rq93bc: `framer-v-af9rj8`,
        Rym8t4ER5: `framer-v-1h5e25c`,
        UVjtmqtGi: `framer-v-5or2zt`,
        VAe_lTcMU: `framer-v-116p5lr`,
      }),
      (H = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (U = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (W = ({ value: e, children: t }) => {
        let r = i(f),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ l(f.Provider, { value: o, children: t });
      }),
      (G = {
        "advanced an PHONE": `aw7ux4rIC`,
        "advanced an": `Go_Rq93bc`,
        "PHONE Variant 6": `UVjtmqtGi`,
        desktop: `Rym8t4ER5`,
        phone: `GL5t2qn7B`,
        Variant: `VAe_lTcMU`,
      }),
      (K = p.create(a)),
      (q = (e, t) => {
        let [n, r] = d(e),
          [i, a] = d(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (J = ({
        botton1: e,
        headline: t,
        height: n,
        id: r,
        tagText: i,
        text: a,
        width: o,
        ...s
      }) => ({
        ...s,
        AspCk9Iwt:
          a ??
          s.AspCk9Iwt ??
          `Tier0 不只是在系统之间传递数据。传统集成工具往往擅长传输。它们把一个系统连接到另一个系统，打通协议，传输数据。然而，数据传输并不能创建可复用的生产模型。`,
        DC7Tugabs: i ?? s.DC7Tugabs ?? `立刻开始`,
        Gl_ZpIhSp: t ?? s.Gl_ZpIhSp ?? `≈`,
        H7eKfGy5E: e ?? s.H7eKfGy5E ?? `预约会议`,
        variant: G[s.variant] ?? s.variant ?? `Rym8t4ER5`,
      })),
      (Y = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = /*#__PURE__*/ c(function (e, n) {
        let r = o(null),
          i = n ?? r,
          s = t(),
          { activeLocale: c, contentLocale: d, setLocale: f } = se(),
          m = ie(),
          {
            style: g,
            className: _,
            layoutId: v,
            variant: b,
            Gl_ZpIhSp: x,
            AspCk9Iwt: S,
            H7eKfGy5E: C,
            onH7eKfGy5EChange: w,
            DC7Tugabs: T,
            ...E
          } = J(e),
          [D, O] = q(C, w),
          {
            baseVariant: k,
            classNames: A,
            clearLoadingGesture: le,
            gestureHandlers: j,
            gestureVariant: M,
            isLoading: de,
            setGestureState: F,
            setVariant: I,
            variants: R,
          } = ne({
            cycleOrder: z,
            defaultVariant: `Rym8t4ER5`,
            ref: i,
            variant: b,
            variantClassNames: V,
          }),
          G = Y(e, R),
          X = y(B, ce, ue);
        fe(c);
        let Z = () => k === `Go_Rq93bc`,
          Q = () => k === `aw7ux4rIC`;
        ae();
        let $ = () => !![`VAe_lTcMU`, `UVjtmqtGi`].includes(k);
        return /*#__PURE__*/ l(ee, {
          id: v ?? s,
          children: /*#__PURE__*/ l(K, {
            animate: R,
            initial: !1,
            children: /*#__PURE__*/ l(W, {
              value: H,
              children: /*#__PURE__*/ l(p.div, {
                ...E,
                ...j,
                className: y(X, `framer-1h5e25c`, _, A),
                "data-framer-name": `desktop`,
                layoutDependency: G,
                layoutId: `Rym8t4ER5`,
                ref: i,
                style: { ...g },
                ...L(
                  {
                    aw7ux4rIC: { "data-framer-name": `advanced an PHONE` },
                    GL5t2qn7B: { "data-framer-name": `phone` },
                    Go_Rq93bc: { "data-framer-name": `advanced an` },
                    UVjtmqtGi: { "data-framer-name": `PHONE Variant 6` },
                    VAe_lTcMU: { "data-framer-name": void 0 },
                  },
                  k,
                  M
                ),
                children: /*#__PURE__*/ l(p.div, {
                  className: `framer-1bvzxnx`,
                  "data-framer-name": `Container`,
                  layoutDependency: G,
                  layoutId: `Ixy_5YivJ`,
                  style: {
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                  },
                  children: /*#__PURE__*/ u(p.div, {
                    className: `framer-dxqwja`,
                    layoutDependency: G,
                    layoutId: `IXvHPTU3D`,
                    children: [
                      /*#__PURE__*/ u(p.div, {
                        className: `framer-1d3harv`,
                        layoutDependency: G,
                        layoutId: `N0TgqHSih`,
                        children: [
                          /*#__PURE__*/ l(p.div, {
                            className: `framer-xan32m`,
                            "data-border": !0,
                            "data-framer-name": `Text`,
                            layoutDependency: G,
                            layoutId: `TSBldPpFn`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgba(138, 181, 45, 0.16)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `rgba(138, 181, 45, 0.08)`,
                              borderBottomLeftRadius: 999,
                              borderBottomRightRadius: 999,
                              borderTopLeftRadius: 999,
                              borderTopRightRadius: 999,
                            },
                            children: /*#__PURE__*/ l(h, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ l(a, {
                                children: /*#__PURE__*/ l(p.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                    "--framer-font-family": `"IBM Plex Mono", "IBM Plex Mono Placeholder", monospace`,
                                    "--framer-font-size": `11px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `0.64px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(115, 178, 0))`,
                                    "--framer-text-transform": `uppercase`,
                                  },
                                  children: `Get started`,
                                }),
                              }),
                              className: `framer-1nc1kmr`,
                              "data-framer-name": `Tier0 App Builder`,
                              fonts: [`GF;IBM Plex Mono-500`],
                              layoutDependency: G,
                              layoutId: `yPx5CQ3cn`,
                              style: {
                                "--extracted-r6o4lv": `rgb(115, 178, 0)`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: T,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          /*#__PURE__*/ l(h, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ l(a, {
                              children: /*#__PURE__*/ l(p.h3, {
                                className: `framer-styles-preset-1k5p4j8`,
                                "data-styles-preset": `F3NdZsOi7`,
                                dir: `auto`,
                                style: { "--framer-text-alignment": `center` },
                                children: `Generate industrial apps with structure, not silos. `,
                              }),
                            }),
                            className: `framer-1abg9zu`,
                            "data-framer-name": `Generate industrial apps with structure, not silos`,
                            fonts: [`Inter`],
                            layoutDependency: G,
                            layoutId: `FQlXolKmP`,
                            style: { "--framer-paragraph-spacing": `0px` },
                            text: x,
                            variants: {
                              UVjtmqtGi: {
                                "--extracted-1bqba7n": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                "--extracted-gdpscs": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                              },
                              VAe_lTcMU: {
                                "--extracted-18z62cp": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                "--extracted-a0htzi": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...L(
                              {
                                UVjtmqtGi: {
                                  children:
                                    P(`v1`, d) ??
                                    /*#__PURE__*/ u(a, {
                                      children: [
                                        /*#__PURE__*/ l(p.h1, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                            "--framer-font-size": `35px`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-gdpscs, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                          },
                                          children: `描述您的工作流程`,
                                        }),
                                        /*#__PURE__*/ l(p.h1, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                            "--framer-font-size": `35px`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-1bqba7n, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                          },
                                          children: `启动真实的应用程序`,
                                        }),
                                      ],
                                    }),
                                  fonts: [`GF;IBM Plex Sans-regular`],
                                  text: void 0,
                                },
                                VAe_lTcMU: {
                                  children:
                                    P(`v0`, d) ??
                                    /*#__PURE__*/ u(a, {
                                      children: [
                                        /*#__PURE__*/ l(p.h3, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                            "--framer-font-size": `44px`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-a0htzi, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                          },
                                          children: `描述您的工作流程`,
                                        }),
                                        /*#__PURE__*/ l(p.h3, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                            "--framer-font-size": `44px`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-18z62cp, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                          },
                                          children: `启动真实的应用程序`,
                                        }),
                                      ],
                                    }),
                                  fonts: [`GF;IBM Plex Sans-regular`],
                                  text: void 0,
                                },
                              },
                              k,
                              M
                            ),
                          }),
                          /*#__PURE__*/ l(h, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ l(a, {
                              children: /*#__PURE__*/ l(p.p, {
                                className: `framer-styles-preset-1ful33y`,
                                "data-styles-preset": `HNigw6pHS`,
                                dir: `auto`,
                                style: { "--framer-text-alignment": `center` },
                                children: `Tier0 does more than move data between systems. Traditional integration tools are often good at transport. They connect one thing to another, move messages, and help bridge protocols. But transport alone does not create a reusable operational model.`,
                              }),
                            }),
                            className: `framer-sw1iuj`,
                            "data-framer-name": `Tier0 does more than move data between systems. Tr`,
                            fonts: [`Inter`],
                            layoutDependency: G,
                            layoutId: `YT9gZ5aWU`,
                            style: { "--framer-paragraph-spacing": `0px` },
                            text: S,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...L(
                              {
                                UVjtmqtGi: {
                                  children:
                                    P(`v2`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(p.p, {
                                        className: `framer-styles-preset-1ful33y`,
                                        "data-styles-preset": `HNigw6pHS`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `构建团队真正可用的应用，无需编写代码，也无需维护背后的技术栈。`,
                                      }),
                                    }),
                                  text: void 0,
                                },
                                VAe_lTcMU: {
                                  children:
                                    P(`v2`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(p.p, {
                                        className: `framer-styles-preset-1ful33y`,
                                        "data-styles-preset": `HNigw6pHS`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `构建团队真正可用的应用，无需编写代码，也无需维护背后的技术栈。`,
                                      }),
                                    }),
                                  text: void 0,
                                },
                              },
                              k,
                              M
                            ),
                          }),
                          Z() &&
                            /*#__PURE__*/ l(p.div, {
                              className: `framer-fhuq1m`,
                              "data-border": !0,
                              "data-framer-name": `Paragraph`,
                              layoutDependency: G,
                              layoutId: `pjHkYOEbD`,
                              style: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `rgb(214, 218, 208)`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                                backgroundColor: `rgb(255, 255, 255)`,
                              },
                              children: /*#__PURE__*/ l(h, {
                                __fromCanvasComponent: !0,
                                children:
                                  P(`v3`, d) ??
                                  /*#__PURE__*/ l(a, {
                                    children: /*#__PURE__*/ l(p.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                        "--framer-font-family": `"IBM Plex Mono", "IBM Plex Mono Placeholder", monospace`,
                                        "--framer-font-size": `12px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `0.6px`,
                                        "--framer-line-height": `16.8px`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(120, 127, 136))`,
                                        "--framer-text-transform": `uppercase`,
                                      },
                                      children: `赋予数据上下文 → 高级分析 → AI 可用`,
                                    }),
                                  }),
                                className: `framer-1fazwdq`,
                                "data-framer-name": `Contextualized Data → Advanced Analytics → AI-Read`,
                                fonts: [`GF;IBM Plex Mono-500`],
                                layoutDependency: G,
                                layoutId: `b5nN3FOZs`,
                                style: {
                                  "--extracted-r6o4lv": `rgb(120, 127, 136)`,
                                  "--framer-paragraph-spacing": `0px`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          Q() &&
                            /*#__PURE__*/ l(p.div, {
                              className: `framer-7d967i`,
                              "data-border": !0,
                              "data-framer-name": `Paragraph`,
                              layoutDependency: G,
                              layoutId: `Ko07moyIe`,
                              style: {
                                "--border-bottom-width": `0.5px`,
                                "--border-color": `rgb(214, 218, 208)`,
                                "--border-left-width": `0.5px`,
                                "--border-right-width": `0.5px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0.5px`,
                                backgroundColor: `rgb(255, 255, 255)`,
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderTopRightRadius: 4,
                              },
                              children: /*#__PURE__*/ l(h, {
                                __fromCanvasComponent: !0,
                                children:
                                  P(`v4`, d) ??
                                  /*#__PURE__*/ l(a, {
                                    children: /*#__PURE__*/ l(p.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7SUJNIFBsZXggTW9uby01MDA=`,
                                        "--framer-font-family": `"IBM Plex Mono"`,
                                        "--framer-font-size": `7px`,
                                        "--framer-font-style": `normal`,
                                        "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `0.33px`,
                                        "--framer-line-height": `9.368029739776953px`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(120, 127, 136))`,
                                        "--framer-text-transform": `uppercase`,
                                      },
                                      children: `赋予数据上下文 → 高级分析 → AI 可用`,
                                    }),
                                  }),
                                className: `framer-1vykxd7`,
                                "data-framer-name": `Contextualized Data → Advanced Analytics → AI-Read`,
                                fonts: [`GF;IBM Plex Mono-500`],
                                layoutDependency: G,
                                layoutId: `aja_sRxAt`,
                                style: {
                                  "--extracted-2gg91v": `normal`,
                                  "--extracted-r6o4lv": `rgb(120, 127, 136)`,
                                  "--framer-paragraph-spacing": `0px`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
                      /*#__PURE__*/ u(p.div, {
                        className: `framer-151l7g8`,
                        layoutDependency: G,
                        layoutId: `UvMx7VCXN`,
                        children: [
                          /*#__PURE__*/ l(te, {
                            links: [
                              { href: { webPageId: `RCRTBRG3j` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `RCRTBRG3j` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `RCRTBRG3j` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `RCRTBRG3j` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `RCRTBRG3j` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `RCRTBRG3j` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              /*#__PURE__*/ l(re, {
                                height: 40,
                                y: (m?.y || 0) + 324.55,
                                ...L(
                                  {
                                    aw7ux4rIC: { y: (m?.y || 0) + 362.18 },
                                    Go_Rq93bc: { y: (m?.y || 0) + 379.3469 },
                                    UVjtmqtGi: { y: (m?.y || 0) + 355.75 },
                                    VAe_lTcMU: { y: (m?.y || 0) + 377.35 },
                                  },
                                  k,
                                  M
                                ),
                                children: /*#__PURE__*/ l(oe, {
                                  className: `framer-1j6ebrv-container`,
                                  "data-framer-name": `book a meeting`,
                                  layoutDependency: G,
                                  layoutId: `PqYbGwPMf-container`,
                                  name: `book a meeting`,
                                  nodeId: `PqYbGwPMf`,
                                  rendersWithMotion: !0,
                                  scopeId: `O2sCN9yxq`,
                                  children: /*#__PURE__*/ l(N, {
                                    bGPlaBTWk: D,
                                    eOvWGWsJ2: `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                    G2VqkSpls: !1,
                                    height: `100%`,
                                    id: `PqYbGwPMf`,
                                    layoutId: `PqYbGwPMf`,
                                    me4GfyaCp: `4px`,
                                    mPSpLRHQW: 6,
                                    name: `book a meeting`,
                                    NlAnkrLSO: 14,
                                    onbGPlaBTWkChange: O,
                                    style: { height: `100%` },
                                    thO3lzkIQ: e[0],
                                    tWCJFjQT5: `var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29))`,
                                    ujdjTUoBN: `rgb(255, 255, 255)`,
                                    variant: U(`JGFp1pV97`),
                                    width: `100%`,
                                    Zl1_gNRQd: {
                                      borderColor: `rgb(0, 0, 0)`,
                                      borderStyle: `solid`,
                                      borderWidth: 2,
                                    },
                                    ...L(
                                      {
                                        aw7ux4rIC: {
                                          thO3lzkIQ: e[3],
                                          Zl1_gNRQd: {
                                            borderColor: `rgba(0, 0, 0, 0.2)`,
                                            borderStyle: `solid`,
                                            borderWidth: 2,
                                          },
                                        },
                                        GL5t2qn7B: {
                                          thO3lzkIQ: e[1],
                                          Zl1_gNRQd: {
                                            borderColor: `rgba(0, 0, 0, 0.2)`,
                                            borderStyle: `solid`,
                                            borderWidth: 2,
                                          },
                                        },
                                        Go_Rq93bc: { thO3lzkIQ: e[2] },
                                        UVjtmqtGi: {
                                          thO3lzkIQ: e[5],
                                          ujdjTUoBN: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                        },
                                        VAe_lTcMU: {
                                          thO3lzkIQ: e[4],
                                          ujdjTUoBN: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                        },
                                      },
                                      k,
                                      M
                                    ),
                                  }),
                                }),
                              }),
                          }),
                          $() &&
                            /*#__PURE__*/ l(h, {
                              __fromCanvasComponent: !0,
                              children:
                                P(`v5`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(p.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7SUJNIFBsZXggTW9uby1yZWd1bGFy`,
                                      "--framer-font-family": `"IBM Plex Mono"`,
                                      "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                      "--framer-font-size": `11px`,
                                      "--framer-font-style": `normal`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                      "--framer-font-weight": `400`,
                                      "--framer-letter-spacing": `0.03em`,
                                      "--framer-line-height": `1.3em`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8ba4b85c-3706-4b7c-a615-29197884bd91, rgb(22, 24, 35)))`,
                                    },
                                    children: `每个新注册的 Builder 账号均赠送 250 免费积分。`,
                                  }),
                                }),
                              className: `framer-oeub4f`,
                              "data-framer-name": `Tier0 does more than move data between systems. Tr`,
                              fonts: [`GF;IBM Plex Mono-regular`],
                              layoutDependency: G,
                              layoutId: `keVYoVqjW`,
                              style: {
                                "--extracted-2gg91v": `normal`,
                                "--extracted-r6o4lv": `var(--token-8ba4b85c-3706-4b7c-a615-29197884bd91, rgb(22, 24, 35))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        });
      })),
      (Z = [
        `.framer-ZUkp7.framer-66izq2, .framer-ZUkp7 .framer-66izq2 { display: block; }`,
        `.framer-ZUkp7.framer-1h5e25c { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 48px; position: relative; width: 1440px; }`,
        `.framer-ZUkp7 .framer-1bvzxnx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 41px 48px 41px; position: relative; width: 100%; }`,
        `.framer-ZUkp7 .framer-dxqwja { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZUkp7 .framer-1d3harv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZUkp7 .framer-xan32m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 28px; justify-content: flex-start; overflow: visible; padding: 6px 12px 6px 12px; position: relative; width: min-content; }`,
        `.framer-ZUkp7 .framer-1nc1kmr { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-ZUkp7 .framer-1abg9zu { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 70%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ZUkp7 .framer-sw1iuj { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 1100px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ZUkp7 .framer-fhuq1m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 39px; justify-content: flex-start; overflow: visible; padding: 10px 14px 10px 14px; position: relative; width: 538px; }`,
        `.framer-ZUkp7 .framer-1fazwdq { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 508px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ZUkp7 .framer-7d967i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 22px; justify-content: flex-start; overflow: visible; padding: 5.58px 7.81px 5.58px 7.81px; position: relative; width: 300px; }`,
        `.framer-ZUkp7 .framer-1vykxd7 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 283px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ZUkp7 .framer-151l7g8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 458px; }`,
        `.framer-ZUkp7 .framer-1j6ebrv-container { flex: none; height: 40px; position: relative; width: auto; }`,
        `.framer-ZUkp7 .framer-oeub4f { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ZUkp7.framer-v-mnbkuw.framer-1h5e25c, .framer-ZUkp7.framer-v-1ibcjjc.framer-1h5e25c, .framer-ZUkp7.framer-v-5or2zt.framer-1h5e25c { padding: 48px 20px 48px 20px; width: 390px; }`,
        `.framer-ZUkp7.framer-v-mnbkuw .framer-1abg9zu, .framer-ZUkp7.framer-v-mnbkuw .framer-sw1iuj, .framer-ZUkp7.framer-v-5or2zt .framer-1abg9zu, .framer-ZUkp7.framer-v-5or2zt .framer-sw1iuj { width: 100%; }`,
        `.framer-ZUkp7.framer-v-mnbkuw .framer-151l7g8, .framer-ZUkp7.framer-v-1ibcjjc .framer-151l7g8, .framer-ZUkp7.framer-v-5or2zt .framer-151l7g8 { flex-direction: column; width: 100%; }`,
        `.framer-ZUkp7.framer-v-af9rj8 .framer-xan32m, .framer-ZUkp7.framer-v-1ibcjjc .framer-xan32m { order: 0; }`,
        `.framer-ZUkp7.framer-v-af9rj8 .framer-1abg9zu { order: 1; }`,
        `.framer-ZUkp7.framer-v-af9rj8 .framer-sw1iuj { order: 4; }`,
        `.framer-ZUkp7.framer-v-af9rj8 .framer-fhuq1m, .framer-ZUkp7.framer-v-1ibcjjc .framer-7d967i { order: 2; }`,
        `.framer-ZUkp7.framer-v-1ibcjjc .framer-1bvzxnx { padding: 0px 20px 48px 20px; }`,
        `.framer-ZUkp7.framer-v-1ibcjjc .framer-1abg9zu { order: 1; width: 100%; }`,
        `.framer-ZUkp7.framer-v-1ibcjjc .framer-sw1iuj { order: 4; width: 100%; }`,
        `.framer-ZUkp7.framer-v-116p5lr .framer-1abg9zu { width: 62%; }`,
        `.framer-ZUkp7.framer-v-116p5lr .framer-151l7g8 { flex-direction: column; width: 407px; }`,
        `.framer-ZUkp7.framer-v-116p5lr .framer-oeub4f, .framer-ZUkp7.framer-v-5or2zt .framer-oeub4f { flex: none; width: 100%; }`,
        ...O,
        ...le,
        `.framer-ZUkp7[data-border="true"]::after, .framer-ZUkp7 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (Q = b(X, Z, `framer-ZUkp7`)),
      (Q.displayName = `CTA Card`),
      (Q.defaultProps = { height: 381, width: 1440 }),
      v(Q, {
        variant: {
          options: [`Rym8t4ER5`, `GL5t2qn7B`, `Go_Rq93bc`, `aw7ux4rIC`, `VAe_lTcMU`, `UVjtmqtGi`],
          optionTitles: [
            `desktop`,
            `phone`,
            `advanced an`,
            `advanced an PHONE`,
            `Variant`,
            `PHONE Variant 6`,
          ],
          title: `Variant`,
          type: T.Enum,
        },
        Gl_ZpIhSp: { defaultValue: `≈`, displayTextArea: !1, title: `Headline`, type: T.String },
        onGl_ZpIhSpChange: { changes: `Gl_ZpIhSp`, type: T.ChangeHandler },
        AspCk9Iwt: {
          defaultValue: `Tier0 不只是在系统之间传递数据。传统集成工具往往擅长传输。它们把一个系统连接到另一个系统，打通协议，传输数据。然而，数据传输并不能创建可复用的生产模型。`,
          displayTextArea: !1,
          title: `Text`,
          type: T.String,
        },
        onAspCk9IwtChange: { changes: `AspCk9Iwt`, type: T.ChangeHandler },
        H7eKfGy5E: {
          defaultValue: `预约会议`,
          displayTextArea: !1,
          title: `botton1`,
          type: T.String,
        },
        onH7eKfGy5EChange: { changes: `H7eKfGy5E`, type: T.ChangeHandler },
        DC7Tugabs: {
          defaultValue: `立刻开始`,
          displayTextArea: !1,
          title: `Tag Text`,
          type: T.String,
        },
        onDC7TugabsChange: { changes: `DC7Tugabs`, type: T.ChangeHandler },
      }),
      C(
        Q,
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
                openType: !0,
                source: `google`,
                style: `normal`,
                uiFamilyName: `IBM Plex Mono`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
            ],
          },
          ...R,
          ...g(k),
          ...g(j),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = { load: (e, t) => w([() => _(N, {}, t)], t) }));
  }))();
}
export { $ as n, Q as t };
//# sourceMappingURL=O2sCN9yxq.5YGffmfa.mjs.map
