import Vue from 'vue'
import App from './components/App.vue'
import Murmur from '@icij/murmur'
import VueI18n from 'vue-i18n'


import './main.scss';

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(Murmur)

Murmur.config.set('signup-form.tracker', 'DATASHARE-LANDING')
Murmur.config.set('donate-form.tracker', '701f4000000mfuf')

new Vue({
  render: h => h(App),
}).$mount('#app')
