// pages/vi_switch/vi_switch.js
Page({
  data: {
    switch1Checked: true,
  },
  switch1Change: function (e) {
    console.log('switch发生change事件', e.detail.value)
  }
})