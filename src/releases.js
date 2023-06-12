import axios from 'axios'
import memoize from 'lodash/memoize'
import property from 'lodash/property'

const api = axios.create({
  baseURL: 'https://api.github.com/repos/ICIJ/datashare-installer/'
})

// Create another promise once to get all releases
export const releases = memoize(() => {
  return api.get('releases').then(property('data'))
})

export const latest = async () => {
  const data = await releases()
  return data.filter(release => !release.prerelease && !release.draft).shift()
}