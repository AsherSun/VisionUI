Component({
  properties: {
    link: {
      type: [String, Boolean],
      value: ''
    },
    iconName: {
      type: [String, Boolean],
      value: ''
    },
    iconColor: {
      type: String,
      value: '#333'
    },
    iconSize: {
      type: Number,
      value: 16
    },
    title: {
      type: String,
      value: ''
    },
    desc: {
      type: String,
      value: ''
    },
    line: {
      type: Boolean,
      value: false
    },
    linkType: {
      type: String,
      value: ''
    }
  },
  options: {
    multipleSlots: true
  },
  data: {
    isLastCell: false,
    isHaveCellGroup: false
  },
  relations: {
    '../vi-cell-group/index': {
      type: 'parent'
    }
  },
  methods: {
    triggerToNavigateTo() {
      if (typeof this.data.link !== 'string' || !this.data.link) { return false }
      switch (this.data.linkType) {
        case 'redirect':
          wx.redirectTo({url: this.data.link})
          break
        case 'switchTab':
          wx.switchTab({url: this.data.link})
          break
        case 'reLaunch':
          wx.reLaunch({url: this.data.link})
          break
        case 'navigateBack':
          wx.navigateBack({delta: this.data.link})
          break
        default:
          wx.navigateTo({url: this.data.link})
      }
    },
    updateIsLastCell(isLastCell) {
      console.log('isLastCell', isLastCell)
      this.setData({isLastCell, isHaveCellGroup: true})
    }
  }
})
