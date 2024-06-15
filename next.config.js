/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swMinify: true,
  async rewrites () {
    return [
      {
        source: '/',
        destination: 'html/index.html',
      },
    ]
  }
}

module.exports = nextConfig
