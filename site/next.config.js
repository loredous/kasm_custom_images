/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Loredous Custom Kasm Registry',
    description: 'Custom kasm registry for Loredous',
    icon: '/img/logo.svg',
    listUrl: 'https://loredous.github.io/',
    contactUrl: 'https://portfoilio.loredous.net',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm_custom_images/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
