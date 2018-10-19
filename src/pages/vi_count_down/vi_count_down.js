Page({
  data: {
    countDown: {},
    dayCountDown:null,
    timersCountDown: null,
    customCountDown: null,
  },
  onLoad: function (options) {
  },
  triggerToCountdown({ detail }) {
    this.setData({
      countDown: detail
    })
  },
})