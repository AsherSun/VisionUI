const data = {
  isShow: false,
  enterAnimateName: 'flipInX',
  outAnimateName: 'flipOutX'
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