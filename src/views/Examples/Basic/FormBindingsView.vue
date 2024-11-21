<script setup lang="ts">
import { ref } from "vue";
import type { RadioGroupProps, SelectProps } from "ant-design-vue";

const nameList = ["Jack", "John", "Mike"];
const radioOptions = ["One", "Two"].map<
  NonNullable<RadioGroupProps["options"]>[0]
>((item) => {
  return {
    label: item,
    value: item,
  };
});
const selectOptions = ["A", "B", "C", "D"].map<
  NonNullable<SelectProps["options"]>[0]
>((item) => {
  return {
    label: item,
    value: item,
  };
});

const text = ref("Edit me");
const checked = ref(true);
const checkedNames = ref([nameList[0]]);
const picked = ref("One");
const selected = ref<string | undefined>();
const multiSelected = ref<string[] | undefined>();
</script>

<!-- 使用 v-model 指令在状态和表单输入之间创建双向绑定。 -->
<template>
  <div>
    <a-space direction="vertical">
      <div>
        <a-typography-title :level="2">Text Input</a-typography-title>
        <a-input
          class="w-1/2"
          size="small"
          showCount
          allowClear
          v-model:value="text"
        />
        {{ text }}
      </div>

      <div>
        <a-typography-title :level="2">Checkbox</a-typography-title>
        <a-checkbox id="aCheckbox" v-model:checked="checked" />
        <label for="aCheckbox"> Checked: {{ checked }}</label>
      </div>

      <!-- 多个复选框可以绑定到相同的 v-model 数组 -->
      <div>
        <a-typography-title :level="2">Multi Checkbox</a-typography-title>

        <a-checkbox-group :options="nameList" v-model:value="checkedNames" />

        <p>
          Checked names:
          {{ checkedNames }}
        </p>
      </div>

      <div>
        <a-typography-title :level="2">Radio</a-typography-title>

        <a-radio-group :options="radioOptions" v-model:value="picked" />
        <span>Picked: {{ picked }}</span>
      </div>

      <div>
        <a-typography-title :level="2">Select</a-typography-title>

        <a-select
          class="w-1/2"
          placeholder="Please select"
          v-model:value="selected"
          :options="selectOptions"
        />
        <br />
        <span>Selected: {{ selected }}</span>
      </div>

      <div>
        <a-typography-title :level="2">Multi Select</a-typography-title>

        <a-select
          class="w-4/5"
          mode="multiple"
          placeholder="Please select"
          allowClear
          v-model:value="multiSelected"
          :options="selectOptions"
        />
      </div>
    </a-space>
  </div>
</template>

<style scoped></style>
