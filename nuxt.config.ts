export default defineNuxtConfig({
  modules: ["@posthog/nuxt"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  sourcemap: { client: true },
  nitro: {
    rollupConfig: {
      output: {
        sourcemapExcludeSources: false,
      },
    },
  },
  posthog: {
    host: "http://localhost:8010",
    publicApiKey: "phc_VXlGk6yOu3agIn0h7lTmSOECAGWCtJonUJDAN4CexlJ",
    nuxt: {
      exceptionAutoCaptureEnabled: true,
    },
    nitro: {
      exceptionAutoCaptureEnabled: true,
    },
    sourceMaps: {
      enabled: true,
      version: "V1",
      envId: "2",
      project: "i-love-nuxt-1",
      privateApiKey: "phx_YZZHl8xzLkCWHSpVahmkggLGaS6gmSxCNmH26N0RUGZnqAs",
    },
  },
});
