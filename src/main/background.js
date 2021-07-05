'use strict'

import { app, protocol, BrowserWindow, Tray, ipcMain, shell, session, } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'

if (process.env.NODE_ENV === "production") {
  global.__img = path.join(__dirname, "./img");
  global.__images = path.join(__dirname, "./images");
}

const previewIcon = process.env.NODE_ENV === 'development' ? 'public/images/tray.ico' : `${global.__images}/tray.ico`
const prevIcon = process.env.NODE_ENV === 'development' ? 'public/images/prev.png' : `${global.__images}/prev.png`
const nextIcon = process.env.NODE_ENV === 'development' ? 'public/images/next.png' : `${global.__images}/next.png`
const playIcon = process.env.NODE_ENV === 'development' ? 'public/images/play.png' : `${global.__images}/play.png`
const pauseIcon = process.env.NODE_ENV === 'development' ? 'public/images/pause.png' : `${global.__images}/pause.png`

// 设置底部任务栏按钮和缩略图
const setThumbarButtons = function (mainWindow, playing) {
  mainWindow.setThumbarButtons([
    {
      tooltip: '上一曲',
      icon: prevIcon,
      click() {
        mainWindow.webContents.send('prev-play')
      }
    },
    {
      tooltip: playing ? '暂停' : '播放',
      icon: playing ? pauseIcon : playIcon,
      click() {
        mainWindow.webContents.send('toggle-play', {
          value: !playing
        })
      }
    },
    {
      tooltip: '下一曲',
      icon: nextIcon,
      click() {
        mainWindow.webContents.send('next-play')
      }
    }
  ])
}

let mainWindow = null

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  global.mainWindow = mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    title: process.platform === 'win32' ? '网易云音乐' : '',
    icon: previewIcon,
    titleBarStyle: 'hiddenInset',
    frame: process.platform !== 'win32',
    show: true,
    backgroundColor: '#2e2c29',
    hasShadow: process.platform !== 'darwin',
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    }
  })

  // 设置appId才能使用Notification
  if (process.platform === 'win32') {
    app.setAppUserModelId(pkg.appId)
    // 去除原生顶部菜单栏
    mainWindow.setMenu(null)
    // 如果是windows系统模拟托盘菜单
    global.tray = createTray(Tray)
    let trayBounds = global.tray.getBounds()
    global.trayWindow = createTrayWindow(BrowserWindow, trayBounds)
  }

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    await mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) mainWindow.webContents.openDevTools()
  } else {
    createProtocol(ACHEME)
    await mainWindow.loadURL(LOAD_URL)
  }
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
