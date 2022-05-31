<template>
  <div class="w-full">
    <ais-instant-search :index-name="indexName" :search-client="algolia">
      <ais-configure
        attributesToSnippet="description"
        hitsPerPage="9"
        filters="market:us"
      />
      <div class="w-full">
        <ais-search-box class="w-full" />
      </div>
      <div class="w-full flex flex-row">
        <div class="w-80 m-2">
          <h3 class="text-xl">Subjects</h3>
          <ais-refinement-list attribute="subjects" operator="and" :limit="8" />
          <h3 class="text-xl">Topics</h3>
          <ais-refinement-list attribute="topics" operator="and" :limit="8" />
        </div>
        <div class="flex-1 m-2 p-2">
          <ais-infinite-hits class="">
            <template v-slot:item="{ item, index }">
              <div class="border m-2 p-2">
                <h4 class="text-lg font-semibold">
                  {{ item.title }}
                </h4>
                <ais-snippet attribute="description" :hit="item" />

                <div v-html="item.description"></div>
              </div>
            </template>
          </ais-infinite-hits>
        </div>
      </div>
    </ais-instant-search>
  </div>
</template>

<script setup>
import {
  AisInstantSearch,
  AisSearchBox,
  AisConfigure,
  AisPanel,
  AisInfiniteHits,
  AisRefinementList,
} from "vue-instantsearch/vue3/es";
const indexName = "resources";
const algolia = useAlgolia();

useHead({
  title: "Search",
  meta: [{ name: "description", content: "Searching" }],
});
</script>

<style>
.ais-InfiniteHits-list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.ais-RefinementList-list {
  padding: 1rem;
}
.ais-RefinementList-label {
  display: flex;
  flex-direction: row;
}
.ais-RefinementList-labelText {
  flex-grow: 1;
}
.ais-RefinementList-count {
  align-self: flex-end;
}
</style>
