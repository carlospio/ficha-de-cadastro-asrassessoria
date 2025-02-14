/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/cadastro',
  assetPrefix: '/cadastro',
}

module.exports = nextConfig
