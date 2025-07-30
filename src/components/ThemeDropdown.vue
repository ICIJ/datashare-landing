<script setup lang="ts">
import { useColorMode } from 'bootstrap-vue-next'
import { computed } from 'vue'

import type { Theme } from '@/utils/types.ts'
import ThemeDropdownItem from '@/components/ThemeDropdownItem.vue'
import { THEME } from '@/utils/enum.ts'

const themes: Record<string, { icon: string
  theme: Theme
  label: string
  title: string
  weight?: string }> = {
  light: {
    icon: 'sun',
    theme: 'light',
    title: 'Theme Light',
    label: 'Light'
  },
  dark: {
    icon: 'moon',
    theme: 'dark',
    title: 'Theme Dark',
    label: 'Dark'
  },
  auto: {
    icon: 'paint-roller',
    theme: 'auto',
    title: 'Theme Auto',
    label: 'Auto',
  }
}

const mode = useColorMode({ persist: true })
const currentTitle = computed(() => themes[mode.store.value].title)
const currentIcon = computed(() => themes[mode.store.value].icon)
const iconWeight = computed(() => mode.value === THEME.DARK ? 'fill' : 'regular')

function updateTheme(newTheme: Theme) {
  mode.value = newTheme
}
</script>

<template>
  <b-nav-item-dropdown
    right
  >
    <template #button-content>
      <phosphor-icon
        :name="currentIcon"
        :weight="iconWeight"
        :title="currentTitle"
      />
    </template>
    <theme-dropdown-item
      v-bind="themes.light"
      @update="updateTheme"
    />
    <theme-dropdown-item
      v-bind="themes.dark"
      @update="updateTheme"
    />
    <theme-dropdown-item
      v-bind="themes.auto"
      @update="updateTheme"
    />
  </b-nav-item-dropdown>
</template>

<style lang="scss">
.nav-link.dropdown-toggle{
  color: var(--bs-action-text-emphasis);

  &:hover {
    color:var(--bs-primary);
  }

  &.show{

    color:var(--bs-primary);
  }
}
</style>
