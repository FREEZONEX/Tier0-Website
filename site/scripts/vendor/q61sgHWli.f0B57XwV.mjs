import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
function t(e, t) {
  for (; t; ) {
    let n = r[t.id];
    if (n) {
      let t = n[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function n(e, n) {
  return {
    breakpoints: [
      { hash: `fi9y9f`, mediaQuery: `(min-width: 1440px)` },
      { hash: `x9a35i`, mediaQuery: `(min-width: 810px) and (max-width: 1439.98px)` },
      { hash: `ugck9g`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description:
      t(`v1`, n) ??
      `查看 Tier0 企业版和云端服务的安全公告，包括受影响版本、修复版本、升级步骤及验证说明。`,
    elements: {},
    framerSearch: { index: !1 },
    robots: `noindex`,
    serializationId: `framer-TN3Jv`,
    title: t(`v0`, n) ?? `安全公告｜Tier0`,
    viewport: `width=device-width`,
  };
}
var r, i, a;
function o() {
  return (o = e(() => {
    ((r = {
      AYmst8Nt3: {
        v0: `安全公告`,
        v1: `Tier0 企业版与云端安全公告：受影响及已修复版本、升级步骤与验证指南。`,
      },
    }),
      (i = 1),
      (a = {
        exports: {
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { i, o as n, n as r, a as t };
//# sourceMappingURL=q61sgHWli.f0B57XwV.mjs.map
