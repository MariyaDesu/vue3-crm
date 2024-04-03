import { LoginRequest, LoginResponse } from './types/authTypes.ts'
import request from '@/utils/http'

export const login = (data: LoginRequest) => {
  return request.post<LoginRequest, LoginResponse>('auth/login', data)
}