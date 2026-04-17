/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.jsdelivr.net",
      "upload.wikimedia.org",
      "ui-avatars.com",
    ],
  },
};

module.exports = nextConfig;
