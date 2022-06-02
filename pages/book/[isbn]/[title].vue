<template>
  <div class="w-full">
    <div class="flex flex-row">
      <div class="p-2 w-120 md:w-160">
        <img :src="product.thumbnail" :alt="product.title" />
      </div>
      <div class="p-2 flex-grow">
        <h1 class="text-2xl">{{ product.title }}</h1>
        <h2>{{ product.isbn }}</h2>
        <div v-html="product.description"></div>
      </div>
    </div>
    <h3 class="text-lg">Recommendations</h3>
    <ul
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6"
    >
      <li v-for="product in relatedProducts">
        <div
          class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-dark-300 dark:border-gray-700 object-contain"
        >
          <div class="h-60 overflow-hidden">
            <NuxtLink :to="`/book/${product.isbn}/${product.title}`">
              <img
                :src="product.thumbnail"
                :alt="product.title"
                class="rounded-t-lg w-full"
              />
            </NuxtLink>
          </div>
          <div class="p-5">
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
</script>
