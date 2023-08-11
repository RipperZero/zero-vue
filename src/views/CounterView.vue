<script setup lang="ts">
import { ref } from "vue";

const state = ref({ count: 0 });

const increment = (_event: MouseEvent | KeyboardEvent) => {
  // console.log(event);

  state.value.count++;
};

const decrement = (_payload: string, _event: MouseEvent | KeyboardEvent) => {
  // console.log(payload);
  // console.log(event);

  if (state.value.count === 0) {
    return;
  }

  state.value.count--;
};
</script>

<template>
  <div>
    <button @click="increment" @keyup.left="increment">+</button>
    <span class="mx-4">{{ state.count }}</span>
    <button
      @click="decrement('decrement', $event)"
      @keyup.right="decrement('decrement', $event)"
    >
      -
    </button>
  </div>
</template>

<style scoped></style>
