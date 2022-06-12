<template>
  <article
    class="w-full prose dark:prose-invert max-w-none h-full flex place-items-center place-content-center"
  >
    <ContentDoc class="w-full">
      <template #not-found>
        <div
          class="flex flex-col place-content-center place-items-center h-full"
        >
          <div class="text-4rem md:text-12rem">404</div>
          <p class="text-center">
            Not sure how you got here, but you seem a little lost. Why don't you
            go back to the <NuxtLink to="/">home page</NuxtLink> and start
            again.
          </p>
        </div>
      </template>
    </ContentDoc>
  </article>
</template>

<script setup></script>
