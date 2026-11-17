import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import { O as t, R as n, c as r, f as i, h as a, s as o } from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { Yi as s } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import {
  Ht as c,
  M as l,
  Q as u,
  T as d,
  r as ee,
  s as f,
  t as te,
  y as ne,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
function p(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function m(e) {
  return typeof e == `function` ? e() : e;
}
function re(e, t) {
  return D[e] > D[t];
}
function h(e) {
  let t;
  for (let n of e) {
    let e = m(n);
    if (((t === void 0 || re(e, t)) && (t = e), t === `user-blocking`)) break;
  }
  return t;
}
function g(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function _(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function v(e) {
  throw Error(`Unexpected value: ${e}`);
}
function y(e, t, n, r) {
  (_(e >= t, e, `outside lower bound for`, r), _(e <= n, e, `outside upper bound for`, r));
}
function b(e) {
  return typeof e == `string`;
}
function x(e) {
  return Number.isFinite(e);
}
function S(e) {
  return e === null;
}
function C(e) {
  if (S(e)) return 0;
  switch (e.type) {
    case `array`:
      return 1;
    case `boolean`:
      return 2;
    case `color`:
      return 3;
    case `date`:
      return 4;
    case `enum`:
      return 5;
    case `file`:
      return 6;
    case `responsiveimage`:
      return 10;
    case `link`:
      return 7;
    case `number`:
      return 8;
    case `object`:
      return 9;
    case `richtext`:
      return 11;
    case `string`:
      return 12;
    case `vectorsetitem`:
      return 13;
    default:
      v(e);
  }
}
function ie(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = w.read(e);
    n.push(t);
  }
  return { type: `array`, value: n };
}
function ae(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) w.write(e, n);
}
function oe(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = w.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function se(e) {
  return { type: `boolean`, value: e.readUint8() !== 0 };
}
function ce(e, t) {
  e.writeUint8(+!!t.value);
}
function le(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ue(e) {
  return { type: `color`, value: e.readString() };
}
function de(e, t) {
  e.writeString(t.value);
}
function fe(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function pe(e) {
  let t = e.readInt64();
  return { type: `date`, value: new Date(t).toISOString() };
}
function me(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function he(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function ge(e) {
  return { type: `enum`, value: e.readString() };
}
function _e(e, t) {
  e.writeString(t.value);
}
function ve(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ye(e) {
  return { type: `file`, value: e.readString() };
}
function be(e, t) {
  e.writeString(t.value);
}
function xe(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Se(e) {
  return { type: `link`, value: e.readJson() };
}
function Ce(e, t) {
  e.writeJson(t.value);
}
function we(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Te(e) {
  return { type: `number`, value: e.readFloat64() };
}
function Ee(e, t) {
  e.writeFloat64(t.value);
}
function De(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Oe(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = w.read(e);
  }
  return { type: `object`, value: n };
}
function ke(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), w.write(e, r));
}
function Ae(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = w.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function je(e) {
  return { type: `responsiveimage`, value: e.readJson() };
}
function Me(e, t) {
  e.writeJson(t.value);
}
function Ne(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Pe(e) {
  let t = e.readInt8();
  if (t === 0) return { type: `richtext`, value: e.readUint32() };
  if (t === 1) return { type: `richtext`, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Fe(e, t) {
  if (x(t.value)) (e.writeInt8(0), e.writeUint32(t.value));
  else if (b(t.value)) (e.writeInt8(1), e.writeString(t.value));
  else throw Error(`Invalid rich text pointer`);
}
function Ie(e, t) {
  let n = e.value,
    r = t.value;
  if ((x(n) && x(r)) || (b(n) && b(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function Le(e) {
  return { type: `string`, value: e.readString() };
}
function Re(e, t) {
  e.writeString(t.value);
}
function ze(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Be(e) {
  return { type: `vectorsetitem`, value: e.readUint32() };
}
function Ve(e, t) {
  e.writeUint32(t.value);
}
function He(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function Ue(e) {
  let t = Math.floor(ct * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function We(e, t) {
  let n = Ke(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await L(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new ut(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function Ge(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function Ke(e) {
  _(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function qe(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = w.read(e);
  }
  return t;
}
function* Je(e) {
  for (let t of e) yield* t.prioritySources;
}
var Ye,
  w,
  Xe,
  T,
  Ze,
  E,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  D,
  O,
  k,
  it,
  at,
  A,
  j,
  M,
  N,
  P,
  ot,
  F,
  st,
  I,
  ct,
  lt,
  L,
  ut,
  R,
  dt,
  z;
function ft() {
  return (ft = e(() => {
    (u(),
      (Xe = Object.create),
      (T = Object.defineProperty),
      (Ze = Object.getOwnPropertyDescriptor),
      (E = Object.getOwnPropertyNames),
      (Qe = Object.getPrototypeOf),
      ($e = Object.prototype.hasOwnProperty),
      (et = (e, t) =>
        function () {
          try {
            return (t || (0, e[E(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (tt = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of E(t))
            $e.call(e, i) ||
              i === n ||
              T(e, i, { get: () => t[i], enumerable: !(r = Ze(t, i)) || r.enumerable });
        return e;
      }),
      (nt = (e, t, n) => (
        (n = e == null ? {} : Xe(Qe(e))),
        tt(!t && e && e.__esModule ? n : T(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (rt = nt(
        et({
          "../../../node_modules/dataloader/index.js?v=20261116-migration-v2"(e, t) {
            var n,
              r = /* @__PURE__ */ (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (e && !1 === e.batch) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (e && !1 === e.cache) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return /* @__PURE__ */ new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) o(t);
                              else {
                                try {
                                  n = e._batchLoadFn(t.keys);
                                } catch (n) {
                                  return a(
                                    e,
                                    t,
                                    TypeError(
                                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                        String(n) +
                                        `.`
                                    )
                                  );
                                }
                                if (!n || typeof n.then != `function`)
                                  return a(
                                    e,
                                    t,
                                    TypeError(
                                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                        String(n) +
                                        `.`
                                    )
                                  );
                                n.then(function (e) {
                                  if (!s(e))
                                    throw TypeError(
                                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                        String(e) +
                                        `.`
                                    );
                                  if (e.length !== t.keys.length)
                                    throw TypeError(
                                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                        String(t.keys) +
                                        `

Values:
` +
                                        String(e)
                                    );
                                  o(t);
                                  for (var n = 0; n < t.callbacks.length; n++) {
                                    var r = e[n];
                                    r instanceof Error
                                      ? t.callbacks[n].reject(r)
                                      : t.callbacks[n].resolve(r);
                                  }
                                }).catch(function (n) {
                                  a(e, t, n);
                                });
                              }
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (D = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (O = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (k =
        ((Ye = class e {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = O.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = O.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = O.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = O.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = O.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = O.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = O.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = O.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = O.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = O.Float64;
            this.ensureLength(e);
            let t = this.view.getFloat64(this.offset);
            return ((this.offset += e), t);
          }
          readBytes(e) {
            let t = this.offset,
              n = t + e,
              r = this.bytes.subarray(t, n);
            return ((this.offset = n), r);
          }
          readString() {
            let t = this.readUint32(),
              n = this.readBytes(t);
            return e.textDecoder.decode(n);
          }
          readJson() {
            let e = this.readString();
            return JSON.parse(e);
          }
          constructor(e) {
            (p(this, `bytes`, void 0),
              p(this, `offset`, 0),
              p(this, `view`, void 0),
              (this.bytes = e),
              (this.view = g(this.bytes)));
          }
        }),
        p(Ye, `textDecoder`, new TextDecoder()),
        Ye)),
      (it = 1024),
      (at = 1.5),
      (A = (e) => 2 ** e - 1),
      (j = (e) => -(2 ** (e - 1))),
      (M = (e) => 2 ** (e - 1) - 1),
      (N = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: j(8),
        Int16: j(16),
        Int32: j(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (P = {
        Uint8: A(8),
        Uint16: A(16),
        Uint32: A(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: M(8),
        Int16: M(16),
        Int32: M(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (ot = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.bytes.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return this.bytes.subarray(e, t);
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (this.offset + e <= t) return;
          let n = new Uint8Array(Math.ceil(t * at) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = g(n)));
        }
        writeUint8(e) {
          y(e, N.Uint8, P.Uint8, `Uint8`);
          let t = O.Uint8;
          (this.ensureLength(t), this.view.setUint8(this.offset, e), (this.offset += t));
        }
        writeUint16(e) {
          y(e, N.Uint16, P.Uint16, `Uint16`);
          let t = O.Uint16;
          (this.ensureLength(t), this.view.setUint16(this.offset, e), (this.offset += t));
        }
        writeUint32(e) {
          y(e, N.Uint32, P.Uint32, `Uint32`);
          let t = O.Uint32;
          (this.ensureLength(t), this.view.setUint32(this.offset, e), (this.offset += t));
        }
        writeUint64(e) {
          y(e, N.Uint64, P.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          y(e, N.BigUint64, P.BigUint64, `BigUint64`);
          let t = O.BigUint64;
          (this.ensureLength(t), this.view.setBigUint64(this.offset, e), (this.offset += t));
        }
        writeInt8(e) {
          y(e, N.Int8, P.Int8, `Int8`);
          let t = O.Int8;
          (this.ensureLength(t), this.view.setInt8(this.offset, e), (this.offset += t));
        }
        writeInt16(e) {
          y(e, N.Int16, P.Int16, `Int16`);
          let t = O.Int16;
          (this.ensureLength(t), this.view.setInt16(this.offset, e), (this.offset += t));
        }
        writeInt32(e) {
          y(e, N.Int32, P.Int32, `Int32`);
          let t = O.Int32;
          (this.ensureLength(t), this.view.setInt32(this.offset, e), (this.offset += t));
        }
        writeInt64(e) {
          y(e, N.Int64, P.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          y(e, N.BigInt64, P.BigInt64, `BigInt64`);
          let t = O.BigInt64;
          (this.ensureLength(t), this.view.setBigInt64(this.offset, e), (this.offset += t));
        }
        writeFloat32(e) {
          let t = O.Float32;
          (this.ensureLength(t), this.view.setFloat32(this.offset, e), (this.offset += t));
        }
        writeFloat64(e) {
          let t = O.Float64;
          (this.ensureLength(t), this.view.setFloat64(this.offset, e), (this.offset += t));
        }
        writeBytes(e) {
          let t = e.length;
          (this.ensureLength(t), this.bytes.set(e, this.offset), (this.offset += t));
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return (this.encodedStrings.set(e, n), n);
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.length;
          (this.writeUint32(n), this.writeBytes(t));
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          (p(this, `offset`, 0),
            p(this, `bytes`, new Uint8Array(it)),
            p(this, `view`, g(this.bytes)),
            p(this, `encoder`, new TextEncoder()),
            p(this, `encodedStrings`, /* @__PURE__ */ new Map()));
        }
      }),
      (F = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            _(x(n), `Invalid chunkId`),
            _(x(r), `Invalid offset`),
            _(x(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (_(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (p(this, `chunkId`, void 0),
            p(this, `offset`, void 0),
            p(this, `length`, void 0),
            (this.chunkId = e),
            (this.offset = t),
            (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return ie(e);
            case 2:
              return se(e);
            case 3:
              return ue(e);
            case 4:
              return pe(e);
            case 5:
              return ge(e);
            case 6:
              return ye(e);
            case 7:
              return Se(e);
            case 8:
              return Te(e);
            case 9:
              return Oe(e);
            case 10:
              return je(e);
            case 11:
              return Pe(e);
            case 12:
              return Le(e);
            case 13:
              return Be(e);
            default:
              v(t);
          }
        }),
          (e.write = function (e, t) {
            let n = C(t);
            if ((e.writeUint8(n), !S(t)))
              switch (t.type) {
                case `array`:
                  return ae(e, t);
                case `boolean`:
                  return ce(e, t);
                case `color`:
                  return de(e, t);
                case `date`:
                  return me(e, t);
                case `enum`:
                  return _e(e, t);
                case `file`:
                  return be(e, t);
                case `link`:
                  return Ce(e, t);
                case `number`:
                  return Ee(e, t);
                case `object`:
                  return ke(e, t);
                case `responsiveimage`:
                  return Me(e, t);
                case `richtext`:
                  return Fe(e, t);
                case `vectorsetitem`:
                  return Ve(e, t);
                case `string`:
                  return Re(e, t);
                default:
                  v(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = C(e),
              i = C(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (S(e) || S(t)) return 0;
            switch (e.type) {
              case `array`:
                return (_(t.type === `array`), oe(e, t, n));
              case `boolean`:
                return (_(t.type === `boolean`), le(e, t));
              case `color`:
                return (_(t.type === `color`), fe(e, t));
              case `date`:
                return (_(t.type === `date`), he(e, t));
              case `enum`:
                return (_(t.type === `enum`), ve(e, t));
              case `file`:
                return (_(t.type === `file`), xe(e, t));
              case `link`:
                return (_(t.type === `link`), we(e, t));
              case `number`:
                return (_(t.type === `number`), De(e, t));
              case `object`:
                return (_(t.type === `object`), Ae(e, t, n));
              case `responsiveimage`:
                return (_(t.type === `responsiveimage`), Ne(e, t));
              case `richtext`:
                return (_(t.type === `richtext`), Ie(e, t));
              case `vectorsetitem`:
                return (_(t.type === `vectorsetitem`), He(e, t));
              case `string`:
                return (_(t.type === `string`), ze(e, t, n));
              default:
                v(e);
            }
          }));
      })((w ||= {})),
      (st = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = w.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static async deserialize(t, n) {
          let r = new k(t),
            i = r.readJson(),
            a = r.readUint8(),
            o = [];
          for (let e = 0; e < a; e++) {
            let e = r.readString();
            o.push(e);
          }
          let s = new e(o, { collation: i }),
            c = r.readUint32(),
            l = () => {
              let e = [];
              for (let t = 0; t < a; t++) {
                let t = w.read(r);
                e.push(t);
              }
              let t = F.read(r);
              s.entries.push({ values: e, pointer: t });
            };
          for (let e = 0; e < c; e++) {
            let e = n?.();
            (e && (await e), l());
          }
          return s;
        }
        serialize() {
          let e = new ot();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(), e.writeUint32(this.entries.length), this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) w.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          (p(this, `fieldNames`, void 0),
            p(this, `options`, void 0),
            p(this, `entries`, []),
            (this.fieldNames = e),
            (this.options = t));
        }
      }),
      (I = 3),
      (ct = 250),
      (lt = [408, 429, 500, 502, 503, 504]),
      (L = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!lt.includes(r.status) || ++n > I) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > I) throw e;
          }
          await Ue(n);
        }
      }),
      (ut = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((_(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = Ge(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((_(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = Ge(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          p(this, `chunks`, []);
        }
      }),
      (R = class {
        async loadModel() {
          let [e] = await We(this.options.url, [this.options.range]);
          return (
            _(e, `Failed to load model`),
            st.deserialize(e, () => {
              let e = h(this.modelPrioritySources);
              return e ? c({ batch: !0, priority: e }) : void 0;
            })
          );
        }
        async getModel(e) {
          return (
            this.model ||
              (e && this.modelPrioritySources.add(e),
              (this.modelPromise ??= this.loadModel().finally(() => {
                this.modelPrioritySources.clear();
              })),
              (this.model ??= await this.modelPromise)),
            this.model
          );
        }
        async lookupItems(e, t) {
          _(e.length === this.fields.length, `Invalid query length`);
          let n = [(await this.getModel(t)).entries];
          for (let [r, i] of e.entries()) {
            let e = [];
            for (let a of n) {
              let n,
                o = t ? c({ batch: !0, priority: m(t) }) : void 0;
              switch ((o && (await o), i.type)) {
                case `All`:
                  n = [a];
                  break;
                case `Equals`:
                  n = this.queryEquals(a, i, r);
                  break;
                case `NotEquals`:
                  n = this.queryNotEquals(a, i, r);
                  break;
                case `LessThan`:
                  n = this.queryLessThan(a, i, r);
                  break;
                case `GreaterThan`:
                  n = this.queryGreaterThan(a, i, r);
                  break;
                case `Contains`:
                  n = await this.queryContains(a, i, r, t);
                  break;
                case `StartsWith`:
                  n = await this.queryStartsWith(a, i, r, t);
                  break;
                case `EndsWith`:
                  n = await this.queryEndsWith(a, i, r, t);
                  break;
                default:
                  v(i);
              }
              e.push(...n);
            }
            n = e;
          }
          let r = [];
          for (let e of n)
            for (let n of e) {
              let e = t ? c({ batch: !0, priority: m(t) }) : void 0;
              e && (await e);
              let i = {};
              for (let e = 0; e < this.options.fieldNames.length; e++) {
                let t = this.options.fieldNames[e];
                i[t] = n.values[e];
              }
              r.push({ pointer: n.pointer.toString(), data: i });
            }
          return r;
        }
        queryEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = e.slice(r, i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryNotEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = [],
            o = e.slice(0, r);
          o.length > 0 && a.push(o);
          let s = e.slice(i + 1);
          return (s.length > 0 && a.push(s), a);
        }
        queryLessThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getRightMost(e, n, t.value),
              i = e.slice(0, r + 1);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getLeftMost(e, n, t.value),
            a = e.slice(0, i);
          return a.length > 0 ? [a] : [];
        }
        queryGreaterThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getLeftMost(e, n, t.value),
              i = e.slice(r);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getRightMost(e, n, t.value),
            a = e.slice(i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryContains(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.includes(r)
            );
          });
        }
        queryStartsWith(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.startsWith(r)
            );
          });
        }
        queryEndsWith(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.endsWith(r)
            );
          });
        }
        getLeftMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i; ) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            0 > w.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i; ) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            w.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
          }
          return i - 1;
        }
        async findItems(e, t, n, r) {
          let i = [],
            a = 0;
          for (let o = 0; o < e.length; o++) {
            let s = n ? c({ batch: !0, priority: m(n) }) : void 0;
            s && (await s);
            let l = e[o].values[t];
            if (!r(l)) {
              if (a < o) {
                let t = e.slice(a, o);
                i.push(t);
              }
              a = o + 1;
            }
          }
          if (a < e.length) {
            let t = e.slice(a);
            i.push(t);
          }
          return i;
        }
        constructor(e) {
          (p(this, `options`, void 0),
            p(this, `schema`, void 0),
            p(this, `fields`, void 0),
            p(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            p(this, `modelPromise`, void 0),
            p(this, `model`, void 0),
            p(this, `modelPrioritySources`, /* @__PURE__ */ new Set()),
            p(this, `collation`, void 0),
            (this.options = e));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (_(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t), (this.fields = n), (this.collation = this.options.collation));
        }
      }),
      (dt = class {
        scanItems(e) {
          return (
            this.itemsPromise
              ? this.isScanning && e && this.scanPrioritySources.add(e)
              : ((this.isScanning = !0),
                e && this.scanPrioritySources.add(e),
                (this.itemsPromise = L(this.url)
                  .then(async (e) => {
                    if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
                    let t = await e.arrayBuffer(),
                      n = new k(new Uint8Array(t)),
                      r = [],
                      i = n.readUint32();
                    for (let e = 0; e < i; e++) {
                      let e = h(this.scanPrioritySources),
                        t = e ? c({ batch: !0, priority: e }) : void 0;
                      t && (await t);
                      let i = n.getOffset(),
                        a = qe(n),
                        o = n.getOffset() - i,
                        s = new F(this.id, i, o).toString(),
                        l = { pointer: s, data: a };
                      (this.itemLoader.prime(
                        { pointer: s, prioritySources: /* @__PURE__ */ new Set() },
                        l
                      ),
                        r.push(l));
                    }
                    return r;
                  })
                  .finally(() => {
                    ((this.isScanning = !1), this.scanPrioritySources.clear());
                  }))),
            this.itemsPromise
          );
        }
        resolveItem(e, t) {
          let n = this.itemPrioritySources.get(e);
          (n || ((n = /* @__PURE__ */ new Set()), this.itemPrioritySources.set(e, n)),
            t && n.add(t));
          let r = this.itemLoader.load({ pointer: e, prioritySources: n }),
            i = () => this.itemPrioritySources.delete(e);
          return (r.then(i, i), r);
        }
        constructor(e, t) {
          (p(this, `id`, void 0),
            p(this, `url`, void 0),
            p(this, `itemsPromise`, void 0),
            p(this, `isScanning`, !1),
            p(this, `scanPrioritySources`, /* @__PURE__ */ new Set()),
            p(this, `itemPrioritySources`, /* @__PURE__ */ new Map()),
            p(
              this,
              `itemLoader`,
              new rt.default(
                async (e) => {
                  let t = e.map(({ pointer: e }) => {
                      let t = F.fromString(e);
                      return { from: t.offset, to: t.offset + t.length };
                    }),
                    n = await We(this.url, t),
                    r = [];
                  for (let t = 0; t < n.length; t++) {
                    let i = h(Je(e)),
                      a = i ? c({ batch: !0, priority: i }) : void 0;
                    a && (await a);
                    let o = n[t];
                    _(o, `Missing range bytes`);
                    let s = qe(new k(o)),
                      l = e[t]?.pointer;
                    (_(l, `Missing pointer`), r.push({ pointer: l, data: s }));
                  }
                  return r;
                },
                { maxBatchSize: 250, cacheKeyFn: (e) => e.pointer }
              )
            ),
            (this.id = e),
            (this.url = t));
        }
      }),
      (z = class {
        async scanItems(e) {
          return (await Promise.all(this.chunks.map(async (t) => t.scanItems(e)))).flat();
        }
        resolveItems(e, t) {
          return Promise.all(
            e.map((e) => {
              let n = F.fromString(e),
                r = this.chunks[n.chunkId];
              return (_(r, `Missing chunk`), r.resolveItem(e, t));
            })
          );
        }
        compareItems(e, t) {
          let n = F.fromString(e.pointer),
            r = F.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return w.compare(e, t, n);
        }
        constructor(e) {
          (p(this, `options`, void 0),
            p(this, `id`, void 0),
            p(this, `schema`, void 0),
            p(this, `indexes`, void 0),
            p(this, `resolveRichText`, void 0),
            p(this, `resolveVectorSetItem`, void 0),
            p(this, `chunks`, void 0),
            (this.options = e),
            (this.chunks = this.options.chunks.map((e, t) => new dt(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  }))();
}
function pt(e) {
  return typeof e == `object` && !!e && !(/*#__PURE__*/ a(e)) && vt in e;
}
function mt(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function ht(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    typeof i == `number` ? (e[r] = n(i, t)) : gt(t, i, n);
  }
}
function gt(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? (e[t] = n(r, i)) : gt(i, r, n);
      }
      return;
    }
    typeof e != `object` || !e || Array.isArray(e) || ht(e, t, n);
  }
}
function _t(e) {
  let t = /* @__PURE__ */ new Map();
  return (r) => {
    let a = t.get(r);
    if (a) return a;
    let c = (function t(r) {
      switch (r[0]) {
        case 1: {
          let [, ...e] = r,
            a = e.map(t);
          return /*#__PURE__*/ i(n, void 0, ...a);
        }
        case 2: {
          let [, e, ...n] = r,
            a = n.map(t);
          return /*#__PURE__*/ i(ne, e, ...a);
        }
        case 3: {
          let [, n, i, a] = r;
          ht(i, a, (n, r) => {
            if (n === 1) return r && t(r);
            if (typeof r != `string`) return r;
            let i = e[r];
            return i ? (pt(i) && i.preload(), i) : r;
          });
          let s = e[n];
          return (
            mt(s, `Module not found`),
            pt(s) && s.preload(),
            /*#__PURE__*/ o(ee, {
              componentIdentifier: n,
              children: (e) => /*#__PURE__*/ o(te, { component: s, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, n, ...a] = r,
            o = a.map(t);
          return i(e === `a` ? s.a : e, n, ...o);
        }
        case 5: {
          let [, e] = r;
          return e;
        }
      }
    })(JSON.parse(r));
    return (t.set(r, c), c);
  };
}
var B, V, vt, yt, bt;
function xt() {
  return (xt = e(() => {
    (r(),
      u(),
      t(),
      (vt = `preload`),
      (yt =
        (((B = yt || {})[(B.Fragment = 1)] = `Fragment`),
        (B[(B.Link = 2)] = `Link`),
        (B[(B.Module = 3)] = `Module`),
        (B[(B.Tag = 4)] = `Tag`),
        (B[(B.Text = 5)] = `Text`),
        B)),
      (bt =
        (((V = bt || {})[(V.RichText = 1)] = `RichText`),
        (V[(V.VectorSetItem = 2)] = `VectorSetItem`),
        V)));
  }))();
}
var H,
  U,
  W,
  G,
  K,
  q,
  J,
  St,
  Y,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  X,
  Lt,
  Rt,
  Z,
  zt,
  Q,
  $,
  Bt,
  Vt,
  Ht;
function Ut() {
  return (Ut = e(() => {
    (u(),
      ft(),
      xt(),
      (H = {
        b4ajUUAPR: { isNullable: !0, type: f.Date },
        createdAt: { isNullable: !0, type: f.Date },
        ELnXIKL_l: { isNullable: !0, type: f.String },
        ET2gAmR7U: { isNullable: !0, type: f.RichText },
        hpsakyJoO: { isNullable: !0, type: f.String },
        id: { isNullable: !1, type: f.String },
        IegIZjdLj: { isNullable: !0, type: f.ResponsiveImage },
        j56HSkFKu: { isNullable: !0, type: f.String },
        K95blU_dh: { isNullable: !0, type: f.String },
        LCkn42nrW: { isNullable: !0, type: f.String },
        nextItemId: { isNullable: !0, type: f.String },
        nNdz41tpJ: { isNullable: !0, type: f.RichText },
        p_BlY6Uem: { isNullable: !0, type: f.String },
        previousItemId: { isNullable: !0, type: f.String },
        u7Knagwe9: { isNullable: !0, type: f.String },
        updatedAt: { isNullable: !0, type: f.Date },
        vauObbrSI: { isNullable: !0, type: f.ResponsiveImage },
        XYkAjWmYi: { isNullable: !0, type: f.Link },
        yqSvJPjYE: { isNullable: !0, type: f.RichText },
        ZTlTAU00r: { isNullable: !0, type: f.RichText },
      }),
      (U = new URL(
        `./GDzaVbCEd-indexes-default-0.framercms`,
        `https://framerusercontent.com/modules/qzgytdimP2O7z05FCGO8/xQhFxWBxnD3sQagYw1KX/GDzaVbCEd.js?v=20261116-migration-v2`
      ).href.replace(`/modules/`, `/cms/`)),
      (W = [`id`]),
      (G = { type: 1 }),
      (K = [`previousItemId`]),
      (q = [`nextItemId`]),
      (J = [`id`, `ELnXIKL_l`]),
      (St = [`ELnXIKL_l`, `id`]),
      (Y = { type: 0 }),
      (Ct = [`IegIZjdLj`]),
      (wt = [`p_BlY6Uem`]),
      (Tt = [`ELnXIKL_l`]),
      (Et = [`u7Knagwe9`]),
      (Dt = [`j56HSkFKu`]),
      (Ot = [`nNdz41tpJ`]),
      (kt = [`b4ajUUAPR`]),
      (At = [`ZTlTAU00r`]),
      (jt = [`ET2gAmR7U`]),
      (Mt = [`vauObbrSI`]),
      (Nt = [`yqSvJPjYE`]),
      (Pt = [`XYkAjWmYi`]),
      (Ft = [`K95blU_dh`]),
      (It = [`LCkn42nrW`]),
      (X = [`hpsakyJoO`]),
      (Lt = []),
      (Rt = (e) => {
        let t = Lt[e];
        if (t) return t().then((e) => e.default);
      }),
      (Z = new URL(
        `./GDzaVbCEd-indexes-AYmst8Nt3-0.framercms`,
        `https://framerusercontent.com/modules/qzgytdimP2O7z05FCGO8/xQhFxWBxnD3sQagYw1KX/GDzaVbCEd.js?v=20261116-migration-v2`
      ).href.replace(`/modules/`, `/cms/`)),
      (zt = _t({})),
      (Q = new d()),
      ($ = {
        collectionByLocaleId: {
          AYmst8Nt3: new z({
            chunks: [
              new URL(
                `./GDzaVbCEd-chunk-AYmst8Nt3-0.framercms`,
                `https://framerusercontent.com/modules/qzgytdimP2O7z05FCGO8/xQhFxWBxnD3sQagYw1KX/GDzaVbCEd.js?v=20261116-migration-v2`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `de5e7922-92dc-41fb-8c79-b226766769e4AYmst8Nt3`,
            indexes: [
              new R({
                collation: G,
                collectionSchema: H,
                fieldNames: W,
                range: { from: 0, to: 121 },
                url: Z,
              }),
              new R({
                collation: G,
                collectionSchema: H,
                fieldNames: K,
                range: { from: 121, to: 241 },
                url: Z,
              }),
              new R({
                collation: G,
                collectionSchema: H,
                fieldNames: q,
                range: { from: 241, to: 357 },
                url: Z,
              }),
              new R({
                collation: G,
                collectionSchema: H,
                fieldNames: J,
                range: { from: 357, to: 617 },
                url: Z,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: St,
                range: { from: 617, to: 877 },
                url: Z,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: Ct,
                range: { from: 877, to: 2899 },
                url: Z,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: wt,
                range: { from: 2899, to: 3618 },
                url: Z,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: Tt,
                range: { from: 3618, to: 3816 },
                url: Z,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: Et,
                range: { from: 3816, to: 3950 },
                url: Z,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: Dt,
                range: { from: 3950, to: 4249 },
                url: Z,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: Ot,
                range: { from: 4249, to: 5677 },
                url: Z,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: kt,
                range: { from: 5677, to: 5785 },
                url: Z,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: At,
                range: { from: 5785, to: 6019 },
                url: Z,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: jt,
                range: { from: 6019, to: 15081 },
                url: Z,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: Mt,
                range: { from: 15081, to: 15640 },
                url: Z,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: Nt,
                range: { from: 15640, to: 15755 },
                url: Z,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: Pt,
                range: { from: 15755, to: 16105 },
                url: Z,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: Ft,
                range: { from: 16105, to: 16339 },
                url: Z,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: It,
                range: { from: 16339, to: 16495 },
                url: Z,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: X,
                range: { from: 16495, to: 16629 },
                url: Z,
              }),
            ],
            resolveRichText: zt,
            resolveVectorSetItem: Rt,
            schema: H,
          }),
          default: new z({
            chunks: [
              new URL(
                `./GDzaVbCEd-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/qzgytdimP2O7z05FCGO8/xQhFxWBxnD3sQagYw1KX/GDzaVbCEd.js?v=20261116-migration-v2`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `de5e7922-92dc-41fb-8c79-b226766769e4default`,
            indexes: [
              new R({
                collation: G,
                collectionSchema: H,
                fieldNames: W,
                range: { from: 0, to: 121 },
                url: U,
              }),
              new R({
                collation: G,
                collectionSchema: H,
                fieldNames: K,
                range: { from: 121, to: 241 },
                url: U,
              }),
              new R({
                collation: G,
                collectionSchema: H,
                fieldNames: q,
                range: { from: 241, to: 357 },
                url: U,
              }),
              new R({
                collation: G,
                collectionSchema: H,
                fieldNames: J,
                range: { from: 357, to: 617 },
                url: U,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: St,
                range: { from: 617, to: 877 },
                url: U,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: Ct,
                range: { from: 877, to: 2899 },
                url: U,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: wt,
                range: { from: 2899, to: 3675 },
                url: U,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: Tt,
                range: { from: 3675, to: 3873 },
                url: U,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: Et,
                range: { from: 3873, to: 4007 },
                url: U,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: Dt,
                range: { from: 4007, to: 4287 },
                url: U,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: Ot,
                range: { from: 4287, to: 5640 },
                url: U,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: kt,
                range: { from: 5640, to: 5748 },
                url: U,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: At,
                range: { from: 5748, to: 5970 },
                url: U,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: jt,
                range: { from: 5970, to: 14962 },
                url: U,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: Mt,
                range: { from: 14962, to: 15521 },
                url: U,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: Nt,
                range: { from: 15521, to: 15636 },
                url: U,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: Pt,
                range: { from: 15636, to: 15986 },
                url: U,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: Ft,
                range: { from: 15986, to: 16208 },
                url: U,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: It,
                range: { from: 16208, to: 16371 },
                url: U,
              }),
              new R({
                collation: Y,
                collectionSchema: H,
                fieldNames: X,
                range: { from: 16371, to: 16505 },
                url: U,
              }),
            ],
            resolveRichText: zt,
            resolveVectorSetItem: Rt,
            schema: H,
          }),
        },
        displayName: `Events`,
        id: `de5e7922-92dc-41fb-8c79-b226766769e4`,
      }),
      l($, {
        IegIZjdLj: { title: `Hero image`, type: f.ResponsiveImage },
        p_BlY6Uem: { defaultValue: ``, title: `SEO-Description`, type: f.String },
        ELnXIKL_l: { preventLocalization: !0, title: `Slug`, type: f.String },
        u7Knagwe9: { defaultValue: ``, title: `Category`, type: f.String },
        j56HSkFKu: { defaultValue: ``, title: `Title`, type: f.String },
        nNdz41tpJ: { defaultValue: ``, title: `Description`, type: f.RichText },
        b4ajUUAPR: { title: `Date`, type: f.Date },
        ZTlTAU00r: { defaultValue: ``, title: `Sub title`, type: f.RichText },
        ET2gAmR7U: { defaultValue: ``, title: `Content`, type: f.RichText },
        vauObbrSI: { title: ` Avatar`, type: f.ResponsiveImage },
        yqSvJPjYE: { defaultValue: ``, title: `Speaker`, type: f.RichText },
        XYkAjWmYi: { title: `Link`, type: f.Link },
        K95blU_dh: { defaultValue: ``, title: `Card Title`, type: f.String },
        LCkn42nrW: { defaultValue: ``, title: `Card sub title`, type: f.String },
        hpsakyJoO: { defaultValue: ``, title: `Card bottom`, type: f.String },
        createdAt: { title: `Created`, type: f.Date },
        updatedAt: { title: `Updated`, type: f.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/GDzaVbCEd:default`,
          title: `Previous`,
          type: f.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/GDzaVbCEd:default`,
          title: `Next`,
          type: f.CollectionReference,
        },
      }),
      (Bt = {}),
      (Vt = {
        async getSlugByRecordId(e, t) {
          let [n] = await Q.query(
            {
              from: { data: $, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `ELnXIKL_l`, type: `Identifier` }],
              where: {
                left: { name: `id`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.ELnXIKL_l;
        },
        async getRecordIdBySlug(e, t) {
          let [n] = await Q.query(
            {
              from: { data: $, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `id`, type: `Identifier` }],
              where: {
                left: { name: `ELnXIKL_l`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.id;
        },
        getContentLocaleIdByRecordId(e, t) {},
      }),
      (Ht = {
        exports: {
          enumToDisplayNameFunctions: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          default: {
            type: `data`,
            name: `data`,
            annotations: {
              framerSlug: `ELnXIKL_l`,
              framerContractVersion: `1`,
              framerCollectionId: `GDzaVbCEd`,
              framerRecordIdKey: `id`,
              framerEnumToDisplayNameUtils: `2`,
              framerAutoSizeImages: `true`,
              framerColorSyntax: `false`,
              framerData: `true`,
              framerCollectionUtils: `1`,
            },
          },
          utils: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { Vt as a, Ut as i, Ht as n, Bt as r, $ as t };
//# sourceMappingURL=GDzaVbCEd.BIN7eRtb.mjs.map
