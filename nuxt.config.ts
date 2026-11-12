// The FDG site: a Docus layer (https://docus.dev) over the Markdown in
// content/, generated as static files into built/public.
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";

/** The first page in a content folder, in the order the menu lists it. */
function firstPage(dir: string): string | undefined {
  const entries = readdirSync(dir, { withFileTypes: true })
    .filter((e) => !e.name.startsWith(".") && !e.name.startsWith("_"))
    .sort((a, b) => a.name.localeCompare(b.name, "en", { numeric: true }));
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isFile() && entry.name.endsWith(".md")) return urlFor(path.replace(/\.md$/, ""));
    if (entry.isDirectory()) {
      const page = firstPage(path);
      if (page) return page;
    }
  }
}

/** The URL Nuxt Content gives a content path (order prefixes dropped). */
function urlFor(path: string): string {
  const segments = relative("content", path).split(/[\\/]/).filter(Boolean);
  return "/" + segments.map((s) => s.replace(/^\d+\./, "").toLowerCase().replace(/[\s-]+/g, "-")).join("/");
}

/**
 * A folder's URL opens a page, as it did in Docus 1: the one its
 * `.navigation.yml` names in `navigation.redirect`, or else its first page.
 * (The server docs cards and older links point at folders, e.g.
 * /server-docs/getting-started.)
 */
function folderRedirects(dir = "content"): Record<string, { redirect: string }> {
  const rules: Record<string, { redirect: string }> = {};
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const path = join(dir, entry.name);
    const settings = join(path, ".navigation.yml");
    const named = existsSync(settings)
      ? readFileSync(settings, "utf8").match(/^navigation\.redirect:\s*(\S+)/m)?.[1]
      : undefined;
    // A folder with its own index page (e.g. /server-docs) shows that page.
    const to = existsSync(join(path, "index.md")) ? undefined : (named ?? firstPage(path));
    if (to && to !== urlFor(path)) rules[urlFor(path)] = { redirect: to };
    Object.assign(rules, folderRedirects(path));
  }
  return rules;
}

/**
 * Icons named in content/ (front matter, `.navigation.yml`, `:icon{name=}`)
 * and the social links, which the icon bundler's scan of the code can't see.
 */
function contentIcons(dir = "content"): string[] {
  const icons = new Set(["simple-icons:discord", "simple-icons:tiktok", "simple-icons:github"]);
  const walk = (d: string) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const path = join(d, e.name);
      if (e.isDirectory()) walk(path);
      else if (/\.(md|ya?ml)$/.test(e.name)) {
        for (const m of readFileSync(path, "utf8").matchAll(/(?:icon|name)\s*[=:]\s*["']?([a-z0-9-]+:[a-z0-9-]+)/g)) icons.add(m[1]!);
      }
    }
  };
  walk(dir);
  return [...icons].sort();
}

/** Every page in content/, so each is generated even if nothing links to it. */
function contentRoutes(dir = "content"): string[] {
  return readdirSync(dir, { withFileTypes: true })
    .filter((e) => !e.name.startsWith(".") && !e.name.startsWith("_"))
    .flatMap((e) => {
      const path = join(dir, e.name);
      if (e.isDirectory()) return contentRoutes(path);
      if (!e.name.endsWith(".md")) return [];
      return [urlFor(path.replace(/\.md$/, "").replace(/(^|[\\/])(\d+\.)?index$/, ""))];
    });
}

export default defineNuxtConfig({
  extends: ["docus"],

  modules: [
    // https://github.com/nuxt-modules/plausible
    "@nuxtjs/plausible",
    // `yarn lint` (eslint.config.mjs)
    "@nuxt/eslint",
  ],

  site: {
    url: "https://fatduckgaming.com",
    name: "Fat Duck Gaming",
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },

  // Inter is bundled from npm (@fontsource-variable/inter, imported in
  // app/app.css), and no font is fetched from a font service, so the build
  // gives the same result anywhere.
  fonts: {
    providers: { google: false, googleicons: false, bunny: false, fontshare: false, fontsource: false, adobe: false, npm: false },
  },

  // Icons come from the @iconify-json/* packages: each icon content uses is
  // bundled at build time, with no call to the Iconify API, in the build or
  // in the browser.
  icon: {
    provider: "none",
    clientBundle: { scan: true, icons: contentIcons() },
  },

  // Dark by default; the header toggle still switches to light.
  colorMode: {
    preference: "dark",
    fallback: "dark",
  },

  // `::card` and `::callout` in content are this site's components (from
  // Docus 1), not Nuxt UI's prose components of the same name.
  mdc: {
    components: {
      map: { card: "FdgCard", callout: "FdgCallout" },
    },
  },

  // Docus offers an MCP server for AI tools; this site doesn't need one.
  mcp: { enabled: false },

  routeRules: folderRedirects(),

  nitro: {
    output: {
      publicDir: "built/public",
    },
    prerender: {
      // Each page, and its Markdown version for AI tools (/raw/<page>.md).
      routes: [
        "/",
        "/alldocs.json",
        ...contentRoutes(),
        ...contentRoutes().map((r) => (r === "/" ? "/raw/index.md" : `/raw${r}.md`)),
      ],
      // Pages as <page>/index.html, as the server has always been given them.
      autoSubfolderIndex: true,
      // A page that fails to prerender fails the build.
      failOnError: true,
    },
  },

  hooks: {
    // Docus shows each docs page's title in its page header, and most pages
    // also start with `# <title>`: drop that first heading when it repeats
    // the title, so the page doesn't show it twice. Other headings stay.
    "content:file:afterParse"(ctx) {
      const page = ctx.content as { title?: string; description?: string; body?: { type?: string; value?: unknown[] } };
      // With no `description` in front matter, Content uses the first
      // paragraph, which the page header would then show above that same
      // paragraph. Keep it for search engines (seo.description, already set)
      // but not in the header.
      const frontMatter = String(ctx.file.body ?? "").match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";
      if (!/^description:/m.test(frontMatter)) page.description = "";

      const nodes = page.body?.type === "minimark" ? page.body.value : undefined;
      const first = nodes?.[0];
      if (!page.title || !Array.isArray(first) || first[0] !== "h1") return;
      const text = (node: unknown): string =>
        typeof node === "string" ? node : Array.isArray(node) ? node.slice(2).map(text).join("") : "";
      const normal = (value: string) => value.replace(/\s+/g, " ").trim().toLowerCase();
      if (normal(text(first)) !== normal(page.title)) return;
      nodes!.shift();
      // A rule straight under that title would sit under the header's own.
      if (Array.isArray(nodes![0]) && nodes![0][0] === "hr") nodes!.shift();
    },

    // Docus links each page's Markdown version from the page head as
    // `<page>.md`, which its server answers from /raw/<page>.md. A static
    // host has no such rewrite, so the files are copied to where the link
    // points once everything is generated.
    "nitro:init"(nitro) {
      nitro.hooks.hook("prerender:done", () => {
        const out = nitro.options.output.publicDir;
        const raw = join(out, "raw");
        if (!existsSync(raw)) return;
        const copy = (dir: string) => {
          for (const entry of readdirSync(dir, { withFileTypes: true })) {
            const path = join(dir, entry.name);
            if (entry.isDirectory()) copy(path);
            else if (entry.name.endsWith(".md") && path !== join(raw, "index.md")) {
              const target = join(out, relative(raw, path));
              mkdirSync(dirname(target), { recursive: true });
              copyFileSync(path, target);
            }
          }
        };
        copy(raw);
      });
    },
  },

  compatibilityDate: "2026-10-01",
});
