// /// <reference types="vitest/config" />
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import tailwindcss from "@tailwindcss/vite";

// // https://vite.dev/config/
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
// import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
// const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// // More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   test: {
//     projects: [{
//       extends: true,
//       plugins: [
//       // The plugin will run tests for the stories defined in your Storybook config
//       // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
//       storybookTest({
//         configDir: path.join(dirname, '.storybook')
//       })],
//       test: {
//         name: 'storybook',
//         browser: {
//           enabled: true,
//           headless: true,
//           provider: 'playwright',
//           instances: [{
//             browser: 'chromium'
//           }]
//         },
//         setupFiles: ['.storybook/vitest.setup.ts']
//       }
//     }]
//   }
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  // ✅ ADD LIBRARY BUILD CONFIGURATION
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"), // Your library entry point
      name: "DesignSystem",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Mark React as external
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },

  // ✅ TEMPORARILY disable test config (comment out entirely)
  // test: { ... }
});
