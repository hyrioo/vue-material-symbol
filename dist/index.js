import { defineComponent as f, ref as r, computed as h, watch as m, createElementBlock as p, openBlock as v, mergeProps as _, createElementVNode as g } from "vue";
const w = {}, a = /* @__PURE__ */ new Map();
function y(t) {
  return `${t.theme}::${t.icon}::${t.fill}::${t.weight}::${t.size}`;
}
function z(t) {
  const e = t.match(/viewBox="([^"]+)"/i), o = t.match(/<path[^>]*\sd="([^"]+)"[^>]*>/i);
  return !e || !o ? null : { viewBox: e[1], d: o[1] };
}
function S(t) {
  const e = y(t);
  let o = a.get(e);
  if (o) return o;
  const i = w[e];
  if (i && (o = z(i) || void 0, o))
    return a.set(e, o), console.log(`[material-symbols-svg] getSymbol: parsed and cached "${e}"`), o;
  console.warn(`[material-symbols-svg] getSymbol: NOT found "${e}"`);
}
const x = {}, B = ["viewBox"], $ = ["d"], I = /* @__PURE__ */ f({
  __name: "c-icon",
  props: {
    icon: {},
    weight: { default: 200 },
    theme: { default: "rounded" },
    fill: { default: 0 },
    width: { default: void 0 },
    height: { default: void 0 },
    size: { default: 24 }
  },
  setup(t) {
    const e = t, o = r(""), i = r("0 0 24 24"), u = h(() => ({
      width: e.width ?? e.size,
      height: e.height ?? e.size
    }));
    function d(n) {
      return n < 22 ? 20 : n < 32 ? 24 : n < 44 ? 40 : 48;
    }
    function l() {
      const n = e.size ?? 24, c = d(n), s = S({
        icon: String(e.icon),
        theme: e.theme ?? "rounded",
        fill: e.fill ?? 0,
        weight: Number(e.weight ?? 200),
        size: Number(c)
      });
      s ? (o.value = s.d, i.value = s.viewBox) : (typeof process < "u" && process.env.NODE_ENV !== "production" || typeof x < "u" && !1) && console.warn(`[CIcon] Icon not found: ${String(e.icon)} (size ${c})`);
    }
    return m(
      () => [e.icon, e.theme, e.fill, e.weight, e.size],
      () => l()
    ), l(), (n, c) => (v(), p("svg", _({ viewBox: i.value }, u.value), [
      g("path", {
        class: "fill-current",
        d: o.value
      }, null, 8, $)
    ], 16, B));
  }
});
export {
  I as CIcon
};
//# sourceMappingURL=index.js.map
