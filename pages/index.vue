<template>
  <div>
    <div v-if="pending">Loading ...</div>
    <div v-else>
      <Head>
        <Title>{{ page.title }}</Title>
        <Meta name="description" :content="page.summary" />
      </Head>
      <article class="w-full prose-lg" v-html="page.content.html"></article>
    </div>
  </div>
</template>

<script setup>
const { $cmsClient } = useNuxtApp();

const { data: page, pending } = useAsyncData("page", () =>
  $cmsClient.getPageBySlug("home")
);
</script>
