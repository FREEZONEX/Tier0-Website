import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import { J as t, Q as n, T as r } from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
async function i(e, t, n) {
  let r = l[e],
    i = r ? await r(t, n) : void 0,
    a = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] };
  for (let t of s) {
    if (t.pageIds && !t.pageIds.has(e)) continue;
    let n = t.code(i);
    n && a[t.placement].push({ ...t, code: n });
  }
  return a;
}
var a, o, s, c, l, u, d;
function f() {
  return (f = e(() => {
    (n(),
      (a = (e) =>
        typeof e == `string`
          ? e
              .replaceAll(`&`, `&amp;`)
              .replaceAll(`<`, `&lt;`)
              .replaceAll(`>`, `&gt;`)
              .replaceAll(`"`, `&quot;`)
              .replaceAll(`'`, `&#39;`)
          : ``),
      (o = (e) => (typeof e == `string` ? e : String(e))),
      (s = [
        {
          code: (e) => `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://tier0.app/product/tier0#software",
      "name": "Tier0 平台",
      "url": "https://tier0.app/product/tier0",
      "applicationCategory": "Industrial IoT Platform",
      "applicationSubCategory": "Unified Namespace Platform",
      "operatingSystem": "Cloud, Edge, Linux",
      "description": "Tier0 平台 helps industrial teams build reusable data foundations, connect operational systems, and deliver MES, WMS, analytics, and AI-assisted industrial applications faster.",
      "featureList": [
        "Unified Namespace",
        "Data collection",
        "Agentic App Builder",
        "App Library",
        "Advanced Analytics"
      ],
      "publisher": {
        "@id": "https://tier0.app/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tier0.app/product/tier0#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tier0.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Product",
          "item": "https://tier0.app/product/tier0"
        }
      ]
    }
  ]
}
<\/script>`,
          id: `l0ylGykyx`,
          loadMode: `once`,
          name: `Script`,
          pageIds: /* @__PURE__ */ new Set([`GhEbGg1jJ`]),
          placement: `headEnd`,
        },
        {
          code: (e) => `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "@id": "https://tier0.app/product/tier0/uns#article",
      "headline": "Unified Namespace",
      "url": "https://tier0.app/product/tier0/uns",
      "description": "Tier0 Unified Namespace creates a single source of truth for industrial data, replacing point-to-point integrations with a structured, reusable, AI-ready industrial data foundation.",
      "about": [
        "Unified Namespace",
        "Industrial data integration",
        "Industrial IoT",
        "Shopfloor data",
        "MES"
      ],
      "publisher": {
        "@id": "https://tier0.app/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tier0.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Product",
          "item": "https://tier0.app/product/tier0"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Unified Namespace",
          "item": "https://tier0.app/product/tier0/uns"
        }
      ]
    }
  ]
}
<\/script>`,
          id: `QTfa1k2sa`,
          loadMode: `once`,
          name: `Schema.org Structured Data`,
          pageIds: /* @__PURE__ */ new Set([`u6PUjJsUM`]),
          placement: `headEnd`,
        },
        {
          code: (e) => `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://tier0.app/solution/imi#case-study",
  "headline": "IMI Shipyard Solution",
  "url": "https://tier0.app/solution/imi",
  "description": "IMI uses Tier0 for hybrid precision tracking, real-time visibility, geofencing, SOS, mustering, 3D digital twin monitoring, and trajectory playback to improve shipyard efficiency and safety.",
  "articleSection": "Customer Case Study",
  "about": [
    "Industrial IoT",
    "Shipyard operations",
    "Workforce tracking",
    "Asset tracking",
    "Safety monitoring"
  ],
  "publisher": {
    "@id": "https://tier0.app/#organization"
  }
}
<\/script>`,
          id: `qdYUHpiu2`,
          loadMode: `once`,
          name: `Article Schema Markup`,
          pageIds: /* @__PURE__ */ new Set([`JBGZXuMG3`]),
          placement: `headEnd`,
        },
        {
          code: (e) => `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://tier0.app/solution/indorama#case-study",
      "headline": "Indorama Digital Worker Solution",
      "url": "https://tier0.app/solution/indorama",
      "description": "Indorama uses Tier0 to support digital worker operations, industrial workflow execution, operational visibility, and data-driven production management across industrial environments.",
      "articleSection": "Customer Case Study",
      "about": [
        "Industrial IoT",
        "Digital worker",
        "Industrial workflow",
        "Shopfloor digitalization",
        "Operational visibility",
        "Production management"
      ],
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://tier0.app/#website",
        "name": "Tier0",
        "url": "https://tier0.app/"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://tier0.app/#organization",
        "name": "Tier0",
        "url": "https://tier0.app/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tier0.app/solution/indorama#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tier0.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Solutions",
          "item": "https://tier0.app/solution/industrial-data-platform"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Indorama Digital Worker Solution",
          "item": "https://tier0.app/solution/indorama"
        }
      ]
    }
  ]
}
<\/script>`,
          id: `wJDzgYq4r`,
          loadMode: `once`,
          name: `Script`,
          pageIds: /* @__PURE__ */ new Set([`bzscPRF6y`]),
          placement: `headEnd`,
        },
        {
          code: (e) => `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://tier0.app/solution/discrete-manufacturing#solution",
      "headline": "Discrete Manufacturing Solution",
      "url": "https://tier0.app/solution/discrete-manufacturing",
      "description": "Tier0 helps discrete manufacturing teams unify production, material flow, quality traceability, equipment data, and operational workflows through an Industrial IoT Platform built on Unified Namespace architecture.",
      "articleSection": "Industrial Solution",
      "about": [
        "Discrete manufacturing",
        "Industrial IoT",
        "Unified Namespace",
        "MES",
        "WMS",
        "Quality traceability",
        "Production management",
        "Shopfloor digitalization"
      ],
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://tier0.app/#website",
        "name": "Tier0",
        "url": "https://tier0.app/"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://tier0.app/#organization",
        "name": "Tier0",
        "url": "https://tier0.app/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tier0.app/solution/discrete-manufacturing#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tier0.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Solutions",
          "item": "https://tier0.app/solution/industrial-data-platform"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Discrete Manufacturing Solution",
          "item": "https://tier0.app/solution/discrete-manufacturing"
        }
      ]
    }
  ]
}
<\/script>`,
          id: `yycUtzgtj`,
          loadMode: `once`,
          name: `Schema.org Structured Data`,
          pageIds: /* @__PURE__ */ new Set([`UgUMTpv4D`]),
          placement: `headEnd`,
        },
        {
          code: (e) => `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://tier0.app/solution/aramco#case-study",
      "headline": "Aramco Smart Building and Smart City Solution",
      "url": "https://tier0.app/solution/aramco",
      "description": "Aramco uses Tier0 to power smart building and smart city operations with 3D digital twins, AI-driven insights, energy monitoring, water monitoring, resource utilization, and operational efficiency analytics.",
      "articleSection": "Customer Case Study",
      "about": [
        "Smart building",
        "Smart city",
        "Industrial IoT",
        "3D digital twin",
        "AI-driven insights",
        "Energy monitoring",
        "Water monitoring",
        "Operational efficiency"
      ],
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://tier0.app/#website",
        "name": "Tier0",
        "url": "https://tier0.app/"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://tier0.app/#organization",
        "name": "Tier0",
        "url": "https://tier0.app/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tier0.app/solution/aramco#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tier0.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Solutions",
          "item": "https://tier0.app/solution/industrial-data-platform"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Aramco Smart Building and Smart City Solution",
          "item": "https://tier0.app/solution/aramco"
        }
      ]
    }
  ]
}
<\/script>`,
          id: `pI0j4s2p6`,
          loadMode: `once`,
          name: `JSON-LD Schema Markup`,
          pageIds: /* @__PURE__ */ new Set([`H4qyYw4A6`]),
          placement: `headEnd`,
        },
        {
          code: (e) => `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://tier0.app/pricing#product",
  "name": "Tier0 平台",
  "description": "An industrial data platform for building a Unified Namespace and turning industrial data into operational applications, analytics, and AI.",
  "url": "https://tier0.app/pricing",
  "brand": {
    "@type": "Brand",
    "name": "Tier0"
  },
  "manufacturer": {
    "@id": "https://tier0.app/#organization"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Builder",
      "price": "199",
      "priceCurrency": "USD",
      "url": "https://tier0.app/pricing",
      "availability": "https://schema.org/InStock",
      "description": "Cloud Builder plan, billed monthly per seat, for application generation and management.",
      "seller": {
        "@id": "https://tier0.app/#organization"
      }
    },
    {
      "@type": "Offer",
      "name": "Growth",
      "price": "20000",
      "priceCurrency": "USD",
      "url": "https://tier0.app/pricing",
      "availability": "https://schema.org/InStock",
      "description": "Cloud Growth plan, billed annually, supporting up to 5 edge connections.",
      "seller": {
        "@id": "https://tier0.app/#organization"
      }
    },
    {
      "@type": "Offer",
      "name": "Scale",
      "price": "38000",
      "priceCurrency": "USD",
      "url": "https://tier0.app/pricing",
      "availability": "https://schema.org/InStock",
      "description": "Cloud Scale plan, billed annually, supporting up to 10 edge connections.",
      "seller": {
        "@id": "https://tier0.app/#organization"
      }
    },
    {
      "@type": "Offer",
      "name": "Base",
      "price": "10000",
      "priceCurrency": "USD",
      "url": "https://tier0.app/pricing",
      "availability": "https://schema.org/InStock",
      "description": "Private deployment Base plan, billed annually.",
      "seller": {
        "@id": "https://tier0.app/#organization"
      }
    },
    {
      "@type": "Offer",
      "name": "Plus",
      "price": "20000",
      "priceCurrency": "USD",
      "url": "https://tier0.app/pricing",
      "availability": "https://schema.org/InStock",
      "description": "Private deployment Plus plan, billed annually.",
      "seller": {
        "@id": "https://tier0.app/#organization"
      }
    },
    {
      "@type": "Offer",
      "name": "Cluster",
      "price": "39900",
      "priceCurrency": "USD",
      "url": "https://tier0.app/pricing",
      "availability": "https://schema.org/InStock",
      "description": "Private deployment Cluster plan, starting at USD 39,900 per year, with high availability and multi-instance deployment.",
      "seller": {
        "@id": "https://tier0.app/#organization"
      }
    }
  ]
}
<\/script>`,
          id: `PF1Mb1QxR`,
          loadMode: `once`,
          name: `Pricing Product Offers Schema`,
          pageIds: /* @__PURE__ */ new Set([`OYGu2SDQ6`]),
          placement: `bodyEnd`,
        },
        {
          code: (e) => {
            let t = e?.meFM0cI9K ?? ``,
              n = e?.WT9WaYw6k ?? ``,
              r = e?.chr9IZF2n ?? ``,
              i = e?.aRW_Hhr8p ?? ``,
              s = e?.TPmpHSD3T,
              c = e?.updatedAt;
            return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://tier0.app/blogs/${t === void 0 ? `{{meFM0cI9K}}` : o(a(t))}#article",
      "headline": "${n === void 0 ? `{{WT9WaYw6k}}` : o(a(n))}",
      "url": "https://tier0.app/blogs/${t === void 0 ? `{{meFM0cI9K}}` : o(a(t))}",
      "description": "${r === void 0 ? `{{chr9IZF2n}}` : o(a(r))}",
      "articleSection": "${i === void 0 ? `{{aRW_Hhr8p}}` : o(a(i))}",
      "about": [
        "${i === void 0 ? `{{aRW_Hhr8p}}` : o(a(i))}",
        "Industrial IoT",
        "Unified Namespace",
        "Industrial data platform",
        "Shopfloor digitalization",
        "MES",
        "WMS"
      ],
      "author": {
        "@type": "Organization",
        "name": "Tier0",
        "url": "https://tier0.app/"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://tier0.app/#organization",
        "name": "Tier0",
        "url": "https://tier0.app/"
      },
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://tier0.app/#website",
        "name": "Tier0",
        "url": "https://tier0.app/"
      },
      "datePublished": "${s === void 0 ? `{{TPmpHSD3T}}` : o(a(s))}",
      "dateModified": "${c === void 0 ? `{{updatedAt}}` : o(a(c))}"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tier0.app/blogs/${t === void 0 ? `{{meFM0cI9K}}` : o(a(t))}#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tier0.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blogs",
          "item": "https://tier0.app/blogs/menu"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "${n === void 0 ? `{{WT9WaYw6k}}` : o(a(n))}",
          "item": "https://tier0.app/blogs/${t === void 0 ? `{{meFM0cI9K}}` : o(a(t))}"
        }
      ]
    }
  ]
}
<\/script>`;
          },
          id: `W3DZ0AVEB`,
          loadMode: `once`,
          name: `Article Schema Markup`,
          pageIds: /* @__PURE__ */ new Set([`RltDUtwQC`]),
          placement: `headEnd`,
        },
      ]),
      (c = new r()),
      (l = {
        RltDUtwQC: async (e, n) => {
          let r = {
              from: {
                alias: `RltDUtwQC`,
                data: (await import("./nOxyyVcxcxoZOCymTzV5NliHkY41izfNG6LcccHxYdc.CCmkn7EQ.mjs?v=20261116-migration-v2"))
                  .default,
                type: `Collection`,
              },
              select: [
                { collection: `RltDUtwQC`, name: `meFM0cI9K`, type: `Identifier` },
                { collection: `RltDUtwQC`, name: `WT9WaYw6k`, type: `Identifier` },
                { collection: `RltDUtwQC`, name: `chr9IZF2n`, type: `Identifier` },
                { collection: `RltDUtwQC`, name: `aRW_Hhr8p`, type: `Identifier` },
                { collection: `RltDUtwQC`, name: `TPmpHSD3T`, type: `Identifier` },
                { collection: `RltDUtwQC`, name: `updatedAt`, type: `Identifier` },
              ],
              where: t(e, `RltDUtwQC`),
            },
            i = await c.query(r, n);
          if (i.length === 0) throw Error(`No data matches pathVariables`);
          return i[0];
        },
      }),
      (u = {
        bodyEnd: [`PF1Mb1QxR`],
        bodyStart: [`legacy-bodyEnd`],
        headEnd: [
          `BX36GI0To`,
          `l0ylGykyx`,
          `QTfa1k2sa`,
          `qdYUHpiu2`,
          `wJDzgYq4r`,
          `yycUtzgtj`,
          `pI0j4s2p6`,
          `W3DZ0AVEB`,
          `Uk0E1ZUrq`,
        ],
        headStart: [`legacy-headEnd`],
      }),
      (d = {
        exports: {
          getSnippets: { type: `function`, annotations: { framerContractVersion: `1` } },
          snippetsSorting: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
f();
export { d as __FramerMetadata__, i as getSnippets, u as snippetsSorting };
//# sourceMappingURL=YUh08jaSAcXAY9od2gYDs87Bo6rZl3Zm58r2DPF1LkY.CgECsfoZ.mjs.map
