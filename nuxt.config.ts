import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  publicRuntimeConfig: {
    graphcmsEndpoint: process.env.GRAPHCMS_ENDPOINT,
    graphcmsApiKey: process.env.GRAPHCMS_API_KEY,
  },
  privateRuntimeConfig: {
    myPrivateToken: process.env.PRIVATE_TOKEN,
  },
  modules: [],
  buildModules: ["nuxt-windicss", "@nuxtjs/google-fonts"],
  build: {},
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
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon-196.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto:wght@100;300;400;700&display=swap",
      },
    ],
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
