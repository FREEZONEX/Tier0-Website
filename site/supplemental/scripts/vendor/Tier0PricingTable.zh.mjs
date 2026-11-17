import { N as React, c as initReact, o as initReactDOM, a as createPortal } from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
initReact();
initReactDOM();
const addPropertyControls = () => {
};
const ControlType = { Enum: "Enum", Number: "Number", String: "String" };
const l = (en, zh = en) => ({ en, zh });
const SANS = `Inter, "IBM Plex Sans", "PingFang SC", "Noto Sans SC", system-ui, sans-serif`;
const DISPLAY = `"IBM Plex Sans", Inter, "PingFang SC", "Noto Sans SC", system-ui, sans-serif`;
const MONO = `"IBM Plex Mono", ui-monospace, Menlo, monospace`;
const C = {
  bg: "#ffffff",
  soft: "#fafafa",
  muted: "#f3f3f3",
  line: "#ebebeb",
  dash: "#f0f0f0",
  text: "#111111",
  sub: "#737373",
  faint: "#a3a3a3",
  mute: "#d4d4d4",
  green: "#73b200",
  lime: "#b2ed1d",
  limeHover: "#cef368",
  limeSoft: "#eef9d2",
  greenDeep: "#628210",
  tint: "#f7fde8",
  tintLine: "#cef368"
};
const BP = { tablet: 730, desktop: 1280 };
const EASE = "cubic-bezier(.22,1,.36,1)";
const T = {
  monthly: l("Monthly", "\u6708\u4ED8"),
  yearly: l("Yearly", "\u5E74\u4ED8"),
  save: l("Save 25%", "\u7701 25%"),
  mo: l("/ mo", "/ \u6708"),
  yr: l("/ yr", "/ \u5E74"),
  free: l("Free", "\u514D\u8D39"),
  custom: l("Custom", "\u5B9A\u5236"),
  sales: l("Contact sales", "\u8054\u7CFB\u9500\u552E"),
  trial: l("Start free trial", "\u5F00\u59CB\u514D\u8D39\u8BD5\u7528"),
  start: l("Get started", "\u7ACB\u5373\u8BA2\u9605"),
  select: l("Select", "\u9009\u62E9"),
  soon: l("Coming soon", "\u5373\u5C06\u63A8\u51FA"),
  selfHosted: l("Self-hosted", "\u81EA\u90E8\u7F72"),
  ovOpen: l("Open source", "\u5F00\u6E90"),
  ovSaas: l("Managed SaaS", "\u4E91\u6258\u7BA1 SaaS"),
  ovPriv: l("Private deployment", "\u79C1\u6709\u5316\u90E8\u7F72"),
  ovEdgeDesc: l(
    "The UNS foundation, on one machine. Yours entirely.",
    "UNS \u57FA\u7840\u80FD\u529B\uFF0C\u5355\u673A\u90E8\u7F72\uFF0C\u5B8C\u5168\u5C5E\u4E8E\u4F60\u3002"
  ),
  ovEdgeNote: l(
    "For technical evaluation, PoCs, and teams comfortable operating open-source software on their own.",
    "\u9002\u5408\u6280\u672F\u8BC4\u4F30\u3001PoC\uFF0C\u4EE5\u53CA\u80FD\u591F\u81EA\u884C\u8FD0\u7EF4\u5F00\u6E90\u8F6F\u4EF6\u7684\u56E2\u961F\u3002"
  ),
  ovEdgeCard: l(
    "How the Demo UNS is designed \u2014 hierarchy, avoiding topic explosion, and payload structure that scales.",
    "\u4E86\u89E3 Demo UNS \u7684\u8BBE\u8BA1\u65B9\u5F0F \u2014\u2014 \u5C42\u7EA7\u7ED3\u6784\u3001\u907F\u514D Topic \u7206\u70B8\uFF0C\u4EE5\u53CA\u53EF\u6269\u5C55\u7684 Payload \u7ED3\u6784\u3002"
  ),
  ovGithub: l("Explore on GitHub", "\u524D\u5F80 GitHub"),
  ovCloudTag: l("Most teams start here", "\u5927\u591A\u6570\u56E2\u961F\u4ECE\u8FD9\u91CC\u5F00\u59CB"),
  ovCloudDesc: l(
    "The full platform, managed on cloud for you.",
    "\u5B8C\u6574\u5E73\u53F0\uFF0C\u7531\u6211\u4EEC\u5728\u4E91\u7AEF\u6258\u7BA1\u3002"
  ),
  ovCloudNote: l(
    "UNS, App Builder and managed MCP on day one \u2014 no infrastructure to run. Start with a 7-day free trial.",
    "\u5F00\u901A\u5373\u7528 UNS\u3001App Builder \u4E0E\u6258\u7BA1 MCP\uFF0C\u65E0\u9700\u8FD0\u7EF4\u57FA\u7840\u8BBE\u65BD\u3002\u53EF\u5148\u514D\u8D39\u8BD5\u7528 7 \u5929\u3002"
  ),
  ovEntDesc: l(
    "The full platform, on your terms.",
    "\u5B8C\u6574\u5E73\u53F0\uFF0C\u6309\u4F60\u7684\u65B9\u5F0F\u90E8\u7F72\u3002"
  ),
  ovEntNote: l(
    "For data sovereignty, scale, governance, and enterprise-grade oversight.",
    "\u9762\u5411\u6570\u636E\u4E3B\u6743\u3001\u89C4\u6A21\u5316\u3001\u6CBB\u7406\u4E0E\u4F01\u4E1A\u7EA7\u7BA1\u63A7\u9700\u6C42\u3002"
  ),
  github: l("View on GitHub", "\u524D\u5F80 GitHub"),
  popular: l("Recommended", "\u63A8\u8350"),
  intro: l("{v} / mo for the first 3 months", "\u524D 3 \u4E2A\u6708\u4EC5 {v} / \u6708"),
  yearOff: l("{v}% off \xB7 billed yearly", "\u5E74\u4ED8\u7701 {v}%"),
  wasLabel: l("Regular price", "\u539F\u4EF7"),
  trialNote: l("7 days, no payment", "7 \u5929\uFF0C\u65E0\u9700\u4ED8\u8D39"),
  scaleNote: l("Tailored to your scale", "\u6309\u9700\u5B9A\u5236"),
  plus: l("Everything in {v}, plus", "\u5305\u542B {v} \u5168\u90E8\uFF0C\u4EE5\u53CA"),
  includes: l("Includes", "\u5305\u542B"),
  compare: l("Compare plans", "\u5957\u9910\u5BF9\u6BD4"),
  features: l("Features", "\u529F\u80FD"),
  more: l("More details", "\u4E86\u89E3\u8BE6\u60C5"),
  builderSeat: l("Builder", "Builder"),
  builderDesc: l(
    "seats build and publish apps with App Builder.",
    "\u5E2D\u4F4D\u7528\u4E8E\u901A\u8FC7 App Builder \u642D\u5EFA\u4E0E\u53D1\u5E03\u5E94\u7528\u3002"
  ),
  operatorSeat: l("Operator", "Operator"),
  operatorDesc: l(
    "seats use published apps in daily operations.",
    "\u5E2D\u4F4D\u7528\u4E8E\u5728\u65E5\u5E38\u751F\u4EA7\u4E2D\u4F7F\u7528\u5DF2\u53D1\u5E03\u7684\u5E94\u7528\u3002"
  ),
  addonsTitle: l("Add-ons", "\u589E\u8D2D\u4E0E\u786C\u4EF6"),
  seatAdd: l("Extra Builder seats", "\u989D\u5916 Builder \u5E2D\u4F4D"),
  seatAddDesc: l(
    "Add Builder seats as needed. Billed at the full monthly rate, with no annual discount on seats.",
    "\u6309\u9700\u6DFB\u52A0 Builder \u5E2D\u4F4D\u3002\u6309\u5B8C\u6574\u6708\u5355\u4EF7\u8BA1\u8D39\uFF0C\u5E2D\u4F4D\u4E0D\u4EAB\u53D7\u5E74\u4ED8\u6298\u6263\u3002"
  ),
  seatUnit: l("/ seat / mo", "/ \u5E2D / \u6708"),
  paidOnly: l("Available on paid plans", "\u4ED8\u8D39\u5957\u9910\u53EF\u7528"),
  packs: l("AI Credit packs", "AI Credits \u62D3\u5C55\u5305"),
  packsDesc: l(
    "Top up AI Credits for your workspace. Flat {c} per credit, no volume tiers. Usage, validity and reset rules stay the same.",
    "\u4E3A\u5DE5\u4F5C\u533A\u8865\u5145 AI Credits\u3002\u7EDF\u4E00\u5355\u4EF7 {c} / Credit\uFF0C\u65E0\u9636\u68AF\u6298\u6263\uFF1B\u6D88\u8017\u3001\u6709\u6548\u671F\u4E0E\u91CD\u7F6E\u89C4\u5219\u4E0D\u53D8\u3002"
  ),
  hw: l("Bundled hardware", "\u8D60\u9001\u786C\u4EF6"),
  hwDesc: l(
    "Included with your first annual subscription. Not included with monthly plans, and not re-issued on renewal.",
    "\u9996\u6B21\u5E74\u4ED8\u8D60\u9001\uFF1B\u6708\u4ED8\u4E0D\u8D60\u9001\uFF0C\u7EED\u8D39\u4E0D\u91CD\u590D\u8D60\u9001\u3002"
  ),
  hwBase: l("Starter kit", "\u5165\u95E8\u7248\u786C\u4EF6"),
  hwGrowth: l("Advanced kit", "\u8FDB\u9636\u7248\u786C\u4EF6"),
  hwScale: l("Scale hardware per contract", "Scale \u786C\u4EF6\u914D\u7F6E\u4EE5\u5408\u540C\u7EA6\u5B9A\u4E3A\u51C6")
};
const PRICE = {
  usd: {
    s: "$",
    credit: "$0.10",
    packList: [
      [500, 50],
      [1e3, 100],
      [3e3, 300]
    ],
    base: [99, 299, 2700],
    growth: [299, 899, 8100],
    seat: "$50",
    packs: "500 / $50 \xB7 1,000 / $100 \xB7 3,000 / $300"
  },
  cny: {
    s: "\xA5",
    credit: "\xA50.60",
    packList: [
      [500, 300],
      [1e3, 600],
      [3e3, 1800]
    ],
    base: [599, 1799, 16200],
    growth: [1799, 5399, 48600],
    seat: "\xA5300",
    packs: "500 / \xA5300 \xB7 1,000 / \xA5600 \xB7 3,000 / \xA51,800"
  }
};
const LOGIN_URL = {
  en: "https://tier0.cn/login",
  zh: "https://tier0.cn/login"
};
const TIPS = {
  price: l(
    "Monthly promo applies to first-time subscribers only. Yearly is paid upfront, about 9 months of the regular price.",
    "\u6708\u4ED8\u524D 3 \u4E2A\u6708\u4F18\u60E0\u4EC5\u9650\u9996\u6B21\u8BA2\u9605\uFF1B\u5E74\u4ED8\u4E00\u6B21\u6027\u652F\u4ED8\uFF0C\u7EA6\u7B49\u4E8E 9 \u4E2A\u6708\u5E38\u89C4\u6708\u4EF7\u3002"
  ),
  builder: l(
    "Add extra Builder seats as needed: {seat} / seat / mo, billed per full month.",
    "\u53EF\u6309\u9700\u6DFB\u52A0 Builder \u5E2D\u4F4D\uFF1A{seat} / \u5E2D / \u6708\uFF0C\u6309\u5B8C\u6574\u6708\u8BA1\u8D39\u3002"
  ),
  uns: l(
    "Unified Namespace \u2014 one semantic source of truth for industrial data, no more point-to-point integrations.",
    "\u7EDF\u4E00\u547D\u540D\u7A7A\u95F4 \u2014\u2014 \u5DE5\u4E1A\u6570\u636E\u7684\u7EDF\u4E00\u8BED\u4E49\u6570\u636E\u6E90\uFF0C\u544A\u522B\u70B9\u5BF9\u70B9\u96C6\u6210\u3002"
  ),
  appBuilder: l(
    "Use AI to rapidly build MES-grade applications for real operations.",
    "\u501F\u52A9 AI \u5FEB\u901F\u642D\u5EFA\u53EF\u7528\u4E8E\u771F\u5B9E\u751F\u4EA7\u7684 MES \u7EA7\u5E94\u7528\u3002"
  ),
  credits: l(
    "AI Credits included per workspace each month. The trial includes 250 credits for the full 7 days.",
    "\u6BCF\u4E2A\u5DE5\u4F5C\u533A\u6BCF\u6708\u5305\u542B\u7684 AI Credits \u989D\u5EA6\uFF1B\u8BD5\u7528\u671F 7 \u5929\u5171 250 Credits\u3002"
  ),
  addons: l(
    "Buy extra credit packs: {packs}.",
    "\u53EF\u989D\u5916\u8D2D\u4E70 Credits \u62D3\u5C55\u5305\uFF1A{packs}\u3002"
  ),
  hardware: l(
    "Edge hardware bundled with your first annual subscription. Not included with monthly plans or renewals.",
    "\u9996\u6B21\u5E74\u4ED8\u8D60\u9001\u8FB9\u7F18\u786C\u4EF6\uFF1B\u6708\u4ED8\u4E0D\u8D60\u9001\uFF0C\u7EED\u8D39\u4E0D\u91CD\u590D\u8D60\u9001\u3002"
  )
};
const DOCS = {
  uns: "/product/tier0-platform/uns",
  appBuilder: "/product/tier0-platform/app-builder"
};
const CLOUD_PLANS = [
  {
    id: "trial",
    name: l("Trial", "\u8BD5\u7528"),
    desc: l("See what's possible", "\u4F53\u9A8C\u6838\u5FC3\u80FD\u529B"),
    features: [
      { k: "builder", text: l("1 Builder seat", "1 \u4E2A Builder \u5E2D\u4F4D") },
      {
        k: "operator",
        text: l("100 Operator seats", "100 \u4E2A Operator \u5E2D\u4F4D")
      },
      {
        k: "credits",
        text: l("250 AI Credits (trial)", "250 AI Credits\uFF08\u8BD5\u7528\u671F\uFF09")
      },
      { k: "apps", text: l("1 deployed app", "1 \u4E2A\u90E8\u7F72\u5E94\u7528") },
      {
        k: "uns",
        text: l("UNS, App Builder & MCP", "UNS\u3001App Builder \u4E0E MCP")
      }
    ]
  },
  {
    id: "base",
    name: l("Base"),
    desc: l("Ship your first apps", "\u4E0A\u7EBF\u4F60\u7684\u9996\u6279\u5E94\u7528"),
    from: "Trial",
    features: [
      {
        k: "credits",
        text: l("1,000 AI Credits / mo", "\u6BCF\u6708 1,000 AI Credits")
      },
      { k: "apps", text: l("5 deployed apps", "5 \u4E2A\u90E8\u7F72\u5E94\u7528") },
      { k: "data", text: l("100 GB data storage", "100 GB \u6570\u636E\u5B58\u50A8") },
      { k: "addons", text: l("Credit add-ons", "Credits \u62D3\u5C55\u5305") },
      { k: "hardware", text: l("Starter hardware*", "\u5165\u95E8\u7248\u786C\u4EF6*") }
    ]
  },
  {
    id: "growth",
    name: l("Growth"),
    desc: l("Scale with your team", "\u56E2\u961F\u89C4\u6A21\u5316\u4EA4\u4ED8"),
    from: "Base",
    popular: true,
    features: [
      {
        k: "builder",
        text: l("5 Builders, 200 Operators", "5 Builder\uFF0C200 Operator")
      },
      {
        k: "credits",
        text: l("5,000 AI Credits / mo", "\u6BCF\u6708 5,000 AI Credits")
      },
      { k: "apps", text: l("20 deployed apps", "20 \u4E2A\u90E8\u7F72\u5E94\u7528") },
      { k: "anchor", text: l("Anchor") },
      { k: "vision", text: l("Vision"), soon: true },
      { k: "audit", text: l("Audit logs", "\u5BA1\u8BA1\u65E5\u5FD7") },
      { k: "data", text: l("500 GB data storage", "500 GB \u6570\u636E\u5B58\u50A8") },
      { k: "hardware", text: l("Advanced hardware*", "\u8FDB\u9636\u7248\u786C\u4EF6*") }
    ]
  },
  {
    id: "scale",
    name: l("Scale"),
    desc: l("Built for enterprise", "\u4F01\u4E1A\u7EA7\u5B9A\u5236"),
    from: "Growth",
    features: [
      {
        k: "scaleSeats",
        text: l("Custom seats & credits", "\u5B9A\u5236\u5E2D\u4F4D\u4E0E Credits")
      },
      { k: "operator", text: l("Unlimited Operators", "\u4E0D\u9650 Operator") },
      { k: "tenant", text: l("Isolated tenant", "\u9694\u79BB\u79DF\u6237") },
      {
        k: "data",
        text: l("Custom storage & bandwidth", "\u5B9A\u5236\u5B58\u50A8\u4E0E\u6D41\u91CF")
      }
    ]
  }
];
const Y = true, N = false, CU = l("Custom", "\u5B9A\u5236");
const CLOUD_GROUPS = [
  {
    title: l("Seats", "\u5E2D\u4F4D"),
    rows: [
      {
        k: "builder",
        label: l("Builder seats", "Builder \u5E2D\u4F4D"),
        cells: ["1", "1", "5", CU]
      },
      {
        k: "operator",
        label: l("Operator seats", "Operator \u5E2D\u4F4D"),
        cells: ["100", "100", "200", l("Unlimited", "\u4E0D\u9650")]
      }
    ]
  },
  {
    title: l("Platform", "\u5E73\u53F0"),
    rows: [
      { k: "uns", label: l("UNS"), cells: [Y, Y, Y, Y] },
      { k: "appBuilder", label: l("App Builder"), cells: [Y, Y, Y, Y] },
      {
        k: "mcp",
        label: l("Managed MCP", "\u6258\u7BA1 MCP"),
        cells: [Y, Y, Y, Y]
      },
      {
        k: "credits",
        label: l("AI Credits"),
        cells: [
          l("250 (trial)", "250\uFF08\u8BD5\u7528\u671F\uFF09"),
          l("1,000 / mo", "1,000 / \u6708"),
          l("5,000 / mo", "5,000 / \u6708"),
          CU
        ]
      },
      {
        k: "addons",
        label: l("Credit add-ons", "Credits \u62D3\u5C55\u5305"),
        cells: [N, Y, Y, Y]
      },
      {
        k: "apps",
        label: l("Deployed apps", "\u90E8\u7F72\u5E94\u7528"),
        cells: ["1", "5", "20", CU]
      },
      { k: "anchor", label: l("Anchor"), cells: [N, N, Y, Y] },
      {
        k: "vision",
        label: l("Vision"),
        cells: [N, N, Y, Y],
        soon: true
      }
    ]
  },
  {
    title: l("Security", "\u5B89\u5168"),
    rows: [
      { k: "rbac", label: l("RBAC"), cells: [Y, Y, Y, Y] },
      {
        k: "audit",
        label: l("Audit logs", "\u5BA1\u8BA1\u65E5\u5FD7"),
        cells: [N, N, Y, Y]
      },
      {
        k: "tenant",
        label: l("Isolated tenant", "\u9694\u79BB\u79DF\u6237"),
        cells: [N, N, N, CU]
      }
    ]
  },
  {
    title: l("Resources", "\u8D44\u6E90"),
    rows: [
      {
        k: "data",
        label: l("Data storage", "\u6570\u636E\u5B58\u50A8"),
        cells: ["10 GB", "100 GB", "500 GB", CU]
      },
      {
        k: "files",
        label: l("File storage", "\u6587\u4EF6\u5B58\u50A8"),
        cells: ["1 GB", "10 GB", "100 GB", CU]
      },
      {
        k: "bandwidth",
        label: l("Bandwidth", "\u6D41\u91CF"),
        cells: ["1x", "1x", "3x", CU]
      },
      {
        k: "hardware",
        label: l("Hardware*", "\u8D60\u9001\u786C\u4EF6*"),
        cells: [N, l("Starter", "\u5165\u95E8\u7248"), l("Advanced", "\u8FDB\u9636\u7248"), CU]
      }
    ]
  }
];
const EDGE_PLANS = [
  {
    name: "Edge",
    desc: l("Open source \xB7 single machine", "\u5F00\u6E90\u7248 \xB7 \u5355\u673A\u90E8\u7F72"),
    price: l("Free", "\u514D\u8D39"),
    cta: "trial"
  },
  {
    name: "Base",
    desc: l("Enterprise \xB7 private deployment", "\u4F01\u4E1A\u7248 \xB7 \u79C1\u6709\u5316\u90E8\u7F72"),
    price: l("$10,000 / yr", "US$10,000 / \u5E74"),
    cta: "sales"
  },
  {
    name: "Plus",
    desc: l("Enterprise \xB7 private deployment", "\u4F01\u4E1A\u7248 \xB7 \u79C1\u6709\u5316\u90E8\u7F72"),
    price: l("$20,000 / yr", "US$20,000 / \u5E74"),
    cta: "sales"
  },
  {
    name: "Cluster",
    desc: l("Enterprise \xB7 private deployment", "\u4F01\u4E1A\u7248 \xB7 \u79C1\u6709\u5316\u90E8\u7F72"),
    price: l("$39,900+ / yr", "US$39,900+ / \u5E74"),
    cta: "sales"
  }
];
const EDGE_GROUPS = [
  {
    title: l("Features", "\u529F\u80FD"),
    rows: [
      {
        k: "eAccess",
        label: l("Access", "\u83B7\u53D6\u65B9\u5F0F"),
        cells: [
          l("Self-service", "\u81EA\u52A9"),
          l("Self-service", "\u81EA\u52A9"),
          l("Contact Sales", "\u8054\u7CFB\u9500\u552E"),
          l("Contact Sales", "\u8054\u7CFB\u9500\u552E")
        ]
      },
      {
        k: "eUns",
        label: l("UNS"),
        cells: [
          "Single Machine",
          "Single Site",
          "Multiple Site (3 Instance License)",
          "Unlimited License"
        ]
      },
      { k: "eFlow", label: l("Flow"), cells: [Y, Y, Y, Y] },
      {
        k: "eApp",
        label: l("App Builder"),
        cells: ["/", "/", "Cloud", "Cloud"]
      },
      { k: "eNotebook", label: l("Notebook"), cells: ["/", Y, Y, Y] },
      { k: "eAnchor", label: l("Anchor"), cells: ["/", "/", Y, Y] },
      {
        k: "eRbac",
        label: l("RBAC"),
        cells: [
          "/",
          "Platform RBAC",
          "Platform + App + UNS RBAC",
          "Platform + App + UNS RBAC"
        ]
      },
      {
        k: "eAudit",
        label: l("Audit", "\u5BA1\u8BA1"),
        cells: [
          "/",
          "/",
          "Application and System Log",
          "Application and System Log & SIEM Integration"
        ]
      }
    ]
  }
];
const CSS = `
.t0p *{box-sizing:border-box}
.t0p button,.t0p a{-webkit-tap-highlight-color:transparent}
.t0p :focus-visible{outline:2px solid ${C.text};outline-offset:2px;border-radius:4px}
.t0p-col{transition:background .3s ${EASE}}
.t0p-col:hover{background:${C.soft}}
.t0p-btn{transition:background .2s ease,border-color .2s ease,color .2s ease,transform .15s ease}
.t0p-btn:active{transform:scale(.98)}
.t0p-btn.g{background:${C.bg};color:${C.text};border:1px solid ${C.mute}}
.t0p-btn.p{background:${C.text};color:#fff;border:1px solid ${C.text}}
.t0p-col:hover .t0p-btn.g{border-color:${C.text}}
.t0p .t0p-btn:hover,.t0p .t0p-col:hover .t0p-btn:hover{background:${C.lime};border-color:${C.lime};color:${C.text}}
.t0p-btn.sm{height:32px!important;font-size:13px!important}
.t0p-btn .ar,.t0p-link .ar{display:inline-block;transition:transform .25s ${EASE}}
.t0p-btn:hover .ar,.t0p-link:hover .ar{transform:translate(2px,-2px)}
.t0p-link{color:${C.text};text-decoration:none;font-weight:500;border-bottom:1px solid ${C.mute};transition:border-color .2s ease}
.t0p-link:hover{border-color:${C.text}}
.t0p-ovrow{transition:border-color .2s ease,background .2s ease,transform .15s ease}
.t0p-ovrow:hover{border-color:${C.text}!important;background:${C.soft}!important}
.t0p-ovrow:active{transform:scale(.99)}
.t0p-xcard{transition:border-color .25s ease,background .25s ease}
.t0p-xcard:hover{border-color:${C.mute};background:${C.soft}}
.t0p-xcard .t0p-hash{transition:color .3s ease}
.t0p-xcard:hover .t0p-hash{color:${C.lime}!important}
.t0p-in{animation:t0pIn .45s ${EASE} both}
@keyframes t0pIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.t0p-rv{opacity:0;transform:translateY(14px);transition:opacity .6s ${EASE},transform .6s ${EASE}}
.t0p-rv.on{opacity:1;transform:none}
.t0p-row td{transition:background .2s ease}
.t0p-row:hover td{background:${C.soft}!important}
.t0p-i{color:${C.mute};transition:color .2s ease}
.t0p-li:hover .t0p-i{color:${C.faint}}
.t0p-i:hover,.t0p-i[data-open="1"]{color:${C.text}!important}
.t0p-seg button{transition:color .25s ease}
.t0p-hash{transition:color .3s ease}
.t0p-col:hover .t0p-hash{color:${C.lime}!important}
.t0p-seg button:hover{color:${C.text}}
.t0p-tip{animation:t0pTip .18s ${EASE} both}
@keyframes t0pTip{from{opacity:0;transform:translate(-50%,-4px) scale(.98)}to{opacity:1;transform:translate(-50%,0) scale(1)}}
.t0p-more .ar{display:inline-block;transition:transform .25s ${EASE}}
.t0p-more:hover{text-decoration:underline!important}
.t0p-more:hover .ar{transform:translate(2px,-2px)}
.t0p-chev{transition:transform .3s ${EASE}}
.t0p-open .t0p-chev{transform:rotate(90deg)}
.t0p-grp{cursor:pointer}
.t0p-grp .t0p-chev{transform:rotate(-90deg)}
.t0p-grp.t0p-open .t0p-chev{transform:rotate(90deg)}
.t0p-grp:hover td{background:${C.soft}}
.t0p-feat{cursor:pointer}
.t0p-desc{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s ${EASE},opacity .3s ease;opacity:0}
.t0p-open .t0p-desc{grid-template-rows:1fr;opacity:1}
@media (prefers-reduced-motion:reduce){.t0p *,.t0p-tip{animation:none!important;transition:none!important}.t0p-rv{opacity:1;transform:none}}
`;
function hostLang() {
  if (typeof window === "undefined") return null;
  const host = (location.hostname || "").replace(/^www\./, "").toLowerCase();
  if (host === "tier0.cn" || host.endsWith(".tier0.cn")) return "zh";
  if (host === "tier0.dev" || host.endsWith(".tier0.dev")) return "en";
  return null;
}
function detectLang() {
  if (typeof window === "undefined") return "en";
  const byHost = hostLang();
  if (byHost) return byHost;
  if (/^\/zh(-|\/|$)/i.test(location.pathname)) return "zh";
  const h = (document.documentElement.lang || "").toLowerCase();
  if (h.startsWith("zh")) return "zh";
  if (h.startsWith("en")) return "en";
  return (navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en";
}
function resolveLoginUrl(lang) {
  const byHost = hostLang();
  return LOGIN_URL[byHost ?? lang];
}
function useLang(mode) {
  const [lang, set] = React.useState(
    () => mode === "auto" ? detectLang() : mode === "zh" ? "zh" : "en"
  );
  React.useEffect(() => {
    if (mode !== "auto") {
      set(mode);
      return;
    }
    const u = () => set(detectLang());
    u();
    const mo = new MutationObserver(u);
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"]
    });
    addEventListener("popstate", u);
    return () => {
      mo.disconnect();
      removeEventListener("popstate", u);
    };
  }, [mode]);
  return lang;
}
function useWidth(ref) {
  const [w, set] = React.useState(BP.desktop);
  React.useEffect(() => {
    if (!ref.current || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(([e]) => set(e.contentRect.width));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return w;
}
function useCountUp(target, ms = 500) {
  const [v, set] = React.useState(target);
  const from = React.useRef(target);
  React.useEffect(() => {
    const start = from.current, t0 = performance.now();
    if (start === target) return;
    let raf = 0;
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / ms), e = 1 - Math.pow(1 - p, 3);
      set(start + (target - start) * e);
      if (p < 1) raf = requestAnimationFrame(tick);
      else from.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      from.current = target;
    };
  }, [target]);
  return v;
}
const money = (n, s) => s + Math.round(n).toLocaleString("en-US");
const fill = (s, v) => s.replace(/\{(\w+)\}/g, (_, k) => v[k] ?? "");
function SeatIcon({
  kind,
  size = 14
}) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: { flexShrink: 0 }
    },
    kind === "builder" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }), /* @__PURE__ */ React.createElement("path", { d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" })) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("path", { d: "M10 8l6 4-6 4z" }))
  );
}
function Reveal({
  children,
  delay = 0,
  style
}) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined")
      return setOn(true);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      className: `t0p-rv ${on ? "on" : ""}`,
      style: { transitionDelay: `${delay}ms`, ...style }
    },
    children
  );
}
function Info({
  text,
  href,
  more
}) {
  const ref = React.useRef(null);
  const timer = React.useRef(0);
  const [pos, setPos] = React.useState(null);
  const show = () => {
    clearTimeout(timer.current);
    const r = ref.current?.getBoundingClientRect();
    if (r)
      setPos({
        x: Math.min(
          Math.max(r.left + r.width / 2, 140),
          window.innerWidth - 140
        ),
        y: r.bottom + 8
      });
  };
  const hide = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setPos(null), 160);
  };
  React.useEffect(() => {
    if (!pos) return;
    const off = () => setPos(null);
    addEventListener("scroll", off, true);
    return () => removeEventListener("scroll", off, true);
  }, [pos]);
  if (!text) return null;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    "button",
    {
      ref,
      type: "button",
      "aria-label": text,
      className: "t0p-i",
      "data-open": pos ? 1 : 0,
      onMouseEnter: show,
      onMouseLeave: hide,
      onFocus: show,
      onBlur: hide,
      onClick: () => pos ? setPos(null) : show(),
      style: {
        display: "inline-flex",
        border: "none",
        background: "transparent",
        padding: 2,
        margin: 0,
        cursor: "help",
        flexShrink: 0
      }
    },
    /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement(
      "circle",
      {
        cx: "8",
        cy: "8",
        r: "6.5",
        stroke: "currentColor",
        strokeWidth: "1.2"
      }
    ), /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M8 7.2v3.6M8 5.2v.01",
        stroke: "currentColor",
        strokeWidth: "1.4",
        strokeLinecap: "round"
      }
    ))
  ), pos && typeof document !== "undefined" && createPortal(
    /* @__PURE__ */ React.createElement(
      "div",
      {
        role: "tooltip",
        className: "t0p-tip",
        onMouseEnter: show,
        onMouseLeave: hide,
        style: {
          position: "fixed",
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%,0)",
          zIndex: 9999,
          width: 260,
          padding: "12px 14px",
          borderRadius: 4,
          background: C.tint,
          border: `1px solid ${C.tintLine}`,
          color: C.text,
          fontFamily: SANS,
          fontSize: 13,
          lineHeight: 1.6,
          boxShadow: "0 12px 28px -12px rgba(17,17,17,.18)",
          textAlign: "left"
        }
      },
      text,
      href && /* @__PURE__ */ React.createElement(
        "a",
        {
          className: "t0p-more",
          href,
          target: "_blank",
          rel: "noopener noreferrer",
          style: {
            display: "block",
            textAlign: "right",
            marginTop: 10,
            fontFamily: MONO,
            fontSize: 12,
            color: C.greenDeep,
            textDecoration: "none"
          }
        },
        more,
        " ",
        /* @__PURE__ */ React.createElement("span", { className: "ar" }, "\u2197")
      )
    ),
    document.body
  ));
}
function TagIcon() {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: { flexShrink: 0 }
    },
    /* @__PURE__ */ React.createElement("path", { d: "M12.6 2.6A2 2 0 0 0 11.2 2H4a2 2 0 0 0-2 2v7.2a2 2 0 0 0 .6 1.4l8.7 8.7a2.4 2.4 0 0 0 3.4 0l6.6-6.6a2.4 2.4 0 0 0 0-3.4z" }),
    /* @__PURE__ */ React.createElement("circle", { cx: "7.5", cy: "7.5", r: "1", fill: "currentColor" })
  );
}
function Was({
  v,
  label,
  size = 18,
  display
}) {
  return /* @__PURE__ */ React.createElement(
    "s",
    {
      "aria-label": `${label} ${v}`,
      style: {
        fontSize: size,
        color: C.faint,
        ...display ? {
          fontFamily: DISPLAY,
          fontWeight: 400,
          letterSpacing: -1,
          lineHeight: "44px",
          textDecorationThickness: 2
        } : {},
        textDecorationThickness: 1,
        textDecorationColor: C.faint,
        fontVariantNumeric: "tabular-nums",
        whiteSpace: "nowrap"
      }
    },
    v
  );
}
function PriceView({
  p,
  sym,
  mobile,
  wasLabel
}) {
  const n = useCountUp(p.num ?? 0);
  const fs = p.tag ? mobile ? 26 : 28 : mobile ? 32 : 40;
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "baseline",
        flexWrap: "nowrap",
        columnGap: 8,
        height: 44,
        whiteSpace: "nowrap"
      }
    },
    /* @__PURE__ */ React.createElement(
      "span",
      {
        style: {
          fontFamily: DISPLAY,
          fontSize: fs,
          fontWeight: 500,
          letterSpacing: -1,
          lineHeight: "44px",
          fontVariantNumeric: "tabular-nums"
        }
      },
      p.num === void 0 ? p.big : money(n, sym)
    ),
    p.was !== void 0 && /* @__PURE__ */ React.createElement("span", { key: p.was, className: "t0p-in" }, /* @__PURE__ */ React.createElement(
      Was,
      {
        v: money(p.was, sym),
        label: wasLabel,
        size: fs,
        display: true
      }
    )),
    p.unit && /* @__PURE__ */ React.createElement(
      "span",
      {
        key: p.unit,
        className: "t0p-in",
        style: { fontSize: 14, color: C.sub }
      },
      p.unit
    )
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      key: p.tag || "-",
      className: "t0p-in",
      style: {
        height: 28,
        marginTop: 10,
        display: p.tag ? "block" : "none"
      }
    },
    p.tag && /* @__PURE__ */ React.createElement(
      "span",
      {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          height: 28,
          padding: "0 10px",
          borderRadius: 4,
          background: C.limeSoft,
          color: C.greenDeep,
          fontSize: 14,
          fontWeight: 600,
          whiteSpace: "nowrap"
        }
      },
      /* @__PURE__ */ React.createElement(TagIcon, null),
      p.tag
    )
  ), !p.tag && /* @__PURE__ */ React.createElement(
    "div",
    {
      key: p.noteKey || String(p.note),
      className: "t0p-in",
      style: {
        marginTop: 10,
        height: 28,
        lineHeight: "28px",
        fontSize: 13,
        color: C.sub,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    },
    p.note
  ));
}
function Tier0PricingTable(props) {
  const {
    language,
    defaultCycle,
    defaultProduct,
    salesEmail,
    stickyOffset = 64,
    edgeUrl = "https://github.com/FREEZONEX/Tier0-Edge"
  } = props;
  const [closed, setClosed] = React.useState({});
  const [openRow, setOpenRow] = React.useState(null);
  const lang = useLang(language);
  const startUrl = resolveLoginUrl(lang);
  const ref = React.useRef(null);
  const w = useWidth(ref);
  const cols = w >= BP.desktop - 120 ? 4 : w >= BP.tablet - 120 ? 2 : 1;
  const mobile = cols === 1;
  const [cycle, setCycle] = React.useState(defaultCycle);
  const [product, setProduct] = React.useState(defaultProduct);
  const t = (x) => x[lang];
  const P = lang === "zh" ? PRICE.cny : PRICE.usd;
  const doc = (k) => DOCS[k];
  const tip = (k) => TIPS[k] ? fill(t(TIPS[k]), { seat: P.seat, packs: P.packs }) : "";
  const mailto = lang === "zh" ? "https://ofra65wfwe.feishu.cn/share/base/form/shrcnTPbamrUM5RWS4tolTcj3wf" : `mailto:${salesEmail}?subject=${encodeURIComponent("Tier0 Pricing")}`;
  const HL = product === "cloud" ? 1 : -1;
  const Btn = (href, label, primary = false, small = false) => /* @__PURE__ */ React.createElement(
    "a",
    {
      className: `t0p-btn ${primary ? "p" : "g"}${small ? " sm" : ""}`,
      href,
      target: href.startsWith("mailto:") ? void 0 : "_blank",
      rel: "noopener noreferrer",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        height: 40,
        borderRadius: 4,
        fontSize: 14,
        fontWeight: 500,
        textDecoration: "none"
      }
    },
    label,
    /* @__PURE__ */ React.createElement("span", { className: "ar" }, "\u2197")
  );
  const Seg = (value, onChange, options) => {
    const i = options.findIndex(([v]) => v === value);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "t0p-seg",
        role: "radiogroup",
        style: {
          position: "relative",
          display: "grid",
          gridTemplateColumns: `repeat(${options.length}, 1fr)`,
          padding: 3,
          borderRadius: 4,
          background: C.muted
        }
      },
      /* @__PURE__ */ React.createElement(
        "span",
        {
          style: {
            position: "absolute",
            top: 3,
            bottom: 3,
            left: 3,
            width: `calc((100% - 6px) / ${options.length})`,
            borderRadius: 3,
            background: C.bg,
            boxShadow: "0 1px 2px rgba(17,17,17,.08)",
            transform: `translateX(${i * 100}%)`,
            transition: `transform .45s ${EASE}`
          }
        }
      ),
      options.map(([v, label]) => /* @__PURE__ */ React.createElement(
        "button",
        {
          key: v,
          role: "radio",
          "aria-checked": value === v,
          onClick: () => onChange(v),
          style: {
            position: "relative",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            height: 32,
            padding: "0 16px",
            fontFamily: SANS,
            fontSize: 14,
            fontWeight: 500,
            color: value === v ? C.text : C.sub,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            whiteSpace: "nowrap"
          }
        },
        label
      ))
    );
  };
  const Soon = () => /* @__PURE__ */ React.createElement(
    "span",
    {
      style: {
        fontSize: 12,
        lineHeight: "18px",
        padding: "0 8px",
        borderRadius: 4,
        background: C.tint,
        color: C.greenDeep,
        whiteSpace: "nowrap"
      }
    },
    t(T.soon)
  );
  const Check = ({ hl }) => /* @__PURE__ */ React.createElement(
    "span",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 18,
        height: 18,
        borderRadius: 3,
        flexShrink: 0,
        background: hl ? C.limeSoft : C.muted
      }
    },
    /* @__PURE__ */ React.createElement("svg", { width: "11", height: "11", viewBox: "0 0 14 14" }, /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M2.5 7.5l3 3 6-7",
        fill: "none",
        stroke: hl ? C.greenDeep : C.text,
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ))
  );
  const price = (id) => {
    if (id === "trial") return { big: t(T.free), note: t(T.trialNote) };
    if (id === "scale") return { big: t(T.custom), note: t(T.scaleNote) };
    const [promo, reg, year] = P[id];
    const pct = (now, was) => String(Math.round((1 - now / was) * 100));
    return cycle === "monthly" ? {
      // 月付默认展示常规价；首次订阅前 3 个月优惠价放在标签里
      big: money(reg, P.s),
      num: reg,
      unit: t(T.mo),
      tag: fill(t(T.intro), { v: money(promo, P.s) }),
      note: ""
    } : {
      big: money(year, P.s),
      num: year,
      was: reg * 12,
      unit: t(T.yr),
      tag: fill(t(T.yearOff), { v: pct(year, reg * 12) }),
      note: ""
    };
  };
  const cta = (id) => id === "trial" ? Btn(startUrl, t(T.trial)) : id === "scale" ? Btn(mailto, t(T.sales)) : Btn(startUrl, t(T.start), id === "growth");
  const miniPrice = (id) => {
    const x = price(id);
    const key = `${id}-${cycle}-${lang}`;
    return [
      key,
      /* @__PURE__ */ React.createElement(
        "span",
        {
          style: {
            display: "inline-flex",
            alignItems: "baseline",
            gap: 6,
            whiteSpace: "nowrap"
          }
        },
        x.was !== void 0 && /* @__PURE__ */ React.createElement(
          Was,
          {
            v: money(x.was, P.s),
            label: t(T.wasLabel),
            size: 13
          }
        ),
        /* @__PURE__ */ React.createElement("span", { style: { color: C.text, fontWeight: 500 } }, x.big),
        x.unit && /* @__PURE__ */ React.createElement("span", null, x.unit)
      )
    ];
  };
  const Column = (i, name, desc, priceNode, button, popular, below) => /* @__PURE__ */ React.createElement(
    Reveal,
    {
      key: name,
      delay: i * 60,
      style: { background: C.bg, display: "flex" }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "t0p-col",
        style: {
          position: "relative",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: mobile ? 20 : 24
        }
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            minHeight: 26
          }
        },
        /* @__PURE__ */ React.createElement(
          "span",
          {
            style: {
              fontFamily: DISPLAY,
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: -0.3,
              lineHeight: "26px"
            }
          },
          /* @__PURE__ */ React.createElement(
            "span",
            {
              className: "t0p-hash",
              style: { color: C.mute, marginRight: 6 }
            },
            "#"
          ),
          name
        ),
        popular && /* @__PURE__ */ React.createElement(
          "span",
          {
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: MONO,
              fontSize: 12,
              color: C.greenDeep,
              padding: "2px 8px",
              borderRadius: 4,
              background: C.limeSoft
            }
          },
          /* @__PURE__ */ React.createElement(
            "span",
            {
              style: {
                width: 6,
                height: 6,
                background: C.lime
              }
            }
          ),
          t(T.popular)
        )
      ),
      /* @__PURE__ */ React.createElement(
        "span",
        {
          style: {
            position: "relative",
            fontSize: 14,
            lineHeight: "20px",
            color: C.sub,
            marginTop: 6
          }
        },
        desc
      ),
      /* @__PURE__ */ React.createElement("div", { style: { marginTop: mobile ? 16 : 24 } }, priceNode),
      /* @__PURE__ */ React.createElement("div", { style: { marginTop: 20 } }, button),
      below
    )
  );
  const FeatureList = (p) => /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        marginTop: 24,
        paddingTop: 20,
        borderTop: `1px solid ${C.line}`
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: C.sub, marginBottom: 6 } }, p.from ? fill(t(T.plus), { v: p.from }) : t(T.includes)),
    p.features.map((f) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: f.text.en,
        className: "t0p-li",
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "7px 0",
          fontSize: 14
        }
      },
      /* @__PURE__ */ React.createElement(Check, null),
      /* @__PURE__ */ React.createElement(
        "span",
        {
          style: {
            flex: 1,
            display: "inline-flex",
            alignItems: "center",
            gap: 8
          }
        },
        t(f.text),
        f.soon && Soon()
      ),
      /* @__PURE__ */ React.createElement(Info, { text: tip(f.k), href: doc(f.k), more: t(T.more) })
    ))
  );
  const grid = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
    gap: 1,
    background: C.line,
    border: `1px solid ${C.line}`,
    borderRadius: 4,
    overflow: "hidden"
  };
  const Yes = () => /* @__PURE__ */ React.createElement(
    "span",
    {
      "aria-label": "included",
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: C.lime
      }
    },
    /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 14 14" }, /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M2.5 7.5l3 3 6-7",
        fill: "none",
        stroke: C.text,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ))
  );
  const No = () => /* @__PURE__ */ React.createElement(
    "span",
    {
      "aria-label": "not included",
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: C.line
      }
    },
    /* @__PURE__ */ React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 10 10" }, /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M2 5h6",
        stroke: C.faint,
        strokeWidth: "1.8",
        strokeLinecap: "round"
      }
    ))
  );
  const Chev = () => /* @__PURE__ */ React.createElement(
    "svg",
    {
      className: "t0p-chev",
      width: "14",
      height: "14",
      viewBox: "0 0 16 16",
      fill: "none",
      style: { flexShrink: 0 }
    },
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M6 3.5L10.5 8 6 12.5",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  );
  const seatIco = (k) => k === "builder" || k === "operator" ? /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", color: C.sub } }, /* @__PURE__ */ React.createElement(SeatIcon, { kind: k })) : null;
  const Compare = (scope, heads, groups, priceRow) => {
    const px = mobile ? 12 : 24;
    const fs = mobile ? 14 : 15;
    const th = {
      padding: `16px ${px}px 18px`,
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      verticalAlign: "bottom",
      background: C.bg,
      position: "sticky",
      top: stickyOffset,
      zIndex: 2,
      borderBottom: `1px solid ${C.line}`
    };
    const td = {
      padding: `16px ${px}px`,
      fontSize: fs,
      textAlign: "center",
      borderBottom: `1px solid ${C.line}`,
      verticalAlign: "top",
      background: C.bg,
      lineHeight: 1.5
    };
    const lab = {
      ...td,
      textAlign: "left",
      position: "sticky",
      left: 0,
      zIndex: 1
    };
    const value = (v) => v === true ? /* @__PURE__ */ React.createElement(Yes, null) : v === false ? /* @__PURE__ */ React.createElement(No, null) : /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", minHeight: 22 } }, typeof v === "string" ? v : t(v));
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          overflowX: mobile ? "auto" : "visible",
          marginTop: mobile ? 56 : 96
        }
      },
      /* @__PURE__ */ React.createElement(
        "h3",
        {
          style: {
            fontFamily: DISPLAY,
            fontSize: mobile ? 28 : 40,
            fontWeight: 400,
            letterSpacing: -0.8,
            margin: "0 0 28px"
          }
        },
        /* @__PURE__ */ React.createElement("span", { style: { color: C.lime, marginRight: 10 } }, "#"),
        t(T.compare)
      ),
      /* @__PURE__ */ React.createElement(
        "table",
        {
          style: {
            width: "100%",
            minWidth: mobile ? 560 : 0,
            borderCollapse: "separate",
            borderSpacing: 0,
            tableLayout: "fixed"
          }
        },
        /* @__PURE__ */ React.createElement("colgroup", null, /* @__PURE__ */ React.createElement(
          "col",
          {
            style: {
              width: mobile ? 170 : `${100 / (heads.length + 1)}%`
            }
          }
        ), heads.map((_, i) => /* @__PURE__ */ React.createElement("col", { key: i }))),
        /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement(
          "th",
          {
            style: {
              ...th,
              textAlign: "left",
              left: 0,
              zIndex: 2,
              fontSize: fs,
              color: C.sub
            }
          },
          t(T.features)
        ), heads.map((h, j) => /* @__PURE__ */ React.createElement("th", { key: h.name, style: th }, /* @__PURE__ */ React.createElement(
          "div",
          {
            style: {
              fontFamily: DISPLAY,
              fontSize: mobile ? 17 : 20,
              fontWeight: 500
            }
          },
          /* @__PURE__ */ React.createElement(
            "span",
            {
              style: {
                color: j === HL ? C.lime : C.mute,
                marginRight: 6
              }
            },
            "#"
          ),
          h.name
        ), priceRow && /* @__PURE__ */ React.createElement(
          "div",
          {
            key: priceRow[j][0],
            className: "t0p-in",
            style: {
              marginTop: 4,
              fontSize: 13,
              fontWeight: 400,
              color: C.sub
            }
          },
          priceRow[j][1]
        ))))),
        /* @__PURE__ */ React.createElement("tbody", null, groups.map((g) => {
          const gk = scope + g.title.en, isClosed = !!closed[gk];
          return /* @__PURE__ */ React.createElement(React.Fragment, { key: gk }, /* @__PURE__ */ React.createElement(
            "tr",
            {
              className: `t0p-grp ${isClosed ? "" : "t0p-open"}`,
              onClick: () => setClosed((c) => ({
                ...c,
                [gk]: !c[gk]
              })),
              "aria-expanded": !isClosed
            },
            /* @__PURE__ */ React.createElement(
              "td",
              {
                colSpan: heads.length + 1,
                style: {
                  padding: `${mobile ? 28 : 36}px ${px}px 14px`,
                  borderBottom: `1px solid ${C.line}`,
                  background: C.bg,
                  transition: "background .2s ease"
                }
              },
              /* @__PURE__ */ React.createElement(
                "span",
                {
                  style: {
                    position: "sticky",
                    left: px,
                    display: "flex",
                    alignItems: "center",
                    gap: 10
                  }
                },
                /* @__PURE__ */ React.createElement(
                  "span",
                  {
                    style: {
                      width: 8,
                      height: 8,
                      background: C.lime
                    }
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  "span",
                  {
                    style: {
                      fontFamily: DISPLAY,
                      fontSize: mobile ? 17 : 19,
                      fontWeight: 500,
                      flex: 1
                    }
                  },
                  t(g.title)
                ),
                /* @__PURE__ */ React.createElement(
                  "span",
                  {
                    style: {
                      color: C.sub,
                      display: "inline-flex"
                    }
                  },
                  /* @__PURE__ */ React.createElement(Chev, null)
                )
              )
            )
          ), !isClosed && g.rows.map((r) => {
            const rk = scope + r.k, open = openRow === rk, d = tip(r.k), href = doc(r.k);
            return /* @__PURE__ */ React.createElement(
              "tr",
              {
                key: rk,
                className: `t0p-row t0p-in ${open ? "t0p-open" : ""}`
              },
              /* @__PURE__ */ React.createElement("td", { style: lab }, !d ? /* @__PURE__ */ React.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    minHeight: 22,
                    color: C.text
                  }
                },
                /* @__PURE__ */ React.createElement(
                  "span",
                  {
                    style: {
                      width: 14
                    }
                  }
                ),
                seatIco(r.k),
                t(r.label),
                r.soon && Soon()
              ) : /* @__PURE__ */ React.createElement(
                "button",
                {
                  type: "button",
                  className: "t0p-feat",
                  "aria-expanded": open,
                  onClick: () => setOpenRow(
                    open ? null : rk
                  ),
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    width: "100%",
                    padding: 0,
                    border: "none",
                    background: "transparent",
                    fontFamily: SANS,
                    fontSize: fs,
                    color: C.text,
                    textAlign: "left",
                    minHeight: 22
                  }
                },
                /* @__PURE__ */ React.createElement(
                  "span",
                  {
                    style: {
                      color: C.faint,
                      display: "inline-flex"
                    }
                  },
                  /* @__PURE__ */ React.createElement(Chev, null)
                ),
                seatIco(r.k),
                t(r.label),
                r.soon && Soon()
              ), d && /* @__PURE__ */ React.createElement("div", { className: "t0p-desc" }, /* @__PURE__ */ React.createElement(
                "div",
                {
                  style: {
                    overflow: "hidden"
                  }
                },
                /* @__PURE__ */ React.createElement(
                  "div",
                  {
                    style: {
                      padding: "8px 0 2px 22px",
                      fontSize: 13,
                      color: C.sub,
                      lineHeight: 1.6
                    }
                  },
                  d,
                  href && /* @__PURE__ */ React.createElement(
                    "a",
                    {
                      className: "t0p-more",
                      href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: {
                        display: "block",
                        width: "fit-content",
                        marginTop: 10,
                        fontFamily: MONO,
                        fontSize: 12,
                        color: C.greenDeep,
                        textDecoration: "none"
                      }
                    },
                    t(
                      T.more
                    ),
                    " ",
                    /* @__PURE__ */ React.createElement("span", { className: "ar" }, "\u2197")
                  )
                )
              ))),
              r.cells.map((v, j) => /* @__PURE__ */ React.createElement("td", { key: j, style: td }, value(v)))
            );
          }));
        }))
      )
    );
  };
  const CLOUD_COMPARE = CLOUD_GROUPS.map((g) => ({
    ...g,
    rows: g.rows.map((r) => ({ ...r, cells: r.cells.slice(1) }))
  }));
  const Section = (title, body) => /* @__PURE__ */ React.createElement(Reveal, { style: { marginTop: mobile ? 64 : 112 } }, /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        display: "grid",
        gridTemplateColumns: cols === 4 ? "1fr 3fr" : "1fr",
        gap: mobile ? 20 : 32
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: { paddingLeft: cols === 4 ? 24 : 0 } }, /* @__PURE__ */ React.createElement(
      "h3",
      {
        style: {
          fontFamily: DISPLAY,
          fontSize: mobile ? 28 : 40,
          fontWeight: 400,
          letterSpacing: -0.8,
          margin: 0
        }
      },
      /* @__PURE__ */ React.createElement("span", { style: { color: C.lime, marginRight: 10 } }, "#"),
      title
    )),
    /* @__PURE__ */ React.createElement("div", null, body)
  ));
  const Tile = (d) => /* @__PURE__ */ React.createElement(
    "span",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 28,
        height: 28,
        borderRadius: 4,
        background: C.limeSoft,
        color: C.greenDeep,
        flexShrink: 0
      }
    },
    /* @__PURE__ */ React.createElement(
      "svg",
      {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      /* @__PURE__ */ React.createElement("path", { d })
    )
  );
  const ICON = {
    seat: "M8 3v10M3 8h10",
    credit: "M8 2l1.6 3.9L13.5 6.4 10.6 9l.8 4-3.4-2-3.4 2 .8-4-2.9-2.6 3.9-.5z",
    hw: "M3 4h10v6H3zM6 13h4M8 10v3"
  };
  const XCard = (icon, title, right, desc, foot) => /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "t0p-xcard",
      style: {
        border: `1px solid ${C.line}`,
        borderRadius: 4,
        padding: mobile ? 20 : 24,
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: mobile ? "flex-start" : "center",
          flexDirection: mobile ? "column" : "row",
          gap: 12,
          justifyContent: "space-between"
        }
      },
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, Tile(icon), /* @__PURE__ */ React.createElement(
        "span",
        {
          style: {
            fontFamily: DISPLAY,
            fontSize: 20,
            fontWeight: 500
          }
        },
        title
      )),
      /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: C.text } }, right)
    ),
    /* @__PURE__ */ React.createElement(
      "p",
      {
        style: {
          margin: 0,
          fontSize: 15,
          lineHeight: 1.6,
          color: C.sub
        }
      },
      desc
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          marginTop: 6
        }
      },
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: C.faint } }, foot)
    )
  );
  const Chip = (children, key) => /* @__PURE__ */ React.createElement(
    "span",
    {
      key,
      style: {
        display: "inline-flex",
        alignItems: "baseline",
        gap: 6,
        padding: "4px 10px",
        borderRadius: 4,
        background: C.muted,
        fontSize: 13,
        whiteSpace: "nowrap"
      }
    },
    children
  );
  const AddOns = Section(
    t(T.addonsTitle),
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 } }, XCard(
      ICON.seat,
      t(T.seatAdd),
      /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        "b",
        {
          style: {
            fontFamily: DISPLAY,
            fontSize: 20,
            fontWeight: 500
          }
        },
        P.seat
      ), " ", /* @__PURE__ */ React.createElement("span", { style: { color: C.sub } }, t(T.seatUnit))),
      t(T.seatAddDesc),
      t(T.paidOnly)
    ), XCard(
      ICON.credit,
      t(T.packs),
      /* @__PURE__ */ React.createElement("span", { style: { display: "flex", flexWrap: "wrap", gap: 6 } }, P.packList.map(
        ([n, v]) => Chip(
          /* @__PURE__ */ React.createElement(React.Fragment, null, n.toLocaleString(), " ", /* @__PURE__ */ React.createElement("span", { style: { color: C.sub } }, "Credits"), " ", /* @__PURE__ */ React.createElement("b", { style: { fontWeight: 500 } }, money(v, P.s))),
          n
        )
      )),
      fill(t(T.packsDesc), { c: P.credit }),
      t(T.paidOnly)
    ), XCard(
      ICON.hw,
      t(T.hw),
      /* @__PURE__ */ React.createElement("span", { style: { display: "flex", flexWrap: "wrap", gap: 6 } }, Chip(
        /* @__PURE__ */ React.createElement(React.Fragment, null, "Base", " ", /* @__PURE__ */ React.createElement("b", { style: { fontWeight: 500 } }, t(T.hwBase))),
        "b"
      ), Chip(
        /* @__PURE__ */ React.createElement(React.Fragment, null, "Growth", " ", /* @__PURE__ */ React.createElement("b", { style: { fontWeight: 500 } }, t(T.hwGrowth))),
        "g"
      )),
      t(T.hwDesc),
      t(T.hwScale)
    ))
  );
  const pricingRef = React.useRef(null);
  const jump = (prod) => {
    setProduct(prod);
    const el = pricingRef.current;
    if (el && typeof window !== "undefined")
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - stickyOffset - 16,
        behavior: "smooth"
      });
  };
  const ovCols = w >= 900;
  const Star = () => /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: C.green }, /* @__PURE__ */ React.createElement("path", { d: "M12 2l3 6.6 7.2.8-5.4 4.9 1.5 7.1L12 17.8 5.7 21.4l1.5-7.1L1.8 9.4 9 8.6z" }));
  const OvRow = (name, priceText, onClick, key) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key,
      type: "button",
      className: "t0p-ovrow",
      onClick,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        width: "100%",
        padding: "14px 16px",
        border: `1px solid ${C.line}`,
        borderRadius: 4,
        background: C.bg,
        cursor: "pointer",
        fontFamily: SANS,
        fontSize: 15,
        color: C.text,
        textAlign: "left"
      }
    },
    /* @__PURE__ */ React.createElement(
      "span",
      {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontWeight: 500
        }
      },
      name
    ),
    /* @__PURE__ */ React.createElement(
      "span",
      {
        key: priceText[0],
        className: "t0p-in",
        style: {
          fontFamily: MONO,
          fontSize: 13,
          color: C.sub,
          whiteSpace: "nowrap"
        }
      },
      priceText[1]
    )
  );
  const OvCol = (label, tone, title, tag, desc, note, body, last) => {
    const head = tone === "saas" ? { bg: C.tint, fg: C.greenDeep, sq: C.green } : tone === "priv" ? { bg: C.muted, fg: C.text, sq: C.text } : { bg: C.soft, fg: C.sub, sq: C.faint };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          borderRight: ovCols && !last ? `1px solid ${C.line}` : void 0,
          borderBottom: !ovCols && !last ? `1px solid ${C.line}` : void 0
        }
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 24px",
            background: head.bg,
            borderBottom: `1px solid ${C.line}`,
            fontFamily: MONO,
            fontSize: 12,
            letterSpacing: 0.6,
            color: head.fg
          }
        },
        /* @__PURE__ */ React.createElement(
          "span",
          {
            style: { width: 7, height: 7, background: head.sq }
          }
        ),
        label
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            padding: mobile ? 20 : 24,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            flex: 1
          }
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexWrap: "wrap"
            }
          },
          /* @__PURE__ */ React.createElement(
            "span",
            {
              style: {
                fontFamily: DISPLAY,
                fontSize: 22,
                fontWeight: 500
              }
            },
            title
          ),
          tag && /* @__PURE__ */ React.createElement(
            "span",
            {
              style: {
                fontSize: 12,
                color: C.greenDeep,
                padding: "2px 8px",
                borderRadius: 4,
                border: `1px solid ${C.tintLine}`,
                background: C.tint
              }
            },
            tag
          )
        ),
        /* @__PURE__ */ React.createElement(
          "p",
          {
            style: {
              margin: 0,
              fontSize: 16,
              color: C.text,
              lineHeight: 1.5
            }
          },
          desc
        ),
        /* @__PURE__ */ React.createElement(
          "div",
          {
            style: {
              padding: "10px 14px",
              background: head.bg,
              borderLeft: `2px solid ${tone === "saas" ? C.lime : tone === "priv" ? C.text : C.mute}`,
              fontFamily: MONO,
              fontSize: 12,
              lineHeight: 1.7,
              color: C.sub
            }
          },
          note
        ),
        /* @__PURE__ */ React.createElement(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginTop: 4
            }
          },
          body
        )
      )
    );
  };
  const Overview = /* @__PURE__ */ React.createElement(Reveal, { style: { marginBottom: mobile ? 56 : 88 } }, /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        position: "relative",
        border: `1px solid ${C.line}`,
        borderRadius: 4,
        display: "grid",
        gridTemplateColumns: ovCols ? "repeat(3, minmax(0, 1fr))" : "1fr"
      }
    },
    ["tl", "tr", "bl", "br"].map((c) => /* @__PURE__ */ React.createElement(
      "span",
      {
        key: c,
        style: {
          position: "absolute",
          width: 6,
          height: 6,
          background: C.lime,
          top: c[0] === "t" ? -3 : void 0,
          bottom: c[0] === "b" ? -3 : void 0,
          left: c[1] === "l" ? -3 : void 0,
          right: c[1] === "r" ? -3 : void 0
        }
      }
    )),
    OvCol(
      t(T.ovOpen),
      "open",
      "Edge",
      null,
      t(T.ovEdgeDesc),
      t(T.ovEdgeNote),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            border: `1px solid ${C.line}`,
            borderRadius: 4,
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 10
          }
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline"
            }
          },
          /* @__PURE__ */ React.createElement(
            "span",
            {
              style: {
                fontFamily: DISPLAY,
                fontSize: 18,
                fontWeight: 500
              }
            },
            "Apache-2.0"
          ),
          /* @__PURE__ */ React.createElement(
            "span",
            {
              style: {
                fontFamily: MONO,
                fontSize: 13,
                color: C.sub
              }
            },
            t(T.free)
          )
        ),
        /* @__PURE__ */ React.createElement(
          "p",
          {
            style: {
              margin: 0,
              fontSize: 14,
              color: C.sub,
              lineHeight: 1.6
            }
          },
          t(T.ovEdgeCard)
        ),
        /* @__PURE__ */ React.createElement(
          "a",
          {
            className: "t0p-more",
            href: edgeUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
              fontFamily: MONO,
              fontSize: 13,
              color: C.greenDeep,
              textDecoration: "none",
              width: "fit-content"
            }
          },
          t(T.ovGithub),
          " ",
          /* @__PURE__ */ React.createElement("span", { className: "ar" }, "\u2197")
        )
      )
    ),
    OvCol(
      t(T.ovSaas),
      "saas",
      "Cloud",
      t(T.ovCloudTag),
      t(T.ovCloudDesc),
      t(T.ovCloudNote),
      /* @__PURE__ */ React.createElement(React.Fragment, null, OvRow(
        "Base",
        miniPrice("base"),
        () => jump("cloud"),
        "b"
      ), OvRow(
        /* @__PURE__ */ React.createElement(React.Fragment, null, "Growth ", /* @__PURE__ */ React.createElement(Star, null)),
        miniPrice("growth"),
        () => jump("cloud"),
        "g"
      ), OvRow(
        "Scale",
        ["scale", t(T.custom)],
        () => jump("cloud"),
        "s"
      ))
    ),
    OvCol(
      t(T.ovPriv),
      "priv",
      "Enterprise",
      null,
      t(T.ovEntDesc),
      t(T.ovEntNote),
      /* @__PURE__ */ React.createElement(React.Fragment, null, EDGE_PLANS.slice(1).map(
        (p) => OvRow(
          p.name === "Cluster" ? /* @__PURE__ */ React.createElement(React.Fragment, null, p.name, " ", /* @__PURE__ */ React.createElement(Star, null)) : p.name,
          [p.name, t(p.price)],
          () => jump("edge"),
          p.name
        )
      )),
      true
    )
  ));
  const cloudPriceRow = CLOUD_PLANS.map((p) => miniPrice(p.id));
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      className: "t0p",
      style: {
        width: "100%",
        background: C.bg,
        color: C.text,
        fontFamily: SANS,
        WebkitFontSmoothing: "antialiased",
        position: "relative",
        isolation: "isolate",
        zIndex: 0
      }
    },
    /* @__PURE__ */ React.createElement("style", null, CSS),
    Overview,
    /* @__PURE__ */ React.createElement("div", { ref: pricingRef }),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          alignItems: mobile ? "stretch" : "center",
          gap: 12,
          marginBottom: mobile ? 20 : 28
        }
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: mobile ? "column" : "row",
            gap: 8
          }
        },
        Seg(product, setProduct, [
          ["cloud", "Cloud"],
          ["edge", t(T.selfHosted)]
        ]),
        product === "cloud" && Seg(cycle, setCycle, [
          ["monthly", t(T.monthly)],
          [
            "yearly",
            /* @__PURE__ */ React.createElement(React.Fragment, null, t(T.yearly), /* @__PURE__ */ React.createElement(
              "span",
              {
                style: {
                  fontFamily: MONO,
                  fontSize: 11,
                  color: C.greenDeep,
                  background: C.limeSoft,
                  padding: "1px 5px",
                  borderRadius: 3
                }
              },
              t(T.save)
            ))
          ]
        ])
      )
    ),
    product === "cloud" ? /* @__PURE__ */ React.createElement("div", { key: "cloud" }, /* @__PURE__ */ React.createElement("div", { style: grid }, CLOUD_PLANS.map(
      (p, i) => Column(
        i,
        t(p.name),
        t(p.desc),
        /* @__PURE__ */ React.createElement(
          PriceView,
          {
            p: price(p.id),
            sym: P.s,
            mobile,
            wasLabel: t(T.wasLabel)
          }
        ),
        cta(p.id),
        p.popular,
        FeatureList(p)
      )
    )), /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexWrap: "wrap",
          gap: mobile ? 8 : 24,
          marginTop: 14,
          fontSize: 13,
          color: C.sub,
          paddingLeft: mobile ? 0 : 4
        }
      },
      ["builder", "operator"].map((k) => /* @__PURE__ */ React.createElement(
        "span",
        {
          key: k,
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 6
          }
        },
        /* @__PURE__ */ React.createElement(
          "span",
          {
            style: {
              color: C.text,
              display: "inline-flex"
            }
          },
          /* @__PURE__ */ React.createElement(SeatIcon, { kind: k, size: 13 })
        ),
        /* @__PURE__ */ React.createElement("b", { style: { fontWeight: 500, color: C.text } }, t(
          k === "builder" ? T.builderSeat : T.operatorSeat
        )),
        t(
          k === "builder" ? T.builderDesc : T.operatorDesc
        )
      ))
    ), /* @__PURE__ */ React.createElement(Reveal, null, Compare(
      "c",
      CLOUD_PLANS.slice(1).map((p) => ({
        name: t(p.name),
        href: p.id === "scale" ? mailto : startUrl
      })),
      CLOUD_COMPARE,
      cloudPriceRow.slice(1)
    )), AddOns) : /* @__PURE__ */ React.createElement("div", { key: "edge" }, /* @__PURE__ */ React.createElement("div", { style: grid }, EDGE_PLANS.map(
      (p, i) => Column(
        i,
        p.name,
        t(p.desc),
        /* @__PURE__ */ React.createElement(
          PriceView,
          {
            p: { big: t(p.price), note: "" },
            sym: P.s,
            mobile,
            wasLabel: t(T.wasLabel)
          }
        ),
        p.cta === "trial" ? Btn(edgeUrl, t(T.github)) : Btn(mailto, t(T.sales))
      )
    )), /* @__PURE__ */ React.createElement(Reveal, null, Compare(
      "e",
      EDGE_PLANS.map((p) => ({
        name: p.name,
        href: p.cta === "trial" ? edgeUrl : mailto
      })),
      EDGE_GROUPS
    )))
  );
}
Tier0PricingTable.defaultProps = {
  language: "auto",
  defaultCycle: "yearly",
  defaultProduct: "cloud",
  stickyOffset: 64,
  edgeUrl: "https://github.com/FREEZONEX/Tier0-Edge",
  salesEmail: "sales@tier0.app"
};
addPropertyControls(Tier0PricingTable, {
  language: {
    type: ControlType.Enum,
    title: "Language",
    options: ["auto", "en", "zh"],
    optionTitles: ["Auto", "English (USD)", "\u4E2D\u6587 (CNY)"]
  },
  // Auto：tier0.cn → 中文登录；tier0.dev → 英文登录。中文页务必选 Auto 或 中文。
  defaultProduct: {
    type: ControlType.Enum,
    title: "Default Tab",
    options: ["cloud", "edge"],
    optionTitles: ["Cloud", "Self-hosted"]
  },
  defaultCycle: {
    type: ControlType.Enum,
    title: "Default Cycle",
    options: ["monthly", "yearly"],
    optionTitles: ["Monthly", "Yearly"]
  },
  stickyOffset: {
    type: ControlType.Number,
    title: "Sticky Offset",
    min: 0,
    max: 200,
    step: 1,
    unit: "px",
    displayStepper: true
  },
  edgeUrl: { type: ControlType.String, title: "Edge Open Source URL" },
  salesEmail: { type: ControlType.String, title: "Sales Email" }
});
export {
  Tier0PricingTable as default
};
