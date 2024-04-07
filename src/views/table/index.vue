<script setup lang="ts">
// 导出指定模块.

import { useUserStore } from "@/store/modules/user";
import { onMounted } from 'vue';
import { userRequest } from '@/api/userApi';
const userStore = useUserStore();
// 获取
userStore.getToken()

onMounted(() => {
  userRequest({}).then((res: any) => {
    console.log('res: ', res)
  })
})
</script>
