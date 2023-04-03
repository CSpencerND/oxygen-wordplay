import {
  PRODUCT_CARD_FRAGMENT
} from "/build/_shared/chunk-YADXHAZD.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import "/build/_shared/chunk-IRGYCFTS.js";
import {
  require_seo
} from "/build/_shared/chunk-3J4QUTWW.js";
import {
  Button,
  Grid,
  PageHeader,
  Pagination,
  ProductCard,
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

// app/routes/($lang)/products/index.tsx
var import_seo = __toESM(require_seo());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AllProducts() {
  const { products } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, { heading: "All Products", variant: "allCollections" }, void 0, false, {
      fileName: "app/routes/($lang)/products/index.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { connection: products, children: ({
      endCursor,
      hasNextPage,
      hasPreviousPage,
      nextPageUrl,
      nodes,
      prevPageUrl,
      startCursor,
      nextLinkRef,
      isLoading
    }) => {
      const itemsMarkup = nodes.map((product, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        ProductCard,
        {
          product,
          loading: getImageLoadingPriority(i)
        },
        product.id,
        false,
        {
          fileName: "app/routes/($lang)/products/index.tsx",
          lineNumber: 94,
          columnNumber: 15
        },
        this
      ));
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        hasPreviousPage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Button,
          {
            to: prevPageUrl,
            variant: "secondary",
            prefetch: "intent",
            width: "full",
            disabled: !isLoading,
            state: {
              pageInfo: {
                endCursor,
                hasNextPage,
                startCursor
              },
              nodes
            },
            children: isLoading ? "Loading..." : "Previous"
          },
          void 0,
          false,
          {
            fileName: "app/routes/($lang)/products/index.tsx",
            lineNumber: 105,
            columnNumber: 21
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/($lang)/products/index.tsx",
          lineNumber: 104,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { "data-test": "product-grid", children: itemsMarkup }, void 0, false, {
          fileName: "app/routes/($lang)/products/index.tsx",
          lineNumber: 124,
          columnNumber: 17
        }, this),
        hasNextPage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Button,
          {
            ref: nextLinkRef,
            to: nextPageUrl,
            variant: "secondary",
            prefetch: "intent",
            width: "full",
            disabled: !isLoading,
            state: {
              pageInfo: {
                endCursor,
                hasPreviousPage,
                startCursor
              },
              nodes
            },
            children: isLoading ? "Loading..." : "Next"
          },
          void 0,
          false,
          {
            fileName: "app/routes/($lang)/products/index.tsx",
            lineNumber: 127,
            columnNumber: 21
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/($lang)/products/index.tsx",
          lineNumber: 126,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($lang)/products/index.tsx",
        lineNumber: 102,
        columnNumber: 15
      }, this);
    } }, void 0, false, {
      fileName: "app/routes/($lang)/products/index.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/products/index.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/products/index.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
var ALL_PRODUCTS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query AllProducts(
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    products(first: $first, last: $last, before: $startCursor, after: $endCursor) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`;
export {
  AllProducts as default
};
//# sourceMappingURL=/build/routes/($lang)/products/index-TU6YMMND.js.map
