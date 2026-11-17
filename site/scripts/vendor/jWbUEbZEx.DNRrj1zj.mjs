import { n as e, t } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  D as n,
  F as r,
  O as i,
  P as a,
  R as o,
  S as s,
  c,
  m as l,
  s as u,
  u as d,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { S as f, Yi as p, t as m, v as h } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import {
  It as g,
  M as _,
  Mt as v,
  Nt as y,
  O as b,
  P as x,
  Pt as S,
  Q as C,
  U as ee,
  gt as te,
  ht as ne,
  j as w,
  s as T,
  wt as E,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
var D, O, k, A, j, M, N;
function P() {
  return (P = t(() => {
    (c(),
      C(),
      i(),
      (D = `var(--framer-icon-mask)`),
      (O = /*#__PURE__*/ l(function (e, t) {
        return /*#__PURE__*/ u(`svg`, { ...e, ref: t, children: e.children });
      })),
      (k = p.create(O)),
      (A = /*#__PURE__*/ l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? /*#__PURE__*/ u(k, { ...a, layoutId: r, ref: t, children: i })
          : /*#__PURE__*/ u(`svg`, { ...a, ref: t, children: i });
      })),
      (j = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 10.5 5.5 L 5.25 0 L 0 5.5" fill="transparent" height="5.5px" id="nJPnMruC9" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(6.75 4.75)" width="10.5px"/><path d="M 0 13.5 L 0 0" fill="transparent" height="13.5px" id="ElaVP7FBq" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(12 5.75)" width="1px"/></svg>`),
      (M = ({ dots: e, height: t, id: n, stroke: r, width: i, width1: a, ...o }) => ({
        ...o,
        BKVe8Pgvw: e ?? o.BKVe8Pgvw ?? 1,
        fICyAUQY1: r ?? o.fICyAUQY1 ?? `rgb(0, 0, 0)`,
        lKf_CQTz5: a ?? o.lKf_CQTz5 ?? 1.5,
      })),
      (N = S(
        /* @__PURE__ */ l(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              fICyAUQY1: o,
              lKf_CQTz5: s,
              BKVe8Pgvw: c,
              ...l
            } = M(e),
            d = v(`2021499928`, j);
          return /*#__PURE__*/ u(A, {
            ...l,
            className: x(`framer-qtWV2`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1335ju": s, "--18mrqx2": o, ...n },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ u(`use`, { href: d }),
          });
        }),
        [
          `.framer-qtWV2 { -webkit-mask: ${D}; aspect-ratio: 1; display: block; mask: ${D}; width: 24px; }`,
        ],
        `framer-qtWV2`
      )),
      (N.displayName = `Arrow Up`),
      _(N, {
        fICyAUQY1: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: T.Color },
        lKf_CQTz5: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: T.Number,
        },
        BKVe8Pgvw: {
          defaultValue: 1,
          displayStepper: !0,
          hidden: !0,
          max: 4,
          min: 1,
          title: `Dots`,
          type: T.Number,
        },
      }));
  }))();
}
var F = /* @__PURE__ */ e({ __FramerMetadata__: () => Q, default: () => Z });
function I(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = t(() => {
    (c(),
      C(),
      m(),
      i(),
      P(),
      (L = ee(N)),
      (R = g(p.div)),
      (z = { bEVQvMdck: { hover: !0 }, wShdMrmOp: { hover: !0 } }),
      (B = [`bEVQvMdck`, `wShdMrmOp`]),
      (V = `framer-gPocA`),
      (H = { bEVQvMdck: `framer-v-sw4ike`, wShdMrmOp: `framer-v-74rkk8` }),
      (U = {
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
      (W = { damping: 70, delay: 0, mass: 1, stiffness: 210, type: `spring` }),
      (G = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (K = ({ value: e, children: t }) => {
        let n = a(f),
          i = e ?? n.transition,
          o = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ u(f.Provider, { value: o, children: t });
      }),
      (q = { Desktop: `bEVQvMdck`, Tablet: `wShdMrmOp` }),
      (J = p.create(o)),
      (Y = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        SUDKt4blH: e ?? i.SUDKt4blH,
        variant: q[i.variant] ?? i.variant ?? `bEVQvMdck`,
      })),
      (X = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = S(
        /* @__PURE__ */ l(function (e, t) {
          let r = s(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, contentLocale: c, setLocale: l } = E();
          te();
          let { style: f, className: p, layoutId: m, variant: g, SUDKt4blH: _, ...v } = Y(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: ee,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = y({
              cycleOrder: B,
              defaultVariant: `bEVQvMdck`,
              enabledGestures: z,
              ref: i,
              variant: g,
              variantClassNames: H,
            }),
            j = X(e, A),
            M = [],
            { activeVariantCallback: P, delay: F } = ne(S),
            L = P(async (...e) => {
              if ((O({ isPressed: !1 }), _ && (await _(...e)) === !1)) return !1;
            }),
            q = x(V, ...M);
          return /*#__PURE__*/ u(h, {
            id: m ?? a,
            children: /*#__PURE__*/ u(J, {
              animate: A,
              initial: !1,
              children: /*#__PURE__*/ u(K, {
                value: G,
                children: /*#__PURE__*/ d(R, {
                  ...v,
                  ...w,
                  __framer__animate: { transition: W },
                  __framer__animateOnce: !0,
                  __framer__enter: U,
                  __framer__styleAppearEffectEnabled: !0,
                  __framer__threshold: 0,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: x(q, `framer-sw4ike`, p, C),
                  "data-border": !0,
                  "data-framer-name": `Desktop`,
                  "data-highlight": !0,
                  layoutDependency: j,
                  layoutId: `bEVQvMdck`,
                  onTap: L,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1.13px`,
                    "--border-color": `rgb(198, 198, 198)`,
                    "--border-left-width": `1.13px`,
                    "--border-right-width": `1.13px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1.13px`,
                    backgroundColor: `rgba(178, 237, 29, 0.2)`,
                    borderBottomLeftRadius: 18.13,
                    borderBottomRightRadius: 18.13,
                    borderTopLeftRadius: 18.13,
                    borderTopRightRadius: 18.13,
                    ...f,
                  },
                  variants: {
                    "bEVQvMdck-hover": {
                      backgroundColor: `var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29))`,
                    },
                    "wShdMrmOp-hover": {
                      backgroundColor: `var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29))`,
                    },
                    wShdMrmOp: {
                      "--border-bottom-width": `0.63px`,
                      "--border-left-width": `0.63px`,
                      "--border-right-width": `0.63px`,
                      "--border-top-width": `0.63px`,
                      borderBottomLeftRadius: 10.15,
                      borderBottomRightRadius: 10.15,
                      borderTopLeftRadius: 10.15,
                      borderTopRightRadius: 10.15,
                    },
                  },
                  ...I({ wShdMrmOp: { "data-framer-name": `Tablet` } }, S, T),
                  children: [
                    /*#__PURE__*/ u(N, {
                      animated: !0,
                      className: `framer-ids9dw`,
                      layoutDependency: j,
                      layoutId: `Z2Udj_yEJ`,
                      style: {
                        "--1335ju": 1.5,
                        "--18mrqx2": `rgb(88, 91, 98)`,
                        "--3it368": 1,
                        rotate: -90,
                      },
                    }),
                    /*#__PURE__*/ u(b, {
                      className: `framer-1lbzswh`,
                      layoutDependency: j,
                      layoutId: `SMJ3_82HJ`,
                      requiresOverflowVisible: !0,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 0 0" overflow="visible"><path d="M 0 0" fill="transparent" stroke-width="1.13" stroke="#AAA"></path></svg>`,
                      withExternalLayout: !0,
                      ...I(
                        {
                          wShdMrmOp: {
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 0 0" overflow="visible"><path d="M 0 0" fill="transparent" stroke-width="0.63" stroke="#AAA"></path></svg>`,
                          },
                        },
                        S,
                        T
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-gPocA.framer-zs1d4k, .framer-gPocA .framer-zs1d4k { display: block; }`,
          `.framer-gPocA.framer-sw4ike { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 11.33px; height: min-content; justify-content: center; overflow: visible; padding: 3.4px 11.33px 3.4px 11.33px; position: relative; width: 35px; }`,
          `.framer-gPocA .framer-ids9dw { flex: none; height: auto; position: relative; width: 27px; }`,
          `.framer-gPocA .framer-1lbzswh { height: 0px; left: 8px; position: absolute; top: 9px; width: 0px; }`,
          `.framer-gPocA.framer-v-74rkk8.framer-sw4ike { gap: 6.34px; padding: 1.9px 6.34px 1.9px 6.34px; width: 20px; }`,
          `.framer-gPocA.framer-v-74rkk8 .framer-ids9dw { width: 15px; }`,
          `.framer-gPocA.framer-v-74rkk8 .framer-1lbzswh { left: 4px; top: 5px; }`,
          `.framer-gPocA[data-border="true"]::after, .framer-gPocA [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-gPocA`
      )),
      (Z.displayName = `Back botton`),
      (Z.defaultProps = { height: 34, width: 35 }),
      _(Z, {
        variant: {
          options: [`bEVQvMdck`, `wShdMrmOp`],
          optionTitles: [`Desktop`, `Tablet`],
          title: `Variant`,
          type: T.Enum,
        },
        SUDKt4blH: { title: `Click`, type: T.EventHandler },
      }),
      w(Z, [{ explicitInter: !0, fonts: [] }, ...L], { supportsExplicitInterCodegen: !0 }),
      (Q = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerjWbUEbZEx`,
            slots: [],
            annotations: {
              framerAutoSizeImages: `true`,
              framerColorSyntax: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"wShdMrmOp":{"layout":["fixed","auto"]},"sYEsHAYKu":{"layout":["fixed","auto"]},"sbkWlim96":{"layout":["fixed","auto"]}}}`,
              framerIntrinsicHeight: `34`,
              framerComponentViewportWidth: `true`,
              framerImmutableVariables: `true`,
              framerIntrinsicWidth: `35`,
              framerVariables: `{"SUDKt4blH":"click"}`,
              framerContractVersion: `1`,
              framerDisplayContentsDiv: `false`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { $ as n, F as r, Z as t };
//# sourceMappingURL=jWbUEbZEx.DNRrj1zj.mjs.map
