'use strict';

const path = require('path');
const { app, BrowserWindow } = require('electron');

function main() {

  // create new window
  let mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    width: 520,
    height: 750,
    frame: false,
  })

  // remove window frame
  mainWindow.setMenu(null);

  // open dev tools
  // mainWindow.webContents.openDevTools();

  // load app/index.html as the window content
  mainWindow.loadFile(path.join('app', 'index.html'));
}

app.on('ready', main);

app.on('window-all-closed', function () {
  app.quit();
});