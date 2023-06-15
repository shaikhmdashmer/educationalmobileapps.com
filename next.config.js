/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: false,
    trailingSlash: true,
    images: {
      loader: 'imgix',
      path: '/',
    }
  }
  
  module.exports = nextConfig