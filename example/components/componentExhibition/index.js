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
