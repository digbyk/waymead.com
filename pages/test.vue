<template>
  <div class="w-full">
    <section>
      <div v-if="pending">Loading...</div>
      <div v-else>
        {{ data }}
      </div>
      <div @click="reverse">{{ name }}</div>
      <p></p>
      <p>{{ store.name }}</p>
    </section>
    <section>
      <SuperComponent src="Hello">
        <template #header="headerProps">
          Some header content : {{ headerProps }}
        </template>
        This is the contents
      </SuperComponent>
    </section>
    <section>{{ page }}</section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { store } from "@/store/index.ts";

const name = ref("Hello world");
const { data: data, pending } = useFetch("/api/hello");

const reverse = () => {
  name.value = name.value.split("").reverse().join("");
};
const { page } = await useAsyncData("page", () => GqlPage({ slug: "about" }));
console.log(page);
useHead({
  title: name,
  meta: [{ name: "description", content: "Testing" }],
});
</script>

<style>
section {
  margin: 0.5rem 0;
  padding: 0.5rem;
}
</style>
