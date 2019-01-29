<template>
  <div class="download-buttons text-center">
    <div class="row mb-2">
      <div v-if="os === 'macos'" class="col mb-2">
        <a class="btn btn-block btn-lg btn-primary text-light download-buttons__button" :href="assetForApple">
          <fa :icon="['fab', 'apple']" class="mr-2"></fa>
          <span class="sr-only">Apple</span>
          Download for free
        </a>
      </div>
      <div v-else-if="os === 'windows'" class="col mb-2">
        <a class="btn btn-block btn-lg btn-primary text-light download-buttons__button" :href="assetForWindows">
          <fa :icon="['fab', 'windows']" class="mr-2"></fa>
          <span class="sr-only">Windows</span>
          Download for free
        </a>
      </div>
      <div v-else-if="os === 'linux'" class="col mb-2">
        <a class="btn btn-block btn-lg btn-primary text-light download-buttons__button" :href="assetForLinux">
          <fa :icon="['fab', 'linux']" class="mr-2"></fa>
          <span class="sr-only">Linux</span>
          Download for free
        </a>
      </div>
    </div>
    <p class="small">
      Version {{ version }} - {{ year }} -
      <a @click.prevent="$refs.downloadListModal.show()" href="#">
        Other platforms and versions
      </a><br />
      Datashare is an <a href="https://github.com/icij/?q=datashare" target="_blank">open-source</a> project.
    </p>
    <div class="small text-left bg-light p-3">
      <h6>Requirements</h6>
      <ul class="pl-4">
        <li>Windows: 10 Pro or higher</li>
        <li>Mac: El Capitan 10.11 or higher</li>
        <li>5 GB of free space on disk</li>
        <li>4 GB of RAM</li>
      </ul>
      <p class="m-0 border-top pt-3 text-muted">
        Pending the security infrastructure of your organization, you may need to consult with your IT administrator for installation.
      </p>
    </div>
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
  import DownloadVariants from './DownloadVariants.vue'

  library.add(faApple, faWindows, faLinux)

  export default {
    name: 'DownloadButtons',
    components: {
      bModal,
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
    border-radius: $border-radius-lg;
    padding: $spacer;

    &__button.btn {
      color: $dark;
      padding: $spacer * 1.4 $spacer;
      border-radius: $border-radius;
      text-transform: uppercase;
      font-weight: bolder;
      text-shadow: none;

    }
  }
</style>
