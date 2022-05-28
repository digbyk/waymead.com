<template>
  <nav class="container flex flex-row justify-between mx-auto p-4">
    <ul class="flex flex-row flex-grow">
      <NuxtLink to="/"><li>Logo222</li></NuxtLink>
    </ul>
    <ul class="flex flex-row">
      <li class="ml-4"><NuxtLink to="/">Home</NuxtLink></li>
      <li class="ml-4"><NuxtLink to="/content">Content</NuxtLink></li>
      <li class="ml-4"><NuxtLink to="/reactive">Reactive</NuxtLink></li>
      <li class="ml-4" @click="toggleDarkMode">🌙</li>
      <li class="ml-4">☀️</li>
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
