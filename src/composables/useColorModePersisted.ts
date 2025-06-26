import { useColorMode } from 'bootstrap-vue-next'
import { computed } from 'vue'

import { THEME } from '@/utils/enum.ts'

export function useColorModePersisted() {
  const mode = useColorMode({persist:true})
  const isDark = computed(() => {
    return mode.value === THEME.DARK
  })
  const isLight = computed(() => {
    return mode.value === THEME.DARK
  })
  return {mode,isDark,isLight}
}
