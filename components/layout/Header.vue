<template>
  <nav class="w-full flex flex-col md:flex-row justify-between">
    <ul class="flex flex-row flex-grow w-full justify-between items-center">
      <li class="text-2xl py-1 font-inter font-lightself-center">
        <NuxtLink to="/">WAYMEAD</NuxtLink>
      </li>
      <li class="block md:hidden">
        <input
          type="checkbox"
          name="toggleMenu"
          id="toggleMenu"
          class="hidden"
          :checked="showMenu"
          @change="toggleMenu"
        />
        <label class="burger" for="toggleMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            class="h-4 w-4 cursor-pointer md:hidden block stroke-dark-100 fill-dark-100 dark:stroke-light-100 dark:fill-light-100"
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
      class="md:flex flex-col w-full md:flex-row md:justify-end transition-all items-center"
      :class="showMenu ? 'flex' : 'hidden'"
    >
      <li v-for="menuItem in menuItems" :key="1" class="" @click="hideMenu">
        <NuxtLink
          :to="menuItem.path"
          class="w-full py-1 md:px-3 flex place-content-center hover:text-dark-900 dark:hover:text-light-100"
          >{{ menuItem.name }}</NuxtLink
        >
      </li>
      <li>
        <button
          class="w-full py-1 md:pl-6 flex place-content-center hover:text-dark-900 dark:hover:text-light-100"
          @click="toggleDark()"
        >
          <span v-if="isDark" class="material-icons">dark_mode</span>
          <span v-if="!isDark" class="material-icons">light_mode</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";

const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/page/about",
  },
  {
    name: "Search",
    path: "/search",
  },
  {
    name: "Test",
    path: "/test",
  },
];
const showMenu = ref(false);
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
const hideMenu = () => {
  showMenu.value = false;
};
const isDark = useDark();
const toggleDark = useToggle(isDark);
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
