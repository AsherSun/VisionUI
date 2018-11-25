const maskNotHide = require('./templates/maskNotHide/maskNotHide.js');
const hideNotAnimate = require('./templates/hideNotAnimate/hideNotAnimate.js');
const changeMaskColor = require('./templates/changeMaskColor/changeMaskColor.js');
const hideMask = require('./templates/hideMask/hideMask.js');
const animateDuration = require('./templates/animateDuration/animateDuration.js');
const selectAnimate = require('./templates/selectAnimate/selectAnimate.js');

Page({
  ...maskNotHide.methods,
  ...hideNotAnimate.methods,
  ...changeMaskColor.methods,
  ...hideMask.methods,
  ...animateDuration.methods,
  ...selectAnimate.methods,
  data: {
    maskNotHideData: maskNotHide.data,
    hideNotAnimateData: hideNotAnimate.data,
    animateDurationData: animateDuration.data,
    selectAnimateData: selectAnimate.data,
    changeMaskColorData: changeMaskColor.data,
    hideMaskData: hideMask.data,
    docs: {
      name: '',
      document: '',
      codeExampleList: []
    }
  },
  onLoad() {
    this.getMarkDown()
  },
  getMarkDown() {
    const DB = wx.cloud.database({
      env: 'dev-a5cf14'
    })
    let collection = DB.collection('docs')
    collection.doc('viMotion').get().then(({data}) => {
      this.setData({
        'docs.name': data.docsName,
        'docs.document': data.document,
        'docs.codeExampleList': data.codeList
      })
      console.log(this.data.docs, data)
    }).catch(err => {
      console.log(err)
    })
  },
  onShareAppMessage: function () {
    return {
      title: "viMotion定制化运动租金"
    }
  }
})