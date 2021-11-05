const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

const reload = require('electron-reload')(`${__dirname}/dist`)

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 630,
    resizable: false,
    titleBarStyle: 'hidden'
  })

  win.loadURL(`file://${__dirname}/dist/index.html`)
}

app.on('ready', createWindow)