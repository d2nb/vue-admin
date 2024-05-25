<script setup lang="jsx">
import { reactive } from 'vue'
import { SearchForm, ProTable, LinkButton } from '@/components'
import { MEMBER_LEVEL_OPTIONS, GENDER_OPTIONS } from '@/constant'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id'
  },
  {
    title: '客户账号',
    dataIndex: 'xxx'
  },
  {
    title: '客户名称',
    dataIndex: 'xxx'
  },
  {
    title: '客户性别',
    dataIndex: 'xxx'
  },
  {
    title: '会员等级',
    dataIndex: 'xxx'
  },
  {
    title: '代币余额',
    dataIndex: 'xxx'
  },
  {
    title: '积分余额',
    dataIndex: 'xxx'
  },
  {
    title: '代币累计充值',
    dataIndex: 'xxx'
  },
  {
    title: '会员累计充值',
    dataIndex: 'xxx'
  },
  {
    title: '累计邀请',
    dataIndex: 'xxx'
  },
  {
    title: '累计积分',
    dataIndex: 'xxx'
  },
  {
    title: 'AI数量',
    dataIndex: 'xxx'
  },
  {
    title: '图片数量',
    dataIndex: 'xxx'
  },
  {
    title: '注册时间',
    dataIndex: 'xxx'
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: 120
  }
]

const tableData = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  }
]

const schema = reactive([
  {
    key: 'account',
    title: '客户账号',
    widget: () => <a-input />
  },
  {
    key: 'name',
    title: '客户名称',
    widget: () => <a-input />
  },
  {
    key: 'phone',
    title: '绑定手机号',
    widget: () => <a-input />
  },
  {
    key: 'level',
    title: '会员等级',
    widget: () => <a-select allowClear options={MEMBER_LEVEL_OPTIONS} />
  },
  {
    key: 'gender',
    title: '性别',
    widget: () => <a-select allowClear options={GENDER_OPTIONS} />
  },
  {
    key: 'signupTimeRange',
    title: '注册时间',
    widget: () => <a-range-picker value-format="YYYY-MM-DD" class="w-full" />
  }
])

const handleSearch = async (value) => {
  console.log(value)
}
</script>

<template>
  <SearchForm :schema="schema" labelWidth="85px" @search="handleSearch" />

  <div class="mt-6 bg-white p-6 rounded-lg">
    <ProTable :columns="columns" :dataSource="tableData">
      <template #bodyCell="{ column }">
        <template v-if="column.dataIndex === 'action'">
          <a-space size="middle">
            <LinkButton>查看</LinkButton>
            <LinkButton disabled>编辑</LinkButton>
          </a-space>
        </template>
      </template>
    </ProTable>
  </div>
</template>
