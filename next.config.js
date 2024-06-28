/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
const nextConfig = {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      swMinify: "true",
      reactStrictMode: "true",
      }
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
