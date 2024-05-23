<script setup>
import { useRouter } from 'vue-router'
import { GridBackground } from '@/components'
import logo from '@/assets/logo.svg'

const router = useRouter()

const handleLogin = () => {
  router.push('/dashboard')
}
</script>

<template>
  <GridBackground>
    <div
      class="rounded-xl divide-y divide-gray-200 ring-1 ring-gray-200 shadow w-[400px] bg-white/75 backdrop-blur"
    >
      <div class="p-6">
        <img :src="logo" alt="logo" class="block w-8 mx-auto mb-2" />
        <div class="text-center text-2xl text-gray-900 font-bold">Welcome back</div>
        <div class="text-sm text-gray-500 mt-2 text-center">
          Don't have an account?
          <span class="text-brand_blue cursor-pointer">Sign up</span>
        </div>
        <a-form class="mt-6" layout="vertical">
          <a-form-item label="Email">
            <a-input placeholder="Enter your email" />
          </a-form-item>
          <a-form-item label="Password">
            <a-input placeholder="Enter your password" />
          </a-form-item>
        </a-form>
        <a-button class="mt-6" type="primary" block shape="round" @click="handleLogin">
          Continue
          <ArrowRightOutlined />
        </a-button>
        <a-divider>
          <span class="text-xs text-gray-500">or</span>
        </a-divider>
        <a-button block shape="round">
          <template #icon>
            <GithubOutlined class="text-base" />
          </template>
          Continue with Github
        </a-button>
        <div class="text-sm text-gray-500 mt-6 text-center">
          By signing in, you agree to our
          <span class="text-brand_blue cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </div>
  </GridBackground>
</template>
