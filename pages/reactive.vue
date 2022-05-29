<template>
  <div>
    <div @click="reverse">{{ name }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const name = ref("Hello world");

const reverse = () => {
  name.value = name.value.split("").reverse().join("");
};

useHead({
  title: "Test",
  meta: [{ name: "description", content: "Testing" }],
});
</script>
