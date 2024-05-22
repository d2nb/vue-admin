<template>
  <a-layout class="h-screen">
    <a-layout-sider :width="208" :trigger="null" collapsible> menu </a-layout-sider>
    <a-layout>
      <a-layout-header>header</a-layout-header>
      <a-layout-content class="grid grid-cols-1">
        <div>
          <RouterView />
        </div>
        <div class="h-8 flex justify-center items-center text-[#333] mt-auto">
          &copy; 2024 灵匠科技
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
