const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const dns = require('dns');

// Hot Reloading (only works in development)
try {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  });
} catch (err) {}

let splashWindow;
let homeWindow;

function fadeIn(win, callback) {
  if (win.isDestroyed()) return;
  let opacity = 0;
  win.setOpacity(opacity);
  if (!win.isVisible()) win.show();
  
  const timer = setInterval(() => {
    if (win.isDestroyed()) {
      clearInterval(timer);
      return;
    }
    opacity += 0.05;
    if (opacity >= 1) {
      clearInterval(timer);
      win.setOpacity(1);
      if (callback) callback();
    } else {
      win.setOpacity(opacity);
    }
  }, 15);
}

function fadeOut(win, callback) {
  if (win.isDestroyed()) {
    if (callback) callback();
    return;
  }
  let opacity = 1;
  const timer = setInterval(() => {
    if (win.isDestroyed()) {
      clearInterval(timer);
      return;
    }
    opacity -= 0.05;
    if (opacity <= 0) {
      clearInterval(timer);
      win.setOpacity(0);
      if (callback) callback();
    } else {
      win.setOpacity(opacity);
    }
  }, 15);
}

function createSplash() {
  splashWindow = new BrowserWindow({
    width: 500,
    height: 350,
    frame: false,
    resizable: false,
    center: true,
    show: false,
    icon: path.join(__dirname, 'assets/icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  splashWindow.setOpacity(0);
  splashWindow.loadFile('index.html');

  // Preload Home Window
  homeWindow = new BrowserWindow({
    width: 900,
    height: 600,
    frame: false,
    resizable: true,
    center: true,
    show: false,
    icon: path.join(__dirname, 'assets/icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      webviewTag: true
    }
  });
  homeWindow.setOpacity(0);
  homeWindow.loadFile('pages/home/home.html');

  splashWindow.once('ready-to-show', () => {
    fadeIn(splashWindow);
  });
}

function goToHome() {
  fadeOut(splashWindow, () => {
    if (!splashWindow.isDestroyed()) splashWindow.close();
    
    if (homeWindow && !homeWindow.isDestroyed()) {
      fadeIn(homeWindow);
    }
  });
}

app.whenReady().then(() => {
  createSplash();
});

ipcMain.on('proceed-to-home', () => {
  goToHome();
});

ipcMain.on('exit-app', () => {
  app.quit();
});

ipcMain.on('check-internet', (event) => {
  dns.lookup('google.com', (err) => {
    if (err && err.code === "ENOTFOUND") {
      event.reply('internet-status', false);
    } else {
      event.reply('internet-status', true);
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});