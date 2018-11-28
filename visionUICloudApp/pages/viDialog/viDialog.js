const getMarkDown = require('../../mixins/getMarkDown')

Page({
  ...getMarkDown.methods,
  data: {
    defaultIsHide: false,
    confirmIsHide: false,
    alertIsHide: false,
    customIsHide: false,
    inputIsHide: false,
    ...getMarkDown.data,
  },

  onLoad() {
    this.getMarkDown(this, 'viDialog')
  },
  triggerToShowDefaultDialog() {
    this.setData({
      defaultIsHide: !this.data.defaultIsHide
    })
  },
  triggerToShowConfirmDialog() {
    this.setData({
      confirmIsHide: !this.data.confirmIsHide
    })
  },
  triggerToShowAlertDialog() {
    this.setData({
      alertIsHide: !this.data.alertIsHide
    })
  },
  triggerToShowCustomDialog() {
    this.setData({
      customIsHide: !this.data.customIsHide
    })
  },
  triggerToShowInputDialog() {
    this.setData({
      inputIsHide: !this.data.inputIsHide
    })
  },

  onShareAppMessage() {
    return {
      title: '微信小程序绘画窗组件'
    }
  }
})