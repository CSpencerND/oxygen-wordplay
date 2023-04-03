import "/build/_shared/chunk-IRGYCFTS.js";
import {
  require_seo
} from "/build/_shared/chunk-3J4QUTWW.js";
import {
  Button,
  Grid,
  Heading,
  Link,
  PageHeader,
  Pagination,
  Section,
  getImageLoadingPriority
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

// app/routes/($lang)/collections/index.tsx
var import_seo = __toESM(require_seo());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Collections() {
  const { collections } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, { heading: "Collections" }, void 0, false, {
      fileName: "app/routes/($lang)/collections/index.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { connection: collections, children: ({
      endCursor,
      hasNextPage,
      hasPreviousPage,
      nextPageUrl,
      nodes,
      prevPageUrl,
      startCursor,
      nextLinkRef,
      isLoading
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      hasPreviousPage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Button,
        {
          to: prevPageUrl,
          variant: "secondary",
          width: "full",
          prefetch: "intent",
          disabled: !isLoading,
          state: {
            pageInfo: {
              endCursor,
              hasNextPage,
              startCursor
            },
            nodes
          },
          children: isLoading ? "Loading..." : "Previous products"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/collections/index.tsx",
          lineNumber: 74,
          columnNumber: 19
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/collections/index.tsx",
        lineNumber: 73,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Grid,
        {
          items: nodes.length === 3 ? 3 : 2,
          "data-test": "collection-grid",
          children: nodes.map((collection, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            CollectionCard,
            {
              collection,
              loading: getImageLoadingPriority(i, 2)
            },
            collection.id,
            false,
            {
              fileName: "app/routes/($lang)/collections/index.tsx",
              lineNumber: 98,
              columnNumber: 19
            },
            this
          ))
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/collections/index.tsx",
          lineNumber: 93,
          columnNumber: 15
        },
        this
      ),
      hasNextPage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Button,
        {
          ref: nextLinkRef,
          to: nextPageUrl,
          variant: "secondary",
          width: "full",
          prefetch: "intent",
          disabled: !isLoading,
          state: {
            pageInfo: {
              endCursor,
              hasPreviousPage,
              startCursor
            },
            nodes
          },
          children: isLoading ? "Loading..." : "Next products"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/collections/index.tsx",
          lineNumber: 107,
          columnNumber: 19
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/collections/index.tsx",
        lineNumber: 106,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($lang)/collections/index.tsx",
      lineNumber: 71,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/collections/index.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/collections/index.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/collections/index.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
function CollectionCard({
  collection,
  loading
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/collections/${collection.handle}`, className: "grid gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-image bg-primary/5 aspect-[3/2]", children: collection?.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        alt: collection.title,
        src: collection.image.url,
        height: 400,
        sizes: "(max-width: 32em) 100vw, 33vw",
        width: 600,
        loading
      },
      void 0,
      false,
      {
        fileName: "app/routes/($lang)/collections/index.tsx",
        lineNumber: 146,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($lang)/collections/index.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { as: "h3", size: "copy", children: collection.title }, void 0, false, {
      fileName: "app/routes/($lang)/collections/index.tsx",
      lineNumber: 156,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/collections/index.tsx",
    lineNumber: 143,
    columnNumber: 5
  }, this);
}
export {
  Collections as default
};
//# sourceMappingURL=/build/routes/($lang)/collections/index-5QTV3TCO.js.map
