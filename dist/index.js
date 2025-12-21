import { defineComponent as h, ref as d, computed as m, watch as g, createElementBlock as p, openBlock as w, mergeProps as v, createElementVNode as b, readonly as _ } from "vue";
import { getSymbol as z } from "@hyrioo/vite-plugin-material-symbols-svg/consumer";
const y = ["viewBox"], B = ["d"], N = /* @__PURE__ */ h({
  __name: "h-symbol",
  props: {
    icon: {},
    weight: { default: () => i.weight },
    theme: { default: () => i.theme },
    filled: { type: Boolean, default: () => i.filled },
    size: { default: 24 },
    opticalSize: { default: null }
  },
  setup(n) {
    const e = n, l = d(""), c = d("0 0 24 24"), f = m(() => ({
      width: e.size,
      height: e.size
    }));
    function a(t) {
      return t < 22 ? 20 : t < 32 ? 24 : t < 44 ? 40 : 48;
    }
    function r() {
      const t = e.size, s = a(t), u = z({
        icon: String(e.icon),
        theme: e.theme,
        filled: e.filled ? 1 : 0,
        weight: Number(e.weight),
        size: Number(s)
      });
      u ? (l.value = u.d, c.value = u.viewBox) : (l.value = "", i.debug && console.warn(`[h-symbol] Icon not found: ${String(e.icon)} (size ${s})`));
    }
    return g(
      () => [e.icon, e.theme, e.filled, e.weight, e.size],
      () => r()
    ), r(), (t, s) => (w(), p("svg", v({ viewBox: c.value }, f.value), [
      b("path", {
        d: l.value,
        class: "fill-current"
      }, null, 8, B)
    ], 16, y));
  }
});
let o = {
  weight: 400,
  theme: "rounded",
  filled: !1,
  debug: typeof process < "u" && process.env.NODE_ENV !== "production"
};
function E(n) {
  o = {
    ...o,
    ...n
  };
}
const i = _({
  get weight() {
    return o.weight;
  },
  get theme() {
    return o.theme;
  },
  get filled() {
    return o.filled;
  },
  get debug() {
    return o.debug;
  }
});
export {
  N as HSymbol,
  E as configureSymbolDefaults,
  i as symbolDefaultConfig
};
//# sourceMappingURL=index.js.map
