Component({
  properties: {
    list: {
      type: Array,
      value: []
    }
  },
  data: {
  },
  options: {
    multipleSlots: true
  },
  methods: {
    triggerToSelectChange() {
      this.triggerEvent('change')
    }
  }
})
