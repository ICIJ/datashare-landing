import {family_internal} from '../../src/os'

describe('os detection tests', () => {
  it('detects debian distribution', () => {
    expect(family_internal('Ubuntu')).toMatch('debian')
    expect(family_internal('Linux, Ubuntu 22.04 Gecko/20100101 Firefox/101.0')).toMatch('debian')
    expect(family_internal('Debian')).toMatch('debian')
    expect(family_internal('Raspbian')).toMatch('debian')
  })

  it('detects linux distribution', () => {
    expect(family_internal('Mozilla/5.0 (X11; Linux x86_64; rv:101.0) Gecko/20100101 Firefox/101.0')).toMatch('linux')
  })
})
