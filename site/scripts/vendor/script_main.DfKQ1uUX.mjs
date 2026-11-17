import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  A as t,
  H as n,
  L as r,
  M as i,
  O as a,
  R as o,
  S as s,
  U as c,
  V as l,
  a as u,
  f as d,
  g as f,
  n as p,
  o as m,
  r as h,
  t as g,
  v as _,
  w as v,
  x as y,
  y as b,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import {
  $ as x,
  Ht as S,
  Q as C,
  S as w,
  X as T,
  Z as E,
  dt as D,
  ft as O,
  h as k,
  it as A,
  jt as j,
  l as ee,
  mt as te,
  nt as M,
  ot as N,
  st as P,
  tt as F,
  v as I,
  vt as L,
  wt as R,
  x as z,
  zt as B,
} from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
function V({ routeId: e, pathVariables: t, localeId: n }) {
  return (
    (Q ??= P({
      routes: G,
      routeId: e,
      pathVariables: t,
      localeId: n,
      locales: K,
      collectionUtils: q,
    })),
    Q
  );
}
async function H({
  routeId: e,
  pathVariables: n,
  canonicalPathVariables: r,
  localeId: a,
  collectionItemId: l,
  contentLocaleId: f,
  shouldResolveInitialRouteContentState: p = !1,
}) {
  (O({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    D(Y));
  let m = G[e].page.preload(),
    h = G[e];
  if (p && l === void 0 && h.collectionId) {
    let t = await V({ routeId: e, pathVariables: n, localeId: a });
    ((f ??= t.contentLocaleId), (r ??= t.canonicalPathVariables));
  }
  let g = d(w, {
      isWebsite: !0,
      environment: `site`,
      routeId: e,
      pathVariables: n,
      canonicalPathVariables: r,
      routes: G,
      collectionUtils: q,
      serverDatabaseClient: J,
      framerSiteId: Y,
      notFoundPage: x(() => import(`./SitesNotFoundPage.js@1.4.BzxVzNmY.mjs?v=20261116-migration-v2`)),
      isReducedMotion: void 0,
      localeId: a,
      locales: K,
      preserveQueryParams: void 0,
      siteCanonicalURL: `https://t02801.framer.website`,
      EditorBar:
        c === void 0
          ? void 0
          : (() => {
              if (Z) console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
              else
                return x(async () => {
                  c.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: L, useLocaleInfo: R, useRouter: j },
                    react: {
                      createElement: d,
                      Fragment: o,
                      memo: v,
                      useCallback: i,
                      useEffect: y,
                      useRef: s,
                      useState: b,
                      useLayoutEffect: t,
                    },
                    "react-dom": { createPortal: u },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
            })(),
      adaptLayoutToTextDirection: !1,
      loadSnippetsModule: new I(
        () => import("./YUh08jaSAcXAY9od2gYDs87Bo6rZl3Zm58r2DPF1LkY.CgECsfoZ.mjs?v=20261116-migration-v2")
      ),
      initialCollectionItemId: l,
      initialContentLocaleIdOverride: f,
    }),
    _ = d(k, { children: g }),
    S = d(z, { children: _, value: { routes: {} } });
  return (await m, S);
}
function U() {
  X && c.__framer_events.push(arguments);
}
async function W(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || c.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    U(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let i, a, o, s, l, u, d;
    if (e)
      ((d = JSON.parse(t.dataset.framerHydrateV2)),
        (i = d.routeId),
        (a = d.localeId),
        (o = d.contentLocaleId),
        (s = d.pathVariables),
        (l = d.canonicalPathVariables),
        (u = d.breakpoints),
        (i = A(G, i)));
    else {
      A(G, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((i = t.get(`id`)), (a = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((s ??= {}), (s[e.slice(4)] = n));
      }
      if (!i || !a) {
        let e = T(G, decodeURIComponent(location.pathname), !0, K);
        ((i = e.routeId), (a = e.localeId), (s = e.pathVariables));
      }
    }
    let f = H({
      routeId: i,
      localeId: a,
      contentLocaleId: o,
      pathVariables: s,
      canonicalPathVariables: l,
      collectionItemId: e ? d?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    c !== void 0 &&
      (async () => {
        let e = G[i],
          t = K.find(({ id: e }) => (a ? e === a : e === "default")).code,
          n;
        n =
          d?.collectionItemId === void 0
            ? e?.collectionId
              ? await (
                  await V({ routeId: i, pathVariables: s, localeId: a })
                ).collectionItemId
              : null
            : d.collectionItemId;
        let r = Intl.DateTimeFormat().resolvedOptions(),
          o = r.timeZone,
          l = r.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          c.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Y,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? i,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: c.location.href,
              hostname: c.location.hostname || null,
              pathname: c.location.pathname || null,
              hash: c.location.hash || null,
              search: c.location.search || null,
              timezone: o,
              locale: l,
            },
            `eager`,
          ]),
          await S({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let p = await f;
    e
      ? (B(`framer-rewrite-breakpoints`, () => {
          (N(u), c.__framer_onRewriteBreakpoints?.(u));
        }),
        (Z ? (e) => e() : r)(() => {
          (M(), te(), g(t, p, { onRecoverableError: n }));
        }))
      : (await F(), h(t, { onRecoverableError: n }).render(p));
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    if (
      (l(),
      C(),
      a(),
      m(),
      p(),
      (G = {
        yMtiNOqxr: {
          elements: {
            gDY9nCrCF: `hero`,
            gdYhTBjg1: `tvc-video`,
            hLLC9mj3y: `app-builder-library`,
            OWjBLBy7w: `testimony`,
            tZPXNdqbK: `digital-twin-anchor`,
          },
          page: x(() => import("./UzJw1ZKxTO9NzcM-_u-fXj3Hwjpea2W1tvwtcPaNWtI.Pd5SfNrt.mjs?v=20261116-migration-v2")),
          path: `/`,
        },
        GhEbGg1jJ: {
          elements: {
            B1A66lv47: `work-1`,
            bUWR62s3B: `work-2`,
            ETkyudhAK: `work-3`,
            Ezzl_MCzV: `talk-to--expert-1`,
            n2HOgtkeN: `talk-to--expert`,
            p7DiInIF7: `work`,
            T2ljJnYzJ: `talk-to-expert-1`,
            x3Pxqb14U: `talk-to-expert`,
          },
          page: x(() => import("./QuHD2zaqcNlSnJPPl0U-rmYY8osgQ7GqCDn6IpNYgL0.CDg9JilT.mjs?v=20261116-migration-v2")),
          path: `/product/tier0-platform`,
        },
        u6PUjJsUM: {
          elements: { WkDDoqCtu: `talk-to-expert` },
          page: x(() => import("./SQzaCQfZqCry9RQWNJ4yPKxqDoUSStZnRspER-HE3Vk.CPFjQbVs.mjs?v=20261116-migration-v2")),
          path: `/product/tier0-platform/uns`,
        },
        DGsQOiGKT: {
          elements: { pm_khSEhW: `talk-to-expert` },
          page: x(() => import("./OAGwafmaN0jXifUNF3G9oZwhg1zZEw1aN5Q_l5HC-bM.Du-YmpuM.mjs?v=20261116-migration-v2")),
          path: `/product/tier0-platform/app-library`,
        },
        e0LeoctYs: {
          elements: { cFTlTwqXW: `talk-to-expert` },
          page: x(() => import("./J2oeoSsKqv3E1eZFbqUZkCJTIo0DgeCSASamTOCwNZA.gHe3V9KJ.mjs?v=20261116-migration-v2")),
          path: `/product/tier0-platform/data-collection`,
        },
        q_f1JcZhY: {
          elements: {},
          page: x(() => import("./KFi3F4AsNVC8ls8_7lqGXdk-bsm0MmBdOatSzap5P-U.BRltc370.mjs?v=20261116-migration-v2")),
          path: `/resource/blogs/menu`,
        },
        JBGZXuMG3: {
          elements: {
            am6cLDDsR: `work`,
            hJrvZREO1: `card-1`,
            tqfznQGo7: `card-3`,
            uK4AFL4xJ: `card-2`,
            xA2gor7xm: `card-4`,
            yu5_vO5Iq: `card-5`,
          },
          page: x(() => import("./tWt98pjdnokKjRmmtZib_n1_iRGd1bZXV6a1277oPeI.DM7hpEja.mjs?v=20261116-migration-v2")),
          path: `/solution/workforce-assets-tracking`,
        },
        bzscPRF6y: {
          elements: {
            CNF8lb8b2: `card-1`,
            I3acyPrfO: `card-3`,
            iZxgquzUh: `card-4`,
            kG7qZLhuh: `card-5`,
            SDCnn_nIi: `card-2`,
            wEqHp_GBi: `work`,
          },
          page: x(() => import("./ZeCM4Wyrx2-sYjEArmwKYBDYv8LjCzvADomjMi3Smfc.6ek7_vUg.mjs?v=20261116-migration-v2")),
          path: `/solution/digital-worker`,
        },
        UgUMTpv4D: {
          elements: {},
          page: x(() => import("./TWmp_95uc6_JvIRx-62CFGEB1cJdTiyu7xAUSLOOXOY.CW-b18E6.mjs?v=20261116-migration-v2")),
          path: `/solution/production-line-optimization`,
        },
        RCRTBRG3j: {
          elements: {},
          page: x(() => import("./yMpD2RKZ3bdGDssUmImGqUKX3Hiw9l3_UEXtyFR0KGs.DzwzzASh.mjs?v=20261116-migration-v2")),
          path: `/talk-to-team`,
        },
        P_MLCUSc2: {
          elements: {},
          page: x(() => import("./011SSkP1PFYib2bDLhghwlt4xlXvlC9mekmnhUZpKjk.B383ocEN.mjs?v=20261116-migration-v2")),
          path: `/talk-to-team/success`,
        },
        fHDmqdJOv: {
          elements: {},
          page: x(() => import("./5hhCxmHIav3ERnTqsgR9QVEaVxEM1I4aQ7FHfVKcXdE.6UV5oRvN.mjs?v=20261116-migration-v2")),
          path: `/policy`,
        },
        q61sgHWli: {
          elements: {},
          page: x(() => import("./H9i_bo9QQaigpOIZQtY2xEa7QHczE5NsjsWv7GBafvI.DV0-X780.mjs?v=20261116-migration-v2")),
          path: `/security-advisories`,
        },
        gN1Hj9wQE: {
          elements: {},
          page: x(() => import("./6_2e-NHp18YCatfBNCkqSSbfRXPjjHgL_Acc7SGzcO4.C_Nehg10.mjs?v=20261116-migration-v2")),
          path: `/changelog`,
        },
        noD8QKjzo: {
          elements: {},
          page: x(() => import("./pqn5jp4mPC1P7mxQ6_X-HEkxoAT02sMh4jeM8uhLjRs.DGGg1gVz.mjs?v=20261116-migration-v2")),
          path: `/system-status`,
        },
        KJSVessEO: {
          elements: {},
          page: x(() => import("./HE4Fm_ND0hZLxnMnHOpYi--wVPVmnNcYXS2taZrhj0k.l-79RHFU.mjs?v=20261116-migration-v2")),
          path: `/tier0-policy`,
        },
        QF1mELLnB: {
          elements: {},
          page: x(() => import("./lP8ht8iEj0nEFn7bvJS1M4CaHlE_xcHyWSlmwHW9Xzg.DAVA9_5q.mjs?v=20261116-migration-v2")),
          path: `/terms`,
        },
        sbQ_pJmt8: {
          elements: {},
          page: x(() => import("./oQM6kVBpYdCRs51R59qy0mw086vYH9qM9ZNJUNxymlY.CVXH-l_K.mjs?v=20261116-migration-v2")),
          path: `/resource/events`,
        },
        kUMlJF28H: {
          elements: {},
          page: x(() => import("./36vOvBOYr0dvn50kWNsBpfF1sVnQR7e48KE_D0oxFyU.DUeObVi9.mjs?v=20261116-migration-v2")),
          path: `/resource/downloads`,
        },
        DqdPzqQks: {
          elements: {},
          page: x(() => import("./LPZWFKxEnQgk9mAGdYAyrPzJp7Lj8A-iPlsHShLuNU4.31GDfggl.mjs?v=20261116-migration-v2")),
          path: `/resource/downloads-info`,
        },
        OYGu2SDQ6: {
          elements: { hhcnXrc4e: `plan`, Jv0lFmBNF: `talk-to--expert` },
          page: x(() => import("./_jgnQmF2SLIRazi-nsRfyY0b3W36kUSTp7fRIujzSRc.DNM-9mqO.mjs?v=20261116-migration-v2")),
          path: `/pricing`,
        },
        CtRSYVoCz: {
          elements: { VFNRg9rWr: `template` },
          page: x(() => import("./RpBKRN6rxeYHejr-fKpQCYVt3TtEtof_iHqUTTFASJU.B1EXc3kr.mjs?v=20261116-migration-v2")),
          path: `/product/tier0-platform/app-builder`,
        },
        TEUe5r_sl: {
          elements: {
            eQnAvn6aC: `app-builder-library-4`,
            JMWIA2K52: `digital-twin-anchor`,
            llAHRvM8z: `app-builder-library-1`,
            m714h3BsR: `app-builder-library-3`,
            RsXlxeQOg: `app-builder-library-2`,
            wo16Olr54: `app-builder-library`,
          },
          page: x(() => import("./UIIOtbKw0ARUCMbFJsidtnAC4b8Uie29Nyu2cIX6Ruc.CiPSlD_P.mjs?v=20261116-migration-v2")),
          path: `/solution/wms`,
        },
        RltDUtwQC: {
          collectionId: `kVs8tQwHo`,
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
          page: x(() => import("./hcAigvxqbXEi1OcEN-vJYN_O1VOXujzo2tgpXckpkwQ.DiU18E9z.mjs?v=20261116-migration-v2")),
          path: `/resource/blogs/:meFM0cI9K`,
        },
        nAtM7b5eV: {
          collectionId: `GDzaVbCEd`,
          elements: { Cj5l7QxIy: `page`, SD7rBg9vs: `p-1`, vN951ZFJL: `p-1-1` },
          page: x(() => import("./re-s0qof1lHtg0VmqdSbsvES36N1yp-YXozsveXbMEU.CCx0NOMK.mjs?v=20261116-migration-v2")),
          path: `/resource/events/:ELnXIKL_l`,
        },
      }),
      (K = [{ code: `zh`, id: `default`, name: `Chinese`, slug: ``, textDirection: `ltr` }]),
      (q = {
        GDzaVbCEd: async () =>
          (await import("./mn90aTYE-Cbdzmaysfx4S-mxw0K8N1k6v7cZHnKMuqc.BCHAE0US.mjs?v=20261116-migration-v2"))?.utils,
        kVs8tQwHo: async () =>
          (await import("./nOxyyVcxcxoZOCymTzV5NliHkY41izfNG6LcccHxYdc.CCmkn7EQ.mjs?v=20261116-migration-v2"))?.utils,
      }),
      (J = void 0),
      (Y = `137a8f148b94117551f197d310261679595eda2d42c65972754900df9ec78f7d`),
      (X = typeof document < `u`),
      (Z = X && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(n.userAgent)),
      X)
    ) {
      ((c.__framer_importFromPackage = (e, t) => () =>
        d(ee, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
        (c.__framer_events = c.__framer_events || []),
        E());
      let e = document.getElementById(`main`);
      `framerHydrateV2` in e.dataset ? W(!0, e) : W(!1, e);
    }
  }))();
}
$();
export { H as getPageRoot };
//# sourceMappingURL=script_main.DfKQ1uUX.mjs.map
