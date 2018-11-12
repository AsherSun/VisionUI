const data = {
  isShow: false,
  enterAnimateName: 'rotateIn',
  outAnimateName: 'rotateOut'
}

const methods = {
  triggerToHideMask() {
    this.setData({
      'hideMaskData.isShow': !this.data.hideMaskData.isShow
    })
  }
}

module.exports = {
  data,
  methods
}