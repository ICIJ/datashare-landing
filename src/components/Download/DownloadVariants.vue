<script setup lang="ts">
import {PhosphorIcon} from '@icij/murmur-next'

import DownloadDocker from './DownloadDocker.vue'
import DownloadList from './DownloadList.vue'
import DownloadSnap from './DownloadSnap.vue'

import {OS,osDescription,simpleOs, useOs} from '@/composables/useOs'
import TabGroup from '@/components/TabGroup/TabGroup.vue'
import TabGroupEntry from '@/components/TabGroup/TabGroupEntry.vue'
import ButtonIcon from '@/components/ButtonIcon.vue'

defineOptions({
  name: 'DownloadVariants'
})

const showExperimentalVersions = defineModel({type:Boolean, default: false})

const {detectedOs} = useOs()
function is(name: OS) {
  return detectedOs === name
}

const tabs= [{
  active:()=>is(OS.LINUX) || is(OS.DEBIAN),
  icon:osDescription[OS.LINUX].icon,
  name:osDescription[OS.LINUX].name,
  ext:osDescription[OS.DEBIAN].ext,
  description:osDescription[OS.DEBIAN].description
},
{
  active:()=>is(OS.MACOS) || is(OS.IOS),
  icon:osDescription[OS.MACOS].icon,
  name:osDescription[OS.MACOS].name,
  ext:osDescription[OS.MACOS].ext,
  description:osDescription[OS.MACOS].description
},
{
  active:()=>is(OS.WINDOWS) || is(OS.ANDROID),
  icon:osDescription[OS.WINDOWS].icon,
  name:osDescription[OS.WINDOWS].name,
  ext:osDescription[OS.WINDOWS].ext,
  description:osDescription[OS.WINDOWS].description
},
{
  active:()=>is(OS.OTHER),
  icon:osDescription[OS.OTHER].icon,
  name:osDescription[OS.OTHER].name,
  ext:osDescription[OS.LINUX].ext,
  description:osDescription[OS.OTHER].description
}]
</script>

<template>
  <div class="d-flex flex-column">
    <tab-group card no-fade>
      <tab-group-entry
        v-for="tab in tabs"
        :key="tab.name"
        lazy
        no-body
        :active="tab.active()"
      >
        <template #title>
          <phosphor-icon :name="tab.icon" /> {{ tab.name }}
        </template>
        <download-list v-model="showExperimentalVersions" :ext="tab.ext" :description="tab.description" />
      </tab-group-entry>

      <tab-group-entry lazy no-body>
        <template #title>
          <phosphor-icon :name="simpleOs[OS.SNAP].icon" /> {{ simpleOs[OS.SNAP].name }}
        </template>
        <download-snap v-model="showExperimentalVersions" />
      </tab-group-entry>
      <tab-group-entry class="tab-group-entry" lazy>
        <template #title>
          <phosphor-icon :name="simpleOs[OS.DOCKER].icon" /> {{ simpleOs[OS.DOCKER].name }}
        </template>
        <download-docker />
      </tab-group-entry>
    </tab-group>
    <button-icon
      icon-left="github-logo"
      variant="outline-secondary"
      class="align-self-end"
      href="https://github.com/ICIJ/datashare/releases"
    >
      Explore all versions
    </button-icon>
  </div>
</template>
