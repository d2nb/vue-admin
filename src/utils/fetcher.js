import axios from 'axios'
import router from '@/router'
import appConfig from '@/config'
import { storage } from '@/utils'
import { message } from 'ant-design-vue'

const fetcher = axios.create({
  baseURL: appConfig.API_URL,
  timeout: 8000
})

fetcher.interceptors.request.use((config) => {
  const token = storage.get(appConfig.TOKEN_KEY)

  if (token) {
    config.headers.Authorization = token
  }

  return config
})

fetcher.interceptors.response.use(({ data }) => {
  if (data.code === 0) {
    return data
  }

  // 错误处理
  switch (data.code) {
    case 40000:
      storage.clear()
      router.push('/login')
      break
  }

  message.error(data.msg)
  return Promise.reject(data)
})

export default fetcher
