// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App'
import store from './store'
import router from './router'

import VueAnalytics from 'vue-analytics'

// index.js or main.js
import('../node_modules/vuetify/dist/vuetify.min.css') // Ensure you are using css-loader

import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.use(VueAnalytics, {
  id: 'UA-102416922-2',
  router
})

Vue.config.productionTip = false
Vue.component('fiatheader', require('./components/Fiatheader.vue'))
var VueCountdown = require('@xkeshi/vue-countdown')
Vue.component('countdown', VueCountdown)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
