<template>
  <div class="demo-button">
    <h4 class="demo-button__lead text-special">
      You cannot install Datashare right now?
    </h4>
    <b-button href="https://datashare-demo.icij.org" variant="info" block size="lg" target="_blank" class="text-uppercase font-weight-bolder demo-button__link">
      <fa icon="bolt" class="mr-2" /> Try the demo
    </b-button>
    <p class="demo-button__story small mt-3">
      This demo instance use an ephemeral user session.<br />
      <a href="https://www.icij.org/blog/2020/03/explore-company-secrets-in-lux-leaks-using-datashare/" target="_blank">
        Learn more about the story behind this demo.
      </a>
    </p>
  </div>
</template>

<script>
  import { BButton } from 'bootstrap-vue'

  // Import the library instance provided by FontAwesome
  import { library } from '@icij/murmur/lib/components/Fa'
  import { Fa } from '@icij/murmur'
  import { faBolt } from '@fortawesome/free-solid-svg-icons/faBolt'

  library.add(faBolt)

  export default {
    name: 'DemoButton',
    components: {
      BButton,
      Fa
    }
  }
</script>

<style lang="scss" scoped>
  @import '../variables.scss';

  .demo-button {
    padding: $spacer;

    &__lead {
      font-weight: bold;
      font-size: 1.3rem;
    }

    &__link {
      border-radius: $border-radius-lg;
      border-width: 0;
      @include gradient-directional($saddle-red, mix($primary, $saddle-red));
    }
  }
</style>
