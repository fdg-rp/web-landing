// `yarn test:build`: generates the site the way the tests expect it, with
// no network needed. The share-image logo comes from public/ rather than the
// CDN (production keeps the CDN logo, see nuxt.config.ts runtimeConfig).

import { spawnSync } from "node:child_process";

const result = spawnSync("nuxi", ["generate"], {
  stdio: "inherit",
  shell: true,
  env: { ...process.env, NUXT_PUBLIC_OG_SITE_LOGO: "/img/fdg_logo.png" },
});
process.exit(result.status ?? 1);
