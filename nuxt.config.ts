const path = require("path");

export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: "@nuxt-themes/docus",
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
      routes: ["/sitemap.xml"],
    },
  },
  runtimeConfig: {},
  ssr: true,
});
