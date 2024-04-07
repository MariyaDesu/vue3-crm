import { defineStore } from "pinia";
// import { UserInfo } from "@/api/types/userTypes";
import { LoginRequest } from "@/api/types/authTypes";
import { login } from "@/api/authApi";
import { useStorage } from "@vueuse/core";

export const useUserStore = defineStore("user", () => {

  const tokenRef = useStorage("TOKEN", "", sessionStorage);



  function setToken(token: string) {
    tokenRef.value = token;
  }

  async function toLogin(param: LoginRequest) {
    await login(param).then((res:any) => {
      setToken(res.data.token);
      // setUserInfo(res.userInfo);
    });
  }

  function toLogout() {
    // setUserInfo({} as UserInfo);
    setToken("");
    window.location.href = '/login'
  }



  function getToken() {
    return tokenRef.value;
  }

  return { toLogin, toLogout, getToken};
});
