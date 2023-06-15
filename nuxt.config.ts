const path = require("path");

export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: "@nuxt-themes/docus",
  modules: [
    // https://github.com/nuxt-modules/plausible
    "@nuxtjs/plausible",
    // https://github.com/nuxt/devtools
    "@nuxt/devtools"
  ],
  nitro: {
    output: {
      publicDir: path.join(__dirname, "built/public"),
    },
  },
  runtimeConfig: {},
  ssr: true,
  // hooks: {
  //   'vite:extendConfig'(config, {isClient}) {
  //     if (process.env.NODE_ENV !== 'development' && isClient) {
  //       config.build.rollupOptions.output.chunkFileNames = '[name]-[hash].js'
  //       config.build.rollupOptions.output.entryFileNames = '[name]-[hash].js'
  //     }
  //   }
  // }
});
