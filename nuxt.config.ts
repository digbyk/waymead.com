import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/algolia",
    "nuxt-graphql-client",
    "@unocss/nuxt",
    "@nuxt/content",
    "@nuxtjs/supabase",
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
      fileName: "android-chrome-512x512.png",
    },
    meta: {
      title: "waymead",
      author: "digby",
    },
    manifest: {
      lang: "en",
      name: "waymead",
      short_name: "waymead",
      display: "standalone",
      theme_color: "#F11010",
      icons: [
        {
          src: "manifest-icon-192.maskable.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "manifest-icon-192.maskable.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "manifest-icon-512.maskable.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "manifest-icon-512.maskable.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    workbox: {
      dev: true, // or use a global variable to track the current NODE_ENV, etc to determine dev mode
    },
  },
});
