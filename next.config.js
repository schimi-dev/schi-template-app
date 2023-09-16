/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: true,
        serverActions: true,
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/projects',
                permanent: false,
            }
        ]
    },
}

module.exports = nextConfig
