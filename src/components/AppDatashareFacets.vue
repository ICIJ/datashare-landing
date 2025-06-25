<script setup lang="ts">

import DatashareFacet from "@/components/DatashareFacet/DatashareFacet.vue";
import AppSection from "@/components/AppSection.vue";
</script>

<template>
  <app-section class="app-datashare-facets text-bg-action">
    <div class="app-datashare-facets__content row row-wrap justify-content-between p-4 my-4 ">
      <datashare-facet title="Powerful search">
        <ul>
          <li>Dive deep with <strong>advanced search</strong>, <strong>regex</strong> and many <strong>filters</strong></li>
          <li><strong>Batch search</strong> thousands of terms at once</li>
          <li>Get <strong>extreme scalability</strong> from one document to millions</li>
        </ul>
      </datashare-facet>
      <datashare-facet title="Maximum privacy">
        <ul>
          <li>Work <strong>locally on your documents</strong> or upload to your <strong>own server</strong> to collaborate with your team</li>
          <li><strong>No telemetry</strong> collected</li>
          <li><strong>No third-party interference</strong></li>
        </ul>
      </datashare-facet>
      <datashare-facet title="In&shy;te&shy;ro&shy;pe&shy;ra&shy;bi&shy;li&shy;ty">
        <ul>
          <li>Index and export <strong>everything</strong></li>
          <li>Use <strong>command-line</strong> companion software to run batch actions</li>
          <li>Create your own <strong>plugins</strong> and <strong>extensions</strong></li>
        </ul>
      </datashare-facet>
    </div>
  </app-section>
</template>
<style scoped lang="scss">

.app-datashare-facets {
  margin-top: -50px;
}
@include color-mode(dark) {
  .app-datashare-facets{
    background-color: var(--bs-action-bg-subtle)!important;
  }
}
</style>
