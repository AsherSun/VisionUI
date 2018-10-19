Page({
  data: {
    address: '',
    isHide: false,
    codeArr: require('./md.js')
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
  }
})
