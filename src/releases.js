import axios from 'axios'
import memoize from 'lodash/memoize'
import property from 'lodash/property'

const api = axios.create({
  baseURL: 'https://api.github.com/repos/ICIJ/datashare-installer/'
})

export const STABLE_VERSION_RE = /^\d+\.\d+\.\d+$/

// Create another promise once to get all releases
export const releases = memoize(() => {
  return api.get('releases').then(property('data'))
})

export const latest = async () => {
  const data = await releases()
  return data.filter(release => STABLE_VERSION_RE.test(release.name)).shift()
}