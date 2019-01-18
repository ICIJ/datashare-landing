<template>
  <svg height="4.2333331mm" width="4.2333331mm" viewBox="0 0 14.999999 14.999999" class="corner" :class="cornerDirectionClass">
    <path :style="{ fill }" d="M 15,0 A 15,15 0 0 1 0,15 l 15,0 0,-15 z"/>
  </svg>
</template>

<script>
  export default {
    name: 'Corner',
    props: {
      fill: {
        type: String,
        default: 'currentColor'
      },
      direction: {
        type: String,
        default: 'top-left'
      }
    },
    computed: {
      cornerDirectionClass () {
        return `corner--${this.direction}`
      }
    }
  }
</script>

<style lang="scss">
  .corner {
    &--top-left { transform: rotate(0); }
    &--top-right { transform: rotate(90deg); }
    &--bottom-left { transform: rotate(-90deg); }
    &--bottom-right { transform: rotate(-180deg); }
  }
</style>
