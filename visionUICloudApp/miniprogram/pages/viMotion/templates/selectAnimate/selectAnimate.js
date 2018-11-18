const data = {
  isShow: false,
  enterAnimateName: 'rotateIn',
  outAnimateName: 'rotateOut',
  enterIndex: 0,
  outIndex: 0,
  enterAnimateNameList: require('./enterAnimateList.js'),
  outAnimateNameList: require('./outAnimateList.js'),
}

const methods = {
  triggerToSelectAnimate() {
    this.setData({
      'selectAnimateData.isShow': false
    })
  },
  bindPickerChangeEnter({ detail: { value } }) {
    this.setData({
      'selectAnimateData.enterAnimateName': this.data.selectAnimateData.enterAnimateNameList[value],
      'selectAnimateData.enterIndex': value,
      'selectAnimateData.isShow': true
    })
  },
  bindPickerChangeOut({ detail: { value } }) {
    this.setData({
      'selectAnimateData.outAnimateName': this.data.selectAnimateData.outAnimateNameList[value],
      'selectAnimateData.outIndex': value,
      'selectAnimateData.isShow': false
    })
  },
}

module.exports = {
  data,
  methods,
}