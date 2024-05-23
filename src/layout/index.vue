<script setup>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
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
      <a-layout-content class="grid grid-cols-1">
        <div class="p-6">
          <RouterView />
        </div>
        <div class="h-8 flex justify-center items-center text-gray-500 mt-auto">
          &copy; 2024 友感技术
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
