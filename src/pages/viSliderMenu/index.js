const app = getApp();

Page({
  data: {
    shoppingCart: []
  },
  onLoad: function (options) {
    app.getShoppingCart().then(data => {
      this.setData({
        shoppingCart: data.map(item => {
          item.menuWidth = 130
          return item
        })
      })
    }).catch(err => {
      wx.showToast({
        title: '数据获取失败',
        icon: 'none'
      })
    })
  },
  triggerToTap(e) {
    let { currentTarget: { dataset: { i } } } = e
    this.setData({
      shoppingCart: this.data.shoppingCart.map((item, index) => {
        if (i !== index) {
          item.sliderNum = 0
        }
        return item
      })
    })
  }
})