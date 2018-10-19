//app.js
import ajax from '/utils/request.js'
import '/utils/mixins.js'
import serverData from '/api/index.js'
App({
  onLaunch: function () {
    wx.getUserInfo({
      withCredentials: true,
      success: function(res) {
        console.log(res)
      },
      fail: function(err) {
        console.log(err)
      }
    })
  },
  ...serverData,
  globalData: {
    userInfo: null
  }
})