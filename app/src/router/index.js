import Vue from 'vue'
import Router from 'vue-router'
import MetaCoin from '@/components/MetaCoin'
import FiatCoinHome from '@/components/FiatCoinHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FiatCoinHome',
      component: FiatCoinHome
    },
    {
      path: '/metacoin',
      name: 'MetaCoin',
      component: MetaCoin
    }
  ]
})
