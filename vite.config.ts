import fs from "fs";
import path from "path";
import { defineConfig } from "vite";

const outDir = "./dist";

export const config = defineConfig(({ mode }) => ({
  base: "./",
  build: {
    manifest: true,
    commonjsOptions: {
      include: [/node_modules/],
    },
    rollupOptions: {
      input: {
        "page-flow": path.resolve(__dirname, "applications/flow/src/index.tsx"),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
        manualChunks: undefined,
      },
    },
    outDir: path.resolve(
      __dirname,
      "../../src/main/webapp/static/js/compiled-flow"
    ),
  },
  css: {
    modules: {
      scopeBehaviour: "local",
    },
  },
  server: {
    port: 7779,
    origin: "http://localhost:7779",
  },
}));

export default config;
