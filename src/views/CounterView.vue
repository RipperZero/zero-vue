<script setup lang="ts">
import { ref } from "vue";

const state = ref({ count: 0 });

const increment = () => {
  state.value.count++;
};

const decrement = () => {
  if (state.value.count === 0) {
    return;
  }

  state.value.count--;
};
</script>

<template>
  <div>
    <button class="addBtn" @click="increment">+</button>
    <span>{{ state.count }}</span>
    <button class="subtractBtn" @click="decrement">-</button>
  </div>
</template>

<style>
.addBtn {
  margin-right: 10px;
}

.subtractBtn {
  margin-left: 10px;
}
</style>
