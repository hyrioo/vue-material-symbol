import { defineComponent as p, ref as m, computed as b, watch as w, createElementBlock as v, openBlock as z, mergeProps as _, createElementVNode as y, readonly as S } from "vue";
import { getSymbol as B } from "@hyrioo/vite-plugin-material-symbols-svg/consumer";
const x = ["viewBox"], N = ["d"], D = /* @__PURE__ */ p({
  __name: "h-symbol",
  props: {
    icon: {},
    weight: { default: () => s.weight },
    theme: { default: () => s.theme },
    filled: { type: Boolean, default: () => s.filled },
    size: { default: 24 },
    opticalSize: { default: null }
  },
  setup(r) {
    const e = r, a = m(""), u = m("0 0 24 24"), g = b(() => ({
      width: e.size,
      height: e.size
    }));
    function d() {
      const o = B({
        icon: String(e.icon),
        theme: e.theme,
        filled: e.filled ? 1 : 0,
        weight: Number(e.weight)
      });
      if (o) {
        const i = e.opticalSize || e.size, f = Object.keys(o).map(Number).sort((l, n) => l - n);
        let h = i;
        !o[i] && f.length > 0 && (h = f.reduce((l, n) => Math.abs(n - i) < Math.abs(l - i) ? n : l));
        const c = o[h];
        if (c) {
          a.value = c.d, u.value = c.viewBox;
          return;
        }
      }
      a.value = "", s.debug && console.warn(`[h-symbol] Icon not found: ${String(e.icon)} (size ${e.size})`);
    }
    return w(
      () => [e.icon, e.theme, e.filled, e.weight, e.size],
      () => d()
    ), d(), (o, i) => (z(), v("svg", _({ viewBox: u.value }, g.value), [
      y("path", {
        d: a.value,
        class: "fill-current"
      }, null, 8, N)
    ], 16, x));
  }
});
let t = {
  weight: 400,
  theme: "rounded",
  filled: !1,
  debug: typeof process < "u" && process.env.NODE_ENV !== "production"
};
function C(r) {
  t = {
    ...t,
    ...r
  };
}
const s = S({
  get weight() {
    return t.weight;
  },
  get theme() {
    return t.theme;
  },
  get filled() {
    return t.filled;
  },
  get debug() {
    return t.debug;
  }
});
export {
  D as HSymbol,
  C as configureSymbolDefaults,
  s as symbolDefaultConfig
};
//# sourceMappingURL=index.js.map
