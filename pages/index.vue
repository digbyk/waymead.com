<template>
  <div>
    <Loading v-if="pending" />
    <div v-else>
      <Head>
        <Title>{{ response.page.title }}</Title>
        <Meta name="description" :content="response.page.summary" />
      </Head>
      <article
        class="w-full prose-lg"
        v-html="response.page.content.html"
      ></article>
    </div>
  </div>
</template>

<script setup>
const { data: response, pending } = await useAsyncData("home", () =>
  GqlPage({ slug: "home" })
);
</script>
