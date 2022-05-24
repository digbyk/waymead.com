<template>
  <NuxtLayout name="default">
    <h1>{{ page.title }}</h1>
    <div v-html="page.content.html"></div>
  </NuxtLayout>
</template>

<script setup>
const { $cmsClient } = useNuxtApp();
const page = await $cmsClient.getPageBySlug("home");
definePageMeta({
  layout: false,
  title: "Index Page",
});
</script>
