/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/site.webmanifest',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/manifest+json',
          },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/some-other-source',
        destination: '/myfile.html',
      },
      {
        source: '/another-source',
        destination: '/api/myfile',
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
