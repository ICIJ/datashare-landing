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
export type OsType = `${OS}`
export const DEFAULT_ICON = 'download-simple'
type OSAssetSimple = {
  name: string
  icon: string,
  description: string
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
    icon: 'bird',
    description:'List of Snap packages to Datashare application on Ubuntu.'
  },
  [OS.DOCKER]: {
    name: 'Docker',
    icon: 'shipping-container',
    description:'Run datashare as a Docker container.'
  }
}
export const osDescription: { [key: string]: OSAsset } = {
  [OS.MACOS]: {
    name: 'Mac',
    icon: 'apple-logo',
    description:'List of installer packages (.pkg) to run Datashare on macOS.',
    ext: ['.pkg', 'DatashareStandalone.pkg'],
    guide: 'https://icij.gitbook.io/datashare/local-mode/install-datashare-on-mac',
    asset: null,
    buttons: [{ label: 'Download for Mac' }]
  },
  [OS.WINDOWS]: {
    name: 'Windows',
    icon: 'windows-logo',
    description:'List of executables (.exe) to run Datashare on Windows.',
    ext: ['.exe', 'installDatashareStandalone.exe'],
    guide: 'https://icij.gitbook.io/datashare/local-mode/install-datashare-on-windows',
    asset: null,
    buttons: [{ label: 'Download for Windows' }]
  },
  [OS.DEBIAN]: {
    name: 'Debian',
    icon: 'linux-logo',
    description:'List of Debian packages (.deb) to run Datashare on Debian-based system like Ubuntu.',
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
    description:'List of archives (.tar.gz) containing Datashare as a JAR (Java Archive) packaged application.',
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
  },
  [OS.OTHER]: {
    name: 'Java',
    icon: 'coffee',
    ext: ['.tgz'],
    description:'List of archives (.tar.gz) containing Datashare as a JAR (Java Archive) packaged application.',
    guide: 'https://icij.gitbook.io/datashare/local-mode/install-datashare-on-linux',
    asset: null,
    buttons: [
      { label: 'Download .tar.gz', asset: null, icon: 'coffee' },
    ]
  }
}

export function useOs() {
  function family() {
    const { name: os } = new UAParser().getOS()
    return osStringToFamily(os as string)
  }

  function osStringToFamily(osString: string) {
    const osLower = osString.toLowerCase()
    if (osLower.startsWith('mac')) {
      return OS.MACOS
    } else if (osLower.startsWith('ios')) {
      return OS.IOS
    } else if (osLower.startsWith('android')) {
      return OS.ANDROID
    } else if (osLower.startsWith('windows')) {
      return OS.WINDOWS
    } else if (/ubuntu|debian|raspbian.*/.test(osLower)) {
      return OS.DEBIAN
    } else if (/linux/.test(osLower)) {
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
