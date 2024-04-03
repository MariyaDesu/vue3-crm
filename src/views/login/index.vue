<template>
  <div>
    <div class="t-login-header">Tutelary</div>
    <n-card size="large" class="t-login-form">
      <n-h2 style="font-weight: 400">Sign In</n-h2>
      <n-form
        ref="formRef"
        label-placement="left"
        size="large"
        :model="formModel"
        :rules="formRules"
      >
        <n-form-item path="username">
          <n-input
            v-model:value="formModel.username"
            placeholder="Input your username"
          >
            <template #prefix>
              <n-icon size="18" color="#808695">
                <PersonOutline />
              </n-icon>
            </template>
          </n-input>
        </n-form-item>
        <n-form-item path="password">
          <n-input
            v-model:value="formModel.password"
            placeholder="Input your password"
          >
            <template #prefix>
              <n-icon size="18" color="#808695">
                <LockClosedOutline />
              </n-icon>
            </template>
          </n-input>
        </n-form-item>
        <n-form-item>
          <n-button type="primary" size="large" @click="toLogin" block>
            Sign In
          </n-button>
        </n-form-item>
      </n-form>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import { LoginRequest } from "@/api/types/authTypes.js";
import { useUserStore } from "@/store/modules/user";
import { useRouter, useRoute } from "vue-router";

const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const formRef = ref();

const formModel: Ref<LoginRequest> = ref({
  username: "",
  password: "",
});

const formRules = {
  username: { required: true, message: "Please Input Your Username", trigger: "blur" },
  password: { required: true, message: "Please Input Your Password", trigger: "blur" },
};

const toLogin = (e) => {
  e.preventDefault();
  formRef.value.validate(async (errors: any) => {
    // 如果没有校验异常
    if (!errors) {
      await userStore.toLogin(formModel.value);
      window.$notification.success({
        content: "欢迎回来 - " + userStore.getNickName(),
        duration: 2000,
      });
      const redirect = route.query.redirect as string;
      if (redirect) {
        router.replace(redirect);
      } else {
        router.replace("/");
      }
    }
  });
};
</script>

<style scoped lang="scss">
.t-login-header {
  font-size: 50px;
  font-weight: 100;
  margin: 20vh auto 20px;
  text-align: center;
  letter-spacing: 5px;
  opacity: 0.8;
}

.t-login-form {
  padding-bottom: 30px;
}

.n-card {
  margin: 0 auto;
  max-width: 380px;
}
</style>
