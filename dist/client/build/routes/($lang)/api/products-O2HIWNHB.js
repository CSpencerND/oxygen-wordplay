import {
  PRODUCT_CARD_FRAGMENT
} from "/build/_shared/chunk-YADXHAZD.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import "/build/_shared/chunk-CVOFPAJN.js";
import "/build/_shared/chunk-7LJUK6MV.js";
import "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($lang)/api/products.tsx
var PRODUCTS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query (
    $query: String
    $count: Int
    $reverse: Boolean
    $country: CountryCode
    $language: LanguageCode
    $sortKey: ProductSortKeys
  ) @inContext(country: $country, language: $language) {
    products(first: $count, sortKey: $sortKey, reverse: $reverse, query: $query) {
      nodes {
        ...ProductCard
      }
    }
  }
`;
function ProductsApiRoute() {
  return null;
}
export {
  ProductsApiRoute as default
};
//# sourceMappingURL=/build/routes/($lang)/api/products-O2HIWNHB.js.map
