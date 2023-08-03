/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ["www.carrefourmaroc.ma"],
    loader: 'akamai',
    path: '',
  },
   async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL || ""}:slug*`,
      },
    ]
  },
};
