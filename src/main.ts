import './main.scss'

import { createApp } from 'vue'
import { createBootstrap } from 'bootstrap-vue-next'
import Murmur from '@icij/murmur-next'

import App from './App.vue'

const app = createApp(App)
app.use(createBootstrap()) // Important
app.use(Murmur)
app.mount('#app')
