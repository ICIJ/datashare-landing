<script setup lang="ts">

import {computed} from "vue";
import {PhMoon, PhSun} from "@phosphor-icons/vue";
import  {THEME} from "@/utils/enum.ts";
import type { Theme } from '@/utils/types.ts'

const colorMode = defineModel<Theme>({default:THEME.LIGHT})
const isLight = computed(()=>{
  return colorMode.value === THEME.LIGHT ?'fill':'regular'
})
const isDark = computed(()=>{
  return colorMode.value ===  THEME.DARK?'fill':'regular'
})
</script>

<template>
  <div class="color-mode-selector text-secondary-emphasis text-center">
    <b-form-radio-group v-model="colorMode">
      <b-form-radio value="light" class="color-mode-selector__radio" >
        <span class="d-inline-flex align-items-center gap-1"><PhSun :weight="isLight"/>Light mode</span>
      </b-form-radio>
      <b-form-radio value="dark" class="color-mode-selector__radio">
        <span class="d-inline-flex align-items-center gap-1"><PhMoon :weight="isDark"/>Dark mode</span>
      </b-form-radio>
    </b-form-radio-group>
  </div>
</template>
<style lang="scss" >
.color-mode-selector{
  & input[type="radio"]:checked + label {
    color: $action;
  }
}

</style>

