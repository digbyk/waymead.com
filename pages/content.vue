<template>
  <div class="container prose text-white">
    <h1>{{ page.title }}</h1>
    <div v-html="page.content.html"></div>
  </div>
</template>

<script setup>
const { $cmsClient } = useNuxtApp();
const page = await $cmsClient.getPageBySlug("home");
definePageMeta({
  layout: "default",
  title: "Content page",
});
</script>
