const app = getApp()
Page({
  data: {
    shoppingCartList: [],
    checkboxList: []
  },
  onLoad() {
    this.getShoppingCart()
  },
  getShoppingCart() {
    app.getShoppingCart().then(data => {
      this.setData({
        shoppingCartList: data,
        checkboxList: data.map(item => {
          return {
            value: item.cartId,
            checked: false
          }
        })
      })
      console.log(this.data.shoppingCartList)
    }).catch(err => {
      console.log(err)
    })
  },
  triggerToSelectChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  }
})