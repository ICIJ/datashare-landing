<template>
  <b-dropdown>
    <b-dropdown-item data-bs-theme-value="light">Light</b-dropdown-item>
    <b-dropdown-item data-bs-theme-value="dark">Dark</b-dropdown-item>
    <b-dropdown-item data-bs-theme-value="auto">Dark</b-dropdown-item>
  </b-dropdown>
</template>

<style lang="scss">
.color-mode-selector {
  & input[type='radio']:checked + label {
    color: $action;
  }
}
</style>
