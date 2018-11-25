const getMarkDown = require('../../mixins/getMarkDown')

Page({
  ...getMarkDown.methods,
  data: {
    countDown: {},
    ...getMarkDown.data
  },
  
  onLoad() {
    this.getMarkDown(this, 'viCountDown')
  },

  triggerToCountdown({ detail }) {
    this.setData({
      countDown: detail
    })
  },

  onShareAppMessage() {
    return {
      title: '微信小程序倒计时组件'
    }
  }
})