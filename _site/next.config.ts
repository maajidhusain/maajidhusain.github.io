import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["*.worf.replit.dev", "*.replit.dev"],
};

export default nextConfig;
