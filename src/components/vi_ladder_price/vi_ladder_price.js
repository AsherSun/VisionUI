// components/vi_ladderPrice/vi_ladderPrice.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ladderprice: {
      type: Array,
      default: [],
      observer: function (newValue, oldValue) {
        if (!newValue[0]) return false
        this._ladderPriceReckon(newValue)
      }
    },
    isDefaultActive: {
      type: Number,
      default: 0,
      observer: function (newValue, oldValue) {
        if (newValue === 0) return false
        this._isDefaultActive(newValue)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    ladderPrice: [],
    activeIndex: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    timeSelect({ currentTarget: { dataset } }) { // 阶梯价选择
      this.setData({
        activeIndex: dataset.i
      })
      this.triggerEvent('selected', this.data.ladderPrice[dataset.i])
    },
    _ladderPriceReckon(value) {// 阶梯价计算
      this.setData({
        ladderPrice: value.map((item, index) => {
          item.label = ''
          item.value = index
          switch (item.dateStatus) {
            case 0:
              item.label = `${item.deliveryDay}天后发货`
              break;
            case 1:
              item.label = `${item.deliveryDay}周后发货`
              break;
            case 2:
              item.label = `${item.deliveryDay}月后发货`
              break;
            default:
              item.label = `${item.deliveryDay}年后发货`
              break
          }
          switch (item.discountType) {
            case 0:
              item.label += ` 折扣${item.discount}`
              break;
            case 1:
              item.label += ` 优惠${item.discount}`
              break;
          }
          return item
        })
      })
    },
    _isDefaultActive(value) { // 是否默认选中
      if (this.data.activeIndex !== null) return false
      this.setData({
        activeIndex: --value
      })
    }
  }
})
