<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: "%s | Waymead",
  htmlAttrs: {
    lang: "en",
  },
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "waymead.com" }],
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
