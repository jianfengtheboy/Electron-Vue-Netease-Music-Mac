/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-11 11:18:02
 * @LastEditTime: 2021-07-11 11:18:27
 */
export function debounce(func, wait) {
  let timer = null
  return function () {
    let args = arguments
    let context = this
    timer && clearTimeout(timer)
    timer = setTimeout(function () {
      func.apply(context, args)
    }, wait)
  }
}
