# vi-slider-menu

## 使用

> npm i vi-slider-menu <br>

> 使用微信开发者工具构建NPM并使用NPM模块 <br>

> 在页面的js文件中引入 <br>

### 示例

<!-- visionUI code example -->

### 使用方式

```html
<view style="text-align: center;font-size: 16px;line-height: 40px;background:#FFF;">购物车</view>
<checkbox-group>
  <vi-slider-menu
    bind:touchstart="triggerToTap"
    data-i="{{index}}"
    wx:key="{{index}}"
    animation-timing-fn="linear"
    wx:for="{{shoppingCart}}"
    slider-num="{{item.sliderNum}}"
    menu-width="{{item.menuWidth}}" 
    line="bottomLine">
    <view slot="section" class="shopping__section">
      <checkbox value="{{item.cartId}}" checked='{{item.checked}}'></checkbox>
      <navigator url="/pages/index/index" class="section__wrap">
        <image class="section__img" src="{{item.img}}"></image>
        <view class="section__goodsInfo">
          <view class="goodsInfo__name">{{item.name}}</view>
          <view class="goodsInfo__skuDesc">{{item.skuDesc}}</view>
          <view class="goodsInfo__info">
            <text class="price__info">￥ {{item.price}}</text>
            <text class="number__info">x {{item.number}}</text>
          </view>
        </view>
      </navigator>
    </view>
    <view slot="menu" class="shopping__menu">
      <view class="menu__delete-btn icon icon-delete"></view>
    </view>
  </vi-slider-menu>
</checkbox-group>
```

```javascript
// const app = getApp();
const getMarkDown = require('../../mixins/getMarkDown')

Page({
  data: {
    shoppingCart: []
  },
  onLoad: function (options) {
  },
  triggerToTap(e) {
    let { currentTarget: { dataset: { i } } } = e
    this.setData({
      shoppingCart: this.data.shoppingCart.map((item, index) => {
        if (i !== index) {
          item.sliderNum = 0
        }
        return item
      })
    })
  }
})
```

<!-- visionUI code example -->

```json
{
  "usingComponents": {
    "vi-slider-menu": "vi-slider-menu"
  }
}
```

## Config Props

| Props | Data Type | description | 选项 | default Value |
| :--: | :--: | :--: | :--: | :--: |
| animationDuration | Number | 运动时间 | 选填 | 0.5 |
| animationTimingFn | String | 运动动画，贝斯曲线 | 选填 | ease-in |
| menuWidth | Number | 菜单选项的宽度，单位rpx | 必填 | 0 |
| triggerSliderNum | Number | slider触发值 | 选填 | 30 |
| sliderNum | Number | 滑动的距离 | 选填 | 0 |
| line | String | slider-wrap 盒子的上、下边框| 选填, 可选值有：topLine、bottomLine和line | '' |

## Event Handle

| Event Name | 方法说明 | 返回值 |
| :--: | :--: | :--: |
| touchStart | 移动端用户点击事件 | 无 |
| touchMove | 移动端用户手指移动事件 | 无 |
| touchEnd | 移动端用户手指离开事件 | 无 |

## 版本信息

+ v0.0.1 初始版本
+ v0.0.3 新增touchMove、touchStart、touchEnd时间与接口line