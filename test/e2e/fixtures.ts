// A `page` that keeps the site offline and records what went wrong on it.
//
// - The site's own APIs get fixed answers, so pages render the same data
//   every run.
// - Every other host is blocked: Twitch images, YouTube thumbnails and
//   analytics are not what these tests check, and a test must not depend
//   on them. (Fonts and icons are bundled into the build.)
// - Console errors, Vue warnings (hydration mismatches show up here first
//   after an upgrade) and uncaught exceptions are collected in `problems`,
//   which is asserted empty when every test ends (an automatic fixture).

import { test as base, expect, type Page } from "@playwright/test";

export const leaderboard = [
  { name: "Test Driver One", races: 12, wins: 5, placements: 9, mmr: 1450 },
  { name: "Test Driver Two", races: 8, wins: 1, placements: 4, mmr: 1120 },
];

/** Answers the leaderboard API with a server error (an outage). */
export async function leaderboardDown(page: Page) {
  await page.route("https://api.fatduckgaming.com/support/racing/leaderboard", (route) =>
    route.fulfill({ status: 523, body: "" }),
  );
}

async function offline(page: Page, origin: string) {
  await page.route("**/*", (route) => {
    const url = new URL(route.request().url());
    if (url.origin === origin) return route.continue();
    if (url.hostname === "api.fatduckgaming.com" && url.pathname.includes("leaderboard")) {
      return route.fulfill({ json: leaderboard });
    }
    if (url.hostname === "api.fatduckgaming.com" && url.pathname === "/announcements") {
      return route.fulfill({ json: [] });
    }
    return route.abort("blockedbyclient");
  });
}

/** Messages that come from the hosts the tests block on purpose. */
function isFromBlockedHost(text: string, origin: string): boolean {
  return (
    /ERR_BLOCKED_BY_CLIENT|Failed to load resource/.test(text) ||
    (/https?:\/\//.test(text) && !text.includes(origin) && /fetch|load|network/i.test(text))
  );
}

/**
 * Problems the site has today, accepted on one page so the tests stay green
 * and still catch anything new. Remove an entry when its cause is fixed (the
 * test then makes sure it stays fixed).
 */
const KNOWN_PROBLEMS: { path: string; problem: string; why: string }[] = [];

export const test = base.extend<{ problems: string[] }>({
  // Automatic: every test gets it, whether or not it asks for `problems`.
  problems: [async ({ page, baseURL }, use) => {
    const origin = new URL(baseURL!).origin;
    const problems: string[] = [];
    page.on("pageerror", (error) => problems.push(`uncaught: ${error.message}`));
    page.on("console", (message) => {
      const text = message.text();
      const kind = message.type();
      if (kind === "error" && !isFromBlockedHost(text, origin)) problems.push(`console.error: ${text}`);
      if (kind === "warning" && /\[Vue warn\]|[Hh]ydration/.test(text)) problems.push(`warning: ${text}`);
    });
    await offline(page, origin);
    await use(problems);
    const path = new URL(page.url()).pathname;
    const unexpected = problems.filter(
      (problem) => !KNOWN_PROBLEMS.some((known) => known.path === path && known.problem === problem),
    );
    expect(unexpected, "errors on the page").toEqual([]);
  }, { auto: true }],
});

export { expect };
