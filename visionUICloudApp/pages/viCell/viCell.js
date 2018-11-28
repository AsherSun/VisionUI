const getMarkDown = require('../../mixins/getMarkDown')

Page({
  data: {
    ...getMarkDown.data,
  },
  ...getMarkDown.methods,
  onLoad() {
    this.getMarkDown(this, 'viCell')
    this.getMarkDown(this, 'viCellGroup')
  },
  onShareAppMessage: function () {
    return {
      title: "viCell组件"
    }
  },
})