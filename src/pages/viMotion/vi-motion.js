const enterAnimateNameList = [
  'bounce',
  'flash',
  'pulse',
  'rubberBand',
  'shake',
  'headShake',
  'swing',
  'tada',
  'wobble',
  'jello',
  'bounceIn',
  'bounceInDown',
  'bounceInLeft',
  'bounceInRight',
  'bounceInUp',
  'fadeIn',
  'fadeInDown',
  'fadeInDownBig',
  'fadeInLeft',
  'fadeInLeftBig',
  'fadeInRight',
  'fadeInRightBig',
  'fadeInUp',
  'fadeInUpBig',
  'flipInX',
  'flipInY',
  'lightSpeedIn',
  'rotateIn',
  'rotateInDownLeft',
  'rotateInDownRight',
  'rotateInUpLeft',
  'rotateInUpRight',
  'jackInTheBox',
  'rollIn',
  'zoomIn',
  'zoomInDown',
  'zoomInLeft',
  'zoomInRight',
  'zoomInUp',
  'slideInDown',
  'slideInLeft',
  'slideInRight',
  'slideInUp'
]

let outAnimateNameList = [
  'hinge',
  'bounceOut',
  'bounceOutDown',
  'bounceOutLeft',
  'bounceOutRight',
  'bounceOutUp',
  'fadeOut',
  'fadeOutDown',
  'fadeOutDownBig',
  'fadeOutLeft',
  'fadeOutLeftBig',
  'fadeOutRight',
  'fadeOutRightBig',
  'fadeOutUp',
  'fadeOutUpBig',
  'flipOutX',
  'flipOutY',
  'lightSpeedOut',
  'rotateOut',
  'rotateOutDownLeft',
  'rotateOutDownRight',
  'rotateOutUpLeft',
  'rotateOutUpRight',
  'rollOut',
  'zoomOut',
  'zoomOutDown',
  'zoomOutLeft',
  'zoomOutRight',
  'zoomOutUp',
  'slideOutDown',
  'slideOutLeft',
  'slideOutRight',
  'slideOutUp'
]

Page({
  data: {
    mask: {
      showMaskMotion: false,
      enterAnimateName: 'rotateIn',
      outAnimateName: 'rotateOut'
    },
    animateList: {
      showMotion: false,
      enterAnimateNameList,
      outAnimateNameList,
      enterAnimateName: '',
      enterIndex: 0,
      outIndex: 0,
      outAnimateName: 'hinge'
    },
    hideNotAnimate: {
      showMotion: false,
      enterAnimateName: 'bounceInUp',
      outAnimateName: 'bounceOutUp'
    },
    maskColorAnimate: {
      showMotion: false,
      enterAnimateName: 'wobble',
      outAnimateName: 'rollOut" '
    },
    maskIsHideAnimate: {
      showMotion: false
    }
  },
  onLoad() {
  },
  enterPickerChange({ detail: { value } }) {
    this.setData({
      'animateList.enterAnimateName': enterAnimateNameList[value],
      'animateList.enterIndex': value,
      'animateList.showMotion': true
    })
  },
  outPickerChange({ detail: { value } }) {
    this.setData({
      'animateList.outAnimateName': outAnimateNameList[value],
      'animateList.outIndex': value,
      'animateList.showMotion': false
    })
  },
  triggerToHideMaskColor() {
    this.setData({
      'maskColorAnimate.showMotion': !this.data.maskColorAnimate.showMotion
    })
  },
  triggerToHideDialog() {
    this.setData({
      'animateList.showMotion': false
    })
  },
  triggerToMaskAnimateName() {
    this.setData({
      'mask.showMaskMotion': !this.data.mask.showMaskMotion
    })
  },
  triggerToMaskIsHide() {
    this.setData({
      'maskIsHideAnimate.showMotion': !this.data.maskIsHideAnimate.showMotion
    })
  },
  triggerToHideNotAnimate() {
    this.setData({
      'hideNotAnimate.showMotion': !this.data.hideNotAnimate.showMotion
    })
  }
})