<template>
  <div class="container">
    <h1 class="text-2xl">{{ page.title }}</h1>
    <div v-html="page.content.html"></div>
  </div>
</template>

<script setup>
const route = useRoute();
const { $cmsClient } = useNuxtApp();
const page = await $cmsClient.getPageBySlug(route.params.slug);
definePageMeta({
  layout: "default",
  title: "Content page",
});
</script>
