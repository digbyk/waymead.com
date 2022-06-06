<template>
  <div
    class="flex flex-col min-h-full w-full font-sans bg-light-100 dark:bg-gradient-to-br dark:from-stone-900 dark:to-stone-700 text-stone-700 dark:text-stone-300"
  >
    <header class="container m-auto p-4">
      <Header />
    </header>
    <main class="container flex-auto m-auto p-4">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Header from "@/components/layout/Header.vue";
</script>
