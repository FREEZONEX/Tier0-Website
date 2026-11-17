import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  D as t,
  F as n,
  O as r,
  P as i,
  R as a,
  S as ee,
  c as o,
  m as s,
  s as c,
  u as l,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { S as te, Yi as u, t as d, v as ne } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import {
  D as f,
  Et as re,
  G as p,
  I as m,
  P as h,
  Pt as g,
  Q as _,
  St as v,
  U as y,
  a as b,
  bt as ie,
  gt as ae,
  j as oe,
  lt as x,
  m as S,
  o as C,
  v as w,
  w as T,
  wt as se,
  yt as ce,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { m as E, n as le, p as D, t as O } from "./shared-lib.CHy_rbfQ.mjs?v=20261116-migration-v2";
import { i as k, n as A, r as j, t as ue } from "./IIMP8Vr9g.Cf7xPKPX.mjs?v=20261116-migration-v2";
import { i as M, n as N, r as P, t as de } from "./aqwnXEE4n.hmCSLb_E.mjs?v=20261116-migration-v2";
import { i as fe, n as pe, r as me, t as he } from "./GMGpjhxIs.BratIYER.mjs?v=20261116-migration-v2";
import { i as ge, n as _e, r as ve, t as ye } from "./o4jsOQ1eV.DTMKPJq3.mjs?v=20261116-migration-v2";
import { n as be, r as xe } from "./fHDmqdJOv.CHAOWL22.mjs?v=20261116-migration-v2";
function F(e, t) {
  for (; t; ) {
    let n = I[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function Se(e) {
  let t = [];
  for (; e; ) {
    let n = I[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function Ce(e) {
  let t = Se(e);
  if (t) throw t;
}
var I;
function L() {
  return (L = e(() => {
    (_(), (I = { AYmst8Nt3: new w(() => import("./fHDmqdJOv-0.DJSiQJ2x.mjs?v=20261116-migration-v2")) }));
  }))();
}
var R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
function we() {
  return (we = e(() => {
    (o(),
      _(),
      d(),
      r(),
      E(),
      le(),
      M(),
      fe(),
      k(),
      ge(),
      L(),
      be(),
      (R = y(O)),
      (z = y(D)),
      (B = {
        kcUTGyeuH: `(min-width: 1440px)`,
        KvaqQ2NDW: `(max-width: 809.98px)`,
        sFX4srpmA: `(min-width: 810px) and (max-width: 1439.98px)`,
      }),
      (V = () => typeof document < `u`),
      (H = []),
      (U = `framer-dZgAr`),
      (W = {
        kcUTGyeuH: `framer-v-wl8726`,
        KvaqQ2NDW: `framer-v-6n3bhv`,
        sFX4srpmA: `framer-v-q9uzx4`,
      }),
      (G = (e, t, n) => (e && t ? `position` : n)),
      (K = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (q = { Desktop: `kcUTGyeuH`, Phone: `KvaqQ2NDW`, Tablet: `sFX4srpmA` }),
      (J = ({ value: e }) =>
        v()
          ? null
          : /*#__PURE__*/ c(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Y = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: q[r.variant] ?? r.variant ?? `kcUTGyeuH`,
      })),
      (X = /*#__PURE__*/ s(function (e, r) {
        let o = ee(null),
          s = r ?? o;
        t();
        let { activeLocale: d, contentLocale: p, setLocale: m } = se(),
          g = ae(),
          { style: _, className: v, layoutId: y, variant: oe, ...x } = Y(e),
          w = n(() => xe({}, p), [p]);
        re(w);
        let [E, le] = ie(oe, B, !1),
          k = h(U, de, ye, ue, he),
          A = i(S)?.isLayoutTemplate,
          j = !!i(te)?.transition?.layout,
          M = G(A, j);
        Ce(d);
        let N = () => !V() || E !== `sFX4srpmA`,
          P = () => !V() || E === `sFX4srpmA`;
        return (
          ce({}),
          /*#__PURE__*/ c(S.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: q,
              primaryVariantId: `kcUTGyeuH`,
              variantClassNames: W,
            },
            children: /*#__PURE__*/ l(ne, {
              id: y ?? `fHDmqdJOv`,
              children: [
                /*#__PURE__*/ c(J, {
                  value: `html body { background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ l(u.div, {
                  ...x,
                  className: h(k, `framer-wl8726`, v),
                  ref: s,
                  style: { ..._ },
                  children: [
                    /*#__PURE__*/ c(b, {
                      height: 64,
                      width: `100vw`,
                      y: 0,
                      children: /*#__PURE__*/ c(C, {
                        className: `framer-1dhybbj-container`,
                        layout: M,
                        layoutScroll: !0,
                        nodeId: `sKwbJFWbp`,
                        scopeId: `fHDmqdJOv`,
                        children: /*#__PURE__*/ c(T, {
                          breakpoint: E,
                          overrides: {
                            KvaqQ2NDW: { variant: K(`Svy4sINhA`) },
                            sFX4srpmA: { variant: K(`Gw5VboM5c`) },
                          },
                          children: /*#__PURE__*/ c(O, {
                            eVOFjxm0w: `var(--token-fcaa307f-078f-4ea1-af34-d51bb82ca05a, rgba(255, 255, 255, 0))`,
                            height: `100%`,
                            id: `sKwbJFWbp`,
                            jQcddTFoz: !0,
                            layoutId: `sKwbJFWbp`,
                            style: { width: `100%` },
                            variant: K(`LbFcBhD3w`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ c(u.div, {
                      className: `framer-1qnsx40`,
                      "data-framer-name": `01`,
                      layout: M,
                      children: /*#__PURE__*/ l(`div`, {
                        className: `framer-hcfbii`,
                        children: [
                          /*#__PURE__*/ l(`div`, {
                            className: `framer-1tz38f8`,
                            children: [
                              /*#__PURE__*/ c(T, {
                                breakpoint: E,
                                overrides: { KvaqQ2NDW: { verticalAlignment: `bottom` } },
                                children: /*#__PURE__*/ c(f, {
                                  __fromCanvasComponent: !0,
                                  children:
                                    F(`v0`, p) ??
                                    /*#__PURE__*/ c(a, {
                                      children: /*#__PURE__*/ c(`h1`, {
                                        className: `framer-styles-preset-29f6n5`,
                                        "data-styles-preset": `aqwnXEE4n`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                        },
                                        children: `隐私政策`,
                                      }),
                                    }),
                                  className: `framer-1h2f0zs`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              /*#__PURE__*/ c(T, {
                                breakpoint: E,
                                overrides: {
                                  KvaqQ2NDW: {
                                    children: /*#__PURE__*/ c(a, {
                                      children: /*#__PURE__*/ c(`h6`, {
                                        className: `framer-styles-preset-1hrd6to`,
                                        "data-styles-preset": `o4jsOQ1eV`,
                                        dir: `auto`,
                                        style: { "--framer-text-color": `rgba(9, 9, 9, 0.6)` },
                                        children: /*#__PURE__*/ c(`strong`, {
                                          children: `最后更新时间：2026年1月12日`,
                                        }),
                                      }),
                                    }),
                                    verticalAlignment: `bottom`,
                                  },
                                  sFX4srpmA: {
                                    children: /*#__PURE__*/ c(a, {
                                      children: /*#__PURE__*/ c(`h6`, {
                                        className: `framer-styles-preset-1hrd6to`,
                                        "data-styles-preset": `o4jsOQ1eV`,
                                        dir: `auto`,
                                        style: { "--framer-text-color": `rgba(9, 9, 9, 0.6)` },
                                        children: /*#__PURE__*/ c(`strong`, {
                                          children: `最后更新时间：2026年1月12日`,
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                children: /*#__PURE__*/ c(f, {
                                  __fromCanvasComponent: !0,
                                  children:
                                    F(`v1`, p) ??
                                    /*#__PURE__*/ c(a, {
                                      children: /*#__PURE__*/ c(`h6`, {
                                        className: `framer-styles-preset-1hrd6to`,
                                        "data-styles-preset": `o4jsOQ1eV`,
                                        dir: `auto`,
                                        style: { "--framer-text-color": `rgba(9, 9, 9, 0.6)` },
                                        children: /*#__PURE__*/ c(`strong`, {
                                          children: `最后更新时间：2026年1月12日`,
                                        }),
                                      }),
                                    }),
                                  className: `framer-59xjcc`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ c(T, {
                            breakpoint: E,
                            overrides: {
                              KvaqQ2NDW: {
                                children:
                                  F(`v3`, p) ??
                                  /*#__PURE__*/ l(a, {
                                    children: [
                                      /*#__PURE__*/ c(`p`, {
                                        className: `framer-styles-preset-81u0hx`,
                                        "data-styles-preset": `IIMP8Vr9g`,
                                        dir: `auto`,
                                        style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                        children: `FREEZONEX PTE. LTD. (“FREEZONEX”, “我们”, “我们的”, 或者 “我们”) 致力于保护您的隐私。 本隐私政策概述了我们在您访问我们的网站 (www.tier0.app)、使用我们的产品和服务或与我们互动时如何收集、使用、披露和保护您的个人信息。`,
                                      }),
                                      /*#__PURE__*/ l(`ol`, {
                                        className: `framer-styles-preset-1jf1i0p`,
                                        "data-styles-preset": `GMGpjhxIs`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                        },
                                        children: [
                                          /*#__PURE__*/ l(`li`, {
                                            "data-preset-tag": `h5`,
                                            style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                            children: [
                                              /*#__PURE__*/ c(`h5`, {
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: /*#__PURE__*/ c(`strong`, {
                                                  children: `我们收集的信息`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: `我们可能会收集以下类型的信息：`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                                children: [
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `个人信息：姓名、电子邮件地址、电话号码、公司名称、职位、国家/地区及其他联系方式。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `帐户信息：用户名、密码及其他用于访问我们服务的凭证。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `技术信息：IP 地址、浏览器类型、设备信息、操作系统和使用数据。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `支付信息：公司银行账户详细信息和其他账单信息（如有必要）。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ l(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: [
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `rgb(51, 51, 51)`,
                                                        },
                                                        children: `其他信息：您通过表单、调查或与我们沟通提供的任何其他信息。`,
                                                      }),
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `rgb(51, 51, 51)`,
                                                        },
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ l(`li`, {
                                            "data-preset-tag": `h5`,
                                            children: [
                                              /*#__PURE__*/ c(`h5`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: /*#__PURE__*/ c(`strong`, {
                                                  children: `我们如何使用您的信息`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: `我们根据您的同意、我们对您的合同义务、我们的合法利益或法律要求处理您的个人数据，符合《通用数据保护条例》第 6 条的规定。`,
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: `我们将收集的信息用于以下目的：`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: [
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `提供和维护我们的产品和服务。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `处理交易并发送相关信息。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `与您沟通，包括回应询问和提供客户支持。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `发送促销材料和其他通信（在您同意的情况下）。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `监控和分析使用情况和趋势，以改善用户体验。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ l(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: [
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `rgb(51, 51, 51)`,
                                                        },
                                                        children: `遵守法律义务并执行我们的条款和政策。`,
                                                      }),
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `rgb(51, 51, 51)`,
                                                        },
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ l(`li`, {
                                            "data-preset-tag": `h5`,
                                            children: [
                                              /*#__PURE__*/ c(`h5`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: /*#__PURE__*/ c(`strong`, {
                                                  children: `共享您的信息`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: `我们不会出售您的个人信息。 我们可能会与以下人员共享您的信息：`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: [
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `服务提供商：在我们名义上执行服务的第三方供应商，如支付处理、数据分析、电子邮件交付、托管服务和客户服务。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `商业伙伴：与我们合作提供产品或服务的合作伙伴。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `法律要求：根据法律或保护我们权利的需要，向当局或其他方提供。`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: `所有第三方都有义务保护您的信息，并仅用于 FREEZONEX 指定的目的。`,
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ l(`li`, {
                                            "data-preset-tag": `h5`,
                                            children: [
                                              /*#__PURE__*/ c(`h5`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: /*#__PURE__*/ c(`strong`, {
                                                  children: `数据保留`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: `我们仅在满足本隐私政策中概述的目的所需的时间内保留您的个人信息，除非法律要求或允许更长的保留期。`,
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ l(`li`, {
                                            "data-preset-tag": `h5`,
                                            children: [
                                              /*#__PURE__*/ c(`h5`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: /*#__PURE__*/ c(`strong`, {
                                                  children: `您的权利`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: `根据您的管辖权，您可能对您的个人信息享有以下权利：`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: [
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `访问：请求访问我们持有的关于您的个人信息。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `更正：请求更正不准确或不完整的信息。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `删除：请求删除您的个人信息。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `异议：反对处理您的个人信息。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `限制：请求限制处理您的个人信息。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `可携带性：请求将您的个人信息转移给其他方。`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: `您可以随时撤回您的同意。 这不会影响在您撤回之前进行的任何处理的合法性。`,
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: `要行使以上列出的任何权利，请通过 info@freezonex.io 联系我们。`,
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ l(`li`, {
                                            "data-preset-tag": `h5`,
                                            children: [
                                              /*#__PURE__*/ c(`h5`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: /*#__PURE__*/ c(`strong`, {
                                                  children: `第三方链接`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `rgb(51, 51, 51)`,
                                                },
                                                children: `我们的网站可能包含指向第三方网站的链接。 我们不对这些网站的隐私实践或内容负责。 我们鼓励您查看您访问的任何第三方网站的隐私政策。`,
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ l(`li`, {
                                            "data-preset-tag": `h5`,
                                            children: [
                                              /*#__PURE__*/ c(`h5`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: /*#__PURE__*/ c(`strong`, {
                                                  children: `国际数据转移`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `如果您位于欧洲经济区（EEA），请注意，您的个人数据可能会被转移到EEA之外的国家和地区并进行处理，包括我们服务器和服务提供商所在的新加坡。 我们确保这些转移符合适用的数据保护法律，并采取适当的保障措施，例如使用欧洲委员会批准的标准合同条款。`,
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ l(`li`, {
                                            "data-preset-tag": `p`,
                                            children: [
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: /*#__PURE__*/ c(`strong`, {
                                                  children: `儿童隐私`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: `我们的服务不针对16岁以下的个人。 我们不会故意收集16岁以下儿童的个人信息。 如果我们意识到我们无意中收到了来自16岁以下儿童的个人信息，我们将从我们的记录中删除该信息。`,
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ l(`li`, {
                                            "data-preset-tag": `h5`,
                                            children: [
                                              /*#__PURE__*/ c(`h5`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: /*#__PURE__*/ c(`strong`, {
                                                  children: `对本隐私政策的更改`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: `我们可能会不时更新本隐私政策。 任何更改将在此页面上发布，并附上更新的修订日期。 我们鼓励您定期查看本隐私政策，以了解我们如何保护您的信息。`,
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ l(`li`, {
                                            "data-preset-tag": `h5`,
                                            children: [
                                              /*#__PURE__*/ c(`h5`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: /*#__PURE__*/ c(`strong`, {
                                                  children: `联系我们`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-81u0hx`,
                                                "data-styles-preset": `IIMP8Vr9g`,
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: `如果您对本隐私政策或我们的数据做法有任何疑问或担忧，请通过 info@freezonex.io 联系我们。`,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                              },
                            },
                            children: /*#__PURE__*/ c(f, {
                              __fromCanvasComponent: !0,
                              children:
                                F(`v2`, p) ??
                                /*#__PURE__*/ l(a, {
                                  children: [
                                    /*#__PURE__*/ c(`p`, {
                                      className: `framer-styles-preset-81u0hx`,
                                      "data-styles-preset": `IIMP8Vr9g`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                      },
                                      children: `FREEZONEX PTE. LTD. (“FREEZONEX”, “我们”, “我们的”, 或者 “我们”) 致力于保护您的隐私。 本隐私政策概述了我们在您访问我们的网站 (www.tier0.app)、使用我们的产品和服务或与我们互动时如何收集、使用、披露和保护您的个人信息。`,
                                    }),
                                    /*#__PURE__*/ l(`ol`, {
                                      className: `framer-styles-preset-1jf1i0p`,
                                      "data-styles-preset": `GMGpjhxIs`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                      },
                                      children: [
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                              },
                                              children: /*#__PURE__*/ c(`strong`, {
                                                children: `我们收集的信息`,
                                              }),
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: `我们可能会收集以下类型的信息：`,
                                            }),
                                            /*#__PURE__*/ l(`ul`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: [
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `个人信息：姓名、电子邮件地址、电话号码、公司名称、职位、国家/地区及其他联系方式。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `帐户信息：用户名、密码及其他用于访问我们服务的凭证。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `技术信息：IP 地址、浏览器类型、设备信息、操作系统和使用数据。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `支付信息：公司银行账户详细信息和其他账单信息（如有必要）。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ l(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: [
                                                    /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `其他信息：您通过表单、调查或与我们沟通提供的任何其他信息。`,
                                                    }),
                                                    /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                              },
                                              children: /*#__PURE__*/ c(`strong`, {
                                                children: `我们如何使用您的信息`,
                                              }),
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: `我们根据您的同意、我们对您的合同义务、我们的合法利益或法律要求处理您的个人数据，符合《通用数据保护条例》第 6 条的规定。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: `我们将收集的信息用于以下目的：`,
                                            }),
                                            /*#__PURE__*/ l(`ul`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: [
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `提供和维护我们的产品和服务。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `处理交易并发送相关信息。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `与您沟通，包括回应询问和提供客户支持。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `发送促销材料和其他通信（在您同意的情况下）。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `监控和分析使用情况和趋势，以改善用户体验。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ l(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: [
                                                    /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `遵守法律义务并执行我们的条款和政策。`,
                                                    }),
                                                    /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                              },
                                              children: /*#__PURE__*/ c(`strong`, {
                                                children: `共享您的信息`,
                                              }),
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: `我们不会出售您的个人信息。 我们可能会与以下人员共享您的信息：`,
                                            }),
                                            /*#__PURE__*/ l(`ul`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: [
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `服务提供商：在我们名义上执行服务的第三方供应商，如支付处理、数据分析、电子邮件交付、托管服务和客户服务。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `商业伙伴：与我们合作提供产品或服务的合作伙伴。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `法律要求：根据法律或保护我们权利的需要，向当局或其他方提供。`,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: `所有第三方都有义务保护您的信息，并仅用于 FREEZONEX 指定的目的。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                              },
                                              children: /*#__PURE__*/ c(`strong`, {
                                                children: `数据保留`,
                                              }),
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: `我们仅在满足本隐私政策中概述的目的所需的时间内保留您的个人信息，除非法律要求或允许更长的保留期。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                              },
                                              children: /*#__PURE__*/ c(`strong`, {
                                                children: `您的权利`,
                                              }),
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: `根据您的管辖权，您可能对您的个人信息享有以下权利：`,
                                            }),
                                            /*#__PURE__*/ l(`ul`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: [
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `访问：请求访问我们持有的关于您的个人信息。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `更正：请求更正不准确或不完整的信息。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `删除：请求删除您的个人信息。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `异议：反对处理您的个人信息。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `限制：请求限制处理您的个人信息。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `可携带性：请求将您的个人信息转移给其他方。`,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: `您可以随时撤回您的同意。 这不会影响在您撤回之前进行的任何处理的合法性。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: `要行使以上列出的任何权利，请通过 info@freezonex.io 联系我们。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                              },
                                              children: /*#__PURE__*/ c(`strong`, {
                                                children: `第三方链接`,
                                              }),
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `rgb(51, 51, 51)`,
                                              },
                                              children: `我们的网站可能包含指向第三方网站的链接。 我们不对这些网站的隐私实践或内容负责。 我们鼓励您查看您访问的任何第三方网站的隐私政策。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                              },
                                              children: /*#__PURE__*/ c(`strong`, {
                                                children: `国际数据转移`,
                                              }),
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                              },
                                              children: `如果您位于欧洲经济区（EEA），请注意，您的个人数据可能会被转移到EEA之外的国家和地区并进行处理，包括我们服务器和服务提供商所在的新加坡。 我们确保这些转移符合适用的数据保护法律，并采取适当的保障措施，例如使用欧洲委员会批准的标准合同条款。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `p`,
                                          children: [
                                            /*#__PURE__*/ c(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                              },
                                              children: /*#__PURE__*/ c(`strong`, {
                                                children: `儿童隐私`,
                                              }),
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: `我们的服务不针对16岁以下的个人。 我们不会故意收集16岁以下儿童的个人信息。 如果我们意识到我们无意中收到了来自16岁以下儿童的个人信息，我们将从我们的记录中删除该信息。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                              },
                                              children: /*#__PURE__*/ c(`strong`, {
                                                children: `对本隐私政策的更改`,
                                              }),
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: `我们可能会不时更新本隐私政策。 任何更改将在此页面上发布，并附上更新的修订日期。 我们鼓励您定期查看本隐私政策，以了解我们如何保护您的信息。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                              },
                                              children: /*#__PURE__*/ c(`strong`, {
                                                children: `联系我们`,
                                              }),
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: `如果您对本隐私政策或我们的数据做法有任何疑问或担忧，请通过 info@freezonex.io 联系我们。`,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              className: `framer-1vp579e`,
                              fonts: [`Inter`, `Inter-Bold`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    /*#__PURE__*/ l(u.div, {
                      className: `framer-4vvkbg`,
                      "data-framer-name": `header`,
                      layout: M,
                      children: [
                        N() &&
                          /*#__PURE__*/ c(T, {
                            breakpoint: E,
                            overrides: {
                              KvaqQ2NDW: { height: 498, width: void 0, y: (g?.y || 0) + 7852 },
                            },
                            children: /*#__PURE__*/ c(b, {
                              height: 438,
                              width: g?.width || `100vw`,
                              y: (g?.y || 0) + 7860,
                              children: /*#__PURE__*/ c(C, {
                                className: `framer-kphyzb-container hidden-q9uzx4`,
                                nodeId: `Obm7XfcGr`,
                                scopeId: `fHDmqdJOv`,
                                children: /*#__PURE__*/ c(T, {
                                  breakpoint: E,
                                  overrides: { KvaqQ2NDW: { variant: K(`vXscR1iJC`) } },
                                  children: /*#__PURE__*/ c(D, {
                                    height: `100%`,
                                    id: `Obm7XfcGr`,
                                    layoutId: `Obm7XfcGr`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: K(`zev4Tv3qQ`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        P() &&
                          /*#__PURE__*/ c(T, {
                            breakpoint: E,
                            overrides: {
                              sFX4srpmA: {
                                height: 498,
                                width: `max(${g?.width || `100vw`}, 1px)`,
                                y: (g?.y || 0) + 7870,
                              },
                            },
                            children: /*#__PURE__*/ c(b, {
                              children: /*#__PURE__*/ c(C, {
                                className: `framer-1lvs89d-container hidden-wl8726 hidden-6n3bhv`,
                                nodeId: `Xewo2c5x6`,
                                scopeId: `fHDmqdJOv`,
                                children: /*#__PURE__*/ c(D, {
                                  height: `100%`,
                                  id: `Xewo2c5x6`,
                                  layoutId: `Xewo2c5x6`,
                                  style: { width: `100%` },
                                  variant: K(`G8rxyXoDj`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
                /*#__PURE__*/ c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (Z = [
        `.framer-dZgAr.framer-10ft62i, .framer-dZgAr .framer-10ft62i { display: block; }`,
        `.framer-dZgAr.framer-wl8726 { align-content: center; align-items: center; background-color: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-dZgAr .framer-1dhybbj-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 4; }`,
        `.framer-dZgAr .framer-1qnsx40 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1240px; }`,
        `.framer-dZgAr .framer-hcfbii { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 50px 0px 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-dZgAr .framer-1tz38f8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-dZgAr .framer-1h2f0zs, .framer-dZgAr .framer-59xjcc { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: 1190px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-dZgAr .framer-1vp579e { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-dZgAr .framer-4vvkbg { align-content: center; align-items: center; background-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: 438px; justify-content: flex-start; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-dZgAr .framer-kphyzb-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
        `.framer-dZgAr .framer-1lvs89d-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...N,
        ..._e,
        ...A,
        ...pe,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-dZgAr.framer-wl8726 { width: 810px; } .framer-dZgAr .framer-1qnsx40 { flex-direction: row; padding: 130px 0px 0px 0px; width: 810px; z-index: 1; } .framer-dZgAr .framer-hcfbii { padding: 0px 60px 0px 60px; width: 810px; } .framer-dZgAr .framer-1h2f0zs, .framer-dZgAr .framer-59xjcc { width: 730px; } .framer-dZgAr .framer-4vvkbg { flex-direction: row; height: min-content; } .framer-dZgAr .framer-1lvs89d-container { flex: 1 0 0px; width: 1px; }}`,
        `@media (max-width: 809.98px) { .framer-dZgAr.framer-wl8726, .framer-dZgAr .framer-1qnsx40 { width: 390px; } .framer-dZgAr .framer-hcfbii { gap: 32px; order: 0; padding: 120px 40px 0px 40px; } .framer-dZgAr .framer-1h2f0zs, .framer-dZgAr .framer-59xjcc { width: 310px; } .framer-dZgAr .framer-4vvkbg { gap: 0px; height: min-content; } .framer-dZgAr .framer-kphyzb-container { flex: none; height: auto; width: auto; }}`,
      ]),
      (Q = g(X, Z, `framer-dZgAr`)),
      (Q.displayName = `Hannover Messe`),
      (Q.defaultProps = { height: 2746, width: 1440 }),
      oe(
        Q,
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
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `700`,
              },
            ],
          },
          ...R,
          ...z,
          ...p(P),
          ...p(ve),
          ...p(j),
          ...p(me),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = { load: (e, t) => x([() => m(O, {}, t), () => m(D, {}, t)], t) }),
      ($ = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerfHDmqdJOv`,
            slots: [],
            annotations: {
              framerAcceptsLayoutTemplate: `true`,
              framerResponsiveScreen: `true`,
              framerAutoSizeImages: `true`,
              framerComponentViewportWidth: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"sFX4srpmA":{"layout":["fixed","auto"]},"KvaqQ2NDW":{"layout":["fixed","auto"]}}}`,
              framerImmutableVariables: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerContractVersion: `1`,
              framerIntrinsicHeight: `2746`,
              framerDisplayContentsDiv: `false`,
              framerColorSyntax: `true`,
              framerScrollSections: `false`,
              framerIntrinsicWidth: `1440`,
            },
          },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
we();
export { $ as __FramerMetadata__, Q as default, H as queryParamNames };
//# sourceMappingURL=5hhCxmHIav3ERnTqsgR9QVEaVxEM1I4aQ7FHfVKcXdE.6UV5oRvN.mjs.map
