const data = {
  isShow: false,
  enterAnimateName: 'tada',
  outAnimateName: 'fadeOut'
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