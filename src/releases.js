import axios from 'axios'
import memoize from 'lodash/memoize'
import property from 'lodash/property'

const api = axios.create({
  baseURL: 'https://api.github.com/repos/ICIJ/datashare-installer/'
})

// Create a promise once to get the release details
export const latest = memoize(() => {
  return api.get('releases/latest').then(property('data'))
})

// Create another promise once to get all releases
export const releases = memoize(() => {
  return api.get('releases').then(property('data'))
})
