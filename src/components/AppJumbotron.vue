<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'

import ButtonIcon from '@/components/ButtonIcon.vue'
import DatashareDownloadModal from '@/components/DatashareDownloadModal/DatashareDownloadModal.vue'
import ButtonDownload from '@/components/Download/ButtonDownload.vue'
import { useAssets } from '@/composables/useAssets.ts'
import { DEFAULT_ICON, useOs } from '@/composables/useOs.ts'
import { useRelease } from '@/composables/useRelease.ts'
import AppSection from '@/components/AppSection.vue'
const { detectedOs, isCompatible } = useOs()

const { latestAssets,retrieveReleases } = useRelease()
onBeforeMount(async()=>{
  await retrieveReleases()
})
const { osButton } = useAssets(detectedOs, latestAssets)
const label = computed(() => {
  if (osButton.value.name) {
    return `Download for ${osButton.value.name}`
  }
  return 'Download'
})
</script>

<template>
  <app-section class="app-jumbotron">
    <div class="app-jumbotron__container">
      <h1 class="display-1 mb-4">
        <span class="bg-body">Find stories in<br>
          any files</span>
      </h1>
      <div class="d-flex flex-column gap-3">
        <div>
          <button-download
            v-if="isCompatible"
            :asset="osButton.asset"
            size="md"
            :icon="osButton.icon"
          >
            {{ label }}
          </button-download>
          <button-download
            v-else
            asset="#download"
            size="md"
            :icon="DEFAULT_ICON"
          >
            Download
          </button-download>
        </div>
        <div>
          <button-icon
            icon-right="eyes"
            icon-right-weight="fill"
            variant="outline-action"
            class="demo-link bg-body text-action-emphasis border-action-emphasis"
            href="https://datashare-demo.icij.org/"
          >
            Use the demo
          </button-icon>
        </div>
        <div><datashare-download-modal class="false-link" /></div>
      </div>
    </div>
  </app-section>
</template>

<style lang="scss">
.app-jumbotron {
  margin-top: 6em;
  margin-bottom: 3em;

  & .app-section__container {
    background: url('@/assets/illustrations/LandingPage_Documents_Responsive_LightAndDarkModes.svg') right / contain
      no-repeat;
    width: 100%;
    position: relative; /* Needed for absolute positioning of the tagline */
    display: flex;
    justify-content: start;
    align-items: center;
    height: 120%;
    padding-bottom: 5em;
  }

  & .display-1 {
    font-weight: bold;
  }

  .demo-link {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
@include color-mode(dark) {
  .app-jumbotron {
    & .demo-link.btn {
      color: $light;
    }
  }
}
@include media-breakpoint-up(md) {
  .app-jumbotron {
    & .app-section__container {
      background: url('@/assets/illustrations/LandingPage_Documents_LightAndDarkModes.svg') right / contain no-repeat;
    }
  }
}
</style>
