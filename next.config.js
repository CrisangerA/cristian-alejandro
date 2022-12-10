/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.platzi.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
