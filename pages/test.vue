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
    <section>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li><a>Item 1</a></li>
            <li tabindex="0">
              <a>
                Parent
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                  />
                </svg>
              </a>
              <ul class="p-2 bg-base-100">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
      </div>
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
