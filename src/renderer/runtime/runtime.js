
/**
 * 打印日志信息
 * @param {string} message - 日志信息
 */
export function LogPrint(message) {
  window.runtime.LogPrint(message);
}

/**
 * 打印跟踪日志信息
 * @param {string} message - 跟踪日志信息
 */
export function LogTrace(message) {
  window.runtime.LogTrace(message);
}

/**
 * 打印调试日志信息
 * @param {string} message - 调试日志信息
 */
export function LogDebug(message) {
  window.runtime.LogDebug(message);
}

/**
 * 打印信息日志
 * @param {string} message - 信息日志
 */
export function LogInfo(message) {
  window.runtime.LogInfo(message);
}

/**
 * 打印警告日志信息
 * @param {string} message - 警告日志信息
 */
export function LogWarning(message) {
  window.runtime.LogWarning(message);
}

/**
 * 打印错误日志信息
 * @param {string} message - 错误日志信息
 */
export function LogError(message) {
  window.runtime.LogError(message);
}

/**
 * 打印致命错误日志信息
 * @param {string} message - 致命错误日志信息
 */
export function LogFatal(message) {
  window.runtime.LogFatal(message);
}

/**
 * 注册多次事件监听器
 * @param {string} eventName - 事件名称
 * @param {function} callback - 回调函数
 * @param {number} maxCallbacks - 最大回调次数
 */
export function EventsOnMultiple(eventName, callback, maxCallbacks) {
  window.runtime.EventsOnMultiple(eventName, callback, maxCallbacks);
}

/**
 * 注册事件监听器
 * @param {string} eventName - 事件名称
 * @param {function} callback - 回调函数
 */
export function EventsOn(eventName, callback) {
  window.runtime.EventsOn(eventName, callback);
}

/**
 * 注销事件监听器
 * @param {string} eventName - 事件名称
 * @param {...string} additionalEventNames - 其他事件名称
 */
export function EventsOff(eventName, ...additionalEventNames) {
  window.runtime.EventsOff(eventName, ...additionalEventNames);
}

/**
 * 注册一次性事件监听器
 * @param {string} eventName - 事件名称
 * @param {function} callback - 回调函数
 */
export function EventsOnce(eventName, callback) {
  window.runtime.EventsOnce(eventName, callback);
}

/**
 * 触发事件
 * @param {string} eventName - 事件名称
 * @param {...*} args - 事件参数
 */
export function EventsEmit(eventName, ...args) {
  window.runtime.EventsEmit(eventName, ...args);
}

/**
 * 重载窗口
 */
export function WindowReload() {
  window.runtime.WindowReload();
}

/**
 * 重载应用
 */
export function WindowReloadApp() {
  window.runtime.WindowReloadApp();
}

/**
 * 设置窗口总在最前
 * @param {boolean} b - 是否总在最前
 */
export function WindowSetAlwaysOnTop(b) {
  window.runtime.WindowSetAlwaysOnTop(b);
}

/**
 * 设置窗口为系统默认主题
 */
export function WindowSetSystemDefaultTheme() {
  window.runtime.WindowSetSystemDefaultTheme();
}

/**
 * 设置窗口为浅色主题
 */
export function WindowSetLightTheme() {
  window.runtime.WindowSetLightTheme();
}

/**
 * 设置窗口为深色主题
 */
export function WindowSetDarkTheme() {
  window.runtime.WindowSetDarkTheme();
}

/**
 * 窗口居中
 */
export function WindowCenter() {
  window.runtime.WindowCenter();
}

/**
 * 设置窗口标题
 * @param {string} title - 窗口标题
 */
export function WindowSetTitle(title) {
  window.runtime.WindowSetTitle(title);
}

/**
 * 全屏窗口
 */
export function WindowFullscreen() {
  window.runtime.WindowFullscreen();
}

/**
 * 取消全屏窗口
 */
export function WindowUnfullscreen() {
  window.runtime.WindowUnfullscreen();
}

/**
 * 判断窗口是否全屏
 * @returns {Promise<boolean>} 是否全屏
 */
export function WindowIsFullscreen() {
  return window.runtime.WindowIsFullscreen();
}

/**
 * 获取窗口大小
 * @returns {Promise<number[]>} 窗口宽高
 */
export function WindowGetSize() {
  return window.runtime.WindowGetSize();
}

/**
 * 设置窗口大小
 * @param {number} width - 窗口宽度
 * @param {number} height - 窗口高度
 */
export function WindowSetSize(width, height) {
  window.runtime.WindowSetSize(width, height);
}

/**
 * 设置窗口最大尺寸
 * @param {number} width - 最大宽度
 * @param {number} height - 最大高度
 */
export function WindowSetMaxSize(width, height) {
  window.runtime.WindowSetMaxSize(width, height);
}

/**
 * 设置窗口最小尺寸
 * @param {number} width - 最小宽度
 * @param {number} height - 最小高度
 */
export function WindowSetMinSize(width, height) {
  window.runtime.WindowSetMinSize(width, height);
}

/**
 * 设置窗口位置
 * @param {number} x - 横坐标
 * @param {number} y - 纵坐标
 */
export function WindowSetPosition(x, y) {
  window.runtime.WindowSetPosition(x, y);
}

/**
 * 获取窗口位置
 * @returns {Promise<number[]>} 窗口位置
 */
export function WindowGetPosition() {
  return window.runtime.WindowGetPosition();
}

/**
 * 隐藏窗口
 */
export function WindowHide() {
  window.runtime.WindowHide();
}

/**
 * 显示窗口
 */
export function WindowShow() {
  window.runtime.WindowShow();
}

/**
 * 最大化窗口
 */
export function WindowMaximise() {
  window.runtime.WindowMaximise();
}

/**
 * 切换窗口最大化状态
 */
export function WindowToggleMaximise() {
  window.runtime.WindowToggleMaximise();
}

/**
 * 取消最大化窗口
 */
export function WindowUnmaximise() {
  window.runtime.WindowUnmaximise();
}

/**
 * 判断窗口是否最大化
 * @returns {Promise<boolean>} 是否最大化
 */
export function WindowIsMaximised() {
  return window.runtime.WindowIsMaximised();
}

/**
 * 最小化窗口
 */
export function WindowMinimise() {
  window.runtime.WindowMinimise();
}

/**
 * 取消最小化窗口
 */
export function WindowUnminimise() {
  window.runtime.WindowUnminimise();
}

/**
 * 设置窗口背景颜色
 * @param {number} R - 红色值
 * @param {number} G - 绿色值
 * @param {number} B - 蓝色值
 * @param {number} A - 透明度值
 */
export function WindowSetBackgroundColour(R, G, B, A) {
  window.runtime.WindowSetBackgroundColour(R, G, B, A);
}

/**
 * 获取所有屏幕信息
 * @returns {Promise<Object[]>} 屏幕信息
 */
export function ScreenGetAll() {
  return window.runtime.ScreenGetAll();
}

/**
 * 判断窗口是否最小化
 * @returns {Promise<boolean>} 是否最小化
 */
export function WindowIsMinimised() {
  return window.runtime.WindowIsMinimised();
}

/**
 * 判断窗口是否为正常状态
 * @returns {Promise<boolean>} 是否为正常状态
 */
export function WindowIsNormal() {
  return window.runtime.WindowIsNormal();
}

/**
 * 打开浏览器URL
 * @param {string} url - URL地址
 */
export function BrowserOpenURL(url) {
  window.runtime.BrowserOpenURL(url);
}

/**
 * 获取环境信息
 * @returns {Promise<Object>} 环境信息
 */
export function Environment() {
  return window.runtime.Environment();
}

/**
 * 退出应用
 */
export function Quit() {
  window.runtime.Quit();
}

/**
 * 隐藏应用
 */
export function Hide() {
  window.runtime.Hide();
}

/**
 * 显示应用
 */
export function Show() {
  window.runtime.Show();
}

/**
 * 获取剪贴板文本
 * @returns {Promise<string>} 剪贴板文本
 */
export function ClipboardGetText() {
  return window.runtime.ClipboardGetText();
}

/**
 * 设置剪贴板文本
 * @param {string} text - 文本内容
 */
export function ClipboardSetText(text) {
  window.runtime.ClipboardSetText(text);
}

export async function 事件消息调用(事件名称, 参数){
  return await window.electron.ipcRenderer.invoke(事件名称, 参数)
}
