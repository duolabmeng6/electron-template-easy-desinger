import {ipcRenderer} from "electron";

const runtime = {
  LogPrint: (message) => ipcRenderer.send('log-print', message),
  LogTrace: (message) => ipcRenderer.send('log-trace', message),
  LogDebug: (message) => ipcRenderer.send('log-debug', message),
  LogInfo: (message) => ipcRenderer.send('log-info', message),
  LogWarning: (message) => ipcRenderer.send('log-warning', message),
  LogError: (message) => ipcRenderer.send('log-error', message),
  LogFatal: (message) => ipcRenderer.send('log-fatal', message),

  EventsOnMultiple: (eventName, callback, maxCallbacks) => {
    ipcRenderer.on(eventName, callback);
    ipcRenderer.send('events-on-multiple', eventName, maxCallbacks);
  },
  EventsOn: (eventName, callback) => ipcRenderer.on(eventName, callback),
  EventsOff: (eventName, ...additionalEventNames) => ipcRenderer.send('events-off', eventName, ...additionalEventNames),
  EventsOnce: (eventName, callback) => ipcRenderer.once(eventName, callback),
  EventsEmit: (eventName, ...args) => ipcRenderer.send('events-emit', eventName, ...args),

  WindowReload: () => ipcRenderer.send('window-reload'),
  WindowReloadApp: () => ipcRenderer.send('window-reload-app'),
  WindowSetAlwaysOnTop: (b) => ipcRenderer.send('window-set-always-on-top', b),
  WindowSetSystemDefaultTheme: () => ipcRenderer.send('window-set-system-default-theme'),
  WindowSetLightTheme: () => ipcRenderer.send('window-set-light-theme'),
  WindowSetDarkTheme: () => ipcRenderer.send('window-set-dark-theme'),
  WindowCenter: () => ipcRenderer.send('window-center'),
  WindowSetTitle: (title) => ipcRenderer.send('window-set-title', title),
  WindowFullscreen: () => ipcRenderer.send('window-fullscreen'),
  WindowUnfullscreen: () => ipcRenderer.send('window-unfullscreen'),
  WindowIsFullscreen: () => ipcRenderer.invoke('window-is-fullscreen').then((result) => result),
  WindowGetSize: () => ipcRenderer.invoke('window-get-size').then((result) => result),
  WindowSetSize: (width, height) => ipcRenderer.send('window-set-size', width, height),
  WindowSetMaxSize: (width, height) => ipcRenderer.send('window-set-max-size', width, height),
  WindowSetMinSize: (width, height) => ipcRenderer.send('window-set-min-size', width, height),
  WindowSetPosition: (x, y) => ipcRenderer.send('window-set-position', x, y),
  WindowGetPosition: () => ipcRenderer.invoke('window-get-position').then((result) => result),
  WindowHide: () => ipcRenderer.send('window-hide'),
  WindowShow: () => ipcRenderer.send('window-show'),
  WindowMaximise: () => ipcRenderer.send('window-maximise'),
  WindowToggleMaximise: () => ipcRenderer.send('window-toggle-maximise'),
  WindowUnmaximise: () => ipcRenderer.send('window-unmaximise'),
  WindowIsMaximised: () => ipcRenderer.invoke('window-is-maximised').then((result) => result),
  WindowMinimise: () => ipcRenderer.send('window-minimise'),
  WindowUnminimise: () => ipcRenderer.send('window-unminimise'),
  WindowSetBackgroundColour: (R, G, B, A) => ipcRenderer.send('window-set-background-colour', R, G, B, A),
  ScreenGetAll: () => ipcRenderer.invoke('screen-get-all').then((result) => result),
  WindowIsMinimised: () => ipcRenderer.invoke('window-is-minimised').then((result) => result),
  WindowIsNormal: () => ipcRenderer.invoke('window-is-normal').then((result) => result),
  BrowserOpenURL: (url) => ipcRenderer.send('browser-open-url', url),
  Environment: () => ipcRenderer.invoke('environment').then((result) => result),
  Quit: () => ipcRenderer.send('quit'),
  Hide: () => ipcRenderer.send('hide'),
  Show: () => ipcRenderer.send('show'),
  ClipboardGetText: () => ipcRenderer.invoke('clipboard-get-text').then((result) => result),
  ClipboardSetText: (text) => ipcRenderer.send('clipboard-set-text', text),
}

export default runtime
