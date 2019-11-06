<template>
  <div>
    <download-requirements class="card-header pt-0" />
    <b-tabs card class="m-0">
      <b-tab no-body :active="is('macos')">
        <template slot="title">
          <fa :icon="['fab', 'apple']" /> Mac
        </template>
        <download-list ext=".pkg" />
      </b-tab>
      <b-tab no-body :active="is('linux')">
        <template slot="title">
          <fa :icon="['fab', 'linux']" /> Linux
        </template>
        <download-list ext=".sh" />
      </b-tab>
      <b-tab no-body :active="is('windows')">
        <template slot="title">
          <fa :icon="['fab', 'windows']" /> Windows
        </template>
        <download-list ext=".exe" />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
  import { faWindows } from '@fortawesome/free-brands-svg-icons/faWindows'
  import { faApple } from '@fortawesome/free-brands-svg-icons/faApple'
  import { faLinux } from '@fortawesome/free-brands-svg-icons/faLinux'
  import { library } from '@icij/murmur/lib/components/Fa'
  import { Fa } from '@icij/murmur'

  import { BTabs } from 'bootstrap-vue'
  import { BTab } from 'bootstrap-vue'
  import os from '../os'

  import DownloadList from './DownloadList'
  import DownloadRequirements from './DownloadRequirements'

  library.add(faApple, faWindows, faLinux)

  export default {
    name: 'DownloadVariants',
    components: {
      BTabs,
      BTab,
      DownloadList,
      DownloadRequirements,
      Fa
    },
    methods: {
      is (name) {
        return os === name
      }
    }
  }
</script>
