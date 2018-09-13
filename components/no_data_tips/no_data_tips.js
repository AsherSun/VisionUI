Component({
  properties: {
    tips: {
      type: String,
      value: ''
    },
    'isIconSlot': {
      type: Boolean,
      value: false
    },
    buttonContent: {
      type: String,
      value: ''
    }
  },
  externalClasses: ['no-data-class', 'no-data-icon-class', 'no-data-txt-class'],
  methods: {
    triggerToTap() {
      this.triggerEvent('click')
    }
  }
})
