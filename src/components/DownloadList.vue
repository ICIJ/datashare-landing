<template>
  <div class="download-list d-flex flex-column">
    <ul class="download-list__group list-group list-group-flush text-left flex-grow-1">
      <li class="download-list__group__item list-group-item" v-for="(release, i) in releases" :key="i">
        <div v-if="!!asset(release)">
          <a :href="asset(release).browser_download_url" class="font-weight-bold">
            <fa :icon="icon" class="mr-2" fixed-width /> {{ release.name }}
          </a>
          <span class="text-muted float-right">
            {{ publishedAt(release) }}
          </span>
        </div>
      </li>
      <li class="download-list__group__item list-group-item">
        <a class="btn btn-lg btn-block btn-link" href="https://github.com/ICIJ/datashare-installer/releases" target="_blank">
          Explore all versions
        </a>
      </li>
    </ul>
    <div class="download-list__use-docker border-top">
      <b-form-checkbox :checked="useDocker" switch @input="$emit('input', $event)" v-b-popover.hover.top="{ customClass: 'popover-magnified',  content: 'This will install Datashare and its dependencies using multiple Docker containers. It\'s the legacy installer and we advise not to use this version in most cases.' }" title="Docker Installer">
        Use Docker installer
      </b-form-checkbox>
    </div>
  </div>
</template>

<script>
  import endsWith from 'lodash/endsWith'
  import filter from 'lodash/filter'
  import find from 'lodash/find'
  import orderBy from 'lodash/orderBy'

  import { faDocker } from '@fortawesome/free-brands-svg-icons/faDocker'
  import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
  import { Fa } from '@icij/murmur'
  import { BFormCheckbox, VBPopover } from 'bootstrap-vue'

  import { releases } from '../releases'

  export default {
    name: 'DownloadList',
    model: {
      prop: 'useDocker'
    },
    props: {
      ext: {
        type: String
      },
      dockerExt: {
        type: String
      },
      useDocker: {
        type: Boolean
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
      this.releases = filter(this.releases, release => !!this.asset(release))
      this.releases = orderBy(this.releases, release => new Date(release.published_at), 'desc')
    },
    methods: {
      asset (release) {
        return find(release.assets, ({ name }) => {
          return endsWith(name, this.useDocker ? this.dockerExt : this.ext)
        })
      },
      publishedAt (release, options = { year: "numeric", month: "short", day: "numeric" }) {
        const date = new Date(release.published_at)
        return new Intl.DateTimeFormat('en-US', options).format(date)
      }
    },
    computed: {
      icon () {
        return this.useDocker ? faDocker : faDownload
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

    &__use-docker {
      position: sticky;
      bottom: 0;
      left: 0;
      background: white;
      padding: 0 $spacer;

      label {
        display: block;
        cursor: pointer;
        margin:  $spacer * 0.75 0;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
