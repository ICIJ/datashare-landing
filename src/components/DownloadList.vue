<template>
  <ul class="list-group list-group-flush text-left">
    <li class="list-group-item" v-for="(release, i) in releases" :key="i">
      <div  v-if="!!asset(release)">
        <a :href="asset(release).browser_download_url" class="font-weight-bold">
          <fa icon="download" class="mr-2" /> {{ release.name }}
        </a>
        <span class="text-muted float-right">
          {{ publishedAt(release) }}
        </span>
      </div>
    </li>
  </ul>
</template>

<script>
  import endsWith from 'lodash/endsWith'
  import filter from 'lodash/filter'
  import find from 'lodash/find'
  import orderBy from 'lodash/orderBy'

  import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
  import { library } from '@icij/murmur/lib/components/Fa'
  import { Fa } from '@icij/murmur'

  import { releases } from '../releases'

  library.add(faDownload)

  export default {
    name: 'DownloadList',
    props: {
      ext: {
        type: String
      }
    },
    data () {
      return {
        releases: []
      }
    },
    components: {
      Fa
    },
    async mounted () {
      this.releases = await releases()
      this.releases = filter(this.releases, release => !!this.asset(release))
      this.releases = orderBy(this.releases, release => release.name.split('.').map(parseInt), 'desc')
    },
    methods: {
      asset (release) {
        return find(release.assets, ({ name }) => {
          return endsWith(name, this.ext)
        })
      },
      publishedAt (release, options = { year: "numeric", month: "short" }) {
        const date = new Date(release.published_at)
        return new Intl.DateTimeFormat('en-US', options).format(date)
      }
    }
  }
</script>
