/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    // API_URL: process.env.API_URL,
    APP_URL: process.env.APP_URL,
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
