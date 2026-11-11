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
      routes: ["/sitemap.xml", "/alldocs.json", "/"],
    },
  },
  runtimeConfig: {
    public: {
      // Overridden by NUXT_PUBLIC_OG_SITE_LOGO (the test build uses a local file).
      ogSiteLogo: "https://cdn.fatduckgaming.com/assets/logos/fdg_text.png",
    },
  },
  colorMode: {
    preference: "dark",
    fallback: "dark",
  },
  // ssr: true,
  site: {
    url: "https://fatduckgaming.com",
  },
  // routeRules: {
  //   "/**": { prerender: true },
  // },
});
