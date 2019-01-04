<template>
  <div id="app" class="app">
    <generic-header no-headroom position="absolute"></generic-header>
    <app-jumbotron></app-jumbotron>
    <app-content></app-content>
    <generic-footer></generic-footer>
  </div>
</template>

<script>
import AppJumbotron from './AppJumbotron'
import AppContent from './AppContent'

export default {
  name: 'app',
  components: {
    AppContent,
    AppJumbotron
  }
}
</script>


<style lang="scss">
  .app {
    .generic-header {
      background: transparent;
      color: white;

      a.navbar-rand {
        border: 1px solid white;
      }

      a, .nav-link {
        color: white;
      }

      .btn-saddle-red {
        background: white;
        color: #000;
      }
    }
  }
</style>
