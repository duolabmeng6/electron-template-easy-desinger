import {electronAPI} from '@electron-toolkit/preload'
const {contextBridge, ipcRenderer} = require('electron');
import jsefun from 'jsefun';
import runtime from './create_runime_invoke'

const api = {

}


if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('runtime', runtime);
    contextBridge.exposeInMainWorld('jsefun', jsefun);

  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
  window.runtime = runtime
  window.jsefun = jsefun
}
