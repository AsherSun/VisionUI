const maskNotHide = require('./templates/maskNotHide/maskNotHide.js');
const hideNotAnimate = require('./templates/hideNotAnimate/hideNotAnimate.js');
const changeMaskColor = require('./templates/changeMaskColor/changeMaskColor.js');
const hideMask = require('./templates/hideMask/hideMask.js');
const animateDuration = require('./templates/animateDuration/animateDuration.js');
const selectAnimate = require('./templates/selectAnimate/selectAnimate.js');
const getMarkDown = require('../../mixins/getMarkDown');
const app = getApp()

Page({
  ...maskNotHide.methods,
  ...hideNotAnimate.methods,
  ...changeMaskColor.methods,
  ...hideMask.methods,
  ...animateDuration.methods,
  ...selectAnimate.methods,
  ...getMarkDown.methods,
  data: {
    maskNotHideData: maskNotHide.data,
    hideNotAnimateData: hideNotAnimate.data,
    animateDurationData: animateDuration.data,
    selectAnimateData: selectAnimate.data,
    changeMaskColorData: changeMaskColor.data,
    hideMaskData: hideMask.data,
    ...getMarkDown.data,
  },
  onLoad() {
    this.getMarkDown(this, 'viMotion')
  },
  onShareAppMessage: function () {
    return {
      title: "viMotion定制化运动组件"
    }
  },
  triggerToLongpress(e) {
    console.log(e.detail)
    app.copyTxt('asdfklasdjfl')
  }
})