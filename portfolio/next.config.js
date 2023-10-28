/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn3d.iconscout.com",
        port: "",
        pathname: "/3d/**",
      },
      {
        protocol: "https",
        hostname: "cdnlogo.com",
        port: "",
        pathname: "/3d/free/**",
      },
      {
        protocol: "https",
        hostname: "cdni.iconscout.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  publicRuntimeConfig: {
    PWA: {
      manifest: "/manifest.json",
    },
  },
};

const runtimeCaching = require("next-pwa/cache");
// Configuration object tells the next-pwa plugin
const withPWA = require("next-pwa")({
  dest: "public", // Destination directory for the PWA files
  // disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
  runtimeCaching,
  sw: "service-worker.js",
  fallbacks: {
    image: "/offline.webp",
    document: "/offline",
  },
});

module.exports = withPWA(nextConfig);
