/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: [
      "passmark.s3.amazonaws.com",
      "passmark.s3.eu-north-1.amazonaws.com",
    ],
  },
};
