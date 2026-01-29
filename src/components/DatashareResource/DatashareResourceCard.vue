<script setup lang="ts">
import { computed, type Component } from 'vue'

import SvgLinearGradient from '@/components/SvgLinearGradient.vue'

const props = defineProps<{
  icon?: Component
  iconColor: string
  title?: string
  content?: string
  externalLink?: string
}>()

const iconColorId = computed(() => {
  return `svg-gradient-${props.iconColor}`
})
const iconColorStyle = computed(() => {
  return `url(#${iconColorId.value}) #FFF`
})
</script>

<template>
  <!-- @vue-ignore -->
  <b-card
    bg-variant="action-subtle"
    class="datashare-resource-card border-0 p-4"
    body-class="d-flex flex-column"
  >
    <div class="mb-2">
      <svg-linear-gradient
        :icon-color="iconColor"
        :icon-color-id="iconColorId"
      />
      <slot name="icon">
        <component
          :is="icon"
          class="datashare-resource-card__icon"
        />
      </slot>
    </div>
    <h4
      class="datashare-resource-card__title mb-4"
      v-html="title"
    />
    <p class="flex-grow-1 text-action-emphasis">
      <slot>{{ content }}</slot>
    </p>

    <a :href="externalLink">Learn more<i-ph-arrow-up-right class="ms-1" /></a>
  </b-card>
</template>

<style lang="scss">
.datashare-resource-card {
  flex: 1 1 250px !important;
  width: 100%;

  @include media-breakpoint-up(sm) {
    flex: 1 1 200px !important;
    width: 50%;
  }

  @include media-breakpoint-up(lg) {
    flex: 1 1 250px !important;
    width: 25%;
  }
  &__icon {
    width: 50px;
    height: 50px;

    svg {
      fill: v-bind(iconColorStyle);
    }
  }
  &__title {
    overflow-wrap: break-word;
    hyphens: manual;
    text-wrap: pretty;
  }
}
</style>
