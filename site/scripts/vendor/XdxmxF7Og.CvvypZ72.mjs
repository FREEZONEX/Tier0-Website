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
  O as g,
  P as _,
  Pt as v,
  Q as y,
  gt as b,
  j as x,
  s as S,
  wt as C,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
function w(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var T, E, D, O, k, A, j, M, N, P;
function F() {
  return (F = e(() => {
    (s(),
      y(),
      f(),
      r(),
      (T = [`b78JoKqu6`, `qPfHDfRBf`]),
      (E = `framer-fChLU`),
      (D = { b78JoKqu6: `framer-v-8rs0a8`, qPfHDfRBf: `framer-v-1x5j4qa` }),
      (O = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (k = ({ value: e, children: t }) => {
        let r = i(u),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ l(u.Provider, { value: o, children: t });
      }),
      (A = d.create(a)),
      (j = { "Variant 1": `b78JoKqu6`, "Variant 2": `qPfHDfRBf` }),
      (M = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: j[r.variant] ?? r.variant ?? `b78JoKqu6`,
      })),
      (N = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (P = v(
        /* @__PURE__ */ c(function (e, n) {
          let r = o(null),
            i = n ?? r,
            a = t(),
            { activeLocale: s, setLocale: c } = C();
          b();
          let { style: u, className: f, layoutId: m, variant: v, ...y } = M(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: j,
              gestureHandlers: P,
              gestureVariant: F,
              isLoading: I,
              setGestureState: L,
              setVariant: R,
              variants: z,
            } = h({
              cycleOrder: T,
              defaultVariant: `b78JoKqu6`,
              ref: i,
              variant: v,
              variantClassNames: D,
            }),
            B = N(e, z),
            V = _(E);
          return /*#__PURE__*/ l(p, {
            id: m ?? a,
            children: /*#__PURE__*/ l(A, {
              animate: z,
              initial: !1,
              children: /*#__PURE__*/ l(k, {
                value: O,
                children: /*#__PURE__*/ l(d.div, {
                  ...y,
                  ...P,
                  className: _(V, `framer-8rs0a8`, f, S),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: B,
                  layoutId: `b78JoKqu6`,
                  ref: i,
                  style: { ...u },
                  ...w({ qPfHDfRBf: { "data-framer-name": `Variant 2` } }, x, F),
                  children: /*#__PURE__*/ l(g, {
                    className: `framer-11vj2ak`,
                    "data-framer-name": `Figma Cursor`,
                    fill: `rgba(0,0,0,1)`,
                    intrinsicHeight: 60,
                    intrinsicWidth: 59,
                    layoutDependency: B,
                    layoutId: `uf3pEVMlP`,
                    svg: `<svg width="59" height="60" viewBox="0 0 59 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1581 14.276L55.645 35.7602L37.4505 41.3571C36.8871 41.5304 36.4025 41.8963 36.0815 42.3908L26.9755 56.418L18.1581 14.276Z" fill="#73B200" stroke="white" stroke-width="2.51321"/>
</svg>
`,
                    withExternalLayout: !0,
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-fChLU.framer-16deovr, .framer-fChLU .framer-16deovr { display: block; }`,
          `.framer-fChLU.framer-8rs0a8 { height: 44px; overflow: hidden; position: relative; width: 43px; }`,
          `.framer-fChLU .framer-11vj2ak { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
          `.framer-fChLU.framer-v-1x5j4qa.framer-8rs0a8 { height: 35px; width: 34px; }`,
        ],
        `framer-fChLU`
      )),
      (P.displayName = `Cursor`),
      (P.defaultProps = { height: 44, width: 43 }),
      m(P, {
        variant: {
          options: [`b78JoKqu6`, `qPfHDfRBf`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: S.Enum,
        },
      }),
      x(P, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }))();
}
export { F as n, P as t };
//# sourceMappingURL=XdxmxF7Og.CvvypZ72.mjs.map
