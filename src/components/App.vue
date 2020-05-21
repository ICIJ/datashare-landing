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
      color: white;
      background: transparent;
      padding-bottom: $spacer * 1.5;


      @include media-breakpoint-down(md) {
        background: $primary;

        &--collapsed {
          background: transparent;
        }
      }

      a.navbar-brand {
        display: none;
      }

      a, .nav-link {
        color: white;
      }

      .navbar-nav .nav-item a.nav-link {
        @include media-breakpoint-down($app-jumbotron-breakpoint) {
          color: white;
        }
      }
    }
  }
</style>
