<template>
  <nav class="w-full flex flex-col md:flex-row justify-between">
    <ul
      class="flex flex-row flex-grow w-full justify-between items-center p-0 m-0"
    >
      <li class="text-2xl py-1 self-center">
        <NuxtLink
          to="/"
          class="flex flex-row text-dark-300 dark:text-light-300 no-underline flex flex-row items-center"
          ><img
            src="/logo.svg"
            alt="Waymead logo"
            class="h-8 w-8 mr-2"
          />WAYMEAD</NuxtLink
        >
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
            class="h-4 w-4 mr-2 cursor-pointer md:hidden block stroke-dark-100 fill-dark-100 dark:stroke-light-100 dark:fill-light-100"
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
      class="md:flex flex-col w-full md:flex-row md:justify-end transition-all items-center p-0 m-0"
      :class="showMenu ? 'flex' : 'hidden'"
    >
      <li v-for="menuItem in menuItems" :key="1" class="" @click="hideMenu">
        <NuxtLink
          :to="menuItem.path"
          class="flex my-2 md:ml-4 place-content-center no-underline text-dark-300 dark:text-light-300 hover:text-dark-900 dark:hover:text-light-100"
        >
          {{ menuItem.name }}
        </NuxtLink>
      </li>
      <li v-if="!user" class="" @click="hideMenu">
        <NuxtLink
          to="/login"
          class="flex my-2 md:ml-4 place-content-center no-underline text-dark-300 dark:text-light-300 hover:text-dark-900 dark:hover:text-light-100"
        >
          Login
        </NuxtLink>
      </li>
      <li v-if="user">
        <span
          class="flex my-2 md:ml-4 place-content-center no-underline text-dark-300 dark:text-light-300 hover:text-dark-900 dark:hover:text-light-100 cursor-pointer"
          @click="signOut()"
          >Logout</span
        >
      </li>
      <li
        v-if="user"
        class="place-content-center no-underline text-dark-300 dark:text-light-300 hover:text-dark-900 dark:hover:text-light-100"
      >
        <NuxtLink
          to="/profile"
          class="flex my-2 md:ml-4 place-content-center no-underline text-dark-300 dark:text-light-300 hover:text-dark-900 dark:hover:text-light-100"
        >
          <div class="i-ic-round-account-circle text-xl cursor-pointer"></div>
        </NuxtLink>
      </li>
      <li class="">
        <div
          class="i-ic-round-light-mode dark:i-ic-round-dark-mode my-2 md:ml-4 text-xl cursor-pointer"
          @click="toggleDark()"
        />
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";
const client = useSupabaseClient();
const user = useSupabaseUser(client);

const menuItems = [
  {
    name: "About",
    path: "/page/about",
  },
  {
    name: "Content",
    path: "/aboutus",
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

async function signOut() {
  const { error } = await client.auth.signOut();
}
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
