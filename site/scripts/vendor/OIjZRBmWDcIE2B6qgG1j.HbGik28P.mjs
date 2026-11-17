import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import { F as t, H as n, O as r, V as i, x as a } from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { Q as o, Ut as s, s as c, xt as l } from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
var u, d;
function f() {
  return (f = e(() => {
    (o(),
      (u = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ...u },
      (d = {
        onClick: { type: c.EventHandler },
        onMouseEnter: { type: c.EventHandler },
        onMouseLeave: { type: c.EventHandler },
      }),
      c.Number,
      c.Boolean,
      c.String,
      c.Enum);
  }))();
}
function p(e, t) {
  return h(!0, e, t);
}
function m(e, t) {
  return h(!1, e, t);
}
function h(e, t, n = !0) {
  let r = l();
  a(() => {
    n && r === e && t();
  }, [r]);
}
function g() {
  return (g = e(() => {
    (o(), r());
  }))();
}
function _() {
  return (_ = e(() => {
    r();
  }))();
}
function v() {
  return (v = e(() => {
    o();
  }))();
}
function y() {
  return (y = e(() => {
    o();
  }))();
}
function b() {
  return (b = e(() => {
    r();
  }))();
}
function x() {
  return (x = e(() => {
    o();
  }))();
}
var S, C;
function w() {
  return (w = e(() => {
    (i(),
      r(),
      (S = () => {
        if (n !== void 0) {
          let e = n.userAgent.toLowerCase();
          return (
            (e.indexOf(`safari`) > -1 ||
              e.indexOf(`framermobile`) > -1 ||
              e.indexOf(`framerx`) > -1) &&
            e.indexOf(`chrome`) < 0
          );
        }
        return !1;
      }),
      (C = () => t(() => S(), [])));
  }))();
}
function T() {
  return (T = e(() => {
    (r(), y());
  }))();
}
function E() {
  return (E = e(() => {
    (r(), o(), y(), _());
  }))();
}
function D() {
  return (D = e(() => {
    (o(), r(), f());
  }))();
}
function O() {
  return t(() => s.current(), []);
}
function k() {
  return t(() => s.current() === s.canvas, []);
}
function A() {
  return (A = e(() => {
    (r(), o());
  }))();
}
function j() {
  return (j = e(() => {
    r();
  }))();
}
function M(e) {
  let {
    borderRadius: n,
    isMixedBorderRadius: r,
    topLeftRadius: i,
    topRightRadius: a,
    bottomRightRadius: o,
    bottomLeftRadius: s,
  } = e;
  return t(() => (r ? `${i}px ${a}px ${o}px ${s}px` : `${n}px`), [n, r, i, a, o, s]);
}
var N;
function P() {
  return (P = e(() => {
    (r(),
      o(),
      (N = {
        borderRadius: {
          title: `Radius`,
          type: c.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      c.FusedNumber);
  }))();
}
function F() {
  return (F = e(() => {
    (f(), g(), _(), v(), y(), b(), x(), w(), T(), E(), D(), A(), j(), P());
  }))();
}
export {
  A as a,
  w as c,
  p as d,
  m as f,
  M as i,
  C as l,
  f as m,
  N as n,
  k as o,
  d as p,
  P as r,
  O as s,
  F as t,
  g as u,
};
//# sourceMappingURL=OIjZRBmWDcIE2B6qgG1j.HbGik28P.mjs.map
