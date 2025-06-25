<script setup lang="ts">
import { computed, useTemplateRef } from 'vue'

import { useColorMode } from '@/composables/useColorMode.ts'
import { useQueryObserver } from '@/composables/useQueryObserver.ts'

const props = defineProps({
  defaultColorMode: {
    type: String,
    default: 'light'
  },
  src: {
    type: String
  },
  alt: {
    type: String
  },
  height: {
    type: [String, Number]
  },
  width: {
    type: [String, Number]
  },
  imageClass: {
    type: [String, Array, Object]
  }
})

const element = useTemplateRef<HTMLElement>('element')
// @ts-expect-error element is a ref
const { colorMode } = useColorMode(element, props.defaultColorMode)
// @ts-expect-error element is a ref
const { querySelectorAll } = useQueryObserver(element)

const classList = computed(() => {
  return [`image-mode--${colorMode.value}`]
})

const sources = computed(() => {
  // @ts-expect-error access internal values
  return querySelectorAll('.image-mode-source').value.map((source) => source.__exposed__)
})

const source = computed(() => {
  return sources.value.find((source) => source.colorMode === colorMode.value)
})

const defaultSource = computed(() => {
  return sources.value.find((source) => source.colorMode === props.defaultColorMode || !source.colorMode)
})

const src = computed(() => {
  return source.value?.src ?? defaultSource.value?.src ?? props.src
})
</script>

<template>
  <picture ref="element" :class="classList">
    <slot />
    <img :src="src" :alt="alt" :height="height" :width="width" :class="imageClass" />
  </picture>
</template>
