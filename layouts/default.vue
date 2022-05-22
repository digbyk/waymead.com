<template>
  <div
    class="flex flex-col h-screen w-screen font-sans bg-stone-300 dark:bg-stone-800 text-dark-300 dark:text-stone-200"
  >
    <Head>
      <Title>Title</Title>
      <Meta name="description" content="Description" />
    </Head>
    <header class="flex-0 p4 h4 m-auto">
      <div class="container mx-auto p-4">
        <slot name="header"> Header </slot>
      </div>
    </header>
    <main class="flex-grow p4 items-start">
      <div class="container mx-auto p-4">
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

<style></style>
