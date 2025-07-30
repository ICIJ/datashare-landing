import type { InjectionKey, Ref } from 'vue'

import type { THEME } from '@/utils/enum.ts'

export interface Asset {
  name: string
  browser_download_url: string
  size: number
}

export interface Release {
  url: string
  name: string
  tag_name: string
  created_at: string
  published_at: string
  id: string
  prerelease: boolean
  draft: boolean
  assets: Asset[]
}

export type Theme = `${THEME}`
export interface AppModalHeaderProps {
  title: string
  image?: string
  imageAlt?: string
  imageWidth?: number | string
  headerCloseClass?: string | string[]
  noHeaderClose?: boolean
}

export const ReleasesKey = Symbol() as InjectionKey<Ref<Release[]>>
