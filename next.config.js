/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: "true",
  swMinify: "true",
  if async rewrites () {
    return {
        source: '/',
        destination: '/html/index.html',
        reactStrictMode: "true",
        swMinify: "true",
      }
  }
 
module.exports = {
 async rewrites() {
    return {
    source: "/public/myfile.html",
    destination: "/pages/api/myfile.js",
  }
}
module.exports = nextConfig
