<template>
  <NuxtLayout name="default">
    <template #header> Some header template content. </template>
    <template #footer> Some footer template content. </template>
    <h1>The heading</h1>
    The rest of the page. Variable {{ $config.myPublicVariable }}
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
  title: "Index Page",
});
</script>
