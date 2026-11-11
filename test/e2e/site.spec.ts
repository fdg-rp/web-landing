// The site working in a browser: pages load and hydrate without errors,
// navigation moves between pages in the app, and the components that run
// in the browser (leaderboard, streamers ticker) show data.
//
// The contributors and announcements are fetched while the site is built
// and baked into the page, so they are not checked here: the test build
// runs without network access.

import { expect, leaderboard, test } from "./fixtures";

test.describe("home page", () => {
  test("loads in dark mode with the hero", async ({ page, problems }) => {
    await page.goto("/");
    await expect(page.locator("html")).toHaveClass(/dark/);
    await expect(page.locator("h1").first()).toBeVisible();
    await expect(page.locator('a[href="https://rp.fatduckgaming.com"]').first()).toBeVisible();
  });

  test("shows the streamers ticker", async ({ page, problems }) => {
    await page.goto("/");
    await expect(page.locator('a[href^="https://www.twitch.tv/"]').first()).toBeAttached();
  });
});

test.describe("docs", () => {
  test("opens a category from the server docs index", async ({ page, problems }) => {
    await page.goto("/server-docs");
    await page.locator('a[href="/server-docs/getting-started"]').first().click();
    await expect(page).toHaveURL(/\/server-docs\/getting-started/);
    await expect(page.locator("h1").first()).toBeVisible();
  });

  test("moves between pages without a full reload", async ({ page, problems, isMobile }) => {
    test.skip(isMobile, "the side navigation is behind the menu on phones");
    await page.goto("/server-docs/getting-started/installation");
    await expect(page.locator("h1").first()).toContainText("Installation");
    await page.evaluate(() => ((window as any).__marker = "same document"));
    await page.locator('aside a[href="/server-docs/getting-started/how-to-connect"]').first().click();
    await expect(page).toHaveURL(/how-to-connect$/);
    await expect(page.locator("h1").first()).toContainText("Connect");
    expect(await page.evaluate(() => (window as any).__marker)).toBe("same document");
  });

  test("opens a page from the menu on phones", async ({ page, problems, isMobile }) => {
    test.skip(!isMobile, "phones only");
    await page.goto("/server-docs/getting-started/installation");
    await page.getByRole("button", { name: "Menu" }).first().click();
    const menu = page.getByRole("navigation").filter({ has: page.getByRole("button", { name: "Menu" }) });
    await menu.getByRole("button", { name: /Getting Started/ }).click();
    await menu.locator('a[href="/server-docs/getting-started/how-to-connect"]').click();
    await expect(page).toHaveURL(/how-to-connect$/);
    await expect(page.locator("h1").first()).toContainText("Connect");
  });

  test("finds a page with search", async ({ page, problems }) => {
    await page.goto("/server-docs");
    await page.getByRole("button", { name: "Search" }).first().click();
    await page.getByRole("textbox", { name: "Search documentation" }).fill("Installation");
    // Docus's search: the best match is listed first, selected, and opened with Enter.
    const first = page.locator(".search-result").first();
    await expect(first.locator(".search-result-content-head")).toContainText("Installation");
    await expect(first).toHaveClass(/selected/);
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/\/server-docs\/getting-started\/installation$/);
    await expect(page.locator("h1").first()).toContainText("Installation");
  });

  test("shows a 404 page for an unknown URL", async ({ page, problems }) => {
    const response = await page.goto("/server-docs/no-such-page");
    expect(response?.status()).toBe(404);
    await expect(page.locator("body")).toContainText(/not found|404/i);
  });
});

test.describe("racing leaderboard", () => {
  test("lists the racers from the API", async ({ page, problems }) => {
    await page.goto("/racing/leaderboard");
    const rows = page.locator(".leaderboard-table tbody tr");
    await expect(rows).toHaveCount(leaderboard.length);
    await expect(rows.first()).toContainText(leaderboard[0].name);
  });
});

test.describe("layout", () => {
  for (const path of ["/", "/server-docs", "/server-docs/getting-started/installation", "/news/home"]) {
    test(`${path} fits the screen width`, async ({ page, problems }) => {
      await page.goto(path);
      await page.waitForLoadState("networkidle");
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow).toBeLessThanOrEqual(1);
    });
  }
});
