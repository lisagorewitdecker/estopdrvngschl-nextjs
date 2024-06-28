/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swMinify: true,
  async rewrites () {
    return [
      {
        source: '/',
        destination: '/html/index.html',
      },
    ],
 module.exports = nextConfig
rewrites: async () => [
  {
    source: "/public/myfile.html",
    destination: "/pages/api/myfile.js",
  },
]
}
}
module.exports = nextConfig
