<template>
  <div id="app" class="app">
    <generic-header no-headroom></generic-header>
    <div class="position-relative bg-dark">
      <app-jumbotron></app-jumbotron>
      <app-content></app-content>
    </div>
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
      position: relative;

      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        left: 50%;
        top: 0;
        background: white;
        border-bottom: 1px solid #efefef;
        z-index: -1;
      }

      a.navbar-rand {
        border: 1px solid white;
      }

      a, .nav-link {
        color: white;
      }
    }
  }
</style>
