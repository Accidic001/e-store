import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],  // Add this line to configure the external domain
  },
  // Any other config options you may have
};

export default nextConfig;
