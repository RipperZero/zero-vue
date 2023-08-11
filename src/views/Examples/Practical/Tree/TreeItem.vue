<script setup lang="ts">
import { ref, computed } from "vue";

export type TreeData = {
  name: string;
  children?: TreeData[];
};

const props = defineProps<{
  treeData: TreeData;
}>();

const isOpen = ref(false);
const isFolder = computed(() => {
  const children = props.treeData.children;

  return Array.isArray(children) && children.length > 0;
});

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const addChild = () => {
  props.treeData.children?.push({ name: "new stuff" });
};

const changeType = () => {
  if (isFolder.value) {
    return;
  }

  props.treeData.children = [];
  addChild();
  isOpen.value = true;
};
</script>

<template>
  <li>
    <div :class="{ bold: isFolder }" @click="toggle" @dblclick="changeType">
      {{ treeData.name }}
      <span v-if="isFolder">[{{ isOpen ? "-" : "+" }}]</span>
    </div>

    <ul v-if="isFolder" v-show="isOpen">
      <!-- 一个可以通过其“name”选项递归渲染自己的组件，
      (使用单文件组件，从文件名推断) -->
      <TreeItem
        class="item"
        v-for="treeData in props.treeData.children"
        :tree-data="treeData"
      />
    </ul>
  </li>
</template>

<style scoped>
.item {
  cursor: pointer;
  line-height: 1.5;
}
.bold {
  font-weight: bold;
}
</style>
