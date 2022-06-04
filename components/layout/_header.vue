<template>
  <nav class="w-full flex flex-col md:flex-row justify-between">
    <ul class="flex flex-row flex-grow w-full justify-between items-center">
      <li class="text-3xl py-1 font-inter font-light text-2xl self-center">
        <NuxtLink to="/">WAYMEAD</NuxtLink>
      </li>
      <li class="md:ml-4 py-1 block md:hidden">
        <input
          type="checkbox"
          name="toggleMenu"
          id="toggleMenu"
          class="hidden"
          @change="toggleMenu"
        />
        <label class="burger" for="toggleMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            class="h-6 w-6 cursor-pointer md:hidden block stroke-dark-100 fill-dark-100 dark:stroke-light-100 dark:fill-light-100"
            fill="none"
            viewBox="0 0 25 25"
          >
            <path
              d="M25 11.6758H13.3242V0H11.6758V11.6758H0V13.3242H11.6758V25H13.3242V13.3242H25V11.6758Z"
            />
          </svg>
        </label>
      </li>
    </ul>
    <ul
      id="menu"
      class="hidden md:flex flex-col w-full md:flex-row md:justify-end transition-all"
    >
      <li class="md:ml-4 py-1" @click="hideMenu">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li class="md:ml-4 py-1" @click="hideMenu">
        <NuxtLink to="/page/about">About</NuxtLink>
      </li>
      <li class="md:ml-4 py-1" @click="hideMenu">
        <NuxtLink to="/search">Search</NuxtLink>
      </li>
      <li class="md:ml-4 py-1" @click="hideMenu">
        <NuxtLink to="/test">Test</NuxtLink>
      </li>
      <li class="md:ml-4 py-1" @click="hideMenu">
        <NuxtLink to="/login">Login</NuxtLink>
      </li>
      <li class="md:ml-4 py-1" @click="toggleDarkMode">🌙</li>
    </ul>
  </nav>
</template>

<script setup>
const toggleMenu = () => {
  const menu = document.querySelector("#menu");
  menu.classList.toggle("hidden");
};
const hideMenu = () => {
  const menu = document.querySelector("#menu");
  menu.classList.add("hidden");
};
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

<style>
#menu {
  transition: transform 0.1s ease-in-out 0.1s;
}
input#toggleMenu + label.burger #menu-button {
  transform: rotateZ(0deg);
  transition: transform 0.1s ease-in-out 0.1s;
}
input#toggleMenu:checked + label.burger #menu-button {
  transform: rotateZ(45deg);
  transition: transform 0.1s ease-in-out 0.1s;
}
</style>
