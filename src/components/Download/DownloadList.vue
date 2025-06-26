<script lang="ts" setup>
import { computed,onBeforeMount } from 'vue'
import castArray from 'lodash/castArray'
import {PhosphorIcon} from '@icij/murmur-next'
import {BTbody} from 'bootstrap-vue-next'

import {useRelease} from '@/composables/useRelease.ts'
import {type HumanSize, useHumanSize} from '@/composables/useHumanSize.ts'
import type {Release} from '@/utils/types.ts'
import DatashareDownloadModalToggleExperimental from '@/components/DatashareDownloadModal/DatashareDownloadModalToggleExperimental.vue'

const showExperimentalVersions = defineModel({type: Boolean})

const props = defineProps<{
  ext: string|string[],
}>()

const {humanSize} = useHumanSize()
const {releases, getAsset, publishedAt, error,retrieveReleases,isLoading} = useRelease()
onBeforeMount(async ()=> {
  await retrieveReleases()
})
const exts = computed((): string[] => {
  return castArray(props.ext)
})
type dtoRelease = {
  name: string,
  downloadUrl: string,
  publishedAt: string,
  humanSize: HumanSize,
  prerelease: boolean,
}
const getReleasesWithFirstAsset = (acc: dtoRelease[], release: Release) => {
  const asset = getAsset(release, exts.value)
  //filter
  if (!!asset && (showExperimentalVersions.value || !release.prerelease)) {
    //map
    const result = {
      name: release.name,
      downloadUrl: asset.browser_download_url,
      publishedAt: publishedAt(release),
      humanSize: humanSize(asset.size),
      prerelease: release.prerelease
    }
    acc.push(result)
  }
  return acc
}

const filteredReleases = computed(() => {
  return releases.value?.reduce(getReleasesWithFirstAsset, [])
})
</script>

<template>
  <div>
    <b-overlay :show="isLoading" rounded="sm" class="p-4">
      <div v-if="error" class="py-3">
        An error occurred. <a href="https://github.com/ICIJ/datashare/releases">Explore all versions</a> on Github
      </div>
      <b-table-simple
        v-else
        class="download-list"
        hover
        responsive
        striped
      >
        <b-tbody>
          <b-tr v-for="release in filteredReleases" :key="release.name" class="d-flex ">
            <b-td class="download-list__row d-flex flex-grow-1 gap-2 align-items-center justify-content-between">
              <div class=" d-flex download-list__row__version gap-2 ">
                <a :href="release.downloadUrl" class="download-list__row__version__link font-weight-bold d-inline-flex gap-2 fw-bold">
                  <phosphor-icon name="download-simple" />
                  <span>{{ release.name }}</span>
                </a>
                <phosphor-icon
                  v-if="release.prerelease"
                  fill
                  name="flask"
                  title="Experimental version"
                  variant="info"
                />
              </div>
              <div class="download-list__row__info d-flex gap-2">
                <span class="download-list__row__info__size text-end text-nowrap">
                  <span class=" format-number">{{ release.humanSize.size }}</span> {{ release.humanSize.unit }}
                </span>
                <span class="download-list__row__info__date text-end text-body text-nowrap">  {{ release.publishedAt }} </span>
              </div>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </b-overlay>
    <datashare-download-modal-toggle-experimental v-model="showExperimentalVersions" />
  </div>
</template>


<style lang="scss">
.download-list {
  max-height: 50vh;

  & tr:last-of-type, & tr:last-of-type td {
    border-bottom: 0;
  }

  & .download-list__row
  {
    &__version__link {

      min-width: 5em;
    }
    &__info{
      &__size{
        font-variant-numeric: tabular-nums
      }
      &__date{
        min-width: 7em;
      }
    }

  }

}
</style>
