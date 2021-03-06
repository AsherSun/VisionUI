# vi-motion

> **vi-motion组件的内部运动是css3动画，使用的是[animate](https://github.com/daneden/animate.css)开源动画库** <br>
> 非常用到的提示：**vi-motion 组件的内部运动是css3的transform 所以在自定义 content盒子的样式时候，请不要使用transform，即使用了也不会生效**

## 使用

> npm i vi-motion

> 使用微信开发者工具构建NPM并使用NPM模块

> 在页面的json文件中引入

```json
{
  "usingComponents": {
    "vi-motion": "vi-motion"
  }
}
```

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