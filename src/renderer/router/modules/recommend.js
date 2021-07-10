/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-08 16:27:54
 * @LastEditTime: 2021-07-08 16:30:28
 */
let recommendRoutes = [
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
    name: 'home',
    meta: {
      title: '发现音乐',
      icon: 'music'
    }
  },
  {
    path: '/privateFm',
    component: () => import(/* webpackChunkName: "privateFm" */ '@/views/fm/index.vue'),
    name: 'privateFm',
    meta: {
      title: '私人FM',
      icon: 'fm',
      auth: true
    }
  }
]

let recommendMap = []
recommendRoutes.concat().forEach((route) => {
  let map = {
    path: route.path,
    name: route.name,
    meta: route.meta
  }
  recommendMap.push(map)
})

export { recommendRoutes, recommendMap }
