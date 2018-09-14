// components/vi_Dialog/vi_dialog.js
Component({
  options: {
    multipleSlots: true
  },
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
    title: {
      type: String,
      value: '提示'
    },
    typeConfirm: {
      type: Boolean,
      value: false
    },
    typeAlert: {
      type: Boolean,
      value: false
    },
    typeCustom: {
      type: Boolean,
      value: false
    }
  },
  data: {
    animation: false
  },
  methods: {
    triggerToCancel () {
      this.triggerEvent('cancel', 'cancel')
    },
    triggerToConfirm () {
      this.triggerEvent('confirm', 'confirm')
    }
  }
})
