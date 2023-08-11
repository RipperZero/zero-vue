<!-- 这个示例会通过 GitHub 的 API 获取最新的 Vue.js 提交信息并将其展示为列表。
 你可以在两个分支之间切换。 -->
<script setup lang="ts">
import { axiosInstance } from "@/utils";
import { onMounted, ref, watch, watchEffect } from "vue";

type Commit = {
  sha: string;
  node_id: string;
  commit: {
    author: {
      name: string;
      email: string;
      date: Date;
    };
    committer: { name: string; email: string; date: Date };
    message: string;
    tree: { sha: string; url: string };
    url: string;
    comment_count: number;
    verification: {
      verified: boolean;
      reason: string;
      signature: string;
      payload: string;
    };
  };
  url: string;
  html_url: string;
  comments_url: string;
  author: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  committer: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  parents: {
    sha: string;
    url: string;
    html_url: string;
  }[];
};
type ResObj = Commit[];

const API_URL = `https://api.github.com`;
const BRANCHES = ["main", "v2-compat"];

const currentBranch = ref(BRANCHES[0]);
const loading = ref(false);
const commits = ref<ResObj>([]);

const getCommitsByBranch = async () => {
  loading.value = true;
  axiosInstance
    .get(
      "/repos/vuejs/core/commits",
      {
        per_page: 3,
        sha: currentBranch.value,
      },
      {
        baseURL: API_URL,
      },
    )
    .then((res) => {
      commits.value = res as unknown as ResObj;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loading.value = false;
    });
};

const truncate = (value: string) => {
  const newline = value.indexOf("\n");
  return newline > 0 ? value.slice(0, newline) : value;
};

const formatDate = (value: string) => {
  return value.replace(/T|Z/g, " ");
};

// watchEffect(() => {
//   getCommitsByBranch();
// });

watch(currentBranch, () => {
  getCommitsByBranch();
});

onMounted(() => {
  getCommitsByBranch();
});
</script>

<template>
  <div>
    <a-typography-title>Latest Vue Core Commits</a-typography-title>
    <a-radio-group v-model:value="currentBranch" :options="BRANCHES" />

    <a-typography-text strong style="display: block"
      >vuejs/vue@{{ currentBranch }}</a-typography-text
    >
    <a-spin :spinning="loading">
      <ul>
        <li v-for="{ html_url, sha, author, commit } in commits">
          <a :href="html_url" target="_blank" class="commit">{{
            sha.slice(0, 7)
          }}</a>
          <br />
          - <span class="message">{{ truncate(commit.message) }}</span
          ><br />
          by
          <span class="font-bold">
            <a :href="author.html_url" target="_blank">{{
              commit.author.name
            }}</a>
          </span>
          at
          <span class="font-bold">{{
            formatDate(commit.author.date.toString())
          }}</span>
        </li>
      </ul></a-spin
    >
  </div>
</template>

<style scoped>
li {
  /* line-height: 1.5em;
  margin-bottom: 20px; */
  @apply leading-6 mb-5;
}
</style>
