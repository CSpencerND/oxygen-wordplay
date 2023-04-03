export const storefront = {
    id: process.env.PUBLIC_STOREFRONT_ID as string,
    token: process.env.PUBLIC_STOREFRONT_API_TOKEN as string,
    domain: "https://" + process.env.PUBLIC_STORE_DOMAIN as string,
    version: "2023-01",
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
