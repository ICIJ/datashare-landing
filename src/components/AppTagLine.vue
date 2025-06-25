

<template>
  <app-section class="app-tag-line mx-2 d-flex flex-column justify-content-center position-relative">
    <h2 class="display-6 text-center fw-bold position-relative"><span class="app-tag-line__text px-1 bg-body" >Tailored for investigative journalists,<br/>&nbsp;useful for everyone</span></h2>
  </app-section>
</template>

<style lang="scss" >
.app-tag-line {
  & .app-section__container{
    --div-height: 420px;
    height: var(--div-height);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:-4em;

    --asset-searched-text: url('@/assets/illustrations/LandingPage_SearchedText_LightMode.svg');
    --asset-graph: url('@/assets/illustrations/LandingPage_Graph_LightMode.svg');
    background:
      var(--asset-searched-text) left -12% / auto no-repeat,
      var(--asset-graph) right 50% / contain no-repeat;





    @include media-breakpoint-down(md) {
      background: var(--asset-searched-text) left -12% / auto no-repeat;
    }
  }

  &__text {
    text-wrap: pretty;
    white-space: pre-line;
  }

}
@include color-mode(dark) {
  .app-tag-line{
    & .app-section__container {
      --asset-searched-text: url('@/assets/illustrations/LandingPage_SearchedText_DarkMode.svg');
      --asset-graph: url('@/assets/illustrations/LandingPage_Graph_DarkMode.svg');

      @include media-breakpoint-down(md) {
        background: var(--asset-searched-text) left -12% / auto no-repeat;
      }
    }
  }

}
</style>
<script setup lang="ts">
import AppSection from "@/components/AppSection.vue";
</script>
