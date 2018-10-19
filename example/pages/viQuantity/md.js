module.exports = [
`
\`\`\`html
<template>
  <view class="quantity-demo">
    <view class="font16">情景一：商品详情页</view>
    <view class="font12 quantity-demo-title">请选择商品数量</view>
    <vi-quantity goodsnumber="{{buyDetailNum}}" quantity="{{100}}" bindchange="detailNumChange"></vi-quantity>
    <view class="font12" style="margin-top: 14px;">你已选择<text class="quantity-demo-tips">{{buyDetailNum}}</text>件商品</view>
  </view>
</template>
\`\`\`
\`\`\`javascript
<script>
Page({
  data: {
    buyDetailNum: 10,
  },
  detailNumChange({ detail }) {
    this.setData({
      buyDetailNum: detail.num
    })
  },
})
</script>
\`\`\`
\`\`\`css
<style>
.quantity-demo {
  padding: 20px 25px;
  background: #FFF;
}

.quantity-demo-title {
  height: 40px;
  line-height: 40px;
}

.quantity-demo-goodsList {
  color: #888;
}

.quantity-demo-tips {
  color: red;
  font-size: 16px;
  font-weight: bold;
}
</style>
\`\`\`
`,
  `
\`\`\`html
<template>
  <view class="quantity-demo">
    <view class="font16">情景二：购物车列表，对商品数量进行编辑</view>
    <block wx:for="{{goodsList}}" wx:key="{{index}}">
      <view class="font12 quantity-demo-goodsList quantity-demo-title">购物车商品 -- {{index + 1}}</view>
      <vi-quantity bindchange="numChange" editindex="{{index}}" goodsnumber="{{item.num}}" quantity="{{item.stock}}"></vi-quantity>
    </block>
  </view>
</template>
\`\`\`
\`\`\`javascript
<script>
Page({
  data: {
    editIndex: 0,
    buyNum: 0,
    stock: 0,
    isEdit: false,
    goodsList: [
      {
        num: 1,
        stock: 2344
      },
      {
        num: 80,
        stock: 12123123
      },
      {
        num: 7,
        stock: 79823
      }
    ]
  },

  numChange({ detail }) {
    this.setData({
      isEdit: true,
      editIndex: detail.i,
      buyNum: detail.num,
      stock: this.data.goodsList[detail.i].stock,
      goodsList: this.data.goodsList.map((item, i) => {
        if (detail.i === i) {
          item.num = detail.num
        }
        return item
      })
    })
  },
})
</script>
\`\`\`
\`\`\`css
<style>
.quantity-demo {
  padding: 20px 25px;
  background: #FFF;
}

.quantity-demo-title {
  height: 40px;
  line-height: 40px;
}

.quantity-demo-goodsList {
  color: #888;
}

.quantity-demo-tips {
  color: red;
  font-size: 16px;
  font-weight: bold;
}
</style>
\`\`\`
`,
`
# 数量编辑组件

## 使用

> npm i vi-quantity

> 使用微信开发工具构建NPM

> 打开小程序页面的json配置.

\`\`\`json
{
    "usingComponents": {
      "vi-quantity": "vi-quantity"
    }
  }
\`\`\`

## 属性

| 接口 | 数据类型 | 说明 | 选项 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| goodsnumber | String, Number | 输入框中默认显示的数量 | 选填 | 1 |
| quantity | Number | 编辑的最大值 | 选填 | 0 |
| editindex | Number | 当前编辑的索引, 适用于购物车列表等场景 | 选填 | 0 |

## Events

| 方法 | 说明 | returns |
| :--: | :--: | :--: |
| change | 数值改变将会触发该方法 | 返回 i 代表 被编辑的索引, num 为当前编辑的数值 |

## 版本信息

+ v0.0.1 第一个版本
`,
``,
]