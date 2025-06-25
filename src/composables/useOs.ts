import { UAParser } from 'ua-parser-js'
import { computed } from 'vue'
export enum OS {
  MACOS = 'macos',
  IOS = 'ios',
  ANDROID = 'android',
  WINDOWS = 'windows',
  DEBIAN = 'debian',
  LINUX = 'linux',
  SNAP = 'snap',
  DOCKER = 'docker',
  OTHER = 'other'
}

export const DEFAULT_ICON = 'download-simple'
type OSAssetSimple = {
  name: string
  icon: string
}
type OSAsset = OSAssetSimple & {
  ext: string[]
  guide?: string
  asset: string | null
  size?: string
  buttons: {
    label: string
    asset?: string | null
    icon?: string
    btnSize?: string
    wrapperClass?: string
    guide?: boolean
  }[]
}
export const simpleOs: { [key: string]: OSAssetSimple } = {
  [OS.SNAP]: {
    name: 'Snap',
    icon: 'bird'
  },
  [OS.DOCKER]: {
    name: 'Docker',
    icon: 'shipping-container'
  }
}
export const osDescription: { [key: string]: OSAsset } = {
  [OS.MACOS]: {
    name: 'Mac',
    icon: 'apple-logo',
    ext: ['.pkg', 'DatashareStandalone.pkg'],
    guide: 'https://icij.gitbook.io/datashare/local-mode/install-datashare-on-mac',
    asset: null,
    buttons: [{ label: 'Download for Mac' }]
  },
  [OS.WINDOWS]: {
    name: 'Windows',
    icon: 'windows-logo',
    ext: ['.exe', 'installDatashareStandalone.exe'],
    guide: 'https://icij.gitbook.io/datashare/local-mode/install-datashare-on-windows',
    asset: null,
    buttons: [{ label: 'Download for Windows' }]
  },
  [OS.DEBIAN]: {
    name: 'Debian',
    icon: 'linux-logo',
    ext: ['.deb'],
    guide: 'https://icij.gitbook.io/datashare/local-mode/install-datashare-on-linux',
    asset: null,
    buttons: [
      { label: 'Download .deb', asset: null, icon: 'ubuntu' },
      {
        label: 'Download .tgz',
        asset: null,
        icon: 'linux-logo',
        btnSize: 'xs',
        wrapperClass: 'small',
        guide: false
      }
    ]
  },
  [OS.LINUX]: {
    name: 'Linux',
    icon: 'linux-logo',
    ext: ['.tgz'],
    guide: 'https://icij.gitbook.io/datashare/local-mode/install-datashare-on-linux',
    asset: null,
    buttons: [
      { label: 'Download .deb', asset: null, icon: 'linux-logo' },
      {
        label: 'Download .tgz',
        asset: null,
        icon: 'linux-logo',
        btnSize: 'xs',
        wrapperClass: 'small',
        guide: false
      }
    ]
  }
}

export function useOs() {
  function family() {
    const { name: os } = new UAParser().getOS()
    return osStringToFamily(os as string)
  }

  function osStringToFamily(osString: string) {
    if (osString.startsWith('Mac')) {
      return OS.MACOS
    } else if (osString.startsWith('iOS')) {
      return OS.IOS
    } else if (osString.startsWith('Android')) {
      return OS.ANDROID
    } else if (osString.startsWith('Windows')) {
      return OS.WINDOWS
    } else if (/Ubuntu|Debian|Raspbian.*/.test(osString)) {
      return OS.DEBIAN
    } else if (/Linux/.test(osString)) {
      return OS.LINUX
    } else {
      return OS.OTHER
    }
  }
  const detectedOs = family()
  const isCompatible = computed(() => {
    return [OS.MACOS, OS.WINDOWS, OS.DEBIAN, OS.LINUX].includes(detectedOs)
  })
  return { detectedOs, isCompatible, family, osStringToFamily, osDescription }
}
