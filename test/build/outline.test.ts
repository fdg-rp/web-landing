// A snapshot of each page's heading outline (h1-h3) and its links into the
// site, run by `yarn test:outline` (not `yarn test`). A dependency update
// should leave it unchanged, so any difference after an upgrade is a
// rendering change to look at before shipping. Content edits change it on
// purpose: refresh it with `yarn test:outline -u` and review the diff.

import { beforeAll, expect, it } from "vitest";
import { assertBuildExists, builtPage, contentPages } from "../support/site";

beforeAll(assertBuildExists);

const clean = (text: string) => text.replace(/\s+/g, " ").trim();

it("keeps every page's outline", () => {
  const outline: Record<string, { headings: string[]; links: string[] }> = {};
  for (const { route } of contentPages()) {
    const page = builtPage(route);
    const body = page.querySelector(".docus-content") ?? page.querySelector("main") ?? page;
    outline[route] = {
      headings: body
        .querySelectorAll("h1, h2, h3")
        .map((h) => `${h.tagName.toLowerCase()} ${clean(h.text)}`)
        .filter((h) => h.length > 3),
      links: [
        ...new Set(
          body
            .querySelectorAll("a[href^='/']")
            .map((a) => a.getAttribute("href")!.split(/[?#]/)[0])
            .filter((href) => !href.startsWith("/_")),
        ),
      ].sort(),
    };
  }
  expect(outline).toMatchSnapshot();
});
