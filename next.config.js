/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.platzi.com'],
    unoptimized: true,
  },
  basePath: '/cristian-alejandro',
  assetPrefix: '/cristian-alejandro'
}

module.exports = nextConfig
