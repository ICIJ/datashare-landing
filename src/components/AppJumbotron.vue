<template>
  <div class="app__jumbotron clearfix">
    <div class="container">
      <div class="app__jumbotron__container">
        <h1 class="app__jumbotron__container__heading mb-4">
          Datashare
        </h1>
        <p class="lead">
          Allows every journalist to better analyse their documents with <a href="">ICIJ</a> search tool.
        </p>
        <download-buttons class="app__jumbotron__container__download"></download-buttons>
      </div>
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
    background: url('../assets/quartz.jpg') top center no-repeat;
    background-size: cover;
    padding: 1px;

    &__container {
      margin: auto;
      max-width: 660px;
      padding: $spacer;
      margin-top: 30vh;
      position: relative;
      text-align: center;
      min-height: 60vh;
      color: white;

      &__heading {
        font-size: 6rem;
      }

    }
  }
</style>
