<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useFavicon } from "@vueuse/core";
const icon = useFavicon("favicon-196.png");
useHead({
  titleTemplate: "%s | Waymead",
  htmlAttrs: {
    lang: "en",
  },
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "waymead.com" }],
  link: [{ rel: "icon", type: "image/ico", href: "/favicon-196.png" }],
});
</script>

<style>
@import "@unocss/reset/tailwind.css";
html,
body,
#__nuxt {
  height: 100%;
}
</style>
