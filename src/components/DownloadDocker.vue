<template>
  <div>
    <p>
      To start Datashare within a <a target="_blank" href="https://www.docker.com/">Docker</a> 
      container, you can use this command:
    </p>
    <b-input-group class="mb-3">
      <b-form-input :value="dockerOneLiner" readonly class="bg-white" />
      <haptic-copy class="btn btn-primary" :text="dockerOneLiner" />
    </b-input-group>
    <p class="text-muted">
      Make sure the <code>Datashare</code> folder exists in your homedir 
      or this command will fail. This is an example about 
      how to use Datashare with Docker, data will not be persisted.
    </p>
    <hr />
    <p>
      To start Datashare with Docker Compose, 
      you can use the following <a :href="dockerComposeYmlHref" download="docker-compose.yml">docker-compose.yml</a> file:
    </p>
    <div class="small card">
      <div class="d-flex">
        <b-button v-b-toggle.docker-compose-yml variant="link" class="text-left text-dark flex-grow-1">
          <fa :icon="dockerComposeYmlCaret" class="pr-2 text-muted" />Show <code>docker-compose.yml</code>
        </b-button>
        <haptic-copy class="btn btn-primary" :text="dockerComposeYml" />
      </div>
      <b-collapse id="docker-compose-yml" v-model="dockerComposeYmlVisible">
        <pre class="bg-dark text-light p-3 mb-0"><code>{{ dockerComposeYml }}</code></pre>
      </b-collapse>
    </div>
  </div>
</template>


<script>
  import Fa from '@icij/murmur/lib/components/Fa'
  import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
  import { BButton, BFormInput, BInputGroup } from 'bootstrap-vue'
  
  import dockerComposeYml from '!!raw-loader!../assets/docker-compose.yml'
  import { latest as fetchLatestRelease } from '../releases'

  export default {
    name: 'DownloadDocker',
    components: {
      BButton,
      BFormInput,
      BInputGroup,
      Fa
    },
    data () {
      return {
        dockerComposeYml,
        dockerComposeYmlVisible: false,
        version: null,
      }
    },
    async mounted () {
      const latest =  await fetchLatestRelease()
      this.version = latest.tag_name
      this.dockerComposeYml = dockerComposeYml.replace('icij/datashare:latest', `icij/datashare:${this.version}`)
    },
    computed: {
      dockerOneLiner () {
        return `docker run --mount src=$HOME/Datashare,target=/home/datashare/data,type=bind -p 8080:8080 icij/datashare:${this.version} --mode EMBEDDED`
      },
      dockerComposeYmlHref () {
        return 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.dockerComposeYml)
      },
      dockerComposeYmlCaret () {
        return this.dockerComposeYmlVisible ? faCaretUp : faCaretDown
      }
    }
  }
</script>
