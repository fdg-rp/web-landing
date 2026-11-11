import { configDefaults, defineConfig } from "vitest/config";

// Tests of the generated site in built/public (build it with
// `yarn test:build`). The page-outline snapshot is left out: it changes with
// every content edit, so it runs on its own (`yarn test:outline`, see
// vitest.outline.config.ts) when dependencies change. The browser tests
// (test/e2e) run under Playwright.
export default defineConfig({
  test: {
    include: ["test/build/**/*.test.ts"],
    exclude: [...configDefaults.exclude, "test/build/outline.test.ts"],
  },
});
