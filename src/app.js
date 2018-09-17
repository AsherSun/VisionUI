//app.js
import ajax from './src/utils/request.js'
import './src/utils/mixins.js'
import serverData from './src/api/index.js'
App({
  onLaunch: function () {
  },
  ...serverData,
  globalData: {
    userInfo: null
  }
})