import { defineStore } from "pinia";
import { UserInfo } from "@/api/types/userTypes";
import { LoginRequest } from "@/api/types/authTypes";
import { login } from "@/api/authApi";
import { useStorage } from "@vueuse/core";

export const useUserStore = defineStore("user", () => {
  const userInfoRef = useStorage("USER_INFO", {} as UserInfo, sessionStorage);
  const tokenRef = useStorage("TOKEN", "", sessionStorage);

  function setUserInfo(userInfo: UserInfo) {
    userInfoRef.value = userInfo;
  }

  function setToken(token: string) {
    tokenRef.value = token;
  }

  async function toLogin(param: LoginRequest) {
    await login(param).then((res) => {
      setToken(res.token);
      setUserInfo(res.userInfo);
    });
  }

  function toLogout() {
    setUserInfo({} as UserInfo);
    setToken("");
    window.location.href = '/login'
  }

  function getUserId() {
    return userInfoRef.value.userId;
  }

  function getUsername() {
    return userInfoRef.value.username;
  }

  function getNickName() {
    return userInfoRef.value.nickName;
  }

  function getToken() {
    return tokenRef.value;
  }

  return { toLogin, toLogout, getToken, getUserId, getUsername, getNickName };
});
