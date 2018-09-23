Component({
  options: {
    multipleSlots: true
  },
  properties: {
    tips: {
      type: [String, Array],
      value: '',
      observer: function (newVal, odVal, changedPath) {
        this._tipsChange(newVal)
      }
    },
    'isIconSlot': {
      type: Boolean,
      value: false
    },
    button: {
      type: String,
      value: ''
    },
    iconName: {
      type: String,
      value: 'noData'
    },
    isTipsSlot: {
      type: Boolean,
      value: false
    }
  },
  lifetimes: {
    created: function () {
      let _this = this
      wx.getNetworkType({
        success: function (res) {
          let result = { networkType: 'none', isConnected: false }
          if (res.networkType !== 'none') {
            result.isConnected = true
            result.networkType = res.networkType
          } else {
            result.isConnected = false
            result.networkType = res.networkType
          }
          _this.triggerEvent('network_change', result)
        },
        fail: function (err) {
          _this.triggerEvent('network_change', err)
        }
      })
    },
    attached: function () {
      wx.onNetworkStatusChange((result) => {
        this.setData({
          isConnected: result.isConnected,
          networkType: result.networkType
        })
        this.triggerEvent('network_change', result)
      })
    }
  },
  data: {
    tipsIsArray: false,
    isConnected: true,
    networkType: null
  },
  externalClasses: ['abnormal-class', 'icon-class', 'tips-class'],
  methods: {
    triggerToTap() {
      this.triggerEvent('click')
    },
    triggerToRefresh() {
      this.triggerEvent('refresh', this.data.networkType)
    },
    _tipsChange(val) {
      if (val instanceof Array) {
        this.setData({
          tipsIsArray: true
        })
      }
    }
  }
})
