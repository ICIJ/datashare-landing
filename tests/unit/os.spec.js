import {osStringToFamily} from '../../src/os'

describe('os detection tests', () => {
  it('detects debian distribution', () => {
    expect(osStringToFamily('Ubuntu')).toMatch('debian')
    expect(osStringToFamily('Linux, Ubuntu 22.04 Gecko/20100101 Firefox/101.0')).toMatch('debian')
    expect(osStringToFamily('Debian')).toMatch('debian')
    expect(osStringToFamily('Raspbian')).toMatch('debian')
  })

  it('detects linux distribution', () => {
    expect(osStringToFamily('Mozilla/5.0 (X11; Linux x86_64; rv:101.0) Gecko/20100101 Firefox/101.0')).toMatch('linux')
    expect(osStringToFamily('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.115 Safari/537.36')).toMatch('linux')
  })
})
