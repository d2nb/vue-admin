<script setup>
import { RouterView } from 'vue-router'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')
</script>

<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#FF6699'
      }
    }"
    :locale="zhCN"
  >
    <RouterView />
  </a-config-provider>
</template>
