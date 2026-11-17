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
  G as h,
  I as g,
  K as _,
  M as v,
  Nt as te,
  P as y,
  Pt as b,
  Q as x,
  U as S,
  a as C,
  g as ne,
  gt as re,
  ht as ie,
  j as w,
  k as T,
  lt as E,
  q as D,
  s as O,
  v as k,
  wt as ae,
  y as A,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { i as oe, r as j } from "./shared-lib.CHy_rbfQ.mjs?v=20261116-migration-v2";
import { i as se, n as ce, r as le, t as ue } from "./HNigw6pHS.BbLcGwmq.mjs?v=20261116-migration-v2";
import { n as de, t as M } from "./Download.ozCwRxmP.mjs?v=20261116-migration-v2";
function N(e, t) {
  for (; t; ) {
    let n = F[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function P(e) {
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
  let t = P(e);
  if (t) throw t;
}
var F;
function I() {
  return (I = e(() => {
    (x(), (F = { AYmst8Nt3: new k(() => import("./UHj9H7ULF-0.DhenuGPY.mjs?v=20261116-migration-v2")) }));
  }))();
}
function L(e, t) {
  for (; t; ) {
    let n = R[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function pe(e) {
  let t = [];
  for (; e; ) {
    let n = R[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function me(e) {
  let t = pe(e);
  if (t) throw t;
}
var R;
function he() {
  return (he = e(() => {
    (x(), (R = { AYmst8Nt3: new k(() => import("./xbqR12Kw7-0.C9RYoaGW.mjs?v=20261116-migration-v2")) }));
  }))();
}
function z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var B, V, H, U, W, ge, G, _e, ve, K;
function ye() {
  return (ye = e(() => {
    (s(),
      x(),
      p(),
      r(),
      he(),
      (B = [`DdvV9xxic`, `OPxUkoY0r`]),
      (V = `framer-zVc3L`),
      (H = { DdvV9xxic: `framer-v-1iep2y4`, OPxUkoY0r: `framer-v-162l26t` }),
      (U = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (W = ({ value: e, children: t }) => {
        let r = i(d),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ l(d.Provider, { value: o, children: t });
      }),
      (ge = { cn: `DdvV9xxic`, en: `OPxUkoY0r` }),
      (G = f.create(a)),
      (_e = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: ge[r.variant] ?? r.variant ?? `DdvV9xxic`,
      })),
      (ve = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = b(
        /* @__PURE__ */ c(function (e, n) {
          let r = o(null),
            i = n ?? r,
            s = t(),
            { activeLocale: c, contentLocale: d, setLocale: p } = ae();
          re();
          let { style: h, className: g, layoutId: _, variant: v, ...b } = _e(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: ne,
              gestureVariant: ie,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = te({
              cycleOrder: B,
              defaultVariant: `DdvV9xxic`,
              ref: i,
              variant: v,
              variantClassNames: H,
            }),
            O = ve(e, D),
            k = y(V),
            A = () => x === `OPxUkoY0r`;
          me(c);
          let oe = () => x !== `OPxUkoY0r`;
          return /*#__PURE__*/ l(ee, {
            id: _ ?? s,
            children: /*#__PURE__*/ l(G, {
              animate: D,
              initial: !1,
              children: /*#__PURE__*/ l(W, {
                value: U,
                children: /*#__PURE__*/ u(f.div, {
                  ...b,
                  ...ne,
                  className: y(k, `framer-1iep2y4`, g, S),
                  "data-framer-name": `cn`,
                  layoutDependency: O,
                  layoutId: `DdvV9xxic`,
                  ref: i,
                  style: { backgroundColor: `rgba(0, 0, 0, 0)`, ...h },
                  variants: { OPxUkoY0r: { backgroundColor: `rgba(178, 237, 29, 0.1)` } },
                  ...z({ OPxUkoY0r: { "data-framer-name": `en` } }, x, ie),
                  children: [
                    A() &&
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-1nvy5lc`,
                        "data-border": !0,
                        layoutDependency: O,
                        layoutId: `hnCFwkiAC`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `1px`,
                          borderBottomLeftRadius: 3,
                          borderBottomRightRadius: 3,
                          borderTopLeftRadius: 3,
                          borderTopRightRadius: 3,
                        },
                        children: /*#__PURE__*/ l(m, {
                          __fromCanvasComponent: !0,
                          children:
                            L(`v0`, d) ??
                            /*#__PURE__*/ l(a, {
                              children: /*#__PURE__*/ l(f.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                  "--framer-font-family": `"IBM Plex Sans"`,
                                  "--framer-font-size": `15px`,
                                  "--framer-font-style": `normal`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                  "--framer-font-weight": `500`,
                                  "--framer-line-height": `2em`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                },
                                children: /*#__PURE__*/ l(f.span, {
                                  style: {
                                    "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                    "--framer-font-family": `"IBM Plex Sans"`,
                                    "--framer-font-size": `15px`,
                                    "--framer-font-style": `normal`,
                                    "--framer-font-variation-axes": `var(--extracted-1asg273, normal)`,
                                    "--framer-font-weight": `500`,
                                    "--framer-text-color": `var(--extracted-1w3ko1f, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                  },
                                  children: `英文`,
                                }),
                              }),
                            }),
                          className: `framer-vnkqt9`,
                          "data-framer-name": `Date`,
                          fonts: [`GF;IBM Plex Sans-500`],
                          layoutDependency: O,
                          layoutId: `CQ4dvmHGc`,
                          style: {
                            "--extracted-1asg273": `normal`,
                            "--extracted-1w3ko1f": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                            "--extracted-2gg91v": `normal`,
                            "--extracted-r6o4lv": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      }),
                    oe() &&
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-1364bbq`,
                        "data-border": !0,
                        layoutDependency: O,
                        layoutId: `sJfKAe2bY`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-a648c855-5db0-4414-a253-4cf6cef645b8, rgb(29, 119, 254))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `1px`,
                          backgroundColor: `rgba(29, 119, 254, 0.1)`,
                          borderBottomLeftRadius: 3,
                          borderBottomRightRadius: 3,
                          borderTopLeftRadius: 3,
                          borderTopRightRadius: 3,
                        },
                        children: /*#__PURE__*/ l(m, {
                          __fromCanvasComponent: !0,
                          children:
                            L(`v1`, d) ??
                            /*#__PURE__*/ l(a, {
                              children: /*#__PURE__*/ l(f.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                  "--framer-font-family": `"IBM Plex Sans"`,
                                  "--framer-font-size": `15px`,
                                  "--framer-font-style": `normal`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                  "--framer-font-weight": `500`,
                                  "--framer-line-height": `2em`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a648c855-5db0-4414-a253-4cf6cef645b8, rgb(29, 119, 254)))`,
                                },
                                children: /*#__PURE__*/ l(f.span, {
                                  style: {
                                    "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                    "--framer-font-family": `"IBM Plex Sans"`,
                                    "--framer-font-size": `15px`,
                                    "--framer-font-style": `normal`,
                                    "--framer-font-variation-axes": `var(--extracted-1asg273, normal)`,
                                    "--framer-font-weight": `500`,
                                    "--framer-text-color": `var(--extracted-1w3ko1f, var(--token-a648c855-5db0-4414-a253-4cf6cef645b8, rgb(29, 119, 254)))`,
                                  },
                                  children: `中文`,
                                }),
                              }),
                            }),
                          className: `framer-1l6kwf9`,
                          "data-framer-name": `Date`,
                          fonts: [`GF;IBM Plex Sans-500`],
                          layoutDependency: O,
                          layoutId: `TsjuLYCXV`,
                          style: {
                            "--extracted-1asg273": `normal`,
                            "--extracted-1w3ko1f": `var(--token-a648c855-5db0-4414-a253-4cf6cef645b8, rgb(29, 119, 254))`,
                            "--extracted-2gg91v": `normal`,
                            "--extracted-r6o4lv": `var(--token-a648c855-5db0-4414-a253-4cf6cef645b8, rgb(29, 119, 254))`,
                          },
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
          `.framer-zVc3L.framer-ct940q, .framer-zVc3L .framer-ct940q { display: block; }`,
          `.framer-zVc3L.framer-1iep2y4 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-zVc3L .framer-1nvy5lc, .framer-zVc3L .framer-1364bbq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 8px 0px 8px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-zVc3L .framer-vnkqt9, .framer-zVc3L .framer-1l6kwf9 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-zVc3L[data-border="true"]::after, .framer-zVc3L [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-zVc3L`
      )),
      (K.displayName = `language card`),
      (K.defaultProps = { height: 200, width: 200 }),
      v(K, {
        variant: {
          options: [`DdvV9xxic`, `OPxUkoY0r`],
          optionTitles: [`cn`, `en`],
          title: `Variant`,
          type: O.Enum,
        },
      }),
      w(
        K,
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
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var be, xe, J, Y, X, Z, Se, Ce, we, Te, Ee, Q, De, Oe, ke, Ae, je, Me, Ne, Pe, Fe, Ie, $;
function Le() {
  return (Le = e(() => {
    (s(),
      x(),
      p(),
      r(),
      oe(),
      de(),
      se(),
      I(),
      ye(),
      (be = S(j)),
      (xe = S(K)),
      (J = S(M)),
      (Y = D(j)),
      (X = D(K)),
      (Z = D(M)),
      (Se = { MKKdJ6ZjG: { hover: !0 } }),
      (Ce = [`vWnV_9TBI`, `xt84s77M3`, `MKKdJ6ZjG`, `zuGkWDMc7`, `onovT2rcj`]),
      (we = `framer-KCPIz`),
      (Te = {
        MKKdJ6ZjG: `framer-v-1hngdsx`,
        onovT2rcj: `framer-v-1unuyy3`,
        vWnV_9TBI: `framer-v-1osl65p`,
        xt84s77M3: `framer-v-1wmkfa0`,
        zuGkWDMc7: `framer-v-lhkwz2`,
      }),
      (Ee = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Q = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (De = (e, t) => `translateY(-50%) ${t}`),
      (Oe = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (ke = ({ value: e, children: t }) => {
        let r = i(d),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ l(d.Provider, { value: o, children: t });
      }),
      (Ae = {
        "desktop hover": `xt84s77M3`,
        "Variant 5": `onovT2rcj`,
        desktop: `vWnV_9TBI`,
        phone: `MKKdJ6ZjG`,
        Variant2: `zuGkWDMc7`,
      }),
      (je = f.create(a)),
      (Me = { cn: `DdvV9xxic`, en: `OPxUkoY0r` }),
      (Ne = ({
        blogLink: e,
        buttonVisible: t,
        calenderVisiblity: n,
        category: r,
        categoryIcon: i,
        date: a,
        description: o,
        file: s,
        height: c,
        heroImage: l,
        id: u,
        language: d,
        tagVisible: f,
        title: p,
        width: ee,
        ...m
      }) => ({
        ...m,
        ErNLUiqGD: f ?? m.ErNLUiqGD ?? !0,
        iSk8hVwPZ: t ?? m.iSk8hVwPZ ?? !0,
        Mtfwdn2WM: r ?? m.Mtfwdn2WM ?? `Content`,
        n8TivgXgK: p ?? m.n8TivgXgK ?? `Title`,
        pPtCP7clJ: a ?? m.pPtCP7clJ ?? `Content`,
        q_kabn3ie: s ?? m.q_kabn3ie,
        SsmWFdJ1S: i ?? m.SsmWFdJ1S ?? `Code`,
        tOgta1ihp:
          o ??
          m.tOgta1ihp ??
          `Organizations face critical architectural decisions that can impact their operations for years to come such as: Is it better to maintain a single organization or implement multiple organizations? In this post, I explain the key advantages and disadvantages of both approaches and the scenarios where each model fits best.`,
        upnh7XGg6: Me[d] ?? d ?? m.upnh7XGg6 ?? `DdvV9xxic`,
        variant: Ae[m.variant] ?? m.variant ?? `vWnV_9TBI`,
        yDd7KaMSp: n ?? m.yDd7KaMSp ?? !0,
        YDxaNYTCR: l ?? m.YDxaNYTCR,
        ZRBZxHryf: e ?? m.ZRBZxHryf,
      })),
      (Pe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Fe = /*#__PURE__*/ c(function (e, n) {
        let r = o(null),
          i = n ?? r,
          s = t(),
          { activeLocale: c, contentLocale: d, setLocale: p } = ae(),
          h = re(),
          {
            style: g,
            className: v,
            layoutId: b,
            variant: x,
            YDxaNYTCR: S,
            n8TivgXgK: w,
            Mtfwdn2WM: E,
            pPtCP7clJ: D,
            SsmWFdJ1S: O,
            yDd7KaMSp: k,
            upnh7XGg6: oe,
            q_kabn3ie: se,
            iSk8hVwPZ: ce,
            ErNLUiqGD: le,
            tOgta1ihp: de,
            ZRBZxHryf: P,
            ...F
          } = Ne(e),
          {
            baseVariant: I,
            classNames: L,
            clearLoadingGesture: pe,
            gestureHandlers: me,
            gestureVariant: R,
            isLoading: he,
            setGestureState: z,
            setVariant: B,
            variants: V,
          } = te({
            cycleOrder: Ce,
            defaultVariant: `vWnV_9TBI`,
            enabledGestures: Se,
            ref: i,
            variant: x,
            variantClassNames: Te,
          }),
          H = Pe(e, V),
          U = [ue],
          { activeVariantCallback: W, delay: ge } = ie(I),
          G = W(async (...e) => {
            (z({ isHovered: !0 }), B(`xt84s77M3`));
          }),
          _e = y(we, ...U),
          ve = W(async (...e) => {
            (z({ isHovered: !1 }), B(`vWnV_9TBI`));
          }),
          ye = W(async (...e) => {
            (z({ isHovered: !0 }), B(`onovT2rcj`));
          }),
          be = W(async (...e) => {
            (z({ isHovered: !0 }), B(`zuGkWDMc7`));
          }),
          xe = W(async (...e) => {
            (z({ isHovered: !1 }), B(`zuGkWDMc7`));
          }),
          J = () => ![`zuGkWDMc7`, `onovT2rcj`].includes(I);
        fe(c);
        let Y = () => !![`zuGkWDMc7`, `onovT2rcj`].includes(I),
          X = (e) => ![`zuGkWDMc7`, `onovT2rcj`].includes(I) && e,
          Z = () => I === `onovT2rcj`;
        return /*#__PURE__*/ l(ee, {
          id: b ?? s,
          children: /*#__PURE__*/ l(je, {
            animate: V,
            initial: !1,
            children: /*#__PURE__*/ l(ke, {
              value: Ee,
              children: /*#__PURE__*/ l(A, {
                href: P,
                motionChild: !0,
                nodeId: `vWnV_9TBI`,
                openInNewTab: !1,
                scopeId: `UHj9H7ULF`,
                children: /*#__PURE__*/ u(f.a, {
                  ...F,
                  ...me,
                  className: `${y(_e, `framer-1osl65p`, v, L)} framer-9fdo8q`,
                  "data-border": !0,
                  "data-framer-name": `desktop`,
                  "data-highlight": !0,
                  layoutDependency: H,
                  layoutId: `vWnV_9TBI`,
                  onMouseEnter: G,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgba(0, 0, 0, 0.2)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `rgb(255, 255, 255)`,
                    borderBottomLeftRadius: 3,
                    borderBottomRightRadius: 3,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    ...g,
                  },
                  variants: {
                    "MKKdJ6ZjG-hover": {
                      "--border-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                    },
                    onovT2rcj: {
                      "--border-color": `rgba(0, 0, 0, 0.1)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    },
                    xt84s77M3: { "--border-color": `rgba(0, 0, 0, 0.75)` },
                    zuGkWDMc7: {
                      "--border-color": `rgba(0, 0, 0, 0.1)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    },
                  },
                  ...q(
                    {
                      "MKKdJ6ZjG-hover": { "data-highlight": void 0, onMouseEnter: void 0 },
                      MKKdJ6ZjG: {
                        "data-framer-name": `phone`,
                        "data-highlight": void 0,
                        onMouseEnter: void 0,
                      },
                      onovT2rcj: {
                        "data-framer-name": `Variant 5`,
                        onMouseEnter: be,
                        onMouseLeave: xe,
                      },
                      xt84s77M3: { "data-framer-name": `desktop hover`, onMouseLeave: ve },
                      zuGkWDMc7: { "data-framer-name": `Variant2`, onMouseEnter: ye },
                    },
                    I,
                    R
                  ),
                  children: [
                    /*#__PURE__*/ l(f.div, {
                      className: `framer-1ghb8nu`,
                      layoutDependency: H,
                      layoutId: `f1zpgSw9l`,
                      style: {
                        borderBottomLeftRadius: 3,
                        borderBottomRightRadius: 3,
                        borderTopLeftRadius: 3,
                        borderTopRightRadius: 3,
                      },
                      variants: {
                        onovT2rcj: {
                          borderBottomLeftRadius: 2.25,
                          borderBottomRightRadius: 2.25,
                          borderTopLeftRadius: 2.25,
                          borderTopRightRadius: 2.25,
                        },
                      },
                      children: /*#__PURE__*/ l(ne, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: _((h?.y || 0) + 3),
                          sizes: `calc(${h?.width || `100vw`} + 7px)`,
                          ...Q(S),
                        },
                        className: `framer-14bimdr`,
                        "data-border": !0,
                        "data-framer-name": `Image`,
                        layoutDependency: H,
                        layoutId: `GkMt4bbB5`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `rgba(34, 34, 34, 0.2)`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `1px`,
                          borderBottomLeftRadius: 13,
                          borderBottomRightRadius: 13,
                          borderTopLeftRadius: 13,
                          borderTopRightRadius: 13,
                        },
                        variants: {
                          MKKdJ6ZjG: {
                            borderBottomLeftRadius: 3,
                            borderBottomRightRadius: 3,
                            borderTopLeftRadius: 3,
                            borderTopRightRadius: 3,
                          },
                          onovT2rcj: {
                            "--border-bottom-width": `0px`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-top-width": `0px`,
                            borderBottomLeftRadius: 3,
                            borderBottomRightRadius: 3,
                            borderTopLeftRadius: 3,
                            borderTopRightRadius: 3,
                          },
                          xt84s77M3: {
                            borderBottomLeftRadius: 3,
                            borderBottomRightRadius: 3,
                            borderTopLeftRadius: 3,
                            borderTopRightRadius: 3,
                          },
                          zuGkWDMc7: {
                            "--border-bottom-width": `0px`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-top-width": `0px`,
                            borderBottomLeftRadius: 9.75,
                            borderBottomRightRadius: 9.75,
                            borderTopLeftRadius: 9.75,
                            borderTopRightRadius: 9.75,
                          },
                        },
                        ...q(
                          {
                            MKKdJ6ZjG: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: _((h?.y || 0) + 16),
                                sizes: `280px`,
                                ...Q(S),
                              },
                            },
                            onovT2rcj: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: _((h?.y || 0) + 16),
                                sizes: `252.25px`,
                                ...Q(S),
                              },
                            },
                            xt84s77M3: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: _((h?.y || 0) + 16.5),
                                sizes: `calc(${h?.width || `100vw`} - 33px)`,
                                ...Q(S),
                              },
                            },
                            zuGkWDMc7: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: _((h?.y || 0) + 6.25),
                                sizes: `282.24px`,
                                ...Q(S),
                              },
                            },
                          },
                          I,
                          R
                        ),
                      }),
                    }),
                    /*#__PURE__*/ u(f.div, {
                      className: `framer-i42bp1`,
                      layoutDependency: H,
                      layoutId: `VDVCUbUaX`,
                      children: [
                        J() &&
                          /*#__PURE__*/ u(f.div, {
                            className: `framer-1jsygqg`,
                            layoutDependency: H,
                            layoutId: `czzeO2jyz`,
                            children: [
                              /*#__PURE__*/ u(f.div, {
                                className: `framer-1kbcoro`,
                                "data-border": !0,
                                layoutDependency: H,
                                layoutId: `xuusHN3eT`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `rgba(0, 0, 0, 0.1)`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `solid`,
                                  "--border-top-width": `1px`,
                                  borderBottomLeftRadius: 3,
                                  borderBottomRightRadius: 3,
                                  borderTopLeftRadius: 3,
                                  borderTopRightRadius: 3,
                                },
                                children: [
                                  /*#__PURE__*/ l(C, {
                                    children: /*#__PURE__*/ l(T, {
                                      className: `framer-1puio33-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      layoutDependency: H,
                                      layoutId: `g3h_Nu4vB-container`,
                                      nodeId: `g3h_Nu4vB`,
                                      rendersWithMotion: !0,
                                      scopeId: `UHj9H7ULF`,
                                      children: /*#__PURE__*/ l(j, {
                                        color: `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                        height: `100%`,
                                        iconSearch: N(`v0`, d) ?? `Content`,
                                        iconSelection: O,
                                        iconStyle15: `Filled`,
                                        iconStyle2: `Filled`,
                                        iconStyle7: `Filled`,
                                        id: `g3h_Nu4vB`,
                                        layoutId: `g3h_Nu4vB`,
                                        mirrored: !1,
                                        selectByList: !0,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ l(m, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        style: {
                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                          "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                          "--framer-font-size": `15px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-line-height": `2em`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                        },
                                        children: `Content`,
                                      }),
                                    }),
                                    className: `framer-3hry2p`,
                                    "data-framer-name": `Date`,
                                    fonts: [`GF;IBM Plex Sans-500`],
                                    layoutDependency: H,
                                    layoutId: `GivaEMznC`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                    },
                                    text: E,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              le !== !1 &&
                                /*#__PURE__*/ l(C, {
                                  height: 200,
                                  y: (h?.y || 0) + 219,
                                  ...q({ MKKdJ6ZjG: { y: (h?.y || 0) + 162 } }, I, R),
                                  children: /*#__PURE__*/ l(T, {
                                    className: `framer-1246ims-container`,
                                    layoutDependency: H,
                                    layoutId: `dj9ul2Oh_-container`,
                                    nodeId: `dj9ul2Oh_`,
                                    rendersWithMotion: !0,
                                    scopeId: `UHj9H7ULF`,
                                    transformTemplate: De,
                                    children: /*#__PURE__*/ l(K, {
                                      height: `100%`,
                                      id: `dj9ul2Oh_`,
                                      layoutId: `dj9ul2Oh_`,
                                      variant: Oe(oe),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                            ],
                          }),
                        /*#__PURE__*/ u(f.div, {
                          className: `framer-l1e7hy`,
                          "data-framer-name": `Post`,
                          layoutDependency: H,
                          layoutId: `dG1DjfveY`,
                          children: [
                            J() &&
                              /*#__PURE__*/ l(f.div, {
                                className: `framer-rc5kvg`,
                                "data-framer-name": `产线`,
                                layoutDependency: H,
                                layoutId: `ugqZwOV3F`,
                                style: { backgroundColor: `rgba(0, 0, 0, 0.2)` },
                                variants: { xt84s77M3: { backgroundColor: `rgba(0, 0, 0, 0.5)` } },
                              }),
                            /*#__PURE__*/ l(f.div, {
                              className: `framer-dr7cfp`,
                              "data-framer-name": `Main Info`,
                              layoutDependency: H,
                              layoutId: `zdD4QDd_i`,
                              children: /*#__PURE__*/ l(f.div, {
                                className: `framer-1ehmgc7`,
                                layoutDependency: H,
                                layoutId: `eOkknFqWa`,
                                children: /*#__PURE__*/ l(m, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ l(a, {
                                    children: /*#__PURE__*/ l(f.h3, {
                                      style: {
                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                        "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                        "--framer-font-size": `20px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-3fe375b1-1994-4f1a-b5ac-aa4a82f5c316, rgb(51, 51, 51)))`,
                                      },
                                      children: `Title`,
                                    }),
                                  }),
                                  className: `framer-d2kh07`,
                                  "data-framer-name": `Title`,
                                  fonts: [`GF;IBM Plex Sans-600`],
                                  layoutDependency: H,
                                  layoutId: `IEFtqvnlh`,
                                  style: {
                                    "--extracted-a0htzi": `var(--token-3fe375b1-1994-4f1a-b5ac-aa4a82f5c316, rgb(51, 51, 51))`,
                                  },
                                  text: w,
                                  variants: {
                                    onovT2rcj: {
                                      "--extracted-a0htzi": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                    },
                                    zuGkWDMc7: {
                                      "--extracted-a0htzi": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                    },
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...q(
                                    {
                                      MKKdJ6ZjG: {
                                        children: /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(f.h3, {
                                            style: {
                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                              "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                              "--framer-font-weight": `600`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-color": `var(--extracted-a0htzi, var(--token-3fe375b1-1994-4f1a-b5ac-aa4a82f5c316, rgb(51, 51, 51)))`,
                                            },
                                            children: `Title`,
                                          }),
                                        }),
                                      },
                                      onovT2rcj: {
                                        children: /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(f.h3, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                              "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                              "--framer-font-size": `18px`,
                                              "--framer-font-weight": `600`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                            },
                                            children: `Title`,
                                          }),
                                        }),
                                      },
                                      zuGkWDMc7: {
                                        children: /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(f.h3, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                              "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                              "--framer-font-size": `18px`,
                                              "--framer-font-weight": `600`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-color": `var(--extracted-a0htzi, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                            },
                                            children: `Title`,
                                          }),
                                        }),
                                      },
                                    },
                                    I,
                                    R
                                  ),
                                }),
                              }),
                            }),
                          ],
                        }),
                        /*#__PURE__*/ u(f.div, {
                          className: `framer-qknhm5`,
                          layoutDependency: H,
                          layoutId: `kxgyFsGma`,
                          children: [
                            k !== !1 &&
                              /*#__PURE__*/ l(f.div, {
                                className: `framer-qhkzia`,
                                layoutDependency: H,
                                layoutId: `eoYyCZIW7`,
                                children: /*#__PURE__*/ l(f.div, {
                                  className: `framer-yjiepj`,
                                  layoutDependency: H,
                                  layoutId: `fEbslxIY0`,
                                  children: /*#__PURE__*/ u(f.div, {
                                    className: `framer-91ophf`,
                                    layoutDependency: H,
                                    layoutId: `S97hPcX9_`,
                                    children: [
                                      /*#__PURE__*/ l(C, {
                                        children: /*#__PURE__*/ l(T, {
                                          className: `framer-z8j7a7-container`,
                                          isAuthoredByUser: !0,
                                          isModuleExternal: !0,
                                          layoutDependency: H,
                                          layoutId: `bw1UeDMYM-container`,
                                          nodeId: `bw1UeDMYM`,
                                          rendersWithMotion: !0,
                                          scopeId: `UHj9H7ULF`,
                                          children: /*#__PURE__*/ l(j, {
                                            color: `rgb(179, 179, 179)`,
                                            height: `100%`,
                                            iconSearch: N(`v1`, d) ?? `date`,
                                            iconSelection: `Home`,
                                            iconStyle15: `Filled`,
                                            iconStyle2: `Filled`,
                                            iconStyle7: `Filled`,
                                            id: `bw1UeDMYM`,
                                            layoutId: `bw1UeDMYM`,
                                            mirrored: !1,
                                            selectByList: !1,
                                            style: { height: `100%`, width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ l(m, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(f.p, {
                                            style: {
                                              "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                              "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                              "--framer-font-size": `15px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-line-height": `2em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(153, 153, 153))`,
                                            },
                                            children: `Content`,
                                          }),
                                        }),
                                        className: `framer-1xx4ibf`,
                                        "data-framer-name": `Date`,
                                        fonts: [`GF;IBM Plex Sans-500`],
                                        layoutDependency: H,
                                        layoutId: `S0a5NFRst`,
                                        style: { "--extracted-r6o4lv": `rgb(153, 153, 153)` },
                                        text: D,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            Y() &&
                              /*#__PURE__*/ u(f.div, {
                                className: `framer-poh515`,
                                "data-border": !0,
                                layoutDependency: H,
                                layoutId: `grViesyGX`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `rgba(0, 0, 0, 0.1)`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `solid`,
                                  "--border-top-width": `1px`,
                                  borderBottomLeftRadius: 3,
                                  borderBottomRightRadius: 3,
                                  borderTopLeftRadius: 3,
                                  borderTopRightRadius: 3,
                                },
                                children: [
                                  /*#__PURE__*/ l(C, {
                                    children: /*#__PURE__*/ l(T, {
                                      className: `framer-4rlyfy-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      layoutDependency: H,
                                      layoutId: `ISiZxSlai-container`,
                                      nodeId: `ISiZxSlai`,
                                      rendersWithMotion: !0,
                                      scopeId: `UHj9H7ULF`,
                                      children: /*#__PURE__*/ l(j, {
                                        color: `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                        height: `100%`,
                                        iconSearch: N(`v0`, d) ?? `Content`,
                                        iconSelection: O,
                                        iconStyle15: `Filled`,
                                        iconStyle2: `Filled`,
                                        iconStyle7: `Filled`,
                                        id: `ISiZxSlai`,
                                        layoutId: `ISiZxSlai`,
                                        mirrored: !1,
                                        selectByList: !0,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ l(m, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        style: {
                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy01MDA=`,
                                          "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                          "--framer-font-size": `15px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-line-height": `2em`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                        },
                                        children: `Content`,
                                      }),
                                    }),
                                    className: `framer-hnel0y`,
                                    "data-framer-name": `Date`,
                                    fonts: [`GF;IBM Plex Sans-500`],
                                    layoutDependency: H,
                                    layoutId: `NdRpwNQja`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                    },
                                    text: E,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        X(ce !== !1) &&
                          /*#__PURE__*/ l(C, {
                            children: /*#__PURE__*/ l(T, {
                              className: `framer-de2dfq-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              layoutDependency: H,
                              layoutId: `nrngKDXrG-container`,
                              nodeId: `nrngKDXrG`,
                              rendersWithMotion: !0,
                              scopeId: `UHj9H7ULF`,
                              children: /*#__PURE__*/ l(M, {
                                fontControl: {
                                  fontFamily: `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                  fontSize: `16px`,
                                  fontStyle: `normal`,
                                  fontWeight: 500,
                                  letterSpacing: `0em`,
                                  lineHeight: `1em`,
                                  textAlign: `center`,
                                },
                                height: `100%`,
                                iconOptions: {
                                  alignment: `start`,
                                  color: `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                  size: 16,
                                  type: `Default`,
                                },
                                id: `nrngKDXrG`,
                                layoutId: `nrngKDXrG`,
                                srcFile: se,
                                srcType: `Upload`,
                                srcURL: ``,
                                style: { width: `100%` },
                                styleOptions: {
                                  backgroundColor: `var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29))`,
                                  borderRadius: 4,
                                  color: `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                  gap: 5,
                                  padding: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 10,
                                  paddingPerSide: !1,
                                  paddingRight: 10,
                                  paddingTop: 10,
                                },
                                text: `下载`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        Y() &&
                          /*#__PURE__*/ l(m, {
                            __fromCanvasComponent: !0,
                            children:
                              N(`v2`, d) ??
                              /*#__PURE__*/ l(a, {
                                children: /*#__PURE__*/ l(f.p, {
                                  className: `framer-styles-preset-1ful33y`,
                                  "data-styles-preset": `HNigw6pHS`,
                                  dir: `auto`,
                                  children: `In this post, we show you how to build a hybrid multi-tenant architecture that provides strong tenant isolation without requiring per-tenant AWS accounts. You learn how to configure Route 53 weighted routing to distribute traffic across multiple accounts, deploy Application Load Balancer listener rules for tenant-specific routing, create dedicated ECS clusters per tenant, and establish AWS PrivateLink connectivity to shared dependencies.`,
                                }),
                              }),
                            className: `framer-1fsqh0i`,
                            "data-framer-name": `Whether you're signing a document, accessing sensitive info, or applying for a loan, it’s fast, easy, and incredibly secure. Welcome to the future of identity verification, where you’re in control — and it all happens in the blink of an eye.`,
                            fonts: [`Inter`],
                            layoutDependency: H,
                            layoutId: `OoqQSFUoZ`,
                            style: { "--framer-paragraph-spacing": `0px` },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...q(
                              {
                                onovT2rcj: {
                                  children:
                                    N(`v3`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ful33y`,
                                        "data-styles-preset": `HNigw6pHS`,
                                        dir: `auto`,
                                        children: `Organizations face critical architectural decisions that can impact their operations for years to come such as: Is it better to maintain a single organization or implement multiple organizations? In this post, I explain the key advantages and disadvantages of both approaches and the scenarios where each model fits best.`,
                                      }),
                                    }),
                                  text: de,
                                },
                                zuGkWDMc7: {
                                  children:
                                    N(`v3`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ful33y`,
                                        "data-styles-preset": `HNigw6pHS`,
                                        dir: `auto`,
                                        children: `Organizations face critical architectural decisions that can impact their operations for years to come such as: Is it better to maintain a single organization or implement multiple organizations? In this post, I explain the key advantages and disadvantages of both approaches and the scenarios where each model fits best.`,
                                      }),
                                    }),
                                  text: de,
                                },
                              },
                              I,
                              R
                            ),
                          }),
                      ],
                    }),
                    Z() &&
                      /*#__PURE__*/ l(A, {
                        href: P,
                        motionChild: !0,
                        nodeId: `RZnVOF8Vh`,
                        openInNewTab: !1,
                        scopeId: `UHj9H7ULF`,
                        children: /*#__PURE__*/ l(f.a, {
                          className: `framer-10loxe5 framer-9fdo8q`,
                          "data-framer-name": `Card Link`,
                          layoutDependency: H,
                          layoutId: `RZnVOF8Vh`,
                          style: {
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            borderTopLeftRadius: 4,
                            borderTopRightRadius: 4,
                          },
                        }),
                      }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (Ie = [
        `.framer-KCPIz.framer-9fdo8q, .framer-KCPIz .framer-9fdo8q { display: block; }`,
        `.framer-KCPIz.framer-1osl65p { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 16px; position: relative; text-decoration: none; width: 360px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-KCPIz .framer-1ghb8nu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 213px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-KCPIz .framer-14bimdr { bottom: -13px; flex: none; left: -19px; position: absolute; right: -19px; top: -13px; z-index: 1; }`,
        `.framer-KCPIz .framer-i42bp1, .framer-KCPIz .framer-qknhm5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-KCPIz .framer-1jsygqg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-KCPIz .framer-1kbcoro, .framer-KCPIz .framer-poh515 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 8px 0px 8px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-KCPIz .framer-1puio33-container, .framer-KCPIz .framer-z8j7a7-container, .framer-KCPIz .framer-4rlyfy-container { flex: none; height: 20px; position: relative; width: 20px; }`,
        `.framer-KCPIz .framer-3hry2p, .framer-KCPIz .framer-d2kh07, .framer-KCPIz .framer-1xx4ibf, .framer-KCPIz .framer-hnel0y { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-KCPIz .framer-1246ims-container { flex: none; height: auto; position: absolute; right: 0px; top: 50%; width: auto; z-index: 1; }`,
        `.framer-KCPIz .framer-l1e7hy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-KCPIz .framer-rc5kvg { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }`,
        `.framer-KCPIz .framer-dr7cfp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-KCPIz .framer-1ehmgc7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-KCPIz .framer-qhkzia { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 328px; }`,
        `.framer-KCPIz .framer-yjiepj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 30px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-KCPIz .framer-91ophf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-KCPIz .framer-de2dfq-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-KCPIz .framer-1fsqh0i { flex: none; height: 123px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-KCPIz .framer-10loxe5 { flex: none; gap: 12px; height: 200px; left: calc(50.00000000000002% - 1784px / 2); overflow: visible; position: absolute; text-decoration: none; top: calc(50.00000000000002% - 200px / 2); width: 1784px; z-index: 1; }`,
        `.framer-KCPIz.framer-v-1wmkfa0 .framer-14bimdr { bottom: 1px; left: 1px; right: 0px; top: 1px; }`,
        `.framer-KCPIz.framer-v-1hngdsx.framer-1osl65p { cursor: pointer; gap: 10px; width: 310px; }`,
        `.framer-KCPIz.framer-v-1hngdsx .framer-1ghb8nu { height: 166px; width: 280px; }`,
        `.framer-KCPIz.framer-v-1hngdsx .framer-14bimdr { bottom: 0px; left: 0px; right: 1px; top: 0px; }`,
        `.framer-KCPIz.framer-v-1hngdsx .framer-1ehmgc7, .framer-KCPIz.framer-v-lhkwz2 .framer-1ehmgc7, .framer-KCPIz.framer-v-1unuyy3 .framer-1ehmgc7 { width: 100%; }`,
        `.framer-KCPIz.framer-v-1hngdsx .framer-d2kh07, .framer-KCPIz.framer-v-lhkwz2 .framer-d2kh07, .framer-KCPIz.framer-v-1unuyy3 .framer-d2kh07 { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-KCPIz.framer-v-1hngdsx .framer-qhkzia { width: 276px; }`,
        `.framer-KCPIz.framer-v-lhkwz2.framer-1osl65p, .framer-KCPIz.framer-v-1unuyy3.framer-1osl65p { flex-direction: row; padding: 16px 16px 24px 16px; width: 1784px; will-change: unset; }`,
        `.framer-KCPIz.framer-v-lhkwz2 .framer-1ghb8nu, .framer-KCPIz.framer-v-1unuyy3 .framer-1ghb8nu { gap: 7.5px; height: 160px; order: 0; width: 253px; }`,
        `.framer-KCPIz.framer-v-lhkwz2 .framer-14bimdr { bottom: -10px; left: -15px; right: -15px; top: -10px; }`,
        `.framer-KCPIz.framer-v-lhkwz2 .framer-i42bp1 { align-content: flex-start; align-items: flex-start; align-self: stretch; flex: 1 0 0px; height: auto; justify-content: flex-start; order: 1; width: 1px; }`,
        `.framer-KCPIz.framer-v-lhkwz2 .framer-l1e7hy, .framer-KCPIz.framer-v-1unuyy3 .framer-l1e7hy { order: 1; }`,
        `.framer-KCPIz.framer-v-lhkwz2 .framer-qknhm5, .framer-KCPIz.framer-v-1unuyy3 .framer-qknhm5 { flex-direction: row; gap: 16px; justify-content: flex-start; order: 2; }`,
        `.framer-KCPIz.framer-v-lhkwz2 .framer-qhkzia, .framer-KCPIz.framer-v-1unuyy3 .framer-qhkzia { order: 1; width: min-content; }`,
        `.framer-KCPIz.framer-v-lhkwz2 .framer-poh515, .framer-KCPIz.framer-v-1unuyy3 .framer-poh515 { order: 0; }`,
        `.framer-KCPIz.framer-v-lhkwz2 .framer-1fsqh0i, .framer-KCPIz.framer-v-1unuyy3 .framer-1fsqh0i { height: auto; order: 4; }`,
        `.framer-KCPIz.framer-v-1unuyy3 .framer-14bimdr { bottom: 0px; left: 1px; right: 0px; top: 0px; }`,
        `.framer-KCPIz.framer-v-1unuyy3 .framer-i42bp1 { align-content: flex-start; align-items: flex-start; flex: 1 0 0px; justify-content: flex-start; order: 1; width: 1px; }`,
        `.framer-KCPIz.framer-v-1unuyy3 .framer-10loxe5 { order: 3; }`,
        ...ce,
        `.framer-KCPIz[data-border="true"]::after, .framer-KCPIz [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      ($ = b(Fe, Ie, `framer-KCPIz`)),
      ($.displayName = `Cards/Boxy Cards`),
      ($.defaultProps = { height: 420, width: 360 }),
      v($, {
        variant: {
          options: [`vWnV_9TBI`, `xt84s77M3`, `MKKdJ6ZjG`, `zuGkWDMc7`, `onovT2rcj`],
          optionTitles: [`desktop`, `desktop hover`, `phone`, `Variant2`, `Variant 5`],
          title: `Variant`,
          type: O.Enum,
        },
        YDxaNYTCR: { title: `Hero Image`, type: O.ResponsiveImage },
        n8TivgXgK: {
          defaultValue: `Title`,
          displayTextArea: !0,
          placeholder: ``,
          title: `Title`,
          type: O.String,
        },
        onn8TivgXgKChange: { changes: `n8TivgXgK`, type: O.ChangeHandler },
        Mtfwdn2WM: {
          defaultValue: `Content`,
          displayTextArea: !1,
          title: `Category`,
          type: O.String,
        },
        onMtfwdn2WMChange: { changes: `Mtfwdn2WM`, type: O.ChangeHandler },
        pPtCP7clJ: { defaultValue: `Content`, displayTextArea: !1, title: `Date`, type: O.String },
        onpPtCP7clJChange: { changes: `pPtCP7clJ`, type: O.ChangeHandler },
        SsmWFdJ1S: Y?.iconSelection && {
          ...Y.iconSelection,
          defaultValue: `Code`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Category icon`,
        },
        onSsmWFdJ1SChange: { changes: `SsmWFdJ1S`, type: O.ChangeHandler },
        yDd7KaMSp: { defaultValue: !0, title: `Calender visiblity`, type: O.Boolean },
        onyDd7KaMSpChange: { changes: `yDd7KaMSp`, type: O.ChangeHandler },
        upnh7XGg6: X?.variant && {
          ...X.variant,
          defaultValue: `DdvV9xxic`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `language`,
        },
        onupnh7XGg6Change: { changes: `upnh7XGg6`, type: O.ChangeHandler },
        q_kabn3ie: Z?.srcFile && {
          ...Z.srcFile,
          __defaultAssetReference: ``,
          description: void 0,
          hidden: void 0,
          title: `File`,
        },
        onq_kabn3ieChange: { changes: `q_kabn3ie`, type: O.ChangeHandler },
        iSk8hVwPZ: { defaultValue: !0, title: `button Visible`, type: O.Boolean },
        oniSk8hVwPZChange: { changes: `iSk8hVwPZ`, type: O.ChangeHandler },
        ErNLUiqGD: { defaultValue: !0, title: `Tag Visible`, type: O.Boolean },
        onErNLUiqGDChange: { changes: `ErNLUiqGD`, type: O.ChangeHandler },
        tOgta1ihp: {
          defaultValue: `Organizations face critical architectural decisions that can impact their operations for years to come such as: Is it better to maintain a single organization or implement multiple organizations? In this post, I explain the key advantages and disadvantages of both approaches and the scenarios where each model fits best.`,
          displayTextArea: !1,
          title: `Description`,
          type: O.String,
        },
        ontOgta1ihpChange: { changes: `tOgta1ihp`, type: O.ChangeHandler },
        ZRBZxHryf: { title: `blog Link`, type: O.Link },
      }),
      w(
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
          ...be,
          ...xe,
          ...J,
          ...h(le),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = { load: (e, t) => E([() => g(K, {}, t)], t) }));
  }))();
}
export { Le as n, $ as t };
//# sourceMappingURL=UHj9H7ULF.BAaetTGP.mjs.map
