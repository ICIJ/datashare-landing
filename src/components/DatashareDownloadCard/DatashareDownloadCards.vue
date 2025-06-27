<script setup lang="ts">
import { computed, inject } from 'vue'

import DatashareDownloadCard from '@/components/DatashareDownloadCard/DatashareDownloadCard.vue'
import { useRelease } from '@/composables/useRelease.ts'
import DatashareDownloadModal from '@/components/DatashareDownloadModal/DatashareDownloadModal.vue'
import { ReleasesKey } from '@/utils/types.ts'

const releases = inject(ReleasesKey)
const { latestVersion } = useRelease(releases)
const versionNumber = computed(() => {
  return `Version ${latestVersion.value??''}`
})
</script>

<template>
  <b-card-group
    deck
    class="datashare-download-cards d-flex flex-column offset-2 col-8 flex-sm-row col-sm-10 offset-sm-1"
  >
    <datashare-download-card :title="versionNumber">
      <ul>
        <li>
          <datashare-download-modal class="false-link" />
        </li>
        <li>Read the <a href="https://github.com/ICIJ/datashare/releases/latest">release note</a></li>
      </ul>
    </datashare-download-card>
    <datashare-download-card title="Re&shy;qui&shy;re&shy;ments">
      <ul>
        <li>5 GB of free space on disk</li>
        <li>4 GB of RAM</li>
      </ul>
    </datashare-download-card>
    <datashare-download-card title="Docu&shy;men&shy;ta&shy;tion">
      <ul>
        <li>Read the <a href="https://icij.gitbook.io/datashare">user guide</a></li>
      </ul>
    </datashare-download-card>
    <datashare-download-card title="Contact us">
      <ul>
        <li>On <a href="https://github.com/icij/?q=datashare" target="_blank">Github</a></li>
        <li>At <a href="mailto:datashare@icij.org">datashare@icij.org</a></li>
      </ul>
    </datashare-download-card>
  </b-card-group>
</template>
