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
  ],
  nitro: {
    output: {
      publicDir: path.join(__dirname, "built/public"),
    },
    prerender: {
      routes: ["/sitemap.xml", "/alldocs.json"],
      ignore: ["/api"],
    },
  },
  colorMode: {
    preference: "dark",
    fallback: "dark",
  },
  ssr: true,
});
