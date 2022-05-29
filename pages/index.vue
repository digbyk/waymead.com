<template>
  <div class="container">
    <div v-html="page.content.html"></div>
  </div>
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
