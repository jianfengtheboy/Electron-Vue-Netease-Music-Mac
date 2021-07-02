/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-02 09:55:11
 * @LastEditTime: 2021-07-02 14:04:58
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './plugins/ant-design-vue'

import './styles/index.scss'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
