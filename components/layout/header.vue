<template>
  <nav
    class="container flex flex-col md:flex-row justify-between mx-auto p-4 items-center"
  >
    <ul class="flex flex-row flex-grow w-full justify-between items-center">
      <li class="text-2xl py-1"><NuxtLink to="/">WAYMEAD</NuxtLink></li>
      <li class="md:ml-4 py-1 block md:hidden">Menu</li>
    </ul>
    <ul class="flex flex-col w-full md:flex-row">
      <li class="md:ml-4 py-1"><NuxtLink to="/">Home</NuxtLink></li>
      <li class="md:ml-4 py-1"><NuxtLink to="/content">Content</NuxtLink></li>
      <li class="md:ml-4 py-1"><NuxtLink to="/reactive">Reactive</NuxtLink></li>
      <li class="md:ml-4 py-1"><NuxtLink to="/page/home">Pages</NuxtLink></li>
      <li class="md:ml-4 py-1" @click="toggleDarkMode">🌙</li>
      <li class="md:ml-4 py-1">☀️</li>
    </ul>
  </nav>
</template>

<script setup>
const toggleDarkMode = () => {
  const body = document.querySelector("body");
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }
};

// Whenever the user explicitly chooses light mode
localStorage.theme = "light";

// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");
</script>
