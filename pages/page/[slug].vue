<template>
  <div>
    <Loading v-if="pending" />
    <div v-else>
      <Head>
        <Title>{{ response.page.title }}</Title>
        <Meta name="description" :content="response.page.summary" />
      </Head>
      <article
        class="w-full prose dark:prose-invert text-xl max-w-none"
        v-html="response.page.content.html"
      ></article>
      <ContentDoc />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const { data: response, pending } = await useAsyncData(route.params.slug, () =>
  GqlPage({ slug: route.params.slug })
);
useHead({
  title: response?.page?.title,
  meta: [{ name: "description", content: response?.page?.summary }],
});
</script>
