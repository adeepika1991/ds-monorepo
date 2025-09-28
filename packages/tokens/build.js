import StyleDictionary from "style-dictionary";

const brands = ["acme", "globex"];
const themes = ["light", "dark"];

// Define platforms once, reuse for all brand-theme combos
function getPlatforms(brand, theme) {
  return {
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
    js: {
      transformGroup: "js",
      buildPath: `dist/${brand}-${theme}/`,
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
          options: { outputReferences: true },
        },
      ],
    },
    json: {
      transformGroup: "js",
      buildPath: `dist/${brand}-${theme}/`,
      files: [
        {
          destination: "tokens.json",
          format: "json/flat",
        },
      ],
    },
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
  };
}

async function buildTokens() {
  try {
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
      }
    }

    console.log("\n✅ All brand-theme tokens built successfully!");
  } catch (error) {
    console.error("❌ Error building tokens:", error);
    process.exit(1);
  }
}

buildTokens();
