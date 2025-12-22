import { defineComponent as _, ref as w, computed as y, watch as x, createElementBlock as A, openBlock as M, mergeProps as B, readonly as P } from "vue";
import { isProduction as j } from "@hyrioo/vite-plugin-material-symbols-svg";
import { getSymbol as C } from "@hyrioo/vite-plugin-material-symbols-svg/consumer";
const D = ["viewBox", "innerHTML"], L = /* @__PURE__ */ _({
  __name: "h-symbol",
  props: {
    icon: {},
    weight: { default: () => d.weight },
    theme: { default: () => d.theme },
    filled: { type: Boolean, default: () => d.filled },
    fills: { default: "current" },
    strokes: { default: null },
    size: { default: 24 },
    opticalSize: { default: null }
  },
  setup(g) {
    const e = g, m = w(""), p = w("0 0 24 24"), v = y(() => typeof e.size == "object" ? {
      width: e.size.width,
      height: e.size.height
    } : {
      width: e.size,
      height: e.size
    }), z = y(() => typeof e.size == "object" ? Math.max(e.size.height, e.size.width) : e.size);
    function S(n, t, i) {
      if (!n || typeof DOMParser > "u") return n;
      const s = new DOMParser().parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${n}</svg>`, "image/svg+xml").documentElement, u = Array.from(s.children), f = (r, c, o) => {
        o === "keep" || o === null || o === void 0 || r.setAttribute(c, o === "current" ? "currentColor" : o);
      };
      return u.forEach((r, c) => {
        if (Array.isArray(t))
          f(r, "fill", t[c]);
        else if (typeof t == "object" && t !== null) {
          const o = r.getAttribute("id");
          o && t[o] !== void 0 && f(r, "fill", t[o]);
        } else t !== void 0 && f(r, "fill", t);
        if (Array.isArray(i))
          f(r, "stroke", i[c]);
        else if (typeof i == "object" && i !== null) {
          const o = r.getAttribute("id");
          o && i[o] !== void 0 && f(r, "stroke", i[o]);
        } else i !== void 0 && f(r, "stroke", i);
      }), s.innerHTML;
    }
    function b() {
      const n = C({
        icon: String(e.icon),
        theme: e.theme,
        filled: e.filled ? 1 : 0,
        weight: Number(e.weight)
      });
      if (n) {
        const t = e.opticalSize || z.value, i = Object.keys(n).map(Number).sort((s, u) => s - u);
        let h = t;
        !n[t] && i.length > 0 && (h = i.reduce((s, u) => Math.abs(u - t) < Math.abs(s - t) ? u : s));
        const a = n[h];
        if (a) {
          m.value = S(a.content, e.fills, e.strokes), p.value = a.viewBox;
          return;
        }
      }
      m.value = "", d.debug && console.warn(`[h-symbol] Icon not found: ${String(e.icon)} (size ${e.size})`);
    }
    return x(
      () => [e.icon, e.theme, e.filled, e.weight, e.size, e.fills, e.strokes],
      () => b(),
      { deep: !0 }
    ), b(), (n, t) => (M(), A("svg", B({ viewBox: p.value }, v.value, { innerHTML: m.value }), null, 16, D));
  }
});
let l = {
  weight: 400,
  theme: "rounded",
  filled: !1,
  debug: j
};
console.log("h-symbol debug:", l.debug);
function O(g) {
  l = {
    ...l,
    ...g
  };
}
const d = P({
  get weight() {
    return l.weight;
  },
  get theme() {
    return l.theme;
  },
  get filled() {
    return l.filled;
  },
  get debug() {
    return l.debug;
  }
});
export {
  L as HSymbol,
  O as configureSymbolDefaultProps,
  d as symbolDefaultProps
};
//# sourceMappingURL=index.js.map
