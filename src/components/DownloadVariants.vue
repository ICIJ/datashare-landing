<template>
  <b-tabs card class="m-0">
    <b-tab no-body active="is('macos')">
      <template slot="title">
        <fa :icon="['fab', 'apple']" /> Mac
      </template>
      <download-list ext=".pkg" />
    </b-tab>
    <b-tab no-body active="is('windows')">
      <template slot="title">
        <fa :icon="['fab', 'windows']" /> Windows
      </template>
      <download-list ext=".exe" />
    </b-tab>
    <b-tab no-body active="is('linux')">
      <template slot="title">
        <fa :icon="['fab', 'linux']" /> Linux
      </template>
      <download-list ext=".sh" />
    </b-tab>
  </b-tabs>
</template>

<script>
  import { faWindows } from '@fortawesome/free-brands-svg-icons/faWindows'
  import { faApple } from '@fortawesome/free-brands-svg-icons/faApple'
  import { faLinux } from '@fortawesome/free-brands-svg-icons/faLinux'
  import { library } from '@icij/murmur/lib/components/Fa'
  import { Fa } from '@icij/murmur'

  import bTabs from 'bootstrap-vue/es/components/tabs/tabs'
  import bTab from 'bootstrap-vue/es/components/tabs/tab'
  import os from '../os'

  import DownloadList from './DownloadList'

  library.add(faApple, faWindows, faLinux)

  export default {
    name: 'DownloadVariants',
    components: {
      bTabs,
      bTab,
      DownloadList,
      Fa
    },
    methods: {
      is (name) {
        return os === name
      }
    }
  }
</script>
