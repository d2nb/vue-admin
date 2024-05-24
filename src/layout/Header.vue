<script setup>
import { storage } from '@/utils'

const handleLogout = () => {
  storage.clear()
  setTimeout(() => {
    location.href = '/login'
  }, 0)
}
</script>

<template>
  <div class="flex items-center h-full px-6 border-b">
    <a-breadcrumb>
      <a-breadcrumb-item><HomeOutlined /></a-breadcrumb-item>
      <a-breadcrumb-item>Dashboard</a-breadcrumb-item>
    </a-breadcrumb>

    <a-dropdown>
      <div class="ml-auto flex items-center cursor-pointer">
        <a-avatar size="small" class="bg-[#fff0f2] text-brand_pink">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
        <span class="ml-2 text-gray-500">小明</span>
      </div>

      <template #overlay>
        <a-menu>
          <a-menu-item>个人中心</a-menu-item>
          <a-menu-item @click="handleLogout">退出登录</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
