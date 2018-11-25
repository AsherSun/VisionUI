const getMarkDown = require('../../mixins/getMarkDown')

Page({
  data: {
    ...getMarkDown.data,
  },
  ...getMarkDown.methods,
  onLoad() {
    this.getMarkDown(this, 'viCell')
  },
  onShareAppMessage: function () {
    return {
      title: "viCell组件"
    }
  },
})