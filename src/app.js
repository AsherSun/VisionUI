//app.js
import ajax from '/utils/request.js'
import '/utils/mixins.js'
import serverData from '/api/index.js'
App({
  onLaunch: function () {
  },
  ...serverData,
  globalData: {
    userInfo: null
  }
})