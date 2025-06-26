<script setup lang="ts">
import { PhEyes } from '@phosphor-icons/vue'
import { computed, ref } from 'vue'
import { useColorMode } from 'bootstrap-vue-next'

import ImageMode from '@/components/ImageMode/ImageMode.vue'
import ImageModeSource from '@/components/ImageMode/ImageModeSource.vue'
import ColorModeSelector from '@/components/ColorModeSelector.vue'
import AppSection from '@/components/AppSection.vue'
import type { Theme } from '@/utils/types.ts'
import { THEME } from '@/utils/enum.ts'
const mode = useColorMode()
const colorMode = ref<Theme>(mode.value)
const isLight = computed(() => {
  return colorMode.value === THEME.LIGHT
})
</script>

<template>
  <app-section class="app-datashare-demo">
    <image-mode
      width="160px"
      class="app-datashare-demo__image position-absolute end-0"
    >
      <image-mode-source src="@/assets/illustrations/LandingPage_YellowPlanet_LightMode.svg" />
    </image-mode>
    <div class="app-datashare-demo__content d-flex flex-column position-relative">
      <h3 class="app-datashare-demo__content__title fw-normal col-11">
        Want to dive into the <span class="fw-bold text-nowrap"> Lux Leaks</span> documents?
        <span class="text-nowrap gap-1">Try our <a href="https://datashare-demo.icij.org">demo</a><PhEyes
          weight="fill"
          class="ms-1 mb-1"
        /></span>
      </h3>
      <div class="align-self-center col-10">
        <image-mode
          class="d-flex align-self-center py-4"
          image-class="rounded-4 shadow-lg"
          width="100%"
          alt="Datashare demo screenshot"
        >
          <image-mode-source
            v-if="isLight"
            src="@/assets/illustrations/screenshots/Demo_LightMode.png"
          />
          <image-mode-source
            v-else
            src="@/assets/illustrations/screenshots/Demo_DarkMode.png"
          />
        </image-mode>
        <color-mode-selector v-model="colorMode" />
      </div>
    </div>
  </app-section>
</template>

<style scoped lang="scss">
@include color-mode(dark) {
  .app-datashare-demo {
    background-color: var(--bs-action-bg-subtle);
  }
}
@include color-mode(light) {
  .app-datashare-demo {
    background: linear-gradient(77deg, $warning-bg-subtle 80%, $white 107.5%);
  }
}
.app-datashare-demo {
  padding: 4em 0;
  &__image {
    top: -7em;
  }
  &__content {
    &__title {
      font-size: 2.3rem;
      text-wrap: pretty;
      padding-bottom: 1em;
    }
  }
}
</style>
