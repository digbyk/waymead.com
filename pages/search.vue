<template>
  <div class="w-full">
    <ais-instant-search :index-name="indexName" :search-client="algolia">
      <ais-configure
        attributesToSnippet="title,description:40"
        hitsPerPage="9"
        filters="market:us"
      />

      <div class="w-full">
        <ais-search-box placeholder="Search for anything..." class="w-full" />
        <ais-current-refinements />
      </div>
      <div class="w-full flex flex-col md:flex-row">
        <div class="w-full md:w-1/4 m-2">
          <h3 class="text-xl">Type</h3>
          <ais-refinement-list attribute="type" operator="or" limit="8" />
          <h3 class="text-xl">Level</h3>
          <ais-refinement-list
            attribute="levels"
            operator="or"
            limit="8"
            show-more="true"
          />
          <h3 class="text-xl">Subject</h3>
          <ais-refinement-list
            attribute="subjects"
            operator="or"
            limit="8"
            show-more="true"
          />
          <h3 class="text-xl">Topic</h3>
          <ais-refinement-list
            attribute="topics"
            operator="or"
            limit="8"
            searchable="true"
          />
        </div>
        <div class="flex-1 flex-grow">
          <ais-infinite-hits class="">
            <template v-slot:item="{ item, index }">
              <div class="border border-dark-100 m-2 p-2">
                <h4 class="text-lg font-semibold">
                  <ais-snippet attribute="title" :hit="item" />
                </h4>
                <ais-snippet attribute="description" :hit="item" />
                {{ item.imageUrl }}
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
  AisAutocomplete,
  AisHighlight,
  AisSnippet,
  AisConfigure,
  AisPanel,
  AisInfiniteHits,
  AisRefinementList,
  AisCurrentRefinements,
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
.ais-CurrentRefinements-list {
  display: flex;
  flex-direction: row;
}
.ais-CurrentRefinements-item {
  margin: 0 0.5rem;
}
.ais-SearchBox-form {
  display: flex;
  flex-direction: row;
}
.ais-SearchBox-input {
  font-size: 1rem;
  padding: 0.5rem;
}
</style>
