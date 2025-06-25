<script setup lang="ts">
import {BImg} from 'bootstrap-vue-next'

import DatashareTestimonial from '@/components/DatashareTestimonial/DatashareTestimonial.vue'
import AppSection from '@/components/AppSection.vue'

type Testimonial = {
  quote:string,
  author:string,
  logo?:string,
  affiliation?:string,
}
const testimonials :Testimonial[] = [
  {
    quote:'A powerful easy-to-use tool indispensable to my investigations',
    author:'Abdelhak El Idrissi, France',
    logo:'LeMonde',
    affiliation:'Le Monde'
  },
  {
    quote:'I batch-search hundreds of people across millions of documents and get story leads in one go',
    author:'Purity Mukami, Kenya',
    logo:'OCCRP',
    affiliation:'OCCRP'
  },
  {
    quote:'A treasure trove! I land a single clinching document or a file with hundreds of pages for unravelling a subject',
    author:'Ritu Sarin, India',
    logo:'TheIndianExpress',
    affiliation:'The Indian Express'
  },
  {
    quote:'Open Source “Best Project”',
    author:'Paris Open Source Summit',
    logo:'LesActeursDuLibre',
    affiliation:'Les Acteurs Du Libre'
  },
  {
    quote:'Essential tool for small newsrooms. Batch-search and auto-translation are a big help',
    author:'Jiyoon Kim, South Korea',
    logo:'KCIJ',
    affiliation:'KCIJ'
  },
  {
    quote:'A must-have for efficiently scanning, filtering, and searching through a large collection of documents.',
    author:'Katharina Brunner, Germany',
    logo:undefined,
    affiliation:undefined
  }
]
</script>

<template>
  <app-section class="app-datashare-testimonials p-4">
    <b-img
      class="app-datashare-testimonials__illustration"
      alt="Testimonial illustration"
      width="160"
      src="@/assets/illustrations/LandingPage_GreenPin_LightMode.svg"
    />
    <div class="remove-outer-line">
      <div class="remove-double-line row row-wrap justify-content-center ">
        <datashare-testimonial
          v-for="(testimonial,i) in testimonials"
          :key="i"
          v-bind="testimonial"
        />
      </div>
    </div>
  </app-section>
</template>

<style scoped lang="scss">
.app-datashare-testimonials{
  position: relative;
  margin-top: 1em;
  &__illustration{
    position: absolute;
    top:-130px;
    right:30%;
  }
  & .remove-outer-line{
    margin: -2px;
    overflow: hidden;
    & .remove-double-line {
      margin-top:-2px;
      margin-left:-2px;
      & .datashare-testimonial {
        flex: 1 1 33%;
        margin-top: 2px;
        margin-left: 2px;
      }
    }
  }
}


</style>
