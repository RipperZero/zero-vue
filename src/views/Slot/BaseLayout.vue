<script lang="ts" setup></script>

<template>
  <div class="container">
    <header>
      <slot name="header" :text="'abc'" :count="666">Header</slot>
    </header>
    <main>
      <slot>Main</slot>
    </main>
    <footer class="text-slate-600 text-sm">
      <slot name="footer">Footer</slot>
    </footer>
  </div>
</template>

<style scoped></style>
