# web-landing

The public site at https://fatduckgaming.com: FDG's landing page, server
docs, news and lore. A static Nuxt 3 site on the Docus 1.x theme. Pages are
Markdown in `content/`. Site components are in `components/content/`.

- Deploys on every push to `main` (`.github/workflows/deploy.yml`): it
  generates the site, runs `yarn test`, deletes the live files and copies
  the build to the server. A failing test stops the deploy before anything
  is deleted.
- Pull requests run `.github/workflows/test.yml`: build, `yarn test`, the
  outline snapshot when dependencies changed, and the browser tests.

## Testing

See "Testing" in `README.md`. Before you commit, run `yarn test:build`,
then `yarn test`, then `yarn test:e2e`. If you changed content, also run
`yarn test:outline -u` and review the snapshot diff.

Every test runs offline. The site makes three network calls: GitHub
contributors and announcements while it builds, and the racing leaderboard
in the browser. The test build bakes no data from the first two, and the
browser tests answer the third with a fixture. Don't add a test that needs
the network.

## Known issues

These are recorded in the tests and should be fixed by the upgrade below:

- The home page has a hydration mismatch. Pinceau, the styling engine in
  Docus 1.x, hashes the `Container` classes differently on the server and
  in the browser. It's an accepted problem in `test/e2e/fixtures.ts`
  (`KNOWN_PROBLEMS`): remove that entry once the mismatch is gone.
- `yarn lint` fails: ESLint 9 no longer reads `.eslintrc.cjs`.
- Icons load from the public Iconify API at build time and in the browser.
- `components/SearchOverlay.vue` and `components/Overlay.vue` are not used:
  search is Docus's own.

## Upgrading dependencies

Most packages are a major version or more behind. The upgrade is two steps,
each on its own branch and each judged by the tests:

1. **Within Docus 1.x.** Update Nuxt to the latest 3.x, `nuxt-og-image` to
   the last version that supports this setup, and the smaller packages
   (`sitemap`, `@nuxtjs/plausible`, `@nuxt/devtools`). Also move ESLint to
   `eslint.config.mjs` and Vitest to the latest version: Vitest 4 and later
   need a newer Vite than Nuxt 3.12 provides. `yarn test:outline` must pass
   unchanged.
2. **Docus 1 → current `docus` on Nuxt 4 and Nuxt Content 3.** Pinceau is
   gone in this version, so this step means rewriting the theme overrides
   (`components/DocsPageLayout.vue`, `components/DocsToc.vue`, `app.config.ts`,
   the `css({...})` styles in `components/content/`). The routes and server
   routes move to Content 3's collections API (`server/routes/*.ts`,
   `ServerDocsCategoryGrid.vue`). Here the outline snapshot is a review aid,
   not a gate: expect markup changes, but no page, heading or link should
   disappear.

Before starting either step, refresh the snapshot on `main` (`yarn
test:build && yarn test:outline -u`), so the only differences are ones the
upgrade causes.
