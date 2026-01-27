import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // REQUIRED for static hosting (GCS)
  output: "export",

  // Optional but recommended
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
