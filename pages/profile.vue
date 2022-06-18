<template>
  <section class="w-full">
    <Head>
      <Title>{{ user?.email }}</Title>
    </Head>
    <div v-if="pending">Loading...</div>
    <div v-else>
      {{ user.email }}
    </div>
  </section>
</template>

<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser(client);

useHead({
  title: user.email,
  meta: [{ name: "description", content: "Testing" }],
});
</script>
