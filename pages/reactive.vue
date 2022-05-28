<template>
  <div>
    <div @click="reverse">{{ name }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const name = ref("digby");

const reverse = () => {
  name.value = name.value.split("").reverse().join("");
};

definePageMeta({
  layout: "default",
  title: "Reactive page",
});
</script>
