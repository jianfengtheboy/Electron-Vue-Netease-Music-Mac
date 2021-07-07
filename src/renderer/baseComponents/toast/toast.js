/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-06 18:33:32
 * @LastEditTime: 2021-07-07 13:54:11
 */
import Notification from '../notification'

let toastInstance

function getToastInstance() {
  toastInstance = toastInstance || Notification.newInstance()
  return toastInstance
}

const notice = function name({ content = '提示', icon = '', duration = 3 }) {
  let instance = getToastInstance()
  instance.notice({
    content,
    icon,
    duration
  })
}

export default notice
