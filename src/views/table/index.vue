<script setup lang="ts">
import { userPageQuery, userAdd } from "@/api/userApi";
import request from '@/utils/http'
const showMessage = () => {
  window.$message.success("Show Message Success");
};
const handleUserPageQuery = () => {
  userPageQuery({
    pageIndex: 1,
    pageSize: 10,
  })
    .then((res) => {
      console.log("res ===> ", res);
    })
    .catch((err) => {
      console.log("err ===> ", err);
    });
};

const handleUserAdd = () => {
  userAdd({
    username: 'system',
    nickName: '管理员'
  })
}

const notLoginRequest = () => {
  request.post('/auth/notLogin')
}

</script>

<template>
  <common-page>
    <div>
      <h3>Table</h3>
      <router-link to="/dashboard">Go to Dashboard</router-link>
      <n-button @click="showMessage">Show Message</n-button>
      <n-button @click="handleUserPageQuery">用户分页查询</n-button>
      <n-button @click="handleUserAdd">异常请求</n-button>
    </div>
    <div>
      <n-button @click="notLoginRequest">未登录请求</n-button>
    </div>
  </common-page>
</template>

<style scoped></style>
