<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import "@formkit/themes/genesis";

useHead({
  titleTemplate: "%s | Waymead",
  htmlAttrs: {
    lang: "en",
  },
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "waymead.com" }],
  link: [{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
});
</script>

<style>
@import "@unocss/reset/tailwind.css";

html,
body,
#__nuxt {
  height: 100%;
}
html {
  scroll-behavior: smooth;
}
body::-webkit-scrollbar {
  width: 1em;
}

body::-webkit-scrollbar-track {
  background: #666;
}

body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 0px solid slategrey;
}
</style>
