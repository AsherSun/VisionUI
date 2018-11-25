# vi-cell-group

## 使用

> **tips: 请和vi-cell组件配合使用** <br>

> npm i vi-cell-group <br>

> 使用微信开发者工具构建NPM并使用NPM模块 <br>


```json
"usingComponents": {
  "vi-cell-group": "vi-cell-group"
}
```

## 示例

<!-- visionUI code example -->

### cell-group组的使用方式

```HTML
<vi-cell-group title="带标题的cell-group" margin-top="20">
  <vi-cell title="带Icon" iconName="setting"></vi-cell>
  <vi-cell title="只显示箭头" iconName="setting" link="{{true}}"></vi-cell>
  <vi-cell title="显示右侧描述信息" iconName="setting" link="{{true}}" desc="我是描述..."></vi-cell>
  <vi-cell title="跳转到首页" desc="linkType为:navigateBack" linkType="navigateBack" iconName="carame" link="/pages/index/index"></vi-cell>
</vi-cell-group>
```

<!-- code example -->

<!-- visionUI code example -->

## 属性

| 接口 | 数据类型 | 说明 | 选项 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| title | String | vi-cell-group的title | 选填 | '' |
| marginTop | Number | 上边距 | 选填 | 0 |