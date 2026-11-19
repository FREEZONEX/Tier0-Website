const path = require("node:path");
const fs = require("node:fs");
const { createRequire } = require("node:module");
const workspace = path.resolve(__dirname, "../../..");
const scaffold =
  process.env.SCAFFOLD_DIR || path.join(workspace, "Tier0-App-Scaffold");
const frontend =
  process.env.FRONTEND_DIR || path.join(workspace, "Tier0-Frontend");
const pkg = createRequire(path.join(scaffold, "package.json"));
const output = path.resolve(__dirname, "../../site/assets/ems-ui");
async function build() {
  const aliases = {
    "@": scaffold + "/src",
    "@frontend": frontend + "/packages/uns-agent-ui/src",
    "@agentMessages": frontend + "/packages/uns-agent-ui/i18n/zh-cn.json",
    "@tier0/ui": __dirname + "/platform-ui.ts",
    "@platformUI": frontend + "/packages/ui/components/ui",
    react: pkg.resolve("react/package.json").replace("/package.json", ""),
    "react-dom": pkg
      .resolve("react-dom/package.json")
      .replace("/package.json", ""),
  };
  await pkg("esbuild").build({
    entryPoints: [
      __dirname + "/preview.tsx",
      __dirname + "/platform-agent.tsx",
    ],
    outdir: output,
    format: "esm",
    bundle: true,
    minify: true,
    jsx: "automatic",
    alias: aliases,
    nodePaths: [scaffold + "/node_modules", frontend + "/node_modules"],
    define: { "process.env.NODE_ENV": '"production"' },
    loader: { ".svg": "dataurl", ".scss": "empty", ".css": "empty" },
  });
  const { compile } = pkg("@tailwindcss/node");
  const base = scaffold + "/src/styles";
  const tokens = fs
    .readFileSync(base + "/globals.css", "utf8")
    .replace('@import "@fontsource/ibm-plex-mono";', "");
  const platform = fs.readFileSync(
    frontend + "/packages/uns-agent-ui/src/styles/theme-map.css",
    "utf8",
  );
  const compiler = await compile(tokens, {
    base,
    onDependency() {},
  });
  const files = [
    __dirname + "/scene-shell.tsx",
    __dirname + "/preview.tsx",
    __dirname + "/reference-boards.tsx",
    __dirname + "/product-comparison.tsx",
    __dirname + "/alarm-filters.tsx",
    ...[
      "components/ui/stat-card.tsx",
      "components/data/table-layout.tsx",
      "components/ui/button.tsx",
      "components/ui/status-badge.tsx",
      "components/kit/ui/tag.tsx",
    ].map((f) => scaffold + "/src/" + f),
    ...[
      "chat-panel/chat-composer.tsx",
      "chat-panel/message-content.tsx",
      "uns-canvas/widget-card-header.tsx",
    ].map((f) => frontend + "/packages/uns-agent-ui/src/components/" + f),
    ...["button", "textarea"].map(
      (f) => frontend + "/packages/ui/components/ui/" + f + ".tsx",
    ),
  ];
  const classes = files.flatMap((f) =>
    fs.readFileSync(f, "utf8").split(/[\s"'`{}(),;]+/),
  );
  fs.writeFileSync(
    output + "/components.css",
    compiler.build([...new Set(classes)]),
  );
  // The platform panel uses the Frontend theme and its own entry point.
  const themeDir = path.join(frontend, "packages/theme/src");
  const sass = createRequire(path.join(frontend, "package.json"))("sass");
  const variables = sass.compileString('@use "variables"; @use "themes";', {
    loadPaths: [themeDir],
  }).css;
  const agentCompiler = await compile(
    '@import "tailwindcss";\n' + platform + "\n" + variables,
    { base: frontend, onDependency() {} },
  );
  const agentFiles = [
    __dirname + "/platform-agent.tsx",
    ...files.filter((f) => f.startsWith(frontend)),
    ...["card", "table"].map(
      (n) => frontend + "/packages/ui/components/ui/" + n + ".tsx",
    ),
  ];
  fs.writeFileSync(
    output + "/platform.css",
    agentCompiler.build(
      agentFiles.flatMap((f) =>
        fs.readFileSync(f, "utf8").split(/[\s"'`{}(),;]+/),
      ),
    ),
  );
}
build().catch((e) => {
  console.error(e.message);
  process.exitCode = 1;
});
