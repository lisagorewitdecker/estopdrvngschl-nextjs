/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: '/site.webmanifest',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/manifest+json',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/html/index.html',
      },
      {
        source: '/some-other-source',
        destination: '/public/myfile.html',
      },
      {
        source: '/another-source',
        destination: '/api/myfile.js',
      },
    ]
  }
}

module.exports = {
  ...nextConfig,
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
};
