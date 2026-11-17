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
  M as _,
  Nt as v,
  O as y,
  P as b,
  Pt as x,
  Q as S,
  gt as C,
  j as w,
  s as T,
  wt as E,
  y as D,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
function O(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var k, A, j, M, N, P, F, I, L, R, z;
function B() {
  return (B = e(() => {
    (s(),
      S(),
      p(),
      r(),
      (k = { gYqLQJaHI: { hover: !0 }, WSy7Sk4US: { hover: !0 } }),
      (A = [`gYqLQJaHI`, `WSy7Sk4US`]),
      (j = `framer-IqmJU`),
      (M = { gYqLQJaHI: `framer-v-jd8ifz`, WSy7Sk4US: `framer-v-14aieu` }),
      (N = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (P = ({ value: e, children: t }) => {
        let r = i(d),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ l(d.Provider, { value: o, children: t });
      }),
      (F = { "Variant 1": `gYqLQJaHI`, "Variant 2": `WSy7Sk4US` }),
      (I = f.create(a)),
      (L = ({
        bGFill: e,
        bGHoverFill: t,
        descriptionColor: n,
        descriptionHoverColor: r,
        fontSize: i,
        height: a,
        id: o,
        link: s,
        text: c,
        title: l,
        titleTextColor: u,
        visible: d,
        width: f,
        ...p
      }) => ({
        ...p,
        Bl9NYECTJ: r ?? p.Bl9NYECTJ ?? `rgb(216, 216, 217)`,
        excG2ycRK: i ?? p.excG2ycRK ?? 16,
        Ft3OV1du0: l ?? p.Ft3OV1du0 ?? `App Library`,
        GbwKGBBdi: u ?? p.GbwKGBBdi ?? `rgb(23, 26, 34)`,
        lVV0j5K4S: d ?? p.lVV0j5K4S,
        nZYRErOCO:
          c ?? p.nZYRErOCO ?? `Production-ready industrial apps, ready to use and easy to adapt`,
        osIMBk3va: s ?? p.osIMBk3va,
        PA4ruD5Tl: t ?? p.PA4ruD5Tl ?? `rgba(250, 250, 250, 0.5)`,
        PeGC4Vb3l: n ?? p.PeGC4Vb3l ?? `rgb(120, 118, 112)`,
        variant: F[p.variant] ?? p.variant ?? `gYqLQJaHI`,
        yc8xhFk7o:
          e ??
          p.yc8xhFk7o ??
          `var(--token-7122224f-85bb-46cf-a093-189b897a9de6, rgb(250, 250, 249))`,
      })),
      (R = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (z = x(
        /* @__PURE__ */ c(function (e, n) {
          let r = o(null),
            i = n ?? r,
            s = t(),
            { activeLocale: c, setLocale: d } = E();
          C();
          let {
              style: p,
              className: g,
              layoutId: _,
              variant: x,
              Ft3OV1du0: S,
              nZYRErOCO: w,
              yc8xhFk7o: T,
              osIMBk3va: F,
              PA4ruD5Tl: z,
              GbwKGBBdi: B,
              PeGC4Vb3l: V,
              Bl9NYECTJ: H,
              lVV0j5K4S: U,
              excG2ycRK: W,
              ...G
            } = L(e),
            {
              baseVariant: K,
              classNames: q,
              clearLoadingGesture: J,
              gestureHandlers: Y,
              gestureVariant: X,
              isLoading: ee,
              setGestureState: te,
              setVariant: ne,
              variants: Z,
            } = v({
              cycleOrder: A,
              defaultVariant: `gYqLQJaHI`,
              enabledGestures: k,
              ref: i,
              variant: x,
              variantClassNames: M,
            }),
            Q = R(e, Z),
            $ = b(j),
            re = (e) => (X === `WSy7Sk4US-hover` || K === `WSy7Sk4US` ? e : !0);
          return /*#__PURE__*/ l(m, {
            id: _ ?? s,
            children: /*#__PURE__*/ l(I, {
              animate: Z,
              initial: !1,
              children: /*#__PURE__*/ l(P, {
                value: N,
                children: /*#__PURE__*/ l(D, {
                  href: F,
                  motionChild: !0,
                  nodeId: `gYqLQJaHI`,
                  openInNewTab: !0,
                  scopeId: `wD5SMEgaz`,
                  ...O({ WSy7Sk4US: { openInNewTab: !1, smoothScroll: !0 } }, K, X),
                  children: /*#__PURE__*/ l(f.a, {
                    ...G,
                    ...Y,
                    className: `${b($, `framer-jd8ifz`, g, q)} framer-h6bmfj`,
                    "data-framer-name": `Variant 1`,
                    layoutDependency: Q,
                    layoutId: `gYqLQJaHI`,
                    ref: i,
                    style: {
                      backgroundColor: T,
                      borderBottomLeftRadius: 3,
                      borderBottomRightRadius: 3,
                      borderTopLeftRadius: 3,
                      borderTopRightRadius: 3,
                      ...p,
                    },
                    variants: { "gYqLQJaHI-hover": { backgroundColor: z } },
                    ...O({ WSy7Sk4US: { "data-framer-name": `Variant 2` } }, K, X),
                    children: /*#__PURE__*/ u(f.div, {
                      className: `framer-ef2h58`,
                      "data-framer-name": `Frame 1321316024`,
                      layoutDependency: Q,
                      layoutId: `o9v_aCOVA`,
                      children: [
                        /*#__PURE__*/ u(f.div, {
                          className: `framer-1yubavx`,
                          "data-framer-name": `Frame 2147223991`,
                          layoutDependency: Q,
                          layoutId: `NNGeAAV0G`,
                          children: [
                            /*#__PURE__*/ l(h, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ l(a, {
                                children: /*#__PURE__*/ l(f.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                    "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                    "--framer-font-size": `18px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-letter-spacing": `0px`,
                                    "--framer-line-height": `18.75px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(23, 26, 34))`,
                                  },
                                  children: `App Library`,
                                }),
                              }),
                              className: `framer-y18ebn`,
                              "data-framer-name": `App Library`,
                              fonts: [`GF;IBM Plex Sans-600`],
                              layoutDependency: Q,
                              layoutId: `oJXfno9yr`,
                              style: {
                                "--extracted-r6o4lv": `rgb(23, 26, 34)`,
                                "--framer-paragraph-spacing": `0px`,
                                "--variable-reference-excG2ycRK-wD5SMEgaz": W,
                                "--variable-reference-GbwKGBBdi-wD5SMEgaz": B,
                              },
                              text: S,
                              variants: {
                                "gYqLQJaHI-hover": {
                                  "--extracted-r6o4lv": `var(--token-74347636-d912-45a7-a971-5dac19838646, rgb(195, 196, 197))`,
                                },
                                "WSy7Sk4US-hover": { "--extracted-r6o4lv": `rgb(195, 196, 197)` },
                                WSy7Sk4US: {
                                  "--extracted-r6o4lv": `var(--variable-reference-GbwKGBBdi-wD5SMEgaz)`,
                                  "--variable-reference-excG2ycRK-wD5SMEgaz": W,
                                  "--variable-reference-GbwKGBBdi-wD5SMEgaz": B,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...O(
                                {
                                  "gYqLQJaHI-hover": {
                                    children: /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                          "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-letter-spacing": `0px`,
                                          "--framer-line-height": `18.75px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-74347636-d912-45a7-a971-5dac19838646, rgb(195, 196, 197)))`,
                                        },
                                        children: `App Library`,
                                      }),
                                    }),
                                  },
                                  "WSy7Sk4US-hover": {
                                    children: /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                          "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                          "--framer-font-weight": `600`,
                                          "--framer-letter-spacing": `0px`,
                                          "--framer-line-height": `18.75px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(195, 196, 197))`,
                                        },
                                        children: `App Library`,
                                      }),
                                    }),
                                  },
                                  WSy7Sk4US: {
                                    children: /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy02MDA=`,
                                          "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                          "--framer-font-size": `calc(var(--variable-reference-excG2ycRK-wD5SMEgaz) * 1px)`,
                                          "--framer-font-weight": `600`,
                                          "--framer-letter-spacing": `0px`,
                                          "--framer-line-height": `18.75px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-GbwKGBBdi-wD5SMEgaz))`,
                                        },
                                        children: `App Library`,
                                      }),
                                    }),
                                  },
                                },
                                K,
                                X
                              ),
                            }),
                            /*#__PURE__*/ l(f.div, {
                              className: `framer-11oszts`,
                              "data-framer-name": `arrow-up-right`,
                              layoutDependency: Q,
                              layoutId: `VA8tmegfQ`,
                              style: { rotate: 0 },
                              variants: {
                                "gYqLQJaHI-hover": { rotate: 45 },
                                "WSy7Sk4US-hover": { rotate: 45 },
                              },
                              children: /*#__PURE__*/ l(y, {
                                className: `framer-1oyzulw`,
                                "data-framer-name": `Vector`,
                                layout: `position`,
                                layoutDependency: Q,
                                layoutId: `NaDj91JDV`,
                                opacity: 1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.58 11.58"><path d="M 1.158 1.158 L 10.325 1.158 M 10.325 1.158 L 10.325 10.325 M 10.325 1.158 L 1.158 10.325" fill="transparent" stroke-width="1.83" stroke="rgb(0,0,0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                svgContentId: 11873593129,
                                withExternalLayout: !0,
                                ...O(
                                  {
                                    WSy7Sk4US: {
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.58 11.58"><path d="M 1.158 1.158 L 10.325 1.158 M 10.325 1.158 L 10.325 10.325 M 10.325 1.158 L 1.158 10.325" fill="transparent" stroke-width="1.83" stroke="var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                      svgContentId: 12312720135,
                                    },
                                  },
                                  K,
                                  X
                                ),
                              }),
                            }),
                          ],
                        }),
                        re(U !== !1) &&
                          /*#__PURE__*/ l(h, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ l(a, {
                              children: /*#__PURE__*/ l(f.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                  "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                  "--framer-font-size": `14px`,
                                  "--framer-letter-spacing": `0px`,
                                  "--framer-line-height": `20px`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(112, 119, 128))`,
                                },
                                children: `Production-ready industrial apps, ready to use and easy to adapt`,
                              }),
                            }),
                            className: `framer-1xqw9j2`,
                            "data-framer-name": `Support outbound execution, checking and shipment `,
                            fonts: [`GF;IBM Plex Sans-regular`],
                            layoutDependency: Q,
                            layoutId: `ONzQhPMwy`,
                            style: {
                              "--extracted-r6o4lv": `rgb(112, 119, 128)`,
                              "--framer-paragraph-spacing": `0px`,
                              "--variable-reference-Bl9NYECTJ-wD5SMEgaz": H,
                              "--variable-reference-PeGC4Vb3l-wD5SMEgaz": V,
                            },
                            text: w,
                            variants: {
                              "gYqLQJaHI-hover": {
                                "--extracted-r6o4lv": `var(--token-27988b78-4da3-419a-9346-60402ee10374, rgba(195, 196, 197, 0.6))`,
                              },
                              "WSy7Sk4US-hover": {
                                "--extracted-r6o4lv": `var(--variable-reference-Bl9NYECTJ-wD5SMEgaz)`,
                                "--variable-reference-Bl9NYECTJ-wD5SMEgaz": H,
                              },
                              WSy7Sk4US: {
                                "--extracted-r6o4lv": `var(--variable-reference-PeGC4Vb3l-wD5SMEgaz)`,
                                "--variable-reference-PeGC4Vb3l-wD5SMEgaz": V,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...O(
                              {
                                "gYqLQJaHI-hover": {
                                  children: /*#__PURE__*/ l(a, {
                                    children: /*#__PURE__*/ l(f.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                        "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                        "--framer-font-size": `14px`,
                                        "--framer-letter-spacing": `0px`,
                                        "--framer-line-height": `20px`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-27988b78-4da3-419a-9346-60402ee10374, rgba(195, 196, 197, 0.6)))`,
                                      },
                                      children: `Production-ready industrial apps, ready to use and easy to adapt`,
                                    }),
                                  }),
                                },
                                "WSy7Sk4US-hover": {
                                  children: /*#__PURE__*/ l(a, {
                                    children: /*#__PURE__*/ l(f.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                        "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                        "--framer-font-size": `14px`,
                                        "--framer-letter-spacing": `0px`,
                                        "--framer-line-height": `20px`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-Bl9NYECTJ-wD5SMEgaz))`,
                                      },
                                      children: `Production-ready industrial apps, ready to use and easy to adapt`,
                                    }),
                                  }),
                                },
                                WSy7Sk4US: {
                                  children: /*#__PURE__*/ l(a, {
                                    children: /*#__PURE__*/ l(f.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7SUJNIFBsZXggU2Fucy1yZWd1bGFy`,
                                        "--framer-font-family": `"IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif`,
                                        "--framer-font-size": `14px`,
                                        "--framer-letter-spacing": `0px`,
                                        "--framer-line-height": `20px`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-PeGC4Vb3l-wD5SMEgaz))`,
                                      },
                                      children: `Production-ready industrial apps, ready to use and easy to adapt`,
                                    }),
                                  }),
                                },
                              },
                              K,
                              X
                            ),
                          }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-IqmJU.framer-h6bmfj, .framer-IqmJU .framer-h6bmfj { display: block; }`,
          `.framer-IqmJU.framer-jd8ifz { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-IqmJU .framer-ef2h58 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: auto; }`,
          `.framer-IqmJU .framer-1yubavx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-IqmJU .framer-y18ebn { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-IqmJU .framer-11oszts { flex: none; gap: 0px; height: 22px; overflow: hidden; position: relative; width: 22px; }`,
          `.framer-IqmJU .framer-1oyzulw { flex: none; height: 12px; left: 5px; position: absolute; top: 5px; width: 12px; }`,
          `.framer-IqmJU .framer-1xqw9j2 { flex: none; height: 24px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-IqmJU.framer-v-14aieu.framer-jd8ifz { align-content: center; align-items: center; justify-content: center; padding: 12px; }`,
        ],
        `framer-IqmJU`
      )),
      (z.displayName = `Connect card`),
      (z.defaultProps = { height: 100, width: 166 }),
      _(z, {
        variant: {
          options: [`gYqLQJaHI`, `WSy7Sk4US`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: T.Enum,
        },
        Ft3OV1du0: {
          defaultValue: `App Library`,
          displayTextArea: !1,
          title: `Title`,
          type: T.String,
        },
        onFt3OV1du0Change: { changes: `Ft3OV1du0`, type: T.ChangeHandler },
        nZYRErOCO: {
          defaultValue: `Production-ready industrial apps, ready to use and easy to adapt`,
          displayTextArea: !1,
          title: `Text`,
          type: T.String,
        },
        onnZYRErOCOChange: { changes: `nZYRErOCO`, type: T.ChangeHandler },
        yc8xhFk7o: {
          defaultValue: `var(--token-7122224f-85bb-46cf-a093-189b897a9de6, rgb(250, 250, 249)) /* {"name":"Mild Grey"} */`,
          title: `BG Fill`,
          type: T.Color,
        },
        osIMBk3va: { title: `Link`, type: T.Link },
        PA4ruD5Tl: {
          defaultValue: `rgba(250, 250, 250, 0.5)`,
          title: `BG Hover Fill`,
          type: T.Color,
        },
        GbwKGBBdi: { defaultValue: `rgb(23, 26, 34)`, title: `title text Color`, type: T.Color },
        PeGC4Vb3l: {
          defaultValue: `rgb(120, 118, 112)`,
          title: `description Color`,
          type: T.Color,
        },
        Bl9NYECTJ: {
          defaultValue: `rgb(216, 216, 217)`,
          title: `description hover Color`,
          type: T.Color,
        },
        lVV0j5K4S: { optional: !0, title: `Visible`, type: T.Boolean },
        onlVV0j5K4SChange: { changes: `lVV0j5K4S`, type: T.ChangeHandler },
        excG2ycRK: { defaultValue: 16, title: `Font Size`, type: T.Number },
        onexcG2ycRKChange: { changes: `excG2ycRK`, type: T.ChangeHandler },
      }),
      w(
        z,
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
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var V, H, U;
function W() {
  return (W = e(() => {
    (S(),
      g.loadFonts([
        `GF;IBM Plex Sans-600`,
        `GF;IBM Plex Sans-700`,
        `GF;IBM Plex Sans-700italic`,
        `GF;IBM Plex Sans-600italic`,
      ]),
      (V = [
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
              weight: `600`,
            },
          ],
        },
      ]),
      (H = [
        `.framer-C1guP .framer-styles-preset-11wgcit:not(.rich-text-wrapper), .framer-C1guP .framer-styles-preset-11wgcit.rich-text-wrapper h1 { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 58px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -2.32px; --framer-line-height: 59.74px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #161922; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1439px) and (min-width: 0px) { .framer-C1guP .framer-styles-preset-11wgcit:not(.rich-text-wrapper), .framer-C1guP .framer-styles-preset-11wgcit.rich-text-wrapper h1 { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -2.32px; --framer-line-height: 36px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #161922; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (U = `framer-C1guP`));
  }))();
}
var G, K, q;
function J() {
  return (J = e(() => {
    (S(),
      g.loadFonts([`GF;IBM Plex Sans-500`, `GF;IBM Plex Sans-500italic`]),
      (G = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `IBM Plex Sans`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `IBM Plex Sans`,
              url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `IBM Plex Sans`,
              source: `google`,
              style: `italic`,
              uiFamilyName: `IBM Plex Sans`,
              url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (K = [
        `.framer-2Bpf7 .framer-styles-preset-zg5ubw:not(.rich-text-wrapper), .framer-2Bpf7 .framer-styles-preset-zg5ubw.rich-text-wrapper h2 { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.68px; --framer-line-height: 41.48px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #161922; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1439px) and (min-width: 0px) { .framer-2Bpf7 .framer-styles-preset-zg5ubw:not(.rich-text-wrapper), .framer-2Bpf7 .framer-styles-preset-zg5ubw.rich-text-wrapper h2 { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.68px; --framer-line-height: 30px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #161922; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (q = `framer-2Bpf7`));
  }))();
}
export { U as a, W as c, J as i, z as l, K as n, H as o, G as r, V as s, q as t, B as u };
//# sourceMappingURL=VF7HZTiAg.DUw169M-.mjs.map
