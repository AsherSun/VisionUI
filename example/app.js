//app.js
import ajax from '/utils/request.js'
import serverData from '/api/index.js'
App({
  onLaunch: function() {},
  globalData: {
    userInfo: null
  },
  ...serverData,
})