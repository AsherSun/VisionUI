# 微信小程序省市区三级联动组件

## 使用

> npm i vi-address <br >

> 使用微信开发者工具构建NPM并勾选使用NPM模块 <br >

*打开小程序页面的json配置.*

```json
"usingComponents": {
  "vi-address": "vi-address"
}
```



## 示例

<!-- visionUI code example -->

<!-- code example -->

### 使用方式

```html
<vi-cell bind:click="selectAddress" title="点击选择城市" desc="{{address}}"></vi-cell>
<vi-address is-hide="{{isHide}}" bindhide="selectAddress" bindaddresschange="addressChange"></vi-address>
```

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
      address: detail.map(item => item.name).join('-')
    })
  }
})
```

<!-- visionUI code example -->

## 属性 Props

| 接口 | 数据类型 | 说明 | 选项 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| isHide | Boolean | 控制组件的显示与隐藏, false 隐藏, true 显示 | 必填 | false |
| areaHide | Boolean | 是否显示区/县, false 显示, true 隐藏 | 选填 | false |

## 事件 Events

| 事件方法 | 事件说明 | detail 返回值 |
| :--: | :--: | :--: |
| cancel | 组件的取消按钮或者是点击的遮罩层 | 无返回值 |
| confirm | 组件的确认按钮 | 返回选择的城市  |
| hide | 组件隐藏, cancel 与 confirm 都会触发该事件 | 返回值为触发的事件源, 如：取消按钮触发的事件, 则返回值为 cancel |
| addresschange | 省市区选择事件 | 只要有选择便会触发该事件, 组件初始化时会默认触发一次, 返回值为数组集合 |

## Bug&Tips

+ 地址三级联动组件,显示与隐藏有默认动画,所以不需要给组件父级元素套一个处理动画的Propu组件
+ 该组件使用的选择器为微信小程序的 picker-view 内置组件, 所以对用户体验可能会存在一定影响
+ 由于是使用picker-view 内置组件，所以该组件暂无设置初始默认值的接口。目前正在尝试其他解决方式

## Change Logs

+ 0.0.1初始版本