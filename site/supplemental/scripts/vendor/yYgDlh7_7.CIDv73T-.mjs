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
  G as _,
  I as v,
  It as y,
  K as b,
  M as x,
  Nt as S,
  O as C,
  P as w,
  Pt as T,
  Q as E,
  U as D,
  a as O,
  g as ee,
  gt as k,
  ht as te,
  j as A,
  k as j,
  lt as M,
  s as N,
  v as P,
  wt as F,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { i as ne, n as I, r as re, t as ie } from "./O8Bh5Q3QT.CjUYgado.mjs?v=20261116-migration-v2";
import { i as L, n as R, r as ae, t as oe } from "./UIw3tgmjU.BmIlBG2a.mjs?v=20261116-migration-v2";
import { i as se, n as ce, r as le, t as ue } from "./OBai9LAmP.D2dnTV-d.mjs?v=20261116-migration-v2";
import { i as de, n as fe, r as pe, t as me } from "./Y65iag5vt.B5ZMnZps.mjs?v=20261116-migration-v2";
import { a as z, o as he } from "./hvL3gbVCY.BxIa96IV.mjs?v=20261116-migration-v2";
import { i as ge, n as _e, r as ve, t as ye } from "./GMGpjhxIs.BratIYER.mjs?v=20261116-migration-v2";
import { i as be, n as xe, r as Se, t as Ce } from "./ub82bN_DX.Ciw76Bvz.mjs?v=20261116-migration-v2";
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
function Ee() {
  return (Ee = e(() => {
    (E(), (V = { AYmst8Nt3: new P(() => import("./brsoltcpj-0.C5EJetTV.mjs?v=20261116-migration-v2")) }));
  }))();
}
function H(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var De, Oe, ke, Ae, je, U, Me, Ne, Pe, Fe, Ie, Le, Re, W;
function ze() {
  return (ze = e(() => {
    (s(),
      E(),
      p(),
      r(),
      L(),
      de(),
      Ee(),
      he(),
      (De = D(z)),
      (Oe =
        /* @__PURE__ */ `ry3s572Yd.LzczUMaQn.rZbzcBEzF.hkgQY47Ef.lX5qFxs0u.f3XqqDzn2.UmHjLp5av.ZUW1AKPHI.KflfEnkIG.tLSLVSP_0.wnJROEut8.N__gaGT4d.OURi7lzSJ.uLwugpM8T.YKbGzH5B6.ultcMSnAu.bNfeNNVZ3.Yj7B7QuI7.FEcOcIs1O.OcorJFG6g.NeTGMSwMs.Kt8mgI6eC.wfoMpqkQ0.CNPkR3uUb.JXf8VPwBX.l31xdaWmv.sHMZ1gY9F.BD51hKaoX.DyaOSusCi.O9kOE75vC.Bx_ORUAdA.J68gW4lBF.ctFaOyhBS.EDOCrciLy.q2glW1kn5.CV0XCAi2E`.split(
          `.`
        )),
      (ke = `framer-QdHmF`),
      (Ae = {
        BD51hKaoX: `framer-v-3bp508`,
        bNfeNNVZ3: `framer-v-w8n73c`,
        Bx_ORUAdA: `framer-v-10vg4u4`,
        CNPkR3uUb: `framer-v-1m6z246`,
        ctFaOyhBS: `framer-v-1wxcpz`,
        CV0XCAi2E: `framer-v-1pwkflh`,
        DyaOSusCi: `framer-v-jhw2ok`,
        EDOCrciLy: `framer-v-4axeir`,
        f3XqqDzn2: `framer-v-18ms1sj`,
        FEcOcIs1O: `framer-v-xifqod`,
        hkgQY47Ef: `framer-v-g7m8lt`,
        J68gW4lBF: `framer-v-1n9rfvr`,
        JXf8VPwBX: `framer-v-y3lvuo`,
        KflfEnkIG: `framer-v-pl40lv`,
        Kt8mgI6eC: `framer-v-1k3v71o`,
        l31xdaWmv: `framer-v-it905l`,
        lX5qFxs0u: `framer-v-1h3sd5`,
        LzczUMaQn: `framer-v-701wd`,
        N__gaGT4d: `framer-v-15l23be`,
        NeTGMSwMs: `framer-v-1330ph`,
        O9kOE75vC: `framer-v-z4zdam`,
        OcorJFG6g: `framer-v-13agz9g`,
        OURi7lzSJ: `framer-v-1cuhao4`,
        q2glW1kn5: `framer-v-bezr87`,
        ry3s572Yd: `framer-v-zovbpb`,
        rZbzcBEzF: `framer-v-13emn9a`,
        sHMZ1gY9F: `framer-v-i564be`,
        tLSLVSP_0: `framer-v-fv4ces`,
        ultcMSnAu: `framer-v-3qb4og`,
        uLwugpM8T: `framer-v-1vosiud`,
        UmHjLp5av: `framer-v-u2m36x`,
        wfoMpqkQ0: `framer-v-1ufzkin`,
        wnJROEut8: `framer-v-1uhxmq9`,
        Yj7B7QuI7: `framer-v-13ztx00`,
        YKbGzH5B6: `framer-v-1hoz1w`,
        ZUW1AKPHI: `framer-v-17n5jon`,
      }),
      (je = { delay: 0.1, duration: 0.6, ease: [0.94, 0.01, 0.56, 1], type: `tween` }),
      (U = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Me = ({ value: e, children: t }) => {
        let r = i(d),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ l(d.Provider, { value: o, children: t });
      }),
      (Ne = {
        "Card 1 Mini": `LzczUMaQn`,
        "Card 1 Mobile": `rZbzcBEzF`,
        "Card 1": `ry3s572Yd`,
        "Card 2 Mini": `lX5qFxs0u`,
        "Card 2 Mobile": `f3XqqDzn2`,
        "Card 2": `hkgQY47Ef`,
        "Card 3 Mini": `ZUW1AKPHI`,
        "Card 3 Mobile": `KflfEnkIG`,
        "Card 3": `UmHjLp5av`,
        "Card 4 Mini": `wnJROEut8`,
        "Card 4 Mobile": `N__gaGT4d`,
        "Card 4": `tLSLVSP_0`,
        "IMI 1 mini": `uLwugpM8T`,
        "IMI 1 mobile": `YKbGzH5B6`,
        "IMI 1": `OURi7lzSJ`,
        "IMI 2 mini": `bNfeNNVZ3`,
        "IMI 2 mobile": `Yj7B7QuI7`,
        "IMI 2": `ultcMSnAu`,
        "IMI 3 mini": `OcorJFG6g`,
        "IMI 3 mobile": `NeTGMSwMs`,
        "IMI 3": `FEcOcIs1O`,
        "IMI 4 mini": `wfoMpqkQ0`,
        "IMI 4 mobile": `CNPkR3uUb`,
        "IMI 4": `Kt8mgI6eC`,
        "Indorama 1 mini": `l31xdaWmv`,
        "Indorama 1 mobile": `sHMZ1gY9F`,
        "Indorama 1": `JXf8VPwBX`,
        "Indorama 2 mini": `DyaOSusCi`,
        "Indorama 2 mobile": `O9kOE75vC`,
        "Indorama 2": `BD51hKaoX`,
        "Indorama 3 mini": `J68gW4lBF`,
        "Indorama 3 mobile": `ctFaOyhBS`,
        "Indorama 3": `Bx_ORUAdA`,
        "Indorama 4 mini": `q2glW1kn5`,
        "Indorama 4 mobile": `CV0XCAi2E`,
        "Indorama 4": `EDOCrciLy`,
      }),
      (Pe = f.create(a)),
      (Fe = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        p6WcpPP_7: e ?? i.p6WcpPP_7,
        variant: Ne[i.variant] ?? i.variant ?? `ry3s572Yd`,
      })),
      (Ie = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Le = /*#__PURE__*/ c(function (e, n) {
        let r = o(null),
          i = n ?? r,
          s = t(),
          { activeLocale: c, contentLocale: d, setLocale: p } = F(),
          g = k(),
          { style: _, className: v, layoutId: y, variant: x, p6WcpPP_7: T, ...E } = Fe(e),
          {
            baseVariant: D,
            classNames: A,
            clearLoadingGesture: M,
            gestureHandlers: N,
            gestureVariant: P,
            isLoading: ne,
            setGestureState: I,
            setVariant: re,
            variants: ie,
          } = S({
            cycleOrder: Oe,
            defaultVariant: `ry3s572Yd`,
            ref: i,
            variant: x,
            variantClassNames: Ae,
          }),
          L = Ie(e, ie),
          R = [oe, me],
          { activeVariantCallback: ae, delay: se } = te(D),
          ce = ae(async (...e) => {
            if ((I({ isPressed: !1 }), T && (await T(...e)) === !1)) return !1;
          }),
          le = w(ke, ...R),
          ue = () => D === `EDOCrciLy`,
          de = () => D === `OURi7lzSJ`,
          fe = () => D === `uLwugpM8T`,
          pe = () => D === `YKbGzH5B6`,
          he = () => D === `l31xdaWmv`,
          ge = () => D === `sHMZ1gY9F`,
          _e = () => D === `CV0XCAi2E`,
          ve = () =>
            ![
              `OURi7lzSJ`,
              `uLwugpM8T`,
              `YKbGzH5B6`,
              `JXf8VPwBX`,
              `l31xdaWmv`,
              `sHMZ1gY9F`,
              `BD51hKaoX`,
              `DyaOSusCi`,
              `O9kOE75vC`,
              `EDOCrciLy`,
              `q2glW1kn5`,
              `CV0XCAi2E`,
            ].includes(D);
        Te(c);
        let ye = () => D === `JXf8VPwBX`,
          be = () => D === `BD51hKaoX`,
          xe = () => D === `DyaOSusCi`,
          Se = () => D === `O9kOE75vC`,
          Ce = () => D === `q2glW1kn5`;
        return /*#__PURE__*/ l(m, {
          id: y ?? s,
          children: /*#__PURE__*/ l(Pe, {
            animate: ie,
            initial: !1,
            children: /*#__PURE__*/ l(Me, {
              value: je,
              children: /*#__PURE__*/ u(f.div, {
                ...E,
                ...N,
                className: w(le, `framer-zovbpb`, v, A),
                "data-border": !0,
                "data-framer-name": `Card 1`,
                "data-highlight": !0,
                layoutDependency: L,
                layoutId: `ry3s572Yd`,
                onTap: ce,
                ref: i,
                style: {
                  "--border-bottom-width": `2px`,
                  "--border-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                  "--border-left-width": `2px`,
                  "--border-right-width": `2px`,
                  "--border-style": `solid`,
                  "--border-top-width": `2px`,
                  backgroundColor: `rgb(255, 255, 255)`,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  ..._,
                },
                variants: {
                  BD51hKaoX: {
                    backgroundColor: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                  },
                  bNfeNNVZ3: {
                    backgroundColor: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                  },
                  DyaOSusCi: {
                    backgroundColor: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                  },
                  f3XqqDzn2: {
                    backgroundColor: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                  },
                  hkgQY47Ef: {
                    backgroundColor: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                  },
                  lX5qFxs0u: {
                    backgroundColor: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                  },
                  O9kOE75vC: {
                    backgroundColor: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                  },
                  ultcMSnAu: {
                    backgroundColor: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                  },
                  Yj7B7QuI7: {
                    backgroundColor: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                  },
                },
                ...H(
                  {
                    BD51hKaoX: { "data-framer-name": `Indorama 2` },
                    bNfeNNVZ3: { "data-framer-name": `IMI 2 mini` },
                    Bx_ORUAdA: { "data-framer-name": `Indorama 3` },
                    CNPkR3uUb: { "data-framer-name": `IMI 4 mobile` },
                    ctFaOyhBS: { "data-framer-name": `Indorama 3 mobile` },
                    CV0XCAi2E: { "data-framer-name": `Indorama 4 mobile` },
                    DyaOSusCi: { "data-framer-name": `Indorama 2 mini` },
                    EDOCrciLy: { "data-framer-name": `Indorama 4` },
                    f3XqqDzn2: { "data-framer-name": `Card 2 Mobile` },
                    FEcOcIs1O: { "data-framer-name": `IMI 3` },
                    hkgQY47Ef: { "data-framer-name": `Card 2` },
                    J68gW4lBF: { "data-framer-name": `Indorama 3 mini` },
                    JXf8VPwBX: { "data-framer-name": `Indorama 1` },
                    KflfEnkIG: { "data-framer-name": `Card 3 Mobile` },
                    Kt8mgI6eC: { "data-framer-name": `IMI 4` },
                    l31xdaWmv: { "data-framer-name": `Indorama 1 mini` },
                    lX5qFxs0u: { "data-framer-name": `Card 2 Mini` },
                    LzczUMaQn: { "data-framer-name": `Card 1 Mini` },
                    N__gaGT4d: { "data-framer-name": `Card 4 Mobile` },
                    NeTGMSwMs: { "data-framer-name": `IMI 3 mobile` },
                    O9kOE75vC: { "data-framer-name": `Indorama 2 mobile` },
                    OcorJFG6g: { "data-framer-name": `IMI 3 mini` },
                    OURi7lzSJ: { "data-framer-name": `IMI 1` },
                    q2glW1kn5: { "data-framer-name": `Indorama 4 mini` },
                    rZbzcBEzF: { "data-framer-name": `Card 1 Mobile` },
                    sHMZ1gY9F: { "data-framer-name": `Indorama 1 mobile` },
                    tLSLVSP_0: { "data-framer-name": `Card 4` },
                    ultcMSnAu: { "data-framer-name": `IMI 2` },
                    uLwugpM8T: { "data-framer-name": `IMI 1 mini` },
                    UmHjLp5av: { "data-framer-name": `Card 3` },
                    wfoMpqkQ0: { "data-framer-name": `IMI 4 mini` },
                    wnJROEut8: { "data-framer-name": `Card 4 Mini` },
                    Yj7B7QuI7: { "data-framer-name": `IMI 2 mobile` },
                    YKbGzH5B6: { "data-framer-name": `IMI 1 mobile` },
                    ZUW1AKPHI: { "data-framer-name": `Card 3 Mini` },
                  },
                  D,
                  P
                ),
                children: [
                  /*#__PURE__*/ u(f.div, {
                    className: `framer-23vmzu`,
                    "data-framer-name": `Top`,
                    layoutDependency: L,
                    layoutId: `bANfrgGEd`,
                    style: {
                      backgroundColor: `rgb(244, 244, 244)`,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    },
                    variants: {
                      BD51hKaoX: {
                        backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgba(178, 237, 30, 0.6))`,
                      },
                      bNfeNNVZ3: {
                        backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgba(178, 237, 30, 0.6))`,
                      },
                      CNPkR3uUb: {
                        backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgba(178, 237, 30, 0.6))`,
                      },
                      CV0XCAi2E: {
                        backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgba(178, 237, 30, 0.6))`,
                      },
                      DyaOSusCi: {
                        backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgba(178, 237, 30, 0.6))`,
                      },
                      EDOCrciLy: {
                        backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgba(178, 237, 30, 0.6))`,
                      },
                      f3XqqDzn2: {
                        backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgba(178, 237, 30, 0.6))`,
                      },
                      hkgQY47Ef: {
                        backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgba(178, 237, 30, 0.6))`,
                      },
                      Kt8mgI6eC: {
                        backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgba(178, 237, 30, 0.6))`,
                      },
                      lX5qFxs0u: {
                        backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgba(178, 237, 30, 0.6))`,
                      },
                      N__gaGT4d: {
                        backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgba(178, 237, 30, 0.6))`,
                      },
                      O9kOE75vC: {
                        backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgba(178, 237, 30, 0.6))`,
                      },
                      q2glW1kn5: {
                        backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgba(178, 237, 30, 0.6))`,
                      },
                      tLSLVSP_0: {
                        backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgba(178, 237, 30, 0.6))`,
                      },
                      ultcMSnAu: {
                        backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgba(178, 237, 30, 0.6))`,
                      },
                      wfoMpqkQ0: {
                        backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgba(178, 237, 30, 0.6))`,
                      },
                      wnJROEut8: {
                        backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgba(178, 237, 30, 0.6))`,
                      },
                      Yj7B7QuI7: {
                        backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgba(178, 237, 30, 0.6))`,
                      },
                    },
                    children: [
                      /*#__PURE__*/ u(f.div, {
                        className: `framer-10fgu6l`,
                        "data-border": !0,
                        "data-framer-name": `Top`,
                        layoutDependency: L,
                        layoutId: `IhOi61a_y`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `rgba(0, 0, 0, 0.2)`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `0px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                        children: [
                          /*#__PURE__*/ u(f.div, {
                            className: `framer-1frd0ud`,
                            "data-framer-name": `Image`,
                            layoutDependency: L,
                            layoutId: `op54H2qtE`,
                            style: {
                              backgroundColor: `var(--token-a06e00d5-6d89-4c1d-98b8-fbb391ce4ffa, rgb(255, 255, 255))`,
                              borderBottomLeftRadius: 10,
                              borderBottomRightRadius: 10,
                              borderTopLeftRadius: 10,
                              borderTopRightRadius: 10,
                            },
                            children: [
                              ue() &&
                                /*#__PURE__*/ l(f.div, {
                                  className: `framer-13fzhsr`,
                                  "data-framer-name": `Executable-program`,
                                  layoutDependency: L,
                                  layoutId: `j2SdzorfM`,
                                  style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                                  children: /*#__PURE__*/ l(C, {
                                    className: `framer-abpj95`,
                                    "data-framer-name": `Vector`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 14,
                                    intrinsicWidth: 15,
                                    layoutDependency: L,
                                    layoutId: `I2160:207;8482:375`,
                                    svg: `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 8.5L15 11L11.5 13.5V8.5Z" fill="#73B200"/>
<path d="M9.085 7.5L7.79 8.795L8.5 9.5L10.5 7.5L8.5 5.5L7.79 6.205L9.085 7.5Z" fill="#73B200"/>
<path d="M4.915 7.5L6.21 6.205L5.5 5.5L3.5 7.5L5.5 9.5L6.21 8.795L4.915 7.5Z" fill="#73B200"/>
<path d="M3.5 2.5C3.77614 2.5 4 2.27614 4 2C4 1.72386 3.77614 1.5 3.5 1.5C3.22386 1.5 3 1.72386 3 2C3 2.27614 3.22386 2.5 3.5 2.5Z" fill="#73B200"/>
<path d="M2 2.5C2.27614 2.5 2.5 2.27614 2.5 2C2.5 1.72386 2.27614 1.5 2 1.5C1.72386 1.5 1.5 1.72386 1.5 2C1.5 2.27614 1.72386 2.5 2 2.5Z" fill="#73B200"/>
<path d="M9.5 11H1V4H13V7.5H14V1C14 0.44875 13.5514 0 13 0H1C0.4486 0 0 0.44875 0 1V11C0 11.5512 0.4486 12 1 12H9.5V11ZM1 1H13V3H1V1Z" fill="#73B200"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              de() &&
                                /*#__PURE__*/ l(f.div, {
                                  className: `framer-1j6pyee`,
                                  "data-framer-name": `Tour`,
                                  layoutDependency: L,
                                  layoutId: `LOUTuY17P`,
                                  style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                                  children: /*#__PURE__*/ l(C, {
                                    className: `framer-xdyyt1`,
                                    "data-framer-name": `Vector`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 14,
                                    intrinsicWidth: 14,
                                    layoutDependency: L,
                                    layoutId: `I2160:203;19750:667`,
                                    svg: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 8L8.6106 4.79905C8.21165 4.27095 8 3.64805 8 3C8 1.34585 9.3457 0 11 0C12.6543 0 14 1.34585 14 3C14 3.64805 13.7884 4.271 13.3877 4.8014L11 8ZM11 1C9.8972 1 9 1.8972 9 3C9 3.42885 9.14185 3.84325 9.41015 4.1986L11 6.32835L12.5882 4.2009C12.8582 3.84325 13 3.4288 13 2.99995C13 1.89715 12.1028 1 11 1Z" fill="#73B200"/>
<path d="M11 4C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2C10.4477 2 10 2.44772 10 3C10 3.55228 10.4477 4 11 4Z" fill="#73B200"/>
<path d="M13 8V10H1V2H6V1H1C0.44775 1 0 1.44775 0 2V10C0 10.5523 0.44775 11 1 11H5V13H3V14H11V13H9V11H13C13.5523 11 14 10.5523 14 10V8H13ZM8 13H6V11H8V13Z" fill="#73B200"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              fe() &&
                                /*#__PURE__*/ l(f.div, {
                                  className: `framer-18hqzak`,
                                  "data-framer-name": `Tour`,
                                  layoutDependency: L,
                                  layoutId: `bUF_9Nuap`,
                                  style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                                  children: /*#__PURE__*/ l(C, {
                                    className: `framer-1571v9q`,
                                    "data-framer-name": `Vector`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 14,
                                    intrinsicWidth: 14,
                                    layoutDependency: L,
                                    layoutId: `D5ulkwVt9`,
                                    svg: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 8L8.6106 4.79905C8.21165 4.27095 8 3.64805 8 3C8 1.34585 9.3457 0 11 0C12.6543 0 14 1.34585 14 3C14 3.64805 13.7884 4.271 13.3877 4.8014L11 8ZM11 1C9.8972 1 9 1.8972 9 3C9 3.42885 9.14185 3.84325 9.41015 4.1986L11 6.32835L12.5882 4.2009C12.8582 3.84325 13 3.4288 13 2.99995C13 1.89715 12.1028 1 11 1Z" fill="#73B200"/>
<path d="M11 4C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2C10.4477 2 10 2.44772 10 3C10 3.55228 10.4477 4 11 4Z" fill="#73B200"/>
<path d="M13 8V10H1V2H6V1H1C0.44775 1 0 1.44775 0 2V10C0 10.5523 0.44775 11 1 11H5V13H3V14H11V13H9V11H13C13.5523 11 14 10.5523 14 10V8H13ZM8 13H6V11H8V13Z" fill="#73B200"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              pe() &&
                                /*#__PURE__*/ l(f.div, {
                                  className: `framer-1ej8saz`,
                                  "data-framer-name": `Tour`,
                                  layoutDependency: L,
                                  layoutId: `Uf4w0iruq`,
                                  style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                                  children: /*#__PURE__*/ l(C, {
                                    className: `framer-1p9cl3x`,
                                    "data-framer-name": `Vector`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 14,
                                    intrinsicWidth: 14,
                                    layoutDependency: L,
                                    layoutId: `JjvhSdtOM`,
                                    svg: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 8L8.6106 4.79905C8.21165 4.27095 8 3.64805 8 3C8 1.34585 9.3457 0 11 0C12.6543 0 14 1.34585 14 3C14 3.64805 13.7884 4.271 13.3877 4.8014L11 8ZM11 1C9.8972 1 9 1.8972 9 3C9 3.42885 9.14185 3.84325 9.41015 4.1986L11 6.32835L12.5882 4.2009C12.8582 3.84325 13 3.4288 13 2.99995C13 1.89715 12.1028 1 11 1Z" fill="#73B200"/>
<path d="M11 4C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2C10.4477 2 10 2.44772 10 3C10 3.55228 10.4477 4 11 4Z" fill="#73B200"/>
<path d="M13 8V10H1V2H6V1H1C0.44775 1 0 1.44775 0 2V10C0 10.5523 0.44775 11 1 11H5V13H3V14H11V13H9V11H13C13.5523 11 14 10.5523 14 10V8H13ZM8 13H6V11H8V13Z" fill="#73B200"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              he() &&
                                /*#__PURE__*/ l(f.div, {
                                  className: `framer-lrfh95`,
                                  "data-framer-name": `Image-service`,
                                  layoutDependency: L,
                                  layoutId: `IrQuVFHU0`,
                                  style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                                  children: /*#__PURE__*/ l(C, {
                                    className: `framer-1dw21f9`,
                                    "data-framer-name": `Vector`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 13,
                                    intrinsicWidth: 14,
                                    layoutDependency: L,
                                    layoutId: `EKbmsXXbC`,
                                    svg: `<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 8H12V9H13V12H1V9H2V8H1C0.734881 8.00032 0.480712 8.10578 0.293244 8.29324C0.105776 8.48071 0.000317572 8.73488 0 9V12C0.000317572 12.2651 0.105776 12.5193 0.293244 12.7068C0.480712 12.8942 0.734881 12.9997 1 13H13C13.2651 12.9997 13.5193 12.8942 13.7068 12.7068C13.8942 12.5193 13.9997 12.2651 14 12V9C13.9997 8.73488 13.8942 8.48071 13.7068 8.29324C13.5193 8.10578 13.2651 8.00032 13 8Z" fill="#73B200"/>
<path d="M2.5 11C2.77614 11 3 10.7761 3 10.5C3 10.2239 2.77614 10 2.5 10C2.22386 10 2 10.2239 2 10.5C2 10.7761 2.22386 11 2.5 11Z" fill="#73B200"/>
<path d="M6.5 0H5.5V4H6.5V0Z" fill="#73B200"/>
<path d="M4.5 0H3.5V4H4.5V0Z" fill="#73B200"/>
<path d="M9.5 4H8.5C8.23487 3.99972 7.98068 3.89428 7.7932 3.7068C7.60572 3.51932 7.50028 3.26513 7.5 3V1C7.50028 0.734869 7.60572 0.480676 7.7932 0.2932C7.98068 0.105724 8.23487 0.00027795 8.5 0H9.5C9.76513 0.00027795 10.0193 0.105724 10.2068 0.2932C10.3943 0.480676 10.4997 0.734869 10.5 1V3C10.4997 3.26513 10.3943 3.51932 10.2068 3.7068C10.0193 3.89428 9.76513 3.99972 9.5 4ZM8.5 1V3H9.5V1H8.5Z" fill="#73B200"/>
<path d="M10.5 5H9.5V9H10.5V5Z" fill="#73B200"/>
<path d="M4.5 5H3.5V9H4.5V5Z" fill="#73B200"/>
<path d="M7.5 9H6.5C6.23487 8.99972 5.98068 8.89428 5.7932 8.7068C5.60572 8.51932 5.50028 8.26513 5.5 8V6C5.50028 5.73487 5.60572 5.48068 5.7932 5.2932C5.98068 5.10572 6.23487 5.00028 6.5 5H7.5C7.76513 5.00028 8.01932 5.10572 8.2068 5.2932C8.39428 5.48068 8.49972 5.73487 8.5 6V8C8.49972 8.26513 8.39428 8.51932 8.2068 8.7068C8.01932 8.89428 7.76513 8.99972 7.5 9ZM6.5 6V8H7.5V6H6.5Z" fill="#73B200"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ge() &&
                                /*#__PURE__*/ l(f.div, {
                                  className: `framer-f5jzs0`,
                                  "data-framer-name": `Image-service`,
                                  layoutDependency: L,
                                  layoutId: `ZMeTAb2TG`,
                                  style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                                  children: /*#__PURE__*/ l(C, {
                                    className: `framer-1eenf5f`,
                                    "data-framer-name": `Vector`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 13,
                                    intrinsicWidth: 14,
                                    layoutDependency: L,
                                    layoutId: `BeZWVk_OE`,
                                    svg: `<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 8H12V9H13V12H1V9H2V8H1C0.734881 8.00032 0.480712 8.10578 0.293244 8.29324C0.105776 8.48071 0.000317572 8.73488 0 9V12C0.000317572 12.2651 0.105776 12.5193 0.293244 12.7068C0.480712 12.8942 0.734881 12.9997 1 13H13C13.2651 12.9997 13.5193 12.8942 13.7068 12.7068C13.8942 12.5193 13.9997 12.2651 14 12V9C13.9997 8.73488 13.8942 8.48071 13.7068 8.29324C13.5193 8.10578 13.2651 8.00032 13 8Z" fill="#73B200"/>
<path d="M2.5 11C2.77614 11 3 10.7761 3 10.5C3 10.2239 2.77614 10 2.5 10C2.22386 10 2 10.2239 2 10.5C2 10.7761 2.22386 11 2.5 11Z" fill="#73B200"/>
<path d="M6.5 0H5.5V4H6.5V0Z" fill="#73B200"/>
<path d="M4.5 0H3.5V4H4.5V0Z" fill="#73B200"/>
<path d="M9.5 4H8.5C8.23487 3.99972 7.98068 3.89428 7.7932 3.7068C7.60572 3.51932 7.50028 3.26513 7.5 3V1C7.50028 0.734869 7.60572 0.480676 7.7932 0.2932C7.98068 0.105724 8.23487 0.00027795 8.5 0H9.5C9.76513 0.00027795 10.0193 0.105724 10.2068 0.2932C10.3943 0.480676 10.4997 0.734869 10.5 1V3C10.4997 3.26513 10.3943 3.51932 10.2068 3.7068C10.0193 3.89428 9.76513 3.99972 9.5 4ZM8.5 1V3H9.5V1H8.5Z" fill="#73B200"/>
<path d="M10.5 5H9.5V9H10.5V5Z" fill="#73B200"/>
<path d="M4.5 5H3.5V9H4.5V5Z" fill="#73B200"/>
<path d="M7.5 9H6.5C6.23487 8.99972 5.98068 8.89428 5.7932 8.7068C5.60572 8.51932 5.50028 8.26513 5.5 8V6C5.50028 5.73487 5.60572 5.48068 5.7932 5.2932C5.98068 5.10572 6.23487 5.00028 6.5 5H7.5C7.76513 5.00028 8.01932 5.10572 8.2068 5.2932C8.39428 5.48068 8.49972 5.73487 8.5 6V8C8.49972 8.26513 8.39428 8.51932 8.2068 8.7068C8.01932 8.89428 7.76513 8.99972 7.5 9ZM6.5 6V8H7.5V6H6.5Z" fill="#73B200"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              _e() &&
                                /*#__PURE__*/ l(f.div, {
                                  className: `framer-8s2omk`,
                                  "data-framer-name": `Executable-program`,
                                  layoutDependency: L,
                                  layoutId: `nF_N9e_ZU`,
                                  style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                                  children: /*#__PURE__*/ l(C, {
                                    className: `framer-uw74ch`,
                                    "data-framer-name": `Vector`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 14,
                                    intrinsicWidth: 15,
                                    layoutDependency: L,
                                    layoutId: `usK6OwDRf`,
                                    svg: `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 8.5L15 11L11.5 13.5V8.5Z" fill="#73B200"/>
<path d="M9.085 7.5L7.79 8.795L8.5 9.5L10.5 7.5L8.5 5.5L7.79 6.205L9.085 7.5Z" fill="#73B200"/>
<path d="M4.915 7.5L6.21 6.205L5.5 5.5L3.5 7.5L5.5 9.5L6.21 8.795L4.915 7.5Z" fill="#73B200"/>
<path d="M3.5 2.5C3.77614 2.5 4 2.27614 4 2C4 1.72386 3.77614 1.5 3.5 1.5C3.22386 1.5 3 1.72386 3 2C3 2.27614 3.22386 2.5 3.5 2.5Z" fill="#73B200"/>
<path d="M2 2.5C2.27614 2.5 2.5 2.27614 2.5 2C2.5 1.72386 2.27614 1.5 2 1.5C1.72386 1.5 1.5 1.72386 1.5 2C1.5 2.27614 1.72386 2.5 2 2.5Z" fill="#73B200"/>
<path d="M9.5 11H1V4H13V7.5H14V1C14 0.44875 13.5514 0 13 0H1C0.4486 0 0 0.44875 0 1V11C0 11.5512 0.4486 12 1 12H9.5V11ZM1 1H13V3H1V1Z" fill="#73B200"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ve() &&
                                /*#__PURE__*/ l(ee, {
                                  background: {
                                    alt: B(`v0`, d) ?? `Memoji`,
                                    fit: `fill`,
                                    loading: b((g?.y || 0) + 30 + ((g?.height || 200) - 470) / 2),
                                    pixelHeight: 16,
                                    pixelWidth: 16,
                                    sizes: `51px`,
                                    src: `https://framerusercontent.com/images/FdYyzwKLWZHp5qRlt4HKD3rA.svg?width=16&height=16`,
                                  },
                                  className: `framer-1fl4tur`,
                                  "data-framer-name": `Fill Your Image Here`,
                                  layoutDependency: L,
                                  layoutId: `oGR3K0lg5`,
                                  ...H(
                                    {
                                      bNfeNNVZ3: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 470) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `39px`,
                                          src: `https://framerusercontent.com/images/vvZkpInOCdaHqRAu8UhUnSzfs.svg?width=16&height=16`,
                                        },
                                      },
                                      Bx_ORUAdA: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 470) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `39px`,
                                          src: `https://framerusercontent.com/images/dMjxpZITFQd2wJFVpP23bNz30Ts.svg?width=16&height=16`,
                                        },
                                      },
                                      CNPkR3uUb: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 601) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `38px`,
                                          src: `https://framerusercontent.com/images/dUrpKRI1jrBxQ86cWpnbZwek9jk.svg?width=16&height=16`,
                                        },
                                      },
                                      ctFaOyhBS: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 469) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `38px`,
                                          src: `https://framerusercontent.com/images/dMjxpZITFQd2wJFVpP23bNz30Ts.svg?width=16&height=16`,
                                        },
                                      },
                                      f3XqqDzn2: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 469) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `38px`,
                                          src: `https://framerusercontent.com/images/vvZkpInOCdaHqRAu8UhUnSzfs.svg?width=16&height=16`,
                                        },
                                      },
                                      FEcOcIs1O: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 470) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `39px`,
                                          src: `https://framerusercontent.com/images/dMjxpZITFQd2wJFVpP23bNz30Ts.svg?width=16&height=16`,
                                        },
                                      },
                                      hkgQY47Ef: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 470) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `39px`,
                                          src: `https://framerusercontent.com/images/vvZkpInOCdaHqRAu8UhUnSzfs.svg?width=16&height=16`,
                                        },
                                      },
                                      J68gW4lBF: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 470) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `39px`,
                                          src: `https://framerusercontent.com/images/dMjxpZITFQd2wJFVpP23bNz30Ts.svg?width=16&height=16`,
                                        },
                                      },
                                      KflfEnkIG: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 469) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `38px`,
                                          src: `https://framerusercontent.com/images/dMjxpZITFQd2wJFVpP23bNz30Ts.svg?width=16&height=16`,
                                        },
                                      },
                                      Kt8mgI6eC: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 602) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `39px`,
                                          src: `https://framerusercontent.com/images/dUrpKRI1jrBxQ86cWpnbZwek9jk.svg?width=16&height=16`,
                                        },
                                      },
                                      lX5qFxs0u: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 470) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `39px`,
                                          src: `https://framerusercontent.com/images/vvZkpInOCdaHqRAu8UhUnSzfs.svg?width=16&height=16`,
                                        },
                                      },
                                      N__gaGT4d: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 469) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `38px`,
                                          src: `https://framerusercontent.com/images/dUrpKRI1jrBxQ86cWpnbZwek9jk.svg?width=16&height=16`,
                                        },
                                      },
                                      NeTGMSwMs: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 469) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `38px`,
                                          src: `https://framerusercontent.com/images/dMjxpZITFQd2wJFVpP23bNz30Ts.svg?width=16&height=16`,
                                        },
                                      },
                                      OcorJFG6g: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 470) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `39px`,
                                          src: `https://framerusercontent.com/images/dMjxpZITFQd2wJFVpP23bNz30Ts.svg?width=16&height=16`,
                                        },
                                      },
                                      rZbzcBEzF: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 30 + ((g?.height || 200) - 469) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `50px`,
                                          src: `https://framerusercontent.com/images/FdYyzwKLWZHp5qRlt4HKD3rA.svg?width=16&height=16`,
                                        },
                                      },
                                      tLSLVSP_0: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 470) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `39px`,
                                          src: `https://framerusercontent.com/images/dUrpKRI1jrBxQ86cWpnbZwek9jk.svg?width=16&height=16`,
                                        },
                                      },
                                      ultcMSnAu: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 470) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `39px`,
                                          src: `https://framerusercontent.com/images/vvZkpInOCdaHqRAu8UhUnSzfs.svg?width=16&height=16`,
                                        },
                                      },
                                      UmHjLp5av: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 470) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `39px`,
                                          src: `https://framerusercontent.com/images/dMjxpZITFQd2wJFVpP23bNz30Ts.svg?width=16&height=16`,
                                        },
                                      },
                                      wfoMpqkQ0: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 602) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `39px`,
                                          src: `https://framerusercontent.com/images/dUrpKRI1jrBxQ86cWpnbZwek9jk.svg?width=16&height=16`,
                                        },
                                      },
                                      wnJROEut8: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 470) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `39px`,
                                          src: `https://framerusercontent.com/images/dUrpKRI1jrBxQ86cWpnbZwek9jk.svg?width=16&height=16`,
                                        },
                                      },
                                      Yj7B7QuI7: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 469) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `38px`,
                                          src: `https://framerusercontent.com/images/vvZkpInOCdaHqRAu8UhUnSzfs.svg?width=16&height=16`,
                                        },
                                      },
                                      ZUW1AKPHI: {
                                        background: {
                                          alt: B(`v0`, d) ?? `Memoji`,
                                          fit: `fill`,
                                          loading: b(
                                            (g?.y || 0) + 36 + ((g?.height || 200) - 470) / 2
                                          ),
                                          pixelHeight: 16,
                                          pixelWidth: 16,
                                          sizes: `39px`,
                                          src: `https://framerusercontent.com/images/dMjxpZITFQd2wJFVpP23bNz30Ts.svg?width=16&height=16`,
                                        },
                                      },
                                    },
                                    D,
                                    P
                                  ),
                                }),
                              ye() &&
                                /*#__PURE__*/ l(f.div, {
                                  className: `framer-rzx7vb`,
                                  "data-framer-name": `Image-service`,
                                  layoutDependency: L,
                                  layoutId: `KsnPjoVBy`,
                                  style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                                  children: /*#__PURE__*/ l(C, {
                                    className: `framer-14718yi`,
                                    "data-framer-name": `Vector`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 13,
                                    intrinsicWidth: 14,
                                    layoutDependency: L,
                                    layoutId: `I2160:205;1582:71`,
                                    svg: `<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 8H12V9H13V12H1V9H2V8H1C0.734881 8.00032 0.480712 8.10578 0.293244 8.29324C0.105776 8.48071 0.000317572 8.73488 0 9V12C0.000317572 12.2651 0.105776 12.5193 0.293244 12.7068C0.480712 12.8942 0.734881 12.9997 1 13H13C13.2651 12.9997 13.5193 12.8942 13.7068 12.7068C13.8942 12.5193 13.9997 12.2651 14 12V9C13.9997 8.73488 13.8942 8.48071 13.7068 8.29324C13.5193 8.10578 13.2651 8.00032 13 8Z" fill="#73B200"/>
<path d="M2.5 11C2.77614 11 3 10.7761 3 10.5C3 10.2239 2.77614 10 2.5 10C2.22386 10 2 10.2239 2 10.5C2 10.7761 2.22386 11 2.5 11Z" fill="#73B200"/>
<path d="M6.5 0H5.5V4H6.5V0Z" fill="#73B200"/>
<path d="M4.5 0H3.5V4H4.5V0Z" fill="#73B200"/>
<path d="M9.5 4H8.5C8.23487 3.99972 7.98068 3.89428 7.7932 3.7068C7.60572 3.51932 7.50028 3.26513 7.5 3V1C7.50028 0.734869 7.60572 0.480676 7.7932 0.2932C7.98068 0.105724 8.23487 0.00027795 8.5 0H9.5C9.76513 0.00027795 10.0193 0.105724 10.2068 0.2932C10.3943 0.480676 10.4997 0.734869 10.5 1V3C10.4997 3.26513 10.3943 3.51932 10.2068 3.7068C10.0193 3.89428 9.76513 3.99972 9.5 4ZM8.5 1V3H9.5V1H8.5Z" fill="#73B200"/>
<path d="M10.5 5H9.5V9H10.5V5Z" fill="#73B200"/>
<path d="M4.5 5H3.5V9H4.5V5Z" fill="#73B200"/>
<path d="M7.5 9H6.5C6.23487 8.99972 5.98068 8.89428 5.7932 8.7068C5.60572 8.51932 5.50028 8.26513 5.5 8V6C5.50028 5.73487 5.60572 5.48068 5.7932 5.2932C5.98068 5.10572 6.23487 5.00028 6.5 5H7.5C7.76513 5.00028 8.01932 5.10572 8.2068 5.2932C8.39428 5.48068 8.49972 5.73487 8.5 6V8C8.49972 8.26513 8.39428 8.51932 8.2068 8.7068C8.01932 8.89428 7.76513 8.99972 7.5 9ZM6.5 6V8H7.5V6H6.5Z" fill="#73B200"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              be() &&
                                /*#__PURE__*/ l(f.div, {
                                  className: `framer-3n9qjb`,
                                  "data-framer-name": `Load-balancer--pool`,
                                  layoutDependency: L,
                                  layoutId: `co55ayYcO`,
                                  style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                                  children: /*#__PURE__*/ l(C, {
                                    className: `framer-1r3b2jo`,
                                    "data-framer-name": `Vector`,
                                    layout: `position`,
                                    layoutDependency: L,
                                    layoutId: `fvv9iW2Jn`,
                                    opacity: 1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35 38"><path d="M 25 17.765 L 10 17.765 L 10 20.298 L 25 20.298 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path><path d="M 8.375 6.726 C 8.619 6.219 8.747 5.662 8.75 5.098 C 8.75 4.346 8.53 3.612 8.118 2.987 C 7.706 2.362 7.12 1.875 6.435 1.587 C 5.75 1.3 4.996 1.224 4.268 1.371 C 3.541 1.518 2.873 1.88 2.348 2.411 C 1.824 2.942 1.467 3.62 1.322 4.357 C 1.177 5.094 1.252 5.858 1.535 6.552 C 1.819 7.247 2.3 7.84 2.917 8.258 C 3.533 8.675 4.258 8.898 5 8.898 C 5.557 8.895 6.106 8.765 6.606 8.517 L 10 11.956 L 10 15.231 L 12.5 15.231 L 12.5 10.907 Z M 5 6.365 C 4.753 6.365 4.511 6.29 4.306 6.151 C 4.1 6.012 3.94 5.814 3.845 5.583 C 3.751 5.351 3.726 5.097 3.774 4.851 C 3.822 4.605 3.941 4.379 4.116 4.202 C 4.291 4.025 4.514 3.905 4.756 3.856 C 4.999 3.807 5.25 3.832 5.478 3.928 C 5.707 4.024 5.902 4.186 6.039 4.394 C 6.177 4.603 6.25 4.847 6.25 5.098 C 6.25 5.434 6.118 5.756 5.884 5.993 C 5.649 6.231 5.331 6.364 5 6.365 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path><path d="M 21.25 5.098 C 21.253 4.401 21.067 3.716 20.711 3.119 C 20.356 2.522 19.845 2.035 19.235 1.713 C 18.625 1.39 17.939 1.244 17.252 1.29 C 16.565 1.336 15.904 1.573 15.342 1.974 C 14.779 2.375 14.336 2.926 14.061 3.565 C 13.787 4.205 13.691 4.909 13.785 5.599 C 13.879 6.29 14.158 6.942 14.593 7.482 C 15.028 8.023 15.601 8.432 16.25 8.664 L 16.25 15.231 L 18.75 15.231 L 18.75 8.665 C 19.479 8.404 20.111 7.922 20.558 7.283 C 21.006 6.645 21.248 5.881 21.25 5.098 Z M 17.5 6.365 C 17.253 6.365 17.011 6.29 16.806 6.151 C 16.6 6.012 16.44 5.814 16.345 5.583 C 16.251 5.351 16.226 5.097 16.274 4.851 C 16.322 4.605 16.441 4.379 16.616 4.202 C 16.791 4.025 17.014 3.905 17.256 3.856 C 17.499 3.807 17.75 3.832 17.978 3.928 C 18.207 4.024 18.402 4.186 18.539 4.394 C 18.677 4.603 18.75 4.847 18.75 5.098 C 18.75 5.434 18.618 5.756 18.384 5.993 C 18.149 6.231 17.831 6.364 17.5 6.365 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path><path d="M 30 1.298 C 29.006 1.299 28.053 1.7 27.35 2.412 C 26.647 3.125 26.251 4.091 26.25 5.098 C 26.253 5.662 26.381 6.219 26.625 6.726 L 22.5 10.907 L 22.5 15.231 L 25 15.231 L 25 11.956 L 28.394 8.517 C 28.894 8.765 29.443 8.895 30 8.898 C 30.995 8.898 31.949 8.498 32.652 7.785 C 33.355 7.072 33.75 6.106 33.75 5.098 C 33.75 4.09 33.355 3.124 32.652 2.411 C 31.949 1.698 30.995 1.298 30 1.298 Z M 30 6.365 C 29.753 6.365 29.511 6.29 29.306 6.151 C 29.1 6.012 28.94 5.814 28.845 5.583 C 28.751 5.351 28.726 5.097 28.774 4.851 C 28.822 4.605 28.941 4.379 29.116 4.202 C 29.291 4.025 29.514 3.905 29.756 3.856 C 29.999 3.807 30.25 3.832 30.478 3.928 C 30.707 4.024 30.902 4.186 31.039 4.394 C 31.177 4.603 31.25 4.847 31.25 5.098 C 31.25 5.434 31.118 5.756 30.884 5.993 C 30.649 6.231 30.332 6.364 30 6.365 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path><path d="M 12.5 22.831 L 10 22.831 L 10 26.107 L 6.607 29.546 C 6.106 29.298 5.557 29.168 5 29.165 C 4.258 29.165 3.533 29.387 2.917 29.805 C 2.3 30.223 1.819 30.816 1.535 31.51 C 1.252 32.205 1.177 32.969 1.322 33.706 C 1.467 34.443 1.824 35.12 2.348 35.652 C 2.873 36.183 3.541 36.545 4.268 36.692 C 4.996 36.838 5.75 36.763 6.435 36.475 C 7.12 36.188 7.706 35.701 8.118 35.076 C 8.53 34.451 8.75 33.716 8.75 32.965 C 8.747 32.4 8.619 31.844 8.375 31.337 L 12.5 27.156 Z M 5 34.231 C 4.753 34.231 4.511 34.157 4.306 34.018 C 4.1 33.879 3.94 33.681 3.845 33.449 C 3.751 33.218 3.726 32.963 3.774 32.717 C 3.822 32.472 3.941 32.246 4.116 32.069 C 4.291 31.892 4.514 31.771 4.756 31.722 C 4.999 31.674 5.25 31.699 5.478 31.794 C 5.707 31.89 5.902 32.053 6.039 32.261 C 6.177 32.469 6.25 32.714 6.25 32.965 C 6.25 33.3 6.118 33.622 5.884 33.86 C 5.649 34.097 5.331 34.231 5 34.231 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path><path d="M 18.75 29.398 L 18.75 22.831 L 16.25 22.831 L 16.25 29.398 C 15.416 29.697 14.713 30.285 14.265 31.058 C 13.818 31.831 13.654 32.74 13.804 33.623 C 13.954 34.507 14.407 35.308 15.083 35.886 C 15.759 36.464 16.615 36.78 17.5 36.78 C 18.385 36.78 19.241 36.464 19.917 35.886 C 20.593 35.308 21.046 34.507 21.196 33.623 C 21.346 32.74 21.182 31.831 20.735 31.058 C 20.287 30.285 19.584 29.697 18.75 29.398 Z M 17.5 34.231 C 17.253 34.231 17.011 34.157 16.806 34.018 C 16.6 33.879 16.44 33.681 16.345 33.449 C 16.251 33.218 16.226 32.963 16.274 32.717 C 16.322 32.472 16.441 32.246 16.616 32.069 C 16.791 31.892 17.014 31.771 17.256 31.722 C 17.499 31.674 17.75 31.699 17.978 31.794 C 18.207 31.89 18.402 32.053 18.539 32.261 C 18.677 32.469 18.75 32.714 18.75 32.965 C 18.75 33.3 18.618 33.622 18.384 33.86 C 18.149 34.097 17.831 34.231 17.5 34.231 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path><path d="M 30 29.165 C 29.443 29.168 28.894 29.298 28.393 29.546 L 25 26.107 L 25 22.831 L 22.5 22.831 L 22.5 27.156 L 26.625 31.337 C 26.381 31.844 26.253 32.4 26.25 32.965 C 26.25 33.716 26.47 34.451 26.882 35.076 C 27.294 35.701 27.88 36.188 28.565 36.475 C 29.25 36.763 30.004 36.838 30.732 36.692 C 31.459 36.545 32.127 36.183 32.652 35.652 C 33.176 35.12 33.533 34.443 33.678 33.706 C 33.823 32.969 33.749 32.205 33.465 31.51 C 33.181 30.816 32.7 30.223 32.084 29.805 C 31.467 29.387 30.742 29.165 30 29.165 Z M 30 34.231 C 29.753 34.231 29.511 34.157 29.306 34.018 C 29.1 33.879 28.94 33.681 28.845 33.449 C 28.751 33.218 28.726 32.963 28.774 32.717 C 28.822 32.472 28.941 32.246 29.116 32.069 C 29.291 31.892 29.514 31.771 29.756 31.722 C 29.999 31.674 30.25 31.699 30.478 31.794 C 30.707 31.89 30.902 32.053 31.039 32.261 C 31.177 32.469 31.25 32.714 31.25 32.965 C 31.25 33.3 31.118 33.622 30.884 33.86 C 30.649 34.097 30.332 34.231 30 34.231 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path></svg>`,
                                    svgContentId: 10970998178,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              xe() &&
                                /*#__PURE__*/ l(f.div, {
                                  className: `framer-2e3344`,
                                  "data-framer-name": `Load-balancer--pool`,
                                  layoutDependency: L,
                                  layoutId: `AjXUfWN9N`,
                                  style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                                  children: /*#__PURE__*/ l(C, {
                                    className: `framer-1y2pfgy`,
                                    "data-framer-name": `Vector`,
                                    layout: `position`,
                                    layoutDependency: L,
                                    layoutId: `fWGmYtUjh`,
                                    opacity: 1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35 38"><path d="M 25 17.765 L 10 17.765 L 10 20.298 L 25 20.298 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path><path d="M 8.375 6.726 C 8.619 6.219 8.747 5.662 8.75 5.098 C 8.75 4.346 8.53 3.612 8.118 2.987 C 7.706 2.362 7.12 1.875 6.435 1.587 C 5.75 1.3 4.996 1.224 4.268 1.371 C 3.541 1.518 2.873 1.88 2.348 2.411 C 1.824 2.942 1.467 3.62 1.322 4.357 C 1.177 5.094 1.252 5.858 1.535 6.552 C 1.819 7.247 2.3 7.84 2.917 8.258 C 3.533 8.675 4.258 8.898 5 8.898 C 5.557 8.895 6.106 8.765 6.606 8.517 L 10 11.956 L 10 15.231 L 12.5 15.231 L 12.5 10.907 Z M 5 6.365 C 4.753 6.365 4.511 6.29 4.306 6.151 C 4.1 6.012 3.94 5.814 3.845 5.583 C 3.751 5.351 3.726 5.097 3.774 4.851 C 3.822 4.605 3.941 4.379 4.116 4.202 C 4.291 4.025 4.514 3.905 4.756 3.856 C 4.999 3.807 5.25 3.832 5.478 3.928 C 5.707 4.024 5.902 4.186 6.039 4.394 C 6.177 4.603 6.25 4.847 6.25 5.098 C 6.25 5.434 6.118 5.756 5.884 5.993 C 5.649 6.231 5.331 6.364 5 6.365 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path><path d="M 21.25 5.098 C 21.253 4.401 21.067 3.716 20.711 3.119 C 20.356 2.522 19.845 2.035 19.235 1.713 C 18.625 1.39 17.939 1.244 17.252 1.29 C 16.565 1.336 15.904 1.573 15.342 1.974 C 14.779 2.375 14.336 2.926 14.061 3.565 C 13.787 4.205 13.691 4.909 13.785 5.599 C 13.879 6.29 14.158 6.942 14.593 7.482 C 15.028 8.023 15.601 8.432 16.25 8.664 L 16.25 15.231 L 18.75 15.231 L 18.75 8.665 C 19.479 8.404 20.111 7.922 20.558 7.283 C 21.006 6.645 21.248 5.881 21.25 5.098 Z M 17.5 6.365 C 17.253 6.365 17.011 6.29 16.806 6.151 C 16.6 6.012 16.44 5.814 16.345 5.583 C 16.251 5.351 16.226 5.097 16.274 4.851 C 16.322 4.605 16.441 4.379 16.616 4.202 C 16.791 4.025 17.014 3.905 17.256 3.856 C 17.499 3.807 17.75 3.832 17.978 3.928 C 18.207 4.024 18.402 4.186 18.539 4.394 C 18.677 4.603 18.75 4.847 18.75 5.098 C 18.75 5.434 18.618 5.756 18.384 5.993 C 18.149 6.231 17.831 6.364 17.5 6.365 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path><path d="M 30 1.298 C 29.006 1.299 28.053 1.7 27.35 2.412 C 26.647 3.125 26.251 4.091 26.25 5.098 C 26.253 5.662 26.381 6.219 26.625 6.726 L 22.5 10.907 L 22.5 15.231 L 25 15.231 L 25 11.956 L 28.394 8.517 C 28.894 8.765 29.443 8.895 30 8.898 C 30.995 8.898 31.949 8.498 32.652 7.785 C 33.355 7.072 33.75 6.106 33.75 5.098 C 33.75 4.09 33.355 3.124 32.652 2.411 C 31.949 1.698 30.995 1.298 30 1.298 Z M 30 6.365 C 29.753 6.365 29.511 6.29 29.306 6.151 C 29.1 6.012 28.94 5.814 28.845 5.583 C 28.751 5.351 28.726 5.097 28.774 4.851 C 28.822 4.605 28.941 4.379 29.116 4.202 C 29.291 4.025 29.514 3.905 29.756 3.856 C 29.999 3.807 30.25 3.832 30.478 3.928 C 30.707 4.024 30.902 4.186 31.039 4.394 C 31.177 4.603 31.25 4.847 31.25 5.098 C 31.25 5.434 31.118 5.756 30.884 5.993 C 30.649 6.231 30.332 6.364 30 6.365 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path><path d="M 12.5 22.831 L 10 22.831 L 10 26.107 L 6.607 29.546 C 6.106 29.298 5.557 29.168 5 29.165 C 4.258 29.165 3.533 29.387 2.917 29.805 C 2.3 30.223 1.819 30.816 1.535 31.51 C 1.252 32.205 1.177 32.969 1.322 33.706 C 1.467 34.443 1.824 35.12 2.348 35.652 C 2.873 36.183 3.541 36.545 4.268 36.692 C 4.996 36.838 5.75 36.763 6.435 36.475 C 7.12 36.188 7.706 35.701 8.118 35.076 C 8.53 34.451 8.75 33.716 8.75 32.965 C 8.747 32.4 8.619 31.844 8.375 31.337 L 12.5 27.156 Z M 5 34.231 C 4.753 34.231 4.511 34.157 4.306 34.018 C 4.1 33.879 3.94 33.681 3.845 33.449 C 3.751 33.218 3.726 32.963 3.774 32.717 C 3.822 32.472 3.941 32.246 4.116 32.069 C 4.291 31.892 4.514 31.771 4.756 31.722 C 4.999 31.674 5.25 31.699 5.478 31.794 C 5.707 31.89 5.902 32.053 6.039 32.261 C 6.177 32.469 6.25 32.714 6.25 32.965 C 6.25 33.3 6.118 33.622 5.884 33.86 C 5.649 34.097 5.331 34.231 5 34.231 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path><path d="M 18.75 29.398 L 18.75 22.831 L 16.25 22.831 L 16.25 29.398 C 15.416 29.697 14.713 30.285 14.265 31.058 C 13.818 31.831 13.654 32.74 13.804 33.623 C 13.954 34.507 14.407 35.308 15.083 35.886 C 15.759 36.464 16.615 36.78 17.5 36.78 C 18.385 36.78 19.241 36.464 19.917 35.886 C 20.593 35.308 21.046 34.507 21.196 33.623 C 21.346 32.74 21.182 31.831 20.735 31.058 C 20.287 30.285 19.584 29.697 18.75 29.398 Z M 17.5 34.231 C 17.253 34.231 17.011 34.157 16.806 34.018 C 16.6 33.879 16.44 33.681 16.345 33.449 C 16.251 33.218 16.226 32.963 16.274 32.717 C 16.322 32.472 16.441 32.246 16.616 32.069 C 16.791 31.892 17.014 31.771 17.256 31.722 C 17.499 31.674 17.75 31.699 17.978 31.794 C 18.207 31.89 18.402 32.053 18.539 32.261 C 18.677 32.469 18.75 32.714 18.75 32.965 C 18.75 33.3 18.618 33.622 18.384 33.86 C 18.149 34.097 17.831 34.231 17.5 34.231 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path><path d="M 30 29.165 C 29.443 29.168 28.894 29.298 28.393 29.546 L 25 26.107 L 25 22.831 L 22.5 22.831 L 22.5 27.156 L 26.625 31.337 C 26.381 31.844 26.253 32.4 26.25 32.965 C 26.25 33.716 26.47 34.451 26.882 35.076 C 27.294 35.701 27.88 36.188 28.565 36.475 C 29.25 36.763 30.004 36.838 30.732 36.692 C 31.459 36.545 32.127 36.183 32.652 35.652 C 33.176 35.12 33.533 34.443 33.678 33.706 C 33.823 32.969 33.749 32.205 33.465 31.51 C 33.181 30.816 32.7 30.223 32.084 29.805 C 31.467 29.387 30.742 29.165 30 29.165 Z M 30 34.231 C 29.753 34.231 29.511 34.157 29.306 34.018 C 29.1 33.879 28.94 33.681 28.845 33.449 C 28.751 33.218 28.726 32.963 28.774 32.717 C 28.822 32.472 28.941 32.246 29.116 32.069 C 29.291 31.892 29.514 31.771 29.756 31.722 C 29.999 31.674 30.25 31.699 30.478 31.794 C 30.707 31.89 30.902 32.053 31.039 32.261 C 31.177 32.469 31.25 32.714 31.25 32.965 C 31.25 33.3 31.118 33.622 30.884 33.86 C 30.649 34.097 30.332 34.231 30 34.231 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path></svg>`,
                                    svgContentId: 10970998178,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              Se() &&
                                /*#__PURE__*/ l(f.div, {
                                  className: `framer-1vl8akt`,
                                  "data-framer-name": `Load-balancer--pool`,
                                  layoutDependency: L,
                                  layoutId: `kXE9s0eid`,
                                  style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                                  children: /*#__PURE__*/ l(C, {
                                    className: `framer-1w4yzl1`,
                                    "data-framer-name": `Vector`,
                                    layout: `position`,
                                    layoutDependency: L,
                                    layoutId: `o9XgVsd34`,
                                    opacity: 1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35 38"><path d="M 25 17.765 L 10 17.765 L 10 20.298 L 25 20.298 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path><path d="M 8.375 6.726 C 8.619 6.219 8.747 5.662 8.75 5.098 C 8.75 4.346 8.53 3.612 8.118 2.987 C 7.706 2.362 7.12 1.875 6.435 1.587 C 5.75 1.3 4.996 1.224 4.268 1.371 C 3.541 1.518 2.873 1.88 2.348 2.411 C 1.824 2.942 1.467 3.62 1.322 4.357 C 1.177 5.094 1.252 5.858 1.535 6.552 C 1.819 7.247 2.3 7.84 2.917 8.258 C 3.533 8.675 4.258 8.898 5 8.898 C 5.557 8.895 6.106 8.765 6.606 8.517 L 10 11.956 L 10 15.231 L 12.5 15.231 L 12.5 10.907 Z M 5 6.365 C 4.753 6.365 4.511 6.29 4.306 6.151 C 4.1 6.012 3.94 5.814 3.845 5.583 C 3.751 5.351 3.726 5.097 3.774 4.851 C 3.822 4.605 3.941 4.379 4.116 4.202 C 4.291 4.025 4.514 3.905 4.756 3.856 C 4.999 3.807 5.25 3.832 5.478 3.928 C 5.707 4.024 5.902 4.186 6.039 4.394 C 6.177 4.603 6.25 4.847 6.25 5.098 C 6.25 5.434 6.118 5.756 5.884 5.993 C 5.649 6.231 5.331 6.364 5 6.365 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path><path d="M 21.25 5.098 C 21.253 4.401 21.067 3.716 20.711 3.119 C 20.356 2.522 19.845 2.035 19.235 1.713 C 18.625 1.39 17.939 1.244 17.252 1.29 C 16.565 1.336 15.904 1.573 15.342 1.974 C 14.779 2.375 14.336 2.926 14.061 3.565 C 13.787 4.205 13.691 4.909 13.785 5.599 C 13.879 6.29 14.158 6.942 14.593 7.482 C 15.028 8.023 15.601 8.432 16.25 8.664 L 16.25 15.231 L 18.75 15.231 L 18.75 8.665 C 19.479 8.404 20.111 7.922 20.558 7.283 C 21.006 6.645 21.248 5.881 21.25 5.098 Z M 17.5 6.365 C 17.253 6.365 17.011 6.29 16.806 6.151 C 16.6 6.012 16.44 5.814 16.345 5.583 C 16.251 5.351 16.226 5.097 16.274 4.851 C 16.322 4.605 16.441 4.379 16.616 4.202 C 16.791 4.025 17.014 3.905 17.256 3.856 C 17.499 3.807 17.75 3.832 17.978 3.928 C 18.207 4.024 18.402 4.186 18.539 4.394 C 18.677 4.603 18.75 4.847 18.75 5.098 C 18.75 5.434 18.618 5.756 18.384 5.993 C 18.149 6.231 17.831 6.364 17.5 6.365 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path><path d="M 30 1.298 C 29.006 1.299 28.053 1.7 27.35 2.412 C 26.647 3.125 26.251 4.091 26.25 5.098 C 26.253 5.662 26.381 6.219 26.625 6.726 L 22.5 10.907 L 22.5 15.231 L 25 15.231 L 25 11.956 L 28.394 8.517 C 28.894 8.765 29.443 8.895 30 8.898 C 30.995 8.898 31.949 8.498 32.652 7.785 C 33.355 7.072 33.75 6.106 33.75 5.098 C 33.75 4.09 33.355 3.124 32.652 2.411 C 31.949 1.698 30.995 1.298 30 1.298 Z M 30 6.365 C 29.753 6.365 29.511 6.29 29.306 6.151 C 29.1 6.012 28.94 5.814 28.845 5.583 C 28.751 5.351 28.726 5.097 28.774 4.851 C 28.822 4.605 28.941 4.379 29.116 4.202 C 29.291 4.025 29.514 3.905 29.756 3.856 C 29.999 3.807 30.25 3.832 30.478 3.928 C 30.707 4.024 30.902 4.186 31.039 4.394 C 31.177 4.603 31.25 4.847 31.25 5.098 C 31.25 5.434 31.118 5.756 30.884 5.993 C 30.649 6.231 30.332 6.364 30 6.365 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path><path d="M 12.5 22.831 L 10 22.831 L 10 26.107 L 6.607 29.546 C 6.106 29.298 5.557 29.168 5 29.165 C 4.258 29.165 3.533 29.387 2.917 29.805 C 2.3 30.223 1.819 30.816 1.535 31.51 C 1.252 32.205 1.177 32.969 1.322 33.706 C 1.467 34.443 1.824 35.12 2.348 35.652 C 2.873 36.183 3.541 36.545 4.268 36.692 C 4.996 36.838 5.75 36.763 6.435 36.475 C 7.12 36.188 7.706 35.701 8.118 35.076 C 8.53 34.451 8.75 33.716 8.75 32.965 C 8.747 32.4 8.619 31.844 8.375 31.337 L 12.5 27.156 Z M 5 34.231 C 4.753 34.231 4.511 34.157 4.306 34.018 C 4.1 33.879 3.94 33.681 3.845 33.449 C 3.751 33.218 3.726 32.963 3.774 32.717 C 3.822 32.472 3.941 32.246 4.116 32.069 C 4.291 31.892 4.514 31.771 4.756 31.722 C 4.999 31.674 5.25 31.699 5.478 31.794 C 5.707 31.89 5.902 32.053 6.039 32.261 C 6.177 32.469 6.25 32.714 6.25 32.965 C 6.25 33.3 6.118 33.622 5.884 33.86 C 5.649 34.097 5.331 34.231 5 34.231 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path><path d="M 18.75 29.398 L 18.75 22.831 L 16.25 22.831 L 16.25 29.398 C 15.416 29.697 14.713 30.285 14.265 31.058 C 13.818 31.831 13.654 32.74 13.804 33.623 C 13.954 34.507 14.407 35.308 15.083 35.886 C 15.759 36.464 16.615 36.78 17.5 36.78 C 18.385 36.78 19.241 36.464 19.917 35.886 C 20.593 35.308 21.046 34.507 21.196 33.623 C 21.346 32.74 21.182 31.831 20.735 31.058 C 20.287 30.285 19.584 29.697 18.75 29.398 Z M 17.5 34.231 C 17.253 34.231 17.011 34.157 16.806 34.018 C 16.6 33.879 16.44 33.681 16.345 33.449 C 16.251 33.218 16.226 32.963 16.274 32.717 C 16.322 32.472 16.441 32.246 16.616 32.069 C 16.791 31.892 17.014 31.771 17.256 31.722 C 17.499 31.674 17.75 31.699 17.978 31.794 C 18.207 31.89 18.402 32.053 18.539 32.261 C 18.677 32.469 18.75 32.714 18.75 32.965 C 18.75 33.3 18.618 33.622 18.384 33.86 C 18.149 34.097 17.831 34.231 17.5 34.231 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path><path d="M 30 29.165 C 29.443 29.168 28.894 29.298 28.393 29.546 L 25 26.107 L 25 22.831 L 22.5 22.831 L 22.5 27.156 L 26.625 31.337 C 26.381 31.844 26.253 32.4 26.25 32.965 C 26.25 33.716 26.47 34.451 26.882 35.076 C 27.294 35.701 27.88 36.188 28.565 36.475 C 29.25 36.763 30.004 36.838 30.732 36.692 C 31.459 36.545 32.127 36.183 32.652 35.652 C 33.176 35.12 33.533 34.443 33.678 33.706 C 33.823 32.969 33.749 32.205 33.465 31.51 C 33.181 30.816 32.7 30.223 32.084 29.805 C 31.467 29.387 30.742 29.165 30 29.165 Z M 30 34.231 C 29.753 34.231 29.511 34.157 29.306 34.018 C 29.1 33.879 28.94 33.681 28.845 33.449 C 28.751 33.218 28.726 32.963 28.774 32.717 C 28.822 32.472 28.941 32.246 29.116 32.069 C 29.291 31.892 29.514 31.771 29.756 31.722 C 29.999 31.674 30.25 31.699 30.478 31.794 C 30.707 31.89 30.902 32.053 31.039 32.261 C 31.177 32.469 31.25 32.714 31.25 32.965 C 31.25 33.3 31.118 33.622 30.884 33.86 C 30.649 34.097 30.332 34.231 30 34.231 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path></svg>`,
                                    svgContentId: 10970998178,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              Ce() &&
                                /*#__PURE__*/ l(f.div, {
                                  className: `framer-1obqcrx`,
                                  "data-framer-name": `Executable-program`,
                                  layoutDependency: L,
                                  layoutId: `ESPabEWhN`,
                                  style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                                  children: /*#__PURE__*/ l(C, {
                                    className: `framer-1unotrk`,
                                    "data-framer-name": `Vector`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 14,
                                    intrinsicWidth: 15,
                                    layoutDependency: L,
                                    layoutId: `fYFE6o35E`,
                                    svg: `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 8.5L15 11L11.5 13.5V8.5Z" fill="#73B200"/>
<path d="M9.085 7.5L7.79 8.795L8.5 9.5L10.5 7.5L8.5 5.5L7.79 6.205L9.085 7.5Z" fill="#73B200"/>
<path d="M4.915 7.5L6.21 6.205L5.5 5.5L3.5 7.5L5.5 9.5L6.21 8.795L4.915 7.5Z" fill="#73B200"/>
<path d="M3.5 2.5C3.77614 2.5 4 2.27614 4 2C4 1.72386 3.77614 1.5 3.5 1.5C3.22386 1.5 3 1.72386 3 2C3 2.27614 3.22386 2.5 3.5 2.5Z" fill="#73B200"/>
<path d="M2 2.5C2.27614 2.5 2.5 2.27614 2.5 2C2.5 1.72386 2.27614 1.5 2 1.5C1.72386 1.5 1.5 1.72386 1.5 2C1.5 2.27614 1.72386 2.5 2 2.5Z" fill="#73B200"/>
<path d="M9.5 11H1V4H13V7.5H14V1C14 0.44875 13.5514 0 13 0H1C0.4486 0 0 0.44875 0 1V11C0 11.5512 0.4486 12 1 12H9.5V11ZM1 1H13V3H1V1Z" fill="#73B200"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                            ],
                          }),
                          /*#__PURE__*/ l(h, {
                            __fromCanvasComponent: !0,
                            children:
                              B(`v1`, d) ??
                              /*#__PURE__*/ l(a, {
                                children: /*#__PURE__*/ l(f.h3, {
                                  className: `framer-styles-preset-kzlevi`,
                                  "data-styles-preset": `UIw3tgmjU`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                  },
                                  children: `高级AI洞察`,
                                }),
                              }),
                            className: `framer-1craw7`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`],
                            layoutDependency: L,
                            layoutId: `Ry9rrnZ9l`,
                            style: {
                              "--extracted-a0htzi": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...H(
                              {
                                BD51hKaoX: {
                                  children:
                                    B(`v10`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `多终端访问`,
                                      }),
                                    }),
                                },
                                bNfeNNVZ3: {
                                  children:
                                    B(`v3`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `统一命名空间`,
                                      }),
                                    }),
                                },
                                Bx_ORUAdA: {
                                  children:
                                    B(`v4`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `一体化平台`,
                                      }),
                                    }),
                                },
                                CNPkR3uUb: {
                                  children:
                                    B(`v5`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `数字孪生`,
                                      }),
                                    }),
                                },
                                ctFaOyhBS: {
                                  children:
                                    B(`v4`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `一体化平台`,
                                      }),
                                    }),
                                },
                                CV0XCAi2E: {
                                  children:
                                    B(`v11`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `低代码开发画布`,
                                      }),
                                    }),
                                },
                                DyaOSusCi: {
                                  children:
                                    B(`v10`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `多终端访问`,
                                      }),
                                    }),
                                },
                                EDOCrciLy: {
                                  children:
                                    B(`v11`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `低代码开发画布`,
                                      }),
                                    }),
                                },
                                f3XqqDzn2: {
                                  children:
                                    B(`v3`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `统一命名空间`,
                                      }),
                                    }),
                                },
                                FEcOcIs1O: {
                                  children:
                                    B(`v4`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `一体化平台`,
                                      }),
                                    }),
                                },
                                hkgQY47Ef: {
                                  children:
                                    B(`v3`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `统一命名空间`,
                                      }),
                                    }),
                                },
                                J68gW4lBF: {
                                  children:
                                    B(`v4`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `一体化平台`,
                                      }),
                                    }),
                                },
                                JXf8VPwBX: {
                                  children:
                                    B(`v8`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `全球多工厂数据访问`,
                                      }),
                                    }),
                                },
                                KflfEnkIG: {
                                  children:
                                    B(`v4`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `一体化平台`,
                                      }),
                                    }),
                                },
                                Kt8mgI6eC: {
                                  children:
                                    B(`v5`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `数字孪生`,
                                      }),
                                    }),
                                },
                                l31xdaWmv: {
                                  children:
                                    B(`v8`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `全球多工厂数据访问`,
                                      }),
                                    }),
                                },
                                lX5qFxs0u: {
                                  children:
                                    B(`v3`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `统一命名空间`,
                                      }),
                                    }),
                                },
                                N__gaGT4d: {
                                  children:
                                    B(`v5`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `数字孪生`,
                                      }),
                                    }),
                                },
                                NeTGMSwMs: {
                                  children:
                                    B(`v4`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `一体化平台`,
                                      }),
                                    }),
                                },
                                O9kOE75vC: {
                                  children:
                                    B(`v10`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `多终端访问`,
                                      }),
                                    }),
                                },
                                OcorJFG6g: {
                                  children:
                                    B(`v4`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `一体化平台`,
                                      }),
                                    }),
                                },
                                OURi7lzSJ: {
                                  children:
                                    B(`v6`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `混合精度人员定位`,
                                      }),
                                    }),
                                },
                                q2glW1kn5: {
                                  children:
                                    B(`v11`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `低代码开发画布`,
                                      }),
                                    }),
                                },
                                rZbzcBEzF: {
                                  children:
                                    B(`v2`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `高级AI洞察`,
                                      }),
                                    }),
                                },
                                sHMZ1gY9F: {
                                  children:
                                    B(`v9`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `全球多工厂数据访问`,
                                      }),
                                    }),
                                },
                                tLSLVSP_0: {
                                  children:
                                    B(`v5`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `数字孪生`,
                                      }),
                                    }),
                                },
                                ultcMSnAu: {
                                  children:
                                    B(`v3`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `统一命名空间`,
                                      }),
                                    }),
                                },
                                uLwugpM8T: {
                                  children:
                                    B(`v6`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `混合精度人员定位`,
                                      }),
                                    }),
                                },
                                UmHjLp5av: {
                                  children:
                                    B(`v4`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `一体化平台`,
                                      }),
                                    }),
                                },
                                wfoMpqkQ0: {
                                  children:
                                    B(`v5`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `数字孪生`,
                                      }),
                                    }),
                                },
                                wnJROEut8: {
                                  children:
                                    B(`v5`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `数字孪生`,
                                      }),
                                    }),
                                },
                                Yj7B7QuI7: {
                                  children:
                                    B(`v3`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `统一命名空间`,
                                      }),
                                    }),
                                },
                                YKbGzH5B6: {
                                  children:
                                    B(`v7`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `混合精度人员定位`,
                                      }),
                                    }),
                                },
                                ZUW1AKPHI: {
                                  children:
                                    B(`v4`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h3, {
                                        className: `framer-styles-preset-kzlevi`,
                                        "data-styles-preset": `UIw3tgmjU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0)))`,
                                        },
                                        children: `一体化平台`,
                                      }),
                                    }),
                                },
                              },
                              D,
                              P
                            ),
                          }),
                        ],
                      }),
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-mjlnhq`,
                        "data-framer-name": `Bottom`,
                        layoutDependency: L,
                        layoutId: `BuXcj_xEJ`,
                        children: /*#__PURE__*/ l(f.div, {
                          className: `framer-15adk3q`,
                          "data-framer-name": `Content`,
                          layoutDependency: L,
                          layoutId: `wIc9PRoQ7`,
                          children: /*#__PURE__*/ l(h, {
                            __fromCanvasComponent: !0,
                            children:
                              B(`v12`, d) ??
                              /*#__PURE__*/ l(a, {
                                children: /*#__PURE__*/ l(f.p, {
                                  className: `framer-styles-preset-1ogycj`,
                                  "data-styles-preset": `Y65iag5vt`,
                                  dir: `auto`,
                                  children: `Tier0联动空气质量传感器与本地气象数据，通过 AI 与机器学习分析，预测未来 24 小时空气质量趋势，实时推送警报。热力图直观呈现空气质量动态，让员工及时采取措施，保障健康。`,
                                }),
                              }),
                            className: `framer-1rpc0lg`,
                            "data-framer-name": `Body`,
                            fonts: [`Inter`],
                            layoutDependency: L,
                            layoutId: `u16uuBWIt`,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...H(
                              {
                                BD51hKaoX: {
                                  children:
                                    B(`v24`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `Tier0采用浏览器/服务器 (B/S) 架构，用户能够从包括计算机、智能手机和平板电脑在内的多种设备访问平台数据。凭借全球连接，只要能上网，任何人都可以随时随地访问其权限内的信息。`,
                                      }),
                                    }),
                                },
                                bNfeNNVZ3: {
                                  children:
                                    B(`v20`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `Tier0实现了跨系统的中央数据集成和实时通信，支持在造船厂内进行精确的人员和资产跟踪。通过标准化数据模型和整合实时位置信息，它增强了数据的可见性和控制，支持地理围栏、紧急警报和风险监控等，简化了事件报告，并优化了设施内的资源。`,
                                      }),
                                    }),
                                },
                                Bx_ORUAdA: {
                                  children:
                                    B(`v25`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `Tier0为Indorama提供了一站式平台，解决了不同软件系统和多次登录验证造成的低效问题。Digital Worker通过统一界面集中管理，并设有可定制的工作台，显著提高了生产力。`,
                                      }),
                                    }),
                                },
                                CNPkR3uUb: {
                                  children:
                                    B(`v22`, d) ??
                                    /*#__PURE__*/ u(a, {
                                      children: [
                                        /*#__PURE__*/ l(f.p, {
                                          className: `framer-styles-preset-1ogycj`,
                                          "data-styles-preset": `Y65iag5vt`,
                                          dir: `auto`,
                                          children: `3D数字孪生系统集成实时员工定位，以监控生产区域内的人员移动。它提供即时安全警报并显示潜在风险源，支持对危险区域和限制区域的地理围栏，带有实时入侵警报。`,
                                        }),
                                        /*#__PURE__*/ l(f.p, {
                                          className: `framer-styles-preset-1ogycj`,
                                          "data-styles-preset": `Y65iag5vt`,
                                          dir: `auto`,
                                          children: `该系统还可以进行轨迹跟踪和回放，允许对人员和车辆移动、巡逻路线和报警历史进行详细监控。这增强了整个设施的整体安全性和操作控制。`,
                                        }),
                                      ],
                                    }),
                                },
                                ctFaOyhBS: {
                                  children:
                                    B(`v25`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `Tier0为Indorama提供了一站式平台，解决了不同软件系统和多次登录验证造成的低效问题。Digital Worker通过统一界面集中管理，并设有可定制的工作台，显著提高了生产力。`,
                                      }),
                                    }),
                                },
                                CV0XCAi2E: {
                                  children:
                                    B(`v26`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `Tier0拥有一个低代码开发画布，任何人都能够创建适合他们即时操作需求的工作流程、工单和仪表板，可随时随地使用。它配备了一个广泛的组件库，包括设备部件、图标、日历和流程图。没有 IT 专业知识的个人也可通过简单的拖拉拽构建他们的应用程序或真实世界的使用案例。`,
                                      }),
                                    }),
                                },
                                DyaOSusCi: {
                                  children:
                                    B(`v24`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `Tier0采用浏览器/服务器 (B/S) 架构，用户能够从包括计算机、智能手机和平板电脑在内的多种设备访问平台数据。凭借全球连接，只要能上网，任何人都可以随时随地访问其权限内的信息。`,
                                      }),
                                    }),
                                },
                                EDOCrciLy: {
                                  children:
                                    B(`v26`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `Tier0拥有一个低代码开发画布，任何人都能够创建适合他们即时操作需求的工作流程、工单和仪表板，可随时随地使用。它配备了一个广泛的组件库，包括设备部件、图标、日历和流程图。没有 IT 专业知识的个人也可通过简单的拖拉拽构建他们的应用程序或真实世界的使用案例。`,
                                      }),
                                    }),
                                },
                                f3XqqDzn2: {
                                  children:
                                    B(`v13`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `Tier0内置 X-Collector、Freeflow 与 API，轻松整合边缘设备及现有系统（HVAC、CCTV、能源管理系统、智能电表），实现数据无缝流动与全面可访问。此外，统一建模收集的数据，创建单一真实来源。当数据发生变化时，所有相关系统会立即收到通知，保持整个网络的实时同步。`,
                                      }),
                                    }),
                                },
                                FEcOcIs1O: {
                                  children:
                                    B(`v21`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `统一身份认证、集中工作台与资源一体化管理，携手打造安全无缝的互联船坞接入，助力船厂运营实现高效、流畅与全面防护的数字化体验。`,
                                      }),
                                    }),
                                },
                                hkgQY47Ef: {
                                  children:
                                    B(`v13`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `Tier0内置 X-Collector、Freeflow 与 API，轻松整合边缘设备及现有系统（HVAC、CCTV、能源管理系统、智能电表），实现数据无缝流动与全面可访问。此外，统一建模收集的数据，创建单一真实来源。当数据发生变化时，所有相关系统会立即收到通知，保持整个网络的实时同步。`,
                                      }),
                                    }),
                                },
                                J68gW4lBF: {
                                  children:
                                    B(`v25`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `Tier0为Indorama提供了一站式平台，解决了不同软件系统和多次登录验证造成的低效问题。Digital Worker通过统一界面集中管理，并设有可定制的工作台，显著提高了生产力。`,
                                      }),
                                    }),
                                },
                                JXf8VPwBX: {
                                  children:
                                    B(`v23`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `Tier0提供了一个专为跨国企业，如 Indorama，量身定制的平台，简化了跨多个地区和全球多个站点的管理。它采用多租户架构以整合 Indorama 在六个国家的八个工厂的数据。采用租户隔离来管理这些工厂之间的数据治理标准差异和时区变化，确保安全和高效的全球多工厂数据访问。`,
                                      }),
                                    }),
                                },
                                KflfEnkIG: {
                                  children:
                                    B(`v16`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        children: `Tier0  has tailored an all-in-one system for Aramco, covering six key scenarios. Tier0 allows users to monitor energy data across entire office buildings and gain insights into usage trends. Additionally, the system provides control over HVAC, lighting, and other facilities, enabling dynamic adjustments to optimize energy efficiency and comfort. `,
                                      }),
                                    }),
                                },
                                Kt8mgI6eC: {
                                  children:
                                    B(`v22`, d) ??
                                    /*#__PURE__*/ u(a, {
                                      children: [
                                        /*#__PURE__*/ l(f.p, {
                                          className: `framer-styles-preset-1ogycj`,
                                          "data-styles-preset": `Y65iag5vt`,
                                          dir: `auto`,
                                          children: `3D数字孪生系统集成实时员工定位，以监控生产区域内的人员移动。它提供即时安全警报并显示潜在风险源，支持对危险区域和限制区域的地理围栏，带有实时入侵警报。`,
                                        }),
                                        /*#__PURE__*/ l(f.p, {
                                          className: `framer-styles-preset-1ogycj`,
                                          "data-styles-preset": `Y65iag5vt`,
                                          dir: `auto`,
                                          children: `该系统还可以进行轨迹跟踪和回放，允许对人员和车辆移动、巡逻路线和报警历史进行详细监控。这增强了整个设施的整体安全性和操作控制。`,
                                        }),
                                      ],
                                    }),
                                },
                                l31xdaWmv: {
                                  children:
                                    B(`v23`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `Tier0提供了一个专为跨国企业，如 Indorama，量身定制的平台，简化了跨多个地区和全球多个站点的管理。它采用多租户架构以整合 Indorama 在六个国家的八个工厂的数据。采用租户隔离来管理这些工厂之间的数据治理标准差异和时区变化，确保安全和高效的全球多工厂数据访问。`,
                                      }),
                                    }),
                                },
                                lX5qFxs0u: {
                                  children:
                                    B(`v13`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `Tier0内置 X-Collector、Freeflow 与 API，轻松整合边缘设备及现有系统（HVAC、CCTV、能源管理系统、智能电表），实现数据无缝流动与全面可访问。此外，统一建模收集的数据，创建单一真实来源。当数据发生变化时，所有相关系统会立即收到通知，保持整个网络的实时同步。`,
                                      }),
                                    }),
                                },
                                N__gaGT4d: {
                                  children:
                                    B(`v18`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        children: `Tier0 leverages 3D digital twin technology to create a 1:1 model of the entire office building, displaying real-time energy consumption data and projecting future trends. Employees can visually monitor energy use across different zones or floors, with detailed insights into consumption patterns and quick alerts for anomalies. Moreover, the system simulates real-time lighting and HVAC status within meeting rooms, allowing admins to control these settings directly within the platform to optimize energy savings.`,
                                      }),
                                    }),
                                },
                                NeTGMSwMs: {
                                  children:
                                    B(`v21`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `统一身份认证、集中工作台与资源一体化管理，携手打造安全无缝的互联船坞接入，助力船厂运营实现高效、流畅与全面防护的数字化体验。`,
                                      }),
                                    }),
                                },
                                O9kOE75vC: {
                                  children:
                                    B(`v24`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `Tier0采用浏览器/服务器 (B/S) 架构，用户能够从包括计算机、智能手机和平板电脑在内的多种设备访问平台数据。凭借全球连接，只要能上网，任何人都可以随时随地访问其权限内的信息。`,
                                      }),
                                    }),
                                },
                                OcorJFG6g: {
                                  children:
                                    B(`v21`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `统一身份认证、集中工作台与资源一体化管理，携手打造安全无缝的互联船坞接入，助力船厂运营实现高效、流畅与全面防护的数字化体验。`,
                                      }),
                                    }),
                                },
                                OURi7lzSJ: {
                                  children:
                                    B(`v19`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `混合精密人员定位解决方案，支持室内外环境中高低精度跟踪。该系统通过利用资产标签、智能个人防护装备、信标、超宽带和蓝牙，实现随时随地高效定位功能。`,
                                      }),
                                    }),
                                },
                                q2glW1kn5: {
                                  children:
                                    B(`v26`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `Tier0拥有一个低代码开发画布，任何人都能够创建适合他们即时操作需求的工作流程、工单和仪表板，可随时随地使用。它配备了一个广泛的组件库，包括设备部件、图标、日历和流程图。没有 IT 专业知识的个人也可通过简单的拖拉拽构建他们的应用程序或真实世界的使用案例。`,
                                      }),
                                    }),
                                },
                                sHMZ1gY9F: {
                                  children:
                                    B(`v23`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `Tier0提供了一个专为跨国企业，如 Indorama，量身定制的平台，简化了跨多个地区和全球多个站点的管理。它采用多租户架构以整合 Indorama 在六个国家的八个工厂的数据。采用租户隔离来管理这些工厂之间的数据治理标准差异和时区变化，确保安全和高效的全球多工厂数据访问。`,
                                      }),
                                    }),
                                },
                                tLSLVSP_0: {
                                  children:
                                    B(`v17`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        children: `Tier0 leverages 3D digital twin technology to create a 1:1 model of the entire office building, displaying real-time energy consumption data and projecting future trends. Employees can visually monitor energy use across different zones or floors, with detailed insights into consumption patterns and quick alerts for anomalies. Moreover, the system simulates real-time lighting and HVAC status within meeting rooms, allowing admins to control these settings directly within the platform to optimize energy savings.`,
                                      }),
                                    }),
                                },
                                ultcMSnAu: {
                                  children:
                                    B(`v20`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `Tier0实现了跨系统的中央数据集成和实时通信，支持在造船厂内进行精确的人员和资产跟踪。通过标准化数据模型和整合实时位置信息，它增强了数据的可见性和控制，支持地理围栏、紧急警报和风险监控等，简化了事件报告，并优化了设施内的资源。`,
                                      }),
                                    }),
                                },
                                uLwugpM8T: {
                                  children:
                                    B(`v19`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `混合精密人员定位解决方案，支持室内外环境中高低精度跟踪。该系统通过利用资产标签、智能个人防护装备、信标、超宽带和蓝牙，实现随时随地高效定位功能。`,
                                      }),
                                    }),
                                },
                                UmHjLp5av: {
                                  children:
                                    B(`v14`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        children: `Tier0 has tailored an all-in-one system for Aramco, covering six key scenarios. Tier0 allows users to monitor energy data across entire office buildings and gain insights into usage trends. Additionally, the system provides control over HVAC, lighting, and other facilities, enabling dynamic adjustments to optimize energy efficiency and comfort. `,
                                      }),
                                    }),
                                },
                                wfoMpqkQ0: {
                                  children:
                                    B(`v22`, d) ??
                                    /*#__PURE__*/ u(a, {
                                      children: [
                                        /*#__PURE__*/ l(f.p, {
                                          className: `framer-styles-preset-1ogycj`,
                                          "data-styles-preset": `Y65iag5vt`,
                                          dir: `auto`,
                                          children: `3D数字孪生系统集成实时员工定位，以监控生产区域内的人员移动。它提供即时安全警报并显示潜在风险源，支持对危险区域和限制区域的地理围栏，带有实时入侵警报。`,
                                        }),
                                        /*#__PURE__*/ l(f.p, {
                                          className: `framer-styles-preset-1ogycj`,
                                          "data-styles-preset": `Y65iag5vt`,
                                          dir: `auto`,
                                          children: `该系统还可以进行轨迹跟踪和回放，允许对人员和车辆移动、巡逻路线和报警历史进行详细监控。这增强了整个设施的整体安全性和操作控制。`,
                                        }),
                                      ],
                                    }),
                                },
                                wnJROEut8: {
                                  children:
                                    B(`v17`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        children: `Tier0 leverages 3D digital twin technology to create a 1:1 model of the entire office building, displaying real-time energy consumption data and projecting future trends. Employees can visually monitor energy use across different zones or floors, with detailed insights into consumption patterns and quick alerts for anomalies. Moreover, the system simulates real-time lighting and HVAC status within meeting rooms, allowing admins to control these settings directly within the platform to optimize energy savings.`,
                                      }),
                                    }),
                                },
                                Yj7B7QuI7: {
                                  children:
                                    B(`v20`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `Tier0实现了跨系统的中央数据集成和实时通信，支持在造船厂内进行精确的人员和资产跟踪。通过标准化数据模型和整合实时位置信息，它增强了数据的可见性和控制，支持地理围栏、紧急警报和风险监控等，简化了事件报告，并优化了设施内的资源。`,
                                      }),
                                    }),
                                },
                                YKbGzH5B6: {
                                  children:
                                    B(`v19`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `混合精密人员定位解决方案，支持室内外环境中高低精度跟踪。该系统通过利用资产标签、智能个人防护装备、信标、超宽带和蓝牙，实现随时随地高效定位功能。`,
                                      }),
                                    }),
                                },
                                ZUW1AKPHI: {
                                  children:
                                    B(`v15`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-1ogycj`,
                                        "data-styles-preset": `Y65iag5vt`,
                                        dir: `auto`,
                                        children: `Tier0为Aramco量身定制了一套一体化系统，覆盖六个关键场景。Tier0 允许用户监控整个办公大楼的能源数据，并深入了解使用趋势。此外，该系统还提供对 HVAC、照明和其他设施的控制，使动态调整成为可能，以优化能源效率和舒适度。`,
                                      }),
                                    }),
                                },
                              },
                              D,
                              P
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                  /*#__PURE__*/ u(f.div, {
                    className: `framer-10s1ayu`,
                    "data-framer-name": `Bottom`,
                    layoutDependency: L,
                    layoutId: `P333kQljB`,
                    children: [
                      /*#__PURE__*/ u(f.div, {
                        className: `framer-6ath7h`,
                        "data-framer-name": `1`,
                        layoutDependency: L,
                        layoutId: `SgCDFreSM`,
                        children: [
                          /*#__PURE__*/ l(O, {
                            height: 29,
                            width: `calc(${g?.width || `100vw`} - 72px)`,
                            y: (g?.y || 0) + 287 + ((g?.height || 200) - 470) / 2,
                            ...H(
                              {
                                CNPkR3uUb: {
                                  y: (g?.y || 0) + 418 + ((g?.height || 200) - 601) / 2,
                                },
                                ctFaOyhBS: {
                                  y: (g?.y || 0) + 286 + ((g?.height || 200) - 469) / 2,
                                },
                                CV0XCAi2E: {
                                  y: (g?.y || 0) + 286 + ((g?.height || 200) - 469) / 2,
                                },
                                f3XqqDzn2: {
                                  y: (g?.y || 0) + 286 + ((g?.height || 200) - 469) / 2,
                                },
                                KflfEnkIG: {
                                  y: (g?.y || 0) + 286 + ((g?.height || 200) - 469) / 2,
                                },
                                Kt8mgI6eC: {
                                  y: (g?.y || 0) + 419 + ((g?.height || 200) - 602) / 2,
                                },
                                N__gaGT4d: {
                                  y: (g?.y || 0) + 286 + ((g?.height || 200) - 469) / 2,
                                },
                                NeTGMSwMs: {
                                  y: (g?.y || 0) + 286 + ((g?.height || 200) - 469) / 2,
                                },
                                O9kOE75vC: {
                                  y: (g?.y || 0) + 286 + ((g?.height || 200) - 469) / 2,
                                },
                                rZbzcBEzF: {
                                  y: (g?.y || 0) + 286 + ((g?.height || 200) - 469) / 2,
                                },
                                sHMZ1gY9F: {
                                  y: (g?.y || 0) + 286 + ((g?.height || 200) - 469) / 2,
                                },
                                wfoMpqkQ0: {
                                  y: (g?.y || 0) + 419 + ((g?.height || 200) - 602) / 2,
                                },
                                Yj7B7QuI7: {
                                  y: (g?.y || 0) + 286 + ((g?.height || 200) - 469) / 2,
                                },
                                YKbGzH5B6: {
                                  y: (g?.y || 0) + 286 + ((g?.height || 200) - 469) / 2,
                                },
                              },
                              D,
                              P
                            ),
                            children: /*#__PURE__*/ l(j, {
                              className: `framer-pi4jaf-container`,
                              layoutDependency: L,
                              layoutId: `VktRLeFQP-container`,
                              nodeId: `VktRLeFQP`,
                              rendersWithMotion: !0,
                              scopeId: `brsoltcpj`,
                              children: /*#__PURE__*/ l(z, {
                                height: `100%`,
                                id: `VktRLeFQP`,
                                layoutId: `VktRLeFQP`,
                                style: { width: `100%` },
                                variant: U(`MBdvDVfxh`),
                                width: `100%`,
                                yedMy0Mmu: B(`v27`, d) ?? `AI驱动的预测`,
                                ...H(
                                  {
                                    BD51hKaoX: { yedMy0Mmu: B(`v35`, d) ?? `高度兼容性` },
                                    bNfeNNVZ3: { yedMy0Mmu: B(`v32`, d) ?? `集中数据集成` },
                                    Bx_ORUAdA: { yedMy0Mmu: B(`v33`, d) ?? `统一身份认证` },
                                    CNPkR3uUb: { yedMy0Mmu: B(`v30`, d) ?? `3D数字孪生技术` },
                                    ctFaOyhBS: { yedMy0Mmu: B(`v33`, d) ?? `统一身份认证` },
                                    CV0XCAi2E: { yedMy0Mmu: B(`v36`, d) ?? `低代码开发画布` },
                                    DyaOSusCi: { yedMy0Mmu: B(`v35`, d) ?? `高度兼容性` },
                                    EDOCrciLy: { yedMy0Mmu: B(`v36`, d) ?? `低代码开发画布` },
                                    f3XqqDzn2: { yedMy0Mmu: B(`v28`, d) ?? `统一系统集成` },
                                    FEcOcIs1O: { yedMy0Mmu: B(`v33`, d) ?? `统一身份认证` },
                                    hkgQY47Ef: { yedMy0Mmu: B(`v28`, d) ?? `统一系统集成` },
                                    J68gW4lBF: { yedMy0Mmu: B(`v33`, d) ?? `统一身份认证` },
                                    JXf8VPwBX: { yedMy0Mmu: B(`v34`, d) ?? `多租户架构` },
                                    KflfEnkIG: { yedMy0Mmu: B(`v29`, d) ?? `能源数据监测` },
                                    Kt8mgI6eC: { yedMy0Mmu: B(`v30`, d) ?? `3D数字孪生技术` },
                                    l31xdaWmv: { yedMy0Mmu: B(`v34`, d) ?? `多租户架构` },
                                    lX5qFxs0u: { yedMy0Mmu: B(`v28`, d) ?? `统一系统集成` },
                                    N__gaGT4d: { yedMy0Mmu: B(`v30`, d) ?? `3D数字孪生技术` },
                                    NeTGMSwMs: { yedMy0Mmu: B(`v33`, d) ?? `统一身份认证` },
                                    O9kOE75vC: { yedMy0Mmu: B(`v35`, d) ?? `高度兼容性` },
                                    OcorJFG6g: { yedMy0Mmu: B(`v33`, d) ?? `统一身份认证` },
                                    OURi7lzSJ: { yedMy0Mmu: B(`v31`, d) ?? `高精度与低精度的结合` },
                                    q2glW1kn5: { yedMy0Mmu: B(`v36`, d) ?? `低代码开发画布` },
                                    sHMZ1gY9F: { yedMy0Mmu: B(`v34`, d) ?? `多租户架构` },
                                    tLSLVSP_0: { yedMy0Mmu: B(`v30`, d) ?? `3D数字孪生技术` },
                                    ultcMSnAu: { yedMy0Mmu: B(`v32`, d) ?? `集中数据集成` },
                                    uLwugpM8T: { yedMy0Mmu: B(`v31`, d) ?? `高精度与低精度的结合` },
                                    UmHjLp5av: { yedMy0Mmu: B(`v29`, d) ?? `能源数据监测` },
                                    wfoMpqkQ0: { yedMy0Mmu: B(`v30`, d) ?? `3D数字孪生技术` },
                                    wnJROEut8: { yedMy0Mmu: B(`v30`, d) ?? `3D数字孪生技术` },
                                    Yj7B7QuI7: { yedMy0Mmu: B(`v32`, d) ?? `集中数据集成` },
                                    YKbGzH5B6: { yedMy0Mmu: B(`v31`, d) ?? `高精度与低精度的结合` },
                                    ZUW1AKPHI: { yedMy0Mmu: B(`v29`, d) ?? `能源数据监测` },
                                  },
                                  D,
                                  P
                                ),
                              }),
                            }),
                          }),
                          /*#__PURE__*/ l(f.div, {
                            className: `framer-1qkcyb`,
                            "data-framer-name": `产线`,
                            layoutDependency: L,
                            layoutId: `bAKIGjG1E`,
                            style: { backgroundColor: `rgba(0, 0, 0, 0.2)` },
                          }),
                        ],
                      }),
                      /*#__PURE__*/ u(f.div, {
                        className: `framer-cvft4w`,
                        "data-framer-name": `2`,
                        layoutDependency: L,
                        layoutId: `dxbJ5E0bo`,
                        children: [
                          /*#__PURE__*/ l(O, {
                            height: 29,
                            width: `calc(${g?.width || `100vw`} - 72px)`,
                            y: (g?.y || 0) + 337 + ((g?.height || 200) - 470) / 2,
                            ...H(
                              {
                                CNPkR3uUb: {
                                  y: (g?.y || 0) + 468 + ((g?.height || 200) - 601) / 2,
                                },
                                ctFaOyhBS: {
                                  y: (g?.y || 0) + 336 + ((g?.height || 200) - 469) / 2,
                                },
                                CV0XCAi2E: {
                                  y: (g?.y || 0) + 336 + ((g?.height || 200) - 469) / 2,
                                },
                                f3XqqDzn2: {
                                  y: (g?.y || 0) + 336 + ((g?.height || 200) - 469) / 2,
                                },
                                KflfEnkIG: {
                                  y: (g?.y || 0) + 336 + ((g?.height || 200) - 469) / 2,
                                },
                                Kt8mgI6eC: {
                                  y: (g?.y || 0) + 469 + ((g?.height || 200) - 602) / 2,
                                },
                                N__gaGT4d: {
                                  y: (g?.y || 0) + 336 + ((g?.height || 200) - 469) / 2,
                                },
                                NeTGMSwMs: {
                                  y: (g?.y || 0) + 336 + ((g?.height || 200) - 469) / 2,
                                },
                                O9kOE75vC: {
                                  y: (g?.y || 0) + 336 + ((g?.height || 200) - 469) / 2,
                                },
                                rZbzcBEzF: {
                                  y: (g?.y || 0) + 336 + ((g?.height || 200) - 469) / 2,
                                },
                                sHMZ1gY9F: {
                                  y: (g?.y || 0) + 336 + ((g?.height || 200) - 469) / 2,
                                },
                                wfoMpqkQ0: {
                                  y: (g?.y || 0) + 469 + ((g?.height || 200) - 602) / 2,
                                },
                                Yj7B7QuI7: {
                                  y: (g?.y || 0) + 336 + ((g?.height || 200) - 469) / 2,
                                },
                                YKbGzH5B6: {
                                  y: (g?.y || 0) + 336 + ((g?.height || 200) - 469) / 2,
                                },
                              },
                              D,
                              P
                            ),
                            children: /*#__PURE__*/ l(j, {
                              className: `framer-1fa9yfn-container`,
                              layoutDependency: L,
                              layoutId: `Ep_tXIbQi-container`,
                              nodeId: `Ep_tXIbQi`,
                              rendersWithMotion: !0,
                              scopeId: `brsoltcpj`,
                              children: /*#__PURE__*/ l(z, {
                                height: `100%`,
                                id: `Ep_tXIbQi`,
                                layoutId: `Ep_tXIbQi`,
                                style: { width: `100%` },
                                variant: U(`MBdvDVfxh`),
                                width: `100%`,
                                yedMy0Mmu: B(`v37`, d) ?? `实时警报`,
                                ...H(
                                  {
                                    BD51hKaoX: { yedMy0Mmu: B(`v46`, d) ?? `浏览器/服务器架构` },
                                    bNfeNNVZ3: { yedMy0Mmu: B(`v42`, d) ?? `实时同步` },
                                    Bx_ORUAdA: { yedMy0Mmu: B(`v43`, d) ?? `集中工作台` },
                                    CNPkR3uUb: { yedMy0Mmu: B(`v44`, d) ?? `人员安全警报` },
                                    ctFaOyhBS: { yedMy0Mmu: B(`v43`, d) ?? `集中工作台` },
                                    CV0XCAi2E: { yedMy0Mmu: B(`v47`, d) ?? `丰富的组件库` },
                                    DyaOSusCi: { yedMy0Mmu: B(`v46`, d) ?? `浏览器/服务器架构` },
                                    EDOCrciLy: { yedMy0Mmu: B(`v47`, d) ?? `丰富的组件库` },
                                    f3XqqDzn2: { yedMy0Mmu: B(`v38`, d) ?? `单一真实来源` },
                                    FEcOcIs1O: { yedMy0Mmu: B(`v43`, d) ?? `集中工作台` },
                                    hkgQY47Ef: { yedMy0Mmu: B(`v38`, d) ?? `单一真实来源` },
                                    J68gW4lBF: { yedMy0Mmu: B(`v43`, d) ?? `集中工作台` },
                                    JXf8VPwBX: { yedMy0Mmu: B(`v45`, d) ?? `租户隔离` },
                                    KflfEnkIG: { yedMy0Mmu: B(`v39`, d) ?? `使用趋势分析` },
                                    Kt8mgI6eC: { yedMy0Mmu: B(`v44`, d) ?? `人员安全警报` },
                                    l31xdaWmv: { yedMy0Mmu: B(`v45`, d) ?? `租户隔离` },
                                    lX5qFxs0u: { yedMy0Mmu: B(`v38`, d) ?? `单一真实来源` },
                                    N__gaGT4d: { yedMy0Mmu: B(`v40`, d) ?? `基于区域的能源监测` },
                                    NeTGMSwMs: { yedMy0Mmu: B(`v43`, d) ?? `集中工作台` },
                                    O9kOE75vC: { yedMy0Mmu: B(`v46`, d) ?? `浏览器/服务器架构` },
                                    OcorJFG6g: { yedMy0Mmu: B(`v43`, d) ?? `集中工作台` },
                                    OURi7lzSJ: { yedMy0Mmu: B(`v41`, d) ?? `适用于复杂环境` },
                                    q2glW1kn5: { yedMy0Mmu: B(`v47`, d) ?? `丰富的组件库` },
                                    sHMZ1gY9F: { yedMy0Mmu: B(`v45`, d) ?? `租户隔离` },
                                    tLSLVSP_0: { yedMy0Mmu: B(`v40`, d) ?? `基于区域的能源监测` },
                                    ultcMSnAu: { yedMy0Mmu: B(`v42`, d) ?? `实时同步` },
                                    uLwugpM8T: { yedMy0Mmu: B(`v41`, d) ?? `适用于复杂环境` },
                                    UmHjLp5av: { yedMy0Mmu: B(`v39`, d) ?? `使用趋势分析` },
                                    wfoMpqkQ0: { yedMy0Mmu: B(`v44`, d) ?? `人员安全警报` },
                                    wnJROEut8: { yedMy0Mmu: B(`v40`, d) ?? `基于区域的能源监测` },
                                    Yj7B7QuI7: { yedMy0Mmu: B(`v42`, d) ?? `实时同步` },
                                    YKbGzH5B6: { yedMy0Mmu: B(`v41`, d) ?? `适用于复杂环境` },
                                    ZUW1AKPHI: { yedMy0Mmu: B(`v39`, d) ?? `使用趋势分析` },
                                  },
                                  D,
                                  P
                                ),
                              }),
                            }),
                          }),
                          /*#__PURE__*/ l(f.div, {
                            className: `framer-1g50l27`,
                            "data-framer-name": `产线`,
                            layoutDependency: L,
                            layoutId: `T831kABQ4`,
                            style: { backgroundColor: `rgba(0, 0, 0, 0.2)` },
                          }),
                        ],
                      }),
                      /*#__PURE__*/ u(f.div, {
                        className: `framer-15byuh`,
                        "data-framer-name": `3`,
                        layoutDependency: L,
                        layoutId: `HCznH3Yay`,
                        children: [
                          /*#__PURE__*/ l(O, {
                            height: 29,
                            width: `calc(${g?.width || `100vw`} - 72px)`,
                            y: (g?.y || 0) + 390 + ((g?.height || 200) - 470) / 2,
                            ...H(
                              {
                                CNPkR3uUb: {
                                  y: (g?.y || 0) + 521 + ((g?.height || 200) - 601) / 2,
                                },
                                ctFaOyhBS: {
                                  y: (g?.y || 0) + 389 + ((g?.height || 200) - 469) / 2,
                                },
                                CV0XCAi2E: {
                                  y: (g?.y || 0) + 389 + ((g?.height || 200) - 469) / 2,
                                },
                                f3XqqDzn2: {
                                  y: (g?.y || 0) + 389 + ((g?.height || 200) - 469) / 2,
                                },
                                KflfEnkIG: {
                                  y: (g?.y || 0) + 389 + ((g?.height || 200) - 469) / 2,
                                },
                                Kt8mgI6eC: {
                                  y: (g?.y || 0) + 522 + ((g?.height || 200) - 602) / 2,
                                },
                                N__gaGT4d: {
                                  y: (g?.y || 0) + 389 + ((g?.height || 200) - 469) / 2,
                                },
                                NeTGMSwMs: {
                                  y: (g?.y || 0) + 389 + ((g?.height || 200) - 469) / 2,
                                },
                                O9kOE75vC: {
                                  y: (g?.y || 0) + 389 + ((g?.height || 200) - 469) / 2,
                                },
                                rZbzcBEzF: {
                                  y: (g?.y || 0) + 389 + ((g?.height || 200) - 469) / 2,
                                },
                                sHMZ1gY9F: {
                                  y: (g?.y || 0) + 389 + ((g?.height || 200) - 469) / 2,
                                },
                                wfoMpqkQ0: {
                                  y: (g?.y || 0) + 522 + ((g?.height || 200) - 602) / 2,
                                },
                                Yj7B7QuI7: {
                                  y: (g?.y || 0) + 389 + ((g?.height || 200) - 469) / 2,
                                },
                                YKbGzH5B6: {
                                  y: (g?.y || 0) + 389 + ((g?.height || 200) - 469) / 2,
                                },
                              },
                              D,
                              P
                            ),
                            children: /*#__PURE__*/ l(j, {
                              className: `framer-1p744kx-container`,
                              layoutDependency: L,
                              layoutId: `yXdMSaCZW-container`,
                              nodeId: `yXdMSaCZW`,
                              rendersWithMotion: !0,
                              scopeId: `brsoltcpj`,
                              children: /*#__PURE__*/ l(z, {
                                height: `100%`,
                                id: `yXdMSaCZW`,
                                layoutId: `yXdMSaCZW`,
                                style: { width: `100%` },
                                variant: U(`MBdvDVfxh`),
                                width: `100%`,
                                yedMy0Mmu: B(`v48`, d) ?? `热图可视化`,
                                ...H(
                                  {
                                    BD51hKaoX: { yedMy0Mmu: B(`v56`, d) ?? `随时随地访问` },
                                    bNfeNNVZ3: { yedMy0Mmu: B(`v52`, d) ?? `地理围栏和紧急警报` },
                                    Bx_ORUAdA: { yedMy0Mmu: B(`v57`, d) ?? `综合资源管理` },
                                    CNPkR3uUb: { yedMy0Mmu: B(`v54`, d) ?? `危险区域的地理围栏` },
                                    ctFaOyhBS: { yedMy0Mmu: B(`v58`, d) ?? `综合管理` },
                                    CV0XCAi2E: { yedMy0Mmu: B(`v59`, d) ?? `友好的用户体验` },
                                    DyaOSusCi: { yedMy0Mmu: B(`v56`, d) ?? `随时随地访问` },
                                    EDOCrciLy: { yedMy0Mmu: B(`v59`, d) ?? `友好的用户体验` },
                                    f3XqqDzn2: { yedMy0Mmu: B(`v42`, d) ?? `实时同步` },
                                    FEcOcIs1O: { yedMy0Mmu: B(`v53`, d) ?? `统一资源管理` },
                                    hkgQY47Ef: { yedMy0Mmu: B(`v42`, d) ?? `实时同步` },
                                    J68gW4lBF: { yedMy0Mmu: B(`v57`, d) ?? `综合资源管理` },
                                    JXf8VPwBX: { yedMy0Mmu: B(`v55`, d) ?? `安全且高效` },
                                    KflfEnkIG: { yedMy0Mmu: B(`v49`, d) ?? `动态设施控制` },
                                    Kt8mgI6eC: { yedMy0Mmu: B(`v54`, d) ?? `危险区域的地理围栏` },
                                    l31xdaWmv: { yedMy0Mmu: B(`v55`, d) ?? `安全且高效` },
                                    lX5qFxs0u: { yedMy0Mmu: B(`v42`, d) ?? `实时同步` },
                                    N__gaGT4d: { yedMy0Mmu: B(`v50`, d) ?? `交互式控件` },
                                    NeTGMSwMs: { yedMy0Mmu: B(`v53`, d) ?? `统一资源管理` },
                                    O9kOE75vC: { yedMy0Mmu: B(`v56`, d) ?? `随时随地访问` },
                                    OcorJFG6g: { yedMy0Mmu: B(`v53`, d) ?? `统一资源管理` },
                                    OURi7lzSJ: { yedMy0Mmu: B(`v51`, d) ?? `多种定位方法` },
                                    q2glW1kn5: { yedMy0Mmu: B(`v59`, d) ?? `友好的用户体验` },
                                    sHMZ1gY9F: { yedMy0Mmu: B(`v55`, d) ?? `安全且高效` },
                                    tLSLVSP_0: { yedMy0Mmu: B(`v50`, d) ?? `交互式控件` },
                                    ultcMSnAu: { yedMy0Mmu: B(`v52`, d) ?? `地理围栏和紧急警报` },
                                    uLwugpM8T: { yedMy0Mmu: B(`v51`, d) ?? `多种定位方法` },
                                    UmHjLp5av: { yedMy0Mmu: B(`v49`, d) ?? `动态设施控制` },
                                    wfoMpqkQ0: { yedMy0Mmu: B(`v54`, d) ?? `危险区域的地理围栏` },
                                    wnJROEut8: { yedMy0Mmu: B(`v50`, d) ?? `交互式控件` },
                                    Yj7B7QuI7: { yedMy0Mmu: B(`v52`, d) ?? `地理围栏和紧急警报` },
                                    YKbGzH5B6: { yedMy0Mmu: B(`v51`, d) ?? `多种定位方法` },
                                    ZUW1AKPHI: { yedMy0Mmu: B(`v49`, d) ?? `动态设施控制` },
                                  },
                                  D,
                                  P
                                ),
                              }),
                            }),
                          }),
                          /*#__PURE__*/ l(f.div, {
                            className: `framer-1mgm0i3`,
                            "data-framer-name": `产线`,
                            layoutDependency: L,
                            layoutId: `Sjak4Al5L`,
                            style: { backgroundColor: `rgba(0, 0, 0, 0.2)` },
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (Re = [
        `.framer-QdHmF.framer-1ukqhno, .framer-QdHmF .framer-1ukqhno { display: block; }`,
        `.framer-QdHmF.framer-zovbpb { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 10px 40px 10px; position: relative; width: 680px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-QdHmF .framer-23vmzu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; overflow: visible; padding: 10px 10px 20px 10px; position: relative; width: 100%; }`,
        `.framer-QdHmF .framer-10fgu6l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 10px; position: relative; width: 100%; }`,
        `.framer-QdHmF .framer-1frd0ud { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 51px; z-index: 10; }`,
        `.framer-QdHmF .framer-13fzhsr, .framer-QdHmF .framer-8s2omk, .framer-QdHmF .framer-1obqcrx { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; overflow: hidden; position: relative; width: 35px; }`,
        `.framer-QdHmF .framer-abpj95, .framer-QdHmF .framer-uw74ch, .framer-QdHmF .framer-1unotrk { bottom: 1px; flex: none; left: 1px; position: absolute; right: 0px; top: 2px; }`,
        `.framer-QdHmF .framer-1j6pyee, .framer-QdHmF .framer-18hqzak, .framer-QdHmF .framer-1ej8saz { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; overflow: hidden; position: relative; width: 36px; }`,
        `.framer-QdHmF .framer-xdyyt1, .framer-QdHmF .framer-1571v9q, .framer-QdHmF .framer-1p9cl3x { bottom: 1px; flex: none; left: 1px; position: absolute; right: 1px; top: 1px; }`,
        `.framer-QdHmF .framer-lrfh95, .framer-QdHmF .framer-f5jzs0, .framer-QdHmF .framer-rzx7vb, .framer-QdHmF .framer-3n9qjb, .framer-QdHmF .framer-2e3344, .framer-QdHmF .framer-1vl8akt { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; overflow: hidden; position: relative; width: 38px; }`,
        `.framer-QdHmF .framer-1dw21f9, .framer-QdHmF .framer-1eenf5f, .framer-QdHmF .framer-14718yi { bottom: 1px; flex: none; left: 1px; position: absolute; right: 1px; top: 2px; }`,
        `.framer-QdHmF .framer-1fl4tur { flex: 1 0 0px; gap: 10px; height: 1px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-QdHmF .framer-1r3b2jo, .framer-QdHmF .framer-1y2pfgy, .framer-QdHmF .framer-1w4yzl1 { bottom: 0px; flex: none; height: 38px; left: calc(47.3684210526316% - 35px / 2); position: absolute; width: 35px; }`,
        `.framer-QdHmF .framer-1craw7 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-QdHmF .framer-mjlnhq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 10px; position: relative; width: 100%; }`,
        `.framer-QdHmF .framer-15adk3q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-QdHmF .framer-1rpc0lg { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-QdHmF .framer-10s1ayu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 26px 0px 26px; position: relative; width: 100%; }`,
        `.framer-QdHmF .framer-6ath7h, .framer-QdHmF .framer-15byuh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-QdHmF .framer-pi4jaf-container, .framer-QdHmF .framer-1fa9yfn-container, .framer-QdHmF .framer-1p744kx-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-QdHmF .framer-1qkcyb, .framer-QdHmF .framer-1g50l27, .framer-QdHmF .framer-1mgm0i3 { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }`,
        `.framer-QdHmF .framer-cvft4w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 3px 0px; position: relative; width: 100%; }`,
        `.framer-QdHmF.framer-v-701wd.framer-zovbpb, .framer-QdHmF.framer-v-1h3sd5.framer-zovbpb, .framer-QdHmF.framer-v-17n5jon.framer-zovbpb, .framer-QdHmF.framer-v-1uhxmq9.framer-zovbpb, .framer-QdHmF.framer-v-1vosiud.framer-zovbpb, .framer-QdHmF.framer-v-w8n73c.framer-zovbpb, .framer-QdHmF.framer-v-13agz9g.framer-zovbpb, .framer-QdHmF.framer-v-1ufzkin.framer-zovbpb, .framer-QdHmF.framer-v-it905l.framer-zovbpb, .framer-QdHmF.framer-v-jhw2ok.framer-zovbpb, .framer-QdHmF.framer-v-1n9rfvr.framer-zovbpb, .framer-QdHmF.framer-v-bezr87.framer-zovbpb { width: 560px; }`,
        `.framer-QdHmF.framer-v-13emn9a.framer-zovbpb, .framer-QdHmF.framer-v-18ms1sj.framer-zovbpb, .framer-QdHmF.framer-v-pl40lv.framer-zovbpb, .framer-QdHmF.framer-v-15l23be.framer-zovbpb, .framer-QdHmF.framer-v-1hoz1w.framer-zovbpb, .framer-QdHmF.framer-v-13ztx00.framer-zovbpb, .framer-QdHmF.framer-v-1330ph.framer-zovbpb, .framer-QdHmF.framer-v-1m6z246.framer-zovbpb, .framer-QdHmF.framer-v-i564be.framer-zovbpb, .framer-QdHmF.framer-v-z4zdam.framer-zovbpb, .framer-QdHmF.framer-v-1wxcpz.framer-zovbpb, .framer-QdHmF.framer-v-1pwkflh.framer-zovbpb { width: 350px; }`,
        `.framer-QdHmF.framer-v-13emn9a .framer-10fgu6l, .framer-QdHmF.framer-v-18ms1sj .framer-10fgu6l, .framer-QdHmF.framer-v-pl40lv .framer-10fgu6l, .framer-QdHmF.framer-v-15l23be .framer-10fgu6l, .framer-QdHmF.framer-v-1hoz1w .framer-10fgu6l, .framer-QdHmF.framer-v-13ztx00 .framer-10fgu6l, .framer-QdHmF.framer-v-1330ph .framer-10fgu6l, .framer-QdHmF.framer-v-1m6z246 .framer-10fgu6l, .framer-QdHmF.framer-v-i564be .framer-10fgu6l, .framer-QdHmF.framer-v-z4zdam .framer-10fgu6l, .framer-QdHmF.framer-v-1wxcpz .framer-10fgu6l, .framer-QdHmF.framer-v-1pwkflh .framer-10fgu6l { gap: 16px; }`,
        `.framer-QdHmF.framer-v-13emn9a .framer-1frd0ud, .framer-QdHmF.framer-v-1hoz1w .framer-1frd0ud, .framer-QdHmF.framer-v-i564be .framer-1frd0ud { width: 50px; }`,
        `.framer-QdHmF.framer-v-g7m8lt .framer-1frd0ud, .framer-QdHmF.framer-v-1h3sd5 .framer-1frd0ud, .framer-QdHmF.framer-v-u2m36x .framer-1frd0ud, .framer-QdHmF.framer-v-17n5jon .framer-1frd0ud, .framer-QdHmF.framer-v-fv4ces .framer-1frd0ud, .framer-QdHmF.framer-v-1uhxmq9 .framer-1frd0ud, .framer-QdHmF.framer-v-3qb4og .framer-1frd0ud, .framer-QdHmF.framer-v-w8n73c .framer-1frd0ud, .framer-QdHmF.framer-v-xifqod .framer-1frd0ud, .framer-QdHmF.framer-v-13agz9g .framer-1frd0ud, .framer-QdHmF.framer-v-1k3v71o .framer-1frd0ud, .framer-QdHmF.framer-v-1ufzkin .framer-1frd0ud, .framer-QdHmF.framer-v-3bp508 .framer-1frd0ud, .framer-QdHmF.framer-v-jhw2ok .framer-1frd0ud, .framer-QdHmF.framer-v-10vg4u4 .framer-1frd0ud, .framer-QdHmF.framer-v-1n9rfvr .framer-1frd0ud, .framer-QdHmF.framer-v-4axeir .framer-1frd0ud, .framer-QdHmF.framer-v-bezr87 .framer-1frd0ud { padding: 6px; }`,
        `.framer-QdHmF.framer-v-18ms1sj .framer-1frd0ud, .framer-QdHmF.framer-v-pl40lv .framer-1frd0ud, .framer-QdHmF.framer-v-15l23be .framer-1frd0ud, .framer-QdHmF.framer-v-13ztx00 .framer-1frd0ud, .framer-QdHmF.framer-v-1330ph .framer-1frd0ud, .framer-QdHmF.framer-v-1m6z246 .framer-1frd0ud, .framer-QdHmF.framer-v-z4zdam .framer-1frd0ud, .framer-QdHmF.framer-v-1wxcpz .framer-1frd0ud, .framer-QdHmF.framer-v-1pwkflh .framer-1frd0ud { padding: 6px; width: 50px; }`,
        ...R,
        ...fe,
        `.framer-QdHmF[data-border="true"]::after, .framer-QdHmF [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (W = T(Le, Re, `framer-QdHmF`)),
      (W.displayName = `Card/Service Card 1`),
      (W.defaultProps = { height: 491, width: 680 }),
      x(W, {
        variant: {
          options:
            /* @__PURE__ */ `ry3s572Yd.LzczUMaQn.rZbzcBEzF.hkgQY47Ef.lX5qFxs0u.f3XqqDzn2.UmHjLp5av.ZUW1AKPHI.KflfEnkIG.tLSLVSP_0.wnJROEut8.N__gaGT4d.OURi7lzSJ.uLwugpM8T.YKbGzH5B6.ultcMSnAu.bNfeNNVZ3.Yj7B7QuI7.FEcOcIs1O.OcorJFG6g.NeTGMSwMs.Kt8mgI6eC.wfoMpqkQ0.CNPkR3uUb.JXf8VPwBX.l31xdaWmv.sHMZ1gY9F.BD51hKaoX.DyaOSusCi.O9kOE75vC.Bx_ORUAdA.J68gW4lBF.ctFaOyhBS.EDOCrciLy.q2glW1kn5.CV0XCAi2E`.split(
              `.`
            ),
          optionTitles:
            /* @__PURE__ */ `Card 1.Card 1 Mini.Card 1 Mobile.Card 2.Card 2 Mini.Card 2 Mobile.Card 3.Card 3 Mini.Card 3 Mobile.Card 4.Card 4 Mini.Card 4 Mobile.IMI 1.IMI 1 mini.IMI 1 mobile.IMI 2.IMI 2 mini.IMI 2 mobile.IMI 3.IMI 3 mini.IMI 3 mobile.IMI 4.IMI 4 mini.IMI 4 mobile.Indorama 1.Indorama 1 mini.Indorama 1 mobile.Indorama 2.Indorama 2 mini.Indorama 2 mobile.Indorama 3.Indorama 3 mini.Indorama 3 mobile.Indorama 4.Indorama 4 mini.Indorama 4 mobile`.split(
              `.`
            ),
          title: `Variant`,
          type: N.Enum,
        },
        p6WcpPP_7: { title: `Click`, type: N.EventHandler },
      }),
      A(
        W,
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
          ...De,
          ..._(ae),
          ..._(pe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (W.loader = { load: (e, t) => M([() => v(z, {}, t)], t) }));
  }))();
}
function G(e, t) {
  for (; t; ) {
    let n = He[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function Be(e) {
  let t = [];
  for (; e; ) {
    let n = He[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function Ve(e) {
  let t = Be(e);
  if (t) throw t;
}
var He;
function Ue() {
  return (Ue = e(() => {
    (E(), (He = { AYmst8Nt3: new P(() => import("./DqcjzCV75-0.DpigKUde.mjs?v=20261116-migration-v2")) }));
  }))();
}
function K(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var We, Ge, Ke, qe, Je, q, Ye, Xe, Ze, Qe, $e, et, tt, J;
function nt() {
  return (nt = e(() => {
    (s(),
      E(),
      p(),
      r(),
      ge(),
      ne(),
      se(),
      Ue(),
      (We = {
        BpsnDco1O: { hover: !0 },
        dRQPYVOug: { hover: !0 },
        GOSwbfaJQ: { hover: !0 },
        JqyganigR: { hover: !0 },
        KLyaXb7K9: { hover: !0 },
        QiQgm4bOg: { hover: !0 },
        UxpJQbg61: { hover: !0 },
      }),
      (Ge =
        /* @__PURE__ */ `KLyaXb7K9.dRQPYVOug.BpsnDco1O.xZVv9tNbX.N9GUwIWPD.cD9rLKfQn.Rxt7utfM3.MSJHF2QXE.HaNUFLKvv.UxpJQbg61.QiQgm4bOg.JqyganigR.GOSwbfaJQ.DlxMkMYXm.a32v6idmv.wRQtOZ3F9.RydWzkDLX.y7M3CjmnM.N9UZlDfsa.uiiU6jsyt.MaFEpU2zD.phu3XUKqQ.Pj420GME3.v7yUg2HyE.TBYylgvy8.DYY5M_Pj0.k6_oC3T0N.iiKGOfy_S.agqOb6cmW.yfGjL1R6Q.oVfSeqUz7.JUEOuqkAM.FCBz9z5cr.o5vUm1wJC.yW_VqnuVb.vmMayCvYy.UfCEsKHme.kaVVTKBYG.w5bPZnqfl.Vxbf2Jvhy.YWLOn7enl.p132rZ96c`.split(
          `.`
        )),
      (Ke = `framer-4QMRN`),
      (qe = {
        a32v6idmv: `framer-v-741hx`,
        agqOb6cmW: `framer-v-1u5h9bc`,
        BpsnDco1O: `framer-v-5p2n0x`,
        cD9rLKfQn: `framer-v-16hagy6`,
        DlxMkMYXm: `framer-v-1qhlfow`,
        dRQPYVOug: `framer-v-1wmjh7j`,
        DYY5M_Pj0: `framer-v-1ps462c`,
        FCBz9z5cr: `framer-v-1udi8zk`,
        GOSwbfaJQ: `framer-v-1fhkzb4`,
        HaNUFLKvv: `framer-v-1yf5lcb`,
        iiKGOfy_S: `framer-v-1iekfoq`,
        JqyganigR: `framer-v-xtf4i9`,
        JUEOuqkAM: `framer-v-14vs6cd`,
        k6_oC3T0N: `framer-v-fs9hrc`,
        kaVVTKBYG: `framer-v-1e9u3hq`,
        KLyaXb7K9: `framer-v-ck5upm`,
        MaFEpU2zD: `framer-v-1e43gvi`,
        MSJHF2QXE: `framer-v-eo9o2t`,
        N9GUwIWPD: `framer-v-5ns396`,
        N9UZlDfsa: `framer-v-88m7g6`,
        o5vUm1wJC: `framer-v-rpn7kp`,
        oVfSeqUz7: `framer-v-vrige8`,
        p132rZ96c: `framer-v-4vfxyl`,
        phu3XUKqQ: `framer-v-2uy7il`,
        Pj420GME3: `framer-v-mbj4wm`,
        QiQgm4bOg: `framer-v-1a9330s`,
        Rxt7utfM3: `framer-v-12jzz39`,
        RydWzkDLX: `framer-v-nbpqj`,
        TBYylgvy8: `framer-v-13lzlvi`,
        UfCEsKHme: `framer-v-akewxq`,
        uiiU6jsyt: `framer-v-11rba15`,
        UxpJQbg61: `framer-v-8bqjf7`,
        v7yUg2HyE: `framer-v-15gssx0`,
        vmMayCvYy: `framer-v-1psdm58`,
        Vxbf2Jvhy: `framer-v-er1sbv`,
        w5bPZnqfl: `framer-v-1rlofzs`,
        wRQtOZ3F9: `framer-v-d5fdfc`,
        xZVv9tNbX: `framer-v-6ar5mg`,
        y7M3CjmnM: `framer-v-1i8shzg`,
        yfGjL1R6Q: `framer-v-xttd4f`,
        yW_VqnuVb: `framer-v-99hwwu`,
        YWLOn7enl: `framer-v-ks9nhz`,
      }),
      (Je = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (q = (e, t) => `translateY(-50%) ${t}`),
      (Ye = ({ value: e, children: t }) => {
        let r = i(d),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ l(d.Provider, { value: o, children: t });
      }),
      (Xe = {
        "aramco 1": `UxpJQbg61`,
        "aramco 2": `QiQgm4bOg`,
        "aramco 3": `JqyganigR`,
        "aramco 4": `GOSwbfaJQ`,
        "IMI 1": `KLyaXb7K9`,
        "IMI 2": `dRQPYVOug`,
        "IMI 3": `BpsnDco1O`,
        "Indorama 1 mini": `DYY5M_Pj0`,
        "Indorama 1 mobile": `agqOb6cmW`,
        "Indorama 1": `phu3XUKqQ`,
        "Indorama 2 mini": `k6_oC3T0N`,
        "Indorama 2 mobile": `yfGjL1R6Q`,
        "Indorama 2": `Pj420GME3`,
        "Indorama 3 mini": `iiKGOfy_S`,
        "Indorama 3 mobile": `oVfSeqUz7`,
        "Indorama 3": `v7yUg2HyE`,
        "Indorama 4 mini": `FCBz9z5cr`,
        "Indorama 4 mobile": `JUEOuqkAM`,
        "Indorama 4": `TBYylgvy8`,
        "pho aramco 1": `RydWzkDLX`,
        "pho aramco 2": `y7M3CjmnM`,
        "pho aramco 3": `N9UZlDfsa`,
        "pho aramco 4": `uiiU6jsyt`,
        "spike 1 mini": `UfCEsKHme`,
        "spike 1 mobile": `Vxbf2Jvhy`,
        "spike 2 mini": `kaVVTKBYG`,
        "spike 2 mobile": `YWLOn7enl`,
        "spike 2": `yW_VqnuVb`,
        "spike 3 mini": `w5bPZnqfl`,
        "spike 3 mobile": `p132rZ96c`,
        "spike 3": `vmMayCvYy`,
        "tab aramco 1": `DlxMkMYXm`,
        "tab aramco 2": `a32v6idmv`,
        "tab aramco 3": `wRQtOZ3F9`,
        "tab aramco 4": `MaFEpU2zD`,
        "Variant 4": `xZVv9tNbX`,
        "Variant 5": `N9GUwIWPD`,
        "Variant 6": `cD9rLKfQn`,
        "Variant 7": `Rxt7utfM3`,
        "Variant 8": `MSJHF2QXE`,
        "Variant 9": `HaNUFLKvv`,
        spike: `o5vUm1wJC`,
      }),
      (Ze = f.create(a)),
      (Qe = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Xe[r.variant] ?? r.variant ?? `KLyaXb7K9`,
      })),
      ($e = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (et = /*#__PURE__*/ c(function (e, n) {
        let r = o(null),
          i = n ?? r,
          s = t(),
          { activeLocale: c, contentLocale: d, setLocale: p } = F();
        k();
        let { style: g, className: _, layoutId: v, variant: y, ...b } = Qe(e),
          {
            baseVariant: x,
            classNames: T,
            clearLoadingGesture: E,
            gestureHandlers: D,
            gestureVariant: O,
            isLoading: ee,
            setGestureState: te,
            setVariant: A,
            variants: j,
          } = S({
            cycleOrder: Ge,
            defaultVariant: `KLyaXb7K9`,
            enabledGestures: We,
            ref: i,
            variant: y,
            variantClassNames: qe,
          }),
          M = $e(e, j),
          N = w(Ke, ue, ie, ye),
          P = () => !![`yW_VqnuVb`, `kaVVTKBYG`].includes(x),
          ne = () => x === `k6_oC3T0N`,
          I = () => x === `a32v6idmv`,
          re = () =>
            !(
              [
                `dRQPYVOug-hover`,
                `BpsnDco1O-hover`,
                `UxpJQbg61-hover`,
                `QiQgm4bOg-hover`,
                `JqyganigR-hover`,
                `GOSwbfaJQ-hover`,
              ].includes(O) ||
              `dRQPYVOug.BpsnDco1O.N9GUwIWPD.cD9rLKfQn.HaNUFLKvv.UxpJQbg61.QiQgm4bOg.JqyganigR.GOSwbfaJQ.DlxMkMYXm.a32v6idmv.wRQtOZ3F9.RydWzkDLX.y7M3CjmnM.N9UZlDfsa.uiiU6jsyt.MaFEpU2zD.phu3XUKqQ.Pj420GME3.v7yUg2HyE.TBYylgvy8.DYY5M_Pj0.k6_oC3T0N.iiKGOfy_S.agqOb6cmW.yfGjL1R6Q.oVfSeqUz7.JUEOuqkAM.FCBz9z5cr.o5vUm1wJC.yW_VqnuVb.vmMayCvYy.UfCEsKHme.kaVVTKBYG.w5bPZnqfl.Vxbf2Jvhy.YWLOn7enl.p132rZ96c`
                .split/* @__PURE__ */ (`.`)
                .includes(x)
            ),
          L = () => x === `RydWzkDLX`,
          R = () => x === `DlxMkMYXm`,
          ae = () => O === `UxpJQbg61-hover` || x === `UxpJQbg61`,
          oe = () => ![`Vxbf2Jvhy`, `p132rZ96c`].includes(x),
          se = () =>
            ![
              `Rxt7utfM3`,
              `MSJHF2QXE`,
              `HaNUFLKvv`,
              `RydWzkDLX`,
              `y7M3CjmnM`,
              `N9UZlDfsa`,
              `uiiU6jsyt`,
              `agqOb6cmW`,
              `yfGjL1R6Q`,
              `oVfSeqUz7`,
              `JUEOuqkAM`,
              `YWLOn7enl`,
            ].includes(x);
        Ve(c);
        let ce = () => O === `dRQPYVOug-hover` || x === `dRQPYVOug`,
          le = () => x === `y7M3CjmnM`,
          de = () => O === `QiQgm4bOg-hover` || x === `QiQgm4bOg`,
          fe = () => O === `BpsnDco1O-hover` || x === `BpsnDco1O`,
          pe = () => !![`TBYylgvy8`, `JUEOuqkAM`, `FCBz9z5cr`].includes(x),
          me = () => ![`TBYylgvy8`, `JUEOuqkAM`, `FCBz9z5cr`].includes(x),
          z = () => x === `uiiU6jsyt`,
          he = () => x === `MaFEpU2zD`,
          ge = () => O === `GOSwbfaJQ-hover` || x === `GOSwbfaJQ`,
          _e = () => x === `N9UZlDfsa`,
          ve = () => x === `wRQtOZ3F9`,
          be = () => O === `JqyganigR-hover` || x === `JqyganigR`,
          xe = () => x === `N9GUwIWPD`,
          Se = () => x === `cD9rLKfQn`,
          Ce = () =>
            !![
              `Rxt7utfM3`,
              `MSJHF2QXE`,
              `HaNUFLKvv`,
              `RydWzkDLX`,
              `y7M3CjmnM`,
              `N9UZlDfsa`,
              `uiiU6jsyt`,
              `agqOb6cmW`,
              `yfGjL1R6Q`,
              `oVfSeqUz7`,
              `JUEOuqkAM`,
              `Vxbf2Jvhy`,
              `YWLOn7enl`,
              `p132rZ96c`,
            ].includes(x),
          B = () => x === `HaNUFLKvv`,
          we = () => x === `phu3XUKqQ`,
          Te = () => x === `kaVVTKBYG`,
          V = () => x !== `kaVVTKBYG`,
          Ee = () => x === `Pj420GME3`,
          H = () => x === `v7yUg2HyE`,
          De = () => !![`vmMayCvYy`, `w5bPZnqfl`, `p132rZ96c`].includes(x),
          Oe = () => x === `DYY5M_Pj0`,
          ke = () => x === `iiKGOfy_S`,
          Ae = () => x === `Vxbf2Jvhy`,
          je = () => !![`yfGjL1R6Q`, `YWLOn7enl`].includes(x),
          U = () => x !== `yfGjL1R6Q`,
          Me = () => x !== `YWLOn7enl`,
          Ne = () => !![`oVfSeqUz7`, `p132rZ96c`].includes(x),
          Pe = () => x !== `p132rZ96c`,
          Fe = () => x === `UfCEsKHme`,
          Ie = () => x === `o5vUm1wJC`,
          Le = () => x === `agqOb6cmW`;
        return /*#__PURE__*/ l(m, {
          id: v ?? s,
          children: /*#__PURE__*/ l(Ze, {
            animate: j,
            initial: !1,
            children: /*#__PURE__*/ l(Ye, {
              value: Je,
              children: /*#__PURE__*/ l(f.div, {
                ...b,
                ...D,
                className: w(N, `framer-ck5upm`, _, T),
                "data-border": !0,
                "data-framer-name": `IMI 1`,
                layoutDependency: M,
                layoutId: `KLyaXb7K9`,
                ref: i,
                style: {
                  "--border-bottom-width": `1px`,
                  "--border-color": `rgba(0, 0, 0, 0.2)`,
                  "--border-left-width": `1px`,
                  "--border-right-width": `1px`,
                  "--border-style": `solid`,
                  "--border-top-width": `1px`,
                  backgroundColor: `rgb(255, 255, 255)`,
                  borderBottomLeftRadius: 3,
                  borderBottomRightRadius: 3,
                  borderTopLeftRadius: 3,
                  borderTopRightRadius: 3,
                  ...g,
                },
                variants: {
                  "BpsnDco1O-hover": { "--border-color": `rgb(0, 0, 0)` },
                  "dRQPYVOug-hover": { "--border-color": `rgb(0, 0, 0)` },
                  "GOSwbfaJQ-hover": { "--border-color": `rgb(0, 0, 0)` },
                  "JqyganigR-hover": { "--border-color": `rgb(0, 0, 0)` },
                  "KLyaXb7K9-hover": { "--border-color": `rgb(0, 0, 0)` },
                  "QiQgm4bOg-hover": { "--border-color": `rgb(0, 0, 0)` },
                  "UxpJQbg61-hover": { "--border-color": `rgb(0, 0, 0)` },
                  kaVVTKBYG: {
                    "--border-bottom-width": `0px`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-top-width": `0px`,
                    backgroundColor: `rgba(178, 237, 29, 0.2)`,
                  },
                  o5vUm1wJC: {
                    "--border-bottom-width": `0px`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-top-width": `0px`,
                    backgroundColor: `rgba(178, 237, 29, 0.4)`,
                  },
                  p132rZ96c: {
                    "--border-bottom-width": `0px`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-top-width": `0px`,
                    backgroundColor: `var(--token-0b09fdc4-bae8-43f3-bba4-8e8677e2b631, rgb(244, 244, 244))`,
                  },
                  UfCEsKHme: {
                    "--border-bottom-width": `0px`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-top-width": `0px`,
                    backgroundColor: `rgba(178, 237, 29, 0.4)`,
                  },
                  vmMayCvYy: {
                    "--border-bottom-width": `0px`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-top-width": `0px`,
                    backgroundColor: `var(--token-0b09fdc4-bae8-43f3-bba4-8e8677e2b631, rgb(244, 244, 244))`,
                  },
                  Vxbf2Jvhy: {
                    "--border-bottom-width": `0px`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-top-width": `0px`,
                    backgroundColor: `rgba(178, 237, 29, 0.4)`,
                  },
                  w5bPZnqfl: {
                    "--border-bottom-width": `0px`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-top-width": `0px`,
                    backgroundColor: `var(--token-0b09fdc4-bae8-43f3-bba4-8e8677e2b631, rgb(244, 244, 244))`,
                  },
                  yW_VqnuVb: {
                    "--border-bottom-width": `0px`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-top-width": `0px`,
                    backgroundColor: `rgba(178, 237, 29, 0.2)`,
                  },
                  YWLOn7enl: {
                    "--border-bottom-width": `0px`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-top-width": `0px`,
                    backgroundColor: `rgba(178, 237, 29, 0.2)`,
                  },
                },
                ...K(
                  {
                    a32v6idmv: { "data-framer-name": `tab aramco 2` },
                    agqOb6cmW: { "data-framer-name": `Indorama 1 mobile` },
                    BpsnDco1O: { "data-framer-name": `IMI 3` },
                    cD9rLKfQn: { "data-framer-name": `Variant 6` },
                    DlxMkMYXm: { "data-framer-name": `tab aramco 1` },
                    dRQPYVOug: { "data-framer-name": `IMI 2` },
                    DYY5M_Pj0: { "data-framer-name": `Indorama 1 mini` },
                    FCBz9z5cr: { "data-framer-name": `Indorama 4 mini` },
                    GOSwbfaJQ: { "data-framer-name": `aramco 4` },
                    HaNUFLKvv: { "data-framer-name": `Variant 9` },
                    iiKGOfy_S: { "data-framer-name": `Indorama 3 mini` },
                    JqyganigR: { "data-framer-name": `aramco 3` },
                    JUEOuqkAM: { "data-framer-name": `Indorama 4 mobile` },
                    k6_oC3T0N: { "data-framer-name": `Indorama 2 mini` },
                    kaVVTKBYG: { "data-framer-name": `spike 2 mini` },
                    MaFEpU2zD: { "data-framer-name": `tab aramco 4` },
                    MSJHF2QXE: { "data-framer-name": `Variant 8` },
                    N9GUwIWPD: { "data-framer-name": `Variant 5` },
                    N9UZlDfsa: { "data-framer-name": `pho aramco 3` },
                    o5vUm1wJC: { "data-framer-name": `spike` },
                    oVfSeqUz7: { "data-framer-name": `Indorama 3 mobile` },
                    p132rZ96c: { "data-framer-name": `spike 3 mobile` },
                    phu3XUKqQ: { "data-framer-name": `Indorama 1` },
                    Pj420GME3: { "data-framer-name": `Indorama 2` },
                    QiQgm4bOg: { "data-framer-name": `aramco 2` },
                    Rxt7utfM3: { "data-framer-name": `Variant 7` },
                    RydWzkDLX: { "data-framer-name": `pho aramco 1` },
                    TBYylgvy8: { "data-framer-name": `Indorama 4` },
                    UfCEsKHme: { "data-framer-name": `spike 1 mini` },
                    uiiU6jsyt: { "data-framer-name": `pho aramco 4` },
                    UxpJQbg61: { "data-framer-name": `aramco 1` },
                    v7yUg2HyE: { "data-framer-name": `Indorama 3` },
                    vmMayCvYy: { "data-framer-name": `spike 3` },
                    Vxbf2Jvhy: { "data-framer-name": `spike 1 mobile` },
                    w5bPZnqfl: { "data-framer-name": `spike 3 mini` },
                    wRQtOZ3F9: { "data-framer-name": `tab aramco 3` },
                    xZVv9tNbX: { "data-framer-name": `Variant 4` },
                    y7M3CjmnM: { "data-framer-name": `pho aramco 2` },
                    yfGjL1R6Q: { "data-framer-name": `Indorama 2 mobile` },
                    yW_VqnuVb: { "data-framer-name": `spike 2` },
                    YWLOn7enl: { "data-framer-name": `spike 2 mobile` },
                  },
                  x,
                  O
                ),
                children: /*#__PURE__*/ u(f.div, {
                  className: `framer-8g2e54`,
                  layoutDependency: M,
                  layoutId: `i3XlFgjSr`,
                  children: [
                    P() &&
                      /*#__PURE__*/ l(C, {
                        className: `framer-1rr31fj`,
                        "data-framer-name": `Bot`,
                        fill: `black`,
                        intrinsicHeight: 18,
                        intrinsicWidth: 18,
                        layoutDependency: M,
                        layoutId: `rXNKJr9ST`,
                        svg: `<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 5.625h-1.125V6.75h1.125V5.625Zm-3.375 0H6.75V6.75h1.125V5.625Z" fill="#73B200"/><path d="M14.625 11.25h-2.813v-1.125h.563A1.126 1.126 0 0 0 13.5 9V6.75h1.125V5.625H13.5V4.5a1.126 1.126 0 0 0-1.125-1.125H11.25v-2.25h-1.125v2.25h-2.25v-2.25H6.75v2.25H5.625A1.126 1.126 0 0 0 4.5 4.5v1.125H3.375V6.75H4.5V9a1.126 1.126 0 0 0 1.125 1.125h.563v1.125H3.374a1.126 1.126 0 0 0-1.125 1.125v4.5h1.125v-4.5h11.25v4.5h1.125v-4.5a1.126 1.126 0 0 0-1.125-1.125Zm-9-6.75h6.75V9h-6.75V4.5Zm1.688 5.625h3.375v1.125H7.312v-1.125Z" fill="#73B200"/></svg>`,
                        withExternalLayout: !0,
                      }),
                    ne() &&
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-bszf87`,
                        "data-framer-name": `Group--access`,
                        layoutDependency: M,
                        layoutId: `O9mgMqLLI`,
                        style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                        children: /*#__PURE__*/ l(C, {
                          className: `framer-1z10pc8`,
                          "data-framer-name": `Vector`,
                          layout: `position`,
                          layoutDependency: M,
                          layoutId: `uz6UhsMOm`,
                          opacity: 1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 78 78"><path d="M 16.714 47.357 L 11.143 47.357 L 11.143 41.786 C 11.145 39.57 12.027 37.446 13.593 35.879 C 15.16 34.312 17.284 33.431 19.5 33.429 L 33.429 33.429 L 33.429 39 L 19.5 39 C 18.761 39.001 18.053 39.295 17.531 39.817 C 17.009 40.339 16.715 41.047 16.714 41.786 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 27.857 30.643 C 25.653 30.643 23.499 29.989 21.667 28.765 C 19.834 27.541 18.406 25.8 17.562 23.764 C 16.719 21.728 16.498 19.488 16.928 17.326 C 17.358 15.165 18.42 13.179 19.978 11.621 C 21.536 10.062 23.522 9.001 25.683 8.571 C 27.845 8.141 30.085 8.362 32.121 9.205 C 34.157 10.049 35.898 11.477 37.122 13.309 C 38.346 15.142 39 17.296 39 19.5 C 38.997 22.454 37.822 25.287 35.733 27.376 C 33.644 29.464 30.811 30.64 27.857 30.643 Z M 27.857 13.929 C 26.755 13.929 25.678 14.255 24.762 14.868 C 23.846 15.48 23.132 16.35 22.71 17.368 C 22.288 18.386 22.178 19.506 22.393 20.587 C 22.608 21.668 23.138 22.66 23.918 23.44 C 24.697 24.219 25.689 24.749 26.77 24.964 C 27.851 25.179 28.971 25.069 29.989 24.647 C 31.007 24.226 31.877 23.512 32.49 22.595 C 33.102 21.679 33.429 20.602 33.429 19.5 C 33.427 18.023 32.84 16.607 31.795 15.562 C 30.75 14.518 29.334 13.93 27.857 13.929 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 50.143 50.143 C 47.939 50.143 45.785 49.489 43.952 48.265 C 42.12 47.041 40.692 45.3 39.848 43.264 C 39.005 41.228 38.784 38.988 39.214 36.826 C 39.644 34.665 40.705 32.679 42.264 31.121 C 43.822 29.562 45.808 28.501 47.969 28.071 C 50.13 27.641 52.371 27.862 54.407 28.705 C 56.443 29.549 58.184 30.977 59.408 32.809 C 60.632 34.642 61.286 36.796 61.286 39 C 61.282 41.954 60.107 44.787 58.019 46.876 C 55.929 48.964 53.097 50.14 50.143 50.143 Z M 50.143 33.429 C 49.041 33.429 47.964 33.755 47.048 34.368 C 46.131 34.98 45.417 35.85 44.996 36.868 C 44.574 37.886 44.464 39.006 44.678 40.087 C 44.893 41.168 45.424 42.16 46.203 42.94 C 46.982 43.719 47.975 44.249 49.056 44.464 C 50.137 44.679 51.257 44.569 52.275 44.147 C 53.293 43.726 54.163 43.012 54.775 42.095 C 55.388 41.179 55.714 40.102 55.714 39 C 55.713 37.523 55.125 36.107 54.081 35.062 C 53.036 34.018 51.62 33.43 50.143 33.429 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 66.857 66.857 L 61.286 66.857 L 61.286 61.286 C 61.285 60.547 60.991 59.839 60.469 59.317 C 59.947 58.795 59.239 58.501 58.5 58.5 L 41.786 58.5 C 41.047 58.501 40.339 58.795 39.817 59.317 C 39.295 59.839 39.001 60.547 39 61.286 L 39 66.857 L 33.429 66.857 L 33.429 61.286 C 33.431 59.07 34.312 56.946 35.879 55.379 C 37.446 53.812 39.57 52.931 41.786 52.929 L 58.5 52.929 C 60.716 52.931 62.84 53.812 64.407 55.379 C 65.974 56.946 66.855 59.07 66.857 61.286 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 16.714 78 L 5.571 78 C 4.094 77.998 2.678 77.411 1.634 76.366 C 0.589 75.322 0.002 73.906 0 72.429 L 0 5.571 C 0.002 4.094 0.589 2.678 1.634 1.634 C 2.678 0.589 4.094 0.002 5.571 0 L 16.714 0 L 16.714 5.571 L 5.571 5.571 L 5.571 72.429 L 16.714 72.429 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 72.429 78 L 61.286 78 L 61.286 72.429 L 72.429 72.429 L 72.429 5.571 L 61.286 5.571 L 61.286 0 L 72.429 0 C 73.906 0.002 75.322 0.589 76.366 1.634 C 77.411 2.678 77.998 4.094 78 5.571 L 78 72.429 C 77.998 73.906 77.411 75.322 76.366 76.366 C 75.322 77.411 73.906 77.998 72.429 78 Z" fill="rgba(5, 11, 20, 0.4)"></path></svg>`,
                          svgContentId: 10206140854,
                          withExternalLayout: !0,
                        }),
                      }),
                    I() &&
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-18yay91`,
                        "data-framer-name": `Building--insights-1`,
                        layoutDependency: M,
                        layoutId: `VQWeJlrQ1`,
                        style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                        children: /*#__PURE__*/ l(C, {
                          className: `framer-g3v2dp`,
                          "data-framer-name": `Vector`,
                          fill: `rgba(0,0,0,1)`,
                          intrinsicHeight: 36,
                          intrinsicWidth: 36,
                          layoutDependency: M,
                          layoutId: `eLvlBfzPD`,
                          svg: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33 0.5H18C17.3372 0.500662 16.7017 0.764266 16.233 1.23296C15.7643 1.70166 15.5007 2.33716 15.5 3V15.5H3C2.33716 15.5007 1.70166 15.7643 1.23296 16.233C0.764266 16.7017 0.500662 17.3372 0.5 18V35.5H35.5V3C35.4992 2.33719 35.2356 1.70175 34.7669 1.23307C34.2983 0.764397 33.6628 0.500761 33 0.5ZM9.25 33V24.25H14.25V33H9.25ZM33 33H16.75V23C16.75 22.6685 16.6183 22.3505 16.3839 22.1161C16.1495 21.8817 15.8315 21.75 15.5 21.75H8C7.66848 21.75 7.35054 21.8817 7.11612 22.1161C6.8817 22.3505 6.75 22.6685 6.75 23V33H3V18H18V3H33V33Z" fill="black" fill-opacity="0.4"/>
<path d="M23 8H20.5V10.5H23V8Z" fill="black" fill-opacity="0.4"/>
<path d="M30.5 8H28V10.5H30.5V8Z" fill="black" fill-opacity="0.4"/>
<path d="M23 15.5H20.5V18H23V15.5Z" fill="black" fill-opacity="0.4"/>
<path d="M30.5 15.5H28V18H30.5V15.5Z" fill="black" fill-opacity="0.4"/>
<path d="M23 22.9995H20.5V25.4995H23V22.9995Z" fill="black" fill-opacity="0.4"/>
<path d="M30.5 22.9995H28V25.4995H30.5V22.9995Z" fill="black" fill-opacity="0.4"/>
<path d="M9.25 13H6.75C6.75195 11.343 7.41106 9.75442 8.58274 8.58274C9.75442 7.41106 11.343 6.75195 13 6.75V9.25C12.0058 9.25109 11.0526 9.64653 10.3496 10.3496C9.64653 11.0526 9.25109 12.0058 9.25 13Z" fill="black" fill-opacity="0.4"/>
<path d="M3 13H0.5C0.503772 9.68595 1.82194 6.50872 4.16533 4.16533C6.50872 1.82194 9.68595 0.503772 13 0.5V3C10.3488 3.00304 7.807 4.05759 5.93229 5.93229C4.05759 7.807 3.00304 10.3488 3 13Z" fill="black" fill-opacity="0.4"/>
</svg>
`,
                          withExternalLayout: !0,
                        }),
                      }),
                    re() &&
                      /*#__PURE__*/ l(C, {
                        className: `framer-16omjix`,
                        layout: `position`,
                        layoutDependency: M,
                        layoutId: `zu4YzEEtR-shape`,
                        opacity: 1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 80"><path d="M 26.861 25.941 C 28.198 25.941 29.288 24.862 29.288 23.535 L 29.288 22.424 L 57.608 22.424 L 57.608 26.49 L 56.987 26.49 C 56.519 26.472 56.079 26.712 55.84 27.115 C 55.601 27.518 55.601 28.019 55.84 28.422 C 56.079 28.824 56.519 29.064 56.987 29.047 L 57.608 29.047 L 57.608 32.828 C 57.608 33.512 58.149 34.078 58.834 34.106 C 59.191 34.119 59.51 34.377 59.609 34.723 C 59.711 35.091 59.559 35.483 59.235 35.686 C 58.934 35.896 58.531 35.885 58.241 35.659 C 58.067 35.532 57.945 35.346 57.899 35.135 C 57.77 34.442 57.105 33.984 56.412 34.112 C 55.719 34.241 55.261 34.907 55.389 35.6 C 55.537 36.41 55.993 37.146 56.675 37.681 C 57.274 38.143 58.009 38.393 58.766 38.394 C 59.427 38.394 60.089 38.199 60.661 37.811 C 61.898 36.997 62.468 35.478 62.074 34.051 C 61.803 33.063 61.102 32.249 60.165 31.834 L 60.165 29.047 L 60.785 29.047 C 61.494 29.047 62.063 28.475 62.063 27.768 C 62.063 27.062 61.494 26.49 60.785 26.49 L 60.165 26.49 L 60.165 22.424 L 65.809 22.424 C 66.516 22.424 67.088 21.852 67.088 21.146 L 67.088 14.922 C 67.087 14.837 67.079 14.752 67.064 14.668 C 67.057 14.638 67.047 14.607 67.037 14.572 C 67.023 14.524 67.012 14.477 66.992 14.429 C 66.975 14.387 66.951 14.353 66.934 14.315 C 66.916 14.281 66.899 14.244 66.876 14.209 C 66.83 14.14 66.777 14.076 66.718 14.017 C 66.714 14.017 66.714 14.014 66.714 14.014 C 66.655 13.954 66.59 13.9 66.519 13.853 C 66.492 13.836 66.461 13.821 66.43 13.805 C 66.386 13.781 66.345 13.753 66.3 13.736 C 66.262 13.719 66.221 13.712 66.183 13.701 C 66.143 13.688 66.102 13.676 66.06 13.664 C 65.989 13.651 65.916 13.644 65.844 13.643 C 65.831 13.643 65.823 13.64 65.813 13.64 L 59.081 13.64 L 16.684 0.542 C 16.671 0.535 16.657 0.539 16.64 0.532 C 16.539 0.507 16.435 0.492 16.331 0.487 C 16.32 0.487 16.313 0.484 16.303 0.484 C 16.21 0.484 16.118 0.494 16.032 0.514 C 16.018 0.518 16.009 0.525 15.995 0.525 C 15.911 0.546 15.829 0.575 15.752 0.614 C 15.723 0.628 15.7 0.642 15.673 0.655 C 15.607 0.693 15.544 0.735 15.484 0.782 C 15.47 0.793 15.453 0.8 15.44 0.813 L 0.885 13.965 C 0.878 13.972 0.872 13.982 0.865 13.988 C 0.83 14.02 0.804 14.057 0.772 14.092 C 0.748 14.118 0.721 14.146 0.7 14.18 C 0.676 14.215 0.656 14.252 0.635 14.29 C 0.615 14.325 0.594 14.359 0.577 14.396 C 0.56 14.434 0.549 14.475 0.536 14.513 C 0.523 14.551 0.511 14.592 0.501 14.633 C 0.491 14.671 0.488 14.712 0.484 14.75 C 0.477 14.794 0.471 14.838 0.467 14.883 C 0.467 14.894 0.464 14.903 0.464 14.917 L 0.464 21.146 C 0.464 21.851 1.036 22.424 1.742 22.424 L 6.691 22.424 L 6.691 23.534 C 6.693 24.863 7.77 25.939 9.098 25.94 L 9.719 25.94 L 9.719 70.98 L 6.558 70.98 C 5.197 70.981 4.095 72.084 4.093 73.445 L 4.093 78.185 C 4.093 78.891 4.666 79.464 5.372 79.464 L 25.41 79.464 C 26.116 79.464 26.688 78.891 26.688 78.185 L 26.688 73.445 C 26.686 72.085 25.584 70.983 24.225 70.98 L 21.064 70.98 L 21.064 25.94 Z M 9.099 12.676 C 8.314 12.676 7.629 13.057 7.186 13.636 L 5.068 13.636 L 15.026 4.646 L 15.026 12.676 Z M 17.583 3.501 L 50.399 13.64 L 28.787 13.636 C 28.331 13.034 27.62 12.679 26.865 12.676 L 17.583 12.676 Z M 58.879 16.197 L 62.711 16.197 L 59.575 19.336 L 56.439 16.193 L 58.879 16.193 Z M 40.911 16.725 L 44.047 19.865 L 37.771 19.865 Z M 34.686 19.333 L 31.546 16.194 L 37.822 16.194 Z M 44.002 16.194 L 50.267 16.194 L 47.142 19.33 Z M 53.349 16.729 L 56.485 19.866 L 50.22 19.866 Z M 29.283 17.552 L 31.594 19.862 L 29.283 19.862 Z M 62.663 19.866 L 64.52 18.008 L 64.52 19.866 Z M 3.024 19.866 L 3.024 16.194 L 6.695 16.194 L 6.695 19.862 Z M 9.248 15.234 L 26.726 15.234 L 26.726 23.379 L 9.248 23.383 Z M 18.503 64.253 L 12.512 54.741 L 18.503 45.229 Z M 12.278 50.312 L 12.278 31.291 L 18.27 40.803 Z M 24.128 76.904 L 6.654 76.904 L 6.654 73.534 L 24.128 73.534 Z M 12.278 70.978 L 12.278 59.173 L 18.507 69.056 L 18.507 70.982 Z M 18.503 36.372 L 12.275 26.49 L 12.275 25.937 L 18.503 25.937 Z M 78.2 42.175 L 58.97 42.175 C 58.264 42.175 57.692 42.747 57.692 43.453 L 57.692 58.858 L 52.434 55.111 C 51.989 54.795 51.394 54.795 50.949 55.111 L 49.493 56.15 L 49.493 30.229 C 49.493 29.523 48.92 28.951 48.211 28.951 L 29.004 28.951 C 28.298 28.951 27.725 29.523 27.723 30.23 L 27.723 78.182 C 27.723 78.889 28.295 79.461 29.004 79.461 L 78.198 79.461 C 78.904 79.461 79.476 78.889 79.476 78.182 L 79.476 43.453 C 79.475 42.748 78.903 42.176 78.198 42.175 Z M 60.252 44.735 L 67.307 44.735 L 67.307 76.904 L 63.241 76.904 L 63.241 63.47 C 63.241 63.055 63.039 62.669 62.703 62.428 L 60.249 60.68 Z M 51.69 57.726 L 58.21 62.37 L 58.285 62.425 L 60.681 64.132 L 60.681 76.907 L 56.434 76.904 L 56.434 70.6 C 56.434 69.894 55.861 69.322 55.156 69.322 L 48.252 69.322 C 47.546 69.322 46.973 69.894 46.973 70.6 L 46.973 76.904 L 42.703 76.904 L 42.699 64.132 L 48.906 59.71 C 48.924 59.7 48.938 59.686 48.955 59.676 Z M 53.873 76.903 L 49.528 76.903 L 49.528 71.881 L 53.874 71.881 Z M 30.284 31.508 L 46.936 31.508 L 46.936 57.973 L 40.682 62.429 C 40.342 62.668 40.146 63.056 40.146 63.471 L 40.146 76.905 L 30.284 76.905 Z M 76.918 76.904 L 69.864 76.904 L 69.864 44.735 L 76.919 44.735 Z M 36.286 36.55 L 36.286 39.371 C 36.286 40.077 35.713 40.65 35.004 40.65 C 34.298 40.65 33.726 40.077 33.726 39.371 L 33.726 36.55 C 33.726 35.844 34.298 35.272 35.004 35.272 C 35.71 35.272 36.286 35.844 36.286 36.55 Z M 40.931 39.371 L 40.931 36.55 C 40.949 35.857 41.516 35.305 42.209 35.305 C 42.902 35.305 43.469 35.857 43.487 36.55 L 43.487 39.371 C 43.469 40.064 42.902 40.616 42.209 40.616 C 41.516 40.616 40.949 40.064 40.931 39.371 Z M 36.286 47.406 L 36.286 50.227 C 36.286 50.932 35.713 51.505 35.004 51.505 C 34.298 51.505 33.726 50.933 33.726 50.227 L 33.726 47.406 C 33.726 46.699 34.298 46.127 35.004 46.127 C 35.71 46.127 36.286 46.699 36.286 47.406 Z M 40.931 50.227 L 40.931 47.406 C 40.949 46.713 41.516 46.161 42.209 46.161 C 42.902 46.161 43.469 46.713 43.487 47.406 L 43.487 50.227 C 43.469 50.919 42.902 51.472 42.209 51.472 C 41.516 51.472 40.949 50.919 40.931 50.227 Z M 36.286 58.278 L 36.286 61.099 C 36.286 61.805 35.713 62.377 35.004 62.377 C 34.298 62.377 33.726 61.805 33.726 61.099 L 33.726 58.278 C 33.726 57.573 34.298 57 35.004 57 C 35.71 57 36.286 57.573 36.286 58.278 Z" fill="rgba(5, 11, 20, 0.4)"></path></svg>`,
                        svgContentId: 11675527745,
                        withExternalLayout: !0,
                        ...K(
                          {
                            MSJHF2QXE: {
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 55"><path d="M 54.553 48.328 L 51.466 48.328 L 51.466 20.718 L 54.104 20.718 C 54.609 20.718 55.002 20.326 55.002 19.821 L 55.002 17.183 C 55.002 16.678 54.609 16.285 54.104 16.285 L 51.466 16.285 L 51.466 9.776 C 51.466 9.271 51.073 8.878 50.568 8.878 L 49.671 8.878 L 49.671 1.47 C 49.671 0.965 49.278 0.573 48.773 0.573 C 48.268 0.573 47.875 0.965 47.875 1.47 L 47.875 4.894 L 28.515 16.341 L 20.434 16.341 C 19.929 16.341 19.536 16.734 19.536 17.239 L 19.536 19.877 C 19.536 20.382 19.929 20.775 20.434 20.775 L 26.102 20.775 L 26.102 23.805 C 26.102 24.31 26.494 24.703 26.999 24.703 L 27.897 24.703 L 27.897 35.197 L 23.969 35.197 C 23.464 35.197 23.071 35.589 23.071 36.094 L 23.071 40.472 C 23.071 40.977 23.464 41.369 23.969 41.369 L 33.621 41.369 C 34.126 41.369 34.519 40.977 34.519 40.472 L 34.519 36.094 C 34.519 35.589 34.126 35.197 33.621 35.197 L 29.693 35.197 L 29.693 24.647 L 30.591 24.647 C 31.096 24.647 31.489 24.254 31.489 23.749 L 31.489 20.662 L 46.247 20.662 L 46.247 48.216 L 41.814 48.216 L 44.115 44.287 C 44.283 44.007 44.283 43.67 44.115 43.39 C 43.947 43.109 43.666 42.941 43.329 42.941 L 35.305 42.941 C 34.8 42.941 34.407 43.334 34.407 43.839 L 34.407 45.129 L 19.087 45.129 L 19.087 38.676 C 19.087 38.171 18.694 37.778 18.189 37.778 L 16 37.778 L 16 34.299 C 16 33.794 15.608 33.401 15.103 33.401 L 5.114 33.401 C 4.609 33.401 4.216 33.794 4.216 34.299 L 4.216 45.241 L 2.027 45.241 C 1.691 45.241 1.41 45.41 1.298 45.69 C 1.13 45.971 1.13 46.308 1.298 46.532 L 4.945 53.098 L 2.027 53.098 C 1.522 53.098 1.13 53.491 1.13 53.996 C 1.13 54.501 1.522 54.894 2.027 54.894 L 54.553 54.894 C 55.058 54.894 55.451 54.501 55.451 53.996 L 55.451 49.17 C 55.451 48.721 55.058 48.328 54.553 48.328 Z M 32.667 39.574 L 24.811 39.574 L 24.811 36.936 L 32.667 36.936 Z M 47.987 15.612 L 47.987 10.674 L 49.727 10.674 L 49.727 15.612 C 49.502 15.556 49.165 15.5 48.829 15.5 C 48.604 15.5 48.211 15.556 47.987 15.612 Z M 47.538 18.53 C 47.538 17.8 48.155 17.239 48.829 17.239 C 49.502 17.239 50.119 17.8 50.119 18.53 C 50.119 19.259 49.502 19.821 48.829 19.821 C 48.155 19.877 47.538 19.316 47.538 18.53 Z M 53.262 18.081 L 53.262 18.979 L 51.915 18.979 C 51.971 18.698 51.971 18.418 51.915 18.081 Z M 47.987 6.914 L 47.987 8.878 L 47.089 8.878 C 46.584 8.878 46.191 9.271 46.191 9.776 L 46.191 16.341 L 31.938 16.341 Z M 29.581 22.907 L 27.841 22.907 L 27.841 20.718 L 29.581 20.718 Z M 21.275 18.979 L 21.275 18.081 L 45.798 18.081 C 45.742 18.362 45.742 18.642 45.798 18.979 Z M 47.987 21.448 C 48.211 21.504 48.548 21.56 48.885 21.56 C 49.165 21.56 49.558 21.504 49.783 21.448 L 49.783 48.272 L 48.043 48.272 L 48.043 21.448 Z M 5.956 35.197 L 14.261 35.197 L 14.261 38.676 C 14.261 39.181 14.654 39.574 15.159 39.574 L 17.347 39.574 L 17.347 45.241 L 5.956 45.241 Z M 3.543 46.981 L 35.305 46.981 C 35.81 46.981 36.203 46.588 36.203 46.083 L 36.203 44.793 L 41.814 44.793 L 39.794 48.272 L 26.55 48.272 C 26.045 48.272 25.653 48.665 25.653 49.17 L 25.653 53.098 L 6.91 53.098 Z M 27.392 53.098 L 27.392 50.011 L 53.655 50.011 L 53.655 53.098 Z M 9.042 38.227 C 9.042 38.732 8.649 39.125 8.144 39.125 L 7.246 39.125 C 6.741 39.125 6.348 38.732 6.348 38.227 C 6.348 37.722 6.741 37.329 7.246 37.329 L 8.144 37.329 C 8.649 37.385 9.042 37.778 9.042 38.227 Z M 12.97 38.227 C 12.97 38.732 12.577 39.125 12.072 39.125 L 11.174 39.125 C 10.669 39.125 10.277 38.732 10.277 38.227 C 10.277 37.722 10.669 37.329 11.174 37.329 L 12.072 37.329 C 12.577 37.385 12.97 37.778 12.97 38.227 Z M 9.042 42.604 C 9.042 43.109 8.649 43.502 8.144 43.502 L 7.246 43.502 C 6.741 43.502 6.348 43.109 6.348 42.604 C 6.348 42.099 6.741 41.706 7.246 41.706 L 8.144 41.706 C 8.649 41.762 9.042 42.155 9.042 42.604 Z M 12.97 42.604 C 12.97 43.109 12.577 43.502 12.072 43.502 L 11.174 43.502 C 10.669 43.502 10.277 43.109 10.277 42.604 C 10.277 42.099 10.669 41.706 11.174 41.706 L 12.072 41.706 C 12.577 41.762 12.97 42.155 12.97 42.604 Z M 16.898 42.604 C 16.898 43.109 16.506 43.502 16 43.502 L 15.103 43.502 C 14.598 43.502 14.205 43.109 14.205 42.604 C 14.205 42.099 14.598 41.706 15.103 41.706 L 16 41.706 C 16.506 41.762 16.898 42.155 16.898 42.604 Z" fill="rgba(5, 11, 20, 0.4)"></path></svg>`,
                              svgContentId: 11319068058,
                            },
                            Rxt7utfM3: {
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56"><path d="M 19.038 18.397 C 19.968 18.397 20.727 17.646 20.727 16.722 L 20.727 15.949 L 40.44 15.949 L 40.44 18.779 L 40.008 18.779 C 39.682 18.767 39.376 18.934 39.21 19.214 C 39.043 19.494 39.043 19.843 39.21 20.124 C 39.376 20.404 39.682 20.571 40.008 20.559 L 40.44 20.559 L 40.44 23.191 C 40.44 23.667 40.817 24.061 41.294 24.081 C 41.542 24.09 41.764 24.269 41.833 24.51 C 41.904 24.767 41.799 25.039 41.573 25.18 C 41.363 25.326 41.083 25.319 40.881 25.162 C 40.76 25.074 40.675 24.944 40.643 24.797 C 40.553 24.314 40.09 23.996 39.608 24.085 C 39.125 24.174 38.807 24.638 38.896 25.12 C 38.999 25.684 39.316 26.197 39.791 26.569 C 40.208 26.89 40.72 27.065 41.246 27.065 C 41.707 27.065 42.167 26.93 42.566 26.66 C 43.426 26.093 43.823 25.036 43.549 24.042 C 43.36 23.354 42.872 22.788 42.22 22.499 L 42.22 20.559 L 42.652 20.559 C 43.145 20.559 43.542 20.161 43.542 19.669 C 43.542 19.177 43.145 18.779 42.652 18.779 L 42.22 18.779 L 42.22 15.949 L 46.149 15.949 C 46.641 15.949 47.039 15.551 47.039 15.059 L 47.039 10.727 C 47.039 10.667 47.033 10.608 47.023 10.55 C 47.018 10.529 47.011 10.507 47.004 10.483 C 46.994 10.45 46.987 10.417 46.973 10.383 C 46.96 10.355 46.944 10.331 46.932 10.304 C 46.92 10.281 46.908 10.254 46.891 10.231 C 46.86 10.182 46.823 10.138 46.782 10.097 C 46.779 10.097 46.779 10.094 46.779 10.094 C 46.738 10.053 46.692 10.015 46.643 9.983 C 46.625 9.97 46.603 9.961 46.581 9.949 C 46.551 9.933 46.522 9.913 46.491 9.901 C 46.464 9.889 46.436 9.884 46.41 9.877 C 46.381 9.868 46.353 9.859 46.324 9.851 C 46.274 9.842 46.224 9.837 46.173 9.837 C 46.164 9.837 46.159 9.834 46.152 9.834 L 41.466 9.834 L 11.954 0.717 C 11.944 0.712 11.935 0.715 11.923 0.71 C 11.852 0.692 11.78 0.682 11.707 0.679 C 11.7 0.679 11.695 0.676 11.688 0.676 C 11.624 0.676 11.56 0.684 11.5 0.698 C 11.49 0.7 11.483 0.705 11.473 0.705 C 11.415 0.719 11.358 0.74 11.304 0.767 C 11.285 0.776 11.268 0.786 11.249 0.795 C 11.204 0.822 11.16 0.851 11.118 0.884 C 11.108 0.891 11.097 0.896 11.087 0.905 L 0.956 10.06 C 0.951 10.065 0.947 10.072 0.942 10.077 C 0.917 10.099 0.899 10.124 0.877 10.149 C 0.861 10.167 0.842 10.187 0.827 10.21 C 0.811 10.235 0.796 10.261 0.782 10.287 C 0.768 10.311 0.753 10.334 0.742 10.361 C 0.729 10.387 0.722 10.416 0.713 10.442 C 0.704 10.468 0.696 10.497 0.688 10.526 C 0.682 10.552 0.679 10.581 0.677 10.607 C 0.672 10.637 0.668 10.669 0.665 10.7 C 0.665 10.707 0.663 10.714 0.663 10.724 L 0.663 15.059 C 0.663 15.55 1.061 15.949 1.553 15.949 L 4.998 15.949 L 4.998 16.722 C 4.999 17.646 5.748 18.396 6.673 18.397 L 7.105 18.397 L 7.105 49.748 L 4.905 49.748 C 3.958 49.749 3.19 50.517 3.189 51.464 L 3.189 54.764 C 3.189 55.255 3.588 55.654 4.079 55.654 L 18.028 55.654 C 18.519 55.654 18.917 55.255 18.917 54.764 L 18.917 51.464 C 18.916 50.517 18.149 49.75 17.202 49.748 L 15.002 49.748 L 15.002 18.397 Z M 6.674 9.164 C 6.127 9.164 5.65 9.429 5.342 9.832 L 3.868 9.832 L 10.799 3.573 L 10.799 9.164 Z M 12.579 2.776 L 35.422 9.834 L 20.379 9.832 C 20.061 9.413 19.566 9.166 19.04 9.164 L 12.579 9.164 Z M 41.325 11.614 L 43.993 11.614 L 41.809 13.8 L 39.626 11.612 L 41.325 11.612 Z M 28.818 11.982 L 31.001 14.167 L 26.632 14.167 Z M 24.484 13.797 L 22.299 11.612 L 26.667 11.612 Z M 30.969 11.612 L 35.331 11.612 L 33.155 13.795 Z M 37.476 11.985 L 39.659 14.168 L 35.298 14.168 Z M 20.724 12.557 L 22.332 14.165 L 20.724 14.165 Z M 43.959 14.168 L 45.251 12.875 L 45.251 14.168 Z M 2.444 14.168 L 2.444 11.612 L 5 11.612 L 5 14.165 Z M 6.778 10.944 L 18.944 10.944 L 18.944 16.614 L 6.778 16.616 Z M 13.22 45.066 L 9.049 38.445 L 13.22 31.823 Z M 8.887 35.361 L 8.887 22.121 L 13.057 28.743 Z M 17.135 53.872 L 4.971 53.872 L 4.971 51.526 L 17.135 51.526 Z M 8.887 49.747 L 8.887 41.53 L 13.222 48.409 L 13.222 49.75 Z M 13.22 25.658 L 8.884 18.779 L 8.884 18.394 L 13.22 18.394 Z M 54.774 29.697 L 41.389 29.697 C 40.897 29.697 40.499 30.095 40.499 30.587 L 40.499 41.31 L 36.839 38.702 C 36.529 38.482 36.115 38.482 35.805 38.702 L 34.791 39.425 L 34.791 21.382 C 34.791 20.891 34.393 20.492 33.899 20.492 L 20.529 20.492 C 20.038 20.492 19.639 20.89 19.638 21.382 L 19.638 54.762 C 19.638 55.254 20.036 55.652 20.529 55.652 L 54.773 55.652 C 55.264 55.652 55.663 55.254 55.663 54.762 L 55.663 30.587 C 55.662 30.096 55.264 29.698 54.773 29.697 Z M 42.281 31.48 L 47.192 31.48 L 47.192 53.872 L 44.361 53.872 L 44.361 44.52 C 44.361 44.232 44.221 43.963 43.987 43.795 L 42.279 42.579 Z M 36.321 40.522 L 40.859 43.755 L 40.912 43.793 L 42.579 44.982 L 42.579 53.874 L 39.623 53.872 L 39.623 49.484 C 39.623 48.992 39.225 48.594 38.733 48.594 L 33.928 48.594 C 33.436 48.594 33.038 48.992 33.038 49.484 L 33.038 53.872 L 30.065 53.872 L 30.062 44.982 L 34.383 41.903 C 34.395 41.896 34.405 41.887 34.417 41.88 Z M 37.84 53.871 L 34.816 53.871 L 34.816 50.376 L 37.841 50.376 Z M 21.421 22.272 L 33.012 22.272 L 33.012 40.694 L 28.658 43.796 C 28.422 43.963 28.285 44.233 28.285 44.521 L 28.285 53.873 L 21.421 53.873 Z M 53.882 53.872 L 48.972 53.872 L 48.972 31.48 L 53.883 31.48 Z M 25.599 25.782 L 25.599 27.746 C 25.599 28.237 25.2 28.636 24.706 28.636 C 24.215 28.636 23.816 28.237 23.816 27.746 L 23.816 25.782 C 23.816 25.29 24.214 24.892 24.706 24.892 C 25.197 24.892 25.598 25.29 25.598 25.782 Z M 28.832 27.746 L 28.832 25.782 C 28.844 25.3 29.239 24.915 29.721 24.915 C 30.204 24.915 30.598 25.3 30.611 25.782 L 30.611 27.746 C 30.598 28.228 30.204 28.612 29.721 28.612 C 29.239 28.612 28.844 28.228 28.832 27.746 Z M 25.598 33.338 L 25.598 35.302 C 25.598 35.793 25.2 36.192 24.706 36.192 C 24.215 36.192 23.816 35.794 23.816 35.302 L 23.816 33.338 C 23.816 32.847 24.214 32.448 24.706 32.448 C 25.197 32.448 25.598 32.847 25.598 33.338 Z M 28.832 35.302 L 28.832 33.338 C 28.844 32.856 29.239 32.472 29.721 32.472 C 30.204 32.472 30.598 32.856 30.611 33.338 L 30.611 35.302 C 30.598 35.784 30.204 36.169 29.721 36.169 C 29.239 36.169 28.844 35.784 28.832 35.302 Z M 25.598 40.906 L 25.598 42.87 C 25.598 43.362 25.2 43.76 24.706 43.76 C 24.215 43.76 23.816 43.362 23.816 42.87 L 23.816 40.907 C 23.816 40.416 24.214 40.017 24.706 40.017 C 25.197 40.017 25.598 40.416 25.598 40.907 Z" fill="rgba(5, 11, 20, 0.4)"></path></svg>`,
                              svgContentId: 10789808663,
                            },
                          },
                          x,
                          O
                        ),
                      }),
                    L() &&
                      /*#__PURE__*/ l(C, {
                        className: `framer-yjmvs`,
                        "data-framer-name": `Energy--crisis`,
                        layout: `position`,
                        layoutDependency: M,
                        layoutId: `vPep_j_D8`,
                        opacity: 1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 55"><path d="M 22.697 16.523 L 32.031 16.523 L 32.031 19.446 L 20.272 19.446 L 20.272 16.523 L 22.579 16.523 L 22.638 16.534 Z M 44.352 44.682 L 44.867 44.682 L 44.867 44.175 L 44.869 35.714 L 44.869 35.206 L 44.354 35.206 L 43.087 35.206 L 42.572 35.206 L 42.572 35.713 L 42.572 44.175 L 42.572 44.682 L 43.087 44.682 Z M 50.593 33.371 C 51.458 30.859 51.896 28.236 51.896 25.56 C 51.896 11.87 40.337 0.752 26.153 0.752 C 11.969 0.752 0.408 11.87 0.408 25.56 C 0.408 39.25 11.968 50.368 26.152 50.368 C 28.933 50.368 31.66 49.944 34.27 49.108 C 36.398 51.922 39.841 53.752 43.72 53.752 C 50.155 53.752 55.408 48.706 55.408 42.482 C 55.408 38.739 53.505 35.419 50.593 33.371 Z M 26.152 48.135 C 13.212 48.135 2.703 37.996 2.703 25.56 C 2.703 13.124 13.212 2.985 26.152 2.985 C 39.091 2.985 49.6 13.124 49.6 25.56 C 49.6 27.841 49.252 30.076 48.562 32.224 C 47.086 31.574 45.445 31.211 43.72 31.211 C 37.673 31.211 32.672 35.663 32.088 41.366 L 31.422 41.366 C 29.907 41.366 28.905 41.025 28.277 40.42 C 27.65 39.816 27.299 38.858 27.299 37.406 L 27.299 31.701 C 29.388 31.501 31.107 30.74 32.328 29.464 C 33.642 28.09 34.326 26.174 34.326 23.868 L 34.326 15.407 C 34.326 14.779 33.802 14.29 33.179 14.29 L 30.813 14.29 L 30.813 10.33 C 30.813 9.702 30.288 9.213 29.665 9.213 C 29.042 9.213 28.518 9.702 28.518 10.33 L 28.518 14.29 L 23.785 14.29 L 23.785 10.332 C 23.785 9.704 23.261 9.215 22.638 9.215 C 22.015 9.215 21.49 9.704 21.49 10.332 L 21.49 14.29 L 19.124 14.29 C 18.501 14.29 17.977 14.779 17.977 15.407 L 17.977 23.868 C 17.977 26.174 18.661 28.09 19.975 29.464 C 21.196 30.74 22.915 31.501 25.004 31.701 L 25.004 37.406 C 25.004 39.354 25.54 40.925 26.662 42.006 C 27.783 43.085 29.408 43.599 31.422 43.599 L 32.088 43.599 C 32.217 44.849 32.557 46.038 33.073 47.134 C 30.843 47.798 28.52 48.135 26.152 48.135 Z M 32.031 21.679 L 32.031 23.868 C 32.031 24.754 31.88 26.175 31.084 27.362 C 30.313 28.512 28.886 29.52 26.152 29.52 C 23.417 29.52 21.99 28.513 21.219 27.363 C 20.423 26.176 20.272 24.754 20.272 23.868 L 20.272 21.679 Z M 43.72 51.519 C 38.53 51.519 34.326 47.456 34.326 42.482 C 34.326 37.509 38.528 33.445 43.72 33.445 C 48.912 33.445 53.114 37.509 53.114 42.482 C 53.114 47.456 48.91 51.519 43.72 51.519 Z M 43.72 48.912 C 44.478 48.912 45.113 48.317 45.113 47.559 C 45.113 46.801 44.478 46.206 43.72 46.206 C 42.962 46.206 42.327 46.801 42.327 47.559 C 42.327 48.317 42.962 48.912 43.72 48.912 Z" fill="rgba(5, 11, 20, 0.4)" stroke-width="0.75" stroke="rgb(152, 155, 158)" stroke-miterlimit="10"></path></svg>`,
                        svgContentId: 9289674732,
                        withExternalLayout: !0,
                        ...K({ RydWzkDLX: { svgContentId: 12014459182 } }, x, O),
                      }),
                    R() &&
                      /*#__PURE__*/ l(C, {
                        className: `framer-r2nudu`,
                        "data-framer-name": `Energy--crisis`,
                        layout: `position`,
                        layoutDependency: M,
                        layoutId: `AUb7B7i0l`,
                        opacity: 1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 79"><path d="M 32.915 25.056 L 45.603 25.056 L 45.603 29.089 L 29.619 29.089 L 29.619 25.056 L 32.755 25.056 L 32.835 25.072 Z M 62.35 63.908 L 63.05 63.908 L 63.05 63.208 L 63.052 51.534 L 63.052 50.834 L 62.352 50.834 L 60.631 50.834 L 59.931 50.834 L 59.931 51.534 L 59.931 63.208 L 59.931 63.908 L 60.631 63.908 Z M 70.832 48.302 C 72.008 44.836 72.604 41.217 72.604 37.525 C 72.604 18.636 56.893 3.296 37.613 3.296 C 18.334 3.296 2.62 18.636 2.62 37.525 C 2.62 56.413 18.332 71.753 37.611 71.753 C 41.392 71.753 45.099 71.168 48.646 70.015 C 51.538 73.898 56.219 76.423 61.49 76.423 C 70.237 76.423 77.377 69.46 77.377 60.873 C 77.377 55.708 74.791 51.128 70.832 48.302 Z M 37.611 68.672 C 20.023 68.672 5.74 54.684 5.74 37.524 C 5.74 20.365 20.023 6.377 37.611 6.377 C 55.199 6.377 69.482 20.365 69.482 37.524 C 69.482 40.671 69.009 43.756 68.072 46.719 C 66.065 45.822 63.835 45.321 61.49 45.321 C 53.271 45.321 46.473 51.464 45.68 59.333 L 44.775 59.333 C 42.716 59.333 41.354 58.862 40.499 58.027 C 39.648 57.195 39.171 55.872 39.171 53.869 L 39.171 45.998 C 42.01 45.721 44.347 44.672 46.006 42.911 C 47.792 41.016 48.722 38.371 48.722 35.19 L 48.722 23.515 C 48.722 22.649 48.01 21.975 47.163 21.975 L 43.946 21.975 L 43.946 16.511 C 43.946 15.645 43.234 14.97 42.387 14.97 C 41.54 14.97 40.827 15.645 40.827 16.511 L 40.827 21.975 L 34.395 21.975 L 34.395 16.513 C 34.395 15.647 33.682 14.973 32.835 14.973 C 31.988 14.973 31.275 15.647 31.275 16.513 L 31.275 21.975 L 28.059 21.975 C 27.212 21.975 26.5 22.649 26.5 23.515 L 26.5 35.19 C 26.5 38.371 27.43 41.016 29.216 42.911 C 30.875 44.672 33.212 45.721 36.051 45.998 L 36.051 53.869 C 36.051 56.557 36.78 58.725 38.305 60.216 C 39.828 61.705 42.037 62.414 44.775 62.414 L 45.68 62.414 C 45.855 64.138 46.317 65.78 47.019 67.291 C 43.987 68.208 40.831 68.672 37.611 68.672 Z M 45.603 32.17 L 45.603 35.19 C 45.603 36.412 45.397 38.374 44.315 40.011 C 43.268 41.598 41.327 42.989 37.611 42.989 C 33.894 42.989 31.954 41.599 30.907 40.012 C 29.825 38.375 29.619 36.413 29.619 35.19 L 29.619 32.17 Z M 61.49 73.342 C 54.435 73.342 48.722 67.736 48.722 60.873 C 48.722 54.011 54.433 48.405 61.49 48.405 C 68.547 48.405 74.258 54.011 74.258 60.873 C 74.258 67.736 68.545 73.342 61.49 73.342 Z M 61.49 69.745 C 62.521 69.745 63.384 68.924 63.384 67.878 C 63.384 66.832 62.521 66.01 61.49 66.01 C 60.46 66.01 59.596 66.832 59.596 67.878 C 59.596 68.924 60.46 69.745 61.49 69.745 Z" fill="rgba(5, 11, 20, 0.4)" stroke-width="1.4" stroke="rgb(152, 155, 158)" stroke-miterlimit="10"></path></svg>`,
                        svgContentId: 10177889872,
                        withExternalLayout: !0,
                        ...K({ DlxMkMYXm: { svgContentId: 10765564998 } }, x, O),
                      }),
                    ae() &&
                      /*#__PURE__*/ l(C, {
                        className: `framer-it4bzt`,
                        "data-framer-name": `Energy--crisis`,
                        layout: `position`,
                        layoutDependency: M,
                        layoutId: `kufcObWAr`,
                        opacity: 1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 79"><path d="M 32.915 25.056 L 45.603 25.056 L 45.603 29.089 L 29.619 29.089 L 29.619 25.056 L 32.755 25.056 L 32.835 25.072 Z M 62.35 63.908 L 63.05 63.908 L 63.05 63.208 L 63.052 51.534 L 63.052 50.834 L 62.352 50.834 L 60.631 50.834 L 59.931 50.834 L 59.931 51.534 L 59.931 63.208 L 59.931 63.908 L 60.631 63.908 Z M 70.832 48.302 C 72.008 44.836 72.604 41.217 72.604 37.525 C 72.604 18.636 56.893 3.296 37.613 3.296 C 18.334 3.296 2.62 18.636 2.62 37.525 C 2.62 56.413 18.332 71.753 37.611 71.753 C 41.392 71.753 45.099 71.168 48.646 70.015 C 51.538 73.898 56.219 76.423 61.49 76.423 C 70.237 76.423 77.377 69.46 77.377 60.873 C 77.377 55.708 74.791 51.128 70.832 48.302 Z M 37.611 68.672 C 20.023 68.672 5.74 54.684 5.74 37.524 C 5.74 20.365 20.023 6.377 37.611 6.377 C 55.199 6.377 69.482 20.365 69.482 37.524 C 69.482 40.671 69.009 43.756 68.072 46.719 C 66.065 45.822 63.835 45.321 61.49 45.321 C 53.271 45.321 46.473 51.464 45.68 59.333 L 44.775 59.333 C 42.716 59.333 41.354 58.862 40.499 58.027 C 39.648 57.195 39.171 55.872 39.171 53.869 L 39.171 45.998 C 42.01 45.721 44.347 44.672 46.006 42.911 C 47.792 41.016 48.722 38.371 48.722 35.19 L 48.722 23.515 C 48.722 22.649 48.01 21.975 47.163 21.975 L 43.946 21.975 L 43.946 16.511 C 43.946 15.645 43.234 14.97 42.387 14.97 C 41.54 14.97 40.827 15.645 40.827 16.511 L 40.827 21.975 L 34.395 21.975 L 34.395 16.513 C 34.395 15.647 33.682 14.973 32.835 14.973 C 31.988 14.973 31.275 15.647 31.275 16.513 L 31.275 21.975 L 28.059 21.975 C 27.212 21.975 26.5 22.649 26.5 23.515 L 26.5 35.19 C 26.5 38.371 27.43 41.016 29.216 42.911 C 30.875 44.672 33.212 45.721 36.051 45.998 L 36.051 53.869 C 36.051 56.557 36.78 58.725 38.305 60.216 C 39.828 61.705 42.037 62.414 44.775 62.414 L 45.68 62.414 C 45.855 64.138 46.317 65.78 47.019 67.291 C 43.987 68.208 40.831 68.672 37.611 68.672 Z M 45.603 32.17 L 45.603 35.19 C 45.603 36.412 45.397 38.374 44.315 40.011 C 43.268 41.598 41.327 42.989 37.611 42.989 C 33.894 42.989 31.954 41.599 30.907 40.012 C 29.825 38.375 29.619 36.413 29.619 35.19 L 29.619 32.17 Z M 61.49 73.342 C 54.435 73.342 48.722 67.736 48.722 60.873 C 48.722 54.011 54.433 48.405 61.49 48.405 C 68.547 48.405 74.258 54.011 74.258 60.873 C 74.258 67.736 68.545 73.342 61.49 73.342 Z M 61.49 69.745 C 62.521 69.745 63.384 68.924 63.384 67.878 C 63.384 66.832 62.521 66.01 61.49 66.01 C 60.46 66.01 59.596 66.832 59.596 67.878 C 59.596 68.924 60.46 69.745 61.49 69.745 Z" fill="rgba(5, 11, 20, 0.4)" stroke-width="1.4" stroke="rgb(152, 155, 158)" stroke-miterlimit="10"></path></svg>`,
                        svgContentId: 10177889872,
                        withExternalLayout: !0,
                        ...K({ UxpJQbg61: { svgContentId: 10765564998 } }, x, O),
                      }),
                    oe() &&
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-bbjfj2`,
                        layoutDependency: M,
                        layoutId: `gydYamF5U`,
                        children:
                          se() &&
                          /*#__PURE__*/ l(h, {
                            __fromCanvasComponent: !0,
                            children:
                              G(`v0`, d) ??
                              /*#__PURE__*/ l(a, {
                                children: /*#__PURE__*/ l(f.h5, {
                                  className: `framer-styles-preset-pdpwdq`,
                                  "data-styles-preset": `OBai9LAmP`,
                                  dir: `auto`,
                                  children: `障碍物众多`,
                                }),
                              }),
                            className: `framer-dj4ccs`,
                            fonts: [`Inter`],
                            layoutDependency: M,
                            layoutId: `TViIdJAX0`,
                            style: {
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...K(
                              {
                                a32v6idmv: {
                                  children:
                                    G(`v8`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ u(f.h5, {
                                        className: `framer-styles-preset-pdpwdq`,
                                        "data-styles-preset": `OBai9LAmP`,
                                        dir: `auto`,
                                        children: [`复杂的`, /*#__PURE__*/ l(f.br, {}), `船厂环境`],
                                      }),
                                    }),
                                },
                                BpsnDco1O: {
                                  children:
                                    G(`v2`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h5, {
                                        className: `framer-styles-preset-pdpwdq`,
                                        "data-styles-preset": `OBai9LAmP`,
                                        dir: `auto`,
                                        children: `缺乏统一平台`,
                                      }),
                                    }),
                                },
                                cD9rLKfQn: {
                                  children:
                                    G(`v2`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h5, {
                                        className: `framer-styles-preset-pdpwdq`,
                                        "data-styles-preset": `OBai9LAmP`,
                                        dir: `auto`,
                                        children: `缺乏统一平台`,
                                      }),
                                    }),
                                },
                                dRQPYVOug: {
                                  children:
                                    G(`v1`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h5, {
                                        className: `framer-styles-preset-pdpwdq`,
                                        "data-styles-preset": `OBai9LAmP`,
                                        dir: `auto`,
                                        children: `船厂环境复杂`,
                                      }),
                                    }),
                                },
                                DYY5M_Pj0: {
                                  children:
                                    G(`v9`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h5, {
                                        className: `framer-styles-preset-pdpwdq`,
                                        "data-styles-preset": `OBai9LAmP`,
                                        dir: `auto`,
                                        children: `缺乏过程可追溯性`,
                                      }),
                                    }),
                                },
                                FCBz9z5cr: {
                                  children:
                                    G(`v12`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h5, {
                                        className: `framer-styles-preset-pdpwdq`,
                                        "data-styles-preset": `OBai9LAmP`,
                                        dir: `auto`,
                                        children: `缺乏统一数据平台`,
                                      }),
                                    }),
                                },
                                GOSwbfaJQ: {
                                  children:
                                    G(`v7`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h5, {
                                        className: `framer-styles-preset-pdpwdq`,
                                        "data-styles-preset": `OBai9LAmP`,
                                        dir: `auto`,
                                        children: `数据孤岛`,
                                      }),
                                    }),
                                },
                                iiKGOfy_S: {
                                  children:
                                    G(`v11`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h5, {
                                        className: `framer-styles-preset-pdpwdq`,
                                        "data-styles-preset": `OBai9LAmP`,
                                        dir: `auto`,
                                        children: `全球工厂分散`,
                                      }),
                                    }),
                                },
                                JqyganigR: {
                                  children:
                                    G(`v6`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h5, {
                                        className: `framer-styles-preset-pdpwdq`,
                                        "data-styles-preset": `OBai9LAmP`,
                                        dir: `auto`,
                                        children: `资源调配效率低`,
                                      }),
                                    }),
                                },
                                k6_oC3T0N: {
                                  children:
                                    G(`v13`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h5, {
                                        className: `framer-styles-preset-pdpwdq`,
                                        "data-styles-preset": `OBai9LAmP`,
                                        dir: `auto`,
                                        children: `碎片化协作`,
                                      }),
                                    }),
                                },
                                kaVVTKBYG: {
                                  children:
                                    G(`v15`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h2, {
                                        className: `framer-styles-preset-on1keu`,
                                        "data-styles-preset": `O8Bh5Q3QT`,
                                        dir: `auto`,
                                        children: `AI驱动`,
                                      }),
                                    }),
                                },
                                MaFEpU2zD: {
                                  children:
                                    G(`v2`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h5, {
                                        className: `framer-styles-preset-pdpwdq`,
                                        "data-styles-preset": `OBai9LAmP`,
                                        dir: `auto`,
                                        children: `缺乏统一平台`,
                                      }),
                                    }),
                                },
                                N9GUwIWPD: {
                                  children:
                                    G(`v3`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h5, {
                                        className: `framer-styles-preset-pdpwdq`,
                                        "data-styles-preset": `OBai9LAmP`,
                                        dir: `auto`,
                                        children: `船厂环境复杂`,
                                      }),
                                    }),
                                },
                                o5vUm1wJC: {
                                  children:
                                    G(`v14`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h2, {
                                        className: `framer-styles-preset-on1keu`,
                                        "data-styles-preset": `O8Bh5Q3QT`,
                                        dir: `auto`,
                                        children: `精益生产`,
                                      }),
                                    }),
                                },
                                phu3XUKqQ: {
                                  children:
                                    G(`v9`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h5, {
                                        className: `framer-styles-preset-pdpwdq`,
                                        "data-styles-preset": `OBai9LAmP`,
                                        dir: `auto`,
                                        children: `缺乏过程可追溯性`,
                                      }),
                                    }),
                                },
                                Pj420GME3: {
                                  children:
                                    G(`v10`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h5, {
                                        className: `framer-styles-preset-pdpwdq`,
                                        "data-styles-preset": `OBai9LAmP`,
                                        dir: `auto`,
                                        children: `碎片化的跨部门协作`,
                                      }),
                                    }),
                                },
                                QiQgm4bOg: {
                                  children:
                                    G(`v5`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h5, {
                                        className: `framer-styles-preset-pdpwdq`,
                                        "data-styles-preset": `OBai9LAmP`,
                                        dir: `auto`,
                                        children: `资源成本高`,
                                      }),
                                    }),
                                },
                                TBYylgvy8: {
                                  children:
                                    G(`v12`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h5, {
                                        className: `framer-styles-preset-pdpwdq`,
                                        "data-styles-preset": `OBai9LAmP`,
                                        dir: `auto`,
                                        children: `缺乏统一数据平台`,
                                      }),
                                    }),
                                },
                                UfCEsKHme: {
                                  children:
                                    G(`v14`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h2, {
                                        className: `framer-styles-preset-on1keu`,
                                        "data-styles-preset": `O8Bh5Q3QT`,
                                        dir: `auto`,
                                        children: `精益生产`,
                                      }),
                                    }),
                                },
                                UxpJQbg61: {
                                  children:
                                    G(`v4`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h5, {
                                        className: `framer-styles-preset-pdpwdq`,
                                        "data-styles-preset": `OBai9LAmP`,
                                        dir: `auto`,
                                        children: `不可预测的能源消耗`,
                                      }),
                                    }),
                                },
                                v7yUg2HyE: {
                                  children:
                                    G(`v11`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h5, {
                                        className: `framer-styles-preset-pdpwdq`,
                                        "data-styles-preset": `OBai9LAmP`,
                                        dir: `auto`,
                                        children: `全球工厂分散`,
                                      }),
                                    }),
                                },
                                vmMayCvYy: {
                                  children:
                                    G(`v16`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h2, {
                                        className: `framer-styles-preset-on1keu`,
                                        "data-styles-preset": `O8Bh5Q3QT`,
                                        children: `GxP`,
                                      }),
                                    }),
                                },
                                w5bPZnqfl: {
                                  children:
                                    G(`v16`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h2, {
                                        className: `framer-styles-preset-on1keu`,
                                        "data-styles-preset": `O8Bh5Q3QT`,
                                        children: `GxP`,
                                      }),
                                    }),
                                },
                                wRQtOZ3F9: {
                                  children:
                                    G(`v2`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h5, {
                                        className: `framer-styles-preset-pdpwdq`,
                                        "data-styles-preset": `OBai9LAmP`,
                                        dir: `auto`,
                                        children: `缺乏统一平台`,
                                      }),
                                    }),
                                },
                                yW_VqnuVb: {
                                  children:
                                    G(`v15`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.h2, {
                                        className: `framer-styles-preset-on1keu`,
                                        "data-styles-preset": `O8Bh5Q3QT`,
                                        dir: `auto`,
                                        children: `AI驱动`,
                                      }),
                                    }),
                                },
                              },
                              x,
                              O
                            ),
                          }),
                      }),
                    ce() &&
                      /*#__PURE__*/ l(C, {
                        className: `framer-1otg5pv`,
                        layout: `position`,
                        layoutDependency: M,
                        layoutId: `fogxqVeN7`,
                        opacity: 1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 80"><path d="M 78.299 70.055 L 73.81 70.055 L 73.81 29.896 L 77.646 29.896 C 78.381 29.896 78.952 29.324 78.952 28.59 L 78.952 24.753 C 78.952 24.019 78.381 23.447 77.646 23.447 L 73.81 23.447 L 73.81 13.979 C 73.81 13.244 73.238 12.673 72.504 12.673 L 71.198 12.673 L 71.198 1.899 C 71.198 1.164 70.626 0.593 69.892 0.593 C 69.157 0.593 68.586 1.164 68.586 1.899 L 68.586 6.878 L 40.425 23.529 L 28.671 23.529 C 27.937 23.529 27.365 24.1 27.365 24.835 L 27.365 28.671 C 27.365 29.406 27.937 29.977 28.671 29.977 L 36.915 29.977 L 36.915 34.385 C 36.915 35.12 37.487 35.691 38.221 35.691 L 39.527 35.691 L 39.527 50.955 L 33.814 50.955 C 33.079 50.955 32.508 51.526 32.508 52.261 L 32.508 58.627 C 32.508 59.362 33.079 59.933 33.814 59.933 L 47.853 59.933 C 48.588 59.933 49.159 59.362 49.159 58.627 L 49.159 52.261 C 49.159 51.526 48.588 50.955 47.853 50.955 L 42.139 50.955 L 42.139 35.609 L 43.445 35.609 C 44.18 35.609 44.751 35.038 44.751 34.303 L 44.751 29.814 L 66.219 29.814 L 66.219 69.892 L 59.77 69.892 L 63.117 64.178 C 63.362 63.77 63.362 63.28 63.117 62.872 C 62.872 62.464 62.464 62.219 61.974 62.219 L 50.302 62.219 C 49.567 62.219 48.996 62.79 48.996 63.525 L 48.996 65.402 L 26.712 65.402 L 26.712 56.016 C 26.712 55.281 26.141 54.71 25.406 54.71 L 22.223 54.71 L 22.223 49.649 C 22.223 48.914 21.652 48.343 20.917 48.343 L 6.388 48.343 C 5.653 48.343 5.082 48.914 5.082 49.649 L 5.082 65.566 L 1.899 65.566 C 1.409 65.566 1.001 65.81 0.837 66.219 C 0.593 66.627 0.593 67.116 0.837 67.443 L 6.143 76.993 L 1.899 76.993 C 1.164 76.993 0.593 77.564 0.593 78.299 C 0.593 79.034 1.164 79.605 1.899 79.605 L 78.299 79.605 C 79.034 79.605 79.605 79.034 79.605 78.299 L 79.605 71.279 C 79.605 70.626 79.034 70.055 78.299 70.055 Z M 46.465 57.321 L 35.038 57.321 L 35.038 53.485 L 46.465 53.485 Z M 68.749 22.468 L 68.749 15.285 L 71.279 15.285 L 71.279 22.468 C 70.953 22.386 70.463 22.305 69.973 22.305 C 69.647 22.305 69.075 22.386 68.749 22.468 Z M 68.096 26.712 C 68.096 25.651 68.994 24.835 69.973 24.835 C 70.953 24.835 71.851 25.651 71.851 26.712 C 71.851 27.773 70.953 28.59 69.973 28.59 C 68.994 28.671 68.096 27.855 68.096 26.712 Z M 76.422 26.059 L 76.422 27.365 L 74.463 27.365 C 74.544 26.957 74.544 26.549 74.463 26.059 Z M 68.749 9.816 L 68.749 12.673 L 67.443 12.673 C 66.708 12.673 66.137 13.244 66.137 13.979 L 66.137 23.529 L 45.404 23.529 Z M 41.976 33.079 L 39.446 33.079 L 39.446 29.896 L 41.976 29.896 Z M 29.896 27.365 L 29.896 26.059 L 65.566 26.059 C 65.484 26.468 65.484 26.876 65.566 27.365 Z M 68.749 30.957 C 69.075 31.038 69.565 31.12 70.055 31.12 C 70.463 31.12 71.034 31.038 71.361 30.957 L 71.361 69.973 L 68.831 69.973 L 68.831 30.957 Z M 7.612 50.955 L 19.693 50.955 L 19.693 56.016 C 19.693 56.75 20.264 57.322 20.999 57.322 L 24.182 57.322 L 24.182 65.566 L 7.612 65.566 Z M 4.102 68.096 L 50.302 68.096 C 51.036 68.096 51.608 67.525 51.608 66.79 L 51.608 64.913 L 59.77 64.913 L 56.832 69.973 L 37.568 69.973 C 36.834 69.973 36.262 70.545 36.262 71.279 L 36.262 76.993 L 9 76.993 Z M 38.793 76.993 L 38.793 72.504 L 76.993 72.504 L 76.993 76.993 Z M 12.102 55.363 C 12.102 56.097 11.53 56.668 10.796 56.668 L 9.49 56.668 C 8.755 56.668 8.184 56.097 8.184 55.363 C 8.184 54.628 8.755 54.057 9.49 54.057 L 10.796 54.057 C 11.53 54.138 12.102 54.71 12.102 55.363 Z M 17.815 55.363 C 17.815 56.097 17.244 56.668 16.509 56.668 L 15.203 56.668 C 14.469 56.668 13.897 56.097 13.897 55.363 C 13.897 54.628 14.469 54.057 15.203 54.057 L 16.509 54.057 C 17.244 54.138 17.815 54.71 17.815 55.363 Z M 12.102 61.729 C 12.102 62.464 11.53 63.035 10.796 63.035 L 9.49 63.035 C 8.755 63.035 8.184 62.464 8.184 61.729 C 8.184 60.995 8.755 60.423 9.49 60.423 L 10.796 60.423 C 11.53 60.505 12.102 61.076 12.102 61.729 Z M 17.815 61.729 C 17.815 62.464 17.244 63.035 16.509 63.035 L 15.203 63.035 C 14.469 63.035 13.897 62.464 13.897 61.729 C 13.897 60.995 14.469 60.423 15.203 60.423 L 16.509 60.423 C 17.244 60.505 17.815 61.076 17.815 61.729 Z M 23.529 61.729 C 23.529 62.464 22.958 63.035 22.223 63.035 L 20.917 63.035 C 20.182 63.035 19.611 62.464 19.611 61.729 C 19.611 60.995 20.182 60.423 20.917 60.423 L 22.223 60.423 C 22.958 60.505 23.529 61.076 23.529 61.729 Z" fill="rgba(5, 11, 20, 0.4)"></path></svg>`,
                        svgContentId: 11290134668,
                        withExternalLayout: !0,
                        ...K({ dRQPYVOug: { svgContentId: 12221951151 } }, x, O),
                      }),
                    le() &&
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-1hjfeix`,
                        "data-framer-name": `Building--insights-1`,
                        layoutDependency: M,
                        layoutId: `PXIyTuxNB`,
                        style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                        transformTemplate: q,
                        children: /*#__PURE__*/ l(C, {
                          className: `framer-v0xtg2`,
                          "data-framer-name": `Vector`,
                          fill: `rgba(0,0,0,1)`,
                          intrinsicHeight: 36,
                          intrinsicWidth: 36,
                          layoutDependency: M,
                          layoutId: `Bt1uLf_6h`,
                          svg: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33 0.5H18C17.3372 0.500662 16.7017 0.764266 16.233 1.23296C15.7643 1.70166 15.5007 2.33716 15.5 3V15.5H3C2.33716 15.5007 1.70166 15.7643 1.23296 16.233C0.764266 16.7017 0.500662 17.3372 0.5 18V35.5H35.5V3C35.4992 2.33719 35.2356 1.70175 34.7669 1.23307C34.2983 0.764397 33.6628 0.500761 33 0.5ZM9.25 33V24.25H14.25V33H9.25ZM33 33H16.75V23C16.75 22.6685 16.6183 22.3505 16.3839 22.1161C16.1495 21.8817 15.8315 21.75 15.5 21.75H8C7.66848 21.75 7.35054 21.8817 7.11612 22.1161C6.8817 22.3505 6.75 22.6685 6.75 23V33H3V18H18V3H33V33Z" fill="black" fill-opacity="0.4"/>
<path d="M23 8H20.5V10.5H23V8Z" fill="black" fill-opacity="0.4"/>
<path d="M30.5 8H28V10.5H30.5V8Z" fill="black" fill-opacity="0.4"/>
<path d="M23 15.5H20.5V18H23V15.5Z" fill="black" fill-opacity="0.4"/>
<path d="M30.5 15.5H28V18H30.5V15.5Z" fill="black" fill-opacity="0.4"/>
<path d="M23 22.9995H20.5V25.4995H23V22.9995Z" fill="black" fill-opacity="0.4"/>
<path d="M30.5 22.9995H28V25.4995H30.5V22.9995Z" fill="black" fill-opacity="0.4"/>
<path d="M9.25 13H6.75C6.75195 11.343 7.41106 9.75442 8.58274 8.58274C9.75442 7.41106 11.343 6.75195 13 6.75V9.25C12.0058 9.25109 11.0526 9.64653 10.3496 10.3496C9.64653 11.0526 9.25109 12.0058 9.25 13Z" fill="black" fill-opacity="0.4"/>
<path d="M3 13H0.5C0.503772 9.68595 1.82194 6.50872 4.16533 4.16533C6.50872 1.82194 9.68595 0.503772 13 0.5V3C10.3488 3.00304 7.807 4.05759 5.93229 5.93229C4.05759 7.807 3.00304 10.3488 3 13Z" fill="black" fill-opacity="0.4"/>
</svg>
`,
                          withExternalLayout: !0,
                        }),
                      }),
                    de() &&
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-159tgn`,
                        "data-framer-name": `Building--insights-1`,
                        layoutDependency: M,
                        layoutId: `psCLOumyb`,
                        style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                        children: /*#__PURE__*/ l(C, {
                          className: `framer-5tqmf0`,
                          "data-framer-name": `Vector`,
                          fill: `rgba(0,0,0,1)`,
                          intrinsicHeight: 36,
                          intrinsicWidth: 36,
                          layoutDependency: M,
                          layoutId: `I2255:216;1586:192`,
                          svg: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33 0.5H18C17.3372 0.500662 16.7017 0.764266 16.233 1.23296C15.7643 1.70166 15.5007 2.33716 15.5 3V15.5H3C2.33716 15.5007 1.70166 15.7643 1.23296 16.233C0.764266 16.7017 0.500662 17.3372 0.5 18V35.5H35.5V3C35.4992 2.33719 35.2356 1.70175 34.7669 1.23307C34.2983 0.764397 33.6628 0.500761 33 0.5ZM9.25 33V24.25H14.25V33H9.25ZM33 33H16.75V23C16.75 22.6685 16.6183 22.3505 16.3839 22.1161C16.1495 21.8817 15.8315 21.75 15.5 21.75H8C7.66848 21.75 7.35054 21.8817 7.11612 22.1161C6.8817 22.3505 6.75 22.6685 6.75 23V33H3V18H18V3H33V33Z" fill="black" fill-opacity="0.4"/>
<path d="M23 8H20.5V10.5H23V8Z" fill="black" fill-opacity="0.4"/>
<path d="M30.5 8H28V10.5H30.5V8Z" fill="black" fill-opacity="0.4"/>
<path d="M23 15.5H20.5V18H23V15.5Z" fill="black" fill-opacity="0.4"/>
<path d="M30.5 15.5H28V18H30.5V15.5Z" fill="black" fill-opacity="0.4"/>
<path d="M23 22.9995H20.5V25.4995H23V22.9995Z" fill="black" fill-opacity="0.4"/>
<path d="M30.5 22.9995H28V25.4995H30.5V22.9995Z" fill="black" fill-opacity="0.4"/>
<path d="M9.25 13H6.75C6.75195 11.343 7.41106 9.75442 8.58274 8.58274C9.75442 7.41106 11.343 6.75195 13 6.75V9.25C12.0058 9.25109 11.0526 9.64653 10.3496 10.3496C9.64653 11.0526 9.25109 12.0058 9.25 13Z" fill="black" fill-opacity="0.4"/>
<path d="M3 13H0.5C0.503772 9.68595 1.82194 6.50872 4.16533 4.16533C6.50872 1.82194 9.68595 0.503772 13 0.5V3C10.3488 3.00304 7.807 4.05759 5.93229 5.93229C4.05759 7.807 3.00304 10.3488 3 13Z" fill="black" fill-opacity="0.4"/>
</svg>
`,
                          withExternalLayout: !0,
                        }),
                      }),
                    fe() &&
                      /*#__PURE__*/ l(C, {
                        className: `framer-bjigyh`,
                        "data-framer-name": `Group`,
                        fill: `rgba(0,0,0,1)`,
                        intrinsicHeight: 96,
                        intrinsicWidth: 86,
                        layoutDependency: M,
                        layoutId: `G5VKHIvJY`,
                        svg: `<svg width="86" height="96" viewBox="0 0 86 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M78.2844 57.5418V37.9418C82.5844 37.0418 85.7844 33.2418 85.7844 28.7418C85.7844 23.5418 81.5844 19.3418 76.3844 19.3418C73.5844 19.3418 71.1844 20.5418 69.3844 22.4418L52.2844 12.6418C52.5844 11.7418 52.7844 10.7418 52.7844 9.74185C52.7844 4.54185 48.5844 0.341846 43.3844 0.341846C38.1844 0.341846 33.9844 4.54185 33.9844 9.74185C33.9844 10.7418 34.1844 11.7418 34.4844 12.6418L17.3844 22.4418C15.6844 20.5418 13.1844 19.3418 10.3844 19.3418C5.18441 19.3418 0.984406 23.5418 0.984406 28.7418C0.984406 33.2418 4.18441 37.0418 8.48441 37.9418V57.5418C4.18441 58.4418 0.984406 62.2418 0.984406 66.7418C0.984406 71.9418 5.18441 76.1418 10.3844 76.1418C13.1844 76.1418 15.5844 74.9419 17.3844 73.0419L34.4844 82.8418C34.1844 83.7418 33.9844 84.7418 33.9844 85.7418C33.9844 90.9418 38.1844 95.1418 43.3844 95.1418C48.5844 95.1418 52.7844 90.9418 52.7844 85.7418C52.7844 84.7418 52.5844 83.7418 52.2844 82.8418L69.3844 73.0419C71.0844 74.9419 73.5844 76.1418 76.3844 76.1418C81.5844 76.1418 85.7844 71.9418 85.7844 66.7418C85.7844 62.2418 82.5844 58.4418 78.2844 57.5418ZM76.3844 23.2418C79.3844 23.2418 81.8844 25.7418 81.8844 28.7418C81.8844 31.7418 79.3844 34.2418 76.3844 34.2418C73.3844 34.2418 70.8844 31.7418 70.8844 28.7418C70.8844 25.6418 73.2844 23.2418 76.3844 23.2418ZM43.3844 4.14185C46.3844 4.14185 48.8844 6.64185 48.8844 9.64185C48.8844 12.6418 46.3844 15.1418 43.3844 15.1418C40.3844 15.1418 37.8844 12.6418 37.8844 9.64185C37.8844 6.64185 40.3844 4.14185 43.3844 4.14185ZM4.88441 28.7418C4.88441 25.7418 7.38441 23.2418 10.3844 23.2418C13.3844 23.2418 15.8844 25.7418 15.8844 28.7418C15.8844 31.7418 13.3844 34.2418 10.3844 34.2418C7.38441 34.2418 4.88441 31.7418 4.88441 28.7418ZM10.3844 72.2418C7.38441 72.2418 4.88441 69.7418 4.88441 66.7418C4.88441 63.7418 7.38441 61.2418 10.3844 61.2418C13.3844 61.2418 15.8844 63.7418 15.8844 66.7418C15.8844 69.8418 13.4844 72.2418 10.3844 72.2418ZM43.3844 91.3418C40.3844 91.3418 37.8844 88.8418 37.8844 85.8418C37.8844 82.8418 40.3844 80.3418 43.3844 80.3418C46.3844 80.3418 48.8844 82.8418 48.8844 85.8418C48.8844 88.8418 46.3844 91.3418 43.3844 91.3418ZM50.3844 79.5419C48.6844 77.6419 46.1844 76.4418 43.3844 76.4418C40.5844 76.4418 38.1844 77.6419 36.3844 79.5419L19.3844 69.6418C19.6844 68.7418 19.8844 67.7418 19.8844 66.7418C19.8844 62.2418 16.6844 58.4418 12.3844 57.5418V37.9418C16.6844 37.0418 19.8844 33.2418 19.8844 28.7418C19.8844 27.7418 19.6844 26.7418 19.3844 25.8418L36.3844 15.9418C38.0844 17.8418 40.5844 19.0418 43.3844 19.0418C46.1844 19.0418 48.5844 17.8418 50.3844 15.9418L67.3844 25.8418C67.0844 26.7418 66.8844 27.7418 66.8844 28.7418C66.8844 33.2418 70.0844 37.0418 74.3844 37.9418V57.5418C70.0844 58.4418 66.8844 62.2418 66.8844 66.7418C66.8844 67.7418 67.0844 68.7418 67.3844 69.6418L50.3844 79.5419ZM76.3844 72.2418C73.3844 72.2418 70.8844 69.7418 70.8844 66.7418C70.8844 63.7418 73.3844 61.2418 76.3844 61.2418C79.3844 61.2418 81.8844 63.7418 81.8844 66.7418C81.8844 69.8418 79.3844 72.2418 76.3844 72.2418Z" fill="black" fill-opacity="0.4"/>
<path d="M63.0844 37.8418C63.0844 37.0418 62.5844 36.3418 61.8844 36.0418L44.1844 28.0418C43.6844 27.8418 43.0844 27.8418 42.5844 28.0418L24.8844 36.0418C24.1844 36.3418 23.6844 37.0418 23.6844 37.8418C23.6844 38.6418 24.1844 39.3418 24.8844 39.6418L31.8844 42.7418L24.8844 45.8418C24.1844 46.1418 23.6844 46.8418 23.6844 47.6418C23.6844 48.4418 24.1844 49.1418 24.8844 49.4418L31.8844 52.5418L24.8844 55.7418C24.1844 56.0418 23.6844 56.7418 23.6844 57.5418C23.6844 58.3418 24.1844 59.0418 24.8844 59.3418L42.5844 67.3418C42.8844 67.4418 43.0844 67.5419 43.3844 67.5419C43.6844 67.5419 43.9844 67.4418 44.1844 67.3418L61.8844 59.3418C62.5844 59.0418 63.0844 58.3418 63.0844 57.5418C63.0844 56.7418 62.5844 56.0418 61.8844 55.7418L54.8844 52.5418L61.8844 49.4418C62.5844 49.1418 63.0844 48.4418 63.0844 47.6418C63.0844 46.8418 62.5844 46.1418 61.8844 45.8418L54.8844 42.7418L61.8844 39.6418C62.5844 39.3418 63.0844 38.6418 63.0844 37.8418ZM56.2844 57.6418L43.3844 63.4418L30.4844 57.6418L36.6844 54.8418L42.5844 57.5418C42.8844 57.6418 43.0844 57.7418 43.3844 57.7418C43.6844 57.7418 43.9844 57.6418 44.1844 57.5418L50.0844 54.8418L56.2844 57.6418ZM56.2844 47.7418L43.3844 53.5418L30.4844 47.7418L36.6844 44.9418L42.5844 47.6418C42.8844 47.7418 43.0844 47.8418 43.3844 47.8418C43.6844 47.8418 43.9844 47.7418 44.1844 47.6418L50.0844 44.9418L56.2844 47.7418ZM43.3844 43.6418L30.4844 37.8418L43.3844 32.0418L56.2844 37.8418L43.3844 43.6418Z" fill="black" fill-opacity="0.4"/>
</svg>
`,
                        withExternalLayout: !0,
                      }),
                    pe() &&
                      /*#__PURE__*/ u(f.div, {
                        className: `framer-kveibr`,
                        "data-framer-name": `Calls--all`,
                        layoutDependency: M,
                        layoutId: `IEtc3ROQs`,
                        children: [
                          me() &&
                            /*#__PURE__*/ l(C, {
                              className: `framer-1rjfd35`,
                              "data-framer-name": `Vector`,
                              fill: `rgba(0,0,0,1)`,
                              intrinsicHeight: 76,
                              intrinsicWidth: 71,
                              layoutDependency: M,
                              layoutId: `I3310:2396;19750:620`,
                              svg: `<svg width="71" height="76" viewBox="0 0 71 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60.6663 28.3023C55.1435 28.3023 50.6663 32.7793 50.6663 38.3023C50.6663 43.8253 55.1435 48.3023 60.6663 48.3023C66.189 48.3023 70.6663 43.8251 70.6663 38.3023C70.6663 32.7796 66.1893 28.3023 60.6663 28.3023ZM60.6663 43.3023C57.9093 43.3023 55.6663 41.0593 55.6663 38.3023C55.6663 35.5453 57.9093 33.3023 60.6663 33.3023C63.4233 33.3023 65.6663 35.5453 65.6663 38.3023C65.6663 41.0593 63.4233 43.3023 60.6663 43.3023Z" fill="#73B200"/>
<path d="M33.1663 50.8024V55.8024H39.631L33.879 61.5544C32.9013 61.0856 31.8203 60.8024 30.666 60.8024C26.5303 60.8024 23.166 64.1666 23.166 68.3024C23.166 72.4381 26.5303 75.8023 30.666 75.8023C34.8018 75.8023 38.166 72.4381 38.166 68.3024C38.166 67.1476 37.8823 66.0674 37.4148 65.0894L43.166 59.3374V65.8021H48.166V50.8021L33.1663 50.8024ZM30.6663 70.8024C29.2875 70.8024 28.1663 69.6806 28.1663 68.3024C28.1663 66.9241 29.2875 65.8024 30.6663 65.8024C32.045 65.8024 33.1663 66.9241 33.1663 68.3024C33.1663 69.6806 32.045 70.8024 30.6663 70.8024Z" fill="#73B200"/>
<path d="M24.202 26.8376L20.6663 30.3741L26.0953 35.8026H15.2053C14.17 32.8998 11.421 30.8026 8.16602 30.8026C4.03027 30.8026 0.666016 34.1668 0.666016 38.3026C0.666016 42.4383 4.03027 45.8026 8.16602 45.8026C11.421 45.8026 14.17 43.7053 15.2053 40.8026H26.0953L20.6663 46.2311L24.202 49.7676L35.6663 38.3028L24.202 26.8376ZM8.16627 40.8023C6.78752 40.8023 5.66627 39.6806 5.66627 38.3023C5.66627 36.9241 6.78752 35.8023 8.16627 35.8023C9.54502 35.8023 10.6663 36.9241 10.6663 38.3023C10.6663 39.6806 9.54502 40.8023 8.16627 40.8023Z" fill="#73B200"/>
<path d="M43.1663 10.8024V17.2671L37.415 11.5151C37.8825 10.5374 38.1663 9.45711 38.1663 8.30211C38.1663 4.16636 34.802 0.802109 30.6663 0.802109C26.5305 0.802109 23.1663 4.16636 23.1663 8.30211C23.1663 12.4379 26.5305 15.8021 30.6663 15.8021C31.8205 15.8021 32.9013 15.5189 33.8793 15.0501L39.6313 20.8021H33.1665V25.8021H48.1665V10.8021L43.1663 10.8024ZM28.1663 8.30236C28.1663 6.92411 29.2875 5.80236 30.6663 5.80236C32.045 5.80236 33.1663 6.92411 33.1663 8.30236C33.1663 9.68061 32.045 10.8024 30.6663 10.8024C29.2875 10.8024 28.1663 9.68061 28.1663 8.30236Z" fill="#73B200"/>
</svg>
`,
                              withExternalLayout: !0,
                            }),
                          /*#__PURE__*/ l(f.div, {
                            className: `framer-1nrfhjv`,
                            "data-framer-name": `Dashboard--reference`,
                            layoutDependency: M,
                            layoutId: `YBt3AHheQ`,
                            style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                            children: /*#__PURE__*/ l(C, {
                              className: `framer-2jivd5`,
                              "data-framer-name": `Vector`,
                              layout: `position`,
                              layoutDependency: M,
                              layoutId: `IYaJZGqkO`,
                              opacity: 1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 79 79"><path d="M 5.643 50.786 L 5.643 56.429 L 18.582 56.429 L 0 75.01 L 3.99 79 L 22.571 60.418 L 22.571 73.357 L 28.214 73.357 L 28.214 50.786 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 67.714 53.607 L 62.071 53.607 L 62.071 67.714 L 67.714 67.714 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 56.429 39.5 L 50.786 39.5 L 50.786 67.714 L 56.429 67.714 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 45.143 45.143 L 39.5 45.143 L 39.5 67.714 L 45.143 67.714 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 73.357 0 L 5.643 0 C 4.147 0.001 2.712 0.596 1.654 1.654 C 0.596 2.712 0.001 4.147 0 5.643 L 0 39.5 L 5.643 39.5 L 5.643 31.036 L 73.36 31.036 L 73.363 73.357 L 39.5 73.357 L 39.5 79 L 73.357 79 C 74.853 78.998 76.287 78.403 77.345 77.345 C 78.403 76.287 78.998 74.853 79 73.357 L 79 5.643 C 78.998 4.147 78.403 2.713 77.346 1.655 C 76.287 0.597 74.853 0.002 73.357 0 Z M 28.214 25.393 L 5.643 25.393 L 5.643 5.643 L 28.214 5.643 Z M 33.857 25.393 L 33.857 5.643 L 73.357 5.643 L 73.359 25.393 Z" fill="rgba(5, 11, 20, 0.4)"></path></svg>`,
                              svgContentId: 12617255971,
                              withExternalLayout: !0,
                              ...K(
                                {
                                  JUEOuqkAM: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56"><path d="M 20 36 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 48 48 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 40 48 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 32 48 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 54.827 1.173 C 54.077 0.423 55.577 1.923 54.827 1.173 Z M 20 4 Z M 52.001 18 Z" fill="rgba(5, 11, 20, 0.4)"></path></svg>`,
                                    svgContentId: 12702254881,
                                  },
                                },
                                x,
                                O
                              ),
                            }),
                          }),
                        ],
                      }),
                    z() &&
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-rg4ldn`,
                        "data-framer-name": `Calls--all`,
                        layoutDependency: M,
                        layoutId: `ded_djzUP`,
                        style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                        transformTemplate: q,
                        children: /*#__PURE__*/ l(C, {
                          className: `framer-1fm16y9`,
                          "data-framer-name": `Vector`,
                          fill: `rgba(0,0,0,1)`,
                          intrinsicHeight: 16,
                          intrinsicWidth: 14,
                          layoutDependency: M,
                          layoutId: `xrngTfnIb`,
                          svg: `<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0001 6.00005C10.8955 6.00005 10.0001 6.89545 10.0001 8.00005C10.0001 9.10465 10.8955 10 12.0001 10C13.1046 10 14.0001 9.1046 14.0001 8.00005C14.0001 6.8955 13.1047 6.00005 12.0001 6.00005ZM12.0001 9.00005C11.4487 9.00005 11.0001 8.55145 11.0001 8.00005C11.0001 7.44865 11.4487 7.00005 12.0001 7.00005C12.5515 7.00005 13.0001 7.44865 13.0001 8.00005C13.0001 8.55145 12.5515 9.00005 12.0001 9.00005Z" fill="#161616" fill-opacity="0.4"/>
<path d="M6.50005 10.5V11.5H7.793L6.6426 12.6504C6.44705 12.5567 6.23085 12.5 6 12.5C5.17285 12.5 4.5 13.1729 4.5 14C4.5 14.8272 5.17285 15.5 6 15.5C6.82715 15.5 7.5 14.8272 7.5 14C7.5 13.7691 7.44325 13.553 7.34975 13.3574L8.5 12.207V13.5H9.5V10.5L6.50005 10.5ZM6.00005 14.5C5.7243 14.5 5.50005 14.2757 5.50005 14C5.50005 13.7244 5.7243 13.5 6.00005 13.5C6.2758 13.5 6.50005 13.7244 6.50005 14C6.50005 14.2757 6.2758 14.5 6.00005 14.5Z" fill="#161616" fill-opacity="0.4"/>
<path d="M4.7072 5.70709L4.00005 6.41439L5.08585 7.50009H2.90785C2.7008 6.91954 2.151 6.50009 1.5 6.50009C0.67285 6.50009 0 7.17294 0 8.00009C0 8.82724 0.67285 9.50009 1.5 9.50009C2.151 9.50009 2.7008 9.08064 2.90785 8.50009H5.08585L4.00005 9.58579L4.7072 10.2931L7.00005 8.00014L4.7072 5.70709ZM1.50005 8.50004C1.2243 8.50004 1.00005 8.27569 1.00005 8.00004C1.00005 7.72439 1.2243 7.50004 1.50005 7.50004C1.7758 7.50004 2.00005 7.72439 2.00005 8.00004C2.00005 8.27569 1.7758 8.50004 1.50005 8.50004Z" fill="#161616" fill-opacity="0.4"/>
<path d="M8.50005 2.50005V3.793L7.3498 2.6426C7.4433 2.44705 7.50005 2.231 7.50005 2C7.50005 1.17285 6.8272 0.5 6.00005 0.5C5.1729 0.5 4.50005 1.17285 4.50005 2C4.50005 2.82715 5.1729 3.5 6.00005 3.5C6.2309 3.5 6.44705 3.44335 6.64265 3.3496L7.79305 4.5H6.5001V5.5H9.5001V2.5L8.50005 2.50005ZM5.50005 2.00005C5.50005 1.7244 5.7243 1.50005 6.00005 1.50005C6.2758 1.50005 6.50005 1.7244 6.50005 2.00005C6.50005 2.2757 6.2758 2.50005 6.00005 2.50005C5.7243 2.50005 5.50005 2.2757 5.50005 2.00005Z" fill="#161616" fill-opacity="0.4"/>
</svg>
`,
                          withExternalLayout: !0,
                        }),
                      }),
                    he() &&
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-1t8ooil`,
                        "data-framer-name": `Calls--all`,
                        layoutDependency: M,
                        layoutId: `elt_U8WF_`,
                        style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                        children: /*#__PURE__*/ l(C, {
                          className: `framer-1u4wxlh`,
                          "data-framer-name": `Vector`,
                          fill: `rgba(0,0,0,1)`,
                          intrinsicHeight: 16,
                          intrinsicWidth: 14,
                          layoutDependency: M,
                          layoutId: `OoxSz3RHh`,
                          svg: `<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0001 6.00005C10.8955 6.00005 10.0001 6.89545 10.0001 8.00005C10.0001 9.10465 10.8955 10 12.0001 10C13.1046 10 14.0001 9.1046 14.0001 8.00005C14.0001 6.8955 13.1047 6.00005 12.0001 6.00005ZM12.0001 9.00005C11.4487 9.00005 11.0001 8.55145 11.0001 8.00005C11.0001 7.44865 11.4487 7.00005 12.0001 7.00005C12.5515 7.00005 13.0001 7.44865 13.0001 8.00005C13.0001 8.55145 12.5515 9.00005 12.0001 9.00005Z" fill="#161616" fill-opacity="0.4"/>
<path d="M6.50005 10.5V11.5H7.793L6.6426 12.6504C6.44705 12.5567 6.23085 12.5 6 12.5C5.17285 12.5 4.5 13.1729 4.5 14C4.5 14.8272 5.17285 15.5 6 15.5C6.82715 15.5 7.5 14.8272 7.5 14C7.5 13.7691 7.44325 13.553 7.34975 13.3574L8.5 12.207V13.5H9.5V10.5L6.50005 10.5ZM6.00005 14.5C5.7243 14.5 5.50005 14.2757 5.50005 14C5.50005 13.7244 5.7243 13.5 6.00005 13.5C6.2758 13.5 6.50005 13.7244 6.50005 14C6.50005 14.2757 6.2758 14.5 6.00005 14.5Z" fill="#161616" fill-opacity="0.4"/>
<path d="M4.7072 5.70709L4.00005 6.41439L5.08585 7.50009H2.90785C2.7008 6.91954 2.151 6.50009 1.5 6.50009C0.67285 6.50009 0 7.17294 0 8.00009C0 8.82724 0.67285 9.50009 1.5 9.50009C2.151 9.50009 2.7008 9.08064 2.90785 8.50009H5.08585L4.00005 9.58579L4.7072 10.2931L7.00005 8.00014L4.7072 5.70709ZM1.50005 8.50004C1.2243 8.50004 1.00005 8.27569 1.00005 8.00004C1.00005 7.72439 1.2243 7.50004 1.50005 7.50004C1.7758 7.50004 2.00005 7.72439 2.00005 8.00004C2.00005 8.27569 1.7758 8.50004 1.50005 8.50004Z" fill="#161616" fill-opacity="0.4"/>
<path d="M8.50005 2.50005V3.793L7.3498 2.6426C7.4433 2.44705 7.50005 2.231 7.50005 2C7.50005 1.17285 6.8272 0.5 6.00005 0.5C5.1729 0.5 4.50005 1.17285 4.50005 2C4.50005 2.82715 5.1729 3.5 6.00005 3.5C6.2309 3.5 6.44705 3.44335 6.64265 3.3496L7.79305 4.5H6.5001V5.5H9.5001V2.5L8.50005 2.50005ZM5.50005 2.00005C5.50005 1.7244 5.7243 1.50005 6.00005 1.50005C6.2758 1.50005 6.50005 1.7244 6.50005 2.00005C6.50005 2.2757 6.2758 2.50005 6.00005 2.50005C5.7243 2.50005 5.50005 2.2757 5.50005 2.00005Z" fill="#161616" fill-opacity="0.4"/>
</svg>
`,
                          withExternalLayout: !0,
                        }),
                      }),
                    ge() &&
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-4b71xb`,
                        "data-framer-name": `Calls--all`,
                        layoutDependency: M,
                        layoutId: `WpERN5IYL`,
                        style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                        children: /*#__PURE__*/ l(C, {
                          className: `framer-jiryfy`,
                          "data-framer-name": `Vector`,
                          fill: `rgba(0,0,0,1)`,
                          intrinsicHeight: 16,
                          intrinsicWidth: 14,
                          layoutDependency: M,
                          layoutId: `I2255:223;19750:620`,
                          svg: `<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0001 6.00005C10.8955 6.00005 10.0001 6.89545 10.0001 8.00005C10.0001 9.10465 10.8955 10 12.0001 10C13.1046 10 14.0001 9.1046 14.0001 8.00005C14.0001 6.8955 13.1047 6.00005 12.0001 6.00005ZM12.0001 9.00005C11.4487 9.00005 11.0001 8.55145 11.0001 8.00005C11.0001 7.44865 11.4487 7.00005 12.0001 7.00005C12.5515 7.00005 13.0001 7.44865 13.0001 8.00005C13.0001 8.55145 12.5515 9.00005 12.0001 9.00005Z" fill="#161616" fill-opacity="0.4"/>
<path d="M6.50005 10.5V11.5H7.793L6.6426 12.6504C6.44705 12.5567 6.23085 12.5 6 12.5C5.17285 12.5 4.5 13.1729 4.5 14C4.5 14.8272 5.17285 15.5 6 15.5C6.82715 15.5 7.5 14.8272 7.5 14C7.5 13.7691 7.44325 13.553 7.34975 13.3574L8.5 12.207V13.5H9.5V10.5L6.50005 10.5ZM6.00005 14.5C5.7243 14.5 5.50005 14.2757 5.50005 14C5.50005 13.7244 5.7243 13.5 6.00005 13.5C6.2758 13.5 6.50005 13.7244 6.50005 14C6.50005 14.2757 6.2758 14.5 6.00005 14.5Z" fill="#161616" fill-opacity="0.4"/>
<path d="M4.7072 5.70709L4.00005 6.41439L5.08585 7.50009H2.90785C2.7008 6.91954 2.151 6.50009 1.5 6.50009C0.67285 6.50009 0 7.17294 0 8.00009C0 8.82724 0.67285 9.50009 1.5 9.50009C2.151 9.50009 2.7008 9.08064 2.90785 8.50009H5.08585L4.00005 9.58579L4.7072 10.2931L7.00005 8.00014L4.7072 5.70709ZM1.50005 8.50004C1.2243 8.50004 1.00005 8.27569 1.00005 8.00004C1.00005 7.72439 1.2243 7.50004 1.50005 7.50004C1.7758 7.50004 2.00005 7.72439 2.00005 8.00004C2.00005 8.27569 1.7758 8.50004 1.50005 8.50004Z" fill="#161616" fill-opacity="0.4"/>
<path d="M8.50005 2.50005V3.793L7.3498 2.6426C7.4433 2.44705 7.50005 2.231 7.50005 2C7.50005 1.17285 6.8272 0.5 6.00005 0.5C5.1729 0.5 4.50005 1.17285 4.50005 2C4.50005 2.82715 5.1729 3.5 6.00005 3.5C6.2309 3.5 6.44705 3.44335 6.64265 3.3496L7.79305 4.5H6.5001V5.5H9.5001V2.5L8.50005 2.50005ZM5.50005 2.00005C5.50005 1.7244 5.7243 1.50005 6.00005 1.50005C6.2758 1.50005 6.50005 1.7244 6.50005 2.00005C6.50005 2.2757 6.2758 2.50005 6.00005 2.50005C5.7243 2.50005 5.50005 2.2757 5.50005 2.00005Z" fill="#161616" fill-opacity="0.4"/>
</svg>
`,
                          withExternalLayout: !0,
                        }),
                      }),
                    _e() &&
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-v0cmv0`,
                        "data-framer-name": `App-connectivity`,
                        layoutDependency: M,
                        layoutId: `nagxVpZWk`,
                        style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                        transformTemplate: q,
                        children: /*#__PURE__*/ l(C, {
                          className: `framer-14hd882`,
                          "data-framer-name": `Vector`,
                          fill: `rgba(0,0,0,1)`,
                          intrinsicHeight: 14,
                          intrinsicWidth: 14,
                          layoutDependency: M,
                          layoutId: `pvTZc5eOW`,
                          svg: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 6H13C13.2651 5.9997 13.5193 5.89424 13.7068 5.70677C13.8942 5.5193 13.9997 5.26512 14 5V1C13.9997 0.734877 13.8942 0.4807 13.7068 0.293229C13.5193 0.105759 13.2651 0.000304367 13 0H9C8.73488 0.000304367 8.4807 0.105759 8.29323 0.293229C8.10576 0.4807 8.0003 0.734877 8 1H3.5C3.23488 1.0003 2.9807 1.10576 2.79323 1.29323C2.60576 1.4807 2.5003 1.73488 2.5 2V4H1C0.734877 4.0003 0.4807 4.10576 0.293229 4.29323C0.105759 4.4807 0.000304367 4.73488 0 5V9C0.000304367 9.26512 0.105759 9.5193 0.293229 9.70677C0.4807 9.89424 0.734877 9.9997 1 10H2V12C2.0003 12.2651 2.10576 12.5193 2.29323 12.7068C2.4807 12.8942 2.73488 12.9997 3 13H8C8.0003 13.2651 8.10576 13.5193 8.29323 13.7068C8.4807 13.8942 8.73488 13.9997 9 14H13C13.2651 13.9997 13.5193 13.8942 13.7068 13.7068C13.8942 13.5193 13.9997 13.2651 14 13V9C13.9997 8.73488 13.8942 8.4807 13.7068 8.29323C13.5193 8.10576 13.2651 8.0003 13 8H9C8.73488 8.0003 8.4807 8.10576 8.29323 8.29323C8.10576 8.4807 8.0003 8.73488 8 9V12H3V10H5C5.26512 9.9997 5.5193 9.89424 5.70677 9.70677C5.89424 9.5193 5.9997 9.26512 6 9V5C5.9997 4.73488 5.89424 4.4807 5.70677 4.29323C5.5193 4.10576 5.26512 4.0003 5 4H3.5V2H8V5C8.0003 5.26512 8.10576 5.5193 8.29323 5.70677C8.4807 5.89424 8.73488 5.9997 9 6ZM9 13V11H13V13H9ZM13 9V10H9V9H13ZM1 9V7H5V9H1ZM5.00025 6H1V5H5L5.00025 6ZM9 5V3H13V5H9ZM13 1V2H9V1H13Z" fill="#161616" fill-opacity="0.4"/>
</svg>
`,
                          withExternalLayout: !0,
                        }),
                      }),
                    ve() &&
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-1ldil6h`,
                        "data-framer-name": `App-connectivity`,
                        layoutDependency: M,
                        layoutId: `kXkmByltb`,
                        style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                        children: /*#__PURE__*/ l(C, {
                          className: `framer-1vk2pdl`,
                          "data-framer-name": `Vector`,
                          fill: `rgba(0,0,0,1)`,
                          intrinsicHeight: 14,
                          intrinsicWidth: 14,
                          layoutDependency: M,
                          layoutId: `rtt0AtdK2`,
                          svg: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 6H13C13.2651 5.9997 13.5193 5.89424 13.7068 5.70677C13.8942 5.5193 13.9997 5.26512 14 5V1C13.9997 0.734877 13.8942 0.4807 13.7068 0.293229C13.5193 0.105759 13.2651 0.000304367 13 0H9C8.73488 0.000304367 8.4807 0.105759 8.29323 0.293229C8.10576 0.4807 8.0003 0.734877 8 1H3.5C3.23488 1.0003 2.9807 1.10576 2.79323 1.29323C2.60576 1.4807 2.5003 1.73488 2.5 2V4H1C0.734877 4.0003 0.4807 4.10576 0.293229 4.29323C0.105759 4.4807 0.000304367 4.73488 0 5V9C0.000304367 9.26512 0.105759 9.5193 0.293229 9.70677C0.4807 9.89424 0.734877 9.9997 1 10H2V12C2.0003 12.2651 2.10576 12.5193 2.29323 12.7068C2.4807 12.8942 2.73488 12.9997 3 13H8C8.0003 13.2651 8.10576 13.5193 8.29323 13.7068C8.4807 13.8942 8.73488 13.9997 9 14H13C13.2651 13.9997 13.5193 13.8942 13.7068 13.7068C13.8942 13.5193 13.9997 13.2651 14 13V9C13.9997 8.73488 13.8942 8.4807 13.7068 8.29323C13.5193 8.10576 13.2651 8.0003 13 8H9C8.73488 8.0003 8.4807 8.10576 8.29323 8.29323C8.10576 8.4807 8.0003 8.73488 8 9V12H3V10H5C5.26512 9.9997 5.5193 9.89424 5.70677 9.70677C5.89424 9.5193 5.9997 9.26512 6 9V5C5.9997 4.73488 5.89424 4.4807 5.70677 4.29323C5.5193 4.10576 5.26512 4.0003 5 4H3.5V2H8V5C8.0003 5.26512 8.10576 5.5193 8.29323 5.70677C8.4807 5.89424 8.73488 5.9997 9 6ZM9 13V11H13V13H9ZM13 9V10H9V9H13ZM1 9V7H5V9H1ZM5.00025 6H1V5H5L5.00025 6ZM9 5V3H13V5H9ZM13 1V2H9V1H13Z" fill="#161616" fill-opacity="0.4"/>
</svg>
`,
                          withExternalLayout: !0,
                        }),
                      }),
                    be() &&
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-1tayr37`,
                        "data-framer-name": `App-connectivity`,
                        layoutDependency: M,
                        layoutId: `dNSIlv3Nh`,
                        style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                        children: /*#__PURE__*/ l(C, {
                          className: `framer-13r6bow`,
                          "data-framer-name": `Vector`,
                          fill: `rgba(0,0,0,1)`,
                          intrinsicHeight: 14,
                          intrinsicWidth: 14,
                          layoutDependency: M,
                          layoutId: `I2255:221;1586:108`,
                          svg: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 6H13C13.2651 5.9997 13.5193 5.89424 13.7068 5.70677C13.8942 5.5193 13.9997 5.26512 14 5V1C13.9997 0.734877 13.8942 0.4807 13.7068 0.293229C13.5193 0.105759 13.2651 0.000304367 13 0H9C8.73488 0.000304367 8.4807 0.105759 8.29323 0.293229C8.10576 0.4807 8.0003 0.734877 8 1H3.5C3.23488 1.0003 2.9807 1.10576 2.79323 1.29323C2.60576 1.4807 2.5003 1.73488 2.5 2V4H1C0.734877 4.0003 0.4807 4.10576 0.293229 4.29323C0.105759 4.4807 0.000304367 4.73488 0 5V9C0.000304367 9.26512 0.105759 9.5193 0.293229 9.70677C0.4807 9.89424 0.734877 9.9997 1 10H2V12C2.0003 12.2651 2.10576 12.5193 2.29323 12.7068C2.4807 12.8942 2.73488 12.9997 3 13H8C8.0003 13.2651 8.10576 13.5193 8.29323 13.7068C8.4807 13.8942 8.73488 13.9997 9 14H13C13.2651 13.9997 13.5193 13.8942 13.7068 13.7068C13.8942 13.5193 13.9997 13.2651 14 13V9C13.9997 8.73488 13.8942 8.4807 13.7068 8.29323C13.5193 8.10576 13.2651 8.0003 13 8H9C8.73488 8.0003 8.4807 8.10576 8.29323 8.29323C8.10576 8.4807 8.0003 8.73488 8 9V12H3V10H5C5.26512 9.9997 5.5193 9.89424 5.70677 9.70677C5.89424 9.5193 5.9997 9.26512 6 9V5C5.9997 4.73488 5.89424 4.4807 5.70677 4.29323C5.5193 4.10576 5.26512 4.0003 5 4H3.5V2H8V5C8.0003 5.26512 8.10576 5.5193 8.29323 5.70677C8.4807 5.89424 8.73488 5.9997 9 6ZM9 13V11H13V13H9ZM13 9V10H9V9H13ZM1 9V7H5V9H1ZM5.00025 6H1V5H5L5.00025 6ZM9 5V3H13V5H9ZM13 1V2H9V1H13Z" fill="#161616" fill-opacity="0.4"/>
</svg>
`,
                          withExternalLayout: !0,
                        }),
                      }),
                    xe() &&
                      /*#__PURE__*/ l(C, {
                        className: `framer-tmmfwc`,
                        layout: `position`,
                        layoutDependency: M,
                        layoutId: `zRJG1DZWq`,
                        opacity: 1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 81 81"><path d="M 79.278 70.931 L 74.732 70.931 L 74.732 30.269 L 78.617 30.269 C 79.36 30.269 79.939 29.691 79.939 28.947 L 79.939 25.063 C 79.939 24.319 79.36 23.74 78.617 23.74 L 74.732 23.74 L 74.732 14.154 C 74.732 13.41 74.154 12.831 73.41 12.831 L 72.088 12.831 L 72.088 1.922 C 72.088 1.179 71.509 0.6 70.765 0.6 C 70.021 0.6 69.443 1.179 69.443 1.922 L 69.443 6.964 L 40.931 23.823 L 29.03 23.823 C 28.286 23.823 27.707 24.402 27.707 25.145 L 27.707 29.03 C 27.707 29.774 28.286 30.352 29.03 30.352 L 37.377 30.352 L 37.377 34.815 C 37.377 35.559 37.955 36.137 38.699 36.137 L 40.021 36.137 L 40.021 51.592 L 34.236 51.592 C 33.493 51.592 32.914 52.17 32.914 52.914 L 32.914 59.36 C 32.914 60.104 33.493 60.683 34.236 60.683 L 48.451 60.683 C 49.195 60.683 49.774 60.104 49.774 59.36 L 49.774 52.914 C 49.774 52.17 49.195 51.592 48.451 51.592 L 42.666 51.592 L 42.666 36.055 L 43.988 36.055 C 44.732 36.055 45.311 35.476 45.311 34.732 L 45.311 30.187 L 67.046 30.187 L 67.046 70.765 L 60.517 70.765 L 63.906 64.98 C 64.154 64.567 64.154 64.071 63.906 63.658 C 63.658 63.245 63.245 62.997 62.749 62.997 L 50.931 62.997 C 50.187 62.997 49.608 63.575 49.608 64.319 L 49.608 66.22 L 27.046 66.22 L 27.046 56.716 C 27.046 55.972 26.468 55.393 25.724 55.393 L 22.501 55.393 L 22.501 50.269 C 22.501 49.526 21.922 48.947 21.179 48.947 L 6.468 48.947 C 5.724 48.947 5.145 49.526 5.145 50.269 L 5.145 66.385 L 1.922 66.385 C 1.426 66.385 1.013 66.633 0.848 67.046 C 0.6 67.46 0.6 67.955 0.848 68.286 L 6.22 77.955 L 1.922 77.955 C 1.179 77.955 0.6 78.534 0.6 79.278 C 0.6 80.021 1.179 80.6 1.922 80.6 L 79.278 80.6 C 80.021 80.6 80.6 80.021 80.6 79.278 L 80.6 72.17 C 80.6 71.509 80.021 70.931 79.278 70.931 Z M 47.046 58.038 L 35.476 58.038 L 35.476 54.154 L 47.046 54.154 Z M 69.608 22.749 L 69.608 15.476 L 72.17 15.476 L 72.17 22.749 C 71.84 22.666 71.344 22.583 70.848 22.583 C 70.517 22.583 69.939 22.666 69.608 22.749 Z M 68.947 27.046 C 68.947 25.972 69.856 25.145 70.848 25.145 C 71.84 25.145 72.749 25.972 72.749 27.046 C 72.749 28.121 71.84 28.947 70.848 28.947 C 69.856 29.03 68.947 28.203 68.947 27.046 Z M 77.377 26.385 L 77.377 27.707 L 75.393 27.707 C 75.476 27.294 75.476 26.881 75.393 26.385 Z M 69.608 9.939 L 69.608 12.831 L 68.286 12.831 C 67.542 12.831 66.964 13.41 66.964 14.154 L 66.964 23.823 L 45.972 23.823 Z M 42.501 33.493 L 39.939 33.493 L 39.939 30.269 L 42.501 30.269 Z M 30.269 27.707 L 30.269 26.385 L 66.385 26.385 C 66.302 26.798 66.302 27.212 66.385 27.707 Z M 69.608 31.344 C 69.939 31.426 70.435 31.509 70.931 31.509 C 71.344 31.509 71.922 31.426 72.253 31.344 L 72.253 70.848 L 69.691 70.848 L 69.691 31.344 Z M 7.707 51.592 L 19.939 51.592 L 19.939 56.716 C 19.939 57.46 20.517 58.038 21.261 58.038 L 24.484 58.038 L 24.484 66.385 L 7.707 66.385 Z M 4.154 68.947 L 50.931 68.947 C 51.674 68.947 52.253 68.369 52.253 67.625 L 52.253 65.724 L 60.517 65.724 L 57.542 70.848 L 38.038 70.848 C 37.294 70.848 36.716 71.426 36.716 72.17 L 36.716 77.955 L 9.112 77.955 Z M 39.278 77.955 L 39.278 73.41 L 77.955 73.41 L 77.955 77.955 Z M 12.253 56.055 C 12.253 56.798 11.674 57.377 10.931 57.377 L 9.608 57.377 C 8.864 57.377 8.286 56.798 8.286 56.055 C 8.286 55.311 8.864 54.732 9.608 54.732 L 10.931 54.732 C 11.674 54.815 12.253 55.393 12.253 56.055 Z M 18.038 56.055 C 18.038 56.798 17.46 57.377 16.716 57.377 L 15.393 57.377 C 14.65 57.377 14.071 56.798 14.071 56.055 C 14.071 55.311 14.65 54.732 15.393 54.732 L 16.716 54.732 C 17.46 54.815 18.038 55.393 18.038 56.055 Z M 12.253 62.501 C 12.253 63.245 11.674 63.823 10.931 63.823 L 9.608 63.823 C 8.864 63.823 8.286 63.245 8.286 62.501 C 8.286 61.757 8.864 61.179 9.608 61.179 L 10.931 61.179 C 11.674 61.261 12.253 61.84 12.253 62.501 Z M 18.038 62.501 C 18.038 63.245 17.46 63.823 16.716 63.823 L 15.393 63.823 C 14.65 63.823 14.071 63.245 14.071 62.501 C 14.071 61.757 14.65 61.179 15.393 61.179 L 16.716 61.179 C 17.46 61.261 18.038 61.84 18.038 62.501 Z M 23.823 62.501 C 23.823 63.245 23.245 63.823 22.501 63.823 L 21.179 63.823 C 20.435 63.823 19.856 63.245 19.856 62.501 C 19.856 61.757 20.435 61.179 21.179 61.179 L 22.501 61.179 C 23.245 61.261 23.823 61.84 23.823 62.501 Z" fill="rgba(5, 11, 20, 0.4)"></path></svg>`,
                        svgContentId: 9492945920,
                        withExternalLayout: !0,
                        ...K({ N9GUwIWPD: { svgContentId: 9670282099 } }, x, O),
                      }),
                    Se() &&
                      /*#__PURE__*/ l(C, {
                        className: `framer-aia4vc`,
                        "data-framer-name": `Group`,
                        fill: `rgba(0,0,0,1)`,
                        intrinsicHeight: 96,
                        intrinsicWidth: 86,
                        layoutDependency: M,
                        layoutId: `i10Efjfkv`,
                        svg: `<svg width="86" height="96" viewBox="0 0 86 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M78.2844 57.5418V37.9418C82.5844 37.0418 85.7844 33.2418 85.7844 28.7418C85.7844 23.5418 81.5844 19.3418 76.3844 19.3418C73.5844 19.3418 71.1844 20.5418 69.3844 22.4418L52.2844 12.6418C52.5844 11.7418 52.7844 10.7418 52.7844 9.74185C52.7844 4.54185 48.5844 0.341846 43.3844 0.341846C38.1844 0.341846 33.9844 4.54185 33.9844 9.74185C33.9844 10.7418 34.1844 11.7418 34.4844 12.6418L17.3844 22.4418C15.6844 20.5418 13.1844 19.3418 10.3844 19.3418C5.18441 19.3418 0.984406 23.5418 0.984406 28.7418C0.984406 33.2418 4.18441 37.0418 8.48441 37.9418V57.5418C4.18441 58.4418 0.984406 62.2418 0.984406 66.7418C0.984406 71.9418 5.18441 76.1418 10.3844 76.1418C13.1844 76.1418 15.5844 74.9419 17.3844 73.0419L34.4844 82.8418C34.1844 83.7418 33.9844 84.7418 33.9844 85.7418C33.9844 90.9418 38.1844 95.1418 43.3844 95.1418C48.5844 95.1418 52.7844 90.9418 52.7844 85.7418C52.7844 84.7418 52.5844 83.7418 52.2844 82.8418L69.3844 73.0419C71.0844 74.9419 73.5844 76.1418 76.3844 76.1418C81.5844 76.1418 85.7844 71.9418 85.7844 66.7418C85.7844 62.2418 82.5844 58.4418 78.2844 57.5418ZM76.3844 23.2418C79.3844 23.2418 81.8844 25.7418 81.8844 28.7418C81.8844 31.7418 79.3844 34.2418 76.3844 34.2418C73.3844 34.2418 70.8844 31.7418 70.8844 28.7418C70.8844 25.6418 73.2844 23.2418 76.3844 23.2418ZM43.3844 4.14185C46.3844 4.14185 48.8844 6.64185 48.8844 9.64185C48.8844 12.6418 46.3844 15.1418 43.3844 15.1418C40.3844 15.1418 37.8844 12.6418 37.8844 9.64185C37.8844 6.64185 40.3844 4.14185 43.3844 4.14185ZM4.88441 28.7418C4.88441 25.7418 7.38441 23.2418 10.3844 23.2418C13.3844 23.2418 15.8844 25.7418 15.8844 28.7418C15.8844 31.7418 13.3844 34.2418 10.3844 34.2418C7.38441 34.2418 4.88441 31.7418 4.88441 28.7418ZM10.3844 72.2418C7.38441 72.2418 4.88441 69.7418 4.88441 66.7418C4.88441 63.7418 7.38441 61.2418 10.3844 61.2418C13.3844 61.2418 15.8844 63.7418 15.8844 66.7418C15.8844 69.8418 13.4844 72.2418 10.3844 72.2418ZM43.3844 91.3418C40.3844 91.3418 37.8844 88.8418 37.8844 85.8418C37.8844 82.8418 40.3844 80.3418 43.3844 80.3418C46.3844 80.3418 48.8844 82.8418 48.8844 85.8418C48.8844 88.8418 46.3844 91.3418 43.3844 91.3418ZM50.3844 79.5419C48.6844 77.6419 46.1844 76.4418 43.3844 76.4418C40.5844 76.4418 38.1844 77.6419 36.3844 79.5419L19.3844 69.6418C19.6844 68.7418 19.8844 67.7418 19.8844 66.7418C19.8844 62.2418 16.6844 58.4418 12.3844 57.5418V37.9418C16.6844 37.0418 19.8844 33.2418 19.8844 28.7418C19.8844 27.7418 19.6844 26.7418 19.3844 25.8418L36.3844 15.9418C38.0844 17.8418 40.5844 19.0418 43.3844 19.0418C46.1844 19.0418 48.5844 17.8418 50.3844 15.9418L67.3844 25.8418C67.0844 26.7418 66.8844 27.7418 66.8844 28.7418C66.8844 33.2418 70.0844 37.0418 74.3844 37.9418V57.5418C70.0844 58.4418 66.8844 62.2418 66.8844 66.7418C66.8844 67.7418 67.0844 68.7418 67.3844 69.6418L50.3844 79.5419ZM76.3844 72.2418C73.3844 72.2418 70.8844 69.7418 70.8844 66.7418C70.8844 63.7418 73.3844 61.2418 76.3844 61.2418C79.3844 61.2418 81.8844 63.7418 81.8844 66.7418C81.8844 69.8418 79.3844 72.2418 76.3844 72.2418Z" fill="black" fill-opacity="0.4"/>
<path d="M63.0844 37.8418C63.0844 37.0418 62.5844 36.3418 61.8844 36.0418L44.1844 28.0418C43.6844 27.8418 43.0844 27.8418 42.5844 28.0418L24.8844 36.0418C24.1844 36.3418 23.6844 37.0418 23.6844 37.8418C23.6844 38.6418 24.1844 39.3418 24.8844 39.6418L31.8844 42.7418L24.8844 45.8418C24.1844 46.1418 23.6844 46.8418 23.6844 47.6418C23.6844 48.4418 24.1844 49.1418 24.8844 49.4418L31.8844 52.5418L24.8844 55.7418C24.1844 56.0418 23.6844 56.7418 23.6844 57.5418C23.6844 58.3418 24.1844 59.0418 24.8844 59.3418L42.5844 67.3418C42.8844 67.4418 43.0844 67.5419 43.3844 67.5419C43.6844 67.5419 43.9844 67.4418 44.1844 67.3418L61.8844 59.3418C62.5844 59.0418 63.0844 58.3418 63.0844 57.5418C63.0844 56.7418 62.5844 56.0418 61.8844 55.7418L54.8844 52.5418L61.8844 49.4418C62.5844 49.1418 63.0844 48.4418 63.0844 47.6418C63.0844 46.8418 62.5844 46.1418 61.8844 45.8418L54.8844 42.7418L61.8844 39.6418C62.5844 39.3418 63.0844 38.6418 63.0844 37.8418ZM56.2844 57.6418L43.3844 63.4418L30.4844 57.6418L36.6844 54.8418L42.5844 57.5418C42.8844 57.6418 43.0844 57.7418 43.3844 57.7418C43.6844 57.7418 43.9844 57.6418 44.1844 57.5418L50.0844 54.8418L56.2844 57.6418ZM56.2844 47.7418L43.3844 53.5418L30.4844 47.7418L36.6844 44.9418L42.5844 47.6418C42.8844 47.7418 43.0844 47.8418 43.3844 47.8418C43.6844 47.8418 43.9844 47.7418 44.1844 47.6418L50.0844 44.9418L56.2844 47.7418ZM43.3844 43.6418L30.4844 37.8418L43.3844 32.0418L56.2844 37.8418L43.3844 43.6418Z" fill="black" fill-opacity="0.4"/>
</svg>
`,
                        withExternalLayout: !0,
                      }),
                    Ce() &&
                      /*#__PURE__*/ l(h, {
                        __fromCanvasComponent: !0,
                        children:
                          G(`v17`, d) ??
                          /*#__PURE__*/ l(a, {
                            children: /*#__PURE__*/ l(f.h5, {
                              className: `framer-styles-preset-1jf1i0p`,
                              "data-styles-preset": `GMGpjhxIs`,
                              dir: `auto`,
                              children: `障碍物众多`,
                            }),
                          }),
                        className: `framer-5gy8ng`,
                        fonts: [`Inter`],
                        layoutDependency: M,
                        layoutId: `wACEZVypr`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        transformTemplate: q,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...K(
                          {
                            agqOb6cmW: {
                              children:
                                G(`v9`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.h5, {
                                    className: `framer-styles-preset-pdpwdq`,
                                    "data-styles-preset": `OBai9LAmP`,
                                    dir: `auto`,
                                    children: `缺乏过程可追溯性`,
                                  }),
                                }),
                            },
                            HaNUFLKvv: {
                              children:
                                G(`v2`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.h5, {
                                    className: `framer-styles-preset-pdpwdq`,
                                    "data-styles-preset": `OBai9LAmP`,
                                    dir: `auto`,
                                    children: `缺乏统一平台`,
                                  }),
                                }),
                            },
                            JUEOuqkAM: {
                              children:
                                G(`v12`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.h5, {
                                    className: `framer-styles-preset-pdpwdq`,
                                    "data-styles-preset": `OBai9LAmP`,
                                    dir: `auto`,
                                    children: `缺乏统一数据平台`,
                                  }),
                                }),
                            },
                            MSJHF2QXE: {
                              children:
                                G(`v3`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.h5, {
                                    className: `framer-styles-preset-pdpwdq`,
                                    "data-styles-preset": `OBai9LAmP`,
                                    dir: `auto`,
                                    children: `船厂环境复杂`,
                                  }),
                                }),
                            },
                            N9UZlDfsa: {
                              children:
                                G(`v20`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ u(f.h5, {
                                    className: `framer-styles-preset-pdpwdq`,
                                    "data-styles-preset": `OBai9LAmP`,
                                    dir: `auto`,
                                    children: [`低效的`, /*#__PURE__*/ l(f.br, {}), `资源调配`],
                                  }),
                                }),
                            },
                            oVfSeqUz7: {
                              children:
                                G(`v11`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.h5, {
                                    className: `framer-styles-preset-pdpwdq`,
                                    "data-styles-preset": `OBai9LAmP`,
                                    dir: `auto`,
                                    children: `全球工厂分散`,
                                  }),
                                }),
                            },
                            p132rZ96c: {
                              children:
                                G(`v16`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.h2, {
                                    className: `framer-styles-preset-on1keu`,
                                    "data-styles-preset": `O8Bh5Q3QT`,
                                    children: `GxP`,
                                  }),
                                }),
                              transformTemplate: void 0,
                            },
                            Rxt7utfM3: {
                              children:
                                G(`v18`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.h5, {
                                    className: `framer-styles-preset-pdpwdq`,
                                    "data-styles-preset": `OBai9LAmP`,
                                    dir: `auto`,
                                    children: `障碍物众多`,
                                  }),
                                }),
                            },
                            RydWzkDLX: {
                              children:
                                G(`v4`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.h5, {
                                    className: `framer-styles-preset-pdpwdq`,
                                    "data-styles-preset": `OBai9LAmP`,
                                    dir: `auto`,
                                    children: `不可预测的能源消耗`,
                                  }),
                                }),
                            },
                            uiiU6jsyt: {
                              children:
                                G(`v7`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.h5, {
                                    className: `framer-styles-preset-pdpwdq`,
                                    "data-styles-preset": `OBai9LAmP`,
                                    dir: `auto`,
                                    children: `数据孤岛`,
                                  }),
                                }),
                            },
                            Vxbf2Jvhy: {
                              children:
                                G(`v14`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.h2, {
                                    className: `framer-styles-preset-on1keu`,
                                    "data-styles-preset": `O8Bh5Q3QT`,
                                    dir: `auto`,
                                    children: `精益生产`,
                                  }),
                                }),
                              transformTemplate: void 0,
                            },
                            y7M3CjmnM: {
                              children:
                                G(`v19`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ u(f.h5, {
                                    className: `framer-styles-preset-pdpwdq`,
                                    "data-styles-preset": `OBai9LAmP`,
                                    dir: `auto`,
                                    children: [`较高的`, /*#__PURE__*/ l(f.br, {}), `资源成本`],
                                  }),
                                }),
                            },
                            yfGjL1R6Q: {
                              children:
                                G(`v13`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.h5, {
                                    className: `framer-styles-preset-pdpwdq`,
                                    "data-styles-preset": `OBai9LAmP`,
                                    dir: `auto`,
                                    children: `碎片化协作`,
                                  }),
                                }),
                            },
                            YWLOn7enl: {
                              children:
                                G(`v15`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.h2, {
                                    className: `framer-styles-preset-on1keu`,
                                    "data-styles-preset": `O8Bh5Q3QT`,
                                    dir: `auto`,
                                    children: `AI驱动`,
                                  }),
                                }),
                            },
                          },
                          x,
                          O
                        ),
                      }),
                    B() &&
                      /*#__PURE__*/ l(C, {
                        className: `framer-1fr502i`,
                        "data-framer-name": `Group`,
                        fill: `rgba(0,0,0,1)`,
                        intrinsicHeight: 96,
                        intrinsicWidth: 86,
                        layoutDependency: M,
                        layoutId: `XRft2ztyl`,
                        svg: `<svg width="86" height="96" viewBox="0 0 86 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M78.2844 57.5418V37.9418C82.5844 37.0418 85.7844 33.2418 85.7844 28.7418C85.7844 23.5418 81.5844 19.3418 76.3844 19.3418C73.5844 19.3418 71.1844 20.5418 69.3844 22.4418L52.2844 12.6418C52.5844 11.7418 52.7844 10.7418 52.7844 9.74185C52.7844 4.54185 48.5844 0.341846 43.3844 0.341846C38.1844 0.341846 33.9844 4.54185 33.9844 9.74185C33.9844 10.7418 34.1844 11.7418 34.4844 12.6418L17.3844 22.4418C15.6844 20.5418 13.1844 19.3418 10.3844 19.3418C5.18441 19.3418 0.984406 23.5418 0.984406 28.7418C0.984406 33.2418 4.18441 37.0418 8.48441 37.9418V57.5418C4.18441 58.4418 0.984406 62.2418 0.984406 66.7418C0.984406 71.9418 5.18441 76.1418 10.3844 76.1418C13.1844 76.1418 15.5844 74.9419 17.3844 73.0419L34.4844 82.8418C34.1844 83.7418 33.9844 84.7418 33.9844 85.7418C33.9844 90.9418 38.1844 95.1418 43.3844 95.1418C48.5844 95.1418 52.7844 90.9418 52.7844 85.7418C52.7844 84.7418 52.5844 83.7418 52.2844 82.8418L69.3844 73.0419C71.0844 74.9419 73.5844 76.1418 76.3844 76.1418C81.5844 76.1418 85.7844 71.9418 85.7844 66.7418C85.7844 62.2418 82.5844 58.4418 78.2844 57.5418ZM76.3844 23.2418C79.3844 23.2418 81.8844 25.7418 81.8844 28.7418C81.8844 31.7418 79.3844 34.2418 76.3844 34.2418C73.3844 34.2418 70.8844 31.7418 70.8844 28.7418C70.8844 25.6418 73.2844 23.2418 76.3844 23.2418ZM43.3844 4.14185C46.3844 4.14185 48.8844 6.64185 48.8844 9.64185C48.8844 12.6418 46.3844 15.1418 43.3844 15.1418C40.3844 15.1418 37.8844 12.6418 37.8844 9.64185C37.8844 6.64185 40.3844 4.14185 43.3844 4.14185ZM4.88441 28.7418C4.88441 25.7418 7.38441 23.2418 10.3844 23.2418C13.3844 23.2418 15.8844 25.7418 15.8844 28.7418C15.8844 31.7418 13.3844 34.2418 10.3844 34.2418C7.38441 34.2418 4.88441 31.7418 4.88441 28.7418ZM10.3844 72.2418C7.38441 72.2418 4.88441 69.7418 4.88441 66.7418C4.88441 63.7418 7.38441 61.2418 10.3844 61.2418C13.3844 61.2418 15.8844 63.7418 15.8844 66.7418C15.8844 69.8418 13.4844 72.2418 10.3844 72.2418ZM43.3844 91.3418C40.3844 91.3418 37.8844 88.8418 37.8844 85.8418C37.8844 82.8418 40.3844 80.3418 43.3844 80.3418C46.3844 80.3418 48.8844 82.8418 48.8844 85.8418C48.8844 88.8418 46.3844 91.3418 43.3844 91.3418ZM50.3844 79.5419C48.6844 77.6419 46.1844 76.4418 43.3844 76.4418C40.5844 76.4418 38.1844 77.6419 36.3844 79.5419L19.3844 69.6418C19.6844 68.7418 19.8844 67.7418 19.8844 66.7418C19.8844 62.2418 16.6844 58.4418 12.3844 57.5418V37.9418C16.6844 37.0418 19.8844 33.2418 19.8844 28.7418C19.8844 27.7418 19.6844 26.7418 19.3844 25.8418L36.3844 15.9418C38.0844 17.8418 40.5844 19.0418 43.3844 19.0418C46.1844 19.0418 48.5844 17.8418 50.3844 15.9418L67.3844 25.8418C67.0844 26.7418 66.8844 27.7418 66.8844 28.7418C66.8844 33.2418 70.0844 37.0418 74.3844 37.9418V57.5418C70.0844 58.4418 66.8844 62.2418 66.8844 66.7418C66.8844 67.7418 67.0844 68.7418 67.3844 69.6418L50.3844 79.5419ZM76.3844 72.2418C73.3844 72.2418 70.8844 69.7418 70.8844 66.7418C70.8844 63.7418 73.3844 61.2418 76.3844 61.2418C79.3844 61.2418 81.8844 63.7418 81.8844 66.7418C81.8844 69.8418 79.3844 72.2418 76.3844 72.2418Z" fill="black" fill-opacity="0.4"/>
<path d="M63.0844 37.8418C63.0844 37.0418 62.5844 36.3418 61.8844 36.0418L44.1844 28.0418C43.6844 27.8418 43.0844 27.8418 42.5844 28.0418L24.8844 36.0418C24.1844 36.3418 23.6844 37.0418 23.6844 37.8418C23.6844 38.6418 24.1844 39.3418 24.8844 39.6418L31.8844 42.7418L24.8844 45.8418C24.1844 46.1418 23.6844 46.8418 23.6844 47.6418C23.6844 48.4418 24.1844 49.1418 24.8844 49.4418L31.8844 52.5418L24.8844 55.7418C24.1844 56.0418 23.6844 56.7418 23.6844 57.5418C23.6844 58.3418 24.1844 59.0418 24.8844 59.3418L42.5844 67.3418C42.8844 67.4418 43.0844 67.5419 43.3844 67.5419C43.6844 67.5419 43.9844 67.4418 44.1844 67.3418L61.8844 59.3418C62.5844 59.0418 63.0844 58.3418 63.0844 57.5418C63.0844 56.7418 62.5844 56.0418 61.8844 55.7418L54.8844 52.5418L61.8844 49.4418C62.5844 49.1418 63.0844 48.4418 63.0844 47.6418C63.0844 46.8418 62.5844 46.1418 61.8844 45.8418L54.8844 42.7418L61.8844 39.6418C62.5844 39.3418 63.0844 38.6418 63.0844 37.8418ZM56.2844 57.6418L43.3844 63.4418L30.4844 57.6418L36.6844 54.8418L42.5844 57.5418C42.8844 57.6418 43.0844 57.7418 43.3844 57.7418C43.6844 57.7418 43.9844 57.6418 44.1844 57.5418L50.0844 54.8418L56.2844 57.6418ZM56.2844 47.7418L43.3844 53.5418L30.4844 47.7418L36.6844 44.9418L42.5844 47.6418C42.8844 47.7418 43.0844 47.8418 43.3844 47.8418C43.6844 47.8418 43.9844 47.7418 44.1844 47.6418L50.0844 44.9418L56.2844 47.7418ZM43.3844 43.6418L30.4844 37.8418L43.3844 32.0418L56.2844 37.8418L43.3844 43.6418Z" fill="black" fill-opacity="0.4"/>
</svg>
`,
                        withExternalLayout: !0,
                      }),
                    we() &&
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-1u1ti75`,
                        "data-framer-name": `Search--locate--mirror`,
                        layoutDependency: M,
                        layoutId: `p76qLzsux`,
                        style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                        children: /*#__PURE__*/ l(C, {
                          className: `framer-4w8rsd`,
                          "data-framer-name": `Vector`,
                          layout: `position`,
                          layoutDependency: M,
                          layoutId: `xazktqO9n`,
                          opacity: 1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 78 78"><path d="M 52.929 74.1 L 39.836 61.007 C 42.9 57.107 44.571 52.371 44.571 47.357 C 44.571 35.1 34.543 25.071 22.286 25.071 C 10.029 25.071 0 35.1 0 47.357 C 0 59.614 10.029 69.643 22.286 69.643 C 27.3 69.643 32.036 67.971 35.936 64.907 L 49.029 78 Z M 22.286 64.071 C 13.093 64.071 5.571 56.55 5.571 47.357 C 5.571 38.164 13.093 30.643 22.286 30.643 C 31.479 30.643 39 38.164 39 47.357 C 39 56.55 31.479 64.071 22.286 64.071 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 78 27.857 L 55.714 27.857 L 55.714 33.429 L 78 33.429 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 78 13.929 L 33.429 13.929 L 33.429 19.5 L 78 19.5 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 78 0 L 33.429 0 L 33.429 5.571 L 78 5.571 Z" fill="rgba(5, 11, 20, 0.4)"></path></svg>`,
                          svgContentId: 11494040279,
                          withExternalLayout: !0,
                        }),
                      }),
                    Te() &&
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-1lvv1rv`,
                        "data-framer-name": `Group--access`,
                        layoutDependency: M,
                        layoutId: `S2JxF3GeH`,
                        style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                        children:
                          V() &&
                          /*#__PURE__*/ l(C, {
                            className: `framer-iqoczt`,
                            "data-framer-name": `Vector`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 14,
                            intrinsicWidth: 14,
                            layoutDependency: M,
                            layoutId: `I2083:657;1582:21`,
                            svg: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 8.5H2V7.5C2.00044 7.10231 2.15861 6.72103 2.43982 6.43982C2.72103 6.15861 3.10231 6.00044 3.5 6H6V7H3.5C3.36744 7.00015 3.24034 7.05287 3.14661 7.14661C3.05287 7.24034 3.00015 7.36744 3 7.5V8.5Z" fill="#73B200"/>
<path d="M5 5.5C4.60444 5.5 4.21776 5.3827 3.88886 5.16294C3.55996 4.94318 3.30362 4.63082 3.15224 4.26537C3.00087 3.89991 2.96126 3.49778 3.03843 3.10982C3.1156 2.72186 3.30608 2.36549 3.58579 2.08579C3.86549 1.80608 4.22186 1.6156 4.60982 1.53843C4.99778 1.46126 5.39991 1.50087 5.76537 1.65224C6.13082 1.80362 6.44318 2.05996 6.66294 2.38886C6.8827 2.71776 7 3.10444 7 3.5C6.9994 4.03025 6.7885 4.53861 6.41356 4.91356C6.03861 5.2885 5.53025 5.4994 5 5.5ZM5 2.5C4.80222 2.5 4.60888 2.55865 4.44443 2.66853C4.27998 2.77841 4.15181 2.93459 4.07612 3.11732C4.00043 3.30004 3.98063 3.50111 4.01921 3.69509C4.0578 3.88907 4.15304 4.06725 4.29289 4.20711C4.43275 4.34696 4.61093 4.4422 4.80491 4.48079C4.99889 4.51937 5.19996 4.49957 5.38268 4.42388C5.56541 4.34819 5.72159 4.22002 5.83147 4.05557C5.94135 3.89112 6 3.69778 6 3.5C5.99972 3.23487 5.89428 2.98068 5.7068 2.7932C5.51932 2.60572 5.26513 2.50028 5 2.5Z" fill="#73B200"/>
<path d="M9 9C8.60444 9 8.21776 8.8827 7.88886 8.66294C7.55996 8.44318 7.30362 8.13082 7.15224 7.76537C7.00087 7.39991 6.96126 6.99778 7.03843 6.60982C7.1156 6.22186 7.30608 5.86549 7.58579 5.58579C7.86549 5.30608 8.22186 5.1156 8.60982 5.03843C8.99778 4.96126 9.39991 5.00087 9.76537 5.15224C10.1308 5.30362 10.4432 5.55996 10.6629 5.88886C10.8827 6.21776 11 6.60444 11 7C10.9994 7.53025 10.7885 8.03861 10.4136 8.41356C10.0386 8.7885 9.53025 8.9994 9 9ZM9 6C8.80222 6 8.60888 6.05865 8.44443 6.16853C8.27998 6.27841 8.15181 6.43459 8.07612 6.61732C8.00043 6.80004 7.98063 7.00111 8.01921 7.19509C8.0578 7.38907 8.15304 7.56725 8.29289 7.70711C8.43275 7.84696 8.61093 7.9422 8.80491 7.98079C8.99889 8.01937 9.19996 7.99957 9.38268 7.92388C9.56541 7.84819 9.72159 7.72002 9.83147 7.55557C9.94135 7.39112 10 7.19778 10 7C9.99972 6.73487 9.89428 6.48068 9.7068 6.2932C9.51932 6.10572 9.26513 6.00028 9 6Z" fill="#73B200"/>
<path d="M12 12H11V11C10.9999 10.8674 10.9471 10.7403 10.8534 10.6466C10.7597 10.5529 10.6326 10.5001 10.5 10.5H7.5C7.36744 10.5001 7.24034 10.5529 7.14661 10.6466C7.05287 10.7403 7.00015 10.8674 7 11V12H6V11C6.00044 10.6023 6.15861 10.221 6.43982 9.93982C6.72103 9.65861 7.10231 9.50044 7.5 9.5H10.5C10.8977 9.50044 11.279 9.65861 11.5602 9.93982C11.8414 10.221 11.9996 10.6023 12 11V12Z" fill="#73B200"/>
<path d="M3 14H1C0.734869 13.9997 0.480676 13.8943 0.2932 13.7068C0.105724 13.5193 0.00027795 13.2651 0 13V1C0.00027795 0.734869 0.105724 0.480676 0.2932 0.2932C0.480676 0.105724 0.734869 0.00027795 1 0H3V1H1V13H3V14Z" fill="#73B200"/>
<path d="M13 14H11V13H13V1H11V0H13C13.2651 0.00027795 13.5193 0.105724 13.7068 0.2932C13.8943 0.480676 13.9997 0.734869 14 1V13C13.9997 13.2651 13.8943 13.5193 13.7068 13.7068C13.5193 13.8943 13.2651 13.9997 13 14Z" fill="#73B200"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                      }),
                    Ee() &&
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-1wv7an`,
                        "data-framer-name": `Group--access`,
                        layoutDependency: M,
                        layoutId: `GBXu97Xgb`,
                        style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                        children: /*#__PURE__*/ l(C, {
                          className: `framer-2htxoq`,
                          "data-framer-name": `Vector`,
                          layout: `position`,
                          layoutDependency: M,
                          layoutId: `VtnUr1yG2`,
                          opacity: 1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 78 78"><path d="M 16.714 47.357 L 11.143 47.357 L 11.143 41.786 C 11.145 39.57 12.027 37.446 13.593 35.879 C 15.16 34.312 17.284 33.431 19.5 33.429 L 33.429 33.429 L 33.429 39 L 19.5 39 C 18.761 39.001 18.053 39.295 17.531 39.817 C 17.009 40.339 16.715 41.047 16.714 41.786 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 27.857 30.643 C 25.653 30.643 23.499 29.989 21.667 28.765 C 19.834 27.541 18.406 25.8 17.562 23.764 C 16.719 21.728 16.498 19.488 16.928 17.326 C 17.358 15.165 18.42 13.179 19.978 11.621 C 21.536 10.062 23.522 9.001 25.683 8.571 C 27.845 8.141 30.085 8.362 32.121 9.205 C 34.157 10.049 35.898 11.477 37.122 13.309 C 38.346 15.142 39 17.296 39 19.5 C 38.997 22.454 37.822 25.287 35.733 27.376 C 33.644 29.464 30.811 30.64 27.857 30.643 Z M 27.857 13.929 C 26.755 13.929 25.678 14.255 24.762 14.868 C 23.846 15.48 23.132 16.35 22.71 17.368 C 22.288 18.386 22.178 19.506 22.393 20.587 C 22.608 21.668 23.138 22.66 23.918 23.44 C 24.697 24.219 25.689 24.749 26.77 24.964 C 27.851 25.179 28.971 25.069 29.989 24.647 C 31.007 24.226 31.877 23.512 32.49 22.595 C 33.102 21.679 33.429 20.602 33.429 19.5 C 33.427 18.023 32.84 16.607 31.795 15.562 C 30.75 14.518 29.334 13.93 27.857 13.929 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 50.143 50.143 C 47.939 50.143 45.785 49.489 43.952 48.265 C 42.12 47.041 40.692 45.3 39.848 43.264 C 39.005 41.228 38.784 38.988 39.214 36.826 C 39.644 34.665 40.705 32.679 42.264 31.121 C 43.822 29.562 45.808 28.501 47.969 28.071 C 50.13 27.641 52.371 27.862 54.407 28.705 C 56.443 29.549 58.184 30.977 59.408 32.809 C 60.632 34.642 61.286 36.796 61.286 39 C 61.282 41.954 60.107 44.787 58.019 46.876 C 55.929 48.964 53.097 50.14 50.143 50.143 Z M 50.143 33.429 C 49.041 33.429 47.964 33.755 47.048 34.368 C 46.131 34.98 45.417 35.85 44.996 36.868 C 44.574 37.886 44.464 39.006 44.678 40.087 C 44.893 41.168 45.424 42.16 46.203 42.94 C 46.982 43.719 47.975 44.249 49.056 44.464 C 50.137 44.679 51.257 44.569 52.275 44.147 C 53.293 43.726 54.163 43.012 54.775 42.095 C 55.388 41.179 55.714 40.102 55.714 39 C 55.713 37.523 55.125 36.107 54.081 35.062 C 53.036 34.018 51.62 33.43 50.143 33.429 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 66.857 66.857 L 61.286 66.857 L 61.286 61.286 C 61.285 60.547 60.991 59.839 60.469 59.317 C 59.947 58.795 59.239 58.501 58.5 58.5 L 41.786 58.5 C 41.047 58.501 40.339 58.795 39.817 59.317 C 39.295 59.839 39.001 60.547 39 61.286 L 39 66.857 L 33.429 66.857 L 33.429 61.286 C 33.431 59.07 34.312 56.946 35.879 55.379 C 37.446 53.812 39.57 52.931 41.786 52.929 L 58.5 52.929 C 60.716 52.931 62.84 53.812 64.407 55.379 C 65.974 56.946 66.855 59.07 66.857 61.286 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 16.714 78 L 5.571 78 C 4.094 77.998 2.678 77.411 1.634 76.366 C 0.589 75.322 0.002 73.906 0 72.429 L 0 5.571 C 0.002 4.094 0.589 2.678 1.634 1.634 C 2.678 0.589 4.094 0.002 5.571 0 L 16.714 0 L 16.714 5.571 L 5.571 5.571 L 5.571 72.429 L 16.714 72.429 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 72.429 78 L 61.286 78 L 61.286 72.429 L 72.429 72.429 L 72.429 5.571 L 61.286 5.571 L 61.286 0 L 72.429 0 C 73.906 0.002 75.322 0.589 76.366 1.634 C 77.411 2.678 77.998 4.094 78 5.571 L 78 72.429 C 77.998 73.906 77.411 75.322 76.366 76.366 C 75.322 77.411 73.906 77.998 72.429 78 Z" fill="rgba(5, 11, 20, 0.4)"></path></svg>`,
                          svgContentId: 10206140854,
                          withExternalLayout: !0,
                        }),
                      }),
                    H() &&
                      /*#__PURE__*/ l(C, {
                        className: `framer-gqjvz3`,
                        "data-framer-name": `Vector`,
                        layout: `position`,
                        layoutDependency: M,
                        layoutId: `lJHnKSBO1`,
                        opacity: 1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 80"><path d="M 40 0 C 32.089 0 24.355 2.346 17.777 6.741 C 11.199 11.136 6.072 17.384 3.045 24.693 C 0.017 32.002 -0.775 40.044 0.769 47.804 C 2.312 55.563 6.122 62.69 11.716 68.284 C 17.31 73.878 24.437 77.688 32.196 79.231 C 39.956 80.775 47.998 79.983 55.307 76.955 C 62.617 73.927 68.863 68.801 73.259 62.223 C 77.654 55.645 80 47.911 80 40 C 79.988 29.395 75.77 19.228 68.271 11.729 C 60.772 4.23 50.605 0.012 40 0 Z M 54.286 8.873 C 57.311 10.268 60.118 12.096 62.617 14.3 L 61.438 17.143 L 54.286 17.143 Z M 32.51 73.436 C 26.327 72.062 20.647 68.999 16.102 64.589 C 11.557 60.178 8.325 54.593 6.767 48.454 C 5.208 42.316 5.384 35.865 7.274 29.82 C 9.164 23.776 12.695 18.374 17.473 14.217 L 21.328 20 L 30.877 20 L 26.592 31.429 L 15.084 31.429 L 11.133 43.279 L 18.471 54.286 L 32.757 54.286 L 36.848 60.421 Z M 40 74.286 C 39.419 74.286 38.853 74.229 38.279 74.2 L 42.269 62.229 C 42.547 61.403 42.631 60.526 42.515 59.663 C 42.4 58.801 42.087 57.977 41.602 57.254 L 37.511 51.118 C 36.99 50.334 36.284 49.691 35.454 49.247 C 34.624 48.803 33.698 48.571 32.757 48.571 L 21.528 48.571 L 17.438 42.436 L 19.202 37.143 L 25.714 37.143 L 25.714 42.857 L 31.429 42.857 L 31.429 34.803 L 39.818 12.432 L 34.468 10.426 L 33.02 14.286 L 24.386 14.286 L 22.08 10.826 C 25.989 8.386 30.356 6.774 34.913 6.089 C 39.469 5.404 44.118 5.66 48.571 6.843 L 48.571 17.143 C 48.573 18.658 49.176 20.11 50.247 21.181 C 51.318 22.253 52.771 22.855 54.286 22.857 L 61.674 22.857 C 62.424 22.859 63.168 22.712 63.862 22.425 C 64.555 22.138 65.185 21.716 65.714 21.183 L 66.116 20.781 L 66.921 18.838 C 69.227 21.769 71.039 25.057 72.286 28.571 L 58.853 28.571 C 57.502 28.567 56.194 29.043 55.162 29.915 C 54.13 30.786 53.441 31.996 53.219 33.329 L 51.514 43.161 C 51.308 44.326 51.469 45.526 51.977 46.594 C 52.485 47.662 53.313 48.546 54.346 49.121 L 60.531 53.303 L 64.698 63.721 C 61.509 67.059 57.675 69.717 53.431 71.533 C 49.186 73.348 44.617 74.285 40 74.286 Z M 65.185 49.553 L 57.429 44.311 L 57.143 44.139 L 58.853 34.286 L 73.77 34.286 C 75.266 42.716 73.483 51.399 68.786 58.558 Z" fill="rgba(5, 11, 20, 0.4)"></path></svg>`,
                        svgContentId: 8807766906,
                        withExternalLayout: !0,
                        ...K({ v7yUg2HyE: { svgContentId: 12686685284 } }, x, O),
                      }),
                    De() &&
                      /*#__PURE__*/ l(C, {
                        className: `framer-usc9lz`,
                        "data-framer-name": `GxP`,
                        fill: `black`,
                        intrinsicHeight: 10,
                        intrinsicWidth: 22,
                        layoutDependency: M,
                        layoutId: `E_JHxzn5O`,
                        svg: `<svg width="22" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.454 9V.624h3.6c.776 0 1.376.228 1.8.684.424.456.636 1.068.636 1.836s-.212 1.38-.636 1.836c-.424.456-1.024.684-1.8.684H16.81V9h-1.356Zm1.356-4.524h2.16c.344 0 .612-.088.804-.264.192-.184.288-.444.288-.78v-.576c0-.336-.096-.592-.288-.768-.192-.184-.46-.276-.804-.276h-2.16v2.664ZM8.527 9l2.196-3.156L8.587 2.76H10.1l1.404 2.172h.036l1.44-2.172h1.392l-2.136 3.072L14.407 9h-1.512l-1.44-2.268h-.036L9.92 9H8.527ZM6.474 7.728h-.048c-.088.408-.328.748-.72 1.02-.384.264-.896.396-1.536.396-.496 0-.956-.092-1.38-.276a3.186 3.186 0 0 1-1.104-.828 4.124 4.124 0 0 1-.72-1.356C.798 6.14.714 5.516.714 4.812c0-.696.088-1.312.264-1.848.176-.544.424-1 .744-1.368.32-.368.704-.644 1.152-.828a3.77 3.77 0 0 1 1.5-.288c.752 0 1.388.168 1.908.504.52.328.924.788 1.212 1.38l-1.104.648a2.127 2.127 0 0 0-.744-.948c-.336-.248-.76-.372-1.272-.372-.664 0-1.2.212-1.608.636-.4.424-.6 1.024-.6 1.8v1.368c0 .776.2 1.376.6 1.8.408.424.944.636 1.608.636.264 0 .516-.032.756-.096.24-.072.448-.172.624-.3.184-.136.328-.3.432-.492a1.4 1.4 0 0 0 .168-.696V5.7H4.626V4.536h3.036V9H6.474V7.728Z" fill="#73B200"/></svg>`,
                        withExternalLayout: !0,
                      }),
                    Oe() &&
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-oq3jcz`,
                        "data-framer-name": `Search--locate--mirror`,
                        layoutDependency: M,
                        layoutId: `onEVKIsFb`,
                        style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                        children: /*#__PURE__*/ l(C, {
                          className: `framer-vamkfz`,
                          "data-framer-name": `Vector`,
                          layout: `position`,
                          layoutDependency: M,
                          layoutId: `InS9fFF5d`,
                          opacity: 1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 78 78"><path d="M 52.929 74.1 L 39.836 61.007 C 42.9 57.107 44.571 52.371 44.571 47.357 C 44.571 35.1 34.543 25.071 22.286 25.071 C 10.029 25.071 0 35.1 0 47.357 C 0 59.614 10.029 69.643 22.286 69.643 C 27.3 69.643 32.036 67.971 35.936 64.907 L 49.029 78 Z M 22.286 64.071 C 13.093 64.071 5.571 56.55 5.571 47.357 C 5.571 38.164 13.093 30.643 22.286 30.643 C 31.479 30.643 39 38.164 39 47.357 C 39 56.55 31.479 64.071 22.286 64.071 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 78 27.857 L 55.714 27.857 L 55.714 33.429 L 78 33.429 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 78 13.929 L 33.429 13.929 L 33.429 19.5 L 78 19.5 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 78 0 L 33.429 0 L 33.429 5.571 L 78 5.571 Z" fill="rgba(5, 11, 20, 0.4)"></path></svg>`,
                          svgContentId: 11494040279,
                          withExternalLayout: !0,
                        }),
                      }),
                    ke() &&
                      /*#__PURE__*/ l(C, {
                        className: `framer-nziib2`,
                        "data-framer-name": `Vector`,
                        layout: `position`,
                        layoutDependency: M,
                        layoutId: `R4PwOhGmy`,
                        opacity: 1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 80"><path d="M 40 0 C 32.089 0 24.355 2.346 17.777 6.741 C 11.199 11.136 6.072 17.384 3.045 24.693 C 0.017 32.002 -0.775 40.044 0.769 47.804 C 2.312 55.563 6.122 62.69 11.716 68.284 C 17.31 73.878 24.437 77.688 32.196 79.231 C 39.956 80.775 47.998 79.983 55.307 76.955 C 62.617 73.927 68.863 68.801 73.259 62.223 C 77.654 55.645 80 47.911 80 40 C 79.988 29.395 75.77 19.228 68.271 11.729 C 60.772 4.23 50.605 0.012 40 0 Z M 54.286 8.873 C 57.311 10.268 60.118 12.096 62.617 14.3 L 61.438 17.143 L 54.286 17.143 Z M 32.51 73.436 C 26.327 72.062 20.647 68.999 16.102 64.589 C 11.557 60.178 8.325 54.593 6.767 48.454 C 5.208 42.316 5.384 35.865 7.274 29.82 C 9.164 23.776 12.695 18.374 17.473 14.217 L 21.328 20 L 30.877 20 L 26.592 31.429 L 15.084 31.429 L 11.133 43.279 L 18.471 54.286 L 32.757 54.286 L 36.848 60.421 Z M 40 74.286 C 39.419 74.286 38.853 74.229 38.279 74.2 L 42.269 62.229 C 42.547 61.403 42.631 60.526 42.515 59.663 C 42.4 58.801 42.087 57.977 41.602 57.254 L 37.511 51.118 C 36.99 50.334 36.284 49.691 35.454 49.247 C 34.624 48.803 33.698 48.571 32.757 48.571 L 21.528 48.571 L 17.438 42.436 L 19.202 37.143 L 25.714 37.143 L 25.714 42.857 L 31.429 42.857 L 31.429 34.803 L 39.818 12.432 L 34.468 10.426 L 33.02 14.286 L 24.386 14.286 L 22.08 10.826 C 25.989 8.386 30.356 6.774 34.913 6.089 C 39.469 5.404 44.118 5.66 48.571 6.843 L 48.571 17.143 C 48.573 18.658 49.176 20.11 50.247 21.181 C 51.318 22.253 52.771 22.855 54.286 22.857 L 61.674 22.857 C 62.424 22.859 63.168 22.712 63.862 22.425 C 64.555 22.138 65.185 21.716 65.714 21.183 L 66.116 20.781 L 66.921 18.838 C 69.227 21.769 71.039 25.057 72.286 28.571 L 58.853 28.571 C 57.502 28.567 56.194 29.043 55.162 29.915 C 54.13 30.786 53.441 31.996 53.219 33.329 L 51.514 43.161 C 51.308 44.326 51.469 45.526 51.977 46.594 C 52.485 47.662 53.313 48.546 54.346 49.121 L 60.531 53.303 L 64.698 63.721 C 61.509 67.059 57.675 69.717 53.431 71.533 C 49.186 73.348 44.617 74.285 40 74.286 Z M 65.185 49.553 L 57.429 44.311 L 57.143 44.139 L 58.853 34.286 L 73.77 34.286 C 75.266 42.716 73.483 51.399 68.786 58.558 Z" fill="rgba(5, 11, 20, 0.4)"></path></svg>`,
                        svgContentId: 8807766906,
                        withExternalLayout: !0,
                        ...K({ iiKGOfy_S: { svgContentId: 12686685284 } }, x, O),
                      }),
                    Ae() &&
                      /*#__PURE__*/ l(C, {
                        className: `framer-51wwnq`,
                        "data-framer-name": `Development`,
                        fill: `black`,
                        intrinsicHeight: 18,
                        intrinsicWidth: 18,
                        layoutDependency: M,
                        layoutId: `zvv95V3tF`,
                        svg: `<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 2.25V4.5H2.25V2.25H4.5ZM1.125 1.125v4.5h4.5v-4.5h-4.5Zm9 2.813v2.25h-2.25v-2.25h2.25ZM6.75 2.812v4.5h4.5v-4.5h-4.5ZM4.5 9v2.25H2.25V9H4.5ZM1.125 7.875v4.5h4.5v-4.5h-4.5Z" fill="#73B200"/><path d="M12.375 5.625V9H9v3.375H5.625v4.5h11.25V5.625h-4.5Zm-2.25 4.5h2.25v2.25h-2.25v-2.25ZM9 15.75H6.75V13.5H9v2.25Zm3.375 0h-2.25V13.5h2.25v2.25Zm3.375 0H13.5V13.5h2.25v2.25Zm0-3.375H13.5v-2.25h2.25v2.25ZM13.5 9V6.75h2.25V9H13.5Z" fill="#73B200"/></svg>`,
                        transformTemplate: q,
                        withExternalLayout: !0,
                        ...K({ Vxbf2Jvhy: { transformTemplate: void 0 } }, x, O),
                      }),
                    je() &&
                      /*#__PURE__*/ u(f.div, {
                        className: `framer-1ejugtn`,
                        "data-framer-name": `Group--access`,
                        layoutDependency: M,
                        layoutId: `hi2uthK32`,
                        style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                        transformTemplate: q,
                        children: [
                          U() &&
                            /*#__PURE__*/ l(C, {
                              className: `framer-1e4f3wx`,
                              "data-framer-name": `Bot`,
                              fill: `black`,
                              intrinsicHeight: 18,
                              intrinsicWidth: 18,
                              layoutDependency: M,
                              layoutId: `xFCbc1w6g`,
                              svg: `<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 5.625h-1.125V6.75h1.125V5.625Zm-3.375 0H6.75V6.75h1.125V5.625Z" fill="#73B200"/><path d="M14.625 11.25h-2.813v-1.125h.563A1.126 1.126 0 0 0 13.5 9V6.75h1.125V5.625H13.5V4.5a1.126 1.126 0 0 0-1.125-1.125H11.25v-2.25h-1.125v2.25h-2.25v-2.25H6.75v2.25H5.625A1.126 1.126 0 0 0 4.5 4.5v1.125H3.375V6.75H4.5V9a1.126 1.126 0 0 0 1.125 1.125h.563v1.125H3.374a1.126 1.126 0 0 0-1.125 1.125v4.5h1.125v-4.5h11.25v4.5h1.125v-4.5a1.126 1.126 0 0 0-1.125-1.125Zm-9-6.75h6.75V9h-6.75V4.5Zm1.688 5.625h3.375v1.125H7.312v-1.125Z" fill="#73B200"/></svg>`,
                              withExternalLayout: !0,
                            }),
                          Me() &&
                            /*#__PURE__*/ l(C, {
                              className: `framer-1jra5xt`,
                              "data-framer-name": `Vector`,
                              layout: `position`,
                              layoutDependency: M,
                              layoutId: `dzYTj0OZo`,
                              opacity: 1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56"><path d="M 12 34 L 8 34 L 8 30 C 8.002 28.409 8.634 26.884 9.759 25.759 C 10.884 24.634 12.409 24.002 14 24 L 24 24 L 24 28 L 14 28 C 13.47 28.001 12.961 28.211 12.586 28.586 C 12.211 28.961 12.001 29.47 12 30 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 20 22 C 18.418 22 16.871 21.531 15.555 20.652 C 14.24 19.773 13.214 18.523 12.609 17.061 C 12.003 15.6 11.845 13.991 12.154 12.439 C 12.462 10.887 13.224 9.462 14.343 8.343 C 15.462 7.224 16.887 6.462 18.439 6.154 C 19.991 5.845 21.6 6.003 23.061 6.609 C 24.523 7.214 25.773 8.24 26.652 9.555 C 27.531 10.871 28 12.418 28 14 C 27.998 16.121 27.154 18.154 25.654 19.654 C 24.154 21.154 22.121 21.998 20 22 Z M 20 10 C 19.209 10 18.436 10.235 17.778 10.674 C 17.12 11.114 16.607 11.738 16.304 12.469 C 16.002 13.2 15.923 14.004 16.077 14.78 C 16.231 15.556 16.612 16.269 17.172 16.828 C 17.731 17.388 18.444 17.769 19.22 17.923 C 19.996 18.077 20.8 17.998 21.531 17.696 C 22.262 17.393 22.886 16.88 23.326 16.222 C 23.765 15.564 24 14.791 24 14 C 23.999 12.939 23.577 11.923 22.827 11.173 C 22.077 10.423 21.061 10.001 20 10 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 36 36 C 34.418 36 32.871 35.531 31.555 34.652 C 30.24 33.773 29.214 32.523 28.609 31.061 C 28.003 29.6 27.845 27.991 28.154 26.439 C 28.462 24.887 29.224 23.462 30.343 22.343 C 31.462 21.224 32.887 20.462 34.439 20.154 C 35.991 19.845 37.6 20.003 39.061 20.609 C 40.523 21.214 41.773 22.24 42.652 23.555 C 43.531 24.871 44 26.418 44 28 C 43.998 30.121 43.154 32.154 41.654 33.654 C 40.154 35.154 38.121 35.998 36 36 Z M 36 24 C 35.209 24 34.436 24.235 33.778 24.674 C 33.12 25.114 32.607 25.738 32.304 26.469 C 32.002 27.2 31.923 28.004 32.077 28.78 C 32.231 29.556 32.612 30.269 33.172 30.828 C 33.731 31.388 34.444 31.769 35.22 31.923 C 35.996 32.077 36.8 31.998 37.531 31.696 C 38.262 31.393 38.886 30.88 39.326 30.222 C 39.765 29.564 40 28.791 40 28 C 39.999 26.939 39.577 25.923 38.827 25.173 C 38.077 24.423 37.061 24.001 36 24 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 48 48 L 44 48 L 44 44 C 44 43.47 43.788 42.961 43.414 42.586 C 43.039 42.212 42.53 42 42 42 L 30 42 C 29.47 42 28.961 42.212 28.586 42.586 C 28.211 42.961 28.001 43.47 28 44 L 28 48 L 24 48 L 24 44 C 24.002 42.409 24.634 40.884 25.759 39.759 C 26.884 38.634 28.409 38.002 30 38 L 42 38 C 43.591 38.002 45.116 38.634 46.241 39.759 C 47.366 40.884 47.998 42.409 48 44 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 12 56 L 4 56 C 2.939 55.999 1.923 55.577 1.173 54.827 C 0.423 54.077 0.001 53.06 0 52 L 0 4 C 0.001 2.939 0.423 1.923 1.173 1.173 C 1.923 0.423 2.939 0.001 4 0 L 12 0 L 12 4 L 4 4 L 4 52 L 12 52 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 52 56 L 44 56 L 44 52 L 52 52 L 52 4 L 44 4 L 44 0 L 52 0 C 53.06 0.001 54.077 0.423 54.827 1.173 C 55.577 1.923 55.999 2.939 56 4 L 56 52 C 55.999 53.06 55.577 54.077 54.827 54.827 C 54.077 55.577 53.06 55.999 52 56 Z" fill="rgba(5, 11, 20, 0.4)"></path></svg>`,
                              svgContentId: 11336873892,
                              withExternalLayout: !0,
                            }),
                        ],
                      }),
                    Ne() &&
                      /*#__PURE__*/ l(f.div, {
                        className: `framer-1ym4fck`,
                        layoutDependency: M,
                        layoutId: `kukBKkBAY`,
                        children:
                          Pe() &&
                          /*#__PURE__*/ l(C, {
                            className: `framer-mkii7r`,
                            "data-framer-name": `Vector`,
                            layout: `position`,
                            layoutDependency: M,
                            layoutId: `adL5pqyxD`,
                            opacity: 1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 80"><path d="M 40 0 C 32.089 0 24.355 2.346 17.777 6.741 C 11.199 11.136 6.072 17.384 3.045 24.693 C 0.017 32.002 -0.775 40.044 0.769 47.804 C 2.312 55.563 6.122 62.69 11.716 68.284 C 17.31 73.878 24.437 77.688 32.196 79.231 C 39.956 80.775 47.998 79.983 55.307 76.955 C 62.617 73.927 68.863 68.801 73.259 62.223 C 77.654 55.645 80 47.911 80 40 C 79.988 29.395 75.77 19.228 68.271 11.729 C 60.772 4.23 50.605 0.012 40 0 Z M 54.286 8.873 C 57.311 10.268 60.118 12.096 62.617 14.3 L 61.438 17.143 L 54.286 17.143 Z M 32.51 73.436 C 26.327 72.062 20.647 68.999 16.102 64.589 C 11.557 60.178 8.325 54.593 6.767 48.454 C 5.208 42.316 5.384 35.865 7.274 29.82 C 9.164 23.776 12.695 18.374 17.473 14.217 L 21.328 20 L 30.877 20 L 26.592 31.429 L 15.084 31.429 L 11.133 43.279 L 18.471 54.286 L 32.757 54.286 L 36.848 60.421 Z M 40 74.286 C 39.419 74.286 38.853 74.229 38.279 74.2 L 42.269 62.229 C 42.547 61.403 42.631 60.526 42.515 59.663 C 42.4 58.801 42.087 57.977 41.602 57.254 L 37.511 51.118 C 36.99 50.334 36.284 49.691 35.454 49.247 C 34.624 48.803 33.698 48.571 32.757 48.571 L 21.528 48.571 L 17.438 42.436 L 19.202 37.143 L 25.714 37.143 L 25.714 42.857 L 31.429 42.857 L 31.429 34.803 L 39.818 12.432 L 34.468 10.426 L 33.02 14.286 L 24.386 14.286 L 22.08 10.826 C 25.989 8.386 30.356 6.774 34.913 6.089 C 39.469 5.404 44.118 5.66 48.571 6.843 L 48.571 17.143 C 48.573 18.658 49.176 20.11 50.247 21.181 C 51.318 22.253 52.771 22.855 54.286 22.857 L 61.674 22.857 C 62.424 22.859 63.168 22.712 63.862 22.425 C 64.555 22.138 65.185 21.716 65.714 21.183 L 66.116 20.781 L 66.921 18.838 C 69.227 21.769 71.039 25.057 72.286 28.571 L 58.853 28.571 C 57.502 28.567 56.194 29.043 55.162 29.915 C 54.13 30.786 53.441 31.996 53.219 33.329 L 51.514 43.161 C 51.308 44.326 51.469 45.526 51.977 46.594 C 52.485 47.662 53.313 48.546 54.346 49.121 L 60.531 53.303 L 64.698 63.721 C 61.509 67.059 57.675 69.717 53.431 71.533 C 49.186 73.348 44.617 74.285 40 74.286 Z M 65.185 49.553 L 57.429 44.311 L 57.143 44.139 L 58.853 34.286 L 73.77 34.286 C 75.266 42.716 73.483 51.399 68.786 58.558 Z" fill="rgba(5, 11, 20, 0.4)"></path></svg>`,
                            svgContentId: 12686685284,
                            withExternalLayout: !0,
                            ...K(
                              {
                                oVfSeqUz7: {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56"><path d="M 47.79 8.21 C 42.54 2.961 53.039 13.459 47.79 8.21 Z M 38 12 Z M 25.793 42.295 Z M 37.402 50.073 C 34.43 51.344 40.373 48.802 37.402 50.073 Z M 48.15 40.99 C 48.15 40.99 51.438 35.979 48.15 40.99 Z" fill="rgba(5, 11, 20, 0.4)"></path></svg>`,
                                  svgContentId: 11255097303,
                                },
                              },
                              x,
                              O
                            ),
                          }),
                      }),
                    Fe() &&
                      /*#__PURE__*/ l(C, {
                        className: `framer-xysiq8`,
                        "data-framer-name": `Development`,
                        fill: `black`,
                        intrinsicHeight: 18,
                        intrinsicWidth: 18,
                        layoutDependency: M,
                        layoutId: `Mf65GDKYX`,
                        svg: `<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 2.25V4.5H2.25V2.25H4.5ZM1.125 1.125v4.5h4.5v-4.5h-4.5Zm9 2.813v2.25h-2.25v-2.25h2.25ZM6.75 2.812v4.5h4.5v-4.5h-4.5ZM4.5 9v2.25H2.25V9H4.5ZM1.125 7.875v4.5h4.5v-4.5h-4.5Z" fill="#73B200"/><path d="M12.375 5.625V9H9v3.375H5.625v4.5h11.25V5.625h-4.5Zm-2.25 4.5h2.25v2.25h-2.25v-2.25ZM9 15.75H6.75V13.5H9v2.25Zm3.375 0h-2.25V13.5h2.25v2.25Zm3.375 0H13.5V13.5h2.25v2.25Zm0-3.375H13.5v-2.25h2.25v2.25ZM13.5 9V6.75h2.25V9H13.5Z" fill="#73B200"/></svg>`,
                        withExternalLayout: !0,
                      }),
                    Ie() &&
                      /*#__PURE__*/ l(C, {
                        className: `framer-1p7jbk3`,
                        "data-framer-name": `Development`,
                        fill: `black`,
                        intrinsicHeight: 18,
                        intrinsicWidth: 18,
                        layoutDependency: M,
                        layoutId: `GWgqsSrep`,
                        svg: `<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 2.25V4.5H2.25V2.25H4.5ZM1.125 1.125v4.5h4.5v-4.5h-4.5Zm9 2.813v2.25h-2.25v-2.25h2.25ZM6.75 2.812v4.5h4.5v-4.5h-4.5ZM4.5 9v2.25H2.25V9H4.5ZM1.125 7.875v4.5h4.5v-4.5h-4.5Z" fill="#73B200"/><path d="M12.375 5.625V9H9v3.375H5.625v4.5h11.25V5.625h-4.5Zm-2.25 4.5h2.25v2.25h-2.25v-2.25ZM9 15.75H6.75V13.5H9v2.25Zm3.375 0h-2.25V13.5h2.25v2.25Zm3.375 0H13.5V13.5h2.25v2.25Zm0-3.375H13.5v-2.25h2.25v2.25ZM13.5 9V6.75h2.25V9H13.5Z" fill="#73B200"/></svg>`,
                        withExternalLayout: !0,
                      }),
                    Le() &&
                      /*#__PURE__*/ l(C, {
                        className: `framer-rkrb5m`,
                        "data-framer-name": `Vector`,
                        layout: `position`,
                        layoutDependency: M,
                        layoutId: `sab2EV_jQ`,
                        opacity: 1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56"><path d="M 38 53.2 L 28.6 43.8 C 30.8 41 32 37.6 32 34 C 32 25.2 24.8 18 16 18 C 7.2 18 0 25.2 0 34 C 0 42.8 7.2 50 16 50 C 19.6 50 23 48.8 25.8 46.6 L 35.2 56 Z M 16 46 C 9.4 46 4 40.6 4 34 C 4 27.4 9.4 22 16 22 C 22.6 22 28 27.4 28 34 C 28 40.6 22.6 46 16 46 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 56 20 L 40 20 L 40 24 L 56 24 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 56 10 L 24 10 L 24 14 L 56 14 Z" fill="rgba(5, 11, 20, 0.4)"></path><path d="M 56 0 L 24 0 L 24 4 L 56 4 Z" fill="rgba(5, 11, 20, 0.4)"></path></svg>`,
                        svgContentId: 11499882634,
                        withExternalLayout: !0,
                        ...K({ agqOb6cmW: { svgContentId: 10429745714 } }, x, O),
                      }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (tt = [
        `.framer-4QMRN.framer-1e5vdho, .framer-4QMRN .framer-1e5vdho { display: block; }`,
        `.framer-4QMRN.framer-ck5upm { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 40px 100px 40px 40px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-4QMRN .framer-8g2e54 { flex: none; height: 192px; overflow: visible; position: relative; width: 250px; }`,
        `.framer-4QMRN .framer-1rr31fj, .framer-4QMRN .framer-1e4f3wx { aspect-ratio: 1 / 1; flex: none; height: auto; left: 0px; position: absolute; top: 0px; width: 78px; }`,
        `.framer-4QMRN .framer-bszf87, .framer-4QMRN .framer-18yay91, .framer-4QMRN .framer-159tgn, .framer-4QMRN .framer-kveibr { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 80px; }`,
        `.framer-4QMRN .framer-1z10pc8, .framer-4QMRN .framer-2htxoq { flex: none; height: 78px; left: calc(50.00000000000002% - 78px / 2); position: absolute; top: calc(50.00000000000002% - 78px / 2); width: 78px; }`,
        `.framer-4QMRN .framer-g3v2dp, .framer-4QMRN .framer-v0xtg2, .framer-4QMRN .framer-5tqmf0 { bottom: 3px; flex: none; left: 2px; position: absolute; right: 3px; top: 2px; }`,
        `.framer-4QMRN .framer-16omjix { flex: none; height: 80px; left: calc(16.800000000000022% - 80px / 2); position: absolute; top: calc(21.35416666666669% - 80px / 2); width: 80px; }`,
        `.framer-4QMRN .framer-yjmvs { flex: none; height: 55px; position: absolute; right: 16px; top: calc(48.95833333333336% - 55px / 2); width: 56px; }`,
        `.framer-4QMRN .framer-r2nudu, .framer-4QMRN .framer-it4bzt { flex: none; height: 79px; left: 0px; position: absolute; top: 0px; width: 80px; }`,
        `.framer-4QMRN .framer-bbjfj2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 125px; width: 100%; }`,
        `.framer-4QMRN .framer-dj4ccs { flex: 1 0 0px; height: 67px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-4QMRN .framer-1otg5pv { flex: none; height: 80px; left: 1px; position: absolute; top: 0px; width: 80px; }`,
        `.framer-4QMRN .framer-1hjfeix { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; overflow: hidden; position: absolute; right: 19px; top: 49%; width: 53px; }`,
        `.framer-4QMRN .framer-bjigyh, .framer-4QMRN .framer-aia4vc { aspect-ratio: 0.8958333333333334 / 1; flex: none; height: auto; left: 0px; position: absolute; top: 0px; width: 72px; }`,
        `.framer-4QMRN .framer-1rjfd35 { bottom: 3px; flex: none; left: 5px; position: absolute; right: 5px; top: 2px; }`,
        `.framer-4QMRN .framer-1nrfhjv { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }`,
        `.framer-4QMRN .framer-2jivd5 { bottom: 0px; flex: none; height: 79px; position: absolute; right: 0px; width: 79px; }`,
        `.framer-4QMRN .framer-rg4ldn { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; overflow: hidden; position: absolute; right: 23px; top: 49%; width: 56px; }`,
        `.framer-4QMRN .framer-1fm16y9, .framer-4QMRN .framer-1u4wxlh, .framer-4QMRN .framer-jiryfy { bottom: 1px; flex: none; left: 1px; position: absolute; right: 1px; top: 0px; }`,
        `.framer-4QMRN .framer-1t8ooil, .framer-4QMRN .framer-4b71xb { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 70px; }`,
        `.framer-4QMRN .framer-v0cmv0 { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; overflow: hidden; position: absolute; right: 12px; top: 50%; width: 56px; }`,
        `.framer-4QMRN .framer-14hd882, .framer-4QMRN .framer-1vk2pdl, .framer-4QMRN .framer-13r6bow, .framer-4QMRN .framer-iqoczt { bottom: 1px; flex: none; left: 1px; position: absolute; right: 1px; top: 1px; }`,
        `.framer-4QMRN .framer-1ldil6h, .framer-4QMRN .framer-1tayr37 { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; left: -1px; overflow: hidden; position: absolute; top: 0px; width: 71px; }`,
        `.framer-4QMRN .framer-tmmfwc { flex: none; height: 81px; left: 5px; position: absolute; top: 0px; width: 81px; }`,
        `.framer-4QMRN .framer-5gy8ng { flex: none; height: auto; left: 0px; position: absolute; top: 49%; white-space: pre-wrap; width: 149px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-4QMRN .framer-1fr502i { aspect-ratio: 0.8958333333333334 / 1; flex: none; height: auto; position: absolute; right: 7px; top: 14px; width: 52px; }`,
        `.framer-4QMRN .framer-1u1ti75 { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; left: 0px; overflow: hidden; position: absolute; top: 2px; width: 80px; }`,
        `.framer-4QMRN .framer-4w8rsd, .framer-4QMRN .framer-vamkfz { flex: none; height: 78px; left: 0px; position: absolute; top: 0px; width: 78px; }`,
        `.framer-4QMRN .framer-1lvv1rv, .framer-4QMRN .framer-1wv7an { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; left: -1px; overflow: hidden; position: absolute; top: 0px; width: 80px; }`,
        `.framer-4QMRN .framer-gqjvz3, .framer-4QMRN .framer-nziib2, .framer-4QMRN .framer-mkii7r { flex: none; height: 80px; left: 0px; position: absolute; top: 0px; width: 80px; }`,
        `.framer-4QMRN .framer-usc9lz { aspect-ratio: 2.2 / 1; flex: none; height: auto; left: 0px; position: absolute; top: 0px; width: 163px; }`,
        `.framer-4QMRN .framer-oq3jcz { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; left: 1px; overflow: hidden; position: absolute; top: 0px; width: 80px; }`,
        `.framer-4QMRN .framer-51wwnq { aspect-ratio: 1 / 1; flex: none; height: auto; position: absolute; right: 3px; top: 49%; width: 56px; }`,
        `.framer-4QMRN .framer-1ejugtn { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: auto; overflow: hidden; position: absolute; right: 4px; top: 50%; width: 56px; }`,
        `.framer-4QMRN .framer-1jra5xt { flex: none; height: 56px; left: 0px; position: absolute; top: 0px; width: 56px; }`,
        `.framer-4QMRN .framer-1ym4fck { flex: none; height: 57px; overflow: hidden; position: absolute; right: 6px; top: calc(47.91666666666669% - 57px / 2); width: 56px; }`,
        `.framer-4QMRN .framer-xysiq8 { aspect-ratio: 1 / 1; bottom: -2344px; flex: none; height: auto; left: 31px; position: absolute; width: 78px; }`,
        `.framer-4QMRN .framer-1p7jbk3 { aspect-ratio: 1 / 1; flex: none; height: auto; left: 0px; position: absolute; top: 1px; width: 78px; }`,
        `.framer-4QMRN .framer-rkrb5m { flex: none; height: 56px; position: absolute; right: 0px; top: calc(48.95833333333336% - 56px / 2); width: 56px; }`,
        `.framer-4QMRN.framer-v-6ar5mg.framer-ck5upm, .framer-4QMRN.framer-v-16hagy6.framer-ck5upm { cursor: unset; padding: 40px 20px 40px 20px; }`,
        `.framer-4QMRN.framer-v-6ar5mg .framer-8g2e54 { width: 149px; }`,
        `.framer-4QMRN.framer-v-6ar5mg .framer-16omjix { left: calc(28.18791946308727% - 80px / 2); }`,
        `.framer-4QMRN.framer-v-5ns396.framer-ck5upm { cursor: unset; padding: 40px 0px 40px 30px; }`,
        `.framer-4QMRN.framer-v-5ns396 .framer-8g2e54 { height: 191px; width: 209px; }`,
        `.framer-4QMRN.framer-v-5ns396 .framer-dj4ccs { height: 66px; }`,
        `.framer-4QMRN.framer-v-16hagy6 .framer-8g2e54 { width: 183px; }`,
        `.framer-4QMRN.framer-v-12jzz39.framer-ck5upm, .framer-4QMRN.framer-v-eo9o2t.framer-ck5upm, .framer-4QMRN.framer-v-1yf5lcb.framer-ck5upm, .framer-4QMRN.framer-v-nbpqj.framer-ck5upm, .framer-4QMRN.framer-v-1i8shzg.framer-ck5upm, .framer-4QMRN.framer-v-88m7g6.framer-ck5upm, .framer-4QMRN.framer-v-11rba15.framer-ck5upm, .framer-4QMRN.framer-v-1u5h9bc.framer-ck5upm, .framer-4QMRN.framer-v-xttd4f.framer-ck5upm, .framer-4QMRN.framer-v-vrige8.framer-ck5upm, .framer-4QMRN.framer-v-14vs6cd.framer-ck5upm, .framer-4QMRN.framer-v-er1sbv.framer-ck5upm, .framer-4QMRN.framer-v-ks9nhz.framer-ck5upm, .framer-4QMRN.framer-v-4vfxyl.framer-ck5upm { cursor: unset; display: block; height: 133px; padding: unset; width: 325px; }`,
        `.framer-4QMRN.framer-v-12jzz39 .framer-8g2e54, .framer-4QMRN.framer-v-eo9o2t .framer-8g2e54, .framer-4QMRN.framer-v-1yf5lcb .framer-8g2e54, .framer-4QMRN.framer-v-nbpqj .framer-8g2e54, .framer-4QMRN.framer-v-1i8shzg .framer-8g2e54, .framer-4QMRN.framer-v-88m7g6 .framer-8g2e54, .framer-4QMRN.framer-v-11rba15 .framer-8g2e54, .framer-4QMRN.framer-v-1u5h9bc .framer-8g2e54, .framer-4QMRN.framer-v-xttd4f .framer-8g2e54, .framer-4QMRN.framer-v-vrige8 .framer-8g2e54, .framer-4QMRN.framer-v-14vs6cd .framer-8g2e54, .framer-4QMRN.framer-v-ks9nhz .framer-8g2e54 { height: 96px; left: calc(50.76923076923079% - 270px / 2); position: absolute; top: calc(51.127819548872196% - 96px / 2); width: 270px; }`,
        `.framer-4QMRN.framer-v-12jzz39 .framer-16omjix { height: 56px; left: calc(83.70370370370372% - 56px / 2); top: calc(48.95833333333336% - 56px / 2); width: 56px; }`,
        `.framer-4QMRN.framer-v-12jzz39 .framer-bbjfj2, .framer-4QMRN.framer-v-eo9o2t .framer-bbjfj2, .framer-4QMRN.framer-v-1yf5lcb .framer-bbjfj2, .framer-4QMRN.framer-v-nbpqj .framer-bbjfj2, .framer-4QMRN.framer-v-1i8shzg .framer-bbjfj2, .framer-4QMRN.framer-v-88m7g6 .framer-bbjfj2, .framer-4QMRN.framer-v-11rba15 .framer-bbjfj2, .framer-4QMRN.framer-v-1u5h9bc .framer-bbjfj2, .framer-4QMRN.framer-v-xttd4f .framer-bbjfj2, .framer-4QMRN.framer-v-vrige8 .framer-bbjfj2, .framer-4QMRN.framer-v-14vs6cd .framer-bbjfj2, .framer-4QMRN.framer-v-ks9nhz .framer-bbjfj2 { min-height: 67px; }`,
        `.framer-4QMRN.framer-v-eo9o2t .framer-16omjix { height: 55px; left: calc(83.70370370370372% - 56px / 2); top: calc(45.83333333333336% - 55px / 2); width: 56px; }`,
        `.framer-4QMRN.framer-v-eo9o2t .framer-5gy8ng, .framer-4QMRN.framer-v-1yf5lcb .framer-5gy8ng, .framer-4QMRN.framer-v-1i8shzg .framer-5gy8ng, .framer-4QMRN.framer-v-88m7g6 .framer-5gy8ng, .framer-4QMRN.framer-v-11rba15 .framer-5gy8ng, .framer-4QMRN.framer-v-xttd4f .framer-5gy8ng, .framer-4QMRN.framer-v-vrige8 .framer-5gy8ng, .framer-4QMRN.framer-v-14vs6cd .framer-5gy8ng, .framer-4QMRN.framer-v-ks9nhz .framer-5gy8ng { width: 162px; }`,
        `.framer-4QMRN.framer-v-8bqjf7.framer-ck5upm, .framer-4QMRN.framer-v-1a9330s.framer-ck5upm, .framer-4QMRN.framer-v-xtf4i9.framer-ck5upm, .framer-4QMRN.framer-v-1fhkzb4.framer-ck5upm { height: 272px; width: 390px; }`,
        `.framer-4QMRN.framer-v-8bqjf7 .framer-8g2e54 { bottom: 40px; height: unset; left: 40px; position: absolute; right: 100px; top: 30px; width: unset; z-index: 1; }`,
        `.framer-4QMRN.framer-v-1a9330s .framer-8g2e54, .framer-4QMRN.framer-v-xtf4i9 .framer-8g2e54, .framer-4QMRN.framer-v-1fhkzb4 .framer-8g2e54, .framer-4QMRN.framer-v-2uy7il .framer-8g2e54, .framer-4QMRN.framer-v-15gssx0 .framer-8g2e54, .framer-4QMRN.framer-v-13lzlvi .framer-8g2e54, .framer-4QMRN.framer-v-rpn7kp .framer-8g2e54, .framer-4QMRN.framer-v-99hwwu .framer-8g2e54, .framer-4QMRN.framer-v-1psdm58 .framer-8g2e54 { bottom: 40px; height: unset; left: 40px; position: absolute; right: 100px; top: 40px; width: unset; z-index: 1; }`,
        `.framer-4QMRN.framer-v-1fhkzb4 .framer-4b71xb, .framer-4QMRN.framer-v-1e43gvi .framer-1t8ooil { width: 80px; }`,
        `.framer-4QMRN.framer-v-1qhlfow.framer-ck5upm, .framer-4QMRN.framer-v-1ps462c.framer-ck5upm, .framer-4QMRN.framer-v-akewxq.framer-ck5upm, .framer-4QMRN.framer-v-1rlofzs.framer-ck5upm { cursor: unset; height: 272px; padding: 40px 20px 40px 20px; width: 189px; }`,
        `.framer-4QMRN.framer-v-1qhlfow .framer-8g2e54, .framer-4QMRN.framer-v-d5fdfc .framer-8g2e54, .framer-4QMRN.framer-v-1e43gvi .framer-8g2e54, .framer-4QMRN.framer-v-1ps462c .framer-8g2e54, .framer-4QMRN.framer-v-1iekfoq .framer-8g2e54, .framer-4QMRN.framer-v-1udi8zk .framer-8g2e54, .framer-4QMRN.framer-v-akewxq .framer-8g2e54, .framer-4QMRN.framer-v-1rlofzs .framer-8g2e54 { bottom: 40px; height: unset; left: 20px; position: absolute; right: 20px; top: 40px; width: unset; z-index: 1; }`,
        `.framer-4QMRN.framer-v-741hx.framer-ck5upm, .framer-4QMRN.framer-v-fs9hrc.framer-ck5upm, .framer-4QMRN.framer-v-1e9u3hq.framer-ck5upm { cursor: unset; height: 271px; padding: 40px 0px 40px 30px; width: 189px; }`,
        `.framer-4QMRN.framer-v-741hx .framer-8g2e54, .framer-4QMRN.framer-v-fs9hrc .framer-8g2e54, .framer-4QMRN.framer-v-1e9u3hq .framer-8g2e54 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; left: 20px; padding: 0px; position: absolute; right: 10px; top: 40px; width: unset; z-index: 1; }`,
        `.framer-4QMRN.framer-v-741hx .framer-18yay91 { left: unset; order: 2; position: relative; top: unset; }`,
        `.framer-4QMRN.framer-v-741hx .framer-bbjfj2, .framer-4QMRN.framer-v-fs9hrc .framer-bbjfj2, .framer-4QMRN.framer-v-1e9u3hq .framer-bbjfj2 { left: unset; order: 7; position: relative; top: unset; }`,
        `.framer-4QMRN.framer-v-741hx .framer-dj4ccs, .framer-4QMRN.framer-v-fs9hrc .framer-dj4ccs, .framer-4QMRN.framer-v-1e9u3hq .framer-dj4ccs { height: auto; order: 0; }`,
        `.framer-4QMRN.framer-v-d5fdfc.framer-ck5upm, .framer-4QMRN.framer-v-1e43gvi.framer-ck5upm, .framer-4QMRN.framer-v-1iekfoq.framer-ck5upm, .framer-4QMRN.framer-v-1udi8zk.framer-ck5upm { cursor: unset; height: 272px; padding: 40px 20px 40px 20px; width: 223px; }`,
        `.framer-4QMRN.framer-v-d5fdfc .framer-1ldil6h { left: 4px; top: 4px; }`,
        `.framer-4QMRN.framer-v-nbpqj .framer-5gy8ng, .framer-4QMRN.framer-v-1u5h9bc .framer-5gy8ng { width: 185px; }`,
        `.framer-4QMRN.framer-v-2uy7il.framer-ck5upm, .framer-4QMRN.framer-v-mbj4wm.framer-ck5upm, .framer-4QMRN.framer-v-15gssx0.framer-ck5upm, .framer-4QMRN.framer-v-13lzlvi.framer-ck5upm { cursor: unset; height: 272px; width: 390px; }`,
        `.framer-4QMRN.framer-v-mbj4wm .framer-8g2e54 { bottom: 40px; height: unset; left: 40px; position: absolute; right: 34px; top: 40px; width: unset; z-index: 1; }`,
        `.framer-4QMRN.framer-v-mbj4wm .framer-bbjfj2, .framer-4QMRN.framer-v-99hwwu .framer-bbjfj2 { justify-content: flex-start; }`,
        `.framer-4QMRN.framer-v-mbj4wm .framer-dj4ccs { flex: none; width: 257px; }`,
        `.framer-4QMRN.framer-v-fs9hrc .framer-bszf87 { left: unset; order: 1; position: relative; top: unset; }`,
        `.framer-4QMRN.framer-v-vrige8 .framer-mkii7r, .framer-4QMRN.framer-v-14vs6cd .framer-2jivd5 { height: 56px; width: 56px; }`,
        `.framer-4QMRN.framer-v-14vs6cd .framer-kveibr { aspect-ratio: unset; height: 56px; left: calc(83.70370370370372% - 56px / 2); top: calc(50.00000000000002% - 56px / 2); width: 56px; }`,
        `.framer-4QMRN.framer-v-rpn7kp.framer-ck5upm, .framer-4QMRN.framer-v-99hwwu.framer-ck5upm, .framer-4QMRN.framer-v-1psdm58.framer-ck5upm { cursor: unset; height: 240px; width: 390px; }`,
        `.framer-4QMRN.framer-v-rpn7kp .framer-dj4ccs, .framer-4QMRN.framer-v-1psdm58 .framer-dj4ccs { height: auto; }`,
        `.framer-4QMRN.framer-v-99hwwu .framer-dj4ccs { flex: none; height: auto; width: 257px; }`,
        `.framer-4QMRN.framer-v-1psdm58 .framer-usc9lz { top: 11px; width: 123px; }`,
        `.framer-4QMRN.framer-v-akewxq .framer-xysiq8 { bottom: 111px; height: unset; left: 1px; top: 3px; width: auto; }`,
        `.framer-4QMRN.framer-v-1e9u3hq .framer-1rr31fj { left: unset; order: 0; position: relative; top: unset; }`,
        `.framer-4QMRN.framer-v-1e9u3hq .framer-1lvv1rv { left: unset; order: 26; position: relative; top: unset; }`,
        `.framer-4QMRN.framer-v-1rlofzs .framer-usc9lz { width: 123px; }`,
        `.framer-4QMRN.framer-v-er1sbv .framer-8g2e54 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 17px; height: 96px; justify-content: flex-start; left: calc(50.76923076923079% - 270px / 2); padding: 0px; position: absolute; top: calc(51.127819548872196% - 96px / 2); width: 270px; }`,
        `.framer-4QMRN.framer-v-er1sbv .framer-5gy8ng { left: unset; order: 21; position: relative; top: unset; width: 185px; }`,
        `.framer-4QMRN.framer-v-er1sbv .framer-51wwnq { order: 22; position: relative; right: unset; top: unset; }`,
        `.framer-4QMRN.framer-v-ks9nhz .framer-1e4f3wx { right: 0px; width: unset; }`,
        `.framer-4QMRN.framer-v-4vfxyl .framer-8g2e54 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 96px; justify-content: flex-start; left: 30px; padding: 0px; position: absolute; top: calc(51.127819548872196% - 96px / 2); width: 270px; }`,
        `.framer-4QMRN.framer-v-4vfxyl .framer-5gy8ng { left: unset; position: relative; top: unset; width: 162px; }`,
        `.framer-4QMRN.framer-v-4vfxyl .framer-usc9lz { left: unset; position: relative; top: unset; width: 79px; }`,
        `.framer-4QMRN.framer-v-4vfxyl .framer-1ym4fck { position: relative; right: unset; top: unset; }`,
        `.framer-4QMRN.framer-v-8bqjf7.hover .framer-8g2e54, .framer-4QMRN.framer-v-1a9330s.hover .framer-8g2e54, .framer-4QMRN.framer-v-xtf4i9.hover .framer-8g2e54, .framer-4QMRN.framer-v-1fhkzb4.hover .framer-8g2e54 { height: unset; width: unset; }`,
        ...ce,
        ...I,
        ..._e,
        `.framer-4QMRN[data-border="true"]::after, .framer-4QMRN [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (J = T(et, tt, `framer-4QMRN`)),
      (J.displayName = `card`),
      (J.defaultProps = { height: 272, width: 390 }),
      x(J, {
        variant: {
          options:
            /* @__PURE__ */ `KLyaXb7K9.dRQPYVOug.BpsnDco1O.xZVv9tNbX.N9GUwIWPD.cD9rLKfQn.Rxt7utfM3.MSJHF2QXE.HaNUFLKvv.UxpJQbg61.QiQgm4bOg.JqyganigR.GOSwbfaJQ.DlxMkMYXm.a32v6idmv.wRQtOZ3F9.RydWzkDLX.y7M3CjmnM.N9UZlDfsa.uiiU6jsyt.MaFEpU2zD.phu3XUKqQ.Pj420GME3.v7yUg2HyE.TBYylgvy8.DYY5M_Pj0.k6_oC3T0N.iiKGOfy_S.agqOb6cmW.yfGjL1R6Q.oVfSeqUz7.JUEOuqkAM.FCBz9z5cr.o5vUm1wJC.yW_VqnuVb.vmMayCvYy.UfCEsKHme.kaVVTKBYG.w5bPZnqfl.Vxbf2Jvhy.YWLOn7enl.p132rZ96c`.split(
              `.`
            ),
          optionTitles:
            /* @__PURE__ */ `IMI 1.IMI 2.IMI 3.Variant 4.Variant 5.Variant 6.Variant 7.Variant 8.Variant 9.aramco 1.aramco 2.aramco 3.aramco 4.tab aramco 1.tab aramco 2.tab aramco 3.pho aramco 1.pho aramco 2.pho aramco 3.pho aramco 4.tab aramco 4.Indorama 1.Indorama 2.Indorama 3.Indorama 4.Indorama 1 mini.Indorama 2 mini.Indorama 3 mini.Indorama 1 mobile.Indorama 2 mobile.Indorama 3 mobile.Indorama 4 mobile.Indorama 4 mini.spike.spike 2.spike 3.spike 1 mini.spike 2 mini.spike 3 mini.spike 1 mobile.spike 2 mobile.spike 3 mobile`.split(
              `.`
            ),
          title: `Variant`,
          type: N.Enum,
        },
      }),
      A(
        J,
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
          ..._(le),
          ..._(re),
          ..._(ve),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function Y(e, t) {
  for (; t; ) {
    let n = at[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function rt(e) {
  let t = [];
  for (; e; ) {
    let n = at[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function it(e) {
  let t = rt(e);
  if (t) throw t;
}
var at;
function ot() {
  return (ot = e(() => {
    (E(), (at = { AYmst8Nt3: new P(() => import("./kopzQlsME-0.CbymK_OW.mjs?v=20261116-migration-v2")) }));
  }))();
}
function X(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var st, ct, lt, ut, Z, dt, ft, pt, mt, ht, gt, _t, vt, Q;
function yt() {
  return (yt = e(() => {
    (s(),
      E(),
      p(),
      r(),
      ne(),
      be(),
      ot(),
      (st = [
        `wmh199Eb2`,
        `Tp739OrQo`,
        `uK9sEc5tn`,
        `zUpLPiP7E`,
        `nhJf68myD`,
        `jkQ8IXLP2`,
        `zbGHPKiwC`,
        `T4SBAGZ2h`,
        `knSh84bJl`,
      ]),
      (ct = `framer-6xWm0`),
      (lt = {
        jkQ8IXLP2: `framer-v-kkjytx`,
        knSh84bJl: `framer-v-9a7nd1`,
        nhJf68myD: `framer-v-1c9wrdz`,
        T4SBAGZ2h: `framer-v-efcwuc`,
        Tp739OrQo: `framer-v-qki36f`,
        uK9sEc5tn: `framer-v-1v6xloj`,
        wmh199Eb2: `framer-v-1c8724l`,
        zbGHPKiwC: `framer-v-phgaqh`,
        zUpLPiP7E: `framer-v-185ssnh`,
      }),
      (ut = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Z = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.9,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.25, delay: 0, duration: 0.45, type: `spring` },
      }),
      (dt = (e, t) => `translateX(-50%) ${t}`),
      (ft = ({ value: e, children: t }) => {
        let r = i(d),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ l(d.Provider, { value: o, children: t });
      }),
      (pt = {
        "desktop/deliverable1/imi": `wmh199Eb2`,
        "desktop/deliverable2/aramco": `zUpLPiP7E`,
        "desktop/deliverable3/indo": `zbGHPKiwC`,
        "phone/deliverable1/imi": `uK9sEc5tn`,
        "phone/deliverable2/aramco": `jkQ8IXLP2`,
        "phone/deliverable3/indo": `knSh84bJl`,
        "tablet/deliverable1/imi": `Tp739OrQo`,
        "tablet/deliverable2/aramco": `nhJf68myD`,
        "tablet/deliverable3/indo": `T4SBAGZ2h`,
      }),
      (mt = f.create(a)),
      (ht = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: pt[r.variant] ?? r.variant ?? `wmh199Eb2`,
      })),
      (gt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (_t = /*#__PURE__*/ c(function (e, n) {
        let r = o(null),
          i = n ?? r,
          s = t(),
          { activeLocale: c, contentLocale: d, setLocale: p } = F();
        k();
        let { style: g, className: _, layoutId: v, variant: y, ...b } = ht(e),
          {
            baseVariant: x,
            classNames: T,
            clearLoadingGesture: E,
            gestureHandlers: D,
            gestureVariant: O,
            isLoading: ee,
            setGestureState: te,
            setVariant: A,
            variants: j,
          } = S({
            cycleOrder: st,
            defaultVariant: `wmh199Eb2`,
            ref: i,
            variant: y,
            variantClassNames: lt,
          }),
          M = gt(e, j),
          N = w(ct, ie, Ce),
          P = () =>
            ![
              `Tp739OrQo`,
              `uK9sEc5tn`,
              `nhJf68myD`,
              `jkQ8IXLP2`,
              `T4SBAGZ2h`,
              `knSh84bJl`,
            ].includes(x);
        it(c);
        let ne = () => ![`zUpLPiP7E`, `zbGHPKiwC`].includes(x),
          I = () => x === `zUpLPiP7E`,
          re = () => x === `zbGHPKiwC`,
          L = () => !![`Tp739OrQo`, `nhJf68myD`, `T4SBAGZ2h`].includes(x),
          R = () => ![`nhJf68myD`, `T4SBAGZ2h`].includes(x),
          ae = () => ![`Tp739OrQo`, `T4SBAGZ2h`].includes(x),
          oe = () => ![`Tp739OrQo`, `nhJf68myD`].includes(x),
          se = () => x !== `Tp739OrQo`,
          ce = () => !![`uK9sEc5tn`, `jkQ8IXLP2`, `knSh84bJl`].includes(x),
          le = () => ![`jkQ8IXLP2`, `knSh84bJl`].includes(x),
          ue = () => ![`uK9sEc5tn`, `knSh84bJl`].includes(x),
          de = () => ![`uK9sEc5tn`, `jkQ8IXLP2`].includes(x);
        return /*#__PURE__*/ l(m, {
          id: v ?? s,
          children: /*#__PURE__*/ l(mt, {
            animate: j,
            initial: !1,
            children: /*#__PURE__*/ l(ft, {
              value: ut,
              children: /*#__PURE__*/ u(f.div, {
                ...b,
                ...D,
                className: w(N, `framer-1c8724l`, _, T),
                "data-framer-name": `desktop/deliverable1/imi`,
                layoutDependency: M,
                layoutId: `wmh199Eb2`,
                ref: i,
                style: { ...g },
                ...X(
                  {
                    jkQ8IXLP2: { "data-framer-name": `phone/deliverable2/aramco` },
                    knSh84bJl: { "data-framer-name": `phone/deliverable3/indo` },
                    nhJf68myD: { "data-framer-name": `tablet/deliverable2/aramco` },
                    T4SBAGZ2h: { "data-framer-name": `tablet/deliverable3/indo` },
                    Tp739OrQo: { "data-framer-name": `tablet/deliverable1/imi` },
                    uK9sEc5tn: { "data-framer-name": `phone/deliverable1/imi` },
                    zbGHPKiwC: { "data-framer-name": `desktop/deliverable3/indo` },
                    zUpLPiP7E: { "data-framer-name": `desktop/deliverable2/aramco` },
                  },
                  x,
                  O
                ),
                children: [
                  P() &&
                    /*#__PURE__*/ u(f.div, {
                      className: `framer-ej9qn1`,
                      layoutDependency: M,
                      layoutId: `gRfNQNoaU`,
                      style: {
                        backgroundColor: `var(--token-0b09fdc4-bae8-43f3-bba4-8e8677e2b631, rgb(244, 244, 244))`,
                        borderBottomLeftRadius: 3,
                        borderBottomRightRadius: 3,
                        borderTopLeftRadius: 3,
                        borderTopRightRadius: 3,
                      },
                      children: [
                        /*#__PURE__*/ l(h, {
                          __fromCanvasComponent: !0,
                          children:
                            Y(`v0`, d) ??
                            /*#__PURE__*/ l(a, {
                              children: /*#__PURE__*/ l(f.h2, {
                                className: `framer-styles-preset-on1keu`,
                                "data-styles-preset": `O8Bh5Q3QT`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-1of0zx5, var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20)))`,
                                },
                                children: `项目成就`,
                              }),
                            }),
                          className: `framer-igao9i`,
                          "data-framer-name": `Title`,
                          fonts: [`Inter`],
                          layoutDependency: M,
                          layoutId: `yXILBKjEW`,
                          style: {
                            "--extracted-1of0zx5": `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        /*#__PURE__*/ l(f.div, {
                          className: `framer-gbrfxk`,
                          "data-framer-name": `Delivery--parcel`,
                          layoutDependency: M,
                          layoutId: `Gbn5WRlj5`,
                          style: { backgroundColor: `rgba(255, 255, 255, 0)` },
                        }),
                        /*#__PURE__*/ l(C, {
                          className: `framer-pv7zp3`,
                          "data-framer-name": `Vector`,
                          layout: `position`,
                          layoutDependency: M,
                          layoutId: `iuhFTau9h`,
                          opacity: 1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 201 187"><path d="M 198.359 41.237 L 126.181 1.446 C 125.115 0.859 123.919 0.551 122.703 0.551 C 121.487 0.551 120.29 0.859 119.224 1.446 L 47.046 41.237 C 45.915 41.861 44.971 42.779 44.314 43.894 C 43.656 45.008 43.31 46.28 43.31 47.574 C 43.31 48.869 43.656 50.14 44.314 51.255 C 44.971 52.37 45.915 53.287 47.046 53.912 L 115.485 91.643 L 115.485 169.179 L 93.57 157.102 L 86.614 169.777 L 119.224 187.753 C 120.29 188.342 121.486 188.651 122.703 188.651 C 123.919 188.651 125.116 188.342 126.181 187.753 L 198.359 147.963 C 199.491 147.338 200.435 146.421 201.093 145.306 C 201.751 144.192 202.098 142.92 202.098 141.625 L 202.098 47.574 C 202.098 46.279 201.751 45.008 201.093 43.893 C 200.435 42.778 199.491 41.861 198.359 41.237 Z M 122.703 16.043 L 179.902 47.574 L 122.703 79.106 L 65.503 47.574 Z M 187.663 137.347 L 129.92 169.18 L 129.92 91.643 L 187.663 59.81 Z" fill="var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))"></path><path d="M 0 94.6 L 57.742 94.6 L 57.742 80.13 L 0 80.13 Z" fill="var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))"></path><path d="M 14.436 152.477 L 72.178 152.477 L 72.178 138.008 L 14.436 138.008 Z" fill="var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))"></path><path d="M 28.871 123.538 L 86.614 123.538 L 86.614 109.069 L 28.871 109.069 Z" fill="var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))"></path></svg>`,
                          svgContentId: 9321547936,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  P() &&
                    /*#__PURE__*/ l(f.div, {
                      className: `framer-mug0w0`,
                      layoutDependency: M,
                      layoutId: `fjsHkedvp`,
                      children: /*#__PURE__*/ u(f.div, {
                        className: `framer-1k2lhax`,
                        layoutDependency: M,
                        layoutId: `g3VYwbtX8`,
                        children: [
                          /*#__PURE__*/ u(f.div, {
                            className: `framer-3m9tfm`,
                            layoutDependency: M,
                            layoutId: `VSLxd4Lqf`,
                            style: {
                              backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgb(202, 238, 133))`,
                              borderBottomLeftRadius: 3,
                              borderBottomRightRadius: 3,
                              borderTopLeftRadius: 3,
                              borderTopRightRadius: 3,
                            },
                            whileHover: Z,
                            children: [
                              /*#__PURE__*/ l(h, {
                                __fromCanvasComponent: !0,
                                children:
                                  Y(`v1`, d) ??
                                  /*#__PURE__*/ l(a, {
                                    children: /*#__PURE__*/ l(f.p, {
                                      className: `framer-styles-preset-20koot`,
                                      "data-styles-preset": `ub82bN_DX`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `left` },
                                      children: `工作场所事故`,
                                    }),
                                  }),
                                className: `framer-1f6samn`,
                                fonts: [`Inter`],
                                layoutDependency: M,
                                layoutId: `WIjYnK9kD`,
                                style: {
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...X(
                                  {
                                    zbGHPKiwC: {
                                      children:
                                        Y(`v3`, d) ??
                                        /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(f.p, {
                                            className: `framer-styles-preset-20koot`,
                                            "data-styles-preset": `ub82bN_DX`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `left` },
                                            children: `用纸量`,
                                          }),
                                        }),
                                    },
                                    zUpLPiP7E: {
                                      children:
                                        Y(`v2`, d) ??
                                        /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(f.p, {
                                            className: `framer-styles-preset-20koot`,
                                            "data-styles-preset": `ub82bN_DX`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `left` },
                                            children: `能源消耗`,
                                          }),
                                        }),
                                    },
                                  },
                                  x,
                                  O
                                ),
                              }),
                              /*#__PURE__*/ l(C, {
                                className: `framer-njhzgt`,
                                "data-framer-name": `Vector`,
                                layout: `position`,
                                layoutDependency: M,
                                layoutId: `ZTKt_p3yF`,
                                opacity: 1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 48"><path d="M 51.429 48 L 51.429 42.667 L 70.245 42.667 L 45.714 19.771 L 33.449 31.219 C 33.183 31.466 32.869 31.663 32.522 31.797 C 32.175 31.931 31.804 32 31.429 32 C 31.053 32 30.682 31.931 30.335 31.797 C 29.989 31.663 29.674 31.466 29.409 31.219 L 0 3.771 L 4.04 0 L 31.429 25.562 L 43.694 14.115 C 43.959 13.867 44.274 13.67 44.621 13.536 C 44.968 13.402 45.339 13.333 45.714 13.333 C 46.089 13.333 46.461 13.402 46.808 13.536 C 47.154 13.67 47.469 13.867 47.734 14.115 L 74.286 38.896 L 74.286 21.333 L 80 21.333 L 80 48 Z" fill="var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))"></path></svg>`,
                                svgContentId: 11642430378,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          /*#__PURE__*/ u(f.div, {
                            className: `framer-zcex0s`,
                            layoutDependency: M,
                            layoutId: `qH84OjsmD`,
                            style: {
                              backgroundColor: `var(--token-863a1885-91ba-42e9-ac15-4f3b8355a5ed, rgb(250, 249, 245))`,
                              borderBottomLeftRadius: 3,
                              borderBottomRightRadius: 3,
                              borderTopLeftRadius: 3,
                              borderTopRightRadius: 3,
                            },
                            whileHover: Z,
                            children: [
                              /*#__PURE__*/ l(h, {
                                __fromCanvasComponent: !0,
                                children:
                                  Y(`v4`, d) ??
                                  /*#__PURE__*/ l(a, {
                                    children: /*#__PURE__*/ l(f.p, {
                                      className: `framer-styles-preset-20koot`,
                                      "data-styles-preset": `ub82bN_DX`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `left` },
                                      children: `设备利用率`,
                                    }),
                                  }),
                                className: `framer-tqpgp4`,
                                fonts: [`Inter`],
                                layoutDependency: M,
                                layoutId: `oBpyUOh4f`,
                                style: {
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...X(
                                  {
                                    zbGHPKiwC: {
                                      children:
                                        Y(`v6`, d) ??
                                        /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(f.p, {
                                            className: `framer-styles-preset-20koot`,
                                            "data-styles-preset": `ub82bN_DX`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `left` },
                                            children: `数据准确性`,
                                          }),
                                        }),
                                    },
                                    zUpLPiP7E: {
                                      children:
                                        Y(`v5`, d) ??
                                        /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(f.p, {
                                            className: `framer-styles-preset-20koot`,
                                            "data-styles-preset": `ub82bN_DX`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `left` },
                                            children: `用水`,
                                          }),
                                        }),
                                    },
                                  },
                                  x,
                                  O
                                ),
                              }),
                              ne() &&
                                /*#__PURE__*/ l(C, {
                                  className: `framer-t6a556`,
                                  "data-framer-name": `Vector`,
                                  layout: `position`,
                                  layoutDependency: M,
                                  layoutId: `B1KIzF3CL`,
                                  opacity: 1,
                                  style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 48"><path d="M 51.429 0 L 51.429 5.333 L 70.245 5.333 L 45.714 28.229 L 33.449 16.781 C 33.183 16.534 32.869 16.337 32.522 16.203 C 32.175 16.069 31.804 16 31.429 16 C 31.053 16 30.682 16.069 30.335 16.203 C 29.989 16.337 29.674 16.534 29.409 16.781 L 0 44.229 L 4.04 48 L 31.429 22.438 L 43.694 33.885 C 43.959 34.133 44.274 34.33 44.621 34.464 C 44.968 34.598 45.339 34.667 45.714 34.667 C 46.089 34.667 46.461 34.598 46.808 34.464 C 47.154 34.33 47.469 34.133 47.734 33.885 L 74.286 9.104 L 74.286 26.667 L 80 26.667 L 80 0 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path></svg>`,
                                  svgContentId: 10993571480,
                                  withExternalLayout: !0,
                                }),
                              I() &&
                                /*#__PURE__*/ l(C, {
                                  className: `framer-tk8du8`,
                                  "data-framer-name": `Vector`,
                                  layout: `position`,
                                  layoutDependency: M,
                                  layoutId: `BeebpUeg7`,
                                  opacity: 1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 48"><path d="M 51.429 48 L 51.429 42.667 L 70.245 42.667 L 45.714 19.771 L 33.449 31.219 C 33.183 31.466 32.869 31.663 32.522 31.797 C 32.175 31.931 31.804 32 31.429 32 C 31.053 32 30.682 31.931 30.335 31.797 C 29.989 31.663 29.674 31.466 29.409 31.219 L 0 3.771 L 4.04 0 L 31.429 25.562 L 43.694 14.115 C 43.959 13.867 44.274 13.67 44.621 13.536 C 44.968 13.402 45.339 13.333 45.714 13.333 C 46.089 13.333 46.461 13.402 46.808 13.536 C 47.154 13.67 47.469 13.867 47.734 14.115 L 74.286 38.896 L 74.286 21.333 L 80 21.333 L 80 48 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path></svg>`,
                                  svgContentId: 9677402847,
                                  withExternalLayout: !0,
                                  ...X({ zUpLPiP7E: { svgContentId: 12182358281 } }, x, O),
                                }),
                              re() &&
                                /*#__PURE__*/ l(C, {
                                  className: `framer-egnl62`,
                                  "data-framer-name": `Vector`,
                                  layout: `position`,
                                  layoutDependency: M,
                                  layoutId: `MRMbPEGM6`,
                                  opacity: 1,
                                  style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 48"><path d="M 51.429 0 L 51.429 5.333 L 70.245 5.333 L 45.714 28.229 L 33.449 16.781 C 33.183 16.534 32.869 16.337 32.522 16.203 C 32.175 16.069 31.804 16 31.429 16 C 31.053 16 30.682 16.069 30.335 16.203 C 29.989 16.337 29.674 16.534 29.409 16.781 L 0 44.229 L 4.04 48 L 31.429 22.438 L 43.694 33.885 C 43.959 34.133 44.274 34.33 44.621 34.464 C 44.968 34.598 45.339 34.667 45.714 34.667 C 46.089 34.667 46.461 34.598 46.808 34.464 C 47.154 34.33 47.469 34.133 47.734 33.885 L 74.286 9.104 L 74.286 26.667 L 80 26.667 L 80 0 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path></svg>`,
                                  svgContentId: 9949040998,
                                  withExternalLayout: !0,
                                  ...X({ zbGHPKiwC: { svgContentId: 10993571480 } }, x, O),
                                }),
                            ],
                          }),
                          /*#__PURE__*/ u(f.div, {
                            className: `framer-zam0uv`,
                            "data-border": !0,
                            layoutDependency: M,
                            layoutId: `Fc7iOW0YW`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgba(34, 34, 34, 0.2)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                              borderBottomLeftRadius: 3,
                              borderBottomRightRadius: 3,
                              borderTopLeftRadius: 3,
                              borderTopRightRadius: 3,
                            },
                            whileHover: Z,
                            children: [
                              /*#__PURE__*/ l(h, {
                                __fromCanvasComponent: !0,
                                children:
                                  Y(`v7`, d) ??
                                  /*#__PURE__*/ l(a, {
                                    children: /*#__PURE__*/ l(f.p, {
                                      className: `framer-styles-preset-20koot`,
                                      "data-styles-preset": `ub82bN_DX`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `left` },
                                      children: `运营效率`,
                                    }),
                                  }),
                                className: `framer-ru9crk`,
                                fonts: [`Inter`],
                                layoutDependency: M,
                                layoutId: `Nt2nYU2rO`,
                                style: {
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...X(
                                  {
                                    zbGHPKiwC: {
                                      children:
                                        Y(`v9`, d) ??
                                        /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(f.p, {
                                            className: `framer-styles-preset-20koot`,
                                            "data-styles-preset": `ub82bN_DX`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `left` },
                                            children: `工作流程效率`,
                                          }),
                                        }),
                                    },
                                    zUpLPiP7E: {
                                      children:
                                        Y(`v8`, d) ??
                                        /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(f.p, {
                                            className: `framer-styles-preset-20koot`,
                                            "data-styles-preset": `ub82bN_DX`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `left` },
                                            children: `资源利用`,
                                          }),
                                        }),
                                    },
                                  },
                                  x,
                                  O
                                ),
                              }),
                              /*#__PURE__*/ l(C, {
                                className: `framer-1ajry0i`,
                                "data-framer-name": `Vector`,
                                layout: `position`,
                                layoutDependency: M,
                                layoutId: `s2DaQzbG3`,
                                opacity: 1,
                                style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 48"><path d="M 51.429 0 L 51.429 5.333 L 70.245 5.333 L 45.714 28.229 L 33.449 16.781 C 33.183 16.534 32.869 16.337 32.522 16.203 C 32.175 16.069 31.804 16 31.429 16 C 31.053 16 30.682 16.069 30.335 16.203 C 29.989 16.337 29.674 16.534 29.409 16.781 L 0 44.229 L 4.04 48 L 31.429 22.438 L 43.694 33.885 C 43.959 34.133 44.274 34.33 44.621 34.464 C 44.968 34.598 45.339 34.667 45.714 34.667 C 46.089 34.667 46.461 34.598 46.808 34.464 C 47.154 34.33 47.469 34.133 47.734 33.885 L 74.286 9.104 L 74.286 26.667 L 80 26.667 L 80 0 Z" fill="var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))"></path></svg>`,
                                svgContentId: 9476188371,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          /*#__PURE__*/ u(f.div, {
                            className: `framer-b1uadu`,
                            layoutDependency: M,
                            layoutId: `VeEpcZN7P`,
                            style: {
                              backgroundColor: `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                              borderBottomLeftRadius: 3,
                              borderBottomRightRadius: 3,
                              borderTopLeftRadius: 3,
                              borderTopRightRadius: 3,
                            },
                            whileHover: Z,
                            children: [
                              /*#__PURE__*/ l(h, {
                                __fromCanvasComponent: !0,
                                children:
                                  Y(`v10`, d) ??
                                  /*#__PURE__*/ l(a, {
                                    children: /*#__PURE__*/ l(f.p, {
                                      className: `framer-styles-preset-20koot`,
                                      "data-styles-preset": `ub82bN_DX`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)))`,
                                      },
                                      children: `员工安全与福利满意度`,
                                    }),
                                  }),
                                className: `framer-19p39f3`,
                                fonts: [`Inter`],
                                layoutDependency: M,
                                layoutId: `w8aliCYZW`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...X(
                                  {
                                    zbGHPKiwC: {
                                      children:
                                        Y(`v12`, d) ??
                                        /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(f.p, {
                                            className: `framer-styles-preset-20koot`,
                                            "data-styles-preset": `ub82bN_DX`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)))`,
                                            },
                                            children: `合规跟踪`,
                                          }),
                                        }),
                                    },
                                    zUpLPiP7E: {
                                      children:
                                        Y(`v11`, d) ??
                                        /*#__PURE__*/ l(a, {
                                          children: /*#__PURE__*/ l(f.p, {
                                            className: `framer-styles-preset-20koot`,
                                            "data-styles-preset": `ub82bN_DX`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)))`,
                                            },
                                            children: `运营效率`,
                                          }),
                                        }),
                                    },
                                  },
                                  x,
                                  O
                                ),
                              }),
                              /*#__PURE__*/ l(C, {
                                className: `framer-pdx8y3`,
                                "data-framer-name": `Vector`,
                                layout: `position`,
                                layoutDependency: M,
                                layoutId: `ryouBt6Di`,
                                opacity: 1,
                                style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 48"><path d="M 51.429 0 L 51.429 5.333 L 70.245 5.333 L 45.714 28.229 L 33.449 16.781 C 33.183 16.534 32.869 16.337 32.522 16.203 C 32.175 16.069 31.804 16 31.429 16 C 31.053 16 30.682 16.069 30.335 16.203 C 29.989 16.337 29.674 16.534 29.409 16.781 L 0 44.229 L 4.04 48 L 31.429 22.438 L 43.694 33.885 C 43.959 34.133 44.274 34.33 44.621 34.464 C 44.968 34.598 45.339 34.667 45.714 34.667 C 46.089 34.667 46.461 34.598 46.808 34.464 C 47.154 34.33 47.469 34.133 47.734 33.885 L 74.286 9.104 L 74.286 26.667 L 80 26.667 L 80 0 Z" fill="var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))"></path></svg>`,
                                svgContentId: 10340677934,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  L() &&
                    /*#__PURE__*/ u(f.div, {
                      className: `framer-xrj050`,
                      layoutDependency: M,
                      layoutId: `Br4qu60_x`,
                      children: [
                        /*#__PURE__*/ u(f.div, {
                          className: `framer-q6n9rg`,
                          layoutDependency: M,
                          layoutId: `ONInuap8b`,
                          children: [
                            /*#__PURE__*/ u(f.div, {
                              className: `framer-j9dffi`,
                              layoutDependency: M,
                              layoutId: `jGWialNje`,
                              style: {
                                backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgb(202, 238, 133))`,
                                borderBottomLeftRadius: 3,
                                borderBottomRightRadius: 3,
                                borderTopLeftRadius: 3,
                                borderTopRightRadius: 3,
                              },
                              whileHover: Z,
                              children: [
                                /*#__PURE__*/ l(h, {
                                  __fromCanvasComponent: !0,
                                  children:
                                    Y(`v1`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-20koot`,
                                        "data-styles-preset": `ub82bN_DX`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `工作场所事故`,
                                      }),
                                    }),
                                  className: `framer-15u1qmt`,
                                  fonts: [`Inter`],
                                  layoutDependency: M,
                                  layoutId: `V35dYXyo3`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...X(
                                    {
                                      nhJf68myD: {
                                        children:
                                          Y(`v2`, d) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(f.p, {
                                              className: `framer-styles-preset-20koot`,
                                              "data-styles-preset": `ub82bN_DX`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `left` },
                                              children: `能源消耗`,
                                            }),
                                          }),
                                      },
                                      T4SBAGZ2h: {
                                        children:
                                          Y(`v3`, d) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(f.p, {
                                              className: `framer-styles-preset-20koot`,
                                              "data-styles-preset": `ub82bN_DX`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `left` },
                                              children: `用纸量`,
                                            }),
                                          }),
                                        transformTemplate: dt,
                                      },
                                    },
                                    x,
                                    O
                                  ),
                                }),
                                /*#__PURE__*/ l(C, {
                                  className: `framer-zkn8yx`,
                                  "data-framer-name": `Vector`,
                                  layout: `position`,
                                  layoutDependency: M,
                                  layoutId: `EzGK9iz04`,
                                  opacity: 1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 48"><path d="M 51.429 48 L 51.429 42.667 L 70.245 42.667 L 45.714 19.771 L 33.449 31.219 C 33.183 31.466 32.869 31.663 32.522 31.797 C 32.175 31.931 31.804 32 31.429 32 C 31.053 32 30.682 31.931 30.335 31.797 C 29.989 31.663 29.674 31.466 29.409 31.219 L 0 3.771 L 4.04 0 L 31.429 25.562 L 43.694 14.115 C 43.959 13.867 44.274 13.67 44.621 13.536 C 44.968 13.402 45.339 13.333 45.714 13.333 C 46.089 13.333 46.461 13.402 46.808 13.536 C 47.154 13.67 47.469 13.867 47.734 14.115 L 74.286 38.896 L 74.286 21.333 L 80 21.333 L 80 48 Z" fill="var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))"></path></svg>`,
                                  svgContentId: 11642430378,
                                  withExternalLayout: !0,
                                  ...X({ T4SBAGZ2h: { svgContentId: 12669323478 } }, x, O),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ u(f.div, {
                              className: `framer-16t7idw`,
                              layoutDependency: M,
                              layoutId: `d6OdhnE6Z`,
                              style: {
                                backgroundColor: `var(--token-863a1885-91ba-42e9-ac15-4f3b8355a5ed, rgb(250, 249, 245))`,
                                borderBottomLeftRadius: 3,
                                borderBottomRightRadius: 3,
                                borderTopLeftRadius: 3,
                                borderTopRightRadius: 3,
                              },
                              whileHover: Z,
                              children: [
                                /*#__PURE__*/ l(h, {
                                  __fromCanvasComponent: !0,
                                  children:
                                    Y(`v4`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-20koot`,
                                        "data-styles-preset": `ub82bN_DX`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `设备利用率`,
                                      }),
                                    }),
                                  className: `framer-184qawm`,
                                  fonts: [`Inter`],
                                  layoutDependency: M,
                                  layoutId: `ISsVnP8uX`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...X(
                                    {
                                      nhJf68myD: {
                                        children:
                                          Y(`v5`, d) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(f.p, {
                                              className: `framer-styles-preset-20koot`,
                                              "data-styles-preset": `ub82bN_DX`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `left` },
                                              children: `用水`,
                                            }),
                                          }),
                                      },
                                      T4SBAGZ2h: {
                                        children:
                                          Y(`v6`, d) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(f.p, {
                                              className: `framer-styles-preset-20koot`,
                                              "data-styles-preset": `ub82bN_DX`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `left` },
                                              children: `数据准确性`,
                                            }),
                                          }),
                                      },
                                    },
                                    x,
                                    O
                                  ),
                                }),
                                R() &&
                                  /*#__PURE__*/ l(C, {
                                    className: `framer-xabo44`,
                                    "data-framer-name": `Vector`,
                                    layout: `position`,
                                    layoutDependency: M,
                                    layoutId: `iRmXBXP3Q`,
                                    opacity: 1,
                                    style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 48"><path d="M 51.429 0 L 51.429 5.333 L 70.245 5.333 L 45.714 28.229 L 33.449 16.781 C 33.183 16.534 32.869 16.337 32.522 16.203 C 32.175 16.069 31.804 16 31.429 16 C 31.053 16 30.682 16.069 30.335 16.203 C 29.989 16.337 29.674 16.534 29.409 16.781 L 0 44.229 L 4.04 48 L 31.429 22.438 L 43.694 33.885 C 43.959 34.133 44.274 34.33 44.621 34.464 C 44.968 34.598 45.339 34.667 45.714 34.667 C 46.089 34.667 46.461 34.598 46.808 34.464 C 47.154 34.33 47.469 34.133 47.734 33.885 L 74.286 9.104 L 74.286 26.667 L 80 26.667 L 80 0 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path></svg>`,
                                    svgContentId: 11330543814,
                                    withExternalLayout: !0,
                                  }),
                                ae() &&
                                  /*#__PURE__*/ l(C, {
                                    className: `framer-1r0lr70`,
                                    "data-framer-name": `Vector`,
                                    layout: `position`,
                                    layoutDependency: M,
                                    layoutId: `iVkWALnad`,
                                    opacity: 1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 48"><path d="M 51.429 48 L 51.429 42.667 L 70.245 42.667 L 45.714 19.771 L 33.449 31.219 C 33.183 31.466 32.869 31.663 32.522 31.797 C 32.175 31.931 31.804 32 31.429 32 C 31.053 32 30.682 31.931 30.335 31.797 C 29.989 31.663 29.674 31.466 29.409 31.219 L 0 3.771 L 4.04 0 L 31.429 25.562 L 43.694 14.115 C 43.959 13.867 44.274 13.67 44.621 13.536 C 44.968 13.402 45.339 13.333 45.714 13.333 C 46.089 13.333 46.461 13.402 46.808 13.536 C 47.154 13.67 47.469 13.867 47.734 14.115 L 74.286 38.896 L 74.286 21.333 L 80 21.333 L 80 48 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path></svg>`,
                                    svgContentId: 12182358281,
                                    withExternalLayout: !0,
                                  }),
                                oe() &&
                                  /*#__PURE__*/ l(C, {
                                    className: `framer-1nup9zj`,
                                    "data-framer-name": `Vector`,
                                    layout: `position`,
                                    layoutDependency: M,
                                    layoutId: `R_UdZPhKs`,
                                    opacity: 1,
                                    style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 48"><path d="M 51.429 0 L 51.429 5.333 L 70.245 5.333 L 45.714 28.229 L 33.449 16.781 C 33.183 16.534 32.869 16.337 32.522 16.203 C 32.175 16.069 31.804 16 31.429 16 C 31.053 16 30.682 16.069 30.335 16.203 C 29.989 16.337 29.674 16.534 29.409 16.781 L 0 44.229 L 4.04 48 L 31.429 22.438 L 43.694 33.885 C 43.959 34.133 44.274 34.33 44.621 34.464 C 44.968 34.598 45.339 34.667 45.714 34.667 C 46.089 34.667 46.461 34.598 46.808 34.464 C 47.154 34.33 47.469 34.133 47.734 33.885 L 74.286 9.104 L 74.286 26.667 L 80 26.667 L 80 0 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path></svg>`,
                                    svgContentId: 10061383230,
                                    withExternalLayout: !0,
                                    ...X({ T4SBAGZ2h: { svgContentId: 11330543814 } }, x, O),
                                  }),
                              ],
                            }),
                          ],
                        }),
                        /*#__PURE__*/ u(f.div, {
                          className: `framer-1hqmvft`,
                          layoutDependency: M,
                          layoutId: `Q0xePhuao`,
                          children: [
                            /*#__PURE__*/ u(f.div, {
                              className: `framer-1w1xa19`,
                              "data-border": !0,
                              layoutDependency: M,
                              layoutId: `hO3a8lF2p`,
                              style: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `rgba(34, 34, 34, 0.2)`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                                backgroundColor: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                borderBottomLeftRadius: 3,
                                borderBottomRightRadius: 3,
                                borderTopLeftRadius: 3,
                                borderTopRightRadius: 3,
                              },
                              whileHover: Z,
                              children: [
                                /*#__PURE__*/ l(h, {
                                  __fromCanvasComponent: !0,
                                  children:
                                    Y(`v7`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-20koot`,
                                        "data-styles-preset": `ub82bN_DX`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `运营效率`,
                                      }),
                                    }),
                                  className: `framer-ni0c73`,
                                  fonts: [`Inter`],
                                  layoutDependency: M,
                                  layoutId: `KrxJvAd2U`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...X(
                                    {
                                      nhJf68myD: {
                                        children:
                                          Y(`v8`, d) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(f.p, {
                                              className: `framer-styles-preset-20koot`,
                                              "data-styles-preset": `ub82bN_DX`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `left` },
                                              children: `资源利用`,
                                            }),
                                          }),
                                      },
                                      T4SBAGZ2h: {
                                        children:
                                          Y(`v9`, d) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(f.p, {
                                              className: `framer-styles-preset-20koot`,
                                              "data-styles-preset": `ub82bN_DX`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `left` },
                                              children: `工作流程效率`,
                                            }),
                                          }),
                                      },
                                    },
                                    x,
                                    O
                                  ),
                                }),
                                R() &&
                                  /*#__PURE__*/ l(C, {
                                    className: `framer-1w8kzij`,
                                    "data-framer-name": `Vector`,
                                    layout: `position`,
                                    layoutDependency: M,
                                    layoutId: `VtBIkEgEt`,
                                    opacity: 1,
                                    style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 48"><path d="M 51.429 0 L 51.429 5.333 L 70.245 5.333 L 45.714 28.229 L 33.449 16.781 C 33.183 16.534 32.869 16.337 32.522 16.203 C 32.175 16.069 31.804 16 31.429 16 C 31.053 16 30.682 16.069 30.335 16.203 C 29.989 16.337 29.674 16.534 29.409 16.781 L 0 44.229 L 4.04 48 L 31.429 22.438 L 43.694 33.885 C 43.959 34.133 44.274 34.33 44.621 34.464 C 44.968 34.598 45.339 34.667 45.714 34.667 C 46.089 34.667 46.461 34.598 46.808 34.464 C 47.154 34.33 47.469 34.133 47.734 33.885 L 74.286 9.104 L 74.286 26.667 L 80 26.667 L 80 0 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path></svg>`,
                                    svgContentId: 11330543814,
                                    withExternalLayout: !0,
                                    ...X(
                                      {
                                        Tp739OrQo: {
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 48"><path d="M 51.429 0 L 51.429 5.333 L 70.245 5.333 L 45.714 28.229 L 33.449 16.781 C 33.183 16.534 32.869 16.337 32.522 16.203 C 32.175 16.069 31.804 16 31.429 16 C 31.053 16 30.682 16.069 30.335 16.203 C 29.989 16.337 29.674 16.534 29.409 16.781 L 0 44.229 L 4.04 48 L 31.429 22.438 L 43.694 33.885 C 43.959 34.133 44.274 34.33 44.621 34.464 C 44.968 34.598 45.339 34.667 45.714 34.667 C 46.089 34.667 46.461 34.598 46.808 34.464 C 47.154 34.33 47.469 34.133 47.734 33.885 L 74.286 9.104 L 74.286 26.667 L 80 26.667 L 80 0 Z" fill="var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))"></path></svg>`,
                                          svgContentId: 11184226432,
                                        },
                                      },
                                      x,
                                      O
                                    ),
                                  }),
                                se() &&
                                  /*#__PURE__*/ l(C, {
                                    className: `framer-hgc0lt`,
                                    "data-framer-name": `Vector`,
                                    layout: `position`,
                                    layoutDependency: M,
                                    layoutId: `yu06zvXBt`,
                                    opacity: 1,
                                    style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 48"><path d="M 51.429 0 L 51.429 5.333 L 70.245 5.333 L 45.714 28.229 L 33.449 16.781 C 33.183 16.534 32.869 16.337 32.522 16.203 C 32.175 16.069 31.804 16 31.429 16 C 31.053 16 30.682 16.069 30.335 16.203 C 29.989 16.337 29.674 16.534 29.409 16.781 L 0 44.229 L 4.04 48 L 31.429 22.438 L 43.694 33.885 C 43.959 34.133 44.274 34.33 44.621 34.464 C 44.968 34.598 45.339 34.667 45.714 34.667 C 46.089 34.667 46.461 34.598 46.808 34.464 C 47.154 34.33 47.469 34.133 47.734 33.885 L 74.286 9.104 L 74.286 26.667 L 80 26.667 L 80 0 Z" fill="var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))"></path></svg>`,
                                    svgContentId: 9476188371,
                                    withExternalLayout: !0,
                                    ...X(
                                      {
                                        nhJf68myD: { svgContentId: 11184226432 },
                                        T4SBAGZ2h: { svgContentId: 11184226432 },
                                      },
                                      x,
                                      O
                                    ),
                                  }),
                              ],
                            }),
                            /*#__PURE__*/ u(f.div, {
                              className: `framer-1fhnz6w`,
                              layoutDependency: M,
                              layoutId: `d1FBBgdUR`,
                              style: {
                                backgroundColor: `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                                borderBottomLeftRadius: 3,
                                borderBottomRightRadius: 3,
                                borderTopLeftRadius: 3,
                                borderTopRightRadius: 3,
                              },
                              whileHover: Z,
                              children: [
                                /*#__PURE__*/ l(h, {
                                  __fromCanvasComponent: !0,
                                  children:
                                    Y(`v10`, d) ??
                                    /*#__PURE__*/ l(a, {
                                      children: /*#__PURE__*/ l(f.p, {
                                        className: `framer-styles-preset-20koot`,
                                        "data-styles-preset": `ub82bN_DX`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)))`,
                                        },
                                        children: `员工安全与福利满意度`,
                                      }),
                                    }),
                                  className: `framer-e7fgj9`,
                                  fonts: [`Inter`],
                                  layoutDependency: M,
                                  layoutId: `edMVJD6mD`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...X(
                                    {
                                      nhJf68myD: {
                                        children:
                                          Y(`v11`, d) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(f.p, {
                                              className: `framer-styles-preset-20koot`,
                                              "data-styles-preset": `ub82bN_DX`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)))`,
                                              },
                                              children: `运营效率`,
                                            }),
                                          }),
                                      },
                                      T4SBAGZ2h: {
                                        children:
                                          Y(`v12`, d) ??
                                          /*#__PURE__*/ l(a, {
                                            children: /*#__PURE__*/ l(f.p, {
                                              className: `framer-styles-preset-20koot`,
                                              "data-styles-preset": `ub82bN_DX`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)))`,
                                              },
                                              children: `合规跟踪`,
                                            }),
                                          }),
                                      },
                                    },
                                    x,
                                    O
                                  ),
                                }),
                                /*#__PURE__*/ l(C, {
                                  className: `framer-1qjh2bc`,
                                  "data-framer-name": `Vector`,
                                  layout: `position`,
                                  layoutDependency: M,
                                  layoutId: `fRHUHd6HH`,
                                  opacity: 1,
                                  style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 48"><path d="M 51.429 0 L 51.429 5.333 L 70.245 5.333 L 45.714 28.229 L 33.449 16.781 C 33.183 16.534 32.869 16.337 32.522 16.203 C 32.175 16.069 31.804 16 31.429 16 C 31.053 16 30.682 16.069 30.335 16.203 C 29.989 16.337 29.674 16.534 29.409 16.781 L 0 44.229 L 4.04 48 L 31.429 22.438 L 43.694 33.885 C 43.959 34.133 44.274 34.33 44.621 34.464 C 44.968 34.598 45.339 34.667 45.714 34.667 C 46.089 34.667 46.461 34.598 46.808 34.464 C 47.154 34.33 47.469 34.133 47.734 33.885 L 74.286 9.104 L 74.286 26.667 L 80 26.667 L 80 0 Z" fill="var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))"></path></svg>`,
                                  svgContentId: 11870101490,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ce() &&
                    /*#__PURE__*/ u(f.div, {
                      className: `framer-nz43w1`,
                      layoutDependency: M,
                      layoutId: `scwD8QgwC`,
                      children: [
                        /*#__PURE__*/ u(f.div, {
                          className: `framer-lxgm7d`,
                          "data-border": !0,
                          layoutDependency: M,
                          layoutId: `WMeOYvk9d`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `rgba(34, 34, 34, 0.2)`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            backgroundColor: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                            borderBottomLeftRadius: 3,
                            borderBottomRightRadius: 3,
                            borderTopLeftRadius: 3,
                            borderTopRightRadius: 3,
                          },
                          whileHover: Z,
                          children: [
                            /*#__PURE__*/ l(h, {
                              __fromCanvasComponent: !0,
                              children:
                                Y(`v7`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.p, {
                                    className: `framer-styles-preset-20koot`,
                                    "data-styles-preset": `ub82bN_DX`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `left` },
                                    children: `运营效率`,
                                  }),
                                }),
                              className: `framer-1wwdckx`,
                              fonts: [`Inter`],
                              layoutDependency: M,
                              layoutId: `HtR4g61Em`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...X(
                                {
                                  jkQ8IXLP2: {
                                    children:
                                      Y(`v8`, d) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(f.p, {
                                          className: `framer-styles-preset-20koot`,
                                          "data-styles-preset": `ub82bN_DX`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `left` },
                                          children: `资源利用`,
                                        }),
                                      }),
                                  },
                                  knSh84bJl: {
                                    children:
                                      Y(`v9`, d) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(f.p, {
                                          className: `framer-styles-preset-20koot`,
                                          "data-styles-preset": `ub82bN_DX`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `left` },
                                          children: `工作流程效率`,
                                        }),
                                      }),
                                  },
                                },
                                x,
                                O
                              ),
                            }),
                            /*#__PURE__*/ l(C, {
                              className: `framer-gcpr6j`,
                              "data-framer-name": `Vector`,
                              layout: `position`,
                              layoutDependency: M,
                              layoutId: `JKQjpwoMV`,
                              opacity: 1,
                              style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 36"><path d="M 38.571 0 L 38.571 4 L 52.684 4 L 34.286 21.172 L 25.086 12.586 C 24.888 12.4 24.651 12.253 24.391 12.152 C 24.131 12.052 23.853 12 23.571 12 C 23.29 12 23.011 12.052 22.751 12.152 C 22.491 12.253 22.255 12.4 22.056 12.586 L 0 33.172 L 3.03 36 L 23.571 16.828 L 32.771 25.414 C 32.97 25.6 33.206 25.747 33.466 25.848 C 33.726 25.948 34.004 26 34.286 26 C 34.567 26 34.846 25.948 35.106 25.848 C 35.366 25.747 35.602 25.6 35.801 25.414 L 55.714 6.828 L 55.714 20 L 60 20 L 60 0 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path></svg>`,
                              svgContentId: 11929213952,
                              withExternalLayout: !0,
                              ...X(
                                {
                                  jkQ8IXLP2: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 36"><path d="M 38.571 0 L 38.571 4 L 52.684 4 L 34.286 21.172 L 25.086 12.586 C 24.888 12.4 24.651 12.253 24.391 12.152 C 24.131 12.052 23.853 12 23.571 12 C 23.29 12 23.011 12.052 22.751 12.152 C 22.491 12.253 22.255 12.4 22.056 12.586 L 0 33.172 L 3.03 36 L 23.571 16.828 L 32.771 25.414 C 32.97 25.6 33.206 25.747 33.466 25.848 C 33.726 25.948 34.004 26 34.286 26 C 34.567 26 34.846 25.948 35.106 25.848 C 35.366 25.747 35.602 25.6 35.801 25.414 L 55.714 6.828 L 55.714 20 L 60 20 L 60 0 Z" fill="var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))"></path></svg>`,
                                    svgContentId: 11227915618,
                                  },
                                  knSh84bJl: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 36"><path d="M 38.571 0 L 38.571 4 L 52.684 4 L 34.286 21.172 L 25.086 12.586 C 24.888 12.4 24.651 12.253 24.391 12.152 C 24.131 12.052 23.853 12 23.571 12 C 23.29 12 23.011 12.052 22.751 12.152 C 22.491 12.253 22.255 12.4 22.056 12.586 L 0 33.172 L 3.03 36 L 23.571 16.828 L 32.771 25.414 C 32.97 25.6 33.206 25.747 33.466 25.848 C 33.726 25.948 34.004 26 34.286 26 C 34.567 26 34.846 25.948 35.106 25.848 C 35.366 25.747 35.602 25.6 35.801 25.414 L 55.714 6.828 L 55.714 20 L 60 20 L 60 0 Z" fill="var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))"></path></svg>`,
                                    svgContentId: 11227915618,
                                  },
                                  uK9sEc5tn: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 36"><path d="M 38.571 0 L 38.571 4 L 52.684 4 L 34.286 21.172 L 25.086 12.586 C 24.888 12.4 24.651 12.253 24.391 12.152 C 24.131 12.052 23.853 12 23.571 12 C 23.29 12 23.011 12.052 22.751 12.152 C 22.491 12.253 22.255 12.4 22.056 12.586 L 0 33.172 L 3.03 36 L 23.571 16.828 L 32.771 25.414 C 32.97 25.6 33.206 25.747 33.466 25.848 C 33.726 25.948 34.004 26 34.286 26 C 34.567 26 34.846 25.948 35.106 25.848 C 35.366 25.747 35.602 25.6 35.801 25.414 L 55.714 6.828 L 55.714 20 L 60 20 L 60 0 Z" fill="var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))"></path></svg>`,
                                    svgContentId: 11227915618,
                                  },
                                },
                                x,
                                O
                              ),
                            }),
                          ],
                        }),
                        /*#__PURE__*/ u(f.div, {
                          className: `framer-xyk8ru`,
                          layoutDependency: M,
                          layoutId: `RbbSy3kKO`,
                          style: {
                            backgroundColor: `var(--token-863a1885-91ba-42e9-ac15-4f3b8355a5ed, rgb(250, 249, 245))`,
                            borderBottomLeftRadius: 3,
                            borderBottomRightRadius: 3,
                            borderTopLeftRadius: 3,
                            borderTopRightRadius: 3,
                          },
                          whileHover: Z,
                          children: [
                            /*#__PURE__*/ l(h, {
                              __fromCanvasComponent: !0,
                              children:
                                Y(`v4`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.p, {
                                    className: `framer-styles-preset-20koot`,
                                    "data-styles-preset": `ub82bN_DX`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `left` },
                                    children: `设备利用率`,
                                  }),
                                }),
                              className: `framer-1yirzn9`,
                              fonts: [`Inter`],
                              layoutDependency: M,
                              layoutId: `ZWn3Ej894`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...X(
                                {
                                  jkQ8IXLP2: {
                                    children:
                                      Y(`v5`, d) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(f.p, {
                                          className: `framer-styles-preset-20koot`,
                                          "data-styles-preset": `ub82bN_DX`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `left` },
                                          children: `用水`,
                                        }),
                                      }),
                                  },
                                  knSh84bJl: {
                                    children:
                                      Y(`v6`, d) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(f.p, {
                                          className: `framer-styles-preset-20koot`,
                                          "data-styles-preset": `ub82bN_DX`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `left` },
                                          children: `数据准确性`,
                                        }),
                                      }),
                                  },
                                },
                                x,
                                O
                              ),
                            }),
                            le() &&
                              /*#__PURE__*/ l(C, {
                                className: `framer-9r0xni`,
                                "data-framer-name": `Vector`,
                                layout: `position`,
                                layoutDependency: M,
                                layoutId: `COYc7gzux`,
                                opacity: 1,
                                style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 36"><path d="M 38.571 0 L 38.571 4 L 52.684 4 L 34.286 21.172 L 25.086 12.586 C 24.888 12.4 24.651 12.253 24.391 12.152 C 24.131 12.052 23.853 12 23.571 12 C 23.29 12 23.011 12.052 22.751 12.152 C 22.491 12.253 22.255 12.4 22.056 12.586 L 0 33.172 L 3.03 36 L 23.571 16.828 L 32.771 25.414 C 32.97 25.6 33.206 25.747 33.466 25.848 C 33.726 25.948 34.004 26 34.286 26 C 34.567 26 34.846 25.948 35.106 25.848 C 35.366 25.747 35.602 25.6 35.801 25.414 L 55.714 6.828 L 55.714 20 L 60 20 L 60 0 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path></svg>`,
                                svgContentId: 11929213952,
                                withExternalLayout: !0,
                              }),
                            ue() &&
                              /*#__PURE__*/ l(C, {
                                className: `framer-2qf01r`,
                                "data-framer-name": `Vector`,
                                layout: `position`,
                                layoutDependency: M,
                                layoutId: `Xg44kflXv`,
                                opacity: 1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 48"><path d="M 51.429 48 L 51.429 42.667 L 70.245 42.667 L 45.714 19.771 L 33.449 31.219 C 33.183 31.466 32.869 31.663 32.522 31.797 C 32.175 31.931 31.804 32 31.429 32 C 31.053 32 30.682 31.931 30.335 31.797 C 29.989 31.663 29.674 31.466 29.409 31.219 L 0 3.771 L 4.04 0 L 31.429 25.562 L 43.694 14.115 C 43.959 13.867 44.274 13.67 44.621 13.536 C 44.968 13.402 45.339 13.333 45.714 13.333 C 46.089 13.333 46.461 13.402 46.808 13.536 C 47.154 13.67 47.469 13.867 47.734 14.115 L 74.286 38.896 L 74.286 21.333 L 80 21.333 L 80 48 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path></svg>`,
                                svgContentId: 12182358281,
                                withExternalLayout: !0,
                                ...X(
                                  {
                                    jkQ8IXLP2: {
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 36"><path d="M 60 36 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path></svg>`,
                                      svgContentId: 10096929144,
                                    },
                                  },
                                  x,
                                  O
                                ),
                              }),
                            de() &&
                              /*#__PURE__*/ l(C, {
                                className: `framer-1kex6s`,
                                "data-framer-name": `Vector`,
                                layout: `position`,
                                layoutDependency: M,
                                layoutId: `CbrsiDh4C`,
                                opacity: 1,
                                style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 36"><path d="M 38.571 0 L 38.571 4 L 52.684 4 L 34.286 21.172 L 25.086 12.586 C 24.888 12.4 24.651 12.253 24.391 12.152 C 24.131 12.052 23.853 12 23.571 12 C 23.29 12 23.011 12.052 22.751 12.152 C 22.491 12.253 22.255 12.4 22.056 12.586 L 0 33.172 L 3.03 36 L 23.571 16.828 L 32.771 25.414 C 32.97 25.6 33.206 25.747 33.466 25.848 C 33.726 25.948 34.004 26 34.286 26 C 34.567 26 34.846 25.948 35.106 25.848 C 35.366 25.747 35.602 25.6 35.801 25.414 L 55.714 6.828 L 55.714 20 L 60 20 L 60 0 Z" fill="var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))"></path></svg>`,
                                svgContentId: 11929213952,
                                withExternalLayout: !0,
                              }),
                          ],
                        }),
                        /*#__PURE__*/ u(f.div, {
                          className: `framer-thyfq`,
                          layoutDependency: M,
                          layoutId: `B3DEoz3oL`,
                          style: {
                            backgroundColor: `var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))`,
                            borderBottomLeftRadius: 3,
                            borderBottomRightRadius: 3,
                            borderTopLeftRadius: 3,
                            borderTopRightRadius: 3,
                          },
                          whileHover: Z,
                          children: [
                            /*#__PURE__*/ l(h, {
                              __fromCanvasComponent: !0,
                              children:
                                Y(`v10`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.p, {
                                    className: `framer-styles-preset-20koot`,
                                    "data-styles-preset": `ub82bN_DX`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)))`,
                                    },
                                    children: `员工安全与福利满意度`,
                                  }),
                                }),
                              className: `framer-w6v6ap`,
                              fonts: [`Inter`],
                              layoutDependency: M,
                              layoutId: `Vx4yxsocr`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...X(
                                {
                                  jkQ8IXLP2: {
                                    children:
                                      Y(`v11`, d) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(f.p, {
                                          className: `framer-styles-preset-20koot`,
                                          "data-styles-preset": `ub82bN_DX`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)))`,
                                          },
                                          children: `运营效率`,
                                        }),
                                      }),
                                  },
                                  knSh84bJl: {
                                    children:
                                      Y(`v12`, d) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(f.p, {
                                          className: `framer-styles-preset-20koot`,
                                          "data-styles-preset": `ub82bN_DX`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255)))`,
                                          },
                                          children: `合规跟踪`,
                                        }),
                                      }),
                                  },
                                },
                                x,
                                O
                              ),
                            }),
                            /*#__PURE__*/ l(C, {
                              className: `framer-1vkjt2j`,
                              "data-framer-name": `Vector`,
                              layout: `position`,
                              layoutDependency: M,
                              layoutId: `iepGXK1NK`,
                              opacity: 1,
                              style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 36"><path d="M 38.571 0 L 38.571 4 L 52.684 4 L 34.286 21.172 L 25.086 12.586 C 24.888 12.4 24.651 12.253 24.391 12.152 C 24.131 12.052 23.853 12 23.571 12 C 23.29 12 23.011 12.052 22.751 12.152 C 22.491 12.253 22.255 12.4 22.056 12.586 L 0 33.172 L 3.03 36 L 23.571 16.828 L 32.771 25.414 C 32.97 25.6 33.206 25.747 33.466 25.848 C 33.726 25.948 34.004 26 34.286 26 C 34.567 26 34.846 25.948 35.106 25.848 C 35.366 25.747 35.602 25.6 35.801 25.414 L 55.714 6.828 L 55.714 20 L 60 20 L 60 0 Z" fill="var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))"></path></svg>`,
                              svgContentId: 9038853834,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        /*#__PURE__*/ u(f.div, {
                          className: `framer-16ktdoy`,
                          layoutDependency: M,
                          layoutId: `fZbfdzI0Y`,
                          style: {
                            backgroundColor: `var(--token-fb1dac85-dc2a-4863-a95d-933a3578ac27, rgb(202, 238, 133))`,
                            borderBottomLeftRadius: 3,
                            borderBottomRightRadius: 3,
                            borderTopLeftRadius: 3,
                            borderTopRightRadius: 3,
                          },
                          whileHover: Z,
                          children: [
                            /*#__PURE__*/ l(h, {
                              __fromCanvasComponent: !0,
                              children:
                                Y(`v1`, d) ??
                                /*#__PURE__*/ l(a, {
                                  children: /*#__PURE__*/ l(f.p, {
                                    className: `framer-styles-preset-20koot`,
                                    "data-styles-preset": `ub82bN_DX`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `left` },
                                    children: `工作场所事故`,
                                  }),
                                }),
                              className: `framer-sjx4h5`,
                              fonts: [`Inter`],
                              layoutDependency: M,
                              layoutId: `JOx6fI03d`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...X(
                                {
                                  jkQ8IXLP2: {
                                    children:
                                      Y(`v2`, d) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(f.p, {
                                          className: `framer-styles-preset-20koot`,
                                          "data-styles-preset": `ub82bN_DX`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `left` },
                                          children: `能源消耗`,
                                        }),
                                      }),
                                  },
                                  knSh84bJl: {
                                    children:
                                      Y(`v3`, d) ??
                                      /*#__PURE__*/ l(a, {
                                        children: /*#__PURE__*/ l(f.p, {
                                          className: `framer-styles-preset-20koot`,
                                          "data-styles-preset": `ub82bN_DX`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `left` },
                                          children: `用纸量`,
                                        }),
                                      }),
                                  },
                                },
                                x,
                                O
                              ),
                            }),
                            /*#__PURE__*/ l(C, {
                              className: `framer-y6ghmn`,
                              "data-framer-name": `Vector`,
                              layout: `position`,
                              layoutDependency: M,
                              layoutId: `hNy3aVy4k`,
                              opacity: 1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 36"><path d="M 38.571 36 L 38.571 32 L 52.684 32 L 34.286 14.828 L 25.086 23.414 C 24.888 23.6 24.651 23.747 24.391 23.848 C 24.131 23.948 23.853 24 23.571 24 C 23.29 24 23.011 23.948 22.751 23.848 C 22.491 23.747 22.255 23.6 22.056 23.414 L 0 2.828 L 3.03 0 L 23.571 19.172 L 32.771 10.586 C 32.97 10.4 33.206 10.253 33.466 10.152 C 33.726 10.052 34.004 10 34.286 10 C 34.567 10 34.846 10.052 35.106 10.152 C 35.366 10.253 35.602 10.4 35.801 10.586 L 55.714 29.172 L 55.714 16 L 60 16 L 60 36 Z" fill="var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, rgb(5, 11, 20))"></path></svg>`,
                              svgContentId: 9083291482,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            }),
          }),
        });
      })),
      (vt = [
        `.framer-6xWm0.framer-1yj05g5, .framer-6xWm0 .framer-1yj05g5 { display: block; }`,
        `.framer-6xWm0.framer-1c8724l { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 100px 8px 100px; position: relative; width: 1440px; }`,
        `.framer-6xWm0 .framer-ej9qn1 { flex: none; height: 333px; overflow: hidden; position: relative; width: 331px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-6xWm0 .framer-igao9i { flex: none; height: auto; left: 42px; position: absolute; top: 34px; white-space: pre; width: auto; }`,
        `.framer-6xWm0 .framer-gbrfxk { aspect-ratio: 1 / 1; bottom: 32px; flex: none; gap: 0px; height: auto; left: 42px; overflow: hidden; position: absolute; width: 188px; }`,
        `.framer-6xWm0 .framer-pv7zp3 { bottom: 12px; flex: none; height: 187px; position: absolute; right: -17px; width: 201px; }`,
        `.framer-6xWm0 .framer-mug0w0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 332px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-6xWm0 .framer-1k2lhax { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: 339px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 908px; }`,
        `.framer-6xWm0 .framer-3m9tfm, .framer-6xWm0 .framer-b1uadu { flex: none; height: 333px; position: relative; width: 214px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-6xWm0 .framer-1f6samn, .framer-6xWm0 .framer-tqpgp4, .framer-6xWm0 .framer-ru9crk, .framer-6xWm0 .framer-19p39f3, .framer-6xWm0 .framer-15u1qmt, .framer-6xWm0 .framer-1wwdckx, .framer-6xWm0 .framer-1yirzn9, .framer-6xWm0 .framer-sjx4h5 { flex: none; height: auto; left: 25px; position: absolute; top: 25px; white-space: pre-wrap; width: 150px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6xWm0 .framer-njhzgt, .framer-6xWm0 .framer-tk8du8, .framer-6xWm0 .framer-zkn8yx, .framer-6xWm0 .framer-xabo44, .framer-6xWm0 .framer-1r0lr70, .framer-6xWm0 .framer-1nup9zj, .framer-6xWm0 .framer-1w8kzij, .framer-6xWm0 .framer-1qjh2bc, .framer-6xWm0 .framer-2qf01r { bottom: 25px; flex: none; height: 48px; position: absolute; right: 25px; width: 80px; }`,
        `.framer-6xWm0 .framer-zcex0s { flex: none; height: 333px; position: relative; width: 215px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-6xWm0 .framer-t6a556, .framer-6xWm0 .framer-egnl62, .framer-6xWm0 .framer-1ajry0i, .framer-6xWm0 .framer-pdx8y3, .framer-6xWm0 .framer-hgc0lt { bottom: 18px; flex: none; height: 48px; left: 115px; position: absolute; width: 80px; }`,
        `.framer-6xWm0 .framer-zam0uv { flex: none; height: 331px; position: relative; width: 215px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-6xWm0 .framer-xrj050 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: 339px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 730px; }`,
        `.framer-6xWm0 .framer-q6n9rg, .framer-6xWm0 .framer-1hqmvft { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6xWm0 .framer-j9dffi, .framer-6xWm0 .framer-16t7idw, .framer-6xWm0 .framer-1w1xa19, .framer-6xWm0 .framer-1fhnz6w { flex: none; height: 333px; position: relative; width: 170px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-6xWm0 .framer-184qawm, .framer-6xWm0 .framer-ni0c73, .framer-6xWm0 .framer-e7fgj9 { flex: none; height: auto; left: 25px; position: absolute; top: 25px; white-space: pre-wrap; width: 130px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6xWm0 .framer-nz43w1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: 472px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 335px; }`,
        `.framer-6xWm0 .framer-lxgm7d, .framer-6xWm0 .framer-xyk8ru, .framer-6xWm0 .framer-16ktdoy { flex: none; height: 100px; position: relative; width: 310px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-6xWm0 .framer-gcpr6j, .framer-6xWm0 .framer-9r0xni, .framer-6xWm0 .framer-1kex6s, .framer-6xWm0 .framer-1vkjt2j, .framer-6xWm0 .framer-y6ghmn { bottom: 25px; flex: none; height: 36px; position: absolute; right: 25px; width: 60px; }`,
        `.framer-6xWm0 .framer-thyfq { flex: none; height: 127px; position: relative; width: 310px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-6xWm0 .framer-w6v6ap { flex: none; height: auto; left: 25px; position: absolute; top: 25px; white-space: pre-wrap; width: 171px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6xWm0.framer-v-qki36f.framer-1c8724l, .framer-6xWm0.framer-v-1c9wrdz.framer-1c8724l, .framer-6xWm0.framer-v-efcwuc.framer-1c8724l { width: 730px; }`,
        `.framer-6xWm0.framer-v-qki36f .framer-xrj050, .framer-6xWm0.framer-v-1c9wrdz .framer-xrj050, .framer-6xWm0.framer-v-efcwuc .framer-xrj050, .framer-6xWm0.framer-v-efcwuc .framer-j9dffi { gap: 10px; }`,
        `.framer-6xWm0.framer-v-qki36f .framer-q6n9rg, .framer-6xWm0.framer-v-qki36f .framer-1hqmvft, .framer-6xWm0.framer-v-1c9wrdz .framer-q6n9rg, .framer-6xWm0.framer-v-1c9wrdz .framer-1hqmvft, .framer-6xWm0.framer-v-efcwuc .framer-q6n9rg, .framer-6xWm0.framer-v-efcwuc .framer-1hqmvft { flex: none; width: min-content; }`,
        `.framer-6xWm0.framer-v-1v6xloj.framer-1c8724l, .framer-6xWm0.framer-v-kkjytx.framer-1c8724l, .framer-6xWm0.framer-v-9a7nd1.framer-1c8724l { width: 335px; }`,
        `.framer-6xWm0.framer-v-1v6xloj .framer-lxgm7d, .framer-6xWm0.framer-v-kkjytx .framer-lxgm7d, .framer-6xWm0.framer-v-9a7nd1 .framer-lxgm7d { order: 2; }`,
        `.framer-6xWm0.framer-v-1v6xloj .framer-xyk8ru, .framer-6xWm0.framer-v-kkjytx .framer-xyk8ru, .framer-6xWm0.framer-v-9a7nd1 .framer-xyk8ru { order: 1; }`,
        `.framer-6xWm0.framer-v-1v6xloj .framer-thyfq { order: 3; }`,
        `.framer-6xWm0.framer-v-1v6xloj .framer-16ktdoy { order: 0; }`,
        `.framer-6xWm0.framer-v-1c9wrdz .framer-15u1qmt { width: 128px; }`,
        `.framer-6xWm0.framer-v-1c9wrdz .framer-hgc0lt, .framer-6xWm0.framer-v-efcwuc .framer-hgc0lt { bottom: 25px; left: unset; right: 25px; }`,
        `.framer-6xWm0.framer-v-kkjytx .framer-nz43w1, .framer-6xWm0.framer-v-9a7nd1 .framer-nz43w1 { height: min-content; }`,
        `.framer-6xWm0.framer-v-kkjytx .framer-2qf01r { height: 36px; width: 60px; }`,
        `.framer-6xWm0.framer-v-kkjytx .framer-thyfq, .framer-6xWm0.framer-v-9a7nd1 .framer-thyfq { height: 100px; order: 3; }`,
        `.framer-6xWm0.framer-v-kkjytx .framer-16ktdoy, .framer-6xWm0.framer-v-9a7nd1 .framer-16ktdoy { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 49px; justify-content: center; order: 0; padding: 13px 0px 13px 0px; }`,
        `.framer-6xWm0.framer-v-kkjytx .framer-sjx4h5, .framer-6xWm0.framer-v-9a7nd1 .framer-sjx4h5 { left: unset; order: 0; position: relative; top: unset; }`,
        `.framer-6xWm0.framer-v-kkjytx .framer-y6ghmn, .framer-6xWm0.framer-v-9a7nd1 .framer-y6ghmn { bottom: unset; order: 1; position: relative; right: unset; }`,
        `.framer-6xWm0.framer-v-efcwuc .framer-15u1qmt { left: 50%; top: 26px; width: 128px; }`,
        `.framer-6xWm0.framer-v-efcwuc .framer-zkn8yx { bottom: 21px; left: calc(62.94117647058825% - 80px / 2); right: unset; }`,
        ...I,
        ...xe,
        `.framer-6xWm0[data-border="true"]::after, .framer-6xWm0 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (Q = T(_t, vt, `framer-6xWm0`)),
      (Q.displayName = `Deliverables`),
      (Q.defaultProps = { height: 349, width: 1440 }),
      x(Q, {
        variant: {
          options: [
            `wmh199Eb2`,
            `Tp739OrQo`,
            `uK9sEc5tn`,
            `zUpLPiP7E`,
            `nhJf68myD`,
            `jkQ8IXLP2`,
            `zbGHPKiwC`,
            `T4SBAGZ2h`,
            `knSh84bJl`,
          ],
          optionTitles: [
            `desktop/deliverable1/imi`,
            `tablet/deliverable1/imi`,
            `phone/deliverable1/imi`,
            `desktop/deliverable2/aramco`,
            `tablet/deliverable2/aramco`,
            `phone/deliverable2/aramco`,
            `desktop/deliverable3/indo`,
            `tablet/deliverable3/indo`,
            `phone/deliverable3/indo`,
          ],
          title: `Variant`,
          type: N.Enum,
        },
      }),
      A(
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
            ],
          },
          ..._(re),
          ..._(Se),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var bt, xt, St;
function Ct() {
  return (Ct = e(() => {
    (E(),
      g.loadFonts([
        `GF;IBM Plex Sans-300`,
        `GF;IBM Plex Sans-regular`,
        `GF;IBM Plex Sans-italic`,
        `GF;IBM Plex Sans-300italic`,
      ]),
      (bt = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `IBM Plex Sans`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `IBM Plex Sans`,
              url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
              weight: `300`,
            },
            {
              cssFamilyName: `IBM Plex Sans`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `IBM Plex Sans`,
              url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `IBM Plex Sans`,
              source: `google`,
              style: `italic`,
              uiFamilyName: `IBM Plex Sans`,
              url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `IBM Plex Sans`,
              source: `google`,
              style: `italic`,
              uiFamilyName: `IBM Plex Sans`,
              url: `/assets/fonts/ibm-plex-sans-sc-400-site.woff2`,
              weight: `300`,
            },
          ],
        },
      ]),
      (xt = [
        `.framer-l2mm6 .framer-styles-preset-fchdqd:not(.rich-text-wrapper), .framer-l2mm6 .framer-styles-preset-fchdqd.rich-text-wrapper p { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 300; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1439px) and (min-width: 710px) { .framer-l2mm6 .framer-styles-preset-fchdqd:not(.rich-text-wrapper), .framer-l2mm6 .framer-styles-preset-fchdqd.rich-text-wrapper p { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 300; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 709px) and (min-width: 0px) { .framer-l2mm6 .framer-styles-preset-fchdqd:not(.rich-text-wrapper), .framer-l2mm6 .framer-styles-preset-fchdqd.rich-text-wrapper p { --framer-font-family: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-family-italic: "IBM Plex Sans", "IBM Plex Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 10px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 300; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-ea08e036-790b-4312-a476-c04f2b22e5f0, #050b14); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (St = `framer-l2mm6`));
  }))();
}
function wt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, $;
function Lt() {
  return (Lt = e(() => {
    (s(),
      E(),
      p(),
      r(),
      (Tt = y(ee)),
      (Et = y(f.div)),
      (Dt = [`BUf5woUiT`, `BqYus8RjV`]),
      (Ot = `framer-54JLj`),
      (kt = { BqYus8RjV: `framer-v-16eog21`, BUf5woUiT: `framer-v-7rms7x` }),
      (At = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (jt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Mt = ({ value: e, children: t }) => {
        let r = i(d),
          a = e ?? r.transition,
          o = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ l(d.Provider, { value: o, children: t });
      }),
      (Nt = f.create(a)),
      (Pt = { "Variant 1": `BUf5woUiT`, "Variant 2": `BqYus8RjV` }),
      (Ft = ({ height: e, id: t, image: n, scrollSection: r, width: i, ...a }) => ({
        ...a,
        ouxm6R0E4: r ?? a.ouxm6R0E4,
        pvd5xBrV5: n ??
          a.pvd5xBrV5 ?? {
            pixelHeight: 3132,
            pixelWidth: 3600,
            src: `https://framerusercontent.com/images/dIJdOlgBA1oKaLqFnysWTaoHlFk.png?scale-down-to=1024`,
            srcSet: `https://framerusercontent.com/images/dIJdOlgBA1oKaLqFnysWTaoHlFk.png?scale-down-to=512 512w,https://framerusercontent.com/images/dIJdOlgBA1oKaLqFnysWTaoHlFk.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/dIJdOlgBA1oKaLqFnysWTaoHlFk.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/dIJdOlgBA1oKaLqFnysWTaoHlFk.png 3600w`,
          },
        variant: Pt[a.variant] ?? a.variant ?? `BUf5woUiT`,
      })),
      (It = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = T(
        /* @__PURE__ */ c(function (e, n) {
          let r = o(null),
            i = n ?? r,
            a = t(),
            { activeLocale: s, setLocale: c } = F(),
            u = k(),
            {
              style: d,
              className: p,
              layoutId: h,
              variant: g,
              ouxm6R0E4: _,
              pvd5xBrV5: v,
              ...y
            } = Ft(e),
            {
              baseVariant: x,
              classNames: C,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: O,
              setGestureState: ee,
              setVariant: te,
              variants: A,
            } = S({
              cycleOrder: Dt,
              defaultVariant: `BUf5woUiT`,
              ref: i,
              variant: g,
              variantClassNames: kt,
            }),
            j = It(e, A),
            M = w(Ot);
          return /*#__PURE__*/ l(m, {
            id: h ?? a,
            children: /*#__PURE__*/ l(Nt, {
              animate: A,
              initial: !1,
              children: /*#__PURE__*/ l(Mt, {
                value: At,
                children: /*#__PURE__*/ l(Et, {
                  ...y,
                  ...E,
                  __framer__spring: {
                    damping: 60,
                    delay: 0,
                    duration: 0.3,
                    ease: [0.44, 0, 0.56, 1],
                    mass: 0.1,
                    stiffness: 300,
                    type: `spring`,
                  },
                  __framer__styleTransformEffectEnabled: !0,
                  __framer__transformTargets: [
                    {
                      target: {
                        opacity: 1,
                        rotate: 0,
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0,
                        x: 0,
                        y: 0,
                      },
                    },
                    {
                      ref: _,
                      target: {
                        opacity: 1,
                        rotate: 8,
                        rotateX: 0,
                        rotateY: 0,
                        scale: 0,
                        skewX: 0,
                        skewY: 0,
                        x: 0,
                        y: 0,
                      },
                    },
                  ],
                  __framer__transformTrigger: `onScrollTarget`,
                  __framer__transformViewportThreshold: 0.5,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: w(M, `framer-7rms7x`, p, C),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: j,
                  layoutId: `BUf5woUiT`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `2px`,
                    "--border-color": `var(--token-dd2c0890-99af-4c24-8cd0-d4ba3526fc08, rgb(115, 178, 0))`,
                    "--border-left-width": `2px`,
                    "--border-right-width": `2px`,
                    "--border-style": `solid`,
                    "--border-top-width": `2px`,
                    backgroundColor: `var(--token-a48e7a66-3d76-4bfa-9d8c-23d3e889a2fa, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    ...d,
                  },
                  ...wt({ BqYus8RjV: { "data-framer-name": `Variant 2` } }, x, D),
                  children: /*#__PURE__*/ l(f.div, {
                    className: `framer-yko7no`,
                    "data-framer-name": `Image`,
                    layoutDependency: j,
                    layoutId: `qkXkSAF2G`,
                    style: {
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    },
                    children: /*#__PURE__*/ l(Tt, {
                      __framer__spring: {
                        damping: 60,
                        delay: 0,
                        duration: 0.3,
                        ease: [0.44, 0, 0.56, 1],
                        mass: 1,
                        stiffness: 400,
                        type: `spring`,
                      },
                      __framer__styleTransformEffectEnabled: !0,
                      __framer__transformTargets: [
                        {
                          target: {
                            opacity: 1,
                            rotate: 0,
                            rotateX: 0,
                            rotateY: 0,
                            scale: 1.18,
                            skewX: 0,
                            skewY: 0,
                            x: 0,
                            y: 0,
                          },
                        },
                        {
                          target: {
                            opacity: 1,
                            rotate: 0,
                            rotateX: 0,
                            rotateY: 0,
                            scale: 1,
                            skewX: 0,
                            skewY: 0,
                            x: 0,
                            y: 0,
                          },
                        },
                      ],
                      __framer__transformTrigger: `onInView`,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      background: {
                        alt: ``,
                        fit: `fit`,
                        loading: b(
                          (u?.y || 0) +
                            10 +
                            (((u?.height || 542) -
                              20 -
                              (Math.max(0, ((u?.height || 542) - 20 - 0) / 1) * 1 + 0)) /
                              2 +
                              0 +
                              0) +
                            (0 +
                              (Math.max(0, ((u?.height || 542) - 20 - 0) / 1) * 1 -
                                0 -
                                (Math.max(0, ((u?.height || 542) - 20 - 0) / 1) * 1 - 0) * 1) /
                                2)
                        ),
                        pixelHeight: 3132,
                        pixelWidth: 3600,
                        sizes: `max(${u?.width || `100vw`} - 20px, 1px)`,
                        ...jt(v),
                        positionX: `center`,
                        positionY: `center`,
                      },
                      className: `framer-129eebt`,
                      "data-framer-name": `Fill Your Image Here`,
                      draggable: `false`,
                      layoutDependency: j,
                      layoutId: `D2ZnAhBvo`,
                      style: {
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        transformPerspective: 1200,
                      },
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-54JLj.framer-rt2ro3, .framer-54JLj .framer-rt2ro3 { display: block; }`,
          `.framer-54JLj.framer-7rms7x { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 542px; justify-content: center; overflow: hidden; padding: 10px; position: relative; width: 620px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-54JLj .framer-yko7no { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-54JLj .framer-129eebt { flex: 1 0 0px; gap: 0px; height: 100%; overflow: hidden; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-54JLj[data-border="true"]::after, .framer-54JLj [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-54JLj`
      )),
      ($.displayName = `Card/Service Image Card 2`),
      ($.defaultProps = { height: 542, width: 620 }),
      x($, {
        variant: {
          options: [`BUf5woUiT`, `BqYus8RjV`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: N.Enum,
        },
        ouxm6R0E4: { title: `Scroll Section`, type: N.ScrollSectionRef },
        pvd5xBrV5: {
          __defaultAssetReference: `data:framer/asset-reference,dIJdOlgBA1oKaLqFnysWTaoHlFk.png?originalFilename=Service+4+No+Shadow.png&preferredSize=auto`,
          title: `Image`,
          type: N.ResponsiveImage,
        },
      }),
      A($, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }))();
}
export {
  bt as a,
  yt as c,
  W as d,
  ze as f,
  xt as i,
  J as l,
  Lt as n,
  Ct as o,
  St as r,
  Q as s,
  $ as t,
  nt as u,
};
//# sourceMappingURL=yYgDlh7_7.CIDv73T-.mjs.map
