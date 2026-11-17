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
      { hash: `1fdsc8k`, mediaQuery: `(min-width: 1440px)` },
      { hash: `1gh6iuu`, mediaQuery: `(min-width: 810px) and (max-width: 1439.98px)` },
      { hash: `1te7pbj`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: t(`v1`, n) ?? `查看 Tier0 云端服务（tier0.dev）的当前可用性及已发布的故障通知。`,
    elements: {},
    framerSearch: { index: !1 },
    robots: `noindex`,
    serializationId: `framer-EcT0r`,
    title: t(`v0`, n) ?? `系统状态｜Tier0`,
    viewport: `width=device-width`,
  };
}
var r, i, a;
function o() {
  return (o = e(() => {
    ((r = {
      AYmst8Nt3: {
        v0: `系统状态`,
        v1: `查看 Tier0 Cloud (tier0.dev) 的实时运行状态及已发布的故障通告。`,
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
//# sourceMappingURL=noD8QKjzo.GrHGxUMQ.mjs.map
