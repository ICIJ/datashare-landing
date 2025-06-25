<script setup lang="ts">

defineProps({
  title: {type:String},
  articleClass: {type:String},
  imageClass: {type:String},
})
</script>

<template>
  <section class="datashare-example d-flex align-items-center justify-content-around gap-4">
    <div class="d-none d-md-flex" :class="imageClass">
      <slot name="image">
      </slot>
    </div>
    <article :class="articleClass" class="  d-flex">
        <div class="flex-shrink-1 p-2 mx-auto bg-body">
          <header class="h4 text-body-emphasis">{{ title }}</header>
          <slot/>
        </div>
    </article>
  </section>
</template>


<style lang="scss">
@include color-mode(dark) {
  .datashare-example {
    & img{
      border: 1px solid $dark;
    }
  }
}
@include color-mode(light) {
  .datashare-example {
    & img {
      box-shadow: $box-shadow-lg;
    }
  }
}
  .datashare-example {
    margin: 2em 0;
    & article{

      li{
        padding: 0.3em ;
      }
    }
    & img{
      border-radius: var(--bs-border-radius-xl)

    }
  }
@include media-breakpoint-down(md) {
  .datashare-example {
    & article{
      ul {
        list-style: none;
        padding: 0;
      }
    }
  }
}
</style>
