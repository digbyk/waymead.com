<template>
  <div class="w-full">
    <div v-if="pending">Loading ...</div>
    <div v-else>
      {{ data }}
    </div>
    <div @click="reverse">{{ name }}</div>
    <p></p>
    <p>{{ store.name }}</p>
    Pending {{ pending }}
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

useHead({
  title: "Test",
  meta: [{ name: "description", content: "Testing" }],
});
</script>
