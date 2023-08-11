<script setup lang="ts">
import { ref } from "vue";
import { message as Message } from "ant-design-vue";

const message = ref("Hello World!");

const reverseMessage = () => {
  // 通过其 .value 属性 访问/修改一个 ref 的值。
  message.value = message.value.split("").reverse().join("");
};

const notify = () => {
  Message.warning("navigation was prevented.", 2);
};
</script>

<template>
  <div>
    <!-- 注意我们不需要在模板中写 .value，因为在模板中 ref 会自动“解包”。 -->
    <h1>{{ message }}</h1>

    <a-space direction="vertical">
      <!-- 绑定到一个方法/函数。这个 @click 语法是 v-on:click 的简写。 -->
      <a-button type="primary" shape="round" @click="reverseMessage">
        Reverse Message
      </a-button>

      <!-- 也可以写成一个内联表达式语句 -->
      <a-button type="primary" shape="round" @click="message += '!'">
        Append "!"
      </a-button>

      <!-- Vue 也为一些像 e.preventDefault() 和 e.stopPropagation() 这样的常见任务提供了修饰符。 -->
      <a-button type="link" href="https://vuejs.org" @click.prevent="notify">
        A link with e.preventDefault()
      </a-button>
    </a-space>
  </div>
</template>

<style scoped></style>
