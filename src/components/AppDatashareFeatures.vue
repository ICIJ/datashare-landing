<script setup lang="ts">
import DatashareFeature from '@/components/DatashareFeature/DatashareFeature.vue'
import AppSection from '@/components/AppSection.vue'
</script>

<template>
  <app-section>
    <b-card-group
      deck
      class="app-datashare-features px-lg-2"
    >
      <datashare-feature title="Extract text and search">
        Process all types of documents, even images. Make them searchable.
      </datashare-feature>
      <datashare-feature title="Find entities">
        <template #badge>
          <img
            alt="Sparkle"
            width="60"
            src="@/assets/illustrations/LandingPage_Sparkle_LightAndDarkMode.svg"
            style="margin-top: -20px; margin-right: -10px"
          >
        </template>
        People, organizations, locations and more. See who is in your files.
      </datashare-feature>
      <datashare-feature title="Export graphs">
        <template #badge>
          <span
            class="badge bg-action fw-normal fs-6 p-1"
            style="margin-right: -15px"
          >
            <img
              alt="Neo4j"
              src="@/assets/illustrations/LandingPage_Neo4j_Logo.svg"
              class="mx-1"
              title="Neo4j"
            >
            plugin
          </span>
        </template>
        Link entities from your docs and discover invisible connections.
      </datashare-feature>
    </b-card-group>
  </app-section>
</template>
