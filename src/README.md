# vision_weChat 组件库

> 基于小程序框架的常用ui组件库 ---- 魔法孵化实验室

### 小程序项目目录管理

```html
  + api --- 接口目录 --- 小程序的接口设计与vue框架的接口设计思想差不多
  + components --- 组件目录
  + template --- 模板目录
  + images --- 静态文件目录
  + pages --- 小程序页面
  + styles --- 样式模目录
    + icon --- 字体图标目录 --- 小程序可以使用iconfont
    + common ---通用样式目录
      + flex.wxss --- 弹性盒模型
      + font.wxss --- 项目的字体
      + font_color --- 项目中常用的字体颜色
      + position --- 盒居中
      + animate --- 动画
      + block --- 项目空白占位符 --- 主要解决stickyFooter 这种业务
  + utils --- 小程序工具类
    + canvas.js --- 小程序海报绘制类
    + request.js --- http 请求类
    + util.js --- 常用辅助开发工具类
  + app.js
  + app.json
  + app.wxss
  + projectconfig.json
```

#### 小程序HTTP请求封装

```javascript
// 二次封装的请求方法
export default function http({ url, data, method = 'get', contentType = "application/json" }, flag = true) {
  flag && wx.showLoading({
    title: '加载中...',
    mask: true
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      method,
      header: {
        'content-type': contentType,
        token: wx.getStorageSync('token')
      },
      success({ data: { data, code, message } }) {
        code === 200 ? resolve(data) : reject(message)
        flag && wx.hideLoading()
      },
      fail() {
        reject('message')
        flag && wx.hideLoading()
        wx.showToast({
          title: '网络不给力',
          icon: 'loading',
          // image: './../images/Artboard3.png',
          duration: 3000
        })
      }
    })
  })
}
```

#### 参数说明

| 参数 | 数据类型 | 说明 | 选项 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| url | [ String ] | API请求地址 | 必填 | undefined |
| data | [ Object ]] | 服务端接收的数据 | 选填 | undefined |
| method | [ String ] | 请求方式 | 选填 | get |
| contentType | [ String ] | 发送的数据格式 | 选填 | application/json |
| flag | [ Boolean ] | 数据加载的Loading弹窗, 微信默认的Loading弹窗 | 选填 | true |

#### API封装

> API 封装可以分为两种情况，视项目大小而定

+ 第一种情况：接口统一写在一个js文件中。这种方式适合项目不是特别大的情况下

比如，我们在utils目录中新增一个 api.js 的文件：

```html
  ...
  + utils
    + api.js --- 接口放在这里
    + canvas.js
    + request.js
    + util.js
```

api.js 文件中的内容：

```javascript
import http from './request.js'
// const BASEURL = 'https://api.taozugong.com/award'
const BASEURL = 'https://api.taozugong.com/award-test'
export default {
  login: data => http({ // 登陆接口
    url: `${BASEURL}/user/login`,
    data
  }),
  addUserInfo: data => http({ // 用户授权接口
    url: `${BASEURL}/user/addUserInfo`,
    method: 'post',
    data
  }),
  submitCompany: data => http({ // 公司信息提交
    url: `${BASEURL}/awardTask/completeUserCompany`,
    data,
    method: 'post',
    contentType: 'application/x-www-form-urlencoded'
  })
  ...
}
```

+ 第二种情况：新建API目录，不同模块对应不同的接口文件. 这种情况适用于大项目，模块众多的情况。思路与 vue 的api封装差不多

项目目录：

```html
 + api.js
  + login.js
  + classify.js
  + address.js
  ...
  index.js
 + components
 ...
```

*Tips:每个模块的套路都是差不多的,最后我们会把模块中的方法导入到index.js中, 而index.js的作用于api.js作用是相差不多的。都是要挂载在app.js中.*

+ api目录下的index.js

```javascript
  import login from './login.js'
  import classify from './classify.js'
  import address from './address.js'
  ...
  // 利用es6的对象展开运算符，将对象展开把方法挂载在index.js模块中
  export default {
    ...login,
    ...classify,
    ...address
  }
```

+ app.js 导入封装好的接口模块

```javascript
  // 第一种情况
  import serverData from './utils/api.js'
  App({
     onLaunch() {},
     onShow() {},
     serverData,
     globalData
  })
  // 第二种情况
  import serverData from './api/index.js'
  App({
     onLaunch() {},
     onShow() {},
     serverData,
     globalData
  })
```

**打完收功, 至此小程序的接口管理已基本完成。每个接口都会返回一个Promise. 由于小程序的babel 转码器不支持es7/8 的 async await 语法特性。所以还是用Promise的方式处理接口的异步程序**

### HTML部分

> 这个没什么好说的，结构合理就行。但是个人有一点要求：尽量不要使用style 内联样式，至于原因可以了解下css 样式的权重值。
> 结构要注释，利人利己

### 小程序开发的个人理解

#### 小程序数据更新

+ 小程序的数据更新语法比较像React, 但与React不同的是。ui层的渲染与js逻辑层的执行是分开的。我理解的话，这个可能导致异步。
+ 小程序对form表单的数据处理并不会双向绑定。所以，当你要获取某一个输入框的内容时，你只能使用form表单中的元素的事件来更新数据
+ 小程序的视图层数据绑定的语法与vue非常像，并且小程序的列表渲染与条件渲染与vue的指令是差不多的，只是语法的不同。

#### 小程序组件

+ 让我非常不爽的是：小程序组件的solt插槽，这一点与vue 不一样。vue的solt插槽可以放置默认内容，而小程序不可以。
+ 小程序的组件开发，除了一大堆配置其余与vue差不多。该有的接口类型验证，自定义事件都会有。不过vue中的 watch 检测功能，在小程序中只支持对接口 检测，是接口验证中的observer 方法。小程序的组件中没有 vue 的filter过滤器，compound 技术属性等特性。
+ 小程序的组件根节点className 添加与 vue 有点不同。在vue中，直接在组件上加一个 className, 会默认加载组件的根节点上。而小程序中是 组件的配置，通过 externalClasses接口，可以接受一个以数组形式的className。虽然这样做会增加配置难度，但是非常灵活。扩展的className 可以出现在小程序组件中任何节点上。
+ 自定义事件, 小层序的自定义事件与vue的自定义事件用法相差不多。给自定义事件传参，小程序会把参数放在event的detail 属性上。如果要传多个参数，则可以用传一个对象。对象下挂载触发事件所暴露的信息。
+ 小程序的组件自定义样式：小程序的组件自定义样式的接口不能使用驼峰写法，需要用中划线连接。

#### 小程序模板

+ 小程序模板不太具有灵活性，因为需要分别导入wxml结构、样式文件、js脚本文件。不过模板还是可以大大提高代码复用性
+ 在使用小程序模板的时候，如果想要模板中的js文件也可以使用data、onLoad、onShow等一些小程序内置生命周期函数，则可以使用Mixins混入功能, 如果是一般的事件方法、业务方法可以用es6的扩展属性的特性

#### 小程序API与内置组件

+ 小程序的内置组件还可以。如果是内置的原生组件就非常的坑。特别是wxml元素的层级过高... 这对业务开发会导致很多麻烦
+ 小城的API大部分都可以满足日常的业务需求，极少的API会存在安卓机型不兼容的情况。

### 小程序5分钟快速入门：

+ [文档](https://developers.weixin.qq.com/miniprogram/dev/index.html)
+ [社区](https://developers.weixin.qq.com/home?token=518852370&lang=zh_CN&devtools=1)
+ [资源](http://naotu.baidu.com/file/1ba7cdf5efdfd2a1260bd06a8f35f4cf?token=ca7b4b7b8e73e38e)