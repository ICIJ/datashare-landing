<template>
  <section class="app-section">
    <b-container
      fluid="lg"
      class="app-section__container position-relative"
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
