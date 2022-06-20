import UAParser from 'ua-parser-js'

export function family() {
  const { name: os } = new UAParser().getOS()
  return osStringToFamily(os);
}

export function osStringToFamily(osString) {
  if (osString.startsWith('Mac')) {
    return 'macos'
  } else if (osString.startsWith('iOS')) {
    return 'ios'
  } else if (osString.startsWith('Android')) {
    return 'android'
  } else if (osString.startsWith('Windows')) {
    return 'windows'
  } else if (/Ubuntu|Debian|Raspbian.*/.test(osString)) {
    return 'debian'
  } else if (/Linux/.test(osString)) {
    return 'linux'
  } else {
    return null
  }
}

export default family()
