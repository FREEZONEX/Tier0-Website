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
  D as g,
  E as ee,
  G as _,
  I as v,
  M as y,
  Mt as b,
  Nt as x,
  P as S,
  Pt as C,
  Q as w,
  U as T,
  _ as te,
  a as E,
  gt as ne,
  j as re,
  jt as ie,
  k as D,
  s as O,
  wt as ae,
  y as k,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { i as A, n as oe, r as j, t as se } from "./Y65iag5vt.B5ZMnZps.mjs?v=20261116-migration-v2";
var M, N, ce, le, P, F, I;
function L() {
  return (L = t(() => {
    (c(),
      w(),
      i(),
      (M = `var(--framer-icon-mask)`),
      (N = /*#__PURE__*/ l(function (e, t) {
        return /*#__PURE__*/ u(`svg`, { ...e, ref: t, children: e.children });
      })),
      (ce = p.create(N)),
      (le = /*#__PURE__*/ l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? /*#__PURE__*/ u(ce, { ...a, layoutId: r, ref: t, children: i })
          : /*#__PURE__*/ u(`svg`, { ...a, ref: t, children: i });
      })),
      (P = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0.914 5.25 L 8.35 5.25 C 8.915 5.25 9.359 4.782 9.247 4.229 C 8.936 2.701 7.922 0 4.632 0 C 1.342 0 0.328 2.701 0.018 4.229 C -0.095 4.782 0.349 5.25 0.914 5.25 Z" fill="transparent" height="5.25px" id="BLclDsK0V" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.868 14)" width="9.26406792947101px"/><path d="M 0 0 C 2.079 0 2.93 2.148 3.274 3.696 C 3.459 4.532 2.783 5.25 1.927 5.25 L 1 5.25" fill="transparent" height="5.25px" id="uRTAiV4PN" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(15.75 14)" width="3.3047891112444994px"/><path d="M 0 2.75 C 0 1.231 1.231 0 2.75 0 C 4.269 0 5.5 1.231 5.5 2.75 C 5.5 4.269 4.269 5.5 2.75 5.5 C 1.231 5.5 0 4.269 0 2.75 Z" fill="transparent" height="5.5px" id="PZLMl9TFR" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(6.75 4.75)" width="5.5px"/><path d="M 0 5.5 C 1.519 5.5 2.5 4.269 2.5 2.75 C 2.5 1.231 1.519 0 0 0" fill="transparent" height="5.5px" id="faEQ1Mxun" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(14.75 4.75)" width="2.5px"/></svg>`),
      (F = ({ dots: e, height: t, id: n, stroke: r, width: i, width1: a, ...o }) => ({
        ...o,
        BKVe8Pgvw: e ?? o.BKVe8Pgvw ?? 1,
        fICyAUQY1: r ?? o.fICyAUQY1 ?? `rgb(0, 0, 0)`,
        lKf_CQTz5: a ?? o.lKf_CQTz5 ?? 1.5,
      })),
      (I = C(
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
            } = F(e),
            d = b(`2702309093`, P);
          return /*#__PURE__*/ u(le, {
            ...l,
            className: S(`framer-zRiWD`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1335ju": s, "--18mrqx2": o, ...n },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ u(`use`, { href: d }),
          });
        }),
        [
          `.framer-zRiWD { -webkit-mask: ${M}; aspect-ratio: 1; display: block; mask: ${M}; width: 24px; }`,
        ],
        `framer-zRiWD`
      )),
      (I.displayName = `Users`),
      y(I, {
        fICyAUQY1: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: O.Color },
        lKf_CQTz5: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: O.Number,
        },
        BKVe8Pgvw: {
          defaultValue: 1,
          displayStepper: !0,
          hidden: !0,
          max: 4,
          min: 1,
          title: `Dots`,
          type: O.Number,
        },
      }));
  }))();
}
var ue = /* @__PURE__ */ e({ __FramerMetadata__: () => B, v0: () => R, v1: () => z }),
  R,
  z,
  B;
function V() {
  return (V = t(() => {
    ((R = `联系团队`),
      (z = `讨论您的需求，并了解 Tier0 如何支持您的生产运营。`),
      (B = {
        exports: {
          v1: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v0: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
var de = /* @__PURE__ */ e({ __FramerMetadata__: () => W, v0: () => H, v1: () => U }),
  H,
  U,
  W;
function fe() {
  return (fe = t(() => {
    ((H = `お問い合わせ`),
      (U = `貴社の課題をお伺いし、Tier0がどのように業務を支援できるかをご提案いたします。`),
      (W = {
        exports: {
          v1: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v0: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
function G(e, t) {
  for (; t; ) {
    let n = pe[t.id];
    if (n) {
      let t = n[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
var pe;
function me() {
  return (me = t(() => {
    (V(), fe(), (pe = { AYmst8Nt3: ue, x2IgcDXft: de }));
  }))();
}
var K, he, ge, _e, ve, ye, q;
function be() {
  return (be = t(() => {
    (c(),
      w(),
      i(),
      (K = `var(--framer-icon-mask)`),
      (he = /*#__PURE__*/ l(function (e, t) {
        return /*#__PURE__*/ u(`svg`, { ...e, ref: t, children: e.children });
      })),
      (ge = p.create(he)),
      (_e = /*#__PURE__*/ l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? /*#__PURE__*/ u(ge, { ...a, layoutId: r, ref: t, children: i })
          : /*#__PURE__*/ u(`svg`, { ...a, ref: t, children: i });
      })),
      (ve = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 2 L 4.5 0 L 4.5 12.5 L 0 14.5 Z" fill="transparent" height="14.5px" id="DWu5x7ZbY" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 4.75)" width="4.5px"/><path d="M 0 2 L 4.5 0 L 4.5 12.5 L 0 14.5 Z" fill="transparent" height="14.5px" id="Z4GuKKe3K" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(14.75 4.75)" width="4.5px"/><path d="M 5.5 2 L 0 0 L 0 12.5 L 5.5 14.5 Z" fill="transparent" height="14.5px" id="OViG3dzi6" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(9.25 4.75)" width="5.5px"/></svg>`),
      (ye = ({ dots: e, height: t, id: n, stroke: r, width: i, width1: a, ...o }) => ({
        ...o,
        BKVe8Pgvw: e ?? o.BKVe8Pgvw ?? 1,
        fICyAUQY1: r ?? o.fICyAUQY1 ?? `rgb(0, 0, 0)`,
        lKf_CQTz5: a ?? o.lKf_CQTz5 ?? 1.5,
      })),
      (q = C(
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
            } = ye(e),
            d = b(`2408735340`, ve);
          return /*#__PURE__*/ u(_e, {
            ...l,
            className: S(`framer-ctFTr`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1335ju": s, "--18mrqx2": o, ...n },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ u(`use`, { href: d }),
          });
        }),
        [
          `.framer-ctFTr { -webkit-mask: ${K}; aspect-ratio: 1; display: block; mask: ${K}; width: 24px; }`,
        ],
        `framer-ctFTr`
      )),
      (q.displayName = `Map`),
      y(q, {
        fICyAUQY1: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: O.Color },
        lKf_CQTz5: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: O.Number,
        },
        BKVe8Pgvw: {
          defaultValue: 1,
          displayStepper: !0,
          hidden: !0,
          max: 4,
          min: 1,
          title: `Dots`,
          type: O.Number,
        },
      }));
  }))();
}
var xe = /* @__PURE__ */ e({
    __FramerMetadata__: () => Te,
    v0: () => Se,
    v1: () => Ce,
    v2: () => we,
  }),
  Se,
  Ce,
  we,
  Te;
function Ee() {
  return (Ee = t(() => {
    (c(),
      m(),
      i(),
      (Se = /*#__PURE__*/ u(o, {
        children: /*#__PURE__*/ u(p.h3, {
          dir: `auto`,
          style: {
            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
            "--framer-font-size": `20px`,
            "--framer-font-weight": `600`,
            "--framer-line-height": `1.4em`,
            "--framer-text-color": `var(--extracted-a0htzi, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
          },
          children: `立即体验 Tier0`,
        }),
      })),
      (Ce = /*#__PURE__*/ u(o, {
        children: /*#__PURE__*/ u(p.h3, {
          dir: `auto`,
          style: {
            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
            "--framer-font-size": `24px`,
            "--framer-line-height": `1.4em`,
            "--framer-text-alignment": `right`,
            "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
          },
          children: `↗`,
        }),
      })),
      (we = /*#__PURE__*/ u(o, {
        children: /*#__PURE__*/ u(p.p, {
          className: `framer-styles-preset-1ogycj`,
          "data-styles-preset": `Y65iag5vt`,
          dir: `auto`,
          style: {
            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
          },
          children: `通过 Tier0 和统一命名空间探索真实的实际应用案例。`,
        }),
      })),
      (Te = {
        exports: {
          v1: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v2: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v0: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
var De = /* @__PURE__ */ e({
    __FramerMetadata__: () => je,
    v0: () => Oe,
    v1: () => ke,
    v2: () => Ae,
  }),
  Oe,
  ke,
  Ae,
  je;
function Me() {
  return (Me = t(() => {
    (c(),
      m(),
      i(),
      (Oe = /*#__PURE__*/ u(o, {
        children: /*#__PURE__*/ u(p.h3, {
          dir: `auto`,
          style: {
            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
            "--framer-font-size": `20px`,
            "--framer-font-weight": `600`,
            "--framer-line-height": `1.4em`,
            "--framer-text-color": `var(--extracted-a0htzi, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
          },
          children: `Tier0を今すぐ試す`,
        }),
      })),
      (ke = /*#__PURE__*/ u(o, {
        children: /*#__PURE__*/ u(p.h3, {
          dir: `auto`,
          style: {
            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
            "--framer-font-size": `24px`,
            "--framer-line-height": `1.4em`,
            "--framer-text-alignment": `right`,
            "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
          },
          children: `↗`,
        }),
      })),
      (Ae = /*#__PURE__*/ u(o, {
        children: /*#__PURE__*/ u(p.p, {
          className: `framer-styles-preset-1ogycj`,
          "data-styles-preset": `Y65iag5vt`,
          dir: `auto`,
          style: {
            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
          },
          children: `Tier0と統一ネームスペース（UNS）を活用した実際のユースケースをご紹介します。`,
        }),
      })),
      (je = {
        exports: {
          v0: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v1: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v2: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
function J(e, t) {
  for (; t; ) {
    let n = Ne[t.id];
    if (n) {
      let t = n[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
var Ne;
function Pe() {
  return (Pe = t(() => {
    (Ee(), Me(), (Ne = { AYmst8Nt3: xe, x2IgcDXft: De }));
  }))();
}
function Y(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Fe, Ie, Le, Re, ze, Be, Ve, He, Ue, We, X, Ge, Z;
function Ke() {
  return (Ke = t(() => {
    (c(),
      w(),
      m(),
      i(),
      L(),
      be(),
      A(),
      Pe(),
      (Fe = { BfsLYk3_R: { hover: !0 }, X1svqOU0P: { hover: !0 } }),
      (Ie = [`X1svqOU0P`, `BfsLYk3_R`]),
      (Le = `framer-tn504`),
      (Re = { BfsLYk3_R: `framer-v-1bbzkn0`, X1svqOU0P: `framer-v-1lxonjo` }),
      (ze = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Be = ({ value: e, children: t }) => {
        let n = a(f),
          i = e ?? n.transition,
          o = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ u(f.Provider, { value: o, children: t });
      }),
      (Ve = { "Variant 1": `X1svqOU0P`, "Variant 2": `BfsLYk3_R` }),
      (He = p.create(o)),
      (Ue = ({ height: e, icon: t, id: n, link: r, text2: i, title2: a, width: o, ...s }) => ({
        ...s,
        hkBNMxtw6: t ?? s.hkBNMxtw6 ?? I,
        iHJjNHkC9: r ?? s.iHJjNHkC9,
        sHAYMreQC: a ?? s.sHAYMreQC ?? `联系团队`,
        V1Zd1T7Pp:
          i ??
          s.V1Zd1T7Pp ??
          `与我们交流您的需求，了解 Tier0 如何支持您的业务运营。`,
        variant: Ve[s.variant] ?? s.variant ?? `X1svqOU0P`,
      })),
      (We = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = /*#__PURE__*/ l(function (e, t) {
        let r = s(null),
          i = t ?? r,
          a = n(),
          { activeLocale: c, setLocale: l } = ae();
        ne();
        let {
            style: f,
            className: m,
            layoutId: ee,
            variant: _,
            hkBNMxtw6: v,
            iHJjNHkC9: y,
            sHAYMreQC: b,
            V1Zd1T7Pp: C,
            ...w
          } = Ue(e),
          {
            baseVariant: T,
            classNames: E,
            clearLoadingGesture: re,
            gestureHandlers: ie,
            gestureVariant: D,
            isLoading: O,
            setGestureState: A,
            setVariant: oe,
            variants: j,
          } = x({
            cycleOrder: Ie,
            defaultVariant: `X1svqOU0P`,
            enabledGestures: Fe,
            ref: i,
            variant: _,
            variantClassNames: Re,
          }),
          M = We(e, j),
          N = S(Le, se);
        return /*#__PURE__*/ u(h, {
          id: ee ?? a,
          children: /*#__PURE__*/ u(He, {
            animate: j,
            initial: !1,
            children: /*#__PURE__*/ u(Be, {
              value: ze,
              children: /*#__PURE__*/ u(k, {
                href: y,
                motionChild: !0,
                nodeId: `X1svqOU0P`,
                openInNewTab: !0,
                scopeId: `dOX_KMWPE`,
                children: /*#__PURE__*/ u(p.a, {
                  ...w,
                  ...ie,
                  className: `${S(N, `framer-1lxonjo`, m, E)} framer-2u94lc`,
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: M,
                  layoutId: `X1svqOU0P`,
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
                    ...f,
                  },
                  variants: {
                    "BfsLYk3_R-hover": { backgroundColor: `rgba(178, 237, 29, 0.05)` },
                    "X1svqOU0P-hover": { backgroundColor: `rgba(178, 237, 29, 0.05)` },
                  },
                  ...Y({ BfsLYk3_R: { "data-framer-name": `Variant 2` } }, T, D),
                  children: /*#__PURE__*/ u(p.div, {
                    className: `framer-oakl31`,
                    "data-framer-name": `Post`,
                    layoutDependency: M,
                    layoutId: `Bwwb1lWeS`,
                    children: /*#__PURE__*/ u(p.div, {
                      className: `framer-17lcgmp`,
                      layoutDependency: M,
                      layoutId: `I5Z1sCnkh`,
                      children: /*#__PURE__*/ d(p.div, {
                        className: `framer-1g7f9kn`,
                        "data-framer-name": `Main Info`,
                        layoutDependency: M,
                        layoutId: `iWpHHWlLJ`,
                        children: [
                          /*#__PURE__*/ u(p.div, {
                            className: `framer-19fnnja`,
                            layoutDependency: M,
                            layoutId: `fYXXYqamA`,
                            style: {
                              backgroundColor: `rgba(178, 237, 29, 0.05)`,
                              borderBottomLeftRadius: 3,
                              borderBottomRightRadius: 3,
                              borderTopLeftRadius: 3,
                              borderTopRightRadius: 3,
                            },
                            children: /*#__PURE__*/ u(te, {
                              animated: !0,
                              className: `framer-17rkbyt`,
                              Component: I,
                              layoutDependency: M,
                              layoutId: `zcxGMDcSv`,
                              style: {
                                "--1335ju": 1.5,
                                "--18mrqx2": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                "--3it368": 1,
                              },
                              ...Y(
                                {
                                  "X1svqOU0P-hover": { Component: v },
                                  BfsLYk3_R: { Component: q },
                                },
                                T,
                                D
                              ),
                            }),
                          }),
                          /*#__PURE__*/ d(p.div, {
                            className: `framer-s40e17`,
                            layoutDependency: M,
                            layoutId: `Dm6vGs_EM`,
                            children: [
                              /*#__PURE__*/ d(p.div, {
                                className: `framer-10yn80n`,
                                layoutDependency: M,
                                layoutId: `C78yM2TAo`,
                                children: [
                                  /*#__PURE__*/ u(g, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ u(o, {
                                      children: /*#__PURE__*/ u(p.h3, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                          "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                          "--framer-font-size": `20px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                        },
                                        children: `联系团队`,
                                      }),
                                    }),
                                    className: `framer-1ei6sqz`,
                                    "data-framer-name": `Title`,
                                    fonts: [`GF;IBM Plex Sans-600`],
                                    layoutDependency: M,
                                    layoutId: `bFobPL3k0`,
                                    style: {
                                      "--extracted-a0htzi": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                    },
                                    text: b,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...Y(
                                      {
                                        "BfsLYk3_R-hover": { text: void 0 },
                                        BfsLYk3_R: {
                                          children:
                                            J(`v0`, c) ??
                                            /*#__PURE__*/ u(o, {
                                              children: /*#__PURE__*/ u(p.h3, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                                  "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                                  "--framer-font-size": `20px`,
                                                  "--framer-font-weight": `600`,
                                                  "--framer-line-height": `1.4em`,
                                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                                },
                                                children: `立即体验 Tier0`,
                                              }),
                                            }),
                                          text: void 0,
                                        },
                                      },
                                      T,
                                      D
                                    ),
                                  }),
                                  /*#__PURE__*/ u(g, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      J(`v1`, c) ??
                                      /*#__PURE__*/ u(o, {
                                        children: /*#__PURE__*/ u(p.h3, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                            "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                            "--framer-font-size": `24px`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-alignment": `right`,
                                            "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                          },
                                          children: `↗`,
                                        }),
                                      }),
                                    className: `framer-19pqwjs`,
                                    "data-framer-name": `Title`,
                                    fonts: [`GF;IBM Plex Sans-regular`],
                                    layoutDependency: M,
                                    layoutId: `IAOSdpk9L`,
                                    style: {
                                      "--extracted-a0htzi": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ u(p.div, {
                                className: `framer-dum6d1`,
                                layoutDependency: M,
                                layoutId: `MPZNLVlBb`,
                                children: /*#__PURE__*/ u(g, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ u(o, {
                                    children: /*#__PURE__*/ u(p.p, {
                                      className: `framer-styles-preset-1ogycj`,
                                      "data-styles-preset": `Y65iag5vt`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                      },
                                      children: `Schedule a conversation with our team to explore Tier0 Enterprise.`,
                                    }),
                                  }),
                                  className: `framer-z09g13`,
                                  "data-framer-name": `Title`,
                                  fonts: [`Inter`],
                                  layoutDependency: M,
                                  layoutId: `IF9JCOc7S`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                  },
                                  text: C,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...Y(
                                    {
                                      "BfsLYk3_R-hover": { text: void 0 },
                                      BfsLYk3_R: {
                                        children:
                                          J(`v2`, c) ??
                                          /*#__PURE__*/ u(o, {
                                            children: /*#__PURE__*/ u(p.p, {
                                              className: `framer-styles-preset-1ogycj`,
                                              "data-styles-preset": `Y65iag5vt`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                              },
                                              children: `探索 Tier0 与统一命名空间的真实应用场景。`,
                                            }),
                                          }),
                                        text: void 0,
                                      },
                                    },
                                    T,
                                    D
                                  ),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }),
        });
      })),
      (Ge = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-tn504.framer-2u94lc, .framer-tn504 .framer-2u94lc { display: block; }`,
        `.framer-tn504.framer-1lxonjo { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 16px; position: relative; text-decoration: none; width: 762px; }`,
        `.framer-tn504 .framer-oakl31 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-tn504 .framer-17lcgmp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-tn504 .framer-1g7f9kn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-tn504 .framer-19fnnja { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 5px; position: relative; width: min-content; }`,
        `.framer-tn504 .framer-17rkbyt { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 64px); position: relative; width: 65px; }`,
        `.framer-tn504 .framer-s40e17 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-tn504 .framer-10yn80n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-tn504 .framer-1ei6sqz, .framer-tn504 .framer-19pqwjs, .framer-tn504 .framer-z09g13 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-tn504 .framer-dum6d1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        ...oe,
        `.framer-tn504[data-border="true"]::after, .framer-tn504 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (Z = C(X, Ge, `framer-tn504`)),
      (Z.displayName = `book a meeting card`),
      (Z.defaultProps = { height: 107, width: 762 }),
      y(Z, {
        variant: {
          options: [`X1svqOU0P`, `BfsLYk3_R`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: O.Enum,
        },
        hkBNMxtw6: {
          defaultValue: {
            identifier: `module:Bpq3plIy1gRLNSlMXUpM/ZNkLvYydYfIk1XgD3gcV/jDJ5HTDoV.js:default`,
            moduleId: `Bpq3plIy1gRLNSlMXUpM`,
          },
          setModuleId: `EqX8thWQjdZcOB1c6p5N`,
          title: `Icon`,
          type: O.VectorSetItem,
        },
        iHJjNHkC9: {
          description: `https://outlook.office.com/book/BookameetingwithTier0@freezonex.onmicrosoft.com/?ismsaljsauthenabled=true`,
          title: `Link`,
          type: O.Link,
        },
        sHAYMreQC: {
          defaultValue: `联系团队`,
          displayTextArea: !1,
          title: `Title 2`,
          type: O.String,
        },
        onsHAYMreQCChange: { changes: `sHAYMreQC`, type: O.ChangeHandler },
        V1Zd1T7Pp: {
          defaultValue: `与我们交流您的需求，了解 Tier0 如何支持您的业务运营。`,
          displayTextArea: !1,
          title: `Text 2`,
          type: O.String,
        },
        onV1Zd1T7PpChange: { changes: `V1Zd1T7Pp`, type: O.ChangeHandler },
      }),
      re(
        Z,
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
            ],
          },
          ..._(j),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var qe, Je, Ye, Xe, Q, Ze, Qe, $e, et, $, tt;
function nt() {
  return (nt = t(() => {
    (c(),
      w(),
      m(),
      i(),
      L(),
      me(),
      Ke(),
      (qe = T(Z)),
      (Je = `framer-QJAbr`),
      (Ye = { i9CahtUdF: `framer-v-oyr612` }),
      (Xe = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ze = ({ value: e, children: t }) => {
        let n = a(f),
          i = e ?? n.transition,
          o = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ u(f.Provider, { value: o, children: t });
      }),
      (Qe = p.create(o)),
      ($e = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (et = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = C(
        /* @__PURE__ */ l(function (e, t) {
          let r = s(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: c } = ae(),
            l = ne(),
            { style: f, className: m, layoutId: g, variant: _, ...v } = $e(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: te,
              setGestureState: re,
              setVariant: O,
              variants: k,
            } = x({ defaultVariant: `i9CahtUdF`, ref: i, variant: _, variantClassNames: Ye }),
            A = et(e, k),
            oe = S(Je);
          return (
            ie(),
            /*#__PURE__*/ u(h, {
              id: g ?? a,
              children: /*#__PURE__*/ u(Qe, {
                animate: k,
                initial: !1,
                children: /*#__PURE__*/ u(Ze, {
                  value: Xe,
                  children: /*#__PURE__*/ d(p.div, {
                    ...v,
                    ...w,
                    className: S(oe, `framer-oyr612`, m, b),
                    "data-framer-name": `Variant 1`,
                    layoutDependency: A,
                    layoutId: `i9CahtUdF`,
                    ref: i,
                    style: { ...f },
                    children: [
                      /*#__PURE__*/ u(ee, {
                        links: [
                          { href: { webPageId: `bUxkE3u2Z` }, implicitPathVariables: void 0 },
                        ],
                        children: (e) =>
                          /*#__PURE__*/ u(E, {
                            height: 107,
                            width: l?.width || `100vw`,
                            y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 222) / 2 + 0 + 0),
                            children: /*#__PURE__*/ u(D, {
                              className: `framer-t86zxt-container`,
                              layoutDependency: A,
                              layoutId: `B31xZRUPC-container`,
                              nodeId: `B31xZRUPC`,
                              rendersWithMotion: !0,
                              scopeId: `gwopNgNvn`,
                              children: /*#__PURE__*/ u(Z, {
                                height: `100%`,
                                hkBNMxtw6: I,
                                id: `B31xZRUPC`,
                                iHJjNHkC9: e[0],
                                layoutId: `B31xZRUPC`,
                                sHAYMreQC: G(`v0`, o) ?? `联系团队`,
                                style: { width: `100%` },
                                V1Zd1T7Pp:
                                  G(`v1`, o) ??
                                  `与我们交流您的需求，了解 Tier0 如何支持您的业务运营。`,
                                variant: Q(`BfsLYk3_R`),
                                width: `100%`,
                              }),
                            }),
                          }),
                      }),
                      /*#__PURE__*/ u(E, {
                        height: 107,
                        width: l?.width || `100vw`,
                        y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 222) / 2 + 107 + 8),
                        children: /*#__PURE__*/ u(D, {
                          className: `framer-1asgij-container`,
                          layoutDependency: A,
                          layoutId: `ug0QYWOac-container`,
                          nodeId: `ug0QYWOac`,
                          rendersWithMotion: !0,
                          scopeId: `gwopNgNvn`,
                          children: /*#__PURE__*/ u(Z, {
                            height: `100%`,
                            hkBNMxtw6: I,
                            id: `ug0QYWOac`,
                            iHJjNHkC9: `https://outlook.office.com/book/BookameetingwithTier0@freezonex.onmicrosoft.com/`,
                            layoutId: `ug0QYWOac`,
                            sHAYMreQC: G(`v0`, o) ?? `联系团队`,
                            style: { width: `100%` },
                            V1Zd1T7Pp:
                              G(`v1`, o) ??
                              `与我们交流您的需求，了解 Tier0 如何支持您的业务运营。`,
                            variant: Q(`X1svqOU0P`),
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
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-QJAbr.framer-xpq08c, .framer-QJAbr .framer-xpq08c { display: block; }`,
          `.framer-QJAbr.framer-oyr612 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 762px; }`,
          `.framer-QJAbr .framer-t86zxt-container, .framer-QJAbr .framer-1asgij-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ],
        `framer-QJAbr`
      )),
      ($.displayName = `meeting card set`),
      ($.defaultProps = { height: 222, width: 762 }),
      re($, [{ explicitInter: !0, fonts: [] }, ...qe], { supportsExplicitInterCodegen: !0 }),
      ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([v(Z, {}, t)])) }),
      (tt = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramergwopNgNvn`,
            slots: [],
            annotations: {
              framerAutoSizeImages: `true`,
              framerComponentViewportWidth: `true`,
              framerDisplayContentsDiv: `false`,
              framerIntrinsicHeight: `222`,
              framerIntrinsicWidth: `762`,
              framerColorSyntax: `true`,
              framerImmutableVariables: `true`,
              framerContractVersion: `1`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
nt();
export { tt as __FramerMetadata__, $ as default };
//# sourceMappingURL=gwopNgNvn.DAFNlmyE.mjs.map
