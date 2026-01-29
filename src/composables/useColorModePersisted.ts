import { useColorMode } from 'bootstrap-vue-next'
import { computed } from 'vue'

import { THEME } from '@/utils/enum.ts'

export function useColorModePersisted({ persist = true, restore = false }: { persist?: boolean, restore?: boolean } = {}) {
  const mode = useColorMode({ persist })

  if (restore) {
    mode.value = mode.store.value
  }

  const isDark = computed(() => {
    return mode.value === THEME.DARK
  })

  const isLight = computed(() => {
    return mode.value === THEME.LIGHT
  })

  return { mode, isDark, isLight }
}
