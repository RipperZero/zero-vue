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
    <button class="addBtn" @click="increment" @keyup.left="increment">+</button>
    <span>{{ state.count }}</span>
    <button
      class="subtractBtn"
      @click="decrement('decrement', $event)"
      @keyup.right="decrement('decrement', $event)"
    >
      -
    </button>
  </div>
</template>

<style scoped>
.addBtn {
  margin-right: 10px;
}

.subtractBtn {
  margin-left: 10px;
}
</style>
