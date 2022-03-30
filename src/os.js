import UAParser from 'ua-parser-js'

function family() {
  const ua = new UAParser()
  const { name: os } = ua.getOS()

  if (os.startsWith('Mac')) {
    return 'macos'
  } else if (os.startsWith('iOS')) {
    return 'ios'
  } else if (os.startsWith('Android')) {
    return 'android'
  } else if (os.startsWith('Windows')) {
    return 'windows'
  } else if (os.startsWith('Linux')) {
    return 'linux'
  } else {
    return null
  }    
}

export default family()
