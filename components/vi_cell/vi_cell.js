Component({
  properties: {
    link: {
      type: [String, Boolean],
      value: ''
    },
    iconName: {
      type: [String, Boolean],
      value: ''
    },
    iconColor: {
      type: String,
      value: '#333'
    },
    iconSize: {
      type: Number,
      value: 16
    },
    title: {
      type: String,
      value: ''
    },
    desc: {
      type: String,
      value: ''
    }
  },
  options: {
    multipleSlots: true
  },
  data: {

  },
  methods: {

  }
})
