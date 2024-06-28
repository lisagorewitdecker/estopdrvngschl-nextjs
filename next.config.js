// @ts-check

/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
module.exports = (phase, { defaultConfig }) => {
if (phase, nextConfig  === PHASE_DEVELOPMENT_SERVER) {
    return{
      reactStrictMode: "true",
      swMinify: "true"
       
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
module.exports = nextConfig


 
