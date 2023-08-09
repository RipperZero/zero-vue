<script setup lang="ts">
import { ref } from "vue";

const show = ref(true);
const list = ref([1, 2, 3]);
</script>

<template>
  <a-space direction="vertical">
    <a-space>
      <a-button type="primary" shape="round" @click="show = !show"
        >Toggle List</a-button
      >
      <a-button type="primary" shape="round" @click="list.push(list.length + 1)"
        >Push Number</a-button
      >
      <a-button type="primary" shape="round" @click="list.pop()"
        >Pop Number</a-button
      >
      <a-button type="primary" shape="round" @click="list.reverse()"
        >Reverse List</a-button
      >
    </a-space>

    <ul v-if="show && list.length > 0">
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>

    <a-list bordered :data-source="list">
      <template #renderItem="{ item }">
        <a-list-item>{{ item }}</a-list-item>
      </template>
    </a-list>

    <a-space direction="vertical">
      <a-typography-text v-if="!show && list.length > 0" strong underline
        >List is not empty, but hidden.
      </a-typography-text>

      <a-typography-text
        v-if="list.length === 0"
        strong
        underline
        type="warning"
        >List is empty.</a-typography-text
      >
    </a-space>
  </a-space>
</template>
