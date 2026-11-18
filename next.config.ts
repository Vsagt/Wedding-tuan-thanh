import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Cấu hình cho phép truy cập từ IP nội bộ của bạn */
  allowedDevOrigins: ['192.168.1.15'],
  
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
