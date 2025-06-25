<script setup lang="ts">
import { computed} from 'vue'
import DatashareDownloadModalToggleExperimental from "@/components/DatashareDownloadModal/DatashareDownloadModalToggleExperimental.vue";
import CopyInput from "@/components/Download/CopyInput.vue";

defineOptions({name:'DownloadList'})

const showExperimentalVersions = defineModel( {type:Boolean})

const snapInstallStableCmd = 'sudo snap install datashare'
const snapBetaInstallCmd = 'sudo snap install datashare --beta'
const snapInstallCmd = computed( ()=> {
  return showExperimentalVersions.value ? snapBetaInstallCmd : snapInstallStableCmd;
})
</script>

<template>
  <div class="download-snap d-flex flex-column">
    <div class="card-body">
      <p>
        Datashare is available on the <a href="https://snapcraft.io/datashare" target="_blank">Snap Store</a>.
        If Snap is installed on your system (by default on Ubuntu and ElementaryOS), simply use the
        following command:
      </p>
      <copy-input variant="action" :model-value="snapInstallCmd"/>
    </div>
    <datashare-download-modal-toggle-experimental v-model="showExperimentalVersions"/>
  </div>
</template>
