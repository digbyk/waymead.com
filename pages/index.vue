<template>
  <div>
    <Loading v-if="pending" />
    <div v-else class="">
      <Head>
        <Title>{{ response.page.title }}</Title>
        <Meta name="description" :content="response.page.summary" />
      </Head>

      <article
        class="w-full text-base prose dark:prose-invert text-xl"
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
