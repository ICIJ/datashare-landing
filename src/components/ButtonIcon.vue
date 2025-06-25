<template>
  <!-- @vue-ignore -->
  <b-button
    v-bind="buttonProps"
    :aria-label="tooltipText"
    :id="buttonId"
    :to="to"
    :class="classList"
    @mousenter="currentHover = true"
    @mouseleave="currentHover = false"
    ref="element"
    class="button-icon"
  >
    <slot name="start" />
    <phosphor-icon
      v-if="iconLeft || (!iconLeft && !iconRight && loading)"
      v-b-tooltip.top.body="{ title: iconLeftLabel, offset: iconLeftLabelOffset, delay: tooltipDelay }"
      :name="iconLeftOrSpinner"
      :size="iconLeftSize"
      :weight="iconLeftWeight"
      :hover-weight="iconLeftHoverWeight"
      :spin="loading"
      :spin-duration="loadingDuration"
      :variant="iconLeftVariant"
      :hover-variant="iconLeftHoverVariant"
      :hover="currentHover"
      class="button-icon__icon-left"
    />
    <span v-if="!hideLabel" class="button-icon__label">
      <slot v-bind="{ labelOrLoadingText }">{{ labelOrLoadingText }}</slot>
    </span>
    <phosphor-icon
      v-if="iconRight"
      v-b-tooltip.top.body="{ title: iconRightLabel, offset: iconRightLabelOffset, delay: tooltipDelay }"
      :name="iconRightOrSpinner"
      :size="iconRightSize"
      :weight="iconRightWeight"
      :hover-weight="iconRightHoverWeight"
      :spin="loading"
      :spin-duration="loadingDuration"
      :variant="iconRightVariant"
      :hover-variant="iconRightHoverVariant"
      :hover="currentHover"
      class="button-icon__icon-right"
      @click="click('icon-right')"
    />
    <slot name="end" />
    <b-tooltip
      v-if="hasTooltip"
      teleport-to="body"
      :delay="tooltipDelay"
      :boundary-padding="20"
      :placement="tooltipPlacement"
      :target="elementRef"
      :title="tooltipText"
    />
  </b-button>
</template>

<script setup lang="ts">
import {computed, ref, inject, useTemplateRef, type PropType} from 'vue'
import { uniqueId } from 'lodash'
import { PhosphorIcon } from '@icij/murmur-next'
import { PhCircleNotch } from '@phosphor-icons/vue'
import type {PopoverPlacement} from "bootstrap-vue-next";



const injectedVariant = inject('variant', "action")
const injectedSize = inject('size', "md")
const elementRef = useTemplateRef<HTMLElement>('element')

defineOptions({
  name: 'ButtonIcon'
})

const props = defineProps({
  id: {
    type: String
  },
  iconLeft: {
    type: [String, Object, Array],
    default: null
  },
  iconLeftVariant: {
    type: String,
    default: null,
  },
  iconLeftHoverVariant: {
    type: String,
    default: null,
  },
  iconLeftWeight: {
    type: String,
    default: null,
  },
  iconLeftHoverWeight: {
    type: String,
    default: null,
  },
  iconLeftSize: {
    type: String
  },
  iconLeftLabel: {
    type: String,
    default: null
  },
  iconLeftLabelOffset: {
    type: Number,
    default: 19
  },
  iconRight: {
    type: [String, Object, Array],
    default: null
  },
  iconRightVariant: {
    type: String,
    default: null,
  },
  iconRightHoverVariant: {
    type: String,
    default: null,
  },
  iconRightWeight: {
    type: String,
    default: null,
  },
  iconRightHoverWeight: {
    type: String,
    default: null,
  },
  iconRightSize: {
    type: String
  },
  iconRightLabel: {
    type: String,
    default: null
  },
  iconRightLabelOffset: {
    type: Number,
    default: 19
  },
  iconSpinner: {
    type: [String, Object],
    default: PhCircleNotch
  },
  hideLabel: {
    type: Boolean,
    default: false
  },
  hideTooltip: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: null
  },
  square: {
    type: Boolean,
    default: false
  },
  to: {
    type: Object
  },
  variant: {
    type: String
  },
  size: {
    type: String
  },
  block: {
    type: Boolean
  },
  pill: {
    type: Boolean
  },
  pressed: {
    type: Boolean,
    default: null
  },
  tag: {
    type: String,
    default: 'button'
  },
  type: {
    type: String,
    default: 'button'
  },
  loading: {
    type: Boolean
  },
  loadingDuration: {
    type: String,
    default: '1s'
  },
  loadingText: {
    type: String
  },
  tooltipLabel: {
    type: String,
    default: null
  },
  tooltipPlacement: {
    type: String as PropType<PopoverPlacement>,
    default: "top"
  },
  tooltipDelay: {
    type: Object as PropType<{ show: number, hide: number }>,
    default: () => ({ show: 0, hide: 0 })
  },
  showTooltipForce: {
    type: Boolean
  },
  hover: {
    type: Boolean
  },
  truncate: {
    type: Boolean
  }
})

const emit = defineEmits(['click:icon-right'])

function click(name:'icon-right') {
  emit(`click:${name}`)
}

const currentHover = ref(false)

const buttonId = computed(() => props.id ?? uniqueId('button-icon-'))

const classList = computed(() => {
  return {
    'button-icon--square': props.square,
    'button-icon--loading': props.loading,
    'button-icon--truncate': props.truncate,
    'button-icon--hover': currentHover.value,
    'button-icon--use-injected-variant': !props.variant,
    'button-icon--use-injected-size': !props.size
  }
})

const iconLeftOrSpinner = computed(() => {
  return props.loading ? props.iconSpinner : props.iconLeft
})

const iconRightOrSpinner = computed(() => {
  return props.loading ? props.iconSpinner : props.iconRight
})

const labelOrLoadingText = computed(() => {
  return props.loading && props.loadingText ? props.loadingText : props.label
})

const tooltipText = computed(() => {
  return props.tooltipLabel ?? props.label
})

const hasTooltip = computed(() => {
  return !!tooltipText.value && !props.hideTooltip && (props.showTooltipForce || props.hideLabel)
})

const buttonProps = computed(() => ({
  block: props.block,
  pill: props.pill,
  pressed: props.pressed,
  size: props.size ?? injectedSize,
  tag: props.tag,
  type: props.type,
  variant: props.variant ?? injectedVariant
}))
</script>

<style lang="scss">
.button-icon {
  --button-icon-square-size: calc(
    #{$btn-line-height * $btn-font-size} + #{$btn-padding-y * 2} + #{$btn-border-width} * 2
  );
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  min-width: 0;

  .button-icon-counter {
    margin-left: $spacer-xs;
  }

  &--truncate {
    max-width: 100%;

    .button-icon__label {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1 0 0;
    }
  }

  &--square {
    padding: 0;
    align-items: center;
    justify-content: center;
    width: var(--button-icon-square-size);
    height: var(--button-icon-square-size);
    position: relative;
    flex-shrink: 0;

    .button-icon-counter {
      margin-left: 0;
      position: absolute;
      bottom: auto;
      left: auto;
      right: 0;
      top: 0;
      transform: translate(50%, -50%);
    }
  }

  &--square.btn-sm {
    width: calc(#{$btn-line-height * $btn-font-size-sm} + #{$btn-padding-y-sm * 2} + #{$btn-border-width} * 2);
    height: calc(#{$btn-line-height * $btn-font-size-sm} + #{$btn-padding-y-sm * 2} + #{$btn-border-width} * 2);
  }

  &--square.btn-lg {
    width: calc(#{$btn-line-height * $btn-font-size-lg} + #{$btn-padding-y-lg * 2} + #{$btn-border-width} * 2);
    height: calc(#{$btn-line-height * $btn-font-size-lg} + #{$btn-padding-y-lg * 2} + #{$btn-border-width} * 2);
  }

  &__icon-left ~ &__label,
  &__label ~ &__icon-right {
    margin-left: $spacer-xs;
  }

  &__icon-left,
  &__icon-right {
    --phosphor-icon-size: #{$line-height-base * $btn-font-size};

    .btn-sm & {
      --phosphor-icon-size: #{$line-height-base * $btn-font-size-sm};
    }

    .btn-lg & {
      --phosphor-icon-size: #{$line-height-base * $btn-font-size-lg};
    }
  }
}
</style>
