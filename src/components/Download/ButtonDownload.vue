<script setup lang="ts">
import { computed } from 'vue'


import { useColorModePersisted } from '@/composables/useColorModePersisted.ts'

defineProps({
  asset: { type: String },
  size: { type: String },
  icon: { type: String },
  label: { type: String }
})
const {isDark} = useColorModePersisted()
const variant = computed(() => (isDark.value ?  'light':'action'))
</script>

<template>
  <button-icon
    class="button-download"
    :class="{ 'text-action': isDark }"
    :variant="variant"
    :href="asset"
    :size="size"
    :icon-left="icon"
  >
    <slot>{{ label }}</slot>
  </button-icon>
</template>

<style scoped lang="scss">
.button-download {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &.btn-sm {
    padding: $spacer-sm $spacer-md; /* Adjust padding for small buttons */
  }

  &.btn-md {
    padding: $spacer-md $spacer-lg; /* Adjust padding for medium buttons */
  }

  &.btn-lg {
    padding: $spacer-lg $spacer-xl; /* Adjust padding for large buttons */
  }
}
</style>
