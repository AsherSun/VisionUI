const app = getApp();

Page({
  data: {
    shoppingCart: []
  },
  onLoad: function (options) {
    app.getShoppingCart().then(data => {
      this.setData({
        shoppingCart: data
      })
    }).catch(err => {
      wx.showToast({
        title: '数据获取失败',
        icon: 'none'
      })
    })
  },
})