<script setup lang="ts">
import { onBeforeMount, provide } from 'vue'

import AppJumbotron from '@/components/AppJumbotron.vue'
import AppDatashareFeatures from '@/components/AppDatashareFeatures.vue'
import AppTagLine from '@/components/AppTagLine.vue'
import AppNavBar from '@/components/AppNavBar.vue'
import AppDatashareFacets from '@/components/AppDatashareFacets.vue'
import AppDatashareDownload from '@/components/AppDatashareDownload.vue'
import AppDatashareTestimonials from '@/components/AppDatashareTestimonials.vue'
import AppDatashareDemo from '@/components/AppDatashareDemo.vue'
import AppDatashareResources from '@/components/AppDatashareResources.vue'
import AppDatashareContribute from '@/components/AppDatashareContribute.vue'
import AppDatashareExampleProject from '@/components/AppDatashareExampleProject.vue'
import AppDatashareExampleTasks from '@/components/AppDatashareExampleTasks.vue'
import AppDatashareExampleTeam from '@/components/AppDatashareExampleTeam.vue'
import { useColorModePersisted } from '@/composables/useColorModePersisted.ts'
import { useRelease } from '@/composables/useRelease.ts'
import { ReleasesKey } from '@/utils/types.ts'
import AppAlert from '@/components/AppAlert.vue'
const { mode } = useColorModePersisted()
mode.value = mode.store.value

const { retrieveReleases, releases } = useRelease()
onBeforeMount(async()=>{
  await retrieveReleases()
})

provide(ReleasesKey, releases)
const alertExpiration = 'Aug 15 2025'

</script>

<template>
  <b-container fluid>
    <app-nav-bar id="app-nav-bar" />
    <div id="nav-scroller" ref="content" class="app-body d-flex flex-column gap-4">
      <app-jumbotron id="jumbotron" class="app-section" />
      <app-datashare-features id="features " class="app-section" />
      <app-tag-line id="tag-line " class="app-section" />
      <app-datashare-facets id="facets" class="app-section" />
      <app-datashare-example-project class="app-section" />
      <app-datashare-example-tasks class="app-section" />
      <app-datashare-example-team class="app-section" />
      <app-datashare-download id="download" class="app-section" />
      <app-datashare-testimonials id="testimonials" class="app-section" />
      <app-datashare-demo id="demo" class="app-section" />
      <app-datashare-resources id="learn" class="app-section" />
      <app-datashare-contribute id="contribute" class="app-section" />
      <app-alert :expiration-date="alertExpiration" />
    </div>
    <generic-footer />
  </b-container>
</template>

<style scoped lang="scss"></style>
