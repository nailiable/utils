import { defineConfig } from "tsup";

export default defineConfig({
  dts: true,
  sourcemap: true,
  entry: {
    index: "src/index.ts",
  },
  globalName: "Naily.util",
  format: ["cjs", "esm", "iife"],
});
