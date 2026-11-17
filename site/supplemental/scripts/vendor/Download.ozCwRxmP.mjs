import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import { c as t, s as n, u as r } from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { Yi as i, t as a } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import { M as o, Q as s, s as c } from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
function l() {
  return typeof document > `u` || !!document.querySelector(p);
}
function u(e) {
  let { styleOptions: t, hoverOptions: a, iconOptions: o } = e,
    {
      backgroundColor: s,
      color: c,
      borderRadius: u,
      padding: p,
      paddingPerSide: g,
      paddingTop: _,
      paddingRight: v,
      paddingBottom: y,
      paddingLeft: b,
      gap: x,
    } = t,
    S = l(),
    C;
  S && (e.srcType === f.URL && (C = e.srcURL), e.srcType === f.Upload && (C = e.srcFile));
  let w = g ? `${_}px ${v}px ${y}px ${b}px` : `${p}px`,
    T = () => {
      if (!o) return;
      let e = { order: o.alignment === `start` ? 0 : 2, flexShrink: 0 };
      return o.type === d.Custom && o.image?.src
        ? /*#__PURE__*/ n(`img`, {
            style: e,
            alt: o.image?.alt && o.image.alt.length > 0 ? o.image.alt : `download icon`,
            src: o.image.src,
            width: o.size,
            height: o.size,
          })
        : /*#__PURE__*/ n(`svg`, {
            style: e,
            xmlns: `http://www.w3.org/2000/svg`,
            width: o.size,
            height: o.size,
            fill: o.color,
            viewBox: `0 0 256 256`,
            children: /*#__PURE__*/ n(`path`, {
              d: `M228 152v56a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20v-56a12 12 0 0 1 24 0v52h152v-52a12 12 0 0 1 24 0Zm-108.49 8.49a12 12 0 0 0 17 0l40-40a12 12 0 0 0-17-17L140 123V40a12 12 0 0 0-24 0v83l-19.51-19.49a12 12 0 0 0-17 17Z`,
            }),
          });
    },
    E = () =>
      (e.srcType === f.URL && e.srcURL) || (e.srcType === f.Upload && e.srcFile)
        ? `pointer`
        : `auto`,
    D = S ? `Download File` : `Publish to Download`;
  return /*#__PURE__*/ r(i.a, {
    target: `_blank`,
    href: C,
    download: !0,
    title: D,
    style: {
      gap: x,
      fontSize: 16,
      lineHeight: 1,
      fontFamily: `Inter`,
      fontWeight: 500,
      width: `max-content`,
      ...e.style,
      ...m,
      ...e.fontControl,
      padding: w,
      color: c,
      backgroundColor: s,
      borderRadius: u,
      userSelect: `none`,
      placeContent: h(e.fontControl),
      whiteSpace: `nowrap`,
      cursor: E(),
    },
    whileHover: a,
    transition: a?.transition,
    children: [T(), e.text],
  });
}
var d, f, p, m, h;
function g() {
  return (g = e(() => {
    (t(),
      s(),
      a(),
      (function (e) {
        ((e.Default = `Default`), (e.Custom = `Custom`));
      })((d ||= {})),
      (function (e) {
        ((e.Upload = `Upload`), (e.URL = `URL`));
      })((f ||= {})),
      (p = `meta[name="framer-search-index"]`),
      (u.displayName = `Download`),
      o(u, {
        text: { title: `Text`, type: c.String, defaultValue: `Download` },
        srcType: {
          type: c.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [f.Upload, f.URL],
        },
        srcURL: {
          type: c.String,
          title: ` `,
          placeholder: `../example.pdf`,
          hidden: (e) => e.srcType === f.Upload,
        },
        srcFile: {
          type: c.File,
          title: ` `,
          allowedFileTypes: [],
          hidden: (e) => e.srcType === f.URL,
        },
        fontControl: { type: c.Font, title: `Font`, controls: `extended` },
        iconOptions: {
          type: c.Object,
          optional: !0,
          title: `Icon`,
          buttonTitle: `Size, Color`,
          controls: {
            type: {
              title: `Type`,
              type: c.Enum,
              options: Object.values(d),
              optionTitles: Object.values(d),
              displaySegmentedControl: !0,
            },
            color: {
              title: `Color`,
              type: c.Color,
              defaultValue: `#FFF`,
              hidden: (e) => e.type === d.Custom,
            },
            image: {
              title: `File`,
              type: c.ResponsiveImage,
              allowedFileTypes: [`jpg`, `png`, `svg`],
              hidden: (e) => e.type === d.Default,
            },
            size: { type: c.Number, displayStepper: !0, min: 5, defaultValue: 16, max: 250 },
            alignment: {
              title: `Align`,
              type: c.Enum,
              displaySegmentedControl: !0,
              options: [`start`, `end`],
              optionTitles: [`Start`, `End`],
            },
          },
        },
        styleOptions: {
          type: c.Object,
          title: `Styles`,
          buttonTitle: `Button, Font`,
          controls: {
            backgroundColor: { type: c.Color, title: `Fill`, defaultValue: `#111` },
            color: { type: c.Color, defaultValue: `#FFF` },
            borderRadius: { type: c.Number, title: `Radius`, displayStepper: !0, defaultValue: 50 },
            padding: {
              title: `Padding`,
              type: c.FusedNumber,
              toggleKey: `paddingPerSide`,
              toggleTitles: [`Padding`, `Padding per side`],
              defaultValue: 10,
              valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
              valueLabels: [`T`, `R`, `B`, `L`],
              min: 0,
            },
            gap: { title: `Gap`, type: c.Number, displayStepper: !0, defaultValue: 5 },
          },
        },
        hoverOptions: {
          type: c.Object,
          title: `Hover`,
          buttonTitle: `Effect`,
          optional: !0,
          controls: {
            scale: {
              type: c.Number,
              title: `Scale`,
              min: 0,
              max: 10,
              displayStepper: !0,
              step: 0.01,
              defaultValue: 1.1,
            },
            backgroundColor: { type: c.Color, title: `Fill`, defaultValue: `#333`, optional: !0 },
            color: { type: c.Color, title: `Color`, defaultValue: `#FFF`, optional: !0 },
            transition: {
              type: c.Transition,
              title: `Transition`,
              defaultValue: { type: `spring`, stiffness: 400, damping: 30 },
            },
          },
        },
      }),
      (m = {
        display: `flex`,
        placeItems: `center`,
        placeContent: `center`,
        textDecoration: `none`,
      }),
      (h = (e) =>
        e?.textAlign
          ? e.textAlign === `left`
            ? `flex-start`
            : e.textAlign === `right`
              ? `flex-end`
              : `center`
          : `left`));
  }))();
}
export { g as n, u as t };
//# sourceMappingURL=Download.ozCwRxmP.mjs.map
