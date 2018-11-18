const data = {
  isShow: false,
  enterAnimateName: 'rotateIn',
  outAnimateName: 'rotateOut'
}

const methods = {
  triggerToClickMaskNoHide() {
    this.setData({
      'maskNotHideData.isShow': !this.data.maskNotHideData.isShow
    })
  }
}

module.exports = {
  data,
  methods
}