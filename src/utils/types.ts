import type { THEME } from '@/utils/enum.ts'

export type Asset = {
  name: string
  browser_download_url: string
  size: number
}

export type Release = {
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
