<script setup lang="ts">
import { inject } from 'vue'

import {type OsType, useOs} from '@/composables/useOs.ts'
import {useRelease} from '@/composables/useRelease.ts'
import ButtonDownload from '@/components/Download/ButtonDownload.vue'
import {useAssets} from '@/composables/useAssets.ts'
import DatashareDownloadModal from '@/components/DatashareDownloadModal/DatashareDownloadModal.vue'
import { ReleasesKey } from '@/utils/types.ts'

defineOptions({name: 'DownloadButtons'})
const props = defineProps<{osValue:OsType}>()

const { isCompatible}=useOs()
const releases = inject(ReleasesKey)
const {latestAssets} = useRelease(releases)
const {osButton}=useAssets(props.osValue,latestAssets)
</script>

<template>
  <div class="download-buttons d-flex flex-column gap-2">
    <div v-if="isCompatible && osButton.buttons?.length" class=" d-flex flex-column gap-2">
      <div v-for="({ label, asset, icon, wrapperClass, btnSize}, i) in osButton.buttons" :key="i" :class="wrapperClass">
        <button-download
          :asset="asset || osButton.asset"
          :size="btnSize || osButton.size"
          :icon="icon ?? osButton.icon"
        >
          {{ label }}
        </button-download>
      </div>
    </div>
    <div v-else>
      <button-icon
        icon-left="download-simple"
        variant="secondary"
        class=" p-4"
        size="lg"
      >
        <datashare-download-modal title="Available only on desktop" />
      </button-icon>
    </div>
  </div>
</template>




