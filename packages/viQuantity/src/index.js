Component({
  properties: {
    goodsnumber: {
      type: Number,
      value: 1
    },
    quantity: {
      type: [String, Number],
      value: 0
    },
    editindex: {
      type: Number,
      value: 0
    }
  },
  externalClasses: ['quantity-class'],
  methods: {
    add() {
      if (this._maxNumber()) return false
      this.setData({
        goodsnumber: ++this.data.goodsnumber
      })
      this.triggerEvent('change', { num: this.data.goodsnumber, i: this.data.editindex })
    },
    reduce() {
      if (this._minNumber()) return false
      this.setData({
        goodsnumber: --this.data.goodsnumber
      })
      this.triggerEvent('change', { num: this.data.goodsnumber, i: this.data.editindex })
    },
    changeValue(e) {
      let detail = e.detail
      if (detail.value === '0') {
        wx.showToast({
          title: '亲爱的顾客，最少购买一件商品哦',
          icon: 'none'
        })
        this.triggerEvent('change', { num: 1, i: this.data.editindex })
        return 1
      }
      if (detail.value !== '' && !(detail.value * 1)) {
        wx.showToast({
          title: '亲爱的顾客，请您输入数字',
          icon: 'none'
        })
        this.triggerEvent('change', { num: 1, i: this.data.editindex })
        return 1
      }
      let num = detail.value || null
      if (detail.value * 1 > this.data.quantity) {
        wx.showToast({
          title: `亲爱的顾客，宝贝的最大库存为${this.data.quantity}`,
          icon: 'none'
        })
        num = this.data.quantity
        this.triggerEvent('change', { num, i: this.data.editindex })
        return this.data.quantity
      }
      this.triggerEvent('change', { num, i: this.data.editindex })
    },
    blurFn(e) {
      let num = e.detail.value * 1
      this._blurAndConfirm(num)
    },
    confirmValue(e) {
      let num = e.detail.value * 1
      this._blurAndConfirm(num)
    },
    _blurAndConfirm(num) {
      if (!num) {
        this.setData({
          goodsnumber: 1
        })
        this.triggerEvent('change', { num: 1, i: this.data.editindex })
      }
    },
    _maxNumber() { // 最大商品购买量判断
      if (this.data.goodsnumber >= this.data.quantity) {
        wx.showToast({
          title: '亲爱的顾客，您购买的数量请不要超过最大库存哦',
          icon: 'none'
        })
        return true
      }
      return false
    },
    _minNumber() { // 最小商品购买量判断
      if (this.data.goodsnumber <= 1) {
        wx.showToast({
          title: '亲爱的顾客，最少购买一件商品哦',
          icon: 'none'
        })
        return true
      }
      return false
    }
  }
})
