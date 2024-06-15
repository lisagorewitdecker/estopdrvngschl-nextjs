/** @type {import('next').NextConfig} */
Const nextConfig = {
  reactStrictMode: true,
  swMinify:true,
  asynch rewrites () {
    return [
      {
        source: '/',
        destination: 'html/index.html',
      },
      ]
  }
}
module.exports = nextConfig
