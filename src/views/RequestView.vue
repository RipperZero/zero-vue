<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from "vue";
import { axiosInstance } from "@/utils";

type ResObj = {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  support: {
    url: string;
    text: string;
  };
};

const userId = ref(1);

const loading = ref(false);
const userInfo = ref<ResObj["data"] | undefined>(undefined);

const getUserInfoById = async () => {
  userInfo.value = undefined;
  loading.value = true;

  const res = (await axiosInstance.get(`/api/users/${userId.value}`)) as ResObj;

  loading.value = false;
  userInfo.value = res.data;
};

const unwatch = watch(userId, (_value, _oldValue) => {
  getUserInfoById();
});

onMounted(() => {
  getUserInfoById();
});

// watchEffect(() => {
//   getUserInfoById();
// });
</script>

<template>
  <div>
    <p>User Id: {{ userId }}</p>
    <button @click="userId++" :disabled="loading">Query next user</button>
    <button @click="unwatch">Unwatch</button>

    <p v-if="loading">Loading...</p>
    <!-- <p v-if="userInfo === undefined">Loading...</p> -->
    <!-- <pre v-else>{{ userInfo }}</pre> -->
    <pre v-if="!loading">{{ userInfo }}</pre>
  </div>
</template>
