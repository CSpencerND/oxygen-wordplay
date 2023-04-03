import "/build/_shared/chunk-AUYLHJJM.js";
import "/build/_shared/chunk-IRGYCFTS.js";
import {
  require_seo
} from "/build/_shared/chunk-3J4QUTWW.js";
import {
  Heading,
  Link,
  PageHeader,
  Section
} from "/build/_shared/chunk-AGWOE2FP.js";
import "/build/_shared/chunk-QFIHVZBB.js";
import "/build/_shared/chunk-CVOFPAJN.js";
import "/build/_shared/chunk-F6XALK7G.js";
import "/build/_shared/chunk-WTEBH5IU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XWEF3JE5.js";
import {
  useLoaderData
} from "/build/_shared/chunk-7LJUK6MV.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($lang)/policies/index.tsx
var import_seo = __toESM(require_seo());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Policies() {
  const { policies } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, { heading: "Policies" }, void 0, false, {
      fileName: "app/routes/($lang)/policies/index.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { padding: "x", className: "mb-24", children: policies.map((policy) => {
      return policy && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { className: "font-normal text-heading", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/policies/${policy.handle}`, children: policy.title }, void 0, false, {
        fileName: "app/routes/($lang)/policies/index.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this) }, policy.id, false, {
        fileName: "app/routes/($lang)/policies/index.tsx",
        lineNumber: 48,
        columnNumber: 15
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/($lang)/policies/index.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/policies/index.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
export {
  Policies as default
};
//# sourceMappingURL=/build/routes/($lang)/policies/index-TBTDNEZH.js.map