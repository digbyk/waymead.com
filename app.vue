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
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700&family=Lato:wght@300;400;700&family=Roboto:wght@100;300;400;700&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined");
html,
body,
#__nuxt {
  height: 100%;
}
</style>
