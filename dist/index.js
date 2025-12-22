import { defineComponent as b, ref as g, computed as p, watch as w, createElementBlock as v, openBlock as z, mergeProps as y, readonly as S } from "vue";
import { isProduction as _ } from "@hyrioo/vite-plugin-material-symbols-svg";
import { getSymbol as B } from "@hyrioo/vite-plugin-material-symbols-svg/consumer";
const x = ["viewBox", "innerHTML"], H = /* @__PURE__ */ b({
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
    const e = r, u = g(""), a = g("0 0 24 24"), h = p(() => ({
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
        const i = e.opticalSize || e.size, f = Object.keys(o).map(Number).sort((n, l) => n - l);
        let m = i;
        !o[i] && f.length > 0 && (m = f.reduce((n, l) => Math.abs(l - i) < Math.abs(n - i) ? l : n));
        const c = o[m];
        if (c) {
          u.value = c.content, a.value = c.viewBox;
          return;
        }
      }
      u.value = "", s.debug && console.warn(`[h-symbol] Icon not found: ${String(e.icon)} (size ${e.size})`);
    }
    return w(
      () => [e.icon, e.theme, e.filled, e.weight, e.size],
      () => d()
    ), d(), (o, i) => (z(), v("svg", y({ viewBox: a.value }, h.value, { innerHTML: u.value }), null, 16, x));
  }
});
let t = {
  weight: 400,
  theme: "rounded",
  filled: !1,
  debug: _
};
console.log("h-symbol debug:", t.debug);
function D(r) {
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
  H as HSymbol,
  D as configureSymbolDefaultProps,
  s as symbolDefaultProps
};
//# sourceMappingURL=index.js.map
