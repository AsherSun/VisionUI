// pages/vi_address/vi_address.js
Page({
  data: {
    address: '',
    isHide: false
  },
  selectAddress(e) {
    this.setData({
      isHide: !this.data.isHide
    })
  },
  addressChange({ detail }) {
    this.setData({
      address: detail.addressConcat
    })
  },
  onShareAppMessage: function () {

  }
})