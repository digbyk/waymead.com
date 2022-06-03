<template>
  <article class="w-full prose-lg" v-html="page.content.html"></article>
</template>

<script setup>
const route = useRoute();
const { $cmsClient } = useNuxtApp();
const page = await $cmsClient.getPageBySlug("home");

useHead({
  title: page.title,
  meta: [{ name: "description", content: page.summary }],
});
</script>
