<template>
  <div class="app__jumbotron clearfix">
    <div class="app__jumbotron__container">
      <a href="https://www.icij.org" class="app__jumbotron__container__brand">
        <brand-expansion class="mr-3" color="#fff" :size="50" mode="long" />
        <span class="sr-only">International Consortium of Investigative Journalists</span>
      </a>
      <h1 class="app__jumbotron__container__heading text-special mb-0">
        <img src="../assets/images/logo-color-square.svg" class="app__jumbotron__container__heading__brand" />
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
    width: 100%;
    position: static;
    left: 0;
    top: 0;

    &__container {
      @include gradient-directional($primary, $saddle-red);
      min-height: 95vh;
      padding: $spacer;
      position: relative;
      text-align: center;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &__brand {
        position: absolute;
        top: $spacer * 0.5;
        left: $spacer * 0.5;
        color: white;
        font-weight: bolder;
        font-size: 1rem;
      }

      &__heading {
        font-size: 5rem;
        font-weight: normal;
        position: relative;
        white-space: nowrap;

        @include media-breakpoint-down($app-jumbotron-breakpoint) {
          font-size: 5rem;
        }

        @include media-breakpoint-down(sm) {
          font-size: 3rem;
        }

        &__brand {
          height: 1em;
          position: absolute;
          right: 100%;
        }
      }
    }
  }
</style>
