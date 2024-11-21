<script setup lang="ts">
type Todo = {
  id: number;
  text: string;
};

const props = defineProps<{
  todo: Todo;
}>();

export type { Todo };
</script>

<template>
  <li>{{ props.todo.text }}</li>
</template>
