import {
  DEFAULT_LOCALE,
  formatText,
  getInputStyleClasses,
  isDiscounted,
  isNewArrival,
  missingClass,
  statusMessage,
  useIsHomePath
} from "/build/_shared/chunk-QFIHVZBB.js";
import {
  Image,
  MediaFile,
  Money,
  flattenConnection,
  useMoney
} from "/build/_shared/chunk-CVOFPAJN.js";
import {
  require_react_dom
} from "/build/_shared/chunk-WTEBH5IU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XWEF3JE5.js";
import {
  Await,
  Form,
  Link,
  NavLink,
  require_react,
  useFetcher,
  useFetchers,
  useLocation,
  useMatches,
  useNavigate,
  useParams,
  useSearchParams,
  useTransition
} from "/build/_shared/chunk-7LJUK6MV.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react11 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/match.js
function u(r11, n4, ...a10) {
  if (r11 in n4) {
    let e5 = n4[r11];
    return typeof e5 == "function" ? e5(...a10) : e5;
  }
  let t14 = new Error(`Tried to handle "${r11}" but there is no handler defined. Only defined handlers are: ${Object.keys(n4).map((e5) => `"${e5}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t14, u), t14;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function e(...n4) {
  return n4.filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var j = ((a10) => (a10[a10.None = 0] = "None", a10[a10.RenderStrategy = 1] = "RenderStrategy", a10[a10.Static = 2] = "Static", a10))(j || {});
var w = ((e5) => (e5[e5.Unmount = 0] = "Unmount", e5[e5.Hidden = 1] = "Hidden", e5))(w || {});
function D({ ourProps: r11, theirProps: t14, slot: e5, defaultTag: a10, features: s13, visible: n4 = true, name: l10 }) {
  let o10 = h(t14, r11);
  if (n4)
    return m(o10, e5, a10, l10);
  let f8 = s13 != null ? s13 : 0;
  if (f8 & 2) {
    let { static: i7 = false, ...u7 } = o10;
    if (i7)
      return m(u7, e5, a10, l10);
  }
  if (f8 & 1) {
    let { unmount: i7 = true, ...u7 } = o10;
    return u(i7 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return m({ ...u7, hidden: true, style: { display: "none" } }, e5, a10, l10);
    } });
  }
  return m(o10, e5, a10, l10);
}
function m(r11, t14 = {}, e5, a10) {
  var y5;
  let { as: s13 = e5, children: n4, refName: l10 = "ref", ...o10 } = g(r11, ["unmount", "static"]), f8 = r11.ref !== void 0 ? { [l10]: r11.ref } : {}, i7 = typeof n4 == "function" ? n4(t14) : n4;
  "className" in o10 && o10.className && typeof o10.className == "function" && (o10.className = o10.className(t14));
  let u7 = {};
  if (t14) {
    let d13 = false, c9 = [];
    for (let [p7, F7] of Object.entries(t14))
      typeof F7 == "boolean" && (d13 = true), F7 === true && c9.push(p7);
    d13 && (u7["data-headlessui-state"] = c9.join(" "));
  }
  if (s13 === import_react.Fragment && Object.keys(P(o10)).length > 0) {
    if (!(0, import_react.isValidElement)(i7) || Array.isArray(i7) && i7.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a10} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o10).map((p7) => `  - ${p7}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p7) => `  - ${p7}`).join(`
`)].join(`
`));
    let d13 = e((y5 = i7.props) == null ? void 0 : y5.className, o10.className), c9 = d13 ? { className: d13 } : {};
    return (0, import_react.cloneElement)(i7, Object.assign({}, h(i7.props, P(g(o10, ["ref"]))), u7, f8, O(i7.ref, f8.ref), c9));
  }
  return (0, import_react.createElement)(s13, Object.assign({}, g(o10, ["ref"]), s13 !== import_react.Fragment && f8, s13 !== import_react.Fragment && u7), i7);
}
function O(...r11) {
  return { ref: r11.every((t14) => t14 == null) ? void 0 : (t14) => {
    for (let e5 of r11)
      e5 != null && (typeof e5 == "function" ? e5(t14) : e5.current = t14);
  } };
}
function h(...r11) {
  var a10;
  if (r11.length === 0)
    return {};
  if (r11.length === 1)
    return r11[0];
  let t14 = {}, e5 = {};
  for (let s13 of r11)
    for (let n4 in s13)
      n4.startsWith("on") && typeof s13[n4] == "function" ? ((a10 = e5[n4]) != null || (e5[n4] = []), e5[n4].push(s13[n4])) : t14[n4] = s13[n4];
  if (t14.disabled || t14["aria-disabled"])
    return Object.assign(t14, Object.fromEntries(Object.keys(e5).map((s13) => [s13, void 0])));
  for (let s13 in e5)
    Object.assign(t14, { [s13](n4, ...l10) {
      let o10 = e5[s13];
      for (let f8 of o10) {
        if ((n4 instanceof Event || (n4 == null ? void 0 : n4.nativeEvent) instanceof Event) && n4.defaultPrevented)
          return;
        f8(n4, ...l10);
      }
    } });
  return t14;
}
function L(r11) {
  var t14;
  return Object.assign((0, import_react.forwardRef)(r11), { displayName: (t14 = r11.displayName) != null ? t14 : r11.name });
}
function P(r11) {
  let t14 = Object.assign({}, r11);
  for (let e5 in t14)
    t14[e5] === void 0 && delete t14[e5];
  return t14;
}
function g(r11, t14 = []) {
  let e5 = Object.assign({}, r11);
  for (let a10 of t14)
    a10 in e5 && delete e5[a10];
  return e5;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t14, e5, n4) => e5 in t14 ? i(t14, e5, { enumerable: true, configurable: true, writable: true, value: n4 }) : t14[e5] = n4;
var r = (t14, e5, n4) => (d(t14, typeof e5 != "symbol" ? e5 + "" : e5, n4), n4);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e5) {
    this.current !== e5 && (this.handoffState = "pending", this.currentId = 0, this.current = e5);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e5, f8) => {
  s.isServer ? (0, import_react2.useEffect)(e5, f8) : (0, import_react2.useLayoutEffect)(e5, f8);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function s2(e5) {
  let r11 = (0, import_react3.useRef)(e5);
  return l(() => {
    r11.current = e5;
  }, [e5]), r11;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var o2 = function(t14) {
  let e5 = s2(t14);
  return import_react4.default.useCallback((...r11) => e5.current(...r11), [e5]);
};

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var u2 = Symbol();
function T2(t14, n4 = true) {
  return Object.assign(t14, { [u2]: n4 });
}
function y(...t14) {
  let n4 = (0, import_react5.useRef)(t14);
  (0, import_react5.useEffect)(() => {
    n4.current = t14;
  }, [t14]);
  let c9 = o2((e5) => {
    for (let o10 of n4.current)
      o10 != null && (typeof o10 == "function" ? o10(e5) : o10.current = e5);
  });
  return t14.every((e5) => e5 == null || (e5 == null ? void 0 : e5[u2])) ? void 0 : c9;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var import_react6 = __toESM(require_react(), 1);
function l3() {
  let [e5, f8] = (0, import_react6.useState)(s.isHandoffComplete);
  return e5 && s.isHandoffComplete === false && f8(false), (0, import_react6.useEffect)(() => {
    e5 !== true && f8(true);
  }, [e5]), (0, import_react6.useEffect)(() => s.handoff(), []), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var o4;
var I = (o4 = import_react7.default.useId) != null ? o4 : function() {
  let n4 = l3(), [e5, u7] = import_react7.default.useState(n4 ? () => s.nextId() : null);
  return l(() => {
    e5 === null && u7(s.nextId());
  }, [e5]), e5 != null ? "" + e5 : void 0;
};

// node_modules/@headlessui/react/dist/components/keyboard.js
var o5 = ((r11) => (r11.Space = " ", r11.Enter = "Enter", r11.Escape = "Escape", r11.Backspace = "Backspace", r11.Delete = "Delete", r11.ArrowLeft = "ArrowLeft", r11.ArrowUp = "ArrowUp", r11.ArrowRight = "ArrowRight", r11.ArrowDown = "ArrowDown", r11.Home = "Home", r11.End = "End", r11.PageUp = "PageUp", r11.PageDown = "PageDown", r11.Tab = "Tab", r11))(o5 || {});

// node_modules/@headlessui/react/dist/utils/bugs.js
function r3(n4) {
  let e5 = n4.parentElement, l10 = null;
  for (; e5 && !(e5 instanceof HTMLFieldSetElement); )
    e5 instanceof HTMLLegendElement && (l10 = e5), e5 = e5.parentElement;
  let t14 = (e5 == null ? void 0 : e5.getAttribute("disabled")) === "";
  return t14 && i3(l10) ? false : t14;
}
function i3(n4) {
  if (!n4)
    return false;
  let e5 = n4.previousElementSibling;
  for (; e5 !== null; ) {
    if (e5 instanceof HTMLLegendElement)
      return false;
    e5 = e5.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react8 = __toESM(require_react(), 1);
var n = (0, import_react8.createContext)(null);
n.displayName = "OpenClosedContext";
var d2 = ((e5) => (e5[e5.Open = 1] = "Open", e5[e5.Closed = 2] = "Closed", e5[e5.Closing = 4] = "Closing", e5[e5.Opening = 8] = "Opening", e5))(d2 || {});
function C() {
  return (0, import_react8.useContext)(n);
}
function c2({ value: o10, children: r11 }) {
  return import_react8.default.createElement(n.Provider, { value: o10 }, r11);
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react9 = __toESM(require_react(), 1);
function i4(t14) {
  var n4;
  if (t14.type)
    return t14.type;
  let e5 = (n4 = t14.as) != null ? n4 : "button";
  if (typeof e5 == "string" && e5.toLowerCase() === "button")
    return "button";
}
function s3(t14, e5) {
  let [n4, u7] = (0, import_react9.useState)(() => i4(t14));
  return l(() => {
    u7(i4(t14));
  }, [t14.type, t14.as]), l(() => {
    n4 || e5.current && e5.current instanceof HTMLButtonElement && !e5.current.hasAttribute("type") && u7("button");
  }, [n4, e5]), n4;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function e2(r11) {
  return s.isServer ? null : r11 instanceof Node ? r11.ownerDocument : r11 != null && r11.hasOwnProperty("current") && r11.current instanceof Node ? r11.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react10 = __toESM(require_react(), 1);
var t5;
var a2 = (t5 = import_react10.default.startTransition) != null ? t5 : function(i7) {
  i7();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var q = ((o10) => (o10[o10.Open = 0] = "Open", o10[o10.Closed = 1] = "Closed", o10))(q || {});
var z = ((t14) => (t14[t14.ToggleDisclosure = 0] = "ToggleDisclosure", t14[t14.CloseDisclosure = 1] = "CloseDisclosure", t14[t14.SetButtonId = 2] = "SetButtonId", t14[t14.SetPanelId = 3] = "SetPanelId", t14[t14.LinkPanel = 4] = "LinkPanel", t14[t14.UnlinkPanel = 5] = "UnlinkPanel", t14))(z || {});
var Q = { [0]: (e5) => ({ ...e5, disclosureState: u(e5.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e5) => e5.disclosureState === 1 ? e5 : { ...e5, disclosureState: 1 }, [4](e5) {
  return e5.linkedPanel === true ? e5 : { ...e5, linkedPanel: true };
}, [5](e5) {
  return e5.linkedPanel === false ? e5 : { ...e5, linkedPanel: false };
}, [2](e5, n4) {
  return e5.buttonId === n4.buttonId ? e5 : { ...e5, buttonId: n4.buttonId };
}, [3](e5, n4) {
  return e5.panelId === n4.panelId ? e5 : { ...e5, panelId: n4.panelId };
} };
var k = (0, import_react11.createContext)(null);
k.displayName = "DisclosureContext";
function M(e5) {
  let n4 = (0, import_react11.useContext)(k);
  if (n4 === null) {
    let o10 = new Error(`<${e5} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o10, M), o10;
  }
  return n4;
}
var v = (0, import_react11.createContext)(null);
v.displayName = "DisclosureAPIContext";
function w2(e5) {
  let n4 = (0, import_react11.useContext)(v);
  if (n4 === null) {
    let o10 = new Error(`<${e5} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o10, w2), o10;
  }
  return n4;
}
var H = (0, import_react11.createContext)(null);
H.displayName = "DisclosurePanelContext";
function V() {
  return (0, import_react11.useContext)(H);
}
function Y(e5, n4) {
  return u(n4.type, Q, e5, n4);
}
var Z = import_react11.Fragment;
function ee(e5, n4) {
  let { defaultOpen: o10 = false, ...u7 } = e5, T6 = (0, import_react11.useRef)(null), l10 = y(n4, T2((a10) => {
    T6.current = a10;
  }, e5.as === void 0 || e5.as === import_react11.Fragment)), t14 = (0, import_react11.useRef)(null), f8 = (0, import_react11.useRef)(null), s13 = (0, import_react11.useReducer)(Y, { disclosureState: o10 ? 0 : 1, linkedPanel: false, buttonRef: f8, panelRef: t14, buttonId: null, panelId: null }), [{ disclosureState: i7, buttonId: c9 }, D5] = s13, d13 = o2((a10) => {
    D5({ type: 1 });
    let r11 = e2(T6);
    if (!r11 || !c9)
      return;
    let p7 = (() => a10 ? a10 instanceof HTMLElement ? a10 : a10.current instanceof HTMLElement ? a10.current : r11.getElementById(c9) : r11.getElementById(c9))();
    p7 == null || p7.focus();
  }), P6 = (0, import_react11.useMemo)(() => ({ close: d13 }), [d13]), b4 = (0, import_react11.useMemo)(() => ({ open: i7 === 0, close: d13 }), [i7, d13]), y5 = { ref: l10 };
  return import_react11.default.createElement(k.Provider, { value: s13 }, import_react11.default.createElement(v.Provider, { value: P6 }, import_react11.default.createElement(c2, { value: u(i7, { [0]: d2.Open, [1]: d2.Closed }) }, D({ ourProps: y5, theirProps: u7, slot: b4, defaultTag: Z, name: "Disclosure" }))));
}
var te = "button";
function ne(e5, n4) {
  let o10 = I(), { id: u7 = `headlessui-disclosure-button-${o10}`, ...T6 } = e5, [l10, t14] = M("Disclosure.Button"), f8 = V(), s13 = f8 === null ? false : f8 === l10.panelId, i7 = (0, import_react11.useRef)(null), c9 = y(i7, n4, s13 ? null : l10.buttonRef);
  (0, import_react11.useEffect)(() => {
    if (!s13)
      return t14({ type: 2, buttonId: u7 }), () => {
        t14({ type: 2, buttonId: null });
      };
  }, [u7, t14, s13]);
  let D5 = o2((r11) => {
    var p7;
    if (s13) {
      if (l10.disclosureState === 1)
        return;
      switch (r11.key) {
        case o5.Space:
        case o5.Enter:
          r11.preventDefault(), r11.stopPropagation(), t14({ type: 0 }), (p7 = l10.buttonRef.current) == null || p7.focus();
          break;
      }
    } else
      switch (r11.key) {
        case o5.Space:
        case o5.Enter:
          r11.preventDefault(), r11.stopPropagation(), t14({ type: 0 });
          break;
      }
  }), d13 = o2((r11) => {
    switch (r11.key) {
      case o5.Space:
        r11.preventDefault();
        break;
    }
  }), P6 = o2((r11) => {
    var p7;
    r3(r11.currentTarget) || e5.disabled || (s13 ? (t14({ type: 0 }), (p7 = l10.buttonRef.current) == null || p7.focus()) : t14({ type: 0 }));
  }), b4 = (0, import_react11.useMemo)(() => ({ open: l10.disclosureState === 0 }), [l10]), y5 = s3(e5, i7), a10 = s13 ? { ref: c9, type: y5, onKeyDown: D5, onClick: P6 } : { ref: c9, id: u7, type: y5, "aria-expanded": e5.disabled ? void 0 : l10.disclosureState === 0, "aria-controls": l10.linkedPanel ? l10.panelId : void 0, onKeyDown: D5, onKeyUp: d13, onClick: P6 };
  return D({ ourProps: a10, theirProps: T6, slot: b4, defaultTag: te, name: "Disclosure.Button" });
}
var le = "div";
var oe = j.RenderStrategy | j.Static;
function re(e5, n4) {
  let o10 = I(), { id: u7 = `headlessui-disclosure-panel-${o10}`, ...T6 } = e5, [l10, t14] = M("Disclosure.Panel"), { close: f8 } = w2("Disclosure.Panel"), s13 = y(n4, l10.panelRef, (P6) => {
    a2(() => t14({ type: P6 ? 4 : 5 }));
  });
  (0, import_react11.useEffect)(() => (t14({ type: 3, panelId: u7 }), () => {
    t14({ type: 3, panelId: null });
  }), [u7, t14]);
  let i7 = C(), c9 = (() => i7 !== null ? (i7 & d2.Open) === d2.Open : l10.disclosureState === 0)(), D5 = (0, import_react11.useMemo)(() => ({ open: l10.disclosureState === 0, close: f8 }), [l10, f8]), d13 = { ref: s13, id: u7 };
  return import_react11.default.createElement(H.Provider, { value: l10.panelId }, D({ ourProps: d13, theirProps: T6, slot: D5, defaultTag: le, features: oe, visible: c9, name: "Disclosure.Panel" }));
}
var se = L(ee);
var ue = L(ne);
var ie = L(re);
var ve = Object.assign(se, { Button: ue, Panel: ie });

// app/components/Drawer.tsx
var import_react32 = __toESM(require_react());

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react12 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t6(e5) {
  typeof queueMicrotask == "function" ? queueMicrotask(e5) : Promise.resolve().then(e5).catch((o10) => setTimeout(() => {
    throw o10;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o7() {
  let n4 = [], r11 = { addEventListener(e5, t14, s13, a10) {
    return e5.addEventListener(t14, s13, a10), r11.add(() => e5.removeEventListener(t14, s13, a10));
  }, requestAnimationFrame(...e5) {
    let t14 = requestAnimationFrame(...e5);
    return r11.add(() => cancelAnimationFrame(t14));
  }, nextFrame(...e5) {
    return r11.requestAnimationFrame(() => r11.requestAnimationFrame(...e5));
  }, setTimeout(...e5) {
    let t14 = setTimeout(...e5);
    return r11.add(() => clearTimeout(t14));
  }, microTask(...e5) {
    let t14 = { current: true };
    return t6(() => {
      t14.current && e5[0]();
    }), r11.add(() => {
      t14.current = false;
    });
  }, style(e5, t14, s13) {
    let a10 = e5.style.getPropertyValue(t14);
    return Object.assign(e5.style, { [t14]: s13 }), this.add(() => {
      Object.assign(e5.style, { [t14]: a10 });
    });
  }, group(e5) {
    let t14 = o7();
    return e5(t14), this.add(() => t14.dispose());
  }, add(e5) {
    return n4.push(e5), () => {
      let t14 = n4.indexOf(e5);
      if (t14 >= 0)
        for (let s13 of n4.splice(t14, 1))
          s13();
    };
  }, dispose() {
    for (let e5 of n4.splice(0))
      e5();
  } };
  return r11;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p2() {
  let [e5] = (0, import_react12.useState)(o7);
  return (0, import_react12.useEffect)(() => () => e5.dispose(), [e5]), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react14 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/focus-management.js
var f = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e5) => `${e5}:not([tabindex='-1'])`).join(",");
var L2 = ((r11) => (r11[r11.First = 1] = "First", r11[r11.Previous = 2] = "Previous", r11[r11.Next = 4] = "Next", r11[r11.Last = 8] = "Last", r11[r11.WrapAround = 16] = "WrapAround", r11[r11.NoScroll = 32] = "NoScroll", r11))(L2 || {});
var N2 = ((o10) => (o10[o10.Error = 0] = "Error", o10[o10.Overflow = 1] = "Overflow", o10[o10.Success = 2] = "Success", o10[o10.Underflow = 3] = "Underflow", o10))(N2 || {});
var T3 = ((n4) => (n4[n4.Previous = -1] = "Previous", n4[n4.Next = 1] = "Next", n4))(T3 || {});
function E3(e5 = document.body) {
  return e5 == null ? [] : Array.from(e5.querySelectorAll(f)).sort((t14, n4) => Math.sign((t14.tabIndex || Number.MAX_SAFE_INTEGER) - (n4.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var F2 = ((n4) => (n4[n4.Strict = 0] = "Strict", n4[n4.Loose = 1] = "Loose", n4))(F2 || {});
function h3(e5, t14 = 0) {
  var n4;
  return e5 === ((n4 = e2(e5)) == null ? void 0 : n4.body) ? false : u(t14, { [0]() {
    return e5.matches(f);
  }, [1]() {
    let l10 = e5;
    for (; l10 !== null; ) {
      if (l10.matches(f))
        return true;
      l10 = l10.parentElement;
    }
    return false;
  } });
}
function g3(e5) {
  let t14 = e2(e5);
  o7().nextFrame(() => {
    t14 && !h3(t14.activeElement, 0) && S2(e5);
  });
}
function S2(e5) {
  e5 == null || e5.focus({ preventScroll: true });
}
var H2 = ["textarea", "input"].join(",");
function w3(e5) {
  var t14, n4;
  return (n4 = (t14 = e5 == null ? void 0 : e5.matches) == null ? void 0 : t14.call(e5, H2)) != null ? n4 : false;
}
function A(e5, t14 = (n4) => n4) {
  return e5.slice().sort((n4, l10) => {
    let o10 = t14(n4), i7 = t14(l10);
    if (o10 === null || i7 === null)
      return 0;
    let r11 = o10.compareDocumentPosition(i7);
    return r11 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r11 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function v2(e5, t14) {
  return I3(E3(), t14, { relativeTo: e5 });
}
function I3(e5, t14, { sorted: n4 = true, relativeTo: l10 = null, skipElements: o10 = [] } = {}) {
  let i7 = Array.isArray(e5) ? e5.length > 0 ? e5[0].ownerDocument : document : e5.ownerDocument, r11 = Array.isArray(e5) ? n4 ? A(e5) : e5 : E3(e5);
  o10.length > 0 && r11.length > 1 && (r11 = r11.filter((s13) => !o10.includes(s13))), l10 = l10 != null ? l10 : i7.activeElement;
  let d13 = (() => {
    if (t14 & 5)
      return 1;
    if (t14 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x5 = (() => {
    if (t14 & 1)
      return 0;
    if (t14 & 2)
      return Math.max(0, r11.indexOf(l10)) - 1;
    if (t14 & 4)
      return Math.max(0, r11.indexOf(l10)) + 1;
    if (t14 & 8)
      return r11.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p7 = t14 & 32 ? { preventScroll: true } : {}, c9 = 0, a10 = r11.length, u7;
  do {
    if (c9 >= a10 || c9 + a10 <= 0)
      return 0;
    let s13 = x5 + c9;
    if (t14 & 16)
      s13 = (s13 + a10) % a10;
    else {
      if (s13 < 0)
        return 3;
      if (s13 >= a10)
        return 1;
    }
    u7 = r11[s13], u7 == null || u7.focus(p7), c9 += d13;
  } while (u7 !== i7.activeElement);
  return t14 & 6 && w3(u7) && u7.select(), u7.hasAttribute("tabindex") || u7.setAttribute("tabindex", "0"), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react13 = __toESM(require_react(), 1);
function d3(e5, r11, n4) {
  let o10 = s2(r11);
  (0, import_react13.useEffect)(() => {
    function t14(u7) {
      o10.current(u7);
    }
    return document.addEventListener(e5, t14, n4), () => document.removeEventListener(e5, t14, n4);
  }, [e5, n4]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function L3(m10, E6, c9 = true) {
  let i7 = (0, import_react14.useRef)(false);
  (0, import_react14.useEffect)(() => {
    requestAnimationFrame(() => {
      i7.current = c9;
    });
  }, [c9]);
  function f8(e5, o10) {
    if (!i7.current || e5.defaultPrevented)
      return;
    let l10 = function r11(t14) {
      return typeof t14 == "function" ? r11(t14()) : Array.isArray(t14) || t14 instanceof Set ? t14 : [t14];
    }(m10), n4 = o10(e5);
    if (n4 !== null && n4.getRootNode().contains(n4)) {
      for (let r11 of l10) {
        if (r11 === null)
          continue;
        let t14 = r11 instanceof HTMLElement ? r11 : r11.current;
        if (t14 != null && t14.contains(n4) || e5.composed && e5.composedPath().includes(t14))
          return;
      }
      return !h3(n4, F2.Loose) && n4.tabIndex !== -1 && e5.preventDefault(), E6(e5, n4);
    }
  }
  let u7 = (0, import_react14.useRef)(null);
  d3("mousedown", (e5) => {
    var o10, l10;
    i7.current && (u7.current = ((l10 = (o10 = e5.composedPath) == null ? void 0 : o10.call(e5)) == null ? void 0 : l10[0]) || e5.target);
  }, true), d3("click", (e5) => {
    u7.current && (f8(e5, () => u7.current), u7.current = null);
  }, true), d3("blur", (e5) => f8(e5, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react15 = __toESM(require_react(), 1);
function F3({ container: e5, accept: t14, walk: r11, enabled: c9 = true }) {
  let o10 = (0, import_react15.useRef)(t14), l10 = (0, import_react15.useRef)(r11);
  (0, import_react15.useEffect)(() => {
    o10.current = t14, l10.current = r11;
  }, [t14, r11]), l(() => {
    if (!e5 || !c9)
      return;
    let n4 = e2(e5);
    if (!n4)
      return;
    let f8 = o10.current, p7 = l10.current, d13 = Object.assign((i7) => f8(i7), { acceptNode: f8 }), u7 = n4.createTreeWalker(e5, NodeFilter.SHOW_ELEMENT, d13, false);
    for (; u7.nextNode(); )
      p7(u7.currentNode);
  }, [e5, c9, o10, l10]);
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function f2(r11) {
  throw new Error("Unexpected object: " + r11);
}
var a3 = ((e5) => (e5[e5.First = 0] = "First", e5[e5.Previous = 1] = "Previous", e5[e5.Next = 2] = "Next", e5[e5.Last = 3] = "Last", e5[e5.Specific = 4] = "Specific", e5[e5.Nothing = 5] = "Nothing", e5))(a3 || {});
function x2(r11, n4) {
  let t14 = n4.resolveItems();
  if (t14.length <= 0)
    return null;
  let l10 = n4.resolveActiveIndex(), s13 = l10 != null ? l10 : -1, d13 = (() => {
    switch (r11.focus) {
      case 0:
        return t14.findIndex((e5) => !n4.resolveDisabled(e5));
      case 1: {
        let e5 = t14.slice().reverse().findIndex((i7, c9, u7) => s13 !== -1 && u7.length - c9 - 1 >= s13 ? false : !n4.resolveDisabled(i7));
        return e5 === -1 ? e5 : t14.length - 1 - e5;
      }
      case 2:
        return t14.findIndex((e5, i7) => i7 <= s13 ? false : !n4.resolveDisabled(e5));
      case 3: {
        let e5 = t14.slice().reverse().findIndex((i7) => !n4.resolveDisabled(i7));
        return e5 === -1 ? e5 : t14.length - 1 - e5;
      }
      case 4:
        return t14.findIndex((e5) => n4.resolveId(e5) === r11.id);
      case 5:
        return null;
      default:
        f2(r11);
    }
  })();
  return d13 === -1 ? l10 : d13;
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a4 = "div";
var p3 = ((e5) => (e5[e5.None = 1] = "None", e5[e5.Focusable = 2] = "Focusable", e5[e5.Hidden = 4] = "Hidden", e5))(p3 || {});
function s6(t14, o10) {
  let { features: n4 = 1, ...e5 } = t14, d13 = { ref: o10, "aria-hidden": (n4 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n4 & 4) === 4 && (n4 & 2) !== 2 && { display: "none" } } };
  return D({ ourProps: d13, theirProps: e5, slot: {}, defaultTag: a4, name: "Hidden" });
}
var c3 = L(s6);

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react16 = __toESM(require_react(), 1);
function m4(u7, t14) {
  let e5 = (0, import_react16.useRef)([]), r11 = o2(u7);
  (0, import_react16.useEffect)(() => {
    let o10 = [...e5.current];
    for (let [n4, a10] of t14.entries())
      if (e5.current[n4] !== a10) {
        let l10 = r11(t14, o10);
        return e5.current = t14, l10;
      }
  }, [r11, ...t14]);
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react17 = __toESM(require_react(), 1);
function t7(e5) {
  return [e5.screenX, e5.screenY];
}
function u3() {
  let e5 = (0, import_react17.useRef)([-1, -1]);
  return { wasMoved(r11) {
    let n4 = t7(r11);
    return e5.current[0] === n4[0] && e5.current[1] === n4[1] ? false : (e5.current = n4, true);
  }, update(r11) {
    e5.current = t7(r11);
  } };
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t8() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react28 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react23 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react19 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react18 = __toESM(require_react(), 1);
function s8(e5, r11, n4) {
  let o10 = s2(r11);
  (0, import_react18.useEffect)(() => {
    function t14(i7) {
      o10.current(i7);
    }
    return window.addEventListener(e5, t14, n4), () => window.removeEventListener(e5, t14, n4);
  }, [e5, n4]);
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var s9 = ((r11) => (r11[r11.Forwards = 0] = "Forwards", r11[r11.Backwards = 1] = "Backwards", r11))(s9 || {});
function n2() {
  let e5 = (0, import_react19.useRef)(0);
  return s8("keydown", (o10) => {
    o10.key === "Tab" && (e5.current = o10.shiftKey ? 1 : 0);
  }, true), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react20 = __toESM(require_react(), 1);
function f4() {
  let e5 = (0, import_react20.useRef)(false);
  return l(() => (e5.current = true, () => {
    e5.current = false;
  }), []), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react21 = __toESM(require_react(), 1);
function n3(...e5) {
  return (0, import_react21.useMemo)(() => e2(...e5), [...e5]);
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react22 = __toESM(require_react(), 1);
function E5(n4, e5, a10, t14) {
  let i7 = s2(a10);
  (0, import_react22.useEffect)(() => {
    n4 = n4 != null ? n4 : window;
    function r11(o10) {
      i7.current(o10);
    }
    return n4.addEventListener(e5, r11, t14), () => n4.removeEventListener(e5, r11, t14);
  }, [n4, e5, t14]);
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P2(t14) {
  if (!t14)
    return /* @__PURE__ */ new Set();
  if (typeof t14 == "function")
    return new Set(t14());
  let n4 = /* @__PURE__ */ new Set();
  for (let e5 of t14.current)
    e5.current instanceof HTMLElement && n4.add(e5.current);
  return n4;
}
var J = "div";
var h4 = ((r11) => (r11[r11.None = 1] = "None", r11[r11.InitialFocus = 2] = "InitialFocus", r11[r11.TabLock = 4] = "TabLock", r11[r11.FocusLock = 8] = "FocusLock", r11[r11.RestoreFocus = 16] = "RestoreFocus", r11[r11.All = 30] = "All", r11))(h4 || {});
function X(t14, n4) {
  let e5 = (0, import_react23.useRef)(null), o10 = y(e5, n4), { initialFocus: u7, containers: i7, features: r11 = 30, ...l10 } = t14;
  l3() || (r11 = 1);
  let m10 = n3(e5);
  Q2({ ownerDocument: m10 }, Boolean(r11 & 16));
  let c9 = Y2({ ownerDocument: m10, container: e5, initialFocus: u7 }, Boolean(r11 & 2));
  Z2({ ownerDocument: m10, container: e5, containers: i7, previousActiveElement: c9 }, Boolean(r11 & 8));
  let v4 = n2(), R3 = o2((s13) => {
    let T6 = e5.current;
    if (!T6)
      return;
    ((B2) => B2())(() => {
      u(v4.current, { [s9.Forwards]: () => {
        I3(T6, L2.First, { skipElements: [s13.relatedTarget] });
      }, [s9.Backwards]: () => {
        I3(T6, L2.Last, { skipElements: [s13.relatedTarget] });
      } });
    });
  }), _3 = p2(), H5 = (0, import_react23.useRef)(false), j4 = { ref: o10, onKeyDown(s13) {
    s13.key == "Tab" && (H5.current = true, _3.requestAnimationFrame(() => {
      H5.current = false;
    }));
  }, onBlur(s13) {
    let T6 = P2(i7);
    e5.current instanceof HTMLElement && T6.add(e5.current);
    let E6 = s13.relatedTarget;
    E6 instanceof HTMLElement && E6.dataset.headlessuiFocusGuard !== "true" && (S3(T6, E6) || (H5.current ? I3(e5.current, u(v4.current, { [s9.Forwards]: () => L2.Next, [s9.Backwards]: () => L2.Previous }) | L2.WrapAround, { relativeTo: s13.target }) : s13.target instanceof HTMLElement && S2(s13.target)));
  } };
  return import_react23.default.createElement(import_react23.default.Fragment, null, Boolean(r11 & 4) && import_react23.default.createElement(c3, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R3, features: p3.Focusable }), D({ ourProps: j4, theirProps: l10, defaultTag: J, name: "FocusTrap" }), Boolean(r11 & 4) && import_react23.default.createElement(c3, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R3, features: p3.Focusable }));
}
var z2 = L(X);
var ye = Object.assign(z2, { features: h4 });
var a5 = [];
if (typeof window != "undefined" && typeof document != "undefined") {
  let t14 = function(n4) {
    n4.target instanceof HTMLElement && n4.target !== document.body && a5[0] !== n4.target && (a5.unshift(n4.target), a5 = a5.filter((e5) => e5 != null && e5.isConnected), a5.splice(10));
  };
  handle = t14;
  window.addEventListener("click", t14, { capture: true }), window.addEventListener("mousedown", t14, { capture: true }), window.addEventListener("focus", t14, { capture: true }), document.body.addEventListener("click", t14, { capture: true }), document.body.addEventListener("mousedown", t14, { capture: true }), document.body.addEventListener("focus", t14, { capture: true });
}
var handle;
function D2(t14 = true) {
  let n4 = (0, import_react23.useRef)(a5.slice());
  return m4(([e5], [o10]) => {
    o10 === true && e5 === false && t6(() => {
      n4.current.splice(0);
    }), o10 === false && e5 === true && (n4.current = a5.slice());
  }, [t14, a5, n4]), o2(() => {
    var e5;
    return (e5 = n4.current.find((o10) => o10 != null && o10.isConnected)) != null ? e5 : null;
  });
}
function Q2({ ownerDocument: t14 }, n4) {
  let e5 = D2(n4);
  m4(() => {
    n4 || (t14 == null ? void 0 : t14.activeElement) === (t14 == null ? void 0 : t14.body) && S2(e5());
  }, [n4]);
  let o10 = (0, import_react23.useRef)(false);
  (0, import_react23.useEffect)(() => (o10.current = false, () => {
    o10.current = true, t6(() => {
      o10.current && S2(e5());
    });
  }), []);
}
function Y2({ ownerDocument: t14, container: n4, initialFocus: e5 }, o10) {
  let u7 = (0, import_react23.useRef)(null), i7 = f4();
  return m4(() => {
    if (!o10)
      return;
    let r11 = n4.current;
    r11 && t6(() => {
      if (!i7.current)
        return;
      let l10 = t14 == null ? void 0 : t14.activeElement;
      if (e5 != null && e5.current) {
        if ((e5 == null ? void 0 : e5.current) === l10) {
          u7.current = l10;
          return;
        }
      } else if (r11.contains(l10)) {
        u7.current = l10;
        return;
      }
      e5 != null && e5.current ? S2(e5.current) : I3(r11, L2.First) === N2.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), u7.current = t14 == null ? void 0 : t14.activeElement;
    });
  }, [o10]), u7;
}
function Z2({ ownerDocument: t14, container: n4, containers: e5, previousActiveElement: o10 }, u7) {
  let i7 = f4();
  E5(t14 == null ? void 0 : t14.defaultView, "focus", (r11) => {
    if (!u7 || !i7.current)
      return;
    let l10 = P2(e5);
    n4.current instanceof HTMLElement && l10.add(n4.current);
    let m10 = o10.current;
    if (!m10)
      return;
    let c9 = r11.target;
    c9 && c9 instanceof HTMLElement ? S3(l10, c9) ? (o10.current = c9, S2(c9)) : (r11.preventDefault(), r11.stopPropagation(), S2(m10)) : S2(o10.current);
  }, true);
}
function S3(t14, n4) {
  for (let e5 of t14)
    if (e5.contains(n4))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react25 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react24 = __toESM(require_react(), 1);
var e3 = (0, import_react24.createContext)(false);
function l5() {
  return (0, import_react24.useContext)(e3);
}
function P3(o10) {
  return import_react24.default.createElement(e3.Provider, { value: o10.force }, o10.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function H3(u7) {
  let a10 = l5(), o10 = (0, import_react25.useContext)(c5), e5 = n3(u7), [l10, n4] = (0, import_react25.useState)(() => {
    if (!a10 && o10 !== null || s.isServer)
      return null;
    let t14 = e5 == null ? void 0 : e5.getElementById("headlessui-portal-root");
    if (t14)
      return t14;
    if (e5 === null)
      return null;
    let r11 = e5.createElement("div");
    return r11.setAttribute("id", "headlessui-portal-root"), e5.body.appendChild(r11);
  });
  return (0, import_react25.useEffect)(() => {
    l10 !== null && (e5 != null && e5.body.contains(l10) || e5 == null || e5.body.appendChild(l10));
  }, [l10, e5]), (0, import_react25.useEffect)(() => {
    a10 || o10 !== null && n4(o10.current);
  }, [o10, n4, a10]), l10;
}
var O2 = import_react25.Fragment;
function _(u7, a10) {
  let o10 = u7, e5 = (0, import_react25.useRef)(null), l10 = y(T2((p7) => {
    e5.current = p7;
  }), a10), n4 = n3(e5), t14 = H3(e5), [r11] = (0, import_react25.useState)(() => {
    var p7;
    return s.isServer ? null : (p7 = n4 == null ? void 0 : n4.createElement("div")) != null ? p7 : null;
  }), y5 = l3(), f8 = (0, import_react25.useRef)(false);
  return l(() => {
    if (f8.current = false, !(!t14 || !r11))
      return t14.contains(r11) || (r11.setAttribute("data-headlessui-portal", ""), t14.appendChild(r11)), () => {
        f8.current = true, t6(() => {
          var p7;
          f8.current && (!t14 || !r11 || (r11 instanceof Node && t14.contains(r11) && t14.removeChild(r11), t14.childNodes.length <= 0 && ((p7 = t14.parentElement) == null || p7.removeChild(t14))));
        });
      };
  }, [t14, r11]), y5 ? !t14 || !r11 ? null : (0, import_react_dom.createPortal)(D({ ourProps: { ref: l10 }, theirProps: o10, defaultTag: O2, name: "Portal" }), r11) : null;
}
var F4 = import_react25.Fragment;
var c5 = (0, import_react25.createContext)(null);
function U2(u7, a10) {
  let { target: o10, ...e5 } = u7, n4 = { ref: y(a10) };
  return import_react25.default.createElement(c5.Provider, { value: o10 }, D({ ourProps: n4, theirProps: e5, defaultTag: F4, name: "Popover.Group" }));
}
var S4 = L(_);
var j2 = L(U2);
var te2 = Object.assign(S4, { Group: j2 });

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react26 = __toESM(require_react(), 1);
var d8 = (0, import_react26.createContext)(null);
function f5() {
  let r11 = (0, import_react26.useContext)(d8);
  if (r11 === null) {
    let t14 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t14, f5), t14;
  }
  return r11;
}
function M2() {
  let [r11, t14] = (0, import_react26.useState)([]);
  return [r11.length > 0 ? r11.join(" ") : void 0, (0, import_react26.useMemo)(() => function(e5) {
    let i7 = o2((s13) => (t14((o10) => [...o10, s13]), () => t14((o10) => {
      let p7 = o10.slice(), c9 = p7.indexOf(s13);
      return c9 !== -1 && p7.splice(c9, 1), p7;
    }))), n4 = (0, import_react26.useMemo)(() => ({ register: i7, slot: e5.slot, name: e5.name, props: e5.props }), [i7, e5.slot, e5.name, e5.props]);
    return import_react26.default.createElement(d8.Provider, { value: n4 }, e5.children);
  }, [t14])];
}
var S5 = "p";
function h5(r11, t14) {
  let a10 = I(), { id: e5 = `headlessui-description-${a10}`, ...i7 } = r11, n4 = f5(), s13 = y(t14);
  l(() => n4.register(e5), [e5, n4.register]);
  let o10 = { ref: s13, ...n4.props, id: e5 };
  return D({ ourProps: o10, theirProps: i7, slot: n4.slot || {}, defaultTag: S5, name: n4.name || "Description" });
}
var y2 = L(h5);
var b2 = Object.assign(y2, {});

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react27 = __toESM(require_react(), 1);
var a6 = (0, import_react27.createContext)(() => {
});
a6.displayName = "StackContext";
var s11 = ((e5) => (e5[e5.Add = 0] = "Add", e5[e5.Remove = 1] = "Remove", e5))(s11 || {});
function x4() {
  return (0, import_react27.useContext)(a6);
}
function M3({ children: i7, onUpdate: r11, type: e5, element: n4, enabled: u7 }) {
  let l10 = x4(), o10 = o2((...t14) => {
    r11 == null || r11(...t14), l10(...t14);
  });
  return l(() => {
    let t14 = u7 === void 0 || u7 === true;
    return t14 && o10(0, e5, n4), () => {
      t14 && o10(1, e5, n4);
    };
  }, [o10, e5, n4, u7]), import_react27.default.createElement(a6.Provider, { value: o10 }, i7);
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var e4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
var l7 = __toESM(require_react(), 1);
function i6(e5, t14) {
  return e5 === t14 && (e5 !== 0 || 1 / e5 === 1 / t14) || e5 !== e5 && t14 !== t14;
}
var d10 = typeof Object.is == "function" ? Object.is : i6;
var { useState: u5, useEffect: h6, useLayoutEffect: f6, useDebugValue: p4 } = l7;
function y3(e5, t14, c9) {
  const a10 = t14(), [{ inst: n4 }, o10] = u5({ inst: { value: a10, getSnapshot: t14 } });
  return f6(() => {
    n4.value = a10, n4.getSnapshot = t14, r7(n4) && o10({ inst: n4 });
  }, [e5, a10, t14]), h6(() => (r7(n4) && o10({ inst: n4 }), e5(() => {
    r7(n4) && o10({ inst: n4 });
  })), [e5]), p4(a10), a10;
}
function r7(e5) {
  const t14 = e5.getSnapshot, c9 = e5.value;
  try {
    const a10 = t14();
    return !d10(c9, a10);
  } catch {
    return true;
  }
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t12(r11, e5, n4) {
  return e5();
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var r8 = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined";
var s12 = !r8;
var c7 = s12 ? t12 : y3;
var a7 = "useSyncExternalStore" in e4 ? ((n4) => n4.useSyncExternalStore)(e4) : c7;

// node_modules/@headlessui/react/dist/hooks/use-store.js
function S6(t14) {
  return a7(t14.subscribe, t14.getSnapshot, t14.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a8(o10, r11) {
  let t14 = o10(), n4 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t14;
  }, subscribe(e5) {
    return n4.add(e5), () => n4.delete(e5);
  }, dispatch(e5, ...s13) {
    let i7 = r11[e5].call(t14, ...s13);
    i7 && (t14 = i7, n4.forEach((c9) => c9()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c8() {
  let o10;
  return { before({ doc: e5 }) {
    var l10;
    let n4 = e5.documentElement;
    o10 = ((l10 = e5.defaultView) != null ? l10 : window).innerWidth - n4.clientWidth;
  }, after({ doc: e5, d: n4 }) {
    let t14 = e5.documentElement, l10 = t14.clientWidth - t14.offsetWidth, r11 = o10 - l10;
    n4.style(t14, "paddingRight", `${r11}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function p5() {
  if (!t8())
    return {};
  let o10;
  return { before() {
    o10 = window.pageYOffset;
  }, after({ doc: r11, d: l10, meta: s13 }) {
    function i7(e5) {
      return s13.containers.flatMap((t14) => t14()).some((t14) => t14.contains(e5));
    }
    l10.style(r11.body, "marginTop", `-${o10}px`), window.scrollTo(0, 0);
    let n4 = null;
    l10.addEventListener(r11, "click", (e5) => {
      if (e5.target instanceof HTMLElement)
        try {
          let t14 = e5.target.closest("a");
          if (!t14)
            return;
          let { hash: c9 } = new URL(t14.href), a10 = r11.querySelector(c9);
          a10 && !i7(a10) && (n4 = a10);
        } catch {
        }
    }, true), l10.addEventListener(r11, "touchmove", (e5) => {
      e5.target instanceof HTMLElement && !i7(e5.target) && e5.preventDefault();
    }, { passive: false }), l10.add(() => {
      window.scrollTo(0, window.pageYOffset + o10), n4 && n4.isConnected && (n4.scrollIntoView({ block: "nearest" }), n4 = null);
    });
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l8() {
  return { before({ doc: e5, d: o10 }) {
    o10.style(e5.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m8(e5) {
  let n4 = {};
  for (let t14 of e5)
    Object.assign(n4, t14(n4));
  return n4;
}
var a9 = a8(() => /* @__PURE__ */ new Map(), { PUSH(e5, n4) {
  var o10;
  let t14 = (o10 = this.get(e5)) != null ? o10 : { doc: e5, count: 0, d: o7(), meta: /* @__PURE__ */ new Set() };
  return t14.count++, t14.meta.add(n4), this.set(e5, t14), this;
}, POP(e5, n4) {
  let t14 = this.get(e5);
  return t14 && (t14.count--, t14.meta.delete(n4)), this;
}, SCROLL_PREVENT({ doc: e5, d: n4, meta: t14 }) {
  let o10 = { doc: e5, d: n4, meta: m8(t14) }, c9 = [p5(), c8(), l8()];
  c9.forEach(({ before: r11 }) => r11 == null ? void 0 : r11(o10)), c9.forEach(({ after: r11 }) => r11 == null ? void 0 : r11(o10));
}, SCROLL_ALLOW({ d: e5 }) {
  e5.dispose();
}, TEARDOWN({ doc: e5 }) {
  this.delete(e5);
} });
a9.subscribe(() => {
  let e5 = a9.getSnapshot(), n4 = /* @__PURE__ */ new Map();
  for (let [t14] of e5)
    n4.set(t14, t14.documentElement.style.overflow);
  for (let t14 of e5.values()) {
    let o10 = n4.get(t14.doc) === "hidden", c9 = t14.count !== 0;
    (c9 && !o10 || !c9 && o10) && a9.dispatch(t14.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t14), t14.count === 0 && a9.dispatch("TEARDOWN", t14);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function p6(e5, r11, n4) {
  let f8 = S6(a9), o10 = e5 ? f8.get(e5) : void 0, i7 = o10 ? o10.count > 0 : false;
  return l(() => {
    if (!(!e5 || !r11))
      return a9.dispatch("PUSH", e5, n4), () => a9.dispatch("POP", e5, n4);
  }, [r11, e5]), i7;
}

// node_modules/@headlessui/react/dist/hooks/use-inert.js
var u6 = /* @__PURE__ */ new Map();
var t13 = /* @__PURE__ */ new Map();
function h7(r11, l10 = true) {
  l(() => {
    var o10;
    if (!l10)
      return;
    let e5 = typeof r11 == "function" ? r11() : r11.current;
    if (!e5)
      return;
    function a10() {
      var d13;
      if (!e5)
        return;
      let i7 = (d13 = t13.get(e5)) != null ? d13 : 1;
      if (i7 === 1 ? t13.delete(e5) : t13.set(e5, i7 - 1), i7 !== 1)
        return;
      let n4 = u6.get(e5);
      n4 && (n4["aria-hidden"] === null ? e5.removeAttribute("aria-hidden") : e5.setAttribute("aria-hidden", n4["aria-hidden"]), e5.inert = n4.inert, u6.delete(e5));
    }
    let f8 = (o10 = t13.get(e5)) != null ? o10 : 0;
    return t13.set(e5, f8 + 1), f8 !== 0 || (u6.set(e5, { "aria-hidden": e5.getAttribute("aria-hidden"), inert: e5.inert }), e5.setAttribute("aria-hidden", "true"), e5.inert = true), a10;
  }, [r11, l10]);
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var Se = ((o10) => (o10[o10.Open = 0] = "Open", o10[o10.Closed = 1] = "Closed", o10))(Se || {});
var Fe = ((e5) => (e5[e5.SetTitleId = 0] = "SetTitleId", e5))(Fe || {});
var ke = { [0](t14, e5) {
  return t14.titleId === e5.id ? t14 : { ...t14, titleId: e5.id };
} };
var M4 = (0, import_react28.createContext)(null);
M4.displayName = "DialogContext";
function S7(t14) {
  let e5 = (0, import_react28.useContext)(M4);
  if (e5 === null) {
    let o10 = new Error(`<${t14} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o10, S7), o10;
  }
  return e5;
}
function xe(t14, e5, o10 = () => [document.body]) {
  p6(t14, e5, (s13) => {
    var n4;
    return { containers: [...(n4 = s13.containers) != null ? n4 : [], o10] };
  });
}
function _e(t14, e5) {
  return u(e5.type, ke, t14, e5);
}
var Me = "div";
var He = j.RenderStrategy | j.Static;
function Ie(t14, e5) {
  let o10 = I(), { id: s13 = `headlessui-dialog-${o10}`, open: n4, onClose: l10, initialFocus: d13, __demoMode: c9 = false, ...D5 } = t14, [P6, F7] = (0, import_react28.useState)(0), i7 = C();
  n4 === void 0 && i7 !== null && (n4 = (i7 & d2.Open) === d2.Open);
  let m10 = (0, import_react28.useRef)(null), Q4 = y(m10, e5), y5 = (0, import_react28.useRef)(null), p7 = n3(m10), U4 = t14.hasOwnProperty("open") || i7 !== null, N4 = t14.hasOwnProperty("onClose");
  if (!U4 && !N4)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!U4)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!N4)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof n4 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n4}`);
  if (typeof l10 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l10}`);
  let u7 = n4 ? 0 : 1, [E6, Z3] = (0, import_react28.useReducer)(_e, { titleId: null, descriptionId: null, panelRef: (0, import_react28.createRef)() }), A4 = o2(() => l10(false)), Y4 = o2((r11) => Z3({ type: 0, id: r11 })), k2 = l3() ? c9 ? false : u7 === 0 : false, x5 = P6 > 1, $2 = (0, import_react28.useContext)(M4) !== null, ee2 = x5 ? "parent" : "leaf", W = i7 !== null ? (i7 & d2.Closing) === d2.Closing : false, te3 = (() => $2 || W ? false : k2)(), oe3 = (0, import_react28.useCallback)(() => {
    var r11, f8;
    return (f8 = Array.from((r11 = p7 == null ? void 0 : p7.querySelectorAll("body > *")) != null ? r11 : []).find((a10) => a10.id === "headlessui-portal-root" ? false : a10.contains(y5.current) && a10 instanceof HTMLElement)) != null ? f8 : null;
  }, [y5]);
  h7(oe3, te3);
  let re3 = (() => x5 ? true : k2)(), ne3 = (0, import_react28.useCallback)(() => {
    var r11, f8;
    return (f8 = Array.from((r11 = p7 == null ? void 0 : p7.querySelectorAll("[data-headlessui-portal]")) != null ? r11 : []).find((a10) => a10.contains(y5.current) && a10 instanceof HTMLElement)) != null ? f8 : null;
  }, [y5]);
  h7(ne3, re3);
  let H5 = o2(() => {
    var f8, a10;
    return [...Array.from((f8 = p7 == null ? void 0 : p7.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? f8 : []).filter((T6) => !(T6 === document.body || T6 === document.head || !(T6 instanceof HTMLElement) || T6.contains(y5.current) || E6.panelRef.current && T6.contains(E6.panelRef.current))), (a10 = E6.panelRef.current) != null ? a10 : m10.current];
  }), le2 = (() => !(!k2 || x5))();
  L3(() => H5(), A4, le2);
  let ae = (() => !(x5 || u7 !== 0))();
  E5(p7 == null ? void 0 : p7.defaultView, "keydown", (r11) => {
    ae && (r11.defaultPrevented || r11.key === o5.Escape && (r11.preventDefault(), r11.stopPropagation(), A4()));
  });
  let ie3 = (() => !(W || u7 !== 0 || $2))();
  xe(p7, ie3, H5), (0, import_react28.useEffect)(() => {
    if (u7 !== 0 || !m10.current)
      return;
    let r11 = new ResizeObserver((f8) => {
      for (let a10 of f8) {
        let T6 = a10.target.getBoundingClientRect();
        T6.x === 0 && T6.y === 0 && T6.width === 0 && T6.height === 0 && A4();
      }
    });
    return r11.observe(m10.current), () => r11.disconnect();
  }, [u7, m10, A4]);
  let [se2, pe2] = M2(), de2 = (0, import_react28.useMemo)(() => [{ dialogState: u7, close: A4, setTitleId: Y4 }, E6], [u7, E6, A4, Y4]), J3 = (0, import_react28.useMemo)(() => ({ open: u7 === 0 }), [u7]), ue2 = { ref: Q4, id: s13, role: "dialog", "aria-modal": u7 === 0 ? true : void 0, "aria-labelledby": E6.titleId, "aria-describedby": se2 };
  return import_react28.default.createElement(M3, { type: "Dialog", enabled: u7 === 0, element: m10, onUpdate: o2((r11, f8) => {
    f8 === "Dialog" && u(r11, { [s11.Add]: () => F7((a10) => a10 + 1), [s11.Remove]: () => F7((a10) => a10 - 1) });
  }) }, import_react28.default.createElement(P3, { force: true }, import_react28.default.createElement(te2, null, import_react28.default.createElement(M4.Provider, { value: de2 }, import_react28.default.createElement(te2.Group, { target: m10 }, import_react28.default.createElement(P3, { force: false }, import_react28.default.createElement(pe2, { slot: J3, name: "Dialog.Description" }, import_react28.default.createElement(ye, { initialFocus: d13, containers: H5, features: k2 ? u(ee2, { parent: ye.features.RestoreFocus, leaf: ye.features.All & ~ye.features.FocusLock }) : ye.features.None }, D({ ourProps: ue2, theirProps: D5, slot: J3, defaultTag: Me, features: He, visible: u7 === 0, name: "Dialog" })))))))), import_react28.default.createElement(c3, { features: p3.Hidden, ref: y5 }));
}
var we = "div";
function Be(t14, e5) {
  let o10 = I(), { id: s13 = `headlessui-dialog-overlay-${o10}`, ...n4 } = t14, [{ dialogState: l10, close: d13 }] = S7("Dialog.Overlay"), c9 = y(e5), D5 = o2((i7) => {
    if (i7.target === i7.currentTarget) {
      if (r3(i7.currentTarget))
        return i7.preventDefault();
      i7.preventDefault(), i7.stopPropagation(), d13();
    }
  }), P6 = (0, import_react28.useMemo)(() => ({ open: l10 === 0 }), [l10]);
  return D({ ourProps: { ref: c9, id: s13, "aria-hidden": true, onClick: D5 }, theirProps: n4, slot: P6, defaultTag: we, name: "Dialog.Overlay" });
}
var Ge = "div";
function Ue(t14, e5) {
  let o10 = I(), { id: s13 = `headlessui-dialog-backdrop-${o10}`, ...n4 } = t14, [{ dialogState: l10 }, d13] = S7("Dialog.Backdrop"), c9 = y(e5);
  (0, import_react28.useEffect)(() => {
    if (d13.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [d13.panelRef]);
  let D5 = (0, import_react28.useMemo)(() => ({ open: l10 === 0 }), [l10]);
  return import_react28.default.createElement(P3, { force: true }, import_react28.default.createElement(te2, null, D({ ourProps: { ref: c9, id: s13, "aria-hidden": true }, theirProps: n4, slot: D5, defaultTag: Ge, name: "Dialog.Backdrop" })));
}
var Ne = "div";
function Ye(t14, e5) {
  let o10 = I(), { id: s13 = `headlessui-dialog-panel-${o10}`, ...n4 } = t14, [{ dialogState: l10 }, d13] = S7("Dialog.Panel"), c9 = y(e5, d13.panelRef), D5 = (0, import_react28.useMemo)(() => ({ open: l10 === 0 }), [l10]), P6 = o2((i7) => {
    i7.stopPropagation();
  });
  return D({ ourProps: { ref: c9, id: s13, onClick: P6 }, theirProps: n4, slot: D5, defaultTag: Ne, name: "Dialog.Panel" });
}
var $e = "h2";
function We(t14, e5) {
  let o10 = I(), { id: s13 = `headlessui-dialog-title-${o10}`, ...n4 } = t14, [{ dialogState: l10, setTitleId: d13 }] = S7("Dialog.Title"), c9 = y(e5);
  (0, import_react28.useEffect)(() => (d13(s13), () => d13(null)), [s13, d13]);
  let D5 = (0, import_react28.useMemo)(() => ({ open: l10 === 0 }), [l10]);
  return D({ ourProps: { ref: c9, id: s13 }, theirProps: n4, slot: D5, defaultTag: $e, name: "Dialog.Title" });
}
var Je = L(Ie);
var Xe = L(Ue);
var je = L(Ye);
var Ke = L(Be);
var Ve = L(We);
var St = Object.assign(Je, { Backdrop: Xe, Panel: je, Overlay: Ke, Title: Ve, Description: b2 });

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react29 = __toESM(require_react(), 1);
var pe = ((r11) => (r11[r11.Open = 0] = "Open", r11[r11.Closed = 1] = "Closed", r11))(pe || {});
var ce2 = ((r11) => (r11[r11.Pointer = 0] = "Pointer", r11[r11.Other = 1] = "Other", r11))(ce2 || {});
var me = ((a10) => (a10[a10.OpenMenu = 0] = "OpenMenu", a10[a10.CloseMenu = 1] = "CloseMenu", a10[a10.GoToItem = 2] = "GoToItem", a10[a10.Search = 3] = "Search", a10[a10.ClearSearch = 4] = "ClearSearch", a10[a10.RegisterItem = 5] = "RegisterItem", a10[a10.UnregisterItem = 6] = "UnregisterItem", a10))(me || {});
function w4(e5, u7 = (r11) => r11) {
  let r11 = e5.activeItemIndex !== null ? e5.items[e5.activeItemIndex] : null, i7 = A(u7(e5.items.slice()), (t14) => t14.dataRef.current.domRef.current), s13 = r11 ? i7.indexOf(r11) : null;
  return s13 === -1 && (s13 = null), { items: i7, activeItemIndex: s13 };
}
var de = { [1](e5) {
  return e5.menuState === 1 ? e5 : { ...e5, activeItemIndex: null, menuState: 1 };
}, [0](e5) {
  return e5.menuState === 0 ? e5 : { ...e5, menuState: 0 };
}, [2]: (e5, u7) => {
  var s13;
  let r11 = w4(e5), i7 = x2(u7, { resolveItems: () => r11.items, resolveActiveIndex: () => r11.activeItemIndex, resolveId: (t14) => t14.id, resolveDisabled: (t14) => t14.dataRef.current.disabled });
  return { ...e5, ...r11, searchQuery: "", activeItemIndex: i7, activationTrigger: (s13 = u7.trigger) != null ? s13 : 1 };
}, [3]: (e5, u7) => {
  let i7 = e5.searchQuery !== "" ? 0 : 1, s13 = e5.searchQuery + u7.value.toLowerCase(), o10 = (e5.activeItemIndex !== null ? e5.items.slice(e5.activeItemIndex + i7).concat(e5.items.slice(0, e5.activeItemIndex + i7)) : e5.items).find((l10) => {
    var m10;
    return ((m10 = l10.dataRef.current.textValue) == null ? void 0 : m10.startsWith(s13)) && !l10.dataRef.current.disabled;
  }), a10 = o10 ? e5.items.indexOf(o10) : -1;
  return a10 === -1 || a10 === e5.activeItemIndex ? { ...e5, searchQuery: s13 } : { ...e5, searchQuery: s13, activeItemIndex: a10, activationTrigger: 1 };
}, [4](e5) {
  return e5.searchQuery === "" ? e5 : { ...e5, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e5, u7) => {
  let r11 = w4(e5, (i7) => [...i7, { id: u7.id, dataRef: u7.dataRef }]);
  return { ...e5, ...r11 };
}, [6]: (e5, u7) => {
  let r11 = w4(e5, (i7) => {
    let s13 = i7.findIndex((t14) => t14.id === u7.id);
    return s13 !== -1 && i7.splice(s13, 1), i7;
  });
  return { ...e5, ...r11, activationTrigger: 1 };
} };
var U3 = (0, import_react29.createContext)(null);
U3.displayName = "MenuContext";
function F5(e5) {
  let u7 = (0, import_react29.useContext)(U3);
  if (u7 === null) {
    let r11 = new Error(`<${e5} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r11, F5), r11;
  }
  return u7;
}
function fe2(e5, u7) {
  return u(u7.type, de, e5, u7);
}
var Te2 = import_react29.Fragment;
function ye2(e5, u7) {
  let r11 = (0, import_react29.useReducer)(fe2, { menuState: 1, buttonRef: (0, import_react29.createRef)(), itemsRef: (0, import_react29.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: i7, itemsRef: s13, buttonRef: t14 }, o10] = r11, a10 = y(u7);
  L3([t14, s13], (g5, A4) => {
    var I6;
    o10({ type: 1 }), h3(A4, F2.Loose) || (g5.preventDefault(), (I6 = t14.current) == null || I6.focus());
  }, i7 === 0);
  let l10 = o2(() => {
    o10({ type: 1 });
  }), m10 = (0, import_react29.useMemo)(() => ({ open: i7 === 0, close: l10 }), [i7, l10]), M5 = e5, f8 = { ref: a10 };
  return import_react29.default.createElement(U3.Provider, { value: r11 }, import_react29.default.createElement(c2, { value: u(i7, { [0]: d2.Open, [1]: d2.Closed }) }, D({ ourProps: f8, theirProps: M5, slot: m10, defaultTag: Te2, name: "Menu" })));
}
var Ie2 = "button";
function Me2(e5, u7) {
  var I6;
  let r11 = I(), { id: i7 = `headlessui-menu-button-${r11}`, ...s13 } = e5, [t14, o10] = F5("Menu.Button"), a10 = y(t14.buttonRef, u7), l10 = p2(), m10 = o2((p7) => {
    switch (p7.key) {
      case o5.Space:
      case o5.Enter:
      case o5.ArrowDown:
        p7.preventDefault(), p7.stopPropagation(), o10({ type: 0 }), l10.nextFrame(() => o10({ type: 2, focus: a3.First }));
        break;
      case o5.ArrowUp:
        p7.preventDefault(), p7.stopPropagation(), o10({ type: 0 }), l10.nextFrame(() => o10({ type: 2, focus: a3.Last }));
        break;
    }
  }), M5 = o2((p7) => {
    switch (p7.key) {
      case o5.Space:
        p7.preventDefault();
        break;
    }
  }), f8 = o2((p7) => {
    if (r3(p7.currentTarget))
      return p7.preventDefault();
    e5.disabled || (t14.menuState === 0 ? (o10({ type: 1 }), l10.nextFrame(() => {
      var R3;
      return (R3 = t14.buttonRef.current) == null ? void 0 : R3.focus({ preventScroll: true });
    })) : (p7.preventDefault(), o10({ type: 0 })));
  }), g5 = (0, import_react29.useMemo)(() => ({ open: t14.menuState === 0 }), [t14]), A4 = { ref: a10, id: i7, type: s3(e5, t14.buttonRef), "aria-haspopup": "menu", "aria-controls": (I6 = t14.itemsRef.current) == null ? void 0 : I6.id, "aria-expanded": e5.disabled ? void 0 : t14.menuState === 0, onKeyDown: m10, onKeyUp: M5, onClick: f8 };
  return D({ ourProps: A4, theirProps: s13, slot: g5, defaultTag: Ie2, name: "Menu.Button" });
}
var ge2 = "div";
var Re = j.RenderStrategy | j.Static;
function Ae(e5, u7) {
  var R3, E6;
  let r11 = I(), { id: i7 = `headlessui-menu-items-${r11}`, ...s13 } = e5, [t14, o10] = F5("Menu.Items"), a10 = y(t14.itemsRef, u7), l10 = n3(t14.itemsRef), m10 = p2(), M5 = C(), f8 = (() => M5 !== null ? (M5 & d2.Open) === d2.Open : t14.menuState === 0)();
  (0, import_react29.useEffect)(() => {
    let n4 = t14.itemsRef.current;
    n4 && t14.menuState === 0 && n4 !== (l10 == null ? void 0 : l10.activeElement) && n4.focus({ preventScroll: true });
  }, [t14.menuState, t14.itemsRef, l10]), F3({ container: t14.itemsRef.current, enabled: t14.menuState === 0, accept(n4) {
    return n4.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n4.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n4) {
    n4.setAttribute("role", "none");
  } });
  let g5 = o2((n4) => {
    var S9, O3;
    switch (m10.dispose(), n4.key) {
      case o5.Space:
        if (t14.searchQuery !== "")
          return n4.preventDefault(), n4.stopPropagation(), o10({ type: 3, value: n4.key });
      case o5.Enter:
        if (n4.preventDefault(), n4.stopPropagation(), o10({ type: 1 }), t14.activeItemIndex !== null) {
          let { dataRef: c9 } = t14.items[t14.activeItemIndex];
          (O3 = (S9 = c9.current) == null ? void 0 : S9.domRef.current) == null || O3.click();
        }
        g3(t14.buttonRef.current);
        break;
      case o5.ArrowDown:
        return n4.preventDefault(), n4.stopPropagation(), o10({ type: 2, focus: a3.Next });
      case o5.ArrowUp:
        return n4.preventDefault(), n4.stopPropagation(), o10({ type: 2, focus: a3.Previous });
      case o5.Home:
      case o5.PageUp:
        return n4.preventDefault(), n4.stopPropagation(), o10({ type: 2, focus: a3.First });
      case o5.End:
      case o5.PageDown:
        return n4.preventDefault(), n4.stopPropagation(), o10({ type: 2, focus: a3.Last });
      case o5.Escape:
        n4.preventDefault(), n4.stopPropagation(), o10({ type: 1 }), o7().nextFrame(() => {
          var c9;
          return (c9 = t14.buttonRef.current) == null ? void 0 : c9.focus({ preventScroll: true });
        });
        break;
      case o5.Tab:
        n4.preventDefault(), n4.stopPropagation(), o10({ type: 1 }), o7().nextFrame(() => {
          v2(t14.buttonRef.current, n4.shiftKey ? L2.Previous : L2.Next);
        });
        break;
      default:
        n4.key.length === 1 && (o10({ type: 3, value: n4.key }), m10.setTimeout(() => o10({ type: 4 }), 350));
        break;
    }
  }), A4 = o2((n4) => {
    switch (n4.key) {
      case o5.Space:
        n4.preventDefault();
        break;
    }
  }), I6 = (0, import_react29.useMemo)(() => ({ open: t14.menuState === 0 }), [t14]), p7 = { "aria-activedescendant": t14.activeItemIndex === null || (R3 = t14.items[t14.activeItemIndex]) == null ? void 0 : R3.id, "aria-labelledby": (E6 = t14.buttonRef.current) == null ? void 0 : E6.id, id: i7, onKeyDown: g5, onKeyUp: A4, role: "menu", tabIndex: 0, ref: a10 };
  return D({ ourProps: p7, theirProps: s13, slot: I6, defaultTag: ge2, features: Re, visible: f8, name: "Menu.Items" });
}
var be = import_react29.Fragment;
function Ee(e5, u7) {
  let r11 = I(), { id: i7 = `headlessui-menu-item-${r11}`, disabled: s13 = false, ...t14 } = e5, [o10, a10] = F5("Menu.Item"), l10 = o10.activeItemIndex !== null ? o10.items[o10.activeItemIndex].id === i7 : false, m10 = (0, import_react29.useRef)(null), M5 = y(u7, m10);
  l(() => {
    if (o10.menuState !== 0 || !l10 || o10.activationTrigger === 0)
      return;
    let c9 = o7();
    return c9.requestAnimationFrame(() => {
      var b4, _3;
      (_3 = (b4 = m10.current) == null ? void 0 : b4.scrollIntoView) == null || _3.call(b4, { block: "nearest" });
    }), c9.dispose;
  }, [m10, l10, o10.menuState, o10.activationTrigger, o10.activeItemIndex]);
  let f8 = (0, import_react29.useRef)({ disabled: s13, domRef: m10 });
  l(() => {
    f8.current.disabled = s13;
  }, [f8, s13]), l(() => {
    var c9, b4;
    f8.current.textValue = (b4 = (c9 = m10.current) == null ? void 0 : c9.textContent) == null ? void 0 : b4.toLowerCase();
  }, [f8, m10]), l(() => (a10({ type: 5, id: i7, dataRef: f8 }), () => a10({ type: 6, id: i7 })), [f8, i7]);
  let g5 = o2(() => {
    a10({ type: 1 });
  }), A4 = o2((c9) => {
    if (s13)
      return c9.preventDefault();
    a10({ type: 1 }), g3(o10.buttonRef.current);
  }), I6 = o2(() => {
    if (s13)
      return a10({ type: 2, focus: a3.Nothing });
    a10({ type: 2, focus: a3.Specific, id: i7 });
  }), p7 = u3(), R3 = o2((c9) => p7.update(c9)), E6 = o2((c9) => {
    p7.wasMoved(c9) && (s13 || l10 || a10({ type: 2, focus: a3.Specific, id: i7, trigger: 0 }));
  }), n4 = o2((c9) => {
    p7.wasMoved(c9) && (s13 || l10 && a10({ type: 2, focus: a3.Nothing }));
  }), S9 = (0, import_react29.useMemo)(() => ({ active: l10, disabled: s13, close: g5 }), [l10, s13, g5]);
  return D({ ourProps: { id: i7, ref: M5, role: "menuitem", tabIndex: s13 === true ? void 0 : -1, "aria-disabled": s13 === true ? true : void 0, disabled: void 0, onClick: A4, onFocus: I6, onPointerEnter: R3, onMouseEnter: R3, onPointerMove: E6, onMouseMove: E6, onPointerLeave: n4, onMouseLeave: n4 }, theirProps: t14, slot: S9, defaultTag: be, name: "Menu.Item" });
}
var Se2 = L(ye2);
var Pe = L(Me2);
var ve2 = L(Ae);
var xe2 = L(Ee);
var ot = Object.assign(Se2, { Button: Pe, Items: ve2, Item: xe2 });

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react30 = __toESM(require_react(), 1);
function b3(g5 = 0) {
  let [t14, l10] = (0, import_react30.useState)(g5), u7 = (0, import_react30.useCallback)((e5) => l10((a10) => a10 | e5), [t14]), n4 = (0, import_react30.useCallback)((e5) => Boolean(t14 & e5), [t14]), o10 = (0, import_react30.useCallback)((e5) => l10((a10) => a10 & ~e5), [l10]), s13 = (0, import_react30.useCallback)((e5) => l10((a10) => a10 ^ e5), [l10]);
  return { flags: t14, addFlag: u7, hasFlag: n4, removeFlag: o10, toggleFlag: s13 };
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react31 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l9(r11) {
  let e5 = { called: false };
  return (...t14) => {
    if (!e5.called)
      return e5.called = true, r11(...t14);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function d11(t14, ...e5) {
  t14 && e5.length > 0 && t14.classList.add(...e5);
}
function v3(t14, ...e5) {
  t14 && e5.length > 0 && t14.classList.remove(...e5);
}
function F6(t14, e5) {
  let n4 = o7();
  if (!t14)
    return n4.dispose;
  let { transitionDuration: m10, transitionDelay: o10 } = getComputedStyle(t14), [u7, p7] = [m10, o10].map((a10) => {
    let [r11 = 0] = a10.split(",").filter(Boolean).map((i7) => i7.includes("ms") ? parseFloat(i7) : parseFloat(i7) * 1e3).sort((i7, f8) => f8 - i7);
    return r11;
  }), l10 = u7 + p7;
  if (l10 !== 0) {
    n4.group((r11) => {
      r11.setTimeout(() => {
        e5(), r11.dispose();
      }, l10), r11.addEventListener(t14, "transitionrun", (i7) => {
        i7.target === i7.currentTarget && r11.dispose();
      });
    });
    let a10 = n4.addEventListener(t14, "transitionend", (r11) => {
      r11.target === r11.currentTarget && (e5(), a10());
    });
  } else
    e5();
  return n4.add(() => e5()), n4.dispose;
}
function y4(t14, e5, n4, m10) {
  let o10 = n4 ? "enter" : "leave", u7 = o7(), p7 = m10 !== void 0 ? l9(m10) : () => {
  };
  o10 === "enter" && (t14.removeAttribute("hidden"), t14.style.display = "");
  let l10 = u(o10, { enter: () => e5.enter, leave: () => e5.leave }), a10 = u(o10, { enter: () => e5.enterTo, leave: () => e5.leaveTo }), r11 = u(o10, { enter: () => e5.enterFrom, leave: () => e5.leaveFrom });
  return v3(t14, ...e5.enter, ...e5.enterTo, ...e5.enterFrom, ...e5.leave, ...e5.leaveFrom, ...e5.leaveTo, ...e5.entered), d11(t14, ...l10, ...r11), u7.nextFrame(() => {
    v3(t14, ...r11), d11(t14, ...a10), F6(t14, () => (v3(t14, ...l10), d11(t14, ...e5.entered), p7()));
  }), u7.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D4({ container: i7, direction: t14, classes: o10, onStart: s13, onStop: u7 }) {
  let a10 = f4(), c9 = p2(), r11 = s2(t14);
  l(() => {
    let e5 = o7();
    c9.add(e5.dispose);
    let n4 = i7.current;
    if (n4 && r11.current !== "idle" && a10.current)
      return e5.dispose(), s13.current(r11.current), e5.add(y4(n4, o10.current, r11.current === "enter", () => {
        e5.dispose(), u7.current(r11.current);
      })), e5.dispose;
  }, [t14]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function S8(n4 = "") {
  return n4.split(" ").filter((t14) => t14.trim().length > 1);
}
var A3 = (0, import_react31.createContext)(null);
A3.displayName = "TransitionContext";
var Ee2 = ((r11) => (r11.Visible = "visible", r11.Hidden = "hidden", r11))(Ee2 || {});
function be2() {
  let n4 = (0, import_react31.useContext)(A3);
  if (n4 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return n4;
}
function Se3() {
  let n4 = (0, import_react31.useContext)(I5);
  if (n4 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return n4;
}
var I5 = (0, import_react31.createContext)(null);
I5.displayName = "NestingContext";
function _2(n4) {
  return "children" in n4 ? _2(n4.children) : n4.current.filter(({ el: t14 }) => t14.current !== null).filter(({ state: t14 }) => t14 === "visible").length > 0;
}
function ne2(n4, t14) {
  let r11 = s2(n4), o10 = (0, import_react31.useRef)([]), y5 = f4(), N4 = p2(), p7 = o2((s13, e5 = w.Hidden) => {
    let a10 = o10.current.findIndex(({ el: i7 }) => i7 === s13);
    a10 !== -1 && (u(e5, { [w.Unmount]() {
      o10.current.splice(a10, 1);
    }, [w.Hidden]() {
      o10.current[a10].state = "hidden";
    } }), N4.microTask(() => {
      var i7;
      !_2(o10) && y5.current && ((i7 = r11.current) == null || i7.call(r11));
    }));
  }), x5 = o2((s13) => {
    let e5 = o10.current.find(({ el: a10 }) => a10 === s13);
    return e5 ? e5.state !== "visible" && (e5.state = "visible") : o10.current.push({ el: s13, state: "visible" }), () => p7(s13, w.Unmount);
  }), m10 = (0, import_react31.useRef)([]), c9 = (0, import_react31.useRef)(Promise.resolve()), u7 = (0, import_react31.useRef)({ enter: [], leave: [], idle: [] }), h8 = o2((s13, e5, a10) => {
    m10.current.splice(0), t14 && (t14.chains.current[e5] = t14.chains.current[e5].filter(([i7]) => i7 !== s13)), t14 == null || t14.chains.current[e5].push([s13, new Promise((i7) => {
      m10.current.push(i7);
    })]), t14 == null || t14.chains.current[e5].push([s13, new Promise((i7) => {
      Promise.all(u7.current[e5].map(([l10, T6]) => T6)).then(() => i7());
    })]), e5 === "enter" ? c9.current = c9.current.then(() => t14 == null ? void 0 : t14.wait.current).then(() => a10(e5)) : a10(e5);
  }), v4 = o2((s13, e5, a10) => {
    Promise.all(u7.current[e5].splice(0).map(([i7, l10]) => l10)).then(() => {
      var i7;
      (i7 = m10.current.shift()) == null || i7();
    }).then(() => a10(e5));
  });
  return (0, import_react31.useMemo)(() => ({ children: o10, register: x5, unregister: p7, onStart: h8, onStop: v4, wait: c9, chains: u7 }), [x5, p7, o10, h8, v4, u7, c9]);
}
function xe3() {
}
var Pe2 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function re2(n4) {
  var r11;
  let t14 = {};
  for (let o10 of Pe2)
    t14[o10] = (r11 = n4[o10]) != null ? r11 : xe3;
  return t14;
}
function Re2(n4) {
  let t14 = (0, import_react31.useRef)(re2(n4));
  return (0, import_react31.useEffect)(() => {
    t14.current = re2(n4);
  }, [n4]), t14;
}
var ye3 = "div";
var ie2 = j.RenderStrategy;
function Ne2(n4, t14) {
  let { beforeEnter: r11, afterEnter: o10, beforeLeave: y5, afterLeave: N4, enter: p7, enterFrom: x5, enterTo: m10, entered: c9, leave: u7, leaveFrom: h8, leaveTo: v4, ...s13 } = n4, e5 = (0, import_react31.useRef)(null), a10 = y(e5, t14), i7 = s13.unmount ? w.Unmount : w.Hidden, { show: l10, appear: T6, initial: se2 } = be2(), [g5, M5] = (0, import_react31.useState)(l10 ? "visible" : "hidden"), z3 = Se3(), { register: F7, unregister: L6 } = z3, U4 = (0, import_react31.useRef)(null);
  (0, import_react31.useEffect)(() => F7(e5), [F7, e5]), (0, import_react31.useEffect)(() => {
    if (i7 === w.Hidden && e5.current) {
      if (l10 && g5 !== "visible") {
        M5("visible");
        return;
      }
      return u(g5, { ["hidden"]: () => L6(e5), ["visible"]: () => F7(e5) });
    }
  }, [g5, e5, F7, L6, l10, i7]);
  let j4 = s2({ enter: S8(p7), enterFrom: S8(x5), enterTo: S8(m10), entered: S8(c9), leave: S8(u7), leaveFrom: S8(h8), leaveTo: S8(v4) }), w5 = Re2({ beforeEnter: r11, afterEnter: o10, beforeLeave: y5, afterLeave: N4 }), k2 = l3();
  (0, import_react31.useEffect)(() => {
    if (k2 && g5 === "visible" && e5.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e5, g5, k2]);
  let G3 = se2 && !T6, ae = (() => !k2 || G3 || U4.current === l10 ? "idle" : l10 ? "enter" : "leave")(), H5 = b3(0), le2 = o2((C3) => u(C3, { enter: () => {
    H5.addFlag(d2.Opening), w5.current.beforeEnter();
  }, leave: () => {
    H5.addFlag(d2.Closing), w5.current.beforeLeave();
  }, idle: () => {
  } })), ue2 = o2((C3) => u(C3, { enter: () => {
    H5.removeFlag(d2.Opening), w5.current.afterEnter();
  }, leave: () => {
    H5.removeFlag(d2.Closing), w5.current.afterLeave();
  }, idle: () => {
  } })), O3 = ne2(() => {
    M5("hidden"), L6(e5);
  }, z3);
  D4({ container: e5, classes: j4, direction: ae, onStart: s2((C3) => {
    O3.onStart(e5, C3, le2);
  }), onStop: s2((C3) => {
    O3.onStop(e5, C3, ue2), C3 === "leave" && !_2(O3) && (M5("hidden"), L6(e5));
  }) }), (0, import_react31.useEffect)(() => {
    G3 && (i7 === w.Hidden ? U4.current = null : U4.current = l10);
  }, [l10, G3, g5]);
  let B2 = s13, Te3 = { ref: a10 };
  return T6 && l10 && s.isServer && (B2 = { ...B2, className: e(s13.className, ...j4.current.enter, ...j4.current.enterFrom) }), import_react31.default.createElement(I5.Provider, { value: O3 }, import_react31.default.createElement(c2, { value: u(g5, { ["visible"]: d2.Open, ["hidden"]: d2.Closed }) | H5.flags }, D({ ourProps: Te3, theirProps: B2, defaultTag: ye3, features: ie2, visible: g5 === "visible", name: "Transition.Child" })));
}
function He2(n4, t14) {
  let { show: r11, appear: o10 = false, unmount: y5, ...N4 } = n4, p7 = (0, import_react31.useRef)(null), x5 = y(p7, t14);
  l3();
  let m10 = C();
  if (r11 === void 0 && m10 !== null && (r11 = (m10 & d2.Open) === d2.Open), ![true, false].includes(r11))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c9, u7] = (0, import_react31.useState)(r11 ? "visible" : "hidden"), h8 = ne2(() => {
    u7("hidden");
  }), [v4, s13] = (0, import_react31.useState)(true), e5 = (0, import_react31.useRef)([r11]);
  l(() => {
    v4 !== false && e5.current[e5.current.length - 1] !== r11 && (e5.current.push(r11), s13(false));
  }, [e5, r11]);
  let a10 = (0, import_react31.useMemo)(() => ({ show: r11, appear: o10, initial: v4 }), [r11, o10, v4]);
  (0, import_react31.useEffect)(() => {
    if (r11)
      u7("visible");
    else if (!_2(h8))
      u7("hidden");
    else {
      let l10 = p7.current;
      if (!l10)
        return;
      let T6 = l10.getBoundingClientRect();
      T6.x === 0 && T6.y === 0 && T6.width === 0 && T6.height === 0 && u7("hidden");
    }
  }, [r11, h8]);
  let i7 = { unmount: y5 };
  return import_react31.default.createElement(I5.Provider, { value: h8 }, import_react31.default.createElement(A3.Provider, { value: a10 }, D({ ourProps: { ...i7, as: import_react31.Fragment, children: import_react31.default.createElement(oe2, { ref: x5, ...i7, ...N4 }) }, theirProps: {}, defaultTag: import_react31.Fragment, features: ie2, visible: c9 === "visible", name: "Transition" })));
}
function De(n4, t14) {
  let r11 = (0, import_react31.useContext)(A3) !== null, o10 = C() !== null;
  return import_react31.default.createElement(import_react31.default.Fragment, null, !r11 && o10 ? import_react31.default.createElement(q3, { ref: t14, ...n4 }) : import_react31.default.createElement(oe2, { ref: t14, ...n4 }));
}
var q3 = L(He2);
var oe2 = L(Ne2);
var Fe2 = L(De);
var tt = Object.assign(q3, { Child: Fe2, Root: q3 });

// app/components/Drawer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Drawer({
  heading,
  open,
  onClose,
  openFrom = "right",
  children
}) {
  const offScreen = {
    right: "translate-x-full",
    left: "-translate-x-full"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tt, { appear: true, show: open, as: import_react32.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(St, { as: "div", className: "relative z-50", onClose, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      tt.Child,
      {
        as: import_react32.Fragment,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 left-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 bg-black bg-opacity-25" }, void 0, false, {
          fileName: "app/components/Drawer.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/Drawer.tsx",
        lineNumber: 35,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `fixed inset-y-0 flex max-w-full ${openFrom === "right" ? "right-0" : ""}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          tt.Child,
          {
            as: import_react32.Fragment,
            enter: "transform transition ease-in-out duration-300",
            enterFrom: offScreen[openFrom],
            enterTo: "translate-x-0",
            leave: "transform transition ease-in-out duration-300",
            leaveFrom: "translate-x-0",
            leaveTo: offScreen[openFrom],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(St.Panel, { className: "w-screen max-w-lg text-left align-middle transition-all transform shadow-xl h-screen-dynamic bg-contrast", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "header",
                {
                  className: `sticky top-0 flex items-center px-6 h-nav sm:px-8 md:px-12 ${heading ? "justify-between" : "justify-end"}`,
                  children: [
                    heading !== null && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(St.Title, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { as: "span", size: "lead", id: "cart-contents", children: heading }, void 0, false, {
                      fileName: "app/components/Drawer.tsx",
                      lineNumber: 71,
                      columnNumber: 25
                    }, this) }, void 0, false, {
                      fileName: "app/components/Drawer.tsx",
                      lineNumber: 70,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "button",
                      {
                        type: "button",
                        className: "p-4 -m-4 transition text-primary hover:text-primary/50",
                        onClick: onClose,
                        "data-test": "close-cart",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconClose, { "aria-label": "Close panel" }, void 0, false, {
                          fileName: "app/components/Drawer.tsx",
                          lineNumber: 82,
                          columnNumber: 23
                        }, this)
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/Drawer.tsx",
                        lineNumber: 76,
                        columnNumber: 21
                      },
                      this
                    )
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/Drawer.tsx",
                  lineNumber: 64,
                  columnNumber: 19
                },
                this
              ),
              children
            ] }, void 0, true, {
              fileName: "app/components/Drawer.tsx",
              lineNumber: 63,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/Drawer.tsx",
            lineNumber: 54,
            columnNumber: 15
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/Drawer.tsx",
        lineNumber: 49,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/Drawer.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Drawer.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Drawer.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Drawer.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
Drawer.Title = St.Title;
function useDrawer(openDefault = false) {
  const [isOpen, setIsOpen] = (0, import_react32.useState)(openDefault);
  function openDrawer() {
    setIsOpen(true);
  }
  function closeDrawer() {
    setIsOpen(false);
  }
  return {
    isOpen,
    openDrawer,
    closeDrawer
  };
}

// node_modules/clsx/dist/clsx.m.js
function r10(e5) {
  var t14, f8, n4 = "";
  if ("string" == typeof e5 || "number" == typeof e5)
    n4 += e5;
  else if ("object" == typeof e5)
    if (Array.isArray(e5))
      for (t14 = 0; t14 < e5.length; t14++)
        e5[t14] && (f8 = r10(e5[t14])) && (n4 && (n4 += " "), n4 += f8);
    else
      for (t14 in e5)
        e5[t14] && (n4 && (n4 += " "), n4 += t14);
  return n4;
}
function clsx() {
  for (var e5, t14, f8 = 0, n4 = ""; f8 < arguments.length; )
    (e5 = arguments[f8++]) && (t14 = r10(e5)) && (n4 && (n4 += " "), n4 += t14);
  return n4;
}
var clsx_m_default = clsx;

// app/components/Text.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Text({
  as: Component2 = "span",
  className,
  color = "default",
  format,
  size = "copy",
  width = "default",
  children,
  ...props
}) {
  const colors = {
    default: "inherit",
    primary: "text-primary/90",
    subtle: "text-primary/50",
    notice: "text-notice",
    contrast: "text-contrast/90"
  };
  const sizes = {
    lead: "text-lead font-medium",
    copy: "text-copy",
    fine: "text-fine subpixel-antialiased"
  };
  const widths = {
    default: "max-w-prose",
    narrow: "max-w-prose-narrow",
    wide: "max-w-prose-wide"
  };
  const styles = clsx_m_default(
    missingClass(className, "max-w-") && widths[width],
    missingClass(className, "whitespace-") && "whitespace-pre-wrap",
    missingClass(className, "text-") && colors[color],
    sizes[size],
    className
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Component2, { ...props, className: styles, children: format ? formatText(children) : children }, void 0, false, {
    fileName: "app/components/Text.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
function Heading({
  as: Component2 = "h2",
  children,
  className = "",
  format,
  size = "heading",
  width = "default",
  ...props
}) {
  const sizes = {
    display: "font-bold text-display",
    heading: "font-bold text-heading",
    lead: "font-bold text-lead",
    copy: "font-medium text-copy"
  };
  const widths = {
    default: "max-w-prose",
    narrow: "max-w-prose-narrow",
    wide: "max-w-prose-wide"
  };
  const styles = clsx_m_default(
    missingClass(className, "whitespace-") && "whitespace-pre-wrap",
    missingClass(className, "max-w-") && widths[width],
    missingClass(className, "font-") && sizes[size],
    className
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Component2, { ...props, className: styles, children: format ? formatText(children) : children }, void 0, false, {
    fileName: "app/components/Text.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}
function Section({
  as: Component2 = "section",
  children,
  className,
  divider = "none",
  display = "grid",
  heading,
  padding = "all",
  ...props
}) {
  const paddings = {
    x: "px-6 md:px-8 lg:px-12",
    y: "py-6 md:py-8 lg:py-12",
    swimlane: "pt-4 md:pt-8 lg:pt-12 md:pb-4 lg:pb-8",
    all: "p-6 md:p-8 lg:p-12"
  };
  const dividers = {
    none: "border-none",
    top: "border-t border-primary/05",
    bottom: "border-b border-primary/05",
    both: "border-y border-primary/05"
  };
  const displays = {
    flex: "flex",
    grid: "grid"
  };
  const styles = clsx_m_default(
    "w-full gap-4 md:gap-8",
    displays[display],
    missingClass(className, "\\mp[xy]?-") && paddings[padding],
    dividers[divider],
    className
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Component2, { ...props, className: styles, children: [
    heading && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { size: "lead", className: padding === "y" ? paddings["x"] : "", children: heading }, void 0, false, {
      fileName: "app/components/Text.tsx",
      lineNumber: 150,
      columnNumber: 9
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/Text.tsx",
    lineNumber: 148,
    columnNumber: 5
  }, this);
}
function PageHeader({
  children,
  className,
  heading,
  variant = "default",
  ...props
}) {
  const variants = {
    default: "grid w-full gap-8 p-6 py-8 md:p-8 lg:p-12 justify-items-start",
    blogPost: "grid md:text-center w-full gap-4 p-6 py-8 md:p-8 lg:p-12 md:justify-items-center",
    allCollections: "flex justify-between items-baseline gap-8 p-6 md:p-8 lg:p-12"
  };
  const styles = clsx_m_default(variants[variant], className);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { ...props, className: styles, children: [
    heading && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { as: "h1", width: "narrow", size: "heading", className: "inline-block", children: heading }, void 0, false, {
      fileName: "app/components/Text.tsx",
      lineNumber: 185,
      columnNumber: 9
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/Text.tsx",
    lineNumber: 183,
    columnNumber: 5
  }, this);
}

// app/components/Input.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Input({
  className = "",
  type,
  variant,
  ...props
}) {
  const variants = {
    search: "bg-transparent px-0 py-2 text-heading w-full focus:ring-0 border-x-0 border-t-0 transition border-b-2 border-primary/10 focus:border-primary/90",
    minisearch: "bg-transparent hidden md:inline-block text-left lg:text-right border-b transition border-transparent -mb-px border-x-0 border-t-0 appearance-none px-0 py-1 focus:ring-transparent placeholder:opacity-20 placeholder:text-inherit"
  };
  const styles = clsx_m_default(variants[variant], className);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type, ...props, className: styles }, void 0, false, {
    fileName: "app/components/Input.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}

// app/lib/const.ts
var DEFAULT_GRID_IMG_LOAD_EAGER_COUNT = 4;
var ATTR_LOADING_EAGER = "eager";
function getImageLoadingPriority(index, maxEagerLoadCount = DEFAULT_GRID_IMG_LOAD_EAGER_COUNT) {
  return index < maxEagerLoadCount ? ATTR_LOADING_EAGER : void 0;
}

// app/components/ProductGallery.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function ProductGallery({
  media,
  className
}) {
  if (!media.length) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "div",
    {
      className: `swimlane md:grid-flow-row hiddenScroll md:p-0 md:overflow-x-auto md:grid-cols-2 ${className}`,
      children: media.map((med, i7) => {
        let mediaProps = {};
        const isFirst = i7 === 0;
        const isFourth = i7 === 3;
        const isFullWidth = i7 % 3 === 0;
        const data = {
          ...med,
          image: {
            ...med.image,
            altText: med.alt || "Product image"
          }
        };
        switch (med.mediaContentType) {
          case "IMAGE":
            mediaProps = {
              width: 800,
              widths: [400, 800, 1200, 1600, 2e3, 2400]
            };
            break;
          case "VIDEO":
            mediaProps = {
              width: "100%",
              autoPlay: true,
              controls: false,
              muted: true,
              loop: true,
              preload: "auto"
            };
            break;
          case "EXTERNAL_VIDEO":
            mediaProps = { width: "100%" };
            break;
          case "MODEL_3D":
            mediaProps = {
              width: "100%",
              interactionPromptThreshold: "0",
              ar: true,
              loading: ATTR_LOADING_EAGER,
              disableZoom: true
            };
            break;
        }
        if (i7 === 0 && med.mediaContentType === "IMAGE") {
          mediaProps.loading = ATTR_LOADING_EAGER;
        }
        const style = [
          isFullWidth ? "md:col-span-2" : "md:col-span-1",
          isFirst || isFourth ? "" : "md:aspect-[4/5]",
          "aspect-square snap-center card-image bg-white dark:bg-contrast/10 w-mobileGallery md:w-full"
        ].join(" ");
        return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "div",
          {
            className: style,
            children: med.image && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "img",
              {
                src: data.image.url,
                alt: data.image.altText,
                className: "w-full h-full aspect-square fadeIn object-cover"
              },
              void 0,
              false,
              {
                fileName: "app/components/ProductGallery.tsx",
                lineNumber: 87,
                columnNumber: 15
              },
              this
            )
          },
          med.id || med.image.id,
          false,
          {
            fileName: "app/components/ProductGallery.tsx",
            lineNumber: 80,
            columnNumber: 11
          },
          this
        );
      })
    },
    void 0,
    false,
    {
      fileName: "app/components/ProductGallery.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
}

// app/lib/placeholders.ts
var PLACEHOLDERS = {
  HEROS: [
    {
      heading: { value: "All Mountain All Season" },
      byline: {
        value: "The All New Hydrogen Snowboard Exclusively From Shopify"
      },
      cta: { value: "Shop Now \u2192" },
      handle: "freestyle",
      spread: {
        reference: {
          mediaContentType: "IMAGE",
          alt: "Tracks in the snow leading to a person on a mountain top with a red jacket contrasting to an epic blue horizon with a mountain range in the distance.",
          previewImage: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Hydrogen_Hero_Feature_1.jpg?v=1654902468"
          },
          id: "gid://shopify/MediaImage/29259478466616",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Hydrogen_Hero_Feature_1.jpg?v=1654902468",
            width: 2500,
            height: 3155
          }
        }
      },
      spreadSecondary: {
        reference: {
          __typename: "MediaImage",
          mediaContentType: "IMAGE",
          alt: "A snowboarder standing on a mountain top in choppy snow, shows off the back of his snowboard which reads Hydrogen in a cursive script.",
          previewImage: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Hydrogen_Hero_Feature_2.jpg?v=1654902468"
          },
          id: "gid://shopify/MediaImage/29259478499384",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Hydrogen_Hero_Feature_2.jpg?v=1654902468",
            width: 2500,
            height: 3155
          }
        }
      },
      height: "full",
      top: true,
      decoding: "sync",
      loading: "eager"
    },
    {
      heading: { value: "From the Slopes to the Chalet" },
      byline: null,
      cta: { value: "Shop Now \u2192" },
      handle: "backcountry",
      spread: {
        reference: {
          __typename: "MediaImage",
          mediaContentType: "IMAGE",
          alt: "A skier hikes up a mountain through the snow with skis over their shoulder.",
          previewImage: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Chalet_Collection_Feature_1.jpg?v=1654902306"
          },
          id: "gid://shopify/MediaImage/29259478368312",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Chalet_Collection_Feature_1.jpg?v=1654902306",
            width: 2500,
            height: 2500
          }
        }
      },
      spreadSecondary: {
        reference: {
          __typename: "MediaImage",
          mediaContentType: "IMAGE",
          alt: "A snow covered lodge is illuminated by lights at night with a dark starry sky and mountain backdrop.",
          previewImage: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Chalet_Collection_Feature_2.jpg?v=1654902306"
          },
          id: "gid://shopify/MediaImage/29259478401080",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Chalet_Collection_Feature_2.jpg?v=1654902306",
            width: 2500,
            height: 2500
          }
        }
      }
    },
    {
      heading: { value: "The Winter 2022 Collection" },
      byline: { value: "Just Dropped" },
      cta: { value: "Shop Now \u2192" },
      handle: "winter-2022",
      spread: {
        reference: {
          __typename: "MediaImage",
          mediaContentType: "IMAGE",
          alt: "Three young women in snowboarding attire embracing and laughing while snow falls around them",
          previewImage: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Collection_Feature_Wide.jpg?v=1654902160"
          },
          id: "gid://shopify/MediaImage/29259478302776",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Collection_Feature_Wide.jpg?v=1654902160",
            width: 5e3,
            height: 2500
          }
        }
      },
      spreadSecondary: null
    }
  ],
  PRODUCT_INFO: [
    {
      title: "Description",
      content: "We threw snow tires on our core classics... Good for all year round! Named after my favorite football match of the year. Just like any of our joints, dress them up or down..."
    },
    {
      title: "Size and Fit",
      content: "We threw snow tires on our core classics... Good for all year round! Named after my favorite football match of the year. Just like any of our joints, dress them up or down..."
    },
    {
      title: "Delivery and Returns",
      content: `The towels had been hanging from the rod for years. They were stained and worn, and quite frankly, just plain ugly. Debra didn't want to touch them but she really didn't have a choice. It was important for her to see what was living within them. Patrick didn't want to go. The fact that she was insisting they must go made him want to go even less. He had no desire to make small talk with strangers he would never again see just to be polite. But she insisted that Patrick go, and she would soon find out that this would be the biggest mistake she could make in their relationship.`
    }
  ],
  PRODUCT: {
    label: "Limited Edition",
    id: "gid://shopify/Product/6730850828344",
    title: "The Hydrogen",
    publishedAt: "2021-06-17T18:33:17Z",
    handle: "snowboard",
    description: "Description Our flagship board, ideal for technical terrain and those who dare to go where the chairlift can't take you. The Hydrogen excels in the backcountry making riding out of bounds as easy as resort groomers. New for 2021, the Hydrogen Snowboard has Oxygen Pack inserts giving you more float on the deepest days. Care Guide Clean well after use Wax regularly Specs Weight: 5 lb Length: 4 ft Width: 1 ft Manufactured on: 8/2/2021, 3:30:00 PM Manufactured by: Shopify",
    priceRange: {
      minVariantPrice: {
        amount: "775.0",
        currencyCode: "CAD"
      },
      maxVariantPrice: {
        amount: "775.0",
        currencyCode: "CAD"
      }
    },
    options: [
      {
        name: "Color",
        values: ["Morning", "Evening", "Night"]
      },
      {
        name: "Size",
        values: ["154", "158", "160"]
      }
    ],
    variants: {
      nodes: [
        {
          id: "gid://shopify/ProductVariant/41007289630776",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/hydrogen-morning.jpg?v=1636146509",
            altText: "The Hydrogen snowboard, color Morning",
            width: 1200,
            height: 1504
          },
          price: {
            amount: "775.0",
            currencyCode: "CAD"
          },
          compareAtPrice: {
            amount: "840.0",
            currencyCode: "CAD"
          }
        }
      ]
    }
  }
};
function getHeroPlaceholder(heros) {
  if (!heros?.length)
    return [];
  return heros.map((hero, index) => {
    if (hero?.heading?.value) {
      return hero;
    }
    const placeholder = PLACEHOLDERS.HEROS[index];
    const byLine = hero?.byLine || hero?.descriptionHtml ? { value: hero.descriptionHtml } : placeholder.byline;
    const heading = hero?.heading || hero?.title ? { value: hero.title } : placeholder.heading;
    return {
      heading,
      byLine,
      cta: hero?.cta || placeholder.cta,
      handle: hero?.handle || placeholder.handle,
      id: hero?.id || index,
      spread: hero?.spread || placeholder.spread,
      spreadSecondary: hero?.spreadSecondary || placeholder.spreadSecondary,
      height: placeholder?.height || void 0,
      top: placeholder?.top || void 0
    };
  });
}
function getProductPlaceholder() {
  return PLACEHOLDERS.PRODUCT;
}

// app/components/ProductCard.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function ProductCard({
  product,
  label,
  className,
  loading,
  onClick,
  quickAdd
}) {
  let cardLabel;
  const cardProduct = product?.variants ? product : getProductPlaceholder();
  if (!cardProduct?.variants?.nodes?.length)
    return null;
  const firstVariant = flattenConnection(cardProduct.variants)[0];
  if (!firstVariant)
    return null;
  const { image, price, compareAtPrice } = firstVariant;
  if (label) {
    cardLabel = label;
  } else if (isDiscounted(price, compareAtPrice)) {
    cardLabel = "Sale";
  } else if (isNewArrival(product.publishedAt)) {
    cardLabel = "New";
  }
  const productAnalytics = {
    productGid: product.id,
    variantGid: firstVariant.id,
    name: product.title,
    variantName: firstVariant.title,
    brand: product.vendor,
    price: firstVariant.price.amount,
    quantity: 1
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      Link2,
      {
        onClick,
        to: `/products/${product.handle}`,
        prefetch: "intent",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: clsx_m_default("grid gap-4", className), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "card-image aspect-[4/5] bg-primary/5", children: [
            image && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              Image,
              {
                className: "aspect-[4/5] w-full object-cover fadeIn",
                widths: [320],
                sizes: "320px",
                loaderOptions: {
                  crop: "center",
                  scale: 2,
                  width: 320,
                  height: 400
                },
                data: image,
                alt: image.altText || `Picture of ${product.title}`,
                loading
              },
              void 0,
              false,
              {
                fileName: "app/components/ProductCard.tsx",
                lineNumber: 70,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              Text,
              {
                as: "label",
                size: "fine",
                className: "absolute top-0 right-0 m-4 text-right text-notice",
                children: cardLabel
              },
              void 0,
              false,
              {
                fileName: "app/components/ProductCard.tsx",
                lineNumber: 85,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/ProductCard.tsx",
            lineNumber: 68,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              Text,
              {
                className: "w-full overflow-hidden whitespace-nowrap text-ellipsis ",
                as: "h3",
                children: product.title
              },
              void 0,
              false,
              {
                fileName: "app/components/ProductCard.tsx",
                lineNumber: 94,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { className: "flex gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Money, { withoutTrailingZeros: true, data: price }, void 0, false, {
                fileName: "app/components/ProductCard.tsx",
                lineNumber: 102,
                columnNumber: 17
              }, this),
              isDiscounted(price, compareAtPrice) && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                CompareAtPrice,
                {
                  className: "opacity-50",
                  data: compareAtPrice
                },
                void 0,
                false,
                {
                  fileName: "app/components/ProductCard.tsx",
                  lineNumber: 104,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/ProductCard.tsx",
              lineNumber: 101,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/components/ProductCard.tsx",
              lineNumber: 100,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ProductCard.tsx",
            lineNumber: 93,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ProductCard.tsx",
          lineNumber: 67,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductCard.tsx",
        lineNumber: 62,
        columnNumber: 7
      },
      this
    ),
    quickAdd && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      AddToCartButton,
      {
        lines: [
          {
            quantity: 1,
            merchandiseId: firstVariant.id
          }
        ],
        variant: "secondary",
        className: "mt-2",
        analytics: {
          products: [productAnalytics],
          totalValue: parseFloat(productAnalytics.price)
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { as: "span", className: "flex items-center justify-center gap-2", children: "Add to Bag" }, void 0, false, {
          fileName: "app/components/ProductCard.tsx",
          lineNumber: 129,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductCard.tsx",
        lineNumber: 115,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/ProductCard.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}
function CompareAtPrice({
  data,
  className
}) {
  const { currencyNarrowSymbol, withoutTrailingZerosAndCurrency } = useMoney(data);
  const styles = clsx_m_default("strike", className);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: styles, children: [
    currencyNarrowSymbol,
    withoutTrailingZerosAndCurrency
  ] }, void 0, true, {
    fileName: "app/components/ProductCard.tsx",
    lineNumber: 151,
    columnNumber: 5
  }, this);
}

// app/components/ProductSwimlane.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var mockProducts = new Array(12).fill("");
function ProductSwimlane({
  title = "Featured Products",
  products = mockProducts,
  count = 12,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Section, { heading: title, padding: "y", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "swimlane hiddenScroll md:pb-8 md:scroll-px-8 lg:scroll-px-12 md:px-8 lg:px-12", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    ProductCard,
    {
      product,
      className: "snap-start w-80"
    },
    product.id,
    false,
    {
      fileName: "app/components/ProductSwimlane.tsx",
      lineNumber: 21,
      columnNumber: 11
    },
    this
  )) }, void 0, false, {
    fileName: "app/components/ProductSwimlane.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ProductSwimlane.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/components/ProductGrid.tsx
var import_react35 = __toESM(require_react());
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
function ProductGrid({
  url,
  collection,
  ...props
}) {
  const [initialProducts, setInitialProducts] = (0, import_react35.useState)(
    collection?.products?.nodes || []
  );
  const [nextPage, setNextPage] = (0, import_react35.useState)(
    collection?.products?.pageInfo?.hasNextPage
  );
  const [endCursor, setEndCursor] = (0, import_react35.useState)(
    collection?.products?.pageInfo?.endCursor
  );
  const [products, setProducts] = (0, import_react35.useState)(initialProducts);
  const productProps = collection?.products?.nodes || [];
  if (initialProducts !== productProps) {
    setInitialProducts(productProps);
    setProducts(productProps);
  }
  const fetcher = useFetcher();
  function fetchMoreProducts() {
    fetcher.load(`${url}?index&cursor=${endCursor}`);
  }
  (0, import_react35.useEffect)(() => {
    if (!fetcher.data)
      return;
    const { collection: collection2 } = fetcher.data;
    setProducts((prev) => [...prev, ...collection2.products.nodes]);
    setNextPage(collection2.products.pageInfo.hasNextPage);
    setEndCursor(collection2.products.pageInfo.endCursor);
  }, [fetcher.data]);
  const haveProducts = initialProducts.length > 0;
  if (!haveProducts) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "No products found on this collection" }, void 0, false, {
        fileName: "app/components/ProductGrid.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link2, { to: "/products", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "underline", children: "Browse catalog" }, void 0, false, {
        fileName: "app/components/ProductGrid.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/ProductGrid.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProductGrid.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Grid, { layout: "products", ...props, children: products.map((product, i7) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      ProductCard,
      {
        product,
        loading: getImageLoadingPriority(i7)
      },
      product.id,
      false,
      {
        fileName: "app/components/ProductGrid.tsx",
        lineNumber: 67,
        columnNumber: 11
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/ProductGrid.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    nextPage && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center justify-center mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      Button,
      {
        disabled: fetcher.state !== "idle",
        variant: "secondary",
        onClick: fetchMoreProducts,
        width: "full",
        prefetch: "intent",
        children: fetcher.state !== "idle" ? "Loading..." : "Load more products"
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductGrid.tsx",
        lineNumber: 77,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/ProductGrid.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ProductGrid.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

// app/components/Skeleton.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
function Skeleton({
  as: Component2 = "div",
  width,
  height,
  className,
  ...props
}) {
  const styles = clsx_m_default("rounded bg-primary/10", className);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Component2, { ...props, width, height, className: styles }, void 0, false, {
    fileName: "app/components/Skeleton.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/components/Button.tsx
var import_react36 = __toESM(require_react());
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
var Button = (0, import_react36.forwardRef)(
  ({
    as = "button",
    className = "",
    variant = "primary",
    width = "auto",
    ...props
  }, ref) => {
    const Component2 = props?.to ? Link : as;
    const baseButtonClasses = "inline-block rounded font-medium text-center py-3 px-6";
    const variants = {
      primary: `${baseButtonClasses} bg-primary text-contrast`,
      secondary: `${baseButtonClasses} border border-primary/10 bg-contrast text-primary`,
      inline: "border-b border-primary/10 leading-none pb-1"
    };
    const widths = {
      auto: "w-auto",
      full: "w-full"
    };
    const styles = clsx_m_default(
      missingClass(className, "bg-") && variants[variant],
      missingClass(className, "w-") && widths[width],
      className
    );
    return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      Component2,
      {
        className: styles,
        ...props,
        ref
      },
      void 0,
      false,
      {
        fileName: "app/components/Button.tsx",
        lineNumber: 47,
        columnNumber: 7
      },
      this
    );
  }
);

// app/components/CountrySelector.tsx
var import_react39 = __toESM(require_react());

// node_modules/react-intersection-observer/react-intersection-observer.modern.mjs
var React = __toESM(require_react(), 1);
var observerMap = /* @__PURE__ */ new Map();
var RootIds = /* @__PURE__ */ new WeakMap();
var rootId = 0;
var unsupportedValue = void 0;
function getRootId(root) {
  if (!root)
    return "0";
  if (RootIds.has(root))
    return RootIds.get(root);
  rootId += 1;
  RootIds.set(root, rootId.toString());
  return RootIds.get(root);
}
function optionsToId(options) {
  return Object.keys(options).sort().filter((key) => options[key] !== void 0).map((key) => {
    return `${key}_${key === "root" ? getRootId(options.root) : options[key]}`;
  }).toString();
}
function createObserver(options) {
  let id = optionsToId(options);
  let instance = observerMap.get(id);
  if (!instance) {
    const elements = /* @__PURE__ */ new Map();
    let thresholds;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        var _elements$get;
        const inView = entry.isIntersecting && thresholds.some((threshold) => entry.intersectionRatio >= threshold);
        if (options.trackVisibility && typeof entry.isVisible === "undefined") {
          entry.isVisible = inView;
        }
        (_elements$get = elements.get(entry.target)) == null ? void 0 : _elements$get.forEach((callback) => {
          callback(inView, entry);
        });
      });
    }, options);
    thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [options.threshold || 0]);
    instance = {
      id,
      observer,
      elements
    };
    observerMap.set(id, instance);
  }
  return instance;
}
function observe(element, callback, options = {}, fallbackInView = unsupportedValue) {
  if (typeof window.IntersectionObserver === "undefined" && fallbackInView !== void 0) {
    const bounds = element.getBoundingClientRect();
    callback(fallbackInView, {
      isIntersecting: fallbackInView,
      target: element,
      intersectionRatio: typeof options.threshold === "number" ? options.threshold : 0,
      time: 0,
      boundingClientRect: bounds,
      intersectionRect: bounds,
      rootBounds: bounds
    });
    return () => {
    };
  }
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  let callbacks = elements.get(element) || [];
  if (!elements.has(element)) {
    elements.set(element, callbacks);
  }
  callbacks.push(callback);
  observer.observe(element);
  return function unobserve() {
    callbacks.splice(callbacks.indexOf(callback), 1);
    if (callbacks.length === 0) {
      elements.delete(element);
      observer.unobserve(element);
    }
    if (elements.size === 0) {
      observer.disconnect();
      observerMap.delete(id);
    }
  };
}
function useInView({
  threshold,
  delay,
  trackVisibility,
  rootMargin,
  root,
  triggerOnce,
  skip,
  initialInView,
  fallbackInView,
  onChange
} = {}) {
  var _state$entry;
  const [ref, setRef] = React.useState(null);
  const callback = React.useRef();
  const [state, setState] = React.useState({
    inView: !!initialInView,
    entry: void 0
  });
  callback.current = onChange;
  React.useEffect(
    () => {
      if (skip || !ref)
        return;
      let unobserve;
      unobserve = observe(ref, (inView, entry) => {
        setState({
          inView,
          entry
        });
        if (callback.current)
          callback.current(inView, entry);
        if (entry.isIntersecting && triggerOnce && unobserve) {
          unobserve();
          unobserve = void 0;
        }
      }, {
        root,
        rootMargin,
        threshold,
        trackVisibility,
        delay
      }, fallbackInView);
      return () => {
        if (unobserve) {
          unobserve();
        }
      };
    },
    [
      Array.isArray(threshold) ? threshold.toString() : threshold,
      ref,
      root,
      rootMargin,
      triggerOnce,
      skip,
      trackVisibility,
      fallbackInView,
      delay
    ]
  );
  const entryTarget = (_state$entry = state.entry) == null ? void 0 : _state$entry.target;
  const previousEntryTarget = React.useRef();
  if (!ref && entryTarget && !triggerOnce && !skip && previousEntryTarget.current !== entryTarget) {
    previousEntryTarget.current = entryTarget;
    setState({
      inView: !!initialInView,
      entry: void 0
    });
  }
  const result = [setRef, state.inView, state.entry];
  result.ref = result[0];
  result.inView = result[1];
  result.entry = result[2];
  return result;
}

// app/components/CountrySelector.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
function CountrySelector() {
  const [root] = useMatches();
  const fetcher = useFetcher();
  const closeRef = (0, import_react39.useRef)(null);
  const selectedLocale = root.data?.selectedLocale ?? DEFAULT_LOCALE;
  const { pathname, search } = useLocation();
  const pathWithoutLocale = `${pathname.replace(
    selectedLocale.pathPrefix,
    ""
  )}${search}`;
  const countries = fetcher.data ?? {};
  const defaultLocale = countries?.["default"];
  const defaultLocalePrefix = defaultLocale ? `${defaultLocale?.language}-${defaultLocale?.country}` : "";
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const observerRef = (0, import_react39.useRef)(null);
  (0, import_react39.useEffect)(() => {
    ref(observerRef.current);
  }, [ref, observerRef]);
  (0, import_react39.useEffect)(() => {
    if (!inView || fetcher.data || fetcher.state === "loading")
      return;
    fetcher.load("/api/countries");
  }, [inView, fetcher]);
  const closeDropdown = (0, import_react39.useCallback)(() => {
    closeRef.current?.removeAttribute("open");
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "section",
    {
      ref: observerRef,
      className: "grid w-full gap-4",
      onMouseLeave: closeDropdown,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Heading, { size: "lead", className: "cursor-default", as: "h3", children: "Country" }, void 0, false, {
          fileName: "app/components/CountrySelector.tsx",
          lineNumber: 53,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "details",
          {
            className: "absolute w-full border rounded border-contrast/30 dark:border-white open:round-b-none overflow-clip",
            ref: closeRef,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("summary", { className: "flex items-center justify-between w-full px-4 py-3 cursor-pointer", children: selectedLocale.label }, void 0, false, {
                fileName: "app/components/CountrySelector.tsx",
                lineNumber: 61,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "w-full overflow-auto border-t border-contrast/30 dark:border-white bg-contrast/30 max-h-36", children: countries && Object.keys(countries).map((countryPath) => {
                const countryLocale = countries[countryPath];
                const isSelected = countryLocale.language === selectedLocale.language && countryLocale.country === selectedLocale.country;
                const countryUrlPath = getCountryUrlPath({
                  countryLocale,
                  defaultLocalePrefix,
                  pathWithoutLocale
                });
                return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                  Country,
                  {
                    closeDropdown,
                    countryUrlPath,
                    isSelected,
                    countryLocale
                  },
                  countryPath,
                  false,
                  {
                    fileName: "app/components/CountrySelector.tsx",
                    lineNumber: 79,
                    columnNumber: 19
                  },
                  this
                );
              }) }, void 0, false, {
                fileName: "app/components/CountrySelector.tsx",
                lineNumber: 64,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/CountrySelector.tsx",
            lineNumber: 57,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/CountrySelector.tsx",
          lineNumber: 56,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/CountrySelector.tsx",
      lineNumber: 48,
      columnNumber: 5
    },
    this
  );
}
function Country({
  closeDropdown,
  countryLocale,
  countryUrlPath,
  isSelected
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    ChangeLocaleForm,
    {
      redirectTo: countryUrlPath,
      buyerIdentity: {
        countryCode: countryLocale.country
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        Button,
        {
          className: clsx_m_default([
            "text-contrast dark:text-primary",
            "bg-primary dark:bg-contrast w-full p-2 transition rounded flex justify-start",
            "items-center text-left cursor-pointer py-2 px-4"
          ]),
          type: "submit",
          variant: "primary",
          onClick: closeDropdown,
          children: [
            countryLocale.label,
            isSelected ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "ml-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(IconCheck, {}, void 0, false, {
              fileName: "app/components/CountrySelector.tsx",
              lineNumber: 127,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/CountrySelector.tsx",
              lineNumber: 126,
              columnNumber: 11
            }, this) : null
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/CountrySelector.tsx",
          lineNumber: 114,
          columnNumber: 7
        },
        this
      )
    },
    countryLocale.country,
    false,
    {
      fileName: "app/components/CountrySelector.tsx",
      lineNumber: 107,
      columnNumber: 5
    },
    this
  );
}
function ChangeLocaleForm({
  children,
  buyerIdentity,
  redirectTo
}) {
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(fetcher.Form, { action: "/cart", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "input",
      {
        type: "hidden",
        name: "cartAction",
        value: "UPDATE_BUYER_IDENTITY" /* UPDATE_BUYER_IDENTITY */
      },
      void 0,
      false,
      {
        fileName: "app/components/CountrySelector.tsx",
        lineNumber: 148,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "input",
      {
        type: "hidden",
        name: "buyerIdentity",
        value: JSON.stringify(buyerIdentity)
      },
      void 0,
      false,
      {
        fileName: "app/components/CountrySelector.tsx",
        lineNumber: 153,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, false, {
      fileName: "app/components/CountrySelector.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/CountrySelector.tsx",
    lineNumber: 147,
    columnNumber: 5
  }, this);
}
function getCountryUrlPath({
  countryLocale,
  defaultLocalePrefix,
  pathWithoutLocale
}) {
  let countryPrefixPath = "";
  const countryLocalePrefix = `${countryLocale.language}-${countryLocale.country}`;
  if (countryLocalePrefix !== defaultLocalePrefix) {
    countryPrefixPath = `/${countryLocalePrefix.toLowerCase()}`;
  }
  return `${countryPrefixPath}${pathWithoutLocale}`;
}

// app/components/Cart.tsx
var import_react47 = __toESM(require_react());

// node_modules/react-use/esm/misc/util.js
function on(obj) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  if (obj && obj.addEventListener) {
    obj.addEventListener.apply(obj, args);
  }
}
function off(obj) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  if (obj && obj.removeEventListener) {
    obj.removeEventListener.apply(obj, args);
  }
}
var isBrowser = typeof window !== "undefined";

// node_modules/react-use/esm/useDebounce.js
var import_react41 = __toESM(require_react());

// node_modules/react-use/esm/useTimeoutFn.js
var import_react40 = __toESM(require_react());
function useTimeoutFn(fn, ms) {
  if (ms === void 0) {
    ms = 0;
  }
  var ready = (0, import_react40.useRef)(false);
  var timeout = (0, import_react40.useRef)();
  var callback = (0, import_react40.useRef)(fn);
  var isReady = (0, import_react40.useCallback)(function() {
    return ready.current;
  }, []);
  var set = (0, import_react40.useCallback)(function() {
    ready.current = false;
    timeout.current && clearTimeout(timeout.current);
    timeout.current = setTimeout(function() {
      ready.current = true;
      callback.current();
    }, ms);
  }, [ms]);
  var clear = (0, import_react40.useCallback)(function() {
    ready.current = null;
    timeout.current && clearTimeout(timeout.current);
  }, []);
  (0, import_react40.useEffect)(function() {
    callback.current = fn;
  }, [fn]);
  (0, import_react40.useEffect)(function() {
    set();
    return clear;
  }, [ms]);
  return [isReady, clear, set];
}

// node_modules/react-use/esm/useDebounce.js
function useDebounce(fn, ms, deps) {
  if (ms === void 0) {
    ms = 0;
  }
  if (deps === void 0) {
    deps = [];
  }
  var _a = useTimeoutFn(fn, ms), isReady = _a[0], cancel = _a[1], reset = _a[2];
  (0, import_react41.useEffect)(reset, deps);
  return [isReady, cancel];
}

// node_modules/react-use/esm/useEffectOnce.js
var import_react42 = __toESM(require_react());
var useEffectOnce = function(effect) {
  (0, import_react42.useEffect)(effect, []);
};
var useEffectOnce_default = useEffectOnce;

// node_modules/react-use/esm/useRafState.js
var import_react44 = __toESM(require_react());

// node_modules/react-use/esm/useUnmount.js
var import_react43 = __toESM(require_react());
var useUnmount = function(fn) {
  var fnRef = (0, import_react43.useRef)(fn);
  fnRef.current = fn;
  useEffectOnce_default(function() {
    return function() {
      return fnRef.current();
    };
  });
};
var useUnmount_default = useUnmount;

// node_modules/react-use/esm/useRafState.js
var useRafState = function(initialState) {
  var frame = (0, import_react44.useRef)(0);
  var _a = (0, import_react44.useState)(initialState), state = _a[0], setState = _a[1];
  var setRafState = (0, import_react44.useCallback)(function(value) {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(function() {
      setState(value);
    });
  }, []);
  useUnmount_default(function() {
    cancelAnimationFrame(frame.current);
  });
  return [state, setRafState];
};
var useRafState_default = useRafState;

// node_modules/react-use/esm/useScroll.js
var import_react45 = __toESM(require_react());
var useScroll = function(ref) {
  if (true) {
    if (typeof ref !== "object" || typeof ref.current === "undefined") {
      console.error("`useScroll` expects a single ref argument.");
    }
  }
  var _a = useRafState_default({
    x: 0,
    y: 0
  }), state = _a[0], setState = _a[1];
  (0, import_react45.useEffect)(function() {
    var handler = function() {
      if (ref.current) {
        setState({
          x: ref.current.scrollLeft,
          y: ref.current.scrollTop
        });
      }
    };
    if (ref.current) {
      on(ref.current, "scroll", handler, {
        capture: false,
        passive: true
      });
    }
    return function() {
      if (ref.current) {
        off(ref.current, "scroll", handler);
      }
    };
  }, [ref]);
  return state;
};
var useScroll_default = useScroll;

// node_modules/react-use/esm/useWindowScroll.js
var import_react46 = __toESM(require_react());
var useWindowScroll = function() {
  var _a = useRafState_default(function() {
    return {
      x: isBrowser ? window.pageXOffset : 0,
      y: isBrowser ? window.pageYOffset : 0
    };
  }), state = _a[0], setState = _a[1];
  (0, import_react46.useEffect)(function() {
    var handler = function() {
      setState(function(state2) {
        var pageXOffset = window.pageXOffset, pageYOffset = window.pageYOffset;
        return state2.x !== pageXOffset || state2.y !== pageYOffset ? {
          x: pageXOffset,
          y: pageYOffset
        } : state2;
      });
    };
    handler();
    on(window, "scroll", handler, {
      capture: false,
      passive: true
    });
    return function() {
      off(window, "scroll", handler);
    };
  }, []);
  return state;
};
var useWindowScroll_default = useWindowScroll;

// app/components/Cart.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
function Cart({
  layout,
  onClose,
  cart
}) {
  const linesCount = Boolean(cart?.lines?.edges?.length || 0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CartEmpty, { hidden: linesCount, onClose, layout }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CartDetails, { cart, layout }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
function CartDetails({
  layout,
  cart
}) {
  const cartHasItems = !!cart && cart.totalQuantity > 0;
  const container = {
    drawer: "grid grid-cols-1 h-screen-no-nav grid-rows-[1fr_auto]",
    page: "w-full pb-12 grid md:grid-cols-2 md:items-start gap-8 md:gap-8 lg:gap-12"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: container[layout], children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CartLines, { lines: cart?.lines, layout }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    cartHasItems && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CartSummary, { cost: cart.cost, layout, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CartDiscounts, { discountCodes: cart.discountCodes }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CartCheckoutActions, { checkoutUrl: cart.checkoutUrl }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
function CartDiscounts({
  discountCodes
}) {
  const codes = discountCodes?.map(({ code }) => code).join(", ") || null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("dl", { className: codes ? "grid" : "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center justify-between font-medium", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { as: "dt", children: "Discount(s)" }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(UpdateDiscountForm, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          IconRemove,
          {
            "aria-hidden": "true",
            style: { height: 18, marginRight: 4 }
          },
          void 0,
          false,
          {
            fileName: "app/components/Cart.tsx",
            lineNumber: 92,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 91,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { as: "dd", children: codes }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(UpdateDiscountForm, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "div",
      {
        className: clsx_m_default(
          codes ? "hidden" : "flex",
          "items-center gap-4 justify-between text-copy"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "input",
            {
              className: getInputStyleClasses(),
              type: "text",
              name: "discountCode",
              placeholder: "Discount code"
            },
            void 0,
            false,
            {
              fileName: "app/components/Cart.tsx",
              lineNumber: 111,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { className: "flex justify-end font-medium whitespace-nowrap", children: "Apply Discount" }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 117,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/Cart.tsx",
        lineNumber: 105,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}
function UpdateDiscountForm({ children }) {
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(fetcher.Form, { action: "/cart", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "input",
      {
        type: "hidden",
        name: "cartAction",
        value: "UPDATE_DISCOUNT" /* UPDATE_DISCOUNT */
      },
      void 0,
      false,
      {
        fileName: "app/components/Cart.tsx",
        lineNumber: 130,
        columnNumber: 7
      },
      this
    ),
    children
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 129,
    columnNumber: 5
  }, this);
}
function CartLines({
  layout = "drawer",
  lines: cartLines
}) {
  const currentLines = cartLines ? flattenConnection(cartLines) : [];
  const scrollRef = (0, import_react47.useRef)(null);
  const { y: y5 } = useScroll_default(scrollRef);
  const className = clsx_m_default([
    y5 > 0 ? "border-t" : "",
    layout === "page" ? "flex-grow md:translate-y-4" : "px-6 pb-6 sm-max:pt-2 overflow-auto transition md:px-12"
  ]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "section",
    {
      ref: scrollRef,
      "aria-labelledby": "cart-contents",
      className,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ul", { className: "grid gap-6 md:gap-10", children: currentLines.map((line) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CartLineItem, { line }, line.id, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 166,
        columnNumber: 11
      }, this)) }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 164,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/Cart.tsx",
      lineNumber: 159,
      columnNumber: 5
    },
    this
  );
}
function CartCheckoutActions({ checkoutUrl }) {
  if (!checkoutUrl)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { href: checkoutUrl, target: "_self", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Button, { as: "span", width: "full", children: "Continue to Checkout" }, void 0, false, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 179,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 178,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 177,
    columnNumber: 5
  }, this);
}
function CartSummary({
  cost,
  layout,
  children = null
}) {
  const summary = {
    drawer: "grid gap-4 p-6 border-t md:px-12",
    page: "sticky top-nav grid gap-6 p-4 md:px-6 md:translate-y-4 bg-primary/5 rounded w-full"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { "aria-labelledby": "summary-heading", className: summary[layout], children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { id: "summary-heading", className: "sr-only", children: "Order summary" }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 204,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("dl", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center justify-between font-medium", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { as: "dt", children: "Subtotal" }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 209,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { as: "dd", "data-test": "subtotal", children: cost?.subtotalAmount?.amount ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Money, { data: cost?.subtotalAmount }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 212,
        columnNumber: 15
      }, this) : "-" }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 210,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 208,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 207,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 203,
    columnNumber: 5
  }, this);
}
function CartLineItem({ line }) {
  if (!line?.id)
    return null;
  const { id, quantity, merchandise } = line;
  if (typeof quantity === "undefined" || !merchandise?.product)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { className: "flex gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex-shrink", children: merchandise.image && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      Image,
      {
        width: 220,
        height: 220,
        data: merchandise.image,
        className: "object-cover object-center w-24 h-24 border rounded md:w-28 md:h-28",
        alt: merchandise.title
      },
      void 0,
      false,
      {
        fileName: "app/components/Cart.tsx",
        lineNumber: 235,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 233,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex justify-between flex-grow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Heading, { as: "h3", size: "copy", children: merchandise?.product?.handle ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Link2, { to: `/products/${merchandise.product.handle}`, children: merchandise?.product?.title || "" }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 249,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { children: merchandise?.product?.title || "" }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 253,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 247,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "grid pb-2", children: (merchandise?.selectedOptions || []).map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { color: "subtle", children: [
          option.name,
          ": ",
          option.value
        ] }, option.name, true, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 259,
          columnNumber: 15
        }, this)) }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 257,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex justify-start text-copy", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CartLineQuantityAdjust, { line }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 267,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 266,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ItemRemoveButton, { lineIds: [id] }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 269,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 265,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 246,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CartLinePrice, { line, as: "span" }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 273,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 272,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 245,
      columnNumber: 7
    }, this)
  ] }, id, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 232,
    columnNumber: 5
  }, this);
}
function ItemRemoveButton({ lineIds }) {
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(fetcher.Form, { action: "/cart", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "input",
      {
        type: "hidden",
        name: "cartAction",
        value: "REMOVE_FROM_CART" /* REMOVE_FROM_CART */
      },
      void 0,
      false,
      {
        fileName: "app/components/Cart.tsx",
        lineNumber: 285,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "linesIds", value: JSON.stringify(lineIds) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 290,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "button",
      {
        className: "flex items-center justify-center w-10 h-10 border rounded",
        type: "submit",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "sr-only", children: "Remove" }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 295,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(IconRemove, { "aria-hidden": "true" }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 296,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/Cart.tsx",
        lineNumber: 291,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 284,
    columnNumber: 5
  }, this);
}
function CartLineQuantityAdjust({ line }) {
  if (!line || typeof line?.quantity === "undefined")
    return null;
  const { id: lineId, quantity } = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { htmlFor: `quantity-${lineId}`, className: "sr-only", children: [
      "Quantity, ",
      quantity
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 310,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center border rounded", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(UpdateCartButton, { lines: [{ id: lineId, quantity: prevQuantity }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "button",
        {
          name: "decrease-quantity",
          "aria-label": "Decrease quantity",
          className: "w-10 h-10 transition text-primary/50 hover:text-primary disabled:text-primary/10",
          value: prevQuantity,
          disabled: quantity <= 1,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "\u2212" }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 322,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/Cart.tsx",
          lineNumber: 315,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 314,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "px-2 text-center", "data-test": "item-quantity", children: quantity }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 326,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(UpdateCartButton, { lines: [{ id: lineId, quantity: nextQuantity }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "button",
        {
          className: "w-10 h-10 transition text-primary/50 hover:text-primary",
          name: "increase-quantity",
          value: nextQuantity,
          "aria-label": "Increase quantity",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "+" }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 337,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/Cart.tsx",
          lineNumber: 331,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 330,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 313,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 309,
    columnNumber: 5
  }, this);
}
function UpdateCartButton({
  children,
  lines
}) {
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(fetcher.Form, { action: "/cart", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "cartAction", value: "UPDATE_CART" /* UPDATE_CART */ }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 356,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "lines", value: JSON.stringify(lines) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 357,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 355,
    columnNumber: 5
  }, this);
}
function CartLinePrice({
  line,
  priceType = "regular",
  ...passthroughProps
}) {
  if (!line?.cost?.amountPerQuantity || !line?.cost?.totalAmount)
    return null;
  const moneyV2 = priceType === "regular" ? line.cost.totalAmount : line.cost.compareAtAmountPerQuantity;
  if (moneyV2 == null) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Money, { withoutTrailingZeros: true, ...passthroughProps, data: moneyV2 }, void 0, false, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 383,
    columnNumber: 10
  }, this);
}
function CartEmpty({
  hidden = false,
  layout = "drawer",
  onClose
}) {
  const scrollRef = (0, import_react47.useRef)(null);
  const { y: y5 } = useScroll_default(scrollRef);
  const container = {
    drawer: clsx_m_default([
      "content-start gap-4 px-6 pb-8 transition overflow-y-scroll md:gap-12 md:px-12 h-screen-no-nav md:pb-12",
      y5 > 0 ? "border-t" : ""
    ]),
    page: clsx_m_default([
      hidden ? "" : "grid",
      `pb-12 w-full md:items-start gap-4 md:gap-8 lg:gap-12`
    ])
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { ref: scrollRef, className: container[layout], hidden, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { className: "grid gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { format: true, children: "Looks like you haven\u2019t added anything yet, let\u2019s get you started!" }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 412,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Button, { onClick: onClose, children: "Continue shopping" }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 417,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 416,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 411,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { className: "grid gap-8 pt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      FeaturedProducts,
      {
        count: 4,
        heading: "Shop Best Sellers",
        layout,
        onClose,
        sortKey: "BEST_SELLING"
      },
      void 0,
      false,
      {
        fileName: "app/components/Cart.tsx",
        lineNumber: 421,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 420,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 410,
    columnNumber: 5
  }, this);
}

// app/components/CartLoading.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
function CartLoading() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex w-full h-screen-no-nav justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 38,
      height: 38,
      viewBox: "0 0 38 38",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("linearGradient", { x1: "8.042%", y1: "0%", x2: "65.682%", y2: "23.865%", id: "a", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("stop", { stopColor: "#fff", stopOpacity: 0, offset: "0%" }, void 0, false, {
            fileName: "app/components/CartLoading.tsx",
            lineNumber: 13,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("stop", { stopColor: "#fff", stopOpacity: ".631", offset: "63.146%" }, void 0, false, {
            fileName: "app/components/CartLoading.tsx",
            lineNumber: 14,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("stop", { stopColor: "#fff", offset: "100%" }, void 0, false, {
            fileName: "app/components/CartLoading.tsx",
            lineNumber: 15,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/CartLoading.tsx",
          lineNumber: 12,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/components/CartLoading.tsx",
          lineNumber: 11,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("g", { fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("g", { transform: "translate(1 1)", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "path",
            {
              d: "M36 18c0-9.94-8.06-18-18-18",
              id: "Oval-2",
              stroke: "url(#a)",
              strokeWidth: 2,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                "animateTransform",
                {
                  attributeName: "transform",
                  type: "rotate",
                  from: "0 18 18",
                  to: "360 18 18",
                  dur: "0.9s",
                  repeatCount: "indefinite"
                },
                void 0,
                false,
                {
                  fileName: "app/components/CartLoading.tsx",
                  lineNumber: 26,
                  columnNumber: 15
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/CartLoading.tsx",
              lineNumber: 20,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("circle", { fill: "#fff", cx: 36, cy: 18, r: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "animateTransform",
            {
              attributeName: "transform",
              type: "rotate",
              from: "0 18 18",
              to: "360 18 18",
              dur: "0.9s",
              repeatCount: "indefinite"
            },
            void 0,
            false,
            {
              fileName: "app/components/CartLoading.tsx",
              lineNumber: 36,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/CartLoading.tsx",
            lineNumber: 35,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/CartLoading.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/components/CartLoading.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/CartLoading.tsx",
      lineNumber: 5,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/CartLoading.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/OrderCard.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
function OrderCard({ order }) {
  if (!order?.id)
    return null;
  const [legacyOrderId, key] = order.id.split("/").pop().split("?");
  const lineItems = flattenConnection(order?.lineItems);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("li", { className: "grid text-center border rounded", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      Link2,
      {
        className: "grid items-center gap-4 p-4 md:gap-6 md:p-6 md:grid-cols-2",
        to: `/account/orders/${legacyOrderId}?${key}`,
        prefetch: "intent",
        children: [
          lineItems[0].variant?.image && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "card-image aspect-square bg-primary/5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "img",
            {
              width: 168,
              height: 168,
              className: "w-full fadeIn cover",
              alt: lineItems[0].variant?.image?.altText ?? "Order image",
              src: lineItems[0].variant?.image.url
            },
            void 0,
            false,
            {
              fileName: "app/components/OrderCard.tsx",
              lineNumber: 20,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/OrderCard.tsx",
            lineNumber: 19,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "div",
            {
              className: `flex-col justify-center text-left ${!lineItems[0].variant?.image && "md:col-span-2"}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Heading, { as: "h3", format: true, size: "copy", children: lineItems.length > 1 ? `${lineItems[0].title} +${lineItems.length - 1} more` : lineItems[0].title }, void 0, false, {
                  fileName: "app/components/OrderCard.tsx",
                  lineNumber: 34,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dl", { className: "grid grid-gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dt", { className: "sr-only", children: "Order ID" }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 40,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dd", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Text, { size: "fine", color: "subtle", children: [
                    "Order No. ",
                    order.orderNumber
                  ] }, void 0, true, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 42,
                    columnNumber: 15
                  }, this) }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 41,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dt", { className: "sr-only", children: "Order Date" }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 46,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dd", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Text, { size: "fine", color: "subtle", children: new Date(order.processedAt).toDateString() }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 48,
                    columnNumber: 15
                  }, this) }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 47,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dt", { className: "sr-only", children: "Fulfillment Status" }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 52,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dd", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                    "span",
                    {
                      className: `px-3 py-1 text-xs font-medium rounded-full ${order.fulfillmentStatus === "FULFILLED" ? "bg-green-100 text-green-800" : "bg-primary/5 text-primary/50"}`,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Text, { size: "fine", children: statusMessage(order.fulfillmentStatus) }, void 0, false, {
                        fileName: "app/components/OrderCard.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/OrderCard.tsx",
                      lineNumber: 54,
                      columnNumber: 15
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 53,
                    columnNumber: 13
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/OrderCard.tsx",
                  lineNumber: 39,
                  columnNumber: 11
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/OrderCard.tsx",
              lineNumber: 29,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/OrderCard.tsx",
        lineNumber: 13,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "self-end border-t", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      Link2,
      {
        className: "block w-full p-2 text-center",
        to: `/account/orders/${legacyOrderId}?${key}`,
        prefetch: "intent",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Text, { color: "subtle", className: "ml-3", children: "View Details" }, void 0, false, {
          fileName: "app/components/OrderCard.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/OrderCard.tsx",
        lineNumber: 70,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/OrderCard.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/OrderCard.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/components/AccountDetails.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
function AccountDetails({ customer }) {
  const { firstName, lastName, email, phone } = customer;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "grid w-full gap-4 p-4 py-6 md:gap-8 md:p-8 lg:p-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "font-bold text-lead", children: "Account Details" }, void 0, false, {
      fileName: "app/components/AccountDetails.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "lg:p-8 p-6 border border-gray-200 rounded", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "font-bold text-base flex-1", children: "Profile & Security" }, void 0, false, {
          fileName: "app/components/AccountDetails.tsx",
          lineNumber: 13,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          Link2,
          {
            prefetch: "intent",
            className: "underline text-sm font-normal",
            to: "/account/edit",
            children: "Edit"
          },
          void 0,
          false,
          {
            fileName: "app/components/AccountDetails.tsx",
            lineNumber: 14,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-4 text-sm text-primary/50", children: "Name" }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "mt-1", children: [
        firstName || lastName ? (firstName ? firstName + " " : "") + lastName : "Add name",
        " "
      ] }, void 0, true, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-4 text-sm text-primary/50", children: "Contact" }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "mt-1", children: phone ?? "Add mobile" }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-4 text-sm text-primary/50", children: "Email address" }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "mt-1", children: email }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-4 text-sm text-primary/50", children: "Password" }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "mt-1", children: "**************" }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AccountDetails.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AccountDetails.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/AccountDetails.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/AccountAddressBook.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime());
function AccountAddressBook({
  customer,
  addresses
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "grid w-full gap-4 p-4 py-6 md:gap-8 md:p-8 lg:p-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h3", { className: "font-bold text-lead", children: "Address Book" }, void 0, false, {
      fileName: "app/components/AccountAddressBook.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
      !addresses?.length && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Text, { className: "mb-1", width: "narrow", as: "p", size: "copy", children: "You haven't saved any addresses yet." }, void 0, false, {
        fileName: "app/components/AccountAddressBook.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "w-48", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        Button,
        {
          to: "address/add",
          className: "mt-2 text-sm w-full mb-6",
          variant: "secondary",
          children: "Add an Address"
        },
        void 0,
        false,
        {
          fileName: "app/components/AccountAddressBook.tsx",
          lineNumber: 26,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/AccountAddressBook.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      Boolean(addresses?.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: [
        customer.defaultAddress && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Address, { address: customer.defaultAddress, defaultAddress: true }, void 0, false, {
          fileName: "app/components/AccountAddressBook.tsx",
          lineNumber: 37,
          columnNumber: 17
        }, this),
        addresses.filter((address) => address.id !== customer.defaultAddress?.id).map((address) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Address, { address }, address.id, false, {
          fileName: "app/components/AccountAddressBook.tsx",
          lineNumber: 42,
          columnNumber: 19
        }, this))
      ] }, void 0, true, {
        fileName: "app/components/AccountAddressBook.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AccountAddressBook.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AccountAddressBook.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/AccountAddressBook.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
function Address({
  address,
  defaultAddress
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "lg:p-8 p-6 border border-gray-200 rounded flex flex-col", children: [
    defaultAddress && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mb-3 flex flex-row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary/50", children: "Default" }, void 0, false, {
      fileName: "app/components/AccountAddressBook.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/AccountAddressBook.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("ul", { className: "flex-1 flex-row", children: [
      (address.firstName || address.lastName) && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: "" + (address.firstName && address.firstName + " ") + address?.lastName }, void 0, false, {
        fileName: "app/components/AccountAddressBook.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      address.formatted && address.formatted.map((line) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: line }, line, false, {
        fileName: "app/components/AccountAddressBook.tsx",
        lineNumber: 77,
        columnNumber: 51
      }, this))
    ] }, void 0, true, {
      fileName: "app/components/AccountAddressBook.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex flex-row font-medium mt-6 items-baseline", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        Link2,
        {
          to: `/account/address/${encodeURIComponent(address.id)}`,
          className: "text-left underline text-sm",
          prefetch: "intent",
          children: "Edit"
        },
        void 0,
        false,
        {
          fileName: "app/components/AccountAddressBook.tsx",
          lineNumber: 81,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Form, { action: "address/delete", method: "delete", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { type: "hidden", name: "addressId", value: address.id }, void 0, false, {
          fileName: "app/components/AccountAddressBook.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("button", { className: "text-left text-primary/50 ml-6 text-sm", children: "Remove" }, void 0, false, {
          fileName: "app/components/AccountAddressBook.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/AccountAddressBook.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AccountAddressBook.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AccountAddressBook.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

// app/components/Modal.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime());
function Modal({
  children,
  cancelLink
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
    "div",
    {
      className: "relative z-50",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      id: "modal-bg",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "fixed inset-0 transition-opacity bg-opacity-75 bg-primary/40" }, void 0, false, {
          fileName: "app/components/Modal.tsx",
          lineNumber: 18,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "fixed inset-0 z-50 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center justify-center min-h-full p-4 text-center sm:p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          "div",
          {
            className: "relative flex-1 px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform rounded shadow-xl bg-contrast sm:my-12 sm:flex-none sm:w-full sm:max-w-sm sm:p-6",
            role: "button",
            onClick: (e5) => {
              e5.stopPropagation();
            },
            onKeyPress: (e5) => {
              e5.stopPropagation();
            },
            tabIndex: 0,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "absolute top-0 right-0 hidden pt-4 pr-4 sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                Link2,
                {
                  to: cancelLink,
                  className: "p-4 -m-4 transition text-primary hover:text-primary/50",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(IconClose, { "aria-label": "Close panel" }, void 0, false, {
                    fileName: "app/components/Modal.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/components/Modal.tsx",
                  lineNumber: 33,
                  columnNumber: 15
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/Modal.tsx",
                lineNumber: 32,
                columnNumber: 13
              }, this),
              children
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/Modal.tsx",
            lineNumber: 21,
            columnNumber: 11
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/Modal.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/components/Modal.tsx",
          lineNumber: 19,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Modal.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}

// app/components/Link.tsx
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime());
function Link2(props) {
  const { to, className, ...resOfProps } = props;
  const [root] = useMatches();
  const selectedLocale = root.data?.selectedLocale;
  let toWithLocale = to;
  if (typeof to === "string") {
    toWithLocale = selectedLocale ? `${selectedLocale.pathPrefix}${to}` : to;
  }
  if (typeof className === "function") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(NavLink, { to: toWithLocale, className, ...resOfProps }, void 0, false, {
      fileName: "app/components/Link.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Link, { to: toWithLocale, className, ...resOfProps }, void 0, false, {
    fileName: "app/components/Link.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}

// app/components/FeaturedCollections.tsx
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime());
function FeaturedCollections({
  collections,
  title = "Collections",
  ...props
}) {
  const haveCollections = collections && collections.length > 0;
  if (!haveCollections)
    return null;
  const items = collections.filter((item) => item.image).length;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Section, { ...props, heading: title, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Grid, { items, children: collections.map((collection) => {
    if (!collection?.image) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Link2, { to: `/collections/${collection.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "grid gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "card-image bg-primary/5 aspect-[3/2]", children: collection?.image && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        Image,
        {
          alt: `Image of ${collection.title}`,
          data: collection.image,
          height: 400,
          sizes: "(max-width: 32em) 100vw, 33vw",
          width: 600,
          widths: [400, 500, 600, 700, 800, 900],
          loaderOptions: {
            scale: 2,
            crop: "center"
          }
        },
        void 0,
        false,
        {
          fileName: "app/components/FeaturedCollections.tsx",
          lineNumber: 32,
          columnNumber: 21
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/FeaturedCollections.tsx",
        lineNumber: 30,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Heading, { size: "copy", children: collection.title }, void 0, false, {
        fileName: "app/components/FeaturedCollections.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/FeaturedCollections.tsx",
      lineNumber: 29,
      columnNumber: 15
    }, this) }, collection.id, false, {
      fileName: "app/components/FeaturedCollections.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this);
  }) }, void 0, false, {
    fileName: "app/components/FeaturedCollections.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/FeaturedCollections.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/components/Hero.tsx
var import_jsx_dev_runtime19 = __toESM(require_jsx_dev_runtime());
function Hero({
  byline,
  cta,
  handle,
  heading,
  height,
  loading,
  spread,
  spreadSecondary,
  top
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Link2, { to: `/collections/${handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    "section",
    {
      className: clsx_m_default(
        "relative justify-end flex flex-col w-full",
        top && "-mt-nav",
        height === "full" ? "h-screen" : "aspect-[4/5] sm:aspect-square md:aspect-[5/4] lg:aspect-[3/2] xl:aspect-[2/1]"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip", children: [
          spread?.reference && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            SpreadMedia,
            {
              scale: 2,
              sizes: spreadSecondary?.reference ? "(min-width: 80em) 700px, (min-width: 48em) 450px, 500px" : "(min-width: 80em) 1400px, (min-width: 48em) 900px, 500px",
              widths: spreadSecondary?.reference ? [500, 450, 700] : [500, 900, 1400],
              width: spreadSecondary?.reference ? 375 : 750,
              data: spread.reference,
              loading
            },
            void 0,
            false,
            {
              fileName: "app/components/Hero.tsx",
              lineNumber: 40,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/Hero.tsx",
            lineNumber: 39,
            columnNumber: 13
          }, this),
          spreadSecondary?.reference && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            SpreadMedia,
            {
              sizes: "(min-width: 80em) 700, (min-width: 48em) 450, 500",
              widths: [450, 700],
              width: 375,
              data: spreadSecondary.reference,
              loading
            },
            void 0,
            false,
            {
              fileName: "app/components/Hero.tsx",
              lineNumber: 60,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/Hero.tsx",
            lineNumber: 59,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Hero.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-col items-baseline justify-between gap-4 px-6 py-8 sm:px-8 md:px-12 bg-gradient-to-t dark:from-contrast/60 dark:text-primary from-primary/60 text-contrast", children: [
          heading?.value && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Heading, { format: true, as: "h2", size: "display", className: "max-w-md", children: heading.value }, void 0, false, {
            fileName: "app/components/Hero.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          byline?.value && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Text, { format: true, width: "narrow", as: "p", size: "lead", children: byline.value }, void 0, false, {
            fileName: "app/components/Hero.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, this),
          cta?.value && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Text, { size: "lead", children: cta.value }, void 0, false, {
            fileName: "app/components/Hero.tsx",
            lineNumber: 81,
            columnNumber: 26
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Hero.tsx",
          lineNumber: 70,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Hero.tsx",
      lineNumber: 28,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/Hero.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
function SpreadMedia({
  data,
  loading,
  decoding,
  scale,
  sizes,
  width,
  widths
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    MediaFile,
    {
      data,
      className: "block object-cover w-full h-full",
      mediaOptions: {
        video: {
          controls: false,
          muted: true,
          loop: true,
          playsInline: true,
          autoPlay: true,
          width: (scale ?? 1) * width,
          previewImageOptions: { scale, src: data.previewImage?.url ?? "" }
        },
        image: {
          loading,
          decoding,
          loaderOptions: { scale, crop: "center" },
          widths,
          sizes,
          width,
          alt: data.alt || ""
        }
      }
    },
    void 0,
    false,
    {
      fileName: "app/components/Hero.tsx",
      lineNumber: 108,
      columnNumber: 5
    },
    this
  );
}

// app/components/SortFilter.tsx
var import_react51 = __toESM(require_react());
var import_jsx_dev_runtime20 = __toESM(require_jsx_dev_runtime());
function SortFilter({
  filters,
  appliedFilters = [],
  children,
  collections = []
}) {
  const [isOpen, setIsOpen] = (0, import_react51.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex items-center justify-between w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "button",
        {
          onClick: () => setIsOpen(!isOpen),
          className: "relative flex items-center justify-center w-8 h-8 focus:ring-primary/5",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(IconFilters, {}, void 0, false, {
            fileName: "app/components/SortFilter.tsx",
            lineNumber: 48,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 42,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SortMenu, {}, void 0, false, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-col flex-wrap md:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "div",
        {
          className: `transition-all duration-200 ${isOpen ? "opacity-100 min-w-full md:min-w-[240px] md:w-[240px] md:pr-8 max-h-full" : "opacity-0 md:min-w-[0px] md:w-[0px] pr-0 max-h-0 md:max-h-full"}`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            FiltersDrawer,
            {
              collections,
              filters,
              appliedFilters
            },
            void 0,
            false,
            {
              fileName: "app/components/SortFilter.tsx",
              lineNumber: 60,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 53,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex-1", children }, void 0, false, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/SortFilter.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
function FiltersDrawer({
  filters = [],
  appliedFilters = [],
  collections = []
}) {
  const [params] = useSearchParams();
  const location = useLocation();
  const filterMarkup = (filter, option) => {
    switch (filter.type) {
      case "PRICE_RANGE":
        const min = params.has("minPrice") && !isNaN(Number(params.get("minPrice"))) ? Number(params.get("minPrice")) : void 0;
        const max = params.has("maxPrice") && !isNaN(Number(params.get("maxPrice"))) ? Number(params.get("maxPrice")) : void 0;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(PriceRangeFilter, { min, max }, void 0, false, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 97,
          columnNumber: 16
        }, this);
      default:
        const to = getFilterLink(
          filter,
          option.input,
          params,
          location
        );
        return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          Link,
          {
            className: "focus:underline hover:underline",
            prefetch: "intent",
            to,
            children: option.label
          },
          void 0,
          false,
          {
            fileName: "app/components/SortFilter.tsx",
            lineNumber: 107,
            columnNumber: 11
          },
          this
        );
    }
  };
  const collectionsMarkup = collections.map((collection) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { className: "pb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      Link,
      {
        to: `/collections/${collection.handle}`,
        className: "focus:underline hover:underline",
        prefetch: "intent",
        children: collection.title
      },
      collection.handle,
      false,
      {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 121,
        columnNumber: 9
      },
      this
    ) }, collection.handle, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, this);
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("nav", { className: "py-8", children: [
    appliedFilters.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "pb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(AppliedFilters, { filters: appliedFilters }, void 0, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 138,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 137,
      columnNumber: 11
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Heading, { as: "h4", size: "lead", className: "pb-4", children: "Filter By" }, void 0, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 142,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "divide-y", children: filters.map(
      (filter) => filter.values.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ve, { as: "div", className: "w-full", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ve.Button, { className: "flex justify-between w-full py-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Text, { size: "lead", children: filter.label }, void 0, false, {
            fileName: "app/components/SortFilter.tsx",
            lineNumber: 153,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(IconCaret, { direction: open ? "up" : "down" }, void 0, false, {
            fileName: "app/components/SortFilter.tsx",
            lineNumber: 154,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 152,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ve.Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("ul", { className: "py-2", children: filter.values?.map((option) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { className: "pb-4", children: filterMarkup(filter, option) }, option.id, false, {
            fileName: "app/components/SortFilter.tsx",
            lineNumber: 160,
            columnNumber: 31
          }, this);
        }) }, filter.id, false, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 157,
          columnNumber: 25
        }, this) }, filter.id, false, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 156,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 151,
        columnNumber: 21
      }, this) }, filter.id, false, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 149,
        columnNumber: 17
      }, this)
    ) }, void 0, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 145,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/SortFilter.tsx",
    lineNumber: 135,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/SortFilter.tsx",
    lineNumber: 134,
    columnNumber: 5
  }, this);
}
function AppliedFilters({ filters = [] }) {
  const [params] = useSearchParams();
  const location = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Heading, { as: "h4", size: "lead", className: "pb-4", children: "Applied filters" }, void 0, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 183,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: filters.map((filter) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        Link,
        {
          to: getAppliedFilterLink(filter, params, location),
          className: "flex px-2 border rounded-full gap",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "flex-grow", children: filter.label }, void 0, false, {
              fileName: "app/components/SortFilter.tsx",
              lineNumber: 194,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(IconXMark, {}, void 0, false, {
              fileName: "app/components/SortFilter.tsx",
              lineNumber: 196,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/components/SortFilter.tsx",
              lineNumber: 195,
              columnNumber: 15
            }, this)
          ]
        },
        `${filter.label}-${filter.urlParam}`,
        true,
        {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 189,
          columnNumber: 13
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 186,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/SortFilter.tsx",
    lineNumber: 182,
    columnNumber: 5
  }, this);
}
function getAppliedFilterLink(filter, params, location) {
  const paramsClone = new URLSearchParams(params);
  if (filter.urlParam.key === "variantOption") {
    const variantOptions = paramsClone.getAll("variantOption");
    const filteredVariantOptions = variantOptions.filter(
      (options) => !options.includes(filter.urlParam.value)
    );
    paramsClone.delete(filter.urlParam.key);
    for (const filteredVariantOption of filteredVariantOptions) {
      paramsClone.append(filter.urlParam.key, filteredVariantOption);
    }
  } else {
    paramsClone.delete(filter.urlParam.key);
  }
  return `${location.pathname}?${paramsClone.toString()}`;
}
function getSortLink(sort, params, location) {
  params.set("sort", sort);
  return `${location.pathname}?${params.toString()}`;
}
function getFilterLink(filter, rawInput, params, location) {
  const paramsClone = new URLSearchParams(params);
  const newParams = filterInputToParams(filter.type, rawInput, paramsClone);
  return `${location.pathname}?${newParams.toString()}`;
}
var PRICE_RANGE_FILTER_DEBOUNCE = 500;
function PriceRangeFilter({ max, min }) {
  const location = useLocation();
  const params = (0, import_react51.useMemo)(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const navigate = useNavigate();
  const [minPrice, setMinPrice] = (0, import_react51.useState)(min ? String(min) : "");
  const [maxPrice, setMaxPrice] = (0, import_react51.useState)(max ? String(max) : "");
  useDebounce(
    () => {
      if ((minPrice === "" || minPrice === String(min)) && (maxPrice === "" || maxPrice === String(max)))
        return;
      const price = {};
      if (minPrice !== "")
        price.min = minPrice;
      if (maxPrice !== "")
        price.max = maxPrice;
      const newParams = filterInputToParams("PRICE_RANGE", { price }, params);
      navigate(`${location.pathname}?${newParams.toString()}`);
    },
    PRICE_RANGE_FILTER_DEBOUNCE,
    [minPrice, maxPrice]
  );
  const onChangeMax = (event) => {
    const newMaxPrice = event.target.value;
    setMaxPrice(newMaxPrice);
  };
  const onChangeMin = (event) => {
    const newMinPrice = event.target.value;
    setMinPrice(newMinPrice);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: "from" }, void 0, false, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 292,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "input",
        {
          name: "maxPrice",
          className: "text-black",
          type: "text",
          defaultValue: min,
          placeholder: "$",
          onChange: onChangeMin
        },
        void 0,
        false,
        {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 293,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 291,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: "to" }, void 0, false, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 303,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "input",
        {
          name: "minPrice",
          className: "text-black",
          type: "number",
          defaultValue: max,
          placeholder: "$",
          onChange: onChangeMax
        },
        void 0,
        false,
        {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 304,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 302,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/SortFilter.tsx",
    lineNumber: 290,
    columnNumber: 5
  }, this);
}
function filterInputToParams(type, rawInput, params) {
  const input = typeof rawInput === "string" ? JSON.parse(rawInput) : rawInput;
  switch (type) {
    case "PRICE_RANGE":
      if (input.price.min)
        params.set("minPrice", input.price.min);
      if (input.price.max)
        params.set("maxPrice", input.price.max);
      break;
    case "LIST":
      Object.entries(input).forEach(([key, value]) => {
        if (typeof value === "string") {
          params.set(key, value);
        } else if (typeof value === "boolean") {
          params.set(key, value.toString());
        } else {
          const { name, value: val } = value;
          const allVariants = params.getAll(`variantOption`);
          const newVariant = `${name}:${val}`;
          if (!allVariants.includes(newVariant)) {
            params.append("variantOption", newVariant);
          }
        }
      });
      break;
  }
  return params;
}
function SortMenu() {
  const items = [
    { label: "Featured", key: "featured" },
    {
      label: "Price: Low - High",
      key: "price-low-high"
    },
    {
      label: "Price: High - Low",
      key: "price-high-low"
    },
    {
      label: "Best Selling",
      key: "best-selling"
    },
    {
      label: "Newest",
      key: "newest"
    }
  ];
  const [params] = useSearchParams();
  const location = useLocation();
  const activeItem = items.find((item) => item.key === params.get("sort"));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ot, { as: "div", className: "relative z-40", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ot.Button, { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "px-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "px-2 font-medium", children: "Sort by:" }, void 0, false, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 377,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: (activeItem || items[0]).label }, void 0, false, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 378,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 376,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(IconCaret, {}, void 0, false, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 380,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 375,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      ot.Items,
      {
        as: "nav",
        className: "absolute right-0 flex flex-col p-4 text-right rounded-sm bg-contrast",
        children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ot.Item, { children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          Link,
          {
            className: `block text-sm pb-2 px-3 ${activeItem?.key === item.key ? "font-bold" : "font-normal"}`,
            to: getSortLink(item.key, params, location),
            children: item.label
          },
          void 0,
          false,
          {
            fileName: "app/components/SortFilter.tsx",
            lineNumber: 390,
            columnNumber: 15
          },
          this
        ) }, item.label, false, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 388,
          columnNumber: 11
        }, this))
      },
      void 0,
      false,
      {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 383,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/SortFilter.tsx",
    lineNumber: 374,
    columnNumber: 5
  }, this);
}

// app/components/Grid.tsx
var import_jsx_dev_runtime21 = __toESM(require_jsx_dev_runtime());
function Grid({
  as: Component2 = "div",
  className,
  flow = "row",
  gap = "default",
  items = 4,
  layout = "default",
  ...props
}) {
  const layouts = {
    default: `grid-cols-1 ${items === 2 && "md:grid-cols-2"}  ${items === 3 && "sm:grid-cols-3"} ${items > 3 && "md:grid-cols-3"} ${items >= 4 && "lg:grid-cols-4"}`,
    products: `grid-cols-2 ${items >= 3 && "md:grid-cols-3"} ${items >= 4 && "lg:grid-cols-4"}`,
    auto: "auto-cols-auto",
    blog: "grid-cols-1 md:grid-cols-2"
  };
  const gaps = {
    default: "grid gap-2 gap-y-6 md:gap-4 lg:gap-6",
    blog: "grid gap-6"
  };
  const flows = {
    row: "grid-flow-row",
    col: "grid-flow-col"
  };
  const styles = clsx_m_default(flows[flow], gaps[gap], layouts[layout], className);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Component2, { ...props, className: styles }, void 0, false, {
    fileName: "app/components/Grid.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}

// app/components/FeaturedProducts.tsx
var import_react55 = __toESM(require_react());
var import_jsx_dev_runtime22 = __toESM(require_jsx_dev_runtime());
function FeaturedProducts({
  count = 4,
  heading = "Shop Best Sellers",
  layout = "drawer",
  onClose,
  query,
  reverse,
  sortKey = "BEST_SELLING"
}) {
  const { load, data } = useFetcher();
  const queryString = (0, import_react55.useMemo)(
    () => Object.entries({ count, sortKey, query, reverse }).map(([key, val]) => val ? `${key}=${val}` : null).filter(Boolean).join("&"),
    [count, sortKey, query, reverse]
  );
  (0, import_react55.useEffect)(() => {
    load(`/api/products?${queryString}`);
  }, [load, queryString]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Heading, { format: true, size: "copy", className: "t-4", children: heading }, void 0, false, {
      fileName: "app/components/FeaturedProducts.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      "div",
      {
        className: clsx_m_default([
          `grid grid-cols-2 gap-x-6 gap-y-8`,
          layout === "page" ? "md:grid-cols-4 sm:grid-col-4" : ""
        ]),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          FeatureProductsContent,
          {
            count,
            onClick: onClose,
            products: data?.products
          },
          void 0,
          false,
          {
            fileName: "app/components/FeaturedProducts.tsx",
            lineNumber: 64,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/FeaturedProducts.tsx",
        lineNumber: 58,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/FeaturedProducts.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
function FeatureProductsContent({
  count = 4,
  onClick,
  products
}) {
  const id = (0, import_react55.useId)();
  if (!products) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [...new Array(count)].map((_3, i7) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Skeleton, { className: "aspect-[3/4]" }, void 0, false, {
        fileName: "app/components/FeaturedProducts.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Skeleton, { className: "w-32 h-4" }, void 0, false, {
        fileName: "app/components/FeaturedProducts.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this)
    ] }, `${id + i7}`, true, {
      fileName: "app/components/FeaturedProducts.tsx",
      lineNumber: 92,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/components/FeaturedProducts.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this);
  }
  if (products?.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Text, { format: true, children: "No products found." }, void 0, false, {
      fileName: "app/components/FeaturedProducts.tsx",
      lineNumber: 102,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
    ProductCard,
    {
      product,
      onClick,
      quickAdd: true
    },
    product.id,
    false,
    {
      fileName: "app/components/FeaturedProducts.tsx",
      lineNumber: 108,
      columnNumber: 9
    },
    this
  )) }, void 0, false, {
    fileName: "app/components/FeaturedProducts.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}

// app/components/Pagination.tsx
var import_react57 = __toESM(require_react());
function Pagination({
  connection,
  children = () => null,
  autoLoadOnScroll = true
}) {
  const transition = useTransition();
  const isLoading = transition.state === "loading";
  const autoScrollEnabled = Boolean(autoLoadOnScroll);
  const autoScrollConfig = autoScrollEnabled ? autoLoadOnScroll : {
    threshold: 0,
    rootMargin: "1000px 0px 0px 0px"
  };
  const { ref: nextLinkRef, inView } = useInView(autoScrollConfig);
  const {
    endCursor,
    hasNextPage,
    hasPreviousPage,
    nextPageUrl,
    nodes,
    prevPageUrl,
    startCursor
  } = usePagination(connection);
  useLoadMoreWhenInView({
    disabled: !autoScrollEnabled,
    connection: {
      pageInfo: { startCursor, endCursor, hasPreviousPage, hasNextPage },
      nodes
    },
    inView,
    isLoading
  });
  return children({
    endCursor,
    hasNextPage,
    hasPreviousPage,
    isLoading,
    nextLinkRef,
    nextPageUrl,
    nodes,
    prevPageUrl,
    startCursor
  });
}
function usePagination(connection) {
  const [nodes, setNodes] = (0, import_react57.useState)(connection.nodes);
  const { state, search } = useLocation();
  const params = new URLSearchParams(search);
  const direction = params.get("direction");
  const isPrevious = direction === "previous";
  const { hasNextPage, hasPreviousPage, startCursor, endCursor } = connection.pageInfo;
  const currentPageInfo = (0, import_react57.useMemo)(() => {
    let pageStartCursor = state?.pageInfo?.startCursor === void 0 ? startCursor : state.pageInfo.startCursor;
    let pageEndCursor = state?.pageInfo?.endCursor === void 0 ? endCursor : state.pageInfo.endCursor;
    if (state?.nodes) {
      if (isPrevious) {
        pageStartCursor = startCursor;
      } else {
        pageEndCursor = endCursor;
      }
    }
    const previousPageExists = state?.pageInfo?.hasPreviousPage === void 0 ? hasPreviousPage : state.pageInfo.hasPreviousPage;
    const nextPageExists = state?.pageInfo?.hasNextPage === void 0 ? hasNextPage : state.pageInfo.hasNextPage;
    return {
      startCursor: pageStartCursor,
      endCursor: pageEndCursor,
      hasPreviousPage: previousPageExists,
      hasNextPage: nextPageExists
    };
  }, [isPrevious, state, hasNextPage, hasPreviousPage, startCursor, endCursor]);
  const prevPageUrl = (0, import_react57.useMemo)(() => {
    const params2 = new URLSearchParams(search);
    params2.set("direction", "previous");
    currentPageInfo.startCursor && params2.set("cursor", currentPageInfo.startCursor);
    return `?${params2.toString()}`;
  }, [search, currentPageInfo.startCursor]);
  const nextPageUrl = (0, import_react57.useMemo)(() => {
    const params2 = new URLSearchParams(search);
    params2.set("direction", "next");
    currentPageInfo.endCursor && params2.set("cursor", currentPageInfo.endCursor);
    return `?${params2.toString()}`;
  }, [search, currentPageInfo.endCursor]);
  (0, import_react57.useEffect)(() => {
    if (!state || !state?.nodes) {
      setNodes(connection.nodes);
      return;
    }
    if (isPrevious) {
      setNodes([...connection.nodes, ...state.nodes]);
    } else {
      setNodes([...state.nodes, ...connection.nodes]);
    }
  }, [state, isPrevious, connection.nodes]);
  return { ...currentPageInfo, prevPageUrl, nextPageUrl, nodes };
}
function useLoadMoreWhenInView({
  disabled,
  inView,
  isLoading,
  connection
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    pageInfo: { startCursor, endCursor, hasPreviousPage, hasNextPage },
    nodes
  } = connection;
  (0, import_react57.useEffect)(() => {
    if (!inView)
      return;
    if (!hasNextPage)
      return;
    if (!endCursor)
      return;
    if (disabled)
      return;
    if (isLoading)
      return;
    const nextPageUrl = location.pathname + `?index&cursor=${endCursor}&direction=next`;
    navigate(nextPageUrl, {
      state: {
        pageInfo: {
          endCursor,
          hasPreviousPage,
          startCursor
        },
        nodes
      }
    });
  }, [
    disabled,
    endCursor,
    hasNextPage,
    hasPreviousPage,
    inView,
    isLoading,
    nodes,
    location.pathname,
    navigate,
    startCursor
  ]);
}

// app/components/AddToCartButton.tsx
var import_jsx_dev_runtime23 = __toESM(require_jsx_dev_runtime());
function AddToCartButton({
  children,
  lines,
  className = "",
  variant = "primary",
  width = "full",
  disabled,
  analytics,
  ...props
}) {
  const [root] = useMatches();
  const selectedLocale = root?.data?.selectedLocale;
  const fetcher = useFetcher();
  const fetcherIsNotIdle = fetcher.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(fetcher.Form, { action: "/cart", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("input", { type: "hidden", name: "cartAction", value: "ADD_TO_CART" /* ADD_TO_CART */ }, void 0, false, {
      fileName: "app/components/AddToCartButton.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("input", { type: "hidden", name: "countryCode", value: selectedLocale.country }, void 0, false, {
      fileName: "app/components/AddToCartButton.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("input", { type: "hidden", name: "lines", value: JSON.stringify(lines) }, void 0, false, {
      fileName: "app/components/AddToCartButton.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("input", { type: "hidden", name: "analytics", value: JSON.stringify(analytics) }, void 0, false, {
      fileName: "app/components/AddToCartButton.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      Button,
      {
        as: "button",
        type: "submit",
        width,
        variant,
        className,
        disabled: disabled ?? fetcherIsNotIdle,
        ...props,
        children
      },
      void 0,
      false,
      {
        fileName: "app/components/AddToCartButton.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/AddToCartButton.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/components/Icon.tsx
var import_jsx_dev_runtime24 = __toESM(require_jsx_dev_runtime());
function Icon({
  children,
  className,
  fill = "currentColor",
  stroke,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      ...props,
      fill,
      stroke,
      className: clsx_m_default("w-5 h-5", className),
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/Icon.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}
function IconMenu(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Icon, { ...props, stroke: props.stroke || "currentColor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Menu" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("line", { x1: "3", y1: "6.375", x2: "17", y2: "6.375", strokeWidth: "1.25" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("line", { x1: "3", y1: "10.375", x2: "17", y2: "10.375", strokeWidth: "1.25" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("line", { x1: "3", y1: "14.375", x2: "17", y2: "14.375", strokeWidth: "1.25" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
function IconClose(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Icon, { ...props, stroke: props.stroke || "currentColor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Close" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "line",
      {
        x1: "4.44194",
        y1: "4.30806",
        x2: "15.7556",
        y2: "15.6218",
        strokeWidth: "1.25"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 43,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "line",
      {
        y1: "-0.625",
        x2: "16",
        y2: "-0.625",
        transform: "matrix(-0.707107 0.707107 0.707107 0.707107 16 4.75)",
        strokeWidth: "1.25"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 50,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
function IconCaret({
  direction = "down",
  stroke = "currentColor",
  ...props
}) {
  let rotate;
  switch (direction) {
    case "down":
      rotate = "rotate-0";
      break;
    case "up":
      rotate = "rotate-180";
      break;
    case "left":
      rotate = "-rotate-90";
      break;
    case "right":
      rotate = "rotate-90";
      break;
    default:
      rotate = "rotate-0";
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
    Icon,
    {
      ...props,
      className: `w-5 h-5 transition ${rotate}`,
      fill: "transparent",
      stroke,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Caret" }, void 0, false, {
          fileName: "app/components/Icon.tsx",
          lineNumber: 120,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("path", { d: "M14 8L10 12L6 8", strokeWidth: "1.25" }, void 0, false, {
          fileName: "app/components/Icon.tsx",
          lineNumber: 121,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Icon.tsx",
      lineNumber: 114,
      columnNumber: 5
    },
    this
  );
}
function IconBag(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Bag" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        d: "M8.125 5a1.875 1.875 0 0 1 3.75 0v.375h-3.75V5Zm-1.25.375V5a3.125 3.125 0 1 1 6.25 0v.375h3.5V15A2.625 2.625 0 0 1 14 17.625H6A2.625 2.625 0 0 1 3.375 15V5.375h3.5ZM4.625 15V6.625h10.75V15c0 .76-.616 1.375-1.375 1.375H6c-.76 0-1.375-.616-1.375-1.375Z"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 140,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 138,
    columnNumber: 5
  }, this);
}
function IconLogin(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Login" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 151,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        "path",
        {
          d: "M8,10.6928545 C10.362615,10.6928545 12.4860225,11.7170237 13.9504747,13.3456144 C12.4860225,14.9758308 10.362615,16 8,16 C5.63738499,16 3.51397752,14.9758308 2.04952533,13.3472401 C3.51397752,11.7170237 5.63738499,10.6928545 8,10.6928545 Z",
          fill: "currentColor"
        },
        void 0,
        false,
        {
          fileName: "app/components/Icon.tsx",
          lineNumber: 153,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        "path",
        {
          d: "M8,3.5 C6.433,3.5 5.25,4.894 5.25,6.5 C5.25,8.106 6.433,9.5 8,9.5 C9.567,9.5 10.75,8.106 10.75,6.5 C10.75,4.894 9.567,3.5 8,3.5 Z",
          fill: "currentColor",
          fillRule: "nonzero"
        },
        void 0,
        false,
        {
          fileName: "app/components/Icon.tsx",
          lineNumber: 157,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 152,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 150,
    columnNumber: 5
  }, this);
}
function IconAccount(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Account" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 170,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        d: "M9.9998 12.625c-1.9141 0-3.6628.698-5.0435 1.8611C3.895 13.2935 3.25 11.7221 3.25 10c0-3.728 3.022-6.75 6.75-6.75 3.7279 0 6.75 3.022 6.75 6.75 0 1.7222-.645 3.2937-1.7065 4.4863-1.3807-1.1632-3.1295-1.8613-5.0437-1.8613ZM10 18c-2.3556 0-4.4734-1.0181-5.9374-2.6382C2.7806 13.9431 2 12.0627 2 10c0-4.4183 3.5817-8 8-8s8 3.5817 8 8-3.5817 8-8 8Zm0-12.5c-1.567 0-2.75 1.394-2.75 3s1.183 3 2.75 3 2.75-1.394 2.75-3-1.183-3-2.75-3Z"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 171,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 169,
    columnNumber: 5
  }, this);
}
function IconSearch(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Search" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 191,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        d: "M13.3 8.52a4.77 4.77 0 1 1-9.55 0 4.77 4.77 0 0 1 9.55 0Zm-.98 4.68a6.02 6.02 0 1 1 .88-.88l4.3 4.3-.89.88-4.3-4.3Z"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 192,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 190,
    columnNumber: 5
  }, this);
}
function IconCheck({
  stroke = "currentColor",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Icon, { ...props, fill: "transparent", stroke, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Check" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 206,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("circle", { cx: "10", cy: "10", r: "7.25", strokeWidth: "1.25" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 207,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "m7.04 10.37 2.42 2.41 3.5-5.56"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 208,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 205,
    columnNumber: 5
  }, this);
}
function IconXMark({
  stroke = "currentColor",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Icon, { ...props, fill: "transparent", stroke, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Delete" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 224,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 18L18 6M6 6l12 12"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 225,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 223,
    columnNumber: 5
  }, this);
}
function IconRemove(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Icon, { ...props, fill: "transparent", stroke: props.stroke || "currentColor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Remove" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 237,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "path",
      {
        d: "M4 6H16",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 238,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("path", { d: "M8.5 9V14", strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 244,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("path", { d: "M11.5 9V14", strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 245,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "path",
      {
        d: "M5.5 6L6 17H14L14.5 6",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 246,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "path",
      {
        d: "M8 6L8 5C8 4 8.75 3 10 3C11.25 3 12 4 12 5V6",
        strokeWidth: "1.25"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 252,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 236,
    columnNumber: 5
  }, this);
}
function IconFilters(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Icon, { ...props, fill: "transparent", stroke: props.stroke || "currentColor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("title", { children: "Filters" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 263,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("circle", { cx: "4.5", cy: "6.5", r: "2" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 264,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("line", { x1: "6", y1: "6.5", x2: "14", y2: "6.5" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 265,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("line", { x1: "4.37114e-08", y1: "6.5", x2: "3", y2: "6.5" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 266,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("line", { x1: "4.37114e-08", y1: "13.5", x2: "8", y2: "13.5" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 267,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("line", { x1: "11", y1: "13.5", x2: "14", y2: "13.5" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 268,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("circle", { cx: "9.5", cy: "13.5", r: "2" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 269,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 262,
    columnNumber: 5
  }, this);
}

// app/components/Layout.tsx
var import_react64 = __toESM(require_react());

// app/hooks/useIsHydrated.tsx
var import_react60 = __toESM(require_react());
function useIsHydrated() {
  const [isHydrated, setHydrated] = (0, import_react60.useState)(false);
  (0, import_react60.useEffect)(() => {
    setHydrated(true);
  }, []);
  return isHydrated;
}

// app/hooks/useCartFetchers.tsx
function useCartFetchers(actionName) {
  const fetchers = useFetchers();
  const cartFetchers = [];
  for (const fetcher of fetchers) {
    const formData = fetcher.submission?.formData;
    if (formData && formData.get("cartAction") === actionName) {
      cartFetchers.push(fetcher);
    }
  }
  return cartFetchers;
}

// app/components/Layout.tsx
var import_jsx_dev_runtime25 = __toESM(require_jsx_dev_runtime());
function Layout({
  children,
  layout
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex flex-col min-h-screen", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("a", { href: "#mainContent", className: "sr-only", children: "Skip to content" }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        Header,
        {
          title: layout?.shop.name ?? "Hydrogen",
          menu: layout?.headerMenu
        },
        void 0,
        false,
        {
          fileName: "app/components/Layout.tsx",
          lineNumber: 47,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("main", { role: "main", id: "mainContent", className: "flex-grow", children }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Footer, { menu: layout?.footerMenu }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
function Header({ title, menu }) {
  const isHome = useIsHomePath();
  const {
    isOpen: isCartOpen,
    openDrawer: openCart,
    closeDrawer: closeCart
  } = useDrawer();
  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu
  } = useDrawer();
  const addToCartFetchers = useCartFetchers("ADD_TO_CART");
  (0, import_react64.useEffect)(() => {
    if (isCartOpen || !addToCartFetchers.length)
      return;
    openCart();
  }, [addToCartFetchers, isCartOpen, openCart]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CartDrawer, { isOpen: isCartOpen, onClose: closeCart }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    menu && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(MenuDrawer, { isOpen: isMenuOpen, onClose: closeMenu, menu }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      DesktopHeader,
      {
        isHome,
        title,
        menu,
        openCart
      },
      void 0,
      false,
      {
        fileName: "app/components/Layout.tsx",
        lineNumber: 89,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      MobileHeader,
      {
        isHome,
        title,
        openCart,
        openMenu
      },
      void 0,
      false,
      {
        fileName: "app/components/Layout.tsx",
        lineNumber: 95,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}
function CartDrawer({ isOpen, onClose }) {
  const [root] = useMatches();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Drawer, { open: isOpen, onClose, heading: "Cart", openFrom: "right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react64.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CartLoading, {}, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 111,
    columnNumber: 29
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Await, { resolve: root.data?.cart, children: (cart) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Cart, { layout: "drawer", onClose, cart }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 113,
    columnNumber: 24
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 112,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 111,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 110,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 109,
    columnNumber: 5
  }, this);
}
function MenuDrawer({
  isOpen,
  onClose,
  menu
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Drawer, { open: isOpen, onClose, openFrom: "left", heading: "Menu", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(MenuMobileNav, { menu, onClose }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 133,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 132,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 131,
    columnNumber: 5
  }, this);
}
function MenuMobileNav({
  menu,
  onClose
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("nav", { className: "grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8", children: (menu?.items || []).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    Link2,
    {
      to: item.to,
      target: item.target,
      onClick: onClose,
      className: ({ isActive }) => isActive ? "pb-1 border-b -mb-px" : "pb-1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Text, { as: "span", size: "copy", children: item.title }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 159,
        columnNumber: 13
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/Layout.tsx",
      lineNumber: 151,
      columnNumber: 11
    },
    this
  ) }, item.id, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 150,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 147,
    columnNumber: 5
  }, this);
}
function MobileHeader({
  title,
  isHome,
  openCart,
  openMenu
}) {
  const params = useParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    "header",
    {
      role: "banner",
      className: `${isHome ? "bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary shadow-darkHeader" : "bg-contrast/80 text-primary"} flex lg:hidden items-center h-nav sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 px-4 md:px-8`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex items-center justify-start w-full gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            "button",
            {
              onClick: openMenu,
              className: "relative flex items-center justify-center w-8 h-8",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(IconMenu, {}, void 0, false, {
                fileName: "app/components/Layout.tsx",
                lineNumber: 198,
                columnNumber: 11
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 194,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Form,
            {
              method: "get",
              action: params.lang ? `/${params.lang}/search` : "/search",
              className: "items-center gap-2 sm:flex",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                  "button",
                  {
                    type: "submit",
                    className: "relative flex items-center justify-center w-8 h-8",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(IconSearch, {}, void 0, false, {
                      fileName: "app/components/Layout.tsx",
                      lineNumber: 209,
                      columnNumber: 13
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/Layout.tsx",
                    lineNumber: 205,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                  Input,
                  {
                    className: isHome ? "focus:border-contrast/20 dark:focus:border-primary/20" : "focus:border-primary/20",
                    type: "search",
                    variant: "minisearch",
                    placeholder: "Search",
                    name: "q"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/Layout.tsx",
                    lineNumber: 211,
                    columnNumber: 11
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 200,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 193,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          Link2,
          {
            className: "flex items-center self-stretch leading-[3rem] md:leading-[4rem] justify-center flex-grow w-full h-full",
            to: "/",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Heading, { className: "font-bold text-center", as: isHome ? "h1" : "h2", children: title }, void 0, false, {
              fileName: "app/components/Layout.tsx",
              lineNumber: 229,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/Layout.tsx",
            lineNumber: 225,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex items-center justify-end w-full gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccountLink, { className: "relative flex items-center justify-center w-8 h-8" }, void 0, false, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 235,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CartCount, { isHome, openCart }, void 0, false, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 236,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 234,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Layout.tsx",
      lineNumber: 185,
      columnNumber: 5
    },
    this
  );
}
function DesktopHeader({
  isHome,
  menu,
  openCart,
  title
}) {
  const params = useParams();
  const { y: y5 } = useWindowScroll_default();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    "header",
    {
      role: "banner",
      className: `${isHome ? "bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary shadow-darkHeader" : "bg-contrast/80 text-primary"} ${!isHome && y5 > 50 && " shadow-lightHeader"} hidden h-nav lg:flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex gap-12", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Link2, { className: "font-bold", to: "/", prefetch: "intent", children: title }, void 0, false, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 267,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("nav", { className: "flex gap-8", children: (menu?.items || []).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Link2,
            {
              to: item.to,
              target: item.target,
              prefetch: "intent",
              className: ({ isActive }) => isActive ? "pb-1 border-b -mb-px" : "pb-1",
              children: item.title
            },
            item.id,
            false,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 273,
              columnNumber: 13
            },
            this
          )) }, void 0, false, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 270,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 266,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            Form,
            {
              method: "get",
              action: params.lang ? `/${params.lang}/search` : "/search",
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                  Input,
                  {
                    className: isHome ? "focus:border-contrast/20 dark:focus:border-primary/20" : "focus:border-primary/20",
                    type: "search",
                    variant: "minisearch",
                    placeholder: "Search",
                    name: "q"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/Layout.tsx",
                    lineNumber: 293,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                  "button",
                  {
                    type: "submit",
                    className: "relative flex items-center justify-center w-8 h-8 focus:ring-primary/5",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(IconSearch, {}, void 0, false, {
                      fileName: "app/components/Layout.tsx",
                      lineNumber: 308,
                      columnNumber: 13
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/Layout.tsx",
                    lineNumber: 304,
                    columnNumber: 11
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 288,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AccountLink, { className: "relative flex items-center justify-center w-8 h-8 focus:ring-primary/5" }, void 0, false, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 311,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CartCount, { isHome, openCart }, void 0, false, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 312,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 287,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Layout.tsx",
      lineNumber: 256,
      columnNumber: 5
    },
    this
  );
}
function AccountLink({ className }) {
  const [root] = useMatches();
  const isLoggedIn = root.data?.isLoggedIn;
  return isLoggedIn ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Link2, { to: "/account", className, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(IconAccount, {}, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 323,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 322,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Link2, { to: "/account/login", className, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(IconLogin, {}, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 327,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 326,
    columnNumber: 5
  }, this);
}
function CartCount({
  isHome,
  openCart
}) {
  const [root] = useMatches();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react64.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Badge, { count: 0, dark: isHome, openCart }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 342,
    columnNumber: 25
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Await, { resolve: root.data?.cart, children: (cart) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    Badge,
    {
      dark: isHome,
      openCart,
      count: cart?.totalQuantity || 0
    },
    void 0,
    false,
    {
      fileName: "app/components/Layout.tsx",
      lineNumber: 345,
      columnNumber: 11
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 343,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 342,
    columnNumber: 5
  }, this);
}
function Badge({
  openCart,
  dark,
  count
}) {
  const isHydrated = useIsHydrated();
  const BadgeCounter = (0, import_react64.useMemo)(
    () => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(IconBag, {}, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 370,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "div",
        {
          className: `${dark ? "text-primary bg-contrast dark:text-contrast dark:bg-primary" : "text-contrast bg-primary"} absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { children: count || 0 }, void 0, false, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 378,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/Layout.tsx",
          lineNumber: 371,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 369,
      columnNumber: 7
    }, this),
    [count, dark]
  );
  return isHydrated ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    "button",
    {
      onClick: openCart,
      className: "relative flex items-center justify-center w-8 h-8 focus:ring-primary/5",
      children: BadgeCounter
    },
    void 0,
    false,
    {
      fileName: "app/components/Layout.tsx",
      lineNumber: 386,
      columnNumber: 5
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    Link2,
    {
      to: "/cart",
      className: "relative flex items-center justify-center w-8 h-8 focus:ring-primary/5",
      children: BadgeCounter
    },
    void 0,
    false,
    {
      fileName: "app/components/Layout.tsx",
      lineNumber: 393,
      columnNumber: 5
    },
    this
  );
}
function Footer({ menu }) {
  const isHome = useIsHomePath();
  const itemsCount = menu ? menu?.items?.length + 1 > 4 ? 4 : menu?.items?.length + 1 : [];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    Section,
    {
      divider: isHome ? "none" : "top",
      as: "footer",
      role: "contentinfo",
      className: `grid min-h-[25rem] items-start grid-flow-row w-full gap-6 py-8 px-6 md:px-8 lg:px-12 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-${itemsCount}
        bg-primary dark:bg-contrast dark:text-primary text-contrast overflow-hidden`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(FooterMenu, { menu }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 418,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CountrySelector, {}, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 419,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          "div",
          {
            className: `self-end pt-8 opacity-50 md:col-span-2 lg:col-span-${itemsCount}`,
            children: [
              "\xA9 ",
              new Date().getFullYear(),
              " / Shopify, Inc. Hydrogen is an MIT Licensed Open Source project."
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/Layout.tsx",
            lineNumber: 420,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Layout.tsx",
      lineNumber: 411,
      columnNumber: 5
    },
    this
  );
}
var FooterLink = ({ item }) => {
  if (item.to.startsWith("http")) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("a", { href: item.to, target: item.target, rel: "noopener noreferrer", children: item.title }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 433,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Link2, { to: item.to, target: item.target, prefetch: "intent", children: item.title }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 440,
    columnNumber: 5
  }, this);
};
function FooterMenu({ menu }) {
  const styles = {
    section: "grid gap-4",
    nav: "grid gap-2 pb-6"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: (menu?.items || []).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("section", { className: styles.section, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ve, { children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ve.Button, { className: "text-left md:cursor-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Heading, { className: "flex justify-between", size: "lead", as: "h3", children: [
      item.title,
      item?.items?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(IconCaret, { direction: open ? "up" : "down" }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 464,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 463,
        columnNumber: 23
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 460,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 459,
      columnNumber: 17
    }, this),
    item?.items?.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      "div",
      {
        className: `${open ? `max-h-48 h-fit` : `max-h-0 md:max-h-fit`} overflow-hidden transition-all duration-300`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react64.Suspense, { "data-comment": "This suspense fixes a hydration bug in Disclosure.Panel with static prop", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ve.Panel, { static: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("nav", { className: styles.nav, children: item.items.map((subItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(FooterLink, { item: subItem }, subItem.id, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 479,
          columnNumber: 29
        }, this)) }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 477,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 476,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 475,
          columnNumber: 21
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/Layout.tsx",
        lineNumber: 470,
        columnNumber: 19
      },
      this
    ) : null
  ] }, void 0, true, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 458,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 456,
    columnNumber: 11
  }, this) }, item.id, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 455,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 453,
    columnNumber: 5
  }, this);
}

export {
  l,
  s2 as s,
  o7 as o,
  p2 as p,
  o2,
  I,
  u,
  e2 as e,
  F2 as F,
  h3 as h,
  A,
  L3 as L,
  s3 as s2,
  y,
  a3 as a,
  x2 as x,
  j,
  D,
  L as L2,
  P,
  r3 as r,
  p3 as p2,
  c3 as c,
  d2 as d,
  C,
  c2,
  o5 as o3,
  u3 as u2,
  ve,
  Layout,
  clsx_m_default,
  Text,
  Heading,
  Section,
  PageHeader,
  Input,
  ATTR_LOADING_EAGER,
  getImageLoadingPriority,
  ProductGallery,
  getHeroPlaceholder,
  ProductCard,
  ProductSwimlane,
  ProductGrid,
  Skeleton,
  Button,
  Cart,
  CartLoading,
  OrderCard,
  AccountDetails,
  AccountAddressBook,
  Modal,
  Link2 as Link,
  FeaturedCollections,
  Hero,
  SortFilter,
  Grid,
  Pagination,
  AddToCartButton,
  IconClose,
  IconCaret,
  IconCheck
};
//# sourceMappingURL=/build/_shared/chunk-AGWOE2FP.js.map
