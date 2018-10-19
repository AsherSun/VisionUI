const TemplateParse = require('./template.js');
Component({
  properties: {
    desc: {
      type: String,
      value: ''
    },
    code: {
      type: String,
      value: ''
    },
    showCode: {
      type: Boolean,
      value: true,
      observer: function (newValue, oldValue) {
        if (newValue) return false
        this.setData({
          isShowCode: newValue ? 'hidden' :'show'
        })
      }
    }
  },
  data: {
    isShowCode: 'hidden',
    isShowCodeFlag: false,
    codeSet: '',
  },
  methods: {
    triggerToShowCode() {
      if (!this.data.isShowCodeFlag) {
        this.setData({
          isShowCode: 'show',
          isShowCodeFlag: true
        })
      } else {
        this.setData({
          isShowCode: 'hidden',
          isShowCodeFlag: false
        })
      }
    }
  }
})
