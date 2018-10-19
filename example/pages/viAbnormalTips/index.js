Page({
  data: {
    tipsArr: [
      '啊哦，暂时还没有内容',
      '联系下客服试试吧'
    ],
    networkTipsArr: [
      '请关闭手机网络链接,会出现按钮'
    ],
    codeArr: require('./md.js')
  },
  triggerToRouter() {
    console.log('triggerToRouter')
    wx.switchTab({
      url: '/pages/index/index',
    })
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