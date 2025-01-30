(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".year-picker[data-v-06c32fee]{font-family:Arial,sans-serif;text-align:center}.year-picker .input-container[data-v-06c32fee]{display:flex;align-items:center;justify-content:space-between;position:relative}.year-picker input[data-v-06c32fee]{width:100%;padding:8px;font-size:16px;border:0;border:1px solid #eee}.year-picker .toggle-button[data-v-06c32fee]{padding:8px 10px;font-size:16px;border:1px solid #ccc;background-color:#f0f0f0;border-radius:4px;cursor:pointer}.year-picker .toggle-button[data-v-06c32fee]:hover{background-color:#e0e0e0}.year-picker .dropdown[data-v-06c32fee]{position:absolute;background-color:#fff;border:1px solid #eee;border-radius:0;z-index:10}.year-picker .range-header[data-v-06c32fee]{display:flex;justify-content:space-between;align-items:center;font-size:14px;padding:8px;line-height:20px;color:#000}.year-picker .range-header button[data-v-06c32fee]{background-color:transparent;border:0;cursor:pointer}.year-grid[data-v-06c32fee]{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;padding:0 10px 10px}.year-grid button[data-v-06c32fee]{padding:4px 10px;font-size:16px;outline:0;border:0;background:transparent;border-radius:4px;cursor:pointer}.year-grid button[data-v-06c32fee]:hover{background-color:#007bff;color:#fff;opacity:.5;transition:.3s}.year-grid button.selected[data-v-06c32fee]{transition:.3s;background-color:#007bff;color:#fff;border-color:#007bff}p[data-v-06c32fee]{margin-top:20px;font-size:18px;color:#333}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { defineComponent as B, ref as p, computed as T, onMounted as R, openBlock as _, createElementBlock as f, createElementVNode as a, withDirectives as P, isRef as b, vModelText as V, unref as c, toDisplayString as h, Fragment as D, renderList as E, normalizeClass as F, createCommentVNode as M } from "vue";
const O = { class: "year-picker" }, j = { class: "input-container" }, z = {
  key: 0,
  class: "dropdown"
}, A = { class: "range-header" }, I = ["disabled"], L = ["src"], S = { class: "range-title" }, U = ["src"], W = { class: "year-grid" }, $ = ["onClick"], q = /* @__PURE__ */ B({
  __name: "YearPicker",
  props: {
    year: {
      type: Number,
      default: 114
    },
    icon: {
      type: Object,
      default: () => ({
        prev: "<",
        next: ">"
      })
    }
  },
  emits: ["update:year"],
  setup(r, { emit: g }) {
    const m = r;
    let t = p(0), l = p(0), o = p(!1), i = p(!1), d = 12, s = p({
      start: 2020,
      end: 2029
    });
    const y = T(() => Array.from({ length: d }, (e, u) => s.value.start + u)), Y = g, k = () => {
      setTimeout(() => {
        i.value || (o.value = !1);
      }, 200);
      const e = t.value;
      !isNaN(e) && e >= 1 && e <= 300 ? l.value = N(e) : t.value = v(l.value);
    }, x = () => {
      i.value = !0, !(s.value.start < 1911) && (s.value.start -= d, s.value.end -= d, setTimeout(() => {
        i.value = !1;
      }, 200));
    }, C = () => {
      i.value = !0, s.value.start += d, s.value.end += d, setTimeout(() => i.value = !1, 200);
    }, v = (e) => e - 1911, N = (e) => Number(e) + 1911, w = (e) => {
      l.value = e, t.value = v(e), o.value = !1, Y("update:year", Number(e) - 1911);
    };
    return R(() => {
      t.value = m.year, k();
    }), (e, u) => (_(), f("div", O, [
      a("div", j, [
        P(a("input", {
          "onUpdate:modelValue": u[0] || (u[0] = (n) => b(t) ? t.value = n : t = n),
          type: "text",
          placeholder: "輸入民國年份或點擊選擇",
          onFocus: u[1] || (u[1] = (n) => b(o) ? o.value = !0 : o = !0),
          onBlur: k
        }, null, 544), [
          [V, c(t)]
        ])
      ]),
      c(o) ? (_(), f("div", z, [
        a("div", A, [
          a("button", {
            class: "btn bg-transparent",
            onClick: x,
            disabled: c(s).start < 1913
          }, [
            a("img", {
              width: "20",
              src: r.icon.prev,
              alt: ""
            }, null, 8, L)
          ], 8, I),
          a("span", S, " 民國 " + h(v(c(s).start)) + " ~ " + h(v(c(s).end)), 1),
          a("button", {
            class: "btn bg-transparent",
            onClick: C
          }, [
            a("img", {
              width: "20",
              src: r.icon.next,
              alt: ""
            }, null, 8, U)
          ])
        ]),
        a("div", W, [
          (_(!0), f(D, null, E(y.value, (n) => (_(), f("button", {
            key: n,
            onClick: (H) => w(n),
            class: F({ selected: n === c(l) })
          }, h(v(n)), 11, $))), 128))
        ])
      ])) : M("", !0)
    ]));
  }
}), G = (r, g) => {
  const m = r.__vccOpts || r;
  for (const [t, l] of g)
    m[t] = l;
  return m;
}, K = /* @__PURE__ */ G(q, [["__scopeId", "data-v-06c32fee"]]);
export {
  K as default
};
