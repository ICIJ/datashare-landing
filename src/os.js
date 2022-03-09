function family() {
  const { navigator } = window
  const userAgent = navigator.userAgent
  const platform = navigator?.userAgentData?.platform || navigator.platform
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
    case /Android/i.test(userAgent):
      return 'android'
    case /Linux/i.test(platform):
      return 'linux'
    default:
      return null
  }
}

export default family()
