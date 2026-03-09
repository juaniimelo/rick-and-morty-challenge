import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

/** Config solo para tests unitarios (design-system + core). Sin Storybook/Playwright. */
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(dirname),
    },
  },
  test: {
    include: [
      "design-system/**/*.test.{ts,tsx}",
      "core/**/*.test.{ts,tsx}",
      "lib/**/*.test.{ts,tsx}",
    ],
    environment: "jsdom",
    setupFiles: ["vitest.setup.ts"],
    globals: true,
  },
});
