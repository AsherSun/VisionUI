Component({
  properties: {
    activeText: {
      type: String,
      vlaue: ''
    },
    inactiveText: {
      type: String,
      value: ''
    },
    disable: {
      type: Boolean,
      value: false
    },
    checked: {
      type: Boolean,
      value: false
    },
    exterior: {
      type: Boolean,
      value: false
    }
  },
  options: {
    multipleSlots: true
  },
  methods: {
    triggerToChange() {
      if (this.data.disable) return false
      this.setData({
        checked: !this.data.checked
      })
      this.triggerEvent('change', this.data.checked)
    }
  }
})
