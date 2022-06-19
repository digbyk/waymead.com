<template>
  <form
    class="flex flex-col w-screen-sm place-content-center mx-auto"
    @submit="signInWithEmail"
  >
    <lebel for="email" class="text-lg text-stone-700 dark:text-stone-300"
      >Email</lebel
    >
    <input
      id="email"
      type="email"
      name="email"
      v-model="email"
      required
      class="text-black text-xl p-1 my-2"
    />
    <input
      type="submit"
      value="Login"
      class="mt-2 border-2 border-black text-black dark:text-white text-xl"
      :disabled="formDisabled"
    />
  </form>
</template>

<script setup>
const client = useSupabaseClient();

const email = ref("");
const formDisabled = ref(true);

const signInWithEmail = async (event) => {
  event.preventDefault();
  const { user, error } = await client.auth.signIn(
    {
      email: email.value,
    },
    { redirectTo: window.location.origin }
  );
  console.log(user);
};
useHead({
  title: "Login",
  meta: [{ name: "description", content: "Login page" }],
});
</script>
