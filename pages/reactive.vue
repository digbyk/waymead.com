<template>
  <div class="w-full">
    <div @click="reverse">{{ name }}</div>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const name = ref("Hello world");
const { data: data } = await useFetch("/api/hello");

const reverse = () => {
  name.value = name.value.split("").reverse().join("");
};

useHead({
  title: "Test",
  meta: [{ name: "description", content: "Testing" }],
});
</script>
