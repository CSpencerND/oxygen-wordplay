import {
  MEDIA_FRAGMENT,
  PRODUCT_CARD_FRAGMENT
} from "/build/_shared/chunk-YADXHAZD.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import "/build/_shared/chunk-IRGYCFTS.js";
import {
  require_seo
} from "/build/_shared/chunk-3J4QUTWW.js";
import {
  A,
  AddToCartButton,
  Button,
  C,
  D,
  F,
  Heading,
  I,
  IconCaret,
  IconCheck,
  IconClose,
  L,
  L2,
  Link,
  P,
  ProductGallery,
  ProductSwimlane,
  Section,
  Skeleton,
  Text,
  a,
  c,
  c2,
  clsx_m_default,
  d,
  e,
  h,
  j,
  l,
  o,
  o2,
  o3,
  p,
  p2,
  r,
  s,
  s2,
  u,
  u2,
  ve,
  x,
  y
} from "/build/_shared/chunk-AGWOE2FP.js";
import {
  getExcerpt
} from "/build/_shared/chunk-QFIHVZBB.js";
import {
  Money,
  ShopPayButton
} from "/build/_shared/chunk-CVOFPAJN.js";
import "/build/_shared/chunk-F6XALK7G.js";
import "/build/_shared/chunk-WTEBH5IU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XWEF3JE5.js";
import {
  Await,
  require_react,
  useLoaderData,
  useLocation,
  useSearchParams,
  useTransition
} from "/build/_shared/chunk-7LJUK6MV.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($lang)/products/$productHandle.tsx
var import_react4 = __toESM(require_react());

// node_modules/@headlessui/react/dist/hooks/use-computed.js
var import_react = __toESM(require_react(), 1);
function i(e3, o5) {
  let [u3, t] = (0, import_react.useState)(e3), r2 = s(e3);
  return l(() => t(r2.current), [r2, t, ...o5]), u3;
}

// node_modules/@headlessui/react/dist/utils/form.js
function e2(n = {}, r2 = null, t = []) {
  for (let [i2, o5] of Object.entries(n))
    f(t, s4(r2, i2), o5);
  return t;
}
function s4(n, r2) {
  return n ? n + "[" + r2 + "]" : r2;
}
function f(n, r2, t) {
  if (Array.isArray(t))
    for (let [i2, o5] of t.entries())
      f(n, s4(r2, i2.toString()), o5);
  else
    t instanceof Date ? n.push([r2, t.toISOString()]) : typeof t == "boolean" ? n.push([r2, t ? "1" : "0"]) : typeof t == "string" ? n.push([r2, t]) : typeof t == "number" ? n.push([r2, `${t}`]) : t == null ? n.push([r2, ""]) : e2(t, r2, n);
}

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react2 = __toESM(require_react(), 1);
function T(l2, r2, c3) {
  let [i2, s5] = (0, import_react2.useState)(c3), e3 = l2 !== void 0, t = (0, import_react2.useRef)(e3), u3 = (0, import_react2.useRef)(false), d2 = (0, import_react2.useRef)(false);
  return e3 && !t.current && !u3.current ? (u3.current = true, t.current = e3, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e3 && t.current && !d2.current && (d2.current = true, t.current = e3, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e3 ? l2 : i2, o2((n) => (e3 || s5(n), r2 == null ? void 0 : r2(n)))];
}

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var import_react3 = __toESM(require_react(), 1);
var _e = ((o5) => (o5[o5.Open = 0] = "Open", o5[o5.Closed = 1] = "Closed", o5))(_e || {});
var Ue = ((o5) => (o5[o5.Single = 0] = "Single", o5[o5.Multi = 1] = "Multi", o5))(Ue || {});
var Be = ((o5) => (o5[o5.Pointer = 0] = "Pointer", o5[o5.Other = 1] = "Other", o5))(Be || {});
var He = ((i2) => (i2[i2.OpenListbox = 0] = "OpenListbox", i2[i2.CloseListbox = 1] = "CloseListbox", i2[i2.GoToOption = 2] = "GoToOption", i2[i2.Search = 3] = "Search", i2[i2.ClearSearch = 4] = "ClearSearch", i2[i2.RegisterOption = 5] = "RegisterOption", i2[i2.UnregisterOption = 6] = "UnregisterOption", i2[i2.RegisterLabel = 7] = "RegisterLabel", i2))(He || {});
function $(e3, r2 = (o5) => o5) {
  let o5 = e3.activeOptionIndex !== null ? e3.options[e3.activeOptionIndex] : null, n = A(r2(e3.options.slice()), (t) => t.dataRef.current.domRef.current), a2 = o5 ? n.indexOf(o5) : null;
  return a2 === -1 && (a2 = null), { options: n, activeOptionIndex: a2 };
}
var Ge = { [1](e3) {
  return e3.dataRef.current.disabled || e3.listboxState === 1 ? e3 : { ...e3, activeOptionIndex: null, listboxState: 1 };
}, [0](e3) {
  if (e3.dataRef.current.disabled || e3.listboxState === 0)
    return e3;
  let r2 = e3.activeOptionIndex, { isSelected: o5 } = e3.dataRef.current, n = e3.options.findIndex((a2) => o5(a2.dataRef.current.value));
  return n !== -1 && (r2 = n), { ...e3, listboxState: 0, activeOptionIndex: r2 };
}, [2](e3, r2) {
  var a2;
  if (e3.dataRef.current.disabled || e3.listboxState === 1)
    return e3;
  let o5 = $(e3), n = x(r2, { resolveItems: () => o5.options, resolveActiveIndex: () => o5.activeOptionIndex, resolveId: (t) => t.id, resolveDisabled: (t) => t.dataRef.current.disabled });
  return { ...e3, ...o5, searchQuery: "", activeOptionIndex: n, activationTrigger: (a2 = r2.trigger) != null ? a2 : 1 };
}, [3]: (e3, r2) => {
  if (e3.dataRef.current.disabled || e3.listboxState === 1)
    return e3;
  let n = e3.searchQuery !== "" ? 0 : 1, a2 = e3.searchQuery + r2.value.toLowerCase(), u3 = (e3.activeOptionIndex !== null ? e3.options.slice(e3.activeOptionIndex + n).concat(e3.options.slice(0, e3.activeOptionIndex + n)) : e3.options).find((i2) => {
    var b;
    return !i2.dataRef.current.disabled && ((b = i2.dataRef.current.textValue) == null ? void 0 : b.startsWith(a2));
  }), c3 = u3 ? e3.options.indexOf(u3) : -1;
  return c3 === -1 || c3 === e3.activeOptionIndex ? { ...e3, searchQuery: a2 } : { ...e3, searchQuery: a2, activeOptionIndex: c3, activationTrigger: 1 };
}, [4](e3) {
  return e3.dataRef.current.disabled || e3.listboxState === 1 || e3.searchQuery === "" ? e3 : { ...e3, searchQuery: "" };
}, [5]: (e3, r2) => {
  let o5 = { id: r2.id, dataRef: r2.dataRef }, n = $(e3, (a2) => [...a2, o5]);
  return e3.activeOptionIndex === null && e3.dataRef.current.isSelected(r2.dataRef.current.value) && (n.activeOptionIndex = n.options.indexOf(o5)), { ...e3, ...n };
}, [6]: (e3, r2) => {
  let o5 = $(e3, (n) => {
    let a2 = n.findIndex((t) => t.id === r2.id);
    return a2 !== -1 && n.splice(a2, 1), n;
  });
  return { ...e3, ...o5, activationTrigger: 1 };
}, [7]: (e3, r2) => ({ ...e3, labelId: r2.id }) };
var z = (0, import_react3.createContext)(null);
z.displayName = "ListboxActionsContext";
function U(e3) {
  let r2 = (0, import_react3.useContext)(z);
  if (r2 === null) {
    let o5 = new Error(`<${e3} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o5, U), o5;
  }
  return r2;
}
var J = (0, import_react3.createContext)(null);
J.displayName = "ListboxDataContext";
function B(e3) {
  let r2 = (0, import_react3.useContext)(J);
  if (r2 === null) {
    let o5 = new Error(`<${e3} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o5, B), o5;
  }
  return r2;
}
function Ne(e3, r2) {
  return u(r2.type, Ge, e3, r2);
}
var je = import_react3.Fragment;
function Ve(e3, r2) {
  let { value: o5, defaultValue: n, name: a2, onChange: t, by: u3 = (s5, f3) => s5 === f3, disabled: c3 = false, horizontal: i2 = false, multiple: b = false, ...A2 } = e3;
  const m = i2 ? "horizontal" : "vertical";
  let P2 = y(r2), [g = b ? [] : void 0, v] = T(o5, t, n), [S, p3] = (0, import_react3.useReducer)(Ne, { dataRef: (0, import_react3.createRef)(), listboxState: 1, options: [], searchQuery: "", labelId: null, activeOptionIndex: null, activationTrigger: 1 }), l2 = (0, import_react3.useRef)({ static: false, hold: false }), x2 = (0, import_react3.useRef)(null), E = (0, import_react3.useRef)(null), W = (0, import_react3.useRef)(null), C2 = o2(typeof u3 == "string" ? (s5, f3) => {
    let O = u3;
    return (s5 == null ? void 0 : s5[O]) === (f3 == null ? void 0 : f3[O]);
  } : u3), L3 = (0, import_react3.useCallback)((s5) => u(d2.mode, { [1]: () => g.some((f3) => C2(f3, s5)), [0]: () => C2(g, s5) }), [g]), d2 = (0, import_react3.useMemo)(() => ({ ...S, value: g, disabled: c3, mode: b ? 1 : 0, orientation: m, compare: C2, isSelected: L3, optionsPropsRef: l2, labelRef: x2, buttonRef: E, optionsRef: W }), [g, c3, b, S]);
  l(() => {
    S.dataRef.current = d2;
  }, [d2]), L([d2.buttonRef, d2.optionsRef], (s5, f3) => {
    var O;
    p3({ type: 1 }), h(f3, F.Loose) || (s5.preventDefault(), (O = d2.buttonRef.current) == null || O.focus());
  }, d2.listboxState === 0);
  let H = (0, import_react3.useMemo)(() => ({ open: d2.listboxState === 0, disabled: c3, value: g }), [d2, c3, g]), ne = o2((s5) => {
    let f3 = d2.options.find((O) => O.id === s5);
    f3 && F2(f3.dataRef.current.value);
  }), ie = o2(() => {
    if (d2.activeOptionIndex !== null) {
      let { dataRef: s5, id: f3 } = d2.options[d2.activeOptionIndex];
      F2(s5.current.value), p3({ type: 2, focus: a.Specific, id: f3 });
    }
  }), re = o2(() => p3({ type: 0 })), ae = o2(() => p3({ type: 1 })), le = o2((s5, f3, O) => s5 === a.Specific ? p3({ type: 2, focus: a.Specific, id: f3, trigger: O }) : p3({ type: 2, focus: s5, trigger: O })), se = o2((s5, f3) => (p3({ type: 5, id: s5, dataRef: f3 }), () => p3({ type: 6, id: s5 }))), pe = o2((s5) => (p3({ type: 7, id: s5 }), () => p3({ type: 7, id: null }))), F2 = o2((s5) => u(d2.mode, { [0]() {
    return v == null ? void 0 : v(s5);
  }, [1]() {
    let f3 = d2.value.slice(), O = f3.findIndex((M) => C2(M, s5));
    return O === -1 ? f3.push(s5) : f3.splice(O, 1), v == null ? void 0 : v(f3);
  } })), ue = o2((s5) => p3({ type: 3, value: s5 })), de = o2(() => p3({ type: 4 })), ce = (0, import_react3.useMemo)(() => ({ onChange: F2, registerOption: se, registerLabel: pe, goToOption: le, closeListbox: ae, openListbox: re, selectActiveOption: ie, selectOption: ne, search: ue, clearSearch: de }), []), fe = { ref: P2 }, G = (0, import_react3.useRef)(null), Te = p();
  return (0, import_react3.useEffect)(() => {
    G.current && n !== void 0 && Te.addEventListener(G.current, "reset", () => {
      F2(n);
    });
  }, [G, F2]), import_react3.default.createElement(z.Provider, { value: ce }, import_react3.default.createElement(J.Provider, { value: d2 }, import_react3.default.createElement(c2, { value: u(d2.listboxState, { [0]: d.Open, [1]: d.Closed }) }, a2 != null && g != null && e2({ [a2]: g }).map(([s5, f3], O) => import_react3.default.createElement(c, { features: p2.Hidden, ref: O === 0 ? (M) => {
    var q;
    G.current = (q = M == null ? void 0 : M.closest("form")) != null ? q : null;
  } : void 0, ...P({ key: s5, as: "input", type: "hidden", hidden: true, readOnly: true, name: s5, value: f3 }) })), D({ ourProps: fe, theirProps: A2, slot: H, defaultTag: je, name: "Listbox" }))));
}
var Ke = "button";
function Qe(e3, r2) {
  var S;
  let o5 = I(), { id: n = `headlessui-listbox-button-${o5}`, ...a2 } = e3, t = B("Listbox.Button"), u3 = U("Listbox.Button"), c3 = y(t.buttonRef, r2), i2 = p(), b = o2((p3) => {
    switch (p3.key) {
      case o3.Space:
      case o3.Enter:
      case o3.ArrowDown:
        p3.preventDefault(), u3.openListbox(), i2.nextFrame(() => {
          t.value || u3.goToOption(a.First);
        });
        break;
      case o3.ArrowUp:
        p3.preventDefault(), u3.openListbox(), i2.nextFrame(() => {
          t.value || u3.goToOption(a.Last);
        });
        break;
    }
  }), A2 = o2((p3) => {
    switch (p3.key) {
      case o3.Space:
        p3.preventDefault();
        break;
    }
  }), m = o2((p3) => {
    if (r(p3.currentTarget))
      return p3.preventDefault();
    t.listboxState === 0 ? (u3.closeListbox(), i2.nextFrame(() => {
      var l2;
      return (l2 = t.buttonRef.current) == null ? void 0 : l2.focus({ preventScroll: true });
    })) : (p3.preventDefault(), u3.openListbox());
  }), P2 = i(() => {
    if (t.labelId)
      return [t.labelId, n].join(" ");
  }, [t.labelId, n]), g = (0, import_react3.useMemo)(() => ({ open: t.listboxState === 0, disabled: t.disabled, value: t.value }), [t]), v = { ref: c3, id: n, type: s2(e3, t.buttonRef), "aria-haspopup": "listbox", "aria-controls": (S = t.optionsRef.current) == null ? void 0 : S.id, "aria-expanded": t.disabled ? void 0 : t.listboxState === 0, "aria-labelledby": P2, disabled: t.disabled, onKeyDown: b, onKeyUp: A2, onClick: m };
  return D({ ourProps: v, theirProps: a2, slot: g, defaultTag: Ke, name: "Listbox.Button" });
}
var We = "label";
function Xe(e3, r2) {
  let o5 = I(), { id: n = `headlessui-listbox-label-${o5}`, ...a2 } = e3, t = B("Listbox.Label"), u3 = U("Listbox.Label"), c3 = y(t.labelRef, r2);
  l(() => u3.registerLabel(n), [n]);
  let i2 = o2(() => {
    var m;
    return (m = t.buttonRef.current) == null ? void 0 : m.focus({ preventScroll: true });
  }), b = (0, import_react3.useMemo)(() => ({ open: t.listboxState === 0, disabled: t.disabled }), [t]);
  return D({ ourProps: { ref: c3, id: n, onClick: i2 }, theirProps: a2, slot: b, defaultTag: We, name: "Listbox.Label" });
}
var $e = "ul";
var ze = j.RenderStrategy | j.Static;
function Je(e3, r2) {
  var p3;
  let o5 = I(), { id: n = `headlessui-listbox-options-${o5}`, ...a2 } = e3, t = B("Listbox.Options"), u3 = U("Listbox.Options"), c3 = y(t.optionsRef, r2), i2 = p(), b = p(), A2 = C(), m = (() => A2 !== null ? (A2 & d.Open) === d.Open : t.listboxState === 0)();
  (0, import_react3.useEffect)(() => {
    var x2;
    let l2 = t.optionsRef.current;
    l2 && t.listboxState === 0 && l2 !== ((x2 = e(l2)) == null ? void 0 : x2.activeElement) && l2.focus({ preventScroll: true });
  }, [t.listboxState, t.optionsRef]);
  let P2 = o2((l2) => {
    switch (b.dispose(), l2.key) {
      case o3.Space:
        if (t.searchQuery !== "")
          return l2.preventDefault(), l2.stopPropagation(), u3.search(l2.key);
      case o3.Enter:
        if (l2.preventDefault(), l2.stopPropagation(), t.activeOptionIndex !== null) {
          let { dataRef: x2 } = t.options[t.activeOptionIndex];
          u3.onChange(x2.current.value);
        }
        t.mode === 0 && (u3.closeListbox(), o().nextFrame(() => {
          var x2;
          return (x2 = t.buttonRef.current) == null ? void 0 : x2.focus({ preventScroll: true });
        }));
        break;
      case u(t.orientation, { vertical: o3.ArrowDown, horizontal: o3.ArrowRight }):
        return l2.preventDefault(), l2.stopPropagation(), u3.goToOption(a.Next);
      case u(t.orientation, { vertical: o3.ArrowUp, horizontal: o3.ArrowLeft }):
        return l2.preventDefault(), l2.stopPropagation(), u3.goToOption(a.Previous);
      case o3.Home:
      case o3.PageUp:
        return l2.preventDefault(), l2.stopPropagation(), u3.goToOption(a.First);
      case o3.End:
      case o3.PageDown:
        return l2.preventDefault(), l2.stopPropagation(), u3.goToOption(a.Last);
      case o3.Escape:
        return l2.preventDefault(), l2.stopPropagation(), u3.closeListbox(), i2.nextFrame(() => {
          var x2;
          return (x2 = t.buttonRef.current) == null ? void 0 : x2.focus({ preventScroll: true });
        });
      case o3.Tab:
        l2.preventDefault(), l2.stopPropagation();
        break;
      default:
        l2.key.length === 1 && (u3.search(l2.key), b.setTimeout(() => u3.clearSearch(), 350));
        break;
    }
  }), g = i(() => {
    var l2, x2, E;
    return (E = (l2 = t.labelRef.current) == null ? void 0 : l2.id) != null ? E : (x2 = t.buttonRef.current) == null ? void 0 : x2.id;
  }, [t.labelRef.current, t.buttonRef.current]), v = (0, import_react3.useMemo)(() => ({ open: t.listboxState === 0 }), [t]), S = { "aria-activedescendant": t.activeOptionIndex === null || (p3 = t.options[t.activeOptionIndex]) == null ? void 0 : p3.id, "aria-multiselectable": t.mode === 1 ? true : void 0, "aria-labelledby": g, "aria-orientation": t.orientation, id: n, onKeyDown: P2, role: "listbox", tabIndex: 0, ref: c3 };
  return D({ ourProps: S, theirProps: a2, slot: v, defaultTag: $e, features: ze, visible: m, name: "Listbox.Options" });
}
var qe = "li";
function Ye(e3, r2) {
  let o5 = I(), { id: n = `headlessui-listbox-option-${o5}`, disabled: a2 = false, value: t, ...u3 } = e3, c3 = B("Listbox.Option"), i2 = U("Listbox.Option"), b = c3.activeOptionIndex !== null ? c3.options[c3.activeOptionIndex].id === n : false, A2 = c3.isSelected(t), m = (0, import_react3.useRef)(null), P2 = s({ disabled: a2, value: t, domRef: m, get textValue() {
    var L3, d2;
    return (d2 = (L3 = m.current) == null ? void 0 : L3.textContent) == null ? void 0 : d2.toLowerCase();
  } }), g = y(r2, m);
  l(() => {
    if (c3.listboxState !== 0 || !b || c3.activationTrigger === 0)
      return;
    let L3 = o();
    return L3.requestAnimationFrame(() => {
      var d2, H;
      (H = (d2 = m.current) == null ? void 0 : d2.scrollIntoView) == null || H.call(d2, { block: "nearest" });
    }), L3.dispose;
  }, [m, b, c3.listboxState, c3.activationTrigger, c3.activeOptionIndex]), l(() => i2.registerOption(n, P2), [P2, n]);
  let v = o2((L3) => {
    if (a2)
      return L3.preventDefault();
    i2.onChange(t), c3.mode === 0 && (i2.closeListbox(), o().nextFrame(() => {
      var d2;
      return (d2 = c3.buttonRef.current) == null ? void 0 : d2.focus({ preventScroll: true });
    }));
  }), S = o2(() => {
    if (a2)
      return i2.goToOption(a.Nothing);
    i2.goToOption(a.Specific, n);
  }), p3 = u2(), l2 = o2((L3) => p3.update(L3)), x2 = o2((L3) => {
    p3.wasMoved(L3) && (a2 || b || i2.goToOption(a.Specific, n, 0));
  }), E = o2((L3) => {
    p3.wasMoved(L3) && (a2 || b && i2.goToOption(a.Nothing));
  }), W = (0, import_react3.useMemo)(() => ({ active: b, selected: A2, disabled: a2 }), [b, A2, a2]);
  return D({ ourProps: { id: n, ref: g, role: "option", tabIndex: a2 === true ? void 0 : -1, "aria-disabled": a2 === true ? true : void 0, "aria-selected": A2, disabled: void 0, onClick: v, onFocus: S, onPointerEnter: l2, onMouseEnter: l2, onPointerMove: x2, onMouseMove: x2, onPointerLeave: E, onMouseLeave: E }, theirProps: u3, slot: W, defaultTag: qe, name: "Listbox.Option" });
}
var Ze = L2(Ve);
var et = L2(Qe);
var tt = L2(Xe);
var ot = L2(Je);
var nt = L2(Ye);
var Bt = Object.assign(Ze, { Button: et, Label: tt, Options: ot, Option: nt });

// app/routes/($lang)/products/$productHandle.tsx
var import_seo = __toESM(require_seo());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Product() {
  const { product, shop, recommended } = useLoaderData();
  const { media, title, vendor, descriptionHtml } = product;
  const { shippingPolicy, refundPolicy } = shop;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { padding: "x", className: "px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid items-start md:gap-6 lg:gap-20 md:grid-cols-2 lg:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        ProductGallery,
        {
          media: media.nodes,
          className: "w-screen md:w-full lg:col-span-2"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 127,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sticky md:-mb-nav md:top-nav md:-translate-y-nav md:h-screen md:pt-nav hiddenScroll md:overflow-y-scroll", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex flex-col w-full max-w-xl gap-8 p-6 md:mx-auto md:max-w-sm md:px-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { as: "h1", className: "whitespace-normal", children: title }, void 0, false, {
            fileName: "app/routes/($lang)/products/$productHandle.tsx",
            lineNumber: 134,
            columnNumber: 17
          }, this),
          vendor && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "opacity-50 font-medium", children: vendor }, void 0, false, {
            fileName: "app/routes/($lang)/products/$productHandle.tsx",
            lineNumber: 138,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 133,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductForm, {}, void 0, false, {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 141,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 py-4", children: [
          descriptionHtml && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ProductDetail,
            {
              title: "Product Details",
              content: descriptionHtml
            },
            void 0,
            false,
            {
              fileName: "app/routes/($lang)/products/$productHandle.tsx",
              lineNumber: 144,
              columnNumber: 19
            },
            this
          ),
          shippingPolicy?.body && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ProductDetail,
            {
              title: "Shipping",
              content: getExcerpt(shippingPolicy.body),
              learnMore: `/policies/${shippingPolicy.handle}`
            },
            void 0,
            false,
            {
              fileName: "app/routes/($lang)/products/$productHandle.tsx",
              lineNumber: 150,
              columnNumber: 19
            },
            this
          ),
          refundPolicy?.body && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ProductDetail,
            {
              title: "Returns",
              content: getExcerpt(refundPolicy.body),
              learnMore: `/policies/${refundPolicy.handle}`
            },
            void 0,
            false,
            {
              fileName: "app/routes/($lang)/products/$productHandle.tsx",
              lineNumber: 157,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 142,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($lang)/products/$productHandle.tsx",
        lineNumber: 132,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/($lang)/products/$productHandle.tsx",
        lineNumber: 131,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($lang)/products/$productHandle.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/products/$productHandle.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-32" }, void 0, false, {
      fileName: "app/routes/($lang)/products/$productHandle.tsx",
      lineNumber: 168,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Await,
      {
        errorElement: "There was a problem loading related products",
        resolve: recommended,
        children: (products) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductSwimlane, { title: "Related Products", products }, void 0, false, {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 174,
          columnNumber: 13
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/($lang)/products/$productHandle.tsx",
        lineNumber: 169,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($lang)/products/$productHandle.tsx",
      lineNumber: 168,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/products/$productHandle.tsx",
    lineNumber: 124,
    columnNumber: 5
  }, this);
}
function ProductForm() {
  const { product, analytics, storeDomain } = useLoaderData();
  const [currentSearchParams] = useSearchParams();
  const transition = useTransition();
  const searchParams = (0, import_react4.useMemo)(() => {
    return transition.location ? new URLSearchParams(transition.location.search) : currentSearchParams;
  }, [currentSearchParams, transition]);
  const firstVariant = product.variants.nodes[0];
  const searchParamsWithDefaults = (0, import_react4.useMemo)(() => {
    const clonedParams = new URLSearchParams(searchParams);
    for (const { name, value } of firstVariant.selectedOptions) {
      if (!searchParams.has(name)) {
        clonedParams.set(name, value);
      }
    }
    return clonedParams;
  }, [searchParams, firstVariant.selectedOptions]);
  const selectedVariant = product.selectedVariant ?? firstVariant;
  const isOutOfStock = !selectedVariant?.availableForSale;
  const isOnSale = selectedVariant?.price?.amount && selectedVariant?.compareAtPrice?.amount && selectedVariant?.price?.amount < selectedVariant?.compareAtPrice?.amount;
  const productAnalytics = {
    ...analytics.products[0],
    quantity: 1
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      ProductOptions,
      {
        options: product.options,
        searchParamsWithDefaults
      },
      void 0,
      false,
      {
        fileName: "app/routes/($lang)/products/$productHandle.tsx",
        lineNumber: 240,
        columnNumber: 9
      },
      this
    ),
    selectedVariant && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid items-stretch gap-4", children: [
      isOutOfStock ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", disabled: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Sold out" }, void 0, false, {
        fileName: "app/routes/($lang)/products/$productHandle.tsx",
        lineNumber: 248,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/($lang)/products/$productHandle.tsx",
        lineNumber: 247,
        columnNumber: 15
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        AddToCartButton,
        {
          lines: [
            {
              merchandiseId: selectedVariant.id,
              quantity: 1
            }
          ],
          variant: "primary",
          "data-test": "add-to-cart",
          analytics: {
            products: [productAnalytics],
            totalValue: parseFloat(productAnalytics.price)
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Text,
            {
              as: "span",
              className: "flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Add to Bag" }, void 0, false, {
                  fileName: "app/routes/($lang)/products/$productHandle.tsx",
                  lineNumber: 269,
                  columnNumber: 19
                }, this),
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\xB7" }, void 0, false, {
                  fileName: "app/routes/($lang)/products/$productHandle.tsx",
                  lineNumber: 269,
                  columnNumber: 43
                }, this),
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Money,
                  {
                    withoutTrailingZeros: true,
                    data: selectedVariant?.price,
                    as: "span"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/($lang)/products/$productHandle.tsx",
                    lineNumber: 270,
                    columnNumber: 19
                  },
                  this
                ),
                isOnSale && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Money,
                  {
                    withoutTrailingZeros: true,
                    data: selectedVariant?.compareAtPrice,
                    as: "span",
                    className: "opacity-50 strike"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/($lang)/products/$productHandle.tsx",
                    lineNumber: 276,
                    columnNumber: 21
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/($lang)/products/$productHandle.tsx",
              lineNumber: 265,
              columnNumber: 17
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 251,
          columnNumber: 15
        },
        this
      ),
      !isOutOfStock && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        ShopPayButton,
        {
          width: "100%",
          variantIds: [selectedVariant?.id],
          storeDomain
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 287,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/($lang)/products/$productHandle.tsx",
      lineNumber: 245,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/products/$productHandle.tsx",
    lineNumber: 239,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($lang)/products/$productHandle.tsx",
    lineNumber: 238,
    columnNumber: 5
  }, this);
}
function ProductOptions({
  options,
  searchParamsWithDefaults
}) {
  const closeRef = (0, import_react4.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: options.filter((option) => option.values.length > 1).map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: "flex flex-col flex-wrap mb-4 gap-y-2 last:mb-0",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { as: "legend", size: "lead", className: "min-w-[4rem]", children: option.name }, void 0, false, {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 317,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-baseline gap-4", children: option.values.length > 7 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bt, { children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Bt.Button,
            {
              ref: closeRef,
              className: clsx_m_default(
                "flex items-center justify-between w-full py-3 px-4 border border-primary",
                open ? "rounded-b md:rounded-t md:rounded-b-none" : "rounded"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: searchParamsWithDefaults.get(option.name) }, void 0, false, {
                  fileName: "app/routes/($lang)/products/$productHandle.tsx",
                  lineNumber: 343,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconCaret, { direction: open ? "up" : "down" }, void 0, false, {
                  fileName: "app/routes/($lang)/products/$productHandle.tsx",
                  lineNumber: 346,
                  columnNumber: 27
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/($lang)/products/$productHandle.tsx",
              lineNumber: 334,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Bt.Options,
            {
              className: clsx_m_default(
                "border-primary bg-contrast absolute bottom-12 z-30 grid h-48 w-full overflow-y-scroll rounded-t border px-2 py-2 transition-[max-height] duration-150 sm:bottom-auto md:rounded-b md:rounded-t-none md:border-t-0 md:border-b",
                open ? "max-h-48" : "max-h-0"
              ),
              children: option.values.map((value) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Bt.Option,
                {
                  value,
                  children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    ProductOptionLink,
                    {
                      optionName: option.name,
                      optionValue: value,
                      className: clsx_m_default(
                        "text-primary w-full p-2 transition rounded flex justify-start items-center text-left cursor-pointer",
                        active && "bg-primary/10"
                      ),
                      searchParams: searchParamsWithDefaults,
                      onClick: () => {
                        if (!closeRef?.current)
                          return;
                        closeRef.current.click();
                      },
                      children: [
                        value,
                        searchParamsWithDefaults.get(option.name) === value && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconCheck, {}, void 0, false, {
                          fileName: "app/routes/($lang)/products/$productHandle.tsx",
                          lineNumber: 377,
                          columnNumber: 39
                        }, this) }, void 0, false, {
                          fileName: "app/routes/($lang)/products/$productHandle.tsx",
                          lineNumber: 376,
                          columnNumber: 37
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/routes/($lang)/products/$productHandle.tsx",
                      lineNumber: 360,
                      columnNumber: 33
                    },
                    this
                  )
                },
                `option-${option.name}-${value}`,
                false,
                {
                  fileName: "app/routes/($lang)/products/$productHandle.tsx",
                  lineNumber: 355,
                  columnNumber: 29
                },
                this
              ))
            },
            void 0,
            false,
            {
              fileName: "app/routes/($lang)/products/$productHandle.tsx",
              lineNumber: 348,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 333,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 331,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 330,
          columnNumber: 17
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: option.values.map((value) => {
          const checked = searchParamsWithDefaults.get(option.name) === value;
          const id = `option-${option.name}-${value}`;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ProductOptionLink,
            {
              optionName: option.name,
              optionValue: value,
              searchParams: searchParamsWithDefaults,
              className: clsx_m_default(
                "leading-none py-1 border-b-[1.5px] cursor-pointer transition-all duration-200",
                checked ? "border-primary/50" : "border-primary/0"
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/($lang)/products/$productHandle.tsx",
              lineNumber: 398,
              columnNumber: 25
            },
            this
          ) }, id, false, {
            fileName: "app/routes/($lang)/products/$productHandle.tsx",
            lineNumber: 397,
            columnNumber: 23
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 390,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 320,
          columnNumber: 13
        }, this)
      ]
    },
    option.name,
    true,
    {
      fileName: "app/routes/($lang)/products/$productHandle.tsx",
      lineNumber: 313,
      columnNumber: 11
    },
    this
  )) }, void 0, false, {
    fileName: "app/routes/($lang)/products/$productHandle.tsx",
    lineNumber: 309,
    columnNumber: 5
  }, this);
}
function ProductOptionLink({
  optionName,
  optionValue,
  searchParams,
  children,
  ...props
}) {
  const { pathname } = useLocation();
  const isLangPathname = /\/[a-zA-Z]{2}-[a-zA-Z]{2}\//g.test(pathname);
  const path = isLangPathname ? `/${pathname.split("/").slice(2).join("/")}` : pathname;
  const clonedSearchParams = new URLSearchParams(searchParams);
  clonedSearchParams.set(optionName, optionValue);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Link,
    {
      ...props,
      preventScrollReset: true,
      prefetch: "intent",
      replace: true,
      to: `${path}?${clonedSearchParams.toString()}`,
      children: children ?? optionValue
    },
    void 0,
    false,
    {
      fileName: "app/routes/($lang)/products/$productHandle.tsx",
      lineNumber: 443,
      columnNumber: 5
    },
    this
  );
}
function ProductDetail({
  title,
  content,
  learnMore
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve, { as: "div", className: "grid w-full gap-2", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve.Button, { className: "text-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { size: "lead", as: "h4", children: title }, void 0, false, {
        fileName: "app/routes/($lang)/products/$productHandle.tsx",
        lineNumber: 470,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        IconClose,
        {
          className: clsx_m_default(
            "transition-transform transform-gpu duration-200",
            !open && "rotate-[45deg]"
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 473,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/($lang)/products/$productHandle.tsx",
      lineNumber: 469,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/products/$productHandle.tsx",
      lineNumber: 468,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve.Panel, { className: "pb-4 pt-2 grid gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "prose dark:prose-invert",
          dangerouslySetInnerHTML: { __html: content }
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 483,
          columnNumber: 13
        },
        this
      ),
      learnMore && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          className: "pb-px border-b border-primary/30 text-primary/50",
          to: learnMore,
          children: "Learn more"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/products/$productHandle.tsx",
          lineNumber: 489,
          columnNumber: 17
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/products/$productHandle.tsx",
        lineNumber: 488,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($lang)/products/$productHandle.tsx",
      lineNumber: 482,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/products/$productHandle.tsx",
    lineNumber: 467,
    columnNumber: 9
  }, this) }, title, false, {
    fileName: "app/routes/($lang)/products/$productHandle.tsx",
    lineNumber: 465,
    columnNumber: 5
  }, this);
}
var PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariantFragment on ProductVariant {
    id
    availableForSale
    selectedOptions {
      name
      value
    }
    image {
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    compareAtPrice {
      amount
      currencyCode
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
  }
`;
var PRODUCT_QUERY = `#graphql
  ${MEDIA_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
  query Product(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      id
      title
      vendor
      handle
      descriptionHtml
      description
      options {
        name
        values
      }
      selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
        ...ProductVariantFragment
      }
      media(first: 7) {
        nodes {
          ...Media
        }
      }
      variants(first: 1) {
        nodes {
          ...ProductVariantFragment
        }
      }
      seo {
        description
        title
      }
    }
    shop {
      name
      primaryDomain {
        url
      }
      shippingPolicy {
        body
        handle
      }
      refundPolicy {
        body
        handle
      }
    }
  }
`;
var RECOMMENDED_PRODUCTS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query productRecommendations(
    $productId: ID!
    $count: Int
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    recommended: productRecommendations(productId: $productId) {
      ...ProductCard
    }
    additional: products(first: $count, sortKey: BEST_SELLING) {
      nodes {
        ...ProductCard
      }
    }
  }
`;
export {
  Product as default
};
//# sourceMappingURL=/build/routes/($lang)/products/$productHandle-4TGB7LRG.js.map
