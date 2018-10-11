module.exports = [
`
\`\`\`html
<template>
<vi-slider-menu menu-width="200">
  <view slot="section" class="section"></view>
  <view slot="menu" class="menu"></view>
</vi-slider-menu>
</template>
\`\`\`
\`\`\`javascript
<script>

</script>
\`\`\`
\`\`\`css
<style>
.section, .menu{
  height: 100px;
  margin-top: 10px;
  width: 100%;
  background: #FFF;
}

.menu {
  border-left: 1px solid #d9d9d9;
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

## Event Handle

| Event Name | 方法说明 | 返回值 |
| :--: | :--: | :--: |
| tap | 用户点击事件 | 无 |

## 版本信息

+ v0.0.1 初始版本
`,
]