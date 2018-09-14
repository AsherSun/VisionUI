Component({
  properties: {
    ishide: {
      type: Boolean,
      value: false,
      observer(newVal) {
        this.setData({
          ishide: newVal,
          animation: true
        })
      }
    },
    position: {
      type: String,
      value: 'bottom'
    }
  },
  data: {
    animation: false,
    popupShow: 'bottomShow',
    popupHide: 'bottomHide',
    direction: false // false 为 top 和 bottom 方向 反之
  },
  attached() {
    switch (this.data.position) {
      case 'top':
        this.setData({
          popupShow: 'topShow',
          popupHide: 'topHide'
        })
        break
      case 'right':
        this.setData({
          popupShow: 'rightShow',
          popupHide: 'rightHide',
          direction: true
        })
        break
      case 'left':
        this.setData({
          popupShow: 'leftShow',
          popupHide: 'leftHide',
          direction: true
        })
        break
      default:
        this.setData({
          popupShow: 'bottomShow',
          popupHide: 'bottomHide'
        })
    }
  },
  methods: {
    hide() {
      this.triggerEvent('popuphide')
    }
  }
})
