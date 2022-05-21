import { defineNuxtConfig } from "nuxt";
import Unocss from "unocss/vite";
import { presetAttributify, presetUno } from "unocss";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt"],
});
