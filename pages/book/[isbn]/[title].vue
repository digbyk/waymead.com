<template>
  <div class="w-full">
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-1/2 h-60 md:h-80">
        <bgimage :src="product.thumbnail" :alt="product.title" />
      </div>
      <div class="w-full md:w-1/2 p-2">
        <h1 class="text-3xl">{{ product.title }}</h1>
        <h2>{{ product.isbn }}</h2>

        <span class="">Levels</span>
        <ul class="flex flex-row flex-wrap list-none m-1 p0">
          <li
            v-for="(level, index) in product.levels"
            class="m-1 p-1 py-0 rounded bg-pink-400 text-black"
          >
            <span class="whitespace-nowrap"> {{ level }}</span>
          </li>
        </ul>
        <span class="">Subjects</span>
        <ul class="flex flex-row list-none m-1 p0">
          <li
            v-for="subject in product.subjects"
            class="m-1 p-1 py-0 rounded bg-sky-400 text-black"
          >
            {{ subject }}
          </li>
        </ul>
      </div>
    </div>
    <div v-html="product.description" class="prose-xl mt-4"></div>
    <h3 class="text-2xl my-4">Recommendations</h3>
    <ul
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6"
    >
      <li v-for="product in relatedProducts">
        <div
          class="max-w-sm rounded-lg border bg-light-100 border-gray-200 shadow-md dark:bg-dark-300 dark:border-gray-700 object-contain"
        >
          <div class="w-full h-60">
            <NuxtLink :to="`/book/${product.isbn}/${product.title}`" class="">
              <bgimage :src="product.thumbnail" :alt="product.title" />
            </NuxtLink>
          </div>
          <div class="p-4">
            <h4
              class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ product.title }}
            </h4>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import algoliarecommend from "@algolia/recommend";
const runtimeConfig = useRuntimeConfig();

const route = useRoute();
const algolia = useAlgolia();
const index = algolia.initIndex("resources");
const { hits } = await index.search(route.params.isbn, {
  hitsPerPage: 1,
  restrictSearchableAttributes: ["isbn"],
});
const product = hits[0];
const client = algoliarecommend(
  runtimeConfig.algolia.applicationId,
  runtimeConfig.algolia.apiKey
);
const { results } = await client.getRelatedProducts([
  {
    indexName: "resources",
    objectID: product.id,
    maxRecommendations: 6,
  },
]);
const relatedProducts = results[0].hits;

useHead({
  title: product.title,
  meta: [{ name: "description", content: product.description }],
});
</script>
