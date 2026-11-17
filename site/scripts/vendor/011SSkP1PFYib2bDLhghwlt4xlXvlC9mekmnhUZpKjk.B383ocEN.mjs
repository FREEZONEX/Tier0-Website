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
  O as h,
  P as g,
  Pt as _,
  Q as v,
  St as y,
  U as b,
  a as x,
  bt as ie,
  gt as ae,
  j as S,
  lt as C,
  m as w,
  o as T,
  v as E,
  w as D,
  wt as oe,
  yt as se,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { m as O, n as ce, p as k, t as A } from "./shared-lib.CHy_rbfQ.mjs?v=20261116-migration-v2";
import { i as j, n as M, r as N, t as le } from "./IEBy192yC.BYZJH9-p.mjs?v=20261116-migration-v2";
import { i as P, n as F, r as I, t as ue } from "./aqwnXEE4n.hmCSLb_E.mjs?v=20261116-migration-v2";
import { n as de, r as fe } from "./P_MLCUSc2.DJ7SLumJ.mjs?v=20261116-migration-v2";
function L(e, t) {
  for (; t; ) {
    let n = z[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function R(e) {
  let t = [];
  for (; e; ) {
    let n = z[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function pe(e) {
  let t = R(e);
  if (t) throw t;
}
var z;
function B() {
  return (B = e(() => {
    (v(), (z = { AYmst8Nt3: new E(() => import("./P_MLCUSc2-0.D2H8qOaj.mjs?v=20261116-migration-v2")) }));
  }))();
}
var V, H, U, W, G, K, q, J, Y, X, Z, Q, me, he, $, ge;
function _e() {
  return (_e = e(() => {
    (o(),
      v(),
      d(),
      r(),
      O(),
      ce(),
      P(),
      j(),
      B(),
      de(),
      (V = b(A)),
      (H = b(k)),
      (U = {
        NizB39PYO: `(max-width: 809.98px)`,
        ohEbH5C8Z: `(min-width: 1440px)`,
        vcDUhCzz9: `(min-width: 810px) and (max-width: 1439.98px)`,
      }),
      (W = () => typeof document < `u`),
      (G = []),
      (K = `framer-Nbvj5`),
      (q = {
        NizB39PYO: `framer-v-1flt3de`,
        ohEbH5C8Z: `framer-v-kqm8v6`,
        vcDUhCzz9: `framer-v-52mnml`,
      }),
      (J = (e, t, n) => (e && t ? `position` : n)),
      (Y = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (X = { Desktop: `ohEbH5C8Z`, Phone: `NizB39PYO`, Tablet: `vcDUhCzz9` }),
      (Z = ({ value: e }) =>
        y()
          ? null
          : /*#__PURE__*/ c(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Q = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: X[r.variant] ?? r.variant ?? `ohEbH5C8Z`,
      })),
      (me = /*#__PURE__*/ s(function (e, r) {
        let o = ee(null),
          s = r ?? o;
        t();
        let { activeLocale: d, contentLocale: p, setLocale: m } = oe(),
          _ = ae(),
          { style: v, className: y, layoutId: b, variant: S, ...C } = Q(e),
          E = n(() => fe({}, p), [p]);
        re(E);
        let [O, ce] = ie(S, U, !1),
          j = g(K, ue, le),
          M = i(w)?.isLayoutTemplate,
          N = !!i(te)?.transition?.layout,
          P = J(M, N);
        pe(d);
        let F = () => !W() || O !== `NizB39PYO`,
          I = () => !W() || O === `NizB39PYO`,
          de = () => !W() || O !== `vcDUhCzz9`,
          R = () => !W() || O === `vcDUhCzz9`;
        return (
          se({}),
          /*#__PURE__*/ c(w.Provider, {
            value: {
              activeVariantId: O,
              humanReadableVariantMap: X,
              primaryVariantId: `ohEbH5C8Z`,
              variantClassNames: q,
            },
            children: /*#__PURE__*/ l(ne, {
              id: b ?? `P_MLCUSc2`,
              children: [
                /*#__PURE__*/ c(Z, {
                  value: `html body { background: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ l(u.div, {
                  ...C,
                  className: g(j, `framer-kqm8v6`, y),
                  ref: s,
                  style: { ...v },
                  children: [
                    /*#__PURE__*/ c(x, {
                      height: 64,
                      width: `100vw`,
                      y: 0,
                      children: /*#__PURE__*/ c(T, {
                        className: `framer-2awf57-container`,
                        layout: P,
                        layoutScroll: !0,
                        nodeId: `Opq4hQgyN`,
                        scopeId: `P_MLCUSc2`,
                        children: /*#__PURE__*/ c(D, {
                          breakpoint: O,
                          overrides: {
                            NizB39PYO: { variant: Y(`Svy4sINhA`) },
                            vcDUhCzz9: { variant: Y(`Gw5VboM5c`) },
                          },
                          children: /*#__PURE__*/ c(A, {
                            eVOFjxm0w: `var(--token-fcaa307f-078f-4ea1-af34-d51bb82ca05a, rgba(255, 255, 255, 0))`,
                            height: `100%`,
                            id: `Opq4hQgyN`,
                            jQcddTFoz: !0,
                            layoutId: `Opq4hQgyN`,
                            style: { width: `100%` },
                            variant: Y(`LbFcBhD3w`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ l(u.div, {
                      className: `framer-1ufy1l2`,
                      layout: P,
                      children: [
                        /*#__PURE__*/ c(`div`, {
                          className: `framer-cwm47z`,
                          "data-framer-name": `01`,
                          children: /*#__PURE__*/ l(`div`, {
                            className: `framer-p81o3g`,
                            children: [
                              /*#__PURE__*/ c(D, {
                                breakpoint: O,
                                overrides: { NizB39PYO: { verticalAlignment: `bottom` } },
                                children: /*#__PURE__*/ c(f, {
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
                                        children: `提交成功！`,
                                      }),
                                    }),
                                  className: `framer-112kfae`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              /*#__PURE__*/ c(D, {
                                breakpoint: O,
                                overrides: {
                                  NizB39PYO: {
                                    children:
                                      L(`v3`, p) ??
                                      /*#__PURE__*/ c(a, {
                                        children: /*#__PURE__*/ c(`p`, {
                                          className: `framer-styles-preset-t1f9am`,
                                          "data-styles-preset": `IEBy192yC`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `center` },
                                          children: `Tier0 团队会尽快复核您的申请并与您联系`,
                                        }),
                                      }),
                                  },
                                  vcDUhCzz9: {
                                    children:
                                      L(`v2`, p) ??
                                      /*#__PURE__*/ l(a, {
                                        children: [
                                          /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-t1f9am`,
                                            "data-styles-preset": `IEBy192yC`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `Our TIER 0 team will review your request and`,
                                          }),
                                          /*#__PURE__*/ l(`p`, {
                                            className: `framer-styles-preset-t1f9am`,
                                            "data-styles-preset": `IEBy192yC`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: [
                                              `get in touch with you `,
                                              /*#__PURE__*/ c(`span`, {
                                                style: {
                                                  "--framer-text-color": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                                },
                                                children: `as soon as possible`,
                                              }),
                                              `.`,
                                            ],
                                          }),
                                        ],
                                      }),
                                  },
                                },
                                children: /*#__PURE__*/ c(f, {
                                  __fromCanvasComponent: !0,
                                  children:
                                    L(`v1`, p) ??
                                    /*#__PURE__*/ c(a, {
                                      children: /*#__PURE__*/ c(`p`, {
                                        className: `framer-styles-preset-t1f9am`,
                                        "data-styles-preset": `IEBy192yC`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `Tier0 团队会尽快复核您的申请并与您联系`,
                                      }),
                                    }),
                                  className: `framer-1b83qf5`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        }),
                        /*#__PURE__*/ l(`div`, {
                          className: `framer-1jngvtg`,
                          children: [
                            F() &&
                              /*#__PURE__*/ c(`div`, {
                                className: `framer-14jrc0v hidden-1flt3de`,
                                "data-framer-name": `Frame 1321315556`,
                                children: /*#__PURE__*/ l(`div`, {
                                  className: `framer-15njuom`,
                                  "data-framer-name": `Group 1321315568`,
                                  children: [
                                    /*#__PURE__*/ c(h, {
                                      className: `framer-132v9ei`,
                                      "data-framer-name": `Rectangle 11`,
                                      fill: `rgba(0,0,0,1)`,
                                      intrinsicHeight: 228,
                                      intrinsicWidth: 395,
                                      svg: `<svg width="395" height="228" viewBox="0 0 395 228" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M392.381 227.33L0.612016 1.14227L2.34407 0.142269L394.113 226.33L392.381 227.33Z" fill="#73B200"/>
</svg>
`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ c(h, {
                                      className: `framer-asw9ua`,
                                      "data-framer-name": `Rectangle 8`,
                                      fill: `rgba(0,0,0,1)`,
                                      intrinsicHeight: 162,
                                      intrinsicWidth: 279,
                                      svg: `<svg width="279" height="162" viewBox="0 0 279 162" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M276.768 161.175L0.782436 1.83449L2.51449 0.834492L278.5 160.175L276.768 161.175Z" fill="#73B200"/>
</svg>
`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ c(h, {
                                      className: `framer-1nmx787`,
                                      "data-framer-name": `Rectangle 9`,
                                      fill: `rgba(0,0,0,1)`,
                                      intrinsicHeight: 309,
                                      intrinsicWidth: 534,
                                      svg: `<svg width="534" height="309" viewBox="0 0 534 309" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8457 308.69L533.162 1.93452L531.43 0.934515L0.113652 307.69L1.8457 308.69Z" fill="#73B200"/>
</svg>
`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ c(h, {
                                      className: `framer-glhf43`,
                                      "data-framer-name": `Rectangle 10`,
                                      fill: `rgba(0,0,0,1)`,
                                      intrinsicHeight: 163,
                                      intrinsicWidth: 282,
                                      svg: `<svg width="282" height="163" viewBox="0 0 282 163" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M279.602 162.654L0.206683 1.34562L1.93873 0.345615L281.334 161.654L279.602 162.654Z" fill="#73B200"/>
</svg>
`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ l(`div`, {
                                      className: `framer-8zhjjf`,
                                      "data-framer-name": `Group 55340`,
                                      children: [
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-1vd0h7s`,
                                          "data-framer-name": `Vector`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 76,
                                          intrinsicWidth: 134,
                                          svg: `<svg width="134" height="76" viewBox="-1 -1 134 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.947266 0.469971L131.881 73.5853" stroke="#73B200" stroke-width="2" stroke-miterlimit="10"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-mplzor`,
                                          "data-framer-name": `Vector`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 90,
                                          intrinsicWidth: 148,
                                          svg: `<svg width="148" height="90" viewBox="-1 -1 148 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.935547 0.0883789L145.688 87.0136" stroke="#73B200" stroke-width="2" stroke-miterlimit="10"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-1xydrdk`,
                                          "data-framer-name": `Group 55334`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 89,
                                          intrinsicWidth: 288,
                                          svg: `<svg width="288" height="89" viewBox="0 0 288 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.128888 71.6991L135.998 0.00854492L287.072 88.4141" stroke="#73B200" stroke-width="2" stroke-miterlimit="10"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-360xkc`,
                                          "data-framer-name": `Vector`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 33,
                                          intrinsicWidth: 54,
                                          svg: `<svg width="54" height="33" viewBox="-2 -2 54 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49.8629 0.357178L0.134766 28.8101" stroke="#73B200" stroke-width="4" stroke-miterlimit="10"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-178hzep`,
                                          "data-framer-name": `Group`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 43,
                                          intrinsicWidth: 75,
                                          svg: `<svg width="75" height="43" viewBox="0 0 75 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.6979 26.3405L30.6988 26.341C31.1251 26.5885 31.2267 26.8455 31.2257 27.0034C31.2247 27.1637 31.1171 27.4251 30.6851 27.6773C30.2527 27.9278 29.6573 28.0658 29.0355 28.065C28.4139 28.0643 27.8193 27.9249 27.3893 27.6771C26.9576 27.4249 26.8564 27.1675 26.8574 27.0122C26.8584 26.8553 26.9649 26.595 27.4021 26.3414C27.832 26.0935 28.4284 25.9539 29.0514 25.9531C29.6748 25.9524 30.2697 26.0907 30.6979 26.3405Z" fill="#73B200" stroke="#73B200"/>
<path d="M19.2897 33.0841L19.2906 33.0846C19.7169 33.3322 19.8185 33.5891 19.8175 33.7471C19.8165 33.9073 19.7089 34.1688 19.2769 34.421C18.8445 34.6714 18.2491 34.8094 17.6273 34.8087C17.0057 34.8079 16.4111 34.6685 15.9811 34.4207C15.5494 34.1686 15.4482 33.9112 15.4492 33.7559C15.4502 33.5989 15.5567 33.3386 15.9939 33.0851C16.4238 32.8372 17.0202 32.6975 17.6432 32.6968C18.2666 32.696 18.8615 32.8344 19.2897 33.0841Z" fill="#73B200" stroke="#73B200"/>
<path d="M5.1979 40.4655L5.19877 40.466C5.6251 40.7135 5.72673 40.9705 5.72573 41.1284C5.72472 41.2887 5.61712 41.5501 5.18508 41.8023C4.7527 42.0528 4.15729 42.1908 3.53549 42.19C2.9139 42.1893 2.31935 42.0499 1.88927 41.8021C1.45757 41.5499 1.35645 41.2925 1.35743 41.1372C1.35842 40.9803 1.46486 40.72 1.90207 40.4664C2.332 40.2185 2.92841 40.0789 3.55141 40.0781C4.17478 40.0774 4.7697 40.2157 5.1979 40.4655Z" fill="#73B200" stroke="#73B200"/>
<path d="M41.4342 20.14L41.4351 20.1405C41.8614 20.3881 41.9631 20.645 41.9621 20.803C41.961 20.9632 41.8535 21.2247 41.4215 21.4769C40.9891 21.7273 40.3936 21.8654 39.7718 21.8646C39.1502 21.8639 38.5556 21.7245 38.1256 21.4767C37.6939 21.2245 37.5928 20.9671 37.5938 20.8118C37.5948 20.6548 37.7012 20.3945 38.1384 20.141C38.5683 19.8931 39.1647 19.7534 39.7877 19.7527C40.4111 19.7519 41.006 19.8903 41.4342 20.14Z" fill="#73B200" stroke="#73B200"/>
<path d="M52.1706 13.9389L52.1714 13.9394C52.5977 14.1869 52.6994 14.4439 52.6984 14.6018C52.6974 14.7621 52.5898 15.0235 52.1578 15.2757C51.7254 15.5262 51.13 15.6642 50.5081 15.6635C49.8865 15.6627 49.292 15.5233 48.8619 15.2755C48.4302 15.0234 48.3291 14.7659 48.3301 14.6107C48.3311 14.4536 48.4375 14.1934 48.8747 13.9398C49.3047 13.6919 49.9011 13.5523 50.5241 13.5515C51.1474 13.5508 51.7424 13.6891 52.1706 13.9389Z" fill="#73B200" stroke="#73B200"/>
<path d="M59.6094 7.74789L59.6094 7.74789L59.6106 7.7472C60.0406 7.49914 60.6372 7.35941 61.2604 7.35865C61.8838 7.35789 62.4787 7.49622 62.9069 7.746L62.9078 7.74651C63.3341 7.99405 63.4357 8.25098 63.4347 8.40893C63.4337 8.56918 63.3261 8.83064 62.8941 9.08285C62.4617 9.33327 61.8663 9.47131 61.2445 9.47055C60.6229 9.46979 60.0283 9.33039 59.5983 9.0826C59.1676 8.83104 59.0654 8.5722 59.0664 8.41524C59.0674 8.2573 59.174 7.9975 59.6094 7.74789Z" fill="#73B200" stroke="#73B200"/>
<path d="M73.6452 1.54556L73.646 1.54607C74.0724 1.79361 74.174 2.05054 74.173 2.20849C74.172 2.36874 74.0644 2.6302 73.6323 2.88241C73.2 3.13283 72.6046 3.27087 71.9828 3.27011C71.3612 3.26935 70.7666 3.12995 70.3365 2.88216C69.9048 2.63002 69.8037 2.37259 69.8047 2.21732C69.8057 2.06033 69.9121 1.80006 70.3493 1.54652C70.7793 1.29861 71.3757 1.15897 71.9987 1.15821C72.6221 1.15745 73.217 1.29578 73.6452 1.54556Z" fill="#73B200" stroke="#73B200"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-10ubgqj`,
                                          "data-framer-name": `Group`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 43,
                                          intrinsicWidth: 75,
                                          svg: `<svg width="75" height="43" viewBox="0 0 75 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.1022 26.0966L30.1031 26.0971C30.5294 26.3446 30.631 26.6016 30.63 26.7595C30.629 26.9198 30.5214 27.1812 30.0894 27.4334C29.657 27.6839 29.0616 27.8219 28.4398 27.8211C27.8182 27.8204 27.2236 27.681 26.7936 27.4332C26.3619 27.181 26.2607 26.9236 26.2617 26.7683C26.2627 26.6114 26.3692 26.3511 26.8064 26.0975C27.2363 25.8496 27.8327 25.71 28.4557 25.7092C29.0791 25.7085 29.674 25.8468 30.1022 26.0966Z" fill="#73B200" stroke="#73B200"/>
<path d="M18.694 32.8402L18.6949 32.8407C19.1212 33.0883 19.2228 33.3452 19.2218 33.5032C19.2208 33.6634 19.1132 33.9249 18.6812 34.1771C18.2488 34.4275 17.6534 34.5655 17.0316 34.5648C16.41 34.564 15.8154 34.4246 15.3854 34.1768C14.9537 33.9247 14.8525 33.6673 14.8535 33.512C14.8545 33.355 14.961 33.0947 15.3982 32.8412C15.8281 32.5933 16.4245 32.4536 17.0475 32.4529C17.6709 32.4521 18.2658 32.5905 18.694 32.8402Z" fill="#73B200" stroke="#73B200"/>
<path d="M4.6022 40.2216L4.60306 40.2221C5.0294 40.4696 5.13103 40.7266 5.13003 40.8845C5.12902 41.0448 5.02142 41.3062 4.58938 41.5584C4.15699 41.8089 3.56159 41.9469 2.93978 41.9461C2.31819 41.9454 1.72364 41.806 1.29357 41.5582C0.861872 41.306 0.760745 41.0486 0.761727 40.8933C0.76272 40.7364 0.869155 40.4761 1.30636 40.2225C1.7363 39.9746 2.33271 39.835 2.95571 39.8342C3.57908 39.8335 4.174 39.9718 4.6022 40.2216Z" fill="#73B200" stroke="#73B200"/>
<path d="M40.8385 19.8961L40.8394 19.8967C41.2657 20.1442 41.3674 20.4011 41.3664 20.5591C41.3653 20.7194 41.2577 20.9808 40.8258 21.233C40.3934 21.4834 39.7979 21.6215 39.1761 21.6207C38.5545 21.62 37.9599 21.4806 37.5299 21.2328C37.0982 20.9806 36.9971 20.7232 36.9981 20.5679C36.999 20.4109 37.1055 20.1506 37.5427 19.8971C37.9726 19.6492 38.569 19.5096 39.192 19.5088C39.8154 19.508 40.4103 19.6464 40.8385 19.8961Z" fill="#73B200" stroke="#73B200"/>
<path d="M51.5749 13.695L51.5757 13.6955C52.002 13.943 52.1037 14.2 52.1027 14.3579C52.1017 14.5182 51.9941 14.7796 51.5621 15.0318C51.1297 15.2823 50.5343 15.4203 49.9124 15.4196C49.2908 15.4188 48.6963 15.2794 48.2662 15.0316C47.8345 14.7795 47.7334 14.522 47.7344 14.3668C47.7354 14.2097 47.8418 13.9495 48.279 13.6959C48.709 13.448 49.3054 13.3084 49.9284 13.3076C50.5517 13.3069 51.1467 13.4452 51.5749 13.695Z" fill="#73B200" stroke="#73B200"/>
<path d="M59.0137 7.504L59.0137 7.504L59.0149 7.50331C59.4449 7.25525 60.0415 7.11551 60.6647 7.11475C61.2881 7.11399 61.883 7.25232 62.3112 7.5021L62.312 7.50261C62.7384 7.75016 62.84 8.00709 62.839 8.16503C62.838 8.32528 62.7304 8.58675 62.2984 8.83895C61.866 9.08938 61.2706 9.22741 60.6488 9.22665C60.0272 9.22589 59.4326 9.08649 59.0025 8.8387C58.5719 8.58715 58.4697 8.3283 58.4707 8.17134C58.4717 8.0134 58.5783 7.75361 59.0137 7.504Z" fill="#73B200" stroke="#73B200"/>
<path d="M73.0495 1.30167L73.0503 1.30217C73.4767 1.54972 73.5783 1.80665 73.5773 1.96459C73.5763 2.12484 73.4687 2.38631 73.0366 2.63851C72.6043 2.88894 72.0089 3.02697 71.387 3.02621C70.7655 3.02546 70.1709 2.88605 69.7408 2.63826C69.3091 2.38612 69.208 2.12869 69.209 1.97342C69.21 1.81643 69.3164 1.55617 69.7536 1.30262C70.1836 1.05471 70.78 0.91507 71.403 0.91431C72.0263 0.91355 72.6213 1.05188 73.0495 1.30167Z" fill="#73B200" stroke="#73B200"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-1bb3w2g`,
                                          "data-framer-name": `Group`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 4,
                                          intrinsicWidth: 6,
                                          svg: `<svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.37368 1.07632L4.37455 1.07683C4.80088 1.32437 4.90251 1.58131 4.90151 1.73925C4.9005 1.8995 4.7929 2.16096 4.36086 2.41317C3.92848 2.66359 3.33307 2.80163 2.71127 2.80087C2.08968 2.80011 1.49513 2.66071 1.06505 2.41292C0.633356 2.16078 0.532229 1.90335 0.533211 1.74808C0.534204 1.59109 0.64064 1.33082 1.07785 1.07728C1.50779 0.829373 2.1042 0.689728 2.7272 0.688968C3.35057 0.688208 3.94548 0.826542 4.37368 1.07632Z" fill="#73B200" stroke="#73B200"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-1gtig3r`,
                                          "data-framer-name": `Group`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 480,
                                          intrinsicWidth: 527,
                                          svg: `<svg width="527" height="480" viewBox="0 0 527 480" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M386.277 48.2013C387.477 47.512 389.424 47.512 390.613 48.2013C391.807 48.896 391.797 50.0221 390.597 50.7114C389.392 51.4061 387.461 51.4061 386.261 50.7114C385.072 50.0221 385.072 48.896 386.277 48.2013Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M394.697 43.7052C395.897 43.0159 397.844 43.0159 399.033 43.7052C400.227 44.3999 400.217 45.526 399.017 46.2153C397.812 46.91 395.881 46.91 394.681 46.2153C393.492 45.526 393.492 44.3999 394.697 43.7052Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M377.847 53.1059C379.052 52.4113 380.994 52.4166 382.183 53.1059C383.378 53.8005 383.372 54.9214 382.167 55.616C380.968 56.3053 379.031 56.3106 377.831 55.616C376.647 54.9214 376.653 53.7953 377.847 53.1059Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M369.455 57.9416C370.654 57.2522 372.601 57.2522 373.791 57.9416C374.985 58.6362 374.975 59.7623 373.775 60.4517C372.57 61.1463 370.639 61.1463 369.439 60.4517C368.25 59.7623 368.25 58.6415 369.455 57.9416Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M361.023 62.82C362.228 62.1254 364.17 62.1307 365.359 62.82C366.554 63.5146 366.548 64.6355 365.343 65.3301C364.143 66.0195 362.207 66.0247 361.007 65.3301C359.818 64.6355 359.823 63.5094 361.023 62.82Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M352.605 67.6664C353.805 66.9771 355.752 66.9771 356.941 67.6664C358.136 68.361 358.125 69.4872 356.925 70.1765C355.72 70.8711 353.789 70.8711 352.589 70.1765C351.4 69.4872 351.4 68.361 352.605 67.6664Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M344.179 72.5395C345.379 71.8501 347.326 71.8501 348.515 72.5395C349.71 73.2341 349.699 74.3602 348.499 75.0496C347.294 75.7442 345.363 75.7442 344.163 75.0496C342.974 74.3602 342.974 73.2341 344.179 72.5395Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M462.076 140.564C463.281 139.87 465.212 139.87 466.412 140.564C467.601 141.254 467.601 142.38 466.396 143.074C465.196 143.764 463.249 143.764 462.06 143.074C460.865 142.38 460.881 141.259 462.076 140.564Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M453.607 135.734C454.812 135.039 456.743 135.039 457.943 135.734C459.132 136.423 459.132 137.549 457.927 138.244C456.727 138.933 454.78 138.933 453.591 138.244C452.397 137.549 452.407 136.423 453.607 135.734Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M478.883 150.294C480.088 149.599 482.03 149.605 483.224 150.299C484.419 150.994 484.419 152.12 483.219 152.815C482.019 153.504 480.072 153.504 478.878 152.809C477.683 152.115 477.688 150.989 478.883 150.294Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M487.313 155.188C488.518 154.493 490.459 154.498 491.654 155.193C492.849 155.888 492.849 157.014 491.649 157.708C490.449 158.398 488.502 158.398 487.307 157.703C486.108 157.009 486.113 155.877 487.313 155.188Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M495.708 160.055C496.913 159.361 498.855 159.366 500.044 160.055C501.238 160.75 501.238 161.876 500.039 162.571C498.839 163.26 496.892 163.26 495.697 162.565C494.503 161.876 494.513 160.745 495.708 160.055Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M470.443 145.437C471.649 144.742 473.59 144.747 474.785 145.442C475.979 146.137 475.979 147.263 474.78 147.957C473.58 148.647 471.633 148.647 470.438 147.952C469.238 147.252 469.244 146.126 470.443 145.437Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M504.137 165.018C505.342 164.323 507.284 164.328 508.478 165.023C509.673 165.717 509.673 166.844 508.473 167.538C507.273 168.228 505.326 168.228 504.132 167.533C502.937 166.838 502.937 165.712 504.137 165.018Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M512.584 169.759C513.789 169.064 515.731 169.069 516.925 169.764C518.12 170.458 518.12 171.585 516.92 172.279C515.72 172.969 513.773 172.969 512.579 172.274C511.379 171.579 511.384 170.448 512.584 169.759Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M520.983 174.632C522.188 173.937 524.129 173.943 525.324 174.637C526.518 175.332 526.518 176.458 525.319 177.152C524.119 177.842 522.172 177.842 520.977 177.147C519.783 176.453 519.788 175.321 520.983 174.632Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M352.6 77.4438C353.805 76.7492 355.747 76.7544 356.936 77.4438C358.131 78.1384 358.131 79.2645 356.931 79.9591C355.731 80.6485 353.784 80.6485 352.59 79.9539C351.395 79.2645 351.401 78.1331 352.6 77.4438Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M361.02 82.2588C362.225 81.5642 364.167 81.5695 365.362 82.2641C366.556 82.9587 366.551 84.0795 365.346 84.7742C364.146 85.4635 362.21 85.4688 361.01 84.7742C359.815 84.0795 359.826 82.9482 361.02 82.2588Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M369.456 87.1104C370.661 86.4158 372.603 86.421 373.797 87.1156C374.992 87.8103 374.987 88.9311 373.781 89.6257C372.582 90.3151 370.645 90.3203 369.445 89.6257C368.251 88.9311 368.256 87.7997 369.456 87.1104Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M377.865 91.9466C379.07 91.2519 381.012 91.2572 382.207 91.9518C383.401 92.6464 383.401 93.7726 382.201 94.4672C381.002 95.1565 379.055 95.1565 377.86 94.4619C376.66 93.7673 376.666 92.6359 377.865 91.9466Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M386.268 96.8035C387.473 96.1089 389.415 96.1141 390.609 96.8088C391.804 97.5034 391.804 98.6295 390.604 99.3241C389.404 100.013 387.457 100.013 386.262 99.3188C385.063 98.6242 385.073 97.4929 386.268 96.8035Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M394.688 101.682C395.893 100.987 397.834 100.993 399.029 101.687C400.224 102.382 400.224 103.508 399.024 104.203C397.824 104.892 395.877 104.892 394.682 104.197C393.483 103.503 393.488 102.371 394.688 101.682Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M403.108 106.554C404.313 105.86 406.254 105.865 407.449 106.56C408.643 107.254 408.643 108.38 407.444 109.075C406.244 109.764 404.297 109.764 403.102 109.07C401.908 108.375 401.913 107.249 403.108 106.554Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M411.549 111.417C412.754 110.722 414.696 110.727 415.89 111.422C417.085 112.117 417.085 113.243 415.885 113.937C414.685 114.627 412.738 114.627 411.544 113.932C410.344 113.238 410.349 112.106 411.549 111.417Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M419.899 116.284C421.104 115.59 423.045 115.595 424.24 116.289C425.434 116.984 425.434 118.11 424.235 118.805C423.035 119.494 421.088 119.494 419.893 118.8C418.694 118.1 418.704 116.974 419.899 116.284Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M428.364 121.089C429.569 120.394 431.5 120.394 432.7 121.089C433.895 121.783 433.895 122.909 432.695 123.604C431.495 124.293 429.548 124.293 428.354 123.599C427.149 122.904 427.164 121.778 428.364 121.089Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M436.792 126.067C437.997 125.372 439.928 125.372 441.128 126.067C442.322 126.761 442.322 127.888 441.123 128.582C439.923 129.272 437.976 129.272 436.781 128.577C435.582 127.882 435.597 126.756 436.792 126.067Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M445.222 130.881C446.427 130.187 448.358 130.187 449.558 130.881C450.752 131.576 450.752 132.702 449.552 133.397C448.353 134.086 446.406 134.086 445.211 133.391C444.011 132.697 444.022 131.571 445.222 130.881Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M110.699 338.718C111.904 338.023 113.835 338.023 115.035 338.718C116.224 339.407 116.224 340.533 115.019 341.228C113.819 341.917 111.872 341.917 110.683 341.228C109.488 340.533 109.504 339.412 110.699 338.718Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M102.23 333.887C103.435 333.193 105.366 333.193 106.566 333.887C107.755 334.577 107.755 335.703 106.55 336.397C105.351 337.087 103.403 337.087 102.214 336.397C101.02 335.703 101.03 334.577 102.23 333.887Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M127.506 348.448C128.711 347.753 130.653 347.758 131.847 348.453C133.042 349.147 133.042 350.274 131.842 350.968C130.642 351.658 128.695 351.657 127.501 350.963C126.306 350.268 126.311 349.142 127.506 348.448Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M135.936 353.341C137.141 352.647 139.083 352.652 140.277 353.347C141.472 354.041 141.472 355.167 140.272 355.862C139.072 356.551 137.125 356.551 135.93 355.857C134.731 355.162 134.736 354.031 135.936 353.341Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M144.331 358.209C145.536 357.514 147.478 357.52 148.667 358.209C149.861 358.904 149.861 360.03 148.662 360.724C147.462 361.414 145.515 361.414 144.32 360.719C143.126 360.03 143.136 358.898 144.331 358.209Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M119.065 343.59C120.27 342.896 122.211 342.901 123.406 343.596C124.6 344.29 124.6 345.416 123.401 346.111C122.201 346.8 120.254 346.8 119.059 346.106C117.86 345.406 117.865 344.28 119.065 343.59Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M152.76 363.171C153.965 362.477 155.907 362.482 157.101 363.176C158.296 363.871 158.296 364.997 157.096 365.692C155.896 366.381 153.949 366.381 152.755 365.687C151.56 364.992 151.56 363.866 152.76 363.171Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M161.205 367.912C162.41 367.218 164.352 367.223 165.547 367.917C166.741 368.612 166.741 369.738 165.541 370.433C164.342 371.122 162.394 371.122 161.2 370.427C160 369.733 160.005 368.601 161.205 367.912Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M169.606 372.785C170.811 372.091 172.752 372.096 173.947 372.791C175.141 373.485 175.141 374.611 173.942 375.306C172.742 375.995 170.795 375.995 169.6 375.301C168.406 374.606 168.411 373.475 169.606 372.785Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M1.22346 275.597C2.42851 274.903 4.37027 274.908 5.55954 275.597C6.75406 276.292 6.75406 277.418 5.55427 278.113C4.35448 278.802 2.40745 278.802 1.21292 278.107C0.0183963 277.418 0.0236688 276.287 1.22346 275.597Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M9.64337 280.412C10.8484 279.718 12.7902 279.723 13.9847 280.418C15.1792 281.112 15.174 282.233 13.9689 282.928C12.7691 283.617 10.8326 283.622 9.63283 282.928C8.43831 282.233 8.44884 281.102 9.64337 280.412Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M18.0789 285.264C19.284 284.569 21.2257 284.575 22.4203 285.269C23.6148 285.964 23.6096 287.085 22.4045 287.779C21.2047 288.469 19.2682 288.474 18.0684 287.779C16.8739 287.085 16.8791 285.953 18.0789 285.264Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M26.4884 290.1C27.6935 289.406 29.6352 289.411 30.8297 290.105C32.0243 290.8 32.0243 291.926 30.8245 292.621C29.6247 293.31 27.6777 293.31 26.4832 292.615C25.2834 291.921 25.2886 290.789 26.4884 290.1Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M34.8907 294.957C36.0958 294.262 38.0376 294.268 39.2321 294.962C40.4266 295.657 40.4266 296.783 39.2268 297.478C38.027 298.167 36.08 298.167 34.8855 297.472C33.6857 296.778 33.6962 295.646 34.8907 294.957Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M43.3107 299.835C44.5157 299.141 46.4575 299.146 47.652 299.841C48.8466 300.535 48.8466 301.661 47.6468 302.356C46.447 303.045 44.4999 303.045 43.3054 302.351C42.1056 301.656 42.1109 300.525 43.3107 299.835Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M51.7306 304.708C52.9356 304.013 54.8774 304.019 56.0719 304.713C57.2664 305.408 57.2664 306.534 56.0666 307.229C54.8669 307.918 52.9198 307.918 51.7253 307.223C50.5308 306.529 50.536 305.403 51.7306 304.708Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M60.1701 309.57C61.3751 308.876 63.3169 308.881 64.5114 309.576C65.7059 310.27 65.7059 311.396 64.5061 312.091C63.3063 312.78 61.3593 312.78 60.1648 312.086C58.965 311.391 58.9703 310.26 60.1701 309.57Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M68.5216 314.438C69.7266 313.743 71.6684 313.748 72.8629 314.443C74.0575 315.138 74.0575 316.264 72.8577 316.958C71.6579 317.648 69.7109 317.648 68.5164 316.953C67.3166 316.253 67.3271 315.127 68.5216 314.438Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M76.9872 319.242C78.1922 318.548 80.1235 318.548 81.3233 319.242C82.5178 319.937 82.5178 321.063 81.318 321.758C80.1182 322.447 78.1712 322.447 76.9767 321.752C75.7716 321.058 75.7874 319.932 76.9872 319.242Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M85.4129 324.22C86.618 323.526 88.5492 323.526 89.749 324.22C90.9435 324.915 90.9435 326.041 89.7437 326.736C88.544 327.425 86.5969 327.425 85.4024 326.73C84.2026 326.036 84.2184 324.91 85.4129 324.22Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M93.8446 329.035C95.0496 328.34 96.9809 328.34 98.1807 329.035C99.3752 329.729 99.3752 330.856 98.1754 331.55C96.9756 332.24 95.0286 332.24 93.8341 331.545C92.6343 330.85 92.6448 329.724 93.8446 329.035Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M289.062 442.373C290.267 441.678 292.198 441.678 293.398 442.373C294.587 443.062 294.587 444.188 293.382 444.883C292.183 445.572 290.236 445.572 289.046 444.883C287.852 444.188 287.868 443.068 289.062 442.373Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M280.593 437.542C281.798 436.848 283.73 436.848 284.929 437.542C286.119 438.232 286.119 439.358 284.914 440.053C283.714 440.742 281.767 440.742 280.578 440.053C279.383 439.358 279.393 438.232 280.593 437.542Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M305.869 452.103C307.074 451.408 309.016 451.413 310.211 452.108C311.405 452.803 311.405 453.929 310.205 454.623C309.006 455.313 307.058 455.313 305.864 454.618C304.669 453.924 304.675 452.797 305.869 452.103Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M314.299 456.997C315.504 456.302 317.446 456.307 318.64 457.002C319.835 457.696 319.835 458.823 318.635 459.517C317.435 460.207 315.488 460.207 314.294 459.512C313.094 458.817 313.099 457.686 314.299 456.997Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M322.694 461.864C323.899 461.17 325.841 461.175 327.03 461.864C328.225 462.559 328.225 463.685 327.025 464.38C325.825 465.069 323.878 465.069 322.684 464.374C321.489 463.685 321.5 462.554 322.694 461.864Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M297.428 447.246C298.633 446.551 300.575 446.556 301.769 447.251C302.964 447.946 302.964 449.072 301.764 449.766C300.564 450.456 298.617 450.456 297.423 449.761C296.223 449.061 296.228 447.935 297.428 447.246Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M331.123 466.826C332.328 466.132 334.27 466.137 335.465 466.832C336.659 467.526 336.659 468.652 335.459 469.347C334.259 470.036 332.312 470.036 331.118 469.342C329.923 468.647 329.923 467.521 331.123 466.826Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M339.568 471.567C340.774 470.873 342.715 470.878 343.91 471.573C345.104 472.267 345.104 473.393 343.905 474.088C342.705 474.777 340.758 474.777 339.563 474.083C338.363 473.388 338.369 472.257 339.568 471.567Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M347.969 476.441C349.174 475.746 351.116 475.751 352.31 476.446C353.505 477.141 353.505 478.267 352.305 478.961C351.105 479.651 349.158 479.651 347.964 478.956C346.769 478.261 346.774 477.13 347.969 476.441Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M179.587 379.253C180.792 378.558 182.734 378.563 183.923 379.253C185.117 379.947 185.117 381.073 183.918 381.768C182.718 382.457 180.771 382.457 179.576 381.763C178.382 381.073 178.387 379.942 179.587 379.253Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M188.007 384.068C189.212 383.373 191.153 383.378 192.348 384.073C193.543 384.768 193.537 385.888 192.332 386.583C191.132 387.272 189.196 387.278 187.996 386.583C186.802 385.888 186.812 384.757 188.007 384.068Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M196.442 388.919C197.647 388.225 199.589 388.23 200.784 388.924C201.978 389.619 201.973 390.74 200.768 391.435C199.568 392.124 197.631 392.129 196.432 391.435C195.237 390.74 195.242 389.609 196.442 388.919Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M204.852 393.755C206.057 393.061 207.999 393.066 209.193 393.761C210.388 394.455 210.388 395.581 209.188 396.276C207.988 396.965 206.041 396.965 204.846 396.271C203.647 395.576 203.652 394.445 204.852 393.755Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M213.254 398.612C214.459 397.918 216.401 397.923 217.595 398.618C218.79 399.312 218.79 400.438 217.59 401.133C216.39 401.822 214.443 401.822 213.249 401.128C212.049 400.433 212.06 399.302 213.254 398.612Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M221.674 403.491C222.879 402.796 224.821 402.801 226.015 403.496C227.21 404.191 227.21 405.317 226.01 406.011C224.81 406.701 222.863 406.701 221.669 406.006C220.469 405.311 220.474 404.18 221.674 403.491Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M230.094 408.363C231.299 407.669 233.241 407.674 234.435 408.369C235.63 409.063 235.63 410.189 234.43 410.884C233.23 411.573 231.283 411.573 230.089 410.879C228.894 410.184 228.899 409.058 230.094 408.363Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M238.533 413.226C239.738 412.531 241.68 412.536 242.875 413.231C244.069 413.925 244.069 415.052 242.869 415.746C241.67 416.436 239.723 416.436 238.528 415.741C237.328 415.046 237.334 413.915 238.533 413.226Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M246.885 418.093C248.09 417.398 250.032 417.404 251.226 418.098C252.421 418.793 252.421 419.919 251.221 420.614C250.021 421.303 248.074 421.303 246.88 420.608C245.68 419.909 245.69 418.782 246.885 418.093Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M255.35 422.897C256.556 422.203 258.487 422.203 259.687 422.897C260.881 423.592 260.881 424.718 259.681 425.413C258.481 426.102 256.534 426.102 255.34 425.408C254.135 424.713 254.151 423.587 255.35 422.897Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M263.776 427.875C264.981 427.181 266.912 427.181 268.112 427.875C269.307 428.57 269.307 429.696 268.107 430.391C266.907 431.08 264.96 431.08 263.766 430.386C262.566 429.691 262.582 428.565 263.776 427.875Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M272.208 432.69C273.413 431.996 275.344 431.996 276.544 432.69C277.738 433.385 277.738 434.511 276.539 435.206C275.339 435.895 273.392 435.895 272.197 435.2C270.998 434.506 271.008 433.38 272.208 432.69Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<g opacity="0.5">
<path d="M354.709 73.8695C354.728 72.4117 353.788 70.8338 351.658 69.5488C349.531 68.2692 346.699 67.5822 343.832 67.5288C340.964 67.4754 338.115 68.0567 335.955 69.2568L354.709 73.8695ZM354.709 73.8695C354.69 75.326 353.71 76.8663 351.551 78.0712M354.709 73.8695L351.551 78.0712M351.551 78.0712C349.395 79.2711 346.546 79.8525 343.677 79.7991C340.809 79.7457 337.975 79.0586 335.848 77.779C333.718 76.4942 332.778 74.9146 332.797 73.4557C332.816 71.9982 333.796 70.4581 335.955 69.2569L351.551 78.0712Z" fill="#94C518" stroke="#73B200"/>
</g>
<path d="M349.363 70.5455C352.413 72.3857 352.377 75.2714 349.277 76.9971C346.176 78.7228 341.192 78.6297 338.135 76.7894C335.085 74.9492 335.12 72.0635 338.221 70.3378C341.321 68.6121 346.305 68.7052 349.363 70.5455Z" fill="#73B200"/>
<path d="M339.453 73.6677H348.046V0.902832H339.453V73.6677Z" fill="url(#paint0_linear_4345_5303)"/>
<g opacity="0.5">
<path d="M129.869 51.0296C129.888 49.5718 128.948 47.994 126.818 46.709C124.691 45.4294 121.859 44.7423 118.992 44.6889C116.124 44.6355 113.275 45.2169 111.115 46.4169L129.869 51.0296ZM129.869 51.0296C129.85 52.4862 128.87 54.0265 126.711 55.2313M129.869 51.0296L126.711 55.2313M126.711 55.2313C124.555 56.4312 121.706 57.0127 118.838 56.9593C115.969 56.9059 113.135 56.2188 111.008 54.9392C108.879 53.6544 107.938 52.0748 107.957 50.6159C107.977 49.1584 108.956 47.6182 111.115 46.4171L126.711 55.2313Z" fill="#94C518" stroke="#73B200"/>
</g>
<path d="M124.523 47.7056C127.573 49.5459 127.537 52.4316 124.437 54.1572C121.336 55.8829 116.353 55.7898 113.295 53.9496C110.245 52.1093 110.281 49.2237 113.381 47.498C116.482 45.7723 121.465 45.8654 124.523 47.7056Z" fill="#73B200"/>
<g opacity="0.5">
<path d="M139.9 350.388C139.92 348.93 138.979 347.352 136.849 346.067C134.722 344.788 131.89 344.1 129.023 344.047C126.155 343.994 123.307 344.575 121.146 345.775L139.9 350.388ZM139.9 350.388C139.881 351.844 138.901 353.385 136.742 354.589M139.9 350.388L136.742 354.589M136.742 354.589C134.586 355.789 131.737 356.371 128.869 356.317C126 356.264 123.167 355.577 121.04 354.297C118.91 353.013 117.969 351.433 117.989 349.974C118.008 348.517 118.988 346.976 121.146 345.775L136.742 354.589Z" fill="#94C518" stroke="#73B200"/>
</g>
<path d="M134.554 347.064C137.604 348.904 137.569 351.79 134.468 353.515C131.368 355.241 126.384 355.148 123.326 353.308C120.276 351.467 120.312 348.582 123.412 346.856C126.513 345.13 131.496 345.224 134.554 347.064Z" fill="#73B200"/>
<path d="M124.645 350.186H133.237V277.421H124.645V350.186Z" fill="url(#paint1_linear_4345_5303)"/>
<g opacity="0.5">
<path d="M93.1739 193.241C93.1931 191.783 92.2529 190.206 90.1228 188.921C87.9956 187.641 85.1637 186.954 82.2963 186.901C79.4288 186.847 76.5801 187.429 74.4198 188.629L93.1739 193.241ZM93.1739 193.241C93.1547 194.698 92.1749 196.238 90.0159 197.443M93.1739 193.241L90.0159 197.443M90.0159 197.443C87.8595 198.643 85.0108 199.224 82.1422 199.171C79.2739 199.118 76.4402 198.43 74.3131 197.151C72.1832 195.866 71.2428 194.286 71.262 192.828C71.2812 191.37 72.2611 189.83 74.4195 188.629L90.0159 197.443Z" fill="#94C518" stroke="#73B200"/>
</g>
<path d="M87.8274 189.917C90.8778 191.758 90.842 194.643 87.7415 196.369C84.641 198.095 79.6573 198.002 76.5998 196.161C73.5494 194.321 73.5852 191.435 76.6857 189.71C79.7862 187.984 84.7699 188.077 87.8274 189.917Z" fill="#73B200"/>
<defs>
<linearGradient id="paint0_linear_4345_5303" x1="343.071" y1="73.7183" x2="344.428" y2="0.82493" gradientUnits="userSpaceOnUse">
<stop stop-color="#73B200"/>
<stop offset="0.2852" stop-color="#73B200" stop-opacity="0.28"/>
<stop offset="0.4875" stop-color="#94C518" stop-opacity="0.2"/>
<stop offset="1" stop-color="#D9F68E" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_4345_5303" x1="128.263" y1="350.237" x2="129.619" y2="277.343" gradientUnits="userSpaceOnUse">
<stop stop-color="#73B200"/>
<stop offset="0.2852" stop-color="#73B200" stop-opacity="0.28"/>
<stop offset="0.4875" stop-color="#94C518" stop-opacity="0.2"/>
<stop offset="1" stop-color="#D9F68E" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-eb1n44`,
                                          "data-framer-name": `Vector`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 7,
                                          intrinsicWidth: 9,
                                          svg: `<svg width="9" height="7" viewBox="-1 -1 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.20783 1.46992C2.41289 0.775302 4.35465 0.780565 5.54391 1.46992C6.73844 2.16453 6.73843 3.29065 5.53864 3.98527C4.33885 4.67462 2.39183 4.67461 1.1973 3.98C0.00277127 3.29065 0.00804379 2.15927 1.20783 1.46992Z" fill="#408BFC" stroke="white" stroke-width="0.95" stroke-miterlimit="10"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-3zo61l`,
                                          "data-framer-name": `Group 55329`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 399,
                                          intrinsicWidth: 324,
                                          svg: `<svg width="324" height="399" viewBox="0 0 324 399" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M162.012 332.401V133.183L46.9941 199.591L162.012 332.401ZM162.012 133.183V332.401L277.029 199.591L162.012 133.183Z" fill="url(#paint0_radial_4345_5418)"/>
<path d="M161.513 266.858L162.013 267.147L162.513 266.858L277.53 200.45L279.03 199.584L277.53 198.718L162.513 132.31L162.013 132.021L161.513 132.31L46.4953 198.718L44.9953 199.584L46.4953 200.45L161.513 266.858ZM2.98883 199.591L162.163 107.754L321.038 199.583L162.013 291.399L2.98883 199.591Z" fill="white" stroke="#272727" stroke-width="2"/>
<path d="M163.014 293.131L322.038 201.316V305.261L163.014 397.069V293.131Z" fill="#F4F2EA" stroke="#272727" stroke-width="2"/>
<path d="M1.98828 201.323L161.013 293.131V397.069L1.98828 305.261V201.323Z" fill="#F4F2EA" stroke="#272727" stroke-width="2"/>
<path opacity="0.49" fill-rule="evenodd" clip-rule="evenodd" d="M46.9961 0.374023V199.591L162.014 266C162.014 265.755 277.031 199.591 277.031 199.591V0.374023H46.9961Z" fill="url(#paint1_linear_4345_5418)"/>
<defs>
<radialGradient id="paint0_radial_4345_5418" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(157.156 272.93) scale(93.2422 93.2795)">
<stop stop-color="#B2ED1D"/>
<stop offset="0.2618" stop-color="#B2ED1D"/>
<stop offset="0.4123" stop-color="#CCF368"/>
<stop offset="0.5346" stop-color="#D8F68E"/>
<stop offset="0.6417" stop-color="#D0F760"/>
<stop offset="0.739" stop-color="#B8F900"/>
<stop offset="0.8291" stop-color="#FFFCF1"/>
<stop offset="0.9137" stop-color="#FBF6E4"/>
<stop offset="0.9919" stop-color="#E3E0D5"/>
<stop offset="1" stop-color="#E3E0D5"/>
</radialGradient>
<linearGradient id="paint1_linear_4345_5418" x1="162.016" y1="265.993" x2="162.016" y2="0.371934" gradientUnits="userSpaceOnUse">
<stop stop-color="#B2ED1D"/>
<stop offset="0.485" stop-color="#BFF043" stop-opacity="0.75"/>
<stop offset="0.6866" stop-color="#CCF368" stop-opacity="0.48"/>
<stop offset="0.9905" stop-color="#E5F9B4" stop-opacity="0.01"/>
<stop offset="1" stop-color="#F3F3F3" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-1g4yl2l`,
                                          "data-framer-name": `Group`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 371,
                                          intrinsicWidth: 191,
                                          svg: `<svg width="191" height="371" viewBox="0 0 191 371" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.3">
<path opacity="0.6" d="M45.8633 271.299C45.8633 266.324 49.9131 262.274 54.888 262.274C59.8629 262.274 63.9128 266.324 63.9128 271.299C63.9128 276.274 59.8629 280.324 54.888 280.324C49.9019 280.324 45.8633 276.274 45.8633 271.299Z" fill="#B2ED1D" fill-opacity="0.5"/>
<path opacity="0.6" d="M72.9375 320.935C72.9375 323.429 74.9568 325.448 77.4499 325.448C79.943 325.448 81.9622 323.429 81.9622 320.935C81.9622 318.442 79.943 316.423 77.4499 316.423C74.9568 316.423 72.9375 318.442 72.9375 320.935Z" fill="#73B200"/>
<path opacity="0.35" d="M118.061 276.94C118.061 278.812 119.572 280.324 121.445 280.324C123.317 280.324 124.829 278.812 124.829 276.94C124.829 275.067 123.317 273.555 121.445 273.555C119.572 273.555 118.061 275.078 118.061 276.94Z" fill="#73B200"/>
<path opacity="0.77" d="M57.1426 367.187C57.1426 369.059 58.6542 370.571 60.5269 370.571C62.3995 370.571 63.9111 369.059 63.9111 367.187C63.9111 365.314 62.3995 363.802 60.5269 363.802C58.6542 363.802 57.1426 365.325 57.1426 367.187Z" fill="#73B200"/>
<path opacity="0.77" d="M174.473 202.328C174.473 204.201 175.984 205.712 177.857 205.712C179.73 205.712 181.241 204.201 181.241 202.328C181.241 200.455 179.73 198.944 177.857 198.944C175.984 198.944 174.473 200.467 174.473 202.328Z" fill="#73B200"/>
<path opacity="0.6" d="M18.8691 269.592C26.3455 269.592 32.4062 263.531 32.4062 256.055C32.4062 248.579 26.3455 242.518 18.8691 242.518C11.3928 242.518 5.33203 248.579 5.33203 256.055C5.33203 263.531 11.3928 269.592 18.8691 269.592Z" fill="#8BBB02"/>
<path opacity="0.56" d="M127.085 357.034C127.085 359.527 125.066 361.546 122.573 361.546C120.08 361.546 118.061 359.527 118.061 357.034C118.061 354.541 120.08 352.522 122.573 352.522C125.066 352.522 127.085 354.541 127.085 357.034Z" fill="#73B200"/>
<path opacity="0.6" d="M145.136 334.473C150.12 334.473 154.161 330.432 154.161 325.448C154.161 320.464 150.12 316.423 145.136 316.423C140.152 316.423 136.111 320.464 136.111 325.448C136.111 330.432 140.152 334.473 145.136 334.473Z" fill="#B2ED1D" fill-opacity="0.5"/>
<path opacity="0.77" d="M75.1934 211.51C75.1934 213.383 76.705 214.894 78.5776 214.894C80.4503 214.894 81.9619 213.383 81.9619 211.51C81.9619 209.637 80.4503 208.126 78.5776 208.126C76.705 208.126 75.1934 209.649 75.1934 211.51Z" fill="#73B200"/>
<path opacity="0.56" d="M136.111 212.638C136.111 215.131 134.091 217.15 131.598 217.15C129.105 217.15 127.086 215.131 127.086 212.638C127.086 210.145 129.105 208.126 131.598 208.126C134.08 208.126 136.111 210.156 136.111 212.638Z" fill="#73B200"/>
<path opacity="0.6" d="M118.06 176.539C118.06 179.033 116.041 181.052 113.548 181.052C111.054 181.052 109.035 179.033 109.035 176.539C109.035 174.046 111.054 172.027 113.548 172.027C116.041 172.027 118.06 174.046 118.06 176.539Z" fill="#272727"/>
<path opacity="0.6" d="M9.8431 206.613C9.8431 209.107 7.82381 211.126 5.33073 211.126C2.83764 211.126 0.818359 209.107 0.818359 206.613C0.818359 204.12 2.83764 202.101 5.33073 202.101C7.82381 202.101 9.8431 204.12 9.8431 206.613Z" fill="#272727"/>
<path opacity="0.6" d="M72.9368 172.028C77.9211 172.028 81.9616 167.987 81.9616 163.003C81.9616 158.019 77.9211 153.978 72.9368 153.978C67.9526 153.978 63.9121 158.019 63.9121 163.003C63.9121 167.987 67.9526 172.028 72.9368 172.028Z" fill="#B2ED1D" fill-opacity="0.5"/>
<path opacity="0.6" d="M172.209 140.612C172.209 135.637 176.259 131.587 181.234 131.587C186.209 131.587 190.258 135.637 190.258 140.612C190.258 145.587 186.209 149.636 181.234 149.636C176.248 149.636 172.209 145.587 172.209 140.612Z" fill="#B2ED1D" fill-opacity="0.5"/>
<path opacity="0.6" d="M9.76367 131.416C9.76367 133.909 11.783 135.928 14.276 135.928C16.7691 135.928 18.7884 133.909 18.7884 131.416C18.7884 128.923 16.7691 126.903 14.276 126.903C11.783 126.903 9.76367 128.923 9.76367 131.416Z" fill="#73B200"/>
<path opacity="0.77" d="M165.439 24.2473C165.439 26.1199 166.951 27.6316 168.824 27.6316C170.696 27.6316 172.208 26.1199 172.208 24.2473C172.208 22.3747 170.696 20.863 168.824 20.863C166.951 20.863 165.439 22.386 165.439 24.2473Z" fill="#73B200"/>
<path opacity="0.77" d="M118.061 114.495C118.061 116.368 119.572 117.879 121.445 117.879C123.317 117.879 124.829 116.368 124.829 114.495C124.829 112.622 123.317 111.111 121.445 111.111C119.572 111.111 118.061 112.634 118.061 114.495Z" fill="#73B200"/>
<path opacity="0.6" d="M118.061 45.6812C128.03 45.6812 136.111 37.6002 136.111 27.6317C136.111 17.6633 128.03 9.58228 118.061 9.58228C108.093 9.58228 100.012 17.6633 100.012 27.6317C100.012 37.6002 108.093 45.6812 118.061 45.6812Z" fill="#8BBB02"/>
<path opacity="0.56" d="M181.234 86.2919C181.234 88.785 179.214 90.8043 176.721 90.8043C174.228 90.8043 172.209 88.785 172.209 86.2919C172.209 83.7988 174.228 81.7795 176.721 81.7795C179.214 81.7795 181.234 83.7988 181.234 86.2919Z" fill="#73B200"/>
<path opacity="0.6" d="M63.9115 5.0695C63.9115 7.56258 61.8922 9.58187 59.3991 9.58187C56.906 9.58187 54.8867 7.56258 54.8867 5.0695C54.8867 2.57641 56.906 0.557129 59.3991 0.557129C61.8922 0.557129 63.9115 2.57641 63.9115 5.0695Z" fill="#272727"/>
<path opacity="0.6" d="M145.136 81.7804C150.12 81.7804 154.161 77.7399 154.161 72.7557C154.161 67.7715 150.12 63.731 145.136 63.731C140.152 63.731 136.111 67.7715 136.111 72.7557C136.111 77.7399 140.152 81.7804 145.136 81.7804Z" fill="#B2ED1D" fill-opacity="0.5"/>
</g>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-uwk3xb`,
                                          "data-framer-name": `Group`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 327,
                                          intrinsicWidth: 239,
                                          svg: `<svg width="239" height="327" viewBox="0 0 239 327" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M119.428 97.5666L149.838 115.125L119.428 132.674L89.0177 115.121L119.428 97.5666Z" fill="white" stroke="black"/>
<path d="M118.928 168.649L88.5176 151.095V115.987L118.928 133.545V168.649Z" fill="white" stroke="black"/>
<path d="M150.836 115.125V151.383L119.426 169.515V133.257L150.836 115.125Z" fill="#69D6D4"/>
<path d="M150.838 115.698L181.248 133.257L150.838 150.806L120.428 133.252L150.838 115.698Z" fill="white" stroke="black"/>
<path d="M150.338 186.78L119.928 169.226V134.118L150.338 151.672V186.78Z" fill="white" stroke="black"/>
<path d="M151.336 151.672L181.747 134.123V169.226L151.332 186.78L151.336 151.672Z" fill="white" stroke="black"/>
<path d="M88.0158 71.8932L118.426 89.4471L88.0158 106.997L57.6057 89.4471L88.0158 71.8932Z" fill="white" stroke="black"/>
<path d="M87.5158 142.971L57.1055 125.417V90.3135L87.5158 107.867V142.971Z" fill="white" stroke="black"/>
<path d="M88.5156 107.867L118.926 90.3135V125.421L88.5156 142.971V107.867Z" fill="white" stroke="black"/>
<path d="M119.424 133.83L149.834 151.384L119.424 168.938L89.0138 151.384L119.424 133.83Z" fill="white" stroke="black"/>
<path d="M118.924 204.908L88.5137 187.358V152.25L118.924 169.804V204.908Z" fill="white" stroke="black"/>
<path d="M119.924 169.804L150.334 152.25V187.358L119.924 204.912V169.804Z" fill="#69D6D4" stroke="black"/>
<path d="M88.0158 151.961L118.426 169.515L88.0158 187.065L57.6057 169.511L88.0158 151.961Z" fill="white" stroke="black"/>
<path d="M87.5158 223.039L57.1055 205.485V170.377L87.5158 187.935V223.039Z" fill="white" stroke="black"/>
<path d="M88.5156 187.935L118.926 170.381V205.489L88.5156 223.039V187.935Z" fill="white" stroke="black"/>
<path d="M184.588 181.114L214.994 198.668L184.588 216.218L154.178 198.664L184.588 181.114Z" fill="white" stroke="black"/>
<path d="M184.088 252.192L153.678 234.638V199.53L184.088 217.088V252.192Z" fill="white" stroke="black"/>
<path d="M215.492 234.642L185.082 252.192L185.086 217.088L215.492 199.534V234.642Z" fill="white" stroke="black"/>
<path d="M150.838 151.961L181.248 169.519L150.838 187.069L120.428 169.515L150.838 151.961Z" fill="white" stroke="black"/>
<path d="M150.338 223.043L119.928 205.489V170.381L150.338 187.939V223.043Z" fill="white" stroke="black"/>
<path d="M181.747 205.493L151.332 223.043L151.336 187.939L181.747 170.385V205.493Z" fill="white" stroke="black"/>
<path d="M56.6055 169.51L150.836 115.125" stroke="white" stroke-width="0.136667" stroke-miterlimit="10"/>
<path d="M88.0156 187.646L182.247 133.257" stroke="white" stroke-width="0.136667" stroke-miterlimit="10"/>
<path d="M150.836 187.646L88.0156 151.384" stroke="white" stroke-width="0.136667" stroke-miterlimit="10"/>
<path d="M182.246 169.515L119.426 133.252" stroke="white" stroke-width="0.136667" stroke-miterlimit="10"/>
<rect x="-8.9407e-08" y="0.5" width="36.9942" height="36.9941" transform="matrix(0.866025 0.5 -0.866026 0.5 55.5463 38.3071)" fill="white" stroke="black"/>
<rect x="0.433013" y="0.75" width="36.9942" height="36.9942" transform="matrix(0.866025 0.5 -1.96876e-07 1 22.267 18.8443)" fill="white" stroke="black"/>
<rect x="0.433013" y="0.25" width="36.9941" height="36.9942" transform="matrix(0.866025 -0.5 -1.52815e-07 1 55.142 38.2736)" fill="white" stroke="black"/>
<rect x="-8.9407e-08" y="0.5" width="36.9942" height="36.9941" transform="matrix(0.866025 0.5 -0.866026 0.5 55.5463 0.313233)" fill="white" stroke="black"/>
<rect x="0.433013" y="0.75" width="26.6603" height="26.6603" transform="matrix(0.866025 0.5 -1.96876e-07 1 25.7982 24.6614)" fill="#59770F" stroke="black"/>
<rect x="-8.9407e-08" y="0.5" width="35.267" height="35.2669" transform="matrix(0.866025 0.5 -0.866026 0.5 119.855 217.806)" fill="white" stroke="black"/>
<rect x="0.433013" y="0.75" width="35.267" height="35.267" transform="matrix(0.866025 0.5 -1.96876e-07 1 88.0717 199.207)" fill="white" stroke="black"/>
<rect x="0.433013" y="0.75" width="26.6603" height="26.6603" transform="matrix(0.866025 0.5 -1.96876e-07 1 91.7982 205.661)" fill="#73B200" stroke="black"/>
<rect x="0.433013" y="0.25" width="35.2669" height="35.267" transform="matrix(0.866025 -0.5 -1.52815e-07 1 119.454 217.773)" fill="white" stroke="black"/>
<rect x="-8.9407e-08" y="0.5" width="35.267" height="35.2669" transform="matrix(0.866025 0.5 -0.866026 0.5 119.855 181.54)" fill="white" stroke="black"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-1bvyce`,
                                          "data-framer-name": `Group 55330`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 53,
                                          intrinsicWidth: 85,
                                          svg: `<svg width="85" height="53" viewBox="0 0 85 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.837 49.5874V52.0695L0.339063 28.2756V25.6275L41.837 49.5874Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M42.137 49.0674L0.639043 25.1075L42.137 1.14768L83.6349 25.1075L42.137 49.0674Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M83.9346 28.2756L42.4367 52.0695V49.5874L83.9346 25.6275V28.2756Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-1vx15ji`,
                                          "data-framer-name": `Group 55341`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 40,
                                          intrinsicWidth: 65,
                                          svg: `<svg width="65" height="40" viewBox="0 0 65 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.7921 37.1781V38.8973L0.415234 20.9066V19.0619L31.7921 37.1781Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M32.0921 36.6584L0.715215 18.5422L32.0921 0.426004L63.469 18.5422L32.0921 36.6584Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M63.7687 20.9066L32.3918 38.8973V37.1781L63.7687 19.0619V20.9066Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-19sm8dj`,
                                          "data-framer-name": `Group 55340`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 49,
                                          intrinsicWidth: 81,
                                          svg: `<svg width="81" height="49" viewBox="0 0 81 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.3359 46.1254V48.4242L1.2707 26.0251V23.5702L40.3359 46.1254Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M40.6359 45.6061L1.57068 23.0509L40.6359 0.495584L79.7011 23.0509L40.6359 45.6061Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M80.0019 26.0251L40.9367 48.4242V46.1254L80.0019 23.5702V26.0251Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-1l7op9f`,
                                          "data-framer-name": `Group 55335`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 101,
                                          intrinsicWidth: 167,
                                          svg: `<svg width="167" height="101" viewBox="0 0 167 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M124.296 49.6479V52.13L82.798 28.3362V25.6881L124.296 49.6479Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M124.596 49.128L83.098 25.1681L124.596 1.20823L166.094 25.1681L124.596 49.128Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M166.394 28.3362L124.896 52.13V49.6479L166.394 25.6881V28.3362Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M42.7159 97.2678V99.7499L1.21797 75.956V73.308L42.7159 97.2678Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M43.0159 96.7478L1.51795 72.788L43.0159 48.8281L84.5138 72.788L43.0159 96.7478Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M84.8135 75.956L43.3156 99.7499V97.2678L84.8135 73.308V75.956Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-12buqmm`,
                                          "data-framer-name": `Group 55339`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 119,
                                          intrinsicWidth: 303,
                                          svg: `<svg width="303" height="119" viewBox="0 0 303 119" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.6297 71.2852C2.83475 70.5906 4.77651 70.5958 5.97104 71.2904C7.16557 71.9851 7.16029 73.1059 5.95524 73.8005C4.75545 74.4899 2.81895 74.4951 1.61916 73.8005C0.424634 73.1059 0.435168 71.9745 1.6297 71.2852Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M10.0653 76.137C11.2703 75.4424 13.2121 75.4476 14.4066 76.1423C15.6011 76.8369 15.5959 77.9577 14.3908 78.6523C13.191 79.3417 11.2545 79.347 10.0547 78.6523C8.86019 77.9577 8.86547 76.8263 10.0653 76.137Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M18.4747 80.9732C19.6798 80.2786 21.6215 80.2838 22.8161 80.9784C24.0106 81.6731 24.0106 82.7992 22.8108 83.4938C21.6111 84.1831 19.664 84.1831 18.4695 83.4885C17.2697 82.7939 17.2749 81.6625 18.4747 80.9732Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M26.879 85.8299C28.0841 85.1353 30.0258 85.1405 31.2204 85.8351C32.4149 86.5297 32.4149 87.6559 31.2151 88.3505C30.0153 89.0398 28.0683 89.0398 26.8738 88.3452C25.674 87.6506 25.6845 86.5192 26.879 85.8299Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M35.299 90.7083C36.504 90.0137 38.4458 90.0189 39.6403 90.7135C40.8348 91.4082 40.8348 92.5343 39.635 93.2289C38.4353 93.9182 36.4882 93.9182 35.2937 93.2236C34.0939 92.529 34.0992 91.3976 35.299 90.7083Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M43.7188 95.5811C44.9239 94.8865 46.8657 94.8917 48.0602 95.5863C49.2547 96.281 49.2547 97.4071 48.0549 98.1017C46.8551 98.791 44.9081 98.7911 43.7136 98.0964C42.5191 97.4018 42.5243 96.2757 43.7188 95.5811Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M52.1564 100.443C53.3614 99.7488 55.3032 99.754 56.4977 100.449C57.6923 101.143 57.6923 102.269 56.4925 102.964C55.2927 103.653 53.3456 103.653 52.1511 102.959C50.9513 102.264 50.9566 101.133 52.1564 100.443Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M60.5079 105.311C61.713 104.616 63.6547 104.621 64.8493 105.316C66.0438 106.011 66.0438 107.137 64.844 107.831C63.6442 108.521 61.6972 108.521 60.5027 107.826C59.3029 107.126 59.3134 106 60.5079 105.311Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M68.9755 110.115C70.1805 109.421 72.1118 109.421 73.3115 110.115C74.5061 110.81 74.5061 111.936 73.3063 112.631C72.1065 113.32 70.1595 113.32 68.9649 112.626C67.7599 111.931 67.7757 110.805 68.9755 110.115Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M77.4012 115.093C78.6063 114.399 80.5375 114.399 81.7373 115.093C82.9318 115.788 82.9318 116.914 81.732 117.609C80.5322 118.298 78.5852 118.298 77.3907 117.604C76.1909 116.909 76.2067 115.783 77.4012 115.093Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M143.712 90.6745C144.912 89.9851 146.859 89.9851 148.048 90.6745C149.243 91.3691 149.232 92.4952 148.033 93.1846C146.828 93.8792 144.896 93.8792 143.697 93.1846C142.507 92.4952 142.507 91.3691 143.712 90.6745Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M135.283 95.579C136.488 94.8844 138.429 94.8897 139.619 95.579C140.813 96.2737 140.808 97.3945 139.603 98.0891C138.403 98.7785 136.467 98.7837 135.267 98.0891C134.083 97.3945 134.088 96.2684 135.283 95.579Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M126.89 100.415C128.09 99.7254 130.037 99.7254 131.226 100.415C132.421 101.109 132.41 102.235 131.21 102.925C130.005 103.619 128.074 103.619 126.874 102.925C125.685 102.235 125.685 101.115 126.89 100.415Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M118.458 105.293C119.664 104.598 121.605 104.604 122.795 105.293C123.989 105.988 123.984 107.108 122.779 107.803C121.579 108.492 119.643 108.498 118.443 107.803C117.253 107.108 117.259 105.982 118.458 105.293Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M110.041 110.14C111.24 109.45 113.187 109.45 114.377 110.14C115.571 110.834 115.561 111.961 114.361 112.65C113.156 113.345 111.225 113.345 110.025 112.65C108.835 111.961 108.835 110.834 110.041 110.14Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M101.615 115.012C102.815 114.323 104.762 114.323 105.951 115.012C107.145 115.707 107.135 116.833 105.935 117.522C104.73 118.217 102.799 118.217 101.599 117.522C100.41 116.833 100.41 115.707 101.615 115.012Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M195.216 60.4789C196.416 59.7896 198.363 59.7896 199.552 60.4789C200.747 61.1735 200.736 62.2997 199.537 62.989C198.332 63.6836 196.4 63.6836 195.201 62.989C194.011 62.2997 194.011 61.1735 195.216 60.4789Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M186.787 65.3835C187.992 64.6889 189.933 64.6941 191.123 65.3835C192.317 66.0781 192.312 67.199 191.107 67.8936C189.907 68.5829 187.971 68.5882 186.771 67.8936C185.587 67.199 185.592 66.0728 186.787 65.3835Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M178.394 70.2192C179.594 69.5298 181.541 69.5298 182.73 70.2192C183.925 70.9138 183.914 72.0399 182.714 72.7292C181.509 73.4239 179.578 73.4239 178.378 72.7292C177.189 72.0399 177.189 70.919 178.394 70.2192Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M169.962 75.0974C171.167 74.4027 173.109 74.408 174.299 75.0974C175.493 75.792 175.488 76.9128 174.283 77.6075C173.083 78.2968 171.146 78.3021 169.947 77.6075C168.757 76.9128 168.763 75.7867 169.962 75.0974Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M161.544 79.9443C162.744 79.2549 164.691 79.2549 165.881 79.9443C167.075 80.6389 167.065 81.765 165.865 82.4543C164.66 83.149 162.728 83.149 161.529 82.4543C160.339 81.765 160.339 80.6389 161.544 79.9443Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M153.119 84.8168C154.318 84.1275 156.265 84.1275 157.455 84.8168C158.649 85.5114 158.639 86.6376 157.439 87.3269C156.234 88.0215 154.303 88.0215 153.103 87.3269C151.914 86.6376 151.914 85.5114 153.119 84.8168Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M246.457 29.5593C247.656 28.8699 249.603 28.8699 250.793 29.5593C251.987 30.2539 251.977 31.38 250.777 32.0693C249.572 32.764 247.641 32.764 246.441 32.0693C245.251 31.38 245.252 30.2539 246.457 29.5593Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M238.027 34.4638C239.232 33.7692 241.174 33.7745 242.363 34.4638C243.557 35.1584 243.552 36.2793 242.347 36.9739C241.147 37.6632 239.211 37.6685 238.011 36.9739C236.827 36.2793 236.832 35.1532 238.027 34.4638Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M229.634 39.2995C230.834 38.6101 232.781 38.6101 233.97 39.2995C235.165 39.9941 235.154 41.1202 233.955 41.8096C232.75 42.5042 230.818 42.5042 229.619 41.8096C228.429 41.1202 228.429 39.9994 229.634 39.2995Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M221.203 44.1777C222.408 43.4831 224.349 43.4883 225.539 44.1777C226.733 44.8723 226.728 45.9932 225.523 46.6878C224.323 47.3771 222.387 47.3824 221.187 46.6878C219.998 45.9932 220.003 44.867 221.203 44.1777Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M212.785 49.0246C213.984 48.3352 215.932 48.3352 217.121 49.0246C218.315 49.7192 218.305 50.8453 217.105 51.5347C215.9 52.2293 213.969 52.2293 212.769 51.5347C211.58 50.8453 211.58 49.7192 212.785 49.0246Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M204.359 53.8971C205.559 53.2078 207.506 53.2078 208.695 53.8971C209.89 54.5918 209.879 55.7179 208.679 56.4072C207.474 57.1019 205.543 57.1019 204.343 56.4072C203.154 55.7179 203.154 54.5918 204.359 53.8971Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M297.292 0.697923C298.492 0.00856994 300.439 0.00856994 301.629 0.697923C302.823 1.39254 302.813 2.51867 301.613 3.20802C300.408 3.90264 298.476 3.90264 297.277 3.20802C296.087 2.51867 296.087 1.39254 297.292 0.697923Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M288.863 5.60249C290.068 4.90787 292.01 4.91313 293.199 5.60249C294.393 6.2971 294.388 7.41795 293.183 8.11257C291.983 8.80192 290.047 8.80718 288.847 8.11257C287.663 7.41795 287.668 6.29184 288.863 5.60249Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M280.47 10.4382C281.67 9.7488 283.617 9.7488 284.806 10.4382C286.001 11.1328 285.99 12.2589 284.791 12.9482C283.585 13.6429 281.654 13.6429 280.454 12.9482C279.265 12.2589 279.265 11.138 280.47 10.4382Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M272.039 15.3164C273.244 14.6217 275.185 14.627 276.375 15.3164C277.569 16.011 277.564 17.1318 276.359 17.8265C275.159 18.5158 273.223 18.5211 272.023 17.8265C270.834 17.1318 270.839 16.0057 272.039 15.3164Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M263.621 20.1633C264.82 19.4739 266.767 19.4739 267.957 20.1633C269.151 20.8579 269.141 21.984 267.941 22.6733C266.736 23.368 264.805 23.368 263.605 22.6733C262.416 21.984 262.416 20.8579 263.621 20.1633Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M255.195 25.0358C256.395 24.3465 258.342 24.3465 259.531 25.0358C260.725 25.7304 260.715 26.8566 259.515 27.5459C258.31 28.2405 256.379 28.2405 255.179 27.5459C253.99 26.8566 253.99 25.7304 255.195 25.0358Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-v74nzl`,
                                          "data-framer-name": `Group`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 67,
                                          intrinsicWidth: 116,
                                          svg: `<svg width="116" height="67" viewBox="0 0 116 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.852092 63.8868C2.00978 63.2185 3.91473 63.2342 5.11452 63.9289C6.30379 64.6182 6.33009 65.7285 5.1724 66.3969C4.00945 67.0704 2.094 67.0494 0.904733 66.36C-0.289794 65.6601 -0.310863 64.5551 0.852092 63.8868Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M9.26615 59.0193C10.4238 58.351 12.3288 58.3668 13.5286 59.0614C14.7179 59.7508 14.7442 60.8611 13.5865 61.5294C12.4235 62.203 10.5081 62.1819 9.3188 61.4926C8.12427 60.7927 8.1032 59.6876 9.26615 59.0193Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M17.6919 54.1565C18.8496 53.4882 20.7546 53.504 21.9544 54.1986C23.1436 54.888 23.1699 55.9983 22.0122 56.6666C20.8493 57.3402 18.9338 57.3191 17.7446 56.6298C16.55 55.9299 16.529 54.8248 17.6919 54.1565Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M34.5357 44.4266C35.6934 43.7582 37.5984 43.774 38.7982 44.4687C39.9874 45.158 40.0137 46.2683 38.856 46.9366C37.6931 47.6102 35.7776 47.5892 34.5884 46.8998C33.3886 46.2052 33.3675 45.1001 34.5357 44.4266Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M51.3639 34.7076C52.5215 34.0393 54.4265 34.055 55.6263 34.7497C56.8155 35.439 56.8419 36.5494 55.6842 37.2177C54.5212 37.8912 52.6058 37.8702 51.4165 37.1808C50.2167 36.4809 50.1956 35.3759 51.3639 34.7076Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M42.9439 39.554C44.1016 38.8857 46.0066 38.9015 47.2064 39.5961C48.3956 40.2855 48.4219 41.3958 47.2642 42.0641C46.1013 42.7377 44.1858 42.7166 42.9966 42.0273C41.7968 41.3326 41.7757 40.2276 42.9439 39.554Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M59.7792 29.8291C60.9421 29.1555 62.8523 29.1713 64.0468 29.8659C65.2361 30.5553 65.2624 31.6656 64.0994 32.3391C62.9418 33.0075 61.0263 32.9864 59.8371 32.2971C58.6425 31.6024 58.6215 30.4974 59.7792 29.8291Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M26.0738 49.2788C27.2788 48.5842 29.2101 48.5842 30.4099 49.2788C31.5991 49.9681 31.5991 51.0942 30.3941 51.7888C29.1943 52.4782 27.2472 52.4782 26.058 51.7888C24.8635 51.0942 24.874 49.9681 26.0738 49.2788Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M85.0484 15.248C86.2534 14.5534 88.1846 14.5534 89.3844 15.248C90.5737 15.9374 90.5737 17.0635 89.3687 17.7581C88.1689 18.4474 86.2219 18.4474 85.0326 17.7581C83.8381 17.0635 83.8486 15.9426 85.0484 15.248Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M110.3 0.676235C111.505 -0.0183804 113.437 -0.0183804 114.636 0.676235C115.826 1.36559 115.826 2.4917 114.621 3.18632C113.421 3.87567 111.474 3.87567 110.285 3.18632C109.09 2.4917 109.101 1.36559 110.3 0.676235Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M101.861 5.52316C103.066 4.82854 104.997 4.82854 106.197 5.52316C107.386 6.21251 107.386 7.33863 106.181 8.03324C104.981 8.72259 103.034 8.72259 101.845 8.03324C100.651 7.34389 100.661 6.21777 101.861 5.52316Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M68.2247 24.9883C69.4298 24.2937 71.3716 24.299 72.5661 24.9936C73.7606 25.6882 73.7606 26.8143 72.5608 27.5089C71.361 28.1983 69.414 28.1983 68.2195 27.5037C67.0197 26.809 67.025 25.6829 68.2247 24.9883Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M76.5919 20.1416C77.797 19.447 79.7387 19.4523 80.9332 20.1469C82.1278 20.8415 82.1278 21.9676 80.928 22.6622C79.7282 23.3516 77.7812 23.3516 76.5867 22.657C75.3869 21.9624 75.3974 20.8362 76.5919 20.1416Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M93.4083 10.3643C94.6134 9.66968 96.5552 9.67493 97.7497 10.3695C98.9442 11.0642 98.9442 12.1903 97.7444 12.8849C96.5446 13.5742 94.5976 13.5743 93.4031 12.8796C92.2033 12.185 92.2085 11.0589 93.4083 10.3643Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-1h1prey`,
                                          "data-framer-name": `Group`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 68,
                                          intrinsicWidth: 116,
                                          svg: `<svg width="116" height="68" viewBox="0 0 116 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.918498 64.4439C2.07619 63.7756 3.98114 63.7914 5.18093 64.486C6.3702 65.1753 6.3965 66.2857 5.23881 66.954C4.07585 67.6275 2.16041 67.6065 0.97114 66.9171C-0.223388 66.2173 -0.244456 65.1122 0.918498 64.4439Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M9.33256 59.5765C10.4903 58.9081 12.3952 58.9239 13.595 59.6186C14.7843 60.3079 14.8106 61.4182 13.6529 62.0866C12.4899 62.7601 10.5745 62.7391 9.3852 62.0497C8.19067 61.3498 8.16961 60.2448 9.33256 59.5765Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M17.7583 54.7137C18.916 54.0454 20.821 54.0612 22.0208 54.7558C23.21 55.4451 23.2363 56.5555 22.0787 57.2238C20.9157 57.8973 19.0002 57.8763 17.811 57.1869C16.6165 56.487 16.5954 55.382 17.7583 54.7137Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M34.6021 44.9837C35.7598 44.3154 37.6648 44.3312 38.8646 45.0258C40.0538 45.7151 40.0801 46.8255 38.9224 47.4938C37.7595 48.1673 35.844 48.1463 34.6548 47.4569C33.455 46.7623 33.4339 45.6572 34.6021 44.9837Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M51.4303 35.2647C52.5879 34.5964 54.4929 34.6122 55.6927 35.3068C56.882 35.9961 56.9083 37.1065 55.7506 37.7748C54.5876 38.4484 52.6722 38.4273 51.4829 37.7379C50.2831 37.0381 50.262 35.933 51.4303 35.2647Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M43.0103 40.1111C44.168 39.4428 46.073 39.4586 47.2728 40.1532C48.462 40.8426 48.4883 41.9529 47.3306 42.6212C46.1677 43.2948 44.2522 43.2737 43.063 42.5844C41.8632 41.8898 41.8421 40.7847 43.0103 40.1111Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M59.8456 30.3862C61.0085 29.7126 62.9187 29.7284 64.1132 30.423C65.3025 31.1124 65.3288 32.2227 64.1659 32.8963C63.0082 33.5646 61.0927 33.5435 59.9035 32.8542C58.7089 32.1596 58.6879 31.0545 59.8456 30.3862Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M26.1402 49.8359C27.3452 49.1413 29.2765 49.1413 30.4763 49.8359C31.6655 50.5253 31.6655 51.6514 30.4605 52.346C29.2607 53.0353 27.3137 53.0353 26.1244 52.346C24.9299 51.6514 24.9404 50.5253 26.1402 49.8359Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M85.1148 15.8051C86.3198 15.1105 88.2511 15.1105 89.4508 15.8051C90.6401 16.4945 90.6401 17.6206 89.4351 18.3152C88.2353 19.0046 86.2883 19.0046 85.099 18.3152C83.9045 17.6206 83.915 16.4998 85.1148 15.8051Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M110.367 1.23336C111.572 0.538748 113.503 0.538748 114.703 1.23336C115.892 1.92272 115.892 3.04883 114.687 3.74345C113.487 4.4328 111.54 4.4328 110.351 3.74345C109.156 3.04883 109.167 1.92272 110.367 1.23336Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M101.927 6.08029C103.132 5.38567 105.064 5.38567 106.263 6.08029C107.453 6.76964 107.453 7.89575 106.248 8.59037C105.048 9.27972 103.101 9.27972 101.911 8.59037C100.717 7.90102 100.727 6.7749 101.927 6.08029Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M68.2912 25.5454C69.4962 24.8508 71.438 24.8561 72.6325 25.5507C73.827 26.2453 73.827 27.3714 72.6272 28.0661C71.4274 28.7554 69.4804 28.7554 68.2859 28.0608C67.0861 27.3662 67.0914 26.2401 68.2912 25.5454Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M76.6583 20.6988C77.8634 20.0041 79.8051 20.0094 80.9997 20.704C82.1942 21.3986 82.1942 22.5248 80.9944 23.2194C79.7946 23.9087 77.8476 23.9087 76.6531 23.2141C75.4533 22.5195 75.4638 21.3934 76.6583 20.6988Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M93.4747 10.9214C94.6798 10.2268 96.6216 10.2321 97.8161 10.9267C99.0106 11.6213 99.0106 12.7474 97.8108 13.442C96.611 14.1314 94.664 14.1314 93.4695 13.4368C92.2697 12.7422 92.275 11.616 93.4747 10.9214Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-140m0s0`,
                                          "data-framer-name": `Group 1321315554`,
                                          children: [
                                            /*#__PURE__*/ l(`div`, {
                                              className: `framer-1pmhiog`,
                                              "data-framer-name": `Group 55320`,
                                              children: [
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-npp0cz`,
                                                  "data-framer-name": `Rectangle 5`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 29,
                                                  intrinsicWidth: 48,
                                                  svg: `<svg width="48" height="29" viewBox="0 0 48 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-8.9407e-08" y="0.5" width="26.6591" height="26.659" transform="matrix(0.866025 0.5 -0.866026 0.5 24.4682 0.795166)" fill="white" stroke="black"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-13tpysi`,
                                                  "data-framer-name": `Rectangle 3`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 43,
                                                  intrinsicWidth: 25,
                                                  svg: `<svg width="25" height="43" viewBox="0 0 25 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.433013" y="0.75" width="26.6591" height="26.659" transform="matrix(0.866025 0.5 -1.96876e-07 1 0.140044 0.499314)" fill="#F4F2EA" stroke="black"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-w51bx5`,
                                                  "data-framer-name": `Rectangle 6`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 33,
                                                  intrinsicWidth: 20,
                                                  svg: `<svg width="20" height="33" viewBox="0 0 20 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="21.0952" height="21.0952" transform="matrix(0.866025 0.5 -1.96876e-07 1 0.923828 0.638916)" fill="#F4F2EA"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-1fbs6zt`,
                                                  "data-framer-name": `Rectangle 4`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 43,
                                                  intrinsicWidth: 24,
                                                  svg: `<svg width="24" height="43" viewBox="0 0 24 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.433013" y="0.25" width="26.659" height="26.659" transform="matrix(0.866025 -0.5 -1.52815e-07 1 0.0736377 14.7617)" fill="#F4F2EA" stroke="black"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-fco68u`,
                                                  "data-framer-name": `Rectangle 2`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 29,
                                                  intrinsicWidth: 48,
                                                  svg: `<svg width="48" height="29" viewBox="0 0 48 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-8.9407e-08" y="0.5" width="26.6591" height="26.659" transform="matrix(0.866025 0.5 -0.866026 0.5 24.4682 1.13647)" fill="white" stroke="black"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ l(`div`, {
                                              className: `framer-6wrcx0`,
                                              "data-framer-name": `Group`,
                                              children: [
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-b0bud9`,
                                                  "data-framer-name": `Vector`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 34,
                                                  intrinsicWidth: 18,
                                                  svg: `<svg width="18" height="34" viewBox="0 0 18 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.01523 23.7101V3.54927L4.82502 1.34912L17.0544 8.41157V32.9677L1.01523 23.7101Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.8"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-1shihar`,
                                                  "data-framer-name": `Code`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 17,
                                                  intrinsicWidth: 10,
                                                  svg: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4345_5607)">
<path d="M8.86327 10.7008L6.90136 11.8335L6.50617 11.1491L8.0701 10.2429L6.50617 7.53086L6.90136 7.3027L8.86327 10.7008Z" fill="#050B14"/>
<path d="M0.455078 5.84636L2.41699 4.71365L2.81217 5.39813L1.24825 6.3043L2.81217 9.01633L2.41699 9.24449L0.455078 5.84636Z" fill="#050B14"/>
<path d="M5.11851 5.30279L3.65538 10.7633L4.19682 11.2434L5.65996 5.78291L5.11851 5.30279Z" fill="#050B14"/>
</g>
<defs>
<clipPath id="clip0_4345_5607">
<rect width="10.3562" height="10.3562" fill="white" transform="matrix(0.866025 0.5 0 1 0.175781 0.506348)"/>
</clipPath>
</defs>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-truiio`,
                                                  "data-framer-name": `Vector`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 6,
                                                  intrinsicWidth: 5,
                                                  svg: `<svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.82502 0.887207V5.74951L0.615234 3.31836L4.82502 0.887207Z" fill="#272727"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-4etj2t`,
                                          "data-framer-name": `Group`,
                                          children: [
                                            /*#__PURE__*/ c(h, {
                                              className: `framer-vj0nj9`,
                                              "data-framer-name": `Vector`,
                                              fill: `rgba(0,0,0,1)`,
                                              intrinsicHeight: 30,
                                              intrinsicWidth: 51,
                                              svg: `<svg width="51" height="30" viewBox="0 0 51 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.1347 0.934518L49.033 14.7328L25.1348 28.5245L1.23647 14.7295L25.1347 0.934518Z" fill="white" stroke="#272727"/>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ c(h, {
                                              className: `framer-11zhqg3`,
                                              "data-framer-name": `Vector`,
                                              fill: `rgba(0,0,0,1)`,
                                              intrinsicHeight: 44,
                                              intrinsicWidth: 26,
                                              svg: `<svg width="26" height="44" viewBox="0 0 26 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.6347 42.981L0.736328 29.1859V1.59603L24.6347 15.3944V42.981Z" fill="#F4F2EA" stroke="#272727"/>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ c(h, {
                                              className: `framer-1qi9yi4`,
                                              "data-framer-name": `Vector`,
                                              fill: `rgba(0,0,0,1)`,
                                              intrinsicHeight: 44,
                                              intrinsicWidth: 26,
                                              svg: `<svg width="26" height="44" viewBox="0 0 26 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.634276 15.3944L24.5327 1.59934V29.1893L0.630963 42.9811L0.634276 15.3944Z" fill="#F4F2EA" stroke="#272727"/>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(`div`, {
                                              className: `framer-hswqkq`,
                                              "data-framer-name": `Group`,
                                              children: [
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-1n5vw1z`,
                                                  "data-framer-name": `Vector`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 33,
                                                  intrinsicWidth: 18,
                                                  svg: `<svg width="18" height="33" viewBox="0 0 18 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.982422 22.7925V2.74713L4.69221 0.604731L16.8216 7.60943V31.9346L0.982422 22.7925Z" fill="#F4F2EA" stroke="#272727"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-9vkzyg`,
                                                  "data-framer-name": `Vector`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 5,
                                                  intrinsicWidth: 5,
                                                  svg: `<svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.69221 0.0273438V4.88965L0.482422 2.4585L4.69221 0.0273438Z" fill="#272727"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-1r3zklf`,
                                                  "data-framer-name": `Data-table`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 17,
                                                  intrinsicWidth: 10,
                                                  svg: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4345_5616)">
<path d="M3.70605 8.3738L2.58496 7.72654V8.3738L3.70605 9.02106V8.3738Z" fill="#050B14"/>
<path d="M5.38769 9.3447L4.2666 8.69743V9.3447L5.38769 9.99196V9.3447Z" fill="#050B14"/>
<path d="M3.70605 7.07928L2.58496 6.43201V7.07928L3.70605 7.72654V7.07928Z" fill="#050B14"/>
<path d="M5.38769 10.6392L4.2666 9.99196V10.6392L5.38769 11.2865V10.6392Z" fill="#050B14"/>
<path d="M7.06933 9.02106L5.94824 8.3738V9.02106L7.06933 9.66833V9.02106Z" fill="#050B14"/>
<path d="M7.06933 11.6101L5.94824 10.9629V11.6101L7.06933 12.2574V11.6101Z" fill="#050B14"/>
<path d="M7.91015 5.94657L1.74414 2.38662C1.59553 2.30103 1.45306 2.28704 1.34798 2.34771C1.2429 2.40838 1.18378 2.53876 1.18359 2.71025V9.83014C1.18378 10.0018 1.2429 10.2005 1.34798 10.3825C1.45306 10.5645 1.59553 10.715 1.74414 10.801L7.91015 14.361C8.05876 14.4466 8.20123 14.4606 8.30631 14.3999C8.41139 14.3392 8.47051 14.2088 8.47069 14.0374V6.91746C8.47051 6.74575 8.41139 6.54711 8.30631 6.3651C8.20123 6.1831 8.05876 6.03258 7.91015 5.94657ZM7.91015 6.59383V7.88835L1.74414 4.32841V3.03388L7.91015 6.59383ZM1.74414 10.1538V4.97567L7.91015 8.53562V13.7137L1.74414 10.1538Z" fill="#050B14"/>
</g>
<defs>
<clipPath id="clip0_4345_5616">
<rect width="10.3562" height="10.3562" fill="white" transform="matrix(0.866025 0.5 0 1 0.34375 0.606689)"/>
</clipPath>
</defs>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-wk39le`,
                                          "data-framer-name": `XMLID_70_`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 393,
                                          intrinsicWidth: 140,
                                          svg: `<svg width="140" height="393" viewBox="0 0 140 393" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.49" fill-rule="evenodd" clip-rule="evenodd" d="M0.0214844 0.117432V350.005L71.2585 392.254C71.2585 391.958 139.549 350.005 139.549 350.005V0.117531L0.0214844 0.117432Z" fill="url(#paint0_linear_4345_5617)" fill-opacity="0.5"/>
<defs>
<linearGradient id="paint0_linear_4345_5617" x1="71.2609" y1="392.246" x2="71.2609" y2="71.1267" gradientUnits="userSpaceOnUse">
<stop stop-color="#B2ED1D"/>
<stop offset="0.485" stop-color="#BFF043" stop-opacity="0.75"/>
<stop offset="0.6866" stop-color="#CCF368" stop-opacity="0.48"/>
<stop offset="0.9905" stop-color="#E5F9B4" stop-opacity="0.01"/>
<stop offset="1" stop-color="#F3F3F3" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-zycdwv`,
                                          "data-framer-name": `Rectangle 8`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 62,
                                          intrinsicWidth: 106,
                                          svg: `<svg width="106" height="62" viewBox="0 0 106 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.75977 61.0811L105.67 1.0885L103.938 0.0885042L0.0277148 60.0811L1.75977 61.0811Z" fill="#73B200"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-1aikkv5`,
                                          "data-framer-name": `Group 55336`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 53,
                                          intrinsicWidth: 85,
                                          svg: `<svg width="85" height="53" viewBox="0 0 85 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.3428 49.6511V52.1332L0.844922 28.3393V25.6913L42.3428 49.6511Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M42.6428 49.1317L1.14495 25.1719L42.6428 1.21724L84.1407 25.1719L42.6428 49.1317Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M84.4405 28.3393L42.9426 52.1332V49.6511L84.4405 25.6913V28.3393Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-8hqrxq`,
                                          "data-framer-name": `Group 1321315557`,
                                          children: [
                                            /*#__PURE__*/ c(h, {
                                              className: `framer-s6k2m5`,
                                              "data-framer-name": `Group`,
                                              fill: `rgba(0,0,0,1)`,
                                              intrinsicHeight: 53,
                                              intrinsicWidth: 85,
                                              svg: `<svg width="85" height="53" viewBox="0 0 85 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.3409 49.6511V52.1332L0.842969 28.3393V25.6913L42.3409 49.6511Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M42.6409 49.1317L1.143 25.1719L42.6409 1.21724L84.1387 25.1719L42.6409 49.1317Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M84.4385 28.3393L42.9406 52.1332V49.6511L84.4385 25.6913V28.3393Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ c(h, {
                                              className: `framer-k9vwva`,
                                              "data-framer-name": `Group 1321315560`,
                                              fill: `rgba(0,0,0,1)`,
                                              intrinsicHeight: 68,
                                              intrinsicWidth: 49,
                                              svg: `<svg width="49" height="68" viewBox="0 0 49 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8.9407e-08" y="0.5" width="26.6591" height="26.659" transform="matrix(-0.866025 0.5 0.866026 0.5 24.0455 40.1829)" fill="white" stroke="black"/>
<rect x="-0.433013" y="0.75" width="26.6591" height="26.659" transform="matrix(-0.866025 0.5 1.96876e-07 1 47.6236 26.32)" fill="#F4F2EA" stroke="black"/>
<rect width="21.0952" height="21.0952" transform="matrix(-0.866025 0.5 1.96876e-07 1 45.5898 31.0266)" fill="#F4F2EA"/>
<rect x="-0.433013" y="0.25" width="26.659" height="26.659" transform="matrix(-0.866025 -0.5 1.52815e-07 1 23.69 39.7164)" fill="#F4F2EA" stroke="black"/>
<rect x="8.9407e-08" y="0.5" width="26.6591" height="26.659" transform="matrix(-0.866025 0.5 0.866026 0.5 24.0455 12.5242)" fill="white" stroke="black"/>
<path d="M32.4984 23.0978V2.93696L28.6886 0.736812L16.4593 7.79927V32.3554L32.4984 23.0978Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.8"/>
<g clip-path="url(#clip0_4345_5631)">
<path d="M20.6504 19.0885L22.6123 20.2212L23.0075 19.5368L21.4436 18.6306L23.0075 15.9186L22.6123 15.6904L20.6504 19.0885Z" fill="#050B14"/>
<path d="M29.0586 14.2341L27.0967 13.1013L26.7015 13.7858L28.2654 14.692L26.7015 17.404L27.0967 17.6322L29.0586 14.2341Z" fill="#050B14"/>
<path d="M24.3952 13.6905L25.8583 19.151L25.3168 19.6311L23.8537 14.1706L24.3952 13.6905Z" fill="#050B14"/>
</g>
<path d="M28.6886 0.274902V5.1372L32.8984 2.70605L28.6886 0.274902Z" fill="#272727"/>
<defs>
<clipPath id="clip0_4345_5631">
<rect width="10.3562" height="10.3562" fill="white" transform="matrix(-0.866025 0.5 0 1 29.3379 8.89404)"/>
</clipPath>
</defs>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-1j0xijp`,
                                          "data-framer-name": `Group 1321315556`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 62,
                                          intrinsicWidth: 85,
                                          svg: `<svg width="85" height="62" viewBox="0 0 85 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.7979 58.5808V61.0629L0.3 37.269V34.6209L41.7979 58.5808Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M42.0979 58.0614L0.60003 34.1016L42.0979 10.1469L83.5958 34.1016L42.0979 58.0614Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M83.8956 37.269L42.3977 61.0629V58.5808L83.8956 34.6209V37.269Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M42.2815 6.01904L70.0137 22.0078L41.9052 37.9267L14.1832 22.0076L42.2815 6.01904Z" fill="white" stroke="black"/>
<path d="M70.0137 35.8684L41.8947 51.8285V37.9962L70.0137 22.0076V35.8684Z" fill="#F4F2EA" stroke="black"/>
<path d="M57.3381 34.915L60.9902 32.8076V30.3806L57.3381 32.4901V34.915Z" fill="#73B200" stroke="black"/>
<path d="M63.5438 31.335L67.1934 29.2259V26.8011L63.5438 28.9082V31.335Z" fill="#73B200" stroke="black"/>
<path d="M57.3381 40.2866L60.9902 38.1792V35.7522L57.3381 37.8617V40.2866Z" fill="#73B200" stroke="black"/>
<path d="M63.5438 36.7064L67.1934 34.5972V32.1724L63.5438 34.2796V36.7064Z" fill="#73B200" stroke="black"/>
<path d="M14.1847 22.0667L41.8965 37.9963V51.8288L14.1847 35.8991V22.0667Z" fill="#F4F2EA" stroke="black"/>
<path d="M48.5918 36.8564V40.4384L43.9397 43.1229V39.5435L48.5918 36.8564Z" fill="#73B200" stroke="black"/>
<path d="M54.7949 33.2771V36.8564L50.1454 39.5435V35.9616L54.7949 33.2771Z" fill="#73B200" stroke="black"/>
<path d="M48.5918 42.2278V45.8097L43.9397 48.4942V44.9123L48.5918 42.2278Z" fill="#73B200" stroke="black"/>
<path d="M54.7949 38.646V42.2279L50.1454 44.9124V41.3331L54.7949 38.646Z" fill="#73B200" stroke="black"/>
<path d="M41.1886 30.1682V19.4487L47.3789 23.022L41.1886 30.1682ZM41.1886 19.4487V30.1682L34.9983 23.022L41.1886 19.4487Z" fill="#73B200"/>
<path d="M41.1886 30.1682V19.4487M41.1886 30.1682L47.3789 23.022L41.1886 19.4487M41.1886 30.1682L34.9983 23.022L41.1886 19.4487" stroke="black"/>
<path d="M41.1832 18.0183L32.5245 23.022L41.191 28.0242L49.8574 23.022L41.1832 18.0183ZM41.191 26.5949L35.0007 23.0216L41.191 19.4487L47.3813 23.022L41.191 26.5949Z" fill="white" stroke="black"/>
<path d="M32.523 23.0217V28.7387L41.1895 33.7412V28.0239L32.523 23.0217Z" fill="#F4F2EA" stroke="black"/>
<path d="M41.191 28.0239V33.7412L49.8574 28.7387V23.0217L41.191 28.0239Z" fill="#F4F2EA" stroke="black"/>
<path d="M57.8075 6.75215V1.44702L60.8711 3.21546L57.8075 6.75215ZM57.8075 1.44702V6.75215L54.7439 3.21546L57.8075 1.44702Z" fill="#59770F"/>
<path d="M57.8075 6.75215V1.44702M57.8075 6.75215L60.8711 3.21546L57.8075 1.44702M57.8075 6.75215L54.7439 3.21546L57.8075 1.44702" stroke="black"/>
<path d="M57.8028 0.739258L53.5176 3.21561L57.8066 5.6912L62.0957 3.21561L57.8028 0.739258ZM57.8066 4.98386L54.743 3.21542L57.8066 1.44717L60.8703 3.21561L57.8066 4.98386Z" fill="white" stroke="black"/>
<path d="M53.5176 3.21533V20.7244L57.8066 23.2002L57.8066 5.69092L53.5176 3.21533Z" fill="#F4F2EA" stroke="black"/>
<path d="M57.8066 5.69092V23.2002L62.0957 20.7244V3.21533L57.8066 5.69092Z" fill="#F4F2EA" stroke="black"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-uvwv6p`,
                                          "data-framer-name": `Group 1321315555`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 80,
                                          intrinsicWidth: 24,
                                          svg: `<svg width="24" height="80" viewBox="0 0 24 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M23.3126 73.3106C23.3318 71.8528 22.3916 70.275 20.2614 68.99C18.1343 67.7104 15.3023 67.0233 12.435 66.9699C9.56752 66.9165 6.71873 67.4979 4.5585 68.6979L23.3126 73.3106ZM23.3126 73.3106C23.2934 74.7672 22.3135 76.3075 20.1546 77.5123M23.3126 73.3106L20.1546 77.5123M20.1546 77.5123C17.9981 78.7122 15.1495 79.2937 12.2809 79.2403C9.4126 79.1869 6.57885 78.4998 4.45178 77.2202C2.32191 75.9354 1.38147 74.3558 1.40068 72.8969C1.41988 71.4394 2.39974 69.8992 4.5582 68.6981L20.1546 77.5123Z" fill="#94C518" stroke="#73B200"/>
</g>
<path d="M17.9661 69.9866C21.0165 71.8269 20.9807 74.7126 17.8802 76.4383C14.7797 78.1639 9.79598 78.0708 6.73845 76.2306C3.68808 74.3903 3.72388 71.5047 6.82437 69.779C9.92486 68.0533 14.9086 68.1464 17.9661 69.9866Z" fill="#73B200"/>
<path d="M8.05664 73.1089H16.6492V0.343994H8.05664V73.1089Z" fill="url(#paint0_linear_4345_5679)"/>
<defs>
<linearGradient id="paint0_linear_4345_5679" x1="11.6749" y1="73.1594" x2="13.031" y2="0.266092" gradientUnits="userSpaceOnUse">
<stop stop-color="#73B200"/>
<stop offset="0.2852" stop-color="#73B200" stop-opacity="0.28"/>
<stop offset="0.4875" stop-color="#94C518" stop-opacity="0.2"/>
<stop offset="1" stop-color="#D9F68E" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-1jtuyko`,
                                          "data-framer-name": `Group 55337`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 81,
                                          intrinsicWidth: 24,
                                          svg: `<svg width="24" height="81" viewBox="0 0 24 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M22.9786 73.648C22.9978 72.1902 22.0576 70.6124 19.9274 69.3274C17.8003 68.0478 14.9684 67.3607 12.101 67.3073C9.23353 67.2539 6.38474 67.8353 4.22451 69.0353L22.9786 73.648ZM22.9786 73.648C22.9594 75.1046 21.9796 76.6449 19.8206 77.8497M22.9786 73.648L19.8206 77.8497M19.8206 77.8497C17.6641 79.0496 14.8155 79.6311 11.9469 79.5777C9.07862 79.5243 6.24487 78.8372 4.11779 77.5576C1.98793 76.2728 1.04748 74.6932 1.0667 73.2343C1.08589 71.7768 2.06575 70.2366 4.22422 69.0355L19.8206 77.8497Z" fill="#94C518" stroke="#73B200"/>
</g>
<path d="M17.6321 70.324C20.6825 72.1643 20.6467 75.05 17.5462 76.7757C14.4457 78.5013 9.46199 78.4082 6.40446 76.568C3.35409 74.7277 3.38989 71.8421 6.49039 70.1164C9.59088 68.3907 14.5746 68.4838 17.6321 70.324Z" fill="#73B200"/>
<path d="M7.72266 73.4463H16.3152V0.681396H7.72266V73.4463Z" fill="url(#paint0_linear_4345_5687)"/>
<defs>
<linearGradient id="paint0_linear_4345_5687" x1="11.341" y1="73.4968" x2="12.697" y2="0.603495" gradientUnits="userSpaceOnUse">
<stop stop-color="#73B200"/>
<stop offset="0.2852" stop-color="#73B200" stop-opacity="0.28"/>
<stop offset="0.4875" stop-color="#94C518" stop-opacity="0.2"/>
<stop offset="1" stop-color="#D9F68E" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-ad0gp1`,
                                          "data-framer-name": `Group 1321315558`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 53,
                                          intrinsicWidth: 86,
                                          svg: `<svg width="86" height="53" viewBox="0 0 86 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.7667 49.635V52.1171L1.26875 28.3232V25.6751L42.7667 49.635Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M43.0667 49.1156L1.56878 25.1558L43.0667 1.20113L84.5645 25.1558L43.0667 49.1156Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M84.8643 28.3232L43.3664 52.1171V49.635L84.8643 25.6751V28.3232Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-nii7sh`,
                                          "data-framer-name": `Group 1321315559`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 126,
                                          intrinsicWidth: 92,
                                          svg: `<svg width="92" height="126" viewBox="0 0 92 126" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.9073 122.501V124.983L0.409375 101.189V98.5409L41.9073 122.501Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M42.2073 121.981L0.709405 98.0215L42.2073 74.0669L83.7051 98.0215L42.2073 121.981Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M84.0049 101.189L42.507 124.983V122.501L84.0049 98.5409V101.189Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M48.8124 82.2376L42.4942 78.5934L36.1811 82.2402V23.8888L42.4967 20.242V12.9458L74.0801 31.1798L67.7644 34.8291V42.1228L48.8124 31.1798V82.2376Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M67.7625 42.123L74.0781 38.4761L67.7625 34.8293L61.4443 38.4761L67.7625 42.123Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M67.7625 34.8292L74.0781 31.1799L67.7625 27.533L61.4443 31.1799L67.7625 34.8292Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M74.0781 31.1799V38.4759L67.7625 27.533V42.1229L61.4443 31.1799V38.4759" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.6179 83.041V85.3573C36.6179 85.5014 36.7131 85.643 36.901 85.7511L37.6473 86.1834L38.9701 85.4216C39.3459 85.2028 39.3459 84.8502 38.9701 84.6341L38.2238 84.2018L36.901 83.4374C36.7105 83.3267 36.6179 83.1852 36.6179 83.0437V83.041Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.6172 85.5168V85.3547" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M39.1836 89.7321L37.0398 88.4941" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M39.1836 89.7321L37.0398 88.4941" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.4785 95.6798C27.4785 95.896 27.6098 96.1045 27.8774 96.2589L27.8877 96.264L41.811 104.301C42.4029 104.644 43.4375 104.6 44.1221 104.206L56.0868 97.2986C56.1434 97.2652 56.1949 97.2318 56.2412 97.1983C56.514 97.0027 56.6504 96.7685 56.6504 96.5446C56.6504 96.3207 56.5191 96.1225 56.2515 95.9681L42.318 87.923C41.726 87.5808 40.6914 87.6244 40.0069 88.0182L28.0422 94.9258C27.669 95.1394 27.476 95.4173 27.476 95.6798H27.4785Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.4779 95.6797V96.9176C27.4779 97.1338 27.6092 97.3423 27.8768 97.4967L41.8103 105.542C42.4023 105.884 43.4369 105.84 44.1214 105.447L56.0861 98.5391C56.4593 98.3254 56.6523 98.0475 56.6523 97.7849V96.547C56.6523 96.7709 56.5134 97.0051 56.2431 97.2007C56.1968 97.2368 56.1453 97.2677 56.0887 97.3011L44.124 104.209C43.4394 104.602 42.4048 104.646 41.8129 104.304L27.8897 96.2665L27.8794 96.2614C27.6117 96.107 27.4805 95.8985 27.4805 95.6823L27.4779 95.6797Z" fill="#73B200" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M38.0502 4.42505V18.2479C38.0502 18.4615 37.9446 18.675 37.7336 18.7986L28.6385 24.0488C28.0491 24.3885 27.3233 24.3885 26.734 24.0488L21.4761 21.0222C21.2651 20.9012 21.1596 20.685 21.1596 20.4714V6.64856L38.0527 4.42505H38.0502Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.6391 10.2256L37.7343 4.97544C38.1589 4.73095 38.1589 4.121 37.7343 3.87651L32.4764 0.850002C31.887 0.510286 31.1613 0.510286 30.5719 0.850002L21.4768 6.10014C21.0521 6.34463 21.0521 6.95458 21.4768 7.19908L26.7346 10.2256C27.324 10.5653 28.0498 10.5653 28.6391 10.2256Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.955 3.48013C24.955 3.57792 24.973 3.67318 25.009 3.7684C25.1017 4.01032 25.3101 4.23939 25.637 4.42726C26.5455 4.95228 28.0175 4.95228 28.9235 4.42726C29.2503 4.23939 29.4588 4.01032 29.5514 3.7684C29.5874 3.67318 29.6055 3.57535 29.6055 3.48013C29.6055 3.13784 29.379 2.79299 28.9235 2.53048C28.015 2.00546 26.5429 2.00546 25.637 2.53048C25.184 2.79299 24.955 3.13526 24.955 3.48013Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.955 3.48022V6.53262C24.955 6.87491 25.1814 7.21975 25.637 7.48226C26.5455 8.00728 28.0175 8.00728 28.9235 7.48226C29.379 7.21975 29.6055 6.87748 29.6055 6.53262V3.48022C29.6055 3.57802 29.5874 3.67328 29.5514 3.7685C29.4588 4.01042 29.2503 4.23948 28.9235 4.42736C28.015 4.95237 26.5429 4.95237 25.637 4.42736C25.3101 4.23948 25.1017 4.01042 25.009 3.7685C24.973 3.67328 24.955 3.57545 24.955 3.48022Z" fill="#73B200" stroke="black" stroke-width="0.8" stroke-miterlimit="10"/>
<path d="M33.002 4.97833L30.817 3.71729" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.3145 4.21881L32.132 2.95776" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.9968 12.0995C22.9968 12.8175 23.5012 13.6899 24.1214 14.0476C24.7417 14.4054 25.2461 14.1145 25.2461 13.3991C25.2461 12.6836 24.7417 11.8086 24.1214 11.4509C23.5012 11.0932 22.9968 11.384 22.9968 12.0995Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.9968 17.6119C22.9968 18.33 23.5012 19.2024 24.1214 19.5601C24.7417 19.9178 25.2461 19.627 25.2461 18.9115C25.2461 18.1961 24.7417 17.3211 24.1214 16.9634C23.5012 16.6056 22.9968 16.8965 22.9968 17.6119Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M79.8494 82.8376C79.8494 83.1876 79.9549 83.4785 80.1634 83.6406L80.3127 83.7256L83.419 85.5193C83.1694 85.37 83.0484 85.0612 83.0484 84.6804C83.0484 84.2995 83.1745 83.8336 83.4319 83.3909L85.7559 79.3659L84.4073 78.5886L83.4319 78.025C83.2466 77.9169 83.1282 77.7213 83.0767 77.4742C83.015 77.1809 83.051 76.8153 83.1823 76.437L81.898 78.6658H81.8954L80.2329 81.5483C79.9781 81.991 79.8494 82.4516 79.8494 82.8376Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M70.6718 84.3846C70.6666 84.7835 70.7953 85.1078 71.0552 85.2596L74.2825 87.1228C74.298 87.1306 74.3134 87.1384 74.3288 87.1461L74.2542 87.1023C73.9968 86.9531 73.8707 86.6391 73.8707 86.2505V86.2041C73.8707 85.8181 73.9968 85.3574 74.2542 84.9121L75.155 83.35L77.4815 79.3223C77.7312 78.8848 78.0606 78.5476 78.3926 78.3546C78.2588 78.0277 78.1867 77.6288 78.1867 77.1707C78.1867 77.1733 78.1841 77.1733 78.1841 77.1733C77.5613 77.5311 76.9797 77.6623 76.4907 77.5877C76.5782 77.0549 76.4598 76.5994 76.1355 76.4116C76.0326 76.3524 75.9193 76.324 75.7958 76.324C75.6079 76.324 75.3995 76.3909 75.1936 76.5118C74.8641 76.7074 74.5347 77.0472 74.2825 77.4821L71.0552 83.0694C70.7953 83.5223 70.6666 83.9934 70.6718 84.3846Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M73.8704 86.2042C73.8806 85.8284 74.0068 85.3884 74.2538 84.9638L75.1777 83.3629L75.1546 83.3501L74.2538 84.9122C73.9965 85.3575 73.8704 85.8181 73.8704 86.2042Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M80.1632 83.6409C80.1838 83.6563 80.207 83.6744 80.2327 83.6872C80.2585 83.7027 80.2842 83.7155 80.3125 83.7258L80.1632 83.6409Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M73.8684 86.2037C73.8787 85.828 74.0048 85.3879 74.2519 84.9633L75.1758 83.3624L75.1526 83.3496L74.2519 84.9117C73.9945 85.357 73.8684 85.8177 73.8684 86.2037Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M73.8682 86.2041V86.2505C73.8682 86.6391 73.9943 86.9531 74.2517 87.1024L74.3263 87.1461L77.479 88.9656C77.9886 89.259 78.8173 88.7828 79.3294 87.8949C79.5842 87.4523 79.7129 86.9917 79.7129 86.6056C79.7129 86.2196 79.5842 85.9056 79.3294 85.7589L77.0055 84.4154L79.3294 80.3929C79.5147 80.0686 79.6331 79.7367 79.6846 79.4304C79.7721 78.8977 79.6537 78.4421 79.3294 78.2542C79.2265 78.195 79.1107 78.1667 78.9871 78.1667C78.7993 78.1667 78.5934 78.2337 78.3901 78.3546C78.0581 78.5476 77.7286 78.8848 77.479 79.3224L75.1525 83.35L75.1756 83.3628L74.2517 84.9637C74.0046 85.3883 73.8785 85.8284 73.8682 86.2041Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M83.046 84.6803C83.046 85.0612 83.1669 85.3699 83.4166 85.5192L83.4423 85.5347C83.9519 85.8152 84.7729 85.3366 85.2799 84.459L88.5072 78.8691C88.7645 78.4238 88.8906 77.9631 88.8906 77.5771V77.5307C88.8906 77.1421 88.7645 76.8282 88.5072 76.6815L85.2799 74.8183C85.2799 74.8183 85.2644 74.8105 85.2567 74.808L84.4923 74.3652C84.4898 74.3807 84.4872 74.3987 84.482 74.4141C84.4512 74.5763 84.4151 74.7359 84.3688 74.9006C84.3456 74.9855 84.3225 75.0653 84.2942 75.1476C84.0368 75.9686 83.607 76.7793 83.0743 77.4742C83.1257 77.7212 83.2441 77.9169 83.4294 78.025L84.4048 78.5886L85.7534 79.3658L83.4294 83.3908C83.1721 83.8335 83.046 84.2942 83.046 84.6803Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M73.8202 75.122V75.1451C73.8228 75.4771 73.8588 75.7808 73.9257 76.0536C73.9978 76.3496 74.1857 76.6044 74.4508 76.7562L74.7081 76.9029L77.8968 78.7481L79.3561 79.5897C78.9571 79.3298 78.6663 78.8846 78.5325 78.2773C78.481 78.0405 78.4527 77.7806 78.4502 77.5V77.4819C78.4502 75.3664 79.9325 72.798 81.7675 71.7402C81.7752 71.7325 81.7778 71.7325 81.7855 71.7274C82.6451 71.2384 83.4224 71.169 84.0117 71.4521L79.3226 68.7446L79.1322 68.6339C78.8851 68.4898 78.5865 68.4383 78.3112 68.5155C78.0306 68.5953 77.7373 68.7188 77.4362 68.8913C77.4259 68.8938 77.4207 68.8938 77.4156 68.9016C76.8159 69.2464 76.2523 69.7406 75.7556 70.3274C74.6052 71.6836 73.8202 73.5237 73.8202 75.122Z" fill="#73B200" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M85.0859 73.6527C85.0859 75.7682 83.5958 78.3367 81.7686 79.3944C80.8729 79.9092 80.0648 79.9761 79.4677 79.6518L79.3571 79.59C78.8012 79.2297 78.4589 78.5066 78.4512 77.5003V77.4822C78.4512 75.3667 79.9336 72.7982 81.7686 71.7405C81.7763 71.7327 81.7788 71.7329 81.7866 71.7303C82.6462 71.2413 83.4234 71.1692 84.0127 71.4548C84.0282 71.4574 84.0385 71.4652 84.0539 71.4729L84.1723 71.5474C84.7411 71.9052 85.0859 72.6336 85.0859 73.6553V73.6527Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M81.786 75.5007C81.7519 75.566 81.7269 75.6339 81.7115 75.6986C81.7236 75.6796 81.7357 75.6589 81.7474 75.6365C81.7815 75.5712 81.8065 75.5033 81.8219 75.4386C81.8097 75.4576 81.7977 75.4783 81.786 75.5007Z" fill="#59770F" stroke="black" stroke-width="0.8"/>
<path d="M76.8383 44.3416V70.9553C76.8383 70.9553 79.0645 72.1418 79.0645 72.2396V45.6258L76.8383 44.3416Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M79.0658 45.626V72.2397C79.5625 71.6529 80.1261 71.1588 80.7258 70.8139C80.7309 70.8062 80.7361 70.8062 80.7464 70.8036C81.0475 70.6312 81.3409 70.5077 81.6214 70.4279C81.8968 70.3507 82.1953 70.4021 82.4424 70.5463L82.6328 70.6568V45.626H79.0658Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M66.7954 46.4825C66.7954 47.3138 67.0862 48.2403 67.5597 49.0613C68.0333 49.8797 68.6869 50.5977 69.4101 51.0146L79.2954 56.7203C79.9697 57.1089 80.5873 57.1707 81.0506 56.9519L81.1844 56.8773C81.6348 56.5942 81.9102 56.0177 81.9102 55.2096C81.9102 54.4015 81.6193 53.4518 81.1458 52.6308C80.6722 51.8073 80.0186 51.0944 79.2954 50.6775L69.4101 44.9718C68.6715 44.542 68.0049 44.5111 67.5262 44.8071C67.0733 45.0902 66.7954 45.6667 66.7954 46.4825Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M68.2839 47.3426C68.2839 48.0607 68.7883 48.9331 69.4085 49.2908C70.0288 49.6485 70.5332 49.3577 70.5332 48.6423C70.5332 47.9268 70.0288 47.0518 69.4085 46.6941C68.7883 46.3363 68.2839 46.6272 68.2839 47.3426Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M78.1686 53.0479C78.1686 53.766 78.6731 54.6385 79.2933 54.9963C79.9135 55.354 80.418 55.0632 80.418 54.3477C80.418 53.6322 79.9135 52.7571 79.2933 52.3994C78.6731 52.0417 78.1686 52.3325 78.1686 53.0479Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M67.5252 44.8072C68.0014 44.5112 68.6705 44.5421 69.4091 44.9719L79.2944 50.6776C80.015 51.0945 80.6712 51.8073 81.1448 52.6309C81.6183 53.4493 81.9091 54.3758 81.9091 55.2097C81.9091 56.0435 81.6338 56.5968 81.1834 56.8774L90.6671 51.4008L90.837 51.303C91.2668 51.0122 91.5293 50.4434 91.5293 49.6559C91.5293 48.8195 91.2385 47.8981 90.7649 47.0772C90.2914 46.2587 89.6351 45.5432 88.9119 45.1237L79.0319 39.418C78.2907 38.9908 77.6215 38.9625 77.1454 39.2559L67.5252 44.8072Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M42.4904 85.8875V100.475L48.8086 96.8279V82.2407L45.6482 84.0654L42.4904 85.8875Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.1785 82.2407V96.8279L42.4941 100.475V85.8875L36.1785 82.2407Z" fill="#73B200" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.1747 82.2405L42.4904 85.8873L45.6482 84.0652L48.8086 82.2405L42.4904 78.5938L36.1747 82.2405Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 85.887L48.8105 82.2376L42.4949 78.5908L36.1793 82.2402L42.4949 85.887Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 78.5909L48.8105 74.9441L42.4949 71.2974L36.1793 74.9441L42.4949 78.5909Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8105 74.9441V82.2377L42.4949 71.2974V85.8871L36.1793 74.9441V82.2404" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 78.5914L48.8105 74.9446L42.4949 71.2979L36.1793 74.9446L42.4949 78.5914Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 71.2975L48.8105 67.6507L42.4949 64.0039L36.1793 67.6507L42.4949 71.2975Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8105 67.6507V74.9443L42.4949 64.0039V78.591L36.1793 67.6507V74.9443" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 71.2977L48.8105 67.6509L42.4949 64.0042L36.1793 67.6509L42.4949 71.2977Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 64.0039L48.8105 60.357L42.4949 56.7102L36.1793 60.357L42.4949 64.0039Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8105 60.357V67.6507L42.4949 56.7102V71.2975L36.1793 60.357V67.6507" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 64.0041L48.8105 60.3572L42.4949 56.7104L36.1793 60.3572L42.4949 64.0041Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 56.7106L48.8105 53.0638L42.4949 49.417L36.1793 53.0638L42.4949 56.7106Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8105 53.0638V60.3573L42.4949 49.417V64.0043L36.1793 53.0638V60.3573" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 56.7108L48.8105 53.064L42.4949 49.4172L36.1793 53.064L42.4949 56.7108Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 49.4169L48.8105 45.7701L42.4949 42.1233L36.1793 45.7701L42.4949 49.4169Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8105 45.7701V53.0636L42.4949 42.1233V56.7104L36.1793 45.7701V53.0636" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 49.4169L48.8105 45.7701L42.4949 42.1233L36.1793 45.7701L42.4949 49.4169Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 42.123L48.8105 38.4761L42.4949 34.8293L36.1793 38.4761L42.4949 42.123Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8105 38.4761V45.7698L42.4949 34.8293V49.4166L36.1793 38.4761V45.7698" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 42.123L48.8105 38.4761L42.4949 34.8293L36.1793 38.4761L42.4949 42.123Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 34.8292L48.8105 31.1799L42.4949 27.533L36.1793 31.1824L42.4949 34.8292Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8105 31.1799V38.4759L42.4949 27.533V42.1229L36.1793 31.1824V38.4759" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 34.8294L48.8105 31.1801L42.4949 27.5332L36.1793 31.1826L42.4949 34.8294Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 27.5333L48.8105 23.8865L42.4949 20.2397L36.1793 23.8865L42.4949 27.5333Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8105 23.8865V31.1802L42.4949 20.2397V34.8295L36.1793 23.8865V31.1827" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 27.5336L48.8105 23.8868L42.4949 20.24L36.1793 23.8868L42.4949 27.5336Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 20.2396L48.8105 16.5928L42.4949 12.946L36.1793 16.5928L42.4949 20.2396Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8105 16.5928V23.8864L42.4949 12.946V27.5332L36.1793 16.5928V23.8864" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.1805 16.5923V23.8885L42.4961 20.2418V12.9456L39.3383 14.7702L36.1805 16.5923Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.8623 12.9459L36.1805 16.5926L39.3383 14.7705L42.4961 12.9459L36.1805 9.29907L29.8623 12.9459Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.8615 12.9456V20.2418L36.1797 23.8885V16.5923L29.8615 12.9456Z" fill="#73B200" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8087 31.1797L55.127 27.5328L48.8087 23.886L42.4931 27.5328L48.8087 31.1797Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8087 23.8863L55.127 20.2396L48.8087 16.5928L42.4931 20.2396L48.8087 23.8863Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M55.127 20.2396V27.5331L48.8087 16.5928V31.18L42.4931 20.2396V27.5331" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M55.1297 34.8297L61.4453 31.1804L55.1297 27.5334L48.8115 31.1829L55.1297 34.8297Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M55.1297 27.5336L61.4453 23.8868L55.1297 20.24L48.8115 23.8868L55.1297 27.5336Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M61.4453 23.8868V31.1805L55.1297 20.24V34.8298L48.8115 23.8868V31.183" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M61.4455 38.4765L67.7637 34.8297L61.4455 31.1804L55.1298 34.8297L61.4455 38.4765Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M61.4455 31.1804L67.7637 27.5335L61.4455 23.8867L55.1298 27.5335L61.4455 31.1804Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M67.7637 27.5335V34.8297L61.4455 23.8867V38.4765L55.1298 27.5335V34.8297" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M80.3965 49.4169L67.7626 34.8296V42.1233L80.3965 49.4169Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M86.7129 45.77L74.079 31.1802L67.7634 34.8295L80.3973 49.4167L86.7129 45.77Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M75.7553 38.3401L81.9062 45.4433" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M73.2239 35.4165L74.4824 36.8706" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ c(h, {
                                      className: `framer-1kn7p9v`,
                                      "data-framer-name": `Group`,
                                      fill: `rgba(0,0,0,1)`,
                                      intrinsicHeight: 66,
                                      intrinsicWidth: 63,
                                      svg: `<svg width="63" height="66" viewBox="0 0 63 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.2129 65.9371L0.0525112 49.117V28.0908L29.2129 44.9109V65.9371Z" fill="#F4F2EA" stroke="black"/>
<path d="M32.8572 0.757568L62.0176 17.5799L51.0824 32.2969L21.9221 15.4768L32.8572 0.757568Z" fill="white" stroke="black"/>
<path d="M50.916 23.7816L40.1466 38.6039L10.9862 21.7839L21.9213 7.06689L50.916 23.7816Z" fill="white" stroke="black"/>
<path d="M10.9881 13.374L40.1484 30.1941L29.2133 44.9111L0.0529168 28.091L10.9881 13.374Z" fill="white" stroke="black"/>
<path d="M62.0176 17.5798V47.0138L29.2121 65.9369V44.9107L40.1473 30.2596V38.6038L50.9168 24.1137L51.0824 32.2968L62.0176 17.5798Z" fill="#F4F2EA" stroke="black" stroke-width="0.8"/>
<path d="M3.69612 51.22V34.3999L25.5664 47.0138V63.8339L3.69612 51.22Z" fill="#73B200" stroke="black"/>
<path d="M58.373 40.7071V36.501L54.728 38.6041V42.8102L58.373 40.7071Z" fill="#59770F" stroke="black"/>
<path d="M51.082 44.9107V40.7068L43.7919 44.9107V49.1168L51.082 44.9107Z" fill="#59770F" stroke="black"/>
<path d="M40.1484 51.2201V47.0139L36.5034 49.117V53.3231L40.1484 51.2201Z" fill="#59770F" stroke="black"/>
</svg>
`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ c(h, {
                                      className: `framer-1521ugc`,
                                      "data-framer-name": `Group`,
                                      fill: `rgba(0,0,0,1)`,
                                      intrinsicHeight: 60,
                                      intrinsicWidth: 57,
                                      svg: `<svg width="57" height="60" viewBox="0 0 57 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.7003 43.0218C42.7003 43.4005 42.5139 43.7791 42.1392 43.9949L26.0578 53.2784C25.0161 53.8807 23.7311 53.8807 22.6893 53.2784L6.60796 43.9949C6.23325 43.7791 6.04688 43.4004 6.04688 43.0238C6.04688 42.6432 6.23325 42.2665 6.60796 42.0507L22.6893 32.7652C23.7311 32.1649 25.0161 32.1649 26.0578 32.7652L42.1392 42.0507C42.5139 42.2665 42.7003 42.6432 42.7003 43.0218Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.9065 42.3428L23.9804 34.7934C24.2236 34.6541 24.5218 34.6541 24.7651 34.7934L37.8389 42.3428C38.3627 42.6449 38.3627 43.4001 37.8389 43.7023L25.1575 51.024C24.6709 51.3045 24.0745 51.3045 23.588 51.024L10.9065 43.7023C10.3827 43.4001 10.3827 42.6449 10.9065 42.3428Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.7003 43.0239V49.1724C42.7003 49.549 42.5119 49.9277 42.1392 50.1435L26.0578 59.429C25.0161 60.0293 23.7311 60.0293 22.6893 59.429L6.60796 50.1435C6.41963 50.0356 6.28033 49.8865 6.18616 49.7178C6.09395 49.5491 6.04688 49.3607 6.04688 49.1724V43.0239C6.04688 43.4006 6.23325 43.7793 6.60796 43.9951L22.6893 53.2786C23.7311 53.8809 25.0161 53.8809 26.0578 53.2786L42.1392 43.9951C42.5139 43.7793 42.7003 43.4006 42.7003 43.0239Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.6113 53.6491L34.0392 51.0928" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.6113 55.1422L31.9302 53.8042" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M41.5003 47.4632C41.5003 46.4725 40.898 46.0154 40.1544 46.445C39.4109 46.8746 38.8086 48.0263 38.8086 49.019C38.8086 50.0117 39.4109 50.4668 40.1544 50.0372C40.898 49.6075 41.5003 48.4559 41.5003 47.4632Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M40.1523 48.24L40.8724 47.3552" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.4742 54.9832L9.90734 50.6141C9.75235 50.5258 9.6582 50.3611 9.6582 50.1826V47.9617C9.6582 47.7066 9.93481 47.5458 10.1565 47.6733L17.7234 52.0424C17.8784 52.1307 17.9726 52.2954 17.9726 52.4739V54.6948C17.9726 54.9499 17.6959 55.1107 17.4742 54.9832Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.25 51.0925L16.4282 52.9269" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.2031 49.9097L12.2704 50.5276" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0826 8.94784L12.107 7.80607C11.7696 7.61184 11.3537 7.61184 11.0143 7.80607L9.03865 8.94784H5.61914V15.3651C5.61914 15.4867 5.67994 15.6103 5.80158 15.6809L11.0143 18.6905C11.3517 18.8847 11.7676 18.8847 12.107 18.6905L17.3196 15.6809C17.4413 15.6103 17.5021 15.4887 17.5021 15.3651V8.94784H14.0826Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.0143 12.2732L5.80159 9.26364C5.55832 9.12434 5.55832 8.77318 5.80159 8.63389L11.0143 5.62443C11.3517 5.4302 11.7676 5.4302 12.107 5.62443L17.3197 8.63389C17.5629 8.77318 17.5629 9.12434 17.3197 9.26364L12.107 12.2732C11.7696 12.4674 11.3537 12.4674 11.0143 12.2732Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.9249 48.6875L14.0204 41.8131L11.4896 37.4323C9.8671 34.6209 9.84747 31.582 11.4307 30.5972C11.4503 30.5834 11.4699 30.5717 11.4896 30.5599C11.5131 30.5462 11.5366 30.5344 11.5602 30.5227C12.3724 30.093 13.4181 30.2499 14.4657 30.8542C15.5447 31.4761 16.6218 32.5728 17.4438 33.9971L25.9249 48.6875Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.5549 44.2829L25.9253 48.6873L17.4442 33.9969C16.6221 32.5726 15.5451 31.4759 14.4661 30.854C13.4184 30.2497 12.3728 30.0928 11.5605 30.5225L19.0843 26.1789L19.1726 26.1278C19.9867 25.6864 21.0422 25.8414 22.0957 26.4496C23.1728 27.0715 24.2498 28.1682 25.0738 29.5925L33.5549 44.2829Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.3595 45.3229L29.9629 43.9084C30.6868 43.514 30.9497 42.6057 30.5475 41.8857C30.1512 41.1794 29.2625 40.9224 28.5503 41.3089L25.9469 42.7234C25.223 43.1177 24.9601 44.0261 25.3623 44.7461C25.7586 45.4524 26.6473 45.7093 27.3595 45.3229Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.6797 33.7888L25.8971 39.3624" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.519 34.042L24.3164 36.6237" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.5189 34.7894C25.9318 34.7894 26.2664 34.4547 26.2664 34.0419C26.2664 33.6291 25.9318 33.2944 25.5189 33.2944C25.1061 33.2944 24.7715 33.6291 24.7715 34.0419C24.7715 34.4547 25.1061 34.7894 25.5189 34.7894Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.7175 39.1136C15.5214 39.5059 15.2428 39.8081 14.8896 39.9945C14.5993 40.1495 14.256 40.2279 13.8695 40.2122C11.9822 40.1396 9.73781 37.9012 8.85693 35.2134L3.07728 17.5606C2.39652 15.485 2.73003 13.7468 3.78551 13.0974L3.85613 13.0562H3.8581L3.87184 13.0483C4.16612 12.8894 4.50944 12.811 4.89985 12.8267C4.91751 12.8267 4.93714 12.8286 4.95479 12.8306C5.05485 12.8365 5.15489 12.8483 5.2569 12.866C6.1005 13.0131 6.99119 13.5545 7.78378 14.3471C8.69015 15.2496 9.47099 16.4816 9.91045 17.8255L15.692 35.4802C16.1747 36.9496 16.1472 38.2503 15.7175 39.1136Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.8664 38.8565C16.8664 38.8565 16.8645 38.8585 16.8625 38.8605H16.8605C16.8488 38.8683 16.835 38.8761 16.8193 38.8839L14.8928 39.9963H14.8908C15.244 39.808 15.5226 39.5058 15.7187 39.1135C16.1484 38.2502 16.1759 36.9495 15.6932 35.4801L9.91165 17.8254C9.4722 16.4815 8.69136 15.2495 7.78498 14.347C6.99239 13.5544 6.10171 13.013 5.25811 12.8658C5.15609 12.8482 5.05605 12.8364 4.956 12.8305C4.93834 12.8285 4.91872 12.8266 4.90106 12.8266C4.51065 12.8109 4.16733 12.8893 3.87305 13.0482L5.74074 11.9692H5.7427C6.04287 11.8005 6.39795 11.7161 6.80209 11.7318C7.74574 11.7691 8.77769 12.3459 9.68603 13.2523C10.5924 14.1547 11.3732 15.3868 11.8127 16.7306L17.5943 34.3855C18.279 36.4729 17.9376 38.217 16.8664 38.8565Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5988 38.4974V38.5151C12.5949 39.4293 12.281 40.0787 11.7729 40.3985L11.6846 40.4494C11.149 40.7339 10.4211 40.681 9.62068 40.216C7.97468 39.2665 6.64062 36.9554 6.64062 35.0543C6.64062 34.1362 6.95058 33.4829 7.4587 33.1592L7.56662 33.0964C8.09828 32.8198 8.81436 32.8747 9.60499 33.3259C9.61088 33.3279 9.61479 33.3318 9.62068 33.3338C11.2667 34.2833 12.6008 36.5944 12.6008 38.4954L12.5988 38.4974Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.7547 37.2322V37.2538C14.7547 38.1739 14.4408 38.8312 13.9307 39.1529L13.8365 39.2059L11.7727 40.3987C12.2808 40.0789 12.5947 39.4295 12.5986 38.5153V38.4977C12.5986 36.5966 11.2645 34.2856 9.61851 33.336C9.61263 33.3321 9.60871 33.3301 9.60283 33.3282C8.8122 32.8769 8.09612 32.822 7.56445 33.0986L9.61265 31.9156L9.7225 31.8528C10.2561 31.5743 10.98 31.6311 11.7746 32.0902C11.7903 32.1 11.8079 32.1098 11.8236 32.1196C13.4402 33.0829 14.7449 35.3528 14.7547 37.2303V37.2322Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.98174 35.294C9.98174 35.5255 9.81889 35.6177 9.62074 35.502C9.42259 35.3862 9.25977 35.1057 9.25977 34.8762C9.25977 34.6466 9.42259 34.5525 9.62074 34.6682C9.81889 34.784 9.98174 35.0645 9.98174 35.294Z" fill="#272727"/>
<path d="M8.52948 34.9407C8.70212 35.1566 8.76096 35.445 8.66091 35.5882C8.56085 35.7314 8.33918 35.6706 8.16654 35.4568C7.9939 35.241 7.93503 34.9525 8.03509 34.8093C8.13514 34.6681 8.35683 34.7269 8.52948 34.9407Z" fill="#272727"/>
<path d="M8.16849 36.4259C8.34114 36.4102 8.56281 36.6064 8.66286 36.8634C8.76291 37.1204 8.70407 37.3421 8.53143 37.3578C8.35879 37.3735 8.13709 37.1773 8.03704 36.9203C7.93698 36.6633 7.99585 36.4416 8.16849 36.4259Z" fill="#272727"/>
<path d="M9.25977 38.262C9.25977 38.0305 9.42259 37.9383 9.62074 38.0541C9.81889 38.1698 9.98174 38.4503 9.98174 38.6799C9.98174 38.9114 9.81889 39.0036 9.62074 38.8879C9.42063 38.7721 9.25977 38.4916 9.25977 38.262Z" fill="#272727"/>
<path d="M10.7076 38.6133C10.5349 38.3975 10.476 38.1092 10.5761 37.9659C10.6762 37.8227 10.8978 37.8835 11.0705 38.0974C11.2431 38.3132 11.302 38.6015 11.2019 38.7448C11.1019 38.888 10.8802 38.8272 10.7076 38.6133Z" fill="#272727"/>
<path d="M11.0685 37.13C10.8959 37.1457 10.6742 36.9495 10.5741 36.6925C10.4741 36.4355 10.533 36.2138 10.7056 36.1981C10.8782 36.1825 11.0999 36.3786 11.2 36.6356C11.3 36.8926 11.2412 37.1143 11.0685 37.13Z" fill="#272727"/>
<path d="M6.82144 21.1192V21.1369C6.81752 22.0511 6.50363 22.7005 5.99551 23.0203L5.90723 23.0712C5.37165 23.3557 4.64379 23.3027 3.84336 22.8378C2.19736 21.8882 0.863281 19.5772 0.863281 17.6761C0.863281 16.758 1.17326 16.1047 1.68138 15.781L1.7893 15.7182C2.32096 15.4416 3.03704 15.4966 3.82767 15.9478C3.83356 15.9498 3.83747 15.9537 3.84336 15.9557C5.48936 16.9052 6.82341 19.2162 6.82341 21.1172L6.82144 21.1192Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.97732 19.8538V19.8755C8.97732 20.7956 8.66341 21.4527 8.15333 21.7745L8.05916 21.8275L5.99529 23.0203C6.50341 22.7005 6.8173 22.0511 6.82122 21.1369V21.1193C6.82122 19.2182 5.48717 16.9071 3.84117 15.9576C3.83528 15.9537 3.83137 15.9517 3.82548 15.9497C3.03485 15.4985 2.31877 15.4436 1.78711 15.7202L3.83528 14.5372L3.94515 14.4744C4.47878 14.1958 5.2027 14.2527 5.99725 14.7118C6.01294 14.7216 6.0306 14.7314 6.0463 14.7412C7.66287 15.7045 8.96752 17.9744 8.97732 19.8519V19.8538Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.20437 17.9156C4.20437 18.1471 4.04154 18.2393 3.8434 18.1236C3.64329 18.0078 3.48242 17.7273 3.48242 17.4978C3.48242 17.2682 3.64525 17.174 3.8434 17.2898C4.04154 17.4055 4.20437 17.6861 4.20437 17.9156Z" fill="#272727"/>
<path d="M2.75212 17.5625C2.92476 17.7783 2.98362 18.0667 2.88357 18.2099C2.78351 18.3531 2.56182 18.2923 2.38918 18.0785C2.21653 17.8627 2.15769 17.5742 2.25775 17.431C2.3578 17.2878 2.57947 17.3487 2.75212 17.5625Z" fill="#272727"/>
<path d="M2.39115 19.0475C2.56379 19.0318 2.78549 19.228 2.88554 19.485C2.9856 19.742 2.92673 19.9637 2.75409 19.9794C2.58144 19.9951 2.35975 19.7989 2.2597 19.5419C2.15964 19.2849 2.2185 19.0632 2.39115 19.0475Z" fill="#272727"/>
<path d="M3.48242 20.8819C3.48242 20.6504 3.64525 20.5582 3.8434 20.6739C4.04154 20.7897 4.20437 21.0702 4.20437 21.2998C4.20437 21.5293 4.04154 21.6235 3.8434 21.5077C3.64525 21.392 3.48242 21.1114 3.48242 20.8819Z" fill="#272727"/>
<path d="M4.93021 21.2351C4.75757 21.0193 4.6987 20.731 4.79876 20.5878C4.89881 20.4446 5.12051 20.5054 5.29315 20.7192C5.46579 20.933 5.52463 21.2234 5.42458 21.3666C5.32452 21.5078 5.10285 21.449 4.93021 21.2351Z" fill="#272727"/>
<path d="M5.2912 19.7519C5.11855 19.7675 4.89686 19.5714 4.7968 19.3144C4.69675 19.0574 4.75561 18.8357 4.92826 18.82C5.1009 18.8043 5.32259 19.0005 5.42265 19.2575C5.5227 19.5145 5.46384 19.7362 5.2912 19.7519Z" fill="#272727"/>
<path d="M14.0112 16.2692C14.0112 16.2692 14.1937 16.4066 14.2349 16.4262L18.445 18.8569C18.2214 18.6077 18.0997 18.2114 18.0997 17.7327C18.0997 17.3698 18.1704 16.9637 18.3155 16.5419C18.7256 15.3589 19.5986 14.4859 20.3304 14.4859C20.3578 14.4859 20.3873 14.4859 20.4147 14.4898L16.3792 12.1592C16.3792 12.1592 16.1065 12.0532 15.9574 12.0257C15.2178 11.8825 14.2721 12.7654 13.8445 13.9994C13.5109 14.9666 13.5953 15.8611 14.0073 16.2692H14.0112Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.0996 17.7347C18.0996 18.2134 18.2212 18.6117 18.4449 18.8589L18.8844 19.1139L41.9558 32.433L44.3414 28.3013L21.0071 14.8311L20.4185 14.4917H20.4146C20.3871 14.4878 20.3577 14.4878 20.3302 14.4878C19.5965 14.4878 18.7235 15.3609 18.3154 16.5439C18.1702 16.9657 18.0996 17.3718 18.0996 17.7347Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M46.6662 27.9677C46.1816 27.7343 45.5421 27.7911 44.8358 28.1953C44.8299 28.1992 44.826 28.1992 44.8201 28.2051C43.3114 29.0742 42.0912 31.1871 42.0912 32.9273V32.943C42.097 33.7709 42.3796 34.3653 42.8367 34.6615L38.8011 32.3309C38.5833 32.2053 38.4284 31.9973 38.3695 31.7521C38.3146 31.5265 38.2852 31.2774 38.2832 31.0047V30.987C38.2832 29.1016 39.6055 26.8121 41.2377 25.8704C41.2436 25.8645 41.2476 25.8646 41.2554 25.8607C41.5026 25.7194 41.7439 25.6174 41.9754 25.5527C42.203 25.4899 42.4462 25.5311 42.6522 25.6488L46.6643 27.9677H46.6662Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M47.5477 29.7764C47.5477 31.5166 46.3235 33.6295 44.8188 34.4986C44.0831 34.9224 43.418 34.9773 42.9276 34.7105L42.8373 34.6595C42.3802 34.3633 42.0977 33.7688 42.0918 32.9409V32.9253C42.0918 31.1851 43.3101 29.0721 44.8207 28.203C44.8266 28.1971 44.8305 28.1972 44.8364 28.1933C45.5427 27.7891 46.1823 27.7322 46.6669 27.9657C46.6786 27.9696 46.6884 27.9755 46.7002 27.9814L46.7963 28.0422C47.2633 28.3365 47.5477 28.9368 47.5477 29.7764Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M44.3418 32.3195C44.3418 32.5765 44.4066 32.7904 44.5282 32.9258L44.7656 33.0631L53.076 37.8638L54.361 35.639L45.9093 30.756L45.5935 30.5735C45.5797 30.5735 45.5621 30.5735 45.5483 30.5735C45.154 30.5735 44.6832 31.0444 44.4635 31.68C44.385 31.9076 44.3477 32.1253 44.3477 32.3215L44.3418 32.3195Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M55.6099 35.4586C55.349 35.3331 55.0037 35.3645 54.6231 35.5803C54.6192 35.5803 54.6192 35.5803 54.6153 35.5842C53.8031 36.0531 53.1459 37.191 53.1459 38.1268V38.1346C53.1498 38.58 53.3009 38.8997 53.5481 39.0606L51.3763 37.807C51.2585 37.7403 51.1761 37.6265 51.1428 37.495C51.1134 37.3734 51.0977 37.24 51.0957 37.0929V37.0831C51.0957 36.0688 51.8079 34.8348 52.6868 34.3287C52.6907 34.3247 52.6907 34.3247 52.6966 34.3247C52.83 34.2482 52.9595 34.1932 53.0831 34.1599C53.2067 34.1265 53.3362 34.1481 53.448 34.2109L55.608 35.4586H55.6099Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M56.0853 36.4338C56.0853 37.3715 55.4262 38.5075 54.6159 38.9763C54.2196 39.2039 53.8625 39.2334 53.5977 39.0901L53.5486 39.0626C53.3014 38.9018 53.1504 38.582 53.1465 38.1366V38.1288C53.1465 37.191 53.8017 36.0551 54.6159 35.5862C54.6198 35.5823 54.6198 35.5823 54.6238 35.5823C55.0044 35.3645 55.3477 35.3351 55.6105 35.4607C55.6164 35.4607 55.6223 35.4646 55.6282 35.4686L55.6812 35.5019C55.9323 35.6608 56.0853 35.9825 56.0853 36.4357V36.4338Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1986 7.1059C14.1986 7.24127 14.1731 7.37473 14.1241 7.50814C13.9966 7.84362 13.7062 8.16339 13.255 8.42431C11.9955 9.15216 9.95121 9.15216 8.68974 8.42431C8.23655 8.16339 7.9462 7.84362 7.82065 7.50814C7.76964 7.3767 7.74609 7.24127 7.74609 7.1059C7.74609 6.62917 8.05998 6.15249 8.6917 5.78759C9.95121 5.05974 11.9955 5.05974 13.2569 5.78759C13.8867 6.15249 14.2026 6.62917 14.2026 7.1059H14.1986Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M12.764 2.46211C12.764 1.47137 11.9616 0.668945 10.9709 0.668945C9.98014 0.668945 9.17773 1.47137 9.17773 2.46211V7.10581C9.17773 7.15682 9.19148 7.20783 9.21895 7.25688C9.28958 7.38244 9.45044 7.50412 9.70156 7.60222C10.4019 7.87492 11.5359 7.87492 12.2363 7.60222C12.4874 7.50412 12.6483 7.3844 12.7189 7.25688C12.7464 7.20783 12.7601 7.15682 12.7601 7.10581V2.46211H12.764Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.9707 2.48169V7.8062" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ c(h, {
                                      className: `framer-1p7ti5y`,
                                      "data-framer-name": `Group 55337`,
                                      fill: `rgba(0,0,0,1)`,
                                      intrinsicHeight: 81,
                                      intrinsicWidth: 24,
                                      svg: `<svg width="24" height="81" viewBox="0 0 24 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M23.2286 73.8795C23.2478 72.4217 22.3076 70.8438 20.1774 69.5588C18.0503 68.2792 15.2184 67.5922 12.351 67.5388C9.48353 67.4854 6.63474 68.0667 4.47451 69.2668L23.2286 73.8795ZM23.2286 73.8795C23.2094 75.3361 22.2296 76.8763 20.0706 78.0812M23.2286 73.8795L20.0706 78.0812M20.0706 78.0812C17.9141 79.2811 15.0655 79.8625 12.1969 79.8091C9.32862 79.7557 6.49487 79.0686 4.36779 77.7891C2.23793 76.5042 1.29748 74.9246 1.3167 73.4657C1.33589 72.0082 2.31575 70.4681 4.47422 69.2669L20.0706 78.0812Z" fill="#94C518" stroke="#73B200"/>
</g>
<path d="M17.8821 70.5555C20.9325 72.3957 20.8967 75.2814 17.7962 77.0071C14.6957 78.7328 9.71199 78.6397 6.65446 76.7994C3.60409 74.9592 3.63989 72.0735 6.74039 70.3478C9.84088 68.6222 14.8246 68.7152 17.8821 70.5555Z" fill="#73B200"/>
<path d="M7.97266 73.6778H16.5652V0.912842H7.97266V73.6778Z" fill="url(#paint0_linear_4345_5885)"/>
<defs>
<linearGradient id="paint0_linear_4345_5885" x1="11.591" y1="73.7283" x2="12.947" y2="0.83494" gradientUnits="userSpaceOnUse">
<stop stop-color="#73B200"/>
<stop offset="0.2852" stop-color="#73B200" stop-opacity="0.28"/>
<stop offset="0.4875" stop-color="#94C518" stop-opacity="0.2"/>
<stop offset="1" stop-color="#D9F68E" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ c(h, {
                                      className: `framer-18n8qcb`,
                                      "data-framer-name": `Group`,
                                      fill: `rgba(0,0,0,1)`,
                                      intrinsicHeight: 87,
                                      intrinsicWidth: 95,
                                      svg: `<svg width="95" height="87" viewBox="0 0 95 87" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M84.6229 55.9577C84.6229 56.3325 84.7359 56.6438 84.9591 56.8174L85.1189 56.9083L88.4451 58.8291C88.1778 58.6693 88.0483 58.3385 88.0483 57.9307C88.0483 57.5228 88.1833 57.0241 88.4589 56.5501L90.9473 52.2402L89.5033 51.408L88.4589 50.8045C88.2605 50.6888 88.1337 50.4793 88.0785 50.2147C88.0124 49.9006 88.051 49.5093 88.1916 49.1042L86.8165 51.4907H86.8137L85.0335 54.577C84.7607 55.051 84.6229 55.5443 84.6229 55.9577Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M74.7915 57.6139C74.786 58.0411 74.9238 58.3883 75.2021 58.5508L78.6578 60.546C78.6743 60.5543 78.6908 60.5625 78.7073 60.5708L78.6274 60.524C78.3518 60.3641 78.2168 60.0279 78.2168 59.6118V59.5622C78.2168 59.1488 78.3518 58.6557 78.6274 58.1789L79.5919 56.5061L82.0831 52.1935C82.3504 51.725 82.7031 51.364 83.0586 51.1573C82.9153 50.8073 82.8381 50.3803 82.8381 49.8898C82.8381 49.8925 82.8354 49.8925 82.8354 49.8925C82.1685 50.2755 81.5457 50.416 81.0222 50.3361C81.1159 49.7657 80.9891 49.278 80.6418 49.0768C80.5316 49.0134 80.4103 48.9832 80.2781 48.9832C80.0769 48.9832 79.8537 49.0548 79.6333 49.1843C79.2806 49.3937 78.9278 49.7575 78.6578 50.2232L75.2021 56.2058C74.9238 56.6908 74.786 57.1951 74.7915 57.6139Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M78.2192 59.5624C78.2302 59.16 78.3653 58.6889 78.6298 58.2342L79.6191 56.5202L79.5943 56.5063L78.6298 58.1791C78.3543 58.6559 78.2192 59.149 78.2192 59.5624Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M84.9547 56.8176C84.9769 56.8342 85.0018 56.8536 85.0294 56.8675C85.0571 56.8841 85.0848 56.8979 85.1152 56.909L84.9547 56.8176Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M78.2192 59.5621C78.2302 59.1598 78.3653 58.6886 78.6298 58.2339L79.6191 56.52L79.5943 56.5061L78.6298 58.1789C78.3543 58.6556 78.2192 59.1488 78.2192 59.5621Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M78.2184 59.5621V59.6117C78.2184 60.0278 78.3534 60.3641 78.629 60.5239L78.7089 60.5707L82.0846 62.5191C82.6303 62.8332 83.5176 62.3234 84.066 61.3727C84.3388 60.8987 84.4766 60.4053 84.4766 59.992C84.4766 59.5786 84.3388 59.2424 84.066 59.0854L81.5776 57.647L84.066 53.3398C84.2644 52.9926 84.3912 52.6371 84.4463 52.3091C84.54 51.7387 84.4132 51.251 84.066 51.0498C83.9557 50.9865 83.8318 50.9561 83.6995 50.9561C83.4983 50.9561 83.2779 51.0277 83.0602 51.1572C82.7047 51.3639 82.3519 51.725 82.0846 52.1934L79.5935 56.5061L79.6183 56.5199L78.629 58.2339C78.3644 58.6886 78.2294 59.1597 78.2184 59.5621Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M88.0465 57.9308C88.0465 58.3387 88.176 58.6694 88.4433 58.8293L88.4708 58.8458C89.0165 59.1462 89.8956 58.6336 90.4384 57.6939L93.8941 51.7084C94.1697 51.2317 94.3047 50.7386 94.3047 50.3252V50.2756C94.3047 49.8595 94.1697 49.5232 93.8941 49.3661L90.4384 47.3711C90.4384 47.3711 90.4219 47.3628 90.4136 47.36L89.5952 46.886C89.5924 46.9025 89.5897 46.9219 89.5841 46.9385C89.5511 47.1121 89.5125 47.2828 89.4629 47.4592C89.4381 47.5501 89.4133 47.6355 89.383 47.7237C89.1074 48.6028 88.6472 49.4708 88.0768 50.2149C88.1319 50.4794 88.2587 50.6889 88.4571 50.8046L89.5015 51.4081L90.9455 52.2403L88.4571 56.5503C88.1815 57.0243 88.0465 57.5175 88.0465 57.9308Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M78.1714 47.6962V47.721C78.1742 48.0765 78.2127 48.4016 78.2844 48.6937C78.3615 49.0106 78.5627 49.2834 78.8465 49.446L79.1221 49.6032L82.5365 51.579L84.0989 52.4801C83.6718 52.2018 83.3604 51.725 83.2171 51.0747C83.162 50.8211 83.1317 50.5428 83.1289 50.2424V50.2232C83.1289 47.958 84.7162 45.2078 86.681 44.0752C86.6892 44.067 86.692 44.0669 86.7003 44.0614C87.6207 43.5378 88.4529 43.4634 89.084 43.7666L84.0631 40.8676L83.8591 40.7492C83.5946 40.5948 83.2749 40.5396 82.9801 40.6223C82.6797 40.7077 82.3656 40.8401 82.0432 41.0247C82.0322 41.0275 82.0266 41.0274 82.0211 41.0356C81.379 41.4049 80.7755 41.934 80.2437 42.5623C79.0119 44.0145 78.1714 45.985 78.1714 47.6962Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M90.2344 46.1255C90.2344 48.3907 88.6388 51.1409 86.6822 52.2735C85.7233 52.8246 84.858 52.8963 84.2187 52.5491L84.1002 52.4829C83.505 52.0971 83.1385 51.3228 83.1302 50.2453V50.226C83.1302 47.9608 84.7174 45.2106 86.6822 44.078C86.6905 44.0697 86.6933 44.0697 86.7016 44.067C87.622 43.5434 88.4542 43.4663 89.0853 43.7721C89.1018 43.7749 89.1128 43.7831 89.1293 43.7914L89.2561 43.8713C89.8651 44.2544 90.2344 45.0342 90.2344 46.1282V46.1255Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M86.1754 48.4678C86.1754 48.8425 86.4013 49.0134 86.6824 48.8508C86.9635 48.6883 87.1895 48.2556 87.1895 47.8808C87.1895 47.5061 86.9635 47.3352 86.6824 47.4978C86.4013 47.6603 86.1754 48.093 86.1754 48.4678Z" fill="#272727"/>
<path d="M0.708716 62.8717C0.708716 63.4035 0.970537 63.9353 1.49687 64.2385L24.0853 77.2784C25.5486 78.1244 27.3535 78.1244 28.8168 77.2784L51.4053 64.2385C51.9316 63.9353 52.1934 63.4034 52.1934 62.8743C52.1934 62.3397 51.9316 61.8107 51.4053 61.5075L28.8168 48.465C27.3535 47.6217 25.5486 47.6217 24.0853 48.465L1.49687 61.5075C0.970537 61.8107 0.708716 62.3398 0.708716 62.8717Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M82.6278 29.2222V43.9402C83.1597 43.3119 83.7632 42.7828 84.4053 42.4136C84.4108 42.4053 84.4163 42.4054 84.4273 42.4027C84.7497 42.218 85.0639 42.0856 85.3643 42.0002C85.6592 41.9175 85.9788 41.9728 86.2433 42.1271L86.4473 42.2455V29.2222H82.6278Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.2095 26.4112C34.3448 27.0671 36.1856 27.0671 37.3182 26.4112L56.9415 15.0606C58.0768 14.4047 58.0768 13.3438 56.9415 12.6879C55.8061 12.0321 53.9653 12.0321 52.8327 12.6879L33.2095 24.0386C32.0741 24.6945 32.0741 25.7554 33.2095 26.4112Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.708716 62.8743V71.5107C0.708716 72.0398 0.973292 72.5716 1.49687 72.8747L24.0853 85.9174C25.5486 86.7607 27.3535 86.7607 28.8168 85.9174L51.4053 72.8747C51.6698 72.7231 51.8654 72.5137 51.9977 72.2767C52.1272 72.0397 52.1934 71.7752 52.1934 71.5107V62.8743C52.1934 63.4034 51.9316 63.9353 51.4053 64.2384L28.8168 77.2783C27.3535 78.1243 25.5486 78.1243 24.0853 77.2783L1.49687 64.2384C0.970537 63.9353 0.708716 63.4034 0.708716 62.8743Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M44.8652 62.8718C44.8652 62.6569 44.8046 62.442 44.6834 62.2573L44.8652 62.8718Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.03299 62.8718L8.21484 62.2573C8.09359 62.442 8.03299 62.6569 8.03299 62.8718Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.3051 51.8488C11.3051 52.1602 11.4594 52.4744 11.7681 52.6535L18.1861 56.3571L25.0588 60.3253C25.9186 60.8213 26.9823 60.8213 27.8421 60.3253L34.7147 56.3571L41.1328 52.6535C41.4414 52.4744 41.5957 52.1602 41.5957 51.8488C41.5957 51.5375 41.4414 51.2233 41.1328 51.0442L27.8421 43.3723C26.9823 42.8762 25.9186 42.8762 25.0588 43.3723L11.7681 51.0442C11.4594 51.2233 11.3051 51.5347 11.3051 51.8488Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M44.1594 71.2631V74.3302L47.6288 72.3268C48.3618 71.9024 48.957 70.8745 48.957 70.0257C48.957 69.6014 48.8082 69.3037 48.5685 69.1659C48.3288 69.0281 47.9953 69.0475 47.6288 69.2597L44.1594 71.2631Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.0477 76.9038C37.0477 77.3281 37.1965 77.6258 37.4362 77.7636C37.676 77.9014 38.0095 77.8821 38.376 77.6699L44.1602 74.33V71.2629L38.376 74.6027C37.6429 75.0271 37.0477 76.055 37.0477 76.9038Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.7715 78.2265L13.5491 74.6357" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.7715 80.3263L16.5142 78.4441" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.38281 70.72C4.38281 71.0947 4.15682 71.2656 3.87574 71.103C3.59466 70.9405 3.36874 70.5078 3.36874 70.133C3.36874 69.7583 3.59466 69.5874 3.87574 69.75C4.15682 69.9125 4.38281 70.3452 4.38281 70.72Z" fill="#272727"/>
<path d="M6.56641 71.9792C6.56641 72.354 6.34048 72.5249 6.0594 72.3623C5.77832 72.1997 5.55233 71.7671 5.55233 71.3923C5.55233 71.0175 5.77832 70.8466 6.0594 71.0092C6.34048 71.1718 6.56641 71.6045 6.56641 71.9792Z" fill="#272727"/>
<path d="M8.03266 62.8719C8.03266 63.2522 8.22006 63.6324 8.59483 63.8501L24.7569 73.1782C25.8041 73.7844 27.0938 73.7844 28.1409 73.1782L44.3031 63.8501C44.6779 63.6324 44.8652 63.2522 44.8652 62.8719L44.6834 62.2574L41.5943 51.8491C41.5943 52.1605 41.44 52.4746 41.1313 52.6538L34.7133 56.3574L27.8406 60.3256C26.9808 60.8216 25.9171 60.8216 25.0573 60.3256L18.1847 56.3574L11.7666 52.6538C11.458 52.4746 11.3037 52.1605 11.3037 51.8491L8.21451 62.2574L8.03266 62.8719Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.1047 47.2828C21.2401 47.5005 22.6923 46.1447 23.3482 44.2516L31.8082 19.8333C32.464 17.9401 32.0755 16.2289 30.9401 16.0112C29.8048 15.7935 28.3525 17.1493 27.6967 19.0425L19.2367 43.4607C18.5808 45.3538 18.9694 47.0651 20.1047 47.2828Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.1659 21.1341C29.7281 21.2415 30.4473 20.5719 30.7697 19.635C31.0949 18.698 30.902 17.8519 30.3398 17.7445C29.7777 17.637 29.0585 18.3068 28.7361 19.2437C28.4109 20.1806 28.6037 21.0266 29.1659 21.1341Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.705 45.5524C21.2671 45.6599 21.9864 44.9902 22.3088 44.0533C22.634 43.1164 22.441 42.2704 21.8789 42.1629C21.3167 42.0555 20.5975 42.7251 20.275 43.662C19.9499 44.599 20.1428 45.4449 20.705 45.5524Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.9068 42.835L25.6818 41.2312C26.1558 40.9584 26.74 40.9584 27.2168 41.2312L29.9917 42.835H34.7949V51.8488C34.7949 52.0197 34.7094 52.1933 34.5386 52.2925L27.2168 56.5198C26.7428 56.7926 26.1586 56.7926 25.6818 56.5198L18.3599 52.2925C18.1891 52.1933 18.1037 52.0225 18.1037 51.8488V42.835H22.9068Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.2168 47.506L34.5386 43.2788C34.8803 43.0831 34.8803 42.5899 34.5386 42.3942L27.2168 38.167C26.7428 37.8942 26.1586 37.8942 25.6819 38.167L18.36 42.3942C18.0183 42.5899 18.0183 43.0831 18.36 43.2788L25.6819 47.506C26.1559 47.7788 26.7401 47.7788 27.2168 47.506Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.7719 42.8956L26.5527 40.7104" stroke="#272727" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M28.3418 41.7412L24.5582 43.9265" stroke="#272727" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M26.3461 44.9569L30.127 42.7717" stroke="#272727" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M31.9381 17.1877L34.7131 15.5838C35.1871 15.3109 35.7713 15.3109 36.248 15.5838L39.0229 17.1877H43.8262V26.2015C43.8262 26.3724 43.7407 26.5459 43.5698 26.6452L36.248 30.8723C35.774 31.1452 35.1898 31.1452 34.7131 30.8723L27.3912 26.6452C27.2203 26.5459 27.1349 26.3751 27.1349 26.2015V17.1877H31.9381Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.2481 21.8586L43.5699 17.6314C43.9116 17.4358 43.9116 16.9425 43.5699 16.7469L36.2481 12.5196C35.7741 12.2467 35.1899 12.2467 34.7131 12.5196L27.3912 16.7469C27.0495 16.9425 27.0495 17.4358 27.3912 17.6314L34.7131 21.8586C35.1871 22.1314 35.7713 22.1314 36.2481 21.8586Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M51.3443 5.54763L54.1193 3.94387C54.5933 3.67105 55.1775 3.67105 55.6543 3.94387L58.4293 5.54763H63.2324V14.5615C63.2324 14.7323 63.147 14.9059 62.9762 15.0051L55.6543 19.2325C55.1803 19.5053 54.5961 19.5053 54.1193 19.2325L46.7974 15.0051C46.6266 14.9059 46.5412 14.7351 46.5412 14.5615V5.54763H51.3443Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M55.6542 10.2187L62.9761 5.99142C63.3178 5.79576 63.3178 5.3025 62.9761 5.10685L55.6542 0.879659C55.1803 0.606845 54.596 0.606845 54.1193 0.879659L46.7974 5.10685C46.4557 5.3025 46.4557 5.79576 46.7974 5.99142L54.1193 10.2187C54.5933 10.4916 55.1775 10.4916 55.6542 10.2187Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30.0676 53.0424C31.203 53.2601 32.6552 51.9043 33.3111 50.0111L41.7711 25.5929C42.4269 23.6998 42.0384 21.9884 40.903 21.7707C39.7677 21.553 38.3154 22.9088 37.6596 24.802L29.1996 49.2202C28.5438 51.1133 28.9323 52.8247 30.0676 53.0424Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M39.1249 26.8909C39.6871 26.9984 40.4063 26.3286 40.7287 25.3917C41.0539 24.4547 40.861 23.6088 40.2989 23.5013C39.7367 23.3938 39.0174 24.0635 38.695 25.0004C38.3698 25.9373 38.5628 26.7834 39.1249 26.8909Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30.6659 51.3091C31.2281 51.4166 31.9473 50.747 32.2697 49.81C32.5949 48.8731 32.402 48.027 31.8399 47.9195C31.2777 47.8121 30.5585 48.4818 30.236 49.4187C29.9109 50.3557 30.1038 51.2016 30.6659 51.3091Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.2095 18.191C34.3448 18.8469 36.1856 18.8469 37.3182 18.191L56.9415 6.84034C58.0768 6.18448 58.0768 5.12358 56.9415 4.46772C55.8061 3.81187 53.9653 3.81187 52.8327 4.46772L33.2095 15.8184C32.0741 16.4743 32.0741 17.5352 33.2095 18.191Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M53.8603 6.24787C54.428 6.5758 55.3484 6.5758 55.916 6.24787C56.4837 5.91995 56.4837 5.38808 55.916 5.06015C55.3484 4.73223 54.428 4.73223 53.8603 5.06015C53.2926 5.38808 53.2926 5.91995 53.8603 6.24787Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.2373 17.5987C34.8049 17.9266 35.7253 17.9266 36.293 17.5987C36.8607 17.2708 36.8607 16.7389 36.293 16.411C35.7253 16.0831 34.8049 16.0831 34.2373 16.411C33.6696 16.7389 33.6696 17.2708 34.2373 17.5987Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M38.5318 61.0971L40.2734 60.094" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.642 63.5634L24.9002 67.1762C25.8592 67.7301 27.0441 67.7301 28.0031 67.1762L35.1211 63.0674" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9196 59.6833L15.8438 61.9485" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M57.8901 14.8124C57.8901 14.8124 58.0554 14.9364 58.094 14.9557L61.9217 17.1657C61.7178 16.9398 61.6075 16.5788 61.6075 16.1434C61.6075 15.8127 61.6709 15.4434 61.8032 15.0604C62.1752 13.9856 62.9688 13.1921 63.6357 13.1921C63.6605 13.1921 63.6881 13.192 63.7129 13.1947L60.045 11.0756C60.045 11.0756 59.7971 10.9792 59.662 10.9544C58.9896 10.8249 58.1299 11.6267 57.7413 12.7483C57.4382 13.6274 57.5153 14.4403 57.8901 14.8124Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M61.6068 16.1435C61.6068 16.5789 61.7171 16.9399 61.921 17.1658L62.3206 17.3973L83.2942 29.5058L85.4629 25.7498L64.2496 13.5035L63.715 13.1948H63.7122C63.6874 13.1921 63.6599 13.1921 63.6351 13.1921C62.9682 13.1921 62.1746 13.9857 61.8025 15.0604C61.6703 15.4435 61.6068 15.8128 61.6068 16.1435Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M87.5773 25.4466C87.1364 25.2344 86.555 25.2868 85.9129 25.6533C85.9074 25.6533 85.9047 25.6533 85.8991 25.6616C84.5268 26.4525 83.419 28.3731 83.419 29.9549V29.9687C83.4245 30.721 83.6808 31.2611 84.0969 31.5312L80.4291 29.4121C80.2307 29.2991 80.0901 29.1089 80.0378 28.8857C79.9882 28.6818 79.9606 28.4531 79.9606 28.2051V28.1886C79.9606 26.4745 81.1621 24.3939 82.6474 23.5368C82.6529 23.5313 82.6557 23.5314 82.664 23.5286C82.8899 23.3991 83.1076 23.3082 83.317 23.2476C83.5265 23.1869 83.7469 23.2282 83.9315 23.3357L87.5801 25.4439L87.5773 25.4466Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M88.3789 27.0918C88.3789 28.6736 87.2656 30.5942 85.8988 31.3851C85.2291 31.7709 84.6257 31.8206 84.1792 31.5781L84.0965 31.5312C83.6804 31.2612 83.4242 30.7211 83.4187 29.9688V29.9549C83.4187 28.3731 84.5264 26.4525 85.8988 25.6617C85.9043 25.6561 85.9071 25.6561 85.9126 25.6533C86.5547 25.2868 87.136 25.2344 87.577 25.4466C87.588 25.4466 87.5963 25.4548 87.6073 25.4604L87.6955 25.5155C88.1199 25.7828 88.3789 26.3285 88.3789 27.0918Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M84.5391 34.5017V38.9302" stroke="#272727" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>
`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ c(h, {
                                      className: `framer-uhk8sc`,
                                      "data-framer-name": `Group`,
                                      fill: `rgba(0,0,0,1)`,
                                      intrinsicHeight: 53,
                                      intrinsicWidth: 38,
                                      svg: `<svg width="38" height="53" viewBox="0 0 38 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9231 34.5139L17.1529 30.9154C18.2176 30.3013 19.5318 30.3013 20.5965 30.9154L26.8263 34.5139H37.6074V41.4009C37.6074 41.7883 37.4152 42.1728 37.0335 42.3938L20.5965 51.8836C19.5318 52.4977 18.2176 52.4977 17.1529 51.8836L0.715888 42.3938C0.334232 42.1728 0.141969 41.7854 0.141969 41.4009V34.5139H10.9231Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5977 44.9992L37.0347 35.5095C37.8009 35.0676 37.8009 33.9627 37.0347 33.5208L20.5977 24.0311C19.5331 23.417 18.2188 23.417 17.1542 24.0311L0.717119 33.5208C-0.0490628 33.9627 -0.0490628 35.0676 0.717119 35.5095L17.1542 44.9992C18.2188 45.6133 19.5331 45.6133 20.5977 44.9992Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.69531 43.6481L2.58881 40.1243" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.4844 46.4109L11.4871 45.2603" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.8835 40.9072C33.8835 41.2974 34.1187 41.4752 34.4114 41.3059C34.7041 41.1366 34.9395 40.6861 34.9395 40.2958C34.9395 39.9056 34.7041 39.7277 34.4114 39.897C34.1187 40.0664 33.8835 40.5169 33.8835 40.9072Z" fill="#272727"/>
<path d="M31.61 42.2216C31.61 42.6119 31.8453 42.7897 32.138 42.6204C32.4307 42.4511 32.666 42.0005 32.666 41.6103C32.666 41.22 32.4307 41.0422 32.138 41.2115C31.8453 41.3808 31.61 41.8313 31.61 42.2216Z" fill="#272727"/>
<path d="M29.3385 43.5331C29.3385 43.9234 29.5739 44.1013 29.8666 43.932C30.1593 43.7627 30.3945 43.3122 30.3945 42.9219C30.3945 42.5316 30.1593 42.3537 29.8666 42.523C29.5739 42.6923 29.3385 43.1428 29.3385 43.5331Z" fill="#272727"/>
<path d="M10.9231 23.0353L17.1529 19.4369C18.2176 18.8228 19.5318 18.8228 20.5965 19.4369L26.8263 23.0353H37.6074V29.9223C37.6074 30.3097 37.4152 30.6942 37.0335 30.9152L20.5965 40.405C19.5318 41.0191 18.2176 41.0191 17.1529 40.405L0.715888 30.9152C0.334232 30.6942 0.141969 30.3069 0.141969 29.9223V23.0353H10.9231Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.717119 24.0311L17.1542 33.5237C18.2188 34.1378 19.5331 34.1378 20.5977 33.5237L29.7402 28.2435L37.0347 24.0311C37.8009 23.5891 37.8009 22.4872 37.0347 22.0453L20.5977 12.5527C20.0639 12.2456 19.4699 12.0935 18.8759 12.0935C18.2819 12.0935 17.6879 12.2456 17.1542 12.5527L0.717119 22.0453C-0.0490628 22.4872 -0.0490628 23.5891 0.717119 24.0311Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.80469 29.9224L2.58937 28.6455" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.4844 34.9328L6.69494 31.0159" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.8835 29.4289C33.8835 29.8191 34.1187 29.997 34.4114 29.8277C34.7041 29.6583 34.9395 29.2078 34.9395 28.8175C34.9395 28.4273 34.7041 28.2495 34.4114 28.4188C34.1187 28.5881 33.8835 29.0386 33.8835 29.4289Z" fill="#272727"/>
<path d="M31.61 30.7433C31.61 31.1336 31.8453 31.3114 32.138 31.1421C32.4307 30.9728 32.666 30.5223 32.666 30.132C32.666 29.7417 32.4307 29.5639 32.138 29.7332C31.8453 29.9025 31.61 30.3531 31.61 30.7433Z" fill="#272727"/>
<path d="M29.3385 32.0546C29.3385 32.4449 29.5739 32.6228 29.8666 32.4535C30.1593 32.2842 30.3945 31.8337 30.3945 31.4434C30.3945 31.0531 30.1593 30.8752 29.8666 31.0445C29.5739 31.2138 29.3385 31.6643 29.3385 32.0546Z" fill="#272727"/>
<path d="M10.9231 11.5597L17.1529 7.9613C18.2176 7.34721 19.5318 7.34721 20.5965 7.9613L26.8263 11.5597H37.6074V18.4467C37.6074 18.8341 37.4152 19.2187 37.0335 19.4397L20.5965 28.9294C19.5318 29.5435 18.2176 29.5435 17.1529 28.9294L0.715888 19.4397C0.334232 19.2187 0.141969 18.8313 0.141969 18.4467V11.5597H10.9231Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5977 22.0422L37.0347 12.5525C37.8009 12.1106 37.8009 11.0057 37.0347 10.5638L20.5977 1.0741C19.5331 0.460002 18.2188 0.460002 17.1542 1.0741L0.717119 10.5638C-0.0490628 11.0057 -0.0490628 12.1106 0.717119 12.5525L17.1542 22.0422C18.2188 22.6563 19.5331 22.6563 20.5977 22.0422Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.69531 20.6937L2.58881 17.167" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.4844 23.4573L11.4871 22.3037" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.8835 17.9533C33.8835 18.3435 34.1187 18.5215 34.4114 18.3522C34.7041 18.1829 34.9395 17.7323 34.9395 17.3421C34.9395 16.9518 34.7041 16.7739 34.4114 16.9432C34.1187 17.1125 33.8835 17.563 33.8835 17.9533Z" fill="#272727"/>
<path d="M31.61 19.2648C31.61 19.6551 31.8453 19.8329 32.138 19.6636C32.4307 19.4943 32.666 19.0439 32.666 18.6536C32.666 18.2633 32.4307 18.0854 32.138 18.2547C31.8453 18.424 31.61 18.8745 31.61 19.2648Z" fill="#272727"/>
<path d="M29.3385 20.5761C29.3385 20.9664 29.5739 21.1442 29.8666 20.9749C30.1593 20.8056 30.3945 20.3551 30.3945 19.9648C30.3945 19.5746 30.1593 19.3967 29.8666 19.566C29.5739 19.7353 29.3385 20.1858 29.3385 20.5761Z" fill="#272727"/>
<path d="M11.1178 8.63804H18.4668C18.7365 8.59787 19.0121 8.59787 19.2818 8.63804H26.6309V11.5593C26.6309 11.918 26.4529 12.2767 26.0971 12.4833L20.2976 15.8321C19.4167 16.3401 18.332 16.3401 17.451 15.8321L11.6515 12.4833C11.2957 12.2767 11.1178 11.918 11.1178 11.5593V8.63804Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.2977 12.9112L26.0971 9.56236C26.8088 9.152 26.8088 8.12471 26.0971 7.71435L20.2977 4.36556C19.4167 3.85764 18.332 3.85764 17.4511 4.36556L11.6515 7.71435C10.9399 8.12471 10.9399 9.152 11.6515 9.56236L17.4511 12.9112C18.332 13.4191 19.4167 13.4191 20.2977 12.9112Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.2422 8.69297L18.7786 6.69287" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.6055 9.63731L17.1418 7.63721" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9707 10.5814L15.5043 8.5813" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                            I() &&
                              /*#__PURE__*/ c(`div`, {
                                className: `framer-1cf4gy4 hidden-kqm8v6 hidden-52mnml`,
                                "data-framer-name": `Frame 1321315557`,
                                children: /*#__PURE__*/ l(`div`, {
                                  className: `framer-1cv52zn`,
                                  "data-framer-name": `Group 1321315568`,
                                  children: [
                                    /*#__PURE__*/ c(h, {
                                      className: `framer-rcf8cs`,
                                      "data-framer-name": `Rectangle 11`,
                                      fill: `rgba(0,0,0,1)`,
                                      intrinsicHeight: 112,
                                      intrinsicWidth: 192,
                                      svg: `<svg width="192" height="112" viewBox="0 0 192 112" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M190.713 111.078L0.482834 1.24828L1.32386 0.762714L191.554 110.592L190.713 111.078Z" fill="#73B200"/>
</svg>
`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ c(h, {
                                      className: `framer-u4uiqu`,
                                      "data-framer-name": `Rectangle 8`,
                                      fill: `rgba(0,0,0,1)`,
                                      intrinsicHeight: 79,
                                      intrinsicWidth: 136,
                                      svg: `<svg width="136" height="79" viewBox="0 0 136 79" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M134.709 78.0486L0.699686 0.678293L1.54071 0.192726L135.55 77.563L134.709 78.0486Z" fill="#73B200"/>
</svg>
`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ c(h, {
                                      className: `framer-1eb53w6`,
                                      "data-framer-name": `Rectangle 9`,
                                      fill: `rgba(0,0,0,1)`,
                                      intrinsicHeight: 151,
                                      intrinsicWidth: 260,
                                      svg: `<svg width="260" height="151" viewBox="0 0 260 151" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.34961 150.37L259.339 1.41977L258.498 0.934205L0.508583 149.885L1.34961 150.37Z" fill="#73B200"/>
</svg>
`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ c(h, {
                                      className: `framer-midvqw`,
                                      "data-framer-name": `Rectangle 10`,
                                      fill: `rgba(0,0,0,1)`,
                                      intrinsicHeight: 79,
                                      intrinsicWidth: 138,
                                      svg: `<svg width="138" height="79" viewBox="0 0 138 79" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M136.51 78.9453L0.84481 0.619127L1.68584 0.13356L137.351 78.4597L136.51 78.9453Z" fill="#73B200"/>
</svg>
`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ l(`div`, {
                                      className: `framer-1newefz`,
                                      "data-framer-name": `Group 55340`,
                                      children: [
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-ynbtt4`,
                                          "data-framer-name": `Vector`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 39,
                                          intrinsicWidth: 66,
                                          svg: `<svg width="66" height="39" viewBox="-1 -1 66 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.00585938 0.518066L63.5832 36.0204" stroke="#73B200" stroke-width="2" stroke-miterlimit="10"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-onzfmq`,
                                          "data-framer-name": `Vector`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 46,
                                          intrinsicWidth: 73,
                                          svg: `<svg width="73" height="46" viewBox="-1 -1 73 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.71875 0.988037L71.006 43.1961" stroke="#73B200" stroke-width="2" stroke-miterlimit="10"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-16ifbt4`,
                                          "data-framer-name": `Group 55334`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 44,
                                          intrinsicWidth: 141,
                                          svg: `<svg width="141" height="44" viewBox="0 0 141 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.843741 35.0144L66.8175 0.203857L140.174 43.1307" stroke="#73B200" stroke-width="2" stroke-miterlimit="10"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-k2fu6c`,
                                          "data-framer-name": `Vector`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 18,
                                          intrinsicWidth: 29,
                                          svg: `<svg width="29" height="18" viewBox="-2 -2 29 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.1649 0.186768L0.0185547 14.0026" stroke="#73B200" stroke-width="4" stroke-miterlimit="10"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-jyfw4d`,
                                          "data-framer-name": `Group`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 21,
                                          intrinsicWidth: 37,
                                          svg: `<svg width="37" height="21" viewBox="0 0 37 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.976 13.2175L14.9769 13.218C15.0501 13.2605 15.0846 13.2974 15.0985 13.3165C15.0985 13.3165 15.0985 13.3166 15.0985 13.3166C15.0842 13.337 15.0479 13.3766 14.9701 13.4221C14.8087 13.5155 14.5671 13.5758 14.2987 13.5755C14.0306 13.5752 13.789 13.5143 13.6281 13.4218C13.5555 13.3793 13.5202 13.3425 13.5053 13.3225C13.5207 13.3016 13.5575 13.2629 13.6341 13.2185C13.7948 13.1259 14.0373 13.0648 14.3065 13.0645C14.576 13.0641 14.8171 13.1248 14.976 13.2175Z" fill="#73B200" stroke="#73B200"/>
<path d="M9.43697 16.4919L9.43784 16.4924C9.51104 16.5349 9.54549 16.5718 9.55943 16.5909C9.55942 16.591 9.55941 16.591 9.5594 16.591C9.5451 16.6114 9.50888 16.651 9.43106 16.6965C9.26962 16.7899 9.02804 16.8502 8.75968 16.8499C8.49156 16.8496 8.24999 16.7887 8.08908 16.6963C8.01646 16.6537 7.98117 16.6169 7.96621 16.5969C7.98159 16.576 8.01849 16.5373 8.095 16.4929C8.25571 16.4003 8.49828 16.3392 8.76741 16.3389C9.03695 16.3385 9.27804 16.3992 9.43697 16.4919Z" fill="#73B200" stroke="#73B200"/>
<path d="M2.5942 20.0761L2.59507 20.0767C2.66826 20.1192 2.70272 20.156 2.71665 20.1752C2.71664 20.1752 2.71663 20.1752 2.71662 20.1752C2.70233 20.1956 2.66611 20.2352 2.58829 20.2807C2.42684 20.3741 2.18527 20.4345 1.9169 20.4341C1.64879 20.4338 1.40721 20.373 1.24631 20.2805C1.17369 20.238 1.1384 20.2011 1.12343 20.1811C1.13882 20.1602 1.17571 20.1215 1.25222 20.0771C1.41294 19.9845 1.65551 19.9234 1.92464 19.9231C2.19418 19.9228 2.43526 19.9834 2.5942 20.0761Z" fill="#73B200" stroke="#73B200"/>
<path d="M20.1889 10.2068L20.1898 10.2073C20.263 10.2498 20.2975 10.2866 20.3114 10.3058C20.3114 10.3058 20.3114 10.3058 20.3113 10.3058C20.2971 10.3262 20.2608 10.3659 20.183 10.4114C20.0216 10.5048 19.78 10.5651 19.5116 10.5648C19.2435 10.5644 19.0019 10.5036 18.841 10.4111C18.7684 10.3686 18.7331 10.3318 18.7182 10.3118C18.7335 10.2909 18.7704 10.2521 18.847 10.2077C19.0077 10.1151 19.2502 10.054 19.5194 10.0537C19.7889 10.0534 20.03 10.114 20.1889 10.2068Z" fill="#73B200" stroke="#73B200"/>
<path d="M25.4028 7.19553L25.4037 7.19604C25.4769 7.23854 25.5113 7.27541 25.5253 7.29456C25.5252 7.29458 25.5252 7.2946 25.5252 7.29461C25.5109 7.31501 25.4747 7.35465 25.3969 7.40014C25.2354 7.49352 24.9939 7.55387 24.7255 7.55354C24.4574 7.55321 24.2158 7.49238 24.0549 7.39989C23.9823 7.35737 23.947 7.32054 23.932 7.30053C23.9474 7.27964 23.9843 7.2409 24.0608 7.19648C24.2215 7.1039 24.4641 7.04281 24.7332 7.04248C25.0028 7.04215 25.2439 7.10282 25.4028 7.19553Z" fill="#73B200" stroke="#73B200"/>
<path d="M29.273 4.19034L29.273 4.19034L29.2742 4.18965C29.435 4.09693 29.6777 4.03573 29.9471 4.0354C30.2166 4.03507 30.4577 4.09574 30.6167 4.18845L30.6175 4.18896C30.6907 4.23146 30.7252 4.26832 30.7391 4.28747C30.7391 4.28748 30.7391 4.2875 30.7391 4.28751C30.7248 4.30791 30.6886 4.34755 30.6108 4.39304C30.4493 4.48642 30.2077 4.54677 29.9394 4.54644C29.6713 4.54611 29.4297 4.48528 29.2688 4.39279C29.1953 4.34979 29.1601 4.31247 29.1455 4.29255C29.1605 4.27223 29.1969 4.23399 29.273 4.19034Z" fill="#73B200" stroke="#73B200"/>
<path d="M35.8286 1.17771L35.8294 1.17821C35.9026 1.22071 35.9371 1.25758 35.951 1.27673C35.951 1.27674 35.951 1.27676 35.951 1.27677C35.9367 1.29717 35.9005 1.33681 35.8227 1.3823C35.6612 1.47568 35.4196 1.53603 35.1513 1.5357C34.8832 1.53537 34.6416 1.47454 34.4807 1.38204C34.4081 1.33953 34.3728 1.30271 34.3578 1.28269C34.3732 1.2618 34.4101 1.22307 34.4866 1.17866C34.6473 1.08608 34.8899 1.02499 35.159 1.02466C35.4286 1.02433 35.6696 1.08499 35.8286 1.17771Z" fill="#73B200" stroke="#73B200"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-6b2jb3`,
                                          "data-framer-name": `Group`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 21,
                                          intrinsicWidth: 37,
                                          svg: `<svg width="37" height="21" viewBox="0 0 37 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8559 12.8237L14.8568 12.8242C14.93 12.8667 14.9644 12.9036 14.9784 12.9227C14.9784 12.9227 14.9784 12.9228 14.9783 12.9228C14.964 12.9432 14.9278 12.9828 14.85 13.0283C14.6886 13.1217 14.447 13.182 14.1786 13.1817C13.9105 13.1814 13.6689 13.1205 13.508 13.028C13.4354 12.9855 13.4001 12.9487 13.3852 12.9287C13.4005 12.9078 13.4374 12.8691 13.5139 12.8247C13.6747 12.7321 13.9172 12.671 14.1864 12.6707C14.4559 12.6703 14.697 12.731 14.8559 12.8237Z" fill="#73B200" stroke="#73B200"/>
<path d="M9.31588 16.0981L9.31675 16.0986C9.38994 16.1411 9.4244 16.178 9.43833 16.1971C9.43832 16.1972 9.43831 16.1972 9.4383 16.1972C9.42401 16.2176 9.38779 16.2572 9.30997 16.3027C9.14852 16.3961 8.90695 16.4564 8.63858 16.4561C8.37047 16.4558 8.12889 16.3949 7.96799 16.3025C7.89537 16.2599 7.86008 16.2231 7.84511 16.2031C7.8605 16.1822 7.89739 16.1435 7.9739 16.0991C8.13462 16.0065 8.37719 15.9454 8.64632 15.9451C8.91586 15.9447 9.15694 16.0054 9.31588 16.0981Z" fill="#73B200" stroke="#73B200"/>
<path d="M2.47408 19.6821L2.47495 19.6826C2.54815 19.7251 2.5826 19.762 2.59653 19.7811C2.59653 19.7811 2.59652 19.7812 2.59651 19.7812C2.58221 19.8016 2.54599 19.8412 2.46817 19.8867C2.30673 19.9801 2.06515 20.0404 1.79679 20.0401C1.52867 20.0398 1.2871 19.9789 1.12619 19.8864C1.05357 19.8439 1.01828 19.8071 1.00332 19.7871C1.0187 19.7662 1.0556 19.7275 1.13211 19.6831C1.29282 19.5905 1.53539 19.5294 1.80452 19.5291C2.07406 19.5287 2.31515 19.5894 2.47408 19.6821Z" fill="#73B200" stroke="#73B200"/>
<path d="M20.0688 9.81296L20.0697 9.81347C20.1429 9.85598 20.1773 9.89285 20.1913 9.91199C20.1913 9.91201 20.1912 9.91203 20.1912 9.91204C20.1769 9.93244 20.1407 9.97208 20.0629 10.0176C19.9015 10.111 19.6599 10.1713 19.3915 10.171C19.1234 10.1706 18.8818 10.1098 18.7209 10.0173C18.6483 9.9748 18.613 9.93797 18.598 9.91796C18.6134 9.89707 18.6503 9.85833 18.7268 9.81391C18.8875 9.72133 19.1301 9.66024 19.3992 9.65991C19.6688 9.65958 19.9099 9.72025 20.0688 9.81296Z" fill="#73B200" stroke="#73B200"/>
<path d="M25.2827 6.80173L25.2835 6.80224C25.3568 6.84474 25.3912 6.88162 25.4051 6.90076C25.4051 6.90078 25.4051 6.9008 25.4051 6.90081C25.3908 6.92121 25.3546 6.96085 25.2768 7.00634C25.1153 7.09972 24.8737 7.16007 24.6054 7.15974C24.3373 7.15941 24.0957 7.09858 23.9348 7.00609C23.8622 6.96357 23.8269 6.92674 23.8119 6.90673C23.8273 6.88584 23.8642 6.8471 23.9407 6.80268C24.1014 6.7101 24.344 6.64901 24.6131 6.64868C24.8827 6.64835 25.1237 6.70902 25.2827 6.80173Z" fill="#73B200" stroke="#73B200"/>
<path d="M29.1529 3.79654L29.1529 3.79654L29.1541 3.79585C29.3148 3.70314 29.5576 3.64193 29.827 3.6416C30.0965 3.64127 30.3376 3.70194 30.4965 3.79465L30.4974 3.79516C30.5706 3.83766 30.6051 3.87452 30.619 3.89367C30.619 3.89369 30.619 3.8937 30.619 3.89371C30.6047 3.91411 30.5685 3.95375 30.4906 3.99924C30.3292 4.09262 30.0876 4.15297 29.8192 4.15264C29.5511 4.15231 29.3096 4.09148 29.1487 3.99899C29.0752 3.95599 29.04 3.91867 29.0254 3.89875C29.0404 3.87843 29.0768 3.84019 29.1529 3.79654Z" fill="#73B200" stroke="#73B200"/>
<path d="M35.7094 0.78391L35.7103 0.784414C35.7835 0.826916 35.818 0.863781 35.8319 0.88293C35.8319 0.882944 35.8319 0.882957 35.8319 0.88297C35.8176 0.90337 35.7813 0.94301 35.7035 0.988498C35.5421 1.08188 35.3005 1.14223 35.0321 1.1419C34.764 1.14157 34.5224 1.08074 34.3615 0.988245C34.2889 0.945732 34.2536 0.908908 34.2387 0.888895C34.2541 0.868005 34.2909 0.829271 34.3675 0.784859C34.5282 0.692282 34.7707 0.631189 35.0399 0.630861C35.3094 0.630532 35.5505 0.691196 35.7094 0.78391Z" fill="#73B200" stroke="#73B200"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-u2rjw3`,
                                          "data-framer-name": `Group`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 3,
                                          intrinsicWidth: 4,
                                          svg: `<svg width="4" height="3" viewBox="0 0 4 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.50631 1.52512L2.50718 1.52563C2.58037 1.56813 2.61483 1.60499 2.62876 1.62414C2.62875 1.62415 2.62874 1.62417 2.62873 1.62418C2.61444 1.64458 2.57822 1.68422 2.5004 1.72971C2.33895 1.82309 2.09738 1.88344 1.82901 1.88311C1.5609 1.88278 1.31932 1.82195 1.15842 1.72946C1.0858 1.68694 1.05051 1.65012 1.03554 1.63011C1.05093 1.60922 1.08782 1.57048 1.16433 1.52607C1.32505 1.43349 1.56762 1.3724 1.83675 1.37207C2.10629 1.37174 2.34737 1.43241 2.50631 1.52512Z" fill="#73B200" stroke="#73B200"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-o7v7qy`,
                                          "data-framer-name": `Group`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 233,
                                          intrinsicWidth: 256,
                                          svg: `<svg width="256" height="233" viewBox="0 0 256 233" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M187.526 23.0928C188.108 22.7581 189.054 22.7581 189.631 23.0928C190.211 23.4301 190.206 23.9769 189.624 24.3117C189.038 24.6489 188.101 24.6489 187.518 24.3117C186.941 23.9769 186.941 23.4301 187.526 23.0928Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M191.614 20.9095C192.196 20.5748 193.142 20.5748 193.719 20.9095C194.299 21.2468 194.294 21.7936 193.711 22.1283C193.126 22.4656 192.189 22.4656 191.606 22.1283C191.029 21.7936 191.029 21.2468 191.614 20.9095Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M183.433 25.4744C184.018 25.1371 184.961 25.1397 185.538 25.4744C186.119 25.8117 186.116 26.3559 185.531 26.6932C184.948 27.028 184.008 27.0305 183.425 26.6932C182.85 26.3559 182.853 25.8091 183.433 25.4744Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M179.358 27.8223C179.94 27.4876 180.886 27.4876 181.463 27.8223C182.043 28.1596 182.038 28.7064 181.456 29.0411C180.87 29.3784 179.933 29.3784 179.35 29.0411C178.773 28.7064 178.773 28.1622 179.358 27.8223Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M175.263 30.1912C175.848 29.8539 176.791 29.8565 177.369 30.1912C177.949 30.5285 177.946 31.0728 177.361 31.41C176.778 31.7448 175.838 31.7473 175.255 31.41C174.678 31.0728 174.68 30.5259 175.263 30.1912Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M171.175 32.5443C171.758 32.2095 172.703 32.2095 173.281 32.5443C173.861 32.8815 173.856 33.4283 173.273 33.7631C172.688 34.1004 171.75 34.1004 171.168 33.7631C170.59 33.4283 170.59 32.8815 171.175 32.5443Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M167.084 34.9107C167.667 34.576 168.612 34.576 169.19 34.9107C169.77 35.248 169.765 35.7948 169.182 36.1295C168.597 36.4668 167.659 36.4668 167.077 36.1295C166.499 35.7948 166.499 35.248 167.084 34.9107Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M224.33 67.941C224.916 67.6037 225.853 67.6037 226.436 67.941C227.013 68.2757 227.013 68.8225 226.428 69.1598C225.846 69.4945 224.9 69.4945 224.323 69.1598C223.743 68.8225 223.75 68.2782 224.33 67.941Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M220.218 65.5957C220.803 65.2585 221.741 65.2585 222.324 65.5957C222.901 65.9305 222.901 66.4773 222.316 66.8146C221.733 67.1493 220.788 67.1493 220.21 66.8146C219.63 66.4773 219.636 65.9305 220.218 65.5957Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M232.492 72.6655C233.077 72.3282 234.02 72.3308 234.6 72.6681C235.18 73.0053 235.18 73.5522 234.597 73.8894C234.015 74.2242 233.069 74.2242 232.489 73.8869C231.909 73.5496 231.912 73.0028 232.492 72.6655Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M236.586 75.042C237.171 74.7047 238.114 74.7072 238.694 75.0445C239.274 75.3818 239.274 75.9286 238.691 76.2659C238.109 76.6006 237.163 76.6006 236.583 76.2633C236.001 75.9261 236.003 75.3767 236.586 75.042Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M240.661 77.4053C241.246 77.068 242.189 77.0706 242.767 77.4053C243.347 77.7426 243.347 78.2894 242.764 78.6267C242.182 78.9614 241.236 78.9614 240.656 78.6241C240.076 78.2894 240.081 77.7401 240.661 77.4053Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M228.394 70.3071C228.979 69.9698 229.922 69.9724 230.502 70.3097C231.082 70.6469 231.082 71.1938 230.5 71.531C229.917 71.8658 228.972 71.8658 228.392 71.5285C227.809 71.1886 227.812 70.6418 228.394 70.3071Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M244.755 79.8147C245.34 79.4774 246.283 79.48 246.863 79.8172C247.443 80.1545 247.443 80.7013 246.86 81.0386C246.278 81.3733 245.332 81.3733 244.752 81.0361C244.172 80.6988 244.172 80.152 244.755 79.8147Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M248.856 82.1169C249.441 81.7796 250.384 81.7822 250.964 82.1195C251.544 82.4568 251.544 83.0036 250.962 83.3408C250.379 83.6756 249.434 83.6756 248.854 83.3383C248.271 83.001 248.274 82.4516 248.856 82.1169Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M252.934 84.4831C253.519 84.1458 254.462 84.1484 255.042 84.4857C255.622 84.823 255.622 85.3698 255.04 85.7071C254.457 86.0418 253.512 86.0418 252.932 85.7045C252.352 85.3672 252.354 84.8179 252.934 84.4831Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M171.174 37.292C171.759 36.9548 172.702 36.9573 173.279 37.292C173.859 37.6293 173.859 38.1761 173.277 38.5134C172.694 38.8481 171.749 38.8481 171.169 38.5109C170.589 38.1761 170.591 37.6268 171.174 37.292Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M175.262 39.6301C175.847 39.2928 176.79 39.2954 177.37 39.6327C177.95 39.9699 177.947 40.5142 177.362 40.8515C176.78 41.1862 175.839 41.1888 175.257 40.8515C174.677 40.5142 174.682 39.9648 175.262 39.6301Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M179.358 41.9858C179.944 41.6485 180.886 41.6511 181.466 41.9884C182.046 42.3257 182.044 42.8699 181.459 43.2072C180.876 43.5419 179.936 43.5445 179.353 43.2072C178.773 42.8699 178.776 42.3205 179.358 41.9858Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M183.441 44.334C184.026 43.9967 184.969 43.9992 185.549 44.3365C186.129 44.6738 186.129 45.2206 185.547 45.5579C184.964 45.8926 184.019 45.8926 183.439 45.5553C182.856 45.2181 182.859 44.6687 183.441 44.334Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M187.521 46.6924C188.106 46.3551 189.049 46.3576 189.629 46.6949C190.209 47.0322 190.209 47.579 189.627 47.9163C189.044 48.251 188.099 48.251 187.519 47.9137C186.936 47.5765 186.941 47.0271 187.521 46.6924Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M191.609 49.0613C192.194 48.724 193.137 48.7265 193.717 49.0638C194.297 49.4011 194.297 49.9479 193.715 50.2852C193.132 50.6199 192.187 50.6199 191.607 50.2826C191.024 49.9453 191.027 49.396 191.609 49.0613Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M195.698 51.4272C196.283 51.0899 197.226 51.0925 197.806 51.4298C198.386 51.7671 198.386 52.3139 197.803 52.6511C197.221 52.9859 196.275 52.9859 195.695 52.6486C195.115 52.3113 195.118 51.7645 195.698 51.4272Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M199.796 53.7881C200.381 53.4508 201.324 53.4533 201.904 53.7906C202.484 54.1279 202.484 54.6747 201.901 55.012C201.319 55.3467 200.373 55.3467 199.793 55.0094C199.211 54.6722 199.213 54.1228 199.796 53.7881Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M203.851 56.1516C204.436 55.8143 205.379 55.8169 205.959 56.1541C206.539 56.4914 206.539 57.0382 205.957 57.3755C205.374 57.7102 204.429 57.7102 203.849 57.373C203.266 57.0331 203.271 56.4863 203.851 56.1516Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M207.962 58.4844C208.547 58.1471 209.485 58.1471 210.067 58.4844C210.647 58.8217 210.647 59.3685 210.065 59.7058C209.482 60.0405 208.537 60.0405 207.957 59.7032C207.372 59.3659 207.379 58.8191 207.962 58.4844Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M212.054 60.9019C212.639 60.5646 213.577 60.5646 214.159 60.9019C214.739 61.2392 214.739 61.786 214.157 62.1233C213.574 62.458 212.629 62.458 212.049 62.1207C211.466 61.7834 211.474 61.2366 212.054 60.9019Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M216.147 63.2395C216.732 62.9023 217.669 62.9023 218.252 63.2395C218.832 63.5768 218.832 64.1236 218.249 64.4609C217.667 64.7956 216.721 64.7956 216.141 64.4584C215.559 64.1211 215.564 63.5743 216.147 63.2395Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M53.7143 164.158C54.2994 163.821 55.2371 163.821 55.8197 164.158C56.3972 164.493 56.3972 165.04 55.8121 165.377C55.2295 165.712 54.2841 165.712 53.7066 165.377C53.1266 165.04 53.1342 164.495 53.7143 164.158Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M49.6029 161.813C50.188 161.475 51.1258 161.475 51.7084 161.813C52.2858 162.147 52.2858 162.694 51.7007 163.031C51.1181 163.366 50.1727 163.366 49.5952 163.031C49.0152 162.694 49.0203 162.147 49.6029 161.813Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M61.8758 168.883C62.4609 168.545 63.4037 168.548 63.9838 168.885C64.5638 169.222 64.5638 169.769 63.9812 170.106C63.3986 170.441 62.4532 170.441 61.8732 170.104C61.2932 169.767 61.2957 169.22 61.8758 168.883Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M65.9695 171.259C66.5546 170.921 67.4975 170.924 68.0775 171.261C68.6575 171.599 68.6575 172.145 68.0749 172.483C67.4923 172.817 66.5469 172.817 65.9669 172.48C65.3843 172.143 65.3869 171.593 65.9695 171.259Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M70.046 173.622C70.6311 173.285 71.574 173.288 72.1514 173.622C72.7315 173.96 72.7315 174.506 72.1489 174.844C71.5663 175.178 70.6209 175.178 70.0409 174.841C69.4608 174.506 69.466 173.957 70.046 173.622Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M57.7781 166.524C58.3632 166.187 59.306 166.189 59.8861 166.526C60.4661 166.864 60.4661 167.411 59.8835 167.748C59.3009 168.083 58.3555 168.083 57.7755 167.745C57.1929 167.405 57.1955 166.859 57.7781 166.524Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M74.1384 176.032C74.7236 175.695 75.6664 175.697 76.2464 176.035C76.8265 176.372 76.8265 176.919 76.2439 177.256C75.6613 177.591 74.7159 177.591 74.1359 177.253C73.5558 176.916 73.5558 176.369 74.1384 176.032Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M78.24 178.334C78.8251 177.997 79.768 177.999 80.348 178.337C80.928 178.674 80.928 179.221 80.3454 179.558C79.7629 179.893 78.8174 179.893 78.2374 179.555C77.6548 179.218 77.6574 178.669 78.24 178.334Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M82.3172 180.7C82.9023 180.363 83.8451 180.365 84.4252 180.703C85.0052 181.04 85.0052 181.587 84.4226 181.924C83.84 182.259 82.8946 182.259 82.3146 181.922C81.7346 181.584 81.7371 181.035 82.3172 180.7Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M0.557679 133.509C1.14281 133.172 2.08567 133.174 2.66314 133.509C3.24316 133.846 3.24316 134.393 2.66058 134.73C2.078 135.065 1.13259 135.065 0.552563 134.728C-0.02746 134.393 -0.0248998 133.844 0.557679 133.509Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M4.64461 135.847C5.22975 135.51 6.17261 135.512 6.75263 135.849C7.33265 136.187 7.33009 136.731 6.74496 137.068C6.16238 137.403 5.22208 137.406 4.6395 137.068C4.05948 136.731 4.06459 136.182 4.64461 135.847Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M8.74323 138.203C9.32836 137.866 10.2712 137.868 10.8512 138.205C11.4313 138.543 11.4287 139.087 10.8436 139.424C10.261 139.759 9.32069 139.762 8.73811 139.424C8.15809 139.087 8.16065 138.538 8.74323 138.203Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M12.8249 140.551C13.4101 140.214 14.3529 140.216 14.9329 140.554C15.513 140.891 15.513 141.438 14.9304 141.775C14.3478 142.11 13.4024 142.11 12.8224 141.772C12.2398 141.435 12.2423 140.886 12.8249 140.551Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M16.9041 142.909C17.4892 142.572 18.432 142.575 19.0121 142.912C19.5921 143.249 19.5921 143.796 19.0095 144.133C18.4269 144.468 17.4815 144.468 16.9015 144.131C16.3189 143.793 16.324 143.244 16.9041 142.909Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M20.9939 145.278C21.579 144.941 22.5219 144.944 23.1019 145.281C23.6819 145.618 23.6819 146.165 23.0993 146.502C22.5168 146.837 21.5713 146.837 20.9913 146.5C20.4087 146.162 20.4113 145.613 20.9939 145.278Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M25.0818 147.644C25.6669 147.307 26.6098 147.309 27.1898 147.647C27.7698 147.984 27.7698 148.531 27.1873 148.868C26.6047 149.203 25.6593 149.203 25.0792 148.865C24.4992 148.528 24.5018 147.981 25.0818 147.644Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M29.1804 150.005C29.7655 149.668 30.7084 149.67 31.2884 150.008C31.8684 150.345 31.8684 150.892 31.2859 151.229C30.7033 151.564 29.7579 151.564 29.1778 151.226C28.5953 150.889 28.5978 150.34 29.1804 150.005Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M33.2351 152.368C33.8202 152.031 34.7631 152.034 35.3431 152.371C35.9231 152.708 35.9232 153.255 35.3406 153.592C34.758 153.927 33.8126 153.927 33.2326 153.59C32.65 153.25 32.6551 152.703 33.2351 152.368Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M37.3467 154.701C37.9318 154.364 38.8696 154.364 39.4522 154.701C40.0322 155.039 40.0322 155.586 39.4496 155.923C38.867 156.258 37.9216 156.258 37.3416 155.92C36.7565 155.583 36.7641 155.036 37.3467 154.701Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M41.4376 157.119C42.0227 156.781 42.9604 156.781 43.543 157.119C44.1231 157.456 44.123 158.003 43.5405 158.34C42.9579 158.675 42.0125 158.675 41.4325 158.338C40.8499 158 40.8575 157.453 41.4376 157.119Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M45.5313 159.457C46.1164 159.119 47.0542 159.119 47.6368 159.457C48.2168 159.794 48.2168 160.341 47.6342 160.678C47.0516 161.013 46.1062 161.013 45.5262 160.675C44.9436 160.338 44.9487 159.791 45.5313 159.457Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M140.32 214.49C140.905 214.152 141.843 214.152 142.425 214.49C143.003 214.824 143.003 215.371 142.418 215.708C141.835 216.043 140.89 216.043 140.312 215.708C139.732 215.371 139.74 214.827 140.32 214.49Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M136.208 212.144C136.794 211.807 137.731 211.807 138.314 212.144C138.891 212.479 138.891 213.025 138.306 213.363C137.724 213.697 136.778 213.697 136.201 213.363C135.621 213.025 135.626 212.479 136.208 212.144Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M148.481 219.214C149.066 218.877 150.009 218.879 150.589 219.216C151.169 219.554 151.169 220.1 150.587 220.438C150.004 220.773 149.059 220.772 148.479 220.435C147.899 220.098 147.901 219.551 148.481 219.214Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M152.575 221.59C153.16 221.253 154.103 221.255 154.683 221.593C155.263 221.93 155.263 222.477 154.68 222.814C154.098 223.149 153.152 223.149 152.572 222.811C151.99 222.474 151.992 221.925 152.575 221.59Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M156.651 223.954C157.237 223.616 158.179 223.619 158.757 223.954C159.337 224.291 159.337 224.838 158.754 225.175C158.172 225.51 157.226 225.51 156.646 225.172C156.066 224.838 156.071 224.288 156.651 223.954Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M144.384 216.855C144.969 216.518 145.912 216.52 146.492 216.858C147.072 217.195 147.072 217.742 146.489 218.079C145.906 218.414 144.961 218.414 144.381 218.077C143.798 217.737 143.801 217.19 144.384 216.855Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M160.744 226.363C161.329 226.026 162.272 226.029 162.852 226.366C163.432 226.703 163.432 227.25 162.849 227.587C162.267 227.922 161.321 227.922 160.741 227.585C160.161 227.247 160.161 226.701 160.744 226.363Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M164.845 228.665C165.431 228.328 166.373 228.331 166.953 228.668C167.533 229.005 167.533 229.552 166.951 229.889C166.368 230.224 165.423 230.224 164.843 229.887C164.26 229.549 164.263 229 164.845 228.665Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M168.923 231.031C169.508 230.694 170.451 230.697 171.031 231.034C171.611 231.371 171.611 231.918 171.028 232.255C170.446 232.59 169.5 232.59 168.92 232.253C168.34 231.916 168.343 231.366 168.923 231.031Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M87.1631 183.84C87.7483 183.503 88.6911 183.505 89.2686 183.84C89.8486 184.177 89.8486 184.724 89.266 185.062C88.6835 185.396 87.7381 185.396 87.158 185.059C86.578 184.724 86.5806 184.175 87.1631 183.84Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M91.252 186.178C91.8372 185.841 92.78 185.843 93.3601 186.181C93.9401 186.518 93.9375 187.062 93.3524 187.4C92.7698 187.734 91.8295 187.737 91.2469 187.4C90.6669 187.062 90.672 186.513 91.252 186.178Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M95.3477 188.534C95.9329 188.197 96.8757 188.199 97.4557 188.536C98.0358 188.874 98.0332 189.418 97.4481 189.755C96.8655 190.09 95.9252 190.093 95.3426 189.755C94.7626 189.418 94.7651 188.869 95.3477 188.534Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M99.4304 190.882C100.016 190.545 100.958 190.547 101.538 190.885C102.118 191.222 102.118 191.769 101.536 192.106C100.953 192.441 100.008 192.441 99.4279 192.103C98.8453 191.766 98.8478 191.217 99.4304 190.882Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M103.511 193.24C104.096 192.903 105.038 192.906 105.619 193.243C106.199 193.58 106.199 194.127 105.616 194.464C105.033 194.799 104.088 194.799 103.508 194.462C102.925 194.125 102.93 193.575 103.511 193.24Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M107.599 195.61C108.184 195.272 109.127 195.275 109.707 195.612C110.287 195.949 110.287 196.496 109.705 196.834C109.122 197.168 108.177 197.168 107.597 196.831C107.014 196.494 107.017 195.944 107.599 195.61Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M111.687 197.975C112.272 197.638 113.215 197.641 113.795 197.978C114.375 198.315 114.375 198.862 113.793 199.199C113.21 199.534 112.265 199.534 111.685 199.197C111.105 198.859 111.107 198.313 111.687 197.975Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M115.786 200.336C116.371 199.999 117.314 200.002 117.894 200.339C118.474 200.676 118.474 201.223 117.891 201.56C117.309 201.895 116.363 201.895 115.783 201.558C115.201 201.22 115.203 200.671 115.786 200.336Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M119.841 202.7C120.426 202.362 121.369 202.365 121.949 202.702C122.529 203.04 122.529 203.586 121.946 203.924C121.363 204.258 120.418 204.258 119.838 203.921C119.255 203.581 119.261 203.034 119.841 202.7Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M123.952 205.033C124.537 204.695 125.475 204.695 126.058 205.033C126.638 205.37 126.638 205.917 126.055 206.254C125.473 206.589 124.527 206.589 123.947 206.252C123.362 205.914 123.37 205.367 123.952 205.033Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M128.043 207.45C128.628 207.113 129.566 207.113 130.148 207.45C130.729 207.787 130.729 208.334 130.146 208.671C129.563 209.006 128.618 209.006 128.038 208.669C127.455 208.332 127.463 207.785 128.043 207.45Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M132.137 209.788C132.722 209.45 133.66 209.45 134.242 209.788C134.822 210.125 134.822 210.672 134.24 211.009C133.657 211.344 132.712 211.344 132.132 211.006C131.549 210.669 131.554 210.122 132.137 209.788Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<g opacity="0.5">
<path d="M171.941 35.5533C171.949 34.969 171.572 34.2752 170.584 33.6791C169.599 33.0864 168.27 32.7603 166.911 32.735C165.552 32.7097 164.217 32.9863 163.217 33.5417C162.217 34.0983 161.823 34.7755 161.816 35.3591C161.808 35.9441 162.185 36.6386 163.172 37.2345L171.941 35.5533ZM171.941 35.5533C171.933 36.1364 171.54 36.8138 170.539 37.3722M171.941 35.5533L170.539 37.3722M170.539 37.3722C169.542 37.9274 168.206 38.204 166.846 38.1787C165.487 38.1534 164.158 37.8272 163.172 37.2345L170.539 37.3722Z" fill="#94C518" stroke="#73B200"/>
</g>
<path d="M169.602 33.9426C171.083 34.8361 171.066 36.2373 169.56 37.0753C168.055 37.9132 165.635 37.868 164.15 36.9744C162.669 36.0809 162.686 34.6797 164.192 33.8417C165.697 33.0038 168.117 33.049 169.602 33.9426Z" fill="#73B200"/>
<path d="M164.79 35.4585H168.962V0.126221H164.79V35.4585Z" fill="url(#paint0_linear_4345_8048)"/>
<g opacity="0.5">
<path d="M62.766 24.4627C62.7737 23.8784 62.3972 23.1847 61.4092 22.5886C60.4239 21.9959 59.0957 21.6697 57.7367 21.6444C56.3775 21.6191 55.0417 21.8957 54.0418 22.4512C53.0417 23.0077 52.6484 23.685 52.6407 24.2686C52.633 24.8535 53.0098 25.548 53.9975 26.1439L62.766 24.4627ZM62.766 24.4627C62.7584 25.0458 62.3651 25.7232 61.3647 26.2816M62.766 24.4627L61.3647 26.2816M61.3647 26.2816C60.3667 26.8368 59.0311 27.1135 57.6714 27.0881C56.3119 27.0628 54.9827 26.7367 53.9975 26.144L61.3647 26.2816Z" fill="#94C518" stroke="#73B200"/>
</g>
<path d="M60.426 22.8522C61.9072 23.7458 61.8898 25.147 60.3843 25.9849C58.8788 26.8229 56.4589 26.7777 54.9742 25.8841C53.4931 24.9905 53.5105 23.5893 55.016 22.7514C56.5215 21.9135 58.9414 21.9587 60.426 22.8522Z" fill="#73B200"/>
<g opacity="0.5">
<path d="M67.6381 169.821C67.6458 169.237 67.2693 168.543 66.2812 167.947C65.296 167.354 63.9677 167.028 62.6087 167.003C61.2496 166.978 59.9138 167.254 58.9139 167.81C57.9138 168.366 57.5205 169.043 57.5128 169.627C57.5051 170.212 57.8819 170.906 58.8696 171.502L67.6381 169.821ZM67.6381 169.821C67.6304 170.404 67.2372 171.082 66.2367 171.64M67.6381 169.821L66.2367 171.64M66.2367 171.64C65.2388 172.195 63.9032 172.472 62.5435 172.447C61.1839 172.421 59.8548 172.095 58.8696 171.502L66.2367 171.64Z" fill="#94C518" stroke="#73B200"/>
</g>
<path d="M65.2981 168.21C66.7792 169.104 66.7619 170.505 65.2564 171.343C63.7509 172.181 61.331 172.136 59.8463 171.242C58.3652 170.349 58.3825 168.948 59.888 168.11C61.3935 167.272 63.8135 167.317 65.2981 168.21Z" fill="#73B200"/>
<path d="M60.4873 169.727H64.6596V134.394H60.4873V169.727Z" fill="url(#paint1_linear_4345_8048)"/>
<g opacity="0.5">
<path d="M44.9477 93.5162C44.9554 92.9319 44.5788 92.2381 43.5908 91.642C42.6056 91.0493 41.2773 90.7232 39.9183 90.6979C38.5592 90.6726 37.2234 90.9492 36.2234 91.5046C35.2234 92.0611 34.8301 92.7384 34.8224 93.322C34.8147 93.9069 35.1915 94.6014 36.1791 95.1974L44.9477 93.5162ZM44.9477 93.5162C44.94 94.0993 44.5468 94.7766 43.5463 95.335M44.9477 93.5162L43.5463 95.335M43.5463 95.335C42.5483 95.8903 41.2127 96.1669 39.8531 96.1416C38.4935 96.1163 37.1644 95.7901 36.1792 95.1974L43.5463 95.335Z" fill="#94C518" stroke="#73B200"/>
</g>
<path d="M42.6096 91.9055C44.0908 92.799 44.0734 94.2002 42.5679 95.0382C41.0624 95.8761 38.6425 95.8309 37.1578 94.9373C35.6767 94.0438 35.6941 92.6426 37.1996 91.8046C38.7051 90.9667 41.125 91.0119 42.6096 91.9055Z" fill="#73B200"/>
<defs>
<linearGradient id="paint0_linear_4345_8048" x1="166.547" y1="35.483" x2="167.205" y2="0.0883942" gradientUnits="userSpaceOnUse">
<stop stop-color="#73B200"/>
<stop offset="0.2852" stop-color="#73B200" stop-opacity="0.28"/>
<stop offset="0.4875" stop-color="#94C518" stop-opacity="0.2"/>
<stop offset="1" stop-color="#D9F68E" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_4345_8048" x1="62.2442" y1="169.751" x2="62.9027" y2="134.356" gradientUnits="userSpaceOnUse">
<stop stop-color="#73B200"/>
<stop offset="0.2852" stop-color="#73B200" stop-opacity="0.28"/>
<stop offset="0.4875" stop-color="#94C518" stop-opacity="0.2"/>
<stop offset="1" stop-color="#D9F68E" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-1gmbf60`,
                                          "data-framer-name": `Vector`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 5,
                                          intrinsicWidth: 6,
                                          svg: `<svg width="6" height="5" viewBox="-1 -1 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.0069 1.09527C1.59203 0.757984 2.53489 0.760539 3.11235 1.09527C3.69238 1.43255 3.69238 1.97935 3.1098 2.31664C2.52722 2.65136 1.58181 2.65136 1.00178 2.31408C0.421759 1.97935 0.424319 1.42999 1.0069 1.09527Z" fill="#408BFC" stroke="white" stroke-width="0.95" stroke-miterlimit="10"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-1vdokqa`,
                                          "data-framer-name": `Group 55329`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 194,
                                          intrinsicWidth: 157,
                                          svg: `<svg width="157" height="194" viewBox="0 0 157 194" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M78.3887 161.287V64.554L22.54 96.7996L78.3887 161.287ZM78.3887 64.554V161.287L134.237 96.7996L78.3887 64.554Z" fill="url(#paint0_radial_4345_8163)"/>
<path d="M77.8893 129.907L78.3894 130.196L78.8894 129.907L134.738 97.6617L136.238 96.7957L134.738 95.9297L78.8894 63.684L78.3894 63.3953L77.8893 63.684L22.0406 95.9297L20.5407 96.7957L22.0406 97.6617L77.8893 129.907ZM2.20172 96.7995L78.4622 52.8003L154.578 96.7952L78.3893 140.784L2.20172 96.7995Z" fill="white" stroke="#272727" stroke-width="2"/>
<path d="M79.3896 142.516L155.578 98.5277V147.812L79.3896 191.797V142.516Z" fill="#F4F2EA" stroke="#272727" stroke-width="2"/>
<path d="M1.20117 98.5311L77.3894 142.516V191.797L1.20117 147.812V98.5311Z" fill="#F4F2EA" stroke="#272727" stroke-width="2"/>
<path opacity="0.49" fill-rule="evenodd" clip-rule="evenodd" d="M22.541 0.065918V96.7994L78.3897 129.045C78.3897 128.926 134.238 96.7994 134.238 96.7994V0.065918H22.541Z" fill="url(#paint1_linear_4345_8163)"/>
<defs>
<radialGradient id="paint0_radial_4345_8163" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.0309 132.41) scale(45.2754 45.2935)">
<stop stop-color="#B2ED1D"/>
<stop offset="0.2618" stop-color="#B2ED1D"/>
<stop offset="0.4123" stop-color="#CCF368"/>
<stop offset="0.5346" stop-color="#D8F68E"/>
<stop offset="0.6417" stop-color="#D0F760"/>
<stop offset="0.739" stop-color="#B8F900"/>
<stop offset="0.8291" stop-color="#FFFCF1"/>
<stop offset="0.9137" stop-color="#FBF6E4"/>
<stop offset="0.9919" stop-color="#E3E0D5"/>
<stop offset="1" stop-color="#E3E0D5"/>
</radialGradient>
<linearGradient id="paint1_linear_4345_8163" x1="78.391" y1="129.042" x2="78.391" y2="0.0649032" gradientUnits="userSpaceOnUse">
<stop stop-color="#B2ED1D"/>
<stop offset="0.485" stop-color="#BFF043" stop-opacity="0.75"/>
<stop offset="0.6866" stop-color="#CCF368" stop-opacity="0.48"/>
<stop offset="0.9905" stop-color="#E5F9B4" stop-opacity="0.01"/>
<stop offset="1" stop-color="#F3F3F3" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-f993zn`,
                                          "data-framer-name": `Group`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 181,
                                          intrinsicWidth: 93,
                                          svg: `<svg width="93" height="181" viewBox="0 0 93 181" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.3">
<path opacity="0.6" d="M22.5234 132.24C22.5234 129.824 24.4899 127.858 26.9056 127.858C29.3212 127.858 31.2877 129.824 31.2877 132.24C31.2877 134.656 29.3212 136.622 26.9056 136.622C24.4844 136.622 22.5234 134.656 22.5234 132.24Z" fill="#B2ED1D" fill-opacity="0.5"/>
<path opacity="0.6" d="M35.6709 156.342C35.6709 157.552 36.6514 158.533 37.862 158.533C39.0725 158.533 40.053 157.552 40.053 156.342C40.053 155.131 39.0725 154.151 37.862 154.151C36.6514 154.151 35.6709 155.131 35.6709 156.342Z" fill="#73B200"/>
<path opacity="0.35" d="M57.5811 134.979C57.5811 135.888 58.3151 136.622 59.2243 136.622C60.1336 136.622 60.8676 135.888 60.8676 134.979C60.8676 134.07 60.1336 133.336 59.2243 133.336C58.3151 133.336 57.5811 134.075 57.5811 134.979Z" fill="#73B200"/>
<path opacity="0.77" d="M28.002 178.8C28.002 179.709 28.736 180.443 29.6452 180.443C30.5545 180.443 31.2885 179.709 31.2885 178.8C31.2885 177.89 30.5545 177.156 29.6452 177.156C28.736 177.156 28.002 177.896 28.002 178.8Z" fill="#73B200"/>
<path opacity="0.77" d="M84.9717 98.7497C84.9717 99.659 85.7057 100.393 86.615 100.393C87.5243 100.393 88.2583 99.659 88.2583 98.7497C88.2583 97.8404 87.5243 97.1064 86.615 97.1064C85.7057 97.1064 84.9717 97.8459 84.9717 98.7497Z" fill="#73B200"/>
<path opacity="0.6" d="M9.41595 131.411C13.0462 131.411 15.9891 128.468 15.9891 124.838C15.9891 121.208 13.0462 118.265 9.41595 118.265C5.78568 118.265 2.84277 121.208 2.84277 124.838C2.84277 128.468 5.78568 131.411 9.41595 131.411Z" fill="#8BBB02"/>
<path opacity="0.56" d="M61.9632 173.87C61.9632 175.081 60.9827 176.061 59.7721 176.061C58.5616 176.061 57.5811 175.081 57.5811 173.87C57.5811 172.659 58.5616 171.679 59.7721 171.679C60.9827 171.679 61.9632 172.659 61.9632 173.87Z" fill="#73B200"/>
<path opacity="0.6" d="M70.7268 162.915C73.147 162.915 75.109 160.953 75.109 158.533C75.109 156.113 73.147 154.151 70.7268 154.151C68.3067 154.151 66.3447 156.113 66.3447 158.533C66.3447 160.953 68.3067 162.915 70.7268 162.915Z" fill="#B2ED1D" fill-opacity="0.5"/>
<path opacity="0.77" d="M36.7656 103.208C36.7656 104.118 37.4996 104.852 38.4089 104.852C39.3182 104.852 40.0522 104.118 40.0522 103.208C40.0522 102.299 39.3182 101.565 38.4089 101.565C37.4996 101.565 36.7656 102.305 36.7656 103.208Z" fill="#73B200"/>
<path opacity="0.56" d="M66.345 103.756C66.345 104.967 65.3645 105.947 64.1539 105.947C62.9434 105.947 61.9629 104.967 61.9629 103.756C61.9629 102.546 62.9434 101.565 64.1539 101.565C65.359 101.565 66.345 102.551 66.345 103.756Z" fill="#73B200"/>
<path opacity="0.6" d="M57.5813 86.2279C57.5813 87.4385 56.6008 88.419 55.3903 88.419C54.1797 88.419 53.1992 87.4385 53.1992 86.2279C53.1992 85.0174 54.1797 84.0369 55.3903 84.0369C56.6008 84.0369 57.5813 85.0174 57.5813 86.2279Z" fill="#272727"/>
<path opacity="0.6" d="M5.03348 100.831C5.03348 102.041 4.05298 103.022 2.84242 103.022C1.63187 103.022 0.651367 102.041 0.651367 100.831C0.651367 99.6201 1.63187 98.6396 2.84242 98.6396C4.05298 98.6396 5.03348 99.6201 5.03348 100.831Z" fill="#272727"/>
<path opacity="0.6" d="M35.6702 84.0372C38.0904 84.0372 40.0523 82.0752 40.0523 79.6551C40.0523 77.2349 38.0904 75.2729 35.6702 75.2729C33.25 75.2729 31.2881 77.2349 31.2881 79.6551C31.2881 82.0752 33.25 84.0372 35.6702 84.0372Z" fill="#B2ED1D" fill-opacity="0.5"/>
<path opacity="0.6" d="M83.873 68.7825C83.873 66.3669 85.8395 64.4004 88.2552 64.4004C90.6708 64.4004 92.6373 66.3669 92.6373 68.7825C92.6373 71.1981 90.6708 73.1646 88.2552 73.1646C85.834 73.1646 83.873 71.1981 83.873 68.7825Z" fill="#B2ED1D" fill-opacity="0.5"/>
<path opacity="0.6" d="M4.99512 64.317C4.99512 65.5276 5.97562 66.5081 7.18617 66.5081C8.39673 66.5081 9.37723 65.5276 9.37723 64.317C9.37723 63.1065 8.39673 62.126 7.18617 62.126C5.97562 62.126 4.99512 63.1065 4.99512 64.317Z" fill="#73B200"/>
<path opacity="0.77" d="M80.5859 12.2798C80.5859 13.1891 81.3199 13.9231 82.2292 13.9231C83.1385 13.9231 83.8725 13.1891 83.8725 12.2798C83.8725 11.3705 83.1385 10.6365 82.2292 10.6365C81.3199 10.6365 80.5859 11.376 80.5859 12.2798Z" fill="#73B200"/>
<path opacity="0.77" d="M57.5811 56.1008C57.5811 57.0101 58.3151 57.7441 59.2243 57.7441C60.1336 57.7441 60.8676 57.0101 60.8676 56.1008C60.8676 55.1915 60.1336 54.4575 59.2243 54.4575C58.3151 54.4575 57.5811 55.197 57.5811 56.1008Z" fill="#73B200"/>
<path opacity="0.6" d="M57.5806 22.6874C62.421 22.6874 66.3449 18.7635 66.3449 13.9232C66.3449 9.08281 62.421 5.15894 57.5806 5.15894C52.7403 5.15894 48.8164 9.08281 48.8164 13.9232C48.8164 18.7635 52.7403 22.6874 57.5806 22.6874Z" fill="#8BBB02"/>
<path opacity="0.56" d="M88.2552 42.4066C88.2552 43.6172 87.2747 44.5977 86.0641 44.5977C84.8535 44.5977 83.873 43.6172 83.873 42.4066C83.873 41.1961 84.8535 40.2156 86.0641 40.2156C87.2747 40.2156 88.2552 41.1961 88.2552 42.4066Z" fill="#73B200"/>
<path opacity="0.6" d="M31.2884 2.96767C31.2884 4.17823 30.3079 5.15873 29.0973 5.15873C27.8867 5.15873 26.9062 4.17823 26.9062 2.96767C26.9062 1.75711 27.8867 0.776611 29.0973 0.776611C30.3079 0.776611 31.2884 1.75711 31.2884 2.96767Z" fill="#272727"/>
<path opacity="0.6" d="M70.7268 40.2159C73.147 40.2159 75.109 38.254 75.109 35.8338C75.109 33.4136 73.147 31.4517 70.7268 31.4517C68.3067 31.4517 66.3447 33.4136 66.3447 35.8338C66.3447 38.254 68.3067 40.2159 70.7268 40.2159Z" fill="#B2ED1D" fill-opacity="0.5"/>
</g>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-1jb2xw3`,
                                          "data-framer-name": `Group`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 160,
                                          intrinsicWidth: 116,
                                          svg: `<svg width="116" height="160" viewBox="0 0 116 160" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M58.0477 48.1628L72.2994 56.3914L58.0478 64.616L43.796 56.3894L58.0477 48.1628Z" fill="white" stroke="black"/>
<path d="M57.5477 81.9353L43.2959 73.7086V57.2555L57.5477 65.4841V81.9353Z" fill="white" stroke="black"/>
<path d="M73.2987 56.3918V73.9976L58.0469 82.8016V65.1958L73.2987 56.3918Z" fill="#69D6D4"/>
<path d="M73.2996 56.967L87.5514 65.1956L73.2997 73.4202L59.048 65.1936L73.2996 56.967Z" fill="white" stroke="black"/>
<path d="M72.7997 90.7393L58.5479 82.5125V66.0593L72.7997 74.286V90.7393Z" fill="white" stroke="black"/>
<path d="M73.799 74.2864L88.0508 66.0616V82.5128L73.797 90.7396L73.799 74.2864Z" fill="white" stroke="black"/>
<path d="M42.7948 35.697L57.0464 43.9235L42.7948 52.1481L28.5432 43.9235L42.7948 35.697Z" fill="white" stroke="black"/>
<path d="M42.2948 69.4676L28.043 61.2409V44.7898L42.2948 53.0165V69.4676Z" fill="white" stroke="black"/>
<path d="M43.2949 53.0165L57.5467 44.7898V61.243L43.2949 69.4677V53.0165Z" fill="white" stroke="black"/>
<path d="M58.0458 65.7714L72.2974 73.998L58.0458 82.2247L43.7941 73.998L58.0458 65.7714Z" fill="white" stroke="black"/>
<path d="M57.5458 99.5422L43.2939 91.3174V74.8642L57.5458 83.0909V99.5422Z" fill="white" stroke="black"/>
<path d="M58.5459 83.0909L72.7977 74.8642V91.3175L58.5459 99.5442V83.0909Z" fill="#69D6D4" stroke="black"/>
<path d="M42.7948 74.5751L57.0464 82.8017L42.7948 91.0263L28.5432 82.7997L42.7948 74.5751Z" fill="white" stroke="black"/>
<path d="M42.2948 108.346L28.043 100.119V83.6659L42.2948 91.8945V108.346Z" fill="white" stroke="black"/>
<path d="M43.2949 91.8944L57.5467 83.6677V100.121L43.2949 108.346V91.8944Z" fill="white" stroke="black"/>
<path d="M89.6863 88.7309L103.936 96.9575L89.6864 105.182L75.4348 96.9554L89.6863 88.7309Z" fill="white" stroke="black"/>
<path d="M89.1864 122.501L74.9346 114.275V97.8216L89.1864 106.05V122.501Z" fill="white" stroke="black"/>
<path d="M90.1866 106.05L104.436 97.8238V114.277L90.1847 122.502L90.1866 106.05Z" fill="white" stroke="black"/>
<path d="M73.2996 74.5749L87.5514 82.8035L73.2997 91.0281L59.048 82.8015L73.2996 74.5749Z" fill="white" stroke="black"/>
<path d="M72.7997 108.347L58.5479 100.121V83.6676L72.7997 91.8963V108.347Z" fill="white" stroke="black"/>
<path d="M73.799 91.8961L88.0508 83.6694V100.123L73.797 108.347L73.799 91.8961Z" fill="white" stroke="black"/>
<path d="M27.543 82.7995L73.2984 56.3918" stroke="white" stroke-width="0.136667" stroke-miterlimit="10"/>
<path d="M42.7949 91.6055L88.5504 65.1958" stroke="white" stroke-width="0.136667" stroke-miterlimit="10"/>
<path d="M73.2986 91.6057L42.7949 73.9978" stroke="white" stroke-width="0.136667" stroke-miterlimit="10"/>
<path d="M88.5505 82.8015L58.0469 65.1936" stroke="white" stroke-width="0.136667" stroke-miterlimit="10"/>
<rect x="-8.9407e-08" y="0.5" width="17.4487" height="17.4487" transform="matrix(0.866025 0.5 -0.866026 0.5 27.2533 19.2202)" fill="white" stroke="black"/>
<rect x="0.433013" y="0.75" width="17.4487" height="17.4487" transform="matrix(0.866025 0.5 -1.96876e-07 1 10.8998 9.52959)" fill="white" stroke="black"/>
<rect x="0.433013" y="0.25" width="17.4487" height="17.4487" transform="matrix(0.866025 -0.5 -1.52815e-07 1 26.8637 19.1867)" fill="white" stroke="black"/>
<rect x="-8.9407e-08" y="0.5" width="17.4487" height="17.4487" transform="matrix(0.866025 0.5 -0.866026 0.5 27.2533 0.771484)" fill="white" stroke="black"/>
<rect x="0.433013" y="0.75" width="12.4309" height="12.4309" transform="matrix(0.866025 0.5 -1.96876e-07 1 12.6156 12.3543)" fill="#59770F" stroke="black"/>
<rect x="-8.9407e-08" y="0.5" width="16.61" height="16.61" transform="matrix(0.866025 0.5 -0.866026 0.5 58.4779 106.379)" fill="white" stroke="black"/>
<rect x="0.433013" y="0.75" width="16.61" height="16.61" transform="matrix(0.866025 0.5 -1.96876e-07 1 42.852 97.1077)" fill="white" stroke="black"/>
<rect x="0.433013" y="0.75" width="12.4309" height="12.4309" transform="matrix(0.866025 0.5 -1.96876e-07 1 44.6606 100.242)" fill="#73B200" stroke="black"/>
<rect x="0.433013" y="0.25" width="16.61" height="16.61" transform="matrix(0.866025 -0.5 -1.52815e-07 1 58.0902 106.346)" fill="white" stroke="black"/>
<rect x="-8.9407e-08" y="0.5" width="16.61" height="16.61" transform="matrix(0.866025 0.5 -0.866026 0.5 58.4779 88.7693)" fill="white" stroke="black"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-2e2l2v`,
                                          "data-framer-name": `Group 55330`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 26,
                                          intrinsicWidth: 42,
                                          svg: `<svg width="42" height="26" viewBox="0 0 42 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.0955 23.8544V24.7042L1.2541 13.3276V12.3985L21.0955 23.8544Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M21.3955 23.3347L1.55408 11.8787L21.3955 0.42283L41.2368 11.8787L21.3955 23.3347Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M41.5369 13.3276L21.6955 24.7042V23.8544L41.5369 12.3985V13.3276Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-10srqy2`,
                                          "data-framer-name": `Group 55341`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 20,
                                          intrinsicWidth: 32,
                                          svg: `<svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6117 18.3568V18.8361L0.684766 10.2774V9.73838L15.6117 18.3568Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M15.9117 17.8374L0.984746 9.219L15.9117 0.600564L30.8386 9.219L15.9117 17.8374Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M31.139 10.2774L16.2121 18.8361V18.3568L31.139 9.73838V10.2774Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-qfw6ke`,
                                          "data-framer-name": `Group 55340`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 25,
                                          intrinsicWidth: 40,
                                          svg: `<svg width="40" height="25" viewBox="0 0 40 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5343 23.022V23.7827L0.874219 13.0835V12.2481L19.5343 23.022Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M19.8343 22.5026L1.1742 11.7287L19.8343 0.954813L38.4945 11.7287L19.8343 22.5026Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M38.7951 13.0835L20.135 23.7827V23.022L38.7951 12.2481V13.0835Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-10d1vjd`,
                                          "data-framer-name": `Group 55335`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 49,
                                          intrinsicWidth: 82,
                                          svg: `<svg width="82" height="49" viewBox="0 0 82 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60.5935 24.2141V25.0638L40.7521 13.6872V12.7582L60.5935 24.2141Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M60.8935 23.6943L41.0521 12.2384L60.8935 0.782449L80.7349 12.2384L60.8935 23.6943Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M81.0349 13.6872L61.1936 25.0638V24.2141L81.0349 12.7582V13.6872Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M20.9792 47.3371V48.1868L1.13789 36.8103V35.8812L20.9792 47.3371Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M21.2792 46.8171L1.43787 35.3612L21.2792 23.9053L41.1206 35.3612L21.2792 46.8171Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M41.4207 36.8103L21.5793 48.1868V47.3371L41.4207 35.8812V36.8103Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-1dvhyai`,
                                          "data-framer-name": `Group 55339`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 59,
                                          intrinsicWidth: 148,
                                          svg: `<svg width="148" height="59" viewBox="0 0 148 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.09676 35.4333C1.6819 35.096 2.62475 35.0986 3.20478 35.4359C3.7848 35.7732 3.78224 36.3174 3.1971 36.6547C2.61453 36.9894 1.67423 36.992 1.09165 36.6547C0.511625 36.3174 0.51674 35.7681 1.09676 35.4333Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M5.19342 37.7893C5.77855 37.452 6.72141 37.4546 7.30144 37.7918C7.88146 38.1291 7.87891 38.6734 7.29378 39.0107C6.7112 39.3454 5.77088 39.3479 5.18831 39.0107C4.60828 38.6734 4.61084 38.124 5.19342 37.7893Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M9.2761 40.1374C9.86123 39.8001 10.8041 39.8027 11.3841 40.14C11.9641 40.4773 11.9641 41.0241 11.3816 41.3614C10.799 41.6961 9.85358 41.6961 9.27356 41.3588C8.69098 41.0215 8.69352 40.4722 9.2761 40.1374Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M13.3572 42.4956C13.9423 42.1583 14.8852 42.1609 15.4652 42.4981C16.0452 42.8354 16.0452 43.3822 15.4626 43.7195C14.8801 44.0542 13.9346 44.0542 13.3546 43.717C12.772 43.3797 12.7772 42.8303 13.3572 42.4956Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M17.4451 44.8647C18.0302 44.5274 18.973 44.53 19.5531 44.8673C20.1331 45.2046 20.1331 45.7514 19.5505 46.0887C18.9679 46.4234 18.0225 46.4234 17.4425 46.0861C16.8599 45.7488 16.8625 45.1995 17.4451 44.8647Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M21.534 47.2307C22.1191 46.8934 23.0619 46.896 23.642 47.2332C24.222 47.5705 24.222 48.1173 23.6394 48.4546C23.0568 48.7893 22.1114 48.7893 21.5314 48.4521C20.9514 48.1148 20.9539 47.568 21.534 47.2307Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M25.6316 49.5915C26.2167 49.2542 27.1596 49.2568 27.7396 49.5941C28.3196 49.9314 28.3196 50.4782 27.737 50.8155C27.1545 51.1502 26.209 51.1502 25.629 50.8129C25.0464 50.4756 25.049 49.9263 25.6316 49.5915Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M29.6863 51.9551C30.2714 51.6178 31.2143 51.6203 31.7943 51.9576C32.3743 52.2949 32.3743 52.8417 31.7917 53.179C31.2092 53.5137 30.2638 53.5137 29.6837 53.1764C29.1012 52.8366 29.1063 52.2898 29.6863 51.9551Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M33.7979 54.2881C34.383 53.9508 35.3208 53.9508 35.9033 54.2881C36.4834 54.6254 36.4834 55.1722 35.9008 55.5095C35.3182 55.8442 34.3728 55.8442 33.7928 55.5069C33.2076 55.1696 33.2153 54.6228 33.7979 54.2881Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M37.8887 56.7054C38.4739 56.3681 39.4116 56.3681 39.9942 56.7054C40.5742 57.0426 40.5742 57.5894 39.9916 57.9267C39.4091 58.2615 38.4637 58.2615 37.8836 57.9242C37.301 57.5869 37.3087 57.0401 37.8887 56.7054Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M70.0873 44.8482C70.6699 44.5135 71.6153 44.5135 72.1927 44.8482C72.7728 45.1855 72.7676 45.7323 72.1851 46.067C71.5999 46.4043 70.6622 46.4043 70.0796 46.067C69.5021 45.7323 69.5021 45.1855 70.0873 44.8482Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M65.9946 47.2298C66.5797 46.8925 67.5226 46.8951 68.1 47.2298C68.68 47.5671 68.6775 48.1113 68.0924 48.4486C67.5098 48.7833 66.5695 48.7859 65.9869 48.4486C65.412 48.1113 65.4145 47.5645 65.9946 47.2298Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M61.9203 49.5777C62.5029 49.243 63.4483 49.243 64.0257 49.5777C64.6058 49.915 64.6007 50.4618 64.0181 50.7965C63.4329 51.1338 62.4952 51.1338 61.9126 50.7965C61.3352 50.4618 61.3351 49.9175 61.9203 49.5777Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M57.8256 51.9461C58.4107 51.6088 59.3536 51.6114 59.931 51.9461C60.5111 52.2834 60.5085 52.8276 59.9234 53.1649C59.3408 53.4996 58.4005 53.5022 57.8179 53.1649C57.2404 52.8276 57.243 52.2808 57.8256 51.9461Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M53.7367 54.2996C54.3193 53.9649 55.2647 53.9649 55.8422 54.2996C56.4222 54.6369 56.4171 55.1837 55.8345 55.5184C55.2494 55.8557 54.3116 55.8557 53.729 55.5184C53.1516 55.1837 53.1516 54.6369 53.7367 54.2996Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M49.6468 56.6658C50.2294 56.3311 51.1748 56.3311 51.7523 56.6658C52.3323 57.0031 52.3272 57.5499 51.7446 57.8847C51.1595 58.2219 50.2218 58.2219 49.6392 57.8847C49.0617 57.5499 49.0617 57.0031 49.6468 56.6658Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M95.0961 30.1866C95.6786 29.8519 96.6241 29.8519 97.2015 30.1866C97.7815 30.5239 97.7764 31.0707 97.1939 31.4054C96.6087 31.7427 95.671 31.7427 95.0884 31.4054C94.5109 31.0707 94.5109 30.5239 95.0961 30.1866Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M91.0024 32.5682C91.5875 32.2309 92.5304 32.2334 93.1078 32.5682C93.6879 32.9054 93.6853 33.4497 93.1002 33.787C92.5176 34.1217 91.5773 34.1243 90.9947 33.787C90.4198 33.4497 90.4224 32.9029 91.0024 32.5682Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M86.9281 34.9163C87.5107 34.5816 88.4561 34.5816 89.0335 34.9163C89.6136 35.2536 89.6085 35.8004 89.0259 36.1351C88.4408 36.4724 87.503 36.4724 86.9204 36.1351C86.343 35.8004 86.343 35.2562 86.9281 34.9163Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M82.8334 37.2847C83.4185 36.9474 84.3614 36.95 84.9389 37.2847C85.5189 37.622 85.5163 38.1663 84.9312 38.5035C84.3486 38.8383 83.4083 38.8408 82.8257 38.5035C82.2483 38.1663 82.2508 37.6194 82.8334 37.2847Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M78.7455 39.6385C79.3281 39.3038 80.2735 39.3038 80.8509 39.6385C81.431 39.9758 81.4259 40.5226 80.8433 40.8573C80.2581 41.1946 79.3204 41.1946 78.7378 40.8573C78.1603 40.5226 78.1603 39.9758 78.7455 39.6385Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M74.6547 42.0042C75.2372 41.6695 76.1826 41.6695 76.7601 42.0042C77.3401 42.3415 77.335 42.8883 76.7524 43.223C76.1673 43.5603 75.2296 43.5603 74.647 43.223C74.0695 42.8883 74.0695 42.3415 74.6547 42.0042Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M119.978 15.1724C120.56 14.8377 121.506 14.8377 122.083 15.1724C122.663 15.5097 122.658 16.0565 122.076 16.3913C121.491 16.7285 120.553 16.7285 119.97 16.3913C119.393 16.0565 119.393 15.5097 119.978 15.1724Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M115.884 17.554C116.469 17.2167 117.412 17.2193 117.99 17.554C118.57 17.8913 118.567 18.4355 117.982 18.7728C117.399 19.1075 116.459 19.1101 115.877 18.7728C115.302 18.4355 115.304 17.8887 115.884 17.554Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M111.81 19.9019C112.393 19.5672 113.338 19.5672 113.915 19.9019C114.495 20.2392 114.49 20.786 113.908 21.1207C113.323 21.458 112.385 21.458 111.802 21.1207C111.225 20.786 111.225 20.2418 111.81 19.9019Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M107.715 22.2706C108.3 21.9333 109.243 21.9358 109.821 22.2706C110.401 22.6078 110.398 23.1521 109.813 23.4894C109.23 23.8241 108.29 23.8267 107.708 23.4894C107.13 23.1521 107.133 22.6053 107.715 22.2706Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M103.627 24.6241C104.21 24.2894 105.155 24.2894 105.733 24.6241C106.313 24.9614 106.308 25.5082 105.725 25.8429C105.14 26.1802 104.202 26.1802 103.62 25.8429C103.042 25.5082 103.042 24.9614 103.627 24.6241Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M99.5365 26.9901C100.119 26.6553 101.064 26.6553 101.642 26.9901C102.222 27.3273 102.217 27.8742 101.634 28.2089C101.049 28.5462 100.111 28.5462 99.5288 28.2089C98.9514 27.8742 98.9514 27.3273 99.5365 26.9901Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M144.661 1.15852C145.244 0.823789 146.189 0.823789 146.767 1.15852C147.347 1.4958 147.342 2.04261 146.759 2.37734C146.174 2.71462 145.236 2.71462 144.654 2.37734C144.076 2.04261 144.076 1.4958 144.661 1.15852Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M140.568 3.54009C141.153 3.20281 142.096 3.20536 142.673 3.54009C143.253 3.87737 143.251 4.42162 142.666 4.7589C142.083 5.09363 141.143 5.09619 140.56 4.7589C139.985 4.42162 139.988 3.87482 140.568 3.54009Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M136.494 5.88825C137.076 5.55353 138.022 5.55353 138.599 5.88825C139.179 6.22553 139.174 6.77234 138.591 7.10707C138.006 7.44435 137.068 7.44435 136.486 7.10707C135.908 6.77234 135.908 6.22809 136.494 5.88825Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M132.4 8.25689C132.985 7.9196 133.928 7.92216 134.505 8.25689C135.085 8.59417 135.083 9.13843 134.498 9.47571C133.915 9.81044 132.975 9.81299 132.392 9.47571C131.815 9.13843 131.817 8.59161 132.4 8.25689Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M128.312 10.6104C128.894 10.2757 129.84 10.2757 130.417 10.6104C130.997 10.9477 130.992 11.4945 130.41 11.8292C129.825 12.1665 128.887 12.1665 128.304 11.8292C127.727 11.4945 127.727 10.9477 128.312 10.6104Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M124.22 12.9761C124.803 12.6414 125.748 12.6414 126.326 12.9761C126.906 13.3134 126.9 13.8602 126.318 14.195C125.733 14.5322 124.795 14.5322 124.212 14.195C123.635 13.8602 123.635 13.3134 124.22 12.9761Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-1dmmwef`,
                                          "data-framer-name": `Group`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 33,
                                          intrinsicWidth: 58,
                                          svg: `<svg width="58" height="33" viewBox="0 0 58 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.34335 31.3977C1.90549 31.0732 2.83047 31.0809 3.41305 31.4182C3.99052 31.7529 4.00329 32.292 3.44115 32.6165C2.87646 32.9436 1.94638 32.9334 1.36891 32.5987C0.788888 32.2588 0.778658 31.7222 1.34335 31.3977Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M5.42929 29.0342C5.99143 28.7097 6.91641 28.7174 7.49898 29.0546C8.07645 29.3894 8.08923 29.9285 7.52709 30.253C6.9624 30.5801 6.03232 30.5699 5.45485 30.2351C4.87483 29.8953 4.8646 29.3587 5.42929 29.0342Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M9.52011 26.6729C10.0822 26.3484 11.0072 26.356 11.5898 26.6933C12.1673 27.028 12.18 27.5672 11.6179 27.8917C11.0532 28.2188 10.1231 28.2085 9.54567 27.8738C8.96565 27.534 8.95542 26.9974 9.52011 26.6729Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M17.6988 21.9483C18.2609 21.6238 19.1859 21.6314 19.7685 21.9687C20.3459 22.3034 20.3587 22.8426 19.7966 23.1671C19.2319 23.4941 18.3018 23.4839 17.7243 23.1492C17.1418 22.8119 17.1315 22.2753 17.6988 21.9483Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M25.8697 17.229C26.4318 16.9045 27.3568 16.9122 27.9394 17.2495C28.5168 17.5842 28.5296 18.1233 27.9675 18.4478C27.4028 18.7749 26.4727 18.7647 25.8952 18.43C25.3127 18.0901 25.3024 17.5535 25.8697 17.229Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M21.7818 19.5825C22.3439 19.258 23.2689 19.2657 23.8515 19.603C24.429 19.9377 24.4417 20.4769 23.8796 20.8014C23.3149 21.1284 22.3848 21.1182 21.8074 20.7835C21.2248 20.4462 21.2145 19.9096 21.7818 19.5825Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M29.9564 14.8604C30.5211 14.5333 31.4486 14.541 32.0286 14.8783C32.6061 15.213 32.6188 15.7521 32.0542 16.0792C31.492 16.4037 30.5619 16.3935 29.9845 16.0588C29.4045 15.7215 29.3942 15.1849 29.9564 14.8604Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M13.5902 24.3045C14.1753 23.9672 15.1131 23.9672 15.6957 24.3045C16.2731 24.6392 16.2731 25.186 15.688 25.5233C15.1054 25.858 14.16 25.858 13.5826 25.5233C13.0025 25.186 13.0076 24.6392 13.5902 24.3045Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M42.226 7.78031C42.8111 7.44302 43.7488 7.44302 44.3314 7.78031C44.9089 8.11503 44.9089 8.66184 44.3238 8.99912C43.7412 9.33385 42.7958 9.33385 42.2183 8.99912C41.6383 8.66184 41.6434 8.11759 42.226 7.78031Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M54.4877 0.704622C55.0728 0.36734 56.0106 0.36734 56.5931 0.704622C57.1706 1.03935 57.1706 1.58615 56.5855 1.92344C56.0029 2.25816 55.0575 2.25816 54.48 1.92344C53.9 1.58615 53.9051 1.03935 54.4877 0.704622Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M50.389 3.05789C50.9742 2.72061 51.9119 2.72061 52.4945 3.05789C53.072 3.39262 53.072 3.93942 52.4868 4.27671C51.9043 4.61143 50.9588 4.61143 50.3814 4.27671C49.8014 3.94198 49.8065 3.39518 50.389 3.05789Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M34.0574 12.5097C34.6425 12.1725 35.5853 12.175 36.1654 12.5123C36.7454 12.8496 36.7454 13.3964 36.1628 13.7337C35.5802 14.0684 34.6348 14.0684 34.0548 13.7311C33.4722 13.3938 33.4748 12.847 34.0574 12.5097Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M38.1199 10.1565C38.705 9.81919 39.6479 9.82175 40.2279 10.159C40.8079 10.4963 40.8079 11.0431 40.2253 11.3804C39.6428 11.7151 38.6974 11.7151 38.1173 11.3778C37.5347 11.0406 37.5398 10.4938 38.1199 10.1565Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M46.2859 5.40867C46.871 5.07139 47.8139 5.07394 48.3939 5.41122C48.9739 5.74851 48.9739 6.29531 48.3913 6.63259C47.8087 6.96732 46.8633 6.96733 46.2833 6.63004C45.7007 6.29276 45.7033 5.74596 46.2859 5.40867Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-106woav`,
                                          "data-framer-name": `Group`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 33,
                                          intrinsicWidth: 57,
                                          svg: `<svg width="57" height="33" viewBox="0 0 57 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25839 30.938C1.82053 30.6135 2.74551 30.6212 3.32809 30.9585C3.90555 31.2932 3.91833 31.8323 3.35619 32.1568C2.7915 32.4839 1.86142 32.4737 1.28395 32.1389C0.703927 31.7991 0.693697 31.2625 1.25839 30.938Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M5.34433 28.5747C5.90646 28.2502 6.83145 28.2579 7.41402 28.5952C7.99149 28.9299 8.00426 29.469 7.44213 29.7936C6.87743 30.1206 5.94736 30.1104 5.36989 29.7757C4.78986 29.4358 4.77963 28.8992 5.34433 28.5747Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M9.43417 26.2134C9.99631 25.8889 10.9213 25.8966 11.5039 26.2338C12.0813 26.5686 12.0941 27.1077 11.532 27.4322C10.9673 27.7593 10.0372 27.7491 9.45973 27.4143C8.87971 27.0745 8.86948 26.5379 9.43417 26.2134Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M17.6138 21.489C18.176 21.1645 19.1009 21.1722 19.6835 21.5095C20.261 21.8442 20.2738 22.3834 19.7116 22.7079C19.1469 23.0349 18.2169 23.0247 17.6394 22.69C17.0568 22.3527 17.0466 21.8161 17.6138 21.489Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M25.7837 16.7696C26.3459 16.445 27.2709 16.4527 27.8534 16.79C28.4309 17.1247 28.4437 17.6639 27.8815 17.9884C27.3169 18.3154 26.3868 18.3052 25.8093 17.9705C25.2267 17.6306 25.2165 17.0941 25.7837 16.7696Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M21.6959 19.1228C22.258 18.7983 23.183 18.806 23.7655 19.1433C24.343 19.478 24.3558 20.0171 23.7937 20.3416C23.229 20.6687 22.2989 20.6585 21.7214 20.3238C21.1388 19.9865 21.1286 19.4499 21.6959 19.1228Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M29.8714 14.4009C30.4361 14.0739 31.3636 14.0815 31.9436 14.4188C32.5211 14.7535 32.5339 15.2927 31.9692 15.6197C31.4071 15.9442 30.477 15.934 29.8995 15.5993C29.3195 15.262 29.3093 14.7254 29.8714 14.4009Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M13.5062 23.8448C14.0914 23.5075 15.0291 23.5075 15.6117 23.8448C16.1892 24.1795 16.1892 24.7263 15.604 25.0636C15.0214 25.3983 14.076 25.3983 13.4986 25.0636C12.9185 24.7263 12.9236 24.1795 13.5062 23.8448Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M42.1429 7.32059C42.7281 6.98331 43.6658 6.98331 44.2484 7.32059C44.8259 7.65532 44.8259 8.20212 44.2407 8.5394C43.6582 8.87413 42.7128 8.87413 42.1353 8.5394C41.5553 8.20212 41.5604 7.65787 42.1429 7.32059Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M54.4027 0.245393C54.9878 -0.091889 55.9256 -0.091889 56.5082 0.245393C57.0856 0.580121 57.0856 1.12692 56.5005 1.46421C55.9179 1.79893 54.9725 1.79893 54.3951 1.46421C53.815 1.12692 53.8201 0.580121 54.4027 0.245393Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M50.3051 2.59866C50.8902 2.26138 51.8279 2.26138 52.4105 2.59866C52.988 2.93339 52.988 3.4802 52.4029 3.81748C51.8203 4.15221 50.8749 4.15221 50.2974 3.81748C49.7174 3.48275 49.7225 2.93595 50.3051 2.59866Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M33.9714 12.0505C34.5566 11.7132 35.4994 11.7158 36.0794 12.0531C36.6595 12.3904 36.6595 12.9372 36.0769 13.2744C35.4943 13.6092 34.5489 13.6092 33.9689 13.2719C33.3863 12.9346 33.3888 12.3878 33.9714 12.0505Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M38.0349 9.697C38.62 9.35972 39.5629 9.36227 40.1429 9.69956C40.7229 10.0368 40.723 10.5836 40.1404 10.9209C39.5578 11.2557 38.6124 11.2557 38.0324 10.9184C37.4498 10.5811 37.4549 10.0343 38.0349 9.697Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M46.2019 4.94944C46.787 4.61216 47.7299 4.61471 48.3099 4.95199C48.8899 5.28928 48.8899 5.83608 48.3073 6.17336C47.7248 6.50809 46.7794 6.5081 46.1993 6.17081C45.6168 5.83353 45.6193 5.28673 46.2019 4.94944Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-a32t6j`,
                                          "data-framer-name": `Group 1321315554`,
                                          children: [
                                            /*#__PURE__*/ l(`div`, {
                                              className: `framer-xbrzer`,
                                              "data-framer-name": `Group 55320`,
                                              children: [
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-jtalsm`,
                                                  "data-framer-name": `Rectangle 5`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 14,
                                                  intrinsicWidth: 24,
                                                  svg: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-8.9407e-08" y="0.5" width="12.4303" height="12.4303" transform="matrix(0.866025 0.5 -0.866026 0.5 12.7201 0.666992)" fill="white" stroke="black"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-8vzp7n`,
                                                  "data-framer-name": `Rectangle 3`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 21,
                                                  intrinsicWidth: 13,
                                                  svg: `<svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.433013" y="0.75" width="12.4303" height="12.4303" transform="matrix(0.866025 0.5 -1.96876e-07 1 0.714263 0.485642)" fill="#F4F2EA" stroke="black"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-zxt65j`,
                                                  "data-framer-name": `Rectangle 6`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 16,
                                                  intrinsicWidth: 9,
                                                  svg: `<svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="10.2431" height="10.2431" transform="matrix(0.866025 0.5 -1.96876e-07 1 0.0361328 0.0925293)" fill="#F4F2EA"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-1adl07l`,
                                                  "data-framer-name": `Rectangle 4`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 21,
                                                  intrinsicWidth: 12,
                                                  svg: `<svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.433013" y="0.25" width="12.4303" height="12.4303" transform="matrix(0.866025 -0.5 -1.52815e-07 1 0.335356 7.6335)" fill="#F4F2EA" stroke="black"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-nlpcet`,
                                                  "data-framer-name": `Rectangle 2`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 15,
                                                  intrinsicWidth: 24,
                                                  svg: `<svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-8.9407e-08" y="0.5" width="12.4303" height="12.4303" transform="matrix(0.866025 0.5 -0.866026 0.5 12.7201 1.23706)" fill="white" stroke="black"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ l(`div`, {
                                              className: `framer-11ouy4o`,
                                              "data-framer-name": `Group`,
                                              children: [
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-jezr5x`,
                                                  "data-framer-name": `Vector`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 17,
                                                  intrinsicWidth: 9,
                                                  svg: `<svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.600195 11.1236V1.5718L2.24433 0.62231L7.97674 3.93277V15.3813L0.600195 11.1236Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.8"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-l9lgl5`,
                                                  "data-framer-name": `Code`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 8,
                                                  intrinsicWidth: 6,
                                                  svg: `<svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4345_8352)">
<path d="M5.14817 5.29542L4.19553 5.84542L4.00364 5.51306L4.76303 5.07306L4.00364 3.75618L4.19553 3.6454L5.14817 5.29542Z" fill="#050B14"/>
<path d="M1.06543 2.93824L2.01807 2.38824L2.20996 2.7206L1.45057 3.1606L2.20996 4.47748L2.01807 4.58826L1.06543 2.93824Z" fill="#050B14"/>
<path d="M3.32984 2.6743L2.61939 5.32573L2.8823 5.55887L3.59275 2.90744L3.32984 2.6743Z" fill="#050B14"/>
</g>
<defs>
<clipPath id="clip0_4345_8352">
<rect width="5.02863" height="5.02863" fill="white" transform="matrix(0.866025 0.5 0 1 0.929688 0.345459)"/>
</clipPath>
</defs>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-1e6xm58`,
                                                  "data-framer-name": `Vector`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 3,
                                                  intrinsicWidth: 3,
                                                  svg: `<svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.24433 0.1604V2.52137L0.200195 1.34089L2.24433 0.1604Z" fill="#272727"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-1fr32ob`,
                                          "data-framer-name": `Group`,
                                          children: [
                                            /*#__PURE__*/ c(h, {
                                              className: `framer-a36b24`,
                                              "data-framer-name": `Vector`,
                                              fill: `rgba(0,0,0,1)`,
                                              intrinsicHeight: 15,
                                              intrinsicWidth: 25,
                                              svg: `<svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3925 1.21235L23.4823 7.61531L12.3926 14.0152L1.30288 7.61373L12.3925 1.21235Z" fill="white" stroke="#272727"/>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ c(h, {
                                              className: `framer-1sb4bk2`,
                                              "data-framer-name": `Vector`,
                                              fill: `rgba(0,0,0,1)`,
                                              intrinsicHeight: 22,
                                              intrinsicWidth: 13,
                                              svg: `<svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8926 20.6842L0.802734 14.2828V1.48006L11.8926 7.88309V20.6842Z" fill="#F4F2EA" stroke="#272727"/>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ c(h, {
                                              className: `framer-1mwrjnk`,
                                              "data-framer-name": `Vector`,
                                              fill: `rgba(0,0,0,1)`,
                                              intrinsicHeight: 22,
                                              intrinsicWidth: 13,
                                              svg: `<svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.892266 7.88317L11.9821 1.48166V14.2844L0.890729 20.6844L0.892266 7.88317Z" fill="#F4F2EA" stroke="#272727"/>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(`div`, {
                                              className: `framer-1kz6rur`,
                                              "data-framer-name": `Group`,
                                              children: [
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-fv7vpr`,
                                                  "data-framer-name": `Vector`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 17,
                                                  intrinsicWidth: 9,
                                                  svg: `<svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.692383 11.0678V1.63148L2.23652 0.739741L7.86893 3.99245V15.21L0.692383 11.0678Z" fill="#F4F2EA" stroke="#272727"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-196dhyj`,
                                                  "data-framer-name": `Vector`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 3,
                                                  intrinsicWidth: 3,
                                                  svg: `<svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.23652 0.162354V2.52333L0.192383 1.34284L2.23652 0.162354Z" fill="#272727"/>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ c(h, {
                                                  className: `framer-1tclppk`,
                                                  "data-framer-name": `Data-table`,
                                                  fill: `rgba(0,0,0,1)`,
                                                  intrinsicHeight: 8,
                                                  intrinsicWidth: 5,
                                                  svg: `<svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4345_8361)">
<path d="M1.70041 4.09948L1.15604 3.78519V4.09948L1.70041 4.41377V4.09948Z" fill="#050B14"/>
<path d="M2.51696 4.57091L1.97259 4.25662V4.57091L2.51696 4.8852V4.57091Z" fill="#050B14"/>
<path d="M1.70041 3.4709L1.15604 3.15661V3.4709L1.70041 3.78519V3.4709Z" fill="#050B14"/>
<path d="M2.51696 5.19949L1.97259 4.8852V5.19949L2.51696 5.51378V5.19949Z" fill="#050B14"/>
<path d="M3.3335 4.41377L2.78914 4.09948V4.41377L3.3335 4.72806V4.41377Z" fill="#050B14"/>
<path d="M3.3335 5.67093L2.78914 5.35664V5.67093L3.3335 5.98522V5.67093Z" fill="#050B14"/>
<path d="M3.74178 2.92089L0.747769 1.1923C0.675609 1.15074 0.606431 1.14395 0.555406 1.17341C0.504381 1.20287 0.475676 1.26617 0.475586 1.34945V4.80663C0.475676 4.89001 0.504381 4.98646 0.555406 5.07484C0.606431 5.16321 0.675609 5.2363 0.747769 5.27807L3.74178 7.00666C3.81394 7.04821 3.88312 7.05501 3.93414 7.02555C3.98517 6.99609 4.01387 6.93278 4.01396 6.84951V3.39233C4.01387 3.30895 3.98517 3.2125 3.93414 3.12412C3.88312 3.03574 3.81394 2.96266 3.74178 2.92089ZM3.74178 3.23518V3.86376L0.747769 2.13517V1.50659L3.74178 3.23518ZM0.747769 4.96378V2.44946L3.74178 4.17805V6.69237L0.747769 4.96378Z" fill="#050B14"/>
</g>
<defs>
<clipPath id="clip0_4345_8361">
<rect width="5.02863" height="5.02863" fill="white" transform="matrix(0.866025 0.5 0 1 0.0673828 0.328125)"/>
</clipPath>
</defs>
</svg>
`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-qagm7z`,
                                          "data-framer-name": `XMLID_70_`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 192,
                                          intrinsicWidth: 69,
                                          svg: `<svg width="69" height="192" viewBox="0 0 69 192" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.49" fill-rule="evenodd" clip-rule="evenodd" d="M0.917969 0.731201V170.625L35.5083 191.14C35.5083 190.996 68.6677 170.625 68.6677 170.625V0.731249L0.917969 0.731201Z" fill="url(#paint0_linear_4345_8362)" fill-opacity="0.5"/>
<defs>
<linearGradient id="paint0_linear_4345_8362" x1="35.5095" y1="191.136" x2="35.5095" y2="35.2109" gradientUnits="userSpaceOnUse">
<stop stop-color="#B2ED1D"/>
<stop offset="0.485" stop-color="#BFF043" stop-opacity="0.75"/>
<stop offset="0.6866" stop-color="#CCF368" stop-opacity="0.48"/>
<stop offset="0.9905" stop-color="#E5F9B4" stop-opacity="0.01"/>
<stop offset="1" stop-color="#F3F3F3" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-oxr4ro`,
                                          "data-framer-name": `Rectangle 8`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 31,
                                          intrinsicWidth: 52,
                                          svg: `<svg width="52" height="31" viewBox="0 0 52 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.10352 30.1187L51.5589 0.988245L50.7178 0.502678L0.262489 29.6331L1.10352 30.1187Z" fill="#73B200"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-r619zs`,
                                          "data-framer-name": `Group 55336`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 26,
                                          intrinsicWidth: 42,
                                          svg: `<svg width="42" height="26" viewBox="0 0 42 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.864 24.5371V25.3868L1.02266 14.0102V13.0811L20.864 24.5371Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M21.164 24.0176L1.32269 12.5618L21.164 1.10836L41.0053 12.5618L21.164 24.0176Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M41.3054 14.0102L21.4641 25.3868V24.5371L41.3054 13.0811V14.0102Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-6yf1br`,
                                          "data-framer-name": `Group 1321315557`,
                                          children: [
                                            /*#__PURE__*/ c(h, {
                                              className: `framer-7qsxh5`,
                                              "data-framer-name": `Group`,
                                              fill: `rgba(0,0,0,1)`,
                                              intrinsicHeight: 26,
                                              intrinsicWidth: 42,
                                              svg: `<svg width="42" height="26" viewBox="0 0 42 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.864 24.5371V25.3868L1.02266 14.0102V13.0811L20.864 24.5371Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M21.164 24.0174L1.32269 12.5615L21.164 1.10811L41.0053 12.5615L21.164 24.0174Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M41.3054 14.0102L21.4641 25.3868V24.5371L41.3054 13.0811V14.0102Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ c(h, {
                                              className: `framer-1kubvxe`,
                                              "data-framer-name": `Group 1321315560`,
                                              fill: `rgba(0,0,0,1)`,
                                              intrinsicHeight: 34,
                                              intrinsicWidth: 24,
                                              svg: `<svg width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8.9407e-08" y="0.5" width="12.4303" height="12.4303" transform="matrix(-0.866025 0.5 0.866026 0.5 11.651 20.355)" fill="white" stroke="black"/>
<rect x="-0.433013" y="0.75" width="12.4303" height="12.4303" transform="matrix(-0.866025 0.5 1.96876e-07 1 22.9068 13.6064)" fill="#F4F2EA" stroke="black"/>
<rect width="10.2431" height="10.2431" transform="matrix(-0.866025 0.5 1.96876e-07 1 22.334 15.7803)" fill="#F4F2EA"/>
<rect x="-0.433013" y="0.25" width="12.4303" height="12.4303" transform="matrix(-0.866025 -0.5 1.52815e-07 1 11.2857 19.8885)" fill="#F4F2EA" stroke="black"/>
<rect x="8.9407e-08" y="0.5" width="12.4303" height="12.4303" transform="matrix(-0.866025 0.5 0.866026 0.5 11.651 6.9248)" fill="white" stroke="black"/>
<path d="M15.7738 11.8116V2.25979L14.1297 1.3103L8.39729 4.62076V16.0693L15.7738 11.8116Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.8"/>
<g clip-path="url(#clip0_4345_8376)">
<path d="M10.2259 9.98365L11.1785 10.5337L11.3704 10.2013L10.611 9.76129L11.3704 8.44441L11.1785 8.33363L10.2259 9.98365Z" fill="#050B14"/>
<path d="M14.3086 7.62648L13.356 7.07647L13.1641 7.40883L13.9235 7.84884L13.1641 9.16571L13.356 9.2765L14.3086 7.62648Z" fill="#050B14"/>
<path d="M12.0442 7.36253L12.7546 10.014L12.4917 10.2471L11.7813 7.59567L12.0442 7.36253Z" fill="#050B14"/>
</g>
<path d="M14.1297 0.848389V3.20936L16.1738 2.02888L14.1297 0.848389Z" fill="#272727"/>
<defs>
<clipPath id="clip0_4345_8376">
<rect width="5.02863" height="5.02863" fill="white" transform="matrix(-0.866025 0.5 0 1 14.4453 5.03369)"/>
</clipPath>
</defs>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-uaqvuw`,
                                          "data-framer-name": `Group 1321315556`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 30,
                                          intrinsicWidth: 42,
                                          svg: `<svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.8816 28.5234V29.3731L1.04023 17.9966V17.0675L20.8816 28.5234Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M21.1816 28.004L1.34026 16.5481L21.1816 5.09469L41.0229 16.5481L21.1816 28.004Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M41.323 17.9966L21.4816 29.3731V28.5234L41.323 17.0675V17.9966Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M21.2705 2.91186L34.7363 10.6755L21.0878 18.4052L7.62688 10.6754L21.2705 2.91186Z" fill="white" stroke="black"/>
<path d="M34.7363 17.4059L21.0827 25.1556V18.4391L34.7363 10.6755V17.4059Z" fill="#F4F2EA" stroke="black"/>
<path d="M28.8387 16.4975L30.0977 15.7711V15.1868L28.8387 15.9139V16.4975Z" fill="#73B200" stroke="black"/>
<path d="M31.8517 14.7588L33.1094 14.032V13.4486L31.8517 14.1747V14.7588Z" fill="#73B200" stroke="black"/>
<path d="M28.8387 19.1057L30.0977 18.3792V17.7949L28.8387 18.5221V19.1057Z" fill="#73B200" stroke="black"/>
<path d="M31.8517 17.367L33.1094 16.6402V16.0567L31.8517 16.7829V17.367Z" fill="#73B200" stroke="black"/>
<path d="M7.62806 10.7041L21.084 18.439V25.1556L7.62806 17.4207V10.7041Z" fill="#F4F2EA" stroke="black"/>
<path d="M24.334 17.8855V19.6248L22.0751 20.9283V19.1903L24.334 17.8855Z" fill="#73B200" stroke="black"/>
<path d="M27.3457 16.1475V17.8855L25.088 19.1902V17.451L27.3457 16.1475Z" fill="#73B200" stroke="black"/>
<path d="M24.334 20.4934V22.2327L22.0751 23.5362V21.7969L24.334 20.4934Z" fill="#73B200" stroke="black"/>
<path d="M27.3457 18.7544V20.4937L25.088 21.7972V20.0592L27.3457 18.7544Z" fill="#73B200" stroke="black"/>
<path d="M20.7383 14.6379V9.43286L23.7441 11.1679L20.7383 14.6379ZM20.7383 9.43286V14.6379L17.7325 11.1679L20.7383 9.43286Z" fill="#73B200"/>
<path d="M20.7383 14.6379V9.43286M20.7383 14.6379L23.7441 11.1679L20.7383 9.43286M20.7383 14.6379L17.7325 11.1679L20.7383 9.43286" stroke="black"/>
<path d="M20.7354 8.73828L16.531 11.1679L20.7391 13.5968L24.9473 11.1679L20.7354 8.73828ZM20.7391 12.9028L17.7333 11.1677L20.7391 9.43284L23.7449 11.1679L20.7391 12.9028Z" fill="white" stroke="black"/>
<path d="M16.5301 11.1677V13.9437L20.7383 16.3728V13.5966L16.5301 11.1677Z" fill="#F4F2EA" stroke="black"/>
<path d="M20.7391 13.5968V16.373L24.9473 13.9439V11.168L20.7391 13.5968Z" fill="#F4F2EA" stroke="black"/>
<path d="M28.8093 3.26765V0.69165L30.2969 1.55035L28.8093 3.26765ZM28.8093 0.69165V3.26765L27.3217 1.55035L28.8093 0.69165Z" fill="#59770F"/>
<path d="M28.8093 3.26765V0.69165M28.8093 3.26765L30.2969 1.55035L28.8093 0.69165M28.8093 3.26765L27.3217 1.55035L28.8093 0.69165" stroke="black"/>
<path d="M28.8061 0.348145L26.7254 1.55058L28.808 2.75264L30.8906 1.55058L28.8061 0.348145ZM28.808 2.40918L27.3204 1.55049L28.808 0.691884L30.2956 1.55058L28.808 2.40918Z" fill="white" stroke="black"/>
<path d="M26.726 1.55054V10.0524L28.8086 11.2545L28.8086 2.7526L26.726 1.55054Z" fill="#F4F2EA" stroke="black"/>
<path d="M28.808 2.7526V11.2545L30.8906 10.0524V1.55054L28.808 2.7526Z" fill="#F4F2EA" stroke="black"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-rx3hx5`,
                                          "data-framer-name": `Group 1321315555`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 39,
                                          intrinsicWidth: 12,
                                          svg: `<svg width="12" height="39" viewBox="0 0 12 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M10.6489 35.5206C10.6565 34.9363 10.28 34.2425 9.29199 33.6464C8.30675 33.0537 6.97849 32.7276 5.61948 32.7023C4.26035 32.677 2.92453 32.9535 1.92461 33.509C0.92454 34.0655 0.531243 34.7428 0.523557 35.3264C0.515854 35.9113 0.892622 36.6058 1.8803 37.2018L10.6489 35.5206ZM10.6489 35.5206C10.6412 36.1037 10.2479 36.781 9.24748 37.3394M10.6489 35.5206L9.24748 37.3394M9.24748 37.3394C8.24952 37.8947 6.9139 38.1713 5.55422 38.146C4.19468 38.1207 2.86554 37.7945 1.88034 37.2018L9.24748 37.3394Z" fill="#94C518" stroke="#73B200"/>
</g>
<path d="M8.30688 33.9101C9.78804 34.8037 9.77066 36.2049 8.26516 37.0428C6.75966 37.8807 4.33974 37.8355 2.8551 36.942C1.37395 36.0484 1.39133 34.6472 2.89683 33.8093C4.40232 32.9713 6.82224 33.0165 8.30688 33.9101Z" fill="#73B200"/>
<path d="M3.49805 35.426H7.67032V0.09375H3.49805V35.426Z" fill="url(#paint0_linear_4345_8424)"/>
<defs>
<linearGradient id="paint0_linear_4345_8424" x1="5.25498" y1="35.4505" x2="5.91345" y2="0.0559235" gradientUnits="userSpaceOnUse">
<stop stop-color="#73B200"/>
<stop offset="0.2852" stop-color="#73B200" stop-opacity="0.28"/>
<stop offset="0.4875" stop-color="#94C518" stop-opacity="0.2"/>
<stop offset="1" stop-color="#D9F68E" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-1b58suk`,
                                          "data-framer-name": `Group 55337`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 40,
                                          intrinsicWidth: 13,
                                          svg: `<svg width="13" height="40" viewBox="0 0 13 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M11.5649 36.3411C11.5726 35.7568 11.196 35.0631 10.208 34.467C9.22276 33.8743 7.8945 33.5481 6.5355 33.5228C5.17636 33.4975 3.84055 33.7741 2.84063 34.3296C1.84056 34.8861 1.44726 35.5634 1.43957 36.147C1.43187 36.7319 1.80864 37.4264 2.79631 38.0224L11.5649 36.3411ZM11.5649 36.3411C11.5572 36.9242 11.164 37.6016 10.1635 38.16M11.5649 36.3411L10.1635 38.16M10.1635 38.16C9.16553 38.7152 7.82991 38.9919 6.47024 38.9666C5.11069 38.9413 3.78156 38.6151 2.79636 38.0224L10.1635 38.16Z" fill="#94C518" stroke="#73B200"/>
</g>
<path d="M9.22582 34.7302C10.707 35.6237 10.6896 37.0249 9.1841 37.8629C7.67861 38.7008 5.25869 38.6556 3.77405 37.762C2.29289 36.8685 2.31027 35.4673 3.81577 34.6293C5.32127 33.7914 7.74119 33.8366 9.22582 34.7302Z" fill="#73B200"/>
<path d="M4.41406 36.2466H8.58634V0.914307H4.41406V36.2466Z" fill="url(#paint0_linear_4345_8432)"/>
<defs>
<linearGradient id="paint0_linear_4345_8432" x1="6.17099" y1="36.2711" x2="6.82946" y2="0.87648" gradientUnits="userSpaceOnUse">
<stop stop-color="#73B200"/>
<stop offset="0.2852" stop-color="#73B200" stop-opacity="0.28"/>
<stop offset="0.4875" stop-color="#94C518" stop-opacity="0.2"/>
<stop offset="1" stop-color="#D9F68E" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-11h64bg`,
                                          "data-framer-name": `Group 1321315558`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 26,
                                          intrinsicWidth: 42,
                                          svg: `<svg width="42" height="26" viewBox="0 0 42 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.0027 23.8312V24.681L1.16133 13.3044V12.3753L21.0027 23.8312Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M21.3027 23.3118L1.46136 11.856L21.3027 0.402547L41.144 11.856L21.3027 23.3118Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M41.4441 13.3044L21.6027 24.681V23.8312L41.4441 12.3753V13.3044Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ c(h, {
                                          className: `framer-1ggkdje`,
                                          "data-framer-name": `Group 1321315559`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 62,
                                          intrinsicWidth: 45,
                                          svg: `<svg width="45" height="62" viewBox="0 0 45 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5183 60.259V61.1087L0.676953 49.7322V48.8031L20.5183 60.259Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M20.8183 59.7396L0.976983 48.2837L20.8183 36.8303L40.6596 48.2837L20.8183 59.7396Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M40.9597 49.7322L21.1184 61.1087V60.259L40.9597 48.8031V49.7322Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M24.0258 40.6197L20.9578 38.8502L17.8924 40.621V12.2874L20.9591 10.5167V6.97388L36.2949 15.8277L33.2283 17.5997V21.1413L24.0258 15.8277V40.6197Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.2243 21.1412L36.291 19.3704L33.2243 17.5996L30.1564 19.3704L33.2243 21.1412Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.2243 17.5997L36.291 15.8277L33.2243 14.0569L30.1564 15.8277L33.2243 17.5997Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.291 15.8277V19.3704L33.2243 14.0569V21.1413L30.1564 15.8277V19.3704" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.1038 41.0095V42.1342C18.1038 42.2042 18.15 42.273 18.2413 42.3254L18.6037 42.5354L19.246 42.1655C19.4284 42.0592 19.4284 41.888 19.246 41.7831L18.8836 41.5731L18.2413 41.202C18.1488 41.1482 18.1038 41.0795 18.1038 41.0108V41.0095Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.1055 42.2132V42.1331" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.3496 44.2583L18.3086 43.6572" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.3496 44.2583L18.3086 43.6572" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.6652 47.1466C13.6652 47.2516 13.7289 47.3528 13.8589 47.4278L13.8639 47.4303L20.6245 51.333C20.912 51.4992 21.4143 51.478 21.7467 51.2868L27.5564 47.9327C27.5839 47.9164 27.6089 47.9002 27.6314 47.884C27.7639 47.789 27.8301 47.6753 27.8301 47.5665C27.8301 47.4578 27.7663 47.3616 27.6364 47.2866L20.8707 43.3802C20.5833 43.214 20.0809 43.2352 19.7485 43.4264L13.9389 46.7805C13.7577 46.8842 13.6639 47.0192 13.6639 47.1466H13.6652Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.6659 47.1465V47.7476C13.6659 47.8525 13.7296 47.9538 13.8596 48.0288L20.6252 51.9352C20.9127 52.1014 21.415 52.0802 21.7474 51.889L27.5571 48.5349C27.7383 48.4312 27.832 48.2962 27.832 48.1687V47.5676C27.832 47.6764 27.7645 47.7901 27.6333 47.8851C27.6108 47.9025 27.5858 47.9176 27.5584 47.9338L21.7487 51.2879C21.4163 51.4791 20.9139 51.5003 20.6265 51.3341L13.8658 47.4314L13.8608 47.4289C13.7309 47.354 13.6671 47.2527 13.6671 47.1478L13.6659 47.1465Z" fill="#73B200" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.7995 2.83643V9.54834C18.7995 9.65207 18.7483 9.75574 18.6458 9.81573L14.2295 12.3651C13.9434 12.53 13.5909 12.53 13.3048 12.3651L10.7517 10.8955C10.6492 10.8367 10.598 10.7317 10.598 10.628V3.91609L18.8008 2.83643H18.7995Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.2298 5.653L18.6461 3.1037C18.8523 2.98498 18.8523 2.68881 18.6461 2.57009L16.0931 1.10052C15.8069 0.935568 15.4545 0.935568 15.1683 1.10052L10.752 3.64982C10.5458 3.76853 10.5458 4.06471 10.752 4.18342L13.3051 5.653C13.5913 5.81795 13.9437 5.81795 14.2298 5.653Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.4391 2.37766C12.4391 2.42514 12.4479 2.4714 12.4654 2.51763C12.5104 2.6351 12.6116 2.74633 12.7703 2.83755C13.2114 3.09248 13.9262 3.09248 14.3661 2.83755C14.5248 2.74633 14.626 2.6351 14.671 2.51763C14.6885 2.4714 14.6973 2.42389 14.6973 2.37766C14.6973 2.21145 14.5873 2.04401 14.3661 1.91654C13.925 1.66161 13.2102 1.66161 12.7703 1.91654C12.5504 2.04401 12.4391 2.2102 12.4391 2.37766Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.4391 2.37769V3.85983C12.4391 4.02603 12.5491 4.19348 12.7703 4.32094C13.2114 4.57587 13.9262 4.57587 14.3661 4.32094C14.5873 4.19348 14.6973 4.02728 14.6973 3.85983V2.37769C14.6973 2.42517 14.6885 2.47142 14.671 2.51766C14.626 2.63513 14.5248 2.74636 14.3661 2.83758C13.925 3.09251 13.2102 3.09251 12.7703 2.83758C12.6116 2.74636 12.5104 2.63513 12.4654 2.51766C12.4479 2.47142 12.4391 2.42392 12.4391 2.37769Z" fill="#73B200" stroke="black" stroke-width="0.8" stroke-miterlimit="10"/>
<path d="M16.3496 3.105L15.2886 2.49268" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9863 2.73634L15.9266 2.12402" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.4898 6.56282C11.4898 6.91148 11.7348 7.33509 12.0359 7.50879C12.3371 7.68249 12.582 7.54128 12.582 7.19387C12.582 6.84647 12.3371 6.42161 12.0359 6.2479C11.7348 6.0742 11.4898 6.21541 11.4898 6.56282Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.4898 9.23958C11.4898 9.58823 11.7348 10.0118 12.0359 10.1855C12.3371 10.3593 12.582 10.218 12.582 9.87063C12.582 9.52323 12.3371 9.09836 12.0359 8.92466C11.7348 8.75096 11.4898 8.89217 11.4898 9.23958Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M39.093 40.9107C39.093 41.0806 39.1442 41.2218 39.2454 41.3006L39.3179 41.3418L40.8262 42.2128C40.705 42.1403 40.6463 41.9904 40.6463 41.8054C40.6463 41.6205 40.7075 41.3943 40.8325 41.1793L41.9609 39.2249L41.3061 38.8475L40.8325 38.5738C40.7425 38.5213 40.685 38.4263 40.66 38.3064C40.63 38.1639 40.6475 37.9864 40.7113 37.8027L40.0877 38.885H40.0864L39.2792 40.2846C39.1554 40.4995 39.093 40.7232 39.093 40.9107Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.6358 41.6618C34.6333 41.8555 34.6958 42.0129 34.822 42.0866L36.3891 42.9914C36.3966 42.9951 36.404 42.9989 36.4115 43.0027L36.3753 42.9814C36.2503 42.9089 36.1891 42.7565 36.1891 42.5678V42.5453C36.1891 42.3578 36.2503 42.1341 36.3753 41.9179L36.8127 41.1594L37.9424 39.2037C38.0636 38.9913 38.2236 38.8275 38.3848 38.7338C38.3198 38.5751 38.2848 38.3814 38.2848 38.1589C38.2848 38.1602 38.2835 38.1602 38.2835 38.1602C37.9811 38.3339 37.6987 38.3976 37.4613 38.3614C37.5038 38.1027 37.4463 37.8816 37.2888 37.7903C37.2388 37.7616 37.1838 37.7478 37.1239 37.7478C37.0326 37.7478 36.9314 37.7803 36.8314 37.839C36.6715 37.934 36.5115 38.099 36.3891 38.3101L34.822 41.0232C34.6958 41.2431 34.6333 41.4718 34.6358 41.6618Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.1894 42.5453C36.1944 42.3628 36.2556 42.1492 36.3756 41.943L36.8242 41.1656L36.813 41.1594L36.3756 41.9179C36.2506 42.1341 36.1894 42.3578 36.1894 42.5453Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M39.2445 41.3008C39.2547 41.3084 39.2662 41.3173 39.2789 41.3237C39.2916 41.3313 39.3044 41.3377 39.3184 41.3428L39.2445 41.3008Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.1874 42.5453C36.1924 42.3628 36.2537 42.1492 36.3736 41.943L36.8223 41.1656L36.811 41.1594L36.3736 41.9179C36.2487 42.1341 36.1874 42.3578 36.1874 42.5453Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.1894 42.5455V42.568C36.1894 42.7567 36.2506 42.9092 36.3756 42.9817L36.4118 43.0029L37.9426 43.8864C38.1901 44.0289 38.5925 43.7976 38.8411 43.3665C38.9649 43.1516 39.0273 42.9279 39.0273 42.7405C39.0273 42.553 38.9649 42.4005 38.8411 42.3293L37.7127 41.677L38.8411 39.7238C38.9311 39.5663 38.9886 39.4051 39.0136 39.2564C39.0561 38.9977 38.9986 38.7765 38.8411 38.6853C38.7912 38.6565 38.7349 38.6428 38.6749 38.6428C38.5837 38.6428 38.4837 38.6753 38.385 38.734C38.2238 38.8278 38.0639 38.9915 37.9426 39.2039L36.8129 41.1597L36.8242 41.1659L36.3756 41.9432C36.2556 42.1494 36.1944 42.3631 36.1894 42.5455Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M40.6444 41.8055C40.6444 41.9905 40.7032 42.1404 40.8244 42.2129L40.8369 42.2204C41.0843 42.3566 41.483 42.1242 41.7291 41.6981L43.2962 38.9838C43.4212 38.7676 43.4824 38.5439 43.4824 38.3564V38.3339C43.4824 38.1452 43.4212 37.9928 43.2962 37.9216L41.7291 37.0168C41.7291 37.0168 41.7217 37.0131 41.7179 37.0118L41.3468 36.7969C41.3455 36.8044 41.3443 36.8131 41.3418 36.8206C41.3268 36.8993 41.3093 36.9768 41.2868 37.0568C41.2755 37.0981 41.2643 37.1368 41.2505 37.1768C41.1256 37.5754 40.9169 37.9691 40.6582 38.3065C40.6832 38.4264 40.7407 38.5214 40.8306 38.5739L41.3043 38.8476L41.9591 39.225L40.8306 41.1794C40.7057 41.3944 40.6444 41.6181 40.6444 41.8055Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.1666 37.1642V37.1754C36.1678 37.3366 36.1853 37.4841 36.2178 37.6166C36.2528 37.7603 36.344 37.884 36.4727 37.9578L36.5977 38.029L38.146 38.925L38.8546 39.3336C38.6609 39.2074 38.5197 38.9912 38.4547 38.6963C38.4297 38.5814 38.416 38.4551 38.4147 38.3189V38.3101C38.4147 37.2829 39.1345 36.0357 40.0255 35.5221C40.0293 35.5184 40.0305 35.5184 40.0343 35.5159C40.4517 35.2785 40.8291 35.2448 41.1152 35.3822L38.8384 34.0676L38.7459 34.0138C38.6259 33.9438 38.4809 33.9189 38.3472 33.9563C38.211 33.9951 38.0686 34.0551 37.9224 34.1388C37.9174 34.14 37.9149 34.14 37.9124 34.1438C37.6212 34.3112 37.3475 34.5512 37.1063 34.8361C36.5477 35.4947 36.1666 36.3882 36.1666 37.1642Z" fill="#73B200" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M41.6367 36.451C41.6367 37.4782 40.9132 38.7254 40.0259 39.239C39.591 39.489 39.1986 39.5214 38.9087 39.364L38.855 39.334C38.585 39.159 38.4188 38.8079 38.4151 38.3193V38.3105C38.4151 37.2833 39.1349 36.0361 40.0259 35.5225C40.0297 35.5188 40.0309 35.5188 40.0347 35.5176C40.452 35.2801 40.8294 35.2451 41.1156 35.3838C41.1231 35.3851 41.1281 35.3888 41.1356 35.3926L41.1931 35.4288C41.4693 35.6025 41.6367 35.9562 41.6367 36.4523V36.451Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M40.122 37.4466C40.139 37.4463 40.1541 37.4445 40.1673 37.4418C40.1537 37.4204 40.1335 37.3968 40.1037 37.3743C40.0512 37.3346 39.9883 37.3159 39.9292 37.3169C39.9123 37.3171 39.8971 37.319 39.8839 37.3216C39.8975 37.343 39.9177 37.3667 39.9475 37.3892C40 37.4288 40.063 37.4476 40.122 37.4466Z" fill="#59770F" stroke="black" stroke-width="0.8"/>
<path d="M37.6319 22.2183V35.141C37.6319 35.141 38.7129 35.7171 38.7129 35.7646V22.8419L37.6319 22.2183Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M38.7113 22.842V35.7648C38.9525 35.4799 39.2262 35.2399 39.5174 35.0725C39.5199 35.0687 39.5224 35.0687 39.5274 35.0675C39.6736 34.9837 39.816 34.9238 39.9522 34.885C40.086 34.8475 40.2309 34.8725 40.3509 34.9425L40.4434 34.9962V22.842H38.7113Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32.7565 23.2582C32.7565 23.6619 32.8977 24.1117 33.1276 24.5104C33.3575 24.9078 33.6749 25.2564 34.0261 25.4589L38.8261 28.2293C39.1535 28.418 39.4534 28.448 39.6783 28.3418L39.7433 28.3056C39.962 28.1681 40.0957 27.8882 40.0957 27.4958C40.0957 27.1034 39.9545 26.6423 39.7246 26.2436C39.4946 25.8437 39.1772 25.4976 38.8261 25.2951L34.0261 22.5247C33.6675 22.316 33.3438 22.301 33.1114 22.4447C32.8914 22.5821 32.7565 22.8621 32.7565 23.2582Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.482 23.6756C33.482 24.0243 33.7269 24.4479 34.0281 24.6216C34.3293 24.7953 34.5742 24.6541 34.5742 24.3067C34.5742 23.9593 34.3293 23.5344 34.0281 23.3607C33.7269 23.187 33.482 23.3282 33.482 23.6756Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M38.2789 26.4461C38.2789 26.7948 38.5238 27.2184 38.825 27.3922C39.1262 27.5659 39.3711 27.4246 39.3711 27.0772C39.3711 26.7298 39.1262 26.3049 38.825 26.1312C38.5238 25.9575 38.2789 26.0987 38.2789 26.4461Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.112 22.4447C33.3432 22.301 33.6681 22.316 34.0267 22.5247L38.8267 25.2952C39.1766 25.4976 39.4953 25.8437 39.7252 26.2436C39.9551 26.641 40.0963 27.0909 40.0963 27.4958C40.0963 27.9007 39.9626 28.1694 39.7439 28.3056L44.3489 25.6463L44.4314 25.5989C44.6401 25.4576 44.7676 25.1815 44.7676 24.7991C44.7676 24.3929 44.6264 23.9456 44.3964 23.5469C44.1665 23.1495 43.8478 22.8021 43.4967 22.5984L38.6992 19.8279C38.3393 19.6205 38.0144 19.6067 37.7832 19.7492L33.112 22.4447Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M20.9555 42.3919V49.4749L24.0234 47.7041V40.6211L22.4889 41.5071L20.9555 42.3919Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.8904 40.6211V47.7041L20.957 49.4749V42.3919L17.8904 40.6211Z" fill="#73B200" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.8889 40.6211L20.9555 42.3919L22.4889 41.5071L24.0234 40.6211L20.9555 38.8503L17.8889 40.6211Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9587 42.3917L24.0254 40.6196L20.9587 38.8489L17.8921 40.6209L20.9587 42.3917Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9587 38.8489L24.0254 37.0781L20.9587 35.3074L17.8921 37.0781L20.9587 38.8489Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.0254 37.0781V40.6196L20.9587 35.3074V42.3917L17.8921 37.0781V40.6209" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9587 38.8494L24.0254 37.0786L20.9587 35.3079L17.8921 37.0786L20.9587 38.8494Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9587 35.3076L24.0254 33.5369L20.9587 31.7661L17.8921 33.5369L20.9587 35.3076Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.0254 33.5369V37.0784L20.9587 31.7661V38.8491L17.8921 33.5369V37.0784" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9587 35.3079L24.0254 33.5371L20.9587 31.7664L17.8921 33.5371L20.9587 35.3079Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9587 31.7662L24.0254 29.9954L20.9587 28.2246L17.8921 29.9954L20.9587 31.7662Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.0254 29.9954V33.5369L20.9587 28.2246V35.3077L17.8921 29.9954V33.5369" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9587 31.7659L24.0254 29.9951L20.9587 28.2244L17.8921 29.9951L20.9587 31.7659Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9587 28.2244L24.0254 26.4536L20.9587 24.6829L17.8921 26.4536L20.9587 28.2244Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.0254 26.4536V29.9951L20.9587 24.6829V31.766L17.8921 26.4536V29.9951" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9587 28.2246L24.0254 26.4539L20.9587 24.6831L17.8921 26.4539L20.9587 28.2246Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9587 24.6829L24.0254 22.9121L20.9587 21.1414L17.8921 22.9121L20.9587 24.6829Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.0254 22.9121V26.4536L20.9587 21.1414V28.2244L17.8921 22.9121V26.4536" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9587 24.6831L24.0254 22.9124L20.9587 21.1416L17.8921 22.9124L20.9587 24.6831Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9587 21.1412L24.0254 19.3704L20.9587 17.5996L17.8921 19.3704L20.9587 21.1412Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.0254 19.3704V22.9119L20.9587 17.5996V24.6827L17.8921 19.3704V22.9119" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9587 21.1409L24.0254 19.3701L20.9587 17.5994L17.8921 19.3701L20.9587 21.1409Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9587 17.5994L24.0254 15.8275L20.9587 14.0566L17.8921 15.8287L20.9587 17.5994Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.0254 15.8275V19.3702L20.9587 14.0566V21.141L17.8921 15.8287V19.3702" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9587 17.5997L24.0254 15.8277L20.9587 14.0569L17.8921 15.8289L20.9587 17.5997Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9587 14.0569L24.0254 12.2861L20.9587 10.5154L17.8921 12.2861L20.9587 14.0569Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.0254 12.2861V15.8277L20.9587 10.5154V17.5997L17.8921 12.2861V15.8289" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9587 14.0574L24.0254 12.2866L20.9587 10.5159L17.8921 12.2866L20.9587 14.0574Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9587 10.5156L24.0254 8.74488L20.9587 6.97412L17.8921 8.74488L20.9587 10.5156Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.0254 8.74488V12.2864L20.9587 6.97412V14.0572L17.8921 8.74488V12.2864" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.8904 8.74439V12.2872L20.957 10.5164V6.97363L19.4237 7.85962L17.8904 8.74439Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8225 6.97388L17.8904 8.74464L19.4237 7.85987L20.957 6.97388L17.8904 5.20312L14.8225 6.97388Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8227 6.97363V10.5164L17.8906 12.2872V8.74439L14.8227 6.97363Z" fill="#73B200" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.0239 15.8275L27.0918 14.0566L24.0239 12.2859L20.9572 14.0566L24.0239 15.8275Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.0239 12.2861L27.0918 10.5154L24.0239 8.74463L20.9572 10.5154L24.0239 12.2861Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.0918 10.5154V14.0569L24.0239 8.74463V15.8277L20.9572 10.5154V14.0569" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.0935 17.5999L30.1602 15.8279L27.0935 14.0571L24.0256 15.8292L27.0935 17.5999Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.0935 14.0571L30.1602 12.2864L27.0935 10.5156L24.0256 12.2864L27.0935 14.0571Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30.1602 12.2864V15.828L27.0935 10.5156V17.5999L24.0256 12.2864V15.8292" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30.1586 19.3706L33.2266 17.5999L30.1586 15.8279L27.092 17.5999L30.1586 19.3706Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30.1586 15.828L33.2266 14.0571L30.1586 12.2864L27.092 14.0571L30.1586 15.828Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.2266 14.0571V17.5999L30.1586 12.2864V19.3707L27.092 14.0571V17.5999" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M39.3633 24.6829L33.2287 17.5999V21.1414L39.3633 24.6829Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4277 22.9122L36.2932 15.8279L33.2265 17.5999L39.3611 24.683L42.4277 22.9122Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.109 19.3044L40.0957 22.7535" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35.8784 17.8848L36.4902 18.5917" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ c(h, {
                                      className: `framer-1n3n8lp`,
                                      "data-framer-name": `Group`,
                                      fill: `rgba(0,0,0,1)`,
                                      intrinsicHeight: 32,
                                      intrinsicWidth: 31,
                                      svg: `<svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7061 31.8674L0.546734 23.7001V13.4905L14.7061 21.6577V31.8674Z" fill="#F4F2EA" stroke="black"/>
<path d="M16.4754 0.218262L30.6348 8.38663L25.325 15.5327L11.1657 7.36545L16.4754 0.218262Z" fill="white" stroke="black"/>
<path d="M25.2451 11.3979L20.0158 18.5951L5.8565 10.4278L11.1662 3.28174L25.2451 11.3979Z" fill="white" stroke="black"/>
<path d="M5.8563 6.34448L20.0156 14.5117L14.7059 21.6578L0.54656 13.4906L5.8563 6.34448Z" fill="white" stroke="black"/>
<path d="M30.6348 8.38672V22.6789L14.7055 31.8673V21.6577L20.0153 14.5436V18.5952L25.2446 11.5593L25.325 15.5328L30.6348 8.38672Z" fill="#F4F2EA" stroke="black" stroke-width="0.8"/>
<path d="M2.31606 24.7212V16.554L12.9355 22.6789V30.8461L2.31606 24.7212Z" fill="#73B200" stroke="black"/>
<path d="M28.8652 19.6166V17.5742L27.0953 18.5954V20.6378L28.8652 19.6166Z" fill="#59770F" stroke="black"/>
<path d="M25.3252 21.6577V19.6165L21.7854 21.6577V23.7001L25.3252 21.6577Z" fill="#59770F" stroke="black"/>
<path d="M20.0156 24.7211V22.6787L18.2457 23.6999V25.7423L20.0156 24.7211Z" fill="#59770F" stroke="black"/>
</svg>
`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ c(h, {
                                      className: `framer-1jmz7ix`,
                                      "data-framer-name": `Group`,
                                      fill: `rgba(0,0,0,1)`,
                                      intrinsicHeight: 30,
                                      intrinsicWidth: 28,
                                      svg: `<svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.8367 21.3632C20.8367 21.5471 20.7462 21.7309 20.5643 21.8357L12.7557 26.3435C12.2499 26.6359 11.6259 26.6359 11.1201 26.3435L3.31151 21.8357C3.12956 21.7309 3.03906 21.5471 3.03906 21.3642C3.03906 21.1793 3.12956 20.9964 3.31151 20.8917L11.1201 16.3829C11.6259 16.0914 12.2499 16.0914 12.7557 16.3829L20.5643 20.8917C20.7462 20.9964 20.8367 21.1794 20.8367 21.3632Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.39975 21.0336L11.748 17.3679C11.8661 17.3002 12.0109 17.3002 12.129 17.3679L18.4772 21.0336C18.7316 21.1803 18.7316 21.547 18.4772 21.6937L12.3195 25.2489C12.0833 25.3851 11.7937 25.3851 11.5574 25.2489L5.39975 21.6937C5.1454 21.547 5.1454 21.1803 5.39975 21.0336Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.8367 21.3643V24.3497C20.8367 24.5326 20.7453 24.7165 20.5643 24.8213L12.7557 29.33C12.2499 29.6215 11.6259 29.6215 11.1201 29.33L3.31151 24.8213C3.22006 24.7689 3.15242 24.6965 3.10669 24.6146C3.06192 24.5327 3.03906 24.4412 3.03906 24.3497V21.3643C3.03906 21.5472 3.12956 21.731 3.31151 21.8358L11.1201 26.3436C11.6259 26.636 12.2499 26.636 12.7557 26.3436L20.5643 21.8358C20.7462 21.731 20.8367 21.5472 20.8367 21.3643Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.4805 26.5235L16.6305 25.2822" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.4805 27.2483L15.6065 26.5986" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.2542 23.5199C20.2542 23.0388 19.9618 22.8168 19.6008 23.0255C19.2397 23.2341 18.9473 23.7933 18.9473 24.2753C18.9473 24.7573 19.2397 24.9783 19.6008 24.7697C19.9618 24.5611 20.2542 24.0019 20.2542 23.5199Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5996 23.8977L19.9497 23.4675" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.58623 27.1715L4.91199 25.05C4.83673 25.0071 4.79102 24.9271 4.79102 24.8404V23.762C4.79102 23.6382 4.92533 23.5601 5.03297 23.622L8.70721 25.7435C8.78247 25.7864 8.82819 25.8664 8.82819 25.9531V27.0314C8.82819 27.1553 8.69387 27.2334 8.58623 27.1715Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.53711 25.2825L8.08035 26.1732" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.54297 24.708L6.06185 25.0085" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.93964 4.81752L5.98037 4.26311C5.81652 4.16881 5.61457 4.16881 5.44977 4.26311L4.49048 4.81752H2.83008V7.93351C2.83008 7.99258 2.8596 8.05258 2.91866 8.08687L5.44977 9.54821C5.61362 9.64252 5.81556 9.64252 5.98037 9.54821L8.51146 8.08687C8.57052 8.05258 8.60006 7.99353 8.60006 7.93351V4.81752H6.93964Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.44977 6.43221L2.91867 4.97087C2.80055 4.90323 2.80055 4.73272 2.91867 4.66508L5.44977 3.20379C5.61362 3.10948 5.81557 3.10948 5.98037 3.20379L8.51146 4.66508C8.62959 4.73272 8.62959 4.90323 8.51146 4.97087L5.98037 6.43221C5.81652 6.52652 5.61458 6.52652 5.44977 6.43221Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.6914 24.1139L6.91095 20.776L5.68208 18.6488C4.89427 17.2837 4.88474 15.8081 5.65349 15.3299C5.66302 15.3232 5.67255 15.3175 5.68208 15.3118C5.69351 15.3051 5.70494 15.2994 5.71637 15.2937C6.11075 15.0851 6.6185 15.1613 7.1272 15.4547C7.65113 15.7567 8.17411 16.2892 8.57326 16.9808L12.6914 24.1139Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.3965 21.9751L12.6918 24.1138L8.57368 16.9806C8.17454 16.289 7.65156 15.7565 7.12762 15.4545C6.61893 15.1611 6.11118 15.0849 5.7168 15.2935L9.37007 13.1844L9.41294 13.1596C9.80828 12.9453 10.3208 13.0206 10.8323 13.3159C11.3553 13.6178 11.8783 14.1504 12.2784 14.842L16.3965 21.9751Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3894 22.4802L14.6535 21.7933C15.005 21.6019 15.1327 21.1608 14.9374 20.8112C14.745 20.4683 14.3134 20.3435 13.9676 20.5311L12.7035 21.218C12.352 21.4094 12.2244 21.8505 12.4196 22.2001C12.6121 22.5431 13.0436 22.6678 13.3894 22.4802Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.1152 16.8794L12.6775 19.5857" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.4941 17.0024L11.9102 18.256" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.4943 17.3662C12.695 17.3662 12.8577 17.2035 12.8577 17.0028C12.8577 16.8021 12.695 16.6394 12.4943 16.6394C12.2936 16.6394 12.1309 16.8021 12.1309 17.0028C12.1309 17.2035 12.2936 17.3662 12.4943 17.3662Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.73567 19.465C7.64041 19.6555 7.50514 19.8022 7.33367 19.8927C7.19268 19.968 7.02597 20.0061 6.8383 19.9984C5.92189 19.9632 4.83211 18.8763 4.40438 17.5712L1.59798 8.99955C1.26742 7.99169 1.42936 7.14767 1.94187 6.83236L1.97616 6.81236H1.97711L1.98379 6.80854C2.12668 6.73138 2.29339 6.69329 2.48296 6.70091C2.49153 6.70091 2.50106 6.70186 2.50963 6.70281C2.55822 6.70567 2.60679 6.71141 2.65633 6.71998C3.06595 6.79142 3.49844 7.05433 3.88329 7.43918C4.3234 7.87739 4.70255 8.47563 4.91594 9.12817L7.72329 17.7007C7.95763 18.4142 7.94429 19.0458 7.73567 19.465Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.29353 19.3402C8.29353 19.3402 8.29258 19.3412 8.29163 19.3421H8.29067C8.28496 19.3459 8.27829 19.3497 8.27067 19.3535L7.3352 19.8936H7.33426C7.50573 19.8022 7.641 19.6555 7.73626 19.465C7.94488 19.0458 7.95822 18.4142 7.72387 17.7007L4.91652 9.12818C4.70314 8.47564 4.32399 7.8774 3.88388 7.4392C3.49903 7.05434 3.06654 6.79144 2.65691 6.71999C2.60738 6.71142 2.5588 6.70569 2.51022 6.70283C2.50165 6.70188 2.49212 6.70092 2.48354 6.70092C2.29397 6.6933 2.12727 6.7314 1.98438 6.80856L2.89127 6.28462H2.89222C3.03797 6.2027 3.21038 6.16174 3.40662 6.16936C3.86483 6.18746 4.36591 6.46753 4.80697 6.90763C5.24708 7.34584 5.62621 7.94408 5.8396 8.59662L8.64695 17.1692C8.97941 18.1828 8.81366 19.0297 8.29353 19.3402Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.21926 19.1659V19.1745C6.21735 19.6184 6.06494 19.9337 5.81821 20.089L5.77534 20.1137C5.51527 20.2518 5.16185 20.2261 4.77319 20.0004C3.97394 19.5393 3.32617 18.4171 3.32617 17.494C3.32617 17.0482 3.47668 16.731 3.7234 16.5738L3.7758 16.5433C4.03396 16.409 4.38167 16.4357 4.76557 16.6548C4.76843 16.6557 4.77033 16.6576 4.77319 16.6586C5.57243 17.1197 6.22021 18.2418 6.22021 19.1649L6.21926 19.1659Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.26672 18.5515V18.562C7.26672 19.0088 7.11431 19.3279 6.86663 19.4842L6.82089 19.5099L5.81875 20.0891C6.06548 19.9338 6.2179 19.6185 6.2198 19.1746V19.166C6.2198 18.2429 5.57202 17.1207 4.77277 16.6597C4.76992 16.6578 4.76802 16.6568 4.76516 16.6559C4.38125 16.4368 4.03355 16.4101 3.77539 16.5444L4.76993 15.97L4.82327 15.9395C5.08238 15.8042 5.43389 15.8318 5.8197 16.0547C5.82732 16.0595 5.83589 16.0643 5.84351 16.069C6.62847 16.5368 7.26196 17.639 7.26672 18.5506V18.5515Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.95063 17.6108C4.95063 17.7234 4.87145 17.7682 4.77511 17.7119C4.67878 17.6557 4.59961 17.5193 4.59961 17.4077C4.59961 17.2961 4.67878 17.2503 4.77511 17.3066C4.87145 17.3628 4.95063 17.4992 4.95063 17.6108Z" fill="#272727"/>
<path d="M4.24455 17.4392C4.32848 17.5441 4.35709 17.6843 4.30845 17.754C4.2598 17.8236 4.15202 17.794 4.06809 17.6901C3.98415 17.5852 3.95553 17.4449 4.00417 17.3753C4.05282 17.3066 4.16061 17.3352 4.24455 17.4392Z" fill="#272727"/>
<path d="M4.06809 18.1601C4.15202 18.1525 4.2598 18.2478 4.30845 18.3728C4.35709 18.4978 4.32848 18.6055 4.24455 18.6132C4.16061 18.6208 4.05282 18.5254 4.00417 18.4005C3.95553 18.2755 3.98415 18.1677 4.06809 18.1601Z" fill="#272727"/>
<path d="M4.59961 19.0519C4.59961 18.9393 4.67878 18.8945 4.77511 18.9508C4.87145 19.0071 4.95063 19.1435 4.95063 19.2551C4.95063 19.3676 4.87145 19.4124 4.77511 19.3562C4.67782 19.2999 4.59961 19.1635 4.59961 19.0519Z" fill="#272727"/>
<path d="M5.30051 19.2227C5.21657 19.1178 5.18795 18.9776 5.2366 18.9079C5.28524 18.8383 5.39303 18.8679 5.47697 18.9718C5.56091 19.0767 5.58953 19.2169 5.54088 19.2866C5.49223 19.3562 5.38445 19.3266 5.30051 19.2227Z" fill="#272727"/>
<path d="M5.47697 18.5026C5.39303 18.5102 5.28524 18.4148 5.2366 18.2899C5.18795 18.1649 5.21657 18.0571 5.30051 18.0495C5.38445 18.0419 5.49223 18.1373 5.54088 18.2622C5.58953 18.3872 5.56091 18.4949 5.47697 18.5026Z" fill="#272727"/>
<path d="M3.41457 10.7279V10.7364C3.41267 11.1804 3.26025 11.4957 3.01353 11.651L2.97066 11.6757C2.7106 11.8138 2.35718 11.7881 1.96851 11.5624C1.16927 11.1013 0.521484 9.97911 0.521484 9.05603C0.521484 8.6102 0.672002 8.29301 0.918728 8.13583L0.971127 8.10532C1.22929 7.971 1.57699 7.99771 1.96089 8.21681C1.96375 8.21777 1.96565 8.21968 1.96851 8.22063C2.76775 8.68169 3.41553 9.80383 3.41553 10.7269L3.41457 10.7279Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.46204 10.1133V10.1238C4.46204 10.5706 4.30961 10.8897 4.06193 11.0459L4.01621 11.0716L3.01406 11.6508C3.26078 11.4956 3.4132 11.1802 3.4151 10.7363V10.7278C3.4151 9.80468 2.76733 8.6825 1.96809 8.22143C1.96523 8.21953 1.96333 8.21857 1.96047 8.21762C1.57657 7.99852 1.22886 7.97185 0.970703 8.10617L1.96523 7.53172L2.01858 7.50125C2.27769 7.36598 2.6292 7.3936 3.01501 7.61652C3.02263 7.62128 3.0312 7.62603 3.03882 7.6308C3.82378 8.09853 4.45727 9.20073 4.46204 10.1124V10.1133Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.14593 9.1726C2.14593 9.28516 2.06676 9.32999 1.97043 9.27372C1.87313 9.21744 1.79492 9.08105 1.79492 8.96945C1.79492 8.85785 1.87409 8.81206 1.97043 8.86833C2.06676 8.92461 2.14593 9.061 2.14593 9.1726Z" fill="#272727"/>
<path d="M1.43985 9.00091C1.52379 9.10583 1.55241 9.24603 1.50376 9.31566C1.45511 9.38529 1.34733 9.35573 1.26339 9.25176C1.17945 9.14684 1.15084 9.00659 1.19949 8.93696C1.24814 8.86733 1.35591 8.89694 1.43985 9.00091Z" fill="#272727"/>
<path d="M1.2634 9.72162C1.34734 9.71399 1.45512 9.80937 1.50377 9.93432C1.55242 10.0593 1.5238 10.1671 1.43986 10.1747C1.35592 10.1823 1.24813 10.0869 1.19949 9.96199C1.15084 9.83704 1.17946 9.72925 1.2634 9.72162Z" fill="#272727"/>
<path d="M1.79492 10.6127C1.79492 10.5001 1.87409 10.4553 1.97043 10.5116C2.06676 10.5678 2.14593 10.7042 2.14593 10.8158C2.14593 10.9274 2.06676 10.9732 1.97043 10.917C1.87409 10.8607 1.79492 10.7243 1.79492 10.6127Z" fill="#272727"/>
<path d="M2.49582 10.7844C2.41188 10.6795 2.38326 10.5393 2.43191 10.4697C2.48055 10.4001 2.58834 10.4296 2.67228 10.5336C2.75622 10.6376 2.78483 10.7787 2.73618 10.8483C2.68753 10.917 2.57976 10.8884 2.49582 10.7844Z" fill="#272727"/>
<path d="M2.67228 10.0643C2.58834 10.072 2.48055 9.97659 2.43191 9.85164C2.38326 9.72668 2.41188 9.6189 2.49582 9.61127C2.57976 9.60364 2.68755 9.69902 2.73619 9.82397C2.78484 9.94893 2.75622 10.0567 2.67228 10.0643Z" fill="#272727"/>
<path d="M6.90745 8.37282C6.90745 8.37282 6.99605 8.43953 7.01605 8.44906L9.06036 9.62931C8.95176 9.50833 8.89271 9.3159 8.89271 9.08347C8.89271 8.90723 8.927 8.71006 8.99749 8.50525C9.19659 7.93082 9.62051 7.50691 9.97583 7.50691C9.98917 7.50691 10.0035 7.50691 10.0168 7.50882L8.05727 6.37712C8.05727 6.37712 7.92485 6.32566 7.85245 6.31233C7.49332 6.24279 7.03415 6.67147 6.82648 7.27066C6.66454 7.7403 6.7055 8.17468 6.90555 8.37282H6.90745Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.89258 9.08442C8.89258 9.31685 8.95163 9.51023 9.06023 9.63026L9.27362 9.75408L20.4764 16.2214L21.6347 14.2152L10.3043 7.67452L10.0186 7.50972H10.0167C10.0033 7.50781 9.98904 7.50781 9.9757 7.50781C9.61942 7.50781 9.19551 7.93177 8.99736 8.5062C8.92687 8.71101 8.89258 8.90818 8.89258 9.08442Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.7639 14.0531C22.5286 13.9397 22.218 13.9673 21.8751 14.1636C21.8722 14.1655 21.8703 14.1655 21.8675 14.1683C21.1349 14.5904 20.5424 15.6163 20.5424 16.4613V16.4689C20.5452 16.8709 20.6824 17.1595 20.9044 17.3034L18.9448 16.1717C18.8391 16.1107 18.7638 16.0097 18.7353 15.8906C18.7086 15.7811 18.6943 15.6601 18.6934 15.5277V15.5191C18.6934 14.6037 19.3354 13.492 20.128 13.0347C20.1308 13.0318 20.1327 13.0319 20.1366 13.03C20.2566 12.9614 20.3738 12.9118 20.4862 12.8804C20.5967 12.8499 20.7148 12.8699 20.8148 12.9271L22.7629 14.0531H22.7639Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.1922 14.9313C23.1922 15.7762 22.5978 16.8022 21.8671 17.2242C21.5099 17.43 21.1869 17.4566 20.9488 17.3271L20.905 17.3023C20.683 17.1585 20.5458 16.8698 20.543 16.4678V16.4602C20.543 15.6153 21.1345 14.5893 21.8681 14.1673C21.8709 14.1644 21.8728 14.1644 21.8757 14.1625C22.2186 13.9663 22.5292 13.9387 22.7645 14.052C22.7702 14.0539 22.7749 14.0568 22.7807 14.0596L22.8273 14.0892C23.0541 14.2321 23.1922 14.5236 23.1922 14.9313Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.6348 16.1662C21.6348 16.291 21.6662 16.3948 21.7253 16.4606L21.8405 16.5272L25.8758 18.8583L26.4998 17.778L22.3959 15.407L22.2425 15.3184C22.2359 15.3184 22.2273 15.3184 22.2206 15.3184C22.0292 15.3184 21.8005 15.547 21.6938 15.8556C21.6557 15.9661 21.6376 16.0719 21.6376 16.1672L21.6348 16.1662Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.106 17.6902C26.9793 17.6292 26.8117 17.6445 26.6269 17.7493C26.625 17.7493 26.625 17.7493 26.6231 17.7512C26.2287 17.9789 25.9096 18.5314 25.9096 18.9858V18.9896C25.9115 19.2058 25.9848 19.3611 26.1048 19.4392L25.0503 18.8305C24.9931 18.7981 24.9531 18.7428 24.9369 18.679C24.9226 18.62 24.915 18.5552 24.9141 18.4837V18.479C24.9141 17.9865 25.2599 17.3873 25.6866 17.1415C25.6885 17.1396 25.6885 17.1396 25.6914 17.1396C25.7562 17.1025 25.819 17.0758 25.8791 17.0596C25.9391 17.0434 26.002 17.0539 26.0563 17.0844L27.1051 17.6902H27.106Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.3372 18.1638C27.3372 18.6192 27.0171 19.1707 26.6237 19.3984C26.4312 19.5089 26.2578 19.5232 26.1292 19.4537L26.1054 19.4403C25.9854 19.3622 25.9121 19.2069 25.9102 18.9906V18.9868C25.9102 18.5315 26.2283 17.9799 26.6237 17.7523C26.6256 17.7503 26.6256 17.7503 26.6275 17.7503C26.8123 17.6446 26.979 17.6303 27.1066 17.6913C27.1095 17.6913 27.1123 17.6932 27.1152 17.6951L27.1409 17.7113C27.2629 17.7885 27.3372 17.9447 27.3372 18.1647V18.1638Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.99838 3.92351C6.99838 3.98924 6.986 4.05404 6.96218 4.11882C6.90026 4.28172 6.75927 4.43698 6.54017 4.56368C5.92859 4.9171 4.93597 4.9171 4.32344 4.56368C4.10338 4.43698 3.9624 4.28172 3.90143 4.11882C3.87667 4.05499 3.86523 3.98924 3.86523 3.92351C3.86523 3.69202 4.01765 3.46056 4.32439 3.28338C4.93597 2.92996 5.92859 2.92996 6.54112 3.28338C6.84691 3.46056 7.00028 3.69202 7.00028 3.92351H6.99838Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M6.30193 1.6688C6.30193 1.18773 5.91231 0.798096 5.43124 0.798096C4.95017 0.798096 4.56055 1.18773 4.56055 1.6688V3.92363C4.56055 3.9484 4.56722 3.97316 4.58056 3.99698C4.61485 4.05795 4.69296 4.11703 4.8149 4.16466C5.15498 4.29708 5.7056 4.29708 6.04568 4.16466C6.16761 4.11703 6.24573 4.0589 6.28002 3.99698C6.29336 3.97316 6.30002 3.9484 6.30002 3.92363V1.6688H6.30193Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.42969 1.67847V4.26387" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ c(h, {
                                      className: `framer-nsueta`,
                                      "data-framer-name": `Group 55337`,
                                      fill: `rgba(0,0,0,1)`,
                                      intrinsicHeight: 40,
                                      intrinsicWidth: 12,
                                      svg: `<svg width="12" height="40" viewBox="0 0 12 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M11.0414 36.138C11.0491 35.5537 10.6726 34.86 9.68456 34.2639C8.69932 33.6712 7.37107 33.345 6.01206 33.3197C4.65293 33.2944 3.31711 33.571 2.31719 34.1264C1.31712 34.683 0.923821 35.3602 0.916135 35.9439C0.908432 36.5288 1.2852 37.2233 2.27288 37.8192L11.0414 36.138ZM11.0414 36.138C11.0337 36.7211 10.6405 37.3985 9.64006 37.9569M11.0414 36.138L9.64006 37.9569M9.64006 37.9569C8.6421 38.5121 7.30647 38.7888 5.9468 38.7634C4.58725 38.7381 3.25812 38.4119 2.27292 37.8193L9.64006 37.9569Z" fill="#94C518" stroke="#73B200"/>
</g>
<path d="M8.70434 34.5271C10.1855 35.4206 10.1681 36.8218 8.66262 37.6597C7.15712 38.4977 4.7372 38.4525 3.25257 37.5589C1.77141 36.6653 1.78879 35.2642 3.29429 34.4262C4.79978 33.5883 7.2197 33.6335 8.70434 34.5271Z" fill="#73B200"/>
<path d="M3.8916 36.0432H8.06388V0.710938H3.8916V36.0432Z" fill="url(#paint0_linear_4345_8630)"/>
<defs>
<linearGradient id="paint0_linear_4345_8630" x1="5.64853" y1="36.0677" x2="6.307" y2="0.673111" gradientUnits="userSpaceOnUse">
<stop stop-color="#73B200"/>
<stop offset="0.2852" stop-color="#73B200" stop-opacity="0.28"/>
<stop offset="0.4875" stop-color="#94C518" stop-opacity="0.2"/>
<stop offset="1" stop-color="#D9F68E" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ c(h, {
                                      className: `framer-10n6imn`,
                                      "data-framer-name": `Group`,
                                      fill: `rgba(0,0,0,1)`,
                                      intrinsicHeight: 42,
                                      intrinsicWidth: 47,
                                      svg: `<svg width="47" height="42" viewBox="0 0 47 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.4779 26.8857C41.4779 27.0676 41.5328 27.2188 41.6412 27.3031L41.7188 27.3473L43.3338 28.2799C43.2041 28.2023 43.1412 28.0417 43.1412 27.8437C43.1412 27.6456 43.2067 27.4035 43.3405 27.1733L44.5488 25.0806L43.8477 24.6765L43.3405 24.3834C43.2442 24.3272 43.1826 24.2255 43.1559 24.0971C43.1238 23.9445 43.1425 23.7546 43.2108 23.5579L42.5431 24.7167H42.5417L41.6773 26.2153C41.5448 26.4454 41.4779 26.685 41.4779 26.8857Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.7055 27.6898C36.7028 27.8972 36.7697 28.0658 36.9049 28.1448L38.5828 29.1136C38.5909 29.1176 38.5989 29.1216 38.6069 29.1256L38.5681 29.1029C38.4343 29.0253 38.3687 28.862 38.3687 28.66V28.6358C38.3687 28.4351 38.4343 28.1957 38.5681 27.9642L39.0364 27.1519L40.246 25.0579C40.3758 24.8304 40.5471 24.6551 40.7197 24.5547C40.6501 24.3848 40.6127 24.1774 40.6127 23.9393C40.6127 23.9406 40.6113 23.9406 40.6113 23.9406C40.2875 24.1266 39.9851 24.1948 39.7309 24.156C39.7764 23.879 39.7148 23.6422 39.5462 23.5445C39.4927 23.5137 39.4338 23.499 39.3696 23.499C39.2719 23.499 39.1636 23.5338 39.0565 23.5967C38.8852 23.6984 38.714 23.875 38.5828 24.1012L36.9049 27.0061C36.7697 27.2416 36.7028 27.4865 36.7055 27.6898Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M38.3681 28.636C38.3735 28.4406 38.439 28.2119 38.5675 27.9911L39.0479 27.1588L39.0358 27.1521L38.5675 27.9644C38.4337 28.1958 38.3681 28.4353 38.3681 28.636Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M41.6384 27.3032C41.6494 27.3114 41.6617 27.321 41.6754 27.3279C41.689 27.3361 41.7027 27.3429 41.7178 27.3484L41.6384 27.3032Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M38.3691 28.6358C38.3744 28.4404 38.44 28.2116 38.5684 27.9908L39.0488 27.1586L39.0368 27.1519L38.5684 27.9641C38.4346 28.1956 38.3691 28.435 38.3691 28.6358Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M38.3694 28.6358V28.6599C38.3694 28.862 38.435 29.0252 38.5688 29.1029L38.6076 29.1256L40.2468 30.0717C40.5117 30.2242 40.9426 29.9766 41.2088 29.515C41.3413 29.2848 41.4082 29.0453 41.4082 28.8446C41.4082 28.6439 41.3413 28.4806 41.2088 28.4043L40.0006 27.7059L41.2088 25.6145C41.3052 25.4459 41.3667 25.2733 41.3935 25.114C41.439 24.8371 41.3774 24.6002 41.2088 24.5026C41.1553 24.4718 41.0951 24.457 41.0309 24.457C40.9332 24.457 40.8262 24.4918 40.7204 24.5547C40.5478 24.6551 40.3766 24.8304 40.2468 25.0579L39.0371 27.1519L39.0492 27.1587L38.5688 27.9909C38.4404 28.2117 38.3748 28.4405 38.3694 28.6358Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.1409 27.8437C43.1409 28.0418 43.2038 28.2024 43.3336 28.28L43.347 28.288C43.6119 28.4339 44.0388 28.185 44.3024 27.7287L45.9803 24.8223C46.1141 24.5909 46.1797 24.3514 46.1797 24.1507V24.1266C46.1797 23.9245 46.1141 23.7612 45.9803 23.685L44.3024 22.7162C44.3024 22.7162 44.2943 22.7122 44.2903 22.7109L43.8929 22.4807C43.8916 22.4887 43.8902 22.4982 43.8875 22.5062C43.8715 22.5905 43.8528 22.6734 43.8287 22.759C43.8166 22.8032 43.8046 22.8447 43.7899 22.8875C43.6561 23.3143 43.4326 23.7358 43.1556 24.0971C43.1824 24.2256 43.244 24.3273 43.3403 24.3835L43.8474 24.6765L44.5486 25.0806L43.3403 27.1734C43.2065 27.4035 43.1409 27.643 43.1409 27.8437Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M38.3467 22.8739V22.8859C38.3481 23.0585 38.3668 23.2164 38.4016 23.3582C38.439 23.5121 38.5367 23.6446 38.6745 23.7235L38.8083 23.7998L40.4662 24.7592L41.2249 25.1968C41.0175 25.0616 40.8663 24.8301 40.7967 24.5143C40.77 24.3912 40.7553 24.2561 40.7539 24.1102V24.1009C40.7539 23.001 41.5246 21.6656 42.4787 21.1156C42.4827 21.1116 42.484 21.1116 42.4881 21.1089C42.935 20.8547 43.3391 20.8186 43.6455 20.9658L41.2075 19.5581L41.1085 19.5006C40.98 19.4257 40.8248 19.3989 40.6817 19.439C40.5358 19.4805 40.3833 19.5448 40.2267 19.6344C40.2214 19.6358 40.2187 19.6357 40.216 19.6397C39.9042 19.819 39.6112 20.0759 39.353 20.381C38.7548 21.0862 38.3467 22.0429 38.3467 22.8739Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M44.2041 22.1112C44.2041 23.2111 43.4293 24.5465 42.4793 25.0964C42.0137 25.364 41.5935 25.3988 41.2831 25.2302L41.2255 25.1981C40.9365 25.0107 40.7586 24.6348 40.7545 24.1116V24.1022C40.7545 23.0023 41.5253 21.6669 42.4793 21.117C42.4833 21.1129 42.4847 21.1129 42.4887 21.1116C42.9356 20.8574 43.3397 20.8199 43.6461 20.9684C43.6542 20.9698 43.6595 20.9738 43.6675 20.9778L43.7291 21.0166C44.0248 21.2026 44.2041 21.5813 44.2041 22.1125V22.1112Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.2316 23.2493C42.2316 23.4315 42.3414 23.5146 42.4781 23.4356C42.6147 23.3565 42.7246 23.1462 42.7246 22.9639C42.7246 22.7817 42.6147 22.6986 42.4781 22.7777C42.3414 22.8567 42.2316 23.0671 42.2316 23.2493Z" fill="#272727"/>
<path d="M0.732197 30.2429C0.732197 30.5012 0.859329 30.7594 1.1149 30.9066L12.0831 37.2384C12.7936 37.6492 13.67 37.6492 14.3806 37.2384L25.3488 30.9066C25.6043 30.7594 25.7314 30.5012 25.7314 30.2442C25.7314 29.9847 25.6043 29.7278 25.3488 29.5806L14.3806 23.2475C13.67 22.8381 12.7936 22.8381 12.0831 23.2475L1.1149 29.5806C0.859329 29.7278 0.732197 29.9847 0.732197 30.2429Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M40.5106 13.9038V21.0504C40.7689 20.7453 41.0619 20.4884 41.3737 20.3091C41.3764 20.3051 41.3791 20.3052 41.3844 20.3038C41.541 20.2142 41.6935 20.1499 41.8394 20.1084C41.9826 20.0683 42.1378 20.0951 42.2662 20.17L42.3652 20.2275V13.9038H40.5106Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5133 12.5387C17.0645 12.8571 17.9584 12.8571 18.5083 12.5387L28.0367 7.02714C28.588 6.70868 28.588 6.19354 28.0367 5.87508C27.4854 5.55662 26.5916 5.55662 26.0417 5.87508L16.5133 11.3866C15.962 11.7051 15.962 12.2202 16.5133 12.5387Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.732197 30.2439V34.4375C0.732197 34.6944 0.860667 34.9526 1.1149 35.0998L12.0831 41.4329C12.7936 41.8423 13.67 41.8423 14.3806 41.4329L25.3488 35.0998C25.4772 35.0262 25.5722 34.9245 25.6364 34.8094C25.6993 34.6943 25.7314 34.5659 25.7314 34.4375V30.2439C25.7314 30.5008 25.6043 30.7591 25.3488 30.9063L14.3806 37.238C13.67 37.6488 12.7936 37.6488 12.0831 37.238L1.1149 30.9063C0.859329 30.7591 0.732197 30.5008 0.732197 30.2439Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.1738 30.2431C22.1738 30.1386 22.1444 30.0341 22.0854 29.9443L22.1738 30.2431Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.28951 30.2431L4.37793 29.9443C4.31898 30.0341 4.28951 30.1386 4.28951 30.2431Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.87686 24.8903C5.87686 25.0415 5.95178 25.1941 6.10165 25.281L9.21803 27.0794L12.5552 29.0062C12.9727 29.2471 13.4892 29.2471 13.9066 29.0062L17.2438 27.0794L20.3602 25.281C20.51 25.1941 20.585 25.0415 20.585 24.8903C20.585 24.7391 20.51 24.5866 20.3602 24.4996L13.9066 20.7744C13.4892 20.5335 12.9727 20.5335 12.5552 20.7744L6.10165 24.4996C5.95178 24.5866 5.87686 24.7378 5.87686 24.8903Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.8316 34.3173V35.8066L23.5162 34.8338C23.8721 34.6277 24.1611 34.1286 24.1611 33.7165C24.1611 33.5104 24.0889 33.3659 23.9725 33.299C23.8561 33.2321 23.6941 33.2415 23.5162 33.3445L21.8316 34.3173Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3775 37.0564C18.3775 37.2624 18.4497 37.407 18.5661 37.4739C18.6825 37.5408 18.8445 37.5314 19.0224 37.4284L21.8311 35.8066V34.3174L19.0224 35.9391C18.6665 36.1451 18.3775 36.6443 18.3775 37.0564Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.98926 37.6984L6.96788 35.9548" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.98926 38.7181L8.40765 37.8042" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5166 34.0545C2.5166 34.2367 2.40673 34.3198 2.27007 34.2407C2.13341 34.1617 2.02356 33.9513 2.02356 33.7691C2.02356 33.5869 2.13341 33.5038 2.27007 33.5829C2.40673 33.6619 2.5166 33.8723 2.5166 34.0545Z" fill="#272727"/>
<path d="M3.57617 34.6658C3.57617 34.848 3.46633 34.9311 3.32967 34.8521C3.19301 34.773 3.08313 34.5627 3.08313 34.3804C3.08313 34.1982 3.19301 34.1151 3.32967 34.1942C3.46633 34.2732 3.57617 34.4836 3.57617 34.6658Z" fill="#272727"/>
<path d="M4.28914 30.2429C4.28914 30.4276 4.38013 30.6122 4.56211 30.7179L12.4099 35.2473C12.9184 35.5417 13.5446 35.5417 14.0531 35.2473L21.9009 30.7179C22.0829 30.6122 22.1738 30.4276 22.1738 30.2429L22.0855 29.9445L20.5856 24.8906C20.5856 25.0418 20.5106 25.1944 20.3608 25.2813L17.2444 27.0797L13.9072 29.0065C13.4898 29.2474 12.9732 29.2474 12.5558 29.0065L9.21862 27.0797L6.10224 25.2813C5.95237 25.1944 5.87745 25.0418 5.87745 24.8906L4.37744 29.9445L4.28914 30.2429Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.1507 22.6731C10.702 22.7789 11.4071 22.1205 11.7256 21.2013L15.8335 9.34454C16.1519 8.42528 15.9633 7.59439 15.412 7.48868C14.8607 7.38297 14.1556 8.04131 13.8371 8.96056L9.72918 20.8172C9.41071 21.7365 9.5994 22.5674 10.1507 22.6731Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5508 9.97607C14.8237 10.0283 15.173 9.70311 15.3295 9.24817C15.4874 8.79322 15.3937 8.38239 15.1208 8.3302C14.8478 8.27802 14.4986 8.60323 14.342 9.05817C14.1841 9.51312 14.2778 9.92389 14.5508 9.97607Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.4414 21.8329C10.7143 21.8851 11.0636 21.56 11.2202 21.105C11.378 20.6501 11.2844 20.2393 11.0114 20.1871C10.7384 20.135 10.3892 20.4601 10.2326 20.915C10.0747 21.37 10.1684 21.7808 10.4414 21.8329Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5107 20.5136L12.8582 19.7349C13.0883 19.6024 13.372 19.6024 13.6035 19.7349L14.9509 20.5136H17.2832V24.8904C17.2832 24.9734 17.2417 25.0577 17.1587 25.1058L13.6035 27.1585C13.3734 27.291 13.0897 27.291 12.8582 27.1585L9.30291 25.1058C9.21995 25.0577 9.17848 24.9747 9.17848 24.8904V20.5136H11.5107Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.6035 22.7815L17.1588 20.7289C17.3247 20.6339 17.3247 20.3944 17.1588 20.2994L13.6035 18.2468C13.3734 18.1143 13.0897 18.1143 12.8582 18.2468L9.30293 20.2994C9.13701 20.3944 9.13701 20.6339 9.30293 20.7289L12.8582 22.7815C13.0884 22.914 13.372 22.914 13.6035 22.7815Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.4444 20.543L13.2803 19.4819" stroke="#272727" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M14.1494 19.9822L12.3122 21.0433" stroke="#272727" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M13.1798 21.5437L15.0156 20.4827" stroke="#272727" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M15.8955 8.06028L17.2429 7.28148C17.4731 7.14901 17.7568 7.14901 17.9883 7.28148L19.3357 8.06028H21.668V12.4371C21.668 12.5201 21.6265 12.6044 21.5435 12.6525L17.9883 14.7051C17.7581 14.8376 17.4744 14.8376 17.2429 14.7051L13.6877 12.6525C13.6047 12.6044 13.5632 12.5214 13.5632 12.4371V8.06028H15.8955Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.9883 10.3282L21.5435 8.27561C21.7094 8.18061 21.7094 7.9411 21.5435 7.84609L17.9883 5.79344C17.7581 5.66097 17.4745 5.66097 17.243 5.79344L13.6877 7.84609C13.5218 7.9411 13.5218 8.18061 13.6877 8.27561L17.243 10.3282C17.4731 10.4607 17.7568 10.4607 17.9883 10.3282Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.3203 2.40812L26.6678 1.62938C26.8979 1.49691 27.1816 1.49691 27.4131 1.62938L28.7605 2.40812H31.0928V6.78495C31.0928 6.86791 31.0513 6.95219 30.9683 7.00036L27.4131 9.05301C27.1829 9.18548 26.8992 9.18548 26.6678 9.05301L23.1125 7.00036C23.0295 6.95219 22.988 6.86925 22.988 6.78495V2.40812H25.3203Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.4131 4.67634L30.9683 2.62369C31.1343 2.52869 31.1343 2.28918 30.9683 2.19417L27.4131 0.141588C27.1829 0.00911899 26.8992 0.00911899 26.6677 0.141588L23.1125 2.19417C22.9466 2.28918 22.9466 2.52869 23.1125 2.62369L26.6677 4.67634C26.8979 4.80881 27.1816 4.80881 27.4131 4.67634Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.9886 25.4698C15.5399 25.5755 16.245 24.9171 16.5635 23.9979L20.6714 12.1412C20.9898 11.222 20.8012 10.391 20.2499 10.2853C19.6986 10.1796 18.9934 10.8379 18.675 11.7572L14.5671 23.6138C14.2486 24.5331 14.4373 25.3641 14.9886 25.4698Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.3857 12.7717C19.6587 12.8239 20.0079 12.4987 20.1645 12.0438C20.3224 11.5888 20.2287 11.178 19.9558 11.1259C19.6828 11.0737 19.3335 11.3988 19.177 11.8538C19.0191 12.3087 19.1128 12.7195 19.3857 12.7717Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.2783 24.6282C15.5513 24.6804 15.9005 24.3552 16.0571 23.9003C16.2149 23.4453 16.1213 23.0345 15.8483 22.9823C15.5754 22.9301 15.2261 23.2553 15.0696 23.7103C14.9117 24.1652 15.0054 24.576 15.2783 24.6282Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5133 8.5472C17.0645 8.86567 17.9584 8.86567 18.5083 8.5472L28.0367 3.03569C28.588 2.71722 28.588 2.20208 28.0367 1.88362C27.4854 1.56516 26.5916 1.56516 26.0417 1.88362L16.5133 7.39514C15.962 7.7136 15.962 8.22874 16.5133 8.5472Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.5412 2.7479C26.8168 2.90713 27.2637 2.90713 27.5394 2.7479C27.815 2.58867 27.815 2.33041 27.5394 2.17118C27.2637 2.01195 26.8168 2.01195 26.5412 2.17118C26.2655 2.33041 26.2655 2.58867 26.5412 2.7479Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.0128 8.25962C17.2885 8.41885 17.7354 8.41885 18.011 8.25962C18.2867 8.10039 18.2867 7.84213 18.011 7.6829C17.7354 7.52367 17.2885 7.52367 17.0128 7.6829C16.7372 7.84213 16.7372 8.10039 17.0128 8.25962Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.0987 29.3811L19.9443 28.894" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.43972 30.5787L12.4785 32.333C12.9441 32.6019 13.5195 32.6019 13.9852 32.333L17.4414 30.3379" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.17661 28.6946L8.08203 29.7944" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.4978 6.90682C28.4978 6.90682 28.5781 6.96704 28.5968 6.9764L30.4554 8.04954C30.3564 7.93982 30.3029 7.76454 30.3029 7.55312C30.3029 7.39255 30.3337 7.21323 30.3979 7.02724C30.5786 6.50539 30.9639 6.12005 31.2877 6.12005C31.2998 6.12005 31.3132 6.12002 31.3252 6.12136L29.5442 5.09239C29.5442 5.09239 29.4238 5.04556 29.3582 5.03352C29.0317 4.97063 28.6143 5.35998 28.4256 5.90457C28.2784 6.33142 28.3158 6.72618 28.4978 6.90682Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30.303 7.55319C30.303 7.7646 30.3565 7.93989 30.4556 8.04961L30.6496 8.16199L40.8337 14.0415L41.8867 12.2177L31.5862 6.2713L31.3266 6.12142H31.3253C31.3133 6.12009 31.2999 6.12012 31.2878 6.12012C30.964 6.12012 30.5787 6.50545 30.398 7.0273C30.3338 7.2133 30.303 7.39262 30.303 7.55319Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.9117 12.0704C42.6977 11.9674 42.4153 11.9928 42.1036 12.1708C42.1009 12.1708 42.0996 12.1708 42.0969 12.1748C41.4305 12.5589 40.8926 13.4914 40.8926 14.2595V14.2662C40.8953 14.6315 41.0197 14.8938 41.2218 15.0249L39.4408 13.9959C39.3444 13.9411 39.2762 13.8487 39.2508 13.7403C39.2267 13.6413 39.2133 13.5303 39.2133 13.4099V13.4018C39.2133 12.5696 39.7967 11.5593 40.5179 11.1431C40.5206 11.1404 40.522 11.1405 40.526 11.1391C40.6357 11.0762 40.7414 11.0321 40.8431 11.0026C40.9448 10.9732 41.0518 10.9933 41.1415 11.0454L42.9131 12.0691L42.9117 12.0704Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.3018 12.8696C43.3018 13.6377 42.7612 14.5703 42.0975 14.9543C41.7723 15.1416 41.4793 15.1657 41.2625 15.048L41.2224 15.0252C41.0203 14.8941 40.8959 14.6319 40.8932 14.2666V14.2598C40.8932 13.4918 41.4311 12.5592 42.0975 12.1752C42.1002 12.1725 42.1015 12.1725 42.1042 12.1711C42.416 11.9932 42.6983 11.9677 42.9124 12.0708C42.9177 12.0708 42.9217 12.0748 42.9271 12.0774L42.9699 12.1042C43.176 12.234 43.3018 12.499 43.3018 12.8696Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M41.4385 16.467V18.6174" stroke="#272727" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>
`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ c(h, {
                                      className: `framer-1sarrrh`,
                                      "data-framer-name": `Group`,
                                      fill: `rgba(0,0,0,1)`,
                                      intrinsicHeight: 26,
                                      intrinsicWidth: 19,
                                      svg: `<svg width="19" height="26" viewBox="0 0 19 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.4326 17.2917L8.45763 15.5444C8.97457 15.2463 9.61274 15.2463 10.1297 15.5444L13.1547 17.2917H18.3896V20.6359C18.3896 20.824 18.2963 21.0107 18.111 21.118L10.1297 25.7259C9.61274 26.0241 8.97457 26.0241 8.45763 25.7259L0.476335 21.118C0.291016 21.0107 0.197659 20.8226 0.197659 20.6359V17.2917H5.4326Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.1303 22.3831L18.1116 17.7752C18.4836 17.5606 18.4836 17.0241 18.1116 16.8096L10.1303 12.2017C9.61336 11.9035 8.9752 11.9035 8.45825 12.2017L0.476959 16.8096C0.104927 17.0241 0.104927 17.5606 0.476959 17.7752L8.45825 22.3831C8.9752 22.6813 9.61336 22.6813 10.1303 22.3831Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.35059 21.7272L1.38547 20.0161" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.67676 23.0685L5.70697 22.5098" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5813 20.3968C16.5813 20.5865 16.6957 20.673 16.838 20.5906C16.9803 20.5083 17.0947 20.2893 17.0947 20.0995C17.0947 19.9098 16.9803 19.8233 16.838 19.9056C16.6957 19.988 16.5813 20.207 16.5813 20.3968Z" fill="#272727"/>
<path d="M15.4778 21.0349C15.4778 21.2247 15.5922 21.3111 15.7345 21.2288C15.8768 21.1465 15.9912 20.9275 15.9912 20.7377C15.9912 20.548 15.8768 20.4615 15.7345 20.5438C15.5922 20.6261 15.4778 20.8452 15.4778 21.0349Z" fill="#272727"/>
<path d="M14.3743 21.6719C14.3743 21.8616 14.4887 21.9482 14.631 21.8658C14.7733 21.7835 14.8877 21.5645 14.8877 21.3747C14.8877 21.185 14.7733 21.0985 14.631 21.1808C14.4887 21.2631 14.3743 21.4821 14.3743 21.6719Z" fill="#272727"/>
<path d="M5.4326 11.718L8.45763 9.97071C8.97457 9.67252 9.61274 9.67252 10.1297 9.97071L13.1547 11.718H18.3896V15.0621C18.3896 15.2502 18.2963 15.4369 18.111 15.5442L10.1297 20.1522C9.61274 20.4503 8.97457 20.4503 8.45763 20.1522L0.476335 15.5442C0.291016 15.4369 0.197659 15.2488 0.197659 15.0621V11.718H5.4326Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.476959 12.2015L8.45825 16.8108C8.9752 17.109 9.61336 17.109 10.1303 16.8108L14.5696 14.2469L18.1116 12.2015C18.4836 11.9869 18.4836 11.4519 18.1116 11.2373L10.1303 6.62798C9.87114 6.47889 9.58271 6.40503 9.29428 6.40503C9.00585 6.40503 8.71742 6.47889 8.45825 6.62798L0.476959 11.2373C0.104927 11.4519 0.104927 11.9869 0.476959 12.2015Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.46094 15.0622L1.38525 14.4421" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.67676 17.4952L3.38003 15.5933" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5813 14.8233C16.5813 15.013 16.6957 15.0995 16.838 15.0171C16.9803 14.9348 17.0947 14.7158 17.0947 14.526C17.0947 14.3363 16.9803 14.2498 16.838 14.3322C16.6957 14.4145 16.5813 14.6335 16.5813 14.8233Z" fill="#272727"/>
<path d="M15.4778 15.4615C15.4778 15.6512 15.5922 15.7376 15.7345 15.6553C15.8768 15.573 15.9912 15.354 15.9912 15.1642C15.9912 14.9745 15.8768 14.888 15.7345 14.9703C15.5922 15.0527 15.4778 15.2717 15.4778 15.4615Z" fill="#272727"/>
<path d="M14.3743 16.0984C14.3743 16.2881 14.4887 16.3747 14.631 16.2924C14.7733 16.21 14.8877 15.991 14.8877 15.8012C14.8877 15.6115 14.7733 15.525 14.631 15.6073C14.4887 15.6896 14.3743 15.9087 14.3743 16.0984Z" fill="#272727"/>
<path d="M5.4326 6.14596L8.45763 4.39869C8.97457 4.1005 9.61274 4.1005 10.1297 4.39869L13.1547 6.14596H18.3896V9.49007C18.3896 9.67818 18.2963 9.86492 18.111 9.97221L10.1297 14.5801C9.61274 14.8783 8.97457 14.8783 8.45763 14.5801L0.476335 9.97221C0.291016 9.86492 0.197659 9.67678 0.197659 9.49007V6.14596H5.4326Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.1303 11.2359L18.1116 6.62797C18.4836 6.41339 18.4836 5.87691 18.1116 5.66233L10.1303 1.05445C9.61336 0.756265 8.9752 0.756265 8.45825 1.05445L0.476959 5.66233C0.104927 5.87691 0.104927 6.41339 0.476959 6.62797L8.45825 11.2359C8.9752 11.534 9.61336 11.534 10.1303 11.2359Z" fill="white" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.35059 10.5811L1.38547 8.86865" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.67676 11.9229L5.70697 11.3628" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5813 9.25099C16.5813 9.44074 16.6957 9.52726 16.838 9.44494C16.9803 9.36263 17.0947 9.14358 17.0947 8.95383C17.0947 8.76409 16.9803 8.67757 16.838 8.75988C16.6957 8.8422 16.5813 9.06125 16.5813 9.25099Z" fill="#272727"/>
<path d="M15.4778 9.88771C15.4778 10.0775 15.5922 10.1639 15.7345 10.0816C15.8768 9.99931 15.9912 9.7803 15.9912 9.59055C15.9912 9.40081 15.8768 9.31429 15.7345 9.3966C15.5922 9.47892 15.4778 9.69797 15.4778 9.88771Z" fill="#272727"/>
<path d="M14.3743 10.5244C14.3743 10.7142 14.4887 10.8007 14.631 10.7183C14.7733 10.636 14.8877 10.417 14.8877 10.2272C14.8877 10.0375 14.7733 9.95101 14.631 10.0333C14.4887 10.1156 14.3743 10.3347 14.3743 10.5244Z" fill="#272727"/>
<path d="M5.52694 4.72728H9.09537C9.22635 4.70777 9.36013 4.70777 9.49111 4.72728H13.0596V6.14573C13.0596 6.3199 12.9732 6.4941 12.8004 6.59443L9.98437 8.22049C9.5566 8.46712 9.02991 8.46712 8.60215 8.22049L5.78609 6.59443C5.61331 6.4941 5.52694 6.3199 5.52694 6.14573V4.72728Z" fill="#59770F" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.98438 6.80199L12.8004 5.17589C13.146 4.97664 13.146 4.47782 12.8004 4.27857L9.98438 2.6525C9.55662 2.40587 9.02993 2.40587 8.60216 2.6525L5.78611 4.27857C5.44055 4.47782 5.44055 4.97664 5.78611 5.17589L8.60216 6.80199C9.02993 7.04862 9.55662 7.04862 9.98438 6.80199Z" fill="#73B200" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.9287 4.75365L9.24689 3.78247" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.1348 5.21239L8.45295 4.24121" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33984 5.67065L7.65666 4.69946" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ l(u.div, {
                      className: `framer-9s079b`,
                      "data-framer-name": `header`,
                      layout: P,
                      children: [
                        de() &&
                          /*#__PURE__*/ c(D, {
                            breakpoint: O,
                            overrides: {
                              NizB39PYO: { height: 498, width: void 0, y: (_?.y || 0) + 663.2 },
                            },
                            children: /*#__PURE__*/ c(x, {
                              height: 438,
                              width: `1440px`,
                              y: (_?.y || 0) + 963,
                              children: /*#__PURE__*/ c(T, {
                                className: `framer-1h1gr22-container hidden-52mnml`,
                                nodeId: `McmaBrMrC`,
                                scopeId: `P_MLCUSc2`,
                                children: /*#__PURE__*/ c(D, {
                                  breakpoint: O,
                                  overrides: { NizB39PYO: { variant: Y(`vXscR1iJC`) } },
                                  children: /*#__PURE__*/ c(k, {
                                    height: `100%`,
                                    id: `McmaBrMrC`,
                                    layoutId: `McmaBrMrC`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: Y(`zev4Tv3qQ`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        R() &&
                          /*#__PURE__*/ c(D, {
                            breakpoint: O,
                            overrides: {
                              vcDUhCzz9: { height: 498, width: `810px`, y: (_?.y || 0) + 963 },
                            },
                            children: /*#__PURE__*/ c(x, {
                              children: /*#__PURE__*/ c(T, {
                                className: `framer-1ir08d6-container hidden-kqm8v6 hidden-1flt3de`,
                                nodeId: `JErYqZn0N`,
                                scopeId: `P_MLCUSc2`,
                                children: /*#__PURE__*/ c(k, {
                                  height: `100%`,
                                  id: `JErYqZn0N`,
                                  layoutId: `JErYqZn0N`,
                                  style: { width: `100%` },
                                  variant: Y(`G8rxyXoDj`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                    I() &&
                      /*#__PURE__*/ l(u.div, {
                        className: `framer-ubs8g2 hidden-kqm8v6 hidden-52mnml`,
                        "data-framer-name": `Group 55340`,
                        layout: P,
                        children: [
                          /*#__PURE__*/ c(h, {
                            className: `framer-1ffz9u9`,
                            "data-framer-name": `Vector`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 76,
                            intrinsicWidth: 134,
                            svg: `<svg width="134" height="76" viewBox="-1 -1 134 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.947266 0.469971L131.881 73.5853" stroke="#73B200" stroke-width="2" stroke-miterlimit="10"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-df8iqf`,
                            "data-framer-name": `Vector`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 90,
                            intrinsicWidth: 148,
                            svg: `<svg width="148" height="90" viewBox="-1 -1 148 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.935547 0.0883789L145.688 87.0136" stroke="#73B200" stroke-width="2" stroke-miterlimit="10"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-1o9s9on`,
                            "data-framer-name": `Group 55334`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 89,
                            intrinsicWidth: 288,
                            svg: `<svg width="288" height="89" viewBox="0 0 288 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.128888 71.6991L135.998 0.00854492L287.072 88.4141" stroke="#73B200" stroke-width="2" stroke-miterlimit="10"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-1l2i6a1`,
                            "data-framer-name": `Vector`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 33,
                            intrinsicWidth: 54,
                            svg: `<svg width="54" height="33" viewBox="-2 -2 54 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49.8629 0.357178L0.134766 28.8101" stroke="#73B200" stroke-width="4" stroke-miterlimit="10"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-1jidcv5`,
                            "data-framer-name": `Group`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 43,
                            intrinsicWidth: 75,
                            svg: `<svg width="75" height="43" viewBox="0 0 75 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.6979 26.3405L30.6988 26.341C31.1251 26.5885 31.2267 26.8455 31.2257 27.0034C31.2247 27.1637 31.1171 27.4251 30.6851 27.6773C30.2527 27.9278 29.6573 28.0658 29.0355 28.065C28.4139 28.0643 27.8193 27.9249 27.3893 27.6771C26.9576 27.4249 26.8564 27.1675 26.8574 27.0122C26.8584 26.8553 26.9649 26.595 27.4021 26.3414C27.832 26.0935 28.4284 25.9539 29.0514 25.9531C29.6748 25.9524 30.2697 26.0907 30.6979 26.3405Z" fill="#73B200" stroke="#73B200"/>
<path d="M19.2897 33.0841L19.2906 33.0846C19.7169 33.3322 19.8185 33.5891 19.8175 33.7471C19.8165 33.9073 19.7089 34.1688 19.2769 34.421C18.8445 34.6714 18.2491 34.8094 17.6273 34.8087C17.0057 34.8079 16.4111 34.6685 15.9811 34.4207C15.5494 34.1686 15.4482 33.9112 15.4492 33.7559C15.4502 33.5989 15.5567 33.3386 15.9939 33.0851C16.4238 32.8372 17.0202 32.6975 17.6432 32.6968C18.2666 32.696 18.8615 32.8344 19.2897 33.0841Z" fill="#73B200" stroke="#73B200"/>
<path d="M5.1979 40.4655L5.19877 40.466C5.6251 40.7135 5.72673 40.9705 5.72573 41.1284C5.72472 41.2887 5.61712 41.5501 5.18508 41.8023C4.7527 42.0528 4.15729 42.1908 3.53549 42.19C2.9139 42.1893 2.31935 42.0499 1.88927 41.8021C1.45757 41.5499 1.35645 41.2925 1.35743 41.1372C1.35842 40.9803 1.46486 40.72 1.90207 40.4664C2.332 40.2185 2.92841 40.0789 3.55141 40.0781C4.17478 40.0774 4.7697 40.2157 5.1979 40.4655Z" fill="#73B200" stroke="#73B200"/>
<path d="M41.4342 20.14L41.4351 20.1405C41.8614 20.3881 41.9631 20.645 41.9621 20.803C41.961 20.9632 41.8535 21.2247 41.4215 21.4769C40.9891 21.7273 40.3936 21.8654 39.7718 21.8646C39.1502 21.8639 38.5556 21.7245 38.1256 21.4767C37.6939 21.2245 37.5928 20.9671 37.5938 20.8118C37.5948 20.6548 37.7012 20.3945 38.1384 20.141C38.5683 19.8931 39.1647 19.7534 39.7877 19.7527C40.4111 19.7519 41.006 19.8903 41.4342 20.14Z" fill="#73B200" stroke="#73B200"/>
<path d="M52.1706 13.9389L52.1714 13.9394C52.5977 14.1869 52.6994 14.4439 52.6984 14.6018C52.6974 14.7621 52.5898 15.0235 52.1578 15.2757C51.7254 15.5262 51.13 15.6642 50.5081 15.6635C49.8865 15.6627 49.292 15.5233 48.8619 15.2755C48.4302 15.0234 48.3291 14.7659 48.3301 14.6107C48.3311 14.4536 48.4375 14.1934 48.8747 13.9398C49.3047 13.6919 49.9011 13.5523 50.5241 13.5515C51.1474 13.5508 51.7424 13.6891 52.1706 13.9389Z" fill="#73B200" stroke="#73B200"/>
<path d="M59.6094 7.74789L59.6094 7.74789L59.6106 7.7472C60.0406 7.49914 60.6372 7.35941 61.2604 7.35865C61.8838 7.35789 62.4787 7.49622 62.9069 7.746L62.9078 7.74651C63.3341 7.99405 63.4357 8.25098 63.4347 8.40893C63.4337 8.56918 63.3261 8.83064 62.8941 9.08285C62.4617 9.33327 61.8663 9.47131 61.2445 9.47055C60.6229 9.46979 60.0283 9.33039 59.5983 9.0826C59.1676 8.83104 59.0654 8.5722 59.0664 8.41524C59.0674 8.2573 59.174 7.9975 59.6094 7.74789Z" fill="#73B200" stroke="#73B200"/>
<path d="M73.6452 1.54556L73.646 1.54607C74.0724 1.79361 74.174 2.05054 74.173 2.20849C74.172 2.36874 74.0644 2.6302 73.6323 2.88241C73.2 3.13283 72.6046 3.27087 71.9828 3.27011C71.3612 3.26935 70.7666 3.12995 70.3365 2.88216C69.9048 2.63002 69.8037 2.37259 69.8047 2.21732C69.8057 2.06033 69.9121 1.80006 70.3493 1.54652C70.7793 1.29861 71.3757 1.15897 71.9987 1.15821C72.6221 1.15745 73.217 1.29578 73.6452 1.54556Z" fill="#73B200" stroke="#73B200"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-din9rj`,
                            "data-framer-name": `Group`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 43,
                            intrinsicWidth: 75,
                            svg: `<svg width="75" height="43" viewBox="0 0 75 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.1022 26.0966L30.1031 26.0971C30.5294 26.3446 30.631 26.6016 30.63 26.7595C30.629 26.9198 30.5214 27.1812 30.0894 27.4334C29.657 27.6839 29.0616 27.8219 28.4398 27.8211C27.8182 27.8204 27.2236 27.681 26.7936 27.4332C26.3619 27.181 26.2607 26.9236 26.2617 26.7683C26.2627 26.6114 26.3692 26.3511 26.8064 26.0975C27.2363 25.8496 27.8327 25.71 28.4557 25.7092C29.0791 25.7085 29.674 25.8468 30.1022 26.0966Z" fill="#73B200" stroke="#73B200"/>
<path d="M18.694 32.8402L18.6949 32.8407C19.1212 33.0883 19.2228 33.3452 19.2218 33.5032C19.2208 33.6634 19.1132 33.9249 18.6812 34.1771C18.2488 34.4275 17.6534 34.5655 17.0316 34.5648C16.41 34.564 15.8154 34.4246 15.3854 34.1768C14.9537 33.9247 14.8525 33.6673 14.8535 33.512C14.8545 33.355 14.961 33.0947 15.3982 32.8412C15.8281 32.5933 16.4245 32.4536 17.0475 32.4529C17.6709 32.4521 18.2658 32.5905 18.694 32.8402Z" fill="#73B200" stroke="#73B200"/>
<path d="M4.6022 40.2216L4.60306 40.2221C5.0294 40.4696 5.13103 40.7266 5.13003 40.8845C5.12902 41.0448 5.02142 41.3062 4.58938 41.5584C4.15699 41.8089 3.56159 41.9469 2.93978 41.9461C2.31819 41.9454 1.72364 41.806 1.29357 41.5582C0.861872 41.306 0.760745 41.0486 0.761727 40.8933C0.76272 40.7364 0.869155 40.4761 1.30636 40.2225C1.7363 39.9746 2.33271 39.835 2.95571 39.8342C3.57908 39.8335 4.174 39.9718 4.6022 40.2216Z" fill="#73B200" stroke="#73B200"/>
<path d="M40.8385 19.8961L40.8394 19.8967C41.2657 20.1442 41.3674 20.4011 41.3664 20.5591C41.3653 20.7194 41.2577 20.9808 40.8258 21.233C40.3934 21.4834 39.7979 21.6215 39.1761 21.6207C38.5545 21.62 37.9599 21.4806 37.5299 21.2328C37.0982 20.9806 36.9971 20.7232 36.9981 20.5679C36.999 20.4109 37.1055 20.1506 37.5427 19.8971C37.9726 19.6492 38.569 19.5096 39.192 19.5088C39.8154 19.508 40.4103 19.6464 40.8385 19.8961Z" fill="#73B200" stroke="#73B200"/>
<path d="M51.5749 13.695L51.5757 13.6955C52.002 13.943 52.1037 14.2 52.1027 14.3579C52.1017 14.5182 51.9941 14.7796 51.5621 15.0318C51.1297 15.2823 50.5343 15.4203 49.9124 15.4196C49.2908 15.4188 48.6963 15.2794 48.2662 15.0316C47.8345 14.7795 47.7334 14.522 47.7344 14.3668C47.7354 14.2097 47.8418 13.9495 48.279 13.6959C48.709 13.448 49.3054 13.3084 49.9284 13.3076C50.5517 13.3069 51.1467 13.4452 51.5749 13.695Z" fill="#73B200" stroke="#73B200"/>
<path d="M59.0137 7.504L59.0137 7.504L59.0149 7.50331C59.4449 7.25525 60.0415 7.11551 60.6647 7.11475C61.2881 7.11399 61.883 7.25232 62.3112 7.5021L62.312 7.50261C62.7384 7.75016 62.84 8.00709 62.839 8.16503C62.838 8.32528 62.7304 8.58675 62.2984 8.83895C61.866 9.08938 61.2706 9.22741 60.6488 9.22665C60.0272 9.22589 59.4326 9.08649 59.0025 8.8387C58.5719 8.58715 58.4697 8.3283 58.4707 8.17134C58.4717 8.0134 58.5783 7.75361 59.0137 7.504Z" fill="#73B200" stroke="#73B200"/>
<path d="M73.0495 1.30167L73.0503 1.30217C73.4767 1.54972 73.5783 1.80665 73.5773 1.96459C73.5763 2.12484 73.4687 2.38631 73.0366 2.63851C72.6043 2.88894 72.0089 3.02697 71.387 3.02621C70.7655 3.02546 70.1709 2.88605 69.7408 2.63826C69.3091 2.38612 69.208 2.12869 69.209 1.97342C69.21 1.81643 69.3164 1.55617 69.7536 1.30262C70.1836 1.05471 70.78 0.91507 71.403 0.91431C72.0263 0.91355 72.6213 1.05188 73.0495 1.30167Z" fill="#73B200" stroke="#73B200"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-15kvbpo`,
                            "data-framer-name": `Group`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 4,
                            intrinsicWidth: 6,
                            svg: `<svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.37368 1.07632L4.37455 1.07683C4.80088 1.32437 4.90251 1.58131 4.90151 1.73925C4.9005 1.8995 4.7929 2.16096 4.36086 2.41317C3.92848 2.66359 3.33307 2.80163 2.71127 2.80087C2.08968 2.80011 1.49513 2.66071 1.06505 2.41292C0.633356 2.16078 0.532229 1.90335 0.533211 1.74808C0.534204 1.59109 0.64064 1.33082 1.07785 1.07728C1.50779 0.829373 2.1042 0.689728 2.7272 0.688968C3.35057 0.688208 3.94548 0.826542 4.37368 1.07632Z" fill="#73B200" stroke="#73B200"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-12ir8iw`,
                            "data-framer-name": `Group`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 480,
                            intrinsicWidth: 527,
                            svg: `<svg width="527" height="480" viewBox="0 0 527 480" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M386.277 48.2013C387.477 47.512 389.424 47.512 390.613 48.2013C391.807 48.896 391.797 50.0221 390.597 50.7114C389.392 51.4061 387.461 51.4061 386.261 50.7114C385.072 50.0221 385.072 48.896 386.277 48.2013Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M394.697 43.7052C395.897 43.0159 397.844 43.0159 399.033 43.7052C400.227 44.3999 400.217 45.526 399.017 46.2153C397.812 46.91 395.881 46.91 394.681 46.2153C393.492 45.526 393.492 44.3999 394.697 43.7052Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M377.847 53.1059C379.052 52.4113 380.994 52.4166 382.183 53.1059C383.378 53.8005 383.372 54.9214 382.167 55.616C380.968 56.3053 379.031 56.3106 377.831 55.616C376.647 54.9214 376.653 53.7953 377.847 53.1059Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M369.455 57.9416C370.654 57.2522 372.601 57.2522 373.791 57.9416C374.985 58.6362 374.975 59.7623 373.775 60.4517C372.57 61.1463 370.639 61.1463 369.439 60.4517C368.25 59.7623 368.25 58.6415 369.455 57.9416Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M361.023 62.82C362.228 62.1254 364.17 62.1307 365.359 62.82C366.554 63.5146 366.548 64.6355 365.343 65.3301C364.143 66.0195 362.207 66.0247 361.007 65.3301C359.818 64.6355 359.823 63.5094 361.023 62.82Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M352.605 67.6664C353.805 66.9771 355.752 66.9771 356.941 67.6664C358.136 68.361 358.125 69.4872 356.925 70.1765C355.72 70.8711 353.789 70.8711 352.589 70.1765C351.4 69.4872 351.4 68.361 352.605 67.6664Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M344.179 72.5395C345.379 71.8501 347.326 71.8501 348.515 72.5395C349.71 73.2341 349.699 74.3602 348.499 75.0496C347.294 75.7442 345.363 75.7442 344.163 75.0496C342.974 74.3602 342.974 73.2341 344.179 72.5395Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M462.076 140.564C463.281 139.87 465.212 139.87 466.412 140.564C467.601 141.254 467.601 142.38 466.396 143.074C465.196 143.764 463.249 143.764 462.06 143.074C460.865 142.38 460.881 141.259 462.076 140.564Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M453.607 135.734C454.812 135.039 456.743 135.039 457.943 135.734C459.132 136.423 459.132 137.549 457.927 138.244C456.727 138.933 454.78 138.933 453.591 138.244C452.397 137.549 452.407 136.423 453.607 135.734Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M478.883 150.294C480.088 149.599 482.03 149.605 483.224 150.299C484.419 150.994 484.419 152.12 483.219 152.815C482.019 153.504 480.072 153.504 478.878 152.809C477.683 152.115 477.688 150.989 478.883 150.294Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M487.313 155.188C488.518 154.493 490.459 154.498 491.654 155.193C492.849 155.888 492.849 157.014 491.649 157.708C490.449 158.398 488.502 158.398 487.307 157.703C486.108 157.009 486.113 155.877 487.313 155.188Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M495.708 160.055C496.913 159.361 498.855 159.366 500.044 160.055C501.238 160.75 501.238 161.876 500.039 162.571C498.839 163.26 496.892 163.26 495.697 162.565C494.503 161.876 494.513 160.745 495.708 160.055Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M470.443 145.437C471.649 144.742 473.59 144.747 474.785 145.442C475.979 146.137 475.979 147.263 474.78 147.957C473.58 148.647 471.633 148.647 470.438 147.952C469.238 147.252 469.244 146.126 470.443 145.437Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M504.137 165.018C505.342 164.323 507.284 164.328 508.478 165.023C509.673 165.717 509.673 166.844 508.473 167.538C507.273 168.228 505.326 168.228 504.132 167.533C502.937 166.838 502.937 165.712 504.137 165.018Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M512.584 169.759C513.789 169.064 515.731 169.069 516.925 169.764C518.12 170.458 518.12 171.585 516.92 172.279C515.72 172.969 513.773 172.969 512.579 172.274C511.379 171.579 511.384 170.448 512.584 169.759Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M520.983 174.632C522.188 173.937 524.129 173.943 525.324 174.637C526.518 175.332 526.518 176.458 525.319 177.152C524.119 177.842 522.172 177.842 520.977 177.147C519.783 176.453 519.788 175.321 520.983 174.632Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M352.6 77.4438C353.805 76.7492 355.747 76.7544 356.936 77.4438C358.131 78.1384 358.131 79.2645 356.931 79.9591C355.731 80.6485 353.784 80.6485 352.59 79.9539C351.395 79.2645 351.401 78.1331 352.6 77.4438Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M361.02 82.2588C362.225 81.5642 364.167 81.5695 365.362 82.2641C366.556 82.9587 366.551 84.0795 365.346 84.7742C364.146 85.4635 362.21 85.4688 361.01 84.7742C359.815 84.0795 359.826 82.9482 361.02 82.2588Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M369.456 87.1104C370.661 86.4158 372.603 86.421 373.797 87.1156C374.992 87.8103 374.987 88.9311 373.781 89.6257C372.582 90.3151 370.645 90.3203 369.445 89.6257C368.251 88.9311 368.256 87.7997 369.456 87.1104Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M377.865 91.9466C379.07 91.2519 381.012 91.2572 382.207 91.9518C383.401 92.6464 383.401 93.7726 382.201 94.4672C381.002 95.1565 379.055 95.1565 377.86 94.4619C376.66 93.7673 376.666 92.6359 377.865 91.9466Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M386.268 96.8035C387.473 96.1089 389.415 96.1141 390.609 96.8088C391.804 97.5034 391.804 98.6295 390.604 99.3241C389.404 100.013 387.457 100.013 386.262 99.3188C385.063 98.6242 385.073 97.4929 386.268 96.8035Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M394.688 101.682C395.893 100.987 397.834 100.993 399.029 101.687C400.224 102.382 400.224 103.508 399.024 104.203C397.824 104.892 395.877 104.892 394.682 104.197C393.483 103.503 393.488 102.371 394.688 101.682Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M403.108 106.554C404.313 105.86 406.254 105.865 407.449 106.56C408.643 107.254 408.643 108.38 407.444 109.075C406.244 109.764 404.297 109.764 403.102 109.07C401.908 108.375 401.913 107.249 403.108 106.554Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M411.549 111.417C412.754 110.722 414.696 110.727 415.89 111.422C417.085 112.117 417.085 113.243 415.885 113.937C414.685 114.627 412.738 114.627 411.544 113.932C410.344 113.238 410.349 112.106 411.549 111.417Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M419.899 116.284C421.104 115.59 423.045 115.595 424.24 116.289C425.434 116.984 425.434 118.11 424.235 118.805C423.035 119.494 421.088 119.494 419.893 118.8C418.694 118.1 418.704 116.974 419.899 116.284Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M428.364 121.089C429.569 120.394 431.5 120.394 432.7 121.089C433.895 121.783 433.895 122.909 432.695 123.604C431.495 124.293 429.548 124.293 428.354 123.599C427.149 122.904 427.164 121.778 428.364 121.089Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M436.792 126.067C437.997 125.372 439.928 125.372 441.128 126.067C442.322 126.761 442.322 127.888 441.123 128.582C439.923 129.272 437.976 129.272 436.781 128.577C435.582 127.882 435.597 126.756 436.792 126.067Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M445.222 130.881C446.427 130.187 448.358 130.187 449.558 130.881C450.752 131.576 450.752 132.702 449.552 133.397C448.353 134.086 446.406 134.086 445.211 133.391C444.011 132.697 444.022 131.571 445.222 130.881Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M110.699 338.718C111.904 338.023 113.835 338.023 115.035 338.718C116.224 339.407 116.224 340.533 115.019 341.228C113.819 341.917 111.872 341.917 110.683 341.228C109.488 340.533 109.504 339.412 110.699 338.718Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M102.23 333.887C103.435 333.193 105.366 333.193 106.566 333.887C107.755 334.577 107.755 335.703 106.55 336.397C105.351 337.087 103.403 337.087 102.214 336.397C101.02 335.703 101.03 334.577 102.23 333.887Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M127.506 348.448C128.711 347.753 130.653 347.758 131.847 348.453C133.042 349.147 133.042 350.274 131.842 350.968C130.642 351.658 128.695 351.657 127.501 350.963C126.306 350.268 126.311 349.142 127.506 348.448Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M135.936 353.341C137.141 352.647 139.083 352.652 140.277 353.347C141.472 354.041 141.472 355.167 140.272 355.862C139.072 356.551 137.125 356.551 135.93 355.857C134.731 355.162 134.736 354.031 135.936 353.341Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M144.331 358.209C145.536 357.514 147.478 357.52 148.667 358.209C149.861 358.904 149.861 360.03 148.662 360.724C147.462 361.414 145.515 361.414 144.32 360.719C143.126 360.03 143.136 358.898 144.331 358.209Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M119.065 343.59C120.27 342.896 122.211 342.901 123.406 343.596C124.6 344.29 124.6 345.416 123.401 346.111C122.201 346.8 120.254 346.8 119.059 346.106C117.86 345.406 117.865 344.28 119.065 343.59Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M152.76 363.171C153.965 362.477 155.907 362.482 157.101 363.176C158.296 363.871 158.296 364.997 157.096 365.692C155.896 366.381 153.949 366.381 152.755 365.687C151.56 364.992 151.56 363.866 152.76 363.171Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M161.205 367.912C162.41 367.218 164.352 367.223 165.547 367.917C166.741 368.612 166.741 369.738 165.541 370.433C164.342 371.122 162.394 371.122 161.2 370.427C160 369.733 160.005 368.601 161.205 367.912Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M169.606 372.785C170.811 372.091 172.752 372.096 173.947 372.791C175.141 373.485 175.141 374.611 173.942 375.306C172.742 375.995 170.795 375.995 169.6 375.301C168.406 374.606 168.411 373.475 169.606 372.785Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M1.22346 275.597C2.42851 274.903 4.37027 274.908 5.55954 275.597C6.75406 276.292 6.75406 277.418 5.55427 278.113C4.35448 278.802 2.40745 278.802 1.21292 278.107C0.0183963 277.418 0.0236688 276.287 1.22346 275.597Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M9.64337 280.412C10.8484 279.718 12.7902 279.723 13.9847 280.418C15.1792 281.112 15.174 282.233 13.9689 282.928C12.7691 283.617 10.8326 283.622 9.63283 282.928C8.43831 282.233 8.44884 281.102 9.64337 280.412Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M18.0789 285.264C19.284 284.569 21.2257 284.575 22.4203 285.269C23.6148 285.964 23.6096 287.085 22.4045 287.779C21.2047 288.469 19.2682 288.474 18.0684 287.779C16.8739 287.085 16.8791 285.953 18.0789 285.264Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M26.4884 290.1C27.6935 289.406 29.6352 289.411 30.8297 290.105C32.0243 290.8 32.0243 291.926 30.8245 292.621C29.6247 293.31 27.6777 293.31 26.4832 292.615C25.2834 291.921 25.2886 290.789 26.4884 290.1Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M34.8907 294.957C36.0958 294.262 38.0376 294.268 39.2321 294.962C40.4266 295.657 40.4266 296.783 39.2268 297.478C38.027 298.167 36.08 298.167 34.8855 297.472C33.6857 296.778 33.6962 295.646 34.8907 294.957Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M43.3107 299.835C44.5157 299.141 46.4575 299.146 47.652 299.841C48.8466 300.535 48.8466 301.661 47.6468 302.356C46.447 303.045 44.4999 303.045 43.3054 302.351C42.1056 301.656 42.1109 300.525 43.3107 299.835Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M51.7306 304.708C52.9356 304.013 54.8774 304.019 56.0719 304.713C57.2664 305.408 57.2664 306.534 56.0666 307.229C54.8669 307.918 52.9198 307.918 51.7253 307.223C50.5308 306.529 50.536 305.403 51.7306 304.708Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M60.1701 309.57C61.3751 308.876 63.3169 308.881 64.5114 309.576C65.7059 310.27 65.7059 311.396 64.5061 312.091C63.3063 312.78 61.3593 312.78 60.1648 312.086C58.965 311.391 58.9703 310.26 60.1701 309.57Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M68.5216 314.438C69.7266 313.743 71.6684 313.748 72.8629 314.443C74.0575 315.138 74.0575 316.264 72.8577 316.958C71.6579 317.648 69.7109 317.648 68.5164 316.953C67.3166 316.253 67.3271 315.127 68.5216 314.438Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M76.9872 319.242C78.1922 318.548 80.1235 318.548 81.3233 319.242C82.5178 319.937 82.5178 321.063 81.318 321.758C80.1182 322.447 78.1712 322.447 76.9767 321.752C75.7716 321.058 75.7874 319.932 76.9872 319.242Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M85.4129 324.22C86.618 323.526 88.5492 323.526 89.749 324.22C90.9435 324.915 90.9435 326.041 89.7437 326.736C88.544 327.425 86.5969 327.425 85.4024 326.73C84.2026 326.036 84.2184 324.91 85.4129 324.22Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M93.8446 329.035C95.0496 328.34 96.9809 328.34 98.1807 329.035C99.3752 329.729 99.3752 330.856 98.1754 331.55C96.9756 332.24 95.0286 332.24 93.8341 331.545C92.6343 330.85 92.6448 329.724 93.8446 329.035Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M289.062 442.373C290.267 441.678 292.198 441.678 293.398 442.373C294.587 443.062 294.587 444.188 293.382 444.883C292.183 445.572 290.236 445.572 289.046 444.883C287.852 444.188 287.868 443.068 289.062 442.373Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M280.593 437.542C281.798 436.848 283.73 436.848 284.929 437.542C286.119 438.232 286.119 439.358 284.914 440.053C283.714 440.742 281.767 440.742 280.578 440.053C279.383 439.358 279.393 438.232 280.593 437.542Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M305.869 452.103C307.074 451.408 309.016 451.413 310.211 452.108C311.405 452.803 311.405 453.929 310.205 454.623C309.006 455.313 307.058 455.313 305.864 454.618C304.669 453.924 304.675 452.797 305.869 452.103Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M314.299 456.997C315.504 456.302 317.446 456.307 318.64 457.002C319.835 457.696 319.835 458.823 318.635 459.517C317.435 460.207 315.488 460.207 314.294 459.512C313.094 458.817 313.099 457.686 314.299 456.997Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M322.694 461.864C323.899 461.17 325.841 461.175 327.03 461.864C328.225 462.559 328.225 463.685 327.025 464.38C325.825 465.069 323.878 465.069 322.684 464.374C321.489 463.685 321.5 462.554 322.694 461.864Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M297.428 447.246C298.633 446.551 300.575 446.556 301.769 447.251C302.964 447.946 302.964 449.072 301.764 449.766C300.564 450.456 298.617 450.456 297.423 449.761C296.223 449.061 296.228 447.935 297.428 447.246Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M331.123 466.826C332.328 466.132 334.27 466.137 335.465 466.832C336.659 467.526 336.659 468.652 335.459 469.347C334.259 470.036 332.312 470.036 331.118 469.342C329.923 468.647 329.923 467.521 331.123 466.826Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M339.568 471.567C340.774 470.873 342.715 470.878 343.91 471.573C345.104 472.267 345.104 473.393 343.905 474.088C342.705 474.777 340.758 474.777 339.563 474.083C338.363 473.388 338.369 472.257 339.568 471.567Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M347.969 476.441C349.174 475.746 351.116 475.751 352.31 476.446C353.505 477.141 353.505 478.267 352.305 478.961C351.105 479.651 349.158 479.651 347.964 478.956C346.769 478.261 346.774 477.13 347.969 476.441Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M179.587 379.253C180.792 378.558 182.734 378.563 183.923 379.253C185.117 379.947 185.117 381.073 183.918 381.768C182.718 382.457 180.771 382.457 179.576 381.763C178.382 381.073 178.387 379.942 179.587 379.253Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M188.007 384.068C189.212 383.373 191.153 383.378 192.348 384.073C193.543 384.768 193.537 385.888 192.332 386.583C191.132 387.272 189.196 387.278 187.996 386.583C186.802 385.888 186.812 384.757 188.007 384.068Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M196.442 388.919C197.647 388.225 199.589 388.23 200.784 388.924C201.978 389.619 201.973 390.74 200.768 391.435C199.568 392.124 197.631 392.129 196.432 391.435C195.237 390.74 195.242 389.609 196.442 388.919Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M204.852 393.755C206.057 393.061 207.999 393.066 209.193 393.761C210.388 394.455 210.388 395.581 209.188 396.276C207.988 396.965 206.041 396.965 204.846 396.271C203.647 395.576 203.652 394.445 204.852 393.755Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M213.254 398.612C214.459 397.918 216.401 397.923 217.595 398.618C218.79 399.312 218.79 400.438 217.59 401.133C216.39 401.822 214.443 401.822 213.249 401.128C212.049 400.433 212.06 399.302 213.254 398.612Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M221.674 403.491C222.879 402.796 224.821 402.801 226.015 403.496C227.21 404.191 227.21 405.317 226.01 406.011C224.81 406.701 222.863 406.701 221.669 406.006C220.469 405.311 220.474 404.18 221.674 403.491Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M230.094 408.363C231.299 407.669 233.241 407.674 234.435 408.369C235.63 409.063 235.63 410.189 234.43 410.884C233.23 411.573 231.283 411.573 230.089 410.879C228.894 410.184 228.899 409.058 230.094 408.363Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M238.533 413.226C239.738 412.531 241.68 412.536 242.875 413.231C244.069 413.925 244.069 415.052 242.869 415.746C241.67 416.436 239.723 416.436 238.528 415.741C237.328 415.046 237.334 413.915 238.533 413.226Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M246.885 418.093C248.09 417.398 250.032 417.404 251.226 418.098C252.421 418.793 252.421 419.919 251.221 420.614C250.021 421.303 248.074 421.303 246.88 420.608C245.68 419.909 245.69 418.782 246.885 418.093Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M255.35 422.897C256.556 422.203 258.487 422.203 259.687 422.897C260.881 423.592 260.881 424.718 259.681 425.413C258.481 426.102 256.534 426.102 255.34 425.408C254.135 424.713 254.151 423.587 255.35 422.897Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M263.776 427.875C264.981 427.181 266.912 427.181 268.112 427.875C269.307 428.57 269.307 429.696 268.107 430.391C266.907 431.08 264.96 431.08 263.766 430.386C262.566 429.691 262.582 428.565 263.776 427.875Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M272.208 432.69C273.413 431.996 275.344 431.996 276.544 432.69C277.738 433.385 277.738 434.511 276.539 435.206C275.339 435.895 273.392 435.895 272.197 435.2C270.998 434.506 271.008 433.38 272.208 432.69Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<g opacity="0.5">
<path d="M354.709 73.8695C354.728 72.4117 353.788 70.8338 351.658 69.5488C349.531 68.2692 346.699 67.5822 343.832 67.5288C340.964 67.4754 338.115 68.0567 335.955 69.2568L354.709 73.8695ZM354.709 73.8695C354.69 75.326 353.71 76.8663 351.551 78.0712M354.709 73.8695L351.551 78.0712M351.551 78.0712C349.395 79.2711 346.546 79.8525 343.677 79.7991C340.809 79.7457 337.975 79.0586 335.848 77.779C333.718 76.4942 332.778 74.9146 332.797 73.4557C332.816 71.9982 333.796 70.4581 335.955 69.2569L351.551 78.0712Z" fill="#94C518" stroke="#73B200"/>
</g>
<path d="M349.363 70.5455C352.413 72.3857 352.377 75.2714 349.277 76.9971C346.176 78.7228 341.192 78.6297 338.135 76.7894C335.085 74.9492 335.12 72.0635 338.221 70.3378C341.321 68.6121 346.305 68.7052 349.363 70.5455Z" fill="#73B200"/>
<path d="M339.453 73.6677H348.046V0.902832H339.453V73.6677Z" fill="url(#paint0_linear_4345_5303)"/>
<g opacity="0.5">
<path d="M129.869 51.0296C129.888 49.5718 128.948 47.994 126.818 46.709C124.691 45.4294 121.859 44.7423 118.992 44.6889C116.124 44.6355 113.275 45.2169 111.115 46.4169L129.869 51.0296ZM129.869 51.0296C129.85 52.4862 128.87 54.0265 126.711 55.2313M129.869 51.0296L126.711 55.2313M126.711 55.2313C124.555 56.4312 121.706 57.0127 118.838 56.9593C115.969 56.9059 113.135 56.2188 111.008 54.9392C108.879 53.6544 107.938 52.0748 107.957 50.6159C107.977 49.1584 108.956 47.6182 111.115 46.4171L126.711 55.2313Z" fill="#94C518" stroke="#73B200"/>
</g>
<path d="M124.523 47.7056C127.573 49.5459 127.537 52.4316 124.437 54.1572C121.336 55.8829 116.353 55.7898 113.295 53.9496C110.245 52.1093 110.281 49.2237 113.381 47.498C116.482 45.7723 121.465 45.8654 124.523 47.7056Z" fill="#73B200"/>
<g opacity="0.5">
<path d="M139.9 350.388C139.92 348.93 138.979 347.352 136.849 346.067C134.722 344.788 131.89 344.1 129.023 344.047C126.155 343.994 123.307 344.575 121.146 345.775L139.9 350.388ZM139.9 350.388C139.881 351.844 138.901 353.385 136.742 354.589M139.9 350.388L136.742 354.589M136.742 354.589C134.586 355.789 131.737 356.371 128.869 356.317C126 356.264 123.167 355.577 121.04 354.297C118.91 353.013 117.969 351.433 117.989 349.974C118.008 348.517 118.988 346.976 121.146 345.775L136.742 354.589Z" fill="#94C518" stroke="#73B200"/>
</g>
<path d="M134.554 347.064C137.604 348.904 137.569 351.79 134.468 353.515C131.368 355.241 126.384 355.148 123.326 353.308C120.276 351.467 120.312 348.582 123.412 346.856C126.513 345.13 131.496 345.224 134.554 347.064Z" fill="#73B200"/>
<path d="M124.645 350.186H133.237V277.421H124.645V350.186Z" fill="url(#paint1_linear_4345_5303)"/>
<g opacity="0.5">
<path d="M93.1739 193.241C93.1931 191.783 92.2529 190.206 90.1228 188.921C87.9956 187.641 85.1637 186.954 82.2963 186.901C79.4288 186.847 76.5801 187.429 74.4198 188.629L93.1739 193.241ZM93.1739 193.241C93.1547 194.698 92.1749 196.238 90.0159 197.443M93.1739 193.241L90.0159 197.443M90.0159 197.443C87.8595 198.643 85.0108 199.224 82.1422 199.171C79.2739 199.118 76.4402 198.43 74.3131 197.151C72.1832 195.866 71.2428 194.286 71.262 192.828C71.2812 191.37 72.2611 189.83 74.4195 188.629L90.0159 197.443Z" fill="#94C518" stroke="#73B200"/>
</g>
<path d="M87.8274 189.917C90.8778 191.758 90.842 194.643 87.7415 196.369C84.641 198.095 79.6573 198.002 76.5998 196.161C73.5494 194.321 73.5852 191.435 76.6857 189.71C79.7862 187.984 84.7699 188.077 87.8274 189.917Z" fill="#73B200"/>
<defs>
<linearGradient id="paint0_linear_4345_5303" x1="343.071" y1="73.7183" x2="344.428" y2="0.82493" gradientUnits="userSpaceOnUse">
<stop stop-color="#73B200"/>
<stop offset="0.2852" stop-color="#73B200" stop-opacity="0.28"/>
<stop offset="0.4875" stop-color="#94C518" stop-opacity="0.2"/>
<stop offset="1" stop-color="#D9F68E" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_4345_5303" x1="128.263" y1="350.237" x2="129.619" y2="277.343" gradientUnits="userSpaceOnUse">
<stop stop-color="#73B200"/>
<stop offset="0.2852" stop-color="#73B200" stop-opacity="0.28"/>
<stop offset="0.4875" stop-color="#94C518" stop-opacity="0.2"/>
<stop offset="1" stop-color="#D9F68E" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-1beo52p`,
                            "data-framer-name": `Vector`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 7,
                            intrinsicWidth: 9,
                            svg: `<svg width="9" height="7" viewBox="-1 -1 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.20783 1.46992C2.41289 0.775302 4.35465 0.780565 5.54391 1.46992C6.73844 2.16453 6.73843 3.29065 5.53864 3.98527C4.33885 4.67462 2.39183 4.67461 1.1973 3.98C0.00277127 3.29065 0.00804379 2.15927 1.20783 1.46992Z" fill="#408BFC" stroke="white" stroke-width="0.95" stroke-miterlimit="10"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-6n8ryn`,
                            "data-framer-name": `Group 55329`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 399,
                            intrinsicWidth: 324,
                            svg: `<svg width="324" height="399" viewBox="0 0 324 399" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M162.012 332.401V133.183L46.9941 199.591L162.012 332.401ZM162.012 133.183V332.401L277.029 199.591L162.012 133.183Z" fill="url(#paint0_radial_4345_5418)"/>
<path d="M161.513 266.858L162.013 267.147L162.513 266.858L277.53 200.45L279.03 199.584L277.53 198.718L162.513 132.31L162.013 132.021L161.513 132.31L46.4953 198.718L44.9953 199.584L46.4953 200.45L161.513 266.858ZM2.98883 199.591L162.163 107.754L321.038 199.583L162.013 291.399L2.98883 199.591Z" fill="white" stroke="#272727" stroke-width="2"/>
<path d="M163.014 293.131L322.038 201.316V305.261L163.014 397.069V293.131Z" fill="#F4F2EA" stroke="#272727" stroke-width="2"/>
<path d="M1.98828 201.323L161.013 293.131V397.069L1.98828 305.261V201.323Z" fill="#F4F2EA" stroke="#272727" stroke-width="2"/>
<path opacity="0.49" fill-rule="evenodd" clip-rule="evenodd" d="M46.9961 0.374023V199.591L162.014 266C162.014 265.755 277.031 199.591 277.031 199.591V0.374023H46.9961Z" fill="url(#paint1_linear_4345_5418)"/>
<defs>
<radialGradient id="paint0_radial_4345_5418" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(157.156 272.93) scale(93.2422 93.2795)">
<stop stop-color="#B2ED1D"/>
<stop offset="0.2618" stop-color="#B2ED1D"/>
<stop offset="0.4123" stop-color="#CCF368"/>
<stop offset="0.5346" stop-color="#D8F68E"/>
<stop offset="0.6417" stop-color="#D0F760"/>
<stop offset="0.739" stop-color="#B8F900"/>
<stop offset="0.8291" stop-color="#FFFCF1"/>
<stop offset="0.9137" stop-color="#FBF6E4"/>
<stop offset="0.9919" stop-color="#E3E0D5"/>
<stop offset="1" stop-color="#E3E0D5"/>
</radialGradient>
<linearGradient id="paint1_linear_4345_5418" x1="162.016" y1="265.993" x2="162.016" y2="0.371934" gradientUnits="userSpaceOnUse">
<stop stop-color="#B2ED1D"/>
<stop offset="0.485" stop-color="#BFF043" stop-opacity="0.75"/>
<stop offset="0.6866" stop-color="#CCF368" stop-opacity="0.48"/>
<stop offset="0.9905" stop-color="#E5F9B4" stop-opacity="0.01"/>
<stop offset="1" stop-color="#F3F3F3" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-1lh8e08`,
                            "data-framer-name": `Group`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 371,
                            intrinsicWidth: 191,
                            svg: `<svg width="191" height="371" viewBox="0 0 191 371" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.3">
<path opacity="0.6" d="M45.8633 271.299C45.8633 266.324 49.9131 262.274 54.888 262.274C59.8629 262.274 63.9128 266.324 63.9128 271.299C63.9128 276.274 59.8629 280.324 54.888 280.324C49.9019 280.324 45.8633 276.274 45.8633 271.299Z" fill="#B2ED1D" fill-opacity="0.5"/>
<path opacity="0.6" d="M72.9375 320.935C72.9375 323.429 74.9568 325.448 77.4499 325.448C79.943 325.448 81.9622 323.429 81.9622 320.935C81.9622 318.442 79.943 316.423 77.4499 316.423C74.9568 316.423 72.9375 318.442 72.9375 320.935Z" fill="#73B200"/>
<path opacity="0.35" d="M118.061 276.94C118.061 278.812 119.572 280.324 121.445 280.324C123.317 280.324 124.829 278.812 124.829 276.94C124.829 275.067 123.317 273.555 121.445 273.555C119.572 273.555 118.061 275.078 118.061 276.94Z" fill="#73B200"/>
<path opacity="0.77" d="M57.1426 367.187C57.1426 369.059 58.6542 370.571 60.5269 370.571C62.3995 370.571 63.9111 369.059 63.9111 367.187C63.9111 365.314 62.3995 363.802 60.5269 363.802C58.6542 363.802 57.1426 365.325 57.1426 367.187Z" fill="#73B200"/>
<path opacity="0.77" d="M174.473 202.328C174.473 204.201 175.984 205.712 177.857 205.712C179.73 205.712 181.241 204.201 181.241 202.328C181.241 200.455 179.73 198.944 177.857 198.944C175.984 198.944 174.473 200.467 174.473 202.328Z" fill="#73B200"/>
<path opacity="0.6" d="M18.8691 269.592C26.3455 269.592 32.4062 263.531 32.4062 256.055C32.4062 248.579 26.3455 242.518 18.8691 242.518C11.3928 242.518 5.33203 248.579 5.33203 256.055C5.33203 263.531 11.3928 269.592 18.8691 269.592Z" fill="#8BBB02"/>
<path opacity="0.56" d="M127.085 357.034C127.085 359.527 125.066 361.546 122.573 361.546C120.08 361.546 118.061 359.527 118.061 357.034C118.061 354.541 120.08 352.522 122.573 352.522C125.066 352.522 127.085 354.541 127.085 357.034Z" fill="#73B200"/>
<path opacity="0.6" d="M145.136 334.473C150.12 334.473 154.161 330.432 154.161 325.448C154.161 320.464 150.12 316.423 145.136 316.423C140.152 316.423 136.111 320.464 136.111 325.448C136.111 330.432 140.152 334.473 145.136 334.473Z" fill="#B2ED1D" fill-opacity="0.5"/>
<path opacity="0.77" d="M75.1934 211.51C75.1934 213.383 76.705 214.894 78.5776 214.894C80.4503 214.894 81.9619 213.383 81.9619 211.51C81.9619 209.637 80.4503 208.126 78.5776 208.126C76.705 208.126 75.1934 209.649 75.1934 211.51Z" fill="#73B200"/>
<path opacity="0.56" d="M136.111 212.638C136.111 215.131 134.091 217.15 131.598 217.15C129.105 217.15 127.086 215.131 127.086 212.638C127.086 210.145 129.105 208.126 131.598 208.126C134.08 208.126 136.111 210.156 136.111 212.638Z" fill="#73B200"/>
<path opacity="0.6" d="M118.06 176.539C118.06 179.033 116.041 181.052 113.548 181.052C111.054 181.052 109.035 179.033 109.035 176.539C109.035 174.046 111.054 172.027 113.548 172.027C116.041 172.027 118.06 174.046 118.06 176.539Z" fill="#272727"/>
<path opacity="0.6" d="M9.8431 206.613C9.8431 209.107 7.82381 211.126 5.33073 211.126C2.83764 211.126 0.818359 209.107 0.818359 206.613C0.818359 204.12 2.83764 202.101 5.33073 202.101C7.82381 202.101 9.8431 204.12 9.8431 206.613Z" fill="#272727"/>
<path opacity="0.6" d="M72.9368 172.028C77.9211 172.028 81.9616 167.987 81.9616 163.003C81.9616 158.019 77.9211 153.978 72.9368 153.978C67.9526 153.978 63.9121 158.019 63.9121 163.003C63.9121 167.987 67.9526 172.028 72.9368 172.028Z" fill="#B2ED1D" fill-opacity="0.5"/>
<path opacity="0.6" d="M172.209 140.612C172.209 135.637 176.259 131.587 181.234 131.587C186.209 131.587 190.258 135.637 190.258 140.612C190.258 145.587 186.209 149.636 181.234 149.636C176.248 149.636 172.209 145.587 172.209 140.612Z" fill="#B2ED1D" fill-opacity="0.5"/>
<path opacity="0.6" d="M9.76367 131.416C9.76367 133.909 11.783 135.928 14.276 135.928C16.7691 135.928 18.7884 133.909 18.7884 131.416C18.7884 128.923 16.7691 126.903 14.276 126.903C11.783 126.903 9.76367 128.923 9.76367 131.416Z" fill="#73B200"/>
<path opacity="0.77" d="M165.439 24.2473C165.439 26.1199 166.951 27.6316 168.824 27.6316C170.696 27.6316 172.208 26.1199 172.208 24.2473C172.208 22.3747 170.696 20.863 168.824 20.863C166.951 20.863 165.439 22.386 165.439 24.2473Z" fill="#73B200"/>
<path opacity="0.77" d="M118.061 114.495C118.061 116.368 119.572 117.879 121.445 117.879C123.317 117.879 124.829 116.368 124.829 114.495C124.829 112.622 123.317 111.111 121.445 111.111C119.572 111.111 118.061 112.634 118.061 114.495Z" fill="#73B200"/>
<path opacity="0.6" d="M118.061 45.6812C128.03 45.6812 136.111 37.6002 136.111 27.6317C136.111 17.6633 128.03 9.58228 118.061 9.58228C108.093 9.58228 100.012 17.6633 100.012 27.6317C100.012 37.6002 108.093 45.6812 118.061 45.6812Z" fill="#8BBB02"/>
<path opacity="0.56" d="M181.234 86.2919C181.234 88.785 179.214 90.8043 176.721 90.8043C174.228 90.8043 172.209 88.785 172.209 86.2919C172.209 83.7988 174.228 81.7795 176.721 81.7795C179.214 81.7795 181.234 83.7988 181.234 86.2919Z" fill="#73B200"/>
<path opacity="0.6" d="M63.9115 5.0695C63.9115 7.56258 61.8922 9.58187 59.3991 9.58187C56.906 9.58187 54.8867 7.56258 54.8867 5.0695C54.8867 2.57641 56.906 0.557129 59.3991 0.557129C61.8922 0.557129 63.9115 2.57641 63.9115 5.0695Z" fill="#272727"/>
<path opacity="0.6" d="M145.136 81.7804C150.12 81.7804 154.161 77.7399 154.161 72.7557C154.161 67.7715 150.12 63.731 145.136 63.731C140.152 63.731 136.111 67.7715 136.111 72.7557C136.111 77.7399 140.152 81.7804 145.136 81.7804Z" fill="#B2ED1D" fill-opacity="0.5"/>
</g>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-dcwh1`,
                            "data-framer-name": `Group`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 327,
                            intrinsicWidth: 239,
                            svg: `<svg width="239" height="327" viewBox="0 0 239 327" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M119.428 97.5666L149.838 115.125L119.428 132.674L89.0177 115.121L119.428 97.5666Z" fill="white" stroke="black"/>
<path d="M118.928 168.649L88.5176 151.095V115.987L118.928 133.545V168.649Z" fill="white" stroke="black"/>
<path d="M150.836 115.125V151.383L119.426 169.515V133.257L150.836 115.125Z" fill="#69D6D4"/>
<path d="M150.838 115.698L181.248 133.257L150.838 150.806L120.428 133.252L150.838 115.698Z" fill="white" stroke="black"/>
<path d="M150.338 186.78L119.928 169.226V134.118L150.338 151.672V186.78Z" fill="white" stroke="black"/>
<path d="M151.336 151.672L181.747 134.123V169.226L151.332 186.78L151.336 151.672Z" fill="white" stroke="black"/>
<path d="M88.0158 71.8932L118.426 89.4471L88.0158 106.997L57.6057 89.4471L88.0158 71.8932Z" fill="white" stroke="black"/>
<path d="M87.5158 142.971L57.1055 125.417V90.3135L87.5158 107.867V142.971Z" fill="white" stroke="black"/>
<path d="M88.5156 107.867L118.926 90.3135V125.421L88.5156 142.971V107.867Z" fill="white" stroke="black"/>
<path d="M119.424 133.83L149.834 151.384L119.424 168.938L89.0138 151.384L119.424 133.83Z" fill="white" stroke="black"/>
<path d="M118.924 204.908L88.5137 187.358V152.25L118.924 169.804V204.908Z" fill="white" stroke="black"/>
<path d="M119.924 169.804L150.334 152.25V187.358L119.924 204.912V169.804Z" fill="#69D6D4" stroke="black"/>
<path d="M88.0158 151.961L118.426 169.515L88.0158 187.065L57.6057 169.511L88.0158 151.961Z" fill="white" stroke="black"/>
<path d="M87.5158 223.039L57.1055 205.485V170.377L87.5158 187.935V223.039Z" fill="white" stroke="black"/>
<path d="M88.5156 187.935L118.926 170.381V205.489L88.5156 223.039V187.935Z" fill="white" stroke="black"/>
<path d="M184.588 181.114L214.994 198.668L184.588 216.218L154.178 198.664L184.588 181.114Z" fill="white" stroke="black"/>
<path d="M184.088 252.192L153.678 234.638V199.53L184.088 217.088V252.192Z" fill="white" stroke="black"/>
<path d="M215.492 234.642L185.082 252.192L185.086 217.088L215.492 199.534V234.642Z" fill="white" stroke="black"/>
<path d="M150.838 151.961L181.248 169.519L150.838 187.069L120.428 169.515L150.838 151.961Z" fill="white" stroke="black"/>
<path d="M150.338 223.043L119.928 205.489V170.381L150.338 187.939V223.043Z" fill="white" stroke="black"/>
<path d="M181.747 205.493L151.332 223.043L151.336 187.939L181.747 170.385V205.493Z" fill="white" stroke="black"/>
<path d="M56.6055 169.51L150.836 115.125" stroke="white" stroke-width="0.136667" stroke-miterlimit="10"/>
<path d="M88.0156 187.646L182.247 133.257" stroke="white" stroke-width="0.136667" stroke-miterlimit="10"/>
<path d="M150.836 187.646L88.0156 151.384" stroke="white" stroke-width="0.136667" stroke-miterlimit="10"/>
<path d="M182.246 169.515L119.426 133.252" stroke="white" stroke-width="0.136667" stroke-miterlimit="10"/>
<rect x="-8.9407e-08" y="0.5" width="36.9942" height="36.9941" transform="matrix(0.866025 0.5 -0.866026 0.5 55.5463 38.3071)" fill="white" stroke="black"/>
<rect x="0.433013" y="0.75" width="36.9942" height="36.9942" transform="matrix(0.866025 0.5 -1.96876e-07 1 22.267 18.8443)" fill="white" stroke="black"/>
<rect x="0.433013" y="0.25" width="36.9941" height="36.9942" transform="matrix(0.866025 -0.5 -1.52815e-07 1 55.142 38.2736)" fill="white" stroke="black"/>
<rect x="-8.9407e-08" y="0.5" width="36.9942" height="36.9941" transform="matrix(0.866025 0.5 -0.866026 0.5 55.5463 0.313233)" fill="white" stroke="black"/>
<rect x="0.433013" y="0.75" width="26.6603" height="26.6603" transform="matrix(0.866025 0.5 -1.96876e-07 1 25.7982 24.6614)" fill="#59770F" stroke="black"/>
<rect x="-8.9407e-08" y="0.5" width="35.267" height="35.2669" transform="matrix(0.866025 0.5 -0.866026 0.5 119.855 217.806)" fill="white" stroke="black"/>
<rect x="0.433013" y="0.75" width="35.267" height="35.267" transform="matrix(0.866025 0.5 -1.96876e-07 1 88.0717 199.207)" fill="white" stroke="black"/>
<rect x="0.433013" y="0.75" width="26.6603" height="26.6603" transform="matrix(0.866025 0.5 -1.96876e-07 1 91.7982 205.661)" fill="#73B200" stroke="black"/>
<rect x="0.433013" y="0.25" width="35.2669" height="35.267" transform="matrix(0.866025 -0.5 -1.52815e-07 1 119.454 217.773)" fill="white" stroke="black"/>
<rect x="-8.9407e-08" y="0.5" width="35.267" height="35.2669" transform="matrix(0.866025 0.5 -0.866026 0.5 119.855 181.54)" fill="white" stroke="black"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-1dwhmmw`,
                            "data-framer-name": `Group 55330`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 53,
                            intrinsicWidth: 85,
                            svg: `<svg width="85" height="53" viewBox="0 0 85 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.837 49.5874V52.0695L0.339063 28.2756V25.6275L41.837 49.5874Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M42.137 49.0674L0.639043 25.1075L42.137 1.14768L83.6349 25.1075L42.137 49.0674Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M83.9346 28.2756L42.4367 52.0695V49.5874L83.9346 25.6275V28.2756Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-actulb`,
                            "data-framer-name": `Group 55341`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 40,
                            intrinsicWidth: 65,
                            svg: `<svg width="65" height="40" viewBox="0 0 65 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.7921 37.1781V38.8973L0.415234 20.9066V19.0619L31.7921 37.1781Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M32.0921 36.6584L0.715215 18.5422L32.0921 0.426004L63.469 18.5422L32.0921 36.6584Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M63.7687 20.9066L32.3918 38.8973V37.1781L63.7687 19.0619V20.9066Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-bq66qy`,
                            "data-framer-name": `Group 55340`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 49,
                            intrinsicWidth: 81,
                            svg: `<svg width="81" height="49" viewBox="0 0 81 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.3359 46.1254V48.4242L1.2707 26.0251V23.5702L40.3359 46.1254Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M40.6359 45.6061L1.57068 23.0509L40.6359 0.495584L79.7011 23.0509L40.6359 45.6061Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M80.0019 26.0251L40.9367 48.4242V46.1254L80.0019 23.5702V26.0251Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-2lsqcb`,
                            "data-framer-name": `Group 55335`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 101,
                            intrinsicWidth: 167,
                            svg: `<svg width="167" height="101" viewBox="0 0 167 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M124.296 49.6479V52.13L82.798 28.3362V25.6881L124.296 49.6479Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M124.596 49.128L83.098 25.1681L124.596 1.20823L166.094 25.1681L124.596 49.128Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M166.394 28.3362L124.896 52.13V49.6479L166.394 25.6881V28.3362Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M42.7159 97.2678V99.7499L1.21797 75.956V73.308L42.7159 97.2678Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M43.0159 96.7478L1.51795 72.788L43.0159 48.8281L84.5138 72.788L43.0159 96.7478Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M84.8135 75.956L43.3156 99.7499V97.2678L84.8135 73.308V75.956Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-w9st7g`,
                            "data-framer-name": `Group 55339`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 119,
                            intrinsicWidth: 303,
                            svg: `<svg width="303" height="119" viewBox="0 0 303 119" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.6297 71.2852C2.83475 70.5906 4.77651 70.5958 5.97104 71.2904C7.16557 71.9851 7.16029 73.1059 5.95524 73.8005C4.75545 74.4899 2.81895 74.4951 1.61916 73.8005C0.424634 73.1059 0.435168 71.9745 1.6297 71.2852Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M10.0653 76.137C11.2703 75.4424 13.2121 75.4476 14.4066 76.1423C15.6011 76.8369 15.5959 77.9577 14.3908 78.6523C13.191 79.3417 11.2545 79.347 10.0547 78.6523C8.86019 77.9577 8.86547 76.8263 10.0653 76.137Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M18.4747 80.9732C19.6798 80.2786 21.6215 80.2838 22.8161 80.9784C24.0106 81.6731 24.0106 82.7992 22.8108 83.4938C21.6111 84.1831 19.664 84.1831 18.4695 83.4885C17.2697 82.7939 17.2749 81.6625 18.4747 80.9732Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M26.879 85.8299C28.0841 85.1353 30.0258 85.1405 31.2204 85.8351C32.4149 86.5297 32.4149 87.6559 31.2151 88.3505C30.0153 89.0398 28.0683 89.0398 26.8738 88.3452C25.674 87.6506 25.6845 86.5192 26.879 85.8299Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M35.299 90.7083C36.504 90.0137 38.4458 90.0189 39.6403 90.7135C40.8348 91.4082 40.8348 92.5343 39.635 93.2289C38.4353 93.9182 36.4882 93.9182 35.2937 93.2236C34.0939 92.529 34.0992 91.3976 35.299 90.7083Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M43.7188 95.5811C44.9239 94.8865 46.8657 94.8917 48.0602 95.5863C49.2547 96.281 49.2547 97.4071 48.0549 98.1017C46.8551 98.791 44.9081 98.7911 43.7136 98.0964C42.5191 97.4018 42.5243 96.2757 43.7188 95.5811Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M52.1564 100.443C53.3614 99.7488 55.3032 99.754 56.4977 100.449C57.6923 101.143 57.6923 102.269 56.4925 102.964C55.2927 103.653 53.3456 103.653 52.1511 102.959C50.9513 102.264 50.9566 101.133 52.1564 100.443Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M60.5079 105.311C61.713 104.616 63.6547 104.621 64.8493 105.316C66.0438 106.011 66.0438 107.137 64.844 107.831C63.6442 108.521 61.6972 108.521 60.5027 107.826C59.3029 107.126 59.3134 106 60.5079 105.311Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M68.9755 110.115C70.1805 109.421 72.1118 109.421 73.3115 110.115C74.5061 110.81 74.5061 111.936 73.3063 112.631C72.1065 113.32 70.1595 113.32 68.9649 112.626C67.7599 111.931 67.7757 110.805 68.9755 110.115Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M77.4012 115.093C78.6063 114.399 80.5375 114.399 81.7373 115.093C82.9318 115.788 82.9318 116.914 81.732 117.609C80.5322 118.298 78.5852 118.298 77.3907 117.604C76.1909 116.909 76.2067 115.783 77.4012 115.093Z" fill="white" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M143.712 90.6745C144.912 89.9851 146.859 89.9851 148.048 90.6745C149.243 91.3691 149.232 92.4952 148.033 93.1846C146.828 93.8792 144.896 93.8792 143.697 93.1846C142.507 92.4952 142.507 91.3691 143.712 90.6745Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M135.283 95.579C136.488 94.8844 138.429 94.8897 139.619 95.579C140.813 96.2737 140.808 97.3945 139.603 98.0891C138.403 98.7785 136.467 98.7837 135.267 98.0891C134.083 97.3945 134.088 96.2684 135.283 95.579Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M126.89 100.415C128.09 99.7254 130.037 99.7254 131.226 100.415C132.421 101.109 132.41 102.235 131.21 102.925C130.005 103.619 128.074 103.619 126.874 102.925C125.685 102.235 125.685 101.115 126.89 100.415Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M118.458 105.293C119.664 104.598 121.605 104.604 122.795 105.293C123.989 105.988 123.984 107.108 122.779 107.803C121.579 108.492 119.643 108.498 118.443 107.803C117.253 107.108 117.259 105.982 118.458 105.293Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M110.041 110.14C111.24 109.45 113.187 109.45 114.377 110.14C115.571 110.834 115.561 111.961 114.361 112.65C113.156 113.345 111.225 113.345 110.025 112.65C108.835 111.961 108.835 110.834 110.041 110.14Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M101.615 115.012C102.815 114.323 104.762 114.323 105.951 115.012C107.145 115.707 107.135 116.833 105.935 117.522C104.73 118.217 102.799 118.217 101.599 117.522C100.41 116.833 100.41 115.707 101.615 115.012Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M195.216 60.4789C196.416 59.7896 198.363 59.7896 199.552 60.4789C200.747 61.1735 200.736 62.2997 199.537 62.989C198.332 63.6836 196.4 63.6836 195.201 62.989C194.011 62.2997 194.011 61.1735 195.216 60.4789Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M186.787 65.3835C187.992 64.6889 189.933 64.6941 191.123 65.3835C192.317 66.0781 192.312 67.199 191.107 67.8936C189.907 68.5829 187.971 68.5882 186.771 67.8936C185.587 67.199 185.592 66.0728 186.787 65.3835Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M178.394 70.2192C179.594 69.5298 181.541 69.5298 182.73 70.2192C183.925 70.9138 183.914 72.0399 182.714 72.7292C181.509 73.4239 179.578 73.4239 178.378 72.7292C177.189 72.0399 177.189 70.919 178.394 70.2192Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M169.962 75.0974C171.167 74.4027 173.109 74.408 174.299 75.0974C175.493 75.792 175.488 76.9128 174.283 77.6075C173.083 78.2968 171.146 78.3021 169.947 77.6075C168.757 76.9128 168.763 75.7867 169.962 75.0974Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M161.544 79.9443C162.744 79.2549 164.691 79.2549 165.881 79.9443C167.075 80.6389 167.065 81.765 165.865 82.4543C164.66 83.149 162.728 83.149 161.529 82.4543C160.339 81.765 160.339 80.6389 161.544 79.9443Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M153.119 84.8168C154.318 84.1275 156.265 84.1275 157.455 84.8168C158.649 85.5114 158.639 86.6376 157.439 87.3269C156.234 88.0215 154.303 88.0215 153.103 87.3269C151.914 86.6376 151.914 85.5114 153.119 84.8168Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M246.457 29.5593C247.656 28.8699 249.603 28.8699 250.793 29.5593C251.987 30.2539 251.977 31.38 250.777 32.0693C249.572 32.764 247.641 32.764 246.441 32.0693C245.251 31.38 245.252 30.2539 246.457 29.5593Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M238.027 34.4638C239.232 33.7692 241.174 33.7745 242.363 34.4638C243.557 35.1584 243.552 36.2793 242.347 36.9739C241.147 37.6632 239.211 37.6685 238.011 36.9739C236.827 36.2793 236.832 35.1532 238.027 34.4638Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M229.634 39.2995C230.834 38.6101 232.781 38.6101 233.97 39.2995C235.165 39.9941 235.154 41.1202 233.955 41.8096C232.75 42.5042 230.818 42.5042 229.619 41.8096C228.429 41.1202 228.429 39.9994 229.634 39.2995Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M221.203 44.1777C222.408 43.4831 224.349 43.4883 225.539 44.1777C226.733 44.8723 226.728 45.9932 225.523 46.6878C224.323 47.3771 222.387 47.3824 221.187 46.6878C219.998 45.9932 220.003 44.867 221.203 44.1777Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M212.785 49.0246C213.984 48.3352 215.932 48.3352 217.121 49.0246C218.315 49.7192 218.305 50.8453 217.105 51.5347C215.9 52.2293 213.969 52.2293 212.769 51.5347C211.58 50.8453 211.58 49.7192 212.785 49.0246Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M204.359 53.8971C205.559 53.2078 207.506 53.2078 208.695 53.8971C209.89 54.5918 209.879 55.7179 208.679 56.4072C207.474 57.1019 205.543 57.1019 204.343 56.4072C203.154 55.7179 203.154 54.5918 204.359 53.8971Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M297.292 0.697923C298.492 0.00856994 300.439 0.00856994 301.629 0.697923C302.823 1.39254 302.813 2.51867 301.613 3.20802C300.408 3.90264 298.476 3.90264 297.277 3.20802C296.087 2.51867 296.087 1.39254 297.292 0.697923Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M288.863 5.60249C290.068 4.90787 292.01 4.91313 293.199 5.60249C294.393 6.2971 294.388 7.41795 293.183 8.11257C291.983 8.80192 290.047 8.80718 288.847 8.11257C287.663 7.41795 287.668 6.29184 288.863 5.60249Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M280.47 10.4382C281.67 9.7488 283.617 9.7488 284.806 10.4382C286.001 11.1328 285.99 12.2589 284.791 12.9482C283.585 13.6429 281.654 13.6429 280.454 12.9482C279.265 12.2589 279.265 11.138 280.47 10.4382Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M272.039 15.3164C273.244 14.6217 275.185 14.627 276.375 15.3164C277.569 16.011 277.564 17.1318 276.359 17.8265C275.159 18.5158 273.223 18.5211 272.023 17.8265C270.834 17.1318 270.839 16.0057 272.039 15.3164Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M263.621 20.1633C264.82 19.4739 266.767 19.4739 267.957 20.1633C269.151 20.8579 269.141 21.984 267.941 22.6733C266.736 23.368 264.805 23.368 263.605 22.6733C262.416 21.984 262.416 20.8579 263.621 20.1633Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M255.195 25.0358C256.395 24.3465 258.342 24.3465 259.531 25.0358C260.725 25.7304 260.715 26.8566 259.515 27.5459C258.31 28.2405 256.379 28.2405 255.179 27.5459C253.99 26.8566 253.99 25.7304 255.195 25.0358Z" fill="#73B200" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-1glzx10`,
                            "data-framer-name": `Group`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 67,
                            intrinsicWidth: 116,
                            svg: `<svg width="116" height="67" viewBox="0 0 116 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.852092 63.8868C2.00978 63.2185 3.91473 63.2342 5.11452 63.9289C6.30379 64.6182 6.33009 65.7285 5.1724 66.3969C4.00945 67.0704 2.094 67.0494 0.904733 66.36C-0.289794 65.6601 -0.310863 64.5551 0.852092 63.8868Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M9.26615 59.0193C10.4238 58.351 12.3288 58.3668 13.5286 59.0614C14.7179 59.7508 14.7442 60.8611 13.5865 61.5294C12.4235 62.203 10.5081 62.1819 9.3188 61.4926C8.12427 60.7927 8.1032 59.6876 9.26615 59.0193Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M17.6919 54.1565C18.8496 53.4882 20.7546 53.504 21.9544 54.1986C23.1436 54.888 23.1699 55.9983 22.0122 56.6666C20.8493 57.3402 18.9338 57.3191 17.7446 56.6298C16.55 55.9299 16.529 54.8248 17.6919 54.1565Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M34.5357 44.4266C35.6934 43.7582 37.5984 43.774 38.7982 44.4687C39.9874 45.158 40.0137 46.2683 38.856 46.9366C37.6931 47.6102 35.7776 47.5892 34.5884 46.8998C33.3886 46.2052 33.3675 45.1001 34.5357 44.4266Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M51.3639 34.7076C52.5215 34.0393 54.4265 34.055 55.6263 34.7497C56.8155 35.439 56.8419 36.5494 55.6842 37.2177C54.5212 37.8912 52.6058 37.8702 51.4165 37.1808C50.2167 36.4809 50.1956 35.3759 51.3639 34.7076Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M42.9439 39.554C44.1016 38.8857 46.0066 38.9015 47.2064 39.5961C48.3956 40.2855 48.4219 41.3958 47.2642 42.0641C46.1013 42.7377 44.1858 42.7166 42.9966 42.0273C41.7968 41.3326 41.7757 40.2276 42.9439 39.554Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M59.7792 29.8291C60.9421 29.1555 62.8523 29.1713 64.0468 29.8659C65.2361 30.5553 65.2624 31.6656 64.0994 32.3391C62.9418 33.0075 61.0263 32.9864 59.8371 32.2971C58.6425 31.6024 58.6215 30.4974 59.7792 29.8291Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M26.0738 49.2788C27.2788 48.5842 29.2101 48.5842 30.4099 49.2788C31.5991 49.9681 31.5991 51.0942 30.3941 51.7888C29.1943 52.4782 27.2472 52.4782 26.058 51.7888C24.8635 51.0942 24.874 49.9681 26.0738 49.2788Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M85.0484 15.248C86.2534 14.5534 88.1846 14.5534 89.3844 15.248C90.5737 15.9374 90.5737 17.0635 89.3687 17.7581C88.1689 18.4474 86.2219 18.4474 85.0326 17.7581C83.8381 17.0635 83.8486 15.9426 85.0484 15.248Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M110.3 0.676235C111.505 -0.0183804 113.437 -0.0183804 114.636 0.676235C115.826 1.36559 115.826 2.4917 114.621 3.18632C113.421 3.87567 111.474 3.87567 110.285 3.18632C109.09 2.4917 109.101 1.36559 110.3 0.676235Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M101.861 5.52316C103.066 4.82854 104.997 4.82854 106.197 5.52316C107.386 6.21251 107.386 7.33863 106.181 8.03324C104.981 8.72259 103.034 8.72259 101.845 8.03324C100.651 7.34389 100.661 6.21777 101.861 5.52316Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M68.2247 24.9883C69.4298 24.2937 71.3716 24.299 72.5661 24.9936C73.7606 25.6882 73.7606 26.8143 72.5608 27.5089C71.361 28.1983 69.414 28.1983 68.2195 27.5037C67.0197 26.809 67.025 25.6829 68.2247 24.9883Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M76.5919 20.1416C77.797 19.447 79.7387 19.4523 80.9332 20.1469C82.1278 20.8415 82.1278 21.9676 80.928 22.6622C79.7282 23.3516 77.7812 23.3516 76.5867 22.657C75.3869 21.9624 75.3974 20.8362 76.5919 20.1416Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M93.4083 10.3643C94.6134 9.66968 96.5552 9.67493 97.7497 10.3695C98.9442 11.0642 98.9442 12.1903 97.7444 12.8849C96.5446 13.5742 94.5976 13.5743 93.4031 12.8796C92.2033 12.185 92.2085 11.0589 93.4083 10.3643Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-lto4i2`,
                            "data-framer-name": `Group`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 68,
                            intrinsicWidth: 116,
                            svg: `<svg width="116" height="68" viewBox="0 0 116 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.918498 64.4439C2.07619 63.7756 3.98114 63.7914 5.18093 64.486C6.3702 65.1753 6.3965 66.2857 5.23881 66.954C4.07585 67.6275 2.16041 67.6065 0.97114 66.9171C-0.223388 66.2173 -0.244456 65.1122 0.918498 64.4439Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M9.33256 59.5765C10.4903 58.9081 12.3952 58.9239 13.595 59.6186C14.7843 60.3079 14.8106 61.4182 13.6529 62.0866C12.4899 62.7601 10.5745 62.7391 9.3852 62.0497C8.19067 61.3498 8.16961 60.2448 9.33256 59.5765Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M17.7583 54.7137C18.916 54.0454 20.821 54.0612 22.0208 54.7558C23.21 55.4451 23.2363 56.5555 22.0787 57.2238C20.9157 57.8973 19.0002 57.8763 17.811 57.1869C16.6165 56.487 16.5954 55.382 17.7583 54.7137Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M34.6021 44.9837C35.7598 44.3154 37.6648 44.3312 38.8646 45.0258C40.0538 45.7151 40.0801 46.8255 38.9224 47.4938C37.7595 48.1673 35.844 48.1463 34.6548 47.4569C33.455 46.7623 33.4339 45.6572 34.6021 44.9837Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M51.4303 35.2647C52.5879 34.5964 54.4929 34.6122 55.6927 35.3068C56.882 35.9961 56.9083 37.1065 55.7506 37.7748C54.5876 38.4484 52.6722 38.4273 51.4829 37.7379C50.2831 37.0381 50.262 35.933 51.4303 35.2647Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M43.0103 40.1111C44.168 39.4428 46.073 39.4586 47.2728 40.1532C48.462 40.8426 48.4883 41.9529 47.3306 42.6212C46.1677 43.2948 44.2522 43.2737 43.063 42.5844C41.8632 41.8898 41.8421 40.7847 43.0103 40.1111Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M59.8456 30.3862C61.0085 29.7126 62.9187 29.7284 64.1132 30.423C65.3025 31.1124 65.3288 32.2227 64.1659 32.8963C63.0082 33.5646 61.0927 33.5435 59.9035 32.8542C58.7089 32.1596 58.6879 31.0545 59.8456 30.3862Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M26.1402 49.8359C27.3452 49.1413 29.2765 49.1413 30.4763 49.8359C31.6655 50.5253 31.6655 51.6514 30.4605 52.346C29.2607 53.0353 27.3137 53.0353 26.1244 52.346C24.9299 51.6514 24.9404 50.5253 26.1402 49.8359Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M85.1148 15.8051C86.3198 15.1105 88.2511 15.1105 89.4508 15.8051C90.6401 16.4945 90.6401 17.6206 89.4351 18.3152C88.2353 19.0046 86.2883 19.0046 85.099 18.3152C83.9045 17.6206 83.915 16.4998 85.1148 15.8051Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M110.367 1.23336C111.572 0.538748 113.503 0.538748 114.703 1.23336C115.892 1.92272 115.892 3.04883 114.687 3.74345C113.487 4.4328 111.54 4.4328 110.351 3.74345C109.156 3.04883 109.167 1.92272 110.367 1.23336Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M101.927 6.08029C103.132 5.38567 105.064 5.38567 106.263 6.08029C107.453 6.76964 107.453 7.89575 106.248 8.59037C105.048 9.27972 103.101 9.27972 101.911 8.59037C100.717 7.90102 100.727 6.7749 101.927 6.08029Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M68.2912 25.5454C69.4962 24.8508 71.438 24.8561 72.6325 25.5507C73.827 26.2453 73.827 27.3714 72.6272 28.0661C71.4274 28.7554 69.4804 28.7554 68.2859 28.0608C67.0861 27.3662 67.0914 26.2401 68.2912 25.5454Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M76.6583 20.6988C77.8634 20.0041 79.8051 20.0094 80.9997 20.704C82.1942 21.3986 82.1942 22.5248 80.9944 23.2194C79.7946 23.9087 77.8476 23.9087 76.6531 23.2141C75.4533 22.5195 75.4638 21.3934 76.6583 20.6988Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
<path d="M93.4747 10.9214C94.6798 10.2268 96.6216 10.2321 97.8161 10.9267C99.0106 11.6213 99.0106 12.7474 97.8108 13.442C96.611 14.1314 94.664 14.1314 93.4695 13.4368C92.2697 12.7422 92.275 11.616 93.4747 10.9214Z" stroke="#73B200" stroke-width="0.95" stroke-miterlimit="10"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ l(`div`, {
                            className: `framer-1pbjyu3`,
                            "data-framer-name": `Group 1321315554`,
                            children: [
                              /*#__PURE__*/ l(`div`, {
                                className: `framer-1sx74h`,
                                "data-framer-name": `Group 55320`,
                                children: [
                                  /*#__PURE__*/ c(h, {
                                    className: `framer-1sfoqi0`,
                                    "data-framer-name": `Rectangle 5`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 29,
                                    intrinsicWidth: 48,
                                    svg: `<svg width="48" height="29" viewBox="0 0 48 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-8.9407e-08" y="0.5" width="26.6591" height="26.659" transform="matrix(0.866025 0.5 -0.866026 0.5 24.4682 0.795166)" fill="white" stroke="black"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ c(h, {
                                    className: `framer-1chmmn9`,
                                    "data-framer-name": `Rectangle 3`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 43,
                                    intrinsicWidth: 25,
                                    svg: `<svg width="25" height="43" viewBox="0 0 25 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.433013" y="0.75" width="26.6591" height="26.659" transform="matrix(0.866025 0.5 -1.96876e-07 1 0.140044 0.499314)" fill="#F4F2EA" stroke="black"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ c(h, {
                                    className: `framer-1px0e3i`,
                                    "data-framer-name": `Rectangle 6`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 33,
                                    intrinsicWidth: 20,
                                    svg: `<svg width="20" height="33" viewBox="0 0 20 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="21.0952" height="21.0952" transform="matrix(0.866025 0.5 -1.96876e-07 1 0.923828 0.638916)" fill="#F4F2EA"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ c(h, {
                                    className: `framer-18n6jg4`,
                                    "data-framer-name": `Rectangle 4`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 43,
                                    intrinsicWidth: 24,
                                    svg: `<svg width="24" height="43" viewBox="0 0 24 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.433013" y="0.25" width="26.659" height="26.659" transform="matrix(0.866025 -0.5 -1.52815e-07 1 0.0736377 14.7617)" fill="#F4F2EA" stroke="black"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ c(h, {
                                    className: `framer-4ztyp8`,
                                    "data-framer-name": `Rectangle 2`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 29,
                                    intrinsicWidth: 48,
                                    svg: `<svg width="48" height="29" viewBox="0 0 48 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-8.9407e-08" y="0.5" width="26.6591" height="26.659" transform="matrix(0.866025 0.5 -0.866026 0.5 24.4682 1.13647)" fill="white" stroke="black"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ l(`div`, {
                                className: `framer-umcggf`,
                                "data-framer-name": `Group`,
                                children: [
                                  /*#__PURE__*/ c(h, {
                                    className: `framer-k13ojq`,
                                    "data-framer-name": `Vector`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 34,
                                    intrinsicWidth: 18,
                                    svg: `<svg width="18" height="34" viewBox="0 0 18 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.01523 23.7101V3.54927L4.82502 1.34912L17.0544 8.41157V32.9677L1.01523 23.7101Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.8"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ c(h, {
                                    className: `framer-ddnf3t`,
                                    "data-framer-name": `Code`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 17,
                                    intrinsicWidth: 10,
                                    svg: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4345_5607)">
<path d="M8.86327 10.7008L6.90136 11.8335L6.50617 11.1491L8.0701 10.2429L6.50617 7.53086L6.90136 7.3027L8.86327 10.7008Z" fill="#050B14"/>
<path d="M0.455078 5.84636L2.41699 4.71365L2.81217 5.39813L1.24825 6.3043L2.81217 9.01633L2.41699 9.24449L0.455078 5.84636Z" fill="#050B14"/>
<path d="M5.11851 5.30279L3.65538 10.7633L4.19682 11.2434L5.65996 5.78291L5.11851 5.30279Z" fill="#050B14"/>
</g>
<defs>
<clipPath id="clip0_4345_5607">
<rect width="10.3562" height="10.3562" fill="white" transform="matrix(0.866025 0.5 0 1 0.175781 0.506348)"/>
</clipPath>
</defs>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ c(h, {
                                    className: `framer-lspfbb`,
                                    "data-framer-name": `Vector`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 6,
                                    intrinsicWidth: 5,
                                    svg: `<svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.82502 0.887207V5.74951L0.615234 3.31836L4.82502 0.887207Z" fill="#272727"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          /*#__PURE__*/ l(`div`, {
                            className: `framer-1g276ar`,
                            "data-framer-name": `Group`,
                            children: [
                              /*#__PURE__*/ c(h, {
                                className: `framer-1ymqqv7`,
                                "data-framer-name": `Vector`,
                                fill: `rgba(0,0,0,1)`,
                                intrinsicHeight: 30,
                                intrinsicWidth: 51,
                                svg: `<svg width="51" height="30" viewBox="0 0 51 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.1347 0.934518L49.033 14.7328L25.1348 28.5245L1.23647 14.7295L25.1347 0.934518Z" fill="white" stroke="#272727"/>
</svg>
`,
                                withExternalLayout: !0,
                              }),
                              /*#__PURE__*/ c(h, {
                                className: `framer-1lzryic`,
                                "data-framer-name": `Vector`,
                                fill: `rgba(0,0,0,1)`,
                                intrinsicHeight: 44,
                                intrinsicWidth: 26,
                                svg: `<svg width="26" height="44" viewBox="0 0 26 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.6347 42.981L0.736328 29.1859V1.59603L24.6347 15.3944V42.981Z" fill="#F4F2EA" stroke="#272727"/>
</svg>
`,
                                withExternalLayout: !0,
                              }),
                              /*#__PURE__*/ c(h, {
                                className: `framer-1dh5h83`,
                                "data-framer-name": `Vector`,
                                fill: `rgba(0,0,0,1)`,
                                intrinsicHeight: 44,
                                intrinsicWidth: 26,
                                svg: `<svg width="26" height="44" viewBox="0 0 26 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.634276 15.3944L24.5327 1.59934V29.1893L0.630963 42.9811L0.634276 15.3944Z" fill="#F4F2EA" stroke="#272727"/>
</svg>
`,
                                withExternalLayout: !0,
                              }),
                              /*#__PURE__*/ l(`div`, {
                                className: `framer-o9rghe`,
                                "data-framer-name": `Group`,
                                children: [
                                  /*#__PURE__*/ c(h, {
                                    className: `framer-15sqbst`,
                                    "data-framer-name": `Vector`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 33,
                                    intrinsicWidth: 18,
                                    svg: `<svg width="18" height="33" viewBox="0 0 18 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.982422 22.7925V2.74713L4.69221 0.604731L16.8216 7.60943V31.9346L0.982422 22.7925Z" fill="#F4F2EA" stroke="#272727"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ c(h, {
                                    className: `framer-rdhah8`,
                                    "data-framer-name": `Vector`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 5,
                                    intrinsicWidth: 5,
                                    svg: `<svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.69221 0.0273438V4.88965L0.482422 2.4585L4.69221 0.0273438Z" fill="#272727"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ c(h, {
                                    className: `framer-yn0y9h`,
                                    "data-framer-name": `Data-table`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 17,
                                    intrinsicWidth: 10,
                                    svg: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4345_5616)">
<path d="M3.70605 8.3738L2.58496 7.72654V8.3738L3.70605 9.02106V8.3738Z" fill="#050B14"/>
<path d="M5.38769 9.3447L4.2666 8.69743V9.3447L5.38769 9.99196V9.3447Z" fill="#050B14"/>
<path d="M3.70605 7.07928L2.58496 6.43201V7.07928L3.70605 7.72654V7.07928Z" fill="#050B14"/>
<path d="M5.38769 10.6392L4.2666 9.99196V10.6392L5.38769 11.2865V10.6392Z" fill="#050B14"/>
<path d="M7.06933 9.02106L5.94824 8.3738V9.02106L7.06933 9.66833V9.02106Z" fill="#050B14"/>
<path d="M7.06933 11.6101L5.94824 10.9629V11.6101L7.06933 12.2574V11.6101Z" fill="#050B14"/>
<path d="M7.91015 5.94657L1.74414 2.38662C1.59553 2.30103 1.45306 2.28704 1.34798 2.34771C1.2429 2.40838 1.18378 2.53876 1.18359 2.71025V9.83014C1.18378 10.0018 1.2429 10.2005 1.34798 10.3825C1.45306 10.5645 1.59553 10.715 1.74414 10.801L7.91015 14.361C8.05876 14.4466 8.20123 14.4606 8.30631 14.3999C8.41139 14.3392 8.47051 14.2088 8.47069 14.0374V6.91746C8.47051 6.74575 8.41139 6.54711 8.30631 6.3651C8.20123 6.1831 8.05876 6.03258 7.91015 5.94657ZM7.91015 6.59383V7.88835L1.74414 4.32841V3.03388L7.91015 6.59383ZM1.74414 10.1538V4.97567L7.91015 8.53562V13.7137L1.74414 10.1538Z" fill="#050B14"/>
</g>
<defs>
<clipPath id="clip0_4345_5616">
<rect width="10.3562" height="10.3562" fill="white" transform="matrix(0.866025 0.5 0 1 0.34375 0.606689)"/>
</clipPath>
</defs>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-1g1dth7`,
                            "data-framer-name": `XMLID_70_`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 393,
                            intrinsicWidth: 140,
                            svg: `<svg width="140" height="393" viewBox="0 0 140 393" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.49" fill-rule="evenodd" clip-rule="evenodd" d="M0.0214844 0.117432V350.005L71.2585 392.254C71.2585 391.958 139.549 350.005 139.549 350.005V0.117531L0.0214844 0.117432Z" fill="url(#paint0_linear_4345_5617)" fill-opacity="0.5"/>
<defs>
<linearGradient id="paint0_linear_4345_5617" x1="71.2609" y1="392.246" x2="71.2609" y2="71.1267" gradientUnits="userSpaceOnUse">
<stop stop-color="#B2ED1D"/>
<stop offset="0.485" stop-color="#BFF043" stop-opacity="0.75"/>
<stop offset="0.6866" stop-color="#CCF368" stop-opacity="0.48"/>
<stop offset="0.9905" stop-color="#E5F9B4" stop-opacity="0.01"/>
<stop offset="1" stop-color="#F3F3F3" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-t6cfbs`,
                            "data-framer-name": `Rectangle 8`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 62,
                            intrinsicWidth: 106,
                            svg: `<svg width="106" height="62" viewBox="0 0 106 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.75977 61.0811L105.67 1.0885L103.938 0.0885042L0.0277148 60.0811L1.75977 61.0811Z" fill="#73B200"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-lz35bl`,
                            "data-framer-name": `Group 55336`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 53,
                            intrinsicWidth: 85,
                            svg: `<svg width="85" height="53" viewBox="0 0 85 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.3428 49.6511V52.1332L0.844922 28.3393V25.6913L42.3428 49.6511Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M42.6428 49.1317L1.14495 25.1719L42.6428 1.21724L84.1407 25.1719L42.6428 49.1317Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M84.4405 28.3393L42.9426 52.1332V49.6511L84.4405 25.6913V28.3393Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ l(`div`, {
                            className: `framer-1sdg5r6`,
                            "data-framer-name": `Group 1321315557`,
                            children: [
                              /*#__PURE__*/ c(h, {
                                className: `framer-iwm13a`,
                                "data-framer-name": `Group`,
                                fill: `rgba(0,0,0,1)`,
                                intrinsicHeight: 53,
                                intrinsicWidth: 85,
                                svg: `<svg width="85" height="53" viewBox="0 0 85 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.3409 49.6511V52.1332L0.842969 28.3393V25.6913L42.3409 49.6511Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M42.6409 49.1317L1.143 25.1719L42.6409 1.21724L84.1387 25.1719L42.6409 49.1317Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M84.4385 28.3393L42.9406 52.1332V49.6511L84.4385 25.6913V28.3393Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                                withExternalLayout: !0,
                              }),
                              /*#__PURE__*/ c(h, {
                                className: `framer-5jilha`,
                                "data-framer-name": `Group 1321315560`,
                                fill: `rgba(0,0,0,1)`,
                                intrinsicHeight: 68,
                                intrinsicWidth: 49,
                                svg: `<svg width="49" height="68" viewBox="0 0 49 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8.9407e-08" y="0.5" width="26.6591" height="26.659" transform="matrix(-0.866025 0.5 0.866026 0.5 24.0455 40.1829)" fill="white" stroke="black"/>
<rect x="-0.433013" y="0.75" width="26.6591" height="26.659" transform="matrix(-0.866025 0.5 1.96876e-07 1 47.6236 26.32)" fill="#F4F2EA" stroke="black"/>
<rect width="21.0952" height="21.0952" transform="matrix(-0.866025 0.5 1.96876e-07 1 45.5898 31.0266)" fill="#F4F2EA"/>
<rect x="-0.433013" y="0.25" width="26.659" height="26.659" transform="matrix(-0.866025 -0.5 1.52815e-07 1 23.69 39.7164)" fill="#F4F2EA" stroke="black"/>
<rect x="8.9407e-08" y="0.5" width="26.6591" height="26.659" transform="matrix(-0.866025 0.5 0.866026 0.5 24.0455 12.5242)" fill="white" stroke="black"/>
<path d="M32.4984 23.0978V2.93696L28.6886 0.736812L16.4593 7.79927V32.3554L32.4984 23.0978Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.8"/>
<g clip-path="url(#clip0_4345_5631)">
<path d="M20.6504 19.0885L22.6123 20.2212L23.0075 19.5368L21.4436 18.6306L23.0075 15.9186L22.6123 15.6904L20.6504 19.0885Z" fill="#050B14"/>
<path d="M29.0586 14.2341L27.0967 13.1013L26.7015 13.7858L28.2654 14.692L26.7015 17.404L27.0967 17.6322L29.0586 14.2341Z" fill="#050B14"/>
<path d="M24.3952 13.6905L25.8583 19.151L25.3168 19.6311L23.8537 14.1706L24.3952 13.6905Z" fill="#050B14"/>
</g>
<path d="M28.6886 0.274902V5.1372L32.8984 2.70605L28.6886 0.274902Z" fill="#272727"/>
<defs>
<clipPath id="clip0_4345_5631">
<rect width="10.3562" height="10.3562" fill="white" transform="matrix(-0.866025 0.5 0 1 29.3379 8.89404)"/>
</clipPath>
</defs>
</svg>
`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-15tbmh3`,
                            "data-framer-name": `Group 1321315556`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 62,
                            intrinsicWidth: 85,
                            svg: `<svg width="85" height="62" viewBox="0 0 85 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.7979 58.5808V61.0629L0.3 37.269V34.6209L41.7979 58.5808Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M42.0979 58.0614L0.60003 34.1016L42.0979 10.1469L83.5958 34.1016L42.0979 58.0614Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M83.8956 37.269L42.3977 61.0629V58.5808L83.8956 34.6209V37.269Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M42.2815 6.01904L70.0137 22.0078L41.9052 37.9267L14.1832 22.0076L42.2815 6.01904Z" fill="white" stroke="black"/>
<path d="M70.0137 35.8684L41.8947 51.8285V37.9962L70.0137 22.0076V35.8684Z" fill="#F4F2EA" stroke="black"/>
<path d="M57.3381 34.915L60.9902 32.8076V30.3806L57.3381 32.4901V34.915Z" fill="#73B200" stroke="black"/>
<path d="M63.5438 31.335L67.1934 29.2259V26.8011L63.5438 28.9082V31.335Z" fill="#73B200" stroke="black"/>
<path d="M57.3381 40.2866L60.9902 38.1792V35.7522L57.3381 37.8617V40.2866Z" fill="#73B200" stroke="black"/>
<path d="M63.5438 36.7064L67.1934 34.5972V32.1724L63.5438 34.2796V36.7064Z" fill="#73B200" stroke="black"/>
<path d="M14.1847 22.0667L41.8965 37.9963V51.8288L14.1847 35.8991V22.0667Z" fill="#F4F2EA" stroke="black"/>
<path d="M48.5918 36.8564V40.4384L43.9397 43.1229V39.5435L48.5918 36.8564Z" fill="#73B200" stroke="black"/>
<path d="M54.7949 33.2771V36.8564L50.1454 39.5435V35.9616L54.7949 33.2771Z" fill="#73B200" stroke="black"/>
<path d="M48.5918 42.2278V45.8097L43.9397 48.4942V44.9123L48.5918 42.2278Z" fill="#73B200" stroke="black"/>
<path d="M54.7949 38.646V42.2279L50.1454 44.9124V41.3331L54.7949 38.646Z" fill="#73B200" stroke="black"/>
<path d="M41.1886 30.1682V19.4487L47.3789 23.022L41.1886 30.1682ZM41.1886 19.4487V30.1682L34.9983 23.022L41.1886 19.4487Z" fill="#73B200"/>
<path d="M41.1886 30.1682V19.4487M41.1886 30.1682L47.3789 23.022L41.1886 19.4487M41.1886 30.1682L34.9983 23.022L41.1886 19.4487" stroke="black"/>
<path d="M41.1832 18.0183L32.5245 23.022L41.191 28.0242L49.8574 23.022L41.1832 18.0183ZM41.191 26.5949L35.0007 23.0216L41.191 19.4487L47.3813 23.022L41.191 26.5949Z" fill="white" stroke="black"/>
<path d="M32.523 23.0217V28.7387L41.1895 33.7412V28.0239L32.523 23.0217Z" fill="#F4F2EA" stroke="black"/>
<path d="M41.191 28.0239V33.7412L49.8574 28.7387V23.0217L41.191 28.0239Z" fill="#F4F2EA" stroke="black"/>
<path d="M57.8075 6.75215V1.44702L60.8711 3.21546L57.8075 6.75215ZM57.8075 1.44702V6.75215L54.7439 3.21546L57.8075 1.44702Z" fill="#59770F"/>
<path d="M57.8075 6.75215V1.44702M57.8075 6.75215L60.8711 3.21546L57.8075 1.44702M57.8075 6.75215L54.7439 3.21546L57.8075 1.44702" stroke="black"/>
<path d="M57.8028 0.739258L53.5176 3.21561L57.8066 5.6912L62.0957 3.21561L57.8028 0.739258ZM57.8066 4.98386L54.743 3.21542L57.8066 1.44717L60.8703 3.21561L57.8066 4.98386Z" fill="white" stroke="black"/>
<path d="M53.5176 3.21533V20.7244L57.8066 23.2002L57.8066 5.69092L53.5176 3.21533Z" fill="#F4F2EA" stroke="black"/>
<path d="M57.8066 5.69092V23.2002L62.0957 20.7244V3.21533L57.8066 5.69092Z" fill="#F4F2EA" stroke="black"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-16zwv9w`,
                            "data-framer-name": `Group 1321315555`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 80,
                            intrinsicWidth: 24,
                            svg: `<svg width="24" height="80" viewBox="0 0 24 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M23.3126 73.3106C23.3318 71.8528 22.3916 70.275 20.2614 68.99C18.1343 67.7104 15.3023 67.0233 12.435 66.9699C9.56752 66.9165 6.71873 67.4979 4.5585 68.6979L23.3126 73.3106ZM23.3126 73.3106C23.2934 74.7672 22.3135 76.3075 20.1546 77.5123M23.3126 73.3106L20.1546 77.5123M20.1546 77.5123C17.9981 78.7122 15.1495 79.2937 12.2809 79.2403C9.4126 79.1869 6.57885 78.4998 4.45178 77.2202C2.32191 75.9354 1.38147 74.3558 1.40068 72.8969C1.41988 71.4394 2.39974 69.8992 4.5582 68.6981L20.1546 77.5123Z" fill="#94C518" stroke="#73B200"/>
</g>
<path d="M17.9661 69.9866C21.0165 71.8269 20.9807 74.7126 17.8802 76.4383C14.7797 78.1639 9.79598 78.0708 6.73845 76.2306C3.68808 74.3903 3.72388 71.5047 6.82437 69.779C9.92486 68.0533 14.9086 68.1464 17.9661 69.9866Z" fill="#73B200"/>
<path d="M8.05664 73.1089H16.6492V0.343994H8.05664V73.1089Z" fill="url(#paint0_linear_4345_5679)"/>
<defs>
<linearGradient id="paint0_linear_4345_5679" x1="11.6749" y1="73.1594" x2="13.031" y2="0.266092" gradientUnits="userSpaceOnUse">
<stop stop-color="#73B200"/>
<stop offset="0.2852" stop-color="#73B200" stop-opacity="0.28"/>
<stop offset="0.4875" stop-color="#94C518" stop-opacity="0.2"/>
<stop offset="1" stop-color="#D9F68E" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-1jmvcw4`,
                            "data-framer-name": `Group 55337`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 81,
                            intrinsicWidth: 24,
                            svg: `<svg width="24" height="81" viewBox="0 0 24 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M22.9786 73.648C22.9978 72.1902 22.0576 70.6124 19.9274 69.3274C17.8003 68.0478 14.9684 67.3607 12.101 67.3073C9.23353 67.2539 6.38474 67.8353 4.22451 69.0353L22.9786 73.648ZM22.9786 73.648C22.9594 75.1046 21.9796 76.6449 19.8206 77.8497M22.9786 73.648L19.8206 77.8497M19.8206 77.8497C17.6641 79.0496 14.8155 79.6311 11.9469 79.5777C9.07862 79.5243 6.24487 78.8372 4.11779 77.5576C1.98793 76.2728 1.04748 74.6932 1.0667 73.2343C1.08589 71.7768 2.06575 70.2366 4.22422 69.0355L19.8206 77.8497Z" fill="#94C518" stroke="#73B200"/>
</g>
<path d="M17.6321 70.324C20.6825 72.1643 20.6467 75.05 17.5462 76.7757C14.4457 78.5013 9.46199 78.4082 6.40446 76.568C3.35409 74.7277 3.38989 71.8421 6.49039 70.1164C9.59088 68.3907 14.5746 68.4838 17.6321 70.324Z" fill="#73B200"/>
<path d="M7.72266 73.4463H16.3152V0.681396H7.72266V73.4463Z" fill="url(#paint0_linear_4345_5687)"/>
<defs>
<linearGradient id="paint0_linear_4345_5687" x1="11.341" y1="73.4968" x2="12.697" y2="0.603495" gradientUnits="userSpaceOnUse">
<stop stop-color="#73B200"/>
<stop offset="0.2852" stop-color="#73B200" stop-opacity="0.28"/>
<stop offset="0.4875" stop-color="#94C518" stop-opacity="0.2"/>
<stop offset="1" stop-color="#D9F68E" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-11vexyd`,
                            "data-framer-name": `Group 1321315558`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 53,
                            intrinsicWidth: 86,
                            svg: `<svg width="86" height="53" viewBox="0 0 86 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.7667 49.635V52.1171L1.26875 28.3232V25.6751L42.7667 49.635Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M43.0667 49.1156L1.56878 25.1558L43.0667 1.20113L84.5645 25.1558L43.0667 49.1156Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M84.8643 28.3232L43.3664 52.1171V49.635L84.8643 25.6751V28.3232Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(h, {
                            className: `framer-7jqq5k`,
                            "data-framer-name": `Group 1321315559`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 126,
                            intrinsicWidth: 92,
                            svg: `<svg width="92" height="126" viewBox="0 0 92 126" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.9073 122.501V124.983L0.409375 101.189V98.5409L41.9073 122.501Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M42.2073 121.981L0.709405 98.0215L42.2073 74.0669L83.7051 98.0215L42.2073 121.981Z" fill="white" stroke="#272727" stroke-width="0.6"/>
<path d="M84.0049 101.189L42.507 124.983V122.501L84.0049 98.5409V101.189Z" fill="#F4F2EA" stroke="#272727" stroke-width="0.6"/>
<path d="M48.8124 82.2376L42.4942 78.5934L36.1811 82.2402V23.8888L42.4967 20.242V12.9458L74.0801 31.1798L67.7644 34.8291V42.1228L48.8124 31.1798V82.2376Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M67.7625 42.123L74.0781 38.4761L67.7625 34.8293L61.4443 38.4761L67.7625 42.123Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M67.7625 34.8292L74.0781 31.1799L67.7625 27.533L61.4443 31.1799L67.7625 34.8292Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M74.0781 31.1799V38.4759L67.7625 27.533V42.1229L61.4443 31.1799V38.4759" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.6179 83.041V85.3573C36.6179 85.5014 36.7131 85.643 36.901 85.7511L37.6473 86.1834L38.9701 85.4216C39.3459 85.2028 39.3459 84.8502 38.9701 84.6341L38.2238 84.2018L36.901 83.4374C36.7105 83.3267 36.6179 83.1852 36.6179 83.0437V83.041Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.6172 85.5168V85.3547" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M39.1836 89.7321L37.0398 88.4941" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M39.1836 89.7321L37.0398 88.4941" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.4785 95.6798C27.4785 95.896 27.6098 96.1045 27.8774 96.2589L27.8877 96.264L41.811 104.301C42.4029 104.644 43.4375 104.6 44.1221 104.206L56.0868 97.2986C56.1434 97.2652 56.1949 97.2318 56.2412 97.1983C56.514 97.0027 56.6504 96.7685 56.6504 96.5446C56.6504 96.3207 56.5191 96.1225 56.2515 95.9681L42.318 87.923C41.726 87.5808 40.6914 87.6244 40.0069 88.0182L28.0422 94.9258C27.669 95.1394 27.476 95.4173 27.476 95.6798H27.4785Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.4779 95.6797V96.9176C27.4779 97.1338 27.6092 97.3423 27.8768 97.4967L41.8103 105.542C42.4023 105.884 43.4369 105.84 44.1214 105.447L56.0861 98.5391C56.4593 98.3254 56.6523 98.0475 56.6523 97.7849V96.547C56.6523 96.7709 56.5134 97.0051 56.2431 97.2007C56.1968 97.2368 56.1453 97.2677 56.0887 97.3011L44.124 104.209C43.4394 104.602 42.4048 104.646 41.8129 104.304L27.8897 96.2665L27.8794 96.2614C27.6117 96.107 27.4805 95.8985 27.4805 95.6823L27.4779 95.6797Z" fill="#73B200" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M38.0502 4.42505V18.2479C38.0502 18.4615 37.9446 18.675 37.7336 18.7986L28.6385 24.0488C28.0491 24.3885 27.3233 24.3885 26.734 24.0488L21.4761 21.0222C21.2651 20.9012 21.1596 20.685 21.1596 20.4714V6.64856L38.0527 4.42505H38.0502Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.6391 10.2256L37.7343 4.97544C38.1589 4.73095 38.1589 4.121 37.7343 3.87651L32.4764 0.850002C31.887 0.510286 31.1613 0.510286 30.5719 0.850002L21.4768 6.10014C21.0521 6.34463 21.0521 6.95458 21.4768 7.19908L26.7346 10.2256C27.324 10.5653 28.0498 10.5653 28.6391 10.2256Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.955 3.48013C24.955 3.57792 24.973 3.67318 25.009 3.7684C25.1017 4.01032 25.3101 4.23939 25.637 4.42726C26.5455 4.95228 28.0175 4.95228 28.9235 4.42726C29.2503 4.23939 29.4588 4.01032 29.5514 3.7684C29.5874 3.67318 29.6055 3.57535 29.6055 3.48013C29.6055 3.13784 29.379 2.79299 28.9235 2.53048C28.015 2.00546 26.5429 2.00546 25.637 2.53048C25.184 2.79299 24.955 3.13526 24.955 3.48013Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.955 3.48022V6.53262C24.955 6.87491 25.1814 7.21975 25.637 7.48226C26.5455 8.00728 28.0175 8.00728 28.9235 7.48226C29.379 7.21975 29.6055 6.87748 29.6055 6.53262V3.48022C29.6055 3.57802 29.5874 3.67328 29.5514 3.7685C29.4588 4.01042 29.2503 4.23948 28.9235 4.42736C28.015 4.95237 26.5429 4.95237 25.637 4.42736C25.3101 4.23948 25.1017 4.01042 25.009 3.7685C24.973 3.67328 24.955 3.57545 24.955 3.48022Z" fill="#73B200" stroke="black" stroke-width="0.8" stroke-miterlimit="10"/>
<path d="M33.002 4.97833L30.817 3.71729" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.3145 4.21881L32.132 2.95776" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.9968 12.0995C22.9968 12.8175 23.5012 13.6899 24.1214 14.0476C24.7417 14.4054 25.2461 14.1145 25.2461 13.3991C25.2461 12.6836 24.7417 11.8086 24.1214 11.4509C23.5012 11.0932 22.9968 11.384 22.9968 12.0995Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.9968 17.6119C22.9968 18.33 23.5012 19.2024 24.1214 19.5601C24.7417 19.9178 25.2461 19.627 25.2461 18.9115C25.2461 18.1961 24.7417 17.3211 24.1214 16.9634C23.5012 16.6056 22.9968 16.8965 22.9968 17.6119Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M79.8494 82.8376C79.8494 83.1876 79.9549 83.4785 80.1634 83.6406L80.3127 83.7256L83.419 85.5193C83.1694 85.37 83.0484 85.0612 83.0484 84.6804C83.0484 84.2995 83.1745 83.8336 83.4319 83.3909L85.7559 79.3659L84.4073 78.5886L83.4319 78.025C83.2466 77.9169 83.1282 77.7213 83.0767 77.4742C83.015 77.1809 83.051 76.8153 83.1823 76.437L81.898 78.6658H81.8954L80.2329 81.5483C79.9781 81.991 79.8494 82.4516 79.8494 82.8376Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M70.6718 84.3846C70.6666 84.7835 70.7953 85.1078 71.0552 85.2596L74.2825 87.1228C74.298 87.1306 74.3134 87.1384 74.3288 87.1461L74.2542 87.1023C73.9968 86.9531 73.8707 86.6391 73.8707 86.2505V86.2041C73.8707 85.8181 73.9968 85.3574 74.2542 84.9121L75.155 83.35L77.4815 79.3223C77.7312 78.8848 78.0606 78.5476 78.3926 78.3546C78.2588 78.0277 78.1867 77.6288 78.1867 77.1707C78.1867 77.1733 78.1841 77.1733 78.1841 77.1733C77.5613 77.5311 76.9797 77.6623 76.4907 77.5877C76.5782 77.0549 76.4598 76.5994 76.1355 76.4116C76.0326 76.3524 75.9193 76.324 75.7958 76.324C75.6079 76.324 75.3995 76.3909 75.1936 76.5118C74.8641 76.7074 74.5347 77.0472 74.2825 77.4821L71.0552 83.0694C70.7953 83.5223 70.6666 83.9934 70.6718 84.3846Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M73.8704 86.2042C73.8806 85.8284 74.0068 85.3884 74.2538 84.9638L75.1777 83.3629L75.1546 83.3501L74.2538 84.9122C73.9965 85.3575 73.8704 85.8181 73.8704 86.2042Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M80.1632 83.6409C80.1838 83.6563 80.207 83.6744 80.2327 83.6872C80.2585 83.7027 80.2842 83.7155 80.3125 83.7258L80.1632 83.6409Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M73.8684 86.2037C73.8787 85.828 74.0048 85.3879 74.2519 84.9633L75.1758 83.3624L75.1526 83.3496L74.2519 84.9117C73.9945 85.357 73.8684 85.8177 73.8684 86.2037Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M73.8682 86.2041V86.2505C73.8682 86.6391 73.9943 86.9531 74.2517 87.1024L74.3263 87.1461L77.479 88.9656C77.9886 89.259 78.8173 88.7828 79.3294 87.8949C79.5842 87.4523 79.7129 86.9917 79.7129 86.6056C79.7129 86.2196 79.5842 85.9056 79.3294 85.7589L77.0055 84.4154L79.3294 80.3929C79.5147 80.0686 79.6331 79.7367 79.6846 79.4304C79.7721 78.8977 79.6537 78.4421 79.3294 78.2542C79.2265 78.195 79.1107 78.1667 78.9871 78.1667C78.7993 78.1667 78.5934 78.2337 78.3901 78.3546C78.0581 78.5476 77.7286 78.8848 77.479 79.3224L75.1525 83.35L75.1756 83.3628L74.2517 84.9637C74.0046 85.3883 73.8785 85.8284 73.8682 86.2041Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M83.046 84.6803C83.046 85.0612 83.1669 85.3699 83.4166 85.5192L83.4423 85.5347C83.9519 85.8152 84.7729 85.3366 85.2799 84.459L88.5072 78.8691C88.7645 78.4238 88.8906 77.9631 88.8906 77.5771V77.5307C88.8906 77.1421 88.7645 76.8282 88.5072 76.6815L85.2799 74.8183C85.2799 74.8183 85.2644 74.8105 85.2567 74.808L84.4923 74.3652C84.4898 74.3807 84.4872 74.3987 84.482 74.4141C84.4512 74.5763 84.4151 74.7359 84.3688 74.9006C84.3456 74.9855 84.3225 75.0653 84.2942 75.1476C84.0368 75.9686 83.607 76.7793 83.0743 77.4742C83.1257 77.7212 83.2441 77.9169 83.4294 78.025L84.4048 78.5886L85.7534 79.3658L83.4294 83.3908C83.1721 83.8335 83.046 84.2942 83.046 84.6803Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M73.8202 75.122V75.1451C73.8228 75.4771 73.8588 75.7808 73.9257 76.0536C73.9978 76.3496 74.1857 76.6044 74.4508 76.7562L74.7081 76.9029L77.8968 78.7481L79.3561 79.5897C78.9571 79.3298 78.6663 78.8846 78.5325 78.2773C78.481 78.0405 78.4527 77.7806 78.4502 77.5V77.4819C78.4502 75.3664 79.9325 72.798 81.7675 71.7402C81.7752 71.7325 81.7778 71.7325 81.7855 71.7274C82.6451 71.2384 83.4224 71.169 84.0117 71.4521L79.3226 68.7446L79.1322 68.6339C78.8851 68.4898 78.5865 68.4383 78.3112 68.5155C78.0306 68.5953 77.7373 68.7188 77.4362 68.8913C77.4259 68.8938 77.4207 68.8938 77.4156 68.9016C76.8159 69.2464 76.2523 69.7406 75.7556 70.3274C74.6052 71.6836 73.8202 73.5237 73.8202 75.122Z" fill="#73B200" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M85.0859 73.6527C85.0859 75.7682 83.5958 78.3367 81.7686 79.3944C80.8729 79.9092 80.0648 79.9761 79.4677 79.6518L79.3571 79.59C78.8012 79.2297 78.4589 78.5066 78.4512 77.5003V77.4822C78.4512 75.3667 79.9336 72.7982 81.7686 71.7405C81.7763 71.7327 81.7788 71.7329 81.7866 71.7303C82.6462 71.2413 83.4234 71.1692 84.0127 71.4548C84.0282 71.4574 84.0385 71.4652 84.0539 71.4729L84.1723 71.5474C84.7411 71.9052 85.0859 72.6336 85.0859 73.6553V73.6527Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M81.786 75.5007C81.7519 75.566 81.7269 75.6339 81.7115 75.6986C81.7236 75.6796 81.7357 75.6589 81.7474 75.6365C81.7815 75.5712 81.8065 75.5033 81.8219 75.4386C81.8097 75.4576 81.7977 75.4783 81.786 75.5007Z" fill="#59770F" stroke="black" stroke-width="0.8"/>
<path d="M76.8383 44.3416V70.9553C76.8383 70.9553 79.0645 72.1418 79.0645 72.2396V45.6258L76.8383 44.3416Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M79.0658 45.626V72.2397C79.5625 71.6529 80.1261 71.1588 80.7258 70.8139C80.7309 70.8062 80.7361 70.8062 80.7464 70.8036C81.0475 70.6312 81.3409 70.5077 81.6214 70.4279C81.8968 70.3507 82.1953 70.4021 82.4424 70.5463L82.6328 70.6568V45.626H79.0658Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M66.7954 46.4825C66.7954 47.3138 67.0862 48.2403 67.5597 49.0613C68.0333 49.8797 68.6869 50.5977 69.4101 51.0146L79.2954 56.7203C79.9697 57.1089 80.5873 57.1707 81.0506 56.9519L81.1844 56.8773C81.6348 56.5942 81.9102 56.0177 81.9102 55.2096C81.9102 54.4015 81.6193 53.4518 81.1458 52.6308C80.6722 51.8073 80.0186 51.0944 79.2954 50.6775L69.4101 44.9718C68.6715 44.542 68.0049 44.5111 67.5262 44.8071C67.0733 45.0902 66.7954 45.6667 66.7954 46.4825Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M68.2839 47.3426C68.2839 48.0607 68.7883 48.9331 69.4085 49.2908C70.0288 49.6485 70.5332 49.3577 70.5332 48.6423C70.5332 47.9268 70.0288 47.0518 69.4085 46.6941C68.7883 46.3363 68.2839 46.6272 68.2839 47.3426Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M78.1686 53.0479C78.1686 53.766 78.6731 54.6385 79.2933 54.9963C79.9135 55.354 80.418 55.0632 80.418 54.3477C80.418 53.6322 79.9135 52.7571 79.2933 52.3994C78.6731 52.0417 78.1686 52.3325 78.1686 53.0479Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M67.5252 44.8072C68.0014 44.5112 68.6705 44.5421 69.4091 44.9719L79.2944 50.6776C80.015 51.0945 80.6712 51.8073 81.1448 52.6309C81.6183 53.4493 81.9091 54.3758 81.9091 55.2097C81.9091 56.0435 81.6338 56.5968 81.1834 56.8774L90.6671 51.4008L90.837 51.303C91.2668 51.0122 91.5293 50.4434 91.5293 49.6559C91.5293 48.8195 91.2385 47.8981 90.7649 47.0772C90.2914 46.2587 89.6351 45.5432 88.9119 45.1237L79.0319 39.418C78.2907 38.9908 77.6215 38.9625 77.1454 39.2559L67.5252 44.8072Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M42.4904 85.8875V100.475L48.8086 96.8279V82.2407L45.6482 84.0654L42.4904 85.8875Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.1785 82.2407V96.8279L42.4941 100.475V85.8875L36.1785 82.2407Z" fill="#73B200" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.1747 82.2405L42.4904 85.8873L45.6482 84.0652L48.8086 82.2405L42.4904 78.5938L36.1747 82.2405Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 85.887L48.8105 82.2376L42.4949 78.5908L36.1793 82.2402L42.4949 85.887Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 78.5909L48.8105 74.9441L42.4949 71.2974L36.1793 74.9441L42.4949 78.5909Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8105 74.9441V82.2377L42.4949 71.2974V85.8871L36.1793 74.9441V82.2404" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 78.5914L48.8105 74.9446L42.4949 71.2979L36.1793 74.9446L42.4949 78.5914Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 71.2975L48.8105 67.6507L42.4949 64.0039L36.1793 67.6507L42.4949 71.2975Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8105 67.6507V74.9443L42.4949 64.0039V78.591L36.1793 67.6507V74.9443" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 71.2977L48.8105 67.6509L42.4949 64.0042L36.1793 67.6509L42.4949 71.2977Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 64.0039L48.8105 60.357L42.4949 56.7102L36.1793 60.357L42.4949 64.0039Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8105 60.357V67.6507L42.4949 56.7102V71.2975L36.1793 60.357V67.6507" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 64.0041L48.8105 60.3572L42.4949 56.7104L36.1793 60.3572L42.4949 64.0041Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 56.7106L48.8105 53.0638L42.4949 49.417L36.1793 53.0638L42.4949 56.7106Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8105 53.0638V60.3573L42.4949 49.417V64.0043L36.1793 53.0638V60.3573" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 56.7108L48.8105 53.064L42.4949 49.4172L36.1793 53.064L42.4949 56.7108Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 49.4169L48.8105 45.7701L42.4949 42.1233L36.1793 45.7701L42.4949 49.4169Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8105 45.7701V53.0636L42.4949 42.1233V56.7104L36.1793 45.7701V53.0636" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 49.4169L48.8105 45.7701L42.4949 42.1233L36.1793 45.7701L42.4949 49.4169Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 42.123L48.8105 38.4761L42.4949 34.8293L36.1793 38.4761L42.4949 42.123Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8105 38.4761V45.7698L42.4949 34.8293V49.4166L36.1793 38.4761V45.7698" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 42.123L48.8105 38.4761L42.4949 34.8293L36.1793 38.4761L42.4949 42.123Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 34.8292L48.8105 31.1799L42.4949 27.533L36.1793 31.1824L42.4949 34.8292Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8105 31.1799V38.4759L42.4949 27.533V42.1229L36.1793 31.1824V38.4759" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 34.8294L48.8105 31.1801L42.4949 27.5332L36.1793 31.1826L42.4949 34.8294Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 27.5333L48.8105 23.8865L42.4949 20.2397L36.1793 23.8865L42.4949 27.5333Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8105 23.8865V31.1802L42.4949 20.2397V34.8295L36.1793 23.8865V31.1827" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 27.5336L48.8105 23.8868L42.4949 20.24L36.1793 23.8868L42.4949 27.5336Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.4949 20.2396L48.8105 16.5928L42.4949 12.946L36.1793 16.5928L42.4949 20.2396Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8105 16.5928V23.8864L42.4949 12.946V27.5332L36.1793 16.5928V23.8864" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.1805 16.5923V23.8885L42.4961 20.2418V12.9456L39.3383 14.7702L36.1805 16.5923Z" fill="#94C518" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.8623 12.9459L36.1805 16.5926L39.3383 14.7705L42.4961 12.9459L36.1805 9.29907L29.8623 12.9459Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.8615 12.9456V20.2418L36.1797 23.8885V16.5923L29.8615 12.9456Z" fill="#73B200" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8087 31.1797L55.127 27.5328L48.8087 23.886L42.4931 27.5328L48.8087 31.1797Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8087 23.8863L55.127 20.2396L48.8087 16.5928L42.4931 20.2396L48.8087 23.8863Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M55.127 20.2396V27.5331L48.8087 16.5928V31.18L42.4931 20.2396V27.5331" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M55.1297 34.8297L61.4453 31.1804L55.1297 27.5334L48.8115 31.1829L55.1297 34.8297Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M55.1297 27.5336L61.4453 23.8868L55.1297 20.24L48.8115 23.8868L55.1297 27.5336Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M61.4453 23.8868V31.1805L55.1297 20.24V34.8298L48.8115 23.8868V31.183" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M61.4455 38.4765L67.7637 34.8297L61.4455 31.1804L55.1298 34.8297L61.4455 38.4765Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M61.4455 31.1804L67.7637 27.5335L61.4455 23.8867L55.1298 27.5335L61.4455 31.1804Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M67.7637 27.5335V34.8297L61.4455 23.8867V38.4765L55.1298 27.5335V34.8297" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M80.3965 49.4169L67.7626 34.8296V42.1233L80.3965 49.4169Z" fill="#F4F2EA" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M86.7129 45.77L74.079 31.1802L67.7634 34.8295L80.3973 49.4167L86.7129 45.77Z" fill="white" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M75.7553 38.3401L81.9062 45.4433" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M73.2239 35.4165L74.4824 36.8706" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                            withExternalLayout: !0,
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
      (he = [
        `.framer-Nbvj5.framer-edz858, .framer-Nbvj5 .framer-edz858 { display: block; }`,
        `.framer-Nbvj5.framer-kqm8v6 { align-content: center; align-items: center; background-color: var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-Nbvj5 .framer-2awf57-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 4; }`,
        `.framer-Nbvj5 .framer-1ufy1l2 { flex: none; height: 963px; overflow: hidden; position: relative; width: 1440px; }`,
        `.framer-Nbvj5 .framer-cwm47z { flex: none; height: 356px; left: calc(50.00000000000002% - 1280px / 2); overflow: hidden; position: absolute; top: 0px; width: 1280px; }`,
        `.framer-Nbvj5 .framer-p81o3g { align-content: center; align-items: center; bottom: 41px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; right: 0px; }`,
        `.framer-Nbvj5 .framer-112kfae { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: 1201px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-Nbvj5 .framer-1b83qf5 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: 1280px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-Nbvj5 .framer-1jngvtg { bottom: 0px; flex: none; height: 597px; left: 0px; overflow: hidden; position: absolute; right: 0px; }`,
        `.framer-Nbvj5 .framer-14jrc0v { bottom: 0px; flex: none; gap: 0px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: -1px; }`,
        `.framer-Nbvj5 .framer-15njuom { flex: none; height: 699px; left: -25px; overflow: visible; position: absolute; top: 37px; width: 1490px; }`,
        `.framer-Nbvj5 .framer-132v9ei { flex: none; height: 228px; left: 261px; position: absolute; top: 471px; width: 395px; }`,
        `.framer-Nbvj5 .framer-asw9ua { flex: none; height: 162px; left: 113px; position: absolute; top: 222px; width: 279px; }`,
        `.framer-Nbvj5 .framer-1nmx787 { flex: none; height: 309px; left: 0px; position: absolute; top: 175px; width: 534px; }`,
        `.framer-Nbvj5 .framer-glhf43 { flex: none; height: 163px; left: 534px; position: absolute; top: 175px; width: 282px; }`,
        `.framer-Nbvj5 .framer-8zhjjf { flex: none; height: 605px; overflow: visible; position: absolute; right: 0px; top: 0px; width: 1412px; }`,
        `.framer-Nbvj5 .framer-1vd0h7s { bottom: 33px; flex: none; left: 1023px; position: absolute; right: 258px; top: 498px; }`,
        `.framer-Nbvj5 .framer-mplzor { bottom: 204px; flex: none; left: 419px; position: absolute; right: 848px; top: 314px; }`,
        `.framer-Nbvj5 .framer-1xydrdk { flex: none; height: 89px; left: 591px; position: absolute; top: 332px; width: 288px; }`,
        `.framer-Nbvj5 .framer-360xkc { bottom: 337px; flex: none; left: 1167px; position: absolute; right: 196px; top: 240px; }`,
        `.framer-Nbvj5 .framer-178hzep { flex: none; height: 43px; left: 1048px; position: absolute; top: 298px; width: 75px; }`,
        `.framer-Nbvj5 .framer-10ubgqj { flex: none; height: 43px; left: 482px; position: absolute; top: 420px; width: 75px; }`,
        `.framer-Nbvj5 .framer-1bb3w2g { flex: none; height: 4px; left: 472px; position: absolute; top: 465px; width: 6px; }`,
        `.framer-Nbvj5 .framer-1gtig3r { flex: none; height: 480px; left: 337px; position: absolute; top: 126px; width: 527px; }`,
        `.framer-Nbvj5 .framer-eb1n44 { bottom: 144px; flex: none; left: 1101px; position: absolute; right: 306px; top: 458px; }`,
        `.framer-Nbvj5 .framer-3zo61l { flex: none; height: 399px; left: 804px; position: absolute; top: 147px; width: 324px; }`,
        `.framer-Nbvj5 .framer-1g4yl2l { flex: none; height: 371px; left: 871px; position: absolute; top: 0px; width: 191px; }`,
        `.framer-Nbvj5 .framer-uwk3xb { flex: none; height: 327px; left: 850px; position: absolute; top: 104px; width: 239px; }`,
        `.framer-Nbvj5 .framer-1bvyce { flex: none; height: 53px; left: 720px; position: absolute; top: 126px; width: 85px; }`,
        `.framer-Nbvj5 .framer-1vx15ji { flex: none; height: 40px; left: 553px; position: absolute; top: 227px; width: 65px; }`,
        `.framer-Nbvj5 .framer-19sm8dj { flex: none; height: 49px; left: 535px; position: absolute; top: 378px; width: 81px; }`,
        `.framer-Nbvj5 .framer-1l7op9f { flex: none; height: 101px; left: 1104px; position: absolute; top: 207px; width: 167px; }`,
        `.framer-Nbvj5 .framer-12buqmm { flex: none; height: 119px; left: 1110px; position: absolute; top: 393px; width: 303px; }`,
        `.framer-Nbvj5 .framer-v74nzl { flex: none; height: 67px; left: 755px; position: absolute; top: 493px; width: 116px; }`,
        `.framer-Nbvj5 .framer-1h1prey { flex: none; height: 68px; left: 174px; position: absolute; top: 406px; width: 116px; }`,
        `.framer-Nbvj5 .framer-140m0s0 { flex: none; height: 67px; left: 1123px; overflow: visible; position: absolute; top: 227px; width: 48px; }`,
        `.framer-Nbvj5 .framer-1pmhiog { flex: none; height: 55px; left: 0px; overflow: visible; position: absolute; top: 12px; width: 48px; }`,
        `.framer-Nbvj5 .framer-npp0cz { flex: none; height: 29px; left: 0px; position: absolute; top: 27px; width: 48px; }`,
        `.framer-Nbvj5 .framer-13tpysi { flex: none; height: 43px; left: -1px; position: absolute; top: 13px; width: 25px; }`,
        `.framer-Nbvj5 .framer-w51bx5 { flex: none; height: 33px; left: 2px; position: absolute; top: 18px; width: 20px; }`,
        `.framer-Nbvj5 .framer-1fbs6zt { flex: none; height: 43px; left: 24px; position: absolute; top: 13px; width: 24px; }`,
        `.framer-Nbvj5 .framer-fco68u { flex: none; height: 29px; left: 0px; position: absolute; top: -1px; width: 48px; }`,
        `.framer-Nbvj5 .framer-6wrcx0, .framer-Nbvj5 .framer-hswqkq { flex: none; height: 33px; left: 16px; overflow: visible; position: absolute; top: 0px; width: 17px; }`,
        `.framer-Nbvj5 .framer-b0bud9 { bottom: 1px; flex: none; left: -1px; position: absolute; right: 1px; top: -1px; }`,
        `.framer-Nbvj5 .framer-1shihar, .framer-Nbvj5 .framer-1r3zklf { flex: none; height: 17px; left: 3px; position: absolute; top: 8px; width: 10px; }`,
        `.framer-Nbvj5 .framer-truiio { bottom: 28px; flex: none; left: 0px; position: absolute; right: 13px; top: -1px; }`,
        `.framer-Nbvj5 .framer-4etj2t { flex: none; height: 71px; left: 737px; overflow: visible; position: absolute; top: 93px; width: 50px; }`,
        `.framer-Nbvj5 .framer-vj0nj9 { bottom: 29px; flex: none; left: -1px; position: absolute; right: 1px; top: 13px; }`,
        `.framer-Nbvj5 .framer-11zhqg3 { bottom: 0px; flex: none; left: -1px; position: absolute; right: 25px; top: 27px; }`,
        `.framer-Nbvj5 .framer-1qi9yi4 { bottom: 0px; flex: none; left: 24px; position: absolute; right: 1px; top: 27px; }`,
        `.framer-Nbvj5 .framer-1n5vw1z { bottom: 0px; flex: none; left: -1px; position: absolute; right: 1px; top: 0px; }`,
        `.framer-Nbvj5 .framer-9vkzyg { bottom: 28px; flex: none; left: 0px; position: absolute; right: 13px; top: 0px; }`,
        `.framer-Nbvj5 .framer-wk39le { bottom: 191px; flex: none; left: 895px; position: absolute; right: 378px; top: 22px; }`,
        `.framer-Nbvj5 .framer-zycdwv { flex: none; height: 62px; left: 317px; position: absolute; top: 314px; width: 106px; }`,
        `.framer-Nbvj5 .framer-1aikkv5 { flex: none; height: 53px; left: 268px; position: absolute; top: 358px; width: 85px; }`,
        `.framer-Nbvj5 .framer-8hqrxq { flex: none; height: 78px; left: 268px; overflow: visible; position: absolute; top: 332px; width: 84px; }`,
        `.framer-Nbvj5 .framer-s6k2m5 { flex: none; height: 53px; left: 0px; position: absolute; top: 26px; width: 85px; }`,
        `.framer-Nbvj5 .framer-k9vwva { flex: none; height: 68px; left: 17px; position: absolute; top: 0px; width: 49px; }`,
        `.framer-Nbvj5 .framer-1j0xijp { flex: none; height: 62px; left: 282px; position: absolute; top: 209px; width: 85px; }`,
        `.framer-Nbvj5 .framer-uvwv6p { flex: none; height: 80px; left: 190px; position: absolute; top: 247px; width: 24px; }`,
        `.framer-Nbvj5 .framer-1jtuyko { flex: none; height: 81px; left: 1189px; position: absolute; top: 444px; width: 24px; }`,
        `.framer-Nbvj5 .framer-ad0gp1 { flex: none; height: 53px; left: 134px; position: absolute; top: 441px; width: 86px; }`,
        `.framer-Nbvj5 .framer-nii7sh { flex: none; height: 126px; left: 0px; position: absolute; top: 125px; width: 92px; }`,
        `.framer-Nbvj5 .framer-1kn7p9v { flex: none; height: 66px; left: 1276px; position: absolute; top: 184px; width: 63px; }`,
        `.framer-Nbvj5 .framer-1521ugc { flex: none; height: 60px; left: 232px; position: absolute; top: 418px; width: 57px; }`,
        `.framer-Nbvj5 .framer-1p7ti5y { flex: none; height: 81px; left: 792px; position: absolute; top: 259px; width: 24px; }`,
        `.framer-Nbvj5 .framer-18n8qcb { flex: none; height: 87px; left: 628px; position: absolute; top: 332px; width: 95px; }`,
        `.framer-Nbvj5 .framer-uhk8sc { flex: none; height: 53px; left: 646px; position: absolute; top: 205px; width: 38px; }`,
        `.framer-Nbvj5 .framer-1cf4gy4 { flex: none; gap: 0px; height: 312px; left: 0px; overflow: hidden; position: absolute; top: 81px; width: 390px; }`,
        `.framer-Nbvj5 .framer-1cv52zn { flex: none; height: 339px; left: -269px; overflow: visible; position: absolute; top: 34px; width: 724px; }`,
        `.framer-Nbvj5 .framer-rcf8cs { flex: none; height: 112px; left: 127px; position: absolute; top: 228px; width: 192px; }`,
        `.framer-Nbvj5 .framer-u4uiqu { flex: none; height: 79px; left: 55px; position: absolute; top: 108px; width: 136px; }`,
        `.framer-Nbvj5 .framer-1eb53w6 { flex: none; height: 151px; left: -1px; position: absolute; top: 84px; width: 260px; }`,
        `.framer-Nbvj5 .framer-midvqw { flex: none; height: 79px; left: 259px; position: absolute; top: 85px; width: 138px; }`,
        `.framer-Nbvj5 .framer-1newefz { flex: none; height: 294px; left: 38px; overflow: visible; position: absolute; top: 0px; width: 686px; }`,
        `.framer-Nbvj5 .framer-ynbtt4 { bottom: 17px; flex: none; left: 496px; position: absolute; right: 126px; top: 241px; }`,
        `.framer-Nbvj5 .framer-onzfmq { bottom: 100px; flex: none; left: 203px; position: absolute; right: 413px; top: 151px; }`,
        `.framer-Nbvj5 .framer-16ifbt4 { flex: none; height: 44px; left: 287px; position: absolute; top: 161px; width: 141px; }`,
        `.framer-Nbvj5 .framer-k2fu6c { bottom: 165px; flex: none; left: 565px; position: absolute; right: 96px; top: 115px; }`,
        `.framer-Nbvj5 .framer-jyfw4d { flex: none; height: 21px; left: 509px; position: absolute; top: 144px; width: 37px; }`,
        `.framer-Nbvj5 .framer-6b2jb3 { flex: none; height: 21px; left: 234px; position: absolute; top: 204px; width: 37px; }`,
        `.framer-Nbvj5 .framer-u2rjw3 { flex: none; height: 3px; left: 228px; position: absolute; top: 225px; width: 4px; }`,
        `.framer-Nbvj5 .framer-o7v7qy { flex: none; height: 233px; left: 163px; position: absolute; top: 61px; width: 256px; }`,
        `.framer-Nbvj5 .framer-1gmbf60 { bottom: 71px; flex: none; left: 534px; position: absolute; right: 149px; top: 221px; }`,
        `.framer-Nbvj5 .framer-1vdokqa { flex: none; height: 194px; left: 391px; position: absolute; top: 71px; width: 157px; }`,
        `.framer-Nbvj5 .framer-f993zn { flex: none; height: 181px; left: 423px; position: absolute; top: -1px; width: 93px; }`,
        `.framer-Nbvj5 .framer-1jb2xw3 { flex: none; height: 160px; left: 413px; position: absolute; top: 50px; width: 116px; }`,
        `.framer-Nbvj5 .framer-2e2l2v { flex: none; height: 26px; left: 349px; position: absolute; top: 61px; width: 42px; }`,
        `.framer-Nbvj5 .framer-10srqy2 { flex: none; height: 20px; left: 269px; position: absolute; top: 110px; width: 32px; }`,
        `.framer-Nbvj5 .framer-qfw6ke { flex: none; height: 25px; left: 259px; position: absolute; top: 183px; width: 40px; }`,
        `.framer-Nbvj5 .framer-10d1vjd { flex: none; height: 49px; left: 536px; position: absolute; top: 100px; width: 82px; }`,
        `.framer-Nbvj5 .framer-1dvhyai { flex: none; height: 59px; left: 539px; position: absolute; top: 190px; width: 148px; }`,
        `.framer-Nbvj5 .framer-1dmmwef { flex: none; height: 33px; left: 366px; position: absolute; top: 239px; width: 58px; }`,
        `.framer-Nbvj5 .framer-106woav { flex: none; height: 33px; left: 84px; position: absolute; top: 197px; width: 57px; }`,
        `.framer-Nbvj5 .framer-a32t6j { flex: none; height: 33px; left: 545px; overflow: visible; position: absolute; top: 110px; width: 23px; }`,
        `.framer-Nbvj5 .framer-xbrzer { flex: none; height: 27px; left: 0px; overflow: visible; position: absolute; top: 6px; width: 23px; }`,
        `.framer-Nbvj5 .framer-jtalsm { flex: none; height: 14px; left: 0px; position: absolute; top: 13px; width: 24px; }`,
        `.framer-Nbvj5 .framer-8vzp7n { flex: none; height: 21px; left: -1px; position: absolute; top: 6px; width: 13px; }`,
        `.framer-Nbvj5 .framer-zxt65j { flex: none; height: 16px; left: 1px; position: absolute; top: 9px; width: 9px; }`,
        `.framer-Nbvj5 .framer-1adl07l { flex: none; height: 21px; left: 11px; position: absolute; top: 6px; width: 12px; }`,
        `.framer-Nbvj5 .framer-nlpcet { flex: none; height: 15px; left: 0px; position: absolute; top: -1px; width: 24px; }`,
        `.framer-Nbvj5 .framer-11ouy4o, .framer-Nbvj5 .framer-1kz6rur { flex: none; height: 16px; left: 8px; overflow: visible; position: absolute; top: 0px; width: 8px; }`,
        `.framer-Nbvj5 .framer-jezr5x, .framer-Nbvj5 .framer-fv7vpr { bottom: 1px; flex: none; left: 0px; position: absolute; right: 0px; top: -1px; }`,
        `.framer-Nbvj5 .framer-l9lgl5 { flex: none; height: 8px; left: 1px; position: absolute; top: 4px; width: 6px; }`,
        `.framer-Nbvj5 .framer-1e6xm58, .framer-Nbvj5 .framer-196dhyj { bottom: 14px; flex: none; left: 0px; position: absolute; right: 7px; top: 0px; }`,
        `.framer-Nbvj5 .framer-1fr32ob { flex: none; height: 34px; left: 358px; overflow: visible; position: absolute; top: 45px; width: 24px; }`,
        `.framer-Nbvj5 .framer-a36b24, .framer-Nbvj5 .framer-1ymqqv7 { bottom: 14px; flex: none; left: 0px; position: absolute; right: 0px; top: 6px; }`,
        `.framer-Nbvj5 .framer-1sb4bk2 { bottom: 1px; flex: none; left: 0px; position: absolute; right: 13px; top: 13px; }`,
        `.framer-Nbvj5 .framer-1mwrjnk { bottom: 1px; flex: none; left: 12px; position: absolute; right: 0px; top: 13px; }`,
        `.framer-Nbvj5 .framer-1tclppk, .framer-Nbvj5 .framer-yn0y9h { flex: none; height: 8px; left: 2px; position: absolute; top: 4px; width: 5px; }`,
        `.framer-Nbvj5 .framer-qagm7z { bottom: 93px; flex: none; left: 434px; position: absolute; right: 184px; top: 10px; }`,
        `.framer-Nbvj5 .framer-oxr4ro { flex: none; height: 31px; left: 154px; position: absolute; top: 152px; width: 52px; }`,
        `.framer-Nbvj5 .framer-r619zs { flex: none; height: 26px; left: 130px; position: absolute; top: 174px; width: 42px; }`,
        `.framer-Nbvj5 .framer-6yf1br { flex: none; height: 38px; left: 130px; overflow: visible; position: absolute; top: 161px; width: 41px; }`,
        `.framer-Nbvj5 .framer-7qsxh5 { flex: none; height: 26px; left: -1px; position: absolute; top: 12px; width: 42px; }`,
        `.framer-Nbvj5 .framer-1kubvxe { flex: none; height: 34px; left: 8px; position: absolute; top: -1px; width: 24px; }`,
        `.framer-Nbvj5 .framer-uaqvuw { flex: none; height: 30px; left: 137px; position: absolute; top: 101px; width: 42px; }`,
        `.framer-Nbvj5 .framer-rx3hx5 { flex: none; height: 39px; left: 92px; position: absolute; top: 120px; width: 12px; }`,
        `.framer-Nbvj5 .framer-1b58suk { flex: none; height: 40px; left: 577px; position: absolute; top: 215px; width: 13px; }`,
        `.framer-Nbvj5 .framer-11h64bg { flex: none; height: 26px; left: 65px; position: absolute; top: 214px; width: 42px; }`,
        `.framer-Nbvj5 .framer-1ggkdje { flex: none; height: 62px; left: 0px; position: absolute; top: 61px; width: 45px; }`,
        `.framer-Nbvj5 .framer-1n3n8lp { flex: none; height: 32px; left: 620px; position: absolute; top: 89px; width: 31px; }`,
        `.framer-Nbvj5 .framer-1jmz7ix { flex: none; height: 30px; left: 112px; position: absolute; top: 202px; width: 28px; }`,
        `.framer-Nbvj5 .framer-nsueta { flex: none; height: 40px; left: 384px; position: absolute; top: 125px; width: 12px; }`,
        `.framer-Nbvj5 .framer-10n6imn { flex: none; height: 42px; left: 304px; position: absolute; top: 161px; width: 47px; }`,
        `.framer-Nbvj5 .framer-1sarrrh { flex: none; height: 26px; left: 313px; position: absolute; top: 100px; width: 19px; }`,
        `.framer-Nbvj5 .framer-9s079b { align-content: center; align-items: center; background-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Nbvj5 .framer-1h1gr22-container { flex: none; height: 438px; position: relative; width: 1440px; }`,
        `.framer-Nbvj5 .framer-1ir08d6-container { flex: none; height: auto; position: relative; width: 810px; }`,
        `.framer-Nbvj5 .framer-ubs8g2 { flex: none; height: 282px; overflow: visible; position: relative; width: 659px; }`,
        `.framer-Nbvj5 .framer-1ffz9u9 { bottom: 16px; flex: none; left: 477px; position: absolute; right: 120px; top: 233px; }`,
        `.framer-Nbvj5 .framer-df8iqf { bottom: 95px; flex: none; left: 196px; position: absolute; right: 396px; top: 146px; }`,
        `.framer-Nbvj5 .framer-1o9s9on { flex: none; height: 42px; left: 276px; position: absolute; top: 155px; width: 134px; }`,
        `.framer-Nbvj5 .framer-1l2i6a1 { bottom: 157px; flex: none; left: 544px; position: absolute; right: 91px; top: 112px; }`,
        `.framer-Nbvj5 .framer-1jidcv5 { flex: none; height: 20px; left: 489px; position: absolute; top: 139px; width: 35px; }`,
        `.framer-Nbvj5 .framer-din9rj { flex: none; height: 20px; left: 225px; position: absolute; top: 196px; width: 35px; }`,
        `.framer-Nbvj5 .framer-15kvbpo { flex: none; height: 2px; left: 220px; position: absolute; top: 217px; width: 3px; }`,
        `.framer-Nbvj5 .framer-12ir8iw { flex: none; height: 224px; left: 157px; position: absolute; top: 59px; width: 246px; }`,
        `.framer-Nbvj5 .framer-1beo52p { bottom: 67px; flex: none; left: 514px; position: absolute; right: 143px; top: 214px; }`,
        `.framer-Nbvj5 .framer-6n8ryn { flex: none; height: 186px; left: 375px; position: absolute; top: 68px; width: 151px; }`,
        `.framer-Nbvj5 .framer-1lh8e08 { flex: none; height: 173px; left: 406px; position: absolute; top: 0px; width: 89px; }`,
        `.framer-Nbvj5 .framer-dcwh1 { flex: none; height: 153px; left: 396px; position: absolute; top: 49px; width: 111px; }`,
        `.framer-Nbvj5 .framer-1dwhmmw { flex: none; height: 25px; left: 336px; position: absolute; top: 59px; width: 40px; }`,
        `.framer-Nbvj5 .framer-actulb { flex: none; height: 19px; left: 258px; position: absolute; top: 106px; width: 30px; }`,
        `.framer-Nbvj5 .framer-bq66qy { flex: none; height: 23px; left: 250px; position: absolute; top: 177px; width: 38px; }`,
        `.framer-Nbvj5 .framer-2lsqcb { flex: none; height: 47px; left: 515px; position: absolute; top: 96px; width: 78px; }`,
        `.framer-Nbvj5 .framer-w9st7g { flex: none; height: 56px; left: 518px; position: absolute; top: 183px; width: 141px; }`,
        `.framer-Nbvj5 .framer-1glzx10 { flex: none; height: 31px; left: 352px; position: absolute; top: 230px; width: 54px; }`,
        `.framer-Nbvj5 .framer-lto4i2 { flex: none; height: 32px; left: 81px; position: absolute; top: 189px; width: 54px; }`,
        `.framer-Nbvj5 .framer-1pbjyu3 { flex: none; height: 31px; left: 524px; overflow: visible; position: absolute; top: 106px; width: 22px; }`,
        `.framer-Nbvj5 .framer-1sx74h { flex: none; height: 26px; left: 0px; overflow: visible; position: absolute; top: 6px; width: 22px; }`,
        `.framer-Nbvj5 .framer-1sfoqi0 { flex: none; height: 14px; left: 0px; position: absolute; top: 13px; width: 22px; }`,
        `.framer-Nbvj5 .framer-1chmmn9 { flex: none; height: 20px; left: 0px; position: absolute; top: 6px; width: 12px; }`,
        `.framer-Nbvj5 .framer-1px0e3i { flex: none; height: 15px; left: 1px; position: absolute; top: 8px; width: 9px; }`,
        `.framer-Nbvj5 .framer-18n6jg4 { flex: none; height: 20px; left: 11px; position: absolute; top: 6px; width: 11px; }`,
        `.framer-Nbvj5 .framer-4ztyp8 { flex: none; height: 14px; left: 0px; position: absolute; top: 0px; width: 22px; }`,
        `.framer-Nbvj5 .framer-umcggf { flex: none; height: 15px; left: 7px; overflow: visible; position: absolute; top: 0px; width: 8px; }`,
        `.framer-Nbvj5 .framer-k13ojq, .framer-Nbvj5 .framer-15sqbst { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-Nbvj5 .framer-ddnf3t { flex: none; height: 8px; left: 1px; position: absolute; top: 4px; width: 5px; }`,
        `.framer-Nbvj5 .framer-lspfbb, .framer-Nbvj5 .framer-rdhah8 { bottom: 13px; flex: none; left: 0px; position: absolute; right: 6px; top: 0px; }`,
        `.framer-Nbvj5 .framer-1g276ar { flex: none; height: 33px; left: 344px; overflow: visible; position: absolute; top: 44px; width: 23px; }`,
        `.framer-Nbvj5 .framer-1lzryic { bottom: 0px; flex: none; left: 0px; position: absolute; right: 12px; top: 13px; }`,
        `.framer-Nbvj5 .framer-1dh5h83 { bottom: 0px; flex: none; left: 11px; position: absolute; right: 0px; top: 13px; }`,
        `.framer-Nbvj5 .framer-o9rghe { flex: none; height: 15px; left: 8px; overflow: visible; position: absolute; top: 0px; width: 8px; }`,
        `.framer-Nbvj5 .framer-1g1dth7 { bottom: 89px; flex: none; left: 417px; position: absolute; right: 176px; top: 10px; }`,
        `.framer-Nbvj5 .framer-t6cfbs { flex: none; height: 29px; left: 148px; position: absolute; top: 146px; width: 49px; }`,
        `.framer-Nbvj5 .framer-lz35bl { flex: none; height: 25px; left: 125px; position: absolute; top: 167px; width: 40px; }`,
        `.framer-Nbvj5 .framer-1sdg5r6 { flex: none; height: 37px; left: 125px; overflow: visible; position: absolute; top: 155px; width: 39px; }`,
        `.framer-Nbvj5 .framer-iwm13a { flex: none; height: 25px; left: 0px; position: absolute; top: 12px; width: 40px; }`,
        `.framer-Nbvj5 .framer-5jilha { flex: none; height: 32px; left: 8px; position: absolute; top: 0px; width: 23px; }`,
        `.framer-Nbvj5 .framer-15tbmh3 { flex: none; height: 29px; left: 132px; position: absolute; top: 97px; width: 40px; }`,
        `.framer-Nbvj5 .framer-16zwv9w { flex: none; height: 37px; left: 89px; position: absolute; top: 115px; width: 11px; }`,
        `.framer-Nbvj5 .framer-1jmvcw4 { flex: none; height: 38px; left: 555px; position: absolute; top: 207px; width: 11px; }`,
        `.framer-Nbvj5 .framer-11vexyd { flex: none; height: 25px; left: 62px; position: absolute; top: 206px; width: 40px; }`,
        `.framer-Nbvj5 .framer-7jqq5k { flex: none; height: 59px; left: 0px; position: absolute; top: 59px; width: 43px; }`,
        ...F,
        ...M,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-Nbvj5.framer-kqm8v6 { width: 810px; } .framer-Nbvj5 .framer-1ufy1l2, .framer-Nbvj5 .framer-112kfae { width: 730px; } .framer-Nbvj5 .framer-cwm47z { left: 0px; right: 0px; width: unset; } .framer-Nbvj5 .framer-15njuom { left: -100px; width: 1440px; } .framer-Nbvj5 .framer-9s079b { flex-direction: row; }}`,
        `@media (max-width: 809.98px) { .framer-Nbvj5.framer-kqm8v6 { width: 390px; } .framer-Nbvj5 .framer-2awf57-container { order: 0; } .framer-Nbvj5 .framer-1ufy1l2 { height: 381px; order: 1; width: 310px; } .framer-Nbvj5 .framer-cwm47z { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: center; left: 0px; padding: 132px 0px 0px 0px; right: 0px; width: unset; } .framer-Nbvj5 .framer-p81o3g { bottom: unset; left: unset; order: 0; position: relative; right: unset; width: 100%; } .framer-Nbvj5 .framer-112kfae { height: 87px; width: 310px; } .framer-Nbvj5 .framer-1jngvtg { height: unset; left: calc(50.00000000000002% - 1fr / 2); right: unset; top: 436px; width: 1fr; } .framer-Nbvj5 .framer-9s079b { gap: 0px; order: 3; } .framer-Nbvj5 .framer-1h1gr22-container { height: auto; width: auto; } .framer-Nbvj5 .framer-ubs8g2 { order: 2; }}`,
      ]),
      ($ = _(me, he, `framer-Nbvj5`)),
      ($.displayName = `Cloud Trial / Success`),
      ($.defaultProps = { height: 1401, width: 1440 }),
      S(
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
          ...V,
          ...H,
          ...p(I),
          ...p(N),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = { load: (e, t) => C([() => m(A, {}, t), () => m(k, {}, t)], t) }),
      (ge = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerP_MLCUSc2`,
            slots: [],
            annotations: {
              framerColorSyntax: `true`,
              framerAutoSizeImages: `true`,
              framerResponsiveScreen: `true`,
              framerContractVersion: `1`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"vcDUhCzz9":{"layout":["fixed","auto"]},"NizB39PYO":{"layout":["fixed","auto"]}}}`,
              framerIntrinsicWidth: `1440`,
              framerDisplayContentsDiv: `false`,
              framerLayoutTemplateFlowEffect: `true`,
              framerImmutableVariables: `true`,
              framerComponentViewportWidth: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerScrollSections: `false`,
              framerIntrinsicHeight: `1401`,
            },
          },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
_e();
export { ge as __FramerMetadata__, $ as default, G as queryParamNames };
//# sourceMappingURL=011SSkP1PFYib2bDLhghwlt4xlXvlC9mekmnhUZpKjk.B383ocEN.mjs.map
