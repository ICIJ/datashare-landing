import { computed, type Ref } from 'vue'

import type { Asset } from '@/utils/types.ts'
import { OS, type OsType, useOs } from '@/composables/useOs.ts'

export function useAssets(osValue: OsType, assets: Ref<Asset[]>) {
  const { osDescription, isCompatible } = useOs()

  function getAssetsByExtension(exts: { [key: string]: Asset[] }, asset: Asset) {
    const ext = `.${asset.name.split('.').pop()}`
    if (ext) (exts[ext] ??= []).push(asset)
    return exts
  }

  const assetsByExtension = computed(() => {
    return assets.value.reduce(getAssetsByExtension, {})
  })
  function getAssetUrl(ext: string) {
    const asset = assetsByExtension.value[ext]?.[0]
    return asset?.browser_download_url ?? null
  }

  const assetForMacOs = computed(() => {
    const ext = osDescription[OS.MACOS].ext[0]
    return getAssetUrl(ext)
  })

  const assetForWindows = computed(() => {
    const ext = osDescription[OS.WINDOWS].ext[0]
    return getAssetUrl(ext)
  })

  const assetForDebian = computed(() => {
    const ext = osDescription[OS.DEBIAN].ext[0]
    return getAssetUrl(ext)
  })

  const assetForLinux = computed(() => {
    const ext = osDescription[OS.LINUX].ext[0]
    return getAssetUrl(ext)
  })

  const osAssets = computed(() => {
    const descriptionWithAssets = { ...osDescription }
    descriptionWithAssets[OS.MACOS].asset = assetForMacOs.value
    descriptionWithAssets[OS.WINDOWS].asset = assetForWindows.value
    descriptionWithAssets[OS.DEBIAN].asset = assetForDebian.value
    descriptionWithAssets[OS.DEBIAN].buttons[0].asset = assetForDebian.value
    descriptionWithAssets[OS.DEBIAN].buttons[1].asset = assetForLinux.value
    descriptionWithAssets[OS.LINUX].asset = assetForLinux.value
    descriptionWithAssets[OS.LINUX].buttons[0].asset = assetForDebian.value
    descriptionWithAssets[OS.LINUX].buttons[1].asset = assetForLinux.value
    return descriptionWithAssets
  })
  const osButton = computed(() => {
    if (isCompatible.value && osValue) {
      const asset = osAssets.value[osValue]
      if (asset) {
        return {
          name: asset.name ?? undefined,
          asset: asset.asset ?? undefined,
          icon: asset.icon ?? undefined,
          size: asset.size ?? 'lg',
          guide: asset.guide ?? undefined,
          buttons: asset.buttons ?? []
        }
      }
    }
    return {}
  })
  return { osButton }
}
