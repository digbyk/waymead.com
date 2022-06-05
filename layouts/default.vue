<template>
  <div
    class="flex flex-col min-h-full w-full font-sans bg-light-100 dark:bg-gradient-to-br dark:from-stone-900 dark:to-stone-700 text-stone-700 dark:text-stone-300"
  >
    <header class="container m-auto p-4"><Header /></header>
    <main class="container flex-auto m-auto p-4">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import Header from "@/components/layout/_header.vue";
useHead({
  titleTemplate: "Waymead - %s",
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
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
html,
body,
#__nuxt {
  height: 100%;
}
</style>
