import Vue from 'vue'
import App from './components/App.vue'
import Murmur from '@icij/murmur'

import './main.scss';

Vue.config.productionTip = false

Vue.use(Murmur)

new Vue({
  render: h => h(App),
}).$mount('#app')
