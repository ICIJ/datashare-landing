<template>
  <div class="app__jumbotron clearfix">
    <div class="app__jumbotron__container">
      <h1 class="app__jumbotron__container__heading text-special mb-0">
        Datashare
      </h1>
      <p class="lead text-special font-weight-light">Better analyze information, in all its forms</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppJumbotron'
  }
</script>

<style lang="scss">
  @import '../variables.scss';

  .app__jumbotron {
    width: 100% * $app-jumbotron-width-ratio;
    float: left;
    position: sticky;
    left: 0;
    top: 0;

    @include media-breakpoint-down($app-jumbotron-breakpoint) {
      width: 100%;
      float: none;
      position: static;
    }

    &__container {
      @include gradient-directional($primary, $saddle-red);
      min-height: 100vh;
      padding: $spacer;
      position: relative;
      text-align: center;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @include media-breakpoint-down($app-jumbotron-breakpoint) {
        min-height: 90vh;
      }

      &__heading {
        font-size: 6rem;
        font-weight: normal;

        @include media-breakpoint-down($app-jumbotron-breakpoint) {
          font-size: 5rem;
        }

        @include media-breakpoint-down(sm) {
          font-size: 3rem;
        }
      }
    }
  }
</style>
