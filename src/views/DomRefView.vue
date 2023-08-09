<script setup lang="ts">
import { ref, watch } from "vue";

const inputValue = ref("hello");
const pRef = ref<HTMLParagraphElement | null>(null);

watch(inputValue, (newInputValue) => {
  if (pRef.value === null) {
    return;
  }

  pRef.value.textContent = newInputValue;
});
</script>

<template>
  <div>
    <input v-model="inputValue" />
    <p ref="pRef">hello</p>
  </div>
</template>
