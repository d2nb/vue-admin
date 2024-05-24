<script setup>
import { reactive, toRaw } from 'vue'
import { Form } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { GridBackground } from '@/components'
import { storage } from '@/utils'
import appConfig from '@/config'
import { login } from '@/api'

const router = useRouter()

const formData = reactive({
  login_type: 1,
  user_name: undefined,
  password: undefined,
  mfa_code: undefined
})

const rules = reactive({
  user_name: [
    {
      required: true,
      message: '请输入账号'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码'
    }
  ]
  // mfa_code: [
  //   {
  //     required: true,
  //     message: '请输入验证码'
  //   }
  // ]
})

const { validate, validateInfos } = Form.useForm(formData, rules)

const handleLogin = async () => {
  try {
    await validate()
    const { data } = await login(toRaw(formData))
    storage.set(appConfig.TOKEN_KEY, data.session)
    storage.set(appConfig.USER_KEY, data.userInfo)
    router.push('/dashboard')
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <GridBackground>
    <div
      class="rounded-xl divide-y divide-gray-200 ring-1 ring-gray-200 shadow w-[400px] bg-white/75 backdrop-blur"
    >
      <div class="p-6">
        <div class="text-3xl text-gray-900 font-bold mb-2">Hello Jelly</div>
        <div class="text-sm text-gray-500 mb-6">心灵伴侣，不止在梦里</div>
        <a-form>
          <a-form-item v-bind="validateInfos.user_name">
            <a-input v-model:value="formData.user_name" placeholder="请输入账号" />
          </a-form-item>
          <a-form-item v-bind="validateInfos.password">
            <a-input-password v-model:value="formData.password" placeholder="请输入密码" />
          </a-form-item>
          <!-- <a-form-item v-bind="validateInfos.mfa_code">
            <a-input v-model:value="formData.mfa_code" placeholder="请输入验证码" />
          </a-form-item> -->
          <a-form-item class="text-right !mb-0">
            <a-button html-type="submit" type="primary" shape="round" @click="handleLogin">
              <span>登录</span>
              <RightOutlined />
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </GridBackground>
</template>
