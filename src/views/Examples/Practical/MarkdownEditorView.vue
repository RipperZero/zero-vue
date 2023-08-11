<script setup lang="ts">
import { marked } from "marked";
import { debounce } from "lodash-es";
import { ref, computed } from "vue";

const input = ref("# hello");
const output = computed(() => marked(input.value));

const update = debounce((e: Event) => {
  const value = (e.target as HTMLTextAreaElement).value;

  input.value = value;
});
</script>

<template>
  <div class="h-[80vh] flex">
    <textarea class="input" :value="input" @input="update"></textarea>
    <div class="output" v-html="output"></div>
  </div>
</template>

<style scoped>
.input,
.output {
  /* overflow: auto;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px; */
  @apply overflow-auto w-1/2 h-full box-border px-5;
}

.input {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
