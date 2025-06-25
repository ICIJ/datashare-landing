<script setup lang="ts">
defineProps({
  title: {type:String}
})
</script>

<template>
  <div class="datashare-feature d-flex flex-column-md position-relative col col-md-3 flex-grow-1">
    <div class="position-absolute top-0 end-0 badge"><slot name="badge"></slot></div>
    <b-card :title="title" class="feature-card__card bg-action-subtle my-3 border-0 ">
      <b-card-body><slot/></b-card-body>
    </b-card>
  </div>
</template>

<style lang="scss" scoped>
.datashare-feature {
  text-wrap: pretty;
  &__card {
    display: flex;

  }
  & :deep(.card-title) {
    padding: 0.5em var(--bs-card-spacer-x) 0 var(--bs-card-spacer-x);
  }
  & .badge{
    z-index: 10;
  }
}
@include color-mode(light) {
  .datashare-feature {
    & :deep(.card-title) {
      color: var(--bs-action);
    }
  }
}
</style>
