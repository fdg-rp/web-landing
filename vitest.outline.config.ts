import { defineConfig } from "vitest/config";

// The page-outline snapshot (`yarn test:outline`). A dependency update must
// leave it unchanged; a content edit changes it on purpose (refresh it with
// `yarn test:outline -u` and review the diff).
export default defineConfig({
  test: {
    include: ["test/build/outline.test.ts"],
  },
});
