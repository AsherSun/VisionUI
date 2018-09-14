Component({
  properties: {
    size: {
      type: String,
      value: 'default'
    },
    'type': {
      type: String,
      value: 'default'
    },
    loading: {
      type: Boolean,
      value: false
    },
    formType: {
      type: String,
      value: ''
    },
    openType: {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false
    },
    lang: {
      type: String,
      value: ''
    },
    hoverClass: {
      type: String,
      value: 'button-hover'
    },
    hoverStopPropagation: {
      type: Boolean,
      value: false
    },
    hoverStartTime: {
      type: Number,
      value: 20
    },
    hoverStayTime: {
      type: Number,
      value: 70
    },
    sessionFrom: {
      type: String,
      value: ''
    },
    sendMessageTitle: {
      type: String,
      value: ''
    },
    sendMessagePath: {
      type: String,
      value: ''
    },
    sendMessageImg: {
      type: String,
      value: ''
    },
    appParameter: {
      type: String,
      value: ''
    }
  },
  externalClasses: ['custom-class'],
  data: {

  },
  methods: {
    bindgetuserinfo(e) {
      this.triggerEvent('bindgetuserinfo', e)
    },
    bindcontact(e) {
      this.triggerEvent('bindcontact', e)
    },
    binderror(e) {
      this.triggerEvent('binderror', e)
    },
    bindopensetting(e) {
      this.triggerEvent('bindopensetting', e)
    }
  }
})
