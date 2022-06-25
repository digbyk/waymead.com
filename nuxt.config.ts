import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/algolia",
    "nuxt-graphql-client",
    "@unocss/nuxt",
    "@nuxt/content",
    "@nuxtjs/supabase",
    "@formkit/nuxt",
    "@kevinmarrec/nuxt-pwa",
  ],
  buildModules: [],
  build: {},
  runtimeConfig: {
    public: {
      gql: {
        clients: {
          default: {
            host: process.env.GRAPHCMS_ENDPOINT,
            token: process.env.GRAPHCMS_API_KEY,
          },
        },
      },
    },
    myPrivateToken: process.env.PRIVATE_TOKEN,
  },
  algolia: {
    apiKey: process.env.ALGOLIA_API_KEY,
    applicationId: process.env.ALGOLIA_APP_ID,
    recommend: true,
  },
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: false, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [],
  },
  ssr: false,
  pwa: {
    icon: {
      fileName: "logo-512x512.png",
    },
    meta: {
      title: "Waymead",
      author: "digby@digby.net",
      description: "Waymead PWA",
    },
    manifest: {
      lang: "en",
      name: "Waymead",
      short_name: "Waymead",
      orientation: "portrait",
      display: "standalone",
      theme_color: "#376B9C",
      background_color: "#ffffff",
      start_url: "/",
      id: "/",
    },
    workbox: {
      workboxURL:
        "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js",
      enabled: true,
      cleanupOutdatedCaches: true,
      cachingExtensions: "~/helpers/cache/browser.js",
      swURL: "/sw.js",
    },
  },
});
