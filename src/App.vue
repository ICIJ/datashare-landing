<template>
  <div id="app" class="app">
    <generic-header></generic-header>
    <div class="app__content"></div>
    <generic-footer></generic-footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
  .app__content {
    min-height: 100vh;
  }
</style>
