<template>
  <div v-html="page.content.html"></div>
</template>

<script setup>
const { $cmsClient } = useNuxtApp();
const page = await $cmsClient.getPageBySlug("home");
definePageMeta({
  layout: "default",
  title: "Content page",
});
</script>
