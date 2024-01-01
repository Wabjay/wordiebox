
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[
      {
        protocol: "https",
        hostname: "ppt-designer.cyclic.app"
      }
    ]
  }
    // reactStrictMode: true,
    // output: 'export',
    // distDir: 'dist',
    // trailingSlash: true,
    // assetPrefix: '.',
  }
  
  module.exports = nextConfig;