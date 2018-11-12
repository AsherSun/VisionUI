const data = {
  isShow: false,
  enterAnimateName: 'rotateIn',
  outAnimateName: 'rotateOut'
}

const methods = {
  triggerToHideNotAnimate() {
    this.setData({
      'hideNotAnimateData.isShow': !this.data.hideNotAnimateData.isShow
    })
  }
}

module.exports = {
  data,
  methods
}