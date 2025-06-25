<script setup lang="ts">
import { computed } from 'vue'
import {BNavbarNav} from "bootstrap-vue-next";

const props = defineProps({
  cardHeader: {
    type: Boolean
  },
  fill: {
    type: Boolean
  },
  justified: {
    type: Boolean
  },
  small: {
    type: Boolean
  },
  tag: {
    type: String,
    default: 'ul'
  },
  vertical: {
    type: Boolean
  },
  nowrap: {
    type: Boolean
  },
  flush: {
    type: Boolean
  }
})

const classList = computed(() => {
  return {
    'nav-underline': true,
    'tab-group-navigation--nowrap': props.nowrap,
    'tab-group-navigation--flush': props.flush
  }
})
</script>

<template>
  <b-navbar-nav
    tabs
    underline
    class="tab-group-navigation"
    :class="classList"
    :card-header="cardHeader"
    :fill="fill"
    :justified="justified"
    :small="small"
    :tag="tag"
    :vertical="vertical"
  >
    <slot />
  </b-navbar-nav>
</template>
