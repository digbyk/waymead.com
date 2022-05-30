<template>
  <article
    class="container prose mx-auto p-4"
    v-html="page.content.html"
  ></article>
</template>

<script setup>
const route = useRoute();
const { $cmsClient } = useNuxtApp();
const page = await $cmsClient.getPageBySlug("home");

definePageMeta({
  layout: "default",
});
useHead({
  title: page.title,
  meta: [{ name: "description", content: page.summary }],
});
</script>
