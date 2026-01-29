<script setup lang="ts">
import { ref, computed, inject } from 'vue'

import { useRelease } from '@/composables/useRelease.ts'
import dockerComposeYmlRaw from '@/assets/docker-compose.yml?raw'
import CopyInput from '@/components/Download/CopyInput.vue'
import { ReleasesKey } from '@/utils/types.ts'

import IPhCaretUp from '~icons/ph/caret-up'
import IPhCaretDown from '~icons/ph/caret-down'

defineOptions({ name: 'DownloadDocker' })

const releases = inject(ReleasesKey)
const { latestVersion } = useRelease(releases)

const dockerComposeYml = ref('')
const dockerComposeYmlVisible = ref(false)
dockerComposeYml.value = dockerComposeYmlRaw.replace('icij/datashare:latest', `icij/datashare:${latestVersion.value}`)

const dockerOneLiner = computed(() => {
  return `docker run --mount src=$HOME/Datashare,target=/home/datashare/data,type=bind -p 8080:8080 icij/datashare:${latestVersion.value} --mode EMBEDDED`
})
const dockerComposeYmlHref = computed(() => {
  return 'data:text/plain;charset=utf-8,' + encodeURIComponent(dockerComposeYml.value)
})
const dockerComposeYmlCaret = computed(() => {
  return dockerComposeYmlVisible.value ? IPhCaretUp : IPhCaretDown
})
</script>

<template>
  <div>
    <p>
      To start Datashare within a
      <a
        target="_blank"
        href="https://www.docker.com/"
      >Docker</a>
      container, you can use this command:
    </p>
    <copy-input
      variant="action"
      :model-value="dockerOneLiner"
    />

    <p class="text-muted">
      Make sure the <code>Datashare</code> folder exists in your homedir or this command will fail. This is an example
      about how to use Datashare with Docker, data will not be persisted.
    </p>
    <hr>
    <p>
      To start Datashare with Docker Compose, you can use the following
      <a
        :href="dockerComposeYmlHref"
        download="docker-compose.yml"
      >docker-compose.yml</a> file:
    </p>
    <div class="small card">
      <div class="d-flex">
        <button-icon
          v-b-toggle.docker-compose-yml
          :icon-left="dockerComposeYmlCaret"
          variant="link"
          class="text-left text-bg-body flex-grow-1"
        >
          Show <code>docker-compose.yml</code>
        </button-icon>
        <haptic-copy
          variant="action"
          :text="dockerComposeYml"
        />
      </div>
      <b-collapse
        id="docker-compose-yml"
        v-model="dockerComposeYmlVisible"
      >
        <pre class="bg-dark text-light p-3 mb-0"><code>{{ dockerComposeYml }}</code></pre>
      </b-collapse>
    </div>
  </div>
</template>
