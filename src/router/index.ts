import { createWebHistory, createRouter } from "vue-router";
import type { App } from "vue";
// 获取所有路由
import routes from "./routes";

import { useUserStore } from "@/store/modules/user.ts";

const router = createRouter({
  routes,
  // 这里使用历史记录模式
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const isAuthenticated = userStore.getToken() && userStore.getToken() !== "";
  if (isAuthenticated) {
    next();
  } else {
    if (to.name === "Login") {
      next();
    } else {
      next({ name: "Login", query: { redirect: to.fullPath } });
    }
  }
});

export const useRouter = (app: App<Element>): void => {
    app.use(router)
}