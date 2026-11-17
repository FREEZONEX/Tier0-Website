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
import { n as be, r as xe } from "./QF1mELLnB.DWYmLcjI.mjs?v=20261116-migration-v2";
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
    (_(), (I = { AYmst8Nt3: new w(() => import("./QF1mELLnB-0.B3hA018W.mjs?v=20261116-migration-v2")) }));
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
        bU00Kd5Fu: `(max-width: 809.98px)`,
        SHBXJcVJP: `(min-width: 810px) and (max-width: 1439.98px)`,
        xp12xJSHL: `(min-width: 1440px)`,
      }),
      (V = () => typeof document < `u`),
      (H = []),
      (U = `framer-Zf3Fl`),
      (W = {
        bU00Kd5Fu: `framer-v-1werkqf`,
        SHBXJcVJP: `framer-v-1dfaefz`,
        xp12xJSHL: `framer-v-h3hsx7`,
      }),
      (G = (e, t, n) => (e && t ? `position` : n)),
      (K = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (q = { Desktop: `xp12xJSHL`, Phone: `bU00Kd5Fu`, Tablet: `SHBXJcVJP` }),
      (J = ({ value: e }) =>
        v()
          ? null
          : /*#__PURE__*/ c(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Y = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: q[r.variant] ?? r.variant ?? `xp12xJSHL`,
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
          k = h(U, de, ye, he, ue),
          A = i(S)?.isLayoutTemplate,
          j = !!i(te)?.transition?.layout,
          M = G(A, j);
        Ce(d);
        let N = () => !V() || E !== `SHBXJcVJP`,
          P = () => !V() || E === `SHBXJcVJP`;
        return (
          ce({}),
          /*#__PURE__*/ c(S.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: q,
              primaryVariantId: `xp12xJSHL`,
              variantClassNames: W,
            },
            children: /*#__PURE__*/ l(ne, {
              id: y ?? `QF1mELLnB`,
              children: [
                /*#__PURE__*/ c(J, {
                  value: `html body { background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ l(u.div, {
                  ...x,
                  className: h(k, `framer-h3hsx7`, v),
                  ref: s,
                  style: { ..._ },
                  children: [
                    /*#__PURE__*/ c(b, {
                      height: 64,
                      width: `100vw`,
                      y: 0,
                      children: /*#__PURE__*/ c(C, {
                        className: `framer-1f06n9a-container`,
                        layout: M,
                        layoutScroll: !0,
                        nodeId: `xKtxBuD3t`,
                        scopeId: `QF1mELLnB`,
                        children: /*#__PURE__*/ c(T, {
                          breakpoint: E,
                          overrides: {
                            bU00Kd5Fu: { variant: K(`Svy4sINhA`) },
                            SHBXJcVJP: { variant: K(`Gw5VboM5c`) },
                          },
                          children: /*#__PURE__*/ c(O, {
                            eVOFjxm0w: `var(--token-fcaa307f-078f-4ea1-af34-d51bb82ca05a, rgba(255, 255, 255, 0))`,
                            height: `100%`,
                            id: `xKtxBuD3t`,
                            jQcddTFoz: !0,
                            layoutId: `xKtxBuD3t`,
                            style: { width: `100%` },
                            variant: K(`LbFcBhD3w`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ c(u.div, {
                      className: `framer-l7e6sp`,
                      "data-framer-name": `01`,
                      layout: M,
                      children: /*#__PURE__*/ l(`div`, {
                        className: `framer-vpmkz5`,
                        children: [
                          /*#__PURE__*/ l(`div`, {
                            className: `framer-gpl4tg`,
                            children: [
                              /*#__PURE__*/ c(T, {
                                breakpoint: E,
                                overrides: { bU00Kd5Fu: { verticalAlignment: `bottom` } },
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
                                        children: `服务条款`,
                                      }),
                                    }),
                                  className: `framer-1tr1dyr`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              /*#__PURE__*/ c(T, {
                                breakpoint: E,
                                overrides: {
                                  bU00Kd5Fu: {
                                    children: /*#__PURE__*/ c(a, {
                                      children: /*#__PURE__*/ l(`h6`, {
                                        className: `framer-styles-preset-1hrd6to`,
                                        "data-styles-preset": `o4jsOQ1eV`,
                                        dir: `auto`,
                                        style: { "--framer-text-color": `rgba(9, 9, 9, 0.6)` },
                                        children: [
                                          /*#__PURE__*/ c(`strong`, { children: `最后更新时间：` }),
                                          `2026年10月30日`,
                                        ],
                                      }),
                                    }),
                                    verticalAlignment: `bottom`,
                                  },
                                  SHBXJcVJP: {
                                    children: /*#__PURE__*/ c(a, {
                                      children: /*#__PURE__*/ l(`h6`, {
                                        className: `framer-styles-preset-1hrd6to`,
                                        "data-styles-preset": `o4jsOQ1eV`,
                                        dir: `auto`,
                                        style: { "--framer-text-color": `rgba(9, 9, 9, 0.6)` },
                                        children: [
                                          /*#__PURE__*/ c(`strong`, { children: `最后更新时间：` }),
                                          `2026年10月30日`,
                                        ],
                                      }),
                                    }),
                                  },
                                },
                                children: /*#__PURE__*/ c(f, {
                                  __fromCanvasComponent: !0,
                                  children:
                                    F(`v1`, p) ??
                                    /*#__PURE__*/ c(a, {
                                      children: /*#__PURE__*/ l(`h6`, {
                                        className: `framer-styles-preset-1hrd6to`,
                                        "data-styles-preset": `o4jsOQ1eV`,
                                        dir: `auto`,
                                        style: { "--framer-text-color": `rgba(9, 9, 9, 0.6)` },
                                        children: [
                                          /*#__PURE__*/ c(`strong`, { children: `最后更新时间：` }),
                                          `2026年10月30日`,
                                        ],
                                      }),
                                    }),
                                  className: `framer-qa3am8`,
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
                              bU00Kd5Fu: {
                                children:
                                  F(`v3`, p) ??
                                  /*#__PURE__*/ c(a, {
                                    children: /*#__PURE__*/ l(`ol`, {
                                      className: `framer-styles-preset-1jf1i0p`,
                                      "data-styles-preset": `GMGpjhxIs`,
                                      dir: `auto`,
                                      children: [
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          style: {
                                            "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                          },
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                              },
                                              children: ` 适用范围与协议接受`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `本服务条款（简称“本条款”）由 FREEZONEX PTE. LTD.（简称“Tier0”或“我们”）与接受本条款的个人或其所代表的机构（简称“您”）订立。本条款适用于您购买或使用 Tier0 Cloud、Tier0 Enterprise 以及相关软件、API、文档和技术支持服务。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `您可以通过勾选明确接受选项、签署包含本条款的订单，或通过其他有效确认方式接受本条款。您必须具备签署合同的法定民事行为能力，并已获得代表所代理机构签署具有约束力协议的合法授权。仅访问我们的网站并不构成付费订阅关系。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `单独签署的书面协议和订单中的明确约定优先于本条款。涉及个人数据处理时，双方签署的数据处理协议优先适用。服务说明用于界定购买的功能特性与用量限额，并不单独变更已约定的价格、责任限制或其他法律条款。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `p`,
                                          children: [
                                            /*#__PURE__*/ c(`p`, {
                                              dir: `auto`,
                                              children: `服务与软件许可`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `Cloud 版本由我们托管提供。Enterprise 版本部署在由您或您指定的提供商管理的环境中。具体功能、部署范围、实例数、用户数、应用程序数量、容量、服务期限和技术支持等级均以您确认的订单或结账页面为准。产品路线图、演示和预览版功能不构成对交付未发布功能的承诺。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `在约定的期限和范围内，我们授予您针对合法业务运营的非排他性服务访问权或软件使用许可，包括订单允许的应用程序发布及授权最终用户访问。除订单另有明确许可外，您不得转售 Tier0 平台本身、出租平台账户，或为无关第三方提供平台托管服务。在 Tier0 上构建业务应用程序并不会将该`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `应用程序的所有权转让给 Tier0。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `账户与企业组织管理`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `请确保账户及账单信息真实准确。妥善管理管理员角色、成员访问权限、API 密钥及其他身份凭证，并及时撤销不再需要的访问权限。组织管理员可在产品功能权限范围内管理工作区、成员及相关内容。您须向您的用户履行所有必要的通知义务。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `您应对自身及授权用户的操作行为负责，但因我们的违约或过错导致的未授权访问除外。如发现疑似账户滥用、凭据泄露或其他安全隐患，请立即通过“联系我们”渠道通知，并配合采取合理的防护措施。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: ` 合规使用规范`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `严禁将本服务用于违法犯罪、侵权、欺诈、传播恶意软件、未授权访问或破坏系统运行等活动。不得绕过权限控制、计费计量、许可限制或用量限额，不得干扰其他客户正常使用，亦不得获取其他客户的非公开数据。除适用法律或开源许可证明确允许外，严禁对 Tier0 专有软件进行反向工程，或移除任何专有权利声明。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `在对我们托管的系统进行渗透测试、压力测试或漏洞验证前，必须获得书面授权并严格在约定范围内进行。您可通过“联系我们”提交漏洞报告。提交漏洞报告并不赋予您访问他人数据或持续利用该漏洞的权利。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: ` 客户内容与知识产权`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `您或相关权利人保留对客户内容的全部权利，包括您上传、连接、创建或存储的数据、业务应用程序、自有代码、配置、文件和提示词（Prompts）。您须确保拥有提供该等内容并授权处理所需的全部合法权利。Tier0 保留对其平台、通用工具、文档和品牌标识的全部权利。第三方及开源组件继续受其既有权利与许可证的约束。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `您授权我们仅在履行本协议、提供技术支持、保障系统安全以及遵守法律法规所必需的范围内处理客户内容。该授权不构成所有权的出售或转让，亦未授权我们将非公开客户内容用于商业宣传或训练通用 AI 模型；上述用途均须获得单独的明确书面授权。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `我们可利用您主动提交的产品反馈来改进服务。此项许可不涵盖客户内容或您的商业保密信息，且未经您同意，我们不得在宣传材料中使用您的名称、商标或客户案例。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: ` 数据保护与网络安全`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `我们的《隐私政策》详细说明了与账户、联系人及网站访问相关的个人信息处理规则。当我们代表您处理客户内容中的个人数据时，应严格遵循适用法律、您的合法指令以及双方签订的数据处理协议。在开展相关数据处理前，须确保已完成必要协议的签署。《隐私政策》不可替代法定必须签署的数据处理协议。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `我们负责落实自身管控范围内合理的技术与组织安全防护措施，并在发生安全事件时履行法定义务和合同约定的通知义务。您应自行负责权限配置、内容合规性、业务数据备份，以及由您控制的终端、网络和集成系统的安全性。除另有约定外，Enterprise 基础架构的运维与升级由您全权负责。此类职责划分不免除任何一方自身的合同义务或法定义务。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `数据存储地域、跨境传输、次级数据处理者、备份策略及恢复目标均受适用服务说明和数据处理协议的约束。如需提交涉及特定行业合规认证、本地化存储或强监管要求的数据，请在提交前与我们确认合规方案。单独使用 Tier0 并不等同于自动满足该等合规要求。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `AI、自动化与工业场景应用`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `AI 生成的应用程序、代码、查询语句、分析结果和建议可能存在偏差、不完整或与其他用户的输出相似的情况。在实际应用前，请务必进行人工审核、功能测试与严格的安全校验。请勿将生成结果直接作为已获验证的专业意见或工业生产安全的绝对保证。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `在您与我们之间，您可在本条款、适用法律和第三方许可证允许的范围内使用生成内容。内容生成行为不赋予我们对您自有内容的任何权利。我们不保证生成结果具备排他性、符合知识产权保护条件，或完全不存在第三方权利瑕疵。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `请严格按照任务最小必要原则为智能体（Agent）、工作流和第三方模型分配调用权限。针对生产环境写入、工业设备控制等关键业务操作，必须配置充分的人工审批、故障备份与紧急停机（Stop）机制。除非有明确的书面约定并经过严格验证，Tier0 不可用于替代紧急停机、安全联锁或生命支持控制等安全关键型系统（Safety-Critical Systems）。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `在启用第三方模型或建立外部集成连接前，请审阅其数据处理范围、留存规则及适用条款。与 Tier0 完成集成这一事实本身，并不意味着第三方获得了对客户内容的无限制访问权。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: ` 第三方服务与开源软件`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `您自主选择或接入的云资源、大模型、插件、数据源及其他第三方服务，均受其各自合同条款、收费标准及许可协议的约束。我们无法控制其独立运作，但仍对我们自身约定的集成接口与服务承诺承担责任。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `开源软件均依照其附带的开源许可证提供。本条款不限制该等许可证明确授予的权利，亦不对独立的开源软件提供默认的商业支持或 SLA 保障。分发应用程序或组件时，请务必遵守相应的开源许可、署名和声明义务。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `费用、续订与终止订阅`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `费用明细、结算币种、税费、计费周期、用量计量方式及付款期限均以您接受的订单或结账页面为准。新增席位、计算与存储扩容等增值项将按照向您明示并经您认可的规则计费。本条款不独立产生任何未予披露的收费项目。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `仅在订单或结账页面有明确说明且经您同意的情况下，订阅才会自动续订。您可在续订前通过管理控制台或“联系我们”取消续订。除另有约定外，取消操作将在当前付费周期届满时生效，并停止扣缴下一周期的续订费用。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `除法律强制规定、订单另有约定，或因我方违约及提前终止而按本条款规定退款外，已使用的服务周期以及您主动停止使用的剩余周期通常不予退款。续订价格调整将至少提前 30 天通知，已生效订单在当前有效期内的价格不受追溯影响。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `对于无争议的逾期未付费用，我们在发出书面催缴通知并给予至少 14 天宽限期后，有权暂停受影响的付费服务。双方应对在宽限期内提出的合理且证据充分的账单异议展开核实；无争议部分的款项仍应按期支付。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `更新、设备维护与服务等级`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `Cloud 版本通常由系统统一进行集中更新。Enterprise 版本的安全补丁和功能更新通常通过指定版本的容器镜像、部署文件或离线安装包提供，由您按照指引完成部署。支持的软件版本生命周期、升级兼容性、技术支持时间及响应时效目标以您的订单及适用的技术支持政策为准。本条款并不构成对所有历史版本提供永久设备维护的承诺。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `若计划下线已购的核心关键功能或引入重大不兼容变更，我们通常会提前至少 30 天通知，并提供可行的迁移方案。如因紧急安全隐患、法定合规要求或我方不可控的第三方限制而导致无法提前通知，我们将在可行范围内第一时间予以说明并采取合理补救措施。若某项变更导致当前付费服务的功能受到重大不利削减且无法提供合理替代方案，您有权终止受影响的服务部分，并按比例获得未使用周期的预付费用退款。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `系统可用性、恢复时效目标、服务抵扣额度（Service Credits）、7×24 小时技术支持以及固定故障修复时限，仅在 SLA 或订单中明确约定时方可适用。试用、免费和测试版（Beta）功能可能存在额外的技术限制，不自动享有付费服务的 SLA 承诺。转为正式付费服务须经您单独确认。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `保密条款`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `任一方对于标注为机密的信息，或根据其性质及披露环境合理判断应属于机密的信息，仅可用于履行本协议之目的。接收方应以不低于合理审慎的态度保护该等机密信息，且仅可向知情必要并承担同等保密义务的内部人员、专业顾问或供应商进行披露。客户非公开的业务数据属于严格保密信息。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `保密限制不适用于以下信息：已合法公开发布的信息、在披露前已被接收方合法获知的信息、独立研发的信息，或从拥有合法披露权的第三方处合法取得的信息。如因法律法规或司法监管要求必须披露，在法律许可的前提下应提前通知对方，并在合理可行范围内尽量限制披露范围。保密义务在本协议终止后继续有效，期限为三年；构成商业秘密的信息在其法定秘密性存续期间持续受保护，个人数据保护义务则根据适用法律及数据处理协议的约定长期有效。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `服务中止与协议终止`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `当存在合理依据证明存在紧迫的安全风险、严重违法违规或侵权行为、对其他客户造成严重损害，或根据法律监管要求必须停止服务时，我们有权在必要限度内暂停提供服务。除法律明令禁止通知或面临紧急突发状况外，我们将明确告知暂停原因、涉及范围及恢复条件，并在风险消除后的合理时间内迅速恢复访问权限。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `任何一方在对方发生重大违约行为且自收到书面通知后 30 天内未予纠正时，均有权终止受影响的订单；若违约行为实质上已不可纠正，守约方有权立即解除协议。您可根据第 9 条的约定取消续订。如我们在您未发生违约的情况下单方提前终止付费服务，我们将至少提前 60 天发出通知，并按比例退还未使用周期的预付费用。即便因法律强制要求或突发重大安全事件导致无法提前通知，亦不免除应承担的退款义务。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `终止后的数据处理与软件许可`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `请在停止使用服务前及时导出所需数据资产。除另有约定外，在付费 Cloud 服务终止后，针对由我们实际托管且法律允许保留的客户内容，我们将提供为期 30 天的数据检索导出期。您可通过产品内置的导出功能或联系支持团队获取数据。该数据检索期不包括保持生产环境的持续在线运行。如需额外的系统迁移服务或专用资源支持，须提前另行协商并计费。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `数据检索期届满后的 30 天内，我们将从生产活动系统中彻底删除相关客户内容。冷备副本将在随后的 90 天内通过数据轮转机制予以彻底删除或不可逆匿名化处理。法律法规要求留存的归档记录、争议解决必需的证据材料，以及账户与账务信息，将依据合法基准和《隐私政策》妥善处理。所有留存信息将受到严格安全保护，绝不用于无关用途。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `试用、免费或测试服务的留存规则遵循开通时披露的说明；该类服务不可作为您的唯一数据备份源。您对部署在 Enterprise 自有环境中的数据享有完全控制权。Cloud 的数据留存与删除规则不适用于非我方托管的数据资产。定期软件许可到期后，应立即停止基于该许可使用软件；单独授予的永久许可证和开源许可权利不受影响。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `服务承诺与免责声明`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `我们将以符合行业标准的专业技能和审慎态度提供付费服务，并确保服务在实质上符合适用的产品规格说明。如发现重大不符事项，请及时提报。我们将在收到通知后的 30 天内予以修复，或与您共同达成合理的纠正计划。若上述方案均未达成，您有权终止受影响的服务，并按比例收回未使用服务周期的预付费用。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `除本协议明确作出的承诺及法律强制要求不得排除的法定保证外，我们不保证服务完全不中断、毫无差错，亦不对特定的商业回报、合规达标或 AI 输出效果作任何默示担保。请根据您的业务需求配置相匹配的测试机制、灾备方案和业务连续性保障措施。试用版与 Beta 测试功能均按“现状”（As-is）提供；但该免责条款不免除我们的保密责任、数据保护合规义务以及依法不可免除的法律责任。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `责任限制`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `在法律法规允许的范围内，任何一方均不对因本协议引起的任何间接性、附带性或后果性损失承担赔偿责任。任一方承担的累计赔偿责任上限，以索赔事件发生前 12 个月内您就受影响服务实际已支付及应支付的服务费总额为限。对于完全免费的服务，该赔偿上限为 1,000 美元或其等值货币。单独书面合同中明确约定的其他或更高赔偿上限优先适用。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `上述责任排除与限制条款不适用于欺诈、故意不当行为、重大过失、因过失导致的死亡或人身伤害，亦不适用于依法不可限制或免除的法律责任。该限制不免除支付正常服务费用或本条款明确规定的退款义务。本条款中的任何内容均不影响法律赋予消费者不可放弃的法定权利。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `第三方索赔抗辩`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `针对与客户内容、平台服务或知识产权相关的第三方索赔，双方应及时通知对方并提供合理配合，未经对方事先书面同意，不得擅自作出约束对方的妥协、自认或达成和解方案。各方均依法对其自身的过错或违约行为承担责任。本条款不要求您对因我方的过错或违约所致损失向我们承担补偿或赔偿义务。任何具体的知识产权抗辩或赔偿（Indemnity）承诺，必须在单独签署的补充协议中明确载明。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `管辖法律与争议解决`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `除另有书面明确约定且符合适用强制性法律规范外，本条款均受新加坡法律管辖并按其解释。发生争议时，双方应首先通过指定联系人秉持诚意友好协商解决。若自发出书面争议通知后 30 天内仍未能协商解决，任何一方均应将争议提交至具有管辖权的新加坡法院进行专属诉讼管辖。此争议解决程序不妨碍任何一方向有管辖权的机构申请紧急保全措施，或在法定诉讼时效内采取必要的维权措施。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `条款变更、通知与通用条款`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `若本条款发生实质性变更，我们将通过您的账户注册邮箱或同等有效的渠道至少提前 30 天通知，说明修改要点及生效日期。针对当前付费周期产生的重大不利变更，通常在下一个续订周期或获得您单独认可后方才生效。因法律法规强制要求或紧急安全防护需要而必须提前生效的变更，我们将在合理可行的情况下第一时间通知。在法定要求重新获取授权的情况下，我们将严格执行明示同意流程。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `若您不同意条款变更，可在当前周期结束时选择不再续订。如该变更必须在当前周期内强制生效，且对您已购买的服务权益造成实质性削减，您有权终止受影响的服务部分，并按比例获得未使用周期的预付款退款。条款变更对发生在其生效之前的历史遗留争议不具有追溯力。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `未经另一方事先书面同意，任一方不得转让本协议；但在发生公司合并、资产重组或业务整体转让，且受让方书面承接全部合同义务且未实质性削减另一方权利的情况下，可在书面通知后直接转让。遭受不可抗力及超出合理控制范围事件影响的一方，应及时通知对方并采取减损措施。若重大服务中断影响持续超过 30 天，任何一方均有权终止受影响的服务，未履行服务部分的预付费用应予以退还。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `本条款中任何条款被裁定为无效或不可执行，不影响其他条款的合法有效性。一方未能或延迟行使其权利，不构成对该权利的放弃。依照其性质在协议终止后仍应继续有效的条款，包括应付费用、知识产权、保密义务、责任限制及争议解决条款，在协议终止后继续有效。若中英文版本之间存在歧义，在法律允许的范围内以英文版本为准，除非双方另有书面协议约定。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `如对本条款、订阅政策、数据导出或系统安全有任何疑问，请通过 https://tier0.app/talk-to-team 或发送邮件至 info@freezonex.io 与我们取得联系。发送法定书面通知时，请采用订单载明的送达方式或发送至上述电子邮箱，并务必注明关联账户、组织名称及处理事项。`,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                              },
                              SHBXJcVJP: {
                                children:
                                  F(`v3`, p) ??
                                  /*#__PURE__*/ c(a, {
                                    children: /*#__PURE__*/ l(`ol`, {
                                      className: `framer-styles-preset-1jf1i0p`,
                                      "data-styles-preset": `GMGpjhxIs`,
                                      dir: `auto`,
                                      children: [
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          style: {
                                            "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                          },
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                              },
                                              children: ` 适用范围与协议接受`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `本服务条款（简称“本条款”）由 FREEZONEX PTE. LTD.（简称“Tier0”或“我们”）与接受本条款的个人或其所代表的机构（简称“您”）订立。本条款适用于您购买或使用 Tier0 Cloud、Tier0 Enterprise 以及相关软件、API、文档和技术支持服务。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `您可以通过勾选明确接受选项、签署包含本条款的订单，或通过其他有效确认方式接受本条款。您必须具备签署合同的法定民事行为能力，并已获得代表所代理机构签署具有约束力协议的合法授权。仅访问我们的网站并不构成付费订阅关系。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `单独签署的书面协议和订单中的明确约定优先于本条款。涉及个人数据处理时，双方签署的数据处理协议优先适用。服务说明用于界定购买的功能特性与用量限额，并不单独变更已约定的价格、责任限制或其他法律条款。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `p`,
                                          children: [
                                            /*#__PURE__*/ c(`p`, {
                                              dir: `auto`,
                                              children: `服务与软件许可`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `Cloud 版本由我们托管提供。Enterprise 版本部署在由您或您指定的提供商管理的环境中。具体功能、部署范围、实例数、用户数、应用程序数量、容量、服务期限和技术支持等级均以您确认的订单或结账页面为准。产品路线图、演示和预览版功能不构成对交付未发布功能的承诺。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `在约定的期限和范围内，我们授予您针对合法业务运营的非排他性服务访问权或软件使用许可，包括订单允许的应用程序发布及授权最终用户访问。除订单另有明确许可外，您不得转售 Tier0 平台本身、出租平台账户，或为无关第三方提供平台托管服务。在 Tier0 上构建业务应用程序并不会将该`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `应用程序的所有权转让给 Tier0。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `账户与企业组织管理`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `请确保账户及账单信息真实准确。妥善管理管理员角色、成员访问权限、API 密钥及其他身份凭证，并及时撤销不再需要的访问权限。组织管理员可在产品功能权限范围内管理工作区、成员及相关内容。您须向您的用户履行所有必要的通知义务。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `您应对自身及授权用户的操作行为负责，但因我们的违约或过错导致的未授权访问除外。如发现疑似账户滥用、凭据泄露或其他安全隐患，请立即通过“联系我们”渠道通知，并配合采取合理的防护措施。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: ` 合规使用规范`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `严禁将本服务用于违法犯罪、侵权、欺诈、传播恶意软件、未授权访问或破坏系统运行等活动。不得绕过权限控制、计费计量、许可限制或用量限额，不得干扰其他客户正常使用，亦不得获取其他客户的非公开数据。除适用法律或开源许可证明确允许外，严禁对 Tier0 专有软件进行反向工程，或移除任何专有权利声明。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `在对我们托管的系统进行渗透测试、压力测试或漏洞验证前，必须获得书面授权并严格在约定范围内进行。您可通过“联系我们”提交漏洞报告。提交漏洞报告并不赋予您访问他人数据或持续利用该漏洞的权利。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: ` 客户内容与知识产权`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `您或相关权利人保留对客户内容的全部权利，包括您上传、连接、创建或存储的数据、业务应用程序、自有代码、配置、文件和提示词（Prompts）。您须确保拥有提供该等内容并授权处理所需的全部合法权利。Tier0 保留对其平台、通用工具、文档和品牌标识的全部权利。第三方及开源组件继续受其既有权利与许可证的约束。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `您授权我们仅在履行本协议、提供技术支持、保障系统安全以及遵守法律法规所必需的范围内处理客户内容。该授权不构成所有权的出售或转让，亦未授权我们将非公开客户内容用于商业宣传或训练通用 AI 模型；上述用途均须获得单独的明确书面授权。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `我们可利用您主动提交的产品反馈来改进服务。此项许可不涵盖客户内容或您的商业保密信息，且未经您同意，我们不得在宣传材料中使用您的名称、商标或客户案例。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: ` 数据保护与网络安全`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `我们的《隐私政策》详细说明了与账户、联系人及网站访问相关的个人信息处理规则。当我们代表您处理客户内容中的个人数据时，应严格遵循适用法律、您的合法指令以及双方签订的数据处理协议。在开展相关数据处理前，须确保已完成必要协议的签署。《隐私政策》不可替代法定必须签署的数据处理协议。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `我们负责落实自身管控范围内合理的技术与组织安全防护措施，并在发生安全事件时履行法定义务和合同约定的通知义务。您应自行负责权限配置、内容合规性、业务数据备份，以及由您控制的终端、网络和集成系统的安全性。除另有约定外，Enterprise 基础架构的运维与升级由您全权负责。此类职责划分不免除任何一方自身的合同义务或法定义务。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `数据存储地域、跨境传输、次级数据处理者、备份策略及恢复目标均受适用服务说明和数据处理协议的约束。如需提交涉及特定行业合规认证、本地化存储或强监管要求的数据，请在提交前与我们确认合规方案。单独使用 Tier0 并不等同于自动满足该等合规要求。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `AI、自动化与工业场景应用`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `AI 生成的应用程序、代码、查询语句、分析结果和建议可能存在偏差、不完整或与其他用户的输出相似的情况。在实际应用前，请务必进行人工审核、功能测试与严格的安全校验。请勿将生成结果直接作为已获验证的专业意见或工业生产安全的绝对保证。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `在您与我们之间，您可在本条款、适用法律和第三方许可证允许的范围内使用生成内容。内容生成行为不赋予我们对您自有内容的任何权利。我们不保证生成结果具备排他性、符合知识产权保护条件，或完全不存在第三方权利瑕疵。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `请严格按照任务最小必要原则为智能体（Agent）、工作流和第三方模型分配调用权限。针对生产环境写入、工业设备控制等关键业务操作，必须配置充分的人工审批、故障备份与紧急停机（Stop）机制。除非有明确的书面约定并经过严格验证，Tier0 不可用于替代紧急停机、安全联锁或生命支持控制等安全关键型系统（Safety-Critical Systems）。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `在启用第三方模型或建立外部集成连接前，请审阅其数据处理范围、留存规则及适用条款。与 Tier0 完成集成这一事实本身，并不意味着第三方获得了对客户内容的无限制访问权。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: ` 第三方服务与开源软件`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `您自主选择或接入的云资源、大模型、插件、数据源及其他第三方服务，均受其各自合同条款、收费标准及许可协议的约束。我们无法控制其独立运作，但仍对我们自身约定的集成接口与服务承诺承担责任。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `开源软件均依照其附带的开源许可证提供。本条款不限制该等许可证明确授予的权利，亦不对独立的开源软件提供默认的商业支持或 SLA 保障。分发应用程序或组件时，请务必遵守相应的开源许可、署名和声明义务。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `费用、续订与终止订阅`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `费用明细、结算币种、税费、计费周期、用量计量方式及付款期限均以您接受的订单或结账页面为准。新增席位、计算与存储扩容等增值项将按照向您明示并经您认可的规则计费。本条款不独立产生任何未予披露的收费项目。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `仅在订单或结账页面有明确说明且经您同意的情况下，订阅才会自动续订。您可在续订前通过管理控制台或“联系我们”取消续订。除另有约定外，取消操作将在当前付费周期届满时生效，并停止扣缴下一周期的续订费用。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `除法律强制规定、订单另有约定，或因我方违约及提前终止而按本条款规定退款外，已使用的服务周期以及您主动停止使用的剩余周期通常不予退款。续订价格调整将至少提前 30 天通知，已生效订单在当前有效期内的价格不受追溯影响。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `对于无争议的逾期未付费用，我们在发出书面催缴通知并给予至少 14 天宽限期后，有权暂停受影响的付费服务。双方应对在宽限期内提出的合理且证据充分的账单异议展开核实；无争议部分的款项仍应按期支付。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `更新、设备维护与服务等级`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `Cloud 版本通常由系统统一进行集中更新。Enterprise 版本的安全补丁和功能更新通常通过指定版本的容器镜像、部署文件或离线安装包提供，由您按照指引完成部署。支持的软件版本生命周期、升级兼容性、技术支持时间及响应时效目标以您的订单及适用的技术支持政策为准。本条款并不构成对所有历史版本提供永久设备维护的承诺。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `若计划下线已购的核心关键功能或引入重大不兼容变更，我们通常会提前至少 30 天通知，并提供可行的迁移方案。如因紧急安全隐患、法定合规要求或我方不可控的第三方限制而导致无法提前通知，我们将在可行范围内第一时间予以说明并采取合理补救措施。若某项变更导致当前付费服务的功能受到重大不利削减且无法提供合理替代方案，您有权终止受影响的服务部分，并按比例获得未使用周期的预付费用退款。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `系统可用性、恢复时效目标、服务抵扣额度（Service Credits）、7×24 小时技术支持以及固定故障修复时限，仅在 SLA 或订单中明确约定时方可适用。试用、免费和测试版（Beta）功能可能存在额外的技术限制，不自动享有付费服务的 SLA 承诺。转为正式付费服务须经您单独确认。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `保密条款`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `任一方对于标注为机密的信息，或根据其性质及披露环境合理判断应属于机密的信息，仅可用于履行本协议之目的。接收方应以不低于合理审慎的态度保护该等机密信息，且仅可向知情必要并承担同等保密义务的内部人员、专业顾问或供应商进行披露。客户非公开的业务数据属于严格保密信息。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `保密限制不适用于以下信息：已合法公开发布的信息、在披露前已被接收方合法获知的信息、独立研发的信息，或从拥有合法披露权的第三方处合法取得的信息。如因法律法规或司法监管要求必须披露，在法律许可的前提下应提前通知对方，并在合理可行范围内尽量限制披露范围。保密义务在本协议终止后继续有效，期限为三年；构成商业秘密的信息在其法定秘密性存续期间持续受保护，个人数据保护义务则根据适用法律及数据处理协议的约定长期有效。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `服务中止与协议终止`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `当存在合理依据证明存在紧迫的安全风险、严重违法违规或侵权行为、对其他客户造成严重损害，或根据法律监管要求必须停止服务时，我们有权在必要限度内暂停提供服务。除法律明令禁止通知或面临紧急突发状况外，我们将明确告知暂停原因、涉及范围及恢复条件，并在风险消除后的合理时间内迅速恢复访问权限。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `任何一方在对方发生重大违约行为且自收到书面通知后 30 天内未予纠正时，均有权终止受影响的订单；若违约行为实质上已不可纠正，守约方有权立即解除协议。您可根据第 9 条的约定取消续订。如我们在您未发生违约的情况下单方提前终止付费服务，我们将至少提前 60 天发出通知，并按比例退还未使用周期的预付费用。即便因法律强制要求或突发重大安全事件导致无法提前通知，亦不免除应承担的退款义务。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `终止后的数据处理与软件许可`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `请在停止使用服务前及时导出所需数据资产。除另有约定外，在付费 Cloud 服务终止后，针对由我们实际托管且法律允许保留的客户内容，我们将提供为期 30 天的数据检索导出期。您可通过产品内置的导出功能或联系支持团队获取数据。该数据检索期不包括保持生产环境的持续在线运行。如需额外的系统迁移服务或专用资源支持，须提前另行协商并计费。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `数据检索期届满后的 30 天内，我们将从生产活动系统中彻底删除相关客户内容。冷备副本将在随后的 90 天内通过数据轮转机制予以彻底删除或不可逆匿名化处理。法律法规要求留存的归档记录、争议解决必需的证据材料，以及账户与账务信息，将依据合法基准和《隐私政策》妥善处理。所有留存信息将受到严格安全保护，绝不用于无关用途。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `试用、免费或测试服务的留存规则遵循开通时披露的说明；该类服务不可作为您的唯一数据备份源。您对部署在 Enterprise 自有环境中的数据享有完全控制权。Cloud 的数据留存与删除规则不适用于非我方托管的数据资产。定期软件许可到期后，应立即停止基于该许可使用软件；单独授予的永久许可证和开源许可权利不受影响。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `服务承诺与免责声明`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `我们将以符合行业标准的专业技能和审慎态度提供付费服务，并确保服务在实质上符合适用的产品规格说明。如发现重大不符事项，请及时提报。我们将在收到通知后的 30 天内予以修复，或与您共同达成合理的纠正计划。若上述方案均未达成，您有权终止受影响的服务，并按比例收回未使用服务周期的预付费用。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `除本协议明确作出的承诺及法律强制要求不得排除的法定保证外，我们不保证服务完全不中断、毫无差错，亦不对特定的商业回报、合规达标或 AI 输出效果作任何默示担保。请根据您的业务需求配置相匹配的测试机制、灾备方案和业务连续性保障措施。试用版与 Beta 测试功能均按“现状”（As-is）提供；但该免责条款不免除我们的保密责任、数据保护合规义务以及依法不可免除的法律责任。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `责任限制`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `在法律法规允许的范围内，任何一方均不对因本协议引起的任何间接性、附带性或后果性损失承担赔偿责任。任一方承担的累计赔偿责任上限，以索赔事件发生前 12 个月内您就受影响服务实际已支付及应支付的服务费总额为限。对于完全免费的服务，该赔偿上限为 1,000 美元或其等值货币。单独书面合同中明确约定的其他或更高赔偿上限优先适用。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `上述责任排除与限制条款不适用于欺诈、故意不当行为、重大过失、因过失导致的死亡或人身伤害，亦不适用于依法不可限制或免除的法律责任。该限制不免除支付正常服务费用或本条款明确规定的退款义务。本条款中的任何内容均不影响法律赋予消费者不可放弃的法定权利。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `第三方索赔抗辩`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `针对与客户内容、平台服务或知识产权相关的第三方索赔，双方应及时通知对方并提供合理配合，未经对方事先书面同意，不得擅自作出约束对方的妥协、自认或达成和解方案。各方均依法对其自身的过错或违约行为承担责任。本条款不要求您对因我方的过错或违约所致损失向我们承担补偿或赔偿义务。任何具体的知识产权抗辩或赔偿（Indemnity）承诺，必须在单独签署的补充协议中明确载明。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `管辖法律与争议解决`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `除另有书面明确约定且符合适用强制性法律规范外，本条款均受新加坡法律管辖并按其解释。发生争议时，双方应首先通过指定联系人秉持诚意友好协商解决。若自发出书面争议通知后 30 天内仍未能协商解决，任何一方均应将争议提交至具有管辖权的新加坡法院进行专属诉讼管辖。此争议解决程序不妨碍任何一方向有管辖权的机构申请紧急保全措施，或在法定诉讼时效内采取必要的维权措施。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: ` `,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`li`, {
                                          "data-preset-tag": `h5`,
                                          children: [
                                            /*#__PURE__*/ c(`h5`, {
                                              dir: `auto`,
                                              children: `条款变更、通知与通用条款`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `若本条款发生实质性变更，我们将通过您的账户注册邮箱或同等有效的渠道至少提前 30 天通知，说明修改要点及生效日期。针对当前付费周期产生的重大不利变更，通常在下一个续订周期或获得您单独认可后方才生效。因法律法规强制要求或紧急安全防护需要而必须提前生效的变更，我们将在合理可行的情况下第一时间通知。在法定要求重新获取授权的情况下，我们将严格执行明示同意流程。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `若您不同意条款变更，可在当前周期结束时选择不再续订。如该变更必须在当前周期内强制生效，且对您已购买的服务权益造成实质性削减，您有权终止受影响的服务部分，并按比例获得未使用周期的预付款退款。条款变更对发生在其生效之前的历史遗留争议不具有追溯力。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `未经另一方事先书面同意，任一方不得转让本协议；但在发生公司合并、资产重组或业务整体转让，且受让方书面承接全部合同义务且未实质性削减另一方权利的情况下，可在书面通知后直接转让。遭受不可抗力及超出合理控制范围事件影响的一方，应及时通知对方并采取减损措施。若重大服务中断影响持续超过 30 天，任何一方均有权终止受影响的服务，未履行服务部分的预付费用应予以退还。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `本条款中任何条款被裁定为无效或不可执行，不影响其他条款的合法有效性。一方未能或延迟行使其权利，不构成对该权利的放弃。依照其性质在协议终止后仍应继续有效的条款，包括应付费用、知识产权、保密义务、责任限制及争议解决条款，在协议终止后继续有效。若中英文版本之间存在歧义，在法律允许的范围内以英文版本为准，除非双方另有书面协议约定。`,
                                            }),
                                            /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-81u0hx`,
                                              "data-styles-preset": `IIMP8Vr9g`,
                                              dir: `auto`,
                                              children: `如对本条款、订阅政策、数据导出或系统安全有任何疑问，请通过 https://tier0.app/talk-to-team 或发送邮件至 info@freezonex.io 与我们取得联系。发送法定书面通知时，请采用订单载明的送达方式或发送至上述电子邮箱，并务必注明关联账户、组织名称及处理事项。`,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                              },
                            },
                            children: /*#__PURE__*/ c(f, {
                              __fromCanvasComponent: !0,
                              children:
                                F(`v2`, p) ??
                                /*#__PURE__*/ c(a, {
                                  children: /*#__PURE__*/ l(`ol`, {
                                    className: `framer-styles-preset-1jf1i0p`,
                                    "data-styles-preset": `GMGpjhxIs`,
                                    dir: `auto`,
                                    children: [
                                      /*#__PURE__*/ l(`li`, {
                                        "data-preset-tag": `h5`,
                                        style: {
                                          "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                        },
                                        children: [
                                          /*#__PURE__*/ c(`h5`, {
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                            },
                                            children: ` 适用范围与协议接受`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `本服务条款（简称“本条款”）由 FREEZONEX PTE. LTD.（简称“Tier0”或“我们”）与接受本条款的个人或其所代表的机构（简称“您”）订立。本条款适用于您购买或使用 Tier0 Cloud、Tier0 Enterprise 以及相关软件、API、文档和技术支持服务。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `您可以通过勾选明确接受选项、签署包含本条款的订单，或通过其他有效确认方式接受本条款。您必须具备签署合同的法定民事行为能力，并已获得代表所代理机构签署具有约束力协议的合法授权。仅访问我们的网站并不构成付费订阅关系。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `单独签署的书面协议和订单中的明确约定优先于本条款。涉及个人数据处理时，双方签署的数据处理协议优先适用。服务说明用于界定购买的功能特性与用量限额，并不单独变更已约定的价格、责任限制或其他法律条款。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: ` `,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ l(`li`, {
                                        "data-preset-tag": `p`,
                                        children: [
                                          /*#__PURE__*/ c(`p`, {
                                            dir: `auto`,
                                            children: `服务与软件许可`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `Cloud 版本由我们托管提供。Enterprise 版本部署在由您或您指定的提供商管理的环境中。具体功能、部署范围、实例数、用户数、应用程序数量、容量、服务期限和技术支持等级均以您确认的订单或结账页面为准。产品路线图、演示和预览版功能不构成对交付未发布功能的承诺。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `在约定的期限和范围内，我们授予您针对合法业务运营的非排他性服务访问权或软件使用许可，包括订单允许的应用程序发布及授权最终用户访问。除订单另有明确许可外，您不得转售 Tier0 平台本身、出租平台账户，或为无关第三方提供平台托管服务。在 Tier0 上构建业务应用程序并不会将该`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `应用程序的所有权转让给 Tier0。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: ` `,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ l(`li`, {
                                        "data-preset-tag": `h5`,
                                        children: [
                                          /*#__PURE__*/ c(`h5`, {
                                            dir: `auto`,
                                            children: `账户与企业组织管理`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `请确保账户及账单信息真实准确。妥善管理管理员角色、成员访问权限、API 密钥及其他身份凭证，并及时撤销不再需要的访问权限。组织管理员可在产品功能权限范围内管理工作区、成员及相关内容。您须向您的用户履行所有必要的通知义务。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `您应对自身及授权用户的操作行为负责，但因我们的违约或过错导致的未授权访问除外。如发现疑似账户滥用、凭据泄露或其他安全隐患，请立即通过“联系我们”渠道通知，并配合采取合理的防护措施。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: ` `,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ l(`li`, {
                                        "data-preset-tag": `h5`,
                                        children: [
                                          /*#__PURE__*/ c(`h5`, {
                                            dir: `auto`,
                                            children: ` 合规使用规范`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `严禁将本服务用于违法犯罪、侵权、欺诈、传播恶意软件、未授权访问或破坏系统运行等活动。不得绕过权限控制、计费计量、许可限制或用量限额，不得干扰其他客户正常使用，亦不得获取其他客户的非公开数据。除适用法律或开源许可证明确允许外，严禁对 Tier0 专有软件进行反向工程，或移除任何专有权利声明。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `在对我们托管的系统进行渗透测试、压力测试或漏洞验证前，必须获得书面授权并严格在约定范围内进行。您可通过“联系我们”提交漏洞报告。提交漏洞报告并不赋予您访问他人数据或持续利用该漏洞的权利。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: ` `,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ l(`li`, {
                                        "data-preset-tag": `h5`,
                                        children: [
                                          /*#__PURE__*/ c(`h5`, {
                                            dir: `auto`,
                                            children: ` 客户内容与知识产权`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `您或相关权利人保留对客户内容的全部权利，包括您上传、连接、创建或存储的数据、业务应用程序、自有代码、配置、文件和提示词（Prompts）。您须确保拥有提供该等内容并授权处理所需的全部合法权利。Tier0 保留对其平台、通用工具、文档和品牌标识的全部权利。第三方及开源组件继续受其既有权利与许可证的约束。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `您授权我们仅在履行本协议、提供技术支持、保障系统安全以及遵守法律法规所必需的范围内处理客户内容。该授权不构成所有权的出售或转让，亦未授权我们将非公开客户内容用于商业宣传或训练通用 AI 模型；上述用途均须获得单独的明确书面授权。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `我们可利用您主动提交的产品反馈来改进服务。此项许可不涵盖客户内容或您的商业保密信息，且未经您同意，我们不得在宣传材料中使用您的名称、商标或客户案例。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: ` `,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ l(`li`, {
                                        "data-preset-tag": `h5`,
                                        children: [
                                          /*#__PURE__*/ c(`h5`, {
                                            dir: `auto`,
                                            children: ` 数据保护与网络安全`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `我们的《隐私政策》详细说明了与账户、联系人及网站访问相关的个人信息处理规则。当我们代表您处理客户内容中的个人数据时，应严格遵循适用法律、您的合法指令以及双方签订的数据处理协议。在开展相关数据处理前，须确保已完成必要协议的签署。《隐私政策》不可替代法定必须签署的数据处理协议。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `我们负责落实自身管控范围内合理的技术与组织安全防护措施，并在发生安全事件时履行法定义务和合同约定的通知义务。您应自行负责权限配置、内容合规性、业务数据备份，以及由您控制的终端、网络和集成系统的安全性。除另有约定外，Enterprise 基础架构的运维与升级由您全权负责。此类职责划分不免除任何一方自身的合同义务或法定义务。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `数据存储地域、跨境传输、次级数据处理者、备份策略及恢复目标均受适用服务说明和数据处理协议的约束。如需提交涉及特定行业合规认证、本地化存储或强监管要求的数据，请在提交前与我们确认合规方案。单独使用 Tier0 并不等同于自动满足该等合规要求。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: ` `,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ l(`li`, {
                                        "data-preset-tag": `h5`,
                                        children: [
                                          /*#__PURE__*/ c(`h5`, {
                                            dir: `auto`,
                                            children: `AI、自动化与工业场景应用`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `AI 生成的应用程序、代码、查询语句、分析结果和建议可能存在偏差、不完整或与其他用户的输出相似的情况。在实际应用前，请务必进行人工审核、功能测试与严格的安全校验。请勿将生成结果直接作为已获验证的专业意见或工业生产安全的绝对保证。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `在您与我们之间，您可在本条款、适用法律和第三方许可证允许的范围内使用生成内容。内容生成行为不赋予我们对您自有内容的任何权利。我们不保证生成结果具备排他性、符合知识产权保护条件，或完全不存在第三方权利瑕疵。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `请严格按照任务最小必要原则为智能体（Agent）、工作流和第三方模型分配调用权限。针对生产环境写入、工业设备控制等关键业务操作，必须配置充分的人工审批、故障备份与紧急停机（Stop）机制。除非有明确的书面约定并经过严格验证，Tier0 不可用于替代紧急停机、安全联锁或生命支持控制等安全关键型系统（Safety-Critical Systems）。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `在启用第三方模型或建立外部集成连接前，请审阅其数据处理范围、留存规则及适用条款。与 Tier0 完成集成这一事实本身，并不意味着第三方获得了对客户内容的无限制访问权。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: ` `,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ l(`li`, {
                                        "data-preset-tag": `h5`,
                                        children: [
                                          /*#__PURE__*/ c(`h5`, {
                                            dir: `auto`,
                                            children: ` 第三方服务与开源软件`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `您自主选择或接入的云资源、大模型、插件、数据源及其他第三方服务，均受其各自合同条款、收费标准及许可协议的约束。我们无法控制其独立运作，但仍对我们自身约定的集成接口与服务承诺承担责任。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `开源软件均依照其附带的开源许可证提供。本条款不限制该等许可证明确授予的权利，亦不对独立的开源软件提供默认的商业支持或 SLA 保障。分发应用程序或组件时，请务必遵守相应的开源许可、署名和声明义务。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: ` `,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ l(`li`, {
                                        "data-preset-tag": `h5`,
                                        children: [
                                          /*#__PURE__*/ c(`h5`, {
                                            dir: `auto`,
                                            children: `费用、续订与终止订阅`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `费用明细、结算币种、税费、计费周期、用量计量方式及付款期限均以您接受的订单或结账页面为准。新增席位、计算与存储扩容等增值项将按照向您明示并经您认可的规则计费。本条款不独立产生任何未予披露的收费项目。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `仅在订单或结账页面有明确说明且经您同意的情况下，订阅才会自动续订。您可在续订前通过管理控制台或“联系我们”取消续订。除另有约定外，取消操作将在当前付费周期届满时生效，并停止扣缴下一周期的续订费用。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `除法律强制规定、订单另有约定，或因我方违约及提前终止而按本条款规定退款外，已使用的服务周期以及您主动停止使用的剩余周期通常不予退款。续订价格调整将至少提前 30 天通知，已生效订单在当前有效期内的价格不受追溯影响。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `对于无争议的逾期未付费用，我们在发出书面催缴通知并给予至少 14 天宽限期后，有权暂停受影响的付费服务。双方应对在宽限期内提出的合理且证据充分的账单异议展开核实；无争议部分的款项仍应按期支付。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: ` `,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ l(`li`, {
                                        "data-preset-tag": `h5`,
                                        children: [
                                          /*#__PURE__*/ c(`h5`, {
                                            dir: `auto`,
                                            children: `更新、设备维护与服务等级`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `Cloud 版本通常由系统统一进行集中更新。Enterprise 版本的安全补丁和功能更新通常通过指定版本的容器镜像、部署文件或离线安装包提供，由您按照指引完成部署。支持的软件版本生命周期、升级兼容性、技术支持时间及响应时效目标以您的订单及适用的技术支持政策为准。本条款并不构成对所有历史版本提供永久设备维护的承诺。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `若计划下线已购的核心关键功能或引入重大不兼容变更，我们通常会提前至少 30 天通知，并提供可行的迁移方案。如因紧急安全隐患、法定合规要求或我方不可控的第三方限制而导致无法提前通知，我们将在可行范围内第一时间予以说明并采取合理补救措施。若某项变更导致当前付费服务的功能受到重大不利削减且无法提供合理替代方案，您有权终止受影响的服务部分，并按比例获得未使用周期的预付费用退款。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `系统可用性、恢复时效目标、服务抵扣额度（Service Credits）、7×24 小时技术支持以及固定故障修复时限，仅在 SLA 或订单中明确约定时方可适用。试用、免费和测试版（Beta）功能可能存在额外的技术限制，不自动享有付费服务的 SLA 承诺。转为正式付费服务须经您单独确认。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: ` `,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ l(`li`, {
                                        "data-preset-tag": `h5`,
                                        children: [
                                          /*#__PURE__*/ c(`h5`, {
                                            dir: `auto`,
                                            children: `保密条款`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `任一方对于标注为机密的信息，或根据其性质及披露环境合理判断应属于机密的信息，仅可用于履行本协议之目的。接收方应以不低于合理审慎的态度保护该等机密信息，且仅可向知情必要并承担同等保密义务的内部人员、专业顾问或供应商进行披露。客户非公开的业务数据属于严格保密信息。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `保密限制不适用于以下信息：已合法公开发布的信息、在披露前已被接收方合法获知的信息、独立研发的信息，或从拥有合法披露权的第三方处合法取得的信息。如因法律法规或司法监管要求必须披露，在法律许可的前提下应提前通知对方，并在合理可行范围内尽量限制披露范围。保密义务在本协议终止后继续有效，期限为三年；构成商业秘密的信息在其法定秘密性存续期间持续受保护，个人数据保护义务则根据适用法律及数据处理协议的约定长期有效。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: ` `,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ l(`li`, {
                                        "data-preset-tag": `h5`,
                                        children: [
                                          /*#__PURE__*/ c(`h5`, {
                                            dir: `auto`,
                                            children: `服务中止与协议终止`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `当存在合理依据证明存在紧迫的安全风险、严重违法违规或侵权行为、对其他客户造成严重损害，或根据法律监管要求必须停止服务时，我们有权在必要限度内暂停提供服务。除法律明令禁止通知或面临紧急突发状况外，我们将明确告知暂停原因、涉及范围及恢复条件，并在风险消除后的合理时间内迅速恢复访问权限。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `任何一方在对方发生重大违约行为且自收到书面通知后 30 天内未予纠正时，均有权终止受影响的订单；若违约行为实质上已不可纠正，守约方有权立即解除协议。您可根据第 9 条的约定取消续订。如我们在您未发生违约的情况下单方提前终止付费服务，我们将至少提前 60 天发出通知，并按比例退还未使用周期的预付费用。即便因法律强制要求或突发重大安全事件导致无法提前通知，亦不免除应承担的退款义务。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: ` `,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ l(`li`, {
                                        "data-preset-tag": `h5`,
                                        children: [
                                          /*#__PURE__*/ c(`h5`, {
                                            dir: `auto`,
                                            children: `终止后的数据处理与软件许可`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `请在停止使用服务前及时导出所需数据资产。除另有约定外，在付费 Cloud 服务终止后，针对由我们实际托管且法律允许保留的客户内容，我们将提供为期 30 天的数据检索导出期。您可通过产品内置的导出功能或联系支持团队获取数据。该数据检索期不包括保持生产环境的持续在线运行。如需额外的系统迁移服务或专用资源支持，须提前另行协商并计费。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `数据检索期届满后的 30 天内，我们将从生产活动系统中彻底删除相关客户内容。冷备副本将在随后的 90 天内通过数据轮转机制予以彻底删除或不可逆匿名化处理。法律法规要求留存的归档记录、争议解决必需的证据材料，以及账户与账务信息，将依据合法基准和《隐私政策》妥善处理。所有留存信息将受到严格安全保护，绝不用于无关用途。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `试用、免费或测试服务的留存规则遵循开通时披露的说明；该类服务不可作为您的唯一数据备份源。您对部署在 Enterprise 自有环境中的数据享有完全控制权。Cloud 的数据留存与删除规则不适用于非我方托管的数据资产。定期软件许可到期后，应立即停止基于该许可使用软件；单独授予的永久许可证和开源许可权利不受影响。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: ` `,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ l(`li`, {
                                        "data-preset-tag": `h5`,
                                        children: [
                                          /*#__PURE__*/ c(`h5`, {
                                            dir: `auto`,
                                            children: `服务承诺与免责声明`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `我们将以符合行业标准的专业技能和审慎态度提供付费服务，并确保服务在实质上符合适用的产品规格说明。如发现重大不符事项，请及时提报。我们将在收到通知后的 30 天内予以修复，或与您共同达成合理的纠正计划。若上述方案均未达成，您有权终止受影响的服务，并按比例收回未使用服务周期的预付费用。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `除本协议明确作出的承诺及法律强制要求不得排除的法定保证外，我们不保证服务完全不中断、毫无差错，亦不对特定的商业回报、合规达标或 AI 输出效果作任何默示担保。请根据您的业务需求配置相匹配的测试机制、灾备方案和业务连续性保障措施。试用版与 Beta 测试功能均按“现状”（As-is）提供；但该免责条款不免除我们的保密责任、数据保护合规义务以及依法不可免除的法律责任。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: ` `,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ l(`li`, {
                                        "data-preset-tag": `h5`,
                                        children: [
                                          /*#__PURE__*/ c(`h5`, {
                                            dir: `auto`,
                                            children: `责任限制`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `在法律法规允许的范围内，任何一方均不对因本协议引起的任何间接性、附带性或后果性损失承担赔偿责任。任一方承担的累计赔偿责任上限，以索赔事件发生前 12 个月内您就受影响服务实际已支付及应支付的服务费总额为限。对于完全免费的服务，该赔偿上限为 1,000 美元或其等值货币。单独书面合同中明确约定的其他或更高赔偿上限优先适用。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `上述责任排除与限制条款不适用于欺诈、故意不当行为、重大过失、因过失导致的死亡或人身伤害，亦不适用于依法不可限制或免除的法律责任。该限制不免除支付正常服务费用或本条款明确规定的退款义务。本条款中的任何内容均不影响法律赋予消费者不可放弃的法定权利。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: ` `,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ l(`li`, {
                                        "data-preset-tag": `h5`,
                                        children: [
                                          /*#__PURE__*/ c(`h5`, {
                                            dir: `auto`,
                                            children: `第三方索赔抗辩`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `针对与客户内容、平台服务或知识产权相关的第三方索赔，双方应及时通知对方并提供合理配合，未经对方事先书面同意，不得擅自作出约束对方的妥协、自认或达成和解方案。各方均依法对其自身的过错或违约行为承担责任。本条款不要求您对因我方的过错或违约所致损失向我们承担补偿或赔偿义务。任何具体的知识产权抗辩或赔偿（Indemnity）承诺，必须在单独签署的补充协议中明确载明。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: ` `,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ l(`li`, {
                                        "data-preset-tag": `h5`,
                                        children: [
                                          /*#__PURE__*/ c(`h5`, {
                                            dir: `auto`,
                                            children: `管辖法律与争议解决`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `除另有书面明确约定且符合适用强制性法律规范外，本条款均受新加坡法律管辖并按其解释。发生争议时，双方应首先通过指定联系人秉持诚意友好协商解决。若自发出书面争议通知后 30 天内仍未能协商解决，任何一方均应将争议提交至具有管辖权的新加坡法院进行专属诉讼管辖。此争议解决程序不妨碍任何一方向有管辖权的机构申请紧急保全措施，或在法定诉讼时效内采取必要的维权措施。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: ` `,
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ l(`li`, {
                                        "data-preset-tag": `h5`,
                                        children: [
                                          /*#__PURE__*/ c(`h5`, {
                                            dir: `auto`,
                                            children: `条款变更、通知与通用条款`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `若本条款发生实质性变更，我们将通过您的账户注册邮箱或同等有效的渠道至少提前 30 天通知，说明修改要点及生效日期。针对当前付费周期产生的重大不利变更，通常在下一个续订周期或获得您单独认可后方才生效。因法律法规强制要求或紧急安全防护需要而必须提前生效的变更，我们将在合理可行的情况下第一时间通知。在法定要求重新获取授权的情况下，我们将严格执行明示同意流程。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `若您不同意条款变更，可在当前周期结束时选择不再续订。如该变更必须在当前周期内强制生效，且对您已购买的服务权益造成实质性削减，您有权终止受影响的服务部分，并按比例获得未使用周期的预付款退款。条款变更对发生在其生效之前的历史遗留争议不具有追溯力。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `未经另一方事先书面同意，任一方不得转让本协议；但在发生公司合并、资产重组或业务整体转让，且受让方书面承接全部合同义务且未实质性削减另一方权利的情况下，可在书面通知后直接转让。遭受不可抗力及超出合理控制范围事件影响的一方，应及时通知对方并采取减损措施。若重大服务中断影响持续超过 30 天，任何一方均有权终止受影响的服务，未履行服务部分的预付费用应予以退还。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `本条款中任何条款被裁定为无效或不可执行，不影响其他条款的合法有效性。一方未能或延迟行使其权利，不构成对该权利的放弃。依照其性质在协议终止后仍应继续有效的条款，包括应付费用、知识产权、保密义务、责任限制及争议解决条款，在协议终止后继续有效。若中英文版本之间存在歧义，在法律允许的范围内以英文版本为准，除非双方另有书面协议约定。`,
                                          }),
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-81u0hx`,
                                            "data-styles-preset": `IIMP8Vr9g`,
                                            dir: `auto`,
                                            children: `如对本条款、订阅政策、数据导出或系统安全有任何疑问，请通过 https://tier0.app/talk-to-team 或发送邮件至 info@freezonex.io 与我们取得联系。发送法定书面通知时，请采用订单载明的送达方式或发送至上述电子邮箱，并务必注明关联账户、组织名称及处理事项。`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              className: `framer-167wply`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    /*#__PURE__*/ l(u.div, {
                      className: `framer-14vj4eu`,
                      "data-framer-name": `header`,
                      layout: M,
                      children: [
                        N() &&
                          /*#__PURE__*/ c(T, {
                            breakpoint: E,
                            overrides: {
                              bU00Kd5Fu: { height: 498, width: void 0, y: (g?.y || 0) + 11416 },
                            },
                            children: /*#__PURE__*/ c(b, {
                              height: 438,
                              width: g?.width || `100vw`,
                              y: (g?.y || 0) + 11424,
                              children: /*#__PURE__*/ c(C, {
                                className: `framer-l6fixs-container hidden-1dfaefz`,
                                nodeId: `teI89Ab7m`,
                                scopeId: `QF1mELLnB`,
                                children: /*#__PURE__*/ c(T, {
                                  breakpoint: E,
                                  overrides: { bU00Kd5Fu: { variant: K(`vXscR1iJC`) } },
                                  children: /*#__PURE__*/ c(D, {
                                    height: `100%`,
                                    id: `teI89Ab7m`,
                                    layoutId: `teI89Ab7m`,
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
                              SHBXJcVJP: {
                                height: 498,
                                width: `max(${g?.width || `100vw`}, 1px)`,
                                y: (g?.y || 0) + 11434,
                              },
                            },
                            children: /*#__PURE__*/ c(b, {
                              children: /*#__PURE__*/ c(C, {
                                className: `framer-1umnmbm-container hidden-h3hsx7 hidden-1werkqf`,
                                nodeId: `FdL8rv1dq`,
                                scopeId: `QF1mELLnB`,
                                children: /*#__PURE__*/ c(D, {
                                  height: `100%`,
                                  id: `FdL8rv1dq`,
                                  layoutId: `FdL8rv1dq`,
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
        `.framer-Zf3Fl.framer-dgjwfq, .framer-Zf3Fl .framer-dgjwfq { display: block; }`,
        `.framer-Zf3Fl.framer-h3hsx7 { align-content: center; align-items: center; background-color: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-Zf3Fl .framer-1f06n9a-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 4; }`,
        `.framer-Zf3Fl .framer-l7e6sp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1240px; }`,
        `.framer-Zf3Fl .framer-vpmkz5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 50px 0px 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Zf3Fl .framer-gpl4tg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Zf3Fl .framer-1tr1dyr, .framer-Zf3Fl .framer-qa3am8 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: 1190px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-Zf3Fl .framer-167wply { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Zf3Fl .framer-14vj4eu { align-content: center; align-items: center; background-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: 438px; justify-content: flex-start; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Zf3Fl .framer-l6fixs-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
        `.framer-Zf3Fl .framer-1umnmbm-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...N,
        ..._e,
        ...pe,
        ...A,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-Zf3Fl.framer-h3hsx7 { width: 810px; } .framer-Zf3Fl .framer-l7e6sp { flex-direction: row; padding: 130px 0px 0px 0px; width: 810px; z-index: 1; } .framer-Zf3Fl .framer-vpmkz5 { padding: 0px 60px 0px 60px; width: 810px; } .framer-Zf3Fl .framer-1tr1dyr, .framer-Zf3Fl .framer-qa3am8 { width: 730px; } .framer-Zf3Fl .framer-14vj4eu { flex-direction: row; height: min-content; } .framer-Zf3Fl .framer-1umnmbm-container { flex: 1 0 0px; width: 1px; }}`,
        `@media (max-width: 809.98px) { .framer-Zf3Fl.framer-h3hsx7, .framer-Zf3Fl .framer-l7e6sp { width: 390px; } .framer-Zf3Fl .framer-vpmkz5 { gap: 32px; order: 0; padding: 120px 40px 0px 40px; } .framer-Zf3Fl .framer-1tr1dyr, .framer-Zf3Fl .framer-qa3am8 { width: 310px; } .framer-Zf3Fl .framer-14vj4eu { gap: 0px; height: min-content; } .framer-Zf3Fl .framer-l6fixs-container { flex: none; height: auto; width: auto; }}`,
      ]),
      (Q = g(X, Z, `framer-Zf3Fl`)),
      (Q.displayName = `Tier0 Policy`),
      (Q.defaultProps = { height: 6266, width: 1440 }),
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
          ...p(me),
          ...p(j),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = { load: (e, t) => x([() => m(O, {}, t), () => m(D, {}, t)], t) }),
      ($ = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerQF1mELLnB`,
            slots: [],
            annotations: {
              framerAutoSizeImages: `true`,
              framerScrollSections: `false`,
              framerDisplayContentsDiv: `false`,
              framerResponsiveScreen: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerImmutableVariables: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"SHBXJcVJP":{"layout":["fixed","auto"]},"bU00Kd5Fu":{"layout":["fixed","auto"]}}}`,
              framerColorSyntax: `true`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerIntrinsicHeight: `6266`,
              framerLayoutTemplateFlowEffect: `true`,
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
//# sourceMappingURL=lP8ht8iEj0nEFn7bvJS1M4CaHlE_xcHyWSlmwHW9Xzg.DAVA9_5q.mjs.map
