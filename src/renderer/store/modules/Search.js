/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-11 12:13:25
 * @LastEditTime: 2021-07-11 12:17:10
 */
const SAVE_MAX_LENGTH = 10

const state = {
  searchHistory: JSON.parse(localStorage.getItem('__searchHistory__')) || []
}

const mutations = {
  update: (state, val) => {
    state.searchHistory = val
  }
}

const actions = {
  saveKeyword({ commit, state }, keyword) {
    let words = state.searchHistory
    words.unshift(keyword)
    words = [...new Set(words)].slice(0, SAVE_MAX_LENGTH)
    commit('update', words)
    localStorage.setItem('__searchHistory__', JSON.stringify(words))
  },
  deleteKeyword({ commit, state }, index) {
    let words = state.searchHistory
    words.splice(index, 1)
    commit('update', words)
    localStorage.setItem('__searchHistory__', JSON.stringify(words));
  },
  clearKeyword({ commit }) {
    commit('update', []);
    localStorage.removeItem('__searchHistory__')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
