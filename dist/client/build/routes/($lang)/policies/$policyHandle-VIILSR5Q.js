import "/build/_shared/chunk-AUYLHJJM.js";
import "/build/_shared/chunk-IRGYCFTS.js";
import {
  require_seo
} from "/build/_shared/chunk-3J4QUTWW.js";
import {
  Button,
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

// app/routes/($lang)/policies/$policyHandle.tsx
var import_seo = __toESM(require_seo());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Policies() {
  const { policy } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Section,
    {
      padding: "all",
      display: "flex",
      className: "flex-col items-baseline w-full gap-8 md:flex-row",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          PageHeader,
          {
            heading: policy.title,
            className: "grid items-start flex-grow gap-4 md:sticky top-36 md:w-5/12",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Button,
              {
                className: "justify-self-start",
                variant: "inline",
                to: "/policies",
                children: "\u2190 Back to Policies"
              },
              void 0,
              false,
              {
                fileName: "app/routes/($lang)/policies/$policyHandle.tsx",
                lineNumber: 65,
                columnNumber: 11
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/($lang)/policies/$policyHandle.tsx",
            lineNumber: 61,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-grow w-full md:w-7/12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            dangerouslySetInnerHTML: { __html: policy.body },
            className: "prose dark:prose-invert"
          },
          void 0,
          false,
          {
            fileName: "app/routes/($lang)/policies/$policyHandle.tsx",
            lineNumber: 74,
            columnNumber: 11
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/($lang)/policies/$policyHandle.tsx",
          lineNumber: 73,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/($lang)/policies/$policyHandle.tsx",
      lineNumber: 56,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/($lang)/policies/$policyHandle.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}
export {
  Policies as default
};
//# sourceMappingURL=/build/routes/($lang)/policies/$policyHandle-VIILSR5Q.js.map
