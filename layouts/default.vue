<template>
  <div
    class="flex flex-col h-full w-full font-sans bg-stone-400 dark:bg-gradient-to-br dark:from-stone-900 dark:to-stone-800 text-stone-700 dark:text-stone-300"
  >
    <header class="container flex-0 m-auto flex"><Header /></header>
    <main class="container flex-0 m-auto flex flex-grow p-4">
      <NuxtPage />
    </main>
    <footer><Footer /></footer>
  </div>
</template>

<script setup>
import Header from "@/components/layout/header.vue";
import Footer from "@/components/layout/footer.vue";
useHead({
  titleTemplate: "waymead - %s",
  htmlAttrs: {
    lang: "en",
  },
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "waymead.com" }],
});
definePageMeta({
  layout: false,
  title: "This is the default page title",
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700&family=Lato:wght@300;400;700&family=Roboto:wght@100;300;400;700&display=swap");
html,
body,
#__nuxt {
  height: 100%;
}
</style>
