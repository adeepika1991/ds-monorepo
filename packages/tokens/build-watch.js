import StyleDictionary from "style-dictionary";
import chokidar from "chokidar";

async function build() {
  const sd = new StyleDictionary({
    source: ["src/**/*.json"],
    platforms: {
      // ... same platforms config as above
    },
  });

  await sd.buildAllPlatforms();
  console.log("🔁 Tokens rebuilt at", new Date().toLocaleTimeString());
}

// Watch for changes
const watcher = chokidar.watch(["src/**/*.json"]);
watcher.on("change", build);
watcher.on("add", build);

console.log("👀 Watching for token changes...");
await build(); // Initial build
