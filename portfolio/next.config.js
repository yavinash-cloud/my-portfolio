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
  distDir: "build",
};

module.exports = nextConfig;
