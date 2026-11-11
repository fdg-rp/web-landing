# FDG Docs

![FDG Logo Text](https://cdn.fatduckgaming.com/assets/logos/fdg_text.png)

**https://fatduckgaming.com**

Welcome to the Fat Duck Gaming (FDG) Documentation Site repository! This repository serves as the central hub for the development and maintenance of the FDG documentation site, an essential resource for our FiveM roleplay server.

**Join our community! https://discord.gg/fatduckgaming**

## About FDG
Fat Duck Gaming, commonly referred to as FDG, is a thriving community-driven Australian-themed FiveM roleplay server. We strive to create an immersive and enjoyable gaming experience for our players, and this documentation site plays a crucial role in achieving that goal. By providing comprehensive information and step-by-step guides, we aim to assist both newcomers and seasoned players in navigating and making the most of our server's features.

## Documentation Site
The [FDG Documentation Site](https://fatduckgaming.com) is an open-source project aimed at providing a comprehensive guide for our FiveM roleplay server. It contains detailed instructions on various aspects of the server, including:

- How to install FiveM.
- How to connect to FDG.
- Overview of server features and mechanics.
- Roleplay guidelines and rules.
- Community resources and helpful tips.

## Contributing
The documentation site is open-source! We highly encourage FDG community members to contribute to the development of the site. Your expertise and knowledge will be invaluable in creating an exceptional resource for our community.

### To contribute to the documentation site, please follow these steps:

1. Fork the repository to your GitHub account.
2. Create a new branch for your changes: `git checkout -b your-branch-name`.
3. Make the necessary updates, additions, or improvements to the documentation files.
4. Commit your changes with descriptive commit messages: `git commit -m "Add feature X"`.
5. Push your changes to your forked repository: `git push origin your-branch-name`.
6. Submit a pull request from your forked repository to the main FDG Documentation Site repository.

Every pull request is built and tested automatically (the **Test** check). If it fails on a broken link, check the links in the page you changed.

## Testing

The tests check the generated site, so build it first. Nothing in them needs network access.

```bash
yarn install
yarn test:build     # generate the site into built/public (about 90 seconds)
yarn test           # every page built, sitemap, search index, links
yarn test:outline   # each page's headings and links, against a snapshot
yarn test:e2e       # the site in a browser, desktop and phone
yarn test:all       # all of the above
```

- `test/build/` checks the files in `built/public`. `yarn test` also runs in the deploy, before the live site is replaced.
- `test/build/outline.test.ts` snapshots every page's headings and links. Editing content changes it on purpose: run `yarn test:outline -u` and review the diff. A dependency update should leave it unchanged.
- `test/e2e/` runs the site in Chromium with Playwright: pages load without errors, navigation and search work, and pages fit the screen. The site's APIs are answered with fixtures (`test/e2e/fixtures.ts`). The first time, run `yarn playwright install chromium`.
