const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  checkInternet: () => ipcRenderer.send('check-internet'),
  onInternetStatus: (callback) => ipcRenderer.on('internet-status', (event, status) => callback(status)),
  proceedToHome: () => ipcRenderer.send('proceed-to-home'),
  exitApp: () => ipcRenderer.send('exit-app')
});