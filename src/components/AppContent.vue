<script>
  import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt'
  import { faMale } from '@fortawesome/free-solid-svg-icons/faMale'
  import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding'
  // Import the library instance provided by FontAwesome
  import { library } from '@icij/murmur/lib/components/Fa'
  import { Fa } from '@icij/murmur'

  library.add(faMapMarkerAlt, faMale, faBuilding)

  import DownloadButtons from './DownloadButtons'

  export default {
    name: 'AppContent',
    components: {
      DownloadButtons,
      Fa
    }
  }
</script>

<template>
  <div class="app__content">
    <div class="container">
      <section class="app__content__section">
        <div class="row align-items-center">
          <div class="col text-right">
            <h4 class="app__content__section__heading float-right">
              Datashare allows every journalist to better analyse their documents
            </h4>
          </div>
          <div class="col">
            <download-buttons class="float-right"></download-buttons>
          </div>
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
        <div class="row">
          <div class="col text-right">
            <h4 class="app__content__section__heading float-right">
              Datashare automatically highlights people, organizations and locations
            </h4>
            <p class="app__content__section__description float-right">
              Your searches are quicker thanks to named entity recognition
            </p>
          </div>
          <div class="col d-flex align-items-center">
            <fa icon="map-marker-alt" class="ml-4 fa-4x"></fa>
            <fa icon="male" class="ml-4 fa-4x"></fa>
            <fa icon="building" class="ml-4 fa-4x"></fa>
          </div>
        </div>
      </section>

      <section class="app__content__section">
        <div class="row align-items-center text-right">
          <div class="col">
            <h4 class="app__content__section__heading float-right">
              Datashare is an open-source project
            </h4>
            <p class="app__content__section__description float-right">
              Initially developed by ICIJ, it is supporter by xxx, yyy, zzz.<br />
              Users and developers can give their feedback and contribute at
              <a href="https://github.com/ICIJ/datashare" target="_blank" class="text-white">github.com/ICIJ/datashare</a>.
            </p>
          </div>
          <div class="col">
            <download-buttons></download-buttons>
          </div>
        </div>
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
    background: url('../assets/wave.svg') no-repeat top center rgba(#000, .83);
    background-size: cover;
    color: #fff;

    &__section {
      margin: 25vh 0;
      display: block;

      &__heading {
        max-width: 450px;
        font-size: 1.65rem;
        position: relative;
      }

      &__description {
        color: $text-muted;
      }

      &--ui {
        z-index: 200;
        position: relative;
        margin-left: 50%;
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
          transform: translate(-10px, -50%);

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
        margin-right: 50%;
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
    }
  }
</style>
