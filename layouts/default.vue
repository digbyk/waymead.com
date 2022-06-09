<template>
  <div
    class="flex flex-col min-h-full w-full font-sans bg-light-100 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-800 text-stone-700 dark:text-stone-300"
  >
    <header
      class="container m-auto p-4 md:sticky md:top-0 z-10 dark:bg-slate-800/70 backdrop-filter backdrop-blur-lg border-b border-gray-700"
    >
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
