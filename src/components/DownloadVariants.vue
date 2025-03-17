<template>
  <div>
    <b-tabs card class="m-0" no-fade>
      <b-tab lazy no-body :active="is('macos')">
        <template slot="title">
          <fa :icon="['fab', 'apple']" /> Mac
        </template>
        <download-list :ext="['DatashareStandalone.pkg', '.pkg']" v-model="showExperimentalVersions" />
      </b-tab>
      <b-tab lazy no-body :active="is('windows')">
        <template slot="title">
          <fa :icon="['fab', 'windows']" /> Windows
        </template>
        <download-list :ext="['installDatashareStandalone.exe', '.exe']" v-model="showExperimentalVersions" />
      </b-tab>
      <b-tab lazy no-body :active="is('ubuntu') || is('debian')">
        <template slot="title">
          <fa :icon="['fab', 'ubuntu']" /> Ubuntu
        </template>
        <download-list ext=".deb" v-model="showExperimentalVersions" />
      </b-tab>      
      <b-tab lazy no-body>
        <template slot="title">
          <fa :icon="['fa', 'crow']" /> Snap
        </template>
        <download-snap v-model="showExperimentalVersions" />
      </b-tab>
      <b-tab lazy>
        <template slot="title">
          <fa :icon="['fab', 'docker']" /> Docker
        </template>
        <download-docker />
      </b-tab>
    </b-tabs>
  </div>
</template>


<script>
  import { BTab, BTabs } from 'bootstrap-vue'
  import { Fa } from '@icij/murmur'
  import { faApple } from '@fortawesome/free-brands-svg-icons/faApple'
  import { faDocker } from '@fortawesome/free-brands-svg-icons/faDocker'
  import { faLinux } from '@fortawesome/free-brands-svg-icons/faLinux'
  import { faCrow } from '@fortawesome/free-solid-svg-icons/faCrow'
  import { faUbuntu } from '@fortawesome/free-brands-svg-icons/faUbuntu'
  import { faWindows } from '@fortawesome/free-brands-svg-icons/faWindows'
  import { library } from '@fortawesome/fontawesome-svg-core'

  import os from '../os'
  import { latest as fetchLatestRelease } from '../releases'

  import DownloadDocker from './DownloadDocker'
  import DownloadList from './DownloadList'
  import DownloadSnap from './DownloadSnap'

  library.add(faApple, faCrow, faWindows, faLinux, faUbuntu, faDocker)

  export default {
    name: 'DownloadVariants',
    components: {
      BTabs,
      BTab,
      DownloadDocker,
      DownloadList,
      DownloadSnap,
      Fa
    },
    data () {
      return {
        showExperimentalVersions: false,
        version: null,
      }
    },
    async mounted () {
      const latest =  await fetchLatestRelease()
      this.version = latest.tag_name
    },
    methods: {
      is (name) {
        return os === name
      }
    }
  }
</script>
