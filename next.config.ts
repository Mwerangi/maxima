import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for shared hosting: `npm run build` emits plain HTML to out/
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
