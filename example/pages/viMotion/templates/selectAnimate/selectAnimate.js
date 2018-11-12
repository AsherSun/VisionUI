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
      enterAnimateNameList: this.data.selectAnimateData.enterAnimateNameList[value],
      enterIndex: value,
      'selectAnimateData.isShow': true
    })
  },
  bindPickerChangeOut({ detail: { value } }) {
    this.setData({
      outAnimateNameList: this.data.selectAnimateData.outAnimateNameList[value],
      outIndex: value,
      'selectAnimateData.isShow': false
    })
  },
}

module.exports = {
  data,
  methods,
}