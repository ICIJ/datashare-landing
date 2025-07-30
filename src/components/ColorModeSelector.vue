<script setup lang="ts">
import { computed } from 'vue'

import { THEME } from '@/utils/enum.ts'
import type { Theme } from '@/utils/types.ts'

const colorMode = defineModel<Theme>({ default: THEME.LIGHT })
const isDark = computed(() => colorMode.value === THEME.DARK)
const isLightActive = computed(() => !isDark.value ? 'fill' : 'regular')
const isDarkActive = computed(() => isDark.value ? 'fill' : 'regular')
</script>

<template>
  <div class="color-mode-selector text-secondary-emphasis text-center">
    <b-form-radio-group v-model="colorMode">
      <b-form-radio
        value="light"
        class="color-mode-selector__radio"
      >
        <span class="d-inline-flex align-items-center gap-1">
          <phosphor-icon
            name="sun"
            :weight="isLightActive"
          />
          Light mode
        </span>
      </b-form-radio>
      <b-form-radio
        value="dark"
        class="color-mode-selector__radio"
      >
        <span class="d-inline-flex align-items-center gap-1">
          <phosphor-icon
            name="moon"
            :weight="isDarkActive"
          />
          Dark mode
        </span>
      </b-form-radio>
    </b-form-radio-group>
  </div>
</template>

<style lang="scss">
.color-mode-selector {
  & input[type="radio"]:checked + label {
    color: $action;
  }
}
</style>
