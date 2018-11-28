# vi-calendar

## 使用

> npm i vi-calendar --save <br>

> 使用微信开发者工具构建NPM并使用NPM模块


```json
"usingComponents": {
  "ViCalendar": "vi-calendar",
}
```

## 示例

<!-- visionUI code example -->

### Default

```html
<template>
  <ViCalendar></ViCalendar>
</template>
```

<!-- code example -->

### Selected Dates

```html
<template>
  <ViCalendar selectedList="{{[12,15,6,8,4]}}" selected-class="calendar__day--selected"></ViCalendar>
</template>
```

```css
.calendar__day--selected {
  background-color: #FDE9A8;
  border-radius: 8px;
}
```

<!-- code example -->

### Hide Week Nav

```html
<template>
  <ViCalendar hideWeek></ViCalendar>
</template>
```

<!-- code example -->

### Custom Header

```html
<template>
  <ViCalendar customHeader hideWeek selectedList="{{[12,15,6,8,4]}}" >
    <view class="calendar-header">11月打卡一览</view>
  </ViCalendar>
</view>
</template>
```

```css
page {
  background-color:#39d3ef;
}
.signIn-card {
  width:710rpx;
  border-radius:8px;
  margin:0 auto 20px;
  padding-bottom: 10px;
  background: #FFF;
}

.calendar-header {
  color:#49D6EB;
  font-size:18px;
  text-align:center;
  margin:26rpx auto;
}
```

<!-- code example -->

<!-- visionUI code example -->

## Config Props

| 接口 | 数据类型 | 说明 | 选项 | 默认值 | 版本号 |
| :--: | :--: | :--: | :--: | :--: | :--: |
| selectedList | Array[Number] | 当前要选中的日期 | 选填 | [] | 0.0.1 |
| customHeader | Boolean | 是否需要自定义Header | 选填 | false | 0.0.1 |
| hideWeek | Boolean | 是否需要隐藏周日期 | 选填 | false | 0.0.1 |

## Slot Name

| slot name | 说明 |
| :--: | :--: |
| default | 用于自定义头部UI |

## Extend Class

| Event name | 说明 |
| :--: | :--: |
| selected-class | 选中的样式 |

## 版本记录

+ v0.0.5 新增自定义事件click
+ v0.0.3 新增右侧内容插槽功能