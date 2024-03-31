/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    // basePath: process.env.HOMEPAGEROUTE,
    reactStrictMode: true,
    // https://raphaelpralat.medium.com/system-environment-variables-in-next-js-with-docker-1f0754e04cde
    // for setup env var
    // publicRuntimeConfig: {
    //   BACKEND_BASE_URL: process.env.BACKEND_BASE_ROUTE,
    //   BACKEND_URL: process.env.BACKEND_URL
    // },
    images: {
      domains:["localhost:3000"]
    },
    compiler: {
      removeConsole: false,
    },
  };
  
  module.exports = nextConfig;
  