<template>
  <NuxtLayout name="default">
    <h1>{{ page.title }}</h1>
    <div v-html="page.content.html"></div>
  </NuxtLayout>
</template>

<script setup>
import { gql } from "graphql-request";
const { $graphcmsClient } = useNuxtApp();
console.log($graphcmsClient);
const result = await $graphcmsClient.request(
  gql`
    {
      page(where: { slug: "home" }) {
        title
        content {
          html
        }
      }
    }
  `
);
const page = result.page;
definePageMeta({
  layout: false,
  title: "Index Page",
});
</script>
