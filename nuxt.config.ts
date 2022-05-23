import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  buildModules: ["nuxt-windicss", "@nuxtjs/google-fonts"],
  publicRuntimeConfig: {
    graphcmsEndpoint: process.env.GRAPHCMS_ENDPOINT,
    graphcmsApiKey: process.env.GRAPHCMS_API_KEY,
  },
  privateRuntimeConfig: {
    myPrivateToken: process.env.PRIVATE_TOKEN,
  },
  head: {
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto:wght@100;300;400;700&display=swap",
      },
    ],
  },
  pwa: {
    manifest: {
      name: "waymead.com",
      lang: "en",
      useWebmanifestExtension: false,
    },
  },
});
