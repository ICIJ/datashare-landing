<script setup lang="ts">
import DatashareExample from '@/components/DatashareExample/DatashareExample.vue'
import AppSection from '@/components/AppSection.vue'
</script>

<template>
  <app-section>
    <datashare-example
      class="app-datashare-example-tasks flex-row-reverse justify-content-md-between"
      title="Quickly surface what’s important"
      image-class="col-md-7 justify-content-end"
      article-class="col-md-4"
    >
      <template #image>
        <image-mode
          alt="Batch search"
          image-class="justify-content-end img-fluid shadow-lg"
        >
          <image-mode-source
            src="@/assets/illustrations/screenshots/Quickly_surface_DarkMode.png"
            color-mode="dark"
          />
          <image-mode-source src="@/assets/illustrations/screenshots/Quickly_surface_LightMode.png" />
        </image-mode>
      </template>
      <ul>
        <li>Search and filter your documents</li>
        <li>Search for up to 10,000 queries at once</li>
        <li>Identify the main people and entities</li>
        <li>Save your important searches</li>
        <li>Download your results</li>
      </ul>
    </datashare-example>
  </app-section>
</template>

<style lang="scss" scoped>
.app-datashare-example-tasks {
  background: url('@/assets/illustrations/LandingPage_PinkSquare_LightMode.svg') no-repeat left center;
}

@include color-mode(dark) {
  .app-datashare-example-tasks {
    background: url('@/assets/illustrations/LandingPage_PinkSquare_DarkMode.svg') no-repeat left center;
  }
}
</style>
