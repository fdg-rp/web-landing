// The machine-readable indexes: the sitemap search engines crawl and
// alldocs.json, which the search overlay reads.

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { beforeAll, describe, expect, it } from "vitest";
import { assertBuildExists, BUILD_DIR, builtFileFor, contentPages, SITE_URL } from "../support/site";

const routes = contentPages().map((p) => p.route).sort();

beforeAll(assertBuildExists);

describe("sitemap.xml", () => {
  const read = () => readFileSync(join(BUILD_DIR, "sitemap.xml"), "utf8");
  const locs = () => [...read().matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  it("is a sitemap", () => {
    expect(read()).toMatch(/^<\?xml[^>]*\?>(<\?xml-stylesheet[^>]*\?>)?\s*<urlset /);
  });

  it("lists every page, and only pages", () => {
    const listed = locs().map((loc) => {
      expect(loc.startsWith(SITE_URL)).toBe(true);
      return loc.slice(SITE_URL.length) || "/";
    });
    expect([...listed].sort()).toEqual(routes);
  });

  it("lists no URL that would 404", () => {
    const missing = locs().filter((loc) => !builtFileFor(loc.slice(SITE_URL.length) || "/"));
    expect(missing).toEqual([]);
  });
});

describe("alldocs.json (search index)", () => {
  const docs = () =>
    JSON.parse(readFileSync(join(BUILD_DIR, "alldocs.json"), "utf8")) as {
      path: string;
      title: string;
      description: string;
    }[];

  it("indexes every page", () => {
    expect(docs().map((d) => d.path).sort()).toEqual(routes);
  });

  it("gives each page a title", () => {
    expect(docs().filter((d) => !d.title)).toEqual([]);
  });

  it("uses each page's front-matter title and description", () => {
    const byRoute = new Map(docs().map((d) => [d.path, d]));
    for (const page of contentPages()) {
      const doc = byRoute.get(page.route)!;
      if (page.title) expect(doc.title, page.route).toBe(page.title);
      if (page.description) expect(doc.description, page.route).toBe(page.description);
    }
  });
});
