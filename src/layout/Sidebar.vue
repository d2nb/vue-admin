<script setup>
import { reactive, ref, h } from 'vue'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue'
import logo from '@/assets/logo.svg'

const selectedKeys = ref(['1'])
const openKeys = ref(['sub1'])

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  }
}

const items = reactive([
  getItem('Navigation One', 'sub1', () => h(MailOutlined), [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group')
  ]),
  getItem('Navigation Two', 'sub2', () => h(AppstoreOutlined), [
    getItem('Option 5', '5'),
    getItem('Option 6', '6')
  ]),
  {
    type: 'divider'
  },
  getItem('Navigation Three', 'sub4', () => h(SettingOutlined), [
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
    getItem('Option 9', '9'),
    getItem('Option 10', '10')
  ]),
  getItem('Group', 'grp', null, [getItem('Option 11', '11'), getItem('Option 12', '12')], 'group')
])
</script>

<template>
  <div>
    <div class="relative h-[56px] flex justify-center items-center">
      <img :src="logo" alt="logo" class="w-10" />
      <span class="text-2xl font-bold text-brand_pink ml-2">Jelly</span>
      <!-- <div
        class="absolute top-[50%] right-0 text-lg text-gray-400 cursor-pointer"
        style="transform: translate3d(50%, -50%, 0)"
      >
        <LeftCircleFilled />
      </div> -->
    </div>
    <a-menu
      mode="inline"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      class="side-menu-scroll h-[calc(100vh-56px)] pb-4 overflow-y-scroll"
      :items="items"
    />
  </div>
</template>

<style scoped>
.side-menu-scroll::-webkit-scrollbar {
  display: none;
}
</style>
