<script setup lang="ts">


import DatashareExample from '@/components/DatashareExample/DatashareExample.vue'
import AppSection from '@/components/AppSection.vue'
</script>

<template>
  <app-section>
    <datashare-example
      class="app-datashare-example-project"
      title="Understand your data"
      image-class="col-md-8"
      article-class="col-10 col-sm-6 col-md-4"
    >
      <template #image>
        <image-mode
          alt="Project insights"
          image-class="img-fluid "
        >
          <image-mode-source src="@/assets/illustrations/screenshots/Understand_your_data_LightMode.png" />
          <image-mode-source
            src="@/assets/illustrations/screenshots/Understand_your_data_DarkMode.png"
            color-mode="dark"
          />
        </image-mode>
      </template>
      <ul>
        <li>Index thousands of documents</li>
        <li>Create your own projects</li>
        <li>Generate insights</li>
        <li>Explore your project by paths</li>
        <li>Export graphs</li>
      </ul>
    </datashare-example>
  </app-section>
</template>

<style lang="scss" scoped>
.app-datashare-example-project {
  background: url('@/assets/illustrations/LandingPage_GreenDots_LightMode.svg') bottom 0 right 0 no-repeat;
}
@include color-mode(dark) {
  .app-datashare-example-project {
    background: url('@/assets/illustrations/LandingPage_GreenDots_DarkMode.svg') bottom 0 right 0 no-repeat;
  }
}
</style>
