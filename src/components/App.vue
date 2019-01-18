<template>
  <div id="app" class="app">
    <generic-header no-headroom position="absolute" :brand-options="{ background: 'white', color: 'black' }"></generic-header>
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
  @import '../variables.scss';

  .app {

    .generic-header {
      z-index: 500;
      background: transparent;
      color: white;

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

      a.navbar-brand {
        position: fixed;
        top: $spacer * 0.5;
        left: $spacer * 0.5;

        body &:hover {
          color: white;
        }
      }

      a, .nav-link {
        color: white;
      }
    }
  }
</style>
