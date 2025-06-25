<script setup lang="ts">
import {computed} from 'vue'
const props = defineProps({
  iconColor: {type:String , required:true},
  iconColorId: {type:String , required:true},
})
enum COLOR {
  warning = '#FFBF57',
  success = '#00BB84',
  info = '#45C4FF',
  primary = '#FA4070',
}

const iconColorStart = computed(()=>{
  //@ts-expect-error enum
  return COLOR[props.iconColor]
})
</script>

<template>
  <svg style="width:0;height:0;position:absolute;" aria-hidden="true" focusable="false">
    <linearGradient
      :id="iconColorId"
      x1="0%"
      y1="100%"
      x2="100%"
      y2="0%"
    >
      <stop offset="0%" stop-color="#FFF" />
      <stop offset="100%" :stop-color="iconColorStart" />
    </linearGradient>
  </svg>
</template>
