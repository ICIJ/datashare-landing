<script setup lang="ts">


defineProps({
  icon: {
    type: [String, Object, Array]
  },
  count: {
    type: Number,
    default: null
  }
})
</script>

<template>
  <span class="tab-group-title d-flex gap-1">
    <template v-if="icon">
      <phosphor-icon
        :name="icon"
        class="tab-group-title__icon tab-group-title__icon--inactive"
        size="1.25em"
        aria-hidden="true"
      />
      <phosphor-icon
        :name="icon"
        class="tab-group-title__icon tab-group-title__icon--active"
        weight="bold"
        size="1.25em"
        aria-hidden="true"
      />
    </template>
    <slot />
    <b-badge v-if="count !== null" :variant="null" pill>
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
