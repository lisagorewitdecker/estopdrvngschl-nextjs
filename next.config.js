/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swMinify: true,
  async rewrites () {
    return [
      {
        source: '/',
        destination: '/html/index.html',
        destination: '/public/myfile.html',
        pages: '/api/myfile.js
      },
    ]
  }
}
module.exports = nextConfig
