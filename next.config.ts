import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
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
