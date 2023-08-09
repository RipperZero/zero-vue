<script lang="ts" setup>
import { onMounted, ref, withDefaults } from "vue";
import { axiosInstance } from "@/utils";

const props = withDefaults(
  defineProps<{
    apiUrl: string;
    page?: number;
  }>(),
  {
    page: 1,
  },
);

type ResObj = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }[];
  support: {
    url: string;
    text: string;
  };
};

const loading = ref(false);
const page = ref(props.page);
const userInfoList = ref<ResObj["data"]>([]);

const getUserInfoList = async () => {
  userInfoList.value = [];
  loading.value = true;

  const res = (await axiosInstance.get(props.apiUrl, {
    page: page.value,
  })) as ResObj;

  loading.value = false;
  userInfoList.value = res.data;
};

const handleClickPre = () => {
  if (page.value === 1) {
    return;
  }

  page.value--;
  getUserInfoList();
};

const handleClickNext = () => {
  page.value++;
  getUserInfoList();
};

onMounted(() => {
  getUserInfoList();
});
</script>

<template>
  <div>
    <button :disabled="loading" @click="handleClickPre">Pre</button>
    <span> Page: {{ page }} </span>
    <button :disabled="loading" @click="handleClickNext">Next</button>
    <ul>
      <li v-if="loading">Loading...</li>
      <li v-for="userInfo in userInfoList">
        <slot name="userInfo" :userInfo="userInfo"></slot>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 5px;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
}
li {
  padding: 5px 20px;
  margin: 10px;
  background: #fff;
}
</style>
