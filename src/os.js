function family() {
  const userAgent = window.navigator.userAgent
  const platform = window.navigator.platform

  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']
  const iosPlatforms = ['iPhone', 'iPad', 'iPod']

  switch (true) {
    case macosPlatforms.indexOf(platform) !== -1:
      return 'macos'
    case iosPlatforms.indexOf(platform) !== -1:
      return 'ios'
    case windowsPlatforms.indexOf(platform) !== -1:
      return 'windows'
    case /Android/.test(userAgent):
      return 'android'
    case /Linux/.test(platform):
      return 'linux'
    default:
      return null
  }
}

export default family()
