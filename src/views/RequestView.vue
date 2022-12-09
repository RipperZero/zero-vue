<script setup lang="ts">
import { axiosInstance } from "@/utils";
import { onMounted, ref, watch } from "vue";

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
  loading.value = true;
  const res = (await axiosInstance.get(`/api/users/${userId.value}`)) as ResObj;

  loading.value = false;
  userInfo.value = res.data;
};

watch(userId, getUserInfoById);

onMounted(() => {
  getUserInfoById();
});
</script>

<template>
  <div>
    <p>User Id: {{ userId }}</p>
    <button @click="userId++" :disabled="loading">Query next user</button>

    <p v-if="!userInfo">Loading...</p>
    <!-- <p v-if="userInfo === undefined">Loading...</p> -->
    <!-- <pre v-else>{{ userInfo }}</pre> -->
    <pre v-if="userInfo">{{ userInfo }}</pre>
  </div>
</template>
