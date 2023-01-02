<template>
  <div class="download-list d-flex flex-column">
    <ul class="download-list__group list-group list-group-flush text-left flex-grow-1">
      <li class="download-list__group__item list-group-item" v-for="(release, i) in filteredReleases" :key="i">
        <a :href="asset(release).browser_download_url" class="font-weight-bold">
          <fa icon="download" class="mr-2" fixed-width /> {{ release.name }}
        </a>
        <span class="float-right small">
          <span class="text-muted">{{ asset(release).size | size }} -</span> {{ publishedAt(release) }}
        </span>
      </li>
      <li class=" download-list__group__item list-group-item">
        <a class="btn btn-lg btn-block btn-link" href="https://github.com/ICIJ/datashare-installer/releases"
          target="_blank">
          Explore all versions
        </a>
      </li>
    </ul>
    <div class="download-list__show-experimental border-top">
      <b-form-checkbox :checked="showExperimentalVersions" switch @input="$emit('input', $event)"
        class="d-inline-block"
        v-b-popover.hover.top="{ customClass: 'popover-magnified',  content: 'Experimental versions (beta, alpha, RC) are unstable and might present bugs. Use them at your own risk.' }"
        title="Experimental versions">
        Show experimental versions
      </b-form-checkbox>
    </div>
  </div>
</template>

<script>
  import castArray from 'lodash/castArray'
  import endsWith from 'lodash/endsWith'
  import filter from 'lodash/filter'
  import findIndex from 'lodash/findIndex'
  import some from 'lodash/some'
  import orderBy from 'lodash/orderBy'
  
  import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
  import { default as Fa, library } from '@icij/murmur/lib/components/Fa'
  import { BFormCheckbox, VBPopover } from 'bootstrap-vue'

  import { releases, STABLE_VERSION_RE } from '../releases'

  library.add(faDownload)

  export default {
    name: 'DownloadList',
    model: {
      prop: 'showExperimentalVersions'
    },
    props: {
      ext: {
        type: [String, Array]
      },
      showExperimentalVersions: {
        type: Boolean
      }
    },
    filters: {
      size (size) {
        var i = Math.floor(Math.log(size) / Math.log(1024))
        return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
      }
    },
    data () {
      return {
        releases: []
      }
    },
    components: {
      BFormCheckbox,
      Fa
    },
    directives: {
      'b-popover': VBPopover
    },
    async mounted () {
      this.releases = await releases()
      this.releases = orderBy(this.releases, release => new Date(release.published_at), 'desc')
    },
    methods: {
      assets (release) {
        return filter(release.assets, ({ name }) => {
          // The asset must end with at least one of the given extensions
          return some(this.exts, ext => {
            return endsWith(name, ext)
          })
        })
      },
      asset (release) {
        // Get all the available asset for this release and the component extensions
        const assets = this.assets(release)
        // Order them to be in same order than the extension list
        const orderedAssets = orderBy(assets, ({ name }) => {
          // The index of the asset in the extension list define its priority 
          return findIndex(this.exts, ext => endsWith(name, ext))
        })
        // Then finally give the first asset
        return orderedAssets[0]
      },
      publishedAt (release, options = { year: "numeric", month: "short", day: "numeric" }) {
        const date = new Date(release.published_at)
        return new Intl.DateTimeFormat('en-US', options).format(date)
      }
    },
    computed: {
      filteredReleases () {
        return filter(this.releases, release => {
          return !!this.asset(release) && (this.showExperimentalVersions || STABLE_VERSION_RE.test(release.name))
        })
      },
      exts () {
        return castArray(this.ext)
      }
    }
  }
</script>

<style lang="scss">
  @import '../variables';

  .download-list {
    max-height: 50vh;

    &__group {
      overflow: auto;

      &__item:last-of-type {
        border-bottom: 0;
      }
    }

    &__show-experimental {
      position: sticky;
      bottom: 0;
      left: 0;
      background: white;
      padding: 0 $spacer;

      label {
        cursor: pointer;
        margin:  $spacer * 0.75 0;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
