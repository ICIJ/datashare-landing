<template>
  <div class="download-buttons text-center">
    <div class="row mb-2">
      <div class="col mb-2">
        <a class="btn btn-block btn-lg btn-light download-buttons__button" :href="assetForApple">
          <fa :icon="['fab', 'apple']" class="mr-2"></fa>
          <span class="sr-only">Apple</span>
          Download for free
        </a>
      </div>
      <div class="col mb-2">
        <a class="btn btn-block btn-lg btn-light download-buttons__button" :href="assetForWindows">
          <fa :icon="['fab', 'windows']" class="mr-2"></fa>
          <span class="sr-only">Windows</span>
          Download for free
        </a>
      </div>
    </div>
    <p class="text-muted small m-0">
      Version {{ version }} - {{ year }}<br />
      By downloading, you agree to the <a>Terms and Conditions</a><br />
      Datashare is an <a>open-source</a> project.
    </p>
  </div>
</template>

<script>
  import { find, endsWith, get } from 'lodash'
  import axios from 'axios'
  import { faWindows } from '@fortawesome/free-brands-svg-icons/faWindows'
  import { faApple } from '@fortawesome/free-brands-svg-icons/faApple'
  // Import the library instance provided by FontAwesome
  import { library } from '@icij/murmur/lib/components/Fa'
  import { Fa } from '@icij/murmur'

  library.add(faApple, faWindows)
  // Create a promise once to get the release details
  const releases = axios.get(`https://api.github.com/repos/ICIJ/datashare-installer/releases/latest`)

  export default {
    name: 'DownloadButtons',
    components: {
      Fa
    },
    data () {
      return {
        version: null,
        year: null,
        assets: [],
      }
    },
    mounted () {
      releases.then(latest => {
        this.version = latest.data.tag_name
        this.assets = latest.data.assets
        this.year = new Date(latest.data.created_at).getFullYear()
      })
    },
    computed: {
      assetForApple () {
        return get(find(this.assets, a => endsWith(a.name, '.pkg') ), 'browser_download_url', null)
      },
      assetForWindows () {
        return get(find(this.assets, a => endsWith(a.name, '.exe') ), 'browser_download_url', null)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../variables';

  .download-buttons {
    max-width: 640px;
    border:1px solid white;
    border-radius: $border-radius-lg;
    padding: $spacer;

    &__button.btn {
      font-size: 1em;
      color: $dark;
      padding: $spacer * 1.4 $spacer;
      border-radius: $border-radius;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
</style>
