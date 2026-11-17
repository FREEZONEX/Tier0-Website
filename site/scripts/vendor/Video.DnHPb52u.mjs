import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs?v=20261116-migration-v2";
import {
  F as t,
  M as n,
  O as r,
  S as i,
  c as a,
  s as o,
  w as s,
  x as c,
  y as l,
} from "./react.DzQNP7Sq.mjs?v=20261116-migration-v2";
import { Ko as u, t as d, ui as f } from "./motion.BzDeQR7Y.mjs?v=20261116-migration-v2";
import { M as p, Q as m, s as h, xt as g } from "./framer.Db34W8CG.mjs?v=20261116-migration-v2";
import {
  d as _,
  f as v,
  i as y,
  l as b,
  n as x,
  o as S,
  p as C,
  t as w,
} from "./OIjZRBmWDcIE2B6qgG1j.HbGik28P.mjs?v=20261116-migration-v2";
function T() {
  return (T = e(() => {
    w();
  }))();
}
function E(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...l
  } = e;
  return l;
}
function D(e) {
  let t = E(e);
  return /*#__PURE__*/ o(F, { ...t });
}
function O(e) {
  let t = g(),
    r = i(!1),
    a = n((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: n(() => {
      !(
        e.current.currentTime > 0 &&
        e.current.onplaying &&
        !e.current.paused &&
        !e.current.ended &&
        e.current.readyState > e.current.HAVE_CURRENT_DATA
      ) &&
        e.current &&
        !r.current &&
        t &&
        ((r.current = !0),
        e.current
          .play()
          .catch((e) => {})
          .finally(() => (r.current = !1)));
    }, []),
    pause: n(() => {
      e.current && e.current.pause();
    }, []),
    setProgress: a,
  };
}
function k({ playingProp: e, muted: t, loop: n, playsinline: r, controls: i }) {
  let [a] = l(() => e),
    [o, s] = l(!1);
  e !== a && !o && s(!0);
  let c = a && t && n && r && !i && !o,
    u;
  return ((u = c ? `on-viewport` : a ? `on-mount` : `no-autoplay`), u);
}
function A(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function j(e) {
  return (e.match(I) || []).map(A).join(` `);
}
var M, N, P, F, I, L;
function R() {
  return (R = e(() => {
    (a(),
      m(),
      d(),
      T(),
      r(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((M ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((N ||= {})),
      (P = !1),
      (F = /*#__PURE__*/ s(function (e) {
        let {
            srcType: n,
            srcFile: r,
            srcUrl: a,
            playing: s,
            muted: l,
            playsinline: d,
            controls: p,
            progress: m,
            objectFit: h,
            backgroundColor: g,
            onSeeked: x,
            onPause: C,
            onPlay: w,
            onEnd: T,
            onClick: E,
            onMouseEnter: D,
            onMouseLeave: A,
            onMouseDown: j,
            onMouseUp: M,
            poster: N,
            posterEnabled: F,
            startTime: I,
            volume: L,
            loop: R,
          } = e,
          z = i(),
          B = b(),
          V = i(null),
          H = i(null),
          U = S(),
          W = y(e),
          G = U
            ? `no-autoplay`
            : k({ playingProp: s, muted: l, loop: R, playsinline: d, controls: p }),
          K = U ? !0 : u(z),
          q = I === 100 ? 99.9 : I,
          { play: J, pause: Y, setProgress: X } = O(z);
        (c(() => {
          U || (G !== `on-viewport` && (s ? J() : Y()));
        }, [s, G]),
          c(() => {
            U || (G === `on-viewport` && (K && s ? J() : Y()));
          }, [G, K, s]),
          c(() => {
            if (!P) {
              P = !0;
              return;
            }
            let e = f(m) ? m.get() : (m ?? 0) * 0.01;
            X((e ?? 0) || (q ?? 0) / 100);
          }, [q, r, a, m]),
          c(() => {
            if (f(m)) return m.on(`change`, (e) => X(e));
          }, [m]),
          _(() => {
            V.current !== null && z.current && ((!H && R) || !V.current) && J();
          }),
          v(() => {
            z.current && ((H.current = z.current.ended), (V.current = z.current.paused), Y());
          }));
        let Z = t(() => {
          if (n === `URL`) return a + ``;
          if (n === `Upload`) return r + ``;
        }, [n, r, a, q]);
        return (
          c(() => {
            B && z.current && G === `on-mount` && setTimeout(() => J(), 50);
          }, []),
          c(() => {
            z.current && !l && (z.current.volume = (L ?? 0) / 100);
          }, [L]),
          /*#__PURE__*/ o(`video`, {
            onClick: E,
            onMouseEnter: D,
            onMouseLeave: A,
            onMouseDown: j,
            onMouseUp: M,
            src: Z,
            loop: R,
            ref: z,
            onSeeked: (e) => x?.(e),
            onPause: (e) => C?.(e),
            onPlay: (e) => w?.(e),
            onEnded: (e) => T?.(e),
            autoPlay: G === `on-mount`,
            preload: G === `on-viewport` && !K ? `none` : G !== `on-mount` && F ? `metadata` : `auto`,
            poster: F ? N : void 0,
            onLoadedData: () => {
              z.current &&
                (z.current.currentTime < 0.3 && X((q ?? 0) * 0.01), G === `on-mount` && J());
            },
            controls: p,
            muted: U ? !0 : l,
            playsInline: d,
            style: {
              cursor: E ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: W,
              display: `block`,
              objectFit: h,
              backgroundColor: g,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (D.displayName = `Video`),
      (D.defaultProps = {
        srcType: `URL`,
        srcUrl: `https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4`,
        srcFile: ``,
        posterEnabled: !1,
        controls: !1,
        playing: !0,
        loop: !0,
        muted: !0,
        playsinline: !0,
        restartOnEnter: !1,
        objectFit: `cover`,
        backgroundColor: `rgba(0,0,0,0)`,
        radius: 0,
        volume: 25,
        startTime: 0,
      }),
      (I = /[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu),
      (L = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      p(D, {
        srcType: {
          type: h.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: h.String,
          title: `URL`,
          placeholder: `../example.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
          description: `Hosted video file URL. For YouTube, use the YouTube component.`,
        },
        srcFile: {
          type: h.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: { type: h.Boolean, title: `Playing`, enabledTitle: `Yes`, disabledTitle: `No` },
        posterEnabled: {
          type: h.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: { type: h.Image, title: ` `, hidden: ({ posterEnabled: e }) => !e },
        backgroundColor: { type: h.Color, title: `Background` },
        ...x,
        startTime: { title: `Start Time`, type: h.Number, min: 0, max: 100, step: 0.1, unit: `%` },
        loop: { type: h.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        objectFit: { type: h.Enum, title: `Fit`, options: L, optionTitles: L.map(j) },
        controls: {
          type: h.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
        },
        muted: { type: h.Boolean, title: `Muted`, enabledTitle: `Yes`, disabledTitle: `No` },
        volume: { type: h.Number, max: 100, min: 0, unit: `%`, hidden: ({ muted: e }) => e },
        onEnd: { type: h.EventHandler },
        onSeeked: { type: h.EventHandler },
        onPause: { type: h.EventHandler },
        onPlay: { type: h.EventHandler },
        ...C,
      }));
  }))();
}
export { R as n, D as t };
//# sourceMappingURL=Video.DnHPb52u.mjs.map
