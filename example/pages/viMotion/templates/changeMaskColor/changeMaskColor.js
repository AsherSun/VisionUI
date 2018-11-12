const data = {
  isShow: false,
  enterAnimateName: 'rotateIn',
  outAnimateName: 'rotateOut'
}

const methods = {
  triggerToChangeMaskColor() {
    this.setData({
      'changeMaskColorData.isShow': !this.data.changeMaskColorData.isShow
    })
  }
}

module.exports = {
  data,
  methods
}