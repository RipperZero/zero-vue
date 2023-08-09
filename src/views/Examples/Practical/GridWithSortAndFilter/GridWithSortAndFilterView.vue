<!-- 该示例创建了一个可复用网格组件，并结合外部数据使用它。 -->

<script setup lang="ts">
import { ref } from "vue";

import Grid from "./Grid.vue";
import type { GridProps } from "./Grid.vue";

const searchQuery = ref("");
const gridColumns: GridProps["columns"] = ["name", "power"];
const gridData: GridProps["data"] = [
  { name: "Chuck Norris", power: Infinity },
  { name: "Bruce Lee", power: 9000 },
  { name: "Jackie Chan", power: 7000 },
  { name: "Jet Li", power: 8000 },
];

const onSearch = (searchValue: string) => {
  searchQuery.value = searchValue;
};
</script>

<template>
  <a-space direction="vertical">
    <!-- <form id="search">Search <input name="query" v-model="searchQuery" /></form> -->
    <a-input-search
      style="width: 50%"
      placeholder="input search text"
      enter-button
      @search="onSearch"
    />
    <Grid :data="gridData" :columns="gridColumns" :filter-key="searchQuery" />
  </a-space>
</template>
