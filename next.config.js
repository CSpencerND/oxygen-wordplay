/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["cdn.shopify.com"],
    },
    env: {
        PUBLIC_STOREFRONT_ID: Oxygen.env.PUBLIC_STOREFRONT_ID,
        PUBLIC_STOREFRONT_API_TOKEN: Oxygen.env.PUBLIC_STOREFRONT_API_TOKEN,
        PUBLIC_STORE_DOMAIN: Oxygen.env.PUBLIC_STORE_DOMAIN,
        PUBLIC_STOREFRONT_VERSION: "2023-01"
    },
}

module.exports = nextConfig
