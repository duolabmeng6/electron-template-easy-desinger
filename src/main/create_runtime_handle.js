import { app, ipcMain } from "electron";

/**
 * 创建并设置主窗口的运行时行为
 * @param {Electron.BrowserWindow} mainWindow - 主窗口实例
 */
export function create_runtime_handle(mainWindow) {
  const { ipcMain, app } = require("electron");

  /**
   * 日志相关功能
   */
  // 打印日志消息
  ipcMain.on('log-print', (event, message) => console.log(message));

  // 打印堆栈跟踪日志消息
  ipcMain.on('log-trace', (event, message) => console.trace(message));

  // 打印调试日志消息
  ipcMain.on('log-debug', (event, message) => console.debug(message));

  // 打印信息日志消息
  ipcMain.on('log-info', (event, message) => console.info(message));

  // 打印警告日志消息
  ipcMain.on('log-warning', (event, message) => console.warn(message));

  // 打印错误日志消息
  ipcMain.on('log-error', (event, message) => console.error(message));

  // 打印致命错误日志消息
  ipcMain.on('log-fatal', (event, message) => console.error('FATAL:', message));
  /**
   * 事件处理功能
   */
  // 设置具有最大回调次数的事件
  ipcMain.on('events-on-multiple', (event, eventName, maxCallbacks, callback) => {
    const listener = (...args) => {
      if (--maxCallbacks <= 0) {
        mainWindow.webContents.removeListener(eventName, listener);
      }
      callback(...args);
    };
    mainWindow.webContents.on(eventName, listener);
  });

  // 关闭事件
  ipcMain.on('events-off', (event, eventName, ...additionalEventNames) => {
    mainWindow.webContents.removeAllListeners(eventName);
    additionalEventNames.forEach(name => mainWindow.webContents.removeAllListeners(name));
  });

  // 设置单次触发的事件
  ipcMain.on('events-once', (event, eventName, callback) => {
    mainWindow.webContents.once(eventName, callback);
  });

  // 设置事件监听器
  ipcMain.on('events-on', (event, eventName, callback) => {
    mainWindow.webContents.on(eventName, callback);
  });

  // 发送事件及其参数到渲染进程
  ipcMain.on('events-emit', (event, eventName, ...args) => {
    mainWindow.webContents.send(eventName, ...args);
  });

  /**
   * 窗口控制功能
   */
  // 重新加载窗口
  ipcMain.on('window-reload', () => mainWindow.reload());

  // 重新启动应用程序
  ipcMain.on('window-reload-app', () => app.relaunch() && app.exit(0));

  // 设置窗口始终在最前面
  ipcMain.on('window-set-always-on-top', (event, b) => mainWindow.setAlwaysOnTop(b));

  // 设置系统默认主题
  ipcMain.on('window-set-system-default-theme', () => mainWindow.webContents.send('set-theme', 'system-default'));

  // 设置浅色主题
  ipcMain.on('window-set-light-theme', () => mainWindow.webContents.send('set-theme', 'light'));

  // 设置深色主题
  ipcMain.on('window-set-dark-theme', () => mainWindow.webContents.send('set-theme', 'dark'));

  // 将窗口居中
  ipcMain.on('window-center', () => mainWindow.center());

  // 设置窗口标题
  ipcMain.on('window-set-title', (event, title) => mainWindow.setTitle(title));

  // 全屏显示窗口
  ipcMain.on('window-fullscreen', () => mainWindow.setFullScreen(true));

  // 取消全屏显示窗口
  ipcMain.on('window-unfullscreen', () => mainWindow.setFullScreen(false));

  // 检查窗口是否全屏
  ipcMain.handle('window-is-fullscreen', () => mainWindow.isFullScreen());

  // 获取窗口大小
  ipcMain.handle('window-get-size', () => mainWindow.getSize());

  // 设置窗口大小
  ipcMain.on('window-set-size', (event, width, height) => mainWindow.setSize(width, height));

  // 设置窗口最大尺寸
  ipcMain.on('window-set-max-size', (event, width, height) => mainWindow.setMaximumSize(width, height));

  // 设置窗口最小尺寸
  ipcMain.on('window-set-min-size', (event, width, height) => mainWindow.setMinimumSize(width, height));

  // 设置窗口位置
  ipcMain.on('window-set-position', (event, x, y) => mainWindow.setPosition(x, y));

  // 获取窗口位置
  ipcMain.handle('window-get-position', () => mainWindow.getPosition());

  // 隐藏窗口
  ipcMain.on('window-hide', () => mainWindow.hide());

  // 显示窗口
  ipcMain.on('window-show', () => mainWindow.show());

  // 最大化窗口
  ipcMain.on('window-maximise', () => mainWindow.maximize());

  // 切换窗口最大化状态
  ipcMain.on('window-toggle-maximise', () => mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize());

  // 取消窗口最大化
  ipcMain.on('window-unmaximise', () => mainWindow.unmaximize());

  // 检查窗口是否最大化
  ipcMain.handle('window-is-maximised', () => mainWindow.isMaximized());

  // 最小化窗口
  ipcMain.on('window-minimise', () => mainWindow.minimize());

  // 取消窗口最小化
  ipcMain.on('window-unminimise', () => mainWindow.restore());

  // 设置窗口背景颜色
  ipcMain.on('window-set-background-colour', (event, R, G, B, A) => {
    mainWindow.setBackgroundColor(`#${((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1)}`);
  });

  // 获取所有屏幕信息
  ipcMain.handle('screen-get-all', () => electron.screen.getAllDisplays());

  // 检查窗口是否最小化
  ipcMain.handle('window-is-minimised', () => mainWindow.isMinimized());

  // 检查窗口是否正常
  ipcMain.handle('window-is-normal', () => mainWindow.isNormal());

  // 在浏览器中打开URL
  ipcMain.on('browser-open-url', (event, url) => require('electron').shell.openExternal(url));

  // 获取环境变量
  ipcMain.handle('environment', () => process.env);

  // 退出应用程序
  ipcMain.on('quit', () => app.quit());

  // 隐藏窗口
  ipcMain.on('hide', () => mainWindow.hide());

  // 显示窗口
  ipcMain.on('show', () => mainWindow.show());

  // 获取剪贴板中的文本
  ipcMain.handle('clipboard-get-text', () => clipboard.readText());

  // 设置剪贴板中的文本
  ipcMain.on('clipboard-set-text', (event, text) => clipboard.writeText(text));
}
