import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  D as t,
  F as n,
  O as r,
  P as ee,
  R as i,
  S as te,
  c as a,
  m as o,
  s,
  u as c,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { S as ne, Yi as l, t as u, v as re } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import {
  D as d,
  Et as ie,
  G as f,
  I as p,
  P as m,
  Pt as h,
  Q as g,
  St as _,
  U as v,
  a as y,
  bt as ae,
  gt as oe,
  j as se,
  lt as b,
  m as x,
  o as S,
  v as C,
  w,
  wt as ce,
  yt as le,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { m as T, n as ue, p as E, t as D } from "./shared-lib.CHy_rbfQ.mjs?v=20261116-migration-v2";
import { i as O, n as k, r as A, t as de } from "./aqwnXEE4n.hmCSLb_E.mjs?v=20261116-migration-v2";
import { i as j, n as M, r as N, t as fe } from "./TTQCH8Fpp.Da_B3N68.mjs?v=20261116-migration-v2";
import { n as P, t as F } from "./UHj9H7ULF.BAaetTGP.mjs?v=20261116-migration-v2";
import { n as I, r as pe } from "./kUMlJF28H.DCXxcevT.mjs?v=20261116-migration-v2";
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
function me(e) {
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
function he(e) {
  let t = me(e);
  if (t) throw t;
}
var R;
function z() {
  return (z = e(() => {
    (g(), (R = { AYmst8Nt3: new C(() => import("./kUMlJF28H-0.DIVS6TE5.mjs?v=20261116-migration-v2")) }));
  }))();
}
var B, V, H, U, W, G, K, q, J, Y, X, Z, Q, ge, _e, ve, $, ye;
function be() {
  return (be = e(() => {
    (a(),
      g(),
      u(),
      r(),
      P(),
      T(),
      ue(),
      O(),
      j(),
      z(),
      I(),
      (B = v(F)),
      (V = v(E)),
      (H = v(D)),
      (U = {
        BqPdDHzpt: `(min-width: 810px) and (max-width: 1439.98px)`,
        UTGxFTie6: `(min-width: 1440px)`,
        ziF2Sin1i: `(max-width: 809.98px)`,
      }),
      (W = () => typeof document < `u`),
      (G = [`category`]),
      (K = `framer-Sfqtm`),
      (q = {
        BqPdDHzpt: `framer-v-1ow3da4`,
        UTGxFTie6: `framer-v-6kr68t`,
        ziF2Sin1i: `framer-v-r09no5`,
      }),
      (J = (e, t, n) => (e && t ? `position` : n)),
      (Y = (e, t) => {
        if (e && typeof e == `object`) return { ...e, alt: t };
      }),
      (X = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Z = { Desktop: `UTGxFTie6`, Phone: `ziF2Sin1i`, Tablet: `BqPdDHzpt` }),
      (Q = ({ value: e }) =>
        _()
          ? null
          : /*#__PURE__*/ s(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (ge = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Z[r.variant] ?? r.variant ?? `UTGxFTie6`,
      })),
      (_e = /*#__PURE__*/ o(function (e, r) {
        let a = te(null),
          o = r ?? a;
        t();
        let { activeLocale: u, contentLocale: f, setLocale: p } = ce(),
          h = oe(),
          { style: g, className: _, layoutId: v, variant: se, ...b } = ge(e),
          C = n(() => pe({}, f), [f]);
        ie(C);
        let [T, ue] = ae(se, U, !1),
          O = m(K, de, fe),
          k = ee(x)?.isLayoutTemplate,
          A = !!ee(ne)?.transition?.layout,
          j = J(k, A);
        he(u);
        let M = () => !(W() && ![`ziF2Sin1i`, `BqPdDHzpt`].includes(T)),
          N = () => !W() || ![`ziF2Sin1i`, `BqPdDHzpt`].includes(T),
          P = () => !W() || T !== `ziF2Sin1i`,
          I = () => !W() || T === `ziF2Sin1i`;
        return (
          le({}),
          /*#__PURE__*/ s(x.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: Z,
              primaryVariantId: `UTGxFTie6`,
              variantClassNames: q,
            },
            children: /*#__PURE__*/ c(re, {
              id: v ?? `kUMlJF28H`,
              children: [
                /*#__PURE__*/ s(Q, {
                  value: `html body { background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ c(l.div, {
                  ...b,
                  className: m(O, `framer-6kr68t`, _),
                  ref: o,
                  style: { ...g },
                  children: [
                    /*#__PURE__*/ c(l.div, {
                      className: `framer-in5hpv`,
                      layout: j,
                      children: [
                        /*#__PURE__*/ c(`div`, {
                          className: `framer-19ogvjh`,
                          children: [
                            /*#__PURE__*/ s(d, {
                              __fromCanvasComponent: !0,
                              children:
                                L(`v0`, f) ??
                                /*#__PURE__*/ s(i, {
                                  children: /*#__PURE__*/ s(`h1`, {
                                    className: `framer-styles-preset-29f6n5`,
                                    "data-styles-preset": `aqwnXEE4n`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                    },
                                    children: `下载专区`,
                                  }),
                                }),
                              className: `framer-19prcm1`,
                              "data-framer-name": `Heading`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ s(`div`, {
                              className: `framer-zic9pn`,
                              children: /*#__PURE__*/ s(d, {
                                __fromCanvasComponent: !0,
                                children:
                                  L(`v1`, f) ??
                                  /*#__PURE__*/ s(i, {
                                    children: /*#__PURE__*/ s(`p`, {
                                      className: `framer-styles-preset-wd9b9c`,
                                      "data-styles-preset": `TTQCH8Fpp`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `center` },
                                      children: `探索 Tier0 白皮书、宣传册和产品指南。`,
                                    }),
                                  }),
                                className: `framer-h00fi5`,
                                "data-framer-name": `Paragraph`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        M() &&
                          /*#__PURE__*/ c(`div`, {
                            className: `framer-hkr31x hidden-6kr68t`,
                            children: [
                              /*#__PURE__*/ c(`div`, {
                                className: `framer-zyl5sz`,
                                children: [
                                  /*#__PURE__*/ s(w, {
                                    breakpoint: T,
                                    overrides: {
                                      BqPdDHzpt: { width: void 0, y: (h?.y || 0) + 366 },
                                      ziF2Sin1i: { width: `310px`, y: (h?.y || 0) + 366 },
                                    },
                                    children: /*#__PURE__*/ s(y, {
                                      height: 420,
                                      width: `400px`,
                                      children: /*#__PURE__*/ s(S, {
                                        className: `framer-1by6sna-container`,
                                        nodeId: `H0eOG0TDb`,
                                        scopeId: `kUMlJF28H`,
                                        children: /*#__PURE__*/ s(w, {
                                          breakpoint: T,
                                          overrides: {
                                            BqPdDHzpt: {
                                              q_kabn3ie: `/assets/documents/edrRg6lCMNIvlUiiLl2gVV90A.pdf`,
                                            },
                                            ziF2Sin1i: { variant: X(`MKKdJ6ZjG`) },
                                          },
                                          children: /*#__PURE__*/ s(F, {
                                            ErNLUiqGD: !0,
                                            height: `100%`,
                                            id: `H0eOG0TDb`,
                                            iSk8hVwPZ: !0,
                                            layoutId: `H0eOG0TDb`,
                                            Mtfwdn2WM: L(`v3`, f) ?? `白皮书`,
                                            n8TivgXgK: L(`v2`, f) ?? `UNS在SMT产线中的应用实践`,
                                            pPtCP7clJ: L(`v4`, f) ?? `内容`,
                                            q_kabn3ie: `/assets/documents/8PNP4hM8xip8y1w0qdkDOXwsWGc.pdf`,
                                            SsmWFdJ1S: `Book`,
                                            style: { width: `100%` },
                                            tOgta1ihp:
                                              L(`v5`, f) ??
                                              `企业面临着可能影响其未来数年运营的关键架构决策，例如：是维护单一组织更好，还是实施多组织更好？在这篇博文中，我将解释这两种方法的关键优缺点，以及每种模型最适合的场景。`,
                                            upnh7XGg6: `OPxUkoY0r`,
                                            variant: X(`vWnV_9TBI`),
                                            width: `100%`,
                                            yDd7KaMSp: !1,
                                            YDxaNYTCR: Y(
                                              {
                                                pixelHeight: 3080,
                                                pixelWidth: 4884,
                                                src: `/assets/images/4dvYU2E08ye3NnVXj7FcpuUReY.png`,
                                                srcSet: `/assets/images/4dvYU2E08ye3NnVXj7FcpuUReY.png 512w,/assets/images/4dvYU2E08ye3NnVXj7FcpuUReY.png 1024w,/assets/images/4dvYU2E08ye3NnVXj7FcpuUReY.png 2048w,/assets/images/4dvYU2E08ye3NnVXj7FcpuUReY.png 4096w,/assets/images/4dvYU2E08ye3NnVXj7FcpuUReY.png 4884w`,
                                              },
                                              ``
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ s(w, {
                                    breakpoint: T,
                                    overrides: {
                                      BqPdDHzpt: { width: void 0, y: (h?.y || 0) + 366 },
                                      ziF2Sin1i: { width: `310px`, y: (h?.y || 0) + 796 },
                                    },
                                    children: /*#__PURE__*/ s(y, {
                                      height: 420,
                                      width: `400px`,
                                      children: /*#__PURE__*/ s(S, {
                                        className: `framer-1brknd1-container`,
                                        nodeId: `aTz3DgprH`,
                                        scopeId: `kUMlJF28H`,
                                        children: /*#__PURE__*/ s(w, {
                                          breakpoint: T,
                                          overrides: {
                                            ziF2Sin1i: {
                                              variant: X(`MKKdJ6ZjG`),
                                              YDxaNYTCR: Y(
                                                {
                                                  pixelHeight: 770,
                                                  pixelWidth: 1221,
                                                  positionX: `14.3%`,
                                                  positionY: `46%`,
                                                  src: `/assets/images/dW0mc6hwcXWl7zqStW43UEVeAA.png`,
                                                  srcSet: `/assets/images/dW0mc6hwcXWl7zqStW43UEVeAA.png 512w,/assets/images/dW0mc6hwcXWl7zqStW43UEVeAA.png 1024w,/assets/images/dW0mc6hwcXWl7zqStW43UEVeAA.png 1221w`,
                                                },
                                                ``
                                              ),
                                            },
                                          },
                                          children: /*#__PURE__*/ s(F, {
                                            ErNLUiqGD: !0,
                                            height: `100%`,
                                            id: `aTz3DgprH`,
                                            iSk8hVwPZ: !0,
                                            layoutId: `aTz3DgprH`,
                                            Mtfwdn2WM: L(`v7`, f) ?? `宣传册`,
                                            n8TivgXgK: L(`v6`, f) ?? `Tier0-Edge 宣传册2025`,
                                            pPtCP7clJ: L(`v4`, f) ?? `内容`,
                                            q_kabn3ie: `/assets/documents/fybWQe72lMNISQTUE1exn7fW0.pdf`,
                                            SsmWFdJ1S: `Book`,
                                            style: { width: `100%` },
                                            tOgta1ihp:
                                              L(`v5`, f) ??
                                              `企业面临着可能影响其未来数年运营的关键架构决策，例如：是维护单一组织更好，还是实施多组织更好？在这篇博文中，我将解释这两种方法的关键优缺点，以及每种模型最适合的场景。`,
                                            upnh7XGg6: `OPxUkoY0r`,
                                            variant: X(`vWnV_9TBI`),
                                            width: `100%`,
                                            yDd7KaMSp: !1,
                                            YDxaNYTCR: Y(
                                              {
                                                pixelHeight: 770,
                                                pixelWidth: 1221,
                                                positionX: `49%`,
                                                positionY: `41.5%`,
                                                src: `/assets/images/dW0mc6hwcXWl7zqStW43UEVeAA.png`,
                                                srcSet: `/assets/images/dW0mc6hwcXWl7zqStW43UEVeAA.png 512w,/assets/images/dW0mc6hwcXWl7zqStW43UEVeAA.png 1024w,/assets/images/dW0mc6hwcXWl7zqStW43UEVeAA.png 1221w`,
                                              },
                                              ``
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ c(`div`, {
                                className: `framer-199y9u1`,
                                children: [
                                  /*#__PURE__*/ s(w, {
                                    breakpoint: T,
                                    overrides: {
                                      BqPdDHzpt: { width: void 0, y: (h?.y || 0) + 1226 },
                                      ziF2Sin1i: { width: `310px`, y: (h?.y || 0) + 1226 },
                                    },
                                    children: /*#__PURE__*/ s(y, {
                                      height: 420,
                                      width: `400px`,
                                      children: /*#__PURE__*/ s(S, {
                                        className: `framer-6nenj5-container`,
                                        nodeId: `uHdQAXZmI`,
                                        scopeId: `kUMlJF28H`,
                                        children: /*#__PURE__*/ s(w, {
                                          breakpoint: T,
                                          overrides: { ziF2Sin1i: { variant: X(`MKKdJ6ZjG`) } },
                                          children: /*#__PURE__*/ s(F, {
                                            ErNLUiqGD: !0,
                                            height: `100%`,
                                            id: `uHdQAXZmI`,
                                            iSk8hVwPZ: !0,
                                            layoutId: `uHdQAXZmI`,
                                            Mtfwdn2WM: L(`v7`, f) ?? `宣传册`,
                                            n8TivgXgK: L(`v8`, f) ?? `Tier0宣传册2026-2`,
                                            pPtCP7clJ: L(`v4`, f) ?? `内容`,
                                            q_kabn3ie: `/assets/documents/rT7Px2IyfaAGXqVyIVqcCsXANU.pdf`,
                                            SsmWFdJ1S: `Book`,
                                            style: { width: `100%` },
                                            tOgta1ihp:
                                              L(`v5`, f) ??
                                              `企业面临着可能影响其未来数年运营的关键架构决策，例如：是维护单一组织更好，还是实施多组织更好？在这篇博文中，我将解释这两种方法的关键优缺点，以及每种模型最适合的场景。`,
                                            upnh7XGg6: `OPxUkoY0r`,
                                            variant: X(`vWnV_9TBI`),
                                            width: `100%`,
                                            yDd7KaMSp: !1,
                                            YDxaNYTCR: Y(
                                              {
                                                pixelHeight: 3240,
                                                pixelWidth: 6402,
                                                src: `/assets/images/Gf40vvCkkPBJIb97pGqe89nYyQ.png`,
                                                srcSet: `/assets/images/Gf40vvCkkPBJIb97pGqe89nYyQ.png 512w,/assets/images/Gf40vvCkkPBJIb97pGqe89nYyQ.png 1024w,/assets/images/Gf40vvCkkPBJIb97pGqe89nYyQ.png 2048w,/assets/images/Gf40vvCkkPBJIb97pGqe89nYyQ.png 4096w,/assets/images/Gf40vvCkkPBJIb97pGqe89nYyQ.png 6402w`,
                                              },
                                              ``
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ s(w, {
                                    breakpoint: T,
                                    overrides: {
                                      BqPdDHzpt: { width: void 0, y: (h?.y || 0) + 1226 },
                                      ziF2Sin1i: { width: `310px`, y: (h?.y || 0) + 1656 },
                                    },
                                    children: /*#__PURE__*/ s(y, {
                                      height: 420,
                                      width: `400px`,
                                      children: /*#__PURE__*/ s(S, {
                                        className: `framer-25zkc0-container`,
                                        nodeId: `ZOTkCIMwm`,
                                        scopeId: `kUMlJF28H`,
                                        children: /*#__PURE__*/ s(w, {
                                          breakpoint: T,
                                          overrides: { ziF2Sin1i: { variant: X(`MKKdJ6ZjG`) } },
                                          children: /*#__PURE__*/ s(F, {
                                            ErNLUiqGD: !0,
                                            height: `100%`,
                                            id: `ZOTkCIMwm`,
                                            iSk8hVwPZ: !0,
                                            layoutId: `ZOTkCIMwm`,
                                            Mtfwdn2WM: L(`v7`, f) ?? `宣传册`,
                                            n8TivgXgK: L(`v8`, f) ?? `Tier0宣传册2026-2`,
                                            pPtCP7clJ: L(`v4`, f) ?? `内容`,
                                            q_kabn3ie: `/assets/documents/UNNK0eTUjMi0zf4KeF33BqJDEG8.pdf`,
                                            SsmWFdJ1S: `Book`,
                                            style: { width: `100%` },
                                            tOgta1ihp:
                                              L(`v5`, f) ??
                                              `企业面临着可能影响其未来数年运营的关键架构决策，例如：是维护单一组织更好，还是实施多组织更好？在这篇博文中，我将解释这两种方法的关键优缺点，以及每种模型最适合的场景。`,
                                            upnh7XGg6: `DdvV9xxic`,
                                            variant: X(`vWnV_9TBI`),
                                            width: `100%`,
                                            yDd7KaMSp: !1,
                                            YDxaNYTCR: Y(
                                              {
                                                pixelHeight: 4320,
                                                pixelWidth: 8536,
                                                src: `/assets/images/2fLqSjCbGFV48ZYwW45CdAeuZs.png`,
                                                srcSet: `/assets/images/2fLqSjCbGFV48ZYwW45CdAeuZs.png 512w,/assets/images/2fLqSjCbGFV48ZYwW45CdAeuZs.png 1024w,/assets/images/2fLqSjCbGFV48ZYwW45CdAeuZs.png 2048w,/assets/images/2fLqSjCbGFV48ZYwW45CdAeuZs.png 4096w,/assets/images/2fLqSjCbGFV48ZYwW45CdAeuZs.png 8536w`,
                                              },
                                              ``
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ c(`div`, {
                                className: `framer-4qxlv`,
                                children: [
                                  /*#__PURE__*/ s(w, {
                                    breakpoint: T,
                                    overrides: {
                                      BqPdDHzpt: { width: void 0, y: (h?.y || 0) + 796 },
                                      ziF2Sin1i: { width: `310px`, y: (h?.y || 0) + 2086 },
                                    },
                                    children: /*#__PURE__*/ s(y, {
                                      height: 420,
                                      width: `400px`,
                                      children: /*#__PURE__*/ s(S, {
                                        className: `framer-noxbsj-container`,
                                        nodeId: `A7mKX7fQL`,
                                        scopeId: `kUMlJF28H`,
                                        children: /*#__PURE__*/ s(w, {
                                          breakpoint: T,
                                          overrides: {
                                            ziF2Sin1i: {
                                              variant: X(`MKKdJ6ZjG`),
                                              YDxaNYTCR: Y(
                                                {
                                                  pixelHeight: 3240,
                                                  pixelWidth: 6402,
                                                  positionX: `27.6%`,
                                                  positionY: `91.9%`,
                                                  src: `/assets/images/Owstc8IUztAkEbo9JUn3XL2TLQ.png`,
                                                  srcSet: `/assets/images/Owstc8IUztAkEbo9JUn3XL2TLQ.png 512w,/assets/images/Owstc8IUztAkEbo9JUn3XL2TLQ.png 1024w,/assets/images/Owstc8IUztAkEbo9JUn3XL2TLQ.png 2048w,/assets/images/Owstc8IUztAkEbo9JUn3XL2TLQ.png 4096w,/assets/images/Owstc8IUztAkEbo9JUn3XL2TLQ.png 6402w`,
                                                },
                                                ``
                                              ),
                                            },
                                          },
                                          children: /*#__PURE__*/ s(F, {
                                            ErNLUiqGD: !0,
                                            height: `100%`,
                                            id: `A7mKX7fQL`,
                                            iSk8hVwPZ: !0,
                                            layoutId: `A7mKX7fQL`,
                                            Mtfwdn2WM: L(`v7`, f) ?? `宣传册`,
                                            n8TivgXgK: L(`v9`, f) ?? `Tier0 宣传册2026`,
                                            pPtCP7clJ: L(`v4`, f) ?? `内容`,
                                            q_kabn3ie: `/assets/documents/vC24BdbQihnJs3Q0IbAH980yA.pdf`,
                                            SsmWFdJ1S: `Book`,
                                            style: { width: `100%` },
                                            tOgta1ihp:
                                              L(`v5`, f) ??
                                              `企业面临着可能影响其未来数年运营的关键架构决策，例如：是维护单一组织更好，还是实施多组织更好？在这篇博文中，我将解释这两种方法的关键优缺点，以及每种模型最适合的场景。`,
                                            upnh7XGg6: `OPxUkoY0r`,
                                            variant: X(`vWnV_9TBI`),
                                            width: `100%`,
                                            yDd7KaMSp: !1,
                                            YDxaNYTCR: Y(
                                              {
                                                pixelHeight: 3240,
                                                pixelWidth: 6402,
                                                src: `/assets/images/9cHgDal8feO96G32BFBSNhMVIvo.png`,
                                                srcSet: `/assets/images/9cHgDal8feO96G32BFBSNhMVIvo.png 512w,/assets/images/9cHgDal8feO96G32BFBSNhMVIvo.png 1024w,/assets/images/9cHgDal8feO96G32BFBSNhMVIvo.png 2048w,/assets/images/9cHgDal8feO96G32BFBSNhMVIvo.png 4096w,/assets/images/9cHgDal8feO96G32BFBSNhMVIvo.png 6402w`,
                                              },
                                              ``
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ s(w, {
                                    breakpoint: T,
                                    overrides: {
                                      BqPdDHzpt: { width: void 0, y: (h?.y || 0) + 796 },
                                      ziF2Sin1i: { width: `310px`, y: (h?.y || 0) + 2516 },
                                    },
                                    children: /*#__PURE__*/ s(y, {
                                      height: 420,
                                      width: `400px`,
                                      children: /*#__PURE__*/ s(S, {
                                        className: `framer-mpmyci-container`,
                                        nodeId: `IydrsVUvI`,
                                        scopeId: `kUMlJF28H`,
                                        children: /*#__PURE__*/ s(w, {
                                          breakpoint: T,
                                          overrides: {
                                            ziF2Sin1i: {
                                              variant: X(`MKKdJ6ZjG`),
                                              YDxaNYTCR: Y(
                                                {
                                                  pixelHeight: 3240,
                                                  pixelWidth: 6402,
                                                  positionX: `27.6%`,
                                                  positionY: `91.9%`,
                                                  src: `/assets/images/Owstc8IUztAkEbo9JUn3XL2TLQ.png`,
                                                  srcSet: `/assets/images/Owstc8IUztAkEbo9JUn3XL2TLQ.png 512w,/assets/images/Owstc8IUztAkEbo9JUn3XL2TLQ.png 1024w,/assets/images/Owstc8IUztAkEbo9JUn3XL2TLQ.png 2048w,/assets/images/Owstc8IUztAkEbo9JUn3XL2TLQ.png 4096w,/assets/images/Owstc8IUztAkEbo9JUn3XL2TLQ.png 6402w`,
                                                },
                                                ``
                                              ),
                                            },
                                          },
                                          children: /*#__PURE__*/ s(F, {
                                            ErNLUiqGD: !0,
                                            height: `100%`,
                                            id: `IydrsVUvI`,
                                            iSk8hVwPZ: !0,
                                            layoutId: `IydrsVUvI`,
                                            Mtfwdn2WM: L(`v7`, f) ?? `宣传册`,
                                            n8TivgXgK: L(`v9`, f) ?? `Tier0 宣传册2026`,
                                            pPtCP7clJ: L(`v4`, f) ?? `内容`,
                                            q_kabn3ie: `/assets/documents/PwWwPUvGgMBcwlxGYEaBC3x2Lo.pdf`,
                                            SsmWFdJ1S: `Book`,
                                            style: { width: `100%` },
                                            tOgta1ihp:
                                              L(`v5`, f) ??
                                              `企业面临着可能影响其未来数年运营的关键架构决策，例如：是维护单一组织更好，还是实施多组织更好？在这篇博文中，我将解释这两种方法的关键优缺点，以及每种模型最适合的场景。`,
                                            upnh7XGg6: `DdvV9xxic`,
                                            variant: X(`vWnV_9TBI`),
                                            width: `100%`,
                                            yDd7KaMSp: !1,
                                            YDxaNYTCR: Y(
                                              {
                                                pixelHeight: 4320,
                                                pixelWidth: 8536,
                                                src: `/assets/images/12VtY4psJOqJM0PXOgqLaV0WF0E.png`,
                                                srcSet: `/assets/images/12VtY4psJOqJM0PXOgqLaV0WF0E.png 512w,/assets/images/12VtY4psJOqJM0PXOgqLaV0WF0E.png 1024w,/assets/images/12VtY4psJOqJM0PXOgqLaV0WF0E.png 2048w,/assets/images/12VtY4psJOqJM0PXOgqLaV0WF0E.png 4096w,/assets/images/12VtY4psJOqJM0PXOgqLaV0WF0E.png 8536w`,
                                              },
                                              ``
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        N() &&
                          /*#__PURE__*/ c(`div`, {
                            className: `framer-lebhb6 hidden-r09no5 hidden-1ow3da4`,
                            children: [
                              /*#__PURE__*/ c(`div`, {
                                className: `framer-1i9vvza`,
                                children: [
                                  /*#__PURE__*/ s(y, {
                                    height: 420,
                                    width: `400px`,
                                    y: (h?.y || 0) + 366,
                                    children: /*#__PURE__*/ s(S, {
                                      className: `framer-a0gjr8-container`,
                                      nodeId: `Vd_CFE7O_`,
                                      scopeId: `kUMlJF28H`,
                                      children: /*#__PURE__*/ s(F, {
                                        ErNLUiqGD: !0,
                                        height: `100%`,
                                        id: `Vd_CFE7O_`,
                                        iSk8hVwPZ: !0,
                                        layoutId: `Vd_CFE7O_`,
                                        Mtfwdn2WM: L(`v3`, f) ?? `白皮书`,
                                        n8TivgXgK: L(`v10`, f) ?? `UNS在SMT产线中的应用实践`,
                                        pPtCP7clJ: L(`v4`, f) ?? `内容`,
                                        q_kabn3ie: `/assets/documents/edrRg6lCMNIvlUiiLl2gVV90A.pdf`,
                                        SsmWFdJ1S: `Book`,
                                        style: { width: `100%` },
                                        tOgta1ihp:
                                          L(`v5`, f) ??
                                          `企业面临着可能影响其未来数年运营的关键架构决策，例如：是维护单一组织更好，还是实施多组织更好？在这篇博文中，我将解释这两种方法的关键优缺点，以及每种模型最适合的场景。`,
                                        upnh7XGg6: `OPxUkoY0r`,
                                        variant: X(`vWnV_9TBI`),
                                        width: `100%`,
                                        yDd7KaMSp: !1,
                                        YDxaNYTCR: Y(
                                          {
                                            pixelHeight: 3080,
                                            pixelWidth: 4884,
                                            src: `/assets/images/4dvYU2E08ye3NnVXj7FcpuUReY.png`,
                                            srcSet: `/assets/images/4dvYU2E08ye3NnVXj7FcpuUReY.png 512w,/assets/images/4dvYU2E08ye3NnVXj7FcpuUReY.png 1024w,/assets/images/4dvYU2E08ye3NnVXj7FcpuUReY.png 2048w,/assets/images/4dvYU2E08ye3NnVXj7FcpuUReY.png 4096w,/assets/images/4dvYU2E08ye3NnVXj7FcpuUReY.png 4884w`,
                                          },
                                          ``
                                        ),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ s(y, {
                                    height: 420,
                                    width: `400px`,
                                    y: (h?.y || 0) + 366,
                                    children: /*#__PURE__*/ s(S, {
                                      className: `framer-s2zegp-container`,
                                      nodeId: `NX1HV6GEV`,
                                      scopeId: `kUMlJF28H`,
                                      children: /*#__PURE__*/ s(F, {
                                        ErNLUiqGD: !0,
                                        height: `100%`,
                                        id: `NX1HV6GEV`,
                                        iSk8hVwPZ: !0,
                                        layoutId: `NX1HV6GEV`,
                                        Mtfwdn2WM: L(`v7`, f) ?? `宣传册`,
                                        n8TivgXgK: L(`v6`, f) ?? `Tier0-Edge 宣传册2025`,
                                        pPtCP7clJ: L(`v4`, f) ?? `内容`,
                                        q_kabn3ie: `/assets/documents/fybWQe72lMNISQTUE1exn7fW0.pdf`,
                                        SsmWFdJ1S: `Book`,
                                        style: { width: `100%` },
                                        tOgta1ihp:
                                          L(`v5`, f) ??
                                          `企业面临着可能影响其未来数年运营的关键架构决策，例如：是维护单一组织更好，还是实施多组织更好？在这篇博文中，我将解释这两种方法的关键优缺点，以及每种模型最适合的场景。`,
                                        upnh7XGg6: `OPxUkoY0r`,
                                        variant: X(`vWnV_9TBI`),
                                        width: `100%`,
                                        yDd7KaMSp: !1,
                                        YDxaNYTCR: Y(
                                          {
                                            pixelHeight: 770,
                                            pixelWidth: 1221,
                                            positionX: `49%`,
                                            positionY: `41.5%`,
                                            src: `/assets/images/dW0mc6hwcXWl7zqStW43UEVeAA.png`,
                                            srcSet: `/assets/images/dW0mc6hwcXWl7zqStW43UEVeAA.png 512w,/assets/images/dW0mc6hwcXWl7zqStW43UEVeAA.png 1024w,/assets/images/dW0mc6hwcXWl7zqStW43UEVeAA.png 1221w`,
                                          },
                                          ``
                                        ),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ s(y, {
                                    height: 420,
                                    width: `400px`,
                                    y: (h?.y || 0) + 366,
                                    children: /*#__PURE__*/ s(S, {
                                      className: `framer-1skvepp-container`,
                                      nodeId: `DeEeLQlI_`,
                                      scopeId: `kUMlJF28H`,
                                      children: /*#__PURE__*/ s(F, {
                                        ErNLUiqGD: !0,
                                        height: `100%`,
                                        id: `DeEeLQlI_`,
                                        iSk8hVwPZ: !0,
                                        layoutId: `DeEeLQlI_`,
                                        Mtfwdn2WM: L(`v7`, f) ?? `宣传册`,
                                        n8TivgXgK: L(`v8`, f) ?? `Tier0宣传册2026-2`,
                                        pPtCP7clJ: L(`v4`, f) ?? `内容`,
                                        q_kabn3ie: `/assets/documents/rT7Px2IyfaAGXqVyIVqcCsXANU.pdf`,
                                        SsmWFdJ1S: `Book`,
                                        style: { width: `100%` },
                                        tOgta1ihp:
                                          L(`v5`, f) ??
                                          `企业面临着可能影响其未来数年运营的关键架构决策，例如：是维护单一组织更好，还是实施多组织更好？在这篇博文中，我将解释这两种方法的关键优缺点，以及每种模型最适合的场景。`,
                                        upnh7XGg6: `OPxUkoY0r`,
                                        variant: X(`vWnV_9TBI`),
                                        width: `100%`,
                                        yDd7KaMSp: !1,
                                        YDxaNYTCR: Y(
                                          {
                                            pixelHeight: 3240,
                                            pixelWidth: 6402,
                                            src: `/assets/images/Gf40vvCkkPBJIb97pGqe89nYyQ.png`,
                                            srcSet: `/assets/images/Gf40vvCkkPBJIb97pGqe89nYyQ.png 512w,/assets/images/Gf40vvCkkPBJIb97pGqe89nYyQ.png 1024w,/assets/images/Gf40vvCkkPBJIb97pGqe89nYyQ.png 2048w,/assets/images/Gf40vvCkkPBJIb97pGqe89nYyQ.png 4096w,/assets/images/Gf40vvCkkPBJIb97pGqe89nYyQ.png 6402w`,
                                          },
                                          ``
                                        ),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ c(`div`, {
                                className: `framer-1yjnm1`,
                                children: [
                                  /*#__PURE__*/ s(y, {
                                    height: 420,
                                    width: `400px`,
                                    y: (h?.y || 0) + 806,
                                    children: /*#__PURE__*/ s(S, {
                                      className: `framer-z4pyri-container`,
                                      nodeId: `i_vWDyowP`,
                                      scopeId: `kUMlJF28H`,
                                      children: /*#__PURE__*/ s(F, {
                                        ErNLUiqGD: !0,
                                        height: `100%`,
                                        id: `i_vWDyowP`,
                                        iSk8hVwPZ: !0,
                                        layoutId: `i_vWDyowP`,
                                        Mtfwdn2WM: L(`v7`, f) ?? `宣传册`,
                                        n8TivgXgK: L(`v8`, f) ?? `Tier0宣传册2026-2`,
                                        pPtCP7clJ: L(`v4`, f) ?? `内容`,
                                        q_kabn3ie: `/assets/documents/UNNK0eTUjMi0zf4KeF33BqJDEG8.pdf`,
                                        SsmWFdJ1S: `Book`,
                                        style: { width: `100%` },
                                        tOgta1ihp:
                                          L(`v5`, f) ??
                                          `企业面临着可能影响其未来数年运营的关键架构决策，例如：是维护单一组织更好，还是实施多组织更好？在这篇博文中，我将解释这两种方法的关键优缺点，以及每种模型最适合的场景。`,
                                        upnh7XGg6: `DdvV9xxic`,
                                        variant: X(`vWnV_9TBI`),
                                        width: `100%`,
                                        yDd7KaMSp: !1,
                                        YDxaNYTCR: Y(
                                          {
                                            pixelHeight: 4320,
                                            pixelWidth: 8536,
                                            src: `/assets/images/2fLqSjCbGFV48ZYwW45CdAeuZs.png`,
                                            srcSet: `/assets/images/2fLqSjCbGFV48ZYwW45CdAeuZs.png 512w,/assets/images/2fLqSjCbGFV48ZYwW45CdAeuZs.png 1024w,/assets/images/2fLqSjCbGFV48ZYwW45CdAeuZs.png 2048w,/assets/images/2fLqSjCbGFV48ZYwW45CdAeuZs.png 4096w,/assets/images/2fLqSjCbGFV48ZYwW45CdAeuZs.png 8536w`,
                                          },
                                          ``
                                        ),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ s(y, {
                                    height: 420,
                                    width: `400px`,
                                    y: (h?.y || 0) + 806,
                                    children: /*#__PURE__*/ s(S, {
                                      className: `framer-1dtlr85-container`,
                                      nodeId: `Kz49RCwR3`,
                                      scopeId: `kUMlJF28H`,
                                      children: /*#__PURE__*/ s(F, {
                                        ErNLUiqGD: !0,
                                        height: `100%`,
                                        id: `Kz49RCwR3`,
                                        iSk8hVwPZ: !0,
                                        layoutId: `Kz49RCwR3`,
                                        Mtfwdn2WM: L(`v7`, f) ?? `宣传册`,
                                        n8TivgXgK: L(`v9`, f) ?? `Tier0 宣传册2026`,
                                        pPtCP7clJ: L(`v4`, f) ?? `内容`,
                                        q_kabn3ie: `/assets/documents/vC24BdbQihnJs3Q0IbAH980yA.pdf`,
                                        SsmWFdJ1S: `Book`,
                                        style: { width: `100%` },
                                        tOgta1ihp:
                                          L(`v5`, f) ??
                                          `企业面临着可能影响其未来数年运营的关键架构决策，例如：是维护单一组织更好，还是实施多组织更好？在这篇博文中，我将解释这两种方法的关键优缺点，以及每种模型最适合的场景。`,
                                        upnh7XGg6: `OPxUkoY0r`,
                                        variant: X(`vWnV_9TBI`),
                                        width: `100%`,
                                        yDd7KaMSp: !1,
                                        YDxaNYTCR: Y(
                                          {
                                            pixelHeight: 3240,
                                            pixelWidth: 6402,
                                            src: `/assets/images/9cHgDal8feO96G32BFBSNhMVIvo.png`,
                                            srcSet: `/assets/images/9cHgDal8feO96G32BFBSNhMVIvo.png 512w,/assets/images/9cHgDal8feO96G32BFBSNhMVIvo.png 1024w,/assets/images/9cHgDal8feO96G32BFBSNhMVIvo.png 2048w,/assets/images/9cHgDal8feO96G32BFBSNhMVIvo.png 4096w,/assets/images/9cHgDal8feO96G32BFBSNhMVIvo.png 6402w`,
                                          },
                                          ``
                                        ),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ s(y, {
                                    height: 420,
                                    width: `400px`,
                                    y: (h?.y || 0) + 806,
                                    children: /*#__PURE__*/ s(S, {
                                      className: `framer-ow0b2a-container`,
                                      nodeId: `a8u7TM1Xk`,
                                      scopeId: `kUMlJF28H`,
                                      children: /*#__PURE__*/ s(F, {
                                        ErNLUiqGD: !0,
                                        height: `100%`,
                                        id: `a8u7TM1Xk`,
                                        iSk8hVwPZ: !0,
                                        layoutId: `a8u7TM1Xk`,
                                        Mtfwdn2WM: L(`v7`, f) ?? `宣传册`,
                                        n8TivgXgK: L(`v9`, f) ?? `Tier0 宣传册2026`,
                                        pPtCP7clJ: L(`v4`, f) ?? `内容`,
                                        q_kabn3ie: `/assets/documents/PwWwPUvGgMBcwlxGYEaBC3x2Lo.pdf`,
                                        SsmWFdJ1S: `Book`,
                                        style: { width: `100%` },
                                        tOgta1ihp:
                                          L(`v5`, f) ??
                                          `企业面临着可能影响其未来数年运营的关键架构决策，例如：是维护单一组织更好，还是实施多组织更好？在这篇博文中，我将解释这两种方法的关键优缺点，以及每种模型最适合的场景。`,
                                        upnh7XGg6: `DdvV9xxic`,
                                        variant: X(`vWnV_9TBI`),
                                        width: `100%`,
                                        yDd7KaMSp: !1,
                                        YDxaNYTCR: Y(
                                          {
                                            pixelHeight: 4320,
                                            pixelWidth: 8536,
                                            src: `/assets/images/12VtY4psJOqJM0PXOgqLaV0WF0E.png`,
                                            srcSet: `/assets/images/12VtY4psJOqJM0PXOgqLaV0WF0E.png 512w,/assets/images/12VtY4psJOqJM0PXOgqLaV0WF0E.png 1024w,/assets/images/12VtY4psJOqJM0PXOgqLaV0WF0E.png 2048w,/assets/images/12VtY4psJOqJM0PXOgqLaV0WF0E.png 4096w,/assets/images/12VtY4psJOqJM0PXOgqLaV0WF0E.png 8536w`,
                                          },
                                          ``
                                        ),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                    /*#__PURE__*/ c(l.div, {
                      className: `framer-1qhryw8`,
                      "data-framer-name": `header`,
                      layout: j,
                      children: [
                        P() &&
                          /*#__PURE__*/ s(w, {
                            breakpoint: T,
                            overrides: { BqPdDHzpt: { y: (h?.y || 0) + 1746 } },
                            children: /*#__PURE__*/ s(y, {
                              height: 498,
                              width: h?.width || `100vw`,
                              y: (h?.y || 0) + 1326,
                              children: /*#__PURE__*/ s(S, {
                                className: `framer-ch37hj-container hidden-r09no5`,
                                nodeId: `Gqv0YuMsR`,
                                scopeId: `kUMlJF28H`,
                                children: /*#__PURE__*/ s(w, {
                                  breakpoint: T,
                                  overrides: { BqPdDHzpt: { variant: X(`G8rxyXoDj`) } },
                                  children: /*#__PURE__*/ s(E, {
                                    height: `100%`,
                                    id: `Gqv0YuMsR`,
                                    layoutId: `Gqv0YuMsR`,
                                    style: { width: `100%` },
                                    variant: X(`zev4Tv3qQ`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        I() &&
                          /*#__PURE__*/ s(w, {
                            breakpoint: T,
                            overrides: {
                              ziF2Sin1i: {
                                height: 498,
                                width: h?.width || `100vw`,
                                y: (h?.y || 0) + 3016,
                              },
                            },
                            children: /*#__PURE__*/ s(y, {
                              children: /*#__PURE__*/ s(S, {
                                className: `framer-1h86byk-container hidden-6kr68t hidden-1ow3da4`,
                                nodeId: `E65AgJBJ8`,
                                scopeId: `kUMlJF28H`,
                                children: /*#__PURE__*/ s(E, {
                                  height: `100%`,
                                  id: `E65AgJBJ8`,
                                  layoutId: `E65AgJBJ8`,
                                  style: { width: `100%` },
                                  variant: X(`vXscR1iJC`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                    /*#__PURE__*/ s(y, {
                      height: 64,
                      width: `100vw`,
                      y: 0,
                      children: /*#__PURE__*/ s(S, {
                        className: `framer-3c7ow4-container`,
                        layout: j,
                        layoutScroll: !0,
                        nodeId: `BLgoKzxGK`,
                        scopeId: `kUMlJF28H`,
                        children: /*#__PURE__*/ s(w, {
                          breakpoint: T,
                          overrides: {
                            BqPdDHzpt: { variant: X(`Gw5VboM5c`) },
                            ziF2Sin1i: { variant: X(`Svy4sINhA`) },
                          },
                          children: /*#__PURE__*/ s(D, {
                            eVOFjxm0w: `var(--token-fcaa307f-078f-4ea1-af34-d51bb82ca05a, rgba(255, 255, 255, 0))`,
                            height: `100%`,
                            id: `BLgoKzxGK`,
                            jQcddTFoz: !0,
                            layoutId: `BLgoKzxGK`,
                            style: { width: `100%` },
                            variant: X(`LbFcBhD3w`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (ve = [
        `.framer-Sfqtm.framer-mtb9lh, .framer-Sfqtm .framer-mtb9lh { display: block; }`,
        `.framer-Sfqtm.framer-6kr68t { align-content: center; align-items: center; background-color: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 120px 0px 0px 0px; position: relative; width: 1440px; }`,
        `.framer-Sfqtm .framer-in5hpv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1240px; }`,
        `.framer-Sfqtm .framer-19ogvjh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Sfqtm .framer-19prcm1 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 673px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Sfqtm .framer-zic9pn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 782px; }`,
        `.framer-Sfqtm .framer-h00fi5 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 764px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Sfqtm .framer-hkr31x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Sfqtm .framer-zyl5sz, .framer-Sfqtm .framer-199y9u1, .framer-Sfqtm .framer-4qxlv, .framer-Sfqtm .framer-1i9vvza, .framer-Sfqtm .framer-1yjnm1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Sfqtm .framer-1by6sna-container, .framer-Sfqtm .framer-1brknd1-container, .framer-Sfqtm .framer-6nenj5-container, .framer-Sfqtm .framer-25zkc0-container, .framer-Sfqtm .framer-noxbsj-container, .framer-Sfqtm .framer-mpmyci-container, .framer-Sfqtm .framer-a0gjr8-container, .framer-Sfqtm .framer-s2zegp-container, .framer-Sfqtm .framer-1skvepp-container, .framer-Sfqtm .framer-z4pyri-container, .framer-Sfqtm .framer-1dtlr85-container, .framer-Sfqtm .framer-ow0b2a-container { flex: none; height: auto; position: relative; width: 400px; }`,
        `.framer-Sfqtm .framer-lebhb6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1240px; }`,
        `.framer-Sfqtm .framer-1qhryw8 { align-content: center; align-items: center; background-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Sfqtm .framer-ch37hj-container, .framer-Sfqtm .framer-1h86byk-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-Sfqtm .framer-3c7ow4-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 4; }`,
        ...k,
        ...M,
        `@media (max-width: 809.98px) { .framer-Sfqtm.framer-6kr68t { gap: 80px; width: 390px; } .framer-Sfqtm .framer-in5hpv, .framer-Sfqtm .framer-1by6sna-container, .framer-Sfqtm .framer-1brknd1-container, .framer-Sfqtm .framer-6nenj5-container, .framer-Sfqtm .framer-25zkc0-container, .framer-Sfqtm .framer-noxbsj-container, .framer-Sfqtm .framer-mpmyci-container { width: 310px; } .framer-Sfqtm .framer-19ogvjh { order: 0; } .framer-Sfqtm .framer-19prcm1, .framer-Sfqtm .framer-zic9pn, .framer-Sfqtm .framer-h00fi5 { width: 100%; } .framer-Sfqtm .framer-hkr31x { gap: 10px; order: 4; } .framer-Sfqtm .framer-zyl5sz, .framer-Sfqtm .framer-199y9u1, .framer-Sfqtm .framer-4qxlv { flex-direction: column; } .framer-Sfqtm .framer-1h86byk-container { order: 1; }}`,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-Sfqtm.framer-6kr68t { width: 810px; } .framer-Sfqtm .framer-in5hpv { width: 730px; } .framer-Sfqtm .framer-hkr31x { gap: 10px; } .framer-Sfqtm .framer-zyl5sz { order: 0; } .framer-Sfqtm .framer-1by6sna-container, .framer-Sfqtm .framer-1brknd1-container, .framer-Sfqtm .framer-6nenj5-container, .framer-Sfqtm .framer-25zkc0-container, .framer-Sfqtm .framer-noxbsj-container, .framer-Sfqtm .framer-mpmyci-container { width: auto; } .framer-Sfqtm .framer-199y9u1 { order: 2; } .framer-Sfqtm .framer-4qxlv { order: 1; }}`,
      ]),
      ($ = h(_e, ve, `framer-Sfqtm`)),
      ($.displayName = `Events`),
      ($.defaultProps = { height: 1700, width: 1440 }),
      se(
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
          ...V,
          ...H,
          ...f(A),
          ...f(N),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) => b([() => p(F, {}, t), () => p(E, {}, t), () => p(D, {}, t)], t),
      }),
      (ye = {
        exports: {
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerkUMlJF28H`,
            slots: [],
            annotations: {
              framerContractVersion: `1`,
              framerLayoutTemplateFlowEffect: `true`,
              framerIntrinsicWidth: `1440`,
              framerResponsiveScreen: `true`,
              framerImmutableVariables: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"ziF2Sin1i":{"layout":["fixed","auto"]},"BqPdDHzpt":{"layout":["fixed","auto"]}}}`,
              framerIntrinsicHeight: `1700`,
              framerColorSyntax: `true`,
              framerScrollSections: `false`,
              framerComponentViewportWidth: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerDisplayContentsDiv: `false`,
              framerAutoSizeImages: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
be();
export { ye as __FramerMetadata__, $ as default, G as queryParamNames };
//# sourceMappingURL=36vOvBOYr0dvn50kWNsBpfF1sVnQR7e48KE_D0oxFyU.DUeObVi9.mjs.map
