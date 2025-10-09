import * as dupa from "@posthog/nuxt";

export default defineNuxtConfig({
  modules: ["@posthog/nuxt"],
  devtools: { enabled: true },

  sourcemap: { client: true },

  nitro: {
    rollupConfig: {
      output: {
        sourcemapExcludeSources: false,
      },
    },
  },

  posthogConfig: {
    host: "http://localhost:8010",
    publicKey: "phc_VXlGk6yOu3agIn0h7lTmSOECAGWCtJonUJDAN4CexlJ",
    nuxt: {
      exceptionAutoCaptureEnabled: true,
      debug: true,
    },
    nitro: {
      exceptionAutoCaptureEnabled: true,
      debug: true,
    },
    sourcemaps: {
      enabled: true,
      version: "V1",
      envId: "2",
      project: "i-love-nuxt-1",
      personalApiKey: "phx_YZZHl8xzLkCWHSpVahmkggLGaS6gmSxCNmH26N0RUGZnqAs",
    },
  },
});
