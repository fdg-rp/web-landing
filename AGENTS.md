# web-landing

The public site at https://fatduckgaming.com: FDG's landing page, server
docs, news and lore. A static site on Docus 5 (a Nuxt 4 layer on Nuxt UI 4,
Tailwind 4 and Nuxt Content 3), built with Node 22. Pages are Markdown in
`content/`; the site's own components are in `app/components/`.

- Deploys on every push to `main` (`.github/workflows/deploy.yml`): it
  generates the site, runs `yarn test`, deletes the live files and copies
  the build to the server. A failing test stops the deploy before anything
  is deleted.
- Pull requests run `.github/workflows/test.yml`: build, `yarn test`, the
  outline snapshot when dependencies changed, and the browser tests.

## How the site is put together

- `nuxt.config.ts` holds what Docus doesn't do for a static host: folder
  URLs redirect to a page (`navigation.redirect` in a folder's
  `.navigation.yml`, else its first page), every page is prerendered, each
  page's Markdown version is copied to `<page>.md`, and a page's leading
  `# Title` is dropped when it repeats the title Docus already shows.
- Content written for Docus 1 still works: `::alert`, `::list`,
  `::card-grid`/`::card`, `::callout`, `::block-hero`, `:ellipsis` and
  `:video-player` are components in `app/components/content/` (`::card`
  and `::callout` map to `FdgCard`/`FdgCallout`, past Nuxt UI's own).
- Folder settings (icon, title, redirect) are in `.navigation.yml`. A
  section's menu order follows file names, so each section's `0.home.md`
  comes first and its tab opens it.
- Inter is bundled from npm; no font or icon is fetched from a font service
  at build time except Iconify icons, which `@nuxt/icon` bundles.
- The server must send `.wasm` files as `application/wasm` (Content's
  search database runs in the browser).

## Testing

See "Testing" in `README.md`. Before you commit, run `yarn lint`,
`yarn test:build`, then `yarn test` and `yarn test:e2e`. If you changed
content, also run `yarn test:outline -u` and review the snapshot diff.

The tests run offline. The site makes three network calls: GitHub
contributors and announcements while it builds, and the racing leaderboard
in the browser. The test build bakes no data from the first two, and the
browser tests answer the third with a fixture. Don't add a test that needs
the network.

## Dependencies

Everything is on its latest major except, on purpose: `@playwright/test`
(pinned to the browser build the cloud sessions have), `@types/node` (the
Node 22 the site runs on), `better-sqlite3` (Docus wants 12.x) and
TypeScript 5. After a dependency update, `yarn test:outline` should pass
unchanged; refresh the snapshot on `main` first (`yarn test:build && yarn
test:outline -u`) so it only shows what the update changed.
