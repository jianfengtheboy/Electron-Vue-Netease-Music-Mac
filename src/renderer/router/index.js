import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
import { ipcRenderer } from 'electron'

import basicLayout from '@/layouts/basicLayout'

import { recommendRoutes } from './modules/recommend'

Vue.use(VueRouter)

const router = new VueRouter({
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
