module.exports = [
  `
  \`\`\`html
  <template>
    <view style="position:relative; height: 200px; background: #FFF; font-size: 12px;">
      <abnormal-tips></abnormal-tips>
    </view>
  </template>
  \`\`\`
  `,
  `
  \`\`\`html
  <template>
    <view style="position:relative; height: 200px; background: #FFF; font-size: 12px;">
      <abnormal-tips tips="该分类下暂无商品数据"></abnormal-tips>
    </view>
  </template>
  \`\`\`
  `,
  `
  \`\`\`html
  <template>
    <view style="position:relative; height: 200px; background: #FFF; font-size: 12px;">
      <abnormal-tips tips="{{tipsArr}}"></abnormal-tips>
    </view>
  </template>
  \`\`\`
  \`\`\`javascript
  <script>
    Page({
      data: {
        tipsArr: [
          '啊哦，暂时还没有内容',
          '联系下客服试试吧'
        ]
      },
    })
  </script>
  \`\`\`
  `,
  `
  \`\`\`html
  <template>
    <view style="position:relative; height: 200px; background: #FFF; font-size: 12px;">
      <abnormal-tips icon-class="changeIconColor"></abnormal-tips>
    </view>
  </template>
  \`\`\`
  \`\`\`css
  <style>
    .changeIconColor {
      color: #eee;
    }
  </style>
  \`\`\`
  `,
  `
  \`\`\`html
  <template>
    <view style="position:relative; height: 200px; background: #FFF; font-size: 12px;">
      <abnormal-tips tips-class="changeTextColor"></abnormal-tips>
    </view>
  </template>
  \`\`\`
  \`\`\`css
  <style>
    .changeTextColor {
      color: blue;
    }
  </style>
  \`\`\`
  `,
  `
  \`\`\`html
  <template>
    <view style="position:relative; height: 200px; background: #FFF; font-size: 12px;">
      <abnormal-tips is-icon-slot bind:refresh="triggerToRefresh">
        <view slot="icon">我是替换的ICON</view>
      </abnormal-tips>
    </view>
  </template>
  \`\`\`
  `,
  `
  \`\`\`html
  <template>
    <view style="position:relative; height: 200px; background: #FFF; font-size: 12px;">
      <abnormal-tips is-tips-slot bind:refresh="triggerToRefresh">
        <view slot="tips">我是替换的文案提示</view>
      </abnormal-tips>
    </view>
  </template>
  \`\`\`
  `,
  `
  \`\`\`html
  <template>
    <view style="position:relative; height: 200px; background: #FFF; font-size: 12px;">
      <view class="title">extend: 断网刷新按钮</view>
      <abnormal-tips
        tips="{{networkTipsArr}}"
        bind:network_change="networkChange"
        bind:refresh="triggerToRefresh">
      </abnormal-tips>
    </view>
  </template>
  \`\`\`
  \`\`\`javascript
  <script>
    Page({
      data: {
        networkTipsArr: [
          '请关闭手机网络链接,会出现按钮'
        ],
      },
      triggerToRefresh({ detail }) {
        console.log(detail)
      },
      networkChange({ detail }) {
        this.data.networkTipsArr[1] = '当前网络环境：' + detail.networkType
        this.setData({
          networkTipsArr: this.data.networkTipsArr
        })
      }
    })
  </script>
  \`\`\`
  `,
  `
  \`\`\`html
  <template>
    <view style="position:relative; height: 200px; background: #FFF; font-size: 12px;">
      <abnormal-tips
        button="返回首页" 
        tips="啊哦，该分类下暂无商品, 去其他分类下看看吧"
        bind:click="triggerToRouter"
        bind:refresh="triggerToRefresh">
      </abnormal-tips>
    </view>
  </template>
  \`\`\`
  \`\`\`javascript
  <script>
    Page({
      triggerToRouter() {
        console.log('triggerToRouter')
        wx.switchTab({
          url: '/pages/index/index',
        })
      },
      triggerToRefresh({ detail }) {
        console.log(detail)
      },
    })
  </script>
  \`\`\`
  `,
  `
  \`\`\`html
  <template>
    <view style="position:relative; height: 200px; background: #FFF; font-size: 12px;">
      <abnormal-tips
        icon-name="flee"
        tips="啊哦，服务器走丢了"
        bind:refresh="triggerToRefresh">
      </abnormal-tips>
    </view>
  </template>
  \`\`\`
  \`\`\`javascript
  <script>
    Page({
      triggerToRefresh({ detail }) {
        console.log(detail)
      },
    })
  </script>
  \`\`\`
  `,
  `
  \`\`\`html
  <template>
    <view style="position:relative; height: 200px; background: #FFF; font-size: 12px;">
      <abnormal-tips
        icon-name="offline"
        tips="啊哦，网络连接失败"
        bind:refresh="triggerToRefresh">
      </abnormal-tips>
    </view>
  </template>
  \`\`\`
  \`\`\`javascript
  <script>
    Page({
      triggerToRefresh({ detail }) {
        console.log(detail)
      },
    })
  </script>
  \`\`\`
  `,
  `
  # 异常信息提示组件

  ## 使用

  > npm i vi-abnormal-tips

  > 使用微信开发者工具构建NPM并使用NPM模块

  > 打开小程序页面的json配置.

  \`\`\`json
  {
    "usingComponents": {
      "abnormal-tips": "vi-abnormal-tips"
    }
  }
  \`\`\`


  ## 属性

  | 接口 | 数据类型 | 说明 | 选项 | 默认值 |
  | :--: | :--: | :--: | :--: | :--: |
  | tips | String | 组件的提示内容 | 选填 | 暂无内容 |
  | isIconSlot | Boolean | 是否使用外部ICON或图片 | 选填 | false |
  | button | String | 提示按钮的内容 | 选填 | '' |
  | iconName | String | 组件内置的iconfont, 详细内容见下方的iconfont解释 | 选填 | noData |
  | isTipsSlot | Boolean | 是否使用自定义tips提示内容 | 选填 | false |

  ## 事件

  | 接口 | 说明 | 返回值 |
  | :--: | :--: | :--: |
  | click | tips button按钮点击事件 | 返回当前网络类型：wifi、4G、3G、2G、none |
  | refresh | 刷新按钮事件 | 返回当前网络类型：wifi、4G、3G、2G、none |
  | network_change | 获取当前网络的变化 | 返回当前网络类型：wifi、4G、3G、2G、none |

  ## externalClasses

  | 接口 | 说明 |
  | :--: | :--: |
  | abnormal-class | 组件Root级别的样式 |
  | icon-class | iconfont样式 |
  | tips-class | 提示文件样式 |

  ## iconfont

  | 名称 | 说明 |
  | :--: | :--: |
  | noData | 无数据的iconfont |
  | flee | 服务器出错的iconfont |
  | offline | 断网的iconfont |

  ## Bug&Tips

  + 由于小程序的限制，组件内部的样式作用不到 slot 插槽 上。所以如果自定义组件 icon 可能会导致样式不一致。
  `,
  
]