Component({
  options: {
    multipleSlots: true
  },
  properties: {
    animationDuration: {
      type: Number,
      value: 0.5
    },
    animationTimingFn: {
      type: String,
      value: 'ease-in'
    },
    menuWidth: { // 单位rpx
      type: Number,
      value: 0
    },
    maxSliderNum: {
      type: Number,
      value: 30
    },
    sliderNum: {
      type: Number,
      value: 0
    },
  },
  data: {
    startX: 0,
    moveX: 0,
    endX: 0,
  },
  methods: {
    triggerToTouchStart({ changedTouches }) {
      if (changedTouches.length > 1 ) { return false }
      let { clientX } = changedTouches[0]
      this.getXcoordinate('startX', clientX)
      this.triggerEvent("tap", clientX)
    },
    triggerToTouchMove({ changedTouches }) {
      if (changedTouches.length > 1) { return false }
      let { clientX } = changedTouches[0]
      this.getXcoordinate('moveX', clientX)
      let sliderNum = this.data.startX - this.data.moveX
      if (sliderNum >= this.data.menuWidth) {
        this.setData({
          sliderNum: this.data.menuWidth
        })
        return false
      }
      this.setData({
        sliderNum: sliderNum
      })
      if (sliderNum > this.data.maxSliderNum) { // 开始滑动
        this.setData({
          sliderNum: this.data.menuWidth
        })
      }
    },
    triggerToTouchEnd({ changedTouches }) {
      if (changedTouches.length > 1) { return false }
      let { clientX } = changedTouches[0]
      this.getXcoordinate('endX', clientX)
      let sliderNum = this.data.startX - this.data.endX
      if (sliderNum < this.data.maxSliderNum) {
        this.setData({
          sliderNum: 0
        })
      }
    },
    getXcoordinate(name, clientX) {
      this.data[name] = clientX
    }
  }
})
