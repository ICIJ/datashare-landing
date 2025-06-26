<script setup lang="ts">
import DownloadButtons from '@/components/Download/DownloadButtons.vue'
import DatashareDownloadCards from '@/components/DatashareDownloadCard/DatashareDownloadCards.vue'
import { useOs } from '@/composables/useOs.ts'
import ImageMode from '@/components/ImageMode/ImageMode.vue'
import ImageModeSource from '@/components/ImageMode/ImageModeSource.vue'
import AppSection from '@/components/AppSection.vue'

const { detectedOs } = useOs()
</script>

<template>
  <app-section class="app-datashare-download position-relative">
    <span class="app-datashare-download__image position-absolute d-none d-sm-block w-auto">
      <image-mode width="250px">
        <image-mode-source src="@/assets/illustrations/LandingPage_BlueDesktop_LightMode.svg" />
        <image-mode-source
          src="@/assets/illustrations/LandingPage_BlueDesktop_DarkMode.svg"
          color-mode="dark"
        /> </image-mode></span>
    <div class="app-datashare-download__main row">
      <div class="d-flex flex-column">
        <div class="app-datashare-download__main__download-buttons text-center">
          <download-buttons
            :os-value="detectedOs"
            class="app-datashare-download__main__download-buttons__wrapper"
          />
        </div>
        <datashare-download-cards />
      </div>
    </div>
  </app-section>
</template>

<style scoped lang="scss">
@include color-mode(dark) {
  .app-datashare-download {
    background-color: var(--bs-action-bg-subtle);
  }
}
@include color-mode(light) {
  .app-datashare-download {
    background: linear-gradient(77deg, $action-bg-subtle 80%, $action-color-subtle 240%);
  }
}
.app-datashare-download {
  margin-top: 2em;
  &__image {
    top: -4em;
    left: -2em;
  }
  &__main {
    padding: 6em 0;

    &__download-buttons {
      margin-bottom: 5em ;

      &__wrapper {
        background: inherit;
        position: relative;
      }
    }
  }
}
</style>
