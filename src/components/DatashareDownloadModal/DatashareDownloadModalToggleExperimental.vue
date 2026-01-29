<script setup lang="ts">
import IPhFlask from '~icons/ph/flask'
import IPhFlaskFill from '~icons/ph/flask-fill'
import { computed } from 'vue'

const showExperimentalVersion = defineModel({ type: Boolean })

const flaskIcon = computed(() => showExperimentalVersion.value ? IPhFlaskFill : IPhFlask)
</script>

<template>
  <div class="datashare-modal-toggle-experimental border-top pt-4">
    <b-form-checkbox
      v-model="showExperimentalVersion"
      class="d-flex gap-2"
      title="Experimental versions"
    >
      <span
        class="d-inline-block"
        style="width: 14em"
      >
        Show experimental versions
      </span>
      <component
        :is="flaskIcon"
        title="Experimental version"
        class="text-info"
      />
    </b-form-checkbox>
    <span class="text-body-tertiary small">Experimental versions are unstable and might present bugs. Use them at your own risk.</span>
  </div>
</template>
