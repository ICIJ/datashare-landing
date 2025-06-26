<script setup lang="ts">
import { PhGithubLogo, PhStudent } from '@phosphor-icons/vue'
import { PhosphorIcon } from '@icij/murmur-next'
import { ref, computed } from 'vue'
import { useColorMode } from 'bootstrap-vue-next'

import TabGroupNavigation from '@/components/TabGroup/TabGroupNavigation/TabGroupNavigation.vue'
import TabGroupNavigationEntry from '@/components/TabGroup/TabGroupNavigation/TabGroupNavigationEntry.vue'
import { DEFAULT_ICON, useOs } from '@/composables/useOs.ts'
import AppSection from '@/components/AppSection.vue'
import ImageModeSource from '@/components/ImageMode/ImageModeSource.vue'
import ImageMode from '@/components/ImageMode/ImageMode.vue'
import { THEME } from '@/utils/enum.ts'
import ThemeDropdown from '@/components/ThemeDropdown.vue'
const { detectedOs, osDescription, isCompatible } = useOs()
const weight = ref<'regular' | 'fill'>('regular')
const variant = ref('body')
function toggleIcijLink() {
  variant.value = variant.value === 'body' ? 'primary' : 'body'
  weight.value = weight.value === 'regular' ? 'fill' : 'regular'
}
const osIcon = computed(() => {
  return isCompatible.value ? osDescription[detectedOs].icon : DEFAULT_ICON
})
const mode = useColorMode()
const classList = computed(() => {
  let classes = 'py-2 mb-1 '
  return (classes +=
    mode.value === THEME.DARK ? 'bg-action-subtle text-bg-action' : 'bg-action text-bg-action border-0 ')
})
</script>

<template>
  <app-section class="bg-body fixed-top p-0 border-bottom" nav>
    <b-navbar
      toggleable="md"
      class="app-nav-bar"
    >
      <b-navbar-brand
        class="navbar-brand"
        href="#"
      >
        <image-mode class="d-inline-block align-text-bottom">
          <image-mode-source
            src="@/assets/illustrations/Datashare_Logo_LightMode.svg"
            alt="Datashare logo"
          />
          <image-mode-source
            src="@/assets/illustrations/Datashare_Logo_DarkMode.svg"
            alt="Datashare logo"
            color-mode="dark"
          />
        </image-mode>
      </b-navbar-brand>
      <b-navbar-toggle
        target="nav-collapse"
        :class="classList"
      >
        <template #default>
          <phosphor-icon name="list" />
        </template>
      </b-navbar-toggle>
      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <tab-group-navigation class="pt-1">
          <tab-group-navigation-entry href="#download">
            <phosphor-icon :name="osIcon" />Download
          </tab-group-navigation-entry>
          <tab-group-navigation-entry href="#demo">
            <PhEyes weight="fill" />Demo
          </tab-group-navigation-entry>
          <tab-group-navigation-entry href="#learn">
            <PhStudent />Learn
          </tab-group-navigation-entry>
          <tab-group-navigation-entry href="#contribute">
            <PhGithubLogo />Contribute
          </tab-group-navigation-entry>
          <tab-group-navigation-entry
            href="https://icij.org/donate"
            rel="noreferrer noopener"
            target="_blank"
            class="text-nowrap"
            @mouseenter="toggleIcijLink"
            @mouseleave="toggleIcijLink"
          >
            <phosphor-icon
              name="hand-heart"
              :weight="weight"
              :variant="variant"
            />It's free! Support
            ICIJ
          </tab-group-navigation-entry>
        </tab-group-navigation>
        <b-navbar-nav class="ms-auto mb-2 mb-lg-0">
          <theme-dropdown />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </app-section>
</template>
<style lang="scss">
.app-nav-bar {
  & .collapse.navbar-collapse {
    &.show {
      padding-top: 0.8em;
    }
    &:not(.show) {
      padding-left: 0.8em;
    }
  }
  & .tab-group-navigation-entry {
    & .nav-link {
      --color: var(--bs-action-text-emphasis);
    }
  }
}
</style>
