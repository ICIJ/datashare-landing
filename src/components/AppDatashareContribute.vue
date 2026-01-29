<script setup lang="ts">
import { ref, computed } from 'vue'

import { useColorModePersisted } from '@/composables/useColorModePersisted.ts'
import AppSection from '@/components/AppSection.vue'

import IPhHandHeart from '~icons/ph/hand-heart'
import IPhHandHeartFill from '~icons/ph/hand-heart-fill'
import IPhGithubLogo from '~icons/ph/github-logo'
import IPhTranslate from '~icons/ph/translate'

const datashareGithubURL = 'https://github.com/ICIJ/datashare'
const translateURL = 'https://crowdin.com/project/datashare'
const isFilled = ref(false)
const { isDark } = useColorModePersisted()
const buttonVariant = computed(() => isDark.value ? 'light' : 'action')
const btnClassList = computed(() => ({ 'bg-white': isDark.value }))

const donateIcon = computed(() => isFilled.value ? IPhHandHeartFill : IPhHandHeart)

function toggleIcijLink() {
  isFilled.value = !isFilled.value
}
</script>

<template>
  <app-section class="bg-action-subtle">
    <div class="app-datashare-contribute row align-items-center">
      <div class="col-12 col-md-8 app-datashare-contribute__description">
        <h3 class="display-6 fw-bold pb-4">
          Datashare is <span class="text-primary linear-primary">free</span> and open source
        </h3>
        <p class="text-action-emphasis">
          The International Consortium of Investigative Journalists (ICIJ) is a
          <span class="fw-bold">non-profit</span> organization.
        </p>
        <p class="text-action-emphasis">
          Our mission is to show people how the world really works through stories that
          <span class="fw-bold">rock the world</span>.
        </p>
        <p class="text-action-emphasis">
          We develop software that <span class="fw-bold">helps journalists investigate important stories</span>.
        </p>
        <p class="text-action-emphasis">
          <span class="fw-bold">Transparency</span> is at the center of everything we do.
        </p>
      </div>
      <div
        class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center align-items-md-start gap-3"
      >
        <p>
          <button-icon
            :class="btnClassList"
            class="text-nowrap p-4 fw-semibold"
            href="https://icij.org/donate"
            rel="noreferrer noopener"
            size="lg"
            target="_blank"
            :icon-left="donateIcon"
            :variant="buttonVariant"
            @mouseenter="toggleIcijLink"
            @mouseleave="toggleIcijLink"
          >
            Donate to ICIJ
          </button-icon>
        </p>
        <p>
          <button-icon
            :href="datashareGithubURL"
            variant="outline-action"
            size="lg"
            :icon-left="IPhGithubLogo"
            class="action-link p-4"
          >
            Contribute
          </button-icon>
        </p>
        <p>
          <button-icon
            :href="translateURL"
            variant="outline-action"
            size="lg"
            :icon-left="IPhTranslate"
            class="action-link p-4"
          >
            Help us translate
          </button-icon>
        </p>
      </div>
    </div>
  </app-section>
</template>

<style scoped lang="scss">
.app-datashare-contribute {
  padding: 4em 0;

  &__description {
    h3 {
      & .linear-primary {
        background: linear-gradient(90deg, $primary 10%, lighten($primary, 18%));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    p {
      text-wrap: pretty;
      padding: 0.5em 0;
    }
  }
  & a {
    text-decoration: none;
  }
}
@include color-mode(dark) {
  .app-datashare-contribute {
    .action-link {
      background-color: var(--bs-light);
      color: var(--bs-action);
      &.btn:hover {
        border: 1px solid var(--bs-action);
        text-decoration: underline;
      }
    }
  }

  .donate-link {
    border: 1px solid var(--bs-light);
    &.btn:hover {
      border: 1px solid $icij;
    }
  }
}
</style>
