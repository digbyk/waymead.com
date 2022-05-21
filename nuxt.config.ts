import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt"],
  publicRuntimeConfig: {
    myPublicVariable: process.env.PUBLIC_VARIABLE,
  },
  privateRuntimeConfig: {
    myPrivateToken: process.env.PRIVATE_TOKEN,
  },
});
