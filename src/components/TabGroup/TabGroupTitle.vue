<script setup lang="ts">
import { type Component } from 'vue'
import { isNil } from 'lodash'

defineProps<{
  icon?: Component
  count?: number | null
}>()
</script>

<template>
  <span class="tab-group-title d-flex gap-1">
    <template v-if="icon">
      <component
        :is="icon"
        class="tab-group-title__icon tab-group-title__icon--inactive"
        aria-hidden="true"
      />
      <component
        :is="icon"
        class="tab-group-title__icon tab-group-title__icon--active"
        aria-hidden="true"
      />
    </template>
    <slot />
    <b-badge
      v-if="!isNil(count)"
      :variant="null"
      pill
    >
      {{ count }}
    </b-badge>
  </span>
</template>

<style lang="scss">
.tab-group-title {
  display: flex;
  align-items: center;

  .tab-group-title__icon--active {
    display: none;
  }
}
</style>
