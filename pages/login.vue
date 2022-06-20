<template>
  <div class="max-w-sm mx-auto">
    <FormKit
      type="form"
      name="loginForm"
      v-model="formData"
      :form-class="submitted ? 'hidden' : 'block'"
      submit-label="Login"
      @submit="signInWithEmail"
    >
      <FormKit
        type="email"
        name="email"
        placeholder="name@domain.com"
        label="Email"
      />
    </FormKit>
    <div v-if="submitted" class="prose dark:prose-invert">
      <h2>Magic link sent</h2>
      <p>We have sent a magic link to your email address.</p>
      <p>Please click on it to log in.</p>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient();

const formData = ref({});
const submitted = ref(false);
const email = ref("");
const formDisabled = ref(true);

const signInWithEmail = async (event) => {
  //  event.preventDefault();
  const { user, error } = await client.auth.signIn(formData.value, {
    redirectTo: window.location.origin,
  });
  submitted.value = true;
};
useHead({
  title: "Login",
  meta: [{ name: "description", content: "Login page" }],
});
</script>
