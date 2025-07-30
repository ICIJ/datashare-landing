import { shallowMount } from '@vue/test-utils'

import AppAlert from '@/components/AppAlert.vue'

describe('AppAlert', () => {
  it('shows alert', () => {
    const wrapper = shallowMount(AppAlert)
    expect(wrapper.isVisible()).toBe(true)
  })
  it('shows alert if expiration date is inferior to current date', () => {
    const currentDate = 'Jul 03 2024'
    const expirationDate = 'Jul 04 2024'
    const wrapper = shallowMount(AppAlert, { props: { expirationDate, currentDate } })
    expect(wrapper.isVisible()).toBe(true)
  })

  it('hides alert if expiration date is anterior to Date.now', () => {
    const wrapper = shallowMount(AppAlert, { props: { expirationDate: 'Jul 05 2024' } })
    expect(wrapper.isVisible()).toBe(false)
  })

  it('hides alert if expiration date is superior to current date', () => {
    const currentDate = 'Jul 05 2024'
    const expirationDate = 'Jul 03 2024'
    const wrapper = shallowMount(AppAlert, { props: { expirationDate, currentDate } })
    expect(wrapper.isVisible()).toBe(false)
  })
})
