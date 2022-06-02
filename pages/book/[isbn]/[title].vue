<template>
  <div class="w-full">
    <div class="flex flex-row">
      <div class="p-2 w-120">
        <img :src="product.thumbnail" :alt="product.title" />
      </div>
      <div class="p-2">
        <h1 class="text-2xl">{{ product.title }}</h1>
        <h2>{{ product.isbn }}</h2>
        <div v-html="product.description"></div>
      </div>
    </div>
    <h3 class="text-lg">Recommendations</h3>
    <ul class="grid grid-cols-1 md:grid-cols-5 gap-2">
      <li v-for="product in relatedProducts">
        <div>
          <NuxtLink :to="`/book/${product.isbn}/${product.title}`">
            <img :src="product.thumbnail" :alt="product.title" />
            <h1>{{ product.title }}</h1>
          </NuxtLink>
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
    maxRecommendations: 5,
  },
]);
const relatedProducts = results[0].hits;
</script>
