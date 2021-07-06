/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-06 10:39:54
 * @LastEditTime: 2021-07-06 10:40:53
 */
const welcomeWinURL = process.env.NODE_ENV === 'development' ? `http://localhost:9080/welcome.html` : `file://${__dirname}/welcome.html`

const createWelcomeWindow = function (BrowserWindow) {
  const obj = {
    height: 780,
    width: 1280,
    show: false,
    frame: false,
    movable: false,
    minimizable: false,
    maximizable: false,
    fullscreenable: false,
    resizable: false,
    alwaysOnTop: true,
    backgroundColor: '#fff',
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      backgroundThrottling: false,
      webSecurity: false
    }
  }

  global.welcomeWindow = new BrowserWindow(obj)

  global.welcomeWindow.loadURL(welcomeWinURL)
}

export default createWelcomeWindow

