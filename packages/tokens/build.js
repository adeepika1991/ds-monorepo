import StyleDictionary from "style-dictionary";

const brands = ["acme", "globex"];
const themes = ["light", "dark"];

// Register custom format for nested JavaScript structure
StyleDictionary.registerFormat({
  name: "javascript/nested",
  format: function ({ dictionary }) {
    // Create a clean nested structure without all the metadata
    const cleanTokens = {};

    // Transform the dictionary to remove all the Style Dictionary metadata
    function transformTokens(tokenObj) {
      if (tokenObj && typeof tokenObj === "object") {
        // If it has a value property, return just the value
        if (tokenObj.value !== undefined) {
          return tokenObj.value;
        }

        // If it's a nested object, recursively transform
        const result = {};
        for (const key in tokenObj) {
          // Skip metadata properties
          if (
            [
              "filePath",
              "isSource",
              "original",
              "name",
              "attributes",
              "path",
              "key",
            ].includes(key)
          ) {
            continue;
          }
          result[key] = transformTokens(tokenObj[key]);
        }
        return result;
      }
      return tokenObj;
    }

    const nestedTokens = transformTokens(dictionary.tokens);

    // Return as ES6 module export
    return `export default ${JSON.stringify(nestedTokens, null, 2)};`;
  },
});

// Register CommonJS version
StyleDictionary.registerFormat({
  name: "javascript/nested-common",
  format: function ({ dictionary }) {
    // Create a clean nested structure without all the metadata
    const cleanTokens = {};

    function transformTokens(tokenObj) {
      if (tokenObj && typeof tokenObj === "object") {
        if (tokenObj.value !== undefined) {
          return tokenObj.value;
        }

        const result = {};
        for (const key in tokenObj) {
          if (
            [
              "filePath",
              "isSource",
              "original",
              "name",
              "attributes",
              "path",
              "key",
            ].includes(key)
          ) {
            continue;
          }
          result[key] = transformTokens(tokenObj[key]);
        }
        return result;
      }
      return tokenObj;
    }

    const nestedTokens = transformTokens(dictionary.tokens);

    // Return as CommonJS module export
    return `module.exports = ${JSON.stringify(nestedTokens, null, 2)};`;
  },
});

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

    // For JavaScript/TypeScript consumption - USING CUSTOM NESTED FORMAT
    js: {
      transforms: ["attribute/cti", "name/pascal", "size/px", "color/hex"],
      buildPath: `dist/${brand}-${theme}/`,
      files: [
        {
          destination: "tokens.js",
          format: "javascript/nested-common", // Custom CommonJS format
        },
        {
          destination: "tokens.cjs",
          format: "javascript/nested-common", // Custom CommonJS format
        },
        {
          destination: "tokens.mjs",
          format: "javascript/nested", // Custom ES6 format
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
          format: "javascript/es6",
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
