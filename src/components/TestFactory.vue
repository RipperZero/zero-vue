<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import type { Ref } from "vue";

const count: Ref<number> = ref(0);
const reactiveObj = reactive({ message: "湖人总冠军" });

const inputValue: Ref<string> = ref("");
const text = ref("");

const increment = () => {
  count.value++;
};

const sayHello = (message: string, event?: MouseEvent) => {
  console.log(message);
  console.log(event);
};

const initInput = () => {
  console.log(inputValue.value);
  inputValue.value = "";
};

const init = () => {
  console.log(text.value);
  text.value = "";
};

const onInput = (e: any ) => {
  text.value = e.target.value;
};

onMounted(() => {
  count.value = 10;
  console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
  <div>Test Factory</div>
  <button @click="increment">{{ count }}</button>
  <button @click="(event) => sayHello('湖人总冠军', event)">Say Hello</button>
  <div>{{ `Message---- ${reactiveObj.message}` }}</div>
  <input
    v-model="inputValue"
    @keydown.enter="initInput"
    placeholder="v-model"
  />
  <input
    :value="text"
    @input="onInput"
    @keydown.enter="init"
    placeholder="value"
  />
</template>
