import chokidar from "chokidar";
import { exec } from "child_process";
import { promisify } from "util";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const execAsync = promisify(exec);

let isBuilding = false;
let buildQueue = [];

async function buildAndIndex() {
  if (isBuilding) {
    console.log("📦 Build already in progress, queuing...");
    buildQueue.push(true);
    return;
  }

  try {
    isBuilding = true;
    console.log("\n🔄 Detected changes, rebuilding tokens...");

    // Run both builds sequentially
    await execAsync("node build.js", { cwd: __dirname });
    await execAsync("node build-themes-index.js", { cwd: __dirname });

    console.log("✅ Build and index complete!");
  } catch (error) {
    console.error("❌ Build error:", error.message);
    if (error.stderr) {
      console.error("Build stderr:", error.stderr);
    }
  } finally {
    isBuilding = false;

    // Process any queued builds
    if (buildQueue.length > 0) {
      buildQueue.pop(); // Remove one from queue
      console.log("🔄 Processing queued build...");
      setTimeout(buildAndIndex, 100); // Small delay before next build
    }
  }
}

// Watch for changes
const watcher = chokidar.watch(
  ["src/**/*.json", "build.js", "build-themes-index.js"],
  {
    ignored: /(^|[/\\])\../, // ignore dotfiles
    persistent: true,
    cwd: __dirname,
  }
);

watcher
  .on("ready", () => {
    console.log("👀 Watching for token changes...");
    console.log(
      "   📁 Watching:",
      ["src/**/*.json", "build.js", "build-themes-index.js"].join(
        "\n   📁 Watching: "
      )
    );
  })
  .on("change", (path) => {
    console.log(`📁 File changed: ${path}`);
    buildAndIndex();
  })
  .on("add", (path) => {
    console.log(`📁 File added: ${path}`);
    buildAndIndex();
  })
  .on("unlink", (path) => {
    console.log(`📁 File removed: ${path}`);
    buildAndIndex();
  })
  .on("error", (error) => {
    console.error("❌ Watcher error:", error);
  });

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("\n👋 Stopping watcher...");
  watcher.close();
  process.exit(0);
});
