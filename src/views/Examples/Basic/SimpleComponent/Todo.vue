<script setup lang="ts">
export type Todo = {
  id: number;
  text: string;
};

const props = defineProps<{
  todo: Todo;
}>();
</script>

<template>
  <li>{{ props.todo.text }}</li>
</template>
