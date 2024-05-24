import { fetcher } from '@/utils'

// 登录
export const login = (data) => fetcher.post('/login', data)
