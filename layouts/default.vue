<template>
  <div
    class="flex flex-col h-full w-full font-sans bg-stone-300 dark:bg-gradient-to-br dark:from-sky-900 dark:to-sky-600 text-dark-300 dark:text-stone-300"
  >
    <Head>
      <Title>waymead.com</Title>
      <Meta name="description" content="Description" />
    </Head>
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
  bodyAttrs: {
    class: "dark",
  },
});
definePageMeta({
  layout: false,
  title: "Some Page",
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap");
html {
  min-height: 100%;
}
body {
  min-height: 100%;
}
</style>
