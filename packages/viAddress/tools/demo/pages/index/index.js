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
      address: detail.map(item => item.name).join('-')
    })
  }
})
