// pages/vi_quantity/vi_quantity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    editIndex: 0,
    buyNum: 0,
    stock: 0,
    buyDetailNum: 10,
    isEdit: false,
    goodsList: [
      {
        num: 1,
        stock: 2344
      },
      {
        num: 80,
        stock: 12123123
      },
      {
        num: 7,
        stock: 79823
      }
    ]
  },

  numChange({ detail }) {
    if (this.data.isEdit) {
      this.setData({
        editIndex: detail.i,
        buyNum: detail.num,
        stock: this.data.goodsList[detail.i].stock
      })
      return false
    }
    this.setData({
      isEdit: true,
      editIndex: detail.i,
      buyNum: detail.num,
      stock: this.data.goodsList[detail.i].stock
    })
  },

  detailNumChange({ detail }) {
    this.setData({
      buyDetailNum: detail.num
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})