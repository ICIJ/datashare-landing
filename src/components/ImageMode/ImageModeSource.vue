<script setup lang="ts">
import { useTemplateRef, getCurrentInstance, onMounted } from 'vue'

import type { Theme } from '@/utils/types.ts'

const element = useTemplateRef('element')

const props = withDefaults(defineProps< {src:string,colorMode?:Theme}>(),{colorMode: 'light'})

onMounted(() => {
  // @ts-expect-error access internal values
  const { exposed } = getCurrentInstance()
  // @ts-expect-error access internal values
  element.value.__exposed__ = exposed
})

defineExpose({ ...props })
</script>

<template>
  <source ref="element" class="image-mode-source" :src="src">
</template>
