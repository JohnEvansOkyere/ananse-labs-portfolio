import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  /* A short, shareable link to the game (public/chale-city is a static copy). */
  async redirects() {
    return [
      { source: "/play", destination: "/chale-city/index.html", permanent: false },
    ];
  },
};

export default nextConfig;
