/** @type {import('next').NextConfig} **/
const nextConfig = {
  reactStrictMode: true,
  // swMinify: true,
  async rewrites () {
    return [
      {
        source: '/',
        destination: '/html/index.html',
        destination: '/public/myfile.html',
        destination: '/api/myfile.js',
      },
    ]
  },
  contentSecurityPolicy: {
  directives: {
  defaultSrc: ["'self'"],
  frame-src: ["'https://allowed-iframe-host.com'"],
  },
}
}
module.exports = nextConfig
