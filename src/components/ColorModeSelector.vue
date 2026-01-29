<script setup lang="ts">
import { computed } from 'vue'

import { THEME } from '@/utils/enum.ts'
import type { Theme } from '@/utils/types.ts'

import IPhSun from '~icons/ph/sun'
import IPhSunFill from '~icons/ph/sun-fill'
import IPhMoon from '~icons/ph/moon'
import IPhMoonFill from '~icons/ph/moon-fill'

const colorMode = defineModel<Theme>({ default: THEME.LIGHT })
const isDark = computed(() => colorMode.value === THEME.DARK)
const lightIcon = computed(() => isDark.value ? IPhSun : IPhSunFill)
const darkIcon = computed(() => isDark.value ? IPhMoonFill : IPhMoon)
</script>

<template>
  <div class="color-mode-selector text-secondary-emphasis text-center">
    <b-form-radio-group v-model="colorMode">
      <b-form-radio
        value="light"
        class="color-mode-selector__radio"
      >
        <span class="d-inline-flex align-items-center gap-1">
          <component :is="lightIcon" />
          Light mode
        </span>
      </b-form-radio>
      <b-form-radio
        value="dark"
        class="color-mode-selector__radio"
      >
        <span class="d-inline-flex align-items-center gap-1">
          <component :is="darkIcon" />
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
