/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-06 14:18:45
 * @LastEditTime: 2021-07-06 22:50:59
 */
import request from '../utils/request'

export function login_cellphone(params) {
  return request.get('/login/cellphone', {
    params
  })
}

export function login_email(params) {
  return request.get('/login/cellphone', {
    params
  })
}

export function login_refresh() {
  return request.get('/login/refresh')
}

export function login_status() {
  return request.get('/login/status')
}

export function logout() {
  return request.get('/logout')
}
