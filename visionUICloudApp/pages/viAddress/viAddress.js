const getMarkDown = require('../../mixins/getMarkDown')

Page({
  ...getMarkDown.methods,
  data: {
    address: '',
    isHide: false,
    ...getMarkDown.data,
  },
  onLoad() {
    this.getMarkDown(this, 'viAddress')
  },
  selectAddress(e) {
    this.setData({
      isHide: !this.data.isHide
    })
  },
  addressChange({ detail }) {
    this.setData({
      address: detail.map(item => item.name).join('-')
    })
  },
  onShareAppMessage() {
    return {
      title: '微信小程序地址选择组件 vi-address'
    }
  }
})
