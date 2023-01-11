<template>
  <div class="download-snap d-flex flex-column">
    <div class="card-body">
      <p>
        Datashare is available on the <a href="https://snapcraft.io/datashare" target="_blank">Snap Store</a>. 
        If Snap is installed on your system (by default on Ubuntu and ElementaryOS), simply use the 
        following command:
      </p>
      <fieldset  :disabled="!showExperimentalVersions">
        <b-input-group class="mb-3">
          <b-form-input :value="snapInstallCmd" readonly class="bg-white" />
          <haptic-copy class="btn btn-primary" :text="snapInstallCmd" />
        </b-input-group>
      </fieldset>
      <b-alert :show="!showExperimentalVersions" variant="warning">
        Datashare's snap is still experimental and only available on the "beta" channel.
      </b-alert>
    </div>
    <div class="download-snap__show-experimental border-top">
      <b-form-checkbox :checked="showExperimentalVersions" switch @input="$emit('input', $event)" class="d-inline-block"
        v-b-popover.hover.top="{ customClass: 'popover-magnified', content: 'Experimental versions (beta, alpha, RC) are unstable and might present bugs. Use them at your own risk.' }"
        title="Experimental versions">
        Show experimental versions
      </b-form-checkbox>
    </div>
  </div>
</template>

<script>
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
import { library } from '@icij/murmur/lib/components/Fa'
import { BAlert, BFormInput, BInputGroup, BFormCheckbox, VBPopover } from 'bootstrap-vue'

library.add(faDownload)

export default {
  name: 'DownloadList',
  model: {
    prop: 'showExperimentalVersions'
  },
  props: {
    showExperimentalVersions: {
      type: Boolean
    }
  },
  mounted () {
    this.$emit('input', true)
  },
  components: {
    BAlert,
    BFormInput, 
    BInputGroup,
    BFormCheckbox
  },
  directives: {
    'b-popover': VBPopover
  },
  computed: {
    snapInstallCmd () {
      if (this.showExperimentalVersions) {
        return this.snapBetaInstallCmd
      }
      return 'sudo snap install datashare'
    },
    snapBetaInstallCmd () {
      return 'sudo snap install datashare --beta'
    }
  }
}
</script>

<style lang="scss">
@import '../variables';

.download-snap {
  max-height: 50vh;

  &__show-experimental {
    position: sticky;
    bottom: 0;
    left: 0;
    background: white;
    padding: 0 $spacer;

    label {
      cursor: pointer;
      margin: $spacer * 0.75 0;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
