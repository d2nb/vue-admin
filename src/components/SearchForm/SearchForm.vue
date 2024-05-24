<script setup>
import { useSlots, computed, toRaw } from 'vue'

const props = defineProps({
  form: {
    type: Object,
    required: true
  },
  labelWidth: {
    type: String,
    default: '75px'
  }
})

const emit = defineEmits(['search', 'reset'])

const slots = useSlots()

const span = computed(() => {
  const fields = slots.form()
  return (4 - (fields.length % 4)) * 6
})

const handleReset = () => {
  props.form.resetFields()
  emit('reset')
}

const handleSearch = async () => {
  try {
    await props.form.validate()

    const value = Object.keys(toRaw(props.form.modelRef)).reduce((acc, key) => {
      acc[key] = props.form.modelRef[key] === '' ? undefined : props.form.modelRef[key]
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
        <a-col v-for="item in $slots.form()" :key="item.key" :span="6">
          <component :is="item" class="px-2" />
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
