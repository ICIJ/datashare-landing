<script>
  import DownloadButtons from './DownloadButtons'

  export default {
    name: 'AppContent',
    components: {
      DownloadButtons
    }
  }
</script>

<template>
  <div class="app__content">
    <div class="container">
      <section class="app__content__section">
        <h4 class="app__content__section__heading mb-5 pb-4">
          Datashare allows every journalist to better analyse their documents
        </h4>
        <div class="clearfix">
          <download-buttons class="float-right"></download-buttons>
        </div>
      </section>
      <section class="app__content__section app__content__section--ui d-flex align-items-center">
        <div>
          <h4 class="app__content__section__heading">
            Datashare indexes all your documents in one place on your local computer
          </h4>
          <p class="app__content__section__description">
            Your documents are never sent to any third-party services
          </p>
        </div>
      </section>
      <section class="app__content__section app__content__section--types">
        <h4 class="app__content__section__heading">
          You  search pdfs, images, texts, spreadsheets, slides and any of your files …all at once
        </h4>
        <p class="app__content__section__description">
          Information isn’t locked in  various formats anymore
        </p>
      </section>
      <section class="app__content__section app__content__section--entities">
        <h4 class="app__content__section__heading">
          Datashare automatically highlights people, organizations and locations
        </h4>
        <p class="app__content__section__description">
          Your searches are quicker thanks to named entity recognition
        </p>
      </section>
      <div class="clearfix">
        <download-buttons class="float-right"></download-buttons>
      </div>
      <section class="app__content__section text-center mb-4">
        <p class="lead font-weight-normal">
          Datashare is an open-source project initially developed by ICIJ thanks to ICIJ’s donators : xxx, yyy, zzz<br />
          Users and developers can give their feedback and contribute at
          <a href="https://github.com/ICIJ/datashare" target="_blank" class="text-white">github.com/ICIJ/datashare</a>.
        </p>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../variables.scss';

  .app__content {
    min-height: 100vh;
    margin: 0;
    padding: $spacer 0;
    background: url('../assets/wave.svg') no-repeat top center;
    background-size: cover;

    &__section {
      margin: 20vh 0;
      display: block;

      &__heading {
        max-width: 450px;
        font-size: 1.65rem;
        position: relative;
      }

      &__description {
        max-width: 230px;
        color: $text-muted;
      }

      &--ui {
        z-index: 200;
        position: relative;
        margin-left: 40%;
        padding-left: $spacer * 2;
        min-height: 414px;

        &:before {
          content: "";
          width: 663px;
          height: 414px;
          background: url('../assets/preview.png') no-repeat 0 0;
          background-size: cover;
          position: absolute;
          right: 100%;
          top: 50%;
          transform: translateY(-50%);

          @media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144dpi) {
            background-image: url('../assets/preview@2x.png');
          }
        }
      }

      &--types {
        z-index: 100;
        position: relative;
        text-align: right;
        direction: rtl;
        margin-right: 60%;
        margin-top: 245px;

        &:before {
          content: url('../assets/filetypes.svg');
          position: absolute;
          left: 100%;
          bottom: 100%;
          // Hard coded
          margin-left: -120px;
          margin-bottom: -160px;
        }
      }

      &--entities {
        margin-left: 60%;
        position: relative;

        .app__content__section__heading:after {
          content: url('../assets/organization.svg');
          position: absolute;
          right: 0;
          top: 100%;
          margin: $spacer 0;
        }

        &:before {
          content: url('../assets/person.svg');
          position: absolute;
          right: 100%;
          bottom: 0;
          margin: $spacer $spacer * 2;
        }

        &:after {
          content: url('../assets/location.svg');
          position: absolute;
          right: 20%;
          bottom: 100%;
          margin: $spacer * 2;
        }

      }
    }
  }
</style>
