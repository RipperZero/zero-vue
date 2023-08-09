<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue?: string;
  // modelModifiers?: { default: () => {} };
  modelModifiers?: { capitalize: boolean };
  getSetValue?: string;
  upperCaseValue?: string;
  upperCaseValueModifiers?: { upperCase: boolean };
}>();

const emit = defineEmits<{
  (e: "update:modelValue", newValue: string): void;
  (e: "update:getSetValue", newValue: string): void;
  (e: "update:upperCaseValue", newValue: string): void;
}>();

const handleInput = (e: Event) => {
  let value = (e.target as HTMLInputElement).value;

  if (props.modelModifiers?.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }

  emit("update:modelValue", value);
};

const handleUpperCaseInput = (e: Event) => {
  let value = (e.target as HTMLInputElement).value;

  if (props.upperCaseValueModifiers?.upperCase) {
    value = value.toUpperCase();
  }

  emit("update:upperCaseValue", value);
};

const computedValue = computed({
  get: () => {
    return props.getSetValue;
  },
  set: (newValue) => {
    emit("update:getSetValue", newValue!);
  },
});
</script>

<template>
  <div>
    <p>modelValue</p>
    <input :value="modelValue" @input="handleInput" />
    <br />
    <p>computedValue</p>
    <input v-model="computedValue" />
    <br />
    <p>upperCaseValue</p>
    <input :value="upperCaseValue" @input="handleUpperCaseInput" />
  </div>
</template>
