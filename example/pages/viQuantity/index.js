Page({
  data: {
    codeArr: require('./md.js'),
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
    this.setData({
      isEdit: true,
      editIndex: detail.i,
      buyNum: detail.num,
      stock: this.data.goodsList[detail.i].stock,
      goodsList: this.data.goodsList.map((item, i) => {
        if (detail.i === i) {
          item.num = detail.num
        }
        return item
      })
    })
  },

  detailNumChange({ detail }) {
    this.setData({
      buyDetailNum: detail.num
    })
  },
})