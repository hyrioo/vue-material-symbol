import { defineComponent as d, ref as l, computed as f, watch as h, createElementBlock as p, openBlock as m, mergeProps as _, createElementVNode as v } from "vue";
import { getSymbol as g } from "@hyrioo/vite-plugin-material-symbols-svg/consumer";
const w = {}, z = ["viewBox"], B = ["d"], S = /* @__PURE__ */ d({
  __name: "c-icon",
  props: {
    icon: {},
    weight: { default: 200 },
    theme: { default: "rounded" },
    fill: { type: Boolean, default: !1 },
    width: { default: void 0 },
    height: { default: void 0 },
    size: { default: 24 }
  },
  setup(r) {
    const e = r, n = l(""), c = l("0 0 24 24"), a = f(() => ({
      width: e.width ?? e.size,
      height: e.height ?? e.size
    }));
    function u(t) {
      return t < 22 ? 20 : t < 32 ? 24 : t < 44 ? 40 : 48;
    }
    function s() {
      const t = e.size ?? 24, o = u(t), i = g({
        icon: String(e.icon),
        theme: e.theme ?? "rounded",
        fill: e.fill ? 1 : 0,
        weight: Number(e.weight ?? 200),
        size: Number(o)
      });
      i ? (n.value = i.d, c.value = i.viewBox) : (typeof process < "u" && process.env.NODE_ENV !== "production" || typeof w < "u" && !1) && console.warn(`[CIcon] Icon not found: ${String(e.icon)} (size ${o})`);
    }
    return h(
      () => [e.icon, e.theme, e.fill, e.weight, e.size],
      () => s()
    ), s(), (t, o) => (m(), p("svg", _({ viewBox: c.value }, a.value), [
      v("path", {
        class: "fill-current",
        d: n.value
      }, null, 8, B)
    ], 16, z));
  }
});
export {
  S as CIcon
};
//# sourceMappingURL=index.js.map
