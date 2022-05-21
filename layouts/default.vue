<template>
  <div class="flex flex-col h-screen prose prose-light dark:prose-invert">
    <header class="flex-1 p4 h4 font-mono teal300">
      <slot name="header"> Header </slot>
    </header>
    <main class="flex-grow font-sans">
      <slot />
    </main>
    <footer class="p4 h10 fw300 font-sans">
      <slot name="footer"> Footer </slot>
    </footer>
  </div>
</template>

<style>
:root {
  --primary: #f00;
}
body {
  margin: 0;
  height: 100vh;
  background: rgb(6, 0, 106);
  background: linear-gradient(
    0deg,
    rgba(6, 0, 106, 1) 0%,
    rgba(8, 50, 148, 1) 69%,
    rgba(2, 57, 149, 1) 100%
  );
}
div#__nuxt,
#__layout,
#__layout > div,
#app {
  min-height: 100vh;
}
</style>
