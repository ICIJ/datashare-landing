<script setup lang="ts">
withDefaults(defineProps<{nav?:boolean}>(),{nav:false})
</script>
<template>
  <section class="app-section">
    <b-container
      fluid="lg"
      class="app-section__container position-relative px-4 px-lg-0 "
      :class="{'px-lg-2':!nav,'px-0':nav}"
    >
      <slot />
    </b-container>
  </section>
</template>

<style scoped lang="scss">
.app-section {
  scroll-margin-top: 6em;
  scroll-snap-margin-top: 6em;
  display: flex;
  justify-content: center;
}
</style>
