// pages/vi_count_down/vi_count_down.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countDown: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  triggerToCountdown({ detail }) {
    this.setData({
      countDown: detail
    })
    console.log(detail)
  }
})