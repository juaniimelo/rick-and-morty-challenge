import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  test: {
    projects: [
      // Tests unitarios: design-system, core utils, etc.
      {
        extends: true,
        resolve: {
          alias: {
            "@": path.join(dirname, "."),
          },
        },
        test: {
          name: "unit",
          include: [
            "design-system/**/*.test.{ts,tsx}",
            "core/**/*.test.{ts,tsx}",
          ],
          environment: "jsdom",
          setupFiles: ["vitest.setup.ts"],
          globals: true,
        },
      },
      // Tests de Storybook (browser)
      {
        extends: true,
        plugins: [
          storybookTest({ configDir: path.join(dirname, ".storybook") }),
        ],
        test: {
          name: "storybook",
          include: ["**/*.stories.@(js|jsx|mjs|ts|tsx)"],
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: "chromium" }],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
