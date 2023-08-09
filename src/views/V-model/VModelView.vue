<script setup lang="ts">
import { ref } from "vue";
import CustomInput from "./CustomInput.vue";

const text = ref("");
const getSetText = ref("");
const upperCaseText = ref("");
</script>

<template>
  <div>
    <CustomInput
      v-model.capitalize="text"
      v-model:get-set-value="getSetText"
      v-model:upper-case-value.upperCase="upperCaseText"
    />
    <p>Model Value:</p>
    <pre>{{ text }}</pre>
    <p>Computed Value:</p>
    <pre>{{ getSetText }}</pre>
    <p>UPPER CASE VALUE:</p>
    <pre>{{ upperCaseText }}</pre>
  </div>
</template>
