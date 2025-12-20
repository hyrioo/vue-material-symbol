import { defineComponent as f, ref as a, computed as h, watch as m, createElementBlock as p, openBlock as v, mergeProps as g, createElementVNode as _ } from "vue";
function w(t) {
  return `${t.theme}::${t.icon}::${t.fill}::${t.weight}::${t.size}`;
}
function y(t) {
  const e = t.match(/viewBox="([^"]+)"/i), o = t.match(/<path[^>]*\sd="([^"]+)"[^>]*>/i);
  return !e || !o ? null : { viewBox: e[1], d: o[1] };
}
const b = {}, r = /* @__PURE__ */ new Map();
function z(t) {
  const e = w(t);
  console.log("[material-symbols-svg] Get symbol:", e);
  let o = r.get(e);
  if (o) return o;
  const i = b[e];
  if (i && (o = y(i) || void 0, o))
    return r.set(e, o), console.log(`[material-symbols-svg] getSymbol: parsed and cached "${e}"`), o;
  console.warn(`[material-symbols-svg] getSymbol: NOT found "${e}"`);
}
const B = {}, S = ["viewBox"], x = ["d"], I = /* @__PURE__ */ f({
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
  setup(t) {
    const e = t, o = a(""), i = a("0 0 24 24"), u = h(() => ({
      width: e.width ?? e.size,
      height: e.height ?? e.size
    }));
    function d(n) {
      return n < 22 ? 20 : n < 32 ? 24 : n < 44 ? 40 : 48;
    }
    function l() {
      const n = e.size ?? 24, s = d(n), c = z({
        icon: String(e.icon),
        theme: e.theme ?? "rounded",
        fill: e.fill ? 1 : 0,
        weight: Number(e.weight ?? 200),
        size: Number(s)
      });
      c ? (o.value = c.d, i.value = c.viewBox) : (typeof process < "u" && process.env.NODE_ENV !== "production" || typeof B < "u" && !1) && console.warn(`[CIcon] Icon not found: ${String(e.icon)} (size ${s})`);
    }
    return m(
      () => [e.icon, e.theme, e.fill, e.weight, e.size],
      () => l()
    ), l(), (n, s) => (v(), p("svg", g({ viewBox: i.value }, u.value), [
      _("path", {
        class: "fill-current",
        d: o.value
      }, null, 8, x)
    ], 16, S));
  }
});
export {
  I as CIcon
};
//# sourceMappingURL=index.js.map
