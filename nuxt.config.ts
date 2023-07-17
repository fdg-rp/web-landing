const path = require("path");

export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: "@nuxt-themes/docus",
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  modules: [
    // https://github.com/nuxt-modules/plausible
    "@nuxtjs/plausible",
    // https://github.com/nuxt/devtools
    "@nuxt/devtools",
    // https://nuxt-seo.netlify.app/og-image
    "nuxt-og-image",
  ],
  nitro: {
    output: {
      publicDir: path.join(__dirname, "built/public"),
    },
    prerender: {
      routes: ["/sitemap.xml", "/alldocs.json"],
    },
  },
  colorMode: {
    preference: "dark",
    fallback: "dark",
  },
  ssr: true,
  site: {
    url: "https://example.com",
  },
});
