<template>
  <div class="w-full">
    <ais-instant-search
      :index-name="indexName"
      :search-client="algolia"
      :middlewares="middlewares"
      :routing="routing"
    >
      <ais-configure
        attributesToSnippet="title,description:40"
        snippetEllipsisText="&hellip;"
        hitsPerPage="10"
        filters="market:uk"
      />

      <div class="w-full">
        <ais-search-box
          placeholder="Search for anything..."
          class="w-full flex place-content-center"
        />
        <ais-current-refinements class="w-full flex flex-row flex-wrap" />
      </div>
      <div class="w-full flex flex-col md:flex-row">
        <div class="w-full md:w-1/4 m-2">
          <details :open="showFilters">
            <summary>Filters</summary>
            <h3 class="text-xl">Type</h3>
            <ais-refinement-list attribute="type" operator="or" :limit="20" />
            <h3 class="text-xl">Level</h3>
            <ais-refinement-list
              attribute="levels"
              operator="or"
              :limit="8"
              :show-more="true"
            />
            <h3 class="text-xl">Subject</h3>
            <ais-refinement-list
              attribute="subjects"
              operator="or"
              :limit="8"
              :show-more="true"
            />
          </details>
        </div>
        <div class="flex-1 flex-grow">
          <ais-infinite-hits>
            <template
              v-slot="{
                items,
                refinePrevious,
                refineNext,
                isLastPage,
                sendEvent,
              }"
            >
              <ul>
                <li v-for="item in items" :key="item.objectID" class="m-0">
                  <div
                    class="rounded-lg border bg-white border-gray-200 shadow-md dark:bg-dark-300 dark:border-gray-700 m-4 flex flex-col md:flex-row"
                  >
                    <div class="flex flex-col w-full md:w-60">
                      <NuxtLink
                        :to="`/book/${item.isbn}/${item.title}`"
                        class="h-full"
                      >
                        <bgimage
                          :src="item.thumbnail"
                          :alt="item.title"
                          @click="sendEvent('conversion', item, 'Viewed')"
                        />
                      </NuxtLink>
                    </div>
                    <div class="flex flex-col flex-1 py-2 px-4">
                      <h4 class="text-lg font-semibold">
                        <ais-snippet attribute="title" :hit="item" />
                      </h4>
                      <div>
                        <ais-snippet attribute="description" :hit="item" />
                      </div>
                      <div>
                        <span class="">Levels</span>
                        <ul class="flex flex-row flex-wrap list-none m-1 p0">
                          <li
                            v-for="(level, index) in item.levels"
                            class="m-1 p-1 py-0 rounded bg-pink-400 text-black"
                          >
                            <span class="whitespace-nowrap"> {{ level }}</span>
                          </li>
                        </ul>
                        <span class="">Subjects</span>
                        <ul class="flex flex-row list-none m-1 p0">
                          <li
                            v-for="subject in item.subjects"
                            class="m-1 p-1 py-0 rounded bg-sky-400 text-black"
                          >
                            {{ subject }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li v-if="!isLastPage" class="flex place-content-center">
                  <button @click="refineNext" class="">
                    Show more results
                  </button>
                </li>
              </ul>
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
  AisHitsPerPage,
  AisInfiniteHits,
  AisRefinementList,
  AisCurrentRefinements,
} from "vue-instantsearch/vue3/es";
import aa from "search-insights";
import { createInsightsMiddleware } from "instantsearch.js/es/middlewares";
import { history } from "instantsearch.js/es/lib/routers";

aa("setUserToken", "test-user-123");
const insightsMiddleware = createInsightsMiddleware({
  insightsClient: aa,
});
let showFilters = true;
const indexName = "resources";
const algolia = useAlgolia();
const middlewares = [insightsMiddleware];
const routing = {
  router: history(),
};
useHead({
  title: "Search",
  meta: [{ name: "description", content: "Searching" }],
});
</script>

<style>
.ais-SearchBox-form {
  width: 100%;
}
.ais-SearchBox-input {
  text-align: center;
}
.ais-InfiniteHits-list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.ais-RefinementList-list {
  padding: 0.5rem 0;
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
  flex-wrap: wrap;
}
.ais-CurrentRefinements-item {
  margin: 0 0.5rem;
  flex-direction: row;
  flex-wrap: wrap;
}
.ais-SearchBox-form {
  display: flex;
  flex-direction: row;
}
.ais-SearchBox-input {
  font-size: 1rem;
  padding: 0.5rem;
  flex-grow: 2;
}
.ais-RefinementList-count {
  border-radius: 0.5rem;
}
.ais-CurrentRefinements-item {
  margin-right: 0.3rem;
  margin-top: 0.3rem;
  padding: 0.3rem 0.5rem;
  display: -ms-flexbox;
  display: flex;
  background-color: #495588;
  border-radius: 5px;
}
.ais-CurrentRefinements-category {
  margin-left: 0.3em;
  display: flex;
}
.ais-CurrentRefinements-categoryLabel,
.ais-CurrentRefinements-delete,
.ais-CurrentRefinements-label {
  white-space: nowrap;
  color: #fff;
}
.ais-CurrentRefinements-delete {
  margin-left: 0.3rem;
  background: none;
  cursor: pointer;
}
</style>
