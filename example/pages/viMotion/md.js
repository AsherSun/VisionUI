module.exports = [
`
\`\`\`html
<template>
<vi-motion ishide="{{showMotion}}" animate-name="{{animateName}}" catch:hide="triggerToHideDialog">
  <view 
    style="margin:50vh auto;background:#FFF;transform:translateY(-50%);width: 300px;height: 30vh;border-radius:5px;text-align: center;line-height: 30vh;">
    弹窗运动方式为：<text style="color:aquamarine;">{{animateName}}</text>
  </view>
</vi-motion>
</template>
\`\`\`
\`\`\`javascript
<script>
Page({
  data: {
    showMotion: false,
    animateNameList,
    animateName: '',
    index: 0,
  },
  bindPickerChange({ detail: { value } }) {
    this.setData({
      animateName: animateNameList[value],
      index: value,
      showMotion: true
    })
  },
  triggerToHideDialog() {
    this.setData({
      showMotion: false
    })
  },
})
</script>
\`\`\`
`,
`
# vi-motion

## 使用

> npm i vi-motion

> 使用微信开发者工具构建NPM并使用NPM模块

> 在页面的json文件中引入

\`\`\`json
{
    "usingComponents": {
      "dialo-motion": "vi-motion"
    }
  }
\`\`\`

## Config Props

| Props | Data Type | description | 选项 | default Value | 
| :--: | :--: | :--: | :--: | :--: |
| ishide | Boolean | 控制组件的显示隐藏 | 必填 | false |
| animateName | String | 运动方式 | 选填 | bounce |

## animate name

| name | name | name |
| :--: | :--: | :--: |
| bounce | flash | pulse |
| rubberBand | shake | headShake |
| swing | tada | wobble |
| jello | bounceIn | bounceInDown |
| bounceInLeft | bounceInRight | bounceInUp |
| fadeIn | fadeInDown | fadeInDownBig |
| fadeInLeft | fadeInLeftBig | fadeInRight |
| fadeInRightBig | fadeInUp | fadeInUpBig |
| flipInX | flipInY | lightSpeedIn |
| rotateInDownLeft | rotateInDownRight | rotateInUpLeft |
| rotateInUpRight | jackInTheBox | rollIn |
| zoomIn | zoomInDown | zoomInLeft |
| zoomInRight | zoomInUp | slideInDown |
| slideInLeft | slideInRight | slideInUp |

## 版本信息

+ v0.0.1 初始版本
+ v0.0.2 修改组件名称
`,
]