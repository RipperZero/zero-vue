<script setup lang="ts">
import { ref } from "vue";

import Home from "./Home.vue";
import Posts from "./Posts.vue";
import Archive from "./Archive.vue";

const tabs = {
  Home,
  Posts,
  Archive,
};

const currentTabKey = ref<keyof typeof tabs>("Home");
</script>

<template>
  <div class="demo">
    <button
      v-for="(_, tabKey) in tabs"
      :key="tabKey"
      class="border border-black border-solid hover:text-blue-500 rounded-t-md cursor-pointer p-2"
      :class="{
        'bg-slate-300 text-blue-500': currentTabKey === tabKey,
        // 'm-4': currentTabKey === tabKey,
      }"
      @click="currentTabKey = tabKey"
    >
      {{ tabKey }}
    </button>

    <component
      :is="tabs[currentTabKey]"
      class="border border-black border-solid p-3"
    />
  </div>
</template>

<style scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

/* .tab {
  @apply border border-black border-solid p-3;
} */
</style>
