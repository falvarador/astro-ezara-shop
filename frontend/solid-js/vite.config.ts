import { defineConfig } from "vite";
import path from "path";
import solid from "vite-plugin-solid";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solid()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
});
