// Shared knowledge about the site for the tests: which pages the content
// folder should produce, and where the generated build lives.
//
// The page list is worked out from `content/` on its own, not from anything
// the build wrote, so a dependency bump that drops or renames pages fails
// the tests instead of quietly agreeing with itself.

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";
import { parse, type HTMLElement } from "node-html-parser";

export const ROOT = resolve(__dirname, "../..");
export const CONTENT_DIR = join(ROOT, "content");
export const BUILD_DIR = join(ROOT, "built/public");
export const SITE_URL = "https://fatduckgaming.com";

export interface ContentPage {
  /** Path of the Markdown file, relative to the repo root. */
  file: string;
  /** The URL path the page is served at, e.g. `/server-docs/rules`. */
  route: string;
  /** Front-matter `title`, when the file has one. */
  title?: string;
  /** Front-matter `description`, when the file has one. */
  description?: string;
}

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

/**
 * A file or folder name as Nuxt Content puts it in the URL: the ordering
 * prefix dropped (`0.server-docs` → `server-docs`), lower-cased, with spaces
 * turned into hyphens (`FDG Newsletter - Winter Edition` →
 * `fdg-newsletter-winter-edition`).
 */
function slug(segment: string): string {
  return segment.replace(/^\d+\./, "").toLowerCase().replace(/[\s-]+/g, "-");
}

/** Nuxt Content's route for a content file. */
export function routeFor(relativeFile: string): string {
  const segments = relativeFile.replace(/\.md$/, "").split(sep).map(slug);
  if (segments.at(-1) === "index") segments.pop();
  return "/" + segments.join("/");
}

function frontMatter(source: string): Record<string, string> {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const fields: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^(\w+):\s*(.*)$/);
    if (field) fields[field[1]] = field[2].trim().replace(/^(["'])(.*)\1$/, "$2");
  }
  return fields;
}

/** Every page the content folder should produce (partials `_*` excluded). */
export function contentPages(): ContentPage[] {
  return walk(CONTENT_DIR)
    .filter((path) => path.endsWith(".md"))
    .map((path) => relative(CONTENT_DIR, path))
    .filter((file) => !file.split(sep).some((segment) => segment.startsWith("_")))
    .map((file) => {
      const meta = frontMatter(readFileSync(join(CONTENT_DIR, file), "utf8"));
      return {
        file: join("content", file),
        route: routeFor(file),
        title: meta.title || undefined,
        description: meta.description || undefined,
      };
    })
    .sort((a, b) => a.route.localeCompare(b.route));
}

/** The file the static host serves for a URL path, or undefined (a 404). */
export function builtFileFor(urlPath: string): string | undefined {
  const clean = decodeURIComponent(urlPath.split(/[?#]/)[0]);
  const base = join(BUILD_DIR, clean);
  for (const candidate of [base, join(base, "index.html"), `${base}.html`]) {
    if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
  }
  return undefined;
}

const htmlCache = new Map<string, HTMLElement>();

/** The parsed HTML the build wrote for a route. */
export function builtPage(route: string): HTMLElement {
  const file = builtFileFor(route);
  if (!file || !file.endsWith(".html")) throw new Error(`No HTML built for ${route}`);
  let dom = htmlCache.get(file);
  if (!dom) {
    dom = parse(readFileSync(file, "utf8"));
    htmlCache.set(file, dom);
  }
  return dom;
}

/** Every HTML file in the build, relative to the build folder. */
export function builtHtmlFiles(): string[] {
  return walk(BUILD_DIR)
    .filter((path) => path.endsWith(".html"))
    .map((path) => "/" + relative(BUILD_DIR, path).split(sep).join("/"));
}

export function assertBuildExists(): void {
  if (!existsSync(join(BUILD_DIR, "index.html"))) {
    throw new Error(
      "No build found in built/public. Run `yarn test:build` first " +
        "(or `yarn test:all`, which builds and then runs every test).",
    );
  }
}
