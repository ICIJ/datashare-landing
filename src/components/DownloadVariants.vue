<template>
  <div>
    <b-tabs card class="m-0" no-fade>
      <b-tab no-body :active="is('macos')">
        <template slot="title">
          <fa :icon="['fab', 'apple']" /> Mac
        </template>
        <download-list :ext="['DatashareStandalone.pkg', '.pkg']" v-model="showExperimentalVersions" />
      </b-tab>
      <b-tab no-body :active="is('windows')">
        <template slot="title">
          <fa :icon="['fab', 'windows']" /> Windows
        </template>
        <download-list :ext="['installDatashareStandalone.exe', '.exe']" v-model="showExperimentalVersions" />
      </b-tab>
      <b-tab no-body :active="is('ubuntu')">
        <template slot="title">
          <fa :icon="['fab', 'ubuntu']" /> Ubuntu
        </template>
        <download-list ext=".deb" v-model="showExperimentalVersions" />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
  import { faWindows } from '@fortawesome/free-brands-svg-icons/faWindows'
  import { faApple } from '@fortawesome/free-brands-svg-icons/faApple'
  import { faLinux } from '@fortawesome/free-brands-svg-icons/faLinux'
  import { faUbuntu } from '@fortawesome/free-brands-svg-icons/faUbuntu'
  import { library } from '@icij/murmur/lib/components/Fa'
  import { Fa } from '@icij/murmur'

  import { BTabs } from 'bootstrap-vue'
  import { BTab } from 'bootstrap-vue'
  import os from '../os'

  import DownloadList from './DownloadList'

  library.add(faApple, faWindows, faLinux, faUbuntu)

  export default {
    name: 'DownloadVariants',
    components: {
      BTabs,
      BTab,
      DownloadList,
      Fa
    },
    data () {
      return {
        showExperimentalVersions: false
      }
    },
    methods: {
      is (name) {
        return os === name
      }
    }
  }
</script>
