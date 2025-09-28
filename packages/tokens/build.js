import StyleDictionary from "style-dictionary";

const brands = ["acme", "globex"];
const themes = ["light", "dark"];

// Define platforms for different consumers
function getPlatforms(brand, theme) {
  return {
    // For Next.js/Web apps
    css: {
      transformGroup: "css",
      buildPath: `dist/${brand}-${theme}/`,
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          options: { outputReferences: true },
        },
      ],
    },

    // For JavaScript/TypeScript consumption - FIXED FORMATS
    js: {
      transformGroup: "js",
      buildPath: `dist/${brand}-${theme}/`,
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6", // Named exports for .js
          options: { outputReferences: true },
        },
        {
          destination: "tokens.cjs",
          format: "javascript/module", // module.exports for CommonJS
        },
        {
          destination: "tokens.mjs",
          format: "javascript/es6", // Named exports for ESM
          options: {
            outputReferences: true,
          },
        },
      ],
    },

    // For Design System documentation
    json: {
      transformGroup: "js",
      buildPath: `dist/${brand}-${theme}/`,
      files: [
        {
          destination: "tokens.json",
          format: "json/nested",
        },
      ],
    },

    // For TypeScript support
    ts: {
      transformGroup: "js",
      buildPath: `dist/${brand}-${theme}/`,
      files: [
        {
          destination: "tokens.d.ts",
          format: "typescript/es6-declarations",
        },
      ],
    },

    // For React Native
    reactNative: {
      transforms: ["name/camel", "size/object", "color/css"],
      buildPath: `dist/${brand}-${theme}/`,
      files: [
        {
          destination: "tokens.rn.js",
          format: "javascript/es6", // Use es6 for React Native too
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  };
}

async function buildTokens() {
  try {
    console.log("🏗️  Building design tokens...");

    for (const brand of brands) {
      for (const theme of themes) {
        console.log(`\n⚙️  Building tokens for ${brand}-${theme}...`);

        const sd = new StyleDictionary({
          source: [
            "src/base.json",
            `src/themes/theme.${theme}.json`,
            `src/brands/brand-${brand}.json`,
            "src/components/*.json",
          ],
          platforms: getPlatforms(brand, theme),
        });

        await sd.buildAllPlatforms();
        console.log(`✅ ${brand}-${theme} built successfully`);
      }
    }

    console.log("\n🎉 All tokens built successfully!");
  } catch (error) {
    console.error("❌ Error building tokens:", error);
    process.exit(1);
  }
}

buildTokens();
