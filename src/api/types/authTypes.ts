import { UserInfo } from './userTypes.ts'
export interface LoginRequest {
  username: string,
  password: string
}

export interface LoginResponse {
  userInfo: UserInfo,
  token: string
}