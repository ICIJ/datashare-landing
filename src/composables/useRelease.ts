import memoize from 'lodash/memoize'
import { ref, computed, type Ref } from 'vue'
import orderBy from 'lodash/orderBy'
import filter from 'lodash/filter'
import some from 'lodash/some'
import endsWith from 'lodash/endsWith'
import findIndex from 'lodash/findIndex'

import type { Release, Asset } from '@/utils/types'

export function useRelease(newReleases:Ref<Release[]> = ref([])) {
  const releases = newReleases
  const error=ref<string|null>(null)
  const isLoading=ref<boolean>(false)

  const retrieveReleases = async ()=>{
    if(!releases.value.length || error.value !== null) {
      try {
        isLoading.value = true
        error.value = null
        const results = await getReleases()
        releases.value = orderByDate(results)
      } catch (err: any) {
        error.value = err as string
        releases.value = []
      } finally {
        isLoading.value = false
      }
    }
  }


  const getData = async (response: Response): Promise<Release[]> => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
  }

  const getReleases = memoize(function()  {
    const baseURL = 'https://api.github.com/repos/ICIJ/datashare-installer/releases'
    const params = new URLSearchParams({ per_page: '100' })
    return fetch(`${baseURL}?${params}`).then(getData)
  })

  const latest = computed(() => {
    return releases.value.filter((release) => !release.prerelease && !release.draft).shift()
  })
  const latestAssets = computed(() => {
    return latest.value?.assets ?? []
  })
  const latestVersion = computed(() => {
    return latest.value?.tag_name
  })
  const latestYear = computed(() => {
    return latest.value?.created_at ? new Date(latest.value?.created_at).getFullYear() : 'Unknown'
  })
  function orderByDate(releases: Release[]) {
    return orderBy(releases, (release) => new Date(release.published_at), 'desc')
  }

  function publishedAt(
    release: Release,
    options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' }
  ) {
    const date = new Date(release.published_at)
    return new Intl.DateTimeFormat('en-US', options).format(date)
  }

  function getAssets(release: Release, exts: string[]): Asset[] {
    // The asset must end with at least one of the given extensions
    return filter(release.assets, ({ name }) => some(exts, (ext) => endsWith(name, ext)))
  }

  function getAsset(release: Release, exts: string[]): Asset {
    // Get all the available assets for this release and the component extensions
    const assets = getAssets(release, exts)

    // Order them to be in same order than the extension list
    const orderedAssets = orderBy(assets, ({ name }) => {
      // The index of the asset in the extension list define its priority
      return findIndex(exts, (ext) => endsWith(name, ext))
    })
    // Then finally give the first asset
    return orderedAssets[0]
  }

  return {
    error,
    isLoading,
    latest,
    latestVersion,
    latestYear,
    latestAssets,
    releases,
    getAsset,
    publishedAt,
    retrieveReleases,
  }
}
