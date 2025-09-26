import StyleDictionary from "style-dictionary";

async function buildTokens() {
  try {
    const sd = new StyleDictionary({
      source: ["src/**/*.json"],
      platforms: {
        css: {
          transformGroup: "css",
          buildPath: "dist/",
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
          buildPath: "dist/",
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
          buildPath: "dist/",
          files: [
            {
              destination: "tokens.json",
              format: "json/flat",
            },
          ],
        },
        ts: {
          transformGroup: "js",
          buildPath: "dist/",
          files: [
            {
              destination: "tokens.d.ts",
              format: "typescript/es6-declarations",
            },
          ],
        },
      },
    });

    await sd.buildAllPlatforms();
    console.log("✅ Design tokens built successfully!");
  } catch (error) {
    console.error("❌ Error building tokens:", error);
    process.exit(1);
  }
}

buildTokens();
