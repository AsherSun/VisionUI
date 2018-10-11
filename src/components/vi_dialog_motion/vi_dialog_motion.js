Component({
  properties: {
    ishide: {
      type: Boolean,
      value: false,
    },
    animateName: {
      type: String,
      value: 'bounce'
    }
  },
  methods: {
    triggerToHide(e) {
      this.triggerEvent('hide', this.data.ishide)
    }
  },
})
