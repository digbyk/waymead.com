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
  googleFonts: {
    preload: true,
    families: {
      Roboto: [100, 300, 500],
      Lato: [100, 300],
    },
  },
  head: {
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      },
    ],
  },
});
