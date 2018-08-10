# vision_weChat 组件库

> 基于小程序框架的常用ui组件库 ---- 魔法孵化实验室

## 团队小程序开发约定(重要)：

> 我们会对小程序开发进行一些通俗的约定以方便统一代码风格，这样可以让团队中的所有成员无缝(不会非常痛苦)过渡小程序开发或接手与加入正在开发的小程序项目中

*Tips:我们是一个有灵魂与活力的team.开发约定的目的是为了更好的管理项目与更便捷的开发方式。个人的风格可能并不适合团队所有人使用，所以希望团队中的每一个人都能参与进来，把自己的想法说出来并实践.做一个实践者而非抱怨者.*

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

### API接口设计(重要)

> 对于 MV* 的框架现在前端主流开发都会选择对API再次封装一层，这样可以方便管理与服务端的交互。

#### 小程序HTTP请求封装

> 如果对小程序做API接口封装那么我们就需要再次封装一下微信提供的HTTP模块的接口：

*API接口的封装只是初步实现,所以会存在不合理的地方，铿锵团队中的每个人都参与进来,让我们更加完美 ---- 付出不亚于任何人的努力！.*

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

### styles 公共样式类设计(阶段性尝试，但这个是必不可少的约定规则)

> + styles 公共样式类设计，目的：维护一份高可用、高扩展、高复用的样式规则库。对于前端开发来说, 这件事非常重要。这是区分小白与菜鸟的却别。小白不会有自己的一套公共样式库，但是菜鸟必有一份。不想长篇大论的讲道理摆事实。就一句话：前端开发基本技能是什么？ HTML、CSS、JS
> + styles 目录中包含的是前端开发人员每天都要用到的样式规则, 不是这个项目用了，下个项目就没有必要用。而是每个项目都会用到。当然也会有一些文件是根据项目特色与业务来写的底层公共样式。

*Tips:不会偷懒的程序员都不是一个合格的程序员,我们应该要在项目开发的效率上探索越走越远.*

#### 风格统一的 className 命名风格：

> 命名要求：

+ 通俗易懂，前期可以给每个 calssName 加上中文注释。中文是母语，对比其他语言更容易快速理解。加上注释有利于团队新来的小伙伴能快速适应

+ 名字与名字分割统一使用下划线，一个是方便复制，另一个是 mark

#### 例子，flex.css 文件

```css
.flex {
  /*水平居中，上下居中*/
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: center;
}

.flex_row {
  /*水平方向，可换行, 项目垂直居中，项目两端对齐*/
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
}

.flex_column_center { /* 水平方向，项目垂直居中，项目从左到右排列*/
  display: flex;
  align-items: center;
  flex-flow: row wrap;
}

.flex_column {
  /* 垂直方向，两端对齐 */
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
}

.flex_column_center {
  /* 垂直方向，两端对齐 中间对齐 */
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
}
```

### HTML部分

> 这个没什么好说的，结构合理就行。但是个人有一点要求：尽量不要使用style 内联样式，至于原因可以了解下css 样式的权重值。
> 结构要注释，利人利己

### 小程序开发的个人感悟 ---- by AsherSun

#### 小程序数据更新

+ 小程序的数据更新语法比较像React, 但与React不同的是。ui层的渲染与js逻辑层的执行是分开的。我理解的话，这个可能导致异步。
+ 小程序对form表单的数据处理并不会双向绑定。所以，当你要获取某一个输入框的内容时，你只能使用form表单的事件来更新数据
+ 小程序的视图层数据绑定的语法与vue非常像，并且小程序的列表渲染与条件渲染与vue的指令是差不多的，只是语法的不同。

#### 小程序组件

+ 让我非常不爽的是：小程序组件的solt插槽，这一点与vue 不一样。vue的solt插槽可以放置默认内容，而小程序不可以。
+ 小程序的组件开发，除了一大堆配置其余与vue差不多。该有的接口类型验证，自定义事件都会有。不过vue中的 watch 检测功能，在小程序中只支持对接口 检测，是接口验证中的observer 方法。小程序的组件中没有 vue 的filter过滤器，compound 技术属性等特性。
+ 小程序的组件根节点className 添加与 vue 有点不同。在vue中，直接在组件上加一个 className, 会默认加载组件的根节点上。而小程序中是 组件的配置，通过 externalClasses接口，可以接受一个以数组形式的className。虽然这样做会增加配置难度，但是非常灵活。扩展的className 可以出现在小程序组件中任何节点上。
+ 自定义事件, 小层序的自定义事件与vue的自定义事件用法相差不多。给自定义事件传参，小程序会把参数放在event的detail 属性上。如果要传多个参数，则可以用传一个对象。对象下挂载触发事件所暴露的信息。
+ 小程序的组件自定义样式：小程序的组件自定义样式的接口不能使用驼峰写法，需要用中划线连接

#### 小程序模板

+ 这个个人用的较少，以后如果有遇到坑的会在这提一嘴。 ^ _ ^

#### 小程序API

+ 小程序提供的API还是非常多的，有很多的API是原生的功能，比如调用相机扫码、直接拨打电话等
+ 小程序network模块的API需要小程序后台配置相关的域名信息
+ 小程序媒体相关的API，个人用到了视频、图片。其中保存视频到相册这个接口对机型的兼容性不是特别好...

### 小程序5分钟快速入门：

+ [文档](https://developers.weixin.qq.com/miniprogram/dev/index.html)
+ [社区](https://developers.weixin.qq.com/home?token=518852370&lang=zh_CN&devtools=1)