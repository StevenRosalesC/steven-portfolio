import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  compress: true,
  typedRoutes: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/politica-de-privacidad",
        permanent: true,
      },
      {
        source: "/cookies",
        destination: "/politica-de-cookies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
