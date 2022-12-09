<script setup lang="ts">
import { ref, computed } from "vue";
import { produce } from "immer";

import ToDo from "@/components/ToDo.vue";

import type { Todo } from "@/components/ToDo.vue";

let id = 0;

const divRef = ref<HTMLDivElement | null>(null);

const newTodoText = ref("");
const hideCompleted = ref(false);
const todos = ref<Todo[]>([
  { id: id++, text: "Learn HTML", done: true },
  { id: id++, text: "Learn JavaScript", done: true },
  { id: id++, text: "Learn Vue", done: false },
]);

const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((todo) => !todo.done)
    : todos.value;
});

const addTodo = () => {
  todos.value.push({
    id: id++,
    text: newTodoText.value,
    done: false,
  });
  //   todos.value = produce(todos.value, (draft) => {
  //     draft.push({
  //       id: id++,
  //       text: newTodoText.value,
  //       done: false,
  //     });
  //   });

  newTodoText.value = "";
};

const deleteTodo = (todo: Todo) => {
  todos.value = todos.value.filter((t) => t.id !== todo.id);
  //   todos.value = produce(todos.value, (draft) => {
  //     return draft.filter((draftTodo) => draftTodo.id !== todo.id);
  //   });
};

const handleFire = (text: string) => {
  console.log(text);
};
</script>

<template>
  <div ref="divRef">
    <form @submit.prevent="addTodo">
      <input v-model="newTodoText" />
      <button>Add Todo</button>
    </form>

    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <ToDo
          :todo="todo"
          @fire="handleFire"
          v-bind:on-delete="() => deleteTodo(todo)"
          v-bind:on-mark="
            () => {
              todo.done = !todo.done;
            }
          "
        />
      </li>
    </ul>

    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? "Show all" : "Hide completed" }}
    </button>
  </div>
</template>
