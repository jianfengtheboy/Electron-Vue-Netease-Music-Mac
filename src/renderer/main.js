import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import db from './datastore'
import './plugins/antDesignVue'
import './plugins/infiniteLoading'
import './plugins/lazyload'
import './directives'
import './filters'
import createdInit from './core/createdInit'
import './styles/index.less'
import { errorCaptured } from './utils/assist'

Vue.prototype.$db = db
Vue.prototype.$errorCaptured = errorCaptured

if (process.env.IS_WEB) {
  Vue.use(require('vue-electron'))
}

Vue.config.productionTip = false

new Vue({
  components: { App },
  router,
  store,
  created() {
    createdInit()
  },
  template: '<App/>'
}).$mount('#app')
