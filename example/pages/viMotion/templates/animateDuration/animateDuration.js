const data = {
  isShow: false,
  enterAnimateName: 'rotateIn',
  outAnimateName: 'rotateOut'
}

const methods = {
  triggerToAnimateDuration() {
    this.setData({
      'animateDurationData.isShow': !this.data.animateDurationData.isShow
    })
  }
}

module.exports = {
  data,
  methods
}