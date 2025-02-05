/** @type {import('next').NextConfig} */
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
  }
}
module.exports = {
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
};

