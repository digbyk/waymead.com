<template>
  <div
    class="flex flex-col h-full w-full font-sans bg-stone-400 dark:bg-gradient-to-br dark:from-stone-900 dark:to-stone-800 text-stone-700 dark:text-stone-300"
  >
    <main
      class="container flex-0 m-auto flex flex-grow justify-center items-center"
    >
      <div class="mx-auto text-8xl font-600 bg-clip-text">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
import Navbar from "~~/components/layout/navbar.vue";
useHead({
  titleTemplate: "waymead - %s",
  htmlAttrs: {
    lang: "en",
  },
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "waymead" }],
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
