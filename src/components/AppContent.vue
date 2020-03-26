<script>
  import { faBolt  } from '@fortawesome/free-solid-svg-icons/faBolt'
  import { faBook } from '@fortawesome/free-solid-svg-icons/faBook'
  import { faMailBulk  } from '@fortawesome/free-solid-svg-icons/faMailBulk'
  import { faGithub  } from '@fortawesome/free-brands-svg-icons/faGithub'
  import { faPlug  } from '@fortawesome/free-solid-svg-icons/faPlug'
  import { faServer  } from '@fortawesome/free-solid-svg-icons/faServer'
  // Import the library instance provided by FontAwesome
  import { library } from '@icij/murmur/lib/components/Fa'
  import { Fa } from '@icij/murmur'

  library.add(faBolt, faBook, faMailBulk, faPlug, faServer, faGithub)

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
      <div class="app__content__banner">
        This software is in beta phase: it might crash, contain bugs, or not be compatible with your system.
      </div>

      <section class="app__content__section">
        <div class="app__content__section__wrapper">
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
        <div class="app__content__section__body app__content__section__body--with-preview">
           <img src="../assets/images/extract.png" srcset="../assets/images/extract.png 1x, ../assets/images/extract@2x.png 2x" class="mw-100" />
        </div>
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
        <div class="app__content__section__body app__content__section__body--with-preview">
           <img src="../assets/images/ner.png" srcset="../assets/images/ner.png 1x, ../assets/images/ner@2x.png 2x" class="mw-100" />
        </div>
      </section>

      <section class="app__content__section app__content__section--support">
        <div class="app__content__section__wrapper w-50">
          <corner direction="top-left" />
          <corner direction="bottom-left" />
          <h4 class="app__content__section__heading">
            Any questions?
          </h4>
        </div>
        <div class="app__content__section__body">
          <div class="d-md-flex align-items-stretch">
            <div class="app__content__section__body__card">
              <div class="app__content__section__body__card__header">
                <fa icon="book" />
              </div>
              <div class="app__content__section__body__card__body w-100">
                <p class="m-0">
                  User Guide and FAQ <a href="https://icij.gitbook.io/datashare/" target="_blank">in our Gitbook here</a>.
                </p>
              </div>
            </div>
            <div class="app__content__section__body__card">
              <div class="app__content__section__body__card__header">
                <fa :icon="['fab', 'github']" />
              </div>
              <div class="app__content__section__body__card__body w-100">
                <p class="m-0">
                  To report a bug, please contribute <a href="https://github.com/ICIJ/datashare/issues" target="_blank">in our GitHub here</a> detailing your logs.
                </p>
              </div>
            </div>
          </div>
          <div class="app__content__section__body__card mw-100">
            <div class="app__content__section__body__card__header">
              <fa icon="mail-bulk" />
            </div>
            <div class="app__content__section__body__card__body w-100">
              <p>
                Or write to <a href="mailto:datashare@icij.org">datashare@icij.org</a> detailing:
              </p>
              <ol class="pl-4">
                <li>your Operating System (Mac, Windows, etc) ;</li>
                <li>the version of your Operating System ;</li>
                <li>screenshots of your issue ;</li>
                <li>and a description of your issue.</li>
              </ol>
            </div>
          </div>

          <div class="d-md-flex align-items-stretch">
            <div class="app__content__section__body__card">
              <div class="app__content__section__body__card__header">
                <fa icon="bolt" />
              </div>
              <div class="app__content__section__body__card__body d-flex align-items-center w-100">
                <p class="m-0">
                  <span class="small">How-to</span><br />
                  <a href="https://github.com/ICIJ/datashare/wiki/Datashare-API" target="_blank">Query the API</a>
                </p>
              </div>
            </div>

            <div class="app__content__section__body__card">
              <div class="app__content__section__body__card__header">
                <fa icon="plug" />
              </div>
              <div class="app__content__section__body__card__body d-flex align-items-center w-100">
                <p class="m-0">
                  <span class="small">How-to</span><br />
                  <a href="https://github.com/ICIJ/datashare/wiki/Datashare-Plugins" target="_blank">Create Plugins</a>
                </p>
              </div>
            </div>

            <div class="app__content__section__body__card">
              <div class="app__content__section__body__card__header">
                <fa icon="server" />
              </div>
              <div class="app__content__section__body__card__body d-flex align-items-center w-100">
                <p class="m-0">
                  <span class="small">How-to</span><br />
                  <a href="https://github.com/ICIJ/datashare/wiki/Datashare-Server-Mode" target="_blank">Server Mode</a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section class="app__content__section app__content__section--os">
        <div class="app__content__section__wrapper">
          <h4 class="app__content__section__heading  text-special">
            An open-source project
          </h4>
          <p class="app__content__section__description mb-5">
            Users and developers can give feedback and contribute at
            <a href="https://github.com/icij/?q=datashare" target="_blank">github.com/ICIJ/datashare</a>.
          </p>
          <download-buttons class="app__content__section__download"></download-buttons>
        </div>
      </section>

      <section class="app__content__section app__content__section--donors">
        <div class="container-fluid app__content__section__donors">
          <h4 class="text-muted text-center text-uppercase text-special mb-5">
            With the generous support of
          </h4>
          <div class="row">
            <div class="col">
              <a href="https://postkodstiftelsen.se/" target="_blank" class="app__content__section__donors__link">
                <img src="../assets/images/donors/spl.jpg" class="mw-100" alt="" />
              </a>
            </div>
            <div class="col">
              <a href="https://brown.columbia.edu/" target="_blank" class="app__content__section__donors__link">
                <img src="../assets/images/donors/brown.jpg" class="mw-100" alt="" />
              </a>
            </div>
          </div>
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
    padding-top: $generic-header-height;
    background: white;
    box-shadow: 0 0 5vw 0 rgba(black, 0.2);

    @include media-breakpoint-down($app-jumbotron-breakpoint) {
      width: 100%;
      margin-left: 0;
      box-shadow: 0;
      padding-top: 0;
    }

    &__banner {
      text-align: center;
      padding: $spacer * 0.5;
      font-size: 0.9rem;
      font-weight: bold;

      $gradient-bg-1: lighten($saddle-yellow, 20);
      $gradient-bg-2: lighten($saddle-yellow, 10);
      background: $gradient-bg-1;
      background-image: linear-gradient(135deg, $gradient-bg-2 20%, transparent 20%, transparent 40%, $gradient-bg-2 40%, $gradient-bg-2 60%, transparent 60%, transparent 80%, $gradient-bg-2 80%, $gradient-bg-2);
    }

    &__section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      min-height: 75vh;
      padding: 7vh $spacer;

      &--ui, &--entities, &--support, &--donors {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
        background: #eee;

        @include media-breakpoint-down(md) {
          flex-direction: column;
          min-height: 0;
        }
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

        @include media-breakpoint-down($app-jumbotron-breakpoint) {
          margin-left: 0;
          text-align: center;
        }

        .corner {
          position: absolute;
          left: $spacer / 2;
          width: $spacer * 2;
          height: $spacer * 2;
          color: #eee;

          @include media-breakpoint-down($app-jumbotron-breakpoint) {
            display: none;
          }

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
        max-width: 630px;

        &__card {
          margin-bottom: $spacer;
          margin-right: $spacer;
          display: flex;
          flex: 1;

          &__header {
            background: rgba(black, .2);
            padding: $spacer;
            text-align: center;

            .svg-inline--fa {
              font-size: 2rem;

              @include media-breakpoint-down(md) {
                font-size: 1.5rem;
              }
            }
          }

          &__body {
            background: rgba(white, .1);
            padding: $spacer;
            width: 50%;
          }
        }
      }

      &__donors {

        max-width: 660px * 3 / 4;

        &__link {
          filter: grayscale(100%);
          opacity: 0.6;
          transition: 400ms;

          &:hover {
            filter: grayscale(0%);
            opacity: 1;
          }
        }
      }

    }
  }
</style>
