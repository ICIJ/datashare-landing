<script setup lang="ts">
import { useTemplateRef, getCurrentInstance, onMounted } from 'vue'

const element = useTemplateRef('element')

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  colorMode: {
    type: String,
    default: 'light'
  }
})

onMounted(() => {
  // @ts-expect-error access internal values
  const { exposed } = getCurrentInstance()
  // @ts-expect-error access internal values
  element.value.__exposed__ = exposed
})

defineExpose({ ...props })
</script>

<template>
  <source ref="element" class="image-mode-source" :src="src" />
</template>
