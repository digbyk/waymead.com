<template>
  <div class="bg-dark-400">
    <h1>Supercomponent</h1>
    <h2>{{ src }}</h2>
    <header>
      <slot name="header">Default header content </slot>
    </header>

    <slot :text="greetingMessage" :count="1">Default slot content</slot>
  </div>
</template>

<script setup>
const greetingMessage = ref("Hello world");
defineProps({
  src: String,
  alt: String,
});
</script>
