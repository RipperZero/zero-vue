<script lang="ts" setup></script>

<template>
  <div class="container">
    <header>
      <slot name="header" :text="'abc'" :count="666">Header</slot>
    </header>
    <main>
      <slot>Main</slot>
    </main>
    <footer>
      <slot name="footer">Footer</slot>
    </footer>
  </div>
</template>

<style scoped>
footer {
  border-top: 1px solid #ccc;
  color: #666;
  font-size: 0.8em;
}
</style>
