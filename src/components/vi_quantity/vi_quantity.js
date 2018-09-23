// components/vi_quantity/vi_quantity.js
/*
  商品数量编辑组件：
    @param { Boolean } hideTitle 是否隐藏头部
    @param { Number } goodsnumber 默认的数量
    @param { String | Number } quantity 默认的库存
    @param { Number } editindex 正在编辑的索引、适用于购物车列表
    @param { Function } change 数量改变触发的事件。如果用户输入的不是数字则返回1，如果用户输入的是 0 则返回 1, 如果为 空字符串，则返回 null, 其余情况返回的是用户正常输入的数字
*/
Component({
  /**
   * 组件的属性列表
   */
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
  /**
   * 组件的方法列表
   */
  methods: {
    add() { // 累加
      if (this._maxNumber()) return false
      this.setData({
        goodsnumber: ++this.data.goodsnumber
      })
      this.triggerEvent('change', { num: this.data.goodsnumber, i: this.data.editindex })
    },
    reduce() { // 减少
      if (this._minNumber()) return false
      this.setData({
        goodsnumber: --this.data.goodsnumber
      })
      this.triggerEvent('change', { num: this.data.goodsnumber, i: this.data.editindex })
    },
    changeValue(e) { // 输入值改变
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
    blurFn(e) { // 失去焦点
      let num = e.detail.value * 1
      this._blurAndConfirm(num)
    },
    confirmValue(e) { // 点击完成按钮
      let num = e.detail.value * 1
      this._blurAndConfirm(num)
    },
    _blurAndConfirm(num) { // 失去焦点或者点击完成按钮的逻辑
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
