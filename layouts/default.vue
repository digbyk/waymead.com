<template>
  <div
    class="flex flex-col h-full w-full font-sans bg-stone-300 dark:bg-gradient-to-br dark:from-sky-900 dark:to-sky-600 text-dark-300 dark:text-stone-300"
  >
    <header class="container flex-0 m-auto flex"><Header /></header>
    <main class="container flex-0 m-auto flex flex-grow p-4">
      <div class="mx-auto">
        <slot />
      </div>
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
  title: "Some Page",
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap");
html,
body,
#__nuxt {
  height: 100%;
}
</style>
