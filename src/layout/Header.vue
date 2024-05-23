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
        <span class="ml-2 text-gray-500">Tony</span>
      </div>

      <template #overlay>
        <a-menu>
          <a-menu-item>个人中心</a-menu-item>
          <a-menu-item>退出登录</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
