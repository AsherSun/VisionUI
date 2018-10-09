
Page({
  data: {
    countDown: {},
    mdArr: require('./md.js')
  },
  triggerToCountdown({ detail }) {
    this.setData({
      countDown: detail
    })
  },
})