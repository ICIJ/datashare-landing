<script setup lang="ts">
import { provide } from 'vue'

import AppModalHeader from './AppModalHeader.vue'


// This tells every nested component they are in a modal
provide('modal', true)

const modelValue = defineModel({ type: Boolean })

interface AppModalProps {
  title: string,
  image: string,
  imageAlt: string,
  imageWidth?: number|string ,
  buttonSize: "sm" | "md" | "lg" ,
  cancelDisabled: boolean,
  cancelTitle: string,
  cancelVariant: string,
  okDisabled: boolean
  okOnly: boolean
  okTitle: string,
    okVariant: string,
  size: "sm" | "md" | "lg" | "xl",
  headerCloseClass: string| string[] | any,
  noHeaderClose?: boolean
}

withDefaults(defineProps<AppModalProps>(),{imageWidth:"60px", noHeaderClose:false})
</script>

<template>
  <b-modal v-model="modelValue" :button-size="buttonSize" :size="size" :title="title" class="app-modal">
    <template #header="{ cancel, close, hide, ok, visible }">
      <slot name="header" v-bind="{ cancel, close, hide, ok, visible }">
        <app-modal-header
          :image="image"
          :image-alt="imageAlt"
          :image-width="imageWidth"
          :title="title"
          :header-close-class="headerCloseClass"
          :no-header-close="noHeaderClose"
          @close="close"
        >
          <template #close>
            <slot name="header-close" />
          </template>
          <template #image>
            <slot name="header-image" />
          </template>
          <template #image-source>
            <slot name="header-image-source" />
          </template>
          <template #title>
            <slot name="title" />
          </template>
        </app-modal-header>
      </slot>
    </template>
    <template #footer="{ cancel, close, hide, ok, visible }">
      <slot
        name="footer"
        v-bind="{ cancel, close, hide, ok, visible }"
      />
    </template>
    <template #default="{ cancel, close, hide, ok, visible }">
      <slot v-bind="{ cancel, close, hide, ok, visible }" />
    </template>
  </b-modal>
</template>

<style lang="scss">
.app-modal {
  .modal-header,
  .modal-body,
  .modal-footer {
    padding-inline: $spacer-xxl;

    @include media-breakpoint-down(lg) {
      padding-inline: $spacer;
    }
  }

  .modal-header + .modal-body {
    padding-top: $spacer;
  }

  .modal-body + .modal-footer {
    padding-top: 0;
  }

  .modal-fullscreen {
    @include media-breakpoint-up(md) {
      max-width: calc(100vw - var(--bs-modal-margin) * 2);
      padding-block: var(--bs-modal-margin);
      margin: auto;
      width: 100%;
      // This is a clearfix to ensure the modal has a small margin
      &:after {
        content: '';
        display: block;
        width: 1px;
        height: var(--bs-modal-margin);
      }

      .modal-body {
        overflow-y: visible;
      }

      .modal-content {
        border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);
        border-radius: var(--bs-modal-border-radius);
      }
    }

    .modal-content {
      height: auto;
      min-height: calc(100vh - var(--bs-modal-margin) * 2);
    }
  }
}
</style>
