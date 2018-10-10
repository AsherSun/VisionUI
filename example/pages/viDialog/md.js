module.exports = [
  `
  \`\`\`html
  <template>
    <vi-cell-group>
      <vi-cell title="default" link bind:click="triggerToShowDefaultDialog"></vi-cell>
    </vi-cell-group>
    <vi-dialog ishide="{{defaultIsHide}}" bind:cancel="triggerToShowDefaultDialog" bind:confirm="triggerToShowDefaultDialog">
      Default Dialog
    </vi-dialog>
  </template>
  \`\`\`
  \`\`\`javascript
  <script>
  Page({
    data: {
      defaultIsHide: false,
    },
    triggerToShowDefaultDialog() {
      this.setData({
        defaultIsHide: !this.data.defaultIsHide
      })
    },
  })
  </script>
  \`\`\`
  `,
  `
  \`\`\`html
  <template>
    <vi-cell title="确认会话窗" link bind:click="triggerToShowConfirmDialog" line></vi-cell>
    <vi-dialog ishide="{{confirmIsHide}}" confirm title="Confirm" bind:cancel="triggerToShowConfirmDialog" bind:confirm="triggerToShowConfirmDialog">
      Confirm Dialog
    </vi-dialog>
  </template>
  \`\`\`
  \`\`\`javascript
  <script>
  Page({
    data: {
      confirmIsHide: false,
    },
    triggerToShowConfirmDialog() {
      this.setData({
        confirmIsHide: !this.data.confirmIsHide
      })
    },
  })
  </script>
  \`\`\`
  `,
  `
  \`\`\`html
  <template>
    <vi-cell title="警告会话窗" link bind:click="triggerToShowAlertDialog" line></vi-cell>
    <vi-dialog ishide="{{alertIsHide}}" alert title="alert" bind:cancel="triggerToShowAlertDialog" bind:confirm="triggerToShowAlertDialog">
      Confirm Dialog
    </vi-dialog>
  </template>
  \`\`\`
  \`\`\`javascript
  <script>
  Page({
    data: {
      alertIsHide: false,
    },
    triggerToShowAlertDialog() {
      this.setData({
        alertIsHide: !this.data.alertIsHide
      })
    },
  })
  </script>
  \`\`\`
  `,
  `
  \`\`\`html
  <template>
    <vi-cell title="输入会话窗" link bind:click="triggerToShowInputDialog" line></vi-cell>
    <vi-dialog ishide="{{inputIsHide}}" input title="input" bind:cancel="triggerToShowInputDialog" bind:confirm="triggerToShowInputDialog">
      Confirm Dialog
    </vi-dialog>
  </template>
  \`\`\`
  \`\`\`javascript
  <script>
  Page({
    data: {
      inputIsHide: false,
    },
    triggerToShowInputDialog() {
      this.setData({
        inputIsHide: !this.data.inputIsHide
      })
    },
  })
  </script>
  \`\`\`
  `,
  `
  \`\`\`html
  <template>
    <vi-cell title="自定义按钮" link bind:click="triggerToShowCustomDialog" line></vi-cell>
    <vi-dialog ishide="{{customIsHide}}" placeholder="请输入支付金额" custom input title="custom button" bind:confirm="triggerToShowCustomDialog">
      custom button
      <view slot="customButton" style="text-align: center; width:100%;display:flex;flex-flow:row nowrap;justify-content:space-between;">
        <view style="flex: 1;text-align: center;height: 45px;line-height: 45px;border-right:1px solid #ddd; box-sizing:border-box;color: #5f5f5f;">返回首页</view>
        <view style="flex: 1;text-align: center;height: 45px;line-height: 45px;border-right:1px solid #ddd; box-sizing:border-box;color: green;">去支付</view>
        <view style="flex: 1;text-align: center;height: 45px;line-height: 45px;color: #bbb;" bindtap="triggerToShowCustomDialog">取消支付</view>
      </view>
    </vi-dialog>
  </template>
  \`\`\`
  \`\`\`javascript
  <script>
  Page({
    data: {
      customIsHide: false,
    },
    triggerToShowCustomDialog() {
      this.setData({
        customIsHide: !this.data.customIsHide
      })
    },
  })
  </script>
  \`\`\`
  `,
  `
  # vi-dialog

  ## 使用

  > npm i vi-dialog

  > 使用微信开发者工具构建NPM并使用NPM模块
  
  > 打开页面的json配置

  \`\`\`json
  {
      "usingComponents": {
        "vi-dialog": "vi-dialog"
      }
    }
  \`\`\`

  ## 属性

  | 接口 | 数据类型 | 说明 | 选项 | 默认值 |
  | :--: | :--: | :--: | :--: | :--: |
  | ishide | Boolean | 控制组件dialog显示隐藏 | 必填 | false |
  | title | String | dialog组件title | 选填 | 提示 |
  | input | Boolean | 是否开启输入会话窗,默认不开启 | 选填 | false |
  | confirm | Boolean | 确认会话窗 | 选填 | false |
  | alert | Boolean | 警告会话窗 | 选填 | false |
  | custom | Boolean | 自定义会话窗按钮 | 选填 | false |
  | placeholder | String | input标签的placeholder属性要和组件的input接口配合使用 | 选填 | 请输入内容 |
  | value | String | input标签的value属性要和组件的input接口配合使用 | 选填 | '' |
  | inputType | String | input标签的type属性要和组件的input接口配合使用 | 选填 | 文本输入框(text) |
  | maxlength | Number | input标签的maxlength属性要和组件的input接口配合使用 | 选填 | 140 |
  | disabled | Boolean | input标签的disable属性要和组件的input接口配合使用 | 选填 | false |
  | confirmType | String | 小程序input组件的confirmType属性要和组件的input接口配合使用 | 选填 | done |
  | password | Boolean | input组件的password属性要和组件的input接口配合使用 | 选填 | false |

  ## event

  | event name | description | 返回值数据类型 | 返回值说明 |
  | :--: | :--: | :--: | :--: |
  | triggerToCancel | 取消按钮的事件 | String | 按钮的标识:'cancel' |
  | triggerToConfirm | 确认按钮的事件 | String, Object | 数据类型为String时是按钮的标识:'confirm'，数据类型为Object时，是输入会话窗的event.detail值 |
  | triggerToInput | input的输入事件 | Object | 返回用户输入的值 |
  | triggerToFocus | input的聚焦事件 | Object | event.detail |
  | triggerToBlur | input的失焦事件 | Object | event.detail |

  ## slot

  | slot name | description |
  | :--: | :--: |
  | default | 默认插槽，会话窗的提示内容 |
  | customButton | 自定义按钮的插槽，注意需要和组件的custom接口配合使用 |

  ## Bug&&Tips

  + 该组件的default形式与confirm形式是一样的

  ## 版本信息

  + v0.0.1 第一个版本
  + v0.0.3 修改组件层级、更新文档
  `,
]