const app = getApp()

Component({
  properties: {
    tips: {
      type: String,
      value: ''
    }
  },
  methods: {
    triggerToLongpress(e) {
      console.log(e)
      app.copyTxt(this.data.tips)
    }
  }
})
