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
    input: {
      type: Boolean,
      value: false
    },
    confirm: {
      type: Boolean,
      value: false
    },
    alert: {
      type: Boolean,
      value: false
    },
    custom: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: '请输入内容'
    },
    value: {
      type: String,
      value: ''
    },
    maxlength: {
      type: Number,
      value: 100
    },
    inputType: {
      type: String,
      value: ''
    }
  },
  data: {
    animation: false,
    isFocus: false
  },
  methods: {
    triggerToCancel () {
      this.triggerEvent('cancel', 'cancel')
    },
    triggerToConfirm () {
      this.triggerEvent('confirm', 'confirm')
    },
    triggerToInput(e) {
      this.setData({
      })
    },
    triggerToFocus() {
      this.setData({
        isFocus: true
      })
      this.triggerEvent('focus')
    }
  }
})
