// pages/vi_switch/vi_switch.js
Page({
  data: {
    checked: false,
  },
  tirggerToSwitchChange: function (e) {
    this.setData({
      checked: e.detail
    })
    console.log('checked', this.data.checked)
  }
})