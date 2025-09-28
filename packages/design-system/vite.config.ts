// packages/design-system/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      include: ["src"],
      exclude: [
        "**/*.stories.tsx",
        "**/*.test.tsx",
        ".storybook/**",
        "**/*.native.tsx",
      ],
      outDir: "dist",
      insertTypesEntry: true,
    }),
  ],

  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "DesignSystem",
      fileName: (format) => `index.${format}.js`,
      formats: ["es"], // Only build ES modules for better compatibility
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        // Use proper chunking and avoid dynamic requires
        exports: "named",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
    outDir: "dist",
    // Add these for better optimization
    minify: false, // Disable minification to debug better
    sourcemap: true,
  },

  // Ensure proper resolution
  resolve: {
    dedupe: ["react", "react-dom"],
  },
});
