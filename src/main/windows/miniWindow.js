/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-06 10:01:11
 * @LastEditTime: 2021-07-06 10:31:43
 */
import { LOAD_URL } from '../config'

const miniWinURL = process.env.NODE_ENV === 'development' ? `http://localhost:9080/#mini` : `${LOAD_URL}#mini`

const createMiniWindow = function (BrowserWindow) {
  let obj = {
    height: 48,
    width: 320,
    minWidth: 320,
    show: false,
    titleBarStyle: 'hiddenInset',
    frame: false,
    fullscreenable: false,
    minimizable: false,
    maximizable: false,
    transparent: true,
    // 任务栏中不显示窗口
    skipTaskbar: true,
    closable: false,
    resizable: process.env.NODE_ENV === 'development',
    hasShadow: process.platform !== 'darwin',
    alwaysOnTop: true,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    }
  }

  let miniWindow = new BrowserWindow(obj)
  miniWindow.loadURL(miniWinURL)
  miniWindow.on('closed', () => {
    miniWindow = null
  })

  return miniWindow
}

export default createMiniWindow
