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

  import DemoButton from './DemoButton'
  import DownloadButtons from './DownloadButtons'

  export default {
    name: 'AppContent',
    components: {
      DemoButton,
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
        <div class="container">
          <div class="row align-items-center text-center">
            <div class="app__content__section__wrapper col-md">
              <download-buttons class="app__content__section__download m-auto"></download-buttons>
            </div>
            <div class="app__content__section__body col">
              <demo-button />
            </div>
          </div>
        </div>
      </section>

      <section class="app__content__section app__content__section--ui">
        <div class="container">
          <div class="app__content__section__wrapper">
            <h4 class="app__content__section__heading">
              Access all your documents in one place on your computer
            </h4>
            <p class="app__content__section__description">
              Secure your documents from third-party interference
            </p>
          </div>
          <div class="app__content__section__body app__content__section__body--with-preview">
             <img src="../assets/images/screenshot-extract.png" class="mw-100" />
          </div>
        </div>
      </section>

      <section class="app__content__section app__content__section--types">
        <div class="container">
          <div class="app__content__section__wrapper">
            <h4 class="app__content__section__heading">
              Search pdfs, images, texts, spreadsheets, slides and any of your files, simultaneously
            </h4>
            <p class="app__content__section__description">
              Information is no longer constrained by format
            </p>
          </div>
          <div class="app__content__section__body app__content__section__body--with-preview">
             <img src="../assets/images/screenshot-preview.png" class="mw-100" />
          </div>
        </div>
      </section>

      <section class="app__content__section app__content__section--entities">
        <div class="container">
          <div class="app__content__section__wrapper">
            <h4 class="app__content__section__heading">
              Automatically detect and filter by people, organizations and locations
            </h4>
            <p class="app__content__section__description">
              Your searches are more efficient thanks to named entity recognition
            </p>
          </div>
          <div class="app__content__section__body app__content__section__body--with-preview">
             <img src="../assets/images/screenshot-ner.png" class="mw-100" />
          </div>
        </div>
      </section>

      <section class="app__content__section app__content__section--support">
        <h4 class="app__content__section__heading text-center container mb-5">
          Any questions?
        </h4>
        <div class="container">
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
          </div>
        </div>
      </section>

      <section class="app__content__section app__content__section--os">
        <h4 class="app__content__section__heading text-special text-center">
          An open-source project
        </h4>
        <p class="app__content__section__description mb-5 text-center">
          Users and developers can give feedback and
          <span class="text-nowrap">contribute at <a href="https://github.com/icij/?q=datashare" target="_blank">github.com/ICIJ/datashare</a>.</span>
        </p>
        <div class="container">
          <div class="row d-flex flex-row justify-content-center align-items-center">
            <div class="app__content__section__wrapper col-md-6">
              <download-buttons class="app__content__section__download m-auto" no-requirements></download-buttons>
            </div>
            <div class="app__content__section__body d-flex flex-column justify-content-center align-items-stretch col">
              <div class="app__content__section__body__card">
                <div class="app__content__section__body__card__header">
                  <fa icon="bolt" />
                </div>
                <div class="app__content__section__body__card__body d-flex align-items-center w-100">
                  <p class="m-0">
                    How-to <a href="https://github.com/ICIJ/datashare/wiki/Datashare-API" target="_blank">query the API</a>
                  </p>
                </div>
              </div>

              <div class="app__content__section__body__card">
                <div class="app__content__section__body__card__header">
                  <fa icon="plug" />
                </div>
                <div class="app__content__section__body__card__body d-flex align-items-center w-100">
                  <p class="m-0">
                    How-to <a href="https://github.com/ICIJ/datashare/wiki/Datashare-Plugins" target="_blank">create plugins</a>
                  </p>
                </div>
              </div>

              <div class="app__content__section__body__card">
                <div class="app__content__section__body__card__header">
                  <fa icon="server" />
                </div>
                <div class="app__content__section__body__card__body d-flex align-items-center w-100">
                  <p class="m-0">
                    How-to <a href="https://github.com/ICIJ/datashare/wiki/Datashare-Server-Mode" target="_blank">run in server Mode</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
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
    background: white;
    position: relative;
    min-height: 100vh;
    padding: 0;
    width: 100%;
    margin-left: 0;

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
      padding: 10vh $spacer;
      margin: auto;

      & > .container {
        display: flex;
        align-items: center;
        justify-content: center;

        @include media-breakpoint-down(md) {
          display: block;
          width: 100%;
        }
      }

      &--ui, &--entities, &--types {
        & > .container {
          max-width: 80%;

          @include media-breakpoint-down(md) {
            max-width: 100%;
          }
        }
      }

      &--ui, &--entities, &--support, &--donors {
        background: #eee;
      }

      &--types, &--support {
        background: $content-special-bg;
        color: $content-special-color;
      }

      &--ui, &--entities {
        & > .container {
          flex-direction: row-reverse;
        }
      }

      &__wrapper {
        background: inherit;
        padding: $spacer * 1.5;
        border-radius: $spacer * 0.8;
        position: relative;
        width: 460px;
        text-align: left;
        margin: 0 1rem;

        @include media-breakpoint-down(md) {
          text-align: center;
          margin: auto;
          max-width: none;
          width: 100%;
        }
      }

      &__heading {
        font-weight: bold;
        font-size: 1.3rem;
        margin: auto;
      }

      &__body {
        width: 100%;
        margin: 0 1rem;

        @include media-breakpoint-down(md) {
          margin: auto;
          width: auto;
        }

        &--with-preview {
          filter: drop-shadow(0 1rem 2rem rgba(black, .3));
          overflow: hidden;
          border-radius: 1rem;
          transition: 300ms;
          min-height: 65vh;
          max-width: 880px;
          display: flex;
          flex-direction: column;
          justify-content: center;

          img {
            border-radius: 1rem;
          }

          @include media-breakpoint-down(md) {
            min-height: 0;
            margin: auto;
          }
        }

        &__card {
          margin-bottom: $spacer;
          margin-right: $spacer;
          display: flex;
          flex: 1;
          background: $primary;
          color: white;
          border-radius: $border-radius-lg;
          overflow: hidden;
          @include gradient-directional($primary, darken($primary, 5%));

          &__header {
            background: darken($primary, 10%);
            padding: $spacer;
            text-align: center;

            .svg-inline--fa {
              font-size: 1.5rem;
            }
          }

          &__body {
            background: rgba(white, .1);
            padding: $spacer;
            width: 50%;

            a {
              color: mix(white, $primary, 70)
            }
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
