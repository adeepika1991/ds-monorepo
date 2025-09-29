import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: true,
  transpilePackages: ["@repo/design-system", "@repo/tokens"],
};

export default nextConfig;
