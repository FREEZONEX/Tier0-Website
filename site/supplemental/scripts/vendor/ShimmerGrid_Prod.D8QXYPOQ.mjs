import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  F as t,
  O as n,
  S as r,
  U as i,
  V as a,
  c as o,
  s,
  u as c,
  x as l,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { $o as u, Mn as d, cs as f, t as p, tt as m } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import { M as h, Q as g, Ut as _, s as v } from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
function y(e) {
  let { smoothing: t, enabled: n, horizontalAlignment: a, verticalAlignment: o, transition: c } = e,
    d = _.current() === _.canvas,
    p = T(),
    h = { damping: 100, stiffness: b(t, 0, 100, 2e3, 50) },
    g = u(0),
    v = u(0),
    y = f(g, h),
    S = f(v, h),
    w = r(null),
    E = r(null),
    D = r(null),
    O = r(null),
    k = r(t !== 0),
    A = r(null),
    j = r(null),
    M = r(null),
    N = r(!1),
    P = r(0),
    F = r(0),
    I = r(1),
    L = r(0);
  return (
    l(() => {
      k.current = t !== 0;
    }, [t]),
    l(() => {
      let e,
        t = () => {
          if (d || ((e = requestAnimationFrame(t)), !E.current || !O.current)) return;
          let n = (k.current ? y.get() : g.get()).toFixed(3),
            r = (k.current ? S.get() : v.get()).toFixed(3),
            a = i.getComputedStyle(E.current),
            o = x(E.current, a, n, r, A.current, j.current, M.current),
            s = L.current * I.current;
          ((D.current = o),
            (O.current.textContent = `
				[data-followcursor="${p}"] { 
					transform: ${o} !important;
					${s < 0.995 ? `opacity: ${s} !important;` : ``}
				}
			`),
            (A.current = n),
            (j.current = r),
            (M.current = E.current.style.transform));
        };
      if (w.current) {
        let e = w.current.parentElement;
        if (e) {
          let t = e.parentElement;
          t && ((E.current = t), t.setAttribute(`data-followcursor`, p));
        }
      }
      return (
        t(),
        () => {
          e && cancelAnimationFrame(e);
        }
      );
    }, []),
    l(() => {
      let e = (e) => {
          if (!E.current) return;
          let t = !1;
          N.current ||
            ((N.current = !0),
            m(L.current, +!!n, {
              ...c,
              onUpdate: (e) => {
                L.current = e;
              },
            }),
            (t = !0));
          let r = i.getComputedStyle(E.current),
            s = new DOMMatrix(r.transform),
            l = E.current.getBoundingClientRect(),
            u = l.left - s.m41,
            d = l.top - s.m42,
            f = i.pageXOffset || document.documentElement.scrollLeft,
            p = i.pageYOffset || document.documentElement.scrollTop;
          ((P.current = f), (F.current = p));
          let h = e.clientX + f - (u + f) - C[a] * l.width,
            _ = e.clientY + p - (d + p) - C[o] * l.height;
          (g.set(h), v.set(_), t && (y.jump(h), S.jump(_)));
        },
        t = () => {
          if (!E.current || !N.current) return;
          let e = i.scrollX || i.pageXOffset || document.documentElement.scrollLeft,
            t = i.scrollY || i.pageYOffset || document.documentElement.scrollTop,
            n = e - P.current,
            r = t - F.current;
          ((P.current = e), (F.current = t), g.set(g.get() + n), v.set(v.get() + r));
        };
      return (
        i.addEventListener(`mousemove`, e),
        i.addEventListener(`scroll`, t),
        () => {
          (i.removeEventListener(`mousemove`, e), i.removeEventListener(`scroll`, t));
        }
      );
    }, [n]),
    l(() => {
      if (!O.current || !E.current) return;
      let e = i.getComputedStyle(E.current);
      ((I.current = parseFloat(e.opacity) || 1),
        m(L.current, n && N.current ? 1 : 0, {
          ...c,
          onUpdate: (e) => {
            L.current = e;
          },
        }));
    }, [n, c]),
    /*#__PURE__*/ s(`div`, {
      ref: w,
      style: { ...e.style },
      children: /*#__PURE__*/ s(`style`, { ref: O }),
    })
  );
}
function b(e, t, n, r, i) {
  return t === n ? r : r + ((e - t) / (n - t)) * (i - r);
}
function x(e, t, n, r, i, a, o) {
  ((n ||= 0), (r ||= 0), (i ||= 0), (a ||= 0));
  let s = t.transform,
    c = e.style.transform,
    l = `translate(${n - i}px, ${r - a}px)`,
    u = l;
  return (
    c && c !== `none` && (u = o && o !== `none` ? `${l} ${S(o)} ${c}` : `${l} ${c}`),
    s && s !== `none` ? `${u} ${s}` : u
  );
}
function S(e) {
  return (e.match(/\w+\([^)]+\)/g) || [])
    .reverse()
    .map((e) => {
      let [t, n] = e.match(/(\w+)\(([^)]+)\)/).slice(1),
        r = n.split(`,`).map((e) => e.trim()),
        i = (e) => {
          let [t, n, r, i] = e.match(/^(-?)(\d*\.?\d+)(\D*)$/);
          return `${n ? `` : `-`}${r}${i}`;
        };
      switch (t.toLowerCase()) {
        case `translate`:
        case `translate3d`:
        case `translatex`:
        case `translatey`:
        case `translatez`:
          return `${t}(${r.map(i).join(`, `)})`;
        case `scale`:
        case `scale3d`:
          return `${t}(${r.map((e) => 1 / parseFloat(e)).join(`, `)})`;
        case `scalex`:
        case `scaley`:
        case `scalez`:
          return `${t}(${1 / parseFloat(r[0])})`;
        case `rotate`:
        case `rotatex`:
        case `rotatey`:
        case `rotatez`:
          return `${t}(${i(r[0])})`;
        case `rotate3d`:
          let n = r.map(parseFloat);
          return `${t}(${n[0]}, ${n[1]}, ${n[2]}, ${i(r[3])})`;
        case `skew`:
        case `skewx`:
        case `skewy`:
          return `${t}(${r.map(i).join(`, `)})`;
        case `matrix`:
        case `matrix3d`:
          return (console.warn(`Inverting ${t} is not supported. Returning original.`), e);
        default:
          return (console.warn(`Unknown transform function: ${t}. Returning original.`), e);
      }
    })
    .join(` `);
}
var C, w, T;
function E() {
  return (E = e(() => {
    (a(),
      o(),
      g(),
      n(),
      p(),
      (C = { left: 0, top: 0, center: 0.5, right: 1, bottom: 1 }),
      (y.displayName = `Follow Cursor`),
      h(y, {
        enabled: { type: v.Boolean, defaultValue: !0 },
        smoothing: { type: v.Number, defaultValue: 0, min: 0, max: 100, step: 1 },
        horizontalAlignment: {
          type: v.Enum,
          defaultValue: `center`,
          options: [`left`, `center`, `right`],
          optionTitles: [`Left`, `Center`, `Right`],
          displaySegmentedControl: !0,
          title: `Alignment`,
        },
        verticalAlignment: {
          type: v.Enum,
          defaultValue: `center`,
          options: [`top`, `center`, `bottom`],
          optionTitles: [`Top`, `Center`, `Bottom`],
          displaySegmentedControl: !0,
          title: ` `,
        },
        transition: {
          type: v.Transition,
          defaultValue: { type: `spring`, duration: 0.2, bounce: 0 },
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }),
      (w = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`),
      (T = () =>
        t(() => {
          let e = ``;
          for (let t = 0; t < 13; t++) e += w.charAt(Math.floor(Math.random() * 52));
          return e;
        }, [])));
  }))();
}
function D({
  color: e,
  hoverColor: t,
  hoverSize: n,
  hoverShape: r,
  patternPreset: i,
  flip: a,
  lineWidth: o,
  customPatternImage: l,
  customPatternSizing: u,
  tileSize: d,
  customPatternMode: f,
  customPatternPosition: p,
  dotSize: m,
  radius: h,
  smoothing: g,
  style: v,
}) {
  let b = _.current() === _.canvas,
    x = i === `custom`,
    S = x && u !== `stretch` ? N[p] : N.center,
    C = ``,
    w = `${d}px ${d}px`,
    T = `repeat`;
  switch (i) {
    case `grid`:
      C = `repeating-conic-gradient(at ${o}px ${o}px, [color] 0deg 90deg, transparent 90deg 180deg, [color] 180deg 360deg)`;
      break;
    case `checkerboard`:
      C = a
        ? `repeating-conic-gradient([color] 0% 25%, transparent 0% 50%)`
        : `repeating-conic-gradient(transparent 0% 25%, [color] 0% 50%)`;
      break;
    case `horizontalLines`:
      C = `linear-gradient(to top, [color] ${o}px, transparent ${o}px)`;
      break;
    case `verticalLines`:
      C = `linear-gradient(to left, [color] ${o}px, transparent ${o}px)`;
      break;
    case `diagonalLines`:
      let e = o / 2,
        t = O(d * 2);
      ((C = `linear-gradient(to top ${a ? `left` : `right`}, [color] ${e}px, transparent ${e}px, transparent calc(50% - ${e}px), [color] calc(50% - ${e}px), [color] calc(50% + ${e}px), transparent calc(50% + ${e}px), transparent calc(100% - ${e}px), [color] calc(100% - ${e}px), [color] 100%)`),
        (w = `${t}px ${t}px`));
      break;
    case `dots`:
      C = `radial-gradient([color] ${m / 2 - 0.4}px, transparent ${m / 2 + 0.4}px)`;
      break;
    case `triangles`:
      C = `linear-gradient(${a ? -45 : 45}deg, transparent calc(50% - 0.1px), [color] calc(50% + 0.1px))`;
      break;
    case `custom`:
      ((C = `url("${l?.src}")`), u !== `tile` && ((T = `no-repeat`), (w = M[u])));
  }
  let E = {},
    D = n;
  if (r === `glow`) {
    let e = [];
    for (let t = 0; t < 15; t++) {
      let n = k(t, 0, 14, 0, 1);
      e.push(`rgba(255, 255, 255, ${A(1 - n)}) ${k(t, 0, 14, 0, 100)}%`);
    }
    ((E = { maskImage: `radial-gradient(closest-side, ${e.join(`, `)})` }), (D = n * 2));
  } else r === `circle` && (E = { borderRadius: `50%` });
  return /*#__PURE__*/ c(`div`, {
    style: {
      position: `relative`,
      borderRadius: h,
      overflow: `hidden`,
      backgroundImage: x ? `` : C.replace(/\[color\]/g, e),
      backgroundSize: w,
      backgroundPosition: S,
      backgroundRepeat: T,
      ...v,
    },
    children: [
      x &&
        /*#__PURE__*/ s(`div`, {
          style: {
            position: `absolute`,
            inset: 0,
            backgroundColor: e,
            maskImage: C,
            maskSize: w,
            maskPosition: S,
            maskRepeat: T,
            maskMode: f,
          },
        }),
      /*#__PURE__*/ s(`div`, {
        style: {
          position: `absolute`,
          inset: 0,
          maskImage: x ? C : C.replace(/\[color\]/g, `white`),
          maskSize: w,
          maskPosition: S,
          maskRepeat: T,
          maskMode: x ? f : void 0,
          WebkitMaskImage: x ? C : C.replace(/\[color\]/g, `white`),
          WebkitMaskSize: w,
          WebkitMaskPosition: S,
          WebkitMaskRepeat: T,
          WebkitMaskMode: x ? f : void 0,
        },
        children: /*#__PURE__*/ s(`div`, {
          style: {
            position: `absolute`,
            top: b ? `50%` : 0,
            left: b ? `50%` : 0,
            transform: b ? `translate(-50%, -50%)` : void 0,
            width: D,
            height: D,
            backgroundColor: t,
            ...E,
          },
          children: /*#__PURE__*/ s(`div`, {
            style: { display: `contents` },
            children: /*#__PURE__*/ s(y, {
              enabled: !0,
              smoothing: g,
              horizontalAlignment: `center`,
              verticalAlignment: `center`,
            }),
          }),
        }),
      }),
    ],
  });
}
function O(e) {
  if (typeof e != `number` || isNaN(e) || e <= 0) return e;
  let t = Math.sqrt(e ** 2 / 2);
  return Number(t.toFixed(2));
}
function k(e, t, n, r, i) {
  return t === n ? r : r + ((e - t) / (n - t)) * (i - r);
}
var A, j, M, N;
function P() {
  return (P = e(() => {
    (o(),
      g(),
      E(),
      p(),
      (A = d(0.7, 0, 0.7, 1)),
      (function (e) {
        ((e.Grid = `grid`),
          (e.Checkerboard = `checkerboard`),
          (e.HorizontalLines = `horizontalLines`),
          (e.VerticalLines = `verticalLines`),
          (e.DiagonalLines = `diagonalLines`),
          (e.Dots = `dots`),
          (e.Triangles = `triangles`),
          (e.Custom = `custom`));
      })((j ||= {})),
      (M = { fill: `cover`, fit: `contain`, stretch: `100% 100%` }),
      (N = {
        topLeft: `0 0`,
        topCenter: `50% 0`,
        topRight: `100% 0`,
        left: `0 50%`,
        center: `50% 50%`,
        right: `100% 50%`,
        bottomLeft: `0 100%`,
        bottomCenter: `50% 100%`,
        bottomRight: `100% 100%`,
      }),
      (D.displayName = `Shimmer Grid`),
      h(D, {
        color: { type: v.Color, defaultValue: `rgba(153, 153, 153, 0.5)` },
        hoverColor: { type: v.Color, defaultValue: `#FFF` },
        hoverSize: { type: v.Number, defaultValue: 400, min: 1, max: 2e3, step: 1 },
        hoverShape: {
          type: v.Enum,
          defaultValue: `glow`,
          options: [`glow`, `circle`],
          optionTitles: [`Glow`, `Circle`],
          displaySegmentedControl: !0,
          title: `Shape`,
        },
        patternPreset: {
          type: v.Enum,
          defaultValue: `grid`,
          options: Object.values(j),
          optionTitles: [
            `Grid`,
            `Checkerboard`,
            `Horizontal Lines`,
            `Vertical Lines`,
            `Diagonal Lines`,
            `Dots`,
            `Triangles`,
            `Custom`,
          ],
          title: `Pattern`,
        },
        customPatternImage: {
          type: v.ResponsiveImage,
          title: `Image`,
          hidden: (e) => e.patternPreset !== `custom`,
        },
        customPatternSizing: {
          type: v.Enum,
          defaultValue: `tile`,
          options: [`fill`, `fit`, `stretch`, `tile`],
          optionTitles: [`Fill`, `Fit`, `Stretch`, `Tile`],
          title: `Sizing`,
          hidden: (e) => e.patternPreset !== `custom`,
        },
        flip: {
          type: v.Boolean,
          defaultValue: !1,
          hidden: (e) =>
            e.patternPreset !== `checkerboard` &&
            e.patternPreset !== `triangles` &&
            e.patternPreset !== `diagonalLines`,
        },
        lineWidth: {
          type: v.Number,
          defaultValue: 2,
          min: 1,
          step: 1,
          displayStepper: !0,
          hidden: (e) =>
            e.patternPreset !== `horizontalLines` &&
            e.patternPreset !== `verticalLines` &&
            e.patternPreset !== `diagonalLines` &&
            e.patternPreset !== `grid`,
        },
        tileSize: {
          type: v.Number,
          defaultValue: 50,
          min: 1,
          step: 1,
          hidden: (e) => e.patternPreset === `custom` && e.customPatternSizing !== `tile`,
        },
        dotSize: {
          type: v.Number,
          defaultValue: 10,
          min: 1,
          step: 1,
          displayStepper: !0,
          hidden: (e) => e.patternPreset !== `dots`,
        },
        customPatternPosition: {
          type: v.Enum,
          defaultValue: `center`,
          options: [
            `topLeft`,
            `topCenter`,
            `topRight`,
            `left`,
            `center`,
            `right`,
            `bottomLeft`,
            `bottomCenter`,
            `bottomRight`,
          ],
          optionTitles: [
            `Top Left`,
            `Top Center`,
            `Top Right`,
            `Left`,
            `Center`,
            `Right`,
            `Bottom Left`,
            `Bottom Center`,
            `Bottom Right`,
          ],
          title: `Position`,
          hidden: (e) => e.patternPreset !== `custom` || e.customPatternSizing === `stretch`,
        },
        customPatternMode: {
          type: v.Enum,
          defaultValue: `alpha`,
          options: [`alpha`, `luminance`],
          optionTitles: [`Alpha`, `Luminance`],
          title: `Mode`,
          hidden: (e) => e.patternPreset !== `custom`,
        },
        smoothing: { type: v.Number, defaultValue: 0, min: 0, max: 100, step: 1 },
        radius: {
          type: v.BorderRadius,
          defaultValue: `0px`,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }))();
}
export { P as n, D as t };
//# sourceMappingURL=ShimmerGrid_Prod.D8QXYPOQ.mjs.map
