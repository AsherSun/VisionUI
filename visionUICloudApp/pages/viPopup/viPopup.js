const getMarkDown = require('../../mixins/getMarkDown')

Page({
  ...getMarkDown.methods,
  data: {
    popupHide_bottom: false,
    popupHide_top: false,
    popupHide_left: false,
    popupHide_right: false,
    ...getMarkDown.data,
  },

  onLoad() {
    this.getMarkDown(this, 'viPopup')
  },

  popupBottom() {
    this.setData({
      popupHide_bottom: !this.data.popupHide_bottom
    })
  },
  popupTop() {
    this.setData({
      popupHide_top: !this.data.popupHide_top
    })
  },
  popupLeft() {
    this.setData({
      popupHide_left: !this.data.popupHide_left
    })
  },
  popupRight() {
    this.setData({
      popupHide_right: !this.data.popupHide_right
    })
  },

  onShareAppMessage() {
    return {
      title: '微信小程序抽屉组件 vi-popup'
    }
  },
})