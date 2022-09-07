/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "ae01.alicdn.com", "ng.jumia.is", "localhost"],
  },
  // webpack(config) {
  //   config.infrastructureLogging = { debug: /PackFileCache/ };
  //   return config;
  // },
};

module.exports = nextConfig;
