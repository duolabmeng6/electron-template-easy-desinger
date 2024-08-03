import {ipcMain} from "electron";

function 事件消息定义(事件名称, fn) {
  ipcMain.handle(事件名称, fn);
}

事件消息定义('hello2', (event, params) => {
  return `Hello ${params.name}`
})


