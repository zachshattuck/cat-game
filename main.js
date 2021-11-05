const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 630,
    resizable: false,
    titleBarStyle: 'hidden'
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file',
    slashes: true,
  }))
}

app.on('ready', createWindow)