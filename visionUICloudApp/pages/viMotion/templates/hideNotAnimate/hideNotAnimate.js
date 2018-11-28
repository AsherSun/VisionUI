const data = {
  isShow: false,
  enterAnimateName: 'bounceInUp',
  outAnimateName: 'bounceOutUp'
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