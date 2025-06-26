<script setup lang="ts">
import DatashareResourceCard from '@/components/DatashareResource/DatashareResourceCard.vue'
import ImageModeSource from '@/components/ImageMode/ImageModeSource.vue'
import ImageMode from '@/components/ImageMode/ImageMode.vue'
import AppSection from '@/components/AppSection.vue'
const resources = {
  search: {
    title: 'Search in your documents effi&shy;cien&shy;tly',
    icon: 'ListMagnifyingGlass',
    iconColor: 'primary',
    externalLink: 'https://icij.gitbook.io/datashare/usage/search-documents',
    content:
      'In the local version, all data is on your computer and you have multiple ways to explore what your documents contain'
  },
  collaboration: {
    title: 'Colla&shy;bo&shy;ra&shy;ti&shy;ve&shy;ly work on a server',
    icon: 'hand-waving',
    iconColor: 'warning',
    iconWeight: 'fill',
    externalLink: 'https://icij.gitbook.io/datashare/server-mode/about-the-server-mode',
    content:
      'Self-host and set up your own online instance to work as a team on the same documents. Use social features like tags and recommendations'
  },
  api: {
    title: 'Query your data with API',
    icon: 'code-block',
    iconColor: 'success',
    iconWeight: 'fill',
    externalLink: 'https://icij.gitbook.io/datashare/developers/backend/api',
    content:
      'In the local version, all data is on your computer and you have multiple ways to explore what your documents contain'
  },
  modular: {
    title: 'Install plugins and exten&shy;sions',
    icon: 'puzzle-piece',
    iconColor: 'info',
    iconWeight: 'fill',
    externalLink: 'https://icij.gitbook.io/datashare/local-mode/plugins-and-extensions',
    content:
      'Run analytics, filter by email addresses, add sentence case, paginate text or add your own custom plugin/extension'
  }
}
</script>

<template>
  <app-section>
    <div class="app-datashare-resources d-flex flex-column">
      <h3 class="py-4">
        Learn how to
        <image-mode
          class="app-datashare-resources__illustration"
          width="230"
        >
          <image-mode-source
            alt="Student illustration"
            src="@/assets/illustrations/LandingPage_BlueStudent_LightMode.svg"
          />
          <image-mode-source
            alt="Student illustration"
            src="@/assets/illustrations/LandingPage_BlueStudent_DarkMode.svg"
            color-mode="dark"
          />
        </image-mode>
      </h3>
        <div class="d-flex flex-row flex-wrap flex-md-nowrap gap-4 p-sm-0">
        <datashare-resource-card v-bind="resources.search" />
        <datashare-resource-card v-bind="resources.collaboration" />
        <datashare-resource-card v-bind="resources.api" />
        <datashare-resource-card v-bind="resources.modular" />
        </div>
    </div>
  </app-section>
</template>

<style scoped lang="scss">
.app-datashare-resources {
  position: relative;
  padding: 3.5em 0;
  &__illustration {
    position: absolute;
    left: 5.5em;
    top: -3.2em;
  }
}
</style>
