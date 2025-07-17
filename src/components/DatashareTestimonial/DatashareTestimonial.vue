<script setup lang="ts">
import {computed} from 'vue'


const props = defineProps<{
  quote:string,
  author:string,
  logo?:string,
  affiliation?:string,
}>()

function getLogoPath(logoName:string, mode:'Light'|'Dark' = 'Light') :string{
  return `./logos/${logoName}_${mode}Mode.png`
}
const logoLight =computed(()=>props.logo?getLogoPath(props.logo):null)
const logoDark =computed(()=>props.logo?getLogoPath(props.logo,'Dark'):null)

</script>

<template>
  <div class="datashare-testimonial text-center d-flex flex-column px-3 py-4" bg-variant="light-subtle">
    <blockquote class="flex-grow-1">
      <p class="datashare-testimonial__quote fw-semibold ">
        <slot name="quote">
          {{ quote }}
        </slot>
      </p>
      <cite class="datashare-testimonial__author text-body-tertiary"><slot name="author">{{ author }}</slot></cite>
    </blockquote>
    <image-mode v-if="logo" :alt="affiliation">
      <image-mode-source v-if="logoLight" :src="logoLight" />
      <image-mode-source v-if="logoDark" :src="logoDark" color-mode="dark" />
    </image-mode>
  </div>
</template>

<style scoped lang="scss">
.datashare-testimonial{
  outline: 2px dashed var(--bs-border-color);
  &__quote{
    &:before{
     content: "“";
    }

    &:after{
      content: "”";
    }
  }
  &__author{
    font-style: normal;
    font-size: small;
  }
}
</style>
