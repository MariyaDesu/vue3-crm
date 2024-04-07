import { get } from '@/utils/http/AxiosRequest'
import type { UserRequest } from './types/userTypes'

export  function userRequest(params: UserRequest) {
   return get('/users', { params }); //测试接口
}
