<template>
  <div class="download-buttons text-center">
    <div class="row mb-2">
      <div class="col mb-2">
        <div v-if="os === 'macos'">
          <a class="btn btn-block btn-lg btn-primary text-light download-buttons__button" :href="assetForApple">
            <fa :icon="['fab', 'apple']" class="mr-2"></fa>
            <span class="sr-only">Apple</span>
            Download for free
          </a>
        </div>
        <div v-else-if="os === 'windows'">
          <a class="btn btn-block btn-lg btn-primary text-light download-buttons__button" :href="assetForWindows">
            <fa :icon="['fab', 'windows']" class="mr-2"></fa>
            <span class="sr-only">Windows</span>
            Download for free
          </a>
        </div>
        <div v-else-if="os === 'linux'">
          <a class="btn btn-block btn-lg btn-primary text-light download-buttons__button" :href="assetForLinux">
            <fa :icon="['fab', 'linux']" class="mr-2"></fa>
            <span class="sr-only">Linux</span>
            Download for free
          </a>
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
    <download-requirements class="text-left bg-light p-3" />
    <b-modal title="Other platforms and versions" hide-footer lazy ref="downloadListModal" size="md" body-class="p-0" header-class="border-0 card-header">
      <download-variants />
    </b-modal>
  </div>
</template>

<script>
  import bModal from 'bootstrap-vue/es/components/modal/modal'
  import { find, endsWith, get } from 'lodash'
  import { faWindows } from '@fortawesome/free-brands-svg-icons/faWindows'
  import { faApple } from '@fortawesome/free-brands-svg-icons/faApple'
  import { faLinux } from '@fortawesome/free-brands-svg-icons/faLinux'
  import { library } from '@icij/murmur/lib/components/Fa'
  import { Fa } from '@icij/murmur'

  import os from '../os'
  import { latest } from '../releases'
  import DownloadRequirements from './DownloadRequirements.vue'
  import DownloadVariants from './DownloadVariants.vue'

  library.add(faApple, faWindows, faLinux)

  export default {
    name: 'DownloadButtons',
    components: {
      bModal,
      DownloadRequirements,
      DownloadVariants,
      Fa,
    },
    data () {
      return {
        os,
        version: null,
        year: null,
        assets: [],
      }
    },
    async mounted () {
      const data = await latest()
      this.version = data.tag_name
      this.assets = data.assets
      this.year = new Date(data.created_at).getFullYear()
    },
    computed: {
      assetForApple () {
        return get(find(this.assets, a => endsWith(a.name, '.pkg') ), 'browser_download_url', null)
      },
      assetForWindows () {
        return get(find(this.assets, a => endsWith(a.name, '.exe') ), 'browser_download_url', null)
      },
      assetForLinux () {
        return get(find(this.assets, a => endsWith(a.name, '.sh') ), 'browser_download_url', null)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../variables';

  .download-buttons {
    max-width: 440px;
    padding: $spacer;

    &__button.btn {
      color: $dark;
      padding: $spacer * 1.4 $spacer;
      border-radius: $border-radius-lg;
      text-transform: uppercase;
      font-weight: bolder;
      text-shadow: none;
    }

    &__button--disabled.btn {
      text-transform: none;
      background: white;
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
