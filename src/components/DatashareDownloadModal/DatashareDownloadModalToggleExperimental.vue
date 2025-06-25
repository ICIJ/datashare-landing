<script setup lang="ts">
import { PhosphorIcon } from '@icij/murmur-next'

const showExperimentalVersion = defineModel({ type: Boolean })
</script>

<template>
  <div class="datashare-modal-toggle-experimental border-top pt-4">
    <b-form-checkbox v-model="showExperimentalVersion" class="d-flex gap-2" title="Experimental versions">
      <span class="d-inline-block" style="width: 14em">Show experimental versions </span>
      <phosphor-icon :fill="showExperimentalVersion" name="flask" title="Experimental version" variant="info" />
    </b-form-checkbox>
    <span class="text-body-tertiary small"
      >Experimental versions are unstable and might present bugs. Use them at your own risk.</span
    >
  </div>
</template>
