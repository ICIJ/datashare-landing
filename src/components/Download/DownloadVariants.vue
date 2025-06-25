<script setup lang="ts">
import {PhosphorIcon} from "@icij/murmur-next"
import DownloadDocker from './DownloadDocker.vue'
import DownloadList from './DownloadList.vue'
import DownloadSnap from './DownloadSnap.vue'
import {OS,osDescription,simpleOs, useOs} from "@/composables/useOs";
import TabGroup from "@/components/TabGroup/TabGroup.vue";
import TabGroupEntry from "@/components/TabGroup/TabGroupEntry.vue";
import ButtonIcon from "@/components/ButtonIcon.vue";

defineOptions({
  name: 'DownloadVariants'
})

const showExperimentalVersions = defineModel({type:Boolean, default: false})

const {detectedOs} = useOs()
function is(name: OS) {
  if (name === OS.LINUX && detectedOs === OS.DEBIAN) {return true}
  return detectedOs === name
}
const osTabs= [OS.LINUX, OS.MACOS, OS.WINDOWS]
</script>

<template>
  <div class="d-flex flex-column">
    <tab-group  card  no-fade>
      <tab-group-entry class="tab-group-entry" lazy no-body :active="is(osTab)" v-for="osTab in osTabs" :key="osTab">
        <template #title>
          <phosphor-icon :name="osDescription[osTab].icon"/> {{ osDescription[osTab].name }}
        </template>
        <download-list :ext="osDescription[osTab].ext" v-model="showExperimentalVersions" />
      </tab-group-entry>
      <tab-group-entry lazy no-body>
        <template #title>
          <phosphor-icon :name="simpleOs[OS.SNAP].icon"/> {{ simpleOs[OS.SNAP].name }}
        </template>
        <download-snap v-model="showExperimentalVersions" />
      </tab-group-entry>
      <tab-group-entry class="tab-group-entry" lazy>
        <template #title>
          <phosphor-icon :name="simpleOs[OS.DOCKER].icon"/> {{ simpleOs[OS.DOCKER].name }}
        </template>
        <download-docker />
      </tab-group-entry>
    </tab-group>
    <button-icon icon-left="github-logo" variant="outline-secondary" class="align-self-end" href="https://github.com/ICIJ/datashare/releases">Explore all versions</button-icon>
  </div>
</template>
