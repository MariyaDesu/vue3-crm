import { LoginRequest } from './types/authTypes.ts'

import { post } from '@/utils/http/AxiosRequest'

export function login(data: LoginRequest) {
  return post('/user/login', { data }); //测试接口
}
