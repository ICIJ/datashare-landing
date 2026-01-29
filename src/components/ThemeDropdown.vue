<script setup lang="ts">
import { useColorMode } from 'bootstrap-vue-next'
import { computed, type Component } from 'vue'

import type { Theme } from '@/utils/types.ts'
import ThemeDropdownItem from '@/components/ThemeDropdownItem.vue'
import { THEME } from '@/utils/enum.ts'

import IPhSun from '~icons/ph/sun'
import IPhSunFill from '~icons/ph/sun-fill'
import IPhMoon from '~icons/ph/moon'
import IPhMoonFill from '~icons/ph/moon-fill'
import IPhPaintRoller from '~icons/ph/paint-roller'
import IPhPaintRollerFill from '~icons/ph/paint-roller-fill'

const themes: Record<string, {
  icon: Component
  iconFill: Component
  theme: Theme
  label: string
  title: string
}> = {
  light: {
    icon: IPhSun,
    iconFill: IPhSunFill,
    theme: 'light',
    title: 'Theme Light',
    label: 'Light'
  },
  dark: {
    icon: IPhMoon,
    iconFill: IPhMoonFill,
    theme: 'dark',
    title: 'Theme Dark',
    label: 'Dark'
  },
  auto: {
    icon: IPhPaintRoller,
    iconFill: IPhPaintRollerFill,
    theme: 'auto',
    title: 'Theme Auto',
    label: 'Auto',
  }
}

const mode = useColorMode({ persist: true })
const currentTitle = computed(() => themes[mode.store.value].title)
const currentIcon = computed(() => {
  const themeConfig = themes[mode.store.value]
  return mode.value === THEME.DARK ? themeConfig.iconFill : themeConfig.icon
})

function updateTheme(newTheme: Theme) {
  mode.value = newTheme
}
</script>

<template>
  <b-nav-item-dropdown
    right
  >
    <template #button-content>
      <component
        :is="currentIcon"
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
.nav-link.dropdown-toggle {
  color: var(--bs-action-text-emphasis);

  &:hover {
    color: var(--bs-primary);
  }

  &.show {
    color: var(--bs-primary);
  }
}
</style>
