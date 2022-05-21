<template>
  <NuxtLayout name="default">
    <template #header> Some header template content. </template>
    <template #footer> Some footer template content. </template>
    <h1>The heading</h1>
    The rest of the page
  </NuxtLayout>
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
});
</script>
