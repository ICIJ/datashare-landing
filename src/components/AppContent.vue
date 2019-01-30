<script>
  import { faBook } from '@fortawesome/free-solid-svg-icons/faBook'
  import { faMailBulk  } from '@fortawesome/free-solid-svg-icons/faMailBulk'
  import { faGithub  } from '@fortawesome/free-brands-svg-icons/faGithub'
  // Import the library instance provided by FontAwesome
  import { library } from '@icij/murmur/lib/components/Fa'
  import { Fa } from '@icij/murmur'

  library.add(faBook, faMailBulk, faGithub)

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
          <h4 class="app__content__section__heading m-auto">
            Better analyze information, in all its forms
          </h4>
          <download-buttons class="app__content__section__download"></download-buttons>
        </div>
      </section>

      <section class="app__content__section app__content__section--ui">
        <div class="app__content__section__wrapper">
          <corner direction="top-left" />
          <corner direction="bottom-left" />
          <h4 class="app__content__section__heading">
            Access all your documents in one place on your computer
          </h4>
          <p class="app__content__section__description">
            Secure your documents from third-party interference
          </p>
        </div>
        <img class="app__content__section__body app__content__section__body--with-preview" src="../assets/images/extract.png" srcset="../assets/images/extract.png 1x, ../assets/images/extract@2x.png 2x"/>
      </section>

      <section class="app__content__section app__content__section--types">
        <div class="app__content__section__wrapper">
          <h4 class="app__content__section__heading">
            Search pdfs, images, texts, spreadsheets, slides and any of your files, simultaneously
          </h4>
          <p class="app__content__section__description">
            Information is no longer constrained by format
          </p>
        </div>
      </section>

      <section class="app__content__section app__content__section--entities">
        <div class="app__content__section__wrapper">
          <corner direction="top-left" />
          <corner direction="bottom-left" />
          <h4 class="app__content__section__heading">
            Automatically detect and filter by people, organizations and locations
          </h4>
          <p class="app__content__section__description">
            Your searches are more efficient thanks to named entity recognition
          </p>
        </div>
        <img class="app__content__section__body app__content__section__body--with-preview mr-3" src="../assets/images/ner.png" srcset="../assets/images/ner.png 1x, ../assets/images/ner@2x.png 2x"/>
      </section>

      <section class="app__content__section app__content__section--support">
        <div class="app__content__section__wrapper w-50">
          <corner direction="top-left" />
          <corner direction="bottom-left" />
          <h4 class="app__content__section__heading">
            Any questions?
          </h4>
        </div>
        <div class="app__content__section__body w-100">
          <div class="d-flex align-items-stretch">
            <div class="app__content__section__body__card w-50">
              <div class="app__content__section__body__card__header">
                <fa icon="book" />
              </div>
              <div class="app__content__section__body__card__body">
                <p>
                  User Guide and FAQ <a href="https://icij.gitbook.io/datashare/" target="_blank">in our Gitbook here</a>.
                </p>
              </div>
            </div>
            <div class="app__content__section__body__card w-50">
              <div class="app__content__section__body__card__header">
                <fa :icon="['fab', 'github']" />
              </div>
              <div class="app__content__section__body__card__body">
                <p>To report a bug, please contribute <a href="https://github.com/ICIJ/datashare/issues" target="_blank">in our GitHub here</a> detailing your logs.</p>
              </div>
            </div>
          </div>
          <div class="app__content__section__body__card">
            <div class="app__content__section__body__card__header">
              <fa icon="mail-bulk" />
            </div>
            <div class="app__content__section__body__card__body">
              <p>Or write to <a href="mailto:datashare@icij.org">datashare@icij.org</a> detailing:</p>
              <ol>
                <li>your Operating System (Mac, Windows or Linux) ;</li>
                <li>the version of your Operating System ;</li>
                <li>screenshots of your issue ;</li>
                <li>and a description of your issue.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section class="app__content__section app__content__section--os">
        <div class="app__content__section__wrapper">
          <h4 class="app__content__section__heading  text-special">
            An open-source project
          </h4>
          <p class="app__content__section__description">
            Initially developed by ICIJ, it is supported by xxx, yyy, zzz.<br />
            Users and developers can give feedback and contribute at
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
    width: 100% * (1 - $app-jumbotron-width-ratio);
    margin-left: 100% * $app-jumbotron-width-ratio;
    padding: 0;
    background: white;
    box-shadow: 0 0 5vw 0 rgba(black, 0.2);

    &__section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      min-height: 75vh;
      padding: $spacer;

      &--ui, &--entities, &--support {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
        background: #eee;
      }

      &--types, &--support {
        background: $content-special-bg;
        color: $content-special-color;

        a { color: mix($content-special-color, $content-special-bg, 70) }
      }

      &--ui &__wrapper, &--entities &__wrapper, &--support &__wrapper {
        background: inherit;
        margin-left: $spacer * -3.5;
        padding: $spacer * 1.5;
        border-radius: $spacer * 0.8;
        position: relative;
        max-width: 450px;
        width: 100%;

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

      &--support &__wrapper .corner {
        color: $content-special-bg;
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

      &__body {
        filter: drop-shadow(0 5px 10px rgba(black, .1));
        width: 100%;

        &--with-preview {
          max-width: 630px;
        }

        &__card {
          margin-bottom: $spacer;
          margin-right: $spacer;
          display: flex;

          &__header {
            background: rgba(black, .2);
            padding: $spacer;
            text-align: center;

            .svg-inline--fa {
              font-size: 2rem;
            }
          }

          &__body {
            background: rgba(white, .1);
            padding: $spacer;
            width: 100%;
          }
        }
      }

    }
  }
</style>
