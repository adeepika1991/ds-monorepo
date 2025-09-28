// packages/tokens/build-themes-index.js
import { writeFileSync, mkdirSync, existsSync, readdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function generateThemesIndex() {
  try {
    console.log("📁 Generating themes index files...");

    const distDir = `${__dirname}/dist`;

    // Check if dist directory exists and has theme folders
    if (!existsSync(distDir)) {
      console.log("❌ dist directory does not exist. Run build.js first.");
      process.exit(1);
    }

    // Dynamically discover available themes from dist directory
    const themeDirs = readdirSync(distDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory() && dirent.name.includes("-"))
      .map((dirent) => dirent.name);

    if (themeDirs.length === 0) {
      console.log(
        "❌ No theme directories found in dist/. Run build.js first."
      );
      process.exit(1);
    }

    console.log(`📂 Found ${themeDirs.length} theme directories:`, themeDirs);

    // Generate ESM index
    let esmContent = "// Auto-generated themes index - ESM version\n";

    // Generate CJS index
    let cjsContent = "// Auto-generated themes index - CommonJS version\n";

    // Generate TypeScript declarations
    let tsContent = `// Auto-generated TypeScript declarations\nexport interface ThemeTokens { \n  color?: {\n    primary?: string;\n    secondary?: string;\n    background?: string;\n    text?: string;\n  };\n  size?: {\n    font?: {\n      sm?: string;\n      md?: string;\n      lg?: string;\n    };\n    spacing?: {\n      sm?: string;\n      md?: string;\n      lg?: string;\n    };\n  };\n  button?: {\n    padding?: string;\n    fontSize?: string;\n    borderRadius?: string;\n    primary?: {\n      background?: string;\n      text?: string;\n    };\n  };\n  [key: string]: any;\n}\n\n`;

    themeDirs.forEach((themeDir) => {
      const [brand, theme] = themeDir.split("-");
      if (!brand || !theme) return;

      const importName = `${brand}${
        theme.charAt(0).toUpperCase() + theme.slice(1)
      }`;
      const themePath = `./${themeDir}`;

      // Check if files exist before adding to index
      const filesToCheck = [
        join(distDir, themeDir, "tokens.mjs"),
        join(distDir, themeDir, "tokens.cjs"),
        join(distDir, themeDir, "tokens.rn.js"),
      ];

      const allFilesExist = filesToCheck.every((file) => existsSync(file));

      if (!allFilesExist) {
        console.log(`⚠️  Skipping ${themeDir} - some token files are missing`);
        return;
      }

      // ESM exports - FIXED: Use named imports for React Native, default for others
      esmContent += `import ${importName} from '${themePath}/tokens.mjs';\n`;
      esmContent += `import * as ${importName}ReactNative from '${themePath}/tokens.rn.js';\n`; // Changed to named import
      esmContent += `export { ${importName}, ${importName}ReactNative };\n\n`;

      // CJS exports - FIXED: React Native uses named exports
      cjsContent += `const ${importName} = require('${themePath}/tokens.cjs');\n`;
      cjsContent += `const ${importName}ReactNative = require('${themePath}/tokens.rn.js');\n`;
      cjsContent += `exports.${importName} = ${importName};\n`;
      cjsContent += `exports.${importName}ReactNative = ${importName}ReactNative;\n\n`;

      // TypeScript exports
      tsContent += `export declare const ${importName}: ThemeTokens;\n`;
      tsContent += `export declare const ${importName}ReactNative: any;\n`; // React Native has flat structure
    });

    // Write files
    writeFileSync(`${distDir}/themes-index.mjs`, esmContent);
    writeFileSync(`${distDir}/themes-index.cjs`, cjsContent);
    writeFileSync(`${distDir}/themes-index.d.ts`, tsContent);

    console.log("✅ Themes index files generated!");
    console.log("   📄 themes-index.mjs (ES Modules)");
    console.log("   📄 themes-index.cjs (CommonJS)");
    console.log("   📄 themes-index.d.ts (TypeScript)");
  } catch (error) {
    console.error("❌ Error generating themes index:", error);
    process.exit(1);
  }
}

generateThemesIndex();
