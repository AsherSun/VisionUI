# 无数据情况下的提示组件

## 使用

> 小程序组件的引用

*打开小程序页面的json配置.*

```json
"usingComponents": {
  "count-down": "./../no_data_tips" // 可以使用相对路劲也可以使用绝对路劲
}
```

> 组件的默认显示效果

```
<view class="pos_re noDataTips font12">
  <no-data-tips></no-data-tips>
</view>
```

> 替换组件中的文本提

```
<view class="pos_re noDataTips font12">
  <no-data-tips tips="该分类下暂无商品数据"></no-data-tips>
</view>
```
> 替换组件中icon

```
<view class="pos_re noDataTips font12">
  <no-data-tips isIconSlot="{{isIconSlot}}">
    <image class="noDataTips-img" mode="aspectFit" src="/styles/images/sad.png"></image>
  </no-data-tips>
</view>
```

> 更改组件的 root 级别 样式

```
/* 页面级别的wxss文件中的样式 */
.changeBgColor {
  background-color: #d9d9d9;
  color: #FFF;
}

/* 在组件上使用样式 */
<view class="pos_re noDataTips font12">
  <no-data-tips no-data-class="changeBgColor"></no-data-tips>
</view>
```
> 更改组件中icon的样式

```
/* 页面级别的wxss文件中的样式 */
.changeIconColor {
  color: #eee;
}

/* 在组件上使用样式 */
<view class="pos_re noDataTips font12">
  <no-data-tips no-data-icon-class="changeIconColor"></no-data-tips>
</view>
```
> 更改组件中文本提示样式

```
/* 页面级别的wxss文件中的样式 */
.changeTextColor {
  color: blue;
}

/* 在组件上使用样式 */
<view class="pos_re noDataTips font12">
  <no-data-tips no-data-txt-class="changeTextColor"></no-data-tips>
</view>
```

## 属性

| 接口 | 数据类型 | 说明 | 选项 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| tips | [ String ] | 组件的提示内容 | 选填 | 暂无内容 |
| isIconSlot | [ Boolean ] | 是否使用外部ICON或图片 | 选填 | 组件内部的ICON |
| no-data-class | [ String ] | wxss 文件中的className名称，该属性会改变组件 Root 级别的样式 | 选填 | null |
| no-data-icon-class | [ String ] | wxss 文件中的className名称，该属性会改变组件 ICON 的样式 | 选填 | null |
|no-data-txt-class | [ String ] | wxss 文件中的className名称，该属性会改变组件 提示内容 的样式 | 选填 | null |

## Bug&Tips

+  由于小程序的限制，组件内部的样式作用不到 slot 插槽 上。所以如果自定义组件 icon 可能会导致样式不一致。