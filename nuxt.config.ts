// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@ablaszkiewicz/posthog-nuxt"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  sourcemap: { client: "hidden" },
  posthog: {
    host: "http://localhost:8010",
    publicApiKey: "phc_VXlGk6yOu3agIn0h7lTmSOECAGWCtJonUJDAN4CexlJ",
    exceptionAutoCaptureEnabled: true,
    sourceMaps: {
      enabled: true,
      envId: "2",
      privateApiKey: "phx_YZZHl8xzLkCWHSpVahmkggLGaS6gmSxCNmH26N0RUGZnqAs",
    },
  },
});
