<script>
  import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt'
  import { faMale } from '@fortawesome/free-solid-svg-icons/faMale'
  import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding'
  // Import the library instance provided by FontAwesome
  import { library } from '@icij/murmur/lib/components/Fa'
  import { Fa } from '@icij/murmur'

  library.add(faMapMarkerAlt, faMale, faBuilding)

  import Corner from './Corner'
  import DownloadButtons from './DownloadButtons'

  export default {
    name: 'AppContent',
    components: {
      Corner,
      DownloadButtons,
      Fa
    }
  }
</script>

<template>
  <div class="app__content">
    <div class="">
      <section class="app__content__section">
        <div class="app__content__section__wrapper">
          <h4 class="app__content__section__heading">
            Allows every journalist to better analyze their documents
          </h4>
          <download-buttons class="app__content__section__download"></download-buttons>
        </div>
      </section>

      <section class="app__content__section app__content__section--ui">
        <div class="app__content__section__wrapper">
          <corner direction="top-left" />
          <corner direction="bottom-left" />
          <h4 class="app__content__section__heading">
            Index all your documents in one place on your local computer
          </h4>
          <p class="app__content__section__description">
            Your documents are never sent to any third-party services
          </p>
        </div>
        <img class="app__content__section__preview" src="../assets/extract.png" srcset="../assets/extract.png 1x, ../assets/extract@2x.png 2x"/>
      </section>

      <section class="app__content__section app__content__section--types">
        <div class="app__content__section__wrapper">
          <h4 class="app__content__section__heading">
            Search pdfs, images, texts, spreadsheets, slides and any of your files …all at once
          </h4>
          <p class="app__content__section__description">
            Information isn’t locked in  various formats anymore
          </p>
        </div>
      </section>

      <section class="app__content__section app__content__section--entities">
        <div class="app__content__section__wrapper">
          <corner direction="top-left" />
          <corner direction="bottom-left" />
          <h4 class="app__content__section__heading">
            Automatically highlight people, organizations and locations
          </h4>
          <p class="app__content__section__description">
            Your searches are quicker thanks to named entity recognition
          </p>
        </div>
        <img class="app__content__section__preview" src="../assets/ner.png" srcset="../assets/ner.png 1x, ../assets/ner@2x.png 2x"/>
      </section>

      <section class="app__content__section app__content__section--os">
        <div class="app__content__section__wrapper">
          <h4 class="app__content__section__heading">
            An open-source project
          </h4>
          <p class="app__content__section__description">
            Initially developed by ICIJ, it is supported by xxx, yyy, zzz.<br />
            Users and developers can give their feedback and contribute at
            <a href="https://github.com/icij/?q=datashare" target="_blank">github.com/ICIJ/datashare</a>.
          </p>
          <download-buttons class="app__content__section__download"></download-buttons>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../variables.scss';

  .app__content {
    position: relative;
    min-height: 100vh;
    width: 50%;
    margin-left: 50%;
    padding: 0;
    background: white;
    box-shadow: 0 0 15vw 0 rgba(black, 0.5);

    &__section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      min-height: 70vh;
      padding: $spacer;

      &__wrapper {
        background: inherit;
        margin-left: $spacer * -3.5;
        padding: $spacer * 1.5;
        border-radius: $spacer;
        position: relative;

        .corner {
          position: absolute;
          left: $spacer / 2;
          width: $spacer * 2;
          height: $spacer * 2;
          color: #eee;

          &--top-left {
            bottom: 100%;
          }

          &--bottom-left {
            top: 100%;
          }
        }

      }

      &__heading {
        max-width: 450px;
        font-size: 1.85rem;
        position: relative;
      }

      &__description {
        margin: auto;
        max-width: 450px;
      }

      &__preview {
        filter: drop-shadow(0 5px 10px rgba(black, .1));
        max-width: 30vw;
      }

      &--ui, &--entities  {
        flex-direction: row;
        text-align: left;
        background: #eee;
      }

      &--types {
        background: $saddle-red;
        color: white;
        a { color: mix(white, $saddle-red, 70) }
      }
    }
  }
</style>
