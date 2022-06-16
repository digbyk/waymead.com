<template>
  <div class="w-full">
    <section>
      <div v-if="pending">Loading...</div>
      <div v-else>
        {{ data }}
      </div>
      <div @click="reverse">{{ name }}</div>
      <p></p>
      <p>{{ store.name }}</p>
    </section>
    <section>
      <SuperComponent src="Hello">
        <template #header="headerProps">
          Some header content : {{ headerProps }}
        </template>
        This is the contents
      </SuperComponent>
    </section>
    <section>
      <table>
        <caption>
          Supabase table
        </caption>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Thing</th>
        </tr>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.name }}</td>
          <td>{{ todo.things?.name }}</td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { store } from "@/store/index.ts";
const client = useSupabaseClient();

const name = ref("Hello world");
const { data: data, pending } = useFetch("/api/hello");

const reverse = () => {
  name.value = name.value.split("").reverse().join("");
};

const { data: todos } = await useAsyncData("todos", async () => {
  const { data } = await client
    .from("todos")
    .select("name, id, thing_id, things(name)");
  console.log(data);
  return data;
});

useHead({
  title: name,
  meta: [{ name: "description", content: "Testing" }],
});
</script>
