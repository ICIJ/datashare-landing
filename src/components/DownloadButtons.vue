<template>
  <div class="download-buttons text-center">
    <div class="row mb-2 no-gutters">
      <div class="col mb-2 position-relative">
        <div v-if="asset">
          <a class="btn btn-block btn-lg btn-primary text-light download-buttons__button" :href="asset" @click="showGuide = !showGuide">
            <fa :icon="['fab', icon]" class="mr-2"></fa>
            <span class="sr-only">{{ os }}</span>
            Download for free
          </a>
          <transition name="circle-in">
            <div class="download-buttons__guide" v-if="showGuide">
              <button @click="showGuide = false" class="download-buttons__guide__close btn btn-sm text-light rounded-circle">
                <fa icon="times" />
                <span class="sr-only">Close</span>
              </button>
              <p class="font-weight-bold">
                Thanks for downloading Datashare
              </p>
              <p>
                <a :href="guide || 'https://icij.gitbook.io/datashare/'" target="_blank">
                  <fa icon="book" class="mr-2" />
                  <u>Read the installation guide</u>
                </a>
              </p>
            </div>
          </transition>
        </div>
        <div v-else>
          <span class="btn btn-block btn-lg btn-outline-dark text-muted download-buttons__button download-buttons__button--disabled">
            Available only on desktop
          </span>
        </div>
        <div class="download-buttons__help">
          Need help? <a href="https://icij.gitbook.io/datashare/" target="_blank">Read our user guide</a>
        </div>
      </div>
    </div>
    <p class="small">
      Version {{ version }} - {{ year }} -
      <a @click.prevent="$refs.downloadListModal.show()" href="#">
        Other platforms and versions
      </a><br />
      Datashare is an <a href="https://github.com/icij/?q=datashare" target="_blank">open-source</a> project.
    </p>
    <download-requirements class="text-left bg-light p-3" v-if="!noRequirements" />
    <b-modal title="Other platforms and versions" hide-footer lazy ref="downloadListModal" size="md" body-class="p-0" header-class="border-0 card-header">
      <download-variants />
    </b-modal>
  </div>
</template>

<script>
  import { BModal } from 'bootstrap-vue'
  import { find, endsWith, get } from 'lodash'
  import { faBook } from '@fortawesome/free-solid-svg-icons/faBook'
  import { faWindows } from '@fortawesome/free-brands-svg-icons/faWindows'
  import { faApple } from '@fortawesome/free-brands-svg-icons/faApple'
  import { faLinux } from '@fortawesome/free-brands-svg-icons/faLinux'
  import { faUbuntu } from '@fortawesome/free-brands-svg-icons/faUbuntu'
  import { library } from '@icij/murmur/lib/components/Fa'
  import { Fa } from '@icij/murmur'

  import os from '../os'
  import { latest } from '../releases'
  import DownloadRequirements from './DownloadRequirements.vue'
  import DownloadVariants from './DownloadVariants.vue'

  library.add(faApple, faBook, faWindows, faLinux, faUbuntu)

  export default {
    name: 'DownloadButtons',
    components: {
      BModal,
      DownloadRequirements,
      DownloadVariants,
      Fa,
    },
    props: {
      noRequirements: {
        type: Boolean
      }
    },
    data () {
      return {
        os,
        version: null,
        year: null,
        assets: [],
        showGuide: false
      }
    },
    async mounted () {
      const data = await latest()
      this.version = data.tag_name
      this.assets = data.assets
      this.year = new Date(data.created_at).getFullYear()
    },
    computed: {
      osAssets () {
        return {
          macos: {
            url: this.assetForMacOs,
            icon: 'apple',
            guide: 'https://icij.gitbook.io/datashare/mac/install-datashare-on-mac#standalone-less-recent-than-os-x-el-capitan-10-11'
          },
          windows: {
            url: this.assetForWindows,
            icon: 'windows',
            guide: 'https://icij.gitbook.io/datashare/windows/install-datashare-on-windows#standalone-windows-7-service-pack-2-or-newer-version'
          },
          ubuntu: {
            url: this.assetForUbuntu,
            icon: 'ubuntu'
          },
          linux: {
            url: this.assetForLinux,
            icon: 'linux'
          }
        }
      },
      assetForMacOs () {
        return get(find(this.assets, a => endsWith(a.name, 'Standalone.pkg') ), 'browser_download_url', null)
      },
      assetForWindows () {
        return get(find(this.assets, a => endsWith(a.name, 'Standalone.exe') ), 'browser_download_url', null)
      },
      assetForLinux () {
        return get(find(this.assets, a => endsWith(a.name, '.sh') ), 'browser_download_url', null)
      },
      assetForUbuntu () {
        return get(find(this.assets, a => endsWith(a.name, '.deb') ), 'browser_download_url', null)
      },
      asset () {
        return get(this.osAssets, [this.os, 'url'], null)
      },
      icon () {
        return get(this.osAssets, [this.os, 'icon'], null)
      },
      guide () {
        return get(this.osAssets, [this.os, 'guide'], null)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../variables';

  .download-buttons {

    &__button.btn {
      color: $dark;
      padding: $spacer * 1.4 $spacer;
      border-radius: $border-radius-lg;
      text-transform: uppercase;
      font-weight: bolder;
      text-shadow: none;
      position: relative;
      z-index: 20;

      &:focus, &:active {
        outline: none;
        box-shadow: none;
      }
    }

    &__button--disabled.btn {
      text-transform: none;
      background: white;
    }

    &__guide {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 100;
      padding: $spacer * 1.4 $spacer;
      border-radius: $border-radius-lg;
      color: white;
      @include gradient-directional($secondary, mix($primary, $secondary));

      a {
        color: white;
      }

      &__close {
        position: absolute;
        top: $spacer * .5;
        right: $spacer * .5;
        width: 1.7em;
        height: 1.7em;
        line-height: 1.7em;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      &.circle-in-enter-active,
      &.circle-in-leave-active {
        transition: all .3s ease;
        clip-path: circle(100% at center);
      }

      &.circle-in-enter,
      &.circle-in-leave-to {
        clip-path: circle(0% at center);
      }
    }

    &__help {
      background: rgba($primary, 0.6);
      border-radius: 0 0 $border-radius-lg $border-radius-lg;
      margin-top: -$border-radius-lg;
      padding: $border-radius-lg;
      padding-top: $border-radius-lg * 2;
      color: mix(white, $primary, 80%);

      a {
        color: white;
      }
    }
  }
</style>
