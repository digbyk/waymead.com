<template>
  <NuxtLayout name="default">
    <img src="/logos/waymead.svg" alt="Waymead logo" srcset="" class="p-8" />
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
