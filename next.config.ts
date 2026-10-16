import type { NextConfig } from "next";

const isStandalone = process.env.NEXT_OUTPUT === "standalone";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: isStandalone ? "standalone" : "export",
  allowedDevOrigins: ["baka.com.vn", "*.baka.com.vn", "localhost"],
  images: {
    unoptimized: !isStandalone,
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90, 92, 95, 100],
  },
};

export default nextConfig;
