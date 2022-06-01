<template>
  <nav class="w-full flex flex-row justify-between">
    <ul class="flex flex-row flex-grow">
      <li>&copy; Waymead 2008 - {{ year }}</li>
    </ul>
  </nav>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
