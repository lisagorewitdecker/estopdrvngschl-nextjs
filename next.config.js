// @ts-check


module.exports = async {rewrites,{ defaultConfig }) => {
    return [
      {
    source: "/public/myfile.html",
    destination: "/pages/api/myfile.js",
  }
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
  reactStrictMode: "true",
  swMinify: "true",
  source: '/',
  destination: '/html/index.html',
}
module.exports = {
 async rewrites() {
    return [
      {
    source: "/public/myfile.html",
    destination: "/pages/api/myfile.js",
  },
    ]
  }
}
