/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-06 14:24:18
 * @LastEditTime: 2021-07-06 14:27:30
 */
class FlyError extends Error {
  constructor(message, config, code, response) {
    super(message)
    this.config = config
    this.code = code
    this.response = response
  }
}

export function createError(message, config, code, response) {
  const error = new FlyError(message, config, code, response)
  return error
}
