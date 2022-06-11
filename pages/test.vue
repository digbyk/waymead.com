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
    <section>{{ content2 }}</section>
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
const { content2 } = await useAsyncData("page", () =>
  GqlPage({ slug: "home" })
);
console.log(content2);
useHead({
  title: name,
  meta: [{ name: "description", content: "Testing" }],
});
</script>
