// The site's own components (components/content) render into the pages that
// use them. These are written against Docus and Nuxt APIs that change
// between major versions, so they are what an upgrade is most likely to break.

import { beforeAll, describe, expect, it } from "vitest";
import { assertBuildExists, builtPage, contentPages } from "../support/site";

beforeAll(assertBuildExists);

describe("home page", () => {
  it("shows the hero with the Play now link", () => {
    const home = builtPage("/");
    expect(home.querySelector("h1")?.text.trim().length).toBeGreaterThan(0);
    const playNow = home.querySelectorAll('a[href="https://rp.fatduckgaming.com"]');
    expect(playNow.length).toBeGreaterThan(0);
  });

  it("shows the contributors block", () => {
    expect(builtPage("/").querySelector("#contributors")?.text).toContain("FDG");
  });
});

describe("server docs index (ServerDocsCategoryGrid)", () => {
  it("links to every server-docs category", () => {
    const links = new Set(
      builtPage("/server-docs")
        .querySelectorAll("a[href]")
        .map((a) => a.getAttribute("href")),
    );
    const categories = new Set(
      contentPages()
        .map((p) => p.route.split("/"))
        .filter((s) => s[1] === "server-docs" && s.length > 3)
        .map((s) => `/server-docs/${s[2]}`),
    );
    expect(categories.size).toBeGreaterThan(3);
    for (const category of categories) expect(links, category).toContain(category);
  });
});

describe("racing leaderboard (RacingLeaderboard)", () => {
  it("renders the leaderboard table shell", () => {
    const page = builtPage("/racing/leaderboard");
    expect(page.querySelector(".leaderboard-container")).not.toBeNull();
    expect(page.querySelector(".leaderboard-table")).not.toBeNull();
  });
});

describe("Docus layout", () => {
  it("gives a docs page its side navigation and table of contents", () => {
    const page = builtPage("/server-docs/getting-started/installation");
    expect(page.querySelector("aside")).not.toBeNull();
    expect(page.querySelectorAll('a[href="/server-docs/getting-started/how-to-connect"]').length)
      .toBeGreaterThan(0);
  });
});
