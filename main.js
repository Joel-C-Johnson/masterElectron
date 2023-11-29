const { app, BrowserWindow } = require('electron');
// const colors = require('colors')
const bcrypt = require('bcrypt');
// console.log(colors.rainbow('Hello World'));
bcrypt.hash('myPlaintextPassword', 10, function(err, hash) {
  // Store hash in your password DB.
  console.log(hash)
});

let win

function createWindow() {
  win = new BrowserWindow({
    width: 400,
    height: 200,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
  win.webContents.openDevTools()
}

app.on('ready', createWindow)
// app.whenReady().then(createWindow)