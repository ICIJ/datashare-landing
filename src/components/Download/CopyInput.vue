<script lang="ts" setup>
const text = defineModel({ type: String })
defineProps({
  variant: { type: String, default: 'primary' }
})
</script>
<template>
  <b-input-group class="mb-3">
    <b-form-input
      :model-value="text"
      readonly
      class="font-monospace"
      @click="$event.target.select()"
    />
    <haptic-copy
      :variant="variant"
      :text="text"
    />
  </b-input-group>
</template>
