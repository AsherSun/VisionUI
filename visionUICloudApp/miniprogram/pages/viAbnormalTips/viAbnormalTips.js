const getMarkDown = require('../../mixins/getMarkDown')

Page({
  ...getMarkDown.methods,
  data: {
    tipsArr: [
      '啊哦，暂时还没有内容',
      '联系下客服试试吧'
    ],
    networkTipsArr: [
      '请关闭手机网络链接,会出现按钮'
    ],
    ...getMarkDown.data,
  },
  onLoad() {
    this.getMarkDown(this, 'viAbnormalTips')
  },
  triggerToRouter() {
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
  },
  onShareAppMessage() {
    return  {
      title: '微信小程序异常流组件'
    }
  },
})