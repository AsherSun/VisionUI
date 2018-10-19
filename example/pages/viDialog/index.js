Page({
  data: {
    defaultIsHide: false,
    confirmIsHide: false,
    alertIsHide: false,
    customIsHide: false,
    inputIsHide: false,
    codeArr: require('./md.js'),
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
  }
})