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
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { S as u, Yi as d, t as f, v as p } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import {
  M as m,
  Nt as h,
  P as g,
  Pt as _,
  Q as v,
  gt as y,
  j as b,
  s as x,
  wt as S,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
function C(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var w, T, E, D, O, k, A, j, M, N, P;
function F() {
  return (F = e(() => {
    (s(),
      v(),
      f(),
      r(),
      (w = [`zReINw005`, `n1Lxx4QSl`]),
      (T = `framer-XXS4r`),
      (E = { n1Lxx4QSl: `framer-v-ydz03l`, zReINw005: `framer-v-35610y` }),
      (D = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (O = ({ value: e, children: t }) => {
        let r = i(u),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ l(u.Provider, { value: o, children: t });
      }),
      (k = d(a)),
      (A = { Off: `zReINw005`, On: `n1Lxx4QSl` }),
      (j = ({ background: e, backgroundInactive: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        oep5aWG90: e ?? a.oep5aWG90 ?? `rgb(0, 153, 255)`,
        variant: A[a.variant] ?? a.variant ?? `zReINw005`,
        wdGQJh0F_: t ?? a.wdGQJh0F_ ?? `rgba(0, 0, 0, 0.1)`,
      })),
      (M = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (N = _(
        /* @__PURE__ */ c(function (e, n) {
          let { activeLocale: r, setLocale: i } = S(),
            {
              style: a,
              className: s,
              layoutId: c,
              variant: u,
              oep5aWG90: f,
              wdGQJh0F_: m,
              ..._
            } = j(e),
            {
              baseVariant: v,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: A,
              gestureVariant: N,
              isLoading: P,
              setGestureState: F,
              setVariant: I,
              variants: L,
            } = h({ cycleOrder: w, defaultVariant: `zReINw005`, variant: u, variantClassNames: E }),
            R = M(e, L),
            z = o(null),
            B = t(),
            V = [];
          return (
            y(),
            /*#__PURE__*/ l(p, {
              id: c ?? B,
              children: /*#__PURE__*/ l(k, {
                animate: L,
                initial: !1,
                children: /*#__PURE__*/ l(O, {
                  value: D,
                  children: /*#__PURE__*/ l(d.button, {
                    ..._,
                    ...A,
                    className: g(T, ...V, `framer-35610y`, s, b),
                    "data-framer-name": `Off`,
                    "data-reset": `button`,
                    layoutDependency: R,
                    layoutId: `zReINw005`,
                    ref: n ?? z,
                    style: {
                      backgroundColor: m,
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      ...a,
                    },
                    variants: { n1Lxx4QSl: { backgroundColor: f } },
                    ...C({ n1Lxx4QSl: { "data-framer-name": `On` } }, v, N),
                    children: /*#__PURE__*/ l(d.div, {
                      className: `framer-u7n9zz`,
                      layoutDependency: R,
                      layoutId: `O3uKgVodv`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: `50%`,
                        borderBottomRightRadius: `50%`,
                        borderTopLeftRadius: `50%`,
                        borderTopRightRadius: `50%`,
                      },
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-XXS4r.framer-15sckd1, .framer-XXS4r .framer-15sckd1 { display: block; }`,
          `.framer-XXS4r.framer-35610y { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 14px; justify-content: flex-start; overflow: hidden; padding: 2px; position: relative; width: 24px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-XXS4r .framer-u7n9zz { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 10px); overflow: visible; position: relative; width: 10px; z-index: 2; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-XXS4r.framer-35610y { gap: 0px; } .framer-XXS4r.framer-35610y > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-XXS4r.framer-35610y > :first-child { margin-left: 0px; } .framer-XXS4r.framer-35610y > :last-child { margin-right: 0px; } }`,
          `.framer-XXS4r.framer-v-ydz03l.framer-35610y { justify-content: flex-end; }`,
        ],
        `framer-XXS4r`
      )),
      (N.displayName = `Toggle`),
      (N.defaultProps = { height: 14, width: 24 }),
      m(N, {
        variant: {
          options: [`zReINw005`, `n1Lxx4QSl`],
          optionTitles: [`Off`, `On`],
          title: `Variant`,
          type: x.Enum,
        },
        oep5aWG90: { defaultValue: `rgb(0, 153, 255)`, title: `Background`, type: x.Color },
        wdGQJh0F_: {
          defaultValue: `rgba(0, 0, 0, 0.1)`,
          title: `Background Inactive`,
          type: x.Color,
        },
      }),
      b(N, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }),
      (P = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerBlf0sjosZ`,
            slots: [],
            annotations: {
              framerContractVersion: `1`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"n1Lxx4QSl":{"layout":["fixed","fixed"]}}}`,
              framerImmutableVariables: `true`,
              framerIntrinsicWidth: `24`,
              framerIntrinsicHeight: `14`,
              framerVariables: `{"oep5aWG90":"background","wdGQJh0F_":"backgroundInactive"}`,
              framerComponentViewportWidth: `true`,
              framerDisplayContentsDiv: `false`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
F();
export { P as __FramerMetadata__, N as default };
//# sourceMappingURL=Blf0sjosZ.DpCULemZ.mjs.map
