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
  
]