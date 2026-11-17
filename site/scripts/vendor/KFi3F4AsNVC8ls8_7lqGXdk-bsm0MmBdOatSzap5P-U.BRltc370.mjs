import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  D as t,
  F as n,
  O as r,
  P as i,
  R as a,
  S as o,
  c as s,
  l as ee,
  m as c,
  s as l,
  u,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { S as te, Yi as d, t as f, v as ne } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import {
  C as re,
  Ct as ie,
  D as p,
  E as ae,
  Et as oe,
  G as m,
  I as h,
  P as g,
  Pt as _,
  Q as v,
  St as y,
  U as b,
  a as x,
  at as se,
  bt as ce,
  gt as le,
  j as ue,
  jt as de,
  kt as S,
  lt as C,
  m as w,
  n as fe,
  o as T,
  ut as pe,
  v as E,
  w as D,
  wt as me,
  yt as he,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { m as O, n as k, p as A, t as j } from "./shared-lib.CHy_rbfQ.mjs?v=20261116-migration-v2";
import { i as M, n as N, r as P, t as ge } from "./aqwnXEE4n.hmCSLb_E.mjs?v=20261116-migration-v2";
import { i as F, n as I, r as L, t as _e } from "./TTQCH8Fpp.Da_B3N68.mjs?v=20261116-migration-v2";
import { n as ve, t as R } from "./UHj9H7ULF.BAaetTGP.mjs?v=20261116-migration-v2";
import { n as ye, t as z } from "./yEZq_gVss.DlMkx0Rd.mjs?v=20261116-migration-v2";
import { i as be, n as xe } from "./kVs8tQwHo.oPF1Jh2G.mjs?v=20261116-migration-v2";
import { n as Se, r as Ce } from "./q_f1JcZhY.D_L2Ptj-.mjs?v=20261116-migration-v2";
function B(e, t) {
  for (; t; ) {
    let n = V[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function we(e) {
  let t = [];
  for (; e; ) {
    let n = V[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function Te(e) {
  let t = we(e);
  if (t) throw t;
}
var V;
function H() {
  return (H = e(() => {
    (v(), (V = { AYmst8Nt3: new E(() => import("./q_f1JcZhY-0.B6H3KtqY.mjs?v=20261116-migration-v2")) }));
  }))();
}
var U, Ee, W, G, K, q, J, De, Oe, ke, Y, Ae, X, je, Me, Z, Ne, Q, Pe, Fe, Ie, Le, $, Re;
function ze() {
  return (ze = e(() => {
    (s(),
      v(),
      f(),
      r(),
      ve(),
      O(),
      k(),
      ye(),
      be(),
      M(),
      F(),
      H(),
      Se(),
      (U = b(j)),
      (Ee = b(z)),
      (W = b(R)),
      (G = b(A)),
      (K = {
        f7aaSDq8S: `(min-width: 1440px)`,
        H_GtMNJzB: `(min-width: 810px) and (max-width: 1439.98px)`,
        WZ1KlnDkb: `(max-width: 809.98px)`,
      }),
      (q = () => typeof document < `u`),
      (J = []),
      (De = `framer-eYLu0`),
      (Oe = {
        f7aaSDq8S: `framer-v-1c9p27w`,
        H_GtMNJzB: `framer-v-ye67st`,
        WZ1KlnDkb: `framer-v-122yre0`,
      }),
      (ke = (e, t, n) => (e && t ? `position` : n)),
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
        from: { alias: `QFkKY0ECQ`, data: xe, type: `Collection` },
        limit: { type: `LiteralValue`, value: 5001 },
        offset: { type: `LiteralValue`, value: 0 },
        orderBy: [
          { collection: `QFkKY0ECQ`, direction: `desc`, name: `TPmpHSD3T`, type: `Identifier` },
        ],
        select: [
          { collection: `QFkKY0ECQ`, name: `bxlkRlncE`, type: `Identifier` },
          { collection: `QFkKY0ECQ`, name: `WT9WaYw6k`, type: `Identifier` },
          { collection: `QFkKY0ECQ`, name: `aRW_Hhr8p`, type: `Identifier` },
          { collection: `QFkKY0ECQ`, name: `TPmpHSD3T`, type: `Identifier` },
          { collection: `QFkKY0ECQ`, name: `AwqecsKq6`, type: `Identifier` },
          { collection: `QFkKY0ECQ`, name: `meFM0cI9K`, type: `Identifier` },
          { collection: `QFkKY0ECQ`, name: `id`, type: `Identifier` },
        ],
      })),
      (Ne = ({ query: e, pageSize: t, children: n }) => n(S(e))),
      (Q = { Desktop: `f7aaSDq8S`, Phone: `WZ1KlnDkb`, Tablet: `H_GtMNJzB` }),
      (Pe = ({ value: e }) =>
        y()
          ? null
          : /*#__PURE__*/ l(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Fe = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Q[r.variant] ?? r.variant ?? `f7aaSDq8S`,
      })),
      (Ie = /*#__PURE__*/ c(function (e, r) {
        let s = o(null),
          c = r ?? s;
        t();
        let { activeLocale: f, contentLocale: m, setLocale: h } = me(),
          _ = le(),
          { style: v, className: y, layoutId: b, variant: se, ...ue } = Fe(e),
          S = n(() => Ce({}, m), [m]);
        oe(S);
        let [C, pe] = ce(se, K, !1),
          E = g(De, ge, _e),
          O = i(w)?.isLayoutTemplate,
          k = !!i(te)?.transition?.layout,
          M = ke(O, k),
          N = () => !q() || C !== `H_GtMNJzB`;
        Te(f);
        let P = ie();
        de();
        let F = () => !q() || ![`H_GtMNJzB`, `WZ1KlnDkb`].includes(C),
          I = () => !q() || C === `H_GtMNJzB`,
          L = () => !q() || C === `WZ1KlnDkb`;
        return (
          he({}),
          /*#__PURE__*/ l(w.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: Q,
              primaryVariantId: `f7aaSDq8S`,
              variantClassNames: Oe,
            },
            children: /*#__PURE__*/ u(ne, {
              id: b ?? `q_f1JcZhY`,
              children: [
                /*#__PURE__*/ l(Pe, {
                  value: `html body { background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ u(d.div, {
                  ...ue,
                  className: g(E, `framer-1c9p27w`, y),
                  ref: c,
                  style: { ...v },
                  children: [
                    /*#__PURE__*/ l(x, {
                      height: 64,
                      width: `100vw`,
                      y: 0,
                      children: /*#__PURE__*/ l(T, {
                        className: `framer-8ip5tn-container`,
                        layout: M,
                        layoutScroll: !0,
                        nodeId: `VmG4yatlp`,
                        scopeId: `q_f1JcZhY`,
                        children: /*#__PURE__*/ l(D, {
                          breakpoint: C,
                          overrides: {
                            H_GtMNJzB: { variant: Y(`Gw5VboM5c`) },
                            WZ1KlnDkb: { variant: Y(`Svy4sINhA`) },
                          },
                          children: /*#__PURE__*/ l(j, {
                            eVOFjxm0w: `var(--token-fcaa307f-078f-4ea1-af34-d51bb82ca05a, rgba(255, 255, 255, 0))`,
                            height: `100%`,
                            id: `VmG4yatlp`,
                            jQcddTFoz: !0,
                            layoutId: `VmG4yatlp`,
                            style: { width: `100%` },
                            variant: Y(`LbFcBhD3w`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    N() &&
                      /*#__PURE__*/ l(d.div, {
                        className: `framer-14phl6q hidden-ye67st`,
                        layout: M,
                        children: /*#__PURE__*/ l(`div`, { className: `framer-nstf38` }),
                      }),
                    /*#__PURE__*/ u(d.div, {
                      className: `framer-1usttt4`,
                      layout: M,
                      children: [
                        /*#__PURE__*/ u(`div`, {
                          className: `framer-r0y9ad`,
                          children: [
                            /*#__PURE__*/ l(D, {
                              breakpoint: C,
                              overrides: { WZ1KlnDkb: { verticalAlignment: `center` } },
                              children: /*#__PURE__*/ l(p, {
                                __fromCanvasComponent: !0,
                                children:
                                  B(`v0`, m) ??
                                  /*#__PURE__*/ l(a, {
                                    children: /*#__PURE__*/ l(`h1`, {
                                      className: `framer-styles-preset-29f6n5`,
                                      "data-styles-preset": `aqwnXEE4n`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                      },
                                      children: `博客`,
                                    }),
                                  }),
                                className: `framer-1ozuq2s`,
                                "data-framer-name": `Heading`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            /*#__PURE__*/ u(`div`, {
                              className: `framer-1cecn0l`,
                              children: [
                                /*#__PURE__*/ l(D, {
                                  breakpoint: C,
                                  overrides: {
                                    WZ1KlnDkb: {
                                      children:
                                        B(`v2`, m) ??
                                        /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(`p`, {
                                            className: `framer-styles-preset-wd9b9c`,
                                            "data-styles-preset": `TTQCH8Fpp`,
                                            dir: `auto`,
                                            children: `揭示数字变革的模式、发展及可行策略`,
                                          }),
                                        }),
                                    },
                                  },
                                  children: /*#__PURE__*/ l(p, {
                                    __fromCanvasComponent: !0,
                                    children:
                                      B(`v1`, m) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(`p`, {
                                          className: `framer-styles-preset-wd9b9c`,
                                          "data-styles-preset": `TTQCH8Fpp`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `center` },
                                          children: `揭示数字变革的模式、发展及可行策略`,
                                        }),
                                      }),
                                    className: `framer-146elya`,
                                    "data-framer-name": `Paragraph`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                /*#__PURE__*/ l(D, {
                                  breakpoint: C,
                                  overrides: {
                                    H_GtMNJzB: { y: (_?.y || 0) + 235.5 },
                                    WZ1KlnDkb: { width: `310px`, y: (_?.y || 0) + 327 },
                                  },
                                  children: /*#__PURE__*/ l(x, {
                                    height: 43,
                                    width: `406px`,
                                    y: (_?.y || 0) + 298.5,
                                    children: /*#__PURE__*/ l(T, {
                                      className: `framer-1p41jut-container`,
                                      nodeId: `LmyOE2DvS`,
                                      scopeId: `q_f1JcZhY`,
                                      children: /*#__PURE__*/ l(z, {
                                        height: `100%`,
                                        id: `LmyOE2DvS`,
                                        layoutId: `LmyOE2DvS`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: Y(`eTNbzre9v`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        /*#__PURE__*/ l(`div`, {
                          className: `framer-1hk8fwv`,
                          children: /*#__PURE__*/ l(fe, {
                            children: /*#__PURE__*/ l(Ne, {
                              query: Z(),
                              children: (e, t, n) =>
                                /*#__PURE__*/ l(ee, {
                                  children: e?.map(
                                    (
                                      {
                                        aRW_Hhr8p: e,
                                        AwqecsKq6: t,
                                        bxlkRlncE: n,
                                        id: r,
                                        meFM0cI9K: i,
                                        TPmpHSD3T: a,
                                        WT9WaYw6k: o,
                                      },
                                      s
                                    ) => (
                                      (o ??= ``),
                                      (e ??= ``),
                                      (t ??= ``),
                                      (i ??= ``),
                                      /*#__PURE__*/ l(
                                        ne,
                                        {
                                          id: `QFkKY0ECQ-${r}`,
                                          children: /*#__PURE__*/ l(re.Provider, {
                                            value: { meFM0cI9K: i },
                                            children: /*#__PURE__*/ l(ae, {
                                              links: [
                                                {
                                                  href: {
                                                    pathVariables: { meFM0cI9K: i },
                                                    webPageId: `RltDUtwQC`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: { meFM0cI9K: i },
                                                    webPageId: `RltDUtwQC`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: { meFM0cI9K: i },
                                                    webPageId: `RltDUtwQC`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                              ],
                                              children: (r) =>
                                                /*#__PURE__*/ l(D, {
                                                  breakpoint: C,
                                                  overrides: {
                                                    H_GtMNJzB: {
                                                      width: `730px`,
                                                      y: (_?.y || 0) + 259,
                                                    },
                                                    WZ1KlnDkb: {
                                                      width: `310px`,
                                                      y: (_?.y || 0) + 395,
                                                    },
                                                  },
                                                  children: /*#__PURE__*/ l(x, {
                                                    height: 420,
                                                    width: `1240px`,
                                                    y: (_?.y || 0) + 322,
                                                    children: /*#__PURE__*/ l(T, {
                                                      className: `framer-1u5nabp-container`,
                                                      nodeId: `zgFDquYMM`,
                                                      scopeId: `q_f1JcZhY`,
                                                      children: /*#__PURE__*/ l(D, {
                                                        breakpoint: C,
                                                        overrides: {
                                                          H_GtMNJzB: { ZRBZxHryf: r[1] },
                                                          WZ1KlnDkb: {
                                                            variant: Y(`MKKdJ6ZjG`),
                                                            ZRBZxHryf: r[2],
                                                          },
                                                        },
                                                        children: /*#__PURE__*/ l(R, {
                                                          cJCsxEMpH: o,
                                                          ErNLUiqGD: !1,
                                                          height: `100%`,
                                                          id: `zgFDquYMM`,
                                                          iSk8hVwPZ: !1,
                                                          layoutId: `zgFDquYMM`,
                                                          Mtfwdn2WM: e,
                                                          n8TivgXgK: o,
                                                          pPtCP7clJ: Me(a, P),
                                                          SsmWFdJ1S: `Code`,
                                                          style: { width: `100%` },
                                                          tOgta1ihp: t,
                                                          upnh7XGg6: `DdvV9xxic`,
                                                          variant: Y(`zuGkWDMc7`),
                                                          width: `100%`,
                                                          yDd7KaMSp: !0,
                                                          YDxaNYTCR: Ae(n),
                                                          YS7t8xTi1: o,
                                                          ZRBZxHryf: r[0],
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                            }),
                                          }),
                                        },
                                        r
                                      )
                                    )
                                  ),
                                }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    F() &&
                      /*#__PURE__*/ l(d.div, {
                        className: `framer-66z1zv hidden-ye67st hidden-122yre0`,
                        "data-framer-name": `header`,
                        layout: M,
                        children: /*#__PURE__*/ l(x, {
                          height: 498,
                          width: _?.width || `100vw`,
                          y: (_?.y || 0) + 8712,
                          children: /*#__PURE__*/ l(T, {
                            className: `framer-wp12gy-container`,
                            nodeId: `AUX_YIMsO`,
                            scopeId: `q_f1JcZhY`,
                            children: /*#__PURE__*/ l(A, {
                              height: `100%`,
                              id: `AUX_YIMsO`,
                              layoutId: `AUX_YIMsO`,
                              style: { width: `100%` },
                              variant: Y(`zev4Tv3qQ`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    I() &&
                      /*#__PURE__*/ l(d.div, {
                        className: `framer-u2fks7 hidden-1c9p27w hidden-122yre0`,
                        "data-framer-name": `header`,
                        layout: M,
                        children: /*#__PURE__*/ l(D, {
                          breakpoint: C,
                          overrides: {
                            H_GtMNJzB: {
                              width: `max(${_?.width || `100vw`}, 1px)`,
                              y: (_?.y || 0) + 8629,
                            },
                          },
                          children: /*#__PURE__*/ l(x, {
                            height: 498,
                            children: /*#__PURE__*/ l(T, {
                              className: `framer-1vonv7g-container`,
                              nodeId: `v_44H5h8N`,
                              scopeId: `q_f1JcZhY`,
                              children: /*#__PURE__*/ l(A, {
                                height: `100%`,
                                id: `v_44H5h8N`,
                                layoutId: `v_44H5h8N`,
                                style: { width: `100%` },
                                variant: Y(`G8rxyXoDj`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    I() &&
                      /*#__PURE__*/ l(d.div, {
                        className: `framer-iocpvz hidden-1c9p27w hidden-122yre0`,
                        "data-framer-name": `fmi`,
                        layout: M,
                      }),
                    L() &&
                      /*#__PURE__*/ l(D, {
                        breakpoint: C,
                        overrides: {
                          WZ1KlnDkb: {
                            height: 498,
                            width: _?.width || `100vw`,
                            y: (_?.y || 0) + 8515,
                          },
                        },
                        children: /*#__PURE__*/ l(x, {
                          children: /*#__PURE__*/ l(T, {
                            className: `framer-urxmol-container hidden-1c9p27w hidden-ye67st`,
                            layout: M,
                            nodeId: `vHd9_geO8`,
                            scopeId: `q_f1JcZhY`,
                            children: /*#__PURE__*/ l(A, {
                              height: `100%`,
                              id: `vHd9_geO8`,
                              layoutId: `vHd9_geO8`,
                              style: { width: `100%` },
                              variant: Y(`vXscR1iJC`),
                              width: `100%`,
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
      (Le = [
        `.framer-eYLu0.framer-ruqrxg, .framer-eYLu0 .framer-ruqrxg { display: block; }`,
        `.framer-eYLu0.framer-1c9p27w { align-content: center; align-items: center; background-color: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-eYLu0 .framer-8ip5tn-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 4; }`,
        `.framer-eYLu0 .framer-14phl6q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: 67px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1288px; }`,
        `.framer-eYLu0 .framer-nstf38 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 52px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 601px; }`,
        `.framer-eYLu0 .framer-1usttt4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1240px; }`,
        `.framer-eYLu0 .framer-r0y9ad { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-eYLu0 .framer-1ozuq2s { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 673px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-eYLu0 .framer-1cecn0l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 104px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 782px; }`,
        `.framer-eYLu0 .framer-146elya { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 764px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-eYLu0 .framer-1p41jut-container { cursor: text; flex: none; height: 43px; position: relative; width: 406px; }`,
        `.framer-eYLu0 .framer-1hk8fwv { display: grid; flex: none; gap: 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(200px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-eYLu0 .framer-1u5nabp-container { align-self: start; flex: none; grid-column: span 3; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-eYLu0 .framer-66z1zv { align-content: center; align-items: center; background-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-eYLu0 .framer-wp12gy-container, .framer-eYLu0 .framer-urxmol-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-eYLu0 .framer-u2fks7 { align-content: center; align-items: center; background-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-eYLu0 .framer-1vonv7g-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-eYLu0 .framer-iocpvz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 45px; overflow: hidden; padding: 0px 10px 0px 10px; position: relative; width: 770px; }`,
        ...N,
        ...I,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-eYLu0.framer-1c9p27w { gap: 30px; width: 810px; } .framer-eYLu0 .framer-8ip5tn-container, .framer-eYLu0 .framer-1vonv7g-container { order: 0; } .framer-eYLu0 .framer-1usttt4 { order: 2; width: 730px; } .framer-eYLu0 .framer-r0y9ad { gap: 10px; padding: 30px 0px 0px 0px; } .framer-eYLu0 .framer-1cecn0l, .framer-eYLu0 .framer-146elya { width: 100%; } .framer-eYLu0 .framer-1hk8fwv { grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(200px, 1fr)); width: 730px; } .framer-eYLu0 .framer-1u5nabp-container { grid-column: span 2; } .framer-eYLu0 .framer-u2fks7 { order: 4; } .framer-eYLu0 .framer-iocpvz { order: 1; }}`,
        `@media (max-width: 809.98px) { .framer-eYLu0.framer-1c9p27w, .framer-eYLu0 .framer-14phl6q { width: 390px; } .framer-eYLu0 .framer-nstf38 { height: min-content; min-height: 52px; width: 100%; } .framer-eYLu0 .framer-1usttt4 { width: 310px; } .framer-eYLu0 .framer-r0y9ad { order: 0; } .framer-eYLu0 .framer-1ozuq2s { height: 44px; width: 100%; } .framer-eYLu0 .framer-1cecn0l { height: min-content; width: 100%; } .framer-eYLu0 .framer-146elya, .framer-eYLu0 .framer-1p41jut-container { width: 100%; } .framer-eYLu0 .framer-1hk8fwv { gap: 5px 20px; grid-template-columns: repeat(1, minmax(200px, 1fr)); order: 2; } .framer-eYLu0 .framer-1u5nabp-container { grid-column: span 1; }}`,
      ]),
      ($ = _(Ie, Le, `framer-eYLu0`)),
      ($.displayName = `Product / Supos`),
      ($.defaultProps = { height: 5250, width: 1440 }),
      ue(
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
          ...U,
          ...Ee,
          ...W,
          ...G,
          ...m(P),
          ...m(L),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = t.priority,
            i = se.get(Z(), n, r);
          return C(
            [
              () => i.preload(),
              () => h(j, {}, t),
              () => h(z, {}, t),
              () => h(A, {}, t),
              async () => {
                let e = (await pe(() => i.readMaybeAsync(), t)) ?? [];
                return C(
                  e.flatMap((e) => () => h(R, {}, t)),
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
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `Framerq_f1JcZhY`,
            slots: [],
            annotations: {
              framerScrollSections: `false`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"H_GtMNJzB":{"layout":["fixed","auto"]},"WZ1KlnDkb":{"layout":["fixed","auto"]}}}`,
              framerImmutableVariables: `true`,
              framerColorSyntax: `true`,
              framerAutoSizeImages: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerResponsiveScreen: `true`,
              framerIntrinsicHeight: `5250`,
              framerDisplayContentsDiv: `false`,
              framerComponentViewportWidth: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerContractVersion: `1`,
              framerIntrinsicWidth: `1440`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
ze();
export { Re as __FramerMetadata__, $ as default, J as queryParamNames };
//# sourceMappingURL=KFi3F4AsNVC8ls8_7lqGXdk-bsm0MmBdOatSzap5P-U.BRltc370.mjs.map
