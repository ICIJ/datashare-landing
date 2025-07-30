<script setup lang="ts">
import { computed } from 'vue'

import TabGroupTitle from '../TabGroupTitle.vue'

interface TabGroupNavigationProps {
  manual?: boolean
  active?: boolean
  icon?: string | string[] | any
  count?: number
  activeClass?: string
  disabled?: boolean
  exactActiveClass?: string
  href: string
  rel?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  to?: string | any
}

const props = defineProps<TabGroupNavigationProps>()

const classList = computed(() => {
  return {
    'tab-group-navigation-entry--active': props.active,
    'tab-group-navigation-entry--manual': props.manual
  }
})
</script>

<template>
  <b-nav-item
    class="tab-group-navigation-entry"
    :class="classList"
    :active="active"
    :active-class="activeClass"
    :exact-active-class="exactActiveClass"
    :disabled="disabled"
    :href="href"
    :rel="rel"
    :target="target"
    :to="to"
  >
    <tab-group-title
      :icon="icon"
      :count="count"
    >
      <slot />
    </tab-group-title>
  </b-nav-item>
</template>
