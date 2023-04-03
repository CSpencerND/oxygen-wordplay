import {
  MEDIA_FRAGMENT,
  PRODUCT_CARD_FRAGMENT
} from "/build/_shared/chunk-YADXHAZD.js";
import "/build/_shared/chunk-IRGYCFTS.js";
import {
  require_seo
} from "/build/_shared/chunk-3J4QUTWW.js";
import {
  FeaturedCollections,
  Hero,
  ProductSwimlane,
  getHeroPlaceholder
} from "/build/_shared/chunk-AGWOE2FP.js";
import "/build/_shared/chunk-QFIHVZBB.js";
import "/build/_shared/chunk-CVOFPAJN.js";
import "/build/_shared/chunk-F6XALK7G.js";
import "/build/_shared/chunk-WTEBH5IU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XWEF3JE5.js";
import {
  Await,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-7LJUK6MV.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($lang)/index.tsx
var import_react = __toESM(require_react());
var import_seo = __toESM(require_seo());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Homepage() {
  const {
    primaryHero,
    secondaryHero,
    tertiaryHero,
    featuredCollections,
    featuredProducts
  } = useLoaderData();
  const skeletons = getHeroPlaceholder([{}, {}, {}]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    primaryHero && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero, { ...primaryHero, height: "full", top: true, loading: "eager" }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 133,
      columnNumber: 9
    }, this),
    featuredProducts && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: featuredProducts, children: ({ products }) => {
      if (!products?.nodes)
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
          fileName: "app/routes/($lang)/index.tsx",
          lineNumber: 140,
          columnNumber: 44
        }, this);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        ProductSwimlane,
        {
          products: products.nodes,
          title: "Featured Products",
          count: 4
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/index.tsx",
          lineNumber: 142,
          columnNumber: 17
        },
        this
      );
    } }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 138,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 137,
      columnNumber: 9
    }, this),
    secondaryHero && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero, { ...skeletons[1] }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 154,
      columnNumber: 29
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: secondaryHero, children: ({ hero }) => {
      if (!hero)
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
          fileName: "app/routes/($lang)/index.tsx",
          lineNumber: 157,
          columnNumber: 33
        }, this);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero, { ...hero }, void 0, false, {
        fileName: "app/routes/($lang)/index.tsx",
        lineNumber: 158,
        columnNumber: 22
      }, this);
    } }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 155,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 154,
      columnNumber: 9
    }, this),
    featuredCollections && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: featuredCollections, children: ({ collections }) => {
      if (!collections?.nodes)
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
          fileName: "app/routes/($lang)/index.tsx",
          lineNumber: 168,
          columnNumber: 47
        }, this);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        FeaturedCollections,
        {
          collections: collections.nodes,
          title: "Collections"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/index.tsx",
          lineNumber: 170,
          columnNumber: 17
        },
        this
      );
    } }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 166,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 165,
      columnNumber: 9
    }, this),
    tertiaryHero && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero, { ...skeletons[2] }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 181,
      columnNumber: 29
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: tertiaryHero, children: ({ hero }) => {
      if (!hero)
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
          fileName: "app/routes/($lang)/index.tsx",
          lineNumber: 184,
          columnNumber: 33
        }, this);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero, { ...hero }, void 0, false, {
        fileName: "app/routes/($lang)/index.tsx",
        lineNumber: 185,
        columnNumber: 22
      }, this);
    } }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 182,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 181,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/index.tsx",
    lineNumber: 131,
    columnNumber: 5
  }, this);
}
var COLLECTION_CONTENT_FRAGMENT = `#graphql
  ${MEDIA_FRAGMENT}
  fragment CollectionContent on Collection {
    id
    handle
    title
    descriptionHtml
    heading: metafield(namespace: "hero", key: "title") {
      value
    }
    byline: metafield(namespace: "hero", key: "byline") {
      value
    }
    cta: metafield(namespace: "hero", key: "cta") {
      value
    }
    spread: metafield(namespace: "hero", key: "spread") {
      reference {
        ...Media
      }
    }
    spreadSecondary: metafield(namespace: "hero", key: "spread_secondary") {
      reference {
        ...Media
      }
    }
  }
`;
var HOMEPAGE_SEO_QUERY = `#graphql
  ${COLLECTION_CONTENT_FRAGMENT}
  query collectionContent($handle: String, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    hero: collection(handle: $handle) {
      ...CollectionContent
    }
    shop {
      name
      description
    }
  }
`;
var COLLECTION_HERO_QUERY = `#graphql
  ${COLLECTION_CONTENT_FRAGMENT}
  query collectionContent($handle: String, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    hero: collection(handle: $handle) {
      ...CollectionContent
    }
  }
`;
var HOMEPAGE_FEATURED_PRODUCTS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query homepageFeaturedProducts($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    products(first: 8) {
      nodes {
        ...ProductCard
      }
    }
  }
`;
export {
  Homepage as default
};
//# sourceMappingURL=/build/routes/($lang)/index-RZ64MDHM.js.map