/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-02 13:38:01
 * @LastEditTime: 2021-07-02 13:40:01
 */
import Vue from 'vue'
import Notification from './notification.vue'

Notification.newInstance = (properties = {}) => {
  // 创建vue构造器
  const NotificationTpl = Vue.extend(Notification)
  // 实例化vue实例
  const instance = new NotificationTpl()
  // 用$el来访问元素，并插入到body中
  const notification = instance.$mount().$el
  document.body.appendChild(notification)
  return {
    notice (noticeProps) {
      instance.create(noticeProps)
    },
    remove (name) {
      instance.remove(name)
    },
    component: notification
  }
}

export default Notification
