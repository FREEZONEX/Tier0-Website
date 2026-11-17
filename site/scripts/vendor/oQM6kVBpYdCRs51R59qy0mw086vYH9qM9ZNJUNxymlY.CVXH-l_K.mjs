import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  D as t,
  F as n,
  O as r,
  P as i,
  R as a,
  S as ee,
  c as o,
  l as te,
  m as s,
  s as c,
  u as l,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { S as ne, Yi as u, t as re, v as d } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import {
  C as ie,
  Ct as ae,
  D as f,
  E as oe,
  Et as se,
  G as p,
  I as m,
  P as h,
  Pt as g,
  Q as _,
  St as ce,
  U as v,
  a as y,
  at as le,
  bt as ue,
  gt as de,
  j as b,
  jt as fe,
  kt as x,
  lt as S,
  m as C,
  n as pe,
  o as w,
  ut as me,
  v as T,
  w as E,
  wt as he,
  yt as ge,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { m as D, n as O, p as k, t as A } from "./shared-lib.CHy_rbfQ.mjs?v=20261116-migration-v2";
import { i as j, n as M, r as N, t as _e } from "./aqwnXEE4n.hmCSLb_E.mjs?v=20261116-migration-v2";
import { i as P, n as ve, r as ye, t as be } from "./TTQCH8Fpp.Da_B3N68.mjs?v=20261116-migration-v2";
import { n as xe, t as F } from "./UHj9H7ULF.BAaetTGP.mjs?v=20261116-migration-v2";
import { n as Se, t as I } from "./yEZq_gVss.DlMkx0Rd.mjs?v=20261116-migration-v2";
import { i as Ce, t as we } from "./GDzaVbCEd.BIN7eRtb.mjs?v=20261116-migration-v2";
import { n as Te, r as Ee } from "./sbQ_pJmt8.CE6_6BOB.mjs?v=20261116-migration-v2";
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
function De(e) {
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
function Oe(e) {
  let t = De(e);
  if (t) throw t;
}
var R;
function z() {
  return (z = e(() => {
    (_(), (R = { AYmst8Nt3: new T(() => import("./sbQ_pJmt8-0.sffE7oV6.mjs?v=20261116-migration-v2")) }));
  }))();
}
var B, ke, V, H, U, W, G, K, q, J, Y, Ae, X, je, Me, Z, Ne, Q, Pe, Fe, Ie, Le, $, Re;
function ze() {
  return (ze = e(() => {
    (o(),
      _(),
      re(),
      r(),
      xe(),
      D(),
      O(),
      Se(),
      Ce(),
      j(),
      P(),
      z(),
      Te(),
      (B = v(I)),
      (ke = v(F)),
      (V = v(k)),
      (H = v(A)),
      (U = {
        DoJPwXQB7: `(min-width: 810px) and (max-width: 1439.98px)`,
        fh0zFZHf_: `(min-width: 1440px)`,
        ihQYtGkpN: `(max-width: 809.98px)`,
      }),
      (W = () => typeof document < `u`),
      (G = []),
      (K = `framer-I5EaH`),
      (q = {
        DoJPwXQB7: `framer-v-1rngzcx`,
        fh0zFZHf_: `framer-v-1et6wng`,
        ihQYtGkpN: `framer-v-31ewm7`,
      }),
      (J = (e, t, n) => (e && t ? `position` : n)),
      (Y = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ae = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (X = (e, t, n) => {
        if (typeof e != `string`) return ``;
        let r = new Date(e);
        if (isNaN(r.getTime())) return ``;
        let i = `en-US`;
        try {
          return r.toLocaleString(n || i, t);
        } catch {
          return r.toLocaleString(i, t);
        }
      }),
      (je = { dateStyle: `medium`, timeZone: `UTC` }),
      (Me = (e, t) => X(e, je, t)),
      (Z = () => ({
        from: { alias: `bGtFScWHi`, data: we, type: `Collection` },
        limit: { type: `LiteralValue`, value: 5001 },
        offset: { type: `LiteralValue`, value: 0 },
        orderBy: [
          { collection: `bGtFScWHi`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
        ],
        select: [
          { collection: `bGtFScWHi`, name: `IegIZjdLj`, type: `Identifier` },
          { collection: `bGtFScWHi`, name: `j56HSkFKu`, type: `Identifier` },
          { collection: `bGtFScWHi`, name: `u7Knagwe9`, type: `Identifier` },
          { collection: `bGtFScWHi`, name: `b4ajUUAPR`, type: `Identifier` },
          { collection: `bGtFScWHi`, name: `ELnXIKL_l`, type: `Identifier` },
          { collection: `bGtFScWHi`, name: `id`, type: `Identifier` },
        ],
      })),
      (Ne = ({ query: e, pageSize: t, children: n }) => n(x(e))),
      (Q = { Desktop: `fh0zFZHf_`, Phone: `ihQYtGkpN`, Tablet: `DoJPwXQB7` }),
      (Pe = ({ value: e }) =>
        ce()
          ? null
          : /*#__PURE__*/ c(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Fe = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Q[r.variant] ?? r.variant ?? `fh0zFZHf_`,
      })),
      (Ie = /*#__PURE__*/ s(function (e, r) {
        let o = ee(null),
          s = r ?? o;
        t();
        let { activeLocale: re, contentLocale: p, setLocale: m } = he(),
          g = de(),
          { style: _, className: ce, layoutId: v, variant: le, ...b } = Fe(e),
          x = n(() => Ee({}, p), [p]);
        se(x);
        let [S, me] = ue(le, U, !1),
          T = h(K, _e, be),
          D = i(C)?.isLayoutTemplate,
          O = !!i(ne)?.transition?.layout,
          j = J(D, O);
        Oe(re);
        let M = ae();
        fe();
        let N = () => !W() || S !== `ihQYtGkpN`,
          P = () => !W() || S === `ihQYtGkpN`;
        return (
          ge({}),
          /*#__PURE__*/ c(C.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Q,
              primaryVariantId: `fh0zFZHf_`,
              variantClassNames: q,
            },
            children: /*#__PURE__*/ l(d, {
              id: v ?? `sbQ_pJmt8`,
              children: [
                /*#__PURE__*/ c(Pe, {
                  value: `html body { background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ l(u.div, {
                  ...b,
                  className: h(T, `framer-1et6wng`, ce),
                  ref: s,
                  style: { ..._ },
                  children: [
                    /*#__PURE__*/ l(u.div, {
                      className: `framer-4sngf3`,
                      layout: j,
                      children: [
                        /*#__PURE__*/ l(`div`, {
                          className: `framer-1d97zlr`,
                          children: [
                            /*#__PURE__*/ c(f, {
                              __fromCanvasComponent: !0,
                              children:
                                L(`v0`, p) ??
                                /*#__PURE__*/ c(a, {
                                  children: /*#__PURE__*/ c(`h1`, {
                                    className: `framer-styles-preset-29f6n5`,
                                    "data-styles-preset": `aqwnXEE4n`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                    },
                                    children: `活动`,
                                  }),
                                }),
                              className: `framer-1ibd71d`,
                              "data-framer-name": `Heading`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ l(`div`, {
                              className: `framer-biar0b`,
                              children: [
                                /*#__PURE__*/ c(f, {
                                  __fromCanvasComponent: !0,
                                  children:
                                    L(`v1`, p) ??
                                    /*#__PURE__*/ c(a, {
                                      children: /*#__PURE__*/ c(`p`, {
                                        className: `framer-styles-preset-wd9b9c`,
                                        "data-styles-preset": `TTQCH8Fpp`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `揭示数字变革的模式、发展及可行策略`,
                                      }),
                                    }),
                                  className: `framer-1wbaoh9`,
                                  "data-framer-name": `Paragraph`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ c(E, {
                                  breakpoint: S,
                                  overrides: { ihQYtGkpN: { width: `310px` } },
                                  children: /*#__PURE__*/ c(y, {
                                    height: 43,
                                    width: `406px`,
                                    y: (g?.y || 0) + 301.5,
                                    children: /*#__PURE__*/ c(w, {
                                      className: `framer-a76sej-container`,
                                      nodeId: `scZ9sYhw1`,
                                      scopeId: `sbQ_pJmt8`,
                                      children: /*#__PURE__*/ c(I, {
                                        height: `100%`,
                                        id: `scZ9sYhw1`,
                                        layoutId: `scZ9sYhw1`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: Y(`TGC6WUJdU`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        /*#__PURE__*/ c(`div`, {
                          className: `framer-3h88in`,
                          children: /*#__PURE__*/ c(pe, {
                            children: /*#__PURE__*/ c(Ne, {
                              query: Z(),
                              children: (e, t, n) =>
                                /*#__PURE__*/ c(te, {
                                  children: e?.map(
                                    (
                                      {
                                        b4ajUUAPR: e,
                                        ELnXIKL_l: t,
                                        id: n,
                                        IegIZjdLj: r,
                                        j56HSkFKu: i,
                                        u7Knagwe9: a,
                                      },
                                      ee
                                    ) => (
                                      (i ??= ``),
                                      (a ??= ``),
                                      (t ??= ``),
                                      /*#__PURE__*/ c(
                                        d,
                                        {
                                          id: `bGtFScWHi-${n}`,
                                          children: /*#__PURE__*/ c(ie.Provider, {
                                            value: { ELnXIKL_l: t },
                                            children: /*#__PURE__*/ c(oe, {
                                              links: [
                                                {
                                                  href: {
                                                    pathVariables: { ELnXIKL_l: t },
                                                    webPageId: `nAtM7b5eV`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: { ELnXIKL_l: t },
                                                    webPageId: `nAtM7b5eV`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: { ELnXIKL_l: t },
                                                    webPageId: `nAtM7b5eV`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                              ],
                                              children: (t) =>
                                                /*#__PURE__*/ c(E, {
                                                  breakpoint: S,
                                                  overrides: {
                                                    DoJPwXQB7: { width: `355px` },
                                                    ihQYtGkpN: { width: `310px` },
                                                  },
                                                  children: /*#__PURE__*/ c(y, {
                                                    height: 420,
                                                    width: `400px`,
                                                    y: (g?.y || 0) + 325,
                                                    children: /*#__PURE__*/ c(w, {
                                                      className: `framer-1710tu-container`,
                                                      nodeId: `iXlfQcmVq`,
                                                      scopeId: `sbQ_pJmt8`,
                                                      children: /*#__PURE__*/ c(E, {
                                                        breakpoint: S,
                                                        overrides: {
                                                          DoJPwXQB7: { ZRBZxHryf: t[1] },
                                                          ihQYtGkpN: {
                                                            variant: Y(`MKKdJ6ZjG`),
                                                            ZRBZxHryf: t[2],
                                                          },
                                                        },
                                                        children: /*#__PURE__*/ c(F, {
                                                          cJCsxEMpH: i,
                                                          ErNLUiqGD: !1,
                                                          height: `100%`,
                                                          id: `iXlfQcmVq`,
                                                          iSk8hVwPZ: !1,
                                                          layoutId: `iXlfQcmVq`,
                                                          Mtfwdn2WM: a,
                                                          n8TivgXgK: i,
                                                          pPtCP7clJ: Me(e, M),
                                                          SsmWFdJ1S: `Event`,
                                                          style: { width: `100%` },
                                                          tOgta1ihp:
                                                            L(`v2`, p) ??
                                                            `Organizations face critical architectural decisions that can impact their operations for years to come such as: Is it better to maintain a single organization or implement multiple organizations? In this post, I explain the key advantages and disadvantages of both approaches and the scenarios where each model fits best.`,
                                                          upnh7XGg6: `OPxUkoY0r`,
                                                          variant: Y(`vWnV_9TBI`),
                                                          width: `100%`,
                                                          yDd7KaMSp: !0,
                                                          YDxaNYTCR: Ae(r),
                                                          YS7t8xTi1: i,
                                                          ZRBZxHryf: t[0],
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                            }),
                                          }),
                                        },
                                        n
                                      )
                                    )
                                  ),
                                }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    /*#__PURE__*/ l(u.div, {
                      className: `framer-1tc8dyh`,
                      "data-framer-name": `header`,
                      layout: j,
                      children: [
                        N() &&
                          /*#__PURE__*/ c(E, {
                            breakpoint: S,
                            overrides: { DoJPwXQB7: { y: (g?.y || 0) + 1255 } },
                            children: /*#__PURE__*/ c(y, {
                              height: 498,
                              width: g?.width || `100vw`,
                              y: (g?.y || 0) + 1285,
                              children: /*#__PURE__*/ c(w, {
                                className: `framer-pbjyt0-container hidden-31ewm7`,
                                nodeId: `ibxuGqrxr`,
                                scopeId: `sbQ_pJmt8`,
                                children: /*#__PURE__*/ c(E, {
                                  breakpoint: S,
                                  overrides: { DoJPwXQB7: { variant: Y(`G8rxyXoDj`) } },
                                  children: /*#__PURE__*/ c(k, {
                                    height: `100%`,
                                    id: `ibxuGqrxr`,
                                    layoutId: `ibxuGqrxr`,
                                    style: { width: `100%` },
                                    variant: Y(`zev4Tv3qQ`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        P() &&
                          /*#__PURE__*/ c(E, {
                            breakpoint: S,
                            overrides: {
                              ihQYtGkpN: {
                                height: 498,
                                width: g?.width || `100vw`,
                                y: (g?.y || 0) + 2085,
                              },
                            },
                            children: /*#__PURE__*/ c(y, {
                              children: /*#__PURE__*/ c(w, {
                                className: `framer-jdaljp-container hidden-1et6wng hidden-1rngzcx`,
                                nodeId: `mZEu9hzeY`,
                                scopeId: `sbQ_pJmt8`,
                                children: /*#__PURE__*/ c(k, {
                                  height: `100%`,
                                  id: `mZEu9hzeY`,
                                  layoutId: `mZEu9hzeY`,
                                  style: { width: `100%` },
                                  variant: Y(`vXscR1iJC`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                    /*#__PURE__*/ c(y, {
                      height: 64,
                      width: `100vw`,
                      y: 0,
                      children: /*#__PURE__*/ c(w, {
                        className: `framer-xu6c5s-container`,
                        layout: j,
                        layoutScroll: !0,
                        nodeId: `ote5U0N4I`,
                        scopeId: `sbQ_pJmt8`,
                        children: /*#__PURE__*/ c(E, {
                          breakpoint: S,
                          overrides: {
                            DoJPwXQB7: { variant: Y(`Gw5VboM5c`) },
                            ihQYtGkpN: { variant: Y(`Svy4sINhA`) },
                          },
                          children: /*#__PURE__*/ c(A, {
                            eVOFjxm0w: `var(--token-fcaa307f-078f-4ea1-af34-d51bb82ca05a, rgba(255, 255, 255, 0))`,
                            height: `100%`,
                            id: `ote5U0N4I`,
                            jQcddTFoz: !0,
                            layoutId: `ote5U0N4I`,
                            style: { width: `100%` },
                            variant: Y(`LbFcBhD3w`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (Le = [
        `.framer-I5EaH.framer-155003i, .framer-I5EaH .framer-155003i { display: block; }`,
        `.framer-I5EaH.framer-1et6wng { align-content: center; align-items: center; background-color: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 120px 0px 0px 0px; position: relative; width: 1440px; }`,
        `.framer-I5EaH .framer-4sngf3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1240px; }`,
        `.framer-I5EaH .framer-1d97zlr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-I5EaH .framer-1ibd71d { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 673px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-I5EaH .framer-biar0b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 104px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 782px; }`,
        `.framer-I5EaH .framer-1wbaoh9 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 764px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-I5EaH .framer-a76sej-container { cursor: text; flex: none; height: 43px; position: relative; width: 406px; }`,
        `.framer-I5EaH .framer-3h88in { display: grid; flex: none; gap: 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(200px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-I5EaH .framer-1710tu-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-I5EaH .framer-1tc8dyh { align-content: center; align-items: center; background-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-I5EaH .framer-pbjyt0-container, .framer-I5EaH .framer-jdaljp-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-I5EaH .framer-xu6c5s-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 4; }`,
        ...M,
        ...ve,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-I5EaH.framer-1et6wng { gap: 70px; width: 810px; } .framer-I5EaH .framer-4sngf3 { width: 730px; } .framer-I5EaH .framer-biar0b { width: 100%; } .framer-I5EaH .framer-3h88in { grid-template-columns: repeat(2, minmax(200px, 1fr)); width: 730px; }}`,
        `@media (max-width: 809.98px) { .framer-I5EaH.framer-1et6wng { gap: 80px; width: 390px; } .framer-I5EaH .framer-4sngf3 { width: 310px; } .framer-I5EaH .framer-1d97zlr { order: 0; } .framer-I5EaH .framer-1ibd71d, .framer-I5EaH .framer-biar0b, .framer-I5EaH .framer-1wbaoh9, .framer-I5EaH .framer-a76sej-container { width: 100%; } .framer-I5EaH .framer-3h88in { gap: 0px 20px; grid-template-columns: repeat(1, minmax(200px, 1fr)); order: 1; } .framer-I5EaH .framer-jdaljp-container { order: 1; }}`,
      ]),
      ($ = g(Ie, Le, `framer-I5EaH`)),
      ($.displayName = `Events 2`),
      ($.defaultProps = { height: 2145, width: 1440 }),
      b(
        $,
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
            ],
          },
          ...B,
          ...ke,
          ...V,
          ...H,
          ...p(N),
          ...p(ye),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = t.priority,
            i = le.get(Z(), n, r);
          return S(
            [
              () => i.preload(),
              () => m(I, {}, t),
              () => m(k, {}, t),
              () => m(A, {}, t),
              async () => {
                let e = (await me(() => i.readMaybeAsync(), t)) ?? [];
                return S(
                  e.flatMap((e) => () => m(F, {}, t)),
                  t
                );
              },
            ],
            t
          );
        },
      }),
      (Re = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramersbQ_pJmt8`,
            slots: [],
            annotations: {
              framerDisplayContentsDiv: `false`,
              framerColorSyntax: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerIntrinsicWidth: `1440`,
              framerResponsiveScreen: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"DoJPwXQB7":{"layout":["fixed","auto"]},"ihQYtGkpN":{"layout":["fixed","auto"]}}}`,
              framerIntrinsicHeight: `2145`,
              framerImmutableVariables: `true`,
              framerAutoSizeImages: `true`,
              framerScrollSections: `false`,
            },
          },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
ze();
export { Re as __FramerMetadata__, $ as default, G as queryParamNames };
//# sourceMappingURL=oQM6kVBpYdCRs51R59qy0mw086vYH9qM9ZNJUNxymlY.CVXH-l_K.mjs.map
