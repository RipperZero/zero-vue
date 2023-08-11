<!-- 一个可以递归渲染自己的嵌套树组件。
 你可以双击一个项目将其转变为一个文件夹。 -->

<script setup lang="ts">
import { ref } from "vue";

import TreeItem from "./TreeItem.vue";
import type { TreeData } from "./TreeItem.vue";

const treeData = ref<TreeData>({
  name: "My Tree",
  children: [
    { name: "hello" },
    { name: "world" },
    {
      name: "child folder",
      children: [
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "world" }],
        },
        { name: "hello" },
        { name: "world" },
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "world" }],
        },
      ],
    },
  ],
});
</script>

<template>
  <div>
    <ul>
      <TreeItem class="item" :tree-data="treeData"></TreeItem>
    </ul>
  </div>
</template>

<style scoped>
.item {
  cursor: pointer;
  line-height: 1.5;
}
</style>
