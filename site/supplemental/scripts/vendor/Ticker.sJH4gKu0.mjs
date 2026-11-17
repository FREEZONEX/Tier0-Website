import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  B as t,
  F as n,
  M as r,
  O as i,
  S as a,
  U as o,
  V as s,
  _ as ee,
  c as te,
  k as c,
  s as l,
  u as ne,
  x as u,
  y as re,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import {
  $o as ie,
  Cs as ae,
  Ko as oe,
  Ro as se,
  Yi as ce,
  is as le,
  sr as ue,
  t as de,
  us as fe,
  v as pe,
} from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import { M as me, Q as he, Ut as ge, s as d } from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
var f;
function p() {
  return (p = e(() => {
    f = (e) => e;
  }))();
}
function m() {
  return (m = e(() => {
    p();
  }))();
}
function h() {
  return (h = e(() => {
    m();
  }))();
}
function _e(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
function g() {
  return (g = e(() => {}))();
}
var _;
function v() {
  return (v = e(() => {
    ((_ = {}),
      Object.defineProperty(_, "__esModule", { value: !0 }),
      (_.warning = function () {}),
      (_.invariant = function () {}),
      _.__esModule,
      _.warning,
      _.invariant);
  }))();
}
function y() {
  return (y = e(() => {
    p();
  }))();
}
function b(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function x(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = b(e),
    o = /* @__PURE__ */ new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n) {
            if (e.isIntersecting) {
              let n = t(e);
              typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target);
            } else n && (n(e), o.delete(e.target));
          }
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : V[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function S(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function C({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = H.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return S(e, n);
        },
      });
    });
}
function w(e) {
  e.forEach(C);
}
function ve() {
  typeof ResizeObserver < `u` && (U = new ResizeObserver(w));
}
function T(e, t) {
  U || ve();
  let n = b(e);
  return (
    n.forEach((e) => {
      let n = H.get(e);
      (n || ((n = /* @__PURE__ */ new Set()), H.set(e, n)), n.add(t), U?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = H.get(e);
        (n?.delete(t), (n != null && n.size) || U == null || U.unobserve(e));
      });
    }
  );
}
function E() {
  ((G = () => {
    let e = { width: o.innerWidth, height: o.innerHeight },
      t = { target: o, size: e, contentSize: e };
    W.forEach((e) => e(t));
  }),
    o.addEventListener(`resize`, G));
}
function D(e) {
  return (
    W.add(e),
    G || E(),
    () => {
      (W.delete(e), !W.size && G && (G = void 0));
    }
  );
}
function ye(e, t) {
  return typeof e == `function` ? D(e) : T(e, t);
}
function O(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function k(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var A, j, M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J;
function Y() {
  return (Y = e(() => {
    (s(),
      p(),
      h(),
      g(),
      v(),
      y(),
      (A = [``, `X`, `Y`, `Z`]),
      (j = [`translate`, `scale`, `rotate`, `skew`]),
      (M = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
      (N = {
        translate: {
          syntax: `<length-percentage>`,
          initialValue: `0px`,
          toDefaultUnit: (e) => e + `px`,
        },
        rotate: M,
        scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: f },
        skew: M,
      }),
      (P = /* @__PURE__ */ new Map()),
      (F = (e) => `--motion-${e}`),
      (I = [`x`, `y`, `z`]),
      j.forEach((e) => {
        A.forEach((t) => {
          (I.push(e + t), P.set(F(e + t), N[e]));
        });
      }),
      new Set(I),
      (L = (e) => document.createElement(`div`).animate(e, { duration: 0.001 })),
      (R = {
        cssRegisterProperty: () =>
          typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
        partialKeyframes: () => {
          try {
            L({ opacity: [1] });
          } catch {
            return !1;
          }
          return !0;
        },
        finished: () => !!L({ opacity: [0, 1] }).finished,
      }),
      (z = {}),
      (B = {}));
    for (let e in R) B[e] = () => (z[e] === void 0 && (z[e] = R[e]()), z[e]);
    ((V = { any: 0, all: 1 }),
      (H = /* @__PURE__ */ new WeakMap()),
      (W = /* @__PURE__ */ new Set()),
      (K = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r;
          return x(
            e,
            (r) => {
              if ((t(), k(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), k(e, `viewleave`, t));
                };
            },
            _e(r, [`once`])
          );
        },
      }),
      (q = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), O(e, t, r));
      }),
      (J = {
        inView: K,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = q(e, `hoverstart`, t),
              i = q(e, `hoverend`, n);
            return (
              e.addEventListener(`pointerenter`, r),
              e.addEventListener(`pointerleave`, i),
              () => {
                (e.removeEventListener(`pointerenter`, r),
                  e.removeEventListener(`pointerleave`, i));
              }
            );
          },
        },
        press: {
          isActive: (e) => !!e.press,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = (t) => {
                (n(), O(e, `pressend`, t), o.removeEventListener(`pointerup`, r));
              },
              i = (n) => {
                (t(), O(e, `pressstart`, n), o.addEventListener(`pointerup`, r));
              };
            return (
              e.addEventListener(`pointerdown`, i),
              () => {
                (e.removeEventListener(`pointerdown`, i), o.removeEventListener(`pointerup`, r));
              }
            );
          },
        },
      }),
      [...Object.keys(J)]);
  }))();
}
function X(e) {
  let {
      slots: i,
      gap: o,
      padding: s,
      paddingPerSide: te,
      paddingTop: de,
      paddingRight: me,
      paddingBottom: he,
      paddingLeft: d,
      speed: f,
      hoverFactor: p,
      direction: m,
      alignment: h,
      sizingOptions: _e,
      fadeOptions: g,
      style: _,
    } = e,
    { fadeContent: v, overflow: y, fadeWidth: b, fadeInset: x, fadeAlpha: S } = g,
    { widthType: C, heightType: w } = _e,
    ve = te ? `${de}px ${me}px ${he}px ${d}px` : `${s}px`,
    T = ge.current() === ge.canvas,
    E = i.filter(Boolean),
    D = c.count(E),
    O = D > 0;
  m === !0 && (m = `left`);
  let k = m === `left` || m === `right`,
    A = ie(0),
    j = xe[m],
    M = fe(A, j),
    N = a(null),
    P = n(() => [/*#__PURE__*/ ee(), /*#__PURE__*/ ee()], []),
    [F, I] = re({ parent: null, children: null }),
    L = [],
    R = [],
    z = 0,
    B = 0;
  (T && ((z = D ? Math.floor(10 / D) : 0), (B = 1)),
    !T &&
      O &&
      F.parent &&
      ((z = Math.round((F.parent / F.children) * 2) + 1), (z = Math.min(z, be)), (B = 1)));
  let V = r(() => {
      if (O && N.current) {
        let e = k ? N.current.offsetWidth : N.current.offsetHeight,
          t = P[0].current ? (k ? P[0].current.offsetLeft : P[0].current.offsetTop) : 0,
          n =
            (P[1].current
              ? k
                ? P[1].current.offsetLeft + P[1].current.offsetWidth
                : P[1].current.offsetTop + P[1].current.offsetHeight
              : 0) -
            t +
            o;
        I({ parent: e, children: n });
      }
    }, []),
    H = T ? { contentVisibility: `auto` } : {};
  if (O) {
    if (!T) {
      let e = a(!0);
      u(
        () => (
          ue.read(V),
          ye(N.current, ({ contentSize: t }) => {
            (!e.current && (t.width || t.height) && ue.read(V), (e.current = !1));
          })
        ),
        []
      );
    }
    L = c.map(E, (e, n) => {
      let r;
      (n === 0 && (r = P[0]), n === E.length - 1 && (r = P[1]));
      let i = { width: C ? e.props?.width : `100%`, height: w ? e.props?.height : `100%` };
      return /*#__PURE__*/ l(pe, {
        inherit: `id`,
        children: /*#__PURE__*/ l(`li`, {
          ref: r,
          style: i,
          children: /*#__PURE__*/ t(
            e,
            {
              style: { ...e.props?.style, ...i, flexShrink: 0, ...H },
              layoutId: e.props.layoutId ? e.props.layoutId + `-original-` + n : void 0,
            },
            e.props?.children
          ),
        }),
      });
    });
  }
  if (!T)
    for (let e = 0; e < z; e++)
      R = [
        ...R,
        ...c.map(E, (n, r) => {
          let i = {
            width: C ? n.props?.width : `100%`,
            height: w ? n.props?.height : `100%`,
            willChange: `transform`,
          };
          return /*#__PURE__*/ l(
            pe,
            {
              inherit: `id`,
              children: /*#__PURE__*/ l(
                `li`,
                {
                  style: i,
                  "aria-hidden": !0,
                  children: /*#__PURE__*/ t(
                    n,
                    {
                      key: e + ` ` + r,
                      style: {
                        ...n.props?.style,
                        width: C ? n.props?.width : `100%`,
                        height: w ? n.props?.height : `100%`,
                        flexShrink: 0,
                        ...H,
                      },
                      layoutId: n.props.layoutId ? n.props.layoutId + `-dupe-` + e : void 0,
                    },
                    n.props?.children
                  ),
                },
                e + `li` + r
              ),
            },
            e + `lg` + r
          );
        }),
      ];
  let U = F.children + F.children * Math.round(F.parent / F.children),
    W = a(null),
    G = a(null),
    K = a(0),
    q = a(!1),
    J = le(),
    Y = a(null),
    X = a(null);
  if (!T) {
    let e = oe(N);
    Z
      ? (u(() => {
          if (!J && U && f)
            return (
              (X.current = Y.current.animate(
                { transform: [j(0), j(U)] },
                { duration: (Math.abs(U) / f) * 1e3, iterations: 1 / 0, easing: `linear` }
              )),
              () => X.current.cancel()
            );
        }, [p, U, f]),
        u(() => {
          X.current &&
            (e && X.current.playState === `paused`
              ? X.current.play()
              : !e && X.current.playState === `running` && X.current.pause());
        }, [e]))
      : se((t) => {
          if (!U || J || Z) return;
          (W.current === null && (W.current = t), (t -= W.current));
          let n = (G.current === null ? 0 : t - G.current) * (f / 1e3);
          (q.current && (n *= p),
            (K.current += n),
            (K.current = ae(0, U, K.current)),
            (G.current = t),
            e && A.set(K.current));
        });
  }
  let De = k ? `to right` : `to bottom`,
    Oe = b / 2,
    ke = 100 - b / 2,
    Ae = `linear-gradient(${De}, rgba(0, 0, 0, ${S}) ${Ee(x, 0, Oe)}%, rgba(0, 0, 0, 1) ${Oe}%, rgba(0, 0, 0, 1) ${ke}%, rgba(0, 0, 0, ${S}) ${100 - x}%)`;
  return O
    ? /*#__PURE__*/ l(`section`, {
        style: {
          ...Q,
          opacity: B,
          WebkitMaskImage: v ? Ae : void 0,
          MozMaskImage: v ? Ae : void 0,
          maskImage: v ? Ae : void 0,
          overflow: y ? `visible` : `hidden`,
          padding: ve,
        },
        ref: N,
        children: /*#__PURE__*/ ne(ce.ul, {
          ref: Y,
          style: {
            ...Q,
            gap: o,
            top: m === `bottom` && $(U) ? -U : void 0,
            left: m === `right` && $(U) ? -U : void 0,
            placeItems: h,
            position: `relative`,
            flexDirection: k ? `row` : `column`,
            ..._,
            willChange: T ? `auto` : `transform`,
            transform: Z ? j(0) : M,
          },
          onMouseEnter: () => {
            ((q.current = !0), X.current && (X.current.playbackRate = p));
          },
          onMouseLeave: () => {
            ((q.current = !1), X.current && (X.current.playbackRate = 1));
          },
          children: [L, R],
        }),
      })
    : /*#__PURE__*/ ne(`section`, {
        style: Se,
        children: [
          /*#__PURE__*/ l(`div`, { style: Ce, children: `✨` }),
          /*#__PURE__*/ l(`p`, { style: we, children: `Connect to Content` }),
          /*#__PURE__*/ l(`p`, {
            style: Te,
            children: `Add layers or components to infinitely loop on your page.`,
          }),
        ],
      });
}
var be, xe, Z, Q, Se, Ce, we, Te, Ee, $;
function De() {
  return (De = e(() => {
    (te(),
      i(),
      he(),
      de(),
      Y(),
      (be = 100),
      (xe = {
        left: (e) => `translateX(-${e}px)`,
        right: (e) => `translateX(${e}px)`,
        top: (e) => `translateY(-${e}px)`,
        bottom: (e) => `translateY(${e}px)`,
      }),
      (Z = typeof Animation < `u` && typeof Animation.prototype.updatePlaybackRate == `function`),
      (X.defaultProps = {
        gap: 10,
        padding: 10,
        sizingOptions: { widthType: !0, heightType: !0 },
        fadeOptions: { fadeContent: !0, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        direction: !0,
      }),
      me(X, {
        slots: { type: d.Array, title: `Children`, control: { type: d.ComponentInstance } },
        speed: {
          type: d.Number,
          title: `Speed`,
          min: 0,
          max: 1e3,
          defaultValue: 100,
          unit: `%`,
          displayStepper: !0,
          step: 5,
        },
        direction: {
          type: d.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          defaultValue: `left`,
          displaySegmentedControl: !0,
        },
        alignment: {
          type: d.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        gap: { type: d.Number, title: `Gap` },
        padding: {
          title: `Padding`,
          type: d.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        sizingOptions: {
          type: d.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: d.Boolean,
              title: `Width`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
            heightType: {
              type: d.Boolean,
              title: `Height`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
          },
        },
        fadeOptions: {
          type: d.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: d.Boolean, title: `Fade`, defaultValue: !0 },
            overflow: {
              type: d.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: d.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: d.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: d.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        hoverFactor: {
          type: d.Number,
          title: `Hover`,
          min: 0,
          max: 1,
          unit: `x`,
          defaultValue: 1,
          step: 0.1,
          displayStepper: !0,
          description: `Slows down the speed while you are hovering.`,
        },
      }),
      (Q = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (Se = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (Ce = { fontSize: 32, marginBottom: 10 }),
      (we = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (Te = { margin: 0, opacity: 0.7, maxWidth: 150, lineHeight: 1.5, textAlign: `center` }),
      (Ee = (e, t, n) => Math.min(Math.max(e, t), n)),
      ($ = (e) => typeof e == `number` && !isNaN(e)));
  }))();
}
export { ye as i, De as n, Y as r, X as t };
//# sourceMappingURL=Ticker.sJH4gKu0.mjs.map
