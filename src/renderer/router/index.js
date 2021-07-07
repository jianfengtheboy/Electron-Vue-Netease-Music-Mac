import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'

import basicLayout from '@/layouts/basicLayout'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: basicLayout,
      redirect: '/home',
      children: [
        
      ]
    }
  ]
})

export default router
