import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import { J as t, Q as n, T as r } from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import { i, t as a } from "./GDzaVbCEd.BIN7eRtb.mjs?v=20261116-migration-v2";
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
  let n = e?.j56HSkFKu,
    r = e?.p_BlY6Uem;
  return {
    breakpoints: [
      { hash: `28807w`, mediaQuery: `(min-width: 1440px)` },
      { hash: `1ot2mjo`, mediaQuery: `(min-width: 810px) and (max-width: 1439.98px)` },
      { hash: `9r0ktq`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: o(`v1`, t)?.(r) ?? `${r === void 0 ? `{{p_BlY6Uem}}` : d(r)}`,
    elements: { Cj5l7QxIy: `page`, SD7rBg9vs: `p-1`, vN951ZFJL: `p-1-1` },
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-lRPXU`,
    title: o(`v0`, t)?.(n) ?? `${n === void 0 ? `{{j56HSkFKu}}` : d(n)}｜Tier0 活动`,
    viewport: `width=device-width`,
  };
}
async function c(e, n) {
  let i = new r(),
    o = {
      from: { alias: `nAtM7b5eV`, data: a, type: `Collection` },
      select: [
        { collection: `nAtM7b5eV`, name: `j56HSkFKu`, type: `Identifier` },
        { collection: `nAtM7b5eV`, name: `p_BlY6Uem`, type: `Identifier` },
      ],
      where: t(e, `nAtM7b5eV`),
    },
    c = await i.query(o, n);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return s(l, n);
}
async function l(e, t) {
  let n = new r(),
    i = {
      from: { alias: `nAtM7b5eV`, data: a, type: `Collection` },
      select: [
        { collection: `nAtM7b5eV`, name: `j56HSkFKu`, type: `Identifier` },
        { collection: `nAtM7b5eV`, name: `p_BlY6Uem`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `nAtM7b5eV`, name: t, type: `Identifier` });
  return (await n.query(i, t)).map((n) => ({
    metadata: s(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var u, d, f, p;
function m() {
  return (m = e(() => {
    (n(),
      i(),
      (u = {
        AYmst8Nt3: {
          v0: (e) => `${e === void 0 ? `{{j56HSkFKu}}` : d(e)} ｜ 活动`,
          v1: (e) => `${e === void 0 ? `{{p_BlY6Uem}}` : d(e)}`,
        },
      }),
      (d = (e) => (typeof e == `string` ? e : String(e))),
      (f = 1),
      (p = {
        exports: {
          fetchAllMetadata: {
            type: `function`,
            isAsync: !0,
            annotations: { framerContractVersion: `1` },
          },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: {
            type: `function`,
            isAsync: !0,
            annotations: { framerContractVersion: `1` },
          },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { s as a, m as i, l as n, f as o, c as r, p as t };
//# sourceMappingURL=nAtM7b5eV.UEMXiP5M.mjs.map
