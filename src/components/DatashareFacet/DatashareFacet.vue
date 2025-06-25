<script setup lang="ts">
defineProps({
  title: {type:String}
})
</script>

<template>
  <div class="datashare-facet col-12 col-md-4 py-4">
    <h2 class="datashare-facet__title text-light">{{title}}</h2>
    <p>
    <slot/>
    </p>
  </div>
</template>

<style lang="scss" >
.datashare-facet {
  text-wrap: pretty;
  &__title {
    font-family: 'Roboto Mono', monospace;
  }
  & p {
    margin: 0rem;
    & ul {
      list-style: none;
      padding: 0rem;
      margin: 0rem;

      & li {
        padding: 0.6em 0;
        line-height: 1.3rem;
      }
    }
  }
}
@include color-mode(dark) {
  .app-datashare-facet{
    background-color: var(--bs-action-bg-subtle)!important;
  }
}
</style>
