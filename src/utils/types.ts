import type { PopoverPlacement } from 'bootstrap-vue-next'

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
export interface AppModalHeaderProps {
  title: string,
  image?: string,
  imageAlt?: string,
  imageWidth?:number|string,
  headerCloseClass?: string | string[] ,
  noHeaderClose?: boolean
}
export interface ButtonIconProps{
  id?: string,
  iconLeft?: string|string[]|any,
  iconLeftVariant?: string,
  iconLeftHoverVariant?: string,
  iconLeftWeight?: string,
  iconLeftHoverWeight?: string,
  iconLeftSize?: string,
  iconLeftLabel?: string,
  iconLeftLabelOffset?:number, //
  iconRight?: string|string[]|any,
  iconRightVariant?: string,
  iconRightHoverVariant?: string,
  iconRightWeight?: string,
  iconRightHoverWeight?: string,
  iconRightSize?: string,
  iconRightLabel?: string,
  iconRightLabelOffset?: number,
  iconSpinner?: string| any,
  hideLabel?: boolean,
  hideTooltip?: boolean,
  label?: string,
  square?: boolean,
  to?: any,
  variant: string,
  size?: string,
  block?: boolean,
  pill?: boolean,
  pressed?: boolean,
  tag?: string,
  type?: string,
  loading?: boolean,
  loadingDuration?: string,
  loadingText?: string,
  tooltipLabel?: string,
  tooltipPlacement?: PopoverPlacement,
  tooltipDelay?:{show: number, hide: number},
  showTooltipForce?: boolean,
  hover?: boolean,
  truncate?: boolean
}
