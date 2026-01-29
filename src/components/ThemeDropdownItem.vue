<script setup lang="ts">
import { useColorMode } from 'bootstrap-vue-next'
import { computed, type Component } from 'vue'

import type { Theme } from '@/utils/types.ts'

const mode = useColorMode({ persist: true })
const props = defineProps<{
  theme: Theme
  label: string
  icon: Component
  iconFill: Component
}>()

defineEmits(['update'])

const currentIcon = computed(() => {
  return mode.value === 'light' ? props.icon : props.iconFill
})

const isActive = computed(() => {
  return mode.store.value === props.theme
})
</script>

<template>
  <b-dropdown-item
    class="theme-dropdown-item "
    :active="isActive"
    @click="$emit('update', theme)"
  >
    <span class="text-action-emphasis ">
      <component :is="currentIcon" />
      {{ label }}
    </span>
  </b-dropdown-item>
</template>

<style lang="scss">
.theme-dropdown-item{
  .dropdown-item.active,.dropdown-item:active {
    color: var(--bs-dropdown-link-hover-color);
    text-decoration: none;
    background-color: var(--bs-dropdown-link-hover-bg)
  }
}
</style>
