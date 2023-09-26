/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

module.exports = nextConfig;
