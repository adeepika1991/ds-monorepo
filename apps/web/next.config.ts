import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@repo/design-system", "@repo/tokens"],
};

export default nextConfig;
