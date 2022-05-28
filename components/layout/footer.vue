<template>
  <nav class="container flex flex-row justify-between mx-auto p-4">
    <ul class="flex flex-row flex-grow">
      <li>&copy; Waymead Studios 2008 - {{ year }}</li>
    </ul>
  </nav>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
