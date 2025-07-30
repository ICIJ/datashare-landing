<script setup lang="ts">
import { useColorMode } from 'bootstrap-vue-next'
import { computed } from 'vue'

import type { Theme } from '@/utils/types.ts'

const mode = useColorMode({ persist: true })
const props = defineProps<{ theme: Theme, label: string, icon: string, weight?: string }>()

defineEmits(['update'])

const iconWeight = computed(() => {
  if (props.weight) return props.weight
  return mode.value === 'light' ? 'regular' : 'fill'
})

const isActive = computed(() => {
  return mode.store.value === props.theme
})
</script>

<template>
  <b-dropdown-item
    class="theme-dropdown-item "
    :active="isActive"
    @click="$emit('update',theme)"
  >
    <span class="text-action-emphasis ">
      <phosphor-icon
        :name="icon"
        :weight="iconWeight"
      />
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
