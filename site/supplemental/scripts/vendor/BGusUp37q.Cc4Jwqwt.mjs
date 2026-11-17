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
  M as _,
  Nt as v,
  P as y,
  Pt as b,
  Q as x,
  U as S,
  a as C,
  gt as ee,
  ht as w,
  j as T,
  k as E,
  s as D,
  wt as te,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
function O(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ne, re, k, A, j, M, N, P, ie, F;
function I() {
  return (I = t(() => {
    (c(),
      x(),
      m(),
      i(),
      (ne = [`xqRmY8qi0`, `G19A41x4E`]),
      (re = `framer-fi075`),
      (k = { G19A41x4E: `framer-v-fzq30b`, xqRmY8qi0: `framer-v-rl6b9d` }),
      (A = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (j = ({ value: e, children: t }) => {
        let n = a(f),
          i = e ?? n.transition,
          o = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ u(f.Provider, { value: o, children: t });
      }),
      (M = p(o)),
      (N = { Closed: `xqRmY8qi0`, Open: `G19A41x4E` }),
      (P = ({ answer: e, height: t, id: n, question: r, width: i, ...a }) => ({
        ...a,
        T8rQFvSBR:
          e ??
          a.T8rQFvSBR ??
          `Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.`,
        variant: N[a.variant] ?? a.variant ?? `xqRmY8qi0`,
        W88zB8mIG:
          r ??
          a.W88zB8mIG ??
          `Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.`,
      })),
      (ie = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (F = b(
        /* @__PURE__ */ l(function (e, t) {
          let { activeLocale: r, setLocale: i } = te(),
            {
              style: a,
              className: c,
              layoutId: l,
              variant: f,
              W88zB8mIG: m,
              T8rQFvSBR: _,
              ...b
            } = P(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: N,
              setVariant: F,
              variants: I,
            } = v({
              cycleOrder: ne,
              defaultVariant: `xqRmY8qi0`,
              variant: f,
              variantClassNames: k,
            }),
            L = ie(e, I),
            { activeVariantCallback: R, delay: ae } = w(x),
            z = R(async (...e) => {
              F(`G19A41x4E`);
            }),
            B = R(async (...e) => {
              F(`xqRmY8qi0`);
            }),
            V = s(null),
            H = () => x === `G19A41x4E`,
            U = n(),
            W = [];
          return (
            ee(),
            /*#__PURE__*/ u(h, {
              id: l ?? U,
              children: /*#__PURE__*/ u(M, {
                animate: I,
                initial: !1,
                children: /*#__PURE__*/ u(j, {
                  value: A,
                  children: /*#__PURE__*/ d(p.div, {
                    ...b,
                    ...T,
                    className: y(re, ...W, `framer-rl6b9d`, c, S),
                    "data-border": !0,
                    "data-framer-name": `Closed`,
                    layoutDependency: L,
                    layoutId: `xqRmY8qi0`,
                    ref: t ?? V,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-da1a6b40-2789-4e77-a861-50d17ac56b47, rgb(120, 118, 112))`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      ...a,
                    },
                    ...O({ G19A41x4E: { "data-framer-name": `Open` } }, x, E),
                    children: [
                      /*#__PURE__*/ d(p.div, {
                        className: `framer-1o2ezay`,
                        "data-framer-name": `Question`,
                        "data-highlight": !0,
                        layoutDependency: L,
                        layoutId: `hEVJmAwMH`,
                        onTap: z,
                        ...O({ G19A41x4E: { onTap: B } }, x, E),
                        children: [
                          /*#__PURE__*/ u(g, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ u(o, {
                              children: /*#__PURE__*/ u(p.h3, {
                                style: {
                                  "--font-selector": `R0Y7UG9wcGlucy1yZWd1bGFy`,
                                  "--framer-font-family": `"Poppins", "Poppins Placeholder", sans-serif`,
                                  "--framer-font-size": `20px`,
                                  "--framer-line-height": `1.4em`,
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-20d2fcb2-0461-4276-8cb7-bceba71c36c9, rgb(5, 11, 20)))`,
                                },
                                children: `Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.`,
                              }),
                            }),
                            className: `framer-1ot3cua`,
                            fonts: [`GF;Poppins-regular`],
                            layoutDependency: L,
                            layoutId: `eozpltcam`,
                            style: {
                              "--extracted-a0htzi": `var(--token-20d2fcb2-0461-4276-8cb7-bceba71c36c9, rgb(5, 11, 20))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                              "--framer-paragraph-spacing": `0px`,
                            },
                            text: m,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ d(p.div, {
                            className: `framer-13ht4oh`,
                            "data-framer-name": `Icon`,
                            layoutDependency: L,
                            layoutId: `L4KwI5kc_`,
                            style: { rotate: 0 },
                            variants: { G19A41x4E: { rotate: 45 } },
                            children: [
                              /*#__PURE__*/ u(p.div, {
                                className: `framer-etoiyc`,
                                layoutDependency: L,
                                layoutId: `QxYqIHWND`,
                                style: {
                                  backgroundColor: `var(--token-20d2fcb2-0461-4276-8cb7-bceba71c36c9, rgb(5, 11, 20))`,
                                  borderBottomLeftRadius: 10,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                },
                              }),
                              /*#__PURE__*/ u(p.div, {
                                className: `framer-5q1251`,
                                layoutDependency: L,
                                layoutId: `MK9vsKjV8`,
                                style: {
                                  backgroundColor: `var(--token-20d2fcb2-0461-4276-8cb7-bceba71c36c9, rgb(5, 11, 20))`,
                                  borderBottomLeftRadius: 10,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                      H() &&
                        /*#__PURE__*/ u(p.div, {
                          className: `framer-1yxzp1l`,
                          "data-framer-name": `Answer`,
                          layoutDependency: L,
                          layoutId: `tjN8pTR2d`,
                          style: { opacity: 0 },
                          variants: { G19A41x4E: { opacity: 1 } },
                          children: /*#__PURE__*/ u(g, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ u(o, {
                              children: /*#__PURE__*/ u(p.p, {
                                style: {
                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy0zMDA=`,
                                  "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                  "--framer-font-size": `18px`,
                                  "--framer-font-weight": `300`,
                                  "--framer-line-height": `1.6em`,
                                  "--framer-text-alignment": `left`,
                                },
                                children: `Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.`,
                              }),
                            }),
                            className: `framer-1m0fqyr`,
                            fonts: [`GF;IBM Plex Sans-300`],
                            layoutDependency: L,
                            layoutId: `Byqq4OX1K`,
                            style: { "--framer-paragraph-spacing": `0px` },
                            text: _,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
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
          `.framer-fi075.framer-qqu7p9, .framer-fi075 .framer-qqu7p9 { display: block; }`,
          `.framer-fi075.framer-rl6b9d { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 400px; }`,
          `.framer-fi075 .framer-1o2ezay { -webkit-user-select: none; align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px 0px 20px 0px; position: relative; user-select: none; width: 100%; }`,
          `.framer-fi075 .framer-1ot3cua { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-fi075 .framer-13ht4oh { flex: none; height: 16px; overflow: hidden; position: relative; width: 16px; z-index: 1; }`,
          `.framer-fi075 .framer-etoiyc { flex: none; height: 2px; left: calc(50.00000000000002% - 16px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 2px / 2); width: 16px; }`,
          `.framer-fi075 .framer-5q1251 { flex: none; height: 16px; left: calc(50.00000000000002% - 2px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 16px / 2); width: 2px; }`,
          `.framer-fi075 .framer-1yxzp1l { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 20px 20px 0px; position: relative; width: 100%; }`,
          `.framer-fi075 .framer-1m0fqyr { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-fi075.framer-rl6b9d, .framer-fi075 .framer-1o2ezay, .framer-fi075 .framer-1yxzp1l { gap: 0px; } .framer-fi075.framer-rl6b9d > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-fi075.framer-rl6b9d > :first-child, .framer-fi075 .framer-1yxzp1l > :first-child { margin-top: 0px; } .framer-fi075.framer-rl6b9d > :last-child, .framer-fi075 .framer-1yxzp1l > :last-child { margin-bottom: 0px; } .framer-fi075 .framer-1o2ezay > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-fi075 .framer-1o2ezay > :first-child { margin-left: 0px; } .framer-fi075 .framer-1o2ezay > :last-child { margin-right: 0px; } .framer-fi075 .framer-1yxzp1l > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }`,
          `.framer-fi075[data-border="true"]::after, .framer-fi075 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-fi075`
      )),
      (F.displayName = `FAQ Row`),
      (F.defaultProps = { height: 124, width: 400 }),
      _(F, {
        variant: {
          options: [`xqRmY8qi0`, `G19A41x4E`],
          optionTitles: [`Closed`, `Open`],
          title: `Variant`,
          type: D.Enum,
        },
        W88zB8mIG: {
          defaultValue: `Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.`,
          displayTextArea: !0,
          title: `Question`,
          type: D.String,
        },
        T8rQFvSBR: {
          defaultValue: `Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.`,
          displayTextArea: !0,
          title: `Answer`,
          type: D.String,
        },
      }),
      T(
        F,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Poppins`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrFJXUc1NECPY.woff2`,
                weight: `400`,
              },
              {
                family: `IBM Plex Sans`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/ibmplexsans/v19/zYX9KVElMYYaJe8bpLHnCwDKjXr8MINmdd_qFmo.woff2`,
                weight: `300`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var L = /* @__PURE__ */ e({
    __FramerMetadata__: () => He,
    v0: () => R,
    v1: () => ae,
    v10: () => q,
    v11: () => J,
    v12: () => oe,
    v13: () => se,
    v14: () => ce,
    v15: () => le,
    v16: () => ue,
    v17: () => de,
    v18: () => fe,
    v19: () => pe,
    v2: () => z,
    v20: () => me,
    v21: () => he,
    v22: () => ge,
    v23: () => _e,
    v24: () => ve,
    v25: () => ye,
    v26: () => be,
    v27: () => xe,
    v28: () => Se,
    v29: () => Ce,
    v3: () => B,
    v30: () => we,
    v31: () => Te,
    v32: () => Ee,
    v33: () => De,
    v34: () => Oe,
    v35: () => ke,
    v36: () => Ae,
    v37: () => je,
    v38: () => Me,
    v39: () => Ne,
    v4: () => V,
    v40: () => Pe,
    v41: () => Fe,
    v42: () => Ie,
    v43: () => Le,
    v44: () => Re,
    v45: () => ze,
    v46: () => Be,
    v47: () => Ve,
    v5: () => H,
    v6: () => U,
    v7: () => W,
    v8: () => G,
    v9: () => K,
  }),
  R,
  ae,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  oe,
  se,
  ce,
  le,
  ue,
  de,
  fe,
  pe,
  me,
  he,
  ge,
  _e,
  ve,
  ye,
  be,
  xe,
  Se,
  Ce,
  we,
  Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He;
function Ue() {
  return (Ue = t(() => {
    ((R = `Tier0 支持哪些工业协议？`),
      (ae = `Tier0 支持常见的工业连接场景，包括 OPC UA、MQTT、Modbus、Siemens S7、Rockwell / Allen-Bradley EtherNet/IP、Omron FINS、Beckhoff ADS、BACnet、API、数据库和文件等。连接能力也可根据项目需求扩展。`),
      (z = `UNS 只适合大型企业吗？`),
      (B = `不是。大型企业通常会更早感受到这种痛点，但中小型制造企业如果希望避免按应用逐个建设导致的数据和系统碎片化，也同样可以从 UNS 中受益。`),
      (V = `两者可以共存吗？`),
      (H = `可以。许多制造企业会组合使用不同类型的系统，而不是选择一种系统来覆盖所有事情。`),
      (U = `工业应用平台等同于低代码平台吗？`),
      (W = `不完全是。低代码描述的是一种开发方式。工业应用平台应当具备低代码能力，但同时还需要包含运营上下文、数据结构，以及对工业应用场景的适配能力。`),
      (G = `车间数字化一定需要完整的 MES 项目吗？`),
      (K = `不一定。许多有价值的改进可以在决定是否上完整 MES 之前就先启动。`),
      (q = `轻量级数字化只适合小公司吗？`),
      (J = `不是。大型制造企业也会将轻量级数字化用于特定工作流，尤其是那些不足以支撑大型项目投入的场景。`),
      (oe = `Tier0 可以从哪些设备和系统采集数据？`),
      (se = `典型采集对象包括 PLC、机器、传感器、网关、OPC 服务器、MES、WMS、ERP、历史数据库、数据库、REST API、文件以及第三方应用。`),
      (ce = `UNS 会替代 MES 吗？`),
      (le = `不会。UNS 是一种数据基础架构方法，而 MES 是一类执行系统。两者可以并存。`),
      (ue = `哪个更适合作为第一个项目？`),
      (de = `这取决于第一个要解决的问题是偏整体系统层面的，还是偏具体工作流层面的。`),
      (fe = `平台是否意味着我们需要内部开发人员？`),
      (pe = `不一定。有些平台的设计目标就是让解决方案团队、领域专家，或具备一定技术能力的业务用户也能直接参与应用构建。`),
      (me = `最适合作为起点的第一个工作流是什么？`),
      (he = `一个高频发生、痛点明显，并且足够简单、能够快速落地的工作流。`),
      (ge = `轻量级是否意味着低价值？`),
      (_e = `不是。有些最重要的运营痛点，恰恰来自那些规模不大但高频发生的工作流。`),
      (ve = `数据发布前可以转换吗？`),
      (ye = `可以。数据发布到 Tier0 之前，可先进行过滤、映射、标准化、补充上下文，并按规则转发。`),
      (be = `开始之前需要把所有内容都建模好吗？`),
      (xe = `不一定。更实际的做法是先从一个业务场景开始，并随着时间推移，基于清晰的命名规范逐步扩展命名空间。`),
      (Se = `应该先评估什么？`),
      (Ce = `应先明确范围、用户、数据源、预期的流程管控要求，以及未来扩展的可能性有多大。`),
      (we = `可以先从一个小型用例开始吗？`),
      (Te = `可以。事实上，这通常是最好的起步方式。`),
      (Ee = `是否应该一次性把所有流程都数字化？`),
      (De = `通常不建议。分阶段推进会更现实，风险也更低。`),
      (Oe = `轻量级数字化后续可以扩展吗？`),
      (ke = `可以，前提是底层的数据结构和应用构建方式足够清晰、规范。`),
      (Ae = `是否支持实时数据流？`),
      (je = `可以。Tier0 支持对流式工业数据和运营数据进行实时采集与转发。`),
      (Me = `是否仅适用于 OT 数据？`),
      (Ne = `不是。Tier0 同时支持 OT 和 IT 数据，可接入机器信号、交易数据、订单、库存数据，以及通过 API 获取的系统数据`),
      (Pe = `数据采集和统一命名空间有什么区别？`),
      (Fe = `数据采集负责连接并接入数据；统一命名空间负责将这些数据组织成共享结构，并对外开放，以便在不同场景中复用。`),
      (Ie = `如何配置数据采集？`),
      (Le = `数据采集通常通过流程化编辑器进行配置。工程师可以按需组合数据源访问、转换、转发和发布节点，并在配置完成后部署流程以采集数据。`),
      (Re = `同一个数据流可以在不同项目中复用吗？`),
      (ze = `可以。标准化的数据流模式可在不同应用、产线、仓库和站点中复用。`),
      (Be = `是否需要写代码？`),
      (Ve = `不一定。许多集成无需编写代码，可通过流程化配置完成，从而提升实施效率，并便于后续维护。`),
      (He = {
        exports: {
          v16: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v17: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v19: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v47: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v11: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v34: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v33: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v35: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v20: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v6: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v28: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v41: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v3: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v25: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v22: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v24: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v9: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v40: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v26: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v8: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v0: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v44: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v31: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v15: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v37: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v32: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v30: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v10: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v36: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v18: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v14: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v7: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v21: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v12: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v39: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v23: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v2: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v13: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v42: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v29: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v46: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v4: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v43: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v1: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v38: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v27: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v45: { type: `variable`, annotations: { framerContractVersion: `1` } },
          v5: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
function Y(e, t) {
  for (; t; ) {
    let n = We[t.id];
    if (n) {
      let t = n[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
var We;
function Ge() {
  return (Ge = t(() => {
    (Ue(), (We = { AYmst8Nt3: L }));
  }))();
}
var Ke = /* @__PURE__ */ e({ __FramerMetadata__: () => nt, default: () => $ });
function X(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var qe, Je, Ye, Xe, Z, Q, Ze, Qe, $e, et, tt, $, nt;
function rt() {
  return (rt = t(() => {
    (c(),
      x(),
      m(),
      i(),
      I(),
      Ge(),
      (qe = S(F)),
      (Je = [`RqmIgAkEQ`, `Rosw624Pk`, `n_6LaWqIe`, `rgbyw3Tqm`, `tn38HP0I5`, `O7CBlrpFs`]),
      (Ye = `framer-CFese`),
      (Xe = {
        n_6LaWqIe: `framer-v-e048me`,
        O7CBlrpFs: `framer-v-y57939`,
        rgbyw3Tqm: `framer-v-6egyuk`,
        Rosw624Pk: `framer-v-1och48g`,
        RqmIgAkEQ: `framer-v-1xfqyyy`,
        tn38HP0I5: `framer-v-hevcos`,
      }),
      (Z = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (Q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ze = ({ value: e, children: t }) => {
        let n = a(f),
          i = e ?? n.transition,
          o = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ u(f.Provider, { value: o, children: t });
      }),
      (Qe = {
        "From Excel to System: What Changes": `n_6LaWqIe`,
        "What Is an Industrial App Platform": `rgbyw3Tqm`,
        "What Is Lightweight Digitalization": `O7CBlrpFs`,
        "What Is Shopfloor Digitalization": `tn38HP0I5`,
        "What is UNS": `Rosw624Pk`,
        Defailt: `RqmIgAkEQ`,
      }),
      ($e = p.create(o)),
      (et = ({ height: e, id: t, iGNORECursor: n, width: r, ...i }) => ({
        ...i,
        swuYCgX81: n ?? i.swuYCgX81,
        variant: Qe[i.variant] ?? i.variant ?? `RqmIgAkEQ`,
      })),
      (tt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = b(
        /* @__PURE__ */ l(function (e, t) {
          let r = s(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: c } = te(),
            l = ee(),
            { style: f, className: m, layoutId: g, variant: _, swuYCgX81: b, ...x } = et(e),
            {
              baseVariant: S,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: D,
              gestureVariant: O,
              isLoading: ne,
              setGestureState: re,
              setVariant: k,
              variants: A,
            } = v({
              cycleOrder: Je,
              defaultVariant: `RqmIgAkEQ`,
              ref: i,
              variant: _,
              variantClassNames: Xe,
            }),
            j = tt(e, A),
            M = y(Ye),
            N = () =>
              ![`Rosw624Pk`, `n_6LaWqIe`, `rgbyw3Tqm`, `tn38HP0I5`, `O7CBlrpFs`].includes(S);
          return /*#__PURE__*/ u(h, {
            id: g ?? a,
            children: /*#__PURE__*/ u($e, {
              animate: A,
              initial: !1,
              children: /*#__PURE__*/ u(Ze, {
                value: Z,
                children: /*#__PURE__*/ d(p.div, {
                  ...x,
                  ...D,
                  className: y(M, `framer-1xfqyyy`, m, w),
                  "data-border": !0,
                  "data-framer-cursor": b,
                  "data-framer-name": `Defailt`,
                  layoutDependency: j,
                  layoutId: `RqmIgAkEQ`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgba(255, 255, 255, 0.1)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                    ...f,
                  },
                  ...X(
                    {
                      n_6LaWqIe: { "data-framer-name": `From Excel to System: What Changes` },
                      O7CBlrpFs: { "data-framer-name": `What Is Lightweight Digitalization` },
                      rgbyw3Tqm: { "data-framer-name": `What Is an Industrial App Platform` },
                      Rosw624Pk: { "data-framer-name": `What is UNS` },
                      tn38HP0I5: { "data-framer-name": `What Is Shopfloor Digitalization` },
                    },
                    S,
                    O
                  ),
                  children: [
                    /*#__PURE__*/ u(C, {
                      height: 124,
                      width: `calc(${l?.width || `100vw`} - 40px)`,
                      y: (l?.y || 0) + 0 + 0,
                      ...X(
                        {
                          n_6LaWqIe: { width: l?.width || `100vw` },
                          O7CBlrpFs: { width: l?.width || `100vw` },
                          rgbyw3Tqm: { width: l?.width || `100vw` },
                          Rosw624Pk: { width: l?.width || `100vw` },
                          tn38HP0I5: { width: l?.width || `100vw` },
                        },
                        S,
                        O
                      ),
                      children: /*#__PURE__*/ u(E, {
                        className: `framer-19asryt-container`,
                        isModuleExternal: !0,
                        layoutDependency: j,
                        layoutId: `WriRG_pER-container`,
                        nodeId: `WriRG_pER`,
                        rendersWithMotion: !0,
                        scopeId: `BGusUp37q`,
                        children: /*#__PURE__*/ u(F, {
                          height: `100%`,
                          id: `WriRG_pER`,
                          layoutId: `WriRG_pER`,
                          style: { width: `100%` },
                          T8rQFvSBR:
                            Y(`v1`, o) ??
                            `Tier0 supports common industrial connectivity scenarios including OPC UA, MQTT, Modbus, Siemens S7, Rockwell / Allen-Bradley EtherNet/IP, Omron FINS, Beckhoff ADS, BACnet, APIs, databases, and files. Support can be extended based on project requirements.`,
                          variant: Q(`xqRmY8qi0`),
                          W88zB8mIG: Y(`v0`, o) ?? `What industrial protocols does Tier0 support?`,
                          width: `100%`,
                          ...X(
                            {
                              n_6LaWqIe: {
                                T8rQFvSBR:
                                  Y(`v5`, o) ??
                                  `Yes. Many manufacturers combine system categories rather than choosing one for everything.`,
                                W88zB8mIG: Y(`v4`, o) ?? `两者可以共存吗？`,
                              },
                              O7CBlrpFs: {
                                T8rQFvSBR:
                                  Y(`v11`, o) ??
                                  `No. Large manufacturers also use lightweight digitalization for targeted workflows that do not justify a large project.`,
                                W88zB8mIG:
                                  Y(`v10`, o) ??
                                  `轻量数字化只适用于小公司吗？`,
                              },
                              rgbyw3Tqm: {
                                T8rQFvSBR:
                                  Y(`v7`, o) ??
                                  `Not exactly. Low-code describes a development approach. An industrial app platform should include that capability, but also operational context, data structure, and industrial use-case fit.`,
                                W88zB8mIG:
                                  Y(`v6`, o) ??
                                  `工业应用平台等同于低代码平台吗？`,
                              },
                              Rosw624Pk: {
                                T8rQFvSBR:
                                  Y(`v3`, o) ??
                                  `No. Large enterprises often feel the pain first, but smaller manufacturers can also benefit when they want to avoid fragmented app-by-app growth.`,
                                W88zB8mIG: Y(`v2`, o) ?? `UNS 只适用于大型企业吗？`,
                              },
                              tn38HP0I5: {
                                T8rQFvSBR:
                                  Y(`v9`, o) ??
                                  `No. Many useful improvements can start well before a full MES decision.`,
                                W88zB8mIG:
                                  Y(`v8`, o) ??
                                  `车间数字化需要完整的 MES 项目吗？`,
                              },
                            },
                            S,
                            O
                          ),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ u(C, {
                      height: 124,
                      width: `calc(${l?.width || `100vw`} - 40px)`,
                      y: (l?.y || 0) + 0 + 124,
                      ...X(
                        {
                          n_6LaWqIe: { width: l?.width || `100vw` },
                          O7CBlrpFs: { width: l?.width || `100vw` },
                          rgbyw3Tqm: { width: l?.width || `100vw` },
                          Rosw624Pk: { width: l?.width || `100vw` },
                          tn38HP0I5: { width: l?.width || `100vw` },
                        },
                        S,
                        O
                      ),
                      children: /*#__PURE__*/ u(E, {
                        className: `framer-15co4z1-container`,
                        isModuleExternal: !0,
                        layoutDependency: j,
                        layoutId: `ZX5XgtOm2-container`,
                        nodeId: `ZX5XgtOm2`,
                        rendersWithMotion: !0,
                        scopeId: `BGusUp37q`,
                        children: /*#__PURE__*/ u(F, {
                          height: `100%`,
                          id: `ZX5XgtOm2`,
                          layoutId: `ZX5XgtOm2`,
                          style: { width: `100%` },
                          T8rQFvSBR:
                            Y(`v13`, o) ??
                            `Typical collection targets include PLCs, machines, sensors, gateways, OPC servers, MES, WMS, ERP, historians, databases, REST APIs, files, and third-party applications.`,
                          variant: Q(`xqRmY8qi0`),
                          W88zB8mIG:
                            Y(`v12`, o) ??
                            `What kinds of devices and systems can Tier0 collect from?`,
                          width: `100%`,
                          ...X(
                            {
                              n_6LaWqIe: {
                                T8rQFvSBR:
                                  Y(`v17`, o) ??
                                  `That depends on whether the first problem is broad and system-level or focused and workflow-level.`,
                                W88zB8mIG: Y(`v16`, o) ?? `哪个更适合作为首个项目？`,
                              },
                              O7CBlrpFs: {
                                T8rQFvSBR:
                                  Y(`v23`, o) ??
                                  `No. Some of the most important operational pain points come from small but frequent workflows.`,
                                W88zB8mIG: Y(`v22`, o) ?? `轻量是否意味着价值低？`,
                              },
                              rgbyw3Tqm: {
                                T8rQFvSBR:
                                  Y(`v19`, o) ??
                                  `Not always. Some platforms are designed so solution teams, domain experts, or technically capable business users can participate directly.`,
                                W88zB8mIG:
                                  Y(`v18`, o) ??
                                  `使用平台是否意味着需要自有开发团队？`,
                              },
                              Rosw624Pk: {
                                T8rQFvSBR:
                                  Y(`v15`, o) ??
                                  `No. A UNS is a data foundation approach. MES is an execution system category. The two can coexist.`,
                                W88zB8mIG: Y(`v14`, o) ?? `UNS 会取代 MES 吗？`,
                              },
                              tn38HP0I5: {
                                T8rQFvSBR:
                                  Y(`v21`, o) ??
                                  `A workflow that is frequent, painful, and simple enough to implement quickly.`,
                                W88zB8mIG: Y(`v20`, o) ?? `最适合先落地哪个工作流？`,
                              },
                            },
                            S,
                            O
                          ),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ u(C, {
                      height: 124,
                      width: `calc(${l?.width || `100vw`} - 40px)`,
                      y: (l?.y || 0) + 0 + 248,
                      ...X(
                        {
                          n_6LaWqIe: { width: l?.width || `100vw` },
                          O7CBlrpFs: { width: l?.width || `100vw` },
                          rgbyw3Tqm: { width: l?.width || `100vw` },
                          Rosw624Pk: { width: l?.width || `100vw` },
                          tn38HP0I5: { width: l?.width || `100vw` },
                        },
                        S,
                        O
                      ),
                      children: /*#__PURE__*/ u(E, {
                        className: `framer-yxduri-container`,
                        isModuleExternal: !0,
                        layoutDependency: j,
                        layoutId: `fsP2rHkeG-container`,
                        nodeId: `fsP2rHkeG`,
                        rendersWithMotion: !0,
                        scopeId: `BGusUp37q`,
                        children: /*#__PURE__*/ u(F, {
                          height: `100%`,
                          id: `fsP2rHkeG`,
                          layoutId: `fsP2rHkeG`,
                          style: { width: `100%` },
                          T8rQFvSBR:
                            Y(`v25`, o) ??
                            `Yes. Data can be filtered, mapped, normalized, enriched, and routed before being published into Tier0.`,
                          variant: Q(`xqRmY8qi0`),
                          W88zB8mIG:
                            Y(`v24`, o) ?? `Can data be transformed before it is published?`,
                          width: `100%`,
                          ...X(
                            {
                              n_6LaWqIe: {
                                T8rQFvSBR:
                                  Y(`v29`, o) ??
                                  `Clarify scope, users, data sources, expected process control, and how much future expansion is likely.`,
                                W88zB8mIG: Y(`v28`, o) ?? `首先应该评估什么？`,
                              },
                              O7CBlrpFs: {
                                T8rQFvSBR:
                                  Y(`v35`, o) ??
                                  `Yes, if the underlying data and application approach are structured well enough.`,
                                W88zB8mIG:
                                  Y(`v34`, o) ?? `轻量数字化后续可以扩展吗？`,
                              },
                              rgbyw3Tqm: {
                                T8rQFvSBR:
                                  Y(`v31`, o) ??
                                  `Yes. In fact, that is often the best way to start.`,
                                W88zB8mIG: Y(`v30`, o) ?? `可以从一个小场景开始吗？`,
                              },
                              Rosw624Pk: {
                                T8rQFvSBR:
                                  Y(`v27`, o) ??
                                  `Not necessarily. A practical approach is to start with one business scenario and expand the namespace with clear conventions over time.`,
                                W88zB8mIG:
                                  Y(`v26`, o) ?? `开始之前需要对所有数据建模吗？`,
                              },
                              tn38HP0I5: {
                                T8rQFvSBR:
                                  Y(`v33`, o) ??
                                  `Usually not. A phased approach is more realistic and lower risk.`,
                                W88zB8mIG: Y(`v32`, o) ?? `需要一次性将所有业务数字化吗？`,
                              },
                            },
                            S,
                            O
                          ),
                        }),
                      }),
                    }),
                    N() &&
                      /*#__PURE__*/ u(C, {
                        height: 124,
                        width: `calc(${l?.width || `100vw`} - 40px)`,
                        y: (l?.y || 0) + 0 + 372,
                        children: /*#__PURE__*/ u(E, {
                          className: `framer-19ume9j-container`,
                          isModuleExternal: !0,
                          layoutDependency: j,
                          layoutId: `o6Amup02N-container`,
                          nodeId: `o6Amup02N`,
                          rendersWithMotion: !0,
                          scopeId: `BGusUp37q`,
                          children: /*#__PURE__*/ u(F, {
                            height: `100%`,
                            id: `o6Amup02N`,
                            layoutId: `o6Amup02N`,
                            style: { width: `100%` },
                            T8rQFvSBR:
                              Y(`v37`, o) ??
                              `Yes. Tier0 supports real-time collection and routing for streaming industrial and operational data.`,
                            variant: Q(`xqRmY8qi0`),
                            W88zB8mIG: Y(`v36`, o) ?? `Does it support real-time data flows?`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    N() &&
                      /*#__PURE__*/ u(C, {
                        height: 124,
                        width: `calc(${l?.width || `100vw`} - 40px)`,
                        y: (l?.y || 0) + 0 + 496,
                        children: /*#__PURE__*/ u(E, {
                          className: `framer-7l266m-container`,
                          isModuleExternal: !0,
                          layoutDependency: j,
                          layoutId: `DQlgIit7n-container`,
                          nodeId: `DQlgIit7n`,
                          rendersWithMotion: !0,
                          scopeId: `BGusUp37q`,
                          children: /*#__PURE__*/ u(F, {
                            height: `100%`,
                            id: `DQlgIit7n`,
                            layoutId: `DQlgIit7n`,
                            style: { width: `100%` },
                            T8rQFvSBR:
                              Y(`v39`, o) ??
                              `No. It is designed for both OT and IT data, including machine signals, transactions, orders, inventory data, and API-based system data.`,
                            variant: Q(`xqRmY8qi0`),
                            W88zB8mIG: Y(`v38`, o) ?? `Is this only for OT data?`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    N() &&
                      /*#__PURE__*/ u(C, {
                        height: 124,
                        width: `calc(${l?.width || `100vw`} - 40px)`,
                        y: (l?.y || 0) + 0 + 620,
                        children: /*#__PURE__*/ u(E, {
                          className: `framer-hnc67h-container`,
                          isModuleExternal: !0,
                          layoutDependency: j,
                          layoutId: `UBVybjHjv-container`,
                          nodeId: `UBVybjHjv`,
                          rendersWithMotion: !0,
                          scopeId: `BGusUp37q`,
                          children: /*#__PURE__*/ u(F, {
                            height: `100%`,
                            id: `UBVybjHjv`,
                            layoutId: `UBVybjHjv`,
                            style: { width: `100%` },
                            T8rQFvSBR:
                              Y(`v41`, o) ??
                              `Data Collection is used to connect and ingest data. UNS is used to organize and expose that data in a shared structure for reuse.`,
                            variant: Q(`xqRmY8qi0`),
                            W88zB8mIG: Y(`v40`, o) ?? `How is data collection different from UNS?`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    N() &&
                      /*#__PURE__*/ u(C, {
                        height: 124,
                        width: `calc(${l?.width || `100vw`} - 40px)`,
                        y: (l?.y || 0) + 0 + 744,
                        children: /*#__PURE__*/ u(E, {
                          className: `framer-21ebe0-container`,
                          isModuleExternal: !0,
                          layoutDependency: j,
                          layoutId: `pCOOdmkMN-container`,
                          nodeId: `pCOOdmkMN`,
                          rendersWithMotion: !0,
                          scopeId: `BGusUp37q`,
                          children: /*#__PURE__*/ u(F, {
                            height: `100%`,
                            id: `pCOOdmkMN`,
                            layoutId: `pCOOdmkMN`,
                            style: { width: `100%` },
                            T8rQFvSBR:
                              Y(`v43`, o) ??
                              `It is typically configured through a flow-based editor where engineers assemble nodes for source access, transformation, routing, and publishing, then deploy the flow for runtime execution.`,
                            variant: Q(`xqRmY8qi0`),
                            W88zB8mIG: Y(`v42`, o) ?? `How is data collection configured?`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    N() &&
                      /*#__PURE__*/ u(C, {
                        height: 124,
                        width: `calc(${l?.width || `100vw`} - 40px)`,
                        y: (l?.y || 0) + 0 + 868,
                        children: /*#__PURE__*/ u(E, {
                          className: `framer-1ahd74h-container`,
                          isModuleExternal: !0,
                          layoutDependency: j,
                          layoutId: `L3UsOI557-container`,
                          nodeId: `L3UsOI557`,
                          rendersWithMotion: !0,
                          scopeId: `BGusUp37q`,
                          children: /*#__PURE__*/ u(F, {
                            height: `100%`,
                            id: `L3UsOI557`,
                            layoutId: `L3UsOI557`,
                            style: { width: `100%` },
                            T8rQFvSBR:
                              Y(`v45`, o) ??
                              `Yes. Standard data flow patterns can be reused across applications, production lines, warehouses, and sites.`,
                            variant: Q(`xqRmY8qi0`),
                            W88zB8mIG:
                              Y(`v44`, o) ?? `Can the same data flow be reused across projects?`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    N() &&
                      /*#__PURE__*/ u(C, {
                        height: 124,
                        width: `calc(${l?.width || `100vw`} - 40px)`,
                        y: (l?.y || 0) + 0 + 992,
                        children: /*#__PURE__*/ u(E, {
                          className: `framer-1ncas6s-container`,
                          isModuleExternal: !0,
                          layoutDependency: j,
                          layoutId: `hvx1rAOgo-container`,
                          nodeId: `hvx1rAOgo`,
                          rendersWithMotion: !0,
                          scopeId: `BGusUp37q`,
                          children: /*#__PURE__*/ u(F, {
                            height: `100%`,
                            id: `hvx1rAOgo`,
                            layoutId: `hvx1rAOgo`,
                            style: { width: `100%` },
                            T8rQFvSBR:
                              Y(`v47`, o) ??
                              `Not always. Many integrations can be configured through flow-based methods, which makes implementation faster and easier to maintain.`,
                            variant: Q(`xqRmY8qi0`),
                            W88zB8mIG: Y(`v46`, o) ?? `Is coding required?`,
                            width: `100%`,
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-CFese.framer-b8rwu0, .framer-CFese .framer-b8rwu0 { display: block; }`,
          `.framer-CFese.framer-1xfqyyy { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: 1000px; }`,
          `.framer-CFese .framer-19asryt-container, .framer-CFese .framer-15co4z1-container, .framer-CFese .framer-yxduri-container, .framer-CFese .framer-19ume9j-container, .framer-CFese .framer-7l266m-container, .framer-CFese .framer-hnc67h-container, .framer-CFese .framer-21ebe0-container, .framer-CFese .framer-1ahd74h-container, .framer-CFese .framer-1ncas6s-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-CFese.framer-v-1och48g.framer-1xfqyyy, .framer-CFese.framer-v-e048me.framer-1xfqyyy, .framer-CFese.framer-v-6egyuk.framer-1xfqyyy, .framer-CFese.framer-v-hevcos.framer-1xfqyyy, .framer-CFese.framer-v-y57939.framer-1xfqyyy { padding: 0px; }`,
          `.framer-CFese[data-border="true"]::after, .framer-CFese [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-CFese`
      )),
      ($.displayName = `FAQs`),
      ($.defaultProps = { height: 612, width: 1e3 }),
      _($, {
        variant: {
          options: [`RqmIgAkEQ`, `Rosw624Pk`, `n_6LaWqIe`, `rgbyw3Tqm`, `tn38HP0I5`, `O7CBlrpFs`],
          optionTitles: [
            `Defailt`,
            `What is UNS`,
            `From Excel to System: What Changes`,
            `What Is an Industrial App Platform`,
            `What Is Shopfloor Digitalization`,
            `What Is Lightweight Digitalization`,
          ],
          title: `Variant`,
          type: D.Enum,
        },
        swuYCgX81: { title: `[IGNORE] Cursor`, type: D.CustomCursor },
      }),
      T($, [{ explicitInter: !0, fonts: [] }, ...qe], { supportsExplicitInterCodegen: !0 }),
      (nt = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerBGusUp37q`,
            slots: [],
            annotations: {
              framerIntrinsicHeight: `612`,
              framerColorSyntax: `true`,
              framerIntrinsicWidth: `1000`,
              framerVariables: `{"swuYCgX81":"iGNORECursor"}`,
              framerAutoSizeImages: `true`,
              framerDisplayContentsDiv: `false`,
              framerImmutableVariables: `true`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Rosw624Pk":{"layout":["fixed","auto"]},"n_6LaWqIe":{"layout":["fixed","auto"]},"rgbyw3Tqm":{"layout":["fixed","auto"]},"tn38HP0I5":{"layout":["fixed","auto"]},"O7CBlrpFs":{"layout":["fixed","auto"]}}}`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { $ as n, rt as r, Ke as t };
//# sourceMappingURL=BGusUp37q.Cc4Jwqwt.mjs.map
