<template>
  <div class="app__jumbotron clearfix">
    <div class="app__jumbotron__container">
      <h1 class="app__jumbotron__container__heading mb-0">
        Datashare
      </h1>
    </div>
  </div>
</template>

<script>
  import DownloadButtons from './DownloadButtons'

  export default {
    name: 'AppJumbotron',
    components: {
      DownloadButtons
    }
  }
</script>

<style lang="scss">
  @import '../variables.scss';

  .app__jumbotron {
    width: 50%;
    background: url('../assets/quartz.jpg') center top no-repeat;
    background-size: cover;
    float: left;
    position: sticky;
    left: 0;
    top: 0;

    &__container {
      padding: $spacer;
      position: relative;
      text-align: center;
      min-height: 100vh;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &__heading {
        font-size: 6rem;
      }

      &__lead {
        font-size: 1.5rem;
      }
    }
  }
</style>
