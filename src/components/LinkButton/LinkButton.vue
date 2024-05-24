<script setup>
import { computed } from 'vue'
import { cn } from '@/utils'

const props = defineProps({
  disabled: Boolean
})

const classes = computed(() => {
  return cn(
    'transition p-0 bg-transparent text-brand_blue cursor-pointer hover:text-brand_blue_hover active:text-brand_blue_active',
    {
      'text-gray-400 hover:text-gray-400 active:text-gray-400 cursor-not-allowed': props.disabled
    }
  )
})
</script>

<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>
