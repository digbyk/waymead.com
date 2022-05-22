<template>
  <div
    class="flex flex-col h-screen w-screen font-sans bg-stone-300 dark:bg-gradient-to-b dark:from-sky-900 dark:to-sky-700 text-dark-300 dark:text-stone-200"
  >
    <Head>
      <Title>waymead.com</Title>
      <Meta name="description" content="Description" />
    </Head>
    <header class="container flex-0 p4 h4 m-auto">
      <slot name="header">
        <nav class="flex flex-row justify-between mx-auto p-4">
          <ul class="flex flex-row flex-grow">
            <li>Logo</li>
          </ul>
          <ul class="flex flex-row">
            <li class="ml-4">hello</li>
            <li class="ml-4">hello</li>
            <li class="ml-4">hello</li>
          </ul>
        </nav>
      </slot>
    </header>
    <main class="container flex-0 p4 h4 m-auto flex-grow items-start">
      <div class="mx-auto p-4">
        <slot />
      </div>
    </main>
    <footer class="flex-0 p4 h10">
      <div class="container mx-auto p-4">
        <slot name="footer"> Footer </slot>
      </div>
    </footer>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "My App - %s",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
});
definePageMeta({
  layout: false,
  title: "Some Page",
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap");
</style>
