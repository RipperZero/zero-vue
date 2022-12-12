<script setup lang="ts">
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

defineProps<{
  todo: Todo;
  onMark: () => void;
  onDelete: () => void;
}>();

const emit = defineEmits<{
  (e: "fire", text: string): void;
}>();
</script>

<template>
  <li>
    <button @click="emit('fire', todo.text)">Fire</button>
    <input type="checkbox" :checked="todo.done" @click="onMark" />
    <span :class="{ done: todo.done }">{{ todo.text }}</span>
    <button @click="onDelete">X</button>
  </li>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>
