# vi-icon

## 使用

> npm i vi-icon --save <br>

> 使用微信开发者工具构建NPM并使用NPM模块


```json
"usingComponents": {
  "ViIcon": "vi-icon",
}
```

## 示例

<!-- visionUI code example -->

### 使用内置图标

> iconName接收内置的图标名称 <br>

> icon-style 用于定义图标的样式

```html
<template>
  <ViIcon iconName="email" icon-style="vi-icon-email"></ViIcon>
</template>
```

> 如果要定义图标的字体大小，请给类名加上 before伪元素<br>

> 内置图标的字体大小为14px

```css
.vi-icon-email::before {
  font-size: 30px;
  color: red;
}
```

<!-- code example -->

### 扩展图标库

> 使用图标库扩展功能请先阅读微信小程序的[字体API](https://developers.weixin.qq.com/miniprogram/dev/api/media/font/wx.loadFontFace.html) <br>

> fontSource 接收图标库的资源文件。文件类型为 .ttf或者 .woff <br>


```html
<template>
  <ViIcon 
    fontSource="url('https://at.alicdn.com/t/font_629189_c2m154yp2ts.ttf')" 
    icon-style="icon-local">
  </ViIcon>
</template>
```

> content 中的内容为字体的 unicode 编码<br>

```css
.icon-local::before {
  content: '\e602';
  font-size: 20px;
}
```

<!-- code example -->

### 扩展图标库的高级用法

> fontFamily 用于修改字体文件的css引用名称 <br>

```html
<template>
  <ViIcon 
    fontSource="url('https://at.alicdn.com/t/font_849474_p1bye6fkj5.woff')" 
    icon-style="icon-network-error"
    fontFamily="viAbnormalTips">
  </ViIcon>
</template>
```

```css
.icon-network-error::before {
  content: '\e602';
  font-size: 66px;
}
```

<!-- code example -->

<!-- visionUI code example -->

## Config Props

| 接口 | 数据类型 | 说明 | 选项 | 默认值 | 版本号 |
| :--: | :--: | :--: | :--: | :--: | :--: |
| iconName | String | 组件内容的icon名称 | 选填 | '' | 0.0.1 |
| fontFamily | String | 扩展的字体资源名称设置 | 选填 | custom-font | 0.0.1 |
| fontSource | String | 字体的资源路径需要为 | 选填 | '' | 0.0.1 |

## Extend Class

| prop | 说明 |
| :--: | :--: |
| icon-style | 用于设置字体图标的样式 |

## Event name

| Event name | 说明 |
| :--: | :--: |
| clickIcon | 组件点击事件 |

## Icon Name 内置的图标名

| icon name | icon name | icon name |
| :--: | :--: | :--: |
| email | shooping | location |
| cloud-download | cloud-upload | branch |
| data | telephone | share |
| price | full-screen | full-screen-cancel |
| delete | qrCode | setting |
| setting-cente | control | return |
| link | link-cancel | shopping-case |
| label | print | bluetooth |
| add | reduce | right |
| error | refresh | history |
| bottom-left-arrow | bottom-right-arrow | top-right-arrow |
| top-left-arrow | right-arrow | left-arrow |
| bottom-arrow | top-arrow | bottom-arrow-doubl |
| top-arrow-double | right-arrow-double | right-arrow-double |
| left-arrow-double | - | - |

## 版本记录

+ v0.0.1 初始版本