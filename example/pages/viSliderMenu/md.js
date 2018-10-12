module.exports = [
`
\`\`\`html
<template>
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
</template>
\`\`\`
\`\`\`javascript
<script>
const app = getApp();

Page({
  data: {
    shoppingCart: []
  },
  onLoad: function (options) {
    app.getShoppingCart().then(data => {
      this.setData({
        shoppingCart: data.map(item => {
          item.menuWidth = 130
          return item
        })
      })
    }).catch(err => {
      wx.showToast({
        title: '数据获取失败',
        icon: 'none'
      })
    })
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
</script>
\`\`\`
\`\`\`css
<style>
page {
  background: #f8f8f8;
}

.shopping__section{
  width: 100%;
  background: #FFF;
  display: flex;
  flex-flow:row nowrap;
  justify-content: flex-start;
  padding: 20rpx;
  box-sizing: border-box;
}

.shopping__menu {
  width: 130rpx;
  height: 240rpx;
  text-align: center;
  border-left: 1px solid #d9d9d9;
  background: #F9F9F9;
  overflow: hidden;
}
checkbox-group {
  margin-top: 10px;
}
checkbox {
  margin-top: 100rpx;
  transform: translateY(-20rpx);
  margin-right: 10rpx;
}
.section__wrap {
  display: flex;
  flex-flow: row nowrap;
  flex: 1;
}

.section__img {
  width: 200rpx;
  height: 200rpx;
  margin-right: 32rpx;
}

.section__goodsInfo {
  flex: 1;
  display: flex;
  flex-flow:column nowrap;
  justify-content: space-between;
}

.goodsInfo__info {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.goodsInfo__skuDesc {
  color: #929292;
}

.price__info {
  color: #bb4430;
}

.menu__delete-btn {
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background-color: #c69746;
  color: #FFF;
  border-radius: 50%; 
  margin: auto;
  margin-top: 120rpx;
  transform: translateY(-36rpx);
}


/*  重写 checkbox 样式  */
checkbox .wx-checkbox-input {
  border-radius: 50%; /* 圆角 */
  width: 40rpx; /* 背景的宽 */
  height: 40rpx; /* 背景的高 */
}

/* 选中后的 背景样式 （红色背景 无边框 可根据UI需求自己修改） */
checkbox .wx-checkbox-input.wx-checkbox-input-checked {
  border-color: #7ab199;
  background: #7ab199;
}

/* 选中后的 对勾样式 （白色对勾 可根据UI需求自己修改） */
checkbox .wx-checkbox-input.wx-checkbox-input-checked::before {
  border-radius: 50%; /* 圆角 */
  width: 40rpx; /* 选中后对勾大小，不要超过背景的尺寸 */
  height: 40rpx; /* 选中后对勾大小，不要超过背景的尺寸 */
  line-height: 40rpx;
  text-align: center;
  font-size: 30rpx; /* 对勾大小 30rpx */
  color: #fff; /* 对勾颜色 白色 */
  background: transparent;
  transform: translate(-50%, -50%) scale(1);
  -webkit-transform: translate(-50%, -50%) scale(1);
}

</style>
\`\`\`
`,
`
# vi-slider-menu

## 使用

> npm i vi-slider-menu

> 使用微信开发者工具构建NPM并使用NPM模块

> 在页面的js文件中引入

\`\`\`json
{
    "usingComponents": {
      "vi-slider-menu": "vi-slider-menu"
    }
  }
\`\`\`

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
+ v0.0.2 新增touchMove、touchStart、touchEnd时间与接口line
`,
]