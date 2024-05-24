<script setup>
import { reactive } from 'vue'
import { Form } from 'ant-design-vue'
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

const formData = reactive({
  account: undefined,
  name: undefined,
  phone: undefined,
  level: undefined,
  gender: undefined,
  signupTimeRange: undefined
})

const form = Form.useForm(formData)

const handleSearch = async (value) => {
  console.log(value)
}
</script>

<template>
  <SearchForm :form="form" labelWidth="85px" @search="handleSearch">
    <template #form>
      <a-form-item label="客户账号" v-bind="form.validateInfos.account">
        <a-input v-model:value="formData.account" />
      </a-form-item>
      <a-form-item label="客户名称" v-bind="form.validateInfos.name">
        <a-input v-model:value="formData.name" />
      </a-form-item>
      <a-form-item label="绑定手机号" v-bind="form.validateInfos.phone">
        <a-input v-model:value="formData.phone" />
      </a-form-item>
      <a-form-item label="会员等级" v-bind="form.validateInfos.level">
        <a-select v-model:value="formData.level" :options="MEMBER_LEVEL_OPTIONS" />
      </a-form-item>
      <a-form-item label="性别" v-bind="form.validateInfos.gender">
        <a-select v-model:value="formData.gender" :options="GENDER_OPTIONS" />
      </a-form-item>
      <a-form-item label="客户账号" v-bind="form.validateInfos.signupTimeRange">
        <a-range-picker
          v-model:value="formData.signupTimeRange"
          value-format="YYYY-MM-DD"
          class="w-full"
        />
      </a-form-item>
    </template>
  </SearchForm>

  <div class="mt-6 bg-white p-6 rounded-lg">
    <ProTable :columns="columns" :dataSource="tableData">
      <template #bodyCell="{ column, record }">
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
