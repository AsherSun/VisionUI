# 倒计时组件文档

## 使用

> * npm i vi-count-down
> * 使用微信开发者工具构建NPM并使用NPM模块
> * 在页面中引用 vi-count-down组件

```json
"usingComponents": {
  "vi-count-down": "/vi-count-down" // 相对路劲
}
```

> 使用字符串形式的日期格式

```HTML
<count-down endTime="2018/12/01></count-down>
```

> 使用毫秒数的日期格式

```HTML
<count-down end-time="{{1543593600000}}"></count-down>
```

## 属性

| 接口 | 数据类型 | 说明 | 选项 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| endTime | [ String, Number  ] | 接收字符串形式的时间格式或者毫秒数 | 必填 | null |
| startTime | [ String, Number  ] | 接收字符串形式的时间格式或者毫秒数 | 选填 | null |
| endText | [ String ] | 接收字符串文本 | 选填 | 该订单已超过支付时间 |