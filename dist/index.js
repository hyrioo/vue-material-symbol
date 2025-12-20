import { defineComponent as d, ref as u, computed as m, watch as p, createElementBlock as g, openBlock as _, mergeProps as w, createElementVNode as v, readonly as z } from "vue";
import { getSymbol as y } from "@hyrioo/vite-plugin-material-symbols-svg/consumer";
const B = {}, S = ["viewBox"], x = ["d"], D = /* @__PURE__ */ d({
  __name: "c-icon",
  props: {
    icon: {},
    weight: { default: () => c.weight },
    theme: { default: () => c.theme },
    fill: { type: Boolean, default: () => c.fill },
    width: { default: void 0 },
    height: { default: void 0 },
    size: { default: 24 }
  },
  setup(i) {
    const e = i, s = u(""), r = u("0 0 24 24"), a = m(() => ({
      width: e.width ?? e.size,
      height: e.height ?? e.size
    }));
    function h(t) {
      return t < 22 ? 20 : t < 32 ? 24 : t < 44 ? 40 : 48;
    }
    function f() {
      const t = e.size, n = h(t), l = y({
        icon: String(e.icon),
        theme: e.theme,
        fill: e.fill ? 1 : 0,
        weight: Number(e.weight),
        size: Number(n)
      });
      l ? (s.value = l.d, r.value = l.viewBox) : (typeof process < "u" && process.env.NODE_ENV !== "production" || typeof B < "u" && !1) && console.warn(`[CIcon] Icon not found: ${String(e.icon)} (size ${n})`);
    }
    return p(
      () => [e.icon, e.theme, e.fill, e.weight, e.size],
      () => f()
    ), f(), (t, n) => (_(), g("svg", w({ viewBox: r.value }, a.value), [
      v("path", {
        class: "fill-current",
        d: s.value
      }, null, 8, x)
    ], 16, S));
  }
});
let o = {
  weight: 400,
  theme: "rounded",
  fill: !1
};
function N(i) {
  o = {
    ...o,
    ...i
  };
}
const c = z({
  get weight() {
    return o.weight;
  },
  get theme() {
    return o.theme;
  },
  get fill() {
    return o.fill;
  }
});
export {
  D as CIcon,
  N as configureSymbolDefaults,
  c as symbolDefaultConfig
};
//# sourceMappingURL=index.js.map
