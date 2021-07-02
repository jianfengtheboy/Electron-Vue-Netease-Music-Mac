/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-02 16:00:41
 * @LastEditTime: 2021-07-02 16:02:01
 */
const state = {
  showLogin: false
}

const getters = {

}

const mutations = {
  SET_SHOW_LOGIN (state, val) {
    state.showLogin = val
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
