# vi-popup

## 使用

> npm i vi-sticker-footer --save
> 使用微信开发者工具构建NPM并使用NPM模块


```json
{
  "usingComponents": {
    "sticker-footer": "vi-sticker-footer"
  }
}
```

> HTML结构

```HTML
<sticker-footer footer-height="{{50}}">
  <view slot="main" style="text-align: center;padding: 30px 0;background-color: #f9f9f9;">
    我是页面主体内容
  </view>
  <view slot="footer" style="height: 50px;text-align: center;background-color: #333;color: #FFF;">
    我是页脚，专门用来处理页面主题内容高度不够，而页脚顶上去的布局
  </view>
</sticker-footer>
```

## 属性

| 接口 | 数据类型 | 说明 | 选项 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| footerHeight | Number | 页面Footer的高度 | 必填 | 0 |

## Slot

| slot name | description |
| :--: | :--: |
| main | 页面主体内容 |
| footer | 页面footer |

## 版本记录

+ v0.0.1 初始版本