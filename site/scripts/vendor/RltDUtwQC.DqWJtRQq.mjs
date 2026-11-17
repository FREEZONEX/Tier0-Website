import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import { J as t, Q as n, T as r } from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { i, n as a } from "./kVs8tQwHo.oPF1Jh2G.mjs?v=20261116-migration-v2";
function o(e, t) {
  for (; t; ) {
    let n = u[t.id];
    if (n) {
      let t = n[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function s(e, t) {
  let n = e?.WT9WaYw6k,
    r = e?.chr9IZF2n,
    i = e?.bxlkRlncE;
  return {
    breakpoints: [
      { hash: `id4mfc`, mediaQuery: `(min-width: 1440px)` },
      { hash: `4zm3va`, mediaQuery: `(min-width: 810px) and (max-width: 1439.98px)` },
      { hash: `pmwq6w`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: o(`v1`, t)?.(r) ?? `${r === void 0 ? `{{chr9IZF2n}}` : d(r)}`,
    elements: {
      cFYfB8AHs: `p-2`,
      d5hi1FATP: `page`,
      fmZzDLKNp: `p-5`,
      gJt5ROTjv: `p-8`,
      k_nqwIFdb: `p-3`,
      KnUVoZx0V: `p-1`,
      oAgQqrAHA: `p-4`,
      xYMTYxSBk: `p-9`,
      yeNmZYtyX: `p-7`,
      ZjnOHnVqh: `p-6`,
    },
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-OAFzz`,
    socialImage: f(i),
    title: o(`v0`, t)?.(n) ?? `${n === void 0 ? `{{WT9WaYw6k}}` : d(n)}｜Tier0 博客`,
    viewport: `width=device-width`,
  };
}
async function c(e, n) {
  let i = new r(),
    o = {
      from: { alias: `RltDUtwQC`, data: a, type: `Collection` },
      select: [
        { collection: `RltDUtwQC`, name: `WT9WaYw6k`, type: `Identifier` },
        { collection: `RltDUtwQC`, name: `chr9IZF2n`, type: `Identifier` },
        { collection: `RltDUtwQC`, name: `bxlkRlncE`, type: `Identifier` },
      ],
      where: t(e, `RltDUtwQC`),
    },
    c = await i.query(o, n);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return s(l, n);
}
async function l(e, t) {
  let n = new r(),
    i = {
      from: { alias: `RltDUtwQC`, data: a, type: `Collection` },
      select: [
        { collection: `RltDUtwQC`, name: `WT9WaYw6k`, type: `Identifier` },
        { collection: `RltDUtwQC`, name: `chr9IZF2n`, type: `Identifier` },
        { collection: `RltDUtwQC`, name: `bxlkRlncE`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `RltDUtwQC`, name: t, type: `Identifier` });
  return (await n.query(i, t)).map((n) => ({
    metadata: s(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var u, d, f, p, m;
function h() {
  return (h = e(() => {
    (n(),
      i(),
      (u = {
        AYmst8Nt3: {
          v0: (e) => `${e === void 0 ? `{{WT9WaYw6k}}` : d(e)} | 博客`,
          v1: (e) => `${e === void 0 ? `{{chr9IZF2n}}` : d(e)}`,
        },
      }),
      (d = (e) => (typeof e == `string` ? e : String(e))),
      (f = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (p = 1),
      (m = {
        exports: {
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: {
            type: `function`,
            isAsync: !0,
            annotations: { framerContractVersion: `1` },
          },
          fetchMetadata: {
            type: `function`,
            isAsync: !0,
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { s as a, h as i, l as n, p as o, c as r, m as t };
//# sourceMappingURL=RltDUtwQC.DqWJtRQq.mjs.map
