module.exports = [
`
> 重要提示：**<code>vi-motion</code>组件的 <code>container-class</code> 属性是用于自定义内容盒子的样式的，该属性必填。**

> <code>vi-motion</code> 组件 设置 <code>click-mask-hide</code> 属性为 <code>true</code> 那么点击遮罩层并不会消失 <br />

> 如果不触发组件的 <code>hide</code> 事件方法 可以达到 点击遮罩层组件并不会隐藏的效果 <br />

> <code>click-mask-hide</code> 属性 权重为最高级，意思是：如果设置了 <code>click-mask-hide</code> 属性为 <code>true</code> 即使添加了组件库的 <code>hide</code> 事件，也不会生效

\`\`\`html
<template name="maskNotHide">
  <vi-cell title="点击遮罩层阻止组件消失" line link bind:click="triggerToClickMaskNoHide"></vi-cell>
  <vi-motion 
    ishide="{{maskNotHideData.isShow}}"
    container-class="vi-motion__container"
    out-animate-name="{{maskNotHideData.outAnimateName}}"
    enter-animate-name="{{maskNotHideData.enterAnimateName}}"
    animation-duration="{{0.5}}"
    click-mask-hide
    catch:hide="triggerToClickMaskNoHide">
    <view>进入的动画为：<text style="color:aquamarine;">{{maskNotHideData.enterAnimateName}}</text></view>
    <view>消失的动画为：<text style="color:aquamarine;">{{maskNotHideData.outAnimateName}}</text></view>
    <button bindtap="triggerToClickMaskNoHide">点我关闭</button>
  </vi-motion>
</template>
\`\`\`
\`\`\`javascript
// maskNotHide.js
const data = {
  isShow: false,
  enterAnimateName: 'rotateIn',
  outAnimateName: 'rotateOut'
}

const methods = {
  triggerToClickMaskNoHide() {
    this.setData({
      'maskNotHideData.isShow': !this.data.maskNotHideData.isShow
    })
  }
}

module.exports = {
  data,
  methods
}

// page.js
const maskNotHide = require('./maskNotHide.js');
Page({
  ...maskNotHide.methods,
  data: {
    maskNotHideData: maskNotHide.data,
  },
})
\`\`\`
\`\`\`css
< !--container - class属性的样式-- >
.vi - motion__container {
  position: absolute;
  < !--z - index的值请最少设置 10000 -- >
  z - index: 100000;
  top: 50 %;
  left: 50 %;
  <!--因为组件的运动使用的是transform。所以这里的盒子居中就采用了margin处理-- >
  margin - top: -15vh;
  margin - left: -150px;
  background: #fff;
  width: 300px;
  height: 30vh;
  border - radius: 5px;
  text - align: center;
  line - height: 4;
  box - shadow: 1 0 1 rgba(0, 0, 0, 0.4);
}
\`\`\`
`,
`
> 重要提示：**<code>vi-motion</code>组件的 <code>container-class</code> 属性是用于自定义内容盒子的样式的，该属性必填。** <br />

> <code>vi-motion</code> 组件的 <code>mask-color</code> 属性是设置遮罩层的颜色的，该属性接收任意<code>css</code>颜色值 <br />

\`\`\`html
<template name="changeMaskColor">
  <vi-cell title="更改遮罩层颜色" line link bind:click="triggerToChangeMaskColor"></vi-cell>
  <vi-motion 
    ishide="{{changeMaskColorData.isShow}}"
    container-class="vi-motion__container"
    out-animate-name="{{changeMaskColorData.outAnimateName}}"
    enter-animate-name="{{changeMaskColorData.enterAnimateName}}"
    animation-duration="{{0.5}}"
    mask-color="rgba(255, 0, 0, 0.6)"
    catch:hide="triggerToChangeMaskColor">
    <view>进入的动画为：<text style="color:aquamarine;">{{changeMaskColorData.enterAnimateName}}</text></view>
    <view>消失的动画为：<text style="color:aquamarine;">{{changeMaskColorData.outAnimateName}}</text></view>
  </vi-motion>
</template>
\`\`\`
\`\`\`javascript
// changeMaskColor.js
const data = {
  isShow: false,
  enterAnimateName: 'rotateIn',
  outAnimateName: 'rotateOut'
}

const methods = {
  triggerToChangeMaskColor() {
    this.setData({
      'changeMaskColorData.isShow': !this.data.changeMaskColorData.isShow
    })
  }
}

module.exports = {
  data,
  methods
}

// page.js
const maskNotHide = require('./changeMaskColor.js');
Page({
  ...changeMaskColor.methods,
  data: {
    changeMaskColorData: changeMaskColor.data,
  },
})
\`\`\`
\`\`\`css
< !--container - class属性的样式-- >
.vi - motion__container {
  position: absolute;
  < !--z - index的值请最少设置 10000 -- >
  z - index: 100000;
  top: 50 %;
  left: 50 %;
  <!--因为组件的运动使用的是transform。所以这里的盒子居中就采用了margin处理-- >
  margin - top: -15vh;
  margin - left: -150px;
  background: #fff;
  width: 300px;
  height: 30vh;
  border - radius: 5px;
  text - align: center;
  line - height: 4;
  box - shadow: 1 0 1 rgba(0, 0, 0, 0.4);
}
\`\`\`
`,
`
> 重要提示：**<code>vi-motion</code>组件的 <code>container-class</code> 属性是用于自定义内容盒子的样式的，该属性必填。** <br />

> <code>vi-motion</code> 组件的 <code>mask-is-hide</code> 属性是设置遮罩层是否隐藏的，如果值为 <code>true</code>那么遮罩层会隐藏 <br />

\`\`\`html
<template name="hideMask">
  <vi-cell title="隐藏遮罩层" line link bind:click="triggerToHideMask"></vi-cell>
  <vi-motion 
    ishide="{{hideMaskData.isShow}}"
    container-class="vi-motion__container"
    out-animate-name="{{hideMaskData.outAnimateName}}"
    enter-animate-name="{{hideMaskData.enterAnimateName}}"
    animation-duration="{{0.5}}"
    mask-is-hide
    mask-color="rgba(255, 0, 0, 0.8)"
    catch:hide="triggerToHideMask">
    <view>进入的动画为：<text style="color:aquamarine;">{{hideMaskData.enterAnimateName}}</text></view>
    <view>消失的动画为：<text style="color:aquamarine;">{{hideMaskData.outAnimateName}}</text></view>
    <button bindtap="triggerToHideMask">点击我关闭</button>
  </vi-motion>
</template>
\`\`\`
\`\`\`javascript
// hideMask.js
const data = {
  isShow: false,
  enterAnimateName: 'rotateIn',
  outAnimateName: 'rotateOut'
}

const methods = {
  triggerToHideMask() {
    this.setData({
      'hideMaskData.isShow': !this.data.hideMaskData.isShow
    })
  }
}

module.exports = {
  data,
  methods
}

// page.js
const maskNotHide = require('./hideMask.js');
Page({
  ...hideMask.methods,
  data: {
    hideMaskData: hideMask.data,
  },
})
\`\`\`
\`\`\`css
< !--container - class属性的样式-- >
.vi - motion__container {
  position: absolute;
  < !--z - index的值请最少设置 10000 -- >
  z - index: 100000;
  top: 50 %;
  left: 50 %;
  <!--因为组件的运动使用的是transform。所以这里的盒子居中就采用了margin处理-- >
  margin - top: -15vh;
  margin - left: -150px;
  background: #fff;
  width: 300px;
  height: 30vh;
  border - radius: 5px;
  text - align: center;
  line - height: 4;
  box - shadow: 1 0 1 rgba(0, 0, 0, 0.4);
}
\`\`\`
`,
`
> 重要提示：**<code>vi-motion</code>组件的 <code>container-class</code> 属性是用于自定义内容盒子的样式的，该属性必填。** <br />

> <code>vi-motion</code> 组件内置了多达60多种的运动方式 <br />

> 该组件的运动方式是使用的<code>css</code>的<code>transform</code>属性 <br />

> 运动库是：[<code>Animate.css</code>](https://github.com/daneden/animate.css)

\`\`\`html
<template name="selectAnimate">
  <view class="animate-demo-area font14" style="background:#FFF;">
    <picker 
      bindchange="bindPickerChangeEnter" 
      value="{{selectAnimateData}}" 
      range="{{selectAnimateData.enterAnimateNameList}}">
      <view class="picker">
        请选择出现时运动方式：{{selectAnimateData.enterAnimateNameList[selectAnimateData.enterIndex]}}
      </view>
    </picker>
  </view>
  <vi-motion 
    ishide="{{selectAnimateData.isShow}}"
    container-class="vi-motion__container"
    out-animate-name="{{selectAnimateData.outAnimateName}}"
    enter-animate-name="{{selectAnimateData.enterAnimateName}}"
    animation-duration="{{0.5}}"
    catch:hide="triggerToSelectAnimate">
    <view>
      进来时运动方式为：<text style="color:aquamarine;">{{selectAnimateData.enterAnimateName}}</text>
    </view> 
    <view>
      消失时运动方式为：<text style="color:aquamarine;">{{selectAnimateData.outAnimateName}}</text>
    </view>
    <picker 
      bindchange="bindPickerChangeOut" 
      value="{{outIndex}}" 
      range="{{selectAnimateData.outAnimateNameList}}">
      <view class="picker">
        请选择隐藏时动画：{{selectAnimateData.outAnimateNameList[selectAnimateData.outIndex]}}
      </view>
    </picker>
  </vi-motion>
</template>
\`\`\`
\`\`\`javascript
// selectAnimate.js
const data = {
  isShow: false,
  enterAnimateName: 'rotateIn',
  outAnimateName: 'rotateOut',
  enterIndex: 0,
  outIndex: 0,
  enterAnimateNameList: require('./enterAnimateList.js'),
  outAnimateNameList: require('./outAnimateList.js'),
}

const methods = {
  triggerToSelectAnimate() {
    this.setData({
      'selectAnimateData.isShow': false
    })
  },
  bindPickerChangeEnter({ detail: { value } }) {
    this.setData({
      enterAnimateNameList: this.data.selectAnimateData.enterAnimateNameList[value],
      enterIndex: value,
      'selectAnimateData.isShow': true
    })
  },
  bindPickerChangeOut({ detail: { value } }) {
    this.setData({
      outAnimateNameList: this.data.selectAnimateData.outAnimateNameList[value],
      outIndex: value,
      'selectAnimateData.isShow': false
    })
  },
}

module.exports = {
  data,
  methods,
}

// page.js
const maskNotHide = require('./selectAnimate.js');
Page({
  ...selectAnimate.methods,
  data: {
    selectAnimateData: selectAnimate.data,
  },
})
\`\`\`
\`\`\`css
< !--container - class属性的样式-- >
.vi - motion__container {
  position: absolute;
  < !--z - index的值请最少设置 10000 -- >
  z - index: 100000;
  top: 50 %;
  left: 50 %;
  <!--因为组件的运动使用的是transform。所以这里的盒子居中就采用了margin处理-- >
  margin - top: -15vh;
  margin - left: -150px;
  background: #fff;
  width: 300px;
  height: 30vh;
  border - radius: 5px;
  text - align: center;
  line - height: 4;
  box - shadow: 1 0 1 rgba(0, 0, 0, 0.4);
}
\`\`\`
`,
`
> 重要提示：**<code>vi-motion</code>组件的 <code>container-class</code> 属性是用于自定义内容盒子的样式的，该属性必填。** <br />

> <code>vi-motion</code> 组件的 <code>out-has-animate</code> 属性是设置组件消失时是否出现动画，如果为false 则不会出现动画 <br />

\`\`\`html
<template name="hideNotAnimate">
  <vi-cell title="组件消失时无动画" line link bind:click="triggerToHideNotAnimate"></vi-cell>
  <vi-motion 
    ishide="{{hideNotAnimateData.isShow}}"
    container-class="vi-motion__container"
    out-animate-name="{{hideNotAnimateData.outAnimateName}}"
    enter-animate-name="{{hideNotAnimateData.enterAnimateName}}"
    animation-duration="{{0.5}}"
    out-has-animate="{{false}}"
    catch:hide="triggerToHideNotAnimate">
    <view>进入的动画为：<text style="color:aquamarine;">{{hideNotAnimateData.enterAnimateName}}</text></view>
    <view>消失的动画为：<text style="color:aquamarine;">{{hideNotAnimateData.outAnimateName}}</text></view>
  </vi-motion>
</template>
\`\`\`
\`\`\`javascript
// hideNotAnimate.js
const data = {
  isShow: false,
  enterAnimateName: 'rotateIn',
  outAnimateName: 'rotateOut'
}

const methods = {
  triggerToHideNotAnimate() {
    this.setData({
      'hideNotAnimateData.isShow': !this.data.hideNotAnimateData.isShow
    })
  }
}

module.exports = {
  data,
  methods
}

// page.js
const maskNotHide = require('./hideNotAnimate.js');
Page({
  ...hideNotAnimate.methods,
  data: {
    chideNotAnimateData: hideNotAnimate.data,
  },
})
\`\`\`
\`\`\`css
< !--container - class属性的样式-- >
.vi - motion__container {
  position: absolute;
  < !--z - index的值请最少设置 10000 -- >
  z - index: 100000;
  top: 50 %;
  left: 50 %;
  <!--因为组件的运动使用的是transform。所以这里的盒子居中就采用了margin处理-- >
  margin - top: -15vh;
  margin - left: -150px;
  background: #fff;
  width: 300px;
  height: 30vh;
  border - radius: 5px;
  text - align: center;
  line - height: 4;
  box - shadow: 1 0 1 rgba(0, 0, 0, 0.4);
}
\`\`\`
`,
`
> 重要提示：**<code>vi-motion</code>组件的 <code>container-class</code> 属性是用于自定义内容盒子的样式的，该属性必填。** <br />

> <code>vi-motion</code> 组件的 <code>animation-duration</code> 属性是设置组件的运动时长，单位是 s <br />

\`\`\`html
<template name="animateDuration">
  <vi-cell 
    title="更改动画运动时间为2s" 
    line 
    link 
    bind:click="triggerToAnimateDuration">
  </vi-cell>
  <vi-motion 
    ishide="{{animateDurationData.isShow}}"
    container-class="vi-motion__container"
    out-animate-name="{{animateDurationData.outAnimateName}}"
    enter-animate-name="{{animateDurationData.enterAnimateName}}"
    animation-duration="{{2}}"
    mask-color="rgba(255, 0, 0, 0.8)"
    catch:hide="triggerToAnimateDuration">
    <view>进入的动画为：<text style="color:aquamarine;">{{animateDurationData.enterAnimateName}}</text></view>
    <view>消失的动画为：<text style="color:aquamarine;">{{animateDurationData.outAnimateName}}</text></view>
    <button bindtap="triggerToAnimateDuration">点击我关闭</button>
  </vi-motion>
</template>
\`\`\`
\`\`\`javascript
// animateDuration.js
const data = {
  isShow: false,
  enterAnimateName: 'rotateIn',
  outAnimateName: 'rotateOut'
}

const methods = {
  triggerToAnimateDuration() {
    this.setData({
      'animateDurationData.isShow': !this.data.animateDurationData.isShow
    })
  }
}

module.exports = {
  data,
  methods
}

// page.js
const animateDuration = require('./animateDuration.js');
Page({
  ...animateDuration.methods,
  data: {
    animateDurationData: animateDuration.data,
  },
})
\`\`\`
\`\`\`css
< !--container - class属性的样式-- >
.vi - motion__container {
  position: absolute;
  < !--z - index的值请最少设置 10000 -- >
  z - index: 100000;
  top: 50 %;
  left: 50 %;
  <!--因为组件的运动使用的是transform。所以这里的盒子居中就采用了margin处理-- >
  margin - top: -15vh;
  margin - left: -150px;
  background: #fff;
  width: 300px;
  height: 30vh;
  border - radius: 5px;
  text - align: center;
  line - height: 4;
  box - shadow: 1 0 1 rgba(0, 0, 0, 0.4);
}
\`\`\`
`,
`
# vi-motion

> **<code>vi-motion</code>组件的内部运动是<code>css3</code>动画，使用的是[animate](https://github.com/daneden/animate.css)开源动画库** <br />

> 非常重要的提示：**<code>vi-motion</code>组件提供了对外自定义<code>container</code>盒子的样式接口，这样做的主要目的是为了开发者更加灵活去写自己想要的运动组件内容样式** <br />

> 非常重要的提示：**<code>vi-motion</code> 组件的内部运动是<code>css3的<code>transform</code> 所以在自定义container盒子的样式时候，请不要使用<code>transform</code>，即使用了也不会生效** <br />

## 使用

> npm i vi-motion

> 使用微信开发者工具构建NPM并使用NPM模块

> 在页面的json文件中引入

\`\`\`json
{
    "usingComponents": {
      "vi-motion": "vi-motion"
    }
  }
\`\`\`

## Config Props

| Props | Data Type | description | 选项 | default Value | 版本号 |
| :--: | :--: | :--: | :--: | :--: | :--: |
| ishide | Boolean | 控制组件的显示隐藏 | 必填 | false | 0.0.1 |
| enterAnimateName | String | 出现时候的运动方式(原接口名animateName已被废弃) | 选填 | bounce | 0.0.3 |
| outAnimateName | String | 消失时候的运动方式| 选填 | '' | 0.0.3 |
| clickMaskHide | Boolean | 点击mask遮罩层时，组件是否消失(原接口名isMaskHide已被废弃) | 选填 | false | 0.0.3 |
| outHasAnimate | Boolean | 组件消失的时候是否出现动画 | 选填 | true | 0.0.4 |
| animationDuration | Number | 运动的时长(单位秒s) | 选填 | 1 | 0.0.3 |
| maskIsHide | Boolean | 是否隐藏mask遮罩层 | 选填 | false | 0.0.4 |
| maskColor | String | 更改mask遮罩层颜色 | 选填 | rgba(0,0,0, .3) | 0.0.4 |

## Event name

| name | description | returns | 版本号 |
| :--: | :--: | :--: | :--: |
| hide | 点击遮罩层是否隐藏 | 组件库的显示或隐藏状态(ishide) | 0.0.1 |

## External classes (组件样式扩展功能)

| name | description | 版本号 |
| :--: | :--: | :--: |
| container-class | 运动组件装载内容的盒子样式表名称 | 0.0.1 |

## enter animate name

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

## out animate name

| name | name | name |
| :--: | :--: | :--: |
| hinge | bounceOut | bounceOutDown |
| bounceOutLeft | bounceOutRight | bounceOutUp |
| fadeOut | fadeOutDown | fadeOutDownBig |
| fadeOutLeft | fadeOutLeftBig | fadeOutRight |
| fadeOutRightBig | fadeOutUp | fadeOutUpBig |
| flipOutX | flipOutY | lightSpeedOut |
| rotateOut | rotateOutDownLeft | rotateOutDownRight |
| rotateOutUpLeft | rotateOutUpRight | rollOut |
| zoomOut | zoomOutDown | zoomOutLeft |
| zoomOutRight | zoomOutUp | slideOutDown |
| slideOutLeft | slideOutRight | slideOutUp |

## 版本信息

+ v0.0.1 初始版本
+ v0.0.2 修改组件名称
+ v0.0.3 新增组件隐藏时可配置动画效果, 点击mask遮罩层可配置是否隐藏组件
+ v0.0.4 新增mask遮罩层颜色修改、隐藏mask遮罩层
+ v0.0.5 修改说明文档
+ v0.0.8 修改扩展样式的接口名、修复bug
`,
]