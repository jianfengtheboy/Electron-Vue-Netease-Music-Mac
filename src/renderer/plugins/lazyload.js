/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-07 17:26:44
 * @LastEditTime: 2021-07-07 17:37:24
 */
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  // 使用IntersectionObserver监听
  observer: true,
  attempt: 1,
  loading: require('./../assets/images/default.jpg')
})
