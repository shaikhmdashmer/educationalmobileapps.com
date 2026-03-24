/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    // swcMinify: false,
    // trailingSlash: true,
    output: 'standalone',
    images: {
      loader: 'imgix',
      path: '/',
    }
  }
  
  module.exports = nextConfig