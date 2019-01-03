<template>
  <div id="app" class="app">
    <generic-header no-headroom position="relative"></generic-header>
    <app-content></app-content>
    <generic-footer></generic-footer>
  </div>
</template>

<script>
import AppContent from './AppContent'

export default {
  name: 'app',
  components: {
    AppContent
  }
}
</script>
