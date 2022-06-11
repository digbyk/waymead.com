import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      graphcmsEndpoint: process.env.GRAPHCMS_ENDPOINT,
      graphcmsApiKey: process.env.GRAPHCMS_API_KEY,
    },
    myPrivateToken: process.env.PRIVATE_TOKEN,
  },

  modules: ["@vueuse/nuxt", "@nuxtjs/algolia"],
  buildModules: ["nuxt-windicss"],
  build: {},
  algolia: {
    apiKey: process.env.ALGOLIA_API_KEY,
    applicationId: process.env.ALGOLIA_APP_ID,
    recommend: true,
  },
  head: {
    htmlAttrs: {
      lang: "en",
    },
    title: "waymead",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "waymead.com",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon-196x196.png" }],
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
