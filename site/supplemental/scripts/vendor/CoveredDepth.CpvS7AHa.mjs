import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  F as t,
  M as n,
  O as r,
  S as i,
  U as a,
  V as o,
  c as s,
  m as c,
  s as l,
  x as u,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
function d(e, t) {
  typeof e == `function` ? e(t) : e && typeof e == `object` && (e.current = t);
}
function f(e) {
  let t = e.parentElement;
  for (; t; ) {
    if (a !== void 0 && a.getComputedStyle(t).position === `sticky`) return t;
    t = t.parentElement;
  }
  return null;
}
function p(e) {
  let t = e.nextElementSibling;
  for (; t; ) {
    if (t instanceof HTMLElement && a !== void 0 && a.getComputedStyle(t).position === `sticky`)
      return t;
    t = t.nextElementSibling;
  }
  return null;
}
function m(e) {
  ((e.style.opacity = ``), (e.style.filter = ``));
}
function h(e) {
  return /*#__PURE__*/ c((r, o) => {
    let s = i(null),
      c = i(null),
      h = t(
        () =>
          a === void 0 || !a.matchMedia
            ? !1
            : a.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
        []
      ),
      g = n(
        (e) => {
          ((s.current = e), d(o, e));
        },
        [o]
      );
    u(() => {
      if (a === void 0 || !s.current) return;
      let e = s.current,
        t = () => a.innerWidth < 810;
      if (h) {
        if (t()) {
          m(e);
          return;
        }
        ((e.style.opacity = `0.22`), (e.style.filter = `blur(4px)`));
        return;
      }
      let n = f(e);
      if (!n) {
        m(e);
        return;
      }
      let r = p(n);
      if (!r) {
        m(e);
        return;
      }
      let i = () => {
          if (t()) {
            (m(e), (c.current = null));
            return;
          }
          let n = r.getBoundingClientRect().top,
            i = Math.max(0, Math.min(1, 1 - (n - 80) / 320)),
            a = 1 - 0.78 * i,
            o = 4 * i;
          ((e.style.opacity = a.toFixed(4)),
            (e.style.filter = `blur(${o.toFixed(3)}px)`),
            (c.current = null));
        },
        o = () => {
          c.current === null && (c.current = a.requestAnimationFrame(i));
        };
      return (
        o(),
        a.addEventListener(`scroll`, o, { passive: !0 }),
        a.addEventListener(`resize`, o, { passive: !0 }),
        () => {
          (a.removeEventListener(`scroll`, o),
            a.removeEventListener(`resize`, o),
            c.current !== null && a.cancelAnimationFrame(c.current),
            m(e));
        }
      );
    }, [h]);
    let _ = t(
      () => ({
        ...r.style,
        willChange: r.style?.willChange
          ? `${r.style.willChange}, opacity, filter`
          : `opacity, filter`,
        transition: h
          ? r.style?.transition
          : [r.style?.transition, `opacity 0.12s linear, filter 0.12s linear`]
              .filter(Boolean)
              .join(`, `),
      }),
      [r.style, h]
    );
    return /*#__PURE__*/ l(e, { ref: g, ...r, style: _ });
  });
}
function g() {
  return (g = e(() => {
    (o(), s(), r());
  }))();
}
export { h as n, g as t };
//# sourceMappingURL=CoveredDepth.CpvS7AHa.mjs.map
