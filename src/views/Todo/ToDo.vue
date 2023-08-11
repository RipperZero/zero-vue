<script setup lang="ts">
export type ToDoProps = {
  zero?: string;
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
  onMark: () => void;
  onDelete: () => void;
};

// defineProps<{
//   zero?: string;
//   todo: Todo;
//   onMark: () => void;
//   onDelete: () => void;
// }>();

withDefaults(defineProps<ToDoProps>(), {
  zero: "zero",
});

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
    {{ zero }}
  </li>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
