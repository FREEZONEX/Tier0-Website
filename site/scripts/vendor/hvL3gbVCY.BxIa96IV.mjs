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
import { S as d, Yi as f, t as p, v as m } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import {
  D as h,
  F as g,
  G as _,
  M as v,
  Nt as y,
  O as b,
  P as x,
  Pt as S,
  Q as C,
  gt as w,
  j as T,
  s as E,
  wt as D,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { i as O, n as k, r as A, t as j } from "./IIMP8Vr9g.Cf7xPKPX.mjs?v=20261116-migration-v2";
function M(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var N, P, F, I, L, R, z, B, V, H, U, W;
function G() {
  return (G = e(() => {
    (s(),
      C(),
      p(),
      r(),
      O(),
      (N = [`MBdvDVfxh`, `X5wUgeQqk`, `sjXzz7PYl`]),
      (P = `framer-4Y6lb`),
      (F = {
        MBdvDVfxh: `framer-v-1vktgcm`,
        sjXzz7PYl: `framer-v-1h4iu6y`,
        X5wUgeQqk: `framer-v-1gjns54`,
      }),
      (I = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (L = ({ value: e, children: t }) => {
        let r = i(d),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ l(d.Provider, { value: o, children: t });
      }),
      (R = f.create(a)),
      (z = {
        "Not Available": `X5wUgeQqk`,
        "White Available": `sjXzz7PYl`,
        "Yellow Available": `MBdvDVfxh`,
      }),
      (B = ({ height: e, id: t, point: n, width: r, ...i }) => ({
        ...i,
        variant: z[i.variant] ?? i.variant ?? `MBdvDVfxh`,
        yedMy0Mmu: n ?? i.yedMy0Mmu ?? `Custom UX/UI Solutions`,
      })),
      (V = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (H = /*#__PURE__*/ c(function (e, n) {
        let r = o(null),
          i = n ?? r,
          s = t(),
          { activeLocale: c, setLocale: d } = D();
        w();
        let { style: p, className: g, layoutId: _, variant: v, yedMy0Mmu: S, ...C } = B(e),
          {
            baseVariant: T,
            classNames: E,
            clearLoadingGesture: O,
            gestureHandlers: k,
            gestureVariant: A,
            isLoading: z,
            setGestureState: H,
            setVariant: U,
            variants: W,
          } = y({
            cycleOrder: N,
            defaultVariant: `MBdvDVfxh`,
            ref: i,
            variant: v,
            variantClassNames: F,
          }),
          G = V(e, W),
          K = x(P, j),
          q = () => ![`X5wUgeQqk`, `sjXzz7PYl`].includes(T),
          J = () => T === `X5wUgeQqk`,
          Y = () => T === `sjXzz7PYl`;
        return /*#__PURE__*/ l(m, {
          id: _ ?? s,
          children: /*#__PURE__*/ l(R, {
            animate: W,
            initial: !1,
            children: /*#__PURE__*/ l(L, {
              value: I,
              children: /*#__PURE__*/ u(f.div, {
                ...C,
                ...k,
                className: x(K, `framer-1vktgcm`, g, E),
                "data-framer-name": `Yellow Available`,
                layoutDependency: G,
                layoutId: `MBdvDVfxh`,
                ref: i,
                style: { opacity: 1, ...p },
                variants: { sjXzz7PYl: { opacity: 1 }, X5wUgeQqk: { opacity: 0.5 } },
                ...M(
                  {
                    sjXzz7PYl: { "data-framer-name": `White Available` },
                    X5wUgeQqk: { "data-framer-name": `Not Available` },
                  },
                  T,
                  A
                ),
                children: [
                  q() &&
                    /*#__PURE__*/ l(b, {
                      className: `framer-13drs39`,
                      "data-framer-name": `Icon`,
                      layout: `position`,
                      layoutDependency: G,
                      layoutId: `g7ZH3X9OB`,
                      opacity: 1,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 17.5 10 C 17.5 14.142 14.142 17.5 10 17.5 C 5.858 17.5 2.5 14.142 2.5 10 C 2.5 5.858 5.858 2.5 10 2.5 C 14.142 2.5 17.5 5.858 17.5 10 Z" fill="var(--token-5730e9d2-a123-4116-8e2a-9f8b7c9aaa01, rgb(239, 187, 59))" opacity="0.2"></path><path d="M 13.567 7.683 C 13.685 7.8 13.75 7.959 13.75 8.125 C 13.75 8.291 13.685 8.45 13.567 8.567 L 9.192 12.942 C 9.075 13.06 8.916 13.125 8.75 13.125 C 8.584 13.125 8.425 13.06 8.308 12.942 L 6.433 11.067 C 6.189 10.823 6.189 10.427 6.433 10.183 C 6.677 9.939 7.073 9.939 7.317 10.183 L 8.75 11.616 L 12.683 7.683 C 12.8 7.565 12.959 7.5 13.125 7.5 C 13.291 7.5 13.45 7.565 13.567 7.683 Z M 18.125 10 C 18.125 14.487 14.487 18.125 10 18.125 C 5.513 18.125 1.875 14.487 1.875 10 C 1.875 5.513 5.513 1.875 10 1.875 C 14.485 1.88 18.12 5.515 18.125 10 Z M 16.875 10 C 16.875 6.203 13.797 3.125 10 3.125 C 6.203 3.125 3.125 6.203 3.125 10 C 3.125 13.797 6.203 16.875 10 16.875 C 13.795 16.871 16.871 13.795 16.875 10 Z" fill="var(--token-5730e9d2-a123-4116-8e2a-9f8b7c9aaa01, rgb(239, 187, 59))"></path></svg>`,
                      svgContentId: 10251634164,
                      withExternalLayout: !0,
                    }),
                  /*#__PURE__*/ l(h, {
                    __fromCanvasComponent: !0,
                    children: /*#__PURE__*/ l(a, {
                      children: /*#__PURE__*/ l(f.p, {
                        className: `framer-styles-preset-81u0hx`,
                        "data-styles-preset": `IIMP8Vr9g`,
                        children: `Custom UX/UI Solutions`,
                      }),
                    }),
                    className: `framer-zdgly0`,
                    "data-framer-name": `Text`,
                    fonts: [`Inter`],
                    layoutDependency: G,
                    layoutId: `qtaP9ud6t`,
                    text: S,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                  J() &&
                    /*#__PURE__*/ l(b, {
                      className: `framer-a45n90`,
                      "data-framer-name": `Icon`,
                      layout: `position`,
                      layoutDependency: G,
                      layoutId: `Jeecu8YY7`,
                      opacity: 1,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 17.5 10 C 17.5 14.142 14.142 17.5 10 17.5 C 5.858 17.5 2.5 14.142 2.5 10 C 2.5 5.858 5.858 2.5 10 2.5 C 14.142 2.5 17.5 5.858 17.5 10 Z" fill="var(--token-bf924091-507a-466d-abb4-35a04464e1ac, rgb(255, 65, 59))" opacity="0.2"></path><path d="M 12.942 7.942 L 10.884 10 L 12.942 12.058 C 13.186 12.302 13.186 12.698 12.942 12.942 C 12.698 13.186 12.302 13.186 12.058 12.942 L 10 10.884 L 7.942 12.942 C 7.698 13.186 7.302 13.186 7.058 12.942 C 6.814 12.698 6.814 12.302 7.058 12.058 L 9.116 10 L 7.058 7.942 C 6.814 7.698 6.814 7.302 7.058 7.058 C 7.302 6.814 7.698 6.814 7.942 7.058 L 10 9.116 L 12.058 7.058 C 12.302 6.814 12.698 6.814 12.942 7.058 C 13.186 7.302 13.186 7.698 12.942 7.942 Z M 18.125 10 C 18.125 14.487 14.487 18.125 10 18.125 C 5.513 18.125 1.875 14.487 1.875 10 C 1.875 5.513 5.513 1.875 10 1.875 C 14.485 1.88 18.12 5.515 18.125 10 Z M 16.875 10 C 16.875 6.203 13.797 3.125 10 3.125 C 6.203 3.125 3.125 6.203 3.125 10 C 3.125 13.797 6.203 16.875 10 16.875 C 13.795 16.871 16.871 13.795 16.875 10 Z" fill="var(--token-bf924091-507a-466d-abb4-35a04464e1ac, rgb(255, 65, 59))"></path></svg>`,
                      svgContentId: 11453824117,
                      withExternalLayout: !0,
                      ...M({ X5wUgeQqk: { svgContentId: 11877988258 } }, T, A),
                    }),
                  Y() &&
                    /*#__PURE__*/ l(b, {
                      className: `framer-iek378`,
                      "data-framer-name": `Icon`,
                      layout: `position`,
                      layoutDependency: G,
                      layoutId: `ZnxzIqmiS`,
                      opacity: 1,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 17.5 10 C 17.5 14.142 14.142 17.5 10 17.5 C 5.858 17.5 2.5 14.142 2.5 10 C 2.5 5.858 5.858 2.5 10 2.5 C 14.142 2.5 17.5 5.858 17.5 10 Z" fill="var(--token-a06e00d5-6d89-4c1d-98b8-fbb391ce4ffa, rgb(255, 255, 255))" opacity="0.2"></path><path d="M 13.567 7.683 C 13.685 7.8 13.75 7.959 13.75 8.125 C 13.75 8.291 13.685 8.45 13.567 8.567 L 9.192 12.942 C 9.075 13.06 8.916 13.125 8.75 13.125 C 8.584 13.125 8.425 13.06 8.308 12.942 L 6.433 11.067 C 6.189 10.823 6.189 10.427 6.433 10.183 C 6.677 9.939 7.073 9.939 7.317 10.183 L 8.75 11.616 L 12.683 7.683 C 12.8 7.565 12.959 7.5 13.125 7.5 C 13.291 7.5 13.45 7.565 13.567 7.683 Z M 18.125 10 C 18.125 14.487 14.487 18.125 10 18.125 C 5.513 18.125 1.875 14.487 1.875 10 C 1.875 5.513 5.513 1.875 10 1.875 C 14.485 1.88 18.12 5.515 18.125 10 Z M 16.875 10 C 16.875 6.203 13.797 3.125 10 3.125 C 6.203 3.125 3.125 6.203 3.125 10 C 3.125 13.797 6.203 16.875 10 16.875 C 13.795 16.871 16.871 13.795 16.875 10 Z" fill="var(--token-a06e00d5-6d89-4c1d-98b8-fbb391ce4ffa, rgb(255, 255, 255))"></path></svg>`,
                      svgContentId: 12155199802,
                      withExternalLayout: !0,
                      ...M({ sjXzz7PYl: { svgContentId: 10629432668 } }, T, A),
                    }),
                ],
              }),
            }),
          }),
        });
      })),
      (U = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-4Y6lb.framer-h4wht8, .framer-4Y6lb .framer-h4wht8 { display: block; }`,
        `.framer-4Y6lb.framer-1vktgcm { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 608px; }`,
        `.framer-4Y6lb .framer-13drs39, .framer-4Y6lb .framer-a45n90, .framer-4Y6lb .framer-iek378 { flex: none; height: 20px; position: relative; width: 20px; }`,
        `.framer-4Y6lb .framer-zdgly0 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-4Y6lb.framer-v-1gjns54 .framer-zdgly0, .framer-4Y6lb.framer-v-1h4iu6y .framer-zdgly0 { order: 2; }`,
        `.framer-4Y6lb.framer-v-1gjns54 .framer-a45n90 { order: 1; }`,
        `.framer-4Y6lb.framer-v-1h4iu6y .framer-iek378 { order: 0; }`,
        ...k,
      ]),
      (W = S(H, U, `framer-4Y6lb`)),
      (W.displayName = `Interaction Components/Body Points`),
      (W.defaultProps = { height: 29, width: 608 }),
      v(W, {
        variant: {
          options: [`MBdvDVfxh`, `X5wUgeQqk`, `sjXzz7PYl`],
          optionTitles: [`Yellow Available`, `Not Available`, `White Available`],
          title: `Variant`,
          type: E.Enum,
        },
        yedMy0Mmu: {
          defaultValue: `Custom UX/UI Solutions`,
          displayTextArea: !1,
          title: `Point`,
          type: E.String,
        },
      }),
      T(
        W,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `400`,
              },
            ],
          },
          ..._(A),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var K, q, J;
function Y() {
  return (Y = e(() => {
    (C(),
      g.loadFonts([
        `GF;IBM Plex Sans-regular`,
        `GF;IBM Plex Sans-700`,
        `GF;IBM Plex Sans-700italic`,
        `GF;IBM Plex Sans-italic`,
      ]),
      (K = [
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
      (q = [
        `.framer-hDU0l .framer-styles-preset-bayqe:not(.rich-text-wrapper), .framer-hDU0l .framer-styles-preset-bayqe.rich-text-wrapper h1 { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1439px) and (min-width: 810px) { .framer-hDU0l .framer-styles-preset-bayqe:not(.rich-text-wrapper), .framer-hDU0l .framer-styles-preset-bayqe.rich-text-wrapper h1 { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-hDU0l .framer-styles-preset-bayqe:not(.rich-text-wrapper), .framer-hDU0l .framer-styles-preset-bayqe.rich-text-wrapper h1 { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (J = `framer-hDU0l`));
  }))();
}
export { W as a, Y as i, q as n, G as o, K as r, J as t };
//# sourceMappingURL=hvL3gbVCY.BxIa96IV.mjs.map
