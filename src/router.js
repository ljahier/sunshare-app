import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Global from './views/Global.vue'
import Personnel from './views/Personnel.vue'
import help from './views/help.vue'
import setting from './views/setting.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Global
    },
    {
      path: '/Global',
      name: 'Global',
      component: Global
    },
    {
      path: '/Personnel',
      name: 'Personnel',
      component: Personnel
    },
    {
      path: '/help',
      name: 'help',
      component: help
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    }
  ]
})
