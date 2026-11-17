import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  A as t,
  B as n,
  D as r,
  F as i,
  H as a,
  I as o,
  M as s,
  O as c,
  P as l,
  R as u,
  S as d,
  U as f,
  V as p,
  c as m,
  d as h,
  f as g,
  h as _,
  k as v,
  l as y,
  m as b,
  p as x,
  s as S,
  u as ee,
  x as C,
  y as w,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
function T(e) {
  let t = d(null);
  return (t.current === null && (t.current = e()), t.current);
}
function te(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function E(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function ne([...e], t, n) {
  let r = t < 0 ? e.length + t : t;
  if (r >= 0 && r < e.length) {
    let r = n < 0 ? e.length + n : n,
      [i] = e.splice(t, 1);
    e.splice(r, 0, i);
  }
  return e;
}
function re(e, t) {
  return t
    ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}`
    : e;
} /*#__NO_SIDE_EFFECTS__*/
function ie(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
function ae(e) {
  return tl.has(e);
}
function oe(e, t, n) {
  e || tl.has(t) || (console.warn(re(t, n)), tl.add(t));
} /*#__NO_SIDE_EFFECTS__*/
function se(e, t, n, r) {
  return e === t && n === r
    ? P
    : (i) => {
        let a = 0,
          o = 1,
          s = i;
        for (let t = 0; ; t++) {
          (s >= a && s <= o) || (s = (a + o) / 2);
          let r = rl(s, e, n) - i;
          if (r * r < 1e-28 || t === 40) break;
          (r > 0 ? (o = s) : (a = s), (s -= (r * 1e-7) / (rl(s + 1e-7, e, n) - i - r)));
        }
        return rl(s, t, r);
      };
} /*#__NO_SIDE_EFFECTS__*/
function ce(e, t = `end`) {
  return (n) => {
    n = t === `end` ? Math.min(n, 0.999) : Math.max(n, 0.001);
    let r = n * e;
    return M(0, 1, (t === `end` ? Math.floor(r) : Math.ceil(r)) / e);
  };
} /*#__NO_SIDE_EFFECTS__*/
function le(e, t) {
  return /* @__PURE__ */ gl(e) ? e[nl(0, e.length, t)] : e;
}
function ue() {
  xl = void 0;
}
function de(e) {
  return typeof e == `string` && e.split(`/*`)[0].includes(`var(--`);
}
function fe(e) {
  return e == null;
}
function pe(e) {
  let t = ``,
    n = ``,
    r = ``,
    i = ``;
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
function me(e) {
  return isNaN(e) && typeof e == `string` && (Kl.test(e) || ql.test(e));
}
function he(e) {
  let t = e.toString();
  return Kl.test(t) || ql.test(t);
}
function ge(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    a = 0;
  return {
    values: n,
    split: t
      .replace(
        $l,
        (e) => (
          V.test(e)
            ? (r.color.push(a), i.push(Yl), n.push(V.parse(e)))
            : e.startsWith(Zl)
              ? (r.var.push(a), i.push(Xl), n.push(e))
              : (r.number.push(a), i.push(Jl), n.push(parseFloat(e))),
          ++a,
          Ql
        )
      )
      .split(Ql),
    indexes: r,
    types: i,
  };
}
function _e(e) {
  return ge(e).values;
}
function ve({ split: e, types: t }) {
  let n = e.length;
  return (r) => {
    let i = ``;
    for (let a = 0; a < n; a++)
      if (((i += e[a]), r[a] !== void 0)) {
        let e = t[a];
        i += e === Jl ? Sl(r[a]) : e === Yl ? V.transform(r[a]) : r[a];
      }
    return i;
  };
}
function ye(e) {
  return ve(ge(e));
}
function be(e) {
  let t = ge(e);
  return ve(t)(t.values.map((e, n) => tu(e, t.split[n])));
}
function xe(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function Se({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r;
    ((i = xe(s, r, e + 1 / 3)), (a = xe(s, r, e)), (o = xe(s, r, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Ce(e, t) {
  return (n) => (n > 0 ? t : e);
}
function we(e) {
  let t = iu(e);
  if (!t) return (`${e}`, !1);
  let n = t.parse(e);
  return (t === Wl && (n = Se(n)), n);
}
function Te(e, t) {
  return ou.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Ee(e, t) {
  return (n) => U(e, t, n);
}
function De(e) {
  return typeof e == `number`
    ? Ee
    : typeof e == `string`
      ? El(e)
        ? Ce
        : V.test(e)
          ? au
          : su
      : Array.isArray(e)
        ? Oe
        : typeof e == `object`
          ? V.test(e)
            ? au
            : ke
          : Ce;
}
function Oe(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => De(e)(e, t[n]));
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function ke(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = De(e[i])(e[i], t[i]));
  return (e) => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
function Ae(e, t) {
  let n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]],
      s = e.values[o] ?? 0;
    ((n[i] = s), r[a]++);
  }
  return n;
}
function je(e, t) {
  let n = cu.exec(e);
  if (!n) return;
  let r = cu.exec(t);
  if (!r || n[2] !== r[2]) return;
  let i = n[2],
    a = parseFloat(n[1]),
    o = parseFloat(r[1]);
  return (e) => Sl(U(a, o, e)) + i;
}
function Me(e, t, n) {
  if (typeof e == `number` && typeof t == `number` && typeof n == `number`) return U(e, t, n);
  if (typeof e == `string` && typeof t == `string`) {
    let n = je(e, t);
    if (n) return n;
  }
  return De(e)(e, t);
}
function Ne(e) {
  let t = /* @__PURE__ */ new Set(),
    n = /* @__PURE__ */ new Set(),
    r = !1,
    i = !1,
    a = /* @__PURE__ */ new Set(),
    o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function s(t) {
    (a.has(t) && (n.add(t), e()), t(o));
  }
  let c = {
    schedule: (e, i = !1, o = !1) => {
      let s = o && r ? t : n;
      return (i && a.add(e), s.add(e), e);
    },
    cancel: (e) => {
      (n.delete(e), a.delete(e));
    },
    process: (e) => {
      if (((o = e), r)) {
        i = !0;
        return;
      }
      r = !0;
      let a = t;
      ((t = n), (n = a), t.forEach(s), t.clear(), (r = !1), i && ((i = !1), c.process(e)));
    },
  };
  return c;
}
function Pe(e, t, n = { delta: 0, timestamp: 0, isProcessing: !1 }) {
  let r = !1,
    i = !0,
    a = () => (r = !0),
    o = lu.reduce((e, t) => ((e[t] = Ne(a)), e), {}),
    {
      setup: s,
      read: c,
      resolveKeyframes: l,
      preUpdate: u,
      update: d,
      preRender: f,
      render: p,
      postRender: m,
    } = o,
    h = () => {
      let a = N.useManualTiming,
        o = a ? n.timestamp : performance.now();
      ((r = !1),
        a || (n.delta = i ? 1e3 / 60 : Math.max(Math.min(o - n.timestamp, uu), 1)),
        (n.timestamp = o),
        (n.isProcessing = !0),
        s.process(n),
        c.process(n),
        l.process(n),
        u.process(n),
        d.process(n),
        f.process(n),
        p.process(n),
        m.process(n),
        (n.isProcessing = !1),
        r && t && ((i = !1), e(h)));
    },
    g = () => {
      ((r = !0), (i = !0), n.isProcessing || e(h));
    };
  return {
    schedule: lu.reduce((e, t) => {
      let n = o[t];
      return ((e[t] = (e, t = !1, i = !1) => (r || g(), n.schedule(e, t, i))), e);
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < lu.length; t++) o[lu[t]].cancel(e);
    },
    state: n,
    steps: o,
  };
}
function Fe(e, t = 50, n = mu, r) {
  let i = 0,
    a = e.next(i);
  for (r?.push(a.value); !a.done && i < n; ) ((i += t), (a = e.next(i)), r?.push(a.value));
  return i >= n ? 1 / 0 : i;
}
function Ie(e, t = 100, n) {
  let { keyframes: r, velocity: i } = e,
    a = r && r[r.length - 1] - r[0],
    o = n({ ...e, velocity: i && a ? (i * t) / a : i, keyframes: [0, t] }),
    s = Math.min(Fe(o), mu);
  return {
    type: `keyframes`,
    ease: (e) => o.next(s * e).value / t,
    duration: /* @__PURE__ */ I(s),
  };
}
function Le(e, t) {
  if (!(e > 1)) return 1;
  let n = Math.sqrt(e * e - 1),
    r = e - n,
    i = e + n,
    a = 2 * n * Math.exp(-t) * (1 + t);
  return (
    ze(
      (e) => i * Math.exp(-r * e) - r * Math.exp(-i * e) - a,
      (e) => Math.exp(-i * e) - Math.exp(-r * e),
      t
    ) / t
  );
}
function Re(e, t) {
  return e * Math.sqrt(1 - t * t);
}
function ze(e, t, n) {
  let r = n;
  for (let n = 1; n < gu; n++) r -= e(r) / t(r);
  return r;
}
function Be({ duration: e = K.duration, bounce: t = K.bounce }) {
  let n, r;
  K.maxDuration;
  let i = hu(t);
  ((e = M(K.minDuration, K.maxDuration, /* @__PURE__ */ I(e))),
    i < 1
      ? ((n = (t) => {
          let n = t * i,
            r = n * e,
            a = Re(t, i),
            o = Math.exp(-r);
          return _u - (n / a) * o;
        }),
        (r = (t) => {
          let r = t * i * e,
            a = i * i * t * t * e,
            o = Math.exp(-r),
            s = Re(t * t, i);
          return ((-n(t) + _u > 0 ? -1 : 1) * -a * o) / s;
        }))
      : ((n = (t) => -0.001 + Math.exp(-t * e) * (t * e + 1)),
        (r = (t) => Math.exp(-t * e) * (-t * (e * e)))));
  let a = 5 / e,
    o = ze(n, r, a),
    s = o * Le(i, o * e),
    c = s * s;
  return { stiffness: c, damping: i * 2 * Math.sqrt(c), duration: /* @__PURE__ */ F(e) };
}
function Ve(e, t) {
  if (vu(e, t)) return e;
}
function He(e) {
  let t = Ve(e.stiffness),
    n = Ve(e.damping, !0),
    r = Ve(e.mass),
    i = {
      ...e,
      stiffness: t ?? K.stiffness,
      damping: n ?? K.damping,
      mass: r ?? K.mass,
      isResolvedFromDuration: !1,
      isTimeDefined: (t ?? n ?? r) === void 0 && (e.duration !== void 0 || e.bounce !== void 0),
    };
  if (i.isTimeDefined) {
    if (e.visualDuration) {
      let t = hu(e.bounce || 0),
        n = ((2 * Math.PI) / (e.visualDuration * 1.2)) * Le(t, (2 * Math.PI) / 1.2);
      ((i.stiffness = n * n), (i.damping = 2 * t * Math.sqrt(i.stiffness)));
    } else (Object.assign(i, Be(i)), (i.isResolvedFromDuration = !0));
    (!vu(i.stiffness) || !vu(i.damping, !0)) &&
      ((i.stiffness = K.stiffness), (i.damping = K.damping));
  }
  return i;
}
function Ue(e = K.visualDuration, t = K.bounce) {
  let n = typeof e == `object` ? e : { visualDuration: e, keyframes: [0, 1], bounce: t },
    r = n.keyframes[0],
    i = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: r },
    {
      stiffness: o,
      damping: s,
      mass: c,
      duration: l,
      isResolvedFromDuration: u,
      isTimeDefined: d,
    } = He({ ...n }),
    f = (e) => (d ? 0 : -(/* @__PURE__ */ I(e))),
    p = s / (2 * Math.sqrt(o * c)),
    m = /* @__PURE__ */ I(Math.sqrt(o / c)),
    h = p * m,
    g = { target: i, delta: i - r, velocity: f(n.velocity || 0) || 0, restSpeed: 0, restDelta: 0 },
    _ = () => {
      let e = Math.abs(g.delta) < 5;
      ((g.restSpeed = n.restSpeed || (e ? K.restSpeed.granular : K.restSpeed.default)),
        (g.restDelta = n.restDelta || (e ? K.restDelta.granular : K.restDelta.default)));
    };
  _();
  let v, y, b;
  if (p < 1) {
    let e = Re(m, p),
      t = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    b = () => {
      ((t.A = (g.velocity + h * g.delta) / e),
        (t.sinC = h * t.A + g.delta * e),
        (t.cosC = h * g.delta - t.A * e));
    };
    let n = (n) => {
      n !== t.t &&
        ((t.t = n),
        (t.env = Math.exp(-h * n)),
        (t.sin = Math.sin(e * n)),
        (t.cos = Math.cos(e * n)));
    };
    ((v = (e) => (n(e), g.target - t.env * (t.A * t.sin + g.delta * t.cos))),
      (y = (e) => (n(e), t.env * (t.sinC * t.sin + t.cosC * t.cos))));
  } else if (p === 1) {
    v = (e) => g.target - Math.exp(-m * e) * (g.delta + (g.velocity + m * g.delta) * e);
    let e = { C: 0 };
    ((b = () => {
      e.C = g.velocity + m * g.delta;
    }),
      (y = (t) => Math.exp(-m * t) * (m * e.C * t - g.velocity)));
  } else {
    let e = m * Math.sqrt(p * p - 1),
      t = h - e,
      n = h + e,
      r = d ? 1 / 0 : 300 / e,
      i = (e, t) => Math.exp(t > r ? -e * r - h * (t - r) : -e * t),
      a = { S: 0, F: 0 };
    ((b = () => {
      let t = (g.velocity + h * g.delta) / e;
      ((a.S = (g.delta + t) / 2), (a.F = (g.delta - t) / 2));
    }),
      (v = (e) => g.target - a.S * i(t, e) - a.F * i(n, e)),
      (y = (e) => t * a.S * i(t, e) + n * a.F * i(n, e)));
  }
  b();
  let x = (u && l) || null,
    S = {
      calculatedDuration: x,
      retarget: (e, t) => {
        ((g.target = e[e.length - 1]),
          (g.delta = g.target - e[0]),
          (g.velocity = f(t)),
          (n.restSpeed && n.restDelta) || _(),
          (S.calculatedDuration = x),
          (a.done = !1),
          b());
      },
      velocity: (e) => /* @__PURE__ */ F(y(e)),
      next: (e) => {
        let t = v(e);
        if (u) a.done = e >= l;
        else {
          let n = /* @__PURE__ */ F(y(e));
          a.done = Math.abs(n) <= g.restSpeed && Math.abs(g.target - t) <= g.restDelta;
        }
        return ((a.value = a.done ? g.target : t), a);
      },
      toString: () => {
        let e = Math.min(Fe(S), mu),
          t = pu((t) => S.next(e * t).value, e, 30);
        return e + `ms ` + t;
      },
      toTransition: () => {},
    };
  return S;
}
function We({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let d = e[0],
    f = { done: !1, value: d },
    p = (e) => e < s || e > c,
    m = (e) => (s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c),
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g);
  _ !== g && (h = _ - d);
  let v = (e) => -h * Math.exp(-e / r),
    y = (e) => {
      let t = v(e);
      ((f.done = Math.abs(t) <= l), (f.value = f.done ? _ : _ + t));
    },
    b,
    x,
    S = (e) => {
      p(f.value) &&
        ((b = e),
        (x = Ue({
          keyframes: [f.value, m(f.value)],
          velocity: (-v(e) / r) * 1e3,
          damping: i,
          stiffness: a,
          restDelta: l,
          restSpeed: u,
        })));
    };
  return (
    S(0),
    {
      calculatedDuration: null,
      next: (e) => {
        let t = !1;
        return (
          !x && b === void 0 && ((t = !0), y(e), S(e)),
          b !== void 0 && e >= b ? x.next(e - b) : (!t && y(e), f)
        );
      },
    }
  );
}
function Ge(e, t, n) {
  let r = [],
    i = n || N.mix || Me,
    a = e.length - 1;
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1]);
    if (t) {
      let e = Array.isArray(t) ? t[n] || P : t;
      a = Zc(e, a);
    }
    r.push(a);
  }
  return r;
}
function Ke(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length;
  if ((t.length, a === 1)) return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = Ge(t, r, i),
    c = s.length,
    l = (n) => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = /* @__PURE__ */ Qc(e[r], e[r + 1], n);
      return s[r](i);
    };
  return n ? (t) => l(M(e[0], e[a - 1], t)) : l;
}
function qe(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = /* @__PURE__ */ Qc(0, t, r);
    e.push(U(n, 1, i));
  }
}
function Je(e) {
  let t = [0];
  return (qe(t, e.length - 1), t);
}
function Ye(e, t) {
  return e.map((e) => e * t);
}
function Xe(e, t) {
  return e.map(() => t || hl).splice(0, e.length - 1);
}
function Ze({ duration: e = 300, keyframes: t, times: n, ease: r = `easeInOut` }) {
  let i = /* @__PURE__ */ gl(r) ? r.map(bl) : bl(r) || hl,
    a = { done: !1, value: t[0] };
  if (t.length === 2 && !Array.isArray(i) && (!n || n.length !== 2 || (n[0] === 0 && n[1] === 1))) {
    let [n, r] = t,
      o = n === r ? void 0 : (N.mix || Me)(n, r);
    return {
      calculatedDuration: e,
      next: (t) => ((a.value = o ? o(i(e > 0 ? M(0, 1, t / e) : 1)) : r), (a.done = t >= e), a),
    };
  }
  let o = Ke(Ye(n && n.length === t.length ? n : Je(t), e), t, {
    ease: Array.isArray(i) ? i : Xe(t, i),
  });
  return { calculatedDuration: e, next: (t) => ((a.value = o(t)), (a.done = t >= e), a) };
}
function Qe(e, t, n) {
  let r = Math.max(t - yu, 0);
  return /* @__PURE__ */ el(n - e(r), t - r);
}
function $e(e, t, n = 0) {
  return t <= 0 ? n : e.velocity ? e.velocity(t) : Qe((t) => e.next(t).value, t, e.next(t).value);
}
function et(e, { repeat: t, repeatType: n = `loop` }, r, i = 1) {
  let a = e.filter(bu),
    o = i < 0 || (t && n !== `loop` && t % 2 == 1) ? 0 : a.length - 1;
  return !o || r === void 0 ? a[o] : r;
}
function tt(e) {
  typeof e.type == `string` && (e.type = xu[e.type]);
}
function nt(e, t) {
  return {
    kind: e,
    animation: t,
    timestamp: R.now(),
    frameTimestamp: L.timestamp,
    frameIsProcessing: L.isProcessing,
  };
}
function rt(e, t, n) {
  let r = globalThis.__MOTION_INSPECT__;
  if (r)
    try {
      r({ ...nt(`animation-start`, e), options: n ? { ...t, ...n } : t });
    } catch {}
}
function it(e, t) {
  let n = globalThis.__MOTION_INSPECT__;
  if (n)
    try {
      n({ ...nt(`layout-animation-start`, e), node: t });
    } catch {}
}
function at(e) {
  return new Eu(e);
}
function ot(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) return e;
  let [r] = n.match(jl) || [];
  if (!r) return e;
  let i = n.replace(r, ``),
    a = +!!Du.has(t);
  return (r !== n && (a *= 100), t + `(` + a + i + `)`);
}
function st(e, t) {
  let n = Pu(e);
  return (Fu.has(n) || (n = H), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0);
}
function ct(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
function lt(e) {
  return +!!e.includes(`scale`);
}
function ut(e, t) {
  if (!e || e === `none`) return lt(t);
  let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),
    r,
    i;
  if (n) ((r = Uu), (i = n));
  else {
    let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = Ru), (i = t));
  }
  if (!i) return lt(t);
  let a = r[t],
    o = i[1].split(`,`).map(dt);
  return typeof a == `function` ? a(o) : o[a];
}
function dt(e) {
  return parseFloat(e.trim());
}
function ft(e) {
  let t = [];
  return (
    Ju.forEach((n) => {
      let r = e.getValue(n);
      if (r !== void 0) {
        let e = r.get(),
          i = +!!n.startsWith(`scale`);
        if (e === i) return;
        (t.push([n, e]), r.set(i));
      }
    }),
    t
  );
}
function pt(e, t, n, r, i, a) {
  let o = parseFloat(e);
  if (!isNaN(o)) return o;
  let { min: s, max: c } = t()[n],
    l = c - s;
  return a === `border-box` ? l : l - parseFloat(r) - parseFloat(i);
}
function mt() {
  if ($u) {
    let e = [],
      t = /* @__PURE__ */ new Set(),
      n = /* @__PURE__ */ new Set();
    Zu.forEach((r) => {
      r.needsMeasurement && (e.push(r), t.add(r.element), Yu.has(r.name) && n.add(r.element));
    });
    let r = /* @__PURE__ */ new Map();
    (n.forEach((e) => {
      let t = ft(e);
      t.length && (r.set(e, t), e.render());
    }),
      e.forEach((e) => e.measureInitialState()),
      t.forEach((e) => {
        e.render();
        let t = r.get(e);
        t &&
          t.forEach(([t, n]) => {
            e.getValue(t)?.set(n);
          });
      }),
      e.forEach((e) => e.measureEndState()),
      e.forEach((e) => {
        e.suspendedScrollY !== void 0 && f.scrollTo(0, e.suspendedScrollY);
      }));
  }
  (($u = !1), (Qu = !1), Zu.forEach((e) => e.complete(ed)), Zu.clear());
}
function ht() {
  Zu.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && ($u = !0));
  });
}
function gt() {
  ((ed = !0), ht(), mt(), (ed = !1));
}
function _t(e, t, n) {
  if (typeof e == `string`) {
    if (Jc(e) || Xc(e)) return parseFloat(e);
    if (!H.test(e) && H.test(n)) return st(t, n);
  }
  return e ?? void 0;
}
function vt(e, t, n) {
  nd(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
function yt(e, t) {
  let n = /* @__PURE__ */ ie(e);
  return () => rd[t] ?? n();
}
function bt(e, t) {
  if (e)
    return typeof e == `function`
      ? od()
        ? pu(e, t)
        : `ease-out`
      : /* @__PURE__ */ _l(e)
        ? sd(e)
        : Array.isArray(e)
          ? e.map((e) => bt(e, t) || cd.easeOut)
          : cd[e];
}
function xt(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = `loop`,
    ease: s = `easeOut`,
    times: c,
  } = {},
  l = void 0
) {
  let u = { [t]: n };
  c && (u.offset = c);
  let d = bt(s, i);
  Array.isArray(d) && (u.easing = d);
  let f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? `linear` : d,
    fill: `both`,
    iterations: a + 1,
    direction: o === `reverse` ? `alternate` : `normal`,
  };
  return (l && (f.pseudoElement = l), e.animate(u, f));
}
function St(e) {
  return typeof e == `function` && `applyToOptions` in e;
}
function Ct({ type: e, ...t }) {
  return St(e) && od() ? e.applyToOptions(t) : ((t.duration ??= 300), (t.ease ??= `easeOut`), t);
}
function wt(e) {
  return e in ud;
}
function Tt(e) {
  typeof e.ease == `string` && wt(e.ease) && (e.ease = ud[e.ease]);
}
function Et(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Dt(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === `display` || t === `visibility`) return !0;
  let a = e[e.length - 1],
    o = pd(i, t),
    s = pd(a, t);
  return !o || !s
    ? (o !== s && `${t}${i}${a}${o ? a : i}`, !1)
    : Et(e) || ((n === `spring` || St(n)) && r);
}
function Ot(e) {
  ((e.duration = 0), (e.type = `keyframes`));
}
function kt(e) {
  for (let t = 0; t < e.length; t++) if (typeof e[t] == `string` && hd.test(e[t])) return !0;
  return !1;
}
function At(e) {
  let {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: a,
    type: o,
    keyframes: s,
  } = e;
  if (!n || !(md.has(n) || gd.has(n))) return !1;
  let c = t?.owner?.current;
  if (!(c instanceof HTMLElement) && !(c instanceof SVGElement)) return !1;
  let { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return (
    _d() &&
    (md.has(n) || (gd.has(n) && kt(s))) &&
    (n !== `transform` || !u) &&
    !l &&
    !r &&
    i !== `mirror` &&
    a !== 0 &&
    o !== `inertia`
  );
}
function jt(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r][t];
    i !== null && i > n && (n = i);
  }
  return n;
}
function Mt(e) {
  let t = Sd.get(e);
  return (t || ((t = /* @__PURE__ */ new Map()), Sd.set(e, t)), t);
}
function Nt(e, t, n, r = 0, i = 1) {
  let a = Array.from(e)
      .sort((e, t) => e.sortNodePosition(t))
      .indexOf(t),
    o = e.size,
    s = (o - 1) * r;
  return typeof n == `function` ? n(a, o) : i === 1 ? a * r : s - a * r;
}
function D(e, t) {
  return new Dd(e, t);
}
function Pt(e, t) {
  if (e?.inherit && t) {
    let { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function Ft(e, t) {
  let n = e?.[t] ?? e?.default ?? e;
  return n === e ? n : Pt(n, e);
}
function It(e) {
  for (let t in e) if (!Nd.has(t)) return !0;
  return !1;
}
function Lt(e, t, n, r) {
  let i = 1 - e;
  return i * i * t + 2 * i * e * n + e * e * r;
}
function Rt(e, t, n, r, i, a, o) {
  let s = 2 * (1 - e) * (n - t) + 2 * e * (r - n),
    c = 2 * (1 - e) * (a - i) + 2 * e * (o - a);
  return (180 / Math.PI) * Math.atan2(c, s);
}
function zt(e, t, n, r, i, a) {
  let o = n - e,
    s = r - t,
    c = Math.sqrt(o * o + s * s);
  if (c > 0) {
    let n = -s / c,
      r = o / c,
      l = i * c;
    return { x: e + o * a + n * l, y: t + s * a + r * l };
  }
  return { x: e, y: t };
}
function Bt({ strength: e = 0.5, peak: t = 0.5, direction: n, rotate: r = !1 } = {}) {
  let i = r === !0 ? 1 : typeof r == `number` ? r : 0,
    a;
  return (r, o) => {
    let s = o.x - r.x,
      c = o.y - r.y,
      l;
    l = n === `cw` ? -e : n === `ccw` ? e : (Math.abs(s) >= Math.abs(c) ? s : c) < 0 ? -e : e;
    let u = zt(r.x, r.y, o.x, o.y, l, t);
    if (n === void 0) {
      let e = Math.abs(s) < Math.abs(c),
        n = r.x + s * t,
        i = r.y + c * t,
        d = Math.sign(e ? u.x - n : u.y - i);
      a !== void 0 && d !== 0 && d !== a
        ? ((l = -l), (u = zt(r.x, r.y, o.x, o.y, l, t)))
        : d !== 0 && (a = d);
    }
    let d = i ? Rt(0, r.x, u.x, o.x, r.y, u.y, o.y) : 0,
      f = i ? Rt(1, r.x, u.x, o.x, r.y, u.y, o.y) : 0,
      p = i ? nl(-180, 180, f - d) : 0;
    return (e) => {
      let t = { x: Lt(e, r.x, u.x, o.x), y: Lt(e, r.y, u.y, o.y) };
      if (i) {
        let n = Rt(e, r.x, u.x, o.x, r.y, u.y, o.y),
          a = d + p * e;
        t.rotate = nl(-180, 180, n - a) * i;
      }
      return t;
    };
  };
}
function Vt(e = {}) {
  let t = Bt(e);
  return {
    interpolateProjection(e) {
      let n = e.x.translate,
        r = e.y.translate;
      if (!(Math.sqrt(n * n + r * r) < Fd)) return t({ x: n, y: r }, { x: 0, y: 0 });
    },
    animateVisualElement(e, n, r, i, a) {
      if (!(`x` in n || `y` in n)) return;
      let o = e.getValue(`x`, e.latestValues.x ?? 0),
        s = e.getValue(`y`, e.latestValues.y ?? 0),
        c = n.x,
        l = n.y,
        u = (Array.isArray(c) && c[0] != null ? c[0] : o?.get()) ?? 0,
        d = (Array.isArray(l) && l[0] != null ? l[0] : s?.get()) ?? 0,
        f = Array.isArray(c) ? c[c.length - 1] : (c ?? u),
        p = Array.isArray(l) ? l[l.length - 1] : (l ?? d),
        m = t({ x: u, y: d }, { x: f, y: p }),
        h = m(0).rotate === void 0 ? void 0 : e.getValue(`pathRotation`, 0),
        g = { delay: i, ...Ft(r || {}, `x`) };
      delete g.path;
      let _ = D(0);
      (_.start(
        Pd(``, _, [0, 1e3], {
          ...g,
          isSync: !0,
          velocity: 0,
          onUpdate: (e) => {
            let t = m(e / 1e3);
            (o?.set(t.x), s?.set(t.y), h && t.rotate !== void 0 && h.set(t.rotate));
          },
          onComplete: () => {
            (o?.set(f), s?.set(p), h?.set(0));
          },
          onStop: () => h?.set(0),
          onCancel: () => h?.set(0),
        })
      ),
        _.animation && a.push(_.animation),
        delete n.x,
        delete n.y);
    },
  };
}
function Ht(e) {
  let t = Id.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Ut(e, t, n = 1) {
  `${e}`;
  let [r, i] = Ht(e);
  if (!r) return;
  let a = f.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    return Jc(e) ? parseFloat(e) : e;
  }
  return El(i) ? Ut(i, t, n + 1) : i;
}
function Wt(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((e, n) => {
      ((t[0][n] = e.get()), (t[1][n] = e.getVelocity()));
    }),
    t
  );
}
function Gt(e, t, n, r) {
  let i = (t) => (typeof t == `function` ? t(n === void 0 ? e.custom : n, ...Wt(r)) : t);
  return ((t = i(t)), typeof t == `string` && (t = e.variants && e.variants[t]), i(t));
}
function Kt(e, t, n) {
  return Gt(e.getProps(), t, n, e);
}
function qt(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, D(n));
}
function Jt(e) {
  return zd(e) ? e[e.length - 1] || 0 : e;
}
function Yt(e, t) {
  let { transitionEnd: n = {}, transition: r = {}, ...i } = Kt(e, t) || {};
  i = { ...i, ...n };
  for (let t in i) qt(e, t, Jt(i[t]));
}
function Xt(e) {
  return !!(Y(e) && e.add);
}
function Zt(e, t) {
  let n = e.getValue(`willChange`);
  if (Xt(n)) return n.add(t);
  if (!n && N.WillChange) {
    let n = new N.WillChange(`auto`);
    (e.addValue(`willChange`, n), n.add(t));
  }
}
function Qt(e) {
  return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
function $t(e) {
  return e.props[Vd];
}
function en({ protectedKeys: e, needsAnimating: t }, n) {
  let r = n in e && !t[n];
  return ((t[n] = !1), r);
}
function tn(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a, transitionEnd: o, ...s } = t,
    c = e.getDefaultTransition();
  a = a ? Pt(a, c) : c;
  let l = a?.reduceMotion,
    u = a?.skipAnimations;
  r && (a = r);
  let d = [],
    p = i && e.animationState?.getState()[i],
    m = a?.path;
  m && m.animateVisualElement(e, s, a, n, d);
  for (let t in s) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = s[t];
    if (i === void 0 || (p && en(p, t))) continue;
    let o = { delay: n, ...Ft(a || {}, t) };
    u && (o.skipAnimations = !0);
    let c = r.get();
    if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
      W.update(() => r.set(i));
      continue;
    }
    let m = !1;
    if (Hd && f.MotionHandoffAnimation) {
      let n = $t(e);
      if (n) {
        let e = f.MotionHandoffAnimation(n, t, W);
        e !== null && ((o.startTime = e), (m = !0));
      }
    }
    Zt(e, t);
    let h = l ?? e.shouldReduceMotion;
    r.start(Pd(t, r, i, h && Rd.has(t) ? { type: !1 } : o, e, m));
    let g = r.animation;
    g && d.push(g);
  }
  if (o) {
    let t = () =>
      W.update(() => {
        o && Yt(e, o);
      });
    d.length ? Promise.all(d).then(t) : t();
  }
  return d;
}
function nn(e, t, n = {}) {
  let r = Kt(e, t, Ld(e, n.type)),
    i = n.transitionOverride || (r?.transition ?? (e.getDefaultTransition() || {})),
    a = () => Promise.all(r ? tn(e, r, n) : []),
    o = (r = 0) => {
      let { variantChildren: a } = e,
        { delayChildren: o = 0, staggerChildren: s, staggerDirection: c } = i,
        l = [];
      return (
        a?.forEach((e) => {
          (e.notify(`AnimationStart`, t),
            l.push(
              nn(e, t, {
                ...n,
                delay: r + (typeof o == `function` ? 0 : o) + Nt(a, e, o, s, c),
              }).then(() => e.notify(`AnimationComplete`, t))
            ));
        }),
        Promise.all(l)
      );
    },
    { when: s } = i;
  return s
    ? s === `beforeChildren`
      ? a().then(() => o())
      : o().then(a)
    : Promise.all([a(), o(n.delay)]);
}
function rn(e, t, n = {}) {
  return (
    e.notify(`AnimationStart`, t),
    (Array.isArray(t)
      ? Promise.all(t.map((t) => nn(e, t, n)))
      : typeof t == `string`
        ? nn(e, t, n)
        : Promise.all(tn(e, Kt(e, t, n.custom), n))
    ).then(() => {
      e.notify(`AnimationComplete`, t);
    })
  );
}
function an(e) {
  return typeof e == `number` ? e === 0 : e === null || e === `none` || e === `0` || Xc(e);
}
function on(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    let t = e[r];
    (typeof t == `string` && !qd.has(t) && he(t) && (i = e[r]), r++);
  }
  if (i && n) for (let r of t) e[r] !== i && (e[r] = st(n, i));
}
function sn(e, t) {
  for (let n = 0; n < e.length; n++) typeof e[n] == `number` && Xd.has(t) && (e[n] = e[n] + `px`);
}
function cn(e) {
  return !!(
    (typeof e == `function` && od()) ||
    !e ||
    (typeof e == `string` && (e in cd || od())) ||
    /* @__PURE__ */ _l(e) ||
    (Array.isArray(e) && e.every(cn))
  );
}
function ln(e) {
  (typeof e.test == `function` && e.read, un(e), Qd.unshift(e));
}
function un(e) {
  E(Qd, e);
}
function dn(e) {
  return Qd.find((t) => t.test(e));
}
function fn(e, t, n = {}, r) {
  let i = [],
    { velocity: a } = n,
    o = n.reduceMotion ?? r?.shouldReduceMotion;
  for (let s in t) {
    if (s === `transition` || s === `transitionEnd`) continue;
    let c = t[s];
    if (c === void 0) continue;
    let l = e(s),
      u = l.get();
    u !== void 0 && !l.isAnimating() && !Array.isArray(c) && c === u && !a
      ? W.update(() => l.set(c))
      : (l.start(Pd(s, l, c, o && Rd.has(s) ? { type: !1 } : n, r)),
        l.animation && i.push(l.animation));
  }
  let { transitionEnd: s } = t;
  if (s) {
    let t = () =>
      W.update(() => {
        for (let t in s) e(t).set(s[t]);
      });
    i.length ? Promise.all(i).then(t) : t();
  }
  return i;
}
function pn(e, t, n, r, i) {
  return fn(
    (r) => {
      let a = e.get(t, r);
      if (!a) {
        let o;
        if (!i) {
          let i = n[r];
          ((o = mn(i) ?? e.read(t, r, i)), `${r}`);
        }
        ((a = D(o, { owner: i })), e(t, { [r]: a }));
      }
      return a;
    },
    n,
    r,
    i
  );
}
function mn(e) {
  let t = Array.isArray(e) ? e[0] : void 0;
  return t === null ? void 0 : t;
}
function hn(e) {
  return Yc(e) && `offsetHeight` in e && !(`ownerSVGElement` in e);
}
function gn(e) {
  return Yc(e) && `ownerSVGElement` in e;
}
function _n(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == `string`) {
    let r = document;
    t && (r = t.current);
    let i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((e) => e != null);
}
function vn(e) {
  let t = (t, n) => {
      let r = _n(t),
        i = [];
      for (let t of r) {
        let r = e(t, n);
        i.push(r);
      }
      return () => {
        for (let e of i) e();
      };
    },
    { test: n, read: r, get: i, flush: a, state: o } = e;
  return Object.assign(t, { test: n, read: r, get: i, flush: a, state: o });
}
function yn(e, { step: t, ...n } = {}) {
  let r = /* @__PURE__ */ new WeakMap();
  return Object.assign(
    (n, i) => {
      let a = r.get(n) ?? new ef(t);
      r.set(n, a);
      let o = [];
      for (let t in i) {
        let r = i[t],
          s = e(n, a, t, r);
        o.push(s);
      }
      return () => {
        for (let e of o) e();
      };
    },
    n,
    { get: (e, t) => r.get(e)?.get(t), flush: (e) => r.get(e)?.flush(), state: (e) => r.get(e) }
  );
}
function bn(e) {
  let t = ``,
    { transformKeys: n = [], transformValues: r = {} } = e;
  for (let e = 0; e < n.length; e++) {
    let i = n[e],
      a = r[i].get();
    a !== void 0 &&
      (typeof a == `number` ? a : parseFloat(a)) !== +!!i.startsWith(`scale`) &&
      (t += (t && ` `) + (nf[i] || (nf[i] = (tf[i] || i) + `(`)) + $d(a, Mu[i]) + `)`);
  }
  let i = e.get(`pathRotation`)?.get();
  return (i && (t += (t && ` `) + `rotate(` + $d(i, Mu.pathRotation) + `)`), t || `none`);
}
function xn(e, t, n) {
  let r = ``,
    i = !0;
  for (let a = 0; a < ff; a++) {
    let o = Gu[a],
      s = e[o];
    if (s === void 0) continue;
    let c = !0;
    if (typeof s == `number`) c = s === +!!o.startsWith(`scale`);
    else {
      let e = parseFloat(s);
      c = o.startsWith(`scale`) ? e === 1 : e === 0;
    }
    if (!c || n) {
      let e = $d(s, q[o]);
      if (!c) {
        i = !1;
        let t = df[o] || o;
        r += `${t}(${e}) `;
      }
      n && (t[o] = e);
    }
  }
  let a = e.pathRotation;
  return (
    a && ((i = !1), (r += `rotate(${$d(a, q.pathRotation)}) `)),
    (r = r.trim()),
    n ? (r = n(t, i ? `` : r)) : i && (r = `none`),
    r
  );
}
function Sn(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1;
  for (let e in t) {
    let n = t[e];
    if (J.has(e)) o = !0;
    else if (wl(e)) i[e] = n;
    else {
      let t = $d(n, q[e]);
      e.startsWith(`origin`) ? ((s = !0), (a[e] = t)) : (r[e] = t);
    }
  }
  if (
    (t.transform || (o || n ? (r.transform = xn(t, e.transform, n)) : (r.transform &&= `none`)), s)
  ) {
    let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
function Cn(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let a = i ? pf : mf;
  ((e[a.offset] = `${-r}`), (e[a.array] = `${t} ${n}`));
}
function wn(
  e,
  { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s },
  c,
  l,
  u
) {
  if ((Sn(e, s, l), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  let { attrs: d, style: f } = e;
  for (let e of hf) d[e] !== void 0 && ((f[e] = d[e]), delete d[e]);
  ((f.transform || d.transformOrigin) &&
    ((f.transformOrigin = d.transformOrigin ?? `50% 50%`), delete d.transformOrigin),
    f.transform && ((f.transformBox = u?.transformBox ?? `fill-box`), delete d.transformBox),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && Cn(d, i, a, o, !1));
}
function Tn(e, t) {
  if (!(t in e)) return !1;
  let n =
    Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), t) ||
    Object.getOwnPropertyDescriptor(e, t);
  return n && typeof n.set == `function`;
}
function En(e, t, n, r) {
  return (
    W.render(() => e.setAttribute(`pathLength`, `1`)),
    n === `pathOffset`
      ? t.set(n, r, () => {
          let t = r.get();
          e.setAttribute(`stroke-dashoffset`, `${-t}`);
        })
      : (t.get(`stroke-dasharray`) ||
          t.set(`stroke-dasharray`, new Dd(`1 1`), () => {
            let n = t.get(`pathLength`)?.get() ?? 1,
              r = t.get(`pathSpacing`)?.get();
            e.setAttribute(`stroke-dasharray`, `${n} ${r ?? 1 - Number(n)}`);
          }),
        t.set(n, r, void 0, t.get(`stroke-dasharray`)))
  );
}
function Dn(e) {
  return e.replace(/^attr([A-Z])/, (e, t) => t.toLowerCase());
}
function On({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function kn({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function An(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function jn(e) {
  return e === void 0 || e === 1;
}
function Mn({ scale: e, scaleX: t, scaleY: n }) {
  return !jn(e) || !jn(t) || !jn(n);
}
function Nn(e) {
  return Mn(e) || Pn(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Pn(e) {
  return Fn(e.x) || Fn(e.y);
}
function Fn(e) {
  return e && e !== `0%`;
}
function In(e, t, n) {
  return n + t * (e - n);
}
function Ln(e, t, n, r, i) {
  return (i !== void 0 && (e = In(e, i, r)), In(e, n, r) + t);
}
function Rn(e, t = 0, n = 1, r, i) {
  ((e.min = Ln(e.min, t, n, r, i)), (e.max = Ln(e.max, t, n, r, i)));
}
function zn(e, { x: t, y: n }) {
  (Rn(e.x, t.translate, t.scale, t.originPoint), Rn(e.y, n.translate, n.scale, n.originPoint));
}
function Bn(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let a, o;
  for (let s = 0; s < i; s++) {
    ((a = n[s]), (o = a.projectionDelta));
    let { visualElement: i } = a.options;
    (i && i.props.style && i.props.style.display === `contents`) ||
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        (O(e.x, -a.scroll.offset.x), O(e.y, -a.scroll.offset.y)),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), zn(e, o)),
      r && Nn(a.latestValues) && Un(e, a.latestValues, a.layout?.layoutBox));
  }
  (t.x < Cf && t.x > Sf && (t.x = 1), t.y < Cf && t.y > Sf && (t.y = 1));
}
function O(e, t) {
  ((e.min += t), (e.max += t));
}
function Vn(e, t, n, r, i = 0.5) {
  Rn(e, t, n, U(e.min, e.max, i), r);
}
function Hn(e, t) {
  return typeof e == `string` ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function Un(e, t, n) {
  let r = n ?? e;
  (Vn(e.x, Hn(t.x, r.x), t.scaleX, t.scale, t.originX),
    Vn(e.y, Hn(t.y, r.y), t.scaleY, t.scale, t.originY));
}
function Wn(e, t) {
  return On(An(e.getBoundingClientRect(), t));
}
function Gn(e, t, n) {
  let r = Wn(e, n),
    { scroll: i } = t;
  return (i && (O(r.x, i.offset.x), O(r.y, i.offset.y)), r);
}
function Kn(e, t, n, r) {
  if (r) return fn((e) => r.getValue(e, null), t, n, r);
  let i = Tf(e);
  return pn(i, e, t, n, new Ef(i, e));
}
function qn(e, t) {
  let n = Tf(e).state(e);
  if (!n) return;
  let { transformKeys: r } = n;
  n.release().forEach((e, n) => {
    n === `transformBox` || (n === `transform` && r?.length) || t.addValue(n, e);
  });
}
function Jn() {
  return X.x || X.y;
}
function Yn(e) {
  return e === `x` || e === `y`
    ? X[e]
      ? null
      : ((X[e] = !0),
        () => {
          X[e] = !1;
        })
    : X.x || X.y
      ? null
      : ((X.x = X.y = !0),
        () => {
          X.x = X.y = !1;
        });
}
function Xn(e, t) {
  let n = _n(e),
    r = new AbortController();
  return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
}
function Zn(e) {
  return !(e.pointerType === `touch` || Jn());
}
function Qn(e, t, n = {}) {
  let [r, i, a] = Xn(e, n);
  return (
    r.forEach((e) => {
      let n = !1,
        r = !1,
        a,
        o = () => {
          e.removeEventListener(`pointerleave`, u);
        },
        s = (e) => {
          ((a &&= (a(e), void 0)), o());
        },
        c = (e) => {
          ((n = !1),
            f.removeEventListener(`pointerup`, c),
            f.removeEventListener(`pointercancel`, c),
            r && ((r = !1), s(e)));
        },
        l = () => {
          ((n = !0),
            f.addEventListener(`pointerup`, c, i),
            f.addEventListener(`pointercancel`, c, i));
        },
        u = (e) => {
          e.pointerType !== `touch` && (n ? (r = !0) : s(e));
        };
      (e.addEventListener(
        `pointerenter`,
        (n) => {
          if (!Zn(n)) return;
          r = !1;
          let o = t(e, n);
          typeof o == `function` && ((a = o), e.addEventListener(`pointerleave`, u, i));
        },
        i
      ),
        e.addEventListener(`pointerdown`, l, i));
    }),
    a
  );
}
function $n(e) {
  return Mf.has(e.tagName) || e.isContentEditable === !0;
}
function er(e) {
  return Nf.has(e.tagName) || e.isContentEditable === !0;
}
function tr(e) {
  return (t) => {
    t.key === `Enter` && e(t);
  };
}
function nr(e, t) {
  e.dispatchEvent(new PointerEvent(`pointer` + t, { isPrimary: !0, bubbles: !0 }));
}
function rr(e) {
  return jf(e) && !Jn();
}
function ir(e, t, n = {}) {
  let [r, i, a] = Xn(e, n),
    o = (e) => {
      let r = e.currentTarget;
      if (!rr(e) || If.has(e)) return;
      (Pf.add(r), n.stopPropagation && If.add(e));
      let a = t(r, e),
        o = { ...i, capture: !0 },
        s = (e, t) => {
          (f.removeEventListener(`pointerup`, c, o),
            f.removeEventListener(`pointercancel`, l, o),
            Pf.has(r) && Pf.delete(r),
            rr(e) && typeof a == `function` && a(e, { success: t }));
        },
        c = (e) => {
          s(e, r === f || r === document || n.useGlobalTarget || Af(r, e.target));
        },
        l = (e) => {
          s(e, !1);
        };
      (f.addEventListener(`pointerup`, c, o), f.addEventListener(`pointercancel`, l, o));
    };
  return (
    r.forEach((e) => {
      ((n.useGlobalTarget ? f : e).addEventListener(`pointerdown`, o, i),
        hn(e) &&
          (e.addEventListener(`focus`, (e) => Ff(e, i)),
          !$n(e) && !e.hasAttribute(`tabindex`) && (e.tabIndex = 0)));
    }),
    a
  );
}
function ar(e, t) {
  let n = f.getComputedStyle(e);
  return nd(t) ? n.getPropertyValue(t) : n[t];
}
function or({ target: e, borderBoxSize: t }) {
  Lf.get(e)?.forEach((n) => {
    n(e, {
      get width() {
        return Bf(e, t);
      },
      get height() {
        return Vf(e, t);
      },
    });
  });
}
function sr(e) {
  e.forEach(or);
}
function cr() {
  typeof ResizeObserver < `u` && (Rf = new ResizeObserver(sr));
}
function lr(e, t) {
  Rf || cr();
  let n = _n(e);
  return (
    n.forEach((e) => {
      let n = Lf.get(e);
      (n || ((n = /* @__PURE__ */ new Set()), Lf.set(e, n)), n.add(t), Rf?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = Lf.get(e);
        (n?.delete(t), n?.size || Rf?.unobserve(e));
      });
    }
  );
}
function ur() {
  ((Uf = () => {
    let e = {
      get width() {
        return f.innerWidth;
      },
      get height() {
        return f.innerHeight;
      },
    };
    Hf.forEach((t) => t(e));
  }),
    f.addEventListener(`resize`, Uf));
}
function dr(e) {
  return (
    Hf.add(e),
    Uf || ur(),
    () => {
      (Hf.delete(e),
        !Hf.size &&
          typeof Uf == `function` &&
          (f.removeEventListener(`resize`, Uf), (Uf = void 0)));
    }
  );
}
function fr(e, t) {
  return typeof e == `function` ? dr(e) : lr(e, t);
}
function pr() {
  ((Z.value = null), (Z.addProjectionMetrics = null));
}
function mr() {
  if (Z.value) throw (pr(), Error(`Stats are already being measured`));
  let e = Z;
  ((e.value = {
    layoutProjection: { nodes: [], calculatedTargetDeltas: [], calculatedProjections: [] },
  }),
    (e.addProjectionMetrics = (t) => {
      let { layoutProjection: n } = e.value;
      (n.nodes.push(t.nodes),
        n.calculatedTargetDeltas.push(t.calculatedTargetDeltas),
        n.calculatedProjections.push(t.calculatedProjections));
    }));
}
function hr(e) {
  return gn(e) && e.tagName === `svg`;
}
function gr(e, t) {
  if (e === `first`) return 0;
  {
    let n = t - 1;
    return e === `last` ? n : n / 2;
  }
}
function _r(e = 0.1, { startDelay: t = 0, from: n = 0, ease: r } = {}) {
  return (i, a) => {
    let o = typeof n == `number` ? n : gr(n, a),
      s = e * Math.abs(o - i);
    if (r) {
      let t = a * e;
      s = bl(r)(s / t) * t;
    }
    return t + s;
  };
}
function vr(...e) {
  let t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    a = e[2 + n],
    o = e[3 + n],
    s = Ke(i, a, o);
  return t ? s(r) : s;
}
function yr(e, t, n) {
  let r = e.get(),
    i = null,
    a,
    o = typeof r == `string` ? r.replace(/[\d.-]/g, ``) : void 0,
    s = (e) => a(o ? e + o : e),
    c = () => e.events.animationStart?.notify(),
    l = () => {
      ((i &&= (i.stop(), null)), (e.animation = void 0));
    };
  if (
    (e.attach((t, r) => {
      a = r;
      let o = qf(t);
      if (i?.state === `running`) {
        i.setTarget(o, n.velocity);
        return;
      }
      let u = qf(e.get()),
        d = i ? i.getGeneratorVelocity() : e.getVelocity();
      if ((l(), u === o)) return;
      let f = (i = new Kf({
        keyframes: [u, o],
        velocity: d,
        restDelta: 0.001,
        restSpeed: 0.01,
        ...n,
        onUpdate: s,
        onPlay: c,
      }));
      ((e.animation = f),
        f.then(() => {
          i === f && ((i = null), (e.animation = void 0), e.events.animationComplete?.notify());
        }));
    }, l),
    Y(t))
  ) {
    let r = n.skipInitialAnimation === !0,
      i = t.on(`change`, (t) => {
        r ? ((r = !1), e.jump(br(t, o), !1)) : e.set(br(t, o));
      }),
      a = e.on(`destroy`, i);
    return () => {
      (i(), a());
    };
  }
  return l;
}
function br(e, t) {
  return t ? e + t : e;
}
function xr(e, t) {
  let n = D(Y(e) ? e.get() : e);
  return (Sr(n, e, t), n);
}
function Sr(e, t, n = {}) {
  let r = { type: `spring`, ...n };
  return (tt(r), (r.type = r.type || Ze), yr(e, t, r));
}
function Cr(e, t, n) {
  let r = () => t.set(n()),
    i = () => W.preRender(r, !1, !0),
    a = e.map((e) => e.on(`change`, i));
  t.on(`destroy`, () => {
    (a.forEach((e) => e()), G(r));
  });
}
function wr(e) {
  let t = [];
  Ed.current = t;
  let n = e();
  Ed.current = void 0;
  let r = D(n);
  return (Cr(t, r, e), r);
}
function Tr(e, t, n, r) {
  let i = vr(t, n, r);
  return wr(() => i(e.get()));
}
function Er(e, t) {
  let n = D(Y(e) ? e.get() : e);
  return (Dr(n, e, t), n);
}
function Dr(e, t, n) {
  return yr(e, t, { ...n, type: Ue });
}
function Or(e, t, n) {
  t && (e.style?.setProperty(`view-transition-class`, t), n.push(e));
}
function kr(e, t, n, r, i) {
  if (n && (e.style?.setProperty(`view-transition-group`, n), r.push(e), n !== `none` && i)) {
    let n = getComputedStyle(e);
    (n.overflowX !== `visible` || n.overflowY !== `visible`) && i.add(t);
  }
}
function Ar(e, t, n, r, i, a = [], o, s = [], c) {
  let l = _n(e);
  if (r)
    return l.map((e, l) => {
      let u = t.get(e);
      if (u) return u;
      let d = r[l] ?? Zf();
      return (
        e.style?.setProperty(`view-transition-name`, d),
        n.push(e),
        t.set(e, d),
        Or(e, i, a),
        kr(e, d, o, s, c),
        d
      );
    });
  let u = l.map((e) =>
    t.has(e) ? void 0 : getComputedStyle(e).getPropertyValue(`view-transition-name`)
  );
  return l.map((e, r) => {
    let l = t.get(e);
    if (l) return l;
    let d = u[r],
      f;
    return (
      d && d !== `none` && d !== `auto` && d !== `match-element` && !Qf(d)
        ? (f = d)
        : ((f = Zf()), e.style?.setProperty(`view-transition-name`, f), n.push(e)),
      t.set(e, f),
      Or(e, i, a),
      kr(e, f, o, s, c),
      f
    );
  });
}
function jr(e, t = [], n = []) {
  for (let t of e) t.style?.removeProperty(`view-transition-name`);
  for (let e of t) e.style?.removeProperty(`view-transition-class`);
  for (let e of n) e.style?.removeProperty(`view-transition-group`);
}
function Mr(e) {
  return e === `layout` ? `group` : e === `enter` || e === `new` ? `new` : `old`;
}
function Nr(e) {
  let t = e.match(/::view-transition-(old|new|group-children|group|image-pair)\((.*?)\)/);
  return t ? { layer: t[2], type: t[1] } : null;
}
function Pr() {
  return document.getAnimations().filter((e) => {
    let { effect: t } = e;
    return (
      !!t &&
      t.target === document.documentElement &&
      t.pseudoElement?.startsWith(`::view-transition`)
    );
  });
}
function Fr(e, t) {
  return t.has(e) && Object.keys(t.get(e)).length > 0;
}
function Ir(e) {
  let {
    update: t,
    targets: n,
    resolveDefs: r,
    cropOverride: i,
    pairs: a,
    classNames: o,
    flatGroups: s,
    options: c,
  } = e;
  if (!document.startViewTransition) return (async () => (await t(), new yd([])))();
  let l = /* @__PURE__ */ new Map(),
    u = [],
    d = [],
    f = [],
    p = /* @__PURE__ */ new Set(),
    m = /* @__PURE__ */ new Map(),
    h = /* @__PURE__ */ new Set(),
    g = /* @__PURE__ */ new Map(),
    _ = /* @__PURE__ */ new Map(),
    v = /* @__PURE__ */ new Map(),
    y = /* @__PURE__ */ new Map(),
    b = (e) => {
      n.forEach((t, n) => {
        let c = o.get(n),
          h = n === `root` || !r.has(n) ? void 0 : s.has(n) ? `none` : `contain`,
          b;
        if (n === `root` || !r.has(n)) b = [n];
        else if (a.has(n)) {
          if (e === `old`) (y.set(n, _n(n)), (b = Ar(n, l, u, void 0, c, d, h, f, p)), v.set(n, b));
          else {
            for (let e of y.get(n) ?? [])
              (e.style?.removeProperty(`view-transition-name`), l.delete(e));
            b = Ar(a.get(n), l, u, v.get(n), c, d, h, f, p);
          }
        } else b = Ar(n, l, u, void 0, c, d, h, f, p);
        let x = i.get(n);
        b.forEach((n, r) => {
          let i = m.get(n);
          (m.set(n, i && i !== t ? { ...i, ...t } : t), x !== void 0 && g.set(n, x));
          let a = _.get(n) ?? {};
          ((a[e] = [r, b.length]), _.set(n, a));
        });
      });
    },
    x = (e, t) => {
      let n = _.get(e);
      return (t === `old` ? n?.old : t === `new` ? n?.new : (n?.new ?? n?.old)) ?? [-1, 1];
    },
    S = (e, t, n, r, i) => {
      let a = Rr(Ft(c, n), Ft(Lr(e, t) ?? {}, n));
      return (typeof a.delay == `function` && (a.delay = a.delay(r, i)), a);
    },
    ee = (e) => {
      let [t, n] = x(e, `group`),
        r = S(m.get(e), `group`, `layout`, t === -1 ? 0 : t, n);
      r.duration &&= /* @__PURE__ */ F(r.duration);
      let { delay: i = 0, duration: a, ease: o } = Ct(r);
      return { delay: /* @__PURE__ */ F(i), duration: a, ease: o };
    },
    C = /* @__PURE__ */ new Map(),
    w = (e) =>
      l.forEach((t, n) => {
        let r = n,
          i = r.getBoundingClientRect?.();
        if (i && i.height) {
          let n = getComputedStyle(r),
            a = {};
          for (let e of Yd) a[e] = n[e];
          let o = C.get(t) ?? {};
          ((o[e] = { width: i.width, height: i.height, radii: a }), C.set(t, o));
        }
      }),
    T = () => {
      h.clear();
      for (let e of _.keys()) e !== `root` && (g.get(e) ?? te(e)) && h.add(e);
    },
    te = (e) => {
      let t = C.get(e);
      return !t?.old || !t?.new || !t.old.height || !t.new.height
        ? !1
        : Math.abs(t.old.width / t.old.height - t.new.width / t.new.height) > op;
    },
    E = () => {
      (Fr(`root`, n) || tp.set(`:root`, { "view-transition-name": `none` }),
        tp.set(`::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)`, {
          "animation-timing-function": `linear !important`,
        }),
        h.forEach((e) => {
          (tp.set(`::view-transition-group(${e})`, { overflow: `clip` }),
            tp.set(`::view-transition-old(${e}), ::view-transition-new(${e})`, {
              width: `100%`,
              height: `100%`,
              "object-fit": `cover`,
            }));
        }),
        p.forEach((e) => {
          tp.set(`::view-transition-group-children(${e})`, { overflow: `clip` });
        }),
        tp.commit());
    },
    ne = () => {
      (jr(u, d, f), tp.remove());
    },
    re = async () => {
      (await t(), b(`new`), w(`new`), T(), E());
    },
    ie;
  try {
    (b(`old`), w(`old`), E(), (ie = document.startViewTransition(re)));
  } catch (e) {
    return (ne(), Promise.reject(e));
  }
  return (
    ie.finished.finally(ne),
    new Promise((e, t) => {
      ie.ready
        .then(() => {
          let t = Pr(),
            n = [],
            r = /* @__PURE__ */ new Set(),
            i = /* @__PURE__ */ new Set();
          m.forEach((e, t) => {
            let a = _.get(t),
              o = !!a?.new && !a?.old,
              s = !!a?.old && !a?.new;
            for (let a of np) {
              if (!e[a] || (a === `enter` && !o) || (a === `exit` && !s)) continue;
              let l = Mr(a),
                [u, d] = x(t, l);
              if (u === -1) continue;
              let { keyframes: f, options: p } = e[a];
              for (let [m, h] of Object.entries(f)) {
                if (h == null) continue;
                if (m === `x` || m === `y`) {
                  oe(
                    !1,
                    `animateView() animates view-transition layers with CSS properties; the "${m}" shorthand has no effect - use transform, e.g. { transform: "translateX(40px)" }.`
                  );
                  continue;
                }
                if (
                  (a === `new` && o && e.enter?.keyframes[m] != null) ||
                  (a === `old` && s && e.exit?.keyframes[m] != null)
                )
                  continue;
                let f = Rr(Ft(c, m), Ft(p, m));
                if (!Array.isArray(h)) {
                  let t = a === `enter` ? e.exit?.keyframes[m] : void 0,
                    n =
                      t == null
                        ? m === `opacity` || (l === `new` ? o : s)
                          ? ap[l]?.[m]
                          : void 0
                        : Array.isArray(t)
                          ? t[t.length - 1]
                          : t;
                  n !== void 0 && (h = [n, h]);
                }
                (typeof f.delay == `function` && (f.delay = f.delay(u, d)),
                  (f.duration &&= /* @__PURE__ */ F(f.duration)),
                  (f.delay &&= /* @__PURE__ */ F(f.delay)),
                  n.push(
                    new ld({
                      ...f,
                      element: document.documentElement,
                      name: m,
                      pseudoElement: `::view-transition-${l}(${t})`,
                      keyframes: h,
                    })
                  ),
                  r.add(`${t}:${l}`),
                  m === `opacity` && i.add(`${t}:${l}`));
              }
            }
          });
          for (let e of t) {
            if (e.playState === `finished`) continue;
            let { effect: t } = e;
            if (!t || !(t instanceof KeyframeEffect)) continue;
            let { pseudoElement: a } = t;
            if (!a) continue;
            let o = Nr(a);
            if (!o) continue;
            let s = m.get(o.layer);
            if (r.has(`${o.layer}:${o.type}`)) {
              i.has(`${o.layer}:new`) &&
              i.has(`${o.layer}:old`) &&
              t.getKeyframes().some((e) => e.mixBlendMode)
                ? n.push(new xd(e))
                : e.cancel();
              continue;
            }
            let c = o.type === `old` ? `new` : o.type === `new` ? `old` : void 0;
            if (c && r.has(`${o.layer}:${c}`) && !i.has(`${o.layer}:${c}`)) {
              e.cancel();
              continue;
            }
            let l = _.get(o.layer),
              u = (o.type === `old` || o.type === `new`) && !!l?.old && !!l?.new,
              d;
            if (o.type.startsWith(`group`)) {
              let { delay: e, duration: t, ease: n } = ee(o.layer);
              d = { delay: e, duration: t, easing: bt(n, t) };
            } else {
              let e = u ? `group` : o.type,
                [t, n] = x(o.layer, e),
                r = S(s, e, e === `group` ? `layout` : ``, t === -1 ? 0 : t, n),
                i = r.visualDuration;
              (r.duration && (r.duration = /* @__PURE__ */ F(r.duration)),
                (r = Ct(r)),
                (d = {
                  delay: /* @__PURE__ */ F(r.delay ?? 0),
                  duration: u && i !== void 0 ? /* @__PURE__ */ F(i) : r.duration,
                  easing: u ? `linear` : bt(r.ease, r.duration),
                }));
            }
            (t.updateTiming(d), n.push(new xd(e)));
          }
          (C.forEach((e, t) => {
            if (!h.has(t)) return;
            let { delay: r, duration: i, ease: a } = ee(t);
            for (let o of Yd) {
              let s = e.old?.radii[o] || e.new?.radii[o] || `0px`,
                c = e.new?.radii[o] || e.old?.radii[o] || `0px`;
              (rp(s) && rp(c)) ||
                n.push(
                  new ld({
                    element: document.documentElement,
                    name: o,
                    pseudoElement: `::view-transition-group(${t})`,
                    keyframes: [s, c],
                    delay: r,
                    duration: i,
                    ease: a,
                  })
                );
            }
          }),
            e(new yd(n)));
        })
        .catch(() => ie.updateCallbackDone.then(() => e(new yd([])), t));
    })
  );
}
function Lr(e, t) {
  for (let n of ip[t] ?? []) {
    let t = e?.[n]?.options;
    if (t) return t;
  }
}
function Rr(e, t) {
  let n = { ...e, ...t };
  return (
    t.duration !== void 0 &&
      (t.visualDuration === void 0 && delete n.visualDuration, t.type === void 0 && delete n.type),
    n
  );
}
function zr() {
  cp = null;
  let [e] = sp;
  e && Br(e);
}
function Br(e) {
  (E(sp, e),
    (cp = e),
    Ir(e)
      .then((t) => (e.notifyReady(t), t.finished))
      .catch((t) => e.notifyReject(t))
      .finally(zr));
}
function Vr() {
  for (let e = sp.length - 1; e >= 0; e--) {
    let t = sp[e],
      { interrupt: n } = t.options;
    if (n === `immediate`) {
      let n = sp.slice(0, e + 1).map((e) => e.update),
        r = sp.slice(e + 1);
      ((t.update = () => {
        n.forEach((e) => e());
      }),
        (sp = [t, ...r]));
      break;
    }
  }
  (!cp || sp[0]?.options.interrupt === `immediate`) && zr();
}
function Hr(e) {
  (sp.push(e), Of.render(Vr));
}
function Ur(e, t = {}) {
  return new lp(e, t);
}
function Wr(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
function Gr(e) {
  return typeof e == `string` || Array.isArray(e);
}
function Kr(e) {
  if (Wr(e.animate)) return !0;
  for (let t = 0; t < hp.length; t++) if (Gr(e[hp[t]])) return !0;
  return !1;
}
function qr(e) {
  return !!(Kr(e) || e.variants);
}
function Jr(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r];
    if (Y(i)) e.addValue(r, i);
    else if (Y(a)) e.addValue(r, D(i, { owner: e }));
    else if (a !== i) {
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
      } else {
        let t = e.getStaticValue(r);
        e.addValue(r, D(t === void 0 ? i : t, { owner: e }));
      }
    }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
function Yr() {
  if (((_p.current = !0), vp)) {
    if (f.matchMedia) {
      let e = f.matchMedia(`(prefers-reduced-motion)`),
        t = () => (gp.current = e.matches);
      (e.addEventListener(`change`, t), t());
    } else gp.current = !1;
  }
}
function Xr(e) {
  bp = e;
}
function Zr() {
  return bp;
}
function Qr(e, { style: t, vars: n }, r, i) {
  let a = e.style,
    o;
  for (o in t) a[o] = t[o];
  for (o in (i?.applyProjectionStyles(a, r), n)) a.setProperty(o, n[o]);
}
function $r(e) {
  for (let t in e) ((wp[t] = e[t]), wl(t) && (wp[t].isCSSVariable = !0));
}
function ei(e, { layout: t, layoutId: n }) {
  return (
    J.has(e) || e.startsWith(`origin`) || ((t || n !== void 0) && (!!wp[e] || e === `opacity`))
  );
}
function ti(e, t, n) {
  let r = e.style,
    i = t?.style,
    a = {};
  if (!r) return a;
  for (let t in r)
    (Y(r[t]) || (i && Y(i[t])) || ei(t, e) || n?.getValue(t)?.liveStyle !== void 0) &&
      (a[t] = r[t]);
  return a;
}
function ni(e) {
  return f.getComputedStyle(e);
}
function ri(e, t) {
  return e in t;
}
function ii(e, t, n, r) {
  Qr(e, t, void 0, r);
  for (let n in t.attrs) e.setAttribute(Dp.has(n) ? n : Qt(n), t.attrs[n]);
}
function ai(e, t, n) {
  let r = ti(e, t, n);
  for (let n in e)
    if (Y(e[n]) || Y(t[n])) {
      let t = Gu.indexOf(n) === -1 ? n : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
      r[t] = e[n];
    }
  return r;
}
function oi(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function si(e) {
  let t = (t) => Promise.all(t.map(({ animation: t, options: n }) => rn(e, t, n))),
    n = li(),
    r = !0,
    i = !1;
  function a(a) {
    let { props: o, parent: s, manuallyAnimateOnMount: c } = e,
      l = r || i,
      u = [],
      d = /* @__PURE__ */ new Set(),
      f = {},
      p = 1 / 0,
      m = e;
    do m = m.props.inherit !== !1 && m.parent;
    while (m && !m.isControllingVariants);
    if (
      (Ap.forEach((t, r) => {
        let i = n[t],
          h = o[t],
          g = m && m.props[t],
          _ = h === void 0 ? (Gr(g) || g === !1 ? g : void 0) : h,
          v = Gr(_),
          y = t === a ? i.isActive : null;
        y === !1 && (p = r);
        let b = v && h === void 0 && !(l && c);
        if (
          ((i.protectedKeys = { ...f }),
          (!i.isActive && y === null) || (!_ && !i.prevProp) || Wr(_) || typeof _ == `boolean`)
        )
          return;
        if (t === `exit` && i.isActive && y !== !0) {
          f = { ...f, ...i.prevResolvedValues };
          return;
        }
        let x = ci(i.prevProp, _),
          S = x || (v && ((y && !b) || r > p)),
          ee = !1,
          C = Array.isArray(_) ? _ : [_],
          w = {};
        if (y !== !1)
          for (let n of C) {
            let { transition: r, transitionEnd: i, ...a } = Kt(e, n, Ld(e, t)) || {};
            w = { ...w, ...a, ...i };
          }
        let { prevResolvedValues: T } = i;
        for (let t in { ...T, ...w }) {
          if (t in f) continue;
          let n = w[t],
            r = T[t],
            a = Array.isArray(n) && Array.isArray(r) ? !oi(n, r) || x : n !== r;
          if (a && n == null) d.add(t);
          else if (a || (n !== void 0 && d.has(t))) {
            ((S = !0), d.delete(t) && (ee = !0), (i.needsAnimating[t] = !0));
            let n = e.getValue(t);
            n && (n.liveStyle = !1);
          } else i.protectedKeys[t] = !0;
        }
        if (
          ((i.prevProp = _),
          (i.prevResolvedValues = w),
          i.isActive && (f = { ...f, ...w }),
          S && (!(b && x) || ee))
        )
          for (let n of C) {
            let r = { type: t };
            if (typeof n == `string` && l && c && s?.enteringChildren) {
              let t = Kt(s, n)?.transition?.delayChildren;
              r.delay = Nt(s.enteringChildren, e, t);
            }
            u.push({ animation: n, options: r });
          }
      }),
      d.size)
    ) {
      let { initial: t } = o,
        n = {},
        r = typeof t != `boolean` && Kt(e, Array.isArray(t) ? t[0] : t, e.presenceContext?.custom);
      (r && r.transition && (n.transition = r.transition),
        d.forEach((i) => {
          let a = e.getValue(i);
          a && (a.liveStyle = !0);
          let s = r && !Array.isArray(t) ? r[i] : void 0,
            c = e.getBaseTargetFromProps(o, i);
          n[i] =
            (s === void 0
              ? c !== void 0 && !Y(c)
                ? c
                : e.initialValues[i] === void 0
                  ? e.baseTarget[i]
                  : void 0
              : s) ?? null;
        }),
        u.push({ animation: n }));
    }
    let h =
      (l && e.blockInitialAnimation) || (r && !c && (o.initial === !1 || o.initial === o.animate));
    return ((r = i = !1), !h && u.length ? t(u) : Promise.resolve());
  }
  function o(t, r) {
    if (n[t].isActive === r) return Promise.resolve();
    (e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), (n[t].isActive = r));
    let i = a(t);
    for (let e in n) n[e].protectedKeys = {};
    return i;
  }
  return {
    animateChanges: a,
    setActive: o,
    setAnimateFunction: (n) => {
      t = n(e);
    },
    getState: () => n,
    reset: () => {
      ((n = li()), (i = !0));
    },
  };
}
function ci(e, t) {
  return typeof t == `string` ? t !== e : Array.isArray(t) ? !oi(t, e) : !1;
}
function li() {
  let e = {};
  for (let t of mp)
    e[t] = {
      isActive: t === `animate`,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    };
  return e;
}
function ui(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    let t = (e.parent && ui(e.parent)) || {};
    return (e.props.initial !== void 0 && (t.initial = e.props.initial), t);
  }
  let t = {};
  for (let n = 0; n < jp; n++) {
    let r = hp[n],
      i = e.props[r];
    (Gr(i) || i === !1) && (t[r] = i);
  }
  return t;
}
function di(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function k(e, t) {
  (di(e.x, t.x), di(e.y, t.y));
}
function fi(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function A(e) {
  return e.max - e.min;
}
function pi(e, t, n) {
  return Math.abs(e - t) <= n;
}
function mi(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = U(t.min, t.max, e.origin)),
    (e.scale = A(n) / A(t)),
    (e.translate = U(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Mp && e.scale <= Np) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Pp && e.translate <= Fp) || isNaN(e.translate)) && (e.translate = 0));
}
function hi(e, t, n, r) {
  (mi(e.x, t.x, n.x, r ? r.originX : void 0), mi(e.y, t.y, n.y, r ? r.originY : void 0));
}
function gi(e, t, n, r = 0) {
  ((e.min = (r ? U(n.min, n.max, r) : n.min) + t.min), (e.max = e.min + A(t)));
}
function _i(e, t, n, r) {
  (gi(e.x, t.x, n.x, r?.x), gi(e.y, t.y, n.y, r?.y));
}
function vi(e, t, n, r = 0) {
  let i = r ? U(n.min, n.max, r) : n.min;
  ((e.min = t.min - i), (e.max = e.min + A(t)));
}
function yi(e, t, n, r) {
  (vi(e.x, t.x, n.x, r?.x), vi(e.y, t.y, n.y, r?.y));
}
function bi(e, t, n, r, i) {
  return ((e -= t), (e = In(e, 1 / n, r)), i !== void 0 && (e = In(e, 1 / i, r)), e);
}
function xi(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (z.test(t) && ((t = parseFloat(t)), (t = U(o.min, o.max, t / 100) - o.min)),
    typeof t != `number`)
  )
    return;
  let s = U(a.min, a.max, r);
  (e === a && (s -= t), (e.min = bi(e.min, t, n, s, i)), (e.max = bi(e.max, t, n, s, i)));
}
function Si(e, t, [n, r, i], a, o) {
  xi(e, t[n], t[r], t[i], t.scale, a, o);
}
function Ci(e, t, n, r) {
  (Si(e.x, t, Ip, n ? n.x : void 0, r ? r.x : void 0),
    Si(e.y, t, Lp, n ? n.y : void 0, r ? r.y : void 0));
}
function wi(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ti(e) {
  return wi(e.x) && wi(e.y);
}
function Ei(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Di(e, t) {
  return Ei(e.x, t.x) && Ei(e.y, t.y);
}
function Oi(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function ki(e, t) {
  return Oi(e.x, t.x) && Oi(e.y, t.y);
}
function Ai(e) {
  return A(e.x) / A(e.y);
}
function ji(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
function j(e) {
  return [e(`x`), e(`y`)];
}
function Mi(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
function Ni(e, t, n) {
  let r = ``,
    i = e.x.translate / t.x,
    a = e.y.translate / t.y,
    o = n?.z || 0;
  if (
    ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: e,
      rotate: t,
      pathRotation: i,
      rotateX: a,
      rotateY: o,
      skewX: s,
      skewY: c,
    } = n;
    (e && (r = `perspective(${e}px) ${r}`),
      t && (r += `rotate(${t}deg) `),
      i && (r += `rotate(${i}deg) `),
      a && (r += `rotateX(${a}deg) `),
      o && (r += `rotateY(${o}deg) `),
      s && (r += `skewX(${s}deg) `),
      c && (r += `skewY(${c}deg) `));
  }
  let s = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return ((s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`);
}
function Pi(e, t, n, r, i, a) {
  i
    ? ((e.opacity = U(0, n.opacity ?? 1, Hp(r))), (e.opacityExit = U(t.opacity ?? 1, 0, Up(r))))
    : a && (e.opacity = U(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let i = 0; i < Bp; i++) {
    let a = Yd[i],
      o = Fi(t, a),
      s = Fi(n, a);
    (o !== void 0 || s !== void 0) &&
      ((o ||= 0),
      (s ||= 0),
      o === 0 || s === 0 || Vp(o) === Vp(s)
        ? ((e[a] = Math.max(U(qf(o), qf(s), r), 0)), (z.test(s) || z.test(o)) && (e[a] += `%`))
        : (e[a] = s));
  }
  (t.rotate || n.rotate) && (e.rotate = U(t.rotate || 0, n.rotate || 0, r));
}
function Fi(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t];
}
function Ii(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Qc(e, t, r)));
}
function Li(e, t, n) {
  let r = Y(e) ? e : D(e);
  return (r.start(Pd(``, r, t, n)), r.animation);
}
function Ri(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r));
}
function zi(e, t) {
  let n = R.now(),
    r = ({ timestamp: i }) => {
      let a = i - n;
      a >= t && (G(r), e(a - t));
    };
  return (W.setup(r, !0), () => G(r));
}
function Bi(e, t) {
  return zi(e, /* @__PURE__ */ F(t));
}
function Vi(e) {
  return Y(e) ? e.get() : e;
}
function Hi(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Ui(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let n = $t(t);
  if (f.MotionHasOptimisedAnimation(n, `transform`)) {
    let { layout: t, layoutId: r } = e.options;
    f.MotionCancelOptimisedAnimation(n, `transform`, W, !(t || r));
  }
  let { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Ui(r);
}
function Wi({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      ((this.id = Qp++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = /* @__PURE__ */ new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = /* @__PURE__ */ new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            Z.value && (Yp.nodes = Yp.calculatedTargetDeltas = Yp.calculatedProjections = 0),
            this.nodes.forEach(qi),
            this.nodes.forEach(ia),
            this.nodes.forEach(aa),
            this.nodes.forEach(Ji),
            Z.addProjectionMetrics && Z.addProjectionMetrics(Yp));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = /* @__PURE__ */ new Map()),
        (this.latestValues = e),
        (this.root = n ? n.root || n : this),
        (this.path = n ? [...n.path, n] : []),
        (this.parent = n),
        (this.depth = n ? n.depth + 1 : 0));
      for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Gp());
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new $c()),
        this.eventHandlers.get(e).add(t)
      );
    }
    notifyListeners(e, ...t) {
      let n = this.eventHandlers.get(e);
      n && n.notify(...t);
    }
    hasListeners(e) {
      return this.eventHandlers.has(e);
    }
    mount(t) {
      if (this.instance) return;
      ((this.isSVG = gn(t) && !hr(t)), (this.instance = t));
      let { layoutId: n, layout: r, visualElement: i } = this.options;
      if (
        (i && !i.current && i.mount(t),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0),
        e)
      ) {
        let n,
          r = 0,
          i = () => (this.root.updateBlockedByResize = !1);
        (W.read(() => {
          r = f.innerWidth;
        }),
          e(t, () => {
            let e = f.innerWidth;
            e !== r &&
              ((r = e),
              (this.root.updateBlockedByResize = !0),
              n && n(),
              (n = zi(i, 250)),
              Jp.hasAnimatedSinceResize &&
                ((Jp.hasAnimatedSinceResize = !1), this.nodes.forEach(ra)));
          }));
      }
      (n && this.root.registerSharedNode(n, this),
        this.options.animate !== !1 &&
          i &&
          (n || r) &&
          this.addEventListener(
            `didUpdate`,
            ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
              if (this.isAnimationBlocked) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              let a = this.options.transition || i.getDefaultTransition() || $p,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(),
                c = !this.targetLayout || !ki(this.targetLayout, r),
                l = !t && n;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                l ||
                (t && (c || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                let t = { ...Ft(a, `layout`), onPlay: o, onComplete: s };
                ((i.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t),
                  this.setAnimationOrigin(e, l, t.path));
              } else
                (t || ra(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = r;
            }
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
      let e = this.getStack();
      (e && e.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        G(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(oa), this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: e } = this.options;
      return e && e.getProps().transformTemplate;
    }
    willUpdate(e = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (f.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ui(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e];
        ((t.shouldResetTransform = !0),
          (typeof t.latestValues.x == `string` || typeof t.latestValues.y == `string`) &&
            (t.isLayoutDirty = !0),
          t.updateScroll(`snapshot`),
          t.options.layoutRoot && t.willUpdate(!1),
          t.isAnimationBlocked && ((t.dragSnapshot ||= t.measure()), (this.dragAncestor = t)));
      }
      let { layoutId: t, layout: n } = this.options;
      if (t === void 0 && !n) return;
      let r = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = r ? r(this.latestValues, ``) : void 0),
        this.updateSnapshot(),
        e && this.notifyListeners(`willUpdate`));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        let e = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          e && this.nodes.forEach(Zi),
          this.nodes.forEach(Xi));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Qi);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(ea),
            this.nodes.forEach(ta),
            this.nodes.forEach(na),
            this.nodes.forEach(Gi),
            this.nodes.forEach(Ki))
          : this.nodes.forEach(Qi),
        this.clearAllSnapshots());
      let e = R.now();
      ((L.delta = M(0, 1e3 / 60, e - L.timestamp)),
        (L.timestamp = e),
        (L.isProcessing = !0),
        du.update.process(L),
        du.preRender.process(L),
        du.render.process(L),
        (L.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), Of.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Yi), this.sharedNodes.forEach(sa));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), W.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      W.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      !this.snapshot &&
        this.instance &&
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !A(this.snapshot.measuredBox.x) &&
          !A(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
      let e = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected ||= Q()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners(`measure`, this.layout.layoutBox));
      let { visualElement: t } = this.options;
      t && t.notify(`LayoutMeasure`, this.layout.layoutBox, e ? e.layoutBox : void 0);
    }
    updateScroll(e = `measure`) {
      let t = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === e &&
          (t = !1),
        t && this.instance)
      ) {
        let t = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: e,
          isRoot: t,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : t,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        t = this.projectionDelta && !Ti(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, ``) : void 0,
        a = r !== this.prevTransformTemplateValue;
      e &&
        this.instance &&
        (t || Nn(this.latestValues) || a) &&
        (i(this.instance, r), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t);
      return (
        e && (n = this.removeTransform(n)),
        pa(n),
        {
          animationId: this.root.animationId,
          measuredBox: t,
          layoutBox: n,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: e } = this.options;
      if (!e) return Q();
      let t = e.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(ha))) {
        let { scroll: e } = this.root;
        e && (O(t.x, e.offset.x), O(t.y, e.offset.y));
      }
      return t;
    }
    removeElementScroll(e) {
      let t = Q();
      if ((k(t, e), this.scroll?.wasRoot)) return t;
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n],
          { scroll: i, options: a } = r;
        r !== this.root &&
          i &&
          a.layoutScroll &&
          (i.wasRoot && k(t, e), O(t.x, i.offset.x), O(t.y, i.offset.y));
      }
      return t;
    }
    applyTransform(e, t = !1, n) {
      let r = n || Q();
      k(r, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        (!t &&
          n.options.layoutScroll &&
          n.scroll &&
          n !== n.root &&
          (O(r.x, -n.scroll.offset.x), O(r.y, -n.scroll.offset.y)),
          Nn(n.latestValues) && Un(r, n.latestValues, n.layout?.layoutBox));
      }
      return (Nn(this.latestValues) && Un(r, this.latestValues, this.layout?.layoutBox), r);
    }
    removeTransform(e) {
      let t = Q();
      k(t, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        if (!Nn(n.latestValues)) continue;
        let r;
        (n.instance &&
          (Mn(n.latestValues) && n.updateSnapshot(), (r = Q()), k(r, n.measurePageBox())),
          Ci(t, n.latestValues, n.snapshot?.layoutBox, r));
      }
      return (Nn(this.latestValues) && Ci(t, this.latestValues), t);
    }
    setTargetDelta(e) {
      ((this.targetDelta = e), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
    }
    setOptions(e) {
      this.options = { ...this.options, ...e, crossfade: e.crossfade === void 0 || e.crossfade };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== L.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(e = !1) {
      let t = this.getLead();
      ((this.isProjectionDirty ||= t.isProjectionDirty),
        (this.isTransformDirty ||= t.isTransformDirty),
        (this.isSharedProjectionDirty ||= t.isSharedProjectionDirty));
      let n = !!this.resumingFrom || this !== t;
      if (
        !(
          e ||
          (n && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (!this.layout || !(r || i)) return;
      this.resolvedRelativeTargetAt = L.timestamp;
      let a = this.getClosestProjectingParent();
      (!this.targetDelta &&
        !this.relativeTarget &&
        (this.options.layoutAnchor !== !1 && a && a.layout
          ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox)
          : this.removeRelativeTarget()),
        (this.relativeTarget || this.targetDelta) &&
          (this.target || ((this.target = Q()), (this.targetWithTransforms = Q())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              _i(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : k(this.target, this.layout.layoutBox),
                zn(this.target, this.targetDelta))
              : k(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            a &&
            !!a.resumingFrom == !!this.resumingFrom &&
            !a.options.layoutScroll &&
            a.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(a, this.target, a.target)
              : (this.relativeParent = this.relativeTarget = void 0)),
          Z.value && Yp.calculatedTargetDeltas++));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Mn(this.parent.latestValues) || Pn(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(e, t, n) {
      ((this.relativeParent = e),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Q()),
        (this.relativeTargetOrigin = Q()),
        yi(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0),
        k(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      let e = this.getLead(),
        t = !!this.resumingFrom || this !== e,
        n = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1),
        t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1),
        this.resolvedRelativeTargetAt === L.timestamp && (n = !1),
        n)
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(r || i))
      )
        return;
      k(this.layoutCorrected, this.layout.layoutBox);
      let a = this.treeScale.x,
        o = this.treeScale.y;
      (Bn(this.layoutCorrected, this.treeScale, this.path, t),
        e.layout &&
          !e.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((e.target = e.layout.layoutBox), (e.targetWithTransforms = Q())));
      let { target: s } = e;
      s
        ? (!this.projectionDelta || !this.prevProjectionDelta
            ? this.createProjectionDeltas()
            : (fi(this.prevProjectionDelta.x, this.projectionDelta.x),
              fi(this.prevProjectionDelta.y, this.projectionDelta.y)),
          hi(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
          (this.treeScale.x !== a ||
            this.treeScale.y !== o ||
            !ji(this.projectionDelta.x, this.prevProjectionDelta.x) ||
            !ji(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
            ((this.hasProjected = !0),
            this.scheduleRender(),
            this.notifyListeners(`projectionUpdate`, s)),
          Z.value && Yp.calculatedProjections++)
        : this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(e = !0) {
      if ((this.options.visualElement?.scheduleRender(), e)) {
        let e = this.getStack();
        e && e.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = dp()),
        (this.projectionDelta = dp()),
        (this.projectionDeltaWithTransform = dp()));
    }
    setAnimationOrigin(e, t = !1, n) {
      let r = this.snapshot,
        i = r ? r.latestValues : {},
        a = { ...this.latestValues },
        o = dp();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t));
      let s = Q(),
        c = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0),
        l = this.getStack(),
        u = !l || l.members.length <= 1,
        d = !(!c || u || this.options.crossfade !== !0 || this.path.some(da));
      this.animationProgress = 0;
      let f,
        p = n?.interpolateProjection(e);
      ((this.mixTargetDelta = (t) => {
        let n = t / 1e3,
          r = p?.(n);
        (r
          ? ((o.x.translate = r.x),
            (o.x.scale = U(e.x.scale, 1, n)),
            (o.x.origin = e.x.origin),
            (o.x.originPoint = e.x.originPoint),
            (o.y.translate = r.y),
            (o.y.scale = U(e.y.scale, 1, n)),
            (o.y.origin = e.y.origin),
            (o.y.originPoint = e.y.originPoint))
          : (ca(o.x, e.x, n), ca(o.y, e.y, n)),
          this.setTargetDelta(o),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (yi(
              s,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0
            ),
            ua(this.relativeTarget, this.relativeTargetOrigin, s, n),
            f && Di(this.relativeTarget, f) && (this.isProjectionDirty = !1),
            (f ||= Q()),
            k(f, this.relativeTarget)),
          c && ((this.animationValues = a), Pi(a, i, this.latestValues, n, d, u)),
          r &&
            r.rotate !== void 0 &&
            ((this.animationValues ||= a), (this.animationValues.pathRotation = r.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = n));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(e) {
      (this.notifyListeners(`animationStart`),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        (this.pendingAnimation &&= (G(this.pendingAnimation), void 0)),
        (this.pendingAnimation = W.update(() => {
          ((Jp.hasAnimatedSinceResize = !0),
            (this.motionValue ||= D(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = Li(this.motionValue, [0, 1e3], {
              ...e,
              velocity: 0,
              isSync: !0,
              onUpdate: (t) => {
                (this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t));
              },
              onComplete: () => {
                (e.onComplete && e.onComplete(), this.completeAnimation());
              },
            })),
            it(this.currentAnimation, this),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let e = this.getStack();
      (e && e.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners(`animationComplete`));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Zp), this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        { targetWithTransforms: t, layout: n, latestValues: r } = e,
        { target: i } = e;
      if (t && i && n) {
        if (
          this !== e &&
          this.layout &&
          n &&
          ma(this.options.animationType, this.layout.layoutBox, n.layoutBox)
        ) {
          i = this.target || Q();
          let t = A(this.layout.layoutBox.x);
          ((i.x.min = e.target.x.min), (i.x.max = i.x.min + t));
          let n = A(this.layout.layoutBox.y);
          ((i.y.min = e.target.y.min), (i.y.max = i.y.min + n));
        }
        (k(t, i), Un(t, r), hi(this.projectionDeltaWithTransform, this.layoutCorrected, t, r));
      }
    }
    registerSharedNode(e, t) {
      (this.sharedNodes.has(e) || this.sharedNodes.set(e, new Kp()),
        this.sharedNodes.get(e).add(t));
      let n = t.options.initialPromotionConfig;
      t.promote({
        transition: n ? n.transition : void 0,
        preserveFollowOpacity:
          n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0,
      });
    }
    isLead() {
      let e = this.getStack();
      return !e || e.lead === this;
    }
    getLead() {
      let { layoutId: e } = this.options;
      return (e && this.getStack()?.lead) || this;
    }
    getPrevLead() {
      let { layoutId: e } = this.options;
      return e ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let { layoutId: e } = this.options;
      if (e) return this.root.sharedNodes.get(e);
    }
    promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
      let r = this.getStack();
      (r && r.promote(this, n),
        e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        t && this.setOptions({ transition: t }));
    }
    relegate() {
      let e = this.getStack();
      return e ? e.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: e } = this.options;
      if (!e) return;
      let t = !1,
        { latestValues: n } = e;
      if (
        ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0),
        !t)
      )
        return;
      let r = {};
      n.z && Hi(`z`, e, r, this.animationValues);
      for (let t = 0; t < Xp.length; t++)
        (Hi(`rotate${Xp[t]}`, e, r, this.animationValues),
          Hi(`skew${Xp[t]}`, e, r, this.animationValues));
      e.render();
      for (let t in r)
        (e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]));
      e.scheduleRender();
    }
    applyProjectionStyles(e, t) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        e.visibility = `hidden`;
        return;
      }
      let n = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (e.visibility = ``),
          (e.opacity = ``),
          (e.pointerEvents = Vi(t?.pointerEvents) || ``),
          (e.transform = n ? n(this.latestValues, ``) : `none`));
        return;
      }
      let r = this.getLead();
      if (!this.projectionDelta || !this.layout || !r.target) {
        (this.options.layoutId &&
          ((e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity),
          (e.pointerEvents = Vi(t?.pointerEvents) || ``)),
          this.hasProjected &&
            !Nn(this.latestValues) &&
            ((e.transform = n ? n({}, ``) : `none`), (this.hasProjected = !1)));
        return;
      }
      e.visibility = ``;
      let i = r.animationValues || r.latestValues;
      this.applyTransformsToTarget();
      let a = Ni(this.projectionDeltaWithTransform, this.treeScale, i);
      (n && (a = n(i, a)), (e.transform = a));
      let { x: o, y: s } = this.projectionDelta;
      ((e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`),
        (e.opacity = r.animationValues
          ? r === this
            ? (i.opacity ?? this.latestValues.opacity ?? 1)
            : this.preserveOpacity
              ? this.latestValues.opacity
              : i.opacityExit
          : r === this
            ? i.opacity === void 0
              ? ``
              : i.opacity
            : i.opacityExit === void 0
              ? 0
              : i.opacityExit));
      for (let t in wp) {
        if (i[t] === void 0) continue;
        let { correct: n, applyTo: o, isCSSVariable: s } = wp[t],
          c = a === `none` ? i[t] : n(i[t], r);
        if (o) {
          let t = o.length;
          for (let n = 0; n < t; n++) e[o[n]] = c;
        } else s ? (this.options.visualElement.renderState.vars[t] = c) : (e[t] = c);
      }
      this.options.layoutId && (e.pointerEvents = r === this ? Vi(t?.pointerEvents) || `` : `none`);
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
        this.root.nodes.forEach(Xi),
        this.root.sharedNodes.clear());
    }
  };
}
function Gi(e) {
  (e.updateLayout(), $i(e));
}
function Ki(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
    let { layoutBox: n, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      a = t.source !== e.layout.source;
    if (i === `size`)
      j((e) => {
        let r = a ? t.measuredBox[e] : t.layoutBox[e],
          i = A(r);
        ((r.min = n[e].min), (r.max = r.min + i));
      });
    else if (i === `x` || i === `y`) {
      let e = i === `x` ? `y` : `x`;
      di(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
    } else
      ma(i, t.layoutBox, n) &&
        j((r) => {
          let i = a ? t.measuredBox[r] : t.layoutBox[r],
            o = A(n[r]);
          ((i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[r].max = e.relativeTarget[r].min + o)));
        });
    let o = dp();
    hi(o, n, t.layoutBox);
    let s = dp();
    a ? hi(s, e.applyTransform(r, !0), t.measuredBox) : hi(s, n, t.layoutBox);
    let c = !Ti(o),
      l = !1;
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent();
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r;
        if (i && a) {
          let o = e.options.layoutAnchor || void 0,
            s = Q();
          yi(s, t.layoutBox, i.layoutBox, o);
          let c = Q();
          (yi(c, n, a.layoutBox, o),
            ki(s, c) || (l = !0),
            r.options.layoutRoot &&
              ((e.relativeTarget = c), (e.relativeTargetOrigin = s), (e.relativeParent = r)));
        }
      }
    }
    e.notifyListeners(`didUpdate`, {
      layout: n,
      snapshot: t,
      delta: s,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: l,
    });
  } else if (e.isLead()) {
    let { onExitComplete: t } = e.options;
    t && t();
  }
  e.options.transition = void 0;
}
function qi(e) {
  (Z.value && Yp.nodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      (e.isSharedProjectionDirty ||= !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      (e.isTransformDirty ||= e.parent.isTransformDirty)));
}
function Ji(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Yi(e) {
  e.clearSnapshot();
}
function Xi(e) {
  e.clearMeasurements();
}
function Zi(e) {
  ((e.isLayoutDirty = !0), e.updateLayout());
}
function Qi(e) {
  e.isLayoutDirty = !1;
}
function $i(e) {
  let { snapshot: t, dragAncestor: n } = e,
    r = n?.layout;
  if (!t || !r || e.resumeFrom || e.isAnimationBlocked) return;
  let i = n.dragSnapshot;
  j((e) => O(t.layoutBox[e], r.layoutBox[e].min - i.layoutBox[e].min));
}
function ea(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.dragSnapshot || e.layout), (e.isLayoutDirty = !0));
}
function ta(e) {
  e.relativeTarget &&
    e.relativeParent?.isLayoutDirty &&
    (e.currentAnimation
      ? (e.isLayoutDirty = !0)
      : ((e.targetDelta = void 0), e.removeRelativeTarget()));
}
function na(e) {
  let { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`), e.resetTransform());
}
function ra(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function ia(e) {
  e.resolveTargetDelta();
}
function aa(e) {
  e.calcProjection();
}
function oa(e) {
  e.resetSkewAndRotation();
}
function sa(e) {
  e.removeLeadSnapshot();
}
function ca(e, t, n) {
  ((e.translate = U(t.translate, 0, n)),
    (e.scale = U(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function la(e, t, n, r) {
  ((e.min = U(t.min, n.min, r)), (e.max = U(t.max, n.max, r)));
}
function ua(e, t, n, r) {
  (la(e.x, t.x, n.x, r), la(e.y, t.y, n.y, r));
}
function da(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
function fa(e) {
  ((e.min = tm(e.min)), (e.max = tm(e.max)));
}
function pa(e) {
  (fa(e.x), fa(e.y));
}
function ma(e, t, n) {
  return e === `position` || (e === `preserve-aspect` && !pi(Ai(t), Ai(n), 0.2));
}
function ha(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
function ga() {
  let e = /* @__PURE__ */ new Set(),
    t = /* @__PURE__ */ new WeakMap(),
    n = () => e.forEach(rm);
  return {
    add: (r) => {
      (e.add(r), t.set(r, r.addEventListener(`willUpdate`, n)));
    },
    remove: (r) => {
      e.delete(r);
      let i = t.get(r);
      (i && (i(), t.delete(r)), n());
    },
    dirty: n,
  };
}
function _a(e) {
  let t = [];
  return (
    e instanceof HTMLElement && e.matches(om) && t.push(e),
    e.querySelectorAll(om).forEach((e) => {
      e instanceof HTMLElement && t.push(e);
    }),
    t
  );
}
function va() {
  if (L.isProcessing) return;
  let e = R.now();
  ((L.delta = M(0, 1e3 / 60, e - L.timestamp)),
    (L.timestamp = e),
    (L.isProcessing = !0),
    du.update.process(L),
    du.preRender.process(L),
    du.render.process(L),
    (L.isProcessing = !1));
}
function ya(e) {
  let t = e.parentElement;
  for (; t; ) {
    let e = sm.get(t);
    if (e && e.instance) return e;
    t = t.parentElement;
  }
}
function ba() {
  return new Tp(
    {
      props: {},
      presenceContext: null,
      visualState: {
        latestValues: {},
        renderState: { transform: {}, transformOrigin: {}, style: {}, vars: {} },
      },
    },
    { allowProjection: !0 }
  );
}
function xa(e, t) {
  let n = e.getAttribute(`data-layout`);
  return {
    layoutId: e.getAttribute(`data-layout-id`) ?? void 0,
    layout: n !== null || void 0,
    animationType: !n || n === `true` ? `both` : n,
    transition: t,
  };
}
function Sa(e, t) {
  let n = sm.get(e);
  if (n) n.setOptions(xa(e, t));
  else {
    let r = pp.get(e);
    (r || ((r = ba()), qn(e, r)),
      e.style.transform && !Nn(r.latestValues) && (e.style.transform = ``),
      (n = new am(r.latestValues, ya(e))),
      (r.projection = n),
      n.setOptions({ ...xa(e, t), visualElement: r }),
      n.mount(e),
      sm.set(e, n));
  }
  return (
    (n.isPresent = !0),
    n.options.onExitComplete && n.setOptions({ onExitComplete: void 0 }),
    n
  );
}
function Ca(e) {
  return [...e].sort((e, t) =>
    e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
  );
}
function wa(e, t) {
  (t.setOptions({ onExitComplete: void 0 }),
    (!t.getStack() || t.isLead()) && t.currentAnimation?.stop(),
    t.unmount(),
    sm.delete(e));
}
function Ta() {
  let e = cm;
  ((cm = void 0), va());
  let t = /* @__PURE__ */ new Map();
  for (let n of e)
    for (let e of n.collectTargets()) {
      let r = t.get(e);
      r ? r.push(n) : t.set(e, [n]);
    }
  let n = /* @__PURE__ */ new Map();
  for (let e of Ca(t.keys())) {
    let r = t.get(e),
      i = Sa(e, r[r.length - 1].transitionFor(e));
    for (let t of r) t.adopt(e, i);
    n.set(e, i);
  }
  n.forEach((e) => {
    ((e.isLayoutDirty = !1), e.willUpdate());
  });
  let r = [];
  for (let t of e) {
    let e = t.runUpdate();
    e && r.push(e);
  }
  let i = () => {
    let t = /* @__PURE__ */ new Set();
    for (let n of e) n.reconcileAdditions(t);
    for (let n of e) n.reconcileRemovals(t);
    let r;
    n.forEach((e) => (r ||= e.root));
    for (let t of e) r ||= t.getRoot();
    (r?.didUpdate(),
      Of.render(() => {
        for (let t of e) t.finalize();
      }));
  };
  r.length ? Promise.all(r).then(i) : i();
}
function Ea(e, t, n) {
  return typeof e == `function`
    ? { scope: document, updateDom: e, defaultOptions: t }
    : {
        scope: e instanceof Document ? e : (_n(e)[0] ?? document),
        updateDom: t,
        defaultOptions: n,
      };
}
function Da(e, t, n) {
  let { scope: r, updateDom: i, defaultOptions: a } = Ea(e, t, n);
  return new lm(r, i, a);
}
function Oa(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function ka(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = Oa(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : Oa(e[t], null);
        }
      };
  };
}
function Aa(...e) {
  return s(ka(...e), e);
}
function ja({ children: e, isPresent: t, anchorX: i, anchorY: a, root: s, pop: c }) {
  let u = r(),
    f = d(null),
    p = d({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0, direction: `ltr` }),
    { nonce: m } = l($),
    h = Aa(f, c === !1 ? void 0 : (e.props?.ref ?? e?.ref));
  return (
    o(() => {
      let { width: e, height: n, top: r, left: o, right: l, bottom: d, direction: h } = p.current;
      if (t || c === !1 || !f.current || !e || !n) return;
      let g = h === `rtl`,
        _ = i === `left` ? (g ? `right: ${l}` : `left: ${o}`) : g ? `left: ${o}` : `right: ${l}`,
        v = a === `bottom` ? `bottom: ${d}` : `top: ${r}`,
        y = f.current;
      y.dataset.motionPopId = u;
      let b = y.ownerDocument,
        x = b.createElement(`style`);
      m && (x.nonce = m);
      let S = s ?? b.head;
      return (
        S.appendChild(x),
        x.sheet &&
          x.sheet.insertRule(`
          [data-motion-pop-id="${u}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),
        () => {
          (f.current?.removeAttribute(`data-motion-pop-id`), S.contains(x) && S.removeChild(x));
        }
      );
    }, [t]),
    S(fm, {
      isPresent: t,
      childRef: f,
      sizeRef: p,
      pop: c,
      children: c === !1 ? e : n(e, { ref: h }),
    })
  );
}
function Ma() {
  return /* @__PURE__ */ new Map();
}
function Na(e = !0) {
  let t = l(Gc);
  if (t === null) return [!0, null];
  let { isPresent: n, onExitComplete: i, register: a } = t,
    o = r();
  C(() => {
    if (e) return a(o);
  }, [e]);
  let c = s(() => e && i && i(o), [o, i, e]);
  return !n && i ? [!1, c] : [!0];
}
function Pa() {
  return Fa(l(Gc));
}
function Fa(e) {
  return e === null || e.isPresent;
}
function Ia(e) {
  let t = [];
  return (
    v.forEach(e, (e) => {
      _(e) && t.push(e);
    }),
    t
  );
}
function La() {
  let e = d(!1);
  return (
    Wc(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function Ra() {
  let e = La(),
    [t, n] = w(0),
    r = s(() => {
      e.current && n(t + 1);
    }, [t]);
  return [s(() => W.postRender(r), [r]), t];
}
function za() {
  if (Sm) return;
  let e = {};
  for (let t in xm) e[t] = { isEnabled: (e) => xm[t].some((t) => !!e[t]) };
  (Xr(e), (Sm = !0));
}
function Ba() {
  return (za(), Zr());
}
function Va(e) {
  let t = Ba();
  for (let n in e) t[n] = { ...t[n], ...e[n] };
  Xr(t);
}
function Ha({ children: e, features: t, strict: n = !1 }) {
  let [, r] = w(!Ua(t)),
    i = d(void 0);
  if (!Ua(t)) {
    let { renderer: e, ...n } = t;
    ((i.current = e), Va(n));
  }
  return (
    C(() => {
      Ua(t) &&
        t().then(({ renderer: e, ...t }) => {
          (Va(t), (i.current = e), r(!0));
        });
    }, []),
    S(bm.Provider, { value: { renderer: i.current, strict: n }, children: e })
  );
}
function Ua(e) {
  return typeof e == `function`;
}
function Wa({ children: e, ...t }) {
  let n = l($);
  ((t = { ...n, ...t }),
    (t.transition = Pt(t.transition, n.transition)),
    (t.isStatic = T(() => t.isStatic)));
  let r = i(
    () => t,
    [
      JSON.stringify(t.transition),
      t.transformPagePoint,
      t.reducedMotion,
      t.skipAnimations,
      t.isValidProp,
    ]
  );
  return S($.Provider, { value: r, children: e });
}
function Ga(e, t) {
  if (Kr(e)) {
    let { initial: t, animate: n } = e;
    return { initial: t === !1 || Gr(t) ? t : void 0, animate: Gr(n) ? n : void 0 };
  }
  return e.inherit === !1 ? {} : t;
}
function Ka(e) {
  let { initial: t, animate: n } = Ga(e, l(Cm));
  return i(() => ({ initial: t, animate: n }), [qa(t), qa(n)]);
}
function qa(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
function Ja(e, t, n) {
  for (let r in t) !Y(t[r]) && !ei(r, n) && (e[r] = t[r]);
}
function Ya({ transformTemplate: e }, t) {
  return i(() => {
    let n = wm();
    return (Sn(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function Xa(e, t) {
  let n = e.style || {},
    r = {};
  return (Ja(r, n, e), Object.assign(r, Ya(e, t)), r);
}
function Za(e, t) {
  let n = {},
    r = Xa(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`),
      (r.touchAction = e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`)),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function Qa(e, t, n, r) {
  let a = i(() => {
    let n = Tm();
    return (wn(n, t, Op(r), e.transformTemplate, e.style), { ...n.attrs, style: { ...n.style } });
  }, [t]);
  if (e.style) {
    let t = {};
    (Ja(t, e.style, e), (a.style = { ...t, ...a.style }));
  }
  return a;
}
function $a(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    Em.has(e)
  );
}
function eo(e, t) {
  return e.startsWith(`on`) ? !$a(e) : (t?.(e) ?? !$a(e));
}
function to(e, t, n, r) {
  let i = {};
  for (let a in e)
    (a !== `values` || typeof e.values != `object`) &&
      (Y(e[a]) ||
        ((eo(a, r) ||
          (n === !0 && $a(a)) ||
          (!t && !$a(a)) ||
          (e.draggable && a.startsWith(`onDrag`))) &&
          (i[a] = e[a])));
  return i;
}
function no(e) {
  return typeof e != `string` || e.includes(`-`) ? !1 : !!(Dm.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function ro(e, t, n, { latestValues: r }, a, o = !1, s, c) {
  let l = ((s ?? no(e)) ? Qa : Za)(t, r, a, e),
    d = to(t, typeof e == `string`, o, c),
    f = e === u ? {} : { ...d, ...l, ref: n },
    { children: p } = t,
    m = i(() => (Y(p) ? p.get() : p), [p]);
  return g(e, { ...f, children: m });
}
function io({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: ao(n, r, i, e), renderState: t() };
}
function ao(e, t, n, r) {
  let i = {},
    a = r(e, {});
  for (let e in a) i[e] = Vi(a[e]);
  let { initial: o, animate: s } = e,
    c = Kr(e),
    l = qr(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let u = n ? n.initial === !1 : !1;
  u ||= o === !1;
  let d = u ? s : o;
  if (d && typeof d != `boolean` && !Wr(d)) {
    let t = Array.isArray(d) ? d : [d];
    for (let n = 0; n < t.length; n++) {
      let r = Gt(e, t[n]);
      if (r) {
        let { transitionEnd: e, transition: t, ...n } = r;
        for (let e in n) {
          let t = n[e];
          if (Array.isArray(t)) {
            let e = u ? t.length - 1 : 0;
            t = t[e];
          }
          t !== null && (i[e] = t);
        }
        for (let t in e) i[t] = e[t];
      }
    }
  }
  return i;
}
function oo(e, t, n) {
  let r = d(n);
  o(() => {
    r.current = n;
  });
  let i = d(null);
  return s(
    (n) => {
      (n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount()));
      let a = r.current;
      if (typeof a == `function`) {
        if (n) {
          let e = a(n);
          typeof e == `function` && (i.current = e);
        } else i.current ? (i.current(), (i.current = null)) : a(n);
      } else a && (a.current = n);
    },
    [t]
  );
}
function so(e) {
  return e && typeof e == `object` && Object.prototype.hasOwnProperty.call(e, `current`);
}
function co(e, t, n, r, i, a) {
  let { visualElement: s } = l(Cm),
    c = l(bm),
    u = l(Gc),
    p = l($),
    m = p.reducedMotion,
    h = p.skipAnimations,
    g = d(null),
    _ = d(!1);
  ((r ||= c.renderer),
    !g.current &&
      r &&
      ((g.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: m,
        skipAnimations: h,
        isSVG: a,
      })),
      _.current && g.current && (g.current.manuallyAnimateOnMount = !0)));
  let v = g.current,
    y = l(Mm);
  v && !v.projection && i && (v.type === `html` || v.type === `svg`) && lo(g.current, n, i, y);
  let b = d(!1);
  o(() => {
    v && b.current && v.update(n, u);
  });
  let x = n[Vd],
    S = d(
      !!x && f !== void 0 && !f.MotionHandoffIsComplete?.(x) && f.MotionHasOptimisedAnimation?.(x)
    );
  return (
    Wc(() => {
      _.current && v && (v.animationState?.animateChanges(), (v.enteringChildren = void 0));
    }, []),
    Wc(() => {
      ((_.current = !0),
        v &&
          ((b.current = !0),
          (f.MotionIsMounted = !0),
          v.updateFeatures(),
          v.scheduleRenderMicrotask(),
          S.current && v.animationState && v.animationState.animateChanges()));
    }),
    C(() => {
      v &&
        (!S.current && v.animationState && v.animationState.animateChanges(),
        (S.current &&=
          (queueMicrotask(() => {
            f.MotionHandoffMarkAsComplete?.(x);
          }),
          !1)),
        (v.enteringChildren = void 0));
    }),
    v
  );
}
function lo(e, t, n, r) {
  let {
    layoutId: i,
    layout: a,
    drag: o,
    dragConstraints: s,
    layoutScroll: c,
    layoutRoot: l,
    layoutAnchor: u,
    layoutCrossfade: d,
  } = t;
  ((e.projection = new n(e.latestValues, t[`data-framer-portal-id`] ? void 0 : uo(e.parent))),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && so(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      crossfade: d,
      layoutScroll: c,
      layoutRoot: l,
      layoutAnchor: u,
    }));
}
function uo(e) {
  if (e) return e.options.allowProjection === !1 ? uo(e.parent) : e.projection;
}
function fo(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  r && Va(r);
  let a = n ? n === `svg` : no(e),
    o = a ? Am : km;
  function s(n, s) {
    let c,
      u = { ...l($), ...n, layoutId: po(n) },
      { isStatic: d, isValidProp: p } = u,
      m = Ka(n),
      h = o(n, d);
    if (!d && f !== void 0) {
      mo(u, r);
      let t = ho(u);
      ((c = t.MeasureLayout), (m.visualElement = co(e, h, u, i, t.ProjectionNode, a)));
    }
    return ee(Cm.Provider, {
      value: m,
      children: [
        c && m.visualElement ? S(c, { visualElement: m.visualElement, ...u }) : null,
        ro(e, n, oo(h, m.visualElement, s), h, d, t, a, p),
      ],
    });
  }
  s.displayName = `motion.${typeof e == `string` ? e : `create(${e.displayName ?? e.name ?? ``})`}`;
  let c = b(s);
  return ((c[jm] = e), c);
}
function po({ layoutId: e }) {
  let t = l(Hc).id;
  return t && e !== void 0 ? t + `-` + e : e;
}
function mo(e, t) {
  l(bm).strict;
}
function ho(e) {
  let { drag: t, layout: n } = Ba();
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function go(e, t) {
  if (typeof Proxy > `u`) return fo;
  let n = /* @__PURE__ */ new Map(),
    r = (n, r) => fo(n, r, e, t);
  return new Proxy((e, t) => r(e, t), {
    get: (i, a) => (a === `create` ? r : (n.has(a) || n.set(a, fo(a, void 0, e, t)), n.get(a))),
  });
}
function _o(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
function vo(e, t, n, r) {
  return Ri(e, t, zm(n), r);
}
function yo(e, t) {
  let n = Vm(e.x, t.x),
    r = Vm(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
function bo(e, t) {
  return t ? { point: t(e.point) } : e;
}
function xo(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function So({ point: e }, t) {
  return { point: e, delta: xo(e, wo(t)), offset: xo(e, Co(t)), velocity: To(t, 0.1) };
}
function Co(e) {
  return e[0];
}
function wo(e) {
  return e[e.length - 1];
}
function To(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = wo(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > /* @__PURE__ */ F(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] && e.length > 2 && i.timestamp - r.timestamp > /* @__PURE__ */ F(t) * 2 && (r = e[1]);
  let a = /* @__PURE__ */ I(i.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  let o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function Eo(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? U(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? U(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Do(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min),
  };
}
function Oo(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Do(e.x, n, i), y: Do(e.y, t, r) };
}
function ko(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r });
}
function Ao(e, t) {
  return { x: ko(e.x, t.x), y: ko(e.y, t.y) };
}
function jo(e, t) {
  let n = 0.5,
    r = A(e),
    i = A(t);
  return (
    i > r
      ? (n = /* @__PURE__ */ Qc(t.min, t.max - r, e.min))
      : r > i && (n = /* @__PURE__ */ Qc(e.min, e.max - i, t.min)),
    M(0, 1, n)
  );
}
function Mo(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
function No(e = Wm) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Wm),
    { x: Po(e, `left`, `right`), y: Po(e, `top`, `bottom`) }
  );
}
function Po(e, t, n) {
  return { min: Fo(e, t), max: Fo(e, n) };
}
function Fo(e, t) {
  return typeof e == `number` ? e : e[t] || 0;
}
function Io(e) {
  let t = !0;
  return () => {
    t ? (t = !1) : e();
  };
}
function Lo(e, t, n) {
  let r = fr(e, Io(n)),
    i = fr(t, Io(n));
  return () => {
    (r(), i());
  };
}
function Ro(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function zo(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = `y`) : Math.abs(e.x) > t && (n = `x`), n);
}
function Bo(e) {
  let [t, n] = Na(),
    r = l(Hc);
  return S(Zm, { ...e, layoutGroup: r, switchLayoutGroup: l(Mm), isPresent: t, safeToRemove: n });
}
function Vo(e, t, n) {
  let { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive(`whileHover`, n === `Start`);
  let i = r[`onHover` + n];
  i && W.postRender(() => i(t, _o(t)));
}
function Ho(e, t, n) {
  let { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState && r.whileTap && e.animationState.setActive(`whileTap`, n === `Start`);
  let i = r[`onTap` + (n === `End` ? `` : n)];
  i && W.postRender(() => i(t, _o(t)));
}
function Uo({ root: e, ...t }) {
  let n = e || document;
  rh.has(n) || rh.set(n, {});
  let r = rh.get(n),
    i = JSON.stringify(t);
  return (r[i] || (r[i] = new IntersectionObserver(ah, { root: e, ...t })), r[i]);
}
function Wo(e, t, n) {
  let r = Uo(t);
  return (
    nh.set(e, n),
    r.observe(e),
    () => {
      (nh.delete(e), r.unobserve(e));
    }
  );
}
function Go({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
function Ko(e) {
  return C(() => () => e(), []);
}
function qo(e, t, n) {
  o(() => e.on(t, n), [e, t, n]);
}
function Jo(e, t) {
  let n = e === document.scrollingElement,
    r = (n && document.body) || e,
    i = vh.get(r);
  i || vh.set(r, (i = getComputedStyle(r)));
  let { writingMode: a, flexDirection: o } = i,
    s = (t === `x`) !== /^[vs]/.test(a);
  return (
    (s ? (i.direction === `rtl`) != (a === `sideways-lr`) : a.endsWith(`rl`)) !==
    (!n &&
      i.display.includes(`flex`) &&
      (s === (o[0] === `c`) ? i.flexWrap : o).endsWith(`reverse`))
  );
}
function Yo(e, t, n, r) {
  let i = n[t],
    { length: a, position: o } = _h[t],
    s = i.current,
    c = n.time,
    l = e[`scroll${o}`];
  ((i.current = Jo(e, t) ? -l || 0 : l),
    (i.containerLength = e[`client${a}`]),
    (i.targetLength = e[`scroll${a}`]),
    (i.scrollLength = i.targetLength - i.containerLength),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = M(0, 1, /* @__PURE__ */ Qc(0, i.scrollLength, i.current))));
  let u = r - c;
  i.velocity = u > mh ? 0 : /* @__PURE__ */ el(i.current - s, u);
}
function Xo(e, t, n) {
  for (let r in _h) Yo(e, r, t, n);
  t.time = n;
}
function Zo(e, t, n = 0) {
  let r = 0;
  if ((e in yh && (e = yh[e]), typeof e == `string`)) {
    let t = parseFloat(e);
    e.endsWith(`px`)
      ? (r = t)
      : e.endsWith(`%`)
        ? (e = t / 100)
        : e.endsWith(`vw`)
          ? (r = (t / 100) * document.documentElement.clientWidth)
          : e.endsWith(`vh`)
            ? (r = (t / 100) * document.documentElement.clientHeight)
            : (e = t);
  }
  return (typeof e == `number` && (r = t * e), n + r);
}
function Qo(e, t, n, r) {
  let i = Array.isArray(e) ? e : bh,
    a = 0,
    o = 0;
  return (
    typeof e == `number`
      ? (i = [e, e])
      : typeof e == `string` &&
        ((e = e.trim()), (i = e.includes(` `) ? e.split(` `) : [e, yh[e] ? e : `0`])),
    (a = Zo(i[0], n, r)),
    (o = Zo(i[1], t)),
    a - o
  );
}
function $o(e, t) {
  let n = e.length - 1;
  if (n < 1) return 0;
  let r = e[0] > e[n],
    i = (t) => e[r ? n - t : t];
  if (e[0] === e[1] && t < i(0)) return +!!r;
  let a = 0;
  for (; a < n - 1 && t >= i(a + 1); ) a++;
  let o = (a + /* @__PURE__ */ Qc(i(a), i(a + 1), t)) / n;
  return r ? 1 - o : o;
}
function es(e, t) {
  let { offset: n = xh.All, axis: r = `y` } = t,
    i = e[r];
  i.offset.length = 0;
  let a = n.length;
  for (let e = 0; e < a; e++)
    i.offset[e] = Qo(n[e], i.containerLength, i.targetLength, i.targetOffset);
  i.progress = M(0, 1, $o(i.offset, i.current));
}
function ts(e, t) {
  let n = { x: 0, y: 0 },
    r = e;
  for (; r && r !== t; )
    if (hn(r)) ((n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent));
    else if (r.tagName === `svg`) {
      let e = r.getBoundingClientRect();
      r = r.parentElement;
      let t = r.getBoundingClientRect();
      ((n.x += e.left - t.left), (n.y += e.top - t.top));
    } else if (r instanceof SVGGraphicsElement) {
      let { x: e, y: t } = r.getBBox();
      ((n.x += e), (n.y += t));
      let i = null,
        a = r.parentNode;
      for (; !i; ) (a.tagName === `svg` && (i = a), (a = r.parentNode));
      r = i;
    } else break;
  return n;
}
function ns(e) {
  return `getBBox` in e && e.tagName !== `svg`
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function rs(e, t, n, r = {}) {
  let { target: i } = r,
    a = i || r.offset;
  return {
    measure: (t) => {
      if (a) {
        n.time = t.time;
        for (let e in _h) {
          let r = e,
            { offset: i } = n[r];
          (Object.assign(n[r], t[r]), (n[r].offset = i));
        }
        if (i && i !== e) {
          let t = ts(i, e),
            r = ns(i);
          ((n.x.targetOffset = t.x),
            (n.y.targetOffset = t.y),
            (n.x.targetLength = r.width),
            (n.y.targetLength = r.height));
        }
        es(n, r);
      }
    },
    notify: (e) => t(a ? n : e),
  };
}
function is(e, { container: t = document.scrollingElement, trackContentSize: n = !1, ...r } = {}) {
  if (!t) return P;
  let i = wh.get(t);
  i || ((i = /* @__PURE__ */ new Set()), wh.set(t, i));
  let a = rs(t, e, gh(), r);
  if ((i.add(a), !Sh.has(t))) {
    let e = gh(),
      n = () => {
        Xo(t, e, L.timestamp);
        for (let t of i) t.measure(e);
        W.preUpdate(r);
      },
      r = () => {
        for (let t of i) t.notify(e);
      },
      a = () => W.read(n);
    Sh.set(t, a);
    let o = Eh(t);
    (f.addEventListener(`resize`, a),
      t !== document.documentElement && Ch.set(t, fr(t, a)),
      o.addEventListener(`scroll`, a),
      a());
  }
  if (n && !Th.has(t)) {
    let e = Sh.get(t),
      n = { width: t.scrollWidth, height: t.scrollHeight },
      r = W.read(() => {
        let r = t.scrollWidth,
          i = t.scrollHeight;
        (n.width !== r || n.height !== i) && (e(), (n.width = r), (n.height = i));
      }, !0);
    Th.set(t, r);
  }
  let o = Sh.get(t);
  return (
    W.read(o, !1, !0),
    () => {
      G(o);
      let e = wh.get(t);
      if (!e || (e.delete(a), e.size)) return;
      wh.delete(t);
      let n = Sh.get(t);
      (Sh.delete(t),
        n &&
          (Eh(t).removeEventListener(`scroll`, n),
          Ch.get(t)?.(),
          f.removeEventListener(`resize`, n)));
      let r = Th.get(t);
      r && (G(r), Th.delete(t));
    }
  );
}
function as(e) {
  return f === void 0 ? !1 : e ? ad() : id();
}
function os({ container: e, target: t, axis: n }) {
  let r = Dh.get(e);
  r || ((r = /* @__PURE__ */ new Map()), Dh.set(e, r));
  let i = t ?? `self`,
    a = r.get(i);
  return (
    a || ((a = {}), r.set(i, a)),
    a[n] ||
      (a[n] = t
        ? new ViewTimeline({ subject: t, axis: n })
        : new ScrollTimeline({ source: e, axis: n }))
  );
}
function ss(e = xh.All) {
  if (e.length !== 2) return;
  let [t, n] = e.map(Oh),
    r = [kh(t), kh(n)],
    i = n[0] - t[0],
    a = t[1] - n[1];
  if (r[0] && r[1] && (i || a))
    return { points: r, a: i, b: a, cover: !t[0] && i === 1 && a === 1 };
}
function cs(e, t) {
  let { target: n, container: r, axis: i } = t,
    a = n && ss(t.offset),
    o = as(n) && (n ? !!a : !t.offset),
    s = /* @__PURE__ */ new Map(),
    c = /* @__PURE__ */ new Set(),
    l,
    u = !1,
    d = (e, t) => {
      let [n, r] = a.points;
      (t.effect.updateTiming({
        direction: u ? (e === `normal` ? `reverse` : `alternate-reverse`) : e,
      }),
        Object.assign(t, { rangeStart: u ? r : n, rangeEnd: u ? n : r }),
        t.play());
    },
    f = [
      e.attachTimeline({
        get timeline() {
          return o ? os(t) : void 0;
        },
        onAttach:
          a &&
          ((e) => {
            let t = e.effect.getTiming().direction;
            (s.set(e, t), d(t, e));
          }),
        observe: (e) => (
          e.pause(),
          c.add(e),
          (l ||= is((e) => {
            c.forEach((t) => {
              t.time = t.iterationDuration * e[i].progress;
            });
          }, t)),
          () => c.delete(e)
        ),
      }),
    ];
  if (o && a) {
    let { a: e, b: t } = a,
      o = i === `y` ? `clientHeight` : `clientWidth`,
      c = () => {
        u !== (u = e * n[o] + t * r[o] < 0) && s.forEach(d);
      };
    (c(), e * t < 0 && f.push(fr(c), fr([n, r], c)));
  }
  return () => {
    (f.forEach((e) => e()), l?.());
  };
}
function ls(e, { axis: t = `y`, source: n, container: r = document.scrollingElement, ...i } = {}) {
  if (!r) return P;
  let a = { axis: t, container: n || r, ...i };
  return typeof e == `function` ? is((n) => e(n[t].progress, n), a) : cs(e, a);
}
function us(e, t, n, r) {
  return {
    factory: (i) => {
      let a,
        o = () => {
          jh(n) || jh(r)
            ? Of.read(o)
            : (a = ls(i, {
                ...t,
                axis: e,
                container: n?.current || void 0,
                target: r?.current || void 0,
              }));
        };
      return (
        Of.read(o),
        () => {
          (kf(o), a?.());
        }
      );
    },
    times: [0, 1],
    keyframes: [0, 1],
    ease: (e) => e,
    duration: 1,
  };
}
function ds(e, t) {
  return f === void 0 ? !1 : e ? ad() && !!ss(t) : id() && !t;
}
function fs({ container: e, target: t, ...n } = {}) {
  let r = T(Ah);
  ds(t, n.offset) &&
    ((r.scrollXProgress.accelerate = us(`x`, n, e, t)),
    (r.scrollYProgress.accelerate = us(`y`, n, e, t)));
  let i = d(null),
    a = d(!1),
    o = s(
      () => (
        (i.current = ls(
          (e, { x: t, y: n }) => {
            (r.scrollX.set(t.current),
              r.scrollXProgress.set(t.progress),
              r.scrollY.set(n.current),
              r.scrollYProgress.set(n.progress));
          },
          { ...n, container: e?.current || void 0, target: t?.current || void 0 }
        )),
        () => {
          i.current?.();
        }
      ),
      [e, t, JSON.stringify(n.offset)]
    );
  return (
    Wc(() => {
      if (((a.current = !1), jh(e) || jh(t))) a.current = !0;
      else return o();
    }, [o]),
    C(() => {
      if (!a.current) return;
      let n,
        r = () => {
          let r = jh(e),
            i = jh(t);
          !r && !i && (n = o());
        };
      return (
        Of.read(r),
        () => {
          (kf(r), n?.());
        }
      );
    }, [o]),
    r
  );
}
function ps(e) {
  return fs({ container: e });
}
function ms() {
  return fs();
}
function hs(e) {
  let t = T(() => D(e)),
    { isStatic: n } = l($);
  if (n) {
    let [, n] = w(e);
    C(() => t.on(`change`, n), []);
  }
  return t;
}
function gs(e, t) {
  let n = hs(t()),
    r = () => n.set(t());
  return (
    r(),
    Wc(() => {
      let t = () => W.preRender(r, !1, !0),
        n = e.map((e) => e.on(`change`, t));
      return (
        r(),
        () => {
          (n.forEach((e) => e()), G(r));
        }
      );
    }),
    n
  );
}
function _s(e, ...t) {
  let n = e.length;
  function r() {
    let r = ``;
    for (let i = 0; i < n; i++) {
      r += e[i];
      let n = t[i];
      n && (r += Y(n) ? n.get() : n);
    }
    return r;
  }
  return gs(t.filter(Y), r);
}
function vs(e) {
  ((Ed.current = []), e());
  let t = gs(Ed.current, e);
  return ((Ed.current = void 0), t);
}
function ys(e, t, n, r) {
  if (typeof e == `function`) return vs(e);
  if (n !== void 0 && !Array.isArray(n) && typeof t != `function`) return xs(e, t, n, r);
  let i = typeof t == `function` ? t : vr(t, n, r),
    a = Array.isArray(e) ? bs(e, i) : bs([e], ([e]) => i(e)),
    o = Array.isArray(e) ? void 0 : e.accelerate;
  if (o && !o.isTransformed && typeof t != `function` && Array.isArray(n) && r?.clamp !== !1) {
    let e = r?.ease;
    a.accelerate = {
      ...o,
      times: [0, ...t, 1],
      keyframes: [n[0], ...n, n[n.length - 1]],
      isTransformed: !0,
      ...(e ? { ease: Array.isArray(e) ? [e[0], ...e] : e } : {}),
    };
  }
  return a;
}
function bs(e, t) {
  let n = T(() => []);
  return gs(e, () => {
    n.length = 0;
    let r = e.length;
    for (let t = 0; t < r; t++) n[t] = e[t].get();
    return t(n);
  });
}
function xs(e, t, n, r) {
  let i = T(() => Object.keys(n)),
    a = T(() => ({}));
  for (let o of i) a[o] = ys(e, t, n[o], r);
  return a;
}
function Ss(e, t = {}) {
  return Cs(e, t, Sr);
}
function Cs(e, t, n) {
  let { isStatic: r } = l($),
    i = () => (Y(e) ? e.get() : e);
  if (r) return ys(i);
  let a = hs(i());
  return (o(() => n(a, e, t), [a, JSON.stringify(t)]), a);
}
function ws(e, t = {}) {
  return Cs(e, t, Dr);
}
function Ts(e) {
  let t = d(0),
    { isStatic: n } = l($);
  C(() => {
    if (n) return;
    let r = ({ timestamp: n, delta: r }) => {
      ((t.current ||= n), e(n - t.current, r));
    };
    return (W.update(r, !0), () => G(r));
  }, [e]);
}
function Es() {
  let e = hs(0);
  return (Ts((t) => e.set(t)), e);
}
function Ds(e) {
  let t = hs(e.getVelocity()),
    n = () => {
      let r = e.getVelocity();
      (t.set(r), r && W.update(n));
    };
  return (
    qo(e, `change`, () => {
      W.update(n, !1, !0);
    }),
    t
  );
}
function Os() {
  return T(() => new Mh(`auto`));
}
function ks() {
  !_p.current && Yr();
  let [e] = w(gp.current);
  return e;
}
function As() {
  let e = ks(),
    { reducedMotion: t } = l($);
  return t === `never` ? !1 : t === `always` || e;
}
function js(e) {
  e.values.forEach((e) => e.stop());
}
function Ms(e, t) {
  [...t].reverse().forEach((n) => {
    let r = e.getVariant(n);
    (r && Yt(e, r),
      e.variantChildren &&
        e.variantChildren.forEach((e) => {
          Ms(e, t);
        }));
  });
}
function Ns(e, t) {
  if (Array.isArray(t)) return Ms(e, t);
  if (typeof t == `string`) return Ms(e, [t]);
  Yt(e, t);
}
function Ps() {
  let e = /* @__PURE__ */ new Set(),
    t = {
      subscribe(t) {
        return (e.add(t), () => void e.delete(t));
      },
      start(t, n) {
        let r = [];
        return (
          e.forEach((e) => {
            r.push(rn(e, t, { transitionOverride: n }));
          }),
          Promise.all(r)
        );
      },
      set(t) {
        return e.forEach((e) => {
          Ns(e, t);
        });
      },
      stop() {
        e.forEach((e) => {
          js(e);
        });
      },
      mount() {
        return () => {
          t.stop();
        };
      },
    };
  return t;
}
function Fs(e) {
  return typeof e == `object` && !Array.isArray(e);
}
function Is(e, t, n, r) {
  return e == null
    ? []
    : typeof e == `string` && Fs(t)
      ? _n(e, n, r)
      : e instanceof NodeList
        ? Array.from(e)
        : Array.isArray(e)
          ? e.filter((e) => e != null)
          : [e];
}
function Ls(e, t, n) {
  return e * (t + 1) + n * t;
}
function Rs(e, t, n, r) {
  return typeof t == `number`
    ? t
    : t.startsWith(`-`) || t.startsWith(`+`)
      ? Math.max(0, e + parseFloat(t))
      : t === `<`
        ? n
        : t.startsWith(`<`)
          ? Math.max(0, n + parseFloat(t.slice(1)))
          : (r.get(t) ?? e);
}
function zs(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    i.at > t && i.at < n && (E(e, i), r--);
  }
}
function Bs(e, t, n, r, i, a) {
  zs(e, i, a);
  for (let o = 0; o < t.length; o++)
    e.push({ value: t[o], at: U(i, a, r[o]), easing: /* @__PURE__ */ le(n, o) });
}
function Vs(e, t, n = 0) {
  let r = t + 1 + t * n;
  for (let t = 0; t < e.length; t++) e[t] = e[t] / r;
}
function Hs(e, t) {
  return e.at === t.at ? (e.value === null ? 1 : t.value === null ? -1 : 0) : e.at - t.at;
}
function Us(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
  let a = t.duration || 0.3,
    o = /* @__PURE__ */ new Map(),
    s = /* @__PURE__ */ new Map(),
    c = {},
    l = /* @__PURE__ */ new Map(),
    u = 0,
    d = 0,
    f = 0;
  for (let n = 0; n < e.length; n++) {
    let o = e[n];
    if (typeof o == `string`) {
      l.set(o, d);
      continue;
    }
    if (!Array.isArray(o)) {
      l.set(o.name, Rs(d, o.at, u, l));
      continue;
    }
    let [p, m, h = {}] = o;
    h.at !== void 0 && (d = Rs(d, h.at, u, l));
    let g = 0,
      _ = (e, n, r, o = 0, s = 0) => {
        let c = Ks(e),
          {
            delay: l = 0,
            times: u = Je(c),
            type: p = t.type || `keyframes`,
            repeat: m,
            repeatType: h,
            repeatDelay: _ = 0,
            ...v
          } = n,
          { ease: y = t.ease || `easeOut`, duration: b } = n,
          x = typeof l == `function` ? l(o, s) : l,
          S = c.length,
          ee = St(p) ? p : i?.[p || `keyframes`];
        if (S <= 2 && ee) {
          let e = 100;
          if (S === 2 && Ih(c)) {
            let t = c[1] - c[0];
            e = Math.abs(t);
          }
          let n = { ...t, ...v };
          b !== void 0 && (n.duration = /* @__PURE__ */ F(b));
          let r = Ie(n, e, ee);
          ((y = r.ease), (b = r.duration));
        }
        b ??= a;
        let C = d + x;
        u.length === 1 && u[0] === 0 && (u[1] = 1);
        let w = u.length - c.length;
        if ((w > 0 && qe(u, w), c.length === 1 && c.unshift(null), m && `${m}`, m && m < Ph)) {
          let e = b > 0 ? _ / b : 0;
          b = Ls(b, m, _);
          let t = [...c],
            n = [...u];
          y = Array.isArray(y) ? [...y] : [y];
          let r = [...y],
            i = h === `reverse` || h === `mirror`,
            a = t,
            o = r;
          i &&
            ((a = [...t].reverse()),
            h === `reverse` &&
              (o = [...r]
                .reverse()
                .map((e) => (typeof e == `function` ? /* @__PURE__ */ al(e) : e))));
          for (let s = 0; s < m; s++) {
            let l = i && s % 2 == 0,
              d = l ? a : t,
              f = l ? o : r,
              p = (s + 1) * (1 + e);
            (e > 0 && (c.push(c[c.length - 1]), u.push(p), y.push(`linear`)), c.push(...d));
            for (let e = 0; e < d.length; e++)
              (u.push(n[e] + p), y.push(e === 0 ? `linear` : /* @__PURE__ */ le(f, e - 1)));
          }
          Vs(u, m, e);
        }
        let T = C + b;
        (Bs(r, c, y, u, C, T), (g = Math.max(x + b, g)), (f = Math.max(T, f)));
      };
    if (Y(p)) {
      let e = Ws(p, s);
      _(m, h, Gs(`default`, e));
    } else {
      let e = Is(p, m, r, c),
        t = e.length;
      for (let n = 0; n < t; n++) {
        ((m = m), (h = h));
        let r = e[n],
          i = Ws(r, s);
        for (let e in m) _(m[e], qs(h, e), Gs(e, i), n, t);
      }
    }
    ((u = d), (d += g));
  }
  return (
    s.forEach((e, r) => {
      for (let i in e) {
        let a = e[i];
        a.sort(Hs);
        let s = [],
          c = [],
          l = [];
        for (let e = 0; e < a.length; e++) {
          let { at: t, value: n, easing: r } = a[e];
          (s.push(n), c.push(/* @__PURE__ */ Qc(0, f, t)), l.push(r || `easeOut`));
        }
        (c[0] !== 0 && (c.unshift(0), s.unshift(s[0]), l.unshift(Nh)),
          c[c.length - 1] !== 1 && (c.push(1), s.push(null)),
          o.has(r) || o.set(r, { keyframes: {}, transition: {} }));
        let u = o.get(r);
        u.keyframes[i] = s;
        let { type: d, ...p } = t;
        u.transition[i] = { ...p, duration: f, ease: l, times: c, ...n };
      }
    }),
    o
  );
}
function Ws(e, t) {
  return (!t.has(e) && t.set(e, {}), t.get(e));
}
function Gs(e, t) {
  return (t[e] || (t[e] = []), t[e]);
}
function Ks(e) {
  return Array.isArray(e) ? e : [e];
}
function qs(e, t) {
  return e && e[t] ? { ...e, ...e[t] } : { ...e };
}
function Js(e, t) {
  return Y(e) || typeof e == `number` || (typeof e == `string` && !Fs(t));
}
function Ys(e, t, n, r) {
  let i = [];
  if (Js(e, t)) i.push(Li(e, (Fs(t) && t.default) || t, n && (n.default || n)));
  else {
    if (e == null) return i;
    let a = Is(e, t, r),
      o = a.length;
    for (let e = 0; e < o; e++) {
      let r = a[e],
        s = { ...n };
      (`delay` in s && typeof s.delay == `function` && (s.delay = s.delay(e, o)),
        r instanceof Element
          ? i.push(...Kn(r, t, s, pp.get(r)))
          : i.push(...pn(dn(r) ?? Df, r, t, s)));
    }
  }
  return i;
}
function Xs(e, t, n) {
  let r = [];
  return (
    Us(
      e.map((e) => {
        if (Array.isArray(e) && typeof e[0] == `function`) {
          let t = e[0],
            n = D(0);
          return (
            n.on(`change`, t),
            e.length === 1 ? [n, [0, 1]] : e.length === 2 ? [n, [0, 1], e[1]] : [n, e[1], e[2]]
          );
        }
        return e;
      }),
      t,
      n,
      { spring: Ue }
    ).forEach(({ keyframes: e, transition: t }, n) => {
      r.push(...Ys(n, e, t));
    }),
    r
  );
}
function Zs(e) {
  return Array.isArray(e) && e.some(Array.isArray);
}
function Qs(e = {}) {
  let { scope: t, reduceMotion: n, skipAnimations: r } = e;
  function i(e, i, a) {
    let o = [],
      s,
      c = {};
    if ((n !== void 0 && (c.reduceMotion = n), r !== void 0 && (c.skipAnimations = r), Zs(e))) {
      let { onComplete: n, ...r } = i || {};
      (typeof n == `function` && (s = n), (o = Xs(e, { ...c, ...r }, t)));
    } else {
      let { onComplete: n, ...r } = a || {};
      (typeof n == `function` && (s = n), (o = Ys(e, i, { ...c, ...r }, t)));
    }
    let l = new bd(o);
    return (
      s && l.finished.then(s),
      t &&
        (t.animations.push(l),
        l.finished.then(() => {
          E(t.animations, l);
        })),
      l
    );
  }
  return i;
}
function $s() {
  let e = T(() => ({ current: null, animations: [] })),
    t = As() ?? void 0,
    { skipAnimations: n } = l($),
    r = i(() => Qs({ scope: e, reduceMotion: t, skipAnimations: n }), [e, t, n]);
  return (
    Ko(() => {
      (e.animations.forEach((e) => e.stop()), (e.animations.length = 0));
    }),
    [e, r]
  );
}
function ec(e, t, n, r) {
  if (e == null) return [];
  let i = _n(e, r),
    a = i.length,
    o = [];
  for (let e = 0; e < a; e++) {
    let r = i[e],
      s = { ...n };
    typeof s.delay == `function` && (s.delay = s.delay(e, a));
    for (let e in t) {
      let n = t[e];
      Array.isArray(n) || (n = [n]);
      let i = { ...Ft(s, e) };
      ((i.duration &&= /* @__PURE__ */ F(i.duration)), (i.delay &&= /* @__PURE__ */ F(i.delay)));
      let a = Mt(r),
        c = Cd(e, i.pseudoElement || ``),
        l = a.get(c);
      (l && l.stop(),
        o.push({
          map: a,
          key: c,
          unresolvedKeyframes: n,
          options: { ...i, element: r, name: e, allowFlatten: !s.type && !s.ease },
        }));
    }
  }
  for (let e = 0; e < o.length; e++) {
    let { unresolvedKeyframes: t, options: n } = o[e],
      { element: r, name: i, pseudoElement: a } = n;
    (!a && t[0] === null && (t[0] = ar(r, i)),
      ct(t),
      sn(t, i),
      !a && t.length < 2 && t.unshift(ar(r, i)),
      (n.keyframes = t));
  }
  let s = [];
  for (let e = 0; e < o.length; e++) {
    let { map: t, key: n, options: r } = o[e],
      i = new ld(r);
    (t.set(n, i), i.finished.finally(() => t.delete(n)), s.push(i));
  }
  return s;
}
function tc() {
  let e = T(() => ({ current: null, animations: [] })),
    t = T(() => Rh(e));
  return (
    Ko(() => {
      e.animations.forEach((e) => e.stop());
    }),
    [e, t]
  );
}
function nc() {
  let e = T(Ps);
  return (Wc(e.mount, []), e);
}
function rc() {
  let e = l(Gc);
  return e ? e.custom : void 0;
}
function ic(e, t, n, r) {
  C(() => {
    let i = e.current;
    if (n && i) return Ri(i, t, n, r);
  }, [e, t, n, r]);
}
function ac() {
  return T(Hh);
}
function oc(e) {
  return typeof e == `object` && !!e && jm in e;
}
function sc(e) {
  if (oc(e)) return e[jm];
}
function cc() {
  return lc;
}
function lc(e) {
  im.current && ((im.current.isUpdating = !1), im.current.blockUpdate(), e && e());
}
function uc() {
  return s(() => {
    let e = im.current;
    e && e.resetTree();
  }, []);
}
function dc(...e) {
  let t = d(0),
    [n, r] = w(e[t.current]);
  return [
    n,
    s(
      (n) => {
        ((t.current = typeof n == `number` ? n : nl(0, e.length, t.current + 1)), r(e[t.current]));
      },
      [e.length, ...e]
    ),
  ];
}
function fc(e, t, { root: n, margin: r, amount: i = `some` } = {}) {
  let a = _n(e),
    o = /* @__PURE__ */ new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n) {
            if (e.isIntersecting) {
              let n = t(e.target, e);
              typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target);
            } else typeof n == `function` && (n(e), o.delete(e.target));
          }
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : Uh[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function pc(e, { root: t, margin: n, amount: r, once: i = !1, initial: a = !1 } = {}) {
  let [o, s] = w(a);
  return (
    C(() => {
      if (!e.current || (i && o)) return;
      let a = () => (s(!0), i ? void 0 : () => s(!1)),
        c = { root: (t && t.current) || void 0, margin: n, amount: r };
      return fc(e.current, a, c);
    }, [t, e, n, i, r]),
    o
  );
}
function mc() {
  let [e, t] = Ra(),
    n = cc(),
    r = d(-1);
  return (
    C(() => {
      W.postRender(() =>
        W.postRender(() => {
          t === r.current && (N.instantAnimations = !1);
        })
      );
    }, [t]),
    (i) => {
      n(() => {
        ((N.instantAnimations = !0), e(), i(), (r.current = t + 1));
      });
    }
  );
}
function hc() {
  N.instantAnimations = !1;
}
function gc() {
  let [e, t] = w(!0);
  return (
    C(() => {
      let e = () => t(!document.hidden);
      return (
        document.hidden && e(),
        document.addEventListener(`visibilitychange`, e),
        () => {
          document.removeEventListener(`visibilitychange`, e);
        }
      );
    }, []),
    e
  );
}
function _c(e) {
  return (t) => {
    let n = e.current;
    if (!n) return t;
    let r = n.viewBox?.baseVal;
    if (!r || (r.width === 0 && r.height === 0)) return t;
    let i = n.getBoundingClientRect();
    if (i.width === 0 || i.height === 0) return t;
    let a = r.width / i.width,
      o = r.height / i.height,
      s = i.left + f.scrollX,
      c = i.top + f.scrollY;
    return { x: (t.x - s) * a + s, y: (t.y - c) * o + c };
  };
}
function vc(e) {
  return (t) => {
    let n = e.current;
    if (!n) return t;
    let r = yc(n);
    if (!r) return t;
    let i = n.getBoundingClientRect(),
      a = i.left + f.scrollX + i.width / 2,
      o = i.top + f.scrollY + i.height / 2,
      s = t.x - a,
      c = t.y - o;
    return { x: a + r.a * s + r.c * c, y: o + r.b * s + r.d * c };
  };
}
function yc(e) {
  let { transform: t } = getComputedStyle(e);
  if (!t || t === `none`) return null;
  let n = t.match(/^matrix3d\((.*)\)$/u) || t.match(/^matrix\((.*)\)$/u);
  if (!n) return null;
  let r = n[1].split(`,`).map(Number),
    i = t.startsWith(`matrix3d`),
    a = r[0],
    o = r[1],
    s = i ? r[4] : r[2],
    c = i ? r[5] : r[3],
    l = a * c - o * s;
  return Math.abs(l) < 1e-10 ? null : { a: c / l, b: -o / l, c: -s / l, d: a / l };
}
function bc(e, t, n) {
  let r = Kh(e, t),
    i = Wh.get(r);
  if (!i) return null;
  let { animation: a, startTime: o } = i;
  function s() {
    f.MotionCancelOptimisedAnimation?.(e, t, n);
  }
  return ((a.onfinish = s), o === null || f.MotionHandoffIsComplete?.(e) ? (s(), null) : o);
}
function xc() {
  (Yh.forEach((e) => {
    (e.animation.play(), (e.animation.startTime = e.startTime));
  }),
    Yh.clear());
}
function Sc(e, t, n, r, i) {
  if (f.MotionIsMounted) return;
  let a = e.dataset[Bd];
  if (!a) return;
  f.MotionHandoffAnimation = bc;
  let o = Kh(a, t);
  Jh ||
    ((Jh = xt(e, t, [n[0], n[0]], { duration: 1e4, ease: `linear` })),
    Wh.set(o, { animation: Jh, startTime: null }),
    (f.MotionHandoffAnimation = bc),
    (f.MotionHasOptimisedAnimation = (e, t) => {
      if (!e) return !1;
      if (!t) return Gh.has(e);
      let n = Kh(e, t);
      return !!Wh.get(n);
    }),
    (f.MotionHandoffMarkAsComplete = (e) => {
      Gh.has(e) && Gh.set(e, !0);
    }),
    (f.MotionHandoffIsComplete = (e) => Gh.get(e) === !0),
    (f.MotionCancelOptimisedAnimation = (e, t, n, r) => {
      let i = Kh(e, t),
        a = Wh.get(i);
      a &&
        (n && r === void 0
          ? n.postRender(() => {
              n.postRender(() => {
                a.animation.cancel();
              });
            })
          : a.animation.cancel(),
        n && r
          ? (Yh.add(a), n.render(xc))
          : (Wh.delete(i), Wh.size || (f.MotionCancelOptimisedAnimation = void 0)));
    }),
    (f.MotionCheckAppearSync = (e, t, n) => {
      let r = $t(e);
      if (!r) return;
      let i = f.MotionHasOptimisedAnimation?.(r, t),
        a = e.props.values?.[t];
      if (!i || !a) return;
      let o = n.on(`change`, (e) => {
        a.get() !== e && (f.MotionCancelOptimisedAnimation?.(r, t), o());
      });
      return o;
    }));
  let s = () => {
    Jh.cancel();
    let a = xt(e, t, n, r);
    (qh === void 0 && (qh = performance.now()),
      (a.startTime = qh),
      Wh.set(o, { animation: a, startTime: qh }),
      i && i(a));
  };
  (Gh.set(a, !1), Jh.ready ? Jh.ready.then(s).catch(P) : s());
}
function Cc(e) {
  let [n, r] = w(e),
    i = Qh({}, !1),
    a = T(
      () =>
        new Zh(
          {
            props: {
              onUpdate: (e) => {
                r({ ...e });
              },
            },
            visualState: i,
            presenceContext: null,
          },
          { initialState: e }
        )
    );
  return (t(() => (a.mount({}), () => a.unmount()), [a]), [n, T(() => (e) => rn(a, e))]);
}
function wc(e) {
  let t = hs(1),
    n = hs(1),
    { visualElement: r } = l(Cm);
  return (
    e
      ? ((t = e.scaleX || t), (n = e.scaleY || n))
      : r && ((t = r.getValue(`scaleX`, 1)), (n = r.getValue(`scaleY`, 1))),
    { scaleX: ys(t, eg), scaleY: ys(n, eg) }
  );
}
function Tc(e, t, n, r, i, a = `ltr`) {
  let o = e.findIndex((e) => e.value === t);
  if (o === -1) return e;
  if (i === `xy`) {
    let { layout: t } = e[o],
      r = { x: U(t.x.min, t.x.max, 0.5) + n.x, y: U(t.y.min, t.y.max, 0.5) + n.y },
      i = Ec(e),
      s = i.find((t) => t.items.includes(e[o])),
      c = i.reduce((e, t) => (Dc(r.y, t) < Dc(r.y, e) ? t : e));
    if (c !== s) return Oc(e, o, r.x, c, a);
    let l = kc(r, t),
      u = -1,
      d = l;
    return (
      e.forEach((e, t) => {
        if (t === o) return;
        let n = kc(r, e.layout);
        n < d && ((u = t), (d = n));
      }),
      u === -1 ? e : ne(e, o, o + Math.sign(u - o))
    );
  }
  if (!r[i]) return e;
  let s = r[i] > 0 ? 1 : -1,
    c = e[o + s];
  if (!c) return e;
  let l = e[o].layout[i],
    u = c.layout[i],
    d = U(u.min, u.max, 0.5);
  return (s === 1 && l.max + n[i] > d) || (s === -1 && l.min + n[i] < d) ? ne(e, o, o + s) : e;
}
function Ec(e) {
  let t = [];
  return (
    e.forEach((e) => {
      let { min: n, max: r } = e.layout.y,
        i = t[t.length - 1];
      !i || n >= i.max || r <= i.min
        ? t.push({ items: [e], min: n, max: r })
        : (i.items.push(e), (i.min = Math.min(i.min, n)), (i.max = Math.max(i.max, r)));
    }),
    t
  );
}
function Dc(e, t) {
  return e < t.min ? t.min - e : e > t.max ? e - t.max : 0;
}
function Oc(e, t, n, r, i) {
  let a = e.filter((e, n) => n !== t),
    o = r.items.find((e) => {
      let t = U(e.layout.x.min, e.layout.x.max, 0.5);
      return i === `ltr` ? n < t : n > t;
    }),
    s = o ? a.indexOf(o) : a.indexOf(r.items[r.items.length - 1]) + 1,
    c = [...a];
  return (c.splice(s, 0, e[t]), c.every((t, n) => t === e[n]) ? e : c);
}
function kc(e, t) {
  let n = Math.max(t.x.min - e.x, 0, e.x - t.x.max),
    r = Math.max(t.y.min - e.y, 0, e.y - t.y.max);
  return n * n + r * r;
}
function Ac(e) {
  let t = !1,
    n = !1;
  for (let r = 0; r < e.length; r++)
    for (let i = r + 1; i < e.length; i++)
      if (((t ||= ng(e[r].x, e[i].x)), (n ||= ng(e[r].y, e[i].y)), t && n)) return `xy`;
  return t ? `x` : `y`;
}
function jc(
  {
    children: e,
    as: t = `ul`,
    axis: n,
    onReorder: r,
    values: i,
    onPointerDownCapture: a,
    onClickCapture: o,
    ...s
  },
  c
) {
  let l = T(() => uh[t]),
    u = d(/* @__PURE__ */ new Map()),
    [f, p] = w(`y`),
    m = d(!1),
    h = d(!1),
    g = d(null),
    _ = n || f,
    v = new Set(i);
  u.current.forEach((e, t) => {
    v.has(t) || u.current.delete(t);
  });
  let y = {
    axis: _,
    groupRef: g,
    hasReordered: h,
    registerItem: (e, t) => {
      if ((u.current.set(e, t), !n)) {
        let e = Ac(
          i.flatMap((e) => {
            let t = u.current.get(e);
            return t ? [t] : [];
          })
        );
        e !== f && p(e);
      }
    },
    updateOrder: (e, t, n) => {
      if (m.current) return;
      let a = i.flatMap((e) => {
          let t = u.current.get(e);
          return t ? [{ value: e, layout: t }] : [];
        }),
        o =
          g.current?.ownerDocument.defaultView?.getComputedStyle(g.current).direction === `rtl`
            ? `rtl`
            : `ltr`,
        s = Tc(a, e, t, n, _, o);
      if (a !== s) {
        ((m.current = !0), (h.current = !0));
        let e = [...i],
          t = a.map(({ value: e }) => i.indexOf(e));
        (s.forEach(({ value: n }, r) => {
          e[t[r]] = n;
        }),
          r(e));
      }
    },
  };
  C(() => {
    m.current = !1;
  }, [i]);
  let b = (e) => {
      ((g.current = e), typeof c == `function` ? c(e) : c && (c.current = e));
    },
    x = { overflowAnchor: `none`, ...s.style };
  return S(l, {
    ...s,
    style: x,
    ref: b,
    onPointerDownCapture: (e) => {
      ((h.current = !1), a?.(e));
    },
    onClickCapture: (e) => {
      (h.current && e.detail && ((h.current = !1), e.stopPropagation(), e.preventDefault()),
        o?.(e));
    },
    ignoreStrict: !0,
    children: S(tg.Provider, { value: y, children: e }),
  });
}
function Mc() {
  if (lg) {
    let e = Pc(lg, `y`);
    e && (cg.delete(e), sg.delete(e));
    let t = Pc(lg, `x`);
    (t && t !== e && (cg.delete(t), sg.delete(t)), (lg = null));
  }
}
function Nc(e, t) {
  let n = getComputedStyle(e),
    r = t === `x` ? n.overflowX : n.overflowY,
    i = e === document.body || e === document.documentElement;
  return og.has(r) || i;
}
function Pc(e, t) {
  let n = e?.parentElement;
  for (; n; ) {
    if (Nc(n, t)) return n;
    n = n.parentElement;
  }
  return null;
}
function Fc(e, t, n) {
  let r = t.getBoundingClientRect(),
    i = n === `x` ? Math.max(0, r.left) : Math.max(0, r.top),
    a = n === `x` ? Math.min(f.innerWidth, r.right) : Math.min(f.innerHeight, r.bottom),
    o = e - i,
    s = a - e;
  if (o < ig) {
    let e = 1 - o / ig;
    return { amount: -25 * e * e, edge: `start` };
  }
  if (s < ig) {
    let e = 1 - s / ig;
    return { amount: ag * e * e, edge: `end` };
  }
  return { amount: 0, edge: null };
}
function Ic(e, t, n, r) {
  if (!e) return;
  lg = e;
  let i = Pc(e, n);
  if (!i) return;
  let { amount: a, edge: o } = Fc(t - (n === `x` ? f.scrollX : f.scrollY), i, n);
  if (o === null) {
    (cg.delete(i), sg.delete(i));
    return;
  }
  let s = cg.get(i),
    c = i === document.body || i === document.documentElement;
  if (s !== o) {
    if (!((o === `start` && r < 0) || (o === `end` && r > 0))) return;
    cg.set(i, o);
    let e =
      n === `x`
        ? i.scrollWidth - (c ? f.innerWidth : i.clientWidth)
        : i.scrollHeight - (c ? f.innerHeight : i.clientHeight);
    sg.set(i, e);
  }
  if (a > 0) {
    let e = sg.get(i);
    if ((n === `x` ? (c ? f.scrollX : i.scrollLeft) : c ? f.scrollY : i.scrollTop) >= e) return;
  }
  n === `x`
    ? c
      ? f.scrollBy({ left: a })
      : (i.scrollLeft += a)
    : c
      ? f.scrollBy({ top: a })
      : (i.scrollTop += a);
}
function Lc(e, t = 0) {
  return Y(e) ? e : hs(t);
}
function Rc(
  {
    children: e,
    style: t = {},
    value: n,
    as: r = `li`,
    onDrag: i,
    onDragEnd: a,
    layout: o = !0,
    ...s
  },
  c
) {
  let u = T(() => uh[r]),
    d = l(tg),
    f = { x: Lc(t.x), y: Lc(t.y) },
    p = ys([f.x, f.y], ([e, t]) => (e || t ? 1 : `unset`)),
    { axis: m, registerItem: h, updateOrder: g, groupRef: _, hasReordered: v } = d;
  return S(u, {
    drag: m === `xy` || m,
    ...s,
    dragSnapToOrigin: !0,
    style: { ...t, x: f.x, y: f.y, zIndex: p },
    layout: o,
    onDrag: (e, t) => {
      let { velocity: r, point: a } = t,
        o = { x: f.x.get(), y: f.y.get() };
      g(n, o, r);
      let s = m === `xy` ? (Math.abs(r.x) > Math.abs(r.y) ? `x` : `y`) : m;
      (Ic(_.current, a[s], s, r[s]), i && i(e, t));
    },
    onDragEnd: (e, t) => {
      ((v.current = !1), Mc(), a && a(e, t));
    },
    onLayoutMeasure: (e) => {
      h(n, e);
    },
    ref: c,
    ignoreStrict: !0,
    children: e,
  });
}
var zc,
  Bc,
  Vc,
  Hc,
  Uc,
  Wc,
  Gc,
  M,
  Kc,
  qc,
  N,
  Jc,
  Yc,
  Xc,
  P,
  Zc,
  Qc,
  $c,
  F,
  I,
  el,
  tl,
  nl,
  rl,
  il,
  al,
  ol,
  sl,
  cl,
  ll,
  ul,
  dl,
  fl,
  pl,
  ml,
  hl,
  gl,
  _l,
  vl,
  yl,
  bl,
  L,
  xl,
  R,
  Sl,
  Cl,
  wl,
  Tl,
  El,
  Dl,
  Ol,
  kl,
  Al,
  jl,
  Ml,
  Nl,
  Pl,
  Fl,
  Il,
  Ll,
  Rl,
  zl,
  Bl,
  z,
  B,
  Vl,
  Hl,
  Ul,
  Wl,
  V,
  Gl,
  Kl,
  ql,
  Jl,
  Yl,
  Xl,
  Zl,
  Ql,
  $l,
  eu,
  tu,
  H,
  U,
  nu,
  ru,
  iu,
  au,
  ou,
  su,
  cu,
  lu,
  uu,
  W,
  G,
  du,
  fu,
  pu,
  mu,
  K,
  hu,
  gu,
  _u,
  vu,
  yu,
  bu,
  xu,
  Su,
  Cu,
  wu,
  Tu,
  Eu,
  Du,
  Ou,
  ku,
  Au,
  ju,
  Mu,
  q,
  Nu,
  Pu,
  Fu,
  Iu,
  Lu,
  Ru,
  zu,
  Bu,
  Vu,
  Hu,
  Uu,
  Wu,
  Gu,
  J,
  Ku,
  qu,
  Ju,
  Yu,
  Xu,
  Zu,
  Qu,
  $u,
  ed,
  td,
  nd,
  rd,
  id,
  ad,
  od,
  sd,
  cd,
  ld,
  ud,
  dd,
  fd,
  pd,
  md,
  hd,
  gd,
  _d,
  vd,
  yd,
  bd,
  xd,
  Sd,
  Cd,
  wd,
  Td,
  Ed,
  Dd,
  Od,
  kd,
  Ad,
  jd,
  Md,
  Nd,
  Pd,
  Fd,
  Id,
  Ld,
  Rd,
  zd,
  Y,
  Bd,
  Vd,
  Hd,
  Ud,
  Wd,
  Gd,
  Kd,
  qd,
  Jd,
  Yd,
  Xd,
  Zd,
  Qd,
  $d,
  ef,
  tf,
  nf,
  rf,
  af,
  of,
  sf,
  cf,
  lf,
  uf,
  df,
  ff,
  pf,
  mf,
  hf,
  gf,
  _f,
  vf,
  yf,
  bf,
  xf,
  Sf,
  Cf,
  wf,
  Tf,
  Ef,
  Df,
  Of,
  kf,
  X,
  Af,
  jf,
  Mf,
  Nf,
  Pf,
  Ff,
  If,
  Lf,
  Rf,
  zf,
  Bf,
  Vf,
  Hf,
  Uf,
  Z,
  Wf,
  Gf,
  Kf,
  qf,
  Jf,
  Yf,
  Xf,
  Zf,
  Qf,
  $f,
  ep,
  tp,
  np,
  rp,
  ip,
  ap,
  op,
  sp,
  cp,
  lp,
  up,
  dp,
  fp,
  Q,
  pp,
  mp,
  hp,
  gp,
  _p,
  vp,
  yp,
  bp,
  xp,
  Sp,
  Cp,
  wp,
  Tp,
  Ep,
  Dp,
  Op,
  kp,
  Ap,
  jp,
  Mp,
  Np,
  Pp,
  Fp,
  Ip,
  Lp,
  Rp,
  zp,
  Bp,
  Vp,
  Hp,
  Up,
  Wp,
  Gp,
  Kp,
  qp,
  Jp,
  Yp,
  Xp,
  Zp,
  Qp,
  $p,
  em,
  tm,
  nm,
  rm,
  im,
  am,
  om,
  sm,
  cm,
  lm,
  um,
  dm,
  $,
  fm,
  pm,
  mm,
  hm,
  gm,
  _m,
  vm,
  ym,
  bm,
  xm,
  Sm,
  Cm,
  wm,
  Tm,
  Em,
  Dm,
  Om,
  km,
  Am,
  jm,
  Mm,
  Nm,
  Pm,
  Fm,
  Im,
  Lm,
  Rm,
  zm,
  Bm,
  Vm,
  Hm,
  Um,
  Wm,
  Gm,
  Km,
  qm,
  Jm,
  Ym,
  Xm,
  Zm,
  Qm,
  $m,
  eh,
  th,
  nh,
  rh,
  ih,
  ah,
  oh,
  sh,
  ch,
  lh,
  uh,
  dh,
  fh,
  ph,
  mh,
  hh,
  gh,
  _h,
  vh,
  yh,
  bh,
  xh,
  Sh,
  Ch,
  wh,
  Th,
  Eh,
  Dh,
  Oh,
  kh,
  Ah,
  jh,
  Mh,
  Nh,
  Ph,
  Fh,
  Ih,
  Lh,
  Rh,
  zh,
  Bh,
  Vh,
  Hh,
  Uh,
  Wh,
  Gh,
  Kh,
  qh,
  Jh,
  Yh,
  Xh,
  Zh,
  Qh,
  $h,
  eg,
  tg,
  ng,
  rg,
  ig,
  ag,
  og,
  sg,
  cg,
  lg,
  ug,
  dg;
function fg() {
  return (fg = e(() => {
    (p(),
      c(),
      m(),
      (zc = Object.defineProperty),
      (Bc = (e, t) => () => (
        t || (e((t = { exports: {} }).exports, t, t.exports), (e = null)),
        t.exports
      )),
      (Vc = (e, t) => {
        let n = {};
        for (var r in e) zc(n, r, { get: e[r], enumerable: !0 });
        return (t || zc(n, Symbol.toStringTag, { value: `Module` }), n);
      }),
      (Hc = h({})),
      (Uc = f !== void 0),
      (Wc = Uc ? t : C),
      (Gc = /* @__PURE__ */ h(null)),
      (M = (e, t, n) => (n > t ? t : n < e ? e : n)),
      (Kc = () => {}),
      (qc = () => {}),
      (N = {}),
      (Jc = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)),
      (Yc = (e) => typeof e == `object` && !!e),
      (Xc = (e) => /^0[^.\s]+$/u.test(e)),
      (P = /* @__NO_SIDE_EFFECTS__ */ (e) => e),
      (Zc = (...e) => e.reduce((e, t) => (n) => t(e(n)))),
      (Qc = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
        let r = t - e;
        return r ? (n - e) / r : 1;
      }),
      ($c = class {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return (te(this.subscriptions, e), () => this.remove(e));
        }
        remove(e) {
          E(this.subscriptions, e);
        }
        notify(e, t, n) {
          let r = this.subscriptions.length;
          if (r) {
            if (r === 1) this.subscriptions[0](e, t, n);
            else
              for (let i = 0; i < r; i++) {
                let r = this.subscriptions[i];
                r && r(e, t, n);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }),
      (F = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3),
      (I = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3),
      (el = /* @__NO_SIDE_EFFECTS__ */ (e, t) => (t ? (1e3 / t) * e : 0)),
      (tl = /* @__PURE__ */ new Set()),
      (nl = (e, t, n) => {
        let r = t - e;
        return ((((n - e) % r) + r) % r) + e;
      }),
      (rl = (e, t, n) => e * (3 * (1 - e) * ((1 - e) * t + e * n) + e * e)),
      (il = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) =>
        t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
      (al = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => 1 - e(1 - t)),
      (ol = /*@__PURE__*/ se(0.33, 1.53, 0.69, 0.99)),
      (sl = /*@__PURE__*/ al(ol)),
      (cl = /*@__PURE__*/ il(sl)),
      (ll = (e) => (e >= 1 ? 1 : (e *= 2) < 1 ? 0.5 * sl(e) : 0.5 * (2 - 2 ** (-10 * (e - 1))))),
      (ul = (e) => 1 - Math.sin(Math.acos(e))),
      (dl = /* @__PURE__ */ al(ul)),
      (fl = /* @__PURE__ */ il(ul)),
      (pl = /*@__PURE__*/ se(0.42, 0, 1, 1)),
      (ml = /*@__PURE__*/ se(0, 0, 0.58, 1)),
      (hl = /*@__PURE__*/ se(0.42, 0, 0.58, 1)),
      (gl = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] != `number`),
      (_l = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] == `number`),
      (vl = {
        linear: P,
        easeIn: pl,
        easeInOut: hl,
        easeOut: ml,
        circIn: ul,
        circInOut: fl,
        circOut: dl,
        backIn: sl,
        backInOut: cl,
        backOut: ol,
        anticipate: ll,
      }),
      (yl = (e) => typeof e == `string`),
      (bl = (e) => {
        if (/* @__PURE__ */ _l(e)) {
          e.length;
          let [t, n, r, i] = e;
          return /* @__PURE__ */ se(t, n, r, i);
        }
        return yl(e) ? (vl[e], `${e}`, vl[e]) : e;
      }),
      (L = { delta: 0, timestamp: 0, isProcessing: !1 }),
      (R = {
        now: () => (
          xl === void 0 &&
            R.set(L.isProcessing || N.useManualTiming ? L.timestamp : performance.now()),
          xl
        ),
        set: (e) => {
          ((xl = e), queueMicrotask(ue));
        },
      }),
      (Sl = (e) => Math.round(e * 1e5) / 1e5),
      (Cl = (e) => (t) => typeof t == `string` && t.startsWith(e)),
      (wl = /*@__PURE__*/ Cl(`--`)),
      (Tl = /*@__PURE__*/ Cl(`var(--`)),
      (El = (e) => (Tl(e) ? Dl.test(e.split(`/*`)[0].trim()) : !1)),
      (Dl = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu),
      (Ol = { test: (e) => typeof e == `number`, parse: parseFloat, transform: (e) => e }),
      (kl = { ...Ol, transform: (e) => M(0, 1, e) }),
      (Al = { ...Ol, default: 1 }),
      (jl = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu),
      (Ml =
        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu),
      (Nl = (e, t) => (n) =>
        !!(
          (typeof n == `string` && Ml.test(n) && n.startsWith(e)) ||
          (t && !fe(n) && Object.prototype.hasOwnProperty.call(n, t))
        )),
      (Pl = (e, t, n) => (r) => {
        if (typeof r != `string`) return r;
        let [i, a, o, s] = r.match(jl);
        return {
          [e]: parseFloat(i),
          [t]: parseFloat(a),
          [n]: parseFloat(o),
          alpha: s === void 0 ? 1 : parseFloat(s),
        };
      }),
      (Fl = (e) => M(0, 255, e)),
      (Il = { ...Ol, transform: (e) => Math.round(Fl(e)) }),
      (Ll = {
        test: /*@__PURE__*/ Nl(`rgb`, `red`),
        parse: /*@__PURE__*/ Pl(`red`, `green`, `blue`),
        transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
          `rgba(` +
          Il.transform(e) +
          `, ` +
          Il.transform(t) +
          `, ` +
          Il.transform(n) +
          `, ` +
          Sl(kl.transform(r)) +
          `)`,
      }),
      (Rl = { test: /*@__PURE__*/ Nl(`#`), parse: pe, transform: Ll.transform }),
      (zl = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
        test: (t) => typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
        parse: parseFloat,
        transform: (t) => `${t}${e}`,
      })),
      (Bl = /*@__PURE__*/ zl(`deg`)),
      (z = /*@__PURE__*/ zl(`%`)),
      (B = /*@__PURE__*/ zl(`px`)),
      (Vl = /*@__PURE__*/ zl(`vh`)),
      (Hl = /*@__PURE__*/ zl(`vw`)),
      (Ul = { ...z, parse: (e) => z.parse(e) / 100, transform: (e) => z.transform(e * 100) }),
      (Wl = {
        test: /*@__PURE__*/ Nl(`hsl`, `hue`),
        parse: /*@__PURE__*/ Pl(`hue`, `saturation`, `lightness`),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
          `hsla(` +
          Math.round(e) +
          `, ` +
          z.transform(Sl(t)) +
          `, ` +
          z.transform(Sl(n)) +
          `, ` +
          Sl(kl.transform(r)) +
          `)`,
      }),
      (V = {
        test: (e) => Ll.test(e) || Rl.test(e) || Wl.test(e),
        parse: (e) => (Ll.test(e) ? Ll.parse(e) : Wl.test(e) ? Wl.parse(e) : Rl.parse(e)),
        transform: (e) =>
          typeof e == `string` ? e : e.hasOwnProperty(`red`) ? Ll.transform(e) : Wl.transform(e),
        getAnimatableNone: (e) => {
          let t = V.parse(e);
          return ((t.alpha = 0), V.transform(t));
        },
      }),
      (Gl =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu),
      (Kl = /*@__PURE__*/ new RegExp(jl.source)),
      (ql = /*@__PURE__*/ new RegExp(Gl.source, `i`)),
      (Jl = `number`),
      (Yl = `color`),
      (Xl = `var`),
      (Zl = `var(`),
      (Ql = "${}"),
      ($l =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu),
      (eu = (e) => (typeof e == `number` ? 0 : V.test(e) ? V.getAnimatableNone(e) : e)),
      (tu = (e, t) => (typeof e == `number` ? (t?.trim().endsWith(`/`) ? e : 0) : eu(e))),
      (H = { test: me, parse: _e, createTransformer: ye, getAnimatableNone: be }),
      (U = (e, t, n) => e + (t - e) * n),
      (nu = (e, t, n) => {
        let r = e * e,
          i = n * (t * t - r) + r;
        return i < 0 ? 0 : Math.sqrt(i);
      }),
      (ru = [Rl, Ll, Wl]),
      (iu = (e) => ru.find((t) => t.test(e))),
      (au = (e, t) => {
        let n = we(e),
          r = we(t);
        if (!n || !r) return Ce(e, t);
        let i = { ...n };
        return (e) => (
          (i.red = nu(n.red, r.red, e)),
          (i.green = nu(n.green, r.green, e)),
          (i.blue = nu(n.blue, r.blue, e)),
          (i.alpha = U(n.alpha, r.alpha, e)),
          Ll.transform(i)
        );
      }),
      (ou = /* @__PURE__ */ new Set([`none`, `hidden`])),
      (su = (e, t) => {
        let n = H.createTransformer(t),
          r = ge(e),
          i = ge(t);
        return r.indexes.var.length === i.indexes.var.length &&
          r.indexes.color.length === i.indexes.color.length &&
          r.indexes.number.length >= i.indexes.number.length
          ? (ou.has(e) && !i.values.length) || (ou.has(t) && !r.values.length)
            ? Te(e, t)
            : Zc(Oe(Ae(r, i), i.values), n)
          : (`${e}${t}`, Ce(e, t));
      }),
      (cu = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu),
      (lu = [
        `setup`,
        `read`,
        `resolveKeyframes`,
        `preUpdate`,
        `update`,
        `preRender`,
        `render`,
        `postRender`,
      ]),
      (uu = 40),
      ({
        schedule: W,
        cancel: G,
        steps: du,
      } = /* @__PURE__ */ Pe(
        typeof requestAnimationFrame < `u` ? requestAnimationFrame : P,
        !0,
        L
      )),
      (fu = (e) => {
        let t = ({ timestamp: t }) => e(t);
        return {
          start: (e = !0) => W.update(t, e),
          stop: () => G(t),
          now: () => (L.isProcessing ? L.timestamp : R.now()),
        };
      }),
      (pu = (e, t, n = 10) => {
        let r = ``,
          i = Math.max(Math.round(t / n), 2);
        for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + `, `;
        return `linear(${r.substring(0, r.length - 2)})`;
      }),
      (mu = 2e4),
      (K = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
      }),
      (hu = (e) => (e < 0 ? 1 / Math.max(1 + e, K.minDamping) : Math.max(1 - e, K.minDamping))),
      (gu = 12),
      (_u = 0.001),
      (vu = (e, t) => (t ? e >= 0 : e > 0) && e < 1 / 0),
      (Ue.applyToOptions = (e) => {
        let t = Ie(e, 100, Ue);
        return (
          (e.ease = t.ease),
          (e.duration = /* @__PURE__ */ F(t.duration)),
          (e.type = `keyframes`),
          e
        );
      }),
      (yu = 5),
      (bu = (e) => e !== null),
      (xu = { decay: We, inertia: We, tween: Ze, keyframes: Ze, spring: Ue }),
      (Su = 40),
      (Cu = (e, t) => (t - e > Su && !N.useManualTiming ? t : e)),
      (wu = class {
        constructor() {
          this.isResolved = !1;
        }
        get finished() {
          return (
            (this._finished ||= this.isResolved
              ? Promise.resolve()
              : new Promise((e) => {
                  this._resolve = e;
                })),
            this._finished
          );
        }
        updateFinished() {
          ((this._finished = this._resolve = void 0), (this.isResolved = !1));
        }
        notifyFinished() {
          ((this.isResolved = !0), this._resolve?.());
        }
        then(e, t) {
          return this.finished.then(e, t);
        }
      }),
      (Tu = (e) => e / 100),
      (Eu = class extends wu {
        constructor(e) {
          (super(),
            (this.state = `idle`),
            (this.startTime = null),
            (this.isStopped = !1),
            (this.currentTime = 0),
            (this.holdTime = null),
            (this.playbackSpeed = 1),
            (this.delayState = { done: !1, value: void 0 }),
            (this.stop = () => {
              let { motionValue: e } = this.options;
              (e && e.updatedAt !== R.now() && this.tick(R.now()),
                (this.isStopped = !0),
                this.state !== `idle` && (this.teardown(), this.options.onStop?.()));
            }),
            (this.options = e),
            this.initAnimation(),
            this.play(),
            e.autoplay === !1 && this.pause(),
            rt(this, this.options));
        }
        initAnimation() {
          let { options: e } = this;
          tt(e);
          let {
              type: t = Ze,
              repeat: n = 0,
              repeatDelay: r = 0,
              repeatType: i,
              velocity: a = 0,
            } = e,
            { keyframes: o } = e,
            s = t || Ze;
          s !== Ze &&
            typeof o[0] != `number` &&
            ((this.mixKeyframes = Zc(Tu, Me(o[0], o[1]))), (o = [0, 100]));
          let c = s(o === e.keyframes ? e : { ...e, keyframes: o });
          (i === `mirror` &&
            (this.mirroredGenerator = s({ ...e, keyframes: [...o].reverse(), velocity: -a })),
            c.calculatedDuration === null && (c.calculatedDuration = Fe(c)));
          let { calculatedDuration: l } = c;
          ((this.calculatedDuration = l),
            (this.resolvedDuration = l + r),
            (this.totalDuration = this.resolvedDuration * (n + 1) - r),
            (this.generator = c));
        }
        updateTime(e) {
          let t = Math.round(e - this.startTime) * this.playbackSpeed;
          this.currentTime = this.holdTime === null ? t : this.holdTime;
        }
        tick(e, t = !1) {
          let {
            generator: n,
            totalDuration: r,
            mixKeyframes: i,
            mirroredGenerator: a,
            resolvedDuration: o,
            calculatedDuration: s,
          } = this;
          if (this.startTime === null) return n.next(0);
          let {
            delay: c = 0,
            keyframes: l,
            repeat: u,
            repeatType: d,
            repeatDelay: f,
            type: p,
            onUpdate: m,
            finalKeyframe: h,
          } = this.options;
          (this.startTime === this.pendingStartTime && (this.startTime = Cu(this.startTime, e)),
            (this.pendingStartTime = void 0),
            this.speed > 0
              ? (this.startTime = Math.min(this.startTime, e))
              : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)),
            t ? (this.currentTime = e) : this.updateTime(e));
          let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
            _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
          ((this.currentTime = Math.max(g, 0)),
            this.state === `finished` && this.holdTime === null && (this.currentTime = r));
          let v = this.currentTime,
            y = n;
          if (u) {
            let e = Math.min(this.currentTime, r) / o,
              t = Math.floor(e),
              n = e % 1;
            (!n && e >= 1 && (n = 1),
              n === 1 && t--,
              (t = Math.min(t, u + 1)),
              t % 2 &&
                (d === `reverse` ? ((n = 1 - n), f && (n -= f / o)) : d === `mirror` && (y = a)),
              (v = M(0, 1, n) * o));
          }
          let b;
          (_ ? ((this.delayState.value = l[0]), (b = this.delayState)) : (b = y.next(v)),
            i && !_ && (b.value = i(b.value)));
          let { done: x } = b;
          !_ &&
            s !== null &&
            (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
          let S =
            this.holdTime === null &&
            (this.state === `finished` || (this.state === `running` && x));
          return (
            S && p !== We && (b.value = et(l, this.options, h, this.speed)),
            m && m(b.value),
            S && this.finish(),
            b
          );
        }
        then(e, t) {
          return this.finished.then(e, t);
        }
        get duration() {
          return /* @__PURE__ */ I(this.calculatedDuration);
        }
        get iterationDuration() {
          let { delay: e = 0 } = this.options || {};
          return this.duration + /* @__PURE__ */ I(e);
        }
        get time() {
          return /* @__PURE__ */ I(this.currentTime);
        }
        set time(e) {
          ((e = /* @__PURE__ */ F(e)),
            (this.currentTime = e),
            this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0
              ? (this.holdTime = e)
              : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed),
            this.driver
              ? this.driver.start(!1)
              : ((this.startTime = 0), (this.state = `paused`), (this.holdTime = e), this.tick(e)));
        }
        getGeneratorVelocity() {
          return $e(this.generator, this.currentTime, this.options.velocity);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          let t = this.playbackSpeed !== e;
          (t && this.driver && this.updateTime(R.now()),
            (this.playbackSpeed = e),
            t && this.driver && (this.time = /* @__PURE__ */ I(this.currentTime)));
        }
        play() {
          if (this.isStopped) return;
          let { driver: e = fu, startTime: t } = this.options;
          ((this.driver ||= e((e) => this.tick(e))), this.options.onPlay?.());
          let n = this.driver.now();
          (this.state === `finished`
            ? (this.updateFinished(), (this.startTime = n))
            : this.holdTime === null
              ? (this.startTime ||= t ?? (this.pendingStartTime = n))
              : (this.startTime = n - this.holdTime / (this.playbackSpeed || 1)),
            this.state === `finished` &&
              this.speed < 0 &&
              (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = `running`),
            this.driver.start());
        }
        pause() {
          ((this.state = `paused`), this.updateTime(R.now()), (this.holdTime = this.currentTime));
        }
        complete() {
          (this.state !== `running` && this.play(),
            (this.state = `finished`),
            (this.holdTime = null));
        }
        finish() {
          (this.notifyFinished(),
            this.teardown(),
            (this.state = `finished`),
            this.options.onComplete?.());
        }
        cancel() {
          ((this.holdTime = null),
            (this.startTime = 0),
            this.tick(0),
            this.teardown(),
            this.options.onCancel?.());
        }
        teardown() {
          ((this.state = `idle`), this.stopDriver(), (this.startTime = this.holdTime = null));
        }
        stopDriver() {
          this.driver &&= (this.driver.stop(), void 0);
        }
        sample(e) {
          return ((this.startTime = 0), this.tick(e, !0));
        }
        attachTimeline(e) {
          return (
            this.options.allowFlatten &&
              ((this.options.type = `keyframes`),
              (this.options.ease = `linear`),
              this.initAnimation()),
            this.driver?.stop(),
            e.observe(this)
          );
        }
      }),
      (Du = /* @__PURE__ */ new Set([`brightness`, `contrast`, `saturate`, `opacity`])),
      (Ou = /\b([a-z-]*)\(.*?\)/gu),
      (ku = {
        ...H,
        getAnimatableNone: (e) => {
          let t = e.match(Ou);
          return t ? t.map(ot).join(` `) : e;
        },
      }),
      (Au = {
        ...H,
        getAnimatableNone: (e) => {
          let t = H.parse(e);
          return H.createTransformer(e)(
            t.map((e) => (typeof e == `number` ? 0 : typeof e == `object` ? { ...e, alpha: 1 } : e))
          );
        },
      }),
      (ju = { ...Ol, transform: Math.round }),
      (Mu = {
        rotate: Bl,
        pathRotation: Bl,
        rotateX: Bl,
        rotateY: Bl,
        rotateZ: Bl,
        scale: Al,
        scaleX: Al,
        scaleY: Al,
        scaleZ: Al,
        skew: Bl,
        skewX: Bl,
        skewY: Bl,
        distance: B,
        translateX: B,
        translateY: B,
        translateZ: B,
        x: B,
        y: B,
        z: B,
        perspective: B,
        transformPerspective: B,
        opacity: kl,
        originX: Ul,
        originY: Ul,
        originZ: B,
      }),
      (q = {
        borderWidth: B,
        borderTopWidth: B,
        borderRightWidth: B,
        borderBottomWidth: B,
        borderLeftWidth: B,
        borderRadius: B,
        borderTopLeftRadius: B,
        borderTopRightRadius: B,
        borderBottomRightRadius: B,
        borderBottomLeftRadius: B,
        width: B,
        maxWidth: B,
        height: B,
        maxHeight: B,
        top: B,
        right: B,
        bottom: B,
        left: B,
        inset: B,
        insetBlock: B,
        insetBlockStart: B,
        insetBlockEnd: B,
        insetInline: B,
        insetInlineStart: B,
        insetInlineEnd: B,
        padding: B,
        paddingTop: B,
        paddingRight: B,
        paddingBottom: B,
        paddingLeft: B,
        paddingBlock: B,
        paddingBlockStart: B,
        paddingBlockEnd: B,
        paddingInline: B,
        paddingInlineStart: B,
        paddingInlineEnd: B,
        margin: B,
        marginTop: B,
        marginRight: B,
        marginBottom: B,
        marginLeft: B,
        marginBlock: B,
        marginBlockStart: B,
        marginBlockEnd: B,
        marginInline: B,
        marginInlineStart: B,
        marginInlineEnd: B,
        fontSize: B,
        backgroundPositionX: B,
        backgroundPositionY: B,
        ...Mu,
        zIndex: ju,
        fillOpacity: kl,
        strokeOpacity: kl,
        numOctaves: ju,
      }),
      (Nu = {
        ...q,
        color: V,
        backgroundColor: V,
        outlineColor: V,
        fill: V,
        stroke: V,
        borderColor: V,
        borderTopColor: V,
        borderRightColor: V,
        borderBottomColor: V,
        borderLeftColor: V,
        filter: ku,
        WebkitFilter: ku,
        mask: Au,
        WebkitMask: Au,
      }),
      (Pu = (e) => Nu[e]),
      (Fu = /*@__PURE__*/ new Set([ku, Au])),
      (Iu = (e) => (e * 180) / Math.PI),
      (Lu = (e) => {
        let t = Iu(Math.atan2(e[1], e[0]));
        return zu(t);
      }),
      (Ru = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: Lu,
        rotateZ: Lu,
        skewX: (e) => Iu(Math.atan(e[1])),
        skewY: (e) => Iu(Math.atan(e[2])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
      }),
      (zu = (e) => ((e %= 360), e < 0 && (e += 360), e)),
      (Bu = Lu),
      (Vu = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1])),
      (Hu = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5])),
      (Uu = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: Vu,
        scaleY: Hu,
        scale: (e) => (Vu(e) + Hu(e)) / 2,
        rotateX: (e) => zu(Iu(Math.atan2(e[6], e[5]))),
        rotateY: (e) => zu(Iu(Math.atan2(-e[2], e[0]))),
        rotateZ: Bu,
        rotate: Bu,
        skewX: (e) => Iu(Math.atan(e[4])),
        skewY: (e) => Iu(Math.atan(e[1])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
      }),
      (Wu = (e, t) => {
        let { transform: n = `none` } = getComputedStyle(e);
        return ut(n, t);
      }),
      (Gu = [
        `transformPerspective`,
        `x`,
        `y`,
        `z`,
        `translateX`,
        `translateY`,
        `translateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `skew`,
        `skewX`,
        `skewY`,
      ]),
      (J = /* @__PURE__ */ new Set([...Gu, `pathRotation`])),
      (Ku = (e) => e === Ol || e === B),
      (qu = /* @__PURE__ */ new Set([`x`, `y`, `z`])),
      (Ju = Gu.filter((e) => !qu.has(e))),
      (Yu = /* @__PURE__ */ new Set([`bottom`, `right`])),
      (Xu = {
        width: ({ width: e, paddingLeft: t = `0`, paddingRight: n = `0`, boxSizing: r }, i) =>
          pt(e, i, `x`, t, n, r),
        height: ({ height: e, paddingTop: t = `0`, paddingBottom: n = `0`, boxSizing: r }, i) =>
          pt(e, i, `y`, t, n, r),
        top: ({ top: e }) => parseFloat(e),
        left: ({ left: e }) => parseFloat(e),
        bottom: ({ top: e }, t) => {
          let { y: n } = t();
          return parseFloat(e) + (n.max - n.min);
        },
        right: ({ left: e }, t) => {
          let { x: n } = t();
          return parseFloat(e) + (n.max - n.min);
        },
        x: ({ transform: e }) => ut(e, `x`),
        y: ({ transform: e }) => ut(e, `y`),
      }),
      (Xu.translateX = Xu.x),
      (Xu.translateY = Xu.y),
      (Zu = /* @__PURE__ */ new Set()),
      (Qu = !1),
      ($u = !1),
      (ed = !1),
      (td = class {
        constructor(e, t, n, r, i, a = !1) {
          ((this.state = `pending`),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.unresolvedKeyframes = [...e]),
            (this.onComplete = t),
            (this.name = n),
            (this.motionValue = r),
            (this.element = i),
            (this.isAsync = a));
        }
        scheduleResolve() {
          ((this.state = `scheduled`),
            this.isAsync
              ? (Zu.add(this), Qu || ((Qu = !0), W.read(ht), W.resolveKeyframes(mt)))
              : (this.readKeyframes(), this.complete()));
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
          if (e[0] === null) {
            let i = r?.get(),
              a = e[e.length - 1];
            if (i !== void 0) e[0] = i;
            else if (n && t) {
              let r = _t(n.readValue(t, a), t, a);
              r !== void 0 && (e[0] = r);
            }
            (e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]));
          }
          ct(e);
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(e = !1) {
          ((this.state = `complete`),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
            Zu.delete(this));
        }
        cancel() {
          this.state === `scheduled` && (Zu.delete(this), (this.state = `pending`));
        }
        resume() {
          this.state === `pending` && this.scheduleResolve();
        }
      }),
      (nd = (e) => e.startsWith(`--`)),
      (rd = {}),
      (id = /* @__PURE__ */ yt(() => f.ScrollTimeline !== void 0, `scrollTimeline`)),
      (ad = /* @__PURE__ */ yt(() => f.ViewTimeline !== void 0, `viewTimeline`)),
      (od = /*@__PURE__*/ yt(() => {
        try {
          document.createElement(`div`).animate({ opacity: 0 }, { easing: `linear(0, 1)` });
        } catch {
          return !1;
        }
        return !0;
      }, `linearEasing`)),
      (sd = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`),
      (cd = {
        linear: `linear`,
        ease: `ease`,
        easeIn: `ease-in`,
        easeOut: `ease-out`,
        easeInOut: `ease-in-out`,
        circIn: /*@__PURE__*/ sd([0, 0.65, 0.55, 1]),
        circOut: /*@__PURE__*/ sd([0.55, 0, 1, 0.45]),
        backIn: /*@__PURE__*/ sd([0.31, 0.01, 0.66, -0.59]),
        backOut: /*@__PURE__*/ sd([0.33, 1.53, 0.69, 0.99]),
      }),
      (ld = class extends wu {
        constructor(e) {
          if (
            (super(),
            (this.finishedTime = null),
            (this.isStopped = !1),
            (this.manualStartTime = null),
            !e)
          )
            return;
          let {
            element: t,
            name: n,
            keyframes: r,
            pseudoElement: i,
            allowFlatten: a = !1,
            finalKeyframe: o,
            onComplete: s,
          } = e;
          ((this.isPseudoElement = !!i), (this.allowFlatten = a), (this.options = e), e.type);
          let c = Ct(e);
          ((this.animation = xt(t, n, r, c, i)),
            c.autoplay === !1 && this.animation.pause(),
            (this.animation.onfinish = () => {
              if (((this.finishedTime = this.time), !i)) {
                let e = et(r, this.options, o, this.speed);
                (this.updateMotionValue && this.updateMotionValue(e),
                  vt(t, n, e),
                  this.animation.cancel());
              }
              (s?.(), this.notifyFinished());
            }),
            rt(this, e, c));
        }
        play() {
          this.isStopped ||
            ((this.manualStartTime = null),
            this.animation.play(),
            this.state === `finished` && this.updateFinished());
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.finish?.();
        }
        cancel() {
          try {
            this.animation.cancel();
          } catch {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          let { state: e } = this;
          e !== `idle` &&
            e !== `finished` &&
            (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
            this.isPseudoElement || this.cancel());
        }
        commitStyles() {
          let e = this.options?.element;
          !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
        }
        get duration() {
          let e = this.animation.effect?.getComputedTiming?.().duration || 0;
          return /* @__PURE__ */ I(Number(e));
        }
        get iterationDuration() {
          let { delay: e = 0 } = this.options || {};
          return this.duration + /* @__PURE__ */ I(e);
        }
        get time() {
          return /* @__PURE__ */ I(Number(this.animation.currentTime) || 0);
        }
        set time(e) {
          let t = this.finishedTime !== null;
          ((this.manualStartTime = null),
            (this.finishedTime = null),
            (this.animation.currentTime = /* @__PURE__ */ F(e)),
            t && this.animation.pause());
        }
        get speed() {
          return this.animation.playbackRate;
        }
        set speed(e) {
          (e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e));
        }
        get state() {
          return this.finishedTime === null ? this.animation.playState : `finished`;
        }
        get startTime() {
          return this.manualStartTime ?? Number(this.animation.startTime);
        }
        set startTime(e) {
          this.manualStartTime = this.animation.startTime = e;
        }
        attachTimeline({ timeline: e, onAttach: t, observe: n }) {
          return (
            this.allowFlatten && this.animation.effect?.updateTiming({ easing: `linear` }),
            (this.animation.onfinish = null),
            e && id() ? ((this.animation.timeline = e), t?.(this.animation), P) : n(this)
          );
        }
      }),
      (ud = { anticipate: ll, backInOut: cl, circInOut: fl }),
      (dd = 10),
      (fd = class extends ld {
        constructor(e) {
          (Tt(e),
            tt(e),
            super(e),
            e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime),
            (this.options = e));
        }
        updateMotionValue(e) {
          let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
          if (!t) return;
          if (e !== void 0) {
            t.set(e);
            return;
          }
          let o = new Eu({ ...a, autoplay: !1 }),
            s = Math.max(dd, R.now() - this.startTime),
            c = M(0, dd, s - dd),
            l = o.sample(s).value,
            { name: u } = this.options;
          (i && u && vt(i, u, l),
            t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c),
            o.stop());
        }
      }),
      (pd = (e, t) =>
        t !== `zIndex` &&
        !!(
          typeof e == `number` ||
          Array.isArray(e) ||
          (typeof e == `string` && (H.test(e) || e === `0`) && !e.startsWith(`url(`))
        )),
      (md = /* @__PURE__ */ new Set([
        `opacity`,
        `clipPath`,
        `filter`,
        `transform`,
        `backgroundColor`,
      ])),
      (hd = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/),
      (gd = /* @__PURE__ */ new Set([
        `color`,
        `backgroundColor`,
        `outlineColor`,
        `fill`,
        `stroke`,
        `borderColor`,
        `borderTopColor`,
        `borderRightColor`,
        `borderBottomColor`,
        `borderLeftColor`,
      ])),
      (_d = /*@__PURE__*/ ie(() => Object.hasOwnProperty.call(Element.prototype, `animate`))),
      (vd = class extends wu {
        constructor(e) {
          (super(),
            (this.stop = () => {
              (this._animation && (this._animation.stop(), this.stopTimeline?.()),
                this.keyframeResolver?.cancel());
            }),
            (this.createdAt = R.now()));
          let { keyframes: t, name: n, motionValue: r, element: i } = e,
            a = e;
          ((a.autoplay ??= !0),
            (a.delay ??= 0),
            (a.type ??= `keyframes`),
            (a.repeat ??= 0),
            (a.repeatDelay ??= 0),
            (a.repeatType ??= `loop`));
          let o = i?.KeyframeResolver || td;
          ((this.keyframeResolver = new o(
            t,
            (e, t, n) => this.onKeyframesResolved(e, t, a, !n),
            n,
            r,
            i
          )),
            this.keyframeResolver?.scheduleResolve());
        }
        onKeyframesResolved(e, t, n, r) {
          this.keyframeResolver = void 0;
          let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
          this.resolvedAt = R.now();
          let u = !0;
          Dt(e, i, a, o) ||
            ((u = !1),
            (N.instantAnimations || !s) && l?.(et(e, n, t)),
            (e[0] = e[e.length - 1]),
            Ot(n),
            (n.repeat = 0));
          let { onComplete: d } = n;
          ((n.finalKeyframe = t),
            (n.keyframes = e),
            (n.onComplete = () => {
              (d?.(), this.notifyFinished());
            }));
          let f = u && !c && At(n);
          r &&
            (f || this.resolvedAt !== this.createdAt) &&
            (n.startTime ??= Cu(this.createdAt, this.resolvedAt));
          let p;
          if (f) {
            n.element = n.motionValue?.owner?.current;
            try {
              p = new fd(n);
            } catch {
              p = new Eu(n);
            }
          } else p = new Eu(n);
          ((this.pendingTimeline &&=
            ((this.stopTimeline = p.attachTimeline(this.pendingTimeline)), void 0)),
            (this._animation = p));
        }
        get finished() {
          return this._animation ? this._animation.finished : super.finished;
        }
        then(e, t) {
          return this.finished.finally(e).then(() => {});
        }
        get animation() {
          return (this._animation || (this.keyframeResolver?.resume(), gt()), this._animation);
        }
        get duration() {
          return this.animation.duration;
        }
        get iterationDuration() {
          return this.animation.iterationDuration;
        }
        get time() {
          return this.animation.time;
        }
        set time(e) {
          this.animation.time = e;
        }
        get speed() {
          return this.animation.speed;
        }
        get state() {
          return this.animation.state;
        }
        set speed(e) {
          this.animation.speed = e;
        }
        get startTime() {
          return this.animation.startTime;
        }
        attachTimeline(e) {
          return (
            this._animation
              ? (this.stopTimeline = this.animation.attachTimeline(e))
              : (this.pendingTimeline = e),
            () => this.stop()
          );
        }
        play() {
          this.animation.play();
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.complete();
        }
        cancel() {
          (this._animation && this.animation.cancel(), this.keyframeResolver?.cancel());
        }
      }),
      (yd = class {
        constructor(e) {
          ((this.stop = () => this.runAll(`stop`)), (this.animations = e.filter(Boolean)));
        }
        get finished() {
          return Promise.all(this.animations.map((e) => e.finished));
        }
        getAll(e) {
          return this.animations[0][e];
        }
        setAll(e, t) {
          for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t;
        }
        attachTimeline(e) {
          let t = this.animations.map((t) => t.attachTimeline(e));
          return () => {
            t.forEach((e, t) => {
              (e && e(), this.animations[t].stop());
            });
          };
        }
        get time() {
          return this.getAll(`time`);
        }
        set time(e) {
          this.setAll(`time`, e);
        }
        get speed() {
          return this.getAll(`speed`);
        }
        set speed(e) {
          this.setAll(`speed`, e);
        }
        get state() {
          return this.getAll(`state`);
        }
        get startTime() {
          return this.getAll(`startTime`);
        }
        get duration() {
          return jt(this.animations, `duration`);
        }
        get iterationDuration() {
          return jt(this.animations, `iterationDuration`);
        }
        runAll(e) {
          this.animations.forEach((t) => t[e]());
        }
        play() {
          this.runAll(`play`);
        }
        pause() {
          this.runAll(`pause`);
        }
        cancel() {
          this.runAll(`cancel`);
        }
        complete() {
          this.runAll(`complete`);
        }
      }),
      (bd = class extends yd {
        then(e, t) {
          return this.finished.finally(e).then(() => {});
        }
      }),
      (xd = class extends ld {
        constructor(e) {
          (super(),
            (this.animation = e),
            (e.onfinish = () => {
              ((this.finishedTime = this.time), this.notifyFinished());
            }),
            rt(this, {}));
        }
      }),
      (Sd = /* @__PURE__ */ new WeakMap()),
      (Cd = (e, t = ``) => `${e}:${t}`),
      (wd = 30),
      (Td = (e) => !isNaN(parseFloat(e))),
      (Ed = { current: void 0 }),
      (Dd = class {
        constructor(e, t = {}) {
          ((this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (e) => {
              let t = R.now();
              if (
                (this.updatedAt !== t && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev && (this.notifyChange(), this.dependents))
              )
                for (let e of this.dependents) e.dirty();
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.owner = t.owner));
        }
        setCurrent(e) {
          ((this.current = e),
            (this.updatedAt = R.now()),
            this.canTrackVelocity === null &&
              e !== void 0 &&
              (this.canTrackVelocity = Td(this.current)));
        }
        setPrevFrameValue(e = this.current) {
          ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
        }
        onChange(e) {
          return this.on(`change`, e);
        }
        on(e, t) {
          var n;
          return e === `change`
            ? this.onChangeSubscribe(t)
            : ((n = this.events)[e] || (n[e] = new $c())).add(t);
        }
        onChangeSubscribe(e) {
          let { events: t } = this;
          return (
            !t.change && !this.changeSubscriber
              ? (this.changeSubscriber = e)
              : (t.change ||
                  ((t.change = new $c()),
                  t.change.add(this.changeSubscriber),
                  (this.changeSubscriber = void 0)),
                t.change.add(e)),
            () => {
              (this.changeSubscriber === e ? (this.changeSubscriber = void 0) : t.change?.remove(e),
                this.stopIfUnobserved());
            }
          );
        }
        stopIfUnobserved() {
          W.read(() => {
            !this.changeSubscriber && !this.events.change?.getSize() && this.stop();
          });
        }
        clearListeners() {
          this.changeSubscriber = void 0;
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          ((this.passiveEffect = e), (this.stopPassiveEffect = t));
        }
        set(e) {
          this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e);
        }
        setWithVelocity(e, t, n) {
          (this.set(t),
            (this.prev = void 0),
            (this.prevFrameValue = e),
            (this.prevUpdatedAt = this.updatedAt - n));
        }
        jump(e, t = !0) {
          (this.updateAndNotify(e),
            (this.prev = e),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
        dirty() {
          this.notifyChange();
        }
        notifyChange() {
          let { current: e, changeSubscriber: t } = this;
          t ? t(e) : this.events.change?.notify(e);
        }
        addDependent(e) {
          ((this.dependents ||= /* @__PURE__ */ new Set()), this.dependents.add(e));
        }
        removeDependent(e) {
          this.dependents && this.dependents.delete(e);
        }
        get() {
          return (Ed.current && Ed.current.push(this), this.current);
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let e = R.now();
          if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > wd)
            return 0;
          let t = Math.min(this.updatedAt - this.prevUpdatedAt, wd);
          return /* @__PURE__ */ el(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              this.hasAnimated = !0;
              let n = !1,
                r;
              ((r = e(() => {
                ((n = !0),
                  this.events.animationComplete?.notify(),
                  this.animation === r && this.clearAnimation(),
                  t());
              })),
                n || (this.animation = r),
                this.events.animationStart?.notify());
            })
          );
        }
        stop() {
          (this.animation &&
            (this.animation.stop(),
            this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation());
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          this.animation = void 0;
        }
        destroy() {
          (this.dependents?.clear(),
            this.events.destroy?.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
      }),
      (Od = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 }),
      (kd = (e) => ({
        type: `spring`,
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10,
      })),
      (Ad = { type: `keyframes`, duration: 0.8 }),
      (jd = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 }),
      (Md = (e, { keyframes: t }) =>
        t.length > 2 ? Ad : J.has(e) ? (e.startsWith(`scale`) ? kd(t[1]) : Od) : jd),
      (Nd = /* @__PURE__ */ new Set([
        `when`,
        `delay`,
        `delayChildren`,
        `staggerChildren`,
        `staggerDirection`,
        `repeat`,
        `repeatType`,
        `repeatDelay`,
        `from`,
        `elapsed`,
      ])),
      (Pd =
        (e, t, n, r = {}, i, a) =>
        (o) => {
          let s = Ft(r, e) || {},
            c = s.delay || r.delay || 0,
            { elapsed: l = 0 } = r;
          l -= /* @__PURE__ */ F(c);
          let u = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: `easeOut`,
            velocity: t.getVelocity(),
            ...s,
            delay: -l,
            onUpdate: (e) => {
              (t.set(e), s.onUpdate && s.onUpdate(e));
            },
            onComplete: () => {
              (o(), s.onComplete && s.onComplete());
            },
            name: e,
            motionValue: t,
            element: a ? void 0 : i,
          };
          (It(s) || Object.assign(u, Md(e, u)),
            (u.duration &&= /* @__PURE__ */ F(u.duration)),
            (u.repeatDelay &&= /* @__PURE__ */ F(u.repeatDelay)),
            u.from !== void 0 && (u.keyframes[0] = u.from));
          let d = !1;
          if (
            ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
              (Ot(u), u.delay === 0 && (d = !0)),
            (N.instantAnimations ||
              N.skipAnimations ||
              i?.shouldSkipAnimations ||
              s.skipAnimations) &&
              ((d = !0), Ot(u), (u.delay = 0)),
            (u.allowFlatten = !s.type && !s.ease),
            d && !a && t.get() !== void 0)
          ) {
            let e = et(u.keyframes, s);
            if (e !== void 0) {
              W.update(() => {
                (u.onUpdate(e), u.onComplete());
              });
              return;
            }
          }
          return s.isSync ? new Eu(u) : new vd(u);
        }),
      (Fd = 20),
      (Id = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u),
      (Ld = (e, t) => (t === `exit` ? e.presenceContext?.custom : void 0)),
      (Rd = /* @__PURE__ */ new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...Gu])),
      (zd = (e) => Array.isArray(e)),
      (Y = (e) => !!(e && e.getVelocity)),
      (Bd = `framerAppearId`),
      (Vd = `data-` + Qt(Bd)),
      (Hd = f !== void 0),
      (Ud = { test: (e) => e === `auto`, parse: (e) => e }),
      (Wd = (e) => (t) => t.test(e)),
      (Gd = [Ol, B, z, Bl, Hl, Vl, Ud]),
      (Kd = (e) => Gd.find(Wd(e))),
      (qd = /* @__PURE__ */ new Set([`auto`, `none`, `0`])),
      (Jd = class extends td {
        constructor(e, t, n, r, i) {
          super(e, t, n, r, i, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, element: t, name: n } = this;
          if (!t || !t.current) return;
          super.readKeyframes();
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            if (typeof r == `string` && ((r = r.trim()), El(r))) {
              let i = Ut(r, t.current);
              (i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r));
            }
          }
          if ((this.resolveNoneKeyframes(), !Rd.has(n) || e.length !== 2)) return;
          let [r, i] = e;
          if (typeof r == `number` && typeof i == `number`) return;
          let a = Kd(r),
            o = Kd(i);
          if (de(r) !== de(i) && Xu[n]) this.needsMeasurement = !0;
          else if (a !== o) {
            if (Ku(a) && Ku(o))
              for (let t = 0; t < e.length; t++) {
                let n = e[t];
                typeof n == `string` && (e[t] = parseFloat(n));
              }
            else Xu[n] && (this.needsMeasurement = !0);
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: e, name: t } = this,
            n = [];
          for (let t = 0; t < e.length; t++) (e[t] === null || an(e[t])) && n.push(t);
          n.length && on(e, n, t);
        }
        measure() {
          let { element: e, name: t } = this;
          return Xu[t](f.getComputedStyle(e.current), () => e.measureViewportBox());
        }
        measureInitialState() {
          let { element: e, unresolvedKeyframes: t, name: n } = this;
          if (!e || !e.current) return;
          (n === `height` && (this.suspendedScrollY = f.pageYOffset),
            (this.measuredOrigin = this.measure()),
            (t[0] = this.measuredOrigin));
          let r = t[t.length - 1];
          r !== void 0 && this.motionValue?.jump(r, !1);
        }
        measureEndState() {
          let { element: e, unresolvedKeyframes: t } = this;
          if (!e || !e.current) return;
          this.motionValue?.jump(this.measuredOrigin, !1);
          let n = t.length - 1,
            r = t[n];
          ((t[n] = this.measure()),
            r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r),
            this.removedTransforms?.length &&
              this.removedTransforms.forEach(([t, n]) => {
                e.getValue(t).set(n);
              }),
            this.resolveNoneKeyframes());
        }
      }),
      (Yd = [
        `borderTopLeftRadius`,
        `borderTopRightRadius`,
        `borderBottomRightRadius`,
        `borderBottomLeftRadius`,
      ]),
      (Xd = /* @__PURE__ */ new Set([
        `borderWidth`,
        `borderTopWidth`,
        `borderRightWidth`,
        `borderBottomWidth`,
        `borderLeftWidth`,
        `borderRadius`,
        ...Yd,
        `width`,
        `maxWidth`,
        `height`,
        `maxHeight`,
        `top`,
        `right`,
        `bottom`,
        `left`,
        `inset`,
        `insetBlock`,
        `insetBlockStart`,
        `insetBlockEnd`,
        `insetInline`,
        `insetInlineStart`,
        `insetInlineEnd`,
        `padding`,
        `paddingTop`,
        `paddingRight`,
        `paddingBottom`,
        `paddingLeft`,
        `paddingBlock`,
        `paddingBlockStart`,
        `paddingBlockEnd`,
        `paddingInline`,
        `paddingInlineStart`,
        `paddingInlineEnd`,
        `margin`,
        `marginTop`,
        `marginRight`,
        `marginBottom`,
        `marginLeft`,
        `marginBlock`,
        `marginBlockStart`,
        `marginBlockEnd`,
        `marginInline`,
        `marginInlineStart`,
        `marginInlineEnd`,
        `fontSize`,
        `backgroundPositionX`,
        `backgroundPositionY`,
      ])),
      (Zd = /*@__PURE__*/ ie(() => {
        try {
          document.createElement(`div`).animate({ opacity: [1] });
        } catch {
          return !1;
        }
        return !0;
      })),
      (Qd = []),
      ($d = (e, t) => (t && typeof e == `number` ? t.transform(e) : e)),
      (ef = class {
        constructor(e = W.render) {
          ((this.step = e),
            (this.values = /* @__PURE__ */ new Map()),
            (this.pending = []),
            (this.numPending = 0),
            (this.flush = () => {
              let { pending: e, numPending: t } = this;
              this.numPending = 0;
              for (let n = 0; n < t; n++) e[n]();
            }));
        }
        set(e, t, n, r) {
          if ((this.values.get(e)?.onRemove(), r))
            for (let e of this.values.values()) e.value === r && (n = e.render);
          let i = () => n && this.schedule(n);
          t.get() !== void 0 && i();
          let a = t.on(`change`, i),
            o = () => {
              (a(),
                n && !r && this.cancel(n),
                this.values.get(e)?.onRemove === o && this.values.delete(e));
            };
          return (this.values.set(e, { value: t, render: r ? void 0 : n, onRemove: o }), o);
        }
        get(e) {
          return this.values.get(e)?.value;
        }
        release() {
          let e = /* @__PURE__ */ new Map();
          return (
            this.values.forEach((t, n) => {
              (e.set(n, t.value), t.onRemove());
            }),
            (this.transformKeys = this.transformValues = void 0),
            e
          );
        }
        schedule(e) {
          let { pending: t, numPending: n } = this;
          for (let r = 0; r < n; r++) if (t[r] === e) return;
          (n || this.step(this.flush), (t[this.numPending++] = e));
        }
        cancel(e) {
          let { pending: t } = this;
          for (let n = 0; n < this.numPending; n++)
            if (t[n] === e) {
              t[n] = t[--this.numPending];
              return;
            }
        }
      }),
      (tf = {
        x: `translateX`,
        y: `translateY`,
        z: `translateZ`,
        transformPerspective: `perspective`,
      }),
      (nf = {}),
      (rf = /* @__PURE__ */ new Set([`originX`, `originY`, `originZ`])),
      (af = (e, t) => $d(e.get(t)?.get(), q[t])),
      (of = (e, t, n, r) => {
        let i, a;
        if (J.has(n)) {
          if (n !== `pathRotation`) {
            let e = (t.transformKeys ??= []);
            (((t.transformValues ??= {})[n] = r),
              e.includes(n) || (e.push(n), e.sort((e, t) => Gu.indexOf(e) - Gu.indexOf(t))));
          }
          (t.get(`transform`) ||
            (!hn(e) && !t.get(`transformBox`) && of(e, t, `transformBox`, new Dd(`fill-box`)),
            t.set(`transform`, new Dd(`none`), () => {
              e.style.transform = bn(t);
            })),
            (a = t.get(`transform`)));
        } else
          rf.has(n)
            ? (t.get(`transformOrigin`) ||
                t.set(`transformOrigin`, new Dd(``), () => {
                  let n = af(t, `originX`) ?? `50%`,
                    r = af(t, `originY`) ?? `50%`,
                    i = af(t, `originZ`) ?? 0;
                  e.style.transformOrigin = `${n} ${r} ${i}`;
                }),
              (a = t.get(`transformOrigin`)))
            : (i = nd(n)
                ? () => {
                    e.style.setProperty(n, r.get());
                  }
                : () => {
                    e.style[n] = $d(r.get(), q[n]);
                  });
        return t.set(n, r, i, a);
      }),
      (sf = (e) => hn(e) || gn(e)),
      (cf = (e, t) => {
        if (J.has(t)) return Wu(e, t);
        let n = getComputedStyle(e),
          r = nd(t) ? n.getPropertyValue(t) : n[t];
        return (typeof r == `string` && r.trim()) || 0;
      }),
      (lf = /*@__PURE__*/ yn(of, { test: sf, read: cf })),
      (uf = /*@__PURE__*/ vn(lf)),
      (df = {
        x: `translateX`,
        y: `translateY`,
        z: `translateZ`,
        transformPerspective: `perspective`,
      }),
      (ff = Gu.length),
      (pf = { offset: `stroke-dashoffset`, array: `stroke-dasharray` }),
      (mf = { offset: `strokeDashoffset`, array: `strokeDasharray` }),
      (hf = [
        `transform`,
        `opacity`,
        `clipPath`,
        `filter`,
        `offsetDistance`,
        `offsetPath`,
        `offsetRotate`,
        `offsetAnchor`,
      ]),
      (gf = (e, t, n, r, i = n) => {
        let a = Tn(e, i);
        !a && (i.startsWith(`data`) || i.startsWith(`aria`)) && (i = Qt(i));
        let o = q[n] || q[i],
          s = a
            ? () => {
                e[i] = $d(r.get(), q[n]);
              }
            : () => {
                let t = $d(r.get(), o);
                t == null ? e.removeAttribute(i) : e.setAttribute(i, String(t));
              };
        return t.set(n, r, s);
      }),
      (_f = /*@__PURE__*/ vn(/*@__PURE__*/ yn(gf))),
      (vf = (e, t, n, r) =>
        n.startsWith(`path`)
          ? En(e, t, n, r)
          : n.startsWith(`attr`)
            ? gf(e, t, n, r, Dn(n))
            : (J.has(n) || rf.has(n) || nd(n) || n in e.style ? of : gf)(e, t, n, r)),
      (yf = (e, t) =>
        J.has(t)
          ? q[t]?.default || 0
          : nd(t) || hf.includes(t)
            ? cf(e, t) || e.getAttribute(Qt(t)) || 0
            : ((t = Dn(t)), e.getAttribute(Qt(t)) ?? e.getAttribute(t) ?? void 0)),
      (bf = /*@__PURE__*/ yn(vf, { test: gn, read: yf })),
      (xf = /*@__PURE__*/ vn(bf)),
      (Sf = 0.999999999999),
      (Cf = 1.0000000000001),
      (wf = {}),
      (Tf = (e) => (gn(e) ? bf : lf)),
      (Ef = class {
        constructor(e, t) {
          ((this.effect = e), (this.current = t), (this.KeyframeResolver = Jd));
        }
        getValue(e) {
          return this.effect.get(this.current, e);
        }
        readValue(e, t) {
          return this.effect.read(this.current, e, t);
        }
        render() {
          this.effect.flush(this.current);
        }
        measureViewportBox() {
          return Wn(this.current);
        }
        getProps() {
          return wf;
        }
      }),
      (Df = /*@__PURE__*/ yn(
        (e, t, n, r) =>
          t.set(n, r, () => {
            e[n] = r.get();
          }),
        {
          test: (e) => Yc(e),
          read: (e, t) => {
            let n = e[t];
            return typeof n == `string` || typeof n == `number` ? n : void 0;
          },
        }
      )),
      ({ schedule: Of, cancel: kf } = /* @__PURE__ */ Pe(queueMicrotask, !1)),
      (X = { x: !1, y: !1 }),
      (Af = (e, t) => (t ? e === t || Af(e, t.parentElement) : !1)),
      (jf = (e) =>
        e.pointerType === `mouse`
          ? typeof e.button != `number` || e.button <= 0
          : e.isPrimary !== !1),
      (Mf = /* @__PURE__ */ new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`])),
      (Nf = /* @__PURE__ */ new Set([`INPUT`, `SELECT`, `TEXTAREA`])),
      (Pf = /* @__PURE__ */ new WeakSet()),
      (Ff = (e, t) => {
        let n = e.currentTarget;
        if (!n) return;
        let r = tr(() => {
          if (Pf.has(n)) return;
          nr(n, `down`);
          let e = tr(() => {
            nr(n, `up`);
          });
          (n.addEventListener(`keyup`, e, t), n.addEventListener(`blur`, () => nr(n, `cancel`), t));
        });
        (n.addEventListener(`keydown`, r, t),
          n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t));
      }),
      (If = /* @__PURE__ */ new WeakSet()),
      (Lf = /* @__PURE__ */ new WeakMap()),
      (zf = (e, t, n) => (r, i) =>
        i && i[0] ? i[0][e + `Size`] : gn(r) && `getBBox` in r ? r.getBBox()[t] : r[n]),
      (Bf = /*@__PURE__*/ zf(`inline`, `width`, `offsetWidth`)),
      (Vf = /*@__PURE__*/ zf(`block`, `height`, `offsetHeight`)),
      (Hf = /* @__PURE__ */ new Set()),
      (Z = { value: null, addProjectionMetrics: null }),
      (Wf = /* @__PURE__ */ new Set()),
      (Gf = ({ timestamp: e }) => {
        Wf.forEach((t) => t.tick(e));
      }),
      (Kf = class extends wu {
        constructor(e) {
          (super(),
            (this.state = `idle`),
            (this.startTime = 0),
            (this.currentTime = 0),
            (this.started = !1),
            (this.hasNextTarget = !1),
            (this.nextTarget = 0),
            (this.stop = () => {
              this.state !== `idle` && (this.teardown(), this.options.onStop?.());
            }),
            (this.options = e),
            (this.factory = e.type),
            (this.generator = this.factory(e)));
          let { driver: t } = e;
          (t && (this.driver = t((e) => this.tick(e))),
            (this.startTime = this.now()),
            (this.state = `running`),
            this.driver ? this.driver.start() : (Wf.size || W.update(Gf, !0), Wf.add(this)));
        }
        setTarget(e, t) {
          ((this.nextTarget = e), (this.nextVelocity = t), (this.hasNextTarget = !0));
        }
        retarget(e, t) {
          let { options: n, generator: r } = this;
          ((n.keyframes = e),
            (n.velocity = t),
            (this.startTime = this.now()),
            (this.currentTime = 0),
            r.retarget ? r.retarget(e, t) : (this.generator = this.factory(n)));
        }
        tick(e) {
          let { options: t, hasNextTarget: n } = this,
            { delay: r = 0, onUpdate: i, onPlay: a } = t;
          this.started || (this.startTime = Cu(this.startTime, e));
          let o = Math.round(e - this.startTime) - r,
            s = (this.currentTime = Math.max(0, o)),
            c = this.generator.next(s),
            l = o < 0 ? t.keyframes[0] : c.value;
          if (n) {
            this.hasNextTarget = !1;
            let { keyframes: e } = t;
            ((e[0] = l),
              (e[1] = this.nextTarget),
              this.retarget(e, this.nextVelocity ?? this.getGeneratorVelocity()));
          }
          ((n || !this.started) && ((this.started = !0), a?.()),
            this.state === `running` &&
              (i?.(l),
              c.done &&
                o >= 0 &&
                !n &&
                !this.hasNextTarget &&
                this.state === `running` &&
                (this.notifyFinished(),
                this.teardown(),
                (this.state = `finished`),
                t.onComplete?.())));
        }
        getGeneratorVelocity() {
          return $e(this.generator, this.currentTime, this.options.velocity);
        }
        now() {
          return this.driver ? this.driver.now() : R.now();
        }
        teardown() {
          ((this.state = `idle`),
            this.driver ? this.driver.stop() : (Wf.delete(this), Wf.size || G(Gf)));
        }
      }),
      (qf = (e) => (typeof e == `number` ? e : parseFloat(e))),
      (Jf = [...Gd, V, H]),
      (Yf = (e) => Jf.find(Wd(e))),
      (Xf = 0),
      (Zf = () => `motion-view-${Xf++}`),
      (Qf = (e) => e.startsWith(`motion-view-`)),
      ($f = {}),
      (ep = null),
      (tp = {
        set: (e, t) => {
          $f[e] = t;
        },
        commit: () => {
          ep || ((ep = document.createElement(`style`)), (ep.id = `motion-view`));
          let e = ``;
          for (let t in $f) {
            let n = $f[t];
            e += `${t} {\n`;
            for (let [t, r] of Object.entries(n)) e += `  ${t}: ${r};\n`;
            e += `}
`;
          }
          ((ep.textContent = e), document.head.appendChild(ep), ($f = {}));
        },
        remove: () => {
          ep && ep.parentElement && ep.parentElement.removeChild(ep);
        },
      }),
      (np = [`layout`, `enter`, `exit`, `new`, `old`]),
      (rp = (e) => e.split(` `).every((e) => parseFloat(e) === 0)),
      (ip = { group: [`layout`], new: [`new`, `enter`], old: [`old`, `exit`] }),
      (ap = { new: { opacity: 0, scale: 0.85 }, old: { opacity: 1, scale: 1 } }),
      (op = 0.2),
      (sp = []),
      (cp = null),
      (lp = class {
        constructor(e, t = {}) {
          ((this.currentSubject = `root`),
            (this.targets = /* @__PURE__ */ new Map()),
            (this.resolveDefs = /* @__PURE__ */ new Set()),
            (this.cropOverride = /* @__PURE__ */ new Map()),
            (this.pairs = /* @__PURE__ */ new Map()),
            (this.classNames = /* @__PURE__ */ new Map()),
            (this.flatGroups = /* @__PURE__ */ new Set()),
            (this.notifyReady = P),
            (this.notifyReject = P),
            (this.readyPromise = new Promise((e, t) => {
              ((this.notifyReady = e), (this.notifyReject = t));
            })),
            (this.update = e),
            (this.options = { interrupt: `wait`, ...t }),
            this.readyPromise.catch(P),
            Hr(this));
        }
        add(e, t) {
          return (
            (this.currentSubject = e),
            this.resolveDefs.add(e),
            t !== void 0 && this.pairs.set(e, t),
            this.targets.has(e) || this.targets.set(e, {}),
            this
          );
        }
        crop(e = !0) {
          return (this.cropOverride.set(this.currentSubject, e), this);
        }
        group(e = !0) {
          return (
            e
              ? this.flatGroups.delete(this.currentSubject)
              : this.flatGroups.add(this.currentSubject),
            this
          );
        }
        class(e) {
          return (this.classNames.set(this.currentSubject, e), this);
        }
        layout(e = {}) {
          return (this.updateTarget(`layout`, {}, e), this);
        }
        enter(e, t) {
          return (this.updateTarget(`enter`, e, t), this);
        }
        exit(e, t) {
          return (this.updateTarget(`exit`, e, t), this);
        }
        new(e, t) {
          return (this.updateTarget(`new`, e, t), this);
        }
        old(e, t) {
          return (this.updateTarget(`old`, e, t), this);
        }
        updateTarget(e, t, n = {}) {
          let { currentSubject: r, targets: i } = this;
          i.has(r) || i.set(r, {});
          let a = i.get(r);
          a[e] = { keyframes: t, options: n };
        }
        then(e, t) {
          return this.readyPromise.then(e, t);
        }
      }),
      (up = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 })),
      (dp = () => ({ x: up(), y: up() })),
      (fp = () => ({ min: 0, max: 0 })),
      (Q = () => ({ x: fp(), y: fp() })),
      (pp = /* @__PURE__ */ new WeakMap()),
      (mp = [
        `animate`,
        `whileInView`,
        `whileFocus`,
        `whileHover`,
        `whileTap`,
        `whileDrag`,
        `exit`,
      ]),
      (hp = [`initial`, ...mp]),
      (gp = { current: null }),
      (_p = { current: !1 }),
      (vp = f !== void 0),
      (yp = [
        `AnimationStart`,
        `AnimationComplete`,
        `Update`,
        `BeforeLayoutMeasure`,
        `LayoutMeasure`,
        `LayoutAnimationStart`,
        `LayoutAnimationComplete`,
      ]),
      (bp = {}),
      (xp = class {
        scrapeMotionValuesFromProps(e, t, n) {
          return {};
        }
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: n,
            reducedMotionConfig: r,
            skipAnimations: i,
            blockInitialAnimation: a,
            visualState: o,
          },
          s = {}
        ) {
          ((this.current = null),
            (this.children = /* @__PURE__ */ new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.shouldSkipAnimations = !1),
            (this.values = /* @__PURE__ */ new Map()),
            (this.KeyframeResolver = td),
            (this.features = {}),
            (this.valueSubscriptions = /* @__PURE__ */ new Map()),
            (this.prevMotionValues = {}),
            (this.hasBeenMounted = !1),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () => this.notify(`Update`, this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let e = R.now();
              this.renderScheduledAt < e &&
                ((this.renderScheduledAt = e), W.render(this.render, !1, !0));
            }));
          let { latestValues: c, renderState: l } = o;
          ((this.latestValues = c),
            (this.baseTarget = { ...c }),
            (this.initialValues = t.initial ? { ...c } : {}),
            (this.renderState = l),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = n),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.skipAnimationsConfig = i),
            (this.options = s),
            (this.blockInitialAnimation = !!a),
            (this.isControllingVariants = Kr(t)),
            (this.isVariantNode = qr(t)),
            this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current)));
          let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
          for (let e in d) {
            let t = d[e];
            c[e] !== void 0 && Y(t) && t.set(c[e]);
          }
        }
        mount(e) {
          if (this.hasBeenMounted)
            for (let e in this.initialValues)
              (this.values.get(e)?.jump(this.initialValues[e]),
                (this.latestValues[e] = this.initialValues[e]));
          if (
            ((this.current = e),
            pp.set(e, this),
            this.projection && !this.projection.instance && this.projection.mount(e),
            this.isVariantNode && !this.isControllingVariants)
          ) {
            let e = this;
            do e = e.props.inherit !== !1 && e.parent;
            while (e && !e.isVariantNode);
            if (e) {
              let { variantChildren: t } = e;
              (t.add(this), (this.removeFromVariantTree = () => t.delete(this)));
            }
          }
          (this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            this.reducedMotionConfig === `never`
              ? (this.shouldReduceMotion = !1)
              : this.reducedMotionConfig === `always`
                ? (this.shouldReduceMotion = !0)
                : (_p.current || Yr(), (this.shouldReduceMotion = gp.current)),
            (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
            this.parent?.addChild(this),
            this.update(this.props, this.presenceContext),
            (this.hasBeenMounted = !0));
        }
        unmount() {
          (this.projection && this.projection.unmount(),
            G(this.notifyUpdate),
            G(this.render),
            this.valueSubscriptions.forEach((e) => e()),
            this.valueSubscriptions.clear(),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent?.removeChild(this));
          for (let e in this.events) this.events[e].clear();
          for (let e in this.features) {
            let t = this.features[e];
            t && (t.unmount(), (t.isMounted = !1));
          }
          this.current = null;
        }
        addChild(e) {
          (this.children.add(e),
            (this.enteringChildren ??= /* @__PURE__ */ new Set()),
            this.enteringChildren.add(e));
        }
        removeChild(e) {
          (this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e));
        }
        bindToMotionValue(e, t) {
          if (
            (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
            t.accelerate && md.has(e) && this.current instanceof HTMLElement)
          ) {
            let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate,
              s = new ld({
                element: this.current,
                name: e,
                keyframes: r,
                times: i,
                ease: a,
                duration: /* @__PURE__ */ F(o),
              }),
              c = n(s);
            this.valueSubscriptions.set(e, () => {
              (c(), s.cancel());
            });
            return;
          }
          let n = J.has(e);
          n && this.onBindTransform && this.onBindTransform();
          let r = t.on(`change`, (t) => {
              ((this.latestValues[e] = t),
                this.props.onUpdate && W.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0),
                this.scheduleRender());
            }),
            i;
          (f !== void 0 && f.MotionCheckAppearSync && (i = f.MotionCheckAppearSync(this, e, t)),
            this.valueSubscriptions.set(e, () => {
              (r(), i && i());
            }));
        }
        sortNodePosition(e) {
          return !this.current ||
            !e.current ||
            !this.sortInstanceNodePosition ||
            this.type !== e.type
            ? 0
            : this.sortInstanceNodePosition(this.current, e.current);
        }
        updateFeatures() {
          let e = `animation`;
          for (e in bp) {
            let t = bp[e];
            if (!t) continue;
            let { isEnabled: n, Feature: r } = t;
            if (
              (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)),
              this.features[e])
            ) {
              let t = this.features[e];
              t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Q();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        update(e, t) {
          ((e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t));
          for (let t = 0; t < yp.length; t++) {
            let n = yp[t];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            let r = e[`on` + n];
            r && (this.propEventSubscriptions[n] = this.on(n, r));
          }
          ((this.prevMotionValues = Jr(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue());
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        addValue(e, t) {
          let n = this.values.get(e);
          if (t !== n) {
            (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t));
            let r = t.get();
            r !== void 0 && (this.latestValues[e] = r);
          }
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          (t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState));
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e]) return this.props.values[e];
          let n = this.values.get(e);
          return (
            n === void 0 &&
              t !== void 0 &&
              ((n = D(t ?? this.getDefaultValue?.(e), { owner: this })), this.addValue(e, n)),
            n
          );
        }
        readValue(e, t) {
          let n =
            this.latestValues[e] !== void 0 || !this.current
              ? this.latestValues[e]
              : (this.getBaseTargetFromProps(this.props, e) ??
                this.readValueFromInstance(this.current, e, this.options));
          return (
            n != null &&
              (typeof n == `string` && (Jc(n) || Xc(n))
                ? (n = parseFloat(n))
                : typeof n != `number` && !H.test(n) && H.test(t) && (n = st(e, t)),
              this.setBaseTarget(e, Y(n) ? n.get() : n)),
            Y(n) ? n.get() : n
          );
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        on(e, t) {
          return (this.events[e] || (this.events[e] = new $c()), this.events[e].add(t));
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
        scheduleRenderMicrotask() {
          Of.render(this.render);
        }
      }),
      (Sp = class extends xp {
        constructor() {
          (super(...arguments), (this.KeyframeResolver = Jd));
        }
        sortInstanceNodePosition(e, t) {
          return e.compareDocumentPosition(t) & 2 ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          let n = e.style;
          return n ? n[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: n }) {
          (delete t[e], delete n[e]);
        }
        handleChildMotionValue() {
          this.childSubscription && (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          Y(e) &&
            (this.childSubscription = e.on(`change`, (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
      }),
      (Cp = class {
        constructor(e) {
          ((this.isMounted = !1), (this.node = e));
        }
        update() {}
      }),
      (wp = {}),
      (Tp = class extends Sp {
        constructor() {
          (super(...arguments), (this.type = `html`), (this.renderInstance = Qr));
        }
        mount(e) {
          (e.style, super.mount(e));
        }
        readValueFromInstance(e, t) {
          if (J.has(t)) return this.projection?.isProjecting ? lt(t) : Wu(e, t);
          {
            let n = ni(e),
              r = (wl(t) ? n.getPropertyValue(t) : n[t]) || 0;
            return typeof r == `string` ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return Wn(e, t);
        }
        build(e, t, n) {
          Sn(e, t, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return ti(e, t, n);
        }
      }),
      (Ep = class extends xp {
        constructor() {
          (super(...arguments), (this.type = `object`));
        }
        readValueFromInstance(e, t) {
          if (ri(t, e)) {
            let n = e[t];
            if (typeof n == `string` || typeof n == `number`) return n;
          }
        }
        getBaseTargetFromProps() {}
        removeValueFromRenderState(e, t) {
          delete t.output[e];
        }
        measureInstanceViewportBox() {
          return Q();
        }
        build(e, t) {
          Object.assign(e.output, t);
        }
        renderInstance(e, { output: t }) {
          Object.assign(e, t);
        }
        sortInstanceNodePosition() {
          return 0;
        }
      }),
      (Dp = /* @__PURE__ */ new Set([
        `baseFrequency`,
        `diffuseConstant`,
        `kernelMatrix`,
        `kernelUnitLength`,
        `keySplines`,
        `keyTimes`,
        `limitingConeAngle`,
        `markerHeight`,
        `markerWidth`,
        `numOctaves`,
        `targetX`,
        `targetY`,
        `surfaceScale`,
        `specularConstant`,
        `specularExponent`,
        `stdDeviation`,
        `tableValues`,
        `viewBox`,
        `gradientTransform`,
        `pathLength`,
        `startOffset`,
        `textLength`,
        `lengthAdjust`,
      ])),
      (Op = (e) => typeof e == `string` && e.toLowerCase() === `svg`),
      (kp = class extends Sp {
        constructor() {
          (super(...arguments),
            (this.type = `svg`),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = Q));
        }
        getBaseTargetFromProps(e, t) {
          return J.has(t) ? (super.getBaseTargetFromProps(e, t) ?? lt(t)) : e[t];
        }
        getDefaultValue(e) {
          return J.has(e) ? (this.latestValues[e] ?? lt(e)) : void 0;
        }
        readValueFromInstance(e, t) {
          if (J.has(t)) {
            let e = Pu(t);
            return (e && e.default) || 0;
          }
          if (hf.includes(t)) {
            let n = getComputedStyle(e)[t];
            if (typeof n == `string` && n) return n.trim();
          }
          return ((t = Dp.has(t) ? t : Qt(t)), e.getAttribute(t));
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return ai(e, t, n);
        }
        build(e, t, n) {
          wn(e, t, this.isSVGTag, n.transformTemplate, n.style);
        }
        renderInstance(e, t, n, r) {
          ii(e, t, n, r);
        }
        mount(e) {
          ((this.isSVGTag = Op(e.tagName)), super.mount(e));
        }
      }),
      (Ap = [...mp].reverse()),
      (jp = hp.length),
      (Mp = 0.9999),
      (Np = 1.0001),
      (Pp = -0.01),
      (Fp = 0.01),
      (Ip = [`x`, `scaleX`, `originX`]),
      (Lp = [`y`, `scaleY`, `originY`]),
      (Rp = {
        correct: (e, t) => {
          if (!t.target) return e;
          if (typeof e == `string`) {
            if (B.test(e)) e = parseFloat(e);
            else return e;
          }
          return `${Mi(e, t.target.x)}% ${Mi(e, t.target.y)}%`;
        },
      }),
      (zp = {
        correct: (e, { treeScale: t, projectionDelta: n }) => {
          let r = e,
            i = H.parse(e);
          if (i.length > 5) return r;
          let a = H.createTransformer(e),
            o = typeof i[0] == `number` ? 0 : 1,
            s = n.x.scale * t.x,
            c = n.y.scale * t.y;
          ((i[0 + o] /= s), (i[1 + o] /= c));
          let l = U(s, c, 0.5);
          return (
            typeof i[2 + o] == `number` && (i[2 + o] /= l),
            typeof i[3 + o] == `number` && (i[3 + o] /= l),
            a(i)
          );
        },
      }),
      (Bp = Yd.length),
      (Vp = (e) => typeof e == `number` || B.test(e)),
      (Hp = /*@__PURE__*/ Ii(0, 0.5, dl)),
      (Up = /*@__PURE__*/ Ii(0.5, 0.95, P)),
      (Wp = (e, t) => e.depth - t.depth),
      (Gp = class {
        constructor() {
          ((this.children = []), (this.isDirty = !1));
        }
        add(e) {
          (te(this.children, e), (this.isDirty = !0));
        }
        remove(e) {
          (E(this.children, e), (this.isDirty = !0));
        }
        forEach(e) {
          (this.isDirty && this.children.sort(Wp), (this.isDirty = !1), this.children.forEach(e));
        }
      }),
      (Kp = class {
        constructor() {
          this.members = [];
        }
        add(e) {
          te(this.members, e);
          for (let t = this.members.length - 1; t >= 0; t--) {
            let n = this.members[t];
            if (n === e || n === this.lead || n === this.prevLead) continue;
            let r = n.instance;
            (!r || r.isConnected === !1) && !n.snapshot && (E(this.members, n), n.unmount());
          }
          e.scheduleRender();
        }
        remove(e) {
          if (
            (E(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
            let e = this.members[t];
            if (e.isPresent !== !1 && e.instance?.isConnected !== !1) return (this.promote(e), !0);
          }
          return !1;
        }
        promote(e, t) {
          let n = this.lead;
          if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
            (n.updateSnapshot(), e.scheduleRender());
            let { layoutDependency: r } = n.options,
              { layoutDependency: i } = e.options;
            ((r === void 0 || r !== i) &&
              ((e.resumeFrom = n),
              t && (n.preserveOpacity = !0),
              n.snapshot &&
                ((e.snapshot = n.snapshot),
                (e.snapshot.latestValues = n.animationValues || n.latestValues)),
              e.root?.isUpdating && (e.isLayoutDirty = !0)),
              e.options.crossfade === !1 && n.hide());
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            (e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.());
          });
        }
        scheduleRender() {
          this.members.forEach((e) => e.instance && e.scheduleRender(!1));
        }
        removeLeadSnapshot() {
          this.lead?.snapshot && (this.lead.snapshot = void 0);
        }
      }),
      (qp = {
        borderRadius: { ...Rp, applyTo: [...Yd] },
        borderTopLeftRadius: Rp,
        borderTopRightRadius: Rp,
        borderBottomLeftRadius: Rp,
        borderBottomRightRadius: Rp,
        boxShadow: zp,
      }),
      (Jp = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }),
      Object.assign(wp, { ...qp, ...wp }),
      (Yp = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 }),
      (Xp = [``, `X`, `Y`, `Z`]),
      (Zp = 1e3),
      (Qp = 0),
      ($p = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }),
      (em = (e) => a !== void 0 && a.userAgent && a.userAgent.toLowerCase().includes(e)),
      (tm = em(`applewebkit/`) && !em(`chrome/`) ? Math.round : P),
      (nm = Wi({
        attachResizeListener: (e, t) => Ri(e, `resize`, t),
        measureScroll: () => ({
          x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
          y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
        }),
        checkIsScrollRoot: () => !0,
      })),
      (rm = (e) => !e.isLayoutDirty && e.willUpdate(!1)),
      (im = { current: void 0 }),
      (am = Wi({
        measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
        defaultParent: () => {
          if (!im.current) {
            let e = new nm({});
            (e.mount(f), e.setOptions({ layoutScroll: !0 }), (im.current = e));
          }
          return im.current;
        },
        resetTransform: (e, t) => {
          e.style.transform = t === void 0 ? `none` : t;
        },
        checkIsScrollRoot: (e) => f.getComputedStyle(e).position === `fixed`,
      })),
      (om = `[data-layout],[data-layout-id]`),
      (sm = /* @__PURE__ */ new WeakMap()),
      (lm = class {
        constructor(e, t, n) {
          ((this.scope = e),
            (this.updateDom = t),
            (this.defaultOptions = n),
            (this.sharedTransitions = /* @__PURE__ */ new Map()),
            (this.notifyReady = () => {}),
            (this.rejectReady = () => {}),
            (this.tracked = /* @__PURE__ */ new Map()),
            (this.restorePoints = /* @__PURE__ */ new Map()),
            (this.readyPromise = new Promise((e, t) => {
              ((this.notifyReady = e), (this.rejectReady = t));
            })),
            cm || ((cm = []), queueMicrotask(Ta)),
            cm.push(this));
        }
        shared(e, t) {
          return (this.sharedTransitions.set(e, t), this);
        }
        then(e, t) {
          return this.readyPromise.then(e, t);
        }
        transitionFor(e) {
          let t = e.getAttribute(`data-layout-id`);
          return (t && this.sharedTransitions.get(t)) || this.defaultOptions;
        }
        adopt(e, t) {
          (this.tracked.set(e, t),
            this.restorePoints.set(e, { parent: e.parentElement, next: e.nextSibling }));
        }
        collectTargets() {
          return _a(this.scope);
        }
        runUpdate() {
          try {
            let e = this.updateDom();
            if (e && typeof e.then == `function`)
              return e.then(void 0, (e) => {
                this.updateError = e;
              });
          } catch (e) {
            this.updateError = e;
          }
        }
        reconcileAdditions(e) {
          for (let t of _a(this.scope)) {
            if (this.tracked.has(t)) continue;
            let n = Sa(t, this.transitionFor(t));
            (this.adopt(t, n), n.options.layoutId && e.add(n.options.layoutId));
          }
        }
        reconcileRemovals(e) {
          this.tracked.forEach((t, n) => {
            if (n.isConnected) return;
            let r = this.restorePoints.get(n);
            this.restorePoints.delete(n);
            let { layoutId: i } = t.options,
              a = t.getStack(),
              o = a && a.members.some((e) => e !== t && e.instance?.isConnected);
            if (i && t.isLead() && o && !e.has(i) && r && r.parent.isConnected) {
              if (
                (r.parent.insertBefore(n, r.next && r.next.parentNode === r.parent ? r.next : null),
                (t.isPresent = !1),
                t.setOptions({
                  onExitComplete: () => {
                    (n.remove(), wa(n, t));
                  },
                }),
                t.relegate())
              )
                return;
              n.remove();
            }
            (wa(n, t), this.tracked.delete(n));
          });
        }
        getRoot() {
          let e;
          return (this.tracked.forEach((t) => (e ||= t.root)), e);
        }
        finalize() {
          if (this.updateError) {
            this.rejectReady(this.updateError);
            return;
          }
          let e = /* @__PURE__ */ new Set();
          (this.tracked.forEach((t) => {
            t.instance && t.currentAnimation && e.add(t.currentAnimation);
          }),
            this.notifyReady(new yd([...e])));
        }
      }),
      (um = W),
      (dm = lu.reduce((e, t) => ((e[t] = (e) => G(e)), e), {})),
      ($ = h({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: `never` })),
      (fm = class extends x {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (hn(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            let e = t.offsetParent,
              n = (hn(e) && e.offsetWidth) || 0,
              r = (hn(e) && e.offsetHeight) || 0,
              i = getComputedStyle(t),
              a = this.props.sizeRef.current;
            ((a.height = parseFloat(i.height)),
              (a.width = parseFloat(i.width)),
              (a.top = t.offsetTop),
              (a.left = t.offsetLeft),
              (a.right = n - a.width - a.left),
              (a.bottom = r - a.height - a.top),
              (a.direction = i.direction));
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }),
      (pm = ({
        children: e,
        initial: t,
        isPresent: n,
        onExitComplete: a,
        custom: o,
        presenceAffectsLayout: s,
        mode: c,
        anchorX: l,
        anchorY: u,
        root: f,
      }) => {
        let p = T(Ma),
          m = r(),
          h = d(n),
          g = d(a);
        Wc(() => {
          ((h.current = n), (g.current = a));
        });
        let _ = !0,
          v = i(
            () => (
              (_ = !1),
              {
                id: m,
                initial: t,
                isPresent: n,
                custom: o,
                onExitComplete: (e) => {
                  p.set(e, !0);
                  for (let e of p.values()) if (!e) return;
                  a && a();
                },
                register: (e) => (
                  p.set(e, !1),
                  () => {
                    (p.delete(e), !h.current && !p.size && g.current?.());
                  }
                ),
              }
            ),
            [n, p, a]
          );
        return (
          s && _ && (v = { ...v }),
          i(() => {
            p.forEach((e, t) => p.set(t, !1));
          }, [n]),
          C(() => {
            !n && !p.size && a && a();
          }, [n]),
          (e = S(ja, {
            pop: c === `popLayout`,
            isPresent: n,
            anchorX: l,
            anchorY: u,
            root: f,
            children: e,
          })),
          S(Gc.Provider, { value: v, children: e })
        );
      }),
      (mm = (e) => e.key || ``),
      (hm = ({
        children: e,
        custom: t,
        initial: n = !0,
        onExitComplete: r,
        presenceAffectsLayout: a = !0,
        mode: o = `sync`,
        propagate: s = !1,
        anchorX: c = `left`,
        anchorY: u = `top`,
        root: f,
      }) => {
        let [p, m] = Na(s),
          h = i(() => Ia(e), [e]),
          g = s && !p ? [] : h.map(mm),
          _ = d(!0),
          v = T(() => /* @__PURE__ */ new Map()),
          b = d(/* @__PURE__ */ new Set()),
          [x, ee] = w(h),
          [C, te] = w(h);
        (Wc(() => {
          s && !p && !C.length && m?.();
        }, [p, s, C.length, m]),
          Wc(() => {
            _.current = !1;
            for (let e = 0; e < C.length; e++) {
              let t = mm(C[e]);
              g.includes(t) ? (v.delete(t), b.current.delete(t)) : v.get(t) !== !0 && v.set(t, !1);
            }
          }, [C, g.length, g.join(`-`)]));
        let E = [];
        if (h !== x) {
          let e = [...h],
            t = 0;
          for (let n of C) {
            let r = g.indexOf(mm(n));
            r === -1 ? (e.splice(t++, 0, n), E.push(n)) : (t = r + E.length + 1);
          }
          return (
            E.every((e) => v.get(mm(e))) ? (e = h) : o === `wait` && (e = E),
            te(Ia(e)),
            ee(h),
            null
          );
        }
        let { forceRender: ne } = l(Hc);
        return S(y, {
          children: C.map((e) => {
            let i = mm(e),
              l = s && !p ? !1 : h === C || g.includes(i);
            return S(
              pm,
              {
                isPresent: l,
                initial: !_.current || n ? void 0 : !1,
                custom: t,
                presenceAffectsLayout: a,
                mode: o,
                root: f,
                onExitComplete: l
                  ? void 0
                  : () => {
                      if (b.current.has(i)) return;
                      if (v.has(i)) (b.current.add(i), v.set(i, !0));
                      else return;
                      let e = !0;
                      (v.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (ne?.(), ee([]), s && m?.(), r && r()));
                    },
                anchorX: c,
                anchorY: u,
                children: e,
              },
              i
            );
          }),
        });
      }),
      (gm = h(null)),
      (_m = (e) => e === !0),
      (vm = (e) => _m(e === !0) || e === `id`),
      (ym = ({ children: e, id: t, inherit: n = !0 }) => {
        let r = l(Hc),
          a = l(gm),
          [o, s] = Ra(),
          c = d(null),
          u = r.id || a;
        c.current === null &&
          (vm(n) && u && (t = t ? u + `-` + t : u),
          (c.current = { id: t, group: (_m(n) && r.group) || ga() }));
        let f = i(() => ({ ...c.current, forceRender: o }), [s]);
        return S(Hc.Provider, { value: f, children: e });
      }),
      (bm = h({ strict: !1 })),
      (xm = {
        animation: [
          `animate`,
          `variants`,
          `whileHover`,
          `whileTap`,
          `exit`,
          `whileInView`,
          `whileFocus`,
          `whileDrag`,
        ],
        exit: [`exit`],
        drag: [`drag`, `dragControls`],
        focus: [`whileFocus`],
        hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
        tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
        pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
        inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
        layout: [`layout`, `layoutId`],
      }),
      (Sm = !1),
      (Cm = /* @__PURE__ */ h({})),
      (wm = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} })),
      (Tm = () => ({ ...wm(), attrs: {} })),
      (Em = /* @__PURE__ */ new Set(
        /* @__PURE__ */ `animate.exit.variants.initial.style.values.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(
          `.`
        )
      )),
      (Dm = [
        `animate`,
        `circle`,
        `defs`,
        `desc`,
        `ellipse`,
        `g`,
        `image`,
        `line`,
        `filter`,
        `marker`,
        `mask`,
        `metadata`,
        `path`,
        `pattern`,
        `polygon`,
        `polyline`,
        `rect`,
        `stop`,
        `switch`,
        `symbol`,
        `svg`,
        `text`,
        `tspan`,
        `use`,
        `view`,
      ]),
      (Om = (e) => (t, n) => {
        let r = l(Cm),
          i = l(Gc),
          a = () => io(e, t, r, i);
        return n ? a() : T(a);
      }),
      (km = /*@__PURE__*/ Om({ scrapeMotionValuesFromProps: ti, createRenderState: wm })),
      (Am = /*@__PURE__*/ Om({ scrapeMotionValuesFromProps: ai, createRenderState: Tm })),
      (jm = Symbol.for(`motionComponentSymbol`)),
      (Mm = h({})),
      (Nm = /*@__PURE__*/ go()),
      (Pm = (e, t) => ((t.isSVG ?? no(e)) ? new kp(t) : new Tp(t, { allowProjection: e !== u }))),
      (Fm = class extends Cp {
        constructor(e) {
          (super(e), (e.animationState ||= si(e)));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          Wr(e) && (this.unmountControls = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {
          (this.node.animationState.reset(), this.unmountControls?.());
        }
      }),
      (Im = 0),
      (Lm = class extends Cp {
        constructor() {
          (super(...arguments), (this.id = Im++));
        }
        update() {
          let { presenceContext: e, prevPresenceContext: t, animationState: n } = this.node;
          if (!e || !n) return;
          let { isPresent: r, onExitComplete: i } = e,
            a = t?.isPresent;
          if (r === a) return;
          if (r && a === !1) {
            if (this.exit === !0) {
              let { initial: e } = this.node.getProps();
              if (e && !Array.isArray(e)) {
                let { transition: t, transitionEnd: n, ...r } = Kt(this.node, e) || {};
                for (let e in r) this.node.getValue(e)?.jump(r[e]);
              }
              ((this.node.blockInitialAnimation = !1), n.reset(), n.animateChanges());
            } else n.setActive(`exit`, !1);
            this.exit = void 0;
            return;
          }
          let o = (this.exit = n.setActive(`exit`, !r));
          i &&
            !r &&
            o.then(() => {
              this.exit === o && ((this.exit = !0), i(this.id));
            });
        }
        mount() {
          let { register: e, onExitComplete: t } = this.node.presenceContext || {};
          (t && t(this.id), e && (this.unmount = e(this.id)));
        }
        unmount() {}
      }),
      (Rm = { animation: { Feature: Fm }, exit: { Feature: Lm } }),
      (zm = (e) => (t) => jf(t) && e(t, _o(t))),
      (Bm = ({ current: e }) => (e ? e.ownerDocument.defaultView : null)),
      (Vm = (e, t) => Math.abs(e - t)),
      (Hm = /*#__PURE__*/ new Set([`auto`, `scroll`])),
      (Um = class {
        constructor(
          e,
          t,
          {
            transformPagePoint: n,
            contextWindow: r = f,
            dragSnapToOrigin: i = !1,
            distanceThreshold: a = 3,
            element: o,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.lastRawMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = f),
            (this.scrollPositions = /* @__PURE__ */ new Map()),
            (this.removeScrollListeners = null),
            (this.onElementScroll = (e) => {
              this.handleScroll(e.target);
            }),
            (this.onWindowScroll = () => {
              this.handleScroll(f);
            }),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              ((this.hasPendingMove = !1),
                this.lastRawMoveEventInfo &&
                  (this.lastMoveEventInfo = bo(
                    this.lastRawMoveEventInfo,
                    this.transformPagePoint
                  )));
              let e = So(this.lastMoveEventInfo, this.history),
                t = this.startEvent !== null,
                n = yo(e.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
              if (!t && !n) return;
              let { point: r } = e;
              this.history.push({ ...r, timestamp: R.now() });
              let { onStart: i, onMove: a } = this.handlers;
              (t || (i && i(this.lastMoveEvent, e), (this.startEvent = this.lastMoveEvent)),
                a && a(this.lastMoveEvent, e));
            }),
            (this.handlePointerMove = (e, t) => {
              ((this.lastMoveEvent = e),
                (this.lastRawMoveEventInfo = t),
                (this.lastMoveEventInfo = bo(t, this.transformPagePoint)),
                (this.hasPendingMove = !0),
                W.update(this.updatePoint, !0));
            }),
            (this.handlePointerUp = (e, t) => {
              (this.hasPendingMove && this.updatePoint(), this.end());
              let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
              if (
                ((this.dragSnapToOrigin || !this.startEvent) && i && i(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let a = So(
                e.type === `pointercancel`
                  ? this.lastMoveEventInfo
                  : bo(t, this.transformPagePoint),
                this.history
              );
              (this.startEvent && n && n(e, a), r && r(e, a));
            }),
            !jf(e))
          )
            return;
          ((this.dragSnapToOrigin = i),
            (this.handlers = t),
            (this.transformPagePoint = n),
            (this.distanceThreshold = a),
            (this.contextWindow = r || f));
          let s = bo(_o(e), this.transformPagePoint),
            { point: c } = s,
            { timestamp: l } = L;
          this.history = [{ ...c, timestamp: l }];
          let { onSessionStart: u } = t;
          u && u(e, So(s, this.history));
          let d = { passive: !0, capture: !0 };
          ((this.removeListeners = Zc(
            vo(this.contextWindow, `pointermove`, this.handlePointerMove, d),
            vo(this.contextWindow, `pointerup`, this.handlePointerUp, d),
            vo(this.contextWindow, `pointercancel`, this.handlePointerUp, d)
          )),
            o && this.startScrollTracking(o));
        }
        startScrollTracking(e) {
          let t = e.parentElement;
          for (; t; ) {
            let e = getComputedStyle(t);
            ((Hm.has(e.overflowX) || Hm.has(e.overflowY)) &&
              this.scrollPositions.set(t, { x: t.scrollLeft, y: t.scrollTop }),
              (t = t.parentElement));
          }
          (this.scrollPositions.set(f, { x: f.scrollX, y: f.scrollY }),
            f.addEventListener(`scroll`, this.onElementScroll, { capture: !0 }),
            f.addEventListener(`scroll`, this.onWindowScroll),
            (this.removeScrollListeners = () => {
              (f.removeEventListener(`scroll`, this.onElementScroll, { capture: !0 }),
                f.removeEventListener(`scroll`, this.onWindowScroll));
            }));
        }
        handleScroll(e) {
          let t = this.scrollPositions.get(e);
          if (!t) return;
          let n = e === f,
            r = n ? { x: f.scrollX, y: f.scrollY } : { x: e.scrollLeft, y: e.scrollTop },
            i = { x: r.x - t.x, y: r.y - t.y };
          (i.x !== 0 || i.y !== 0) &&
            (n
              ? this.lastMoveEventInfo &&
                ((this.lastMoveEventInfo.point.x += i.x), (this.lastMoveEventInfo.point.y += i.y))
              : this.history.length > 0 && ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
            this.scrollPositions.set(e, r),
            W.update(this.updatePoint, !0));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          (this.removeListeners && this.removeListeners(),
            this.removeScrollListeners && this.removeScrollListeners(),
            this.scrollPositions.clear(),
            G(this.updatePoint));
        }
      }),
      (Wm = 0.35),
      (Gm = /* @__PURE__ */ new WeakMap()),
      (Km = class {
        constructor(e) {
          ((this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = Q()),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null),
            (this.visualElement = e));
        }
        start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
          let { presenceContext: r } = this.visualElement;
          if (r && r.isPresent === !1) return;
          let i = (e) => {
              (t && this.snapToCursor(e), this.stopAnimation());
            },
            a = (e, t) => {
              let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
              if (
                n &&
                !r &&
                (this.openDragLock && this.openDragLock(),
                (this.openDragLock = Yn(n)),
                !this.openDragLock)
              )
                return;
              ((this.latestPointerEvent = e),
                (this.latestPanInfo = t),
                (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                j((e) => {
                  let t = this.getAxisMotionValue(e).get() || 0;
                  if (z.test(t)) {
                    let { projection: n } = this.visualElement;
                    if (n && n.layout) {
                      let r = n.layout.layoutBox[e];
                      r && (t = A(r) * (parseFloat(t) / 100));
                    }
                  }
                  this.originPoint[e] = t;
                }),
                i && W.update(() => i(e, t), !1, !0),
                Zt(this.visualElement, `transform`));
              let { animationState: a } = this.visualElement;
              a && a.setActive(`whileDrag`, !0);
            },
            o = (e, t) => {
              ((this.latestPointerEvent = e), (this.latestPanInfo = t));
              let {
                dragPropagation: n,
                dragDirectionLock: r,
                onDirectionLock: i,
                onDrag: a,
              } = this.getProps();
              if (!n && !this.openDragLock) return;
              let { offset: o } = t;
              r && this.currentDirection === null
                ? ((this.currentDirection = zo(o)),
                  this.currentDirection !== null && i && i(this.currentDirection))
                : (this.updateAxis(`x`, t.point, o),
                  this.updateAxis(`y`, t.point, o),
                  this.visualElement.render(),
                  a && W.update(() => a(e, t), !1, !0));
            },
            s = (e, t) => {
              ((this.latestPointerEvent = e),
                (this.latestPanInfo = t),
                this.stop(e, t),
                (this.latestPointerEvent = null),
                (this.latestPanInfo = null));
            },
            c = () => {
              let { dragSnapToOrigin: e } = this.getProps();
              (e || this.constraints) && this.startAnimation({ x: 0, y: 0 });
            },
            { dragSnapToOrigin: l } = this.getProps();
          this.panSession = new Um(
            e,
            { onSessionStart: i, onStart: a, onMove: o, onSessionEnd: s, resumeAnimation: c },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: l,
              distanceThreshold: n,
              contextWindow: Bm(this.visualElement),
              element: this.visualElement.current,
            }
          );
        }
        stop(e, t) {
          let n = e || this.latestPointerEvent,
            r = t || this.latestPanInfo,
            i = this.isDragging;
          if ((this.cancel(), !i || !r || !n)) return;
          let { velocity: a } = r;
          this.startAnimation(a);
          let { onDragEnd: o } = this.getProps();
          o && W.postRender(() => o(n, r));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: t } = this.visualElement;
          (e && (e.isAnimationBlocked = !1), this.endPanSession());
          let { dragPropagation: n } = this.getProps();
          (!n && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
            t && t.setActive(`whileDrag`, !1));
        }
        endPanSession() {
          (this.panSession && this.panSession.end(), (this.panSession = void 0));
        }
        updateAxis(e, t, n) {
          let { drag: r } = this.getProps();
          if (!n || !Ro(e, r, this.currentDirection)) return;
          let i = this.getAxisMotionValue(e),
            a = this.originPoint[e] + n[e];
          (this.constraints &&
            this.constraints[e] &&
            (a = Eo(a, this.constraints[e], this.elastic[e])),
            i.set(a));
        }
        resolveConstraints() {
          let { dragConstraints: e, dragElastic: t } = this.getProps(),
            n =
              this.visualElement.projection && !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : this.visualElement.projection?.layout,
            r = this.constraints;
          (e && so(e)
            ? (this.constraints ||= this.resolveRefConstraints())
            : (this.constraints = e && n ? Oo(n.layoutBox, e) : !1),
            (this.elastic = No(t)),
            r !== this.constraints &&
              !so(e) &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              j((e) => {
                this.constraints !== !1 &&
                  this.getAxisMotionValue(e) &&
                  (this.constraints[e] = Mo(n.layoutBox[e], this.constraints[e]));
              }));
        }
        resolveRefConstraints() {
          let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
          if (!e || !so(e)) return !1;
          let n = e.current,
            { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          r.root && ((r.root.scroll = void 0), r.root.updateScroll());
          let i = Gn(n, r.root, this.visualElement.getTransformPagePoint()),
            a = Ao(r.layout.layoutBox, i);
          if (t) {
            let e = t(kn(a));
            ((this.hasMutatedConstraints = !!e), e && (a = On(e)));
          }
          return a;
        }
        startAnimation(e) {
          let {
              drag: t,
              dragMomentum: n,
              dragElastic: r,
              dragTransition: i,
              dragSnapToOrigin: a,
              onDragTransitionEnd: o,
            } = this.getProps(),
            s = this.constraints || {},
            c = j((o) => {
              if (!Ro(o, t, this.currentDirection)) return;
              let c = (s && s[o]) || {};
              (a === !0 || a === o) && (c = { min: 0, max: 0 });
              let l = r ? 200 : 1e6,
                u = r ? 40 : 1e7,
                d = {
                  type: `inertia`,
                  velocity: n ? e[o] : 0,
                  bounceStiffness: l,
                  bounceDamping: u,
                  timeConstant: 750,
                  restDelta: 1,
                  restSpeed: 10,
                  ...i,
                  ...c,
                };
              return this.startAxisValueAnimation(o, d);
            });
          return Promise.all(c).then(o);
        }
        startAxisValueAnimation(e, t) {
          let n = this.getAxisMotionValue(e);
          return (Zt(this.visualElement, e), n.start(Pd(e, n, 0, t, this.visualElement, !1)));
        }
        stopAnimation() {
          j((e) => this.getAxisMotionValue(e).stop());
        }
        getAxisMotionValue(e) {
          let t = `_drag${e.toUpperCase()}`;
          return (
            this.visualElement.getProps()[t] ||
            this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0)
          );
        }
        snapToCursor({ clientX: e, clientY: t }) {
          let { drag: n } = this.getProps(),
            r = { x: e, y: t },
            i = this.visualElement.getTransformPagePoint()?.(r) || r,
            a = this.visualElement.measureViewportBox();
          j((e) => {
            if (!Ro(e, n, this.currentDirection)) return;
            let t = this.getAxisMotionValue(e),
              { min: r, max: o } = a[e];
            t.set((t.get() || 0) + i[e] - U(r, o, 0.5));
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!so(t) || !n || !this.constraints) return;
          this.stopAnimation();
          let r = this.constraints,
            i = { x: 0, y: 0 };
          j((e) => {
            let t = this.getAxisMotionValue(e).get();
            i[e] = jo({ min: t, max: t }, r[e]);
          });
          let { transformTemplate: a } = this.visualElement.getProps();
          ((this.visualElement.current.style.transform = a ? a({}, ``) : `none`),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            (this.constraints = !1),
            this.resolveConstraints(),
            j((t) => {
              let n = this.getAxisMotionValue(t);
              if (!Ro(t, e, null) || !n.get()) return;
              let { min: r, max: a } = this.constraints[t];
              n.set(U(r, a, i[t]));
            }),
            this.visualElement.render());
        }
        addListeners() {
          if (!this.visualElement.current) return;
          Gm.set(this.visualElement, this);
          let e = this.visualElement.current,
            t = vo(e, `pointerdown`, (t) => {
              let { drag: n, dragListener: r = !0 } = this.getProps(),
                i = t.target,
                a = i !== e && er(i);
              n && r && !a && this.start(t);
            }),
            n,
            r = () => {
              let { dragConstraints: t } = this.getProps();
              so(t) &&
                t.current &&
                ((this.constraints = this.resolveRefConstraints()),
                (n ||= Lo(e, t.current, () => this.scalePositionWithinConstraints())));
            },
            { projection: i } = this.visualElement,
            a = i.addEventListener(`measure`, r);
          (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), W.read(r));
          let o = Ri(f, `resize`, () => this.scalePositionWithinConstraints()),
            s = i.addEventListener(`didUpdate`, ({ delta: e, hasLayoutChanged: t }) => {
              this.isDragging &&
                t &&
                (j((t) => {
                  let n = this.getAxisMotionValue(t);
                  n && ((this.originPoint[t] += e[t].translate), n.set(n.get() + e[t].translate));
                }),
                this.visualElement.render());
            });
          return () => {
            (o(), t(), a(), s && s(), n && n());
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: n = !1,
              dragPropagation: r = !1,
              dragConstraints: i = !1,
              dragElastic: a = Wm,
              dragMomentum: o = !0,
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: i,
            dragElastic: a,
            dragMomentum: o,
          };
        }
      }),
      (qm = class extends Cp {
        constructor(e) {
          (super(e),
            (this.removeGroupControls = P),
            (this.removeListeners = P),
            (this.controls = new Km(e)));
        }
        mount() {
          let { dragControls: e } = this.node.getProps();
          (e && (this.removeGroupControls = e.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || P));
        }
        update() {
          let { dragControls: e } = this.node.getProps(),
            { dragControls: t } = this.node.prevProps || {};
          e !== t &&
            (this.removeGroupControls(),
            e && (this.removeGroupControls = e.subscribe(this.controls)));
        }
        unmount() {
          (this.removeGroupControls(),
            this.removeListeners(),
            this.controls.isDragging || this.controls.endPanSession());
        }
      }),
      (Jm = (e) => (t, n) => {
        e && W.update(() => e(t, n), !1, !0);
      }),
      (Ym = class extends Cp {
        constructor() {
          (super(...arguments), (this.removePointerDownListener = P));
        }
        onPointerDown(e) {
          this.session = new Um(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Bm(this.node),
          });
        }
        createPanHandlers() {
          let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
          return {
            onSessionStart: Jm(e),
            onStart: Jm(t),
            onMove: Jm(n),
            onEnd: (e, t) => {
              (delete this.session, r && W.postRender(() => r(e, t)));
            },
          };
        }
        mount() {
          this.removePointerDownListener = vo(this.node.current, `pointerdown`, (e) =>
            this.onPointerDown(e)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          (this.removePointerDownListener(), this.session && this.session.end());
        }
      }),
      (Xm = !1),
      (Zm = class extends x {
        componentDidMount() {
          let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props,
            { projection: i } = e;
          (i &&
            (t.group && t.group.add(i),
            n && n.register && r && n.register(i),
            Xm && i.root.didUpdate(),
            i.addEventListener(`animationComplete`, () => {
              this.safeToRemove();
            }),
            i.setOptions({
              ...i.options,
              layoutDependency: this.props.layoutDependency,
              onExitComplete: () => this.safeToRemove(),
            })),
            (Jp.hasEverUpdated = !0));
        }
        getSnapshotBeforeUpdate(e) {
          let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props,
            { projection: a } = n;
          return (
            a &&
              ((a.isPresent = i),
              e.layoutDependency !== t && a.setOptions({ ...a.options, layoutDependency: t }),
              (Xm = !0),
              r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i
                ? a.willUpdate()
                : this.safeToRemove(),
              e.isPresent !== i &&
                (i
                  ? a.promote()
                  : a.relegate() ||
                    W.postRender(() => {
                      let e = a.getStack();
                      (!e || !e.members.length) && this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { visualElement: e, layoutAnchor: t } = this.props,
            { projection: n } = e;
          n &&
            ((n.options.layoutAnchor = t),
            n.root.didUpdate(),
            Of.postRender(() => {
              !n.currentAnimation && n.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props,
            { projection: r } = e;
          ((Xm = !0),
            r &&
              (r.scheduleCheckAfterUnmount(),
              t && t.group && t.group.remove(r),
              n && n.deregister && n.deregister(r)));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }),
      (Qm = { pan: { Feature: Ym }, drag: { Feature: qm, ProjectionNode: am, MeasureLayout: Bo } }),
      ($m = class extends Cp {
        mount() {
          let { current: e } = this.node;
          e &&
            (this.unmount = Qn(
              e,
              (e, t) => (Vo(this.node, t, `Start`), (e) => Vo(this.node, e, `End`))
            ));
        }
        unmount() {}
      }),
      (eh = class extends Cp {
        constructor() {
          (super(...arguments), (this.isActive = !1));
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(`:focus-visible`);
          } catch {
            e = !0;
          }
          e &&
            this.node.animationState &&
            (this.node.animationState.setActive(`whileFocus`, !0), (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive(`whileFocus`, !1), (this.isActive = !1));
        }
        mount() {
          this.unmount = Zc(
            Ri(this.node.current, `focus`, () => this.onFocus()),
            Ri(this.node.current, `blur`, () => this.onBlur())
          );
        }
        unmount() {}
      }),
      (th = class extends Cp {
        mount() {
          let { current: e } = this.node;
          if (!e) return;
          let { globalTapTarget: t, propagate: n } = this.node.props;
          this.unmount = ir(
            e,
            (e, t) => (
              Ho(this.node, t, `Start`),
              (e, { success: t }) => Ho(this.node, e, t ? `End` : `Cancel`)
            ),
            { useGlobalTarget: t, stopPropagation: n?.tap === !1 }
          );
        }
        unmount() {}
      }),
      (nh = /* @__PURE__ */ new WeakMap()),
      (rh = /* @__PURE__ */ new WeakMap()),
      (ih = (e) => {
        let t = nh.get(e.target);
        t && t(e);
      }),
      (ah = (e) => {
        e.forEach(ih);
      }),
      (oh = { some: 0, all: 1 }),
      (sh = class extends Cp {
        constructor() {
          (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
        }
        startObserver() {
          this.stopObserver?.();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: n, amount: r = `some`, once: i } = e,
            a = {
              root: t ? t.current : void 0,
              rootMargin: n,
              threshold: typeof r == `number` ? r : oh[r],
            },
            o = (e) => {
              let { isIntersecting: t } = e;
              if (this.isInView === t || ((this.isInView = t), i && !t && this.hasEnteredView))
                return;
              (t && (this.hasEnteredView = !0),
                this.node.animationState && this.node.animationState.setActive(`whileInView`, t));
              let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
                a = t ? n : r;
              a && a(e);
            };
          this.stopObserver = Wo(this.node.current, a, o);
        }
        mount() {
          this.startObserver();
        }
        update() {
          if (typeof IntersectionObserver > `u`) return;
          let { props: e, prevProps: t } = this.node;
          [`amount`, `margin`, `root`].some(Go(e, t)) && this.startObserver();
        }
        unmount() {
          (this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1));
        }
      }),
      (ch = {
        inView: { Feature: sh },
        tap: { Feature: th },
        focus: { Feature: eh },
        hover: { Feature: $m },
      }),
      (lh = { layout: { ProjectionNode: am, MeasureLayout: Bo } }),
      (uh = /*@__PURE__*/ go({ ...Rm, ...ch, ...Qm, ...lh }, Pm)),
      (dh = { renderer: Pm, ...Rm, ...ch }),
      (fh = { ...dh, ...Qm, ...lh }),
      (ph = { renderer: Pm, ...Rm }),
      (mh = 50),
      (hh = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0,
      })),
      (gh = () => ({ time: 0, x: hh(), y: hh() })),
      (_h = { x: { length: `Width`, position: `Left` }, y: { length: `Height`, position: `Top` } }),
      (vh = /* @__PURE__ */ new WeakMap()),
      (yh = { start: 0, center: 0.5, end: 1 }),
      (bh = [0, 0]),
      (xh = {
        All: [
          [0, 0],
          [1, 1],
        ],
      }),
      (Sh = /* @__PURE__ */ new WeakMap()),
      (Ch = /* @__PURE__ */ new WeakMap()),
      (wh = /* @__PURE__ */ new WeakMap()),
      (Th = /* @__PURE__ */ new WeakMap()),
      (Eh = (e) => (e === document.scrollingElement ? f : e)),
      (Dh = /* @__PURE__ */ new Map()),
      (Oh = (e) => {
        if (/v/u.test(e)) return [];
        let t = Qo(e, 0, 0, 0);
        return [Qo(e, 0, 1, 0) - t, t - Qo(e, 1, 0, 0), t];
      }),
      (kh = ([e, t, n]) =>
        !n && (t === 0 || t === 1) && `${t ? `entry` : `exit`}-crossing ${e * 100}%`),
      (Ah = () => ({ scrollX: D(0), scrollY: D(0), scrollXProgress: D(0), scrollYProgress: D(0) })),
      (jh = (e) => (e ? !e.current : !1)),
      (Mh = class extends Dd {
        constructor() {
          (super(...arguments), (this.isEnabled = !1));
        }
        add(e) {
          (J.has(e) || md.has(e)) && ((this.isEnabled = !0), this.update());
        }
        update() {
          this.set(this.isEnabled ? `transform` : `auto`);
        }
      }),
      (Nh = `easeInOut`),
      (Ph = 20),
      (Fh = (e) => typeof e == `number`),
      (Ih = (e) => e.every(Fh)),
      (Lh = Object.assign(Qs(), { addEffect: ln, removeEffect: un })),
      (Rh = (e) => {
        function t(t, n, r) {
          return new bd(ec(t, n, r, e));
        }
        return t;
      }),
      (zh = /*@__PURE__*/ Rh()),
      (Bh = nc),
      (Vh = class {
        constructor() {
          this.componentControls = /* @__PURE__ */ new Set();
        }
        subscribe(e) {
          return (this.componentControls.add(e), () => this.componentControls.delete(e));
        }
        start(e, t) {
          this.componentControls.forEach((n) => {
            n.start(e.nativeEvent || e, t);
          });
        }
        cancel() {
          this.componentControls.forEach((e) => {
            e.cancel();
          });
        }
        stop() {
          this.componentControls.forEach((e) => {
            e.stop();
          });
        }
      }),
      (Hh = () => new Vh()),
      (Uh = { some: 0, all: 1 }),
      (Wh = /* @__PURE__ */ new Map()),
      (Gh = /* @__PURE__ */ new Map()),
      (Kh = (e, t) => `${e}: ${J.has(t) ? `transform` : t}`),
      (Yh = /* @__PURE__ */ new Set()),
      (Xh = () => ({})),
      (Zh = class extends xp {
        constructor() {
          (super(...arguments), (this.measureInstanceViewportBox = Q));
        }
        build() {}
        resetTransform() {}
        restoreTransform() {}
        removeValueFromRenderState() {}
        renderInstance() {}
        scrapeMotionValuesFromProps() {
          return Xh();
        }
        getBaseTargetFromProps() {}
        readValueFromInstance(e, t, n) {
          return n.initialState[t] || 0;
        }
        sortInstanceNodePosition() {
          return 0;
        }
      }),
      (Qh = Om({ scrapeMotionValuesFromProps: Xh, createRenderState: Xh })),
      ($h = 1e5),
      (eg = (e) => (e > 0.001 ? 1 / e : $h)),
      (tg = h(null)),
      (ng = (e, t) => e.max <= t.min || t.max <= e.min),
      (rg = /*@__PURE__*/ b(jc)),
      (ig = 50),
      (ag = 25),
      (og = /* @__PURE__ */ new Set([`auto`, `scroll`])),
      (sg = /* @__PURE__ */ new WeakMap()),
      (cg = /* @__PURE__ */ new WeakMap()),
      (lg = null),
      (ug = /*@__PURE__*/ b(Rc)),
      (dg = /* @__PURE__ */ Vc({ Group: () => rg, Item: () => ug })));
  }))();
}
function pg() {
  return (pg = e(() => {
    (fg(), c(), m());
  }))();
}
export {
  kl as $,
  Yt as $a,
  ga as $i,
  qe as $n,
  hs as $o,
  Ti as $r,
  G as $t,
  Kp as A,
  Qr as Aa,
  bt as Ai,
  Pe as An,
  O as Ao,
  Pn as Ar,
  Ei as At,
  Mh as B,
  Ll as Ba,
  Oe as Bi,
  Bi as Bn,
  dc as Bo,
  fc as Br,
  Cn as Bt,
  Cm as C,
  mr as Ca,
  cn as Ci,
  fp as Cn,
  Un as Co,
  Ft as Cr,
  nl as Cs,
  Bn as Ct,
  ld as D,
  un as Da,
  Nm as Di,
  yn as Dn,
  wr as Do,
  Pr as Dr,
  Dr as Dt,
  ef as E,
  Ci as Ea,
  Ze as Ei,
  dp as En,
  J as Eo,
  Nr as Er,
  Sr as Et,
  kp as F,
  Pt as Fa,
  ie as Fi,
  Je as Fn,
  Cc as Fo,
  ae as Fr,
  Di as Ft,
  ln as G,
  ai as Ga,
  U as Gi,
  dh as Gn,
  Ra as Go,
  qc as Gr,
  Fe as Gt,
  md as H,
  Al as Ha,
  su as Hi,
  hc as Hn,
  ac as Ho,
  Yr as Hr,
  mi as Ht,
  $c as I,
  Kt as Ia,
  Of as Ii,
  lt as In,
  Bh as Io,
  Rl as Ir,
  ki as It,
  vf as J,
  is as Ja,
  Te as Ji,
  j as Jn,
  mc as Jo,
  _l as Jr,
  vi as Jt,
  vo as K,
  ti as Ka,
  ke as Ki,
  fh as Kn,
  pc as Ko,
  ou as Kr,
  A as Kt,
  Mm as L,
  Gt as La,
  I as Li,
  Nu as Ln,
  nc as Lo,
  Qn as Lr,
  Sn as Lt,
  ja as M,
  fr as Ma,
  mu as Mi,
  se as Mn,
  Jr as Mo,
  _p as Mr,
  sl as Mt,
  pm as N,
  _n as Na,
  Gn as Ni,
  sd as Nn,
  $s as No,
  Mn as Nr,
  cl as Nt,
  fd as O,
  E as Oa,
  Ot as Oi,
  Ie as On,
  Mu as Oo,
  Jp as Or,
  _f as Ot,
  Gc as P,
  Vi as Pa,
  Wn as Pi,
  Xe as Pn,
  tc as Po,
  Nn as Pr,
  ol as Pt,
  Zt as Q,
  vt as Qa,
  dg as Qi,
  bl as Qn,
  _s as Qo,
  Kr as Qr,
  Qt,
  lp as R,
  al as Ra,
  il as Ri,
  Bl as Rn,
  Ts as Ro,
  Wl as Rr,
  Ni as Rt,
  $ as S,
  Wu as Sa,
  qr as Si,
  si as Sn,
  Vn as So,
  $d as Sr,
  Kc as Ss,
  sn as St,
  Dd as T,
  Si as Ta,
  Xc as Ti,
  Q as Tn,
  Gu as To,
  ui as Tr,
  Ai as Tt,
  gf as U,
  wp as Ua,
  Ce as Ui,
  Vm as Un,
  ps as Uo,
  fg as Ur,
  hi as Ut,
  Bc as V,
  im as Va,
  au as Vi,
  Gd as Vn,
  ic as Vo,
  We as Vr,
  xn as Vt,
  Ri as W,
  In as Wa,
  nu as Wi,
  yo as Wn,
  Ss as Wo,
  Ke as Wr,
  Nt as Wt,
  of as X,
  Yn as Xa,
  D as Xi,
  hl as Xn,
  Pa as Xo,
  wl as Xr,
  yi as Xt,
  $r as Y,
  F as Ya,
  uh as Yi,
  pl as Yn,
  wc as Yo,
  Uc as Yr,
  _i as Yt,
  te as Z,
  Xr as Za,
  ne as Zi,
  ml as Zn,
  Wc as Zo,
  El as Zr,
  Dp as Zt,
  lm as _,
  Df as _a,
  hr as _i,
  di as _n,
  bf as _o,
  Zr as _r,
  el as _s,
  ll as _t,
  Sp as a,
  rf as aa,
  ei as ai,
  dl as an,
  Z as ao,
  gt as ar,
  As as as,
  zh as at,
  Ha as b,
  yf as ba,
  $a as bi,
  zp as bn,
  R as bo,
  $t as br,
  Hl as bs,
  Ct as bt,
  Vh as c,
  ut as ca,
  zd as ci,
  Ed as cn,
  lf as co,
  L as cr,
  ws as cs,
  tn as ct,
  yd as d,
  Mi as da,
  pi as di,
  H as dn,
  rd as do,
  st as dr,
  Ko as ds,
  nn as dt,
  P as ea,
  Jn as ei,
  kf as en,
  Ue as eo,
  ct as er,
  qo as es,
  ge as et,
  bd as f,
  Rd as fa,
  Af as fi,
  de as fn,
  od as fo,
  Mt as fr,
  Ds as fs,
  Ur as ft,
  td as g,
  Ul as ga,
  gn as gi,
  fi as gn,
  xf as go,
  le as gr,
  hp as gs,
  Rm as gt,
  Eu as h,
  Qc as ha,
  jf as hi,
  Ye as hn,
  ad as ho,
  Pu as hr,
  mp as hs,
  Cd as ht,
  Jd as i,
  Bd as ia,
  er as ii,
  fl as in,
  xt as io,
  Yf as ir,
  ks as is,
  Da as it,
  Ep as j,
  ii as ja,
  Tr as ji,
  Qs as jn,
  sc as jo,
  he as jr,
  Oi as jt,
  xd as k,
  bi as ka,
  Om as ki,
  Wi as kn,
  _c as ko,
  qn as kr,
  ji as kt,
  Cp as l,
  z as la,
  oc as li,
  V as ln,
  cd as lo,
  du as lr,
  Es as ls,
  at as lt,
  Tp as m,
  ir as ma,
  Yc as mi,
  kn as mn,
  id as mo,
  Md as mr,
  Os as ms,
  Ps as mt,
  hm as n,
  q as na,
  gl as ni,
  ci as nn,
  _r as no,
  Kd as nr,
  Na as ns,
  pn as nt,
  gm as o,
  Ea as oa,
  St as oi,
  M as on,
  ce as oo,
  xr as or,
  uc as os,
  Pd as ot,
  am as p,
  gp as pa,
  Jc as pi,
  On as pn,
  Zd as po,
  ar as pr,
  ms as ps,
  rn as pt,
  zm as q,
  ls as qa,
  Pi as qi,
  ph as qn,
  cc as qo,
  Wr as qr,
  gi as qt,
  vd as r,
  Vd as ra,
  $n as ri,
  ul as rn,
  Sc as ro,
  dn as rr,
  rc as rs,
  Kn as rt,
  nm as s,
  Ht as sa,
  hn as si,
  Ji as sn,
  uf as so,
  W as sr,
  fs as ss,
  Li as st,
  pg as t,
  Ol as ta,
  X as ti,
  dm as tn,
  Er as to,
  to as tr,
  gc as ts,
  Lh as tt,
  Gp as u,
  Zc as ua,
  Y as ui,
  Wp as un,
  At as uo,
  pu as ur,
  ys as us,
  fn as ut,
  ym as v,
  qi as va,
  Op as vi,
  k as vn,
  um as vo,
  et as vr,
  Vl as vs,
  Rn as vt,
  N as w,
  xi as wa,
  Xt as wi,
  up as wn,
  An as wo,
  Ut as wr,
  Vt as wt,
  Wa as x,
  cf as xa,
  Gr as xi,
  vc as xn,
  vr as xo,
  gr as xr,
  oe as xs,
  Ln as xt,
  Hc as y,
  B as ya,
  It as yi,
  Rp as yn,
  Wd as yo,
  De as yr,
  pp as ys,
  zn as yt,
  xp as z,
  Il as za,
  Me as zi,
  zi as zn,
  Aa as zo,
  Se as zr,
  wn as zt,
};
//# sourceMappingURL=motion.BzDeQR7Y.mjs.map
