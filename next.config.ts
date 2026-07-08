import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 90, 95],
    deviceSizes: [640, 828, 1080, 1200, 1536, 1920, 2560],
    imageSizes: [64, 128, 256, 384, 512],
  },
};

export default nextConfig;
