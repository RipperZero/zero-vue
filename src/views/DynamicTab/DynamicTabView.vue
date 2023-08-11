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
      :class="['tab-button', { active: currentTabKey === tabKey }]"
      @click="currentTabKey = tabKey"
    >
      {{ tabKey }}
    </button>

    <component :is="tabs[currentTabKey]" class="tab" />
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

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
