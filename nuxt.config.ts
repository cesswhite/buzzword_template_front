// https://nuxt.com/docs/api/configuration/nuxt-config
import { quasar_config } from "./quasar.config"
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "nuxt-quasar-ui",
    '@pinia/nuxt',
    '@vueuse/nuxt',
    "@nuxtjs/tailwindcss",
    "@nuxt/image"
  ],
  quasar: quasar_config,
  pinia: {
    storesDirs: ['./stores/**'],
  },
  tailwindcss: {
    configPath: 'tailwind.config.ts',
  }
})