<script setup lang="ts">
import { computed } from 'vue'

import { useColorModePersisted } from '@/composables/useColorModePersisted.ts'

defineProps<{ title: string }>()

const { isDark } = useColorModePersisted()

const classList = computed(() => {
  return {
    'bg-darker': isDark.value,
    'bg-light': !isDark.value,
    'border-secondary': isDark.value,
    'border-tertiary': !isDark.value
  }
})
</script>

<template>
  <b-card
    class="datashare-download-card border-1"
    :class="classList"
  >
    <h4 class="text-action-emphasis fs-6">
      {{ title }}
    </h4>
    <p class="text-small text-bg-action-emphasis m-0">
      <slot />
    </p>
  </b-card>
</template>

<style lang="scss">
.datashare-download-card {
  text-wrap: pretty;
  overflow-wrap: break-word;
  hyphens: manual;
  & .text-small {
    font-size: small;
    & ul {
      list-style: none;
      padding: $spacer-xxs 0;
      margin: 0;
      & li {
        margin: 0;
        padding: 0.1em 0;
      }
    }
  }
}
</style>
