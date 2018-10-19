# vi-popup

## 使用

> npm i vi-popup
> 使用微信开发者工具构建NPM并使用NPM模块


```json
{
  "usingComponents": {
    "vi-popup": "vi-popup"
  }
}
```

> 底部出现

```HTML
<vi-popup ishide="{{popupHide_bottom}}" bindpopuphide="popupBottom">
  <view class="popup-bottom"></view>
</vi-popup>

<script>
Page({
  data: {
    popupHide_bottom: false
  }
  popupBottom() {
    this.setData({
      popupHide_bottom: !this.data.popupHide_bottom
    })
  }
})
</script>

<style>
  .popup-bottom{
    height: 400rpx;
    background: #fff;
  }
</style>
```

> 头部出现

```HTML
<vi-popup ishide="{{popupHide_top}}" position="top" bindpopuphide="popupTop">
  <view class="popup-top"></view>
</vi-popup>

<script>
Page({
  data: {
    popupHide_top: false
  }
  popupBottom() {
    this.setData({
      popupHide_top: !this.data.popupHide_top
    })
  }
})
</script>

<style>
  .popup-top{
    height: 400rpx;
    background: #fff;
  }
</style>
```

> 左侧出现
```HTML
<vi-popup ishide="{{popupHide_left}}" position="left" bindpopuphide="popupLeft">
  <view class="popup-left"></view>
</vi-popup>

<script>
Page({
  data: {
    popupHide_left: false
  }
  popupBottom() {
    this.setData({
      popupHide_left: !this.data.popupHide_left
    })
  }
})
</script>

<style>
  .popup-left{
    width: 100px;
    height: 100%;
    background: #FFF;
  }
</style>
```

> 右侧出现
```HTML
<vi-popup ishide="{{popupHide_right}}" position="right" bindpopuphide="popupRight">
  <view class="popup-right"></view>
</vi-popup>

<script>
Page({
  data: {
    popupHide_right: false
  }
  popupBottom() {
    this.setData({
      popupHide_right: !this.data.popupHide_right
    })
  }
})
</script>

<style>
  .popup-right{
    width: 100px;
    height: 100%;
    background: #FFF;
  }
</style>
```

## 属性

| 接口 | 数据类型 | 说明 | 选项 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| ishide | Boolean | 控制数据popup显示隐藏 | 必填 | false |
| position | string | popup出现的方向,值有：top、left、right、bottom | 选填 | bottom |

## event

| event name | description |
| :--: | :--: |
| popuphide | vi-popup组件的mask层点击事件，用于控制组件的隐藏 |

## 版本记录

+ v0.0.2 更新文档说明