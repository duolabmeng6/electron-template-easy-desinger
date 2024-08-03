import {ElMessage, ElMessageBox} from "element-plus";
import {__load_data} from './__load_data'
import * as jsefun from 'jsefun' // 如果调用了系统功能的函数则调用 window.jsefun
import * as systemFc from "../../runtime/runtime"; // 根据实际文件路径进行修改


export function BindWindowEvent() {
  const c = __load_data()
  let comps = c.comps

  c.登录框1登录按钮被点击 = function () {
    console.log("登录框1登录按钮被点击")
    let u = comps.登录框1.data.username
    let p = comps.登录框1.data.password
    comps.登录框1.data.username_error_msg = '改改你的用户名太简单了'
    comps.登录框1.data.password_error_msg = '你的密码真简单'
    // u = data.username // 也可以这样子 取决于自定义comps返回的data
    // p = data.password
    console.log("u", u)
    console.log("p", p)
    ElMessageBox.alert(
      `登录成功 你输入的账号密码为${u} ${p}`,
      '提示',
      {
        confirmButtonText: '确定',
        callback: (action) => {
          ElMessage({
            type: 'info',
            title: "提示",
            message: `点击了确定: ${action}`,
          });

          ElMessage({
            message: '登录成功',
            type: 'success',
          });
        }
      })

  }

  c.登录框1忘记密码按钮被点击 = function () {
    console.log("登录框1忘记密码按钮被点击")
  }

  c.Button1Click = function () {
    console.log("Button1Click", comps.TextEdit5.text, comps.TextEdit5)
    systemFc.BrowserOpenURL(comps.TextEdit5.text)
  }

  c.Button3Click = async function () {
    console.log("Button3Click")
    comps.TextEdit2.text = jsefun.取现行时间().到文本()
  }


  c.WinCreated = function () {
    console.log("WinCreated")
  }

  c.Button1被单击 = function () {
    console.log("Button1被单击")

  }

  c.Button2Click = async function () {
    let data = window.jsefun.取当前目录()
    comps.TextEdit1.text = data

  }

  c.按钮1被单击 = async function () {
    // console.log("按钮1被单击",jsefun.取现行时间().到文本())
    // console.log("jsefun",jsefun)
    // console.log("按钮1被单击",window.jsefun.写到文件("1.txt","aa"))
    //
    // systemFc.WindowSetTitle("abc")
    // let data2 = await systemFc.事件消息调用('hello2',{"name":'longlong',"age":100});
    // console.log("事件消息发送data",data2)
  }
//Don't delete the event function flag
}
