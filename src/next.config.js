/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/jerry-vrabel-development',
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/jerry-vrabel-development/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
