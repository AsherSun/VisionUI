Component({
  properties: {
    iconName: String,
    fontFamily: {
      type: String,
      value: 'custom-font'
    },
    setFontFamily: Boolean,
    fontSource: String,
  },
  externalClasses: ['icon-style', 'font-family-style'],
  lifetimes: {
    attached() {
      if (this.data.fontSource) this.loadFontFace();
    }
  },
  methods: {
    triggerToClickIcon() {
      this.triggerEvent("clickIcon")
    },
    loadFontFace() {
      const _this = this
      wx.loadFontFace({
        family: _this.data.fontFamily,
        source: _this.data.fontSource,
        success(res) {
          console.log('icon success', res.status)
        },
        fail: function(res) {
          console.log('icon fail', res.status, _this.data.fontSource)
        },
      });
    }
  }
})
