import { defineConfig } from "wmr";
import { promises as fs } from "fs";
import path from "path";
// import lsPlugin from "./public/plugins/ls.js";

function lsPlugin({ cwd } = {}) {
  return {
    name: "ls",
    async resolveId(id, importer) {
      if (!id.startsWith("ls:")) return;

      // pass through other plugins to resolve (the \0 avoids them trying to read the dir as a file)
      const r = await this.resolve(id.slice(3) + "\0", importer, {
        skipSelf: true,
      });

      // during development, this will generate URLs like "/@ls/pages":
      if (r) return "\0ls:" + r.id.replace(/\0$/, "");
    },
    async load(id) {
      if (!id.startsWith("\0ls:")) return;

      // remove the "\0ls:" prefix and convert to an absolute path:
      id = path.resolve(cwd || ".", id.slice(4));

      // watch the directory for changes:
      this.addWatchFile(id);

      // generate a module that exports the directory contents as an Array:
      const files = (await fs.readdir(id)).filter((d) => d[0] != ".");
      return `export default ${JSON.stringify(files)}`;
    },
  };
}

// Full list of options: https://wmr.dev/docs/configuration
export default defineConfig({
  /* Your configuration here */
  port: 3000,
  plugins: [lsPlugin({ cwd: "./public" })],
  alias: {
    "~/*": "./public",
    react: "preact/compat",
    "react-dom": "preact/compat",
  },
});
