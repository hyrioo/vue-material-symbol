import { defineComponent as p, ref as g, computed as b, watch as w, createElementBlock as v, openBlock as z, mergeProps as _, createElementVNode as y, readonly as S } from "vue";
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
    const e = r, u = g(""), a = g("0 0 24 24"), m = b(() => ({
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
        const l = e.opticalSize || e.size, f = Object.keys(o).map(Number).sort((i, n) => i - n);
        let h = l;
        !o[l] && f.length > 0 && (h = f.reduce((i, n) => Math.abs(n - l) < Math.abs(i - l) ? n : i));
        const c = o[h];
        if (c) {
          u.value = c.d, a.value = c.viewBox;
          return;
        }
      }
      u.value = "", s.debug && console.warn(`[h-symbol] Icon not found: ${String(e.icon)} (size ${e.size})`);
    }
    return w(
      () => [e.icon, e.theme, e.filled, e.weight, e.size],
      () => d()
    ), d(), (o, l) => (z(), v("svg", _({ viewBox: a.value }, m.value), [
      y("path", {
        d: u.value,
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
console.log("h-symbol debug:", t.debug);
function P(r) {
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
  P as configureSymbolDefaultProps,
  s as symbolDefaultProps
};
//# sourceMappingURL=index.js.map
