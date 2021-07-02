/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-02 15:57:24
 * @LastEditTime: 2021-07-02 16:00:16
 */
const state = {
  redirect: '/home'
}

const getters = {

}

const mutations = {
  SET_REDIRECT (state, url) {
    state.redirect = url
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
