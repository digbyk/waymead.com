import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  publicRuntimeConfig: {
    graphcmsEndpoint: process.env.GRAPHCMS_ENDPOINT,
    graphcmsApiKey: process.env.GRAPHCMS_API_KEY,
  },
  privateRuntimeConfig: {
    myPrivateToken: process.env.PRIVATE_TOKEN,
  },
  modules: ["@nuxtjs/pwa"],
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
      { rel: "icon", type: "image/x-icon", href: "/icons/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto:wght@100;300;400;700&display=swap",
      },
    ],
  },
  pwa: {
    meta: {
      title: "waymead",
      author: "digby",
    },
    manifest: {
      name: "waymead",
      short_name: "waymead",
      lang: "en",
    },
  },
});
