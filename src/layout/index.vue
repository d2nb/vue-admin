<script setup>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'

const year = new Date().getFullYear()
</script>

<template>
  <a-layout class="h-screen">
    <a-layout-sider :width="208" :trigger="null" collapsible class="!bg-white border-r">
      <Sidebar />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="!bg-white !h-14 !leading-none !px-0">
        <Header />
      </a-layout-header>
      <a-layout-content class="grid grid-cols-1 h-full overflow-auto">
        <div class="p-6">
          <RouterView />
        </div>
        <div class="h-12 flex justify-center items-center text-gray-500 mt-auto">
          &copy; {{ year }} 灵匠科技
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
