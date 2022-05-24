<template>
  <NuxtLayout name="default">
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
