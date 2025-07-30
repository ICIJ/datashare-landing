<script setup lang="ts">
import DownloadVariants from '@/components/Download/DownloadVariants.vue'
import AppModal from '@/components/AppModal/AppModal.vue'

defineProps({
  title: { type: String, default: 'All platforms and versions' }
})
</script>

<template>
  <span
    v-b-modal.downloadListModal
    class="datashare-download-modal"
  >
    {{ title }}
    <app-modal
      id="downloadListModal"
      lazy
      scrollable
      no-footer
      size="lg"
      title="All platforms and versions"
    >
      <download-variants />
    </app-modal>
  </span>
</template>
