/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-06 10:22:39
 * @LastEditTime: 2021-07-06 10:27:43
 */
import { LOAD_URL } from '../config'

const electron = require('electron')
const winURL = process.env.NODE_ENV === 'development' ? `http://localhost:9080/#desktop-lyric` : `${LOAD_URL}#desktop-lyric`

const createLyricWindow = function (BrowserWindow) {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
  const obj = {
    minWidth: 650,
    width,
    height: 80,
    show: false,
    frame: false,
    x: 0,
    y: height - 150,
    fullscreenable: false,
    minimizable: false,
    maximizable: false,
    transparent: true,
    alwaysOnTop: true,
    // 任务栏中不显示窗口
    skipTaskbar: true,
    closable: false,
    hasShadow: process.platform === 'darwin' ? false : true,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      devTools: false
    }
  }

  let lyricWindow = new BrowserWindow(obj)
  lyricWindow.loadURL(winURL)

  return lyricWindow
}

export default createLyricWindow
