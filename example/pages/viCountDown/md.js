module.exports = [
  `
  \`\`\`html
  <template>
    <vi-count-down 
      end-time="2018/12/01">
    </vi-count-down>
  </template>
  \`\`\`
  `,
  `
  \`\`\`html
  <template>
    <vi-count-down end-time="{{1543593600000}}"></vi-count-down>
  </template>
  \`\`\`
  `,
  `
  \`\`\`html
  <template>
    <vi-count-down is-slot bind:countdown="triggerToCountdown"  end-time="{{1543593600000}}">
      <view style="text-align:center;">
        <text  style="display:inline-block;width:66rpx;height:66rpx;margin-right:8rpx;line-height:66rpx;font-size:30rpx;font-family:PingFangSC-Medium;font-weight:500;background:#F8F8F8;color:#BB4430;border-radius:12rpx;"> {{countDown.days}}</text>
        <text style="margin-right:22rpx;font-size:20rpx;color:#666666;line-height:66rpx;">天</text>
        <text style="display:inline-block;width:66rpx;height:66rpx;margin-right:8rpx;line-height:66rpx;font-size:30rpx;font-family:PingFangSC-Medium;font-weight:500;background:#F8F8F8;color:#BB4430;border-radius:12rpx;">{{countDown.hours}}</text>时
        <text style="margin-right:22rpx;font-size:20rpx;color:#666666;line-height:66rpx;">时</text>
        <text style="display:inline-block;width:66rpx;height:66rpx;margin-right:8rpx;line-height:66rpx;font-size:30rpx;font-family:PingFangSC-Medium;font-weight:500;background:#F8F8F8;color:#BB4430;border-radius:12rpx;">{{countDown.minutes}}</text>分
        <text style="margin-right:22rpx;font-size:20rpx;color:#666666;line-height:66rpx;">分</text>
        <text style="display:inline-block;width:66rpx;height:66rpx;margin-right:8rpx;line-height:66rpx;font-size:30rpx;font-family:PingFangSC-Medium;font-weight:500;background:#F8F8F8;color:#BB4430;border-radius:12rpx;">{{countDown.seconds}}</text>
        <text style="margin-right:22rpx;font-size:20rpx;color:#666666;line-height:66rpx;">秒</text>
      </view>
    </vi-count-down>
  </template>
  \`\`\`

  \`\`\`javascript
  Page({
  data: {
    countDown: {},
  },
  triggerToCountdown({ detail }) {
    this.setData({
      countDown: detail
    })
  },
})
  \`\`\`
  `,
  `
  # 倒计时组件文档

  ## 使用

  > npm i vi-count-down

  > 在使用之前，请先用微信开发者工具构建NPM和使用NPM模块

  *打开小程序页面的json配置.*

  \`\`\`json
  "usingComponents": {
    "count-down": "vi-count-down"
  }
  \`\`\`


  ## 属性

  | 接口 | 数据类型 | 说明 | 选项 | 默认值 |
  | :--: | :--: | :--: | :--: | :--: |
  | endTime | String, Number | 接收字符串形式的时间格式或者毫秒数 | 必填 | null |
  | startTime | String,Number | 接收字符串形式的时间格式或者毫秒数 | 选填 | null |
  | endText | String | 接收字符串文本 | 选填 | 该订单已超过支付时间 |
  | isSlot | Boolean | 用于构建自定义DOM接口，该接口与countdown事件配合使用| 选填 | false |

  ## event 事件

  | event name | 说明 | 返回值说明 |
  | :--: | :--: | :--: |
  | countdown | 用于自定义倒计时组件的DOM结构，这方法适用于复杂的倒计时UI，注意和isSlot接口配合使用，不然无法覆盖DOM结构 | Object |

  ## 版本记录

  + v1.0.3 新增自定义事件countdown和接口isSlot

  ## Bug&Tips

  + 组件是向上兼容，如果小程序版本库低于2.0.1 该组件库的 clearTimeout将会失效
  `,
]