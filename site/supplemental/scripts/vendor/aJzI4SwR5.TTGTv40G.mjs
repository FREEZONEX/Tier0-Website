import { n as e, t } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  D as n,
  F as r,
  O as i,
  P as a,
  R as o,
  S as ee,
  c as s,
  m as c,
  s as l,
  u,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { S as d, Yi as f, t as p, v as te } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import {
  D as m,
  It as h,
  M as g,
  Nt as ne,
  P as _,
  Pt as v,
  Q as y,
  U as b,
  a as x,
  gt as re,
  j as S,
  k as ie,
  s as C,
  v as w,
  wt as T,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { n as E, t as D } from "./Download.ozCwRxmP.mjs?v=20261116-migration-v2";
function O(e, t) {
  for (; t; ) {
    let n = j[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function k(e) {
  let t = [];
  for (; e; ) {
    let n = j[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function A(e) {
  let t = k(e);
  if (t) throw t;
}
var j;
function M() {
  return (M = t(() => {
    (y(), (j = { AYmst8Nt3: new w(() => import("./aJzI4SwR5-0.Cl25nSKg.mjs?v=20261116-migration-v2")) }));
  }))();
}
var ae = /* @__PURE__ */ e({ __FramerMetadata__: () => Z, default: () => X });
function N(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z;
function Q() {
  return (Q = t(() => {
    (s(),
      y(),
      p(),
      i(),
      E(),
      M(),
      (P = h(f.div)),
      (F = b(D)),
      (I = { A5pmAykCu: { hover: !0, pressed: !0 } }),
      (L = [
        `A5pmAykCu`,
        `oQd7TZyy5`,
        `smdwz5Xsm`,
        `V_E4JSrQ9`,
        `rQ7RQpppK`,
        `EQ4RF_yRV`,
        `cHyuVaKYS`,
        `tQ0dPgNpL`,
        `sa1QTKDa_`,
      ]),
      (R = `framer-kPOH7`),
      (z = {
        A5pmAykCu: `framer-v-yumcz1`,
        cHyuVaKYS: `framer-v-wlkvo4`,
        EQ4RF_yRV: `framer-v-higx2u`,
        oQd7TZyy5: `framer-v-1wxt161`,
        rQ7RQpppK: `framer-v-79cga1`,
        sa1QTKDa_: `framer-v-1dqo6ed`,
        smdwz5Xsm: `framer-v-18o9er2`,
        tQ0dPgNpL: `framer-v-my5f6x`,
        V_E4JSrQ9: `framer-v-rhx4dq`,
      }),
      (B = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (V = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (H = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (U = (e, t) => `translateX(-50%) ${t}`),
      (W = (e, t) => `translate(-50%, -50%) ${t}`),
      (G = ({ value: e, children: t }) => {
        let n = a(d),
          i = e ?? n.transition,
          o = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ l(d.Provider, { value: o, children: t });
      }),
      (K = {
        "Download 01": `EQ4RF_yRV`,
        "Download 02": `cHyuVaKYS`,
        "Download 03": `tQ0dPgNpL`,
        "Download 04": `sa1QTKDa_`,
        Default: `A5pmAykCu`,
        Disabled: `smdwz5Xsm`,
        Error: `rQ7RQpppK`,
        Loading: `oQd7TZyy5`,
        Success: `V_E4JSrQ9`,
      }),
      (q = f.create(o)),
      (J = ({ height: e, id: t, successBotton: n, title: r, width: i, ...a }) => ({
        ...a,
        gnVVpbCNc: r ?? a.gnVVpbCNc ?? `加入黑客松`,
        nxrppaGUm: n ?? a.nxrppaGUm ?? `谢谢！`,
        variant: K[a.variant] ?? a.variant ?? `A5pmAykCu`,
      })),
      (Y = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = v(
        /* @__PURE__ */ c(function (e, t) {
          let r = ee(null),
            i = t ?? r,
            a = n(),
            { activeLocale: s, contentLocale: c, setLocale: d } = T();
          re();
          let {
              style: p,
              className: h,
              layoutId: g,
              variant: v,
              nxrppaGUm: y,
              gnVVpbCNc: b,
              ...S
            } = J(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: E,
              gestureHandlers: k,
              gestureVariant: j,
              isLoading: M,
              setGestureState: ae,
              setVariant: F,
              variants: K,
            } = ne({
              cycleOrder: L,
              defaultVariant: `A5pmAykCu`,
              enabledGestures: I,
              ref: i,
              variant: v,
              variantClassNames: z,
            }),
            X = Y(e, K),
            Z = _(R),
            Q = () =>
              ![`oQd7TZyy5`, `EQ4RF_yRV`, `cHyuVaKYS`, `tQ0dPgNpL`, `sa1QTKDa_`].includes(C);
          A(s);
          let oe = () => C === `oQd7TZyy5`,
            $ = () => !![`EQ4RF_yRV`, `cHyuVaKYS`, `tQ0dPgNpL`, `sa1QTKDa_`].includes(C);
          return /*#__PURE__*/ l(te, {
            id: g ?? a,
            children: /*#__PURE__*/ l(q, {
              animate: K,
              initial: !1,
              children: /*#__PURE__*/ l(G, {
                value: B,
                children: /*#__PURE__*/ u(f.button, {
                  ...S,
                  ...k,
                  className: _(Z, `framer-yumcz1`, h, w),
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: X,
                  layoutId: `A5pmAykCu`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-e85dcc3e-e592-4926-8f15-e843778b8dd7, rgb(178, 237, 29))`,
                    borderBottomLeftRadius: 2,
                    borderBottomRightRadius: 2,
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,
                    opacity: 1,
                    ...p,
                  },
                  variants: {
                    "A5pmAykCu-hover": { backgroundColor: `rgb(240, 251, 210)`, opacity: 1 },
                    "A5pmAykCu-pressed": { backgroundColor: `rgb(229, 249, 180)`, opacity: 1 },
                    cHyuVaKYS: { opacity: 1 },
                    EQ4RF_yRV: { opacity: 1 },
                    rQ7RQpppK: { backgroundColor: `rgba(255, 34, 68, 0.15)`, opacity: 1 },
                    sa1QTKDa_: { opacity: 1 },
                    smdwz5Xsm: {
                      backgroundColor: `var(--token-825b65eb-5744-4e86-9f35-b67e187b9170, rgb(195, 196, 197))`,
                      opacity: 0.5,
                    },
                    tQ0dPgNpL: { opacity: 1 },
                    V_E4JSrQ9: { opacity: 1 },
                  },
                  ...N(
                    {
                      cHyuVaKYS: { "data-framer-name": `Download 02` },
                      EQ4RF_yRV: { "data-framer-name": `Download 01` },
                      oQd7TZyy5: { "data-framer-name": `Loading` },
                      rQ7RQpppK: { "data-framer-name": `Error` },
                      sa1QTKDa_: { "data-framer-name": `Download 04` },
                      smdwz5Xsm: { "data-framer-name": `Disabled` },
                      tQ0dPgNpL: { "data-framer-name": `Download 03` },
                      V_E4JSrQ9: { "data-framer-name": `Success` },
                    },
                    C,
                    j
                  ),
                  children: [
                    Q() &&
                      /*#__PURE__*/ l(m, {
                        __fromCanvasComponent: !0,
                        children:
                          O(`v0`, c) ??
                          /*#__PURE__*/ l(o, {
                            children: /*#__PURE__*/ l(f.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                "--framer-font-weight": `600`,
                                "--framer-line-height": `1.5em`,
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                              },
                              children: `Join the Hackathon`,
                            }),
                          }),
                        className: `framer-6ejo7w`,
                        fonts: [`GF;IBM Plex Sans-600`],
                        layoutDependency: X,
                        layoutId: `WYlY0EwZ1`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: b,
                        variants: {
                          rQ7RQpppK: {
                            "--extracted-2gg91v": `normal`,
                            "--extracted-r6o4lv": `rgb(255, 34, 68)`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...N(
                          {
                            rQ7RQpppK: {
                              children:
                                O(`v1`, c) ??
                                /*#__PURE__*/ l(o, {
                                  children: /*#__PURE__*/ l(f.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                      "--framer-font-family": `"Inter"`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-style": `normal`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, normal)`,
                                      "--framer-font-weight": `600`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 34, 68))`,
                                    },
                                    children: `发生了错误`,
                                  }),
                                }),
                              fonts: [`Inter-SemiBold`],
                              text: void 0,
                            },
                            V_E4JSrQ9: {
                              children: /*#__PURE__*/ l(o, {
                                children: /*#__PURE__*/ l(f.p, {
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                    "--framer-font-size": `14px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                  },
                                  children: `Thank you!`,
                                }),
                              }),
                              fonts: [`Inter-SemiBold`],
                              text: y,
                            },
                          },
                          C,
                          j
                        ),
                      }),
                    oe() &&
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-7lkf83`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: X,
                        layoutId: `BBY1GmPE8`,
                        style: {
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        },
                        children: /*#__PURE__*/ l(P, {
                          __framer__loop: H,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: V,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-tfsowi`,
                          "data-framer-name": `Conic`,
                          layoutDependency: X,
                          layoutId: `B9K2i3eSo`,
                          style: {
                            background: `conic-gradient(from 0deg at 50% 50%, rgba(5, 11, 20, 0) 7.208614864864882deg, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)) 342deg)`,
                            mask: `none`,
                            WebkitMask: `none`,
                          },
                          variants: {
                            oQd7TZyy5: {
                              mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                              WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                            },
                          },
                          children: /*#__PURE__*/ l(f.div, {
                            className: `framer-1l6hf93`,
                            "data-framer-name": `Rounding`,
                            layoutDependency: X,
                            layoutId: `cFcBjx7wm`,
                            style: {
                              backgroundColor: `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                            transformTemplate: U,
                          }),
                        }),
                      }),
                    $() &&
                      /*#__PURE__*/ u(f.div, {
                        className: `framer-16czjnw`,
                        layoutDependency: X,
                        layoutId: `Ls3TWuN4m`,
                        children: [
                          $() &&
                            /*#__PURE__*/ l(x, {
                              children: /*#__PURE__*/ l(ie, {
                                className: `framer-19zmgwa-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                layoutDependency: X,
                                layoutId: `LOXg5P2W3-container`,
                                nodeId: `LOXg5P2W3`,
                                rendersWithMotion: !0,
                                scopeId: `aJzI4SwR5`,
                                children: /*#__PURE__*/ l(D, {
                                  fontControl: {
                                    fontFamily: `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                    fontSize: `16px`,
                                    fontStyle: `normal`,
                                    fontWeight: 700,
                                    letterSpacing: `0em`,
                                    lineHeight: `1em`,
                                    textAlign: `center`,
                                  },
                                  height: `100%`,
                                  id: `LOXg5P2W3`,
                                  layoutId: `LOXg5P2W3`,
                                  srcFile: `/assets/documents/hDJnXogt9AFjoRqNZUJP5jCu0.pdf`,
                                  srcType: `Upload`,
                                  srcURL: ``,
                                  style: { height: `100%`, width: `100%` },
                                  styleOptions: {
                                    backgroundColor: `rgba(255, 255, 255, 0)`,
                                    borderRadius: 5,
                                    color: `rgba(255, 255, 255, 0)`,
                                    gap: 5,
                                    padding: 10,
                                    paddingBottom: 10,
                                    paddingLeft: 10,
                                    paddingPerSide: !1,
                                    paddingRight: 10,
                                    paddingTop: 10,
                                  },
                                  text: O(`v2`, c) ?? `下载`,
                                  width: `100%`,
                                  ...N(
                                    {
                                      cHyuVaKYS: {
                                        srcFile: `/assets/documents/fybWQe72lMNISQTUE1exn7fW0.pdf`,
                                      },
                                      EQ4RF_yRV: {
                                        srcFile: `/assets/documents/8PNP4hM8xip8y1w0qdkDOXwsWGc.pdf`,
                                      },
                                      sa1QTKDa_: {
                                        srcFile: `/assets/documents/rT7Px2IyfaAGXqVyIVqcCsXANU.pdf`,
                                      },
                                      tQ0dPgNpL: {
                                        srcFile: `/assets/documents/vC24BdbQihnJs3Q0IbAH980yA.pdf`,
                                      },
                                    },
                                    C,
                                    j
                                  ),
                                }),
                              }),
                            }),
                          $() &&
                            /*#__PURE__*/ l(m, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ l(o, {
                                children: /*#__PURE__*/ l(f.p, {
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                    "--framer-font-size": `14px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                  },
                                  children: `Thank you!`,
                                }),
                              }),
                              className: `framer-1moycap`,
                              fonts: [`Inter-SemiBold`],
                              layoutDependency: X,
                              layoutId: `AZNDhZnLf`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: y,
                              transformTemplate: W,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...N(
                                {
                                  sa1QTKDa_: {
                                    children: /*#__PURE__*/ l(o, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                          "--framer-font-size": `14px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                        },
                                        children: `Thank you!`,
                                      }),
                                    }),
                                  },
                                },
                                C,
                                j
                              ),
                            }),
                        ],
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-kPOH7.framer-3g1vig, .framer-kPOH7 .framer-3g1vig { display: block; }`,
          `.framer-kPOH7.framer-yumcz1 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 240px; }`,
          `.framer-kPOH7 .framer-6ejo7w { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-kPOH7 .framer-7lkf83 { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: auto; overflow: hidden; position: relative; width: 20px; }`,
          `.framer-kPOH7 .framer-tfsowi { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-kPOH7 .framer-1l6hf93 { aspect-ratio: 1 / 1; flex: none; height: auto; left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `.framer-kPOH7 .framer-16czjnw { flex: none; height: 40px; overflow: visible; position: relative; width: 239px; }`,
          `.framer-kPOH7 .framer-19zmgwa-container { flex: none; height: 39px; left: 1px; position: absolute; top: calc(50.00000000000002% - 39px / 2); width: 240px; }`,
          `.framer-kPOH7 .framer-1moycap { -webkit-user-select: none; flex: none; height: auto; left: 50%; position: absolute; top: 50%; user-select: none; white-space: pre; width: auto; }`,
          `.framer-kPOH7.framer-v-1wxt161.framer-yumcz1, .framer-kPOH7.framer-v-18o9er2.framer-yumcz1, .framer-kPOH7.framer-v-rhx4dq.framer-yumcz1, .framer-kPOH7.framer-v-79cga1.framer-yumcz1, .framer-kPOH7.framer-v-higx2u.framer-yumcz1, .framer-kPOH7.framer-v-wlkvo4.framer-yumcz1, .framer-kPOH7.framer-v-my5f6x.framer-yumcz1, .framer-kPOH7.framer-v-1dqo6ed.framer-yumcz1 { cursor: unset; }`,
          `.framer-kPOH7.framer-v-1wxt161 .framer-tfsowi { overflow: hidden; }`,
        ],
        `framer-kPOH7`
      )),
      (X.displayName = `Form`),
      (X.defaultProps = { height: 40, width: 240 }),
      g(X, {
        variant: {
          options: [
            `A5pmAykCu`,
            `oQd7TZyy5`,
            `smdwz5Xsm`,
            `V_E4JSrQ9`,
            `rQ7RQpppK`,
            `EQ4RF_yRV`,
            `cHyuVaKYS`,
            `tQ0dPgNpL`,
            `sa1QTKDa_`,
          ],
          optionTitles: [
            `Default`,
            `Loading`,
            `Disabled`,
            `Success`,
            `Error`,
            `Download 01`,
            `Download 02`,
            `Download 03`,
            `Download 04`,
          ],
          title: `Variant`,
          type: C.Enum,
        },
        nxrppaGUm: {
          defaultValue: `谢谢！`,
          displayTextArea: !1,
          title: `Success Botton`,
          type: C.String,
        },
        onnxrppaGUmChange: { changes: `nxrppaGUm`, type: C.ChangeHandler },
        gnVVpbCNc: {
          defaultValue: `加入黑客松`,
          displayTextArea: !1,
          title: `Title`,
          type: C.String,
        },
        ongnVVpbCNcChange: { changes: `gnVVpbCNc`, type: C.ChangeHandler },
      }),
      S(
        X,
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
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `IBM Plex Sans`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `IBM Plex Sans`,
                url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
                weight: `700`,
              },
            ],
          },
          ...F,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Z = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FrameraJzI4SwR5`,
            slots: [],
            annotations: {
              framerImmutableVariables: `true`,
              framerContractVersion: `1`,
              framerDisplayContentsDiv: `false`,
              framerIntrinsicHeight: `40`,
              framerAutoSizeImages: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"oQd7TZyy5":{"layout":["fixed","fixed"]},"smdwz5Xsm":{"layout":["fixed","fixed"]},"V_E4JSrQ9":{"layout":["fixed","fixed"]},"rQ7RQpppK":{"layout":["fixed","fixed"]},"EQ4RF_yRV":{"layout":["fixed","fixed"]},"cHyuVaKYS":{"layout":["fixed","fixed"]},"tQ0dPgNpL":{"layout":["fixed","fixed"]},"sa1QTKDa_":{"layout":["fixed","fixed"]},"XE9KuzDxW":{"layout":["fixed","fixed"]},"f4IU4vUXO":{"layout":["fixed","fixed"]}}}`,
              framerComponentViewportWidth: `true`,
              framerIntrinsicWidth: `240`,
              framerColorSyntax: `true`,
              framerVariables: `{"nxrppaGUm":"successBotton","gnVVpbCNc":"title"}`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { ae as n, Q as r, X as t };
//# sourceMappingURL=aJzI4SwR5.TTGTv40G.mjs.map
