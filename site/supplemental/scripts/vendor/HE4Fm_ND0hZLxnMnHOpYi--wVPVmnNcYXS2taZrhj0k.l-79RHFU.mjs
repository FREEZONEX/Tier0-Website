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
import { n as be, r as xe } from "./KJSVessEO.B5hsG-zJ.mjs?v=20261116-migration-v2";
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
    (_(), (I = { AYmst8Nt3: new w(() => import("./KJSVessEO-0.BeXUQ5-G.mjs?v=20261116-migration-v2")) }));
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
        OpCEMGpAF: `(max-width: 809.98px)`,
        pYHub7xE7: `(min-width: 1440px)`,
        r7mJiE2CQ: `(min-width: 810px) and (max-width: 1439.98px)`,
      }),
      (V = () => typeof document < `u`),
      (H = []),
      (U = `framer-UcUja`),
      (W = {
        OpCEMGpAF: `framer-v-1phwgbh`,
        pYHub7xE7: `framer-v-b1aenj`,
        r7mJiE2CQ: `framer-v-jaa7aj`,
      }),
      (G = (e, t, n) => (e && t ? `position` : n)),
      (K = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (q = { Desktop: `pYHub7xE7`, Phone: `OpCEMGpAF`, Tablet: `r7mJiE2CQ` }),
      (J = ({ value: e }) =>
        v()
          ? null
          : /*#__PURE__*/ c(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Y = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: q[r.variant] ?? r.variant ?? `pYHub7xE7`,
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
        let N = () => !V() || E !== `r7mJiE2CQ`,
          P = () => !V() || E === `r7mJiE2CQ`;
        return (
          ce({}),
          /*#__PURE__*/ c(S.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: q,
              primaryVariantId: `pYHub7xE7`,
              variantClassNames: W,
            },
            children: /*#__PURE__*/ l(ne, {
              id: y ?? `KJSVessEO`,
              children: [
                /*#__PURE__*/ c(J, {
                  value: `html body { background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ l(u.div, {
                  ...x,
                  className: h(k, `framer-b1aenj`, v),
                  ref: s,
                  style: { ..._ },
                  children: [
                    /*#__PURE__*/ c(b, {
                      height: 64,
                      width: `100vw`,
                      y: 0,
                      children: /*#__PURE__*/ c(C, {
                        className: `framer-12e2dzq-container`,
                        layout: M,
                        layoutScroll: !0,
                        nodeId: `yOJ3X2e13`,
                        scopeId: `KJSVessEO`,
                        children: /*#__PURE__*/ c(T, {
                          breakpoint: E,
                          overrides: {
                            OpCEMGpAF: { variant: K(`Svy4sINhA`) },
                            r7mJiE2CQ: { variant: K(`Gw5VboM5c`) },
                          },
                          children: /*#__PURE__*/ c(O, {
                            eVOFjxm0w: `var(--token-fcaa307f-078f-4ea1-af34-d51bb82ca05a, rgba(255, 255, 255, 0))`,
                            height: `100%`,
                            id: `yOJ3X2e13`,
                            jQcddTFoz: !0,
                            layoutId: `yOJ3X2e13`,
                            style: { width: `100%` },
                            variant: K(`LbFcBhD3w`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ c(u.div, {
                      className: `framer-1q52uh9`,
                      "data-framer-name": `01`,
                      layout: M,
                      children: /*#__PURE__*/ l(`div`, {
                        className: `framer-1uqveoa`,
                        children: [
                          /*#__PURE__*/ l(`div`, {
                            className: `framer-45ngaq`,
                            children: [
                              /*#__PURE__*/ c(T, {
                                breakpoint: E,
                                overrides: { OpCEMGpAF: { verticalAlignment: `bottom` } },
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
                                  className: `framer-14upcej`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              /*#__PURE__*/ c(T, {
                                breakpoint: E,
                                overrides: { OpCEMGpAF: { verticalAlignment: `bottom` } },
                                children: /*#__PURE__*/ c(f, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ c(a, {
                                    children: /*#__PURE__*/ l(`h6`, {
                                      className: `framer-styles-preset-1hrd6to`,
                                      "data-styles-preset": `o4jsOQ1eV`,
                                      dir: `auto`,
                                      style: { "--framer-text-color": `rgba(9, 9, 9, 0.6)` },
                                      children: [
                                        /*#__PURE__*/ c(`strong`, { children: `最后更新时间：` }),
                                        `2026年1月12日`,
                                      ],
                                    }),
                                  }),
                                  className: `framer-1k6y1fn`,
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
                              OpCEMGpAF: {
                                children:
                                  F(`v2`, p) ??
                                  /*#__PURE__*/ l(a, {
                                    children: [
                                      /*#__PURE__*/ l(`p`, {
                                        className: `framer-styles-preset-81u0hx`,
                                        "data-styles-preset": `IIMP8Vr9g`,
                                        dir: `auto`,
                                        children: [
                                          `本隐私政策（以下简称“本政策”）说明 `,
                                          /*#__PURE__*/ c(`strong`, { children: `Tier0` }),
                                          `（以下简称“Tier0”或“我们”）在您使用我们的网站和工业物联网软件即服务产品时，如何收集、存储、使用和披露您的相关信息。这些产品包括 Tier0 云平台、UNS Manager、连接服务、Node-RED 实例、数据 Notebook 和 AI 应用生成器（统称“服务”）。`,
                                        ],
                                      }),
                                      /*#__PURE__*/ c(`p`, {
                                        className: `framer-styles-preset-81u0hx`,
                                        "data-styles-preset": `IIMP8Vr9g`,
                                        dir: `auto`,
                                        children: `本政策纳入我们的服务条款及任何适用的数据处理协议（DPA）。`,
                                      }),
                                      /*#__PURE__*/ c(`p`, {
                                        className: `framer-styles-preset-81u0hx`,
                                        "data-styles-preset": `IIMP8Vr9g`,
                                        dir: `auto`,
                                      }),
                                      /*#__PURE__*/ l(`ol`, {
                                        className: `framer-styles-preset-81u0hx`,
                                        "data-styles-preset": `IIMP8Vr9g`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                        },
                                        children: [
                                          /*#__PURE__*/ l(`li`, {
                                            "data-preset-tag": `p`,
                                            children: [
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: /*#__PURE__*/ c(`strong`, {
                                                  children: `适用范围：重要区分（“控制者”与“处理者”的角色）`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `为明确说明并确保符合法律要求，特别是针对我们的 B2B 客户，我们区分以下两类数据：`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                dir: `auto`,
                                                children: [
                                                  /*#__PURE__*/ l(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: [
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                        },
                                                        children: `A. 我们收集的有关您的信息（Tier0 作为控制者）`,
                                                      }),
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                        },
                                                        children: `这是指我们为提供服务而收集的数据，例如您的账户注册信息、账单详情和平台使用日志。本政策适用于此类信息。`,
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
                                                        children: `B. 客户内容（Tier0 作为处理者）`,
                                                      }),
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                        },
                                                        children: `这是指您上传、传输、生成或存储在服务中的工业数据、MQTT 报文、Node-RED 数据流、Python 脚本、数据库和 AI 提示词。技术信息：IP 地址、浏览器类型、设备信息、操作系统和使用数据。`,
                                                      }),
                                                      /*#__PURE__*/ l(`ul`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `rgb(51, 51, 51)`,
                                                        },
                                                        children: [
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `rgb(51, 51, 51)`,
                                                              },
                                                              children: `Tier0 仅代表您处理客户内容。您（客户）是数据控制者，Tier0 是数据处理者。`,
                                                            }),
                                                          }),
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `rgb(51, 51, 51)`,
                                                              },
                                                              children: `您对客户内容中数据的收集、合法性、准确性和隐私负责。`,
                                                            }),
                                                          }),
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `rgb(51, 51, 51)`,
                                                              },
                                                              children: `最终用户的隐私：如果您的客户内容包含员工或最终用户的个人数据（例如 MQTT 报文中的员工 ID），您负责向他们提供相关隐私告知。Tier0 与您的最终用户不存在直接关系。`,
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                        },
                                                      }),
                                                    ],
                                                  }),
                                                ],
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
                                                  children: `我们收集的信息`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `我们通过三种方式收集信息：您提供的信息、我们自动收集的信息，以及来自第三方的信息。`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                dir: `auto`,
                                                children: [
                                                  /*#__PURE__*/ l(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: [
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                        },
                                                        children: `您提供的信息`,
                                                      }),
                                                      /*#__PURE__*/ l(`ul`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `rgb(51, 51, 51)`,
                                                        },
                                                        children: [
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            style: {
                                                              "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                            },
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                              },
                                                              children: `账户注册：姓名、工作邮箱、公司名称和身份验证凭证（经过哈希处理的密码或 SSO 令牌）。`,
                                                            }),
                                                          }),
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `rgb(51, 51, 51)`,
                                                              },
                                                              children: `账单信息：我们使用 Stripe 作为支付处理服务商。Tier0 不存储完整的信用卡号码。`,
                                                            }),
                                                          }),
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `rgb(51, 51, 51)`,
                                                              },
                                                              children: `工业业务背景：使用我们的 AI 应用生成器时，您可能会提供描述工厂流程的提示词，例如“为 A 产线创建一个 OEE 看板”。`,
                                                            }),
                                                          }),
                                                        ],
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
                                                        children: `我们自动收集的信息（使用数据）`,
                                                      }),
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                        },
                                                        children: `在您使用服务时，我们会自动收集遥测数据，以确保系统稳定、安全以及计费准确。此类数据通常经过汇总：`,
                                                      }),
                                                      /*#__PURE__*/ l(`ul`, {
                                                        dir: `auto`,
                                                        children: [
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                              },
                                                              children: `连接指标：活跃 MQTT 连接数、消息吞吐速率（MB/s）、协议版本和错误率。`,
                                                            }),
                                                          }),
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            style: {
                                                              "--framer-text-color": `rgb(51, 51, 51)`,
                                                            },
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `rgb(51, 51, 51)`,
                                                              },
                                                              children: `计算资源用量：您的 Node-RED 实例和 Notebook 内核消耗的 CPU／内存资源。`,
                                                            }),
                                                          }),
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            style: {
                                                              "--framer-text-color": `rgb(51, 51, 51)`,
                                                            },
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `rgb(51, 51, 51)`,
                                                              },
                                                              children: `日志数据：用于故障排查和安全审计的 IP 地址、浏览器类型、设备标识符、页面浏览记录和 API 请求时间戳。`,
                                                            }),
                                                          }),
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                              },
                                                              children: `我们和合作伙伴使用 Cookie 及类似跟踪技术，跟踪您在服务中的活动并保存某些信息。您可以设置浏览器拒绝所有 Cookie，或在发送 Cookie 时予以提示。`,
                                                            }),
                                                          }),
                                                        ],
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
                                                        children: `来自第三方的信息`,
                                                      }),
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                        },
                                                        children: `如果您通过 AWS Marketplace 等合作伙伴渠道订阅 Tier0，我们可能会从这些合作伙伴处收到相关信息。`,
                                                      }),
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                        },
                                                      }),
                                                    ],
                                                  }),
                                                ],
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
                                                  children: `我们如何使用您的信息`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `我们将收集的信息用于以下业务目的：`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: [
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                    },
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      },
                                                      children: `服务运营：为您配置统一命名空间（UNS）、管理 MQTT Broker，并启动计算资源。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `计费与计量：根据您的活跃连接数、数据吞吐量和存储等级计算使用费用。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `安全与完整性：检测“邻居干扰”问题、防范经由 MQTT 发起的 DDoS 攻击，并监控未经授权的访问尝试。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `AI 模型改进（有限范围）：我们可能分析匿名化的提示词，以提高 AI 模型的准确性。未经您的明确同意，我们不会使用您专有的客户内容（例如私有 UNS 结构、原始设备数据或数据库记录）来训练通用公共 AI 模型。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `服务通知：我们可能向您发送与服务相关的非促销消息，例如安全警报、账单收据、系统通知和重要产品更新。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `营销通讯：我们可能发送新闻简报、活动邀请和促销更新。在要求事先明确同意的司法管辖区，我们仅在您选择同意后发送营销信息。您可以随时通过邮件中的退订链接或账户设置退出。`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
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
                                                  children: `数据架构与分处理者`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: `Tier0 基于先进的云基础设施构建，以确保工业级可靠性。我们使用以下主要分处理者：`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: [
                                                  /*#__PURE__*/ l(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: [
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `rgb(51, 51, 51)`,
                                                        },
                                                        children: `Amazon Web Services（AWS）：我们的主要基础设施提供商。`,
                                                      }),
                                                      /*#__PURE__*/ l(`ul`, {
                                                        dir: `auto`,
                                                        children: [
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `rgb(51, 51, 51)`,
                                                              },
                                                              children: `热数据（实时）：活跃的 UNS 配置、Node-RED 数据流和运营数据库（PostgreSQL）托管在采用高可用（HA）配置的 AWS EC2 实例上。`,
                                                            }),
                                                          }),
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `rgb(51, 51, 51)`,
                                                              },
                                                              children: `冷数据（历史）：历史遥测数据、Notebook 归档和备份存储在 AWS S3 及相关表格式中，以经济高效的方式提供长期持久性。`,
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `AI 提供商：我们通过 AI 网关，将您的自然语言提示词（不包括底层数据库）传输至 OpenAI、Google Gemini 或 Anthropic 等提供商，用于生成 MES 应用和逻辑流程。这些传输以透传方式进行。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `Stripe：用于安全的支付处理。`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `所有分处理者均受数据处理协议（DPA）约束，以确保遵守适用法律。`,
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
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
                                                  children: `安全与隔离`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `我们采用行业标准的技术与组织措施来保护您的数据：`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: [
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                    },
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      },
                                                      children: `加密：对所有传输中的数据（包括 MQTT 和 HTTP 流量）使用 TLS 1.2／1.3，对静态存储的数据使用 AES-256。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `租户隔离：我们在 MQTT Broker 层实施严格的访问控制列表（ACL），确保一个租户无法订阅其他租户的主题。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `身份验证：您负责维护账户凭证以及边缘设备客户端 ID／密钥的安全。`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
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
                                                  children: `工业 AI 与安全免责声明（重要）`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `不构成工业安全建议：我们的服务提供 AI 辅助工具，可生成代码、Node-RED 数据流和 MES 控制逻辑。但是，AI 模型具有概率性，可能产生幻觉或错误。Tier0 的 AI 输出不能替代专业的工业工程判断。`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                dir: `auto`,
                                                children: [
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      },
                                                      children: `您的责任：在将任何 AI 生成的代码、配置或逻辑部署到生产设备或运营技术（OT）环境之前，您始终独立承担审查、测试和验证这些内容的全部责任。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    style: {
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `责任：对于因依赖 AI 生成的输出而造成的任何实物损坏、安全事故、生产停机或数据丢失，Tier0 不承担责任。`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
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
                                                  children: `国际数据传输`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `Tier0 在全球范围内运营。您的个人信息和客户内容可能被传输至您居住国以外的国家并在那里处理，主要为美国，托管于 AWS 区域。`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: [
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                    },
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      },
                                                      children: `新加坡用户：在将个人数据传输至新加坡境外时，我们遵守《个人数据保护法》（PDPA）。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `欧洲经济区／英国用户：我们依据合法的数据传输机制，例如标准合同条款（SCC）和欧盟—美国数据隐私框架（如适用）。`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
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
                                                  children: `您的权利与选择`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `根据您所在的地区（例如新加坡、中国、欧洲经济区或英国），您可能就个人信息享有特定权利，包括：`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: [
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                    },
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      },
                                                      children: `访问与更正：访问、更正或更新账户信息的权利。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `删除：请求删除您的个人信息的权利。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `退出：通过退订链接或账户设置，退出营销通讯或特定 AI 数据使用计划的权利。`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `管理客户内容：由于 Tier0 是客户内容的数据处理者，如果您或您的最终用户希望行使客户内容中相关数据的权利，例如删除特定 MQTT 消息历史记录，您必须直接使用平台的删除工具。`,
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
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
                                                  children: `数据保留`,
                                                }),
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: [
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                    },
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      },
                                                      children: `账户数据：在您的账户处于活跃状态期间予以保留。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `热数据：在服务运营所需的期间，保留在活跃数据库中。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `冷数据（S3）：根据您配置的保留策略或订阅套餐予以保留。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `删除：账户终止后，我们将在 30 天内删除您的客户内容，但须遵循我们的备份周期。`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
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
                                                  children: `联系我们`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `如果您对本政策、Tier0 的数据处理方式有任何疑问，或希望行使隐私权利，请通过以下方式联系我们：`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: [
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                    },
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      },
                                                      children: `电子邮箱：privacypolicy@tier0.dev`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `地址：1 Fusionpolis Link #03-03/03-04, Nexus at One-North, Singapore 138542`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                              },
                              r7mJiE2CQ: {
                                children:
                                  F(`v2`, p) ??
                                  /*#__PURE__*/ l(a, {
                                    children: [
                                      /*#__PURE__*/ l(`p`, {
                                        className: `framer-styles-preset-81u0hx`,
                                        "data-styles-preset": `IIMP8Vr9g`,
                                        dir: `auto`,
                                        children: [
                                          `本隐私政策（以下简称“本政策”）说明 `,
                                          /*#__PURE__*/ c(`strong`, { children: `Tier0` }),
                                          `（以下简称“Tier0”或“我们”）在您使用我们的网站和工业物联网软件即服务产品时，如何收集、存储、使用和披露您的相关信息。这些产品包括 Tier0 云平台、UNS Manager、连接服务、Node-RED 实例、数据 Notebook 和 AI 应用生成器（统称“服务”）。`,
                                        ],
                                      }),
                                      /*#__PURE__*/ c(`p`, {
                                        className: `framer-styles-preset-81u0hx`,
                                        "data-styles-preset": `IIMP8Vr9g`,
                                        dir: `auto`,
                                        children: `本政策纳入我们的服务条款及任何适用的数据处理协议（DPA）。`,
                                      }),
                                      /*#__PURE__*/ c(`p`, {
                                        className: `framer-styles-preset-81u0hx`,
                                        "data-styles-preset": `IIMP8Vr9g`,
                                        dir: `auto`,
                                      }),
                                      /*#__PURE__*/ l(`ol`, {
                                        className: `framer-styles-preset-81u0hx`,
                                        "data-styles-preset": `IIMP8Vr9g`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                        },
                                        children: [
                                          /*#__PURE__*/ l(`li`, {
                                            "data-preset-tag": `p`,
                                            children: [
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: /*#__PURE__*/ c(`strong`, {
                                                  children: `适用范围：重要区分（“控制者”与“处理者”的角色）`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `为明确说明并确保符合法律要求，特别是针对我们的 B2B 客户，我们区分以下两类数据：`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                dir: `auto`,
                                                children: [
                                                  /*#__PURE__*/ l(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: [
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                        },
                                                        children: `A. 我们收集的有关您的信息（Tier0 作为控制者）`,
                                                      }),
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                        },
                                                        children: `这是指我们为提供服务而收集的数据，例如您的账户注册信息、账单详情和平台使用日志。本政策适用于此类信息。`,
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
                                                        children: `B. 客户内容（Tier0 作为处理者）`,
                                                      }),
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                        },
                                                        children: `这是指您上传、传输、生成或存储在服务中的工业数据、MQTT 报文、Node-RED 数据流、Python 脚本、数据库和 AI 提示词。技术信息：IP 地址、浏览器类型、设备信息、操作系统和使用数据。`,
                                                      }),
                                                      /*#__PURE__*/ l(`ul`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `rgb(51, 51, 51)`,
                                                        },
                                                        children: [
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `rgb(51, 51, 51)`,
                                                              },
                                                              children: `Tier0 仅代表您处理客户内容。您（客户）是数据控制者，Tier0 是数据处理者。`,
                                                            }),
                                                          }),
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `rgb(51, 51, 51)`,
                                                              },
                                                              children: `您对客户内容中数据的收集、合法性、准确性和隐私负责。`,
                                                            }),
                                                          }),
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `rgb(51, 51, 51)`,
                                                              },
                                                              children: `最终用户的隐私：如果您的客户内容包含员工或最终用户的个人数据（例如 MQTT 报文中的员工 ID），您负责向他们提供相关隐私告知。Tier0 与您的最终用户不存在直接关系。`,
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                        },
                                                      }),
                                                    ],
                                                  }),
                                                ],
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
                                                  children: `我们收集的信息`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `我们通过三种方式收集信息：您提供的信息、我们自动收集的信息，以及来自第三方的信息。`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                dir: `auto`,
                                                children: [
                                                  /*#__PURE__*/ l(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: [
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                        },
                                                        children: `您提供的信息`,
                                                      }),
                                                      /*#__PURE__*/ l(`ul`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `rgb(51, 51, 51)`,
                                                        },
                                                        children: [
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            style: {
                                                              "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                            },
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                              },
                                                              children: `账户注册：姓名、工作邮箱、公司名称和身份验证凭证（经过哈希处理的密码或 SSO 令牌）。`,
                                                            }),
                                                          }),
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `rgb(51, 51, 51)`,
                                                              },
                                                              children: `账单信息：我们使用 Stripe 作为支付处理服务商。Tier0 不存储完整的信用卡号码。`,
                                                            }),
                                                          }),
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `rgb(51, 51, 51)`,
                                                              },
                                                              children: `工业业务背景：使用我们的 AI 应用生成器时，您可能会提供描述工厂流程的提示词，例如“为 A 产线创建一个 OEE 看板”。`,
                                                            }),
                                                          }),
                                                        ],
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
                                                        children: `我们自动收集的信息（使用数据）`,
                                                      }),
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                        },
                                                        children: `在您使用服务时，我们会自动收集遥测数据，以确保系统稳定、安全以及计费准确。此类数据通常经过汇总：`,
                                                      }),
                                                      /*#__PURE__*/ l(`ul`, {
                                                        dir: `auto`,
                                                        children: [
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                              },
                                                              children: `连接指标：活跃 MQTT 连接数、消息吞吐速率（MB/s）、协议版本和错误率。`,
                                                            }),
                                                          }),
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            style: {
                                                              "--framer-text-color": `rgb(51, 51, 51)`,
                                                            },
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `rgb(51, 51, 51)`,
                                                              },
                                                              children: `计算资源用量：您的 Node-RED 实例和 Notebook 内核消耗的 CPU／内存资源。`,
                                                            }),
                                                          }),
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            style: {
                                                              "--framer-text-color": `rgb(51, 51, 51)`,
                                                            },
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `rgb(51, 51, 51)`,
                                                              },
                                                              children: `日志数据：用于故障排查和安全审计的 IP 地址、浏览器类型、设备标识符、页面浏览记录和 API 请求时间戳。`,
                                                            }),
                                                          }),
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                              },
                                                              children: `我们和合作伙伴使用 Cookie 及类似跟踪技术，跟踪您在服务中的活动并保存某些信息。您可以设置浏览器拒绝所有 Cookie，或在发送 Cookie 时予以提示。`,
                                                            }),
                                                          }),
                                                        ],
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
                                                        children: `来自第三方的信息`,
                                                      }),
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                        },
                                                        children: `如果您通过 AWS Marketplace 等合作伙伴渠道订阅 Tier0，我们可能会从这些合作伙伴处收到相关信息。`,
                                                      }),
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                        },
                                                      }),
                                                    ],
                                                  }),
                                                ],
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
                                                  children: `我们如何使用您的信息`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `我们将收集的信息用于以下业务目的：`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: [
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                    },
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      },
                                                      children: `服务运营：为您配置统一命名空间（UNS）、管理 MQTT Broker，并启动计算资源。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `计费与计量：根据您的活跃连接数、数据吞吐量和存储等级计算使用费用。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `安全与完整性：检测“邻居干扰”问题、防范经由 MQTT 发起的 DDoS 攻击，并监控未经授权的访问尝试。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `AI 模型改进（有限范围）：我们可能分析匿名化的提示词，以提高 AI 模型的准确性。未经您的明确同意，我们不会使用您专有的客户内容（例如私有 UNS 结构、原始设备数据或数据库记录）来训练通用公共 AI 模型。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `服务通知：我们可能向您发送与服务相关的非促销消息，例如安全警报、账单收据、系统通知和重要产品更新。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `营销通讯：我们可能发送新闻简报、活动邀请和促销更新。在要求事先明确同意的司法管辖区，我们仅在您选择同意后发送营销信息。您可以随时通过邮件中的退订链接或账户设置退出。`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
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
                                                  children: `数据架构与分处理者`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: `Tier0 基于先进的云基础设施构建，以确保工业级可靠性。我们使用以下主要分处理者：`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: [
                                                  /*#__PURE__*/ l(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: [
                                                      /*#__PURE__*/ c(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `rgb(51, 51, 51)`,
                                                        },
                                                        children: `Amazon Web Services（AWS）：我们的主要基础设施提供商。`,
                                                      }),
                                                      /*#__PURE__*/ l(`ul`, {
                                                        dir: `auto`,
                                                        children: [
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `rgb(51, 51, 51)`,
                                                              },
                                                              children: `热数据（实时）：活跃的 UNS 配置、Node-RED 数据流和运营数据库（PostgreSQL）托管在采用高可用（HA）配置的 AWS EC2 实例上。`,
                                                            }),
                                                          }),
                                                          /*#__PURE__*/ c(`li`, {
                                                            "data-preset-tag": `p`,
                                                            children: /*#__PURE__*/ c(`p`, {
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `rgb(51, 51, 51)`,
                                                              },
                                                              children: `冷数据（历史）：历史遥测数据、Notebook 归档和备份存储在 AWS S3 及相关表格式中，以经济高效的方式提供长期持久性。`,
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `AI 提供商：我们通过 AI 网关，将您的自然语言提示词（不包括底层数据库）传输至 OpenAI、Google Gemini 或 Anthropic 等提供商，用于生成 MES 应用和逻辑流程。这些传输以透传方式进行。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `Stripe：用于安全的支付处理。`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `所有分处理者均受数据处理协议（DPA）约束，以确保遵守适用法律。`,
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
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
                                                  children: `安全与隔离`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `我们采用行业标准的技术与组织措施来保护您的数据：`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: [
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                    },
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      },
                                                      children: `加密：对所有传输中的数据（包括 MQTT 和 HTTP 流量）使用 TLS 1.2／1.3，对静态存储的数据使用 AES-256。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `租户隔离：我们在 MQTT Broker 层实施严格的访问控制列表（ACL），确保一个租户无法订阅其他租户的主题。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `身份验证：您负责维护账户凭证以及边缘设备客户端 ID／密钥的安全。`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
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
                                                  children: `工业 AI 与安全免责声明（重要）`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `不构成工业安全建议：我们的服务提供 AI 辅助工具，可生成代码、Node-RED 数据流和 MES 控制逻辑。但是，AI 模型具有概率性，可能产生幻觉或错误。Tier0 的 AI 输出不能替代专业的工业工程判断。`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                dir: `auto`,
                                                children: [
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      },
                                                      children: `您的责任：在将任何 AI 生成的代码、配置或逻辑部署到生产设备或运营技术（OT）环境之前，您始终独立承担审查、测试和验证这些内容的全部责任。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    style: {
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `责任：对于因依赖 AI 生成的输出而造成的任何实物损坏、安全事故、生产停机或数据丢失，Tier0 不承担责任。`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
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
                                                  children: `国际数据传输`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `Tier0 在全球范围内运营。您的个人信息和客户内容可能被传输至您居住国以外的国家并在那里处理，主要为美国，托管于 AWS 区域。`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: [
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                    },
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      },
                                                      children: `新加坡用户：在将个人数据传输至新加坡境外时，我们遵守《个人数据保护法》（PDPA）。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `欧洲经济区／英国用户：我们依据合法的数据传输机制，例如标准合同条款（SCC）和欧盟—美国数据隐私框架（如适用）。`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
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
                                                  children: `您的权利与选择`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `根据您所在的地区（例如新加坡、中国、欧洲经济区或英国），您可能就个人信息享有特定权利，包括：`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: [
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                    },
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      },
                                                      children: `访问与更正：访问、更正或更新账户信息的权利。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `删除：请求删除您的个人信息的权利。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `退出：通过退订链接或账户设置，退出营销通讯或特定 AI 数据使用计划的权利。`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `管理客户内容：由于 Tier0 是客户内容的数据处理者，如果您或您的最终用户希望行使客户内容中相关数据的权利，例如删除特定 MQTT 消息历史记录，您必须直接使用平台的删除工具。`,
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
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
                                                  children: `数据保留`,
                                                }),
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: [
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                    },
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      },
                                                      children: `账户数据：在您的账户处于活跃状态期间予以保留。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `热数据：在服务运营所需的期间，保留在活跃数据库中。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `冷数据（S3）：根据您配置的保留策略或订阅套餐予以保留。`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `删除：账户终止后，我们将在 30 天内删除您的客户内容，但须遵循我们的备份周期。`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
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
                                                  children: `联系我们`,
                                                }),
                                              }),
                                              /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `如果您对本政策、Tier0 的数据处理方式有任何疑问，或希望行使隐私权利，请通过以下方式联系我们：`,
                                              }),
                                              /*#__PURE__*/ l(`ul`, {
                                                dir: `auto`,
                                                style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                                children: [
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                    },
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                      },
                                                      children: `电子邮箱：privacypolicy@tier0.dev`,
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ c(`li`, {
                                                    "data-preset-tag": `p`,
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `地址：1 Fusionpolis Link #03-03/03-04, Nexus at One-North, Singapore 138542`,
                                                    }),
                                                  }),
                                                ],
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
                                F(`v1`, p) ??
                                /*#__PURE__*/ l(a, {
                                  children: [
                                    /*#__PURE__*/ l(`p`, {
                                      className: `framer-styles-preset-81u0hx`,
                                      "data-styles-preset": `IIMP8Vr9g`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                      },
                                      children: [
                                        `本隐私政策（以下简称“本政策”）说明 `,
                                        /*#__PURE__*/ c(`strong`, { children: `Tier0` }),
                                        `（以下简称“Tier0”或“我们”）在您使用我们的网站和工业物联网软件即服务产品时，如何收集、存储、使用和披露您的相关信息。这些产品包括 Tier0 云平台、UNS Manager、连接服务、Node-RED 实例、数据 Notebook 和 AI 应用生成器（统称“服务”）。`,
                                      ],
                                    }),
                                    /*#__PURE__*/ c(`p`, {
                                      className: `framer-styles-preset-81u0hx`,
                                      "data-styles-preset": `IIMP8Vr9g`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                      },
                                      children: `本政策纳入我们的服务条款及任何适用的数据处理协议（DPA）。`,
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
                                                children: `适用范围：重要区分（“控制者”与“处理者”的角色）`,
                                              }),
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: `为明确说明并确保符合法律要求，特别是针对我们的 B2B 客户，我们区分以下两类数据：`,
                                            }),
                                            /*#__PURE__*/ l(`ul`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: [
                                                /*#__PURE__*/ l(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: [
                                                    /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `A. 我们收集的有关您的信息（Tier0 作为控制者）`,
                                                    }),
                                                    /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `这是指我们为提供服务而收集的数据，例如您的账户注册信息、账单详情和平台使用日志。本政策适用于此类信息。`,
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ l(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: [
                                                    /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `B. 客户内容（Tier0 作为处理者）`,
                                                    }),
                                                    /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `这是指您上传、传输、生成或存储在服务中的工业数据、MQTT 报文、Node-RED 数据流、Python 脚本、数据库和 AI 提示词。技术信息：IP 地址、浏览器类型、设备信息、操作系统和使用数据。`,
                                                    }),
                                                    /*#__PURE__*/ l(`ul`, {
                                                      dir: `auto`,
                                                      children: [
                                                        /*#__PURE__*/ c(`li`, {
                                                          "data-preset-tag": `p`,
                                                          children: /*#__PURE__*/ c(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `rgb(51, 51, 51)`,
                                                            },
                                                            children: `Tier0 仅代表您处理客户内容。您（客户）是数据控制者，Tier0 是数据处理者。`,
                                                          }),
                                                        }),
                                                        /*#__PURE__*/ c(`li`, {
                                                          "data-preset-tag": `p`,
                                                          children: /*#__PURE__*/ c(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `rgb(51, 51, 51)`,
                                                            },
                                                            children: `您对客户内容中数据的收集、合法性、准确性和隐私负责。`,
                                                          }),
                                                        }),
                                                        /*#__PURE__*/ c(`li`, {
                                                          "data-preset-tag": `p`,
                                                          children: /*#__PURE__*/ c(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `rgb(51, 51, 51)`,
                                                            },
                                                            children: `最终用户的隐私：如果您的客户内容包含员工或最终用户的个人数据（例如 MQTT 报文中的员工 ID），您负责向他们提供相关隐私告知。Tier0 与您的最终用户不存在直接关系。`,
                                                          }),
                                                        }),
                                                      ],
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
                                                children: `我们收集的信息`,
                                              }),
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: `我们通过三种方式收集信息：您提供的信息、我们自动收集的信息，以及来自第三方的信息。`,
                                            }),
                                            /*#__PURE__*/ l(`ul`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: [
                                                /*#__PURE__*/ l(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: [
                                                    /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `您提供的信息`,
                                                    }),
                                                    /*#__PURE__*/ l(`ul`, {
                                                      dir: `auto`,
                                                      children: [
                                                        /*#__PURE__*/ c(`li`, {
                                                          "data-preset-tag": `p`,
                                                          children: /*#__PURE__*/ c(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `rgb(51, 51, 51)`,
                                                            },
                                                            children: `账户注册：姓名、工作邮箱、公司名称和身份验证凭证（经过哈希处理的密码或 SSO 令牌）。`,
                                                          }),
                                                        }),
                                                        /*#__PURE__*/ c(`li`, {
                                                          "data-preset-tag": `p`,
                                                          children: /*#__PURE__*/ c(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `rgb(51, 51, 51)`,
                                                            },
                                                            children: `账单信息：我们使用 Stripe 作为支付处理服务商。Tier0 不存储完整的信用卡号码。`,
                                                          }),
                                                        }),
                                                        /*#__PURE__*/ c(`li`, {
                                                          "data-preset-tag": `p`,
                                                          children: /*#__PURE__*/ c(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `rgb(51, 51, 51)`,
                                                            },
                                                            children: `工业业务背景：使用我们的 AI 应用生成器时，您可能会提供描述工厂流程的提示词，例如“为 A 产线创建一个 OEE 看板”。`,
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ l(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: [
                                                    /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `我们自动收集的信息（使用数据）`,
                                                    }),
                                                    /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `在您使用服务时，我们会自动收集遥测数据，以确保系统稳定、安全以及计费准确。此类数据通常经过汇总：`,
                                                    }),
                                                    /*#__PURE__*/ l(`ul`, {
                                                      dir: `auto`,
                                                      children: [
                                                        /*#__PURE__*/ c(`li`, {
                                                          "data-preset-tag": `p`,
                                                          children: /*#__PURE__*/ c(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `rgb(51, 51, 51)`,
                                                            },
                                                            children: `连接指标：活跃 MQTT 连接数、消息吞吐速率（MB/s）、协议版本和错误率。`,
                                                          }),
                                                        }),
                                                        /*#__PURE__*/ c(`li`, {
                                                          "data-preset-tag": `p`,
                                                          children: /*#__PURE__*/ c(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `rgb(51, 51, 51)`,
                                                            },
                                                            children: `计算资源用量：您的 Node-RED 实例和 Notebook 内核消耗的 CPU／内存资源。`,
                                                          }),
                                                        }),
                                                        /*#__PURE__*/ c(`li`, {
                                                          "data-preset-tag": `p`,
                                                          children: /*#__PURE__*/ c(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `rgb(51, 51, 51)`,
                                                            },
                                                            children: `日志数据：用于故障排查和安全审计的 IP 地址、浏览器类型、设备标识符、页面浏览记录和 API 请求时间戳。`,
                                                          }),
                                                        }),
                                                        /*#__PURE__*/ c(`li`, {
                                                          "data-preset-tag": `p`,
                                                          children: /*#__PURE__*/ c(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `rgb(51, 51, 51)`,
                                                            },
                                                            children: `我们和合作伙伴使用 Cookie 及类似跟踪技术，跟踪您在服务中的活动并保存某些信息。您可以设置浏览器拒绝所有 Cookie，或在发送 Cookie 时予以提示。`,
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ l(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: [
                                                    /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `来自第三方的信息`,
                                                    }),
                                                    /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `如果您通过 AWS Marketplace 等合作伙伴渠道订阅 Tier0，我们可能会从这些合作伙伴处收到相关信息。`,
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
                                              children: `我们将收集的信息用于以下业务目的：`,
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
                                                    children: `服务运营：为您配置统一命名空间（UNS）、管理 MQTT Broker，并启动计算资源。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `计费与计量：根据您的活跃连接数、数据吞吐量和存储等级计算使用费用。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `安全与完整性：检测“邻居干扰”问题、防范经由 MQTT 发起的 DDoS 攻击，并监控未经授权的访问尝试。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `AI 模型改进（有限范围）：我们可能分析匿名化的提示词，以提高 AI 模型的准确性。未经您的明确同意，我们不会使用您专有的客户内容（例如私有 UNS 结构、原始设备数据或数据库记录）来训练通用公共 AI 模型。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `服务通知：我们可能向您发送与服务相关的非促销消息，例如安全警报、账单收据、系统通知和重要产品更新。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `营销通讯：我们可能发送新闻简报、活动邀请和促销更新。在要求事先明确同意的司法管辖区，我们仅在您选择同意后发送营销信息。您可以随时通过邮件中的退订链接或账户设置退出。`,
                                                  }),
                                                }),
                                              ],
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
                                                children: `数据架构与分处理者`,
                                              }),
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: `Tier0 基于先进的云基础设施构建，以确保工业级可靠性。我们使用以下主要分处理者：`,
                                            }),
                                            /*#__PURE__*/ l(`ul`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: [
                                                /*#__PURE__*/ l(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: [
                                                    /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `rgb(51, 51, 51)`,
                                                      },
                                                      children: `Amazon Web Services（AWS）：我们的主要基础设施提供商。`,
                                                    }),
                                                    /*#__PURE__*/ l(`ul`, {
                                                      dir: `auto`,
                                                      children: [
                                                        /*#__PURE__*/ c(`li`, {
                                                          "data-preset-tag": `p`,
                                                          children: /*#__PURE__*/ c(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `rgb(51, 51, 51)`,
                                                            },
                                                            children: `热数据（实时）：活跃的 UNS 配置、Node-RED 数据流和运营数据库（PostgreSQL）托管在采用高可用（HA）配置的 AWS EC2 实例上。`,
                                                          }),
                                                        }),
                                                        /*#__PURE__*/ c(`li`, {
                                                          "data-preset-tag": `p`,
                                                          children: /*#__PURE__*/ c(`p`, {
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `rgb(51, 51, 51)`,
                                                            },
                                                            children: `冷数据（历史）：历史遥测数据、Notebook 归档和备份存储在 AWS S3 及相关表格式中，以经济高效的方式提供长期持久性。`,
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `AI 提供商：我们通过 AI 网关，将您的自然语言提示词（不包括底层数据库）传输至 OpenAI、Google Gemini 或 Anthropic 等提供商，用于生成 MES 应用和逻辑流程。这些传输以透传方式进行。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `Stripe：用于安全的支付处理。`,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: `所有分处理者均受数据处理协议（DPA）约束，以确保遵守适用法律。`,
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
                                                children: `安全与隔离`,
                                              }),
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: `我们采用行业标准的技术与组织措施来保护您的数据：`,
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
                                                    children: `加密：对所有传输中的数据（包括 MQTT 和 HTTP 流量）使用 TLS 1.2／1.3，对静态存储的数据使用 AES-256。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `租户隔离：我们在 MQTT Broker 层实施严格的访问控制列表（ACL），确保一个租户无法订阅其他租户的主题。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `身份验证：您负责维护账户凭证以及边缘设备客户端 ID／密钥的安全。`,
                                                  }),
                                                }),
                                              ],
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
                                                children: `工业 AI 与安全免责声明（重要）`,
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
                                              children: `不构成工业安全建议：我们的服务提供 AI 辅助工具，可生成代码、Node-RED 数据流和 MES 控制逻辑。但是，AI 模型具有概率性，可能产生幻觉或错误。Tier0 的 AI 输出不能替代专业的工业工程判断。`,
                                            }),
                                            /*#__PURE__*/ l(`ul`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `rgb(51, 51, 51)`,
                                              },
                                              children: [
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `您的责任：在将任何 AI 生成的代码、配置或逻辑部署到生产设备或运营技术（OT）环境之前，您始终独立承担审查、测试和验证这些内容的全部责任。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `责任：对于因依赖 AI 生成的输出而造成的任何实物损坏、安全事故、生产停机或数据丢失，Tier0 不承担责任。`,
                                                  }),
                                                }),
                                              ],
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
                                                children: `国际数据传输`,
                                              }),
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                              },
                                              children: `Tier0 在全球范围内运营。您的个人信息和客户内容可能被传输至您居住国以外的国家并在那里处理，主要为美国，托管于 AWS 区域。`,
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
                                                    children: `新加坡用户：在将个人数据传输至新加坡境外时，我们遵守《个人数据保护法》（PDPA）。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `欧洲经济区／英国用户：我们依据合法的数据传输机制，例如标准合同条款（SCC）和欧盟—美国数据隐私框架（如适用）。`,
                                                  }),
                                                }),
                                              ],
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
                                                children: `您的权利与选择`,
                                              }),
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: `根据您所在的地区（例如新加坡、中国、欧洲经济区或英国），您可能就个人信息享有特定权利，包括：`,
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
                                                    children: `访问与更正：访问、更正或更新账户信息的权利。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `删除：请求删除您的个人信息的权利。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `退出：通过退订链接或账户设置，退出营销通讯或特定 AI 数据使用计划的权利。`,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgb(51, 51, 51)` },
                                              children: `管理客户内容：由于 Tier0 是客户内容的数据处理者，如果您或您的最终用户希望行使客户内容中相关数据的权利，例如删除特定 MQTT 消息历史记录，您必须直接使用平台的删除工具。`,
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
                                                    children: `账户数据：在您的账户处于活跃状态期间予以保留。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `热数据：在服务运营所需的期间，保留在活跃数据库中。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `冷数据（S3）：根据您配置的保留策略或订阅套餐予以保留。`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `删除：账户终止后，我们将在 30 天内删除您的客户内容，但须遵循我们的备份周期。`,
                                                  }),
                                                }),
                                              ],
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
                                              children: `如果您对本政策、Tier0 的数据处理方式有任何疑问，或希望行使隐私权利，请通过以下方式联系我们：`,
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
                                                    children: `电子邮箱：privacypolicy@tier0.dev`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(`li`, {
                                                  "data-preset-tag": `p`,
                                                  children: /*#__PURE__*/ c(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `rgb(51, 51, 51)`,
                                                    },
                                                    children: `地址：1 Fusionpolis Link #03-03/03-04, Nexus at One-North, Singapore 138542`,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              className: `framer-sycefa`,
                              fonts: [`Inter`, `Inter-Bold`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    /*#__PURE__*/ l(u.div, {
                      className: `framer-15nj0tc`,
                      "data-framer-name": `header`,
                      layout: M,
                      children: [
                        N() &&
                          /*#__PURE__*/ c(T, {
                            breakpoint: E,
                            overrides: {
                              OpCEMGpAF: { height: 498, width: void 0, y: (g?.y || 0) + 12415 },
                            },
                            children: /*#__PURE__*/ c(b, {
                              height: 438,
                              width: g?.width || `100vw`,
                              y: (g?.y || 0) + 11532,
                              children: /*#__PURE__*/ c(C, {
                                className: `framer-u9d3bh-container hidden-jaa7aj`,
                                nodeId: `nCPSDXsjZ`,
                                scopeId: `KJSVessEO`,
                                children: /*#__PURE__*/ c(T, {
                                  breakpoint: E,
                                  overrides: { OpCEMGpAF: { variant: K(`vXscR1iJC`) } },
                                  children: /*#__PURE__*/ c(D, {
                                    height: `100%`,
                                    id: `nCPSDXsjZ`,
                                    layoutId: `nCPSDXsjZ`,
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
                              r7mJiE2CQ: {
                                height: 498,
                                width: `max(${g?.width || `100vw`}, 1px)`,
                                y: (g?.y || 0) + 12433,
                              },
                            },
                            children: /*#__PURE__*/ c(b, {
                              children: /*#__PURE__*/ c(C, {
                                className: `framer-1t7v4wu-container hidden-b1aenj hidden-1phwgbh`,
                                nodeId: `AL29tPM7J`,
                                scopeId: `KJSVessEO`,
                                children: /*#__PURE__*/ c(D, {
                                  height: `100%`,
                                  id: `AL29tPM7J`,
                                  layoutId: `AL29tPM7J`,
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
        `.framer-UcUja.framer-14rmnj6, .framer-UcUja .framer-14rmnj6 { display: block; }`,
        `.framer-UcUja.framer-b1aenj { align-content: center; align-items: center; background-color: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-UcUja .framer-12e2dzq-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 4; }`,
        `.framer-UcUja .framer-1q52uh9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1240px; }`,
        `.framer-UcUja .framer-1uqveoa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 50px 0px 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-UcUja .framer-45ngaq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-UcUja .framer-14upcej, .framer-UcUja .framer-1k6y1fn { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: 1190px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-UcUja .framer-sycefa { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-UcUja .framer-15nj0tc { align-content: center; align-items: center; background-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: 438px; justify-content: flex-start; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-UcUja .framer-u9d3bh-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
        `.framer-UcUja .framer-1t7v4wu-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...N,
        ..._e,
        ...A,
        ...pe,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-UcUja.framer-b1aenj { width: 810px; } .framer-UcUja .framer-1q52uh9 { flex-direction: row; padding: 130px 0px 0px 0px; width: 810px; z-index: 1; } .framer-UcUja .framer-1uqveoa { padding: 0px 60px 0px 60px; width: 810px; } .framer-UcUja .framer-14upcej, .framer-UcUja .framer-1k6y1fn { width: 730px; } .framer-UcUja .framer-15nj0tc { flex-direction: row; height: min-content; } .framer-UcUja .framer-1t7v4wu-container { flex: 1 0 0px; width: 1px; }}`,
        `@media (max-width: 809.98px) { .framer-UcUja.framer-b1aenj, .framer-UcUja .framer-1q52uh9 { width: 390px; } .framer-UcUja .framer-1uqveoa { gap: 32px; order: 0; padding: 120px 40px 0px 40px; } .framer-UcUja .framer-14upcej, .framer-UcUja .framer-1k6y1fn { width: 310px; } .framer-UcUja .framer-15nj0tc { gap: 0px; height: min-content; } .framer-UcUja .framer-u9d3bh-container { flex: none; height: auto; width: auto; }}`,
      ]),
      (Q = g(X, Z, `framer-UcUja`)),
      (Q.displayName = `Policy`),
      (Q.defaultProps = { height: 3878, width: 1440 }),
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
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerKJSVessEO`,
            slots: [],
            annotations: {
              framerScrollSections: `false`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"r7mJiE2CQ":{"layout":["fixed","auto"]},"OpCEMGpAF":{"layout":["fixed","auto"]}}}`,
              framerAutoSizeImages: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerContractVersion: `1`,
              framerColorSyntax: `true`,
              framerDisplayContentsDiv: `false`,
              framerImmutableVariables: `true`,
              framerResponsiveScreen: `true`,
              framerIntrinsicWidth: `1440`,
              framerIntrinsicHeight: `3878`,
              framerAcceptsLayoutTemplate: `true`,
              framerComponentViewportWidth: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
we();
export { $ as __FramerMetadata__, Q as default, H as queryParamNames };
//# sourceMappingURL=HE4Fm_ND0hZLxnMnHOpYi--wVPVmnNcYXS2taZrhj0k.l-79RHFU.mjs.map
