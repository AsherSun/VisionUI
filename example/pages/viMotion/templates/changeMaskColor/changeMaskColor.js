const data = {
  isShow: false,
  enterAnimateName: 'wobble',
  outAnimateName: 'rollOut'
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