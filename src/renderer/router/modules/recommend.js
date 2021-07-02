/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-02 16:06:56
 * @LastEditTime: 2021-07-02 16:09:17
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
  }
]

let recommendMap = []
recommendRoutes.concat().forEach(route => {
  let map = {
    path: route.path,
    name: route.name,
    meta: route.meta
  }
  recommendMap.push(map)
})

export {
  recommendRoutes,
  recommendMap
}
