# 上传插件

## 使用

> 将

*打开小程序页面的json配置.*
**相对路径与绝对路径都可以**

```json
"usingComponents": {
  "vi-address": "./../vi_address"
}
```

> WXML结构

```HTML
<view class="font14" bindtap='selectAddress'>点击选择城市: {{address}}</view>

<vi-address is-hide="{{isHide}}" bindhide="selectAddress" bindaddresschange="addressChange"></vi-address>
```

> js逻辑

```javascript
Page({
  data: {
    address: '',
    isHide: false
  },
  selectAddress(e) {
    this.setData({
      isHide: !this.data.isHide
    })
  },
  addressChange({ detail }) {
    this.setData({
      address: detail.addressConcat
    })
  }
})
```

## 属性 Props

| 接口 | 数据类型 | 说明 | 选项 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| cityData | [ Array ] | 省市区的数据,建议使用组件内部数据 | 选填 | 组件内部省市区数据 |
| isHide | [ Boolean ] | 控制组件的显示与隐藏, false 隐藏, true 显示 | 必填 | false |

## 事件 Events

| 事件方法 | 事件说明 | detail 返回值 |
| :--: | :--: | :--: |
| cancel | 组件的取消按钮或者是点击的遮罩层 | 'cancel', 标识取消 |
| confirm | 组件的确认按钮 | 'confirm', 标识确认 |
| hide | 组件隐藏, cancel 与 confirm 都会触发该事件 | 返回值为触发的事件源, 如：取消按钮触发的事件, 则返回值为 cancel |
| addresschange | 省市区选择事件 | 只要有选择便会触发该事件, 组件初始化时会默认触发一次, 返回值为：北京 - 北京市 - 东城区 |

## Bug&Tips

+ 地址三级联动组件,显示与隐藏有默认动画,所以不需要给组件父级元素套一个处理动画的Propu组件
+ 该组件使用的选择器为微信小程序的 picker-view 内置组件, 所以对用户体验可能会存在一定影响
+ 由于是使用picker-view 内置组件，所以该组件暂无设置初始默认值的接口。目前没有想到解决方案