import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  allowedDevOrigins: ["*.worf.replit.dev", "*.replit.dev"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
