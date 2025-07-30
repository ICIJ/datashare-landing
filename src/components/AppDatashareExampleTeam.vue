<script setup lang="ts">
import AppSection from '@/components/AppSection.vue'
import DatashareExample from '@/components/DatashareExample/DatashareExample.vue'
</script>

<template>
  <app-section>
    <datashare-example
      class="app-datashare-example-team"
      title="Annotate with your team"
      image-class="col-md-8"
      article-class="col-10 col-sm-6 col-md-4"
    >
      <template #image>
        <image-mode
          alt="User actions on a document"
          image-class="img-fluid"
        >
          <image-mode-source src="@/assets/illustrations/screenshots/Annotate_with_your_team_LightMode.png" />
          <image-mode-source
            src="@/assets/illustrations/screenshots/Annotate_with_your_team_DarkMode.png"
            color-mode="dark"
          />
        </image-mode>
      </template>
      <ul>
        <li>Add stars, tags and recommendations</li>
        <li>Share your findings with your teammates</li>
        <li>
          Run batch actions with Datashare’s companion software
          <a href="https://github.com/ICIJ/datashare-tarentula">Tarentula</a>
        </li>
      </ul>
    </datashare-example>
  </app-section>
</template>

<style lang="scss" scoped>
.app-datashare-example-team {
  background: url('@/assets/illustrations/LandingPage_YellowColumns_LightMode.svg') bottom 0 right 0 no-repeat;
}

@include color-mode(dark) {
  .app-datashare-example-team {
    background: url('@/assets/illustrations/LandingPage_YellowColumns_DarkMode.svg') bottom 0 right 0 no-repeat;
  }
}
</style>
