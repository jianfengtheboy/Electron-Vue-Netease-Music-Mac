/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-07 16:50:19
 * @LastEditTime: 2021-07-07 17:23:32
 */
import Vue from 'vue'
import InfiniteLoading from 'vue-infinite-loading'
import Loading from '@/baseComponents/playing/playing'
import InfiniteNoResult from '@/baseComponents/infiniteNoResult/infiniteNoResult'
import InfiniteNoMore from '@/baseComponents/infiniteNoMore/infiniteNoMore'
import InfiniteError from '@/baseComponents/infiniteError/infiniteError'

Vue.use(InfiniteLoading, {
  slots: {
    spinner: Loading,
    noResults: InfiniteNoResult,
    noMore: InfiniteNoMore,
    error: InfiniteError
  }
})
