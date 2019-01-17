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
    <div class="">
      <section class="app__content__section">
        <div>
          <h4 class="app__content__section__heading">
            Datashare allows every journalist to better analyze their documents
          </h4>
          <download-buttons class="app__content__section__download"></download-buttons>
        </div>
      </section>

      <section class="app__content__section app__content__section--ui">
        <div>
          <h4 class="app__content__section__heading">
            Datashare indexes all your documents in one place on your local computer
          </h4>
          <p class="app__content__section__description">
            Your documents are never sent to any third-party services
          </p>
        </div>
        <img class="app__content__section__preview" src="../assets/extract.png" srcset="../assets/extract.png 1x, ../assets/extract@2x.png 2x"/>
      </section>

      <section class="app__content__section app__content__section--types">
        <div>
          <h4 class="app__content__section__heading">
            You  search pdfs, images, texts, spreadsheets, slides and any of your files …all at once
          </h4>
          <p class="app__content__section__description">
            Information isn’t locked in  various formats anymore
          </p>
        </div>
      </section>

      <section class="app__content__section app__content__section--entities">
        <div>
          <h4 class="app__content__section__heading">
            Datashare automatically highlights people, organizations and locations
          </h4>
          <p class="app__content__section__description">
            Your searches are quicker thanks to named entity recognition
          </p>
        </div>
        <img class="app__content__section__preview" src="../assets/ner.png" srcset="../assets/ner.png 1x, ../assets/ner@2x.png 2x"/>
      </section>

      <section class="app__content__section app__content__section--os">
        <div>
          <h4 class="app__content__section__heading">
            Datashare is an open-source project
          </h4>
          <p class="app__content__section__description">
            Initially developed by ICIJ, it is supported by xxx, yyy, zzz.<br />
            Users and developers can give their feedback and contribute at
            <a href="https://github.com/ICIJ/datashare" target="_blank">github.com/ICIJ/datashare</a>.
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

      &__heading {
        max-width: 450px;
        font-size: 1.65rem;
        position: relative;
        margin: auto;
      }

      &__description {
        margin: auto;
        max-width: 450px;
      }

      &__preview {
        filter: drop-shadow(0 5px 10px rgba(black, .1));
        margin-left: $spacer * -4;
        max-width: 30vw;
      }

      &--ui, &--entities  {
        flex-direction: row-reverse;
        text-align: left;
        background: #eee;
      }

      &--types, &--os {
        background: $saddle-red;
        color: white;
      }
    }
  }
</style>
