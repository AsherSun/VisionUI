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
    inputType: {
      type: String,
      value: 'text'
    },
    maxlength: {
      type: Number,
      value: 140
    },
    disabled: {
      type: Boolean,
      value: false
    },
    confirmType: {
      type: String,
      value: 'done'
    },
    password: {
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
    triggerToConfirm(e) {
      if (this.data.input) {
        this.triggerEvent('confirm', e.detail)
      } else {
        this.triggerEvent('confirm', 'confirm')
      }
    },
    triggerToInput(e) {
      this.data.value = e.detail.value
      this.triggerEvent('input', e.detail)
    },
    triggerToFocus(e) {
      this.triggerEvent('focus', e.detail)
    },
    triggerToBlur(e) {
      this.triggerEvent('blur', e.detail)
    }
  }
})
