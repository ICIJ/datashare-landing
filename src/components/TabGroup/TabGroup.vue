<script setup lang="ts">
import { computed } from 'vue'
interface TabGroupProps {
  cardHeader?: boolean,
  fill?: boolean,
  justified?: boolean,
  lazy?: boolean,
  small?: boolean,
  tag?: string,
  vertical?: boolean,
  nowrap?: boolean,
  flush?: boolean,
  activeNavItemClass?: string,
  navItemClass?: string,
  activeTabClass?: string,
  contentClass?: string,
  navClass?: string
}
const props = defineProps<TabGroupProps>()

const navClassList = computed(() => {
  return {
    'nav-underline': true,
    'tab-group-navigation': true,
    'tab-group-navigation--nowrap': props.nowrap,
    'tab-group-navigation--flush': props.flush,
    // @ts-expect-error navclass can be undefined or null
    [props.navClass]: !!props.navClass
  }
})
</script>

<template>
  <b-tabs
    class="tab-group"
    :active-nav-item-class="activeNavItemClass"
    :nav-class="navClassList"
    :active-tab-class="activeTabClass"
    :content-class="contentClass"
    :card-header="cardHeader"
    :fill="fill"
    :justified="justified"
    :lazy="lazy"
    :small="small"
    :tag="tag"
    :vertical="vertical"
  >
    <slot />
  </b-tabs>
</template>

<style lang="scss" scoped>
.tab-group {
  &:deep(.tab-content) {
    padding: $spacer-md 0;
  }
}
</style>
