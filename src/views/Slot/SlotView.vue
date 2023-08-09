<script lang="ts" setup>
import BaseLayout from "./BaseLayout.vue";
import MouseTracker from "./MouseTracker.vue";
import UserList from "./UserList.vue";
</script>

<template>
  <div>
    <BaseLayout>
      <template #header="{ count, text }">
        <h1>Here might be a page title</h1>
        {{ text }} {{ count }}
      </template>

      <!-- <template #default> -->
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
      <!-- </template> -->

      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </BaseLayout>
    <MouseTracker v-slot="{ XPosition, YPosition }">
      Mouse is at: {{ XPosition }}, {{ YPosition }}
    </MouseTracker>
    <UserList :api-url="'/api/users'">
      <template #userInfo="{ userInfo }">
        <div>
          <p>User Id:{{ userInfo.id }}</p>
          <img :src="userInfo.avatar" alt="Avatar" />
          <p class="meta">
            {{ userInfo.first_name }} - {{ userInfo.last_name }}
          </p>
        </div>
      </template>
    </UserList>
  </div>
</template>

<style scoped>
.meta {
  font-size: 0.8em;
  color: #42b883;
}
</style>
