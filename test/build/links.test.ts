// Every link and asset a page points at on this site exists in the build.
// Catches broken doc links, renamed pages, and a build that references
// scripts or styles it did not write.

import { beforeAll, describe, expect, it } from "vitest";
import { assertBuildExists, builtFileFor, builtHtmlFiles, builtPage, SITE_URL } from "../support/site";

beforeAll(assertBuildExists);

/** Same-site URL paths referenced by a page (links, scripts, styles, images). */
function sameSiteRefs(file: string): string[] {
  const html = builtPage(file);
  const refs = html
    .querySelectorAll("a[href], link[href], script[src], img[src], source[src]")
    .map((el) => el.getAttribute("href") ?? el.getAttribute("src") ?? "");
  return refs
    .map((ref) => (ref.startsWith(SITE_URL) ? ref.slice(SITE_URL.length) || "/" : ref))
    .filter((ref) => ref.startsWith("/") && !ref.startsWith("//"))
    .map((ref) => ref.split(/[?#]/)[0] || "/");
}

const files = builtHtmlFiles().filter((f) => !f.startsWith("/__og-image__/"));

describe("same-site links and assets", () => {
  it("finds the built pages", () => {
    expect(files.length).toBeGreaterThan(50);
  });

  it.each(files)("%s links only to files that exist", (file) => {
    const broken = [...new Set(sameSiteRefs(file))].filter((ref) => !builtFileFor(ref));
    expect(broken).toEqual([]);
  });
});
