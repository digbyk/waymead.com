<template>
  <NuxtLayout name="default">
    <template #header> Some header template content. </template>
    <template #footer> Some footer template content. </template>
    <h1>The heading</h1>
    <p>The rest of the page.</p>
    <p>Endpoint {{ $config.graphcmsEndpoint }}.</p>
    <p>API key {{ $config.graphcmsApiKey }}.</p>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
  title: "Index Page",
});
</script>
