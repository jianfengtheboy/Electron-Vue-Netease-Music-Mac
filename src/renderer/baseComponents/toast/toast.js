/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-02 13:25:32
 * @LastEditTime: 2021-07-02 13:43:19
 */
import Notification from '../notification'

let toastInstance

function getToastInstance () {
  toastInstance = toastInstance || Notification.newInstance()
  return toastInstance
}

const notice = function ({ content = '提示', icon = '', duration = 3 }) {
  let instance = getToastInstance()
  instance.notice({
    content,
    icon,
    duration
  })
}

export default notice
