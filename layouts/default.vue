<template>
  <div
    class="flex flex-col h-screen w-screen font-sans text-light dark:prose-invert"
  >
    <Head>
      <Title>Title</Title>
      <Meta name="description" content="Description" />
      <Style type="text/css" children="body { background-color: green; }" />
    </Head>
    <header class="flex-0 p4 h4">
      <slot name="header"> Header </slot>
    </header>
    <main class="flex-grow p4 items-start">
      <slot />
    </main>
    <footer class="flex-0 p4 h10">
      <slot name="footer"> Footer </slot>
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
:root {
  --primary: #f00;
}
body {
  margin: 0;
  height: 100vh;
  background: rgb(6, 0, 106);
  background: linear-gradient(
    0deg,
    rgba(6, 0, 106, 1) 0%,
    rgba(8, 50, 148, 1) 69%,
    rgba(2, 57, 149, 1) 100%
  );
}
div#__nuxt,
#__layout,
#__layout > div,
#app {
  min-height: 100vh;
}
</style>
