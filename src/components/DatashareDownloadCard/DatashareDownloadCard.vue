<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from 'bootstrap-vue-next'
defineProps<{title:string}>()
const mode = useColorMode()

const isDark = computed(() => {
  return mode.value === 'dark' 
})
const cardBg = computed(() => {
  return isDark.value ? 'bg-darker' : 'bg-light'
})
const cardBorder = computed(() => {
  return isDark.value ? 'border-secondary' : 'border-tertiary'
})
const classList = computed(() => {
  return `datashare-download-card border-1 ${cardBorder.value} ${cardBg.value}`
})
</script>

<template>
  <b-card :class="classList">
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
