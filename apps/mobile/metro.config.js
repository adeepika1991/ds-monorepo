// apps/mobile/metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

// Get the monorepo root directory (two levels up from apps/mobile)
const monorepoRoot = path.resolve(__dirname, "..", "..");

const config = getDefaultConfig(__dirname);

// Watch the entire monorepo for changes
config.watchFolders = [monorepoRoot];

// Optional: Add module resolution for monorepo packages
config.resolver.extraNodeModules = {
  // Help Metro resolve imports like '@my-org/design-system'
  "@my-org/design-system": path.resolve(monorepoRoot, "packages/design-system"),
};

module.exports = config;
