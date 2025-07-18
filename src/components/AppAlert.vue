<script lang="ts" setup>
import { computed } from 'vue'

import DatashareAlert from '@/components/DatashareAlert/DatashareAlert.vue'
const props = defineProps({
  expirationDate: {type:String},
  currentDate: {type:String, default: new Date().getTime().toString()},

})
const isAvailable = computed(()=>{
  if(props.expirationDate){
    return new Date(props.expirationDate).getTime() > new Date(props.currentDate).getTime()
  }
  return true
})
const link = 'https://docs.google.com/forms/d/e/1FAIpQLSeThKmdrCUigCUnDMpWonG-KV-twAresdKZvd4uEgOFNKJfEg/viewform?usp=sharing&ouid=116923431922054991575'
</script>
<template>
  <b-container
    v-if="isAvailable"
    fluid="lg"
    class="d-flex justify-content-end fixed-bottom "
  >
    <datashare-alert
      class="col-10 col-lg-6"
    >
      We’re building new features to extract structured content. <span class="text-nowrap">Take <a
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        class="alert-link"
      >the survey</a>!</span>
    </datashare-alert>
  </b-container>
</template>
<style scoped lang="scss">
.datashare-alert{
  text-wrap: pretty;
}
</style>
