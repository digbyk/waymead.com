<template>
  <div
    class="flex flex-col min-h-full w-full px-2 md:px-0 font-sans font-light bg-light-900 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-800 text-stone-700 dark:text-stone-300"
  >
    <header
      class="container w-screen-xl m-auto py-2 md:py-4 md:sticky md:top-0 z-10 bg-light-900/70 dark:bg-slate-800/70 backdrop-filter backdrop-blur-lg border-b border-gray-400"
    >
      <Header />
    </header>
    <main class="container w-screen-lg flex-auto m-auto py-2 md:py-8">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Header from "@/components/layout/Header.vue";
</script>
