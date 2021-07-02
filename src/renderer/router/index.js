import Vue from 'vue'
import store from '@/store/index.js'
import Router from 'vue-router'
import basicLayout from '@/layout/basicLayout.vue'

import { recommendRoutes } from './modules/recommend'

import { ipcRenderer } from 'electron'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: basicLayout,
      redirect: '/home',
      children: [
        ...recommendRoutes
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.auth) {
    const userId = localStorage.getItem('userId')
    if (userId) {
      next()
    } else {
      store.commit('User/SET_SHOW_LOGIN', true)
      store.commit('App/SET_REDIRECT', to.fullPath)
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  if (to.meta && to.meta.title) {
    ipcRenderer.send('set-tray-title', to.meta.title)
  }
})

export default router
