<script setup>
import { reactive, computed, toRaw } from 'vue'
import { Form } from 'ant-design-vue'

const props = defineProps({
  schema: {
    type: Array,
    required: true
  },
  labelWidth: {
    type: String,
    default: '75px'
  }
})

const emit = defineEmits(['search', 'reset'])

const span = computed(() => {
  return (4 - (props.schema.length % 4)) * 6
})

const formData = reactive({})

props.schema.forEach((item) => {
  formData[item.key] = undefined
})

const { validate, resetFields, validateInfos } = Form.useForm(formData)

const handleReset = () => {
  resetFields()
  emit('reset')
}

const handleSearch = async () => {
  try {
    await validate()
    const value = Object.keys(toRaw(formData)).reduce((acc, key) => {
      acc[key] = formData[key] === '' ? undefined : formData[key]
      return acc
    }, {})

    emit('search', value)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="bg-white p-6 pb-0 rounded-lg">
    <a-form :labelCol="{ style: { width: props.labelWidth } }">
      <a-row class="w-full">
        <a-col v-for="item in props.schema" :key="item.key" :span="6">
          <a-form-item :label="item.title" class="px-2" v-bind="validateInfos[item.key]">
            <component :is="item.widget" v-model:value="formData[item.key]" />
          </a-form-item>
        </a-col>
        <a-col :span="span" class="text-right px-2">
          <a-space class="mb-6">
            <a-button type="primary" @click="handleSearch">查询</a-button>
            <a-button @click="handleReset">重置</a-button>
          </a-space>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
