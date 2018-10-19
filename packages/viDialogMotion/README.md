# vi-motion

## 使用

> npm i vi-motion

> 使用微信开发者工具构建NPM并使用NPM模块

> 在页面的json文件中引入

```json
{
  "usingComponents": {
    "dialo-motion": "vi-motion"
  }
}
```

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

## Bug&&Tips

+ 阅读该文档之前请先具备微信上传API的相关知识
+ 该插件封装了微信的图片上传与视频上传接口、其余文件类型并没有封装，如有需要，后续会添加。
+ 插件的config配置是基于微信提供的接口之上稍微添加了几个。config完全匹配微信的API接口

## 版本信息

+ v0.0.1 初始版本
+ v0.0.2 修改组件名称
