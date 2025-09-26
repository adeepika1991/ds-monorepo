const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

const root = path.resolve(__dirname, "../..");

const config = getDefaultConfig(__dirname);

config.watchFolders = [root, path.resolve(root, "packages")];

config.resolver.extraNodeModules = {
  react: path.resolve(root, "node_modules/react"),
  "react-dom": path.resolve(root, "node_modules/react-dom"),
  "react-native": path.resolve(root, "node_modules/react-native"),
};

config.resolver.unstable_enableSymlinks = true;

module.exports = config;
