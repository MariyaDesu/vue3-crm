import { RouteRecord } from '@/router/type'

const loginRoutes: RouteRecord[] = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      hidden: true
    },
    component: () => import('@/views/login/index.vue')
  }
]

export default loginRoutes