// const app = getApp();
const getMarkDown = require('../../mixins/getMarkDown')

Page({
  ...getMarkDown.methods,
  data: {
    ...getMarkDown.data,
    shoppingCart: []
  },
  onLoad: function (options) {
    this.getShooping()
    this.getMarkDown(this, 'viSliderMenu')
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
  },
  getShooping() {
    const DB = wx.cloud.database({
      env: 'dev-a5cf14',
    })
    let collection = DB.collection('mockData')
    collection.doc('5bfab9e6989da70ebc42fb93').get().then(({data}) => {
      this.setData({
        shoppingCart: data.data.map(item => {
          item.menuWidth = 130
          return item
        })
      })
    }).catch(err => {
      console.log(err)
    })
  },
  onShareAppMessage() {
    return {
      title: '微信小程序滑动菜单组件'
    }
  }
})