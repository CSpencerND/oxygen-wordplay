export const storefront = {
    id: "gid://shopify/Shop/59552858306",
    token: "c7d90b968e9d11c36933f4ef37595217",
    domain: "https://wordplay4lyfe.myshopify.com",
    version: "2023-01",

    // id: "426178" as string,
    // token: "cd85004b0d92278efb41749389feea20" as string,
    // domain: "https://" + "wordplay4lyfe.myshopify.com" as string,
    // version: "2023-01",
}

const storefrontHeaders = {
    "content-type": "application/json",
    "X-SDK-Version": storefront.version,
    "X-Shopify-Storefront-Access-Token": storefront.token,
}

const storefrontQueryURL = `${storefront.domain}/api/${storefront.version}/graphql.json`

export default async function storefrontQuery<K extends string, V>(query: string, vars = {}): Promise<Record<K, V>> {
    const response = await fetch(storefrontQueryURL, {
        body: JSON.stringify({ query, variables: vars }),
        headers: storefrontHeaders,
        method: "POST",
    })

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    const { data } = (await response.json()) as { data: Record<K, V> }

    return data
}
